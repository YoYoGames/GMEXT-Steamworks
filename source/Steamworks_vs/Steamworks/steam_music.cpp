///steam_music.cpp

#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#pragma region steam music

YYEXPORT void steam_music_is_enabled(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}
	Result.kind = VALUE_BOOL;
	Result.val = SteamMusic()->BIsEnabled();

}

YYEXPORT void steam_music_is_playing(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}
	Result.kind = VALUE_BOOL;
	Result.val = SteamMusic()->BIsPlaying();

}

YYEXPORT void steam_music_get_status(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}
	Result.kind = VALUE_INT32;
	Result.v32 = SteamMusic()->GetPlaybackStatus();

}

YYEXPORT void steam_music_play(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	Result.kind = VALUE_REAL;

	if (!steam_is_initialised)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	SteamMusic()->Play();

}


YYEXPORT void steam_music_pause(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	Result.kind = VALUE_REAL;

	if (!steam_is_initialised)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	SteamMusic()->Pause();

}

YYEXPORT void steam_music_play_next(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	Result.kind = VALUE_REAL;

	if (!steam_is_initialised)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	SteamMusic()->PlayNext();

}

YYEXPORT void steam_music_play_previous(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	Result.kind = VALUE_REAL;

	if (!steam_is_initialised)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	SteamMusic()->PlayPrevious();

}

YYEXPORT void steam_music_set_volume(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) {

	Result.kind = VALUE_REAL;

	float vol = YYGetFloat(arg, 0);

	if (!steam_is_initialised)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	SteamMusic()->SetVolume(vol);

}

#pragma endregion