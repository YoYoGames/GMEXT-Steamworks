/**
 * @function_partial steam_api_last_error
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_api_is_initialized
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_api_init
 * @param {Real} unOwnAppID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_api_release_current_thread_memory
 * @function_end 
 */

/**
 * @function_partial steam_api_restart_app_if_necessary
 * @param {Real} unOwnAppID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_api_run_callbacks
 * @function_end 
 */

/**
 * @function_partial steam_api_shutdown
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay
 * @param {String} pchDialog
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_invite_dialog
 * @param {Real} steamIDLobby
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_to_store
 * @param {Real} nAppID
 * @param {Enum.SteamFriendsOverlayToStoreFlag} eFlag
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_to_user
 * @param {String} pchDialog
 * @param {Real} steamID
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_to_web_page
 * @param {String} pchURL
 * @param {Enum.SteamFriendsOverlayToWebpageMode} eMode
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_rich_presence
 * @function_end 
 */

/**
 * @function_partial steam_friends_close_clan_chat_window_in_steam
 * @param {Real} steamIDClanChat
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_download_clan_activity_counts
 * @param {Array[Real]} psteamIDClans
 * @param {Real} cClansToRequest
 * @param {Function} [callback]
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_enumerate_following_list
 * @param {Real} unStartIndex
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_callback_avatar_image_loaded
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_callback_avatar_image_loaded
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_chat_member_by_index
 * @param {Real} steamIDClan
 * @param {Real} iUser
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_activity_counts
 * @param {Real} steamIDClan
 * @returns {Struct.SteamFriendsClanActivityCounts} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_by_index
 * @param {Real} iClan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_chat_member_count
 * @param {Real} steamIDClan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_chat_message
 * @param {Real} steamIDClanChat
 * @param {Real} iMessage
 * @returns {Struct.SteamFriendsClanChatMessage} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_count
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_name
 * @param {Real} steamIDClan
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_officer_by_index
 * @param {Real} steamIDClan
 * @param {Real} iOfficer
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_officer_count
 * @param {Real} steamIDClan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_owner
 * @param {Real} steamIDClan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_tag
 * @param {Real} steamIDClan
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_coplay_friend
 * @param {Real} iCoplayFriend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_coplay_friend_count
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_follower_count
 * @param {Real} steamID
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_by_index
 * @param {Real} iFriend
 * @param {Real} iFriendFlags
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_coplay_game
 * @param {Real} steamIDFriend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_coplay_time
 * @param {Real} steamIDFriend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_count
 * @param {Real} iFriendFlags
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_count_from_source
 * @param {Real} steamIDSource
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_from_source_by_index
 * @param {Real} steamIDSource
 * @param {Real} iFriend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_game_played
 * @param {Real} steamIDFriend
 * @returns {Struct.SteamFriendsFriendGamePlayed} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_message
 * @param {Real} steamIDFriend
 * @param {Real} iMessageID
 * @param {Real} cubData
 * @returns {Struct.SteamFriendsFriendMessage} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_persona_name
 * @param {Real} steamIDFriend
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_persona_name_history
 * @param {Real} steamIDFriend
 * @param {Real} iPersonaName
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_persona_state
 * @param {Real} steamIDFriend
 * @returns {Enum.SteamFriendsPersonaState} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_relationship
 * @param {Real} steamIDFriend
 * @returns {Enum.SteamFriendsRelationship} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_rich_presence
 * @param {Real} steamIDFriend
 * @param {String} pchKey
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_rich_presence_key_by_index
 * @param {Real} steamIDFriend
 * @param {Real} iKey
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_rich_presence_key_count
 * @param {Real} steamIDFriend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friends_group_count
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friends_group_id_by_index
 * @param {Real} iFG
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friends_group_name
 * @param {Real} friendsGroupID
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_steam_level
 * @param {Real} steam_id_friend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_large_friend_avatar
 * @param {Real} steam_id_friend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_medium_friend_avatar
 * @param {Real} steam_id_friend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friends_group_members_count
 * @param {Real} friendsGroupID
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friends_group_members_list
 * @param {Real} friendsGroupID
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_persona_name
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_persona_state
 * @returns {Enum.SteamFriendsPersonaState} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_player_nickname
 * @param {Real} steamIDPlayer
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_small_friend_avatar
 * @param {Real} steam_id_friend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_has_friend
 * @param {Real} steamIDFriend
 * @param {Real} iFriendFlags
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_invite_user_to_game
 * @param {Real} steamIDFriend
 * @param {String} pchConnectString
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_chat_admin
 * @param {Real} steamIDClanChat
 * @param {Real} steamIDUser
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_public
 * @param {Real} steamIDClan
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_official_game_group
 * @param {Real} steamIDClan
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_chat_window_open_in_steam
 * @param {Real} steamIDClanChat
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_following
 * @param {Real} steamID
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_user_in_source
 * @param {Real} steamIDUser
 * @param {Real} steamIDSource
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_request_clan_officer_list
 * @param {Real} steamIDClan
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_friends_request_friend_rich_presence
 * @param {Real} steamIDFriend
 * @function_end 
 */

/**
 * @function_partial steam_friends_request_user_information
 * @param {Real} steamIDUser
 * @param {Bool} bRequireNameOnly
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_in_game_voice_speaking
 * @param {Real} steamIDUser
 * @param {Bool} bSpeaking
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_played_with
 * @param {Real} steamIDUserPlayedWith
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_rich_presence
 * @param {String} pchKey
 * @param {String} pchValue
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_callback_persona_state_change
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_callback_persona_state_change
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_callback_game_overlay_activated
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_callback_game_overlay_activated
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_callback_game_rich_presence_join_requested
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_callback_game_rich_presence_join_requested
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_callback_game_lobby_join_requested
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_callback_game_lobby_join_requested
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_callback_friend_rich_presence_update
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_callback_friend_rich_presence_update
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_callback_game_server_change_requested
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_callback_game_server_change_requested
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_dlc_data_by_index
 * @param {Real} iDLC
 * @returns {Struct.SteamAppsDlcData} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_app_installed
 * @param {Real} appID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_cybercafe
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_dlc_installed
 * @param {Real} appID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_low_violence
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_subscribed
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_subscribed_app
 * @param {Real} appID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_subscribed_from_family_sharing
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_subscribed_from_free_weekend
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_timed_trial
 * @returns {Struct.SteamAppsTimedTrialStatus} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_vac_banned
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_app_build_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_app_install_dir
 * @param {Real} appID
 * @returns {Struct.SteamAppsInstallDir} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_app_owner
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_available_game_languages
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_current_beta_name
 * @returns {Struct.SteamAppsBetaName} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_num_betas
 * @returns {Struct.SteamAppsNumBetas} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_beta_info
 * @param {Real} iBetaIndex
 * @returns {Struct.SteamAppsBetaInfo} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_set_active_beta
 * @param {String} pchBetaName
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_current_game_language
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_dlc_count
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_dlc_download_progress
 * @param {Real} nAppID
 * @returns {Struct.SteamAppsDlcDownloadProgress} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_app_ownership_ticket_data
 * @param {Real} app_id
 * @param {Buffer} ticket_buffer
 * @param {Real} max_bytes
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_earliest_purchase_unix_time
 * @param {Real} nAppID
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_file_details
 * @param {String} pszFileName
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_installed_depots
 * @param {Real} appID
 * @param {Real} cMaxDepots
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_launch_command_line
 * @param {Real} cubCommandLine
 * @returns {Struct.SteamAppsLaunchCommandLine} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_launch_query_param
 * @param {String} pchKey
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_install_dlc
 * @param {Real} nAppID
 * @function_end 
 */

/**
 * @function_partial steam_apps_mark_content_corrupt
 * @param {Bool} bMissingFilesOnly
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_request_all_proof_of_purchase_keys
 * @function_end 
 */

/**
 * @function_partial steam_apps_request_app_proof_of_purchase_key
 * @param {Real} nAppID
 * @function_end 
 */

/**
 * @function_partial steam_apps_uninstall_dlc
 * @param {Real} nAppID
 * @function_end 
 */

/**
 * @function_partial steam_apps_set_callback_dlc_installed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_apps_clear_callback_dlc_installed
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_add_screenshot_to_library
 * @param {String} pchFilename
 * @param {String} pchThumbnailFilename
 * @param {Real} nWidth
 * @param {Real} nHeight
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_add_vr_screenshot_to_library
 * @param {Enum.SteamScreenshotsVrScreenshotType} eType
 * @param {String} pchFilename
 * @param {String} pchVRFilename
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_hook_screenshots
 * @param {Bool} bHook
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_is_screenshots_hooked
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_set_location
 * @param {Real} hScreenshot
 * @param {String} pchLocation
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_tag_published_file
 * @param {Real} hScreenshot
 * @param {Real} unPublishedFileID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_tag_user
 * @param {Real} hScreenshot
 * @param {Real} steamID
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_trigger_screenshot
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_write_screenshot
 * @param {Buffer} pubRGB
 * @param {Real} cubRGB
 * @param {Real} nWidth
 * @param {Real} nHeight
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_set_callback_screenshot_ready
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_set_callback_screenshot_requested
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_clear_callback_screenshot_ready
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_clear_callback_screenshot_requested
 * @function_end 
 */

/**
 * @function_partial steam_user_advertise_game
 * @param {Real} steam_id_game_server
 * @param {Real} un_ip_server
 * @param {Real} us_port_server
 * @function_end 
 */

