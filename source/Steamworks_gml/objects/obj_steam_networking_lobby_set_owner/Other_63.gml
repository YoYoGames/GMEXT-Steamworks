
if(async_load[?"id"] == request)
if(async_load[?"status"])
{
	var index = async_load[?"value"]
	var member = steam_matchmaking_get_lobby_member_by_index(global.lobby_id,index)
	show_debug_message($"{index}: {member}")
	steam_matchmaking_set_lobby_owner(global.lobby_id,member)
}
