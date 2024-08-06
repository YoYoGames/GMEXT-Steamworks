// FUNCTIONS

/**
 * @func steam_is_screenshot_requested
 * @desc This function will poll the Steam API to see if the key for taking a screenshot of the game has been pressed. The function will only return `true` for one step (game tick) when the key is pressed, and will return `false` at all other times.
 * Please note that if the screenshot key is pressed, this function will only return `true` once for each step that it is pressed, and return `false` for any subsequent calls *within the same step* . For example, if a screenshot is requested in the current frame and you call this function in the Step event to find that out, you will get `true`; however, if you call it again in Draw GUI to check whether a screenshot was requested, you will get `false` as the function had already been "used up" in the ${event.step}. To use the function's return value multiple times within the same frame, it is recommended to store it in a variable and read that instead of calling the function again.
 * 
 * [[NOTE: This function does not take a screenshot for you. This only signals that the key has been pressed and you must use the GameMaker functions ${function.screen_save} or ${function.screen_save_part} to save a local copy of the file to be uploaded.]]
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if steam_is_screenshot_requested()
 * {
 *     var _file = "Catch_The_Haggis_" + string(global.scrn_num) + ".png");
 *     screen_save(_file);
 *     steam_send_screenshot(_file, window_get_width(), window_get_height());
 *     global.scrn_num += 1;
 * }
 * ```
 * The above code will poll the Steam API for a screenshot request. If there is one, a unique name for the image file will be generated, a screenshot will be taken, and the file will be sent to the Steam Community page for the user.
 * @func_end
 */

/**
 * @func steam_send_screenshot
 * @desc With this function you can upload a screenshot to the Steam Community profile page of the currently logged in user. The filename you supply is the name of the local file that was created when you took the screenshot using the GameMaker functions ${function.screen_save} or ${function.screen_save_part}. The width and height define the image size, and the function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.
 * 
 * @param {string} filename The name of the image file to upload.
 * @param {real} width The width of the image.
 * @param {real} height The height of the image.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * if steam_is_screenshot_requested()
 * {
 *     var _file = "Catch_The_Haggis_" + string(global.scrn_num) + ".png");
 *     screen_save(_file);
 *     steam_send_screenshot(_file, window_get_width(), window_get_height());
 *     global.scrn_num += 1;
 * }
 * ```
 * The above code will poll the Steam API for a screenshot request. If there is one, a unique name for the image file will be generated, a screenshot will be taken, and the file will be sent to the Steam Community page for the user.
 * @func_end
 */

/**
 * @func steam_ugc_create_item
 * @desc This function is used to prepare the Workshop API and generate a published file ID for the item to be added. The function *must* be called before doing anything else with the item to be uploaded, as you will be required to use the unique published ID value that it returns in the Steam Async Event for updating.
 * This is an asynchronous function that will return an asynchronous id and trigger the ${event.steam} when the task is finished.
 * 
 * @param {real} consumer_app_id The unique App ID for your game on Steam.
 * @param {constant.UGCFileType} file_type One of the available file type constants (see ${constant.UGCFileType} constants).
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_create_item"`
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
 * @member {boolean} legal_agreement_required Will be `true` or `false` (see the [Steam docs](https://partner.steamgames.com/documentation/ugc#Legal) for more details)
 * @member {int64} published_file_id This key holds the unique published ID for the item (you may need to cast it using the ${type.int64} function).
 * @event_end
 *
 * @example
 * In this example we first call the function and store the async ID value in a variable:
 * 
 * ```gml
 * var _app_id = steam_get_app_id();
 * new_item = steam_ugc_create_item(_app_id, ugc_filetype_community);
 * ```
 * This would then send off a request to the Steam API to create the new Workshop item, generating an async event which we would deal with as follows:
 * 
 * ```gml
 * var _event_id = async_load[? "id"];
 * if _event_id == new_item
 * {
 *     var _type = async_load[? "event_type"];
 *     if _type == "ugc_create_item"
 *     {
 *         global.Publish_ID = async_load[? "published_file_id"];
 *     }
 * }
 * ```
 * The above code checks the event type and if it is "ugc_create_item" then it retrieves the published file ID and stores it in a global variable for future reference.
 * @func_end
 */

/**
 * @func steam_ugc_delete_item
 * @desc This function attempts to delete a previously published UGC item.
 * This is an asynchronous function that will return an asynchronous ID and trigger the ${event.steam} when the task is finished.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_item_delete"`
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
 * @event_end
 * 
 * @example
 * ```gml
 * steam_ugc_delete_item(ugc_query_handle);
 * ```
 * The above code creates a deletion request for `ugc_query_handle`.
 * @func_end
 */

