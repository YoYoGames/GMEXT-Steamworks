
var file = working_directory + "Screenshot.png"
show_debug_message(file)
screen_save(file)

// This will send a previously saved screenshot image to your steam account
show_debug_message(steam_screenshots_add_screenshot_to_library(
	file, 
	"", //If empty steam will auto generate the Thumbnail
	window_get_width(), 
	window_get_height()));

