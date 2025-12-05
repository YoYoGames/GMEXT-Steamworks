
alarm[0] = 3

if(net_connection > 0)
{
	instance_create_depth(mouse_x,mouse_y,0,Obj_Steam_Networking_Circle).image_blend = c_red

	var b = buffer_create(1024, buffer_fixed, 1);//4+2+2
	buffer_write(b, buffer_u32, c_red);//4
	buffer_write(b, buffer_u16, mouse_x);//2
	buffer_write(b, buffer_u16, mouse_y);//2

	steam_net_sockets_send_messages([net_connection],b,buffer_tell(b),NET_SEND_RELIABLE)

	//var res = steam_net_sockets_send_message(
	//    net_connection,
	//    b,
	//    buffer_tell(b),
	//    NET_SEND_RELIABLE
	//);
		
	buffer_delete(b);
}