/**
 * @func steam_ugc_start_item_update
 * @desc This function must be called before adding or updating information on a UGC item. You need to supply the unique App ID for your game on Steam, along with the unique published file ID that was returned for the item when you created it using the function ${function.steam_ugc_create_item}. The function will return a unique update handle for the item, which you can then use in the UGC item functions to update (or add) information for uploading.
 * 
 * @param {real} consumer_app_id The unique App ID for your game on Steam.
 * @param {int64} published_file_id The unique published file ID value for the item.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_set_item_title
 * @desc This function will set the title to be used for the given item.
 * The function will return `true` if the API was successfully accessed and `false` if there was an issue.
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from ${function.steam_ugc_start_item_update})
 * @param {string} title The title (max 128 characters) to be used for the item.
 * 
 * @returns {boolean}
 * 
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_set_item_description
 * @desc This function will set the description to be used for the given item.
 * The function will return `true` if the API was successfully accessed and `false` if there was an issue.
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from ${function.steam_ugc_start_item_update})
 * @param {string} description The description (max 8000 characters) to be used for the item.
 * 
 * @returns {boolean}
 * 
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_set_item_visibility
 * @desc This function will set the visibility of the given item, using one of the ${constant.UGCFileVisibility} constants.
 * The function will return `true` if the API was successfully accessed and `false` if there was an issue.
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from ${function.steam_ugc_start_item_update})
 * @param {constant.UGCFileVisibility} visibility The visibility to be used for the item (see ${constant.UGCFileVisibility} constant)
 * 
 * @returns {boolean}
 * 
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_set_item_tags
 * @desc This function will set the tags to be used for the given item. The tags should be added to a 1D array as string elements and the array passed to the function.
 * The function will return `true` if the API was successfully accessed and `false` if there was an issue.
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from ${function.steam_ugc_start_item_update})
 * @param {string} tags The tags (as an string JSON array) to be used for the item.
 * 
 * @returns {boolean}
 * 
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_set_item_content
 * @desc This function will set the content path to be used for the given item, and it should be a relative path to the folder which contains the content files to upload - which in turn should be in the save area *or* the game bundle (i.e.: an included file).
 * The function will return `true` if the API was successfully accessed and `false` if there was an issue.
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from ${function.steam_ugc_start_item_update})
 * @param {string} content The content path to be used for the item
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_set_item_preview
 * @desc This function will set the preview image to be used for the given item. The image should be supplied as either a PNG, JPG or GIF format file with a maximum size of 1MB. The path to the image should be a relative path in the save area *or* the game bundle (i.e.: an included file).
 * The function will return `true` if the API was successfully accessed and `false` if there was an issue.
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from ${function.steam_ugc_start_item_update})
 * @param {string} preview The preview image (JPG, GIF or PNG - max size 1MB) to be used for the item.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_submit_item_update
 * @desc This function will submit the UGC item indexed by the given handle to the Steam Workshop servers, adding the change notes to be used for the given item.
 * This is an asynchronous function that will return an asynchronous ID and trigger the ${event.steam} when the task is finished.
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from ${function.steam_ugc_start_item_update})
 * @param {string} change_note The change notes to be used for the item.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_update_item"`
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
 * @member {boolean} legal_agreement_required Will be `true` or `false` (see the [Steam docs](https://partner.steamgames.com/documentation/ugc#Legal) for more details)
 * @event_end
 * 
 * @example
 * ```gml
 * var _app_id = steam_get_app_id();
 * var _updateHandle = steam_ugc_start_item_update(_app_id, global.Publish_ID);
 * steam_ugc_set_item_title(_updateHandle, "My workshop item(3)!");
 * steam_ugc_set_item_description(_updateHandle, "testing workshop...");
 * steam_ugc_set_item_visibility(_updateHandle, ugc_visibility_public);
 * var _tagArray;
 * _tagArray[0] = "Test";
 * _tagArray[1] = "New";
 * steam_ugc_set_item_tags(_updateHandle, _tagArray);
 * steam_ugc_set_item_preview(_updateHandle, "promo.jpg");
 * steam_ugc_set_item_content(_updateHandle, "WorkshopContent1");
 * requestId = steam_ugc_submit_item_update(_updateHandle, "Version 1.2");
 * ```
 * The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.
 * @func_end
 */

/**
 * @func steam_ugc_get_item_update_progress
 * @desc This function can be used to track the update status for an item. You give the item handle (as returned by the function ${function.steam_ugc_start_item_update}) and an empty ${type.ds_map} which will then be populated with the update information (see table below).
 * If there is an error the function will return `false` and the map will be empty, otherwise the function returns `true`.
 * 
 * |Key|Type|Description|
 * |----|----|----|
 * |status_code|${type.real}|The Steam status code|
 * |status_string|${type.string}|A string for the current status|
 * |bytes_processed|${type.real}|The bytes processed so far|
 * |bytes_total|${type.real}|The total number of bytes in the update|
 * 
 * @param {real} ugc_update_handle The unique handle for the UGC to be updated.
 * @param {type.ds_map} info_map A (previously created) DS map
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _uploadMap = ds_map_create();
 * steam_ugc_get_item_update_progress(global.itemHandle, _uploadMap);
 * var _statusCode = _uploadMap[? "status_code"];
 * var _status = _uploadMap[? "status_string"];
 * var _processed = _uploadMap[? "bytes_processed"];
 * var _total = _uploadMap[? "bytes_total"];
 * draw_text(32, 0, "Upload info for item:" + string(global.itemHandle));
 * draw_text(32, 15, "status code:" + string(_statusCode));
 * draw_text(32, 30, "status:" + string(_status));
 * draw_text(32, 45, "bytes processed:" +string(_processed));
 * draw_text(32, 60, "bytes total:" + string(_total));
 * ds_map_destroy(_uploadMap);
 * ```
 * The above code will query the upload status of the item indexed in the global variable "itemHandle", using a ${type.ds_map} to store the information. This is then parsed and the resulting values drawn to the screen.
 * @func_end
 */

