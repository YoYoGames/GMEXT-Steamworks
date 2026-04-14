
event_inherited();

var struct = steam_userstats_get_achievement(achievement)

if(struct.ok)
	locked = struct.achieved 
else
	locked = true
