// FUNCTIONS

/**
 * @func steam_set_achievement
 * @desc With this function you can tell the Steam API to award ("set") an achievement for the player. These achievements should have been defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel. The Steam Game Overlay will display a notification panel to the user informing them of the achievement that they have received, unless the achievement has already been awarded, in which case nothing will happen.
 * 
 * @param {string} ach_name The name of the achievement to set.
 * 
 * @example
 * ```gml
 * if hp <= 0
 * {
 *     global.Deaths += 1;
 *     if global.Deaths == 10
 *     {
 *         if !steam_get_achievement("ach_Player_Dies_Ten_Times") steam_set_achievement("ach_Player_Dies_Ten_Times");
 *     }
 * }
 * ```
 * The above code will reward the player an achievement if the global variable "Deaths" is equal to 10 and if the achievement has not already been awarded.
 * @func_end
 */

/**
 * @func steam_get_achievement
 * @desc With this function you can check the Steam API to see if a specific achievement has been awarded. The achievement should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.
 * 
 * @param {string} ach_name The name of the achievement to get.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if hp <= 0
 * {
 *     global.Deaths += 1;
 *     if global.Deaths == 10
 *     {
 *         if !steam_get_achievement("ach_Player_Dies_Ten_Times") steam_set_achievement("ach_Player_Dies_Ten_Times");
 *     }
 * }
 * ```
 * The above code will reward the player an achievement if the global variable "Deaths" is equal to 10 and if the achievement has not already been awarded.
 * @func_end
 */

/**
 * @func steam_clear_achievement
 * @desc With this function you can tell the Steam API to clear (reset) a specific achievement. The achievement should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.
 * 
 * @param {string} ach_name The name of the achievement to clear.
 * 
 * @example
 * ```gml
 * if mouse_check_button_pressed(mb_left)
 * {
 *     steam_clear_achievement("Ach_Game_Win");
 *     steam_clear_achievement("Ach_Died_10_Times");
 *     steam_clear_achievement("Ach_Killed_100_Enemies");
 *     steam_clear_achievement("Ach_Beat_Boss_Level_1");
 * }
 * ```
 * The above code will reset the achievements of the game when the user clicks the left mouse button.
 * @func_end
 */

/**
 * @func steam_set_stat_int
 * @desc With this function you can set a specific statistic to a new, signed integer, value. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel. Examples of when you could use this are for tracking how many times the player dies or for tracking progress towards an achievement.
 * 
 * @param {string} stat_name The name of the statistic to set.
 * @param {real} value The value to set the stat to.
 * 
 * @example
 * ```gml
 * xp += 100;
 * steam_set_stat_int("Total_XP", steam_get_stat_int("Total_XP") + 100);
 * if steam_get_stat_int("Total_XP") > 1000
 * {
 *     if !steam_get_achievement("Ach_1000XP") steam_set_achievement("Ach_1000XP");
 * }
 * ```
 * The above code sets a statistic and then checks the final value for it to decide whether to award an achievement or not.
 * @func_end
 */

/**
 * @func steam_set_stat_float
 * @desc With this function you can set a specific statistic to a new, floating point, value. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel. Examples of when you could use this are for tracking how far your player has travelled, or what percentage of the game is complete.
 * 
 * @param {string} stat_name The name of the statistic to set.
 * @param {real} value The value to set the stat to.
 * 
 * @example
 * ```gml
 * var _dist_pc = (dist / dist_max) * 100;
 * steam_set_stat_float("Travelled", _dist_pc);
 * ```
 * The above code calculates a percentage based on the distance travelled variable "dist" and the maximum distance you can travel "dist_max" and then sets the stat "Travelled" to the new value.
 * @func_end
 */

