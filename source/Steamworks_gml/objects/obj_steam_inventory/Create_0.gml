
event_inherited();

text = "Inventory";
_result_handle_destroyed = false;

steam_inventory_set_callback_result_ready(function(data){
	show_debug_message("[Inventory] Result ready callback");
	show_debug_message($"[Inventory] Data: {data}");
	if (struct_exists(data, "result_handle") && !_result_handle_destroyed) {
		steam_inventory_destroy_result(data.result_handle);
		_result_handle_destroyed = true;
	}
});

steam_inventory_set_callback_full_update(function(data){
	show_debug_message("[Inventory] Full update callback triggered");
	show_debug_message($"[Inventory] Data: {data}");

	with(obj_steam_inventory_item)
		instance_destroy();

	var items = steam_inventory_get_result_items(data.result_handle);

	if(is_undefined(items)) {
		show_debug_message("[Inventory] No items returned from result");
		if (!_result_handle_destroyed) {
			steam_inventory_destroy_result(data.result_handle);
			_result_handle_destroyed = true;
		}
		return;
	}

	show_debug_message($"[Inventory] Found {array_length(items)} inventory items");

	var _x = 800;
	var _y = 150;

	for (var i = 0; i < array_length(items); i++) {
		var _data = {};
		var keys = steam_inventory_get_result_item_property_keys_array(data.result_handle, i);

		if(!is_undefined(keys)) {
			for (var k = 0; k < array_length(keys); k++) {
				var key = keys[k];
				var _value = steam_inventory_get_result_item_property(data.result_handle, i, key);
				if(!is_undefined(_value))
					struct_set(_data, key, _value);
			}
		}

		show_debug_message($"[Inventory] Item {i}: id={_data.itemid}, def={_data.itemdefid}, qty={_data.quantity}");
		instance_create_depth(_x, _y, 0, obj_steam_inventory_item, {data: _data});
		_y += 80;
	}

	if (!_result_handle_destroyed) {
		steam_inventory_destroy_result(data.result_handle);
		_result_handle_destroyed = true;
	}
})


function items_definitions_update(){
	show_debug_message("[ItemDef] Updating item definitions...");

	with(obj_steam_inventory_item_def)
		instance_destroy();

	var items = steam_inventory_get_item_definition_ids(100);
	show_debug_message($"[ItemDef] Found {array_length(items)} item definition IDs");

	var _x = 100;
	var _y = 150;

	for(var a = 0; a < array_length(items); a++) {
		var item_def = items[a];
		var keys = steam_inventory_get_item_definition_property_keys(item_def);

		var _data = {};
		for(var b = 0; b < array_length(keys); b++) {
			var key = keys[b];
			var value = steam_inventory_get_item_definition_property(item_def, key);

			if(!is_undefined(value))
				struct_set(_data, key, value);
		}

		_data.itemdefid = item_def;
		show_debug_message($"[ItemDef] Def {a}: id={item_def}, props={struct_names_count(_data)}");
		instance_create_depth(_x, _y, 0, obj_steam_inventory_item_def, {data: _data});
		_y += 80;
	}
}

steam_inventory_set_callback_definition_update(function(data){
	show_debug_message("[Inventory] Definition update callback triggered");
	show_debug_message($"[Inventory] Data: {data}");
	items_definitions_update();
});


var items = steam_inventory_get_item_definition_ids(100)
if(array_length(items))
	items_definitions_update()
else
	steam_inventory_load_item_definitions()

