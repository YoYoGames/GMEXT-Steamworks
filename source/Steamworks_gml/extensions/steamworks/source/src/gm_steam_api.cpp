// gm_steam_api.cpp
//
// Steamworks module: api (steam_api.h page)
// Naming: steam_api_*
//
// This translation unit implements only the functions declared in the
// steam_api page/spec and relies on shared core utilities declared in
// GMSteamworks.h and defined in GMSteamworks_core.cpp.

#include "GMSteamworks.h"

#include <cstdint>
#include <string>
#include <string_view>
#include <filesystem>
#include <fstream>
#include <system_error>
#include <exception>
#include <cstdlib>

#if defined(_WIN32)
#include <windows.h>
#elif defined(__APPLE__)
#include <mach-o/dyld.h>
#include <limits.h>
#else
#include <unistd.h>
#include <limits.h>
#endif

// ============================================================
// Local helpers
// ============================================================

static std::filesystem::path steam_api_get_executable_dir()
{
#if defined(_WIN32)
    wchar_t path_buf[MAX_PATH] = {};
    const DWORD len = GetModuleFileNameW(nullptr, path_buf, MAX_PATH);
    if (len == 0 || len >= MAX_PATH)
        return std::filesystem::current_path();

    return std::filesystem::path(path_buf).parent_path();

#elif defined(__APPLE__)
    uint32_t size = 0;
    _NSGetExecutablePath(nullptr, &size);
    if (size == 0)
        return std::filesystem::current_path();

    std::string path_buf(size, '\0');
    if (_NSGetExecutablePath(path_buf.data(), &size) != 0)
        return std::filesystem::current_path();

    std::error_code ec;
    auto exe_path = std::filesystem::weakly_canonical(std::filesystem::path(path_buf.c_str()), ec);
    if (ec)
        return std::filesystem::path(path_buf.c_str()).parent_path();

    return exe_path.parent_path();
#else
    char path_buf[PATH_MAX] = {};
    const ssize_t len = readlink("/proc/self/exe", path_buf, sizeof(path_buf) - 1);
    if (len <= 0)
        return std::filesystem::current_path();

    path_buf[len] = '\0';

    std::error_code ec;
    auto exe_path = std::filesystem::weakly_canonical(std::filesystem::path(path_buf), ec);
    if (ec)
        return std::filesystem::path(path_buf).parent_path();

    return exe_path.parent_path();
#endif
}

static bool steam_api_try_write_appid_file(uint32_t app_id, const std::filesystem::path& path)
{
    std::ofstream out(path, std::ios::trunc);
    if (!(out && (out << app_id))) {
        TRACE("Debug: Unable to open the file or write the AppID, check file permissions?");
        return false;
    }

    TRACE("Debug: Wrote AppID without errors.");
    return true;
}

static void steam_api_try_remove_appid_file(const std::filesystem::path& path)
{
    try {
        if (std::filesystem::remove(path)) {
            TRACE("Debug: steam_appid.txt file deleted successfully.");
        } else {
            TRACE("Debug: steam_appid.txt file not found.");
        }
    } catch (const std::filesystem::filesystem_error& err) {
        TRACE("Debug: Filesystem error - %s", err.what());
    } catch (const std::exception& ex) {
        TRACE("Debug: Error - %s", ex.what());
    }
}

static bool steam_api_get_debug_mode()
{
    const std::string debug_opt =
        gm::ExtUtils::GetExtensionOption("Steamworks", "debug");

    return (debug_opt == "Enabled");
}

static void steam_api_clear_all_callbacks()
{
    // apps
    steam_apps_clear_callback_dlc_installed();

    // friends
    steam_friends_clear_callback_avatar_image_loaded();
    steam_friends_clear_callback_persona_state_change();
    steam_friends_clear_callback_game_overlay_activated();
    steam_friends_clear_callback_game_rich_presence_join_requested();
    steam_friends_clear_callback_game_lobby_join_requested();
    steam_friends_clear_callback_friend_rich_presence_update();
    steam_friends_clear_callback_game_server_change_requested();

    // input
    steam_input_clear_callback_device_connected();
    steam_input_clear_callback_device_disconnected();
    steam_input_clear_callback_action_set_changed();
    steam_input_clear_callback_controller_battery();

    // inventory
    steam_inventory_clear_callback_result_ready();
    steam_inventory_clear_callback_full_update();
    steam_inventory_clear_callback_definition_update();

    // matchmaking
    steam_matchmaking_clear_callback_lobby_data_update();
    steam_matchmaking_clear_callback_lobby_chat_update();
    steam_matchmaking_clear_callback_lobby_chat_msg();
    steam_matchmaking_clear_callback_lobby_game_created();
    steam_matchmaking_clear_callback_lobby_invite();

    // music
    steam_music_clear_callback_playback_status_has_changed();
    steam_music_clear_callback_volume_has_changed();

    // networking messages
    steam_networking_messages_clear_callback_session_request();
    steam_networking_messages_clear_callback_session_failed();

    // networking sockets
    steam_networking_sockets_clear_callback_connection_status_changed();

    // parties
    steam_parties_clear_callback_reservation_notification();
    steam_parties_clear_callback_active_beacons_updated();
    steam_parties_clear_callback_available_beacon_locations_updated();

    // remote storage
    steam_remote_storage_clear_callback_local_file_change();
    steam_remote_storage_clear_callback_published_file_subscribed();
    steam_remote_storage_clear_callback_published_file_unsubscribed();

    // screenshots
    steam_screenshots_clear_callback_screenshot_requested();
    steam_screenshots_clear_callback_screenshot_ready();

    // timeline
    steam_timeline_clear_callback_event_recording_exists();
    steam_timeline_clear_callback_game_phase_recording_exists();

    // ugc
    steam_ugc_clear_callback_item_installed();
    // steam_ugc_clear_callback_download_item_result();
    steam_ugc_clear_callback_user_subscribed_items_list_changed();
    steam_ugc_clear_callback_file_subscribed();
    steam_ugc_clear_callback_file_unsubscribed();

    // user
    steam_user_clear_callback_steam_servers_connected();
    steam_user_clear_callback_steam_server_connect_failure();
    steam_user_clear_callback_steam_servers_disconnected();
    steam_user_clear_callback_client_game_server_deny();
    steam_user_clear_callback_licenses_updated();
    steam_user_clear_callback_microtxn_authorization_response();

    // userstats
    steam_userstats_clear_callback_user_stats_received();
    steam_userstats_clear_callback_user_stats_stored();
    steam_userstats_clear_callback_user_achievement_stored();

    // utils
    steam_utils_clear_callback_gamepad_text_input_dismissed();
    steam_utils_clear_callback_floating_gamepad_text_input_dismissed();
    steam_utils_clear_callback_warning_message();
    steam_utils_clear_callback_ip_country();
    steam_utils_clear_callback_low_battery_power();
    steam_utils_clear_callback_steam_api_call_completed();
    steam_utils_clear_callback_app_resuming_from_suspend();
    steam_utils_clear_callback_steam_shutdown();
}

