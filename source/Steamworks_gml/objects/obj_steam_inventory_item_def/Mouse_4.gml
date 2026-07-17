var itemDefQ = new SteamInventoryItemDefQuantity();
itemDefQ.itemdef_id = data.itemdefid;
itemDefQ.quantity = 1;

show_debug_message($"[ItemDefPurchase] Starting purchase for def={data.itemdefid}");

steam_inventory_start_purchase([itemDefQ], function(_data) {
	show_debug_message("[ItemDefPurchase] Callback triggered");
	show_debug_message($"[ItemDefPurchase] Result: {_data.result}");
	show_debug_message($"[ItemDefPurchase] Full data: {_data}");
});

