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
    out.end_reason = static_cast<gm_enums::SteamNetworkingConnectionEnd>((int)e.m_info.m_eEndReason);
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
                                                            std::uint32_t buffer_offset,
                                                            std::uint32_t buffer_count,
                                                            std::int32_t send_flags,
                                                            std::int32_t remote_channel)
{
    STEAM_GUARD_RET((std::int32_t)k_EResultFail);

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m) return (std::int32_t)k_EResultFail;

    if (buffer_count == 0) return (std::int32_t)k_EResultInvalidParam;

    if ((std::uint64_t)buffer_offset + (std::uint64_t)buffer_count > (std::uint64_t)data.length()) {
        steam_set_last_error("SendMessageToUser: buffer_offset + buffer_count exceeds buffer length.");
        return (std::int32_t)k_EResultInvalidParam;
    }

    SteamNetworkingIdentity id = snm_identity_from_steamid64(steam_id_remote);

    std::vector<std::uint8_t> tmp((size_t)buffer_count);
    auto reader = data.getReader();
    reader.readBytes((char*)tmp.data(), (int)buffer_count);

    EResult r = m->SendMessageToUser(id, (const void*)tmp.data(), (uint32)buffer_count, (int)send_flags, (int)remote_channel);
    return (std::int32_t)r;
}


std::vector<gm_structs::SteamNetworkingMessage> steam_networking_messages_receive_messages_on_channel(std::int32_t local_channel,
                                                                                                      gm::wire::GMBuffer out_data,
                                                                                                      std::uint32_t count)
{
    STEAM_GUARD_RET({});

    std::vector<gm_structs::SteamNetworkingMessage> out;

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m) return out;

    if (count == 0) return out;

    std::vector<SteamNetworkingMessage_t*> msgs(count, nullptr);
    int n = m->ReceiveMessagesOnChannel((int)local_channel, msgs.data(), (int)count);
    if (n <= 0) return out;

    n = std::min((int)count, n);

    std::uint32_t current_offset = 0;
    std::uint64_t buffer_size = out_data.length();

    for (int i = 0; i < n; ++i) {
        if (!msgs[i]) break;

        const uint32 cb = (uint32)msgs[i]->m_cbSize;

        // Ensure message fits in remaining buffer
        if (current_offset + cb > buffer_size) {
            steam_set_last_error("steam_networking_messages_receive_messages_on_channel: output buffer exhausted.");
            msgs[i]->Release();
            break;
        }

        // Write message data to buffer
        {
            auto w = out_data.getWriter();
            w.skip(current_offset);
            w.writeBytes((const char*)msgs[i]->m_pData, (int)cb);
        }

        // Create and add message metadata
        gm_structs::SteamNetworkingMessage msg_out{};
        msg_out.offset = current_offset;
        msg_out.size = cb;
        msg_out.steam_id_remote = (std::uint64_t)msgs[i]->m_identityPeer.GetSteamID64();
        msg_out.conn = 0;
        msg_out.channel = local_channel;
        msg_out.flags = (std::int32_t)msgs[i]->m_nFlags;
        msg_out.usec_time_received = msgs[i]->m_usecTimeReceived;
        msg_out.message_number = msgs[i]->m_nMessageNumber;
        msg_out.conn_user_data = msgs[i]->m_nConnUserData;

        out.push_back(msg_out);

        current_offset += cb;
        msgs[i]->Release();
    }

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

