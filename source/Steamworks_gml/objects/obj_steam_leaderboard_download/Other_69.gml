
if(async_load[?"event_type"] == "leaderboard_download")
if(async_load[?"id"] == request)
if(async_load[?"num_entries"])
{
	var entries = ds_map_find_value(async_load, "entries");
    var map = json_decode(entries);
    if ds_map_exists(map, "default")
    {
        ds_map_destroy(map);
        exit;
    }
    else
    {
        var list = ds_map_find_value(map, "entries");
        var len = ds_list_size(list);
        var entry;
        for(var i = 0; i < len; i++;)
        {
            entry = list[| i];			
			with(instance_create_depth(800, 110 + i*120, 0, Obj_Steam_Leaderboard_Entry))
			{
				rank = entry[? "rank"];
				score_ = entry[? "score"];
				name = entry[? "name"];
				userID = entry[? "userID"];
			
				if (!is_undefined(entry[? "data"])) {
					var buff = buffer_base64_decode(entry[?"data"]);
					var level = buffer_read(buff, buffer_u8);
					var str = buffer_read(buff, buffer_string);
			
					data = str + " (" + string(level) + ")";
				}
				else data = "";
			}
        }
    }
    ds_map_destroy(map)
}
