show_debug_message($"[InventoryItem] Consuming item {data.itemid} (def={data.itemdefid})");

steam_inventory_consume_item(int64(data.itemid), 1, function(_data) {
	show_debug_message("[InventoryItem] Consume callback triggered");
	show_debug_message($"[InventoryItem] Result: {_data.result}, Handle: {_data.result_handle}");

	var status = steam_inventory_get_result_status(_data.result_handle);
	show_debug_message($"[InventoryItem] Status: {status}");

	var items = steam_inventory_get_result_items(_data.result_handle);
	if (!is_undefined(items)) {
		show_debug_message($"[InventoryItem] Items returned: {array_length(items)}");
	}

	steam_inventory_destroy_result(_data.result_handle);
});
