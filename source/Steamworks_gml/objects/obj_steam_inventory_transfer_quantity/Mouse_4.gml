var qty = 2;

var coin_instance_id = noone;
with(obj_steam_inventory_item) {
	if(data.itemdefid == 201 and data.quantity >= qty) {
		coin_instance_id = int64(data.itemid);
		break;
	}
}

if(coin_instance_id == noone) {
	show_debug_message("[TransferQuantity] ERROR: No coin stack found with itemdef=201 and qty>=2");
	exit;
}

show_debug_message($"[TransferQuantity] Found coin: {coin_instance_id} with qty={qty}");

var new_coin_instance_id = int64("18446744073709551615");
show_debug_message($"[TransferQuantity] Transferring {qty} from {coin_instance_id} to new stack");

var h = steam_inventory_transfer_item_quantity(coin_instance_id, qty, new_coin_instance_id,
	function(data) {
		show_debug_message("[TransferQuantity] Callback triggered");
		show_debug_message($"[TransferQuantity] Result: {data.result}, Handle: {data.result_handle}");

		var status = steam_inventory_get_result_status(data.result_handle);
		show_debug_message($"[TransferQuantity] Status: {status}");

		var items = steam_inventory_get_result_items(data.result_handle);
		if (!is_undefined(items)) {
			show_debug_message($"[TransferQuantity] Items: {array_length(items)}");
		} else {
			show_debug_message("[TransferQuantity] No items returned");
		}

		steam_inventory_destroy_result(data.result_handle);
	}
);

show_debug_message($"[TransferQuantity] Request sent, handle={h}");
