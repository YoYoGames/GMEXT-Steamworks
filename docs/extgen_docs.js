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
 * @param {Real} own_app_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_api_release_current_thread_memory
 * @function_end 
 */

/**
 * @function_partial steam_api_restart_app_if_necessary
 * @param {Real} own_app_id
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
 * @param {String} dialog
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_invite_dialog
 * @param {Real} steam_id_lobby
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_to_store
 * @param {Real} app_id
 * @param {Enum.SteamFriendsOverlayToStoreFlag} flag
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_to_user
 * @param {String} dialog
 * @param {Real} steam_id
 * @function_end 
 */

/**
 * @function_partial steam_friends_activate_game_overlay_to_web_page
 * @param {String} url
 * @param {Enum.SteamFriendsOverlayToWebpageMode} mode
 * @function_end 
 */

/**
 * @function_partial steam_friends_clear_rich_presence
 * @function_end 
 */

/**
 * @function_partial steam_friends_close_clan_chat_window_in_steam
 * @param {Real} steam_id_clan_chat
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_download_clan_activity_counts
 * @param {Array[Real]} steam_id_clans
 * @param {Function} callback
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_enumerate_following_list
 * @param {Real} start_index
 * @param {Function} callback
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
 * @param {Real} steam_id_clan
 * @param {Real} user
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_activity_counts
 * @param {Real} steam_id_clan
 * @returns {Struct.SteamFriendsClanActivityCounts} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_by_index
 * @param {Real} clan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_chat_member_count
 * @param {Real} steam_id_clan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_chat_message
 * @param {Real} steam_id_clan_chat
 * @param {Real} message
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
 * @param {Real} steam_id_clan
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_officer_by_index
 * @param {Real} steam_id_clan
 * @param {Real} officer
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_officer_count
 * @param {Real} steam_id_clan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_owner
 * @param {Real} steam_id_clan
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_clan_tag
 * @param {Real} steam_id_clan
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_coplay_friend
 * @param {Real} coplay_friend
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
 * @param {Real} steam_id
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_by_index
 * @param {Real} friend_index
 * @param {Real} friend_flags
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_coplay_game
 * @param {Real} steam_id_friend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_coplay_time
 * @param {Real} steam_id_friend
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_count
 * @param {Real} friend_flags
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_count_from_source
 * @param {Real} steam_id_source
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_from_source_by_index
 * @param {Real} steam_id_source
 * @param {Real} friend_index
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_game_played
 * @param {Real} steam_id_friend
 * @returns {Struct.SteamFriendsFriendGamePlayed} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_message
 * @param {Real} steam_id_friend
 * @param {Real} message_id
 * @returns {Struct.SteamFriendsFriendMessage} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_persona_name
 * @param {Real} steam_id_friend
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_persona_name_history
 * @param {Real} steam_id_friend
 * @param {Real} persona_name
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_persona_state
 * @param {Real} steam_id_friend
 * @returns {Enum.SteamFriendsPersonaState} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_relationship
 * @param {Real} steam_id_friend
 * @returns {Enum.SteamFriendsRelationship} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_rich_presence
 * @param {Real} steam_id_friend
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_rich_presence_key_by_index
 * @param {Real} steam_id_friend
 * @param {Real} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friend_rich_presence_key_count
 * @param {Real} steam_id_friend
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
 * @param {Real} fg
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friends_group_name
 * @param {Real} friends_group_id
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
 * @param {Real} friends_group_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_get_friends_group_members_list
 * @param {Real} friends_group_id
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
 * @param {Real} steam_id_player
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
 * @param {Real} steam_id_friend
 * @param {Real} friend_flags
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_invite_user_to_game
 * @param {Real} steam_id_friend
 * @param {String} connect_string
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_chat_admin
 * @param {Real} steam_id_clan_chat
 * @param {Real} steam_id_user
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_public
 * @param {Real} steam_id_clan
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_official_game_group
 * @param {Real} steam_id_clan
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_clan_chat_window_open_in_steam
 * @param {Real} steam_id_clan_chat
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_following
 * @param {Real} steam_id
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_is_user_in_source
 * @param {Real} steam_id_user
 * @param {Real} steam_id_source
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_request_clan_officer_list
 * @param {Real} steam_id_clan
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_friends_request_friend_rich_presence
 * @param {Real} steam_id_friend
 * @function_end 
 */

/**
 * @function_partial steam_friends_request_user_information
 * @param {Real} steam_id_user
 * @param {Bool} require_name_only
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_in_game_voice_speaking
 * @param {Real} steam_id_user
 * @param {Bool} speaking
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_played_with
 * @param {Real} steam_id_user_played_with
 * @function_end 
 */

/**
 * @function_partial steam_friends_set_rich_presence
 * @param {String} key
 * @param {String} value
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
 * @param {Real} dlc
 * @returns {Struct.SteamAppsDlcData} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_is_app_installed
 * @param {Real} app_id
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
 * @param {Real} app_id
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
 * @param {Real} app_id
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
 * @returns {Struct.SteamAppsIsTimedTrialResult} 
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
 * @param {Real} app_id
 * @returns {String} 
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
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_num_betas
 * @returns {Struct.SteamAppsNumBetas} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_beta_info
 * @param {Real} beta_index
 * @returns {Struct.SteamAppsBetaInfo} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_set_active_beta
 * @param {String} beta_name
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
 * @param {Real} app_id
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
 * @param {Real} app_id
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_file_details
 * @param {String} file_name
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_installed_depots
 * @param {Real} app_id
 * @param {Real} max_depots
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_launch_command_line
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_get_launch_query_param
 * @param {String} key
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_install_dlc
 * @param {Real} app_id
 * @function_end 
 */

/**
 * @function_partial steam_apps_mark_content_corrupt
 * @param {Bool} missing_files_only
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_apps_request_all_proof_of_purchase_keys
 * @function_end 
 */

/**
 * @function_partial steam_apps_request_app_proof_of_purchase_key
 * @param {Real} app_id
 * @function_end 
 */

/**
 * @function_partial steam_apps_uninstall_dlc
 * @param {Real} app_id
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
 * @param {String} filename
 * @param {String} thumbnail_filename
 * @param {Real} width
 * @param {Real} height
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_add_vr_screenshot_to_library
 * @param {Enum.SteamScreenshotsVrScreenshotType} type
 * @param {String} filename
 * @param {String} vr_filename
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_hook_screenshots
 * @param {Bool} hook
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_is_screenshots_hooked
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_set_location
 * @param {Real} screenshot
 * @param {String} location
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_tag_published_file
 * @param {Real} screenshot
 * @param {Real} published_file_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_tag_user
 * @param {Real} screenshot
 * @param {Real} steam_id
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_trigger_screenshot
 * @function_end 
 */

/**
 * @function_partial steam_screenshots_write_screenshot
 * @param {Buffer} buff_rgb
 * @param {Real} rgb_size
 * @param {Real} width
 * @param {Real} height
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
 * @param {Real} server_ip
 * @param {Real} server_port
 * @function_end 
 */

/**
 * @function_partial steam_user_begin_auth_session
 * @param {Buffer} auth_ticket
 * @param {Real} auth_ticket_size
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
 * @param {Real} auth_ticket_handle
 * @function_end 
 */

/**
 * @function_partial steam_user_decompress_voice
 * @param {Buffer} compressed
 * @param {Real} compressed_size
 * @param {Buffer} dest
 * @param {Real} dest_buffer_size
 * @param {Real} desired_sample_rate
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
 * @param {Real} max_ticket_size
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
 * @param {Bool} want_compressed
 * @param {Buffer} dest_compressed
 * @param {Real} dest_compressed_size
 * @param {Bool} want_uncompressed
 * @param {Buffer} dest_uncompressed
 * @param {Real} dest_uncompressed_size
 * @param {Real} desired_sample_rate
 * @returns {Struct.SteamUserGetVoiceResult} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_user_data_folder
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_user_request_encrypted_app_ticket
 * @param {Buffer} data_to_include
 * @param {Real} data_to_include_size
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_get_encrypted_app_ticket
 * @param {Buffer} out_ticket
 * @param {Real} max_ticket_size
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_game_badge_level
 * @param {Real} series
 * @param {Bool} foil
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_auth_ticket_for_web_api
 * @param {String} identity
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_user_get_duration_control
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_request_store_auth_url
 * @param {String} redirect_url
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_get_market_eligibility
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_track_app_usage_event
 * @param {Real} game_id
 * @param {Real} app_usage_event
 * @param {String} extra_info
 * @function_end 
 */