/**
 * @func steam_set_stat_avg_rate
 * @desc This function permits you to set an average statistic type with a "sliding window" effect on the average. The "session_count" value is the current value that you wish to average out, while the "session_length" is the amount of game time since the last call to the function. Please see the extended Example below for further details on how this can be used.
 * 
 * @param {string} stat_name The name of the statistic to set.
 * @param {real} session_count The value to get the average of.
 * @param {real} session_length The time that has been taken since the last time the stat was set.
 * 
 * @example
 * Since the average stat function can be complex to understand, we will illustrate its use with the following example. Consider the case where you'd like to track an average statistic, such as "Points earned per hour". One approach would be to have two stats: an *integer* stat, "TotalPoints", and a *float* stat "TotalPlayTimeHours", and then divide the total points by the total time to get the "Points per Hour" value.
 * However, once the player has accumulated a significant amount of playtime, the calculated average will change extremely slowly, and the more the user plays the game, the less responsive that average will be. If the user has spent 100 hours playing the game, the calculated average will "lag" by about 50 hours of that, and if they increase their skill, they will not see the increase in "Points Per Hour" that they expect. To get around that we can use a "sliding window" to only calculate the "Points per hour" for the last 10 hours played.
 * So, to use this function, we would need to create a Steam stat (in the control panel for the game on the Workshop) called "AvgPointsPerHour" and set its Window property to 10. Now in your game you would have to add some global variables into an instance at the start:
 * 
 * ```gml
 * global.Points = 0;
 * global.Time = 0;
 * ```
 * You would then have some controller object to count up the global "Time" variable in an alarm (for example) every second, while your game-play would affect the global "Points" variable. At regular intervals while playing (again, in a controller object, perhaps in an Alarm, or at intervals from polling the "Time" value) you would set the stat like this:
 * 
 * ```gml
 * steam_set_stat_avg_rate("AvgPointsPerHour", global.Points, (global.Time / 3600));
 * global.Points = 0;
 * global.Time = 0;
 * ```
 * Note that we divide time by 3600 since we want the time in *hours* and not in seconds, and afterward we reset the global "Points" variable and the global "Time" variable to 0 so that the next time the function is called, we get a new average for the statistic. Now, what Steam will do is take this value that you have sent and create an average value over the time that was set for our "window".
 * @func_end
 */

/**
 * @func steam_get_stat_int
 * @desc With this function you can get the value of a specific signed integer statistic. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.
 * 
 * @param {string} stat_name The name of the statistic to get.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * xp += 100;
 * steam_set_stat_int("Total_XP", steam_get_stat_int("Total_XP") + 100);
 * if steam_get_stat_int("Total_XP") > 1000
 * {
 *     if !steam_get_achievement("Ach_1000XP") steam_set_achievement("Ach_1000XP");
 * }
 * ```
 * The above code sets a statistic and then checks the final value for it to decide whether to award an achievement or not.
 * @func_end
 */

/**
 * @func steam_get_stat_float
 * @desc With this function you can get the value of a specific floating point statistic. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.
 * 
 * @param {string} stat_name The name of the statistic to get.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * var _dist_pc = (dist / dist_max) * 100;
 * if steam_get_stat_float("Travelled") < _dist_pc
 * {
 *     steam_set_stat_int("Travelled", _dist_pc);
 * }
 * ```
 * The above code calculates a percentage based on the distance travelled variable "dist" and the maximum distance you can travel "dist_max". It then polls the current value for the statistic "Travelled" and if it is less than the calculated value, it sets the stat again.
 * @func_end
 */

/**
 * @func steam_get_stat_avg_rate
 * @desc With this function you can get the value of a specific average statistic. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.
 * 
 * @param {string} stat_name The name of the statistic to get.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * var _avg = steam_get_stat_avg_rate("PointsPerHour");
 * draw_text(8, 8, "PPH = " + string(_avg);
 * ```
 * The above code gets the current value for the average statistic "PointsPerHour" and draws it on the screen.
 * @func_end
 */

/**
 * @func steam_reset_all_stats
 * @desc With this function you can reset all the statistics for the **current user** to their default values (as defined in the Steamworks control panel for your game). If need to also reset the achievement to their default values use the ${function.steam_reset_all_stats_achievements} instead.
 * 
 * [[NOTE: It is recommended that you only use this function as a debug tool when developing your game.]]
 * 
 * @example
 * ```gml
 * ini_open("Save.ini");
 * if global.Version != ini_read_real("Data", "Version", 0)
 * {
 *     ini_write_real("Data", "Version", global.Version);
 *     steam_reset_all_stats();
 * }
 * ini_close();
 * ```
 * The above code checks a stored value in an INI file against that of a global variable and if they are different, it resets the statistics for the game.
 * @func_end
 */

