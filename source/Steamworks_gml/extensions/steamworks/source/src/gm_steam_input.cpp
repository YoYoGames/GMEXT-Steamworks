// gm_steam_input.cpp
//
// Steamworks module: input (ISteamInput)

#include "GMSteamworks.h"
#include <unordered_set>
#include <unordered_map>

#include <algorithm>
#include <cstdint>
#include <string_view>
#include <vector>
#include <utility>
#include <mutex>

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_input_device_connected = nullptr;
static gm::wire::GMFunction g_cb_input_device_disconnected = nullptr;

// Internal state for diffing connected controller list
static std::vector<InputHandle_t> g_prev_connected;

static gm::wire::GMFunction g_cb_input_action_set_changed = nullptr;
static gm::wire::GMFunction g_cb_input_controller_battery = nullptr;

static std::unordered_map<InputHandle_t, InputActionSetHandle_t> g_prev_action_set;

static std::unordered_map<InputHandle_t, int32_t> g_prev_battery;

void steam_input_set_callback_device_connected( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_device_connected = callback;
}

void steam_input_clear_callback_device_connected()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_device_connected = nullptr;
}

void steam_input_set_callback_device_disconnected( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_device_disconnected = callback;
}

void steam_input_clear_callback_device_disconnected()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_device_disconnected = nullptr;
}

void steam_input_set_callback_action_set_changed( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_action_set_changed = callback;
}

void steam_input_clear_callback_action_set_changed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_action_set_changed = nullptr;
    g_prev_action_set.clear();
}

void steam_input_set_callback_controller_battery( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_controller_battery = callback;
}

void steam_input_clear_callback_controller_battery()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_input_controller_battery = nullptr;
    g_prev_battery.clear();
}

static inline int32_t steam_input_get_battery_percent_best_effort(InputHandle_t /*h*/)
{
    return -1;
}

static inline ISteamInput* steam_input_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Input: Steam API not initialized");
        return nullptr;
    }
    ISteamInput* s = SteamInput();
    if (!s) {
        steam_set_last_error("Steam Input: SteamInput() returned null");
        return nullptr;
    }
    return s;
}

static inline std::uint32_t clamp_u32(std::uint32_t v, std::uint32_t lo, std::uint32_t hi)
{
    return (v < lo) ? lo : (v > hi) ? hi : v;
}

void steam_input_activate_action_set(std::uint64_t input_handle, std::uint64_t action_set_handle)
{
    STEAM_GUARD();
    ISteamInput* s = steam_input_iface();
    if (!s)
        return;
    s->ActivateActionSet((InputHandle_t)input_handle, (InputActionSetHandle_t)action_set_handle);
}

void steam_input_activate_action_set_layer(std::uint64_t input_handle, std::uint64_t action_set_layer_handle)
{
    STEAM_GUARD();
    ISteamInput* s = steam_input_iface();
    if (!s)
        return;
    s->ActivateActionSetLayer((InputHandle_t)input_handle, (InputActionSetHandle_t)action_set_layer_handle);
}

void steam_input_deactivate_action_set_layer(std::uint64_t input_handle, std::uint64_t action_set_layer_handle)
{
    STEAM_GUARD();
    ISteamInput* s = steam_input_iface();
    if (!s)
        return;
    s->DeactivateActionSetLayer((InputHandle_t)input_handle, (InputActionSetHandle_t)action_set_layer_handle);
}

void steam_input_deactivate_all_action_set_layers(std::uint64_t input_handle)
{
    STEAM_GUARD();
    ISteamInput* s = steam_input_iface();
    if (!s)
        return;
    s->DeactivateAllActionSetLayers((InputHandle_t)input_handle);
}

gm_structs::SteamInputActiveActionSetLayers steam_input_get_active_action_set_layers(std::uint64_t input_handle)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamInputActiveActionSetLayers out {};
    out.count = 0;
    out.handles = {};

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    InputActionSetHandle_t native[STEAM_INPUT_MAX_ACTIVE_LAYERS] {};
    int n = s->GetActiveActionSetLayers((InputHandle_t)input_handle, native);
    n = std::max(0, std::min(n, (int)STEAM_INPUT_MAX_ACTIVE_LAYERS));

    std::vector<std::uint64_t> v;
    v.reserve((size_t)n);
    for (int i = 0; i < n; ++i)
        v.push_back((std::uint64_t)native[i]);

    out.count = (std::int32_t)n;
    out.handles = std::move(v);
    return out;
}

std::uint64_t steam_input_get_action_set_handle(std::string_view pszActionSetName)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;
    return (std::uint64_t)s->GetActionSetHandle(std::string(pszActionSetName).c_str());
}

