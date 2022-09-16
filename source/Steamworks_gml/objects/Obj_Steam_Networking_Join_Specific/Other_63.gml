
if(async_load[?"id"] == request)
if(async_load[?"status"])
if(async_load[?"result"] != "")
	steam_lobby_join_id(int64(async_load[?"result"]))



