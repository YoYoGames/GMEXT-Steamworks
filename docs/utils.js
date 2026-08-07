
// FUNCTIONS

/**
 * @function steam_utils_overlay_needs_present
 * @description > **Steamworks Function**: [ISteamUtils::BOverlayNeedsPresent](https://partner.steamgames.com/doc/api/ISteamUtils#BOverlayNeedsPresent)
 *
 * This function checks if the Overlay needs a present. Only required if using event driven render updates.
 *
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_utils_check_file_signature
 * @description > **Steamworks Function**: [ISteamUtils::CheckFileSignature](https://partner.steamgames.com/doc/api/ISteamUtils#CheckFileSignature)
 *
 * This function checks if a signed file is valid and matches the signature bundled with it.
 *
 * @param {String} file_name The file to validate the signature of.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUtils::CheckFileSignature_t](https://partner.steamgames.com/doc/api/ISteamUtils#CheckFileSignature_t)
 *
 * Called when the file signature check completes.
 *
 * @member {Struct.SteamUtilsCheckFileSignatureResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_utils_get_api_call_failure_reason
 * @description > **Steamworks Function**: [ISteamUtils::GetAPICallFailureReason](https://partner.steamgames.com/doc/api/ISteamUtils#GetAPICallFailureReason)
 *
 * This function is used to get the failure reason of a call result.
 * 
 * The primary usage for this function is debugging. The failure reasons are typically out of your control and tend to not be very important. Just keep retrying your API Call until it works.
 *
 * @param {Real} steam_api_call The Steam API Call handle to check the failure for.
 * @returns {Enum.SteamUtilsApiCallFailure}
 * @function_end 
 */

/**
 * @function steam_utils_get_api_call_result
 * @description > **Steamworks Function**: [ISteamUtils::GetAPICallResult](https://partner.steamgames.com/doc/api/ISteamUtils#GetAPICallResult)
 *
 * This function gets the content of a completed API Call. Provided for the backend of the CallResult wrapper.
 * 
 * It's generally not recommended that you use this manually.
 *
 * @param {Real} steam_api_call The handle to the API Call.
 * @param {Real} callback_expected The k_iCallback number associated with the callback.
 * @param {Buffer} out_callback Returns the callback into the preallocated memory provided.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_ip_country
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the country of the user changed.
 * 
 * The country should be updated with ${function.steam_utils_get_ip_country}.
 * 
 * See: [ISteamUtils::IPCountry_t](https://partner.steamgames.com/doc/api/ISteamUtils#IPCountry_t)
 * 
 * This callback has no fields.
 *
 * @param {Function} callback The function to be called when the user's IP country changes.
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_ip_country
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_ip_country}.
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_low_battery_power
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when running on a laptop and less than 10 minutes of battery is left. The callback then fires every minute afterwards.
 * 
 * See: [ISteamUtils::LowBatteryPower_t](https://partner.steamgames.com/doc/api/ISteamUtils#LowBatteryPower_t)
 * 
 * See: ${struct.SteamUtilsLowBatteryPower}
 *
 * @param {Function} callback The function to be called when the system reports the device is low on battery power.
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_low_battery_power
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_low_battery_power}.
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_steam_api_call_completed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a SteamAPICall_t has completed (or failed).
 * 
 * See: [ISteamUtils::SteamAPICallCompleted_t](https://partner.steamgames.com/doc/api/ISteamUtils#SteamAPICallCompleted_t)
 * 
 * See: ${struct.SteamUtilsSteamApiCallCompleted}
 *
 * @param {Function} callback The function to be called when an asynchronous Steam API call is completed.
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_steam_api_call_completed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_steam_api_call_completed}.
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_app_resuming_from_suspend
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called after the device returns from sleep/suspend mode.
 * 
 * See: [ISteamUtils::AppResumingFromSuspend_t](https://partner.steamgames.com/doc/api/ISteamUtils#AppResumingFromSuspend_t)
 * 
 * This callback has no fields.
 *
 * @param {Function} callback The function to be called when the app is resuming from suspend.
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_app_resuming_from_suspend
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_app_resuming_from_suspend}.
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_steam_shutdown
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when Steam wants to shutdown.
 * 
 * See: [ISteamUtils::SteamShutdown_t](https://partner.steamgames.com/doc/api/ISteamUtils#SteamShutdown_t)
 * 
 * This callback has no fields.
 *
 * @param {Function} callback The function to be called when Steam is about to shut down.
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_steam_shutdown
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_steam_shutdown}.
 *
 * @function_end 
 */

