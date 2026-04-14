
if(async_load[?"id"] == request)
if(async_load[?"status"]) {
	
	// Broadcasting message as a buffer (binary)
	var _chat_message_buf = buffer_create(1, buffer_grow, 1);
	buffer_write(_chat_message_buf, buffer_string, async_load[?"result"]);
	steam_matchmaking_send_lobby_chat_msg(global.lobby_id,_chat_message_buf,buffer_tell(_chat_message_buf));
	buffer_delete(_chat_message_buf);
}
