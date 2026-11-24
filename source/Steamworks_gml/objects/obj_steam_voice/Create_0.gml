
// =============================================================================
// Steam Voice demo
// -----------------------------------------------------------------------------
// Push-to-talk voice chat between two (or more) GameMaker clients:
//
//  1. Capture : steam_user_start_voice_recording / steam_user_stop_voice_recording
//               steam_user_get_available_voice / steam_user_get_voice
//  2. Send    : steam_networking_messages_send_message_to_user (P2P, unreliable)
//  3. Receive : steam_networking_messages_receive_messages_on_channel
//  4. Play    : steam_user_decompress_voice -> GameMaker audio play queue
//
// Steam's compressed voice packets are opaque; they are sent as-is and only
// decompressed on the receiving end into raw mono 16-bit PCM.
//
// To test: run the game on two machines logged into two Steam accounts that are
// friends, open this room on both, select each other in the friend list, then
// hold [V] to talk. Press [L] to hear your own voice (loopback) on one machine.
// =============================================================================

// Channel 0 is used by the "Net Messages" demo, so voice goes on its own channel.
voice_channel = 1;
ptt_key = ord("V");
loopback_key = ord("L");

my_steam_id = steam_user_get_steam_id();

// Native sample rate of the Steam voice decoder: decompressing to this rate costs
// the least CPU. GameMaker audio queues accept 1000..48000 Hz and Steam decodes
// 11025..48000 Hz, so clamp just in case.
sample_rate = clamp(steam_user_get_voice_optimal_sample_rate(), 11025, 48000);

// Destination for compressed audio coming out of steam_user_get_voice (8KiB+ recommended).
voice_buffer = buffer_create(8192, buffer_fixed, 1);
// steam_user_get_voice still takes a buffer for the deprecated "uncompressed" output;
// we never ask for it, so a 1 byte placeholder is enough.
voice_unused_buffer = buffer_create(1, buffer_fixed, 1);
// Incoming P2P messages are copied in here (each message gets its own offset/size).
recv_buffer = buffer_create(64 * 1024, buffer_fixed, 1);
// Scratch output of steam_user_decompress_voice (20KiB recommended starting size).
pcm_buffer = buffer_create(20 * 1024, buffer_fixed, 1);

ptt_held = false;   // push-to-talk key is currently held
recording = false;  // Steam is recording (stays true after release until the tail is drained)
loopback = false;   // also play our own voice locally
last_error = undefined;

available_bytes = 0;
sent_packets = 0;
sent_bytes = 0;
received_packets = 0;
received_bytes = 0;

// One playback stream per remote speaker, keyed by string(steam_id):
// { steam_id, queue, sound, pending, last_heard }
speakers = {};

// Accept incoming P2P sessions so friends can send us their voice.
steam_networking_messages_set_callback_session_request(function(_data)
{
	steam_networking_messages_accept_session_with_user(_data.steam_id_remote);
});

steam_networking_messages_set_callback_session_failed(function(_data)
{
	show_debug_message($"[Voice] P2P session failed: {_data}");
});

/// @desc Returns (creating it on first use) the playback stream for a speaker.
voice_get_speaker = function(_steam_id)
{
	var _key = string(_steam_id);
	var _speaker = speakers[$ _key];
	if (is_undefined(_speaker))
	{
		_speaker = {
			steam_id: _steam_id,
			queue: audio_create_play_queue(buffer_s16, sample_rate, audio_mono),
			sound: -1,
			pending: 0,
			last_heard: -1000000,
		};
		speakers[$ _key] = _speaker;
	}
	return _speaker;
}

/// @desc Decompresses a Steam voice packet and queues it for playback.
voice_play = function(_steam_id, _buffer, _offset, _size)
{
	var _result = steam_user_decompress_voice(_buffer, pcm_buffer, sample_rate, _offset, _size);

	// The decompressed size isn't known up front; grow the scratch buffer and retry.
	while (_result.result == SteamApiVoiceResult.BufferTooSmall && buffer_get_size(pcm_buffer) < 1024 * 1024)
	{
		buffer_resize(pcm_buffer, buffer_get_size(pcm_buffer) * 2);
		_result = steam_user_decompress_voice(_buffer, pcm_buffer, sample_rate, _offset, _size);
	}

	if (_result.result != SteamApiVoiceResult.Ok)
	{
		last_error = _result.result;
		return;
	}
	if (_result.written_bytes <= 0) return;

	// Audio queues read directly from the buffer until it has played, so every
	// chunk needs its own buffer. It is freed in the Async - Audio Playback event.
	var _chunk = buffer_create(_result.written_bytes, buffer_fixed, 1);
	buffer_copy(pcm_buffer, 0, _result.written_bytes, _chunk, 0);

	var _speaker = voice_get_speaker(_steam_id);
	
	audio_queue_sound(_speaker.queue, _chunk, 0, _result.written_bytes);
	_speaker.pending++;
	_speaker.last_heard = current_time;

	// A queue sound stops once it runs out of data; restart it when new data arrives.
	if (_speaker.sound == -1 || !audio_is_playing(_speaker.sound))
	{
		_speaker.sound = audio_play_sound(_speaker.queue, 10, false);
	}
}

/// @desc Returns true if we received voice from this user in the last few frames.
voice_is_speaking = function(_steam_id)
{
	var _speaker = speakers[$ string(_steam_id)];
	return !is_undefined(_speaker) && (current_time - _speaker.last_heard) < 250;
}

// Friend list (same as the Net Messages demo): click to select who receives your voice.
var _flag = SteamFriendsFriendFlag.Immediate;
var _count = steam_friends_get_friend_count(_flag);

var _x = 100;
var _y = 150;
for (var _i = 0; _i < _count; _i++)
{
	var _friend_id = steam_friends_get_friend_by_index(_i, _flag);
	var _friend_name = steam_friends_get_friend_persona_name(_friend_id);

	
	var data = { steam_id: _friend_id, image_xscale: 3 };
	instance_create_depth(_x, _y, 0, obj_steam_friends_friend_select, { data }).text = _friend_name;
	_y += 100;

	if (_y > room_height - 100)
	{
		_y = 150;
		_x += 300;
		if (_x > 700) break; // keep the right side free for the status panel
	}
	
}


