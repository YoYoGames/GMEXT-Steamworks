
var file = working_directory + "Screenshot.png";
show_debug_message(file);
screen_save(file);

var result = steam_screenshots_add_screenshot_to_library(
	file,
	"",
	window_get_width(),
	window_get_height());
show_debug_message($"[Screenshot] Added to library, result={result}");

