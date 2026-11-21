
if (buffer_exists(buf)) {
    buffer_delete(buf);
}

if (socket_demo_ready) {
    steam_networking_sockets_close_connection(conn_a, SteamNetworkingConnectionEnd.App_Generic, "Demo closed", false);
    steam_networking_sockets_close_connection(conn_b, SteamNetworkingConnectionEnd.App_Generic, "Demo closed", false);
}

