
// FUNCTIONS

/**
 * @function steam_input_activate_action_set
 * @description > **Steamworks Function**: [ISteamInput::ActivateActionSet](https://partner.steamgames.com/doc/api/ISteamInput#ActivateActionSet)
 *
 * This function reconfigures the controller to use the specified action set (i.e. "Menu", "Walk", or "Drive").
 * 
 * This is cheap, and can be safely called repeatedly. It's often easier to repeatedly call it in your state loops, instead of trying to place it in all of your state transitions.
 *
 * @param {Real} input_handle The handle of the controller you want to activate an action set for.
 * @param {Real} action_set_handle The handle of the action set you want to activate.
 * @function_end
 */

/**
 * @function steam_input_activate_action_set_layer
 * @description > **Steamworks Function**: [ISteamInput::ActivateActionSetLayer](https://partner.steamgames.com/doc/api/ISteamInput#ActivateActionSetLayer)
 *
 * This function reconfigures the controller to use the specified action set layer.
 * 
 * See the [Action Set Layers](https://partner.steamgames.com/doc/features/steam_controller/action_set_layers) article for full details and an in-depth practical example.
 *
 * @param {Real} input_handle The handle of the controller you want to activate an action set layer for.
 * @param {Real} action_set_layer_handle The handle of the action set layer you want to activate.
 * @function_end
 */

/**
 * @function steam_input_deactivate_action_set_layer
 * @description > **Steamworks Function**: [ISteamInput::DeactivateActionSetLayer](https://partner.steamgames.com/doc/api/ISteamInput#DeactivateActionSetLayer)
 *
 * This function reconfigures the controller to stop using the specified action set layer.
 *
 * @param {Real} input_handle The handle of the controller you want to deactivate an action set layer for.
 * @param {Real} action_set_layer_handle The handle of the action set layer you want to deactivate.
 * @function_end
 */

/**
 * @function steam_input_deactivate_all_action_set_layers
 * @description > **Steamworks Function**: [ISteamInput::DeactivateAllActionSetLayers](https://partner.steamgames.com/doc/api/ISteamInput#DeactivateAllActionSetLayers)
 *
 * This function reconfigures the controller to stop using all action set layers.
 *
 * @param {Real} input_handle The handle of the controller you want to deactivate all action set layers for.
 * @function_end
 */

/**
 * @function steam_input_get_active_action_set_layers
 * @description > **Steamworks Function**: [ISteamInput::GetActiveActionSetLayers](https://partner.steamgames.com/doc/api/ISteamInput#GetActiveActionSetLayers)
 *
 * This function fills an array with all of the currently active action set layers for a specified controller handle.
 *
 * @param {Real} input_handle The handle of the controller you want to get active action set layers for.
 * @returns {Array[Real]}
 * @function_end
 */

/**
 * @function steam_input_get_action_set_handle
 * @description > **Steamworks Function**: [ISteamInput::GetActionSetHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetActionSetHandle)
 *
 * This function looks up the handle for an action set.
 *
 * @param {String} action_set_name The string identifier of an action set defined in the game's VDF file.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_analog_action_data
 * @description > **Steamworks Function**: [ISteamInput::GetAnalogActionData](https://partner.steamgames.com/doc/api/ISteamInput#GetAnalogActionData)
 *
 * This function returns the current state of the supplied analog game action.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} analog_action_handle The handle of the analog action you want to query.
 * @returns {Struct.SteamInputAnalogActionData} 
 * @function_end
 */

/**
 * @function steam_input_get_analog_action_handle
 * @description > **Steamworks Function**: [ISteamInput::GetAnalogActionHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetAnalogActionHandle)
 *
 * This function gets the handle of the specified analog action.
 * 
 * [[Note: This function does not take an action set handle parameter. That means that each action in your VDF file must have a unique string identifier. In other words, if you use an action called "up" in two different action sets, this function will only ever return one of them and the other will be ignored.]]
 *
 * @param {String} action_name The string identifier of the analog action defined in the game's VDF file.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_analog_action_origins
 * @description > **Steamworks Function**: [ISteamInput::GetAnalogActionOrigins](https://partner.steamgames.com/doc/api/ISteamInput#GetAnalogActionOrigins)
 *
 * This function gets the origin(s) for an analog action within an action set. Use this to display the appropriate on-screen prompt for the action.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} action_set_handle The handle of the action set you want to query.
 * @param {Real} analog_action_handle The handle of the analog action you want to query.
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end
 */

/**
 * @function steam_input_get_glyph_png_for_action_origin
 * @description > **Steamworks Function**: [ISteamInput::GetGlyphPNGForActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetGlyphPNGForActionOrigin)
 *
 * This function gets a local path to a PNG file for the on-screen glyph for a particular origin.
 *
 * @param {Enum.SteamInputActionOrigin} origin The action origin you want to get the glyph image for.
 * @param {Enum.SteamInputGlyphSize} size The size of the PNG glyph to retrieve, from the ${constant.SteamInputGlyphSize} enum.
 * @param {Enum.SteamInputGlyphStyle} flags A bit-masked combination of glyph style flags (${constant.SteamInputGlyphStyle}) that control the visual appearance of the returned glyph.
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_input_get_glyph_svg_for_action_origin
 * @description > **Steamworks Function**: [ISteamInput::GetGlyphSVGForActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetGlyphSVGForActionOrigin)
 *
 * This function gets a local path to an SVG file for the on-screen glyph for a particular origin.
 *
 * @param {Enum.SteamInputActionOrigin} origin The action origin you want to get the glyph image for.
 * @param {Enum.SteamInputGlyphStyle} flags A bit-masked combination of glyph style flags (${constant.SteamInputGlyphStyle}) that control the visual appearance of the returned glyph.
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_input_get_connected_controllers
 * @description > **Steamworks Function**: [ISteamInput::GetConnectedControllers](https://partner.steamgames.com/doc/api/ISteamInput#GetConnectedControllers)
 *
 * This function enumerates currently connected controllers.
 *
 * @returns {Array[Real]}
 * @function_end
 */

/**
 * @function steam_input_get_controller_for_gamepad_index
 * @description > **Steamworks Function**: [ISteamInput::GetControllerForGamepadIndex](https://partner.steamgames.com/doc/api/ISteamInput#GetControllerForGamepadIndex)
 *
 * This function returns the associated controller handle for the specified emulated gamepad. Can be used with ${function.steam_input_get_input_type_for_handle} to determine the type of controller using Steam Input Gamepad Emulation.
 *
 * @param {Real} index The index of the emulated gamepad you want to get a controller handle for.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_current_action_set
 * @description > **Steamworks Function**: [ISteamInput::GetCurrentActionSet](https://partner.steamgames.com/doc/api/ISteamInput#GetCurrentActionSet)
 *
 * This function gets the currently active action set for the specified controller.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_digital_action_data
 * @description > **Steamworks Function**: [ISteamInput::GetDigitalActionData](https://partner.steamgames.com/doc/api/ISteamInput#GetDigitalActionData)
 *
 * This function returns the current state of the supplied digital game action.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} digital_action_handle The handle of the digital action you want to query.
 * @returns {Struct.SteamInputDigitalActionData} 
 * @function_end
 */

/**
 * @function steam_input_get_digital_action_handle
 * @description > **Steamworks Function**: [ISteamInput::GetDigitalActionHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetDigitalActionHandle)
 *
 * This function gets the handle of the specified digital action.
 *
 * @param {String} action_name The string identifier of the digital action defined in the game's VDF file.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_digital_action_origins
 * @description > **Steamworks Function**: [ISteamInput::GetDigitalActionOrigins](https://partner.steamgames.com/doc/api/ISteamInput#GetDigitalActionOrigins)
 *
 * This function gets the origin(s) for a digital action within an action set.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} action_set_handle The handle of the action set you want to query.
 * @param {Real} digital_action_handle The handle of the digital action you want to query.
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end
 */

/**
 * @function steam_input_get_gamepad_index_for_controller
 * @description > **Steamworks Function**: [ISteamInput::GetGamepadIndexForController](https://partner.steamgames.com/doc/api/ISteamInput#GetGamepadIndexForController)
 *
 * This function returns the associated gamepad index for the specified controller, if emulating a gamepad.
 *
 * @param {Real} input_handle The handle of the controller you want to get a gamepad index for.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_input_type_for_handle
 * @description > **Steamworks Function**: [ISteamInput::GetInputTypeForHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetInputTypeForHandle)
 *
 * This function returns the input type (device model) for the specified controller. This tells you if a given controller is a Steam controller, Xbox 360 controller, PS4 controller, etc.
 *
 * @param {Real} input_handle The handle of the controller whose input type (device model) you want to query.
 * @returns {Enum.SteamInputType}
 * @function_end
 */

