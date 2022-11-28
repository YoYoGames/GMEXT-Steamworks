/// @description Update Steam Input

// Feather disable GM2017
// Not required, but preferred for minimal latency
steam_input_run_frame();

controllers = steam_input_get_connected_controllers();
update_handles();

var i = 0;
repeat (gamepad_get_device_count()) {
	if (gamepad_button_check_pressed(i++, gp_face4)) {
		show_debug_message("floating show result = " + string(showFloatingKeyboard()));
		break;
	}
}

if (mouse_check_button_pressed(mb_right)) {
	window_set_cursor(cr_beam);
	show_debug_message("floating show result = " + string(showFloatingKeyboard()));
	gc_collect();
}
