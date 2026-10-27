
text = ""

if(!variable_instance_exists(id,"obj_friend"))
	obj_friend = obj_steam_friends_friend

steam_friends_set_callback_persona_state_change(function(data){
		
		show_debug_message($"persona_state_change: {data}")
	})

steam_friends_set_callback_friend_rich_presence_update(function(data){
		show_debug_message($"friend_rich_presence_update: {data}")
	})


var flag = SteamFriendsFriendFlag.All
var count = steam_friends_get_friend_count(flag)
for(var i = 0 ; i < count ; i++)
{
	var steam_id = steam_friends_get_friend_by_index(i,flag)
	var result = steam_friends_request_user_information(steam_id, false)
	//show_debug_message($"{steam_id}: {result}")
	
	var _x = (i mod 5)*200
	var _y = (i div 5)*200+150
	var data = {steam_id: steam_friends_get_friend_by_index(i,flag)}
	instance_create_depth(_x,_y,0,obj_friend,{data})
}


//steam_friends_request_friend_rich_presence(steam_id);
//var connect = steam_friends_get_friend_rich_presence(steam_id, "connect");
////show_debug_message($"{name}: - connect: {connect}")

//if(connect != "")
//    show_message_async($"{name}: - connect: {connect}")