/**
 * @function steam_utils_get_app_id
 * @description > **Steamworks Function**: [ISteamUtils::GetAppID](https://partner.steamgames.com/doc/api/ISteamUtils#GetAppID)
 *
 * This function gets the App ID of the current process.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_connected_universe
 * @description > **Steamworks Function**: [ISteamUtils::GetConnectedUniverse](https://partner.steamgames.com/doc/api/ISteamUtils#GetConnectedUniverse)
 *
 * This function gets the universe that the current client is connecting to. (Valve use only.)
 *
 * @returns {Enum.SteamApiUniverse} 
 * @function_end 
 */

/**
 * @function steam_utils_get_current_battery_power
 * @description > **Steamworks Function**: [ISteamUtils::GetCurrentBatteryPower](https://partner.steamgames.com/doc/api/ISteamUtils#GetCurrentBatteryPower)
 *
 * This function gets the current amount of battery power on the computer.
 *
 * @returns {Real} The current battery power ranging between [0..100]%. Returns 255 when the user is on AC power.
 * @function_end 
 */

/**
 * @function steam_utils_get_entered_gamepad_text_input
 * @description > **Steamworks Function**: [ISteamUtils::GetEnteredGamepadTextInput](https://partner.steamgames.com/doc/api/ISteamUtils#GetEnteredGamepadTextInput)
 *
 * This function gets the gamepad text input from the Big Picture overlay. This must be called within the [GamepadTextInputDismissed_t](https://partner.steamgames.com/doc/api/ISteamUtils#GamepadTextInputDismissed_t) callback, and only if `submitted` is true.
 *
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_utils_get_entered_gamepad_text_length
 * @description > **Steamworks Function**: [ISteamUtils::GetEnteredGamepadTextLength](https://partner.steamgames.com/doc/api/ISteamUtils#GetEnteredGamepadTextLength)
 *
 * This function gets the length of the gamepad text input from the Big Picture overlay.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_image_rgba
 * @description > **Steamworks Function**: [ISteamUtils::GetImageRGBA](https://partner.steamgames.com/doc/api/ISteamUtils#GetImageRGBA)
 *
 * This function gets the image bytes from an image handle.
 * 
 * Prior to calling this you must get the size of the image by calling ${function.steam_utils_get_image_size} so that you can create your buffer with an appropriate size. You can then allocate your buffer with the width and height as: width * height * 4. The image is provided in RGBA format. This call can be somewhat expensive as it converts from the compressed type (JPG, PNG, TGA) and provides no internal caching of returned buffer, thus it is highly recommended to only call this once per image handle and cache the result. This function is only used for Steam Avatars and Achievement images and those are not expected to change mid game.
 * 
 * See also: ${function.buffer_set_surface}
 *
 * @param {Real} image_handle The handle to the image that will be obtained.
 * @param {Buffer} dest The buffer that will be filled.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_get_image_size
 * @description > **Steamworks Function**: [ISteamUtils::GetImageSize](https://partner.steamgames.com/doc/api/ISteamUtils#GetImageSize)
 *
 * This function gets the size of a Steam image handle.
 * 
 * This must be called before calling ${function.steam_utils_get_image_rgba} to create an appropriately sized buffer that will be filled with the raw image data.
 *
 * @param {Real} image_handle The image handle to get the size for.
 * @returns {Struct.SteamUtilsImageSize}
 * @function_end 
 */

