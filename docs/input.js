@func Input
The Steam Input API is designed to allow you to easily enable *full support* for Steam Input devices in your game. This means things such as:
  - Ability to use proper controller-specific glyphs for input hints.
  - Allow the user to easily rebind controls however they like via the Steam Input Configurator.
  - Share input mappings with others via the Steam Workshop.
  - and many more!
  
  <br>
  
Before proceeding, please read [this page](https://partner.steamgames.com/doc/features/steam_controller/getting_started_for_devs) about the Steam Input API for developers before reading this page to have a good understanding of what are Input Handles, Action Sets, Action Set Layers, Digital Actions, Analog Actions, Action Origins, the Steam Input Configurator, and bindings.

> **:information_source: NOTE**
>
> This API is designed for **advanced users only**, if you don't know why you need it, please use the native GML `gamepad_` functions instead.

The following functions can be used to access the Steam Input from within GameMaker Studio 2

* [steam_input_init](#steam_input_init)
* [steam_input_shutdown](#steam_input_shutdown)
* [steam_input_set_input_action_manifest_file_path](#steam_input_set_input_action_manifest_file_path)
* [steam_input_run_frame](#steam_input_run_frame)
* [steam_input_wait_for_data](#steam_input_wait_for_data)
* [steam_input_new_data_available](#steam_input_new_data_available)
* [steam_input_get_connected_controllers](#steam_input_get_connected_controllers)
* [steam_input_enable_device_callbacks](#steam_input_enable_device_callbacks)
* [steam_input_enable_action_event_callbacks](#steam_input_enable_action_event_callbacks)
* [steam_input_get_action_set_handle](#steam_input_get_action_set_handle)
* [steam_input_activate_action_set](#steam_input_activate_action_set)
* [steam_input_get_current_action_set](#steam_input_get_current_action_set)
* [steam_input_activate_action_set_layer](#steam_input_activate_action_set_layer)
* [steam_input_deactivate_action_set_layer](#steam_input_deactivate_action_set_layer)
* [steam_input_deactivate_all_action_set_layers](#steam_input_deactivate_all_action_set_layers)
* [steam_input_get_active_action_set_layers](#steam_input_get_active_action_set_layers)
* [steam_input_get_digital_action_handle](#steam_input_get_digital_action_handle)
* [steam_input_get_digital_action_data](#steam_input_get_digital_action_data)
* [steam_input_get_digital_action_origins](#steam_input_get_digital_action_origins)
* [steam_input_get_string_for_digital_action_name](#steam_input_get_string_for_digital_action_name)
* [steam_input_get_analog_action_handle](#steam_input_get_analog_action_handle)
* [steam_input_get_analog_action_data](#steam_input_get_analog_action_data)
* [steam_input_get_analog_action_origins](#steam_input_get_analog_action_origins)
* [steam_input_get_glyph_png_for_action_origin](#steam_input_get_glyph_png_for_action_origin)
* [steam_input_get_glyph_svg_for_action_origin](#steam_input_get_glyph_svg_for_action_origin)
* [steam_input_get_glyph_for_action_origin_legacy](#steam_input_get_glyph_for_action_origin_legacy)
* [steam_input_get_string_for_action_origin](#steam_input_get_string_for_action_origin)
* [steam_input_get_string_for_analog_action_name](#steam_input_get_string_for_analog_action_name)
* [steam_input_stop_analog_action_momentum](#steam_input_stop_analog_action_momentum)
* [steam_input_get_motion_data](#steam_input_get_motion_data)
* [steam_input_trigger_vibration](#steam_input_trigger_vibration)
* [steam_input_trigger_vibration_extended](#steam_input_trigger_vibration_extended)
* [steam_input_trigger_simple_haptic_event](#steam_input_trigger_simple_haptic_event)
* [steam_input_set_led_color](#steam_input_set_led_color)
* [steam_input_trigger_haptic_pulse_legacy](#steam_input_trigger_haptic_pulse_legacy)
* [steam_input_trigger_repeated_haptic_pulse_legacy](#steam_input_trigger_repeated_haptic_pulse_legacy)
* [steam_input_show_binding_panel](#steam_input_show_binding_panel)
* [steam_input_get_input_type_for_handle](#steam_input_get_input_type_for_handle)
* [steam_input_get_controller_for_gamepad_index](#steam_input_get_controller_for_gamepad_index)
* [steam_input_get_gamepad_index_for_controller](#steam_input_get_gamepad_index_for_controller)
* [steam_input_get_string_for_xbox_origin](#steam_input_get_string_for_xbox_origin)
* [steam_input_get_glyph_for_xbox_origin](#steam_input_get_glyph_for_xbox_origin)
* [steam_input_get_action_origin_from_xbox_origin](#steam_input_get_action_origin_from_xbox_origin)
* [steam_input_translate_action_origin](#steam_input_translate_action_origin)
* [steam_input_get_device_binding_revision](#steam_input_get_device_binding_revision)
* [steam_input_get_remote_play_session_id](#steam_input_get_remote_play_session_id)
* [steam_input_get_session_input_configuration_settings](#steam_input_get_session_input_configuration_settings)
* [steam_input_set_dualsense_trigger_effect](#steam_input_set_dualsense_trigger_effect)

  <!-- KEYWORDS
Steam Input
-->


@func_end


@func steam_input_init
With this function you can initialize the Steam Input API. It will return <tt>true</tt> if initialization was successful and <tt>false</tt> otherwise. If argument `explicitly_call_run_frame` is <tt>true</tt>, then you must manually call [steam_input_run_frame](#steam_input_run_frame) to poll for input data and async events, otherwise that will be performed by the `steam_update` function. After you initialize the Steam Input API, configuration events will be dispatched for any controllers connected while your game is running, they can be used to detect gamepad connection and when bindings have been updated so you need to refresh the sprites, input hints, etc.

> **:warning: IMPORTANT**
>
> This function must be called ONLY if you **REALLY wish to use** the Steam Input API, or some other extensions in your project rely on Steam Input, otherwise calling it _may_ make native GameMaker `gamepad_` functions not see any controllers plugged in!


|explicitly_call_run_frame|bool|Are you going to call [steam_input_run_frame](#steam_input_run_frame) manually or not?|


@returns {Bool}

@event steam
|----|----|----|
|event_type|string|A constant string `"steam_input_configuration_loaded"`.|
|app_id|real|Your game's app id.|
|device_handle|real|Input handle of the device this event refers to.|
|mapping_creator|real|Steam ID of the user that created the loaded input mapping or `0` if none.|
|major_revision|real|Major version digit of the mapping.|
|minor_revision|real|Minor version digit of the mapping.|
|uses_steam_input_api|bool|Whether this device is using the Action Set and Actions API.|
|uses_steam_gamepad_api|bool|Whether this device is using the XInput emulation API.|


```gml
if (!steam_input_init(false))
{
    throw "Failed to initialize the Steam Input API";
}
```

```gml
/// @description Async - Steam event
if (async_load[? "event_type"] == "steam_input_configuration_loaded") {
    // bindings refreshed, update any sprites we've fetched in some handler script
    scr_refresh_input_hints(async_load[? "device_handle"]);
}
```

The above code checks to see if the Steam Input API was initialized, and throws an exception if it wasn't, then handles "configuration loaded" async events.



@func_end


@func steam_input_shutdown
With this function you can tell Steam that you are done using the Steam Input API. It will return <tt>true</tt> if the operation was successful and <tt>false</tt> otherwise. Usually you do not need to call this, as when your game ends Steam will automatically release Steam Input for you. After this function had returned, no other Steam Input functions must be called.



@returns {Bool}

```gml
steam_input_shutdown();
```
The above code shuts down the Steam Input API.



@func_end


@func steam_input_set_input_action_manifest_file_path
This function can be used to set the absolute path to the input action manifest, in case you do not wish to use the Steam Workshop for this. Returns <tt>true</tt> if the operation was successful and <tt>false</tt> otherwise.



|absolute_path|string|Absolute path to the input action manifest file|

@returns {Bool}

```gml
steam_input_set_input_action_manifest_file_path(working_directory + "manifest.vdf");
```
The above code sets the full path to the input action manifest file the game wants to use.



@func_end


@func steam_input_run_frame
With this function you can poll for new input data from Steam Input if it is available, you do not need to call it manually unless you explicitly specified this when calling [steam_input_init](#steam_input_init).



@returns {Bool}

```gml
steam_input_run_frame();
```
The above code asks Steam Input to poll for new data if available.



@func_end


@func steam_input_wait_for_data
With this function you can freeze the game until new input data had arrived, returns <tt>true</tt> if new data did arrive, or <tt>false</tt> if the timeout had expired or an error had occurred. This function is only useful for lockstep multiplayer games.


|wait_forever|bool|Whether to wait for data to arrive forever.|
|timeout|real|Data arrival timeout.|


@returns {Bool}

```gml
steam_input_wait_for_data(true, 0);
```
The above code will freeze the entire game until new input data is received from Steam Input.



@func_end


@func steam_input_new_data_available
With this function you can check if there is new input data available since last read. Returns <tt>true</tt> if there is, <tt>false</tt> otherwise.



@returns {Bool}

```gml
if (steam_input_new_data_available())
{
    global.data_check_flag = true;
}
```
The above code checks if new data has been received since last poll, and sets a flag to <tt>true</tt> if there is.




@func_end


@func steam_input_get_connected_controllers
With this function you can get an array of currently connected controller handles. This function returns an array of controller handles on success, and <tt>undefined</tt> on failure.



**Returns:**

```gml
Array<Real> OR Undefined
```


```gml
controllers = steam_input_get_connected_controllers();
if (is_undefined(controllers))
{
    throw "Unable to poll for controllers!";
}
```
The above code will poll the current connected controllers array, and throw an exception if there was an error.



@func_end


@func steam_input_enable_device_callbacks
You can use this function to enable `Async - Steam` device connection and disconnection events, similar to `Async - System` type `gamepad connected` and `gamepad lost` events. The contents of `async_load` are described below. Returns <tt>true</tt> if the operation was successful, and <tt>false</tt> otherwise. This can be used as an alternative to [steam_input_get_connected_controllers](#steam_input_get_connected_controllers) since in that case you don't need to iterate through the entire array, which may be faster depending on how your game is coded. Both methods can be used simultaneously without issues. This function needs to be called only once and cannot be undone.

> **:warning: IMPORTANT**
>
> Depending on the type of the controller, multiple connection or disconnection events may be sent for one handle, be sure to handle that in your code, e.g. don't show a disconnection pop-up if the controller was already lost, and don't show a connection pop-up if this controller was already connected (and is not lost).



@returns {Bool}

@event steam
|----|----|----|
|event_type|String|`"steam_input_device_connected"` or `"steam_input_device_disconnected"`|
|disconnected_device_handle|Real|Only present if `event_type` is `"steam_input_device_disconnected"`|
|connected_device_handle|Real|Only present if `event_type` is `"steam_input_device_connected"`|



@example
```gml
/// @description Create event
steam_input_enable_device_callbacks(); // enable connection events
```

```gml
/// @description Async - Steam event
if (async_load[? "event_type"] == "steam_input_device_connected") {
    scr_game_add_device(async_load[? "connected_device_handle"]); // register an input_handle
    show_debug_message("Discovered a new input_handle!");
}
else if (async_load[? "event_type"] == "steam_input_device_disconnected") {
    scr_game_remove_device(async_load[? "disconnected_device_handle"]); // de-register an input_handle
    show_debug_message("Lost an input_handle!");
}
```
The above code will enable device connection and disconnection events, then it will react to them by calling some handler function. 



@func_end


@func steam_input_enable_action_event_callbacks
This function will enable `Async - Steam` action events, this event will be called only when some digital or analog action will change it's state, in case of digital actions that means a button is held or released, in case of analog actions that means the analog stick had moved, or the stick type had changed. The contents of `async_load` are described below. This is similar to [steam_input_get_digital_action_data](#steam_input_get_digital_action_data) and [steam_input_get_analog_action_data](#steam_input_get_analog_action_data), only here you don't have to poll for the actions manually, but you still need to obtain the handles via [steam_input_get_digital_action_handle](#steam_input_get_digital_action_handle) and [steam_input_get_analog_action_handle](#steam_input_get_analog_action_handle) respectively, otherwise Steam will think you don't care about these actions. This function needs to be called only once and cannot be undone.



@returns {Bool}

@event steam
|----|----|----|
|event_type|string|`"steam_input_action_event"`|
|controller_handle|Real|Handle of the controller this event is for.|
|action_event_type|Real|A `steam_input_action_event_type_` constant|
|action_handle|Real|Handle of the digital or analog action, depending on the type|
|active|bool|Whether or not this action is currently available to be bound in the active action set. If it is not available, OR does not belong to the active action set, this will be false.|
|state|bool|**DIGITAL ACTIONS ONLY:** state of the digital action, `true` or `false`.|
|mode|real|**ANALOG ACTIONS ONLY:** A `steam_input_source_mode_` constant.|
|x|real|**ANALOG ACTIONS ONLY:** X axis of the input|
|y|real|**ANALOG ACTIONS ONLY:** Y axis of the input|


@example
```gml
/// @description Create event
steam_input_enable_action_event_callbacks(); // enable action input events
```

```gml
/// @description Async - System event
if (async_load[? "event_type"] == "steam_input_action_event") {
    var _controller_handle = async_load[? "controller_handle"];
    var _action_handle = async_load[? "action_handle"];
    var _is_action_active = async_load[? "active"];
    if (_is_action_active) { // it's useless to try and handle an inactive action
        if (async_load[? "action_event_type"] == steam_input_action_event_type_digital_action) {
            var _digital_state = async_load[? "state"]; // true or false only, held or not held
            scr_register_digital_input(_controller_handle, _action_handle, _digital_state); // some handler
        }
        else if (async_load[? "action_event_type"] == steam_input_action_event_type_digital_action) {
            var _analog_mode = async_load[? "mode"]; // the user may be using a stick, or a mouse, or a touchpad...
            var _analog_x = async_load[? "x"];
            var _analog_y = async_load[? "y"];
            scr_register_analog_input(_controller_handle, _action_handle, _analog_mode, _analog_x, _analog_y); // some handler
        }
    }
    else {
        show_debug_message("Action " + string(_action_handle) + " not active for con " + string(_controller_handle)); // not bound?
    }
}
```
The above code will activate action input async events, and handle them correctly.




@func_end


@func steam_input_get_action_set_handle
This function will try to resolve an action set by name, returning the handle of that action set.

> **:warning: IMPORTANT**
>
> Due to a bug in the Steam Input API, if the game was launched without any controllers connected, all action set and action handle resolver functions will return 0, an invalid handle, as such it is required that you try to obtain handles every frame until at least one controller gets connected and you succeed.


|action_set_name|string|The name of the action set.|


@returns {Real}

@example
```gml
/// @description Create event
main_action_set = 0; // '0' is an invalid handle.
menu_action_set = 0;
```

```gml
/// @description Step event
// due to a bug in the Steam Input API, we have to try and obtain these every frame until we succeed.
// check if any handle is invalid:
if (main_action_set == 0 || menu_action_set == 0) {
    // try to resolve:
    main_action_set = steam_input_get_action_set_handle("Set_Main");
    menu_action_set = steam_input_get_action_set_handle("Set_Menu");
    // if we failed and the functions return 0, we will try again, on the next frame.
}
```
The above code checks if any handle is 0, and if it is, it tries to obtain all handles again, until it eventually completes and all handles are valid.




@func_end


@func steam_input_activate_action_set
With this function you can activate an action set on a specific controller, or all controllers by specifying the `steam_input_handle_all_controllers` constant as the controller handle. Returns `true` if the operation was successful, and `false` otherwise. This function is cheap to call and can be safely called every frame without hitting performance issues.


**Syntax:**

```gml
steam_input_activate_action_set(controller, action_set);
```

|controller|Real|Input handle of the controller.|
|action_set|Real|Handle of the action set, cannot be zero.|


@returns {Bool}

```gml
switch (state) {
    case game_state.menu: {
        steam_input_activate_action_set(steam_input_handle_all_controllers, menu_action_set);
        scr_do_menu_input();
        break;
    }

    case game_state.play: {
        steam_input_activate_action_set(player_controller_handle, main_action_set);
        scr_do_gameplay_input(player_controller_handle);
        break;
    }
}
```
The above code will activate the appropriate action set based on which state the game is currently in.



@func_end


@func steam_input_get_current_action_set
This function will return the handle of the currently activated action set on a given controller handle, or `0` if there is no action set currently active.


|controller|input_handle|Handle of the controller.|


@returns {Real}

```gml
if (steam_input_get_current_action_set(player_handle) == 0) {
    steam_input_activate_action_set(player_handle, menu_action_set);
}
```
The above code will check to see if there is no action set activated for a controller, and if there isn't, it will activate a menu action set.



@func_end


@func steam_input_activate_action_set_layer
This function will activate an action set layer on top of the current action set on a specified controller. Returns `true` if the operation was successful and `false` otherwise.


**Syntax:**

```gml
steam_input_activate_action_set_layer(controller, action_set_layer);
```

|controller|real|Handle of the controller.|
|action_set_layer|real|Handle of the action set layer.|


@returns {Bool}

```gml
steam_input_activate_action_set_layer(player_handle, action_set_layer_sniper);
```
The above code will activate a "sniper" action set layer on top of any currently activated action sets. Returns `true` if the operation was successful and `false` otherwise.



@func_end


@func steam_input_deactivate_action_set_layer
This function will deactivate a specific action set layer from the specified controller. Returns `true` if the operation was successful and `false` otherwise.


**Syntax:**

```gml
steam_input_deactivate_action_set_layer(controller, action_set_layer);
```

|controller|real|Handle of the controller.|
|action_set_layer|real|Handle of the action set layer.|


@returns {Bool}

```gml
steam_input_deactivate_action_set_layer(player_handle, action_set_layer_sniper);
```
The above code will deactivate the "sniper" action set layer from the `player_handle` controller.



<br><br>


---


@func steam_input_deactivate_all_action_set_layers
This function will deactivate all action set layers on a specified controller. Returns `true` if the operation was successful and `false` otherwise.


|controller|real|Handle of the controller.|


@returns {Bool}

```gml
steam_input_deactivate_all_action_set_layers(player_handle);
```
The above code will deactivate all action set layers on the `player_handle` controller.



@func_end


@func steam_input_get_active_action_set_layers
This function will return an array of currently active action set layer handles on a specified controller. Returns an array of action set layer handles on success, and `undefined` on failure.


|controller|real|Handle of the controller.|


**Returns:**

```gml
Array<Real> OR Undefined
```


```gml
var layers = steam_input_get_active_action_set_layers(player_handle);
if (array_length(layers) > 0) {
    steam_input_deactivate_all_action_set_layers(player_handle);
}
```
The above code will retrieve all currently active action set layers for `player_handle`, and if there are some active, it will deactivate all action set layers.



@func_end


@func steam_input_get_digital_action_handle
This function will resolve a digital action by name, and return that action's handle. Keep in mind that no two actions cannot have the same name, even if they are defined in different action sets, since Steam does not differentiate action names for each set.

> **:warning: IMPORTANT**
>
> Due to a bug in the Steam Input API, if the game was launched without any controllers connected, all action set and action handle resolver functions will return 0, an invalid handle, as such it is required that you try to obtain handles every frame until at least one controller gets connected and you succeed.


|digital_action_name|string|Name of the digital action.|


@returns {Real}

@example
```gml
/// @description Create event
action_shoot = 0; // '0' is an invalid handle.
action_roll = 0;
```

```gml
/// @description Step event
if (action_shoot == 0 || action_roll == 0) {
    action_shoot = steam_input_get_digital_action_handle("DAction_Shoot");
    action_roll = steam_input_get_digital_action_handle("DAction_Roll");
}
```
The above code will try to obtain handles of digital actions `shoot` and `roll`, if it failed, it will try again on the next frame.



@func_end


@func steam_input_get_digital_action_data
This function will return current input data for a given digital action on a given controller. It returns the `digital_action_data` struct on success and `undefined` on failure.


|controller|Real|Handle of the controller to use.|
|action_handle|Real|Handle of the digital action to poll for.|


**Returns:**

```gml
Struct OR Undefined
```

**Struct fields:**
|----|----|----|
|active|Bool|Whether the action is bound to any button|
|state|Bool|Whether the action is currently held or not|


```gml
var _data = steam_input_get_digital_action_data(player_handle, action_shoot);
with (objPlayer) {
    isShooting = _data.active && _data.state;
}
```

The above code will set the `isShooting` variable in the player object to `true` if the action is active and is currently held, or `false` otherwise.



@func_end


@func steam_input_get_digital_action_origins
This function will retrieve an array of input origins for a specified action and controller handles. This is the function you should use when trying to obtain input hint prompts, keep in mind that it returns an array because multiple buttons can be bound to one action in the Steam Input Configurator. Also keep in mind that input hints may change mid-game as the Steam Input Configurator is accessible inside the Steam Overlay, this is why it's recommended that you update all input sprites when you get a Configuration `Async - Steam` event for the controller(s) you are interested in.


**Syntax:**

```gml
steam_input_get_digital_action_origins(controller, action_set, digital_action);
```

|controller|Real|Handle of the controller to use.|
|action_set|Real|Handle of the action set.|
|digital_action|Real|Handle of the digital action inside the action set.|


**Returns:**

```gml
Array<Real> OR Undefined
```


```gml
// this example function returns a horizontal strip of input hints as a single sprite frame
// do not forget to use sprite_delete() when you no longer need the returned sprite.
function scr_sprite_for_action(player_handle, action_set_handle, action_handle, is_digital_action) {
    var _origins = is_digital_action
        ? steam_input_get_digital_action_origins(player_handle, action_set_handle, action_handle)
        : steam_input_get_analog_action_origins(player_handle, action_set_handle, action_handle);
    if (is_undefined(_origins) || array_length(_origins) == 0) {
        // something is wrong or no buttons are bound
        return -1;
    }
    var _hint_count = array_length(_origins),
        _hint_width = 32,
        _hint_height = 32,
        _hint_size = steam_input_glyph_size_small, // _small is 32x32 pixels
        _hint_style = steam_input_glyph_style_dark; // prefer dark glyphs for the sake of this example
    var _surf = surface_create(_hint_count * _hint_width, _hint_height);
    surface_set_target(_surf);
    draw_clear_alpha(c_black, 0);
    for (var _h = 0; _h < _hint_count; ++_h) {
        var _origin = _origins[_h];
        var _path = steam_input_get_glyph_png_for_action_origin(_origin, _hint_size, _hint_style);
        var _tempspr = sprite_add(_path, 1, false, false, 0, 0);
        draw_sprite(_tempspr, 0, _hint_width * _h, 0);
        sprite_delete(_tempspr);
    }
    surface_reset_target();
    var _sprstrip = sprite_create_from_surface(_surf, 0, 0, surface_get_width(_surf), surface_get_height(_surf), false, false, 0, 0);
    // you can add a call to sprite_set_offset() if you wish to auto-set the sprite origin to middle centre.
    surface_free(_surf);
    return _sprstrip;
}

global.shoot_sprite = scr_sprite_for_action(player_handle, main_action_set, action_shoot, true);
draw_sprite(global.shoot_sprite, 0, 64, 64);
```

The above code defines an example of how to turn action origins into a sprite that you can draw in-game, for example on the GUI Layer.



@func_end


@func steam_input_get_string_for_digital_action_name
This function will return the localized name of a digital action as specified by Steam localization settings. Keep in mind that the Steam language may be different than the OS language, and this function will always use the language settings of the Steam client, not the OS.


|digital_action|Real|Handle of the digital action.|


@returns {string}

```gml
shoot_name_loc = steam_input_get_string_for_digital_action_name(action_shoot);
```

The above code will get the localized name for the shoot action, and store it in the variable `shoot_name_loc`.



@func_end


@func steam_input_get_analog_action_handle
This function will resolve an analog action by name, and return that action's handle. Keep in mind that no two actions cannot have the same name, even if they are defined in different action sets, since Steam does not differentiate action names for each set.

> **:warning: IMPORTANT**
>
> Due to a bug in the Steam Input API, if the game was launched without any controllers connected, all action set and action handle resolver functions will return 0, an invalid handle, as such it is required that you try to obtain handles every frame until at least one controller gets connected and you succeed.


|analog_action_name|string|Name of the analog action.|


@returns {Real}

@example
```gml
/// @description Create event
action_move = 0; // '0' is an invalid handle.
action_aim = 0;
```

```gml
/// @description Step event
if (action_move == 0 || action_aim == 0) {
    action_move = steam_input_get_analog_action_handle("AAction_Move");
    action_aim = steam_input_get_analog_action_handle("AAction_Aim");
}
```
The above code will try to obtain handles of analog actions `move` and `aim`, if it failed, it will try again on the next frame.



@func_end


@func steam_input_get_analog_action_data
This function will return current input data for a given analog action on a given controller. It returns the `analog_action_data` struct on success and `undefined` on failure.


**Syntax:**

```gml
steam_input_get_analog_action_data(controller, action_handle);
```

|controller|Real|Handle of the controller to use.|
|action_handle|Real|Handle of the analog action to poll for.|


**Struct Fields:**

|----|----|----|
|active|Bool|Whether this action is bound to any input element.|
|mode|Real|A `steam_input_source_mode_` constant.|
|x|Real|X axis of the input.|
|y|Real|Y axis of the input, **inverted by default**. See example code.|

**Returns:**

```gml
Struct OR Undefined
```


```gml
var _data = steam_input_get_analog_action_data(player_handle, action_move);
if (_data.active) {
    with (objPlayer) {
        x += _data.x * move_speed;
        // in Steam Input the Y axis is in a different direction than GameMaker, so we need to invert it.
        y += -_data.y * move_speed;
        // you might want to use different crosshairs if the movement came from a touchpad or an analog stick.
        last_input_mode = _data.mode;
    }
}
```

The above code will move the player object accordingly to the input data for the `move` analog action.



@func_end


@func steam_input_get_analog_action_origins
This function will retrieve an array of input origins for a specified action and controller handles. This is the function you should use when trying to obtain input hint prompts, keep in mind that it returns an array because multiple buttons can be bound to one action in the Steam Input Configurator. Also keep in mind that input hints may change mid-game as the Steam Input Configurator is accessible inside the Steam Overlay, this is why it's recommended that you update all input sprites when you get a Configuration `Async - Steam` event for the controller(s) you are interested in.


**Syntax:**

```gml
steam_input_get_analog_action_origins(controller, action_set, action);
```

|controller|Real|Handle of the controller to use.|
|action_set|Real|Handle of the action set.|
|action|Real|Handle of the analog action inside the action set.|


**Returns:**

```gml
Array<Real> OR Undefined
```


```gml
// this example function returns a horizontal strip of input hints as a single sprite frame
// do not forget to use sprite_delete() when you no longer need the returned sprite.
function scr_sprite_for_action(player_handle, action_set_handle, action_handle, is_digital_action) {
    var _origins = is_digital_action
        ? steam_input_get_digital_action_origins(player_handle, action_set_handle, action_handle)
        : steam_input_get_analog_action_origins(player_handle, action_set_handle, action_handle);
    if (is_undefined(_origins) || array_length(_origins) == 0) {
        // something is wrong or no buttons are bound
        return -1;
    }
    var _hint_count = array_length(_origins),
        _hint_width = 32,
        _hint_height = 32,
        _hint_size = steam_input_glyph_size_small, // _small is 32x32 pixels
        _hint_style = steam_input_glyph_style_dark; // prefer dark glyphs for the sake of this example
    var _surf = surface_create(_hint_count * _hint_width, _hint_height);
    surface_set_target(_surf);
    draw_clear_alpha(c_black, 0);
    for (var _h = 0; _h < _hint_count; ++_h) {
        var _origin = _origins[_h];
        var _path = steam_input_get_glyph_png_for_action_origin(_origin, _hint_size, _hint_style);
        var _tempspr = sprite_add(_path, 1, false, false, 0, 0);
        draw_sprite(_tempspr, 0, _hint_width * _h, 0);
        sprite_delete(_tempspr);
    }
    surface_reset_target();
    var _sprstrip = sprite_create_from_surface(_surf, 0, 0, surface_get_width(_surf), surface_get_height(_surf), false, false, 0, 0);
    // you can add a call to sprite_set_offset() if you wish to auto-set the sprite origin to middle centre.
    surface_free(_surf);
    return _sprstrip;
}

global.move_sprite = scr_sprite_for_action(player_handle, main_action_set, action_move, false /* not digital this time! */);
draw_sprite(global.move_sprite, 0, 64, 64);
```

The above code defines an example of how to turn action origins into a sprite that you can draw in-game, for example on the GUI Layer.



@func_end


@func steam_input_get_glyph_png_for_action_origin
This function will return a full path to a PNG file of the glyph image of an action origin. The path is automatically added into the GameMaker's filesystem sandbox list, so that you can use the returned path in `sprite_add` or `buffer_load` no matter if you have the sandbox enabled or disabled.


**Syntax:**

```gml
steam_input_get_glyph_png_for_action_origin(origin, size, flags);
```

|origin|Real|Action origin to get the PNG of.|
|size|Real|A `steam_input_glyph_size_` constant.|
|flags|Real|A `steam_input_glyph_style_` bit flags constant.|


@returns {string}

```gml
var _path = steam_input_get_glyph_png_for_action_origin(global.shoot_origin, steam_input_glyph_size_small, steam_input_glyph_style_dark);
global.shoot_sprite = sprite_add(_path, 1, false, false, 0, 0);
```

The above code will get a PNG representing an action origin and load it as a sprite. For an extended example please see the example code from [steam_input_get_digital_action_origins](#steam_input_get_digital_action_origins).



@func_end


@func steam_input_get_glyph_svg_for_action_origin
This function will return a full path to an SVG file of the glyph image of an action origin. The path is automatically added into the GameMaker's filesystem sandbox list, so that you can use the returned path in `buffer_load` no matter if you have the sandbox enabled or disabled. As for now GameMaker has no native capabilities to draw SVG files, but such ability may be added in the future. If you have your own SVG renderer then this function might be useful for you. Since SVGs do not have a fixed size and can be freely scaled, there is no `size` argument like in [steam_input_get_glyph_png_for_action_origin](#steam_input_get_glyph_png_for_action_origin).


**Syntax:**

```gml
steam_input_get_glyph_svg_for_action_origin(origin, flags);
```

|origin|Real|Action origin to get the SVG of.|
|flags|Real|A `steam_input_glyph_style_` bit flags constant.|


@returns {string}

```gml
var _svg_path = steam_input_get_glyph_svg_for_action_origin(global.shoot_origin, steam_input_glyph_style_dark);
```

The above code will get the path to an SVG representing an action origin and store it in a local variable `_svg_path`.



@func_end


@func steam_input_get_glyph_for_action_origin_legacy
This function will return a full path to a PNG file of the glyph image of an action origin. The path is automatically added into the GameMaker's filesystem sandbox list, so that you can use the returned path in `sprite_add` or `buffer_load` no matter if you have the sandbox enabled or disabled. The image will be in legacy Steam Big Picture design style, if you wish to use the new Steam Deck styled glyphs (also called Knockout glyphs in Valve's documentation), please use the function [steam_input_get_glyph_png_for_action_origin](#steam_input_get_glyph_png_for_action_origin) instead.


|origin|Real|Action origin to get the PNG of.|


@returns {string}

```gml
var _path = steam_input_get_glyph_for_action_origin_legacy(global.shoot_origin);
global.shoot_sprite = sprite_add(_path, 1, false, false, 0, 0);
```

The above code will get a PNG representing an action origin and load it as a sprite.



@func_end


@func steam_input_get_string_for_action_origin
This function will return a localized name of an action origin, for example `"Y Button"` if the Steam language is set to English, or `"Кнопка Y"` if it is set to Russian. Keep in mind that the OS language may be different from the Steam client language, and the Steam language will be used instead.


|origin|Real|Action origin to get the localized name of.|


@returns {string}

```gml
global.shoot_name = steam_input_get_string_for_action_origin(global.shoot_origin);
```

The above code will get a localized name of the shoot origin and store it in a global variable `shoot_name`.



@func_end


@func steam_input_get_string_for_analog_action_name
This function will return the localized name of an analog action as specified by Steam localization settings. Keep in mind that the Steam language may be different than the OS language, and this function will always use the language settings of the Steam client, not the OS.


|action|Real|Handle of the analog action.|


@returns {string}

```gml
move_name_loc = steam_input_get_string_for_analog_action_name(action_move);
```

The above code will get the localized name for the move action, and store it in the variable `move_name_loc`.



@func_end


@func steam_input_stop_analog_action_momentum
This function will stop the momentum of an analog action if the input device is, for example, a trackball. Returns `true` if the operation was successful and `false` otherwise.


|controller|Real|Input handle of the controller.|
|action|Real|Handle of the analog action.|


@returns {Bool}

```gml
steam_input_stop_analog_action_momentum(player_handle, action_move);
```

The above code will stop the analog momentum of the move action.



@func_end


@func steam_input_get_motion_data
This function will obtain raw gyroscope and accelerometer data in the controller's native format. Returns the  `motion_data` struct on success and `undefined` on failure.


|controller|Real|Input handle of the controller.|

**Struct Fields:**

|----|----|----|
|rot_quat_x|Real|X component of the orientation quaternion.|
|rot_quat_y|Real|Y component of the orientation quaternion.|
|rot_quat_z|Real|Z component of the orientation quaternion.|
|rot_quat_w|Real|W component of the orientation quaternion.|
|pos_accel_x|Real|X component of the acceleration.|
|pos_accel_y|Real|Y component of the acceleration.|
|pos_accel_z|Real|Z component of the acceleration.|
|rot_vel_x|Real|X component of the angular velocity.|
|rot_vel_y|Real|Y component of the angular velocity.|
|rot_vel_z|Real|Z component of the angular velocity.|


**Returns:**

```gml
Struct OR Undefined
```


```gml
var _data = steam_input_get_motion_data(player_handle);
if (is_undefined(_data)) {
    exit;
}
var _dt = delta_time / 1000000;
// this math will only work for the DualShock 4 controller
x += _dt * room_width * (_data.rot_vel_y / -32767);
y += _dt * room_height * (_data.rot_vel_x / -32767);
image_angle = radtodeg(_dt * (_data.rot_vel_z / 32767));
```

The above code will rotate and move the object based on the angular velocity data of the controller.



@func_end


@func steam_input_trigger_vibration
This function will trigger a vibration effect on the target controller. Keep in mind that due to physical differences of each controller, the motors may not be the exact same, for example on the DualShock 4 controller the left motor is bigger and faster than the right one. Returns `true` on success and `false` otherwise.


|controller|real|Input handle of the controller.|
|left_speed|real|Speed of the left motor from 0 to 65535.|
|right_speed|real|Speed of the right motor from 0 to 65535.|


@returns {Bool}

```gml
steam_input_trigger_vibration(player_handle, 65535 / 2, 65535 / 2);
```

The above code will trigger a vibration effect at half the maximum power on both motors.



@func_end


@func steam_input_trigger_vibration_extended
This function will trigger an extended vibration effect on the target controller. Keep in mind that due to physical differences of each controller, the motors may not be the exact same, for example on the DualShock 4 controller the left motor is bigger and faster than the right one. Also keep in mind that not all controllers may support the extended vibration effects. Returns `true` on success and `false` otherwise.


|controller|real|Input handle of the controller.|
|left_speed|real|Speed of the left motor from 0 to 65535.|
|right_speed|real|Speed of the right motor from 0 to 65535.|
|left_trigger_speed|real|Speed of the left trigger from 0 to 65535.|
|right_trigger_speed|real|Speed of the right trigger from 0 to 65535.|


@returns {Bool}

```gml
steam_input_trigger_vibration_extended(player_handle, 65535 / 2, 65535 / 2, 65535 / 4, 65535 / 4);
```

The above code will trigger a vibration effect at half the maximum power on vibration motors, and set the trigger speed for both triggers to a quarter.



@func_end


@func steam_input_trigger_simple_haptic_event
This function will trigger a simple haptic event if the target controller supports them. Returns `true` on success and `false` on failure.


|controller|real|Input handle of the controller.|
|location|real|A `steam_input_controller_haptic_location_` constant.|
|intensity|real|Intensity of the first motor from 0 to 255.|
|gain_db|real|Gain in DB units, can be negative, from -127 to 128.|
|other_intensity|real|Intensity of the second motor from 0 to 255.|
|other_gain_db|real|Gain of the second motor in DB units, can be negative, from -127 to 128.|


@returns {Bool}

```gml
steam_input_trigger_simple_haptic_event(controller, steam_input_controller_haptic_location_both, 255 / 2, 0, 255 / 2, 0);
```

The above code will trigger a simple haptic event with half intensity and neutral db gain on both motors of the controller.



@func_end


@func steam_input_set_led_color
This function will set or reset the color of the LED on the controller. Keep in mind that not all controllers have LEDs in them, and that the default user color of the controller differs between manufacturers, but your custom ones should always look almost the same.


|controller|real|Input handle of the controller.|
|color|real|Color value to use.|
|flags|real|A `steam_input_led_flag_` constant.|


@returns {Bool}

```gml
// to set your own color:
var _rainbow = make_color_hsv((get_timer() / 100000) mod (255 + 1), 255, 255); // cycle through the Hue.
steam_input_set_led_color(controller, _rainbow, steam_input_led_flag_set_color);
// to reset to the default color:
steam_input_set_led_color(controller, c_black, steam_input_led_flag_restore_user_default);
```

The above code first sets the LED color to a custom one, then resets the color to the default one.



@func_end


@func steam_input_trigger_haptic_pulse_legacy
This function runs a haptic pulse through the legacy API, this is only useful if the target controller is a Steam Controller. Returns `true` on success and `false` otherwise.


|controller|real|Input handle of the controller.|
|pad|real|A `steam_input_steam_controller_pad_` constant.|
|duration_in_ms|real|Duration of the pulse in miliseconds.|


@returns {Bool}

```gml
steam_input_trigger_haptic_pulse_legacy(player_handle, steam_input_steam_controller_pad_left, 2 * 1000);
```

The above code runs a haptic pulse on the left motor for two seconds (2000 miliseconds).



@func_end


@func steam_input_trigger_repeated_haptic_pulse_legacy
This function runs a repeated haptic pulse through the legacy API, this is only useful if the target controller is a Steam Controller. Returns `true` on success and `false` otherwise.


|controller|real|Input handle of the controller.|
|pad|real|A `steam_input_steam_controller_pad_` constant.|
|duration_in_ms|real|Duration of the pulse in miliseconds.|
|offset_in_ms|real|The offset from which to start looping in miliseconds.|
|repeat_times|real|How many times to repeat the loop?|
|flags|real|Repeated haptic pulse flags|


@returns {Bool}

```gml
steam_input_trigger_repeated_haptic_pulse_legacy(player_handle, steam_input_steam_controller_pad_left, 2 * 1000, 100, 2, 0);
```

The above code runs a repeated haptic pulse on the left motor for two seconds (2000 miliseconds), the next iterations will start at 100 miliseconds and this will repeat two times.



@func_end


@func steam_input_show_binding_panel
This function opens the Steam Input Configurator for the target controller which allows the player to rebind controls in-game. If Steam is not running in Big Picture, a new window will be opened, otherwise the configurator will be invoked as a part of the Steam Overlay. Keep in mind that the player can open the Configurator without this function too, by pressing the "Controller Layout" button in the Steam Overlay. Returns `true` if the operation was successful and `false` otherwise.


|controller|real|Input handle of the controller.|


@returns {Bool}

```gml
steam_input_show_binding_panel(player_handle);
```

The above code opens the Steam Input Configurator for the controller handle stored in `player_handle`.



@func_end


@func steam_input_get_input_type_for_handle
This function returns the type of the target controller. Useful if you want to know which features are most likely supported by the target contorller.


|controller|real|Input handle of the controller.|


@returns {real}

```gml
var _input_type = steam_input_get_input_type_for_handle(player_handle);
var _msg = "The controller type is ";
var _typestr = "Unknown";
switch (_input_type) {
    case steam_input_type_steam_controller: _typestr = "Steam Controller"; break;
    case steam_input_type_xbox_360_controller: _typestr = "Xbox 360"; break;
    case steam_input_type_xbox_one_controller: _typestr = "Xbox One"; break;
    case steam_input_type_generic_gamepad: _typestr = "Generic Gamepad"; break;
    case steam_input_type_ps4_controller: _typestr = "DualShock 4"; break;
    case steam_input_type_apple_mfi_controller: _typestr = "Apple MFi"; break;
    case steam_input_type_android_controller: _typestr = "Android"; break;
    case steam_input_type_switch_joycon_pair: _typestr = "Joy-Con Pair"; break;
    case steam_input_type_switch_joycon_single: _typestr = "Single Joy-Con"; break;
    case steam_input_type_switch_pro_controller: _typestr = "Pro Controller"; break;
    case steam_input_type_mobile_touch: _typestr = "Mobile Touch"; break;
    case steam_input_type_ps3_controller: _typestr = "DualShock 3"; break;
    case steam_input_type_ps5_controller: _typestr = "DualSense"; break;
    case steam_input_type_steam_deck_controller: _typestr = "Steam Deck"; break;
}
show_debug_message(_msg + _typestr);
```

The above code prints the type of the controller as a string to debug output.



@func_end


@func steam_input_get_controller_for_gamepad_index
This function returns the input handle for an XInput gamepad slot, or 0 if that slot is not powered by Steam Input. That can be used to match between native GameMaker `gamepad_` slots and Steam Input controllers on Windows. Since on Windows the GameMaker pad slots from 0 to 3 are XInput controllers, and from 4 to 12 are DirectInput controllers. This function only works with emulated XInput controllers.


|index|real|XInput slot from 0 to 3 included.|


@returns {real}

```gml
var _slot0h = steam_input_get_controller_for_gamepad_index(0);
if (_slot0h != 0) {
    show_debug_message("GM slot 0 handle = " + string(_slot0h));
}
```

The above code prints the controller handle for the first XInput gamepad slot if it is valid.



@func_end


@func steam_input_get_controller_for_gamepad_index
This function is the reverse of [steam_input_get_controller_for_gamepad_index](#steam_input_get_controller_for_gamepad_index), except it allows you to determine whether a Steam Input handle is being emulated as XInput as well or not. See the definition of the reverse function for more information about slots.


|controller|real|Input handle of the controller.|


@returns {Real}

```gml
var _slot0i = steam_input_get_gamepad_index_for_controller(player_handle);
if (_slot0i >= 0) {
    show_debug_message("GM slot for player is = " + string(_slot0i));
}
```

The above code prints the XInput slot for the player controller if it's valid.



@func_end


@func steam_input_get_string_for_xbox_origin
This function turns a `steam_input_xbox_origin_` constant into a localized string, the language will be taken from Steam client settings. For example `"A Button"` if it's English or `"Кнопка A"` if it's Russian.


|origin|real|A `steam_input_xbox_origin_` constant.|


@returns {string}

```gml
show_debug_message("A Button is " + steam_input_get_string_for_xbox_origin(steam_input_xbox_origin_a));
```

The above code prints the localized name of the Xbox 360 A button origin.



@func_end


@func steam_input_get_glyph_for_xbox_origin
This returns a path to a PNG associated with a `steam_input_xbox_origin_` constant. The returned path will be automatically added into the GameMaker filesystem sandbox list so it can be used with `buffer_load` or `sprite_add` no matter whether you have sandbox enabled or not.


|origin|real|A `steam_input_xbox_origin_` constant.|


@returns {string}

```gml
var _path = steam_input_get_glyph_for_xbox_origin(steam_input_xbox_origin_a);
var _sprite = sprite_add(_path, 1, false, false, 0, 0);
// ...
// do not forget to free the sprite when you're done:
sprite_delete(_sprite);
```

The above code loads a PNG file associated with `steam_input_xbox_origin_a` as a sprite.



@func_end


@func steam_input_get_action_origin_from_xbox_origin
This function returns the closest origin that maps to the `steam_input_xbox_origin_` constant for the target controller. So for a DualShock 4 controller handle `steam_input_xbox_origin_a` will return the "cross" button origin. Useful for transposing Xbox 360 button hints into the target controller button hints without using the Actions and Action Sets.


**Syntax:**

```gml
steam_input_get_action_origin_from_xbox_origin(controller, origin);
```

|controller|real|Target controller handle to use.|
|origin|real|A `steam_input_xbox_origin_` constant.|


@returns {real}

```gml
// original origin:
var _xbox_origin = steam_input_xbox_origin_y;
// transposed origin: (ex: (Y) -> (TRIANGLE) on DS4)
var _transposed_origin = steam_input_get_action_origin_from_xbox_origin(player_handle, _xbox_origin);
var _path = steam_input_get_glyph_png_for_action_origin(_transposed_origin, steam_input_glyph_size_small, steam_input_glyph_style_dark);
var _sprite = sprite_add(_path, 1, false, false, 0, 0);
// do something with the sprite
// ...
// free the sprite:
sprite_delete(_sprite);
```

The above code loads an input sprite of the Xbox 360 button "Y" in the target controller's style.



@func_end


@func steam_input_translate_action_origin
This function allows to translate an action origin for a new unknown controller type into an origin that this extension will understand. This is useful if a new controller is released, it's support is added into Steam Input, the Steam client is updated, the Steam Input Configurator is updated, but your game is not, and it doesn't know about this controller. With this function you can try to obtain the closest origin that maps to that unknown-for-your-game controller origin.


**Syntax:**

```gml
steam_input_translate_action_origin(type, origin);
```

|type|real|`steam_input_type_` you would like to map to, or `steam_input_type_unknown` to let Steam do a best guess.|
|origin|real|An unknown input action origin you would like to translate.|


@returns {real}

```gml
// do a best guess here, let's pretend we have absolutely no idea how to handle this new controller
var _transposed_origin = steam_input_translate_action_origin(steam_input_type_unknown, global.shoot_origin);
var _path = steam_input_get_glyph_png_for_action_origin(_transposed_origin, steam_input_glyph_size_small, steam_input_glyph_style_dark);
var _sprite = sprite_add(_path, 1, false, false, 0, 0);
// do something with the sprite
// ...
// free the sprite:
sprite_delete(_sprite);
```

The above code tries to map an unknown action origin into something that this extension understands, and then loads a sprite representing that origin.



@func_end


@func steam_input_get_device_binding_revision
This function returns the current action bindings revision as a struct, or `undefined` if there was an error.


|controller|real|Input controller handle to use.|

**Struct Fields:**

|----|----|----|
|major|real|Major version digit.|
|minor|real|Minor version digit.|


**Returns:**

```gml
Struct OR Undefined
```


```gml
var _bindvers = steam_input_get_device_binding_revision(player_handle);
show_debug_message("Major = " + string(_bindvers.major) + ", minor = " + string(_bindvers.minor));
```

The above code prints the current device bindings revision into debug output.



@func_end


@func steam_input_get_remote_play_session_id
This function returns the current Steam Remote Play session id associated with the controller, or 0 if no session is associated.


|controller|input_handle|Input controller handle to use.|


@returns {Real}

```gml
var _sessid = steam_input_get_remote_play_session_id(player_handle);
show_debug_message("Session ID = " + string(_sessid));
```

The above code prints the current Steam Remote Play session id associated with the player controller.



@func_end


@func steam_input_get_session_input_configuration_settings
This function returns the Steam Remote Play session opted-in gamepad types bitmask. Specifically the `steam_input_configuration_enable_type_` constants.



@returns {Real}

```gml
var _setmask = steam_input_get_session_input_configuration_settings();
// how to detect for opt-in:
var _opted_into_ps = (_setmask & steam_input_configuration_enable_type_playstation) != 0;
var _opted_into_switch = (_setmask & steam_input_configuration_enable_type_switch) != 0;
// just print the bitmask:
show_debug_message("Settings bit mask = " + string(_setmask));
```

The above code prints the current Steam Remote Play session input bitmask into the debug output.



@func_end


@func steam_input_set_dualsense_trigger_effect
This function is for input handles of DualSense controllers only, allows to apply an adaptive trigger effect to a DualSense input handle. The format of the struct is described in the example code. Returns `true` if the operation was successful and `false` otherwise.


**Syntax:**

```gml
steam_input_set_dualsense_trigger_effect(controller, param);
```

|controller|real|Input controller handle to use.|
|param|struct|Trigger effect parameter struct, see the example.|


@returns {Bool}

```gml
// please PLEASE PLEASE read the comments for each field here,
// your struct MUST follow this format, otherwise the extension will throw an exception.
// field comments taken from isteamdualsense.h header file from the Steamworks SDK.
var _param = {
	// which triggers to modify, L2, R2, or both
	trigger_mask: steam_input_sce_pad_trigger_effect_trigger_mask_l2 | steam_input_sce_pad_trigger_effect_trigger_mask_r2,
	// must be a valid array of 2 elements, always
	command: [
		// L2 data:
		{
			mode: steam_input_sce_pad_trigger_effect_mode_multiple_position_vibration,
			// command_data must be a valid struct, never undefined
			command_data: {
				// if mode_off then no fields from command_data will be read, otherwise:
				feedback_param: {
					// if mode_feedback
					position: 0, /*E position where the strength of target trigger start changing(0~9). */
					strength: 0  /*E strength that the motor arm pushes back target trigger(0~8 (0: Same as Off mode)). */
				},
				weapon_param: {
					// if mode_weapon
					start_position: 0, /*E position where the stiffness of trigger start changing(2~7). */
					end_position: 0,   /*E position where the stiffness of trigger finish changing(start_position+1~8). */
					strength: 0        /*E strength of gun trigger(0~8 (0: Same as Off mode)). */
				},
				vibration_param: {
					// if mode_vibration
					position: 0,  /*E position where the motor arm start vibrating(0~9). */
					amplitude: 0, /*E vibration amplitude(0~8 (0: Same as Off mode)). */
					frequency: 0, /*E vibration frequency(0~255[Hz] (0: Same as Off mode)). */
				},
				multiple_position_feedback_param: {
					// if mode_multiple_position_feedback
					/*E strength that the motor arm pushes back target trigger at position(0~8 (0: Same as Off mode)).
						*  strength[0] means strength of motor arm at position0.
						*  strength[1] means strength of motor arm at position1.
						*  ...
						* */
					strength: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
				},
				slope_feedback_param: {
					// if mode_slope_feedback
					start_position: 0, /*E position where the strength of target trigger start changing(0~end_position). */
					end_position: 0,   /*E position where the strength of target trigger finish changing(start_position+1~9). */
					start_strength: 0, /*E strength when trigger's position is start_position(1~8) */
					end_strength: 0    /*E strength when trigger's position is end_position(1~8) */
				},
				multiple_position_vibration_param: {
					// if mode_multiple_position_vibration
					frequency: 0, /*E vibration frequency(0~255 (0: Same as Off mode)) */
					/*E vibration amplitude at position(0~8 (0: Same as Off mode)).
						*  amplitude[0] means amplitude of vibration at position0.
						*  amplitude[1] means amplitude of vibration at position1.
						*  ...
						* */
					amplitude: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
				}
			}
		},
		// R2 data: even if your mask tells "only l2", you MUST still include the dummy r2 field:
		{
			mode: steam_input_sce_pad_trigger_effect_mode_off,
			command_data: {
				// MUST be present even when mode_off!!
			}
		}
	]
};
// apply the parameters to the dualsense controller:
steam_input_set_dualsense_trigger_effect(player_handle, _param);
```

The above code demonstrates the use of DualSense adaptive trigger effects in Steam Input, along with documenting every field in the struct.



<br><br>