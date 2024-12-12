// FUNCTIONS

/**
 * @func steam_timeline_set_state_description
 * @desc Sets a description (B) for the current game state in the timeline. These help the user to find specific moments in the timeline when saving clips. Setting a new state description replaces any previous description.
 * 
 * Examples could include:
 * - Where the user is in the world in a single player game
 * - Which round is happening in a multiplayer game
 * - The current score for a sports game
 * 
 * @param {string} description A localized string in the game language
 * @param {real} timeDelta The time offset in seconds to apply to this state change. Negative times indicate an event that happened in the past.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_set_state_description("Earned x10 points as Cirno", -seconds);
 * ```
 * This sets some description for an event that happened `seconds` seconds ago.
 * @func_end
 */


/**
 * @func steam_timeline_clear_state_description
 * @desc Clears the previous set game state in the timeline.
 * 
 * @param {real} timeDelta The time offset in seconds to apply to this state change. Negative times indicate an event that happened in the past.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_clear_state_description(-seconds);
 * ```
 * This clears description for an event that happened `seconds` seconds ago.
 * @func_end
 */


/**
 * @func steam_timeline_add_event
 * @desc Use this to mark an event (A) on the Timeline. The event can be instantaneous or take some amount of time to complete, depending on the value passed in durationSeconds.
 * 
 * @param {string} icon The name of the icon to show at the timeline at this point. This can be one of the icons uploaded through the Steamworks partner Site for your title, or one of the provided icons that start with steam_. The Steam Timelines overview includes a list of available icons.
 * @param {string} title Title-provided localized string in the game language
 * @param {string} description Title-provided localized string in the game language
 * @param {real|constant.TimelineMaxPriority} priority Provide the priority to use when the UI is deciding which icons to display in crowded parts of the timeline. Events with larger priority values will be displayed more prominently than events with smaller priority values. This value must be between 0 and ${constant.TimelineMaxPriority}.
 * @param {real|constant.TimelineMaxEventDuration} startOffsetSeconds The time offset in seconds to apply to the start of the event. Negative times indicate an event that happened in the past. One use of this parameter is to handle events whose significance is not clear until after the fact. For instance if the player starts a damage over time effect on another player, which kills them 3.5 seconds later, the game could pass -3.5 as the start offset and cause the event to appear in the timeline where the effect started.
 * @param {real|constant.TimelineMaxEventDuration} durationSeconds The duration of the event, in seconds. Pass 0 for instantaneous events. The final duration of the event cannot be larger than ${constant.TimelineMaxEventDuration}.
 * @param {constant.TimelineEventClipPriority} possibleClip Allows the game to describe events that should be suggested to the user as possible video clips.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_add_event(
 *     "steam_achievement",                   // default steam_ icon name
 *     "Rensenware",                          // this should be in the user's preferred language
 *     "Scored 0.2 bln pts. in LUNATIC mode", // this should be in the user's preferred language
 *     100,                                   // between 0 and steam_timeline_max_timeline_priority inclusive
 *     -1.0,                                  // this event happened one second in the past
 *     10.0,                                  // this event took 10 seconds
 *     steam_timeline_clip_priority_standard  // you might want to clip this awesome event
 * );
 * ```
 * This example demonstrates how to add a timeline event.
 * @func_end
 */


/**
 * @func steam_timeline_start_event
 * @desc Use this to mark the start of an event (A) on the Timeline that takes some amount of time to complete. The duration of the event is determined by a matching call to EndRangeTimelineEvent. If the game wants to cancel an event in progress, they can do that with a call to ${function.steam_timeline_remove_event}.
 * 
 * The event in progress can be updated any number of times with ${function.steam_timeline_update_event}.
 * 
 * @param {string} icon The name of the icon to show at the timeline at this point. This can be one of the icons uploaded through the Steamworks partner Site for your title, or one of the provided icons that start with steam_. The Steam Timelines overview includes a list of available icons.
 * @param {string} title Title-provided localized string in the game language
 * @param {string} description Title-provided localized string in the game language
 * @param {real|constant.TimelineMaxPriority} priority Provide the priority to use when the UI is deciding which icons to display in crowded parts of the timeline. Events with larger priority values will be displayed more prominently than events with smaller priority values. This value must be between 0 and ${constant.TimelineMaxPriority}.
 * @param {real|constant.TimelineMaxEventDuration} startOffsetSeconds The time offset in seconds to apply to the start of the event. Negative times indicate an event that happened in the past. One use of this parameter is to handle events whose significance is not clear until after the fact. For instance if the player starts a damage over time effect on another player, which kills them 3.5 seconds later, the game could pass -3.5 as the start offset and cause the event to appear in the timeline where the effect started.
 * @param {constant.TimelineEventClipPriority} possibleClip Allows the game to describe events that should be suggested to the user as possible video clips.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * event_handle = steam_timeline_start_event(
 *     "steam_achievement",                   // default steam_ icon name
 *     "Rensenware",                          // this should be in the user's preferred language
 *     "Scored 0.2 bln pts. in LUNATIC mode", // this should be in the user's preferred language
 *     100,                                   // between 0 and steam_timeline_max_timeline_priority inclusive
 *     -1.0,                                  // this event started one second in the past
 *     steam_timeline_clip_priority_standard  // you might want to clip this awesome event
 * );
 * ```
 * This example demonstrates how to start a timeline event (where the duration is unknown).
 * @func_end
 */