gm_structs::SteamInputAnalogActionData
steam_input_get_analog_action_data(std::uint64_t input_handle, std::uint64_t analog_action_handle)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamInputAnalogActionData out {};
    out.mode = 0;
    out.x = 0.0f;
    out.y = 0.0f;
    out.active = false;

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    InputAnalogActionData_t d
        = s->GetAnalogActionData((InputHandle_t)input_handle, (InputAnalogActionHandle_t)analog_action_handle);
    out.mode = (std::int32_t)d.eMode;
    out.x = d.x;
    out.y = d.y;
    out.active = d.bActive;
    return out;
}

std::uint64_t steam_input_get_analog_action_handle(std::string_view pszActionName)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;
    return (std::uint64_t)s->GetAnalogActionHandle(std::string(pszActionName).c_str());
}

gm_structs::SteamInputActionOrigins steam_input_get_analog_action_origins(
    std::uint64_t input_handle, std::uint64_t action_set_handle, std::uint64_t analog_action_handle
)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamInputActionOrigins out {};
    out.count = 0;
    out.origins = {};

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    EInputActionOrigin native[STEAM_INPUT_MAX_ORIGINS] {};
    int n = s->GetAnalogActionOrigins(
        (InputHandle_t)input_handle,
        (InputActionSetHandle_t)action_set_handle,
        (InputAnalogActionHandle_t)analog_action_handle,
        native
    );
    n = std::max(0, std::min(n, (int)STEAM_INPUT_MAX_ORIGINS));

    std::vector<std::int32_t> v;
    v.reserve((size_t)n);
    for (int i = 0; i < n; ++i)
        v.push_back((std::int32_t)native[i]);

    out.count = (std::int32_t)n;
    out.origins = std::move(v);
    return out;
}

std::string steam_input_get_glyph_png_for_action_origin(std::uint32_t origin, std::uint32_t size, std::uint32_t flags)
{
    STEAM_GUARD_RET("");

    ISteamInput* s = steam_input_iface();
    if (!s)
        return "";

    return s->GetGlyphPNGForActionOrigin(
        (EInputActionOrigin)origin,
        (ESteamInputGlyphSize) size,
        flags
    );
}

std::string steam_input_get_glyph_svg_for_action_origin(std::uint32_t origin, std::uint32_t flags)
{
    STEAM_GUARD_RET("");

    ISteamInput* s = steam_input_iface();
    if (!s)
        return "";

    return s->GetGlyphSVGForActionOrigin(
        (EInputActionOrigin)origin,
        flags
    );
}



std::vector<std::uint64_t> steam_input_get_connected_controllers()
{
    std::vector<std::uint64_t> out;

    STEAM_GUARD_RET(out);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    InputHandle_t native[STEAM_INPUT_MAX_COUNT] {};
    int n = s->GetConnectedControllers(native);
    n = std::max(0, std::min(n, (int)STEAM_INPUT_MAX_COUNT));

    out.reserve((size_t)n);
    for (int i = 0; i < n; ++i)
        out.push_back((std::uint64_t)native[i]);

    return out;
}

std::uint64_t steam_input_get_controller_for_gamepad_index(std::int32_t nIndex)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;
    return (std::uint64_t)s->GetControllerForGamepadIndex(nIndex);
}

std::uint64_t steam_input_get_current_action_set(std::uint64_t input_handle)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;
    return (std::uint64_t)s->GetCurrentActionSet((InputHandle_t)input_handle);
}

gm_structs::SteamInputDigitalActionData
steam_input_get_digital_action_data(std::uint64_t input_handle, std::uint64_t digital_action_handle)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamInputDigitalActionData out {};
    out.state = false;
    out.active = false;

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    InputDigitalActionData_t d
        = s->GetDigitalActionData((InputHandle_t)input_handle, (InputDigitalActionHandle_t)digital_action_handle);
    out.state = d.bState;
    out.active = d.bActive;
    return out;
}

std::uint64_t steam_input_get_digital_action_handle(std::string_view pszActionName)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;
    return (std::uint64_t)s->GetDigitalActionHandle(std::string(pszActionName).c_str());
}

gm_structs::SteamInputActionOrigins steam_input_get_digital_action_origins(
    std::uint64_t input_handle, std::uint64_t action_set_handle, std::uint64_t digital_action_handle
)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamInputActionOrigins out {};
    out.count = 0;
    out.origins = {};

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    EInputActionOrigin native[STEAM_INPUT_MAX_ORIGINS] {};
    int n = s->GetDigitalActionOrigins(
        (InputHandle_t)input_handle,
        (InputActionSetHandle_t)action_set_handle,
        (InputDigitalActionHandle_t)digital_action_handle,
        native
    );
    n = std::max(0, std::min(n, (int)STEAM_INPUT_MAX_ORIGINS));

    std::vector<std::int32_t> v;
    v.reserve((size_t)n);
    for (int i = 0; i < n; ++i)
        v.push_back((std::int32_t)native[i]);

    out.count = (std::int32_t)n;
    out.origins = std::move(v);
    return out;
}

