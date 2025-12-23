#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
#include <atomic>

class GMNetSocketsCallbackHandler
{
public:
    GMNetSocketsCallbackHandler() :
        m_CallbackConnectionStatusChanged(this, &GMNetSocketsCallbackHandler::OnConnectionStatusChanged),
        m_CallbackAuthenticationStatusChanged(this, &GMNetSocketsCallbackHandler::OnAuthenticationStatusChanged)
    {}

    STEAM_CALLBACK(GMNetSocketsCallbackHandler,
        OnConnectionStatusChanged,
        SteamNetConnectionStatusChangedCallback_t,
        m_CallbackConnectionStatusChanged);

    STEAM_CALLBACK(GMNetSocketsCallbackHandler,
        OnAuthenticationStatusChanged,
        SteamNetAuthenticationStatus_t,
        m_CallbackAuthenticationStatusChanged);
};

static GMNetSocketsCallbackHandler g_NetSocketsCallbacks;

void GMNetSocketsCallbackHandler::OnConnectionStatusChanged(SteamNetConnectionStatusChangedCallback_t* pInfo)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p || !pInfo)
        return;

    const SteamNetConnectionInfo_t& info = pInfo->m_info;

    int dsMapIndex = CreateDsMap(1,
        "event_type", (double)0.0, "steam_net_message_on_state_change"
    );

    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "connection", (double)pInfo->m_hConn);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "state", (double)info.m_eState);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "old_state", (double)pInfo->m_eOldState);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "end_reason", (double)info.m_eEndReason);
    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "debug", info.m_szEndDebug ? info.m_szEndDebug : "");

    g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);

    // Steamworks manual states we need to close the connection when dropped to avoid memory leaks
    if (info.m_eState == ESteamNetworkingConnectionState::k_ESteamNetworkingConnectionState_ClosedByPeer || 
        info.m_eState == ESteamNetworkingConnectionState::k_ESteamNetworkingConnectionState_ProblemDetectedLocally) {
        p->CloseConnection(pInfo->m_hConn, 0, nullptr, false);
    }
}

void GMNetSocketsCallbackHandler::OnAuthenticationStatusChanged(SteamNetAuthenticationStatus_t* status) {
    // Say something to the runner??
}

