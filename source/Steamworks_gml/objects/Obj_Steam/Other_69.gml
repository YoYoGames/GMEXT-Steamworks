
// This function call is purely for debugging purposes
// It will log all the messages from the steam callbacks
show_debug_message("Steam ASYNC: " + json_encode(async_load))

// this only happens if you have Dynamic Steam Cloud Sync enabled in Partner Settings
if (async_load[? "event_type"] == "remote_storage_local_file_change")
{
	show_debug_message("Dynamic Steam Cloud callback ...");
	var _str = "Dynamic Cloud Sync:\n";
    var _changeCount = steam_get_local_file_change_count();
	show_debug_message("We have " + string(_changeCount) + " changes");
	_str += string(_changeCount) + " changes";
	
    for (var _i = 0; _i < _changeCount; ++_i)
	{
        var _changeData = steam_get_local_file_change(_i);
		var _changeDataJson = json_stringify(_changeData);
        show_debug_message("Change[" + string(_i) + "] = " + _changeDataJson);
		_str += "\n" + string(_i) + " = " + _changeDataJson;
    }
	
	show_debug_message("Done.");
	show_message_async(_str); // in case you can't see the debug logs
}

