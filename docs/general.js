// FUNCTIONS

/**
 * @func steam_initialised
 * @desc When using the Steam API, this function can be called to check that the Steam client API has been initialised correctly before doing any further calls to Steam-specific functions in your game.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * global.steam_api = false;
 * if (steam_initialised())
 * {
 *     if (steam_stats_ready() && steam_is_overlay_enabled())
 *     {
 *         global.steam_api = true;
 *     }
 * }
 * ```
 * The above code will set a global variable to `true` if the Steam client API is correctly initialised, along with the Steam statistics and overlay functionality, or it will set the variable to `false` otherwise.
 * @func_end
*/

/**
 * @func steam_stats_ready
 * @desc When using the Steam API, this function can be called to check that the Steam client API has correctly initialised the statistics for your game.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * global.steam_api = false;
 * if steam_initialised()
 * {
 *     if steam_stats_ready() && steam_is_overlay_enabled()
 *     {
 *         global.steam_api = true;
 *     }
 * }
 * ```
 * The above code will set a global variable to `true` if the Steam client API is correctly initialised, along with the Steam statistics and overlay functionality, or it will set the variable to `false` otherwise.
 * @func_end
*/

/**
 * @func steam_get_app_id
 * @desc This function is used retrieve the unique app ID that Steam assigns to your game, which is required for using some of the ${module.ugc} functions.
 * 
 * @returns {Real}
 * 
 * @example
 * ```gml
 * global.app_id = steam_get_app_id();
 * ```
 * The above code gets the unique app ID for your game on Steam and stores it in a global variable.
 * @func_end
*/

/**
 * @func steam_get_user_account_id
 * @desc This function is used to retrieve the unique User ID that Steam assigns to each user, which is required for using some of the ${module.ugc} functions.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * global.user_id = steam_get_user_account_id();
 * ```
 * The above code gets the unique user ID for the person who owns the game and stores it in a global variable.
 * @func_end
*/

/**
 * @func steam_get_user_steam_id
 * @desc You can use this function to return the unique Steam user ID of the user currently logged into the Steam client. If you need to get the user's on screen user name you should refer to the function ${function.steam_get_persona_name}.
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * if steam_initialised()
 * {
 *     global.u_id = steam_get_user_steam_id();
 * }
 * ```
 * The above code will set a global variable to the current users unique Steam ID if the Steam client API is correctly initialised.
 * @func_end
*/

/**
 * @func steam_get_persona_name
 * @desc You can use this function to return the user name of the user currently logged into the Steam client. This is the visible screen name and **not** the unique user ID (this can be found using the function ${function.steam_get_user_steam_id}).
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * if steam_initialised()
 * {
 *     global.p_name = steam_get_persona_name();
 * }
 * ```
 * The above code will set a global variable to current users screen name if the Steam client API is correctly initialised.
 * @func_end
*/

/**
 * @func steam_get_user_persona_name
 * @desc This function can be used to retrieve the user name (screen name) for any specific user ID. 
 * This is an asynchronous function that will return an asynchronous ID and trigger the ${event.steam} when the task is finished.
 * 
 * @param {int64} steamID The unique Steam ID for a user.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {real} id The asynchronous request ID
 * @member {string} event_type The string value `"user_persona_name"`
 * @member {int64} steamid The unique user ID of the user currently logged into the Steam client
 * @member {string} persona_name The visible screen name of the user currently logged into the Steam client
 * @event_end
 * 
 * @example
 * ```gml
 * request = steam_get_user_persona_name(global.UGC_UserID);
 * ```
 * The above code will request the user name of the user ID stored in the global variable "UGC_UserID", storing the returned value in a variable for parsing in the ${event.steam}.
 * @func_end
 */

/**
 * @func steam_get_user_persona_name_sync
 * @desc This function gets the specified user's persona (display) name.
 * 
 * This will only be known to the current user if the other user is in their friends list, on the same game server, in a chat room or lobby, or in a small Steam group with the local user.
 * 
 * @param {int64} steamID The unique Steam ID for a user.
 * 
 * @returns {string}
 * 
 * @example 
 * @func_end
 */

