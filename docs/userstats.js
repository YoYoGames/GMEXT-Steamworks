
// FUNCTIONS

/**
 * @function steam_userstats_get_stat_int
 * @description > **Steamworks Function**: [ISteamUserStats::GetStat](https://partner.steamgames.com/doc/api/ISteamUserStats#GetStat)
 *
 * This function gets the current value of the given integer stat for the current user.
 * 
 * To receive stats for other users use ${function.steam_userstats_user_stat_int}.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_userstats_get_stat_float
 * @description > **Steamworks Function**: [ISteamUserStats::GetStat](https://partner.steamgames.com/doc/api/ISteamUserStats#GetStat)
 *
 * This function gets the current value of the given floating point stat for the current user.
 * 
 * To receive stats for other users use ${function.steam_userstats_user_stat_float}.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_userstats_set_stat_int
 * @description > **Steamworks Function**: [ISteamUserStats::SetStat](https://partner.steamgames.com/doc/api/ISteamUserStats#SetStat)
 *
 * This function sets / updates the value of a given integer stat for the current user.
 * 
 * This call only modifies Steam's in-memory state and is very cheap. Doing so allows Steam to persist the changes even in the event of a game crash or unexpected shutdown.
 * 
 * To submit the stats to the server you must call ${function.steam_userstats_store_stats}.
 * 
 * If this is returning `false` and everything appears correct, then check to ensure that your changes in the App Admin panel of the Steamworks website are published.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @param {Real} data The new value of the stat. This must be an absolute value; it will not increment or decrement for you.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_set_stat_float
 * @description > **Steamworks Function**: [ISteamUserStats::SetStat](https://partner.steamgames.com/doc/api/ISteamUserStats#SetStat)
 *
 * This function sets / updates the value of a given floating point stat for the current user.
 * 
 * This call only modifies Steam's in-memory state and is very cheap. Doing so allows Steam to persist the changes even in the event of a game crash or unexpected shutdown.
 * 
 * To submit the stats to the server you must call ${function.steam_userstats_store_stats}.
 * 
 * If this is returning `false` and everything appears correct, then check to ensure that your changes in the App Admin panel of the Steamworks website are published.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @param {Real} data The new value of the stat. This must be an absolute value; it will not increment or decrement for you.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_update_avg_rate_stat
 * @description > **Steamworks Function**: [ISteamUserStats::UpdateAvgRateStat](https://partner.steamgames.com/doc/api/ISteamUserStats#UpdateAvgRateStat)
 *
 * This function updates an AVGRATE stat with new values.
 * 
 * This call only modifies Steam's in-memory state and is very cheap. Doing so allows Steam to persist the changes even in the event of a game crash or unexpected shutdown.
 * 
 * To submit the stats to the server you must call ${function.steam_userstats_store_stats}.
 * 
 * If this is returning `false` and everything appears correct, then check to ensure that your changes in the App Admin panel of the Steamworks website are published.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @param {Real} count_this_session The value accumulation since the last call to this function.
 * @param {Real} session_length The amount of time in seconds since the last call to this function.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_get_achievement
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievement](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievement)
 *
 * This function gets the unlock status of the Achievement.
 * 
 * The equivalent function for other users is ${function.steam_userstats_user_achievement}.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_set_achievement
 * @description > **Steamworks Function**: [ISteamUserStats::SetAchievement](https://partner.steamgames.com/doc/api/ISteamUserStats#SetAchievement)
 *
 * This function unlocks an achievement.
 * 
 * You can unlock an achievement multiple times so you don't need to worry about only setting achievements that aren't already set. This call only modifies Steam's in-memory state so it is quite cheap. To send the unlock status to the server and to trigger the Steam overlay notification you must call ${function.steam_userstats_store_stats}.
 *
 * @param {String} achievement_name The "API Name" of the achievement to unlock.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_clear_achievement
 * @description > **Steamworks Function**: [ISteamUserStats::ClearAchievement](https://partner.steamgames.com/doc/api/ISteamUserStats#ClearAchievement)
 *
 * This function resets the unlock status of an achievement.
 * 
 * This is primarily only ever used for testing.
 * 
 * This call only modifies Steam's in-memory state so it is quite cheap. To send the unlock status to the server and to trigger the Steam overlay notification you must call ${function.steam_userstats_store_stats}.
 *
 * @param {String} achievement_name The "API Name" of the achievement to reset.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_and_unlock_time
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementAndUnlockTime](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementAndUnlockTime)
 *
 * This function gets the achievement status, and the time it was unlocked if unlocked.
 * 
 * If the return value is `true`, but the unlock time is zero, that means it was unlocked before Steam began tracking achievement unlock times (December 2009). The time is provided in Unix epoch format, seconds since January 1, 1970 UTC.
 * 
 * The equivalent function for other users is ${function.steam_userstats_user_achievement_and_unlock_time}.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 * @function_end 
 */

