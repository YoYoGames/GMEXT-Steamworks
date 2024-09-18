// FUNCTIONS

/**
 * @func steam_show_floating_gamepad_text_input
 * @desc With this function you can show a floating gamepad keyboard window, all input is emulated as if it is a physical keyboard, so ${var.keyboard_string} or ${function.keyboard_check} can be used to obtain the input. This function only works in Big Picture or on the Steam Deck. Returns `true` if the keyboard has been shown successfully, `false` otherwise.
 * 
 * [[WARNING: You must call ${function.steam_utils_enable_callbacks} prior to calling this function if you wish to receive `Async - Steam` gamepad keyboard events.]]
 * 
 * @param {real} mode A `steam_floating_gamepad_text_input_mode_` constant.
 * @param {real} text_field_x X position of the keyboard window in display coordinates.
 * @param {real} text_field_y Y position of the keyboard window in display coordinates.
 * @param {real} text_field_width Width of the keyboard window in display coordinates.
 * @param {real} text_field_height Height of the keyboard window in display coordinates.
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type A constant string `"floating_gamepad_text_input_dismissed"`.
 * @event_end
 * 
 * @example
 * ```gml
 * steam_utils_enable_callbacks(); // do this somewhere once.
 * // show the dialog:
 * steam_show_floating_gamepad_text_input(
 * 	steam_floating_gamepad_text_input_mode_single_line,
 * 	// in Display coordinates: use window_get_ or display_get_ functions to obtain the dimensions
 * 	window_get_x(),
 * 	window_get_y()/2,
 * 	window_get_width(),
 * 	window_get_height()/2
 * );
 * ```
 * 
 * ```gml
 * /// @description Async - Steam event
 * if (async_load[? "event_type"] == "floating_gamepad_text_input_dismissed") {
 *     show_debug_message("Floating gamepad keyboard UI dialog dismissed.");
 * }
 * ```
 * The above code shows a floating keyboard window in the bottom half of the window, then print a message to debug output when the dialog is dismissed.
 * @func_end
 */

/**
 * @func steam_dismiss_floating_gamepad_text_input
 * @desc With this function you can dismiss a floating keyboard window if it is being currently shown. Returns `true` if the operation was successful, `false` otherwise.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_dismiss_floating_gamepad_text_input();
 * ```
 * The above code will dismiss the floating keyboard window if it is being displayed.
 * @func_end
 */

/**
 * @func steam_show_gamepad_text_input
 * @desc With this function you can show a full-screen old-style Big Picture Mode-only keyboard UI. This one does not emulate the physical keyboard so you must use the ${function.steam_get_entered_gamepad_text_input} function inside a corresponding `Async - Steam` event to obtain the input. Returns `true` if the window is being shown successfully, `false` otherwise.
 * 
 * [[WARNING: You must call ${function.steam_utils_enable_callbacks} prior to calling this function if you wish to receive `Async - Steam` gamepad keyboard events.]]
 * 
 * @param {real} mode A `steam_gamepad_text_input_mode_` constant.
 * @param {real} lines_mode A `steam_gamepad_text_input_line_mode_` constant.
 * @param {string} description The description of the window.
 * @param {real} chars_max The maximum nupber of characters the player can enter.
 * @param {string} existing_text Some existing text to put into the text field or an empty string.
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type A string `"gamepad_text_input_dismissed"`.
 * @member {boolean} submitted `true` if the dialog was submitted successfully and `false` if it was cancelled.
 * @member {real} submitted_text_raw_byte_length Raw length of the text in bytes.
 * @event_end
 * 
 * @example
 * ```gml
 * steam_utils_enable_callbacks(); // somewhere once.
 * // show the dialog:
 * steam_show_gamepad_text_input(
 * 	steam_gamepad_text_input_mode_normal,
 * 	steam_gamepad_text_input_line_mode_single_line,
 * 	"Some Description",
 * 	100, // up to 100 string characters
 * 	"" // no default text, can be any string, ex: "Player 1" etc
 * );
 * ```
 * 
 * ```gml
 * /// @description Async - Steam event
 * if (async_load[? "event_type"] == "gamepad_text_input_dismissed") {
 *     if (async_load[? "submitted"]) {
 * 		var _input = steam_get_entered_gamepad_text_input();
 * 		show_debug_message("Old-style dialog result: " + _input);
 * 	}
 * }
 * ```
 * The above code will show a modal gamepad keyboard input dialog with `"Some Description"` as the description and an empty text field, then print the typed text.
 * @func_end
 */

