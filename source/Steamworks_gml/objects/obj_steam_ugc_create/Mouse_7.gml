
steam_ugc_create_item(steam_utils_get_app_id(), SteamWorkshopFileType.Community,function(data){
	
		show_debug_message(data)
		//{ published_file_id : 3656236423, legal_agreement_required : 1, result : 1 }
		//https://steamcommunity.com/workshop/workshoplegalagreement
	
		var published_file_id = data.published_file_id

		var updateHandle = steam_ugc_start_item_update(steam_utils_get_app_id(), published_file_id);
		var ok;
		ok = steam_ugc_set_item_title(updateHandle, "My New YoYo-Item! -");
		show_debug_message($"ok = {ok}")
		ok = steam_ugc_set_item_description( updateHandle, "Amazing YoYo-Item -");
		show_debug_message($"ok = {ok}")
		ok = steam_ugc_set_item_visibility(updateHandle, SteamRemoteStoragePublishedFileVisibility.Private);
		show_debug_message($"ok = {ok}")
	
		var tagArray = [ "Single-player", "Multi-player"];
		ok = steam_ugc_set_item_tags(updateHandle, tagArray);
		show_debug_message($"ok = {ok}")
	
	var work_path = string_replace_all(working_directory,"\\","/")
	show_debug_message(work_path)
	
		var itemPath = work_path + "itemFolderContent/myItem.png"
		var spr = sprite_duplicate(spr_gm_button);
		sprite_save(spr, 0, itemPath);
		sprite_delete(spr);
		
		show_debug_message(itemPath)
		
		var localFile = work_path + "itemFolderContent/item.txt";
		var file = file_text_open_write(localFile);
		file_text_write_string(file,"YoYo-Item");
		file_text_close(file);
		
		show_debug_message(localFile)
	
		ok = steam_ugc_set_item_content(updateHandle, work_path + "itemFolderContent");
		show_debug_message($"ok = {ok}")
		ok = steam_ugc_set_item_preview(updateHandle, itemPath)
		show_debug_message($"ok = {ok}")
		
		requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.3",function(data){
			show_debug_message(data)
		});
	});
