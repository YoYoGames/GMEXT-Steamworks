
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#include <filesystem>
#include <string>
#include <vector>
#include <sstream>

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
	uint32 AppID = static_cast<uint32>(extOptGetReal("Steamworks", "appID"));

    // a game cannot have an invalid appid
    if (AppID == k_uAppIdInvalid)
    {
        tracef("Invalid AppID, check extension settings in IDE, check file permissions.");
        return;
    }

	bool debug = strncmp(extOptGetString("Steamworks", "debug"), "Enabled", 7) == 0 ? true : isRunningFromIDE();
    
	std::filesystem::path steamAppIdTxtPath = DesktopExtensionTools_getPathToExe();
	steamAppIdTxtPath /= "steam_appid.txt";

    if (debug)
    {
        std::ofstream steamAppIdTxt(steamAppIdTxtPath.string());
        std::string pathasstring = steamAppIdTxtPath.string();
        tracef("Debug: Writing AppID %u to file %s", static_cast<unsigned int>(AppID), pathasstring.c_str());
        if (steamAppIdTxt && (steamAppIdTxt << AppID))
        {
            tracef("Debug: Wrote AppID without errors.");
		}
        else
        {
            tracef("Debug: Unable to open the file or write the AppID, check file permissions?");
            // do not return; from here as macOS doesn't really allow you to write to your own .app?
            // SteamAPI_Init() will fail if it really can't guess the app id and we should rely on that instead.
        }
    }
    else
    {
		// Make sure we delete the steam_appid.txt file from the executable directory
		try {
			if (std::filesystem::remove(steamAppIdTxtPath)) {
				tracef("Debug: steam_appid.txt file deleted successfully.");
			}
			else {
				tracef("Debug: steam_appid.txt file not found.");
			}
		}
		catch (const std::filesystem::filesystem_error& err) {
			tracef("Debug: Filesystem error - %s\n", err.what());
		}
		catch (const std::exception& ex) {
			tracef("Debug: Error - %s\n", ex.what());
		}

        // https://partner.steamgames.com/doc/sdk/api#initialization_and_shutdown
        if (SteamAPI_RestartAppIfNecessary(AppID))
        {
            tracef("RestartAppIfNecessary check failed, the game is not allowed to continue");
            exit(0);
            return;
        }
    }

    // will also check if it can determine the app id
	SteamErrMsg errMsg;
    if (SteamAPI_InitEx(&errMsg) != k_ESteamAPIInitResult_OK)
    {
		tracef("Failed to init Steam. %s", errMsg);
        tracef("SteamAPI_InitEx had failed, please check your Steamworks SDK path and that Steam is running! See Output above for possible errors.");
        return;
    }

    tracef("SteamAPI_Init had succeeded without errors, debug flag = %d", debug ? 1 : 0);

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


//YYEXPORT void ext_json_test(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
//{
//	DebugConsoleOutput("ext_json_test\n");
//
//	const char* arg1 = YYGetString(arg, 0);
//	json_object* jobj = json_tokener_parse(arg1);
//
//	uint32 AppID = json_object_get_int(json_object_object_get(jobj, "ProductId"));
//	bool debug = json_object_get_boolean(json_object_object_get(jobj, "Debug"));
//
//	DebugConsoleOutput("ext_json_test %i\n", AppID);
//	DebugConsoleOutput("ext_json_test %i\n", debug);
//}


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
