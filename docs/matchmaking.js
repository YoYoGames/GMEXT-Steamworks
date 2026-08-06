
// FUNCTIONS

/**
 * @function steam_matchmaking_set_callback_lobby_data_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the lobby metadata has changed.
 * 
 * See: [ISteamMatchmaking::LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t)
 * 
 * See: ${struct.SteamMatchmakingLobbyDataUpdate}
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
 * See: ${struct.SteamMatchmakingLobbyChatUpdate}
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
 * See: ${struct.SteamMatchmakingLobbyChatMsg}
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
 * See: ${struct.SteamMatchmakingLobbyGameCreated}
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
 * See: ${struct.SteamMatchmakingLobbyInvite}
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
 * @param {Function} callback The function to call upon completion.
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
 * @param {Function} callback The function to call upon completion.
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
 * @param {Function} callback The function to call upon completion.
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
 * There is always one lobby owner - if the current owner leaves, another user in the lobby will become the owner automatically. It is possible (but rare) to join a lobby just as the owner is leaving, thus entering a lobby with self as the owner.
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
 * @returns {Struct.SteamMatchmakingLobbyDataEntry}
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
 * @description > **Steamworks Callback**: [ISteamMatchmaking::LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t)
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
 * This function broadcasts a chat (text or binary data) message to all of the users in the lobby.
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
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The size in bytes of the message data; if it is a text message then this should include the null terminator. Defaults to the buffer size minus the offset.
 * @returns {Bool}
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamMatchmaking::LobbyChatMsg_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatMsg_t)
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
 * @description > **Steamworks Callback**: [ISteamMatchmaking::LobbyDataUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyDataUpdate_t)
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
 * @param {Bool} joinable Enable (`true`) or disable (`false`) allowing users to join this lobby.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_matchmaking_set_lobby_type
 * @description > **Steamworks Function**: [ISteamMatchmaking::SetLobbyType](https://partner.steamgames.com/doc/api/ISteamMatchmaking#SetLobbyType)
 * 
 * This function updates the type of the given lobby.
 * 
 * This is also set when you create the lobby with ${function.steam_matchmaking_create_lobby}.
 * This can only be set by the owner of the lobby.
 * 
 * @param {Real} steam_id_lobby The Steam ID of the lobby to set the type of.
 * @param {Enum.SteamMatchmakingLobbyType} lobby_type The new lobby type that will be set.
 * @returns {Bool} `true` upon success; otherwise, `false` if you're not the owner of the lobby.
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
 * @description > **Steamworks Callback**: [ISteamMatchmaking::LobbyGameCreated_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyGameCreated_t)
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

// STRUCTS

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
 * @member {Enum.SteamMatchmakingChatRoomEnterResponse} response A chat room enter response value, indicating whether the user successfully joined the lobby.
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
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyChatUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatUpdate_t)
 *
 * This struct holds information passed to a `LobbyChatUpdate_t` callback, which is triggered when a lobby chat room state has changed. This is usually sent when a user has joined or left the lobby.
 *
 * @member {Real} lobby_id The Steam ID of the lobby.
 * @member {Real} user_changed_id The user whose status in the lobby just changed - can be recipient.
 * @member {Real} making_change_id Chat member who made the change. This can be different from `user_changed_id` if kicking, muting, etc. For example, if one user kicks another from the lobby, this will be set to the id of the user who initiated the kick.
 * @member {Enum.SteamMatchmakingChatMemberStateChange} chat_member_state_change Bitfield of chat member state change values.
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
 * @member {Enum.SteamFriendsChatEntryType} chat_entry_type Type of message received.
 * @member {Real} chat_id The index of the chat entry to use with ${function.steam_matchmaking_get_lobby_chat_entry}, this is not valid outside of the scope of the callback and should never be stored.
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
 * @description > **Steamworks Struct**: [ISteamMatchmaking::LobbyInvite_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyInvite_t)
 *
 * This struct holds information passed in a `LobbyInvite_t` callback.
 *
 * @member {Real} inviter_id Steam ID of the person that sent the invite.
 * @member {Real} lobby_id Steam ID of the lobby we're invited to.
 * @member {String} game_id Game ID of the lobby we're invited to.
 * @struct_end
 */

