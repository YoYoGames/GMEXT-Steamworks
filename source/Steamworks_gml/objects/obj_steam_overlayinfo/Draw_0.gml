
draw_set_font(Font_YoYo_20);
draw_set_valign(fa_top);
draw_set_halign(fa_left);

var _i = 0;

// This presents information regarding the overlay being enabled/activated
// NOTE: The overlay will not work on macOS and Linux when running from IDE
draw_text(50,100 + _i++ * 30,"steam_get_persona_name: " + string(steam_get_persona_name()))
draw_text(50,100 + _i++ * 30,"steam_is_overlay_enabled: " + string(steam_is_overlay_enabled()))
draw_text(50,100 + _i++ * 30,"steam_is_overlay_activated: " + string(steam_is_overlay_activated()))
