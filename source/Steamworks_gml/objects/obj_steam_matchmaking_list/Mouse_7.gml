
with(obj_steam_matchmaking_list_slot)
	instance_destroy()

steam_matchmaking_add_request_lobby_list_string_filter("isGameMakerTest","true",SteamMatchmakingLobbyComparison.Equal)
steam_matchmaking_request_lobby_list(function(data){
		
		var count = data.lobbies_count
		for(var _a = 0 ; _a < count ; _a++)
		{
			var lobby_id = steam_matchmaking_get_lobby_by_index(_a)
			
			var ins = instance_create_depth(600,200+90*_a,0,obj_steam_matchmaking_list_slot);
			ins.index = _a
			ins.lobby_id = lobby_id
			ins.creator = steam_matchmaking_get_lobby_data(lobby_id,"creator")
		}
		
	})


//steam_matchmaking_add_request_lobby_list_numerical_filter()
//steam_matchmaking_add_request_lobby_list_distance_filter())
//steam_matchmaking_add_request_lobby_list_near_value_filter()






