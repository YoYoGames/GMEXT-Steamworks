// FUNCTIONS

/**
 * @func steam_set_rich_presence
 * @desc This function sets a Rich Presence key/value for the current user that is automatically shared to all friends playing the same game.
 * 
 * @param {string} key The rich presence 'key' to set
 * @param {string} value The rich presence 'value' to associate
 * 
 * @example
 * ```gml
 * steam_set_rich_presence("game", "MyAwesomeGame");
 * steam_set_rich_presence("level", "Last");
 * steam_set_rich_presence("Mood", "Happy");
 * 
 * steam_clear_rich_presence();
 * ```
 * The code sample above uses sets a couple of values for the local user rich presence. After that, it clears these values (using a call to the ${function.steam_clear_rich_presence} function) so that they will no longer show.
 * @func_end
 */

/**
 * @func steam_clear_rich_presence
 * @desc Clears all of the current user's Rich Presence key/values.
 * 
 * @example
 * ```gml
 * steam_set_rich_presence("game", "MyAwesomeGame");
 * steam_set_rich_presence("level", "Last");
 * steam_set_rich_presence("Mood","Happy");
 * 
 * steam_clear_rich_presence();
 * ```
 * The code sample above uses ${function.steam_set_rich_presence} to set a couple values for the local user rich presence and after that clears this values meaning those will no longer show.
 * @func_end
 */

/**
 * @func steam_user_set_played_with
 * @desc This function adds the given user to the "recently played with" list (accessed via "Players" - "Recent games") menu in Steam overlay.
 * This is usually something to do on session start for all remote users.
 * 
 * @param {int64} user_id Other player user ID
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_user_set_played_with(anyFriendUserID);
 * ```
 * This code will add the specified user ID to the "recently played with" list, of the local user.
 * @func_end
 */

/**
 * @func steam_get_friends_game_info
 * @desc Returns an array of information about what the current user's Steam friends are playing.
 * Equivalent to what can be seen in Steam Friends UI.
 * 
 * @returns {array[struct.FriendsGameInfo]}
 * 
 * @example
 * ```gml
 * var _info_arr = steam_get_friends_game_info();
 * var _info_num = array_length(_info_arr);
 * var _steam_app_id = steam_get_app_id();
 * for (var i = 0; i < _info_num; i++)
 * {
 *     var _info = _info_arr[i];
 *     // same game!
 *     if (_info.gameId == _steam_app_id)
 *     {
 *         var _lobby_id = _info.lobbyId;
 *         // has an open lobby!
 *         if (_lobby_id != 0)
 *         {
 *             var _user_id = info.friendId;
 *             var _name = info.name;
 *             // Use steam_lobby_join_id(_lobby_id); to join the lobby when asked
 *         }
 *     }
 * }
 * ```
 * The above code will check all your friends to see if anyone of them is playing the same game as you (${function.steam_get_app_id}) and check if they have any open lobbies. If so, we can request to join the lobby they're in using ${function.steam_lobby_join_id}.
 * @func_end
 */