/**
 * @function steam_input_get_motion_data
 * @description > **Steamworks Function**: [ISteamInput::GetMotionData](https://partner.steamgames.com/doc/api/ISteamInput#GetMotionData)
 *
 * This function returns raw motion data for the specified controller.
 *
 * @param {Real} input_handle The handle of the controller you want to get motion data for.
 * @returns {Struct.SteamInputMotionData} 
 * @function_end
 */

/**
 * @function steam_input_get_string_for_action_origin
 * @description > **Steamworks Function**: [ISteamInput::GetStringForActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetStringForActionOrigin)
 *
 * This function returns a localised string (from Steam's language setting) for the specified origin.
 *
 * @param {Enum.SteamInputActionOrigin} origin The action origin you want to get the localised string for.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_input_init
 * @description > **Steamworks Function**: [ISteamInput::Init](https://partner.steamgames.com/doc/api/ISteamInput#Init)
 *
 * This function must be called when starting use of the [ISteamInput](https://partner.steamgames.com/doc/api/ISteamInput) interface.
 *
 * @param {Bool} explicitly_call_run_frame Set to `true` if you intend to call ${function.steam_input_run_frame} manually instead of having it called automatically.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_input_run_frame
 * @description > **Steamworks Function**: [ISteamInput::RunFrame](https://partner.steamgames.com/doc/api/ISteamInput#RunFrame)
 *
 * This function synchronises API state with the latest Steam Controller inputs available. This is performed automatically by ${function.steam_api_run_callbacks}, but for the absolute lowest possible latency, you can call this directly before reading controller state.
 *
 * @function_end
 */

/**
 * @function steam_input_set_dualsense_trigger_effect
 * @description > **Steamworks Function**: [ISteamInput::SetDualSenseTriggerEffect](https://partner.steamgames.com/doc/api/ISteamInput#SetDualSenseTriggerEffect)
 *
 * This function sets the trigger effect for a DualSense controller.
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Array[Real]} param The trigger parameters, as defined in isteamdualsense.h.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_input_set_led_color
 * @description > **Steamworks Function**: [ISteamInput::SetLEDColor](https://partner.steamgames.com/doc/api/ISteamInput#SetLEDColor)
 *
 * This function sets the controller LED color on supported controllers.
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} color_r The red component of the color to set (0-255).
 * @param {Real} color_g The green component of the color to set (0-255).
 * @param {Real} color_b The blue component of the color to set (0-255).
 * @param {Enum.SteamInputControllerLEDFlag} flags Bit-masked flags combined from values defined in the ${constant.SteamInputControllerLEDFlag} enum.
 * @function_end
 */

/**
 * @function steam_input_show_binding_panel
 * @description > **Steamworks Function**: [ISteamInput::ShowBindingPanel](https://partner.steamgames.com/doc/api/ISteamInput#ShowBindingPanel)
 *
 * This function invokes the Steam overlay and brings up the binding screen.
 *
 * @param {Real} input_handle The handle of the controller you want to bring up the binding screen for.
 * @returns {Bool} `true` for success; `false` if overlay is disabled/unavailable. If the player is using Big Picture Mode the configuration will open in the overlay. In desktop mode a popup window version of Big Picture will be created and open the configuration.
 * @function_end
 */

/**
 * @function steam_input_shutdown
 * @description > **Steamworks Function**: [ISteamInput::Shutdown](https://partner.steamgames.com/doc/api/ISteamInput#Shutdown)
 *
 * This function must be called when ending use of the [ISteamInput](https://partner.steamgames.com/doc/api/ISteamInput) interface.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_input_stop_analog_action_momentum
 * @description > **Steamworks Function**: [ISteamInput::StopAnalogActionMomentum](https://partner.steamgames.com/doc/api/ISteamInput#StopAnalogActionMomentum)
 *
 * This function stops the momentum of an analog action (where applicable, i.e. a touchpad w/ virtual trackball settings).
 * 
 * [[Note: This will also stop all associated haptics. This is useful for situations where you want to indicate to the user that the limit of an action has been reached, such as spinning a carousel or scrolling a webpage.]]
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} analog_action_handle The handle of the analog action to stop momentum for.
 * @function_end
 */

/**
 * @function steam_input_trigger_vibration
 * @description > **Steamworks Function**: [ISteamInput::TriggerVibration](https://partner.steamgames.com/doc/api/ISteamInput#TriggerVibration)
 *
 * This function triggers a vibration event on supported controllers.
 * 
 * [[Notes: 
 * 
 * * This API call will be ignored for incompatible controller models.
 * * This generates the traditional "rumble" vibration effect.
 * * The VSC will emulate traditional rumble using its haptics.]]
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} left_speed The intensity value for the left rumble motor.
 * @param {Real} right_speed The intensity value of the right rumble motor.
 * @function_end
 */

/**
 * @function steam_input_trigger_vibration_extended
 * @description > **Steamworks Function**: [ISteamInput::TriggerVibrationExtended](https://partner.steamgames.com/doc/api/ISteamInput#TriggerVibrationExtended)
 *
 * This function triggers a vibration event on supported controllers, including Xbox Impulse Trigger motor values.
 * 
 * [[Notes: On Windows support for Xbox Impulse Trigger motor values requires user installation of the Xbox Extended Feature support driver. The Steam Controller and Steam Deck will emulate traditional rumble using their haptics.]]
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} left_speed The intensity value for the left rumble motor.
 * @param {Real} right_speed The intensity value of the right rumble motor.
 * @param {Real} left_trigger_speed The intensity value for the left Xbox Impulse Trigger motor.
 * @param {Real} right_trigger_speed The intensity value of the right Xbox Impulse Trigger motor.
 * @function_end
 */

/**
 * @function steam_input_get_action_origin_from_xbox_origin
 * @description > **Steamworks Function**: [ISteamInput::GetActionOriginFromXboxOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetActionOriginFromXboxOrigin)
 *
 * This function gets an action origin that you can use in your glyph look up table or passed into ${function.steam_input_get_glyph_png_for_action_origin}, ${function.steam_input_get_glyph_svg_for_action_origin} or ${function.steam_input_get_string_for_action_origin}.
 *
 * @param {Real} input_handle The handle of the controller to query. You can use ${function.steam_input_get_controller_for_gamepad_index} to get this handle.
 * @param {Enum.SteamInputXboxOrigin} origin The Xbox button you want to get the image for, e.g. `SteamInputXboxOrigin.A`.
 * @returns {Enum.SteamInputActionOrigin}
 * @function_end
 */

/**
 * @function steam_input_translate_action_origin
 * @description > **Steamworks Function**: [ISteamInput::TranslateActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#TranslateActionOrigin)
 *
 * This function gets the equivalent origin for a given controller type.
 *
 * @param {Enum.SteamInputType} destination_input_type The controller type you want to translate to. Steam will pick the closest type from your SDK version if `SteamInputType.Unknown` is used.
 * @param {Enum.SteamInputActionOrigin} source_origin The button you want to translate.
 * @returns {Enum.SteamInputActionOrigin}
 * @function_end
 */

/**
 * @function steam_input_get_device_binding_revision
 * @description > **Steamworks Function**: [ISteamInput::GetDeviceBindingRevision](https://partner.steamgames.com/doc/api/ISteamInput#GetDeviceBindingRevision)
 *
 * This function gets the major and minor device binding revisions for Steam Input API configurations.
 *
 * @param {Real} input_handle The handle of the controller to query.
 * @returns {Struct.SteamInputDeviceBindingRevision} 
 * @function_end
 */

/**
 * @function steam_input_get_remote_play_session_id
 * @description > **Steamworks Function**: [ISteamInput::GetRemotePlaySessionID](https://partner.steamgames.com/doc/api/ISteamInput#GetRemotePlaySessionID)
 *
 * This function gets the Steam Remote Play session ID associated with a device, or 0 if there is no session associated with it.
 *
 * @param {Real} input_handle The handle of the controller to query.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_set_callback_device_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when an new device connects.
 * 
 * See: ${struct.SteamInputDeviceEvent}
 *
 * @param {Function} callback The function to be called when an input device is connected.
 * @function_end
 */

/**
 * @function steam_input_clear_callback_device_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_input_set_callback_device_connected}.
 *
 * @function_end
 */

/**
 * @function steam_input_set_callback_device_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a device disconnects.
 * 
 * See: ${struct.SteamInputDeviceEvent}
 *
 * @param {Function} callback The function to be called when an input device is disconnected.
 * @function_end
 */

/**
 * @function steam_input_clear_callback_device_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_input_clear_callback_device_disconnected}.
 *
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamInputAnalogActionData
 * @description > **Steamworks Struct**: [ISteamInput::InputAnalogActionData_t](https://partner.steamgames.com/doc/api/ISteamInput#InputAnalogActionData_t)
 *
 * This struct holds the current state of an analog action.
 *
 * @member {Enum.SteamInputControllerSourceMode} mode The type of data coming from this action, this will match what was specified in the action set's VDF definition.
 * @member {Real} x The current state of this action on the horizontal axis.
 * @member {Real} y The current state of this action on the vertical axis.
 * @member {Bool} active Whether or not this action is currently available to be bound in the active action set. If it is not available, OR does not belong to the active action set, this will be `false`.
 * @struct_end
 */

