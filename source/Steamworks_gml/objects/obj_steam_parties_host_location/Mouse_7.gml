	
var open_slots = 5;
var connect_string = string(irandom_range(1000,9999))//lobby_id,ip,match_id,etc
var metadata = json_stringify({
	mode : "coop",
	map : "forest",
	region : "na",
	version : "1.0"
});

steam_parties_create_beacon(
	open_slots,
	data.type,//SteamPartiesBeaconLocationType.ChatGroup,//SteamPartiesBeaconLocationType.Invalid,
	data.id,
	connect_string,
	metadata,
	function(data)
	{
		show_debug_message($"Create beacon result = {data.result}");
		show_debug_message($"Beacon id = {data.beacon_id}");

		if (data.result == SteamApiResult.Ok)
		{
			with(obj_steam_parties_host_location)
				instance_destroy()
			
			show_debug_message($"beacon created {data.beacon_id}");
			instance_create_depth(0,0,0,obj_steam_parties_host_beacon,{beacon_id: data.beacon_id})
		}
	}
);
