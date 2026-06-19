// gm_steam_user.cpp
//
// Steamworks module: user (ISteamUser)
// Naming: steam_user_*

#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteamuser.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <algorithm>
#include <mutex>

using namespace gm::wire;
using namespace gm_structs;
using namespace gm_enums;

static inline ISteamUser* steam_user_iface()
{
    if (!steam_api_is_initialized())
    {
        steam_set_last_error("Steam User: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamUser* u = SteamUser();
    if (!u)
        steam_set_last_error("Steam User: SteamUser() returned NULL.");

    return u;
}

void steam_user_advertise_game(std::uint64_t steam_id_game_server,
                               std::uint32_t server_ip,
                               std::uint32_t server_port)
{
    STEAM_GUARD();
    ISteamUser* u = steam_user_iface();
    if (!u) return;

    std::uint16_t port16 = 0;
    if (!steam_u32_to_u16_checked(server_port, port16))
    {
        steam_set_last_error("AdvertiseGame: port out of range (must be 0..65535).");
        return;
    }

    u->AdvertiseGame(steam_id_from_u64(steam_id_game_server), (uint32)server_ip, (uint16)port16);
}

SteamUserBeginAuthSessionResult
steam_user_begin_auth_session(gm::wire::GMBuffer auth_ticket,
                              std::int32_t auth_ticket_size,
                              std::uint64_t steam_id)
{
    STEAM_GUARD_RET(SteamUserBeginAuthSessionResult::InvalidTicket);
    ISteamUser* u = steam_user_iface();
    if (!u) return SteamUserBeginAuthSessionResult::InvalidTicket;

    if (auth_ticket_size <= 0)
    {
        steam_set_last_error("BeginAuthSession: auth_ticket_size must be > 0.");
        return SteamUserBeginAuthSessionResult::InvalidTicket;
    }

    std::vector<std::uint8_t> tmp((size_t)auth_ticket_size);
    auto reader = auth_ticket.getReader();
    reader.readBytes((char*)tmp.data(), auth_ticket_size);

    EBeginAuthSessionResult r = u->BeginAuthSession(tmp.data(), auth_ticket_size, steam_id_from_u64(steam_id));
    return (SteamUserBeginAuthSessionResult)(int)r;
}

bool steam_user_is_behind_nat()
{
    STEAM_GUARD_RET(false);
    ISteamUser* u = steam_user_iface();
    if (!u) return false;

    return u->BIsBehindNAT();
}

bool steam_user_is_phone_identifying()
{
    STEAM_GUARD_RET(false);
    ISteamUser* u = steam_user_iface();
    if (!u) return false;

    return u->BIsPhoneIdentifying();
}

bool steam_user_is_phone_requiring_verification()
{
    STEAM_GUARD_RET(false);
    ISteamUser* u = steam_user_iface();
    if (!u) return false;

    return u->BIsPhoneRequiringVerification();
}

bool steam_user_is_phone_verified()
{
    STEAM_GUARD_RET(false);
    ISteamUser* u = steam_user_iface();
    if (!u) return false;

    return u->BIsPhoneVerified();
}

bool steam_user_is_two_factor_enabled()
{
    STEAM_GUARD_RET(false);
    ISteamUser* u = steam_user_iface();
    if (!u) return false;

    return u->BIsTwoFactorEnabled();
}

bool steam_user_logged_on()
{
    STEAM_GUARD_RET(false);
    ISteamUser* u = steam_user_iface();
    if (!u) return false;

    return u->BLoggedOn();
}

bool steam_user_set_duration_control_online_state(SteamUserDurationControlOnlineState state)
{
    STEAM_GUARD_RET(false);
    
    ISteamUser* u = steam_user_iface();
    if (!u) return false;

    return u->BSetDurationControlOnlineState((EDurationControlOnlineState)(int)state);
}

void steam_user_cancel_auth_ticket(std::uint32_t h_auth_ticket)
{
    STEAM_GUARD();
    ISteamUser* u = steam_user_iface();
    if (!u) return;

    u->CancelAuthTicket((HAuthTicket)h_auth_ticket);
}

SteamApiVoiceResult steam_user_decompress_voice(
    gm::wire::GMBuffer compressed,
    std::uint32_t compressed_size,
    gm::wire::GMBuffer dest,
    std::uint32_t dest_buffer_size,
    std::uint32_t desired_sample_rate)
{
    STEAM_GUARD_RET(SteamApiVoiceResult::NotInitialized);
    ISteamUser* u = steam_user_iface();
    if (!u) return SteamApiVoiceResult::NotInitialized;

    if (compressed_size == 0 || dest_buffer_size == 0)
    {
        steam_set_last_error("DecompressVoice: compressed_size and dest_buffer_size must be > 0.");
        return SteamApiVoiceResult::BufferTooSmall;
    }

    std::vector<std::uint8_t> in((size_t)compressed_size);
    {
        auto r = compressed.getReader();
        r.readBytes((char*)in.data(), (int)compressed_size);
    }

    std::vector<std::uint8_t> out((size_t)dest_buffer_size);
    uint32 written = 0;

    EVoiceResult vr = u->DecompressVoice(
        in.data(),
        (uint32)compressed_size,
        out.data(),
        (uint32)out.size(),
        &written,
        (uint32)desired_sample_rate
    );

    if (written > 0)
    {
        const uint32 n = std::min<uint32>(written, (uint32)out.size());
        auto w = dest.getWriter();
        w.writeBytes((const char*)out.data(), (int)n);
    }

    return (SteamApiVoiceResult)(int)vr;
}

void steam_user_end_auth_session(std::uint64_t steam_id)
{
    STEAM_GUARD();
    ISteamUser* u = steam_user_iface();
    if (!u) return;

    u->EndAuthSession(steam_id_from_u64(steam_id));
}

static bool steam_fill_networking_identity(
    const gm_structs::SteamNetworkingIdentity& src,
    ::SteamNetworkingIdentity& dst)
{
    dst.Clear();

    switch ((int)src.type)
    {
        case (int)gm_enums::SteamNetworkingIdentityType::Invalid:
        {
            steam_set_last_error("SteamNetworkingIdentity: Invalid cannot be passed as a concrete identity. Use undefined/null to pass nullptr.");
            return false;
        }

        case (int)gm_enums::SteamNetworkingIdentityType::SteamId:
        {
            const std::uint64_t sid = (std::uint64_t)src.steam_id;
            if (sid == 0)
            {
                steam_set_last_error("SteamNetworkingIdentity: steam_id must be non-zero.");
                return false;
            }

            dst.SetSteamID64((uint64)sid);
            return true;
        }

        case (int)gm_enums::SteamNetworkingIdentityType::IpAddress:
        {
            SteamNetworkingIPAddr addr;
            addr.Clear();

            if (!addr.ParseString(src.ip.c_str()))
            {
                steam_set_last_error("SteamNetworkingIdentity: invalid IP address string.");
                return false;
            }

            std::uint16_t port16 = 0;
            if (!steam_u32_to_u16_checked(src.port, port16))
            {
                steam_set_last_error("SteamNetworkingIdentity: port out of range (must be 0..65535).");
                return false;
            }

            addr.m_port = port16;
            dst.SetIPAddr(addr);
            return true;
        }

        case (int)gm_enums::SteamNetworkingIdentityType::GenericString:
        {
            if (src.generic_string.empty())
            {
                steam_set_last_error("SteamNetworkingIdentity: generic_string cannot be empty.");
                return false;
            }

            dst.SetGenericString(src.generic_string.c_str());
            return true;
        }

        // case (int)gm_enums::SteamNetworkingIdentityType::GenericBytes:
        // {
        //     const std::uint32_t n = src.generic_bytes_size;
        //     if (n == 0)
        //     {
        //         steam_set_last_error("SteamNetworkingIdentity: generic_bytes_size must be > 0.");
        //         return false;
        //     }

        //     std::vector<std::uint8_t> tmp((size_t)n);
        //     {
        //         auto r = src.generic_bytes.getReader();
        //         r.readBytes((char*)tmp.data(), (int)n);
        //     }

        //     dst.SetGenericBytes(tmp.data(), (uint32)n);
        //     return true;
        // }

        default:
        {
            steam_set_last_error("SteamNetworkingIdentity: unsupported identity type.");
            return false;
        }
    }
}

gm_structs::SteamUserAuthSessionTicket steam_user_get_auth_session_ticket(
    gm::wire::GMBuffer out_ticket,
    std::int32_t max_ticket_size,
    const std::optional<gm_structs::SteamNetworkingIdentity>& remote_identity)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUserAuthSessionTicket out{};
    out.auth_ticket_handle = 0;
    out.ticket_size = 0;

    ISteamUser* u = steam_user_iface();
    if (!u) return out;

    if (max_ticket_size <= 0)
    {
        steam_set_last_error("GetAuthSessionTicket: max_ticket_size must be > 0.");
        return out;
    }

    std::vector<std::uint8_t> buf((size_t)max_ticket_size);
    uint32 pcbTicket = 0;

    ::SteamNetworkingIdentity native_identity;
    ::SteamNetworkingIdentity* p_remote = nullptr;

    if (remote_identity.has_value())
    {
        if (!steam_fill_networking_identity(*remote_identity, native_identity))
            return out;

        p_remote = &native_identity;
    }

    HAuthTicket h = u->GetAuthSessionTicket(
        buf.data(),
        max_ticket_size,
        &pcbTicket,
        p_remote
    );

    out.auth_ticket_handle = (std::uint32_t)h;
    out.ticket_size = pcbTicket;

    if (pcbTicket > 0)
    {
        const uint32 n = std::min<uint32>(pcbTicket, (uint32)buf.size());
        auto w = out_ticket.getWriter();
        w.writeBytes((const char*)buf.data(), (int)n);
    }

    return out;
}

std::int32_t steam_user_get_h_steam_user()
{
    STEAM_GUARD_RET(0);
    ISteamUser* u = steam_user_iface();
    if (!u) return 0;

    return (std::int32_t)u->GetHSteamUser();
}

std::int32_t steam_user_get_player_steam_level()
{
    STEAM_GUARD_RET(0);
    ISteamUser* u = steam_user_iface();
    if (!u) return 0;

    return (std::int32_t)u->GetPlayerSteamLevel();
}

std::uint64_t steam_user_get_steam_id()
{
    STEAM_GUARD_RET(0);

    ISteamUser* u = steam_user_iface();
    if (!u) return {};

    return u->GetSteamID().ConvertToUint64();
}

gm_structs::SteamId steam_user_decode_steam_id(std::uint64_t steam_id)
{
    STEAM_GUARD_RET({});

    CSteamID sid(steam_id);

    return steam_make_steam_id(sid);
}

void steam_user_start_voice_recording()
{
    STEAM_GUARD();
    ISteamUser* u = steam_user_iface();
    if (!u) return;

    u->StartVoiceRecording();
}

void steam_user_stop_voice_recording()
{
    STEAM_GUARD();
    ISteamUser* u = steam_user_iface();
    if (!u) return;

    u->StopVoiceRecording();
}

std::uint32_t steam_user_get_voice_optimal_sample_rate()
{
    STEAM_GUARD_RET(0);
    ISteamUser* u = steam_user_iface();
    if (!u) return 0;

    return (std::uint32_t)u->GetVoiceOptimalSampleRate();
}

SteamUserAvailableVoice steam_user_get_available_voice()
{
    STEAM_GUARD_RET({});

    SteamUserAvailableVoice out{};
    out.result = SteamApiVoiceResult::Ok;
    out.compressed_bytes = 0;
    out.uncompressed_bytes = 0;

    ISteamUser* u = steam_user_iface();
    if (!u)
    {
        out.result = SteamApiVoiceResult::NotInitialized;
        return out;
    }

    uint32 cbCompressed = 0;
    uint32 cbUncompressed = 0;

    EVoiceResult vr = u->GetAvailableVoice(&cbCompressed, &cbUncompressed, 0);
    out.result = (SteamApiVoiceResult)(int)vr;
    out.compressed_bytes = cbCompressed;
    out.uncompressed_bytes = cbUncompressed;
    return out;
}

SteamUserGetVoiceResult steam_user_get_voice(
    bool want_compressed,
    gm::wire::GMBuffer dest_compressed,
    std::uint32_t dest_compressed_size,
    bool want_uncompressed,
    gm::wire::GMBuffer dest_uncompressed,
    std::uint32_t dest_uncompressed_size,
    std::uint32_t desired_sample_rate)
{
    STEAM_GUARD_RET({});

    SteamUserGetVoiceResult out{};
    out.result = SteamApiVoiceResult::Ok;
    out.written_compressed = 0;
    out.written_uncompressed = 0;

    ISteamUser* u = steam_user_iface();
    if (!u)
    {
        out.result = SteamApiVoiceResult::NotInitialized;
        return out;
    }

    std::vector<std::uint8_t> comp;
    std::vector<std::uint8_t> uncomp;

    uint32 writtenComp = 0;
    uint32 writtenUncomp = 0;

    void* pComp = nullptr;
    uint32 capComp = 0;

    void* pUncomp = nullptr;
    uint32 capUncomp = 0;

    if (want_compressed)
    {
        if (dest_compressed_size == 0)
        {
            steam_set_last_error("GetVoice: requested compressed voice but dest_compressed_size==0.");
            out.result = SteamApiVoiceResult::BufferTooSmall;
            return out;
        }
        comp.resize((size_t)dest_compressed_size);
        pComp = comp.data();
        capComp = dest_compressed_size;
    }

    if (want_uncompressed)
    {
        if (dest_uncompressed_size == 0)
        {
            steam_set_last_error("GetVoice: requested uncompressed voice but dest_uncompressed_size==0.");
            out.result = SteamApiVoiceResult::BufferTooSmall;
            return out;
        }
        uncomp.resize((size_t)dest_uncompressed_size);
        pUncomp = uncomp.data();
        capUncomp = dest_uncompressed_size;
    }

    EVoiceResult vr = u->GetVoice(
        want_compressed,
        pComp,
        capComp,
        &writtenComp,
        want_uncompressed,
        pUncomp,
        capUncomp,
        &writtenUncomp,
        (uint32)desired_sample_rate
    );

    out.result = (SteamApiVoiceResult)(int)vr;
    out.written_compressed = writtenComp;
    out.written_uncompressed = writtenUncomp;

    if (want_compressed && writtenComp > 0)
    {
        const uint32 n = std::min<uint32>(writtenComp, (uint32)comp.size());
        auto w = dest_compressed.getWriter();
        w.writeBytes((const char*)comp.data(), (int)n);
    }

    if (want_uncompressed && writtenUncomp > 0)
    {
        const uint32 n = std::min<uint32>(writtenUncomp, (uint32)uncomp.size());
        auto w = dest_uncompressed.getWriter();
        w.writeBytes((const char*)uncomp.data(), (int)n);
    }

    return out;
}


SteamUserDataFolder steam_user_get_user_data_folder()
{
    STEAM_GUARD_RET({});

    SteamUserDataFolder out{};
    out.ok = false;
    out.path = "";

    ISteamUser* u = steam_user_iface();
    if (!u) return out;

    uint32 cch_buffer = 1024;
    std::vector<char> buf((size_t)cch_buffer);
    buf[0] = '\0';

    const bool ok = u->GetUserDataFolder(buf.data(), (int)buf.size());
    out.ok = ok;

    if (!ok)
        return out;

    out.path = std::string(buf.data());
    return out;
}

SteamUserEncryptedAppTicket steam_user_get_encrypted_app_ticket(gm::wire::GMBuffer out_ticket,
                                                                    std::int32_t max_ticket_size)
{
    STEAM_GUARD_RET({});

    SteamUserEncryptedAppTicket out{};
    out.ok = false;
    out.ticket_size = 0;

    ISteamUser* u = steam_user_iface();
    if (!u) return out;

    if (max_ticket_size <= 0)
    {
        steam_set_last_error("GetEncryptedAppTicket: max_ticket_size must be > 0.");
        return out;
    }

    std::vector<std::uint8_t> buf((size_t)max_ticket_size);
    uint32 pcb = 0;

    const bool ok = u->GetEncryptedAppTicket(buf.data(), max_ticket_size, &pcb);
    out.ok = ok;

    if (!ok)
        return out;

    out.ticket_size = pcb;

    if (pcb > 0)
    {
        const uint32 n = std::min<uint32>(pcb, (uint32)buf.size());
        auto w = out_ticket.getWriter();
        w.writeBytes((const char*)buf.data(), (int)n);
    }

    return out;
}

std::int32_t steam_user_get_game_badge_level(std::int32_t series, bool foil)
{
    STEAM_GUARD_RET(0);
    ISteamUser* u = steam_user_iface();
    if (!u) return 0;

    return (std::int32_t)u->GetGameBadgeLevel(series, foil);
}

std::uint32_t steam_user_get_auth_ticket_for_web_api(std::string_view identity)
{
    STEAM_GUARD_RET(0);
    ISteamUser* u = steam_user_iface();
    if (!u) return 0;

    std::string tmp;
    const char* _identity = steam_empty_string_as_null(identity, tmp);

    HAuthTicket h = u->GetAuthTicketForWebApi(_identity);
    return (std::uint32_t)h;
}

void steam_user_track_app_usage_event(std::uint64_t game_id,
                                      std::int32_t app_usage_event,
                                      std::string_view extra_info)
{
    STEAM_GUARD();
    ISteamUser* u = steam_user_iface();
    if (!u) return;

    std::string extra(extra_info);

    CGameID gid((uint64)game_id);

    u->TrackAppUsageEvent(gid, app_usage_event, extra.c_str());
}

SteamApiUserHasLicenseResult steam_user_user_has_license_for_app(std::uint64_t steam_id,
                                                                      std::uint32_t app_id)
{
    STEAM_GUARD_RET({});
    ISteamUser* u = steam_user_iface();
    if (!u) return SteamApiUserHasLicenseResult::NoAuth;

    EUserHasLicenseForAppResult r = u->UserHasLicenseForApp(steam_id_from_u64(steam_id), (AppId_t)app_id);
    return (SteamApiUserHasLicenseResult)(int)r;
}


static inline gm_structs::SteamUserStoreAuthUrlResponse user_fromNative(const StoreAuthURLResponse_t& e)
{
    gm_structs::SteamUserStoreAuthUrlResponse out{};
    // Some SDKs don't include EResult in this struct; keep 0 if not available.
    out.result = 0;
    out.url = e.m_szURL;
    return out;
}

static inline gm_structs::SteamUserEncryptedAppTicketResponse user_fromNative(const EncryptedAppTicketResponse_t& e)
{
    gm_structs::SteamUserEncryptedAppTicketResponse out{};
    out.result = (int32)e.m_eResult;
    return out;
}

static inline gm_structs::SteamUserDurationControl user_fromNative(const DurationControl_t& e)
{
    gm_structs::SteamUserDurationControl out{};
    out.result = (int32)e.m_eResult;
    out.app_id = (std::uint32_t)e.m_appid;
    out.applicable = (e.m_bApplicable != 0);
    out.csecs_last_5h = (int32)e.m_csecsLast5h;
    out.progress = (int32)e.m_progress;
    out.notification = (int32)e.m_notification;
    return out;
}

static inline gm_structs::SteamUserMarketEligibilityResponse user_fromNative(const MarketEligibilityResponse_t& e)
{
    gm_structs::SteamUserMarketEligibilityResponse out{};
    out.allowed = (e.m_bAllowed != 0);
    out.not_allowed_reason = (int32)e.m_eNotAllowedReason;
    out.allowed_at_time = (std::uint32_t)e.m_rtAllowedAtTime;

	out.day_steam_guard_required_days = e.m_cdaySteamGuardRequiredDays;
	out.day_new_device_cooldown = e.m_cdayNewDeviceCooldown;

    return out;
}

void steam_user_request_store_auth_url(std::string_view redirect_url,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUser* u = steam_user_iface();
    if (!u) return;

    std::string url(redirect_url);
    SteamAPICall_t call = u->RequestStoreAuthURL(url.c_str());

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStoreAuthUrlResponse, StoreAuthURLResponse_t>(callback.value(), &user_fromNative);
        h->set(call);
    }
}