/**
 * @function_partial steam_user_begin_auth_session
 * @param {Buffer} auth_ticket
 * @param {Real} cb_auth_ticket
 * @param {Real} steam_id
 * @returns {Enum.SteamUserBeginAuthSessionResult} 
 * @function_end 
 */

/**
 * @function_partial steam_user_is_behind_nat
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_user_is_phone_identifying
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_user_is_phone_requiring_verification
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_user_is_phone_verified
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_user_is_two_factor_enabled
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_user_logged_on
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_user_set_duration_control_online_state
 * @param {Enum.SteamUserDurationControlOnlineState} state
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_user_cancel_auth_ticket
 * @param {Real} h_auth_ticket
 * @function_end 
 */

/**
 * @function_partial steam_user_decompress_voice
 * @param {Buffer} compressed
 * @param {Real} cb_compressed
 * @param {Buffer} dest
 * @param {Real} cb_dest_buffer_size
 * @param {Real} n_desired_sample_rate
 * @returns {Enum.SteamApiVoiceResult} 
 * @function_end 
 */

/**
 * @function_partial steam_user_end_auth_session
 * @param {Real} steam_id
 * @function_end 
 */

/**
 * @function_partial steam_user_get_auth_session_ticket
 * @param {Buffer} out_ticket
 * @param {Real} cb_max_ticket
 * @param {Struct.SteamNetworkingIdentity} [remote_identity]
 * @returns {Struct.SteamUserAuthSessionTicket} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_h_steam_user
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_player_steam_level
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_steam_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_decode_steam_id
 * @param {Real} steam_id
 * @returns {Struct.SteamId} 
 * @function_end 
 */

/**
 * @function_partial steam_user_start_voice_recording
 * @function_end 
 */

/**
 * @function_partial steam_user_stop_voice_recording
 * @function_end 
 */

/**
 * @function_partial steam_user_get_voice_optimal_sample_rate
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_available_voice
 * @returns {Struct.SteamUserAvailableVoice} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_voice
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
 * @function_partial steam_user_get_user_data_folder
 * @returns {Struct.SteamUserDataFolder} 
 * @function_end 
 */

/**
 * @function_partial steam_user_request_encrypted_app_ticket
 * @param {Buffer} data_to_include
 * @param {Real} cb_data_to_include
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_user_get_encrypted_app_ticket
 * @param {Buffer} out_ticket
 * @param {Real} cb_max_ticket
 * @returns {Struct.SteamUserEncryptedAppTicket} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_game_badge_level
 * @param {Real} n_series
 * @param {Bool} b_foil
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_auth_ticket_for_web_api
 * @param {String} pch_identity
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_duration_control
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_user_request_store_auth_url
 * @param {String} pch_redirect_url
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_user_get_market_eligibility
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_user_track_app_usage_event
 * @param {Real} game_id
 * @param {Real} e_app_usage_event
 * @param {String} pch_extra_info
 * @function_end 
 */

/**
 * @function_partial steam_user_user_has_license_for_app
 * @param {Real} steam_id
 * @param {Real} app_id
 * @returns {Enum.SteamApiUserHasLicenseResult} 
 * @function_end 
 */

/**
 * @function_partial steam_user_set_callback_steam_servers_connected
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_clear_callback_steam_servers_connected
 * @function_end 
 */

/**
 * @function_partial steam_user_set_callback_steam_server_connect_failure
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_clear_callback_steam_server_connect_failure
 * @function_end 
 */

/**
 * @function_partial steam_user_set_callback_steam_servers_disconnected
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_clear_callback_steam_servers_disconnected
 * @function_end 
 */

/**
 * @function_partial steam_user_set_callback_client_game_server_deny
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_clear_callback_client_game_server_deny
 * @function_end 
 */

/**
 * @function_partial steam_user_set_callback_licenses_updated
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_clear_callback_licenses_updated
 * @function_end 
 */

/**
 * @function_partial steam_user_set_callback_microtxn_authorization_response
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_clear_callback_microtxn_authorization_response
 * @function_end 
 */

/**
 * @function_partial steam_utils_overlay_needs_present
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_check_file_signature
 * @param {String} sz_file_name
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_api_call_failure_reason
 * @param {Real} steam_api_call
 * @returns {Enum.SteamUtilsApiCallFailure} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_api_call_result
 * @param {Real} steam_api_call
 * @param {Real} callback_expected
 * @param {Buffer} out_callback
 * @param {Real} out_callback_size
 * @returns {Struct.SteamUtilsApiCallResult} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_ip_country
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_ip_country
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_low_battery_power
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_low_battery_power
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_steam_api_call_completed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_steam_api_call_completed
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_app_resuming_from_suspend
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_app_resuming_from_suspend
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_steam_shutdown
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_steam_shutdown
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_app_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_connected_universe
 * @returns {Enum.SteamApiUniverse} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_current_battery_power
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_entered_gamepad_text_input
 * @returns {Struct.SteamUtilsGamepadTextInput} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_entered_gamepad_text_length
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_image_rgba
 * @param {Real} i_image
 * @param {Buffer} dest
 * @param {Real} n_dest_buffer_size
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_image_size
 * @param {Real} i_image
 * @returns {Struct.SteamUtilsImageSize} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_ipc_call_count
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_ip_country
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_seconds_since_app_active
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_seconds_since_computer_active
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_server_real_time
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_steam_ui_language
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_is_overlay_enabled
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_is_steam_in_big_picture_mode
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_is_steam_running_in_vr
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_is_steam_running_on_steam_deck
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_is_steam_china_launcher
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_is_api_call_completed
 * @param {Real} steam_api_call
 * @returns {Struct.SteamUtilsApiCallCompleted} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_init_filter_text
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_filter_text
 * @param {Enum.SteamUtilsTextFilteringContext} context
 * @param {Real} source_steam_id
 * @param {String} input_message
 * @returns {Struct.SteamUtilsFilterTextResult} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_is_vr_headset_streaming_enabled
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_overlay_notification_inset
 * @param {Real} n_horizontal_inset
 * @param {Real} n_vertical_inset
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_overlay_notification_position
 * @param {Enum.SteamApiNotificationPosition} notification_position
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_vr_headset_streaming_enabled
 * @param {Bool} b_enabled
 * @function_end 
 */

/**
 * @function_partial steam_utils_show_gamepad_text_input
 * @param {Enum.SteamUtilsGamepadTextInputMode} input_mode
 * @param {Enum.SteamUtilsGamepadTextInputLineMode} line_mode
 * @param {String} description
 * @param {Real} char_max
 * @param {String} existing_text
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_show_floating_gamepad_text_input
 * @param {Enum.SteamUtilsFloatingGamepadTextInputMode} keyboard_mode
 * @param {Real} text_field_x
 * @param {Real} text_field_y
 * @param {Real} text_field_width
 * @param {Real} text_field_height
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_dismiss_floating_gamepad_text_input
 * @function_end 
 */

