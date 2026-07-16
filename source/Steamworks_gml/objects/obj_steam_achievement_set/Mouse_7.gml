
var result = steam_userstats_set_achievement(achievement)
show_debug_message($"Set Achievement: {result}")
result = steam_userstats_store_stats()
show_debug_message($"Store Stats: {result}")
