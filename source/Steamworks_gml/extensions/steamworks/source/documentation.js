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
 * @param {Id.Buffer} ticket_buffer
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
 * @param {Id.Buffer} pubRGB
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
 * @param {Id.Buffer} auth_ticket
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
 * @param {Id.Buffer} compressed
 * @param {Real} cb_compressed
 * @param {Id.Buffer} dest
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
 * @param {Id.Buffer} out_ticket
 * @param {Real} cb_max_ticket
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
 * @param {Id.Buffer} dest_compressed
 * @param {Real} cb_dest_compressed
 * @param {Bool} b_want_uncompressed
 * @param {Id.Buffer} dest_uncompressed
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
 * @param {Id.Buffer} data_to_include
 * @param {Real} cb_data_to_include
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial steam_user_get_encrypted_app_ticket
 * @param {Id.Buffer} out_ticket
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
 * @param {Id.Buffer} out_callback
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
 * @param {Id.Buffer} dest
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
 * @param {Id.Buffer} buffer
 * @param {Real} buffer_size
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_upload_leaderboard_score
 * @param {Real} leaderboard_handle
 * @param {Enum.SteamLeaderboardUploadScoreMethod} method
 * @param {Real} score
 * @param {Id.Buffer} score_details_buffer
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
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_add_promo_items
 * @param {Array[Real]} item_def_ids
 * @param {Real} num_item_defs
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
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_deserialize_result
 * @param {Id.Buffer} data
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
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_generate_items
 * @param {Array[Real]} item_defs
 * @param {Array[Real]} quantities
 * @param {Real} count
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
 * @function_partial steam_inventory_get_item_definition_ids
 * @param {Real} c_max_item_defs
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_items_by_id
 * @param {Array[Real]} item_instance_ids
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_serialize_result
 * @param {Real} result_handle
 * @param {Id.Buffer} out_data
 * @param {Real} out_capacity
 * @returns {Struct.SteamInventorySerializeResult} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_result_item_properties_num
 * @param {Real} result_handle
 * @returns {Real} 
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
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_transfer_item_quantity
 * @param {Real} item_instance_id_source
 * @param {Real} quantity
 * @param {Real} item_instance_id_dest
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_trigger_item_drop
 * @param {Real} item_def_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_grant_promo_items
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
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_item_price
 * @param {Real} item_def_id
 * @returns {Struct.SteamInventoryItemPrice} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_current_prices_only
 * @param {Real} max_items
 * @returns {Array[Real]} 
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
 * @function_partial steam_inventory_set_callback_start_purchase_result
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_inventory_clear_callback_start_purchase_result
 * @function_end 
 */

/**
 * @function_partial steam_inventory_set_callback_request_prices_result
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_inventory_clear_callback_request_prices_result
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
 * @param {Id.Buffer} data
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_file_read
 * @param {String} file_name
 * @param {Id.Buffer} out_data
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
 * @param {Id.Buffer} data
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
 * @param {Id.Buffer} out_data
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
 * @param {Id.Buffer} key_out
 * @param {Real} key_max
 * @param {Id.Buffer} val_out
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
 * @param {Id.Buffer} msg
 * @param {Real} bytes
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_get_lobby_chat_entry
 * @param {Real} lobby_id
 * @param {Real} chat_id
 * @param {Id.Buffer} out_buffer
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
 * @param {Id.Buffer} data
 * @param {Real} bytes
 * @param {Real} send_flags
 * @param {Real} remote_channel
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_messages_receive_one_on_channel
 * @param {Real} local_channel
 * @param {Id.Buffer} out_data
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
 * @param {Id.Buffer} data
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
 * @param {Id.Buffer} out_data
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
 * @param {Id.Buffer} out_data
 * @param {Real} max_bytes
 * @param {Real} offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
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
 * @member {Bool} is_valid_external
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
 * @struct_partial SteamNetworkingSocketsStatusChanged
 * @member {Real} conn
 * @member {Real} old_state
 * @member {Struct.SteamNetworkingSocketsConnectionInfo} info
 * @struct_end 
 */

/**
 * @const_partial SteamApiAccountType
 * @member {Real} Invalid
 * @member {Real} Individual
 * @member {Real} Multiseat
 * @member {Real} GameServer
 * @member {Real} AnonGameServer
 * @member {Real} Pending
 * @member {Real} ContentServer
 * @member {Real} Clan
 * @member {Real} Chat
 * @member {Real} ConsoleUser
 * @member {Real} AnonUser
 * @const_end 
 */

