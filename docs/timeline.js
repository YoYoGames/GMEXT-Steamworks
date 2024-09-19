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
 * @param {real} priority Provide the priority to use when the UI is deciding which icons to display in crowded parts of the timeline. Events with larger priority values will be displayed more prominently than events with smaller priority values. This value must be between 0 and ${constant.steam_timeline_max_timeline_priority}.
 * @param {real} startOffsetSeconds The time offset in seconds to apply to the start of the event. Negative times indicate an event that happened in the past. One use of this parameter is to handle events whose significance is not clear until after the fact. For instance if the player starts a damage over time effect on another player, which kills them 3.5 seconds later, the game could pass -3.5 as the start offset and cause the event to appear in the timeline where the effect started.
 * @param {real} durationSeconds The duration of the event, in seconds. Pass 0 for instantaneous events. The final duration of the event cannot be larger than ${constant.steam_timeline_max_timeline_event_duration}.
 * @param {real} possibleClip Allows the game to describe events that should be suggested to the user as possible video clips. Use a ${constant.TimelineEventClipPriority} constant as the argument.
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
 * @param {real} mode The mode that the game is in. Use a ${constant.TimelineGameMode} constant.
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
 * @desc Controls the color of the timeline bar segments. The value names listed here map to a multiplayer game, where the user starts a game (in menus), then joins a multiplayer session that first has a character selection lobby then finally the multiplayer session starts. However, you can also map these values to any type of game. In a single player game where you visit towns & dungeons, you could set ${constant.steam_timeline_game_mode_menus} when the player is in a town buying items, ${constant.steam_timeline_game_mode_staging} for when a dungeon is loading and ${constant.steam_timeline_game_mode_playing} for when inside the dungeon fighting monsters.
 * @member steam_timeline_game_mode_invalid Invalid dummy value.
 * @member steam_timeline_game_mode_playing The player is fully loaded into the game and playing.
 * @member steam_timeline_game_mode_staging The player is in a multiplayer lobby.
 * @member steam_timeline_game_mode_menus The player is in the game's main menu or a pause menu.
 * @member steam_timeline_game_mode_loading_screen The player is waiting for a loading screen.
 * @member steam_timeline_game_mode_max One past the last valid value.
 * @const_end
 */

/**
 * @const TimelineEventClipPriority
 * @desc Used in ${function.steam_timeline_add_event}, where Featured events will be offered before Standard events.
 * @member steam_timeline_clip_priority_invalid Invalid dummy value.
 * @member steam_timeline_clip_priority_none This event is not appropriate as a clip.
 * @member steam_timeline_clip_priority_standard The user may want to make a clip around this event.
 * @member steam_timeline_clip_priority_featured The player will be likely to want a clip around event, and those clips should be promoted more prominently than clips with the steam_timeline_clip_priority_standard priority.
 * @const_end
 */

/**
 * @const TimelineMaxPriority
 * @desc May be used in ${function.steam_timeline_add_event} as the maximum value in an argument.
 * @member steam_timeline_max_timeline_priority Maximum timeline event priority value.
 * @const_end
 */

/**
 * @const TimelineMaxEventDuration
 * @desc May be used in ${function.steam_timeline_add_event} as the maximum value in an argument.
 * @member steam_timeline_max_timeline_event_duration Maximum timeline event duration value.
 * @const_end
 */

// MODULES

/**
 * @module timeline
 * @title Steam Timeline
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
