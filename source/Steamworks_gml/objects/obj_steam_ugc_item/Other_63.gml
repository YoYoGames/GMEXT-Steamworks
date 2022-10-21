
Obj_Steam_UGC_Item_Actions.visible = false;

var exists, info_map;

if(request == async_load[?"id"])
if(async_load[?"status"])
{
	show_debug_message("Option: " + string(async_load[?"value"]))
	switch(async_load[?"value"])
	{
		case 1:
			// This code will subscribe to an UGC item, in other
			// words this process will install the given UGC item.
			show_debug_message("Item Subscribe")
			steam_ugc_subscribe_item(item)
		break
		
		case 2:
			// This code will unsubscribe an UGC item this will
			// remove/uninstall the item for this user.
			show_debug_message("Item Unsubscribe")
			steam_ugc_unsubscribe_item(item)
			if (fromSubs) instance_destroy();
		break 
		
		case 3:
			// This code will get install information from the UGC
			// item and read the files that were installed by it
			// NOTE: items needs to be subscribed first
			show_debug_message("Item Install Info")
			info_map = ds_map_create()
			exists = steam_ugc_get_item_install_info(item, info_map);
			
			if (!exists) {
				show_debug_message("Item needs to be subscribed first");
				return;
			}
			
			show_debug_message("Item Install info: " + json_encode(info_map))
	
			var folder = info_map[?"folder"]
			var file = file_text_open_read(folder + "/item.txt")
			show_debug_message(file_text_read_string(file))
			file_text_close(file)
	
			ds_map_destroy(info_map)
		break
		
		case 4:
			// This code will get update information from the UGC
			// item being installed (after subscription).
			// NOTE: items needs to be subscribed first
			show_debug_message("Item Update Info")
			info_map = ds_map_create()
			exists = steam_ugc_get_item_update_info(item, info_map);
			
			if (!exists) {
				show_debug_message("Item needs to be subscribed first");
				return;
			}
			
			show_debug_message("Update Item Info: " + json_encode(info_map))
			ds_map_destroy(info_map)
		break
		
		case 5:
			// This code will request item details for the specific item
			// a timespan needs to be provided to filter the details.
			show_debug_message("Item Details")
			steam_ugc_request_item_details(item, 60);
		break
		
		case 6:
			// This code will delete the UGC item
			show_debug_message("Delete Item")
			steam_ugc_delete_item(item);
			instance_destroy();
		break
	}
}
