
// FUNCTIONS

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
 * This function checks if the user is subscribed to the current app ID through a timed trial. If so, returns a valid struct containing the total time the timed trial is allowed to play, along with the current amount of time the user has played.
 * 
 * See also: [TimedTrialStatus_t](https://partner.steamgames.com/doc/api/ISteamApps#TimedTrialStatus_t)
 *
 * @returns {Struct.SteamAppsIsTimedTrialResult} 
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
 * @returns {String} 
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
 * @returns {String} 
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
 * @param {Function} callback The function to call upon completion.
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
 * @returns {String}
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
 * See: ${struct.SteamAppsDlcInstalled}
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

// STRUCTS

/**
 * @struct SteamAppsFileDetailsResult
 * @description > **Steamworks Struct**: [ISteamApps::FileDetailsResult_t](https://partner.steamgames.com/doc/api/ISteamApps#FileDetailsResult_t)
 *
 * This struct holds information received after requesting the details of a specific file.
 *
 * @member {Enum.SteamApiResult} result Was the call successful? `SteamApiResult.Ok` if it was; otherwise, `SteamApiResult.FileNotFound` if the file was not found. None of the other fields are filled out if the call was not successful.
 * @member {Real} file_size The original file size in bytes.
 * @member {Real} flags The file's flags.
 * @member {String} sha1 The original file SHA-1 hash.
 * @struct_end
 */

/**
 * @struct SteamAppsDlcData
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds metadata about a DLC.
 *
 * @member {Real} app_id The App ID of the DLC.
 * @member {Bool} available Whether the DLC is currently available on the Steam store. Will be `false` if the DLC does not have a visible store page.
 * @member {String} name The name of the DLC.
 * @struct_end 
 */

/**
 * @struct SteamAppsIsTimedTrialResult
 * @description > **Steamworks Struct**: N / A
 * 
 * This struct holds information about a timed trial.
 * 
 * @member {Real} seconds_allowed The number of seconds the timed trial will last.
 * @member {Real} seconds_played The number of seconds that the user has played so far.
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
 * @member {Real} flags Set of flags (${constant.SteamAppsBetaBranchFlags}) describing current branch state.
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
 * @member {Real} bytes_downloaded The number of bytes downloaded.
 * @member {Real} bytes_total The total size of the download in bytes.
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

// CONSTANTS

/**
 * @enum SteamAppsBetaBranchFlags
 * @description > **Steamworks Enum**: [EBetaBranchFlags](https://github.com/ValveSoftware/GameNetworkingSockets/blob/master/include/steam/steamclientpublic.h#L464)
 * 
 * This enum holds the possible flags describing current branch state.
 * 
 * @member None None.
 * @member Default The default branch ("public").
 * @member Available This branch can be selected (available).
 * @member Private This is a private branch (password protected).
 * @member Selected This is the currently selected branch (active).
 * @member Installed This is the currently installed branch (mounted).
 * @enum_end 
 */

// MODULE

/**
 * @module apps
 * @title Apps
 * @desc > **Steamworks Interface**: [ISteamApps](https://partner.steamgames.com/doc/api/ISteamApps)
 * 
 * This module exposes a wide range of information and actions for applications and [Downloadable Content (DLC)](https://partner.steamgames.com/doc/store/application/dlc).
 * 
 * @section_func Functions
 * @desc These are the functions of the Apps module:
 * @ref steam_apps_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Apps module:
 * @ref SteamApps*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Apps module:
 * @ref SteamApps*
 * @section_end
 * @module_end
 */