/**
 * @function steam_userstats_store_stats
 * @description > **Steamworks Function**: [ISteamUserStats::StoreStats](https://partner.steamgames.com/doc/api/ISteamUserStats#StoreStats)
 *
 * This function sends the changed stats and achievements data to the server for permanent storage.
 * 
 * If this fails then nothing is sent to the server. You may keep trying until the call is successful. Also note, however, that Steam will make another attempt to store the stats on game exit, if there are any changes.
 * 
 * This call can be rate limited. Call frequency should be on the order of minutes, rather than seconds. You should only be calling this during major state changes such as the end of a round, the map changing, or the user leaving a server. This call is required to display the achievement unlock notification dialog though, so if you have called ${function.steam_userstats_set_achievement} then it's advisable to call this soon after that.
 * 
 * If you have stats or achievements that you have saved locally but haven't uploaded with this function when your application process ends then this function will automatically be called.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_icon
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementIcon](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementIcon)
 *
 * This function gets the icon for an achievement.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Real}
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUserStats::UserAchievementIconFetched_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserAchievementIconFetched_t)
 * 
 * Triggered as a result of an achievement icon that has been fetched.
 * 
 * @member {Struct.SteamUserStatsAchievementIconFetched} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_achievement_display_attribute
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementDisplayAttribute](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementDisplayAttribute)
 *
 * This function gets general attributes for an achievement. Currently provides: Name, Description, and Hidden status.
 * 
 * This receives the value from a dictionary/map keyvalue store, so you must provide one of the following keys.
 * `"name"` to retrieve the localized achievement name in UTF-8
 * `"desc"` to retrieve the localized achievement description in UTF-8
 * `"hidden"` for retrieving if an achievement is hidden. Returns "0" when not hidden, "1" when hidden.
 * 
 * This localisation is provided based on the game's language if it's set, otherwise it checks if a localisation is avilable for the users Steam UI Language. If that fails too, then it falls back to English.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @param {String} key The "key" to get a value for.
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_userstats_indicate_achievement_progress
 * @description > **Steamworks Function**: [ISteamUserStats::IndicateAchievementProgress](https://partner.steamgames.com/doc/api/ISteamUserStats#IndicateAchievementProgress)
 *
 * This function shows the user a pop-up notification with the current progress of an achievement.
 * 
 * Calling this function will NOT set the progress or unlock the achievement, the game must do that manually by calling ${function.steam_userstats_set_stat_float}/${function.steam_userstats_set_stat_int}!
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @param {Real} cur_progress The current progress.
 * @param {Real} max_progress The progress required to unlock the achievement.
 * @returns {Bool}
 * 
 * @event callback
 * @member {Struct.SteamUserStatsUserStatsStored} result The result of the request to store the user stats.
 * @event_end
 * 
 * @event callback
 * @member {Struct.SteamUserStatsUserAchievementStored} result The result of the "indicate progress" call.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_userstats_num_achievements
 * @description > **Steamworks Function**: [ISteamUserStats::GetNumAchievements](https://partner.steamgames.com/doc/api/ISteamUserStats#GetNumAchievements)
 *
 * This function gets the number of achievements defined in the App Admin panel of the Steamworks website.
 * 
 * This is used for iterating through all of the achievements with ${function.steam_userstats_achievement_name}.
 * 
 * In general games should not need these functions because they should have a list of existing achievements compiled into them.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_name
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementName](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementName)
 *
 * This function gets the "API name" for an achievement index between 0 and ${function.steam_userstats_num_achievements}.
 *
 * @param {Real} index The index of the achievement, between 0 and the total number of achievements.
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_userstats_request_user_stats
 * @description > **Steamworks Function**: [ISteamUserStats::RequestUserStats](https://partner.steamgames.com/doc/api/ISteamUserStats#RequestUserStats)
 *
 * This function asynchronously downloads stats and achievements for the specified user from the server.
 * 
 * These stats are not automatically updated; you'll need to call this function again to refresh any data that may have changed.
 * 
 * To keep from using too much memory, a least recently used cache (LRU) is maintained and other users' stats will occasionally be unloaded. When this happens a [UserStatsUnloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsUnloaded_t) callback is sent. After receiving this callback the user's stats will be unavailable until this function is called again.
 *
 * @param {Real} steam_id_user The Steam ID of the user to request stats for.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::UserStatsReceived_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsReceived_t)
 *
 * Called when the latest stats and achievements for a user have been received from the server.
 *
 * @member {Struct.SteamUserStatsUserStatsReceived} result The result of the operation.
 * @event_end
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUserStats::UserStatsUnloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsUnloaded_t)
 * 
 * Callback indicating that a user's stats have been unloaded.
 * 
 * Call ${function.steam_userstats_request_user_stats} again before accessing stats for this user.
 * 
 * @member {Struct.SteamUserStatsUnloaded} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_user_stat_int
 * @description > **Steamworks Function**: [ISteamUserStats::GetUserStat](https://partner.steamgames.com/doc/api/ISteamUserStats#GetUserStat)
 *
 * This function gets the current value of the given integer stat for the specified user.
 * 
 * You must have called ${function.steam_userstats_request_user_stats} and it needs to return successfully via its callback prior to calling this.
 * 
 * The equivalent function for the local user is ${function.steam_userstats_get_stat_int}, the equivalent function for game servers is [ISteamGameServerStats::GetUserStat](https://partner.steamgames.com/doc/api/ISteamGameServerStats#GetUserStat).
 *
 * @param {Real} steam_id_user The Steam ID of the user to get the stat for.
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_user_stat_float
 * @description > **Steamworks Function**: [ISteamUserStats::GetUserStat](https://partner.steamgames.com/doc/api/ISteamUserStats#GetUserStat)
 *
 * This function gets the current value of the given floating point stat for the specified user.
 * 
 * You must have called ${function.steam_userstats_request_user_stats} and it needs to return successfully via its callback prior to calling this.
 * 
 * The equivalent function for the local user is ${function.steam_userstats_get_stat_float}, the equivalent function for game servers is [ISteamGameServerStats::GetUserStat](https://partner.steamgames.com/doc/api/ISteamGameServerStats#GetUserStat).
 *
 * @param {Real} steam_id_user The Steam ID of the user to get the stat for.
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_user_achievement
 * @description > **Steamworks Function**: [ISteamUserStats::GetUserAchievement](https://partner.steamgames.com/doc/api/ISteamUserStats#GetUserAchievement)
 *
 * This function gets the unlock status of the Achievement.
 * 
 * The equivalent function for the local user is ${function.steam_userstats_user_achievement}, the equivalent function for game servers is [ISteamGameServerStats::GetUserAchievement](https://partner.steamgames.com/doc/api/ISteamGameServerStats#GetUserAchievement).
 *
 * @param {Real} steam_id_user The Steam ID of the user to get the achievement for.
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_user_achievement_and_unlock_time
 * @description > **Steamworks Function**: [ISteamUserStats::GetUserAchievementAndUnlockTime](https://partner.steamgames.com/doc/api/ISteamUserStats#GetUserAchievementAndUnlockTime)
 *
 * This function gets the achievement status, and the time it was unlocked if unlocked.
 * 
 * If the return value is `true`, but the unlock time is zero, that means it was unlocked before Steam began tracking achievement unlock times (December 2009). The time is provided in Unix epoch format, seconds since January 1, 1970 UTC.
 * 
 * The equivalent function for the local user is ${function.steam_userstats_user_achievement_and_unlock_time}.
 *
 * @param {Real} steam_id_user The Steam ID of the user to get the achievement for.
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 * @function_end 
 */

