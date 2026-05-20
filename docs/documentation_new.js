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
 * @param {Real} unOwnAppID The app ID.
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
 * @param {Real} unOwnAppID The app ID.
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
 * This is equivalent to calling ${function.steam_friends_activate_game_overlay_to_user} with `steamID` set to ${function.steam_user_get_steam_id}.
 *
 * @param {String} pchDialog The dialog to open. Valid options are: `"friends"`, `"community"`, `"players"`, `"settings"`, `"officialgamegroup"`, `"stats"`, `"achievements"`.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_invite_dialog
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayInviteDialog](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayInviteDialog)
 *
 * This function activates the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) to open the invite dialog. Invitations sent from this dialog will be for the provided lobby.
 *
 * @param {Real} steamIDLobby The Steam ID of the lobby that selected users will be invited to.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_store
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToStore](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToStore)
 *
 * This function activates the [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) to the Steam store page for the provided app.
 * 
 * Using k_uAppIdInvalid brings the user to the front page of the Steam store.
 *
 * @param {Real} nAppID The app ID to show the store page of.
 * @param {Enum.SteamFriendsOverlayToStoreFlag} eFlag Flags to modify the behaviour when the page opens.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_user
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToUser](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToUser)
 *
 * This function activates [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) to a specific dialog.
 * 
 * Valid `pchDialog` options are:
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
 * @param {String} pchDialog The dialog to open.
 * @param {Real} steamID The Steam ID of the context to open this dialog to.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_web_page
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToWebPage](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToWebPage)
 *
 * This function activates [Steam-overlay](https://partner.steamgames.com/doc/features/overlay) web browser directly to the specified URL.
 *
 * @param {String} pchURL The webpage to open. (A fully qualified address with the protocol is required, e.g. `"http://www.steampowered.com"`)
 * @param {Enum.SteamFriendsOverlayToWebpageMode} eMode Mode for the web page. Defaults to `SteamFriendsOverlayToWebpageMode.Default`.
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
 * @param {Real} steamIDClanChat The Steam ID of the Steam group chat room to close.
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
 * @param {Array[Real]} psteamIDClans A list of steam groups to get the updated data for.
 * @param {Real} cClansToRequest This MUST be the number of groups in `psteamIDClans`.
 * @param {Function} [callback] The function to call upon completion.
 * @returns {Bool}
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamFriends::DownloadClanActivityCountsResult_t](https://partner.steamgames.com/doc/api/ISteamFriends#DownloadClanActivityCountsResult_t)
 * @member {Bool} success Was the call successful?
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
 * @param {Real} unStartIndex The index to start receiving followers from. This should be 0 on the initial call.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::FriendsEnumerateFollowingList_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsEnumerateFollowingList_t)
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Array[Real]} steam_ids The list of users that we are following.
 * @member {Real} results_returned The number of results returned in `steam_ids`.
 * @member {Real} total_result_count The total number of people we are following. If this is greater than `results_returned` Then you should make a subsequent call to ${function.steam_friends_enumerate_following_list} with `results_returned` as the index to get the next portion of followers.
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
 * @param {Real} steamIDClan This MUST be the same source used in the previous call to ${function.steam_friends_get_clan_chat_member_count}!
 * @param {Real} iUser An index between 0 and ${function.steam_friends_get_clan_chat_member_count}.
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
 * @param {Real} steamIDClan The Steam group to get the activity of.
 * @returns {Struct.SteamFriendsClanActivityCounts}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetClanByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanByIndex)
 *
 * This function gets the Steam group's Steam ID at the given index.
 * 
 * [[Note: You must call ${function.steam_friends_get_clan_count} before calling this.]]
 *
 * @param {Real} iClan An index between 0 and ${function.steam_friends_get_clan_count}.
 * @returns {Real}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_chat_member_count
 * @description > **Steamworks Function**: [ISteamFriends::GetClanChatMemberCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanChatMemberCount)
 *
 * This function gets the number of users in a Steam group chat.
 * 
 * [[Note: Large steam groups cannot be iterated by the local user.]]
 * 
 * [[Note: The current user must be in a lobby to retrieve the Steam IDs of other users in that lobby.]]
 * 
 * This is used for iteration, after calling this then ${function.steam_friends_get_chat_member_by_index} can be used to get the Steam ID of each person in the chat.
 *
 * @param {Real} steamIDClan The Steam group to get the chat count of.
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
 * @param {Real} steamIDClanChat The Steam ID of the Steam group chat room.
 * @param {Real} iMessage The index of the message. This should be the m_iMessageID field of [GameConnectedClanChatMsg_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameConnectedClanChatMsg_t).
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
 * @param {Real} steamIDClan The Steam group to get the name of.
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
 * @param {Real} steamIDClan This must be the same steam group used in the previous call to ${function.steam_friends_get_clan_officer_count}!
 * @param {Real} iOfficer An index between 0 and ${function.steam_friends_get_clan_officer_count}.
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
 * [[Note: You must call RequestClanOfficerList before this to get the required data!]]
 *
 * @param {Real} steamIDClan The Steam group to get the officer count of.
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
 * @param {Real} steamIDClan The Steam ID of the Steam group to get the owner for.
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
 * @param {Real} steamIDClan The Steam group to get the tag of.
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
 * @param {Real} iCoplayFriend An index between 0 and ${function.steam_friends_get_coplay_friend_count}.
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
 * @param {Real} steamID The user to get the follower count for.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::FriendsGetFollowerCount_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsGetFollowerCount_t)
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} steam_id The Steam ID of the user we requested the follower count for.
 * @member {Real} count The number of followers the user has.
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
 * @param {Real} iFriend An index between 0 and ${function.steam_friends_get_friend_count}.
 * @param {Real} iFriendFlags A combined union (binary "or") of ${enum.SteamFriendsFriendFlag}. This must be the same value as used in the previous call to ${function.steam_friends_get_friend_count}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_coplay_game
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendCoplayGame](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendCoplayGame)
 *
 * This function gets the app ID of the game that user played with someone on their recently-played-with list.
 *
 * @param {Real} steamIDFriend The Steam ID of the user on the recently-played-with list to get the game played.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_coplay_time
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendCoplayTime](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendCoplayTime)
 *
 * This function gets the timestamp of when the user played with someone on their recently-played-with list.
 *
 * @param {Real}  The Steam ID of the user on the recently-played-with list to get the timestamp for.
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
 * @param {Real} iFriendFlags A combined union (binary "or") of one or more ${enum.SteamFriendsFriendFlag}.
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
 * @param {Real} steamIDSource The Steam group, chat room, lobby or game server to get the user count of.
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
 * @param {Real} steamIDSource This MUST be the same source used in the previous call to ${function.steam_friends_get_friend_count_from_source}!
 * @param {Real} iFriend An index between 0 and ${function.steam_friends_get_friend_count_from_source}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_game_played
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendGamePlayed](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendGamePlayed)
 *
 * This function checks if the specified friend is in a game, and gets info about the game if they are.
 *
 * @param {Real} steamIDFriend The Steam ID of the other user.
 * @returns {Struct.SteamFriendsFriendGamePlayed} Fills in the details if the user is in a game.
 * @function_end
 */

/**
 * @function steam_friends_get_friend_message
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendMessage](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendMessage)
 *
 * This function gets the data from a Steam friends message.
 *
 * @param {Real} steamIDFriend The Steam ID of the friend that sent this message.
 * @param {Real} iMessageID The index of the message. This should be the `m_iMessageID` field of [GameConnectedFriendChatMsg_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameConnectedFriendChatMsg_t).
 * @param {Real} cubData 
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
 * [[Note: Upon on first joining a lobby, chat room, or game server the current user will not known the name of the other users automatically; that information will arrive asynchronously via [PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t) callbacks.]]
 * 
 * To get the persona name of the current user use ${function.steam_friends_get_persona_name}.
 *
 * @param {Real} steamIDFriend The Steam ID of the other user.
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
 * @param {Real} steamIDFriend The Steam ID of the other user.
 * @param {Real} iPersonaName The index of the history to receive. 0 is their current persona name, 1 is their most recent before they changed it, etc.
 * @returns {String} 
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
 * @param {Real} steamIDFriend The Steam ID of the other user.
 * @returns {Enum.SteamFriendsPersonaState} The friend state of the specified user. (Online, Offline, In-Game, etc.)
 * @function_end
 */

/**
 * @function steam_friends_get_friend_relationship
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendRelationship](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendRelationship)
 *
 * This function gets a relationship to a specified user.
 *
 * @param {Real} steamIDFriend The Steam ID of the other user.
 * @returns {Enum.SteamFriendsRelationship} How the users know each other.
 * @function_end
 */

/**
 * @function steam_friends_get_friend_rich_presence
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendRichPresence](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendRichPresence)
 *
 * This function gets a Rich Presence value from a specified friend.
 *
 * @param {Real} steamIDFriend The friend to get the Rich Presence value for.
 * @param {String} pchKey The Rich Presence key to request.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_rich_presence_key_by_index
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendRichPresenceKeyByIndex](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendRichPresenceKeyByIndex)
 *
 * This function gets a Rich Presence value from a specified friend using the index of the key.
 *
 * @param {Real} steamIDFriend This should be the same user provided to the previous call to ${function.steam_friends_get_friend_rich_presence_key_count}!
 * @param {Real} iKey An index between 0 and ${function.steam_friends_get_friend_rich_presence_key_count}.
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
 * @param {Real} steamIDFriend The Steam ID of the user to get the Rich Presence Key Count of.
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
 * @param {Real} iFG An index between 0 and ${function.steam_friends_get_friends_group_count}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friends_group_name
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendsGroupName](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendsGroupName)
 *
 * This function gets the name for the given friends group.
 *
 * @param {Real} friendsGroupID The friends group ID to get the name of.
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
 * @member {Real} steam_id The Steam ID that the avatar has been loaded for.
 * @member {Real} image The Steam image handle of the now loaded image.
 * @member {Real} wide Width of the loaded image.
 * @member {Real} tall Height of the loaded image.
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
 * @param {Real} friendsGroupID The friends group ID to get the number of friends in.
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
 * @param {Real} friendsGroupID The friends group ID to get the members list of.
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
 * @param {Real} steamIDPlayer The Steam ID of the user.
 * @returns {String} 
 * @function_end
 */

