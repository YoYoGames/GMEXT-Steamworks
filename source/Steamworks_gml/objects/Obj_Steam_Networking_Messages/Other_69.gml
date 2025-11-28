
show_debug_message(json_encode(async_load))

switch(async_load[?"event_type"])
{
	case "steam_net_message_on_session_request":
	
		var steamid = async_load[?"steamid"]
		steam_net_messages_accept_session(steamid)
		//steam_net_messages_close_session(steamid)
		
	break
	
	case "steam_net_message_on_session_failed":
	
		var steamid = async_load[?"steamid"]
		
	break
}
