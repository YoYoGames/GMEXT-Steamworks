/// @description Insert description here
// You can write your code in this editor

switch (async_load[? "event_type"]) {
	case "steam_request_global_stats":
	
		// Note that:
		//	* steam_get_global_stat_int
		//  * steam_get_global_stat_history_int will
		// only apply to stats marked as int64 in the Steam dashboard if they are marked
		// as double then use the _real counter functions instead
	
		// This will return the comulative sum of the stat (will return NaN on failure)
		show_debug_message(steam_get_global_stat_int("NumWins"));
		show_debug_message(steam_get_global_stat_real("WalkedDist"));
		// This will return an array of history values (will return empty array on failure)
		show_debug_message(steam_get_global_stat_history_int("NumWins"));
		show_debug_message(steam_get_global_stat_history_real("WalkedDist"));
		break;
	case "steam_request_global_achievement_percentages":
		
		// This will return a struct with the following information:
		//
		// * iterator : handle to be used in steam_get_next_most_achieved_achievement_info 
		// * achievement: the name (id) of the achievement
		// * percentage: the global achieved percentage
		// * achieved: whether or not the current user has achieved this achievement.
		// 
		show_debug_message(steam_get_most_achieved_achievement_info());
		break;
	case "number_of_current_players":
	
		// This contains the actual result of steam_get_number_of_current_players
		if (async_load[? "success"]) {
			var players = async_load[? "players"];
			show_debug_message(string(players) + " players are playing this game");
			globalplayers = string(players) + " players";
		} else {
			show_debug_message("Call to steam_get_number_of_current_players failed");
			globalplayers = "failed";
		}
		break;
}