/**
 * @func steam_ugc_subscribe_item
 * @desc This function can be used to subscribe to a UGC item.
 * This is an asynchronous function that will return an asynchronous ID and trigger the ${event.steam} when the task is finished.
 * 
 * @param {int64} published_file_id The unique file ID for the UGC to subscribe to.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_subscribe_item"`
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
 * @member {int64} published_file_id This key holds the unique published ID for the item (you may need to cast it using the ${function.int64} function, before passing it to subsequent functions
 * @event_end
 *
 * @example
 * ```gml
 * steam_sub = steam_ugc_subscribe_item(global.pubFileID);
 * ```
 * The above code will subscribe (and download) the item with the file ID stored in the global variable "pubFileID".
 * @func_end
 */

/**
 * @func steam_ugc_unsubscribe_item
 * @desc This function can be used to unsubscribe from a UGC item.
 * This is an asynchronous function that will return an asynchronous ID and trigger the ${event.steam} when the task is finished.
 * 
 * @param {int64} published_file_id The unique file ID for the UGC to unsubscribe from.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_unsubscribe_item"`
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
 * @member published_file_id This key holds the unique published ID for the item (you may need to cast it using the ${function.int64} function)
 * @event_end
 * 
 * @example
 * ```gml
 * steam_sub = steam_ugc_unsubscribe_item(global.pubFileID);
 * ```
 * The above code will unsubscribe (and remove) the item with the file ID stored in the global variable "pubFileID".
 * @func_end
 * 
 * @func steam_ugc_num_subscribed_items
 * @desc This function can be used to get the number of items that the current user has subscribed to.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * numSub = steam_ugc_num_subscribed_items();
 * ```
 * The above code will store the number of subscribed items in a variable.
 * @func_end
 */

/**
 * @func steam_ugc_get_subscribed_items
 * @desc This function will populate a DS list with all the published file IDs for the items that the user is currently subscribed to. You must first create the list and store the index in a variable, then pass this to the function.
 * The function will return `true` if everything is correct and the Steam API is initialized, or `false` if there is an error.
 * 
 * @param {type.ds_list} item_list A (previously created) DS list index.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_list = ds_list_create();
 * steam_ugc_get_subscribed_items(steam_list);
 * ```
 * The above code will create an empty DS list and then populate it with the file IDs for all subscribed items for the user.
 * @func_end
 */

/**
 * @func steam_ugc_get_item_install_info
 * @desc This function can be used to retrieve information about any given published file item that has been subscribed to and downloaded to the Steam local storage area for your game. You give the item ID and supply the index to an empty ${type.ds_map} which will then be populated with the install information (see table below).
 * If the item exists (i.e.: as been subscribed and download was complete) then the function will return `true` and populate the map, otherwise it will return `false` and the map will remain empty.
 * 
 * |Key|Type|Description|
 * |----|----|----|
 * |size_on_disk|${type.real}|The file size on disk (in bytes)|
 * |legacy_item|${type.boolean}|Will be `true` or `false` depending on whether it is a legacy file or not|
 * |folder|${type.string}|This is the full path to the installed content (please refer to "Item Installation" in Steam SDK docs, as "legacy" items uploaded with the old method, are treated differently)|
 * 
 * @param {int64} published_file_id The unique handle for the UGC to be updated.
 * @param {type.ds_map} info_map A (previously created) DS map index.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _item_map = ds_map_create();
 * steam_ugc_get_item_install_info(global.fileID, _item_map);
 * ```
 * The above code will query the install status of the item indexed in the global variable "fileID", using a `DS Map` to store the information.
 * @func_end
 */

/**
 * @func steam_ugc_get_item_update_info
 * @desc This function can be used to retrieve information about the current download state for the given file ID. You give the item ID and supply the index to an empty ${type.ds_map} which will then be populated with the update information (see table below).
 * If the item exists then the function will return `true` and populate the map, otherwise it will return `false` and the map will remain empty.
 * 
 * |Key|Type|Description|
 * |----|----|----|
 * |needs_update|${type.boolean}|Whether the item needs an update or not|
 * |is_downloading|${type.boolean}|Whether the item is currently downloading or not|
 * |bytes_downloaded|${type.real}|The number of bytes that has been downloaded|
 * |bytes_total|${type.real}|The total size (number of bytes) required for the item on disk|
 * 
 * @param {int64} published_file_id The unique file ID for the UGC to be checked.
 * @param {type.ds_map} info_map A (previously created) DS map index.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _info_map = ds_map_create();
 * var _info = steam_ugc_get_item_update_info(global.fileID, _info_map);
 * 
 * if _info
 * {
 *     draw_text(32, 15, "needs_update: " + string(_info_map[? "needs_update"]));
 *     draw_text(32, 30, "is_downloading: " + string(_info_map[? "is_downloading"]));
 *     draw_text(32, 45, "bytes_downloaded: " + string(_info_map[? "bytes_downloaded"]));
 *     draw_text(32, 60, "bytes_total: " + string(_info_map[? "bytes_total"]));
 * }
 * ```
 * The above code will query the download status of the item indexed in the global variable "fileID", using a ${type.ds_map} to store the information.
 * @func_end
 */