/**
 * @function steam_friends_has_friend
 * @description > **Steamworks Function**: [ISteamFriends::HasFriend](https://partner.steamgames.com/doc/api/ISteamFriends#HasFriend)
 *
 * This function checks if the user meets the specified criteria. (Friends, blocked, users on the same server, etc.)
 *
 * @param {Real} steamIDFriend The Steam user to check the friend status of.
 * @param {Real} iFriendFlags A combined union (binary "or") of one or more ${enum.SteamFriendsFriendFlag}.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_invite_user_to_game
 * @description > **Steamworks Function**: [ISteamFriends::InviteUserToGame](https://partner.steamgames.com/doc/api/ISteamFriends#InviteUserToGame)
 *
 * This function invites a friend or clan member to the current game using a special invite string.
 * 
 * If the target user accepts the invite then the `pchConnectString` gets added to the command-line when launching the game.
 * If the game is already running for that user, then they will receive a [GameRichPresenceJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameRichPresenceJoinRequested_t) callback with the connect string.
 *
 * @param {Real} steamIDFriend The Steam ID of the friend to invite.
 * @param {String} pchConnectString A string that lets the friend know how to join the game (i.e. the game server IP). This can not be longer than specified in [k_cchMaxRichPresenceValueLength](https://partner.steamgames.com/doc/api/ISteamFriends#k_cchMaxRichPresenceValueLength).
 * @returns {Bool}
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::GameRichPresenceJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameRichPresenceJoinRequested_t)
 * 
 * [[Note: This callback is made when joining a game. If the user is attempting to join a lobby, then the callback [GameLobbyJoinRequested_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameLobbyJoinRequested_t) will be made.]]
 * 
 * @member {Real} steam_id_friend The friend they joined through. This will be invalid if not directly via a friend.
 * @member {String} connect The value associated with the `"connect"` Rich Presence key.
 * @event_end
 * @function_end
 */

/**
 * @function steam_friends_is_clan_chat_admin
 * @description > **Steamworks Function**: [ISteamFriends::IsClanChatAdmin](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanChatAdmin)
 *
 * This function checks if a user in the Steam group chat room is an admin.
 *
 * @param {Real} steamIDClanChat The Steam ID of the Steam group chat room.
 * @param {Real} steamIDUser The Steam ID of the user to check the admin status of.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_clan_public
 * @description > **Steamworks Function**: [ISteamFriends::IsClanPublic](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanPublic)
 *
 * This function checks if the Steam group is public.
 *
 * @param {Real} steamIDClan The Steam ID of the Steam group.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_clan_official_game_group
 * @description > **Steamworks Function**: [ISteamFriends::IsClanOfficialGameGroup](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanOfficialGameGroup)
 *
 * This function checks if the Steam group is an official game group/community hub.
 *
 * @param {Real} steamIDClan The Steam ID of the Steam group.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_clan_chat_window_open_in_steam
 * @description > **Steamworks Function**: [ISteamFriends::IsClanChatWindowOpenInSteam](https://partner.steamgames.com/doc/api/ISteamFriends#IsClanChatWindowOpenInSteam)
 *
 * This function checks if the Steam Group chat room is open in the Steam UI.
 *
 * @param {Real} steamIDClanChat The Steam ID of the Steam group chat room to check.
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_friends_is_following
 * @description > **Steamworks Function**: [ISteamFriends::IsFollowing](https://partner.steamgames.com/doc/api/ISteamFriends#IsFollowing)
 *
 * This function checks if the current user is following the specified user.
 *
 * @param {Real} steamID The Steam ID of the check if we are following.
 * @param {Function} [callback] The function to call upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [FriendsIsFollowing_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsIsFollowing_t)
 * 
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} steam_id The Steam ID that was checked.
 * @member {Bool} is_following Are we following the user? (`true`) or not? (`false`)
 * @event_end
 * 
 * @function_end
 */

/**
 * @function steam_friends_is_user_in_source
 * @description > **Steamworks Function**: [ISteamFriends::IsUserInSource](https://partner.steamgames.com/doc/api/ISteamFriends#IsUserInSource)
 *
 * This function checks if a specified user is in a source (Steam group, chat room, lobby, or game server).
 *
 * @param {Real} steamIDUser The user to check if they are in the source.
 * @param {Real} steamIDSource The source to check for the user.
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
 * @param {Real} steamIDClan The Steam group to get the officers list for.
 * @param {Function} [callback] The function to be called upon completion.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::ClanOfficerListResponse_t](https://partner.steamgames.com/doc/api/ISteamFriends#ClanOfficerListResponse_t)
 * @member {Real} steam_id_clan The Steam group that we just got the officer list for.
 * @member {Real} officers The number of officers in the group. This is the same as ${function.steam_friends_get_clan_officer_count}.
 * @member {Bool} success Was the call successful? If it wasn't this may indicate a temporary loss of connection to Steam. If this returns `true`, this does not necessarily mean that all of the info for this Steam group has been downloaded.
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
 * @param {Real} steamIDFriend The Steam ID of the user to request the rich presence of.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::FriendRichPresenceUpdate_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendRichPresenceUpdate_t)
 * @member {Real} steam_id_friend The Steam ID of the user whose rich presence has changed.
 * @member {Real} The App ID of the game. This should always be the current game.
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
 * @param {Real} steamIDUser The user to request the information of.
 * @param {Bool} bRequireNameOnly Retrieve the Persona name only (`true`)? Or both the name and the avatar (`false`)?
 * @returns {Bool} `true` means that the data has being requested, and a [PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t) callback will be posted when it's retrieved. `false` means that we already have all the details about that user, and functions that require this information can be used immediately.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamFriends::PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t)
 * @member {Real} steam_id Steam ID of the user who changed.
 * @member {Real} change_flags A bit-wise union of ${Enum.SteamFriendsPersonaChange} values.
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
 * @param {Real} steamIDUser Unused.
 * @param {Bool} bSpeaking Did the user start speaking in game (`true`) or stop speaking in game (`false`)?
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
 * @param {Real} steamIDUserPlayedWith The other user that we have played with.
 * @function_end
 */

/**
 * @function steam_friends_set_rich_presence
 * @description > **Steamworks Function**: [ISteamFriends::SetRichPresence](https://partner.steamgames.com/doc/api/ISteamFriends#SetRichPresence)
 *
 * This function sets a Rich Presence key/value for the current user that is automatically shared to all friends playing the same game.
 * 
 * Each user can have up to 20 keys set as defined by [k_cchMaxRichPresenceKeys](https://partner.steamgames.com/doc/api/ISteamFriends#k_cchMaxRichPresenceKeys).
 * 
 * You can clear all of the keys for the current user with ${function.steam_friends_clear_rich_presence}.
 * 
 * To get rich presence keys for friends see: ${function.steam_friends_get_friend_rich_presence}.
 *
 * @param {String} pchKey The rich presence 'key' to set. This can not be longer than specified in [k_cchMaxRichPresenceKeyLength](https://partner.steamgames.com/doc/api/ISteamFriends#k_cchMaxRichPresenceKeyLength).
 * @param {String} pchValue The rich presence 'value' to associate with `pchKey`. This can not be longer than specified in [k_cchMaxRichPresenceValueLength](https://partner.steamgames.com/doc/api/ISteamFriends#k_cchMaxRichPresenceValueLength). If this is set to an empty string (`""`) then the key is removed if it's set.
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
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} iDLC
 * @returns {Struct.SteamAppsDlcData} 
 * @function_end 
 */

/**
 * @function steam_apps_is_app_installed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} appID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_cybercafe
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_dlc_installed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} appID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_low_violence
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_subscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_subscribed_app
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} appID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_subscribed_from_family_sharing
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_subscribed_from_free_weekend
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_is_timed_trial
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamAppsTimedTrialStatus} 
 * @function_end 
 */

/**
 * @function steam_apps_is_vac_banned
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_get_app_build_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_apps_get_app_install_dir
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} appID
 * @returns {Struct.SteamAppsInstallDir} 
 * @function_end 
 */

/**
 * @function steam_apps_get_app_owner
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_apps_get_available_game_languages
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_apps_get_current_beta_name
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamAppsBetaName} 
 * @function_end 
 */

/**
 * @function steam_apps_get_num_betas
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamAppsNumBetas} 
 * @function_end 
 */

/**
 * @function steam_apps_get_beta_info
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} iBetaIndex
 * @returns {Struct.SteamAppsBetaInfo} 
 * @function_end 
 */

/**
 * @function steam_apps_set_active_beta
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pchBetaName
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_get_current_game_language
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_apps_get_dlc_count
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_apps_get_dlc_download_progress
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} nAppID
 * @returns {Struct.SteamAppsDlcDownloadProgress} 
 * @function_end 
 */

/**
 * @function steam_apps_get_app_ownership_ticket_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} app_id
 * @param {Buffer} ticket_buffer
 * @param {Real} max_bytes
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_apps_get_earliest_purchase_unix_time
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} nAppID
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_apps_get_file_details
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pszFileName
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_apps_get_installed_depots
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} appID
 * @param {Real} cMaxDepots
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_apps_get_launch_command_line
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} cubCommandLine
 * @returns {Struct.SteamAppsLaunchCommandLine} 
 * @function_end 
 */

/**
 * @function steam_apps_get_launch_query_param
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pchKey
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_apps_install_dlc
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} nAppID
 * @function_end 
 */

/**
 * @function steam_apps_mark_content_corrupt
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} bMissingFilesOnly
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_apps_request_all_proof_of_purchase_keys
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_apps_request_app_proof_of_purchase_key
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} nAppID
 * @function_end 
 */

/**
 * @function steam_apps_uninstall_dlc
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} nAppID
 * @function_end 
 */

/**
 * @function steam_apps_set_callback_dlc_installed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_apps_clear_callback_dlc_installed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_screenshots_add_screenshot_to_library
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pchFilename
 * @param {String} pchThumbnailFilename
 * @param {Real} nWidth
 * @param {Real} nHeight
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_screenshots_add_vr_screenshot_to_library
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamScreenshotsVrScreenshotType} eType
 * @param {String} pchFilename
 * @param {String} pchVRFilename
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_screenshots_hook_screenshots
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} bHook
 * @function_end 
 */

