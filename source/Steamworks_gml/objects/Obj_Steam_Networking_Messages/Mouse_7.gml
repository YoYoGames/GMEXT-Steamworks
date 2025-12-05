
with(Obj_Steam_Networking_Friend)
{
	if(locked)
	{
		var buff = buffer_create(128,buffer_fixed,1)
		buffer_write(buff,buffer_string,"Hello World")
		
		steam_net_messages_send(steam_id,0,buff,buffer_tell(buff))
		
		buffer_delete(buff)
	
		break
	}
}