/**
 * @func steam_ugc_request_item_details
 * @desc **Steamworks Function:** [ISteamUGC::GetQueryUGCResult](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCResult)
 * 
 * This function can be used to retrieve information about a given file ID. You give the file ID and supply a maximum age for checking.
 * 
 * The function returns the async event ID.
 * 
 * @param {real} published_file_id The unique file ID for the UGC to be checked.
 * @param {real} max_age_seconds The age of the data to check (recommended 30 - 60 seconds).
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_item_details"`
 * @member {boolean} cached_data Will be `true` if the returned details are from the local cache or `false` if they are taken from the server
 * @member {int64} published_file_id This key holds the unique published ID for the item (you may need to cast it using the ${function.int64} function)
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
 * @member {string} file_type The type of file used
 * @member {real} creator_app_id The Steam ID of the item creator
 * @member {real} consumer_app_id The Steam ID of the item consumer
 * @member {string} title The title of the item
 * @member {string} description The description of the item
 * @member {real} steam_id_owner The Steam ID of the item owner
 * @member {real} time_created The time the item was first created
 * @member {real} time_updated The last time the item was updated
 * @member {real} time_added_to_user_list The time that the item was subscribed to
 * @member {constant.UGCFileVisibility} visibility The visibility of the item (see ${constant.UGCFileVisibility} constant)
 * @member {boolean} banned Whether the item has been banned or not
 * @member {boolean} accepted_for_use Whether the item has been accepted for use or not
 * @member {boolean} tags_truncated Whether the tag list in `tags` has been truncated.
 * @member {array[string]} tags An array of the tags for the item. This array may be incomplete or contain incomplete tag names when `tags_truncated` is `true`. (Note that the Steamworks function returns the tags as a comma-separated list (string) instead)
 * @member {int64} handle_file The unique file handle for the item
 * @member {int64} handle_preview_file The unique handle for the image preview for the item (can be used with ${function.steam_ugc_download} to download a preview image)
 * @member {string} filename The name of the item file
 * @member {real} file_size The size of the item file
 * @member {real} preview_file_size The size of the preview image
 * @member {string} url The full URL associated with this item. (For a video or a website.)
 * @member {real} up_votes The number of up-votes received
 * @member {real} down_votes The number of down-votes received
 * @member {real} score The overall score of the item
 * @member {real} account_id_owner The account ID from the Steam ID owner (this can be used in function ${function.steam_ugc_create_query_user_ex})
 * @event_end
 * 
 * @example
 * In this example we send off a details request for an item and then parse the resulting ${var.async_load} DS map to set some variables. First we send off the request:
 * 
 * ```gml
 * steam_details = steam_ugc_request_item_details(global.fileID, 60);
 * ```
 * The above code will request details on the item with the file ID stored in the global variable and will trigger a ${event.steam} with the returned information. In this event we can then parse the map and store some of the values in variables which can then be used to display the information to the user:
 * 
 * ```gml
 * var _map_id = async_load[? "id"];
 * var _result = async_load[? "result"];
 * if (_map_id == steam_details) && (_result == ugc_result_success)
 * {
 *     mTitle = async_load[? "title"];
 *     mDesc = async_load[? "description"];
 *     mTags = async_load[? "tags"];
 *     m_hPreviewFile = async_load[? "handle_preview_file"];
 *     m_hOwnerSteamId = async_load[? "steam_id_owner"];
 *     mOwnerAccountId = async_load[? "account_id_owner"];
 *     mPubFileId = async_load[? "published_file_id"];
 *     mScore = async_load[? "score"];
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_ugc_create_query_user
 * @desc This function can be used to query the UGC database. The function automatically uses the default ID for the app, user and assumes that the query is being done by the consumer (rather than the creator). The function requires you to use the following constants for the type of data to query (${constant.UGCListType}), the type of item to match (${constant.UGCMatchType}) and the order in which the returned items will be sorted (${constant.UGCListSortOrder}), as well as a page number - note that a query will return a *maximum* number of 50 items.
 * The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function ${function.steam_ugc_send_query} - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.
 * 
 * @param {constant.UGCListType} list_type The type of data list to create
 * @param {constant.UGCMatchType} match_type The type of UGC items to query
 * @param {constant.UGCListSortOrder} sort_order The way that data should be ordered
 * @param {real} page The page number to query.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * query_handle = steam_ugc_create_query_user(ugc_list_Published, ugc_match_Items, ugc_sortorder_TitleAsc, 1);
 * ```
 * The above code creates a query request and stores its handle in a variable for future use.
 * @func_end
 */

/**
 * @func steam_ugc_create_query_user_ex
 * @desc This function can be used to query the UGC database. The function requires the ID value for the user and the ID of the game that is going to consume the item and/or the ID of the game that created the item. You also need to use the following constants for the type of data to query (${constant.UGCListType}), the type of item to query (${constant.UGCMatchType}) and the order in which the returned items will be sorted (${constant.UGCListSortOrder}), as well as a page number - note that a query will return a *maximum* number of 50 items.
 * The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function ${function.steam_ugc_send_query} - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.
 * 
 * @param {constant.UGCListType} list_type The type of data list to create
 * @param {constant.UGCMatchType} match_type The type of UGC items to query
 * @param {constant.UGCListSortOrder} sort_order The way that data should be ordered
 * @param {real} page The page number to query
 * @param {real} account_id The Steam account ID
 * @param {real} creator_app_id The item creator app ID
 * @param {real} consumer_app_id The consumer app ID
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * query_handle = steam_ugc_create_query_user_ex(ugc_list_Published, ugc_match_Items, ugc_sortorder_TitleAsc, page, global.AccountID, 0, global.GameID);
 * ```
 * The above code creates a query request and stores its handle in a variable for future use.
 * @func_end
 */

