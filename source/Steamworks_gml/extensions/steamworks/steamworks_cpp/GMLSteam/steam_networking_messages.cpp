#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// ============================================================
// ACCESSOR
// ============================================================
static inline ISteamNetworkingMessages* GM_SteamNetMessages()
{
    return SteamNetworkingMessages();
}

// ============================================================
// GLOBAL LAST MESSAGE INFO
// ============================================================
static SteamNetworkingIdentity g_lastMsgIdentity;
static int g_lastMsgSize = 0;

// ============================================================
// NETWORK CALLBACK HANDLER CLASS
// ============================================================
class CSteamNetMessagesHandler
{
public:
    CSteamNetMessagesHandler() {} // empty constructor; STEAM_CALLBACK handles initialization

private:
    STEAM_CALLBACK(CSteamNetMessagesHandler, OnSessionRequest, SteamNetworkingMessagesSessionRequest_t);
    STEAM_CALLBACK(CSteamNetMessagesHandler, OnSessionFailed, SteamNetworkingMessagesSessionFailed_t);
};

static CSteamNetMessagesHandler* g_pNetMsgHandler = nullptr;

// ============================================================
// CALLBACK IMPLEMENTATIONS
// ============================================================
void CSteamNetMessagesHandler::OnSessionRequest(SteamNetworkingMessagesSessionRequest_t* pInfo)
{
    char str[128];
    pInfo->m_identityRemote.ToString(str, sizeof(str));
    DebugConsoleOutput("[SteamMessages] SessionRequest from %s\n", str);

    int dsMapIndex = CreateDsMap(1,
        "event_type", (double)0.0, "steam_net_message_on_session_request"
    );

    g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "steamid", pInfo->m_identityRemote.GetSteamID64());
    //TODO: more data
    //g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "", pInfo->);

    g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

void CSteamNetMessagesHandler::OnSessionFailed(SteamNetworkingMessagesSessionFailed_t* pInfo)
{
    char str[128];
    pInfo->m_info.m_identityRemote.ToString(str, sizeof(str));

    int dsMapIndex = CreateDsMap(1,
        "event_type", (double)0.0, "steam_net_message_on_session_failed"
    );

    g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "steamid", pInfo->m_info.m_identityRemote.GetSteamID64());
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "reason", pInfo->m_info.m_eEndReason);
    //TODO: more data
    //g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "", pInfo->m_info.);

    g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

// ============================================================
// REGISTER / UNREGISTER CALLBACKS
// ============================================================
YYEXPORT void steam_net_messages_register_callbacks(
    RValue& Result, CInstance*, CInstance*, int, RValue*)
{
    if (!g_pNetMsgHandler)
        g_pNetMsgHandler = new CSteamNetMessagesHandler();

    DebugConsoleOutput("[SteamMessages] Callbacks registered\n");

    Result.kind = VALUE_BOOL;
    Result.val = true;
}

YYEXPORT void steam_net_messages_unregister_callbacks(
    RValue& Result, CInstance*, CInstance*, int, RValue*)
{
    if (g_pNetMsgHandler)
    {
        delete g_pNetMsgHandler;
        g_pNetMsgHandler = nullptr;
    }

    DebugConsoleOutput("[SteamMessages] Callbacks unregistered\n");

    Result.kind = VALUE_BOOL;
    Result.val = true;
}

