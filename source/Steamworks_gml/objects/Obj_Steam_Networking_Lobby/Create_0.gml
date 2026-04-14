

steam_matchmaking_set_callback_lobby_data_update(function(data){show_debug_message(data)})

steam_matchmaking_set_callback_lobby_chat_update(function(data){show_debug_message(data)})

steam_matchmaking_set_callback_lobby_chat_msg(function(data){show_debug_message(data)})

steam_matchmaking_set_callback_lobby_game_created(function(data){show_debug_message(data)})

steam_matchmaking_set_callback_lobby_invite(function(data){show_debug_message(data)})


inbuf = buffer_create(16, buffer_grow, 1);
outbuf = buffer_create(16, buffer_grow, 1);
chat_message_buf = buffer_create(1024/*steam_lobby_max_chat_message_size*/, buffer_fixed, 1);
request_lobbies = 0;
rtt_list = ds_list_create();
rtt_curr = 0;
rtt_time = current_time;