/**
 * @function steam_userstats_reset_all_stats
 * @description > **Steamworks Function**: [ISteamUserStats::ResetAllStats](https://partner.steamgames.com/doc/api/ISteamUserStats#ResetAllStats)
 *
 * This function resets the current user's stats and, optionally, achievements.
 * 
 * This automatically calls ${function.steam_userstats_store_stats} to persist the changes to the server. This should typically only be used for testing purposes during development.
 *
 * @param {Bool} achievements_too Whether the user's achievements should also be reset.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_find_or_create_leaderboard
 * @description > **Steamworks Function**: [ISteamUserStats::FindOrCreateLeaderboard](https://partner.steamgames.com/doc/api/ISteamUserStats#FindOrCreateLeaderboard)
 *
 * This function gets a leaderboard by name, it will create it if it's not yet created.
 * 
 * You must call either this or ${function.steam_userstats_find_leaderboard} to obtain the leaderboard handle which is valid for the game session for each leaderboard you wish to access prior to calling any other Leaderboard functions.
 *
 * @param {String} leaderboard_name The name of the leaderboard to find or create.
 * @param {Enum.SteamLeaderboardSortMethod} sort_method The sort order of the new leaderboard if it is created.
 * @param {Enum.SteamLeaderboardDisplayType} display_type The display type (used by the Steam Community web site) of the new leaderboard if it is created.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::LeaderboardFindResult_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardFindResult_t)
 *
 * Called when a leaderboard has been found, or failed to be found.
 *
 * @member {Struct.SteamUserStatsLeaderboardFindResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_find_leaderboard
 * @description > **Steamworks Function**: [ISteamUserStats::FindLeaderboard](https://partner.steamgames.com/doc/api/ISteamUserStats#FindLeaderboard)
 *
 * This function gets a leaderboard by name.
 * 
 * You must call either this or ${function.steam_userstats_find_or_create_leaderboard} to obtain the leaderboard handle which is valid for the game session for each leaderboard you wish to access prior to calling any other Leaderboard functions.
 *
 * @param {String} leaderboard_name The name of the leaderboard to find.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::LeaderboardFindResult_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardFindResult_t)
 *
 * Called when a leaderboard has been found, or failed to be found.
 *
 * @member {Struct.SteamUserStatsLeaderboardFindResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_leaderboard_name
 * @description > **Steamworks Function**: [ISteamUserStats::GetLeaderboardName](https://partner.steamgames.com/doc/api/ISteamUserStats#GetLeaderboardName)
 *
 * This function returns the name of a leaderboard handle.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @returns {String} The name of the leaderboard, or an empty string if the leaderboard handle is invalid.
 * @function_end 
 */

/**
 * @function steam_userstats_leaderboard_entry_count
 * @description > **Steamworks Function**: [ISteamUserStats::GetLeaderboardEntryCount](https://partner.steamgames.com/doc/api/ISteamUserStats#GetLeaderboardEntryCount)
 *
 * This function returns the total number of entries in a leaderboard.
 * 
 * This is cached on a per leaderboard basis upon the first call to ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard} and is refreshed on each successful call to ${function.steam_userstats_download_leaderboard_entries}, ${function.steam_userstats_download_leaderboard_entries_for_users}, and ${function.steam_userstats_upload_leaderboard_score}.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_leaderboard_sort_method
 * @description > **Steamworks Function**: [ISteamUserStats::GetLeaderboardSortMethod](https://partner.steamgames.com/doc/api/ISteamUserStats#GetLeaderboardSortMethod)
 *
 * This function returns the sort order of a leaderboard handle.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @returns {Enum.SteamLeaderboardSortMethod} 
 * @function_end 
 */

/**
 * @function steam_userstats_leaderboard_display_type
 * @description > **Steamworks Function**: [ISteamUserStats::GetLeaderboardDisplayType](https://partner.steamgames.com/doc/api/ISteamUserStats#GetLeaderboardDisplayType)
 *
 * This function returns the display type of a leaderboard handle.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @returns {Enum.SteamLeaderboardDisplayType} 
 * @function_end 
 */

