
//steam_create_leaderboard(SteamLeaderboard, lb_sort_ascending, lb_disp_numeric);;

steam_userstats_find_leaderboard(SteamLeaderboard, function(data){
	if (!data.leaderboard_found) {
		show_debug_message("[Leaderboard] ERROR: Leaderboard not found");
		return;
	}

	request = steam_userstats_download_leaderboard_entries(data.leaderboard_handle, SteamLeaderboardDataRequest.Friends, 1, 5, function(data){
		show_debug_message(data);

		if (!struct_exists(data, "entry_count") || data.entry_count <= 0) {
			show_debug_message("[Leaderboard] ERROR: Failed to download entries or no entries found");
			return;
		}

		for (var i = 0; i < data.entry_count; i++) {
			var struct = steam_userstats_downloaded_leaderboard_entry(data.entries_handle, i);
			
			struct.msg = "";

			if (struct_exists(struct, "details") && array_length(struct.details) > 0) {
				var details_buffer = buffer_create(array_length(struct.details) * 4, buffer_fixed, 1);
				for (var j = 0; j < array_length(struct.details); j++) {
					buffer_write(details_buffer, buffer_s32, struct.details[j]);
				}
				buffer_seek(details_buffer, buffer_seek_start, 0);

				var num = buffer_read(details_buffer, buffer_u8);
				var str = buffer_read(details_buffer, buffer_string);
				struct.msg = str;

				buffer_delete(details_buffer);
			}

			struct.steam_id = struct.steam_id_user;
			instance_create_depth(800, 110 + i * 80, 0, obj_steam_leaderboard_entry, {data: struct, medium: true, print_info: false});
		}
	});
});

with(obj_steam_leaderboard_entry)
	instance_destroy()
