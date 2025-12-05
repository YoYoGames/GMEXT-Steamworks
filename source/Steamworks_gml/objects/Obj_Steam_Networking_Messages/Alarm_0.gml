
alarm[0] = 3

with(Obj_Steam_Networking_Friend)
{
	if(locked)
	{
		for(var a = 0 ; a < steam_lobby_get_member_count() ; a++)
		{
			var b = buffer_create(8, buffer_fixed, 1);//4+2+2
			buffer_write(b, buffer_u32, c_red);//4
			buffer_write(b, buffer_u16, mouse_x);//2
			buffer_write(b, buffer_u16, mouse_y);//2
			steam_net_messages_send(steam_id,0,b,buffer_tell(b))
			buffer_delete(b);
		}

		buffer_delete(buff)
	
		break
	}
}



