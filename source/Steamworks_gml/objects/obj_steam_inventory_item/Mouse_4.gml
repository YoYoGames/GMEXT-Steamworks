
steam_inventory_consume_item(int64(data.itemid),1,function(_data){
			show_debug_message(_data)
			steam_inventory_destroy_result(_data.result_handle);
		})

