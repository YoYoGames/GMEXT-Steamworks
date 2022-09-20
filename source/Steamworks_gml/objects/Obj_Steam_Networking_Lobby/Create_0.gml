
inbuf = buffer_create(16, buffer_grow, 1);
outbuf = buffer_create(16, buffer_grow, 1);
chat_message_buf = buffer_create(steam_lobby_max_chat_message_size, buffer_fixed, 1);
request_lobbies = 0;
rtt_list = ds_list_create();
rtt_curr = 0;
rtt_time = current_time;


enum test_network_packet
{
	ping = 10,
	hello = 11,
	circleData = 12
}

alarm[0] = 1


