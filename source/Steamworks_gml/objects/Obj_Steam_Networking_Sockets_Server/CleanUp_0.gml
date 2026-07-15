/// Clean Up

steam_networking_sockets_destroy_poll_group(poll_group)

for(var i = 0; i < array_length(net_connections); i++)
{
    steam_networking_sockets_close_connection(net_connections[i].conn, 0, "cleanup", true);
}

if (net_listen > 0)
{
    steam_networking_sockets_close_listen_socket(net_listen);
    net_listen = -1;
}

if (is_undefined(net_buffer) == false)
{
    buffer_delete(net_buffer);
}