YYEXPORT void steam_net_sockets_create_listen_socket_ip(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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

YYEXPORT void steam_net_sockets_connect_by_ip(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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

YYEXPORT void steam_net_sockets_create_listen_socket_p2p(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int virtualPort = (int)YYGetReal(args, 0); // use same helper as in steam_networking.cpp

    HSteamListenSocket hListen = p->CreateListenSocketP2P(virtualPort, 0, nullptr);

    Result.kind = VALUE_REAL;
    Result.val = (double)hListen;
}

YYEXPORT void steam_net_sockets_connect_p2p(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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

YYEXPORT void steam_net_sockets_accept_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    EResult er = p->AcceptConnection(hConn);

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

YYEXPORT void steam_net_sockets_close_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int   reason = (int)YYGetReal(args, 1);
    const char* debug = (args[2].kind == VALUE_UNDEFINED) ? nullptr : YYGetString(args, 2);
    bool linger = (YYGetReal(args, 3) != 0.0);

    bool ok = p->CloseConnection(hConn, reason, debug, linger);

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

YYEXPORT void steam_net_sockets_close_listen_socket(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamListenSocket hListen = (HSteamListenSocket)(int)YYGetReal(args, 0);
    bool ok = p->CloseListenSocket(hListen);

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

YYEXPORT void steam_net_sockets_create_socket_pair(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    YYCreateArray(&Result);

    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        return;
    }

    bool useLoopback = (YYGetReal(args, 0) != 0.0);

    SteamNetworkingIdentity id1{}, id2{};
    id1.Clear();
    id2.Clear();

    HSteamNetConnection conn1 = k_HSteamNetConnection_Invalid;
    HSteamNetConnection conn2 = k_HSteamNetConnection_Invalid;

    bool ok = p->CreateSocketPair(&conn1, &conn2, useLoopback, &id1, &id2);
    if (!ok)
    {
        return;
    }
    
    char idBuf1[128] = { 0 };
    char idBuf2[128] = { 0 };
    id1.ToString(idBuf1, sizeof(idBuf1));
    id2.ToString(idBuf2, sizeof(idBuf2));
    
    RValue a = {0};
    YYStructCreate(&a);
    YYStructAddDouble(&a, "connection", conn1);
    YYStructAddString(&a, "identity", idBuf1);
    YYStructAddBool(&a, "loopback", useLoopback);
    SET_RValue(&Result, &a, nullptr, 0);

    
    RValue b = {0};
    YYStructCreate(&b);
    YYStructAddDouble(&b, "connection", conn2);
    YYStructAddString(&b, "identity", idBuf2);
    YYStructAddBool(&b, "loopback", useLoopback);
    SET_RValue(&Result, &b, nullptr, 1);

    YYFree(&a);
    YYFree(&b);
}

YYEXPORT void steam_net_sockets_send_message(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = -1.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);

    int bufferIndex = (int)YYGetReal(args, 1);
    int dataSize = (int)YYGetReal(args, 2);
    int sendFlags = (int)YYGetReal(args, 3);

    void* buffer_data = nullptr;
    int buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_sockets_send_message() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = (double) -1;
        return;
    }

    if (dataSize < 0) dataSize = buffer_size;
    if (dataSize > buffer_size) dataSize = buffer_size;

    int64_t message_id = 0;
    EResult er = p->SendMessageToConnection(
        hConn,
        buffer_data,
        (uint32)dataSize,
        sendFlags,
        &message_id
    );

    YYStructCreate(&Result);
    YYStructAddDouble(&Result, "result", (double)er);
    YYStructAddInt64(&Result, "message_id", message_id);

    YYFree(buffer_data);
}

// A single heap allocation that owns the payload bytes until all messages release it.
struct PayloadBlock
{
    std::atomic<uint32_t> refs;
    uint32_t              size;
    std::byte             data[1]; // flexible array tail (allocated larger)
};

static PayloadBlock* AllocatePayloadBlock(const void* src, uint32_t size, uint32_t refs)
{
    // Flexible-array allocation
    const size_t allocSize = sizeof(PayloadBlock) + (size_t)size - 1;
    auto* block = (PayloadBlock*)YYAlloc((int)allocSize);
    if (!block) return nullptr;

    block->refs.store(refs, std::memory_order_relaxed);
    block->size = size;

    if (size > 0 && src)
        std::memcpy(block->data, src, size);

    return block;
}

static void FreePayloadBlock(PayloadBlock* block)
{
    YYFree(block);
}

// Steam will call this from any thread, possibly before SendMessages returns.
// Must be fast + thread-safe.
static void ReleasePayloadBlockFromMessage(SteamNetworkingMessage_t* msg)
{
    // We stored the PayloadBlock* in m_nUserData.
    auto* block = reinterpret_cast<PayloadBlock*>(static_cast<uintptr_t>(msg->m_nUserData));

    if (!block)
        return;

    // If this was the last reference, free the block.
    if (block->refs.fetch_sub(1, std::memory_order_acq_rel) == 1)
    {
        FreePayloadBlock(block);
    }
}

YYEXPORT void steam_net_sockets_send_messages(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* pSockets = SteamNetworkingSockets();
    ISteamNetworkingUtils* pUtils = SteamNetworkingUtils();
    if (!pSockets || !pUtils)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    std::vector<double> connValues = _SW_GetArrayOfReal(args, 0, "steam_net_sockets_send_messages");

    // If array is empty, nothing to send, treat as success
    if (connValues.empty())
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    const int bufferIndex = (int)YYGetReal(args, 1);
    int dataSize = (int)YYGetReal(args, 2);
    const int sendFlags = (int)YYGetReal(args, 3);
    const uint16 lane = (argc > 4) ? (uint16)YYGetReal(args, 4) : 0;

    void* bufferCopy = nullptr;
    int   bufferSize = 0;
    if (!BufferGetContent(bufferIndex, &bufferCopy, &bufferSize) || !bufferCopy)
    {
        DebugConsoleOutput("steam_net_sockets_send_messages() - error: specified buffer %d not found\n", bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    // Contract: dataSize < 0 means "send whole buffer"
    if (dataSize < 0) dataSize = bufferSize;
    if (dataSize > bufferSize) dataSize = bufferSize;

    // Decide your contract here: I treat 0 as error (not "whole buffer")
    if (dataSize <= 0)
    {
        YYFree(bufferCopy);
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    const int n = (int)connValues.size();
    if (n <= 0)
    {
        YYFree(bufferCopy);
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    // Refcount is uint32_t; clamp/guard very large sends.
    if ((uint64_t)n > (uint64_t)UINT32_MAX)
    {
        YYFree(bufferCopy);
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    std::vector<SteamNetworkingMessage_t*> msgs(n, nullptr);
    std::vector<int64> results(n, 0);

    // Allocate all message objects first so we don�t leak payload on partial failure
    for (int i = 0; i < n; ++i)
    {
        msgs[i] = pUtils->AllocateMessage(0); // we provide our own payload
        if (!msgs[i])
        {
            for (int j = 0; j < i; ++j)
                msgs[j]->Release();

            YYFree(bufferCopy);

            Result.kind = VALUE_REAL;
            Result.val = -1.0;
            return;
        }
    }

    // Allocate shared payload block and copy bytes into it
    PayloadBlock* block = AllocatePayloadBlock(bufferCopy, (uint32_t)dataSize, (uint32_t)n);

    // Done with GM buffer copy either way
    YYFree(bufferCopy);

    if (!block)
    {
        for (int i = 0; i < n; ++i)
            msgs[i]->Release();

        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    // Store pointer in user data (portable cast)
    const int64 userData = (int64)(uintptr_t)block;

    // Fill message fields (do not touch messages after SendMessages)
    for (int i = 0; i < n; ++i)
    {
        SteamNetworkingMessage_t* msg = msgs[i];

        msg->m_pData = block->data;
        msg->m_cbSize = dataSize;
        msg->m_conn = (HSteamNetConnection)connValues[i];
        msg->m_nFlags = sendFlags;
        msg->m_idxLane = lane;

        msg->m_nUserData = userData;
        msg->m_pfnFreeData = &ReleasePayloadBlockFromMessage;
    }

    // Send; Steam takes ownership of message structures.
    // Callback may run from any thread, even before this returns.
    pSockets->SendMessages(n, msgs.data(), results.data());

    Result.kind = VALUE_REAL;
    Result.val = 0;
}


YYEXPORT void steam_net_sockets_flush_messages_on_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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

YYEXPORT void steam_net_sockets_recv_messages_on_connection(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    YYCreateArray(&Result);

    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) return;

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);

    int maxMessages = (argc > 2) ? (int)YYGetReal(args, 2) : 32;
    if (maxMessages <= 0) maxMessages = 32;
    if (maxMessages > 256) maxMessages = 256; // sanity cap

    int maxBytesTotal = (argc > 3) ? (int)YYGetReal(args, 3) : 0; // 0 => no cap

    if (!BufferGetFromGML(bufferIndex))
        return;

    std::vector<SteamNetworkingMessage_t*> msgs((size_t)maxMessages, nullptr);

    int num = p->ReceiveMessagesOnConnection(hConn, msgs.data(), maxMessages);
    if (num <= 0)
        return;

    int writeOffset = 0;
    int totalWritten = 0;

    for (int i = 0; i < num; ++i)
    {
        SteamNetworkingMessage_t* msg = msgs[i];
        if (!msg) continue;

        int cb = msg->m_cbSize;
        if (cb < 0) cb = 0;

        // Optional cap on total bytes packed this call
        if (maxBytesTotal > 0 && totalWritten >= maxBytesTotal)
        {
            msg->Release();
            continue;
        }

        int toWrite = cb;
        if (maxBytesTotal > 0)
        {
            int remaining = maxBytesTotal - totalWritten;
            if (toWrite > remaining) toWrite = remaining;
        }

        // Write message bytes into buffer at current offset; allow resize
        int written = BufferWriteContent(bufferIndex, writeOffset, msg->m_pData, toWrite, true);
        if (written != toWrite)
        {
            // If write fails, stop packing further
            msg->Release();
            break;
        }

        // Create per-message metadata struct
        RValue entry = { 0 };
        YYStructCreate(&entry);
        YYStructAddInt(&entry, "offset", writeOffset);
        YYStructAddInt(&entry, "size", toWrite);
        YYStructAddBool(&entry, "truncated", toWrite != cb);

        SET_RValue(&Result, &entry, nullptr, i);
        YYFree(&entry);

        writeOffset += toWrite;
        totalWritten += toWrite;

        msg->Release();
    }
}

YYEXPORT void steam_net_sockets_create_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = -1.0; return; }

    HSteamNetPollGroup hGroup = p->CreatePollGroup();

    Result.kind = VALUE_REAL;
    Result.val = (double)hGroup;
}

YYEXPORT void steam_net_sockets_destroy_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetPollGroup hGroup = (HSteamNetPollGroup)(int)YYGetReal(args, 0);
    bool ok = p->DestroyPollGroup(hGroup);

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

YYEXPORT void steam_net_sockets_set_connection_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) { Result.kind = VALUE_REAL; Result.val = 0.0; return; }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    HSteamNetPollGroup  hGroup = (HSteamNetPollGroup)YYGetReal(args, 1);

    bool ok = p->SetConnectionPollGroup(hConn, hGroup);

    Result.kind = VALUE_REAL;
    Result.val = ok ? 1.0 : 0.0;
}

YYEXPORT void steam_net_sockets_recv_messages_on_poll_group(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    YYCreateArray(&Result);

    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) return;

    HSteamNetPollGroup hGroup = (HSteamNetPollGroup)(int)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);

    int maxMessages = (argc > 2) ? (int)YYGetReal(args, 2) : 32;
    if (maxMessages <= 0)  maxMessages = 32;
    if (maxMessages > 256) maxMessages = 256; // sanity cap

    int maxBytesTotal = (argc > 3) ? (int)YYGetReal(args, 3) : 0; // 0 => no cap

    if (!BufferGetFromGML(bufferIndex))
    {
        DebugConsoleOutput("steam_net_sockets_recv_messages_on_poll_group() - error: specified buffer %d not found\n", bufferIndex);
        return;
    }

    std::vector<SteamNetworkingMessage_t*> msgs((size_t)maxMessages, nullptr);

    int num = p->ReceiveMessagesOnPollGroup(hGroup, msgs.data(), maxMessages);
    if (num <= 0)
        return;

    int writeOffset = 0;
    int totalWritten = 0;

    for (int i = 0; i < num; ++i)
    {
        SteamNetworkingMessage_t* msg = msgs[i];
        if (!msg) continue;

        int cb = msg->m_cbSize;
        if (cb < 0) cb = 0;

        // Optional cap on total bytes packed this call
        if (maxBytesTotal > 0 && totalWritten >= maxBytesTotal)
        {
            msg->Release();
            continue;
        }

        int toWrite = cb;
        if (maxBytesTotal > 0)
        {
            int remaining = maxBytesTotal - totalWritten;
            if (toWrite > remaining) toWrite = remaining;
        }

        int written = BufferWriteContent(bufferIndex, writeOffset, msg->m_pData, toWrite, true);
        if (written != toWrite)
        {
            DebugConsoleOutput("steam_net_sockets_recv_messages_on_poll_group() - error: could not write to buffer\n");
            msg->Release();
            break;
        }

        RValue entry = { 0 };
        YYStructCreate(&entry);
        YYStructAddInt(&entry, "offset", writeOffset);
        YYStructAddInt(&entry, "size", toWrite);
        YYStructAddBool(&entry, "truncated", toWrite != cb);

        YYStructAddDouble(&entry, "connection", (double)msg->m_conn);
        YYStructAddInt(&entry, "flags", (int)msg->m_nFlags);
        YYStructAddInt(&entry, "lane", (int)msg->m_idxLane);

        SET_RValue(&Result, &entry, nullptr, i);
        YYFree(&entry);

        writeOffset += toWrite;
        totalWritten += toWrite;

        msg->Release();
    }
}