/**
 * @function steam_screenshots_is_screenshots_hooked
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_screenshots_set_location
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} hScreenshot
 * @param {String} pchLocation
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_screenshots_tag_published_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} hScreenshot
 * @param {Real} unPublishedFileID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_screenshots_tag_user
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} hScreenshot
 * @param {Real} steamID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_screenshots_trigger_screenshot
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_screenshots_write_screenshot
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Buffer} pubRGB
 * @param {Real} cubRGB
 * @param {Real} nWidth
 * @param {Real} nHeight
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_screenshots_set_callback_screenshot_ready
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_screenshots_set_callback_screenshot_requested
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_screenshots_clear_callback_screenshot_ready
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_screenshots_clear_callback_screenshot_requested
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_advertise_game
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_game_server
 * @param {Real} un_ip_server
 * @param {Real} us_port_server
 * @function_end 
 */

/**
 * @function steam_user_begin_auth_session
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Buffer} auth_ticket
 * @param {Real} cb_auth_ticket
 * @param {Real} steam_id
 * @returns {Enum.SteamUserBeginAuthSessionResult} 
 * @function_end 
 */

/**
 * @function steam_user_is_behind_nat
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_user_is_phone_identifying
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_user_is_phone_requiring_verification
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_user_is_phone_verified
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_user_is_two_factor_enabled
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_user_logged_on
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_user_set_duration_control_online_state
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamUserDurationControlOnlineState} state
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_user_cancel_auth_ticket
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} h_auth_ticket
 * @function_end 
 */

/**
 * @function steam_user_decompress_voice
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Buffer} compressed
 * @param {Real} cb_compressed
 * @param {Buffer} dest
 * @param {Real} cb_dest_buffer_size
 * @param {Real} n_desired_sample_rate
 * @returns {Enum.SteamApiVoiceResult} 
 * @function_end 
 */

/**
 * @function steam_user_end_auth_session
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id
 * @function_end 
 */

/**
 * @function steam_user_get_auth_session_ticket
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Buffer} out_ticket
 * @param {Real} cb_max_ticket
 * @param {Struct.SteamNetworkingIdentity} [remote_identity]
 * @returns {Struct.SteamUserAuthSessionTicket} 
 * @function_end 
 */

/**
 * @function steam_user_get_h_steam_user
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_user_get_player_steam_level
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_user_get_steam_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_user_decode_steam_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id
 * @returns {Struct.SteamId} 
 * @function_end 
 */

/**
 * @function steam_user_start_voice_recording
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_stop_voice_recording
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_get_voice_optimal_sample_rate
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_user_get_available_voice
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamUserAvailableVoice} 
 * @function_end 
 */

/**
 * @function steam_user_get_voice
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} b_want_compressed
 * @param {Buffer} dest_compressed
 * @param {Real} cb_dest_compressed
 * @param {Bool} b_want_uncompressed
 * @param {Buffer} dest_uncompressed
 * @param {Real} cb_dest_uncompressed
 * @param {Real} n_desired_sample_rate
 * @returns {Struct.SteamUserGetVoiceResult} 
 * @function_end 
 */

/**
 * @function steam_user_get_user_data_folder
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamUserDataFolder} 
 * @function_end 
 */

/**
 * @function steam_user_request_encrypted_app_ticket
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Buffer} data_to_include
 * @param {Real} cb_data_to_include
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_user_get_encrypted_app_ticket
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Buffer} out_ticket
 * @param {Real} cb_max_ticket
 * @returns {Struct.SteamUserEncryptedAppTicket} 
 * @function_end 
 */

/**
 * @function steam_user_get_game_badge_level
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} n_series
 * @param {Bool} b_foil
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_user_get_auth_ticket_for_web_api
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pch_identity
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_user_get_duration_control
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_user_request_store_auth_url
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pch_redirect_url
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_user_get_market_eligibility
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_user_track_app_usage_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} game_id
 * @param {Real} e_app_usage_event
 * @param {String} pch_extra_info
 * @function_end 
 */

/**
 * @function steam_user_user_has_license_for_app
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id
 * @param {Real} app_id
 * @returns {Enum.SteamApiUserHasLicenseResult} 
 * @function_end 
 */

/**
 * @function steam_user_set_callback_steam_servers_connected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_user_clear_callback_steam_servers_connected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_set_callback_steam_server_connect_failure
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_user_clear_callback_steam_server_connect_failure
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_set_callback_steam_servers_disconnected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_user_clear_callback_steam_servers_disconnected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_set_callback_client_game_server_deny
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_user_clear_callback_client_game_server_deny
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_set_callback_licenses_updated
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_user_clear_callback_licenses_updated
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_user_set_callback_microtxn_authorization_response
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_user_clear_callback_microtxn_authorization_response
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_overlay_needs_present
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_check_file_signature
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} sz_file_name
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_utils_get_api_call_failure_reason
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_api_call
 * @returns {Enum.SteamUtilsApiCallFailure} 
 * @function_end 
 */

/**
 * @function steam_utils_get_api_call_result
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_api_call
 * @param {Real} callback_expected
 * @param {Buffer} out_callback
 * @param {Real} out_callback_size
 * @returns {Struct.SteamUtilsApiCallResult} 
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_ip_country
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_ip_country
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_low_battery_power
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_low_battery_power
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_steam_api_call_completed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_steam_api_call_completed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_app_resuming_from_suspend
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_app_resuming_from_suspend
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_steam_shutdown
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_steam_shutdown
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_get_app_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_connected_universe
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Enum.SteamApiUniverse} 
 * @function_end 
 */

/**
 * @function steam_utils_get_current_battery_power
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_entered_gamepad_text_input
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamUtilsGamepadTextInput} 
 * @function_end 
 */

/**
 * @function steam_utils_get_entered_gamepad_text_length
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_image_rgba
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} i_image
 * @param {Buffer} dest
 * @param {Real} n_dest_buffer_size
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_get_image_size
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} i_image
 * @returns {Struct.SteamUtilsImageSize} 
 * @function_end 
 */

/**
 * @function steam_utils_get_ipc_call_count
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_ip_country
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_utils_get_seconds_since_app_active
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_seconds_since_computer_active
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_server_real_time
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_utils_get_steam_ui_language
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_utils_is_overlay_enabled
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_in_big_picture_mode
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_running_in_vr
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_running_on_steam_deck
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_steam_china_launcher
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_is_api_call_completed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_api_call
 * @returns {Struct.SteamUtilsApiCallCompleted} 
 * @function_end 
 */

/**
 * @function steam_utils_init_filter_text
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_filter_text
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamUtilsTextFilteringContext} context
 * @param {Real} source_steam_id
 * @param {String} input_message
 * @returns {Struct.SteamUtilsFilterTextResult} 
 * @function_end 
 */

/**
 * @function steam_utils_is_vr_headset_streaming_enabled
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_set_overlay_notification_inset
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} n_horizontal_inset
 * @param {Real} n_vertical_inset
 * @function_end 
 */

/**
 * @function steam_utils_set_overlay_notification_position
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamApiNotificationPosition} notification_position
 * @function_end 
 */

/**
 * @function steam_utils_set_vr_headset_streaming_enabled
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} b_enabled
 * @function_end 
 */

/**
 * @function steam_utils_show_gamepad_text_input
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamUtilsGamepadTextInputMode} input_mode
 * @param {Enum.SteamUtilsGamepadTextInputLineMode} line_mode
 * @param {String} description
 * @param {Real} char_max
 * @param {String} existing_text
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_show_floating_gamepad_text_input
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamUtilsFloatingGamepadTextInputMode} keyboard_mode
 * @param {Real} text_field_x
 * @param {Real} text_field_y
 * @param {Real} text_field_width
 * @param {Real} text_field_height
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_utils_dismiss_floating_gamepad_text_input
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_start_vr_dashboard
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_game_launcher_mode
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} b_launcher_mode
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_floating_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_floating_gamepad_text_input_dismissed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_utils_set_callback_warning_message
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_utils_clear_callback_warning_message
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_ugc_add_app_dependency
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Real} app_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_add_dependency
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} parent_published_file_id
 * @param {Real} child_published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_add_excluded_tag
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {String} tag_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_key_value_tag
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} key
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_preview_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} preview_file_path
 * @param {Enum.SteamItemPreviewType} preview_type
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_preview_video
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} video_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_item_to_favorites
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} app_id
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_add_required_key_value_tag
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {String} key
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_required_tag
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {String} tag_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_required_tag_group
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Array[String]} tags_csv
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_init_workshop_for_game_server
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} workshop_depot_id
 * @param {String} folder
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_item
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} consumer_app_id
 * @param {Enum.SteamWorkshopFileType} workshop_file_type
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_create_query_all_ugc_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamUgcQuery} query_type
 * @param {Enum.SteamUgcMatchingUgcType} matching_ugc_type
 * @param {Real} creator_app_id
 * @param {Real} consumer_app_id
 * @param {Real} page
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_query_ugc_details_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_create_query_user_ugc_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} account_id
 * @param {Enum.SteamUserUgcList} list_type
 * @param {Enum.SteamUgcMatchingUgcType} matching_ugc_type
 * @param {Enum.SteamUserUgcListSortOrder} sort_order
 * @param {Real} creator_app_id
 * @param {Real} consumer_app_id
 * @param {Real} page
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_delete_item
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_download_item
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Bool} high_priority
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_app_dependencies
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_download_info
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @returns {Struct.SteamUgcItemDownloadInfo} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_install_info
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @returns {Struct.SteamUgcItemInstallInfo} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_state
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_item_update_progress
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @returns {Struct.SteamUgcItemUpdateProgress} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_num_subscribed_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} include_locally_disabled
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_subscribed_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} c_max_entries
 * @param {Bool} include_locally_disabled
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_result
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Struct.SteamUgcQueryResult} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_preview_url
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Struct.SteamUgcQueryPreviewUrl} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_metadata
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Struct.SteamUgcQueryMetadata} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_children
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} c_max_entries
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_statistic
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Enum.SteamUgcStatisticType} stat_type
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_num_additional_previews
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_additional_preview
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} preview_index
 * @param {String} original_file_name
 * @returns {Struct.SteamUgcAdditionalPreview} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_num_key_value_tags
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_key_value_tag
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} key_value_tag_index
 * @returns {Struct.SteamUgcKeyValueTag} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_query_ugc_content_descriptors
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} max_descriptors
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_app_dependency
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Real} app_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_remove_dependency
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} parent_published_file_id
 * @param {Real} child_published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_remove_item_from_favorites
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} app_id
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_remove_item_key_value_tags
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} key
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_item_preview
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Real} index
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_add_content_descriptor
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_remove_content_descriptor
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_required_game_versions
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} game_branch_min
 * @param {String} game_branch_max
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_request_ugc_details
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Real} max_age_seconds
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_send_query_ugc_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_release_query_ugc_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @function_end 
 */

