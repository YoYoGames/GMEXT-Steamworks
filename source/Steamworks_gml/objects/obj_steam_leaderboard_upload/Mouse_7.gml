
show_debug_message("POST steam_create_leaderboard")

steam_userstats_find_leaderboard(SteamLeaderboard,function(data){
		if(data.leaderboard_found)
		{
			var buff = buffer_create(256, buffer_fixed, 1);
			var score_details = [];

			steam_userstats_upload_leaderboard_score(
			    data.leaderboard_handle,
			    SteamLeaderboardUploadScoreMethod.ForceUpdate,
			    irandom(1000),
			    score_details,
			    function(data){
			        show_debug_message(data)
			    }
			);

			buffer_delete(buff);
		}
	})
