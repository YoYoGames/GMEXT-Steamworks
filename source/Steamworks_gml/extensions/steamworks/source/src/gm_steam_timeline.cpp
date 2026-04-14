// gm_steam_timeline.cpp
//
// Steamworks module: timeline (ISteamTimeline)
// Naming: steam_timeline_*

#include "GMSteamworks.h"

#include <steam/steam_api.h>
#include <steam/isteamtimeline.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <mutex>

using namespace gm::wire;
using namespace gm_structs;
using namespace gm_enums;

static inline ISteamTimeline* steam_timeline_iface()
{
    if (!steam_api_is_initialized())
    {
        steam_set_last_error("Steam Timeline: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamTimeline* t = SteamTimeline();
    if (!t)
        steam_set_last_error("Steam Timeline: SteamTimeline() returned NULL.");

    return t;
}

static inline std::uint64_t timeline_handle_to_u64(TimelineEventHandle_t h) { return (std::uint64_t)h; }
static inline TimelineEventHandle_t timeline_handle_from_u64(std::uint64_t v) { return (TimelineEventHandle_t)v; }
static inline std::uint64_t call_to_u64(SteamAPICall_t c) { return (std::uint64_t)c; }

static std::mutex g_callbacks_mtx;

static GMFunction g_cb_phase_recording_exists = nullptr;
static GMFunction g_cb_event_recording_exists = nullptr;

static inline SteamTimelineGamePhaseRecordingExists fromNative(const SteamTimelineGamePhaseRecordingExists_t& e)
{
    SteamTimelineGamePhaseRecordingExists out{};
    out.phase_id = e.m_rgchPhaseID;
    out.recording_ms = (std::uint64_t)e.m_ulRecordingMS;
    out.longest_clip_ms = (std::uint64_t)e.m_ulLongestClipMS;
    out.clip_count = (std::uint32_t)e.m_unClipCount;
    out.screenshot_count = (std::uint32_t)e.m_unScreenshotCount;
    return out;
}

static inline SteamTimelineEventRecordingExists fromNative(const SteamTimelineEventRecordingExists_t& e)
{
    SteamTimelineEventRecordingExists out{};
    out.event_id = (std::uint64_t)e.m_ulEventID;
    out.recording_exists = (e.m_bRecordingExists != 0);
    return out;
}

class SteamTimeline_Callbacks
{
public:
    STEAM_CALLBACK(SteamTimeline_Callbacks, OnPhaseRecordingExists, SteamTimelineGamePhaseRecordingExists_t);
    STEAM_CALLBACK(SteamTimeline_Callbacks, OnEventRecordingExists, SteamTimelineEventRecordingExists_t);
};

void SteamTimeline_Callbacks::OnPhaseRecordingExists(SteamTimelineGamePhaseRecordingExists_t* p)
{
    if (!p) return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_phase_recording_exists;
    }
    if (cb)
        cb.call(fromNative(*p));
}

void SteamTimeline_Callbacks::OnEventRecordingExists(SteamTimelineEventRecordingExists_t* p)
{
    if (!p) return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_event_recording_exists;
    }
    if (cb)
        cb.call(fromNative(*p));
}

static SteamTimeline_Callbacks g_timeline_callbacks;

void steam_timeline_set_callback_game_phase_recording_exists(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_phase_recording_exists = callback;
}

void steam_timeline_clear_callback_game_phase_recording_exists()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_phase_recording_exists = nullptr;
}

void steam_timeline_set_callback_event_recording_exists(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_event_recording_exists = callback;
}

void steam_timeline_clear_callback_event_recording_exists()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_event_recording_exists = nullptr;
}

void steam_timeline_set_timeline_tooltip(std::string_view description, float time_delta_seconds)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    std::string s(description);
    t->SetTimelineTooltip(s.c_str(), time_delta_seconds);
}

void steam_timeline_clear_timeline_tooltip(float time_delta_seconds)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    t->ClearTimelineTooltip(time_delta_seconds);
}

std::uint64_t steam_timeline_add_instantaneous_timeline_event(
    std::string_view title,
    std::string_view description,
    std::string_view icon,
    std::uint32_t priority,
    float start_offset_seconds,
    gm_enums::SteamTimelineEventClipPriority possible_clip)
{
    STEAM_GUARD_RET(0);
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return 0;

    std::string a(title), b(description), c(icon);
    TimelineEventHandle_t h = t->AddInstantaneousTimelineEvent(
        a.c_str(), b.c_str(), c.c_str(),
        (uint32)priority,
        start_offset_seconds,
        (ETimelineEventClipPriority)(int)possible_clip
    );
    return timeline_handle_to_u64(h);
}

