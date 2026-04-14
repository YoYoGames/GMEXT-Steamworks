// gm_steam_screenshots.cpp
//
// Steamworks module: screenshots (ISteamScreenshots)


#include "GMSteamworks.h"

#include <steam/steam_api.h>
#include <steam/isteamscreenshots.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <mutex>

using namespace gm::wire;
using namespace gm_enums;

static std::mutex g_callbacks_mtx;

static GMFunction g_cb_screenshot_ready = nullptr;
static GMFunction g_cb_screenshot_requested = nullptr;

static inline gm_structs::SteamScreenshotsScreenshotReady fromNative(const ScreenshotReady_t& e)
{
    gm_structs::SteamScreenshotsScreenshotReady out {};
    out.screenshot_handle = (std::uint32_t)e.m_hLocal;
    out.result = (gm_enums::SteamApiResult)(int)e.m_eResult;
    return out;
}

class SteamScreenshots_Callbacks {
public:
    STEAM_CALLBACK(SteamScreenshots_Callbacks, OnScreenshotReady, ScreenshotReady_t);
    STEAM_CALLBACK(SteamScreenshots_Callbacks, OnScreenshotRequested, ScreenshotRequested_t);
};

void SteamScreenshots_Callbacks::OnScreenshotReady(ScreenshotReady_t* p)
{
    if (!p)
        return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_screenshot_ready;
    }
    if (cb)
        cb.call(fromNative(*p));
}

void SteamScreenshots_Callbacks::OnScreenshotRequested(ScreenshotRequested_t* p)
{
    (void)p;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_screenshot_requested;
    }
    if (cb)
        cb.call();
}

static SteamScreenshots_Callbacks g_screenshots_callbacks;

void steam_screenshots_set_callback_screenshot_ready(const GMFunction& callback)
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_screenshot_ready = callback;
}

void steam_screenshots_set_callback_screenshot_requested(const GMFunction& callback)
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_screenshot_requested = callback;
}

void steam_screenshots_clear_callback_screenshot_ready()
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_screenshot_ready = nullptr;
}

void steam_screenshots_clear_callback_screenshot_requested()
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_screenshot_requested = nullptr;
}

static inline ISteamScreenshots* steam_screenshots_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Screenshots: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamScreenshots* s = SteamScreenshots();
    if (!s)
        steam_set_last_error("Steam Screenshots: SteamScreenshots() returned NULL.");

    return s;
}

static inline const char* steam_opt_cstr_or_null(std::string_view s, std::string& tmp_storage)
{
    if (s.empty())
        return nullptr;
    tmp_storage.assign(s.data(), s.size());
    return tmp_storage.c_str();
}

std::uint32_t steam_screenshots_add_screenshot_to_library(std::string_view pchFilename, std::string_view pchThumbnailFilename, std::int32_t nWidth, std::int32_t nHeight
)
{
    STEAM_GUARD_RET(0);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return 0;

    std::string fn(pchFilename);
    if (fn.empty()) {
        steam_set_last_error("AddScreenshotToLibrary: pchFilename is required.");
        return 0;
    }

    std::string thumbTmp;
    const char* thumb = steam_opt_cstr_or_null(pchThumbnailFilename, thumbTmp);

    return (std::uint32_t)ss->AddScreenshotToLibrary(fn.c_str(), thumb, (int)nWidth, (int)nHeight);
}

std::uint32_t steam_screenshots_add_vr_screenshot_to_library(
    gm_enums::SteamScreenshotsVrScreenshotType eType, std::string_view pchFilename, std::string_view pchVRFilename
)
{
    STEAM_GUARD_RET(0);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return 0;

    std::string fn(pchFilename);
    std::string vr(pchVRFilename);

    if (fn.empty() || vr.empty()) {
        steam_set_last_error("AddVRScreenshotToLibrary: pchFilename and pchVRFilename are required.");
        return 0;
    }

    return (std::uint32_t)ss->AddVRScreenshotToLibrary((EVRScreenshotType)(int)eType, fn.c_str(), vr.c_str());
}

void steam_screenshots_hook_screenshots(bool bHook)
{
    STEAM_GUARD();
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return;

    ss->HookScreenshots(bHook);
}

bool steam_screenshots_is_screenshots_hooked()
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    return ss->IsScreenshotsHooked();
}

bool steam_screenshots_set_location(std::uint32_t hScreenshot, std::string_view pchLocation)
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    if (hScreenshot == 0) {
        steam_set_last_error("SetLocation: invalid screenshot handle (0).");
        return false;
    }

    std::string loc(pchLocation);
    if (loc.empty()) {
        steam_set_last_error("SetLocation: location string is required.");
        return false;
    }

    return ss->SetLocation((ScreenshotHandle)hScreenshot, loc.c_str());
}

bool steam_screenshots_tag_published_file(std::uint32_t hScreenshot, std::uint64_t unPublishedFileID)
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    if (hScreenshot == 0) {
        steam_set_last_error("TagPublishedFile: invalid screenshot handle (0).");
        return false;
    }

    return ss->TagPublishedFile((ScreenshotHandle)hScreenshot, (PublishedFileId_t)unPublishedFileID);
}

bool steam_screenshots_tag_user(std::uint32_t hScreenshot, std::uint64_t steamID)
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    if (hScreenshot == 0) {
        steam_set_last_error("TagUser: invalid screenshot handle (0).");
        return false;
    }

    return ss->TagUser((ScreenshotHandle)hScreenshot, steam_id_from_u64(steamID));
}

void steam_screenshots_trigger_screenshot()
{
    STEAM_GUARD();
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return;

    ss->TriggerScreenshot();
}

std::uint32_t steam_screenshots_write_screenshot(
    gm::wire::GMBuffer pubRGB, std::uint32_t cubRGB, std::int32_t nWidth, std::int32_t nHeight
)
{
    STEAM_GUARD_RET(0);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return 0;

    if (cubRGB == 0) {
        steam_set_last_error("WriteScreenshot: cubRGB must be > 0.");
        return 0;
    }

    std::vector<std::uint8_t> rgb;
    rgb.resize((size_t)cubRGB);

    auto reader = pubRGB.getReader();
    reader.readBytes((char*)rgb.data(), (int)cubRGB);

    // NOTE: Steam expects raw RGB data (no alpha) in a specific packing (typically 24-bit RGB).
    // Ensure your GML side writes the correct format and byte order.
    return (std::uint32_t)ss->WriteScreenshot(rgb.data(), (uint32)cubRGB, (int)nWidth, (int)nHeight);
}