/**
 * @function steam_userstats_download_leaderboard_entries
 * @description > **Steamworks Function**: [ISteamUserStats::DownloadLeaderboardEntries](https://partner.steamgames.com/doc/api/ISteamUserStats#DownloadLeaderboardEntries)
 *
 * This function fetches a series of leaderboard entries for a specified leaderboard.
 * 
 * You can ask for more entries than exist, then this will return as many as do exist.
 * 
 * If you want to download entries for an arbitrary set of users, such as all of the users on a server then you can use ${function.steam_userstats_download_leaderboard_entries_for_users} which takes an array of Steam IDs.
 * 
 * You must call ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard} to get a [SteamLeaderboard_t](https://partner.steamgames.com/doc/api/ISteamUserStats#SteamLeaderboard_t) prior to calling this function.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @param {Enum.SteamLeaderboardDataRequest} request The type of data request to make.
 * @param {Real} range_start The index to start downloading entries relative to the data request type.
 * @param {Real} range_end The last index to retrieve entries for relative to the data request type.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::LeaderboardScoresDownloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoresDownloaded_t)
 *
 * Called when scores for a leaderboard have been downloaded and are ready to be retrieved.
 *
 * @member {Struct.SteamUserStatsScoresDownloadedResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_download_leaderboard_entries_for_users
 * @description > **Steamworks Function**: [ISteamUserStats::DownloadLeaderboardEntriesForUsers](https://partner.steamgames.com/doc/api/ISteamUserStats#DownloadLeaderboardEntriesForUsers)
 *
 * This function fetches leaderboard entries for an arbitrary set of users on a specified leaderboard.
 * 
 * A maximum of 100 users can be downloaded at a time, with only one outstanding call at a time. If a user doesn't have an entry on the specified leaderboard, they won't be included in the result.
 * 
 * If you want to download entries based on their ranking or friends of the current user then you should use ${function.steam_userstats_download_leaderboard_entries}.
 * 
 * You must call ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard} to get a [SteamLeaderboard_t](https://partner.steamgames.com/doc/api/ISteamUserStats#SteamLeaderboard_t) prior to calling this function.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @param {Array[Real]} users An array of Steam IDs to get the leaderboard entries for.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::LeaderboardScoresDownloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoresDownloaded_t)
 *
 * Called when scores for a leaderboard have been downloaded and are ready to be retrieved.
 * 
 * @member {Struct.SteamUserStatsScoresDownloadedResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_downloaded_leaderboard_entry
 * @description > **Steamworks Function**: [ISteamUserStats::GetDownloadedLeaderboardEntry](https://partner.steamgames.com/doc/api/ISteamUserStats#GetDownloadedLeaderboardEntry)
 *
 * This function retrieves the data for a single leaderboard entry.
 *
 * @param {Real} leaderboard_entries_handle A leaderboard entries handle obtained from the most recently received [LeaderboardScoresDownloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoresDownloaded_t) call result.
 * @param {Real} entry_index The index of the entry to retrieve, between 0 and the number of entries that were downloaded.
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 * @function_end 
 */

/**
 * @function steam_userstats_upload_leaderboard_score
 * @description > **Steamworks Function**: [ISteamUserStats::UploadLeaderboardScore](https://partner.steamgames.com/doc/api/ISteamUserStats#UploadLeaderboardScore)
 *
 * This function uploads a user score to a specified leaderboard.
 * 
 * Details are optional game-defined information which outlines how the user got that score. For example if it's a racing style time based leaderboard you could store the timestamps when the player hits each checkpoint. If you have collectibles along the way you could use bit fields as booleans to store the items the player picked up in the playthrough.
 * 
 * Uploading scores to Steam is rate limited to 10 uploads per 10 minutes and you may only have one outstanding call to this function at a time.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @param {Enum.SteamLeaderboardUploadScoreMethod} method Whether the score change should be forced, or only kept if it is better than the user's existing score.
 * @param {Real} score The score to upload.
 * @param {Array[Real]} score_details An array containing optional detail values surrounding the unlocking of this score. Note that these values are passed to Steamworks SDK as int32.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUserStats::LeaderboardScoreUploaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoreUploaded_t)
 * 
 * Result indicating that a leaderboard score has been uploaded.
 * 
 * @member {Struct.SteamUserStatsScoreUploadedResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_attach_leaderboard_ugc
 * @description > **Steamworks Function**: [ISteamUserStats::AttachLeaderboardUGC](https://partner.steamgames.com/doc/api/ISteamUserStats#AttachLeaderboardUGC)
 *
 * This function attaches a piece of user generated content to the current user's entry on a leaderboard.
 * 
 * This content could be a replay of the user achieving the score or a ghost to race against. The attached handle will be available when the entry is retrieved and can be accessed by other users using ${function.steam_userstats_downloaded_leaderboard_entry}.
 * To create and download user generated content see the documentation for the Steam Workshop.
 * 
 * Once attached, the content will be available even if the underlying Cloud file is changed or deleted by the user.
 * 
 * You must call ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard} to get a [SteamLeaderboard_t](https://partner.steamgames.com/doc/api/ISteamUserStats#SteamLeaderboard_t) prior to calling this function.
 *
 * @param {Real} leaderboard_handle A leaderboard handle obtained from ${function.steam_userstats_find_leaderboard} or ${function.steam_userstats_find_or_create_leaderboard}.
 * @param {Real} ugc_handle A handle to the user generated content that was shared using ${function.steam_remote_storage_file_share}.
 * @param {Function} callback The function to call upon completion.
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUserStats::LeaderboardUGCSet_t](partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardUGCSet_t)
 * @member {Struct.SteamUserStatsAttachLeaderboardUgcResult} result The result of the operation.
 * @event_end
 * @function_end 
 */

