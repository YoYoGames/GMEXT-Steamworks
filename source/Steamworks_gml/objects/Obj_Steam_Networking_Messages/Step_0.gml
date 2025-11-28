
event_inherited();

var buff = buffer_create(128,buffer_fixed,1)
var data_size = steam_net_messages_receive_on_channel(0,buff,128)

if(data_size)
{
	var _data = buffer_read(buff,buffer_string)
	show_debug_message(_data)
}

buffer_delete(buff)
