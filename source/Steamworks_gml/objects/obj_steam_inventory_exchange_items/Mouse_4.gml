// Suppose you already found the player's coin stack from inventory:

var gen_defs = [202];
var gen_qty  = [1];

var coin_instance_id = noone
with(obj_steam_inventory_item)
if(data.itemdefid == 201 and data.quantity >= 2)//coin
{
	//0: { state : "", quantity : "9", itemid : "605308897317085313", accountid : "76561199257286820", originalitemid : "605308897317085313", appid : "2804000", acquired : "20260310T030352Z", Origin : "external", state_changed_timestamp : "20260310T051502Z", itemdefid : "201" }
	coin_instance_id = int64(data.itemid)
	break
}

if(coin_instance_id == noone)
	exit

var dst_ids  = [coin_instance_id];
var dst_qty  = [2];

var h = steam_inventory_exchange_items(
    gen_defs, gen_qty, array_length(gen_defs),
    dst_ids, dst_qty, array_length(dst_ids),
    function(data) {
        show_debug_message("exchange callback");
        show_debug_message(data);

        var status = steam_inventory_get_result_status(data.result_handle);
        show_debug_message("exchange status=" + string(status));

        var items = steam_inventory_get_result_items(data.result_handle);
        show_debug_message(items);
    }
);

show_debug_message("ExchangeItems handle=" + string(h));