/**
 * @function_partial steam_utils_start_vr_dashboard
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_game_launcher_mode
 * @param {Bool} b_launcher_mode
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_gamepad_text_input_dismissed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_gamepad_text_input_dismissed
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_floating_gamepad_text_input_dismissed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_floating_gamepad_text_input_dismissed
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_callback_warning_message
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_utils_clear_callback_warning_message
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_app_dependency
 * @param {Real} published_file_id
 * @param {Real} app_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_dependency
 * @param {Real} parent_published_file_id
 * @param {Real} child_published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_excluded_tag
 * @param {Real} query_handle
 * @param {String} tag_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_item_key_value_tag
 * @param {Real} update_handle
 * @param {String} key
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_item_preview_file
 * @param {Real} update_handle
 * @param {String} preview_file_path
 * @param {Enum.SteamItemPreviewType} preview_type
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_item_preview_video
 * @param {Real} update_handle
 * @param {String} video_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_item_to_favorites
 * @param {Real} app_id
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_required_key_value_tag
 * @param {Real} query_handle
 * @param {String} key
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_required_tag
 * @param {Real} query_handle
 * @param {String} tag_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_required_tag_group
 * @param {Real} query_handle
 * @param {Array[String]} tags_csv
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_init_workshop_for_game_server
 * @param {Real} workshop_depot_id
 * @param {String} folder
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_create_item
 * @param {Real} consumer_app_id
 * @param {Enum.SteamWorkshopFileType} workshop_file_type
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_create_query_all_ugc_request
 * @param {Enum.SteamUgcQuery} query_type
 * @param {Enum.SteamUgcMatchingUgcType} matching_ugc_type
 * @param {Real} creator_app_id
 * @param {Real} consumer_app_id
 * @param {Real} page
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_create_query_ugc_details_request
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_create_query_user_ugc_request
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
 * @function_partial steam_ugc_delete_item
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_download_item
 * @param {Real} published_file_id
 * @param {Bool} high_priority
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_app_dependencies
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_item_download_info
 * @param {Real} published_file_id
 * @returns {Struct.SteamUgcItemDownloadInfo} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_item_install_info
 * @param {Real} published_file_id
 * @returns {Struct.SteamUgcItemInstallInfo} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_item_state
 * @param {Real} published_file_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_item_update_progress
 * @param {Real} update_handle
 * @returns {Struct.SteamUgcItemUpdateProgress} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_num_subscribed_items
 * @param {Bool} include_locally_disabled
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_subscribed_items
 * @param {Real} c_max_entries
 * @param {Bool} include_locally_disabled
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_result
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Struct.SteamUgcQueryResult} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_preview_url
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Struct.SteamUgcQueryPreviewUrl} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_metadata
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Struct.SteamUgcQueryMetadata} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_children
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} c_max_entries
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_statistic
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Enum.SteamUgcStatisticType} stat_type
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_num_additional_previews
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_additional_preview
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} preview_index
 * @param {String} original_file_name
 * @returns {Struct.SteamUgcAdditionalPreview} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_num_key_value_tags
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_key_value_tag
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} key_value_tag_index
 * @returns {Struct.SteamUgcKeyValueTag} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_content_descriptors
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} max_descriptors
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_app_dependency
 * @param {Real} published_file_id
 * @param {Real} app_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_dependency
 * @param {Real} parent_published_file_id
 * @param {Real} child_published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_item_from_favorites
 * @param {Real} app_id
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_item_key_value_tags
 * @param {Real} update_handle
 * @param {String} key
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_item_preview
 * @param {Real} update_handle
 * @param {Real} index
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_content_descriptor
 * @param {Real} update_handle
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_content_descriptor
 * @param {Real} update_handle
 * @param {Enum.SteamUgcContentDescriptorId} descriptor_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_required_game_versions
 * @param {Real} update_handle
 * @param {String} game_branch_min
 * @param {String} game_branch_max
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_request_ugc_details
 * @param {Real} published_file_id
 * @param {Real} max_age_seconds
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_send_query_ugc_request
 * @param {Real} query_handle
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_release_query_ugc_request
 * @param {Real} query_handle
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_callback_item_installed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_clear_callback_item_installed
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_allow_cached_response
 * @param {Real} query_handle
 * @param {Real} max_age_seconds
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_cloud_file_name_filter
 * @param {Real} query_handle
 * @param {String} match_cloud_file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_content
 * @param {Real} update_handle
 * @param {String} content_folder
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_description
 * @param {Real} update_handle
 * @param {String} description
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_metadata
 * @param {Real} update_handle
 * @param {String} metadata
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_preview
 * @param {Real} update_handle
 * @param {String} preview_file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_tags
 * @param {Real} update_handle
 * @param {Array[String]} tags_csv
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_title
 * @param {Real} update_handle
 * @param {String} title
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_update_language
 * @param {Real} update_handle
 * @param {String} language
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_items_disabled_locally
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @param {Bool} disabled_locally
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_item_visibility
 * @param {Real} update_handle
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_language
 * @param {Real} query_handle
 * @param {String} language
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_match_any_tag
 * @param {Real} query_handle
 * @param {Bool} match_any_tag
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_ranked_by_trend_days
 * @param {Real} query_handle
 * @param {Real} days
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_additional_previews
 * @param {Real} query_handle
 * @param {Bool} return_additional_previews
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_children
 * @param {Real} query_handle
 * @param {Bool} return_children
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_key_value_tags
 * @param {Real} query_handle
 * @param {Bool} return_key_value_tags
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_long_description
 * @param {Real} query_handle
 * @param {Bool} return_long_description
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_metadata
 * @param {Real} query_handle
 * @param {Bool} return_metadata
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_only_ids
 * @param {Real} query_handle
 * @param {Bool} return_only_ids
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_playtime_stats
 * @param {Real} query_handle
 * @param {Real} days
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_return_total_only
 * @param {Real} query_handle
 * @param {Bool} return_total_only
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_search_text
 * @param {Real} query_handle
 * @param {String} search_text
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_subscriptions_load_order
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_user_item_vote
 * @param {Real} published_file_id
 * @param {Bool} vote_up
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_user_item_vote
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_start_item_update
 * @param {Real} consumer_app_id
 * @param {Real} published_file_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_start_playtime_tracking
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_stop_playtime_tracking
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_stop_playtime_tracking_for_all_items
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_submit_item_update
 * @param {Real} update_handle
 * @param {String} change_note
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_subscribe_item
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_suspend_downloads
 * @param {Bool} suspend
 * @function_end 
 */

/**
 * @function_partial steam_ugc_unsubscribe_item
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_callback_user_subscribed_items_list_changed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_clear_callback_user_subscribed_items_list_changed
 * @function_end 
 */

/**
 * @function_partial steam_ugc_update_item_preview_file
 * @param {Real} update_handle
 * @param {Real} index
 * @param {String} preview_file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_update_item_preview_video
 * @param {Real} update_handle
 * @param {Real} index
 * @param {String} video_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_show_workshop_eula
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_workshop_eula_status
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_callback_file_subscribed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_clear_callback_file_subscribed
 * @function_end 
 */

/**
 * @function_partial steam_ugc_set_callback_file_unsubscribed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_clear_callback_file_unsubscribed
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_num_supported_game_versions
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_activate_action_set
 * @param {Real} input_handle
 * @param {Real} action_set_handle
 * @function_end 
 */

/**
 * @function_partial steam_input_activate_action_set_layer
 * @param {Real} input_handle
 * @param {Real} action_set_layer_handle
 * @function_end 
 */

/**
 * @function_partial steam_input_deactivate_action_set_layer
 * @param {Real} input_handle
 * @param {Real} action_set_layer_handle
 * @function_end 
 */

/**
 * @function_partial steam_input_deactivate_all_action_set_layers
 * @param {Real} input_handle
 * @function_end 
 */

/**
 * @function_partial steam_input_get_active_action_set_layers
 * @param {Real} input_handle
 * @returns {Struct.SteamInputActiveActionSetLayers} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_action_set_handle
 * @param {String} pszActionSetName
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_analog_action_data
 * @param {Real} input_handle
 * @param {Real} analog_action_handle
 * @returns {Struct.SteamInputAnalogActionData} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_analog_action_handle
 * @param {String} pszActionName
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_analog_action_origins
 * @param {Real} input_handle
 * @param {Real} action_set_handle
 * @param {Real} analog_action_handle
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_glyph_png_for_action_origin
 * @param {Real} origin
 * @param {Real} size
 * @param {Real} flags
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_glyph_svg_for_action_origin
 * @param {Real} origin
 * @param {Real} flags
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_connected_controllers
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_controller_for_gamepad_index
 * @param {Real} nIndex
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_current_action_set
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_digital_action_data
 * @param {Real} input_handle
 * @param {Real} digital_action_handle
 * @returns {Struct.SteamInputDigitalActionData} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_digital_action_handle
 * @param {String} pszActionName
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_digital_action_origins
 * @param {Real} input_handle
 * @param {Real} action_set_handle
 * @param {Real} digital_action_handle
 * @returns {Struct.SteamInputActionOrigins} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_gamepad_index_for_controller
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_input_type_for_handle
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_motion_data
 * @param {Real} input_handle
 * @returns {Struct.SteamInputMotionData} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_string_for_action_origin
 * @param {Real} eOrigin
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_input_init
 * @param {Bool} explicitly_call_run_frame
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_input_enable_device_callbacks
 * @function_end 
 */

/**
 * @function_partial steam_input_run_frame
 * @function_end 
 */

/**
 * @function_partial steam_input_set_dual_sense_trigger_effect
 * @param {Real} input_handle
 * @param {Array[Real]} pParam
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_input_set_led_color
 * @param {Real} input_handle
 * @param {Real} nColorR
 * @param {Real} nColorG
 * @param {Real} nColorB
 * @param {Real} nFlags
 * @function_end 
 */

/**
 * @function_partial steam_input_show_binding_panel
 * @param {Real} input_handle
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_input_shutdown
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_input_stop_analog_action_momentum
 * @param {Real} input_handle
 * @param {Real} analog_action_handle
 * @function_end 
 */

/**
 * @function_partial steam_input_trigger_vibration
 * @param {Real} input_handle
 * @param {Real} usLeftSpeed
 * @param {Real} usRightSpeed
 * @function_end 
 */

/**
 * @function_partial steam_input_trigger_vibration_extended
 * @param {Real} input_handle
 * @param {Real} usLeftSpeed
 * @param {Real} usRightSpeed
 * @param {Real} usLeftTriggerSpeed
 * @param {Real} usRightTriggerSpeed
 * @function_end 
 */

/**
 * @function_partial steam_input_get_action_origin_from_xbox_origin
 * @param {Real} input_handle
 * @param {Real} eOrigin
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_translate_action_origin
 * @param {Real} eDestinationInputType
 * @param {Real} eSourceOrigin
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_device_binding_revision
 * @param {Real} input_handle
 * @returns {Struct.SteamInputDeviceBindingRevision} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_remote_play_session_id
 * @param {Real} input_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_input_set_callback_device_connected
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_input_clear_callback_device_connected
 * @function_end 
 */

/**
 * @function_partial steam_input_set_callback_device_disconnected
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_input_clear_callback_device_disconnected
 * @function_end 
 */

/**
 * @function_partial steam_input_set_callback_action_set_changed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_input_clear_callback_action_set_changed
 * @function_end 
 */

/**
 * @function_partial steam_input_set_callback_controller_battery
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_input_clear_callback_controller_battery
 * @function_end 
 */

