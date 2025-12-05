
var steam_id = noone

with(Obj_Steam_Networking_Friend)
{
	if(locked)
	{
		steam_id = id.steam_id
		break
	}
}

if(steam_id)
if (net_host_steamid64 != 0)
{
	net_connection = steam_net_sockets_connect_p2p(steam_id, NET_P2P_PORT);
	show_debug_message("Client: connecting, conn = " + string(net_connection));
}
else
	show_debug_message("Client: ERROR - host steamID64 not set");
