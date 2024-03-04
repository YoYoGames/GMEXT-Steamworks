
// This only applies to global stats marked as int64 in steamworks dashboard
show_debug_message(steam_get_global_stat_int("NumWins"))
steam_get_global_stat_history_int("NumWins")

// This only applies to global stats marked as real in steamworks dashboard
show_debug_message(steam_get_global_stat_real("WalkedDist"))
steam_get_global_stat_history_real("WalkedDist")

show_debug_message(steam_get_achievement_achieved_percent("Winner"))

