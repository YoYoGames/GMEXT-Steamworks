#include "GMSteamworks.h"

#include <steam/steam_api.h>
#include <steam/isteamnetworkingsockets.h>
#include <steam/isteamnetworkingutils.h>
#include <steam/steamnetworkingtypes.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <mutex>

// ----------------------------------------------------------------------------
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
    out.end_debug = info.m_szEndDebug ? info.m_szEndDebug : "";
    out.connection_description = info.m_szConnectionDescription ? info.m_szConnectionDescription : "";
    out.flags = (std::int32_t)info.m_nFlags;
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
    if (!addr.ParseString(addrStr.c_str()))
        return 0;

    HSteamNetConnection c = s->ConnectByIPAddress(addr, 0, nullptr);
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

    std::vector<gm_structs::SteamNetworkingMessage> out;

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return out;

    if (count == 0) return out;

    constexpr std::uint32_t kMaxReceiveCount = 65536;
    if (count > kMaxReceiveCount) {
        steam_set_last_error("steam_networking_sockets_receive_messages_on_connection: count exceeds sanity limit.");
        return out;
    }

    std::vector<SteamNetworkingMessage_t*> msgs(count, nullptr);
    int n = s->ReceiveMessagesOnConnection((HSteamNetConnection)conn, msgs.data(), (int)count);
    if (n <= 0) return out;

    n = std::min((int)count, n);

    std::uint32_t current_offset = 0;
    std::uint64_t buffer_size = out_data.length();

    for (int i = 0; i < n; ++i) {
        if (!msgs[i]) break;

        const uint32 cb = (uint32)msgs[i]->m_cbSize;

        // Ensure message fits in remaining buffer
        if (current_offset + cb > buffer_size) {
            steam_set_last_error("steam_networking_sockets_receive_messages_on_connection: output buffer exhausted.");
            for (int j = i; j < n; ++j) {
                if (msgs[j]) msgs[j]->Release();
            }
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
        msg_out.steam_id_remote = msgs[i]->m_identityPeer.GetSteamID64();
        msg_out.conn = (std::uint32_t)msgs[i]->m_conn;
        msg_out.channel = -1;
        msg_out.flags = (std::int32_t)msgs[i]->m_nFlags;
        msg_out.usec_time_received = (std::uint64_t)msgs[i]->m_usecTimeReceived;
        msg_out.message_number = (std::uint64_t)msgs[i]->m_nMessageNumber;
        msg_out.conn_user_data = (std::uint64_t)msgs[i]->m_nConnUserData;

        out.push_back(msg_out);

        current_offset += cb;
        msgs[i]->Release();
    }

    return out;
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

    return s->DestroyPollGroup((HSteamNetPollGroup)poll_group);
}

bool steam_networking_sockets_set_connection_poll_group(std::uint32_t conn, std::uint32_t poll_group)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return false;
    
    return s->SetConnectionPollGroup((HSteamNetConnection)conn, (HSteamNetPollGroup)poll_group);
}

std::vector<gm_structs::SteamNetworkingMessage> steam_networking_sockets_receive_messages_on_poll_group(std::uint32_t poll_group,
                                                                                                        gm::wire::GMBuffer out_data,
                                                                                                        std::uint32_t count)
{
    STEAM_GUARD_RET({});

    std::vector<gm_structs::SteamNetworkingMessage> out;

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return out;

    if (count == 0) return out;

    constexpr std::uint32_t kMaxReceiveCount = 65536;
    if (count > kMaxReceiveCount) {
        steam_set_last_error("steam_networking_sockets_receive_messages_on_poll_group: count exceeds sanity limit.");
        return out;
    }

    std::vector<SteamNetworkingMessage_t*> msgs(count, nullptr);
    int n = s->ReceiveMessagesOnPollGroup((HSteamNetPollGroup)poll_group, msgs.data(), (int)count);
    if (n <= 0) return out;

    n = std::min((int)count, n);

    std::uint32_t current_offset = 0;
    std::uint64_t buffer_size = out_data.length();

    for (int i = 0; i < n; ++i) {
        if (!msgs[i]) break;

        const uint32 cb = (uint32)msgs[i]->m_cbSize;

        // Ensure message fits in remaining buffer
        if (current_offset + cb > buffer_size) {
            steam_set_last_error("steam_networking_sockets_receive_messages_on_poll_group: output buffer exhausted.");
            for (int j = i; j < n; ++j) {
                if (msgs[j]) msgs[j]->Release();
            }
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
        msg_out.steam_id_remote = msgs[i]->m_identityPeer.GetSteamID64();
        msg_out.conn = (std::uint32_t)msgs[i]->m_conn;
        msg_out.channel = -1;
        msg_out.flags = (std::int32_t)msgs[i]->m_nFlags;
        msg_out.usec_time_received = (std::uint64_t)msgs[i]->m_usecTimeReceived;
        msg_out.message_number = (std::uint64_t)msgs[i]->m_nMessageNumber;
        msg_out.conn_user_data = (std::uint64_t)msgs[i]->m_nConnUserData;

        out.push_back(msg_out);

        current_offset += cb;
        msgs[i]->Release();
    }

    return out;
}