/**
 * @function_partial steam_userstats_get_stat_int
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatInt} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_get_stat_float
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatFloat} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_set_stat_int
 * @param {String} stat_name
 * @param {Real} data
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_set_stat_float
 * @param {String} stat_name
 * @param {Real} data
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_update_avg_rate_stat
 * @param {String} stat_name
 * @param {Real} count_this_session
 * @param {Real} session_length
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_get_achievement
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsUserAchievement} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_set_achievement
 * @param {String} achievement_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_clear_achievement
 * @param {String} achievement_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_and_unlock_time
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_store_stats
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_icon
 * @param {String} achievement_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_display_attribute
 * @param {String} achievement_name
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_indicate_achievement_progress
 * @param {String} achievement_name
 * @param {Real} cur_progress
 * @param {Real} max_progress
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_num_achievements
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_name
 * @param {Real} index
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_request_user_stats
 * @param {Real} steam_id_user
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_user_stat_int
 * @param {Real} steam_id_user
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatInt} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_user_stat_float
 * @param {Real} steam_id_user
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsStatFloat} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_user_achievement
 * @param {Real} steam_id_user
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsUserAchievement} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_user_achievement_and_unlock_time
 * @param {Real} steam_id_user
 * @param {String} achievement_name
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_reset_all_stats
 * @param {Bool} achievements_too
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_find_or_create_leaderboard
 * @param {String} leaderboard_name
 * @param {Enum.SteamLeaderboardSortMethod} sort_method
 * @param {Enum.SteamLeaderboardDisplayType} display_type
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_find_leaderboard
 * @param {String} leaderboard_name
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_leaderboard_name
 * @param {Real} leaderboard_handle
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_leaderboard_entry_count
 * @param {Real} leaderboard_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_leaderboard_sort_method
 * @param {Real} leaderboard_handle
 * @returns {Enum.SteamLeaderboardSortMethod} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_leaderboard_display_type
 * @param {Real} leaderboard_handle
 * @returns {Enum.SteamLeaderboardDisplayType} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_download_leaderboard_entries
 * @param {Real} leaderboard_handle
 * @param {Enum.SteamLeaderboardDataRequest} request
 * @param {Real} range_start
 * @param {Real} range_end
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_download_leaderboard_entries_for_users
 * @param {Real} leaderboard_handle
 * @param {Array[Real]} users
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_downloaded_leaderboard_entry
 * @param {Real} leaderboard_entries_handle
 * @param {Real} entry_index
 * @param {Buffer} buffer
 * @param {Real} buffer_size
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_upload_leaderboard_score
 * @param {Real} leaderboard_handle
 * @param {Enum.SteamLeaderboardUploadScoreMethod} method
 * @param {Real} score
 * @param {Buffer} score_details_buffer
 * @param {Real} score_details_count
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_attach_leaderboard_ugc
 * @param {Real} leaderboard_handle
 * @param {Real} ugc_handle
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_number_of_current_players
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_request_global_achievement_percentages
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_most_achieved_achievement_info
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_next_most_achieved_achievement_info
 * @param {Real} iterator_prev
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_achieved_percent
 * @param {String} achievement_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_request_global_stats
 * @param {Real} history_days
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_int64
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatInt64} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_double
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatDouble} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_history_int64
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatHistoryInt64} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_history_double
 * @param {String} stat_name
 * @returns {Struct.SteamUserStatsGlobalStatHistoryDouble} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_progress_limits_int
 * @param {String} achievement_name
 * @param {Real} cur_progress
 * @param {Real} max_progress
 * @returns {Struct.SteamUserStatsIntMinMax} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_progress_limits_float
 * @param {String} achievement_name
 * @param {Real} cur_progress
 * @param {Real} max_progress
 * @returns {Struct.SteamUserStatsFloatMinMax} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_set_callback_user_stats_received
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_clear_callback_user_stats_received
 * @function_end 
 */

/**
 * @function_partial steam_userstats_set_callback_user_stats_stored
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_clear_callback_user_stats_stored
 * @function_end 
 */

/**
 * @function_partial steam_userstats_set_callback_user_achievement_stored
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_clear_callback_user_achievement_stored
 * @function_end 
 */

/**
 * @function_partial steam_music_is_enabled
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_music_is_playing
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_music_get_playback_status
 * @returns {Enum.SteamMusicPlaybackStatus} 
 * @function_end 
 */

/**
 * @function_partial steam_music_play
 * @function_end 
 */

/**
 * @function_partial steam_music_pause
 * @function_end 
 */

/**
 * @function_partial steam_music_play_previous
 * @function_end 
 */

/**
 * @function_partial steam_music_play_next
 * @function_end 
 */

/**
 * @function_partial steam_music_set_volume
 * @param {Real} volume
 * @function_end 
 */

/**
 * @function_partial steam_music_get_volume
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_music_set_callback_playback_status_has_changed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_music_clear_callback_playback_status_has_changed
 * @function_end 
 */

/**
 * @function_partial steam_music_set_callback_volume_has_changed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_music_clear_callback_volume_has_changed
 * @function_end 
 */

/**
 * @function_partial steam_timeline_set_timeline_tooltip
 * @param {String} description
 * @param {Real} time_delta_seconds
 * @function_end 
 */

/**
 * @function_partial steam_timeline_clear_timeline_tooltip
 * @param {Real} time_delta_seconds
 * @function_end 
 */

/**
 * @function_partial steam_timeline_add_instantaneous_timeline_event
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
 * @function_partial steam_timeline_add_range_timeline_event
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
 * @function_partial steam_timeline_start_range_timeline_event
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
 * @function_partial steam_timeline_update_range_timeline_event
 * @param {Real} event_handle
 * @param {String} title
 * @param {String} description
 * @param {String} icon
 * @param {Real} priority
 * @param {Enum.SteamTimelineEventClipPriority} possible_clip
 * @function_end 
 */

/**
 * @function_partial steam_timeline_end_range_timeline_event
 * @param {Real} event_handle
 * @param {Real} end_offset_seconds
 * @function_end 
 */

/**
 * @function_partial steam_timeline_remove_timeline_event
 * @param {Real} event_handle
 * @function_end 
 */

/**
 * @function_partial steam_timeline_does_event_recording_exist
 * @param {Real} event_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_timeline_start_game_phase
 * @function_end 
 */

/**
 * @function_partial steam_timeline_end_game_phase
 * @function_end 
 */

/**
 * @function_partial steam_timeline_set_game_phase_id
 * @param {String} phase_id
 * @function_end 
 */

/**
 * @function_partial steam_timeline_does_game_phase_recording_exist
 * @param {String} phase_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_timeline_add_game_phase_tag
 * @param {String} tag_name
 * @param {String} tag_icon
 * @param {String} tag_group
 * @param {Real} priority
 * @function_end 
 */

/**
 * @function_partial steam_timeline_set_game_phase_attribute
 * @param {String} attribute_group
 * @param {String} attribute_value
 * @param {Real} priority
 * @function_end 
 */

/**
 * @function_partial steam_timeline_set_timeline_game_mode
 * @param {Enum.SteamTimelineGameMode} mode
 * @function_end 
 */

/**
 * @function_partial steam_timeline_open_overlay_to_game_phase
 * @param {String} phase_id
 * @function_end 
 */

/**
 * @function_partial steam_timeline_open_overlay_to_timeline_event
 * @param {Real} event_handle
 * @function_end 
 */

/**
 * @function_partial steam_timeline_set_callback_game_phase_recording_exists
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_timeline_clear_callback_game_phase_recording_exists
 * @function_end 
 */

/**
 * @function_partial steam_timeline_set_callback_event_recording_exists
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_timeline_clear_callback_event_recording_exists
 * @function_end 
 */

/**
 * @function_partial steam_inventory_add_promo_item
 * @param {Real} item_def_id
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_add_promo_items
 * @param {Array[Real]} item_def_ids
 * @param {Real} num_item_defs
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_check_result_steam_id
 * @param {Real} result_handle
 * @param {Real} steam_id_expected
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_consume_item
 * @param {Real} item_instance_id
 * @param {Real} quantity
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_deserialize_result
 * @param {Buffer} data
 * @param {Real} data_size
 * @returns {Struct.SteamInventoryDeserializeResult} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_destroy_result
 * @param {Real} result_handle
 * @function_end 
 */

