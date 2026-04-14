steam_parties_set_callback_reservation_notification(function(data)
{
    show_debug_message($"reservation notification");
    show_debug_message($"beacon_id: {data.beacon_id}");
    show_debug_message($"joiner_steam_id: {data.joiner_steam_id}");
	
	//You should do your preocess to deny or accept
	//I will just accept it :)
	//or call steam_parties_on_reservation_completed when a new user join in your private server
	steam_parties_on_reservation_completed(data.beacon_id,data.joiner_steam_id);
});

steam_parties_set_callback_active_beacons_updated(function(data)
{
    show_debug_message("active beacons updated");
});

