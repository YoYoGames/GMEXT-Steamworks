/// Clean Up

if (global.net_connection > 0)
{
    steam_net_sockets_close_connection(global.net_connection, 0, "cleanup", true);
    global.net_connection = -1;
}

if (global.net_listen > 0)
{
    steam_net_sockets_close_listen_socket(global.net_listen);
    global.net_listen = -1;
}

if (is_undefined(global.net_buffer) == false)
{
    buffer_delete(global.net_buffer);
}
