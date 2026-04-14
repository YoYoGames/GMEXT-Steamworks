	
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
	metadata
);
