
var itemDefQ = new SteamInventoryItemDefQuantity()
itemDefQ.itemdef_id = data.itemdefid
itemDefQ.quantity = 1

steam_inventory_start_purchase(itemDefQ,function(_data){
		show_debug_message(_data)
	})