/**
 * @func steam_timeline_update_event
 * @desc Use this to update the details of an event that was started with ${function.steam_timeline_start_event}.
 * 
 * @param {real} handle The handle for a previously created event.
 * @param {string} icon The name of the icon to show at the timeline at this point. This can be one of the icons uploaded through the Steamworks partner Site for your title, or one of the provided icons that start with steam_. The Steam Timelines overview includes a list of available icons.
 * @param {string} title Title-provided localized string in the game language
 * @param {string} description Title-provided localized string in the game language
 * @param {real|constant.TimelineMaxPriority} priority Provide the priority to use when the UI is deciding which icons to display in crowded parts of the timeline. Events with larger priority values will be displayed more prominently than events with smaller priority values. This value must be between 0 and ${constant.TimelineMaxPriority}.
 * @param {real|constant.TimelineMaxEventDuration} startOffsetSeconds The time offset in seconds to apply to the start of the event. Negative times indicate an event that happened in the past. One use of this parameter is to handle events whose significance is not clear until after the fact. For instance if the player starts a damage over time effect on another player, which kills them 3.5 seconds later, the game could pass -3.5 as the start offset and cause the event to appear in the timeline where the effect started.
 * @param {constant.TimelineEventClipPriority} possibleClip Allows the game to describe events that should be suggested to the user as possible video clips.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_update_event(
 *     event_handle,                          // handle to a previously created event
 *     "steam_achievement",                   // default steam_ icon name
 *     "Rensenware",                          // this should be in the user's preferred language
 *     "Scored 0.2 bln pts. in LUNATIC mode", // this should be in the user's preferred language
 *     100,                                   // between 0 and steam_timeline_max_timeline_priority inclusive
 *     -1.0,                                  // this event happened one second in the past
 *     steam_timeline_clip_priority_standard  // you might want to clip this awesome event
 * );
 * ```
 * This example demonstrates how to add a timeline event.
 * @func_end
 */


/**
 * @func steam_timeline_end_event
 * @desc Use this to identify the end of an event that was started with ${function.steam_timeline_start_event}.
 * 
 * @param {real} handle The handle for a previously created event.
 * @param {real|constant.TimelineMaxEventDuration} endOffsetSeconds The time offset in seconds to apply to the start of the event. Negative times indicate an event that happened in the past. One use of this parameter is to handle events whose significance is not clear until after the fact. For instance if the player starts a damage over time effect on another player, which kills them 3.5 seconds later, the game could pass -3.5 as the start offset and cause the event to appear in the timeline where the effect started.
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_end_event(
 *     event_handle,                          // handle to a previously created event
 *     -2.0,                                  // this event ended 2 seconds ago
 * );
 * ```
 * This example demonstrates how to add a timeline event.
 * @func_end
 */


/**
 * @func steam_timeline_remove_event
 * @desc Use this to remove a previously created event from the timeline.
 * 
 * @param {string} handle The handle for a previously created event.
 * @returns {bool}
 * 
 * @func_end
 */


/**
 * @func steam_timeline_event_recording_exists
 * @desc Use this to determine if video recordings exist for the specified game phase. This can be useful when the game needs to decide whether or not to show a control that will call ${function.steam_timeline_game_phase_open_overlay}.
 *  
 * @param {string} event_handle Handle of the event to check for recordings. 
 * @returns {bool}
 * 
 * @event steam
 * @member {string} event_type The string `"steam_timeline_event_recording_exists"`
 * @member {bool} success Whether or not the current task succeeded.
 * @member {string} recording_exists This is true if recording exists for the requested event handle.
 * @member {real} event_id The handle of the event that was asked about.
 * @event_end
 * 
 * @func_end
 */


/**
 * @func steam_timeline_event_open_overlay
 * @desc Opens the Steam overlay to the section of the timeline represented by the timeline event. This event must be in the current game session, since event handles values are not valid for future runs of the game.
 * 
 * @param {real} event_handle Handle of the event to show in the overlay.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_event_open_overlay(event_handle);
 * ```
 * This call will open the steam overlay showing the requested event.
 * @func_end
 */


