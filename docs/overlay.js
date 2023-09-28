// FUNCTIONS

/**
 * @func steam_is_overlay_enabled
 * @desc When using the Steam API, this function can be called to check if the Steam client API has the overlay functionality enabled.
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
 *         global.steamapi = true;
 *     }
 * }
 * ```
 * The above code will set a global variable to `true` if the Steam client API is correctly initialised, along with the Steam statistics and overlay functionality, or it will set the variable to `false` otherwise.
 * @func_end
 */

/**
 * @func steam_is_overlay_activated
 * @desc This function can be used to find out if the user has the Steam Overlay active or not. If the overlay is active and visible to the user the function will return `true`, and if it is not, then it will return `false`. An example of what this function can be used for would be for polling the Steam API for the overlay so that you can pause your game while the overlay is being shown.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if steam_is_overlay_activated()
 * {
 *     global.Pause = true;
 * }
 * ```
 * The above code will check to see if the Steam overlay is active and if it is it will set the global variable "Pause" to `true`.
 * @func_end
 */

/**
 * @func steam_activate_overlay
 * @desc The Steam overlay is a piece of the Steam user interface that can be activated over the top of almost any game launched through Steam. It lets the user access their friends list, web browser, chat, and in-game DLC purchasing. The default key for a user to access the overlay while in a game is SHIFT + TAB, but you can also bring up any page of the overlay using this function. It takes one of the ${constant.OverlayType} constants.
 * 
 * @param {constant.OverlayType} overlay_type The page index of the Steam API UI to show
 * 
 * @example
 * ```gml
 * var _key = keyboard_lastkey;
 * switch (_key)
 * {
 *     case vk_f1: steam_activate_overlay(ov_friends); break;
 *     case vk_f2: steam_activate_overlay(ov_community); break;
 *     case vk_f3: steam_activate_overlay(ov_players); break;
 *     case vk_f4: steam_activate_overlay(ov_settings); break;
 *     case vk_f5: steam_activate_overlay(ov_gamegroup); break;
 *     case vk_f6: steam_activate_overlay(ov_achievements); break;
 * }
 * ```
 * The above code polls the last keyboard key pressed. If it is any of the function keys from 1 to 6 it will open the corresponding page of the Steam overlay.
 * @func_end
 */

/**
 * @func steam_activate_overlay_browser
 * @desc With this function you can open the Steam game overlay to its web browser and then have it load the specified URL. You need to use the full URL as a string for this to resolve correctly, for example: `"http://www.steamgames.com/"`.
 * 
 * @param {string} url The (full) URL for the overlay to open.
 * 
 * @example
 * ```gml
 * if keyboard_check_pressed(vk_f1)
 * {
 *     steam_activate_overlay_browser("http://www.steamgames.com/");
 * }
 * ```
 * The above code polls the keyboard for the F1 key. If it was pressed then Steam overlay will be opened and resolve to the given URL.
 * @func_end
 */

/**
 * @func steam_activate_overlay_store
 * @desc With this function you can open the Steam overlay on the store page for a game so that users can buy or download DLC (for example). You need to supply the unique App ID for the game or DLC which you would get from the Steam dashboard when you set it up.
 * 
 * @param {real} app_id The unique App ID for your game.
 * 
 * @example
 * ```gml
 * if keyboard_check_pressed(vk_f1)
 * {
 *     steam_activate_overlay_store(global.DLC_id);
 * }
 * ```
 * The above code polls the keyboard for the F1 key and if it is then Steam overlay will be opened on the page for the game content using the app ID stored in the global variable.
 * @func_end
 */

/**
 * @func steam_activate_overlay_user
 * @desc This function will open the Steam overlay to one of the chosen dialogues relating to the user ID given.
 * Note that Steam IDs can be large numbers and so you may need to cast your ID value as an ${type.int64} before supplying it to the function.
 * 
 * |Dialog Names|Description|
 * |----|----|
 * |`"steamid"`|Opens the Steam Community web browser to the page of the user or group|
 * |`"chat"`|Opens a chat window to the specified user|
 * 
 * @param {string} dialog_name The dialogue to open the overlay on (see below).
 * @param {int64} steamid The Steam user ID or group ID to use.
 * 
 * @example
 * ```gml
 * var _key = keyboard_lastkey;
 * switch (_key)
 * {
 *     case vk_f1: steam_activate_overlay_user("steamid", global.GameGroupID); break;
 *     case vk_f2: steam_activate_overlay_user("chat", global.FriendID); break;
 * }
 * ```
 * The above code polls the last keyboard key pressed. If it is function key 1 or function key 2, it will open the Steam overlay to either see the Steam group stored in the global variable "GamegroupID", or it will open the chat window to chat with the user stored in the global "FriendID" variable.
 * @func_end
 */

/**
 * @func steam_set_overlay_notification_inset
 * @desc This function sets the inset of the overlay notification from the corner specified by ${function.steam_set_overlay_notification_position}.
 * 
 * @param {real} hor_inset The horizontal (left-right) distance in pixels from the corner.
 * @param {real} vert_inset The vertical (up-down) distance in pixels from the corner.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_set_overlay_notification_inset(10, 10);
 * ```
 * The code above will inset the overlay 10px on the horizontal axis and 10px on the vertical axis.
 * @func_end
 */

/**
 * @func steam_set_overlay_notification_position
 * @desc This function changes the corner in which the overlay notifications will appear.
 * 
 * @param {constant.OverlayNotificationPosition} position A constant that indicates the position where the notification overlay should render
 * 
 * @example
 * ```gml
 * steam_set_overlay_notification_position(steam_overlay_notification_position_bottom_right);
 * ```
 * The above code will change the notification position to the bottom right corner.
 * @func_end
 */

/**
 * @const OverlayType
 * @desc These constants specify the type of overlay to be activated.
 * @member ov_friends The friends page for the current user
 * @member ov_community The community page for your game
 * @member ov_players The page showing others that are playing the same game or that you have recently played with
 * @member ov_settings The Steam client overlay settings
 * @member ov_gamegroup Opens the Steam Community web browser to the official game group for this game
 * @member ov_achievements The achievements page for your game
 * @const_end
 */

/**
 * @const OverlayNotificationPosition
 * @desc These constants specify the position of the notification overlay onscreen.
 * @member steam_overlay_notification_position_top_left Point to the top left position
 * @member steam_overlay_notification_position_top_right Point to the top right position
 * @member steam_overlay_notification_position_bottom_left Point to the bottom left position
 * @member steam_overlay_notification_position_bottom_right Point to the bottom right position
 * @const_end
 */

// MODULES

/**
 * @module overlay
 * @title Overlay
 * @desc The Steam Overlay is the visual display that can be brought up to display the Steam interface to the user. This is normally done by the user themselves using a combination of keys, but you also have the possibility of doing it from within your game, so that you can map a button or an event to show the overlay.
 * 
 * @section_func Functions
 * @desc The extension provides you with the following functions:
 * @ref steam_is_overlay_enabled
 * @ref steam_is_overlay_activated
 * @ref steam_activate_overlay
 * @ref steam_activate_overlay_browser
 * @ref steam_activate_overlay_store
 * @ref steam_activate_overlay_user
 * @ref steam_set_overlay_notification_inset
 * @ref steam_set_overlay_notification_position
 * @section_end
 * 
 * @section_const Constants
 * @desc This section also provides the following constants to use with the functions:
 * @ref OverlayType
 * @ref OverlayNotificationPosition
 * @section_end
 * @module_end
 */
