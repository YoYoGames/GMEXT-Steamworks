
if (socket_demo_ready) {
    buffer_delete(buf);
    steam_networking_sockets_close_connection(conn_a, SteamNetworkingConnectionEnd.App_Generic, "Demo closed", false);
    steam_networking_sockets_close_connection(conn_b, SteamNetworkingConnectionEnd.App_Generic, "Demo closed", false);
}

