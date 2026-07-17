var item1 = new SteamInventoryItemDefQuantity();
item1.itemdef_id = 201;
item1.quantity = 3;

var item2 = new SteamInventoryItemDefQuantity();
item2.itemdef_id = 202;
item2.quantity = 2;

show_debug_message("[GenerateItems] Requesting: def=201 qty=3, def=202 qty=2");

var h = steam_inventory_generate_items([item1, item2], function(data) {
	show_debug_message("[GenerateItems] Callback triggered");
	show_debug_message($"[GenerateItems] Result: {data.result}, Handle: {data.result_handle}");

	var items = steam_inventory_get_result_items(data.result_handle);
	if (!is_undefined(items)) {
		show_debug_message($"[GenerateItems] Items generated: {array_length(items)}");
		for (var i = 0; i < array_length(items); i++) {
			show_debug_message($"[GenerateItems]   Item {i}: {items[i]}");
		}
	} else {
		show_debug_message("[GenerateItems] No items returned");
	}

	steam_inventory_destroy_result(data.result_handle);
});

show_debug_message($"[GenerateItems] Request sent, handle={h}");

