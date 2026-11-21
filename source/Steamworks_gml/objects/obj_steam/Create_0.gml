
// This variable is used for game_restart() purposes.
is_game_restarting = false;

randomize();

#macro SteamLeaderboard "YYLeaderboard_10/29/21--"

var steam_app_id = extension_get_option_value("Steamworks","appID")

show_debug_message(steam_api_init(steam_app_id))

steam_api_restart_app_if_necessary(steam_app_id)

if(steam_api_is_initialized()) 
	room_goto(rm_steam_main);

handle = -1;
