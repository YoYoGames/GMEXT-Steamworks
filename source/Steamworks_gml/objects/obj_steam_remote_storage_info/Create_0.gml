
steam_remote_storage_set_callback_published_file_subscribed(function(data){
		show_debug_message("steam_remote_storage_set_callback_published_file_subscribed")
		show_debug_message(data)
	})
	
steam_remote_storage_set_callback_published_file_unsubscribed(function(data){
		show_debug_message("steam_remote_storage_set_callback_published_file_unsubscribed")
		show_debug_message(data)
	})

steam_remote_storage_set_callback_local_file_change(function(data){
		show_debug_message("steam_remote_storage_set_callback_local_file_change")
		show_debug_message(data)
		// The callback does not say which files changed: the functions that list the changes
		// (GetLocalFileChangeCount and GetLocalFileChange) are not in the extension yet.
	
	})

