
switch (async_load[? "event_type"])
{
    case "steam_parties_reservation_notification":
        show_debug_message("reservation notification");
        show_debug_message($"beacon_id: {async_load[? "beacon_id"]}");
        show_debug_message($"joiner_steam_id: {async_load[? "joiner_steam_id"]}");
		
        // You should do your process to deny or accept
        // I will just accept it :)
        // or call steam_parties_on_reservation_completed when a new user joins your private server
        steam_parties_on_reservation_completed(async_load[? "beacon_id"], async_load[? "joiner_steam_id"]);
    break;
	
    case "steam_parties_active_beacons_updated":
        show_debug_message("active beacons updated");
    break;
}
