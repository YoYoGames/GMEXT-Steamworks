/// steam_controller.cpp DEPRECATED!!!!!

#include "pch.h"
//#include "steam_glue.h"
//#include "steam_api.h"
//#include "Extension_Interface.h"
//#include "YYRValue.h"
//#include "steam_common.h"
//
//
//#pragma region Controller meta
//steam_gml_map<ControllerHandle_t> steam_controller_controllers;
//steam_gml_namedmap<ControllerActionSetHandle_t> steam_controller_actionsets;
//steam_gml_namedmap<ControllerAnalogActionHandle_t> steam_controller_analog;
//steam_gml_namedmap<ControllerDigitalActionHandle_t> steam_controller_digital;
//ControllerHandle_t steam_controller_handles[STEAM_CONTROLLER_MAX_COUNT];
//EControllerActionOrigin steam_controller_origins[STEAM_CONTROLLER_MAX_ORIGINS];
////
//
//void steam_controller_reset_impl() 
//{
//	steam_controller_controllers.clear();
//	steam_controller_actionsets.clear();
//	steam_controller_analog.clear();
//	steam_controller_digital.clear();
//}
//
//YYEXPORT void /*double*/ steam_controller_reset(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	steam_controller_reset_impl();
//	
//	Result.kind = VALUE_REAL;
//	Result.val = 1;
//}
//
///// Should be called on game start if you use Steam Controller
//YYEXPORT void /*double*/ steam_controller_init(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	Result.kind = VALUE_REAL;
//	Result.val = SteamController() && SteamController()->Init();
//}
//
///// Can be called prior to other controller functions for lower latency. Called by steam_gml_update.
//YYEXPORT void /*double*/ steam_controller_update(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	Result.kind = VALUE_REAL;
//	
//	if (SteamController()) 
//	{
//		SteamController()->RunFrame();
//		Result.val = 1;
//	}
//	else
//		Result.val = 0;
//}
//
//YYEXPORT void /*double*/ steam_controller_get_max_count(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	Result.kind = VALUE_REAL;
//	Result.val = STEAM_CONTROLLER_MAX_COUNT;
//}
//
//YYEXPORT void /*double*/ steam_controller_get_ids(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* cbuf) 
//{
//	DebugConsoleOutput("steam_controller_get_ids CALLED\n");
//
//	if (!SteamController())
//	{
//		DebugConsoleOutput("steam_controller_get_ids OUT 1\n");
//		Result.kind = VALUE_REAL;
//		Result.val = -4;
//		return;
//	}
//	
//	SteamController()->RunFrame();
//	int found = SteamController()->GetConnectedControllers(steam_controller_handles);
//	if (found <= 0) 
//	{
//		DebugConsoleOutput("steam_controller_get_ids OUT 2\n");
//		Result.kind = VALUE_REAL;
//		Result.val = -4;
//		return;
//	}
//
//	std::vector<int32> vect;
//
//	for (int i = 0; i < found; i++) 
//	{
//		DebugConsoleOutput("Controller Added");
//		vect.push_back(steam_controller_controllers.add(steam_controller_handles[i]));
//	}
//
//	DebugConsoleOutput("steam_controller_get_ids OUT 3\n");
//
//	_SW_SetArrayOfInt32(&Result, vect);
//}
//
//ControllerHandle_t steam_controller_find(double id) 
//{
//	if (id == -3/* all */) return STEAM_CONTROLLER_HANDLE_ALL_CONTROLLERS;
//	ControllerHandle_t q; return steam_controller_controllers.get(id, &q) ? q : 0;
//}
//
/////
//enum steam_controller_type_t 
//{
//	steam_controller_unknown = 0,
//	steam_controller_steam_controller,
//	steam_controller_xbox360,
//	steam_controller_xboxone,
//	steam_controller_generic_xinput,
//	steam_controller_ps4,
//	steam_controller_apple_mfi,
//	steam_controller_android,
//	steam_controller_switch_joycon_pair,
//	steam_controller_switch_joycon_single,
//	steam_controller_switch_pro,
//	steam_controller_mobile_touch,
//	steam_controller_ps3,
//};
//
/////
//YYEXPORT void /*double*/ steam_controller_get_type(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double id) 
//{
//	double id = YYGetReal(arg, 0);
//
//	ControllerHandle_t ctl = steam_controller_find(id);
//	//#if (STEAMWORKS >= 142)
//
//	Result.kind = VALUE_REAL;
//	Result.val = SteamController()->GetInputTypeForHandle(ctl);
//	//#else
//	//return steam_controller_unknown;
//	//#endif
//}
//#pragma endregion
//
//#pragma region ActionSet
///// Assigns and returns ActionSet ID for given name, -1 if actionset is not found
//YYEXPORT void /*double*/ steam_controller_get_actionset_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* actionset_name) 
//{
//	const char* actionset_name = YYGetString(arg, 0);
//
//	if (!SteamController())
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = -1;
//		return;
//	}
//	
//	int i; 
//
//	if (steam_controller_actionsets.find_name((char*)actionset_name, &i))
//	{
//			Result.kind = VALUE_REAL;
//			Result.val = i;
//			return;
//	}
//
//	ControllerActionSetHandle_t r = SteamController()->GetActionSetHandle(actionset_name);
//	if (r != 0) 
//	{
//		Result.kind = VALUE_INT64	;
//		Result.val = steam_controller_actionsets.set((char*) actionset_name, r);
//	} 
//	else
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = steam_controller_actionsets.set_noone((char*) actionset_name);
//	}
//}
//
///// Returns action set ID (generated by steam_controller_get_actionset_id), as per GetCurrentActionSet
//YYEXPORT void /*double*/ steam_controller_get_actionset(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double controller) 
//{
//	double controller = YYGetReal(arg, 0);
//
//	if (!SteamController())
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = -1;
//		return;
//	}
//
//	ControllerHandle_t q; if (!steam_controller_controllers.get(controller, &q))
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = -1;
//	}
//		
//	ControllerActionSetHandle_t r = SteamController()->GetCurrentActionSet(q);
//	int i; 
//
//	Result.kind = VALUE_REAL;
//	Result.val = steam_controller_actionsets.find_value(r, &i) ? i : -1;
//}
//
///// Changes controller action set, as per ActivateActionSet
//YYEXPORT void /*double*/ steam_controller_set_actionset(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double controller, double actionset_id) 
//{
//	double controller = YYGetReal(arg, 0);
//	double actionset_id = YYGetReal(arg, 1);
//
//	if (!SteamController())
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0.0;
//		return;
//	}
//
//	ControllerHandle_t q; if (!steam_controller_controllers.get(controller, &q)) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0.0;
//		return;
//	}
//
//	ControllerActionSetHandle_t v; if (!steam_controller_actionsets.get(actionset_id, &v))
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0.0;
//		return;
//	}
//
//	SteamController()->ActivateActionSet(q, v);
//
//	Result.kind = VALUE_REAL;
//	Result.val = 1.0;
//}
//#pragma endregion
//
//#pragma region DigitalAction
/////
//YYEXPORT void /*double*/ steam_controller_get_digital_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* digitalActionName) 
//{
//	DebugConsoleOutput("steam_controller_get_digital_id CALLED\n");
//
//	const char* digitalActionName = YYGetString(arg, 0);
//
//	DebugConsoleOutput(digitalActionName);
//
//	if (!SteamController())
//	{
//		DebugConsoleOutput("OUT 1\n");
//
//		Result.kind = VALUE_INT64;
//		Result.v64 = -1;
//		return;
//	}
//
//	int i; 
//	if (steam_controller_actionsets.find_name((char*)digitalActionName, &i))
//	{
//		DebugConsoleOutput("OUT 2\n");
//		Result.kind = VALUE_INT64;
//		Result.v64 = i;
//		return;
//	}
//
//	ControllerDigitalActionHandle_t r = SteamController()->GetDigitalActionHandle(digitalActionName);
//	if (r != 0)
//	{
//		DebugConsoleOutput("OUT 3\n");
//		Result.kind = VALUE_INT64;
//		Result.v64 = steam_controller_digital.set((char*)digitalActionName, r);
//		return;
//	}
//	else
//	{
//		DebugConsoleOutput("OUT 4\n");
//
//		Result.kind = VALUE_INT64;
//		Result.v64 = steam_controller_digital.set_noone((char*)digitalActionName);
//		return;
//	}
//}
//
///// Retreives digital action state (true/false)
//YYEXPORT void /*double*/ steam_controller_get_digital_value(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double controller, double digital_id) 
//{
//	double controller = YYGetReal(arg, 0);
//	double digital_id = YYGetReal(arg, 1);
//
//	if (!SteamController()) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerHandle_t q = steam_controller_find(controller); 
//
//	if (q == 0) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerDigitalActionHandle_t t; 
//	if (!steam_controller_digital.get(digital_id, &t))
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerDigitalActionData_t d = SteamController()->GetDigitalActionData(q, t);
//
//	Result.kind = VALUE_REAL;
//	Result.val = d.bState;
//}
//
///// Returns whether the given digital action is currently active (true/false)
//YYEXPORT void /*double*/ steam_controller_get_digital_status(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double controller, double digital_id) 
//{
//	double controller = YYGetReal(arg, 0);
//	double digital_id = YYGetReal(arg, 1);
//
//	if (!SteamController()) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerHandle_t ctl = steam_controller_find(controller); 
//	if (ctl == 0) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerDigitalActionHandle_t act; 
//	if (!steam_controller_digital.get(digital_id, &act)) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerDigitalActionData_t d = SteamController()->GetDigitalActionData(ctl, act);
//
//	Result.kind = VALUE_REAL;
//	Result.val = d.bActive;
//}
//
//YYEXPORT void /*double*/ steam_controller_get_digital_origins(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double controller, double actionset_id, double digital_id, char* out) 
//{
//	double controller = YYGetReal(arg, 0);
//	double actionset_id = YYGetReal(arg, 1);
//	double digital_id = YYGetReal(arg, 2);
//	const char* out = YYGetString(arg, 3);
//
//	if (!SteamController()) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerHandle_t ctl = steam_controller_find(controller); if (ctl == 0) 
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerActionSetHandle_t set;
//	if (!steam_controller_actionsets.get(actionset_id, &set))
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	ControllerDigitalActionHandle_t act = 4;
//	if (!steam_controller_digital.get(digital_id, &act))
//	{
//		Result.kind = VALUE_REAL;
//		Result.val = 0;
//		return;
//	}
//
//	int found = SteamController()->GetDigitalActionOrigins(ctl, set, act, steam_controller_origins);
//	gml_ostream buf((char*)out);
//	for (int i = 0; i < found; i++) {
//		buf.write<int32>(steam_controller_origins[i]);
//	}
//
//	Result.kind = VALUE_REAL;
//	Result.val = found;
//}
//#pragma endregion
//
//#pragma region Analog action
/////
//YYEXPORT void /*double*/ steam_controller_get_analog_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* analogActionName) 
//{
//	DebugConsoleOutput("steam_controller_get_analog_id CALLED\n");
//
//	char* analogActionName = (char*) YYGetString(arg, 0);
//
//	DebugConsoleOutput(analogActionName);
//
//	if (!SteamController()) 
//	{
//		Result.kind = VALUE_INT64;
//		Result.v64 = -1;
//		return;
//	}
//
//	int i; 
//	if (steam_controller_actionsets.find_name(analogActionName, &i)) 
//	{
//		DebugConsoleOutput("OUT 1\n");
//		Result.kind = VALUE_INT64;
//		Result.v64 = i;
//		return;
//	}
//
//	ControllerDigitalActionHandle_t r = SteamController()->GetAnalogActionHandle(analogActionName);
//	if (r != 0) 
//	{
//		DebugConsoleOutput("OUT 2\n");
//		Result.kind = VALUE_INT64;
//		Result.v64 = steam_controller_analog.set(analogActionName, r);
//		return;
//	}
//	else 
//	{
//		DebugConsoleOutput("OUT 3\n");
//		Result.kind = VALUE_INT64;
//		Result.v64 = steam_controller_analog.set_noone(analogActionName);
//		return;
//	}
//}
//
//double steam_controller_get_analog_data(double controller, double analog_id, double _data_id)
//{
//	if (!SteamController())
//		return 0;
//
//	auto dat = (int)_data_id;
//	ControllerHandle_t q = steam_controller_find(controller);
//	if (q == 0)
//		return dat == 1 ? -1 : 0;
//
//	ControllerAnalogActionHandle_t t;
//	if (!steam_controller_analog.get(analog_id, &t))
//		return dat == 1 ? -1 : 0;
//
//	ControllerAnalogActionData_t d = SteamController()->GetAnalogActionData(q, t);
//
//	switch ((int)_data_id)
//	{
//		case 1: return (int)d.eMode;
//		case 2: return d.x;
//		case 3: return d.y;
//		default: return d.bActive;
//	}
//}
//
//YYEXPORT void steam_controller_get_analog_status(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
//{
//	double controller = YYGetReal(arg, 0);
//	double actionset_id = YYGetReal(arg, 1);
//
//	Result.kind = VALUE_REAL;
//	Result.val = steam_controller_get_analog_data(controller, actionset_id, 0);
//}
//
//YYEXPORT void steam_controller_get_analog_mode(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
//{
//	double controller = YYGetReal(arg, 0);
//	double actionset_id = YYGetReal(arg, 1);
//
//	Result.kind = VALUE_REAL;
//	Result.val = steam_controller_get_analog_data(controller, actionset_id, 1);
//}
//
//YYEXPORT void steam_controller_get_analog_x(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
//{
//	double controller = YYGetReal(arg, 0);
//	double actionset_id = YYGetReal(arg, 1);
//
//	Result.kind = VALUE_REAL;
//	Result.val = steam_controller_get_analog_data(controller, actionset_id, 2);
//}
//
//YYEXPORT void steam_controller_get_analog_y(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
//{
//	double controller = YYGetReal(arg, 0);
//	double actionset_id = YYGetReal(arg, 1);
//
//	Result.kind = VALUE_REAL;
//	Result.val = steam_controller_get_analog_data(controller, actionset_id,3);
//}
//
//double steam_controller_get_analog_origins_raw(double controller, double actionset_id, double digital_id, char* out) 
//{
//	if (!SteamController())
//		return 0;
//	
//	ControllerHandle_t ctl = steam_controller_find(controller);
//
//	if (ctl == 0)
//		return 0;
//
//	ControllerActionSetHandle_t set;
//	if (!steam_controller_actionsets.get(actionset_id, &set)) 
//		return 0;
//
//	ControllerDigitalActionHandle_t act = 4;
//	if (!steam_controller_analog.get(digital_id, &act)) 
//		return 0;
//
//	int found = SteamController()->GetAnalogActionOrigins(ctl, set, act, steam_controller_origins);
//	gml_ostream buf(out);
//
//	for (int i = 0; i < found; i++) 
//	{
//		buf.write<int32>(steam_controller_origins[i]);
//	}
//
//	return found;
//}
//#pragma endregion
//
//#pragma region Origin
//YYEXPORT void /*double*/ steam_controller_get_max_origins(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
//{
//	Result.kind = VALUE_REAL;
//	Result.val = STEAM_CONTROLLER_MAX_ORIGINS;
//	return;
//}
//#pragma endregion
