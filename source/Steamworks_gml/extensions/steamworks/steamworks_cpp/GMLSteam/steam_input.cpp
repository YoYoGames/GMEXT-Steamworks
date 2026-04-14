
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
#include "isteamdualsense.h"

// some notes on types:
// string - a gamemaker string
// bool - a boolean
// real - a number
// color - a gamemaker rgb color, usually produced by make_color_rgb() or make_color_hsv()
// input_handle - an int64 that uniquely identifies a controller
// action_set_handle - an int64 that uniquely identifies an action set handle (or an action set handle layer)
// digital_action_handle - an int64 that uniquely identifies a digital action inside an action set
// analog_action_handle - an int64 that uniquely identifies an analog action inside an action set
// array<thing> - an array of things, for example array<input_handle> is an array of input handles
// motion_data = struct begin
// rot_quat_x: real
// rot_quat_y: real
// rot_quat_z: real
// rot_quat_w: real
// pos_accel_x: real
// pos_accel_y: real
// pos_accel_z: real
// rot_vel_x: real
// rot_vel_y: real
// rot_vel_z: real
// end
// digital_action_data = struct begin
// state: bool
// active: bool
// end
// analog_action_data = struct begin
// mode: source_mode
// x: real
// y: real
// active: bool
// end
// binding_revision = struct begin
// major: real
// minor: real
// end
// enums begin
// they are defined as `steam_input_NAME_*` and map to ESteamInput* or EInput* steamworks enums
// name in function signature -> values as constants -> name in steamworks headers
// action_origin -> steam_input_action_origin_* -> EInputActionOrigin
// xbox_origin -> steam_input_xbox_origin_* -> EXboxOrigin
// input_type -> steam_input_type_* -> ESteamInputType (special case: to not duplicate input_input twice)
// glyph_size -> steam_input_glyph_size_* -> ESteamInputGlyphSize
// glyph_style -> steam_input_glyph_style_* -> ESteamInputGlyphStyle
// led_flag -> steam_input_led_flag_* -> ESteamInputLEDFlag
// action_event_type -> steam_input_action_event_type_* -> ESteamInputActionEventType
// source_mode -> steam_input_source_mode_* -> EInputSourceMode
// configuration_enable_type -> steam_input_configuration_enable_type_* -> ESteamInputConfigurationEnableType
// steam_controller_pad -> steam_input_controller_pad_* -> ESteamControllerPad
// sce_pad -> steam_input_sce_pad_* -> N/A (special DualSense stuff, taken as-is from Steamworks headers, not to be actually understood)
// controller_haptic_location -> steam_input_controller_haptic_location_* -> EControllerHapticLocation
// controller_haptic_type -> steam_input_controller_haptic_type_* -> EControllerHapticType
// end
// if some type is not specified here, it's most likely an enum ^^ like above
// if still unclear, see Steamworks documentation

class CGMSteamInputCallbacks
{

public:

	STEAM_CALLBACK(CGMSteamInputCallbacks, on_steam_input_configuration_loaded, SteamInputConfigurationLoaded_t);

	STEAM_CALLBACK(CGMSteamInputCallbacks, on_steam_input_device_connected, SteamInputDeviceConnected_t);

	STEAM_CALLBACK(CGMSteamInputCallbacks, on_steam_input_device_disconnected, SteamInputDeviceDisconnected_t);

	STEAM_CALLBACK(CGMSteamInputCallbacks, on_steam_input_gamepad_slot_change, SteamInputGamepadSlotChange_t);

	static void on_steam_input_action_event(SteamInputActionEvent_t* pParam);
};