void steam_user_request_encrypted_app_ticket(gm::wire::GMBuffer data_to_include, std::int32_t data_to_include_size,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUser* u = steam_user_iface();
    if (!u) return;

    std::vector<std::uint8_t> tmp;
    if (data_to_include_size > 0)
    {
        tmp.resize((size_t)data_to_include_size);
        auto r = data_to_include.getReader();
        r.readBytes((char*)tmp.data(), (int)data_to_include_size);
    }

    SteamAPICall_t call = u->RequestEncryptedAppTicket(tmp.empty() ? nullptr : tmp.data(), (int)tmp.size());

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserEncryptedAppTicketResponse, EncryptedAppTicketResponse_t>(callback.value(), &user_fromNative);
        h->set(call);
    }
}

void steam_user_get_duration_control( const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUser* u = steam_user_iface();
    if (!u) return;

    SteamAPICall_t call = u->GetDurationControl();

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserDurationControl, DurationControl_t>(callback.value(), &user_fromNative);
        h->set(call);
    }
}

void steam_user_get_market_eligibility( const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUser* u = steam_user_iface();
    if (!u) return;

    SteamAPICall_t call = u->GetMarketEligibility();

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserMarketEligibilityResponse, MarketEligibilityResponse_t>(callback.value(), &user_fromNative);
        h->set(call);
    }
}


