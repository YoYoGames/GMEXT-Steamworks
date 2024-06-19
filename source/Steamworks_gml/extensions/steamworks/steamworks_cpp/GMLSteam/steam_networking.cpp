/// steam_networking.cpp

#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#pragma region Sessions

bool steam_net_auto_accept_p2p_sessions = true;
/// Sets whether to auto-accept all incoming P2P session requests.
YYEXPORT void /*double*/ steam_net_set_auto_accept_p2p_sessions(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double auto_accept) 
{
	bool auto_accept = YYGetBool(arg, 0);

	steam_net_auto_accept_p2p_sessions = auto_accept;
	Result.kind = VALUE_BOOL;
	Result.val = true;
}

void steam_net_callbacks_t::p2p_session_request(P2PSessionRequest_t* e) 
{
	CSteamID id = e->m_steamIDRemote;
	//
	steam_net_event x((char*)"p2p_session_request");
	x.set_steamid_all("user_id", id);
	x.dispatch();
	//
	if (steam_net_auto_accept_p2p_sessions) {
		int n = SteamMatchmaking()->GetNumLobbyMembers(steam_lobby_current);
		for (int i = 0; i < n; i++) {
			if (SteamMatchmaking()->GetLobbyMemberByIndex(steam_lobby_current, i) == id) {
				SteamNetworking()->AcceptP2PSessionWithUser(id);
				break;
			}
		}
	}
}

YYEXPORT void /*double*/ steam_net_accept_p2p_session(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double user_id_high, double user_id_low) 
{
	uint64 value64 = (uint64)YYGetInt64(arg, 0);

	CSteamID user(value64);
	Result.kind = VALUE_REAL;
	Result.val = SteamNetworking() && SteamNetworking()->AcceptP2PSessionWithUser(user);
}

YYEXPORT void /*double*/ steam_net_close_p2p_session(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double user_id_high, double user_id_low) 
{
	uint64 value64 = (uint64)YYGetInt64(arg, 0);

	CSteamID user(value64);
	Result.kind = VALUE_BOOL;
	Result.val = SteamNetworking() && SteamNetworking()->CloseP2PSessionWithUser(user);
}

#pragma endregion

#pragma region Sending

/// Basic UDP send (<1200 bytes; may get lost)
#define steam_net_packet_type_unreliable 0
/// Instant non-buffering UDP send (e.g. for voice data)
#define steam_net_packet_type_unreliable_nodelay 1
/// Reliable send (up to 1MB)
#define steam_net_packet_type_reliable 2
/// Buffering send (Nagle algorithm)
#define steam_net_packet_type_reliable_buffer 3

EP2PSend steam_net_packet_type = k_EP2PSendReliable;
YYEXPORT void /*double*/ steam_net_packet_set_type(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double type)
{
	double type = YYGetReal(arg, 0);

	EP2PSend t = k_EP2PSendUnreliable;
	switch ((int32)type) {
		case steam_net_packet_type_unreliable_nodelay: t = k_EP2PSendUnreliableNoDelay; break;
		case steam_net_packet_type_reliable: t = k_EP2PSendReliable; break;
		case steam_net_packet_type_reliable_buffer: t = k_EP2PSendReliableWithBuffering; break;
	}
	steam_net_packet_type = t;

	Result.kind = VALUE_BOOL;
	Result.val = true;
}

YYEXPORT void /*double*/ steam_net_packet_send(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int64 user_id, char* data, double size, double type) 
{
	uint64 value64 = (uint64)YYGetInt64(arg, 0);
	int32 buffer_idx = YYGetInt32(arg, 1);

	int32 size = argc > 2 ? size = YYGetInt32(arg, 2) : -1;

	EP2PSend type = steam_net_packet_type;
	if (argc > 3) 
	{
		// Check if we can secure cast the argument
		int t = YYGetInt32(arg, 3);
		switch (t)
		{
			case (int)k_EP2PSendUnreliable:
			case (int)k_EP2PSendUnreliableNoDelay:
			case (int)k_EP2PSendReliable:
			case (int)k_EP2PSendReliableWithBuffering:
				type = (EP2PSend)t;
		}
	}

	void* buffer_data = nullptr;
	int buffer_size = 0;
	if (!BufferGetContent(buffer_idx, &buffer_data, &buffer_size) || !buffer_data)
	{
		DebugConsoleOutput("steam_net_packet_send() - error: specified buffer %d not found\n", (int)buffer_idx);
		Result.kind = VALUE_BOOL;
		Result.val = false;

		return;
	}

	CSteamID target(value64);

	if (size <= -1 || size > buffer_size) size = buffer_size;

	uint32 value32 = (argc > 4) ? YYGetInt32(arg, 4) : 0;
	int steam_channel = static_cast<int>(value32);

	Result.kind = VALUE_BOOL;
	Result.val = SteamNetworking() && SteamNetworking()->SendP2PPacket(target, buffer_data, size, type, steam_channel);
	YYFree(buffer_data);
}

#pragma endregion

#pragma region Receiving

uint32 steam_net_packet_size = 0;
void* steam_net_packet_data = nullptr;
CSteamID steam_net_packet_sender;

/// Receives a packet, returns whether successful (retrieve data via steam_net_packet_).
YYEXPORT void /*double*/ steam_net_packet_receive(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	uint32 value32 = (argc > 0) ? YYGetInt32(arg, 0) : 0;
	int steam_channel = static_cast<int>(value32);

	uint32 steam_net_packet_size_pre = 0;
	if (SteamNetworking() && SteamNetworking()->IsP2PPacketAvailable(&steam_net_packet_size_pre, steam_channel)) {
		// dealloc the current buffer if it's still around:
		if (steam_net_packet_data != nullptr) {
			free(steam_net_packet_data);
			steam_net_packet_data = nullptr;
		}
		//
		steam_net_packet_data = malloc(steam_net_packet_size_pre);
		if (SteamNetworking()->ReadP2PPacket(steam_net_packet_data, steam_net_packet_size_pre, &steam_net_packet_size, &steam_net_packet_sender, steam_channel))
		{
			Result.kind = VALUE_BOOL;
			Result.val = true;
			return;
		}
	}

	Result.kind = VALUE_BOOL;
	Result.val = false;
}

/// Returns the size of the last received packet (in bytes).
YYEXPORT void /*double*/ steam_net_packet_get_size(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_REAL;
	Result.val = steam_net_packet_size;
}

YYEXPORT void /*double*/ steam_net_packet_get_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* data) 
{
	int32 buffer_idx = YYGetInt32(arg, 0);

	if (steam_net_packet_data != nullptr) 
	{
		//memcpy(data, steam_net_packet_data, steam_net_packet_size);
		BufferWriteContent(buffer_idx, 0, steam_net_packet_data, steam_net_packet_size,true);
		Result.kind = VALUE_BOOL;
		Result.val = true;
	}
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}
}

YYEXPORT void /*double*/ steam_net_packet_get_sender_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_INT64;
	Result.v64 = steam_net_packet_sender.ConvertToUint64();
}

#pragma endregion
