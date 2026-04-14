// gm_steam_apps.cpp
//
// Steamworks module: apps (ISteamApps)

#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteamapps.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <algorithm>

using namespace gm_structs;

static inline ISteamApps* steam_apps_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Apps: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamApps* a = SteamApps();
    if (!a)
        steam_set_last_error("Steam Apps: SteamApps() returned NULL.");

    return a;
}

SteamAppsDlcData steam_apps_get_dlc_data_by_index(std::int32_t iDLC)
{
    STEAM_GUARD_RET({});

    SteamAppsDlcData out {};
    out.ok = false;
    out.app_id = 0;
    out.available = false;
    out.name = "";

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    AppId_t appId = 0;
    bool available = false;

    uint32 cchNameBufferSize = 1024;
    std::vector<char> nameBuf((size_t)cchNameBufferSize);
    nameBuf[0] = '\0';

    const bool ok = a->BGetDLCDataByIndex(iDLC, &appId, &available, nameBuf.data(), (int)nameBuf.size());
    out.ok = ok;

    if (!ok) {
        steam_set_last_error("BGetDLCDataByIndex failed.");
        return out;
    }

    out.app_id = (std::uint32_t)appId;
    out.available = available;
    out.name = std::string(nameBuf.data());
    return out;
}

bool steam_apps_is_app_installed(std::uint32_t appID)
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsAppInstalled((AppId_t)appID);
}

bool steam_apps_is_cybercafe()
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsCybercafe();
}

bool steam_apps_is_dlc_installed(std::uint32_t appID)
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsDlcInstalled((AppId_t)appID);
}

bool steam_apps_is_low_violence()
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsLowViolence();
}

bool steam_apps_is_subscribed()
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsSubscribed();
}

bool steam_apps_is_subscribed_app(std::uint32_t appID)
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsSubscribedApp((AppId_t)appID);
}

bool steam_apps_is_subscribed_from_family_sharing()
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsSubscribedFromFamilySharing();
}

bool steam_apps_is_subscribed_from_free_weekend()
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsSubscribedFromFreeWeekend();
}

SteamAppsTimedTrialStatus steam_apps_is_timed_trial()
{
    STEAM_GUARD_RET({});

    SteamAppsTimedTrialStatus out {};
    out.ok = false;
    out.seconds_allowed = 0;
    out.seconds_played = 0;

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    uint32 allowed = 0;
    uint32 played = 0;

    const bool ok = a->BIsTimedTrial(&allowed, &played);
    out.ok = ok;

    if (!ok) {
        return out;
    }

    out.seconds_allowed = allowed;
    out.seconds_played = played;
    return out;
}

bool steam_apps_is_vac_banned()
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->BIsVACBanned();
}

std::int32_t steam_apps_get_app_build_id()
{
    STEAM_GUARD_RET(0);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return 0;

    return (std::int32_t)a->GetAppBuildId();
}

SteamAppsInstallDir steam_apps_get_app_install_dir(std::uint32_t appID)
{
    STEAM_GUARD_RET({});

    SteamAppsInstallDir out {};
    out.bytes_copied = 0;
    out.path = "";

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    uint32 cchFolderBufferSize = 1024;
    std::vector<char> buf((size_t)cchFolderBufferSize);
    buf[0] = '\0';

    const uint32 bytes = a->GetAppInstallDir((AppId_t)appID, buf.data(), (uint32)buf.size());
    out.bytes_copied = bytes;

    if (bytes == 0)
        return out;

    out.path = std::string(buf.data());
    return out;
}

std::uint64_t steam_apps_get_app_owner()
{
    STEAM_GUARD_RET(0);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return 0;

    CSteamID owner = a->GetAppOwner();
    return steam_u64_from_steam_id(owner);
}

std::string steam_apps_get_available_game_languages()
{
    STEAM_GUARD_RET("");
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return "";

    const char* s = a->GetAvailableGameLanguages();
    return s ? std::string(s) : std::string();
}

SteamAppsBetaName steam_apps_get_current_beta_name()
{
    STEAM_GUARD_RET({});

    SteamAppsBetaName out {};
    out.ok = false;
    out.name = "";

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    std::int32_t cchNameBufferSize = 1024;
    if (cchNameBufferSize <= 0) {
        steam_set_last_error("GetCurrentBetaName: cchNameBufferSize must be > 0.");
        return out;
    }

    std::vector<char> buf((size_t)cchNameBufferSize);
    buf[0] = '\0';

    const bool ok = a->GetCurrentBetaName(buf.data(), (int)buf.size());
    out.ok = ok;

    if (!ok)
        return out;

    out.name = std::string(buf.data());
    return out;
}

