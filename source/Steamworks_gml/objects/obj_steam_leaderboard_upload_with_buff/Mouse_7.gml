
show_debug_message("POST steam_create_leaderboard")

steam_userstats_find_leaderboard(SteamLeaderboard,function(data){
		if(data.leaderboard_found)
		{
			var buff = buffer_create(256, buffer_fixed, 1);
			buffer_write(buff, buffer_u8, irandom(100));
			buffer_write(buff, buffer_string, steam_friends_get_persona_name() + " was here :)");

			var byte_count = buffer_tell(buff);
			var score_details = array_create(byte_count div 4, 0);
			buffer_seek(buff, buffer_seek_start, 0);
			for (var i = 0; i < array_length(score_details); i++) {
			    score_details[i] = buffer_read(buff, buffer_s32);
			}

			steam_userstats_upload_leaderboard_score(
			    data.leaderboard_handle,
			    SteamLeaderboardUploadScoreMethod.KeepBest,
			    irandom(1000),
			    score_details,
			    function(data){
			        show_debug_message(data)
			    }
			);

			buffer_delete(buff);
		}
	})