std::uint64_t steam_timeline_add_range_timeline_event(
    std::string_view title,
    std::string_view description,
    std::string_view icon,
    std::uint32_t priority,
    float start_offset_seconds,
    float duration_seconds,
    gm_enums::SteamTimelineEventClipPriority possible_clip)
{
    STEAM_GUARD_RET(0);
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return 0;

    std::string a(title), b(description), c(icon);
    TimelineEventHandle_t h = t->AddRangeTimelineEvent(
        a.c_str(), b.c_str(), c.c_str(),
        (uint32)priority,
        start_offset_seconds,
        duration_seconds,
        (ETimelineEventClipPriority)(int)possible_clip
    );
    return timeline_handle_to_u64(h);
}

std::uint64_t steam_timeline_start_range_timeline_event(
    std::string_view title,
    std::string_view description,
    std::string_view icon,
    std::uint32_t priority,
    float start_offset_seconds,
    gm_enums::SteamTimelineEventClipPriority possible_clip)
{
    STEAM_GUARD_RET(0);
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return 0;

    std::string a(title), b(description), c(icon);
    TimelineEventHandle_t h = t->StartRangeTimelineEvent(
        a.c_str(), b.c_str(), c.c_str(),
        (uint32)priority,
        start_offset_seconds,
        (ETimelineEventClipPriority)(int)possible_clip
    );
    return timeline_handle_to_u64(h);
}

void steam_timeline_update_range_timeline_event(
    std::uint64_t event_handle,
    std::string_view title,
    std::string_view description,
    std::string_view icon,
    std::uint32_t priority,
    gm_enums::SteamTimelineEventClipPriority possible_clip)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    std::string a(title), b(description), c(icon);
    t->UpdateRangeTimelineEvent(
        timeline_handle_from_u64(event_handle),
        a.c_str(), b.c_str(), c.c_str(),
        (uint32)priority,
        (ETimelineEventClipPriority)(int)possible_clip
    );
}

void steam_timeline_end_range_timeline_event(std::uint64_t event_handle, float end_offset_seconds)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    t->EndRangeTimelineEvent(timeline_handle_from_u64(event_handle), end_offset_seconds);
}

void steam_timeline_remove_timeline_event(std::uint64_t event_handle)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    t->RemoveTimelineEvent(timeline_handle_from_u64(event_handle));
}

std::uint64_t steam_timeline_does_event_recording_exist(std::uint64_t event_handle)
{
    STEAM_GUARD_RET(0);
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return 0;

    return call_to_u64(t->DoesEventRecordingExist(timeline_handle_from_u64(event_handle)));
}

void steam_timeline_start_game_phase()
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    t->StartGamePhase();
}

void steam_timeline_end_game_phase()
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    t->EndGamePhase();
}

void steam_timeline_set_game_phase_id(std::string_view phase_id)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    std::string s(phase_id);
    t->SetGamePhaseID(s.c_str());
}

std::uint64_t steam_timeline_does_game_phase_recording_exist(std::string_view phase_id)
{
    STEAM_GUARD_RET(0);
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return 0;

    std::string s(phase_id);
    return call_to_u64(t->DoesGamePhaseRecordingExist(s.c_str()));
}

void steam_timeline_add_game_phase_tag(std::string_view tag_name, std::string_view tag_icon, std::string_view tag_group, std::uint32_t priority)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    std::string a(tag_name), b(tag_icon), c(tag_group);
    t->AddGamePhaseTag(a.c_str(), b.c_str(), c.c_str(), (uint32)priority);
}

void steam_timeline_set_game_phase_attribute(std::string_view attribute_group, std::string_view attribute_value, std::uint32_t priority)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    std::string a(attribute_group), b(attribute_value);
    t->SetGamePhaseAttribute(a.c_str(), b.c_str(), (uint32)priority);
}

void steam_timeline_set_timeline_game_mode(gm_enums::SteamTimelineGameMode mode)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    t->SetTimelineGameMode((ETimelineGameMode)(int)mode);
}

void steam_timeline_open_overlay_to_game_phase(std::string_view phase_id)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    std::string s(phase_id);
    t->OpenOverlayToGamePhase(s.c_str());
}

void steam_timeline_open_overlay_to_timeline_event(std::uint64_t event_handle)
{
    STEAM_GUARD();
    ISteamTimeline* t = steam_timeline_iface();
    if (!t) return;

    t->OpenOverlayToTimelineEvent(timeline_handle_from_u64(event_handle));
}