/**
 * @function steam_utils_get_ipc_call_count
 * @description > **Steamworks Function**: [ISteamUtils::GetIPCCallCount](https://partner.steamgames.com/doc/api/ISteamUtils#GetIPCCallCount)
 *
 * This function returns the number of IPC calls made since the last time this function was called.
 * 
 * Every IPC call is at minimum a thread context switch if not a process one so you want to rate control how often you do them.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_ip_country
 * @description > **Steamworks Function**: [ISteamUtils::GetIPCountry](https://partner.steamgames.com/doc/api/ISteamUtils#GetIPCountry)
 *
 * This function returns the 2 digit ISO 3166-1-alpha-2 format country code which client is running in.
 * 
 * This is looked up via an IP-to-location database.
 *
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_utils_get_seconds_since_app_active
 * @description > **Steamworks Function**: [ISteamUtils::GetSecondsSinceAppActive](https://partner.steamgames.com/doc/api/ISteamUtils#GetSecondsSinceAppActive)
 *
 * This function returns the number of seconds since the application was active.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_seconds_since_computer_active
 * @description > **Steamworks Function**: [ISteamUtils::GetSecondsSinceComputerActive](https://partner.steamgames.com/doc/api/ISteamUtils#GetSecondsSinceComputerActive)
 *
 * This function returns the number of seconds since the user last moved the mouse.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_server_real_time
 * @description > **Steamworks Function**: [ISteamUtils::GetServerRealTime](https://partner.steamgames.com/doc/api/ISteamUtils#GetServerRealTime)
 *
 * This function returns the Steam server time in Unix epoch format. (Number of seconds since Jan 1, 1970 UTC)
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_steam_ui_language
 * @description > **Steamworks Function**: [ISteamUtils::GetSteamUILanguage](https://partner.steamgames.com/doc/api/ISteamUtils#GetSteamUILanguage)
 *
 * This function returns the language the Steam client is running in.
 * 
 * You probably want ${function.steam_apps_get_current_game_language} instead, this should only be used in very special cases.
 * 
 * For a full list of languages see [Supported Languages](https://partner.steamgames.com/doc/store/localization/languages).
 *
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_utils_is_overlay_enabled
 * @description > **Steamworks Function**: [ISteamUtils::IsOverlayEnabled](https://partner.steamgames.com/doc/api/ISteamUtils#IsOverlayEnabled)
 *
 * This function checks if the [Steam Overlay](https://partner.steamgames.com/doc/features/overlay) is running & the user can access it.
 * 
 * The overlay process could take a few seconds to start & hook the game process, so this function will initially return `false` while the overlay is loading.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_in_big_picture_mode
 * @description > **Steamworks Function**: [ISteamUtils::IsSteamInBigPictureMode](https://partner.steamgames.com/doc/api/ISteamUtils#IsSteamInBigPictureMode)
 *
 * This function checks if Steam & the Steam Overlay are running in Big Picture mode.
 * 
 * Games must be launched through the Steam client to enable the Big Picture overlay.
 * During development, a game can be added as a non-Steam game to the developer's library to test this feature.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_running_in_vr
 * @description > **Steamworks Function**: [ISteamUtils::IsSteamRunningInVR](https://partner.steamgames.com/doc/api/ISteamUtils#IsSteamRunningInVR)
 *
 * This function checks if Steam is running in VR mode.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_running_on_steam_deck
 * @description > **Steamworks Function**: [ISteamUtils::IsSteamRunningOnSteamDeck](https://partner.steamgames.com/doc/api/ISteamUtils#IsSteamRunningOnSteamDeck)
 *
 * This function checks if Steam is running on a Steam Deck, or any other SteamOS device.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_china_launcher
 * @description > **Steamworks Function**: [ISteamUtils::IsSteamChinaLauncher](https://partner.steamgames.com/doc/api/ISteamUtils#IsSteamChinaLauncher)
 *
 * This function returns whether the current launcher is a Steam China launcher. You can cause the client to behave as the Steam China launcher by adding `-dev -steamchina` to the command line when running Steam.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_api_call_completed
 * @description > **Steamworks Function**: [ISteamUtils::IsAPICallCompleted](https://partner.steamgames.com/doc/api/ISteamUtils#IsAPICallCompleted)
 *
 * This function checks if an API Call is completed. Provides the backend of the CallResult wrapper.
 *
 * @param {Real} steam_api_call The API Call handle to check.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_utils_init_filter_text
 * @description > **Steamworks Function**: [ISteamUtils::InitFilterText](https://partner.steamgames.com/doc/api/ISteamUtils#InitFilterText)
 *
 * This function initializes text filtering, loading dictionaries for the language the game is running in.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_filter_text
 * @description > **Steamworks Function**: [ISteamUtils::FilterText](https://partner.steamgames.com/doc/api/ISteamUtils#FilterText)
 *
 * This function filters the provided input message.
 *
 * @param {Enum.SteamUtilsTextFilteringContext} context The type of content in the input string.
 * @param {Real} source_steam_id The Steam ID that is the source of the input string (e.g. the player with the name, or who said the chat text).
 * @param {String} input_message The input string that should be filtered, which can be ASCII or UTF-8.
 * @returns {Struct.SteamUtilsFilterTextResult} 
 * @function_end 
 */

