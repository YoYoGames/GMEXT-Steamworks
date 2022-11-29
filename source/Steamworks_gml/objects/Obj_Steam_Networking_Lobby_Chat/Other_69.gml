
switch(async_load[?"event_type"])
{ 
	case "lobby_chat_update":
		
		//var _from_id = int64(async_load[?"user_id_string"]);
		var _from_id = async_load[?"user_id"];
		var _from_name = steam_get_user_persona_name_sync(_from_id);
		
		// Check if the flags match with 'steam_lobby_member_change_entered'
		if (async_load[?"change_flags"] & steam_lobby_member_change_entered)
		{
			// Someone entered the room
			ds_list_clear(rtt_list);
			rtt_curr = 0;
			rtt_time = 0;
		}
		
	break;
	
	case "lobby_chat_message":
		var _msg_index = async_load[?"message_index"];
		var _from_id = async_load[?"user_id"];
		var _from_name = steam_get_user_persona_name_sync(_from_id);
		
		// Reading message as a text (string)
		show_debug_message("A chat message from `" + string(_from_name) + "` (text): " + steam_lobby_get_chat_message_text(_msg_index));
		
		// Reading message as a buffer (binary)
		var _chat_message_buf = buffer_create(1, buffer_grow, 1);
		show_debug_message("Buffer Ok? " + string(steam_lobby_get_chat_message_data(_msg_index, _chat_message_buf)));
		buffer_seek(_chat_message_buf, buffer_seek_start, 0);
		show_debug_message("A chat message from `" + string(_from_name) + "` (buffer): " + buffer_read(_chat_message_buf, buffer_text));
		buffer_delete(_chat_message_buf);
		
	break
}



