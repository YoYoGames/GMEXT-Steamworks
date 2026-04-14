
var struct = steam_userstats_get_stat_float(stat)
if(struct.ok)
	steam_userstats_set_stat_float(stat, struct.data + random(1000));
