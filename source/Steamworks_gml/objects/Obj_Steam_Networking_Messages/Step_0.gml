
event_inherited();

var buff = buffer_create(128,buffer_fixed,1)

var data_size = steam_net_messages_receive_on_channel(0,buff,128)

if(data_size)
{
	show_debug_message($"Last Id: {steam_net_messages_get_last_steam_id()} - size: {steam_net_messages_get_last_size()}")
	
	var Color = buffer_read(buff, buffer_u32);
	var X = buffer_read(buff, buffer_u16);
	var Y = buffer_read(buff, buffer_u16);
	var ins = instance_create_depth(X,Y,0,Obj_Steam_Networking_Circle)
	ins.image_blend = Color
}

buffer_delete(buff)
