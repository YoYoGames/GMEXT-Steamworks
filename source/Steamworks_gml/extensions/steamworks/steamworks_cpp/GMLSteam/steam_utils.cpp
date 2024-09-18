/// steam_utils.cpp

#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
//#include "steam_glue.h

class CGMSteamUtilsCallbacks
{
public:

	STEAM_CALLBACK(CGMSteamUtilsCallbacks, on_floating_gamepad_text_input_dismissed, FloatingGamepadTextInputDismissed_t);

	STEAM_CALLBACK(CGMSteamUtilsCallbacks, on_gamepad_text_input_dismissed, GamepadTextInputDismissed_t);
};

void CGMSteamUtilsCallbacks::on_floating_gamepad_text_input_dismissed(FloatingGamepadTextInputDismissed_t* pParam)
{
	int map = CreateDsMap(0, 0);
	DsMapAddString(map, "event_type", "floating_gamepad_text_input_dismissed");
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

void CGMSteamUtilsCallbacks::on_gamepad_text_input_dismissed(GamepadTextInputDismissed_t* pParam)
{
	int map = CreateDsMap(0, 0);
	DsMapAddString(map, "event_type", "gamepad_text_input_dismissed");
	DsMapAddBool(map, "submitted", pParam->m_bSubmitted);
	// length in BYTES, not in UTF-8 characters!
	DsMapAddDouble(map, "submitted_text_raw_byte_length", pParam->m_unSubmittedText);
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

CGMSteamUtilsCallbacks* g_pGMSteamUtilsCallbacks = nullptr;

void steam_utils_ensure_callbacks_class()
{
	if (!g_pGMSteamUtilsCallbacks)
	{
		g_pGMSteamUtilsCallbacks = new CGMSteamUtilsCallbacks();
	}
}

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
		return;
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
		return;
	}

	SteamUtils()->SetOverlayNotificationInset((int)hor_inset, (int)vert_inset);
	Result.kind = VALUE_REAL;
	Result.val = 1.0;
}

/// (mode:floating_gamepad_text_input_mode,text_field_x:real,text_field_y:real,text_field_width:real,text_field_height:real)->bool
YYEXPORT void steam_show_floating_gamepad_text_input(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;

	if (!SteamUtils() || argc < 5 || !arg)
	{
		Result.val = 0;
		return;
	}

	Result.val = SteamUtils()->ShowFloatingGamepadTextInput(
		static_cast<EFloatingGamepadTextInputMode>(YYGetInt32(arg, 0)),
		YYGetInt32(arg, 1),
		YYGetInt32(arg, 2),
		YYGetInt32(arg, 3),
		YYGetInt32(arg, 4)
	);
}

/// ()->bool
YYEXPORT void steam_dismiss_floating_gamepad_text_input(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;

	if (!SteamUtils())
	{
		Result.val = 0;
		return;
	}

	Result.val = SteamUtils()->DismissFloatingGamepadTextInput();
}

/// (mode:gamepad_text_input_mode,lines_mode:gamepad_text_input_line_mode,description:string,chars_max:real,existing_text:string)->bool
YYEXPORT void steam_show_gamepad_text_input(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;

	if (!SteamUtils() || argc < 5 || !arg)
	{
		Result.val = 0;
		return;
	}

	Result.val = SteamUtils()->ShowGamepadTextInput(
		static_cast<EGamepadTextInputMode>(YYGetInt32(arg, 0)),
		static_cast<EGamepadTextInputLineMode>(YYGetInt32(arg, 1)),
		YYGetString(arg, 2),
		YYGetUint32(arg, 3),
		YYGetString(arg, 4)
	);
}

/// ()->string
YYEXPORT void steam_get_entered_gamepad_text_input(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!SteamUtils())
	{
		YYCreateString(&Result, "");
		return;
	}

	uint32 text_len = SteamUtils()->GetEnteredGamepadTextLength();
	char* text_buff = new char[static_cast<size_t>(text_len) + 1];
	SteamUtils()->GetEnteredGamepadTextInput(text_buff, text_len);
	YYCreateString(&Result, text_buff);
	delete[] text_buff;
	text_buff = nullptr;
}

/// ()->bool
YYEXPORT void steam_utils_enable_callbacks(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;

	if (!SteamUtils())
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	steam_utils_ensure_callbacks_class();
}

/// ()->bool
YYEXPORT void steam_utils_is_steam_running_on_steam_deck(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;

	if (!SteamUtils())
	{
		Result.val = 0;
		return;
	}

	Result.val = SteamUtils()->IsSteamRunningOnSteamDeck();
}

/// ()->bool
YYEXPORT void steam_utils_is_steam_in_big_picture_mode(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;

	if (!SteamUtils())
	{
		Result.val = 0;
		return;
	}

	Result.val = SteamUtils()->IsSteamInBigPictureMode();
}

/// (enable_launcher_mode:bool)->
YYEXPORT void steam_utils_set_game_launcher_mode(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!SteamUtils())
	{
		return;
	}

	bool bLauncherMode = YYGetBool(arg, 0);
	SteamUtils()->SetGameLauncherMode(bLauncherMode);
}

/// ()->real
YYEXPORT void steam_utils_get_server_real_time(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_REAL;
	if (SteamUtils()) {
		Result.val = SteamUtils()->GetServerRealTime();
	} else Result.val = 0;
}

/// ()->string
YYEXPORT void steam_utils_get_steam_ui_language(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	YYCreateString(&Result, (steam_is_initialised && SteamUtils()) ? SteamUtils()->GetSteamUILanguage() : "");
}