/**
 * @function_partial steam_inventory_exchange_items
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
 * @function_partial steam_inventory_generate_items
 * @param {Array[Real]} item_defs
 * @param {Array[Real]} quantities
 * @param {Real} count
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_all_items
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_result_items
 * @param {Real} result_handle
 * @returns {Struct.SteamInventoryResultItems} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_result_status
 * @param {Real} result_handle
 * @returns {Enum.SteamApiResult} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_result_timestamp
 * @param {Real} result_handle
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_eligible_promo_item_definition_ids
 * @param {Real} c_max_item_defs
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_load_item_definitions
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_item_definition_ids
 * @param {Real} c_max_item_defs
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_items_by_id
 * @param {Array[Real]} item_instance_ids
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_serialize_result
 * @param {Real} result_handle
 * @param {Buffer} out_data
 * @param {Real} out_capacity
 * @returns {Struct.SteamInventorySerializeResult} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_result_item_property_keys_array
 * @param {Real} result_handle
 * @param {Real} item_index
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_result_item_property
 * @param {Real} result_handle
 * @param {Real} item_index
 * @param {String} property_name
 * @returns {Struct.SteamInventoryItemProperty} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_start_purchase
 * @param {Array[Real]} item_def_ids
 * @param {Array[Real]} quantities
 * @param {Real} count
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_inventory_request_prices
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_num_items_with_prices
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_items_with_prices
 * @param {Real} max
 * @returns {Struct.SteamInventoryItemsWithPrices} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_start_update_properties
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_remove_property
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_property_string
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_property_bool
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {Bool} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_property_int64
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {Real} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_property_float
 * @param {Real} result_handle
 * @param {Real} item_instance_id
 * @param {String} property_name
 * @param {Real} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_submit_update_properties
 * @param {Real} result_handle
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_transfer_item_quantity
 * @param {Real} item_instance_id_source
 * @param {Real} quantity
 * @param {Real} item_instance_id_dest
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_trigger_item_drop
 * @param {Real} item_def_id
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_grant_promo_items
 * @param {Function} [callback]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_item_definition_property
 * @param {Real} item_def_id
 * @param {String} property_name
 * @returns {Struct.SteamInventoryDefProperty} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_item_definition_property_keys
 * @param {Real} item_def_id
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_item_price
 * @param {Real} item_def_id
 * @returns {Struct.SteamInventoryItemPrice} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_callback_result_ready
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_inventory_clear_callback_result_ready
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_callback_full_update
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_inventory_clear_callback_full_update
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_callback_definition_update
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_inventory_clear_callback_definition_update
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_set_callback_published_file_subscribed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_clear_callback_published_file_subscribed
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_set_callback_published_file_unsubscribed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_clear_callback_published_file_unsubscribed
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_set_callback_local_file_change
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_clear_callback_local_file_change
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_is_cloud_enabled_for_account
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_is_cloud_enabled_for_app
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_set_cloud_enabled_for_app
 * @param {Bool} enabled
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_write
 * @param {String} file_name
 * @param {Buffer} data
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_read
 * @param {String} file_name
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_delete
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_exists
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_persisted
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_file_size
 * @param {String} file_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_file_timestamp
 * @param {String} file_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_file_count
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_file_name_and_size
 * @param {Real} index
 * @returns {Struct.SteamRemoteStorageFileNameAndSize} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_quota
 * @returns {Struct.SteamRemoteStorageQuota} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_set_sync_platforms
 * @param {String} file_name
 * @param {Enum.SteamRemoteStoragePlatform} platforms
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_sync_platforms
 * @param {String} file_name
 * @returns {Enum.SteamRemoteStoragePlatform} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_forget
 * @param {String} file_name
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_write_stream_open
 * @param {String} file_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_write_stream_write_chunk
 * @param {Real} stream
 * @param {Buffer} data
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_write_stream_close
 * @param {Real} stream
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_write_stream_cancel
 * @param {Real} stream
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_cached_ugc_count
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_cached_ugc_handle
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_get_ugc_details
 * @param {Real} ugc_handle
 * @returns {Struct.SteamRemoteStorageUgcDetails} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_ugc_read
 * @param {Real} ugc_handle
 * @param {Buffer} out_data
 * @param {Real} bytes_to_read
 * @param {Real} offset
 * @param {Enum.SteamRemoteStorageUgcReadAction} action
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_share
 * @param {String} file_name
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_ugc_download
 * @param {Real} ugc_handle
 * @param {Real} priority
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_ugc_download_to_location
 * @param {Real} ugc_handle
 * @param {String} location
 * @param {Real} priority
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_publish_workshop_file
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
 * @function_partial steam_remote_storage_create_published_file_update_request
 * @param {Real} published_file_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_update_published_file_file
 * @param {Real} update_handle
 * @param {String} file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_update_published_file_preview_file
 * @param {Real} update_handle
 * @param {String} preview_file
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_update_published_file_title
 * @param {Real} update_handle
 * @param {String} title
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_update_published_file_description
 * @param {Real} update_handle
 * @param {String} description
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_update_published_file_visibility
 * @param {Real} update_handle
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} visibility
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_update_published_file_tags
 * @param {Real} update_handle
 * @param {String} tags_csv
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_commit_published_file_update
 * @param {Real} update_handle
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_subscribe_published_file
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_unsubscribe_published_file
 * @param {Real} published_file_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_callback_lobby_data_update
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_clear_callback_lobby_data_update
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_callback_lobby_chat_update
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_clear_callback_lobby_chat_update
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_callback_lobby_chat_msg
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_clear_callback_lobby_chat_msg
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_callback_lobby_game_created
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_clear_callback_lobby_game_created
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_callback_lobby_invite
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_clear_callback_lobby_invite
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_create_lobby
 * @param {Enum.SteamMatchmakingLobbyType} lobby_type
 * @param {Real} max_members
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_join_lobby
 * @param {Real} lobby_id
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_request_lobby_list
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_add_request_lobby_list_string_filter
 * @param {String} key
 * @param {String} value
 * @param {Enum.SteamMatchmakingLobbyComparison} comparison
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_add_request_lobby_list_numerical_filter
 * @param {String} key
 * @param {Real} value
 * @param {Enum.SteamMatchmakingLobbyComparison} comparison
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_add_request_lobby_list_near_value_filter
 * @param {String} key
 * @param {Real} value
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_add_request_lobby_list_distance_filter
 * @param {Enum.SteamMatchmakingLobbyDistanceFilter} distance
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_add_request_lobby_list_result_count_filter
 * @param {Real} max_results
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_by_index
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_leave_lobby
 * @param {Real} lobby_id
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_lobby_owner
 * @param {Real} lobby_id
 * @param {Real} new_owner_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_owner
 * @param {Real} lobby_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_num_lobby_members
 * @param {Real} lobby_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_member_by_index
 * @param {Real} lobby_id
 * @param {Real} member_index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_lobby_data
 * @param {Real} lobby_id
 * @param {String} key
 * @param {String} value
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_data
 * @param {Real} lobby_id
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_delete_lobby_data
 * @param {Real} lobby_id
 * @param {String} key
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_data_count
 * @param {Real} lobby_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_data_by_index
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
 * @function_partial steam_matchmaking_set_lobby_member_data
 * @param {Real} lobby_id
 * @param {String} key
 * @param {String} value
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_member_data
 * @param {Real} lobby_id
 * @param {Real} member_id
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_send_lobby_chat_msg
 * @param {Real} lobby_id
 * @param {Buffer} msg
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_chat_entry
 * @param {Real} lobby_id
 * @param {Real} chat_id
 * @param {Buffer} out_buffer
 * @param {Real} out_max_bytes
 * @returns {Struct.SteamMatchmakingLobbyChatEntry} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_add_request_lobby_list_filter_slots_available
 * @param {Real} slots_available
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_request_lobby_data
 * @param {Real} steam_id_lobby
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_lobby_joinable
 * @param {Real} steam_id_lobby
 * @param {Bool} joinable
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_invite_user_to_lobby
 * @param {Real} steam_id_lobby
 * @param {Real} steam_id_invitee
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_lobby_game_server
 * @param {Real} steam_id_lobby
 * @param {Real} ip
 * @param {Real} port
 * @param {Real} steam_id_gs
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_set_linked_lobby
 * @param {Real} steam_id_lobby
 * @param {Real} steam_id_lobby_dependent
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_game_server
 * @param {Real} steam_id_lobby
 * @returns {Struct.SteamMatchmakingLobbyGameServer} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_set_callback_session_request
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_clear_callback_session_request
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_set_callback_session_failed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_clear_callback_session_failed
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_send_message_to_user
 * @param {Real} steam_id_remote
 * @param {Buffer} data
 * @param {Real} bytes
 * @param {Real} send_flags
 * @param {Real} remote_channel
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_receive_one_on_channel
 * @param {Real} local_channel
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @param {Real} offset
 * @returns {Struct.SteamNetworkingMessagesReceived} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_accept_session_with_user
 * @param {Real} steam_id_remote
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_close_session_with_user
 * @param {Real} steam_id_remote
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_close_channel_with_user
 * @param {Real} steam_id_remote
 * @param {Real} local_channel
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_set_callback_connection_status_changed
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_clear_callback_connection_status_changed
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_create_listen_socket_ip
 * @param {Real} port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_close_listen_socket
 * @param {Real} listen_socket
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_connect_by_ip_address
 * @param {String} ip
 * @param {Real} port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_accept_connection
 * @param {Real} conn
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_close_connection
 * @param {Real} conn
 * @param {Real} reason
 * @param {String} debug
 * @param {Bool} linger
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_set_connection_user_data
 * @param {Real} conn
 * @param {Real} user_data
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_get_connection_user_data
 * @param {Real} conn
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_set_connection_name
 * @param {Real} conn
 * @param {String} name
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_get_connection_name
 * @param {Real} conn
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_send_message_to_connection
 * @param {Real} conn
 * @param {Buffer} data
 * @param {Real} bytes
 * @param {Enum.SteamNetworkingSendFlags} send_flags
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_flush_messages_on_connection
 * @param {Real} conn
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_receive_one_on_connection
 * @param {Real} conn
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @param {Real} offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_get_connection_info
 * @param {Real} conn
 * @returns {Struct.SteamNetworkingSocketsConnectionInfo} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_get_detailed_connection_status
 * @param {Real} conn
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_run_callbacks
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_create_socket_pair
 * @param {Bool} use_network_loopback
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_create_listen_socket_p2p
 * @param {Real} local_virtual_port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_connect_p2p
 * @param {Real} steam_id_remote
 * @param {Real} remote_virtual_port
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_get_listen_socket_address
 * @param {Real} listen_socket
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_create_poll_group
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_destroy_poll_group
 * @param {Real} poll_group
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_set_connection_poll_group
 * @param {Real} conn
 * @param {Real} poll_group
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_receive_messages_on_poll_group
 * @param {Real} poll_group
 * @param {Buffer} out_data
 * @param {Real} max_bytes
 * @param {Real} offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_set_callback_reservation_notification
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_parties_clear_callback_reservation_notification
 * @function_end 
 */

/**
 * @function_partial steam_parties_set_callback_available_beacon_locations_updated
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_parties_clear_callback_available_beacon_locations_updated
 * @function_end 
 */

/**
 * @function_partial steam_parties_set_callback_active_beacons_updated
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_parties_clear_callback_active_beacons_updated
 * @function_end 
 */