/**
 * @func steam_is_user_logged_on
 * @desc This function will return `true` if the Steam client currently has a live connection to the Steam servers. If it returns `false`, it means there is no active connection due to either a networking issue on the local machine, or the Steam server being down or busy.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (steam_is_user_logged_on())
 * {
 *     global.user_id = steam_get_user_account_id();
 * }
 * ```
 * The above code will check to see if the user is logged onto the Steam server and if it stores the user ID in a global variable.
 * @func_end
*/

/**
 * @func steam_user_get_auth_ticket_for_web_api
 * @desc Retrieve an authentication ticket to be sent to the entity that wishes to authenticate you using the ISteamUserAuth/AuthenticateUserTicket Web API. It is best practice to use an identity string for each service that will consume tickets.
 * 
 * @param {string} [identity] OPTIONAL: The identity of the remote service that will authenticate the ticket. The service should provide a string identifier.
 * 
 * @returns {real}
 * @event steam
 * @member {string} event_type The string value `"ticket_for_web_api_response"`
 * @member {real} result The Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code
 * @member {boolean} success Whether `result` is equal to the value `k_EResultOK`
 * @member {real} auth_ticket_handle The handle of the auth ticket, can be passed to `steam_user_cancel_auth_ticket`
 * @member {buffer} auth_ticket_buffer Auth ticket buffer id on success or -1 on failure
 * @event_end
 *
 * @example
 * ```gml
 * /// @desc Create
 * web_ticket_handle = steam_user_get_auth_ticket_for_web_api("myservice"); // if value is 0 then this failed
 * /// @desc Async - Steam
 * if (async_load[? "event_type"] == "ticket_for_web_api_response" &&
 *     async_load[? "auth_ticket_handle"] == web_ticket_handle) {
 *     if (async_load[? "success"]) {
 *         var buffer = async_load[? "auth_ticket_buffer"];
 *         // convert bytes in buffer into a lowercase hex string and send over HTTP
 *         // then do steam_user_cancel_auth_ticket(web_ticket_handle); after you're done with your HTTP request flow
 *     }
 * }
 * ```
 * The above code will request a ticket to be used with the Web API and obtain the buffer with the ticket bytes.
 * If you ever need to convert the byte buffer into a hexadecimal string you can do so by using a conversion function like the one below:
 * 
 * ```gml
 * function convert_byte_buffer_to_hex_string(_buffer, _offset = 0, _length = (buffer_get_size(_buffer) - _offset)) {
 * 
 *     static _nibble_to_hexa = [ ord("0"), ord("1"), ord("2"), ord("3"), ord("4"), ord("5"), ord("6"), ord("7"), 
 * 	                              ord("8"), ord("9"), ord("A"), ord("B"), ord("C"), ord("D"), ord("E"), ord("F") ];
 * 	
 * 	   // Store the tell of the input buffer so we can reset it at the end
 *     var _tell = buffer_tell(_buffer);
 * 	    
 * 	   // Seek to the offset where we want to start the conversion
 *     buffer_seek(_buffer, buffer_seek_start, _offset);
 * 	    
 * 	   // Create an output buffer that will be 2 times + 1 (terminate character)
 * 	   var _temp_buffer = buffer_create(_length * 2, buffer_fixed, 1);
 * 	   repeat (_length) {
 * 	       // Read the byte
 * 	       var _byte = buffer_read(_buffer, buffer_u8);
 * 	       // Split the byte into 2 nibbles (higher and lower)
 * 	       var _high = (_byte & $F0) >> 4;
 *         var _low = _byte & $0F;
 * 	       // Use the convertion table to get the currect character
 * 	       buffer_write(_temp_buffer, buffer_u8, _nibble_to_hexa[_high]);
 * 	       buffer_write(_temp_buffer, buffer_u8, _nibble_to_hexa[_low]);
 * 	   }
 * 	   // Write the end string character '\0'
 * 	   buffer_write(_temp_buffer, buffer_u8, 0);
 * 	    
 * 	   // Seek the original buffer to the original place
 * 	   buffer_seek(_buffer, buffer_seek_start, _tell);
 * 	    
 * 	   // Read the converted string and delete the temp buffer
 * 	   var _hexa_string = buffer_peek(_temp_buffer, 0, buffer_string);
 * 	   buffer_delete(_temp_buffer);
 * 	
 *     return _hexa_string;
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_user_get_auth_session_ticket
 * @desc Retrieve an authentication ticket to be sent to the entity who wishes to authenticate you. After calling this you can send the ticket to the entity where they can then call BeginAuthSession/ISteamGameServer::BeginAuthSession to verify this entity's integrity.
 * 
 * [[NOTE: This API can not be used to create a ticket for use by the ISteamUserAuth/AuthenticateUserTicket Web API. Use the steam_user_get_auth_ticket_for_web_api call instead]]
 * 
 * @returns {real}
 * @event steam
 * @member {string} event_type The string value `"ticket_response"`
 * @member {real} result The Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code
 * @member {boolean} success Whether `result` is equal to the value `k_EResultOK`
 * @member {real} auth_ticket_handle The handle of the auth ticket, can be passed to `steam_user_cancel_auth_ticket`
 * @event_end
 *
 * @example
 * ```gml
 * /// @desc Create
 * srv_ticket_buffer = steam_user_get_auth_session_ticket();
 * srv_ticket_handle = 0; // 0 means invalid handle
 * /// @desc Async - Steam
 * if (async_load[? "event_type"] == "ticket_response") {
 *     if (async_load[? "success"]) {
 *         srv_ticket_handle = async_load[? "auth_ticket_handle"];
 *         // do your usual game server authentication flow with the ticket buffer & handle
 *         // then do steam_user_cancel_auth_ticket(srv_ticket_handle); after you're done
 *     }
 * }
 * ```
 * The above code will request a ticket to be used with the Game Server Authentication and obtain the handle to the ticket.
 * @func_end
 */

