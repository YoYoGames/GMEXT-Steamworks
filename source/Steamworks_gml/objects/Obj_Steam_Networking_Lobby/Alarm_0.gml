
alarm[0] = 3

with(Obj_Steam_Networking_Lobby_Color)
{
	var ins = instance_create_depth(mouse_x,mouse_y,0,Obj_Steam_Networking_Circle)
	ins.image_blend = color_
}

for(var a = 0 ; a < steam_lobby_get_member_count() ; a++)
{
	var player = steam_lobby_get_member_id(a);
	
	if(steam_get_user_steam_id() == player)
		continue;
	
	var b = buffer_create(9, buffer_fixed, 1);//1+4+2+2
	buffer_write(b, buffer_u8, test_network_packet.circleData);//1
	buffer_write(b, buffer_u32, Obj_Steam_Networking_Lobby_Color.color_);//4
	buffer_write(b, buffer_u16, mouse_x);//2
	buffer_write(b, buffer_u16, mouse_y);//2
	steam_net_packet_send(player, b)
	buffer_delete(b);
}





