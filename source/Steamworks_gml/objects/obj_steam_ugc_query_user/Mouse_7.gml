

query_handle = steam_ugc_create_query_user_ugc_request(
	steam_user_get_steam_id().account_id,
	SteamUserUgcList.Published,
	SteamUgcMatchingUgcType.Items,
	SteamUserUgcListSortOrder.TitleAsc,
	steam_utils_get_app_id(),
	steam_utils_get_app_id(),
	1);

//var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend,ugc_match_Items,1);

//steam_ugc_add_required_tag(query_handle, "Single-player");
//steam_ugc_set_return_long_description(query_handle, true);
//steam_ugc_set_allow_cached_response(query_handle, true);
//steam_ugc_set_return_total_only(query_handle,1)
//steam_ugc_set_search_text(query_handle,"*&^%$#@!")
//steam_ugc_add_excluded_tag(query_handle,"Single-player")

query_ID = steam_ugc_send_query_ugc_request(query_handle,obj_steam_ugc.items_query_handler);

//ugc_filetype_microtrans


