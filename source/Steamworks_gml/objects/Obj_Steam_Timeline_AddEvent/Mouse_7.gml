
var r = steam_timeline_add_event(
	tmIcon,
	tmTitle,
	tmDescription,
	tmPriority,
	tmStartOffsetSeconds,
	tmDurationSeconds,
	tmPossibleClip
)
show_debug_message("steam_timeline_add_event call result is " + string(r))
