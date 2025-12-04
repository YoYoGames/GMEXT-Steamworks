
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
// These values must match Valve's enum bitflags
#macro NET_SEND_UNRELIABLE              0
#macro NET_SEND_NO_NAGLE                1
#macro NET_SEND_NO_DELAY                4
#macro NET_SEND_RELIABLE                8        // 📌 This is the common "Reliable"
#macro NET_SEND_UNRELIABLE_NO_DELAY     16



text = "host/client"




/// obj_net_controller Create

// Are we host or client?
is_host = true;        // <--- change to false on the client build or at runtime

global.net_buffer      = buffer_create(1024, buffer_grow, 1);
global.net_connection  = -1;
global.net_listen      = -1;

// Example: for client, you need the host's SteamID64
// (you'll probably get this from lobby, friend list, etc.)
global.net_host_steamid64 = 0; // set this on the client before connecting


NET_P2P_PORT = 7

if (is_host)
{
    // HOST: create a P2P listen socket
    global.net_listen = steam_net_sockets_create_listen_socket_p2p(NET_P2P_PORT);
    show_debug_message("Host: listen socket = " + string(global.net_listen));
}
else
{
    // CLIENT: connect to the host using host's SteamID64
    // (make sure you assign global.net_host_steamid64 before this)
    if (global.net_host_steamid64 != 0)
    {
        global.net_connection = steam_net_sockets_connect_p2p(global.net_host_steamid64, NET_P2P_PORT);
        show_debug_message("Client: connecting, conn = " + string(global.net_connection));
    }
    else
    {
        show_debug_message("Client: ERROR - host steamID64 not set");
    }
}
