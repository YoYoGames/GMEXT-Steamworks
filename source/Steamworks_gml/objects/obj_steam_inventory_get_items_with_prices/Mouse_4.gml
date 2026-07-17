show_debug_message("[PricesWithItems] Requesting item prices");

steam_inventory_request_prices(function(r) {
	show_debug_message("[PricesWithItems] Callback triggered");
	show_debug_message($"[PricesWithItems] Result: {r.result}");
	show_debug_message($"[PricesWithItems] Currency: {r.currency}");

	var num = steam_inventory_get_num_items_with_prices();
	show_debug_message($"[PricesWithItems] Item count: {num}");

	var prices = steam_inventory_get_items_with_prices();
	if (!prices.ok) {
		show_debug_message("[PricesWithItems] ERROR: GetItemsWithPrices failed");
		return;
	}

	show_debug_message($"[PricesWithItems] Retrieved {prices.count} items with prices");
	for (var i = 0; i < prices.count; i++) {
		show_debug_message(
			$"[PricesWithItems] Item {i}: Def={prices.item_def_ids[i]} " +
			$"Current={prices.current_prices[i]} Base={prices.base_prices[i]}"
		);
	}
});