/**
 * @function steam_utils_is_vr_headset_streaming_enabled
 * @description > **Steamworks Function**: [ISteamUtils::IsVRHeadsetStreamingEnabled](https://partner.steamgames.com/doc/api/ISteamUtils#IsVRHeadsetStreamingEnabled)
 *
 * This function checks if the HMD view is being streamed via Steam Remote Play.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_set_overlay_notification_inset
 * @description > **Steamworks Function**: [ISteamUtils::SetOverlayNotificationInset](https://partner.steamgames.com/doc/api/ISteamUtils#SetOverlayNotificationInset)
 *
 * This function sets the inset of the overlay notification from the corner specified by ${function.steam_utils_set_overlay_notification_position}.
 * 
 * A value of (0, 0) resets the position into the corner.
 * 
 * This position is per-game and is reset each launch.
 *
 * @param {Real} horizontal_inset The horizontal (left-right) distance in pixels from the corner.
 * @param {Real} vertical_inset The vertical (up-down) distance in pixels from the corner.
 * @function_end 
 */

/**
 * @function steam_utils_set_overlay_notification_position
 * @description > **Steamworks Function**: [ISteamUtils::SetOverlayNotificationPosition](https://partner.steamgames.com/doc/api/ISteamUtils#SetOverlayNotificationPosition)
 *
 * This function sets which corner the Steam overlay notification popup should display itself in.
 *
 * @param {Enum.SteamApiNotificationPosition} notification_position The position on the screen where the overlay notification popup should be displayed.
 * @function_end 
 */

/**
 * @function steam_utils_set_vr_headset_streaming_enabled
 * @description > **Steamworks Function**: [ISteamUtils::SetVRHeadsetStreamingEnabled](https://partner.steamgames.com/doc/api/ISteamUtils#SetVRHeadsetStreamingEnabled)
 *
 * This function sets whether the HMD content will be streamed via Steam Remote Play.
 * 
 * If this is enabled, then the scene in the HMD headset will be streamed, and remote input will not be allowed. Otherwise if this is disabled, then the application window will be streamed instead, and remote input will be allowed. VR games default to enabled unless "VRHeadsetStreaming" "0" is in the extended appinfo for a game.
 * 
 * This is useful for games that have asymmetric multiplayer gameplay.
 *
 * @param {Bool} enabled Turns VR HMD Streaming on (`true`) or off (`false`).
 * @function_end
 */

