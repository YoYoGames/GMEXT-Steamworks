
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

