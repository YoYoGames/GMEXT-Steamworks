
// FUNCTIONS

/**
 * @function steam_ugc_add_app_dependency
 * @description > **Steamworks Function**: [ISteamUGC::AddAppDependency](https://partner.steamgames.com/doc/api/ISteamUGC#AddAppDependency)
 *
 * This function adds a dependency between the given item and the app ID. This list of dependencies can be retrieved by calling ${function.steam_ugc_get_app_dependencies}. This is a soft-dependency that is displayed on the web.
 * It is up to the application to determine whether the item can actually be used or not.
 *
 * @param {Real} published_file_id The workshop item to add the dependency to.
 * @param {Real} app_id The required app or DLC to add as a dependency.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::AddAppDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#AddAppDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Struct.SteamUgcAddAppDependencyResult} result The result of the operation.
 * @event_end
 * 
 * @function_end 
 */

/**
 * @function steam_ugc_add_dependency
 * @description > **Steamworks Function**: [ISteamUGC::AddDependency](https://partner.steamgames.com/doc/api/ISteamUGC#AddDependency)
 *
 * This function adds a workshop item as a dependency to the specified item.
 *
 * @param {Real} parent_published_file_id The workshop item to add a dependency to.
 * @param {Real} child_published_file_id The dependency to add to the parent.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::AddUGCDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#AddUGCDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Struct.SteamUgcAddUGCDependencyResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_add_excluded_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddExcludedTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddExcludedTag)
 *
 * This function adds an excluded tag to a pending UGC Query. This will only return UGC without the specified tag.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {String} tag_name The tag that must NOT be attached to the UGC for it to be received.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_key_value_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddItemKeyValueTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemKeyValueTag)
 *
 * This function adds a key-value tag pair to an item. Keys can map to multiple different values (1-to-many relationship).
 * 
 * Key names are restricted to alpha-numeric characters and the '_' character.
 * 
 * Both keys and values cannot exceed 255 characters in length.
 * 
 * Key-value tags are searchable by exact match only.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} key The key to set on the item.
 * @param {String} value The value to map to the key.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_preview_file
 * @description > **Steamworks Function**: [ISteamUGC::AddItemPreviewFile](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemPreviewFile)
 *
 * This function adds an additional preview file for the item.
 * 
 * Then the format of the image should be one that both the web and the application (if necessary) can render and must be under 1MB. Suggested formats include JPG, PNG and GIF.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} preview_file_path The absolute path to the local image.
 * @param {Enum.SteamUgcItemPreviewType} preview_type The type of this preview.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_preview_video
 * @description > **Steamworks Function**: [ISteamUGC::AddItemPreviewVideo](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemPreviewVideo)
 *
 * This function adds an additional video preview from YouTube for the item.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} video_id The YouTube video ID to add (e.g. "jHgZh4GV9G0").
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_to_favorites
 * @description > **Steamworks Function**: [ISteamUGC::AddItemToFavorites](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemToFavorites)
 *
 * This function adds a workshop item to the user's favorites list.
 *
 * @param {Real} app_id The app ID that this item belongs to.
 * @param {Real} published_file_id The workshop item to add to the user's favorites list.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::UserFavoriteItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserFavoriteItemsListChanged_t)
 *
 * Called when an item is added to or removed from the user's list of favorite workshop items.
 *
 * @member {Struct.SteamUgcFavoriteItemsListChanged} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_add_required_key_value_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddRequiredKeyValueTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddRequiredKeyValueTag)
 *
 * This function adds a required key-value tag to a pending UGC Query. This will only return workshop items that have a key = `key` and a value = `value`.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {String} key The key-value key that must be attached to the UGC for it to be received.
 * @param {String} value The key-value value associated with the key that must be attached to the UGC for it to be received.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_required_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddRequiredTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddRequiredTag)
 *
 * This function adds a required tag to a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {String} tag_name The tag that must be attached to the UGC for it to be received.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_required_tag_group
 * @description > **Steamworks Function**: [ISteamUGC::AddRequiredTagGroup](https://partner.steamgames.com/doc/api/ISteamUGC#AddRequiredTagGroup)
 *
 * This function adds the requirement that the returned items from the pending UGC Query have at least one of the tags in the given set (logical "or"). For each tag group that is added, at least one tag from each group is required to be on the matching items.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {Array[String]} tags_csv A set of tags where at least one of the tags must be attached to the UGC.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_init_workshop_for_game_server
 * @description > **Steamworks Function**: [ISteamUGC::BInitWorkshopForGameServer](https://partner.steamgames.com/doc/api/ISteamUGC#BInitWorkshopForGameServer)
 *
 * This function lets game servers set a specific workshop folder before issuing any UGC commands.
 * 
 * This is helpful if you want to support multiple game servers running out of the same install folder.
 *
 * @param {Real} workshop_depot_id The depot ID of the game server.
 * @param {String} folder The absolute path to store the workshop content.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_item
 * @description > **Steamworks Function**: [ISteamUGC::CreateItem](https://partner.steamgames.com/doc/api/ISteamUGC#CreateItem)
 *
 * This function creates a new workshop item with no content attached yet.
 *
 * @param {Real} consumer_app_id The app ID that will be using this item.
 * @param {Enum.SteamRemoteStorageWorkshopFileType} workshop_file_type The type of UGC to create.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::CreateItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#CreateItemResult_t)
 *
 * Called when a new workshop item has been created.
 *
 * @member {Struct.SteamUgcCreateItemResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_create_query_all_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::CreateQueryAllUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#CreateQueryAllUGCRequest)
 *
 * This function queries for all matching UGC. You can use this to list all of the available UGC for your app.
 * 
 * This will return up to 50 results as declared by `STEAM_UGC_NUM_RESULTS_PER_PAGE`. You can make subsequent calls to this function, increasing the `page` each time to get the next set of results.
 * 
 * [[Note: Either `consumer_app_id` or `creator_app_id` must have a valid app ID!]]
 * 
 * [[Note: You must release the handle returned by this function by calling ${function.steam_ugc_release_query_ugc_request} when you are done with it!]]
 * 
 * To query for the UGC associated with a single user you can use ${function.steam_ugc_create_query_user_ugc_request}.
 *
 * @param {Enum.SteamUgcQuery} query_type Used to specify the sorting and filtering for this call.
 * @param {Enum.SteamUgcMatchingUgcType} matching_ugc_type Used to specify the type of UGC queried for.
 * @param {Real} creator_app_id The app ID where the item was created. This may be different than `consumer_app_id` if your item creation tool is a separate App ID.
 * @param {Real} consumer_app_id The app ID of the current game. Do not pass the creation tool's app ID if it is a separate app.
 * @param {Real} page The page number of the results to receive. This should start at 1 on the first call.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_query_ugc_details_request
 * @description > **Steamworks Function**: [ISteamUGC::CreateQueryUGCDetailsRequest](https://partner.steamgames.com/doc/api/ISteamUGC#CreateQueryUGCDetailsRequest)
 *
 * This function queries for the details of specific UGC items. There is currently a 1,000 limit for the number of items you can request, but this may be lifted in the future.
 * 
 * [[Note: Either `consumer_app_id` or `creator_app_id` must have a valid app ID!]]
 * 
 * [[Note: You must release the handle returned by this function by calling ${function.steam_ugc_release_query_ugc_request} when you are done with it!]]
 * 
 * To query all the UGC for your app you can use ${function.steam_ugc_create_query_all_ugc_request} instead.
 *
 * @param {Array[Real]} published_file_ids The list of workshop items to get the details for.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_query_user_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::CreateQueryUserUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#CreateQueryUserUGCRequest)
 *
 * This function queries UGC associated with a user. You can use this to list the UGC the user is subscribed to amongst other things.
 * 
 * This will return up to 50 results as declared by `STEAM_UGC_NUM_RESULTS_PER_PAGE`. You can make subsequent calls to this function, increasing the `page` each time to get the next set of results.
 * 
 * [[Note: Either `consumer_app_id` or `creator_app_id` must have a valid app ID!]]
 * 
 * [[Note: You must release the handle returned by this function by calling ${function.steam_ugc_release_query_ugc_request} when you are done with it!]]
 * 
 * To query all the UGC for your app you can use ${function.steam_ugc_create_query_all_ugc_request} instead.
 *
 * @param {Real} account_id The account ID to query UGC for.
 * @param {Enum.SteamUserUgcList} list_type Used to specify the type of list to get.
 * @param {Enum.SteamUgcMatchingUgcType} matching_ugc_type Used to specify the type of UGC queried for.
 * @param {Enum.SteamUserUgcListSortOrder} sort_order Used to specify the order that the list will be sorted in.
 * @param {Real} creator_app_id The app ID where the item was created. This may differ if your creation tool is a separate app from the game.
 * @param {Real} consumer_app_id The app ID of the current game. Do not pass the creation tool's app ID if it is a separate app.
 * @param {Real} page The page number of the results to receive. This should start at 1 on the first call.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_delete_item
 * @description > **Steamworks Function**: [ISteamUGC::DeleteItem](https://partner.steamgames.com/doc/api/ISteamUGC#DeleteItem)
 *
 * This function deletes the item without prompting the user.
 *
 * @param {Real} published_file_id The workshop item to delete.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::DeleteItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DeleteItemResult_t)
 *
 * Called when a workshop item has been deleted.
 *
 * @member {Struct.SteamUgcDeleteItemResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_download_item
 * @description > **Steamworks Function**: [ISteamUGC::DownloadItem](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItem)
 *
 * This function downloads or updates a workshop item.
 * 
 * If the return value is `true` then register and wait for the Callback [DownloadItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItemResult_t) before calling ${function.steam_ugc_get_item_install_info} or accessing the workshop item on disk.
 * 
 * If the workshop item has an item state of `SteamUgcItemState.NeedsUpdate`, then this function can be called to initiate the update. Do not access the workshop item on disk until the callback `DownloadItemResult_t` is called.
 * 
 * The `DownloadItemResult_t` callback contains the app ID associated with the workshop item. It should be compared against the running app ID as the handler will be called for all item downloads regardless of the running application.
 *
 * @param {Real} published_file_id The workshop item to download.
 * @param {Bool} high_priority Whether to start the download in high priority, pausing any existing in-progress Steam downloads to immediately begin this workshop item.
 * @returns {Bool}
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::DownloadItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItemResult_t)
 * 
 * Triggered when a workshop item has been downloaded.
 * 
 * [[Note: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.]]
 * 
 * @member {Struct.SteamUgcDownloadItemResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_get_app_dependencies
 * @description > **Steamworks Function**: [ISteamUGC::GetAppDependencies](https://partner.steamgames.com/doc/api/ISteamUGC#GetAppDependencies)
 *
 * This function gets the app dependencies associated with the given published file ID. These are "soft" dependencies that are shown on the web. It is up to the application to determine whether an item can be used or not.
 *
 * @param {Real} published_file_id The workshop item to get app dependencies for.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUGC::GetAppDependenciesResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#GetAppDependenciesResult_t)
 * 
 * Called when getting the app dependencies for an item.
 * 
 * @member {Struct.SteamUgcGetAppDependenciesResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_get_item_download_info
 * @description > **Steamworks Function**: [ISteamUGC::GetItemDownloadInfo](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemDownloadInfo)
 *
 * This function gets info about a pending download of a workshop item that has `SteamUgcItemState.NeedsUpdate` set.
 *
 * @param {Real} published_file_id The workshop item to get the download info for.
 * @returns {Struct.SteamUgcItemDownloadInfo} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_install_info
 * @description > **Steamworks Function**: [ISteamUGC::GetItemInstallInfo](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemInstallInfo)
 *
 * This function gets info about currently installed content on the disc for workshop items that have `SteamUgcItemState.Installed` set.
 * 
 * Calling this sets the "used" flag on the workshop item for the current player and adds it to their `SteamUserUgcList.UsedOrPlayed` list.
 *
 * @param {Real} published_file_id The workshop item to get the install info for.
 * @returns {Struct.SteamUgcItemInstallInfo} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_state
 * @description > **Steamworks Function**: [ISteamUGC::GetItemState](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemState)
 *
 * This function gets the current state of a workshop item on this client.
 *
 * @param {Real} published_file_id The workshop item to get the state for.
 * @returns {Enum.SteamUgcItemState} The item state. Should be used with the ${constant.SteamUgcItemState} flags to determine the state of the workshop item.
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_update_progress
 * @description > **Steamworks Function**: [ISteamUGC::GetItemUpdateProgress](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemUpdateProgress)
 *
 * This function gets the progress of an item update.
 *
 * @param {Real} update_handle The update handle to get the progress for.
 * @returns {Struct.SteamUgcItemUpdateProgress} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_num_subscribed_items
 * @description > **Steamworks Function**: [ISteamUGC::GetNumSubscribedItems](https://partner.steamgames.com/doc/api/ISteamUGC#GetNumSubscribedItems)
 *
 * This function gets the total number of items the current user is subscribed to for the game or application. By default, this function will exclude locally disabled items.
 *
 * @param {Bool} include_locally_disabled Whether to include locally disabled items in the return value or not. Defaults to `false`.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_subscribed_items
 * @description > **Steamworks Function**: [ISteamUGC::GetSubscribedItems](https://partner.steamgames.com/doc/api/ISteamUGC#GetSubscribedItems)
 *
 * This function gets a list of all of the items the current user is subscribed to for the current game, excluding any that have been locally disabled by the user.
 * 
 * By default, the items are returned in the order that the user subscribed to them. Users can change the ordering in the Steam Client, or you can do so via the ${function.steam_ugc_set_subscriptions_load_order} call.
 *
 * @param {Real} max_entries The maximum number of items to return. This typically matches the value returned by ${function.steam_ugc_get_num_subscribed_items}.
 * @param {Bool} include_locally_disabled Whether to include locally disabled items in the return value or not. Defaults to `false`.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_result
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCResult](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCResult)
 *
 * This function retrieves the details of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Struct.SteamUgcQueryResult}
 * @function_end
 */

