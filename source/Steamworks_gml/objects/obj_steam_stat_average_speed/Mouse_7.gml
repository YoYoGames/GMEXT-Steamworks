
var sessionCount = random(1000);
var sessionLength = random(2000);
steam_userstats_update_avg_rate_stat(stat, sessionCount, sessionLength);

var result = steam_userstats_store_stats()
show_debug_message($"Store Stats: {result}")
