
// FUNCTIONS

/**
 * @function steam_screenshots_add_screenshot_to_library
 * @description > **Steamworks Function**: [ISteamScreenshots::AddScreenshotToLibrary](https://partner.steamgames.com/doc/api/ISteamScreenshots#AddScreenshotToLibrary)
 *
 * This function adds a screenshot to the user's Steam screenshot library from disk.
 *
 * @param {String} filename The absolute file path to the JPG, PNG, or TGA screenshot.
 * @param {String} thumbnail_filename The absolute file path to an optional thumbnail image. This must be 200px wide, as described by [k_ScreenshotThumbWidth](https://partner.steamgames.com/doc/api/ISteamScreenshots#k_ScreenshotThumbWidth) and the same aspect ratio. Pass an empty string `""` if there is no thumbnail, one will be created automatically.
 * @param {Real} width The width of the screenshot.
 * @param {Real} height The height of the screenshot.
 * @returns {Real} Screenshot handle, or `STEAM_SCREENSHOTS_INVALID_SCREENSHOT_HANDLE` if the file could not be saved (See: ${constant.macros})
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamScreenshots::ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t)
 * 
 * This is triggered when a screenshot has been successfully written or otherwise added to the library and can now be tagged.
 * 
 * @member {Struct.SteamScreenshotsScreenshotReady} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_screenshots_add_vr_screenshot_to_library
 * @description > **Steamworks Function**: [ISteamScreenshots::AddVRScreenshotToLibrary](https://partner.steamgames.com/doc/api/ISteamScreenshots#AddVRScreenshotToLibrary)
 *
 * This function adds a VR screenshot to the user's Steam screenshot library from disk in the supported type.
 *
 * @param {Enum.SteamScreenshotsVrScreenshotType} type The type of VR screenshot that this is.
 * @param {String} filename The absolute file path to a 2D JPG, PNG, or TGA version of the screenshot for the library view.
 * @param {String} vr_filename The absolute file path to the VR screenshot, this should be the same type of screenshot specified in `type`.
 * @returns {Real} Screenshot handle, or `STEAM_SCREENSHOTS_INVALID_SCREENSHOT_HANDLE` if the file could not be saved (See: ${constant.macros})
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamScreenshots::ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t)
 * 
 * This is triggered when a screenshot has been successfully written or otherwise added to the library and can now be tagged.
 * 
 * @member {Struct.SteamScreenshotsScreenshotReady} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_screenshots_hook_screenshots
 * @description > **Steamworks Function**: [ISteamScreenshots::HookScreenshots](https://partner.steamgames.com/doc/api/ISteamScreenshots#HookScreenshots)
 *
 * This function toggles whether the overlay handles screenshots when the user presses the screenshot hotkey, or if the game handles them.
 * 
 * Hooking is disabled by default, and only ever enabled if you do so with this function.
 * 
 * If the hooking is enabled, then the [ScreenshotRequested_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotRequested_t) callback will be sent if the user presses the hotkey or when ${function.steam_screenshots_trigger_screenshot} is called, and then the game is expected to call ${function.steam_screenshots_write_screenshot} or ${function.steam_screenshots_add_screenshot_to_library} in response.
 * 
 * You can check if hooking is enabled with ${function.steam_screenshots_is_screenshots_hooked}.
 *
 * @param {Bool} hook Enable (`true`) or disable (`false`) hooking?
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamScreenshots::ScreenshotRequested_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotRequested_t)
 * 
 * Triggered when a screenshot has been requested by the user from the Steam screenshot hotkey. This will only be called if ${function.steam_screenshots_hook_screenshots} has been enabled, in which case Steam will not take the screenshot itself.
 * 
 * This callback has no fields.
 * 
 * @event_end
 * @function_end
 */