/**
 * @function steam_ugc_get_query_ugc_num_tags
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCNumTags](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCNumTags)
 *
 * This function retrieves the number of tags of an individual workshop item after receiving a querying UGC call result.
 *
 * You should call this in a loop to get the details of all the workshop items returned.
 *
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_ugc_get_query_ugc_tag
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCTag](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCTag)
 *
 * This function retrieves a tag associated with an individual workshop item after receiving a querying UGC call result.
 *
 * You should call this in a loop to get the details of all the workshop items returned.
 *
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * Before calling this you should call ${function.steam_ugc_get_query_ugc_num_tags} to get the number of tags.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} tag_index The index of the tag to get.
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_ugc_get_query_ugc_tag_display_name
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCTagDisplayName](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCTagDisplayName)
 *
 * This function retrieves the display name of a tag associated with an individual workshop item after receiving a querying UGC call result.
 *
 * You should call this in a loop to get the details of all the workshop items returned.
 *
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * Before calling this you should call ${function.steam_ugc_get_query_ugc_num_tags} to get the number of tags.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} tag_index The index of the tag to get the display name of.
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_ugc_get_query_ugc_preview_url
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCPreviewURL](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCPreviewURL)
 *
 * This function retrieves the URL to the preview image of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {String}
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_metadata
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCMetadata](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCMetadata)
 *
 * This function retrieves the developer set metadata of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {String}
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_children
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCChildren](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCChildren)
 *
 * This function retrieves the ids of any child items of an individual workshop item after receiving a querying UGC call result. These items can either be a part of a collection or some other dependency (see ${function.steam_ugc_add_dependency}).
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} max_entries The maximum number of child item ids to return.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_statistic
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCStatistic](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCStatistic)
 *
 * This function retrieves various statistics of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Enum.SteamUgcStatisticType} stat_type The statistic to retrieve.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_num_additional_previews
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCNumAdditionalPreviews](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCNumAdditionalPreviews)
 *
 * This function retrieves the number of additional previews of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 * 
 * You can then call ${function.steam_ugc_get_query_ugc_additional_preview} to get the details of each additional preview.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_supported_game_version_data
 * @desc > **Steamworks Function**: [ISteamUGC::GetSupportedGameVersionData](https://partner.steamgames.com/doc/api/ISteamUGC#GetSupportedGameVersionData)
 * 
 * This function retrieves what Steam (beta) branches this item version is valid for. If the minimum branch is an empty string, then it is valid for all versions up to the maximum branch. If the maximum branch is an empty string, then the this item version is valid for every branch published after the minimum branch. If both strings are empty, then this item version is valid for all Steam branches. The version that is downloaded by the Steam client is dictated by what versions are valid for the item and what Steam (beta) branch the user has opted into.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 * 
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item.
 * @param {Real} version_index The index of the item version.
 * @returns {Struct.SteamUgcSupportedGameVersionData} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_additional_preview
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCAdditionalPreview](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCAdditionalPreview)
 *
 * This function retrieves the details of an additional preview associated with an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 * 
 * Before calling this you should call ${function.steam_ugc_get_query_ugc_num_additional_previews} to get number of additional previews.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} preview_index The index of the additional preview to get the details of.
 * @returns {Struct.SteamUgcAdditionalPreview}
 * @function_end
 */