/**
 * @function steam_utils_show_gamepad_text_input
 * @description > **Steamworks Function**: [ISteamUtils::ShowGamepadTextInput](https://partner.steamgames.com/doc/api/ISteamUtils#ShowGamepadTextInput)
 *
 * This function activates the Big Picture text input dialog which only supports gamepad input.
 * 
 * [[Note: Steam needs to be in Big Picture mode for this function to work.]]
 *
 * @param {Enum.SteamUtilsGamepadTextInputMode} input_mode Selects the input mode to use, either Normal or Password (hidden text).
 * @param {Enum.SteamUtilsGamepadTextInputLineMode} line_mode Controls whether to use single or multi line input.
 * @param {String} description Sets the description that should inform the user what the input dialog is for.
 * @param {Real} char_max The maximum number of characters that the user can input.
 * @param {String} existing_text Sets the preexisting text which the user can edit.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_show_floating_gamepad_text_input
 * @description > **Steamworks Function**: [ISteamUtils::ShowFloatingGamepadTextInput](https://partner.steamgames.com/doc/api/ISteamUtils#ShowFloatingGamepadTextInput)
 *
 * This function opens a floating keyboard over the game content and sends OS keyboard keys directly to the game.
 * The text field position is specified in pixels relative to the origin of the game window and is used to position the floating keyboard in a way that doesn't cover the text field.
 * 
 * [[Note: Steam needs to be in Big Picture mode for this function to work.]]
 *
 * @param {Enum.SteamUtilsFloatingGamepadTextInputMode} keyboard_mode Selects the keyboard type to use.
 * @param {Real} text_field_x X coordinate of text field which shouldn't be obscured by the floating keyboard.
 * @param {Real} text_field_y Y coordinate of text field which shouldn't be obscured by the floating keyboard.
 * @param {Real} text_field_width Width of text field which shouldn't be obscured by the floating keyboard.
 * @param {Real} text_field_height Height of text field which shouldn't be obscured by the floating keyboard.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_dismiss_floating_gamepad_text_input
 * @description > **Steamworks Function**: [ISteamUtils::DismissFloatingGamepadTextInput]()
 *
 * This function dismisses the floating keyboard.
 *
 * @returns {Bool} Whether a floating keyboard was actually open to dismiss.
 * @function_end
 */

/**
 * @function steam_utils_dismiss_gamepad_text_input
 * @description > **Steamworks Function**: [ISteamUtils::DismissGamepadTextInput]()
 *
 * This function dismisses the full-screen modal keyboard, as opposed to the floating keyboard dismissed by ${function.steam_utils_dismiss_floating_gamepad_text_input}.
 *
 * @returns {Bool} Whether a keyboard was actually open to dismiss.
 * @function_end
 */

/**
 * @function steam_utils_start_vr_dashboard
 * @description > **Steamworks Function**: [ISteamUtils::StartVRDashboard](https://partner.steamgames.com/doc/api/ISteamUtils#StartVRDashboard)
 *
 * This function asks Steam to create and render the OpenVR dashboard.
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_game_launcher_mode
 * @description > **Steamworks Function**: [ISteamUtils::SetGameLauncherMode](https://partner.steamgames.com/doc/api/ISteamUtils#SetGameLauncherMode)
 *
 * This function sets the game launcher mode, so that Steam Input translates controller input into mouse and keyboard input to navigate the launcher, for launchers that do not have native controller support.
 *
 * @param {Bool} launcher_mode Whether a launcher is active or not.
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when big picture gamepad text input has been closed.
 * 
 * See: [ISteamUtils::GamepadTextInputDismissed_t](https://partner.steamgames.com/doc/api/ISteamUtils#GamepadTextInputDismissed_t)
 * 
 * See: ${struct.SteamUtilsGamepadTextInputDismissed}
 *
 * @param {Function} callback The function to be called when the gamepad text input dialog is dismissed.
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_gamepad_text_input_dismissed}.
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_floating_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the floating keyboard invoked from ${function.steam_utils_show_floating_gamepad_text_input} has been closed.
 *
 * See: [ISteamUtils::FloatingGamepadTextInputDismissed_t](https://partner.steamgames.com/doc/api/ISteamUtils#FloatingGamepadTextInputDismissed_t)
 *
 * This callback has no fields. Unlike ${function.steam_utils_show_gamepad_text_input}'s full-screen dialog, the floating keyboard sends OS keyboard keys directly to whatever text field the game itself has focused - Steam never sees the typed text, so there is no way to query it or know whether it was submitted or canceled. This is purely a "the floating keyboard just closed" notification.
 *
 * @param {Function} callback The function to be called when the floating gamepad text input is dismissed.
 * @function_end
 */

