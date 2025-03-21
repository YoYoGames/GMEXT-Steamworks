// FUNCTIONS

/**
 * @func steam_lobby_activate_invite_overlay
 * @desc This function displays an invitation overlay if currently in a lobby.
 * The invitation overlay is much akin to the friends-list overlay, but only shows online friends, and shows an "invite" button on each row.
 * 
 * @returns {boolean}
 * 
 * @event steam (when an invitation is accepted)
 * @member {string} event_type The string value `"lobby_join_requested"`
 * @member {int64} lobby_id The lobby unique identifier
 * @member {boolean} success Whether or not the task was successful
 * @member {real} result The code of the result
 * @event_end
 * 
 * @example
 * ```gml
 * steam_lobby_activate_invite_overlay();
 * ```
 * The above code will show the Steam invite overlay.
 * @func_end
 */
 
/**
 * @func steam_lobby_create
 * @desc This function starts creating a lobby. Returns whether or not the task was successfully created.
 * 
 * @param {constant.LobbyType} type A constant that indicates the status of the lobby
 * @param {real} max_members Indicates the maximum allowed number of users in the lobby (including the lobby's creator)
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type The string value `"lobby_created"`
 * @member {int64} lobby_id The name of the lobby
 * @member {real} success Whether or not the request was successful
 * @member {boolean} result The status code (descriptions can be found in Steam API documentation)
 * @event_end
 * 
 * @event steam
 * @desc This event is triggered when someone enters or leaves a lobby.
 * @member {string} event_type The string value `"lobby_chat_update"`
 * @member {int64} lobby_id The ID of the lobby
 * @member {real} change_flags 1 for new connection on lobby, 2 for disconnect, 4 if the user disconnected without leaving the lobby first, 8 if the user has been kicked, 16 if the user has been kicked and banned.
 * @member {int64} user_id the Steam ID of the user that joined or left the lobby
 * @member {int64} change_id the ID that has "changed", the same as user_id
 * @event_end
 * 
 * @example
 * ```gml
 * steam_lobby_create(steam_lobby_type_public, 4);
 * ```
 * The above code will create a lobby with a maximum of 4 users. We now add the following into the ${event.steam} for checking the success of task:
 * 
 * @example
 * ```gml
 * var _type = async_load[? "type"];
 * if (_type == "lobby_created")
 * {
 *     if (async_load[? "success"])
 *         show_debug_message("Lobby created");
 *     else
 *         show_debug_message("Failed to create lobby");
 * }
 * ```
 * in the example we are simply outputting the success of the lobby creation task.
 * @func_end
 */

/**
 * @func steam_lobby_get_chat_message_data
 * @desc This function returns the data of a message sent using ${function.steam_lobby_send_chat_message_buffer}. It returns whether or not the buffer was successfully filled with the message data.
 * 
 * @param {real} message_index The message unique identifier
 * @param {type.buffer} buffer The buffer to write the data to
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * chat_message_buf = buffer_create(steam_lobby_max_chat_message_size, buffer_fixed, 1);
 * steam_lobby_get_chat_message_data(_msg_index, chat_message_buf);
 * ```
 * The code above will get the current message data and place it into a buffer (resizing if required and allowed, i.e.: **buffer_grow**).
 * @func_end
 */

/**
 * @func steam_lobby_get_chat_message_size
 * @desc This function returns the size of a message.
 * 
 * @param {real} message_index The argument to be passed in
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * ///@desc Async Steam Event
 * switch (async[? "event_type"])
 * {
 *     case "lobby_chat_message":
 *         size = steam_lobby_get_chat_message_size(async_load[?"message_index"]);
 *         break;
 * }
 * ```
 * The code above will get the current message size in bytes.
 * @func_end
 */

/**
 * @func steam_lobby_get_chat_message_text
 * @desc This function returns the text of a message.
 * 
 * @param {real} index Message index
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * ///@desc Async Steam Event
 * switch (async[? "event_type"])
 * {
 *     case "lobby_chat_message":
 *         text = steam_lobby_get_chat_message_text(async_load[?"message_index"]);
 *         break;
 * }
 * ```
 * The code above will get the current message text.
 * @func_end
 */

