
event_inherited();

text = "GamePad"
input_result = ""

steam_utils_set_callback_gamepad_text_input_dismissed(function(data){
		var entered = steam_utils_get_entered_gamepad_text_input();
		input_result = (data.submitted ? "Submitted: " : "Cancelled: ") + (entered ?? "");
	})
//steam_utils_clear_callback_gamepad_text_input_dismissed()

steam_utils_set_callback_floating_gamepad_text_input_dismissed(function(data){
		var entered = steam_utils_get_entered_gamepad_text_input();
		input_result = (entered ?? "");
	})

steam_utils_set_callback_warning_message(function(data){
		// Warning callback for debugging if needed
	})

