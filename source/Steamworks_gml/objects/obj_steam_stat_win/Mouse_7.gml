
var _struct
_struct = steam_userstats_get_stat_int("NumGames")
if(_struct.ok)
	steam_userstats_set_stat_int("NumGames",_struct.data + 1)

_struct = steam_userstats_get_stat_int(stat)
if(_struct.ok)
	steam_userstats_set_stat_int(stat, _struct.data + 1)

// ACH_WIN_100_GAMES is not actually linked to a stat, sadly, but this is how it would work
// if the achievement was linked
_struct = steam_userstats_get_stat_int(stat)
if(_struct.ok)
	steam_userstats_indicate_achievement_progress("ACH_WIN_100_GAMES", 100, 100);
