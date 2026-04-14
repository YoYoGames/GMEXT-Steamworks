
steam_ugc_set_callback_item_installed(function(data){show_debug_message($"steam_ugc_set_callback_item_installed: {data}")})

steam_ugc_set_callback_user_subscribed_items_list_changed(function(data){show_debug_message($"steam_ugc_set_callback_user_subscribed_items_list_changed: {data}")})

steam_ugc_set_callback_file_subscribed(function(data){show_debug_message($"steam_ugc_set_callback_file_subscribed: {data}")})

steam_ugc_set_callback_file_unsubscribed(function(data){show_debug_message($"steam_ugc_set_callback_file_unsubscribed: {data}")})

items_query_handler = function(data){
		
		with(obj_steam_ugc_item)
			instance_destroy()
		
		show_debug_message($"steam_ugc_send_query_ugc_request: {data}")
		
		for(var i = 0 ; i < data.total_matching_results ; i ++)
		{
			var item = steam_ugc_get_query_ugc_result(data.query_handle,i)
			
			item.preview_url = steam_ugc_get_query_ugc_preview_url(data.query_handle,i)
			
			//steam_ugc_get_query_ugc_metadata(query_handle,i)
			//steam_ugc_get_query_ugc_children(query_handle,i,10)
			
			item.preview_url.statistic = {}
			item.preview_url.statistic.NumSecondsPlayed = steam_ugc_get_query_ugc_statistic(data.query_handle,i,SteamUgcStatisticType.NumSecondsPlayed)
			item.preview_url.statistic.NumFollowers = steam_ugc_get_query_ugc_statistic(data.query_handle,i,SteamUgcStatisticType.NumFollowers)
			item.preview_url.statistic.NumComments = steam_ugc_get_query_ugc_statistic(data.query_handle,i,SteamUgcStatisticType.NumComments)
			item.preview_url.statistic.NumPlaytimeSessions = steam_ugc_get_query_ugc_statistic(data.query_handle,i,SteamUgcStatisticType.NumPlaytimeSessions)
			
			item.preview_url.additional_previews = []
			var num = steam_ugc_get_query_ugc_num_additional_previews(data.query_handle,i)
			for(var j = 0 ; j < num ; j ++)
			{
				item.preview_url.additional_previews[j] = steam_ugc_get_query_ugc_additional_preview(data.query_handle,i,j,"")//TODO? last argument shouldn't be: ""
			}
			
			item.preview_url.key_value_tags = []
			num = steam_ugc_get_query_ugc_num_key_value_tags(data.query_handle,i)
			for(var j = 0 ; j < num ; j ++)
			{
				item.preview_url.key_value_tags[j] = steam_ugc_get_query_ugc_key_value_tag(data.query_handle,i,j)
			}
			
			item.preview_url.content_descriptors = []
			num = data.num_results_returned //steam_ugc_get_query_ugc_num_content_descriptors(data.query_handle,i)
			for(var j = 0 ; j < num ; j ++)
			{
				item.preview_url.content_descriptors[j] = steam_ugc_get_query_ugc_content_descriptors(data.query_handle,i,j)
			}
			
			show_debug_message(item)
			instance_create_depth(500, 350 + i*100, depth, obj_steam_ugc_item, {data: item})
		}
		
		steam_ugc_release_query_ugc_request(data.query_handle)
	}