/**
 * @func steam_get_entered_gamepad_text_input
 * @desc With this function you can obtain the result of the ${function.steam_show_gamepad_text_input} input dialog. This function must only be called in the corresponding `Async - Steam` event.
 * 
 * [[WARNING: You must call ${function.steam_utils_enable_callbacks} prior to calling this function if you wish to receive `Async - Steam` gamepad keyboard events.]]
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * /// @description Async - Steam event
 * if (async_load[? "event_type"] == "gamepad_text_input_dismissed") {
 *     if (async_load[? "submitted"]) {
 * 		var _input = steam_get_entered_gamepad_text_input();
 * 		show_debug_message("Old-style dialog result: " + _input);
 * 	}
 * }
 * ```
 * The above code will activate the use of gamepad keyboard UI async events.
 * @func_end
 */

/**
 * @func steam_utils_enable_callbacks
 * @desc With this function you can activate the dispatch of `Async - Steam` events for gamepad keyboard UI. Returns `true` if the operation was successful and `false` otherwise.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * steam_utils_enable_callbacks();
 * ```
 * The above code will activate the use of gamepad keyboard UI async events.
 * @func_end
 */

/**
 * @func steam_utils_is_steam_running_on_steam_deck
 * @desc With this function you can check if your game is currently running on a Steam Deck, returns `true` if yes and `false` otherwise.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (steam_utils_is_steam_running_on_steam_deck()) {
 *     show_debug_message("The game is running on a Steam Deck.");
 * }
 * ```
 * The above code will print a message to debug output if the game is running on the Steam Deck.
 * @func_end
 */

/**
 * @func steam_utils_is_steam_in_big_picture_mode
 * @desc This function returns if Steam is running in [Big Picture mode](https://help.steampowered.com/en/faqs/view/3725-76D3-3F31-FB63).
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (steam_utils_is_steam_in_big_picture_mode()) {
 *     show_debug_message("The game is running in Big Picture mode");
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_utils_set_game_launcher_mode
 * @desc This function can be used to set your game to "launcher mode" if your launcher is written with GameMaker.
 * 
 * @param {boolean} launcher_mode Whether to set the game to 'launcher mode'
 * 
 * @example
 * ```gml
 * steam_utils_set_game_launcher_mode(true);
 * show_debug_message("Game set to launcher mode");
 * ```
 * @func_end
 */
 
/**
 * @func steam_utils_get_server_real_time
 * @desc This function returns the Steam server time in Unix epoch format. (Number of seconds since Jan 1, 1970 UTC)
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * show_debug_message("Current server time is " + string(steam_utils_get_server_real_time()));
 * ```
 * @func_end
 */

/**
 * @func steam_utils_get_steam_ui_language
 * @desc This function returns the Steam language string for the language the Steam Client is running in.
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * show_debug_message("Current Steam UI language is " + steam_utils_get_steam_ui_language());
 * // "english", "russian", "japanese", etc...
 * ```
 * This example prints the current Steam client UI language into the Debug Output
 * @func_end
 */

// MODULES

/**
 * @module utilities
 * @title Utilities
 * @desc The Steam utility functions provide access to gamepad keyboard UI and Steam Deck getters.
 * 
 * @section_func Functions
 * The following functions can be used to access Steam Utilities from within GameMaker: 
 * 
 * @ref steam_show_floating_gamepad_text_input
 * @ref steam_dismiss_floating_gamepad_text_input
 * @ref steam_show_gamepad_text_input
 * @ref steam_get_entered_gamepad_text_input
 * @ref steam_utils_enable_callbacks
 * @ref steam_utils_is_steam_running_on_steam_deck
 * @ref steam_utils_is_steam_in_big_picture_mode
 * @ref steam_utils_set_game_launcher_mode
 * @ref steam_utils_get_server_real_time
 * @ref steam_utils_get_steam_ui_language
 * 
 * @section_end
 * 
 * @module_end
 */