/**
 * @function_partial steam_parties_get_num_available_beacon_locations
 * @returns {Struct.SteamPartiesAvailableBeaconLocationCount} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_get_available_beacon_locations
 * @returns {Struct.SteamPartiesAvailableBeaconLocations} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_create_beacon
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
 * @function_partial steam_parties_on_reservation_completed
 * @param {Real} beacon_id
 * @param {Real} user_steam_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_change_num_open_slots
 * @param {Real} beacon_id
 * @param {Real} open_slots
 * @param {Function} [callback]
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_destroy_beacon
 * @param {Real} beacon_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_get_num_active_beacons
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_get_beacon_by_index
 * @param {Real} index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_get_beacon_details
 * @param {Real} beacon_id
 * @returns {Struct.SteamPartiesBeaconDetails} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_join_party
 * @param {Real} beacon_id
 * @param {Function} [callback]
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_parties_get_beacon_location_data
 * @param {Enum.SteamPartiesBeaconLocationType} beacon_location_type
 * @param {Real} beacon_location_id
 * @param {Enum.SteamPartiesBeaconLocationData} data_kind
 * @returns {String} 
 * @function_end 
 */

/**
 * @struct_partial SteamId
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
 * @struct_partial SteamFriendsGetFollowerCountResult
 * @member {Real} result
 * @member {Real} steam_id
 * @member {Real} count
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsIsFollowingResult
 * @member {Real} result
 * @member {Real} steam_id
 * @member {Bool} is_following
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsEnumerateFollowingListResult
 * @member {Real} result
 * @member {Array[Real]} steam_ids
 * @member {Real} results_returned
 * @member {Real} total_result_count
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsRequestClanOfficerListResult
 * @member {Real} result
 * @member {Real} clan_id
 * @member {Real} officers
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsDownloadClanActivityCountsResult
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsAvatarImageLoaded
 * @member {Real} steam_id_64
 * @member {Real} image_handle
 * @member {Real} width
 * @member {Real} height
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsClanActivityCounts
 * @member {Bool} ok
 * @member {Real} online
 * @member {Real} in_game
 * @member {Real} chatting
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsClanChatMessage
 * @member {Real} bytes_copied
 * @member {String} text
 * @member {Enum.SteamFriendsChatEntryType} entry_type
 * @member {Real} chatter_steam_id_64
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsFriendGamePlayed
 * @member {Bool} ok
 * @member {Real} game_id
 * @member {Real} game_ip_v4
 * @member {Real} game_port
 * @member {Real} query_port
 * @member {Real} lobby_steam_id_64
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsFriendMessage
 * @member {Real} bytes_copied
 * @member {Enum.SteamFriendsChatEntryType} entry_type
 * @member {String} data
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsPersonaStateChange
 * @member {Real} steam_id
 * @member {Real} change_flags
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsGameOverlayActivated
 * @member {Bool} active
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsGameRichPresenceJoinRequested
 * @member {Real} steam_id_friend
 * @member {String} connect_string
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsGameLobbyJoinRequested
 * @member {Real} steam_id_friend
 * @member {Real} steam_id_lobby
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsFriendRichPresenceUpdate
 * @member {Real} steam_id_friend
 * @member {Real} app_id
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsGameServerChangeRequested
 * @member {String} server
 * @member {String} password
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsFileDetailsResult
 * @member {Real} result
 * @member {Real} file_size
 * @member {Real} flags
 * @member {String} sha1
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsDlcData
 * @member {Bool} ok
 * @member {Real} app_id
 * @member {Bool} available
 * @member {String} name
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsTimedTrialStatus
 * @member {Bool} ok
 * @member {Real} seconds_allowed
 * @member {Real} seconds_played
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsInstallDir
 * @member {Real} bytes_copied
 * @member {String} path
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsBetaName
 * @member {Bool} ok
 * @member {String} name
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsNumBetas
 * @member {Real} total
 * @member {Real} available
 * @member {Real} private_count
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsBetaInfo
 * @member {Bool} ok
 * @member {Real} flags
 * @member {Real} build_id
 * @member {String} beta_name
 * @member {String} description
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsDlcDownloadProgress
 * @member {Bool} ok
 * @member {Real} bytes_downloaded
 * @member {Real} bytes_total
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsLaunchCommandLine
 * @member {Real} bytes_copied
 * @member {String} command_line
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsInstallSize
 * @member {Bool} ok
 * @member {Real} bytes_install_size
 * @member {Real} bytes_download_size
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsDlcInstallDir
 * @member {Real} bytes_copied
 * @member {String} path
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsLanguageInfo
 * @member {Bool} ok
 * @member {String} language_name
 * @member {String} language_code
 * @struct_end 
 */

/**
 * @struct_partial SteamAppsDlcInstalled
 * @member {Real} app_id
 * @struct_end 
 */

/**
 * @struct_partial SteamScreenshotsScreenshotReady
 * @member {Real} screenshot_handle
 * @member {Enum.SteamApiResult} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStoreAuthUrlResponse
 * @member {Real} result
 * @member {String} url
 * @struct_end 
 */

/**
 * @struct_partial SteamUserEncryptedAppTicketResponse
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserDurationControl
 * @member {Real} result
 * @member {Real} app_id
 * @member {Bool} applicable
 * @member {Real} csecs_last_5h
 * @member {Real} progress
 * @member {Real} notification
 * @struct_end 
 */

/**
 * @struct_partial SteamUserMarketEligibilityResponse
 * @member {Bool} allowed
 * @member {Real} not_allowed_reason
 * @member {Real} allowed_at_time
 * @member {Real} steam_purchase_time
 * @member {Real} day_steam_guard_required_days
 * @member {Real} day_new_device_cooldown
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingIdentity
 * @member {Enum.SteamNetworkingIdentityType} type
 * @member {Real} steam_id
 * @member {String} ip
 * @member {Real} port
 * @member {String} generic_string
 * @struct_end 
 */

/**
 * @struct_partial SteamUserAuthSessionTicket
 * @member {Real} auth_ticket_handle
 * @member {Real} ticket_size
 * @struct_end 
 */

/**
 * @struct_partial SteamUserAvailableVoice
 * @member {Enum.SteamApiVoiceResult} result
 * @member {Real} compressed_bytes
 * @member {Real} uncompressed_bytes
 * @struct_end 
 */

/**
 * @struct_partial SteamUserGetVoiceResult
 * @member {Enum.SteamApiVoiceResult} result
 * @member {Real} written_compressed
 * @member {Real} written_uncompressed
 * @struct_end 
 */

/**
 * @struct_partial SteamUserGameConnectionToken
 * @member {Bool} ok
 * @member {Real} bytes_written
 * @struct_end 
 */

/**
 * @struct_partial SteamUserDataFolder
 * @member {Bool} ok
 * @member {String} path
 * @struct_end 
 */

/**
 * @struct_partial SteamUserEncryptedAppTicket
 * @member {Bool} ok
 * @member {Real} ticket_size
 * @struct_end 
 */

/**
 * @struct_partial SteamUserSteamServersConnected
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct_partial SteamUserSteamServersDisconnected
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserSteamServerConnectFailure
 * @member {Real} result
 * @member {Bool} still_retrying
 * @struct_end 
 */

/**
 * @struct_partial SteamUserClientGameServerDeny
 * @member {Real} app_id
 * @member {Real} game_server_ip
 * @member {Real} game_server_port
 * @member {Bool} secure
 * @member {Real} reason
 * @struct_end 
 */

/**
 * @struct_partial SteamUserLicensesUpdated
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct_partial SteamUserMicroTxnAuthorizationResponse
 * @member {Real} app_id
 * @member {Real} order_id
 * @member {Bool} authorized
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsApiCallResult
 * @member {Bool} ok
 * @member {Bool} failed
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsCheckFileSignatureResult
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsLowBatteryPower
 * @member {Real} minutes_battery_left
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsSteamApiCallCompleted
 * @member {Real} async_call
 * @member {Real} callback_id
 * @member {Real} param_size
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsCserIpPort
 * @member {Bool} ok
 * @member {Real} ip_v4
 * @member {Real} port
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsGamepadTextInput
 * @member {Bool} ok
 * @member {String} text
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsImageSize
 * @member {Bool} ok
 * @member {Real} width
 * @member {Real} height
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsApiCallCompleted
 * @member {Bool} ok
 * @member {Bool} failed
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsFilterTextResult
 * @member {Bool} ok
 * @member {Real} characters_filtered
 * @member {String} filtered_text
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsGamepadTextInputDismissed
 * @member {Bool} submitted
 * @member {Real} submitted_text_length
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsFloatingGamepadTextInputDismissed
 * @member {Bool} submitted
 * @struct_end 
 */