static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_user_steam_servers_connected = nullptr;
static gm::wire::GMFunction g_cb_user_steam_server_connect_failure = nullptr;
static gm::wire::GMFunction g_cb_user_steam_servers_disconnected = nullptr;
static gm::wire::GMFunction g_cb_user_client_game_server_deny = nullptr;
static gm::wire::GMFunction g_cb_user_licenses_updated = nullptr;
static gm::wire::GMFunction g_cb_user_microtxn_auth = nullptr;

static inline gm_structs::SteamUserSteamServersConnected user_fromNative(const SteamServersConnected_t&)
{
    gm_structs::SteamUserSteamServersConnected out{};
    out.dummy = 0;
    return out;
}

static inline gm_structs::SteamUserSteamServersDisconnected user_fromNative(const SteamServersDisconnected_t& e)
{
    gm_structs::SteamUserSteamServersDisconnected out{};
    out.result = (int32)e.m_eResult;
    return out;
}

static inline gm_structs::SteamUserSteamServerConnectFailure user_fromNative(const SteamServerConnectFailure_t& e)
{
    gm_structs::SteamUserSteamServerConnectFailure out{};
    out.result = (int32)e.m_eResult;
    out.still_retrying = (e.m_bStillRetrying != 0);
    return out;
}

static inline gm_structs::SteamUserClientGameServerDeny user_fromNative(const ClientGameServerDeny_t& e)
{
    gm_structs::SteamUserClientGameServerDeny out{};
    out.app_id = (std::uint32_t)e.m_uAppID;
    out.game_server_ip = (std::uint32_t)e.m_unGameServerIP;
    out.game_server_port = (std::uint32_t)e.m_usGameServerPort;
    out.secure = (e.m_bSecure != 0);
    out.reason = (int32)e.m_uReason;
    return out;
}

