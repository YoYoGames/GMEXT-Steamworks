
if(async_load[?"id"] == request)
if(async_load[?"status"]) {
	
	var text = async_load[?"result"]
	show_debug_message($"Text: {text}")
	// Broadcasting message as a buffer (binary)
	var _chat_message_buf = buffer_create(1, buffer_grow, 1);
	buffer_write(_chat_message_buf, buffer_string, text);
	show_debug_message($"PRE: steam_matchmaking_send_lobby_chat_msg {[global.lobby_id,_chat_message_buf,0,buffer_tell(_chat_message_buf)]}")
	steam_matchmaking_send_lobby_chat_msg(global.lobby_id,_chat_message_buf,0,buffer_tell(_chat_message_buf));
	show_debug_message("POS: steam_matchmaking_send_lobby_chat_msg")
	buffer_delete(_chat_message_buf);
}