/**
 * @func steam_lobby_get_data
 * @desc This function returns a lobby field value, as set by ${function.steam_lobby_set_data}.
 * 
 * @param {string} key String representation of the data
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * var _title = steam_lobby_get_data("title");
 * ```
 * The code above will return the data of the `title` field of the current value.
 * @func_end
 */

/**
 * @func steam_lobby_get_lobby_id
 * @desc This function returns the Steam ID of the current lobby.
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * var _lobby_id = steam_lobby_get_lobby_id();
 * ```
 * The code above will get the current lobby ID and store it in a variable.
 * @func_end
 */

/**
 * @func steam_lobby_get_member_count
 * @desc This function returns the number of users in the current lobby (including you).
 * If the lobby is not valid, it returns 0.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * for(var i = 0 ; i < steam_lobby_get_member_count() ; i++)
 * {
 *     var _user_id = steam_lobby_get_member_id(i);
 *     //Do something with the user ID
 * }
 * ```
 * The code sample above will get the total number of member in the current lobby and iterate over all of them getting their unique ID's, using the ${function.steam_lobby_get_member_id} function.
 * @func_end
 */

/**
 * @func steam_lobby_get_member_id
 * @desc This function returns the user ID of the member at the given index in the current lobby.
 * 
 * @param {real} index Position of the member of the lobby to return
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * for(var i = 0 ; i < steam_lobby_get_member_count() ; i++)
 * {
 *     var _user_id = steam_lobby_get_member_id(i);
 *     //Do something with the user id
 * }
 * ```
 * The code sample above will iterate over all of the members inside a lobby and get their unique ID's.
 * @func_end
 */

/**
 * @func steam_lobby_get_owner_id
 * @desc This function returns the lobby owner's Steam ID. If the lobby is not valid, returns ID 0.
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * var _lobby_owner = steam_lobby_get_owner_id();
 * ```
 * The code above will return the unique ID of the owner of the current lobby.
 * @func_end
 */

/**
 * @func steam_lobby_is_owner
 * @desc This function returns whether the local player is the lobby's owner.
 * 
 * [[NOTE: If the lobby is not valid, this function returns `false`.]]
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * for (var i = 0; i < steam_lobby_get_member_count(); i++)
 * {
 *     if (!steam_lobby_is_owner())
 *     {
 *         var _user_id = steam_lobby_get_member_id(i);
 *         steam_lobby_set_owner_id(_user_id);
 *         break;
 *     }
 * }
 * ```
 * The code example will loop through all the members in a lobby and transfer ownership to the first member that is not the owner.
 * @func_end
 */

/**
 * @func steam_lobby_join_id
 * @desc This function starts joining the lobby with the given ID. Returns whether or not the API was correctly initialised.
 * 
 * [[Note: The lobby ID value returned by Steam in the ${event.steam} may be different from the one you passed to the function. This is because Steam stores this info in a type `CSteamID`, which internally is an int64 that not only contains the lobby ID but also other fields in the remaining bits. Of these fields, Steam might change the `Instance` field, leading to a different value being returned. The lobby ID part will be unchanged, however.
 * You should always make sure to use this modified lobby ID value returned by Steam in subsequent function calls.]]
 * 
 * @param {int64} lobby_id Identifier of the lobby
 * 
 * @event steam
 * @member {string} event_type The string value `"lobby_joined"`
 * @member {int64} lobby_id The lobby unique identifier
 * @member {boolean} success Whether or not the task was successful
 * @member {real} result The code of the result
 * @event_end
 * 
 * @event steam
 * @desc This event is triggered when someone enters or leaves a lobby.
 * @member {string} event_type The string value `"lobby_chat_update"`
 * @member {int64} lobby_id The ID of the lobby
 * @member {real} change_flags 1 for new connection on lobby, 2 for disconnect, 4 if the user disconnected without leaving the lobby first, 8 if the user has been kicked, 16 if the user has been kicked and banned.
 * @member {int64} user_id the Steam ID of the user that joined or left the lobby
 * @member {int64} change_id the ID that has "changed", the same as user_id
 * @event_end
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_join_id(lobbyID);
 * ```
 * The code will attempt the join a lobby with a given ID, the task callback can be listened to inside the the ${event.steam} with the folllowing sample code:
 * ```gml
 * var _type = async_load[? "type"];
 * if (_type == "lobby_joined")
 * {
 *     var _lobby_id = async_load[? "lobby_id"];
 *     var _success = async_load[? "success"];
 * 
 *     // Do something with the data
 * }
 * ```
 * In the example we are simply caching the data into variables.
 * @func_end
 */