/**
 * @const_partial SteamApiDenyReason
 * @member {Real} Invalid
 * @member {Real} InvalidVersion
 * @member {Real} Generic
 * @member {Real} NotLoggedOn
 * @member {Real} NoLicense
 * @member {Real} Cheater
 * @member {Real} LoggedInElsewhere
 * @member {Real} UnknownText
 * @member {Real} IncompatibleAnticheat
 * @member {Real} MemoryCorruption
 * @member {Real} IncompatibleSoftware
 * @member {Real} SteamConnectionLost
 * @member {Real} SteamConnectionError
 * @member {Real} SteamResponseTimedOut
 * @member {Real} SteamValidationStalled
 * @member {Real} SteamOwnerLeftGuestUser
 * @const_end 
 */

/**
 * @const_partial SteamApiGameIdType
 * @member {Real} App
 * @member {Real} GameMod
 * @member {Real} Shortcut
 * @member {Real} P2p
 * @const_end 
 */

/**
 * @const_partial SteamApiLaunchOptionType
 * @member {Real} None
 * @member {Real} Default
 * @member {Real} SafeMode
 * @member {Real} Multiplayer
 * @member {Real} Config
 * @member {Real} Openvr
 * @member {Real} Server
 * @member {Real} Editor
 * @member {Real} Manual
 * @member {Real} Benchmark
 * @member {Real} Option1
 * @member {Real} Option2
 * @member {Real} Option3
 * @member {Real} OculusVr
 * @member {Real} OpenvrOverlay
 * @member {Real} Osvr
 * @member {Real} Dialog
 * @const_end 
 */

/**
 * @const_partial SteamApiMarketingMessageFlag
 * @member {Real} None
 * @member {Real} HighPriority
 * @member {Real} PlatformWindows
 * @member {Real} PlatformMac
 * @member {Real} PlatformLinux
 * @member {Real} PlatformRestrictions
 * @const_end 
 */

/**
 * @const_partial SteamApiNotificationPosition
 * @member {Real} TopLeft
 * @member {Real} TopRight
 * @member {Real} BottomLeft
 * @member {Real} BottomRight
 * @const_end 
 */

/**
 * @const_partial SteamApiUniverse
 * @member {Real} Invalid
 * @member {Real} Public
 * @member {Real} Beta
 * @member {Real} Internal
 * @member {Real} Dev
 * @member {Real} Max
 * @const_end 
 */

/**
 * @const_partial SteamApiUserHasLicenseResult
 * @member {Real} HasLicense
 * @member {Real} DoesNotHaveLicense
 * @member {Real} NoAuth
 * @const_end 
 */

/**
 * @const_partial SteamApiVoiceResult
 * @member {Real} Ok
 * @member {Real} NotInitialized
 * @member {Real} NotRecording
 * @member {Real} NoData
 * @member {Real} BufferTooSmall
 * @member {Real} DataCorrupted
 * @member {Real} Restricted
 * @member {Real} UnsupportedCodec
 * @member {Real} ReceiverOutOfDate
 * @member {Real} ReceiverDidNotAnswer
 * @const_end 
 */

/**
 * @const_partial SteamApiResult
 * @member {Real} Ok
 * @member {Real} Fail
 * @member {Real} NoConnection
 * @member {Real} InvalidPassword
 * @member {Real} LoggedInElsewhere
 * @member {Real} InvalidProtocolVer
 * @member {Real} InvalidParam
 * @member {Real} FileNotFound
 * @member {Real} Busy
 * @member {Real} InvalidState
 * @member {Real} InvalidName
 * @member {Real} InvalidEmail
 * @member {Real} DuplicateName
 * @member {Real} AccessDenied
 * @member {Real} Timeout
 * @member {Real} Banned
 * @member {Real} AccountNotFound
 * @member {Real} InvalidSteamId
 * @member {Real} ServiceUnavailable
 * @member {Real} NotLoggedOn
 * @member {Real} Pending
 * @member {Real} EncryptionFailure
 * @member {Real} InsufficientPrivilege
 * @member {Real} LimitExceeded
 * @member {Real} Revoked
 * @member {Real} Expired
 * @member {Real} AlreadyRedeemed
 * @member {Real} DuplicateRequest
 * @member {Real} AlreadyOwned
 * @member {Real} IpNotFound
 * @member {Real} PersistFailed
 * @member {Real} LockingFailed
 * @member {Real} LogonSessionReplaced
 * @member {Real} ConnectFailed
 * @member {Real} HandshakeFailed
 * @member {Real} IoFailure
 * @member {Real} RemoteDisconnect
 * @member {Real} ShoppingCartNotFound
 * @member {Real} Blocked
 * @member {Real} Ignored
 * @member {Real} NoMatch
 * @member {Real} AccountDisabled
 * @member {Real} ServiceReadOnly
 * @const_end 
 */