/**
 * @func steam_timeline_game_phase_start
 * @desc Use this to start a game phase. Game phases allow the user to navigate their background recordings and clips. Exactly what a game phase means will vary game to game, but the game phase should be a section of gameplay that is usually between 10 minutes and a few hours in length, and should be the main way a user would think to divide up the game. These are presented to the user in a UI that shows the date the game was played, with one row per game slice. Game phases should be used to mark sections of gameplay that the user might be interested in watching.
 * 
 * Game phases are started with `steam_timeline_game_phase_start`, and while a phase is still happening, they can have tags and attributes added to them with ${function.steam_timeline_game_phase_add_tag} or ${function.steam_timeline_game_phase_set_attribute}. Only one game phase can be active at a time.
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_game_phase_start();
 * ```
 * This call will start a new game phase.
 * @func_end
 */


/**
 * @func steam_timeline_game_phase_end
 * @desc Use this to end a game phase that was started with ${function.steam_timeline_game_phase_start}.
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_game_phase_end();
 * ```
 * This call will end a current active phase.
 * @func_end
 */


/**
 * @func steam_timeline_game_phase_set_id
 * @desc The phase ID is used to let the game identify which phase it is referring to in calls to ${function.steam_timeline_game_phase_recording_exists} or ${function.steam_timeline_game_phase_open_overlay}. It may also be used to associated multiple phases with each other.
 * 
 * @param {string} phase_id A game-provided persistent ID for a game phase. This could be a the match ID in a multiplayer game, a chapter name in a single player game, the ID of a character, etc. 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_game_phase_set_id("Chapter I");
 * ```
 * This call will set the current phase id to "Chapter I".
 * @func_end
 */


/**
 * @func steam_timeline_game_phase_recording_exists
 * @desc Use this to determine if video recordings exist for the specified game phase. This can be useful when the game needs to decide whether or not to show a control that will call ${function.steam_timeline_game_phase_open_overlay}.
 *  
 * @param {string} phase_id A game-provided persistent ID for a game phase. 
 * @returns {bool}
 * 
 * @event steam
 * @member {string} event_type The string `"steam_timeline_game_phase_recording_exists"`
 * @member {bool} success Whether or not the current task succeeded.
 * @member {string} phase_id The phase ID that this result corresponds with.
 * @member {real} longest_clip_ms The total length of the longest clip in this phase in milliseconds.
 * @member {real} recording_ms The total length of the recordings in this phase in milliseconds.
 * @member {real} clip_count The number of clips that include video from this phase.
 * @member {real} screenshot_count The number of screenshots the user has from this phase.
 * @event_end
 * 
 * @func_end
 */


/**
 * @func steam_timeline_game_phase_add_tag
 * @desc Use this to add a game phase tag (F). Phase tags represent data with a well defined set of options, which could be data such as match resolution, hero played, game mode, etc. Tags can have an icon in addition to a text name. Multiple tags within the same group may be added per phase and all will be remembered. For example, `steam_timeline_game_phase_add_tag` may be called multiple times for a "Bosses Defeated" group, with different names and icons for each boss defeated during the phase, all of which will be shown to the user.
 * 
 * @param {string} name Title-provided localized string in the game language. 
 * @param {string} icon The name of the icon to show at the timeline at this point. This can be one of the icons uploaded through the Steamworks partner Site for your title, or one of the provided icons that start with steam_. The Steam Timelines overview includes a list of available icons.
 * @param {string} group Title-provided localized string in the game language. Tags within the same group will be shown together in the UI.
 * @param {real|constant.TimelineMaxPriority} priority Provide the priority to use when the UI is deciding which attributes to display. Attributes with larger priority values will be displayed more prominently than attributes with smaller priority values. This value must be between 0 and ${constant.TimelineMaxPriority}. 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_game_phase_set_attribute("My attribute", "0/0/0", 0.3);
 * ```
 * This call will set an attribute on the currently active game phase.
 * @func_end
 */


/**
 * @func steam_timeline_game_phase_set_attribute
 * @desc Use this to add a game phase attribute (E). Phase attributes represent generic text fields that can be updated throughout the duration of the phase. 
 * They are meant to be used for phase metadata that is not part of a well defined set of options. For example, a KDA attribute that starts with the value "0/0/0" and updates as the phase progresses, or something like a played-entered character name. Attributes can be set as many times as the game likes with `steam_timeline_game_phase_set_attribute`, and only the last value will be shown to the user.
 * 
 * @param {string} attribute_group Title-provided localized string in the game language. 
 * @param {string} attribute_value Title-provided localized string in the game language.
 * @param {real|constant.TimelineMaxPriority} priority Provide the priority to use when the UI is deciding which attributes to display. Attributes with larger priority values will be displayed more prominently than attributes with smaller priority values. This value must be between 0 and ${constant.TimelineMaxPriority}. 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_game_phase_set_attribute("My attribute", "0/0/0", 0.3);
 * ```
 * This call will set an attribute on the currently active game phase.
 * @func_end
 */