/**
 * @func steam_lobby_leave
 * @desc This function leaves the current lobby (if any). It does not raise any errors if currently not in a lobby.
 * 
 * [[NOTE: If you are the lobby owner and leave the lobby, Steam transfers the lobby ownership to any other available user, so you may need to manually handle ownership transfer using ${function.steam_lobby_set_owner_id} before leaving.]]
 * 
 * @event steam
 * @desc This event is triggered when someone enters or leaves a lobby.
 * @member {string} event_type The string value `"lobby_chat_update"`
 * @member {int64} lobby_id The ID of the lobby
 * @member {real} change_flags 1 for new connection on lobby, 2 for disconnect, 4 if the user disconnected without leaving the lobby first, 8 if the user has been kicked, 16 if the user has been kicked and banned.
 * @member {int64} user_id the Steam ID of the user that joined or left the lobby
 * @member {int64} change_id the ID that has "changed", the same as user_id
 * @event_end
 * 
 * @example
 * ```gml
 * steam_lobby_leave();
 * ```
 * The code sample above will make the user leave the current lobby.
 * @func_end
 */

/**
 * @func steam_lobby_send_chat_message
 * @desc This function broadcasts a chat text message to all the users in the lobby.
 * 
 * @param {string} text The string to be sent (up to 4000 characters)
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type The string value `"lobby_chat_message"`
 * @member {string} user_id The sender unique identifier
 * @member {real} message_index The message unique identifier
 * @event_end
 * 
 * @example
 * ```gml
 * steam_lobby_send_chat_message("Hello World");
 * ```
 * The code will broadcast a text message to all the members in the current lobby, the message can be read using the ${event.steam} callback:
 * 
 * ```gml
 * var _type = async_load[? "type"];
 * if (_type == "lobby_chat_message")
 * {
 *     var _user_id = async_load[? "user_id"];
 *     var _msg_id = async_load[? "message_index"];
 * 
 *     var _user_name = steam_get_user_persona_name_sync(_user_id);
 *     var _message = steam_lobby_get_chat_message_text(_msg_id);
 * 
 *     // Do something with the data
 * }
 * ```
 * In the example we are simply caching the data into variables. Notice that use use the functions ${function.steam_get_user_persona_name_sync} and ${function.steam_lobby_get_chat_message_text} to get both the user name and the text inside the message, respectively.
 * @func_end
 */

/**
 * @func steam_lobby_send_chat_message_buffer
 * @desc This function broadcasts a chat (text or binary data) message to all the users in the lobby.
 * 
 * @param {type.buffer} buffer The buffer to be sent (up to 4 Kilobytes in size)
 * @param {real} size The number of bytes to be sent (there is no offset).
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type The string value `"lobby_chat_message"`
 * @member {string} user_id The sender unique identifier
 * @member {real} entry_type The type of message received.
 * @member {real} message_index The message unique identifier
 * @member {real} message_size The size of the message being broadcasted
 * @event_end
 * 
 * @example
 * ```gml
 * var _buff = buffer_create(256, buffer_fixed, 1);
 * buffer_write(_buff, buffer_string, "This is a buffer!");
 * steam_lobby_send_chat_message_buffer(_buff);
 * ```
 * The code will broadcast a message (text or binary data) to all the members in the current lobby, the message can be read using the ${event.steam} callback:
 * 
 * ```gml
 * var _type = async_load[? "type"];
 * if (_type == "lobby_chat_message")
 * {
 *     var _user_id = async_load[? "user_id"];
 *     var _msg_id = async_load[? "message_index"];
 * 
 *     var _user_name = steam_get_user_persona_name_sync(_user_id);
 *     var _data = steam_lobby_get_chat_message_data(global.chat_buffer, _msg_id);
 * 
 *     // Do something with the data
 * }
 * ```
 * In the example we are simply caching the data into variables notice that use use the functions ${function.steam_get_user_persona_name_sync} and ${function.steam_lobby_get_chat_message_data} to get both the user name and the data inside the message, respectively.
 * @func_end
 */

