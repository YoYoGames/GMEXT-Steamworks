
event_inherited();

var buff = buffer_create(128,buffer_fixed,1)

var _array_of_messages = steam_networking_messages_receive_messages_on_channel(0,buff,1)

for(var _i = 0 ; _i < array_length(_array_of_messages) ; _i++)
{
	var _msg = _array_of_messages[_i]
	if(_msg.size)
	{
		show_debug_message(_msg)
		
		buffer_seek(buff,buffer_seek_start,_msg.offset)
		
		var Color = buffer_read(buff, buffer_u32);
		var X = buffer_read(buff, buffer_u16);
		var Y = buffer_read(buff, buffer_u16);
		var ins = instance_create_depth(X,Y,0,obj_steam_networking_circle)
		ins.image_blend = Color
	}
}
buffer_delete(buff)
