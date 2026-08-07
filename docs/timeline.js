
// FUNCTIONS

/**
 * @function steam_timeline_set_timeline_tooltip
 * @description > **Steamworks Function**: [ISteamTimeline::SetTimelineTooltip](https://partner.steamgames.com/doc/api/ISteamTimeline#SetTimelineTooltip)
 *
 * This function sets a description for the current game state in the timeline. These help the user to find specific moments in the timeline when saving clips. Setting a new state description replaces any previous description.
 *
 * @param {String} description A localised string in the language returned by the ${function.steam_utils_get_steam_ui_language} call.
 * @param {Real} time_delta_seconds The number of seconds ago that this state change occurred; negative values mark events in the past.
 * @function_end 
 */

/**
 * @function steam_timeline_clear_timeline_tooltip
 * @description > **Steamworks Function**: [ISteamTimeline::ClearTimelineTooltip](https://partner.steamgames.com/doc/api/ISteamTimeline#ClearTimelineTooltip)
 *
 * This function clears the previously set game state in the timeline.
 *
 * @param {Real} time_delta_seconds The number of seconds ago that this state change occurred; negative values mark events in the past.
 * @function_end 
 */

/**
 * @function steam_timeline_add_instantaneous_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::AddInstantaneousTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#AddInstantaneousTimelineEvent)
 *
 * This function is used to mark an event on the Timeline. This event will be instantaneous. (See ${function.steam_timeline_add_range_timeline_event} to add events that happened over time.)
 *
 * @param {String} title A title-provided localised string in the UI language.
 * @param {String} description A title-provided localised string in the UI language.
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `"steam_"`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `STEAM_TIMELINE_MAX_TIMELINE_PRIORITY`.
 * @param {Real} start_offset_seconds The number of seconds before the current time that the event started; negative values indicate the past, which is useful for events whose significance only becomes apparent later.
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip Lets the game flag the event as a suggested video clip.
 * @returns {Real} Timeline event handle that can be used with ${function.steam_timeline_remove_timeline_event} or the overlay functions ${function.steam_timeline_does_event_recording_exist} and ${function.steam_timeline_open_overlay_to_timeline_event}.
 * @function_end 
 */

/**
 * @function steam_timeline_add_range_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::AddRangeTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#AddRangeTimelineEvent)
 *
 * This function is used to mark an event on the Timeline that takes some amount of time to complete.
 *
 * @param {String} title A title-provided localised string in the UI language.
 * @param {String} description A title-provided localised string in the UI language.
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `"steam_"`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `STEAM_TIMELINE_MAX_TIMELINE_PRIORITY`.
 * @param {Real} start_offset_seconds The number of seconds before the current time that the event started; negative values indicate the past, which is useful for retroactively significant events.
 * @param {Real} duration_seconds The length of the event in seconds; use 0 for instantaneous events.
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip Lets the game flag the event as a suggested video clip.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_timeline_start_range_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::StartRangeTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#StartRangeTimelineEvent)
 *
 * This function is used to mark the start of an event on the Timeline that takes some amount of time to complete. The duration of the event is determined by a matching call to ${function.steam_timeline_end_range_timeline_event}. If the game wants to cancel an event in progress, they can do that with a call to ${function.steam_timeline_remove_timeline_event}.
 * 
 * The event in progress can be updated any number of times with ${function.steam_timeline_update_range_timeline_event}.
 *
 * @param {String} title A title-provided localised string in the UI language.
 * @param {String} description A title-provided localised string in the UI language.
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `"steam_"`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `STEAM_TIMELINE_MAX_TIMELINE_PRIORITY`.
 * @param {Real} start_offset_seconds The number of seconds before the current time that the event started; negative values indicate the past, which is useful for retroactively significant events.
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip Lets the game flag the event as a suggested video clip.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_timeline_update_range_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::UpdateRangeTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#UpdateRangeTimelineEvent)
 *
 * This function is used to update the details of an event that was started with ${function.steam_timeline_start_range_timeline_event}.
 *
 * @param {Real} event_handle The handle of the event to update.
 * @param {String} title A title-provided localised string in the UI language.
 * @param {String} description A title-provided localised string in the UI language.
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `"steam_"`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `STEAM_TIMELINE_MAX_TIMELINE_PRIORITY`.
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip Lets the game flag the event as a suggested video clip.
 * @function_end 
 */