/**
 * @func steam_lobby_set_data
 * @desc This function changes a lobby's field. You must be the lobby owner to do this. The function returns whether or not the data was set.
 * Fields can then be used to filter lobbies via matchmaking functions.
 * 
 * [[NOTE: If your value is numeric, convert it to string prior to passing it to the function.]]
 * 
 * @param {string} key The key to set the data for
 * @param {string} value The value to set
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_set_data("LobbyName", "GreatLobby");
 * ```
 * The code sample will set the `"LobbyName"` lobby field to the provided value `"GreatLobby"`.
 * @func_end
 */

/**
 * @func steam_lobby_set_joinable
 * @desc This function sets whether or not a lobby is joinable by other players. This always defaults to enabled for a new lobby. Returns whether or not the property was set.
 * 
 * [[NOTE: If joining is disabled, then no players can join, even if they are a friend or have been invited.]]
 * 
 * [[NOTE: Lobbies with joining disabled will not be returned from a lobby search.]]
 * 
 * @param {boolean} joinable Allow ( **true** ) or prevent ( **false** ) users from joining this lobby
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_set_joinable(false);
 * ```
 * The code above will prevent user from joining the current lobby.
 * @func_end
 */

/**
 * @func steam_lobby_set_owner_id
 * @desc If you are a lobby owner, this function transfers the lobby ownership to the specified player, which must be in this same lobby. Returns whether or not the property was set.
 * 
 * [[NOTE: You need to be the lobby owner in order to use the function.]]
 * 
 * @param {boolean} user_id The user to set as owner of the lobby
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * for(var i = 0 ; i < steam_lobby_get_member_count() ; i++)
 * {
 *     if(!steam_lobby_is_owner())
 *     {
 *         var _user_id = steam_lobby_get_member_id(i);
 *         steam_lobby_set_owner_id(_user_id);
 *         break;
 *     }
 * }
 * ```
 * The code example will loop through all the members in a lobby and transfers ownership to the first member that is not the owner.
 * @func_end
 */

/**
 * @func steam_lobby_set_type
 * @desc This function changes the lobby's type. Useful, if you don't allow mid-session joining, you could have the game make lobbies private on session start (or use ${function.steam_lobby_set_joinable}).
 * 
 * [[NOTE: You need to be the lobby owner in order to use the function.]]
 * 
 * @param {constant.LobbyType} type The lobby visibility
 * 
 * @example
 * ```gml
 * steam_lobby_set_type(steam_lobby_type_private);
 * ```
 * The code above will change the lobby joining policy.
 * @func_end
 */

/**
 * @func steam_lobby_list_add_distance_filter
 * @desc This function restricts results by region and sorts them based on geographical proximity.
 * 
 * @param {constant.LobbyFilterDistanceMode} mode The distance filter to be applied
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
 * steam_lobby_list_add_near_filter("myNearFilter", 77);
 * steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
 * steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq);
 * steam_lobby_list_request();
 * ```
 * The code above will apply some filters to be lobby list request before requesting the results.
 * @func_end
 */

/**
 * @func steam_lobby_list_add_near_filter
 * @desc This function sorts the results based on how close their field's key's value is to the provided one.
 * 
 * [[NOTE: If multiple near-filters are specified, the earlier set ones take precedence.]]
 * 
 * @param {string} key The filter key name to match.
 * @param {real} value The value that lobbies will be sorted on.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
 * steam_lobby_list_add_near_filter("myNearFilter", 77);
 * steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
 * steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq);
 * steam_lobby_list_request();
 * ```
 * The code above will apply some filters to be lobby list request before requesting the results.
 * @func_end
 */

/**
 * @func steam_lobby_list_add_numerical_filter
 * @desc This function sets up a numeric filter for the next lobby list request. That is, lobbies not matching the condition will be excluded from results.
 * 
 * [[NOTE: Lobbies without the given field (key) will be excluded.]]
 * 
 * @param {string} key The filter key name to match
 * @param {real} value The number to compare.
 * @param {constant.LobbyFilterComparisonType} comparison_type The type of comparison to make.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
 * steam_lobby_list_add_near_filter("myNearFilter", 77);
 * steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
 * steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq);
 * steam_lobby_list_request();
 * ```
 * The code above will apply some filters to a lobby list request before requesting the results.
 * @func_end
 */

