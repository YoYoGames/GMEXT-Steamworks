#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// As of now, the Steam Timeline API is in Beta
// and may not be available on all clients.
// This is why checking the interface for null is required.
// If any function returns false, then there's no SteamTimeline support.

class CGMSteamTimelineCallbacks
{

private:
	CCallResult<CGMSteamTimelineCallbacks, SteamTimelineGamePhaseRecordingExists_t>	m_SteamTimelineGamePhaseRecordingExists;
	CCallResult<CGMSteamTimelineCallbacks, SteamTimelineEventRecordingExists_t>	m_SteamTimelineEventRecordingExists;

	void on_steam_timeline_game_phase_recording_exists(SteamTimelineGamePhaseRecordingExists_t*, bool bIOFailure);

	void on_steam_timeline_event_recording_exists(SteamTimelineEventRecordingExists_t*, bool bIOFailure);

public:

	void set_steam_timeline_game_phase_recording_exists_listener(SteamAPICall_t apicall)
	{
		m_SteamTimelineGamePhaseRecordingExists.Set(apicall, this, &CGMSteamTimelineCallbacks::on_steam_timeline_game_phase_recording_exists);
	}

	void set_steam_timeline_event_recording_exists_listener(SteamAPICall_t apicall)
	{
		m_SteamTimelineEventRecordingExists.Set(apicall, this, &CGMSteamTimelineCallbacks::on_steam_timeline_event_recording_exists);
	}
};

void CGMSteamTimelineCallbacks::on_steam_timeline_game_phase_recording_exists(SteamTimelineGamePhaseRecordingExists_t* pParam, bool bIOFailure)
{
	int map = CreateDsMap(0, 0);
	DsMapAddString(map, "event_type", "steam_timeline_game_phase_recording_exists");
	DsMapAddBool(map, "success", !bIOFailure);

	if (!bIOFailure && pParam)
	{
		DsMapAddString(map, "phase_id", &pParam->m_rgchPhaseID[0]);
		DsMapAddInt64(map, "longest_clip_ms", static_cast<int64>(pParam->m_ulLongestClipMS));
		DsMapAddInt64(map, "recording_ms", static_cast<int64>(pParam->m_ulRecordingMS));
		DsMapAddDouble(map, "clip_count", static_cast<double>(pParam->m_unClipCount));
		DsMapAddDouble(map, "screenshot_count", static_cast<double>(pParam->m_unScreenshotCount));
	}
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

void CGMSteamTimelineCallbacks::on_steam_timeline_event_recording_exists(SteamTimelineEventRecordingExists_t* pParam, bool bIOFailure)
{
	int map = CreateDsMap(0, 0);
	DsMapAddString(map, "event_type", "steam_timeline_event_recording_exists");
	DsMapAddBool(map, "success", !bIOFailure);

	if (!bIOFailure && pParam)
	{
		DsMapAddBool(map, "exists", pParam->m_bRecordingExists);
		DsMapAddInt64(map, "event_id", static_cast<int64>(pParam->m_ulEventID));
	}
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

CGMSteamTimelineCallbacks* g_pCGMSteamTimelineCallbacks = nullptr;

//// helpers:
#define API SteamTimeline()
#define steam_timeline_ensure_argc(_ExpectedArgumentCount) \
	do \
	{ \
		if (argc < (_ExpectedArgumentCount) || nullptr == arg) \
		{ \
			YYError("%s expected at least %d arguments but got %d instead", __func__, (_ExpectedArgumentCount), argc); \
		} \
	} while (0) /* so we are required to put a semicolon here... */

YYEXPORT void steam_timeline_set_state_description(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(2);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* description = YYGetString(arg, 0);
	float delta = YYGetFloat(arg, 1);
	API->SetTimelineTooltip(description, delta);
	Result.val = 1;
}

YYEXPORT void steam_timeline_clear_state_description(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	float delta = YYGetFloat(arg, 0);
	API->ClearTimelineTooltip(delta);
	Result.val = 1;
}

YYEXPORT void steam_timeline_add_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(4);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* icon = YYGetString(arg, 0);
	const char* title = YYGetString(arg, 1);
	const char* desc = YYGetString(arg, 2);
	uint32 prio = YYGetUint32(arg, 3);
	float start = argc > 4 ? YYGetFloat(arg, 4) : 0.0f;
	float dur = argc > 5 ? YYGetFloat(arg, 5) : 0.0f;
	ETimelineEventClipPriority possible = argc > 6 ? static_cast<ETimelineEventClipPriority>(YYGetInt32(arg, 6)) : k_ETimelineEventClipPriority_None;

	Result.kind = VALUE_INT64;
	Result.v64 = API->AddRangeTimelineEvent(icon, title, desc, prio, start, dur, possible);
}

YYEXPORT void steam_timeline_remove_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	TimelineEventHandle_t handle = static_cast<TimelineEventHandle_t>(YYGetInt64(arg, 0));
	API->RemoveTimelineEvent(handle);

	Result.val = 1;
}