/**
 * @func steam_user_cancel_auth_ticket
 * @desc This function cancels an authentication ticket created by steam_user_get_auth_session_ticket or steam_user_get_auth_ticket_for_web_api
 * 
 * @param {real} [ticket_handle] OPTIONAL The ticket handle to cancel
 * 
 * @func_end
 */

/**
 * @func steam_current_game_language
 * @desc This function retrieves the current language that Steam is using (as a string), for example "english".
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * language = steam_current_game_language();
 * ```
 * The above code gets the language used for the current game.
 * @func_end
*/

/**
 * @func steam_available_languages
 * @desc This function can be used to retrieve a list of all available languages for Steam. The returned value is simply a comma-separated list of languages.
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * languages = steam_available_languages();
 * ```
 * The above gets the available languages for Steam as a string and stores it in a variable.
 * @func_end
*/

/**
 * @func steam_is_subscribed
 * @desc This function checks if the active user is subscribed to the current App ID.
 * 
 * [[NOTE: This will always return `true` if you're using Steam DRM.]]
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (steam_is_subscribed())
 * {
 *     show_debug_message("is_subscribed");
 * }
 * ```
 * The above code will check to see if the user is subscribed and shows a debug message if that is the case.
 * @func_end
 */

/**
 * @func steam_set_warning_message_hook
 * @desc This function sets a warning message hook to receive Steam API warnings and info messages in the console.
 * 
 * @example
 * ```gml
 * steam_set_warning_message_hook();
 * ```
 * The above code start Steamworks logging messages in console.
 * @func_end
 */

// MODULES

/**
 * @module general
 * @title General
 * @desc The following set of functions are all for checking the availability of certain aspects of the Steam client or server API. This means that these functions should be used before any other Steam API function call to ensure that the client/server setup is correct and communicating with your game:
 * @section_func
 * @ref steam_initialised
 * @ref steam_stats_ready
 * @ref steam_get_app_id
 * @ref steam_get_user_account_id
 * @ref steam_get_user_steam_id
 * @ref steam_get_persona_name
 * @ref steam_get_user_persona_name
 * @ref steam_get_user_persona_name_sync
 * @ref steam_is_user_logged_on
 * @ref steam_user_get_auth_ticket_for_web_api
 * @ref steam_user_get_auth_session_ticket
 * @ref steam_user_cancel_auth_ticket
 * @ref steam_current_game_language
 * @ref steam_available_languages
 * @ref steam_is_subscribed
 * @ref steam_set_warning_message_hook
 * @section_end
 * @module_end
 */
