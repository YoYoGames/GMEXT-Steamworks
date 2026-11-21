// gm_steam_screenshots.cpp
//
// Steamworks module: screenshots (ISteamScreenshots)


#include "GMSteamworks.h"

#include <steam/steam_api.h>
#include <steam/isteamscreenshots.h>

#include <climits>
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
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_screenshot_ready = callback;
}

void steam_screenshots_set_callback_screenshot_requested(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_screenshot_requested = callback;
}

void steam_screenshots_clear_callback_screenshot_ready()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_screenshot_ready = nullptr;
}

void steam_screenshots_clear_callback_screenshot_requested()
{
    steam_clear_last_error();
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

std::uint32_t steam_screenshots_add_screenshot_to_library(std::string_view filename, std::string_view thumbnail_filename, std::int32_t width, std::int32_t height
)
{
    STEAM_GUARD_RET(0);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return 0;

    std::string fn(filename);
    if (fn.empty()) {
        steam_set_last_error("AddScreenshotToLibrary: filename is required.");
        return 0;
    }

    if (width <= 0 || height <= 0) {
        steam_set_last_error("AddScreenshotToLibrary: width and height must be > 0.");
        return 0;
    }

    std::string thumbTmp;
    const char* thumb = steam_opt_cstr_or_null(thumbnail_filename, thumbTmp);

    return (std::uint32_t)ss->AddScreenshotToLibrary(fn.c_str(), thumb, (int)width, (int)height);
}

std::uint32_t steam_screenshots_add_vr_screenshot_to_library(
    gm_enums::SteamScreenshotsVrScreenshotType type, std::string_view filename, std::string_view vr_filename
)
{
    STEAM_GUARD_RET(0);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return 0;

    std::string fn(filename);
    std::string vr(vr_filename);

    if (fn.empty() || vr.empty()) {
        steam_set_last_error("AddVRScreenshotToLibrary: filename and vr_filename are required.");
        return 0;
    }

    return (std::uint32_t)ss->AddVRScreenshotToLibrary((EVRScreenshotType)(int)type, fn.c_str(), vr.c_str());
}

void steam_screenshots_hook_screenshots(bool hook)
{
    STEAM_GUARD();
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return;

    ss->HookScreenshots(hook);
}

bool steam_screenshots_is_screenshots_hooked()
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    return ss->IsScreenshotsHooked();
}

bool steam_screenshots_set_location(std::uint32_t screenshot, std::string_view location)
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    if (screenshot == 0) {
        steam_set_last_error("SetLocation: invalid screenshot handle (0).");
        return false;
    }

    std::string loc(location);
    if (loc.empty()) {
        steam_set_last_error("SetLocation: location string is required.");
        return false;
    }

    return ss->SetLocation((ScreenshotHandle)screenshot, loc.c_str());
}

bool steam_screenshots_tag_published_file(std::uint32_t screenshot, std::uint64_t published_file_id)
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    if (screenshot == 0) {
        steam_set_last_error("TagPublishedFile: invalid screenshot handle (0).");
        return false;
    }

    return ss->TagPublishedFile((ScreenshotHandle)screenshot, (PublishedFileId_t)published_file_id);
}

bool steam_screenshots_tag_user(std::uint32_t screenshot, std::uint64_t steam_id)
{
    STEAM_GUARD_RET(false);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return false;

    if (screenshot == 0) {
        steam_set_last_error("TagUser: invalid screenshot handle (0).");
        return false;
    }

    return ss->TagUser((ScreenshotHandle)screenshot, steam_id_from_u64(steam_id));
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
    gm::wire::GMBuffer buff_rgb, std::int32_t width, std::int32_t height, std::optional<std::uint32_t> buffer_offset, std::optional<std::uint32_t> buffer_count
)
{
    STEAM_GUARD_RET(0);
    ISteamScreenshots* ss = steam_screenshots_iface();
    if (!ss)
        return 0;

    std::uint32_t offset = buffer_offset.value_or(0);

    if (static_cast<std::uint64_t>(offset) >= buff_rgb.length()) {
        steam_set_last_error("WriteScreenshot: buffer_offset exceeds buffer length.");
        return 0;
    }

    std::uint32_t actual_count;
    if (buffer_offset.has_value() && !buffer_count.has_value()) {
        // If offset was explicitly provided but count wasn't, default to remaining
        std::uint64_t remaining = buff_rgb.length() - static_cast<std::uint64_t>(offset);
        actual_count = static_cast<std::uint32_t>(std::min(remaining, static_cast<std::uint64_t>(INT_MAX)));
    } else if (buffer_count.has_value()) {
        actual_count = buffer_count.value();
    } else {
        // Both not provided, use entire buffer
        actual_count = static_cast<std::uint32_t>(std::min(buff_rgb.length(), static_cast<std::uint64_t>(INT_MAX)));
    }

    if (actual_count == 0) {
        steam_set_last_error("WriteScreenshot: buffer_count must be > 0.");
        return 0;
    }

    if (width <= 0 || height <= 0) {
        steam_set_last_error("WriteScreenshot: width and height must be > 0.");
        return 0;
    }

    if ((std::uint64_t)offset + (std::uint64_t)actual_count > (std::uint64_t)buff_rgb.length()) {
        steam_set_last_error("WriteScreenshot: buffer_offset + buffer_count exceeds buffer length.");
        return 0;
    }

    if ((std::uint64_t)actual_count != (std::uint64_t)width * (std::uint64_t)height * 3) {
        steam_set_last_error("WriteScreenshot: buffer_count does not match width * height * 3 (RGB data).");
        return 0;
    }

    auto reader = buff_rgb.getReader();
    reader.skip((size_t)offset);
    const void* rgb_data = reader.data();

    // Safe to cast away const: WriteScreenshot copies data synchronously, doesn't retain pointer
    return (std::uint32_t)ss->WriteScreenshot(const_cast<void*>(rgb_data), (uint32)actual_count, (int)width, (int)height);
}