YYEXPORT void steam_net_sockets_get_connection_info(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    YYStructCreate(&Result);

    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        Result.kind = VALUE_UNDEFINED;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);

    SteamNetConnectionInfo_t info{};
    bool ok = p->GetConnectionInfo(hConn, &info);
    if (!ok)
    {
        Result.kind = VALUE_UNDEFINED;
        return;
    }

    YYStructCreate(&Result);
    YYStructAddInt(&Result, "state", (int)info.m_eState);
    YYStructAddInt(&Result, "end_reason", (int)info.m_eEndReason);
    YYStructAddInt(&Result, "flags", (int)info.m_nFlags);
    YYStructAddInt64(&Result, "user_data", info.m_nUserData);
    YYStructAddInt(&Result, "listen_socket", (int)info.m_hListenSocket);
    YYStructAddInt(&Result, "remote_pop", (int)info.m_idPOPRemote);
    YYStructAddInt(&Result, "relay_pop", (int)info.m_idPOPRelay);

    YYStructAddString(&Result, "description", info.m_szConnectionDescription);
    YYStructAddString(&Result, "debug", info.m_szEndDebug);

    char identBuf[SteamNetworkingIPAddr::k_cchMaxString]{};
    info.m_identityRemote.ToString(identBuf, sizeof(identBuf));
    YYStructAddString(&Result, "remote_identity", identBuf);

    char addrBuf[SteamNetworkingIPAddr::k_cchMaxString]{};
    info.m_addrRemote.ToString(addrBuf, sizeof(addrBuf), true);
    YYStructAddString(&Result, "remote_addr", addrBuf);
}

