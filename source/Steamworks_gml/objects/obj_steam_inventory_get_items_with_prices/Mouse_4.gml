
//handle = steam_inventory_get_num_items_with_prices()
//handle = steam_inventory_get_items_with_prices

steam_inventory_request_prices(function(r) {
		    show_debug_message("RequestPrices result=" + string(r.result));
		    show_debug_message("Currency=" + r.currency);

var num = steam_inventory_get_num_items_with_prices()
show_debug_message(num)


		    var prices = steam_inventory_get_items_with_prices(num);
		    if (!prices.ok) {
		        show_debug_message("GetItemsWithPrices failed");
		        return;
		    }

		    for (var i = 0; i < prices.count; i++) {
		        show_debug_message(
		            "Def=" + string(prices.item_def_ids[i]) +
		            " Current=" + string(prices.current_prices[i]) +
		            " Base=" + string(prices.base_prices[i])
		        );
		    }
		});