/**
 * @function steam_utils_clear_callback_floating_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_floating_gamepad_text_input_dismissed}.
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_warning_message
 * @description > **Steamworks Function**: [ISteamUtils::SetWarningMessageHook](https://partner.steamgames.com/doc/api/ISteamUtils#SetWarningMessageHook)
 *
 * This function sets a warning message hook to receive SteamAPI warnings and info messages in a callback function.
 * 
 * The callback will receive a struct with members defined in ${struct.SteamUtilsWarningMessage}.
 * 
 * Callbacks will occur directly after the API function is called that generated the warning or message
 *
 * @param {Function} callback The function to be called when a SteamAPI warning or info message is received.
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_warning_message
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_utils_set_callback_warning_message}.
 *
 * @function_end 
 */

// STRUCTS

/**
 * @struct SteamUtilsLowBatteryPower
 * @description > **Steamworks Struct**: [ISteamUtils::LowBatteryPower_t](https://partner.steamgames.com/doc/api/ISteamUtils#LowBatteryPower_t)
 *
 * This struct holds information about the battery power left.
 *
 * @member {Real} minutes_battery_left The estimated amount of battery life left in minutes.
 * @struct_end
 */

/**
 * @struct SteamUtilsCheckFileSignatureResult
 * @description > **Steamworks Struct**: [ISteamUtils::CheckFileSignature_t](https://partner.steamgames.com/doc/api/ISteamUtils#CheckFileSignature_t)
 *
 * This struct holds information returned by ${function.steam_utils_check_file_signature}.
 *
 * @member {Enum.SteamUtilsCheckFileSignature} result The result of the file signature check.
 * @struct_end
 */

/**
 * @struct SteamUtilsSteamApiCallCompleted
 * @description > **Steamworks Struct**: [ISteamUtils::SteamAPICallCompleted_t](https://partner.steamgames.com/doc/api/ISteamUtils#SteamAPICallCompleted_t)
 *
 * This struct holds information passed in a `ISteamUtils::SteamAPICallCompleted_t` callback.
 *
 * @member {Real} async_call The handle of the Steam API Call that completed.
 * @member {Real} callback_id The k_iCallback constant which uniquely identifies the completed callback.
 * @member {Real} param_size The size in bytes of the completed callback.
 * @struct_end
 */

/**
 * @struct SteamUtilsImageSize
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_utils_get_image_size}.
 * 
 * @member {Real} width The width of the image.
 * @member {Real} height The height of the image.
 * @struct_end
 */

/**
 * @struct SteamUtilsFilterTextResult
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_utils_filter_text}.
 * 
 * @member {Real} characters_filtered The number of characters (not bytes) filtered.
 * @member {String} filtered_text The filtered result.
 * @struct_end
 */

/**
 * @struct SteamUtilsGamepadTextInputDismissed
 * @description > **Steamworks Struct**: [ISteamUtils::GamepadTextInputDismissed_t](https://partner.steamgames.com/doc/api/ISteamUtils#GamepadTextInputDismissed_t)
 *
 * This struct holds information returned in a `ISteamUtils::GamepadTextInputDismissed_t` callback, which is called when the Big Picture gamepad text input has been closed.
 *
 * @member {Bool} submitted `true` if user entered & accepted text (Call ${function.steam_utils_get_entered_gamepad_text_input} to receive the text), `false` if input was canceled.
 * @member {Real} submitted_text_length The length in bytes if there was text submitted.
 * @struct_end
 */

/**
 * @struct SteamUtilsWarningMessage
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information passed in a warning message callback.
 *
 * @member {Real} severity the severity; 0 for message, 1 for warning. If you are running in through a debugger only warnings will be sent. If you add `-debug_steamapi` to the command-line then informational messages will also be sent.
 * @member {String} text The text of the message.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamUtilsCheckFileSignature
 * @description > **Steamworks Enum**: [ISteamUtils::ECheckFileSignature](https://partner.steamgames.com/doc/api/ISteamUtils#ECheckFileSignature)
 * 
 * This enum holds the possible results of a file signature check.
 * 
 * @member InvalidSignature Invalid signature.
 * @member ValidSignature Valid signature.
 * @member FileNotFound File not found.
 * @member NoSignaturesFoundForThisApp No signatures found for this app.
 * @member NoSignaturesFoundForThisFile No signatures found for this file.
 * @enum_end
 */