/**
 * @func steam_lobby_list_add_string_filter
 * @desc This function sets up a string filter for the next lobby list request. That is, lobbies not matching the condition will be excluded from results.
 * 
 * [[NOTE: Lobbies without the given field (`key`) will be assumed to have it as `""`.]]
 * 
 * @param {string} key The filter key name to match
 * @param {string} value The string to compare
 * @param {constant.LobbyFilterComparisonType} comparison_type The type of comparison to make (strings only accept equal or not equal comparison)
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
 * steam_lobby_list_add_near_filter("myNearFilter", 77);
 * steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
 * steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq);
 * steam_lobby_list_request();
 * ```
 * The code above will apply some filters to be lobby list request before requesting the results.
 * @func_end
 */

/**
 * @func steam_lobby_list_get_count
 * @desc This function returns the count of lobbies, after a successful call to ${function.steam_lobby_list_request}.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * for(var a = 0 ; a < steam_lobby_list_get_count() ; a++)
 * {
 *     ins = instance_create_depth(600, 200+90*a, 0, Obj_Steam_Networking_List_Slot);
 *     ins.index = a;
 *     ins.lobby_id = steam_lobby_list_get_lobby_id(a);
 *     ins.creator = steam_lobby_list_get_data(a, "Creator");
 * }
 * ```
 * After a successful ${function.steam_lobby_list_request} this function will return the number of results in the lobby query.
 * @func_end
 */

/**
 * @func steam_lobby_list_get_data
 * @desc This function gets the metadata associated with the specified key from the specified lobby.
 * 
 * [[NOTE: The argument `lobby_index` is not a lobby ID but instead the position of the lobby (from 0 to ${function.steam_lobby_list_get_count}) on the query array after a ${function.steam_lobby_list_request} async event is triggered.]]
 * 
 * @param {real} lobby_index The lobby list index from the queried result.
 * @param {string} key The key to get the value of.
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * for(var a = 0 ; a < steam_lobby_list_get_count() ; a++)
 * {
 *     ins = instance_create_depth(600,200+90*a,0,Obj_Steam_Networking_List_Slot);
 *     ins.index = a;
 *     ins.lobby_id = steam_lobby_list_get_lobby_id(a);
 *     ins.creator = steam_lobby_list_get_data(a, "Creator");
 * }
 * ```
 * The above code shows a code example.
 * @func_end
 */

/**
 * @func steam_lobby_list_get_lobby_id
 * @desc This function gets the lobby ID associated with the index.
 * 
 * [[NOTE: The argument `lobby_index` is not a lobby ID but instead the position of the lobby (from 0 to ${function.steam_lobby_list_get_count}) on the query array after a ${function.steam_lobby_list_request} async event is triggered.]]
 * 
 * @param {real} lobby_index The lobby index in the current lobby list
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * for(var a = 0; a < steam_lobby_list_get_count(); a++)
 * {
 *     ins = instance_create_depth(600, 200+90*a, 0, Obj_Steam_Networking_List_Slot);
 *     ins.index = a;
 *     ins.lobby_id = steam_lobby_list_get_lobby_id(a);
 *     ins.creator = steam_lobby_list_get_data(a, "Creator");
 * }
 * ```
 * The above code shows a code example.
 * @func_end
 */

/**
 * @func steam_lobby_list_get_lobby_member_count
 * @desc This function gets the number of users in a lobby.
 * 
 * [[NOTE: The argument `lobby_index` is not a lobby ID but instead the position of the lobby (from 0 to ${function.steam_lobby_list_get_count}) on the query array after a ${function.steam_lobby_list_request} async event is triggered.]]
 * 
 * @param {real} lobby_index The lobby ID of the lobby to get the number of members of.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * steam_lobby_list_get_lobby_member_count(steam_lobby_get_lobby_id());
 * ```
 * The above code shows a code example.
 * @func_end
 */

