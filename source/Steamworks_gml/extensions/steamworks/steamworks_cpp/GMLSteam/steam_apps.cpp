
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
		YYCreateString(&Result, "");
		return;
	}

	YYCreateString(&Result,SteamApps()->GetAvailableGameLanguages());
}

YYEXPORT void steam_get_current_beta_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!steam_is_initialised)
	{
		YYCreateString(&Result, "");
		return;
	}

	char betaName[256];
	bool success = SteamApps()->GetCurrentBetaName(betaName, 256);

	if (success)
	{
		YYCreateString(&Result, betaName);
	}
	else
	{
		YYCreateString(&Result, "");
	}
}

YYEXPORT void steam_get_num_betas(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    YYStructCreate(&Result);

    if (!steam_is_initialised)
    {
        return;
    }

    int available = 0;
    int private_betas = 0;
    int total_betas = SteamApps()->GetNumBetas(&available, &private_betas);

    YYStructAddInt(&Result, "total", total_betas);
    YYStructAddInt(&Result, "available", available);
    YYStructAddInt(&Result, "private", private_betas);
}

YYEXPORT void steam_get_beta_info(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    YYStructCreate(&Result);

    if (!steam_is_initialised || argc < 1)
    {
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
		YYStructAddDouble(&Result, "flags", flags);
		YYStructAddDouble(&Result, "buildID", buildID);
		YYStructAddString(&Result, "name", betaName);
		YYStructAddString(&Result, "description", description);
    }
}

YYEXPORT void steam_set_active_beta(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    if (!steam_is_initialised || argc < 1)
    {
        Result.kind = VALUE_REAL;
        Result.val = 0;
        return;
    }

    const char* betaName = YYGetString(arg, 0);
    bool success = SteamApps()->SetActiveBeta(betaName);

    Result.kind = VALUE_BOOL;
    Result.val = success;
}

