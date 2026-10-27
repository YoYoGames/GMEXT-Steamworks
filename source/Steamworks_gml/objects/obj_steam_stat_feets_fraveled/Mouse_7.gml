
var _val = steam_userstats_get_stat_float(stat)
if(!is_undefined(_val))
{
	steam_userstats_set_stat_float(stat, _val + random(1000));
	
	var result = steam_userstats_store_stats()
	show_debug_message($"Store Stats: {result}")
}
