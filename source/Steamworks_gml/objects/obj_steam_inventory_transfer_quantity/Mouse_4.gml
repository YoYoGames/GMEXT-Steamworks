
// Suppose you already found the player's coin stack from inventory:

var qty = 2

var coin_instance_id = noone
with(obj_steam_inventory_item)
if(data.itemdefid == 201 and data.quantity >= qty)//coin
{
	//0: { state : "", quantity : "9", itemid : "605308897317085313", accountid : "76561199257286820", originalitemid : "605308897317085313", appid : "2804000", acquired : "20260310T030352Z", Origin : "external", state_changed_timestamp : "20260310T051502Z", itemdefid : "201" }
	coin_instance_id = int64(data.itemid)
	break
}

if(coin_instance_id == noone)
	exit



var new_coin_instance_id = int64("18446744073709551615");//equivalent of (std::uint64_t)k_SteamItemInstanceIDInvalid and equals to ~0 (64-bit) = 0xFFFFFFFFFFFFFFFF
var h = steam_inventory_transfer_item_quantity(coin_instance_id, qty,new_coin_instance_id,
    function(data) {
        show_debug_message("transfer callback");
        show_debug_message(data);

        var status = steam_inventory_get_result_status(data.result_handle);
        show_debug_message("transfer status=" + string(status));

        var items = steam_inventory_get_result_items(data.result_handle);
        show_debug_message(items);
    }
);

