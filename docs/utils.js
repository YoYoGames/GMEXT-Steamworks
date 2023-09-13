@func Utilities
The Steam utility functions provide access to gamepad keyboard UI and Steam Deck getters.

The following functions can be used to access Steam Utilities from within GameMaker Studio 2

* [steam_show_floating_gamepad_text_input](#steam_show_floating_gamepad_text_input)
* [steam_dismiss_floating_gamepad_text_input](#steam_dismiss_floating_gamepad_text_input)
* [steam_show_gamepad_text_input](#steam_show_gamepad_text_input)
* [steam_get_entered_gamepad_text_input](#steam_get_entered_gamepad_text_input)
* [steam_utils_enable_callbacks](#steam_utils_enable_callbacks)
* [steam_utils_is_steam_running_on_steam_deck](#steam_utils_is_steam_running_on_steam_deck)



@func_end

@func steam_show_floating_gamepad_text_input
With this function you can show a floating gamepad keyboard window, all input is emulated as if it is a physical keyboard, so `keyboard_string` or `keyboard_check` can be used to obtain the input. This function only works in Big Picture or on the Steam Deck. Returns `true` if the keyboard has been shown successfully, `false` otherwise.

> **:warning: IMPORTANT**
>
> You must call [steam_utils_enable_callbacks](#steam_utils_enable_callbacks) prior to calling this function if you wish to receive `Async - Steam` gamepad keyboard events.


**Syntax:**

```gml
steam_show_floating_gamepad_text_input(mode, text_field_x, text_field_y, text_field_width, text_field_height);
```

|mode|real|A `steam_floating_gamepad_text_input_mode_` constant.|
|text_field_x|real|X position of the keyboard window in display coordinates.|
|text_field_y|real|Y position of the keyboard window in display coordinates.|
|text_field_width|real|Width of the keyboard window in display coordinates.|
|text_field_height|real|Height of the keyboard window in display coordinates.|


@returns {Bool}

@event steam
|----|----|----|
|event_type|string|A constant string `"floating_gamepad_text_input_dismissed"`.|


@example
```gml
steam_utils_enable_callbacks(); // do this somewhere once.
// show the dialog:
steam_show_floating_gamepad_text_input(
	steam_floating_gamepad_text_input_mode_single_line,
	// in Display coordinates: use window_get_ or display_get_ functions to obtain the dimensions
	window_get_x(),
	window_get_y()/2,
	window_get_width(),
	window_get_height()/2
);
```

```gml
/// @description Async - Steam event
if (async_load[? "event_type"] == "floating_gamepad_text_input_dismissed") {
    show_debug_message("Floating gamepad keyboard UI dialog dismissed.");
}
```

The above code shows a floating keyboard window in the bottom half of the window, then print a message to debug output when the dialog is dismissed.



@func_end


@func steam_dismiss_floating_gamepad_text_input
With this function you can dismiss a floating keyboard window if it is being currently shown. Returns `true` if the operation was successful, `false` otherwise.



@returns {Bool}

```gml
steam_dismiss_floating_gamepad_text_input();
```
The above code will dismiss the floating keyboard window if it is being displayed.



@func_end


@func steam_show_gamepad_text_input
With this function you can show a full-screen old-style Big Picture Mode-only keyboard UI. This one does not emulate the physical keyboard so you must use the [steam_get_entered_gamepad_text_input](#steam_get_entered_gamepad_text_input) function inside a corresponding `Async - Steam` event to obtain the input. Returns `true` if the window is being shown successfully, `false` otherwise.

> **:warning: IMPORTANT**
>
> You must call [steam_utils_enable_callbacks](#steam_utils_enable_callbacks) prior to calling this function if you wish to receive `Async - Steam` gamepad keyboard events.


|mode|real|A `steam_gamepad_text_input_mode_` constant.|
|lines_mode|real|A `steam_gamepad_text_input_line_mode_` constant.|
|description|string|The description of the window.|
|chars_max|real|The maximum amount of characters the player can enter.|
|existing_text|string|Some existing text to put into the text field or an empty string.|


@returns {Bool}

@event steam
|----|----|----|
|event_type|string|A string `"gamepad_text_input_dismissed"`.|
|submitted|bool|`true` if the dialog was submitted successfully and `false` if it was cancelled.|
|submitted_text_raw_byte_length|real|Raw length of the text in bytes.|


@example
```gml
steam_utils_enable_callbacks(); // somewhere once.
// show the dialog:
steam_show_gamepad_text_input(
	steam_gamepad_text_input_mode_normal,
	steam_gamepad_text_input_line_mode_single_line,
	"Some Description",
	100, // up to 100 string characters
	"" // no default text, can be any string, ex: "Player 1" etc
);
```

```gml
/// @description Async - Steam event
if (async_load[? "event_type"] == "gamepad_text_input_dismissed") {
    if (async_load[? "submitted"]) {
		var _input = steam_get_entered_gamepad_text_input();
		show_debug_message("Old-style dialog result: " + _input);
	}
}
```

The above code will show a modal gamepad keyboard input dialog with `"Some Description"` as the description and an empty text field, then print the typed text.



@func_end


@func steam_get_entered_gamepad_text_input
With this function you can obtain the result of the [steam_show_gamepad_text_input](#steam_show_gamepad_text_input) input dialog. This function must only be called in the corresponding `Async - Steam` event.

> **:warning: IMPORTANT**
>
> You must call [steam_utils_enable_callbacks](#steam_utils_enable_callbacks) prior to calling this function if you wish to receive `Async - Steam` gamepad keyboard events.



@returns {string}

```gml
/// @description Async - Steam event
if (async_load[? "event_type"] == "gamepad_text_input_dismissed") {
    if (async_load[? "submitted"]) {
		var _input = steam_get_entered_gamepad_text_input();
		show_debug_message("Old-style dialog result: " + _input);
	}
}
```
The above code will activate the use of gamepad keyboard UI async events.



@func_end


@func steam_utils_enable_callbacks
With this function you can activate the dispatch of `Async - Steam` events for gamepad keyboard UI. Returns `true` if the operation was successful and `false` otherwise.



@returns {Bool}

```gml
steam_utils_enable_callbacks();
```
The above code will activate the use of gamepad keyboard UI async events.



@func_end


@func steam_utils_is_steam_running_on_steam_deck
With this function you can check if your game is currently running on a Steam Deck, returns `true` if yes and `false` otherwise.



@returns {Bool}

```gml
if (steam_utils_is_steam_running_on_steam_deck()) {
    show_debug_message("The game is running on a Steam Deck.");
}
```
The above code will print a message to debug output if the game is running on the Steam Deck.



<br><br>