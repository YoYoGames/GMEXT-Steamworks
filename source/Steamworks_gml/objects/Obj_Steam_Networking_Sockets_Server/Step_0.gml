
event_inherited()

if(net_connection > 0)
{
    while (true)
    {
        buffer_seek(net_buffer, buffer_seek_start, 0);
        var bytes_read = steam_net_sockets_recv_messages_on_connection(
            net_connection,
            net_buffer,
            1024//NET_BUFFER_SIZE
        );

        if (bytes_read <= 0)
            break;
		
        buffer_seek(net_buffer, buffer_seek_start, 0);

		var Color = buffer_read(net_buffer, buffer_u32);
		var X = buffer_read(net_buffer, buffer_u16);
		var Y = buffer_read(net_buffer, buffer_u16);
		
		var ins = instance_create_depth(X,Y,0,Obj_Steam_Networking_Circle)
		ins.image_blend = Color
    }
}