/**
 * @function steam_timeline_end_range_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::EndRangeTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#EndRangeTimelineEvent)
 *
 * This function is used to end an event that was started with ${function.steam_timeline_start_range_timeline_event}.
 *
 * @param {Real} event_handle The handle of the event to end.
 * @param {Real} end_offset_seconds The number of seconds before the current time that the event ended; negative values indicate the past.
 * @function_end 
 */

/**
 * @function steam_timeline_remove_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::RemoveTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#RemoveTimelineEvent)
 *
 * This function is used to remove an event that was added with ${function.steam_timeline_add_instantaneous_timeline_event} or ${function.steam_timeline_add_range_timeline_event}.
 *
 * @param {Real} event_handle The handle of the event to remove.
 * @function_end 
 */

/**
 * @function steam_timeline_does_event_recording_exist
 * @description > **Steamworks Function**: [ISteamTimeline::DoesEventRecordingExist](https://partner.steamgames.com/doc/api/ISteamTimeline#DoesEventRecordingExist)
 *
 * This function is used to determine if video recordings exist for the specified event. Steam will sent a [SteamTimelineEventRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineEventRecordingExists_t) callback with the result. This can be useful when the game needs to decide whether or not to show a control that will call ${function.steam_timeline_open_overlay_to_timeline_event}.
 *
 * @param {Real} event_handle The handle of the event to check for recordings.
 * @returns {Real}
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamTimeline::SteamTimelineEventRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineEventRecordingExists_t)
 * 
 * Called when asking if recordings exist for an event handle.
 * 
 * @member {Struct.SteamTimelineEventRecordingExists} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_timeline_start_game_phase
 * @description > **Steamworks Function**: [ISteamTimeline::StartGamePhase](https://partner.steamgames.com/doc/api/ISteamTimeline#StartGamePhase)
 *
 * This function is used to start a game phase.
 * 
 * Game phases allow the user to navigate their background recordings and clips. Exactly what a game phase means will vary game to game, but the game phase should be a section of gameplay that is usually between 10 minutes and a few hours in length, and should be the main way a user would think to divide up the game.
 * 
 * Game phases are started with ${function.steam_timeline_start_game_phase}, and while a phase is still happening, they can have tags and attributes added to them with ${function.steam_timeline_add_game_phase_tag} or ${function.steam_timeline_set_game_phase_attribute}. Only one game phase can be active at a time.
 *
 * @function_end
 */

/**
 * @function steam_timeline_end_game_phase
 * @description > **Steamworks Function**: [ISteamTimeline::EndGamePhase](https://partner.steamgames.com/doc/api/ISteamTimeline#EndGamePhase)
 *
 * This function is used to end a game phase that was started with ${function.steam_timeline_start_game_phase}.
 *
 * @function_end
 */

/**
 * @function steam_timeline_set_game_phase_id
 * @description > **Steamworks Function**: [ISteamTimeline::SetGamePhaseID](https://partner.steamgames.com/doc/api/ISteamTimeline#SetGamePhaseID)
 *
 * This function sets a phase ID that is used to let the game identify which phase it is referring to in calls to ${function.steam_timeline_does_game_phase_recording_exist} or ${function.steam_timeline_open_overlay_to_game_phase}. It may also be used to associate multiple phases with each other.
 *
 * @param {String} phase_id A game-provided persistent ID for a game phase, such as the match ID in a multiplayer game, a chapter name in a single player game, the ID of a character, etc.
 * @function_end
 */

