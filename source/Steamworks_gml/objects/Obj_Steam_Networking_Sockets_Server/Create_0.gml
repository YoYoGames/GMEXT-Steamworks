
alarm[0] = 3

event_inherited()


text = "host"

net_buffer      = buffer_create(1024, buffer_grow, 1);
net_connection  = -1;
net_listen      = -1;


NET_P2P_PORT = 7

net_listen = steam_net_sockets_create_listen_socket_p2p(NET_P2P_PORT);
show_debug_message("Host: listen socket = " + string(net_listen));

