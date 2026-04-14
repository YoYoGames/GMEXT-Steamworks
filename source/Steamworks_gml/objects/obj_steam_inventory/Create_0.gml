
event_inherited();

text = "Inventory"

steam_inventory_set_callback_result_ready(function(data){
			//if you want a globalized callback.... better no...
			//Useful only as fallback / debugging / generic catch-all
		    steam_inventory_destroy_result(data.result_handle);
		});

steam_inventory_set_callback_full_update(function(data){
			//treiggered by steam_inventory_get_all_items() and when inventory was totally updated....
			show_debug_message("steam_inventory_set_callback_full_update")
			show_debug_message(data)
			
			with(obj_steam_inventory_item)
				instance_destroy()
			
			//if (data.result != SteamApiResult.Ok) {
			//    steam_inventory_destroy_result(data.result_handle);
			//    return;
			//}
			
			var items = steam_inventory_get_result_items(data.result_handle);

			var _x = 800
			var _y = 150
			
			show_debug_message("---- ITEMS ----");	
			for (var i = 0; i < items.count; i++)
			{
				var _data = {}
			    var keys = steam_inventory_get_result_item_property_keys_array(data.result_handle, i);
			    for (var k = 0; k < array_length(keys); k++)
			    {
			        var key = keys[k]
			        var value_struct = steam_inventory_get_result_item_property(data.result_handle,i,key);
			        if (value_struct.ok)
						struct_set(_data,key,value_struct.value)
			    }
				show_debug_message($"{i}: {_data}")
		
				//use this if you want delete all your items....
				//steam_inventory_consume_item(int64(_data.itemid),real(_data.quantity))
				instance_create_depth(_x,_y,0,obj_steam_inventory_item,{data:_data})
				_y += 80
			}
		
			steam_inventory_destroy_result(data.result_handle);
		})


//Auxiliar function
function items_definitions_update(){
			//steam_inventory_load_item_definitions() (only first time) or global change of definitions
			with(obj_steam_inventory_item_def)
				instance_destroy()
				
			var items = steam_inventory_get_item_definition_ids(100)
			show_debug_message($"item_definition_ids: {items}")
			
			var _x = 100
			var _y = 150
			for(var a = 0 ; a < array_length(items) ; a++)
			{
				var item_def = items[a]
				var keys = steam_inventory_get_item_definition_property_keys(item_def)
				//show_debug_message(keys)

				var _data = {}
				for(var b = 0 ; b < array_length(keys) ; b++)
				{
					var key = keys[b]
					var value = steam_inventory_get_item_definition_property(item_def,key)
					//show_debug_message($"{key}:{value}")
					
					if(value.ok)
						struct_set(_data,key,value.value)
				}
				
				show_debug_message(_data)
				instance_create_depth(_x,_y,0,obj_steam_inventory_item_def,{data:_data})
				_y += 80
			}
		}

steam_inventory_set_callback_definition_update(function(data){
			show_debug_message("steam_inventory_set_callback_definition_update")
			show_debug_message(data)
			items_definitions_update()
		})


var items = steam_inventory_get_item_definition_ids(100)
if(array_length(items))
	items_definitions_update()
else
	steam_inventory_load_item_definitions()

