/// @description Draw info

// Feather disable GM2017
draw_set_font(fnt_gm_15);
draw_set_valign(fa_top);
draw_set_halign(fa_left);

var _x = 50, _y = 100, _m = 30;
for (var _i = 0; _i < array_length(controllers); ++_i) {
	
	var conhandle = controllers[_i];
	
	var _origin = steam_input_get_action_origin_from_xbox_origin(conhandle, SteamXboxOrigin.A);
	var _originsprpath = steam_input_get_glyph_png_for_action_origin(_origin, SteamInputGlyphSize.Small, SteamInputGlyphStyle.Knockout);
	var _originspr = button_sprite_exists(_originsprpath);
	
	var _cs = $"{conhandle}, MenuSelect = {steam_input_get_digital_action_data(conhandle, digital_actions.menu_select)} - Xbox A button in this controller -> ";
	draw_text(_x,_y+_i*_m,_cs);
	if(sprite_exists(_originspr))
		draw_sprite(_originspr,0,_x+string_width(_cs)+1,_y+_i*_m);
}
