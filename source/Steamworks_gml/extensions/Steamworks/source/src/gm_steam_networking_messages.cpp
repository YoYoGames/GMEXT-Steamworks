#include "GMSteamworks.h"
#include "receive_hold_back.h"

#include <steam/steam_api.h>
#include <steam/isteamnetworkingmessages.h>

#include <climits>
#include <cstdint>
#include <string>
#include <unordered_map>
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
    out.debug_msg = e.m_info.m_szEndDebug;
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
                                                            gm_enums::SteamNetworkingSendFlags send_flags,
                                                            std::int32_t remote_channel,
                                                            std::optional<std::uint32_t> buffer_offset,
                                                            std::optional<std::uint32_t> buffer_count)
{
    STEAM_GUARD_RET((std::int32_t)k_EResultFail);

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m) return (std::int32_t)k_EResultFail;

    std::uint32_t offset = buffer_offset.value_or(0);

    if (static_cast<std::uint64_t>(offset) >= data.length()) {
        steam_set_last_error("SendMessageToUser: buffer_offset exceeds buffer length.");
        return (std::int32_t)k_EResultInvalidParam;
    }

    std::uint32_t actual_count;
    if (buffer_count.has_value()) {
        actual_count = buffer_count.value();
    } else {
        std::uint64_t remaining = data.length() - static_cast<std::uint64_t>(offset);
        actual_count = static_cast<std::uint32_t>(std::min(remaining, static_cast<std::uint64_t>(INT_MAX)));
    }

    if (actual_count == 0) return (std::int32_t)k_EResultInvalidParam;

    if ((std::uint64_t)offset + (std::uint64_t)actual_count > (std::uint64_t)data.length()) {
        steam_set_last_error("SendMessageToUser: buffer_offset + buffer_count exceeds buffer length.");
        return (std::int32_t)k_EResultInvalidParam;
    }

    SteamNetworkingIdentity id = snm_identity_from_steamid64(steam_id_remote);

    auto reader = data.getReader();
    reader.skip((size_t)offset);
    const void* msg_data = reader.data();

    EResult r = m->SendMessageToUser(id, msg_data, (uint32)actual_count, (int)send_flags, (int)remote_channel);
    return (std::int32_t)r;
}


namespace
{
    struct SnmMessageTraits
    {
        // Messages are held per channel
        static std::uint32_t conn(SteamNetworkingMessage_t* m) { return (std::uint32_t)m->m_nChannel; }
        static std::uint32_t size(SteamNetworkingMessage_t* m) { return (std::uint32_t)m->m_cbSize; }
        static void release(SteamNetworkingMessage_t* m) { m->Release(); }
    };
}
using SnmHoldBack = steam_receive::HoldBack<SteamNetworkingMessage_t, SnmMessageTraits>;

// Messages either receive took from Steam but couldn't write, per channel (receive_hold_back.h)
static SnmHoldBack g_snm_held;

static std::uint32_t snm_key(std::int32_t local_channel) { return (std::uint32_t)local_channel; }

std::vector<gm_structs::SteamNetworkingMessage> steam_networking_messages_receive_messages_on_channel(std::int32_t local_channel,
                                                                                                      gm::wire::GMBuffer out_data,
                                                                                                      std::uint32_t count)
{
    STEAM_GUARD_RET({});

    std::vector<gm_structs::SteamNetworkingMessage> out;

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m || count == 0) return out;

    constexpr std::uint32_t kMaxReceiveCount = 65536;
    if (count > kMaxReceiveCount) {
        steam_set_last_error("steam_networking_messages_receive_messages_on_channel: count exceeds sanity limit.");
        return out;
    }

    auto write = [&](SteamNetworkingMessage_t* msg, std::uint32_t offset) {
        auto w = out_data.getWriter();
        w.skip(offset);
        w.writeBytes((const char*)msg->m_pData, (int)msg->m_cbSize);

        gm_structs::SteamNetworkingMessage msg_out{};
        msg_out.offset = offset;
        msg_out.size = (std::uint32_t)msg->m_cbSize;
        msg_out.steam_id_remote = (std::uint64_t)msg->m_identityPeer.GetSteamID64();
        msg_out.conn = 0;
        msg_out.channel = local_channel;
        msg_out.flags = static_cast<gm_enums::SteamNetworkingSendFlags>((int)msg->m_nFlags);
        msg_out.usec_time_received = msg->m_usecTimeReceived;
        msg_out.message_number = msg->m_nMessageNumber;
        msg_out.conn_user_data = msg->m_nConnUserData;
        out.push_back(msg_out);
    };

    // Held messages for the channel come first, including one steam_networking_messages_receive_message_on_channel
    // held, so the two receives can be mixed on a channel without reordering
    auto res = g_snm_held.receive_on_connection(snm_key(local_channel), count, (std::uint64_t)out_data.length(),
        [&](int max, SteamNetworkingMessage_t** msgs) { return m->ReceiveMessagesOnChannel((int)local_channel, msgs, max); },
        write);
    if (res.oversized) {
        steam_set_last_error("steam_networking_messages_receive_messages_on_channel: the next message is "
                             + std::to_string(res.needed)
                             + " bytes, more than the buffer holds; it's kept until a receive with a buffer that big.");
    }
    return out;
}

