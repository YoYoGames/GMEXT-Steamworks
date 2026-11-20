
if (ptt_held || recording)
{
	steam_user_stop_voice_recording();
	steam_friends_set_in_game_voice_speaking(my_steam_id, false);
}

with (obj_steam_friends_friend_select)
{
	steam_networking_messages_close_channel_with_user(data.steam_id, other.voice_channel);
}

steam_networking_messages_clear_callback_session_request();
steam_networking_messages_clear_callback_session_failed();

// Stop playback and free the queues. Chunks still queued at this point are handed
// back through the Async - Audio Playback event (queue_shutdown = 1), which this
// instance won't receive anymore, so at most a few hundred ms of audio is not freed.
var _keys = struct_get_names(speakers);
for (var _i = 0; _i < array_length(_keys); _i++)
{
	var _speaker = speakers[$ _keys[_i]];
	if (_speaker.sound != -1) audio_stop_sound(_speaker.sound);
	audio_free_play_queue(_speaker.queue);
}

buffer_delete(voice_buffer);
buffer_delete(voice_unused_buffer);
buffer_delete(recv_buffer);
buffer_delete(pcm_buffer);
