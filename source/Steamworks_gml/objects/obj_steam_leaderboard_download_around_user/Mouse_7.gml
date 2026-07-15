
//steam_create_leaderboard(SteamLeaderboard, lb_sort_ascending, lb_disp_numeric);;

steam_userstats_find_leaderboard(SteamLeaderboard,function(data){
		if(data.leaderboard_found)
		{
			request = steam_userstats_download_leaderboard_entries(data.leaderboard_handle,SteamLeaderboardDataRequest.GlobalAroundUser,1,5,function(data){
					show_debug_message(data)
					for(var i = 0 ; i < data.entry_count ; i++)
					{
						var struct = steam_userstats_downloaded_leaderboard_entry(data.entries_handle,i)
						var str = "";
						for (var i = 0; i < array_length(struct.details); i++)
						{
						    if (i > 0) str += ", ";
						    str += string(struct.details[i]);
						}

						show_debug_message(str);
						struct.msg = str
							
						
						struct.steam_id = struct.steam_id_user
						instance_create_depth(800, 110 + i*80, 0, obj_steam_leaderboard_entry,{data: struct,medium: true,print_info: false})
                        
                        buffer_delete(buff)
					}
				})
		}
	})

with(obj_steam_leaderboard_entry)
	instance_destroy()
