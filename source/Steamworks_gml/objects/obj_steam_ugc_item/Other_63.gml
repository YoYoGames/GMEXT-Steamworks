
obj_steam_ugc_item_actions.visible = false;

var exists, info_map;

if(request == async_load[?"id"])
if(async_load[?"status"])
{
	show_debug_message($"Option: {async_load[?"value"]}")
	switch(async_load[?"value"])
	{
		case 1:
			// This code will subscribe to an UGC item, in other
			// words this process will install the given UGC item.
			show_debug_message("Item Subscribe")
			steam_ugc_subscribe_item(data.published_file_id,function(data){show_debug_message(data)})
		break
		
		case 2:
			// This code will unsubscribe an UGC item this will
			show_debug_message("Item Unsubscribe")
			steam_ugc_unsubscribe_item(data.published_file_id,function(data){show_debug_message(data)})
		break 
		
		case 3:
			// This code will get install information from the UGC
			// item and read the files that were installed by it
			// NOTE: items needs to be subscribed first
			show_debug_message("Item Install Info")
			
			var install_info = steam_ugc_get_item_install_info(data.published_file_id);
			
			if (!install_info.ok) {
				show_debug_message("Item needs to be downloaded first");
				return;
			}
	
			var file = file_text_open_read(install_info.folder + "/item.txt")
			show_debug_message($"Content: {file_text_read_string(file)}")
			file_text_close(file)
			
		break
		
		case 4:
			// This code will get update information from the UGC
			// item being installed (after subscription).
			// NOTE: items needs to be subscribed first
			exists = steam_ugc_get_item_download_info(data.published_file_id);
			
			var struct = show_debug_message("Item needs to be subscribed first");
			
			show_debug_message($"Update Item Info: {struct}")
		break
		
		case 5:
			// This code will request item details for the specific item
			// a timespan needs to be provided to filter the details.
			show_debug_message("Item Details")
			steam_ugc_request_ugc_details(data.published_file_id, 60,function(data){show_debug_message(data)});
		break
		
		case 6:
			// This code will delete the UGC item
			show_debug_message("Delete Item")
			steam_ugc_delete_item(data.published_file_id,function(data){show_debug_message(data)});
			instance_destroy();
		break
		
		case 7:
			show_debug_message("Add To Favorites")
			steam_ugc_add_item_to_favorites(steam_utils_get_app_id(),data.published_file_id,function(data){show_debug_message(data)})
		break
		
		case 8:
			show_debug_message("Remove From Favorites")
			steam_ugc_remove_item_from_favorites(steam_utils_get_app_id(),data.published_file_id,function(data){show_debug_message(data)})
		break
		
		case 9:
			show_debug_message("Vote Up")
			steam_ugc_set_user_item_vote(data.published_file_id,true,function(data){show_debug_message(data)})
		break
		
		case 10:
			show_debug_message("Get Vote")
			steam_ugc_get_user_item_vote(data.published_file_id,function(data){show_debug_message(data)})
		break
		
		case 11:
			show_debug_message("Download")
			steam_ugc_download_item(data.published_file_id,true)
		break
	}
}
