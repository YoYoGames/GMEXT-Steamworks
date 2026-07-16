
var _val
_val = steam_userstats_get_stat_int("NumGames")
if(!is_undefined(_val))
	steam_userstats_set_stat_int("NumGames",_val + 1)

_val = steam_userstats_get_stat_int(stat)
if(!is_undefined(_val))
	steam_userstats_set_stat_int(stat, _val + 1)

// ACH_WIN_100_GAMES is not actually linked to a stat, sadly, but this is how it would work
// if the achievement was linked
_val = steam_userstats_get_stat_int(stat)
if(!is_undefined(_val))
	steam_userstats_indicate_achievement_progress("ACH_WIN_100_GAMES", 100, 100);
