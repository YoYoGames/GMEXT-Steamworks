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
 * @desc This function is used retrieve the unique app ID that Steam assigns for your game, which is required for using some of the User Generated Content functions.
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
 * @desc This function is used to retrieve the unique User ID that Steam assigns to each user, which is required for using some of the ${module.UGC} functions.
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
 * @desc This function sets a warning message hook to receive SteamAPI warnings and info messages in the console.
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
 * @ref steam_is_user_logged_on
 * @ref steam_current_game_language
 * @ref steam_available_languages
 * @ref steam_is_subscribed
 * @ref steam_set_warning_message_hook
 * @section_end
 * @module_end
 */
