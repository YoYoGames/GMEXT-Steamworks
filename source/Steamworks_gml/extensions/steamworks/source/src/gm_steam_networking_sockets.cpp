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
    out.end_reason = (std::int32_t)info.m_eEndReason;
    out.end_debug = info.m_szEndDebug ? info.m_szEndDebug : "";
    out.connection_description = info.m_szConnectionDescription ? info.m_szConnectionDescription : "";
    out.flags = (std::int32_t)info.m_nFlags;
    out.state = (std::int32_t)info.m_eState;
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
    out.old_state = (std::int32_t)e.m_eOldState;
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

    std::string addrStr = std::string(ip) + ":" + std::to_string(port);

    SteamNetworkingIPAddr addr;
    addr.Clear();
    if (!addr.ParseString(addrStr.c_str()))
        return 0;

    HSteamNetConnection c = s->ConnectByIPAddress(addr, 0, nullptr);
    return (std::uint32_t)c;
}

std::int32_t steam_networking_sockets_accept_connection(std::uint32_t conn)
{
    STEAM_GUARD_RET((std::int32_t)k_EResultFail);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return (std::int32_t)k_EResultFail;

    return (std::int32_t)s->AcceptConnection((HSteamNetConnection)conn);
}

bool steam_networking_sockets_close_connection(std::uint32_t conn, std::int32_t reason, std::string_view debug, bool linger)
{
    STEAM_GUARD_RET(false);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return false;

    std::string d(debug);
    return s->CloseConnection((HSteamNetConnection)conn, reason, d.c_str(), linger);
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

std::int32_t steam_networking_sockets_send_message_to_connection(std::uint32_t conn,
                                                                 gm::wire::GMBuffer data,
                                                                 std::uint32_t bytes,
                                                                 gm_enums::SteamNetworkingSendFlags send_flags)
{
    STEAM_GUARD_RET((std::int32_t)k_EResultFail);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return (std::int32_t)k_EResultFail;

    if (bytes == 0) return (std::int32_t)k_EResultInvalidParam;

    return (std::int32_t)s->SendMessageToConnection((HSteamNetConnection)conn,
                                                    (const void*)data.data(),
                                                    (uint32)bytes,
                                                    (int)send_flags,
                                                    nullptr);
}

std::int32_t steam_networking_sockets_flush_messages_on_connection(std::uint32_t conn)
{
    STEAM_GUARD_RET((std::int32_t)k_EResultFail);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return (std::int32_t)k_EResultFail;

    return (std::int32_t)s->FlushMessagesOnConnection((HSteamNetConnection)conn);
}

//TODO
gm_structs::SteamNetworkingSocketsReceived steam_networking_sockets_receive_one_on_connection(std::uint32_t conn,
                                                                                             gm::wire::GMBuffer out_data,
                                                                                             std::uint32_t max_bytes,
                                                                                             std::uint32_t offset)
{
    gm_structs::SteamNetworkingSocketsReceived out{};
    out.ok = false;
    out.conn = conn;
    out.bytes_written = 0;
    out.flags = 0;

    STEAM_GUARD_RET(out);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return out;

    if (max_bytes == 0) return out;

    SteamNetworkingMessage_t* msg = nullptr;
    int n = s->ReceiveMessagesOnConnection((HSteamNetConnection)conn, &msg, 1);
    if (n <= 0 || !msg) return out;

    const uint32 cb = (uint32)msg->m_cbSize;
    const uint32 to_write = (cb < max_bytes) ? cb : max_bytes;

    auto w = out_data.getWriter();
    w.skip(offset);
    w.writeBytes((const char*)msg->m_pData, (int)to_write);

    out.ok = true;
    out.bytes_written = to_write;
    out.flags = (std::int32_t)msg->m_nFlags;

    msg->Release();
    return out;
}

gm_structs::SteamNetworkingSocketsConnectionInfo steam_networking_sockets_get_connection_info(std::uint32_t conn)
{
    gm_structs::SteamNetworkingSocketsConnectionInfo out{};
    out.user_data = 0;
    out.end_reason = 0;
    out.end_debug = "";
    out.connection_description = "";
    out.flags = 0;
    out.state = 0;
    out.steam_id_remote = 0;
    out.addr_remote = "";

    STEAM_GUARD_RET(out);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return out;

    SteamNetConnectionInfo_t info{};
    if (!s->GetConnectionInfo((HSteamNetConnection)conn, &info))
        return out;

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
    if (!ok) return out;

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

gm_structs::SteamNetworkingSocketsReceived steam_networking_sockets_receive_messages_on_poll_group(
    std::uint32_t poll_group,
    gm::wire::GMBuffer out_data,
    std::uint32_t max_bytes,
    std::uint32_t offset)
{
    gm_structs::SteamNetworkingSocketsReceived out{};
    out.ok = false;
    out.bytes_written = 0;
    out.flags = 0;

    STEAM_GUARD_RET(out);

    ISteamNetworkingSockets* s = steam_networking_sockets_iface();
    if (!s) return out;

    SteamNetworkingMessage_t* msg = nullptr;

    const int n = s->ReceiveMessagesOnPollGroup((HSteamNetPollGroup)poll_group, &msg, 1);
    if (n <= 0 || !msg)
        return out;

    const uint32 cb = (uint32)msg->m_cbSize;
    const uint32 to_write = (cb < max_bytes) ? cb : max_bytes;

    auto w = out_data.getWriter();
    w.skip(offset);
    w.writeBytes((const char*)msg->m_pData, (int)to_write);

    out.ok = true;
    out.bytes_written = to_write;
    out.flags = (std::int32_t)msg->m_nFlags;

    msg->Release();
    return out;
}