/**
 * @function_partial steam_user_user_has_license_for_app
 * @param {Real} steam_id
 * @param {Real} app_id
 * @returns {Enum.SteamApiUserHasLicenseForAppResult} 
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
 * @function_partial steam_user_set_callback_get_auth_session_ticket_response
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_user_clear_callback_get_auth_session_ticket_response
 * @function_end 
 */

/**
 * @function_partial steam_utils_overlay_needs_present
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_check_file_signature
 * @param {String} file_name
 * @param {Function} callback
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
 * @returns {Bool} 
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
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_entered_gamepad_text_length
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_image_rgba
 * @param {Real} image_handle
 * @param {Buffer} dest
 * @param {Real} dest_buffer_size
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_utils_get_image_size
 * @param {Real} image_handle
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
 * @returns {Bool} 
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
 * @param {Real} horizontal_inset
 * @param {Real} vertical_inset
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_overlay_notification_position
 * @param {Enum.SteamApiNotificationPosition} notification_position
 * @function_end 
 */

/**
 * @function_partial steam_utils_set_vr_headset_streaming_enabled
 * @param {Bool} enabled
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
 * @param {Bool} launcher_mode
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_add_dependency
 * @param {Real} parent_published_file_id
 * @param {Real} child_published_file_id
 * @param {Function} callback
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
 * @param {Enum.SteamUgcItemPreviewType} preview_type
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
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @returns {Enum.SteamUgcItemState} 
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
 * @param {Real} max_entries
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
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_metadata
 * @param {Real} query_handle
 * @param {Real} index
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_query_ugc_children
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} max_entries
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
 * @function_partial steam_ugc_get_supported_game_version_data
 * @param {Real} query_handle
 * @param {Real} index
 * @param {Real} version_index
 * @returns {Struct.SteamUgcSupportedGameVersionData} 
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
 * @returns {Array[Enum.SteamUgcContentDescriptorId]} 
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_app_dependency
 * @param {Real} published_file_id
 * @param {Real} app_id
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_dependency
 * @param {Real} parent_published_file_id
 * @param {Real} child_published_file_id
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_remove_item_from_favorites
 * @param {Real} app_id
 * @param {Real} published_file_id
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_send_query_ugc_request
 * @param {Real} query_handle
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_get_user_item_vote
 * @param {Real} published_file_id
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_stop_playtime_tracking
 * @param {Array[Real]} published_file_ids
 * @param {Real} num_published_file_ids
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_stop_playtime_tracking_for_all_items
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_submit_item_update
 * @param {Real} update_handle
 * @param {String} change_note
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_ugc_subscribe_item
 * @param {Real} published_file_id
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @param {String} action_set_name
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
 * @param {String} action_name
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
 * @param {Enum.SteamInputActionOrigin} origin
 * @param {Enum.SteamInputGlyphSize} size
 * @param {Real} flags
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_input_get_glyph_svg_for_action_origin
 * @param {Enum.SteamInputActionOrigin} origin
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
 * @param {Real} index
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
 * @param {String} action_name
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
 * @returns {Enum.SteamInputType} 
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
 * @param {Enum.SteamInputActionOrigin} origin
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
 * @function_partial steam_input_set_dualsense_trigger_effect
 * @param {Real} input_handle
 * @param {Array[Real]} param
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial steam_input_set_led_color
 * @param {Real} input_handle
 * @param {Real} color_r
 * @param {Real} color_g
 * @param {Real} color_b
 * @param {Real} flags
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
 * @param {Real} left_speed
 * @param {Real} right_speed
 * @function_end 
 */

/**
 * @function_partial steam_input_trigger_vibration_extended
 * @param {Real} input_handle
 * @param {Real} left_speed
 * @param {Real} right_speed
 * @param {Real} left_trigger_speed
 * @param {Real} right_trigger_speed
 * @function_end 
 */

/**
 * @function_partial steam_input_get_action_origin_from_xbox_origin
 * @param {Real} input_handle
 * @param {Enum.SteamXboxOrigin} origin
 * @returns {Enum.SteamInputActionOrigin} 
 * @function_end 
 */

/**
 * @function_partial steam_input_translate_action_origin
 * @param {Enum.SteamInputType} destination_input_type
 * @param {Enum.SteamInputActionOrigin} source_origin
 * @returns {Enum.SteamInputActionOrigin} 
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
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_get_stat_float
 * @param {String} stat_name
 * @returns {Real} 
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
 * @returns {Bool} 
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_user_stat_int
 * @param {Real} steam_id_user
 * @param {String} stat_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_user_stat_float
 * @param {Real} steam_id_user
 * @param {String} stat_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_user_achievement
 * @param {Real} steam_id_user
 * @param {String} achievement_name
 * @returns {Bool} 
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_find_leaderboard
 * @param {String} leaderboard_name
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_download_leaderboard_entries_for_users
 * @param {Real} leaderboard_handle
 * @param {Array[Real]} users
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_downloaded_leaderboard_entry
 * @param {Real} leaderboard_entries_handle
 * @param {Real} entry_index
 * @param {Real} max_details
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_upload_leaderboard_score
 * @param {Real} leaderboard_handle
 * @param {Enum.SteamLeaderboardUploadScoreMethod} method
 * @param {Real} score
 * @param {Array[Real]} score_details
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_attach_leaderboard_ugc
 * @param {Real} leaderboard_handle
 * @param {Real} ugc_handle
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_number_of_current_players
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_request_global_achievement_percentages
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_int64
 * @param {String} stat_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_double
 * @param {String} stat_name
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_history_int64
 * @param {String} stat_name
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_global_stat_history_double
 * @param {String} stat_name
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_progress_int
 * @param {String} achievement_name
 * @param {Real} cur_progress
 * @param {Real} max_progress
 * @returns {Struct.SteamUserStatsIntMinMax} 
 * @function_end 
 */

/**
 * @function_partial steam_userstats_achievement_progress_float
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
 * @param {Function} callback
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_add_promo_items
 * @param {Array[Real]} item_def_ids
 * @param {Real} num_item_defs
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @param {Array[Struct.SteamInventoryItemDefQuantity]} generate_items
 * @param {Array[Struct.SteamInventoryItemInstanceQuantity]} destroy_items
 * @param {Function} callback
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_generate_items
 * @param {Array[Struct.SteamInventoryItemDefQuantity]} items
 * @param {Function} callback
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
 * @param {Real} max_item_defs
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
 * @param {Real} max_item_defs
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_items_by_id
 * @param {Array[Real]} item_instance_ids
 * @param {Function} callback
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_serialize_result
 * @param {Real} result_handle
 * @param {Buffer} out_data
 * @param {Real} out_capacity
 * @returns {Real} 
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
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_start_purchase
 * @param {Array[Struct.SteamInventoryItemDefQuantity]} items
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_inventory_request_prices
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_num_items_with_prices
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_items_with_prices
 * @returns {Array[Struct.SteamInventoryItemWithPrice]} 
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
 * @param {Function} callback
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_transfer_item_quantity
 * @param {Real} item_instance_id_source
 * @param {Real} quantity
 * @param {Real} item_instance_id_dest
 * @param {Function} callback
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_trigger_item_drop
 * @param {Real} item_def_id
 * @param {Function} callback
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_grant_promo_items
 * @param {Function} callback
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial steam_inventory_get_item_definition_property
 * @param {Real} item_def_id
 * @param {String} property_name
 * @returns {String} 
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
 * @function_partial steam_remote_storage_file_write_async
 * @param {String} file_name
 * @param {Buffer} data
 * @param {Real} bytes
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_ugc_download
 * @param {Real} ugc_handle
 * @param {Real} priority
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_ugc_download_to_location
 * @param {Real} ugc_handle
 * @param {String} location
 * @param {Real} priority
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_subscribe_published_file
 * @param {Real} published_file_id
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_remote_storage_unsubscribe_published_file
 * @param {Real} published_file_id
 * @param {Function} callback
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
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_join_lobby
 * @param {Real} lobby_id
 * @param {Function} callback
 * @function_end 
 */

