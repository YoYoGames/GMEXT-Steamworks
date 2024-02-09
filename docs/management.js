// FUNCTIONS

/**
 * @func steam_init
 * @desc This function initialises the Steam APIs.
 * 
 * [[NOTE: This function is already configured to be called at Game Start by the extension, and should not be called from your game code.]]
 * 
 * @example
 * ```gml
 * steam_init();
 * ```
 * The above code initialises the Steam API.
 * @func_end
 */

/**
 * @func steam_update
 * @desc This function updates the Steam APIs.
 * 
 * [[WARNING: This function is required to be called in order for the Steamworks extension to work. Certain async events are only triggered when you call this function. We recommend you place this function in a persistent controller object that calls it inside its ${event.step}.]]
 * 
 * @event steam
 * @desc This event is triggered when Steam Deck has resumed from suspend.
 * @member {string} event_type The string value `"app_resuming_from_suspend"`
 * @event_end
 * 
 * @event steam
 * @desc This event is triggered when a local file changes. You can use the functions ${function.steam_get_local_file_change_count} and ${function.steam_get_local_file_change} to get the actual change data.
 * @member {string} event_type The string value `"remote_storage_local_file_change"`
 * @event_end
 * 
 * @example
 * ```gml
 * steam_update();
 * ```
 * The above code will update the Steam APIs.
 * @func_end
 */

/**
 * @func steam_shutdown
 * @desc This function shuts down the Steamworks API, releases pointers and frees memory.
 * 
 * [[WARNING: This function is required to be called in order for the Steamworks extension to work. We recommend you place this function in the ${event.game_end} of a controller object. You need to check if this is not a ${function.game_restart}.]]
 * 
 * @event steam
 * @desc This event is triggered when the Steam client is about to shutdown, usually you have a few seconds to finish things.
 * @member {string} event_type The string value `"steam_shutdown"`
 * @event_end
 * 
 * @example
 * ```gml
 * global.is_game_restarting = true;
 * game_restart();
 * ```
 * The code above should be used when you want to restart your game. We set the `is_game_restarting` global variable to `true` announcing the game being restarted to true (this global variable should already be declared at the begining of your game and be set to `false` by default).
 * Now inside our ${event.game_end} we can use the following code: 
 * 
 * ```gml
 * if (global.is_game_restarting == false) {
 *     steam_shutdown();
 * }
 * global.is_game_restarting = false;
 * ```
 * First we check if the game is not restarting and in that case we know we are actually ending so we call the `steam_shutdown` method.
 * @func_end
 */

// MODULES

/**
 * @module management
 * @title Management
 * @desc These are functions to manage the Steamworks API.
 * @section_func Functions
 * @ref steam_init
 * @ref steam_update
 * @ref steam_shutdown
 * @section_end
 * @module_end
 */
 