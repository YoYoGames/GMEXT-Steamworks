#include "GMSteamworks.h"
#include "receive_hold_back.h"

#include <steam/steam_api.h>
#include <steam/isteamnetworkingsockets.h>
#include <steam/isteamnetworkingutils.h>
#include <steam/steamnetworkingtypes.h>

#include <climits>
#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <mutex>

// ----------------------------------------------------------------------------
namespace
{
    struct SteamMessageTraits
    {
        static std::uint32_t conn(SteamNetworkingMessage_t* m) { return (std::uint32_t)m->m_conn; }
        static std::uint32_t size(SteamNetworkingMessage_t* m) { return (std::uint32_t)m->m_cbSize; }
        static void release(SteamNetworkingMessage_t* m) { m->Release(); }
    };

    // Messages a receive couldn't fit in the game's buffer, returned first by the next receive (receive_hold_back.h)
    steam_receive::HoldBack<SteamNetworkingMessage_t, SteamMessageTraits> g_sockets_held;

    gm_structs::SteamNetworkingMessage sockets_message_out(SteamNetworkingMessage_t* m, std::uint32_t offset)
    {
        gm_structs::SteamNetworkingMessage msg_out{};
        msg_out.offset = offset;
        msg_out.size = (std::uint32_t)m->m_cbSize;
        msg_out.steam_id_remote = m->m_identityPeer.GetSteamID64();
        msg_out.conn = (std::uint32_t)m->m_conn;
        msg_out.channel = -1;
        msg_out.flags = static_cast<gm_enums::SteamNetworkingSendFlags>((int)m->m_nFlags);
        msg_out.usec_time_received = (std::uint64_t)m->m_usecTimeReceived;
        msg_out.message_number = (std::uint64_t)m->m_nMessageNumber;
        msg_out.conn_user_data = (std::uint64_t)m->m_nConnUserData;
        return msg_out;
    }

    // Receive through the hold-back queue into out_data, from offset 0
    template <typename Receive>
    std::vector<gm_structs::SteamNetworkingMessage> sockets_receive(const char* fn, std::uint32_t count, gm::wire::GMBuffer& out_data,
                                                                    Receive&& receive)
    {
        std::vector<gm_structs::SteamNetworkingMessage> out;
        auto write = [&](SteamNetworkingMessage_t* m, std::uint32_t offset) {
            auto w = out_data.getWriter();
            w.skip(offset);
            w.writeBytes((const char*)m->m_pData, (int)m->m_cbSize);
            out.push_back(sockets_message_out(m, offset));
        };
        auto res = receive((std::uint64_t)out_data.length(), write);
        if (res.oversized) {
            steam_set_last_error(std::string(fn) + ": a message of " + std::to_string(res.needed)
                                 + " bytes is bigger than the buffer; it and its connection's later messages are kept until a receive with a buffer that big"
                                 + (res.held_limit ? " (that connection's held messages reached the limit, so no more are taken from Steam until then)."
                                                   : "."));
        }
        return out;
    }
}

void steam_networking_sockets_release_held_messages() { g_sockets_held.release_all(); }

static inline ISteamNetworkingSockets* steam_networking_sockets_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Networking Sockets: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamNetworkingSockets* s = SteamNetworkingSockets();
    if (!s)
        steam_set_last_error("Steam Networking Sockets: SteamNetworkingSockets() returned NULL.");

    return s;
}

static inline std::string sn_addr_to_string(const SteamNetworkingIPAddr& addr)
{
    char buf[SteamNetworkingIPAddr::k_cchMaxString] = {};
    addr.ToString(buf, sizeof(buf), /*bWithPort=*/true);
    return std::string(buf);
}

static inline gm_structs::SteamNetworkingSocketsConnectionInfo sn_fromNative(const SteamNetConnectionInfo_t& info)
{
    gm_structs::SteamNetworkingSocketsConnectionInfo out{};
    out.user_data = (std::uint64_t)info.m_nUserData;
    out.end_reason = static_cast<gm_enums::SteamNetworkingConnectionEnd>((int)info.m_eEndReason);
    out.end_debug = info.m_szEndDebug;
    out.connection_description = info.m_szConnectionDescription;
    out.flags = static_cast<gm_enums::SteamNetworkingConnectionInfoFlags>((int)info.m_nFlags);
    out.state = static_cast<gm_enums::SteamNetworkingConnectionState>((int)info.m_eState);
    out.steam_id_remote = (std::uint64_t)info.m_identityRemote.GetSteamID64();
    out.addr_remote = sn_addr_to_string(info.m_addrRemote);
    return out;
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_conn_status_changed = nullptr;

static inline gm_structs::SteamNetworkingSocketsStatusChanged sn_fromNative(const SteamNetConnectionStatusChangedCallback_t& e)
{
    gm_structs::SteamNetworkingSocketsStatusChanged out{};
    out.conn = (std::uint32_t)e.m_hConn;
    out.old_state = static_cast<gm_enums::SteamNetworkingConnectionState>((int)e.m_eOldState);
    out.info = sn_fromNative(e.m_info);
    return out;
}

static void SN_OnConnectionStatusChanged(SteamNetConnectionStatusChangedCallback_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_conn_status_changed;
    }
    if (cb)
        cb.call(sn_fromNative(*p));
}