std::int32_t steam_input_get_gamepad_index_for_controller(std::uint64_t input_handle)
{
    STEAM_GUARD_RET(-1);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return -1;
    return s->GetGamepadIndexForController((InputHandle_t)input_handle);
}

std::int32_t steam_input_get_input_type_for_handle(std::uint64_t input_handle)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;

    return (std::int32_t)s->GetInputTypeForHandle((InputHandle_t)input_handle);
}

gm_structs::SteamInputMotionData steam_input_get_motion_data(std::uint64_t input_handle)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamInputMotionData out {};
    // Default init to 0
    out.rot_quat_x = out.rot_quat_y = out.rot_quat_z = out.rot_quat_w = 0.0f;
    out.pos_accel_x = out.pos_accel_y = out.pos_accel_z = 0.0f;
    out.rot_vel_x = out.rot_vel_y = out.rot_vel_z = 0.0f;

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    InputMotionData_t d = s->GetMotionData((InputHandle_t)input_handle);

    out.rot_quat_x = d.rotQuatX;
    out.rot_quat_y = d.rotQuatY;
    out.rot_quat_z = d.rotQuatZ;
    out.rot_quat_w = d.rotQuatW;

    out.pos_accel_x = d.posAccelX;
    out.pos_accel_y = d.posAccelY;
    out.pos_accel_z = d.posAccelZ;

    out.rot_vel_x = d.rotVelX;
    out.rot_vel_y = d.rotVelY;
    out.rot_vel_z = d.rotVelZ;

    return out;
}

std::string steam_input_get_string_for_action_origin(std::int32_t eOrigin)
{
    STEAM_GUARD_RET("");

    ISteamInput* s = steam_input_iface();
    if (!s)
        return "";

    const char* p = s->GetStringForActionOrigin((EInputActionOrigin)eOrigin);
    return p ? std::string(p) : std::string();
}

bool steam_input_init(bool explicitly_call_run_frame)
{
    STEAM_GUARD_RET(false);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return false;
    return s->Init(explicitly_call_run_frame);
}

void steam_input_enable_device_callbacks()
{
    STEAM_GUARD();

    ISteamInput* s = steam_input_iface();
    if (!s)
        return;
    s->EnableDeviceCallbacks();
}

void steam_input_run_frame()
{
    STEAM_GUARD();

    ISteamInput* s = steam_input_iface();
    if (!s)
        return;
    s->RunFrame();

    {
        InputHandle_t cur[STEAM_INPUT_MAX_COUNT] = {};
        const int cur_count = s->GetConnectedControllers(cur);
        
        std::vector<InputHandle_t> now;
        now.reserve((size_t)cur_count);
        for (int i = 0; i < cur_count; ++i)
            now.push_back(cur[i]);
        
        std::sort(now.begin(), now.end());
        std::sort(g_prev_connected.begin(), g_prev_connected.end());
        
        gm::wire::GMFunction cb_connected;
        gm::wire::GMFunction cb_disconnected;
        {
            std::lock_guard<std::mutex> lock(g_callbacks_mtx);
            cb_connected = g_cb_input_device_connected;
            cb_disconnected = g_cb_input_device_disconnected;
        }

        if (cb_connected)
        {
            size_t a = 0, b = 0;
            while (a < now.size())
            {
                if (b >= g_prev_connected.size() || now[a] < g_prev_connected[b])
                {
                    gm_structs::SteamInputDeviceEvent ev{};
                    ev.controller_handle = (std::uint64_t)now[a];
                    cb_connected.call(ev);
                    ++a;
                }
                else if (g_prev_connected[b] < now[a])
                {
                    ++b;
                }
                else
                {
                    ++a; ++b;
                }
            }
        }
        
        if (cb_disconnected)
        {
            size_t a = 0, b = 0;
            while (b < g_prev_connected.size())
            {
                if (a >= now.size() || g_prev_connected[b] < now[a])
                {
                    gm_structs::SteamInputDeviceEvent ev{};
                    ev.controller_handle = (std::uint64_t)g_prev_connected[b];
                    cb_disconnected.call(ev);
                    ++b;
                }
                else if (now[a] < g_prev_connected[b])
                {
                    ++a;
                }
                else
                {
                    ++a; ++b;
                }
            }
        }

        g_prev_connected = std::move(now);
    }

}