/**
 * @function steam_ugc_set_callback_item_installed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_ugc_clear_callback_item_installed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_ugc_set_allow_cached_response
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} max_age_seconds
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_cloud_file_name_filter
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {String} match_cloud_file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_content
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} content_folder
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_description
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} description
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_metadata
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} metadata
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_preview
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} preview_file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_tags
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Array[String]} tags_csv
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_title
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} title
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_update_language
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} language
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_items_disabled_locally
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @param {Bool} disabled_locally
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_item_visibility
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_language
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {String} language
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_match_any_tag
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} match_any_tag
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_ranked_by_trend_days
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} days
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_additional_previews
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} return_additional_previews
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_children
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} return_children
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_key_value_tags
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} return_key_value_tags
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_long_description
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} return_long_description
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_metadata
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} return_metadata
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_only_ids
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} return_only_ids
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_playtime_stats
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} days
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_return_total_only
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Bool} return_total_only
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_search_text
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {String} search_text
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_subscriptions_load_order
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_set_user_item_vote
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Bool} vote_up
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_get_user_item_vote
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_start_item_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} consumer_app_id
 * @param {Real} published_file_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_ugc_start_playtime_tracking
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_stop_playtime_tracking
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_stop_playtime_tracking_for_all_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_submit_item_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} change_note
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_subscribe_item
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_suspend_downloads
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} suspend
 * @function_end 
 */

/**
 * @function steam_ugc_unsubscribe_item
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_set_callback_user_subscribed_items_list_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_ugc_clear_callback_user_subscribed_items_list_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_ugc_update_item_preview_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Real} index
 * @param {String} preview_file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_update_item_preview_video
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Real} index
 * @param {String} video_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_show_workshop_eula
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_ugc_get_workshop_eula_status
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_ugc_set_callback_file_subscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_ugc_clear_callback_file_subscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_ugc_set_callback_file_unsubscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_ugc_clear_callback_file_unsubscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_ugc_get_num_supported_game_versions
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_activate_action_set
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} action_set_handle
 * @function_end 
 */

/**
 * @function steam_input_activate_action_set_layer
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} action_set_layer_handle
 * @function_end 
 */

/**
 * @function steam_input_deactivate_action_set_layer
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} action_set_layer_handle
 * @function_end 
 */

/**
 * @function steam_input_deactivate_all_action_set_layers
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @function_end 
 */

/**
 * @function steam_input_get_active_action_set_layers
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Struct.SteamInputActiveActionSetLayers} 
 * @function_end 
 */

/**
 * @function steam_input_get_action_set_handle
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pszActionSetName
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_analog_action_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} analog_action_handle
 * @returns {Struct.SteamInputAnalogActionData} 
 * @function_end 
 */

/**
 * @function steam_input_get_analog_action_handle
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pszActionName
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_analog_action_origins
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} action_set_handle
 * @param {Real} analog_action_handle
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end 
 */

/**
 * @function steam_input_get_glyph_png_for_action_origin
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} origin
 * @param {Real} size
 * @param {Real} flags
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_input_get_glyph_svg_for_action_origin
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} origin
 * @param {Real} flags
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_input_get_connected_controllers
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_input_get_controller_for_gamepad_index
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} nIndex
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_current_action_set
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_digital_action_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} digital_action_handle
 * @returns {Struct.SteamInputDigitalActionData} 
 * @function_end 
 */

/**
 * @function steam_input_get_digital_action_handle
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} pszActionName
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_digital_action_origins
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} action_set_handle
 * @param {Real} digital_action_handle
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end 
 */

/**
 * @function steam_input_get_gamepad_index_for_controller
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_input_type_for_handle
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_motion_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Struct.SteamInputMotionData} 
 * @function_end 
 */

/**
 * @function steam_input_get_string_for_action_origin
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} eOrigin
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_input_init
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} explicitly_call_run_frame
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_input_enable_device_callbacks
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_input_run_frame
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_input_set_dual_sense_trigger_effect
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Array[Real]} pParam
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_input_set_led_color
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} nColorR
 * @param {Real} nColorG
 * @param {Real} nColorB
 * @param {Real} nFlags
 * @function_end 
 */

/**
 * @function steam_input_show_binding_panel
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_input_shutdown
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_input_stop_analog_action_momentum
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} analog_action_handle
 * @function_end 
 */

/**
 * @function steam_input_trigger_vibration
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} usLeftSpeed
 * @param {Real} usRightSpeed
 * @function_end 
 */

/**
 * @function steam_input_trigger_vibration_extended
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} usLeftSpeed
 * @param {Real} usRightSpeed
 * @param {Real} usLeftTriggerSpeed
 * @param {Real} usRightTriggerSpeed
 * @function_end 
 */

/**
 * @function steam_input_get_action_origin_from_xbox_origin
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @param {Real} eOrigin
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_translate_action_origin
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} eDestinationInputType
 * @param {Real} eSourceOrigin
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_get_device_binding_revision
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Struct.SteamInputDeviceBindingRevision} 
 * @function_end 
 */

/**
 * @function steam_input_get_remote_play_session_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_input_set_callback_device_connected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_input_clear_callback_device_connected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_input_set_callback_device_disconnected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_input_clear_callback_device_disconnected
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_input_set_callback_action_set_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_input_clear_callback_action_set_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_input_set_callback_controller_battery
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_input_clear_callback_controller_battery
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_userstats_get_stat_int
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatInt} 
 * @function_end 
 */

/**
 * @function steam_userstats_get_stat_float
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatFloat} 
 * @function_end 
 */

/**
 * @function steam_userstats_set_stat_int
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @param {Real} data
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_set_stat_float
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @param {Real} data
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_update_avg_rate_stat
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @param {Real} count_this_session
 * @param {Real} session_length
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_get_achievement
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsUserAchievement} 
 * @function_end 
 */

/**
 * @function steam_userstats_set_achievement
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_clear_achievement
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_and_unlock_time
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 * @function_end 
 */

/**
 * @function steam_userstats_store_stats
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_icon
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_display_attribute
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_userstats_indicate_achievement_progress
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @param {Real} cur_progress
 * @param {Real} max_progress
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_num_achievements
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_name
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} index
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_userstats_request_user_stats
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_user
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_user_stat_int
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_user
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatInt} 
 * @function_end 
 */

/**
 * @function steam_userstats_user_stat_float
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_user
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatFloat} 
 * @function_end 
 */

/**
 * @function steam_userstats_user_achievement
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_user
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsUserAchievement} 
 * @function_end 
 */

/**
 * @function steam_userstats_user_achievement_and_unlock_time
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_user
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 * @function_end 
 */

/**
 * @function steam_userstats_reset_all_stats
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} achievements_too
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_userstats_find_or_create_leaderboard
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} leaderboard_name
 * @param {Enum.SteamLeaderboardSortMethod} sort_method
 * @param {Enum.SteamLeaderboardDisplayType} display_type
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_find_leaderboard
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} leaderboard_name
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_leaderboard_name
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_userstats_leaderboard_entry_count
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_leaderboard_sort_method
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @returns {Enum.SteamLeaderboardSortMethod} 
 * @function_end 
 */

/**
 * @function steam_userstats_leaderboard_display_type
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @returns {Enum.SteamLeaderboardDisplayType} 
 * @function_end 
 */

/**
 * @function steam_userstats_download_leaderboard_entries
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @param {Enum.SteamLeaderboardDataRequest} request
 * @param {Real} range_start
 * @param {Real} range_end
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_download_leaderboard_entries_for_users
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @param {Array[Real]} users
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_downloaded_leaderboard_entry
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_entries_handle
 * @param {Real} entry_index
 * @param {Buffer} buffer
 * @param {Real} buffer_size
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 * @function_end 
 */

/**
 * @function steam_userstats_upload_leaderboard_score
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @param {Enum.SteamLeaderboardUploadScoreMethod} method
 * @param {Real} score
 * @param {Buffer} score_details_buffer
 * @param {Real} score_details_count
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_attach_leaderboard_ugc
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} leaderboard_handle
 * @param {Real} ugc_handle
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_number_of_current_players
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_request_global_achievement_percentages
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_most_achieved_achievement_info
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 * @function_end 
 */

/**
 * @function steam_userstats_next_most_achieved_achievement_info
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} iterator_prev
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_achieved_percent
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_userstats_request_global_stats
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} history_days
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_userstats_global_stat_int64
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatInt64} 
 * @function_end 
 */

/**
 * @function steam_userstats_global_stat_double
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatDouble} 
 * @function_end 
 */

/**
 * @function steam_userstats_global_stat_history_int64
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatHistoryInt64} 
 * @function_end 
 */

/**
 * @function steam_userstats_global_stat_history_double
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatHistoryDouble} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_progress_limits_int
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @param {Real} cur_progress
 * @param {Real} max_progress
 * @returns {Struct.SteamUserStatsIntMinMax} 
 * @function_end 
 */

/**
 * @function steam_userstats_achievement_progress_limits_float
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} achievement_name
 * @param {Real} cur_progress
 * @param {Real} max_progress
 * @returns {Struct.SteamUserStatsFloatMinMax} 
 * @function_end 
 */

/**
 * @function steam_userstats_set_callback_user_stats_received
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_userstats_clear_callback_user_stats_received
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_userstats_set_callback_user_stats_stored
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_userstats_clear_callback_user_stats_stored
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_userstats_set_callback_user_achievement_stored
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_userstats_clear_callback_user_achievement_stored
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_music_is_enabled
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_music_is_playing
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_music_get_playback_status
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Enum.SteamMusicPlaybackStatus} 
 * @function_end 
 */

/**
 * @function steam_music_play
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_music_pause
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_music_play_previous
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_music_play_next
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_music_set_volume
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} volume
 * @function_end 
 */

