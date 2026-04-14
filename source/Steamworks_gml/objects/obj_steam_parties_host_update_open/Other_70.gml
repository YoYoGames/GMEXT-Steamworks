
switch (async_load[? "event_type"])
{
	case "steam_parties_change_num_open_slots":
	    show_debug_message($"change open slots result = {async_load[? "result"]}");
	break;
}