/**
 * @function steam_userstats_number_of_current_players
 * @description > **Steamworks Function**: [ISteamUserStats::GetNumberOfCurrentPlayers](https://partner.steamgames.com/doc/api/ISteamUserStats#GetNumberOfCurrentPlayers)
 *
 * This function asynchronously retrieves the total number of players currently playing the current game. Both online and in offline mode.
 *
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::NumberOfCurrentPlayers_t](https://partner.steamgames.com/doc/api/ISteamUserStats#NumberOfCurrentPlayers_t)
 *
 * Called when the current number of players for the current app has been received.
 *
 * @member {Struct.SteamUserStatsNumberOfCurrentPlayersResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_request_global_achievement_percentages
 * @description > **Steamworks Function**: [ISteamUserStats::RequestGlobalAchievementPercentages](https://partner.steamgames.com/doc/api/ISteamUserStats#RequestGlobalAchievementPercentages)
 *
 * This function asynchronously fetches the data for the percentage of players who have received each achievement for the current game globally.
 *
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::GlobalAchievementPercentagesReady_t](https://partner.steamgames.com/doc/api/ISteamUserStats#GlobalAchievementPercentagesReady_t)
 *
 * Called when the global achievement unlock percentages have been received from the server.
 *
 * @member {Struct.SteamUserStatsNumberOfCurrentPlayersResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_most_achieved_achievement_info
 * @description > **Steamworks Function**: [ISteamUserStats::GetMostAchievedAchievementInfo](https://partner.steamgames.com/doc/api/ISteamUserStats#GetMostAchievedAchievementInfo)
 *
 * This function gets the info on the most achieved achievement for the game.
 * 
 * You must have called ${function.steam_userstats_request_global_achievement_percentages} and it needs to return successfully via its callback prior to calling this.
 *
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 * @function_end 
 */

/**
 * @function steam_userstats_next_most_achieved_achievement_info
 * @description > **Steamworks Function**: [ISteamUserStats::GetNextMostAchievedAchievementInfo](https://partner.steamgames.com/doc/api/ISteamUserStats#GetNextMostAchievedAchievementInfo)
 *
 * This function gets the info on the next most achieved achievement for the game.
 * 
 * You must have called ${function.steam_userstats_request_global_achievement_percentages} and it needs to return successfully via its callback prior to calling this.
 *
 * @param {Real} iterator_prev The iterator returned from the previous call to this function, or from ${function.steam_userstats_most_achieved_achievement_info}.
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_achieved_percent
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementAchievedPercent](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementAchievedPercent)
 *
 * This function returns the percentage of users who have unlocked the specified achievement.
 * 
 * You must have called ${function.steam_userstats_request_global_achievement_percentages} and it needs to return successfully via its callback prior to calling this.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_request_global_stats
 * @description > **Steamworks Function**: [ISteamUserStats::RequestGlobalStats](https://partner.steamgames.com/doc/api/ISteamUserStats#RequestGlobalStats)
 *
 * This function asynchronously fetches global stats data, which is available for stats marked as "aggregated" in the App Admin panel of the Steamworks website.
 *
 * @param {Real} history_days The number of days of day-by-day history to retrieve in addition to the overall totals. The limit is 60.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::GlobalStatsReceived_t](https://partner.steamgames.com/doc/api/ISteamUserStats#GlobalStatsReceived_t)
 *
 * Called when the global stats have been received from the server.
 *
 * @member {Struct.SteamUserStatsGlobalStatsReceivedResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_userstats_global_stat_int64
 * @description > **Steamworks Function**: [ISteamUserStats::GetGlobalStat](https://partner.steamgames.com/doc/api/ISteamUserStats#GetGlobalStat)
 *
 * This function gets the lifetime totals for an aggregated integer (int64) stat.
 * 
 * You must have called ${function.steam_userstats_request_global_stats} and it needs to return successfully via its callback prior to calling this.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_global_stat_double
 * @description > **Steamworks Function**: [ISteamUserStats::GetGlobalStat](https://partner.steamgames.com/doc/api/ISteamUserStats#GetGlobalStat)
 *
 * This function gets the lifetime totals for an aggregated floating point (double) stat.
 * 
 * You must have called ${function.steam_userstats_request_global_stats} and it needs to return successfully via its callback prior to calling this.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_global_stat_history_int64
 * @description > **Steamworks Function**: [ISteamUserStats::GetGlobalStatHistory](https://partner.steamgames.com/doc/api/ISteamUserStats#GetGlobalStatHistory)
 *
 * This function gets the daily history for an aggregated integer (int64) stat.
 * 
 * You must have called ${function.steam_userstats_request_global_stats} and it needs to return successfully via its callback prior to calling this.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_userstats_global_stat_history_double
 * @description > **Steamworks Function**: [ISteamUserStats::GetGlobalStatHistory](https://partner.steamgames.com/doc/api/ISteamUserStats#GetGlobalStatHistory)
 *
 * This function gets the daily history for an aggregated floating point (double) stat.
 * 
 * You must have called ${function.steam_userstats_request_global_stats} and it needs to return successfully via its callback prior to calling this.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_progress_int
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementProgressLimits](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementProgressLimits)
 *
 * This function returns the integer progress limits (the minimum and maximum) used to compute the progress bar for a given achievement.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Struct.SteamUserStatsIntMinMax} 
 * @function_end
 */

/**
 * @function steam_userstats_achievement_progress_float
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementProgressLimits](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementProgressLimits)
 *
 * This function returns the floating point progress limits (the minimum and maximum) used to compute the progress bar for a given achievement.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @returns {Struct.SteamUserStatsFloatMinMax} 
 * @function_end
 */