// ============================================================
// SEND MESSAGE
// ============================================================
YYEXPORT void steam_net_messages_send(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    DebugConsoleOutput("steam_net_messages_send CALLED \n");

    ISteamNetworkingMessages* p = GM_SteamNetMessages();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);
    int channel = (int)YYGetReal(args, 1);
    int bufferIndex = (int)YYGetReal(args, 2);
    int dataSize = (int)YYGetReal(args, 3);
    int sendFlags = (int)YYGetReal(args, 4);

    void* buffer_data = nullptr;
    int buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size))// || !buffer_data)
    {
        DebugConsoleOutput("steam_net_messages_send() - buffer not found\n");
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    if (dataSize > buffer_size)
        dataSize = buffer_size;

    SteamNetworkingIdentity identity;
    identity.Clear();
    identity.SetSteamID64(steamID64);

    EResult er = p->SendMessageToUser(identity, buffer_data, (uint32)dataSize, sendFlags, channel);

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

// ============================================================
// ACCEPT SESSION
// ============================================================
YYEXPORT void steam_net_messages_accept_session(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    DebugConsoleOutput("steam_net_messages_accept_session CALLED \n");

    ISteamNetworkingMessages* p = GM_SteamNetMessages();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);

    SteamNetworkingIdentity identity;
    identity.Clear();
    identity.SetSteamID64(steamID64);

    bool ok = p->AcceptSessionWithUser(identity);

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// ============================================================
// CLOSE SESSION
// ============================================================
YYEXPORT void steam_net_messages_close_session(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    DebugConsoleOutput("steam_net_messages_close_session CALLED \n");

    ISteamNetworkingMessages* p = GM_SteamNetMessages();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);

    SteamNetworkingIdentity identity;
    identity.Clear();
    identity.SetSteamID64(steamID64);

    bool ok = p->CloseSessionWithUser(identity);

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// ============================================================
// CLOSE CHANNEL
// ============================================================
YYEXPORT void steam_net_messages_close_channel(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    DebugConsoleOutput("steam_net_messages_close_channel CALLED \n");

    ISteamNetworkingMessages* p = GM_SteamNetMessages();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);
    int channel = (int)YYGetReal(args, 1);

    SteamNetworkingIdentity identity;
    identity.Clear();
    identity.SetSteamID64(steamID64);

    bool ok = p->CloseChannelWithUser(identity, channel);

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// ============================================================
// RECEIVE MESSAGE
// ============================================================
YYEXPORT void steam_net_messages_receive_on_channel(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    ISteamNetworkingMessages* p = GM_SteamNetMessages();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int localChannel = (int)YYGetReal(args, 0);
    int bufferIndex = (int)YYGetReal(args, 1);
    int maxSize = (int)YYGetReal(args, 2);

    void* buffer_data = nullptr;
    int buffer_size = 0;

    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size))// || !buffer_data)
    {
        DebugConsoleOutput("steam_net_messages_receive_on_channel - buffer not found\n");
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    if (maxSize > buffer_size)
        maxSize = buffer_size;

    SteamNetworkingMessage_t* pMsg = nullptr;

    int num = p->ReceiveMessagesOnChannel(localChannel, &pMsg, 1);

    if (num <= 0 || !pMsg)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int toCopy = (pMsg->m_cbSize < maxSize) ? pMsg->m_cbSize : maxSize;
    memcpy(buffer_data, pMsg->m_pData, toCopy);

    g_lastMsgIdentity = pMsg->m_identityPeer;
    g_lastMsgSize = pMsg->m_cbSize;

    pMsg->Release();

    Result.kind = VALUE_REAL;
    Result.val = (double)toCopy;
}

// ============================================================
// LAST MESSAGE SIZE
// ============================================================
YYEXPORT void steam_net_messages_get_last_size(
    RValue& Result, CInstance*, CInstance*, int, RValue*)
{
    Result.kind = VALUE_REAL;
    Result.val = (double)g_lastMsgSize;
}

// ============================================================
// LAST SENDER STEAM ID
// ============================================================
YYEXPORT void steam_net_messages_get_last_steam_id(
    RValue& Result, CInstance*, CInstance*, int, RValue*)
{
    if (g_lastMsgIdentity.m_eType == k_ESteamNetworkingIdentityType_SteamID)
    {
        uint64 id64 = g_lastMsgIdentity.GetSteamID64();
        Result.kind = VALUE_INT64;
        Result.v64 = id64;
    }
    else
    {
        Result.kind = VALUE_INT64;
        Result.v64 = 0;
    }
}