/**
 * @function steam_ugc_get_query_ugc_num_key_value_tags
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCNumKeyValueTags](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCNumKeyValueTags)
 *
 * This function retrieves the number of key-value tags of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_key_value_tag
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCKeyValueTag](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCKeyValueTag)
 *
 * This function retrieves the details of a key-value tag associated with an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 * 
 * Before calling this you should call ${function.steam_ugc_get_query_ugc_num_key_value_tags} to get number of tags.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} key_value_tag_index The index of the tag to get the details of.
 * @returns {Struct.SteamUgcKeyValueTag} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_content_descriptors
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCContentDescriptors](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCContentDescriptors)
 *
 * This function retrieves an array of ${constant.SteamUgcContentDescriptorId} set on the item.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} max_descriptors The maximum number of content descriptors to return.
 * @returns {Array[Enum.SteamUgcContentDescriptorId]}
 * @function_end
 */

/**
 * @function steam_ugc_get_user_content_descriptor_preferences
 * @description > **Steamworks Function**: [ISteamUGC::GetUserContentDescriptorPreferences](https://partner.steamgames.com/doc/api/ISteamUGC#GetUserContentDescriptorPreferences)
 *
 * This function retrieves an array of ${constant.SteamUgcContentDescriptorId} the local user has excluded from search/download.
 *
 * @param {Real} max_descriptors The maximum number of content descriptors to return.
 * @returns {Array[Enum.SteamUgcContentDescriptorId]}
 * @function_end
 */

/**
 * @function steam_ugc_remove_app_dependency
 * @description > **Steamworks Function**: [ISteamUGC::RemoveAppDependency](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveAppDependency)
 *
 * This function removes the dependency between the given item and the app ID. This list of dependencies can be retrieved by calling ${function.steam_ugc_get_app_dependencies}.
 *
 * @param {Real} published_file_id The workshop item to remove the dependency from.
 * @param {Real} app_id The app or DLC to remove as a dependency.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::RemoveAppDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveAppDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Struct.SteamUgcRemoveAppDependencyResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_remove_dependency
 * @description > **Steamworks Function**: [ISteamUGC::RemoveDependency](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveDependency)
 *
 * This function removes a workshop item as a dependency from the specified item.
 *
 * @param {Real} parent_published_file_id The workshop item to remove a dependency from.
 * @param {Real} child_published_file_id The dependency to remove from the parent.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::RemoveUGCDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveUGCDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Struct.SteamUgcRemoveUGCDependencyResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_remove_item_from_favorites
 * @description > **Steamworks Function**: [ISteamUGC::RemoveItemFromFavorites](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveItemFromFavorites)
 *
 * This function removes a workshop item from the user's favorites list.
 *
 * @param {Real} app_id The app ID that this item belongs to.
 * @param {Real} published_file_id The workshop item to remove from the user's favorites list.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::UserFavoriteItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserFavoriteItemsListChanged_t)
 *
 * Called when an item is added to or removed from the user's list of favorite workshop items.
 *
 * @member {Struct.SteamUgcFavoriteItemsListChanged} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_remove_all_item_key_value_tags
 * @description > **Steamworks Function**: [ISteamUGC::RemoveAllItemKeyValueTags](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveAllItemKeyValueTags)
 *
 * This function removes all existing key-value tags from an item.
 *
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customise.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_ugc_remove_item_key_value_tags
 * @description > **Steamworks Function**: [ISteamUGC::RemoveItemKeyValueTags](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveItemKeyValueTags)
 *
 * This function removes an existing key-value tag from an item.
 * 
 * You can only call this up to 100 times per item update. If you need to remove more tags than that you'll need to make subsequent item updates.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customise.
 * @param {String} key The key to remove from the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_item_preview
 * @description > **Steamworks Function**: [ISteamUGC::RemoveItemPreview](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveItemPreview)
 *
 * This function removes an existing preview from an item.
 *
 * @param {Real} update_handle The workshop item update handle to customise.
 * @param {Real} index The index of the preview to remove from the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_content_descriptor
 * @description > **Steamworks Function**: [ISteamUGC::AddContentDescriptor](https://partner.steamgames.com/doc/api/ISteamUGC#AddContentDescriptor)
 *
 * This function sets the given ${constant.SteamUgcContentDescriptorId} on the item.
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id The content descriptor to set on the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_content_descriptor
 * @description > **Steamworks Function**: [ISteamUGC::RemoveContentDescriptor](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveContentDescriptor)
 *
 * This function removes the given ${constant.SteamUgcContentDescriptorId} from the item.
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id The content descriptor to remove from the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_required_game_versions
 * @description > **Steamworks Function**: [ISteamUGC::SetRequiredGameVersions](https://partner.steamgames.com/doc/api/ISteamUGC#SetRequiredGameVersions)
 *
 * This function sets what Steam (beta) branches this item is valid for. An empty string for either `game_branch_min` or `game_branch_max` means that it will match any version on that end of the range. This will only be applied if the actual content has been changed. Users will download the version of the item that is valid for the Steam (beta) branch they have opted into.
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} game_branch_min The name of the minimum Steam branch this item is valid for.
 * @param {String} game_branch_max The name of the maximum Steam branch this item is valid for.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_send_query_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::SendQueryUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#SendQueryUGCRequest)
 *
 * This function sends a UGC query to Steam.
 * 
 * This must be called with a handle obtained from ${function.steam_ugc_create_query_user_ugc_request}, ${function.steam_ugc_create_query_all_ugc_request}, or ${function.steam_ugc_create_query_ugc_details_request} to actually send the request to Steam. Before calling this you should use one more of the following functions to customise your query:
 * 
 * ${function.steam_ugc_add_required_tag}, ${function.steam_ugc_add_excluded_tag}, ${function.steam_ugc_set_return_only_ids}, ${function.steam_ugc_set_return_key_value_tags}, ${function.steam_ugc_set_return_long_description}, ${function.steam_ugc_set_return_metadata}, ${function.steam_ugc_set_return_children}, ${function.steam_ugc_set_return_additional_previews}, ${function.steam_ugc_set_return_total_only}, ${function.steam_ugc_set_language}, ${function.steam_ugc_set_allow_cached_response}, ${function.steam_ugc_set_cloud_file_name_filter}, ${function.steam_ugc_set_match_any_tag}, ${function.steam_ugc_set_search_text}, ${function.steam_ugc_set_ranked_by_trend_days}, ${function.steam_ugc_add_required_key_value_tag}
 *
 * @param {Real} query_handle The UGC query request handle to send.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t)
 *
 * Called when a UGC query request has completed.
 *
 * @member {Struct.SteamUgcQueryCompleted} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_release_query_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::ReleaseQueryUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#ReleaseQueryUGCRequest)
 *
 * This function releases a UGC query handle when you are done with it to free up memory.
 *
 * @param {Real} query_handle The UGC query handle to release.
 * @function_end
 */

