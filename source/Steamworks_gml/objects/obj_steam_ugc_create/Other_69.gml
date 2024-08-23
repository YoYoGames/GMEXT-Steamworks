
if(async_load[?"id"] == new_item)
if async_load[? "event_type"] == "ugc_create_item"
{
	var published_file_id = async_load[? "published_file_id"];

	var updateHandle = steam_ugc_start_item_update(steam_get_app_id(), published_file_id);
	
	steam_ugc_set_item_title(updateHandle, "My New YoYo-Item! -");
	steam_ugc_set_item_description( updateHandle, "Amazing YoYo-Item -");
	steam_ugc_set_item_visibility(updateHandle, ugc_visibility_private);
	
	var tagArray = [ "Single-player", "Multi-player"];
	steam_ugc_set_item_tags(updateHandle, tagArray);
	
	var itemPath = "itemFolderContent/myItem.png"
	var spr = sprite_duplicate(spr_gm_button);
	sprite_save(spr, 0, itemPath);
	sprite_delete(spr);
		
	var localFile = "itemFolderContent/item.txt";
	var file = file_text_open_write(localFile);
	file_text_write_string(file,"YoYo-Item");
	file_text_close(file);
	
	steam_ugc_set_item_content(updateHandle, "itemFolderContent");
	steam_ugc_set_item_preview(updateHandle, itemPath)
	
	requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
}


if(async_load[?"id"] == requestId)
if async_load[? "event_type"] == "ugc_update_item"
{
	show_debug_message("steam_ugc_submit_item_update() Result: " + string(async_load[? "result"]))
}

/*
enum EResult
{
	k_EResultOK	= 1,							// success
	k_EResultFail = 2,							// generic failure 
	k_EResultNoConnection = 3,					// no/failed network connection
//	k_EResultNoConnectionRetry = 4,				// OBSOLETE - removed
	k_EResultInvalidPassword = 5,				// password/ticket is invalid
	k_EResultLoggedInElsewhere = 6,				// same user logged in elsewhere
	k_EResultInvalidProtocolVer = 7,			// protocol version is incorrect
	k_EResultInvalidParam = 8,					// a parameter is incorrect
	k_EResultFileNotFound = 9,					// file was not found
	k_EResultBusy = 10,							// called method busy - action not taken
	k_EResultInvalidState = 11,					// called object was in an invalid state
	k_EResultInvalidName = 12,					// name is invalid
	k_EResultInvalidEmail = 13,					// email is invalid
	k_EResultDuplicateName = 14,				// name is not unique
	k_EResultAccessDenied = 15,					// access is denied
	k_EResultTimeout = 16,						// operation timed out
	k_EResultBanned = 17,						// VAC2 banned
	k_EResultAccountNotFound = 18,				// account not found
	k_EResultInvalidSteamID = 19,				// steamID is invalid
	k_EResultServiceUnavailable = 20,			// The requested service is currently unavailable
	k_EResultNotLoggedOn = 21,					// The user is not logged on
	k_EResultPending = 22,						// Request is pending (may be in process, or waiting on third party)
};
