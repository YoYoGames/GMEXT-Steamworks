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
    if (!pInfo)
        return;

    const SteamNetworkingIdentity& id = pInfo->m_identityRemote;

    // Identity as string
    char identStr[SteamNetworkingIdentity::k_cchMaxString] = { 0 };
    id.ToString(identStr, sizeof(identStr));

    // Optional IP string, if this identity is an IP address
    char ipStr[SteamNetworkingIPAddr::k_cchMaxString] = { 0 };
    const SteamNetworkingIPAddr* pIP = id.GetIPAddr();
    if (pIP)
        pIP->ToString(ipStr, sizeof(ipStr), true); // include port

    int dsMapIndex = CreateDsMap(1,
        "event_type", (double)0.0, "steam_net_message_on_session_request"
    );

    g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "steamid", id.GetSteamID64());
    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "identity_string", identStr);

    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "identity_type", (double)id.m_eType);

    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "ip", ipStr);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "is_local_host", id.IsLocalHost() ? 1.0 : 0.0);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "fake_ip_type", (double)id.GetFakeIPType());

    g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}


void CSteamNetMessagesHandler::OnSessionFailed(SteamNetworkingMessagesSessionFailed_t* pInfo)
{
    if (!pInfo)
        return;

    const SteamNetConnectionInfo_t& info = pInfo->m_info;

    char identityStr[128] = { 0 };
    info.m_identityRemote.ToString(identityStr, sizeof(identityStr));

    char addrStr[128] = { 0 };
    info.m_addrRemote.ToString(addrStr, sizeof(addrStr), true); // include port

    int dsMapIndex = CreateDsMap(1,
        "event_type", (double)0.0, "steam_net_message_on_session_failed"
    );

    g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "steamid", info.m_identityRemote.GetSteamID64());
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "state", (double)info.m_eState);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "end_reason", (double)info.m_eEndReason);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "flags", (double)info.m_nFlags);
    g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "user_data", info.m_nUserData);

    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "listen_socket", (double)info.m_hListenSocket);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "remote_pop", (double)info.m_idPOPRemote);
    g_pYYRunnerInterface->DsMapAddDouble(dsMapIndex, "relay_pop", (double)info.m_idPOPRelay);

    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "remote_identity", identityStr);
    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "remote_addr", addrStr);
    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "description",
        info.m_szConnectionDescription ? info.m_szConnectionDescription : "");
    g_pYYRunnerInterface->DsMapAddString(dsMapIndex, "debug",
        info.m_szEndDebug ? info.m_szEndDebug : "");

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
        Result.kind = VALUE_REAL;
        Result.val = -1;
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

    // This needs to be freed otherwise there is a memory leak
    YYFree(buffer_data);
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
        Result.val = -1;
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
        Result.kind = VALUE_REAL;
        Result.val = -1;
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
