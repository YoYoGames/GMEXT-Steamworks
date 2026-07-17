event_inherited();

show_debug_message($"[ItemDef] Creating - itemdef={data.itemdefid}");

var display_name = "ItemDef " + string(data.itemdefid);
if (struct_exists(data, "name")) {
	display_name = data.name;
} else if (struct_exists(data, "display_name")) {
	display_name = data.display_name;
}

text = display_name;
show_debug_message($"[ItemDef] Display: {text}");