/**
 * @function steam_ugc_set_callback_item_installed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a workshop item has been installed or updated.
 * 
 * [[Note: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.]]
 * 
 * See: [ISteamUGC::ItemInstalled_t](https://partner.steamgames.com/doc/api/ISteamUGC#ItemInstalled_t)
 * 
 * See: ${struct.SteamUgcItemInstalled}
 *
 * @param {Function} callback The function to be called when a workshop item is installed.
 * @function_end 
 */

/**
 * @function steam_ugc_clear_callback_item_installed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_ugc_set_callback_item_installed}.
 *
 * @function_end
 */

/**
 * @function steam_ugc_set_callback_download_item_result
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a workshop item download initiated by ${function.steam_ugc_download_item} has finished (successfully or not).
 *
 * See: [ISteamUGC::DownloadItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItemResult_t)
 *
 * See: ${struct.SteamUgcDownloadItemResult}
 *
 * @param {Function} callback The function to be called when a workshop item download completes.
 * @function_end
 */

/**
 * @function steam_ugc_clear_callback_download_item_result
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_ugc_set_callback_download_item_result}.
 *
 * @function_end
 */

/**
 * @function steam_ugc_set_allow_cached_response
 * @description > **Steamworks Function**: [ISteamUGC::SetAllowCachedResponse](https://partner.steamgames.com/doc/api/ISteamUGC#SetAllowCachedResponse)
 *
 * This function sets whether results will be returned from the cache for the specific period of time on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Real} max_age_seconds The maximum amount of time that an item can be returned without a cache invalidation.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_cloud_file_name_filter
 * @description > **Steamworks Function**: [ISteamUGC::SetCloudFileNameFilter](https://partner.steamgames.com/doc/api/ISteamUGC#SetCloudFileNameFilter)
 *
 * This function sets to only return items that have a specific filename on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_user_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {String} match_cloud_file_name The filename that returned items must have in order to match the query.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_content
 * @description > **Steamworks Function**: [ISteamUGC::SetItemContent](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemContent)
 *
 * This function sets the folder that will be stored as the content for an item.
 * 
 * For efficient upload and download, files should not be merged or compressed into single files (e.g. zip files).
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} content_folder The absolute path to a local folder containing the content for the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_description
 * @description > **Steamworks Function**: [ISteamUGC::SetItemDescription](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemDescription)
 *
 * This function sets a new description for an item.
 * 
 * The description must be limited to the length defined by `STEAM_REMOTE_STORAGE_PUBLISHED_DOCUMENT_DESCRIPTION_MAX`.
 * 
 * You can set what language this is for by using ${function.steam_ugc_set_item_update_language}, if no language is set then "english" is assumed.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} description The new description of the item, with a maximum length of 8000 bytes.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_metadata
 * @description > **Steamworks Function**: [ISteamUGC::SetItemMetadata](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemMetadata)
 *
 * This function sets arbitrary metadata for an item. This metadata can be returned from queries without having to download and install the actual content.
 * 
 * The metadata must be limited to the size defined by `STEAM_UGC_DEVELOPER_METADATA_MAX`.
 * 
 * [[Note:  This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} metadata The metadata to set for the item, with a maximum length of 5000 bytes.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_preview
 * @description > **Steamworks Function**: [ISteamUGC::SetItemPreview](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemPreview)
 *
 * This function sets the primary preview image for the item.
 * 
 * The format should be one that both the web and the application (if necessary) can render. Suggested formats include JPG, PNG and GIF.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} preview_file The absolute path to a local preview file (image) to use as the primary preview for the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_tags
 * @description > **Steamworks Function**: [ISteamUGC::SetItemTags](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemTags)
 *
 * This function sets arbitrary developer specified tags on an item.
 * 
 * Each tag must be limited to 255 characters. Tag names can only include printable characters, excluding ','. For reference on what characters are allowed, refer to http://en.cppreference.com/w/c/string/byte/isprint.
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Array[String]} tags_csv An array of strings holding the tags to set on the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_title
 * @description > **Steamworks Function**: [ISteamUGC::SetItemTitle](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemTitle)
 *
 * This function sets a new title for an item.
 * 
 * The title must be limited to the size defined by `STEAM_REMOTE_STORAGE_PUBLISHED_DOCUMENT_TITLE_MAX`.
 * 
 * You can set what language this is for by using ${function.steam_ugc_set_item_update_language}, if no language is set then "english" is assumed.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} title The new title of the item, with a maximum length of 128 bytes.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_update_language
 * @description > **Steamworks Function**: [ISteamUGC::SetItemUpdateLanguage](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemUpdateLanguage)
 *
 * This function sets the language of the title and description that will be set in this item update.
 * 
 * This must be in the format of the [API language code](https://partner.steamgames.com/doc/store/localization#supported_languages).
 * 
 * If this is not set then "english" is assumed.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} language The language to set, as a Steam supported [API language code](https://partner.steamgames.com/doc/store/localization/languages).
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_items_disabled_locally
 * @description > **Steamworks Function**: [ISteamUGC::SetItemsDisabledLocally](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemsDisabledLocally)
 *
 * This function sets whether the items should be disabled locally or not. This means that it will not be returned in ${function.steam_ugc_get_num_subscribed_items} and ${function.steam_ugc_get_subscribed_items} by default.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the published items to set the disabled state for.
 * @param {Bool} disabled_locally Whether the items should be disabled locally (`true`) or enabled (`false`).
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_ugc_set_item_visibility
 * @description > **Steamworks Function**: [ISteamUGC::SetItemVisibility](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemVisibility)
 *
 * This function sets the visibility of an item.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility The desired visibility to set for the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_language
 * @description > **Steamworks Function**: [ISteamUGC::SetLanguage](https://partner.steamgames.com/doc/api/ISteamUGC#SetLanguage)
 *
 * This function sets the language to return the title and description in for the items on a pending UGC Query.
 * 
 * This must be in the format of the [API Language code](https://partner.steamgames.com/doc/store/localization#supported_languages).
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {String} language The language to return the title and description in, as a Steam supported [API language code](https://partner.steamgames.com/doc/store/localization/languages).
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_match_any_tag
 * @description > **Steamworks Function**: [ISteamUGC::SetMatchAnyTag](https://partner.steamgames.com/doc/api/ISteamUGC#SetMatchAnyTag)
 *
 * This function sets whether workshop items will be returned if they have one or more matching tags, or if all tags need to match on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_all_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} match_any_tag If `true`, items must have at least one of the required tags to match; if `false`, items must have all of the required tags.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_ranked_by_trend_days
 * @description > **Steamworks Function**: [ISteamUGC::SetRankedByTrendDays](https://partner.steamgames.com/doc/api/ISteamUGC#SetRankedByTrendDays)
 *
 * This function sets whether the order of the results will be updated based on the rank of items over a number of days on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_all_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Real} days The number of days to rank items over, used with the `SteamUgcQuery.RankedByTrend` query type.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_additional_previews
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnAdditionalPreviews](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnAdditionalPreviews)
 *
 * This function sets whether to return any additional images/videos attached to the items on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} return_additional_previews Whether to return any additional previews (images and videos) for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_children
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnChildren](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnChildren)
 *
 * This function sets whether to return the IDs of the child items of the item on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} return_children Whether to return the IDs of the child items of each item in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_key_value_tags
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnKeyValueTags](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnKeyValueTags)
 *
 * This function sets whether to return any key-value tags for the items on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} return_key_value_tags Whether to return any key-value tags for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_long_description
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnLongDescription](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnLongDescription)
 *
 * This function sets whether to return the full description for the items on a pending UGC Query.
 * 
 * If you don't set this then you only receive the summary which is the description truncated at 255 bytes.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} return_long_description Whether to return the full description for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_metadata
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnMetadata](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnMetadata)
 *
 * This function sets whether to return the developer-specified metadata for the items on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} return_metadata Whether to return the developer-specified metadata for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_only_ids
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnOnlyIDs](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnOnlyIDs)
 *
 * This function sets whether to only return IDs instead of all the details on a pending UGC Query.
 * 
 * This is useful for when you don't need all the information (e.g. you just want to get the IDs of the items a user has in their favorites list.)
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} return_only_ids Whether to only return the IDs of the items, omitting all other details, in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_playtime_stats
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnPlaytimeStats](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnPlaytimeStats)
 *
 * This function sets whether to return the playtime stats on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Real} days The number of days worth of playtime stats to return for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_total_only
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnTotalOnly](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnTotalOnly)
 *
 * This function sets whether to only return the total number of matching items on a pending UGC Query.
 * 
 * The actual items will not be returned when [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) is called.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 * 
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Bool} return_total_only Whether to only return the total number of matching items, without returning any item details.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_search_text
 * @description > **Steamworks Function**: [ISteamUGC::SetSearchText](https://partner.steamgames.com/doc/api/ISteamUGC#SetSearchText)
 *
 * This function sets a string that items need to match in either the title or the description on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_all_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 * 
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {String} search_text The text that items must match in either their title or description to be returned.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_subscriptions_load_order
 * @description > **Steamworks Function**: [ISteamUGC::SetSubscriptionsLoadOrder](https://partner.steamgames.com/doc/api/ISteamUGC#SetSubscriptionsLoadOrder)
 *
 * This function sets the local load order for these items. If there are any items not in the given list, they will sort by the time subscribed.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the subscribed items, in the desired load order.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_user_item_vote
 * @description > **Steamworks Function**: [ISteamUGC::SetUserItemVote](https://partner.steamgames.com/doc/api/ISteamUGC#SetUserItemVote)
 *
 * This function allows the user to rate a workshop item up or down.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to vote on.
 * @param {Bool} vote_up Whether to vote the item up (`true`) or down (`false`).
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::SetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SetUserItemVoteResult_t)
 *
 * Called when the user has voted on a workshop item.
 *
 * @member {Struct.SteamUgcSetUserItemVoteResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_get_user_item_vote
 * @description > **Steamworks Function**: [ISteamUGC::GetUserItemVote](https://partner.steamgames.com/doc/api/ISteamUGC#GetUserItemVote)
 *
 * This function gets the user's vote status on a workshop item.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to get the user's vote status for.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::GetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#GetUserItemVoteResult_t)
 *
 * Called when the user's current vote on a workshop item has been retrieved.
 *
 * @member {Struct.SteamUgcGetUserItemVoteResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_start_item_update
 * @description > **Steamworks Function**: [ISteamUGC::StartItemUpdate](https://partner.steamgames.com/doc/api/ISteamUGC#StartItemUpdate)
 *
 * This function starts the item update process.
 * 
 * This gets you a handle that you can use to modify the item before finally sending off the update to the server with ${function.steam_ugc_submit_item_update}.
 *
 * @param {Real} consumer_app_id The App ID that will consume this item.
 * @param {Real} published_file_id The unique ID of the workshop item to update.
 * @returns {Real} A handle that you can use with future calls to modify the item before finally sending the update.
 * @function_end
 */

