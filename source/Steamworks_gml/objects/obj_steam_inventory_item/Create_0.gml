
event_inherited();

item_def = real(data.itemdefid)
var keys = steam_inventory_get_item_definition_property_keys(item_def)
//show_debug_message(keys)

var item_def_properties = {}
for(var b = 0 ; b < array_length(keys) ; b++)
{
	var key = keys[b]
	var value = steam_inventory_get_item_definition_property(item_def,key)
	//show_debug_message($"{key}:{value}")
					
	if(value.ok)
		struct_set(item_def_properties,key,value.value)
}

show_debug_message(item_def_properties)

text = $"({data.quantity}){item_def_properties.name}"
