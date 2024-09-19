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
