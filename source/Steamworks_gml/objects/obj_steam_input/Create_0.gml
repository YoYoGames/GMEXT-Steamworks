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



	// DualSense trigger effects are not in the demo yet: steam_input_set_dualsense_trigger_effect is missing from 3.0.0 (#204)
}