/**
 * @function steam_userstats_set_callback_user_stats_received
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function call when the latest stats and achievements for a specific user (including the local user) have been received from the server.
 * 
 * See: [ISteamUserStats::UserStatsReceived_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsReceived_t)
 * 
 * See: ${struct.SteamUserStatsUserStatsReceived}
 *
 * @param {Function} callback The function to be called when user stats are received.
 * @function_end 
 */

/**
 * @function steam_userstats_clear_callback_user_stats_received
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_userstats_set_callback_user_stats_received}.
 *
 * @function_end 
 */

/**
 * @function steam_userstats_set_callback_user_stats_stored
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call as a result of a request to store the user stats.
 * 
 * See: [ISteamUserStats::UserStatsStored_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsStored_t)
 * 
 * See: ${struct.SteamUserStatsUserStatsStored}
 *
 * @param {Function} callback The function to be called when user stats are stored.
 * @function_end 
 */

/**
 * @function steam_userstats_clear_callback_user_stats_stored
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_userstats_set_callback_user_stats_stored}.
 *
 * @function_end 
 */

/**
 * @function steam_userstats_set_callback_user_achievement_stored
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call as a result of a request to store the achievements on the server, or an "indicate progress" call.
 * 
 * See: [ISteamUserStats::UserAchievementStored_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserAchievementStored_t)
 * 
 * See: ${struct.SteamUserStatsUserAchievementStored}
 *
 * @param {Function} callback The function to be called when a user achievement is stored.
 * @function_end 
 */

/**
 * @function steam_userstats_clear_callback_user_achievement_stored
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_userstats_set_callback_user_achievement_stored}.
 *
 * @function_end 
 */

/**
 * @function steam_userstats_set_callback_user_achievement_icon_fetched
 * @description > **Steamworks Function**: N / A
 * 
 * This function sets the function to call when an achievement icon has been fetched.
 * 
 * See: [ISteamUserStats::UserAchievementIconFetched_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserAchievementIconFetched_t)
 * 
 * See: ${struct.SteamUserStatsAchievementIconFetched}
 * 
 * @param {Function} callback The function to be called when a user achievement icon has been fetched.
 * @function_end
 */

/**
 * @function steam_userstats_clear_callback_user_achievement_icon_fetched
 * @description > **Steamworks Function**: N / A
 * 
 * This function clears the callback function previously set using ${function.steam_userstats_set_callback_user_achievement_icon_fetched}.
 * 
 * @function_end
 */

/**
 * @function steam_userstats_set_callback_user_stats_unloaded
 * @description > **Steamworks Function**: N / A
 * 
 * This function sets the function to call to indicate that a user's stats have been unloaded.
 * 
 * See: [ISteamUserStats::UserStatsUnloaded_t](partner.steamgames.com/doc/api/ISteamUserStats#UserStatsUnloaded_t)
 * 
 * See: ${struct.SteamUserStatsUnloaded}
 * 
 * @param {Function} callback The function to be called to indicate that a user's stats have been unloaded.
 * @function_end
 */

/**
 * @function steam_userstats_clear_callback_user_stats_unloaded
 * @description > **Steamworks Function**: N / A
 * 
 * This function clears the callback function previously set using ${function.steam_userstats_set_callback_user_stats_unloaded}.
 * 
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamUserStatsAchievementAndUnlockTime
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information about an achievement's status and unlock time.
 *
 * @member {Bool} achieved Whether the current user has unlocked the achievement.
 * @member {Real} unlock_time The time that the achievement was unlocked; if `achieved` is `true`.
 * @struct_end
 */

/**
 * @struct SteamUserStatsMostAchievedAchievementInfo
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds info on the most achieved achievement for the game.
 * 
 * @member {String} name The 'API Name' of the achievement.
 * @member {Real} percent The percentage of people that have unlocked this achievement from 0 to 100.
 * @member {Bool} achieved Whether the current user has unlocked this achievement.
 * @member {Real} iterator Pass this to ${function.steam_userstats_next_most_achieved_achievement_info} to continue enumerating. `-1` means there are no more achievements to enumerate.
 * @struct_end
 */

/**
 * @struct SteamUserStatsDownloadedLeaderboardEntry
 * @description > **Steamworks Struct**: [ISteamUserStats::LeaderboardEntry_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardEntry_t)
 *
 * This struct holds the data for a single entry in a leaderboard, as returned by ${function.steam_userstats_downloaded_leaderboard_entry}.
 * 
 * @member {Real} steam_id_user User who this entry belongs to. You can use ${function.steam_friends_get_friend_persona_name} and ${function.steam_friends_get_small_friend_avatar} to get more info.
 * @member {Real} global_rank The global rank of this entry ranging from [1..N], where N is the number of users with an entry in the leaderboard.
 * @member {Real} score The raw score as set in the leaderboard.
 * @member {Array[Real]} details An array of int32 values holding details about the entry.
 * @member {Real} ugc_handle Handle for the UGC attached to this entry, or 0 if none is attached. See ${function.steam_userstats_attach_leaderboard_ugc}.
 * @struct_end
 */

/**
 * @struct SteamUserStatsLeaderboardFindResult
 * @description > **Steamworks Struct**: [ISteamUserStats::LeaderboardFindResult_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardFindResult_t)
 *
 * This struct holds the result of a leaderboard find request.
 *
 * @member {Real} leaderboard_handle The handle of the leaderboard that was found. Will be 0 if no leaderboard was found.
 * @member {Bool} leaderboard_found Whether a leaderboard was found; `true` if it was found.
 * @struct_end 
 */

