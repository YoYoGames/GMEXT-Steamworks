
steam_input_run_frame();

controllers = steam_input_get_connected_controllers();
if(array_length(controllers))
{
	input_setup()
}

for(var i = 0; i < array_length(controllers); i++)
{
    steam_input_activate_action_set(controllers[i], action_sets.menu_controls);
	var contype = steam_input_get_input_type_for_handle(controllers[i]);
	if (contype == SteamInputType.PS5Controller)
    {
        // -- adaptive trigger effects example
        var vibparam = new SteamInputTriggerEffectVibrationParam();
        vibparam.position = 1;
        vibparam.frequency = 10;
        vibparam.amplitude = 8;
        var modevibparam = SteamInputTriggerEffectMode.VIBRATION;
        // --
        //var wparam = new SteamInputTriggerEffectWeaponParam();
        //wparam.start_position = 2;
        //wparam.end_position = 5;
        //wparam.strength = 8;
        //var modewparam = SteamInputTriggerEffectMode.WEAPON;
        // --
        var mpvibparam = new SteamInputTriggerEffectMultiplePositionVibrationParam();
        mpvibparam.frequency = 10;
        mpvibparam.amplitude = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 8 ];
        var modempvibparam = SteamInputTriggerEffectMode.MULTIPLE_POSITION_VIBRATION;
        // --
        var trigmask = SteamInputTriggerEffectTriggerMask.L2 | SteamInputTriggerEffectTriggerMask.R2;
		var param = new SteamInputTriggerEffectParam();
        param.trigger_mask = trigmask;
        param.command = [ new SteamInputTriggerEffectCommand(), new SteamInputTriggerEffectCommand() ];
        // --
        param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_L2].mode = modevibparam;
        param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_L2].command_data = new SteamInputTriggerEffectCommandData();
        param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_L2].command_data.vibration_param = vibparam;
        // --
        //param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].mode = modewparam;
        param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].mode = modempvibparam;
        param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].command_data = new SteamInputTriggerEffectCommandData();
        //param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].command_data.weapon_param = wparam;
        param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].command_data.multiple_position_vibration_param = mpvibparam;
        steam_input_set_dualsense_trigger_effect(controllers[i], param);
	}
}


