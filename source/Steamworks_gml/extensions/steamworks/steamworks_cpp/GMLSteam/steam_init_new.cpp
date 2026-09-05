
#include "pch.h"
#include "steam_api.h"
#include "steam_gameserver.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
#include "gml_glue.h"

#include <cstdio>
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
    bool updated = false;

    if (steam_is_initialised)
    {
        SteamAPI_RunCallbacks();
        Steam_UserStats_Process();
        updated = true;
    }

    if (steam_gameserver_is_initialised)
    {
        SteamGameServer_RunCallbacks();
        updated = true;
    }

	Result.kind = VALUE_REAL;
	Result.val = updated ? 1 : 0;
}

bool steam_is_initialised = false;
bool steam_gameserver_is_initialised = false;

static uint32 SteamGameServer_ParseIPv4(const char* ip, uint32 fallback)
{
    if (ip == nullptr || ip[0] == '\0')
        return fallback;

    unsigned int a = 0, b = 0, c = 0, d = 0;
    char tail = '\0';
    if (std::sscanf(ip, "%u.%u.%u.%u%c", &a, &b, &c, &d, &tail) == 4 &&
        a <= 255 && b <= 255 && c <= 255 && d <= 255)
    {
        return (a << 24) | (b << 16) | (c << 8) | d;
    }

    return fallback;
}

static std::string SteamGameServer_IPv4ToString(uint32 ip)
{
    std::ostringstream stream;
    stream << ((ip >> 24) & 0xff) << "."
           << ((ip >> 16) & 0xff) << "."
           << ((ip >> 8) & 0xff) << "."
           << (ip & 0xff);
    return stream.str();
}

static RValue* SteamGameServer_GetStructMember(RValue* config, const char* key)
{
    if (!config || KIND_RValue(config) != VALUE_OBJECT)
        return nullptr;
    return YYStructGetMember(config, key);
}

static double SteamGameServer_GetStructReal(RValue* config, const char* key, double fallback)
{
    RValue* member = SteamGameServer_GetStructMember(config, key);
    if (!member || KIND_RValue(member) == VALUE_UNDEFINED)
        return fallback;
    return REAL_RValue(member);
}

static bool SteamGameServer_GetStructBool(RValue* config, const char* key, bool fallback)
{
    RValue* member = SteamGameServer_GetStructMember(config, key);
    if (!member || KIND_RValue(member) == VALUE_UNDEFINED)
        return fallback;
    return BOOL_RValue(member);
}

static const char* SteamGameServer_GetStructString(RValue* config, const char* key, const char* fallback)
{
    RValue* member = SteamGameServer_GetStructMember(config, key);
    if (!member || KIND_RValue(member) != VALUE_STRING)
        return fallback;
    return member->GetString();
}

static uint32 SteamGameServer_GetStructIP(RValue* config, const char* key, uint32 fallback)
{
    RValue* member = SteamGameServer_GetStructMember(config, key);
    if (!member || KIND_RValue(member) == VALUE_UNDEFINED)
        return fallback;
    if (KIND_RValue(member) == VALUE_STRING)
        return SteamGameServer_ParseIPv4(member->GetString(), fallback);
    return static_cast<uint32>(REAL_RValue(member));
}

static uint16 SteamGameServer_GetStructPort(RValue* config, const char* key, int fallback)
{
    int value = static_cast<int>(SteamGameServer_GetStructReal(config, key, fallback));
    return value < 0 ? static_cast<uint16>(0xffff) : static_cast<uint16>(value);
}

static ISteamGameServer* SteamGameServer_GetAPI()
{
    if (!steam_gameserver_is_initialised)
        return nullptr;
    return SteamGameServer();
}

static void SteamGameServer_ReturnBool(RValue& Result, bool value)
{
    Result.kind = VALUE_BOOL;
    Result.val = value;
}

static void SteamGameServer_ReturnReal(RValue& Result, double value)
{
    Result.kind = VALUE_REAL;
    Result.val = value;
}