/**
 * @struct SteamUserStatsScoresDownloadedResult
 * @description > **Steamworks Struct**: [ISteamUserStats::LeaderboardScoresDownloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoresDownloaded_t)
 *
 * This struct holds the result when scores for a leaderboard have been downloaded and are ready to be retrieved.
 *
 * @member {Real} leaderboard_handle The handle to the leaderboard that these entries belong to.
 * @member {Real} entries_handle A handle used to retrieve each downloaded entry's data.
 * @member {Real} entry_count The number of entries downloaded.
 * @struct_end 
 */

/**
 * @struct SteamUserStatsScoreUploadedResult
 * @description > **Steamworks Struct**: [ISteamUserStats::LeaderboardScoreUploaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoreUploaded_t)
 *
 * This struct holds the result indicating that a leaderboard score has been uploaded.
 * 
 * @member {Bool} success Was the call successful? `true` if the call was successful, `false` on failure.
 * @member {Real} leaderboard_handle Handle to the leaderboard that this score was uploaded to.
 * @member {Real} score The score that was attempted to set.
 * @member {Bool} score_changed `true` if the score on the leaderboard changed otherwise `false` if the existing score was better.
 * @member {Real} global_rank_new The new global rank of the user on this leaderboard.
 * @member {Real} global_rank_previous The previous global rank of the user on this leaderboard; 0 if the user had no existing entry in the leaderboard.
 * @struct_end
 */

/**
 * @struct SteamUserStatsNumberOfCurrentPlayersResult
 * @description > **Steamworks Struct**: [ISteamUserStats::NumberOfCurrentPlayers_t](https://partner.steamgames.com/doc/api/ISteamUserStats#NumberOfCurrentPlayers_t)
 *
 * This struct holds information on the current number of players for the current app if it has been received.
 *
 * @member {Bool} success Whether the call was successful; `true` if the player count was retrieved.
 * @member {Real} players The number of players currently playing the game.
 * @struct_end
 */

/**
 * @struct SteamUserStatsGlobalAchievementPercentagesReadyResult
 * @description > **Steamworks Struct**: [ISteamUserStats::GlobalAchievementPercentagesReady_t](https://partner.steamgames.com/doc/api/ISteamUserStats#GlobalAchievementPercentagesReady_t)
 *
 * This struct holds global achievement unlock percentages that have been received from the server.
 *
 * @member {Real} game_id The game ID that the achievement percentages are for.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @struct_end
 */

/**
 * @struct SteamUserStatsGlobalStatsReceivedResult
 * @description > **Steamworks Struct**: [ISteamUserStats::GlobalStatsReceived_t](https://partner.steamgames.com/doc/api/ISteamUserStats#GlobalStatsReceived_t)
 *
 * This struct holds the result when global stats have been received from the server.
 *
 * @member {Real} game_id The game ID that the global stats are for.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @struct_end
 */

/**
 * @struct SteamUserStatsAttachLeaderboardUgcResult
 * @description > **Steamworks Struct**: [ISteamUserStats::LeaderboardUGCSet_t](partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardUGCSet_t)
 *
 * This struct holds a result indicating that user generated content has been attached to one of the current user's leaderboard entries.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} leaderboard_handle Handle to the leaderboard that the UGC was attached to.
 * @struct_end
 */

/**
 * @struct SteamUserStatsAchievementIconFetched
 * @description > **Steamworks Struct**: [ISteamUserStats::UserAchievementIconFetched_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserAchievementIconFetched_t)
 * 
 * This struct holds the result of an achievement icon that has been fetched.
 * 
 * @member {Real} game_id The Game ID this achievement is for.
 * @member {String} achievement_name The name of the achievement that this callback is for.
 * @member {Bool} achieved Whether the icon for the achieved (`true`) or unachieved (`false`) version.
 * @member {Real} icon_handle Handle to the image, which can be used with ${function.steam_utils_get_image_rgba} to get the image data. 0 means no image is set for the achievement.
 * @struct_end
 */

/**
 * @struct SteamUserStatsUnloaded
 * @description > **Steamworks Struct**: [ISteamUserStats::UserStatsUnloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsUnloaded_t)
 * 
 * This struct holds information passed in a `UserStatsUnloaded_t` callback, which indicates that a user's stats have been unloaded.
 * 
 * @member {Real} steam_id_user User whose stats have been unloaded.
 * @struct_end 
 */

/**
 * @struct SteamUserStatsUserStatsReceived
 * @description > **Steamworks Struct**: [ISteamUserStats::UserStatsReceived_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsReceived_t)
 *
 * This struct holds the result of stats and achievements for a user having been received from the server.
 *
 * @member {Real} game_id The game ID that these stats are for.
 * @member {Real} steam_id_user The Steam ID of the user whose stats were retrieved.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @struct_end
 */

/**
 * @struct SteamUserStatsUserStatsStored
 * @description > **Steamworks Struct**: [ISteamUserStats::UserStatsStored_t](partner.steamgames.com/doc/api/ISteamUserStats#UserStatsStored_t)
 *
 * This struct holds the result of a request to store the user stats.
 *
 * @member {Real} game_id Game ID that these stats are for.
 * @member {Enum.SteamApiResult} result Returns whether the call was successful or not.
 * @struct_end 
 */

