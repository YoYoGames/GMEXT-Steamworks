
if(async_load[?"id"] == request)
if(async_load[?"status"])
if(async_load[?"result"] != "")
steam_matchmaking_join_lobby(int64(async_load[?"result"]),function(){
		//SteamMatchmakingLobbyEnter.
		global.lobby_id = data.lobby_id
		room_goto(rm_steam_networking_lobby)
	})

