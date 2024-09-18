
draw_set_font(fnt_gm_20);
draw_set_halign(fa_left);
draw_set_valign(fa_top);

var _i = 0;

// This function returns wether or not the steam extension was initialized
// You should check this before using any of the other functions.
// NOTE: Your app will still work but functions will not return any values 
draw_text(50,100 + _i++ * 30,"steam_initialised: " + string(steam_initialised()));

// General information functions
draw_text(50, 100 + _i++ * 30,"steam_current_game_language: " + string(steam_current_game_language()) + ", ui_language: " + string(steam_utils_get_steam_ui_language()));
draw_text(50, 100 + _i++ * 30,"steam_available_languages: " + string(steam_available_languages()));
draw_text(50, 100 + _i++ * 30,"steam_user_owns_dlc [447130]: " + string(steam_user_owns_dlc(447130)));
draw_text(50, 100 + _i++ * 30,"steam_user_installed_dlc [447130]: " + string(steam_user_installed_dlc(447130)));

draw_text(50, 100 + _i++ * 30,"steam_is_user_logged_on: " + string(steam_is_user_logged_on()));
draw_text(50, 100 + _i++ * 30,"steam_get_user_steam_id: " + string(steam_get_user_steam_id()));
draw_text(50, 100 + _i++ * 30,"steam_get_user_account_id: " + string(steam_get_user_account_id()));
draw_text(50, 100 + _i++ * 30,"steam_get_app_id: " + string(steam_get_app_id()));

draw_text(50, 100 + _i++ * 30,"steam_is_screenshot_requested: " + string(steam_is_screenshot_requested()));

draw_text(50, 100 + _i++ * 30,"steam_is_subscribed: " + string(steam_is_subscribed()));

draw_text(50, 100 + _i++ * 30,"steam_get_persona_name: " + string(steam_get_persona_name()))

draw_text(50, 100 + _i++ * 30,"is on steam deck: " + string(steam_utils_is_steam_running_on_steam_deck()))

draw_text(50, 100 + _i++ * 30,"server real time: " + string(steam_utils_get_server_real_time()))