/**
 * @const_partial SteamFriendsOverlayToStoreFlag
 * @member {Real} None
 * @member {Real} AddToCart
 * @member {Real} AddToCartAndShow
 * @const_end 
 */

/**
 * @const_partial SteamFriendsOverlayToWebpageMode
 * @member {Real} Default
 * @member {Real} Modal
 * @const_end 
 */

/**
 * @const_partial SteamFriendsChatEntryType
 * @member {Real} Invalid
 * @member {Real} ChatMsg
 * @member {Real} Typing
 * @member {Real} InviteGame
 * @member {Real} Emote
 * @member {Real} LeftConversation
 * @member {Real} Entered
 * @member {Real} WasKicked
 * @member {Real} WasBanned
 * @member {Real} Disconnected
 * @member {Real} HistoricalChat
 * @member {Real} LinkBlocked
 * @const_end 
 */

/**
 * @const_partial SteamFriendsFriendFlag
 * @member {Real} None
 * @member {Real} Blocked
 * @member {Real} FriendshipRequested
 * @member {Real} Immediate
 * @member {Real} ClanMember
 * @member {Real} OnGameServer
 * @member {Real} RequestingFriendship
 * @member {Real} RequestingInfo
 * @member {Real} Ignored
 * @member {Real} IgnoredFriend
 * @member {Real} ChatMember
 * @member {Real} All
 * @const_end 
 */

/**
 * @const_partial SteamFriendsPersonaState
 * @member {Real} Offline
 * @member {Real} Online
 * @member {Real} Busy
 * @member {Real} Away
 * @member {Real} Snooze
 * @member {Real} LookingToTrade
 * @member {Real} LookingToPlay
 * @const_end 
 */

/**
 * @const_partial SteamFriendsRelationship
 * @member {Real} None
 * @member {Real} Blocked
 * @member {Real} RequestRecipient
 * @member {Real} Friend
 * @member {Real} RequestInitiator
 * @member {Real} Ignored
 * @member {Real} IgnoredFriend
 * @member {Real} SuggestedFriend
 * @const_end 
 */

/**
 * @const_partial SteamScreenshotsVrScreenshotType
 * @member {Real} None
 * @member {Real} Mono
 * @member {Real} Stereo
 * @member {Real} MonoCubemap
 * @member {Real} MonoPanorama
 * @member {Real} StereoPanorama
 * @const_end 
 */

/**
 * @const_partial SteamScreenshotsConst
 * @member {Real} InvalidScreenshotHandle
 * @member {Real} TagTypeMax
 * @member {Real} TagValueMax
 * @member {Real} MaxTaggedPublishedFiles
 * @member {Real} MaxTaggedUsers
 * @member {Real} ThumbWidth
 * @const_end 
 */

/**
 * @const_partial SteamUserBeginAuthSessionResult
 * @member {Real} Ok
 * @member {Real} InvalidTicket
 * @member {Real} DuplicateRequest
 * @member {Real} InvalidVersion
 * @member {Real} GameMismatch
 * @member {Real} ExpiredTicket
 * @const_end 
 */

/**
 * @const_partial SteamUserDurationControlOnlineState
 * @member {Real} Invalid
 * @member {Real} Offline
 * @member {Real} Online
 * @member {Real} OnlineHighPri
 * @const_end 
 */

/**
 * @const_partial SteamUtilsApiCallFailure
 * @member {Real} None
 * @member {Real} SteamGone
 * @member {Real} NetworkFailure
 * @member {Real} InvalidHandle
 * @member {Real} MismatchedCallback
 * @const_end 
 */

/**
 * @const_partial SteamUtilsGamepadTextInputMode
 * @member {Real} Normal
 * @member {Real} Password
 * @const_end 
 */

/**
 * @const_partial SteamUtilsGamepadTextInputLineMode
 * @member {Real} SingleLine
 * @member {Real} MultipleLines
 * @const_end 
 */

/**
 * @const_partial SteamUtilsFloatingGamepadTextInputMode
 * @member {Real} SingleLine
 * @member {Real} MultipleLines
 * @member {Real} Email
 * @member {Real} Numeric
 * @const_end 
 */

/**
 * @const_partial SteamUtilsTextFilteringContext
 * @member {Real} Unknown
 * @member {Real} GameContent
 * @member {Real} Chat
 * @member {Real} Name
 * @const_end 
 */