/**
 * @struct SteamInputDigitalActionData
 * @description > **Steamworks Struct**: [ISteamInput:InputDigitalActionData_t](partner.steamgames.com/doc/api/ISteamInput#InputDigitalActionData_t)
 *
 * This struct holds the current state of a digital action.
 *
 * @member {Bool} state The current state of this action; `true` if the action is currently pressed, otherwise `false`.
 * @member {Bool} active Whether or not this action is currently available to be bound in the active action set.
 * @struct_end
 */

/**
 * @struct SteamInputMotionData
 * @description > **Steamworks Struct**: [ISteamInput::InputMotionData_t](partner.steamgames.com/doc/api/ISteamInput#InputMotionData_t)
 *
 * This struct holds the current state of a device's motion sensor(s).
 *
 * @member {Real} rot_quat_x Sensor-fused absolute rotation (will drift in heading), x axis.
 * @member {Real} rot_quat_y Sensor-fused absolute rotation (will drift in heading), y axis.
 * @member {Real} rot_quat_z Sensor-fused absolute rotation (will drift in heading), z axis.
 * @member {Real} rot_quat_w Sensor-fused absolute rotation (will drift in heading), w axis.
 * @member {Real} pos_accel_x Positional acceleration, x axis.
 * @member {Real} pos_accel_y Positional acceleration, y axis.
 * @member {Real} pos_accel_z Positional acceleration, z axis.
 * @member {Real} rot_vel_x Angular velocity, x axis.
 * @member {Real} rot_vel_y Angular velocity, y axis.
 * @member {Real} rot_vel_z Angular velocity, z axis.
 * @struct_end
 */

/**
 * @struct SteamInputActionOrigins
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_input_get_analog_action_origins} and ${function.steam_input_get_digital_action_origins}.
 * 
 * @member {Array[Enum.SteamInputActionOrigin]} origins An array of action origins.
 * @struct_end
 */

/**
 * @struct SteamInputDeviceBindingRevision
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_input_get_device_binding_revision}.
 * 
 * @member {Real} major Major binding revision.
 * @member {Real} minor Minor binding revision.
 * @struct_end
 */

/**
 * @struct SteamInputDeviceEvent
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the handle of the controller that connected (in device connected callback, `SteamInputDeviceConnected_t`) or disconnected (in device disconnected callback, `SteamInputDeviceDisconnected_t`).
 * 
 * See: ${function.steam_input_run_frame}, ${function.steam_input_set_callback_device_connected}, ${function.steam_input_set_callback_device_disconnected}
 *
 * @member {Real} controller_handle The controller handle.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamInputControllerSourceMode
 * @description > **Steamworks Enum**: [ISteamInput::EControllerSourceMode](https://partner.steamgames.com/doc/api/isteaminput#EControllerSourceMode)
 * 
 * This enum's members describe the virtual input mode imposed by the configurator upon a controller source. For instance, the configurator can make an analog joystick behave like a Dpad with four digital inputs; the controller source would be `SteamInputControllerSource.Joystick` and the controller source mode would be `SteamInputControllerSourceMode.Dpad`. The mode also changes the input data received by any associated actions.
 * 
 * @member None No input mode.
 * @member Dpad A digital pad -- four digital directional buttons fused together in a cross pattern, such that only one button from each axis can be pressed at any given time.
 * @member Buttons Buttons.
 * @member FourButtons Four digital face buttons, any of which can be pressed simultaneously
 * @member AbsoluteMouse AbsoluteMouse.
 * @member RelativeMouse RelativeMouse.
 * @member JoystickMove JoystickMove.
 * @member JoystickMouse JoystickMouse.
 * @member JoystickCamera JoystickCamera.
 * @member ScrollWheel ScrollWheel.
 * @member Trigger Trigger.
 * @member TouchMenu TouchMenu.
 * @member MouseJoystick MouseJoystick.
 * @member MouseRegion MouseRegion.
 * @member RadialMenu RadialMenu.
 * @member SingleButton SingleButton.
 * @member Switches Switches.
 * @enum_end
 */

/**
 * @enum SteamInputControllerLEDFlag
 * @description > **Steamworks Enum**: [ISteamInput::ESteamControllerLEDFlag](https://partner.steamgames.com/doc/api/ISteamInput#ESteamControllerLEDFlag)
 * 
 * This enum controls the color of a Steam Controller Device's LED (if the device indeed has one).
 * 
 * @member SetColor Set the color to the specified values.
 * @member RestoreUserDefault Restore the color to default (out-of-game) settings.
 * @enum_end
 */

/**
 * @enum SteamInputGlyphSize
 * @description > **Steamworks Enum**: [ESteamInputGlyphSize]()
 * 
 * This enum holds the different glyph sizes.
 * 
 * @member Small 32x32 pixels.
 * @member Medium 128x128 pixels.
 * @member Large 256x256 pixels.
 * @member Count Count.
 * @enum_end
 */

/**
 * @enum SteamInputGlyphStyle
 * @description > **Steamworks Enum**: [ESteamInputGlyphStyle]()
 * 
 * This enum holds the different glyph styles that you can use.
 * 
 * @member Knockout Face buttons will have colored labels/outlines on a knocked out background. Rest of inputs will have white detail/borders on a knocked out background.
 * @member Light Black detail/borders on a white background.
 * @member Dark White detail/borders on a black background.
 * @member NeutralColorABXY ABXY Buttons will match the base style color instead of their normal associated color.
 * @member SolidABXY ABXY Buttons will have a solid fill.
 * @enum_end
 */

/**
 * @enum SteamInputType
 * @description > **Steamworks Enum**: [ISteamInput::ESteamInputType](https://partner.steamgames.com/doc/api/ISteamInput#ESteamInputType)
 * 
 * This enum represents the device model for a given piece of hardware.
 * 
 * @member Unknown Catch-all for unrecognized devices.
 * @member SteamController Valve's Steam Controller.
 * @member XBox360Controller Microsoft's XBox 360 Controller.
 * @member XBoxOneController Microsoft's XBox One Controller.
 * @member GenericGamepad Any generic 3rd-party XInput device.
 * @member PS4Controller Sony's PlayStation 4 Controller.
 * @member AppleMFiController Unused.
 * @member AndroidController Unused.
 * @member SwitchJoyConPair Unused.
 * @member SwitchJoyConSingle Unused.
 * @member SwitchProController Nintendo's Switch Pro Controller.
 * @member MobileTouch Steam Link App's Mobile Touch Controller.
 * @member PS3Controller Sony's PlayStation 3 Controller or PS3/PS4 compatible fight stick.
 * @member PS5Controller Sony's PlayStation 5 Controller.
 * @member SteamDeckController Steam Deck controller.
 * @member Count Current number of values returned.
 * @member MaximumPossibleValue Maximum possible value returned.
 * @enum_end
 */

/**
 * @enum SteamInputXboxOrigin
 * @desc > **Steamworks Enum**: [EXboxOrigin]()
 * 
 * This enum holds Xbox action origins.
 * 
 * @member A A.
 * @member B B.
 * @member X X.
 * @member Y Y.
 * @member LeftBumper LeftBumper.
 * @member RightBumper RightBumper.
 * @member Menu Menu.
 * @member View View.
 * @member LeftTrigger_Pull LeftTrigger_Pull.
 * @member LeftTrigger_Click LeftTrigger_Click.
 * @member RightTrigger_Pull RightTrigger_Pull.
 * @member RightTrigger_Click RightTrigger_Click.
 * @member LeftStick_Move LeftStick_Move.
 * @member LeftStick_Click LeftStick_Click.
 * @member LeftStick_DPadNorth LeftStick_DPadNorth.
 * @member LeftStick_DPadSouth LeftStick_DPadSouth.
 * @member LeftStick_DPadWest LeftStick_DPadWest.
 * @member LeftStick_DPadEast LeftStick_DPadEast.
 * @member RightStick_Move RightStick_Move.
 * @member RightStick_Click RightStick_Click.
 * @member RightStick_DPadNorth RightStick_DPadNorth.
 * @member RightStick_DPadSouth RightStick_DPadSouth.
 * @member RightStick_DPadWest RightStick_DPadWest.
 * @member RightStick_DPadEast RightStick_DPadEast.
 * @member DPad_North DPad_North.
 * @member DPad_South DPad_South.
 * @member DPad_West DPad_West.
 * @member DPad_East DPad_East.
 * @member Count Count.
 * @enum_end 
 */