void steam_networking_sockets_set_callback_connection_status_changed(const gm::wire::GMFunction& cb)
{
    steam_clear_last_error();
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        g_cb_conn_status_changed = cb;
    }

    ISteamNetworkingUtils* u = SteamNetworkingUtils();
    if (u) u->SetGlobalCallback_SteamNetConnectionStatusChanged(SN_OnConnectionStatusChanged);
}

void steam_networking_sockets_clear_callback_connection_status_changed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_conn_status_changed = nullptr;

    ISteamNetworkingUtils* u = SteamNetworkingUtils();
    if (u) u->SetGlobalCallback_SteamNetConnectionStatusChanged(nullptr);
}

std::uint32_t steam_networking_sockets_create_listen_socket_ip(std::uint32_t port)
{
    STEAM_GUARD_RET(0);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return 0;

    if (port > 0xFFFF) {
        steam_set_last_error("steam_networking_sockets_create_listen_socket_ip: port out of range (must be <= 65535).");
        return 0;
    }

    SteamNetworkingIPAddr addr;
    addr.Clear();
    addr.m_port = (uint16)port;

    HSteamListenSocket h = s->CreateListenSocketIP(addr, 0, nullptr);
    if (h == k_HSteamListenSocket_Invalid)
        steam_set_last_error("steam_networking_sockets_create_listen_socket_ip: CreateListenSocketIP failed.");
    return (std::uint32_t)h;
}

bool steam_networking_sockets_close_listen_socket(std::uint32_t listen_socket)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return false;

    // Closing a listen socket closes the connections accepted on it without steam_networking_sockets_close_connection,
    // so release what's held for them here (before the close, while their info still names the socket)
    for (std::uint32_t conn : g_sockets_held.held_connections()) {
        SteamNetConnectionInfo_t info{};
        if (s->GetConnectionInfo((HSteamNetConnection)conn, &info) && info.m_hListenSocket == (HSteamListenSocket)listen_socket)
            g_sockets_held.release_connection(conn);
    }

    return s->CloseListenSocket((HSteamListenSocket)listen_socket);
}

std::uint32_t steam_networking_sockets_connect_by_ip_address(std::string_view ip, std::uint32_t port)
{
    STEAM_GUARD_RET(0);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return 0;

    std::string ipStr(ip);
    // IPv6 literals must be bracketed before the port per SteamNetworkingIPAddr::ParseString's
    // documented format (e.g. [::1:2]:80) - an unbracketed IPv6 address is ambiguous with the
    // trailing ":port" and fails to parse.
    std::string addrStr = (ipStr.find(':') != std::string::npos)
        ? "[" + ipStr + "]:" + std::to_string(port)
        : ipStr + ":" + std::to_string(port);

    SteamNetworkingIPAddr addr;
    addr.Clear();
    if (!addr.ParseString(addrStr.c_str())) {
        steam_set_last_error("steam_networking_sockets_connect_by_ip_address: failed to parse IP address.");
        return 0;
    }

    HSteamNetConnection c = s->ConnectByIPAddress(addr, 0, nullptr);
    if (c == k_HSteamNetConnection_Invalid)
        steam_set_last_error("steam_networking_sockets_connect_by_ip_address: ConnectByIPAddress failed.");
    return (std::uint32_t)c;
}

gm_enums::SteamApiResult steam_networking_sockets_accept_connection(std::uint32_t conn)
{
    STEAM_GUARD_RET(static_cast<gm_enums::SteamApiResult>((int)k_EResultFail));

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return static_cast<gm_enums::SteamApiResult>((int)k_EResultFail);

    return static_cast<gm_enums::SteamApiResult>((int)s->AcceptConnection((HSteamNetConnection)conn));
}

bool steam_networking_sockets_close_connection(std::uint32_t conn, gm_enums::SteamNetworkingConnectionEnd reason, std::string_view debug, bool linger)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return false;

    std::string d(debug);
    g_sockets_held.release_connection(conn);
    return s->CloseConnection((HSteamNetConnection)conn, (int)reason, d.c_str(), linger);
}

