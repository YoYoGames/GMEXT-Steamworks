
show_debug_message("POST steam_create_leaderboard")

var buff = buffer_create(256, buffer_fixed, 1);

buffer_write(buff, buffer_u8, irandom(100));
buffer_write(buff, buffer_string,steam_get_persona_name() + " was here :)");

upload_ID = steam_upload_score_buffer_ext(SteamLeaderboard, irandom(1000), buff, true);

buffer_delete(buff);

show_debug_message("upload_ID: " + string(upload_ID))