/**
 * @function steam_music_get_volume
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_music_set_callback_playback_status_has_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_music_clear_callback_playback_status_has_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_music_set_callback_volume_has_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_music_clear_callback_volume_has_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_timeline_set_timeline_tooltip
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} description
 * @param {Real} time_delta_seconds
 * @function_end 
 */

/**
 * @function steam_timeline_clear_timeline_tooltip
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} time_delta_seconds
 * @function_end 
 */

/**
 * @function steam_timeline_add_instantaneous_timeline_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} title
 * @param {String} description
 * @param {String} icon
 * @param {Real} priority
 * @param {Real} start_offset_seconds
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_timeline_add_range_timeline_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} title
 * @param {String} description
 * @param {String} icon
 * @param {Real} priority
 * @param {Real} start_offset_seconds
 * @param {Real} duration_seconds
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_timeline_start_range_timeline_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} title
 * @param {String} description
 * @param {String} icon
 * @param {Real} priority
 * @param {Real} start_offset_seconds
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_timeline_update_range_timeline_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} event_handle
 * @param {String} title
 * @param {String} description
 * @param {String} icon
 * @param {Real} priority
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip
 * @function_end 
 */

/**
 * @function steam_timeline_end_range_timeline_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} event_handle
 * @param {Real} end_offset_seconds
 * @function_end 
 */

/**
 * @function steam_timeline_remove_timeline_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} event_handle
 * @function_end 
 */

/**
 * @function steam_timeline_does_event_recording_exist
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} event_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_timeline_start_game_phase
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_timeline_end_game_phase
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_timeline_set_game_phase_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} phase_id
 * @function_end 
 */

/**
 * @function steam_timeline_does_game_phase_recording_exist
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} phase_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_timeline_add_game_phase_tag
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} tag_name
 * @param {String} tag_icon
 * @param {String} tag_group
 * @param {Real} priority
 * @function_end 
 */

/**
 * @function steam_timeline_set_game_phase_attribute
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} attribute_group
 * @param {String} attribute_value
 * @param {Real} priority
 * @function_end 
 */

/**
 * @function steam_timeline_set_timeline_game_mode
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamTimelineGameMode} mode
 * @function_end 
 */

/**
 * @function steam_timeline_open_overlay_to_game_phase
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} phase_id
 * @function_end 
 */

/**
 * @function steam_timeline_open_overlay_to_timeline_event
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} event_handle
 * @function_end 
 */

/**
 * @function steam_timeline_set_callback_game_phase_recording_exists
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_timeline_clear_callback_game_phase_recording_exists
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_timeline_set_callback_event_recording_exists
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_timeline_clear_callback_event_recording_exists
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_inventory_add_promo_item
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} item_def_id
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_add_promo_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} item_def_ids
 * @param {Real} num_item_defs
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_check_result_steam_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} steam_id_expected
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_consume_item
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} item_instance_id
 * @param {Real} quantity
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_deserialize_result
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Buffer} data
 * @param {Real} data_size
 * @returns {Struct.SteamInventoryDeserializeResult} 
 * @function_end 
 */

/**
 * @function steam_inventory_destroy_result
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @function_end 
 */

/**
 * @function steam_inventory_exchange_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} generate_item_defs
 * @param {Array[Real]} generate_qty
 * @param {Real} generate_len
 * @param {Array[Real]} destroy_instance_ids
 * @param {Array[Real]} destroy_qty
 * @param {Real} destroy_len
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_generate_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} item_defs
 * @param {Array[Real]} quantities
 * @param {Real} count
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_all_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @returns {Struct.SteamInventoryResultItems} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_status
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @returns {Enum.SteamApiResult} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_timestamp
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_eligible_promo_item_definition_ids
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} c_max_item_defs
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_inventory_load_item_definitions
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_definition_ids
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} c_max_item_defs
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_items_by_id
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} item_instance_ids
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_serialize_result
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Buffer} out_data
 * @param {Real} out_capacity
 * @returns {Struct.SteamInventorySerializeResult} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_item_property_keys_array
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} item_index
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_item_property
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} item_index
 * @param {String} property_name
 * @returns {Struct.SteamInventoryItemProperty} 
 * @function_end 
 */

/**
 * @function steam_inventory_start_purchase
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Array[Real]} item_def_ids
 * @param {Array[Real]} quantities
 * @param {Real} count
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_inventory_request_prices
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_inventory_get_num_items_with_prices
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_items_with_prices
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} max
 * @returns {Struct.SteamInventoryItemsWithPrices} 
 * @function_end 
 */

/**
 * @function steam_inventory_start_update_properties
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_remove_property
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_string
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_bool
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {Bool} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_int64
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {Real} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_float
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {Real} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_submit_update_properties
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} result_handle
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_transfer_item_quantity
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} item_instance_id_source
 * @param {Real} quantity
 * @param {Real} item_instance_id_dest
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_trigger_item_drop
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} item_def_id
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_grant_promo_items
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_definition_property
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} item_def_id
 * @param {String} property_name
 * @returns {Struct.SteamInventoryDefProperty} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_definition_property_keys
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} item_def_id
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_price
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} item_def_id
 * @returns {Struct.SteamInventoryItemPrice} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_result_ready
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_result_ready
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_full_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_full_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_definition_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_definition_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_published_file_subscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_published_file_subscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_published_file_unsubscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_published_file_unsubscribed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_local_file_change
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_local_file_change
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_is_cloud_enabled_for_account
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_is_cloud_enabled_for_app
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_cloud_enabled_for_app
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} enabled
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @param {Buffer} data
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_read
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_delete
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_exists
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_persisted
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_size
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_timestamp
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_count
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_name_and_size
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} index
 * @returns {Struct.SteamRemoteStorageFileNameAndSize} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_quota
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamRemoteStorageQuota} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_sync_platforms
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @param {Enum.SteamRemoteStoragePlatform} platforms
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_sync_platforms
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Enum.SteamRemoteStoragePlatform} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_forget
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_open
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_write_chunk
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} stream
 * @param {Buffer} data
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_close
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} stream
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_cancel
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} stream
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_cached_ugc_count
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_cached_ugc_handle
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_ugc_details
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} ugc_handle
 * @returns {Struct.SteamRemoteStorageUgcDetails} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_ugc_read
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} ugc_handle
 * @param {Buffer} out_data
 * @param {Real} bytes_to_read
 * @param {Real} offset
 * @param {Enum.SteamRemoteStorageUgcReadAction} action
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_share
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file_name
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_remote_storage_ugc_download
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} ugc_handle
 * @param {Real} priority
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_remote_storage_ugc_download_to_location
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} ugc_handle
 * @param {String} location
 * @param {Real} priority
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_remote_storage_publish_workshop_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} file
 * @param {String} preview_file
 * @param {Real} app_id_consumer
 * @param {String} title
 * @param {String} description
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility
 * @param {String} tags_csv
 * @param {Enum.SteamRemoteStorageWorkshopFileType} file_type
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_remote_storage_create_published_file_update_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_preview_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} preview_file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_title
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} title
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_description
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} description
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_visibility
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_update_published_file_tags
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {String} tags_csv
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_commit_published_file_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} update_handle
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_remote_storage_subscribe_published_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_remote_storage_unsubscribe_published_file
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_callback_lobby_data_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_data_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_callback_lobby_chat_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_chat_update
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_callback_lobby_chat_msg
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_chat_msg
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_callback_lobby_game_created
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_game_created
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_callback_lobby_invite
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_matchmaking_clear_callback_lobby_invite
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_matchmaking_create_lobby
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamMatchmakingLobbyType} lobby_type
 * @param {Real} max_members
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_matchmaking_join_lobby
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_matchmaking_request_lobby_list
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_string_filter
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} key
 * @param {String} value
 * @param {Enum.SteamMatchmakingLobbyComparison} comparison
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_numerical_filter
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} key
 * @param {Real} value
 * @param {Enum.SteamMatchmakingLobbyComparison} comparison
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_near_value_filter
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} key
 * @param {Real} value
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_distance_filter
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamMatchmakingLobbyDistanceFilter} distance
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_result_count_filter
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} max_results
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_by_index
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_leave_lobby
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_owner
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {Real} new_owner_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_owner
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_num_lobby_members
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_member_by_index
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {Real} member_index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {String} key
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_delete_lobby_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {String} key
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_data_count
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_data_by_index
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {Real} index
 * @param {Buffer} key_out
 * @param {Real} key_max
 * @param {Buffer} val_out
 * @param {Real} val_max
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_member_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {String} key
 * @param {String} value
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_member_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {Real} member_id
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_send_lobby_chat_msg
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {Buffer} msg
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_chat_entry
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} lobby_id
 * @param {Real} chat_id
 * @param {Buffer} out_buffer
 * @param {Real} out_max_bytes
 * @returns {Struct.SteamMatchmakingLobbyChatEntry} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_add_request_lobby_list_filter_slots_available
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} slots_available
 * @function_end 
 */

/**
 * @function steam_matchmaking_request_lobby_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_lobby
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_joinable
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_lobby
 * @param {Bool} joinable
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_invite_user_to_lobby
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_lobby
 * @param {Real} steam_id_invitee
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_game_server
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_lobby
 * @param {Real} ip
 * @param {Real} port
 * @param {Real} steam_id_gs
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_linked_lobby
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_lobby
 * @param {Real} steam_id_lobby_dependent
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_get_lobby_game_server
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_lobby
 * @returns {Struct.SteamMatchmakingLobbyGameServer} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_set_callback_session_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_networking_messages_clear_callback_session_request
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_networking_messages_set_callback_session_failed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_networking_messages_clear_callback_session_failed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_networking_messages_send_message_to_user
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_remote
 * @param {Buffer} data
 * @param {Real} bytes
 * @param {Real} send_flags
 * @param {Real} remote_channel
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_receive_one_on_channel
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} local_channel
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @param {Real} offset
 * @returns {Struct.SteamNetworkingMessagesReceived} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_accept_session_with_user
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_remote
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_close_session_with_user
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_remote
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_close_channel_with_user
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_remote
 * @param {Real} local_channel
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_callback_connection_status_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_networking_sockets_clear_callback_connection_status_changed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_listen_socket_ip
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_close_listen_socket
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} listen_socket
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_connect_by_ip_address
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {String} ip
 * @param {Real} port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_accept_connection
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_close_connection
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @param {Real} reason
 * @param {String} debug
 * @param {Bool} linger
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_user_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @param {Real} user_data
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_user_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_name
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @param {String} name
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_name
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_send_message_to_connection
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @param {Buffer} data
 * @param {Real} bytes
 * @param {Enum.SteamNetworkingSendFlags} send_flags
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_flush_messages_on_connection
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_receive_one_on_connection
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @param {Real} offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_info
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @returns {Struct.SteamNetworkingSocketsConnectionInfo} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_detailed_connection_status
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_run_callbacks
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_socket_pair
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Bool} use_network_loopback
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_listen_socket_p2p
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} local_virtual_port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_connect_p2p
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} steam_id_remote
 * @param {Real} remote_virtual_port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_listen_socket_address
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} listen_socket
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_poll_group
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_destroy_poll_group
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} poll_group
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_poll_group
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} conn
 * @param {Real} poll_group
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_receive_messages_on_poll_group
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} poll_group
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @param {Real} offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_reservation_notification
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_reservation_notification
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_available_beacon_locations_updated
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_available_beacon_locations_updated
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_active_beacons_updated
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_active_beacons_updated
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @function_end 
 */

