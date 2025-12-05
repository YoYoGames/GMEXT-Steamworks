
event_inherited();

text = "Net Msg"

steam_net_messages_register_callbacks()

//[ { name : "Dias.FranciscoA", friendId : 76561198160206816, gameId : 0, lobbyId : 0 },{ name : "Kaguva", friendId : 76561198355986831, gameId : 0, lobbyId : 0 } ]
var array = steam_get_friends_game_info(STEAMWORKS_FRIENDS_FLAGS.IMMEDIATE)

var X = 100
var Y = 150
for(var a = 0 ; a < array_length(array) ; a++)
{
	var struct = array[a]
	instance_create_depth(X,Y,0,Obj_Steam_Networking_Friend,{steam_id: struct.friendId,image_xscale:3}).text = struct.name
	Y += 100
	
	if(Y > room_width-100)
	{
		Y = 0
		X += 300
	}
}
