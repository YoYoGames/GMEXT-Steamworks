

steam_userstats_find_leaderboard(SteamLeaderboard,function(data){
		if(data.leaderboard_found)
		{
			steam_userstats_download_leaderboard_entries(data.leaderboard_handle,SteamLeaderboardDataRequest.Global, 1, 10,function(data){
					show_debug_message(data)
					
					for(var i = 0 ; i < data.entry_count ; i++)
					{
                        var buff = buffer_create(1024,buffer_fixed,1)
						var struct = steam_userstats_downloaded_leaderboard_entry(data.entries_handle,i,buff,1024)
						
                        if(struct.bytes_written)
                        {
                            var num = buffer_read(buff,buffer_u8)
                            var str = buffer_read(buff,buffer_string)
                            struct.msg = str
                            show_debug_message([num,str])
                        }
                        else
                            struct.msg = ""
						
						struct.steam_id = struct.steam_id_user
						instance_create_depth(800, 110 + i*80, 0, obj_steam_leaderboard_entry,{data: struct,medium: true,print_info: false})
                        
                        buffer_delete(buff)
					}
				})
		}
	})

with(obj_steam_leaderboard_entry)
	instance_destroy()