/**
 * @function steam_parties_get_num_available_beacon_locations
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamPartiesAvailableBeaconLocationCount} 
 * @function_end 
 */

/**
 * @function steam_parties_get_available_beacon_locations
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Struct.SteamPartiesAvailableBeaconLocations} 
 * @function_end 
 */

/**
 * @function steam_parties_create_beacon
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} open_slots
 * @param {Enum.SteamPartiesBeaconLocationType} beacon_location_type
 * @param {Real} beacon_location_id
 * @param {String} connect_string
 * @param {String} metadata
 * @param {Function} [callback]
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_on_reservation_completed
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} beacon_id
 * @param {Real} user_steam_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_change_num_open_slots
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} beacon_id
 * @param {Real} open_slots
 * @param {Function} [callback]
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_destroy_beacon
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} beacon_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_get_num_active_beacons
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_parties_get_beacon_by_index
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_parties_get_beacon_details
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} beacon_id
 * @returns {Struct.SteamPartiesBeaconDetails} 
 * @function_end 
 */

/**
 * @function steam_parties_join_party
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Real} beacon_id
 * @param {Function} [callback]
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_get_beacon_location_data
 * @description > **Steamworks Function**: [func](url)
 *
 * This function 
 *
 * @param {Enum.SteamPartiesBeaconLocationType} beacon_location_type
 * @param {Real} beacon_location_id
 * @param {Enum.SteamPartiesBeaconLocationData} data_kind
 * @returns {String} 
 * @function_end 
 */

/**
 * @struct SteamId
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} id64
 * @member {Real} account_id
 * @member {Real} account_instance
 * @member {Enum.SteamApiUniverse} universe
 * @member {Enum.SteamApiAccountType} account_type
 * @member {Bool} is_valid
 * @member {Bool} is_lobby
 * @member {Bool} is_individual
 * @member {Bool} is_game_server
 * @member {Bool} is_anon_game_server
 * @member {Bool} is_anon_user
 * @member {Bool} is_content_server
 * @member {Bool} is_clan
 * @member {Bool} is_chat
 * @struct_end 
 */

/**
 * @struct SteamFriendsGetFollowerCountResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} steam_id
 * @member {Real} count
 * @struct_end 
 */

/**
 * @struct SteamFriendsIsFollowingResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} steam_id
 * @member {Bool} is_following
 * @struct_end 
 */

/**
 * @struct SteamFriendsEnumerateFollowingListResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Array[Real]} steam_ids
 * @member {Real} results_returned
 * @member {Real} total_result_count
 * @struct_end 
 */

/**
 * @struct SteamFriendsRequestClanOfficerListResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} clan_id
 * @member {Real} officers
 * @struct_end 
 */

/**
 * @struct SteamFriendsDownloadClanActivityCountsResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamFriendsAvatarImageLoaded
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} steam_id_64
 * @member {Real} image_handle
 * @member {Real} width
 * @member {Real} height
 * @struct_end 
 */

/**
 * @struct SteamFriendsClanActivityCounts
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} online
 * @member {Real} in_game
 * @member {Real} chatting
 * @struct_end 
 */

/**
 * @struct SteamFriendsClanChatMessage
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} bytes_copied
 * @member {String} text
 * @member {Enum.SteamFriendsChatEntryType} entry_type
 * @member {Real} chatter_steam_id_64
 * @struct_end 
 */

/**
 * @struct SteamFriendsFriendGamePlayed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} game_id
 * @member {Real} game_ip_v4
 * @member {Real} game_port
 * @member {Real} query_port
 * @member {Real} lobby_steam_id_64
 * @struct_end 
 */

/**
 * @struct SteamFriendsFriendMessage
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} bytes_copied
 * @member {Enum.SteamFriendsChatEntryType} entry_type
 * @member {String} data
 * @struct_end 
 */

/**
 * @struct SteamFriendsPersonaStateChange
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} steam_id
 * @member {Real} change_flags
 * @struct_end 
 */

/**
 * @struct SteamFriendsGameOverlayActivated
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} active
 * @struct_end 
 */

/**
 * @struct SteamFriendsGameRichPresenceJoinRequested
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} steam_id_friend
 * @member {String} connect_string
 * @struct_end 
 */

/**
 * @struct SteamFriendsGameLobbyJoinRequested
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} steam_id_friend
 * @member {Real} steam_id_lobby
 * @struct_end 
 */

/**
 * @struct SteamFriendsFriendRichPresenceUpdate
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} steam_id_friend
 * @member {Real} app_id
 * @struct_end 
 */

/**
 * @struct SteamFriendsGameServerChangeRequested
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {String} server
 * @member {String} password
 * @struct_end 
 */

/**
 * @struct SteamAppsFileDetailsResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} file_size
 * @member {Real} flags
 * @member {String} sha1
 * @struct_end 
 */

/**
 * @struct SteamAppsDlcData
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} app_id
 * @member {Bool} available
 * @member {String} name
 * @struct_end 
 */

/**
 * @struct SteamAppsTimedTrialStatus
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} seconds_allowed
 * @member {Real} seconds_played
 * @struct_end 
 */

/**
 * @struct SteamAppsInstallDir
 * @description > **Steamworks Struct**: [func](url)
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} total
 * @member {Real} available
 * @member {Real} private_count
 * @struct_end 
 */

/**
 * @struct SteamAppsBetaInfo
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} flags
 * @member {Real} build_id
 * @member {String} beta_name
 * @member {String} description
 * @struct_end 
 */

/**
 * @struct SteamAppsDlcDownloadProgress
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} bytes_downloaded
 * @member {Real} bytes_total
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @struct_end 
 */

/**
 * @struct SteamScreenshotsScreenshotReady
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} screenshot_handle
 * @member {Enum.SteamApiResult} result
 * @struct_end 
 */

/**
 * @struct SteamUserStoreAuthUrlResponse
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {String} url
 * @struct_end 
 */

/**
 * @struct SteamUserEncryptedAppTicketResponse
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamUserDurationControl
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} app_id
 * @member {Bool} applicable
 * @member {Real} csecs_last_5h
 * @member {Real} progress
 * @member {Real} notification
 * @struct_end 
 */

/**
 * @struct SteamUserMarketEligibilityResponse
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} allowed
 * @member {Real} not_allowed_reason
 * @member {Real} allowed_at_time
 * @member {Real} steam_purchase_time
 * @member {Real} day_steam_guard_required_days
 * @member {Real} day_new_device_cooldown
 * @struct_end 
 */

/**
 * @struct SteamNetworkingIdentity
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Enum.SteamNetworkingIdentityType} type
 * @member {Real} steam_id
 * @member {String} ip
 * @member {Real} port
 * @member {String} generic_string
 * @struct_end 
 */

/**
 * @struct SteamUserAuthSessionTicket
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} auth_ticket_handle
 * @member {Real} ticket_size
 * @struct_end 
 */

/**
 * @struct SteamUserAvailableVoice
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Enum.SteamApiVoiceResult} result
 * @member {Real} compressed_bytes
 * @member {Real} uncompressed_bytes
 * @struct_end 
 */

/**
 * @struct SteamUserGetVoiceResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Enum.SteamApiVoiceResult} result
 * @member {Real} written_compressed
 * @member {Real} written_uncompressed
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} ticket_size
 * @struct_end 
 */

/**
 * @struct SteamUserSteamServersConnected
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct SteamUserSteamServersDisconnected
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamUserSteamServerConnectFailure
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Bool} still_retrying
 * @struct_end 
 */

/**
 * @struct SteamUserClientGameServerDeny
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} game_server_ip
 * @member {Real} game_server_port
 * @member {Bool} secure
 * @member {Real} reason
 * @struct_end 
 */

/**
 * @struct SteamUserLicensesUpdated
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct SteamUserMicroTxnAuthorizationResponse
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} order_id
 * @member {Bool} authorized
 * @struct_end 
 */

/**
 * @struct SteamUtilsApiCallResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Bool} failed
 * @struct_end 
 */

/**
 * @struct SteamUtilsCheckFileSignatureResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamUtilsLowBatteryPower
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} minutes_battery_left
 * @struct_end 
 */

/**
 * @struct SteamUtilsSteamApiCallCompleted
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} async_call
 * @member {Real} callback_id
 * @member {Real} param_size
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} text
 * @struct_end 
 */

/**
 * @struct SteamUtilsImageSize
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} width
 * @member {Real} height
 * @struct_end 
 */

/**
 * @struct SteamUtilsApiCallCompleted
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Bool} failed
 * @struct_end 
 */

/**
 * @struct SteamUtilsFilterTextResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} characters_filtered
 * @member {String} filtered_text
 * @struct_end 
 */

/**
 * @struct SteamUtilsGamepadTextInputDismissed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} submitted
 * @member {Real} submitted_text_length
 * @struct_end 
 */

/**
 * @struct SteamUtilsFloatingGamepadTextInputDismissed
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} submitted
 * @struct_end 
 */

/**
 * @struct SteamUtilsWarningMessage
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} severity
 * @member {String} text
 * @struct_end 
 */

/**
 * @struct SteamUgcItemDownloadInfo
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} bytes_downloaded
 * @member {Real} bytes_total
 * @struct_end 
 */

