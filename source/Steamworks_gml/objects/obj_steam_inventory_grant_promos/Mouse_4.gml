show_debug_message("[GrantPromo] Requesting promo items grant");

var h = steam_inventory_grant_promo_items(function(data) {
	show_debug_message("[GrantPromo] Callback triggered");
	show_debug_message($"[GrantPromo] Result: {data.result}, Handle: {data.result_handle}");

	var status = steam_inventory_get_result_status(data.result_handle);
	show_debug_message($"[GrantPromo] Status: {status}");

	var items = steam_inventory_get_result_items(data.result_handle);
	if (!is_undefined(items)) {
		show_debug_message($"[GrantPromo] Items granted: {array_length(items)}");
	} else {
		show_debug_message("[GrantPromo] No items returned");
	}

	steam_inventory_destroy_result(data.result_handle);
});

show_debug_message($"[GrantPromo] Request sent, handle={h}");