/**
 * @func steam_reset_all_stats_achievements
 * @desc With this function you can reset all the statistics *and* achievements for the **current user** to their default values (as defined in the Steamworks control panel for your game). If you only need to reset the stats to their default values use the ${function.steam_reset_all_stats} instead.
 * 
 * [[NOTE: It is recommended that you only use this function as a debug tool when developing your game.]]
 * 
 * @example
 * ```gml
 * ini_open("Save.ini");
 * if global.Version != ini_read_real("Data", "Version", 0)
 * {
 *     ini_write_real("Data", "Version", global.Version);
 *     steam_reset_all_stats_achievements();
 * }
 * ini_close();
 * ```
 * The above code checks a stored value in an INI file against that of a global variable and if they are different, it resets the statistics and achievements for the game.
 * @func_end
 */

/**
 * @func steam_request_global_stats
 * @desc This function asynchronously fetches global stats data, which is available for stats marked as "aggregated" in the App Admin panel of the Steamworks website.
 * 
 * @param {real} history_days The number of days of day-by-day history to retrieve in addition to the overall totals. The limit is 60.
 * 
 * @event steam
 * @member {string} event_type The string value `"steam_request_global_stats"`
 * @member {bool} success Whether the request completed successfully.
 * @event_end
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * /// Create Event
 * steam_request_global_stats(60);
 * 
 * /// Async Steam Event
 * var _type = async_load[?"event_type"];
 * var _success = async_load[?"success"];
 * if (_type == "steam_request_global_stats")
 * {
 *     show_debug_message("{0}: {1}", _type, _success);
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_request_global_achievement_percentages
 * @desc This function asynchronously fetches the data for the percentage of players who have received each achievement for the current game globally.
 * 
 * @event steam
 * @member {string} event_type The string value `"steam_request_global_stats"`
 * @member {bool} success Whether the request completed successfully.
 * @event_end
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * /// Create Event
 * steam_request_global_achievement_percentages();
 * 
 * /// Async Steam Event
 * var _type = async_load[?"event_type"];
 * var _success = async_load[?"success"];
 * if (_type == "steam_request_global_achievement_percentages")
 * {
 *     show_debug_message("{0}: {1}", _type, _success);
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_get_achievement_achieved_percent
 * @desc This function returns the percentage of users who have unlocked the specified achievement from 0 to 100.
 * 
 * If anything went wrong the value 0 is returned.
 * 
 * [[Note: You must have called ${function.steam_request_global_achievement_percentages} and it needs to return successfully via the ${event.steam} prior to calling this.]]
 * 
 * @param {string} stat_name The 'API Name' of the achievement.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * var _stat_name = "Win_5_Times_In_A_Row";
 * var _pct_users_achieved = steam_get_achievement_achieved_percent(_stat_name);
 * show_debug_message("{0} percent of users achieved {1}", _pct_users_achieved, _stat_name);
 * ```
 * The code example above shows how to call the function `steam_get_achievement_achieved_percent` and show the result in a descriptive debug message.
 * @func_end
 */

/**
 * @func steam_get_most_achieved_achievement_info
 * @desc This function gets the info on the most achieved achievement for the game.
 * 
 * [[Note: You must have called ${function.steam_request_global_achievement_percentages} and it needs to return successfully via the ${event.steam} prior to calling this.]]
 * 
 * @returns {struct.AchievementInfo}
 * 
 * @example
 * ```gml
 * var _info = steam_get_most_achieved_achievement_info();
 * while (_info.iterator != -1)
 * {
 *     show_debug_message($"{_info.achievement} - achieved: {_info.achieved} (unlocked by {_info.percent}% of players)");
 *     _info = steam_get_next_most_achieved_achievement_info(_info.iterator);
 * }
 * ```
 * The code example above shows how to loop through the most achieved achievements and show a debug message with info on each of them.
 * @func_end
 */