/**
 * @func steam_ugc_create_query_all
 * @desc This function can be used to query the UGC database using some predefined query types. The function requires the following constants for the type of query to create (${constant.UGCQueryType}), the type of item to match (${constant.UGCMatchType}) and the page number to query - note that a query will return a *maximum* number of 50 items.
 * The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function ${function.steam_ugc_send_query} - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.
 * 
 * @param {constant.UGCQueryType} query_type The type of query to create
 * @param {constant.UGCMatchType} match_type The type of UGC items to query
 * @param {real} page The page number to query
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
 * ```
 * The above code creates a general query request and stores its handle in a variable for future use.
 * @func_end
 */

/**
 * @func steam_ugc_create_query_all_ex
 * @desc This function can be used to query the UGC database. The function requires the ID of the game that is going to consume the item and/or the ID of the game that created the item, and you need to use the following constants for the type of query to create (${constant.UGCQueryType}), the type of item to match (${constant.UGCMatchType}) and the page number to query. Note that a query will return a *maximum* number of 50 items.
 * The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function ${function.steam_ugc_send_query} - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.
 * 
 * @param {constant.UGCQueryType} query_type The type of query to create
 * @param {constant.UGCMatchType} match_type The type of UGC items to query
 * @param {real} page The page number to query
 * @param {real} creator_app_id The item creator's app ID
 * @param {real} consumer_app_id The consumer's app ID
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * query_handle = steam_ugc_create_query_all_ex(ugc_query_RankedByVote, page, global.AccountID, 0, global.GameID);
 * ```
 * The above code creates a query request and stores its handle in a variable for future use.
 * @func_end
 */

/**
 * @func steam_ugc_query_set_cloud_filename_filter
 * @desc This function can be used to further filter any given UGC query, specifically to check and see if a Workshop item file name must match or not. The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is either `true` or `false`, depending on whether you require the file names to match.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {boolean} match_cloud_filename Sets whether the UGC item file name should match or not.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
 * steam_ugc_query_set_cloud_filename_filter(_query_handle, true);
 * steam_ugc_query_add_excluded_tag(_query_handle, "nasty chips");
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_set_match_any_tag
 * @desc This function can be used to further filter any given UGC query, specifically to switch on or off tag matching. The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is either `true` or `false`, depending on whether you require a check for matching tags.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {boolean} match_any_tag Sets whether the UGC item tags should match anything or not.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
 * steam_ugc_query_set_match_any_tag(_query_handle, false);
 * steam_ugc_query_add_excluded_tag(_query_handle, "walking simulator");
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_set_search_text
 * @desc This function can be used to further filter any given UGC query, specifically to search for the given string in the title and description of the UGC items. The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is a string you want to use as the search term.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {string} search_text The search text to use for the query.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
 * steam_ugc_query_set_search_text(_query_handle, "texture");
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_set_ranked_by_trend_days
 * @desc This function can be used to further filter any UGC query made using the `ugc_query_RankedByTrend` constant (${constant.UGCQueryType}), specifically to search over a number of days. The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is the number of days over which you want the query to run.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {real} days The number of days to query.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);
 * steam_ugc_query_set_ranked_by_trend_days(_query_handle, 5);
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_add_required_tag
 * @desc This function can be used to further filter any given UGC query, specifically to search only those UGC items with the given tag. The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is a string you want to use as the tag to include.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {string} tag_name The tag name to include.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);
 * steam_ugc_query_add_required_tag(_query_handle, "RPG");
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_add_excluded_tag
 * @desc This function can be used to further filter any given UGC query, specifically to exclude a given UGC from the query request. The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is a string you want to use as the tag to exclude.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {string} tag_name The tag name to exclude.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
 * steam_ugc_query_add_excluded_tag(_query_handle, "walking simulator");
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_set_return_long_description
 * @desc This function can be used to further filter any given UGC query, specifically to retrieve the long description text in the call back event triggered when the query was sent. The query handle is the value returned when you created the query (using, for example,  ${function.steam_ugc_create_query_user}) and the second argument is either `true` or `false`.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {boolean} long_description Whether to have the query return the long description text.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_set_return_total_only
 * @desc This function can be used to further filter any given UGC query, specifically to request only the number of results without any other information (meaning that the DS map generated by the send function will contain the key "num_results" without any further map data). The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is either `true` or `false`.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {boolean} total_only Whether to have the query return only the total number of hits or not.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
 * steam_ugc_query_set_return_total_only(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_query_set_allow_cached_response
 * @desc This function can be used to further filter any given UGC query, specifically to request that the query check the local cache rather than online. The query handle is the value returned when you created the query (using, for example, ${function.steam_ugc_create_query_user}) and the second argument is either `true` or `false`.
 * The function will return `true` if the query filter was correctly set, or `false` otherwise.
 * 
 * @param {real} ugc_query_handle The query handle to use.
 * @param {boolean} cache Whether to have the query check the local cache or not.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);
 * steam_ugc_query_add_required_tag(_query_handle, "RPG");
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_send_query
 * @desc This function can be used to send a query request. You first define the query using one of the following functions:
 * 
 * * ${function.steam_ugc_create_query_all}
 * * ${function.steam_ugc_create_query_all_ex}
 * * ${function.steam_ugc_create_query_user}
 * * ${function.steam_ugc_create_query_user_ex}
 * 
 * which will return a query handle. This handle is then used to set filters, etc. before being used in this function to send off the query request.
 * This is an asynchronous function that will return an asynchronous ID and trigger the ${event.steam} when the task is finished.
 * 
 * @param {real} ugc_query_handle The query handle to send.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_query"`
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
 * @member {boolean} cached_data Will be `true` if the returned details are from the local cache or `false` if they are taken from the server
 * @member {real} total_matching The total number of matching results
 * @member {real} num_results The number of results returned (max 50)
 * @member {type.ds_list} results_list A DS List index, where each list entry is a DS Map index containing details of the particular item (see table below)
 * @member {int64} published_file_id This key holds the unique published ID for the item (you may need to cast it using the ${function.int64} function)
 * @member {string} file_type The type of file used
 * @member {real} creator_app_id The Steam ID of the item creator
 * @member {real} consumer_app_id The Steam ID of the item consumer
 * @member {string} title The title of the item
 * @member {string} description The description of the item
 * @member {real} steam_id_owner The Steam ID of the item owner
 * @member {real} time_created The time the item was first created
 * @member {real} time_uploaded The last time the item was updated
 * @member {real} time_added_to_user_list The time that the item was subscribed to
 * @member {constant.UGCFileVisibility} visibility The visibility of the item
 * @member {boolean} banned Whether the item has been banned or not
 * @member {boolean} accepted_for_use Whether the item has been accepted for use or not
 * @member {array} tags_truncated Short version of the tags as an array
 * @member {array[string]} tags An array of the tags for the item
 * @member {int64} handle_file The unique file handle for the item
 * @member {int64} handle_preview_file The unique handle for the image preview for the item (can be used with ${function.steam_ugc_download} to download a preview image)
 * @member {string} filename The name of the item file
 * @member {real} file_size The size of the item file
 * @member {real} preview_file_size The size of the preview image
 * @member {string} url The full URL for the item
 * @member {real} up_votes The number of upvotes received
 * @member {real} down_votes The number of downvotes received
 * @member {real} score The overall score of the item
 * @member {real} account_id_owner The account ID from the Steam ID owner (can be used in the function ${function.steam_ugc_create_query_user})
 * @event_end
 *
 * @example
 * ```gml
 * var _query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);
 * steam_ugc_query_add_required_tag(_query_handle, "RPG");
 * steam_ugc_query_set_return_long_description(_query_handle, true);
 * steam_ugc_query_set_allow_cached_response(_query_handle, true);
 * query_ID = steam_ugc_send_query(_query_handle);
 * ```
 * The above code creates a query request and stores its handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.
 * @func_end
 */

