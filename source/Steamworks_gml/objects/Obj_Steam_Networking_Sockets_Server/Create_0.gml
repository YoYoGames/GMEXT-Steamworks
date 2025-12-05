
alarm[0] = 3

event_inherited()


// SteamNetworking connection states (ESteamNetworkingConnectionState)
#macro NET_STATE_NONE              0
#macro NET_STATE_CONNECTING        1
#macro NET_STATE_FINDING_ROUTE     2
#macro NET_STATE_CONNECTED         3
#macro NET_STATE_CLOSED_BY_PEER    4
#macro NET_STATE_PROBLEM_LOCAL     5
#macro NET_STATE_FIN_WAIT          6
#macro NET_STATE_LINGER            7
#macro NET_STATE_DEAD              8
#macro NET_STATE_TERMINATED        9



// SteamNetworking send flags (k_nSteamNetworkingSend_*)
#macro NET_SEND_UNRELIABLE              0
#macro NET_SEND_NO_NAGLE                1
#macro NET_SEND_NO_DELAY                4
#macro NET_SEND_RELIABLE                8        // 📌 This is the common "Reliable"
#macro NET_SEND_UNRELIABLE_NO_DELAY     16

text = "host"

net_buffer      = buffer_create(1024, buffer_grow, 1);
net_connection  = -1;
net_listen      = -1;


NET_P2P_PORT = 7

// HOST: create a P2P listen socket
net_listen = steam_net_sockets_create_listen_socket_p2p(NET_P2P_PORT);
show_debug_message("Host: listen socket = " + string(net_listen));