/**
 * @func steam_timeline_game_phase_open_overlay
 * @desc Opens the Steam overlay to the section of the timeline represented by the game phase.
 * 
 * @param {string} phase_id The game phase to show in the overlay.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_game_phase_open_overlay("Chapter I");
 * ```
 * This call will open the steam overlay showing the requested phase.
 * @func_end
 */


/**
 * @func steam_timeline_set_game_mode
 * @desc Changes the color of the timeline bar (C). See ${constant.TimelineGameMode} for how to use each value.
 * 
 * @param {constant.TimelineGameMode} mode The mode that the game is in.
 * @returns {bool}
 * 
 * @example
 * ```gml
 * steam_timeline_set_game_mode(steam_timeline_game_mode_playing);
 * ```
 * This call will change the current game mode to Playing.
 * @func_end
 */


// CONSTANTS

/**
 * @const TimelineGameMode
 * @desc Represents the possible game mode tags a timeline can have (influences the color scheme).
 * @member steam_timeline_game_mode_invalid Invalid dummy value.
 * @member steam_timeline_game_mode_playing Used when the player is fully loaded into the game and playing - for example inside the dungeon fighting monsters.
 * @member steam_timeline_game_mode_staging Used when some loading action is happening ingame - for example player is in a multiplayer lobby or for when a dungeon is loading.
 * @member steam_timeline_game_mode_menus Used when inside menus - for example the player adjusting settings or in a town buying items
 * @member steam_timeline_game_mode_loading_screen Used for loading screens.
 * @member steam_timeline_game_mode_max One past the last valid value.
 * @const_end
 */

/**
 * @const TimelineEventClipPriority
 * @desc Represents the possible priority a timeline event can have. Where 'steam_timeline_clip_priority_featured' is higher than 'steam_timeline_clip_priority_standard'.
 * @member steam_timeline_clip_priority_invalid Invalid dummy value.
 * @member steam_timeline_clip_priority_none This event is not appropriate as a clip.
 * @member steam_timeline_clip_priority_standard The user may want to make a clip around this event.
 * @member steam_timeline_clip_priority_featured The player will be likely to want a clip around event, and those clips should be promoted more prominently.
 * @const_end
 */

/**
 * @const TimelineMaxPriority
 * @desc Represents the maximum possible priority a timeline event can have.
 * @member steam_timeline_max_timeline_priority Maximum timeline event priority value.
 * @const_end
 */

/**
 * @const TimelineMaxEventDuration
 * @desc Represents the maximum possible duration a timeline event can have.
 * @member steam_timeline_max_timeline_event_duration Maximum timeline event duration value.
 * @const_end
 */

// MODULES

/**
 * @module timeline
 * @title Timeline
 * @desc Functions that allow the game to add events to the timeline that is displayed alongside recorded video.
 * 
 * Due to the experimental nature of Steam Timeline (currently), all extension functions return a boolean.
 * If it's true, it means that the Steam Timeline API is available and the call was made.
 * If it's false, it means that the Steam Timeline API is not available, the Steam Client is probably too old or not a Beta.
 * 
 * The (A), (B) and (C) marks in the function documentation refer to the parts of the Diagram image below.
 * 
 * Diagrams:
 * ![](assets/steam_timeline_diagram.png)
 * 
 * @section_func Functions
 * @desc The following functions can be used to access Steam Timeline from within GameMaker: 
 * @ref steam_timeline_set_state_description
 * @ref steam_timeline_clear_state_description
 * @ref steam_timeline_add_event
 * @ref steam_timeline_start_event
 * @ref steam_timeline_update_event
 * @ref steam_timeline_end_event
 * @ref steam_timeline_remove_event
 * @ref steam_timeline_event_overlay
 * @ref steam_timeline_event_recording_exists
 * @ref steam_timeline_game_phase_start
 * @ref steam_timeline_game_phase_end
 * @ref steam_timeline_game_phase_set_id
 * @ref steam_timeline_game_phase_add_tag
 * @ref steam_timeline_game_phase_set_attribute
 * @ref steam_timeline_game_phase_open_overlay
 * @ref steam_timeline_game_phase_recording_exists
 * @ref steam_timeline_set_game_mode
 * @section_end
 * 
 * @section_const Constants
 * @desc This section also provides the following constants to use with the functions:
 * @ref TimelineGameMode
 * @ref TimelineEventClipPriority
 * @ref TimelineMaxPriority
 * @ref TimelineMaxEventDuration
 * @section_end
 * @module_end
 */
