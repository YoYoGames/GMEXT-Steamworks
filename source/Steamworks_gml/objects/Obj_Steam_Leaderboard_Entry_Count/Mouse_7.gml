
show_debug_message("POST steam_get_leaderboard_entry_count")

NumberOfEntries = steam_get_leaderboard_entry_count(SteamLeaderboard);

show_debug_message("Number of entries: " + string(NumberOfEntries))

if (NumberOfEntries >= 0)
{
	text = "Entries; " + string(NumberOfEntries)
}
