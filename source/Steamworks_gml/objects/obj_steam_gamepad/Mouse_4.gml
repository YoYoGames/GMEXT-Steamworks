

var success = steam_utils_show_gamepad_text_input(
	SteamUtilsGamepadTextInputMode.Normal,
	SteamUtilsGamepadTextInputLineMode.SingleLine,
	"Enter Player Name",
	100,
	""
);

if(!success) {
	success = steam_utils_show_floating_gamepad_text_input(
		SteamUtilsFloatingGamepadTextInputMode.SingleLine,
		x - 50,
		y + 50,
		200,
		40
	);
}

if(success) {
	input_result = "Waiting for input...";
}

