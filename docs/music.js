// FUNCTIONS

/**
 * @func steam_music_is_enabled
 * @desc This function returns whether Steam music is enabled.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * global.steam_music_enabled = steam_music_is_enabled();
 * ```
 * The above code gets if Steam music player is enabled and stores the result in a global variable.
 * @func_end
 */

/**
 * @func steam_music_is_playing
 * @desc This function returns whether Steam music is playing.
 * 
 * [[NOTE: This function returns true even if a track is paused.]]
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * global.steam_music_playing = steam_music_is_playing();
 * ```
 * The above code gets if the Steam music player is playing and stores the result in a global variable.
 * @func_end
 */

/**
 * @func steam_music_get_status
 * @desc This function gets the current status of the media player as ${constant.SteamMusicStatus}.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * if (steam_music_get_status == steam_music_playing) {
 *     steam_music_pause();
 * }
 * ```
 * The above code gets if the Steam music player is playing. If it is, it pauses the playback.
 * @func_end
 */

/**
 * @func steam_music_play
 * @desc This function resumes playback of the current track. Returns `true` if successful.
 * 
 * @returns {boolean}
 * 
 *  * @example
 * ```gml
 * if (steam_music_get_status == steam_music_paused) {
 *     steam_music_play();
 * }
 * ```
 * The above code gets if the Steam music player is paused. If it is, it resumes playback.
 * 
 * @event steam
 * @member {string} event_type The string value `"steam_music_playback_status_has_changed"`
 * @event_end
 * @func_end
 */

/**
 * @func steam_music_pause
 * @desc This function pauses the current track. Returns `true` if successful.
 * 
 * @returns {boolean}
 * 
 *  * @example
 * ```gml
 * if (steam_music_get_status == steam_music_playing) {
 *     steam_music_pause();
 * }
 * ```
 * The above code gets if Steam music player is playing. if it is, it pauses playback.
 * 
 * @event steam
 * @member {string} event_type The string value `"steam_music_playback_status_has_changed"`
 * @event_end
 * @func_end
 */

/**
 * @func steam_music_play_next
 * @desc This function plays the next track. If the current track is the last, it loops to the first one. Returns `true` if successful.
 * 
 * @returns {boolean}
 * 
 *  * @example
 * ```gml
 * if (keyboard_check_pressed(vk_right)) {
 *     steam_music_play_next();
 * }
 * ```
 * The above code checks if the right arrow has been pressed and if it has, it skips to the next track.
 * 
 * @event steam
 * @member {string} event_type The string value `"playback_status_has_changed"`
 * @event_end
 * @func_end
 */

/**
 * @func steam_music_play_previous
 * @desc This function plays the previous track. It resets the current track first, and goes to the last one if called again.
 * If the current track is the first, it DOES NOT loop to the last one. Returns `true` if successful.
 * 
 * @returns {boolean}
 * 
 *  * @example
 * ```gml
 * if (keyboard_check_pressed(vk_left)) {
 *     steam_music_play_previous();
 * }
 * ```
 * The above code checks if the left arrow has been pressed and if it has, it goes back to the previous track.
 * 
 * @event steam
 * @member {string} event_type The string value `"steam_music_playback_status_has_changed"`
 * @event_end
 * @func_end
 */

/**
 * @func steam_music_set_volume
 * @desc This function sets the volume of Steam music player only (not the system volume). 
 * If a number higher than 1 is entered, it defaults to 1. Returns `true` if successful.
 * 
 * @param {real} volume The volume that you want to set as a real.
 * 
 * @event steam
 * @desc This callback is triggered whenever the volume is changed via the Steam client UI.
 * @member {string} event_type The string value `"steam_music_volume_has_changed"`
 * @member {real} volume The current volume of the music player
 * @event_end
 * @func_end
 */

/**
 * @const SteamMusicStatus
 * @desc These constants represent the status of the music player.
 * 
 * @member steam_music_playback_undefined 0
 * @member steam_music_playback_playing 1
 * @member steam_music_playback_paused 2
 * @member steam_music_playback_idle 3
 * @const_end
 */

/**
 * @module music
 * @title Music
 * @desc The following functions, constants and structures allow you to use the [Steam Music API](https://partner.steamgames.com/doc/api/ISteamMusic).
 * 
 * @section_func Functions
 * @desc These functions are provided for getting and setting the media player playback:
 * 
 * @ref steam_music_is_enabled
 * @ref steam_music_is_playing
 * @ref steam_music_get_status
 * @ref steam_music_play
 * @ref steam_music_pause
 * @ref steam_music_play_next
 * @ref steam_music_play_previous
 * @ref steam_music_set_volume
 * 
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants used by this API:
 * 
 * @ref SteamMusicStatus
 * 
 * @section_end
 * 
 * @module_end
 * 
 */