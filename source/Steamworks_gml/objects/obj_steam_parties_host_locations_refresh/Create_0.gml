
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

	if (!locs.ok || locs.count <= 0) {
	    show_debug_message("No available beacon locations");
	    return;
	}


	show_debug_message($"Locations:")
	for(var i = 0 ; i < locs.count ; i++)
	{
		var beacon_location_type = locs.location_types[i]
		var beacon_location_id = locs.location_ids[i]
	
	    var name = steam_parties_get_beacon_location_data(
		        beacon_location_type,
		        beacon_location_id,
		        STEAM_PARTIES_BEACON_LOCATION_DATA.DATA_NAME
		    );
	
	    var icon = steam_parties_get_beacon_location_data(
		        beacon_location_type,
		        beacon_location_id,
		        STEAM_PARTIES_BEACON_LOCATION_DATA.ICON_URL_SMALL
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