/**
 * @func steam_lobby_list_get_lobby_member_id
 * @desc This function gets the Steam ID of the lobby member at the given index.
 * 
 * [[NOTE: The argument `lobby_index` is not a lobby ID but instead the index representation of the lobby (ranging from 0 to ${function.steam_lobby_list_get_count}) on the query array after a ${function.steam_lobby_list_request} async event is triggered. By the same logic the `member_index` is also not the user ID but the indexed representation of the user within the lobby (this value ranges from 0 to ${function.steam_lobby_list_get_lobby_member_count}).]]
 * 
 * @param {real} lobby_index This MUST be an index ranging from 0 to ${function.steam_lobby_list_get_count}
 * @param {real} member_index This MUST be an index ranging from 0 to ${function.steam_lobby_list_get_lobby_member_count} of the lobby index
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * var _count = steam_lobby_list_get_lobby_member_count(steam_lobby_get_lobby_id());
 * for(var i = 0 ; i < _count ; i++)
 * {
 *      var _member = steam_lobby_list_get_lobby_member_id(i);
 *      //do something with the member id
 * }
 * ```
 * The above code will show a code example.
 * @func_end
 */

/**
 * @func steam_lobby_list_get_lobby_owner_id
 * @desc This function returns the current lobby owner.
 * 
 * [[NOTE: The argument `lobby_index` is not a lobby ID but instead the position of the lobby (from 0 to ${function.steam_lobby_list_get_count}) on the query array after a ${function.steam_lobby_list_request} async event is triggered.]]
 * 
 * @param {real} index The lobby index from the lobby list request result
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * steam_lobby_list_get_lobby_owner_id(steam_lobby_get_lobby_id());
 * ```
 * The above code will show a code example.
 * @func_end
 */

/**
 * @func steam_lobby_list_is_loading
 * @desc This function returns whether a lobby list request is currently underway.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_lobby_list_request();
 * 
 * // Later in code
 * 
 * if (steam_lobby_list_is_loading)
 *     show_message("Loading");
 * 
 * ```
 * The above will code will check to see if the lobby list request is still loading or has finished.
 * @func_end
 */

/**
 * @func steam_lobby_list_join
 * @desc Starts joining a lobby with the given ID.
 * 
 * @param {real} index Position of the lobby in the list
 * 
 * @event steam
 * @member {string} event_type The string value `"lobby_joined"`
 * @member {int64} lobby_id The lobby unique identifier
 * @member {boolean} success Whether or not the task was successful
 * @member {real} result The code of the result
 * @event_end
 * 
 * @example
 * ```gml
 * steam_lobby_list_join(0);
 * ```
 * The code sample above can be used to join a lobby with the given index after a ${function.steam_lobby_list_request} has been performed.
 * @func_end
 */

/**
 * @func steam_lobby_list_request
 * @desc This function starts loading the list of lobbies matching the current filters.
 * 
 * [[NOTE: Filters are reset afterwards and have to be set again for subsequent request(s).]]
 * 
 * [[NOTE: Existing results are kept up until the event is dispatched.]]
 * 
 * @event steam
 * @member {string} event_type The string value `"lobby_list"`
 * @member {int64} lobby_count The number of lobbies in retrieved (same as ${function.steam_lobby_list_get_count})
 * @member {boolean} success Whether or not the task was successful
 * @member {real} result The code of the result
 * @event_end
 * 
 * @example
 * ```gml
 * steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
 * steam_lobby_list_add_near_filter("myNearFilter", 77);
 * steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
 * steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq);
 * steam_lobby_list_request();
 * ```
 * In this extended example we will request the lobby list that matches the requested filter criteria and parse its results in the ${event.steam}. To start with we need to request the lobbies with the code above. And afterwards proceed to catch the results **after/during** the corresponding asynchronous event:
 * 
 * ```gml
 * var _type = ds_map_find_value(async_load, "event_type");
 * if (_type == "lobby_list")
 * {
 *     var _lb_count = steam_lobby_list_get_count();
 *     for (var i = 0; i < _lb_count; i++)
 *     {
 *         var _lb_ID = steam_lobby_list_get_lobby_id(i);
 *         var _lb_owner = steam_lobby_list_get_lobby_owner_id(i);
 *         var _lb_members_count = steam_lobby_list_get_lobby_member_count(i);
 *         for (var j = 0; j < _lb_members_count; j++)
 *         {
 *             var _lb_member_ID = steam_lobby_list_get_lobby_member_id(i, j);
 *             // Do what even you need with the queried information
 *         }
 *     }
 * }
 * ```
 * This code will loop through all the loobies and respective members on the query result.
 * @func_end
 */

