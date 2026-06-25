/**
 * @function steam_api_last_error
 * @description > **Steamworks Function**: N / A
 *
 * This function returns a string containing the last error that occurred.
 *
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_api_is_initialized
 * @description > **Steamworks Function**: N / A
 *
 * This function returns whether the Steam API is currently initialised or not.
 *
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_api_init
 * @description > **Steamworks Function**: [SteamAPI_Init](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_Init)
 *
 * This function initialises the Steamworks API and returns if this was successful or not.
 *
 * @param {Real} own_app_id The app ID.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_api_release_current_thread_memory
 * @description > **Steamworks Function**: [SteamAPI_ReleaseCurrentThreadMemory](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_ReleaseCurrentThreadMemory)
 *
 * This function frees the internal Steamworks API memory associated with the calling thread.
 * 
 * Most Steamworks API functions allocate a small amount of thread-local memory for parameter storage, calling this will manually free such memory. This function is called automatically by ${function.steam_api_run_callbacks}, so a program that only ever accesses the Steamworks API from a single thread never needs to explicitly call this function.
 *
 * @function_end
 */

/**
 * @function steam_api_restart_app_if_necessary
 * @description > **Steamworks Function**: [SteamAPI_RestartAppIfNecessary](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_RestartAppIfNecessary)
 *
 * This function checks if your executable was launched through Steam and relaunches it through Steam if it wasn't.
 * 
 * See [Initialization and Shutdown](https://partner.steamgames.com/doc/sdk/api#initialization_and_shutdown) for additional information.
 *
 * @param {Real} own_app_id The app ID.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_api_run_callbacks
 * @description > **Steamworks Function**: [SteamAPI_RunCallbacks](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_RunCallbacks)
 *
 * This function dispatches callbacks and call results to all of the registered listeners.
 * 
 * It's best to call this at >10Hz, the more time between calls, the more potential latency between receiving events or results from the Steamworks API. Most games call this once per render-frame. All registered listener functions will be invoked during this call, in the caller's thread context.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t)
 * 
 * Called when a connection to the Steam back-end has been established.
 * This means the Steam client now has a working connection to the Steam servers. Usually this will have occurred before the game has launched, and should only be seen if the user has dropped connection due to a networking issue or a Steam server update.
 * 
 * This callback has no fields.
 * 
 * @event_end
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::SteamServersDisconnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersDisconnected_t)
 * 
 * Called if the client has lost connection to the Steam servers.
 * 
 * Real-time services will be disabled until a matching [SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t) has been posted.
 * 
 * @member {Enum.SteamApiResult} result The reason we were disconnected from Steam.
 * @event_end
 *
 * @function_end
 */

/**
 * @function steam_api_shutdown
 * @description > **Steamworks Function**: [SteamAPI_Shutdown](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_Shutdown)
 *
 * This function shuts down the Steamworks API, releases pointers and frees memory.
 * 
 * You should call this during process shutdown if possible.
 * 
 * This will not unhook the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) from your game as there's no guarantee that your rendering API is done using it.
 *
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlay](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlay)
 *
 * This function activates the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) to a specific dialog.
 * 
 * This is equivalent to calling ${function.steam_friends_activate_game_overlay_to_user} with `steam_id` set to ${function.steam_user_get_steam_id}.
 *
 * @param {String} dialog The dialog to open. Valid options are: `"friends"`, `"community"`, `"players"`, `"settings"`, `"officialgamegroup"`, `"stats"`, `"achievements"`.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_invite_dialog
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayInviteDialog](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayInviteDialog)
 *
 * This function activates the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) to open the invite dialog. Invitations sent from this dialog will be for the provided lobby.
 *
 * @param {Real} steam_id_lobby The Steam ID of the lobby that selected users will be invited to.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_store
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToStore](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToStore)
 *
 * This function activates the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) to the Steam store page for the provided app.
 * 
 * Using `SteamApiAppIdInvalid` brings the user to the front page of the Steam store. (See: ${constant.macros})
 *
 * @param {Real} app_id The app ID to show the store page of.
 * @param {Enum.SteamFriendsOverlayToStoreFlag} flag Flags to modify the behaviour when the page opens.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_user
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToUser](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToUser)
 *
 * This function activates [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) to a specific dialog.
 * 
 * Valid `dialog` options are:
 * 
 * * `"steamid"` - Opens the overlay web browser to the specified user or groups profile.
 * * `"chat"` - Opens a chat window to the specified user, or joins the group chat.
 * * `"jointrade"` - Opens a window to a Steam Trading session that was started with the [ISteamEconomy/StartTrade](https://partner.steamgames.com/doc/webapi/ISteamEconomy#StartTrade) Web API.
 * * `"stats"` - Opens the overlay web browser to the specified user's stats.
 * * `"achievements"` - Opens the overlay web browser to the specified user's achievements.
 * * `"friendadd"` - Opens the overlay in minimal mode prompting the user to add the target user as a friend.
 * * `"friendremove"` - Opens the overlay in minimal mode prompting the user to remove the target friend.
 * * `"friendrequestaccept"` - Opens the overlay in minimal mode prompting the user to accept an incoming friend invite.
 * * `"friendrequestignore"` - Opens the overlay in minimal mode prompting the user to ignore an incoming friend invite.
 *
 * @param {String} dialog The dialog to open.
 * @param {Real} steam_id The Steam ID of the context to open this dialog to.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_web_page
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToWebPage](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToWebPage)
 *
 * This function activates [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) web browser directly to the specified URL.
 *
 * @param {String} url The webpage to open. (A fully qualified address with the protocol is required, e.g. `"http://www.steampowered.com"`)
 * @param {Enum.SteamFriendsOverlayToWebpageMode} mode Mode for the web page. Defaults to `SteamFriendsOverlayToWebpageMode.Default`.
 * @function_end
 */

/**
 * @function steam_friends_clear_rich_presence
 * @description > **Steamworks Function**: [ISteamFriends::ClearRichPresence](https://partner.steamgames.com/doc/api/ISteamFriends#ClearRichPresence)
 *
 * This function clears all of the current user's Rich Presence key/values.
 *
 * @function_end
 */

/**
 * @function steam_friends_close_clan_chat_window_in_steam
 * @description > **Steamworks Function**: [ISteamFriends::CloseClanChatWindowInSteam](https://partner.steamgames.com/doc/api/ISteamFriends#CloseClanChatWindowInSteam)
 *
 * This function closes the specified Steam group chat room in the Steam UI. Returns `true` if the user successfully left the Steam group chat room, `false` if the user is not in the provided Steam group chat room.
 *
 * @param {Real} steam_id_clan_chat The Steam ID of the Steam group chat room to close.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_friends_download_clan_activity_counts
 * @description > **Steamworks Function**: [ISteamFriends::DownloadClanActivityCounts](https://partner.steamgames.com/doc/api/ISteamFriends#DownloadClanActivityCounts)
 *
 * This function refreshes the Steam Group activity data or get the data from groups other than one that the current user is a member.
 * 
 * After receiving the callback you can then use ${function.steam_friends_get_clan_activity_counts} to get the up to date user counts.
 *
 * @param {Array[Real]} steam_id_clans A list of steam groups to get the updated data for.
 * @param {Real} clans_to_request This MUST be the number of groups in `steam_id_clans`.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Bool} Whether the call was successful.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamFriends::DownloadClanActivityCountsResult_t](https://partner.steamgames.com/doc/api/ISteamFriends#DownloadClanActivityCountsResult_t)
 * @member {Struct.SteamFriendsDownloadClanActivityCountsResult} result The callback result.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_friends_enumerate_following_list
 * @description > **Steamworks Function**: [ISteamFriends::EnumerateFollowingList](https://partner.steamgames.com/doc/api/ISteamFriends#EnumerateFollowingList)
 *
 * This function gets the list of users that the current user is following.
 * 
 * You can be following people that are not your friends. Following allows you to receive updates when the person does things like post a new piece of content to the Steam Workshop.
 * 
 * [[Note: This returns up to `SteamFriendsEnumerateFollowersMax` users at once. If the current user is following more than that, you will need to call this repeatedly, with `start_index` set to the total number of followers that you have received so far.]]
 *
 * @param {Real} start_index The index to start receiving followers from. This should be 0 on the initial call.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::FriendsEnumerateFollowingList_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsEnumerateFollowingList_t)
 * @member {Struct.SteamFriendsEnumerateFollowingListResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_friends_set_callback_avatar_image_loaded
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a large avatar is loaded if you have tried requesting it when it was unavailable.
 * 
 * See: [ISteamFriends::AvatarImageLoaded_t](https://partner.steamgames.com/doc/api/ISteamFriends#AvatarImageLoaded_t)
 *
 * @param {Function} callback The function to be called.
 * @function_end
 */

/**
 * @function steam_friends_clear_callback_avatar_image_loaded
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_friends_set_callback_avatar_image_loaded}.
 * 
 * See: [ISteamFriends::AvatarImageLoaded_t](https://partner.steamgames.com/doc/api/ISteamFriends#AvatarImageLoaded_t)
 *
 * @function_end
 */

/**
 * @function steam_friends_get_chat_member_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetChatMemberByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetChatMemberByIndex)
 *
 * This function gets the Steam ID at the given index in a Steam group chat.
 * 
 * [[Note: You must call ${function.steam_friends_get_clan_chat_member_count} before calling this.]]
 *
 * @param {Real} steam_id_clan This MUST be the same source used in the previous call to ${function.steam_friends_get_clan_chat_member_count}!
 * @param {Real} user An index between 0 and ${function.steam_friends_get_clan_chat_member_count}.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_activity_counts
 * @description > **Steamworks Function**: [ISteamFriends::GetClanActivityCounts](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanActivityCounts)
 *
 * This function gets the most recent information we have about what the users in a Steam Group are doing.
 * 
 * This can only retrieve data that the local client knows about. To refresh the data or get data from a group other than one that the current user is a member of you must call ${function.steam_friends_download_clan_activity_counts}.
 *
 * @param {Real} steam_id_clan The Steam group to get the activity of.
 * @returns {Struct.SteamFriendsClanActivityCounts}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetClanByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanByIndex)
 *
 * **This API is deprecated.**
 * 
 * This function gets the Steam group's Steam ID at the given index.
 * 
 * [[Note: You must call ${function.steam_friends_get_clan_count} before calling this.]]
 *
 * @param {Real} clan An index between 0 and ${function.steam_friends_get_clan_count}.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_chat_member_count
 * @description > **Steamworks Function**: [ISteamFriends::GetClanChatMemberCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanChatMemberCount)
 * 
 * **This API is deprecated.**
 * 
 * This function gets the number of users in a Steam group chat.
 * 
 * [[Note: Large steam groups cannot be iterated by the local user.]]
 * 
 * [[Note: The current user must be in a lobby to retrieve the Steam IDs of other users in that lobby.]]
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_chat_member_by_index} can be used to get the Steam ID of each person in the chat.
 *
 * @param {Real} steam_id_clan The Steam group to get the chat count of.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_chat_message
 * @description > **Steamworks Function**: [ISteamFriends::GetClanChatMessage](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanChatMessage)
 *
 * This function gets the data from a Steam group chat room message.
 * 
 * This should only ever be called in response to a [GameConnectedClanChatMsg_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameConnectedClanChatMsg_t) callback.
 *
 * @param {Real} steam_id_clan_chat The Steam ID of the Steam group chat room.
 * @param {Real} message The index of the message. This should be the m_iMessageID field of [GameConnectedClanChatMsg_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameConnectedClanChatMsg_t).
 * @returns {Struct.SteamFriendsClanChatMessage}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_count
 * @description > **Steamworks Function**: [ISteamFriends::GetClanCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanCount)
 *
 * This function gets the number of Steam groups that the current user is a member of.
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_clan_by_index} can be used to get the Steam ID of each Steam group.
 *
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_name
 * @description > **Steamworks Function**: [ISteamFriends::GetClanName](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanName)
 *
 * This function gets the display name for the specified Steam group; if the local client knows about it.
 *
 * @param {Real} steam_id_clan The Steam group to get the name of.
 * @returns {String} The Steam group's name in UTF-8 format. Returns an empty string (`""`) if the provided Steam ID is invalid or the user does not know about the group.
 * @function_end
 */

/**
 * @function steam_friends_get_clan_officer_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetClanOfficerByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanOfficerByIndex)
 *
 * This function gets the Steam ID of the officer at the given index in a Steam group.
 * 
 * [[Note: You must call ${function.steam_friends_get_clan_officer_count} before calling this.]]
 *
 * @param {Real} steam_id_clan This must be the same steam group used in the previous call to ${function.steam_friends_get_clan_officer_count}!
 * @param {Real} officer An index between 0 and ${function.steam_friends_get_clan_officer_count}.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_officer_count
 * @description > **Steamworks Function**: [ISteamFriends::GetClanOfficerCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanOfficerCount)
 *
 * This function gets the number of officers (administrators and moderators) in a specified Steam group.
 * 
 * This also includes the owner of the Steam group.
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_clan_officer_by_index} can be used to get the Steam ID of each officer.
 * 
 * [[Note: You must call ${function.steam_friends_request_clan_officer_list} before this to get the required data!]]
 *
 * @param {Real} steam_id_clan The Steam group to get the officer count of.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_clan_owner
 * @description > **Steamworks Function**: [ISteamFriends::GetClanOwner](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanOwner)
 *
 * This function gets the owner of a Steam Group.
 * 
 * [[Note: You must call ${function.steam_friends_request_clan_officer_list} before this to get the required data!]]
 *
 * @param {Real} steam_id_clan The Steam ID of the Steam group to get the owner for.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_tag
 * @description > **Steamworks Function**: [ISteamFriends::GetClanTag](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanTag)
 *
 * This function gets the unique tag (abbreviation) for the specified Steam group; If the local client knows about it.
 * 
 * The Steam group abbreviation is a unique way for people to identify the group and is limited to 12 characters. In some games this will appear next to the name of group members.
 *
 * @param {Real} steam_id_clan The Steam group to get the tag of.
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_friends_get_coplay_friend
 * @description > **Steamworks Function**: [ISteamFriends::GetCoplayFriend](https://partner.steamgames.com/doc/api/ISteamFriends#GetCoplayFriend)
 *
 * This function gets the Steam ID of the recently played with user at the given index.
 * 
 * [[Note: You must call ${function.steam_friends_get_coplay_friend_count} before calling this.]]
 *
 * @param {Real} coplay_friend An index between 0 and ${function.steam_friends_get_coplay_friend_count}.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_coplay_friend_count
 * @description > **Steamworks Function**: [ISteamFriends::GetCoplayFriendCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetCoplayFriendCount)
 *
 * This function gets the number of players that the current user has recently played with, across all games.
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_coplay_friend} can be used to get the Steam ID of each player.
 * 
 * These players have been set with previous calls to ${function.steam_friends_set_played_with}.
 *
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_follower_count
 * @description > **Steamworks Function**: [ISteamFriends::GetFollowerCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetFollowerCount)
 *
 * This function gets the number of users following the specified user.
 *
 * @param {Real} steam_id The user to get the follower count for.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::FriendsGetFollowerCount_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsGetFollowerCount_t)
 * @member {Struct.SteamFriendsGetFollowerCountResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_friends_get_friend_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendByIndex)
 *
 * This function gets the Steam ID of the user at the given index.
 * 
 * [[Note: You must call ${function.steam_friends_get_friend_count} before calling this.]]
 *
 * @param {Real} friend_index An index between 0 and ${function.steam_friends_get_friend_count}.
 * @param {Real} friend_flags A combined union (binary "or") of ${enum.SteamFriendsFriendFlag}. This must be the same value as used in the previous call to ${function.steam_friends_get_friend_count}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_coplay_game
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendCoplayGame](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendCoplayGame)
 *
 * This function gets the app ID of the game that user played with someone on their recently-played-with list.
 *
 * @param {Real} steam_id_friend The Steam ID of the user on the recently-played-with list to get the game played.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_coplay_time
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendCoplayTime](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendCoplayTime)
 *
 * This function gets the timestamp of when the user played with someone on their recently-played-with list.
 *
 * @param {Real} steam_id_friend The Steam ID of the user on the recently-played-with list to get the timestamp for.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_count
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendCount)
 *
 * This function gets the number of users the client knows about who meet a specified criteria. (Friends, blocked, users on the same server, etc.)
 * 
 * This can be used to iterate over all of the users by calling ${function.steam_friends_get_friend_by_index} to get the Steam IDs of each user.
 *
 * @param {Real} friend_flags A combined union (binary "or") of one or more ${enum.SteamFriendsFriendFlag}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_count_from_source
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendCountFromSource](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendCountFromSource)
 *
 * This function get the number of users in a source (Steam group, chat room, lobby, or game server).
 * 
 * [[Note: Large Steam groups cannot be iterated by the local user.]]
 * 
 * [[Note: If you're getting the number of lobby members then you should use ${function.steam_matchmaking_get_num_lobby_members} instead.]]
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_friend_from_source_by_index} can be used to get the Steam ID of each person in the source.
 *
 * @param {Real} steam_id_source The Steam group, chat room, lobby or game server to get the user count of.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_from_source_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendFromSourceByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendFromSourceByIndex)
 *
 * This function gets the Steam ID at the given index from a source (Steam group, chat room, lobby, or game server).
 * 
 * [[Note: You must call ${function.steam_friends_get_friend_count_from_source} before calling this.]]
 *
 * @param {Real} steam_id_source This MUST be the same source used in the previous call to ${function.steam_friends_get_friend_count_from_source}!
 * @param {Real} friend_index An index between 0 and ${function.steam_friends_get_friend_count_from_source}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_game_played
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendGamePlayed](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendGamePlayed)
 *
 * This function checks if the specified friend is in a game, and gets info about the game if they are.
 *
 * @param {Real} steam_id_friend The Steam ID of the other user.
 * @returns {Struct.SteamFriendsFriendGamePlayed} The details if the user is in a game.
 * @function_end
 */

/**
 * @function steam_friends_get_friend_message
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendMessage](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendMessage)
 *
 * This function gets the data from a Steam friends message.
 * 
 * This should only ever be called in response to a [GameConnectedFriendChatMsg_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameConnectedFriendChatMsg_t) callback.
 *
 * @param {Real} steam_id_friend The Steam ID of the friend that sent this message.
 * @param {Real} message_id The index of the message. This should be the `m_iMessageID` field of [GameConnectedFriendChatMsg_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameConnectedFriendChatMsg_t).
 * @param {Real} data_size The maximum number of bytes to read for the message data.
 * @returns {Struct.SteamFriendsFriendMessage}
 * @function_end
 */

/**
 * @function steam_friends_get_friend_persona_name
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendPersonaName](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendPersonaName)
 *
 * This function gets the specified user's persona (display) name. It returns an empty string (`""`), or `"[unknown]"` if the Steam ID is invalid or not known to the caller.
 * 
 * This will only be known to the current user if the other user is in their friends list, on the same game server, in a chat room or lobby, or in a small Steam group with the local user.
 * 
 * [[Note: Upon first joining a lobby, chat room, or game server the current user will not known the name of the other users automatically; that information will arrive asynchronously via [PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t) callbacks.]]
 * 
 * To get the persona name of the current user use ${function.steam_friends_get_persona_name}.
 *
 * @param {Real} steam_id_friend The Steam ID of the other user.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_persona_name_history
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendPersonaNameHistory](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendPersonaNameHistory)
 *
 * This function gets one of the previous display names for the specified user.
 * 
 * This only works for display names that the current user has seen on the local computer.
 *
 * @param {Real} steam_id_friend The Steam ID of the other user.
 * @param {Real} persona_name The index of the history to receive. 0 is their current persona name, 1 is their most recent before they changed it, etc.
 * @returns {String} The player's old persona name at the given index, or an empty string when there are no further items in the history.
 * @function_end
 */

/**
 * @function steam_friends_get_friend_persona_state
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendPersonaState](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendPersonaState)
 *
 * This function gets the current status of the specified user.
 * 
 * This will only be known to the current user if the other user is in their friends list, on the same game server, in a chat room or lobby, or in a small Steam group with the local user.
 * 
 * To get the state of the current user use ${function.steam_friends_get_persona_state}.
 *
 * @param {Real} steam_id_friend The Steam ID of the other user.
 * @returns {Enum.SteamFriendsPersonaState} The friend state of the specified user. (Online, Offline, In-Game, etc.)
 * @function_end
 */

/**
 * @function steam_friends_get_friend_relationship
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendRelationship](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendRelationship)
 *
 * This function gets a relationship to a specified user.
 *
 * @param {Real} steam_id_friend The Steam ID of the other user.
 * @returns {Enum.SteamFriendsRelationship} How the users know each other.
 * @function_end
 */

/**
 * @function steam_friends_get_friend_rich_presence
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendRichPresence](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendRichPresence)
 *
 * This function gets a Rich Presence value from a specified friend.
 *
 * @param {Real} steam_id_friend The friend to get the Rich Presence value for.
 * @param {String} key The Rich Presence key to request.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_rich_presence_key_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendRichPresenceKeyByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendRichPresenceKeyByIndex)
 *
 * This function gets a Rich Presence value from a specified friend using the index of the key.
 *
 * @param {Real} steam_id_friend This should be the same user provided to the previous call to ${function.steam_friends_get_friend_rich_presence_key_count}!
 * @param {Real} key An index between 0 and ${function.steam_friends_get_friend_rich_presence_key_count}.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_rich_presence_key_count
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendRichPresenceKeyCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendRichPresenceKeyCount)
 *
 * This function gets the number of Rich Presence keys that are set on the specified user. Returns 0 if there is no Rich Presence information for the specified user.
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_friend_rich_presence_key_by_index} to get the rich presence keys.
 * 
 * This is typically only ever used for debugging purposes.
 *
 * @param {Real} steam_id_friend The Steam ID of the user to get the Rich Presence Key Count of.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friends_group_count
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendsGroupCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendsGroupCount)
 *
 * This function gets the number of friends groups (tags) the user has created.
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_friends_group_id_by_index} can be used to get the ID of each friend group.
 * 
 * This is not to be confused with Steam groups. Those can be obtained with ${function.steam_friends_get_clan_count}.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friends_group_id_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendsGroupIDByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendsGroupIDByIndex)
 *
 * This function gets the friends group ID for the given index.
 * 
 * [[Note: You must call ${function.steam_friends_get_friends_group_count} before calling this.]]
 *
 * @param {Real} fg An index between 0 and ${function.steam_friends_get_friends_group_count}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friends_group_name
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendsGroupName](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendsGroupName)
 *
 * This function gets the name for the given friends group.
 *
 * @param {Real} friends_group_id The friends group ID to get the name of.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_steam_level
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendSteamLevel](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendSteamLevel)
 *
 * This function gets the Steam level of the specified user.
 * 
 * You can use the local user's Steam ID (${function.steam_user_get_steam_id}) to get their level.
 * 
 * If the Steam level is not immediately available for the specified user then this returns 0 and queues it to be downloaded from the Steam servers. When it gets downloaded a [PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t) callback will be posted with m_nChangeFlags including k_EPersonaChangeSteamLevel.
 *
 * @param {Real} steam_id_friend The Steam ID of the user.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_large_friend_avatar
 * @description > **Steamworks Function**: [ISteamFriends::GetLargeFriendAvatar](https://partner.steamgames.com/doc/api/ISteamFriends#GetLargeFriendAvatar)
 *
 * This function gets a handle to the large (128*128px) avatar for the specified user.
 * 
 * You can pass in ${function.steam_user_get_steam_id} to get the current user's avatar.
 * 
 * [[Note: This only works for users that the local user knows about. They will automatically know about their friends, people on leaderboards they've requested, or people in the same source as them (Steam group, chat room, lobby, or game server). If they don't know about them then you must call ${function.steam_friends_request_user_information} to cache the avatar locally.]]
 * 
 * See: ${function.steam_friends_get_medium_friend_avatar}, ${function.steam_friends_get_small_friend_avatar}
 *
 * @param {Real} steam_id_friend The Steam ID of the user.
 * @returns {Real}
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::AvatarImageLoaded_t](https://partner.steamgames.com/doc/api/ISteamFriends#AvatarImageLoaded_t)
 * @member {Struct.SteamFriendsAvatarImageLoaded} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_friends_get_medium_friend_avatar
 * @description > **Steamworks Function**: [ISteamFriends::GetMediumFriendAvatar](https://partner.steamgames.com/doc/api/ISteamFriends#GetMediumFriendAvatar)
 *
 * This function gets a handle to the medium (64*64px) avatar for the specified user.
 * 
 * You can pass in ${function.steam_user_get_steam_id} to get the current user's avatar.
 * 
 * [[Note: This only works for users that the local user knows about. They will automatically know about their friends, people on leaderboards they've requested, or people in the same source as them (Steam group, chat room, lobby, or game server). If they don't know about them then you must call ${function.steam_friends_request_user_information} to cache the avatar locally.]]
 * 
 * See: ${function.steam_friends_get_large_friend_avatar}, ${function.steam_friends_get_small_friend_avatar}
 *
 * @param {Real} steam_id_friend The Steam ID of the user.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_small_friend_avatar
 * @description > **Steamworks Function**: [ISteamFriends::GetSmallFriendAvatar](https://partner.steamgames.com/doc/api/ISteamFriends#GetSmallFriendAvatar)
 *
 * This function gets a handle to the small (32*32px) avatar for the specified user.
 * 
 * You can pass in ${function.steam_user_get_steam_id} to get the current user's avatar.
 * 
 * [[Note: This only works for users that the local user knows about. They will automatically know about their friends, people on leaderboards they've requested, or people in the same source as them (Steam group, chat room, lobby, or game server). If they don't know about them then you must call ${function.steam_friends_request_user_information} to cache the avatar locally.]]
 * 
 * See: ${function.steam_friends_get_large_friend_avatar}, ${function.steam_friends_get_medium_friend_avatar}
 *
 * @param {Real} steam_id_friend The Steam ID of the user.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friends_group_members_count
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendsGroupMembersCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendsGroupMembersCount)
 *
 * This function gets the number of friends in a given friends group.
 * 
 * This should be called before getting the list of friends with ${function.steam_friends_get_friends_group_members_list}.
 *
 * @param {Real} friends_group_id The friends group ID to get the number of friends in.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friends_group_members_list
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendsGroupMembersList](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendsGroupMembersList)
 *
 * This function gets the friends in the given friends group.
 * 
 * If fewer friends exist than requested those positions' Steam IDs will be invalid.
 *
 * @param {Real} friends_group_id The friends group ID to get the members list of.
 * @returns {Array[Real]} 
 * @function_end
 */

/**
 * @function steam_friends_get_persona_name
 * @description > **Steamworks Function**: [ISteamFriends::GetPersonaName](https://partner.steamgames.com/doc/api/ISteamFriends#GetPersonaName)
 *
 * This function gets the current user's persona (display) name.
 * 
 * To get the persona name of other users use ${function.steam_friends_get_friend_persona_name}.
 *
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_get_persona_state
 * @description > **Steamworks Function**: [ISteamFriends::GetPersonaState](https://partner.steamgames.com/doc/api/ISteamFriends#GetPersonaState)
 *
 * This function gets the friend status of the current user.
 * 
 * To get the state of other users use ${function.steam_friends_get_friend_persona_state}.
 *
 * @returns {Enum.SteamFriendsPersonaState} 
 * @function_end
 */

/**
 * @function steam_friends_get_player_nickname
 * @description > **Steamworks Function**: [ISteamFriends::GetPlayerNickname](https://partner.steamgames.com/doc/api/ISteamFriends#GetPlayerNickname)
 *
 * This function gets the nickname that the current user has set for the specified user.
 *
 * @param {Real} steam_id_player The Steam ID of the user.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_has_friend
 * @description > **Steamworks Function**: [ISteamFriends::HasFriend](https://partner.steamgames.com/doc/api/ISteamFriends#HasFriend)
 *
 * This function checks if the user meets the specified criteria. (Friends, blocked, users on the same server, etc.)
 *
 * @param {Real} steam_id_friend The Steam user to check the friend status of.
 * @param {Real} friend_flags A combined union (binary "or") of one or more ${enum.SteamFriendsFriendFlag}.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_invite_user_to_game
 * @description > **Steamworks Function**: [ISteamFriends::InviteUserToGame](https://partner.steamgames.com/doc/api/ISteamFriends#InviteUserToGame)
 *
 * This function invites a friend or clan member to the current game using a special invite string.
 * 
 * If the target user accepts the invite then the `connect_string` gets added to the command-line when launching the game.
 * If the game is already running for that user, then they will receive a [GameRichPresenceJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameRichPresenceJoinRequested_t) callback with the connect string.
 *
 * @param {Real} steam_id_friend The Steam ID of the friend to invite.
 * @param {String} connect_string A string that lets the friend know how to join the game (i.e. the game server IP). This can not be longer than specified in [k_cchMaxRichPresenceValueLength](https://partner.steamgames.com/doc/api/ISteamFriends#k_cchMaxRichPresenceValueLength).
 * @returns {Bool}
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::GameRichPresenceJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameRichPresenceJoinRequested_t)
 * 
 * [[Note: This callback is made when joining a game. If the user is attempting to join a lobby, then the callback [GameLobbyJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameLobbyJoinRequested_t) will be made.]]
 * 
 * @member {Struct.SteamFriendsGameRichPresenceJoinRequested} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_friends_is_clan_chat_admin
 * @description > **Steamworks Function**: [ISteamFriends::IsClanChatAdmin](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanChatAdmin)
 *
 * This function checks if a user in the Steam group chat room is an admin.
 *
 * @param {Real} steam_id_clan_chat The Steam ID of the Steam group chat room.
 * @param {Real} steam_id_user The Steam ID of the user to check the admin status of.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_clan_public
 * @description > **Steamworks Function**: [ISteamFriends::IsClanPublic](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanPublic)
 *
 * This function checks if the Steam group is public.
 *
 * @param {Real} steam_id_clan The Steam ID of the Steam group.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_clan_official_game_group
 * @description > **Steamworks Function**: [ISteamFriends::IsClanOfficialGameGroup](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanOfficialGameGroup)
 *
 * This function checks if the Steam group is an official game group/community hub.
 *
 * @param {Real} steam_id_clan The Steam ID of the Steam group.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_clan_chat_window_open_in_steam
 * @description > **Steamworks Function**: [ISteamFriends::IsClanChatWindowOpenInSteam](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanChatWindowOpenInSteam)
 *
 * This function checks if the Steam Group chat room is open in the Steam UI.
 *
 * @param {Real} steam_id_clan_chat The Steam ID of the Steam group chat room to check.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_following
 * @description > **Steamworks Function**: [ISteamFriends::IsFollowing](https://partner.steamgames.com/doc/api/ISteamFriends#IsFollowing)
 *
 * This function checks if the current user is following the specified user.
 *
 * @param {Real} steam_id The Steam ID of the check if we are following.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [FriendsIsFollowing_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsIsFollowing_t)
 * 
 * @member {Struct.SteamFriendsIsFollowingResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_friends_is_user_in_source
 * @description > **Steamworks Function**: [ISteamFriends::IsUserInSource](https://partner.steamgames.com/doc/api/ISteamFriends#IsUserInSource)
 * 
 * **This API is deprecated.**
 * 
 * This function checks if a specified user is in a source (Steam group, chat room, lobby, or game server).
 *
 * @param {Real} steam_id_user The user to check if they are in the source.
 * @param {Real} steam_id_source The source to check for the user.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_request_clan_officer_list
 * @description > **Steamworks Function**: [ISteamFriends::RequestClanOfficerList](https://partner.steamgames.com/doc/api/ISteamFriends#RequestClanOfficerList)
 *
 * This function requests information about a Steam group's officers (administrators and moderators).
 * 
 * [[Note: You can only ask about Steam groups that a user is a member of.]]
 * 
 * [[Note: This won't download avatars for the officers automatically. If no avatar image is available for an officer, then call ${function.steam_friends_request_user_information} to download the avatar.]]
 *
 * @param {Real} steam_id_clan The Steam group to get the officers list for.
 * @param {Function} [callback] The function to be called upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::ClanOfficerListResponse_t](https://partner.steamgames.com/doc/api/ISteamFriends#ClanOfficerListResponse_t)
 * @member {Struct.SteamFriendsRequestClanOfficerListResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_friends_request_friend_rich_presence
 * @description > **Steamworks Function**: [ISteamFriends::RequestFriendRichPresence](https://partner.steamgames.com/doc/api/ISteamFriends#RequestFriendRichPresence)
 *
 * This function requests Rich Presence data from a specific user.
 * 
 * This is used to get the Rich Presence information from a user that is not a friend of the current user, like someone in the same lobby or game server.
 * 
 * This function is rate limited, if you call this too frequently for a particular user then it will just immediately post a callback without requesting new data from the server.
 *
 * @param {Real} steam_id_friend The Steam ID of the user to request the rich presence of.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::FriendRichPresenceUpdate_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendRichPresenceUpdate_t)
 * @member {Struct.SteamFriendsFriendRichPresenceUpdate} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_friends_request_user_information
 * @description > **Steamworks Function**: [ISteamFriends::RequestUserInformation](https://partner.steamgames.com/doc/api/ISteamFriends#RequestUserInformation)
 *
 * This function requests the persona name and optionally the avatar of a specified user.
 * 
 * [[Note: It's a lot slower to download avatars and churns the local cache, so if you don't need avatars, don't request them.]]
 *
 * @param {Real} steam_id_user The user to request the information of.
 * @param {Bool} require_name_only Retrieve the Persona name only (`true`)? Or both the name and the avatar (`false`)?
 * @returns {Bool} `true` means that the data has being requested, and a [PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t) callback will be posted when it's retrieved. `false` means that we already have all the details about that user, and functions that require this information can be used immediately.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t)
 * @member {Struct.SteamFriendsPersonaStateChange} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_friends_set_in_game_voice_speaking
 * @description > **Steamworks Function**: [ISteamFriends::SetInGameVoiceSpeaking](https://partner.steamgames.com/doc/api/ISteamFriends#SetInGameVoiceSpeaking)
 *
 * This function lets Steam know that the user is currently using voice chat in game.
 * 
 * This will suppress the microphone for all voice communication in the Steam UI.
 *
 * @param {Real} steam_id_user Unused.
 * @param {Bool} speaking Did the user start speaking in game (`true`) or stop speaking in game (`false`)?
 * @function_end
 */

/**
 * @function steam_friends_set_played_with
 * @description > **Steamworks Function**: [ISteamFriends::SetPlayedWith](https://partner.steamgames.com/doc/api/ISteamFriends#SetPlayedWith)
 *
 * This function marks a target user as 'played with'.
 * 
 * You can view the players you have recently played with [here](http://steamcommunity.com/my/friends/coplay/) on the Steam community and in the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay).
 * 
 * [[Note: The current user must be in game with the other player for the association to work.]]
 *
 * @param {Real} steam_id_user_played_with The other user that we have played with.
 * @function_end
 */

/**
 * @function steam_friends_set_rich_presence
 * @description > **Steamworks Function**: [ISteamFriends::SetRichPresence](https://partner.steamgames.com/doc/api/ISteamFriends#SetRichPresence)
 *
 * This function sets a Rich Presence key/value for the current user that is automatically shared to all friends playing the same game.
 * 
 * Each user can have up to 20 keys set as defined by `SteamFriendsMaxRichPresenceKeys`.
 * 
 * You can clear all of the keys for the current user with ${function.steam_friends_clear_rich_presence}.
 * 
 * To get rich presence keys for friends see: ${function.steam_friends_get_friend_rich_presence}.
 *
 * @param {String} key The rich presence 'key' to set. This can not be longer than specified in [k_cchMaxRichPresenceKeyLength](https://partner.steamgames.com/doc/api/ISteamFriends#k_cchMaxRichPresenceKeyLength).
 * @param {String} value The rich presence 'value' to associate with `key`. This can not be longer than specified in `SteamFriendsMaxRichPresenceKeyLength`. If this is set to an empty string (`""`) then the key is removed if it's set.
 * @returns {Bool} `true` if the rich presence was set successfully, `false` if key or value was longer than its respective max length, the key had a length of 0, or the user has reached the maximum number of rich presence keys
 * @function_end
 */

/**
 * @function steam_friends_set_callback_persona_state_change
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to use whenever a friend's status changes.
 * 
 * See: [ISteamFriends::PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t)
 * 
 * @param {Function} callback The function to use as the callback function.
 * 
 * @function_end
 */

/**
 * @function steam_friends_clear_callback_persona_state_change
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set using ${function.steam_friends_set_callback_persona_state_change}.
 *
 * @function_end
 */

/**
 * @function steam_friends_set_callback_game_overlay_activated
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to use when the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) activates or deactivates.
 * 
 * See: [ISteamFriends::GameOverlayActivated_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameOverlayActivated_t)
 *
 * @param {Function} callback The function to use as the callback function.
 * @function_end
 */

/**
 * @function steam_friends_clear_callback_game_overlay_activated
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set using ${function.steam_friends_set_callback_game_overlay_activated}.
 *
 * @function_end
 */

/**
 * @function steam_friends_set_callback_game_rich_presence_join_requested
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to use when the user tries to join a game from their friends list or after a user accepts an invite by a friend with ${function.steam_friends_invite_user_to_game}.
 * 
 * See: [ISteamFriends::GameRichPresenceJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameRichPresenceJoinRequested_t)
 *
 * @param {Function} callback The function to use as the callback function.
 * @function_end
 */

/**
 * @function steam_friends_clear_callback_game_rich_presence_join_requested
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set using ${function.steam_friends_set_callback_game_rich_presence_join_requested}.
 *
 * @function_end
 */

/**
 * @function steam_friends_set_callback_game_lobby_join_requested
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to use when the user tries to join a lobby from their friends list or from an invite.
 * 
 * See: [ISteamFriends::GameLobbyJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameLobbyJoinRequested_t)
 *
 * @param {Function} callback The function to use as the callback function.
 * @function_end
 */

/**
 * @function steam_friends_clear_callback_game_lobby_join_requested
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set using ${function.steam_friends_set_callback_game_lobby_join_requested}.
 *
 * @function_end
 */

/**
 * @function steam_friends_set_callback_friend_rich_presence_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to use when Rich Presence data has been updated for a user, this can happen automatically when friends in the same game update their rich presence, or after a call to ${function.steam_friends_request_friend_rich_presence}.
 * 
 * See: [ISteamFriends::FriendRichPresenceUpdate_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendRichPresenceUpdate_t)
 *
 * @param {Function} callback The function to use as the callback function.
 * @function_end
 */

/**
 * @function steam_friends_clear_callback_friend_rich_presence_update
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set using ${function.steam_friends_set_callback_friend_rich_presence_update}.
 *
 * @function_end
 */

/**
 * @function steam_friends_set_callback_game_server_change_requested
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to use when the user tries to join a different game server from their friends list.
 * 
 * See: [ISteamFriends::GameServerChangeRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameServerChangeRequested_t)
 *
 * @param {Function} callback The function to use as the callback function.
 * @function_end
 */

/**
 * @function steam_friends_clear_callback_game_server_change_requested
 * @description > **Steamworks Function**:  N / A
 *
 * This function clears the callback previously set using ${function.steam_friends_set_callback_game_server_change_requested}.
 *
 * @function_end
 */

/**
 * @function steam_apps_get_dlc_data_by_index
 * @description > **Steamworks Function**: [ISteamApps#BGetDLCDataByIndex](https://partner.steamgames.com/doc/api/ISteamApps#BGetDLCDataByIndex)
 *
 * This function returns metadata for a DLC by index.
 *
 * @param {Real} dlc Index of the DLC to get between 0 and ${function.steam_apps_get_dlc_count}.
 * @returns {Struct.SteamAppsDlcData}
 * @function_end
 */

/**
 * @function steam_apps_is_app_installed
 * @description > **Steamworks Function**: [ISteamApps::BIsAppInstalled](https://partner.steamgames.com/doc/api/ISteamApps#BIsAppInstalled)
 *
 * This function checks if a specific app is installed.
 * 
 * [[Note: Should only be used for simple client side checks - not intended for granting in-game items.]]
 *
 * @param {Real} app_id The App ID of the DLC to check.
 * @returns {Bool} `true` if the user owns the DLC and it's currently installed, otherwise `false`.
 * @function_end
 */

/**
 * @function steam_apps_is_cybercafe
 * @description > **Steamworks Function**: [ISteamApps::BIsCybercafe](https://partner.steamgames.com/doc/api/ISteamApps#BIsCybercafe)
 *
 * This function checks whether the current App ID is for Cyber Cafes.
 * 
 * [[Note: Deprecated - No longer used.]]
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_is_dlc_installed
 * @description > **Steamworks Function**: [ISteamApps::BIsDlcInstalled](https://partner.steamgames.com/doc/api/ISteamApps#BIsDlcInstalled)
 *
 * This function checks if the user owns a specific DLC and if the DLC is installed.
 * 
 * [[Note: Should only be used for simple client side checks - not intended for granting in-game items.]]
 *
 * @param {Real} app_id The App ID of the DLC to check.
 * @returns {Bool} `true` if the user owns the DLC and it's currently installed, otherwise `false`.
 * @function_end
 */

/**
 * @function steam_apps_is_low_violence
 * @description > **Steamworks Function**: [ISteamApps::BIsLowViolence](https://partner.steamgames.com/doc/api/ISteamApps#BIsLowViolence)
 *
 * This function checks if the license owned by the user provides low violence depots.
 * 
 * Low violence depots are useful for copies sold in countries that have content restrictions.
 * 
 * See also: [Depot Mounting Rules](https://partner.steamgames.com/doc/store/application/depots#depot_mounting_rules)
 *
 * @returns {Bool} `true` if the license owned by the user provides low violence depots; otherwise, `false`.
 * @function_end
 */

/**
 * @function steam_apps_is_subscribed
 * @description > **Steamworks Function**: [ISteamApps::BIsSubscribed](https://partner.steamgames.com/doc/api/ISteamApps#BIsSubscribed)
 *
 * This function checks if the active user is subscribed to the current App ID.
 * 
 * [[Note: This will always return `true` if you're using Steam DRM or calling ${function.steam_api_restart_app_if_necessary}.]]
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_is_subscribed_app
 * @description > **Steamworks Function**: [ISteamApps::BIsSubscribedApp](https://partner.steamgames.com/doc/api/ISteamApps#BIsSubscribedApp)
 *
 * This function checks if the active user is subscribed to a specified App ID.
 * 
 * Only use this if you need to check ownership of another game related to yours, a demo for example.
 *
 * @param {Real} app_id The App ID to check.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_is_subscribed_from_family_sharing
 * @description > **Steamworks Function**: [ISteamApps::BIsSubscribedFromFamilySharing](https://partner.steamgames.com/doc/api/ISteamApps#BIsSubscribedFromFamilySharing)
 *
 * This function checks if the active user is accessing the current app ID via a temporary Family Shared license owned by another user.
 * 
 * If you need to determine the Steam ID of the permanent owner of the license, use ${function.steam_apps_get_app_owner}.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_is_subscribed_from_free_weekend
 * @description > **Steamworks Function**: [ISteamApps::BIsSubscribedFromFreeWeekend](https://partner.steamgames.com/doc/api/ISteamApps#BIsSubscribedFromFreeWeekend)
 *
 * This function checks if the user is subscribed to the current app ID through a free weekend.
 * 
 * Before using this please contact a Valve technical account manager via the [Steamworks Discussion Board](http://steamcommunity.com/groups/steamworks/discussions) to properly package and secure your free weekend.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_is_timed_trial
 * @description > **Steamworks Function**: [ISteamApps::BIsTimedTrial](https://partner.steamgames.com/doc/api/ISteamApps#BIsTimedTrial)
 *
 * This function checks if the user is subscribed to the current app ID through a timed trial. If so, holds `true` for the `ok` key in the returned struct and gives back the total time the timed trial is allowed to play, along with the current amount of time the user has played.
 * 
 * See also: [TimedTrialStatus_t](https://partner.steamgames.com/doc/api/ISteamApps#TimedTrialStatus_t)
 *
 * @returns {Struct.SteamAppsTimedTrialStatus} 
 * @function_end
 */

/**
 * @function steam_apps_is_vac_banned
 * @description > **Steamworks Function**: [ISteamApps::BIsVACBanned](https://partner.steamgames.com/doc/api/ISteamApps#BIsVACBanned)
 *
 * This function checks if the user has a VAC ban on their account.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_get_app_build_id
 * @description > **Steamworks Function**: [ISteamApps::GetAppBuildId](https://partner.steamgames.com/doc/api/ISteamApps#GetAppBuildId)
 *
 * This function gets the buildid of this app, may change at any time based on backend updates to the game.
 *
 * @returns {Real} The current Build Id of this App. Defaults to 0 if you're not running a build downloaded from Steam.
 * @function_end
 */

/**
 * @function steam_apps_get_app_install_dir
 * @description > **Steamworks Function**: [ISteamApps::GetAppInstallDir](https://partner.steamgames.com/doc/api/ISteamApps#GetAppInstallDir)
 *
 * This function gets the install folder for a specific App ID.
 * 
 * This works even if the application is not installed, based on where the game would be installed with the default Steam library location.
 *
 * @param {Real} app_id The App ID to get the install dir for.
 * @returns {Struct.SteamAppsInstallDir} 
 * @function_end
 */

/**
 * @function steam_apps_get_app_owner
 * @description > **Steamworks Function**: [ISteamApps::GetAppOwner](https://partner.steamgames.com/doc/api/ISteamApps#GetAppOwner)
 *
 * This function gets the Steam ID of the true owner of the current app. This is different from the current user if they are accessing this app via Family Sharing.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_apps_get_available_game_languages
 * @description > **Steamworks Function**: [ISteamApps::GetAvailableGameLanguages](https://partner.steamgames.com/doc/api/ISteamApps#GetAvailableGameLanguages)
 *
 * This function gets a comma separated list of the languages the current app supports.
 * 
 * For the full list of languages that may be returned see [Localization and Languages](https://partner.steamgames.com/doc/store/localization).
 * 
 * See also: ${function.steam_apps_get_current_game_language}, ${function.steam_utils_get_steam_ui_language}
 *
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_apps_get_current_beta_name
 * @description > **Steamworks Function**: [ISteamApps::GetCurrentBetaName](https://partner.steamgames.com/doc/api/ISteamApps#GetCurrentBetaName)
 *
 * This function checks if the user is running from a beta branch, and gets the name of the branch if they are.
 *
 * @returns {Struct.SteamAppsBetaName} 
 * @function_end
 */

/**
 * @function steam_apps_get_num_betas
 * @description > **Steamworks Function**: [ISteamApps::GetNumBetas](https://partner.steamgames.com/doc/api/ISteamApps#GetNumBetas)
 *
 * This function returns the total number of known app branches (including default "public" branch) which can be iterated with ${function.steam_apps_get_beta_info}.
 *
 * @returns {Struct.SteamAppsNumBetas} 
 * @function_end
 */

/**
 * @function steam_apps_get_beta_info
 * @description > **Steamworks Function**: [ISteamApps::GetBetaInfo](https://partner.steamgames.com/doc/api/ISteamApps#GetBetaInfo)
 *
 * This function gets details about an app beta branch like name, description and state.
 *
 * @param {Real} beta_index Branch index starting at 0 which is always the default branch.
 * @returns {Struct.SteamAppsBetaInfo} 
 * @function_end
 */

/**
 * @function steam_apps_set_active_beta
 * @description > **Steamworks Function**: [ISteamApps::SetActiveBeta](https://partner.steamgames.com/doc/api/ISteamApps#SetActiveBeta)
 *
 * This function selects a beta branch for this app as active, might need the game to restart so Steam can update its content to that branch.
 *
 * @param {String} beta_name Beta name the game wants to switch to.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_get_current_game_language
 * @description > **Steamworks Function**: [ISteamApps::GetCurrentGameLanguage](https://partner.steamgames.com/doc/api/ISteamApps#GetCurrentGameLanguage)
 *
 * This function gets the current language that the user has set.
 * 
 * This falls back to the Steam UI language if the user hasn't explicitly picked a language for the title.
 * 
 * For the full list of languages see [Supported Languages](https://partner.steamgames.com/doc/store/localization/languages).
 * 
 * See also: ${function.steam_apps_get_available_game_languages}, ${function.steam_utils_get_steam_ui_language}
 *
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_apps_get_dlc_count
 * @description > **Steamworks Function**: [ISteamApps::GetDLCCount](https://partner.steamgames.com/doc/api/ISteamApps#GetDLCCount)
 *
 * This function gets the number of DLC pieces for the current app.
 * 
 * This is typically used to loop through each piece of DLC and get the info about each one with ${function.steam_apps_get_dlc_data_by_index}.
 *
 * @returns {Real} The number of DLC pieces for the current app. Note that this value may max out at 64, depending on how much unowned DLC the user has. If your app has a large number of DLC, you should set your own internal list of known DLC to check against.
 * @function_end
 */

/**
 * @function steam_apps_get_dlc_download_progress
 * @description > **Steamworks Function**: [ISteamApps::GetDlcDownloadProgress](https://partner.steamgames.com/doc/api/ISteamApps#GetDlcDownloadProgress)
 *
 * This function gets the download progress for optional DLC.
 *
 * @param {Real} app_id The App ID of the DLC to monitor.
 * @returns {Struct.SteamAppsDlcDownloadProgress} 
 * @function_end
 */

/**
 * @function steam_apps_get_app_ownership_ticket_data
 * @description > **Steamworks Function**: [ISteamAppTicket::GetAppOwnershipTicketData](https://partner.steamgames.com/doc/api/ISteamAppTicket)
 *
 * This function gets the app ownership ticket data for the given app ID.
 *
 * @param {Real} app_id The App ID to get the ownership ticket data for.
 * @param {Buffer} ticket_buffer The buffer to write the ownership ticket data into.
 * @param {Real} max_bytes The maximum number of bytes to write into the buffer.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_apps_get_earliest_purchase_unix_time
 * @description > **Steamworks Function**: [ISteamApps::GetEarliestPurchaseUnixTime](https://partner.steamgames.com/doc/api/ISteamApps#GetEarliestPurchaseUnixTime)
 *
 * This function gets the time of purchase of the specified app in Unix epoch format (time since Jan 1st, 1970).
 * 
 * This is useful for rewarding users based on their initial purchase date.
 *
 * @param {Real} app_id The App ID to get the purchase time for.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_apps_get_file_details
 * @description > **Steamworks Function**: [ISteamApps::GetFileDetails](https://partner.steamgames.com/doc/api/ISteamApps#GetFileDetails)
 *
 * This function asynchronously retrieves metadata details about a specific file in the depot manifest.
 *
 * @param {String} file_name The absolute path and name to the file.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamApps::FileDetailsResult_t](https://partner.steamgames.com/doc/api/ISteamApps#FileDetailsResult_t)
 * @member {Struct.SteamAppsFileDetailsResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_apps_get_installed_depots
 * @description > **Steamworks Function**: [ISteamApps::GetInstalledDepots](https://partner.steamgames.com/doc/api/ISteamApps#GetInstalledDepots)
 *
 * This function gets a list of all installed depots for a given App ID in mount order.
 *
 * @param {Real} app_id The App to list the depots for.
 * @param {Real} max_depots The maximum number of depots to obtain.
 * @returns {Array[Real]} An array holding the unique identifiers of the depots.
 * @function_end
 */

/**
 * @function steam_apps_get_launch_command_line
 * @description > **Steamworks Function**: [ISteamApps::GetLaunchCommandLine](https://partner.steamgames.com/doc/api/ISteamApps#GetLaunchCommandLine)
 *
 * This function gets the command line if the game was launched via Steam URL, e.g. `"steam://run/<appid>//<command line>/"`. This method is preferable to launching with a command line via the operating system, which can be a security risk. In order for rich presence joins to go through this and not be placed on the OS command line, you must enable "Use launch command line" from the Installation > General page on your app.
 *
 * @param {Real} command_line_size The maximum number of bytes to read into the returned command line string.
 * @returns {Struct.SteamAppsLaunchCommandLine}
 * @function_end
 */

/**
 * @function steam_apps_get_launch_query_param
 * @description > **Steamworks Function**: [ISteamApps::GetLaunchQueryParam](https://partner.steamgames.com/doc/api/ISteamApps#GetLaunchQueryParam)
 *
 * This function gets the associated launch parameter if the game is run via `"steam://run/<appid>/?param1=value1;param2=value2;param3=value3"`, etc.
 * 
 * Parameter names starting with the character `"@"` are reserved for internal use and will always return an empty string `""`.
 * Parameter names starting with an underscore `"_"` are reserved for Steam features -- they can be queried by the game, but it is advised that you do not use param names beginning with an underscore for your own features.
 *
 * @param {String} key The launch key to test for. Ex: `"param1"`
 * @returns {String} The value associated with the key provided, or an empty string (`""`) if the specified key does not exist.
 * @function_end
 */

/**
 * @function steam_apps_install_dlc
 * @description > **Steamworks Function**: [ISteamApps::InstallDLC](https://partner.steamgames.com/doc/api/ISteamApps#InstallDLC)
 *
 * This function allows you to install an optional DLC.
 *
 * @param {Real} app_id The DLC you want to install.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamApps::DlcInstalled_t](https://partner.steamgames.com/doc/api/ISteamApps#DlcInstalled_t)
 * 
 * Triggered after the current user gains ownership of DLC and that DLC is installed.
 * 
 * @member {Struct.SteamAppsDlcInstalled} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_apps_mark_content_corrupt
 * @description > **Steamworks Function**: [ISteamApps::MarkContentCorrupt](https://partner.steamgames.com/doc/api/ISteamApps#MarkContentCorrupt)
 *
 * This function allows you to force verify game content on next launch.
 * 
 * If you detect the game is out-of-date (for example, by having the client detect a version mismatch with a server), you can call ${function.steam_apps_mark_content_corrupt} to force a verify, show a message to the user, and then quit.
 *
 * @param {Bool} missing_files_only Only scan for missing files, don't verify the checksum of each file.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_apps_request_all_proof_of_purchase_keys
 * @description > **Steamworks Function**: [ISteamApps::RequestAllProofOfPurchaseKeys](https://partner.steamgames.com/doc/api/ISteamApps#RequestAllProofOfPurchaseKeys)
 *
 * Deprecated.
 *
 * @function_end
 */

/**
 * @function steam_apps_request_app_proof_of_purchase_key
 * @description > **Steamworks Function**: [ISteamApps::RequestAppProofOfPurchaseKey](https://partner.steamgames.com/doc/api/ISteamApps#RequestAppProofOfPurchaseKey)
 *
 * Deprecated.
 *
 * @param {Real} app_id The App ID to request the proof of purchase key for.
 * @function_end
 */

/**
 * @function steam_apps_uninstall_dlc
 * @description > **Steamworks Function**: [ISteamApps::UninstallDLC](https://partner.steamgames.com/doc/api/ISteamApps#UninstallDLC)
 *
 * This function allows you to uninstall an optional DLC.
 *
 * @param {Real} app_id The DLC you want to uninstall.
 * @function_end
 */

/**
 * @function steam_apps_set_callback_dlc_installed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the callback function to be triggered after the current user gains ownership of DLC and that DLC is installed.
 * 
 * See: [ISteamApps::InstallDLC](https://partner.steamgames.com/doc/api/ISteamApps#InstallDLC)
 *
 * @param {Function} callback The function to be used as the callback function.
 * @function_end
 */

/**
 * @function steam_apps_clear_callback_dlc_installed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_apps_set_callback_dlc_installed}.
 *
 * @function_end
 */

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
 * @returns {Real} Screenshot handle, or [INVALID_SCREENSHOT_HANDLE](https://partner.steamgames.com/doc/api/ISteamScreenshots#INVALID_SCREENSHOT_HANDLE) if the file could not be saved
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
 * @param {String} vr_filename The absolute file path to the VR screenshot, this should be the same type of screenshot specified in `eType`.
 * @returns {Real} Screenshot handle, or `SteamScreenshotsInvalidScreenshotHandle` if the file could not be saved (See: ${constant.macros})
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
 * @param {String} location The location in the game where this screenshot was taken. This can not be longer than [k_cubUFSTagValueMax](https://partner.steamgames.com/doc/api/ISteamScreenshots#k_cubUFSTagValueMax).
 * @returns {Bool} `true` if the location was successfully added to the screenshot. `false` if the screenshot handle was invalid, or the location is invalid or too long.
 * @function_end
 */

/**
 * @function steam_screenshots_tag_published_file
 * @description > **Steamworks Function**: [ISteamScreenshots::TagPublishedFile](https://partner.steamgames.com/doc/api/ISteamScreenshots#TagPublishedFile)
 *
 * This function tags a published file as being visible in the screenshot.
 * 
 * You can tag up to the value declared by `SteamScreenshotsMaxTaggedUsers` ([k_nScreenshotMaxTaggedPublishedFiles](https://partner.steamgames.com/doc/api/ISteamScreenshots#k_nScreenshotMaxTaggedPublishedFiles)) in a single screenshot. Tagging more items than that will just be discarded.
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
 * You can tag up to the value declared by `SteamScreenshotsMaxTaggedUsers` ([k_nScreenshotMaxTaggedUsers](https://partner.steamgames.com/doc/api/ISteamScreenshots#k_nScreenshotMaxTaggedUsers)) in a single screenshot. Tagging more items than that will just be discarded.
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
 * @member {Real} local The screenshot handle that has been written.
 * @member {Enum.SteamApiResult} result The result of the operation. Possible values:
 * 
 * * `SteamApiResult.Ok` - The screenshot was successfully added to the user's library.
 * * `SteamApiResult.Fail` - The screenshot could not be loaded or parsed.
 * * `SteamApiResult.IoFailure` - The screenshot could not be saved to the disk.
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
 * @param {Real} rgb_size The size of `rgb` in bytes.
 * @param {Real} width The width of the screenshot in pixels.
 * @param {Real} height The height of the screenshot in pixels.
 * @returns {Real} Screenshot handle, or [INVALID_SCREENSHOT_HANDLE](https://partner.steamgames.com/doc/api/ISteamScreenshots#INVALID_SCREENSHOT_HANDLE) if the file could not be saved
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

/**
 * @function steam_user_advertise_game
 * @description > **Steamworks Function**: [ISteamUser::AdvertiseGame](https://partner.steamgames.com/doc/api/ISteamUser#AdvertiseGame)
 *
 * This function sets the rich presence data for an unsecured game server that the user is playing on. This allows friends to be able to view the game info and join your game.
 * 
 * When you are using Steam authentication system this call is never required, the auth system automatically sets the appropriate rich presence.
 *
 * @param {Real} steam_id_game_server This should be [k_steamIDNonSteamGS](https://partner.steamgames.com/doc/api/steam_api#k_steamIDNonSteamGS) if you're setting the IP/Port, otherwise it should be [k_steamIDNil](https://partner.steamgames.com/doc/api/steam_api#k_steamIDNil) if you're clearing this.
 * @param {Real} server_ip The IP of the game server in host order, i.e 127.0.0.1 == 0x7f000001.
 * @param {Real} server_port The connection port of the game server, in host order.
 * @function_end
 */

/**
 * @function steam_user_begin_auth_session
 * @description > **Steamworks Function**: [ISteamUser::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamUser#BeginAuthSession)
 *
 * This function authenticates the ticket from the entity Steam ID to be sure it is valid and isn't reused. Note that identity is not confirmed until the response callback is received and the return value in that callback is checked for success.
 * 
 * The ticket is created on the entity with ${function.steam_user_get_auth_session_ticket} or [ISteamGameServer::GetAuthSessionTicket](https://partner.steamgames.com/doc/api/ISteamGameServer#GetAuthSessionTicket) and then needs to be provided over the network for the other end to validate.
 * 
 * This registers for additional [ValidateAuthTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#ValidateAuthTicketResponse_t) callbacks if the entity goes offline or cancels the ticket. See ${Enum.SteamAuthSessionResponse} for more information.
 * 
 * When the multiplayer session terminates you must call ${function.steam_user_end_auth_session}.
 * 
 * See also: [User Authentication and Ownership](https://partner.steamgames.com/doc/features/auth)
 *
 * @param {Buffer} auth_ticket The auth ticket to validate.
 * @param {Real} auth_ticket_size The size in bytes of the auth ticket. This must be the ticket size provided by the call that created this ticket.
 * @param {Real} steam_id The entity's Steam ID that sent this ticket.
 * @returns {Enum.SteamUserBeginAuthSessionResult} 
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::ValidateAuthTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#ValidateAuthTicketResponse_t)
 * 
 * Called when an auth ticket has been validated.
 * 
 * @member {Real} steam_id The Steam ID of the entity that provided the auth ticket.
 * @member {Enum.SteamAuthSessionResponse} auth_session_response The result of the validation.
 * @member {} owner_steam_id The Steam ID that owns the game, this will be different from `steam_id` if the game is being accessed via Steam Family Sharing.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_is_behind_nat
 * @description > **Steamworks Function**: [ISteamUser::BIsBehindNAT](https://partner.steamgames.com/doc/api/ISteamUser#BIsBehindNAT)
 *
 * This function checks if the current user looks like they are behind a NAT device.
 * 
 * This is only valid if the user is connected to the Steam servers and may not catch all forms of NAT.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_phone_identifying
 * @description > **Steamworks Function**: [ISteamUser::BIsPhoneIdentifying](https://partner.steamgames.com/doc/api/ISteamUser#BIsPhoneIdentifying)
 *
 * This function checks whether the user's phone number is used to uniquely identify them.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_phone_requiring_verification
 * @description > **Steamworks Function**: [ISteamUser::BIsPhoneRequiringVerification](https://partner.steamgames.com/doc/api/ISteamUser#BIsPhoneRequiringVerification)
 *
 * This function checks whether the current user's phone number is awaiting (re)verification.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_phone_verified
 * @description > **Steamworks Function**: [ISteamUser::BIsPhoneVerified](https://partner.steamgames.com/doc/api/ISteamUser#BIsPhoneVerified)
 *
 * This function checks whether the current user has verified their phone number.
 * 
 * See the [Steam Guard Mobile Authenticator](https://support.steampowered.com/kb_article.php?ref=8625-wrah-9030) page on the customer facing Steam Support site for more information.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_two_factor_enabled
 * @description > **Steamworks Function**: [ISteamUser::BIsTwoFactorEnabled](https://partner.steamgames.com/doc/api/ISteamUser#BIsTwoFactorEnabled)
 *
 * This function checks whether the current user has Steam Guard two factor authentication enabled on their account.
 * 
 * See the [Steam Guard Mobile Authenticator](https://support.steampowered.com/kb_article.php?ref=8625-wrah-9030) page on the customer facing Steam Support site for more information.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_logged_on
 * @description > **Steamworks Function**: [ISteamUser::BLoggedOn](https://partner.steamgames.com/doc/api/ISteamUser#BLoggedOn)
 *
 * This function checks if the current user's Steam client is connected to the Steam servers.
 * 
 * If it's not then no real-time services provided by the Steamworks API will be enabled. The Steam client will automatically be trying to recreate the connection as often as possible. When the connection is restored a [SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t) callback will be posted.
 * 
 * You usually don't need to check for this yourself. All of the API calls that rely on this will check internally. Forcefully disabling stuff when the player loses access is usually not a very good experience for the player and you could be preventing them from accessing APIs that do not need a live connection to Steam.
 *
 * @returns {Bool} `true` if the Steam client current has a live connection to the Steam servers; otherwise, `false` if there is no active connection due to either a networking issue on the local machine, or the Steam server is down/busy.
 * @function_end
 */

/**
 * @function steam_user_set_duration_control_online_state
 * @description > **Steamworks Function**: [ISteamUser::BSetDurationControlOnlineState](https://partner.steamgames.com/doc/api/ISteamUser#BSetDurationControlOnlineState)
 *
 * This function allows the game to specify the offline/online gameplay state for Steam china duration control.
 *
 * @param {Enum.SteamUserDurationControlOnlineState} state The new gameplay state.
 * @returns {Bool} `true` if the online state was set successfully; otherwise, `false`.
 * @function_end
 */

/**
 * @function steam_user_cancel_auth_ticket
 * @description > **Steamworks Function**: [ISteamUser::CancelAuthTicket](https://partner.steamgames.com/doc/api/ISteamUser#CancelAuthTicket)
 *
 * This function cancels an auth ticket received from ${function.steam_user_get_auth_session_ticket} or ${function.steam_user_get_auth_ticket_for_web_api}. This should be called when no longer playing with the specified entity.
 * 
 * See also: [User Authentication and Ownership](https://partner.steamgames.com/doc/features/auth)
 *
 * @param {Real} auth_ticket_handle The active auth ticket to cancel.
 * @function_end
 */

/**
 * @function steam_user_decompress_voice
 * @description > **Steamworks Function**: [ISteamUser::DecompressVoice](https://partner.steamgames.com/doc/api/ISteamUser#DecompressVoice)
 *
 * This function decodes the compressed voice data returned by ${function.steam_user_get_voice}.
 * 
 * The output data is raw single-channel 16-bit PCM audio. The decoder supports any sample rate from 11025 to 48000. See ${function.steam_user_get_voice_optimal_sample_rate} for more information.
 * 
 * It is recommended that you start with a 20KiB buffer and then reallocate as necessary.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @param {Buffer} compressed The compressed data received from ${function.steam_user_get_voice}.
 * @param {Real} compressed_size The size of the buffer passed into `compressed`.
 * @param {Buffer} dest The buffer where the raw audio data will be returned. This can then be passed to your audio subsystems for playback.
 * @param {Real} dest_buffer_size The size of the buffer passed into `dest`.
 * @param {Real} desired_sample_rate The sample rate that will be returned. This can be from 11025 to 48000, you should either use the rate that works best for your audio playback system, which likely takes the user's audio hardware into account, or you can use ${function.steam_user_get_voice_optimal_sample_rate} to get the native sample rate of the Steam voice decoder.
 * @returns {Enum.SteamApiVoiceResult}
 * @function_end
 */

/**
 * @function steam_user_end_auth_session
 * @description > **Steamworks Function**: [ISteamUser::EndAuthSession](https://partner.steamgames.com/doc/api/ISteamUser#EndAuthSession)
 *
 * This function ends an auth session that was started with ${function.steam_user_begin_auth_session}. This should be called when no longer playing with the specified entity.
 * 
 * See: [User Authentication and Ownership](https://partner.steamgames.com/doc/features/auth)
 *
 * @param {Real} steam_id The entity to end the active auth session with.
 * @function_end
 */

/**
 * @function steam_user_get_auth_session_ticket
 * @description > **Steamworks Function**: [ISteamUser::GetAuthSessionTicket](https://partner.steamgames.com/doc/api/ISteamUser#GetAuthSessionTicket)
 *
 * This function retrieves an authentication ticket to be sent to the entity who wishes to authenticate you.
 * 
 * After calling this you can send the ticket to the entity where they can then call ${function.steam_user_begin_auth_session} /[ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession) to verify this entity's integrity.
 * 
 * [[Note: This API can not be used to create a ticket for use by the [ISteamUserAuth/AuthenticateUserTicket](https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket) Web API. Use the ${function.steam_user_get_auth_ticket_for_web_api} call instead.]]
 *
 * @param {Buffer} out_ticket The buffer where the new auth ticket will be copied into if the call was successful.
 * @param {Real} max_ticket_size The size of the buffer allocated for `out_ticket`. Typically a buffer size of 1024 will be sufficient. However, in certain cases (e.g., when an application has a large amount of available DLC), a larger buffer size may be required.
 * @param {Struct.SteamNetworkingIdentity} [remote_identity] The identity of the remote system that will authenticate the ticket. If it is peer-to-peer then the user steam ID. If it is a game server, then the game server steam ID may be used if it was obtained from a trusted 3rd party, otherwise use the IP address. If it is a service, a string identifier of that service if one if provided.
 * @returns {Struct.SteamUserAuthSessionTicket} 
 * @function_end
 */

/**
 * @function steam_user_get_h_steam_user
 * @description > **Steamworks Function**: [ISteamUser::GetHSteamUser](https://partner.steamgames.com/doc/api/ISteamUser#GetHSteamUser)
 *
 * This function gets the Steam user handle that this interface represents.
 * 
 * This is only used internally by the API, and by a few select interfaces that support multi-user.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_player_steam_level
 * @description > **Steamworks Function**: [ISteamUser::GetPlayerSteamLevel](https://partner.steamgames.com/doc/api/ISteamUser#GetPlayerSteamLevel)
 *
 * This function gets the Steam level of the user, as shown on their Steam community profile.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_steam_id
 * @description > **Steamworks Function**: [ISteamUser::GetSteamID](https://partner.steamgames.com/doc/api/ISteamUser#GetSteamID)
 *
 * This function gets the Steam ID of the account currently logged into the Steam client. This is commonly called the 'current user', or 'local user'.
 * 
 * A Steam ID is a unique identifier for a Steam accounts, Steam groups, Lobbies and Chat rooms, and used to differentiate users in all parts of the Steamworks API.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_decode_steam_id
 * @description > **Steamworks Function**: N / A
 *
 * This function gets information about the given Steam ID and returns it in a struct.
 *
 * @param {Real} steam_id The Steam ID to get information about.
 * @returns {Struct.SteamId} 
 * @function_end
 */

/**
 * @function steam_user_start_voice_recording
 * @description > **Steamworks Function**: [ISteamUser::StartVoiceRecording](https://partner.steamgames.com/doc/api/ISteamUser#StartVoiceRecording)
 *
 * This function starts voice recording.
 * 
 * Once started, use ${function.steam_user_get_available_voice} and ${function.steam_user_get_voice} to get the data, and then call ${function.steam_user_stop_voice_recording} when the user has released their push-to-talk hotkey or the game session has completed.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @function_end
 */

/**
 * @function steam_user_stop_voice_recording
 * @description > **Steamworks Function**: [ISteamUser::StartVoiceRecording](https://partner.steamgames.com/doc/api/ISteamUser#StartVoiceRecording)
 *
 * This function stops voice recording.
 * 
 * Because people often release push-to-talk keys early, the system will keep recording for a little bit after this function is called. As such, ${function.steam_user_get_voice} should continue to be called until it returns `SteamApiVoiceResult.NotRecording`, only then will voice recording be stopped.
 *
 * @function_end
 */

/**
 * @function steam_user_get_voice_optimal_sample_rate
 * @description > **Steamworks Function**: [ISteamUser::GetVoiceOptimalSampleRate](https://partner.steamgames.com/doc/api/ISteamUser#GetVoiceOptimalSampleRate)
 *
 * This function gets the native sample rate of the Steam voice decoder.
 * 
 * Using this sample rate for ${function.steam_user_decompress_voice} will perform the least CPU processing. However, the final audio quality will depend on how well the audio device (and/or your application's audio output SDK) deals with lower sample rates. You may find that you get the best audio output quality when you ignore this function and use the native sample rate of your audio output device, which is usually 48000 or 44100.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_available_voice
 * @description > **Steamworks Function**: [ISteamUser::GetAvailableVoice](https://partner.steamgames.com/doc/api/ISteamUser#GetAvailableVoice)
 *
 * This function checks to see if there is captured audio data available from ${function.steam_user_get_voice}, and gets the size of the data.
 * 
 * Most applications will only use compressed data and should ignore the other parameters, which exist primarily for backwards compatibility. See ${function.steam_user_get_voice} for further explanation of "uncompressed" data.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @returns {Struct.SteamUserAvailableVoice} 
 * @function_end
 */

/**
 * @function steam_user_get_voice
 * @description > **Stermworks Function**: [ISteamUser::GetVoice](https://partner.steamgames.com/doc/api/ISteamUser#GetVoice)
 * 
 * This function reads captured audio data from the microphone buffer.
 * 
 * The compressed data can be transmitted by your application and decoded back into raw audio data using ${function.steam_user_decompress_voice} on the other side. The compressed data provided is in an arbitrary format and is not meant to be played directly.
 * 
 * This should be called once per frame, and at worst no more than four times a second to keep the microphone input delay as low as possible. Calling this any less may result in gaps in the returned stream.
 * 
 * It is recommended that you pass in an 8 kilobytes or larger destination buffer for compressed audio. Static buffers are recommended for performance reasons. However, if you would like to allocate precisely the right amount of space for a buffer before each call you may use ${function.steam_user_get_available_voice} to find out how much data is available to be read.
 * 
 * [[Note: Uncompressed" audio is a deprecated feature and should not be used by most applications. It is raw single-channel 16-bit PCM wave data which may have been run through preprocessing filters and/or had silence removed, so the uncompressed audio could have a shorter duration than you expect. There may be no data at all during long periods of silence. Also, fetching uncompressed audio will cause ${function.steam_user_get_voice} to discard any leftover compressed audio, so you must fetch both types at once. Finally, ${function.steam_user_get_available_voice} is not precisely accurate when the uncompressed size is requested. So if you really need to use uncompressed audio, you should call ${function.steam_user_get_voice} GetVoice frequently with two very large (20KiB+) output buffers instead of trying to allocate perfectly-sized buffers. But most applications should ignore all of these details and simply leave the "uncompressed" parameters as 0.]]
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @param {Bool} want_compressed This should always be `true`.
 * @param {Buffer} dest_compressed The buffer where the audio data will be copied into.
 * @param {Real} dest_compressed_size The size of the buffer allocated for `dest_compressed`.
 * @param {Bool} want_uncompressed Deprecated.
 * @param {Buffer} dest_uncompressed Deprecated.
 * @param {Real} dest_uncompressed_size Deprecated.
 * @param {Real} desired_sample_rate Deprecated.
 * @returns {Struct.SteamUserGetVoiceResult} 
 * @function_end
 */

/**
 * @function steam_user_get_user_data_folder
 * @description > **Steamworks Function**: [ISteamUser::GetUserDataFolder](https://partner.steamgames.com/doc/api/ISteamUser#GetUserDataFolder)
 *
 * Deprecated. You should use the [ISteamRemoteStorage](https://partner.steamgames.com/doc/api/ISteamRemoteStorage) API from [Steam Cloud](https://partner.steamgames.com/doc/features/cloud) instead.
 *
 * @returns {Struct.SteamUserDataFolder} 
 * @function_end
 */

/**
 * @function steam_user_request_encrypted_app_ticket
 * @description > **Steamworks Function**: [ISteamUser::RequestEncryptedAppTicket](https://partner.steamgames.com/doc/api/ISteamUser#RequestEncryptedAppTicket)
 *
 * This function requests an application ticket encrypted with the secret "encrypted app ticket key".
 * 
 * The encryption key can be obtained from the [Encrypted App Ticket Key](https://partner.steamgames.com/apps/sdkauth/) page on the App Admin for your app.
 * 
 * There can only be one [EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t) pending, and this call is subject to a 60 second rate limit.
 * 
 * After receiving the response you should call ${function.steam_user_get_encrypted_app_ticket} to get the ticket data, and then you need to send it to a secure server to be decrypted with the [SteamEncryptedAppTicket](https://partner.steamgames.com/doc/api/SteamEncryptedAppTicket) functions.
 *
 * @param {Buffer} data_to_include The data which will be encrypted into the ticket.
 * @param {Real} data_to_include_size The total size in bytes of `data_to_include`.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t)
 * 
 * Called when an encrypted application ticket has been received.
 * 
 * @member {Struct.SteamUserEncryptedAppTicketResponse} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_get_encrypted_app_ticket
 * @description > **Steamworks Function**: [ISteamUser::GetEncryptedAppTicket](https://partner.steamgames.com/doc/api/ISteamUser#GetEncryptedAppTicket)
 *
 * This function retrieves an encrypted ticket.
 * 
 * This should be called after requesting an encrypted app ticket with ${function.steam_user_request_encrypted_app_ticket} and receiving the [EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t) call result. You should then pass this encrypted ticket to your secure servers to be decrypted using your secret key using [SteamEncryptedAppTicket::BDecryptTicket](https://partner.steamgames.com/doc/api/SteamEncryptedAppTicket#BDecryptTicket).
 * 
 * [[Note: If you call this without calling ${function.steam_user_request_encrypted_app_ticket}, the call may succeed but you will likely get a stale ticket.]]
 *
 * @param {Buffer} out_ticket The encrypted app ticket is copied into this buffer.
 * @param {Real} max_ticket_size The total size of the `out_ticket` buffer in bytes.
 * @returns {Struct.SteamUserEncryptedAppTicket}
 * @function_end
 */

/**
 * @function steam_user_get_game_badge_level
 * @description > **Steamworks Function**: [ISteamUser::GetGameBadgeLevel](https://partner.steamgames.com/doc/api/ISteamUser#GetGameBadgeLevel)
 *
 * This function gets the level of the user's Steam badge for your game.
 * 
 * The user can have two different badges for a series; the regular badge (max level 5) and the foil badge (max level 1).
 *
 * @param {Real} series If you only have one set of cards, the series will be 1.
 * @param {Bool} foil Whether to check if they have received the foil badge.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_auth_ticket_for_web_api
 * @description > **Steamworks Function**: [ISteamUser::GetAuthTicketForWebApi](https://partner.steamgames.com/doc/api/ISteamUser#GetAuthTicketForWebApi)
 *
 * This function retrieves an authentication ticket for use with the ISteamUserAuth Web API.
 *
 * @param {String} identity The identity of the remote service that will authenticate the ticket, as a string identifier. Pass an empty string if none was provided.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_duration_control
 * @description > **Steamworks Function**: [ISteamUser::GetDurationControl](https://partner.steamgames.com/doc/api/ISteamUser#GetDurationControl)
 *
 * This function retrieves anti indulgence / duration control for the current user / game combination.
 *
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::DurationControl_t](https://partner.steamgames.com/doc/api/ISteamUser#DurationControl_t)
 *
 * Called when the user's playtime/duration-control information has been received (used for the anti-addiction / playtime systems required in some regions).
 *
 * @member {Struct.SteamUserDurationControl} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_request_store_auth_url
 * @description > **Steamworks Function**: [ISteamUser::RequestStoreAuthURL](https://partner.steamgames.com/doc/api/ISteamUser#RequestStoreAuthURL)
 *
 * This function requests a URL that authenticates an in-game browser for store checkout, then redirects.
 * 
 * As long as the in-game browser accepts and handles session cookies, Steam microtransaction checkout pages will automatically recognize the user instead of presenting a login page.
 * 
 * [[Note: The URL has a very short lifetime to prevent history-snooping attacks, so you should only call this API when you are about to launch the browser, or else immediately navigate to the result URL using a hidden browser window.]]
 * 
 * [[Note: The resulting authorization cookie has an expiration time of one day, so it would be a good idea to request and visit a new auth URL every 12 hours.]]
 *
 * @param {String} redirect_url The URL to redirect the user to once the in-game browser has been authenticated for the store.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::StoreAuthURLResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#StoreAuthURLResponse_t)
 *
 * Called when a store authentication URL has been received.
 *
 * @member {Struct.SteamUserStoreAuthUrlResponse} The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_get_market_eligibility
 * @description > **Steamworks Function**: N / A
 *
 * This function 
 *
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::MarketEligibilityResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#MarketEligibilityResponse_t)
 *
 * Called when the user's Steam Community Market eligibility has been received.
 *
 * @member {Struct.SteamUserMarketEligibilityResponse} The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_track_app_usage_event
 * @description > **Steamworks Function**: [ISteamUser::TrackAppUsageEvent](https://partner.steamgames.com/doc/api/ISteamUser#TrackAppUsageEvent)
 *
 * This function was previously used by a few games to track usage events before Stats and Achievements (now deprecated).
 *
 * @param {Real} game_id The game ID that the usage event applies to.
 * @param {Real} app_usage_event The type of app usage event to track.
 * @param {String} extra_info Additional information describing the event.
 * @function_end
 */

/**
 * @function steam_user_user_has_license_for_app
 * @description > **Steamworks Function**: [ISteamUser::UserHasLicenseForApp](https://partner.steamgames.com/doc/api/ISteamUser#UserHasLicenseForApp)
 *
 * This function checks if the user owns a specific piece of Downloadable Content (DLC).
 * 
 * This can only be called after sending the user's auth ticket to [ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession).
 *
 * @param {Real} steam_id The Steam ID of the user to check.
 * @param {Real} app_id The DLC App ID to check if the user owns it.
 * @returns {Enum.SteamApiUserHasLicenseResult} 
 * @function_end
 */

/**
 * @function steam_user_set_callback_steam_servers_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a connection to the Steam servers is established.
 * 
 * See: [ISteamUser::SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t)
 *
 * @param {Function} callback The function to be called when a connection to the Steam servers is established.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_steam_servers_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_steam_servers_connected}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_steam_server_connect_failure
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a connection attempt has failed.
 * 
 * See: [ISteamUser::SteamServerConnectFailure_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServerConnectFailure_t)
 *
 * @param {Function} callback The function to be called when a connection attempt to the Steam servers fails.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_steam_server_connect_failure
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_steam_server_connect_failure}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_steam_servers_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called if the client has lost connection to the Steam servers.
 * 
 * See: [ISteamUser::SteamServersDisconnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersDisconnected_t)
 *
 * @param {Function} callback The function to be called when the connection to the Steam servers is lost.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_steam_servers_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_steam_servers_disconnected}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_client_game_server_deny
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a message is sent by the Steam server to the client telling it to disconnect from the specified game server, which it may be in the process of or already connected to. The game client should immediately disconnect upon receiving this message.
 * 
 * See: [ISteamUser::ClientGameServerDeny_t](https://partner.steamgames.com/doc/api/ISteamUser#ClientGameServerDeny_t)
 *
 * @param {Function} callback The function to be called when Steam requests that the client disconnect from a game server.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_client_game_server_deny
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_client_game_server_deny}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_licenses_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called whenever the user's licenses (owned packages) changes.
 * 
 * See: [ISteamUser::LicensesUpdated_t](https://partner.steamgames.com/doc/api/ISteamUser#LicensesUpdated_t)
 *
 * @param {Function} callback The function to be called when the user's licenses (owned packages) change.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_licenses_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_licenses_updated}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_microtxn_authorization_response
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a user has responded to a microtransaction authorization request.
 * 
 * See: [ISteamUser::MicroTxnAuthorizationResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#MicroTxnAuthorizationResponse_t)
 *
 * @param {Function} callback The function to be called when the user responds to a microtransaction authorization request.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_microtxn_authorization_response
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_microtxn_authorization_response}.
 *
 * @function_end
 */

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
 * This function is deprecated.
 *
 * @param {String} file_name The name of the file whose signature is to be checked.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUtils::CheckFileSignature_t](https://partner.steamgames.com/doc/api/ISteamUtils#CheckFileSignature_t)
 *
 * Called when the file signature check started by ${function.steam_utils_check_file_signature} has completed.
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
 * @param {Real} out_callback_size The size of the callback buffer that you are passing in.
 * @returns {Struct.SteamUtilsApiCallResult} 
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
 * @returns {Struct.SteamUtilsGamepadTextInput} 
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
 * @param {Real} image_handle The handle to the image that will be obtained.
 * @param {Buffer} dest The buffer that will be filled.
 * @param {Real} dest_buffer_size The total size of the `dest` buffer.
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
 * This function returns whether the current launcher is a Steam China launcher. You can cause the client to behave as the Steam China launcher by adding -dev -steamchina to the command line when running Steam.
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
 * @returns {Struct.SteamUtilsApiCallCompleted}
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
 * This function filters the provided input message and places the filtered result into pchOutFilteredText.
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

/**
 * @function steam_ugc_add_app_dependency
 * @description > **Steamworks Function**: [ISteamUGC::AddAppDependency](https://partner.steamgames.com/doc/api/ISteamUGC#AddAppDependency)
 *
 * This function adds a dependency between the given item and the app ID. This list of dependencies can be retrieved by calling ${function.steam_ugc_get_app_dependencies}. This is a soft-dependency that is displayed on the web.
 * It is up to the application to determine whether the item can actually be used or not.
 *
 * @param {Real} published_file_id The workshop item to add the dependency to.
 * @param {Real} app_id The required app or DLC to add as a dependency.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::AddAppDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#AddAppDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was added to.
 * @member {Real} app_id The app/dlc.
 * @event_end
 * 
 * @function_end 
 */

/**
 * @function steam_ugc_add_dependency
 * @description > **Steamworks Function**: [ISteamUGC::AddDependency](https://partner.steamgames.com/doc/api/ISteamUGC#AddDependency)
 *
 * This function adds a workshop item as a dependency to the specified item.
 *
 * @param {Real} parent_published_file_id The workshop item to add a dependency to.
 * @param {Real} child_published_file_id The dependency to add to the parent.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::AddUGCDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#AddUGCDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was added to.
 * @member {Real} child_published_file_id The child workshop item which was added as a dependency to the parent item.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_add_excluded_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddExcludedTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddExcludedTag)
 *
 * This function adds an excluded tag to a pending UGC Query. This will only return UGC without the specified tag.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {String} tag_name The tag that must NOT be attached to the UGC for it to be received.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_key_value_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddItemKeyValueTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemKeyValueTag)
 *
 * This function adds a key-value tag pair to an item. Keys can map to multiple different values (1-to-many relationship).
 * 
 * Key names are restricted to alpha-numeric characters and the '_' character.
 * 
 * Both keys and values cannot exceed 255 characters in length.
 * 
 * Key-value tags are searchable by exact match only.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} key The key to set on the item.
 * @param {String} value The value to map to the key.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_preview_file
 * @description > **Steamworks Function**: [ISteamUGC::AddItemPreviewFile](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemPreviewFile)
 *
 * This function adds an additional preview file for the item.
 * 
 * hen the format of the image should be one that both the web and the application (if necessary) can render and must be under 1MB. Suggested formats include JPG, PNG and GIF.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} preview_file_path The absolute path to the local image.
 * @param {Enum.SteamItemPreviewType} preview_type The type of this preview.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_preview_video
 * @description > **Steamworks Function**: [ISteamUGC::AddItemPreviewVideo](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemPreviewVideo)
 *
 * This function adds an additional video preview from YouTube for the item.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} video_id The YouTube video ID to add (e.g. "jHgZh4GV9G0").
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_to_favorites
 * @description > **Steamworks Function**: [ISteamUGC::AddItemToFavorites](https://partner.steamgames.com/doc/api/ISteamUGC#AddItemToFavorites)
 *
 * This function adds a workshop item to the user's favorites list.
 *
 * @param {Real} app_id The app ID that this item belongs to.
 * @param {Real} published_file_id The workshop item to add to the user's favorites list.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::UserFavoriteItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserFavoriteItemsListChanged_t)
 *
 * Called when an item is added to or removed from the user's list of favorite workshop items.
 *
 * @member {Struct.SteamUgcFavoriteItemsListChanged} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_add_required_key_value_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddRequiredKeyValueTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddRequiredKeyValueTag)
 *
 * This function adds a required key-value tag to a pending UGC Query. This will only return workshop items that have a key = `key` and a value = `value`.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {String} key The key-value key that must be attached to the UGC for it to be received.
 * @param {String} value The key-value value associated with the key that must be attached to the UGC for it to be received.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_required_tag
 * @description > **Steamworks Function**: [ISteamUGC::AddRequiredTag](https://partner.steamgames.com/doc/api/ISteamUGC#AddRequiredTag)
 *
 * This function adds a required tag to a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {String} tag_name The tag that must be attached to the UGC for it to be received.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_required_tag_group
 * @description > **Steamworks Function**: [ISteamUGC::AddRequiredTagGroup](https://partner.steamgames.com/doc/api/ISteamUGC#AddRequiredTagGroup)
 *
 * This function adds the requirement that the returned items from the pending UGC Query have at least one of the tags in the given set (logical "or"). For each tag group that is added, at least one tag from each group is required to be on the matching items.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customize.
 * @param {Array[String]} tags_csv A set of tags where at least one of the tags must be attached to the UGC.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_init_workshop_for_game_server
 * @description > **Steamworks Function**: [ISteamUGC::BInitWorkshopForGameServer](https://partner.steamgames.com/doc/api/ISteamUGC#BInitWorkshopForGameServer)
 *
 * This function lets game servers set a specific workshop folder before issuing any UGC commands.
 * 
 * This is helpful if you want to support multiple game servers running out of the same install folder.
 *
 * @param {Real} workshop_depot_id The depot ID of the game server.
 * @param {String} folder The absolute path to store the workshop content.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_item
 * @description > **Steamworks Function**: [ISteamUGC::CreateItem](https://partner.steamgames.com/doc/api/ISteamUGC#CreateItem)
 *
 * This function creates a new workshop item with no content attached yet.
 *
 * @param {Real} consumer_app_id The app ID that will be using this item.
 * @param {Enum.SteamWorkshopFileType} workshop_file_type The type of UGC to create.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::CreateItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#CreateItemResult_t)
 *
 * Called when a new workshop item has been created.
 *
 * @member {Struct.SteamUgcCreateItemResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_create_query_all_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::CreateQueryAllUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#CreateQueryAllUGCRequest)
 *
 * This function queries for all matching UGC. You can use this to list all of the available UGC for your app.
 * 
 * This will return up to 50 results as declared by `SteamUgcNumResultsPerPage`. You can make subsequent calls to this function, increasing the `page` each time to get the next set of results.
 * 
 * [[Note: Either `consumer_app_id` or `creator_app_id` must have a valid app ID!]]
 * 
 * [[Note: You must release the handle returned by this function by calling ${function.steam_ugc_release_query_ugc_request} when you are done with it!]]
 * 
 * To query for the UGC associated with a single user you can use ${function.steam_ugc_create_query_user_ugc_request}.
 *
 * @param {Enum.SteamUgcQuery} query_type Used to specify the sorting and filtering for this call.
 * @param {Enum.SteamUgcMatchingUgcType} matching_ugc_type Used to specify the type of UGC queried for.
 * @param {Real} creator_app_id The app ID where the item was created. This may be different than `consumer_app_id` if your item creation tool is a separate App ID.
 * @param {Real} consumer_app_id The app ID of the current game. Do not pass the creation tool's app ID if it is a separate app.
 * @param {Real} page The page number of the results to receive. This should start at 1 on the first call.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_query_ugc_details_request
 * @description > **Steamworks Function**: [ISteamUGC::CreateQueryUGCDetailsRequest](https://partner.steamgames.com/doc/api/ISteamUGC#CreateQueryUGCDetailsRequest)
 *
 * This function queries for the details of specific UGC items. There is currently a 1,000 limit for the number of items you can request, but this may be lifted in the future.
 * 
 * [[Note: Either `consumer_app_id` or `creator_app_id` must have a valid app ID!]]
 * 
 * [[Note: You must release the handle returned by this function by calling ${function.steam_ugc_release_query_ugc_request} when you are done with it!]]
 * 
 * To query all the UGC for your app you can use ${function.steam_ugc_create_query_all_ugc_request} instead.
 *
 * @param {Array[Real]} published_file_ids The list of workshop items to get the details for.
 * @param {Real} num_published_file_ids The number of items in the published file ids array.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_query_user_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::CreateQueryUserUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#CreateQueryUserUGCRequest)
 *
 * This function queries UGC associated with a user. You can use this to list the UGC the user is subscribed to amongst other things.
 * 
 * This will return up to 50 results as declared by `SteamUgcNumResultsPerPage`. You can make subsequent calls to this function, increasing the `page` each time to get the next set of results.
 * 
 * [[Note: Either `consumer_app_id` or `creator_app_id` must have a valid app ID!]]
 * 
 * [[Note: You must release the handle returned by this function by calling ${function.steam_ugc_release_query_ugc_request} when you are done with it!]]
 * 
 * To query all the UGC for your app you can use ${function.steam_ugc_create_query_all_ugc_request} instead.
 *
 * @param {Real} account_id The account ID to query UGC for.
 * @param {Enum.SteamUserUgcList} list_type Used to specify the type of list to get.
 * @param {Enum.SteamUgcMatchingUgcType} matching_ugc_type Used to specify the type of UGC queried for.
 * @param {Enum.SteamUserUgcListSortOrder} sort_order Used to specify the order that the list will be sorted in.
 * @param {Real} creator_app_id The app ID where the item was created. This may differ if your creation tool is a separate app from the game.
 * @param {Real} consumer_app_id The app ID of the current game. Do not pass the creation tool's app ID if it is a separate app.
 * @param {Real} page The page number of the results to receive. This should start at 1 on the first call.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_delete_item
 * @description > **Steamworks Function**: [ISteamUGC::DeleteItem](https://partner.steamgames.com/doc/api/ISteamUGC#DeleteItem)
 *
 * This function deletes the item without prompting the user.
 *
 * @param {Real} published_file_id The workshop item to delete.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::DeleteItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DeleteItemResult_t)
 *
 * Called when a workshop item has been deleted.
 *
 * @member {Struct.SteamUgcDeleteItemResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_download_item
 * @description > **Steamworks Function**: [ISteamUGC::DownloadItem](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItem)
 *
 * This function downloads or updates a workshop item.
 * 
 * If the return value is `true` then register and wait for the Callback [DownloadItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItemResult_t) before calling ${function.steam_ugc_get_item_install_info} or accessing the workshop item on disk.
 * 
 * If the workshop item has an item state of k_EItemStateNeedsUpdate, then this function can be called to initiate the update. Do not access the workshop item on disk until the callback `DownloadItemResult_t` is called.
 * 
 * The `DownloadItemResult_t` callback contains the app ID associated with the workshop item. It should be compared against the running app ID as the handler will be called for all item downloads regardless of the running application.
 *
 * @param {Real} published_file_id The workshop item to download.
 * @param {Bool} high_priority Whether to start the download in high priority, pausing any existing in-progress Steam downloads to immediately begin this workshop item.
 * @returns {Bool}
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::DownloadItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItemResult_t)
 * 
 * Triggered when a workshop item has been downloaded.
 * 
 * [[Note: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.]]
 * 
 * @member {Struct.SteamUgcDownloadItemResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_get_app_dependencies
 * @description > **Steamworks Function**: [ISteamUGC::GetAppDependencies](https://partner.steamgames.com/doc/api/ISteamUGC#GetAppDependencies)
 *
 * This function gets the app dependencies associated with the given published file ID. These are "soft" dependencies that are shown on the web. It is up to the application to determine whether an item can be used or not.
 *
 * @param {Real} published_file_id The workshop item to get app dependencies for.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamUGC::GetAppDependenciesResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#GetAppDependenciesResult_t)
 * 
 * Called when getting the app dependencies for an item.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item to get app dependencies for.
 * @member {Array[Real]} app_ids Array of app dependencies.
 * @member {Real} total_num_app_dependencies Total app dependencies found.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_get_item_download_info
 * @description > **Steamworks Function**: [ISteamUGC::GetItemDownloadInfo](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemDownloadInfo)
 *
 * This function gets info about a pending download of a workshop item that has `SteamUgcItemState.NeedsUpdate` set.
 *
 * @param {Real} published_file_id The workshop item to get the download info for.
 * @returns {Struct.SteamUgcItemDownloadInfo} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_install_info
 * @description > **Steamworks Function**: [ISteamUGC::GetItemInstallInfo](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemInstallInfo)
 *
 * This function gets info about currently installed content on the disc for workshop items that have `SteamUgcItemState.Installed` set.
 * 
 * Calling this sets the "used" flag on the workshop item for the current player and adds it to their `SteamUserUgcList.UsedOrPlayed` list.
 *
 * @param {Real} published_file_id The workshop item to get the install info for.
 * @returns {Struct.SteamUgcItemInstallInfo} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_state
 * @description > **Steamworks Function**: [ISteamUGC::GetItemState](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemState)
 *
 * This function gets the current state of a workshop item on this client.
 *
 * @param {Real} published_file_id The workshop item to get the state for.
 * @returns {Real} The item state. Should be used with the ${enum.SteamUgcItemState} flags to determine the state of the workshop item.
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_update_progress
 * @description > **Steamworks Function**: [ISteamUGC::GetItemUpdateProgress](https://partner.steamgames.com/doc/api/ISteamUGC#GetItemUpdateProgress)
 *
 * This function gets the progress of an item update.
 *
 * @param {Real} update_handle The update handle to get the progress for.
 * @returns {Struct.SteamUgcItemUpdateProgress} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_num_subscribed_items
 * @description > **Steamworks Function**: [ISteamUGC::GetNumSubscribedItems](https://partner.steamgames.com/doc/api/ISteamUGC#GetNumSubscribedItems)
 *
 * This function gets the total number of items the current user is subscribed to for the game or application. By default, this function will exclude locally disabled items.
 *
 * @param {Bool} include_locally_disabled Whether to include locally disabled items in the return value or not. Defaults to `false`.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_subscribed_items
 * @description > **Steamworks Function**: [ISteamUGC::GetSubscribedItems](https://partner.steamgames.com/doc/api/ISteamUGC#GetSubscribedItems)
 *
 * This function gets a list of all of the items the current user is subscribed to for the current game, excluding any that have been locally disabled by the user.
 * 
 * By default, the items are returned in the order that the user subscribed to them. Users can change the ordering in the Steam Client, or you can do so via the ${function.steam_ugc_set_subscriptions_load_order} call.
 *
 * @param {Real} max_entries The maximum number of items to return. This typically matches the value returned by ${function.steam_ugc_get_num_subscribed_items}.
 * @param {Bool} include_locally_disabled Whether to include locally disabled items in the return value or not. Defaults to false.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_result
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCResult](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCResult)
 *
 * This function retrieves the details of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Struct.SteamUgcQueryResult} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_preview_url
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCPreviewURL](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCPreviewURL)
 *
 * This function retrieves the URL to the preview image of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Struct.SteamUgcQueryPreviewUrl} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_metadata
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCMetadata](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCMetadata)
 *
 * This function retrieves the developer set metadata of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Struct.SteamUgcQueryMetadata} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_children
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCChildren](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCChildren)
 *
 * This function retrieves the ids of any child items of an individual workshop item after receiving a querying UGC call result. These items can either be a part of a collection or some other dependency (see ${function.steam_ugc_add_dependency}).
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} max_entries The maximum number of child item ids to return.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_statistic
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCStatistic](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCStatistic)
 *
 * This function retrieves various statistics of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Enum.SteamUgcStatisticType} stat_type The statistic to retrieve.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_num_additional_previews
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCNumAdditionalPreviews](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCNumAdditionalPreviews)
 *
 * This function retrieves the number of additional previews of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 * 
 * You can then call ${function.steam_ugc_get_query_ugc_additional_preview} to get the details of each additional preview.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_additional_preview
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCAdditionalPreview](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCAdditionalPreview)
 *
 * This function retrieves the details of an additional preview associated with an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 * 
 * Before calling this you should call ${function.steam_ugc_get_query_ugc_num_additional_previews} to get number of additional previews.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} preview_index The index of the additional preview to get the details of.
 * @param {String} original_file_name Whether to also return the original file name of the preview.
 * @returns {Struct.SteamUgcAdditionalPreview} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_num_key_value_tags
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCNumKeyValueTags](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCNumKeyValueTags)
 *
 * This function retrieves the number of key-value tags of an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_key_value_tag
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCKeyValueTag](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCKeyValueTag)
 *
 * This function retrieves the details of a key-value tag associated with an individual workshop item after receiving a querying UGC call result.
 * 
 * You should call this in a loop to get the details of all the workshop items returned.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 * 
 * Before calling this you should call ${function.steam_ugc_get_query_ugc_num_key_value_tags} to get number of tags.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} key_value_tag_index The index of the tag to get the details of.
 * @returns {Struct.SteamUgcKeyValueTag} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_content_descriptors
 * @description > **Steamworks Function**: [ISteamUGC::GetQueryUGCContentDescriptors](https://partner.steamgames.com/doc/api/ISteamUGC#GetQueryUGCContentDescriptors)
 *
 * This function retrieves an array of ${Enum.SteamUgcContentDescriptorId} set on the item.
 *
 * @param {Real} query_handle The UGC query handle to get the results from.
 * @param {Real} index The index of the item to get the details of.
 * @param {Real} max_descriptors The maximum number of content descriptors to return.
 * @returns {Array[Enum.SteamUgcContentDescriptorId]} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_app_dependency
 * @description > **Steamworks Function**: [ISteamUGC::RemoveAppDependency](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveAppDependency)
 *
 * This function removes the dependency between the given item and the app ID. This list of dependencies can be retrieved by calling ${function.steam_ugc_get_app_dependencies}.
 *
 * @param {Real} published_file_id The workshop item to remove the dependency from.
 * @param {Real} app_id The app or DLC to remove as a dependency.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::RemoveAppDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveAppDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was removed from.
 * @member {Real} app_id The app/dlc.
 * @event_end
 * @function_end 
 */

/**
 * @function steam_ugc_remove_dependency
 * @description > **Steamworks Function**: [ISteamUGC::RemoveDependency](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveDependency)
 *
 * This function removes a workshop item as a dependency from the specified item.
 *
 * @param {Real} parent_published_file_id The workshop item to remove a dependency from.
 * @param {Real} child_published_file_id The dependency to remove from the parent.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::RemoveUGCDependencyResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveUGCDependencyResult_t)
 * 
 * Triggered upon completion.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The parent workshop item that the dependency was removed from.
 * @member {Real} child_published_file_id The child workshop item which was removed as a dependency from the parent item.
 * @event_end
 * @function_end 
 */

/**
 * @function steam_ugc_remove_item_from_favorites
 * @description > **Steamworks Function**: [ISteamUGC::RemoveItemFromFavorites](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveItemFromFavorites)
 *
 * This function removes a workshop item from the user's favorites list.
 *
 * @param {Real} app_id The app ID that this item belongs to.
 * @param {Real} published_file_id The workshop item to remove from the user's favorites list.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::UserFavoriteItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserFavoriteItemsListChanged_t)
 *
 * Called when an item is added to or removed from the user's list of favorite workshop items.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item whose favorite status changed.
 * @member {Bool} was_add_request Whether the item was added to (`true`) or removed from (`false`) the favorites list.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_remove_item_key_value_tags
 * @description > **Steamworks Function**: [ISteamUGC::RemoveItemKeyValueTags](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveItemKeyValueTags)
 *
 * This function removes an existing key-value tag from an item.
 * 
 * You can only call this up to 100 times per item update. If you need to remove more tags than that you'll need to make subsequent item updates.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The workshop item update handle to customise.
 * @param {String} key The key to remove from the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_item_preview
 * @description > **Steamworks Function**: [ISteamUGC::RemoveItemPreview](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveItemPreview)
 *
 * This function removes an existing preview from an item.
 *
 * @param {Real} update_handle The workshop item update handle to customise.
 * @param {Real} index The index of the preview to remove from the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_content_descriptor
 * @description > **Steamworks Function**: [ISteamUGC::AddContentDescriptor](https://partner.steamgames.com/doc/api/ISteamUGC#AddContentDescriptor)
 *
 * This function sets the given ${Enum.SteamUgcContentDescriptorId} on the item.
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id The content descriptor to set on the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_content_descriptor
 * @description > **Steamworks Function**: [ISteamUGC::RemoveContentDescriptor](https://partner.steamgames.com/doc/api/ISteamUGC#RemoveContentDescriptor)
 *
 * This function removes the given ${Enum.SteamUgcContentDescriptorId} from the item.
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id The content descriptor to remove from the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_required_game_versions
 * @description > **Steamworks Function**: [ISteamUGC::SetRequiredGameVersions](https://partner.steamgames.com/doc/api/ISteamUGC#SetRequiredGameVersions)
 *
 * This function sets what Steam (beta) branches this item is valid for. An empty string for either `game_branch_min` or `game_branch_max` means that it will match any version on that end of the range. This will only be applied if the actual content has been changed. Users will download the version of the item that is valid for the Steam (beta) branch they have opted into.
 *
 * @param {Real} update_handle The workshop item update handle to customize.
 * @param {String} game_branch_min The name of the minimum Steam branch this item is valid for.
 * @param {String} game_branch_max The name of the maximum Steam branch this item is valid for.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_request_ugc_details
 * @description > **Steamworks Function**: [ISteamUGC::RequestUGCDetails](https://partner.steamgames.com/doc/api/ISteamUGC#RequestUGCDetails)
 *
 * This function is deprecated; use ${function.steam_ugc_create_query_ugc_details_request} instead.
 *
 * @param {Real} published_file_id The workshop item to get the details for.
 * @param {Real} max_age_seconds The maximum age (in seconds) that cached data is considered valid for.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::SteamUGCRequestUGCDetailsResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCRequestUGCDetailsResult_t)
 *
 * Called when the details of a workshop item have been received.
 *
 * [[Note: This callback is deprecated by Steam and is provided for backwards compatibility.]]
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item the details are for.
 * @member {Bool} cached_data Whether the returned data was retrieved from the local cache.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_send_query_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::SendQueryUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#SendQueryUGCRequest)
 *
 * This function sends a UGC query to Steam.
 * 
 * This must be called with a handle obtained from ${function.steam_ugc_create_query_user_ugc_request}, ${function.steam_ugc_create_query_all_ugc_request}, or ${function.steam_ugc_create_query_ugc_details_request} to actually send the request to Steam. Before calling this you should use one more of the following functions to customise your query:
 * 
 * ${function.steam_ugc_add_required_tag}, ${function.steam_ugc_add_excluded_tag}, ${function.steam_ugc_set_return_only_ids}, ${function.steam_ugc_set_return_key_value_tags}, ${function.steam_ugc_set_return_long_description}, ${function.steam_ugc_set_return_metadata}, ${function.steam_ugc_set_return_children}, ${function.steam_ugc_set_return_additional_previews}, ${function.steam_ugc_set_return_total_only}, ${function.steam_ugc_set_language}, ${function.steam_ugc_set_allow_cached_response}, ${function.steam_ugc_set_cloud_file_name_filter}, ${function.steam_ugc_set_match_any_tag}, ${function.steam_ugc_set_search_text}, ${function.steam_ugc_set_ranked_by_trend_days}, ${function.steam_ugc_add_required_key_value_tag}
 *
 * @param {Real} query_handle The UGC query request handle to send.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t)
 *
 * Called when a UGC query request has completed.
 *
 * @member {Real} query_handle The handle of the query that completed.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} num_results_returned The number of results returned in this query.
 * @member {Real} total_matching_results The total number of items that matched the query in the database.
 * @member {Bool} cached_data Whether the returned data was retrieved from the local cache rather than from the server.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_release_query_ugc_request
 * @description > **Steamworks Function**: [ISteamUGC::ReleaseQueryUGCRequest](https://partner.steamgames.com/doc/api/ISteamUGC#ReleaseQueryUGCRequest)
 *
 * This function releases a UGC query handle when you are done with it to free up memory.
 *
 * @param {Real} query_handle The UGC query handle to release.
 * @function_end
 */

/**
 * @function steam_ugc_set_callback_item_installed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a workshop item has been installed or updated.
 * 
 * [[Note: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.]]
 * 
 * See: [ISteamUGC::ItemInstalled_t](https://partner.steamgames.com/doc/api/ISteamUGC#ItemInstalled_t)
 *
 * @param {Function} callback The function to be called when a workshop item is installed.
 * @function_end 
 */

/**
 * @function steam_ugc_clear_callback_item_installed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_ugc_set_callback_item_installed}.
 *
 * @function_end 
 */

/**
 * @function steam_ugc_set_allow_cached_response
 * @description > **Steamworks Function**: [ISteamUGC::SetAllowCachedResponse](https://partner.steamgames.com/doc/api/ISteamUGC#SetAllowCachedResponse)
 *
 * This function sets whether results will be returned from the cache for the specific period of time on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Real} max_age_seconds The maximum amount of time that an item can be returned without a cache invalidation.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_cloud_file_name_filter
 * @description > **Steamworks Function**: [ISteamUGC::SetCloudFileNameFilter](https://partner.steamgames.com/doc/api/ISteamUGC#SetCloudFileNameFilter)
 *
 * This function sets to only return items that have a specific filename on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_user_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {String} match_cloud_file_name The filename that returned items must have in order to match the query.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_content
 * @description > **Steamworks Function**: [ISteamUGC::SetItemContent](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemContent)
 *
 * This function sets the folder that will be stored as the content for an item.
 * 
 * For efficient upload and download, files should not be merged or compressed into single files (e.g. zip files).
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} content_folder The absolute path to a local folder containing the content for the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_description
 * @description > **Steamworks Function**: [ISteamUGC::SetItemDescription](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemDescription)
 *
 * This function sets a new description for an item.
 * 
 * The description must be limited to the length defined by `SteamRemoteStoragePublishedDocumentDescriptionMax`.
 * 
 * You can set what language this is for by using ${function.steam_ugc_set_item_update_language}, if no language is set then "english" is assumed.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} description The new description of the item, with a maximum length of 8000 bytes.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_metadata
 * @description > **Steamworks Function**: [ISteamUGC::SetItemMetadata](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemMetadata)
 *
 * This function sets arbitrary metadata for an item. This metadata can be returned from queries without having to download and install the actual content.
 * 
 * The metadata must be limited to the size defined by `SteamUgcDeveloperMetadataMax`.
 * 
 * [[Note:  This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} metadata The metadata to set for the item, with a maximum length of 5000 bytes.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_preview
 * @description > **Steamworks Function**: [ISteamUGC::SetItemPreview](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemPreview)
 *
 * This function sets the primary preview image for the item.
 * 
 * The format should be one that both the web and the application (if necessary) can render. Suggested formats include JPG, PNG and GIF.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} preview_file The absolute path to a local preview file (image) to use as the primary preview for the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_tags
 * @description > **Steamworks Function**: [ISteamUGC::SetItemTags](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemTags)
 *
 * This function sets arbitrary developer specified tags on an item.
 * 
 * Each tag must be limited to 255 characters. Tag names can only include printable characters, excluding ','. For reference on what characters are allowed, refer to http://en.cppreference.com/w/c/string/byte/isprint.
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Array[String]} tags_csv An array of strings holding the tags to set on the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_title
 * @description > **Steamworks Function**: [ISteamUGC::SetItemTitle](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemTitle)
 *
 * This function sets a new title for an item.
 * 
 * The title must be limited to the size defined by `SteamRemoteStoragePublishedDocumentTitleMax`.
 * 
 * You can set what language this is for by using ${function.steam_ugc_set_item_update_language}, if no language is set then "english" is assumed.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} title The new title of the item, with a maximum length of 128 bytes.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_update_language
 * @description > **Steamworks Function**: [ISteamUGC::SetItemUpdateLanguage](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemUpdateLanguage)
 *
 * This function sets the language of the title and description that will be set in this item update.
 * 
 * This must be in the format of the [API language code](https://partner.steamgames.com/doc/store/localization#supported_languages).
 * 
 * If this is not set then "english" is assumed.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} language The language to set, as a Steam supported [API language code](https://partner.steamgames.com/doc/store/localization/languages).
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_items_disabled_locally
 * @description > **Steamworks Function**: [ISteamUGC::SetItemsDisabledLocally](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemsDisabledLocally)
 *
 * This function sets whether the items should be disabled locally or not. This means that it will not be returned in ${function.steam_ugc_get_num_subscribed_items} and ${function.steam_ugc_get_subscribed_items} by default.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the published items to set the disabled state for.
 * @param {Real} num_published_file_ids The number of items in the `published_file_ids` array.
 * @param {Bool} disabled_locally Whether the items should be disabled locally (`true`) or enabled (`false`).
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_visibility
 * @description > **Steamworks Function**: [ISteamUGC::SetItemVisibility](https://partner.steamgames.com/doc/api/ISteamUGC#SetItemVisibility)
 *
 * This function sets the visibility of an item.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility The desired visibility to set for the item.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_language
 * @description > **Steamworks Function**: [ISteamUGC::SetLanguage](https://partner.steamgames.com/doc/api/ISteamUGC#SetLanguage)
 *
 * This function sets the language to return the title and description in for the items on a pending UGC Query.
 * 
 * This must be in the format of the [API Language code](https://partner.steamgames.com/doc/store/localization#supported_languages).
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {String} language The language to return the title and description in, as a Steam supported [API language code](https://partner.steamgames.com/doc/store/localization/languages).
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_match_any_tag
 * @description > **Steamworks Function**: [ISteamUGC::SetMatchAnyTag](https://partner.steamgames.com/doc/api/ISteamUGC#SetMatchAnyTag)
 *
 * This function sets whether workshop items will be returned if they have one or more matching tags, or if all tags need to match on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_all_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} match_any_tag If `true`, items must have at least one of the required tags to match; if `false`, items must have all of the required tags.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_ranked_by_trend_days
 * @description > **Steamworks Function**: [ISteamUGC::SetRankedByTrendDays](https://partner.steamgames.com/doc/api/ISteamUGC#SetRankedByTrendDays)
 *
 * This function sets whether the order of the results will be updated based on the rank of items over a number of days on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_all_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_all}.
 * @param {Real} days The number of days to rank items over, used with the `ugc_query_RankedByTrend` query type.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_additional_previews
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnAdditionalPreviews](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnAdditionalPreviews)
 *
 * This function sets whether to return any additional images/videos attached to the items on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} return_additional_previews Whether to return any additional previews (images and videos) for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_children
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnChildren](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnChildren)
 *
 * This function sets whether to return the IDs of the child items of the item on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} return_children Whether to return the IDs of the child items of each item in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_key_value_tags
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnKeyValueTags](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnKeyValueTags)
 *
 * This function sets whether to return any key-value tags for the items on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} return_key_value_tags Whether to return any key-value tags for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_long_description
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnLongDescription](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnLongDescription)
 *
 * This function sets whether to return the full description for the items on a pending UGC Query.
 * 
 * If you don't set this then you only receive the summary which is the description truncated at 255 bytes.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} return_long_description Whether to return the full description for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_metadata
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnMetadata](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnMetadata)
 *
 * This function sets whether to return the developer-specified metadata for the items on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} return_metadata Whether to return the developer-specified metadata for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_only_ids
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnOnlyIDs](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnOnlyIDs)
 *
 * This function sets whether to only return IDs instead of all the details on a pending UGC Query.
 * 
 * This is useful for when you don't need all the information (e.g. you just want to get the IDs of the items a user has in their favorites list.)
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} return_only_ids Whether to only return the IDs of the items, omitting all other details, in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_playtime_stats
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnPlaytimeStats](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnPlaytimeStats)
 *
 * This function sets whether to return the playtime stats on a pending UGC Query.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 *
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Real} days The number of days worth of playtime stats to return for the items in the query results.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_total_only
 * @description > **Steamworks Function**: [ISteamUGC::SetReturnTotalOnly](https://partner.steamgames.com/doc/api/ISteamUGC#SetReturnTotalOnly)
 *
 * This function sets whether to only return the total number of matching items on a pending UGC Query.
 * 
 * The actual items will not be returned when [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) is called.
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 * 
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Bool} return_total_only Whether to only return the total number of matching items, without returning any item details.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_search_text
 * @description > **Steamworks Function**: [ISteamUGC::SetSearchText](https://partner.steamgames.com/doc/api/ISteamUGC#SetSearchText)
 *
 * This function sets a string that items need to match in either the title or the description on a pending UGC Query.
 * 
 * [[Note: This can only be used with ${function.steam_ugc_create_query_all_ugc_request}!]]
 * 
 * [[Note: This must be set before you send a UGC Query handle using ${function.steam_ugc_send_query_ugc_request}.]]
 * 
 * @param {Real} query_handle The UGC query handle to customise, as returned by ${function.steam_ugc_create_query_all}.
 * @param {String} search_text The text that items must match in either their title or description to be returned.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_subscriptions_load_order
 * @description > **Steamworks Function**: [ISteamUGC::SetSubscriptionsLoadOrder](https://partner.steamgames.com/doc/api/ISteamUGC#SetSubscriptionsLoadOrder)
 *
 * This function sets the local load order for these items. If there are any items not in the given list, they will sort by the time subscribed.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the subscribed items, in the desired load order.
 * @param {Real} num_published_file_ids The number of items in the `published_file_ids` array.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_user_item_vote
 * @description > **Steamworks Function**: [ISteamUGC::SetUserItemVote](https://partner.steamgames.com/doc/api/ISteamUGC#SetUserItemVote)
 *
 * This function allows the user to rate a workshop item up or down.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to vote on.
 * @param {Bool} vote_up Whether to vote the item up (`true`) or down (`false`).
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::SetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SetUserItemVoteResult_t)
 *
 * Called when the user has voted on a workshop item.
 *
 * @member {Struct.SteamUgcSetUserItemVoteResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_get_user_item_vote
 * @description > **Steamworks Function**: [ISteamUGC::GetUserItemVote](https://partner.steamgames.com/doc/api/ISteamUGC#GetUserItemVote)
 *
 * This function gets the user's vote status on a workshop item.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to get the user's vote status for.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::GetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#GetUserItemVoteResult_t)
 *
 * Called when the user's current vote on a workshop item has been retrieved.
 *
 * @member {Struct.SteamUgcGetUserItemVoteResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_start_item_update
 * @description > **Steamworks Function**: [ISteamUGC::StartItemUpdate](https://partner.steamgames.com/doc/api/ISteamUGC#StartItemUpdate)
 *
 * This function starts the item update process.
 * 
 * This gets you a handle that you can use to modify the item before finally sending off the update to the server with ${function.steam_ugc_submit_item_update}.
 *
 * @param {Real} consumer_app_id The App ID that will consume this item.
 * @param {Real} published_file_id The unique ID of the workshop item to update.
 * @returns {Real} A handle that you can use with future calls to modify the item before finally sending the update.
 * @function_end
 */

/**
 * @function steam_ugc_start_playtime_tracking
 * @description > **Steamworks Function**: [ISteamUGC::StartPlaytimeTracking](https://partner.steamgames.com/doc/api/ISteamUGC#StartPlaytimeTracking)
 *
 * This function starts tracking playtime on a set of workshop items.
 * 
 * When your app shuts down, playtime tracking will automatically stop.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the workshop items to start tracking playtime for.
 * @param {Real} num_published_file_ids The number of items in the `published_file_ids` array.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamUGC::StartPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StartPlaytimeTrackingResult_t)
 * 
 * Called when workshop item playtime tracking has started.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_stop_playtime_tracking
 * @description > **Steamworks Function**: [ISteamUGC::StopPlaytimeTracking](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTracking)
 *
 * This function stops tracking playtime on a set of workshop items. This will increment the number of "playtime" sessions for those items by one.
 * 
 * When your app shuts down, playtime tracking will automatically stop.
 *
 * @param {Array[Real]} published_file_ids An array of the unique IDs of the workshop items to stop tracking playtime for.
 * @param {Real} num_published_file_ids The number of items in the `published_file_ids` array.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamUGC::StopPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTrackingResult_t)
 * 
 * Called when workshop item playtime tracking has stopped.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_ugc_stop_playtime_tracking_for_all_items
 * @description > **Steamworks Function**: [ISteamUGC::StopPlaytimeTrackingForAllItems](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTrackingForAllItems)
 *
 * This function stops tracking playtime of all workshop items.
 * 
 * When your app shuts down, playtime tracking will automatically stop. This will increment the number of "playtime" sessions for those all items that were being tracked by one.
 *
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamUGC::StopPlaytimeTrackingResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#StopPlaytimeTrackingResult_t)
 * 
 * Called when workshop item playtime tracking has stopped.
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_submit_item_update
 * @description > **Steamworks Function**: [ISteamUGC::SubmitItemUpdate](https://partner.steamgames.com/doc/api/ISteamUGC#SubmitItemUpdate)
 *
 * This function uploads the changes made to an item to the Steam Workshop.
 * 
 * You can track the progress of an item update with ${function.steam_ugc_get_item_update_progress}.
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {String} change_note A change note detailing what was altered in this item update; can be an empty string.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUGC::SubmitItemUpdateResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SubmitItemUpdateResult_t)
 *
 * Called when a workshop item update has been submitted and uploaded.
 *
 * @member {Struct.SteamUgcSubmitItemUpdateResult} result The result of this operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_subscribe_item
 * @description > **Steamworks Function**: [ISteamUGC::SubscribeItem](https://partner.steamgames.com/doc/api/ISteamUGC#SubscribeItem)
 *
 * This function subscribes to a workshop item. It will be downloaded and installed as soon as possible.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to subscribe to.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageSubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageSubscribePublishedFileResult_t)
 *
 * Called when the user has subscribed to a piece of UGC.
 *
 * @member {Enum.SteamUgcSubscribeItemResult} result The result of this operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_suspend_downloads
 * @description > **Steamworks Function**: [ISteamUGC::SuspendDownloads](https://partner.steamgames.com/doc/api/ISteamUGC#SuspendDownloads)
 *
 * This function suspends and resumes all workshop downloads.
 * 
 * If you call this with `suspend` set to `true` then downloads will be suspended until you resume them by setting `suspend` to `false` or when the game ends.
 *
 * @param {Bool} suspend Whether to suspend (`true`) or resume (`false`) all workshop downloads.
 * @function_end
 */

/**
 * @function steam_ugc_unsubscribe_item
 * @description > **Steamworks Function**: [ISteamUGC::UnsubscribeItem](https://partner.steamgames.com/doc/api/ISteamUGC#UnsubscribeItem)
 *
 * This function unsubscribes from a workshop item. This will result in the item being removed after the game quits.
 *
 * @param {Real} published_file_id The unique ID of the workshop item to unsubscribe from.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageUnsubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageUnsubscribePublishedFileResult_t)
 *
 * Called when the user has unsubscribed from a piece of UGC.
 *
 * @member {Struct.SteamUgcUnsubscribeItemResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_ugc_set_callback_user_subscribed_items_list_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the user has added or removed an item to/from their subscriptions for the returned app ID.
 * 
 * See: [ISteamUGC::UserSubscribedItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserSubscribedItemsListChanged_t)
 * 
 * See: ${struct.SteamUgcUserSubscribedItemsListChanged}
 *
 * @param {Function} callback The function to be called when the user's list of subscribed items changes.
 * @function_end
 */

/**
 * @function steam_ugc_clear_callback_user_subscribed_items_list_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_ugc_set_callback_user_subscribed_items_list_changed}.
 *
 * @function_end
 */

/**
 * @function steam_ugc_update_item_preview_file
 * @description > **Steamworks Function**: [ISteamUGC::UpdateItemPreviewFile](https://partner.steamgames.com/doc/api/ISteamUGC#UpdateItemPreviewFile)
 *
 * This function updates an existing additional preview file for the item.
 * 
 * If the preview type is an image then the format should be one that both the web and the application (if necessary) can render, and must be under 1MB. Suggested formats include JPG, PNG and GIF.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Real} index The (zero-based) index of the preview file to update.
 * @param {String} preview_file The absolute path to the local image file that will replace the existing preview.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_ugc_update_item_preview_video
 * @description > **Steamworks Function**: [ISteamUGC::UpdateItemPreviewVideo](https://partner.steamgames.com/doc/api/ISteamUGC#UpdateItemPreviewVideo)
 *
 * This function updates an additional video preview from YouTube for the item.
 * 
 * [[Note: This must be set before you submit the UGC update handle using ${function.steam_ugc_submit_item_update}.]]
 *
 * @param {Real} update_handle The item update handle, as returned by ${function.steam_ugc_start_item_update}.
 * @param {Real} index The (zero-based) index of the preview video to update.
 * @param {String} video_id The ID of the YouTube video that will replace the existing preview video.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_ugc_show_workshop_eula
 * @description > **Steamworks Function**: [ISteamUGC::ShowWorkshopEULA](https://partner.steamgames.com/doc/api/ISteamUGC#ShowWorkshopEULA)
 *
 * This function shows the app's latest Workshop EULA to the user in an overlay window, where they can accept it or not.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_ugc_get_workshop_eula_status
 * @description > **Steamworks Function**: [ISteamUGC::GetWorkshopEULAStatus](https://partner.steamgames.com/doc/api/ISteamUGC#GetWorkshopEULAStatus)
 *
 * This function asynchronously retrieves data about whether the user accepted the Workshop EULA for the current app.
 *
 * @param {Function} [callback] The function to call upon completion.
 * @function_end
 */

/**
 * @function steam_ugc_set_callback_file_subscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the user subscribed to a file.
 * 
 * See: [ISteamRemoteStorage::RemoteStoragePublishedFileSubscribed_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileSubscribed_t)
 *
 * @param {Function} callback The function to be called when a workshop file is subscribed to.
 * @function_end
 */

/**
 * @function steam_ugc_clear_callback_file_subscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_ugc_set_callback_file_subscribed}.
 *
 * @function_end
 */

/**
 * @function steam_ugc_set_callback_file_unsubscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the user unsubscribed from a file.
 * 
 * See: [ISteamRemoteStorage::RemoteStoragePublishedFileUnsubscribed_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileUnsubscribed_t)
 *
 * @param {Function} callback The function to be called when a workshop file is unsubscribed from.
 * @function_end
 */

/**
 * @function steam_ugc_clear_callback_file_unsubscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_ugc_set_callback_file_unsubscribed}.
 *
 * @function_end
 */

/**
 * @function steam_ugc_get_num_supported_game_versions
 * @description > **Steamworks Function**: [ISteamUGC::GetNumSupportedGameVersions](https://partner.steamgames.com/doc/api/ISteamUGC#GetNumSupportedGameVersions)
 *
 * This function returns the number of supported game versions; items can have multiple versions, whose support can be valid for a range of Steam beta branches.
 * 
 * [[Note: This must only be called with the handle obtained from a successful [SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t) call result.]]
 *
 * @param {Real} query_handle The UGC query handle to query, as returned by ${function.steam_ugc_create_query_user} or ${function.steam_ugc_create_query_all}.
 * @param {Real} index The (zero-based) index of the item within the query results to get the number of supported game versions for.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_activate_action_set
 * @description > **Steamworks Function**: [ISteamInput::ActivateActionSet](https://partner.steamgames.com/doc/api/ISteamInput#ActivateActionSet)
 *
 * This function reconfigures the controller to use the specified action set (i.e. "Menu", "Walk", or "Drive").
 * 
 * This is cheap, and can be safely called repeatedly. It's often easier to repeatedly call it in your state loops, instead of trying to place it in all of your state transitions.
 *
 * @param {Real} input_handle The handle of the controller you want to activate an action set for.
 * @param {Real} action_set_handle The handle of the action set you want to activate.
 * @function_end
 */

/**
 * @function steam_input_activate_action_set_layer
 * @description > **Steamworks Function**: [ISteamInput::ActivateActionSetLayer](https://partner.steamgames.com/doc/api/ISteamInput#ActivateActionSetLayer)
 *
 * This function reconfigures the controller to use the specified action set layer.
 * 
 * See the [Action Set Layers](https://partner.steamgames.com/doc/features/steam_controller/action_set_layers) article for full details and an in-depth practical example.
 *
 * @param {Real} input_handle The handle of the controller you want to activate an action set layer for.
 * @param {Real} action_set_layer_handle The handle of the action set layer you want to activate.
 * @function_end
 */

/**
 * @function steam_input_deactivate_action_set_layer
 * @description > **Steamworks Function**: [ISteamInput::DeactivateActionSetLayer](https://partner.steamgames.com/doc/api/ISteamInput#DeactivateActionSetLayer)
 *
 * This function reconfigures the controller to stop using the specified action set layer.
 *
 * @param {Real} input_handle The handle of the controller you want to deactivate an action set layer for.
 * @param {Real} action_set_layer_handle The handle of the action set layer you want to deactivate.
 * @function_end
 */

/**
 * @function steam_input_deactivate_all_action_set_layers
 * @description > **Steamworks Function**: [ISteamInput::DeactivateAllActionSetLayers](https://partner.steamgames.com/doc/api/ISteamInput#DeactivateAllActionSetLayers)
 *
 * This function reconfigures the controller to stop using all action set layers.
 *
 * @param {Real} input_handle The handle of the controller you want to deactivate all action set layers for.
 * @function_end
 */

/**
 * @function steam_input_get_active_action_set_layers
 * @description > **Steamworks Function**: [ISteamInput::GetActiveActionSetLayers](https://partner.steamgames.com/doc/api/ISteamInput#GetActiveActionSetLayers)
 *
 * This function fills an array with all of the currently active action set layers for a specified controller handle.
 *
 * @param {Real} input_handle The handle of the controller you want to get active action set layers for.
 * @returns {Struct.SteamInputActiveActionSetLayers} 
 * @function_end
 */

/**
 * @function steam_input_get_action_set_handle
 * @description > **Steamworks Function**: [ISteamInput::GetActionSetHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetActionSetHandle)
 *
 * This function looks up the handle for an action set.
 *
 * @param {String} action_set_name The string identifier of an action set defined in the game's VDF file.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_analog_action_data
 * @description > **Steamworks Function**: [ISteamInput::GetAnalogActionData](https://partner.steamgames.com/doc/api/ISteamInput#GetAnalogActionData)
 *
 * This function returns the current state of the supplied analog game action.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} analog_action_handle The handle of the analog action you want to query.
 * @returns {Struct.SteamInputAnalogActionData} 
 * @function_end
 */

/**
 * @function steam_input_get_analog_action_handle
 * @description > **Steamworks Function**: [ISteamInput::GetAnalogActionHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetAnalogActionHandle)
 *
 * This function gets the handle of the specified analog action.
 * 
 * [[Note: This function does not take an action set handle parameter. That means that each action in your VDF file must have a unique string identifier. In other words, if you use an action called "up" in two different action sets, this function will only ever return one of them and the other will be ignored.]]
 *
 * @param {String} action_name The string identifier of the analog action defined in the game's VDF file.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_analog_action_origins
 * @description > **Steamworks Function**: [ISteamInput::GetAnalogActionOrigins](https://partner.steamgames.com/doc/api/ISteamInput#GetAnalogActionOrigins)
 *
 * This function gets the origin(s) for an analog action within an action set. Use this to display the appropriate on-screen prompt for the action.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} action_set_handle The handle of the action set you want to query.
 * @param {Real} analog_action_handle The handle of the analog action you want to query.
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end
 */

/**
 * @function steam_input_get_glyph_png_for_action_origin
 * @description > **Steamworks Function**: [ISteamInput::GetGlyphPNGForActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetGlyphPNGForActionOrigin)
 *
 * This function gets a local path to a PNG file for the on-screen glyph for a particular origin.
 *
 * @param {Real} origin The action origin you want to get the glyph image for.
 * @param {Real} size The size of the PNG glyph to retrieve, from the `ESteamInputGlyphSize` enum.
 * @param {Real} flags A bit-masked combination of glyph style flags that control the visual appearance of the returned glyph.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_input_get_glyph_svg_for_action_origin
 * @description > **Steamworks Function**: [ISteamInput::GetGlyphSVGForActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetGlyphSVGForActionOrigin)
 *
 * This function gets a local path to an SVG file for the on-screen glyph for a particular origin.
 *
 * @param {Real} origin The action origin you want to get the glyph image for.
 * @param {Real} flags A bit-masked combination of glyph style flags that control the visual appearance of the returned glyph.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_input_get_connected_controllers
 * @description > **Steamworks Function**: [ISteamInput::GetConnectedControllers](https://partner.steamgames.com/doc/api/ISteamInput#GetConnectedControllers)
 *
 * This function enumerates currently connected controllers.
 *
 * @returns {Array[Real]}
 * @function_end
 */

/**
 * @function steam_input_get_controller_for_gamepad_index
 * @description > **Steamworks Function**: [ISteamInput::GetControllerForGamepadIndex](https://partner.steamgames.com/doc/api/ISteamInput#GetControllerForGamepadIndex)
 *
 * This function returns the associated controller handle for the specified emulated gamepad. Can be used with ${function.steam_input_get_input_type_for_handle} to determine the type of controller using Steam Input Gamepad Emulation.
 *
 * @param {Real} index The index of the emulated gamepad you want to get a controller handle for.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_current_action_set
 * @description > **Steamworks Function**: [ISteamInput::GetCurrentActionSet](https://partner.steamgames.com/doc/api/ISteamInput#GetCurrentActionSet)
 *
 * This function gets the currently active action set for the specified controller.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_digital_action_data
 * @description > **Steamworks Function**: [ISteamInput::GetDigitalActionData](https://partner.steamgames.com/doc/api/ISteamInput#GetDigitalActionData)
 *
 * This function returns the current state of the supplied digital game action.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} digital_action_handle The handle of the digital action you want to query.
 * @returns {Struct.SteamInputDigitalActionData} 
 * @function_end
 */

/**
 * @function steam_input_get_digital_action_handle
 * @description > **Steamworks Function**: [ISteamInput::GetDigitalActionHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetDigitalActionHandle)
 *
 * This function gets the handle of the specified digital action.
 *
 * @param {String} action_name The string identifier of the digital action defined in the game's VDF file.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_digital_action_origins
 * @description > **Steamworks Function**: [ISteamInput::GetDigitalActionOrigins](https://partner.steamgames.com/doc/api/ISteamInput#GetDigitalActionOrigins)
 *
 * This function gets the origin(s) for a digital action within an action set.
 *
 * @param {Real} input_handle The handle of the controller you want to query.
 * @param {Real} action_set_handle The handle of the action set you want to query.
 * @param {Real} digital_action_handle The handle of the digital action you want to query.
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end
 */

/**
 * @function steam_input_get_gamepad_index_for_controller
 * @description > **Steamworks Function**: [ISteamInput::GetGamepadIndexForController](https://partner.steamgames.com/doc/api/ISteamInput#GetGamepadIndexForController)
 *
 * This function returns the associated gamepad index for the specified controller, if emulating a gamepad.
 *
 * @param {Real} input_handle The handle of the controller you want to get a gamepad index for.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_input_type_for_handle
 * @description > **Steamworks Function**: [ISteamInput::GetInputTypeForHandle](https://partner.steamgames.com/doc/api/ISteamInput#GetInputTypeForHandle)
 *
 * This function returns the input type (device model) for the specified controller. This tells you if a given controller is a Steam controller, Xbox 360 controller, PS4 controller, etc.
 *
 * @param {Real} input_handle The handle of the controller whose input type (device model) you want to query.
 * @returns {Enum.SteamInputType}
 * @function_end
 */

/**
 * @function steam_input_get_motion_data
 * @description > **Steamworks Function**: [ISteamInput::GetMotionData](https://partner.steamgames.com/doc/api/ISteamInput#GetMotionData)
 *
 * This function returns raw motion data for the specified controller.
 *
 * @param {Real} input_handle The handle of the controller you want to get motion data for.
 * @returns {Struct.SteamInputMotionData} 
 * @function_end
 */

/**
 * @function steam_input_get_string_for_action_origin
 * @description > **Steamworks Function**: [ISteamInput::GetStringForActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetStringForActionOrigin)
 *
 * This function returns a localised string (from Steam's language setting) for the specified origin.
 *
 * @param {Real} origin The action origin you want to get the localised string for.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_input_init
 * @description > **Steamworks Function**: [ISteamInput::Init](https://partner.steamgames.com/doc/api/ISteamInput#Init)
 *
 * This function must be called when starting use of the [ISteamInput](https://partner.steamgames.com/doc/api/ISteamInput) interface.
 *
 * @param {Bool} explicitly_call_run_frame Set to `true` if you intend to call ${function.steam_input_run_frame} manually instead of having it called automatically.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_input_enable_device_callbacks
 * @description > **Steamworks Function**: [ISteamInput::EnableDeviceCallbacks](https://partner.steamgames.com/doc/api/ISteamInput#EnableDeviceCallbacks)
 *
 * This function enables SteamInputDeviceConnected and SteamInputDeviceDisconnected callbacks.
 *
 * @function_end
 */

/**
 * @function steam_input_run_frame
 * @description > **Steamworks Function**: [ISteamInput::RunFrame](https://partner.steamgames.com/doc/api/ISteamInput#RunFrame)
 *
 * This function synchronises API state with the latest Steam Controller inputs available. This is performed automatically by ${function.steam_api_run_callbacks}, but for the absolute lowest possible latency, you can call this directly before reading controller state.
 *
 * @function_end
 */

/**
 * @function steam_input_set_dual_sense_trigger_effect
 * @description > **Steamworks Function**: [ISteamInput::SetDualSenseTriggerEffect](https://partner.steamgames.com/doc/api/ISteamInput#SetDualSenseTriggerEffect)
 *
 * This function sets the trigger effect for a DualSense controller.
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Array[Real]} param The trigger parameters, as defined in isteamdualsense.h.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_input_set_led_color
 * @description > **Steamworks Function**: [ISteamInput::SetLEDColor](https://partner.steamgames.com/doc/api/ISteamInput#SetLEDColor)
 *
 * This function sets the controller LED color on supported controllers.
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} color_r The red component of the color to set (0-255).
 * @param {Real} color_g The green component of the color to set (0-255).
 * @param {Real} color_b The blue component of the color to set (0-255).
 * @param {Real} flags Bit-masked flags combined from values defined in the ESteamControllerLEDFlag enum.
 * @function_end
 */

/**
 * @function steam_input_show_binding_panel
 * @description > **Steamworks Function**: [ISteamInput::ShowBindingPanel](https://partner.steamgames.com/doc/api/ISteamInput#ShowBindingPanel)
 *
 * This function invokes the Steam overlay and brings up the binding screen.
 *
 * @param {Real} input_handle The handle of the controller you want to bring up the binding screen for.
 * @returns {Bool} `true` for success; `false` if overlay is disabled/unavailable. If the player is using Big Picture Mode the configuration will open in the overlay. In desktop mode a popup window version of Big Picture will be created and open the configuration.
 * @function_end
 */

/**
 * @function steam_input_shutdown
 * @description > **Steamworks Function**: [ISteamInput::Shutdown](https://partner.steamgames.com/doc/api/ISteamInput#Shutdown)
 *
 * This function must be called when ending use of the [ISteamInput](https://partner.steamgames.com/doc/api/ISteamInput) interface.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_input_stop_analog_action_momentum
 * @description > **Steamworks Function**: [ISteamInput::StopAnalogActionMomentum](https://partner.steamgames.com/doc/api/ISteamInput#StopAnalogActionMomentum)
 *
 * This function stops the momentum of an analog action (where applicable, i.e. a touchpad w/ virtual trackball settings).
 * 
 * [[Note: This will also stop all associated haptics. This is useful for situations where you want to indicate to the user that the limit of an action has been reached, such as spinning a carousel or scrolling a webpage.]]
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} analog_action_handle The handle of the analog action to stop momentum for.
 * @function_end
 */

/**
 * @function steam_input_trigger_vibration
 * @description > **Steamworks Function**: [ISteamInput::TriggerVibration](https://partner.steamgames.com/doc/api/ISteamInput#TriggerVibration)
 *
 * This function triggers a vibration event on supported controllers.
 * 
 * [[Notes: 
 * 
 * * This API call will be ignored for incompatible controller models.
 * * This generates the traditional "rumble" vibration effect.
 * * The VSC will emulate traditional rumble using its haptics.]]
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} left_speed The intensity value for the left rumble motor.
 * @param {Real} right_speed The intensity value of the right rumble motor.
 * @function_end
 */

/**
 * @function steam_input_trigger_vibration_extended
 * @description > **Steamworks Function**: [ISteamInput::TriggerVibrationExtended](https://partner.steamgames.com/doc/api/ISteamInput#TriggerVibrationExtended)
 *
 * This function triggers a vibration event on supported controllers, including Xbox Impulse Trigger motor values.
 * 
 * [[Notes: On Windows support for Xbox Impulse Trigger motor values requires user installation of the Xbox Extended Feature support driver. The Steam Controller and Steam Deck will emulate traditional rumble using their haptics.]]
 *
 * @param {Real} input_handle The handle of the controller to affect.
 * @param {Real} left_speed The intensity value for the left rumble motor.
 * @param {Real} right_speed The intensity value of the right rumble motor.
 * @param {Real} left_trigger_speed The intensity value for the left Xbox Impulse Trigger motor.
 * @param {Real} right_trigger_speed The intensity value of the right Xbox Impulse Trigger motor.
 * @function_end
 */

/**
 * @function steam_input_get_action_origin_from_xbox_origin
 * @description > **Steamworks Function**: [ISteamInput::GetActionOriginFromXboxOrigin](https://partner.steamgames.com/doc/api/ISteamInput#GetActionOriginFromXboxOrigin)
 *
 * This function gets an action origin that you can use in your glyph look up table or passed into ${function.steam_input_get_glyph_png_for_action_origin}, ${function.steam_input_get_glyph_svg_for_action_origin} or ${function.steam_input_get_string_for_action_origin}.
 *
 * @param {Real} input_handle The handle of the controller to query. You can use ${function.steam_input_get_controller_for_gamepad_index} to get this handle.
 * @param {Enum.SteamXboxOrigin} origin The Xbox button you want to get the image for, e.g. `SteamXboxOrigin.A`.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_translate_action_origin
 * @description > **Steamworks Function**: [ISteamInput::TranslateActionOrigin](https://partner.steamgames.com/doc/api/ISteamInput#TranslateActionOrigin)
 *
 * This function gets the equivalent origin for a given controller type.
 *
 * @param {Real} destination_input_type The controller type you want to translate to. Steam will pick the closest type from your SDK version if `k_ESteamInputType_Unknown` is used.
 * @param {Enum.SteamInputActionOrigin} source_origin The button you want to translate.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_get_device_binding_revision
 * @description > **Steamworks Function**: [ISteamInput::GetDeviceBindingRevision](https://partner.steamgames.com/doc/api/ISteamInput#GetDeviceBindingRevision)
 *
 * This function gets the major and minor device binding revisions for Steam Input API configurations.
 *
 * @param {Real} input_handle The handle of the controller to query.
 * @returns {Struct.SteamInputDeviceBindingRevision} 
 * @function_end
 */

/**
 * @function steam_input_get_remote_play_session_id
 * @description > **Steamworks Function**: [ISteamInput::GetRemotePlaySessionID](https://partner.steamgames.com/doc/api/ISteamInput#GetRemotePlaySessionID)
 *
 * This function gets the Steam Remote Play session ID associated with a device, or 0 if there is no session associated with it.
 *
 * @param {Real} input_handle The handle of the controller to query.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_input_set_callback_device_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when an new device connects.
 *
 * @param {Function} callback The function to be called when an input device is connected.
 * @function_end
 */

/**
 * @function steam_input_clear_callback_device_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_input_set_callback_device_connected}.
 *
 * @function_end
 */

/**
 * @function steam_input_set_callback_device_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a device disconnects.
 *
 * @param {Function} callback The function to be called when an input device is disconnected.
 * @function_end
 */

/**
 * @function steam_input_clear_callback_device_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_input_clear_callback_device_disconnected}.
 *
 * @function_end
 */

/**
 * @function steam_input_set_callback_action_set_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the active action set changes.
 *
 * @param {Function} callback The function to be called when the active action set changes.
 * @function_end
 */

/**
 * @function steam_input_clear_callback_action_set_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_input_clear_callback_action_set_changed}.
 *
 * @function_end
 */

/**
 * @function steam_input_set_callback_controller_battery
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a controller's battery level changes.
 *
 * @param {Function} callback The function to be called when a controller's battery level changes.
 * @function_end
 */

/**
 * @function steam_input_clear_callback_controller_battery
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_input_set_callback_controller_battery}.
 *
 * @function_end
 */

/**
 * @function steam_userstats_get_stat_int
 * @description > **Steamworks Function**: [ISteamUserStats::GetStat](https://partner.steamgames.com/doc/api/ISteamUserStats#GetStat)
 *
 * This function gets the current value of the given integer stat for the current user.
 * 
 * To receive stats for other users use ${function.steam_userstats_user_stat_int}.
 *
 * @param {String} stat_name The "API Name" of the stat.
 * @returns {Struct.SteamUserStatsStatInt} 
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
 * @returns {Struct.SteamUserStatsStatFloat} 
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
 * @returns {Struct.SteamUserStatsUserAchievement} 
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
 * @member {Real} game_id The Game ID this achievement is for.
 * @member {String} achievement_name The name of the achievement that this callback is for.
 * @member {Bool} achieved Whether the icon for the achieved (`true`) or unachieved (`false`) version.
 * @member {Real} icon_handle Handle to the image, which can be used with ${function.steam_utils_get_image_rgba} to get the image data. 0 means no image is set for the achievement.
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
 * These stats are not automatically updated; you'll need to call this function again to refresh any data that may have change.
 * 
 * To keep from using too much memory, a least recently used cache (LRU) is maintained and other user's stats will occasionally be unloaded. When this happens a [UserStatsUnloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsUnloaded_t) callback is sent. After receiving this callback the user's stats will be unavailable until this function is called again.
 *
 * @param {Real} steam_id_user The Steam ID of the user to request stats for.
 * @param {Function} [callback] The function to call upon completion.
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
 * @description **Steamworks Callback**: ISteamUserStats::UserStatsUnloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsUnloaded_t)
 * 
 * Callback indicating that a user's stats have been unloaded.
 * 
 * Call ${function.steam_userstats_request_user_stats} again before accessing stats for this user.
 * 
 * @member {Real} steam_id_user User whose stats have been unloaded.
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
 * @returns {Struct.SteamUserStatsStatInt} 
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
 * @returns {Struct.SteamUserStatsStatFloat} 
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
 * @returns {Struct.SteamUserStatsUserAchievement} 
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
 * This function resets the current users stats and, optionally, achievements.
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
 * @param {Function} [callback] The function to call upon completion.
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
 * @param {Function} [callback] The function to call upon completion.
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
 * @param {Real} leaderboard_handle A leaderboard handle obtained from steam_userstats_find_leaderboard or steam_userstats_find_or_create_leaderboard.
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
 * @param {Real} leaderboard_handle A leaderboard handle obtained from steam_userstats_find_leaderboard or steam_userstats_find_or_create_leaderboard.
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
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::LeaderboardScoresDownloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoresDownloaded_t)
 *
 * Called when scores for a leaderboard have been downloaded and are ready to be retrieved.
 *
 * @member {Real} leaderboard_handle The handle to the leaderboard that these entries belong to.
 * @member {Real} entries_handle A handle used to retrieve each downloaded entry's data.
 * @member {Real} entry_count The number of entries downloaded.
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
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUserStats::LeaderboardScoresDownloaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoresDownloaded_t)
 *
 * Called when scores for a leaderboard have been downloaded and are ready to be retrieved.
 *
 * @member {Real} leaderboard_handle The handle to the leaderboard that these entries belong to.
 * @member {Real} entries_handle A handle used to retrieve each downloaded entry's data.
 * @member {Real} entry_count The number of entries downloaded.
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
 * @param {Buffer} buffer The buffer into which the entry's score details will be written.
 * @param {Real} buffer_size The size in bytes of the provided buffer.
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
 * @param {Buffer} score_details_buffer A buffer containing the optional details surrounding the unlocking of this score.
 * @param {Real} score_details_count The number of detail elements contained in the score details buffer.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamUserStats::LeaderboardScoreUploaded_t](https://partner.steamgames.com/doc/api/ISteamUserStats#LeaderboardScoreUploaded_t)
 * 
 * Result indicating that a leaderboard score has been uploaded.
 * 
 * @member {Bool} success Was the call successful? `true` if the call was successful, `false` on failure.
 * @member {Real} leaderboard_handle Handle to the leaderboard that this score was uploaded to.
 * @member {Real} score The score that was attempted to set.
 * @member {Bool} score_changed `true` if the score on the leaderboard changed otherwise `false` if the existing score was better.
 * @member {Real} global_rank_new The new global rank of the user on this leaderboard.
 * @member {Real} global_rank_previous The previous global rank of the user on this leaderboard; 0 if the user had no existing entry in the leaderboard.
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
 * @param {Function} [callback] The function to call upon completion.
 * @function_end 
 */

/**
 * @function steam_userstats_number_of_current_players
 * @description > **Steamworks Function**: [ISteamUserStats::GetNumberOfCurrentPlayers](https://partner.steamgames.com/doc/api/ISteamUserStats#GetNumberOfCurrentPlayers)
 *
 * This function asynchronously retrieves the total number of players currently playing the current game. Both online and in offline mode.
 *
 * @param {Function} [callback] The function to call upon completion.
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
 * @param {Function} [callback] The function to call upon completion.
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
 * @param {Real} iterator_prev The iterator returned from the previous call to this function, or from steam_userstats_most_achieved_achievement_info.
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
 * @param {Function} [callback] The function to call upon completion.
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
 * @returns {Struct.SteamUserStatsGlobalStatInt64} 
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
 * @returns {Struct.SteamUserStatsGlobalStatDouble} 
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
 * @returns {Struct.SteamUserStatsGlobalStatHistoryInt64} 
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
 * @returns {Struct.SteamUserStatsGlobalStatHistoryDouble} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_progress_limits_int
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementProgressLimits](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementProgressLimits)
 *
 * This function returns the integer progress limits (the minimum and maximum) used to compute the progress bar for a given achievement.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @param {Real} cur_progress The variable into which the current progress towards the achievement is returned.
 * @param {Real} max_progress The variable into which the progress required to unlock the achievement is returned.
 * @returns {Struct.SteamUserStatsIntMinMax} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_progress_limits_float
 * @description > **Steamworks Function**: [ISteamUserStats::GetAchievementProgressLimits](https://partner.steamgames.com/doc/api/ISteamUserStats#GetAchievementProgressLimits)
 *
 * This function returns the floating point progress limits (the minimum and maximum) used to compute the progress bar for a given achievement.
 *
 * @param {String} achievement_name The "API Name" of the achievement.
 * @param {Real} cur_progress The variable into which the current progress towards the achievement is returned.
 * @param {Real} max_progress The variable into which the progress required to unlock the achievement is returned.
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
 * This function is called as a result of a request to store the achievements on the server, or an "indicate progress" call.
 * 
 * See: [ISteamUserStats::UserAchievementStored_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserAchievementStored_t)
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
 * This function checks if Steam Music is active. This does not necessarily a song is currently playing, it may be paused.
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
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `steam_`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `k_unMaxTimelinePriority`.
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
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `steam_`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `k_unMaxTimelinePriority`.
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
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `steam_`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `k_unMaxTimelinePriority`.
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
 * @param {String} icon The name of the icon to display; this can be a title-uploaded icon or one of the provided icons whose name begins with `steam_`.
 * @param {Real} priority The priority used to decide which icons to show in crowded areas; higher priority events are shown more prominently, and the value must be between 0 and `k_unMaxTimelinePriority`.
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip Lets the game flag the event as a suggested video clip.
 * @function_end 
 */

/**
 * @function steam_timeline_end_range_timeline_event
 * @description > **Steamworks Function**: [ISteamTimeline::EndRangeTimelineEvent](https://partner.steamgames.com/doc/api/ISteamTimeline#EndRangeTimelineEvent)
 *
 * This function is used to end an event that was started with StartRangeTimelineEvent.
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
 * @description **Steamworks Callback**: [ISteamTimeline::SteamTimelineEventRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineEventRecordingExists_t)
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
 * @description **Steamworks Callback**: [ISteamTimeline::SteamTimelineGamePhaseRecordingExists_t](https://partner.steamgames.com/doc/api/ISteamTimeline#SteamTimelineGamePhaseRecordingExists_t)
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
 * @param {String} tag_name A title-provided localized string in the language returned by `SteamUtils()->GetSteamUILanguage()`.
 * @param {String} tag_icon The name of the icon to show when the tag is displayed in the UI; this can be a title-uploaded icon or one of the provided icons whose name begins with `steam_`.
 * @param {String} tag_group A title-provided localized string; tags within the same group will be shown together in the UI.
 * @param {Real} priority The priority used to decide which icons to show; tags with larger priority values are displayed more prominently, and the value must be between 0 and `k_unMaxTimelinePriority`.
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
 * @param {Real} priority The priority used to decide which attributes to show; attributes with larger priority values are displayed more prominently, and the value must be between 0 and `k_unMaxTimelinePriority`.
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

/**
 * @function steam_inventory_add_promo_item
 * @description > **Steamworks Function**: [ISteamInventory::AddPromoItem](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItem)
 *
 * This function grants a specific one-time promotional item to the current user.
 * 
 * This can be safely called from the client because the items it can grant can be locked down via policies in the itemdefs. One of the primary scenarios for this call is to grant an item to users who also own a specific other game. This can be useful if your game has custom UI for showing a specific promo item to the user otherwise if you want to grant multiple promotional items then use ${function.steam_inventory_add_promo_items} or ${function.steam_inventory_grant_promo_items}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Real} item_def_id The item definition id to grant the player.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_add_promo_items
 * @description > **Steamworks Function**: [ISteamInventory::AddPromoItems](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItems)
 *
 * This function grants a specific one-time promotional item to the current user.
 * 
 * This can be safely called from the client because the items it can grant can be locked down via policies in the itemdefs. One of the primary scenarios for this call is to grant an item to users who also own a specific other game. If you want to grant a single promotional item then use AddPromoItem. If you want to grant all possible promo items then use ${function.steam_inventory_grant_promo_items}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Real]} item_def_ids The list of items to grant the user.
 * @param {Real} num_item_defs The number of items in the `item_def_ids` array.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_check_result_steam_id
 * @description > **Steamworks Function**: [ISteamInventory::CheckResultSteamID](https://partner.steamgames.com/doc/api/ISteamInventory#CheckResultSteamID)
 *
 * This function checks whether an inventory result handle belongs to the specified Steam ID.
 * 
 * This is important when using ${function.steam_inventory_deserialize_result}, to verify that a remote player is not pretending to have a different user's inventory.
 *
 * @param {Real} result_handle The inventory result handle to check the Steam ID on.
 * @param {Real} steam_id_expected The Steam ID to verify.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_consume_item
 * @description > **Steamworks Function**: [ISteamInventory::ConsumeItem](https://partner.steamgames.com/doc/api/ISteamInventory#ConsumeItem)
 *
 * This function consumes items from a user's inventory. If the quantity of the given item goes to zero, it is permanently removed.
 * 
 * Once an item is removed it cannot be recovered. This is not for the faint of heart - if your game implements item removal at all, a high-friction UI confirmation process is highly recommended.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Real} item_instance_id The item instance id to consume.
 * @param {Real} quantity The number of items in that stack to consume.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_deserialize_result
 * @description > **Steamworks Function**: [ISteamInventory::DeserializeResult](https://partner.steamgames.com/doc/api/ISteamInventory#DeserializeResult)
 *
 * This function deserializes a result set and verifies the signature bytes.
 * 
 * You should call ${function.steam_inventory_check_result_steam_id} on the result handle when it completes to verify that a remote player is not pretending to have a different user's inventory.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Buffer} data The buffer to deserialize.
 * @param {Real} data_size The size of the `data` buffer.
 * @returns {Struct.SteamInventoryDeserializeResult} 
 * @function_end 
 */

/**
 * @function steam_inventory_destroy_result
 * @description > **Steamworks Function**: [ISteamInventory::DestroyResult](https://partner.steamgames.com/doc/api/ISteamInventory#DestroyResult)
 *
 * This function destroys a result handle and frees all associated memory.
 *
 * @param {Real} result_handle The inventory result handle to destroy.
 * @function_end
 */

/**
 * @function steam_inventory_exchange_items
 * @description > **Steamworks Function**: [ISteamInventory::ExchangeItems](https://partner.steamgames.com/doc/api/ISteamInventory#ExchangeItems)
 *
 * This function grants one item in exchange for a set of other items.
 * 
 * This can be used to implement crafting recipes or transmutations, or items which unpack themselves into other items (e.g., a chest).
 * 
 * See the [Steam Inventory Schema](https://partner.steamgames.com/doc/features/inventory/schema) documentation for more details.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Real]} generate_item_defs The list of items that will be created by this call. Currently can only be 1 item.
 * @param {Array[Real]} generate_qty The quantity of each item in `generate_item_defs` to create.
 * @param {Real} generate_len The number of items in the `generate_item_defs` and `generate_qty` arrays.
 * @param {Array[Real]} destroy_instance_ids The list of items that will be destroyed by this call.
 * @param {Array[Real]} destroy_qty The quantity of each item in `destroy_instance_ids` to destroy.
 * @param {Real} destroy_len The number of items in the `destroy_instance_ids` and `destroy_qty` arrays.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end
 */

/**
 * @function steam_inventory_generate_items
 * @description > **Steamworks Function**: [ISteamInventory::GenerateItems](https://partner.steamgames.com/doc/api/ISteamInventory#GenerateItems)
 *
 * This function grants specific items to the current user, for developers only.
 * 
 * This API is only intended for prototyping - it is only usable by Steam accounts that belong to the publisher group for your game.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Real]} item_defs The list of items to grant the user.
 * @param {Array[Real]} quantities The quantity of each item in `item_defs` to grant.
 * @param {Real} count The number of items in the `item_defs` array.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_get_all_items
 * @description > **Steamworks Function**: [ISteamInventory::GetAllItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetAllItems)
 *
 * This function starts retrieving all items in the current user's inventory.
 * 
 * [[Note: Calls to this function are subject to rate limits and may return cached results if called too frequently. It is suggested that you call this function only when you are about to display the user's full inventory, or if you expect that the inventory may have changed.]]
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_items
 * @description > **Steamworks Function**: [ISteamInventory::GetResultItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItems)
 *
 * This function gets the items associated with an inventory result handle.
 *
 * @param {Real} result_handle The inventory result handle to get the items for.
 * @returns {Struct.SteamInventoryResultItems} 
 * @function_end
 */

/**
 * @function steam_inventory_get_result_status
 * @description > **Steamworks Function**: [ISteamInventory::GetResultStatus](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultStatus)
 *
 * This function finds out the status of an asynchronous inventory result handle.
 * 
 * This is a polling equivalent to registering a callback function for [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) (see ${function.steam_inventory_set_callback_result_ready}).
 *
 * @param {Real} result_handle The inventory result handle to get the status for.
 * @returns {Enum.SteamApiResult} Whether the call was successful or not.
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_timestamp
 * @description > **Steamworks Function**: [ISteamInventory::GetResultTimestamp](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultTimestamp)
 *
 * This function gets the server time at which the result was generated. (as Unix epoch time (Time since Jan 1st, 1970))
 * 
 * You can compare this value against ${function.steam_utils_get_server_real_time} to determine the age of the result.
 *
 * @param {Real} result_handle The inventory result handle to get the timestamp for.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_eligible_promo_item_definition_ids
 * @description > **Steamworks Function**: [ISteamInventory::GetEligiblePromoItemDefinitionIDs](https://partner.steamgames.com/doc/api/ISteamInventory#GetEligiblePromoItemDefinitionIDs)
 *
 * This function gets the list of item definition ids that a user can be granted.
 * 
 * You should call this while handling a [SteamInventoryEligiblePromoItemDefIDs_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryEligiblePromoItemDefIDs_t) call result to pull out the item definition ids.
 *
 * @param {Real} max_item_defs The maximum number of item definition ids to retrieve.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_inventory_load_item_definitions
 * @description > **Steamworks Function**: [ISteamInventory::LoadItemDefinitions](https://partner.steamgames.com/doc/api/ISteamInventory#LoadItemDefinitions)
 *
 * This function triggers an asynchronous load and refresh of item definitions.
 * 
 * Item definitions are a mapping of "definition IDs" (integers between 1 and 999999999) to a set of string properties. Some of these properties are required to display items on the Steam community web site. Other properties can be defined by applications. There is no reason to call this function if your game hardcoded the numeric definition IDs (e.g. purple face mask = 20, blue weapon mod = 55) and does not allow for adding new item types without a client patch.
 *
 * @returns {Bool} This call will always return true.
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamInventory::SteamInventoryDefinitionUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryDefinitionUpdate_t)
 * 
 * Triggered whenever item definitions have been updated, which could be in response to ${function.steam_inventory_load_item_definitions} or any time new item definitions are available (e.g., from the dynamic addition of new item types while players are still in-game).
 * 
 * This callback has no fields.
 * @event_end
 * @function_end
 */

/**
 * @function steam_inventory_get_item_definition_ids
 * @description > **Steamworks Function**: [ISteamInventory::GetItemDefinitionIDs](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemDefinitionIDs)
 *
 * This function returns the set of all item definition IDs which are defined in the App Admin panel of the Steamworks website.
 * 
 * These item definitions may not necessarily be contiguous integers.
 * 
 * This should be called in response to a [SteamInventoryDefinitionUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryDefinitionUpdate_t) callback. There is no reason to call this function if your game hardcodes the numeric definition IDs (eg, purple face mask = 20, blue weapon mod = 55) and does not allow for adding new item types without a client patch.
 *
 * @param {Real} max_item_defs The maximum number of item definition ids to retrieve.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_items_by_id
 * @description > **Steamworks Function**: [ISteamInventory::GetItemsByID](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsByID)
 *
 * This function gets the state of a subset of the current user's inventory.
 * 
 * The subset is specified by an array of item instance IDs.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Real]} item_instance_ids A list of the item instance ids to update the state of.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_serialize_result
 * @description > **Steamworks Function**: [ISteamInventory::SerializeResult](https://partner.steamgames.com/doc/api/ISteamInventory#SerializeResult)
 *
 * This function serialises a result set with a short signature which can't be forged or replayed across different game sessions.
 * 
 * A result set can be serialised on the local client, transmitted to other players via your game networking, and deserialised by the remote players. This is a secure way of preventing hackers from lying about posessing rare/high-value items. Serialises a result set with signature bytes to an output buffer. The size of a serialised result depends on the number of items which are being serialised. When securely transmitting items to other players, it is recommended to use ${function.steam_inventory_get_items_by_id} first to create a minimal result set.
 *
 * @param {Real} result_handle The inventory result handle to serialise.
 * @param {Buffer} out_data The buffer that the serialised result will be copied into.
 * @param {Real} out_capacity The size of the `out_data` buffer.
 * @returns {Struct.SteamInventorySerializeResult} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_item_property_keys_array
 * @description > **Steamworks Function**: [ISteamInventory::GetResultItemProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItemProperty)
 *
 * This function gets the list of dynamic property names available on an item in an inventory result set.
 *
 * @param {Real} result_handle The result handle containing the item to get the properties of.
 * @param {Real} item_index The index of the item within the result set to query.
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_item_property
 * @description > **Steamworks Function**: [ISteamInventory::GetResultItemProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItemProperty)
 *
 * This function gets the dynamic properties from an item in an inventory result set.
 * 
 * Property names are always composed of ASCII letters, numbers, and/or underscores.
 *
 * @param {Real} result_handle The result handle containing the item to get the properties of.
 * @param {Real} item_index The index of the item within the result set to query.
 * @param {String} property_name The property name to get the value for.
 * @returns {Struct.SteamInventoryItemProperty} 
 * @function_end 
 */

/**
 * @function steam_inventory_start_purchase
 * @description > **Steamworks Function**: [ISteamInventory::StartPurchase](https://partner.steamgames.com/doc/api/ISteamInventory#StartPurchase)
 *
 * This function starts the purchase process for the user, given a "shopping cart" of item definitions that the user would like to buy. The user will be prompted in the Steam Overlay to complete the purchase in their local currency, funding their Steam Wallet if necessary, etc.
 * 
 * If the purchase process was started successfully, then `order_id` and `transaction_id` will be valid in the [SteamInventoryStartPurchaseResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryStartPurchaseResult_t) call result.
 * 
 * If the user authorizes the transaction and completes the purchase, then the callback [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) will be triggered and you can then retrieve what new items the user has acquired.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the inventory result for when you are done with it.]]
 *
 * @param {Array[Real]} item_def_ids The array of item definition ids that the user wants to purchase.
 * @param {Array[Real]} quantities The array of quantities of each item definition that the user wants to purchase.
 * @param {Real} count The length of the `item_def_ids` and `quantities` arrays.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamInventory::SteamInventoryStartPurchaseResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryStartPurchaseResult_t)
 *
 * Returned after ${function.steam_inventory_start_purchase} is called.
 *
 * @member {Struct.SteamInventoryStartPurchaseResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_inventory_request_prices
 * @description > **Steamworks Function**: [ISteamInventory::RequestPrices](https://partner.steamgames.com/doc/api/ISteamInventory#RequestPrices)
 *
 * This function requests prices for all item definitions that can be purchased in the user's local currency.
 * 
 * A [SteamInventoryRequestPricesResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryRequestPricesResult_t) call result will be returned with the user's local currency code. After that, you can call ${function.steam_inventory_get_num_items_with_prices} and ${function.steam_inventory_get_items_with_prices} to get prices for all the known item definitions, or ${function.steam_inventory_get_item_price} for a specific item definition.
 *
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamInventory::SteamInventoryRequestPricesResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryRequestPricesResult_t)
 *
 * Returned after ${function.steam_inventory_request_prices} is called.
 *
 * @member {Struct.SteamInventoryStartPurchaseResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_inventory_get_num_items_with_prices
 * @description > **Steamworks Function**: [ISteamInventory::GetNumItemsWithPrices](https://partner.steamgames.com/doc/api/ISteamInventory#GetNumItemsWithPrices)
 *
 * This function, after a successful call to ${function.steam_inventory_request_prices}, returns the number of item definitions with valid pricing.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_items_with_prices
 * @description > **Steamworks Function**: [ISteamInventory::GetItemsWithPrices](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsWithPrices)
 *
 * This function, after a successful call to ${function.steam_inventory_request_prices}, gets all the pricing for applicable item definitions.
 *
 * @param {Real} max The number of item definitions to retrieve, as returned by ${function.steam_inventory_get_num_items_with_prices}.
 * @returns {Struct.SteamInventoryItemsWithPrices} 
 * @function_end 
 */

/**
 * @function steam_inventory_start_update_properties
 * @description > **Steamworks Function**: [ISteamInventory::StartUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#StartUpdateProperties)
 *
 * This function starts a transaction request to update [dynamic properties](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) on items for the current user.
 * 
 * This call is rate-limited by user, so property modifications should be batched as much as possible (e.g. at the end of a map or game session). After calling `steam_inventory_set_property_*` or `steam_inventory_remove_property_*` for all the items that you want to modify, you will need to call ${function.steam_inventory_submit_update_properties} to send the request to the Steam servers. A [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) callback will be fired with the results of the operation.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result for ${function.steam_inventory_submit_update_properties} when you are done with it.]]
 *
 * @returns {Real} The inventory update handle
 * @function_end 
 */

/**
 * @function steam_inventory_remove_property
 * @description > **Steamworks Function**: [ISteamInventory::RemoveProperty](https://partner.steamgames.com/doc/api/ISteamInventory#RemoveProperty)
 *
 * This function removes a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} result_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being removed.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_string
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} result_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {String} value The string value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_bool
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} result_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {Bool} value The boolean value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_int64
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} result_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {Real} value The 64 bit integer value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_float
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} result_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {Real} value The floating point number value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_submit_update_properties
 * @description > **Steamworks Function**: [ISteamInventory::SubmitUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#SubmitUpdateProperties)
 *
 * This function submits the transaction request to modify [dynamic properties](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) on items for the current user. See ${function.steam_inventory_start_update_properties}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result for when you are done with it.]]
 *
 * @param {Real} result_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The new inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_transfer_item_quantity
 * @description > **Steamworks Function**: [ISteamInventory::TransferItemQuantity](https://partner.steamgames.com/doc/api/ISteamInventory#TransferItemQuantity)
 *
 * This function transfers items between stacks within a user's inventory.
 * 
 * This can be used to stack, split, and move items. The source and destination items must have the same itemdef ID. To move items onto a destination stack specify the source, the quantity to move, and the destination item ID. To split an existing stack, pass `SteamInventoryItemInstanceIdInvalid` into `item_instance_id_dest`. A new item stack will be generated with the requested quantity.
 * 
 * [[Note: Tradability/marketability restrictions are copied along with transferred items. The destination stack receives the latest tradability/marketability date of any item in its composition.]]
 *
 * @param {Real} item_instance_id_source The source item to transfer.
 * @param {Real} quantity The quantity of the item that will be transferred from `item_instance_id_source` to `item_instance_id_dest`.
 * @param {Real} item_instance_id_dest The destination item.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_trigger_item_drop
 * @description > **Steamworks Function**: [ISteamInventory::TriggerItemDrop](https://partner.steamgames.com/doc/api/ISteamInventory#TriggerItemDrop)
 *
 * This function triggers an item drop if the user has played a long enough period of time.
 * 
 * This period can be customized in two places:
 * 
 * * At the application level within Inventory Service: Playtime Item Grants. This will automatically apply to all "playtimegenerator" items that do not specify any overrides.
 * * In an individual "playtimegenerator" item definition. The settings would take precedence over any application-level settings.
 * 
 * Only item definitions which are marked as "playtime item generators" can be spawned.
 * 
 * Typically this function should be called at the end of a game or level or match or any point of significance in the game in which an item drop could occur. The granularity of the playtime generator settings is in minutes, so calling it more frequently than minutes is not useful and will be rate limited in the Steam client. The Steam servers will perform playtime accounting to prevent too-frequent drops. The servers will also manage adding the item to the players inventory.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Real} item_def_id The item definition id, which must refer to an itemdefid of the type "playtimegenerator".
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_grant_promo_items
 * @description > **Steamworks Function**: [ISteamInventory::GrantPromoItems](https://partner.steamgames.com/doc/api/ISteamInventory#GrantPromoItems)
 *
 * This function grants all potential one-time promotional items to the current user.
 * 
 * This can be safely called from the client because the items it can grant can be locked down via policies in the itemdefs. One of the primary scenarios for this call is to grant an item to users who also own a specific other game. If you want to grant specific promotional items rather than all of them see: ${function.steam_inventory_add_promo_item} and ${function.steam_inventory_add_promo_items}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_definition_property
 * @description > **Steamworks Function**: [ISteamInventory::GetItemDefinitionProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemDefinitionProperty)
 *
 * This function gets a string property from the specified item definition, or gets a property value for a specific item definition.
 * 
 * Note that some properties (for example, "name") may be localised and will depend on the current Steam language settings (see ${function.steam_apps_get_current_game_language}). Property names are always ASCII alphanumeric and underscores.
 * 
 * [[Note: Call ${function.steam_inventory_load_item_definitions} first, to ensure that items are ready to be used before calling ${function.steam_inventory_get_item_definition_property}.]]
 *
 * @param {Real} item_def_id The item definition to get the property for.
 * @param {String} property_name The property name to get the value for.
 * @returns {Struct.SteamInventoryDefProperty} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_definition_property_keys
 * @description > **Steamworks Function**: [ISteamInventory::GetItemDefinitionProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemDefinitionProperty)
 *
 * This function gets the list of string property names available on the specified item definition.
 * 
 * Note that some properties (for example, "name") may be localised and will depend on the current Steam language settings (see ${function.steam_apps_get_current_game_language}). Property names are always ASCII alphanumeric and underscores.
 * 
 * [[Note: Call ${function.steam_inventory_load_item_definitions} first, to ensure that items are ready to be used before calling ${function.steam_inventory_get_item_definition_property}.]]
 *
 * @param {Real} item_def_id The item definition to get the properties for.
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_price
 * @description > **Steamworks Function**: [ISteamInventory::GetItemPrice](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemPrice)
 *
 * This function, after a successful call to ${function.steam_inventory_request_prices}, gets the pricing for a specific item definition.
 *
 * @param {Real} item_def_id The item definition id to retrieve the price for.
 * @returns {Struct.SteamInventoryItemPrice} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_result_ready
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be triggered whenever an inventory result transitions from `SteamApiResult.Pending` to any other completed state, see ${function.steam_inventory_get_result_status} for the complete list of states. There will always be exactly one callback per handle.
 * 
 * See: [ISteamInventory::SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t)
 *
 * @param {Function} callback The function to be called when an inventory result is ready.
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_result_ready
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_inventory_set_callback_result_ready}.
 *
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_full_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be triggered when ${function.steam_inventory_get_all_items} successfully returns a result which is newer / fresher than the last known result. (It will not trigger if the inventory hasn't changed, or if results from two overlapping calls are reversed in flight and the earlier result is already known to be stale/out-of-date.)
 * 
 * The regular [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) callback will still be triggered immediately afterwards; this is an additional notification for your convenience.
 * 
 * See: [ISteamInventory::SteamInventoryFullUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryFullUpdate_t)
 *
 * @param {Function} callback The function to be called when a full inventory update occurs.
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_full_update
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_inventory_set_callback_full_update}.
 *
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_definition_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be triggered whenever item definitions have been updated, which could be in response to ${function.steam_inventory_load_item_definitions} or any time new item definitions are available (e.g., from the dynamic addition of new item types while players are still in-game).
 * 
 * See: [ISteamInventory::SteamInventoryDefinitionUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryDefinitionUpdate_t)
 *
 * @param {Function} callback The function to be called when item definitions are updated.
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_definition_update
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_inventory_set_callback_definition_update}.
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_published_file_subscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call when subscribed to a published file on remote storage.
 * 
 * See: [ISteamRemoteStorage::RemoteStoragePublishedFileSubscribed_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileSubscribed_t)
 *
 * @param {Function} callback The function to be called when a published file is subscribed to.
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_published_file_subscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_remote_storage_set_callback_published_file_subscribed}.
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_published_file_unsubscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call when subscribed to a published file on remote storage.
 * 
 * See: [ISteamRemoteStorage::RemoteStoragePublishedFileUnsubscribed_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileUnsubscribed_t)
 *
 * @param {Function} callback The function to be called when a published file is unsubscribed from.
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_published_file_unsubscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_remote_storage_set_callback_published_file_unsubscribed}.
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_local_file_change
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call in case of a local file change. If a Steam app is flagged for supporting dynamic Steam Cloud sync, and a sync occurs, this callback will be posted to the app if any local files changed.
 * 
 * See: [ISteamRemoteStorage::RemoteStorageLocalFileChange_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageLocalFileChange_t)
 *
 * @param {Function} callback The function to be called when a local file change is detected.
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_local_file_change
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_remote_storage_set_callback_local_file_change}.
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_is_cloud_enabled_for_account
 * @description > **Steamworks Function**: [ISteamRemoteStorage::IsCloudEnabledForAccount](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#IsCloudEnabledForAccount)
 *
 * This function checks if the account wide Steam Cloud setting is enabled for this user; or if they disabled it in the Settings->Cloud dialog.
 * 
 * Ensure that you are also checking ${function.steam_remote_storage_is_cloud_enabled_for_app}, as these two options are mutually exclusive.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_is_cloud_enabled_for_app
 * @description > **Steamworks Function**: [ISteamRemoteStorage::IsCloudEnabledForApp](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#IsCloudEnabledForApp)
 *
 * This function checks if the per game Steam Cloud setting is enabled for this user; or if they disabled it in the Game Properties->Update dialog.
 * 
 * Ensure that you are also checking ${function.steam_remote_storage_is_cloud_enabled_for_account}, as these two options are mutually exclusive.
 * 
 * It's generally recommended that you allow the user to toggle this setting within your in-game options, you can toggle it with ${function.steam_remote_storage_set_cloud_enabled_for_app}.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_cloud_enabled_for_app
 * @description > **Steamworks Function**: [ISteamRemoteStorage::SetCloudEnabledForApp](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#SetCloudEnabledForApp)
 *
 * This function toggles whether the Steam Cloud is enabled for your application.
 * 
 * This setting can be queried with ${function.steam_remote_storage_is_cloud_enabled_for_app}.
 * 
 * [[Note: This must only ever be called as the direct result of the user explicitly requesting that it's enabled or not. This is typically accomplished with a checkbox within your in-game options.]]
 *
 * @param {Bool} enabled Enable (`true`) or disable (`false`) the Steam Cloud for this application.
 * @function_end
 */

/**
 * @function steam_remote_storage_file_write
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWrite](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWrite)
 *
 * This function creates a new file, writes the bytes to the file, and then closes the file. If the target file already exists, it is overwritten.
 * 
 * [[Note: This is a synchronous call and as such is a will block your calling thread on the disk IO, and will also block the SteamAPI, which can cause other threads in your application to block. To avoid "hitching" due to a busy disk on the client machine using ${function.steam_remote_storage_file_write_async}, the asynchronous version of this API is recommended.]]
 *
 * @param {String} file_name The name of the file to write to.
 * @param {Buffer} data The buffer containing the bytes to write to the file.
 * @param {Real} bytes The number of bytes to write to the file.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_read
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileRead](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileRead)
 *
 * This function opens a binary file, reads the contents of the file into a buffer, and then closes the file.
 *
 * @param {String} file_name The name of the file to read from.
 * @param {Buffer} out_data The buffer that the file will be read into. This buffer must be at least the same size provided to `max_bytes`.
 * @param {Real} max_bytes The amount of bytes to read. Generally obtained from ${function.steam_remote_storage_get_file_size}.
 * @returns {Real} The number of bytes read, or 0 if the file doesn't exist or the read fails.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_delete
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileDelete](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileDelete)
 *
 * This function deletes a file from the local disk, and propagates that delete to the cloud.
 * 
 * This is meant to be used when a user actively deletes a file. Use ${function.steam_remote_storage_file_forget} if you want to remove a file from the Steam Cloud but retain it on the user's local disk.
 * 
 * When a file has been deleted it can be re-written with ${function.steam_remote_storage_file_write} to reupload it to the Steam Cloud.
 *
 * @param {String} file_name The name of the file that will be deleted.
 * @returns {Bool} `true` if the file exists and has been successfully deleted; otherwise, `false` if the file did not exist.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_exists
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileExists](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileExists)
 *
 * This function checks whether the specified file exists.
 *
 * @param {String} file_name The name of the file.
 * @returns {Bool} `true` if the file exists; otherwise, `false`.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_persisted
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FilePersisted](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FilePersisted)
 *
 * This function checks if a specific file is persisted in the Steam cloud.
 *
 * @param {String} file_name The name of the file.
 * @returns {Bool} `true` if the file exists and the file is persisted in the Steam Cloud, `false` if ${function.steam_remote_storage_file_forget} was called on it and is only available locally.
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_size
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileSize](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileSize)
 *
 * This function gets the specified file's size in bytes.
 *
 * @param {String} file_name The name of the file.
 * @returns {Real} The size of the file in bytes. Returns 0 if the file does not exist.
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_timestamp
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileTimestamp](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileTimestamp)
 *
 * This function gets the specified file's last modified timestamp in Unix epoch format (seconds since Jan 1st 1970).
 *
 * @param {String} file_name The name of the file.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_count
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileCount](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileCount)
 *
 * This function gets the total number of local files synchronized by Steam Cloud.
 * 
 * Used for enumeartion with ${function.steam_remote_storage_get_file_name_and_size}.
 *
 * @returns {Real} The number of files present for the current user, including files in subfolders.
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_name_and_size
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileNameAndSize](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileNameAndSize)
 *
 * This function gets the file name and size of a file from the index.
 * 
 * [[Note: You must call ${function.steam_remote_storage_get_file_count} first to get the number of files.]]
 *
 * @param {Real} index The index of the file, this should be between 0 and the value returned by ${function.steam_remote_storage_get_file_count}.
 * @returns {Struct.SteamRemoteStorageFileNameAndSize} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_quota
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetQuota](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetQuota)
 *
 * This function gets the number of bytes available, and used on the user's Steam Cloud storage.
 *
 * @returns {Struct.SteamRemoteStorageQuota} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_sync_platforms
 * @description > **Steamworks Function**: [ISteamRemoteStorage::SetSyncPlatforms](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#SetSyncPlatforms)
 *
 * This function allows you to specify which operating systems a file will be synchronised to.
 * 
 * Use this if you have a multiplatform game but have data which is incompatible between platforms.
 * 
 * Files default to `SteamRemoteStoragePlatform.All` when they are first created. You can use the bitwise OR operator, "|" to specify multiple platforms.
 *
 * @param {String} file_name The name of the file.
 * @param {Enum.SteamRemoteStoragePlatform} platforms The platforms that the file will be synchronised to.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_sync_platforms
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetSyncPlatforms](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetSyncPlatforms)
 *
 * This function obtains the platforms that the specified file will synchronise to.
 *
 * @param {String} file_name The name of the file.
 * @returns {Enum.SteamRemoteStoragePlatform} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_forget
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileForget](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileForget)
 *
 * This function deletes the file from remote storage, but leaves it on the local disk and remains accessible from the API.
 * 
 * When you are out of Cloud space, this can be used to allow calls to ${function.steam_remote_storage_file_write} to keep working without needing to make the user delete files.
 * 
 * How you decide which files to forget are up to you. It could be a simple Least Recently Used (LRU) queue or something more complicated.
 * 
 * Requiring the user to manage their Cloud-ised files for a game, while is possible to do, it is never recommended. For instance, "Which file would you like to delete so that you may store this new one?" removes a significant advantage of using the Cloud in the first place: its transparency.
 * 
 * Once a file has been deleted or forgotten, calling ${function.steam_remote_storage_file_write} will resynchronise it in the Cloud. Rewriting a forgotten file is the only way to make it persisted again.
 *
 * @param {String} file_name The name of the file that will be forgotten.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_open
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamOpen](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamOpen)
 *
 * This function creates a new file output stream allowing you to stream out data to the Steam Cloud file in chunks. If the target file already exists, it is not overwritten until ${function.steam_remote_storage_file_write_stream_close} has been called.
 * 
 * To write data out to this stream you can use ${function.steam_remote_storage_file_write_stream_write_chunk}, and then to close or cancel you use ${function.steam_remote_storage_file_write_stream_close} and ${function.steam_remote_storage_file_write_stream_cancel} respectively.
 *
 * @param {String} file_name The name of the file to write to.
 * @returns {Real} The file write stream handle, or `SteamRemoteStorageUgcFileStreamHandleInvalid` in case the stream couldn't be opened
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_write_chunk
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamWriteChunk](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamWriteChunk)
 *
 * This function writes a blob of data to the file write stream.
 *
 * @param {Real} stream The file write stream to write to.
 * @param {Buffer} data The buffer containing the data to write to the stream.
 * @param {Real} bytes The size of the data to write, in bytes.
 * @returns {Bool} `true` if the data was successfully written to the file write stream, `false` if not.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_close
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamClose](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamClose)
 *
 * This function closes a file write stream that was started by ${function.steam_remote_storage_file_write_stream_open}.
 * 
 * This flushes the stream to the disk, overwriting the existing file if there was one.
 *
 * @param {Real} stream The file write stream to close.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_cancel
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamCancel](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamCancel)
 *
 * This function cancels a file write stream that was started by ${steam_remote_storage_file_write_stream_cancel}.
 * 
 * This trashes all of the data written and closes the write stream, but if there was an existing file with this name, it remains untouched.
 *
 * @param {Real} stream The file write stream to cancel.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_cached_ugc_count
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetCachedUGCCount](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetCachedUGCCount)
 *
 * This function returns the cached UGC count.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_cached_ugc_handle
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetCachedUGCHandle](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetCachedUGCHandle)
 *
 * This function gets a handle to the cached UGC with the given index.
 *
 * @param {Real} index The index of the cached UGC, between 0 and the cached UGC count.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_ugc_details
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetUGCDetails](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetUGCDetails)
 *
 * This function gets the details of the UGC content referred to by the given handle.
 *
 * @param {Real} ugc_handle The handle of the UGC content to get the details for.
 * @returns {Struct.SteamRemoteStorageUgcDetails} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_ugc_read
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UGCRead](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UGCRead)
 *
 * This function reads the UGC content referred to by the given handle into a buffer.
 *
 * @param {Real} ugc_handle The handle of the UGC content to read.
 * @param {Buffer} out_data The buffer that the content will be read into.
 * @param {Real} bytes_to_read The amount of bytes to read into the buffer.
 * @param {Real} offset The offset, in bytes, within the file at which to start reading.
 * @param {Enum.SteamRemoteStorageUgcReadAction} action The action to take when reading the content (controls how the file is held in memory after the read).
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_share
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileShare](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileShare)
 *
 * This function shares the file with the given filename.
 *
 * @param {String} file_name The name of the file to share.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageFileShareResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageFileShareResult_t)
 *
 * This callback is fired in response to sharing a file, and provides a handle that can be used to refer to the shared file.
 *
 * @member {Struct.SteamRemoteStorageFileShareResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_ugc_download
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UGCDownload](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UGCDownload)
 *
 * This function downloads the UGC content referred to by the given handle.
 *
 * @param {Real} ugc_handle The handle of the UGC content to download.
 * @param {Real} priority The download priority, where a lower value indicates a higher priority.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageDownloadUGCResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageDownloadUGCResult_t)
 *
 * This callback is fired in response to a UGC download request, and contains the details of the file that was downloaded.
 *
 * @member {Struct.SteamRemoteStorageDownloadUgcResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_ugc_download_to_location
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UGCDownloadToLocation](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UGCDownloadToLocation)
 *
 * This function downloads the UGC content referred to by the given handle to the given location.
 *
 * @param {Real} ugc_handle The handle of the UGC content to download.
 * @param {String} location The absolute file path to download the content to.
 * @param {Real} priority The download priority, where a lower value indicates a higher priority.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageDownloadUGCResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageDownloadUGCResult_t)
 *
 * This callback is fired in response to a UGC download request, and contains the details of the file that was downloaded.
 *
 * @member {Struct.SteamRemoteStorageDownloadUgcResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_publish_workshop_file
 * @description > **Steamworks Function**: [ISteamRemoteStorage::PublishWorkshopFile](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#PublishWorkshopFile)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {String} file The name of the file to publish.
 * @param {String} preview_file The name of the preview image file to publish.
 * @param {Real} app_id_consumer The consumer app ID that this file is published for.
 * @param {String} title The title of the published file.
 * @param {String} description The description of the published file.
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility The visibility of the published file.
 * @param {String} tags_csv A comma-separated list of tags to apply to the published file.
 * @param {Enum.SteamRemoteStorageWorkshopFileType} file_type The type of workshop file being published.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStoragePublishFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishFileResult_t)
 *
 * This callback is fired when a workshop file has been published, returning the result of the operation and the ID of the newly published file.
 *
 * @member {Struct.SteamRemoteStoragePublishFileResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_create_published_file_update_request
 * @description > **Steamworks Function**: [ISteamRemoteStorage::CreatePublishedFileUpdateRequest](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#CreatePublishedFileUpdateRequest)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} published_file_id The ID of the published file to create an update request for.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_file
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UpdatePublishedFileFile](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UpdatePublishedFileFile)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} update_handle The handle of the update request, returned by ${function.steam_remote_storage_create_published_file_update_request}.
 * @param {String} file The name of the file to set on the published file.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_preview_file
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UpdatePublishedFilePreviewFile](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UpdatePublishedFilePreviewFile)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} update_handle The handle of the update request, returned by ${function.steam_remote_storage_create_published_file_update_request}.
 * @param {String} preview_file The name of the preview image file to set on the published file.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_title
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UpdatePublishedFileTitle](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UpdatePublishedFileTitle)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} update_handle The handle of the update request, returned by ${function.steam_remote_storage_create_published_file_update_request}.
 * @param {String} title The title to set on the published file.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_description
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UpdatePublishedFileDescription](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UpdatePublishedFileDescription)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} update_handle The handle of the update request, returned by ${function.steam_remote_storage_create_published_file_update_request}.
 * @param {String} description The description to set on the published file.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_visibility
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UpdatePublishedFileVisibility](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UpdatePublishedFileVisibility)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} update_handle The handle of the update request, returned by ${function.steam_remote_storage_create_published_file_update_request}.
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility The visibility to set on the published file.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_tags
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UpdatePublishedFileTags](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UpdatePublishedFileTags)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} update_handle The handle of the update request, returned by ${function.steam_remote_storage_create_published_file_update_request}.
 * @param {String} tags_csv A comma-separated list of tags to set on the published file.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_commit_published_file_update
 * @description > **Steamworks Function**: [ISteamRemoteStorage::CommitPublishedFileUpdate](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#CommitPublishedFileUpdate)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} update_handle The handle of the update request to commit, returned by ${function.steam_remote_storage_create_published_file_update_request}.
 * @param {Function} [callback] The function to call upon completion.
 * @function_end 
 */

/**
 * @function steam_remote_storage_subscribe_published_file
 * @description > **Steamworks Function**: [ISteamRemoteStorage::SubscribePublishedFile](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#SubscribePublishedFile)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} published_file_id The ID of the published file to subscribe to.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageSubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageSubscribePublishedFileResult_t)
 *
 * Called when the user has subscribed to a piece of UGC.
 *
 * @member {Struct.SteamRemoteStorageSubscribePublishedFileResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_unsubscribe_published_file
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UnsubscribePublishedFile](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UnsubscribePublishedFile)
 *
 * This function is deprecated and only used with the deprecated RemoteStorage based Workshop API.
 *
 * @param {Real} published_file_id The ID of the published file to unsubscribe from.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageUnsubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageUnsubscribePublishedFileResult_t)
 *
 * Called when the user has unsubscribed from a piece of UGC.
 *
 * @member {Struct.SteamRemoteStorageUnsubscribePublishedFileResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_set_callback_lobby_data_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the lobby metadata has changed.
 * 
 * See: [ISteamMatchmaking::LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t)
 *
 * @param {Function} callback The function to be called when lobby data is updated.
 * @function_end
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_data_update
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_matchmaking_set_callback_lobby_data_update}.
 *
 * @function_end
 */

/**
 * @function steam_matchmaking_set_callback_lobby_chat_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a lobby chat room state has changed. This is usually sent when a user has joined or left the lobby.
 * 
 * See: [ISteamMatchmaking::LobbyChatUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatUpdate_t)
 *
 * @param {Function} callback The function to be called when a lobby chat update event occurs (a user joins, leaves or disconnects).
 * @function_end
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_chat_update
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_matchmaking_clear_callback_lobby_chat_update}.
 *
 * @function_end
 */

/**
 * @function steam_matchmaking_set_callback_lobby_chat_msg
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a chat (text or binary) message for this lobby has been received. After getting this you must use ${function.steam_matchmaking_get_lobby_chat_entry} to retrieve the contents of this message.
 * 
 * See: [ISteamMatchmaking::LobbyChatMsg_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatMsg_t)
 *
 * @param {Function} callback The function to be called when a lobby chat message is received.
 * @function_end
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_chat_msg
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_matchmaking_set_callback_lobby_chat_msg}.
 *
 * @function_end
 */

/**
 * @function steam_matchmaking_set_callback_lobby_game_created
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a game server has been set via ${function.steam_matchmaking_set_lobby_game_server} for all of the members of the lobby to join. It's up to the individual clients to take action on this; the typical game behaviour is to leave the lobby and connect to the specified game server; but the lobby may stay open throughout the session if desired.
 * 
 * See: [ISteamMatchmaking::LobbyGameCreated_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyGameCreated_t)
 *
 * @param {Function} callback The function to be called when a game server is set for a lobby.
 * @function_end
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_game_created
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_matchmaking_set_callback_lobby_game_created}.
 *
 * @function_end
 */

/**
 * @function steam_matchmaking_set_callback_lobby_invite
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when someone has invited you to join a Lobby. Normally you don't need to do anything with this, as the Steam UI will also display a '<user> has invited you to the lobby, join?' notification and message.
 * 
 * See: [ISteamMatchmaking::LobbyInvite_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyInvite_t)
 *
 * @param {Function} callback The function to be called when the user receives a lobby invitation.
 * @function_end
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_invite
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_matchmaking_set_callback_lobby_invite}.
 *
 * @function_end
 */

/**
 * @function steam_matchmaking_create_lobby
 * @description > **Steamworks Function**: [ISteamMatchmaking::CreateLobby](https://partner.steamgames.com/doc/api/ISteamMatchmaking#CreateLobby)
 *
 * This function creates a new matchmaking lobby.
 *
 * @param {Enum.SteamMatchmakingLobbyType} lobby_type The type and visibility of this lobby. This can be changed later via the lobby type setting.
 * @param {Real} max_members The maximum number of players that can join this lobby. This can not be above 250.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamMatchmaking::LobbyCreated_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyCreated_t)
 *
 * Result of our request to create a Lobby. At this point, the lobby has been joined and is ready for use, a [LobbyEnter_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyEnter_t) callback will also be received (since the local user is joining their own lobby).
 *
 * @member {Struct.SteamMatchmakingLobbyCreated} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_join_lobby
 * @description > **Steamworks Function**: [ISteamMatchmaking::JoinLobby](https://partner.steamgames.com/doc/api/ISteamMatchmaking#JoinLobby)
 *
 * This function joins an existing lobby.
 * 
 * The lobby Steam ID can be obtained either from a search with ${function.steam_matchmaking_request_lobby_list}, joining on a friend, or from an invite.
 *
 * @param {Real} lobby_id The Steam ID of the lobby to join.
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamMatchmaking::LobbyEnter_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyEnter_t)
 *
 * Received upon attempting to enter a lobby. Lobby metadata is available to use immediately after receiving this.
 *
 * @member {Struct.SteamMatchmakingLobbyEnter} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_request_lobby_list
 * @description > **Steamworks Function**: [ISteamMatchmaking::RequestLobbyList](https://partner.steamgames.com/doc/api/ISteamMatchmaking#RequestLobbyList)
 *
 * This function gets a filtered list of relevant lobbies.
 * 
 * There can only be one active lobby search at a time. The old request will be canceled if a new one is started. Depending on the user's connection to the Steam back-end, this call can take from 300ms to 5 seconds to complete, and has a timeout of 20 seconds.
 * 
 * [[Note: To filter the results you MUST call the `steam_matchmaking_add_request_lobby_list_*` functions before calling this. The filters are cleared on each call to this function.]]
 * 
 * [[Note: If ${function.steam_matchmaking_add_request_lobby_list_distance_filter} is not called, `SteamMatchmakingLobbyDistanceFilter.Default` will be used, which will only find matches in the same or nearby regions.]]
 * 
 * [[Note: This will only return lobbies that are not full, and only lobbies that are `SteamMatchmakingLobbyType.Public` or `SteamMatchmakingLobbyType.Invisible`, and are set to joinable with ${function.steam_matchmaking_set_lobby_joinable}.]]
 *
 * @param {Function} [callback] The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamMatchmaking::LobbyMatchList_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyMatchList_t)
 *
 * Result when requesting the lobby list.
 *
 * @member {Struct.SteamMatchmakingLobbyMatchList} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_string_filter
 * @description > **Steamworks Function**: [ISteamMatchmaking::AddRequestLobbyListStringFilter](https://partner.steamgames.com/doc/api/ISteamMatchmaking#AddRequestLobbyListStringFilter)
 *
 * This function adds a string comparison filter to the next ${function.steam_matchmaking_request_lobby_list} call.
 *
 * @param {String} key The filter key name to match. This can not be longer than the maximum lobby key length.
 * @param {String} value The string to match.
 * @param {Enum.SteamMatchmakingLobbyComparison} comparison The type of comparison to make.
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_numerical_filter
 * @description > **Steamworks Function**: [ISteamMatchmaking::AddRequestLobbyListNumericalFilter](https://partner.steamgames.com/doc/api/ISteamMatchmaking#AddRequestLobbyListNumericalFilter)
 *
 * This function adds a numerical comparison filter to the next ${function.steam_matchmaking_request_lobby_list} call.
 *
 * @param {String} key The filter key name to match. This can not be longer than the maximum lobby key length.
 * @param {Real} value The number to match.
 * @param {Enum.SteamMatchmakingLobbyComparison} comparison The type of comparison to make.
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_near_value_filter
 * @description > **Steamworks Function**: [ISteamMatchmaking::AddRequestLobbyListNearValueFilter](https://partner.steamgames.com/doc/api/ISteamMatchmaking#AddRequestLobbyListNearValueFilter)
 *
 * This function sorts the results closest to the specified value. Near filters don't actually filter out values, they just influence how the results are sorted. You can specify multiple near filters, with the first near filter influencing the most, and the last near filter influencing the least.
 *
 * @param {String} key The filter key name to match. This can not be longer than the maximum lobby key length.
 * @param {Real} value The value that lobbies will be sorted on.
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_distance_filter
 * @description > **Steamworks Function**: [ISteamMatchmaking::AddRequestLobbyListDistanceFilter](https://partner.steamgames.com/doc/api/ISteamMatchmaking#AddRequestLobbyListDistanceFilter)
 *
 * This function sets the physical distance for which we should search for lobbies, this is based on the user's IP address and a IP location map on the Steam backend.
 *
 * @param {Enum.SteamMatchmakingLobbyDistanceFilter} distance Specifies the maximum distance.
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_result_count_filter
 * @description > **Steamworks Function**: [ISteamMatchmaking::AddRequestLobbyListResultCountFilter](https://partner.steamgames.com/doc/api/ISteamMatchmaking#AddRequestLobbyListResultCountFilter)
 *
 * This function sets the maximum number of lobbies to return. The lower the count the faster it is to download the lobby results & details to the client.
 *
 * @param {Real} max_results The maximum number of lobbies to return.
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_by_index
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyByIndex](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyByIndex)
 *
 * This function gets the Steam ID of the lobby at the specified index after receiving the ${function.steam_matchmaking_request_lobby_list} results.
 * 
 * [[Note: This should only be called after a [LobbyMatchList_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyMatchList_t) call result is received.]]
 *
 * @param {Real} index The index of the lobby to get the Steam ID of, from 0 to the number of matching lobbies.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_leave_lobby
 * @description > **Steamworks Function**: [ISteamMatchmaking::LeaveLobby](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LeaveLobby)
 *
 * This function leaves a lobby that the user is currently in; this takes effect immediately on the client side, other users in the lobby will be notified by a [LobbyChatUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatUpdate_t) callback.
 *
 * @param {Real} lobby_id The Steam ID of the lobby to leave.
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_owner
 * @description > **Steamworks Function**: [ISteamMatchmaking::SetLobbyOwner](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SetLobbyOwner)
 *
 * This function changes who the lobby owner is.
 * 
 * This can only be set by the owner of the lobby. This will trigger a [LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t) for all of the users in the lobby, each user should update their local state to reflect the new owner. This is typically accomplished by displaying a crown icon next to the owner's name.
 *
 * @param {Real} lobby_id The Steam ID of the lobby where the owner change will take place.
 * @param {Real} new_owner_id The Steam ID of the user that will be the new owner of the lobby; they must be in the lobby.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_owner
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyOwner](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyOwner)
 *
 * This function returns the current lobby owner.
 * 
 * There always one lobby owner - if the current owner leaves, another user in the lobby will become the owner automatically. It is possible (but rare) to join a lobby just as the owner is leaving, thus entering a lobby with self as the owner.
 * 
 * [[Note: You must be a member of the lobby to access this.]]
 *
 * @param {Real} lobby_id The Steam ID of the lobby to get the owner of.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_num_lobby_members
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetNumLobbyMembers](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetNumLobbyMembers)
 *
 * This function gets the number of users in a lobby.
 * 
 * This is used for iteration, after calling this then ${function.steam_matchmaking_get_lobby_member_by_index} can be used to get the Steam ID of each person in the lobby. Persona information for other lobby members (name, avatar, etc.) is automatically received and accessible via the ${module.friends} module.
 * 
 * [[Note: The current user must be in the lobby to retrieve the Steam IDs of other users in that lobby.]]
 *
 * @param {Real} lobby_id The Steam ID of the lobby to get the number of members of.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_member_by_index
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyMemberByIndex](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyMemberByIndex)
 *
 * This function gets the Steam ID of the lobby member at the given index.
 * 
 * [[Note: You must call ${function.steam_matchmaking_get_num_lobby_members} before calling this.]]
 * 
 * [[Note: The current user must be in the lobby to retrieve the Steam IDs of other users in that lobby.]]
 *
 * @param {Real} lobby_id This MUST be the same lobby used in the previous call to ${function.steam_matchmaking_get_num_lobby_members}.
 * @param {Real} member_index An index between 0 and the number of lobby members.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_data
 * @description > **Steamworks Function**: [ISteamMatchmaking::SetLobbyData](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SetLobbyData)
 *
 * This function sets a key/value pair in the lobby metadata. This can be used to set the the lobby name, current map, game mode, etc.
 * 
 * This can only be set by the owner of the lobby. Lobby members should use ${function.steam_matchmaking_set_lobby_member_data} instead.
 * 
 * Each user in the lobby will be receive notification of the lobby data change via a [LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t) callback, and any new users joining will receive any existing data.
 * 
 * This will only send the data if it has changed. There is a slight delay before sending the data so you can call this repeatedly to set all the data you need to and it will automatically be batched up and sent after the last sequential call.
 *
 * @param {Real} lobby_id The Steam ID of the lobby to set the metadata for.
 * @param {String} key The key to set the data for. This can not be longer than the maximum lobby key length.
 * @param {String} value The value to set. This can not be longer than the maximum chat metadata size.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_data
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyData](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyData)
 *
 * This function gets the metadata associated with the specified key from the specified lobby.
 * 
 * [[Note: This can only get metadata from lobbies that the client knows about, either after receiving a list of lobbies from [LobbyMatchList_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyMatchList_t), retrieving the data with ${function.steam_matchmaking_request_lobby_data} or after joining a lobby.]]
 *
 * @param {Real} lobby_id The Steam ID of the lobby to get the metadata from.
 * @param {String} key The key to get the value of.
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_delete_lobby_data
 * @description > **Steamworks Function**: [ISteamMatchmaking::DeleteLobbyData](https://partner.steamgames.com/doc/api/ISteamMatchmaking#DeleteLobbyData)
 *
 * This function removes a metadata key from the lobby.
 * 
 * This can only be done by the owner of the lobby.
 * 
 * This will only send the data if the key existed. There is a slight delay before sending the data so you can call this repeatedly to set all the data you need to and it will automatically be batched up and sent after the last sequential call.
 *
 * @param {Real} lobby_id The Steam ID of the lobby to delete the metadata for.
 * @param {String} key The key to delete the data for.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_data_count
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyDataCount](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyDataCount)
 *
 * This function gets the number of metadata keys set on the specified lobby.
 * 
 * This is used for iteration, after calling this then ${function.steam_matchmaking_get_lobby_data_by_index} can be used to get the key/value pair of each piece of metadata.
 * 
 * [[Note: This can only get metadata from lobbies that the client knows about, either after receiving a list of lobbies from [LobbyMatchList_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyMatchList_t), retrieving the data with ${function.steam_matchmaking_request_lobby_data} or after joining a lobby.]]
 * 
 * [[Note: This should typically only ever be used for debugging purposes.]]
 *
 * @param {Real} lobby_id The Steam ID of the lobby to get the data count from.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_data_by_index
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyDataByIndex](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyDataByIndex)
 *
 * This function gets a lobby metadata key/value pair by index.
 * 
 * [[Note: You must call ${function.steam_matchmaking_get_lobby_data_count} before calling this.]]
 *
 * @param {Real} lobby_id This MUST be the same lobby used in the previous call to ${function.steam_matchmaking_get_lobby_data_count}.
 * @param {Real} index An index between 0 and the lobby data count.
 * @param {Buffer} key_out Returns the name of the key at the specified index by copying it into this buffer.
 * @param {Real} key_max The size of the buffer allocated for the key. This typically should be the maximum lobby key length.
 * @param {Buffer} val_out Returns the value associated with the key at the specified index by copying it into this buffer.
 * @param {Real} val_max The size of the buffer allocated for the value. This typically should be the maximum chat metadata size.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_member_data
 * @description > **Steamworks Function**: [ISteamMatchmaking::SetLobbyMemberData](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SetLobbyMemberData)
 *
 * This function sets per-user metadata for the local user.
 * 
 * Each user in the lobby will be receive notification of the lobby data change via a [LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t) callback, and any new users joining will receive any existing data.
 * 
 * There is a slight delay before sending the data so you can call this repeatedly to set all the data you need to and it will automatically be batched up and sent after the last sequential call.
 *
 * @param {Real} lobby_id The Steam ID of the lobby to set our metadata in.
 * @param {String} key The key to set the data for. This can not be longer than the maximum lobby key length.
 * @param {String} value The value to set. This can not be longer than the maximum chat metadata size.
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamMatchmaking::LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t)
 * 
 * Triggered when the lobby metadata has changed.
 * 
 * @member {Struct.SteamMatchmakingLobbyDataUpdate} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_get_lobby_member_data
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyMemberData](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyMemberData)
 *
 * This function gets per-user metadata from another player in the specified lobby.
 * 
 * This can only be queried from members in lobbies that you are currently in.
 *
 * @param {Real} lobby_id The Steam ID of the lobby that the other player is in.
 * @param {Real} member_id The Steam ID of the player to get the metadata from.
 * @param {String} key The key to get the value of.
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_send_lobby_chat_msg
 * @description > **Steamworks Function**: [ISteamMatchmaking::SendLobbyChatMsg](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SendLobbyChatMsg)
 *
 * This function broadcasts a chat (text or binary data) message to the all of the users in the lobby.
 * 
 * All users in the lobby (including the local user) will receive a [LobbyChatMsg_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatMsg_t) callback with the message.
 * 
 * If you're sending binary data, you should prefix a header to the message so that you know to treat it as your custom data rather than a plain old text message.
 * 
 * For communication that needs to be arbitrated (for example having a user pick from a set of characters, and making sure only one user has picked a character), you can use the lobby owner as the decision maker. ${function.steam_matchmaking_get_lobby_owner} returns the current lobby owner. There is guaranteed to always be one and only one lobby member who is the owner. So for the choose-a-character scenario, the user who is picking a character would send the binary message 'I want to be Zoe', the lobby owner would see that message, see if it was OK, and broadcast the appropriate result (user X is Zoe).
 * 
 * These messages are sent via the Steam back-end, and so the bandwidth available is limited. For higher-volume traffic like voice or game data, you'll want to use the [Steam Networking API](https://partner.steamgames.com/doc/features/multiplayer/networking) (${module.networking}).
 *
 * @param {Real} lobby_id The Steam ID of the lobby to send the chat message to.
 * @param {Buffer} msg The buffer holding the message data to send. This can be text or binary data, up to 4 kilobytes in size.
 * @param {Real} bytes The size in bytes of the message data; if it is a text message then this should include the null terminator.
 * @returns {Bool}
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamMatchmaking::LobbyChatMsg_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatMsg_t)
 * 
 * Triggered when chat (text or binary) message for this lobby has been received.
 * 
 * @member {Struct.SteamMatchmakingLobbyChatMsg} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_get_lobby_chat_entry
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyChatEntry](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyChatEntry)
 *
 * This function gets the data from a lobby chat message after receiving a lobby chat message callback.
 *
 * @param {Real} lobby_id The Steam ID of the lobby to get the chat entry from.
 * @param {Real} chat_id The index of the chat entry in the lobby.
 * @param {Buffer} out_buffer Returns the message data by copying it into this buffer. This buffer should be up to 4 kilobytes.
 * @param {Real} out_max_bytes The size of the buffer allocated for the output data.
 * @returns {Struct.SteamMatchmakingLobbyChatEntry} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_filter_slots_available
 * @description > **Steamworks Function**: [ISteamMatchmaking::AddRequestLobbyListFilterSlotsAvailable](https://partner.steamgames.com/doc/api/ISteamMatchmaking#AddRequestLobbyListFilterSlotsAvailable)
 *
 * This function filters to only return lobbies with the specified number of open slots available.
 *
 * @param {Real} slots_available The number of open slots that must be open.
 * @function_end 
 */

/**
 * @function steam_matchmaking_request_lobby_data
 * @description > **Steamworks Function**: [ISteamMatchmaking::RequestLobbyData](https://partner.steamgames.com/doc/api/ISteamMatchmaking#RequestLobbyData)
 *
 * This function refreshes all of the metadata for a lobby that you're not in right now.
 * 
 * You will never do this for lobbies you're a member of, that data will always be up to date. You can use this to refresh lobbies that you have obtained from ${function.steam_matchmaking_request_lobby_list} or that are available via friends.
 *
 * @param {Real} steam_id_lobby The Steam ID of the lobby to refresh the metadata of.
 * @returns {Bool}
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamMatchmaking::LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t)
 * 
 * Triggered when the lobby metadata has changed.
 * 
 * @member {Struct.SteamMatchmakingLobbyDataUpdate} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_set_lobby_joinable
 * @description > **Steamworks Function**: [ISteamMatchmaking::SetLobbyJoinable](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SetLobbyJoinable)
 *
 * This function sets whether or not a lobby is joinable by other players. This always defaults to enabled for a new lobby.
 * 
 * If joining is disabled, then no players can join, even if they are a friend or have been invited.
 * 
 * Lobbies with joining disabled will not be returned from a lobby search.
 *
 * @param {Real} steam_id_lobby The Steam ID of the lobby.
 * @param {Bool} joinable Enable (true) or disable (false) allowing users to join this lobby.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_invite_user_to_lobby
 * @description > **Steamworks Function**: [ISteamMatchmaking::InviteUserToLobby](https://partner.steamgames.com/doc/api/ISteamMatchmaking#InviteUserToLobby)
 *
 * This function invites another user to the lobby.
 *
 * @param {Real} steam_id_lobby The Steam ID of the lobby to invite the user to.
 * @param {Real} steam_id_invitee The Steam ID of the person who will be invited.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_game_server
 * @description > **Steamworks Function**: [ISteamMatchmaking::SetLobbyGameServer](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SetLobbyGameServer)
 *
 * This function sets the game server associated with the lobby.
 * 
 * This can only be set by the owner of the lobby.
 * 
 * Either the IP/Port or the Steam ID of the game server must be valid, depending on how you want the clients to be able to connect.
 * 
 * A [LobbyGameCreated_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyGameCreated_t) callback will be sent to all players in the lobby, usually at this point, the users will join the specified game server.
 *
 * @param {Real} steam_id_lobby The Steam ID of the lobby to set the game server information for.
 * @param {Real} ip Sets the IP address of the game server, in host order, i.e 127.0.0.1 == 0x7f000001.
 * @param {Real} port Sets the connection port of the game server, in host order.
 * @param {Real} steam_id_gs Sets the Steam ID of the game server. Use a nil Steam ID if you're not setting this.
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamMatchmaking::LobbyGameCreated_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyGameCreated_t)
 * 
 * Triggered when a game server has been set via ${function.steam_matchmaking_set_lobby_game_server} for all of the members of the lobby to join.
 * 
 * @member {Struct.SteamMatchmakingLobbyGameCreated} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_matchmaking_set_linked_lobby
 * @description > **Steamworks Function**: [ISteamMatchmaking::SetLinkedLobby](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SetLinkedLobby)
 *
 * This function links two lobbies for the purposes of checking player compatibility using the frenemy system. The connection port of the game server, in host order, if it's set.
 *
 * @param {Real} steam_id_lobby The Steam ID of the primary lobby.
 * @param {Real} steam_id_lobby_dependent The Steam ID that will be linked to the primary lobby.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_game_server
 * @description > **Steamworks Function**: [ISteamMatchmaking::GetLobbyGameServer](https://partner.steamgames.com/doc/api/ISteamMatchmaking#GetLobbyGameServer)
 *
 * This function gets the details of a game server set in a lobby.
 * 
 * Either the IP/Port or the Steam ID of the game server has to be valid, depending on how you want the clients to be able to connect.
 *
 * @param {Real} steam_id_lobby The Steam ID of the lobby to get the game server information from.
 * @returns {Struct.SteamMatchmakingLobbyGameServer} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_set_callback_session_request
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a remote host is sending us a message, and we do not already have a session with them.
 * 
 * See: [ISteamNetworkingMessages::SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t)
 *
 * @param {Function} callback The function to be called when a session request event occurs.
 * @function_end 
 */

/**
 * @function steam_networking_messages_clear_callback_session_request
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_networking_messages_set_callback_session_request}.
 *
 * @function_end 
 */

/**
 * @function steam_networking_messages_set_callback_session_failed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when we fail to establish a connection, or we detect that communications have been disrupted in an unusual way. There is no notification when a peer proactively closes the session. ("Closed by peer" is not a concept of UDP-style communications, and ISteamNetworkingMessages is primarily intended to make porting UDP code easy.)
 * 
 * See: [ISteamNetworkingMessages::SteamNetworkingMessagesSessionFailed_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionFailed_t)
 *
 * @param {Function} callback The function to be called when a session failed event occurs.
 * @function_end 
 */

/**
 * @function steam_networking_messages_clear_callback_session_failed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_networking_messages_set_callback_session_failed}.
 * 
 * Sending a message to a host will also implicitly accept any incoming connection from that host.
 * 
 * It is guaranteed that reliable messages to the same host on the same channel will be be received by the remote host (if they are received at all) exactly once, and in the same order that they were sent.
 *
 * @function_end 
 */

/**
 * @function steam_networking_messages_send_message_to_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::SendMessageToUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SendMessageToUser)
 *
 * This function sends a message to the specified host. If we don't already have a session with that user, a session is implicitly created. There might be some handshaking that needs to happen before we can actually begin sending message data. If this handshaking fails and we can't get through, an error will be posted via the callback [SteamNetworkingMessagesSessionFailed_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionFailed_t).
 * 
 * Sending a message to a host will also implicitly accept any incoming connection from that host.
 *
 * @param {Real} steam_id_remote The identity of the host to send the message to; if a session does not already exist with that user, one is implicitly created.
 * @param {Buffer} data The buffer holding the message data to send.
 * @param {Real} bytes The size of the data to send, in bytes.
 * @param {Real} send_flags A bitmask of ${Enum.SteamNetworkingSendFlags} options that determine the delivery guarantees for the message.
 * @param {Real} remote_channel A routing channel number you can use to help route the message to different systems on the remote host.
 * @returns {Real} The number of messages returned into your list. (0 if no message are available on that channel.)
 * @function_end 
 */

/**
 * @function steam_networking_messages_receive_one_on_channel
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::ReceiveMessagesOnChannel](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#ReceiveMessagesOnChannel)
 *
 * This function reads the next message that has been sent from another user via ${function.steam_networking_messages_send_message_to_user} on the given channel. 
 *
 * @param {Real} local_channel The channel to read messages from (must match the channel used when sending).
 * @param {Buffer} out_data The buffer into which the received message data will be written.
 * @param {Real} max_bytes The maximum number of bytes to read into the buffer.
 * @param {Real} offset The offset within the buffer at which to start writing the received data.
 * @returns {Struct.SteamNetworkingMessagesReceived} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_accept_session_with_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::AcceptSessionWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#AcceptSessionWithUser)
 *
 * This function is called in response to a [SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t) callback, which is posted when a user attempts to message you first.
 * 
 * SteamNetworkingMessagesSessionRequest_t are posted when a user tries to send you a message, and you haven't tried to talk to them first. If you don't want to talk to them, just ignore the request. If the user continues to send you messages, SteamNetworkingMessagesSessionRequest_t callbacks will continue to be posted periodically.
 * 
 * Calling ${function.steam_networking_messages_send_message_to_user} will implicitly accept any pending session request to that user.
 *
 * @param {Real} steam_id_remote The identity of the remote user whose session request you are accepting.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_close_session_with_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::CloseSessionWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#CloseSessionWithUser)
 *
 * This function is called when you're done talking to a user on a specific channel to immediately free up resources under-the-hood. If the remote user tries to send data to you again, another [SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t) callback will be posted.
 * 
 * Note that sessions that go unused for a few minutes are automatically timed out.
 *
 * @param {Real} steam_id_remote The identity of the remote user whose session you want to close.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_close_channel_with_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::CloseChannelWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#CloseChannelWithUser)
 *
 * This function is called when you're done talking to a user on a specific channel. Once all open channels to a user have been closed, the open session to the user will be closed, and any new data from this user will trigger a [SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t) callback.
 *
 * @param {Real} steam_id_remote The identity of the remote user whose channel you want to close.
 * @param {Real} local_channel The specific channel to close with the user.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_callback_connection_status_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called whenever a connection is created, destroyed, or changes state.
 * 
 * See: [ISteamNetworkingSockets::SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t)
 *
 * @param {Function} callback The function to be called when the connection status changes.
 * @function_end 
 */

/**
 * @function steam_networking_sockets_clear_callback_connection_status_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_networking_sockets_set_callback_connection_status_changed}.
 *
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_listen_socket_ip
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreateListenSocketIP](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateListenSocketIP)
 *
 * This function creates a "server" socket that listens for clients to connect to by calling ${function.steam_networking_sockets_connect_by_ip_address}, over ordinary UDP (IPv4 or IPv6).
 * 
 * You must select a specific local port to listen on and set it as the port field of the local address.
 * 
 * When a client attempts to connect, a [SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t) will be posted. The connection will be in the `SteamNetworkingConnectionState.Connecting` state.
 *
 * @param {Real} port The local port to bind the listen socket to.
 * @returns {Real}
 * 
 * @event callback
 * @description **Steamworks Callback**: [ISteamNetworkingSockets::SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t)
 * 
 * Triggered whenever a connection is created, destroyed, or changes state.
 * 
 * @event_end
 * @function_end 
 */

/**
 * @function steam_networking_sockets_close_listen_socket
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CloseListenSocket](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CloseListenSocket)
 *
 * This function destroys a listen socket. All the connections that were accepted on the listen socket are closed ungracefully.
 *
 * @param {Real} listen_socket The listen socket to destroy; all connections accepted on it are closed ungracefully.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_connect_by_ip_address
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ConnectByIPAddress](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ConnectByIPAddress)
 *
 * This function creates a connection and begins talking to a "server" over UDP at the given IPv4 or IPv6 address. The remote host must be listening with a matching call to ${function.steam_networking_sockets_create_listen_socket_ip} on the specified port.
 * 
 * A [SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t) callback will be triggered when we start connecting, and then another one on either timeout or successful connection.
 *
 * @param {String} ip The IPv4 or IPv6 address of the server to connect to.
 * @param {Real} port The port of the server to connect to.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_accept_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::AcceptConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#AcceptConnection)
 *
 * This function accepts an incoming connection that has been received on a listen socket.
 * 
 * When a connection attempt is received (perhaps after a few basic handshake packets have been exchanged to prevent trivial spoofing), a connection interface object is created in the `SteamNetworkingConnectionState.Connecting` state and a [SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t) is posted. At this point, your application MUST either accept or close the connection. (It may not ignore it.) Accepting the connection will transition it either into the connected state, or the finding route state, depending on the connection type.
 *
 * @param {Real} conn The handle of the incoming connection to accept.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_close_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CloseConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CloseConnection)
 *
 * This function disconnects from the remote host and invalidates the connection handle. Any unread data on the connection is discarded.
 * 
 * If the connection has already ended (`SteamNetworkingConnectionState.ClosedByPeer` or `SteamNetworkingConnectionState.ProblemDetectedLocally`) and you are just freeing up the connection object, then `reason`, `debug` and `linger` are ignored.
 *
 * @param {Real} conn The connection to disconnect.
 * @param {Real} reason An application-defined code that will be received on the other end and recorded for diagnostic purposes.
 * @param {String} debug An optional human-readable diagnostic string that will be received on the other end.
 * @param {Bool} linger Whether to attempt to flush any remaining reliable messages before actually closing the connection.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_user_data
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SetConnectionUserData](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionUserData)
 *
 * This function sets the connection user data, which is returned in various queries and structures.
 *
 * @param {Real} conn The connection handle whose user data you want to set.
 * @param {Real} user_data The user data value to associate with the connection.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_user_data
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetConnectionUserData](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionUserData)
 *
 * This function fetches connection user data.
 *
 * @param {Real} conn The connection handle whose user data you want to fetch.
 * @returns {Real} The user data value, or -1 if the handle is invalid or if you haven't set any userdata on the connection
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_name
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SetConnectionName](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionName)
 *
 * This function sets a name for the connection, used mostly for debugging.
 *
 * @param {Real} conn The connection handle whose name you want to set.
 * @param {String} name The name to assign to the connection, used mostly for debugging.
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_name
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetConnectionName](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionName)
 *
 * This function fetches the connection name.
 *
 * @param {Real} conn The connection handle whose name you want to fetch.
 * @returns {String} The connection name, or an empty string `""` if the handle is invalid
 * @function_end 
 */

/**
 * @function steam_networking_sockets_send_message_to_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SendMessageToConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SendMessageToConnection)
 *
 * This function sends a message to the remote host on the specified connection.
 *
 * @param {Real} conn The connection to send the message on.
 * @param {Buffer} data The buffer holding the message data to send.
 * @param {Real} bytes The size of the data to send, in bytes.
 * @param {Enum.SteamNetworkingSendFlags} send_flags The send flags that determine the delivery guarantees, buffering behaviour, etc. for the message.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_flush_messages_on_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::FlushMessagesOnConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#FlushMessagesOnConnection)
 *
 * This function flushes any messages waiting on the Nagle timer and sends them at the next transmission opportunity.
 * 
 * If Nagle is enabled (it's on by default) then when calling ${function.steam_networking_sockets_send_message_to_connection} the message will be buffered, up to the Nagle time before being sent, to merge small messages into the same packet. (See `k_ESteamNetworkingConfig_NagleTime`)
 *
 * @param {Real} conn The connection whose Nagle-buffered messages should be flushed.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_receive_one_on_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ReceiveMessagesOnConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ReceiveMessagesOnConnection)
 *
 * This function fetches the next available message from the connection, if any.
 * 
 * The order of the messages returned in the array is relevant. Reliable messages will be received in the order they were sent.
 * 
 * Unreliable messages may be dropped, or delivered out of order with respect to each other or with respect to reliable messages.
 *
 * @param {Real} conn The connection to read messages from.
 * @param {Buffer} out_data The buffer into which the received message data will be written.
 * @param {Real} max_bytes The maximum number of bytes to read into the buffer.
 * @param {Real} offset The offset within the buffer at which to start writing the received data.
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_info
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetConnectionInfo](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionInfo)
 *
 * This function returns basic information about the high-level state of the connection.
 *
 * @param {Real} conn The connection handle to query for basic high-level state information.
 * @returns {Struct.SteamNetworkingSocketsConnectionInfo} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_detailed_connection_status
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetDetailedConnectionStatus](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetDetailedConnectionStatus)
 *
 * This function returns very detailed connection stats in diagnostic text format. Useful for dumping to a log, etc. The format of this information is subject to change.
 *
 * @param {Real} conn The connection handle to query for detailed diagnostic status.
 * @returns {String} Connection stats, or an empty string `""` on failure
 * @function_end 
 */

/**
 * @function steam_networking_sockets_run_callbacks
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::RunCallbacks](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#RunCallbacks)
 *
 * This function runs the callbacks related to Steamworks' Networking Sockets functionality.
 *
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_socket_pair
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreateSocketPair](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateSocketPair)
 *
 * This function creates a pair of connections that are talking to each other, e.g. a loopback connection. This is very useful for testing, or so that your client/server code can work the same even when you are running a local "server".
 * 
 * The two connections will immediately be placed into the connected state, and no callbacks will be posted immediately. After this, if you close either connection, the other connection will receive a callback, exactly as if they were communicating over the network. You must close *both* sides in order to fully clean up the resources!
 * 
 * Both connections will assume a generic "localhost" identity.
 *
 * @param {Bool} use_network_loopback If true, traffic is sent through the local loopback (127.0.0.1), supporting simulated lag and loss; otherwise internal buffers are used.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_listen_socket_p2p
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreateListenSocketP2P](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateListenSocketP2P)
 *
 * This function works like ${function.steam_networking_sockets_create_listen_socket_ip}, but the clients connect using ${function.steam_networking_sockets_connect_p2p}, with the traffic relayed through the Valve network.
 *
 * @param {Real} local_virtual_port The local virtual port that specifies how clients can connect to this socket using ConnectP2P; use zero for a single socket.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_connect_p2p
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ConnectP2P](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ConnectP2P)
 *
 * This function begins connecting to a peer that is identified using a platform-specific identifier.
 *
 * @param {Real} steam_id_remote The platform-specific identity of the remote peer to connect to.
 * @param {Real} remote_virtual_port The remote virtual port on the peer to connect to.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_listen_socket_address
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetListenSocketAddress](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetListenSocketAddress)
 *
 * This function returns the local IP and port that a listen socket created via ${function.steam_networking_sockets_create_listen_socket_ip} is bound to.
 *
 * @param {Real} listen_socket The listen socket whose bound local IP and port you want to retrieve.
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreatePollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreatePollGroup)
 *
 * This function creates a new poll group.
 * 
 * You should destroy the poll group when you are done using ${function.steam_networking_sockets_destroy_poll_group}.
 *
 * @returns {Real} The poll group handle
 * @function_end 
 */

/**
 * @function steam_networking_sockets_destroy_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::DestroyPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#DestroyPollGroup)
 *
 * This function destroys a poll group created with ${function.steam_networking_sockets_create_poll_group}.
 * 
 * If there are any connections in the poll group, they are removed from the group, and left in a state where they are not part of any poll group. Returns `false` if passed an invalid poll group handle.
 *
 * @param {Real} poll_group The poll group to destroy.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SetConnectionPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionPollGroup)
 *
 * This function assigns a connection to a poll group. Note that a connection may only belong to a single poll group. Adding a connection to a poll group implicitly removes it from any other poll group it is in.
 * 
 * 
 * 
 * @param {Real} conn The connection to assign to the poll group.
 * @param {Real} poll_group The target poll group; pass an invalid handle to remove the connection from any group.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_receive_messages_on_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ReceiveMessagesOnPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ReceiveMessagesOnPollGroup)
 *
 * This function works like ReceiveMessagesOnConnection, but it returns messages from any connection in the poll group.
 * 
 * You can pass k_HSteamNetPollGroup_Invalid to remove a connection from its current poll group without adding it to a new poll group.
 * 
 * If there are received messages currently pending on the connection, an attempt is made to add them to the queue of messages for the poll group in approximately the order that would have applied if the connection was already part of the poll group at the time that the messages were received.
 * 
 * Returns `false` if the connection handle is invalid, or if the poll group handle is invalid (and not k_HSteamNetPollGroup_Invalid).
 * 
 * @param {Real} poll_group The poll group to read messages from.
 * @param {Buffer} out_data The buffer into which the received message data will be written.
 * @param {Real} max_bytes The maximum number of bytes to read into the buffer.
 * @param {Real} offset The offset within the buffer at which to start writing the received data.
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_reservation_notification
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called by Steam when a user "follows" a previously created beacon. This lets you know that you should be prepared for the user to join your game.
 * 
 * See: [ISteamParties::ReservationNotificationCallback_t](https://partner.steamgames.com/doc/api/isteamparties#ReservationNotificationCallback_t)
 *
 * @param {Function} callback The function to be called when a reservation notification event occurs.
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_reservation_notification
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_parties_set_callback_reservation_notification}.
 *
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_available_beacon_locations_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the list of available locations for posting a beacon has been updated.
 * 
 * See: [ISteamParties::AvailableBeaconLocationsUpdated_t](https://partner.steamgames.com/doc/api/isteamparties#AvailableBeaconLocationsUpdated_t)
 *
 * @param {Function} callback The function to be called when the available beacon locations are updated.
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_available_beacon_locations_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_parties_set_callback_available_beacon_locations_updated}.
 *
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_active_beacons_updated
 * @description > **Steamworks Function**: N / A
 * 
 * This function sets the function to be called when the list of active beacons visible to the current user has changed.
 * 
 * See: [ISteamParties::ActiveBeaconsUpdated_t](https://partner.steamgames.com/doc/api/isteamparties#ActiveBeaconsUpdated_t)
 * 
 * @param {Function} callback The function to be called when the active beacons are updated.
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_active_beacons_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_parties_set_callback_active_beacons_updated}.
 *
 * @function_end 
 */

/**
 * @function steam_parties_get_num_available_beacon_locations
 * @description > **Steamworks Function**: [ISteamParties::GetNumAvailableBeaconLocations](https://partner.steamgames.com/doc/api/ISteamParties#GetNumAvailableBeaconLocations)
 *
 * This function gets the number of locations in which you are able to post a party beacon.
 *
 * @returns {Struct.SteamPartiesAvailableBeaconLocationCount} 
 * @function_end 
 */

/**
 * @function steam_parties_get_available_beacon_locations
 * @description > **Steamworks Function**: [ISteamParties::GetAvailableBeaconLocations](https://partner.steamgames.com/doc/api/ISteamParties#GetAvailableBeaconLocations)
 *
 * This function gets the list of locations in which you can post a party beacon. 
 *
 * @returns {Struct.SteamPartiesAvailableBeaconLocations} 
 * @function_end 
 */

/**
 * @function steam_parties_create_beacon
 * @description > **Steamworks Function**: [ISteamParties::CreateBeacon](https://partner.steamgames.com/doc/api/ISteamParties#CreateBeacon)
 *
 * This function creates a beacon. You can only create one beacon at a time. Steam will display the beacon in the specified location, and let up to `open_slots` users "follow" the beacon to your party.
 * 
 * If users join your party through other matchmaking, adjust the number of remaining open slots using ${function.steam_parties_change_num_open_slots}.
 *
 * @param {Real} open_slots The number of reservation slots to create for the beacon, normally the party size minus one.
 * @param {Enum.SteamPartiesBeaconLocationType} beacon_location_type The type of the beacon location, taken from one of the locations returned by ${function.steam_parties_get_available_beacon_locations}.
 * @param {Real} beacon_location_id The location ID of the beacon location, taken from one of the locations returned by ${function.steam_parties_get_available_beacon_locations}.
 * @param {String} connect_string The connect string that will be given to the game on launch for a user that follows the beacon.
 * @param {String} metadata Additional game metadata that can be set on the beacon, and is exposed via ${function.steam_parties_get_beacon_details}.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Bool}
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamParties::CreateBeaconCallback_t](https://partner.steamgames.com/doc/api/ISteamParties#CreateBeaconCallback_t)
 *
 * This callback is returned as the response to a call to create a beacon. A successful result means your beacon has been posted in the desired location and you can begin receiving reservation notifications as users follow it.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} beacon_id Beacon ID of the newly created beacon.
 * @event_end
 * @function_end
 */

/**
 * @function steam_parties_on_reservation_completed
 * @description > **Steamworks Function**: [ISteamParties::OnReservationCompleted](https://partner.steamgames.com/doc/api/ISteamParties#OnReservationCompleted)
 *
 * This function notifies Steam that a reserved user has successfully joined your party, once a user who followed your beacon has joined.
 *
 * @param {Real} beacon_id The beacon ID for the beacon created by your process.
 * @param {Real} user_steam_id The Steam ID of the user joining your party.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_change_num_open_slots
 * @description > **Steamworks Function**: [ISteamParties::ChangeNumOpenSlots](https://partner.steamgames.com/doc/api/ISteamParties#ChangeNumOpenSlots)
 *
 * This function reduces the number of open slots that Steam is managing through the party beacon when a user joins your party through other matchmaking.
 *
 * @param {Real} beacon_id The beacon ID for the beacon created by your process.
 * @param {Real} open_slots The new number of open slots in your party. This value represents the total number of *new* users that you would like Steam to send to your party.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_destroy_beacon
 * @description > **Steamworks Function**: [ISteamParties::DestroyBeacon](https://partner.steamgames.com/doc/api/ISteamParties#DestroyBeacon)
 *
 * This function destroys the Steam party beacon. This will immediately cause Steam to stop showing the beacon in the target location. Note that any users currently in-flight may still arrive at your party expecting to join.
 * 
 * Your game should call this method when either the party has been filled and the game is beginning, or the user has decided to abandon creating a party. The beacon will be destroyed automatically when your game exits, but the preferred behavior is for the game to call ${function.steam_parties_destroy_beacon} at the right time.
 *
 * @param {Real} beacon_id The beacon ID to be destroyed.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_get_num_active_beacons
 * @description > **Steamworks Function**: [ISteamParties::GetNumActiveBeacons](https://partner.steamgames.com/doc/api/ISteamParties#GetNumActiveBeacons)
 *
 * This function gets the number of active party beacons created by other users for your game, that are visible to the current user.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_parties_get_beacon_by_index
 * @description > **Steamworks Function**: [ISteamParties::GetBeaconByIndex](https://partner.steamgames.com/doc/api/ISteamParties#GetBeaconByIndex)
 *
 * This function is used with ${function.steam_parties_get_num_active_beacons} to iterate the active beacons visible to the current user.
 *
 * @param {Real} index The index of the beacon.
 * @returns {Real} Party beacon ID
 * @function_end 
 */

/**
 * @function steam_parties_get_beacon_details
 * @description > **Steamworks Function**: [ISteamParties::GetBeaconDetails](https://partner.steamgames.com/doc/api/ISteamParties#GetBeaconDetails)
 *
 * This function gets details about the specified beacon.
 *
 * @param {Real} beacon_id The beacon ID to query.
 * @returns {Struct.SteamPartiesBeaconDetails} 
 * @function_end 
 */

/**
 * @function steam_parties_join_party
 * @description > **Steamworks Function**: [ISteamParties::JoinParty](https://partner.steamgames.com/doc/api/ISteamParties#JoinParty)
 *
 * This function is called when the user indicates they wish to join the party advertised by a given beacon. On success, Steam will reserve a slot for this user in the party and return the necessary "join game" string to use to complete the connection.
 *
 * @param {Real} beacon_id The beacon ID for the party you wish to join.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Bool}
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamParties::JoinPartyCallback_t](https://partner.steamgames.com/doc/api/ISteamParties#JoinPartyCallback_t)
 *
 * This callback serves as the response to a call to join a party. When it succeeds, you have secured a slot in the beacon owner's party and should use the connect string to link up with their game and finish joining.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} beacon_id Beacon ID used in the attempt.
 * @member {Real} beacon_owner_steam_id Steam ID of the creator of the beacon used in the attempt.
 * @member {String} connect_string The connect string to use to join the party.
 * @event_end
 * @function_end
 */

/**
 * @function steam_parties_get_beacon_location_data
 * @description > **Steamworks Function**: [ISteamParties::GetBeaconLocationData](https://partner.steamgames.com/doc/api/ISteamParties#GetBeaconLocationData)
 *
 * This function queries general metadata for the given beacon location. For instance the Name, or the URL for an icon if the location type supports icons (for example, the icon for a Steam Chat Room Group).
 *
 * @param {Enum.SteamPartiesBeaconLocationType} beacon_location_type The type of the beacon location to query.
 * @param {Real} beacon_location_id The location ID of the beacon location to query.
 * @param {Enum.SteamPartiesBeaconLocationData} data_kind The type of location data you wish to get.
 * @returns {String} 
 * @function_end 
 */

/**
 * @struct SteamId
 * @description > **Steamworks Struct**: [steam_api::CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID)
 *
 * This struct holds details about the globally unique identifier for all Steam accounts, Steam groups, Lobbies and Chat rooms.
 *
 * @member {Real} id64 Unique ID.
 * @member {Real} account_id The account ID.
 * @member {Real} account_instance The account instance.
 * @member {Enum.SteamApiUniverse} universe The universe, or self-contained Steam instance, this account belongs to.
 * @member {Enum.SteamApiAccountType} account_type The type of account.
 * @member {Bool} is_valid Whether this Steam ID is valid.
 * @member {Bool} is_lobby Whether this Steam ID is a lobby.
 * @member {Bool} is_individual Whether this is an individual user account ID.
 * @member {Bool} is_game_server Whether this is a persistent (not anonymous) game server account ID.
 * @member {Bool} is_anon_game_server Whether this is an anonymous game server account.
 * @member {Bool} is_anon_user Whether this is an anonymous user account.
 * @member {Bool} is_content_server Whether this is a content server account ID.
 * @member {Bool} is_clan Whether this is a clan account ID.
 * @member {Bool} is_chat Whether this is a chat account ID.
 * @struct_end
 */

/**
 * @struct SteamFriendsGetFollowerCountResult
 * @description > **Steamworks Struct**: [ISteamFriends::FriendsGetFollowerCount_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsGetFollowerCount_t)
 *
 * This struct holds the result of ${function.steam_friends_get_follower_count}.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} steam_id The Steam ID of the user we requested the follower count for.
 * @member {Real} count The number of followers the user has.
 * @struct_end
 */

/**
 * @struct SteamFriendsIsFollowingResult
 * @description > **Steamworks Struct**: [FriendsIsFollowing_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsIsFollowing_t)
 *
 * This struct holds the result of ${function.steam_friends_is_following}.
 *
 * @member {Real} result The result of the operation.
 * @member {Real} steam_id The Steam ID that was checked.
 * @member {Bool} is_following Are we following the user? (`true`) or not? (`false`)
 * @struct_end
 */

/**
 * @struct SteamFriendsEnumerateFollowingListResult
 * @description > **Steamworks Struct**: [ISteamFriends::FriendsEnumerateFollowingList_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsEnumerateFollowingList_t)
 *
 * This struct holds the result of ${function.steam_friends_enumerate_following_list}.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Array[Real]} steam_ids The list of users that we are following.
 * @member {Real} results_returned The number of results returned in `steam_ids`.
 * @member {Real} total_result_count The total number of people we are following. If this is greater than `results_returned` then you should make a subsequent call to ${function.steam_friends_enumerate_following_list} with `results_returned` as the index to get the next portion of followers.
 * @struct_end
 */

/**
 * @struct SteamFriendsRequestClanOfficerListResult
 * @description > **Steamworks Struct**: [ISteamFriends::ClanOfficerListResponse_t](https://partner.steamgames.com/doc/api/ISteamFriends#ClanOfficerListResponse_t)
 *
 * This struct holds the return of a request officer list call.
 *
 * @member {Real} result Was the call successful? If it wasn't, this may indicate a temporary loss of connection to Steam. If this returns `true`, this does not necessarily mean that all of the info for this Steam group has been downloaded.
 * @member {Real} clan_id The Steam group that we just got the officer list for.
 * @member {Real} officers  The number of officers in the group. This is the same as ${function.steam_friends_get_clan_officer_count}.
 * @struct_end
 */

/**
 * @struct SteamFriendsDownloadClanActivityCountsResult
 * @description > **Steamworks Struct**: [ISteamFriends::DownloadClanActivityCountsResult_t](https://partner.steamgames.com/doc/api/ISteamFriends#DownloadClanActivityCountsResult_t)
 *
 * Called when a Steam group activity has been received.
 *
 * @member {Real} result Was the call successful?
 * @struct_end
 */

/**
 * @struct SteamFriendsAvatarImageLoaded
 * @description > **Steamworks Struct**: [ISteamFriends::AvatarImageLoaded_t](https://partner.steamgames.com/doc/api/ISteamFriends#AvatarImageLoaded_t)
 *
 * This struct holds the result of when a large avatar is loaded if you have tried requesting it when it was unavailable.
 *
 * @member {Real} steam_id_64 The Steam ID that the avatar has been loaded for.
 * @member {Real} image_handle The Steam image handle of the now loaded image.
 * @member {Real} width Width of the loaded image.
 * @member {Real} height Height of the loaded image.
 * @struct_end 
 */

/**
 * @struct SteamFriendsClanActivityCounts
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_friends_get_clan_activity_counts}.
 *
 * @member {Bool} ok `true` if the data was successfully returned. `false` if the provided Steam ID is invalid or the local client does not have info about the Steam group and sets all the other parameters to 0.
 * @member {Real} online The number of members that are online.
 * @member {Real} in_game The number of members that are in game (excluding those with their status set to offline).
 * @member {Real} chatting The number of members in the group chat room.
 * @struct_end
 */

/**
 * @struct SteamFriendsClanChatMessage
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_friends_get_clan_chat_message}.
 *
 * @member {Real} bytes_copied The number of bytes copied.
 * @member {String} text The text of the chat message.
 * @member {Enum.SteamFriendsChatEntryType} entry_type The type of chat entry that was received.
 * @member {Real} chatter_steam_id_64 The Steam ID of the user that sent the message.
 * @struct_end
 */

/**
 * @struct SteamFriendsFriendGamePlayed
 * @description > **Steamworks Struct**: [ISteamFriends::FriendGameInfo_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendGameInfo_t)
 *
 * This struct holds information returned by ${function.steam_friends_get_friend_game_played}.
 *
 * @member {Bool} ok `true` if the user is a friend and is in a game; otherwise, `false`.
 * @member {Real} game_id The game ID that the friend is playing.
 * @member {Real} game_ip_v4 The IP of the server the friend is playing on.
 * @member {Real} game_port The port of the server the friend is playing on.
 * @member {Real} query_port The query port of the server the friend is playing on.
 * @member {Real} lobby_steam_id_64 The Steam ID of the lobby the friend is in.
 * @struct_end
 */

/**
 * @struct SteamFriendsFriendMessage
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_friends_get_friend_message}.
 *
 * @member {Real} bytes_copied The number of bytes copied.
 * @member {Enum.SteamFriendsChatEntryType} entry_type The type of chat entry that was received.
 * @member {String} data The message data.
 * @struct_end
 */

/**
 * @struct SteamFriendsPersonaStateChange
 * @description > **Steamworks Struct**: [ISteamFriends::PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t)
 *
 * This struct holds information related to a friend's status change.
 *
 * @member {Real} steam_id Steam ID of the user who changed.
 * @member {Real} change_flags A bit-wise union of ${Enum.SteamFriendsPersonaChange} values.
 * @struct_end 
 */

/**
 * @struct SteamFriendsGameOverlayActivated
 * @description > **Steamworks Struct**: [ISteamFriends::GameOverlayActivated_t](partner.steamgames.com/doc/api/ISteamFriends#GameOverlayActivated_t)
 *
 * This struct holds information posted when the [Steam Overlay](https://partner.steamgames.com/doc/features/overlay) activates or deactivates.
 *
 * @member {Bool} active `true` if it's just been activated, otherwise `false`.
 * @struct_end
 */

/**
 * @struct SteamFriendsGameRichPresenceJoinRequested
 * @description > **Steamworks Struct**: [ISteamFriends::GameRichPresenceJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameRichPresenceJoinRequested_t)
 *
 * This struct holds the data of the callback triggered when the user tries to join a game from their friends list or after a user accepts an invite by a friend with ${function.steam_friends_invite_user_to_game}.
 *
 * @member {Real} steam_id_friend The friend they joined through. This will be invalid if not directly via a friend.
 * @member {String} connect_string The value associated with the `"connect"` Rich Presence key.
 * @struct_end
 */

/**
 * @struct SteamFriendsGameLobbyJoinRequested
 * @description > **Steamworks Struct**: [ISteamFriends::GameLobbyJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameLobbyJoinRequested_t)
 *
 * This struct holds information posted when the user tries to join a lobby from their friends list or from an invite.
 *
 * @member {Real} steam_id_friend The friend they joined through. This will be invalid if not directly via a friend.
 * @member {Real} steam_id_lobby The Steam ID of the lobby to connect to.
 * @struct_end
 */

/**
 * @struct SteamFriendsFriendRichPresenceUpdate
 * @description > **Steamworks Struct**: [ISteamFriends::FriendRichPresenceUpdate_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendRichPresenceUpdate_t)
 *
 * This struct holds the result of when Rich Presence data has been updated for a user, this can happen automatically when friends in the same game update their rich presence, or after a call to ${function.steam_friends_request_friend_rich_presence}.
 *
 * @member {Real} steam_id_friend The Steam ID of the user whose rich presence has changed.
 * @member {Real} app_id The App ID of the game. This should always be the current game.
 * @struct_end
 */

/**
 * @struct SteamFriendsGameServerChangeRequested
 * @description > **Steamworks Struct**: [ISteamFriends::GameServerChangeRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameServerChangeRequested_t)
 *
 * This struct holds information provided when the user tries to join a different game server from their friends list.
 *
 * @member {String} server Server address (e.g. "127.0.0.1:27015", "tf2.valvesoftware.com")
 * @member {String} password Server password, if any.
 * @struct_end 
 */

/**
 * @struct SteamAppsFileDetailsResult
 * @description > **Steamworks Struct**: [ISteamApps::FileDetailsResult_t](https://partner.steamgames.com/doc/api/ISteamApps#FileDetailsResult_t)
 *
 * This struct holds information received after requesting the details of a specific file.
 *
 * @member {Real} result Was the call successful? `SteamApiResult.Ok` if it was; otherwise, `SteamApiResult.FileNotFound` if the file was not found. None of the other fields are filled out if the call was not successful.
 * @member {Real} file_size The original file size in bytes.
 * @member {Real} flags The file's flags.
 * @member {String} sha1 The original file SHA-1 hash.
 * @struct_end
 */

/**
 * @struct SteamAppsDlcData
 * @description > N / A
 *
 * This struct holds metadata about a DLC.
 *
 * @member {Bool} ok Whether the request was successful.
 * @member {Real} app_id The App ID of the DLC.
 * @member {Bool} available Whether the DLC is currently available on the Steam store. Will be `false` if the DLC does not have a visible store page.
 * @member {String} name The name of the DLC.
 * @struct_end 
 */

/**
 * @struct SteamAppsTimedTrialStatus
 * @description > **Steamworks Struct**: [ISteamApps::TimedTrialStatus_t](https://partner.steamgames.com/doc/api/ISteamApps#TimedTrialStatus_t)
 *
 * This struct holds information sent every minute when an appID is owned via a timed trial.
 *
 * @member {Bool} ok `true` if the active user is subscribed to the current appID via a timed trial otherwise `false` for any other type of license.
 * @member {Real} seconds_allowed The number of seconds the timed trial will list.
 * @member {Real} seconds_played The number of seconds that the user has played so far.
 * @struct_end 
 */

/**
 * @struct SteamAppsInstallDir
 * @description > **Steamworks Struct**: N / A
 *
 * This struct 
 *
 * @member {Real} bytes_copied
 * @member {String} path
 * @struct_end 
 */

/**
 * @struct SteamAppsBetaName
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} name
 * @struct_end 
 */

/**
 * @struct SteamAppsNumBetas
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information on app and beta branches, as returned by ${function.steam_apps_get_num_betas}.
 *
 * @member {Real} total The total number of known app branches.
 * @member {Real} available The number of beta branches available to the current user.
 * @member {Real} private_count How many of these are private betas.
 * @struct_end 
 */

/**
 * @struct SteamAppsBetaInfo
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds details about an app beta branch.
 *
 * @member {Bool} ok `true` if passed in branch index is valid; `false` otherwise.
 * @member {Real} flags Set of flags (${Enum.SteamBetaBranchFlags}) describing current branch state.
 * @member {Real} build_id Content BuildID set live on this branch.
 * @member {String} beta_name Beta branch name.
 * @member {String} description Beta branch description.
 * @struct_end 
 */

/**
 * @struct SteamAppsDlcDownloadProgress
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the download progress for optional DLC.
 *
 * @member {Bool} ok `true` if the specified DLC exists and is currently downloading; otherwise, `false`.
 * @member {Real} bytes_downloaded The number of bytes downloaded.
 * @member {Real} bytes_total The total size of the download in bytes.
 * @struct_end 
 */

/**
 * @struct SteamAppsLaunchCommandLine
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} bytes_copied
 * @member {String} command_line
 * @struct_end 
 */

/**
 * @struct SteamAppsInstallSize
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} bytes_install_size
 * @member {Real} bytes_download_size
 * @struct_end 
 */

/**
 * @struct SteamAppsDlcInstallDir
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} bytes_copied
 * @member {String} path
 * @struct_end 
 */

/**
 * @struct SteamAppsLanguageInfo
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} language_name
 * @member {String} language_code
 * @struct_end 
 */

/**
 * @struct SteamAppsDlcInstalled
 * @description > **Steamworks Struct**: [ISteamApps::DlcInstalled_t](https://partner.steamgames.com/doc/api/ISteamApps#DlcInstalled_t)
 *
 * This struct holds information received after the current user gains ownership of DLC and that DLC is installed.
 *
 * @member {Real} app_id App ID of the DLC that was installed.
 * @struct_end 
 */

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

/**
 * @struct SteamUserStoreAuthUrlResponse
 * @description > **Steamworks Struct**: [ISteamUser::StoreAuthURLResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#StoreAuthURLResponse_t)
 *
 * This struct holds information on a received store authentication URL.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {String} url The authenticated URL that was requested.
 * @struct_end 
 */

/**
 * @struct SteamUserEncryptedAppTicketResponse
 * @description > **Steamworks Struct**: [ISteamUser::EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t)
 *
 * This struct holds information returned upon receipt of an encrypted application ticket.
 *
 * @member {Enum.SteamApiResult} result Was the call successful? Possible results:
 * 
 * * SteamApiResult.Ok - Success!
 * * SteamApiResult.NoConnection - A connection to Steam could not be established.
 * * SteamApiResult.DuplicateRequest - There is already a pending request.
 * * SteamApiResult.LimitExceeded - This call is subject to a 60 second rate limit, and you have exceeded that.
 * @struct_end
 */

/**
 * @struct SteamUserDurationControl
 * @description > **Steamworks Struct**: [ISteamUser::DurationControl_t](https://partner.steamgames.com/doc/api/ISteamUser#DurationControl_t)
 *
 * This struct holds information on a user's playtime/duration-control information.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} app_id The app ID the duration control information applies to.
 * @member {Bool} applicable Whether duration control is applicable to this user and app (i.e. whether the user is subject to the playtime restrictions).
 * @member {Real} csecs_last_5h The number of seconds the user has played in the last 5 hours, in centiseconds.
 * @member {Enum.SteamUserDurationControlProgress} progress The current duration-control progress level (a `SteamUserDurationControlProgress` value describing whether the user should be encouraged to take a break).
 * @member {Enum.SteamUserDurationControlNotification} notification The notification that should be shown to the user, if any.
 * @struct_end
 */

/**
 * @struct SteamUserMarketEligibilityResponse
 * @description > **Steamworks Struct**: [ISteamUser::MarketEligibilityResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#MarketEligibilityResponse_t)
 *
 * This struct holds info on a user's Steam Community Market eligibility.
 *
 * @member {Bool} allowed Whether the user is allowed to use the Steam Community Market.
 * @member {Real} not_allowed_reason The reason the user is not allowed to use the market, if applicable (an `EMarketNotAllowedReasonFlags` bitfield).
 * @member {Real} allowed_at_time The Unix timestamp of when the user will be allowed to use the market, if currently restricted.
 * @member {Real} steam_purchase_time The Unix timestamp of the user's first Steam purchase, used for some eligibility checks.
 * @member {Real} day_steam_guard_required_days The number of days Steam Guard must have been active before the user is allowed to use the market.
 * @member {Real} day_new_device_cooldown The number of days a newly added device must wait before the user is allowed to use the market.
 * @struct_end
 */

/**
 * @struct SteamNetworkingIdentity
 * @description > **Steamworks Struct**: [SteamNetworkingIdentity](https://partner.steamgames.com/doc/api/steamnetworkingtypes#SteamNetworkingIdentity)
 *
 * This struct represents the identity of a network host.
 *
 * @member {Enum.SteamNetworkingIdentityType} type The type of identity.
 * @member {Real} steam_id The Steam ID associated with the identity.
 * @member {String} ip The IP address of the identity.
 * @member {Real} port The network port of the identity.
 * @member {String} generic_string A generic string associated with the identity.
 * @struct_end
 */

/**
 * @struct SteamUserAuthSessionTicket
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a call to ${function.steam_user_get_auth_session_ticket}.
 *
 * @member {Real} auth_ticket_handle The auth ticket handle.
 * @member {Real} ticket_size The size of the ticket as written to the buffer.
 * @struct_end
 */

/**
 * @struct SteamUserAvailableVoice
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information about the size of available voice data.
 *
 * @member {Enum.SteamApiVoiceResult} result The result of the request.
 * @member {Real} compressed_bytes The size of the available voice data in bytes.
 * @member {Real} uncompressed_bytes Deprecated.
 * @struct_end
 */

/**
 * @struct SteamUserGetVoiceResult
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a call to ${function.steam_user_get_voice}.
 *
 * @member {Enum.SteamApiVoiceResult} result The result of the call.
 * @member {Real} written_compressed The number of bytes written into the buffer passed to the function.
 * @member {Real} written_uncompressed The number of bytes uncompressed.
 * @struct_end
 */

/**
 * @struct SteamUserGameConnectionToken
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} bytes_written
 * @struct_end 
 */

/**
 * @struct SteamUserDataFolder
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} path
 * @struct_end 
 */

/**
 * @struct SteamUserEncryptedAppTicket
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a call to ${function.steam_user_get_encrypted_app_ticket}.
 *
 * @member {Bool} ok `true` if the call successfully returned an app ticket into the buffer. `false` if not successful.
 * @member {Real} ticket_size The number of bytes copied into the buffer.
 * @struct_end 
 */

/**
 * @struct SteamUserSteamServersConnected
 * @description > **Steamworks Struct**: [ISteamUser::SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t)
 *
 * This struct is received in a `ISteamUser::SteamServersConnected_t` callback.
 *
 * @member {Real} dummy
 * @struct_end
 */

/**
 * @struct SteamUserSteamServersDisconnected
 * @description > **Steamworks Struct**: [ISteamUser::SteamServersDisconnected_t](partner.steamgames.com/doc/api/ISteamUser#SteamServersDisconnected_t)
 *
 * This struct holds information about the reason the client has lost connection to the Steam servers.
 *
 * @member {Real} result The reason we were disconnected from Steam.
 * @struct_end 
 */

/**
 * @struct SteamUserSteamServerConnectFailure
 * @description > **Steamworks Struct**: [ISteamUser::SteamServerConnectFailure_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServerConnectFailure_t)
 *
 * This struct holds information about a failed connection attempt.
 *
 * @member {Real} result The reason why the connection failed.
 * @member {Bool} still_retrying Is the Steam client still trying to connect to the server?
 * @struct_end 
 */

/**
 * @struct SteamUserClientGameServerDeny
 * @description > **Steamworks Struct**: [ISteamUser::ClientGameServerDeny_t](https://partner.steamgames.com/doc/api/ISteamUser#ClientGameServerDeny_t)
 *
 * This struct holds information Sent by the Steam server to the client telling it to disconnect from the specified game server, which it may be in the process of or already connected to.
 *
 * @member {Real} app_id The App ID this call is for. Verify that it's the same as the current App ID with ${function.steam_utils_get_app_id}.
 * @member {Real} game_server_ip The IP of the game server that is telling us to disconnect, in host order, i.e 127.0.0.1 == 0x7f000001.
 * @member {Real} game_server_port The port of the game server that is telling us to disconnect, in host order.
 * @member {Bool} secure Is the game server VAC secure (`true`) or not (`false`)?
 * @member {Real} reason 
 * @struct_end 
 */

/**
 * @struct SteamUserLicensesUpdated
 * @description > **Steamworks Struct**: [ISteamUser::LicensesUpdated_t](https://partner.steamgames.com/doc/api/ISteamUser#LicensesUpdated_t)
 *
 * This struct holds information passed in a `ISteamUser::LicensesUpdated_t` callback.
 *
 * @member {Real} dummy
 * @struct_end
 */

/**
 * @struct SteamUserMicroTxnAuthorizationResponse
 * @description > **Steamworks Struct**: [ISteamUser::MicroTxnAuthorizationResponse_t](partner.steamgames.com/doc/api/ISteamUser#MicroTxnAuthorizationResponse_t)
 *
 * This struct holds information passed in a `ISteamUser::MicroTxnAuthorizationResponse_t` callback, which is called when a user has responded to a microtransaction authorization request.
 *
 * @member {Real} app_id App ID for this microtransaction.
 * @member {Real} order_id Order ID provided for the microtransaction.
 * @member {Bool} authorized Did the user authorise the transaction (`true`) or not (`false`)?
 * @struct_end
 */

/**
 * @struct SteamUtilsApiCallResult
 * @description > **Steamworks Struct**: [ISteamUtils::GetAPICallResult](https://partner.steamgames.com/doc/api/ISteamUtils#GetAPICallResult)
 *
 * This struct holds information returned by ${function.steam_utils_get_api_call_result}.
 *
 * @member {Bool} ok `true` upon success if the API Call is valid and has completed, otherwise `false`.
 * @member {Bool} failed Set to `true` if the API call has encountered a failure.
 * @struct_end
 */

/**
 * @struct SteamUtilsCheckFileSignatureResult
 * @description > **Steamworks Struct**: [ISteamUtils::CheckFileSignature_t](https://partner.steamgames.com/doc/api/ISteamUtils#CheckFileSignature_t)
 *
 * This struct holds information on a file signature check started by ${function.steam_utils_check_file_signature}.
 *
 * @member {Real} result The result of the file signature check (an `ECheckFileSignature` value).
 * @struct_end
 */

/**
 * @struct SteamUtilsLowBatteryPower
 * @description > **Steamworks Struct**: [ISteamUtils::LowBatteryPower_t](partner.steamgames.com/doc/api/ISteamUtils#LowBatteryPower_t)
 *
 * This struct holds information about the battery power left.
 *
 * @member {Real} minutes_battery_left The estimated amount of battery life left in minutes.
 * @struct_end
 */

/**
 * @struct SteamUtilsSteamApiCallCompleted
 * @description > **Steamworks Struct**: [ISteamUtils::SteamAPICallCompleted_t](partner.steamgames.com/doc/api/ISteamUtils#SteamAPICallCompleted_t)
 *
 * This struct holds information passed in a `ISteamUtils::SteamAPICallCompleted_t` callback.
 *
 * @member {Real} async_call The handle of the Steam API Call that completed.
 * @member {Real} callback_id The k_iCallback constant which uniquely identifies the completed callback.
 * @member {Real} param_size The size in bytes of the completed callback.
 * @struct_end
 */

/**
 * @struct SteamUtilsCserIpPort
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} ip_v4
 * @member {Real} port
 * @struct_end 
 */

/**
 * @struct SteamUtilsGamepadTextInput
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_utils_get_entered_gamepad_text_input}.
 *
 * @member {Bool} ok `true` if there was text to receive, `false` otherwise.
 * @member {String} text The gamepad text input from the Big Picture overlay.
 * @struct_end
 */

/**
 * @struct SteamUtilsImageSize
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_utils_get_image_size}.
 *
 * @member {Bool} ok `true` upon success if the image handle is valid and the sizes were filled out, otherwise `false`.
 * @member {Real} width The width of the image.
 * @member {Real} height The height of the image.
 * @struct_end
 */

/**
 * @struct SteamUtilsApiCallCompleted
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_utils_is_api_call_completed}.
 *
 * @member {Bool} ok `true` if the API Call is valid and has completed, otherwise `false`.
 * @member {Bool} failed Whether the API call has encountered a failure (`true`) or not (`false`).
 * @struct_end
 */

/**
 * @struct SteamUtilsFilterTextResult
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_utils_filter_text}.
 *
 * @member {Bool} ok Whether the request was successful or not.
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
 * @struct SteamUtilsFloatingGamepadTextInputDismissed
 * @description > **Steamworks Struct**: [ISteamUtils::FloatingGamepadTextInputDismissed_t](partner.steamgames.com/doc/api/ISteamUtils#FloatingGamepadTextInputDismissed_t)
 *
 * This struct holds information returned in a `ISteamUtils::FloatingGamepadTextInputDismissed_t` callback, which is called when the floating keyboard invoked from ${function.steam_utils_show_floating_gamepad_text_input} has been closed.
 *
 * @member {Bool} submitted `true` if user entered & accepted text.
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

/**
 * @struct SteamUgcItemDownloadInfo
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_ugc_get_item_download_info}.
 *
 * @member {Bool} ok `true` if the download information was available; otherwise, `false`.
 * @member {Real} bytes_downloaded the current bytes downloaded.
 * @member {Real} bytes_total The total bytes. This is only valid after the download has started.
 * @struct_end
 */

/**
 * @struct SteamUgcItemInstallInfo
 * @description > **Steamworks Struct**: N / A
 *
 * This struct hold information returned by ${function.steam_ugc_get_item_install_info}.
 *
 * @member {Bool} ok `true` if the workshop item is already installed. `false` if the folder is an empty string `""`, the workshop item has no content or the workshop item is not installed.
 * @member {Real} size_on_disk The size of the workshop item in bytes.
 * @member {String} folder The absolute path to the folder containing the content by copying it.
 * @member {Real} timestamp The time when the workshop item was last updated.
 * @struct_end
 */

/**
 * @struct SteamUgcItemUpdateProgress
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of ${function.steam_ugc_get_item_update_progress}.
 *
 * @member {Real} status The current status.
 * @member {Real} bytes_processed The current number of bytes uploaded.
 * @member {Real} bytes_total The total number of bytes that will be uploaded.
 * @struct_end
 */

/**
 * @struct SteamUgcQueryResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} published_file_id
 * @member {String} title
 * @member {String} description
 * @member {Real} time_created
 * @member {Real} time_updated
 * @member {Real} visibility
 * @member {Bool} banned
 * @member {Bool} accepted_for_use
 * @member {Bool} tags_truncated
 * @struct_end 
 */

/**
 * @struct SteamUgcQueryPreviewUrl
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_ugc_get_query_ugc_preview_url}.
 *
 * @member {Bool} ok `true` upon success, indicates that the URL has been filled out. Otherwise, `false` if the UGC query handle is invalid or the index is out of bounds.
 * @member {String} url The URL to the preview image of the workshop item.
 * @struct_end
 */

/**
 * @struct SteamUgcQueryMetadata
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_ugc_get_query_ugc_metadata}.
 *
 * @member {Bool} ok `true` upon success, indicates that the metadata has been filled out. Otherwise, `false` if the UGC query handle is invalid or the index is out of bounds.
 * @member {String} metadata The developer set metadata of the workshop item.
 * @struct_end
 */

/**
 * @struct SteamUgcAdditionalPreview
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_ugc_get_query_ugc_additional_preview}.
 *
 * @member {Bool} ok `true` upon success, `false` otherwise.
 * @member {String} url_or_video_id The URL or Video ID of the additional preview.
 * @member {Enum.SteamItemPreviewType} preview_type The type of preview that was returned.
 * @struct_end
 */

/**
 * @struct SteamUgcKeyValueTag
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds a key-value tag returned by ${function.steam_ugc_get_query_ugc_key_value_tag}.
 *
 * @member {Bool} ok `true` upon success, indicates that `key` and `value` have been filled out. `false` otherwise.
 * @member {String} key The key.
 * @member {String} value The value.
 * @struct_end
 */

/**
 * @struct SteamUgcItemInstalled
 * @description > **Steamworks Struct**: [ISteamUGC::ItemInstalled_t](partner.steamgames.com/doc/api/ISteamUGC#ItemInstalled_t)
 *
 * This struct holds information passed to a `ISteamUGC::ItemInstalled_t` callback, which is called when a workshop item has been installed or updated.
 * 
 * [[Note: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.]]
 *
 * @member {Real} app_id The app ID associated with the workshop item.
 * @member {Real} published_file_id The workshop item that has finished installing. This can be used with ${function.steam_ugc_get_item_install_info} to access the information about the item.
 * @struct_end
 */

/**
 * @struct SteamUgcUserSubscribedItemsListChanged
 * @description > **Steamworks Struct**: [ISteamUGC::UserSubscribedItemsListChanged_t](partner.steamgames.com/doc/api/ISteamUGC#UserSubscribedItemsListChanged_t)
 *
 * This struct holds information about when the user has added or removed an item to/from their subscriptions for the returned app ID.
 *
 * @member {Real} app_id The related app ID.
 * @struct_end
 */

/**
 * @struct SteamUgcFileSubscribed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamUgcFileUnsubscribed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamUgcQueryCompleted
 * @description > **Steamworks Struct**: [ISteamUGC::SteamUGCQueryCompleted_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCQueryCompleted_t)
 *
 * This struct holds info on a completed UGC query request.
 *
 * @member {Real} query_handle The handle of the query that completed.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} num_results_returned The number of results returned in this query.
 * @member {Real} total_matching_results The total number of items that matched the query in the database.
 * @member {Bool} cached_data Whether the returned data was retrieved from the local cache rather than from the server.
 * @struct_end
 */

/**
 * @struct SteamUgcCreateItemResult
 * @description > **Steamworks Struct**: [ISteamUGC::CreateItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#CreateItemResult_t)
 *
 * This struct holds info on the creation of a new workshop item.
 *
 * @member {Real} result The result of the operation.
 * @member {Real} published_file_id The ID of the newly created workshop item.
 * @member {Bool} legal_agreement_required Does the user need to accept the Steam Workshop legal agreement (`true`) or not (`false`)? See the [Workshop Legal Agreement](https://partner.steamgames.com/doc/features/workshop/implementation#Legal) for more information.
 * @struct_end
 */

/**
 * @struct SteamUgcSubmitItemUpdateResult
 * @description > **Steamworks Struct**: [ISteamUGC::SubmitItemUpdateResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SubmitItemUpdateResult_t)
 *
 * This struct holds info returned when a workshop item update has been submitted and uploaded.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Bool} legal_agreement_required Whether the user needs to accept the Steam Workshop legal agreement.
 * @struct_end
 */

/**
 * @struct SteamUgcSubscribeItemResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageSubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageSubscribePublishedFileResult_t)
 *
 * This struct holds info on the user subscribing to a piece of UGC.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that the user subscribed to.
 * @struct_end
 */

/**
 * @struct SteamUgcUnsubscribeItemResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageUnsubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageUnsubscribePublishedFileResult_t)
 *
 * This struct holds info on the user subscribing from a piece of UGC.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that the user unsubscribed from.
 * @struct_end 
 */

/**
 * @struct SteamUgcFavoriteItemsListChanged
 * @description > **Steamworks Struct**: [ISteamUGC::UserFavoriteItemsListChanged_t](https://partner.steamgames.com/doc/api/ISteamUGC#UserFavoriteItemsListChanged_t)
 *
 * This struct holds information received in a `ISteamUGC::UserFavoriteItemsListChanged_t` callback.
 *
 * @member {Real} result The result of the operation.
 * @member {Real} published_file_id The item which was added/removed.
 * @member {Bool} was_add_request Was it added (`true`) or removed (`false`) from the user's favorites?
 * @struct_end
 */

/**
 * @struct SteamUgcSetUserItemVoteResult
 * @description > **Steamworks Struct**: [ISteamUGC::SetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SetUserItemVoteResult_t)
 *
 * This struct holds info on a workshop item vote.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that was voted on.
 * @member {Bool} vote_up The vote that was set; `true` for an up vote, `false` for a down vote.
 * @struct_end
 */

/**
 * @struct SteamUgcGetUserItemVoteResult
 * @description > **Steamworks Struct**: [ISteamUGC::GetUserItemVoteResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#GetUserItemVoteResult_t)
 *
 * This struct holds info on the retrieval of a workshop item.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item the vote information is for.
 * @member {Bool} voted_up Whether the user has voted the item up.
 * @member {Bool} voted_down Whether the user has voted the item down.
 * @member {Bool} vote_skipped Whether the user has skipped voting on the item.
 * @struct_end
 */

/**
 * @struct SteamUgcRequestItemDetailsResult
 * @description > **Steamworks Struct**: [ISteamUGC::SteamUGCRequestUGCDetailsResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#SteamUGCRequestUGCDetailsResult_t)
 *
 * Deprecated. Former result of a call to ${function.steam_ugc_request_ugc_details}.
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} cached_data
 * @struct_end 
 */

/**
 * @struct SteamUgcSupportedGameVersionData
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} game_branch_min
 * @member {String} game_branch_max
 * @struct_end 
 */

/**
 * @struct SteamUgcDeleteItemResult
 * @description > **Steamworks Struct**: [ISteamUGC::DeleteItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DeleteItemResult_t)
 *
 * This struct holds info on the deletion of a workshop item.
 *
 * @member {Real} result The result of the operation.
 * @member {Real} published_file_id The workshop item that was deleted.
 * @struct_end
 */

/**
 * @struct SteamUgcDownloadItemResult
 * @description > **Steamworks Struct**: [ISteamUGC::DownloadItemResult_t](https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItemResult_t)
 *
 * This struct holds info on the download of a workshop item.
 *
 * @member {Real} app_id The app ID associated with this workshop item.
 * @member {Real} published_file_id The workshop item that has finished downloading.
 * @member {Real} result The result of the operation.
 * @struct_end
 */

/**
 * @struct SteamInputAnalogActionData
 * @description > **Steamworks Struct**: [ISteamInput::InputAnalogActionData_t](https://partner.steamgames.com/doc/api/ISteamInput#InputAnalogActionData_t)
 *
 * This struct holds the current state of an analog action.
 *
 * @member {Enum.SteamInputControllerSourceMode} mode The type of data coming from this action, this will match what was specified in the action set's VDF definition.
 * @member {Real} x The current state of this action on the horizontal axis.
 * @member {Real} y The current state of this action vertical axis.
 * @member {Bool} active Whether or not this action is currently available to be bound in the active action set. If it is not available, OR does not belong to the active action set, this will be `false`.
 * @struct_end
 */

/**
 * @struct SteamInputDigitalActionData
 * @description > **Steamworks Struct**: [ISteamInput:InputDigitalActionData_t](partner.steamgames.com/doc/api/ISteamInput#InputDigitalActionData_t)
 *
 * This struct holds the current state of a digital action.
 *
 * @member {Bool} state The current state of this action; `true` if the action is currently pressed, otherwise `false`.
 * @member {Bool} active Whether or not this action is currently available to be bound in the active action set.
 * @struct_end
 */

/**
 * @struct SteamInputMotionData
 * @description > **Steamworks Struct**: [ISteamInput::InputMotionData_t](partner.steamgames.com/doc/api/ISteamInput#InputMotionData_t)
 *
 * This struct holds the current state of a device's motion sensor(s).
 *
 * @member {Real} rot_quat_x Sensor-fused absolute rotation (will drift in heading), x axis.
 * @member {Real} rot_quat_y Sensor-fused absolute rotation (will drift in heading), y axis.
 * @member {Real} rot_quat_z Sensor-fused absolute rotation (will drift in heading), z axis.
 * @member {Real} rot_quat_w Sensor-fused absolute rotation (will drift in heading), w axis.
 * @member {Real} pos_accel_x Positional acceleration, x axis.
 * @member {Real} pos_accel_y Positional acceleration, y axis.
 * @member {Real} pos_accel_z Positional acceleration, z axis.
 * @member {Real} rot_vel_x Angular velocity, x axis.
 * @member {Real} rot_vel_y Angular velocity, y axis.
 * @member {Real} rot_vel_z Angular velocity, z axis.
 * @struct_end
 */

/**
 * @struct SteamInputActiveActionSetLayers
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_input_get_active_action_set_layers}.
 *
 * @member {Real} count The number of handles returned.
 * @member {Array[Real]} handles An array holding all input handles.
 * @struct_end
 */

/**
 * @struct SteamInputActionOrigins
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_input_get_analog_action_origins} and ${function.steam_input_get_digital_action_origins}.
 *
 * @member {Real} count The number of origins returned.
 * @member {Array[Enum.SteamInputActionOrigin]} origins An array of action origins.
 * @struct_end
 */

/**
 * @struct SteamInputDeviceBindingRevision
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the information returned by ${function.steam_input_get_device_binding_revision}.
 *
 * @member {Bool} ok `true` if a device binding was successfully found and `false` if the binding is still loading.
 * @member {Real} major Major binding revision.
 * @member {Real} minor Minor binding revision.
 * @struct_end
 */

/**
 * @struct SteamInputDeviceEvent
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the handle of the controller that connected (in device connected callback) or disconnected (in device disconnected callback).
 * 
 * See: ${function.steam_input_run_frame}, ${function.steam_input_set_callback_device_connected}, ${function.steam_input_set_callback_device_disconnected}
 *
 * @member {Real} controller_handle The controller handle.
 * @struct_end
 */

/**
 * @struct SteamInputActionSetChanged
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} controller_handle
 * @member {Real} action_set_handle
 * @struct_end 
 */

/**
 * @struct SteamInputControllerBattery
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} controller_handle
 * @member {Real} battery_percent
 * @struct_end 
 */

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
 * @struct SteamUserStatsAchievementAndProgress
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} achieved
 * @member {Real} cur_progress
 * @member {Real} max_progress
 * @struct_end 
 */

/**
 * @struct SteamUserStatsAchievementNamesAndPercent
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {String} name
 * @member {Real} percent
 * @struct_end 
 */

/**
 * @struct SteamUserStatsMostAchievedAchievementInfo
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds info on the most achieved achievement for the game.
 *
 * @member {Bool} ok Whether the info could be successfully retrieved.
 * @member {String} name The 'API Name' of the achievement.
 * @member {Real} percent The percentage of people that have unlocked this achievement from 0 to 100.
 * @member {Bool} achieved Whether the current user has unlocked this achievement.
 * @struct_end
 */

/**
 * @struct SteamUserStatsNumAchievementsAndHours
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} num_achievements
 * @member {Real} hours
 * @struct_end 
 */

/**
 * @struct SteamUserStatsStatInt
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct SteamUserStatsStatFloat
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct SteamUserStatsUserAchievement
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Bool} achieved
 * @struct_end 
 */

/**
 * @struct SteamUserStatsGlobalStatInt64
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct SteamUserStatsGlobalStatDouble
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct SteamUserStatsGlobalStatHistoryInt64
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Array[Real]} data
 * @struct_end 
 */

/**
 * @struct SteamUserStatsGlobalStatHistoryDouble
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Array[Real]} data
 * @struct_end 
 */

/**
 * @struct SteamUserStatsDownloadedLeaderboardEntry
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} steam_id_user
 * @member {Real} global_rank
 * @member {Real} score
 * @member {Real} details_count
 * @member {Real} details_written
 * @member {Real} bytes_written
 * @struct_end 
 */

/**
 * @struct SteamUserStatsRequestUserStatsResult
 * @description > **Steamworks Struct**: [ISteamUserStats::UserStatsReceived_t](https://partner.steamgames.com/doc/api/ISteamUserStats#UserStatsReceived_t)
 *
 * This struct 
 *
 * @member {Real} game_id 
 * @member {Real} steam_id_user 
 * @member {Real} result 
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} leaderboard_handle
 * @member {Real} entries_handle
 * @member {Real} entry_count
 * @struct_end 
 */

/**
 * @struct SteamUserStatsScoreUploadedResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} success
 * @member {Real} leaderboard_handle
 * @member {Real} score
 * @member {Bool} score_changed
 * @member {Real} global_rank_new
 * @member {Real} global_rank_previous
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} result
 * @member {Real} leaderboard_handle
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
 * @member {Real} result Returns whether the call was successful or not.
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
 * @struct_end
 */

/**
 * @struct SteamUserStatsIntMinMax
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} min
 * @member {Real} max
 * @member {Bool} ok
 * @struct_end 
 */

/**
 * @struct SteamUserStatsFloatMinMax
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} min
 * @member {Real} max
 * @member {Bool} ok
 * @struct_end 
 */

/**
 * @struct SteamMusicPlaybackStatusHasChanged
 * @description > **Steamworks Struct**: [ISteamMusic::PlaybackStatusHasChanged_t](https://partner.steamgames.com/doc/api/ISteamMusic#PlaybackStatusHasChanged_t)
 *
 * This struct holds information about a `ISteamMusic::PlaybackStatusHasChanged_t` callback.
 *
 * @member {Real} playback_status The new playback status.
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

/**
 * @struct SteamInventoryResultItems
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information about result items.
 * 
 * See: [ISteamInventory::SteamItemDetails_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDetails_t)
 *
 * @member {Bool} ok `true` if the call was successful, otherwise `false`.
 * @member {Real} count The number of items returned.
 * @member {Array[Real]} item_instance_ids The globally unique item instance handles.
 * @member {Array[Real]} item_def_ids The item definition numbers for the items.
 * @member {Array[Real]} quantities The current quantities of each item.
 * @member {Array[Enum.SteamInventoryItemFlags]} flags A bitmasked collection of item flags for each item.
 * @struct_end
 */

/**
 * @struct SteamInventoryDeserializeResult
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a request to deserialise a result set.
 *
 * @member {Bool} ok Always `true`.
 * @member {Real} result_handle The new inventory result handle.
 * @member {Enum.SteamApiResult} status Whether the call was successful or not.
 * @struct_end
 */

/**
 * @struct SteamInventorySerializeResult
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a request to serialise a result set.
 *
 * @member {Bool} ok `true` upon success.
 * @member {Real} bytes_written The number of bytes written.
 * @struct_end
 */

/**
 * @struct SteamInventoryItemProperty
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the dynamic properties from an item in an inventory result set.
 *
 * @member {Bool} ok `true` upon success; otherwise, `false` indicating that the inventory result handle was invalid or the provided index does not contain an item.
 * @member {String} value The value associated with the property name.
 * @struct_end
 */

/**
 * @struct SteamInventoryItemsWithPrices
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds item definitions with prices, as requested using ${function.steam_inventory_get_items_with_prices}.
 *
 * @member {Bool} ok `true` upon success.
 * @member {Real} count The number of items.
 * @member {Array[Real]} item_def_ids An array of the item definition IDs.
 * @member {Array[Real]} current_prices An array holding the current price for each item definition ID.
 * @member {Array[Real]} base_prices An array holding the base price for each item definition ID.
 * @struct_end
 */

/**
 * @struct SteamInventoryDefProperty
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} value
 * @struct_end 
 */

/**
 * @struct SteamInventoryItemPrice
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} current_price
 * @member {Real} base_price
 * @struct_end 
 */

/**
 * @struct SteamInventoryResultReady
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result_handle
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamInventoryFullUpdate
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result_handle
 * @struct_end 
 */

/**
 * @struct SteamInventoryDefinitionUpdate
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryDefinitionUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryDefinitionUpdate_t)
 *
 * This struct is received whenever item definitions have been updated, which could be in response to ${function.steam_inventory_load_item_definitions} or any time new item definitions are available (e.g., from the dynamic addition of new item types while players are still in-game).
 *
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct SteamInventoryStartPurchaseResult
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryStartPurchaseResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryStartPurchaseResult_t)
 *
 * This struct holds the result of the start of an inventory purchase.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} order_id The auto-generated order id for the initiated purchase.
 * @member {Real} transaction_id The auto-generated transaction id for the initiated purchase.
 * @struct_end
 */

/**
 * @struct SteamInventoryRequestPricesResult
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryRequestPricesResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryRequestPricesResult_t)
 *
 * This struct holds the result of a request of prices.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {String} currency The string representing the user's [local currency](https://partner.steamgames.com/doc/store/pricing/currencies) code.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageFileNameAndSize
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} file_name
 * @member {Real} file_size
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageQuota
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} total_bytes
 * @member {Real} available_bytes
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageUgcDetails
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} ugc_handle
 * @member {Real} app_id
 * @member {Real} size_in_bytes
 * @member {String} file_name
 * @member {Real} steam_id_owner
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageFileShareResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageFileShareResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageFileShareResult_t)
 *
 * This struct holds the response to sharing a file, and provides a handle that can be used to refer to the shared file.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} ugc_handle The handle that can be shared with users and features.
 * @member {String} file_name The name of the file that was shared.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageDownloadUgcResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageDownloadUGCResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageDownloadUGCResult_t)
 *
 * This struct holds the response to a UGC download request, and contains the details of the file that was downloaded.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} ugc_handle The handle of the file that was attempted to be downloaded.
 * @member {Real} app_id The app ID the file was shared from.
 * @member {Real} size_in_bytes The size of the file that was downloaded, in bytes.
 * @member {String} file_name The name of the file that was downloaded.
 * @member {Real} steam_id_owner The Steam ID of the user who created this content.
 * @struct_end
 */

/**
 * @struct SteamRemoteStoragePublishedFileSubscribed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamRemoteStoragePublishedFileUnsubscribed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageLocalFileChange
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct SteamRemoteStoragePublishFileResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStoragePublishFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishFileResult_t)
 *
 * This struct holds then result when a workshop file has been published, returning the result of the operation and the ID of the newly published file.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The file id of the published file.
 * @member {Bool} user_needs_to_accept_wla Whether the user still needs to accept the Steam Workshop legal agreement.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageUpdatePublishedFileResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Bool} user_needs_to_accept_wla
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageSubscribePublishedFileResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageSubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageSubscribePublishedFileResult_t)
 *
 * This struct holds the result when the user has subscribed to a piece of UGC.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that the user subscribed to.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageUnsubscribePublishedFileResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageUnsubscribePublishedFileResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageUnsubscribePublishedFileResult_t)
 *
 * This struct holds the result when the user has unsubscribed from a piece of UGC.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} published_file_id The workshop item that the user unsubscribed from.
 * @struct_end
 */

/**
 * @struct SteamMatchmakingLobbyCreated
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyCreated_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyCreated_t)
 *
 * This struct holds the result of a request to create a Lobby.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} lobby_id The Steam ID of the lobby that was created, 0 if failed.
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyEnter
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyEnter_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyEnter_t)
 *
 * This struct holds the result received upon attempting to enter a lobby.
 *
 * @member {Real} lobby_id The Steam ID of the lobby you have entered.
 * @member {Real} chat_permissions Unused - always 0.
 * @member {Bool} locked If `true`, then only invited users may join.
 * @member {Real} response An EChatRoomEnterResponse value, indicating whether the user successfully joined the lobby.
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyMatchList
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyMatchList_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyMatchList_t)
 *
 * This struct holds the result of a request of the lobby list.
 *
 * @member {Real} lobbies_count Number of lobbies that matched the search criteria and are available via ${function.steam_matchmaking_get_lobby_by_index}.
 * @struct_end
 */

/**
 * @struct SteamMatchmakingLobbyDataUpdate
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t)
 *
 * This struct holds the result when the lobby metadata has changed.
 *
 * @member {Real} lobby_id The Steam ID of the Lobby.
 * @member {Real} member_id Steam ID of either the member whose data changed, or the room itself.
 * @member {Bool} success `true` if the lobby data was successfully changed, otherwise `false`.
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyChatUpdate
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} lobby_id
 * @member {Real} user_changed_id
 * @member {Real} making_change_id
 * @member {Real} chat_member_state_change
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyChatMsg
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyChatMsg_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatMsg_t)
 *
 * This struct holds the result when chat (text or binary) message for a lobby has been received.
 *
 * @member {Real} lobby_id The Steam ID of the lobby this message was sent in.
 * @member {Real} sender_id Steam ID of the user who sent this message. Note that it could have been the local user.
 * @member {Real} chat_entry_type Type of message received.
 * @member {Real} message_size 
 * @struct_end
 */

/**
 * @struct SteamMatchmakingLobbyGameCreated
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyGameCreated_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyGameCreated_t)
 *
 * This struct holds the result when a game server has been set via ${function.steam_matchmaking_set_lobby_game_server} for all of the members of the lobby to join.
 *
 * @member {Real} lobby_id The lobby that set the game server.
 * @member {Real} server_ip The IP address of the game server in host order, i.e 127.0.0.1 == 0x7f000001, if it's set.
 * @member {Real} server_port The connection port of the game server, in host order, if it's set.
 * @member {Real} game_server_id The Steam ID of the game server, if it's set.
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyInvite
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} inviter_id
 * @member {Real} lobby_id
 * @member {String} game_id
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyChatEntry
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} bytes
 * @member {Real} sender_id
 * @member {Real} entry_type
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyGameServer
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} ip
 * @member {Real} port
 * @member {Real} steam_id_gs
 * @struct_end 
 */

/**
 * @struct SteamNetworkingMessagesSessionRequest
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} steam_id_remote
 * @struct_end 
 */

/**
 * @struct SteamNetworkingMessagesSessionFailed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} steam_id_remote
 * @member {Real} end_reason
 * @member {String} debug_msg
 * @struct_end 
 */

/**
 * @struct SteamNetworkingMessagesReceived
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} steam_id_remote
 * @member {Real} channel
 * @member {Real} bytes_written
 * @member {Real} send_flags
 * @struct_end 
 */

/**
 * @struct SteamNetworkingSocketsConnectionInfo
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} user_data
 * @member {Real} end_reason
 * @member {String} end_debug
 * @member {String} connection_description
 * @member {Real} flags
 * @member {Real} state
 * @member {Real} steam_id_remote
 * @member {String} addr_remote
 * @struct_end 
 */

/**
 * @struct SteamNetworkingSocketsReceived
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} conn
 * @member {Real} bytes_written
 * @member {Real} flags
 * @struct_end 
 */

/**
 * @struct SteamPartiesAvailableBeaconLocationCount
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} count
 * @struct_end 
 */

/**
 * @struct SteamPartiesAvailableBeaconLocations
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} count
 * @member {Array[Enum.SteamPartiesBeaconLocationType]} location_types
 * @member {Array[Real]} location_ids
 * @struct_end 
 */

/**
 * @struct SteamPartiesCreateBeaconResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} beacon_id
 * @struct_end 
 */

/**
 * @struct SteamPartiesJoinPartyResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} beacon_id
 * @member {Real} beacon_owner_steam_id
 * @member {String} connect_string
 * @struct_end 
 */

/**
 * @struct SteamPartiesChangeNumOpenSlotsResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamPartiesReservationNotification
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} beacon_id
 * @member {Real} joiner_steam_id
 * @struct_end 
 */

/**
 * @struct SteamPartiesBeaconDetails
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} beacon_owner_steam_id
 * @member {Enum.SteamPartiesBeaconLocationType} location_type
 * @member {Real} location_id
 * @member {String} metadata
 * @struct_end 
 */

/**
 * @struct SteamNetworkingSocketsStatusChanged
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} conn
 * @member {Real} old_state
 * @member {Struct.SteamNetworkingSocketsConnectionInfo} info
 * @struct_end 
 */

/**
 * @enum SteamApiAccountType
 * @description > **Steamworks Enum**: [EAccountType](https://partner.steamgames.com/doc/api/steam_api#EAccountType)
 *
 * This enum holds the different Steam account types.
 *
 * @member Invalid Used for invalid Steam IDs.
 * @member Individual Regular user account.
 * @member Multiseat Multiseat (e.g. cybercafe) account.
 * @member GameServer Persistent (not anonymous) game server account.
 * @member AnonGameServer Anonymous game server account.
 * @member Pending Pending.
 * @member ContentServer Valve internal content server account.
 * @member Clan Steam Group (clan).
 * @member Chat Steam group chat or lobby.
 * @member ConsoleUser Fake Steam ID for local PSN account on PS3 or Live account on 360, etc.
 * @member AnonUser Anonymous user account. (Used to create an account or reset a password)
 * @enum_end 
 */

/**
 * @enum SteamApiDenyReason
 * @description > **Steamworks Enum**: [EDenyReason](https://partner.steamgames.com/doc/api/steam_api#EDenyReason)
 *
 * This enum holds the result values when a client failed to join or has been kicked from a game server.
 *
 * @member Invalid Unknown.
 * @member InvalidVersion The client and server are not the same version.
 * @member Generic Generic.
 * @member NotLoggedOn The client is not logged on.
 * @member NoLicense The client does not have a license to play this game.
 * @member Cheater The client is VAC banned.
 * @member LoggedInElsewhere The client is logged in elsewhere.
 * @member UnknownText 
 * @member IncompatibleAnticheat 
 * @member MemoryCorruption 
 * @member IncompatibleSoftware 
 * @member SteamConnectionLost The server lost connection to Steam.
 * @member SteamConnectionError The server had a general error connecting to Steam.
 * @member SteamResponseTimedOut The server timed out connecting to Steam.
 * @member SteamValidationStalled The client has not authed with Steam yet.
 * @member SteamOwnerLeftGuestUser The owner of the shared game has left, called for each guest of the owner.
 * @enum_end 
 */

/**
 * @enum SteamApiGameIdType
 * @description > **Steamworks Enum**: [EGameIDType](https://partner.steamgames.com/doc/api/steam_api#EGameIDType)
 *
 * This enum holds the different types of game ID.
 *
 * @member App The Game ID is a regular Steam app.
 * @member GameMod The Game ID is a mod.
 * @member Shortcut The game ID is a shortcut.
 * @member P2p The game ID is a P2P file.
 * @enum_end 
 */

/**
 * @enum SteamApiLaunchOptionType
 * @description > **Steamworks Enum**: [ELaunchOptionType](https://partner.steamgames.com/doc/api/steam_api#ELaunchOptionType)
 *
 * This enum contains codes for well defined launch options, corresponds to "Launch Type" in the applications Launch Options which can be found on the [General Installation Settings](https://partner.steamgames.com/apps/config/) page.
 *
 * @member None Unspecified.
 * @member Default Runs the app in default mode.
 * @member SafeMode Runs the game in safe mode.
 * @member Multiplayer Runs the game in multiplayer mode.
 * @member Config Runs config tool for this game.
 * @member Openvr Runs game in VR mode using OpenVR.
 * @member Server Runs dedicated server for this game.
 * @member Editor Runs game editor.
 * @member Manual Shows game manual.
 * @member Benchmark Runs game benchmark.
 * @member Option1 Generic run option, uses description field for game name.
 * @member Option2 Generic run option, uses description field for game name.
 * @member Option3 Generic run option, uses description field for game name.
 * @member OculusVr Runs game in VR mode using the Oculus SDK.
 * @member OpenvrOverlay Runs an OpenVR dashboard overlay.
 * @member Osvr Runs game in VR mode using the OSVR SDK.
 * @member Dialog Show launch options dialog.
 * @enum_end 
 */

/**
 * @enum SteamApiMarketingMessageFlag
 * @description > **Steamworks Enum**: [EMarketingMessageFlags](https://partner.steamgames.com/doc/api/steam_api#EMarketingMessageFlags)
 *
 * This enum holds internal Steam marketing message flags that change how a client should handle them.
 *
 * @member None None.
 * @member HighPriority High priority.
 * @member PlatformWindows Windows.
 * @member PlatformMac Mac.
 * @member PlatformLinux Linux.
 * @member PlatformRestrictions Aggregate flags.
 * @enum_end 
 */

/**
 * @enum SteamApiNotificationPosition
 * @description > **Steamworks Enum**: [ENotificationPosition](https://partner.steamgames.com/doc/api/steam_api#ENotificationPosition)
 *
 * This enum holds the possible positions to have the overlay show notifications in.
 *
 * @member TopLeft Top-left corner.
 * @member TopRight Top-right corner.
 * @member BottomLeft Bottom-left corner.
 * @member BottomRight Bottom-right corner.
 * @enum_end 
 */

/**
 * @enum SteamApiUniverse
 * @description > **Steamworks Enum**: [EUniverse](https://partner.steamgames.com/doc/api/steam_api#EUniverse)
 *
 * This enum holds the different Steam universes. Each universe is a self-contained Steam instance.
 *
 * @member Invalid Invalid.
 * @member Public The standard public universe.
 * @member Beta Beta universe used inside Valve.
 * @member Internal Internal universe used inside Valve.
 * @member Dev Dev universe used inside Valve.
 * @member Max 
 * @enum_end 
 */

/**
 * @enum SteamApiUserHasLicenseResult
 * @description > **Steamworks Enum**: [EUserHasLicenseForAppResult](partner.steamgames.com/doc/api/steam_api#EUserHasLicenseForAppResult)
 *
 * This enum holds the possible results of ${function.steam_user_user_has_license_for_app}.
 *
 * @member HasLicense The user has a license for specified app.
 * @member DoesNotHaveLicense The user does not have a license for the specified app.
 * @member NoAuth The user has not been authenticated.
 * @enum_end 
 */

/**
 * @enum SteamApiVoiceResult
 * @description > **Steamworks Enum**: [EVoiceResult](https://partner.steamgames.com/doc/api/steam_api#EVoiceResult)
 *
 * This enum holds the possible results for use with the [Steam Voice](https://partner.steamgames.com/doc/features/voice) functions.
 *
 * @member Ok The call has completed successfully.
 * @member NotInitialized The Steam Voice interface has not been initialized.
 * @member NotRecording Steam Voice is not currently recording.
 * @member NoData There is no voice data available.
 * @member BufferTooSmall The provided buffer is too small to receive the data.
 * @member DataCorrupted The voice data has been corrupted.
 * @member Restricted The user is chat restricted.
 * @member UnsupportedCodec Deprecated.
 * @member ReceiverOutOfDate Deprecated.
 * @member ReceiverDidNotAnswer Deprecated.
 * @enum_end 
 */

/**
 * @enum SteamApiResult
 * @description > **Steamworks Enum**: [EResult](partner.steamgames.com/doc/api/steam_api#EResult)
 *
 * This enum holds the possible Steam error result codes.
 *
 * @member Ok Success.
 * @member Fail Generic failure.
 * @member NoConnection Your Steam client doesn't have a connection to the back-end.
 * @member InvalidPassword Password/ticket is invalid.
 * @member LoggedInElsewhere The user is logged in elsewhere.
 * @member InvalidProtocolVer Protocol version is incorrect.
 * @member InvalidParam A parameter is incorrect.
 * @member FileNotFound File was not found.
 * @member Busy Called method is busy - action not taken.
 * @member InvalidState Called object was in an invalid state.
 * @member InvalidName The name was invalid.
 * @member InvalidEmail The email was invalid.
 * @member DuplicateName The name is not unique.
 * @member AccessDenied Access is denied.
 * @member Timeout Operation timed out.
 * @member Banned The user is VAC2 banned.
 * @member AccountNotFound Account not found.
 * @member InvalidSteamId The Steam ID was invalid.
 * @member ServiceUnavailable The requested service is currently unavailable.
 * @member NotLoggedOn The user is not logged on.
 * @member Pending Request is pending, it may be in process or waiting on third party.
 * @member EncryptionFailure Encryption or Decryption failed.
 * @member InsufficientPrivilege Insufficient privilege.
 * @member LimitExceeded Too much of a good thing.
 * @member Revoked Access has been revoked (used for revoked guest passes.)
 * @member Expired License/Guest pass the user is trying to access is expired.
 * @member AlreadyRedeemed Guest pass has already been redeemed by account, cannot be used again.
 * @member DuplicateRequest The request is a duplicate and the action has already occurred in the past, ignored this time.
 * @member AlreadyOwned All the games in this guest pass redemption request are already owned by the user.
 * @member IpNotFound IP address not found.
 * @member PersistFailed Failed to write change to the data store.
 * @member LockingFailed Failed to acquire access lock for this operation.
 * @member LogonSessionReplaced The logon session has been replaced.
 * @member ConnectFailed Failed to connect.
 * @member HandshakeFailed The authentication handshake has failed.
 * @member IoFailure There has been a generic IO failure.
 * @member RemoteDisconnect The remote server has disconnected.
 * @member ShoppingCartNotFound Failed to find the shopping cart requested.
 * @member Blocked A user blocked the action.
 * @member Ignored The target is ignoring sender.
 * @member NoMatch Nothing matching the request found.
 * @member AccountDisabled The account is disabled.
 * @member ServiceReadOnly This service is not accepting content changes right now.
 * @enum_end 
 */

/**
 * @enum SteamFriendsOverlayToStoreFlag
 * @description > **Steamworks Enum**: [ISteamFriends::EOverlayToStoreFlag](https://partner.steamgames.com/doc/api/ISteamFriends#EOverlayToStoreFlag)
 *
 * This enum holds the values that can be passed as parameters to the store with ${function.steam_friends_activate_game_overlay_to_store} and modify the behaviour when the page opens.
 *
 * @member None No.
 * @member AddToCart Deprecated.
 * @member AddToCartAndShow Add the specified app ID to the user's cart and show the store page.
 * @enum_end 
 */

/**
 * @enum SteamFriendsOverlayToWebpageMode
 * @description > **Steamworks Enum**: [ISteamFriends::EActivateGameOverlayToWebPageMode](https://partner.steamgames.com/doc/api/ISteamFriends#EActivateGameOverlayToWebPageMode)
 *
 * This enum holds the possible Game Overlay web page modes.
 *
 * @member Default Browser will open next to all other windows that the user has open in the overlay. The window will remain open, even if the user closes then re-opens the overlay.
 * @member Modal Browser will be opened in a special overlay configuration which hides all other windows that the user has open in the overlay. When the user closes the overlay, the browser window will also close. When the user closes the browser window, the overlay will automatically close.
 * @enum_end 
 */

/**
 * @enum SteamFriendsChatEntryType
 * @description > **Steamworks Enum**: [EChatEntryType](https://partner.steamgames.com/doc/api/steam_api#EChatEntryType)
 *
 * This enum holds the possible chat entry types.
 *
 * @member Invalid Invalid.
 * @member ChatMsg Normal text message from another user.
 * @member Typing The other user is typing, not used in multi-user chat.
 * @member InviteGame Invite from other user into that users current game.
 * @member Emote Text emote message (Deprecated, should be treated as ChatMsg).
 * @member LeftConversation A user has left the conversation (closed the chat window).
 * @member Entered User has entered the conversation, used in multi-user chat and group chat.
 * @member WasKicked User was kicked (Data: Steam ID of the user performing the kick).
 * @member WasBanned User was banned (Data: Steam ID of the user performing the ban).
 * @member Disconnected User disconnected.
 * @member HistoricalChat A chat message from user's chat history or offline message.
 * @member LinkBlocked A link was removed by the chat filter.
 * @enum_end 
 */

/**
 * @enum SteamFriendsFriendFlag
 * @description > **Steamworks Enum**: [ISteamFriends::EFriendFlags](https://partner.steamgames.com/doc/api/ISteamFriends#EFriendFlags)
 *
 * This enum holds the possible flags for enumerating friends list, or quickly checking the relationship between users.
 *
 * @member None None.
 * @member Blocked Users that the current user has blocked from contacting.
 * @member FriendshipRequested Users that have sent a friend invite to the current user.
 * @member Immediate The current user's "regular" friends.
 * @member ClanMember Users that are in one of the same (small) Steam groups as the current user.
 * @member OnGameServer Users that are on the same game server; as set by ${function.steam_friends_set_played_with}.
 * @member RequestingFriendship Users that the current user has sent friend invites to.
 * @member RequestingInfo Users that are currently sending additional info about themselves after a call to ${function.steam_friends_request_user_information}.
 * @member Ignored Users that the current user has ignored from contacting them.
 * @member IgnoredFriend Users that have ignored the current user; but the current user still knows about them.
 * @member ChatMember Users in one of the same chats.
 * @member All All friend flags.
 * @enum_end 
 */

/**
 * @enum SteamFriendsPersonaState
 * @description > **Steamworks Enum**: [ISteamFriends::EPersonaState](partner.steamgames.com/doc/api/ISteamFriends#EPersonaState)
 *
 * This enum contains the possible states a Steam friend can be in.
 *
 * @member Offline Friend is not currently logged on.
 * @member Online Friend is logged on.
 * @member Busy Friend is logged on, but set to "Do not disturb."
 * @member Away Auto-away feature.
 * @member Snooze Auto-away for a long time.
 * @member LookingToTrade Online, trading.
 * @member LookingToPlay Online, wanting to play.
 * @enum_end 
 */

/**
 * @enum SteamFriendsRelationship
 * @description > **Steamworks Enum**: [ISteamFriends::EFriendRelationship](https://partner.steamgames.com/doc/api/ISteamFriends#EFriendRelationship)
 *
 * This enum declares the set of relationships that Steam users may have.
 *
 * @member None The users have no relationship.
 * @member Blocked The user has just clicked Ignore on an friendship invite. This doesn't get stored.
 * @member RequestRecipient The user has requested to be friends with the current user.
 * @member Friend A "regular" friend.
 * @member RequestInitiator The current user has sent a friend invite.
 * @member Ignored The current user has explicit blocked this other user from comments/chat/etc. This is stored.
 * @member IgnoredFriend The user has ignored the current user.
 * @member SuggestedFriend Deprecated -- Unused.
 * @enum_end 
 */

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

/**
 * @enum SteamScreenshotsConst
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member InvalidScreenshotHandle
 * @member TagTypeMax
 * @member TagValueMax
 * @member MaxTaggedPublishedFiles
 * @member MaxTaggedUsers
 * @member ThumbWidth
 * @enum_end 
 */

/**
 * @enum SteamNetworkingIdentityType
 * @description > **Steamworks Enum**: [ESteamNetworkingIdentityType](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetworkingIdentityType)
 *
 * This enum holds the types needed to describe network hosts.
 *
 * @member Invalid Dummy/unknown/invalid
 * @member SteamId Basic platform-specific identifiers.
 * @member IpAddress Use IP address (and port) as the "identity".
 * @member GenericString Generic string.
 * @member GenericBytes Generic binary blobs.
 * @enum_end 
 */

/**
 * @enum SteamUserBeginAuthSessionResult
 * @description > **Steamworks Enum**: [EBeginAuthSessionResult](https://partner.steamgames.com/doc/api/steam_api#EBeginAuthSessionResult)
 *
 * This enum holds the results returned from ${function.steam_user_begin_auth_session} and [ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession).
 *
 * @member Ok Ticket is valid for this game and this Steam ID.
 * @member InvalidTicket The ticket is invalid.
 * @member DuplicateRequest A ticket has already been submitted for this Steam ID.
 * @member InvalidVersion Ticket is from an incompatible interface version.
 * @member GameMismatch Ticket is not for this game.
 * @member ExpiredTicket Ticket has expired.
 * @enum_end 
 */

/**
 * @enum SteamUserDurationControlOnlineState
 * @description > **Steamworks Enum**: [ISteamUser::EDurationControlOnlineState](https://partner.steamgames.com/doc/api/ISteamUser#EDurationControlOnlineState)
 *
 * This enum describes the online/offline play state of a game.
 *
 * @member Invalid Invalid.
 * @member Offline Offline play.
 * @member Online Online play.
 * @member OnlineHighPri Online play - game requests that Steam not force exit the game.
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
 * @member MismatchedCallback [GetAPICallResult](https://partner.steamgames.com/doc/api/ISteamUtils#GetAPICallResult) was called with the wrong callback type for this API call.
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

/**
 * @enum SteamUgcMatchingUgcType
 * @description > **Steamworks Enum**: [ISteamUGC::EUGCMatchingUGCType](https://partner.steamgames.com/doc/api/ISteamUGC#EUGCMatchingUGCType)
 *
 * This enum specifies the types of UGC to obtain from a call to ${function.steam_ugc_create_query_user_ugc_request} or ${function.steam_ugc_create_query_all_ugc_request}.
 *
 * @member Items Both Microtransaction items and Ready-to-use items.
 * @member Items_Mtx Microtransaction items. (See: [Curated Workshop](https://partner.steamgames.com/doc/features/workshop#curated_workshop))
 * @member Items_ReadyToUse Regular in game items that players have uploaded. (See: [Ready-To-Use Workshop](https://partner.steamgames.com/doc/features/workshop#ready-to-use_workshop))
 * @member Collections Shared collections of UGC.
 * @member Artwork Artwork which has been shared.
 * @member Videos Videos which have been shared.
 * @member Screenshots Screenshots which have been shared.
 * @member AllGuides Both web guides and integrated guides.
 * @member WebGuides Guides that are only available on the Steam Community.
 * @member IntegratedGuides Guides that you can use within your game. (Like Dota 2's in game character guides.)
 * @member UsableInGame Ready-to-use items and integrated guides.
 * @member ControllerBindings Controller Bindings which have been shared.
 * @member GameManagedItems Game managed items (Not managed by users.)
 * @member All Return everything.
 * @enum_end 
 */

/**
 * @enum SteamUgcQuery
 * @description > **Steamworks Enum**: [ISteamUGC::EUGCQuery](partner.steamgames.com/doc/api/ISteamUGC#EUGCQuery)
 *
 * This enum is used with ${function.steam_ugc_create_query_all_ugc_request} to specify the sorting and filtering for queries across all available UGC.
 *
 * @member RankedByVote Sort by vote popularity all-time.
 * @member RankedByPublicationDate Sort by publication date descending.
 * @member AcceptedForGameRankedByAcceptanceDate Sort by date accepted (for mtx items).
 * @member RankedByTrend Sort by vote popularity within the given "trend" period (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member FavoritedByFriendsRankedByPublicationDate Filter to items the user's friends have favorited, sorted by publication date descending.
 * @member CreatedByFriendsRankedByPublicationDate Filter to items created by friends, sorted by publication date descending.
 * @member RankedByNumTimesReported Sort by report weight descending.
 * @member CreatedByFollowedUsersRankedByPublicationDate Filter to items created by users that the current user has followed, sorted by publication date descending.
 * @member NotYetRated Filtered to the user's voting queue.
 * @member RankedByTotalVotesAsc Sort by total # of votes ascending (used internally for building the user's voting queue)
 * @member RankedByVotesUp Sort by number of votes up descending. Will use the "trend" period if specified (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByTextSearch Sort by keyword text search relevancy.
 * @member RankedByTotalUniqueSubscriptions Sort by lifetime total unique # of subscribers descending.
 * @member RankedByPlaytimeTrend Sort by total playtime in the "trend" period descending (set with ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByTotalPlaytime Sort by total lifetime playtime descending.
 * @member RankedByAveragePlaytimeTrend Sort by average playtime in the "trend" period descending (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByLifetimeAveragePlaytime Soft by lifetime average playtime descending.
 * @member RankedByPlaytimeSessionsTrend Sort by number of play sessions in the "trend" period descending (set in ${function.steam_ugc_set_ranked_by_trend_days})
 * @member RankedByLifetimePlaytimeSessions Sort by number of lifetime play sessions descending.
 * @member RankedByLastUpdatedDate Sort by last updated time.
 * @enum_end 
 */

/**
 * @enum SteamUserUgcList
 * @description > **Steamworks Enum**: [ISteamUGC::EUserUGCList](partner.steamgames.com/doc/api/ISteamUGC#EUserUGCList)
 *
 * This enum is used with ${function.steam_ugc_create_query_user_ugc_request} to obtain different lists of published UGC for a user.
 *
 * @member Published List of files the user has published. (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=myfiles)
 * @member VotedOn List of files the user has voted on. Includes both VotedUp and VotedDown.
 * @member VotedUp List of files the user has voted up. (Restricted to the current user only).
 * @member VotedDown List of files the user has voted down. (Restricted to the current user only).
 * @member WillVoteLater Deprecated. Do not use! (Restricted to the current user only).
 * @member Favorited List of files the user has favorited. (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=myfavorites)
 * @member Subscribed List of files the user has subscribed to. (Restricted to the current user only). (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=mysubscriptions)
 * @member UsedOrPlayed List of files the user has spent time in game with. (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=myplayedfiles)
 * @member Followed List of files the user is following updates for.
 * @enum_end 
 */

/**
 * @enum SteamUserUgcListSortOrder
 * @description > **Steamworks Enum**: [ISteamUGC::EUserUGCListSortOrder](https://partner.steamgames.com/doc/api/ISteamUGC#EUserUGCListSortOrder)
 *
 * This enum is used with ${function.steam_ugc_create_query_user_ugc_request} to specify the sort order for user published UGC lists. Defaults to creation order descending.
 *
 * @member CreationOrderDesc Returns items by creation date. Descending - the newest items are first. (Corresponds to "sortmethod=newestfirst" on the workshop page)
 * @member CreationOrderAsc Returns items by creation date. Ascending - the oldest items are first. (Corresponds to "sortmethod=oldestfirst" on the workshop page)
 * @member TitleAsc Returns items by name. (Corresponds to "sortmethod=alpha" on the workshop page)
 * @member LastUpdatedDesc Returns the most recently updated items first. (Corresponds to "sortmethod=lastupdated" on the workshop page)
 * @member SubscriptionDateDesc Returns the most recently subscribed items first. (Corresponds to "sortmethod=subscriptiondate" on the workshop page)
 * @member VoteScoreDesc Returns the items with the more recent score updates first. (Corresponds to "sortmethod=score" on the workshop page)
 * @member ForModeration Returns the items that have been reported for moderation. (Corresponds to "sortmethod=formoderation" on the workshop page)
 * @enum_end 
 */

/**
 * @enum SteamWorkshopFileType
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::EWorkshopFileType](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#EWorkshopFileType)
 *
 * This enum holds the possible ways that a shared file will be shared with the community.
 *
 * @member Community Normal Workshop item that can be subscribed to.
 * @member Microtransaction Workshop item that is meant to be voted on for the purpose of selling in-game. (See: [Curated Workshop](https://partner.steamgames.com/doc/features/workshop#curated_workshop))
 * @member Collection A collection of Workshop items.
 * @member Art Artwork.
 * @member Video External video.
 * @member Screenshot Screenshot.
 * @member Game Unused, used to be for Greenlight game entries
 * @member Software Unused, used to be for Greenlight software entries.
 * @member Concept Unused, used to be for Greenlight concepts.
 * @member WebGuide Steam web guide.
 * @member IntegratedGuide Application integrated guide.
 * @member Merch Workshop merchandise meant to be voted on for the purpose of being sold.
 * @member ControllerBinding Steam Controller bindings.
 * @member SteamworksAccessInvite Only used internally in Steam.
 * @member SteamVideo Steam video.
 * @member GameManagedItem Managed completely by the game, not the user, and not shown on the web.
 * @enum_end 
 */

/**
 * @enum SteamItemPreviewType
 * @description > **Steamworks Enum**: [ISteamUGC::EItemPreviewType](partner.steamgames.com/doc/api/ISteamUGC#EItemPreviewType)
 *
 * This enum holds the flags that specify the type of preview an item has. Set with ${function.steam_ugc_add_item_preview_file}, and received with ${function.steam_ugc_get_query_ugc_additional_preview}.
 *
 * @member Image Standard web viewable image file. Supported types: PNG, JPG, and GIF.
 * @member YouTubeVideo YouTube video ID. (e.g. "jHgZh4GV9G0")
 * @member Sketchfab Sketchfab model ID.
 * @member EnvironmentMap_HorizontalCross Standard image file containing a map of an environment in a horizontal cross layout. Supported types: PNG, JPG, and GIF.
 * @member EnvironmentMap_LatLong Standard image file containing a map of an environment in a LatLong layout. Supported types: PNG, JPG, and GIF. Not currently used in web views.
 * @member ReservedMax Reserved. You can specify your own types above this value.
 * @enum_end 
 */

/**
 * @enum SteamRemoteStoragePublishedFileVisibility
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::ERemoteStoragePublishedFileVisibility](partner.steamgames.com/doc/api/ISteamRemoteStorage#ERemoteStoragePublishedFileVisibility)
 *
 * This enum holds the possible visibility states that a Workshop item can be in.
 *
 * @member Public Visible to everyone.
 * @member FriendsOnly Visible to friends only.
 * @member Private Only visible to the creator. Setting an item to private is the closest that you can get to deleting a workshop item from the API.
 * @member Unlisted Visible to everyone, but will not be returned in any global queries. Will also not be returned in any user lists unless the caller is the creator or a subscriber.
 * @enum_end 
 */

/**
 * @enum SteamUgcContentDescriptorId
 * @description > **Steamworks Enum**: [ISteamUGC::EUGCContentDescriptorID](partner.steamgames.com/doc/api/ISteamUGC#EUGCContentDescriptorID)
 *
 * This enum holds the filters that define what user-generated content users want to see under the *Mature Content Filtering* section in their preferences.
 *
 * @member NudityOrSexualContent Some Nudity or Sexual Content: Contains content that has some nudity or sexual themes, but not as the primary focus.
 * @member FrequentViolenceOrGore Frequent Violence or Gore: Contains content that features extreme violence or gore.
 * @member AdultOnlySexualContent Adult Only Sexual Content: Contains content that is sexually explicit or graphic and is intended for adults only. Users must affirm that they are at least eighteen years old before they can view content with this content descriptor.
 * @member GratuitousSexualContent Frequent Nudity or Sexual Content: Contains content that primarily features nudity or sexual themes. Users must affirm that they are at least eighteen years old before they can view content with this content descriptor.
 * @member AnyMatureContent General Mature Content: Contains mature topics that may not be appropriate for all audiences.
 * @enum_end 
 */

/**
 * @enum SteamUgcStatisticType
 * @description > **Steamworks Enum**: [ISteamUGC::EItemStatistic](https://partner.steamgames.com/doc/api/ISteamUGC#EItemStatistic)
 *
 * This enum is used to retrieve item statistics with ${function.steam_ugc_get_query_ugc_statistic}.
 *
 * @member NumSubscriptions Gets the number of subscriptions.
 * @member NumFavorites Gets the number of favorites.
 * @member NumFollowers Gets the number of followers.
 * @member NumUniqueSubscriptions Gets the number of unique subscriptions.
 * @member NumUniqueFavorites Gets the number of unique favorites.
 * @member NumUniqueFollowers Gets the number of unique followers.
 * @member NumUniqueWebsiteViews Gets the number of unique views the item has on its Steam Workshop page.
 * @member ReportScore Gets the number of times the item has been reported.
 * @member NumSecondsPlayed Gets the total number of seconds this item has been used across all players.
 * @member NumPlaytimeSessions Gets the total number of play sessions this item has been used in.
 * @member NumComments Gets the number of comments on the items that steam has on its Steam Workshop page.
 * @member NumSecondsPlayedDuringTimePeriod Gets the number of seconds this item has been used over the given time period.
 * @enum_end 
 */

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

/**
 * @enum SteamMusicPlaybackStatus
 * @description > **Steamworks Enum**: [ISteamMusic::AudioPlayback_Status](https://partner.steamgames.com/doc/api/ISteamMusic#AudioPlayback_Status)
 *
 * This enum specificies the current playback status.
 *
 * @member Undefined The Steam music interface probably isn't enabled.
 * @member Playing Steam Music is currently playing.
 * @member Paused Steam Music is currently paused.
 * @member Idle team Music is currently stopped.
 * @enum_end 
 */

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
 * @description > **Steamworks Enum**: [ISteamTimeline::ETimelineEventClipPriority](partner.steamgames.com/doc/api/ISteamTimeline#ETimelineEventClipPriority)
 *
 * This enum is used in AddTimelineEvent, where Featured events will be offered before Standard events.
 *
 * @member None This event is not appropriate as a clip.
 * @member Standard The user may want to make a clip around this event.
 * @member Featured The player will be likely to want a clip around event, and those clips should be promoted more prominently than clips with the `SteamTimelineEventClipPriority.Standard` priority.
 * @enum_end 
 */

/**
 * @enum SteamInventoryConst
 * @description > **Steamworks Enum**: [ISteamInventory::Constants](partner.steamgames.com/doc/api/isteaminventory#constants)
 *
 * This enum represents an invalid Steam inventory result handle.
 *
 * @member InvalidResult An invalid Steam inventory result handle.
 * @enum_end 
 */

/**
 * @enum SteamRemoteStoragePlatform
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::ERemoteStoragePlatform](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#ERemoteStoragePlatform)
 *
 * This enum holds the possible sync platform flags. These can be used with ${function.steam_remote_storage_set_sync_platforms} to restrict a file to a specific OS.
 *
 * @member None This file will not be downloaded on any platform.
 * @member Windows This file will download on Windows.
 * @member OSX This file will download on macOS.
 * @member PS3 This file will download on the Playstation 3.
 * @member Linux This file will download on SteamOS/Linux.
 * @member Reserved2 Reserved.
 * @member All This file will download on every platform. This is the default.
 * @enum_end 
 */

/**
 * @enum SteamRemoteStorageUgcReadAction
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::EUGCReadAction](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#EUGCReadAction)
 *
 * This enum holds the possible UGC Read Actions used with ${function.steam_remote_storage_ugc_read}.
 *
 * @member ContinueReadingUntilFinished Keeps the file handle open unless the last byte is read. You can use this when reading large files (over 100MB) in sequential chunks.
 * @member ContinueReading Keeps the file handle open. Use this when using ${function.steam_remote_storage_ugc_read} to seek to different parts of the file.
 * @member Close This function frees the file handle.
 * @enum_end 
 */

/**
 * @enum SteamRemoteStorageWorkshopFileType
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::EWorkshopFileType](partner.steamgames.com/doc/api/ISteamRemoteStorage#EWorkshopFileType)
 *
 * This enum holds members that represent the way that a shared file will be shared with the community.
 *
 * @member Community Normal Workshop item that can be subscribed to.
 * @member Microtransaction Workshop item that is meant to be voted on for the purpose of selling in-game. (See: [Curated Workshop](https://partner.steamgames.com/doc/features/workshop#curated_workshop))
 * @member Collection A collection of Workshop items.
 * @member Art Artwork.
 * @member Video External video.
 * @member Screenshot Screenshot.
 * @member Game Unused, used to be for Greenlight game entries.
 * @member Software Unused, used to be for Greenlight software entries.
 * @member Concept Unused, used to be for Greenlight concepts.
 * @member WebGuide Steam web guide.
 * @member IntegratedGuide Application integrated guide.
 * @member Merch Workshop merchandise meant to be voted on for the purpose of being sold.
 * @member ControllerBinding Steam Controller bindings.
 * @member SteamworksAccessInvite Only used internally in Steam.
 * @member SteamVideo Steam video.
 * @member GameManagedItem Managed completely by the game, not the user, and not shown on the web.
 * @enum_end 
 */

/**
 * @enum SteamMatchmakingLobbyType
 * @description > **Steamworks Enum**: [ISteamMatchmaking::ELobbyType](https://partner.steamgames.com/doc/api/ISteamMatchmaking#ELobbyType)
 *
 * This enum specifies the lobby type, this is set from ${function.steam_matchmaking_create_lobby} and ${function.steam_matchmaking_set_lobby_type}.
 *
 * @member Private The only way to join the lobby is from an invite.
 * @member FriendsOnly Joinable by friends and invitees, but does not show up in the lobby list.
 * @member Public Returned by search and visible to friends.
 * @member Invisible Returned by search, but not visible to other friends. This is useful if you want a user in two lobbies, for example matching groups together. A user can be in only one regular lobby, and up to two invisible lobbies.
 * @enum_end 
 */

/**
 * @enum SteamMatchmakingLobbyComparison
 * @description > **Steamworks Enum**: [ISteamMatchmaking::ELobbyComparison](https://partner.steamgames.com/doc/api/ISteamMatchmaking#ELobbyComparison)
 *
 * This enum contains the possible lobby search filter options. These can be set with ${function.steam_matchmaking_add_request_lobby_list_string_filter} and ${function.steam_matchmaking_add_request_lobby_list_near_value_filter}.
 *
 * @member EqualToOrLessThan The lobbies value must be equal to or less than this one.
 * @member LessThan The lobbies value must be less than this one.
 * @member Equal The lobbies value must match this this one exactly.
 * @member GreaterThan The lobbies value must be greater than this one.
 * @member EqualToOrGreaterThan The lobbies value must be equal to or greater than this one.
 * @member NotEqual The lobbies value must not match this this.
 * @enum_end 
 */

/**
 * @enum SteamMatchmakingLobbyDistanceFilter
 * @description > **Steamworks Enum**: [ISteamMatchmaking::ELobbyDistanceFilter](partner.steamgames.com/doc/api/ISteamMatchmaking#ELobbyDistanceFilter)
 *
 * This enum holds the possible lobby search distance filters when requesting the lobby list. Lobby results are sorted from closest to farthest. This can be set with ${function.steam_matchmaking_add_request_lobby_list_distance_filter}.
 *
 * @member Close Only lobbies in the same immediate region will be returned.
 * @member Default Only lobbies in the same region or nearby regions will be returned.
 * @member Far For games that don't have many latency requirements, will return lobbies about half-way around the globe.
 * @member Worldwide No filtering, will match lobbies as far as India to NY (not recommended, expect multiple seconds of latency between the clients).
 * @enum_end 
 */

/**
 * @enum SteamNetworkingConnectionState
 * @description > **Steamworks Enum**: [ESteamNetworkingState](https://partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetworkingState)
 *
 * This enum holds high level connection states.
 *
 * @member None Dummy value used to indicate an error condition in the API.
 * @member Connecting We are trying to establish whether peers can talk to each other, whether they WANT to talk to each other, perform basic auth, and exchange crypt keys.
 * @member FindingRoute Some connection types use a back channel or trusted 3rd party for earliest communication. If the server accepts the connection, then these connections switch into the rendezvous state. During this state, we still have not yet established an end-to-end route (through the relay network), and so if you send any messages unreliable, they are going to be discarded.
 * @member Connected We've received communications from our peer (and we know who they are) and are all good.
 * @member ClosedByPeer Connection has been closed by our peer, but not closed locally.
 * @member ProblemDetectedLocally A disruption in the connection has been detected locally. (E.g. timeout, local internet connection disrupted, etc.)
 * @member FinWait We've disconnected on our side, and from an API perspective the connection is closed. No more data may be sent or received. All reliable data has been flushed, or else we've given up and discarded it. We do not yet know for sure that the peer knows the connection has been closed.
 * @member Linger We've disconnected on our side, and from an API perspective the connection is closed. No more data may be sent or received. From a network perspective, however, on the wire, we have not yet given any indication to the peer that the connection is closed. We are in the process of flushing out the last bit of reliable data. Once that is done, we will inform the peer that the connection has been closed, and transition to the `FIN_WAIT` state.
 * @member Dead Connection is completely inactive and ready to be destroyed.
 * @enum_end 
 */

/**
 * @enum SteamNetworkingSendFlags
 * @description > **Steamworks Flags**: [k_nSteamNetworkingSend_*](https://partner.steamgames.com/doc/api/steamnetworkingtypes#message_sending_flags)
 *
 * This enum holds values are used in bitmask parameters to functions such as ${function.steam_networking_sockets_send_message_to_connection}.
 *
 * @member Unreliable Send the message unreliably. Can be lost. Messages *can* be larger than a single MTU (UDP packet), but there is no retransmission, so if any piece of the message is lost, the entire message will be dropped.
 * @member NoNagle Disable [Nagle's algorithm](https://en.wikipedia.org/wiki/Nagle%27s_algorithm).
 * @member NoDelay If the message cannot be sent very soon (because the connection is still doing some initial handshaking, route negotiations, etc), then just drop it. This is only applicable for unreliable messages. Using this flag on reliable messages is invalid.
 * @member Reliable Reliable message send. Can send up to k_cbMaxSteamNetworkingSocketsMessageSizeSend bytes in a single message. Does fragmentation/re-assembly of messages under the hood, as well as a sliding window for efficient sends of large chunks of data.
 * @member UseCurrentThread 
 * @member AutoRestartBrokenSession 
 * @enum_end 
 */

/**
 * @enum SteamPartiesBeaconLocationType
 * @description > **Steamworks Enum**: [ISteamParties::ESteamPartyBeaconLocationType](https://partner.steamgames.com/doc/api/ISteamParties#ESteamPartyBeaconLocationType)
 *
 * This enum holds the types of locations where beacons can be posted.
 *
 * @member Invalid Invalid location type.
 * @member ChatGroup A Steam Chat Room Group.
 * @member Max Value is always one greater than the largest valid location type value.
 * @enum_end 
 */

/**
 * @enum SteamPartiesBeaconLocationData
 * @description > **Steamworks Enum**: [ISteamParties::ESteamPartyBeaconLocationData](partner.steamgames.com/doc/api/ISteamParties#ESteamPartyBeaconLocationData)
 *
 * This enum holds the types of extended metadata for beacon locations.
 *
 * @member Invalid Invalid location data type.
 * @member Name The name, if any, of the location.
 * @member IconURLSmall If the location has an associated icon, this is the URL for the small format icon image.
 * @member IconURLMedium If the location has an associated icon, this is the URL for the medium format icon image.
 * @member IconURLLarge If the location has an associated icon, this is the URL for the small large icon image.
 * @enum_end 
 */

/**
 * @const_partial macros
 * @member {Real} SteamApiBreakpadInvalidHandle (value: '0') Breakpad invalid handle.
 * @member {Real} SteamApiGameExtraInfoMax (value: '64') The maximum size (in UTF-8 bytes, including the null terminator) of the `extra_info` parameter of ${function.steam_user_track_app_usage_event}.
 * @member {Real} SteamApiSaltSize (value: '8') Only used internally in Steam.
 * @member {Real} SteamApiGidNil (value: '-1') Only used internally in Steam.
 * @member {Real} SteamApiAuthTicketInvalid (value: '0') An invalid user authentication ticket.
 * @member {Real} SteamApiJobIdNil (value: '-1') Only used internally in Steam.
 * @member {Real} SteamApiTxnIdNil (value: '-1') Only used internally in Steam.
 * @member {Real} SteamApiTxnIdUnknown (value: '0') Only used internally in Steam.
 * @member {Real} SteamApiApiCallInvalid (value: '0x0') An Invalid Steam API Call handle.
 * @member {Real} SteamApiAppIdInvalid (value: '0x0') An Invalid App ID.
 * @member {Real} SteamApiBundleIdInvalid (value: '0') Only used internally in Steam.
 * @member {Real} SteamApiCellIdInvalid (value: '0xFFFFFFFF') Only used internally in Steam.
 * @member {Real} SteamApiDepotIdInvalid (value: '0x0') An Invalid Depot ID.
 * @member {Real} SteamApiAssetClassIdInvalid (value: '0x0') Only used internally in Steam.
 * @member {Real} SteamApiManifestIdInvalid (value: '0') Only used internally in Steam.
 * @member {Real} SteamApiSteamAccountIdMask (value: '0xFFFFFFFF') Used in [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to mask out the [AccountID_t](https://partner.steamgames.com/doc/api/steam_api#AccountID_t).
 * @member {Real} SteamApiSteamAccountInstanceMask (value: '0x000FFFFF') Used in [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to mask out the account instance.
 * @member {Real} SteamApiSteamUserConsoleInstance (value: '2') Used by [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to identify users logged in from a console.
 * @member {Real} SteamApiSteamUserDesktopInstance (value: '1') Used by [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to identify users logged in from the desktop client.
 * @member {Real} SteamApiSteamUserWebInstance (value: '4') Used by [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to identify users logged in from the web.
 * @member {Real} SteamApiPackageIdFreeSub (value: '0x0') Only used internally in Steam.
 * @member {Real} SteamApiPackageIdInvalid (value: '0xFFFFFFFF') Only used internally in Steam.
 * @member {Real} SteamApiPartnerIdInvalid (value: '0') Only used internally in Steam.
 * @member {Real} SteamApiPhysicalItemIdInvalid (value: '0x0') Only used internally in Steam.
 * @member {Real} SteamApiQueryPortError (value: '0xFFFE') We were unable to get the query port for this server.
 * @member {Real} SteamApiQueryPortNotInitialized (value: '0xFFFF') We haven't asked the GS for this query port's actual value yet.
 * @member {Real} SteamFriendsMaxFriendsGroupName (value: '64') The maximum length that a friends group name can be (not including the null-terminator!)
 * @member {Real} SteamFriendsMaxRichPresenceKeyLength (value: '64') The maximum length that a rich presence key can be.
 * @member {Real} SteamFriendsMaxRichPresenceKeys (value: '20')The maximum amount of rich presence keys that can be set.
 * @member {Real} SteamFriendsMaxRichPresenceValueLength (value: '256') The maximum length that a rich presence value can be.
 * @member {Real} SteamFriendsPersonaNameMax (value: '128') Maximum number of UTF-8 bytes in a users persona (display) name.
 * @member {Real} SteamFriendsEnumerateFollowersMax (value: '50') The maximum number of followers that will be returned in a [FriendsEnumerateFollowingList_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsEnumerateFollowingList_t) call result at once.
 * @member {Real} SteamFriendsFriendsGroupLimit (value: '100') Deprecated - Unused.
 * @member {Real} SteamFriendsChatMetadataMax (value: '8192') Maximum size in bytes that chat room, lobby, or chat/lobby member metadata may have.
 * @member {Real} SteamFriendsPersonaNameMaxUtf16 (value: '32') The maximum amount of UTF-16 characters in a users persona (display) name.
 * @member {Real} SteamFriendsGroupIdInvalid (value: '-1') Invalid friends group identifier.
 * @member {String} SteamFriendsInterfaceVersion (value: '"SteamFriends015"') Steam Friends interface version.
 * @member {Real} SteamAppsAppProofOfPurchaseKeyMax (value: '240') Only used internally in Steam.
 * @member {String} SteamAppsInterfaceVersion (value: '"STEAMAPPS_INTERFACE_VERSION008"') Steam Apps interface version.
 * @member {Real} SteamScreenshotsInvalidScreenshotHandle (value: '0') An invalid screenshot handle, this is returned when writing or adding a screenshot has failed.
 * @member {Real} SteamScreenshotsUfsTagTypeMax (value: '255') Unused.
 * @member {Real} SteamScreenshotsUfsTagValueMax (value: '255') The maximum length in bytes of a location metadata string set on a screenshot using ${function.steam_screenshots_set_location}.
 * @member {Real} SteamScreenshotsMaxTaggedPublishedFiles (value: '32') The maximum number of workshop items that can be tagged in a screenshot using ${function.steam_screenshots_tag_published_file}.
 * @member {Real} SteamScreenshotsMaxTaggedUsers (value: '32') The maximum number of users that can be tagged in a screenshot using ${function.steam_screenshots_tag_user}.
 * @member {Real} SteamScreenshotsThumbWidth (value: '200') Required width of a thumbnail provided to ${function.steam_screenshots_add_screenshot_to_library}. If you do not provide a thumbnail then one will be generated automatically.
 * @member {String} SteamScreenshotsInterfaceVersion (value: '"STEAMSCREENSHOTS_INTERFACE_VERSION003"') Steam Screenshots interface version.
 * @member {String} SteamUserInterfaceVersion (value: '"SteamUser019"') Steam User interface version.
 * @member {Real} SteamUserEncryptedAppTicketSymmetricKeyLen (value: '32') The length of a key used with [SteamEncryptedAppTicket::BDecryptTicket](https://partner.steamgames.com/doc/api/SteamEncryptedAppTicket#BDecryptTicket).
 * @member {String} SteamUtilsInterfaceVersion (value: '"SteamUtils009"') Steam Utils interface version.
 * @member {Real} SteamUgcNumResultsPerPage (value: '50') The maximum number of results that you'll receive for a query result.
 * @member {Real} SteamUgcDeveloperMetadataMax (value: '5000') The maximum amount of bytes you can set with ${function.steam_ugc_set_item_metadata}.
 * @member {Real} SteamUgcQueryHandleInvalid (value: '-1') Used to specify an invalid query handle. This is frequently returned if a call fails.
 * @member {Real} SteamUgcUpdateHandleInvalid (value: '-1') Used to specify an invalid item update handle. This is frequently returned if a call fails.
 * @member {String} SteamUgcInterfaceVersion (value: '"STEAMUGC_INTERFACE_VERSION015"') Steam UGC interface version.
 * @member {String} SteamInputInterfaceVersion (value: '"SteamInput001"') Steam Input interface version.
 * @member {Real} SteamInputHandleAllControllers (value: '-1') When sending an option to a specific controller handle, you can use this special value in the place of a handle to send the option to all controllers instead.
 * @member {Real} SteamInputMaxAnalogActions (value: '16') The maximum number of analog actions that can be performed on each controller.
 * @member {Real} SteamInputMaxAnalogActionData (value: '1.0') The maximum value that can be reported by an analog action on any given axis.
 * @member {Real} SteamInputMaxCount (value: '16') The maximum number of controllers that can be used simultaneously with the Steam Input Configurator.
 * @member {Real} SteamInputMaxDigitalActions (value: '128') The maximum number of digital actions that can be performed on each controller.
 * @member {Real} SteamInputMaxOrigins (value: '8') The maximum number of input origins that can be attached to a single action.
 * @member {Real} SteamInputMinAnalogActionData (value: '-1.0') The minimum value that can be reported by an analog action on any given axis.
 * @member {Real} SteamUserStatsLeaderboardNameMax (value: '128') Maximum number of bytes for a leaderboard name (UTF-8 encoded).
 * @member {Real} SteamUserStatsStatNameMax (value: '128') Maximum number of bytes for stat and achievement names (UTF-8 encoded).
 * @member {Real} SteamUserStatsLeaderboardDetailsMax (value: '64') Maximum number of details that you can store for a single leaderboard entry.
 * @member {String} SteamUserStatsInterfaceVersion (value: '"STEAMUSERSTATS_INTERFACE_VERSION011"') Steam Userstats interface version.
 * @member {String} SteamMusicInterfaceVersion (value: '"STEAMMUSIC_INTERFACE_VERSION001"') Steam Music interface version.
 * @member {Real} SteamInventoryResultInvalid (value: '-1') An invalid Steam inventory result handle.
 * @member {Real} SteamInventoryItemInstanceIdInvalid (value: '-1') An invalid item instance id. This is usually returned when an operation has failed. It's recommended that you initialise all new item instances with this value.
 * @member {String} SteamInventoryInterfaceVersion (value: '"STEAMINVENTORY_INTERFACE_V002"') Steam Inventory interface version.
 * @member {Real} SteamRemoteStorageFilenameMax (value: '260') The maximum length that a Steam Cloud file path can be.
 * @member {Real} SteamRemoteStoragePublishedDocumentChangeDescriptionMax (value: '8000') Unused.
 * @member {Real} SteamRemoteStoragePublishedDocumentDescriptionMax (value: '8000') The maximum size in bytes that a Workshop item description can be.
 * @member {Real} SteamRemoteStoragePublishedDocumentTitleMax (value: '129') The maximum size in bytes that a Workshop item title can be.
 * @member {Real} SteamRemoteStoragePublishedFileUrlMax (value: '256') The maximum size in bytes that a Workshop item URL can be.
 * @member {Real} SteamRemoteStorageTagListMax (value: '1025') The maximum size in bytes that a Workshop item comma separated tag list can be.
 * @member {Real} SteamRemoteStoragePublishedFileIdInvalid (value: '0') An invalid Workshop item handle.
 * @member {Real} SteamRemoteStoragePublishedFileUpdateHandleInvalid (value: '-1') Deprecated - Only used with the deprecated RemoteStorage based Workshop API.
 * @member {Real} SteamRemoteStorageUgcFileStreamHandleInvalid (value: '-1') Returned when an error has occured when using ${function.steam_remote_storage_file_write_stream_open}.
 * @member {Real} SteamRemoteStorageUgcHandleInvalid (value: '-1') An invalid UGC Handle. This is often returned by functions signifying an error.
 * @member {Real} SteamRemoteStorageEnumeratePublishedFilesMaxResults (value: '50') Deprecated - Only used with the deprecated RemoteStorage based Workshop API.
 * @member {Real} SteamRemoteStorageMaxCloudFileChunkSize (value: '104857600') Defines the largest allowed file size for the Steam Cloud. Cloud files cannot be written in a single chunk over 100MiB and cannot be over 200MiB total.
 * @member {String} SteamRemoteStorageInterfaceVersion (value: '"STEAMREMOTESTORAGE_INTERFACE_VERSION014"')
 * @member {Real} SteamMatchmakingServerQueryInvalid (value: '0xffffffff') Invalid server query.
 * @member {Real} SteamMatchmakingMaxLobbyKeyLength (value: '255') Maximum number of characters a lobby metadata key can be.
 * @member {Real} SteamMatchmakingFavoriteFlagFavorite (value: '0x01') This favorite game server entry is for the favorites list.
 * @member {Real} SteamMatchmakingFavoriteFlagHistory (value: '0x02') This favorite game server entry is for the history list.
 * @member {Real} SteamMatchmakingFavoriteFlagNone (value: '0x00') This favorite game server has no flags set.
 * @member {String} SteamMatchmakingServersInterfaceVersion (value: '"SteamMatchMakingServers002"') Steam Matchmaking servers interface version.
 * @member {String} SteamMatchmakingInterfaceVersion (value: '"SteamMatchMaking009"') Steam Matchmaking interface version.
 * @const_end 
 */
