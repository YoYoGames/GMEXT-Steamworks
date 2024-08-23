
event_inherited();

text = "+1 Win";
stat = "NumWins";

limits = steam_get_achievement_progress_limits_int("ACH_TRAVEL_FAR_ACCUM");
show_debug_message("Progress limits for achievement = " + string(limits));