void CGMSteamInputCallbacks::on_steam_input_configuration_loaded(SteamInputConfigurationLoaded_t* pParam)
{
	int map = CreateDsMap(0,0);
	DsMapAddString(map, "event_type", "steam_input_configuration_loaded");
	DsMapAddDouble(map, "app_id", static_cast<double>(pParam->m_unAppID));
	DsMapAddInt64(map, "device_handle", static_cast<int64>(pParam->m_ulDeviceHandle));
	DsMapAddInt64(map, "mapping_creator", static_cast<int64>(pParam->m_ulMappingCreator.ConvertToUint64()));
	DsMapAddDouble(map, "major_revision", static_cast<double>(pParam->m_unMajorRevision));
	DsMapAddDouble(map, "minor_revision", static_cast<double>(pParam->m_unMinorRevision));
	DsMapAddBool(map, "uses_steam_input_api", pParam->m_bUsesSteamInputAPI);
	DsMapAddBool(map, "uses_steam_gamepad_api", pParam->m_bUsesGamepadAPI);
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

void CGMSteamInputCallbacks::on_steam_input_device_connected(SteamInputDeviceConnected_t* pParam)
{
	int map = CreateDsMap(0,0);
	DsMapAddString(map, "event_type", "steam_input_device_connected");
	DsMapAddInt64(map, "connected_device_handle", static_cast<int64>(pParam->m_ulConnectedDeviceHandle));
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

void CGMSteamInputCallbacks::on_steam_input_device_disconnected(SteamInputDeviceDisconnected_t* pParam)
{
	int map = CreateDsMap(0,0);
	DsMapAddString(map, "event_type", "steam_input_device_disconnected");
	DsMapAddInt64(map, "disconnected_device_handle", static_cast<int64>(pParam->m_ulDisconnectedDeviceHandle));
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

void CGMSteamInputCallbacks::on_steam_input_action_event(SteamInputActionEvent_t* pParam)
{
	int map = CreateDsMap(0,0);
	DsMapAddString(map, "event_type", "steam_input_action_event");
	DsMapAddInt64(map, "controller_handle", static_cast<int64>(pParam->controllerHandle));
	DsMapAddDouble(map, "action_event_type", static_cast<double>(pParam->eEventType));
	switch (pParam->eEventType)
	{
		case ESteamInputActionEventType_DigitalAction:
		{
			DsMapAddInt64(map, "action_handle", static_cast<int64>(pParam->digitalAction.actionHandle));
			DsMapAddBool(map, "active", pParam->digitalAction.digitalActionData.bActive);
			DsMapAddBool(map, "state", pParam->digitalAction.digitalActionData.bState);
			break;
		}

		case ESteamInputActionEventType_AnalogAction:
		{
			DsMapAddInt64(map, "action_handle", static_cast<int64>(pParam->analogAction.actionHandle));
			DsMapAddDouble(map, "mode", pParam->analogAction.analogActionData.eMode);
			DsMapAddDouble(map, "x", pParam->analogAction.analogActionData.x);
			DsMapAddDouble(map, "y", pParam->analogAction.analogActionData.y);
			DsMapAddBool(map, "active", pParam->analogAction.analogActionData.bActive);
			break;
		}
	}
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

void CGMSteamInputCallbacks::on_steam_input_gamepad_slot_change(SteamInputGamepadSlotChange_t* pParam)
{
	int map = CreateDsMap(0,0);
	DsMapAddString(map, "event_type", "steam_input_gamepad_slot_change");
	// uint
	DsMapAddDouble(map, "app_id", static_cast<double>(pParam->m_unAppID));
	// InputHandle_t as Int64
	DsMapAddInt64(map, "device_handle", pParam->m_ulDeviceHandle);
	// steam_input_type_* constant
	DsMapAddDouble(map, "device_type", static_cast<double>(pParam->m_eDeviceType));
	// int
	DsMapAddDouble(map, "old_gamepad_slot", pParam->m_nOldGamepadSlot);
	// int
	DsMapAddDouble(map, "new_gamepad_slot", pParam->m_nNewGamepadSlot);
	CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

// only instantiate this class if we've called SteamInput->Init()
// and we actually want native Steam Input,
// otherwise weird things may happen
CGMSteamInputCallbacks* g_pGMSteamInputCallbacks = nullptr;

//// helpers:
#define API SteamInput()
#define steam_input_ensure_argc(_ExpectedArgumentCount) \
	do \
	{ \
		if (argc < (_ExpectedArgumentCount) || nullptr == arg) \
		{ \
			YYError("%s expected at least %d arguments but got %d instead", __func__, (_ExpectedArgumentCount), argc); \
		} \
	} while (0) /* so we are required to put a semicolon here... */

/// (explicitly_call_run_frame:bool)->bool
YYEXPORT void steam_input_init(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg) 
{
	steam_input_ensure_argc(1);

	bool expCallRunFrame = YYGetBool(arg, 0);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	if (!g_pGMSteamInputCallbacks)
	{
		// subscribe to Steam Input callbacks
		// before initializing Steam Input, but only if the interface is not null.
		g_pGMSteamInputCallbacks = new CGMSteamInputCallbacks();
		DebugConsoleOutput("Steam Input callbacks CONFIGURED \n ");
	}

	Result.val = API->Init(expCallRunFrame);
}

/// ()->bool
YYEXPORT void steam_input_shutdown(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = API->Shutdown();
}

/// (absolute_path:string)->bool
YYEXPORT void steam_input_set_input_action_manifest_file_path(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	const char* absolutePath = YYGetString(arg, 0);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = API->SetInputActionManifestFilePath(absolutePath);
}

/// ()->bool
YYEXPORT void steam_input_run_frame(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = 1.0;
	// so this can be used as a check if the interface even exists
	// without initializing it
	API->RunFrame();
}

/// (wait_forever:bool,timeout:real)->bool
YYEXPORT void steam_input_wait_for_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);
	
	bool waitForever = YYGetBool(arg, 0);
	uint32 timeout = YYGetUint32(arg, 1);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = API->BWaitForData(waitForever, timeout);
}

/// ()->bool
YYEXPORT void steam_input_new_data_available(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = API->BNewDataAvailable();
}

/// ()->array<input_handle>
YYEXPORT void steam_input_get_connected_controllers(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	InputHandle_t handles[STEAM_INPUT_MAX_COUNT] = { 0 };

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}

	int wrote = API->GetConnectedControllers(handles);
	YYCreateArray(&Result);
	for (int i = 0; i < wrote; ++i)
	{
		RValue handleAsRV = {0};
		handleAsRV.kind = VALUE_INT64;
		handleAsRV.v64 = static_cast<int64>(handles[i]);
		SET_RValue(
			&Result,
			&handleAsRV,
			nullptr,
			i
		);
	}
}

/// ()->bool
YYEXPORT void steam_input_enable_device_callbacks(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	// This will make CGMSteamInputCallbacks
	// actually receive device connection and disconnection callbacks.

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = 1.0;
	API->EnableDeviceCallbacks();
}

/// ()->bool
YYEXPORT void steam_input_enable_action_event_callbacks(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	// makes an async event instead

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = 1.0;
	API->EnableActionEventCallbacks(&CGMSteamInputCallbacks::on_steam_input_action_event);
}

/// (action_set_name:string)->action_set_handle
YYEXPORT void steam_input_get_action_set_handle(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	const char* aSName = YYGetString(arg, 0);

	Result.kind = VALUE_INT64;
	if (!steam_is_initialised || !API)
	{
		Result.v64 = 0;
		return;
	}

	Result.v64 = API->GetActionSetHandle(aSName);
}

/// (controller:input_handle,action_set:action_set_handle)->bool
YYEXPORT void steam_input_activate_action_set(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputActionSetHandle_t ash = static_cast<InputActionSetHandle_t>(YYGetInt64(arg, 1));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = 1.0;
	API->ActivateActionSet(con, ash);
}

/// (controller:input_handle)->action_set_handle
YYEXPORT void steam_input_get_current_action_set(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));

	Result.kind = VALUE_INT64;
	if (!steam_is_initialised || !API)
	{
		Result.v64 = 0;
		return;
	}

	Result.v64 = static_cast<int64>(API->GetCurrentActionSet(con));
}

