
var count = steam_parties_get_num_active_beacons();
show_debug_message("active beacons = " + string(count));

with(obj_steam_parties_client_beacon)
	instance_destroy()

for (var i = 0; i < count; i++)
{
    var beacon_id = steam_parties_get_beacon_by_index(i);
    var details = steam_parties_get_beacon_details(beacon_id);

	show_debug_message(details)
	
    if (!details.ok)
        continue;
	
	instance_create_depth(300,200+i*80,0,obj_steam_parties_client_beacon,{beacon_id: beacon_id, data: details})

    show_debug_message("found beacon " + string(beacon_id));
    show_debug_message("owner = " + string(details.beacon_owner_steam_id));
    show_debug_message("metadata = " + details.metadata);
}
