
event_inherited();

item_def = real(data.itemdefid);
show_debug_message($"[InventoryItem] Creating - itemid={data.itemid}, itemdef={item_def}, qty={data.quantity}");

var keys = steam_inventory_get_item_definition_property_keys(item_def);
show_debug_message($"[InventoryItem] Available properties: {array_length(keys)} keys");

var item_def_properties = {};
for(var b = 0; b < array_length(keys); b++) {
	var key = keys[b];
	var value = steam_inventory_get_item_definition_property(item_def, key);

	if(!is_undefined(value)) {
		struct_set(item_def_properties, key, value);
	}
}

show_debug_message($"[InventoryItem] Loaded {struct_names_count(item_def_properties)} properties");

var display_name = "Item " + string(item_def);
if (struct_exists(item_def_properties, "name")) {
	display_name = item_def_properties.name;
} else if (struct_exists(item_def_properties, "display_name")) {
	display_name = item_def_properties.display_name;
}

text = $"({data.quantity}){display_name}";
show_debug_message($"[InventoryItem] Display: {text}");
