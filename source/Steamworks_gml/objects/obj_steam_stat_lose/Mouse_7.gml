
var _struct
_struct = steam_userstats_get_stat_int("NumGames")
if(struct.ok)
	steam_userstats_set_stat_int("NumGames",struct.data + 1);

_struct = steam_userstats_get_stat_int(stat)
if(struct.ok)
	steam_userstats_set_stat_int(stat,struct.data + 1);
