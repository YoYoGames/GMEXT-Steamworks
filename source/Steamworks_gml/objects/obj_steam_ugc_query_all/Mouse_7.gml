
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items,1);

// Here are some filter functions you can apply to yout query
//steam_ugc_query_add_required_tag(query_handle, "Single-player");
//steam_ugc_query_set_return_long_description(query_handle, true);
//steam_ugc_query_set_allow_cached_response(query_handle, true);
//steam_ugc_query_set_return_total_only(query_handle,1)
//steam_ugc_query_set_search_text(query_handle,"*&^%$#@!")
//steam_ugc_query_add_excluded_tag(query_handle,"Single-player")

// Send the query request (triggers async event)
query_ID = steam_ugc_send_query(query_handle);

