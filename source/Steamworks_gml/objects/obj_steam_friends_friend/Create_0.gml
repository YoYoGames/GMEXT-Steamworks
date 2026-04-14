

/// @returns {Asset.GMSprite}
function steam_image_create_sprite(l_img)
{
	var image_size = steam_utils_get_image_size(l_img);
	if (!image_size.ok) 
		return -1;
	
	var buff_size = image_size.width * image_size.height * 4
	var l_cols = buffer_create(buff_size, buffer_fixed, 1);
	var l_sprite, l_ok;
	
	var l_surf = surface_create(image_size.width, image_size.height);
	l_ok = steam_utils_get_image_rgba(l_img, l_cols, buff_size);

	if(l_ok)
	{
		buffer_set_surface(l_cols, l_surf, 0);
		l_sprite = sprite_create_from_surface(l_surf, 0, 0, image_size.width, image_size.height, false, false, 0, 0);
		surface_free(l_surf);
	} 
	else 
		l_sprite = -1;
		
	buffer_delete(l_cols);
	return l_sprite;
}


function state_to_string(state)
{
	switch(state)
	{
	    case SteamFriendsPersonaState.Offline: return "Offline"
	    case SteamFriendsPersonaState.Online: return "Online"
	    case SteamFriendsPersonaState.Busy: return "Busy"
	    case SteamFriendsPersonaState.Away: return "Away"
	    case SteamFriendsPersonaState.Snooze: return "Snooze"
	    case SteamFriendsPersonaState.LookingToTrade: return "Looking Trade"
	    case SteamFriendsPersonaState.LookingToPlay: return "Looking Play"
	}
}

function relationship_to_string(relationship)
{
	switch(relationship)
	{
	    case SteamFriendsRelationship.None: return "None"
	    case SteamFriendsRelationship.Blocked: return "Blocked"
	    case SteamFriendsRelationship.RequestRecipient: return "Rqeusted Recipient"
	    case SteamFriendsRelationship.Friend: return "Friend"
	    case SteamFriendsRelationship.RequestInitiator: return "Rquest Initiator"
	    case SteamFriendsRelationship.Ignored: return "Ignored"
	    case SteamFriendsRelationship.IgnoredFriend: return "Ignored Friend"
	    case SteamFriendsRelationship.SuggestedFriend: return "Suggested Friend"
	}
}

show_debug_message(data)
show_debug_message(debug_get_callstack())
name = steam_friends_get_friend_persona_name(data.steam_id)

//steam_friends_get_friend_persona_name_history(steam_id, iPersonaName)
//steam_friends_get_player_nickname(steam_id)
state = steam_friends_get_friend_persona_state(data.steam_id)
relationship = steam_friends_get_friend_relationship(data.steam_id)
level = steam_friends_get_friend_steam_level(data.steam_id)

state_str = state_to_string(state)
relationship_str = relationship_to_string(relationship)

if(!variable_instance_exists(id,"print_info"))
	print_info = true

if(!variable_instance_exists(id,"medium"))
	medium = false

var av = -1
if(medium)
	av = steam_friends_get_medium_friend_avatar(data.steam_id)
else
	av = steam_friends_get_large_friend_avatar(data.steam_id)

if (av != -1) 
	avatar_sprite = steam_image_create_sprite(av);
else 
	avatar_sprite = -1;



steam_friends_request_friend_rich_presence(data.steam_id);
var connect = steam_friends_get_friend_rich_presence(data.steam_id, "connect");
show_debug_message($"{name} - connect: {connect}")