/**
 * @const LobbyFilterComparisonType
 * @desc These constants specify the comparison type when applying a filter to a lobby list request.
 * @member steam_lobby_list_filter_eq Equal (==).
 * @member steam_lobby_list_filter_ne Not-equal (!=)
 * @member steam_lobby_list_filter_lt Less-than (<), only applies to ${function.steam_lobby_list_add_numerical_filter}
 * @member steam_lobby_list_filter_gt Greater-than (>), only applies to ${function.steam_lobby_list_add_numerical_filter}
 * @member steam_lobby_list_filter_le Less-than-or-equal (<=), only applies to ${function.steam_lobby_list_add_numerical_filter}
 * @member steam_lobby_list_filter_ge Greater-than-or-equal (>=), only applies to ${function.steam_lobby_list_add_numerical_filter}
 * @const_end
 */

/**
 * @const LobbyFilterDistanceMode
 * @desc These constants specify the distance mode to be used when applying a filter to a lobby list request.
 * @member steam_lobby_list_distance_filter_close Only allows lobbies in same immediate region
 * @member steam_lobby_list_distance_filter_default Allows lobbies in same or nearby regions (same continent)
 * @member steam_lobby_list_distance_filter_far Allows lobbies from up to half-way around the globe (nearby continents)
 * @member steam_lobby_list_distance_filter_worldwide Allows any lobbies. May result in very high latencies, so use with care
 * @const_end
 */

/**
 * @const LobbyType
 * @desc These constants specify the type of lobby should be used creating a new lobby.
 * @member steam_lobby_type_private The lobby can only be joined by invitation
 * @member steam_lobby_type_friends_only The lobby can be joined by invitation or via friends-list (by opening the user's menu and picking "Join game")
 * @member steam_lobby_type_public The lobby can be joined by invitation, via friends-list and shows up in the public list (see matchmaking functions)
 * @const_end
 */

// MODULES

/**
 * @module lobbies
 * @title Lobbies and Matchmaking
 * @desc The following functions and constants allow you to use Steam's Lobbies and Matchmaking functionality.
 * 
 * @section_func Current Lobby
 * @desc These functions are provided for handling the current lobby:
 * @ref steam_lobby_activate_invite_overlay
 * @ref steam_lobby_create
 * @ref steam_lobby_get_data
 * @ref steam_lobby_get_lobby_id
 * @ref steam_lobby_get_member_count
 * @ref steam_lobby_get_member_id
 * @ref steam_lobby_get_owner_id
 * @ref steam_lobby_is_owner
 * @ref steam_lobby_join_id
 * @ref steam_lobby_leave
 * @ref steam_lobby_set_data
 * @ref steam_lobby_set_joinable
 * @ref steam_lobby_set_owner_id
 * @ref steam_lobby_set_type
 * @ref steam_lobby_send_chat_message-copy
 * @ref steam_lobby_get_chat_message_size
 * @ref steam_lobby_get_chat_message_text
 * @ref steam_lobby_get_chat_message_data
 * @ref steam_lobby_send_chat_message
 * @ref steam_lobby_send_chat_message_buffer
 * @section_end
 * 
 * @section_func Matchmaking
 * @desc The following functions allow retrieving and handling lists of public lobbies:
 * @ref steam_lobby_list_add_distance_filter
 * @ref steam_lobby_list_add_near_filter
 * @ref steam_lobby_list_add_numerical_filter
 * @ref steam_lobby_list_add_string_filter
 * @ref steam_lobby_list_request
 * @ref steam_lobby_list_get_count
 * @ref steam_lobby_list_get_data
 * @ref steam_lobby_list_get_lobby_id
 * @ref steam_lobby_list_get_lobby_member_count
 * @ref steam_lobby_list_get_lobby_member_id
 * @ref steam_lobby_list_get_lobby_owner_id
 * @ref steam_lobby_list_is_loading
 * @ref steam_lobby_list_join
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants used by this API:
 * @ref LobbyFilterComparisonType
 * @ref LobbyFilterDistanceMode
 * @ref LobbyType
 * @section_end
 * 
 * @module_end
 */