/**
 * @function steam_timeline_does_game_phase_recording_exist
 * @description > **Steamworks Function**: [ISteamTimeline::DoesGamePhaseRecordingExist](https://partner.steamgames.com/doc/api/ISteamTimeline#DoesGamePhaseRecordingExist)
 *
 * This function is used to determine if video recordings exist for the specified game phase. Steam will sent a [SteamTimelineGamePhaseRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineGamePhaseRecordingExists_t) callback with the result. This can be useful when the game needs to decide whether or not to show a control that will call ${function.steam_timeline_open_overlay_to_game_phase}.
 *
 * @param {String} phase_id A game-provided persistent ID for a game phase.
 * @returns {Real}
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamTimeline::SteamTimelineGamePhaseRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineGamePhaseRecordingExists_t)
 * 
 * Called when asking if recordings exist for an event handle.
 * 
 * @member {Struct.SteamTimelineGamePhaseRecordingExists} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_timeline_add_game_phase_tag
 * @description > **Steamworks Function**: [ISteamTimeline::AddGamePhaseTag](https://partner.steamgames.com/doc/api/ISteamTimeline#AddGamePhaseTag)
 *
 * This function is used to add a game phase tag.
 *
 * @param {String} tag_name A title-provided localized string in the language returned by ${function.steam_utils_get_steam_ui_language}.
 * @param {String} tag_icon The name of the icon to show when the tag is displayed in the UI; this can be a title-uploaded icon or one of the provided icons whose name begins with `"steam_"`.
 * @param {String} tag_group A title-provided localized string; tags within the same group will be shown together in the UI.
 * @param {Real} priority The priority used to decide which icons to show; tags with larger priority values are displayed more prominently, and the value must be between 0 and `STEAM_TIMELINE_MAX_TIMELINE_PRIORITY`.
 * @function_end
 */

/**
 * @function steam_timeline_set_game_phase_attribute
 * @description > **Steamworks Function**: [ISteamTimeline::SetGamePhaseAttribute](https://partner.steamgames.com/doc/api/ISteamTimeline#SetGamePhaseAttribute)
 *
 * This function is used to add a game phase attribute. Phase tags represent data with a well defined set of options, which could be data such as match resolution, hero played, game mode, etc. Tags can have an icon in addition to a text name. Multiple tags within the same group may be added per phase and all will be remembered.
 *
 * @param {String} attribute_group A title-provided localised string in the language returned by ${function.steam_utils_get_steam_ui_language}.
 * @param {String} attribute_value A title-provided localised string in the language returned by ${function.steam_utils_get_steam_ui_language}.
 * @param {Real} priority The priority used to decide which attributes to show; attributes with larger priority values are displayed more prominently, and the value must be between 0 and `STEAM_TIMELINE_MAX_TIMELINE_PRIORITY`.
 * @function_end
 */

/**
 * @function steam_timeline_set_timeline_game_mode
 * @description > **Steamworks Function**: [ISteamTimeline::SetTimelineGameMode](https://partner.steamgames.com/doc/api/ISteamTimeline#SetTimelineGameMode)
 *
 * This function changes the color of the timeline bar.
 *
 * @param {Enum.SteamTimelineGameMode} mode The mode that the game is in.
 * @function_end
 */

/**
 * @function steam_timeline_open_overlay_to_game_phase
 * @description > **Steamworks Function**: [ISteamTimeline::OpenOverlayToGamePhase](https://partner.steamgames.com/doc/api/ISteamTimeline#OpenOverlayToGamePhase)
 *
 * This function opens the Steam overlay to the section of the timeline represented by the game phase.
 *
 * @param {String} phase_id The game phase to show in the overlay.
 * @function_end
 */

/**
 * @function steam_timeline_open_overlay_to_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::OpenOverlayToTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#OpenOverlayToTimelineEvent)
 *
 * This function opens the Steam overlay to the section of the timeline represented by the timeline event. This event must be in the current game session, since [TimelineEventHandle_t](https://partner.steamgames.com/doc/api/ISteamTimeline#TimelineEventHandle_t) values are not valid for future runs of the game.
 *
 * @param {Real} event_handle The handle of the event to show in the overlay.
 * @function_end
 */

