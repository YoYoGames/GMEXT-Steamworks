
switch(async_load[?"event_type"])
{	
	case "lobby_created":
		
		show_debug_message("Lobby created: " + string(steam_lobby_get_lobby_id()))
		steam_lobby_join_id(steam_lobby_get_lobby_id())
		
	break
	
	case "lobby_joined":
	
		if(steam_lobby_is_owner())
		{
			steam_lobby_set_data("isGameMakerTest","true");
			steam_lobby_set_data("Creator",steam_get_persona_name());
		}
		
		var b = buffer_create(16, buffer_fixed, 1);
		buffer_write(b, buffer_u8, test_network_packet.ping);
		show_debug_message("Initial ping:" + string(steam_net_packet_send(steam_lobby_get_owner_id(), b)));
		buffer_delete(b);
		
		room_goto(Room_Steam_Networking_Lobby)
		
	break
	
	case "lobby_list":
	
		for(var _a = 0 ; _a < steam_lobby_list_get_count() ; _a++)
		{
			var ins = instance_create_depth(600,200+90*_a,0,Obj_Steam_Networking_List_Slot);
			ins.index = _a
			ins.lobby_id = steam_lobby_list_get_lobby_id(_a);
			ins.creator = steam_lobby_list_get_data(_a, "Creator")
		}
		
	break
	
	case "lobby_join_requested":
		
		var lobby_id = async_load[?"lobby_id"]
		var friend_id = async_load[?"friend_id"]
		steam_lobby_join_id(lobby_id)
		
	break
	
}







