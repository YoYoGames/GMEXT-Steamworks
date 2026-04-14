
alarm[0] = 3

instance_create_depth(mouse_x,mouse_y,0,obj_steam_networking_circle).image_blend = c_red

with(obj_steam_friends_friend_select)
{
	if(selected)
	{
		var b = buffer_create(8, buffer_fixed, 1);//4+2+2
		buffer_write(b, buffer_u32, c_red);//4
		buffer_write(b, buffer_u16, mouse_x);//2
		buffer_write(b, buffer_u16, mouse_y);//2
		steam_networking_messages_send_message_to_user(steam_id,b,buffer_tell(b),0,0)
		buffer_delete(b);
	
		break
	}
}

