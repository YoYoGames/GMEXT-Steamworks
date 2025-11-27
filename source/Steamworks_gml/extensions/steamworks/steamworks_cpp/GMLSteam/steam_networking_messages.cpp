
#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// Accessor
static inline ISteamNetworkingMessages* GM_SteamNetMessages()
{
    return SteamNetworkingMessages();
}

// Keep information about the last received message
static SteamNetworkingIdentity g_lastMsgIdentity;
static int                     g_lastMsgChannel = 0;
static int                     g_lastMsgSize = 0;

// double steam_net_messages_send(int64 steam_id, double channel, buffer buf, double size, double send_flags)
YYEXPORT void steam_net_messages_send(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingMessages* p = GM_SteamNetMessages();
    if (!p)
    {
        Result.kind = VALUE_REAL;
        Result.val = -1.0;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);
    int   channel = (int)YYGetReal(args, 1);
    int   bufferIndex = (int)YYGetReal(args, 2);
    int   dataSize = (int)YYGetReal(args, 3);
    int   sendFlags = (int)YYGetReal(args, 4);

    void* buffer_data = nullptr;
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_messages_send() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    if (dataSize > buffer_size)
    {
        DebugConsoleOutput("steam_net_messages_send() - warning: requested size %d is bigger than buffer size %d, clamping\n", dataSize, buffer_size);
        dataSize = buffer_size;
    }

    SteamNetworkingIdentity identity;
    identity.Clear();
    identity.SetSteamID64(steamID64);

    EResult er = (EResult)p->SendMessageToUser(
        identity,
        buffer_data,
        (uint32)dataSize,
        sendFlags,      // e.g. k_nSteamNetworkingSend_Reliable, etc.
        channel         // remote channel
    );

    Result.kind = VALUE_REAL;
    Result.val = (double)er;
}

// double steam_net_messages_accept_session(int64 steam_id)
YYEXPORT void steam_net_messages_accept_session(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
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

// double steam_net_messages_close_session(int64 steam_id)
YYEXPORT void steam_net_messages_close_session(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
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

// double steam_net_messages_close_channel(int64 steam_id, double channel)
YYEXPORT void steam_net_messages_close_channel(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    ISteamNetworkingMessages* p = GM_SteamNetMessages();
    if (!p)
    {
        Result.kind = VALUE_BOOL;
        Result.val = false;
        return;
    }

    int64 steamID64 = (int64)YYGetInt64(args, 0);
    int   channel = (int)YYGetReal(args, 1);

    SteamNetworkingIdentity identity;
    identity.Clear();
    identity.SetSteamID64(steamID64);

    bool ok = p->CloseChannelWithUser(identity, channel);

    Result.kind = VALUE_BOOL;
    Result.val = ok;
}

// double steam_net_messages_receive_on_channel(double local_channel, buffer buf, double max_size)
//
// Returns:
//  0  -> no message
// >0  -> bytes written into buffer, and you can query last sender / channel with the getters below.
YYEXPORT void steam_net_messages_receive_on_channel(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
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
    int   buffer_size = 0;
    if (!BufferGetContent(bufferIndex, &buffer_data, &buffer_size) || !buffer_data)
    {
        DebugConsoleOutput("steam_net_messages_receive_on_channel() - error: specified buffer %d not found\n", (int)bufferIndex);
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    if (maxSize > buffer_size)
        maxSize = buffer_size;

    SteamNetworkingMessage_t* pMsg = nullptr;

    int num = p->ReceiveMessagesOnChannel(
        localChannel,
        &pMsg,
        1   // only grab one at a time, simpler for GML
    );

    if (num <= 0 || !pMsg)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0.0;
        return;
    }

    int toCopy = (pMsg->m_cbSize < maxSize) ? pMsg->m_cbSize : maxSize;
    memcpy(buffer_data, pMsg->m_pData, toCopy);

    // Store info about the last message
    //g_lastMsgIdentity = pMsg->m_identitySender;//TODO
    g_lastMsgChannel = localChannel;
    g_lastMsgSize = pMsg->m_cbSize;

    pMsg->Release();

    Result.kind = VALUE_REAL;
    Result.val = (double)toCopy;
}

// double steam_net_messages_get_last_size()
YYEXPORT void steam_net_messages_get_last_size(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    Result.kind = VALUE_REAL;
    Result.val = (double)g_lastMsgSize;
}

// double steam_net_messages_get_last_channel()
YYEXPORT void steam_net_messages_get_last_channel(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
{
    Result.kind = VALUE_REAL;
    Result.val = (double)g_lastMsgChannel;
}

// double steam_net_messages_get_last_steam_id()
YYEXPORT void steam_net_messages_get_last_steam_id(
    RValue& Result, CInstance* self, CInstance* other, int argc, RValue* args)
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