YYEXPORT void steam_net_sockets_get_connection_real_time_status(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        Result.kind = VALUE_UNDEFINED;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);

    SteamNetConnectionRealTimeStatus_t status{};

    EResult er = p->GetConnectionRealTimeStatus(hConn, &status, 0, nullptr);
    if (er != k_EResultOK)
    {
        Result.kind = VALUE_REAL;
        Result.val = er;
        return;
    }

    YYStructCreate(&Result);
    YYStructAddInt(&Result, "state", (int)status.m_eState);
    YYStructAddInt(&Result, "ping", status.m_nPing);
    YYStructAddDouble(&Result, "local_quality", status.m_flConnectionQualityLocal);
    YYStructAddDouble(&Result, "remote_quality", status.m_flConnectionQualityRemote);
    YYStructAddDouble(&Result, "out_packets_per_sec", status.m_flOutPacketsPerSec);
    YYStructAddDouble(&Result, "out_bytes_per_sec", status.m_flOutBytesPerSec);
    YYStructAddDouble(&Result, "in_packets_per_sec", status.m_flInPacketsPerSec);
    YYStructAddDouble(&Result, "in_bytes_per_sec", status.m_flInBytesPerSec);
    YYStructAddInt(&Result, "send_rate_bytes_per_sec", status.m_nSendRateBytesPerSecond);
    YYStructAddInt(&Result, "pending_unreliable", status.m_cbPendingUnreliable);
    YYStructAddInt(&Result, "pending_reliable", status.m_cbPendingReliable);
    YYStructAddInt(&Result, "sent_unacked_reliable", status.m_cbSentUnackedReliable);
    YYStructAddInt64(&Result, "queue_time_usec", status.m_usecQueueTime);
}