bool steam_networking_sockets_set_connection_user_data(std::uint32_t conn, std::uint64_t user_data)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return false;

    return s->SetConnectionUserData((HSteamNetConnection)conn, (int64)user_data);
}

std::uint64_t steam_networking_sockets_get_connection_user_data(std::uint32_t conn)
{
    STEAM_GUARD_RET(0);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return 0;

    return (std::uint64_t)s->GetConnectionUserData((HSteamNetConnection)conn);
}

void steam_networking_sockets_set_connection_name(std::uint32_t conn, std::string_view name)
{
    STEAM_GUARD();

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return;

    std::string n(name);
    s->SetConnectionName((HSteamNetConnection)conn, n.c_str());
}

std::string steam_networking_sockets_get_connection_name(std::uint32_t conn)
{
    STEAM_GUARD_RET("");

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return "";

    char buf[256] = {};
    bool ok = s->GetConnectionName((HSteamNetConnection)conn, buf, sizeof(buf));
    return ok ? std::string(buf) : "";
}

gm_enums::SteamApiResult steam_networking_sockets_send_message_to_connection(std::uint32_t conn,
                                                                 gm::wire::GMBuffer data,
                                                                 gm_enums::SteamNetworkingSendFlags send_flags,
                                                                 std::optional<std::uint32_t> buffer_offset,
                                                                 std::optional<std::uint32_t> buffer_count)
{
    STEAM_GUARD_RET(static_cast<gm_enums::SteamApiResult>((int)k_EResultFail));

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return static_cast<gm_enums::SteamApiResult>((int)k_EResultFail);

    std::uint32_t offset = buffer_offset.value_or(0);

    if (static_cast<std::uint64_t>(offset) >= data.length()) {
        steam_set_last_error("SendMessageToConnection: buffer_offset exceeds buffer length.");
        return static_cast<gm_enums::SteamApiResult>((int)k_EResultInvalidParam);
    }

    std::uint32_t actual_count;
    if (buffer_count.has_value()) {
        actual_count = buffer_count.value();
    } else {
        std::uint64_t remaining = data.length() - static_cast<std::uint64_t>(offset);
        actual_count = static_cast<std::uint32_t>(std::min(remaining, static_cast<std::uint64_t>(INT_MAX)));
    }

    if (actual_count == 0) return static_cast<gm_enums::SteamApiResult>((int)k_EResultInvalidParam);

    if ((std::uint64_t)offset + (std::uint64_t)actual_count > (std::uint64_t)data.length()) {
        steam_set_last_error("SendMessageToConnection: buffer_offset + buffer_count exceeds buffer length.");
        return static_cast<gm_enums::SteamApiResult>((int)k_EResultInvalidParam);
    }

    auto reader = data.getReader();
    reader.skip((size_t)offset);
    const void* msg_data = reader.data();

    return static_cast<gm_enums::SteamApiResult>((int)s->SendMessageToConnection((HSteamNetConnection)conn,
                                                    msg_data,
                                                    (uint32)actual_count,
                                                    (int)send_flags,
                                                    nullptr));
}

gm_enums::SteamApiResult steam_networking_sockets_flush_messages_on_connection(std::uint32_t conn)
{
    STEAM_GUARD_RET(static_cast<gm_enums::SteamApiResult>((int)k_EResultFail));

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return static_cast<gm_enums::SteamApiResult>((int)k_EResultFail);

    return static_cast<gm_enums::SteamApiResult>((int)s->FlushMessagesOnConnection((HSteamNetConnection)conn));
}

std::vector<gm_structs::SteamNetworkingMessage> steam_networking_sockets_receive_messages_on_connection(std::uint32_t conn,
                                                                                                        gm::wire::GMBuffer out_data,
                                                                                                        std::uint32_t count)
{
    STEAM_GUARD_RET({});

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s || count == 0) return {};

    constexpr std::uint32_t kMaxReceiveCount = 65536;
    if (count > kMaxReceiveCount) {
        steam_set_last_error("steam_networking_sockets_receive_messages_on_connection: count exceeds sanity limit.");
        return {};
    }

    return sockets_receive("steam_networking_sockets_receive_messages_on_connection", count, out_data,
        [&](std::uint64_t capacity, auto& write) {
            return g_sockets_held.receive_on_connection(conn, count, capacity,
                [&](int max, SteamNetworkingMessage_t** msgs) {
                    return s->ReceiveMessagesOnConnection((HSteamNetConnection)conn, msgs, max);
                }, write);
        });
}

std::optional<gm_structs::SteamNetworkingSocketsConnectionInfo> steam_networking_sockets_get_connection_info(std::uint32_t conn)
{
    STEAM_GUARD_RET(std::nullopt);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return std::nullopt;

    SteamNetConnectionInfo_t info{};
    if (!s->GetConnectionInfo((HSteamNetConnection)conn, &info))
        return std::nullopt;

    return sn_fromNative(info);
}