/**
 * @func steam_get_next_most_achieved_achievement_info
 * @desc This function gets the info on the next most achieved achievement for the game.
 * 
 * An iterator value of `-1` indicates that the previous item was the last one.
 * 
 * [[Note: You must have called ${function.steam_request_global_achievement_percentages} and it needs to return successfully via the ${event.steam} prior to calling this.]]
 * 
 * @param {real} iterator_previous The iterator value returned from the previous call to this function or from ${function.steam_get_most_achieved_achievement_info}.
 * 
 * @returns {struct.AchievementInfo}
 * 
 * @example
 * ```gml
 * var _info = steam_get_most_achieved_achievement_info();
 * while (_info.iterator != -1) {
 *     show_debug_message($"{_info.achievement} - achieved: {_info.achieved} (unlocked by {_info.percent}% of players)");
 *     _info = steam_get_next_most_achieved_achievement_info(_info.iterator);
 * }
 * ```
 * The code example above shows how to loop through the most achieved achievements and show a debug message with info on each of them.
 * @func_end
 */

/**
 * @func steam_get_global_stat_int
 * @desc This function gets the lifetime totals for an aggregated integer stat.
 * 
 * [[Note: You must have called ${function.steam_request_global_stats} and it needs to return successfully via its ${event.steam} prior to calling this.]]
 * 
 * [[Warning: This function only applies to stats marked as `int64` on the Steamwork dashboard]]
 * 
 * @param {string} stat_name The 'API Name' of the stat.
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * var _val = steam_get_global_stat_int("Eggs_Hatched");
 * ```
 * @func_end
 */

/**
 * @func steam_get_global_stat_real
 * @desc This function gets the lifetime totals for an aggregated stat.
 * 
 * [[Note: You must have called ${function.steam_request_global_stats} and it needs to return successfully via its ${event.steam} prior to calling this.]]
 * 
 * [[Warning: This function only applies to stats marked as `double` on the Steamwork dashboard]]
 * 
 * @param {string} stat_name The 'API Name' of the stat.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * var _val = steam_get_global_stat_real("Eggs_Hatched");
 * ```
 * @func_end
 */

/**
 * @func steam_get_global_stat_history_int
 * @desc This function gets the daily history for an aggregated stat.
 * 
 * [[Note: You must have called ${function.steam_request_global_stats} and it needs to return successfully via its ${event.steam} prior to calling this.]]
 * 
 * [[Note: The maximum number of items returned will be the value passed to ${function.steam_request_global_stats}.]]
 * 
 * [[Warning: This function only applies to stats marked as `int64` on the Steamwork dashboard]]
 * 
 * @param {string} stat_name The 'API Name' of the stat.
 * @returns {array[int64]}
 * 
 * @example
 * ```gml
 * var _name = "Eggs_Hatched";
 * var _arr_history = steam_get_global_stat_history("Eggs_Hatched");
 * show_debug_message("Evolution:");
 * array_foreach(_arr_history, function(_element, _index) { show_debug_message($"Day {_index}: {_element}"); });
 * ```
 * The code example above shows how to get the global stat history and show it using multiple debug messages.
 * @func_end
 */

/**
 * @func steam_get_global_stat_history_real
 * @desc This function gets the daily history for an aggregated stat.
 * 
 * [[Note: You must have called ${function.steam_request_global_stats} and it needs to return successfully via its ${event.steam} prior to calling this.]]
 * 
 * [[Note: The maximum number of items returned will be the value passed to ${function.steam_request_global_stats}.]]
 * 
 * [[Warning: This function only applies to stats marked as `real` on the Steamwork dashboard]]
 * 
 * @param {string} stat_name The 'API Name' of the stat.
 * @returns {array[real]}
 * 
 * @example
 * ```gml
 * var _name = "Eggs_Hatched";
 * var _arr_history = steam_get_global_stat_history("Eggs_Hatched");
 * show_debug_message("Evolution:");
 * array_foreach(_arr_history, function(_element, _index) { show_debug_message($"Day {_index}: {_element}"); });
 * ```
 * The code example above shows how to get the global stat history and show it using multiple debug messages.
 * @func_end
 */

