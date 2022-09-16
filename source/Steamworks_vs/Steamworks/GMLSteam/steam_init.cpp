#include "pch.h"


//
//#include "../../Steamworks_vs/steam_event.h"
//
////#include "Files/Function/Function_Steam.h"
////#include "Files/Graphics/Graphics_Support.h"
////#include "Files/Base/Console.h"
////#include "Files/Run/Run_Command.h"
////#include "Files/Base/Utils.h"
////#include "Files/Support/Support_File.h"
////#include "Files/Base/IniFile.h"
////#include "Files/IO/LoadSave.h"
////#include "Files/Support/Support_Various.h"
//
////extern void Steam_Init();
////extern void Steam_Screenshots_Init();
////extern void Steam_Screenshots_Shutdown();
////extern void Steam_UserStats_Init();
////extern void Steam_UserStats_Process();
////extern void Steam_UserStats_Shutdown();
////extern void Steam_RemoteStorage_Init();
////extern void Steam_RemoteStorage_Shutdown();
////extern void Steam_Friends_Init();
////extern void Steam_Friends_Shutdown();
////extern void Steam_UGC_Init();
////extern void Steam_UGC_Shutdown();
//
//extern int32	g_SteamAppId;
//extern CSteamAPIContext *g_SteamContext;
//static bool g_bSteamInitialised = false;
//static bool g_bSteamInitFailed = false;
//const char* g_pSteamErrorMsg=NULL;
//bool g_bUseSteam = false; //TODO get from options or something
////behaviour differs somewhat for release mode ( create application ) - 
////we must abort if SteamAPI_RestartAppIfNecessary re-launches via steam client
//bool g_bSteamReleaseMode = false;
//bool g_bSteamExit = false;
//
//bool Steam_IsInitialised()
//{
//	return g_bSteamInitialised;
//}
//
////-----------------------------------------------------------------------------
//// Purpose: callback hook for debug text emitted from the Steam API
////-----------------------------------------------------------------------------
//extern "C" void __cdecl SteamAPIDebugTextHook( int nSeverity, const char *pchDebugText )
//{
//	// if you're running in the debugger, only warnings (nSeverity >= 1) will be sent
//	// if you add -debug_steamapi to the command-line, a lot of extra informational messages will also be sent
//	trace( pchDebugText );
//
//	if ( nSeverity >= 1 )
//	{
//		// place to set a breakpoint for catching API errors
//		int x = 3;
//		x = x;
//	}
//}
//
//
//static bool _steamInit( AppId_t appId)
//{
//	//TEST SHUTDOWN
//    //g_bSteamExit = true;
//    //return false;
//    
//    DebugConsoleOutput("Steam - SteamAPI_RestartAppIfNecessary\n");
//
//extern bool g_fDoSteamRestart;
//    if ( g_fDoSteamRestart && SteamAPI_RestartAppIfNecessary( appId ) )
//	{
//		// if Steam is not running or the game wasn't started through Steam, SteamAPI_RestartAppIfNecessary starts the 
//		// local Steam client and also launches this game again.
//		
//		// Once you get a public Steam AppID assigned for this game, you need to replace k_uAppIdInvalid with it and
//		// removed steam_appid.txt from the game depo
//		DebugConsoleOutput("Steam - Restart required\n");
//		if(g_bSteamReleaseMode) {
//			g_bSteamExit = true;
//		}
//		//don't think we want to display anything in this case, just die
//		return false;
//	}
//
//	// Init Steam CEG
//	DebugConsoleOutput("Steam - Steamworks_InitCEGLibrary\n");
//	if ( !Steamworks_InitCEGLibrary() )
//	{
//		DebugConsoleOutput("Steamworks_InitCEGLibrary() failed\n" );
//		g_pSteamErrorMsg = "Steam must be running to play this game (InitDrmLibrary() failed)";
//		
//		return false;
//	}
//
//	// Initialize SteamAPI, if this fails we bail out since we depend on Steam for lots of stuff.
//	// This will also load the in-game steam overlay dll into your process.  That dll is normally
//	// injected by steam when it launches games, but by calling this you cause it to always load,
//	// even when not launched via steam.
//	DebugConsoleOutput("Steam - SteamAPI_InitSafe\n");
//	if ( !SteamAPI_InitSafe() )
//	{
//		DebugConsoleOutput("SteamAPI_InitSafe() failed\n" );
//		g_pSteamErrorMsg = "Steam must be running to play this game (SteamAPI_InitSafe() failed)";
//		return false;
//	}
//
//	g_SteamContext = new CSteamAPIContext();
//	g_SteamContext->Init();
//
//	DebugConsoleOutput("Steam - SteamApps()->BIsSubscribed()\n");
//	if( !g_SteamContext->SteamApps()->BIsSubscribed())
//	{
//		//Check player has rights to the game.
//		DebugConsoleOutput("SteamApps()->BIsSubscribed() failed\n");
//		g_pSteamErrorMsg = "Steam must be running to play this game (user not subscribed)";
//		//!need to shut down steamAPI since we have called SteamAPI_Init()
//		SteamAPI_Shutdown();
//		return false;
//	}
//
//
//	// set our debug handler
//	DebugConsoleOutput("Steam - SteamClient()->SetWarningMessageHook()\n");
//	SteamClient()->SetWarningMessageHook( &SteamAPIDebugTextHook );
//	// do a DRM self check
//	DebugConsoleOutput("Steam - Steamworks_SelfCheck()\n");
//	Steamworks_SelfCheck();
//	
//	//setup stats ( sends stats request )
//	DebugConsoleOutput("Steam - Steam_UserStats_Init()\n");
//	Steam_UserStats_Init();
//	DebugConsoleOutput("Steam - Steam_RemoteStorage_Init()\n");
//	Steam_RemoteStorage_Init();
//
//	// tell steam we're handling screenshots, not the steam overlay (which we're not using) 
//	DebugConsoleOutput("Steam - Steam_Screenshots_Init()\n");
//	Steam_Screenshots_Init();
//	DebugConsoleOutput("Steam - Steam_Friends_Init()\n");
//	Steam_Friends_Init();
//	DebugConsoleOutput("Steam - Steam_UGC_Init()\n");
//	Steam_UGC_Init();
//
//
//	g_bSteamInitialised = true;
//
//	DebugConsoleOutput("g_bSteamInitialised being set to true");
//	return true;
//}
//
//void Steam_Init()
//{
//    //return if we already tried to initialise steam
//    if( g_bSteamInitialised || g_bSteamInitFailed)
//    {
//        DebugConsoleOutput("Steam already initialised\n");
//        return;
//    }
//    
//    AppId_t appId = k_uAppIdInvalid;
//	//DebugConsoleOutput("SteamAppId=%d\n", g_SteamAppId );
//	if( g_SteamAppId != 0 )
//	{
//		const char* exePath = ExtractFilePath(GetExeName());
//		char filename[1024];
//		snprintf(filename, 1024, "%s/steam_appid.txt", exePath);
//		DebugConsoleOutput("steamfile:%s\n", filename);
//
//		g_bUseSteam = true;
//		//for testing, write steam_appid.txt to exe directory (where steam api will find it), and pass k_uAppIdInvalid to steam init;
//		//-ve id denotes final release - instead pass app Id to _steamInit
//		if( g_SteamAppId < 0 )
//		{
//			appId = -g_SteamAppId;
//			g_bSteamReleaseMode = true;
//			DebugConsoleOutput("Steam being initialised with appId %d\n",appId);
//		}
//		else
//		{
//			g_bSteamReleaseMode = false;
//			
//			FILE* pFile = YYFOPEN( filename, "wb" );
//			char strID[32];
//			snprintf(strID, 32, "%d",g_SteamAppId );
//			if( pFile )
//			{
//				fwrite(strID, 1, strlen(strID), pFile );
//				fclose(pFile);
//			}
//			else
//			{
//				DebugConsoleOutput("Failed to open %s\n", filename );
//			}
//		}
//	}
//
//	if( g_bUseSteam )
//	{
//		//appId = - does this take precedence if steam_appid.txt is present? yes, and asks to install app via steam
//		DebugConsoleOutput("Steam_Init\n");
//
//		bool bOK = false;
//		if( LoadSteamLib() )
//		{
//			
//			bOK = _steamInit( appId );
//			DebugConsoleOutput("Steam_Init\n");
//		}
//		else
//			DebugConsoleOutput("Failed LoadSteamLib() call: %s\n", g_pSteamErrorMsg);
//
//		if( !bOK )
//		{
//			//if steam init fails - we have to exit...
//			 g_bSteamInitFailed=true;
//			 if(g_pSteamErrorMsg) 
//			 {
//				 DebugConsoleOutput("SteamInit failed: %s\n", g_pSteamErrorMsg);
//			 }
//			 else
//				 DebugConsoleOutput("SteamInit failed with no msg\n");
//			 UnloadSteamLib();
//
//			 //Must exit if steam init fails in release mode - to prevent direct launch of exe without steam restart
//			 if (g_bSteamReleaseMode)
//				 g_bSteamExit = true;
//		}
//		else
//			DebugConsoleOutput("LoadSteamLib and _steamInit both ok\n");
//		
//	}
//}
//
//
//void Steam_Process()
//{
//	if( g_bSteamInitialised )
//	{
//		SteamAPI_RunCallbacks();
//		Steam_UserStats_Process();
//	}
//}
//
//void Steam_Shutdown()
//{
//	if (g_bSteamInitialised)
//	{
//		DebugConsoleOutput("Steam_Shutdown1\n");
//		Steam_UserStats_Shutdown();
//		DebugConsoleOutput("Steam_Shutdown2\n");
//		Steam_RemoteStorage_Shutdown();
//		DebugConsoleOutput("Steam_Shutdown3\n");
//		Steam_Screenshots_Shutdown();
//		DebugConsoleOutput("Steam_Shutdown4\n");
//		Steam_Friends_Shutdown();
//		DebugConsoleOutput("Steam_Shutdown5\n");
//		Steam_UGC_Shutdown();
//		DebugConsoleOutput("Steam_Shutdown6\n");
//		SteamAPI_Shutdown();
//		DebugConsoleOutput("Steam_Shutdown7\n");
//		g_bSteamInitialised = false;
//		DebugConsoleOutput("Steam_Shutdown8\n");
//		UnloadSteamLib();
//		DebugConsoleOutput("Steam_Shutdown9\n");
//
//
//		Timing_Sleep(1000*1000);
//
//	}
//	else
//		DebugConsoleOutput("Not shutting down steam as it is not initialised\n");
//}
//
//bool Check_Steam_Restart()
//{
//	if( g_bUseSteam )
//	{
//		if( g_bSteamExit )
//		{
//			//ONLY do this in release when SteamAPI_RestartAppIfNecessary is relaunching app via steam client
//			//-still allow to continue though if SteamAPI_Init fails ( can query with steam_initialised)
//			DebugConsoleOutput("Steam restarting via client\n" );				
//			return true;
//			//if(g_pSteamErrorMsg )
//			//{
//			//	DebugConsoleOutput("%s\n", g_pSteamErrorMsg );				
//			//	ShowMessage( (char*)g_pSteamErrorMsg );
//			//}				
//
//			//extern void Command_EndGame();
//			//Command_EndGame();
//		}
//	}
//	return false;
//}
//
//
////for mac steam, to get the overlay to appear, steam must be initialised *before* opengl context creation
//
//void MacAppSteamInit(const char* pSteamId)
//{
//    int steamAppId = atoi(pSteamId);
//    
//    
//    DebugConsoleOutput("MacAppSteamInit %d\n", steamAppId);
//    //early initialise steam if the app id is present
//    if(steamAppId != 0)
//    {
//		g_SteamAppId = steamAppId;
//		if( g_SteamAppId > 0 )
//			g_SteamAppId = -g_SteamAppId; //app so release mode
//        Steam_Init();
//    }
//    
//}
//
//
//
//
//