std::string steam_networking_sockets_get_detailed_connection_status(std::uint32_t conn)
{
    STEAM_GUARD_RET("");

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return "";

    char buf[4096] = {};
    int r = s->GetDetailedConnectionStatus((HSteamNetConnection)conn, buf, sizeof(buf));
    if (r < 0) return "";
    return std::string(buf);
}

void steam_networking_sockets_run_callbacks()
{
    STEAM_GUARD();

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return;

    s->RunCallbacks();
}

std::vector<std::uint32_t> steam_networking_sockets_create_socket_pair(bool use_network_loopback)
{
    std::vector<std::uint32_t> out;
    STEAM_GUARD_RET(out);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return out;

    HSteamNetConnection a = k_HSteamNetConnection_Invalid;
    HSteamNetConnection b = k_HSteamNetConnection_Invalid;

    const bool ok = s->CreateSocketPair(&a, &b, use_network_loopback, nullptr, nullptr);
    if (!ok) {
        steam_set_last_error("steam_networking_sockets_create_socket_pair: CreateSocketPair failed.");
        return out;
    }

    out.push_back((std::uint32_t)a);
    out.push_back((std::uint32_t)b);
    return out;
}

std::uint32_t steam_networking_sockets_create_listen_socket_p2p(std::int32_t local_virtual_port)
{
    STEAM_GUARD_RET(0);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return 0;

    HSteamListenSocket h = s->CreateListenSocketP2P((int)local_virtual_port, 0, nullptr);
    if (h == k_HSteamListenSocket_Invalid)
        steam_set_last_error("steam_networking_sockets_create_listen_socket_p2p: CreateListenSocketP2P failed.");
    return (std::uint32_t)h;
}

std::uint32_t steam_networking_sockets_connect_p2p(std::uint64_t steam_id_remote, std::int32_t remote_virtual_port)
{
    STEAM_GUARD_RET(0);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return 0;

    SteamNetworkingIdentity ident;
    ident.Clear();
    ident.SetSteamID64((uint64)steam_id_remote);

    HSteamNetConnection c = s->ConnectP2P(ident, (int)remote_virtual_port, 0, nullptr);
    if (c == k_HSteamNetConnection_Invalid)
        steam_set_last_error("steam_networking_sockets_connect_p2p: ConnectP2P failed.");
    return (std::uint32_t)c;
}

std::string steam_networking_sockets_get_listen_socket_address(std::uint32_t listen_socket)
{
    STEAM_GUARD_RET("");

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return "";

    SteamNetworkingIPAddr addr;
    addr.Clear();

    if (!s->GetListenSocketAddress((HSteamListenSocket)listen_socket, &addr))
        return "";

    return sn_addr_to_string(addr); // you already have sn_addr_to_string helper
}

std::uint32_t steam_networking_sockets_create_poll_group()
{
    STEAM_GUARD_RET(0);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return 0;

    return (std::uint32_t)s->CreatePollGroup();
}

bool steam_networking_sockets_destroy_poll_group(std::uint32_t poll_group)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return false;

    g_sockets_held.destroy_poll_group(poll_group);
    return s->DestroyPollGroup((HSteamNetPollGroup)poll_group);
}

bool steam_networking_sockets_set_connection_poll_group(std::uint32_t conn, std::uint32_t poll_group)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return false;
    
    if (!s->SetConnectionPollGroup((HSteamNetConnection)conn, (HSteamNetPollGroup)poll_group))
        return false;
    g_sockets_held.set_poll_group(conn, poll_group);
    return true;
}

std::vector<gm_structs::SteamNetworkingMessage> steam_networking_sockets_receive_messages_on_poll_group(std::uint32_t poll_group,
                                                                                                        gm::wire::GMBuffer out_data,
                                                                                                        std::uint32_t count)
{
    STEAM_GUARD_RET({});

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s || count == 0) return {};

    constexpr std::uint32_t kMaxReceiveCount = 65536;
    if (count > kMaxReceiveCount) {
        steam_set_last_error("steam_networking_sockets_receive_messages_on_poll_group: count exceeds sanity limit.");
        return {};
    }

    return sockets_receive("steam_networking_sockets_receive_messages_on_poll_group", count, out_data,
        [&](std::uint64_t capacity, auto& write) {
            return g_sockets_held.receive_on_poll_group(poll_group, count, capacity,
                [&](int max, SteamNetworkingMessage_t** msgs) {
                    return s->ReceiveMessagesOnPollGroup((HSteamNetPollGroup)poll_group, msgs, max);
                }, write);
        });
}