// STRUCTS

/**
 * @struct AchievementInfo
 * @desc This struct holds information about an achievement.
 * @member {real} iterator The iterator value at the given achievement. A value of `-1` indicates that the previously returned item was the last item.
 * @member {real} percent The percentage of people that have unlocked this achievement from 0 to 100.
 * @member {string} achievement The 'API Name' of the achievement.
 * @member {bool} achieved Whether the player achieved this achievement.
 * @struct_end
 */

// MODULES

/**
 * @module achievements
 * @title Stats and Achievements
 * @desc The Steam Stats and Achievements API provides an easy way for your game to provide persistent, roaming achievement and statistics tracking for your users. The user's data is associated with their Steam account, and each user's achievements and statistics can be formatted and displayed in their Steam Community Profile.
 * 
 * [[NOTE: You must wait until ${function.steam_stats_ready} has returned `true`, before attempting to read or write stats and achievements.]]
 * 
 * If the user is in Offline Mode, Steam keeps a local cache of the stats and achievement data so that the APIs can be used as normal. Any stats unable to be committed are saved for the next time the user is online. In the event that there have been modifications on more than one machine, Steam will automatically merge achievements and choose the set of stats that has had more progress. Because Steam keeps a local cache of stats data it is not necessary for the game to *also* keep a local cache of the data on disk, especially as such caches often come in conflict and when they do it looks to a users as if their progress has been reverted, which is a frustrating experience.
 * 
 * @section_func Achievements Functions
 * @desc In addition to providing highly-valued rewards to players of your games, achievements are useful for encouraging and rewarding teamwork and player interaction, providing extra dimensionality to the game's objectives, and rewarding users for spending more of their time in-game, and as such it is recommended that your game has a few. They are easily set up from the Steam Dashboard, but will require that you create special Icons for them.
 * The following functions are provided for working with achievements:
 * @ref steam_set_achievement
 * @ref steam_get_achievement
 * @ref steam_clear_achievement
 * @section_end
 * 
 * @section_func Statistics Functions
 * @desc Statistics track fine-grained pieces of information, such as play time, number of power-ups used, etc. You may choose to use them simply for tracking internal game data - so that, for instance, you can grant an achievement based on multi-session gameplay statistics collected from the user across multiple computers. Or, you can track interesting game data for display on the user's Steam Community page, where users can compare their own stats against their friends.
 * 
 * [[NOTE: Before being used, statistics must be initialized from the Steamworks control panel for your game.]]
 * 
 * The following functions are provided for working with statistics:
 * @ref steam_set_stat_int
 * @ref steam_set_stat_float
 * @ref steam_set_stat_avg_rate
 * @ref steam_get_stat_int
 * @ref steam_get_stat_float
 * @ref steam_get_stat_avg_rate
 * @section_end
 * 
 * @section_func Debug Functions
 * @desc The following functions are provided for debugging purposes and are not recommended in the production version of you game:
 * 
 * @ref steam_reset_all_stats
 * @ref steam_reset_all_stats_achievements
 * 
 * @section_end
 * 
 * @section_func 
 * @desc The following functions are provided for working with global stats: 
 * @ref steam_request_global_stats
 * @ref steam_request_global_achievement_percentages
 * @ref steam_get_achievement_achieved_percent
 * @ref steam_get_most_achieved_achievement_info
 * @ref steam_get_next_most_achieved_achievement_info
 * @ref steam_get_global_stat_int
 * @ref steam_get_global_stat_real
 * @ref steam_get_global_stat_history_int
 * @ref steam_get_global_stat_history_real
 * @section_end
 * 
 * @section_struct
 * @desc The following structs are used with stats and achievements: 
 * @ref AchievementInfo
 * @section_end
 * 
 * @module_end
 */
