
steam_matchmaking_join_lobby(lobby_id,function(data){
		global.lobby_id = data.lobby_id
		room_goto(rm_steam_networking_lobby)
	})
