
alarm[0] = 3

event_inherited()

text = "client"

net_buffer      = buffer_create(1024, buffer_grow, 1);
net_connection  = -1;
net_listen      = -1;

net_host_steamid64 = 76561199257286820//0; // set this on the client before connecting

NET_P2P_PORT = 7

if (net_host_steamid64 != 0)
{
    net_connection = steam_net_sockets_connect_p2p(net_host_steamid64, NET_P2P_PORT);
    show_debug_message("Client: connecting, conn = " + string(net_connection));
}
else
    show_debug_message("Client: ERROR - host steamID64 not set");

