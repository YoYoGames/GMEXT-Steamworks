// gm_steam_utils.cpp
//
// Steamworks module: utils (ISteamUtils)


#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteamutils.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <algorithm>
#include <mutex>

using namespace gm::wire;
using namespace gm_structs;
using namespace gm_enums;

static inline ISteamUtils* steam_utils_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Utils: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamUtils* u = SteamUtils();
    if (!u)
        steam_set_last_error("Steam Utils: SteamUtils() returned NULL.");

    return u;
}


static std::mutex g_callbacks_mtx;

static GMFunction g_cb_gamepad_text_input_dismissed = nullptr;
static GMFunction g_cb_floating_gamepad_text_input_dismissed = nullptr;
static GMFunction g_cb_warning_message = nullptr;

static inline SteamUtilsGamepadTextInputDismissed fromNative(const GamepadTextInputDismissed_t& e)
{
    SteamUtilsGamepadTextInputDismissed out {};
    out.submitted = (e.m_bSubmitted != 0);
    out.submitted_text_length = (std::uint32_t)e.m_unSubmittedText;
    return out;
}

static inline SteamUtilsFloatingGamepadTextInputDismissed fromNative(const FloatingGamepadTextInputDismissed_t&)
{
    SteamUtilsFloatingGamepadTextInputDismissed out {};
    out.submitted = true;
    return out;
}

static inline SteamUtilsWarningMessage fromNativeWarning(int severity, const char* text)
{
    SteamUtilsWarningMessage out {};
    out.severity = severity;
    out.text = text ? std::string(text) : std::string();
    return out;
}

static void SteamUtils_WarningHook(int nSeverity, const char* pchDebugText)
{
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_warning_message;
    }
    if (cb)
        cb.call(fromNativeWarning(nSeverity, pchDebugText));
}

class SteamUtils_Callbacks {
public:
    STEAM_CALLBACK(SteamUtils_Callbacks, OnGamepadTextInputDismissed, GamepadTextInputDismissed_t);
    STEAM_CALLBACK(SteamUtils_Callbacks, OnFloatingGamepadTextInputDismissed, FloatingGamepadTextInputDismissed_t);
};

void SteamUtils_Callbacks::OnGamepadTextInputDismissed(GamepadTextInputDismissed_t* p)
{
    if (!p)
        return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_gamepad_text_input_dismissed;
    }
    if (cb)
        cb.call(fromNative(*p));
}

void SteamUtils_Callbacks::OnFloatingGamepadTextInputDismissed(FloatingGamepadTextInputDismissed_t* p)
{
    if (!p)
        return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_floating_gamepad_text_input_dismissed;
    }
    if (cb)
        cb.call(fromNative(*p));
}

static SteamUtils_Callbacks g_utils_callbacks;

bool steam_utils_overlay_needs_present()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->BOverlayNeedsPresent();
}

static inline gm_structs::SteamUtilsCheckFileSignatureResult utils_fromNative(const CheckFileSignature_t& e)
{
    gm_structs::SteamUtilsCheckFileSignatureResult out{};
    out.result = (int32)e.m_eCheckFileSignature;
    return out;
}

void steam_utils_check_file_signature(std::string_view sz_file_name,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    std::string fn(sz_file_name);
    SteamAPICall_t call = u->CheckFileSignature(fn.c_str());

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUtilsCheckFileSignatureResult, CheckFileSignature_t>(callback.value(), &utils_fromNative);
        h->set(call);
    }
}

SteamUtilsApiCallFailure steam_utils_get_api_call_failure_reason(std::uint64_t steam_api_call)
{
    STEAM_GUARD_RET(SteamUtilsApiCallFailure::InvalidHandle);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return SteamUtilsApiCallFailure::InvalidHandle;

    ESteamAPICallFailure r = u->GetAPICallFailureReason((SteamAPICall_t)steam_api_call);
    return (SteamUtilsApiCallFailure)(int)r;
}

std::uint32_t steam_utils_get_app_id()
{
    STEAM_GUARD_RET(0);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return 0;

    return (std::uint32_t)u->GetAppID();
}

SteamApiUniverse steam_utils_get_connected_universe()
{
    STEAM_GUARD_RET(SteamApiUniverse::Invalid);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return SteamApiUniverse::Invalid;

    EUniverse e = u->GetConnectedUniverse();
    return (SteamApiUniverse)(int)e;
}

std::uint32_t steam_utils_get_current_battery_power()
{
    STEAM_GUARD_RET(0);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return 0;

    const uint8 v = u->GetCurrentBatteryPower();
    return (std::uint32_t)v;
}

