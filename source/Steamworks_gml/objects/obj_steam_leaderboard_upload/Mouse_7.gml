
show_debug_message("POST steam_create_leaderboard")

upload_ID = steam_upload_score_ext(SteamLeaderboard, irandom(1000), true);

show_debug_message("upload_ID: " + string(upload_ID))