/// (controller:input_handle,action_set_layer:action_set_handle)->bool
YYEXPORT void steam_input_activate_action_set_layer(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputActionSetHandle_t ash = static_cast<InputActionSetHandle_t>(YYGetInt64(arg, 1));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->ActivateActionSetLayer(con, ash);
}

/// (controller:input_handle,action_set_layer:action_set_handle)->bool
YYEXPORT void steam_input_deactivate_action_set_layer(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputActionSetHandle_t ash = static_cast<InputActionSetHandle_t>(YYGetInt64(arg, 1));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->DeactivateActionSetLayer(con, ash);
}

/// (controller:input_handle)->bool
YYEXPORT void steam_input_deactivate_all_action_set_layers(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->DeactivateAllActionSetLayers(con);
}

/// (controller:input_handle)->array<action_set_handle>
YYEXPORT void steam_input_get_active_action_set_layers(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputActionSetHandle_t layerhs[STEAM_INPUT_MAX_ACTIVE_LAYERS] = { 0 };

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}

	int wrote = API->GetActiveActionSetLayers(con, layerhs);
	YYCreateArray(&Result);
	for (int i = 0; i < wrote; ++i)
	{
		RValue handleAsRV = { 0 };
		handleAsRV.kind = VALUE_INT64;
		handleAsRV.v64 = static_cast<int64>(layerhs[i]);
		SET_RValue(
			&Result,
			&handleAsRV,
			nullptr,
			i
		);
	}
}

