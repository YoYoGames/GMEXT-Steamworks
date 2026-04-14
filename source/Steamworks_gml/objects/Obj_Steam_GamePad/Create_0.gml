
event_inherited();

text = "GamePad"

steam_utils_set_callback_gamepad_text_input_dismissed(function(data){
		show_debug_message(data)
	})
//steam_utils_clear_callback_gamepad_text_input_dismissed()

steam_utils_set_callback_floating_gamepad_text_input_dismissed(function(data){
		show_debug_message(data)
	})
//steam_utils_clear_callback_floating_gamepad_text_input_dismissed()

steam_utils_set_callback_warning_message(function(data){
		show_debug_message(data)
	})
//steam_utils_clear_callback_warning_message()