/**
 * @function steam_ugc_start_playtime_tracking
 * @description > **Steamworks Function**: [ISteamUGC::StartPlaytimeTracking](https://partner.steamgames.com/doc/api/ISteamUGC#StartPlaytimeTracking)
 *
 * This function starts tracking playtime on a set of workshop items.
 * 
 * When your app shuts down, playtime tracking will automatically stop.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the workshop items to start tracking playtime for.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::StartPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StartPlaytimeTrackingResult_t)
 * 
 * Called when workshop item playtime tracking has started.
 * 
 * @member {Struct.SteamUgcStartPlaytimeTrackingResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_stop_playtime_tracking
 * @description > **Steamworks Function**: [ISteamUGC::StopPlaytimeTracking](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTracking)
 *
 * This function stops tracking playtime on a set of workshop items. This will increment the number of "playtime" sessions for those items by one.
 * 
 * When your app shuts down, playtime tracking will automatically stop.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the workshop items to stop tracking playtime for.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUGC::StopPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTrackingResult_t)
 * 
 * Called when workshop item playtime tracking has stopped.
 * 
 * @member {Struct.SteamUgcStopPlaytimeTrackingResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_stop_playtime_tracking_for_all_items
 * @description > **Steamworks Function**: [ISteamUGC::StopPlaytimeTrackingForAllItems](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTrackingForAllItems)
 *
 * This function stops tracking playtime of all workshop items.
 * 
 * When your app shuts down, playtime tracking will automatically stop. This will increment the number of "playtime" sessions for those all items that were being tracked by one.
 *
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUGC::StopPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTrackingResult_t)
 * 
 * Called when workshop item playtime tracking has stopped.
 * 
 * @member {Struct.SteamUgcStopPlaytimeTrackingResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_submit_item_update
 * @description > **Steamworks Function**: [ISteamUGC::SubmitItemUpdate](https://partner.steamgames.com/doc/api/ISteamUGC#SubmitItemUpdate)
 *
 * This function uploads the changes made to an item to the Steam Workshop.
 * 
 * You can track the progress of an item update with ${function.steam_ugc_get_item_update_progress}.
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} change_note A change note detailing what was altered in this item update; can be an empty string.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::SubmitItemUpdateResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SubmitItemUpdateResult_t)
 *
 * Called when a workshop item update has been submitted and uploaded.
 *
 * @member {Struct.SteamUgcSubmitItemUpdateResult} result The result of this operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_subscribe_item
 * @description > **Steamworks Function**: [ISteamUGC::SubscribeItem](https://partner.steamgames.com/doc/api/ISteamUGC#SubscribeItem)
 *
 * This function subscribes to a workshop item. It will be downloaded and installed as soon as possible.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to subscribe to.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageSubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageSubscribePublishedFileResult_t)
 *
 * Called when the user has subscribed to a piece of UGC.
 *
 * @member {Struct.SteamUgcSubscribeItemResult} result The result of this operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_suspend_downloads
 * @description > **Steamworks Function**: [ISteamUGC::SuspendDownloads](https://partner.steamgames.com/doc/api/ISteamUGC#SuspendDownloads)
 *
 * This function suspends and resumes all workshop downloads.
 * 
 * If you call this with `suspend` set to `true` then downloads will be suspended until you resume them by setting `suspend` to `false` or when the game ends.
 *
 * @param {Bool} suspend Whether to suspend (`true`) or resume (`false`) all workshop downloads.
 * @function_end
 */

/**
 * @function steam_ugc_unsubscribe_item
 * @description > **Steamworks Function**: [ISteamUGC::UnsubscribeItem](https://partner.steamgames.com/doc/api/ISteamUGC#UnsubscribeItem)
 *
 * This function unsubscribes from a workshop item. This will result in the item being removed after the game quits.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to unsubscribe from.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageUnsubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageUnsubscribePublishedFileResult_t)
 *
 * Called when the user has unsubscribed from a piece of UGC.
 *
 * @member {Struct.SteamUgcUnsubscribeItemResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_set_callback_user_subscribed_items_list_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the user has added or removed an item to/from their subscriptions for the returned app ID.
 * 
 * See: [ISteamUGC::UserSubscribedItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserSubscribedItemsListChanged_t)
 * 
 * See: ${struct.SteamUgcUserSubscribedItemsListChanged}
 *
 * @param {Function} callback The function to be called when the user's list of subscribed items changes.
 * @function_end
 */

/**
 * @function steam_ugc_clear_callback_user_subscribed_items_list_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_ugc_set_callback_user_subscribed_items_list_changed}.
 *
 * @function_end
 */

