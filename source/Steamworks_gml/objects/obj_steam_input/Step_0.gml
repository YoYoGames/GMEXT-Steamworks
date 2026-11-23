
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
        input_effect_param.trigger_mask = SteamInputTriggerEffectTriggerMask.L2 | SteamInputTriggerEffectTriggerMask.R2;
        // --
        input_effect_param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_L2].mode = SteamInputTriggerEffectMode.VIBRATION;
        var vibparam = input_effect_param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_L2].command_data.vibration_param;
        vibparam.position = 1;
        vibparam.frequency = 10;
        vibparam.amplitude = 8;
        // --
        //input_effect_param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].mode = SteamInputTriggerEffectMode.WEAPON;
        //var wparam = input_effect_param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].command_data.weapon_param;
        //wparam.start_position = 2;
        //wparam.end_position = 5;
        //wparam.strength = 8;
        // --
        input_effect_param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].mode = SteamInputTriggerEffectMode.MULTIPLE_POSITION_VIBRATION;
        var mpvibparam = input_effect_param.command[STEAM_INPUT_TRIGGER_EFFECT_PARAM_INDEX_FOR_R2].command_data.multiple_position_vibration_param;
        mpvibparam.frequency = 10;
        // 0, 1, 2, 3, 4, 5, 6, 7, 8, 8 sequence
        for (var n = 0; n < STEAM_INPUT_TRIGGER_EFFECT_CONTROL_POINT_NUM; ++n)
            mpvibparam.amplitude[n] = (n == 9) ? 8 : n;
        // --
        steam_input_set_dualsense_trigger_effect(controllers[i], input_effect_param);
	}
}