/**
 * @const_partial SteamUgcMatchingUgcType
 * @member {Real} Items
 * @member {Real} Items_Mtx
 * @member {Real} Items_ReadyToUse
 * @member {Real} Collections
 * @member {Real} Artwork
 * @member {Real} Videos
 * @member {Real} Screenshots
 * @member {Real} AllGuides
 * @member {Real} WebGuides
 * @member {Real} IntegratedGuides
 * @member {Real} UsableInGame
 * @member {Real} ControllerBindings
 * @member {Real} GameManagedItems
 * @member {Real} All
 * @const_end 
 */

/**
 * @const_partial SteamUgcQuery
 * @member {Real} RankedByVote
 * @member {Real} RankedByPublicationDate
 * @member {Real} AcceptedForGameRankedByAcceptanceDate
 * @member {Real} RankedByTrend
 * @member {Real} FavoritedByFriendsRankedByPublicationDate
 * @member {Real} CreatedByFriendsRankedByPublicationDate
 * @member {Real} RankedByNumTimesReported
 * @member {Real} CreatedByFollowedUsersRankedByPublicationDate
 * @member {Real} NotYetRated
 * @member {Real} RankedByTotalVotesAsc
 * @member {Real} RankedByVotesUp
 * @member {Real} RankedByTextSearch
 * @member {Real} RankedByTotalUniqueSubscriptions
 * @member {Real} RankedByPlaytimeTrend
 * @member {Real} RankedByTotalPlaytime
 * @member {Real} RankedByAveragePlaytimeTrend
 * @member {Real} RankedByLifetimeAveragePlaytime
 * @member {Real} RankedByPlaytimeSessionsTrend
 * @member {Real} RankedByLifetimePlaytimeSessions
 * @member {Real} RankedByLastUpdatedDate
 * @const_end 
 */

/**
 * @const_partial SteamUserUgcList
 * @member {Real} Published
 * @member {Real} VotedOn
 * @member {Real} VotedUp
 * @member {Real} VotedDown
 * @member {Real} WillVoteLater
 * @member {Real} Favorited
 * @member {Real} Subscribed
 * @member {Real} UsedOrPlayed
 * @member {Real} Followed
 * @const_end 
 */

/**
 * @const_partial SteamUserUgcListSortOrder
 * @member {Real} CreationOrderDesc
 * @member {Real} CreationOrderAsc
 * @member {Real} TitleAsc
 * @member {Real} LastUpdatedDesc
 * @member {Real} SubscriptionDateDesc
 * @member {Real} VoteScoreDesc
 * @member {Real} ForModeration
 * @const_end 
 */

/**
 * @const_partial SteamWorkshopFileType
 * @member {Real} Community
 * @member {Real} Microtransaction
 * @member {Real} Collection
 * @member {Real} Art
 * @member {Real} Video
 * @member {Real} Screenshot
 * @member {Real} Game
 * @member {Real} Software
 * @member {Real} Concept
 * @member {Real} WebGuide
 * @member {Real} IntegratedGuide
 * @member {Real} Merch
 * @member {Real} ControllerBinding
 * @member {Real} SteamworksAccessInvite
 * @member {Real} SteamVideo
 * @member {Real} GameManagedItem
 * @const_end 
 */

/**
 * @const_partial SteamItemPreviewType
 * @member {Real} Image
 * @member {Real} YouTubeVideo
 * @member {Real} Sketchfab
 * @member {Real} EnvironmentMap_HorizontalCross
 * @member {Real} EnvironmentMap_LatLong
 * @member {Real} ReservedMax
 * @const_end 
 */

/**
 * @const_partial SteamRemoteStoragePublishedFileVisibility
 * @member {Real} Public
 * @member {Real} FriendsOnly
 * @member {Real} Private
 * @member {Real} Unlisted
 * @const_end 
 */

/**
 * @const_partial SteamUgcContentDescriptorId
 * @member {Real} NudityOrSexualContent
 * @member {Real} FrequentViolenceOrGore
 * @member {Real} AdultOnlySexualContent
 * @member {Real} GratuitousSexualContent
 * @member {Real} AnyMatureContent
 * @const_end 
 */

