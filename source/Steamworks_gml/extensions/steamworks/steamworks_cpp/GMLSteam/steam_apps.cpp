
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

YYEXPORT void steam_user_owns_dlc(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( double dlcAppId )/*Steam_Apps_DoesUserOwnDLC*/
{
	double dlcAppId = YYGetReal(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_BOOL;
	Result.val = SteamApps()->BIsSubscribedApp(AppId_t(dlcAppId));
}

YYEXPORT void /*double*/ steam_user_installed_dlc(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( double dlcAppId )/*Steam_Apps_HasUserInstalledDLC*/
{
	double dlcAppId = YYGetReal(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_BOOL;
	Result.val = SteamApps()->BIsDlcInstalled(AppId_t(dlcAppId));
}

YYEXPORT void /*const char**/ steam_current_game_language(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_Apps_CurrentGameLanguage*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	YYCreateString(&Result, SteamApps()->GetCurrentGameLanguage());
}

YYEXPORT void /*const char**/ steam_available_languages(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_Apps_AvailableGameLanguages*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	YYCreateString(&Result,SteamApps()->GetAvailableGameLanguages());
}

YYEXPORT void /*bool*/ steam_get_current_beta_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	char betaName[256]; // Buffer to store the beta name
	bool success = SteamApps()->GetCurrentBetaName(betaName, 256);

	if (success)
	{
		YYCreateString(&Result, betaName);
	}
	else
	{
		// If not on a beta branch, return empty string
		YYCreateString(&Result, "");
	}
}

YYEXPORT void /*int*/ steam_get_num_betas(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
    if (!steam_is_initialised)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0;
        return;
    }

    int available = 0;
    int private_betas = 0;
    int total_betas = SteamApps()->GetNumBetas(&available, &private_betas);

    // Create a DS map to return the values
    int map = CreateDsMap(0, 0);
    DsMapAddDouble(map, "total", total_betas);
    DsMapAddDouble(map, "available", available);
    DsMapAddDouble(map, "private", private_betas);

    Result.kind = VALUE_REAL;
    Result.val = map;
}

YYEXPORT void /*bool*/ steam_get_beta_info(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
    if (!steam_is_initialised || argc < 1)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0;
        return;
    }

    int betaIndex = (int)(YYGetReal(arg, 0));

    uint32 flags = 0;
    uint32 buildID = 0;
    char betaName[128];
    char description[1024];

    bool success = SteamApps()->GetBetaInfo(betaIndex, &flags, &buildID, betaName, sizeof(betaName),
        description, sizeof(description));

    if (success)
    {
        // Create a DS map to return all the information
        int map = CreateDsMap(0, 0);
        DsMapAddDouble(map, "flags", flags);
        DsMapAddDouble(map, "buildID", buildID);
        DsMapAddString(map, "name", betaName);
        DsMapAddString(map, "description", description);
        DsMapAddDouble(map, "success", 1);

        Result.kind = VALUE_REAL;
        Result.val = map;
    }
    else
    {
        // Return a map with just the success flag set to false
        int map = CreateDsMap(0, 0);
        DsMapAddDouble(map, "success", 0);

        Result.kind = VALUE_REAL;
        Result.val = map;
    }
}

YYEXPORT void /*bool*/ steam_set_active_beta(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
    if (!steam_is_initialised || argc < 1)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0;
        return;
    }

    const char* betaName = YYGetString(arg, 0);
    bool success = SteamApps()->SetActiveBeta(betaName);

    Result.kind = VALUE_REAL;
    Result.val = success ? 1.0 : 0.0;
}