var itemDefQ = new SteamInventoryItemDefQuantity();
itemDefQ.itemdef_id = data.itemdefid;
itemDefQ.quantity = 1;

show_debug_message($"[ItemDefPurchase] Starting purchase for def={data.itemdefid}");

steam_inventory_start_purchase([itemDefQ], function(_data) {
	show_debug_message("[ItemDefPurchase] Callback triggered");
	show_debug_message($"[ItemDefPurchase] Result: {_data.result}");
	show_debug_message($"[ItemDefPurchase] Full data: {_data}");

	if (_data.result != SteamApiResult.Ok) {
		show_debug_message($"[ItemDefPurchase] ERROR: Purchase failed with result {_data.result}");
		if (struct_exists(_data, "result_handle")) {
			steam_inventory_destroy_result(_data.result_handle);
		}
		return;
	}

	if (struct_exists(_data, "result_handle")) {
		steam_inventory_destroy_result(_data.result_handle);
	}
});

