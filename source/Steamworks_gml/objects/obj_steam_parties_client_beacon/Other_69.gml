
switch (async_load[? "event_type"])
{
	case "steam_parties_join_party":
	    show_debug_message("join party result = " + string(async_load[? "result"]));
	    show_debug_message("beacon id = " + string(async_load[? "beacon_id"]));
	    show_debug_message("owner steam id = " + string(async_load[? "beacon_owner_steam_id"]));
	    show_debug_message("connect string = " + async_load[? "connect_string"]);

	    if (async_load[? "success"])
	    {
	        // Example: parse "lobby=123456"
	        var s = async_load[? "connect_string"];
	        var p = string_pos("=", s);

	        if (p > 0)
	        {
	            var key   = string_copy(s, 1, p - 1);
	            var value = string_delete(s, 1, p);

	            if (key == "lobby")
	            {
	                var lobby_id = real(value);
	                show_debug_message("join actual lobby " + string(lobby_id));

	                // Put your real lobby join wrapper here
	                // steam_matchmaking_join_lobby(lobby_id);
	            }
	        }
	    }
	break;
}
