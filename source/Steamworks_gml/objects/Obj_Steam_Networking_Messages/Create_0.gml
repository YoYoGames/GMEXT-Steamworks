
alarm[0] = 3

event_inherited();

text = "Net Msg"

steam_networking_messages_set_callback_session_request(function(data){
	
		steam_networking_messages_accept_session_with_user(data.steam_id_remote)
		
	})
	
steam_networking_messages_set_callback_session_failed(function(data){
	})

var flag = SteamFriendsFriendFlag.All
var count = steam_friends_get_friend_count(flag)

var X = 100
var Y = 150
for(var i = 0 ; i < count ; i++)
{
	var friend_id = steam_friends_get_friend_by_index(i,flag)
	var friend_name = steam_friends_get_friend_persona_name(friend_id)
	
	var data = {steam_id: friend_id,image_xscale:3}
	instance_create_depth(X,Y,0,obj_steam_friends_friend_select,{data}).text = friend_name
	Y += 100
	
	if(Y > room_height-100)
	{
		Y = 150
		X += 300
	}
}
