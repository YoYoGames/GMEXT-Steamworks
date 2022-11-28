
#ifndef _CRT_SECURE_NO_WARNINGS
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <vector>

const int EVENT_OTHER_WEB_STEAM = 69;
extern bool steam_is_initialised;

//extern void (*g_pSteamAPI_RegisterCallback)(class CCallbackBase* pCallback, int iCallback);
//extern void (*g_pSteamAPI_UnregisterCallback)(class CCallbackBase* pCallback);
//extern void (*g_pSteamAPI_RegisterCallResult)(class CCallbackBase* pCallback, SteamAPICall_t hAPICall);
//extern void (*g_pSteamAPI_UnregisterCallResult)(class CCallbackBase* pCallback, SteamAPICall_t hAPICall);
//extern int32(*g_pSteamAPI_GetHSteamUser)();
//extern int32(*g_pSteamAPI_GetHSteamPipe)();

//class ISteamClient;
//extern ISteamClient* (*g_pSteamClient)(void);
//
//extern CSteamAPIContext* g_SteamContext;
//#define SteamClient()			g_pSteamClient()

extern void Steam_UserStats_Init();
extern void Steam_Friends_Init();
extern void Steam_UGC_Init();
extern void Steam_Screenshots_Init();
extern void Steam_RemoteStorage_Init();

extern int requestInd;
extern int getAsyncRequestInd();

extern void Steam_UserStats_Process();

extern void _SW_SetArrayOfString(RValue* _array, char* str, const char* delim);
extern void _SW_SetArrayOfInt32(RValue* _array, std::vector<int> values);
extern void _SW_SetArrayOfReal(RValue* _array, std::vector<double> values);
extern void _SW_SetArrayOfRValue(RValue* _array, std::vector<RValue> values);
extern std::vector<const char*> _SW_GetArrayOfStrings(RValue* arg, int arg_idx, const char* func);
extern std::vector<int32> _SW_GetArrayOfInt32(RValue* arg, int arg_idx, const char* func);
extern std::vector<uint64> _SW_GetArrayOfUint64(RValue* arg, int arg_idx, const char* func);
