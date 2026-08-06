
// FUNCTIONS

/**
 * @function steam_friends_activate_game_overlay
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlay](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlay)
 *
 * This function activates the [Steam overlay](https://partner.steamgames.com/doc/features/overlay) to a specific dialog.
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
 * This function activates the [Steam overlay](https://partner.steamgames.com/doc/features/overlay) to open the invite dialog. Invitations sent from this dialog will be for the provided lobby.
 *
 * @param {Real} steam_id_lobby The Steam ID of the lobby that selected users will be invited to.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_store
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToStore](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToStore)
 *
 * This function activates the [Steam overlay](https://partner.steamgames.com/doc/features/overlay) to the Steam store page for the provided app.
 * 
 * Using `STEAM_API_APP_ID_INVALID` brings the user to the front page of the Steam store. (See: ${constant.macros})
 *
 * @param {Real} app_id The app ID to show the store page of.
 * @param {Enum.SteamFriendsOverlayToStoreFlag} flag Flags to modify the behaviour when the page opens.
 * @function_end
 */

/**
 * @function steam_friends_activate_game_overlay_to_user
 * @description > **Steamworks Function**: [ISteamFriends::ActivateGameOverlayToUser](https://partner.steamgames.com/doc/api/ISteamFriends#ActivateGameOverlayToUser)
 *
 * This function activates [Steam overlay](https://partner.steamgames.com/doc/features/overlay) to a specific dialog.
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
 * This function activates [Steam overlay](https://partner.steamgames.com/doc/features/overlay) web browser directly to the specified URL.
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
 * This function refreshes the Steam Group activity data or get the data from groups other than one that the current user is a member of.
 * 
 * After receiving the callback you can then use ${function.steam_friends_get_clan_activity_counts} to get the up to date user counts.
 *
 * @param {Array[Real]} steam_id_clans A list of steam groups to get the updated data for.
 * @param {Function} callback The function to call upon completion.
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
 * [[Note: This returns up to `STEAM_FRIENDS_ENUMERATE_FOLLOWERS_MAX` users at once. If the current user is following more than that, you will need to call this repeatedly, with `start_index` set to the total number of followers that you have received so far.]]
 *
 * @param {Real} start_index The index to start receiving followers from. This should be 0 on the initial call.
 * @param {Function} callback The function to call upon completion.
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
 * See: ${struct.SteamFriendsAvatarImageLoaded}
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
 * @param {Real} message The index of the message. This should be the `message_id` field of [GameConnectedClanChatMsg_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameConnectedClanChatMsg_t).
 * @returns {Struct.SteamFriendsClanChatMessage}
 * @function_end
 */

/**
 * @function steam_friends_get_clan_count
 * @description > **Steamworks Function**: [ISteamFriends::GetClanCount](https://partner.steamgames.com/doc/api/ISteamFriends#GetClanCount)
 *
 * This function gets the number of Steam groups that the current user is a member of.
 * 
 * This is used for iteration.
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
 * @param {Function} callback The function to call upon completion.
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
 * @param {Enum.SteamFriendsFriendFlag} friend_flags A combined union (binary "or") of ${constant.SteamFriendsFriendFlag}. This must be the same value as used in the previous call to ${function.steam_friends_get_friend_count}.
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
 * @param {Enum.SteamFriendsFriendFlag} friend_flags A combined union (binary "or") of one or more ${constant.SteamFriendsFriendFlag}.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_friends_get_friend_count_from_source
 * @description > **Steamworks Function**: [ISteamFriends::GetFriendCountFromSource](https://partner.steamgames.com/doc/api/ISteamFriends#GetFriendCountFromSource)
 *
 * This function gets the number of users in a source (Steam group, chat room, lobby, or game server).
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
 * If the Steam level is not immediately available for the specified user then this returns 0 and queues it to be downloaded from the Steam servers. When it gets downloaded a [PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t) callback ($struct.SteamFriendsPersonaStateChange) will be posted with `change_flags` including `SteamFriendsPersonaChange.SteamLevel`.
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
 * @param {Enum.SteamFriendsFriendFlag} friend_flags A combined union (binary "or") of one or more ${constant.SteamFriendsFriendFlag}.
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
 * @param {String} connect_string A string that lets the friend know how to join the game (i.e. the game server IP). This can not be longer than specified in `STEAM_FRIENDS_MAX_RICH_PRESENCE_VALUE_LENGTH`.
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
 * @param {Function} callback The function to call upon completion.
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
 * @param {Function} callback The function to be called upon completion.
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
 * @returns {Bool} `true` means that the data has being requested, and a [PersonaStateChange_t](https://partner.steamgames.com/doc/api/ISteamFriends#PersonaStateChange_t) callback (${struct.SteamFriendsPersonaStateChange}) will be posted when it's retrieved. `false` means that we already have all the details about that user, and functions that require this information can be used immediately.
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
 * You can view the players you have recently played with [here](http://steamcommunity.com/my/friends/coplay/) on the Steam community and in the [Steam overlay](https://partner.steamgames.com/doc/features/overlay).
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
 * Each user can have up to 20 keys set as defined by `STEAM_FRIENDS_MAX_RICH_PRESENCE_KEYS`.
 * 
 * You can clear all of the keys for the current user with ${function.steam_friends_clear_rich_presence}.
 * 
 * To get rich presence keys for friends see: ${function.steam_friends_get_friend_rich_presence}.
 *
 * @param {String} key The rich presence 'key' to set. This can not be longer than specified in `STEAM_FRIENDS_MAX_RICH_PRESENCE_KEY_LENGTH`.
 * @param {String} value The rich presence 'value' to associate with `key`. This can not be longer than specified in `STEAM_FRIENDS_MAX_RICH_PRESENCE_KEY_LENGTH`. If this is set to an empty string (`""`) then the key is removed if it's set.
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
 * See: ${struct.SteamFriendsPersonaStateChange}
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
 * This function sets the callback function to use when the [Steam overlay](https://partner.steamgames.com/doc/features/overlay) activates or deactivates.
 * 
 * See: [ISteamFriends::GameOverlayActivated_t](https://partner.steamgames.com/doc/api/ISteamFriends#GameOverlayActivated_t)
 * 
 * See: ${struct.SteamFriendsGameOverlayActivated}
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
 * See: ${struct.SteamFriendsGameRichPresenceJoinRequested}
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
 * See: ${struct.SteamFriendsGameLobbyJoinRequested}
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
 * See: ${struct.SteamFriendsFriendRichPresenceUpdate}
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
 * See: ${struct.SteamFriendsGameServerChangeRequested}
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

// STRUCTS

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
 * @member {Enum.SteamApiResult} result The result of the operation.
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
 * @member {Real} total_result_count The total number of people we are following. If this is greater than `results_returned` then you should make a subsequent call to ${function.steam_friends_enumerate_following_list} with `results_returned` as the index to get the next portion of followers.
 * @struct_end
 */