/**
 * @func steam_ugc_download
 * @desc With this function you can download a preview image for any given UGC item. The `ugc_handle` is the unique identifying value for the image (which you can get using the function ${function.steam_ugc_send_query}), and the destination filename is the name (and local path within the Steam sandbox) that you wish to give the image file when the download is complete.
 * This is an asynchronous function that will return an asynchronous ID and trigger the ${event.steam} when the task is finished.
 * 
 * @param {int64} ugc_handle The unique handle for the preview to be downloaded.
 * @param {string} dest_filename The filename to save the preview with.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"ugc_create_item"`
 * @member {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the [Steam docs](https://partner.steamgames.com/doc/api/steam_api) under **EResult** for more details)
 * @member {string} original_filename This key holds the original name of the image file *on the server* (a string)
 * @member {string} dest_filename This key holds the image file name you passed in (a string)
 * @member {real} ugc_handle The unique identifying value for the image
 * @event_end
 * 
 * @example
 * In this example we first call the function and store the async ID value in a variable:
 * 
 * ```gml
 * steam_get = steam_ugc_download(steam_handle, "\UGC\Preview_file.png");
 * ```
 * This would then send off a file request to the Steam API, generating an async event which we would deal with as follows:
 * 
 * ```gml
 * var _event_id = async_load[? "id"];
 * if _event_id == steam_get
 * {
 *     var _type = async_load[? "event_type"];
 *     if _type == "ugc_download"
 *     {
 *         sprite_delete(preview_sprite);
 *         preview_sprite = sprite_add(async_load[? "dest_filename"], 0, false, false, 0, 0);
 *     }
 * }
 * ```
 * The above code checks the event type and then creates a sprite from the downloaded image.
 * @func_end
 */

/**
 * @const UGCFileType
 * @desc These constants specify the way that a shared file will be shared with the community and should be used while creating a new item with ${function.steam_ugc_create_item}.
 * 
 * [[NOTE: See [Steam Docs](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#EWorkshopFileType) for more details.]]
 * 
 * @member ugc_filetype_community This is used to create files that will be uploaded and made available to anyone in the community
 * @member ugc_filetype_microtrans This is used to describe files that are uploaded but intended only for the game to consider adding as official content
 * @const_end
 */