/// (digital_action_name:string)->digital_action_handle
YYEXPORT void steam_input_get_digital_action_handle(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	const char* aname = YYGetString(arg, 0);

	Result.kind = VALUE_INT64;
	if (!steam_is_initialised || !API)
	{
		Result.v64 = 0;
		return;
	}

	Result.v64 = static_cast<InputDigitalActionHandle_t>(API->GetDigitalActionHandle(aname));
}

/// (controller:input_handle,action_handle:digital_action_handle)->digital_action_data
YYEXPORT void steam_input_get_digital_action_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputDigitalActionHandle_t daction = static_cast<InputDigitalActionHandle_t>(YYGetInt64(arg, 1));

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}

	InputDigitalActionData_t data = API->GetDigitalActionData(con, daction);
	YYStructCreate(&Result);
	YYStructAddBool(&Result, "state", data.bState);
	YYStructAddBool(&Result, "active", data.bActive);
}

/// (controller:input_handle,action_set:action_set_handle,digital_action:digital_action_handle)->array<action_origin>
YYEXPORT void steam_input_get_digital_action_origins(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(3);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputActionSetHandle_t ash = static_cast<InputActionSetHandle_t>(YYGetInt64(arg, 1));
	InputDigitalActionHandle_t daction = static_cast<InputDigitalActionHandle_t>(YYGetInt64(arg, 2));

	EInputActionOrigin origins[STEAM_INPUT_MAX_ORIGINS] = { k_EInputActionOrigin_None };
	double dblorigins[STEAM_INPUT_MAX_ORIGINS] = { 0 };

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}

	int wrote = API->GetDigitalActionOrigins(con, ash, daction, origins);
	for (int i = 0; i < wrote; ++i)
	{
		// no need to use int64s here, better use doubles for enums
		dblorigins[i] = static_cast<double>(origins[i]);
	}
	YYCreateArray(&Result, wrote, dblorigins);
}

/// (digital_action:digital_action_handle)->string
YYEXPORT void steam_input_get_string_for_digital_action_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputDigitalActionHandle_t daction = static_cast<InputDigitalActionHandle_t>(YYGetInt64(arg, 0));

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	YYCreateString(&Result, API->GetStringForDigitalActionName(daction));
}

/// (analog_action_name:string)->analog_action_handle
YYEXPORT void steam_input_get_analog_action_handle(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	const char* aaname = YYGetString(arg, 0);

	Result.kind = VALUE_INT64;
	if (!steam_is_initialised || !API)
	{
		Result.v64 = 0;
		return;
	}

	Result.v64 = static_cast<int64>(API->GetAnalogActionHandle(aaname));
}

/// (controller:input_handle,analog_action:analog_action_handle)->analog_action_data
YYEXPORT void steam_input_get_analog_action_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputAnalogActionHandle_t aah = static_cast<InputAnalogActionHandle_t>(YYGetInt64(arg, 1));

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}

	InputAnalogActionData_t adata = API->GetAnalogActionData(con, aah);
	YYStructCreate(&Result);
	YYStructAddInt64(&Result, "mode", adata.eMode);
	YYStructAddDouble(&Result, "x", adata.x);
	YYStructAddDouble(&Result, "y", adata.y);
	YYStructAddBool(&Result, "active", adata.bActive);
}

/// (controller:input_handle,action_set:action_set_handle,action:analog_action_handle)->array<action_origin>
YYEXPORT void steam_input_get_analog_action_origins(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(3);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputActionSetHandle_t ash = static_cast<InputActionSetHandle_t>(YYGetInt64(arg, 1));
	InputAnalogActionHandle_t aah = static_cast<InputAnalogActionHandle_t>(YYGetInt64(arg, 2));

	EInputActionOrigin origins[STEAM_INPUT_MAX_ORIGINS] = { k_EInputActionOrigin_None };
	double dblorigins[STEAM_INPUT_MAX_ORIGINS] = { 0 };

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}

	int wrote = API->GetAnalogActionOrigins(con, ash, aah, origins);
	for (int i = 0; i < wrote; ++i)
	{
		// no need to use int64s here, better use reals
		dblorigins[i] = static_cast<double>(origins[i]);
	}
	YYCreateArray(&Result, wrote, dblorigins);
}

