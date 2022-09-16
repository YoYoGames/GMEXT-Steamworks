
if(async_load[?"id"] == request)
if(async_load[?"status"]) {
	
	// Broadcasting message as a buffer (binary)
	var _chat_message_buf = buffer_create(1, buffer_grow, 1);
	buffer_write(_chat_message_buf, buffer_string, async_load[?"result"]);
	steam_lobby_send_chat_message_buffer(_chat_message_buf);
	buffer_delete(_chat_message_buf);
}