static inline gm_structs::SteamUserLicensesUpdated user_fromNative(const LicensesUpdated_t&)
{
    gm_structs::SteamUserLicensesUpdated out{};
    out.dummy = 0;
    return out;
}

static inline gm_structs::SteamUserMicroTxnAuthorizationResponse user_fromNative(const MicroTxnAuthorizationResponse_t& e)
{
    gm_structs::SteamUserMicroTxnAuthorizationResponse out{};
    out.app_id = (std::uint32_t)e.m_unAppID;
    out.order_id = (std::uint64_t)e.m_ulOrderID;
    out.authorized = (e.m_bAuthorized != 0);
    return out;
}

class SteamUser_PersistentCallbacks
{
public:
    STEAM_CALLBACK(SteamUser_PersistentCallbacks, OnSteamServersConnected, SteamServersConnected_t);
    STEAM_CALLBACK(SteamUser_PersistentCallbacks, OnSteamServerConnectFailure, SteamServerConnectFailure_t);
    STEAM_CALLBACK(SteamUser_PersistentCallbacks, OnSteamServersDisconnected, SteamServersDisconnected_t);
    STEAM_CALLBACK(SteamUser_PersistentCallbacks, OnClientGameServerDeny, ClientGameServerDeny_t);
    STEAM_CALLBACK(SteamUser_PersistentCallbacks, OnLicensesUpdated, LicensesUpdated_t);
    STEAM_CALLBACK(SteamUser_PersistentCallbacks, OnMicroTxnAuthorizationResponse, MicroTxnAuthorizationResponse_t);
};

