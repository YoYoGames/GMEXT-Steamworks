

steam_userstats_request_global_stats(60,function(data){
	
			show_debug_message($"steam_userstats_request_global_stats: {data}")
			
			// Note that:
			//	* steam_get_global_stat_int
			//  * steam_get_global_stat_history_int will
			// only apply to stats marked as int64 in the Steam dashboard if they are marked
			// as double then use the _real counter functions instead
	
			// This will return the comulative sum of the stat (will return NaN on failure)
			show_debug_message(steam_userstats_global_stat_int64("NumWins"));
			show_debug_message(steam_userstats_global_stat_history_double("WalkedDist"));
			// This will return an array of history values (will return empty array on failure)
			show_debug_message(steam_userstats_global_stat_history_int64("NumWins"));
			show_debug_message(steam_userstats_global_stat_history_double("WalkedDist"));
		
	})

steam_userstats_request_global_achievement_percentages(function(){
			// This will return a struct with the following information:
			//
			// * iterator : handle to be used in steam_get_next_most_achieved_achievement_info 
			// * achievement: the name (id) of the achievement
			// * percentage: the global achieved percentage
			// * achieved: whether or not the current user has achieved this achievement.
			// 
			show_debug_message(steam_userstats_most_achieved_achievement_info())
		}
	)

steam_userstats_number_of_current_players(function(data){ show_debug_message($"steam_userstats_number_of_current_players: {data}") })

