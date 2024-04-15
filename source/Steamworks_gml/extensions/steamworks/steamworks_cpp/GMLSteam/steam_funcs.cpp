
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

//#include "steam_enable.h"
//
//#include "./steam_funcs.h"
//
//#if defined(WIN_CLASSIC)
//#include <windows.h>
//#elif defined(LINUX) || defined(MAC)
//
//#include <dlfcn.h>
//#endif
//
////#include <Files/Base/Console.h>
//
//bool (*g_pSteamAPI_InitSafe)(void);
//bool (*g_pSteamAPI_Init)(void);
//void (*g_pSteamAPI_RunCallbacks)(void);
//bool (*g_pSteamAPI_RestartAppIfNecessary)(uint32);
//void (*g_pSteamAPI_Shutdown)(void);
//
//ISteamClient* (*g_pSteamClient)(void);
//
//
//
//
//
//void (*g_pSteamAPI_RegisterCallback)(class CCallbackBase *pCallback, int iCallback );
//void (*g_pSteamAPI_UnregisterCallback)( class CCallbackBase *pCallback );
//void (*g_pSteamAPI_RegisterCallResult)( class CCallbackBase *pCallback, SteamAPICall_t hAPICall );
//void (*g_pSteamAPI_UnregisterCallResult)( class CCallbackBase *pCallback, SteamAPICall_t hAPICall );
//HSteamUser (*g_pSteamAPI_GetHSteamUser)();
//HSteamPipe (*g_pSteamAPI_GetHSteamPipe)();
//
//
//
//extern const char* g_pSteamErrorMsg;
//
//static bool s_bError = false;
//
//#if defined(WIN_CLASSIC)
//static HMODULE s_hLib = NULL;
//FARPROC GetFunc( const char* pszFuncName )
//{
//	FARPROC pFunc = GetProcAddress( s_hLib, pszFuncName );
//	if( !pFunc )
//	{
//		DWORD dwError = GetLastError();
//		DebugConsoleOutput("ERROR: Failed to find function %s error %d\n", pszFuncName, dwError);
//		s_bError = true;
//	}
//	return pFunc;	
//}
//#elif defined(LINUX) || defined(MAC)
//static void* s_hLib = NULL;
//void* GetFunc( const char* pszFuncName )
//{
//	dlerror();	//clear error	
//	void* pFunc = dlsym( s_hLib, pszFuncName );
//	char* err = dlerror();
//	if( err != NULL )
//	{
//		DebugConsoleOutput("ERROR: Failed to find function %s :error %s\n", pszFuncName, err);
//	}
//	return pFunc;
//}
//
//#endif
//
//CSteamAPIContext *g_SteamContext;
//
//bool InitFunctions()
//{
//	//hook up functions... such a pretty language
//	g_pSteamAPI_Init = (bool(*)(void))GetFunc("SteamAPI_Init");
//	g_pSteamAPI_InitSafe = (bool(*)(void))GetFunc("SteamAPI_InitSafe");
//	g_pSteamClient = (ISteamClient*(*)(void))GetFunc("SteamClient");
//
//	g_pSteamAPI_RunCallbacks = (void(*)(void))GetFunc("SteamAPI_RunCallbacks");
//	g_pSteamAPI_RestartAppIfNecessary = (bool(*)(uint32))GetFunc("SteamAPI_RestartAppIfNecessary");
//	g_pSteamAPI_Shutdown = (void(*)(void))GetFunc("SteamAPI_Shutdown");
//	
//	g_pSteamAPI_GetHSteamUser=(HSteamUser(*)(void))GetFunc("SteamAPI_GetHSteamUser");
//	g_pSteamAPI_GetHSteamPipe=(HSteamPipe(*)(void))GetFunc("SteamAPI_GetHSteamPipe");
//
//
//	g_pSteamAPI_RegisterCallback =		(void(*)(class CCallbackBase *pCallback, int iCallback ))GetFunc("SteamAPI_RegisterCallback");
//	g_pSteamAPI_UnregisterCallback =	(void(*)( class CCallbackBase *pCallback ))GetFunc("SteamAPI_UnregisterCallback");
//	g_pSteamAPI_RegisterCallResult =	(void(*)( class CCallbackBase *pCallback, SteamAPICall_t hAPICall ))GetFunc("SteamAPI_RegisterCallResult");
//	g_pSteamAPI_UnregisterCallResult = (void(*)( class CCallbackBase *pCallback, SteamAPICall_t hAPICall ))GetFunc("SteamAPI_UnregisterCallResult");
//
//	return !s_bError;
//}
//
//
//bool LoadSteamLib()
//{
//	bool bOK = false;
//#if defined(WIN_CLASSIC)
//# if defined _WIN64
//#define STEAMDLLNAME	L"steam_api64.dll"
//# else
//#define STEAMDLLNAME	L"steam_api.dll"
//# endif
//	//load the steam_api dll
//	s_hLib = LoadLibrary( STEAMDLLNAME );
//	if(s_hLib == NULL )
//	{
//		DWORD dwError = GetLastError();
//		DebugConsoleOutput("ERROR: Failed to load steam_api.dll error %d\n", dwError);
//		g_pSteamErrorMsg="Error loading steam_api.dll";
//		return false;
//	}
//
//	
//#elif defined(LINUX) 
//	s_hLib = dlopen("libsteam_api.so", RTLD_LAZY );
//	if( s_hLib == NULL )
//	{		
//		char* err = dlerror();
//		DebugConsoleOutput("Error: Failed to load libsteam_api.so: %s\n", err );
//		g_pSteamErrorMsg="Error loading libsteam_api.so";	//defer error message, since need to do gl setup before message box window can be displayed
//		return false;
//	}
//#elif defined(MAC)
//    extern const char* GetExeName(void);
//    //extern char g_pBundlePath[2048];
//    extern char* g_pGameName;
//    char dylibName[2048];
//    strcpy( &dylibName[0], GetExeName() );
//    char* pSlash = strrchr(&dylibName[0], '/');
//    if (pSlash==NULL) {
//        pSlash = &dylibName[0] - 1;
//    }
//    strcpy( pSlash+1, "libsteam_api.dylib");
//	s_hLib = dlopen(dylibName, RTLD_LAZY );
//	if( s_hLib == NULL )
//	{
//        char *errormsg=dlerror();
//        DebugConsoleOutput("Error: Failed to load libsteam_api.dylib from  %s\n", dylibName );
//        if(errormsg!=NULL)
//        {
//            DebugConsoleOutput("dlerror:%s\n",errormsg);
//        }
//        // check the directory where the game was loaded from
//        if(g_pGameName!=NULL)
//        {
//            strcpy( &dylibName[0], &g_pGameName[0] );
//            char* pSlash = strrchr(&dylibName[0], '/');
//            if (pSlash==NULL) {
//                pSlash = &dylibName[0] - 1;
//            }
//            strcpy( pSlash+1, "libsteam_api.dylib");
//            s_hLib = dlopen(dylibName, RTLD_LAZY );
//            if( s_hLib == NULL ) {
//                char* err = dlerror();
//                DebugConsoleOutput("Error: Failed to load libsteam_api.dylib: %s\n", err );
//                g_pSteamErrorMsg="Error loading libsteam_api.dylib";
//                return false;
//            } // end if
//        }
//        else
//        {
//            DebugConsoleOutput("GameName not set at this point\n");
//            g_pSteamErrorMsg="Error loading libsteam_api.dylib";
//            return false;
//        }
//	} // end if
//
//#endif
//	
//	bOK = InitFunctions();
//	if(!bOK) {
//		g_pSteamErrorMsg="Failed to find steam api functions";
//	}
//	return bOK;
//}
//
//void UnloadSteamLib()
//{
//#if defined(WIN_CLASSIC)
//	if( s_hLib != NULL )
//	{
//		FreeLibrary( s_hLib );
//	}
//#elif defined(LINUX)
//	if( s_hLib != NULL )
//	{
//		dlclose( s_hLib );
//	}
//
//#endif
//}
//