/**
 * @enum SteamInputActionOrigin
 * @description > **Steamworks Enum**: [ISteamInput::EInputActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#EInputActionOrigin)
 * 
 * This enum inputs the player binds to actions in the Steam Input Configurator. The chief purpose of these values is to direct which on-screen button glyphs should appear for a given action, such as "Press [A] to Jump".
 * 
 * @member None None.
 * @member SteamController_A (Valve Steam Controller) digital face button A.
 * @member SteamController_B (Valve Steam Controller) digital face button B.
 * @member SteamController_X (Valve Steam Controller) digital face button X.
 * @member SteamController_Y (Valve Steam Controller) digital face button Y.
 * @member SteamController_LeftBumper (Valve Steam Controller) digital left shoulder button (aka left bumper).
 * @member SteamController_RightBumper (Valve Steam Controller) digital right shoulder button (aka right bumper).
 * @member SteamController_LeftGrip (Valve Steam Controller) digital left grip paddle.
 * @member SteamController_RightGrip (Valve Steam Controller) digital right grip paddle.
 * @member SteamController_Start (Valve Steam Controller) digital start button.
 * @member SteamController_Back (Valve Steam Controller) digital back button.
 * @member SteamController_LeftPad_Touch (Valve Steam Controller) left haptic touchpad, in simple contact with a finger.
 * @member SteamController_LeftPad_Swipe (Valve Steam Controller) left haptic touchpad, touch input on any axis.
 * @member SteamController_LeftPad_Click (Valve Steam Controller) left haptic touchpad, digital click (for the whole thing).
 * @member SteamController_LeftPad_DPadNorth (Valve Steam Controller) left haptic touchpad, digital click (upper quadrant).
 * @member SteamController_LeftPad_DPadSouth (Valve Steam Controller) left haptic touchpad, digital click (lower quadrant).
 * @member SteamController_LeftPad_DPadWest (Valve Steam Controller) left haptic touchpad, digital click (left quadrant).
 * @member SteamController_LeftPad_DPadEast (Valve Steam Controller) left haptic touchpad, digital click (right quadrant).
 * @member SteamController_RightPad_Touch (Valve Steam Controller) right haptic touchpad, in simple contact with a finger.
 * @member SteamController_RightPad_Swipe (Valve Steam Controller) right haptic touchpad, touch input on any axis.
 * @member SteamController_RightPad_Click (Valve Steam Controller) right haptic touchpad, digital click (for the whole thing).
 * @member SteamController_RightPad_DPadNorth (Valve Steam Controller) right haptic touchpad, digital click (upper quadrant).
 * @member SteamController_RightPad_DPadSouth (Valve Steam Controller) right haptic touchpad, digital click (lower quadrant).
 * @member SteamController_RightPad_DPadWest (Valve Steam Controller) right haptic touchpad, digital click (left quadrant).
 * @member SteamController_RightPad_DPadEast (Valve Steam Controller) right haptic touchpad, digital click (right quadrant).
 * @member SteamController_LeftTrigger_Pull (Valve Steam Controller) left analog trigger, pulled by any amount (analog value).
 * @member SteamController_LeftTrigger_Click (Valve Steam Controller) left analog trigger, pulled in all the way (digital value).
 * @member SteamController_RightTrigger_Pull (Valve Steam Controller) right analog trigger, pulled by any amount (analog value).
 * @member SteamController_RightTrigger_Click (Valve Steam Controller) right analog trigger, pulled in all the way (digital value).
 * @member SteamController_LeftStick_Move (Valve Steam Controller) left joystick, movement on any axis (analog value).
 * @member SteamController_LeftStick_Click (Valve Steam Controller) left joystick, clicked in (digital value).
 * @member SteamController_LeftStick_DPadNorth (Valve Steam Controller) left joystick, digital movement (upper quadrant).
 * @member SteamController_LeftStick_DPadSouth (Valve Steam Controller) left joystick, digital movement (lower quadrant).
 * @member SteamController_LeftStick_DPadWest (Valve Steam Controller) left joystick, digital movement (left quadrant).
 * @member SteamController_LeftStick_DPadEast (Valve Steam Controller) left joystick, digital movement (right quadrant).
 * @member SteamController_Gyro_Move (Valve Steam Controller) gyroscope, analog movement in any axis.
 * @member SteamController_Gyro_Pitch (Valve Steam Controller) gyroscope, analog movement on the Pitch axis (point head up to ceiling, point head down to floor).
 * @member SteamController_Gyro_Yaw (Valve Steam Controller) gyroscope, analog movement on the Yaw axis (turn head left to face one wall, turn head right to face other).
 * @member SteamController_Gyro_Roll (Valve Steam Controller) gyroscope, analog movement on the Roll axis (tilt head left towards shoulder, tilt head right towards other).
 * @member SteamController_Reserved0 Reserved for future use.
 * @member SteamController_Reserved1 Reserved for future use.
 * @member SteamController_Reserved2 Reserved for future use.
 * @member SteamController_Reserved3 Reserved for future use.
 * @member SteamController_Reserved4 Reserved for future use.
 * @member SteamController_Reserved5 Reserved for future use.
 * @member SteamController_Reserved6 Reserved for future use.
 * @member SteamController_Reserved7 Reserved for future use.
 * @member SteamController_Reserved8 Reserved for future use.
 * @member SteamController_Reserved9 Reserved for future use.
 * @member SteamController_Reserved10 Reserved for future use.
 * @member PS4_X (Sony Dualshock 4) digital face button X.
 * @member PS4_Circle (Sony Dualshock 4) digital face button Circle.
 * @member PS4_Triangle (Sony Dualshock 4) digital face button Triangle.
 * @member PS4_Square (Sony Dualshock 4) digital face button Square.
 * @member PS4_LeftBumper (Sony Dualshock 4) digital left shoulder button (aka left bumper).
 * @member PS4_RightBumper (Sony Dualshock 4) digital right shoulder button (aka right bumper).
 * @member PS4_Options (Sony Dualshock 4) digital options button (aka Start).
 * @member PS4_Share (Sony Dualshock 4) digital share button (aka Back).
 * @member PS4_LeftPad_Touch (Sony Dualshock 4) left half of the touchpad, in simple contact with a finger.
 * @member PS4_LeftPad_Swipe (Sony Dualshock 4) left half of the touchpad, touch input on any axis.
 * @member PS4_LeftPad_Click (Sony Dualshock 4) left half of the touchpad, digital click (for the whole thing).
 * @member PS4_LeftPad_DPadNorth (Sony Dualshock 4) left half of the touchpad, digital click (upper quadrant).
 * @member PS4_LeftPad_DPadSouth (Sony Dualshock 4) left half of the touchpad, digital click (lower quadrant).
 * @member PS4_LeftPad_DPadWest (Sony Dualshock 4) left half of the touchpad, digital click (left quadrant).
 * @member PS4_LeftPad_DPadEast (Sony Dualshock 4) left half of the touchpad, digital click (right quadrant).
 * @member PS4_RightPad_Touch (Sony Dualshock 4) right half of the touchpad, in simple contact with a finger.
 * @member PS4_RightPad_Swipe (Sony Dualshock 4) right half of the touchpad, touch input on any axis.
 * @member PS4_RightPad_Click (Sony Dualshock 4) right half of the touchpad, digital click (for the whole thing).
 * @member PS4_RightPad_DPadNorth (Sony Dualshock 4) right half of the touchpad, digital click (upper quadrant).
 * @member PS4_RightPad_DPadSouth (Sony Dualshock 4) right half of the touchpad, digital click (lower quadrant).
 * @member PS4_RightPad_DPadWest (Sony Dualshock 4) right half of the touchpad, digital click (left quadrant).
 * @member PS4_RightPad_DPadEast (Sony Dualshock 4) right half of the touchpad, digital click (right quadrant).
 * @member PS4_CenterPad_Touch (Sony Dualshock 4) unified touchpad, in simple contact with a finger.
 * @member PS4_CenterPad_Swipe (Sony Dualshock 4) unified touchpad, touch input on any axis.
 * @member PS4_CenterPad_Click (Sony Dualshock 4) unified touchpad, digital click (for the whole thing).
 * @member PS4_CenterPad_DPadNorth (Sony Dualshock 4) unified touchpad, digital click (upper quadrant).
 * @member PS4_CenterPad_DPadSouth (Sony Dualshock 4) unified touchpad, digital click (lower quadrant).
 * @member PS4_CenterPad_DPadWest (Sony Dualshock 4) unified touchpad, digital click (left quadrant).
 * @member PS4_CenterPad_DPadEast (Sony Dualshock 4) unified touchpad, digital click (right quadrant).
 * @member PS4_LeftTrigger_Pull (Sony Dualshock 4) left analog trigger, pulled by any amount (analog value).
 * @member PS4_LeftTrigger_Click (Sony Dualshock 4) left analog trigger, pulled in all the way (digital value).
 * @member PS4_RightTrigger_Pull (Sony Dualshock 4) right analog trigger, pulled by any amount (analog value).
 * @member PS4_RightTrigger_Click (Sony Dualshock 4) right analog trigger, pulled in all the way (digital value).
 * @member PS4_LeftStick_Move (Sony Dualshock 4) left joystick, movement on any axis (analog value).
 * @member PS4_LeftStick_Click (Sony Dualshock 4) left joystick, clicked in (digital value).
 * @member PS4_LeftStick_DPadNorth (Sony Dualshock 4) left joystick, digital movement (upper quadrant).
 * @member PS4_LeftStick_DPadSouth (Sony Dualshock 4) left joystick, digital movement (lower quadrant).
 * @member PS4_LeftStick_DPadWest (Sony Dualshock 4) left joystick, digital movement (left quadrant).
 * @member PS4_LeftStick_DPadEast (Sony Dualshock 4) left joystick, digital movement (right quadrant).
 * @member PS4_RightStick_Move (Sony Dualshock 4) right joystick, movement on any axis (analog value).
 * @member PS4_RightStick_Click (Sony Dualshock 4) right joystick, clicked in (digital value).
 * @member PS4_RightStick_DPadNorth (Sony Dualshock 4) right joystick, digital movement (upper quadrant).
 * @member PS4_RightStick_DPadSouth (Sony Dualshock 4) right joystick, digital movement (lower quadrant).
 * @member PS4_RightStick_DPadWest (Sony Dualshock 4) right joystick, digital movement (left quadrant).
 * @member PS4_RightStick_DPadEast (Sony Dualshock 4) right joystick, digital movement (right quadrant).
 * @member PS4_DPad_North (Sony Dualshock 4) digital pad, pressed (upper quadrant).
 * @member PS4_DPad_South (Sony Dualshock 4) digital pad, pressed (lower quadrant).
 * @member PS4_DPad_West (Sony Dualshock 4) digital pad, pressed (left quadrant).
 * @member PS4_DPad_East (Sony Dualshock 4) digital pad, pressed (right quadrant).
 * @member PS4_Gyro_Move (Sony Dualshock 4) gyroscope, analog movement in any axis.
 * @member PS4_Gyro_Pitch (Sony Dualshock 4) gyroscope, analog movement on the Pitch axis (point head up to ceiling, point head down to floor).
 * @member PS4_Gyro_Yaw (Sony Dualshock 4) gyroscope, analog movement on the Yaw axis (turn head left to face one wall, turn head right to face other).
 * @member PS4_Gyro_Roll (Sony Dualshock 4) gyroscope, analog movement on the Roll axis (tilt head left towards shoulder, tilt head right towards other shoulder).
 * @member PS4_DPad_Move Reserved for future use.
 * @member PS4_Reserved1 Reserved for future use.
 * @member PS4_Reserved2 Reserved for future use.
 * @member PS4_Reserved3 Reserved for future use.
 * @member PS4_Reserved4 Reserved for future use.
 * @member PS4_Reserved5 Reserved for future use.
 * @member PS4_Reserved6 Reserved for future use.
 * @member PS4_Reserved7 Reserved for future use.
 * @member PS4_Reserved8 Reserved for future use.
 * @member PS4_Reserved9 Reserved for future use.
 * @member PS4_Reserved10 Reserved for future use.
 * @member XBoxOne_A (XB1) digital face button A.
 * @member XBoxOne_B (XB1) digital face button B.
 * @member XBoxOne_X (XB1) digital face button Cross.
 * @member XBoxOne_Y (XB1) digital face button Y.
 * @member XBoxOne_LeftBumper (XB1) digital left shoulder button (aka left bumper).
 * @member XBoxOne_RightBumper (XB1) digital right shoulder button (aka right bumper).
 * @member XBoxOne_Menu (XB1) digital menu button (aka start).
 * @member XBoxOne_View (XB1) digital view button (aka back).
 * @member XBoxOne_LeftTrigger_Pull (XB1) left analog trigger, pulled by any amount (analog value).
 * @member XBoxOne_LeftTrigger_Click (XB1) left analog trigger, pulled in all the way (digital value).
 * @member XBoxOne_RightTrigger_Pull (XB1) right analog trigger, pulled by any amount (analog value).
 * @member XBoxOne_RightTrigger_Click (XB1) right analog trigger, pulled in all the way (digital value).
 * @member XBoxOne_LeftStick_Move (XB1) left joystick, movement on any axis (analog value).
 * @member XBoxOne_LeftStick_Click (XB1) left joystick, clicked in (digital value).
 * @member XBoxOne_LeftStick_DPadNorth (XB1) left joystick, digital movement (upper quadrant).
 * @member XBoxOne_LeftStick_DPadSouth (XB1) left joystick, digital movement (lower quadrant).
 * @member XBoxOne_LeftStick_DPadWest (XB1) left joystick, digital movement (left quadrant).
 * @member XBoxOne_LeftStick_DPadEast (XB1) left joystick, digital movement (right quadrant).
 * @member XBoxOne_RightStick_Move (XB1) right joystick, movement on any axis (analog value).
 * @member XBoxOne_RightStick_Click (XB1) right joystick, clicked in (digital value).
 * @member XBoxOne_RightStick_DPadNorth (XB1) right joystick, digital movement (upper quadrant).
 * @member XBoxOne_RightStick_DPadSouth (XB1) right joystick, digital movement (lower quadrant).
 * @member XBoxOne_RightStick_DPadWest (XB1) right joystick, digital movement (left quadrant).
 * @member XBoxOne_RightStick_DPadEast (XB1) right joystick, digital movement (right quadrant).
 * @member XBoxOne_DPad_North (XB1) digital pad, pressed (upper quadrant).
 * @member XBoxOne_DPad_South (XB1) digital pad, pressed (lower quadrant).
 * @member XBoxOne_DPad_West (XB1) digital pad, pressed (left quadrant).
 * @member XBoxOne_DPad_East (XB1) digital pad, pressed (right quadrant).
 * @member XBoxOne_DPad_Move Reserved for future use.
 * @member XBoxOne_LeftGrip_Lower Reserved for future use.
 * @member XBoxOne_LeftGrip_Upper Reserved for future use.
 * @member XBoxOne_RightGrip_Lower Reserved for future use.
 * @member XBoxOne_RightGrip_Upper Reserved for future use.
 * @member XBoxOne_Share Reserved for future use.
 * @member XBoxOne_Reserved6 Reserved for future use.
 * @member XBoxOne_Reserved7 Reserved for future use.
 * @member XBoxOne_Reserved8 Reserved for future use.
 * @member XBoxOne_Reserved9 Reserved for future use.
 * @member XBoxOne_Reserved10 Reserved for future use.
 * @member XBox360_A (X360) digital face button A.
 * @member XBox360_B (X360) digital face button B.
 * @member XBox360_X (X360) digital face button X.
 * @member XBox360_Y (X360) digital face button Y.
 * @member XBox360_LeftBumper (X360) digital left shoulder button (aka left bumper).
 * @member XBox360_RightBumper (X360) digital right shoulder button (aka right bumper).
 * @member XBox360_Start (X360) digital start button.
 * @member XBox360_Back (X360) digital back button.
 * @member XBox360_LeftTrigger_Pull (X360) left analog trigger, pulled by any amount (analog value).
 * @member XBox360_LeftTrigger_Click (X360) left analog trigger, pulled in all the way (digital value).
 * @member XBox360_RightTrigger_Pull (X360) right analog trigger, pulled by any amount (analog value).
 * @member XBox360_RightTrigger_Click (X360) right analog trigger, pulled in all the way (digital value).
 * @member XBox360_LeftStick_Move (X360) left joystick, movement on any axis (analog value).
 * @member XBox360_LeftStick_Click (X360) left joystick, clicked in (digital value).
 * @member XBox360_LeftStick_DPadNorth (X360) left joystick, digital movement (upper quadrant).
 * @member XBox360_LeftStick_DPadSouth (X360) left joystick, digital movement (lower quadrant).
 * @member XBox360_LeftStick_DPadWest (X360) left joystick, digital movement (left quadrant).
 * @member XBox360_LeftStick_DPadEast (X360) left joystick, digital movement (right quadrant).
 * @member XBox360_RightStick_Move (X360) right joystick, movement on any axis (analog value).
 * @member XBox360_RightStick_Click (X360) right joystick, clicked in (digital value).
 * @member XBox360_RightStick_DPadNorth (X360) right joystick, digital movement (upper quadrant).
 * @member XBox360_RightStick_DPadSouth (X360) right joystick, digital movement (lower quadrant).
 * @member XBox360_RightStick_DPadWest (X360) right joystick, digital movement (left quadrant).
 * @member XBox360_RightStick_DPadEast (X360) right joystick, digital movement (right quadrant).
 * @member XBox360_DPad_North (X360) digital pad, pressed (upper quadrant).
 * @member XBox360_DPad_South (X360) digital pad, pressed (lower quadrant).
 * @member XBox360_DPad_West (X360) digital pad, pressed (left quadrant).
 * @member XBox360_DPad_East (X360) digital pad, pressed (right quadrant).
 * @member XBox360_DPad_Move Reserved for future use.
 * @member XBox360_Reserved1 Reserved for future use.
 * @member XBox360_Reserved2 Reserved for future use.
 * @member XBox360_Reserved3 Reserved for future use.
 * @member XBox360_Reserved4 Reserved for future use.
 * @member XBox360_Reserved5 Reserved for future use.
 * @member XBox360_Reserved6 Reserved for future use.
 * @member XBox360_Reserved7 Reserved for future use.
 * @member XBox360_Reserved8 Reserved for future use.
 * @member XBox360_Reserved9 Reserved for future use.
 * @member XBox360_Reserved10 Reserved for future use.
 * @member Switch_A (Nintendo Switch Pro) digital face button A.
 * @member Switch_B (Nintendo Switch Pro) digital face button B.
 * @member Switch_X (Nintendo Switch Pro) digital face button X.
 * @member Switch_Y (Nintendo Switch Pro) digital face button Y.
 * @member Switch_LeftBumper (Nintendo Switch Pro) digital left shoulder button (aka left bumper).
 * @member Switch_RightBumper (Nintendo Switch Pro) digital right shoulder button (aka right bumper).
 * @member Switch_Plus (Nintendo Switch Pro) plus button.
 * @member Switch_Minus (Nintendo Switch Pro) minus button.
 * @member Switch_Capture (Nintendo Switch Pro) digital capture button.
 * @member Switch_LeftTrigger_Pull (Nintendo Switch Pro) left trigger, clicked.
 * @member Switch_LeftTrigger_Click (Nintendo Switch Pro) left trigger, clicked (same as previous value).
 * @member Switch_RightTrigger_Pull (Nintendo Switch Pro) right trigger, clicked.
 * @member Switch_RightTrigger_Click (Nintendo Switch Pro) right trigger, clicked (same as previous value).
 * @member Switch_LeftStick_Move (Nintendo Switch Pro) left joystick, movement on any axis (analog value).
 * @member Switch_LeftStick_Click (Nintendo Switch Pro) left joystick, clicked in (digital value).
 * @member Switch_LeftStick_DPadNorth (Nintendo Switch Pro) left joystick, digital movement (upper quadrant).
 * @member Switch_LeftStick_DPadSouth (Nintendo Switch Pro) left joystick, digital movement (lower quadrant).
 * @member Switch_LeftStick_DPadWest (Nintendo Switch Pro) left joystick, digital movement (left quadrant).
 * @member Switch_LeftStick_DPadEast (Nintendo Switch Pro) left joystick, digital movement (right quadrant).
 * @member Switch_RightStick_Move (Nintendo Switch Pro) right joystick, movement on any axis (analog value).
 * @member Switch_RightStick_Click (Nintendo Switch Pro) right joystick, clicked in (digital value).
 * @member Switch_RightStick_DPadNorth (Nintendo Switch Pro) right joystick, digital movement (upper quadrant).
 * @member Switch_RightStick_DPadSouth (Nintendo Switch Pro) right joystick, digital movement (lower quadrant).
 * @member Switch_RightStick_DPadWest (Nintendo Switch Pro) right joystick, digital movement (left quadrant).
 * @member Switch_RightStick_DPadEast (Nintendo Switch Pro) right joystick, digital movement (right quadrant).
 * @member Switch_DPad_North (Nintendo Switch Pro) digital pad, pressed (upper quadrant).
 * @member Switch_DPad_South (Nintendo Switch Pro) digital pad, pressed (lower quadrant).
 * @member Switch_DPad_West (Nintendo Switch Pro) digital pad, pressed (left quadrant).
 * @member Switch_DPad_East (Nintendo Switch Pro) digital pad, pressed (right quadrant).
 * @member Switch_ProGyro_Move (Nintendo Switch Pro) gyroscope, analog movement in any axis.
 * @member Switch_ProGyro_Pitch (Nintendo Switch Pro) gyroscope, analog movement on the Pitch axis (point head up to ceiling, point head down to floor).
 * @member Switch_ProGyro_Yaw (Nintendo Switch Pro) gyroscope, analog movement on the Yaw axis (turn head left to face one wall, turn head right to face other).
 * @member Switch_ProGyro_Roll (Nintendo Switch Pro) gyroscope, analog movement on the Roll axis (tilt head left towards shoulder, tilt head right towards other shoulder).
 * @member Switch_DPad_Move Reserved for future use.
 * @member Switch_Reserved1 Reserved for future use.
 * @member Switch_Reserved2 Reserved for future use.
 * @member Switch_Reserved3 Reserved for future use.
 * @member Switch_Reserved4 Reserved for future use.
 * @member Switch_Reserved5 Reserved for future use.
 * @member Switch_Reserved6 Reserved for future use.
 * @member Switch_Reserved7 Reserved for future use.
 * @member Switch_Reserved8 Reserved for future use.
 * @member Switch_Reserved9 Reserved for future use.
 * @member Switch_Reserved10 Reserved for future use.
 * @member Switch_RightGyro_Move Switch_RightGyro_Move.
 * @member Switch_RightGyro_Pitch Switch_RightGyro_Pitch.
 * @member Switch_RightGyro_Yaw Switch_RightGyro_Yaw.
 * @member Switch_RightGyro_Roll Switch_RightGyro_Roll.
 * @member Switch_LeftGyro_Move Switch_LeftGyro_Move.
 * @member Switch_LeftGyro_Pitch Switch_LeftGyro_Pitch.
 * @member Switch_LeftGyro_Yaw Switch_LeftGyro_Yaw.
 * @member Switch_LeftGyro_Roll Switch_LeftGyro_Roll.
 * @member Switch_LeftGrip_Lower Switch_LeftGrip_Lower.
 * @member Switch_LeftGrip_Upper Switch_LeftGrip_Upper.
 * @member Switch_RightGrip_Lower Switch_RightGrip_Lower.
 * @member Switch_RightGrip_Upper Switch_RightGrip_Upper.
 * @member Switch_JoyConButton_N Switch_JoyConButton_N.
 * @member Switch_JoyConButton_E Switch_JoyConButton_E.
 * @member Switch_JoyConButton_S Switch_JoyConButton_S.
 * @member Switch_JoyConButton_W Switch_JoyConButton_W.
 * @member Switch_Reserved15 Switch_Reserved15.
 * @member Switch_Reserved16 Switch_Reserved16.
 * @member Switch_Reserved17 Switch_Reserved17.
 * @member Switch_Reserved18 Switch_Reserved18.
 * @member Switch_Reserved19 Switch_Reserved19.
 * @member Switch_Reserved20 Switch_Reserved20.
 * @member PS5_X PS5_X.
 * @member PS5_Circle PS5_Circle.
 * @member PS5_Triangle PS5_Triangle.
 * @member PS5_Square PS5_Square.
 * @member PS5_LeftBumper PS5_LeftBumper.
 * @member PS5_RightBumper PS5_RightBumper.
 * @member PS5_Option PS5_Option.
 * @member PS5_Create PS5_Create.
 * @member PS5_Mute PS5_Mute.
 * @member PS5_LeftPad_Touch PS5_LeftPad_Touch.
 * @member PS5_LeftPad_Swipe PS5_LeftPad_Swipe.
 * @member PS5_LeftPad_Click PS5_LeftPad_Click.
 * @member PS5_LeftPad_DPadNorth PS5_LeftPad_DPadNorth.
 * @member PS5_LeftPad_DPadSouth PS5_LeftPad_DPadSouth.
 * @member PS5_LeftPad_DPadWest PS5_LeftPad_DPadWest.
 * @member PS5_LeftPad_DPadEast PS5_LeftPad_DPadEast.
 * @member PS5_RightPad_Touch PS5_RightPad_Touch.
 * @member PS5_RightPad_Swipe PS5_RightPad_Swipe.
 * @member PS5_RightPad_Click PS5_RightPad_Click.
 * @member PS5_RightPad_DPadNorth PS5_RightPad_DPadNorth.
 * @member PS5_RightPad_DPadSouth PS5_RightPad_DPadSouth.
 * @member PS5_RightPad_DPadWest PS5_RightPad_DPadWest.
 * @member PS5_RightPad_DPadEast PS5_RightPad_DPadEast.
 * @member PS5_CenterPad_Touch PS5_CenterPad_Touch.
 * @member PS5_CenterPad_Swipe PS5_CenterPad_Swipe.
 * @member PS5_CenterPad_Click PS5_CenterPad_Click.
 * @member PS5_CenterPad_DPadNorth PS5_CenterPad_DPadNorth.
 * @member PS5_CenterPad_DPadSouth PS5_CenterPad_DPadSouth.
 * @member PS5_CenterPad_DPadWest PS5_CenterPad_DPadWest.
 * @member PS5_CenterPad_DPadEast PS5_CenterPad_DPadEast.
 * @member PS5_LeftTrigger_Pull PS5_LeftTrigger_Pull.
 * @member PS5_LeftTrigger_Click PS5_LeftTrigger_Click.
 * @member PS5_RightTrigger_Pull PS5_RightTrigger_Pull.
 * @member PS5_RightTrigger_Click PS5_RightTrigger_Click.
 * @member PS5_LeftStick_Move PS5_LeftStick_Move.
 * @member PS5_LeftStick_Click PS5_LeftStick_Click.
 * @member PS5_LeftStick_DPadNorth PS5_LeftStick_DPadNorth.
 * @member PS5_LeftStick_DPadSouth PS5_LeftStick_DPadSouth.
 * @member PS5_LeftStick_DPadWest PS5_LeftStick_DPadWest.
 * @member PS5_LeftStick_DPadEast PS5_LeftStick_DPadEast.
 * @member PS5_RightStick_Move PS5_RightStick_Move.
 * @member PS5_RightStick_Click PS5_RightStick_Click.
 * @member PS5_RightStick_DPadNorth PS5_RightStick_DPadNorth.
 * @member PS5_RightStick_DPadSouth PS5_RightStick_DPadSouth.
 * @member PS5_RightStick_DPadWest PS5_RightStick_DPadWest.
 * @member PS5_RightStick_DPadEast PS5_RightStick_DPadEast.
 * @member PS5_DPad_North PS5_DPad_North.
 * @member PS5_DPad_South PS5_DPad_South.
 * @member PS5_DPad_West PS5_DPad_West.
 * @member PS5_DPad_East PS5_DPad_East.
 * @member PS5_Gyro_Move PS5_Gyro_Move.
 * @member PS5_Gyro_Pitch PS5_Gyro_Pitch.
 * @member PS5_Gyro_Yaw PS5_Gyro_Yaw.
 * @member PS5_Gyro_Roll PS5_Gyro_Roll.
 * @member PS5_DPad_Move PS5_DPad_Move.
 * @member PS5_LeftGrip PS5_LeftGrip.
 * @member PS5_RightGrip PS5_RightGrip.
 * @member PS5_LeftFn PS5_LeftFn.
 * @member PS5_RightFn PS5_RightFn.
 * @member PS5_Reserved5 PS5_Reserved5.
 * @member PS5_Reserved6 PS5_Reserved6.
 * @member PS5_Reserved7 PS5_Reserved7.
 * @member PS5_Reserved8 PS5_Reserved8.
 * @member PS5_Reserved9 PS5_Reserved9.
 * @member PS5_Reserved10 PS5_Reserved10.
 * @member PS5_Reserved11 PS5_Reserved11.
 * @member PS5_Reserved12 PS5_Reserved12.
 * @member PS5_Reserved13 PS5_Reserved13.
 * @member PS5_Reserved14 PS5_Reserved14.
 * @member PS5_Reserved15 PS5_Reserved15.
 * @member PS5_Reserved16 PS5_Reserved16.
 * @member PS5_Reserved17 PS5_Reserved17.
 * @member PS5_Reserved18 PS5_Reserved18.
 * @member PS5_Reserved19 PS5_Reserved19.
 * @member PS5_Reserved20 PS5_Reserved20.
 * @member SteamDeck_A SteamDeck_A.
 * @member SteamDeck_B SteamDeck_B.
 * @member SteamDeck_X SteamDeck_X.
 * @member SteamDeck_Y SteamDeck_Y.
 * @member SteamDeck_L1 SteamDeck_L1.
 * @member SteamDeck_R1 SteamDeck_R1.
 * @member SteamDeck_Menu SteamDeck_Menu.
 * @member SteamDeck_View SteamDeck_View.
 * @member SteamDeck_LeftPad_Touch SteamDeck_LeftPad_Touch.
 * @member SteamDeck_LeftPad_Swipe SteamDeck_LeftPad_Swipe.
 * @member SteamDeck_LeftPad_Click SteamDeck_LeftPad_Click.
 * @member SteamDeck_LeftPad_DPadNorth SteamDeck_LeftPad_DPadNorth.
 * @member SteamDeck_LeftPad_DPadSouth SteamDeck_LeftPad_DPadSouth.
 * @member SteamDeck_LeftPad_DPadWest SteamDeck_LeftPad_DPadWest.
 * @member SteamDeck_LeftPad_DPadEast SteamDeck_LeftPad_DPadEast.
 * @member SteamDeck_RightPad_Touch SteamDeck_RightPad_Touch.
 * @member SteamDeck_RightPad_Swipe SteamDeck_RightPad_Swipe.
 * @member SteamDeck_RightPad_Click SteamDeck_RightPad_Click.
 * @member SteamDeck_RightPad_DPadNorth SteamDeck_RightPad_DPadNorth.
 * @member SteamDeck_RightPad_DPadSouth SteamDeck_RightPad_DPadSouth.
 * @member SteamDeck_RightPad_DPadWest SteamDeck_RightPad_DPadWest.
 * @member SteamDeck_RightPad_DPadEast SteamDeck_RightPad_DPadEast.
 * @member SteamDeck_L2_SoftPull SteamDeck_L2_SoftPull.
 * @member SteamDeck_L2 SteamDeck_L2.
 * @member SteamDeck_R2_SoftPull SteamDeck_R2_SoftPull.
 * @member SteamDeck_R2 SteamDeck_R2.
 * @member SteamDeck_LeftStick_Move SteamDeck_LeftStick_Move.
 * @member SteamDeck_L3 SteamDeck_L3.
 * @member SteamDeck_LeftStick_DPadNorth SteamDeck_LeftStick_DPadNorth.
 * @member SteamDeck_LeftStick_DPadSouth SteamDeck_LeftStick_DPadSouth.
 * @member SteamDeck_LeftStick_DPadWest SteamDeck_LeftStick_DPadWest.
 * @member SteamDeck_LeftStick_DPadEast SteamDeck_LeftStick_DPadEast.
 * @member SteamDeck_LeftStick_Touch SteamDeck_LeftStick_Touch.
 * @member SteamDeck_RightStick_Move SteamDeck_RightStick_Move.
 * @member SteamDeck_R3 SteamDeck_R3.
 * @member SteamDeck_RightStick_DPadNorth SteamDeck_RightStick_DPadNorth.
 * @member SteamDeck_RightStick_DPadSouth SteamDeck_RightStick_DPadSouth.
 * @member SteamDeck_RightStick_DPadWest SteamDeck_RightStick_DPadWest.
 * @member SteamDeck_RightStick_DPadEast SteamDeck_RightStick_DPadEast.
 * @member SteamDeck_RightStick_Touch SteamDeck_RightStick_Touch.
 * @member SteamDeck_L4 SteamDeck_L4.
 * @member SteamDeck_R4 SteamDeck_R4.
 * @member SteamDeck_L5 SteamDeck_L5.
 * @member SteamDeck_R5 SteamDeck_R5.
 * @member SteamDeck_DPad_Move SteamDeck_DPad_Move.
 * @member SteamDeck_DPad_North SteamDeck_DPad_North.
 * @member SteamDeck_DPad_South SteamDeck_DPad_South.
 * @member SteamDeck_DPad_West SteamDeck_DPad_West.
 * @member SteamDeck_DPad_East SteamDeck_DPad_East.
 * @member SteamDeck_Gyro_Move SteamDeck_Gyro_Move.
 * @member SteamDeck_Gyro_Pitch SteamDeck_Gyro_Pitch.
 * @member SteamDeck_Gyro_Yaw SteamDeck_Gyro_Yaw.
 * @member SteamDeck_Gyro_Roll SteamDeck_Gyro_Roll.
 * @member SteamDeck_Reserved1 SteamDeck_Reserved1.
 * @member SteamDeck_Reserved2 SteamDeck_Reserved2.
 * @member SteamDeck_Reserved3 SteamDeck_Reserved3.
 * @member SteamDeck_Reserved4 SteamDeck_Reserved4.
 * @member SteamDeck_Reserved5 SteamDeck_Reserved5.
 * @member SteamDeck_Reserved6 SteamDeck_Reserved6.
 * @member SteamDeck_Reserved7 SteamDeck_Reserved7.
 * @member SteamDeck_Reserved8 SteamDeck_Reserved8.
 * @member SteamDeck_Reserved9 SteamDeck_Reserved9.
 * @member SteamDeck_Reserved10 SteamDeck_Reserved10.
 * @member SteamDeck_Reserved11 SteamDeck_Reserved11.
 * @member SteamDeck_Reserved12 SteamDeck_Reserved12.
 * @member SteamDeck_Reserved13 SteamDeck_Reserved13.
 * @member SteamDeck_Reserved14 SteamDeck_Reserved14.
 * @member SteamDeck_Reserved15 SteamDeck_Reserved15.
 * @member SteamDeck_Reserved16 SteamDeck_Reserved16.
 * @member SteamDeck_Reserved17 SteamDeck_Reserved17.
 * @member SteamDeck_Reserved18 SteamDeck_Reserved18.
 * @member SteamDeck_Reserved19 SteamDeck_Reserved19.
 * @member SteamDeck_Reserved20 SteamDeck_Reserved20.
 * @member Horipad_M1 Horipad_M1.
 * @member Horipad_M2 Horipad_M2.
 * @member Horipad_L4 Horipad_L4.
 * @member Horipad_R4 Horipad_R4.
 * @member LenovoLegionGo_A LenovoLegionGo_A.
 * @member LenovoLegionGo_B LenovoLegionGo_B.
 * @member LenovoLegionGo_X LenovoLegionGo_X.
 * @member LenovoLegionGo_Y LenovoLegionGo_Y.
 * @member LenovoLegionGo_LB LenovoLegionGo_LB.
 * @member LenovoLegionGo_RB LenovoLegionGo_RB.
 * @member LenovoLegionGo_Menu LenovoLegionGo_Menu.
 * @member LenovoLegionGo_View LenovoLegionGo_View.
 * @member LenovoLegionGo_LeftPad_Touch LenovoLegionGo_LeftPad_Touch.
 * @member LenovoLegionGo_LeftPad_Swipe LenovoLegionGo_LeftPad_Swipe.
 * @member LenovoLegionGo_LeftPad_Click LenovoLegionGo_LeftPad_Click.
 * @member LenovoLegionGo_LeftPad_DPadNorth LenovoLegionGo_LeftPad_DPadNorth.
 * @member LenovoLegionGo_LeftPad_DPadSouth LenovoLegionGo_LeftPad_DPadSouth.
 * @member LenovoLegionGo_LeftPad_DPadWest LenovoLegionGo_LeftPad_DPadWest.
 * @member LenovoLegionGo_LeftPad_DPadEast LenovoLegionGo_LeftPad_DPadEast.
 * @member LenovoLegionGo_RightPad_Touch LenovoLegionGo_RightPad_Touch.
 * @member LenovoLegionGo_RightPad_Swipe LenovoLegionGo_RightPad_Swipe.
 * @member LenovoLegionGo_RightPad_Click LenovoLegionGo_RightPad_Click.
 * @member LenovoLegionGo_RightPad_DPadNorth LenovoLegionGo_RightPad_DPadNorth.
 * @member LenovoLegionGo_RightPad_DPadSouth LenovoLegionGo_RightPad_DPadSouth.
 * @member LenovoLegionGo_RightPad_DPadWest LenovoLegionGo_RightPad_DPadWest.
 * @member LenovoLegionGo_RightPad_DPadEast LenovoLegionGo_RightPad_DPadEast.
 * @member LenovoLegionGo_LT_SoftPull LenovoLegionGo_LT_SoftPull.
 * @member LenovoLegionGo_LT LenovoLegionGo_LT.
 * @member LenovoLegionGo_RT_SoftPull LenovoLegionGo_RT_SoftPull.
 * @member LenovoLegionGo_RT LenovoLegionGo_RT.
 * @member LenovoLegionGo_LeftStick_Move LenovoLegionGo_LeftStick_Move.
 * @member LenovoLegionGo_LS LenovoLegionGo_LS.
 * @member LenovoLegionGo_LeftStick_DPadNorth LenovoLegionGo_LeftStick_DPadNorth.
 * @member LenovoLegionGo_LeftStick_DPadSouth LenovoLegionGo_LeftStick_DPadSouth.
 * @member LenovoLegionGo_LeftStick_DPadWest LenovoLegionGo_LeftStick_DPadWest.
 * @member LenovoLegionGo_LeftStick_DPadEast LenovoLegionGo_LeftStick_DPadEast.
 * @member LenovoLegionGo_RightStick_Move LenovoLegionGo_RightStick_Move.
 * @member LenovoLegionGo_RS LenovoLegionGo_RS.
 * @member LenovoLegionGo_RightStick_DPadNorth LenovoLegionGo_RightStick_DPadNorth.
 * @member LenovoLegionGo_RightStick_DPadSouth LenovoLegionGo_RightStick_DPadSouth.
 * @member LenovoLegionGo_RightStick_DPadWest LenovoLegionGo_RightStick_DPadWest.
 * @member LenovoLegionGo_RightStick_DPadEast LenovoLegionGo_RightStick_DPadEast.
 * @member LenovoLegionGo_Y1 LenovoLegionGo_Y1.
 * @member LenovoLegionGo_Y2 LenovoLegionGo_Y2.
 * @member LenovoLegionGo_DPad_Move LenovoLegionGo_DPad_Move.
 * @member LenovoLegionGo_DPad_North LenovoLegionGo_DPad_North.
 * @member LenovoLegionGo_DPad_South LenovoLegionGo_DPad_South.
 * @member LenovoLegionGo_DPad_West LenovoLegionGo_DPad_West.
 * @member LenovoLegionGo_DPad_East LenovoLegionGo_DPad_East.
 * @member LenovoLegionGo_Gyro_Move LenovoLegionGo_Gyro_Move.
 * @member LenovoLegionGo_Gyro_Pitch LenovoLegionGo_Gyro_Pitch.
 * @member LenovoLegionGo_Gyro_Yaw LenovoLegionGo_Gyro_Yaw.
 * @member LenovoLegionGo_Gyro_Roll LenovoLegionGo_Gyro_Roll.
 * @member LenovoLegionGo_Reserved1 LenovoLegionGo_Reserved1.
 * @member LenovoLegionGo_Reserved2 LenovoLegionGo_Reserved2.
 * @member LenovoLegionGo_Reserved3 LenovoLegionGo_Reserved3.
 * @member LenovoLegionGo_Reserved4 LenovoLegionGo_Reserved4.
 * @member LenovoLegionGo_Reserved5 LenovoLegionGo_Reserved5.
 * @member LenovoLegionGo_Reserved6 LenovoLegionGo_Reserved6.
 * @member LenovoLegionGo_Reserved7 LenovoLegionGo_Reserved7.
 * @member LenovoLegionGo_Reserved8 LenovoLegionGo_Reserved8.
 * @member LenovoLegionGo_Reserved9 LenovoLegionGo_Reserved9.
 * @member LenovoLegionGo_Reserved10 LenovoLegionGo_Reserved10.
 * @member LenovoLegionGo_Reserved11 LenovoLegionGo_Reserved11.
 * @member LenovoLegionGo_Reserved12 LenovoLegionGo_Reserved12.
 * @member LenovoLegionGo_Reserved13 LenovoLegionGo_Reserved13.
 * @member LenovoLegionGo_Reserved14 LenovoLegionGo_Reserved14.
 * @member LenovoLegionGo_Reserved15 LenovoLegionGo_Reserved15.
 * @member LenovoLegionGo_Reserved16 LenovoLegionGo_Reserved16.
 * @member LenovoLegionGo_Reserved17 LenovoLegionGo_Reserved17.
 * @member LenovoLegionGo_Reserved18 LenovoLegionGo_Reserved18.
 * @member LenovoLegionGo_Reserved19 LenovoLegionGo_Reserved19.
 * @member LenovoLegionGo_Reserved20 LenovoLegionGo_Reserved20.
 * @member Generic_L4 Generic_L4.
 * @member Generic_R4 Generic_R4.
 * @member Generic_L5 Generic_L5.
 * @member Generic_R5 Generic_R5.
 * @member Generic_PL Generic_PL.
 * @member Generic_PR Generic_PR.
 * @member Generic_C Generic_C.
 * @member Generic_Z Generic_Z.
 * @member Generic_MISC1 Generic_MISC1.
 * @member Generic_MISC2 Generic_MISC2.
 * @member Generic_MISC3 Generic_MISC3.
 * @member Generic_MISC4 Generic_MISC4.
 * @member Generic_MISC5 Generic_MISC5.
 * @member Generic_MISC6 Generic_MISC6.
 * @member Generic_MISC7 Generic_MISC7.
 * @member Generic_MISC8 Generic_MISC8.
 * @member Count The number of values in this enum, useful for iterating.
 * @member MaximumPossibleValue The number of values in this enum, useful for iterating.
 * @enum_end 
 */

// MODULE

/**
 * @module input
 * @title Input
 * @desc > **Steamworks Interface**: [ISteamInput](https://partner.steamgames.com/doc/api/isteaminput)
 * 
 * This module contains Steam Input functionality. Steam Input API is a flexible action-based API that supports all major controller types - Xbox, PlayStation, Nintendo Switch Pro, and Steam Controllers.
 * 
 * See the [Steam Input](https://partner.steamgames.com/doc/features/steam_controller) documentation for more information.
 * 
 * @section_func Functions
 * @desc These are the functions of the Input module:
 * @ref steam_input_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Input module:
 * @ref SteamInput*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Input module:
 * @ref SteamInput*
 * @section_end
 * @module_end
 */
