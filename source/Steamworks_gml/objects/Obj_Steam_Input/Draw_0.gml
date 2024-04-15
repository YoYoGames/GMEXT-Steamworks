/// @description Draw info

// Feather disable GM2017
draw_set_font(fnt_gm_15);
draw_set_valign(fa_top);
draw_set_halign(fa_left);

var _i = 0;
var _x = 50, _y = 100, _m = 30;

for (_i = 0; _i < array_length(controllers); ++_i) {
	var conhandle = controllers[@ _i];
	steam_input_activate_action_set(conhandle, action_sets.menu_controls);
	
	var _cs = "";
	
	_cs += string(conhandle)
		+ ", MenuSelect = " + string(steam_input_get_digital_action_data(conhandle, digital_actions.menu_select))
		+ " - Xbox A button in this controller -> ";
		
	var _menu_select_origins = steam_input_get_digital_action_origins(conhandle, action_sets.menu_controls, digital_actions.menu_select);
	// try to figure out how would an xbox button "A" look like...
	var _origin = steam_input_get_action_origin_from_xbox_origin(conhandle, steam_input_xbox_origin_a);
	var _originsprpath = steam_input_get_glyph_png_for_action_origin(_origin, steam_input_glyph_size_small, steam_input_glyph_style_knockout);
	// checks if a png at this path was already loaded before or not
	// (don't want to load a batshit crazy amount of times)
	var _originspr = ensureSpriteExists(_originsprpath);
	draw_text(_x, _y + _i * _m, _cs);
	var _csw = string_width(_cs) + 1;
	draw_sprite(_originspr, 0, _x + _csw, _y + _i * _m);
}