/**
 * @struct SteamFriendsRequestClanOfficerListResult
 * @description > **Steamworks Struct**: [ISteamFriends::ClanOfficerListResponse_t](https://partner.steamgames.com/doc/api/ISteamFriends#ClanOfficerListResponse_t)
 *
 * This struct holds the return of a request officer list call.
 *
 * @member {Bool} success Was the call successful? If it wasn't, this may indicate a temporary loss of connection to Steam. If this returns `true`, this does not necessarily mean that all of the info for this Steam group has been downloaded.
 * @member {Real} clan_id The Steam group that we just got the officer list for.
 * @member {Real} officers The number of officers in the group. This is the same as ${function.steam_friends_get_clan_officer_count}.
 * @struct_end
 */

/**
 * @struct SteamFriendsDownloadClanActivityCountsResult
 * @description > **Steamworks Struct**: [ISteamFriends::DownloadClanActivityCountsResult_t](https://partner.steamgames.com/doc/api/ISteamFriends#DownloadClanActivityCountsResult_t)
 *
 * Called when a Steam group activity has been received.
 *
 * @member {Bool} result Was the call successful?
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
 * @member {Enum.SteamFriendsPersonaChange} change_flags A bit-wise union of ${constant.SteamFriendsPersonaChange} values.
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

// CONSTANTS

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
 * @member InviteGame Invite from other user into that user's current game.
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
 * @enum SteamFriendsPersonaChange
 * @description > **Steamworks Enum**: [ISteamFriends::EPersonaChange](https://partner.steamgames.com/doc/api/ISteamFriends#EPersonaChange)
 * 
 * This enum holds the flags to describe what's changed about a user.
 * 
 * These flags describe what the client has learned has changed recently, so on startup you'll see a name, avatar & relationship change for every friend.
 * 
 * @member Name Name.
 * @member Status Status.
 * @member ComeOnline Come online.
 * @member GoneOffline Gone offline.
 * @member GamePlayed Game played.
 * @member GameServer Game server.
 * @member Avatar Avatar.
 * @member JoinedSource Joined source.
 * @member LeftSource Left source.
 * @member RelationshipChanged Relationship changed.
 * @member NameFirstSet Name first set.
 * @member Broadcast Broadcast.
 * @member Nickname Nickname.
 * @member SteamLevel Steam level.
 * @member RichPresence Rich presence.
 * @enum_end
 */

// MODULE

/**
 * @module friends
 * @title Friends
 * @desc > **Steamworks Interface**: [ISteamFriends](https://partner.steamgames.com/doc/api/ISteamFriends)
 * 
 * This module is used to access information about individual users and interact with the [Steam Overlay](https://partner.steamgames.com/doc/features/overlay).
 * 
 * @section_func Functions
 * @desc These are the functions of the Friends module:
 * @ref steam_friends_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Friends module:
 * @ref SteamFriends*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Friends module:
 * @ref SteamFriends*
 * @section_end
 * @module_end
 */
