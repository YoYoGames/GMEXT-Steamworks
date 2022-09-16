/// steam_utils.cpp

#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
//#include "steam_glue.h

///
enum class steam_overlay_notification_position {
	top_left = 0,
	top_right,
	bottom_left,
	bottom_right,
};
///
YYEXPORT void /*double*/ steam_set_overlay_notification_position(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double position) 
{
	double position = YYGetReal(arg, 0);

	if (!SteamUtils())
	{
		Result.kind = VALUE_REAL;
		Result.val = 0.0;
	}

	SteamUtils()->SetOverlayNotificationPosition((ENotificationPosition)(int)position);
	Result.kind = VALUE_REAL;
	Result.val = 1.0;
}
///
YYEXPORT void /*double*/ steam_set_overlay_notification_inset(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double hor_inset, double vert_inset) 
{
	double hor_inset = YYGetReal(arg, 0);
	double vert_inset = YYGetReal(arg, 1);
	

	if (!SteamUtils())
	{
		Result.kind = VALUE_REAL;
		Result.val = 0.0;
	}

	SteamUtils()->SetOverlayNotificationInset((int)hor_inset, (int)vert_inset);
	Result.kind = VALUE_REAL;
	Result.val = 1.0;
}
