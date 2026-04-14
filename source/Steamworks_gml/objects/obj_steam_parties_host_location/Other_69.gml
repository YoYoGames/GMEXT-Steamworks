switch (async_load[? "event_type"])
{
	case "steam_parties_create_beacon":
	    show_debug_message($"Create beacon result = {async_load[? "result"]}");
	    show_debug_message($"Beacon id = {async_load[? "beacon_id"]}");
	
	    if (async_load[? "success"])
	    {
	        with (obj_steam_parties_host_location)
	            instance_destroy();
		
	        show_debug_message($"beacon created {async_load[? "beacon_id"]}");
	        instance_create_depth(0, 0, 0, obj_steam_parties_host_beacon, { beacon_id: async_load[? "beacon_id"] });
	    }
	break;
}