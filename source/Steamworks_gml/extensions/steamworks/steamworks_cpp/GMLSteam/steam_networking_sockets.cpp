#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// If you already have something like this, reuse it:
static inline ISteamNetworkingSockets* GM_SteamNetSockets()
{
    return SteamNetworkingSockets();  // global accessor from Steamworks
}

// Utils accessor (for AllocateMessage used by SendMessages)
static inline ISteamNetworkingUtils* GM_SteamNetUtils()
{
    return SteamNetworkingUtils();
}



// Global listen socket (optional – useful if you want to auto-accept)
static HSteamListenSocket g_p2pListenSocket = k_HSteamListenSocket_Invalid;

class GMNetSocketsCallbackHandler
{
public:
    GMNetSocketsCallbackHandler() :
        m_CallbackConnectionStatusChanged(this, &GMNetSocketsCallbackHandler::OnConnectionStatusChanged)
    {}

    STEAM_CALLBACK(GMNetSocketsCallbackHandler,
        OnConnectionStatusChanged,
        SteamNetConnectionStatusChangedCallback_t,
        m_CallbackConnectionStatusChanged);
};

static GMNetSocketsCallbackHandler g_NetSocketsCallbacks;

void GMNetSocketsCallbackHandler::OnConnectionStatusChanged(SteamNetConnectionStatusChangedCallback_t* pInfo)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p || !pInfo)
        return;

    const SteamNetConnectionInfo_t& info = pInfo->m_info;

    //if (info.m_hListenSocket == g_p2pListenSocket &&
    //    info.m_eState == k_ESteamNetworkingConnectionState_Connecting)
    //{
    //    p->AcceptConnection(pInfo->m_hConn);
    //}

    int dsMapIndex = CreateDsMap(1,
        "event_type", (double)0.0, "steam_net_message_on_state_change"
    );

    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "connection", (double)pInfo->m_hConn);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "state", (double)info.m_eState);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "old_state", (double)pInfo->m_eOldState);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "end_reason", (double)info.m_eEndReason);
    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "debug", info.m_szEndDebug ? info.m_szEndDebug : "");

    g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}


// -------------------------------------------------------------------------
// 1. CreateListenSocketIP
// double steam_net_sockets_create_listen_socket_ip(string ip, double port)
YYEXPORT void steam_net_sockets_create_listen_socket_ip(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    const char* ip = YYGetString(args, 0);
    int         port = (int)YYGetReal(args, 1);

    SteamNetworkingIPAddr addr;
    addr.Clear();
    if (!addr.ParseString(ip)) {
        // if parsing fails, treat as ANY and just bind port
    }
    addr.m_port = (uint16)port;

    HSteamListenSocket hListen =
        p->CreateListenSocketIP(addr, 0, nullptr);

    Result.kind = VALUE_REAL;
    Result.val = (double)hListen;
}

// -------------------------------------------------------------------------
// 2. ConnectByIPAddress
// double steam_net_sockets_connect_by_ip(string ip, double port)
YYEXPORT void steam_net_sockets_connect_by_ip(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    const char* ip = YYGetString(args, 0);
    int         port = (int)YYGetReal(args, 1);

    SteamNetworkingIPAddr addr;
    addr.Clear();
    addr.ParseString(ip);
    addr.m_port = (uint16)port;

    HSteamNetConnection hConn =
        p->ConnectByIPAddress(addr, 0, nullptr);

    Result.kind = VALUE_REAL;
    Result.val = (double)hConn;
}

// -------------------------------------------------------------------------
// 3. CreateListenSocketP2P
// double steam_net_sockets_create_listen_socket_p2p(double local_virtual_port)
YYEXPORT void steam_net_sockets_create_listen_socket_p2p(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int virtualPort = (int)YYGetReal(args, 0); // use same helper as in steam_networking.cpp

    HSteamListenSocket hListen =
        p->CreateListenSocketP2P(virtualPort, 0, nullptr);

    g_p2pListenSocket = hListen;

    Result.kind = VALUE_REAL;
    Result.val = (double)hListen;
}