/**
 * @struct SteamUgcItemInstallInfo
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} size_on_disk
 * @member {String} folder
 * @member {Real} timestamp
 * @struct_end 
 */

/**
 * @struct SteamUgcItemUpdateProgress
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} status
 * @member {Real} bytes_processed
 * @member {Real} bytes_total
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} url
 * @struct_end 
 */

/**
 * @struct SteamUgcQueryMetadata
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} metadata
 * @struct_end 
 */

/**
 * @struct SteamUgcAdditionalPreview
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} url_or_video_id
 * @member {Real} preview_type
 * @struct_end 
 */

/**
 * @struct SteamUgcKeyValueTag
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} key
 * @member {String} value
 * @struct_end 
 */

/**
 * @struct SteamUgcItemInstalled
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamUgcUserSubscribedItemsListChanged
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} query_handle
 * @member {Real} result
 * @member {Real} num_results_returned
 * @member {Real} total_matching_results
 * @member {Bool} cached_data
 * @struct_end 
 */

/**
 * @struct SteamUgcCreateItemResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} legal_agreement_required
 * @struct_end 
 */

/**
 * @struct SteamUgcSubmitItemUpdateResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Bool} legal_agreement_required
 * @struct_end 
 */

/**
 * @struct SteamUgcSubscribeItemResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamUgcUnsubscribeItemResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamUgcFavoriteItemsListChanged
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} was_add_request
 * @struct_end 
 */

/**
 * @struct SteamUgcSetUserItemVoteResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} vote_up
 * @struct_end 
 */

/**
 * @struct SteamUgcGetUserItemVoteResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} voted_up
 * @member {Bool} voted_down
 * @member {Bool} vote_skipped
 * @struct_end 
 */

/**
 * @struct SteamUgcRequestItemDetailsResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamUgcDownloadItemResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamInputAnalogActionData
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} mode
 * @member {Real} x
 * @member {Real} y
 * @member {Bool} active
 * @struct_end 
 */

/**
 * @struct SteamInputDigitalActionData
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} state
 * @member {Bool} active
 * @struct_end 
 */

/**
 * @struct SteamInputMotionData
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} rot_quat_x
 * @member {Real} rot_quat_y
 * @member {Real} rot_quat_z
 * @member {Real} rot_quat_w
 * @member {Real} pos_accel_x
 * @member {Real} pos_accel_y
 * @member {Real} pos_accel_z
 * @member {Real} rot_vel_x
 * @member {Real} rot_vel_y
 * @member {Real} rot_vel_z
 * @struct_end 
 */

/**
 * @struct SteamInputActiveActionSetLayers
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} count
 * @member {Array[Real]} handles
 * @struct_end 
 */

/**
 * @struct SteamInputActionOrigins
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} count
 * @member {Array[Real]} origins
 * @struct_end 
 */

/**
 * @struct SteamInputDeviceBindingRevision
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} major
 * @member {Real} minor
 * @struct_end 
 */

/**
 * @struct SteamInputDeviceEvent
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} controller_handle
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} achieved
 * @member {Real} unlock_time
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} name
 * @member {Real} percent
 * @member {Bool} achieved
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
 * @description > **Steamworks Struct**: [func](url)
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} leaderboard_handle
 * @member {Bool} leaderboard_found
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} success
 * @member {Real} players
 * @struct_end 
 */

/**
 * @struct SteamUserStatsGlobalAchievementPercentagesReadyResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} game_id
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamUserStatsGlobalStatsReceivedResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} game_id
 * @member {Real} result
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} game_id
 * @member {Real} steam_id_user
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamUserStatsUserStatsStored
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} game_id
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct SteamUserStatsUserAchievementStored
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} game_id
 * @member {String} achievement_name
 * @member {Real} cur_progress
 * @member {Real} max_progress
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} playback_status
 * @struct_end 
 */

/**
 * @struct SteamMusicVolumeHasChanged
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} volume
 * @struct_end 
 */

/**
 * @struct SteamTimelineGamePhaseRecordingExists
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {String} phase_id
 * @member {Real} recording_ms
 * @member {Real} longest_clip_ms
 * @member {Real} clip_count
 * @member {Real} screenshot_count
 * @struct_end 
 */

/**
 * @struct SteamTimelineEventRecordingExists
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} event_id
 * @member {Bool} recording_exists
 * @struct_end 
 */

/**
 * @struct SteamInventoryResultItems
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} count
 * @member {Array[Real]} item_instance_ids
 * @member {Array[Real]} item_def_ids
 * @member {Array[Real]} quantities
 * @member {Array[Real]} flags
 * @struct_end 
 */

/**
 * @struct SteamInventoryDeserializeResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} result_handle
 * @member {Enum.SteamApiResult} status
 * @struct_end 
 */

/**
 * @struct SteamInventorySerializeResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} bytes_written
 * @struct_end 
 */

/**
 * @struct SteamInventoryItemProperty
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {String} value
 * @struct_end 
 */

/**
 * @struct SteamInventoryItemsWithPrices
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Bool} ok
 * @member {Real} count
 * @member {Array[Real]} item_def_ids
 * @member {Array[Real]} current_prices
 * @member {Array[Real]} base_prices
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct SteamInventoryStartPurchaseResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} order_id
 * @member {Real} transaction_id
 * @struct_end 
 */

/**
 * @struct SteamInventoryRequestPricesResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {String} currency
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} ugc_handle
 * @member {String} file_name
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageDownloadUgcResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} ugc_handle
 * @member {Real} app_id
 * @member {Real} size_in_bytes
 * @member {String} file_name
 * @member {Real} steam_id_owner
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} user_needs_to_accept_wla
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageUnsubscribePublishedFileResult
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyCreated
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} result
 * @member {Real} lobby_id
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyEnter
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} lobby_id
 * @member {Real} chat_permissions
 * @member {Bool} locked
 * @member {Real} response
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyMatchList
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} lobbies_count
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyDataUpdate
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} lobby_id
 * @member {Real} member_id
 * @member {Bool} success
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
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} lobby_id
 * @member {Real} sender_id
 * @member {Real} chat_entry_type
 * @member {Real} message_size
 * @struct_end 
 */

/**
 * @struct SteamMatchmakingLobbyGameCreated
 * @description > **Steamworks Struct**: [func](url)
 *
 * This struct 
 *
 * @member {Real} lobby_id
 * @member {Real} server_ip
 * @member {Real} server_port
 * @member {Real} game_server_id
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
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member Individual
 * @member Multiseat
 * @member GameServer
 * @member AnonGameServer
 * @member Pending
 * @member ContentServer
 * @member Clan
 * @member Chat
 * @member ConsoleUser
 * @member AnonUser
 * @enum_end 
 */

/**
 * @enum SteamApiDenyReason
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member InvalidVersion
 * @member Generic
 * @member NotLoggedOn
 * @member NoLicense
 * @member Cheater
 * @member LoggedInElsewhere
 * @member UnknownText
 * @member IncompatibleAnticheat
 * @member MemoryCorruption
 * @member IncompatibleSoftware
 * @member SteamConnectionLost
 * @member SteamConnectionError
 * @member SteamResponseTimedOut
 * @member SteamValidationStalled
 * @member SteamOwnerLeftGuestUser
 * @enum_end 
 */

/**
 * @enum SteamApiGameIdType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member App
 * @member GameMod
 * @member Shortcut
 * @member P2p
 * @enum_end 
 */

/**
 * @enum SteamApiLaunchOptionType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Default
 * @member SafeMode
 * @member Multiplayer
 * @member Config
 * @member Openvr
 * @member Server
 * @member Editor
 * @member Manual
 * @member Benchmark
 * @member Option1
 * @member Option2
 * @member Option3
 * @member OculusVr
 * @member OpenvrOverlay
 * @member Osvr
 * @member Dialog
 * @enum_end 
 */

/**
 * @enum SteamApiMarketingMessageFlag
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member HighPriority
 * @member PlatformWindows
 * @member PlatformMac
 * @member PlatformLinux
 * @member PlatformRestrictions
 * @enum_end 
 */

/**
 * @enum SteamApiNotificationPosition
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member TopLeft
 * @member TopRight
 * @member BottomLeft
 * @member BottomRight
 * @enum_end 
 */

/**
 * @enum SteamApiUniverse
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member Public
 * @member Beta
 * @member Internal
 * @member Dev
 * @member Max
 * @enum_end 
 */

/**
 * @enum SteamApiUserHasLicenseResult
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member HasLicense
 * @member DoesNotHaveLicense
 * @member NoAuth
 * @enum_end 
 */

/**
 * @enum SteamApiVoiceResult
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Ok
 * @member NotInitialized
 * @member NotRecording
 * @member NoData
 * @member BufferTooSmall
 * @member DataCorrupted
 * @member Restricted
 * @member UnsupportedCodec
 * @member ReceiverOutOfDate
 * @member ReceiverDidNotAnswer
 * @enum_end 
 */

/**
 * @enum SteamApiResult
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Ok
 * @member Fail
 * @member NoConnection
 * @member InvalidPassword
 * @member LoggedInElsewhere
 * @member InvalidProtocolVer
 * @member InvalidParam
 * @member FileNotFound
 * @member Busy
 * @member InvalidState
 * @member InvalidName
 * @member InvalidEmail
 * @member DuplicateName
 * @member AccessDenied
 * @member Timeout
 * @member Banned
 * @member AccountNotFound
 * @member InvalidSteamId
 * @member ServiceUnavailable
 * @member NotLoggedOn
 * @member Pending
 * @member EncryptionFailure
 * @member InsufficientPrivilege
 * @member LimitExceeded
 * @member Revoked
 * @member Expired
 * @member AlreadyRedeemed
 * @member DuplicateRequest
 * @member AlreadyOwned
 * @member IpNotFound
 * @member PersistFailed
 * @member LockingFailed
 * @member LogonSessionReplaced
 * @member ConnectFailed
 * @member HandshakeFailed
 * @member IoFailure
 * @member RemoteDisconnect
 * @member ShoppingCartNotFound
 * @member Blocked
 * @member Ignored
 * @member NoMatch
 * @member AccountDisabled
 * @member ServiceReadOnly
 * @enum_end 
 */