/**
 * @function_partial steam_matchmaking_request_lobby_list
 * @param {Function} callback
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
 * @function_partial steam_matchmaking_set_lobby_type
 * @param {Real} steam_id_lobby
 * @param {Enum.SteamMatchmakingLobbyType} lobby_type
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
 * @function_partial steam_networking_messages_receive_messages_on_channel
 * @param {Real} local_channel
 * @param {Real} max_messages
 * @returns {Array[Struct.SteamNetworkingMessagesMessage]} 
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
 * @returns {Enum.SteamApiResult} 
 * @function_end 
 */

/**
 * @function_partial steam_networking_sockets_receive_messages_on_connection
 * @param {Real} conn
 * @param {Real} max_messages
 * @returns {Array[Struct.SteamNetworkingSocketsMessage]} 
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
 * @param {Real} max_messages
 * @returns {Array[Struct.SteamNetworkingSocketsMessage]} 
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
 * @returns {Real} 
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
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @param {Function} callback
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
 * @member {Enum.SteamApiResult} result
 * @member {Real} steam_id
 * @member {Real} count
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsIsFollowingResult
 * @member {Enum.SteamApiResult} result
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
 * @member {Bool} success
 * @member {Real} clan_id
 * @member {Real} officers
 * @struct_end 
 */

/**
 * @struct_partial SteamFriendsDownloadClanActivityCountsResult
 * @member {Bool} result
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
 * @member {Enum.SteamApiResult} result
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
 * @struct_partial SteamAppsIsTimedTrialResult
 * @member {Real} seconds_allowed
 * @member {Real} seconds_played
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
 * @struct_partial SteamAppsInstallSize
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
 * @member {String} url
 * @struct_end 
 */

/**
 * @struct_partial SteamUserEncryptedAppTicketResponse
 * @member {Enum.SteamApiResult} result
 * @struct_end 
 */

/**
 * @struct_partial SteamUserDurationControl
 * @member {Real} result
 * @member {Real} app_id
 * @member {Bool} applicable
 * @member {Real} csecs_last_5h
 * @member {Enum.SteamUserDurationControlProgress} progress
 * @member {Enum.SteamUserDurationControlNotification} notification
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
 * @struct_partial SteamUserGetAuthSessionTicketResponse
 * @member {Real} auth_ticket_handle
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamApiResult} result
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
 * @struct_partial SteamUtilsCheckFileSignatureResult
 * @member {Enum.SteamUtilsCheckFileSignature} result
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
 * @member {Real} ip_v4
 * @member {Real} port
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
 * @member {Enum.SteamUgcItemUpdateStatus} status
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
 * @member {Enum.SteamRemoteStoragePublishedFileVisibility} visibility
 * @member {Bool} banned
 * @member {Bool} accepted_for_use
 * @member {Bool} tags_truncated
 * @member {String} tags
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcAdditionalPreview
 * @member {Bool} ok
 * @member {String} url_or_video_id
 * @member {Enum.SteamUgcItemPreviewType} preview_type
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
 * @struct_partial SteamUgcQueryCompleted
 * @member {Real} query_handle
 * @member {Enum.SteamApiResult} result
 * @member {Real} num_results_returned
 * @member {Real} total_matching_results
 * @member {Bool} cached_data
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcCreateItemResult
 * @member {Enum.SteamApiResult} result
 * @member {Real} published_file_id
 * @member {Bool} legal_agreement_required
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcSubmitItemUpdateResult
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamApiResult} result
 * @member {Real} published_file_id
 * @member {Bool} was_add_request
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcSetUserItemVoteResult
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamApiResult} result
 * @member {Real} published_file_id
 * @struct_end 
 */

/**
 * @struct_partial SteamUgcDownloadItemResult
 * @member {Real} app_id
 * @member {Real} published_file_id
 * @member {Enum.SteamApiResult} result
 * @struct_end 
 */

/**
 * @struct_partial SteamInputAnalogActionData
 * @member {Enum.SteamInputControllerSourceMode} mode
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
 * @member {Array[Real]} handles
 * @struct_end 
 */

/**
 * @struct_partial SteamInputActionOrigins
 * @member {Array[Enum.SteamInputActionOrigin]} origins
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
 * @struct_partial SteamUserStatsDownloadedLeaderboardEntry
 * @member {Bool} ok
 * @member {Real} steam_id_user
 * @member {Real} global_rank
 * @member {Real} score
 * @member {Array[Real]} details
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
 * @member {Enum.SteamApiResult} result
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
 * @member {Real} result
 * @member {Real} leaderboard_handle
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsUserStatsReceived
 * @member {Real} game_id
 * @member {Real} steam_id_user
 * @member {Enum.SteamApiResult} result
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
 * @member {Bool} ok
 * @member {Real} min
 * @member {Real} max
 * @struct_end 
 */

/**
 * @struct_partial SteamUserStatsFloatMinMax
 * @member {Bool} ok
 * @member {Real} min
 * @member {Real} max
 * @struct_end 
 */

/**
 * @struct_partial SteamMusicPlaybackStatusHasChanged
 * @member {Enum.SteamMusicPlaybackStatus} playback_status
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
 * @struct_partial SteamInventoryItemDefQuantity
 * @member {Real} itemdef_id
 * @member {Real} quantity
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryItemInstanceQuantity
 * @member {Real} item_instance_id
 * @member {Real} quantity
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryItemWithPrice
 * @member {Real} itemdef_id
 * @member {Real} current_price
 * @member {Real} base_price
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
 * @struct_partial SteamInventoryItemPrice
 * @member {Bool} ok
 * @member {Real} current_price
 * @member {Real} base_price
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryResultReady
 * @member {Real} result_handle
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamApiResult} result
 * @member {Real} order_id
 * @member {Real} transaction_id
 * @struct_end 
 */

/**
 * @struct_partial SteamInventoryRequestPricesResult
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamApiResult} result
 * @member {Real} ugc_handle
 * @member {String} file_name
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageFileWriteAsyncResult
 * @member {Enum.SteamApiResult} result
 * @struct_end 
 */

/**
 * @struct_partial SteamRemoteStorageDownloadUgcResult
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamApiResult} result
 * @member {Real} lobby_id
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyEnter
 * @member {Real} lobby_id
 * @member {Real} chat_permissions
 * @member {Bool} locked
 * @member {Enum.SteamMatchmakingChatRoomEnterResponse} response
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
 * @member {Enum.SteamMatchmakingChatMemberStateChange} chat_member_state_change
 * @struct_end 
 */

/**
 * @struct_partial SteamMatchmakingLobbyChatMsg
 * @member {Real} lobby_id
 * @member {Real} sender_id
 * @member {Enum.SteamFriendsChatEntryType} chat_entry_type
 * @member {Real} chat_id
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
 * @member {Enum.SteamFriendsChatEntryType} entry_type
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
 * @member {Enum.SteamNetConnectionEnd} end_reason
 * @member {String} debug_msg
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingMessagesMessage
 * @member {Real} steam_id_remote
 * @member {Real} channel
 * @member {Real} size
 * @member {String} data
 * @member {Real} send_flags
 * @member {Real} message_number
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingSocketsConnectionInfo
 * @member {Real} user_data
 * @member {Enum.SteamNetConnectionEnd} end_reason
 * @member {String} end_debug
 * @member {String} connection_description
 * @member {Real} flags
 * @member {Enum.SteamNetworkingConnectionState} state
 * @member {Real} steam_id_remote
 * @member {String} addr_remote
 * @struct_end 
 */

/**
 * @struct_partial SteamNetworkingSocketsMessage
 * @member {Real} conn
 * @member {Real} size
 * @member {String} data
 * @member {Real} flags
 * @member {Real} message_number
 * @member {Real} identity_peer
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
 * @member {Enum.SteamApiResult} result
 * @member {Real} beacon_id
 * @struct_end 
 */