// -------------------------------------------------------------------------
// 4. ConnectP2P
// double steam_net_sockets_connect_p2p(int64 steam_id, double virtual_port)
YYEXPORT void steam_net_sockets_connect_p2p(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);   // or read as a string / double, match your style
    int   virtualPort = (int)YYGetReal(args, 1);

    SteamNetworkingIdentity identity;
    identity.Clear();
    identity.SetSteamID64(steamID64);

    HSteamNetConnection hConn =
        p->ConnectP2P(identity, virtualPort, 0, nullptr);

    Result.kind = VALUE_REAL;
    Result.val = (double)hConn;
}

// -------------------------------------------------------------------------
// 5. AcceptConnection
// double steam_net_sockets_accept_connection(double connection_handle)
YYEXPORT void steam_net_sockets_accept_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    EResult er = p->AcceptConnection(hConn);

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

// -------------------------------------------------------------------------
// 6. CloseConnection
// double steam_net_sockets_close_connection(double connection_handle, double reason, string debug, bool linger)
YYEXPORT void steam_net_sockets_close_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int   reason = (int)YYGetReal(args, 1);
    const char* debug = YYGetString(args, 2);
    bool linger = (YYGetReal(args, 3) != 0.0);

    bool ok = p->CloseConnection(hConn, reason, debug, linger);

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

// -------------------------------------------------------------------------
// 7. CloseListenSocket
// double steam_net_sockets_close_listen_socket(double listen_handle)
YYEXPORT void steam_net_sockets_close_listen_socket(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamListenSocket hListen = (HSteamListenSocket)(int)YYGetReal(args, 0);
    bool ok = p->CloseListenSocket(hListen);

    if (ok && hListen == g_p2pListenSocket)
        g_p2pListenSocket = k_HSteamListenSocket_Invalid;

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

// -------------------------------------------------------------------------
// Socket pair globals (used by CreateSocketPair helpers)
static HSteamNetConnection g_socketPairConn1 = k_HSteamNetConnection_Invalid;
static HSteamNetConnection g_socketPairConn2 = k_HSteamNetConnection_Invalid;

// -------------------------------------------------------------------------
// 8. CreateSocketPair
// bool steam_net_sockets_create_socket_pair(double use_network_loopback)
YYEXPORT void steam_net_sockets_create_socket_pair(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    bool useLoopback = (YYGetReal(args, 0) != 0.0);

    // Optional identities – you can leave them cleared
    SteamNetworkingIdentity id1, id2;
    id1.Clear();
    id2.Clear();

    HSteamNetConnection conn1 = k_HSteamNetConnection_Invalid;
    HSteamNetConnection conn2 = k_HSteamNetConnection_Invalid;

    // NEW SIGNATURE ORDER:
    // (HSteamNetConnection*, HSteamNetConnection*, bool, const SteamNetworkingIdentity*, const SteamNetworkingIdentity*)
    bool ok = p->CreateSocketPair(
        &conn1,
        &conn2,
        useLoopback,
        &id1,
        &id2
    );

    if (ok)
    {
        g_socketPairConn1 = conn1;
        g_socketPairConn2 = conn2;
    }

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// double steam_net_sockets_get_socket_pair_connection1()
YYEXPORT void steam_net_sockets_get_socket_pair_connection1(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    Result.kind = VALUE_REAL;
    Result.val = (double)g_socketPairConn1;
}

// double steam_net_sockets_get_socket_pair_connection2()
YYEXPORT void steam_net_sockets_get_socket_pair_connection2(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    Result.kind = VALUE_REAL;
    Result.val = (double)g_socketPairConn2;
}

// -------------------------------------------------------------------------
// 9. SendMessageToConnection
// double steam_net_sockets_send_message(double connection, buffer buf, double size, double send_flags)
YYEXPORT void steam_net_sockets_send_message(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = -1.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);

    int bufferIndex = (int)YYGetReal(args, 1); // same way steam_networking.cpp gets buffers
    int dataSize = (int)YYGetReal(args, 2);
    int sendFlags = (int)YYGetReal(args, 3);

    void* buffer_data = nullptr;
    int buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_send_message() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_BOOL;
        Result.val = false;

        return;
    }

    EResult er = p->SendMessageToConnection(
        hConn,
        buffer_data,                          // pointer to data
        (uint32)dataSize,
        sendFlags,                      // e.g. k_nSteamNetworkingSend_Reliable etc.
        nullptr                         // [out] message number (optional)
    );

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

// -------------------------------------------------------------------------
// 10. SendMessages
// double steam_net_sockets_send_messages(double connection, buffer buf, double size, double send_flags, [double lane])
YYEXPORT void steam_net_sockets_send_messages(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    

    ISteamNetworkingSockets* pSockets = GM_SteamNetSockets();
    ISteamNetworkingUtils* pUtils = GM_SteamNetUtils();
    if (!pSockets || !pUtils)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);
    int dataSize = (int)YYGetReal(args, 2);
    int sendFlags = (int)YYGetReal(args, 3);
    uint16 lane = 0;
    if (argc > 4)
        lane = (uint16)(int)YYGetReal(args, 4);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_send_messages() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    if (dataSize > buffer_size)
        dataSize = buffer_size;

    SteamNetworkingMessage_t* msg = pUtils->AllocateMessage(dataSize);
    if (!msg)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    memcpy(msg->m_pData, buffer_data, dataSize);
    msg->m_cbSize = dataSize;
    msg->m_conn = hConn;
    msg->m_nFlags = sendFlags;
    msg->m_idxLane = lane;
    msg->m_nUserData = 0;

    SteamNetworkingMessage_t* msgs[1] = { msg };
    int64 resultNumbers[1] = { 0 };

    pSockets->SendMessages(
        1,
        msgs,
        resultNumbers
    );

    // Release message object (frees m_pData as well)
    msg->Release();

    Result.kind = VALUE_REAL;
    Result.val = (double)0;

    
}

