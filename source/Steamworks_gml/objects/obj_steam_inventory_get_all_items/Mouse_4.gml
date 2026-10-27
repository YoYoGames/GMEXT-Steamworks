show_debug_message("[GetAllItems] Requesting all inventory items");

var handle = steam_inventory_get_all_items();

show_debug_message($"[GetAllItems] Request sent, handle={handle}");