/**
 * @struct SteamUserStatsUserAchievementStored
 * @description > **Steamworks Struct**: [ISteamUserStats::UserAchievementStored_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserAchievementStored_t)
 *
 * This struct holds the result of a request to store the achievements on the server, or an "indicate progress" call. If both `cur_progress` and `max_progress` are zero, that means the achievement has been fully unlocked.
 *
 * @member {Real} game_id Game ID that this achievement is for.
 * @member {String} achievement_name Name of the achievement.
 * @member {Real} cur_progress Current progress towards the achievement.
 * @member {Real} max_progress The total amount of progress required to unlock.
 * @member {Bool} group_achievement Whether this is a "group" achievement.
 * @struct_end
 */

/**
 * @struct SteamUserStatsIntMinMax
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_userstats_achievement_progress_int}.
 *
 * @member {Real} min The minimum value.
 * @member {Real} max The maximum value.
 * @struct_end
 */

/**
 * @struct SteamUserStatsFloatMinMax
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_userstats_achievement_progress_float}.
 *
 * @member {Real} min The minimum value.
 * @member {Real} max The maximum value.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamLeaderboardDataRequest
 * @description > **Steamworks Enum**: [ISteamUserStats::ELeaderboardDataRequest](https://partner.steamgames.com/doc/api/ISteamUserStats#ELeaderboardDataRequest)
 *
 * This enum holds the types of data request, used when downloading leaderboard entries with ${function.steam_userstats_download_leaderboard_entries}.
 *
 * @member Global Used to query for a sequential range of leaderboard entries by leaderboard rank. The start and end parameters control the requested range. For example, you can display the top 10 on a leaderboard for your game by setting start to 1 and end to 10.
 * @member GlobalAroundUser Used to retrieve leaderboard entries relative a user's entry. The start parameter is the number of entries to retrieve before the current user's entry, and the end parameter is the number of entries after the current user's entry. The current user's entry is always included. For example, if the current user is #5 on the leaderboard, setting start to -2 and end to 2 will return 5 entries: ranks #3 through #7. If there are not enough entries in the leaderboard before or after the user's entry, Steam will adjust the range to try to return the number of entries requested. For example, if the user is #1 on the leaderboard and start is set to -2, end is set to 2, Steam will return the first 5 entries in the leaderboard.
 * @member Friends Used to retrieve all leaderboard entries for friends of the current user. The start and end parameters are ignored.
 * @enum_end 
 */

/**
 * @enum SteamLeaderboardSortMethod
 * @description > **Steamworks Enum**: [ISteamUserStats::ELeaderboardSortMethod](partner.steamgames.com/doc/api/ISteamUserStats#ELeaderboardSortMethod)
 *
 * This enum defines the sort method used to set whether a higher or lower score is better. You can set the sort method when creating a leaderboard with ${function.steam_userstats_find_or_create_leaderboard} or in App Admin on the Steamworks website. You can retrieve the sort method for a given leaderboard with [GetLeaderboardSortMethod](https://partner.steamgames.com/doc/api/ISteamUserStats#GetLeaderboardSortMethod).
 *
 * @member None Only ever used when a leaderboard is invalid, you should never set this yourself.
 * @member Ascending The top-score is the lowest number.
 * @member Descending The top-score is the highest number.
 * @enum_end 
 */

/**
 * @enum SteamLeaderboardDisplayType
 * @description > **Steamworks Enum**: [ISteamUserStats::ELeaderboardDisplayType](https://partner.steamgames.com/doc/api/ISteamUserStats#ELeaderboardDisplayType)
 *
 * This enum holds the display types used by the Steam Community web site to know how to format the leaderboard scores when displayed. You can set the display type when creating a leaderboard with ${function.steam_userstats_find_or_create_leaderboard} or in the Steamworks partner backend. You can retrieve the display type for a given leaderboard with [GetLeaderboardDisplayType](https://partner.steamgames.com/doc/api/ISteamUserStats#GetLeaderboardDisplayType).
 *
 * @member None This is only ever used when a leaderboard is invalid, you should never set this yourself.
 * @member Numeric The score is just a simple numerical value.
 * @member TimeSeconds The score represents a time, in seconds.
 * @member TimeMilliSeconds The score represents a time, in milliseconds.
 * @enum_end 
 */

/**
 * @enum SteamLeaderboardUploadScoreMethod
 * @description > **Steamworks Enum**: [ISteamUserStats::ELeaderboardUploadScoreMethod](partner.steamgames.com/doc/api/ISteamUserStats#ELeaderboardUploadScoreMethod)
 *
 * This enum holds the possible sort methods used to set whether a higher or lower score is better. You can set the sort method when creating a leaderboard with ${function.steam_userstats_find_or_create_leaderboard} or in App Admin on the Steamworks website. You can retrieve the sort method for a given leaderboard with [GetLeaderboardSortMethod](https://partner.steamgames.com/doc/api/ISteamUserStats#GetLeaderboardSortMethod).
 *
 * @member None Only ever used when a leaderboard is invalid, you should never set this yourself.
 * @member KeepBest The top-score is the lowest number.
 * @member ForceUpdate The top-score is the highest number.
 * @enum_end 
 */

// MODULE

/**
 * @module userstats
 * @title UserStats
 * @desc > **Steamworks Interface**: [ISteamUserStats](https://partner.steamgames.com/doc/api/ISteamUserStats)
 * 
 * This module contains functions for accessing and submitting stats, achievements, and leaderboards.
 * 
 * @section_func Functions
 * @desc These are the functions of the UserStats module:
 * @ref steam_userstats_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the UserStats module:
 * @ref SteamUserStats*
 * @ref SteamLeaderboard*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the UserStats module:
 * @ref SteamUserStats*
 * @ref SteamLeaderboard*
 * @section_end
 * @module_end
 */
