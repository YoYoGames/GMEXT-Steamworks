// gm_steam_music.cpp
//
// Steamworks module: music (ISteamMusic)
// Naming: steam_music_*
//
// Includes callbacks because that's the main utility of ISteamMusic.

#include "GMSteamworks.h"

#include <steam/steam_api.h>
#include <steam/isteammusic.h>

#include <cstdint>
#include <mutex>

using namespace gm::wire;
using namespace gm_structs;

static inline ISteamMusic* steam_music_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Music: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamMusic* m = SteamMusic();
    if (!m)
        steam_set_last_error("Steam Music: SteamMusic() returned NULL.");

    return m;
}

static std::mutex g_callbacks_mtx;

static GMFunction g_cb_playback_status_changed = nullptr;
static GMFunction g_cb_volume_changed = nullptr;

static inline SteamMusicPlaybackStatusHasChanged fromNative(const PlaybackStatusHasChanged_t& e)
{
    SteamMusicPlaybackStatusHasChanged out {};
    return out;
}

static inline SteamMusicVolumeHasChanged fromNative(const VolumeHasChanged_t& e)
{
    SteamMusicVolumeHasChanged out {};
    out.volume = e.m_flNewVolume;
    return out;
}

class SteamMusic_Callbacks {
public:
    STEAM_CALLBACK(SteamMusic_Callbacks, OnPlaybackStatusHasChanged, PlaybackStatusHasChanged_t);
    STEAM_CALLBACK(SteamMusic_Callbacks, OnVolumeHasChanged, VolumeHasChanged_t);
};

void SteamMusic_Callbacks::OnPlaybackStatusHasChanged(PlaybackStatusHasChanged_t* p)
{
    if (!p)
        return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_playback_status_changed;
    }
    if (cb)
        cb.call(fromNative(*p));
}

void SteamMusic_Callbacks::OnVolumeHasChanged(VolumeHasChanged_t* p)
{
    if (!p)
        return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_volume_changed;
    }
    if (cb)
        cb.call(fromNative(*p));
}

static SteamMusic_Callbacks g_music_callbacks;

void steam_music_set_callback_playback_status_has_changed(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_playback_status_changed = callback;
}

void steam_music_clear_callback_playback_status_has_changed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_playback_status_changed = nullptr;
}

void steam_music_set_callback_volume_has_changed(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_volume_changed = callback;
}

void steam_music_clear_callback_volume_has_changed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_volume_changed = nullptr;
}

// ------------------------------------------------------------
// ISteamMusic functions (page order)
// ------------------------------------------------------------

bool steam_music_is_enabled()
{
    STEAM_GUARD_RET(false);
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return false;

    return m->BIsEnabled();
}

bool steam_music_is_playing()
{
    STEAM_GUARD_RET(false);
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return false;

    return m->BIsPlaying();
}

gm_enums::SteamMusicPlaybackStatus steam_music_get_playback_status()
{
    STEAM_GUARD_RET(gm_enums::SteamMusicPlaybackStatus::Undefined);

    ISteamMusic* m = steam_music_iface();
    if (!m)
        return gm_enums::SteamMusicPlaybackStatus::Undefined;

    return (gm_enums::SteamMusicPlaybackStatus)(int)m->GetPlaybackStatus();
}


void steam_music_play()
{
    STEAM_GUARD();
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return;

    m->Play();
}

void steam_music_pause()
{
    STEAM_GUARD();
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return;

    m->Pause();
}

void steam_music_play_previous()
{
    STEAM_GUARD();
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return;

    m->PlayPrevious();
}

void steam_music_play_next()
{
    STEAM_GUARD();
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return;

    m->PlayNext();
}

void steam_music_set_volume(float volume)
{
    STEAM_GUARD();
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return;

    // Steam expects 0..1. Clamp for safety.
    if (volume < 0.0f)
        volume = 0.0f;
    if (volume > 1.0f)
        volume = 1.0f;

    m->SetVolume(volume);
}

float steam_music_get_volume()
{
    STEAM_GUARD_RET(0.0f);
    ISteamMusic* m = steam_music_iface();
    if (!m)
        return 0.0f;

    return m->GetVolume();
}
