
if(async_load[?"id"] == request)
if(async_load[?"status"])
	steam_lobby_set_owner_id(steam_lobby_get_member_id(async_load[?"value"]))