/**
 * @function steam_ugc_update_item_preview_file
 * @description > **Steamworks Function**: [ISteamUGC::UpdateItemPreviewFile](https://partner.steamgames.com/doc/api/ISteamUGC#UpdateItemPreviewFile)
 *
 * This function updates an existing additional preview file for the item.
 * 
 * If the preview type is an image then the format should be one that both the web and the application (if necessary) can render, and must be under 1MB. Suggested formats include JPG, PNG and GIF.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Real} index The (zero-based) index of the preview file to update.
 * @param {String} preview_file The absolute path to the local image file that will replace the existing preview.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_ugc_update_item_preview_video
 * @description > **Steamworks Function**: [ISteamUGC::UpdateItemPreviewVideo](https://partner.steamgames.com/doc/api/ISteamUGC#UpdateItemPreviewVideo)
 *
 * This function updates an additional video preview from YouTube for the item.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Real} index The (zero-based) index of the preview video to update.
 * @param {String} video_id The ID of the YouTube video that will replace the existing preview video.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_ugc_show_workshop_eula
 * @description > **Steamworks Function**: [ISteamUGC::ShowWorkshopEULA](https://partner.steamgames.com/doc/api/ISteamUGC#ShowWorkshopEULA)
 *
 * This function shows the app's latest Workshop EULA to the user in an overlay window, where they can accept it or not.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_ugc_get_workshop_eula_status
 * @description > **Steamworks Function**: [ISteamUGC::GetWorkshopEULAStatus](https://partner.steamgames.com/doc/api/ISteamUGC#GetWorkshopEULAStatus)
 *
 * This function asynchronously retrieves data about whether the user accepted the Workshop EULA for the current app.
 *
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUGC::WorkshopEULAStatus_t](https://partner.steamgames.com/doc/api/ISteamUGC#WorkshopEULAStatus_t)
 * 
 * Triggered upon completion of the request.
 * 
 * @member {Struct.SteamUgcWorkshopEULAStatusResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_get_num_supported_game_versions
 * @description > **Steamworks Function**: [ISteamUGC::GetNumSupportedGameVersions](https://partner.steamgames.com/doc/api/ISteamUGC#GetNumSupportedGameVersions)
 *
 * This function returns the number of supported game versions; items can have multiple versions, whose support can be valid for a range of Steam beta branches.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to query, as returned by ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 * @param {Real} index The (zero-based) index of the item within the query results to get the number of supported game versions for.
 * @returns {Real} 
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamUgcItemDownloadInfo
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_ugc_get_item_download_info}.
 * 
 * @member {Real} bytes_downloaded the current bytes downloaded.
 * @member {Real} bytes_total The total bytes. This is only valid after the download has started.
 * @struct_end
 */

/**
 * @struct SteamUgcItemInstallInfo
 * @description > **Steamworks Struct**: N / A
 *
 * This struct hold information returned by ${function.steam_ugc_get_item_install_info}.
 * 
 * @member {Real} size_on_disk The size of the workshop item in bytes.
 * @member {String} folder The absolute path to the folder containing the content by copying it.
 * @member {Real} timestamp The time when the workshop item was last updated.
 * @struct_end
 */

/**
 * @struct SteamUgcItemUpdateProgress
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of ${function.steam_ugc_get_item_update_progress}.
 *
 * @member {Enum.SteamUgcItemUpdateStatus} status The current status.
 * @member {Real} bytes_processed The current number of bytes uploaded.
 * @member {Real} bytes_total The total number of bytes that will be uploaded.
 * @struct_end
 */

/**
 * @struct SteamUgcQueryResult
 * @description > **Steamworks Struct**: [ISteamUGC::SteamUGCDetails_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCDetails_t)
 *
 * This struct holds the details of an individual workshop item after receiving a querying UGC call result.
 *
 * @member {Real} published_file_id The globally unique item handle to this piece of UGC.
 * @member {String} title The title of the item.
 * @member {String} description The description of the item.
 * @member {Real} time_created Time when the published item was created, provided in Unix epoch format (time since Jan 1st, 1970).
 * @member {Real} time_updated Time when the published item was last updated, provided in Unix epoch format (time since Jan 1st, 1970).
 * @member {Enum.SteamRemoteStoragePublishedFileVisibility} visibility The visibility of the item.
 * @member {Bool} banned Whether the item was banned.
 * @member {Bool} accepted_for_use Whether the developer of this app has specifically flagged this item as accepted in the Workshop. (See: [Curated Workshop](https://partner.steamgames.com/doc/features/workshop#curated_workshop))
 * @member {Bool} tags_truncated Whether the list of tags was too long to be returned in the provided buffer, and were therefore truncated.
 * @member {String} tags Comma separated list of all tags associated with this item.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Enum.SteamRemoteStorageWorkshopFileType} file_type The type of the item.
 * @member {Real} creator_app_id App Id of the app that created this item.
 * @member {Real} consumer_app_id App Id of the app that will consume this item.
 * @member {Real} owner_steam_id The Steam ID of the user who created this content.
 * @member {Real} time_added_to_user_list Time when the user added the published item to their list (not always applicable), provided in Unix epoch format (time since Jan 1st, 1970).
 * @member {Real} handle_file The handle of the primary file.
 * @member {Real} handle_preview_file The handle of the preview file.
 * @member {String} file_name The cloud filename of the primary file.
 * @member {Real} file_size The file size of the primary file.
 * @member {Real} preview_file_size The file size of the preview file.
 * @member {String} url The URL associated with this item. (For a video or a website.)
 * @member {Real} votes_up Number of votes up.
 * @member {Real} votes_down Number of votes down.
 * @member {Real} score The bayesian average for up votes / total votes, between [0,1].
 * @member {Real} num_children The number of items in the collection if `file_type` is `SteamRemoteStorageWorkshopFileType.Collection`, or the number of items this specific item has a dependency on (see ${function.steam_ugc_add_dependency}).
 * @member {Real} total_files_size The total file size of all files in the content package.
 * @struct_end
 */

/**
 * @struct SteamUgcAdditionalPreview
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_ugc_get_query_ugc_additional_preview}.
 * 
 * @member {String} url_or_video_id The URL or Video ID of the additional preview.
 * @member {Enum.SteamUgcItemPreviewType} preview_type The type of preview that was returned.
 * @struct_end
 */

/**
 * @struct SteamUgcKeyValueTag
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds a key-value tag returned by ${function.steam_ugc_get_query_ugc_key_value_tag}.
 * 
 * @member {String} key The key.
 * @member {String} value The value.
 * @struct_end
 */

/**
 * @struct SteamUgcItemInstalled
 * @description > **Steamworks Struct**: [ISteamUGC::ItemInstalled_t](partner.steamgames.com/doc/api/ISteamUGC#ItemInstalled_t)
 *
 * This struct holds information passed to a `ISteamUGC::ItemInstalled_t` callback, which is called when a workshop item has been installed or updated.
 * 
 * [[Note: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.]]
 *
 * @member {Real} app_id The app ID associated with the workshop item.
 * @member {Real} published_file_id The workshop item that has finished installing. This can be used with ${function.steam_ugc_get_item_install_info} to access the information about the item.
 * @struct_end
 */

/**
 * @struct SteamUgcUserSubscribedItemsListChanged
 * @description > **Steamworks Struct**: [ISteamUGC::UserSubscribedItemsListChanged_t](partner.steamgames.com/doc/api/ISteamUGC#UserSubscribedItemsListChanged_t)
 *
 * This struct holds information about when the user has added or removed an item to/from their subscriptions for the returned app ID.
 *
 * @member {Real} app_id The related app ID.
 * @struct_end
 */

/**
 * @struct SteamUgcQueryCompleted
 * @description > **Steamworks Struct**: [ISteamUGC::SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t)
 *
 * This struct holds info on a completed UGC query request.
 *
 * @member {Real} query_handle The handle of the query that completed.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} num_results_returned The number of results returned in this query.
 * @member {Real} total_matching_results The total number of items that matched the query in the database.
 * @member {Bool} cached_data Whether the returned data was retrieved from the local cache rather than from the server.
 * @struct_end
 */

/**
 * @struct SteamUgcCreateItemResult
 * @description > **Steamworks Struct**: [ISteamUGC::CreateItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#CreateItemResult_t)
 *
 * This struct holds info on the creation of a new workshop item.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The ID of the newly created workshop item.
 * @member {Bool} legal_agreement_required Does the user need to accept the Steam Workshop legal agreement (`true`) or not (`false`)? See the [Workshop Legal Agreement](https://partner.steamgames.com/doc/features/workshop/implementation#Legal) for more information.
 * @struct_end
 */

