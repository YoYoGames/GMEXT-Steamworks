var h = steam_inventory_add_promo_item(501, function(data) {
	show_debug_message("[AddPromo] Callback triggered");
	show_debug_message($"[AddPromo] Result: {data.result}, Handle: {data.result_handle}");

	var status = steam_inventory_get_result_status(data.result_handle);
	show_debug_message($"[AddPromo] Status: {status}");

	var items = steam_inventory_get_result_items(data.result_handle);
	if (!is_undefined(items)) {
		show_debug_message($"[AddPromo] Items returned: {array_length(items)}");
	} else {
		show_debug_message("[AddPromo] No items returned");
	}

	steam_inventory_destroy_result(data.result_handle);
});

show_debug_message($"[AddPromo] Request sent, handle={h}");