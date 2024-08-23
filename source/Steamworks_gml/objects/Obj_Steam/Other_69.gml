
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

if (async_load[? "event_type"] == "playback_status_has_changed"){
	show_debug_message("playback_change_detected");
}

// Early exit if event type doesn't match
if (async_load[? "event_type"] == "inventory_result_ready") {

	// Early exit if handle doesn't match
	if (async_load[? "handle"] == handle) {

		// Early exit if handle doesn't match
		if (async_load[? "success"])
		{
		    var _items = steam_inventory_result_get_items(handle);

		    for (var i = 0; i < array_length(_items); i++)
		    {
		        var _item = _items[i];
		        show_debug_message(_item);
		    }
		}
	}

	// Don't forget to clean the ununsed handle
	steam_inventory_result_destroy(handle);
	handle = -1;
}