/**
 * @enum SteamFriendsOverlayToStoreFlag
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member AddToCart
 * @member AddToCartAndShow
 * @enum_end 
 */

/**
 * @enum SteamFriendsOverlayToWebpageMode
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Default
 * @member Modal
 * @enum_end 
 */

/**
 * @enum SteamFriendsChatEntryType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member ChatMsg
 * @member Typing
 * @member InviteGame
 * @member Emote
 * @member LeftConversation
 * @member Entered
 * @member WasKicked
 * @member WasBanned
 * @member Disconnected
 * @member HistoricalChat
 * @member LinkBlocked
 * @enum_end 
 */

/**
 * @enum SteamFriendsFriendFlag
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Blocked
 * @member FriendshipRequested
 * @member Immediate
 * @member ClanMember
 * @member OnGameServer
 * @member RequestingFriendship
 * @member RequestingInfo
 * @member Ignored
 * @member IgnoredFriend
 * @member ChatMember
 * @member All
 * @enum_end 
 */

/**
 * @enum SteamFriendsPersonaState
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Offline
 * @member Online
 * @member Busy
 * @member Away
 * @member Snooze
 * @member LookingToTrade
 * @member LookingToPlay
 * @enum_end 
 */

/**
 * @enum SteamFriendsRelationship
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Blocked
 * @member RequestRecipient
 * @member Friend
 * @member RequestInitiator
 * @member Ignored
 * @member IgnoredFriend
 * @member SuggestedFriend
 * @enum_end 
 */

/**
 * @enum SteamScreenshotsVrScreenshotType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Mono
 * @member Stereo
 * @member MonoCubemap
 * @member MonoPanorama
 * @member StereoPanorama
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
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member SteamId
 * @member IpAddress
 * @member GenericString
 * @member GenericBytes
 * @enum_end 
 */

/**
 * @enum SteamUserBeginAuthSessionResult
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Ok
 * @member InvalidTicket
 * @member DuplicateRequest
 * @member InvalidVersion
 * @member GameMismatch
 * @member ExpiredTicket
 * @enum_end 
 */

/**
 * @enum SteamUserDurationControlOnlineState
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member Offline
 * @member Online
 * @member OnlineHighPri
 * @enum_end 
 */

/**
 * @enum SteamUtilsApiCallFailure
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member SteamGone
 * @member NetworkFailure
 * @member InvalidHandle
 * @member MismatchedCallback
 * @enum_end 
 */

/**
 * @enum SteamUtilsGamepadTextInputMode
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Normal
 * @member Password
 * @enum_end 
 */

/**
 * @enum SteamUtilsGamepadTextInputLineMode
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member SingleLine
 * @member MultipleLines
 * @enum_end 
 */

/**
 * @enum SteamUtilsFloatingGamepadTextInputMode
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member SingleLine
 * @member MultipleLines
 * @member Email
 * @member Numeric
 * @enum_end 
 */

/**
 * @enum SteamUtilsTextFilteringContext
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Unknown
 * @member GameContent
 * @member Chat
 * @member Name
 * @enum_end 
 */

/**
 * @enum SteamUgcMatchingUgcType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Items
 * @member Items_Mtx
 * @member Items_ReadyToUse
 * @member Collections
 * @member Artwork
 * @member Videos
 * @member Screenshots
 * @member AllGuides
 * @member WebGuides
 * @member IntegratedGuides
 * @member UsableInGame
 * @member ControllerBindings
 * @member GameManagedItems
 * @member All
 * @enum_end 
 */

/**
 * @enum SteamUgcQuery
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member RankedByVote
 * @member RankedByPublicationDate
 * @member AcceptedForGameRankedByAcceptanceDate
 * @member RankedByTrend
 * @member FavoritedByFriendsRankedByPublicationDate
 * @member CreatedByFriendsRankedByPublicationDate
 * @member RankedByNumTimesReported
 * @member CreatedByFollowedUsersRankedByPublicationDate
 * @member NotYetRated
 * @member RankedByTotalVotesAsc
 * @member RankedByVotesUp
 * @member RankedByTextSearch
 * @member RankedByTotalUniqueSubscriptions
 * @member RankedByPlaytimeTrend
 * @member RankedByTotalPlaytime
 * @member RankedByAveragePlaytimeTrend
 * @member RankedByLifetimeAveragePlaytime
 * @member RankedByPlaytimeSessionsTrend
 * @member RankedByLifetimePlaytimeSessions
 * @member RankedByLastUpdatedDate
 * @enum_end 
 */

/**
 * @enum SteamUserUgcList
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Published
 * @member VotedOn
 * @member VotedUp
 * @member VotedDown
 * @member WillVoteLater
 * @member Favorited
 * @member Subscribed
 * @member UsedOrPlayed
 * @member Followed
 * @enum_end 
 */

/**
 * @enum SteamUserUgcListSortOrder
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member CreationOrderDesc
 * @member CreationOrderAsc
 * @member TitleAsc
 * @member LastUpdatedDesc
 * @member SubscriptionDateDesc
 * @member VoteScoreDesc
 * @member ForModeration
 * @enum_end 
 */

/**
 * @enum SteamWorkshopFileType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Community
 * @member Microtransaction
 * @member Collection
 * @member Art
 * @member Video
 * @member Screenshot
 * @member Game
 * @member Software
 * @member Concept
 * @member WebGuide
 * @member IntegratedGuide
 * @member Merch
 * @member ControllerBinding
 * @member SteamworksAccessInvite
 * @member SteamVideo
 * @member GameManagedItem
 * @enum_end 
 */

/**
 * @enum SteamItemPreviewType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Image
 * @member YouTubeVideo
 * @member Sketchfab
 * @member EnvironmentMap_HorizontalCross
 * @member EnvironmentMap_LatLong
 * @member ReservedMax
 * @enum_end 
 */

/**
 * @enum SteamRemoteStoragePublishedFileVisibility
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Public
 * @member FriendsOnly
 * @member Private
 * @member Unlisted
 * @enum_end 
 */

/**
 * @enum SteamUgcContentDescriptorId
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member NudityOrSexualContent
 * @member FrequentViolenceOrGore
 * @member AdultOnlySexualContent
 * @member GratuitousSexualContent
 * @member AnyMatureContent
 * @enum_end 
 */

/**
 * @enum SteamUgcStatisticType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member NumSubscriptions
 * @member NumFavorites
 * @member NumFollowers
 * @member NumUniqueSubscriptions
 * @member NumUniqueFavorites
 * @member NumUniqueFollowers
 * @member NumUniqueWebsiteViews
 * @member ReportScore
 * @member NumSecondsPlayed
 * @member NumPlaytimeSessions
 * @member NumComments
 * @member NumSecondsPlayedDuringTimePeriod
 * @enum_end 
 */

/**
 * @enum SteamLeaderboardDataRequest
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Global
 * @member GlobalAroundUser
 * @member Friends
 * @enum_end 
 */

/**
 * @enum SteamLeaderboardSortMethod
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Ascending
 * @member Descending
 * @enum_end 
 */

/**
 * @enum SteamLeaderboardDisplayType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Numeric
 * @member TimeSeconds
 * @member TimeMilliSeconds
 * @enum_end 
 */

/**
 * @enum SteamLeaderboardUploadScoreMethod
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member KeepBest
 * @member ForceUpdate
 * @enum_end 
 */

/**
 * @enum SteamMusicPlaybackStatus
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Undefined
 * @member Playing
 * @member Paused
 * @member Idle
 * @enum_end 
 */

/**
 * @enum SteamTimelineGameMode
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Playing
 * @member Staging
 * @member Menus
 * @member LoadingScreen
 * @enum_end 
 */

/**
 * @enum SteamTimelineEventClipPriority
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Standard
 * @member Featured
 * @enum_end 
 */

/**
 * @enum SteamInventoryConst
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member InvalidResult
 * @enum_end 
 */

/**
 * @enum SteamRemoteStoragePlatform
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Windows
 * @member OSX
 * @member PS3
 * @member Linux
 * @member Reserved2
 * @member All
 * @enum_end 
 */

/**
 * @enum SteamRemoteStorageUgcReadAction
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member ContinueReadingUntilFinished
 * @member ContinueReading
 * @member Close
 * @enum_end 
 */

/**
 * @enum SteamRemoteStorageWorkshopFileType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Community
 * @member Microtransaction
 * @member Collection
 * @member Art
 * @member Video
 * @member Screenshot
 * @member Game
 * @member Software
 * @member Concept
 * @member WebGuide
 * @member IntegratedGuide
 * @member Merch
 * @member ControllerBinding
 * @member SteamworksAccessInvite
 * @member SteamVideo
 * @member GameManagedItem
 * @enum_end 
 */

/**
 * @enum SteamMatchmakingLobbyType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Private
 * @member FriendsOnly
 * @member Public
 * @member Invisible
 * @enum_end 
 */

/**
 * @enum SteamMatchmakingLobbyComparison
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member EqualToOrLessThan
 * @member LessThan
 * @member Equal
 * @member GreaterThan
 * @member EqualToOrGreaterThan
 * @member NotEqual
 * @enum_end 
 */

/**
 * @enum SteamMatchmakingLobbyDistanceFilter
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Close
 * @member Default
 * @member Far
 * @member Worldwide
 * @enum_end 
 */

/**
 * @enum SteamNetworkingConnectionState
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member None
 * @member Connecting
 * @member FindingRoute
 * @member Connected
 * @member ClosedByPeer
 * @member ProblemDetectedLocally
 * @member FinWait
 * @member Linger
 * @member Dead
 * @enum_end 
 */

/**
 * @enum SteamNetworkingSendFlags
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Unreliable
 * @member NoNagle
 * @member NoDelay
 * @member Reliable
 * @member UseCurrentThread
 * @member AutoRestartBrokenSession
 * @enum_end 
 */

/**
 * @enum SteamPartiesBeaconLocationType
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member ChatGroup
 * @member Max
 * @enum_end 
 */

/**
 * @enum SteamPartiesBeaconLocationData
 * @description > **Steamworks Enum**: [func](url)
 *
 * This enum 
 *
 * @member Invalid
 * @member Name
 * @member IconURLSmall
 * @member IconURLMedium
 * @member IconURLLarge
 * @enum_end 
 */

/**
 * @const_partial macros
 * @const_end 
 */
