
// -----------------------------------------------------------------------------
// Push-to-talk
// -----------------------------------------------------------------------------
var _talk = keyboard_check(ptt_key);

if (_talk && !ptt_held)
{
	ptt_held = true;
	recording = true;
	steam_user_start_voice_recording();
	// Lets Steam know we're talking in-game (suppresses the Steam UI voice chat mic).
	steam_friends_set_in_game_voice_speaking(my_steam_id, true);
}
else if (!_talk && ptt_held)
{
	ptt_held = false;
	// Steam keeps recording for a short moment after this (people release
	// push-to-talk early), so keep calling steam_user_get_voice until it
	// reports NotRecording.
	steam_user_stop_voice_recording();
}

if (keyboard_check_pressed(loopback_key))
{
	loopback = !loopback;
}

// -----------------------------------------------------------------------------
// Capture and send (should run every frame while recording to avoid gaps)
// -----------------------------------------------------------------------------
if (recording)
{
	var _available = steam_user_get_available_voice();
	available_bytes = (_available.result == SteamApiVoiceResult.Ok) ? _available.compressed_bytes : 0;

	// Make sure all available data fits in a single read.
	if (available_bytes > buffer_get_size(voice_buffer))
	{
		buffer_resize(voice_buffer, available_bytes);
	}

	var _voice = steam_user_get_voice(true, voice_buffer, false, voice_unused_buffer, 0);

	switch (_voice.result)
	{
		case SteamApiVoiceResult.Ok:
			var _written = _voice.written_compressed;
			if (_written > 0)
			{
				var _buffer = voice_buffer;
				var _channel = voice_channel;
				var _sent = 0;

				// Send the compressed packet as-is to every selected friend.
				// Voice tolerates loss, so it is sent unreliably with no Nagle delay.
				with (obj_steam_friends_friend_select)
				{
					if (!selected) continue;
					steam_networking_messages_send_message_to_user(data.steam_id, _buffer, SteamNetworkingSendFlags.UnreliableNoNagle, _channel, 0, _written);
					_sent++;
				}

				if (_sent > 0)
				{
					sent_packets += _sent;
					sent_bytes += _written * _sent;
				}

				if (loopback)
				{
					voice_play(my_steam_id, voice_buffer, 0, _written);
				}
			}
			break;

		case SteamApiVoiceResult.NoData:
			break;

		case SteamApiVoiceResult.NotRecording:
			// Only finish once the key was released (and the recording tail drained).
			if (!ptt_held)
			{
				recording = false;
				available_bytes = 0;
				steam_friends_set_in_game_voice_speaking(my_steam_id, false);
			}
			break;

		default:
			last_error = _voice.result;
			break;
	}
}

// -----------------------------------------------------------------------------
// Receive and play
// -----------------------------------------------------------------------------
var _messages = steam_networking_messages_receive_messages_on_channel(voice_channel, recv_buffer, 32);
for (var _i = 0; _i < array_length(_messages); _i++)
{
	var _msg = _messages[_i];
	if (_msg.size <= 0) continue;

	received_packets++;
	received_bytes += _msg.size;

	voice_play(_msg.steam_id_remote, recv_buffer, _msg.offset, _msg.size);
}