class GMGameServerCallbackHandler
{
public:
    GMGameServerCallbackHandler() :
        m_CallbackSteamServersConnected(this, &GMGameServerCallbackHandler::OnSteamServersConnected),
        m_CallbackSteamServerConnectFailure(this, &GMGameServerCallbackHandler::OnSteamServerConnectFailure),
        m_CallbackSteamServersDisconnected(this, &GMGameServerCallbackHandler::OnSteamServersDisconnected),
        m_CallbackGSPolicyResponse(this, &GMGameServerCallbackHandler::OnGSPolicyResponse),
        m_CallbackValidateAuthTicketResponse(this, &GMGameServerCallbackHandler::OnValidateAuthTicketResponse),
        m_CallbackGSClientApprove(this, &GMGameServerCallbackHandler::OnGSClientApprove),
        m_CallbackGSClientDeny(this, &GMGameServerCallbackHandler::OnGSClientDeny),
        m_CallbackGSClientKick(this, &GMGameServerCallbackHandler::OnGSClientKick),
        m_CallbackGSClientGroupStatus(this, &GMGameServerCallbackHandler::OnGSClientGroupStatus)
    {}

    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnSteamServersConnected, SteamServersConnected_t, m_CallbackSteamServersConnected);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnSteamServerConnectFailure, SteamServerConnectFailure_t, m_CallbackSteamServerConnectFailure);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnSteamServersDisconnected, SteamServersDisconnected_t, m_CallbackSteamServersDisconnected);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnGSPolicyResponse, GSPolicyResponse_t, m_CallbackGSPolicyResponse);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnValidateAuthTicketResponse, ValidateAuthTicketResponse_t, m_CallbackValidateAuthTicketResponse);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnGSClientApprove, GSClientApprove_t, m_CallbackGSClientApprove);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnGSClientDeny, GSClientDeny_t, m_CallbackGSClientDeny);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnGSClientKick, GSClientKick_t, m_CallbackGSClientKick);
    STEAM_GAMESERVER_CALLBACK(GMGameServerCallbackHandler, OnGSClientGroupStatus, GSClientGroupStatus_t, m_CallbackGSClientGroupStatus);
};

static GMGameServerCallbackHandler g_GameServerCallbacks;

void GMGameServerCallbackHandler::OnSteamServersConnected(SteamServersConnected_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_servers_connected");
    event.dispatch();
}

void GMGameServerCallbackHandler::OnSteamServerConnectFailure(SteamServerConnectFailure_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_servers_connect_failure");
    event.set((char*)"result", static_cast<double>(pInfo ? pInfo->m_eResult : k_EResultFail));
    event.set((char*)"still_retrying", pInfo ? pInfo->m_bStillRetrying : false);
    event.dispatch();
}

void GMGameServerCallbackHandler::OnSteamServersDisconnected(SteamServersDisconnected_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_servers_disconnected");
    event.set((char*)"result", static_cast<double>(pInfo ? pInfo->m_eResult : k_EResultFail));
    event.dispatch();
}

void GMGameServerCallbackHandler::OnGSPolicyResponse(GSPolicyResponse_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_policy_response");
    event.set((char*)"secure", pInfo ? (pInfo->m_bSecure != 0) : false);
    event.dispatch();
}

void GMGameServerCallbackHandler::OnValidateAuthTicketResponse(ValidateAuthTicketResponse_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_validate_auth_ticket_response");
    if (pInfo)
    {
        event.set((char*)"success", pInfo->m_eAuthSessionResponse == k_EAuthSessionResponseOK);
        event.set((char*)"response", static_cast<double>(pInfo->m_eAuthSessionResponse));
        event.set_steamid_all("steam_id", pInfo->m_SteamID);
        event.set_steamid_all("owner_steam_id", pInfo->m_OwnerSteamID);
    }
    else
    {
        event.set((char*)"success", false);
        event.set((char*)"response", static_cast<double>(k_EAuthSessionResponseAuthTicketInvalid));
    }
    event.dispatch();
}

void GMGameServerCallbackHandler::OnGSClientApprove(GSClientApprove_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_client_approve");
    if (pInfo)
    {
        event.set_steamid_all("steam_id", pInfo->m_SteamID);
        event.set_steamid_all("owner_steam_id", pInfo->m_OwnerSteamID);
    }
    event.dispatch();
}

void GMGameServerCallbackHandler::OnGSClientDeny(GSClientDeny_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_client_deny");
    if (pInfo)
    {
        event.set_steamid_all("steam_id", pInfo->m_SteamID);
        event.set((char*)"deny_reason", static_cast<double>(pInfo->m_eDenyReason));
        event.set((char*)"optional_text", pInfo->m_rgchOptionalText);
    }
    event.dispatch();
}