/**
 * @struct_partial SteamPartiesJoinPartyResult
 * @member {Enum.SteamApiResult} result
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
 * @member {Enum.SteamNetworkingConnectionState} old_state
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
 * @enum_partial SteamApiUserHasLicenseForAppResult
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
 * @member AccountNotFeatured
 * @member AdministratorOK
 * @member ContentVersion
 * @member TryAnotherCM
 * @member PasswordRequiredToKickSession
 * @member AlreadyLoggedInElsewhere
 * @member Suspended
 * @member Cancelled
 * @member DataCorruption
 * @member DiskFull
 * @member RemoteCallFailed
 * @member PasswordUnset
 * @member ExternalAccountUnlinked
 * @member PSNTicketInvalid
 * @member ExternalAccountAlreadyLinked
 * @member RemoteFileConflict
 * @member IllegalPassword
 * @member SameAsPreviousValue
 * @member AccountLogonDenied
 * @member CannotUseOldPassword
 * @member InvalidLoginAuthCode
 * @member AccountLogonDeniedNoMail
 * @member HardwareNotCapableOfIPT
 * @member IPTInitError
 * @member ParentalControlRestricted
 * @member FacebookQueryError
 * @member ExpiredLoginAuthCode
 * @member IPLoginRestrictionFailed
 * @member AccountLockedDown
 * @member AccountLogonDeniedVerifiedEmailRequired
 * @member NoMatchingURL
 * @member BadResponse
 * @member RequirePasswordReEntry
 * @member ValueOutOfRange
 * @member UnexpectedError
 * @member Disabled
 * @member InvalidCEGSubmission
 * @member RestrictedDevice
 * @member RegionLocked
 * @member RateLimitExceeded
 * @member AccountLoginDeniedNeedTwoFactor
 * @member ItemDeleted
 * @member AccountLoginDeniedThrottle
 * @member TwoFactorCodeMismatch
 * @member TwoFactorActivationCodeMismatch
 * @member AccountAssociatedToMultiplePartners
 * @member NotModified
 * @member NoMobileDevice
 * @member TimeNotSynced
 * @member SmsCodeFailed
 * @member AccountLimitExceeded
 * @member AccountActivityLimitExceeded
 * @member PhoneActivityLimitExceeded
 * @member RefundToWallet
 * @member EmailSendFailure
 * @member NotSettled
 * @member NeedCaptcha
 * @member GSLTDenied
 * @member GSOwnerDenied
 * @member InvalidItemType
 * @member IPBanned
 * @member GSLTExpired
 * @member InsufficientFunds
 * @member TooManyPending
 * @member NoSiteLicensesFound
 * @member WGNetworkSendExceeded
 * @member AccountNotFriends
 * @member LimitedUserAccount
 * @member CantRemoveItem
 * @member AccountDeleted
 * @member ExistingUserCancelledLicense
 * @member CommunityCooldown
 * @member NoLauncherSpecified
 * @member MustAgreeToSSA
 * @member LauncherMigrated
 * @member SteamRealmMismatch
 * @member InvalidSignature
 * @member ParseFailure
 * @member NoVerifiedPhone
 * @member InsufficientBattery
 * @member ChargerRequired
 * @member CachedCredentialInvalid
 * @member PhoneNumberIsVOIP
 * @member NotSupported
 * @member FamilySizeLimitExceeded
 * @member OfflineAppCacheInvalid
 * @member TryLater
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
 * @enum_partial SteamFriendsPersonaChange
 * @member Name
 * @member Status
 * @member ComeOnline
 * @member GoneOffline
 * @member GamePlayed
 * @member GameServer
 * @member Avatar
 * @member JoinedSource
 * @member LeftSource
 * @member RelationshipChanged
 * @member NameFirstSet
 * @member Broadcast
 * @member Nickname
 * @member SteamLevel
 * @member RichPresence
 * @enum_end 
 */

/**
 * @enum_partial SteamAppsBetaBranchFlags
 * @member None
 * @member Default
 * @member Available
 * @member Private
 * @member Selected
 * @member Installed
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
 * @enum_partial SteamUserDurationControlProgress
 * @member Full
 * @member Half
 * @member None
 * @member ExitSoon_3h
 * @member ExitSoon_5h
 * @member ExitSoon_Night
 * @enum_end 
 */

/**
 * @enum_partial SteamUserDurationControlNotification
 * @member None
 * @member OneHour
 * @member ThreeHours
 * @member HalfProgress
 * @member NoProgress
 * @member ExitSoon_3h
 * @member ExitSoon_5h
 * @member ExitSoon_Night
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
 * @enum_partial SteamAuthSessionResponse
 * @member OK
 * @member UserNotConnectedToSteam
 * @member NoLicenseOrExpired
 * @member VACBanned
 * @member LoggedInElseWhere
 * @member VACCheckTimedOut
 * @member AuthTicketCanceled
 * @member AuthTicketInvalidAlreadyUsed
 * @member AuthTicketInvalid
 * @member PublisherIssuedBan
 * @member AuthTicketNetworkIdentityFailure
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
 * @enum_partial SteamUtilsCheckFileSignature
 * @member InvalidSignature
 * @member ValidSignature
 * @member FileNotFound
 * @member NoSignaturesFoundForThisApp
 * @member NoSignaturesFoundForThisFile
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
 * @enum_partial SteamUgcItemPreviewType
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
 * @enum_partial SteamUgcItemState
 * @member None
 * @member Subscribed
 * @member LegacyItem
 * @member Installed
 * @member NeedsUpdate
 * @member Downloading
 * @member DownloadPending
 * @member DisabledLocally
 * @enum_end 
 */

/**
 * @enum_partial SteamUgcItemUpdateStatus
 * @member Invalid
 * @member PreparingConfig
 * @member PreparingContent
 * @member UploadingContent
 * @member UploadingPreviewFile
 * @member CommittingChanges
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
 * @member NumPlaytimeSessionsDuringTimePeriod
 * @enum_end 
 */

/**
 * @enum_partial SteamInputControllerSourceMode
 * @member None
 * @member Dpad
 * @member Buttons
 * @member FourButtons
 * @member AbsoluteMouse
 * @member RelativeMouse
 * @member JoystickMove
 * @member JoystickMouse
 * @member JoystickCamera
 * @member ScrollWheel
 * @member Trigger
 * @member TouchMenu
 * @member MouseJoystick
 * @member MouseRegion
 * @member RadialMenu
 * @member SingleButton
 * @member Switches
 * @enum_end 
 */

/**
 * @enum_partial SteamInputControllerLEDFlag
 * @member SetColor
 * @member RestoreUserDefault
 * @enum_end 
 */

/**
 * @enum_partial SteamInputGlyphSize
 * @member Small
 * @member Medium
 * @member Large
 * @member Count
 * @enum_end 
 */

/**
 * @enum_partial SteamInputGlyphStyle
 * @member Knockout
 * @member Light
 * @member Dark
 * @member NeutralColorABXY
 * @member SolidABXY
 * @enum_end 
 */

/**
 * @enum_partial SteamInputType
 * @member Unknown
 * @member SteamController
 * @member XBox360Controller
 * @member XBoxOneController
 * @member GenericGamepad
 * @member PS4Controller
 * @member AppleMFiController
 * @member AndroidController
 * @member SwitchJoyConPair
 * @member SwitchJoyConSingle
 * @member SwitchProController
 * @member MobileTouch
 * @member PS3Controller
 * @member PS5Controller
 * @member SteamDeckController
 * @member Count
 * @member MaximumPossibleValue
 * @enum_end 
 */

