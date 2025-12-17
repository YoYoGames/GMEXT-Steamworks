
if (net_connection > 0)
{
    steam_net_sockets_close_connection(net_connection, 0, "cleanup", true);
    net_connection = -1;
}

if (net_listen > 0)
{
    steam_net_sockets_close_listen_socket(net_listen);
    net_listen = -1;
}

if (is_undefined(net_buffer) == false)
{
    buffer_delete(net_buffer);
}


