
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
			show_debug_message($"Item Subscribe: {data.published_file_id}")
			steam_ugc_subscribe_item(data.published_file_id, function(_data) {
				if (_data.result == 1) {
					show_debug_message("Subscribed successfully");
				} else {
					show_debug_message($"Subscribe failed: {_data.result}");
				}
			})
		break
		
		case 2:
			// This code will unsubscribe an UGC item
			show_debug_message($"Item Unsubscribe: {data.published_file_id}")
			steam_ugc_unsubscribe_item(data.published_file_id, function(_data) {
				if (_data.result == 1) {
					show_debug_message("Unsubscribed successfully");
				} else {
					show_debug_message($"Unsubscribe failed: {_data.result}");
				}
			})
		break 
		
		case 3:
			// This code will get install information from the UGC
			// item and read the files that were installed by it
			// NOTE: items needs to be subscribed first
			show_debug_message($"Item Install Info: {data.published_file_id}")
			
			var install_info = steam_ugc_get_item_install_info(data.published_file_id);
			
			if (is_undefined(install_info)) {
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
			var struct = steam_ugc_get_item_download_info(data.published_file_id);

			if (is_undefined(struct)) {
				show_debug_message("Item needs to be subscribed first");
				return;
			}

			show_debug_message($"Update Item Info: {struct}")
		break
		
		case 5:
			show_debug_message($"Details: {data.published_file_id}")

			// 1. Create query with the file ID
			var query_handle = steam_ugc_create_query_ugc_details_request([data.published_file_id]);

			// 2. Set the max age (replaces the 60 timespan parameter)
			steam_ugc_set_allow_cached_response(query_handle, 60);

			// 3. Send the query and handle callback
			steam_ugc_send_query_ugc_request(query_handle, function(_data) {
			    var result = steam_ugc_get_query_ugc_result(_data.query_handle, 0);
			    show_debug_message(result);
			    steam_ugc_release_query_ugc_request(_data.query_handle);
			});

		break
		
		case 6:
			// This code will delete the UGC item
			show_debug_message($"Delete Item: {data.published_file_id}")
			steam_ugc_delete_item(data.published_file_id, function(_data) {
				if (_data.result == 1) {
					show_debug_message("Deleted successfully");
				} else {
					show_debug_message($"Delete failed: {_data.result}");
				}
			});
			instance_destroy();
		break
		
		case 7:
			show_debug_message($"Add To Favorites: {data.published_file_id}")
			steam_ugc_add_item_to_favorites(steam_utils_get_app_id(), data.published_file_id, function(_data) {
				if (_data.result == 1) {
					show_debug_message("Added to favorites successfully");
				} else {
					show_debug_message($"Add to favorites failed: {_data.result}");
				}
			})
		break
		
		case 8:
			show_debug_message($"Remove From Favorites: {data.published_file_id}")
			steam_ugc_remove_item_from_favorites(steam_utils_get_app_id(), data.published_file_id, function(_data) {
				if (_data.result == 1) {
					show_debug_message("Removed from favorites successfully");
				} else {
					show_debug_message($"Remove from favorites failed: {_data.result}");
				}
			})
		break
		
		case 9:
		    show_debug_message($"Vote Up: {data.published_file_id}")
		    steam_ugc_set_user_item_vote(data.published_file_id, true, function(_data) {
		        show_debug_message($"Vote result: {_data.result}");
		        if (_data.result != 1) {
		            show_debug_message($"Vote failed with code: {_data.result}");
		        }
		    })
		break
		
		case 10:
			show_debug_message($"Get Vote: {data.published_file_id}")
			steam_ugc_get_user_item_vote(data.published_file_id,function(_data){show_debug_message(_data)})
		break
		
		case 11:
			show_debug_message($"Download: {data.published_file_id}")
			steam_ugc_download_item(data.published_file_id,true)
		break
	}
}