SteamUtilsGamepadTextInput steam_utils_get_entered_gamepad_text_input()
{
    STEAM_GUARD_RET({});

    SteamUtilsGamepadTextInput out {};
    out.ok = false;
    out.text = "";

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return out;

    uint32 cch_text = 1024;
    std::vector<char> buf((size_t)cch_text);
    buf[0] = '\0';

    const bool ok = u->GetEnteredGamepadTextInput(buf.data(), cch_text);
    out.ok = ok;

    if (!ok)
        return out;

    out.text = std::string(buf.data());
    return out;
}

std::uint32_t steam_utils_get_entered_gamepad_text_length()
{
    STEAM_GUARD_RET(0);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return 0;

    return (std::uint32_t)u->GetEnteredGamepadTextLength();
}

bool steam_utils_get_image_rgba(std::int32_t i_image, gm::wire::GMBuffer dest, std::int32_t n_dest_buffer_size)
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    if (n_dest_buffer_size <= 0) {
        steam_set_last_error("GetImageRGBA: n_dest_buffer_size must be > 0.");
        return false;
    }

    std::vector<std::uint8_t> rgba((size_t)n_dest_buffer_size);

    const bool ok = u->GetImageRGBA(i_image, rgba.data(), (int)rgba.size());
    if (!ok)
        return false;

    auto w = dest.getWriter();
    w.writeBytes((const char*)rgba.data(), (int)rgba.size());
    return true;
}

SteamUtilsImageSize steam_utils_get_image_size(std::int32_t i_image)
{
    STEAM_GUARD_RET({});

    SteamUtilsImageSize out {};
    out.ok = false;
    out.width = 0;
    out.height = 0;

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return out;

    uint32 w = 0;
    uint32 h = 0;

    const bool ok = u->GetImageSize(i_image, &w, &h);
    out.ok = ok;
    if (!ok)
        return out;

    out.width = (std::uint32_t)w;
    out.height = (std::uint32_t)h;
    return out;
}

std::uint32_t steam_utils_get_ipc_call_count()
{
    STEAM_GUARD_RET(0);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return 0;

    return (std::uint32_t)u->GetIPCCallCount();
}

std::string steam_utils_get_ip_country()
{
    STEAM_GUARD_RET("");
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return "";

    const char* s = u->GetIPCountry();
    return s ? std::string(s) : std::string();
}

std::uint32_t steam_utils_get_seconds_since_app_active()
{
    STEAM_GUARD_RET(0);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return 0;

    return (std::uint32_t)u->GetSecondsSinceAppActive();
}

std::uint32_t steam_utils_get_seconds_since_computer_active()
{
    STEAM_GUARD_RET(0);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return 0;

    return (std::uint32_t)u->GetSecondsSinceComputerActive();
}

std::uint32_t steam_utils_get_server_real_time()
{
    STEAM_GUARD_RET(0);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return 0;

    return (std::uint32_t)u->GetServerRealTime();
}

std::string steam_utils_get_steam_ui_language()
{
    STEAM_GUARD_RET("");
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return "";

    const char* s = u->GetSteamUILanguage();
    return s ? std::string(s) : std::string();
}

bool steam_utils_is_overlay_enabled()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->IsOverlayEnabled();
}

bool steam_utils_is_steam_in_big_picture_mode()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->IsSteamInBigPictureMode();
}

bool steam_utils_is_steam_running_in_vr()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->IsSteamRunningInVR();
}

bool steam_utils_is_steam_running_on_steam_deck()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->IsSteamRunningOnSteamDeck();
}

bool steam_utils_is_steam_china_launcher()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->IsSteamChinaLauncher();
}

SteamUtilsApiCallCompleted steam_utils_is_api_call_completed(std::uint64_t steam_api_call)
{
    STEAM_GUARD_RET({});

    SteamUtilsApiCallCompleted out {};
    out.ok = false;
    out.failed = false;

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return out;

    bool failed = false;
    const bool ok = u->IsAPICallCompleted((SteamAPICall_t)steam_api_call, &failed);

    out.ok = ok;
    out.failed = failed;
    return out;
}

bool steam_utils_init_filter_text()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->InitFilterText();
}

