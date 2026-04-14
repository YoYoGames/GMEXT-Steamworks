
with(obj_steam_ugc_item)
	instance_destroy();

var array = steam_ugc_get_subscribed_items(5,false)
var query_handle = steam_ugc_create_query_ugc_details_request(array,array_length(array));

// Here are some filter functions you can apply to yout query
//steam_ugc_add_required_tag(query_handle, "Single-player");
//steam_ugc_set_return_long_description(query_handle, true);
//steam_ugc_set_allow_cached_response(query_handle, true);
//steam_ugc_set_return_total_only(query_handle,1)
//steam_ugc_set_search_text(query_handle,"*&^%$#@!")
//steam_ugc_add_excluded_tag(query_handle,"Single-player")

// Send the query request (triggers async event)
query_ID = steam_ugc_send_query_ugc_request(query_handle,obj_steam_ugc.items_query_handler);

		