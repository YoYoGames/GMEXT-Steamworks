
var steam_id = noone

with(obj_steam_friends_friend_select)
{
	if(selected)
	{
		steam_id = id.steam_id
		break
	}
}

steam_networking_sockets_set_callback_connection_status_changed(function(data){
		show_debug_message(data)
	})

if(steam_id)
if (net_host_steamid64 != 0)
{
	net_connection = steam_networking_sockets_connect_p2p(steam_id, NET_P2P_PORT);
	show_debug_message($"Client: connecting, conn = {net_connection}");
}
else
	show_debug_message($"Client: ERROR - host steamID64 not set");


