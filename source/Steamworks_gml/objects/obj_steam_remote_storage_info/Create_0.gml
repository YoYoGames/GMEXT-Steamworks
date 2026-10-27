
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
		
		//steam_remote_storage_get_file_count
		//steam_remote_storage_get_cached_ugc_count
		//GetLocalFileChangeCount
		//GetLocalFileChange
		
		show_debug_message("Dynamic Steam Cloud callback ...");
		var _str = "Dynamic Cloud Sync:\n";
	    var _changeCount = steam_storage_get_local_file_change_count();
		show_debug_message($"We have {_changeCount} changes");
		_str += string(_changeCount) + " changes";
	
	    for (var _i = 0; _i < _changeCount; ++_i)
		{
	        var _changeData = steam_get_local_file_change(_i);
			var _changeDataJson = json_stringify(_changeData);
	        show_debug_message("Change[" + string(_i) + "] = " + _changeDataJson);
			_str += "\n" + string(_i) + " = " + _changeDataJson;
	    }
	
		//show_debug_message("Done.");
		//show_message_async(_str); // in case you can't see the debug logs
	
	})