YYEXPORT void steam_net_sockets_get_detailed_connection_status(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p) {
        Result.kind = VALUE_UNDEFINED;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int bytes = p->GetDetailedConnectionStatus(hConn, nullptr, 0);
    if (bytes == -1) {
        Result.kind = VALUE_UNDEFINED;
        return;
    }

    std::string tmp;
    tmp.resize(bytes);
    p->GetDetailedConnectionStatus(hConn, tmp.data(), (int)tmp.size());

    YYCreateString(&Result, tmp.c_str());
}

YYEXPORT void steam_net_sockets_set_connection_user_data(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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

YYEXPORT void steam_net_sockets_get_connection_user_data(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    int64 val = k_HSteamNetConnection_Invalid;
    if (p)
    {
        HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
        val = p->GetConnectionUserData(hConn);
    }

    Result.kind = VALUE_INT64;
    Result.v64 = val;
}

YYEXPORT void steam_net_sockets_set_connection_name(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (p)
    {
        HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
        const char* name = YYGetString(args, 1);
        p->SetConnectionName(hConn, name);
    }

    Result.kind = VALUE_REAL;
    Result.val = 1.0;
}

YYEXPORT void steam_net_sockets_get_connection_name(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        YYCreateString(&Result, "");
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);

    char nameBuf[256] = { 0 };

    bool ok = p->GetConnectionName(
        hConn,
        nameBuf,
        sizeof(nameBuf)
    );

    if (!ok)
    {
        YYCreateString(&Result, "");
        return;
    }

    YYCreateString(&Result, nameBuf);
}

YYEXPORT void steam_net_sockets_configure_connection_lanes(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    if (argc < 4)
    {
        DebugConsoleOutput("steam_net_sockets_configure_connection_lanes() - not enough arguments\n");
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    HSteamNetConnection hConn = (HSteamNetConnection)YYGetReal(args, 0);
    int                 nLanes = (int)YYGetReal(args, 1);
    int                 bufPriIndex = (int)YYGetReal(args, 2);
    int                 bufWgtIndex = (int)YYGetReal(args, 3);

    if (nLanes <= 0)
    {
        DebugConsoleOutput("steam_net_sockets_configure_connection_lanes() - lane_count <= 0\n");
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

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

        YYFree(pri_data);
        YYFree(wgt_data);

        return;
    }

    int maxPriLanes = pri_size / (int)sizeof(int);
    int maxWgtLanes = wgt_size / (int)sizeof(uint16);

    int maxLanes = maxPriLanes < maxWgtLanes ? maxPriLanes : maxWgtLanes;

    if (maxLanes <= 0)
    {
        DebugConsoleOutput("steam_net_sockets_configure_connection_lanes() - buffers too small\n");
        Result.kind = VALUE_BOOL;
        Result.val = false;

        YYFree(pri_data);
        YYFree(wgt_data);

        return;
    }

    if (nLanes > maxLanes)
    {
        DebugConsoleOutput(
            "steam_net_sockets_configure_connection_lanes() - lane_count %d clamped to %d by buffer sizes\n",
            nLanes, maxLanes
        );
        nLanes = maxLanes;
    }

    bool ok = p->ConfigureConnectionLanes(
        hConn,
        nLanes,
        (int*)pri_data,
        (uint16*)wgt_data
    );

    Result.kind = VALUE_BOOL;
    Result.val = ok;

    YYFree(pri_data);
    YYFree(wgt_data);
}

YYEXPORT void steam_net_sockets_get_listen_socket_address(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        YYCreateString(&Result, "");
        return;
    }

    HSteamListenSocket hListen = (HSteamListenSocket)(int)YYGetReal(args, 0);

    SteamNetworkingIPAddr addr;
    if (!p->GetListenSocketAddress(hListen, &addr))
    {
        YYCreateString(&Result, "");
        return;
    }

    char buf[SteamNetworkingIPAddr::k_cchMaxString] = { 0 };
    addr.ToString(buf, sizeof(buf), true);

    YYCreateString(&Result, buf);
}


