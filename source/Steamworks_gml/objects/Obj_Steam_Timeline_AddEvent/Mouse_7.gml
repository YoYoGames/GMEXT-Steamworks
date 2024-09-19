
var r = steam_add_timeline_event(
	tmIcon,
	tmTitle,
	tmDescription,
	tmPriority,
	tmStartOffsetSeconds,
	tmDurationSeconds,
	tmPossibleClip
)
show_debug_message("steam_add_timeline_event call result is " + string(r))