void SteamUser_PersistentCallbacks::OnSteamServersConnected(SteamServersConnected_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_steam_servers_connected;
    }
    if (cb)
        cb.call(user_fromNative(*p));
}

void SteamUser_PersistentCallbacks::OnSteamServerConnectFailure(SteamServerConnectFailure_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_steam_server_connect_failure;
    }
    if (cb)
        cb.call(user_fromNative(*p));
}

void SteamUser_PersistentCallbacks::OnSteamServersDisconnected(SteamServersDisconnected_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_steam_servers_disconnected;
    }
    if (cb)
        cb.call(user_fromNative(*p));
}

void SteamUser_PersistentCallbacks::OnClientGameServerDeny(ClientGameServerDeny_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_client_game_server_deny;
    }
    if (cb)
        cb.call(user_fromNative(*p));
}

void SteamUser_PersistentCallbacks::OnLicensesUpdated(LicensesUpdated_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_licenses_updated;
    }
    if (cb)
        cb.call(user_fromNative(*p));
}

void SteamUser_PersistentCallbacks::OnMicroTxnAuthorizationResponse(MicroTxnAuthorizationResponse_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_microtxn_auth;
    }
    if (cb)
        cb.call(user_fromNative(*p));
}

static SteamUser_PersistentCallbacks g_user_persistent_callbacks;

void steam_user_set_callback_steam_servers_connected( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_steam_servers_connected = callback;
}

void steam_user_clear_callback_steam_servers_connected()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_steam_servers_connected = nullptr;
}

void steam_user_set_callback_steam_server_connect_failure( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_steam_server_connect_failure = callback;
}

void steam_user_clear_callback_steam_server_connect_failure()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_steam_server_connect_failure = nullptr;
}

void steam_user_set_callback_steam_servers_disconnected( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_steam_servers_disconnected = callback;
}

void steam_user_clear_callback_steam_servers_disconnected()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_steam_servers_disconnected = nullptr;
}

void steam_user_set_callback_client_game_server_deny( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_client_game_server_deny = callback;
}

void steam_user_clear_callback_client_game_server_deny()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_client_game_server_deny = nullptr;
}

void steam_user_set_callback_licenses_updated( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_licenses_updated = callback;
}

void steam_user_clear_callback_licenses_updated()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_licenses_updated = nullptr;
}

void steam_user_set_callback_microtxn_authorization_response( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_microtxn_auth = callback;
}

void steam_user_clear_callback_microtxn_authorization_response()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_microtxn_auth = nullptr;
}