YYEXPORT void steam_net_sockets_get_identity(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    YYStructCreate(&Result);

    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        YYStructAddBool(&Result, "success", false);
        return;
    }

    SteamNetworkingIdentity id;
    bool ok = p->GetIdentity(&id);

    if (!ok || id.IsInvalid())
    {
        YYStructAddBool(&Result, "success", false);
        return;
    }

    YYStructAddBool(&Result, "success", true);
    YYStructAddDouble(&Result, "type", (double)id.m_eType);

    const char* typeName = "unknown";
    switch (id.m_eType)
    {
    case k_ESteamNetworkingIdentityType_Invalid:        typeName = "invalid"; break;
    case k_ESteamNetworkingIdentityType_SteamID:        typeName = "steamid"; break;
    case k_ESteamNetworkingIdentityType_XboxPairwiseID: typeName = "xbox_pairwise"; break;
    case k_ESteamNetworkingIdentityType_SonyPSN:        typeName = "psn"; break;
    case k_ESteamNetworkingIdentityType_IPAddress:      typeName = "ip_address"; break;
    case k_ESteamNetworkingIdentityType_GenericString:  typeName = "generic_string"; break;
    case k_ESteamNetworkingIdentityType_GenericBytes:   typeName = "generic_bytes"; break;
    case k_ESteamNetworkingIdentityType_UnknownType:    typeName = "unknown_type"; break;
    default:                                            typeName = "unknown"; break;
    }
    YYStructAddString(&Result, "type_name", typeName);

    char idStr[SteamNetworkingIdentity::k_cchMaxString] = { 0 };
    id.ToString(idStr, sizeof(idStr));
    YYStructAddString(&Result, "identity_string", idStr);

    uint64 steamID64 = id.GetSteamID64();
    YYStructAddInt64(&Result, "steam_id", steamID64);

    const char* xboxID = id.GetXboxPairwiseID();
    if (xboxID == nullptr) YYStructAddUndefined(&Result, "xbox_pairwise_id");
    else  YYStructAddString(&Result, "xbox_pairwise_id", xboxID);

    uint64 psnID = id.GetPSNID();
    YYStructAddInt64(&Result, "psn_id", psnID);

    const char* genericStr = id.GetGenericString();
    if (genericStr == nullptr) YYStructAddUndefined(&Result, "generic_string");
    else YYStructAddString(&Result, "generic_string", genericStr);

    int genericLen = 0;
    const uint8* genericBytes = id.GetGenericBytes(genericLen);
    YYStructAddInt(&Result, "generic_bytes_len", genericBytes ? genericLen : 0);
    if (genericBytes == nullptr) YYStructAddUndefined(&Result, "generic_bytes");
    else {
        static_assert(SteamNetworkingIdentity::k_cbMaxGenericBytes == 32, "steam_net_sockets_get_identity :: k_cbMaxGenericBytes is not 32 bytes");
        constexpr size_t size = static_cast<size_t>(((SteamNetworkingIdentity::k_cbMaxGenericBytes + 2) / 3)) * 4;
        char encoded[size]{};
        Base64Encode(genericBytes, genericLen, encoded, sizeof(encoded));
        YYStructAddString(&Result, "generic_bytes", encoded);
    }

    const SteamNetworkingIPAddr* pIP = id.GetIPAddr();
    if (pIP == nullptr) YYStructAddUndefined(&Result, "ip");
    else {
        char ipStr[SteamNetworkingIPAddr::k_cchMaxString]{};
        pIP->ToString(ipStr, sizeof(ipStr), true);
        YYStructAddString(&Result, "ip", ipStr);
    }    
    
    YYStructAddBool(&Result, "is_local_host", id.IsLocalHost());
    YYStructAddDouble(&Result, "fake_ip_type", (double)id.GetFakeIPType());
}

YYEXPORT void steam_net_sockets_init_authentication(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    ESteamNetworkingAvailability avail = k_ESteamNetworkingAvailability_CannotTry;
    if (p)
        avail = p->InitAuthentication();

    Result.kind = VALUE_REAL;
    Result.val = (double)avail;
}

YYEXPORT void steam_net_sockets_get_authentication_status(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingSockets* p = SteamNetworkingSockets();
    if (!p)
    {
        Result.kind = VALUE_UNDEFINED;
        return;
    }

    SteamNetAuthenticationStatus_t status{};
    p->GetAuthenticationStatus(&status);

    YYStructCreate(&Result);
    YYStructAddString(&Result, "debug_message", status.m_debugMsg);
    YYStructAddInt(&Result, "availability", (int)status.m_eAvail);
}



