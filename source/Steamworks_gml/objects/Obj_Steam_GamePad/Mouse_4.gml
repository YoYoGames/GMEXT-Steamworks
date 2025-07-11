

//if(!steam_utils_is_steam_in_big_picture_mode()) //This return false running from GameMaker IDE
//{
//	show_message_async("Gamepad need Big Picture mode!")
//	return
//}



// show the dialog:
steam_show_gamepad_text_input(
	steam_gamepad_text_input_mode_normal,
	steam_gamepad_text_input_line_mode_single_line,
	"Some Description",
	100, // up to 100 string characters
	"" // no default text, can be any string, ex: "Player 1" etc
);