/**
 * @struct SteamUgcSubmitItemUpdateResult
 * @description > **Steamworks Struct**: [ISteamUGC::SubmitItemUpdateResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SubmitItemUpdateResult_t)
 *
 * This struct holds info returned when a workshop item update has been submitted and uploaded.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Bool} legal_agreement_required Whether the user needs to accept the Steam Workshop legal agreement.
 * @struct_end
 */

/**
 * @struct SteamUgcSubscribeItemResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageSubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageSubscribePublishedFileResult_t)
 *
 * This struct holds info on the user subscribing to a piece of UGC.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that the user subscribed to.
 * @struct_end
 */

/**
 * @struct SteamUgcUnsubscribeItemResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageUnsubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageUnsubscribePublishedFileResult_t)
 *
 * This struct holds info on the user subscribing from a piece of UGC.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that the user unsubscribed from.
 * @struct_end 
 */

/**
 * @struct SteamUgcFavoriteItemsListChanged
 * @description > **Steamworks Struct**: [ISteamUGC::UserFavoriteItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserFavoriteItemsListChanged_t)
 *
 * This struct holds information received in a `ISteamUGC::UserFavoriteItemsListChanged_t` callback.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The item which was added/removed.
 * @member {Bool} was_add_request Was it added (`true`) or removed (`false`) from the user's favorites?
 * @struct_end
 */

/**
 * @struct SteamUgcSetUserItemVoteResult
 * @description > **Steamworks Struct**: [ISteamUGC::SetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SetUserItemVoteResult_t)
 *
 * This struct holds info on a workshop item vote.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that was voted on.
 * @member {Bool} vote_up The vote that was set; `true` for an up vote, `false` for a down vote.
 * @struct_end
 */

/**
 * @struct SteamUgcGetUserItemVoteResult
 * @description > **Steamworks Struct**: [ISteamUGC::GetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#GetUserItemVoteResult_t)
 *
 * This struct holds info on the retrieval of a workshop item.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item the vote information is for.
 * @member {Bool} voted_up Whether the user has voted the item up.
 * @member {Bool} voted_down Whether the user has voted the item down.
 * @member {Bool} vote_skipped Whether the user has skipped voting on the item.
 * @struct_end
 */

/**
 * @struct SteamUgcSupportedGameVersionData
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_ugc_get_supported_game_version_data}.
 * 
 * @member {String} game_branch_min The minimum Steam (beta) branch this version of the item supports.
 * @member {String} game_branch_max The maximum Steam (beta) branch version this version of the item supports.
 * @struct_end 
 */

/**
 * @struct SteamUgcDeleteItemResult
 * @description > **Steamworks Struct**: [ISteamUGC::DeleteItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DeleteItemResult_t)
 *
 * This struct holds info on the deletion of a workshop item.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that was deleted.
 * @struct_end
 */

/**
 * @struct SteamUgcAddAppDependencyResult
 * @description > **Steamworks Struct**: [ISteamUGC::AddAppDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#AddAppDependencyResult_t)
 * 
 * This struct holds information about an app dependency result.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was added to.
 * @member {Real} app_id The app/dlc.
 * @struct_end
 */

/**
 * @struct SteamUgcRemoveAppDependencyResult
 * @description > **Steamworks Struct**: [ISteamUGC::AddAppDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#AddAppDependencyResult_t)
 * 
 * This struct holds information about the removal of an app dependency.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was removed from.
 * @member {Real} app_id The app/dlc.
 * @struct_end
 */

/**
 * @struct SteamUgcAddUGCDependencyResult
 * @description > **Steamworks Struct**: [ISteamUGC::AddUGCDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#AddUGCDependencyResult_t)
 * 
 * This struct holds information about the adding of a dependency.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was added to.
 * @member {Real} child_published_file_id The child workshop item which was added as a dependency to the parent item.
 * @struct_end
 */

/**
 * @struct SteamUgcRemoveUGCDependencyResult
 * @description > **Steamworks Struct**: [ISteamUGC::RemoveUGCDependencyResult_t](partner.steamgames.com/doc/api/ISteamUGC#RemoveUGCDependencyResult_t)
 * 
 * This struct holds information about the result of a dependency removal.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was removed from.
 * @member {Real} child_published_file_id The child workshop item which was removed as a dependency from the parent item.
 * @struct_end
 */

/**
 * @struct SteamUgcGetAppDependenciesResult
 * @description > **Steamworks Struct**: [ISteamUGC::GetAppDependenciesResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#GetAppDependenciesResult_t)
 * 
 * This struct holds the result of getting the app dependencies for an item.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item to get app dependencies for.
 * @member {Array[Real]} app_ids Array of app dependencies.
 * @member {Real} num_app_dependencies Number of app dependencies.
 * @member {Real} total_num_app_dependencies Total app dependencies found.
 * @struct_end 
 */

/**
 * @struct SteamUgcStartPlaytimeTrackingResult
 * @description > **Steamworks Struct**: [ISteamUGC::StartPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StartPlaytimeTrackingResult_t)
 * 
 * This struct holds the result when workshop item playtime tracking has started.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @struct_end 
 */

/**
 * @struct SteamUgcStopPlaytimeTrackingResult
 * @description > **Steamworks Struct**: [ISteamUGC::StopPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTrackingResult_t)
 * 
 * This struct holds the result when workshop item playtime tracking has stopped.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @struct_end 
 */

/**
 * @struct SteamUgcDownloadItemResult
 * @description > **Steamworks Struct**: [ISteamUGC::DownloadItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItemResult_t)
 *
 * This struct holds info on the download of a workshop item.
 *
 * @member {Real} app_id The app ID associated with this workshop item.
 * @member {Real} published_file_id The workshop item that has finished downloading.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @struct_end
 */

/**
 * @struct SteamUgcWorkshopEULAStatusResult
 * @description > **Steamworks Struct**: [ISteamUGC::WorkshopEULAStatus_t](https://partner.steamgames.com/doc/api/ISteamUGC#WorkshopEULAStatus_t)
 * 
 * This struct holds info returned in a workshop EULA status callback.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} app_id The related app ID.
 * @member {Real} version The version of the signed EULA, if applicable.
 * @member {Real} time_action Unix timestamp of when the user signed the EULA, if applicable.
 * @member {Bool} accepted `true` if the user accepted the given version, `false` otherwise. Note that this can be `true` if the user accepted an older version of the EULA.
 * @member {Bool} needs_action `true` if the user needs to accept the latest Workshop EULA, `false` otherwise.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamUgcMatchingUgcType
 * @description > **Steamworks Enum**: [ISteamUGC::EUGCMatchingUGCType](https://partner.steamgames.com/doc/api/ISteamUGC#EUGCMatchingUGCType)
 *
 * This enum specifies the types of UGC to obtain from a call to ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 *
 * @member Items Both Microtransaction items and Ready-to-use items.
 * @member Items_Mtx Microtransaction items. (See: [Curated Workshop](https://partner.steamgames.com/doc/features/workshop#curated_workshop))
 * @member Items_ReadyToUse Regular in game items that players have uploaded. (See: [Ready-To-Use Workshop](https://partner.steamgames.com/doc/features/workshop#ready-to-use_workshop))
 * @member Collections Shared collections of UGC.
 * @member Artwork Artwork which has been shared.
 * @member Videos Videos which have been shared.
 * @member Screenshots Screenshots which have been shared.
 * @member AllGuides Both web guides and integrated guides.
 * @member WebGuides Guides that are only available on the Steam Community.
 * @member IntegratedGuides Guides that you can use within your game. (Like Dota 2's in game character guides.)
 * @member UsableInGame Ready-to-use items and integrated guides.
 * @member ControllerBindings Controller Bindings which have been shared.
 * @member GameManagedItems Game managed items (Not managed by users.)
 * @member All Return everything.
 * @enum_end 
 */

