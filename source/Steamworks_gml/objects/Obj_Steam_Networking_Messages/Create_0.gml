
event_inherited();

text = "Net Msg"

steam_net_messages_register_callbacks()

//[ { name : "Dias.FranciscoA", friendId : 76561198160206816, gameId : 0, lobbyId : 0 },{ name : "Kaguva", friendId : 76561198355986831, gameId : 0, lobbyId : 0 } ]
var array = steam_get_friends_game_info(STEAMWORKS_FRIENDS_FLAGS.IMMEDIATE)

for(var a = 0 ; a < array_length(array) ; a++)
{
	var struct = array[a]
	instance_create_depth(100,150+a*100,0,Obj_Steam_Networking_Friend,{steam_id: struct.friendId,image_xscale:4}).text = struct.name
}