SteamAppsNumBetas steam_apps_get_num_betas()
{
    STEAM_GUARD_RET({});

    SteamAppsNumBetas out {};
    out.total = 0;
    out.available = 0;
    out.private_count = 0;

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    int available = 0;
    int priv = 0;

#if defined(STEAMAPPS_INTERFACE_VERSION)
    // We cannot reliably branch by interface macro; keep a conservative approach:
#endif

    const int total = a->GetNumBetas(&available, &priv);

    out.total = (std::int32_t)total;
    out.available = (std::int32_t)available;
    out.private_count = (std::int32_t)priv;
    return out;
}

SteamAppsBetaInfo
steam_apps_get_beta_info(std::int32_t iBetaIndex)
{
    STEAM_GUARD_RET({});

    SteamAppsBetaInfo out {};
    out.ok = false;
    out.flags = 0;
    out.build_id = 0;
    out.beta_name = "";
    out.description = "";

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    uint32 cchBetaName = 1024;
    uint32 cchDescription = 1024;
    std::vector<char> nameBuf((size_t)cchBetaName);
    std::vector<char> descBuf((size_t)cchDescription);
    nameBuf[0] = '\0';
    descBuf[0] = '\0';

    uint32 flags = 0;
    uint32 buildId = 0;

    bool success = a->GetBetaInfo(
        iBetaIndex,
        &flags,
        &buildId,
        nameBuf.data(),
        cchBetaName,
        descBuf.data(),
        cchDescription
    );

    out.ok = success;
    if (!success)
        return out;

    out.flags = (std::uint32_t)flags;
    out.build_id = (std::uint32_t)buildId;
    out.beta_name = std::string(nameBuf.data());
    out.description = std::string(descBuf.data());
    return out;
}

bool steam_apps_set_active_beta(std::string_view pchBetaName)
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    std::string beta(pchBetaName);
    const bool ok = a->SetActiveBeta(beta.c_str());

    if (!ok)
        steam_set_last_error("SetActiveBeta failed (Steam returned false).");

    return ok;
}

std::string steam_apps_get_current_game_language()
{
    STEAM_GUARD_RET("");
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return "";

    const char* s = a->GetCurrentGameLanguage();
    return s ? std::string(s) : std::string();
}

std::int32_t steam_apps_get_dlc_count()
{
    STEAM_GUARD_RET(0);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return 0;

    return (std::int32_t)a->GetDLCCount();
}

SteamAppsDlcDownloadProgress steam_apps_get_dlc_download_progress(std::uint32_t nAppID)
{
    STEAM_GUARD_RET({});

    SteamAppsDlcDownloadProgress out {};
    out.ok = false;
    out.bytes_downloaded = 0;
    out.bytes_total = 0;

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    uint64 downloaded = 0;
    uint64 total = 0;
    const bool ok = a->GetDlcDownloadProgress((AppId_t)nAppID, &downloaded, &total);

    out.ok = ok;
    if (!ok)
        return out;

    out.bytes_downloaded = (std::uint64_t)downloaded;
    out.bytes_total = (std::uint64_t)total;
    return out;
}

std::uint32_t steam_apps_get_earliest_purchase_unix_time(std::uint32_t nAppID)
{
    STEAM_GUARD_RET(0);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return 0;

    return (std::uint32_t)a->GetEarliestPurchaseUnixTime((AppId_t)nAppID);
}

std::vector<std::uint32_t> steam_apps_get_installed_depots(std::uint32_t appID, std::uint32_t cMaxDepots)
{
    std::vector<std::uint32_t> out;

    STEAM_GUARD_RET(out);

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    if (cMaxDepots == 0)
        return out;

    std::vector<DepotId_t> depots;
    depots.resize((size_t)cMaxDepots);

    const uint32 n = a->GetInstalledDepots((AppId_t)appID, depots.data(), (uint32)depots.size());

    out.reserve((size_t)n);
    for (uint32 i = 0; i < n; ++i)
        out.push_back((std::uint32_t)depots[(size_t)i]);

    return out;
}

SteamAppsLaunchCommandLine steam_apps_get_launch_command_line(std::int32_t cubCommandLine)
{
    STEAM_GUARD_RET({});

    SteamAppsLaunchCommandLine out {};
    out.bytes_copied = 0;
    out.command_line = "";

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return out;

    if (cubCommandLine <= 0) {
        steam_set_last_error("GetLaunchCommandLine: cubCommandLine must be > 0.");
        return out;
    }

    std::vector<char> buf((size_t)cubCommandLine);
    buf[0] = '\0';

    const int bytes = a->GetLaunchCommandLine(buf.data(), (int)buf.size());
    out.bytes_copied = bytes;

    if (bytes <= 0)
        return out;

    out.command_line = std::string(buf.data());
    return out;
}

std::string steam_apps_get_launch_query_param(std::string_view pchKey)
{
    STEAM_GUARD_RET("");
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return "";

    std::string key(pchKey);
    const char* s = a->GetLaunchQueryParam(key.c_str());
    return s ? std::string(s) : std::string();
}

void steam_apps_install_dlc(std::uint32_t nAppID)
{
    STEAM_GUARD();
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return;

    a->InstallDLC((AppId_t)nAppID);
}