/**
 * @func steam_get_user_avatar
 * @desc This function fetches an avatar for the specified user ID. 
 * It returns `0` if no avatar is set for the user;
 *       it returns `-1` if the request is pending, in which case a ${event.steam} will be triggered.
 * Returns positive ID's if the avatar is ready, this ID is to be used with the following functions:
 * 
 * * ${function.steam_image_get_bgra}
 * * ${function.steam_image_get_rgba}
 * * ${function.steam_image_get_size}
 * 
 * @param {int64} userID The user Steam unique identifier
 * @param {constant.AvatarSize} avatar_size The size of the avatar to be requested
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"avatar_image_loaded"`
 * @member {boolean} success Whether the async action succeeded
 * @member {int64} user_id The associated user's ID
 * @member {real} image The image ID that would otherwise be returned by the function
 * @member {real} width The image width, in pixels
 * @member {real} height The image height, in pixels
 * @event_end
 * 
 * @example
 * ```gml
 * var _l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);
 * 
 * // Check if avatar is ready
 * if (_l_img > 0)
 * {
 *     var _l_dims = steam_image_get_size(_l_img);
 *     var _buff_size = _l_dims[0] * _l_dims[1] * 4;
 * 
 *     var _l_cols = buffer_create(_buff_size, buffer_fixed, 1);
 * 
 *     var _l_ok = steam_image_get_rgba(_l_img, _l_cols, _buff_size);
 * 
 *     if(!_l_ok)
 *     {
 *         buffer_delete(_l_cols);
 *         exit;
 *     }
 * 
 *     var _l_surf = surface_create(_l_dims[0], _l_dims[1]);
 *     buffer_set_surface(_l_cols, _l_surf, 0);
 * 
 *     l_sprite = sprite_create_from_surface(_l_surf, 0, 0, _l_dims[0], _l_dims[1], false, false, 0, 0);
 * 
 *     surface_free(_l_surf);
 *     buffer_delete(_l_cols);
 * }
 * ```
 * In the code above we query for the current user's ${function.steam_get_user_steam_id} avatar, this function will either return:
 * 
 * * the handle to the function (return value greater than zero): in this case we follow by getting size information (${function.steam_image_get_size}), creating a buffer and getting the avatar image RBGA data into the buffer (${function.steam_image_get_rgba}) and lastly creating a sprite from said buffer.
 * * no handle at all (return value equal to zero): in this case there is no avatar image for the specified user.
 * * a value of -1: in this last case it means that the request is pending and you can catch the output with a ${event.steam}, using the following code:
 * 
 * ```gml
 * // Early exit if event type doesn't match
 * if (async_load[?"event_type"] != "avatar_image_loaded") exit;
 * 
 * // Validate status
 * var _success = async_load[?"success"];
 * if (_success == 1) {
 * 
 *     // Do what you want with the provided image handle
 * }
 * else {
 *     // Failure
 *     show_debug_message("Failed to get user avatar");
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_image_get_size
 * @desc This function fetches the dimensions of the said Steam image ID.
 * If the call succeeds, the return value is a two-element array containing the width and height in pixels.
 * 
 * @param {int64} steam_image_id Steam identifier of the image
 * 
 * @returns {array}
 * 
 * @example
 * ```gml
 * var _l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);
 * var _l_dims = steam_image_get_size(_l_img);
 * var _buff_size = _l_dims[0] * _l_dims[1] * 4;
 * var _l_cols = buffer_create(_buff_size, buffer_fixed, 1);
 * var _l_ok = steam_image_get_rgba(_l_img, _l_cols, _buff_size);
 * if(!_l_ok)
 * {
 *     buffer_delete(_l_cols);
 *     exit;
 * }
 * var _l_surf = surface_create(_l_dims[0], _l_dims[1]);
 * buffer_set_surface(_l_cols, _l_surf, 0);
 * l_sprite = sprite_create_from_surface(_l_surf, 0, 0, _l_dims[0], _l_dims[1], false, false, 0, 0);
 * surface_free(_l_surf);
 * buffer_delete(_l_cols);
 * ```
 * The above code shows a code example.
 * @func_end
 */

/**
 * @func steam_image_get_rgba
 * @desc This function grabs the RGBA data of the specified Steam image ID into a GameMaker buffer.
 * Returns whether successful.
 * 
 * [[NOTE: The buffer should be appropriately sized in accordance with ${function.steam_image_get_size} (width * height * 4).]]
 * 
 * @param {int64} steam_image_id The Steam image identifier
 * @param {type.buffer} buffer The buffer where data will be written
 * @param {real} size The size of the buffer supplied
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);
 * 
 * // Check if avatar is ready
 * if (_l_img > 0)
 * {
 *     var _l_dims = steam_image_get_size(_l_img);
 *     var _buff_size = _l_dims[0] * _l_dims[1] * 4;
 * 
 *     var _l_cols = buffer_create(_buff_size, buffer_fixed, 1);
 * 
 *     var _l_ok = steam_image_get_rgba(_l_img, l_cols, buff_size);
 * 
 *     if(!_l_ok)
 *     {
 *         buffer_delete(_l_cols);
 *         exit;
 *     }
 * 
 *     var _l_surf = surface_create(_l_dims[0], _l_dims[1]);
 *     buffer_set_surface(_l_cols, _l_surf, 0);
 * 
 *     l_sprite = sprite_create_from_surface(_l_surf, 0, 0, _l_dims[0], _l_dims[1], false, false, 0, 0);
 * 
 *     surface_free(_l_surf);
 *     buffer_delete(_l_cols);
 * }
 * ```
 * In the code above we query the current user's ${function.steam_get_user_steam_id} avatar data and place it inside a buffer (with the RGBA color format).
 * For a more extensive example refer to the ${function.steam_get_user_avatar} function.
 * @func_end
 */