bool steam_input_set_dual_sense_trigger_effect(
    std::uint64_t, const std::vector<std::uint32_t>&
)
{
    STEAM_GUARD_RET(false);
    steam_set_last_error(
        "Steam Input: SetDualSenseTriggerEffect not supported in GM binding (requires native pointer)"
    );
    return false;
}

void steam_input_set_led_color(
    std::uint64_t input_handle,
    std::uint32_t nColorR,
    std::uint32_t nColorG,
    std::uint32_t nColorB,
    std::uint32_t nFlags
)
{
    STEAM_GUARD();

    ISteamInput* s = steam_input_iface();
    if (!s)
        return;

    std::uint8_t r = (std::uint8_t)clamp_u32(nColorR, 0, 255);
    std::uint8_t g = (std::uint8_t)clamp_u32(nColorG, 0, 255);
    std::uint8_t b = (std::uint8_t)clamp_u32(nColorB, 0, 255);

    s->SetLEDColor((InputHandle_t)input_handle, r, g, b, (unsigned int)nFlags);
}

bool steam_input_show_binding_panel(std::uint64_t input_handle)
{
    STEAM_GUARD_RET(false);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return false;

    return s->ShowBindingPanel((InputHandle_t)input_handle);
}

bool steam_input_shutdown()
{
    STEAM_GUARD_RET(false);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return false;
    return s->Shutdown();
}

void steam_input_stop_analog_action_momentum(std::uint64_t input_handle, std::uint64_t analog_action_handle)
{
    STEAM_GUARD();

    ISteamInput* s = steam_input_iface();
    if (!s)
        return;
    s->StopAnalogActionMomentum((InputHandle_t)input_handle, (InputAnalogActionHandle_t)analog_action_handle);
}


void steam_input_trigger_vibration(std::uint64_t input_handle, std::uint32_t usLeftSpeed, std::uint32_t usRightSpeed)
{
    STEAM_GUARD();

    ISteamInput* s = steam_input_iface();
    if (!s)
        return;

    std::uint16_t l = (std::uint16_t)clamp_u32(usLeftSpeed, 0, 65535);
    std::uint16_t r = (std::uint16_t)clamp_u32(usRightSpeed, 0, 65535);

    s->TriggerVibration((InputHandle_t)input_handle, l, r);
}

void steam_input_trigger_vibration_extended(
    std::uint64_t input_handle,
    std::uint32_t usLeftSpeed,
    std::uint32_t usRightSpeed,
    std::uint32_t usLeftTriggerSpeed,
    std::uint32_t usRightTriggerSpeed
)
{
    STEAM_GUARD();

    ISteamInput* s = steam_input_iface();
    if (!s)
        return;

    std::uint16_t l = (std::uint16_t)clamp_u32(usLeftSpeed, 0, 65535);
    std::uint16_t r = (std::uint16_t)clamp_u32(usRightSpeed, 0, 65535);
    std::uint16_t lt = (std::uint16_t)clamp_u32(usLeftTriggerSpeed, 0, 65535);
    std::uint16_t rt = (std::uint16_t)clamp_u32(usRightTriggerSpeed, 0, 65535);

    s->TriggerVibrationExtended((InputHandle_t)input_handle, l, r, lt, rt);
}

std::int32_t steam_input_get_action_origin_from_xbox_origin(std::uint64_t input_handle, std::int32_t eOrigin)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;

    return (std::int32_t)s->GetActionOriginFromXboxOrigin((InputHandle_t)input_handle, (EXboxOrigin)eOrigin);
}

std::int32_t steam_input_translate_action_origin(std::int32_t eDestinationInputType, std::int32_t eSourceOrigin)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;

    return (std::int32_t)s->TranslateActionOrigin(
        (ESteamInputType)eDestinationInputType, (EInputActionOrigin)eSourceOrigin
    );
}

gm_structs::SteamInputDeviceBindingRevision steam_input_get_device_binding_revision(std::uint64_t input_handle)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamInputDeviceBindingRevision out {};
    out.ok = false;
    out.major = 0;
    out.minor = 0;

    ISteamInput* s = steam_input_iface();
    if (!s)
        return out;

    int major = 0;
    int minor = 0;
    bool ok = s->GetDeviceBindingRevision((InputHandle_t)input_handle, &major, &minor);

    out.ok = ok;
    out.major = major;
    out.minor = minor;
    return out;
}

std::uint32_t steam_input_get_remote_play_session_id(std::uint64_t input_handle)
{
    STEAM_GUARD_RET(0);

    ISteamInput* s = steam_input_iface();
    if (!s)
        return 0;

    return s->GetRemotePlaySessionID((InputHandle_t)input_handle);
}