// ============================================================
// steam_api.h mapping (same order as the page/spec)
// ============================================================

void steamworks_pregraphics_init_func()
{
    auto app_id = gm::ExtUtils::GetExtensionOption("Steamworks", "appID");
    if (app_id.empty())
        return;

    try {
        steam_api_init(static_cast<uint32_t>(std::stoul(app_id)));
    } catch (const std::exception&) {
        steam_set_last_error("Steam API: invalid Steamworks appID extension option.");
        steam_set_initialized(false);
    }
}
GM_REGISTER_INIT_HOOK(steamworks_pregraphics_init_func); // Pre-graphics INIT

bool steam_api_is_initialized()
{
    return g_steam_initialized.load();
}

// SteamAPI_Init
bool steam_api_init(uint32_t unOwnAppID)
{
    steam_clear_last_error();

    if (steam_api_is_initialized())
        return true;

    if (unOwnAppID == k_uAppIdInvalid || unOwnAppID == 0) {
        steam_set_last_error("Invalid AppID, check extension settings in IDE, check file permissions.");
        steam_set_initialized(false);
        return false;
    }

    const bool debug = steam_api_get_debug_mode();

    std::filesystem::path steamAppIdTxtPath = steam_api_get_executable_dir();
    steamAppIdTxtPath /= "steam_appid.txt";

    if (debug) {
        TRACE("Debug: Writing AppID %u to file %s",
              static_cast<unsigned int>(unOwnAppID),
              steamAppIdTxtPath.string().c_str());

        steam_api_try_write_appid_file(unOwnAppID, steamAppIdTxtPath);
        // Intentionally do not fail here; same as YoYo approach.
    } else {
        steam_api_try_remove_appid_file(steamAppIdTxtPath);

        // https://partner.steamgames.com/doc/sdk/api#initialization_and_shutdown
        if (SteamAPI_RestartAppIfNecessary(static_cast<AppId_t>(unOwnAppID))) {
            TRACE("RestartAppIfNecessary check failed, the game is not allowed to continue");
            steam_set_last_error("Steam API: restart through Steam is required.");
            steam_set_initialized(false);
            std::exit(0); // match YoYo behavior as closely as possible
            return false;
        }
    }

    SteamErrMsg errMsg = {};
    if (SteamAPI_InitEx(&errMsg) != k_ESteamAPIInitResult_OK) {
        if (errMsg[0] != '\0') {
            TRACE("Failed to init Steam.\n%s", errMsg);
            steam_set_last_error(errMsg);
        } else {
            TRACE("SteamAPI_InitEx had failed, please check your Steamworks SDK path and that Steam is running! See Output above for possible errors.");
            steam_set_last_error(
                "SteamAPI_InitEx failed, please check that Steam is running and the Steamworks runtime is available."
            );
        }

        steam_set_initialized(false);
        return false;
    }

    TRACE("SteamAPI_Init had succeeded without errors, debug flag = %d", debug ? 1 : 0);
    steam_set_initialized(true);
    return true;
}

// SteamAPI_ReleaseCurrentThreadMemory
void steam_api_release_current_thread_memory()
{
    STEAM_GUARD();
    SteamAPI_ReleaseCurrentThreadMemory();
}

// SteamAPI_RestartAppIfNecessary
bool steam_api_restart_app_if_necessary(uint32_t unOwnAppID)
{
    return (SteamAPI_RestartAppIfNecessary(static_cast<AppId_t>(unOwnAppID)) != 0);
}

// SteamAPI_RunCallbacks
void steam_api_run_callbacks()
{
    STEAM_GUARD();
    SteamAPI_RunCallbacks();
}

// SteamAPI_Shutdown
void steam_api_shutdown()
{
    STEAM_GUARD();

    if (!steam_api_is_initialized())
        return;

    steam_api_clear_all_callbacks();

    SteamAPI_Shutdown();
    steam_set_initialized(false);
}