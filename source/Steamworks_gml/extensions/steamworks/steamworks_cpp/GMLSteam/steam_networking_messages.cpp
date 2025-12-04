#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"


static SteamNetworkingIdentity g_lastMsgIdentity;
static int g_lastMsgSize = 0;


/////////////////////////////////// CALLBACK IMPLEMENTATIONS
class CSteamNetMessagesHandler
{
public:
    CSteamNetMessagesHandler() {}

private:
    STEAM_CALLBACK(CSteamNetMessagesHandler, OnSessionRequest, SteamNetworkingMessagesSessionRequest_t);
    STEAM_CALLBACK(CSteamNetMessagesHandler, OnSessionFailed, SteamNetworkingMessagesSessionFailed_t);
};

static CSteamNetMessagesHandler* g_pNetMsgHandler = nullptr;


void CSteamNetMessagesHandler::OnSessionRequest(SteamNetworkingMessagesSessionRequest_t* pInfo)
{
    char str[128];
    pInfo->m_identityRemote.ToString(str, sizeof(str));

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
///////////////////////////////////



YYEXPORT void steam_net_messages_register_callbacks(
    RValue& Result, CInstance*, CInstance*, int, RValue*)
{
    if (!g_pNetMsgHandler)
        g_pNetMsgHandler = new CSteamNetMessagesHandler();

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

    Result.kind = VALUE_BOOL;
    Result.val = true;
}

YYEXPORT void steam_net_messages_send(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    ISteamNetworkingMessages* p = SteamNetworkingMessages();
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

YYEXPORT void steam_net_messages_accept_session(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{

    ISteamNetworkingMessages* p = SteamNetworkingMessages();
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

YYEXPORT void steam_net_messages_close_session(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    ISteamNetworkingMessages* p = SteamNetworkingMessages();
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

YYEXPORT void steam_net_messages_close_channel(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    ISteamNetworkingMessages* p = SteamNetworkingMessages();
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

YYEXPORT void steam_net_messages_receive_on_channel(
    RValue& Result, CInstance*, CInstance*, int argc, RValue* args)
{
    ISteamNetworkingMessages* p = SteamNetworkingMessages();
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
    if (BufferGetFromGML(bufferIndex) == NULL)
    {
        DebugConsoleOutput("steam_net_messages_receive_on_channel - buffer not found\n");
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    SteamNetworkingMessage_t* pMsg = nullptr;

    int num = p->ReceiveMessagesOnChannel(localChannel, &pMsg, 1);

    if (num <= 0 || !pMsg)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int toCopy = (pMsg->m_cbSize < maxSize) ? pMsg->m_cbSize : maxSize;

    if (BufferWriteContent(bufferIndex, 0, pMsg->m_pData, (int)toCopy, true) != toCopy)
    {
        DebugConsoleOutput("steam_net_messages_receive_on_channel() - error: could not write to buffer\n");
        Result.kind = VALUE_BOOL;
        Result.val = false;
    }


    g_lastMsgIdentity = pMsg->m_identityPeer;
    g_lastMsgSize = pMsg->m_cbSize;
    pMsg->Release();

    Result.kind = VALUE_REAL;
    Result.val = (double)toCopy;
}

YYEXPORT void steam_net_messages_get_last_size(
    RValue& Result, CInstance*, CInstance*, int, RValue*)
{
    Result.kind = VALUE_REAL;
    Result.val = (double)g_lastMsgSize;
}

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