/**
 * @enum_partial SteamXboxOrigin
 * @member A
 * @member B
 * @member X
 * @member Y
 * @member LeftBumper
 * @member RightBumper
 * @member Menu
 * @member View
 * @member LeftTrigger_Pull
 * @member LeftTrigger_Click
 * @member RightTrigger_Pull
 * @member RightTrigger_Click
 * @member LeftStick_Move
 * @member LeftStick_Click
 * @member LeftStick_DPadNorth
 * @member LeftStick_DPadSouth
 * @member LeftStick_DPadWest
 * @member LeftStick_DPadEast
 * @member RightStick_Move
 * @member RightStick_Click
 * @member RightStick_DPadNorth
 * @member RightStick_DPadSouth
 * @member RightStick_DPadWest
 * @member RightStick_DPadEast
 * @member DPad_North
 * @member DPad_South
 * @member DPad_West
 * @member DPad_East
 * @member Count
 * @enum_end 
 */

/**
 * @enum_partial SteamInputActionOrigin
 * @member None
 * @member SteamController_A
 * @member SteamController_B
 * @member SteamController_X
 * @member SteamController_Y
 * @member SteamController_LeftBumper
 * @member SteamController_RightBumper
 * @member SteamController_LeftGrip
 * @member SteamController_RightGrip
 * @member SteamController_Start
 * @member SteamController_Back
 * @member SteamController_LeftPad_Touch
 * @member SteamController_LeftPad_Swipe
 * @member SteamController_LeftPad_Click
 * @member SteamController_LeftPad_DPadNorth
 * @member SteamController_LeftPad_DPadSouth
 * @member SteamController_LeftPad_DPadWest
 * @member SteamController_LeftPad_DPadEast
 * @member SteamController_RightPad_Touch
 * @member SteamController_RightPad_Swipe
 * @member SteamController_RightPad_Click
 * @member SteamController_RightPad_DPadNorth
 * @member SteamController_RightPad_DPadSouth
 * @member SteamController_RightPad_DPadWest
 * @member SteamController_RightPad_DPadEast
 * @member SteamController_LeftTrigger_Pull
 * @member SteamController_LeftTrigger_Click
 * @member SteamController_RightTrigger_Pull
 * @member SteamController_RightTrigger_Click
 * @member SteamController_LeftStick_Move
 * @member SteamController_LeftStick_Click
 * @member SteamController_LeftStick_DPadNorth
 * @member SteamController_LeftStick_DPadSouth
 * @member SteamController_LeftStick_DPadWest
 * @member SteamController_LeftStick_DPadEast
 * @member SteamController_Gyro_Move
 * @member SteamController_Gyro_Pitch
 * @member SteamController_Gyro_Yaw
 * @member SteamController_Gyro_Roll
 * @member SteamController_Reserved0
 * @member SteamController_Reserved1
 * @member SteamController_Reserved2
 * @member SteamController_Reserved3
 * @member SteamController_Reserved4
 * @member SteamController_Reserved5
 * @member SteamController_Reserved6
 * @member SteamController_Reserved7
 * @member SteamController_Reserved8
 * @member SteamController_Reserved9
 * @member SteamController_Reserved10
 * @member PS4_X
 * @member PS4_Circle
 * @member PS4_Triangle
 * @member PS4_Square
 * @member PS4_LeftBumper
 * @member PS4_RightBumper
 * @member PS4_Options
 * @member PS4_Share
 * @member PS4_LeftPad_Touch
 * @member PS4_LeftPad_Swipe
 * @member PS4_LeftPad_Click
 * @member PS4_LeftPad_DPadNorth
 * @member PS4_LeftPad_DPadSouth
 * @member PS4_LeftPad_DPadWest
 * @member PS4_LeftPad_DPadEast
 * @member PS4_RightPad_Touch
 * @member PS4_RightPad_Swipe
 * @member PS4_RightPad_Click
 * @member PS4_RightPad_DPadNorth
 * @member PS4_RightPad_DPadSouth
 * @member PS4_RightPad_DPadWest
 * @member PS4_RightPad_DPadEast
 * @member PS4_CenterPad_Touch
 * @member PS4_CenterPad_Swipe
 * @member PS4_CenterPad_Click
 * @member PS4_CenterPad_DPadNorth
 * @member PS4_CenterPad_DPadSouth
 * @member PS4_CenterPad_DPadWest
 * @member PS4_CenterPad_DPadEast
 * @member PS4_LeftTrigger_Pull
 * @member PS4_LeftTrigger_Click
 * @member PS4_RightTrigger_Pull
 * @member PS4_RightTrigger_Click
 * @member PS4_LeftStick_Move
 * @member PS4_LeftStick_Click
 * @member PS4_LeftStick_DPadNorth
 * @member PS4_LeftStick_DPadSouth
 * @member PS4_LeftStick_DPadWest
 * @member PS4_LeftStick_DPadEast
 * @member PS4_RightStick_Move
 * @member PS4_RightStick_Click
 * @member PS4_RightStick_DPadNorth
 * @member PS4_RightStick_DPadSouth
 * @member PS4_RightStick_DPadWest
 * @member PS4_RightStick_DPadEast
 * @member PS4_DPad_North
 * @member PS4_DPad_South
 * @member PS4_DPad_West
 * @member PS4_DPad_East
 * @member PS4_Gyro_Move
 * @member PS4_Gyro_Pitch
 * @member PS4_Gyro_Yaw
 * @member PS4_Gyro_Roll
 * @member PS4_DPad_Move
 * @member PS4_Reserved1
 * @member PS4_Reserved2
 * @member PS4_Reserved3
 * @member PS4_Reserved4
 * @member PS4_Reserved5
 * @member PS4_Reserved6
 * @member PS4_Reserved7
 * @member PS4_Reserved8
 * @member PS4_Reserved9
 * @member PS4_Reserved10
 * @member XBoxOne_A
 * @member XBoxOne_B
 * @member XBoxOne_X
 * @member XBoxOne_Y
 * @member XBoxOne_LeftBumper
 * @member XBoxOne_RightBumper
 * @member XBoxOne_Menu
 * @member XBoxOne_View
 * @member XBoxOne_LeftTrigger_Pull
 * @member XBoxOne_LeftTrigger_Click
 * @member XBoxOne_RightTrigger_Pull
 * @member XBoxOne_RightTrigger_Click
 * @member XBoxOne_LeftStick_Move
 * @member XBoxOne_LeftStick_Click
 * @member XBoxOne_LeftStick_DPadNorth
 * @member XBoxOne_LeftStick_DPadSouth
 * @member XBoxOne_LeftStick_DPadWest
 * @member XBoxOne_LeftStick_DPadEast
 * @member XBoxOne_RightStick_Move
 * @member XBoxOne_RightStick_Click
 * @member XBoxOne_RightStick_DPadNorth
 * @member XBoxOne_RightStick_DPadSouth
 * @member XBoxOne_RightStick_DPadWest
 * @member XBoxOne_RightStick_DPadEast
 * @member XBoxOne_DPad_North
 * @member XBoxOne_DPad_South
 * @member XBoxOne_DPad_West
 * @member XBoxOne_DPad_East
 * @member XBoxOne_DPad_Move
 * @member XBoxOne_LeftGrip_Lower
 * @member XBoxOne_LeftGrip_Upper
 * @member XBoxOne_RightGrip_Lower
 * @member XBoxOne_RightGrip_Upper
 * @member XBoxOne_Share
 * @member XBoxOne_Reserved6
 * @member XBoxOne_Reserved7
 * @member XBoxOne_Reserved8
 * @member XBoxOne_Reserved9
 * @member XBoxOne_Reserved10
 * @member XBox360_A
 * @member XBox360_B
 * @member XBox360_X
 * @member XBox360_Y
 * @member XBox360_LeftBumper
 * @member XBox360_RightBumper
 * @member XBox360_Start
 * @member XBox360_Back
 * @member XBox360_LeftTrigger_Pull
 * @member XBox360_LeftTrigger_Click
 * @member XBox360_RightTrigger_Pull
 * @member XBox360_RightTrigger_Click
 * @member XBox360_LeftStick_Move
 * @member XBox360_LeftStick_Click
 * @member XBox360_LeftStick_DPadNorth
 * @member XBox360_LeftStick_DPadSouth
 * @member XBox360_LeftStick_DPadWest
 * @member XBox360_LeftStick_DPadEast
 * @member XBox360_RightStick_Move
 * @member XBox360_RightStick_Click
 * @member XBox360_RightStick_DPadNorth
 * @member XBox360_RightStick_DPadSouth
 * @member XBox360_RightStick_DPadWest
 * @member XBox360_RightStick_DPadEast
 * @member XBox360_DPad_North
 * @member XBox360_DPad_South
 * @member XBox360_DPad_West
 * @member XBox360_DPad_East
 * @member XBox360_DPad_Move
 * @member XBox360_Reserved1
 * @member XBox360_Reserved2
 * @member XBox360_Reserved3
 * @member XBox360_Reserved4
 * @member XBox360_Reserved5
 * @member XBox360_Reserved6
 * @member XBox360_Reserved7
 * @member XBox360_Reserved8
 * @member XBox360_Reserved9
 * @member XBox360_Reserved10
 * @member Switch_A
 * @member Switch_B
 * @member Switch_X
 * @member Switch_Y
 * @member Switch_LeftBumper
 * @member Switch_RightBumper
 * @member Switch_Plus
 * @member Switch_Minus
 * @member Switch_Capture
 * @member Switch_LeftTrigger_Pull
 * @member Switch_LeftTrigger_Click
 * @member Switch_RightTrigger_Pull
 * @member Switch_RightTrigger_Click
 * @member Switch_LeftStick_Move
 * @member Switch_LeftStick_Click
 * @member Switch_LeftStick_DPadNorth
 * @member Switch_LeftStick_DPadSouth
 * @member Switch_LeftStick_DPadWest
 * @member Switch_LeftStick_DPadEast
 * @member Switch_RightStick_Move
 * @member Switch_RightStick_Click
 * @member Switch_RightStick_DPadNorth
 * @member Switch_RightStick_DPadSouth
 * @member Switch_RightStick_DPadWest
 * @member Switch_RightStick_DPadEast
 * @member Switch_DPad_North
 * @member Switch_DPad_South
 * @member Switch_DPad_West
 * @member Switch_DPad_East
 * @member Switch_ProGyro_Move
 * @member Switch_ProGyro_Pitch
 * @member Switch_ProGyro_Yaw
 * @member Switch_ProGyro_Roll
 * @member Switch_DPad_Move
 * @member Switch_Reserved1
 * @member Switch_Reserved2
 * @member Switch_Reserved3
 * @member Switch_Reserved4
 * @member Switch_Reserved5
 * @member Switch_Reserved6
 * @member Switch_Reserved7
 * @member Switch_Reserved8
 * @member Switch_Reserved9
 * @member Switch_Reserved10
 * @member Switch_RightGyro_Move
 * @member Switch_RightGyro_Pitch
 * @member Switch_RightGyro_Yaw
 * @member Switch_RightGyro_Roll
 * @member Switch_LeftGyro_Move
 * @member Switch_LeftGyro_Pitch
 * @member Switch_LeftGyro_Yaw
 * @member Switch_LeftGyro_Roll
 * @member Switch_LeftGrip_Lower
 * @member Switch_LeftGrip_Upper
 * @member Switch_RightGrip_Lower
 * @member Switch_RightGrip_Upper
 * @member Switch_JoyConButton_N
 * @member Switch_JoyConButton_E
 * @member Switch_JoyConButton_S
 * @member Switch_JoyConButton_W
 * @member Switch_Reserved15
 * @member Switch_Reserved16
 * @member Switch_Reserved17
 * @member Switch_Reserved18
 * @member Switch_Reserved19
 * @member Switch_Reserved20
 * @member PS5_X
 * @member PS5_Circle
 * @member PS5_Triangle
 * @member PS5_Square
 * @member PS5_LeftBumper
 * @member PS5_RightBumper
 * @member PS5_Option
 * @member PS5_Create
 * @member PS5_Mute
 * @member PS5_LeftPad_Touch
 * @member PS5_LeftPad_Swipe
 * @member PS5_LeftPad_Click
 * @member PS5_LeftPad_DPadNorth
 * @member PS5_LeftPad_DPadSouth
 * @member PS5_LeftPad_DPadWest
 * @member PS5_LeftPad_DPadEast
 * @member PS5_RightPad_Touch
 * @member PS5_RightPad_Swipe
 * @member PS5_RightPad_Click
 * @member PS5_RightPad_DPadNorth
 * @member PS5_RightPad_DPadSouth
 * @member PS5_RightPad_DPadWest
 * @member PS5_RightPad_DPadEast
 * @member PS5_CenterPad_Touch
 * @member PS5_CenterPad_Swipe
 * @member PS5_CenterPad_Click
 * @member PS5_CenterPad_DPadNorth
 * @member PS5_CenterPad_DPadSouth
 * @member PS5_CenterPad_DPadWest
 * @member PS5_CenterPad_DPadEast
 * @member PS5_LeftTrigger_Pull
 * @member PS5_LeftTrigger_Click
 * @member PS5_RightTrigger_Pull
 * @member PS5_RightTrigger_Click
 * @member PS5_LeftStick_Move
 * @member PS5_LeftStick_Click
 * @member PS5_LeftStick_DPadNorth
 * @member PS5_LeftStick_DPadSouth
 * @member PS5_LeftStick_DPadWest
 * @member PS5_LeftStick_DPadEast
 * @member PS5_RightStick_Move
 * @member PS5_RightStick_Click
 * @member PS5_RightStick_DPadNorth
 * @member PS5_RightStick_DPadSouth
 * @member PS5_RightStick_DPadWest
 * @member PS5_RightStick_DPadEast
 * @member PS5_DPad_North
 * @member PS5_DPad_South
 * @member PS5_DPad_West
 * @member PS5_DPad_East
 * @member PS5_Gyro_Move
 * @member PS5_Gyro_Pitch
 * @member PS5_Gyro_Yaw
 * @member PS5_Gyro_Roll
 * @member PS5_DPad_Move
 * @member PS5_LeftGrip
 * @member PS5_RightGrip
 * @member PS5_LeftFn
 * @member PS5_RightFn
 * @member PS5_Reserved5
 * @member PS5_Reserved6
 * @member PS5_Reserved7
 * @member PS5_Reserved8
 * @member PS5_Reserved9
 * @member PS5_Reserved10
 * @member PS5_Reserved11
 * @member PS5_Reserved12
 * @member PS5_Reserved13
 * @member PS5_Reserved14
 * @member PS5_Reserved15
 * @member PS5_Reserved16
 * @member PS5_Reserved17
 * @member PS5_Reserved18
 * @member PS5_Reserved19
 * @member PS5_Reserved20
 * @member SteamDeck_A
 * @member SteamDeck_B
 * @member SteamDeck_X
 * @member SteamDeck_Y
 * @member SteamDeck_L1
 * @member SteamDeck_R1
 * @member SteamDeck_Menu
 * @member SteamDeck_View
 * @member SteamDeck_LeftPad_Touch
 * @member SteamDeck_LeftPad_Swipe
 * @member SteamDeck_LeftPad_Click
 * @member SteamDeck_LeftPad_DPadNorth
 * @member SteamDeck_LeftPad_DPadSouth
 * @member SteamDeck_LeftPad_DPadWest
 * @member SteamDeck_LeftPad_DPadEast
 * @member SteamDeck_RightPad_Touch
 * @member SteamDeck_RightPad_Swipe
 * @member SteamDeck_RightPad_Click
 * @member SteamDeck_RightPad_DPadNorth
 * @member SteamDeck_RightPad_DPadSouth
 * @member SteamDeck_RightPad_DPadWest
 * @member SteamDeck_RightPad_DPadEast
 * @member SteamDeck_L2_SoftPull
 * @member SteamDeck_L2
 * @member SteamDeck_R2_SoftPull
 * @member SteamDeck_R2
 * @member SteamDeck_LeftStick_Move
 * @member SteamDeck_L3
 * @member SteamDeck_LeftStick_DPadNorth
 * @member SteamDeck_LeftStick_DPadSouth
 * @member SteamDeck_LeftStick_DPadWest
 * @member SteamDeck_LeftStick_DPadEast
 * @member SteamDeck_LeftStick_Touch
 * @member SteamDeck_RightStick_Move
 * @member SteamDeck_R3
 * @member SteamDeck_RightStick_DPadNorth
 * @member SteamDeck_RightStick_DPadSouth
 * @member SteamDeck_RightStick_DPadWest
 * @member SteamDeck_RightStick_DPadEast
 * @member SteamDeck_RightStick_Touch
 * @member SteamDeck_L4
 * @member SteamDeck_R4
 * @member SteamDeck_L5
 * @member SteamDeck_R5
 * @member SteamDeck_DPad_Move
 * @member SteamDeck_DPad_North
 * @member SteamDeck_DPad_South
 * @member SteamDeck_DPad_West
 * @member SteamDeck_DPad_East
 * @member SteamDeck_Gyro_Move
 * @member SteamDeck_Gyro_Pitch
 * @member SteamDeck_Gyro_Yaw
 * @member SteamDeck_Gyro_Roll
 * @member SteamDeck_Reserved1
 * @member SteamDeck_Reserved2
 * @member SteamDeck_Reserved3
 * @member SteamDeck_Reserved4
 * @member SteamDeck_Reserved5
 * @member SteamDeck_Reserved6
 * @member SteamDeck_Reserved7
 * @member SteamDeck_Reserved8
 * @member SteamDeck_Reserved9
 * @member SteamDeck_Reserved10
 * @member SteamDeck_Reserved11
 * @member SteamDeck_Reserved12
 * @member SteamDeck_Reserved13
 * @member SteamDeck_Reserved14
 * @member SteamDeck_Reserved15
 * @member SteamDeck_Reserved16
 * @member SteamDeck_Reserved17
 * @member SteamDeck_Reserved18
 * @member SteamDeck_Reserved19
 * @member SteamDeck_Reserved20
 * @member Horipad_M1
 * @member Horipad_M2
 * @member Horipad_L4
 * @member Horipad_R4
 * @member LenovoLegionGo_A
 * @member LenovoLegionGo_B
 * @member LenovoLegionGo_X
 * @member LenovoLegionGo_Y
 * @member LenovoLegionGo_LB
 * @member LenovoLegionGo_RB
 * @member LenovoLegionGo_Menu
 * @member LenovoLegionGo_View
 * @member LenovoLegionGo_LeftPad_Touch
 * @member LenovoLegionGo_LeftPad_Swipe
 * @member LenovoLegionGo_LeftPad_Click
 * @member LenovoLegionGo_LeftPad_DPadNorth
 * @member LenovoLegionGo_LeftPad_DPadSouth
 * @member LenovoLegionGo_LeftPad_DPadWest
 * @member LenovoLegionGo_LeftPad_DPadEast
 * @member LenovoLegionGo_RightPad_Touch
 * @member LenovoLegionGo_RightPad_Swipe
 * @member LenovoLegionGo_RightPad_Click
 * @member LenovoLegionGo_RightPad_DPadNorth
 * @member LenovoLegionGo_RightPad_DPadSouth
 * @member LenovoLegionGo_RightPad_DPadWest
 * @member LenovoLegionGo_RightPad_DPadEast
 * @member LenovoLegionGo_LT_SoftPull
 * @member LenovoLegionGo_LT
 * @member LenovoLegionGo_RT_SoftPull
 * @member LenovoLegionGo_RT
 * @member LenovoLegionGo_LeftStick_Move
 * @member LenovoLegionGo_LS
 * @member LenovoLegionGo_LeftStick_DPadNorth
 * @member LenovoLegionGo_LeftStick_DPadSouth
 * @member LenovoLegionGo_LeftStick_DPadWest
 * @member LenovoLegionGo_LeftStick_DPadEast
 * @member LenovoLegionGo_RightStick_Move
 * @member LenovoLegionGo_RS
 * @member LenovoLegionGo_RightStick_DPadNorth
 * @member LenovoLegionGo_RightStick_DPadSouth
 * @member LenovoLegionGo_RightStick_DPadWest
 * @member LenovoLegionGo_RightStick_DPadEast
 * @member LenovoLegionGo_Y1
 * @member LenovoLegionGo_Y2
 * @member LenovoLegionGo_DPad_Move
 * @member LenovoLegionGo_DPad_North
 * @member LenovoLegionGo_DPad_South
 * @member LenovoLegionGo_DPad_West
 * @member LenovoLegionGo_DPad_East
 * @member LenovoLegionGo_Gyro_Move
 * @member LenovoLegionGo_Gyro_Pitch
 * @member LenovoLegionGo_Gyro_Yaw
 * @member LenovoLegionGo_Gyro_Roll
 * @member LenovoLegionGo_Reserved1
 * @member LenovoLegionGo_Reserved2
 * @member LenovoLegionGo_Reserved3
 * @member LenovoLegionGo_Reserved4
 * @member LenovoLegionGo_Reserved5
 * @member LenovoLegionGo_Reserved6
 * @member LenovoLegionGo_Reserved7
 * @member LenovoLegionGo_Reserved8
 * @member LenovoLegionGo_Reserved9
 * @member LenovoLegionGo_Reserved10
 * @member LenovoLegionGo_Reserved11
 * @member LenovoLegionGo_Reserved12
 * @member LenovoLegionGo_Reserved13
 * @member LenovoLegionGo_Reserved14
 * @member LenovoLegionGo_Reserved15
 * @member LenovoLegionGo_Reserved16
 * @member LenovoLegionGo_Reserved17
 * @member LenovoLegionGo_Reserved18
 * @member LenovoLegionGo_Reserved19
 * @member LenovoLegionGo_Reserved20
 * @member Generic_L4
 * @member Generic_R4
 * @member Generic_L5
 * @member Generic_R5
 * @member Generic_PL
 * @member Generic_PR
 * @member Generic_C
 * @member Generic_Z
 * @member Generic_MISC1
 * @member Generic_MISC2
 * @member Generic_MISC3
 * @member Generic_MISC4
 * @member Generic_MISC5
 * @member Generic_MISC6
 * @member Generic_MISC7
 * @member Generic_MISC8
 * @member Count
 * @member MaximumPossibleValue
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
 * @enum_partial SteamInventoryItemFlags
 * @member NoTrade
 * @member Removed
 * @member Consumed
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
 * @enum_partial SteamMatchmakingChatMemberStateChange
 * @member Entered
 * @member Left
 * @member Disconnected
 * @member Kicked
 * @member Banned
 * @enum_end 
 */