///////////////Gameservers utilizing Steam Datagram Relay///////////////// This secction will be ignored for now....


//YYEXPORT void steam_net_sockets_received_relay_auth_ticket(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    int ticketBufIndex = (int)YYGetReal(args, 0);
//    int ticketSize = (int)YYGetReal(args, 1);
//    int parsedBufIndex = (int)YYGetReal(args, 2);
//
//    void* ticket_data = nullptr;
//    int   ticket_buf_size = 0;
//    if (!BufferGetContent(ticketBufIndex, &ticket_data, &ticket_buf_size) || !ticket_data)
//    {
//        DebugConsoleOutput("steam_net_sockets_received_relay_auth_ticket() - invalid ticket buffer\n");
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//    if (ticketSize > ticket_buf_size)
//        ticketSize = ticket_buf_size;
//
//    void* parsed_data = nullptr;
//    int   parsed_size = 0;
//    if (!BufferGetContent(parsedBufIndex, &parsed_data, &parsed_size) || !parsed_data)
//    {
//        DebugConsoleOutput("steam_net_sockets_received_relay_auth_ticket() - invalid parsed buffer\n");
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    // NOTE: we do NOT use SteamDatagramRelayAuthTicket here to avoid incomplete-type issues.
//    // Pass nullptr for the parsed ticket pointer.
//    int res = p->ReceivedRelayAuthTicket(
//        ticket_data,
//        ticketSize,
//        nullptr    // SteamDatagramRelayAuthTicket* (ignored)
//    );
//
//    // Optional: copy the raw ticket into parsed_buf for convenience/debugging
//    if (res >= 0)
//    {
//        int sz = ticketSize;
//        if (sz > parsed_size) sz = parsed_size;
//        memcpy(parsed_data, ticket_data, sz);
//    }
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)res;
//}
//
//YYEXPORT void steam_net_sockets_find_relay_auth_ticket_for_server(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = -1.0;
//        return;
//    }
//
//    // Read GML args � keep order exactly as you already expose them
//    int64 steamID64 = (int64)YYGetInt64(args, 0);
//    int   remoteVirtPort = (int)YYGetReal(args, 1);
//    int   parsedBufIndex = (int)YYGetReal(args, 2);
//
//    // Validate parsed buffer
//    void* parsed_data = nullptr;
//    int   parsed_size = 0;
//    if (!BufferGetContent(parsedBufIndex, &parsed_data, &parsed_size) || !parsed_data)
//    {
//        DebugConsoleOutput("steam_net_sockets_find_relay_auth_ticket_for_server() - error: parsed buffer %d not found\n", parsedBufIndex);
//        Result.kind = VALUE_REAL;
//        Result.val = -1.0;
//        return;
//    }
//
//    // Build identity from SteamID64
//    SteamNetworkingIdentity id;
//    id.Clear();
//    id.SetSteamID64(steamID64);
//
//    // Call Steam and DO NOT request the parsed struct to avoid incomplete type error
//    int seconds_left = p->FindRelayAuthTicketForServer(
//        id,
//        remoteVirtPort,
//        nullptr  // SteamDatagramRelayAuthTicket* � we ignore it
//    );
//
//    // Return seconds until expiry (0 = no ticket, >0 = time left, <0 = error)
//    Result.kind = VALUE_REAL;
//    Result.val = (double)seconds_left;
//}
//
//YYEXPORT void steam_net_sockets_connect_to_hosted_dedicated_server(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = -1.0;
//        return;
//    }
//
//    int64 steamID64 = (int64)YYGetInt64(args, 0);
//    int   remoteVirtPort = (int)YYGetReal(args, 1);
//
//    SteamNetworkingIdentity id;
//    id.Clear();
//    id.SetSteamID64(steamID64);
//
//    HSteamNetConnection hConn = p->ConnectToHostedDedicatedServer(
//        id,
//        remoteVirtPort,
//        0, nullptr
//    );
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)hConn;
//}
//
//YYEXPORT void steam_net_sockets_get_hosted_dedicated_server_port(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    uint16 port = 0;
//    if (p)
//        port = p->GetHostedDedicatedServerPort();
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)port;
//}
//
//YYEXPORT void steam_net_sockets_get_hosted_dedicated_server_popid(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    SteamNetworkingPOPID popid = 0;
//    if (p)
//        popid = p->GetHostedDedicatedServerPOPID();
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)popid;
//}
//
//YYEXPORT void steam_net_sockets_get_hosted_dedicated_server_address(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = (double)k_EResultFail;
//        return;
//    }
//
//    int routingBufIndex = (int)YYGetReal(args, 0);
//
//    void* routing_data = nullptr;
//    int   routing_size = 0;
//    if (!BufferGetContent(routingBufIndex, &routing_data, &routing_size) || !routing_data)
//    {
//        DebugConsoleOutput("steam_net_sockets_get_hosted_dedicated_server_address() - invalid routing buffer %d\n", routingBufIndex);
//        Result.kind = VALUE_REAL;
//        Result.val = (double)k_EResultFail;
//        return;
//    }
//
//    // Treat the GM buffer memory as a SteamDatagramHostedAddress struct.
//    // This only needs a *pointer* to the type, so the type can be incomplete.
//    SteamDatagramHostedAddress* pRouting = reinterpret_cast<SteamDatagramHostedAddress*>(routing_data);
//
//    EResult er = p->GetHostedDedicatedServerAddress(pRouting);
//
//    // We don't do memcpy � Steam already wrote the struct directly into the buffer.
//    // Caller just gets 'er' and the raw bytes in routing_buf.
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)er;
//}
//
//YYEXPORT void steam_net_sockets_create_hosted_dedicated_server_listen_socket(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = -1.0;
//        return;
//    }
//
//    int localVirtPort = (int)YYGetReal(args, 0);
//
//    HSteamListenSocket hListen = p->CreateHostedDedicatedServerListenSocket(
//        localVirtPort,
//        0, nullptr
//    );
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)hListen;
//}
//
//YYEXPORT void steam_net_sockets_get_game_coordinator_server_login(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    int loginBufIndex = (int)YYGetReal(args, 0);
//    int blobBufIndex = (int)YYGetReal(args, 1);
//    int blobMaxSize = (int)YYGetReal(args, 2);
//
//    void* login_data = nullptr;
//    void* blob_data = nullptr;
//    int   login_size = 0;
//    int   blob_size = 0;
//
//    if (!BufferGetContent(loginBufIndex, &login_data, &login_size) || !login_data ||
//        !BufferGetContent(blobBufIndex, &blob_data, &blob_size) || !blob_data)
//    {
//        DebugConsoleOutput("steam_net_sockets_get_game_coordinator_server_login() - invalid buffers\n");
//        Result.kind = VALUE_REAL;
//        Result.val = 0.0;
//        return;
//    }
//
//    if (blobMaxSize > blob_size)
//        blobMaxSize = blob_size;
//
//    int cbSignedBlob = blobMaxSize;
//
//    // Use the GameMaker buffer memory as the SteamDatagramGameCoordinatorServerLogin struct.
//    // This only needs a pointer type, so the type can be incomplete.
//    SteamDatagramGameCoordinatorServerLogin* pLogin =
//        reinterpret_cast<SteamDatagramGameCoordinatorServerLogin*>(login_data);
//
//    EResult er = p->GetGameCoordinatorServerLogin(
//        pLogin,        // struct written directly into login_buf
//        &cbSignedBlob, // in/out size of signed blob
//        blob_data      // blob written directly into blob_buf
//    );
//
//    if (er != k_EResultOK)
//    {
//        cbSignedBlob = 0;
//
//        // Optional: clear login buffer on failure so GML doesn't read garbage
//        if (login_data && login_size > 0)
//            memset(login_data, 0, login_size);
//    }
//
//    // Return blob size actually written (0 on failure)
//    Result.kind = VALUE_REAL;
//    Result.val = (double)cbSignedBlob;
//}



