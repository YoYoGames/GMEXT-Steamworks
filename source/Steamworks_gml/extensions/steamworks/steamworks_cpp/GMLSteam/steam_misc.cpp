/// steam_misc.cpp
#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// #pragma region int64 workarounds (http://bugs.yoyogames.com/view.php?id=21357)
// An extremely non-picky parser. Will combine up to 20 digits from
// an input string into an int64, skipping any other characters.
/*
uint64 int64_from_string(char* cstring) {
	char c;
	int start = -1, end = -1;
	for (int pos = 0; (c = cstring[pos]) != '\0'; pos++) {
		if (c >= '0' && c <= '9') {
			if (start < 0) start = pos;
			end = pos;
		}
	}
	uint64 out = 0;
	if (start < 0) return out;
	uint64 mul = 1;
	int digit = 0;
	for (int pos = end; pos >= start; pos--) {
		c = cstring[pos];
		if (c >= '0' && c <= '9') {
			out += ((uint64)(c - '0')) * mul;
			mul *= 10;
			if (++digit >= 20) return out;
		}
	}
	return out;
}
*/

void steam_lobby_chat_update();
YYEXPORT void /*double*/ steam_gml_update(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
	SteamAPI_RunCallbacks();
	steam_lobby_chat_update();
}

/// Detects if the app was run from Steam client and restarts if needed. Returns whether app should quit.
YYEXPORT void /*double*/ steam_restart_if_necessary(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_REAL;
	Result.val = SteamAPI_RestartAppIfNecessary(steam_app_id);
}

bool steam_gml_ready = false;
YYEXPORT void /*double*/ steam_gml_api_flags(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	int r = 0;
	if (steam_gml_ready) r |= 1;
	if (SteamUtils()) r |= 2;
	if (SteamUser()) r |= 4;
	if (SteamFriends()) r |= 8;
	if (SteamNetworking()) r |= 16;
	if (SteamMatchmaking()) r |= 32;
	if (SteamController()) r |= 64;
	if (SteamUGC()) r |= 128;


	Result.kind = VALUE_REAL;
	Result.val = r;
}

//YYEXPORT void /*double*/ steam_gml_init_cpp(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double app_id) 
//{
//	double app_id = YYGetReal(arg, 0);
//
//	steam_app_id = (uint32) app_id;
//	if (!SteamAPI.Init()) {
//		DebugConsoleOutput("Steamworks.gml failed to link with Steam API.");
//		{
//			Result.kind = VALUE_REAL;
//			Result.val = 0;
//			return;
//		}
//	}
//	steam_gml_ready = true;
//	steam_local_id = SteamUser()->GetSteamID();
//	DebugConsoleOutput("Steamworks.gml initialized successfully.");
//
//	Result.kind = VALUE_REAL;
//	Result.val = 1;
//	return;
//}

/// Returns whether the extension has initialized successfully.
//YYEXPORT void /*double*/ steam_gml_is_ready(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	Result.kind = VALUE_REAL;
//	Result.val = steam_gml_ready;
//}
//
//YYEXPORT void /*double*/ steam_gml_get_version(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	Result.kind = VALUE_REAL;
//	Result.val = steam_net_version;
//}
//
///// Returns whether the extension was loaded at all (GML returns 0 for unloaded extension calls).
//YYEXPORT void /*double*/ steam_gml_is_available(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	Result.kind = VALUE_REAL;
//	Result.val = 1;
//}
//
//void steam_controller_reset_impl();
//YYEXPORT void /*double*/ steam_gml_init_cpp_pre(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	DebugConsoleOutput("Steamworks.gml loaded native extension.");
//	steam_controller_reset_impl();
//	steam_lobby_current.Clear();
//	
//	Result.kind = VALUE_REAL;
//	Result.val = 1;
//}