/**
 * @enum_partial SteamMatchmakingChatRoomEnterResponse
 * @member Success
 * @member DoesntExist
 * @member NotAllowed
 * @member Full
 * @member Error
 * @member Banned
 * @member Limited
 * @member ClanDisabled
 * @member CommunityBan
 * @member MemberBlockedYou
 * @member YouBlockedMember
 * @member RatelimitExceeded
 * @enum_end 
 */

/**
 * @enum_partial SteamNetConnectionEnd
 * @member Invalid
 * @member App_Min
 * @member App_Generic
 * @member App_Max
 * @member AppException_Min
 * @member AppException_Generic
 * @member AppException_Max
 * @member Local_Min
 * @member Local_OfflineMode
 * @member Local_ManyRelayConnectivity
 * @member Local_HostedServerPrimaryRelay
 * @member Local_NetworkConfig
 * @member Local_Rights
 * @member Local_P2P_ICE_NoPublicAddresses
 * @member Local_Max
 * @member Remote_Min
 * @member Remote_Timeout
 * @member Remote_BadCrypt
 * @member Remote_BadCert
 * @member Remote_BadProtocolVersion
 * @member Remote_P2P_ICE_NoPublicAddresses
 * @member Remote_Max
 * @member Misc_Min
 * @member Misc_Generic
 * @member Misc_InternalError
 * @member Misc_Timeout
 * @member Misc_SteamConnectivity
 * @member Misc_NoRelaySessionsToClient
 * @member Misc_P2P_Rendezvous
 * @member Misc_P2P_NAT_Firewall
 * @member Misc_PeerSentNoConnection
 * @member Misc_Max
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
 * @member UnreliableNoNagle
 * @member NoDelay
 * @member UnreliableNoDelay
 * @member Reliable
 * @member ReliableNoNagle
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
 * @member {Real} SteamApiBreakpadInvalidHandle (value: '0')
 * @member {Real} SteamApiGameExtraInfoMax (value: '64')
 * @member {Real} SteamApiSaltSize (value: '8')
 * @member {Real} SteamApiGidNil (value: '-1')
 * @member {Real} SteamApiAuthTicketInvalid (value: '0')
 * @member {Real} SteamApiJobIdNil (value: '-1')
 * @member {Real} SteamApiTxnIdNil (value: '-1')
 * @member {Real} SteamApiTxnIdUnknown (value: '0')
 * @member {Real} SteamApiApiCallInvalid (value: '0x0')
 * @member {Real} SteamApiAppIdInvalid (value: '0x0')
 * @member {Real} SteamApiBundleIdInvalid (value: '0')
 * @member {Real} SteamApiCellIdInvalid (value: '0xFFFFFFFF')
 * @member {Real} SteamApiDepotIdInvalid (value: '0x0')
 * @member {Real} SteamApiAssetClassIdInvalid (value: '0x0')
 * @member {Real} SteamApiManifestIdInvalid (value: '0')
 * @member {Real} SteamApiSteamAccountIdMask (value: '0xFFFFFFFF')
 * @member {Real} SteamApiSteamAccountInstanceMask (value: '0x000FFFFF')
 * @member {Real} SteamApiSteamUserConsoleInstance (value: '2')
 * @member {Real} SteamApiSteamUserDesktopInstance (value: '1')
 * @member {Real} SteamApiSteamUserWebInstance (value: '4')
 * @member {Real} SteamApiPackageIdFreeSub (value: '0x0')
 * @member {Real} SteamApiPackageIdInvalid (value: '0xFFFFFFFF')
 * @member {Real} SteamApiPartnerIdInvalid (value: '0')
 * @member {Real} SteamApiPhysicalItemIdInvalid (value: '0x0')
 * @member {Real} SteamApiQueryPortError (value: '0xFFFE')
 * @member {Real} SteamApiQueryPortNotInitialized (value: '0xFFFF')
 * @member {Real} SteamFriendsMaxFriendsGroupName (value: '64')
 * @member {Real} SteamFriendsMaxRichPresenceKeyLength (value: '64')
 * @member {Real} SteamFriendsMaxRichPresenceKeys (value: '20')
 * @member {Real} SteamFriendsMaxRichPresenceValueLength (value: '256')
 * @member {Real} SteamFriendsPersonaNameMax (value: '128')
 * @member {Real} SteamFriendsEnumerateFollowersMax (value: '50')
 * @member {Real} SteamFriendsFriendsGroupLimit (value: '100')
 * @member {Real} SteamFriendsChatMetadataMax (value: '8192')
 * @member {Real} SteamFriendsPersonaNameMaxUtf16 (value: '32')
 * @member {Real} SteamFriendsGroupIdInvalid (value: '-1')
 * @member {String} SteamFriendsInterfaceVersion (value: '"SteamFriends015"')
 * @member {Real} SteamAppsAppProofOfPurchaseKeyMax (value: '240')
 * @member {String} SteamAppsInterfaceVersion (value: '"STEAMAPPS_INTERFACE_VERSION008"')
 * @member {Real} SteamScreenshotsInvalidScreenshotHandle (value: '0')
 * @member {Real} SteamScreenshotsUfsTagTypeMax (value: '255')
 * @member {Real} SteamScreenshotsUfsTagValueMax (value: '255')
 * @member {Real} SteamScreenshotsMaxTaggedPublishedFiles (value: '32')
 * @member {Real} SteamScreenshotsMaxTaggedUsers (value: '32')
 * @member {Real} SteamScreenshotsThumbWidth (value: '200')
 * @member {String} SteamScreenshotsInterfaceVersion (value: '"STEAMSCREENSHOTS_INTERFACE_VERSION003"')
 * @member {String} SteamUserInterfaceVersion (value: '"SteamUser019"')
 * @member {Real} SteamUserEncryptedAppTicketSymmetricKeyLen (value: '32')
 * @member {String} SteamUtilsInterfaceVersion (value: '"SteamUtils009"')
 * @member {Real} SteamUgcNumResultsPerPage (value: '50')
 * @member {Real} SteamUgcDeveloperMetadataMax (value: '5000')
 * @member {Real} SteamUgcQueryHandleInvalid (value: '-1')
 * @member {Real} SteamUgcUpdateHandleInvalid (value: '-1')
 * @member {String} SteamUgcInterfaceVersion (value: '"STEAMUGC_INTERFACE_VERSION015"')
 * @member {String} SteamInputInterfaceVersion (value: '"SteamInput001"')
 * @member {Real} SteamInputHandleAllControllers (value: '-1')
 * @member {Real} SteamInputMaxAnalogActions (value: '16')
 * @member {Real} SteamInputMaxAnalogActionData (value: '1.0')
 * @member {Real} SteamInputMaxCount (value: '16')
 * @member {Real} SteamInputMaxDigitalActions (value: '128')
 * @member {Real} SteamInputMaxOrigins (value: '8')
 * @member {Real} SteamInputMinAnalogActionData (value: '-1.0')
 * @member {Real} SteamUserStatsLeaderboardNameMax (value: '128')
 * @member {Real} SteamUserStatsStatNameMax (value: '128')
 * @member {Real} SteamUserStatsLeaderboardDetailsMax (value: '64')
 * @member {String} SteamUserStatsInterfaceVersion (value: '"STEAMUSERSTATS_INTERFACE_VERSION011"')
 * @member {String} SteamMusicInterfaceVersion (value: '"STEAMMUSIC_INTERFACE_VERSION001"')
 * @member {Real} SteamTimelineMaxTimelinePriority (value: '1000')
 * @member {Real} SteamInventoryResultInvalid (value: '-1')
 * @member {Real} SteamInventoryItemInstanceIdInvalid (value: '-1')
 * @member {String} SteamInventoryInterfaceVersion (value: '"STEAMINVENTORY_INTERFACE_V002"')
 * @member {Real} SteamRemoteStorageFilenameMax (value: '260')
 * @member {Real} SteamRemoteStoragePublishedDocumentChangeDescriptionMax (value: '8000')
 * @member {Real} SteamRemoteStoragePublishedDocumentDescriptionMax (value: '8000')
 * @member {Real} SteamRemoteStoragePublishedDocumentTitleMax (value: '129')
 * @member {Real} SteamRemoteStoragePublishedFileUrlMax (value: '256')
 * @member {Real} SteamRemoteStorageTagListMax (value: '1025')
 * @member {Real} SteamRemoteStoragePublishedFileIdInvalid (value: '0')
 * @member {Real} SteamRemoteStoragePublishedFileUpdateHandleInvalid (value: '-1')
 * @member {Real} SteamRemoteStorageUgcFileStreamHandleInvalid (value: '-1')
 * @member {Real} SteamRemoteStorageUgcHandleInvalid (value: '-1')
 * @member {Real} SteamRemoteStorageEnumeratePublishedFilesMaxResults (value: '50')
 * @member {Real} SteamRemoteStorageMaxCloudFileChunkSize (value: '104857600')
 * @member {String} SteamRemoteStorageInterfaceVersion (value: '"STEAMREMOTESTORAGE_INTERFACE_VERSION014"')
 * @member {Real} SteamMatchmakingServerQueryInvalid (value: '0xffffffff')
 * @member {Real} SteamMatchmakingMaxLobbyKeyLength (value: '255')
 * @member {Real} SteamMatchmakingFavoriteFlagFavorite (value: '0x01')
 * @member {Real} SteamMatchmakingFavoriteFlagHistory (value: '0x02')
 * @member {Real} SteamMatchmakingFavoriteFlagNone (value: '0x00')
 * @member {String} SteamMatchmakingServersInterfaceVersion (value: '"SteamMatchMakingServers002"')
 * @member {String} SteamMatchmakingInterfaceVersion (value: '"SteamMatchMaking009"')
 * @member {Real} SteamNetworkingPollGroup_Invalid (value: '0')
 * @const_end 
 */

