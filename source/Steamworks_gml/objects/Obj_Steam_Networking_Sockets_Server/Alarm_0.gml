
alarm[0] = 3

show_debug_message($"net_connections: {array_length(net_connections)}")
if(array_length(net_connections) > 0)
{
	
	instance_create_depth(mouse_x,mouse_y,0,obj_steam_networking_circle).image_blend = c_red

	var b = buffer_create(8, buffer_fixed, 1);
	buffer_write(b, buffer_u32, c_red);//4
	buffer_write(b, buffer_u16, mouse_x);//2
	buffer_write(b, buffer_u16, mouse_y);//2
	buffer_seek(b, buffer_seek_start, 0);

	for(var i = 0; i < array_length(net_connections); i++)
	{
		show_debug_message($"Sending to: {net_connections[i].conn}")
		steam_networking_sockets_send_message_to_connection(
			net_connections[i].conn,
			b,
			SteamNetworkingSendFlags.Reliable,
			0,
			buffer_tell(b)
			)
	}

	buffer_delete(b);
}
