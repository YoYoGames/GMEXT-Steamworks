
var item1 = new SteamInventoryItemDefQuantity()
item.itemdef_id = 201
item.quantity = 3

var item2 = new SteamInventoryItemDefQuantity()
item.itemdef_id = 202
item.quantity = 2

var h = steam_inventory_generate_items([item1,item2],function(data){show_debug_message($"generate_items: {data}")});
show_debug_message("GenerateItems handle=" + string(h));

