/// @description Initialize Steam Input
// Feather disable GM2017

controllers = []

steam_input_set_callback_device_connected(function(data) {
    show_debug_message($"CONNECTED: {data.controller_handle}");
	input_setup()
});

steam_input_set_callback_device_disconnected(function(ev) {
    show_debug_message($"DISCONNECTED: {ev.controller_handle}");
});

steam_input_init(true);
steam_input_enable_device_callbacks();

input_setup_done = false
function input_setup()
{
	if(input_setup_done)
		return
	
	input_setup_done = true
	
	action_sets = {
		ship_controls: steam_input_get_action_set_handle( "ship_controls" ),
		menu_controls: steam_input_get_action_set_handle( "menu_controls" ),
		thrust_action_layer: steam_input_get_action_set_handle( "thrust_action_layer" )
	};
		
	digital_actions = {
		turn_left: steam_input_get_digital_action_handle( "turn_left" ),
		turn_right: steam_input_get_digital_action_handle( "turn_right" ),
		forward_thrust: steam_input_get_digital_action_handle( "forward_thrust" ),
		backward_thrust: steam_input_get_digital_action_handle( "backward_thrust" ),
		fire_lasers: steam_input_get_digital_action_handle( "fire_lasers" ),
		pause_menu: steam_input_get_digital_action_handle( "pause_menu" ),

		menu_up: steam_input_get_digital_action_handle( "menu_up" ),
		menu_down: steam_input_get_digital_action_handle( "menu_down" ),
		menu_left: steam_input_get_digital_action_handle( "menu_left" ),
		menu_right: steam_input_get_digital_action_handle( "menu_right" ),
		menu_select: steam_input_get_digital_action_handle( "menu_select" ),
		menu_cancel: steam_input_get_digital_action_handle( "menu_cancel" )
	}

	analog_actions = {
		analog_controls: steam_input_get_analog_action_handle( "analog_controls" )
	};

	spriteMap = {};
	function button_sprite_exists(path) {
		if (!variable_struct_exists(spriteMap, path)) {
			var _spr = sprite_add(path, 1, false, false, 0, 0);
			//sprite_set_offset(_spr, sprite_get_width(_spr)/2, sprite_get_height(_spr)/2);
			variable_struct_set(spriteMap, path, _spr);
			show_debug_message("Loaded origin png " + path);
		}
		return variable_struct_get(spriteMap, path);
	};

	function showFloatingKeyboard() {
		// Steam "Modern" keyboard example:
		// does not always work, this seems to be a Steam issue, I've double checked everything on my end
		return steam_utils_show_floating_gamepad_text_input(
			SteamUtilsFloatingGamepadTextInputMode.SingleLine,
			// in Display coordinates: use window_get_* and display_get_*
			window_get_x(),
			window_get_y()/2,
			window_get_width(),
			window_get_height()/2
		);	
	};



	// Steam Input <-> Dual Sense stuff, taken from Steamworks's isteamdualsense.h
	if(false)
	steam_input_set_dual_sense_trigger_effect(
		0, //< !YOUR INPUT HANDLE GOES HERE, MUST BE NONZERO!
		{
			// which triggers to modify, L2, R2, or both
			trigger_mask: steam_input_sce_pad_trigger_effect_trigger_mask_l2 | steam_input_sce_pad_trigger_effect_trigger_mask_r2,
			// must be a valid array of 2 elements, always
			command:
			[
				// L2 data:
				{
					mode: steam_input_sce_pad_trigger_effect_mode_multiple_position_vibration,
					// command_data must be a valid struct, never undefined
					command_data:
					{
						// if mode_off then no fields from command_data will be read, otherwise:
						feedback_param:
						{
							// if mode_feedback
							position: 0, /*E position where the strength of target trigger start changing(0~9). */
							strength: 0  /*E strength that the motor arm pushes back target trigger(0~8 (0: Same as Off mode)). */
						},
						weapon_param:
						{
							// if mode_weapon
							start_position: 0, /*E position where the stiffness of trigger start changing(2~7). */
							end_position: 0,   /*E position where the stiffness of trigger finish changing(start_position+1~8). */
							strength: 0        /*E strength of gun trigger(0~8 (0: Same as Off mode)). */
						},
						vibration_param:
						{
							// if mode_vibration
							position: 0,  /*E position where the motor arm start vibrating(0~9). */
							amplitude: 0, /*E vibration amplitude(0~8 (0: Same as Off mode)). */
							frequency: 0, /*E vibration frequency(0~255[Hz] (0: Same as Off mode)). */
						},
						multiple_position_feedback_param:
						{
							// if mode_multiple_position_feedback
							/*E strength that the motor arm pushes back target trigger at position(0~8 (0: Same as Off mode)).
								*  strength[0] means strength of motor arm at position0.
								*  strength[1] means strength of motor arm at position1.
								*  ...
								* */
							strength: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
						},
						slope_feedback_param:
						{
							// if mode_slope_feedback
							start_position: 0, /*E position where the strength of target trigger start changing(0~end_position). */
							end_position: 0,   /*E position where the strength of target trigger finish changing(start_position+1~9). */
							start_strength: 0, /*E strength when trigger's position is start_position(1~8) */
							end_strength: 0    /*E strength when trigger's position is end_position(1~8) */
						},
						multiple_position_vibration_param:
						{
							// if mode_multiple_position_vibration
							frequency: 0, /*E vibration frequency(0~255 (0: Same as Off mode)) */
							/*E vibration amplitude at position(0~8 (0: Same as Off mode)).
								*  amplitude[0] means amplitude of vibration at position0.
								*  amplitude[1] means amplitude of vibration at position1.
								*  ...
								* */
							amplitude: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
						}
					}
				},
				// R2 data: even if your mask tells "only l2", you must still include the dummy r2 field:
				{
					mode: steam_input_sce_pad_trigger_effect_mode_off,
					command_data:
					{
						// must be present even when mode_off
					}
				}
			]
		}
	);
}

