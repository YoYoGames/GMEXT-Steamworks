
draw_set_font(fnt_gm_15);
draw_set_valign(fa_top);
draw_set_halign(fa_left);

var _i = 0;

draw_text(50, 100 + _i++ * 30,"steam_stats_ready: " + string(steam_stats_ready()))

draw_text(50, 100 + _i++ * 30,"NumGames: " + string(steam_get_stat_int("NumGames")))
draw_text(50, 100 + _i++ * 30,"NumWins: " + string(steam_get_stat_int("NumWins")))
draw_text(50, 100 + _i++ * 30,"NumLosses: " + string(steam_get_stat_int("NumLosses")))
draw_text(50, 100 + _i++ * 30,"FeetTraveled: " + string(steam_get_stat_float("FeetTraveled")))
draw_text(50, 100 + _i++ * 30,"AverageSpeed: " + string(steam_get_stat_float("AverageSpeed")))
draw_text(50, 100 + _i++ * 30,"Global Players: " + Obj_Steam_Global_Stats.globalplayers)