/**
 * @const_partial SteamUgcStatisticType
 * @member {Real} NumSubscriptions
 * @member {Real} NumFavorites
 * @member {Real} NumFollowers
 * @member {Real} NumUniqueSubscriptions
 * @member {Real} NumUniqueFavorites
 * @member {Real} NumUniqueFollowers
 * @member {Real} NumUniqueWebsiteViews
 * @member {Real} ReportScore
 * @member {Real} NumSecondsPlayed
 * @member {Real} NumPlaytimeSessions
 * @member {Real} NumComments
 * @member {Real} NumSecondsPlayedDuringTimePeriod
 * @const_end 
 */

/**
 * @const_partial SteamLeaderboardDataRequest
 * @member {Real} Global
 * @member {Real} GlobalAroundUser
 * @member {Real} Friends
 * @const_end 
 */

/**
 * @const_partial SteamLeaderboardSortMethod
 * @member {Real} None
 * @member {Real} Ascending
 * @member {Real} Descending
 * @const_end 
 */

/**
 * @const_partial SteamLeaderboardDisplayType
 * @member {Real} None
 * @member {Real} Numeric
 * @member {Real} TimeSeconds
 * @member {Real} TimeMilliSeconds
 * @const_end 
 */

/**
 * @const_partial SteamLeaderboardUploadScoreMethod
 * @member {Real} None
 * @member {Real} KeepBest
 * @member {Real} ForceUpdate
 * @const_end 
 */

/**
 * @const_partial SteamMusicPlaybackStatus
 * @member {Real} Undefined
 * @member {Real} Playing
 * @member {Real} Paused
 * @member {Real} Idle
 * @const_end 
 */

/**
 * @const_partial SteamTimelineGameMode
 * @member {Real} Playing
 * @member {Real} Staging
 * @member {Real} Menus
 * @member {Real} LoadingScreen
 * @const_end 
 */

/**
 * @const_partial SteamTimelineEventClipPriority
 * @member {Real} None
 * @member {Real} Standard
 * @member {Real} Featured
 * @const_end 
 */

/**
 * @const_partial SteamInventoryConst
 * @member {Real} InvalidResult
 * @const_end 
 */

/**
 * @const_partial SteamRemoteStoragePlatform
 * @member {Real} None
 * @member {Real} Windows
 * @member {Real} OSX
 * @member {Real} PS3
 * @member {Real} Linux
 * @member {Real} Reserved2
 * @member {Real} All
 * @const_end 
 */

/**
 * @const_partial SteamRemoteStorageUgcReadAction
 * @member {Real} ContinueReadingUntilFinished
 * @member {Real} ContinueReading
 * @member {Real} Close
 * @const_end 
 */

/**
 * @const_partial SteamRemoteStorageWorkshopFileType
 * @member {Real} Community
 * @member {Real} Microtransaction
 * @member {Real} Collection
 * @member {Real} Art
 * @member {Real} Video
 * @member {Real} Screenshot
 * @member {Real} Game
 * @member {Real} Software
 * @member {Real} Concept
 * @member {Real} WebGuide
 * @member {Real} IntegratedGuide
 * @member {Real} Merch
 * @member {Real} ControllerBinding
 * @member {Real} SteamworksAccessInvite
 * @member {Real} SteamVideo
 * @member {Real} GameManagedItem
 * @const_end 
 */

/**
 * @const_partial SteamMatchmakingLobbyType
 * @member {Real} Private
 * @member {Real} FriendsOnly
 * @member {Real} Public
 * @member {Real} Invisible
 * @const_end 
 */

/**
 * @const_partial SteamMatchmakingLobbyComparison
 * @member {Real} EqualToOrLessThan
 * @member {Real} LessThan
 * @member {Real} Equal
 * @member {Real} GreaterThan
 * @member {Real} EqualToOrGreaterThan
 * @member {Real} NotEqual
 * @const_end 
 */

/**
 * @const_partial SteamMatchmakingLobbyDistanceFilter
 * @member {Real} Close
 * @member {Real} Default
 * @member {Real} Far
 * @member {Real} Worldwide
 * @const_end 
 */

/**
 * @const_partial SteamNetworkingConnectionState
 * @member {Real} None
 * @member {Real} Connecting
 * @member {Real} FindingRoute
 * @member {Real} Connected
 * @member {Real} ClosedByPeer
 * @member {Real} ProblemDetectedLocally
 * @member {Real} FinWait
 * @member {Real} Linger
 * @member {Real} Dead
 * @const_end 
 */

/**
 * @const_partial SteamNetworkingSendFlags
 * @member {Real} Unreliable
 * @member {Real} NoNagle
 * @member {Real} NoDelay
 * @member {Real} Reliable
 * @member {Real} UseCurrentThread
 * @member {Real} AutoRestartBrokenSession
 * @const_end 
 */