/**
 * @struct SteamMatchmakingLobbyChatEntry
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_matchmaking_get_lobby_chat_entry}.
 *
 * @member {Real} bytes The number of bytes copied into the buffer.
 * @member {Real} sender_id The Steam ID of the user who sent this message.
 * @member {Enum.SteamFriendsChatEntryType} entry_type This will always be `SteamFriendsChatEntryType.ChatMsg`.
 * @struct_end
 */

/**
 * @struct SteamMatchmakingLobbyDataEntry
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds a lobby metadata key/value pair, returned by ${function.steam_matchmaking_get_lobby_data_by_index}.
 *
 * @member {String} key The metadata key at the requested index.
 * @member {String} value The metadata value associated with `key`.
 * @struct_end
 */

/**
 * @struct SteamMatchmakingLobbyGameServer
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_matchmaking_get_lobby_game_server}.
 * 
 * @member {Real} ip The IP address of the game server, in host order, i.e 127.0.0.1 == 0x7f000001, if it's set.
 * @member {Real} port The connection port of the game server, in host order, if it's set.
 * @member {Real} steam_id_gs The Steam ID of the game server, if it's set.
 * @struct_end
 */

// CONSTANTS

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
 * @enum SteamMatchmakingChatMemberStateChange
 * @description > **Steamworks Enum**: [ISteamMatchmaking::EChatMemberStateChange](https://partner.steamgames.com/doc/api/ISteamMatchmaking#EChatMemberStateChange)
 * 
 * This enum holds flags describing how a user's lobby state has changed. This is provided from [LobbyChatUpdate_t](https://partner.steamgames.com/doc/api/ISteamMatchmaking#LobbyChatUpdate_t).
 * 
 * @member Entered This user has joined or is joining the lobby.
 * @member Left This user has left or is leaving the lobby.
 * @member Disconnected User disconnected without leaving the lobby first.
 * @member Kicked The user has been kicked.
 * @member Banned The user has been kicked and banned.
 * @enum_end
 */

/**
 * @enum SteamMatchmakingChatRoomEnterResponse
 * @description > **Steamworks Enum**: [EChatRoomEnterResponse](https://partner.steamgames.com/doc/api/steam_api#EChatRoomEnterResponse)
 * 
 * This enum holds chat room enter responses.
 * 
 * @member Success Success.
 * @member DoesntExist Chat doesn't exist (probably closed).
 * @member NotAllowed General Denied - You don't have the permissions needed to join the chat.
 * @member Full Chat room has reached its maximum size.
 * @member Error Unexpected Error.
 * @member Banned You are banned from this chat room and may not join.
 * @member Limited Joining this chat is not allowed because you are a limited user (no value on account).
 * @member ClanDisabled Attempt to join a clan chat when the clan is locked or disabled.
 * @member CommunityBan Attempt to join a chat when the user has a community lock on their account.
 * @member MemberBlockedYou Join failed - a user that is in the chat has blocked you from joining.
 * @member YouBlockedMember Join failed - you have blocked a user that is already in the chat.
 * @member RatelimitExceeded Join failed - too many join attempts in a very short period of time.
 * @enum_end
 */

// MODULE

/**
 * @module matchmaking
 * @title Matchmaking
 * @desc > **Steamworks Interface**: [ISteamMatchmaking](https://partner.steamgames.com/doc/api/ISteamMatchmaking)
 * 
 * This module contains functions for clients to access matchmaking services, favorites, and to operate on game lobbies.
 * 
 * See [Steam Matchmaking & Lobbies](https://partner.steamgames.com/doc/features/multiplayer/matchmaking) for more information.
 * 
 * @section_func Functions
 * @desc These are the functions of the Matchmaking module:
 * @ref steam_matchmaking_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Matchmaking module:
 * @ref SteamMatchmaking*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Matchmaking module:
 * @ref SteamMatchmaking*
 * @section_end
 * @module_end
 */
