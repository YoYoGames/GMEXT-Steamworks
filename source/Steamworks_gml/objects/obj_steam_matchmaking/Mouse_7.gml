
steam_matchmaking_create_lobby(SteamMatchmakingLobbyType.Public, 2,
		function(data){
			if(data.result == SteamResult.OK)
			{
				var lobby_id = data.lobby_id
				
				steam_matchmaking_set_lobby_data(lobby_id,"isGameMakerTest","true");
				steam_matchmaking_set_lobby_data(lobby_id,"creator",steam_friends_get_persona_name());
				
				steam_matchmaking_join_lobby(lobby_id,function(data){
						global.lobby_id = data.lobby_id
						room_goto(rm_steam_networking_lobby)
					})	
			}
		});