/**
 * @func steam_image_get_bgra
 * @desc This function grabs the BGRA data of the specified Steam image ID into a GameMaker buffer.
 * Returns whether successful.
 * 
 * [[NOTE: The buffer should be appropriately sized in accordance with ${function.steam_image_get_size} (width * height * 4).]]
 * 
 * @param {int64} steam_image_id The Steam image identifier
 * @param {type.buffer} buffer The buffer where data will be written
 * @param {real} size The size of the buffer supplied
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);
 * 
 * // Check if avatar is ready
 * if (_l_img > 0)
 * {
 *     var _l_dims = steam_image_get_size(_l_img);
 *     var _buff_size = _l_dims[0] * _l_dims[1] * 4;
 * 
 *     var _l_cols = buffer_create(_buff_size, buffer_fixed, 1);
 * 
 *     var _l_ok = steam_image_get_bgra(_l_img, _l_cols, _buff_size);
 * 
 *     if(!_l_ok)
 *     {
 *         buffer_delete(_l_cols);
 *         exit;
 *     }
 * 
 *     var _l_surf = surface_create(_l_dims[0], _l_dims[1]);
 *     buffer_set_surface(_l_cols, _l_surf, 0);
 * 
 *     l_sprite = sprite_create_from_surface(_l_surf, 0, 0, _l_dims[0], _l_dims[1], false, false, 0, 0);
 * 
 *     surface_free(_l_surf);
 *     buffer_delete(_l_cols);
 * }
 * ```
 * In the code above we query the current user's ${function.steam_get_user_steam_id} avatar data and place it inside a buffer (with the BGRA color format).
 * For a more extensive example refer to the ${function.steam_get_user_avatar} function.
 * @func_end
 */

/**
 * @struct FriendsGameInfo
 * @member {int64} friendId The Steam user ID
 * @member {real} gameId The Steam game ID
 * @member {int64} lobbyId The Steam lobby ID (if hosting a lobby that is open for friends to join - otherwise `0`)
 * @member {string} name The friend's user name
 * @struct_end
 */

// CONSTANTS

/**
 * @const AvatarSize
 * @member steam_user_avatar_size_small
 * @member steam_user_avatar_size_medium
 * @member steam_user_avatar_size_large
 * @const_end
 */

// MODULES

/**
 * @module social
 * @title Social
 * @desc The following set of functions are used for setting or getting social information.
 * 
 * @section_func Rich Presence
 * @desc The following functions are provided to work with rich presence:
 * @ref function.steam_set_rich_presence
 * @ref function.steam_clear_rich_presence
 * @section_end
 * 
 * @section_func User & Friends
 * @desc The following functions are provided to work with user and friends data:
 * 
 * @ref steam_user_set_played_with
 * @ref steam_get_friends_game_info
 * @ref steam_get_user_avatar
 * @ref steam_image_get_size
 * @ref steam_image_get_rgba
 * @ref steam_image_get_bgra
 * @section_end
 * 
 * @section_struct Structs
 * @ref FriendsGameInfo
 * @section_end
 * 
 * @section_const
 * @ref AvatarSize
 * @section_end
 * 
 * @module_end
 */
