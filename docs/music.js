
// FUNCTIONS

/**
 * @function steam_music_is_enabled
 * @description > **Steamworks Function**: [ISteamMusic::BIsEnabled](https://partner.steamgames.com/doc/api/ISteamMusic#BIsEnabled)
 *
 * This function checks if Steam Music is enabled.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_music_is_playing
 * @description > **Steamworks Function**: [ISteamMusic::BIsPlaying](https://partner.steamgames.com/doc/api/ISteamMusic#BIsPlaying)
 *
 * This function checks if Steam Music is active. This does not necessarily mean a song is currently playing, it may be paused.
 * 
 * For finer grain control use ${function.steam_music_get_playback_status}.
 *
 * @returns {Bool} `true` if a song is currently playing, paused, or queued up to play; otherwise `false`.
 * @function_end 
 */

/**
 * @function steam_music_get_playback_status
 * @description > **Steamworks Function**: [ISteamMusic::GetPlaybackStatus](https://partner.steamgames.com/doc/api/ISteamMusic#GetPlaybackStatus)
 *
 * This function gets the current status of the Steam Music player.
 *
 * @returns {Enum.SteamMusicPlaybackStatus} 
 * @function_end 
 */

/**
 * @function steam_music_play
 * @description > **Steamworks Function**: [ISteamMusic::Play](https://partner.steamgames.com/doc/api/ISteamMusic#Play)
 *
 * This function has the Steam Music player resume playing.
 *
 * @function_end 
 */

/**
 * @function steam_music_pause
 * @description > **Steamworks Function**: [ISteamMusic::Pause](https://partner.steamgames.com/doc/api/ISteamMusic#Pause)
 *
 * This function pauses the Steam Music player.
 *
 * @function_end 
 */

/**
 * @function steam_music_play_previous
 * @description > **Steamworks Function**: [ISteamMusic::PlayPrevious](https://partner.steamgames.com/doc/api/ISteamMusic#PlayPrevious)
 *
 * This function has the Steam Music player play the previous song.
 *
 * @function_end 
 */

/**
 * @function steam_music_play_next
 * @description > **Steamworks Function**: [ISteamMusic::PlayNext](https://partner.steamgames.com/doc/api/ISteamMusic#PlayNext)
 *
 * This function has the Steam Music player skip to the next song.
 *
 * @function_end 
 */

/**
 * @function steam_music_set_volume
 * @description > **Steamworks Function**: [ISteamMusic::SetVolume](https://partner.steamgames.com/doc/api/ISteamMusic#SetVolume)
 *
 * This function sets the volume of the Steam Music player.
 *
 * @param {Real} volume The volume to set, as a value ranging from 0.0 (silent) to 1.0 (maximum).
 * @function_end
 */

/**
 * @function steam_music_get_volume
 * @description > **Steamworks Function**: [ISteamMusic::GetVolume](https://partner.steamgames.com/doc/api/ISteamMusic#GetVolume)
 *
 * This function gets the current volume of the Steam Music player.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_music_set_callback_playback_status_has_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call when the playback status has changed.
 * 
 * See: [ISteamMusic::PlaybackStatusHasChanged_t](https://partner.steamgames.com/doc/api/ISteamMusic#PlaybackStatusHasChanged_t)
 * 
 * See: ${struct.SteamMusicPlaybackStatusHasChanged}
 *
 * @param {Function} callback The function to be called when the music playback status changes.
 * @function_end 
 */

/**
 * @function steam_music_clear_callback_playback_status_has_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_music_set_callback_playback_status_has_changed}.
 *
 * @function_end 
 */

/**
 * @function steam_music_set_callback_volume_has_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call when the volume has changed.
 * 
 * See: [ISteamMusic::VolumeHasChanged_t](https://partner.steamgames.com/doc/api/ISteamMusic#VolumeHasChanged_t)
 * 
 * See: ${struct.SteamMusicVolumeHasChanged}
 *
 * @param {Function} callback The function to be called when the music volume changes.
 * @function_end 
 */

/**
 * @function steam_music_clear_callback_volume_has_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_music_set_callback_volume_has_changed}.
 *
 * @function_end 
 */

// STRUCTS

/**
 * @struct SteamMusicPlaybackStatusHasChanged
 * @description > **Steamworks Struct**: [ISteamMusic::PlaybackStatusHasChanged_t](https://partner.steamgames.com/doc/api/ISteamMusic#PlaybackStatusHasChanged_t)
 *
 * This struct holds information about a `ISteamMusic::PlaybackStatusHasChanged_t` callback.
 *
 * @member {Enum.SteamMusicPlaybackStatus} playback_status The new playback status.
 * @struct_end
 */

/**
 * @struct SteamMusicVolumeHasChanged
 * @description > **Steamworks Struct**: [ISteamMusic::VolumeHasChanged_t](https://partner.steamgames.com/doc/api/ISteamMusic#VolumeHasChanged_t)
 *
 * This struct holds information about a `ISteamMusic::VolumeHasChanged_t` callback.
 *
 * @member {Real} volume The new volume.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamMusicPlaybackStatus
 * @description > **Steamworks Enum**: [ISteamMusic::AudioPlayback_Status](https://partner.steamgames.com/doc/api/ISteamMusic#AudioPlayback_Status)
 *
 * This enum specificies the current playback status.
 *
 * @member Undefined The Steam music interface probably isn't enabled.
 * @member Playing Steam Music is currently playing.
 * @member Paused Steam Music is currently paused.
 * @member Idle Steam Music is currently stopped.
 * @enum_end 
 */

// MODULE

/**
 * @module music
 * @title Music
 * @desc > **Steamworks Interface**: [ISteamMusic](https://partner.steamgames.com/doc/api/ISteamMusic)
 * 
 * This module contains functions to control music playback in the Steam client.
 * 
 * This gives games the opportunity to do things like pause the music or lower the volume, when an important cut scene is shown, and start playing afterwards.
 * 
 * See [features/music_player](https://partner.steamgames.com/doc/features/music_player) for more information.
 * 
 * @section_func Functions
 * @desc These are the functions of the Music module:
 * @ref steam_music_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Music module:
 * @ref SteamMusic*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Music module:
 * @ref SteamMusic*
 * @section_end
 * @module_end
 */