// -------------------------------------------------------------------------
// 11. FlushMessagesOnConnection
// double steam_net_sockets_flush_messages_on_connection(double connection)
YYEXPORT void steam_net_sockets_flush_messages_on_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);

    EResult er = p->FlushMessagesOnConnection(hConn);

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

// -------------------------------------------------------------------------
// 12. ReceiveMessagesOnConnection
// double steam_net_sockets_recv_messages_on_connection(double connection, buffer buf, double max_size)
YYEXPORT void steam_net_sockets_recv_messages_on_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);
    int maxSize = (int)YYGetReal(args, 2);

    void* buffer_data = nullptr;
    int   buffer_size = 0;

    //if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    if (BufferGetFromGML(bufferIndex) == NULL)
    {
        DebugConsoleOutput("steam_net_sockets_recv_messages_on_connection() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    //if (maxSize > buffer_size)
    //    maxSize = buffer_size;

    SteamNetworkingMessage_t* pMsg = nullptr;

    int num = p->ReceiveMessagesOnConnection(
        hConn,
        &pMsg,
        1   // grab only one message at a time
    );
    
    if (num <= 0 || !pMsg)
    {
        // no messages available
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int toCopy = (pMsg->m_cbSize < maxSize) ? pMsg->m_cbSize : maxSize;
    if (toCopy < pMsg->m_cbSize)
    {
        DebugConsoleOutput("steam_net_sockets_recv_messages_on_connection() - warning: message size %d truncated to %d bytes\n",
            pMsg->m_cbSize, toCopy);
    }

    //memcpy(buffer_data, pMsg->m_pData, toCopy);
    if (BufferWriteContent(bufferIndex, 0, pMsg->m_pData, (int)toCopy, true) != toCopy)
    {
        DebugConsoleOutput("steam_net_messages_receive_on_channel() - error: could not write to buffer\n");
        Result.kind = VALUE_BOOL;
        Result.val = false;
    }

    pMsg->Release();

    Result.kind = VALUE_REAL;
    Result.val = (double)toCopy;
}

// -------------------------------------------------------------------------
// 13. CreatePollGroup
// double steam_net_sockets_create_poll_group()
YYEXPORT void steam_net_sockets_create_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = -1.0; return; }

    HSteamNetPollGroup hGroup = p->CreatePollGroup();

    Result.kind = VALUE_REAL;
    Result.val = (double)hGroup;
}

// -------------------------------------------------------------------------
// 14. DestroyPollGroup
// double steam_net_sockets_destroy_poll_group(double poll_group)
YYEXPORT void steam_net_sockets_destroy_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetPollGroup hGroup = (HSteamNetPollGroup)(int)YYGetReal(args, 0);
    bool ok = p->DestroyPollGroup(hGroup);

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