/////////////////////////////////FakeIP system//////////////////////// Ignore this section for now

//YYEXPORT void steam_net_sockets_begin_async_request_fake_ip(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    bool ok = false;
//    if (p)
//    {
//        int numPorts = (int)YYGetReal(args, 0);
//        ok = p->BeginAsyncRequestFakeIP(numPorts);
//    }
//
//    Result.kind = VALUE_BOOL;
//    Result.val = ok;
//}
//
//YYEXPORT void steam_net_sockets_get_fake_ip(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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
//
//YYEXPORT void steam_net_sockets_create_listen_socket_p2p_fake_ip(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
//    if (!p)
//    {
//        Result.kind = VALUE_REAL;
//        Result.val = -1.0;
//        return;
//    }
//
//    int idxFakePort = (int)YYGetReal(args, 0);
//
//    HSteamListenSocket hListen = p->CreateListenSocketP2PFakeIP(
//        idxFakePort,
//        0, nullptr
//    );
//
//    Result.kind = VALUE_REAL;
//    Result.val = (double)hListen;
//}
//
//YYEXPORT void steam_net_sockets_get_remote_fake_ip_for_connection(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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
//
//YYEXPORT void steam_net_sockets_create_fake_udp_port(
//    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
//{
//    ISteamNetworkingSockets* p = SteamNetworkingSockets();
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