/// (origin:action_origin,size:glyph_size,flags:glyph_style)->string
YYEXPORT void steam_input_get_glyph_png_for_action_origin(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(3);

	EInputActionOrigin origin = static_cast<EInputActionOrigin>(YYGetInt32(arg, 0));
	ESteamInputGlyphSize orsiz = static_cast<ESteamInputGlyphSize>(YYGetInt32(arg, 1));
	uint32 flags = YYGetUint32(arg, 2);

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	const char* path = API->GetGlyphPNGForActionOrigin(origin, orsiz, flags);
	if (path && *path)
	{
		AddFileToSaveWhitelist(path);
	}
	YYCreateString(&Result, path);
}

/// (origin:action_origin,flags:glyph_style)->string
YYEXPORT void steam_input_get_glyph_svg_for_action_origin(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	EInputActionOrigin origin = static_cast<EInputActionOrigin>(YYGetInt32(arg, 0));
	uint32 flags = YYGetUint32(arg, 1);

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	const char* path = API->GetGlyphSVGForActionOrigin(origin, flags);
	if (path && *path)
	{
		AddFileToSaveWhitelist(path);
	}
	YYCreateString(&Result, path);
}

/// (origin:action_origin)->string
YYEXPORT void steam_input_get_glyph_for_action_origin_legacy(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	EInputActionOrigin origin = static_cast<EInputActionOrigin>(YYGetInt32(arg, 0));

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	const char* path = API->GetGlyphForActionOrigin_Legacy(origin);
	if (path && *path)
	{
		AddFileToSaveWhitelist(path);
	}
	YYCreateString(&Result, path);
}

/// (origin:action_origin)->string
YYEXPORT void steam_input_get_string_for_action_origin(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	EInputActionOrigin origin = static_cast<EInputActionOrigin>(YYGetInt32(arg, 0));

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	YYCreateString(&Result, API->GetStringForActionOrigin(origin));
}

/// (action:analog_action_handle)->string
YYEXPORT void steam_input_get_string_for_analog_action_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputAnalogActionHandle_t aah = static_cast<InputAnalogActionHandle_t>(YYGetInt64(arg, 0));

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	YYCreateString(&Result, API->GetStringForAnalogActionName(aah));
}

/// (controller:input_handle,action:analog_action_handle)->bool
YYEXPORT void steam_input_stop_analog_action_momentum(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	InputAnalogActionHandle_t aah = static_cast<InputAnalogActionHandle_t>(YYGetInt64(arg, 1));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0.0;
		return;
	}

	Result.val = 1.0;
	API->StopAnalogActionMomentum(con, aah);
}

/// (controller:input_handle)->motion_data
YYEXPORT void steam_input_get_motion_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}

	InputMotionData_t idat = API->GetMotionData(con);
	YYStructCreate(&Result);
	YYStructAddDouble(&Result, "rot_quat_x", idat.rotQuatX);
	YYStructAddDouble(&Result, "rot_quat_y", idat.rotQuatY);
	YYStructAddDouble(&Result, "rot_quat_z", idat.rotQuatZ);
	YYStructAddDouble(&Result, "rot_quat_w", idat.rotQuatW);
	YYStructAddDouble(&Result, "pos_accel_x", idat.posAccelX);
	YYStructAddDouble(&Result, "pos_accel_y", idat.posAccelY);
	YYStructAddDouble(&Result, "pos_accel_z", idat.posAccelZ);
	YYStructAddDouble(&Result, "rot_vel_x", idat.rotVelX);
	YYStructAddDouble(&Result, "rot_vel_y", idat.rotVelY);
	YYStructAddDouble(&Result, "rot_vel_z", idat.rotVelZ);
}

/// (controller:input_handle,left_speed:real,right_speed:real)->bool
YYEXPORT void steam_input_trigger_vibration(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(3);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	uint16 leftspeed = static_cast<uint16>(YYGetInt32(arg, 1));
	uint16 rightspeed = static_cast<uint16>(YYGetInt32(arg, 2));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->TriggerVibration(con, leftspeed, rightspeed);
}

/// (controller:input_handle,left_speed:real,right_speed:real,left_trigger_speed:real,right_trigger_speed:real)->bool
YYEXPORT void steam_input_trigger_vibration_extended(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(5);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	uint16 leftspeed = static_cast<uint16>(YYGetInt32(arg, 1));
	uint16 rightspeed = static_cast<uint16>(YYGetInt32(arg, 2));
	uint16 ltspeed = static_cast<uint16>(YYGetInt32(arg, 3));
	uint16 rtspeed = static_cast<uint16>(YYGetInt32(arg, 4));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->TriggerVibrationExtended(con, leftspeed, rightspeed, ltspeed, rtspeed);
}

