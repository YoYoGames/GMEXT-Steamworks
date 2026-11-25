with (obj_steam_friends_friend_select)
{
	steam_networking_messages_close_session_with_user(data.steam_id);
}

// Don't leave a message held on this channel for the other networking rooms
steam_networking_messages_discard_held_message(channel);

steam_networking_messages_clear_callback_session_request();
steam_networking_messages_clear_callback_session_failed();

buffer_delete(receive_buffer);
buffer_delete(send_buffer);