// -------------------------------------------------------------------------
// 15. SetConnectionPollGroup
// double steam_net_sockets_set_connection_poll_group(double connection, double poll_group)
YYEXPORT void steam_net_sockets_set_connection_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    HSteamNetPollGroup  hGroup = (HSteamNetPollGroup)YYGetReal(args, 1);

    bool ok = p->SetConnectionPollGroup(hConn, hGroup);

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

// -------------------------------------------------------------------------
// 16. ReceiveMessagesOnPollGroup
// double steam_net_sockets_recv_messages_on_poll_group(double poll_group, buffer buf, double max_size)
YYEXPORT void steam_net_sockets_recv_messages_on_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    HSteamNetPollGroup hGroup = (HSteamNetPollGroup)(int)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);
    int maxSize = (int)YYGetReal(args, 2);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_recv_messages_on_poll_group() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    if (maxSize > buffer_size)
        maxSize = buffer_size;

    SteamNetworkingMessage_t* pMsg = nullptr;
    int num = p->ReceiveMessagesOnPollGroup(
        hGroup,
        &pMsg,
        1
    );

    if (num <= 0 || !pMsg)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int toCopy = (pMsg->m_cbSize < maxSize) ? pMsg->m_cbSize : maxSize;
    memcpy(buffer_data, pMsg->m_pData, toCopy);

    // (Optional) you could store pMsg->m_conn etc. in globals here too.
    pMsg->Release();

    Result.kind = VALUE_REAL;
    Result.val = (double)toCopy;
}

