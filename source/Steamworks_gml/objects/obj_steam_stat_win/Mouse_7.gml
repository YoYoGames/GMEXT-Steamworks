
steam_set_stat_int("NumGames", steam_get_stat_int("NumGames") + 1)
steam_set_stat_int(stat, steam_get_stat_int(stat) + 1)
// ACH_WIN_100_GAMES is not actually linked to a stat, sadly, but this is how it would work
// if the achievement was linked
steam_indicate_achievement_progress("ACH_WIN_100_GAMES", steam_get_stat_int(stat), 100);