/**
 * @function steam_screenshots_is_screenshots_hooked
 * @description > **Steamworks Function**: [ISteamScreenshots::IsScreenshotsHooked](https://partner.steamgames.com/doc/api/ISteamScreenshots#IsScreenshotsHooked)
 *
 * This function checks if the app is hooking screenshots, or if the Steam Overlay is handling them.
 * 
 * This can be toggled with ${function.steam_screenshots_hook_screenshots}.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_screenshots_set_location
 * @description > **Steamworks Function**: [ISteamScreenshots::SetLocation](https://partner.steamgames.com/doc/api/ISteamScreenshots#SetLocation)
 *
 * This function sets optional metadata about a screenshot's location. For example, the name of the map it was taken on.
 * 
 * You can get the handle to tag the screenshot once it has been successfully saved from the [ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t) callback or via the ${function.steam_screenshots_write_screenshot}, ${function.steam_screenshots_add_screenshot_to_library}, ${function.steam_screenshots_add_vr_screenshot_to_library} calls.
 *
 * @param {Real} screenshot The handle to the screenshot to tag.
 * @param {String} location The location in the game where this screenshot was taken. This can not be longer than `STEAM_SCREENSHOTS_UFS_TAG_VALUE_MAX`.
 * @returns {Bool} `true` if the location was successfully added to the screenshot. `false` if the screenshot handle was invalid, or the location is invalid or too long.
 * @function_end
 */

/**
 * @function steam_screenshots_tag_published_file
 * @description > **Steamworks Function**: [ISteamScreenshots::TagPublishedFile](https://partner.steamgames.com/doc/api/ISteamScreenshots#TagPublishedFile)
 *
 * This function tags a published file as being visible in the screenshot.
 * 
 * You can tag up to the value declared by `STEAM_SCREENSHOTS_MAX_TAGGED_USERS` ([k_nScreenshotMaxTaggedPublishedFiles](https://partner.steamgames.com/doc/api/ISteamScreenshots#k_nScreenshotMaxTaggedPublishedFiles)) in a single screenshot. Tagging more items than that will just be discarded.
 * 
 * This function has a built-in delay before saving the tag which allows you to call it repeatedly for each item.
 * 
 * You can get the handle to tag the screenshot once it has been successfully saved from the [ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t) callback or via the ${function.steam_screenshots_write_screenshot}, ${function.steam_screenshots_add_screenshot_to_library}, ${function.steam_screenshots_add_vr_screenshot_to_library} calls.
 *
 * @param {Real} screenshot The handle to the screenshot to tag.
 * @param {Real} published_file_id The workshop item ID that is in the screenshot.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_screenshots_tag_user
 * @description > **Steamworks Function**: [ISteamScreenshots::TagUser](https://partner.steamgames.com/doc/api/ISteamScreenshots#TagUser)
 *
 * This function tags a Steam user as being visible in the screenshot.
 * 
 * You can tag up to the value declared by `STEAM_SCREENSHOTS_MAX_TAGGED_USERS` ([k_nScreenshotMaxTaggedUsers](https://partner.steamgames.com/doc/api/ISteamScreenshots#k_nScreenshotMaxTaggedUsers)) in a single screenshot. Tagging more items than that will just be discarded.
 * 
 * This function has a built-in delay before saving the tag which allows you to call it repeatedly for each item.
 * 
 * You can get the handle to tag the screenshot once it has been successfully saved from the [ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t) callback or via the ${function.steam_screenshots_write_screenshot}, ${function.steam_screenshots_add_screenshot_to_library}, ${function.steam_screenshots_add_vr_screenshot_to_library} calls.
 *
 * @param {Real} screenshot The handle to the screenshot to tag.
 * @param {Real} steam_id The Steam ID of a user that is in the screenshot.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_screenshots_trigger_screenshot
 * @description > **Steamworks Function**: [ISteamScreenshots::TriggerScreenshot](https://partner.steamgames.com/doc/api/ISteamScreenshots#TriggerScreenshot)
 *
 * This function either causes the Steam Overlay to take a screenshot, or tells your screenshot manager that a screenshot needs to be taken. Depending on the value of ${function.steam_screenshots_is_screenshots_hooked}.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamScreenshots::ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t)
 * 
 * This is triggered when a screenshot has been successfully written or otherwise added to the library and can now be tagged.
 * 
 * @member {Struct.SteamScreenshotsScreenshotReady} result The result of the operation.
 * @event_end
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamScreenshots::ScreenshotRequested_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotRequested_t)
 * 
 * Triggered when a screenshot has been requested by the user from the Steam screenshot hotkey. This will only be called if ${function.steam_screenshots_hook_screenshots} has been enabled, in which case Steam will not take the screenshot itself.
 * 
 * This callback has no fields.
 * 
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_screenshots_write_screenshot
 * @description > **Steamworks Function**: [ISteamScreenshots::WriteScreenshot](https://partner.steamgames.com/doc/api/ISteamScreenshots#WriteScreenshot)
 *
 * This function writes a screenshot to the user's Steam screenshot library given the raw image data, which must be in RGB format.
 *
 * @param {Buffer} buff_rgb The buffer containing the raw RGB data from the screenshot.
 * @param {Real} width The width of the screenshot in pixels.
 * @param {Real} height The height of the screenshot in pixels.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The number of bytes to write. Defaults to the buffer size minus the offset.
 * @returns {Real} Screenshot handle, or `STEAM_SCREENSHOTS_INVALID_SCREENSHOT_HANDLE` if the file could not be saved
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamScreenshots::ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t)
 * 
 * This is triggered when a screenshot has been successfully written or otherwise added to the library and can now be tagged.
 * 
 * @member {Struct.SteamScreenshotsScreenshotReady} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_screenshots_set_callback_screenshot_ready
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to be triggered after a screenshot has been successfully written or otherwise added to the library and can now be tagged.
 * 
 * See: [ISteamScreenshots::ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t)
 * 
 * See: ${struct.SteamScreenshotsScreenshotReady}
 *
 * @param {Function} callback The callback function to use.
 * @function_end
 */