/// (controller:input_handle,location:controller_haptic_location,intensity:real,gain_db:real,other_intensity:real,other_gain_db:real)->bool
YYEXPORT void steam_input_trigger_simple_haptic_event(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(6);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	EControllerHapticLocation echl = static_cast<EControllerHapticLocation>(YYGetInt32(arg, 1));
	uint8 intensity = static_cast<uint8>(YYGetInt32(arg, 2));
	int8 gaindb = static_cast<int8>(YYGetInt32(arg, 3));
	uint8 otherintensity = static_cast<uint8>(YYGetInt32(arg, 4));
	int8 othergaindb = static_cast<int8>(YYGetInt32(arg, 5));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->TriggerSimpleHapticEvent(con, echl, intensity, gaindb, otherintensity, othergaindb);
}

/// (controller:input_handle,color:color,flags:led_flag)->bool
YYEXPORT void steam_input_set_led_color(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(3);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	uint32 color = YYGetUint32(arg, 1); // in GameMaker make_color_rgb() format
	uint32 ledflags = YYGetUint32(arg, 2);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	// decompose the GameMaker color into red green and blue
	API->SetLEDColor(con, color & 0xff, (color >> 8) & 0xff, (color >> 0x10) & 0xff, ledflags);
}

/// (controller:input_handle,pad:steam_controller_pad,duration_in_ms:real)->bool
YYEXPORT void steam_input_trigger_haptic_pulse_legacy(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(3);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	ESteamControllerPad pad = static_cast<ESteamControllerPad>(YYGetInt32(arg, 1));
	uint16 duration = static_cast<uint16>(YYGetInt32(arg, 2));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->Legacy_TriggerHapticPulse(con, pad, duration);
}

/// (controller:input_handle,pad:steam_controller_pad,duration_in_mcs:real,offset_in_mcs:real,repeats_amount:real,flags:real)->bool
YYEXPORT void steam_input_trigger_repeated_haptic_pulse_legacy(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(6);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	ESteamControllerPad pad = static_cast<ESteamControllerPad>(YYGetInt32(arg, 1));
	uint16 duration = static_cast<uint16>(YYGetInt32(arg, 2));
	uint16 offms = static_cast<uint16>(YYGetInt32(arg, 3));
	uint16 rep = static_cast<uint16>(YYGetInt32(arg, 4));
	uint32 flags = YYGetUint32(arg, 5);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = 1;
	API->Legacy_TriggerRepeatedHapticPulse(con, pad, duration, offms, rep, flags);
}

/// (controller:input_handle)->bool
YYEXPORT void steam_input_show_binding_panel(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = API->ShowBindingPanel(con);
}

/// (controller:input_handle)->input_type
YYEXPORT void steam_input_get_input_type_for_handle(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));

	Result.kind = VALUE_REAL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0; // 0 is _Unknown in enum, so it's fine
		return;
	}

	Result.val = static_cast<double>(API->GetInputTypeForHandle(con));
}

/// (index:real)->input_handle
YYEXPORT void steam_input_get_controller_for_gamepad_index(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	int xinput_ind = YYGetInt32(arg, 0);

	Result.kind = VALUE_INT64;
	if (!steam_is_initialised || !API)
	{
		Result.v64 = 0;
		return;
	}

	Result.v64 = static_cast<int64>(API->GetControllerForGamepadIndex(xinput_ind));
}

/// (controller:input_handle)->real
YYEXPORT void steam_input_get_gamepad_index_for_controller(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));

	Result.kind = VALUE_REAL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = API->GetGamepadIndexForController(con);
}

/// (origin:xbox_origin)->string
YYEXPORT void steam_input_get_string_for_xbox_origin(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	EXboxOrigin origin = static_cast<EXboxOrigin>(YYGetInt32(arg, 0));

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	YYCreateString(&Result, API->GetStringForXboxOrigin(origin));
}

/// (origin:xbox_origin)->string
YYEXPORT void steam_input_get_glyph_for_xbox_origin(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	EXboxOrigin origin = static_cast<EXboxOrigin>(YYGetInt32(arg, 0));

	if (!steam_is_initialised || !API)
	{
		YYCreateString(&Result, "");
		return;
	}

	const char* path = API->GetGlyphForXboxOrigin(origin);
	if (path && *path)
	{
		AddFileToSaveWhitelist(path);
	}
	YYCreateString(&Result, path);
}

