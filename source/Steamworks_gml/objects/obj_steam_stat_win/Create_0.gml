
event_inherited();

text = "+1 Win";
stat = "NumWins";

limits = steam_userstats_achievement_progress_int("ACH_TRAVEL_FAR_ACCUM");
show_debug_message($"Progress limits for achievement = {limits}");
