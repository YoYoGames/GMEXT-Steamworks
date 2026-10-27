
draw_set_font(fnt_gm_20);
draw_set_halign(fa_left);
draw_set_valign(fa_top);

var _i = 0;

// This function returns wether or not the steam extension was initialized
// You should check this before using any of the other functions.
// NOTE: Your app will still work but functions will not return any values 
draw_text(50,100 + _i++ * 30,$"initialised: {steam_api_is_initialized()}");
draw_text(50, 100 + _i++ * 30,$"get_app_id: {steam_utils_get_app_id()}");

draw_text(50, 100 + _i++ * 30,$"is_user_logged_on: {steam_user_logged_on()}");
draw_text(50, 100 + _i++ * 30,$"get_user_steam_id: {steam_user_get_steam_id()}");
//draw_text(50, 100 + _i++ * 30,$"steam_id decoded: {steam_user_decode_steam_id(steam_user_get_steam_id())}");


// General information functions

draw_text(50, 100 + _i++ * 30,$"current_game_language: {steam_apps_get_current_game_language()}")
draw_text(50, 100 + _i++ * 30,$"utils_get_steam_ui_language: {steam_utils_get_steam_ui_language()}");
draw_text(50, 100 + _i++ * 30,$"available_languages: {steam_apps_get_available_game_languages()}");
draw_text(50, 100 + _i++ * 30,$"user_owns_dlc [447130]: {steam_apps_is_subscribed_app(447130)}");
draw_text(50, 100 + _i++ * 30,$"user_installed_dlc [447130]: {steam_apps_is_dlc_installed(447130)}");

//draw_text(50, 100 + _i++ * 30,"steam_is_screenshot_requested: " + string(steam_is_screenshot_requested()));

draw_text(50, 100 + _i++ * 30,$"is_subscribed: {steam_apps_is_subscribed()}");

draw_text(50, 100 + _i++ * 30,$"is on steam deck: {steam_utils_is_steam_running_on_steam_deck()}")

draw_text(50, 100 + _i++ * 30,$"server real time: {steam_utils_get_server_real_time()}")

