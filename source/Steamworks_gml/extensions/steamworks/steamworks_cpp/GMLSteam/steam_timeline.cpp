#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// As of now, the Steam Timeline API is in Beta
// and may not be available on all clients.
// This is why checking the interface for null is required.
// If any function returns false, then there's no SteamTimeline support.

YYEXPORT void steam_timeline_set_state_description(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !SteamTimeline())
	{
		return;
	}

	const char* description = YYGetString(arg, 0);
	float delta = YYGetFloat(arg, 1);
	SteamTimeline()->SetTimelineStateDescription(description, delta);
	Result.val = 1;
}

YYEXPORT void steam_timeline_clear_state_description(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !SteamTimeline())
	{
		return;
	}

	float delta = YYGetFloat(arg, 0);
	SteamTimeline()->ClearTimelineStateDescription(delta);
	Result.val = 1;
}

YYEXPORT void steam_timeline_add_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !SteamTimeline())
	{
		return;
	}

	const char* icon = YYGetString(arg, 0);
	const char* title = YYGetString(arg, 1);
	const char* desc = YYGetString(arg, 2);
	uint32 prio = YYGetUint32(arg, 3);
	float start = YYGetFloat(arg, 4);
	float dur = YYGetFloat(arg, 5);
	ETimelineEventClipPriority possible = static_cast<ETimelineEventClipPriority>(YYGetInt32(arg, 6));
	SteamTimeline()->AddTimelineEvent(icon, title, desc, prio, start, dur, possible);
	Result.val = 1;
}

YYEXPORT void steam_timeline_set_game_mode(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !SteamTimeline())
	{
		return;
	}

	ETimelineGameMode gamemode = static_cast<ETimelineGameMode>(YYGetInt32(arg, 0));
	SteamTimeline()->SetTimelineGameMode(gamemode);
	Result.val = 1;
}