void GMGameServerCallbackHandler::OnGSClientKick(GSClientKick_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_client_kick");
    if (pInfo)
    {
        event.set_steamid_all("steam_id", pInfo->m_SteamID);
        event.set((char*)"deny_reason", static_cast<double>(pInfo->m_eDenyReason));
    }
    event.dispatch();
}

void GMGameServerCallbackHandler::OnGSClientGroupStatus(GSClientGroupStatus_t* pInfo)
{
    steam_net_event event((char*)"steam_gameserver_client_group_status");
    if (pInfo)
    {
        event.set_steamid_all("steam_id", pInfo->m_SteamIDUser);
        event.set_steamid_all("group_steam_id", pInfo->m_SteamIDGroup);
        event.set((char*)"member", pInfo->m_bMember);
        event.set((char*)"officer", pInfo->m_bOfficer);
    }
    event.dispatch();
}

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
	const char* initMode = extOptGetString("Steamworks", "initializationMode");
	bool dedicatedServerMode = initMode && strncmp(initMode, "Dedicated Server", 16) == 0;

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
        if (!dedicatedServerMode && SteamAPI_RestartAppIfNecessary(AppID))
        {
            tracef("RestartAppIfNecessary check failed, the game is not allowed to continue");
            exit(0);
            return;
		}
	}

	if (dedicatedServerMode)
	{
		tracef("Steam client auto-init skipped because Initialization Mode is Dedicated Server.");
		return;
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

    // Auto-initialize Steam Input if extension option is set to "Auto"
    const char* steamInputOpt = extOptGetString("Steamworks", "steamInput");
    if (strncmp(steamInputOpt, "Auto", 4) == 0)
    {
        tracef("Steam Input auto-init enabled via extension option.");
        Steam_Input_Init();
    }
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

	if (steam_input_auto_initialized && SteamInput())
	{
		SteamInput()->Shutdown();
		steam_input_auto_initialized = false;
		Steam_Input_Cleanup();
		tracef("Steam Input auto-shutdown completed.");
	}

	SteamAPI_Shutdown();
	steam_is_initialised = false;
}

YYEXPORT void steam_gameserver_init(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    SteamGameServer_ReturnBool(Result, false);

    if (steam_gameserver_is_initialised)
    {
        Result.val = true;
        return;
    }

    RValue* config = (argc > 0 && arg) ? YYGetStruct(arg, 0) : nullptr;
    if (!config)
    {
        DebugConsoleOutput("steam_gameserver_init() - expected a config struct\n");
        return;
    }

    uint32 ip = SteamGameServer_GetStructIP(config, "ip", 0);
    uint16 steamPort = SteamGameServer_GetStructPort(config, "steam_port", 8766);
    uint16 gamePort = SteamGameServer_GetStructPort(config, "game_port", 27015);
    uint16 queryPort = SteamGameServer_GetStructPort(config, "query_port", 27016);
    EServerMode serverMode = static_cast<EServerMode>(static_cast<int>(SteamGameServer_GetStructReal(config, "server_mode", eServerModeAuthentication)));
    const char* version = SteamGameServer_GetStructString(config, "version", "1.0.0.0");

    bool ok = SteamGameServer_Init(ip, steamPort, gamePort, queryPort, serverMode, version);
    steam_gameserver_is_initialised = ok;
    Result.val = ok;
}

YYEXPORT void steam_gameserver_initialised(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    SteamGameServer_ReturnBool(Result, steam_gameserver_is_initialised);
}

YYEXPORT void steam_gameserver_update(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    if (!steam_gameserver_is_initialised)
    {
        SteamGameServer_ReturnBool(Result, false);
        return;
    }

    SteamGameServer_RunCallbacks();
    SteamGameServer_ReturnBool(Result, true);
}

YYEXPORT void steam_gameserver_shutdown(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    if (!steam_gameserver_is_initialised)
    {
        SteamGameServer_ReturnBool(Result, false);
        return;
    }

    SteamGameServer_Shutdown();
    steam_gameserver_is_initialised = false;
    SteamGameServer_ReturnBool(Result, true);
}

