
event_inherited()

steam_networking_sockets_run_callbacks()

if(net_connection > 0)
{
	
    //while(true)
	repeat(10)
    {
        buffer_seek(net_buffer, buffer_seek_start, 0);
        var _struct = steam_networking_sockets_receive_one_on_connection(
	            net_connection,
	            net_buffer,
	            1024,//NET_BUFFER_SIZE
				0
	        );
			
		var bytes_read = _struct.bytes_written

        if (bytes_read <= 0)
			break;

        buffer_seek(net_buffer, buffer_seek_start, 0);

		var Color = buffer_read(net_buffer, buffer_u32);
		var X = buffer_read(net_buffer, buffer_u16);
		var Y = buffer_read(net_buffer, buffer_u16);
		
		var ins = instance_create_depth(X,Y,0,obj_steam_networking_circle)
		ins.image_blend = Color
    }
}
