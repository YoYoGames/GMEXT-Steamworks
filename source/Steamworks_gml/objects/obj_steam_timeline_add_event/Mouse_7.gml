
var r = steam_timeline_add_range_timeline_event(
	tmTitle,
	tmDescription,
	tmIcon,
	tmPriority,
	tmStartOffsetSeconds,
	tmDurationSeconds,
	tmPossibleClip
)
show_debug_message($"steam_timeline_add_event call result is {r}")