SteamUtilsFilterTextResult steam_utils_filter_text(
    SteamUtilsTextFilteringContext context,
    std::uint64_t source_steam_id,
    std::string_view input_message
)
{
    STEAM_GUARD_RET({});

    SteamUtilsFilterTextResult out {};
    out.ok = false;
    out.characters_filtered = 0;
    out.filtered_text = "";

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return out;

    uint32 cch_out = 1024;
    std::string msg(input_message);
    std::vector<char> buf((size_t)cch_out);
    buf[0] = '\0';

    int changed = u->FilterText(
        (ETextFilteringContext)(int)context,
        steam_id_from_u64(source_steam_id),
        msg.c_str(),
        buf.data(),
        (uint32)buf.size()
    );

    out.ok = true;
    out.characters_filtered = changed;
    out.filtered_text = std::string(buf.data());
    return out;
}

bool steam_utils_is_vr_headset_streaming_enabled()
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->IsVRHeadsetStreamingEnabled();
}

void steam_utils_set_overlay_notification_inset(std::int32_t n_horizontal_inset, std::int32_t n_vertical_inset)
{
    STEAM_GUARD();
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    u->SetOverlayNotificationInset(n_horizontal_inset, n_vertical_inset);
}

void steam_utils_set_overlay_notification_position(SteamApiNotificationPosition notification_position)
{
    STEAM_GUARD();
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    u->SetOverlayNotificationPosition((ENotificationPosition)(int)notification_position);
}

void steam_utils_set_vr_headset_streaming_enabled(bool b_enabled)
{
    STEAM_GUARD();
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    u->SetVRHeadsetStreamingEnabled(b_enabled);
}

void steam_utils_set_callback_gamepad_text_input_dismissed(const GMFunction& callback)
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_gamepad_text_input_dismissed = callback;
}

void steam_utils_clear_callback_gamepad_text_input_dismissed()
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_gamepad_text_input_dismissed = nullptr;
}

void steam_utils_set_callback_floating_gamepad_text_input_dismissed(const GMFunction& callback)
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_floating_gamepad_text_input_dismissed = callback;
}

void steam_utils_clear_callback_floating_gamepad_text_input_dismissed()
{
    STEAM_GUARD();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_floating_gamepad_text_input_dismissed = nullptr;
}

void steam_utils_set_callback_warning_message(const GMFunction& callback)
{
    STEAM_GUARD();
    bool enable_hook = false;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        g_cb_warning_message = callback;
        enable_hook = (bool)g_cb_warning_message;
    }

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    if (enable_hook)
        u->SetWarningMessageHook(SteamUtils_WarningHook);
    else
        u->SetWarningMessageHook(nullptr);
}

void steam_utils_clear_callback_warning_message()
{
    STEAM_GUARD();
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        g_cb_warning_message = nullptr;
    }

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    u->SetWarningMessageHook(nullptr);
}

bool steam_utils_show_gamepad_text_input(
    SteamUtilsGamepadTextInputMode input_mode,
    SteamUtilsGamepadTextInputLineMode line_mode,
    std::string_view description,
    std::uint32_t char_max,
    std::string_view existing_text
)
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    std::string desc(description);
    std::string exist(existing_text);

    return u->ShowGamepadTextInput(
        (EGamepadTextInputMode)(int)input_mode,
        (EGamepadTextInputLineMode)(int)line_mode,
        desc.c_str(),
        char_max,
        exist.c_str()
    );
}

bool steam_utils_show_floating_gamepad_text_input(
    SteamUtilsFloatingGamepadTextInputMode keyboard_mode,
    std::int32_t text_field_x,
    std::int32_t text_field_y,
    std::int32_t text_field_width,
    std::int32_t text_field_height
)
{
    STEAM_GUARD_RET(false);
    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return false;

    return u->ShowFloatingGamepadTextInput(
        (EFloatingGamepadTextInputMode)(int)keyboard_mode,
        text_field_x,
        text_field_y,
        text_field_width,
        text_field_height
    );
}

gm_structs::SteamUtilsApiCallResult steam_utils_get_api_call_result(
    std::uint64_t steam_api_call, int callback_expected, gm::wire::GMBuffer out_callback, int out_callback_size
)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUtilsApiCallResult out {};
    out.ok = false;
    out.failed = false;

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return out;

    if (out_callback_size <= 0) {
        steam_set_last_error("GetApiCallResult: out_callback_size must be > 0.");
        return out;
    }

    std::vector<std::uint8_t> tmp;
    tmp.resize((size_t)out_callback_size);

    bool failed = false;

    const bool ok
        = u->GetAPICallResult((SteamAPICall_t)steam_api_call, tmp.data(), (int)tmp.size(), callback_expected, &failed);

    out.ok = ok;
    out.failed = failed;

    if (ok) {
        auto w = out_callback.getWriter();
        w.writeBytes((const char*)tmp.data(), (int)tmp.size());
    }
    
    return out;
}