bool steam_apps_mark_content_corrupt(bool bMissingFilesOnly)
{
    STEAM_GUARD_RET(false);
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return false;

    return a->MarkContentCorrupt(bMissingFilesOnly);
}

void steam_apps_request_all_proof_of_purchase_keys()
{
    STEAM_GUARD();
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return;

    // Deprecated by Valve, but still present in many SDKs.
    a->RequestAllProofOfPurchaseKeys();
}

void steam_apps_request_app_proof_of_purchase_key(std::uint32_t nAppID)
{
    STEAM_GUARD();
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return;

    // Deprecated by Valve, but still present in many SDKs.
    a->RequestAppProofOfPurchaseKey((AppId_t)nAppID);
}

void steam_apps_uninstall_dlc(std::uint32_t nAppID)
{
    STEAM_GUARD();
    ISteamApps* a = steam_apps_iface();
    if (!a)
        return;

    a->UninstallDLC((AppId_t)nAppID);
}

static inline gm_structs::SteamAppsFileDetailsResult apps_fromNative(const FileDetailsResult_t& e)
{
    gm_structs::SteamAppsFileDetailsResult out{};
    out.result = (int32)e.m_eResult;
    out.file_size = (int32)e.m_ulFileSize;
    out.flags = (int32)e.m_unFlags;

    char hex[41] = {};
    static const char* kHex = "0123456789abcdef";
    for (int i = 0; i < 20; ++i)
    {
        unsigned char b = e.m_FileSHA[i];
        hex[i*2 + 0] = kHex[(b >> 4) & 0xF];
        hex[i*2 + 1] = kHex[b & 0xF];
    }
    hex[40] = '\0';
    out.sha1 = hex;
    return out;
}

void steam_apps_get_file_details(std::string_view filename,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamApps* a = steam_apps_iface();
    if (!a)
        return;

    std::string fn(filename);
    SteamAPICall_t call = a->GetFileDetails(fn.c_str());

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamAppsFileDetailsResult, FileDetailsResult_t>(callback.value(), &apps_fromNative);
        h->set(call);
    }
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_apps_dlc_installed = nullptr;

static inline gm_structs::SteamAppsDlcInstalled apps_fromNative(const DlcInstalled_t& e)
{
    gm_structs::SteamAppsDlcInstalled out{};
    out.app_id = (std::uint32_t)e.m_nAppID;
    return out;
}

class SteamApps_PersistentCallbacks
{
public:
    STEAM_CALLBACK(SteamApps_PersistentCallbacks, OnDlcInstalled, DlcInstalled_t);
};

void SteamApps_PersistentCallbacks::OnDlcInstalled(DlcInstalled_t* p)
{
    if (!p) return;

    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_apps_dlc_installed;
    }

    if (cb)
        cb.call(apps_fromNative(*p));
}

static SteamApps_PersistentCallbacks g_apps_persistent_callbacks;

void steam_apps_set_callback_dlc_installed(const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_apps_dlc_installed = callback;
}

void steam_apps_clear_callback_dlc_installed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_apps_dlc_installed = nullptr;
}

#include "steam/isteamappticket.h"
#include <mutex>
std::uint32_t steam_apps_get_app_ownership_ticket_data(
    std::uint32_t app_id,
    gm::wire::GMBuffer ticket_buffer,
    std::uint32_t max_bytes)
{
    STEAM_GUARD_RET(0);

    if (/*!ticket_buffer.is_valid() ||*/ max_bytes == 0)
        return 0;

    ISteamClient* client = SteamClient();
    if (!client)
        return 0;

    ISteamAppTicket* appTicket =
        (ISteamAppTicket*)client->GetISteamGenericInterface(
            SteamAPI_GetHSteamUser(),
            SteamAPI_GetHSteamPipe(),
            STEAMAPPTICKET_INTERFACE_VERSION
        );

    if (!appTicket)
    {
        steam_set_last_error("GetISteamGenericInterface returned NULL for ISteamAppTicket");
        return 0;
    }

    std::vector<std::uint8_t> tmp((size_t)max_bytes);

    uint32 outAppId = 0;
    uint32 outAccountId = 0;          // NOTE: accountID, not SteamID64
    uint32 sigOffset = 0;             // offset into blob where signature starts
    uint32 sigSize = 0;               // signature size in bytes

    const uint32 written = appTicket->GetAppOwnershipTicketData(
        (uint32)app_id,
        (void*)tmp.data(),
        (uint32)tmp.size(),
        &outAppId,
        &outAccountId,
        &sigOffset,
        &sigSize
    );

    if (written == 0)
        return 0;

    if (sigOffset > written) sigOffset = written;
    if (sigOffset + sigSize > written) sigSize = (written > sigOffset) ? (written - sigOffset) : 0;

    auto w = ticket_buffer.getWriter();
    w.writeBytes((const char*)tmp.data(), (int)written);
    
    return (std::uint32_t)written;
}
