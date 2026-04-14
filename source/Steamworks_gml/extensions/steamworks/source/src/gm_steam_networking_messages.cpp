#include "GMSteamworks.h"

#include <steam/steam_api.h>
#include <steam/isteamnetworkingmessages.h>

#include <cstdint>
#include <string>
#include <vector>
#include <mutex>

static inline ISteamNetworkingMessages* steam_networking_messages_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Networking Messages: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamNetworkingMessages* s = SteamNetworkingMessages();
    if (!s)
        steam_set_last_error("Steam Networking Messages: SteamNetworkingMessages() returned NULL.");

    return s;
}

static inline SteamNetworkingIdentity snm_identity_from_steamid64(std::uint64_t sid64)
{
    SteamNetworkingIdentity id;
    id.Clear();
    id.SetSteamID64((uint64)sid64);
    return id;
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_snm_session_request = nullptr;
static gm::wire::GMFunction g_cb_snm_session_failed = nullptr;

static inline gm_structs::SteamNetworkingMessagesSessionRequest snm_fromNative(const SteamNetworkingMessagesSessionRequest_t& e)
{
    gm_structs::SteamNetworkingMessagesSessionRequest out{};
    out.steam_id_remote = (std::uint64_t)e.m_identityRemote.GetSteamID64();
    return out;
}

static inline gm_structs::SteamNetworkingMessagesSessionFailed snm_fromNative(const SteamNetworkingMessagesSessionFailed_t& e)
{
    gm_structs::SteamNetworkingMessagesSessionFailed out{};
    out.steam_id_remote = (std::uint64_t)e.m_info.m_identityRemote.GetSteamID64();
    out.end_reason = (std::int32_t)e.m_info.m_eEndReason;
    out.debug_msg = e.m_info.m_szEndDebug ? e.m_info.m_szEndDebug : "";
    return out;
}

class SteamNetworkingMessages_PersistentCallbacks
{
public:
    STEAM_CALLBACK(SteamNetworkingMessages_PersistentCallbacks, OnSessionRequest, SteamNetworkingMessagesSessionRequest_t);
    STEAM_CALLBACK(SteamNetworkingMessages_PersistentCallbacks, OnSessionFailed, SteamNetworkingMessagesSessionFailed_t);
};

void SteamNetworkingMessages_PersistentCallbacks::OnSessionRequest(SteamNetworkingMessagesSessionRequest_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_snm_session_request;
    }
    if (cb)
        cb.call(snm_fromNative(*p));
}

void SteamNetworkingMessages_PersistentCallbacks::OnSessionFailed(SteamNetworkingMessagesSessionFailed_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_snm_session_failed;
    }
    if (cb)
        cb.call(snm_fromNative(*p));
}

static SteamNetworkingMessages_PersistentCallbacks g_snm_callbacks;

void steam_networking_messages_set_callback_session_request(const gm::wire::GMFunction& cb)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_snm_session_request = cb;
}

void steam_networking_messages_clear_callback_session_request()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_snm_session_request = nullptr;
}

void steam_networking_messages_set_callback_session_failed(const gm::wire::GMFunction& cb)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_snm_session_failed = cb;
}

void steam_networking_messages_clear_callback_session_failed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_snm_session_failed = nullptr;
}

    std::int32_t steam_networking_messages_send_message_to_user(std::uint64_t steam_id_remote,
                                                            gm::wire::GMBuffer data,
                                                            std::uint32_t bytes,
                                                            std::int32_t send_flags,
                                                            std::int32_t remote_channel)
    {
        STEAM_GUARD_RET((std::int32_t)k_EResultFail);

        ISteamNetworkingMessages* m = steam_networking_messages_iface();
        if (!m) return (std::int32_t)k_EResultFail;

        if (bytes == 0) return (std::int32_t)k_EResultInvalidParam;

        SteamNetworkingIdentity id = snm_identity_from_steamid64(steam_id_remote);

        EResult r = m->SendMessageToUser(id, (const void*)data.data(), (uint32)bytes, (int)send_flags, (int)remote_channel);
        return (std::int32_t)r;
    }

    gm_structs::SteamNetworkingMessagesReceived steam_networking_messages_receive_one_on_channel(std::int32_t local_channel,
                                                                                                gm::wire::GMBuffer out_data,
                                                                                                std::uint32_t max_bytes,
                                                                                                std::uint32_t offset)
    {
        gm_structs::SteamNetworkingMessagesReceived out{};
        out.ok = false;
        out.steam_id_remote = 0;
        out.channel = local_channel;
        out.bytes_written = 0;
        out.send_flags = 0;

        STEAM_GUARD_RET(out);

        ISteamNetworkingMessages* m = steam_networking_messages_iface();
        if (!m) return out;

        if (max_bytes == 0) return out;

        SteamNetworkingMessage_t* msg = nullptr;
        int n = m->ReceiveMessagesOnChannel((int)local_channel, &msg, 1);
        if (n <= 0 || !msg) return out;

        const uint32 cb = (uint32)msg->m_cbSize;
        const uint32 to_write = (cb < max_bytes) ? cb : max_bytes;

        auto w = out_data.getWriter();
        w.skip(offset);
        w.writeBytes((const char*)msg->m_pData, (int)to_write);

        out.steam_id_remote = (std::uint64_t)msg->m_identityPeer.GetSteamID64();
        out.bytes_written = to_write;
        out.send_flags = (std::int32_t)msg->m_nFlags;
        out.ok = true;

        msg->Release();
        return out;
    }

bool steam_networking_messages_accept_session_with_user(std::uint64_t steam_id_remote)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m) return false;

    SteamNetworkingIdentity id = snm_identity_from_steamid64(steam_id_remote);
    return m->AcceptSessionWithUser(id);
}

bool steam_networking_messages_close_session_with_user(std::uint64_t steam_id_remote)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m) return false;

    SteamNetworkingIdentity id = snm_identity_from_steamid64(steam_id_remote);
    return m->CloseSessionWithUser(id);
}

bool steam_networking_messages_close_channel_with_user(std::uint64_t steam_id_remote, std::int32_t local_channel)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m) return false;

    SteamNetworkingIdentity id = snm_identity_from_steamid64(steam_id_remote);
    return m->CloseChannelWithUser(id, (int)local_channel);
}