// -------------------------------------------------------------------------
// 17. GetConnectionInfo
// bool steam_net_sockets_get_connection_info(double connection, buffer buf)
YYEXPORT void steam_net_sockets_get_connection_info(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_connection_info() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    SteamNetConnectionInfo_t info;
    bool ok = p->GetConnectionInfo(hConn, &info);

    if (ok)
    {
        int sz = (int)sizeof(info);
        if (sz > buffer_size) sz = buffer_size;
        memcpy(buffer_data, &info, sz);
    }

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// -------------------------------------------------------------------------
// 18. GetConnectionRealTimeStatus
// double steam_net_sockets_get_connection_real_time_status(double connection, buffer buf)
YYEXPORT void steam_net_sockets_get_connection_real_time_status(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_connection_real_time_status() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    SteamNetConnectionRealTimeStatus_t status;
    memset(&status, 0, sizeof(status));

    EResult er = p->GetConnectionRealTimeStatus(
        hConn,
        &status,
        0, nullptr
    );

    if (er == k_EResultOK)
    {
        int sz = (int)sizeof(status);
        if (sz > buffer_size) sz = buffer_size;
        memcpy(buffer_data, &status, sz);
    }

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

// -------------------------------------------------------------------------
// 19. GetDetailedConnectionStatus
// double steam_net_sockets_get_detailed_connection_status(double connection, buffer buf)
YYEXPORT void steam_net_sockets_get_detailed_connection_status(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_detailed_connection_status() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int written = p->GetDetailedConnectionStatus(
        hConn,
        (char*)buffer_data,
        buffer_size
    );

    Result.kind = VALUE_REAL;
    Result.val = (double)written;
}

// -------------------------------------------------------------------------
// 20. SetConnectionUserData
// bool steam_net_sockets_set_connection_user_data(double connection, int64 user_data)
YYEXPORT void steam_net_sockets_set_connection_user_data(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int64 userData = (int64)YYGetInt64(args, 1);

    bool ok = p->SetConnectionUserData(hConn, userData);

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// -------------------------------------------------------------------------
// 21. GetConnectionUserData
// int64 steam_net_sockets_get_connection_user_data(double connection)
YYEXPORT void steam_net_sockets_get_connection_user_data(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    int64 val = k_HSteamNetConnection_Invalid;//k_nSteamNetworkingConnectionUserDataInvalid;
    if (p)
    {
        HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
        val = p->GetConnectionUserData(hConn);
    }

    Result.kind = VALUE_INT64;
    Result.v64 = val;
}

// -------------------------------------------------------------------------
// 22. SetConnectionName
// void steam_net_sockets_set_connection_name(double connection, string name)
YYEXPORT void steam_net_sockets_set_connection_name(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (p)
    {
        HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
        const char* name = YYGetString(args, 1);
        p->SetConnectionName(hConn, name);
    }

    Result.kind = VALUE_REAL;
    Result.val = 1.0;
}

// -------------------------------------------------------------------------
// 23. GetConnectionName
// bool steam_net_sockets_get_connection_name(double connection, buffer buf)
YYEXPORT void steam_net_sockets_get_connection_name(//TODO: BUFF.... should return char
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_connection_name() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    bool ok = p->GetConnectionName(
        hConn,
        (char*)buffer_data,
        buffer_size
    );

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// -------------------------------------------------------------------------
// 24. ConfigureConnectionLanes
// bool steam_net_sockets_configure_connection_lanes(double connection, double lane_count, buffer priorities_buf, buffer weights_buf)
YYEXPORT void steam_net_sockets_configure_connection_lanes(//TODO: Args...
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int nLanes = (int)YYGetReal(args, 1);
    int bufPriIndex = (int)YYGetReal(args, 2);
    int bufWgtIndex = (int)YYGetReal(args, 3);

    void* pri_data = nullptr;
    void* wgt_data = nullptr;
    int   pri_size = 0;
    int   wgt_size = 0;

    if (!BufferGetContent(bufPriIndex, &pri_data, &pri_size) || !pri_data ||
        !BufferGetContent(bufWgtIndex, &wgt_data, &wgt_size) || !wgt_data)
    {
        DebugConsoleOutput("steam_net_sockets_configure_connection_lanes() - invalid buffers\n");
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    bool ok = p->ConfigureConnectionLanes(
        hConn,
        nLanes,
        (int*)pri_data,
        (uint16*)wgt_data
    );

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// -------------------------------------------------------------------------
// 25. GetListenSocketAddress
// bool steam_net_sockets_get_listen_socket_address(double listen_socket, buffer buf)
YYEXPORT void steam_net_sockets_get_listen_socket_address(//TODO: buff.... return string
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    HSteamListenSocket hListen = (HSteamListenSocket)(int)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_listen_socket_address() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    SteamNetworkingIPAddr addr;
    bool ok = p->GetListenSocketAddress(hListen, &addr);
    if (ok)
    {
        int sz = (int)sizeof(addr);
        if (sz > buffer_size) sz = buffer_size;
        memcpy(buffer_data, &addr, sz);
    }

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// -------------------------------------------------------------------------
// 26. GetIdentity
// bool steam_net_sockets_get_identity(buffer buf)
YYEXPORT void steam_net_sockets_get_identity(//TODO: return string
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    int bufferIndex = (int)YYGetReal(args, 0);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_identity() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    SteamNetworkingIdentity id;
    bool ok = p->GetIdentity(&id);
    if (ok)
    {
        int sz = (int)sizeof(id);
        if (sz > buffer_size) sz = buffer_size;
        memcpy(buffer_data, &id, sz);
    }

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// -------------------------------------------------------------------------
// 27. InitAuthentication
// double steam_net_sockets_init_authentication()
YYEXPORT void steam_net_sockets_init_authentication(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    ESteamNetworkingAvailability avail = k_ESteamNetworkingAvailability_CannotTry;
    if (p)
        avail = p->InitAuthentication();

    Result.kind = VALUE_REAL;
    Result.val = (double)avail;
}

// -------------------------------------------------------------------------
// 28. GetAuthenticationStatus
// double steam_net_sockets_get_authentication_status(buffer buf)
YYEXPORT void steam_net_sockets_get_authentication_status(//TODO: return..... String
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = (double)k_ESteamNetworkingAvailability_CannotTry;
        return;
    }

    int bufferIndex = (int)YYGetReal(args, 0);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_authentication_status() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = (double)k_ESteamNetworkingAvailability_CannotTry;
        return;
    }

    SteamNetAuthenticationStatus_t status;
    memset(&status, 0, sizeof(status));

    ESteamNetworkingAvailability avail = p->GetAuthenticationStatus(&status);
    int sz = (int)sizeof(status);
    if (sz > buffer_size) sz = buffer_size;
    memcpy(buffer_data, &status, sz);

    Result.kind = VALUE_REAL;
    Result.val = (double)avail;
}

// -------------------------------------------------------------------------
// 29. ReceivedRelayAuthTicket
// double steam_net_sockets_received_relay_auth_ticket(buffer ticket_buf, double ticket_size, buffer parsed_buf)
YYEXPORT void steam_net_sockets_received_relay_auth_ticket(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int ticketBufIndex = (int)YYGetReal(args, 0);
    int ticketSize = (int)YYGetReal(args, 1);
    int parsedBufIndex = (int)YYGetReal(args, 2);

    void* ticket_data = nullptr;
    int   ticket_buf_size = 0;
    if (!BufferGetContent(ticketBufIndex, &ticket_data, &ticket_buf_size) || !ticket_data)
    {
        DebugConsoleOutput("steam_net_sockets_received_relay_auth_ticket() - invalid ticket buffer\n");
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }
    if (ticketSize > ticket_buf_size)
        ticketSize = ticket_buf_size;

    void* parsed_data = nullptr;
    int   parsed_size = 0;
    if (!BufferGetContent(parsedBufIndex, &parsed_data, &parsed_size) || !parsed_data)
    {
        DebugConsoleOutput("steam_net_sockets_received_relay_auth_ticket() - invalid parsed buffer\n");
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    // NOTE: we do NOT use SteamDatagramRelayAuthTicket here to avoid incomplete-type issues.
    // Pass nullptr for the parsed ticket pointer.
    int res = p->ReceivedRelayAuthTicket(
        ticket_data,
        ticketSize,
        nullptr    // SteamDatagramRelayAuthTicket* (ignored)
    );

    // Optional: copy the raw ticket into parsed_buf for convenience/debugging
    if (res >= 0)
    {
        int sz = ticketSize;
        if (sz > parsed_size) sz = parsed_size;
        memcpy(parsed_data, ticket_data, sz);
    }

    Result.kind = VALUE_REAL;
    Result.val = (double)res;
}

// -------------------------------------------------------------------------
// 30. FindRelayAuthTicketForServer
// double steam_net_sockets_find_relay_auth_ticket_for_server(buffer parsed_buf, double popid)
YYEXPORT void steam_net_sockets_find_relay_auth_ticket_for_server(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    // Read GML args – keep order exactly as you already expose them
    int64 steamID64 = (int64)YYGetInt64(args, 0);
    int   remoteVirtPort = (int)YYGetReal(args, 1);
    int   parsedBufIndex = (int)YYGetReal(args, 2);

    // Validate parsed buffer
    void* parsed_data = nullptr;
    int   parsed_size = 0;
    if (!BufferGetContent(parsedBufIndex, &parsed_data, &parsed_size) || !parsed_data)
    {
        DebugConsoleOutput("steam_net_sockets_find_relay_auth_ticket_for_server() - error: parsed buffer %d not found\n", parsedBufIndex);
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    // Build identity from SteamID64
    SteamNetworkingIdentity id;
    id.Clear();
    id.SetSteamID64(steamID64);

    // Call Steam and DO NOT request the parsed struct to avoid incomplete type error
    int seconds_left = p->FindRelayAuthTicketForServer(
        id,
        remoteVirtPort,
        nullptr  // SteamDatagramRelayAuthTicket* — we ignore it
    );

    // Return seconds until expiry (0 = no ticket, >0 = time left, <0 = error)
    Result.kind = VALUE_REAL;
    Result.val = (double)seconds_left;
}

// -------------------------------------------------------------------------
// 31. ConnectToHostedDedicatedServer
// double steam_net_sockets_connect_to_hosted_dedicated_server(int64 server_steam_id, double remote_virtual_port)
YYEXPORT void steam_net_sockets_connect_to_hosted_dedicated_server(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);
    int   remoteVirtPort = (int)YYGetReal(args, 1);

    SteamNetworkingIdentity id;
    id.Clear();
    id.SetSteamID64(steamID64);

    HSteamNetConnection hConn = p->ConnectToHostedDedicatedServer(
        id,
        remoteVirtPort,
        0, nullptr
    );

    Result.kind = VALUE_REAL;
    Result.val = (double)hConn;
}

// -------------------------------------------------------------------------
// 32. GetHostedDedicatedServerPort
// double steam_net_sockets_get_hosted_dedicated_server_port()
YYEXPORT void steam_net_sockets_get_hosted_dedicated_server_port(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    uint16 port = 0;
    if (p)
        port = p->GetHostedDedicatedServerPort();

    Result.kind = VALUE_REAL;
    Result.val = (double)port;
}

// -------------------------------------------------------------------------
// 33. GetHostedDedicatedServerPOPID
// double steam_net_sockets_get_hosted_dedicated_server_popid()
YYEXPORT void steam_net_sockets_get_hosted_dedicated_server_popid(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    SteamNetworkingPOPID popid = 0;
    if (p)
        popid = p->GetHostedDedicatedServerPOPID();

    Result.kind = VALUE_REAL;
    Result.val = (double)popid;
}

// -------------------------------------------------------------------------
// 34. GetHostedDedicatedServerAddress
// double steam_net_sockets_get_hosted_dedicated_server_address(buffer routing_buf)
YYEXPORT void steam_net_sockets_get_hosted_dedicated_server_address(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = (double)k_EResultFail;
        return;
    }

    int routingBufIndex = (int)YYGetReal(args, 0);

    void* routing_data = nullptr;
    int   routing_size = 0;
    if (!BufferGetContent(routingBufIndex, &routing_data, &routing_size) || !routing_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_hosted_dedicated_server_address() - invalid routing buffer %d\n", routingBufIndex);
        Result.kind = VALUE_REAL;
        Result.val = (double)k_EResultFail;
        return;
    }

    // Treat the GM buffer memory as a SteamDatagramHostedAddress struct.
    // This only needs a *pointer* to the type, so the type can be incomplete.
    SteamDatagramHostedAddress* pRouting = reinterpret_cast<SteamDatagramHostedAddress*>(routing_data);

    EResult er = p->GetHostedDedicatedServerAddress(pRouting);

    // We don't do memcpy – Steam already wrote the struct directly into the buffer.
    // Caller just gets 'er' and the raw bytes in routing_buf.

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

// -------------------------------------------------------------------------
// 35. CreateHostedDedicatedServerListenSocket
// double steam_net_sockets_create_hosted_dedicated_server_listen_socket(double local_virtual_port)
YYEXPORT void steam_net_sockets_create_hosted_dedicated_server_listen_socket(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int localVirtPort = (int)YYGetReal(args, 0);

    HSteamListenSocket hListen = p->CreateHostedDedicatedServerListenSocket(
        localVirtPort,
        0, nullptr
    );

    Result.kind = VALUE_REAL;
    Result.val = (double)hListen;
}

// -------------------------------------------------------------------------
// 36. GetGameCoordinatorServerLogin
// double steam_net_sockets_get_game_coordinator_server_login(buffer login_buf, buffer blob_buf, double blob_max_size)
YYEXPORT void steam_net_sockets_get_game_coordinator_server_login(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int loginBufIndex = (int)YYGetReal(args, 0);
    int blobBufIndex = (int)YYGetReal(args, 1);
    int blobMaxSize = (int)YYGetReal(args, 2);

    void* login_data = nullptr;
    void* blob_data = nullptr;
    int   login_size = 0;
    int   blob_size = 0;

    if (!BufferGetContent(loginBufIndex, &login_data, &login_size) || !login_data ||
        !BufferGetContent(blobBufIndex, &blob_data, &blob_size) || !blob_data)
    {
        DebugConsoleOutput("steam_net_sockets_get_game_coordinator_server_login() - invalid buffers\n");
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    if (blobMaxSize > blob_size)
        blobMaxSize = blob_size;

    int cbSignedBlob = blobMaxSize;

    // Use the GameMaker buffer memory as the SteamDatagramGameCoordinatorServerLogin struct.
    // This only needs a pointer type, so the type can be incomplete.
    SteamDatagramGameCoordinatorServerLogin* pLogin =
        reinterpret_cast<SteamDatagramGameCoordinatorServerLogin*>(login_data);

    EResult er = p->GetGameCoordinatorServerLogin(
        pLogin,        // struct written directly into login_buf
        &cbSignedBlob, // in/out size of signed blob
        blob_data      // blob written directly into blob_buf
    );

    if (er != k_EResultOK)
    {
        cbSignedBlob = 0;

        // Optional: clear login buffer on failure so GML doesn't read garbage
        if (login_data && login_size > 0)
            memset(login_data, 0, login_size);
    }

    // Return blob size actually written (0 on failure)
    Result.kind = VALUE_REAL;
    Result.val = (double)cbSignedBlob;
}

// -------------------------------------------------------------------------
// 37. BeginAsyncRequestFakeIP
// bool steam_net_sockets_begin_async_request_fake_ip(double num_ports)
YYEXPORT void steam_net_sockets_begin_async_request_fake_ip(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    bool ok = false;
    if (p)
    {
        int numPorts = (int)YYGetReal(args, 0);
        ok = p->BeginAsyncRequestFakeIP(numPorts);
    }

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// -------------------------------------------------------------------------
// 38. GetFakeIP  (currently commented out)
///// double steam_net_sockets_get_fake_ip(double idx_fake_port, buffer buf)
//YYEXPORT void steam_net_sockets_get_fake_ip(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = GM_SteamNetSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    int idxFakePort = (int)YYGetReal(args, 0);
//    int bufferIndex = (int)YYGetReal(args, 1);
//
//    void* buffer_data = nullptr;
//    int   buffer_size = 0;
//    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
//    {
//        DebugConsoleOutput("steam_net_sockets_get_fake_ip() - invalid buffer\n");
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    SteamNetworkingIPAddr addr;
//    ESteamNetworkingFakeIPType type = p->GetFakeIP(
//        idxFakePort,
//        &addr
//    );
//
//    if (type != k_ESteamNetworkingFakeIPType_Invalid)
//    {
//        int sz = (int)sizeof(addr);
//        if (sz > buffer_size) sz = buffer_size;
//        memcpy(buffer_data, &addr, sz);
//    }
//    else
//    {
//        // Optional: clear buffer if there is no valid FakeIP
//        memset(buffer_data, 0, buffer_size);
//    }
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)type;
//}

// -------------------------------------------------------------------------
// 39. CreateListenSocketP2PFakeIP
// double steam_net_sockets_create_listen_socket_p2p_fake_ip(double idx_fake_port)
YYEXPORT void steam_net_sockets_create_listen_socket_p2p_fake_ip(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = GM_SteamNetSockets();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int idxFakePort = (int)YYGetReal(args, 0);

    HSteamListenSocket hListen = p->CreateListenSocketP2PFakeIP(
        idxFakePort,
        0, nullptr
    );

    Result.kind = VALUE_REAL;
    Result.val = (double)hListen;
}

// -------------------------------------------------------------------------
// 40. GetRemoteFakeIPForConnection  (currently commented out)
//// double steam_net_sockets_get_remote_fake_ip_for_connection(double connection, buffer buf)
//YYEXPORT void steam_net_sockets_get_remote_fake_ip_for_connection(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = GM_SteamNetSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
//    int bufferIndex = (int)YYGetReal(args, 1);
//
//    void* buffer_data = nullptr;
//    int   buffer_size = 0;
//    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
//    {
//        DebugConsoleOutput("steam_net_sockets_get_remote_fake_ip_for_connection() - invalid buffer\n");
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    SteamNetworkingIPAddr addr;
//    ESteamNetworkingFakeIPType type = p->GetRemoteFakeIPForConnection(
//        hConn,
//        &addr
//    );
//
//    int sz = (int)sizeof(addr);
//    if (sz > buffer_size) sz = buffer_size;
//    memcpy(buffer_data, &addr, sz);
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)type;
//}

// -------------------------------------------------------------------------
// 41. CreateFakeUDPPort  (currently commented out)
//// double steam_net_sockets_create_fake_udp_port(double idx_fake_server_port)
//YYEXPORT void steam_net_sockets_create_fake_udp_port(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = GM_SteamNetSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = -1.0;
//        return;
//    }
//
//    int idxFakeServerPort = (int)YYGetReal(args, 0);
//
//    HSteamNetConnection hConn = p->CreateFakeUDPPort(idxFakeServerPort);
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)hConn;
//}