YYEXPORT void steam_timeline_start_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(6);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* icon = YYGetString(arg, 0);
	const char* title = YYGetString(arg, 1);
	const char* desc = YYGetString(arg, 2);
	uint32 prio = YYGetUint32(arg, 3);
	float start = YYGetFloat(arg, 4);
	ETimelineEventClipPriority possible = static_cast<ETimelineEventClipPriority>(YYGetInt32(arg, 5));
	
	Result.kind = VALUE_INT64;
	Result.v64 = API->StartRangeTimelineEvent(icon, title, desc, prio, start, possible);
}

YYEXPORT void steam_timeline_update_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(6);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	TimelineEventHandle_t handle = static_cast<TimelineEventHandle_t>(YYGetInt64(arg, 0));
	const char* icon = YYGetString(arg, 1);
	const char* title = YYGetString(arg, 2);
	const char* desc = YYGetString(arg, 3);
	uint32 prio = YYGetUint32(arg, 4);
	ETimelineEventClipPriority possible = static_cast<ETimelineEventClipPriority>(YYGetInt32(arg, 5));
	API->UpdateRangeTimelineEvent(handle, title, desc, icon, prio, possible);


	Result.val = 1;
}

YYEXPORT void steam_timeline_end_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(2);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	TimelineEventHandle_t handle = static_cast<TimelineEventHandle_t>(YYGetInt64(arg, 0));
	float end = YYGetFloat(arg, 1);
	API->EndRangeTimelineEvent(handle, end);

	Result.val = 1;
}

YYEXPORT void steam_timeline_add_instantaneous_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(4);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* icon = YYGetString(arg, 0);
	const char* title = YYGetString(arg, 1);
	const char* desc = YYGetString(arg, 2);
	uint32 prio = YYGetUint32(arg, 3);
	float start = argc > 4 ? YYGetFloat(arg, 4) : 0.0f;
	ETimelineEventClipPriority possible = argc > 5 ? static_cast<ETimelineEventClipPriority>(YYGetInt32(arg, 5)) : k_ETimelineEventClipPriority_None;
	API->AddInstantaneousTimelineEvent(title, desc, icon, prio, start, possible);


	Result.val = 1;
}

YYEXPORT void steam_timeline_event_recording_exists(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	TimelineEventHandle_t handle = static_cast<TimelineEventHandle_t>(YYGetInt64(arg, 0));

	if (g_pCGMSteamTimelineCallbacks == nullptr) {
		g_pCGMSteamTimelineCallbacks = new CGMSteamTimelineCallbacks();
	}

	g_pCGMSteamTimelineCallbacks->set_steam_timeline_event_recording_exists_listener(API->DoesEventRecordingExist(handle));
	Result.val = 1;
}

YYEXPORT void steam_timeline_event_open_overlay(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	TimelineEventHandle_t handle = static_cast<TimelineEventHandle_t>(YYGetInt64(arg, 0));

	API->OpenOverlayToTimelineEvent(handle);
	Result.val = 1;
}

YYEXPORT void steam_timeline_set_game_mode(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	ETimelineGameMode gamemode = static_cast<ETimelineGameMode>(YYGetInt32(arg, 0));
	API->SetTimelineGameMode(gamemode);
	Result.val = 1;
}

YYEXPORT void steam_timeline_game_phase_start(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	API->StartGamePhase();
	Result.val = 1;
}

YYEXPORT void steam_timeline_game_phase_end(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	API->EndGamePhase();
	Result.val = 1;
}

YYEXPORT void steam_timeline_game_phase_add_tag(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(4);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* name = YYGetString(arg, 0);
	const char* icon = YYGetString(arg, 1);
	const char* group = YYGetString(arg, 2);
	uint32 prio = YYGetUint32(arg, 3);

	API->AddGamePhaseTag(name, icon, group, prio);
	Result.val = 1;
}

YYEXPORT void steam_timeline_game_phase_set_attribute(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(3);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* group = YYGetString(arg, 0);
	const char* value = YYGetString(arg, 1);
	uint32 prio = YYGetUint32(arg, 2);

	API->SetGamePhaseAttribute(group, value, prio);
	Result.val = 1;
}

YYEXPORT void steam_timeline_game_phase_set_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* id = YYGetString(arg, 0);

	API->SetGamePhaseID(id);
	Result.val = 1;
}

YYEXPORT void steam_timeline_game_phase_recording_exists(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* id = YYGetString(arg, 0);

	if (g_pCGMSteamTimelineCallbacks == nullptr) {
		g_pCGMSteamTimelineCallbacks = new CGMSteamTimelineCallbacks();
	}

	g_pCGMSteamTimelineCallbacks->set_steam_timeline_game_phase_recording_exists_listener(API->DoesGamePhaseRecordingExist(id));
	Result.val = 1;
}

YYEXPORT void steam_timeline_game_phase_open_overlay(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_timeline_ensure_argc(1);

	Result.kind = VALUE_BOOL;
	Result.val = 0;

	if (!steam_is_initialised || !API)
	{
		return;
	}

	const char* id = YYGetString(arg, 0);

	API->OpenOverlayToGamePhase(id);
	Result.val = 1;
}

