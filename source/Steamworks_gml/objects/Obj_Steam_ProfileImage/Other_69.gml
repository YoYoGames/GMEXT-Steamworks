/// @description Insert description here
// You can write your code in this editor

// Early exit if event type doesn't match
if (async_load[?"event_type"] != "avatar_image_loaded") exit

// Validate status
var success = async_load[?"success"];
if (success == 1) {
    
    // Create a new sprite from Steam image
	avatar_sprite = steam_image_create_sprite(async_load[?"image"]);
	
	// Test rich presence after obtaining the avatar
	steam_set_rich_presence("status", "GameMaker");
	steam_set_rich_presence("connect", "hi there");
	// CUSTOM key test
	steam_set_rich_presence("yoyogames", "limited");
	
	steam_request_friend_rich_presence(steam_get_user_steam_id());
}
else {
    // Failure
    show_debug_message("Failed to get user avatar");
}