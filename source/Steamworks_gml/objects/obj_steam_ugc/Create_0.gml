
steam_ugc_set_callback_item_installed(function(data){show_debug_message($"steam_ugc_set_callback_item_installed: {data}")})

steam_ugc_set_callback_user_subscribed_items_list_changed(function(data){show_debug_message($"steam_ugc_set_callback_user_subscribed_items_list_changed: {data}")})


items_query_handler = function(data) {
    with(obj_steam_ugc_item)
        instance_destroy()
    
    show_debug_message($"steam_ugc_send_query_ugc_request: {data}")
    
    for(var i = 0; i < data.total_matching_results; i++) {
        var item = steam_ugc_get_query_ugc_result(data.query_handle, i)
        
        if(is_undefined(item))
            continue
        
        item.preview_url = steam_ugc_get_query_ugc_preview_url(data.query_handle, i)
        
        item.statistics = {
            NumSecondsPlayed: steam_ugc_get_query_ugc_statistic(data.query_handle, i, SteamUgcStatisticType.NumSecondsPlayed),
            NumFollowers: steam_ugc_get_query_ugc_statistic(data.query_handle, i, SteamUgcStatisticType.NumFollowers),
            NumComments: steam_ugc_get_query_ugc_statistic(data.query_handle, i, SteamUgcStatisticType.NumComments),
            NumPlaytimeSessions: steam_ugc_get_query_ugc_statistic(data.query_handle, i, SteamUgcStatisticType.NumPlaytimeSessions)
        }
        
        // Additional previews
        item.additional_previews = []
        var num = steam_ugc_get_query_ugc_num_additional_previews(data.query_handle, i)
        for(var j = 0; j < num; j++) {
            item.additional_previews[j] = steam_ugc_get_query_ugc_additional_preview(data.query_handle, i, j, "")
        }
        
        // Key-value tags
        item.key_value_tags = []
        num = steam_ugc_get_query_ugc_num_key_value_tags(data.query_handle, i)
        for(var j = 0; j < num; j++) {
            item.key_value_tags[j] = steam_ugc_get_query_ugc_key_value_tag(data.query_handle, i, j)
        }
        
        // Content descriptors—call once with reasonable max
        item.content_descriptors = steam_ugc_get_query_ugc_content_descriptors(data.query_handle, i, 10)
        
        show_debug_message(item)
        instance_create_depth(500, 350 + i*100, depth, obj_steam_ugc_item, {data: item})
    }
    
    steam_ugc_release_query_ugc_request(data.query_handle)
}