/**
 * @const UGCFileVisibility
 * @desc These constants specify possible visibility states that a Workshop item can be in. They are used with the function ${function.steam_ugc_set_item_visibility} and are an async callback parameter for the functions ${function.steam_ugc_request_item_details} and ${function.steam_ugc_send_query}.
 * 
 * [[NOTE: See [Steam Docs](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#ERemoteStoragePublishedFileVisibility) for more details.]]
 * 
 * @member ugc_visibility_public Set the item to be publicly visible
 * @member ugc_visibility_friends_only Set the item to be visible to only people on the users friends list
 * @member ugc_visibility_private Set the item to be private
 * @const_end
 */

/**
 * @const UGCListSortOrder
 * @desc These constants specify the sorting order of user published UGC lists.
 * 
 * [[NOTE: See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUserUGCListSortOrder) for more details.]]
 * 
 * @member ugc_sortorder_CreationOrderDesc Returns items by creation date. Descending - the newest items are first
 * @member ugc_sortorder_CreationOrderAsc Returns items by creation date. Ascending - the oldest items are first
 * @member ugc_sortorder_TitleAsc Returns items by name
 * @member ugc_sortorder_LastUpdatedDesc Returns the most recently updated items first
 * @member ugc_sortorder_SubscriptionDateDesc Returns the most recently subscribed items first
 * @member ugc_sortorder_VoteScoreDesc Returns the items with the more recent score updates first
 * @member ugc_sortorder_ForModeration Returns the items that have been reported for moderation
 * @const_end
 */

/**
 * @const UGCListType
 * @desc These constants specify the type of published UGC list to obtain.
 * 
 * [[NOTE: See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUserUGCList) for more details.]]
 * 
 * @member ugc_list_Published List of files the user has published
 * @member ugc_list_VotedOn List of files the user has voted on. Includes both VotedUp and VotedDown
 * @member ugc_list_VotedUp List of files the user has voted up (restricted to the current user only)
 * @member ugc_list_VotedDown List of files the user has voted down (restricted to the current user only)
 * @member ugc_list_WillVoteLater :warning: DEPRECATED
 * @member ugc_list_Favorited List of files the user has favorited
 * @member ugc_list_Subscribed List of files the user has subscribed to (restricted to the current user only)
 * @member ugc_list_UsedOrPlayed List of files the user has spent time in game with
 * @member ugc_list_Followed List of files the user is following updates for
 * @const_end
 */

/**
 * @const UGCMatchType
 * @desc These constants specify the types of UGC to obtain.
 * 
 * [[NOTE: See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUGCMatchingUGCType) for more details.]]
 * 
 * @member ugc_match_Items Both microtransaction items and ready-to-use items
 * @member ugc_match_Items_Mtx Microtransaction items
 * @member ugc_match_Items_ReadyToUse Regular in game items that players have uploaded
 * @member ugc_match_Collections Shared collections of UGC
 * @member ugc_match_Artwork Artwork which has been shared
 * @member ugc_match_Videos Videos which have been shared
 * @member ugc_match_Screenshots Screenshots which have been shared
 * @member ugc_match_AllGuides Both web guides and integrated guides
 * @member ugc_match_WebGuides Guides that are only available on the [Steam Community](https://steamcommunity.com/)
 * @member ugc_match_IntegratedGuides Guides that you can use within your game (like Dota 2's in-game character guides)
 * @member ugc_match_UsableInGame Ready-to-use items and integrated guides
 * @member ugc_match_ControllerBindings Controller bindings which have been shared
 * @const_end
 */

/**
 * @const UGCQueryType (Sorting & Filtering)
 * @desc These constants specify the sorting and filtering for queries across all available UGC.
 * 
 * [[NOTE: See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUGCQuery) for more details.]]
 * 
 * @member ugc_query_RankedByVote Sort by vote popularity all-time
 * @member ugc_query_RankedByPublicationDate Sort by publication date descending
 * @member ugc_query_AcceptedForGameRankedByAcceptanceDate Sort by date accepted (for mtx items)
 * @member ugc_query_RankedByTrend Sort by vote popularity within the given "trend" period (set in ${function.steam_ugc_query_set_ranked_by_trend_days})
 * @member ugc_query_FavoritedByFriendsRankedByPublicationDate Filter to items the user's friends have favourited, sorted descending by publication date
 * @member ugc_query_CreatedByFriendsRankedByPublicationDate Filter to items created by friends, sorted by publication date descending
 * @member ugc_query_RankedByNumTimesReported Sort by report weight descending
 * @member ugc_query_CreatedByFollowedUsersRankedByPublicationDate Filter to items created by users that the current user has followed, sorted descending by publication date
 * @member ugc_query_NotYetRated Filtered to the user's voting queue
 * @member ugc_query_RankedByTotalVotesAsc Sort by total number of votes ascending (used internally for building the user's voting queue)
 * @member ugc_query_RankedByVotesUp Sort by number of votes up descending. Will use the "trend" period if specified (set in ${function.steam_ugc_query_set_ranked_by_trend_days})
 * @member ugc_query_RankedByTextSearch Sort by keyword text search relevancy
 * @const_end
 */

