
var _val
_val = steam_userstats_get_stat_int("NumGames")
if(!is_undefined(_val))
	steam_userstats_set_stat_int("NumGames",_val + 1);

_val = steam_userstats_get_stat_int(stat)
if(!is_undefined(_val))
	steam_userstats_set_stat_int(stat,_val + 1);