/**
 * @function steam_screenshots_set_callback_screenshot_requested
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to be triggered after a screenshot has been requested by the user from the Steam screenshot hotkey. This will only be called if ${function.steam_screenshots_hook_screenshots} has been enabled, in which case Steam will not take the screenshot itself.
 * 
 * See: [ISteamScreenshots::ScreenshotRequested_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotRequested_t)
 * 
 * This callback has no fields.
 *
 * @param {Function} callback The callback function to use.
 * @function_end
 */

/**
 * @function steam_screenshots_clear_callback_screenshot_ready
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_screenshots_set_callback_screenshot_ready}.
 *
 * @function_end
 */

/**
 * @function steam_screenshots_clear_callback_screenshot_requested
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_screenshots_set_callback_screenshot_requested}.
 *
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamScreenshotsScreenshotReady
 * @description > **Steamworks Struct**: [ISteamScreenshots::ScreenshotReady_t](https://partner.steamgames.com/doc/api/ISteamScreenshots#ScreenshotReady_t)
 *
 * This struct holds information received when a screenshot has been successfully written or otherwise added to the library and can now be tagged.
 *
 * @member {Real} screenshot_handle The screenshot handle that has been written.
 * @member {Enum.SteamApiResult} result The result of the operation. Possible values:
 * 
 * * `SteamApiResult.Ok` - The screenshot was successfully added to the user's library.
 * * `SteamApiResult.Fail` - The screenshot could not be loaded or parsed.
 * * `SteamApiResult.IoFailure` - The screenshot could not be saved to the disk.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamScreenshotsVrScreenshotType
 * @description > **Steamworks Enum**: [ISteamScreenshots::EVRScreenshotType](partner.steamgames.com/doc/api/ISteamScreenshots#EVRScreenshotType)
 *
 * This enum describes the type of VR screenshots.
 *
 * @member None None.
 * @member Mono Mono.
 * @member Stereo Stereo.
 * @member MonoCubemap MonoCubemap.
 * @member MonoPanorama MonoPanorama.
 * @member StereoPanorama StereoPanorama.
 * @enum_end 
 */

// MODULE

/**
 * @module screenshots
 * @title Screenshots
 * @desc > **Steamworks Interface**: [ISteamScreenshots](https://partner.steamgames.com/doc/api/ISteamScreenshots)
 * 
 * This module contains functions for adding screenshots to the user's screenshot library.
 * 
 * See [Steam Screenshots](https://partner.steamgames.com/doc/features/screenshots) for more information.
 * 
 * @section_func Functions
 * @desc These are the functions of the Screenshots module:
 * @ref steam_screenshots_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Screenshots module:
 * @ref SteamScreenshots*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Screenshots module:
 * @ref SteamScreenshots*
 * @section_end
 * @module_end
 */