YYEXPORT void steam_gameserver_set_product(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetProduct(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_game_description(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetGameDescription(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_mod_dir(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetModDir(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_dedicated_server(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetDedicatedServer(YYGetBool(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_log_on(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->LogOn(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_log_on_anonymous(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->LogOnAnonymous();
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_log_off(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->LogOff();
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_logged_on(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    SteamGameServer_ReturnBool(Result, p ? p->BLoggedOn() : false);
}

YYEXPORT void steam_gameserver_secure(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    SteamGameServer_ReturnBool(Result, p ? p->BSecure() : false);
}

YYEXPORT void steam_gameserver_get_steam_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    Result.kind = VALUE_INT64;
    Result.v64 = p ? static_cast<int64>(p->GetSteamID().ConvertToUint64()) : 0;
}

YYEXPORT void steam_gameserver_was_restart_requested(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    SteamGameServer_ReturnBool(Result, p ? p->WasRestartRequested() : false);
}

YYEXPORT void steam_gameserver_set_max_player_count(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetMaxPlayerCount(static_cast<int>(YYGetReal(arg, 0)));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_bot_player_count(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetBotPlayerCount(static_cast<int>(YYGetReal(arg, 0)));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_server_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetServerName(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_map_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetMapName(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_password_protected(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetPasswordProtected(YYGetBool(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_spectator_port(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetSpectatorPort(static_cast<uint16>(YYGetReal(arg, 0)));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_spectator_server_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetSpectatorServerName(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_clear_all_key_values(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->ClearAllKeyValues();
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_key_value(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetKeyValue(YYGetString(arg, 0), YYGetString(arg, 1));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_game_tags(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetGameTags(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_game_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetGameData(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_region(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetRegion(YYGetString(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_set_advertise_server_active(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->SetAdvertiseServerActive(YYGetBool(arg, 0));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_get_public_ip(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    YYStructCreate(&Result);
    ISteamGameServer* p = SteamGameServer_GetAPI();
    SteamIPAddress_t ip{};
    ip.m_eType = k_ESteamIPTypeIPv4;
    if (p)
        ip = p->GetPublicIP();
    uint32 ipv4 = ip.m_eType == k_ESteamIPTypeIPv4 ? ip.m_unIPv4 : 0;
    std::string ipString = SteamGameServer_IPv4ToString(ipv4);
    YYStructAddBool(&Result, "is_set", p ? ip.IsSet() : false);
    YYStructAddInt(&Result, "type", static_cast<int>(ip.m_eType));
    YYStructAddDouble(&Result, "ipv4", static_cast<double>(ipv4));
    YYStructAddString(&Result, "ipv4_string", ip.m_eType == k_ESteamIPTypeIPv4 ? ipString.c_str() : "");
}

YYEXPORT void steam_gameserver_handle_incoming_packet(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (!p)
    {
        SteamGameServer_ReturnBool(Result, false);
        return;
    }

    int bufferIndex = YYGetInt32(arg, 0);
    int packetSize = YYGetInt32(arg, 1);
    uint32 srcIP = static_cast<uint32>(YYGetReal(arg, 2));
    uint16 srcPort = static_cast<uint16>(YYGetReal(arg, 3));
    void* bufferData = nullptr;
    int bufferSize = 0;
    if (bufferIndex < 0 || !BufferGetContent(bufferIndex, &bufferData, &bufferSize) || !bufferData)
    {
        SteamGameServer_ReturnBool(Result, false);
        return;
    }
    if (packetSize <= 0 || packetSize > bufferSize)
        packetSize = bufferSize;

    bool ok = p->HandleIncomingPacket(bufferData, packetSize, srcIP, srcPort);
    YYFree(bufferData);
    SteamGameServer_ReturnBool(Result, ok);
}

YYEXPORT void steam_gameserver_get_next_outgoing_packet(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    YYStructCreate(&Result);
    ISteamGameServer* p = SteamGameServer_GetAPI();
    int bufferIndex = YYGetInt32(arg, 0);
    int maxSize = (argc > 1) ? YYGetInt32(arg, 1) : 16 * 1024;
    if (!p || bufferIndex < 0 || maxSize <= 0)
    {
        YYStructAddBool(&Result, "success", false);
        YYStructAddInt(&Result, "size", 0);
        return;
    }

    std::vector<uint8> packet(static_cast<size_t>(maxSize));
    uint32 ip = 0;
    uint16 port = 0;
    int size = p->GetNextOutgoingPacket(packet.data(), maxSize, &ip, &port);
    bool success = false;
    if (size > 0)
        success = BufferWriteContent(bufferIndex, 0, packet.data(), size, false, false) == size;

    std::string ipString = SteamGameServer_IPv4ToString(ip);
    YYStructAddBool(&Result, "success", success);
    YYStructAddInt(&Result, "size", success ? size : 0);
    YYStructAddDouble(&Result, "ip", static_cast<double>(ip));
    YYStructAddString(&Result, "ip_string", ipString.c_str());
    YYStructAddInt(&Result, "port", port);
}

YYEXPORT void steam_gameserver_get_auth_session_ticket(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    YYStructCreate(&Result);
    ISteamGameServer* p = SteamGameServer_GetAPI();
    uint8 ticketBytes[3000] = { 0 };
    uint32 ticketSize = 0;
    HAuthTicket ticket = p ? p->GetAuthSessionTicket(ticketBytes, sizeof(ticketBytes), &ticketSize, nullptr) : k_HAuthTicketInvalid;
    int ticketBuffer = -1;
    if (ticket != k_HAuthTicketInvalid && ticketSize > 0)
    {
        ticketBuffer = CreateBuffer(ticketSize, eBuffer_Format_Fixed, 1);
        BufferWriteContent(ticketBuffer, 0, ticketBytes, ticketSize);
    }

    YYStructAddInt(&Result, "ticket_buffer", ticketBuffer);
    YYStructAddInt(&Result, "ticket_size", static_cast<int>(ticketSize));
    YYStructAddDouble(&Result, "auth_ticket_handle", static_cast<double>(ticket));
}

YYEXPORT void steam_gameserver_begin_auth_session(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (!p)
    {
        SteamGameServer_ReturnReal(Result, -1.0);
        return;
    }

    int32 bufferId = YYGetInt32(arg, 0);
    int32 ticketSize = YYGetInt32(arg, 1);
    int64 steamId = YYGetInt64(arg, 2);
    void* bufferData = nullptr;
    int bufferSize = 0;
    if (ticketSize <= 0 || bufferId < 0 || !BufferGetContent(bufferId, &bufferData, &bufferSize) || !bufferData)
    {
        SteamGameServer_ReturnReal(Result, -1.0);
        return;
    }
    if (ticketSize > bufferSize)
        ticketSize = bufferSize;

    CSteamID target;
    target.SetFromUint64(static_cast<uint64>(steamId));
    EBeginAuthSessionResult authResult = p->BeginAuthSession(bufferData, ticketSize, target);
    YYFree(bufferData);
    SteamGameServer_ReturnReal(Result, static_cast<double>(authResult));
}

YYEXPORT void steam_gameserver_end_auth_session(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p)
    {
        CSteamID steamId;
        steamId.SetFromUint64(static_cast<uint64>(YYGetInt64(arg, 0)));
        p->EndAuthSession(steamId);
    }
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_cancel_auth_ticket(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (p) p->CancelAuthTicket(static_cast<HAuthTicket>(YYGetReal(arg, 0)));
    SteamGameServer_ReturnBool(Result, p != nullptr);
}

YYEXPORT void steam_gameserver_user_has_license_for_app(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (!p)
    {
        SteamGameServer_ReturnReal(Result, -1.0);
        return;
    }

    CSteamID steamId;
    steamId.SetFromUint64(static_cast<uint64>(YYGetInt64(arg, 0)));
    AppId_t appId = static_cast<AppId_t>(YYGetReal(arg, 1));
    SteamGameServer_ReturnReal(Result, static_cast<double>(p->UserHasLicenseForApp(steamId, appId)));
}

YYEXPORT void steam_gameserver_request_user_group_status(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    ISteamGameServer* p = SteamGameServer_GetAPI();
    if (!p)
    {
        SteamGameServer_ReturnBool(Result, false);
        return;
    }

    CSteamID userId;
    userId.SetFromUint64(static_cast<uint64>(YYGetInt64(arg, 0)));
    CSteamID groupId;
    groupId.SetFromUint64(static_cast<uint64>(YYGetInt64(arg, 1)));
    SteamGameServer_ReturnBool(Result, p->RequestUserGroupStatus(userId, groupId));
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
