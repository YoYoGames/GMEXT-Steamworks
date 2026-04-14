
show_debug_message("POST steam_create_leaderboard")

steam_userstats_find_leaderboard(SteamLeaderboard,function(data){
		if(data.leaderboard_found)
		{
			var buff = buffer_create(256, buffer_fixed, 1);
			buffer_write(buff, buffer_u8, irandom(100));
			buffer_write(buff, buffer_string,steam_friends_get_persona_name() + " was here :)");
			
			steam_userstats_upload_leaderboard_score(
				data.leaderboard_handle,
				SteamLeaderboardUploadScoreMethod.KeepBest,
				irandom(1000),
				buff,
				buffer_tell(buff),
				function(data){
					show_debug_message(data)
				})
			
			buffer_delete(buff);
		}
	})