/**
 * @enum SteamUtilsApiCallFailure
 * @description > **Steamworks Enum**: [ISteamUtils::ESteamAPICallFailure](https://partner.steamgames.com/doc/api/ISteamUtils#ESteamAPICallFailure)
 *
 * This enum holds the possible Steam API call failure results returned by ${function.steam_utils_get_api_call_failure_reason}.
 *
 * @member None No failure.
 * @member SteamGone The local Steam process has stopped responding, it may have been forcefully closed or is frozen.
 * @member NetworkFailure The network connection to the Steam servers has been lost, or was already broken. A [SteamServersDisconnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersDisconnected_t) callback will be sent around the same time, and a [SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t) callback will be sent when the client is able to talk to the Steam servers again.
 * @member InvalidHandle The [SteamAPICall_t](https://partner.steamgames.com/doc/api/steam_api#SteamAPICall_t) handle passed in no longer exists.
 * @member MismatchedCallback ${function.steam_utils_get_api_call_result} was called with the wrong callback type for this API call.
 * @enum_end 
 */

/**
 * @enum SteamUtilsGamepadTextInputMode
 * @description > **Steamworks Enum**: [ISteamUtils::EGamepadTextInputMode](https://partner.steamgames.com/doc/api/ISteamUtils#EGamepadTextInputMode)
 *
 * This enum holds the possible input modes for the Big Picture gamepad text entry.
 *
 * @member Normal Normal.
 * @member Password Password.
 * @enum_end 
 */

/**
 * @enum SteamUtilsGamepadTextInputLineMode
 * @description > **Steamworks Enum**: [ISteamUtils::EGamepadTextInputLineMode](https://partner.steamgames.com/doc/api/ISteamUtils#EGamepadTextInputLineMode)
 *
 * This enum controls the number of allowed lines for the Big Picture gamepad text entry.
 *
 * @member SingleLine Single line.
 * @member MultipleLines Multiple lines.
 * @enum_end 
 */

/**
 * @enum SteamUtilsFloatingGamepadTextInputMode
 * @description > **Steamworks Enum**: [ISteamUtils::EFloatingGamepadTextInputMode](https://partner.steamgames.com/doc/api/ISteamUtils#EFloatingGamepadTextInputMode)
 *
 * This enum controls the mode for the floating keyboard.
 *
 * @member SingleLine Enter dismisses the keyboard.
 * @member MultipleLines User needs to explicitly dismiss the keyboard.
 * @member Email Keyboard is displayed in a special mode that makes it easier to enter emails.
 * @member Numeric Numeric keypad is shown.
 * @enum_end 
 */

/**
 * @enum SteamUtilsTextFilteringContext
 * @description > **Steamworks Enum**: [ETextFilteringContext](https://partner.steamgames.com/doc/api/steam_api#ETextFilteringContext)
 *
 * This enum holds the possible values for the parameter to ${function.steam_utils_filter_text}.
 *
 * @member Unknown Unknown context.
 * @member GameContent Game content, only legally required filtering is performed.
 * @member Chat Chat from another player.
 * @member Name Character or item name.
 * @enum_end 
 */

// MODULE

/**
 * @module utils
 * @title Utils
 * @desc > **Steamworks Interface**: [ISteamUtils](https://partner.steamgames.com/doc/api/ISteamUtils)
 * 
 * This module provides access to a range of miscellaneous utility functions.
 * 
 * @section_func Functions
 * @desc These are the functions of the Utils module:
 * @ref steam_utils_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Utils module:
 * @ref SteamUtils*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Utils module:
 * @ref SteamUtils*
 * @section_end
 * @module_end
 */