void steam_utils_dismiss_floating_gamepad_text_input()
{
    STEAM_GUARD();

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    u->DismissFloatingGamepadTextInput();
}

void steam_utils_start_vr_dashboard()
{
    STEAM_GUARD();

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    u->StartVRDashboard();
}

void steam_utils_set_game_launcher_mode(bool b_launcher_mode)
{
    STEAM_GUARD();

    ISteamUtils* u = steam_utils_iface();
    if (!u)
        return;

    u->SetGameLauncherMode(b_launcher_mode);
}

static gm::wire::GMFunction g_cb_ip_country = nullptr;
static gm::wire::GMFunction g_cb_low_battery_power = nullptr;
static gm::wire::GMFunction g_cb_steam_api_call_completed = nullptr;
static gm::wire::GMFunction g_cb_app_resuming_from_suspend = nullptr;
static gm::wire::GMFunction g_cb_steam_shutdown = nullptr;

static inline gm_structs::SteamUtilsLowBatteryPower utils_fromNative(const LowBatteryPower_t& e)
{
    gm_structs::SteamUtilsLowBatteryPower out{};
    out.minutes_battery_left = (std::uint32_t)e.m_nMinutesBatteryLeft;
    return out;
}

static inline gm_structs::SteamUtilsSteamApiCallCompleted utils_fromNative(const SteamAPICallCompleted_t& e)
{
    gm_structs::SteamUtilsSteamApiCallCompleted out{};
    out.async_call = (std::uint64_t)e.m_hAsyncCall;
    out.callback_id = (std::int32_t)e.m_iCallback;
    out.param_size = (std::uint32_t)e.m_cubParam;
    return out;
}

class SteamUtils_PersistentCallbacks
{
public:
    STEAM_CALLBACK(SteamUtils_PersistentCallbacks, OnIPCountry, IPCountry_t);
    STEAM_CALLBACK(SteamUtils_PersistentCallbacks, OnLowBatteryPower, LowBatteryPower_t);
    STEAM_CALLBACK(SteamUtils_PersistentCallbacks, OnSteamAPICallCompleted, SteamAPICallCompleted_t);
    STEAM_CALLBACK(SteamUtils_PersistentCallbacks, OnAppResumingFromSuspend, AppResumingFromSuspend_t);
    STEAM_CALLBACK(SteamUtils_PersistentCallbacks, OnSteamShutdown, SteamShutdown_t);
};

void SteamUtils_PersistentCallbacks::OnIPCountry(IPCountry_t* p)
{
    (void)p; // no fields
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_ip_country;
    }
    if (cb)
        cb.call(); // no payload in spec
}

void SteamUtils_PersistentCallbacks::OnLowBatteryPower(LowBatteryPower_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_low_battery_power;
    }
    if (cb)
        cb.call(utils_fromNative(*p));
}

void SteamUtils_PersistentCallbacks::OnSteamAPICallCompleted(SteamAPICallCompleted_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_steam_api_call_completed;
    }
    if (cb)
        cb.call(utils_fromNative(*p));
}

void SteamUtils_PersistentCallbacks::OnAppResumingFromSuspend(AppResumingFromSuspend_t* p)
{
    (void)p; // no fields
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_app_resuming_from_suspend;
    }
    if (cb)
        cb.call(); // no payload in spec
}

void SteamUtils_PersistentCallbacks::OnSteamShutdown(SteamShutdown_t* p)
{
    (void)p; // no fields
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_steam_shutdown;
    }
    if (cb)
        cb.call(); // no payload in spec
}

static SteamUtils_PersistentCallbacks g_steamutils_persistent_callbacks;

void steam_utils_set_callback_ip_country( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_ip_country = callback;
}

void steam_utils_clear_callback_ip_country()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_ip_country = nullptr;
}

void steam_utils_set_callback_low_battery_power( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_low_battery_power = callback;
}

void steam_utils_clear_callback_low_battery_power()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_low_battery_power = nullptr;
}

void steam_utils_set_callback_steam_api_call_completed( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_steam_api_call_completed = callback;
}

void steam_utils_clear_callback_steam_api_call_completed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_steam_api_call_completed = nullptr;
}

void steam_utils_set_callback_app_resuming_from_suspend( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_app_resuming_from_suspend = callback;
}

void steam_utils_clear_callback_app_resuming_from_suspend()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_app_resuming_from_suspend = nullptr;
}

void steam_utils_set_callback_steam_shutdown( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_steam_shutdown = callback;
}

void steam_utils_clear_callback_steam_shutdown()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_steam_shutdown = nullptr;
}