/**
 * @enum SteamUgcQuery
 * @description > **Steamworks Enum**: [ISteamUGC::EUGCQuery](https://partner.steamgames.com/doc/api/ISteamUGC#EUGCQuery)
 *
 * This enum is used with ${function.steam_ugc_create_query_all_ugc_request} to specify the sorting and filtering for queries across all available UGC.
 *
 * @member RankedByVote Sort by vote popularity all-time.
 * @member RankedByPublicationDate Sort by publication date descending.
 * @member AcceptedForGameRankedByAcceptanceDate Sort by date accepted (for mtx items).
 * @member RankedByTrend Sort by vote popularity within the given "trend" period (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member FavoritedByFriendsRankedByPublicationDate Filter to items the user's friends have favorited, sorted by publication date descending.
 * @member CreatedByFriendsRankedByPublicationDate Filter to items created by friends, sorted by publication date descending.
 * @member RankedByNumTimesReported Sort by report weight descending.
 * @member CreatedByFollowedUsersRankedByPublicationDate Filter to items created by users that the current user has followed, sorted by publication date descending.
 * @member NotYetRated Filtered to the user's voting queue.
 * @member RankedByTotalVotesAsc Sort by total # of votes ascending (used internally for building the user's voting queue)
 * @member RankedByVotesUp Sort by number of votes up descending. Will use the "trend" period if specified (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByTextSearch Sort by keyword text search relevancy.
 * @member RankedByTotalUniqueSubscriptions Sort by lifetime total unique # of subscribers descending.
 * @member RankedByPlaytimeTrend Sort by total playtime in the "trend" period descending (set with ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByTotalPlaytime Sort by total lifetime playtime descending.
 * @member RankedByAveragePlaytimeTrend Sort by average playtime in the "trend" period descending (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByLifetimeAveragePlaytime Soft by lifetime average playtime descending.
 * @member RankedByPlaytimeSessionsTrend Sort by number of play sessions in the "trend" period descending (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByLifetimePlaytimeSessions Sort by number of lifetime play sessions descending.
 * @member RankedByLastUpdatedDate Sort by last updated time.
 * @enum_end 
 */

/**
 * @enum SteamUgcItemPreviewType
 * @description > **Steamworks Enum**: [ISteamUGC::EItemPreviewType](partner.steamgames.com/doc/api/ISteamUGC#EItemPreviewType)
 *
 * This enum holds the flags that specify the type of preview an item has. Set with ${function.steam_ugc_add_item_preview_file}, and received with ${function.steam_ugc_get_query_ugc_additional_preview}.
 *
 * @member Image Standard web viewable image file. Supported types: PNG, JPG, and GIF.
 * @member YouTubeVideo YouTube video ID. (e.g. "jHgZh4GV9G0")
 * @member Sketchfab Sketchfab model ID.
 * @member EnvironmentMap_HorizontalCross Standard image file containing a map of an environment in a horizontal cross layout. Supported types: PNG, JPG, and GIF.
 * @member EnvironmentMap_LatLong Standard image file containing a map of an environment in a LatLong layout. Supported types: PNG, JPG, and GIF. Not currently used in web views.
 * @member Clip Clip ID is stored.
 * @member ReservedMax Reserved. You can specify your own types above this value.
 * @enum_end
 */

/**
 * @enum SteamUgcContentDescriptorId
 * @description > **Steamworks Enum**: [ISteamUGC::EUGCContentDescriptorID](partner.steamgames.com/doc/api/ISteamUGC#EUGCContentDescriptorID)
 *
 * This enum holds the filters that define what user-generated content users want to see under the *Mature Content Filtering* section in their preferences.
 *
 * @member NudityOrSexualContent Some Nudity or Sexual Content: Contains content that has some nudity or sexual themes, but not as the primary focus.
 * @member FrequentViolenceOrGore Frequent Violence or Gore: Contains content that features extreme violence or gore.
 * @member AdultOnlySexualContent Adult Only Sexual Content: Contains content that is sexually explicit or graphic and is intended for adults only. Users must affirm that they are at least eighteen years old before they can view content with this content descriptor.
 * @member GratuitousSexualContent Frequent Nudity or Sexual Content: Contains content that primarily features nudity or sexual themes. Users must affirm that they are at least eighteen years old before they can view content with this content descriptor.
 * @member AnyMatureContent General Mature Content: Contains mature topics that may not be appropriate for all audiences.
 * @enum_end 
 */

/**
 * @enum SteamUgcItemState
 * @description > **Steamworks Enum**: [ISteamUGC::EItemState](https://partner.steamgames.com/doc/api/ISteamUGC#EItemState)
 * 
 * This enum specifies an item's state. These are flags that can be combined. Returned by ${function.steam_ugc_get_item_state}.
 * 
 * @member None The item is not tracked on client.
 * @member Subscribed The current user is subscribed to this item. Not just cached.
 * @member LegacyItem The item was created with the old workshop functions in ${module.remote_storage}.
 * @member Installed Item is installed and usable (but may be out of date).
 * @member NeedsUpdate The item needs an update. Either because it's not installed yet or creator updated the content.
 * @member Downloading The item update is currently downloading.
 * @member DownloadPending ${function.steam_ugc_download_item} was called for this item, the content isn't available until ${struct.SteamUgcDownloadItemResult} is fired.
 * @member DisabledLocally The item is disabled locally.
 * @enum_end
 */

/**
 * @enum SteamUgcItemUpdateStatus
 * @description > **Steamworks Enum**: [ISteamUGC::EItemUpdateStatus](https://partner.steamgames.com/doc/api/ISteamUGC#EItemUpdateStatus)
 * 
 * This enum specifies the status of a [`UGCUpdateHandle_t`](https://partner.steamgames.com/doc/api/ISteamUGC#UGCUpdateHandle_t) after a call to ${function.steam_ugc_get_item_update_progress}, returned by ${function.steam_ugc_get_item_update_progress}.
 * 
 * @member Invalid The item update handle was invalid, the job might be finished, a ${struct.SteamUgcSubmitItemUpdateResult} call result should have been returned for it.
 * @member PreparingConfig The item update is processing configuration data.
 * @member PreparingContent The item update is reading and processing content files.
 * @member UploadingContent The item update is uploading content changes to Steam.
 * @member UploadingPreviewFile The item update is uploading new preview file image.
 * @member CommittingChanges The item update is committing all changes.
 * @enum_end
 */

/**
 * @enum SteamUgcStatisticType
 * @description > **Steamworks Enum**: [ISteamUGC::EItemStatistic](https://partner.steamgames.com/doc/api/ISteamUGC#EItemStatistic)
 *
 * This enum is used to retrieve item statistics with ${function.steam_ugc_get_query_ugc_statistic}.
 *
 * @member NumSubscriptions Gets the number of subscriptions.
 * @member NumFavorites Gets the number of favorites.
 * @member NumFollowers Gets the number of followers.
 * @member NumUniqueSubscriptions Gets the number of unique subscriptions.
 * @member NumUniqueFavorites Gets the number of unique favorites.
 * @member NumUniqueFollowers Gets the number of unique followers.
 * @member NumUniqueWebsiteViews Gets the number of unique views the item has on its Steam Workshop page.
 * @member ReportScore Gets the number of times the item has been reported.
 * @member NumSecondsPlayed Gets the total number of seconds this item has been used across all players.
 * @member NumPlaytimeSessions Gets the total number of play sessions this item has been used in.
 * @member NumComments Gets the number of comments on the items that steam has on its Steam Workshop page.
 * @member NumSecondsPlayedDuringTimePeriod Gets the number of seconds this item has been used over the given time period.
 * @member NumPlaytimeSessionsDuringTimePeriod Gets the number of sessions this item has been used in over the given time period.
 * @enum_end 
 */

// MODULE

/**
 * @module ugc
 * @title UGC
 * @desc > **Steamworks Interface**: [ISteamUGC](https://partner.steamgames.com/doc/api/ISteamUGC)
 * 
 * This module contains functions to create, consume, and interact with the [Steam Workshop](https://partner.steamgames.com/doc/features/workshop).
 * 
 * @section_func Functions
 * @desc These are the functions of the UGC module:
 * @ref steam_ugc_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the UGC module:
 * @ref SteamUgc*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the UGC module:
 * @ref SteamUgc*
 * @section_end
 * @module_end
 */
