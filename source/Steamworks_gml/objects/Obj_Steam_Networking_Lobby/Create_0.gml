

steam_matchmaking_set_callback_lobby_data_update(function(data){show_debug_message($"data_update: {data}")})

steam_matchmaking_set_callback_lobby_chat_update(function(data){show_debug_message($"chat_update: {data}")})

steam_matchmaking_set_callback_lobby_chat_msg(function(data){
	var lobby_id = data.lobby_id;
	var sender_id = data.sender_id;
	var chat_id = data.chat_id;
	var chat_type = data.chat_entry_type;
	
	// Create a buffer to hold the message
	var msg_buffer = buffer_create(1024, buffer_fixed, 1);
	
	// Get the actual message content
	var entry = steam_matchmaking_get_lobby_chat_entry(lobby_id, chat_id, msg_buffer);
	
	if (entry != undefined) {
		// Read the message from the buffer
		buffer_seek(msg_buffer, buffer_seek_start, 0);
		var message = buffer_read(msg_buffer, buffer_string);
		
		show_debug_message("Message from " + string(sender_id) + ": " + message);
	}
	
	buffer_delete(msg_buffer);
})

steam_matchmaking_set_callback_lobby_game_created(function(data){show_debug_message($"game_created: {data}")})

steam_matchmaking_set_callback_lobby_invite(function(data){show_debug_message($"lobby_invite: {data}")})


inbuf = buffer_create(16, buffer_grow, 1);
outbuf = buffer_create(16, buffer_grow, 1);
chat_message_buf = buffer_create(1024/*steam_lobby_max_chat_message_size*/, buffer_fixed, 1);
request_lobbies = 0;
rtt_list = ds_list_create();
rtt_curr = 0;
rtt_time = current_time;

