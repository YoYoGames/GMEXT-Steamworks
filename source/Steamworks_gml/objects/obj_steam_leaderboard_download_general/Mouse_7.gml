
//steam_create_leaderboard(SteamLeaderboard, lb_sort_ascending, lb_disp_numeric);;

request = steam_download_scores(SteamLeaderboard, 1, 10)

with(Obj_Steam_Leaderboard_Entry)
	instance_destroy()
