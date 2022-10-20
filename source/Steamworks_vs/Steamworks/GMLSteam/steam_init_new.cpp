
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#include <filesystem>
#include <string>
#include <vector>
#include <sstream>

#include "json-c.h"

#include "IniOptionsLibrary.h"
#include "DesktopExtensionTools.h"

int requestInd = 0;
int getAsyncRequestInd()
{
	requestInd++;
	return requestInd;
}

YYEXPORT void steam_update(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	SteamAPI_RunCallbacks();
	Steam_UserStats_Process();

	Result.kind = VALUE_REAL;
	Result.val = 1;
}

bool steam_is_initialised = false;

CSteamAPIContext* g_SteamContext;
YYEXPORT void steam_init(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int appid)
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = 1;
}

void OldPreGraphicsInitialisation()
{
	//json_object* jobj = json_tokener_parse(arg1);
	//uint32 AppID = json_object_get_int(json_object_object_get(jobj, "AppID"));
	//bool debug = json_object_get_boolean(json_object_object_get(jobj, "Debug"));

	//uint32 AppID = (uint32)std::stol(IniOptions_read("Steamworks", "AppID"));
	//bool debug = IniOptions_read("Steamworks", "Debug").find("True") != std::string::npos;

	const char* debug = extOptGetString("Steamworks", "Debug");

	uint32 AppID = extOptGetReal("Steamworks", "AppID");

	if (debug)
		DebugConsoleOutput("[STEAMWORKS] Pregraphics::Found debug key %s for appid %d \n", debug,AppID);
	else
		DebugConsoleOutput("[STEAMWORKS] Pregraphics::Failed to find debug key %d\n",AppID);

	if (debug)
	{
		std::string exePath = DesktopExtensionTools_getPathToExe();

		char filename[1024];
		snprintf(filename, 1024, "%s/steam_appid.txt", exePath.c_str());

		printf("[STEAMWORKS] Creating steam_appid.txt: %s\n", filename);

		FILE* pFile = fopen(filename, "wb");
		char strID[32];
		snprintf(strID, 32, "%u", AppID);

		if (pFile)
		{
			fwrite(strID, 1, strlen(strID), pFile);
			fclose(pFile);
			printf("steam_appid.txt file written\n");

		}
		else
		{
			printf("Error at write steam_appid.txt:\n");
			perror("fopen");
			return; //Failed to open
		}
	}
	else
	{
		// https://partner.steamgames.com/doc/sdk/api#initialization_and_shutdown
		if (SteamAPI_RestartAppIfNecessary(AppID))
		{
			printf("SteamAPI_RestartAppIfNecessary returned true, exiting\n");
			exit(0);
			return;
		}
	}

	if (!SteamAPI_Init())
	{
		printf("SteamAPI_Init failed\n");
		return;
	}

	printf("SteamAPI_Init succeded\n");

	steam_is_initialised = true;
}

YYEXPORT void steam_initialised(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	Result.val = steam_is_initialised;
}

extern "C" void __cdecl SteamAPIDebugTextHook(int nSeverity, const char* pchDebugText)
{
	DebugConsoleOutput(pchDebugText);
	DebugConsoleOutput("\n");
}

YYEXPORT void steam_set_warning_message_hook(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	SteamClient()->SetWarningMessageHook(&SteamAPIDebugTextHook);
}

YYEXPORT void steam_is_subscribed(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	/*
	g_SteamContext = new CSteamAPIContext();
	g_SteamContext->Init();
	*/

	//Check player has rights to the game.
	//DebugConsoleOutput("SteamApps()->BIsSubscribed() failed\n");
	//DebugConsoleOutput("Steam must be running to play this game (user not subscribed)");
	//!need to shut down steamAPI since we have called SteamAPI_Init()

	Result.kind = VALUE_BOOL;
	Result.val = SteamApps()->BIsSubscribed();
}


YYEXPORT void ext_json_test(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	DebugConsoleOutput("ext_json_test\n");

	const char* arg1 = YYGetString(arg, 0);
	json_object* jobj = json_tokener_parse(arg1);

	uint32 AppID = json_object_get_int(json_object_object_get(jobj, "ProductId"));
	bool debug = json_object_get_boolean(json_object_object_get(jobj, "Debug"));

	DebugConsoleOutput("ext_json_test %i\n", AppID);
	DebugConsoleOutput("ext_json_test %i\n", debug);
}


YYEXPORT void steam_shutdown(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	SteamAPI_Shutdown();
}

//dllg void Steam_Json_Test() {
//	nlohmann::json j = {
//		  {"pi", 3.141},
//		  {"happy", true},
//		  {"name", "Niels"},
//		  {"nothing", nullptr},
//		  {"answer", {
//			{"everything", 42}
//		  }},
//		  {"list", {1, 0, 2}},
//		{"strlist", {"1", "0", "2"}},
//		{"strlist2", {"1", "0"}},
//		{"strlist3", {"1"}},
//		  {"object", {
//			{"currency", "USD"},
//			{"value", 42.99}
//		  }}
//	};
//	std::string s = j.dump();
//	trace("json? %s", s.c_str());
//}
