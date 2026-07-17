var gen_item = new SteamInventoryItemDefQuantity();
gen_item.itemdef_id = 202;
gen_item.quantity = 1;

var coin_instance_id = noone;
with(obj_steam_inventory_item) {
	if(data.itemdefid == 201 and data.quantity >= 2) {
		coin_instance_id = int64(data.itemid);
		break;
	}
}

if(coin_instance_id == noone) {
	show_debug_message("[ExchangeItems] ERROR: No coin stack found with itemdef=201 and qty>=2");
	exit;
}

show_debug_message($"[ExchangeItems] Found coin: {coin_instance_id}");

var consume_item = new SteamInventoryItemInstanceQuantity();
consume_item.item_instance_id = coin_instance_id;
consume_item.quantity = 2;

show_debug_message($"[ExchangeItems] Requesting exchange: generate def=202 qty=1, consume qty=2");

var h = steam_inventory_exchange_items(
	[gen_item],
	[consume_item],
	function(data) {
		show_debug_message("[ExchangeItems] Callback triggered");
		show_debug_message($"[ExchangeItems] Result: {data.result}, Handle: {data.result_handle}");

		var status = steam_inventory_get_result_status(data.result_handle);
		show_debug_message($"[ExchangeItems] Status: {status}");

		var items = steam_inventory_get_result_items(data.result_handle);
		if (!is_undefined(items)) {
			show_debug_message($"[ExchangeItems] Items: {array_length(items)}");
		} else {
			show_debug_message("[ExchangeItems] No items returned");
		}

		steam_inventory_destroy_result(data.result_handle);
	}
);

show_debug_message($"[ExchangeItems] Request sent, handle={h}");