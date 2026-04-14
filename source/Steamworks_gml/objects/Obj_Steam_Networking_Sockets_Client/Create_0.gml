
alarm[0] = 3

event_inherited()

text = "client"

net_buffer      = buffer_create(1024, buffer_grow, 1);
net_connection  = -1;
net_listen      = -1;

net_host_steamid64 = 76561199257286820//0; // set this on the client before connecting

NET_P2P_PORT = 7




var flag = SteamFriendsFriendFlag.All
var count = steam_friends_get_friend_count(flag)

var X = 100
var Y = 150
for(var i = 0 ; i < count ; i++)
{
	var friend_id = steam_friends_get_friend_by_index(i,flag)
	var friend_name = steam_friends_get_friend_persona_name(friend_id)
	
	var data = {steam_id: friend_id,image_xscale:3,only_one: true}
	instance_create_depth(X,Y,0,obj_steam_friends_friend_select,{data}).text = friend_name
	Y += 100
	
	if(Y > room_height-100)
	{
		Y = 150
		X += 200
	}
}