static std::uint64_t g_snm_last_message_steam_id = 0;
static std::uint32_t g_snm_last_message_size = 0;

// The oldest message for the channel: a held one, or the next from Steam
static SnmHoldBack::Held snm_next_message_take(ISteamNetworkingMessages* m, std::int32_t local_channel)
{
    SnmHoldBack::Held held = g_snm_held.pop_front(snm_key(local_channel));
    if (held.msg)
        return held;
    SteamNetworkingMessage_t* msg = nullptr;
    if (m->ReceiveMessagesOnChannel((int)local_channel, &msg, 1) > 0 && msg)
        return g_snm_held.stamp(msg);
    return SnmHoldBack::Held{0, nullptr};
}

// One message per call, for games that receive every frame: when nothing is held, nothing here allocates. A message
// that doesn't fit where the caller asked is held for its channel instead of released, so it's never lost, and
// steam_networking_messages_receive_messages_on_channel returns it first too: the caller makes room (handles what it
// already read and reads at offset 0, or grows the buffer) or discards it.
std::int32_t steam_networking_messages_receive_message_on_channel(std::int32_t local_channel,
                                                                  gm::wire::GMBuffer out_data,
                                                                  std::optional<std::uint32_t> buffer_offset)
{
    STEAM_GUARD_RET(0);

    ISteamNetworkingMessages* m = steam_networking_messages_iface();
    if (!m) return 0;

    // An empty message carries nothing to write, and a size of 0 already means "nothing waiting".
    SnmHoldBack::Held held = snm_next_message_take(m, local_channel);
    while (held.msg && held.msg->m_cbSize == 0) {
        held.msg->Release();
        held = snm_next_message_take(m, local_channel);
    }
    if (!held.msg) return 0;

    SteamNetworkingMessage_t* msg = held.msg;
    g_snm_last_message_steam_id = (std::uint64_t)msg->m_identityPeer.GetSteamID64();
    g_snm_last_message_size = (std::uint32_t)msg->m_cbSize;

    const std::uint64_t offset = buffer_offset.value_or(0);
    if (offset + g_snm_last_message_size > out_data.length()) {
        g_snm_held.push_front(held);
        return gm_consts::STEAM_NETWORKING_MESSAGES_RECEIVE_DOES_NOT_FIT;
    }

    {
        auto w = out_data.getWriter();
        w.skip((size_t)offset);
        w.writeBytes((const char*)msg->m_pData, (int)g_snm_last_message_size);
    }
    msg->Release();
    return (std::int32_t)g_snm_last_message_size;
}

bool steam_networking_messages_discard_held_message(std::int32_t local_channel)
{
    steam_clear_last_error();
    return g_snm_held.discard_front(snm_key(local_channel));
}

std::uint64_t steam_networking_messages_get_last_message_steam_id()
{
    return g_snm_last_message_steam_id;
}

std::uint32_t steam_networking_messages_get_last_message_size()
{
    return g_snm_last_message_size;
}

void steam_networking_messages_release_held_messages()
{
    g_snm_held.release_all();
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