/**
 * @module ugc
 * @title UGC
 * @desc This section is for those users that have been given access to the Steam API for publishing your game to that platform and that want to use the possibilities that the Steam Workshop and Community gives you for adding and generating user content in your projects. The simplest form of user-generated content is the ability for the user to take and share screenshots, which is facilitated using the following two functions:
 * 
 * * ${function.steam_is_screenshot_requested}
 * * ${function.steam_send_screenshot}
 * 
 * Before using any of the built-in functions for the Steam UGC (**U**ser **G**enerated **C**ontent) API you need to have set up your game correctly from the Steam dashboard and you should have read through the required documentation found here:
 * 
 * * [Sharing User-Generated Content](https://partner.steamgames.com/documentation/ugc#Tech)
 * 
 * [[NOTE: You need to have your game accepted for the Steam online store and have access to the developer areas of the Steam API documentation.]]
 * 
 * All subscribed UGC items will be downloaded by the Steam client automatically, and you should have code in the ${event.steam} to catch this and store the ID of the UGC that has been downloaded for use in the other UGC functions.
 * 
 * [[WARNING: Steam UGC IDs can be huge numbers. This means that sometimes you may need to store these as a string rather than try and store them as a real value, especially if working with buffers or trying to write the value to a text file (since this will convert it to a simplified standard format like "6.6624e+003" which will cause issues being read back).]]
 * 
 * The normal workflow for getting UGC into your game would be as follows:
 * 
 * 1. The user would subscribe to an item (either from your game using ${function.steam_ugc_subscribe_item} or from the client/browser). If done from the game you are able to "listen" to the callback from the Steam Async Event.
 * 2. When you get a successful subscription callback this means that your game is now downloading the UGC. You would then check if the item is installed (i.e.: download completed) with ${function.steam_ugc_get_item_install_info}.
 * 3. If the item is not completely installed, you can use ${function.steam_ugc_get_item_update_info} to track the download progress.
 * 
 * The following sections explain all the functions required to get UGC functioning in GameMaker:
 * 
 * @section_func Creating And Editing Content
 * @desc The following functions are essentially "wrapper" functions for those supplied in the Steam API for creating and uploading content to their servers. As such, we recommend that you read over the linked Steam documentation before using them to gain a greater understanding of how they work: [Creating And Uploading Content](https://partner.steamgames.com/documentation/ugc#CreateUploadContent).
 * 
 * @ref steam_ugc_create_item
 * @ref steam_ugc_delete_item
 * @ref steam_ugc_start_item_update
 * @ref steam_ugc_set_item_title
 * @ref steam_ugc_set_item_description
 * @ref steam_ugc_set_item_visibility
 * @ref steam_ugc_set_item_tags
 * @ref steam_ugc_set_item_content
 * @ref steam_ugc_set_item_preview
 * @ref steam_ugc_submit_item_update
 * @ref steam_ugc_get_item_update_progress
 * 
 * @section_end
 * 
 * @section_func Consuming Content
 * @desc Once your user content has been created and the workshop has it available for download, people can subscribe to it through the Steam App or through the Web portal. However GameMaker also includes the following functions to use the Steam API for creating and canceling subscriptions as well as for getting information about what the user is subscribed to currently:
 * 
 * @ref steam_ugc_subscribe_item
 * @ref steam_ugc_unsubscribe_item
 * @ref steam_ugc_num_subscribed_items
 * @ref steam_ugc_get_subscribed_items
 * @ref steam_ugc_get_item_install_info
 * @ref steam_ugc_get_item_update_info
 * @ref steam_ugc_request_item_details
 * 
 * @section_end
 * 
 * @section_func Querying Content
 * @desc There are also a large number of functions available to query the Steam API about the UGC items available:
 * @ref steam_is_screenshot_requested
 * @ref steam_send_screenshot
 * @ref steam_ugc_create_item
 * @ref steam_ugc_delete_item
 * @ref steam_ugc_start_item_update
 * @ref steam_ugc_set_item_title
 * @ref steam_ugc_set_item_description
 * @ref steam_ugc_set_item_visibility
 * @ref steam_ugc_set_item_tags
 * @ref steam_ugc_set_item_content
 * @ref steam_ugc_set_item_preview
 * @ref steam_ugc_submit_item_update
 * @ref steam_ugc_get_item_update_progress
 * @ref steam_ugc_subscribe_item
 * @ref steam_ugc_unsubscribe_item
 * @ref steam_ugc_num_subscribed_items
 * @ref steam_ugc_get_subscribed_items
 * @ref steam_ugc_get_item_install_info
 * @ref steam_ugc_get_item_update_info
 * @ref steam_ugc_request_item_details
 * @ref steam_ugc_create_query_user
 * @ref steam_ugc_create_query_user_ex
 * @ref steam_ugc_create_query_all
 * @ref steam_ugc_create_query_all_ex
 * @ref steam_ugc_query_set_cloud_filename_filter
 * @ref steam_ugc_query_set_match_any_tag
 * @ref steam_ugc_query_set_search_text
 * @ref steam_ugc_query_set_ranked_by_trend_days
 * @ref steam_ugc_query_add_required_tag
 * @ref steam_ugc_query_add_excluded_tag
 * @ref steam_ugc_query_set_return_long_description
 * @ref steam_ugc_query_set_return_total_only
 * @ref steam_ugc_query_set_allow_cached_response
 * @ref steam_ugc_send_query
 * @ref steam_ugc_download
 * @section_end
 * 
 * @section_const Constants
 * @desc This section also provides a set of constants to be used along side the functions provided above:
 * @ref UGCFileType
 * @ref UGCFileVisibility
 * @ref UGCListSortOrder
 * @ref UGCListType
 * @ref UGCMatchType
 * @ref UGCQueryType
 * @section_end
 * 
 * @module_end
 */
 