/// obj_steam_sockets_demo - Destroy

if (buffer_exists(buf)) {
    buffer_delete(buf);
}

// Optional: close connections if you have wrappers for that.
// (You can add calls to `steam_net_sockets_close_connection` if desired)