/// (controller:input_handle,origin:xbox_origin)->action_origin
YYEXPORT void steam_input_get_action_origin_from_xbox_origin(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	EXboxOrigin origin = static_cast<EXboxOrigin>(YYGetInt32(arg, 1));

	Result.kind = VALUE_REAL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	EInputActionOrigin aor = API->GetActionOriginFromXboxOrigin(con, origin);
	Result.val = static_cast<double>(aor);
}

/// (type:input_type,origin:action_origin)->action_origin
YYEXPORT void steam_input_translate_action_origin(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(2);

	ESteamInputType destype = static_cast<ESteamInputType>(YYGetInt32(arg, 0));
	EInputActionOrigin sorigin = static_cast<EInputActionOrigin>(YYGetInt32(arg, 1));

	Result.kind = VALUE_REAL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}
	
	EInputActionOrigin aor = API->TranslateActionOrigin(destype, sorigin);
	Result.val = static_cast<double>(aor);
}

/// (controller:input_handle)->binding_revision
YYEXPORT void steam_input_get_device_binding_revision(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	int major = 0, minor = 0;

	Result.kind = VALUE_UNDEFINED;
	if (!steam_is_initialised || !API)
	{
		return;
	}
	
	if (true == API->GetDeviceBindingRevision(con, &major, &minor))
	{
		YYStructCreate(&Result);
		YYStructAddDouble(&Result, "major", major);
		YYStructAddDouble(&Result, "minor", minor);
	}
}

/// (controller:input_handle)->real
YYEXPORT void steam_input_get_remote_play_session_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	steam_input_ensure_argc(1);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));

	Result.kind = VALUE_REAL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = static_cast<double>(API->GetRemotePlaySessionID(con));
}

/// ()->configuration_enable_type
YYEXPORT void steam_input_get_session_input_configuration_settings(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_REAL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	Result.val = API->GetSessionInputConfigurationSettings();
}

static int steam_input_struct_get_i32(RValue* rparam, const char* name)
{
	RValue* member = YYStructGetMember(rparam, name);
	if (!member)
	{
		YYError("%s unable to get i32 struct member %s", __func__, name);
	}

	return YYGetInt32(member, 0);
}

static RValue* steam_input_struct_get_inner(RValue* rparam, const char* name, bool isArray)
{
	RValue* member = YYStructGetMember(rparam, name);
	if (!member)
	{
		YYError("%s unable to get object struct member %s", __func__, name);
	}
	
	if (isArray)
	{
		if (KIND_RValue(member) != VALUE_ARRAY)
		{
			YYError("%s unable to get array struct member %s", __func__, name);
		}

		return member;
	}

	return YYGetStruct(member, 0);
}

static RValue steam_input_struct_get_array(RValue* rparam, int index)
{
	RValue Result = { 0 };
	if (!GET_RValue(&Result, rparam, nullptr, index, false, false))
	{
		YYError("%s unable to get array index %d", __func__, index);
	}

	return Result;
}

