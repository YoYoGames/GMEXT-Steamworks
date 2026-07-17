show_debug_message("[TriggerDrop] Requesting item drop for itemdef=10");

var h = steam_inventory_trigger_item_drop(10, function(data) {
	show_debug_message("[TriggerDrop] Callback triggered");
	show_debug_message($"[TriggerDrop] Result: {data.result}, Handle: {data.result_handle}");

	var status = steam_inventory_get_result_status(data.result_handle);
	show_debug_message($"[TriggerDrop] Status: {status}");

	var items = steam_inventory_get_result_items(data.result_handle);
	if (!is_undefined(items)) {
		show_debug_message($"[TriggerDrop] Items dropped: {array_length(items)}");
	} else {
		show_debug_message("[TriggerDrop] No items returned");
	}

	steam_inventory_destroy_result(data.result_handle);
});

show_debug_message($"[TriggerDrop] Request sent, handle={h}");