/**
 * @struct_partial SteamUtilsWarningMessage
 * @member {Real} severity
 * @member {String} text
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcItemDownloadInfo
 * @member {Bool} ok
 * @member {Real} bytes_downloaded
 * @member {Real} bytes_total
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcItemInstallInfo
 * @member {Bool} ok
 * @member {Real} size_on_disk
 * @member {String} folder
 * @member {Real} timestamp
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcItemUpdateProgress
 * @member {Real} status
 * @member {Real} bytes_processed
 * @member {Real} bytes_total
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcQueryResult
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
 * @struct_partial SteamUgcQueryPreviewUrl
 * @member {Bool} ok
 * @member {String} url
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcQueryMetadata
 * @member {Bool} ok
 * @member {String} metadata
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcAdditionalPreview
 * @member {Bool} ok
 * @member {String} url_or_video_id
 * @member {Real} preview_type
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcKeyValueTag
 * @member {Bool} ok
 * @member {String} key
 * @member {String} value
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcItemInstalled
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcUserSubscribedItemsListChanged
 * @member {Real} app_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcFileSubscribed
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcFileUnsubscribed
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcQueryCompleted
 * @member {Real} query_handle
 * @member {Real} result
 * @member {Real} num_results_returned
 * @member {Real} total_matching_results
 * @member {Bool} cached_data
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcCreateItemResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} legal_agreement_required
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcSubmitItemUpdateResult
 * @member {Real} result
 * @member {Bool} legal_agreement_required
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcSubscribeItemResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcUnsubscribeItemResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcFavoriteItemsListChanged
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} was_add_request
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcSetUserItemVoteResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} vote_up
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcGetUserItemVoteResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} voted_up
 * @member {Bool} voted_down
 * @member {Bool} vote_skipped
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcRequestItemDetailsResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} cached_data
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcSupportedGameVersionData
 * @member {Bool} ok
 * @member {String} game_branch_min
 * @member {String} game_branch_max
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcDeleteItemResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcDownloadItemResult
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamInputAnalogActionData
 * @member {Real} mode
 * @member {Real} x
 * @member {Real} y
 * @member {Bool} active
 * @struct_end 
 */

/**
 * @struct_partial SteamInputDigitalActionData
 * @member {Bool} state
 * @member {Bool} active
 * @struct_end 
 */

/**
 * @struct_partial SteamInputMotionData
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
 * @struct_partial SteamInputActiveActionSetLayers
 * @member {Real} count
 * @member {Array[Real]} handles
 * @struct_end 
 */

/**
 * @struct_partial SteamInputActionOrigins
 * @member {Real} count
 * @member {Array[Real]} origins
 * @struct_end 
 */

/**
 * @struct_partial SteamInputDeviceBindingRevision
 * @member {Bool} ok
 * @member {Real} major
 * @member {Real} minor
 * @struct_end 
 */

/**
 * @struct_partial SteamInputDeviceEvent
 * @member {Real} controller_handle
 * @struct_end 
 */

/**
 * @struct_partial SteamInputActionSetChanged
 * @member {Real} controller_handle
 * @member {Real} action_set_handle
 * @struct_end 
 */

/**
 * @struct_partial SteamInputControllerBattery
 * @member {Real} controller_handle
 * @member {Real} battery_percent
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsAchievementAndUnlockTime
 * @member {Bool} achieved
 * @member {Real} unlock_time
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsAchievementAndProgress
 * @member {Bool} achieved
 * @member {Real} cur_progress
 * @member {Real} max_progress
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsAchievementNamesAndPercent
 * @member {String} name
 * @member {Real} percent
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsMostAchievedAchievementInfo
 * @member {Bool} ok
 * @member {String} name
 * @member {Real} percent
 * @member {Bool} achieved
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsNumAchievementsAndHours
 * @member {Real} num_achievements
 * @member {Real} hours
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsStatInt
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsStatFloat
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsUserAchievement
 * @member {Bool} ok
 * @member {Bool} achieved
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsGlobalStatInt64
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsGlobalStatDouble
 * @member {Bool} ok
 * @member {Real} data
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsGlobalStatHistoryInt64
 * @member {Bool} ok
 * @member {Array[Real]} data
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsGlobalStatHistoryDouble
 * @member {Bool} ok
 * @member {Array[Real]} data
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsDownloadedLeaderboardEntry
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
 * @struct_partial SteamUserStatsRequestUserStatsResult
 * @member {Real} game_id
 * @member {Real} steam_id_user
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsLeaderboardFindResult
 * @member {Real} leaderboard_handle
 * @member {Bool} leaderboard_found
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsScoresDownloadedResult
 * @member {Real} leaderboard_handle
 * @member {Real} entries_handle
 * @member {Real} entry_count
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsScoreUploadedResult
 * @member {Bool} success
 * @member {Real} leaderboard_handle
 * @member {Real} score
 * @member {Bool} score_changed
 * @member {Real} global_rank_new
 * @member {Real} global_rank_previous
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsNumberOfCurrentPlayersResult
 * @member {Bool} success
 * @member {Real} players
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsGlobalAchievementPercentagesReadyResult
 * @member {Real} game_id
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsGlobalStatsReceivedResult
 * @member {Real} game_id
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsAttachLeaderboardUgcResult
 * @member {Bool} ok
 * @member {Real} result
 * @member {Real} leaderboard_handle
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsUserStatsReceived
 * @member {Real} game_id
 * @member {Real} steam_id_user
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsUserStatsStored
 * @member {Real} game_id
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsUserAchievementStored
 * @member {Real} game_id
 * @member {String} achievement_name
 * @member {Real} cur_progress
 * @member {Real} max_progress
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsIntMinMax
 * @member {Real} min
 * @member {Real} max
 * @member {Bool} ok
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsFloatMinMax
 * @member {Real} min
 * @member {Real} max
 * @member {Bool} ok
 * @struct_end 
 */

/**
 * @struct_partial SteamMusicPlaybackStatusHasChanged
 * @member {Real} playback_status
 * @struct_end 
 */

/**
 * @struct_partial SteamMusicVolumeHasChanged
 * @member {Real} volume
 * @struct_end 
 */

/**
 * @struct_partial SteamTimelineGamePhaseRecordingExists
 * @member {String} phase_id
 * @member {Real} recording_ms
 * @member {Real} longest_clip_ms
 * @member {Real} clip_count
 * @member {Real} screenshot_count
 * @struct_end 
 */

/**
 * @struct_partial SteamTimelineEventRecordingExists
 * @member {Real} event_id
 * @member {Bool} recording_exists
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryResultItems
 * @member {Bool} ok
 * @member {Real} count
 * @member {Array[Real]} item_instance_ids
 * @member {Array[Real]} item_def_ids
 * @member {Array[Real]} quantities
 * @member {Array[Real]} flags
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryDeserializeResult
 * @member {Bool} ok
 * @member {Real} result_handle
 * @member {Enum.SteamApiResult} status
 * @struct_end 
 */

/**
 * @struct_partial SteamInventorySerializeResult
 * @member {Bool} ok
 * @member {Real} bytes_written
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryItemProperty
 * @member {Bool} ok
 * @member {String} value
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryItemsWithPrices
 * @member {Bool} ok
 * @member {Real} count
 * @member {Array[Real]} item_def_ids
 * @member {Array[Real]} current_prices
 * @member {Array[Real]} base_prices
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryDefProperty
 * @member {Bool} ok
 * @member {String} value
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryItemPrice
 * @member {Bool} ok
 * @member {Real} current_price
 * @member {Real} base_price
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryResultReady
 * @member {Real} result_handle
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryFullUpdate
 * @member {Real} result_handle
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryDefinitionUpdate
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryStartPurchaseResult
 * @member {Real} result
 * @member {Real} order_id
 * @member {Real} transaction_id
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryRequestPricesResult
 * @member {Real} result
 * @member {String} currency
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageFileNameAndSize
 * @member {Bool} ok
 * @member {String} file_name
 * @member {Real} file_size
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageQuota
 * @member {Bool} ok
 * @member {Real} total_bytes
 * @member {Real} available_bytes
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageUgcDetails
 * @member {Bool} ok
 * @member {Real} ugc_handle
 * @member {Real} app_id
 * @member {Real} size_in_bytes
 * @member {String} file_name
 * @member {Real} steam_id_owner
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageFileShareResult
 * @member {Real} result
 * @member {Real} ugc_handle
 * @member {String} file_name
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageDownloadUgcResult
 * @member {Real} result
 * @member {Real} ugc_handle
 * @member {Real} app_id
 * @member {Real} size_in_bytes
 * @member {String} file_name
 * @member {Real} steam_id_owner
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStoragePublishedFileSubscribed
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStoragePublishedFileUnsubscribed
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageLocalFileChange
 * @member {Real} dummy
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStoragePublishFileResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @member {Bool} user_needs_to_accept_wla
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageUpdatePublishedFileResult
 * @member {Real} result
 * @member {Bool} user_needs_to_accept_wla
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageSubscribePublishedFileResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageUnsubscribePublishedFileResult
 * @member {Real} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyCreated
 * @member {Real} result
 * @member {Real} lobby_id
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyEnter
 * @member {Real} lobby_id
 * @member {Real} chat_permissions
 * @member {Bool} locked
 * @member {Real} response
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyMatchList
 * @member {Real} lobbies_count
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyDataUpdate
 * @member {Real} lobby_id
 * @member {Real} member_id
 * @member {Bool} success
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyChatUpdate
 * @member {Real} lobby_id
 * @member {Real} user_changed_id
 * @member {Real} making_change_id
 * @member {Real} chat_member_state_change
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyChatMsg
 * @member {Real} lobby_id
 * @member {Real} sender_id
 * @member {Real} chat_entry_type
 * @member {Real} message_size
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyGameCreated
 * @member {Real} lobby_id
 * @member {Real} server_ip
 * @member {Real} server_port
 * @member {Real} game_server_id
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyInvite
 * @member {Real} inviter_id
 * @member {Real} lobby_id
 * @member {String} game_id
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyChatEntry
 * @member {Bool} ok
 * @member {Real} bytes
 * @member {Real} sender_id
 * @member {Real} entry_type
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyGameServer
 * @member {Bool} ok
 * @member {Real} ip
 * @member {Real} port
 * @member {Real} steam_id_gs
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingMessagesSessionRequest
 * @member {Real} steam_id_remote
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingMessagesSessionFailed
 * @member {Real} steam_id_remote
 * @member {Real} end_reason
 * @member {String} debug_msg
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingMessagesReceived
 * @member {Bool} ok
 * @member {Real} steam_id_remote
 * @member {Real} channel
 * @member {Real} bytes_written
 * @member {Real} send_flags
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingSocketsConnectionInfo
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
 * @struct_partial SteamNetworkingSocketsReceived
 * @member {Bool} ok
 * @member {Real} conn
 * @member {Real} bytes_written
 * @member {Real} flags
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesAvailableBeaconLocationCount
 * @member {Bool} ok
 * @member {Real} count
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesAvailableBeaconLocations
 * @member {Bool} ok
 * @member {Real} count
 * @member {Array[Enum.SteamPartiesBeaconLocationType]} location_types
 * @member {Array[Real]} location_ids
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesCreateBeaconResult
 * @member {Real} result
 * @member {Real} beacon_id
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesJoinPartyResult
 * @member {Real} result
 * @member {Real} beacon_id
 * @member {Real} beacon_owner_steam_id
 * @member {String} connect_string
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesChangeNumOpenSlotsResult
 * @member {Real} result
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesReservationNotification
 * @member {Real} beacon_id
 * @member {Real} joiner_steam_id
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesBeaconDetails
 * @member {Bool} ok
 * @member {Real} beacon_owner_steam_id
 * @member {Enum.SteamPartiesBeaconLocationType} location_type
 * @member {Real} location_id
 * @member {String} metadata
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingSocketsStatusChanged
 * @member {Real} conn
 * @member {Real} old_state
 * @member {Struct.SteamNetworkingSocketsConnectionInfo} info
 * @struct_end 
 */