/**
 * @function steam_timeline_set_callback_game_phase_recording_exists
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when asking if recordings exist for a game phase ID.
 * 
 * See: [ISteamTimeline::SteamTimelineGamePhaseRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineGamePhaseRecordingExists_t)
 * 
 * See: ${struct.SteamTimelineGamePhaseRecordingExists}
 *
 * @param {Function} callback The function to be called when a game phase recording exists event occurs.
 * @function_end
 */

/**
 * @function steam_timeline_clear_callback_game_phase_recording_exists
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_timeline_set_callback_game_phase_recording_exists}.
 *
 * @function_end
 */

/**
 * @function steam_timeline_set_callback_event_recording_exists
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when asking if recordings exist for an event handle.
 * 
 * See: [ISteamTimeline::SteamTimelineEventRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineEventRecordingExists_t)
 * 
 * See: ${struct.SteamTimelineEventRecordingExists}
 *
 * @param {Function} callback The function to be called when an event recording exists event occurs.
 * @function_end
 */

/**
 * @function steam_timeline_clear_callback_event_recording_exists
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_timeline_set_callback_event_recording_exists}.
 *
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamTimelineGamePhaseRecordingExists
 * @description > **Steamworks Struct**: [ISteamTimeline::SteamTimelineGamePhaseRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineGamePhaseRecordingExists_t)
 *
 * This struct holds the result when asking if recordings exist for an event handle.
 *
 * @member {String} phase_id The phase ID that this result corresponds with.
 * @member {Real} recording_ms The total length of the recordings in this phase in milliseconds.
 * @member {Real} longest_clip_ms The total length of the longest clip in this phase in milliseconds.
 * @member {Real} clip_count The number of clips that include video from this phase.
 * @member {Real} screenshot_count The number of screenshots the user has from this phase.
 * @struct_end 
 */

/**
 * @struct SteamTimelineEventRecordingExists
 * @description > **Steamworks Struct**: [ISteamTimeline::SteamTimelineEventRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineEventRecordingExists_t)
 *
 * This struct holds the result when asking if recordings exist for an event handle.
 *
 * @member {Real} event_id The handle of the event that was asked about.
 * @member {Bool} recording_exists This is `true` if a recording exists for the requested event handle.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamTimelineGameMode
 * @description > **Steamworks Enum**: [ISteamTimeline::ETimelineGameMode](https://partner.steamgames.com/doc/api/ISteamTimeline#ETimelineGameMode)
 *
 * This enum controls the color of the timeline bar segments.
 *
 * @member Playing The player is fully loaded into the game and playing.
 * @member Staging The player is in a multiplayer lobby.
 * @member Menus The player is in the game's main menu or a pause menu.
 * @member LoadingScreen The player is waiting for a loading screen.
 * @enum_end 
 */

/**
 * @enum SteamTimelineEventClipPriority
 * @description > **Steamworks Enum**: [ISteamTimeline::ETimelineEventClipPriority](https://partner.steamgames.com/doc/api/ISteamTimeline#ETimelineEventClipPriority)
 *
 * This enum is used in ${function.steam_timeline_add_instantaneous_timeline_event} and ${function.steam_timeline_add_range_timeline_event}, where Featured events will be offered before Standard events.
 *
 * @member None This event is not appropriate as a clip.
 * @member Standard The user may want to make a clip around this event.
 * @member Featured The player will be likely to want a clip around event, and those clips should be promoted more prominently than clips with the `SteamTimelineEventClipPriority.Standard` priority.
 * @enum_end
 */

// MODULE

/**
 * @module timeline
 * @title Timeline
 * @desc > **Steamworks Interface**: [ISteamTimeline](https://partner.steamgames.com/doc/api/ISteamTimeline)
 * 
 * This module contains functions that allow the game to add events to the timeline that is displayed alongside recorded video.
 * 
 * See [Steam Timelines](https://partner.steamgames.com/doc/features/timeline) and diagram at the bottom of page for more information.
 * 
 * @section_func Functions
 * @desc These are the functions of the Timeline module:
 * @ref steam_timeline_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Timeline module:
 * @ref SteamTimeline*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Timeline module:
 * @ref SteamTimeline*
 * @section_end
 * @module_end
 */
