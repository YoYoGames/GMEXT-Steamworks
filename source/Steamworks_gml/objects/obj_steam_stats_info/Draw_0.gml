
draw_set_font(fnt_gm_15);
draw_set_valign(fa_top);
draw_set_halign(fa_left);

var _i = 0;

draw_text(50, 100 + _i++ * 30,$"NumGames: {steam_userstats_get_stat_int("NumGames")}")
draw_text(50, 100 + _i++ * 30,$"NumWins: {steam_userstats_get_stat_int("NumWins")}")
draw_text(50, 100 + _i++ * 30,$"NumLosses: {steam_userstats_get_stat_int("NumLosses")}")
draw_text(50, 100 + _i++ * 30,$"FeetTraveled: : {steam_userstats_get_stat_float("FeetTraveled")}")
draw_text(50, 100 + _i++ * 30,$"AverageSpeed: : {steam_userstats_get_stat_float("AverageSpeed")}")