/**
 * @enum_partial SteamApiAccountType
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
 * @enum_partial SteamApiDenyReason
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
 * @enum_partial SteamApiGameIdType
 * @member App
 * @member GameMod
 * @member Shortcut
 * @member P2p
 * @enum_end 
 */

/**
 * @enum_partial SteamApiLaunchOptionType
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
 * @enum_partial SteamApiMarketingMessageFlag
 * @member None
 * @member HighPriority
 * @member PlatformWindows
 * @member PlatformMac
 * @member PlatformLinux
 * @member PlatformRestrictions
 * @enum_end 
 */

/**
 * @enum_partial SteamApiNotificationPosition
 * @member TopLeft
 * @member TopRight
 * @member BottomLeft
 * @member BottomRight
 * @enum_end 
 */

/**
 * @enum_partial SteamApiUniverse
 * @member Invalid
 * @member Public
 * @member Beta
 * @member Internal
 * @member Dev
 * @member Max
 * @enum_end 
 */

/**
 * @enum_partial SteamApiUserHasLicenseResult
 * @member HasLicense
 * @member DoesNotHaveLicense
 * @member NoAuth
 * @enum_end 
 */

/**
 * @enum_partial SteamApiVoiceResult
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
 * @enum_partial SteamApiResult
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
 * @enum_partial SteamFriendsOverlayToStoreFlag
 * @member None
 * @member AddToCart
 * @member AddToCartAndShow
 * @enum_end 
 */

/**
 * @enum_partial SteamFriendsOverlayToWebpageMode
 * @member Default
 * @member Modal
 * @enum_end 
 */

/**
 * @enum_partial SteamFriendsChatEntryType
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
 * @enum_partial SteamFriendsFriendFlag
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
 * @enum_partial SteamFriendsPersonaState
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
 * @enum_partial SteamFriendsRelationship
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
 * @enum_partial SteamScreenshotsVrScreenshotType
 * @member None
 * @member Mono
 * @member Stereo
 * @member MonoCubemap
 * @member MonoPanorama
 * @member StereoPanorama
 * @enum_end 
 */

/**
 * @enum_partial SteamScreenshotsConst
 * @member InvalidScreenshotHandle
 * @member TagTypeMax
 * @member TagValueMax
 * @member MaxTaggedPublishedFiles
 * @member MaxTaggedUsers
 * @member ThumbWidth
 * @enum_end 
 */

/**
 * @enum_partial SteamNetworkingIdentityType
 * @member Invalid
 * @member SteamId
 * @member IpAddress
 * @member GenericString
 * @member GenericBytes
 * @enum_end 
 */

/**
 * @enum_partial SteamUserBeginAuthSessionResult
 * @member Ok
 * @member InvalidTicket
 * @member DuplicateRequest
 * @member InvalidVersion
 * @member GameMismatch
 * @member ExpiredTicket
 * @enum_end 
 */

/**
 * @enum_partial SteamUserDurationControlOnlineState
 * @member Invalid
 * @member Offline
 * @member Online
 * @member OnlineHighPri
 * @enum_end 
 */

/**
 * @enum_partial SteamUtilsApiCallFailure
 * @member None
 * @member SteamGone
 * @member NetworkFailure
 * @member InvalidHandle
 * @member MismatchedCallback
 * @enum_end 
 */

/**
 * @enum_partial SteamUtilsGamepadTextInputMode
 * @member Normal
 * @member Password
 * @enum_end 
 */

/**
 * @enum_partial SteamUtilsGamepadTextInputLineMode
 * @member SingleLine
 * @member MultipleLines
 * @enum_end 
 */

/**
 * @enum_partial SteamUtilsFloatingGamepadTextInputMode
 * @member SingleLine
 * @member MultipleLines
 * @member Email
 * @member Numeric
 * @enum_end 
 */

/**
 * @enum_partial SteamUtilsTextFilteringContext
 * @member Unknown
 * @member GameContent
 * @member Chat
 * @member Name
 * @enum_end 
 */

/**
 * @enum_partial SteamUgcMatchingUgcType
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
 * @enum_partial SteamUgcQuery
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
 * @enum_partial SteamUserUgcList
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
 * @enum_partial SteamUserUgcListSortOrder
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
 * @enum_partial SteamWorkshopFileType
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
 * @enum_partial SteamItemPreviewType
 * @member Image
 * @member YouTubeVideo
 * @member Sketchfab
 * @member EnvironmentMap_HorizontalCross
 * @member EnvironmentMap_LatLong
 * @member ReservedMax
 * @enum_end 
 */

/**
 * @enum_partial SteamRemoteStoragePublishedFileVisibility
 * @member Public
 * @member FriendsOnly
 * @member Private
 * @member Unlisted
 * @enum_end 
 */

/**
 * @enum_partial SteamUgcContentDescriptorId
 * @member NudityOrSexualContent
 * @member FrequentViolenceOrGore
 * @member AdultOnlySexualContent
 * @member GratuitousSexualContent
 * @member AnyMatureContent
 * @enum_end 
 */

/**
 * @enum_partial SteamUgcStatisticType
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
 * @enum_partial SteamLeaderboardDataRequest
 * @member Global
 * @member GlobalAroundUser
 * @member Friends
 * @enum_end 
 */

/**
 * @enum_partial SteamLeaderboardSortMethod
 * @member None
 * @member Ascending
 * @member Descending
 * @enum_end 
 */

/**
 * @enum_partial SteamLeaderboardDisplayType
 * @member None
 * @member Numeric
 * @member TimeSeconds
 * @member TimeMilliSeconds
 * @enum_end 
 */

/**
 * @enum_partial SteamLeaderboardUploadScoreMethod
 * @member None
 * @member KeepBest
 * @member ForceUpdate
 * @enum_end 
 */

/**
 * @enum_partial SteamMusicPlaybackStatus
 * @member Undefined
 * @member Playing
 * @member Paused
 * @member Idle
 * @enum_end 
 */

/**
 * @enum_partial SteamTimelineGameMode
 * @member Playing
 * @member Staging
 * @member Menus
 * @member LoadingScreen
 * @enum_end 
 */

/**
 * @enum_partial SteamTimelineEventClipPriority
 * @member None
 * @member Standard
 * @member Featured
 * @enum_end 
 */

/**
 * @enum_partial SteamInventoryConst
 * @member InvalidResult
 * @enum_end 
 */

/**
 * @enum_partial SteamRemoteStoragePlatform
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
 * @enum_partial SteamRemoteStorageUgcReadAction
 * @member ContinueReadingUntilFinished
 * @member ContinueReading
 * @member Close
 * @enum_end 
 */

/**
 * @enum_partial SteamRemoteStorageWorkshopFileType
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
 * @enum_partial SteamMatchmakingLobbyType
 * @member Private
 * @member FriendsOnly
 * @member Public
 * @member Invisible
 * @enum_end 
 */

/**
 * @enum_partial SteamMatchmakingLobbyComparison
 * @member EqualToOrLessThan
 * @member LessThan
 * @member Equal
 * @member GreaterThan
 * @member EqualToOrGreaterThan
 * @member NotEqual
 * @enum_end 
 */

/**
 * @enum_partial SteamMatchmakingLobbyDistanceFilter
 * @member Close
 * @member Default
 * @member Far
 * @member Worldwide
 * @enum_end 
 */

/**
 * @enum_partial SteamNetworkingConnectionState
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
 * @enum_partial SteamNetworkingSendFlags
 * @member Unreliable
 * @member NoNagle
 * @member NoDelay
 * @member Reliable
 * @member UseCurrentThread
 * @member AutoRestartBrokenSession
 * @enum_end 
 */

/**
 * @enum_partial SteamPartiesBeaconLocationType
 * @member Invalid
 * @member ChatGroup
 * @member Max
 * @enum_end 
 */

/**
 * @enum_partial SteamPartiesBeaconLocationData
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

