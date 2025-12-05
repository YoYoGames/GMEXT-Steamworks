
alarm[0] = 3

event_inherited()

text = "client"

net_buffer      = buffer_create(1024, buffer_grow, 1);
net_connection  = -1;
net_listen      = -1;

net_host_steamid64 = 76561199257286820//0; // set this on the client before connecting

NET_P2P_PORT = 7


var array = steam_get_friends_game_info(STEAMWORKS_FRIENDS_FLAGS.IMMEDIATE)

var X = 100
var Y = 150
for(var a = 0 ; a < array_length(array) ; a++)
{
	var struct = array[a]
	instance_create_depth(X,Y,0,Obj_Steam_Networking_Friend,{steam_id: struct.friendId,image_xscale:3}).text = struct.name
	Y += 100
	
	if(Y > room_height-100)
	{
		Y = 150
		X += 300
	}
}