/// (controller:input_handle,param:struct)->bool
YYEXPORT void steam_input_set_dualsense_trigger_effect(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	// This horrible function was written for one specific GML library
	// and they will populate the struct in a way that it'll always be valid.
	// Misuse may leak stuff, be wary, wooooo
	steam_input_ensure_argc(2);

	InputHandle_t con = static_cast<InputHandle_t>(YYGetInt64(arg, 0));
	RValue* rparam = YYGetStruct(arg, 1);
	ScePadTriggerEffectParam param = { 0 };

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !API)
	{
		Result.val = 0;
		return;
	}

	param.triggerMask = static_cast<uint8_t>(steam_input_struct_get_i32(rparam, "trigger_mask"));
	// questionable land begin:
	RValue* command_array = steam_input_struct_get_inner(rparam, "command", true);
	for (int i = 0; i < SCE_PAD_TRIGGER_EFFECT_TRIGGER_NUM; ++i)
	{
		// not a pointer
		RValue command_item = steam_input_struct_get_array(command_array, i);
		param.command[i].mode = static_cast<ScePadTriggerEffectMode>(steam_input_struct_get_i32(&command_item, "mode"));
		RValue* command_data = steam_input_struct_get_inner(&command_item, "command_data", false);
		switch (param.command[i].mode)
		{
			case SCE_PAD_TRIGGER_EFFECT_MODE_FEEDBACK:
			{
				RValue* feedback_param = steam_input_struct_get_inner(command_data, "feedback_param", false);
				param.command[i].commandData.feedbackParam.position = static_cast<uint8_t>(steam_input_struct_get_i32(feedback_param, "position"));
				param.command[i].commandData.feedbackParam.strength = static_cast<uint8_t>(steam_input_struct_get_i32(feedback_param, "strength"));
				break;
			}

			case SCE_PAD_TRIGGER_EFFECT_MODE_WEAPON:
			{
				RValue* weapon_param = steam_input_struct_get_inner(command_data, "weapon_param", false);
				param.command[i].commandData.weaponParam.startPosition = static_cast<uint8_t>(steam_input_struct_get_i32(weapon_param, "start_position"));
				param.command[i].commandData.weaponParam.endPosition = static_cast<uint8_t>(steam_input_struct_get_i32(weapon_param, "end_position"));
				param.command[i].commandData.weaponParam.strength = static_cast<uint8_t>(steam_input_struct_get_i32(weapon_param, "strength"));
				break;
			}

			case SCE_PAD_TRIGGER_EFFECT_MODE_VIBRATION:
			{
				RValue* vibration_param = steam_input_struct_get_inner(command_data, "vibration_param", false);
				param.command[i].commandData.vibrationParam.amplitude = static_cast<uint8_t>(steam_input_struct_get_i32(vibration_param, "amplitude"));
				param.command[i].commandData.vibrationParam.frequency = static_cast<uint8_t>(steam_input_struct_get_i32(vibration_param, "frequency"));
				param.command[i].commandData.vibrationParam.position = static_cast<uint8_t>(steam_input_struct_get_i32(vibration_param, "position"));
				break;
			}

			case SCE_PAD_TRIGGER_EFFECT_MODE_MULTIPLE_POSITION_FEEDBACK:
			{
				RValue* multiple_position_feedback_param = steam_input_struct_get_inner(command_data, "multiple_position_feedback_param", false);
				RValue* strength = steam_input_struct_get_inner(multiple_position_feedback_param, "strength", true);
				for (int mi = 0; mi < SCE_PAD_TRIGGER_EFFECT_CONTROL_POINT_NUM; ++mi)
				{
					RValue tmp = steam_input_struct_get_array(strength, mi);
					param.command[i].commandData.multiplePositionFeedbackParam.strength[mi] = static_cast<uint8_t>(YYGetInt32(&tmp, 0));
					FREE_RValue(&tmp);
				}
				break;
			}

			case SCE_PAD_TRIGGER_EFFECT_MODE_SLOPE_FEEDBACK:
			{
				RValue* slope_feedback_param = steam_input_struct_get_inner(command_data, "slope_feedback_param", false);
				param.command[i].commandData.slopeFeedbackParam.startPosition = static_cast<uint8_t>(steam_input_struct_get_i32(slope_feedback_param, "start_position"));
				param.command[i].commandData.slopeFeedbackParam.endPosition = static_cast<uint8_t>(steam_input_struct_get_i32(slope_feedback_param, "end_position"));
				param.command[i].commandData.slopeFeedbackParam.startStrength = static_cast<uint8_t>(steam_input_struct_get_i32(slope_feedback_param, "start_strength"));
				param.command[i].commandData.slopeFeedbackParam.endStrength = static_cast<uint8_t>(steam_input_struct_get_i32(slope_feedback_param, "end_strength"));
				break;
			}

			case SCE_PAD_TRIGGER_EFFECT_MODE_MULTIPLE_POSITION_VIBRATION:
			{
				RValue* multiple_position_vibration_param = steam_input_struct_get_inner(command_data, "multiple_position_vibration_param", false);
				param.command[i].commandData.multiplePositionVibrationParam.frequency = static_cast<uint8_t>(steam_input_struct_get_i32(multiple_position_vibration_param, "frequency"));
				RValue* amplitude = steam_input_struct_get_inner(multiple_position_vibration_param, "amplitude", true);
				for (int mi = 0; mi < SCE_PAD_TRIGGER_EFFECT_CONTROL_POINT_NUM; ++mi)
				{
					RValue tmp = steam_input_struct_get_array(amplitude, mi);
					param.command[i].commandData.multiplePositionVibrationParam.amplitude[mi] = static_cast<uint8_t>(YYGetInt32(&tmp, 0));
					FREE_RValue(&tmp);
				}
				break;
			}

			default:
			{
				// _OFF mode? don't read anything inside command_data...
				break;
			}
		}
		FREE_RValue(&command_item);
	}
	// questionable land leave:

	Result.val = 1;
	API->SetDualSenseTriggerEffect(con, &param);
}
