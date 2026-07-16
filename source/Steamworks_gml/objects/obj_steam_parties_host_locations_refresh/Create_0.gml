
event_inherited();

text = "Refresh"

function locations_refresh()
{
	with(obj_steam_parties_host_beacon)
		instance_destroy()
	
	with(obj_steam_parties_host_location)
		instance_destroy()
	
	var locs = steam_parties_get_available_beacon_locations();
	show_debug_message($"available_beacon_locations: {locs}");

	if (!array_length(locs)) {
	    show_debug_message("No available beacon locations");
	    return;
	}


	show_debug_message($"Locations:")
	for(var i = 0 ; i < array_length(locs) ; i++)
	{
		var beacon_location_type = locs[i].location_type
		var beacon_location_id = locs[i].location_id
	
	    var name = steam_parties_get_beacon_location_data(
		        beacon_location_type,
		        beacon_location_id,
		        SteamPartiesBeaconLocationData.Name
		    );
	
	    var icon = steam_parties_get_beacon_location_data(
		        beacon_location_type,
		        beacon_location_id,
		        SteamPartiesBeaconLocationData.IconURLSmall
		    );

		var beacon_location = {
				name: name,
				icon: icon,
		        type: beacon_location_type,
		        id: beacon_location_id,
			}
		show_debug_message($"{i}) {beacon_location}")
	
		instance_create_depth(room_width/2,200+80*i,depth,obj_steam_parties_host_location,{data: beacon_location})
	}
}


locations_refresh()
