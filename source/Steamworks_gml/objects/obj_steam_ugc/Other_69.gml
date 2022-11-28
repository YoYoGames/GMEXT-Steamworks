
if(async_load[?"event_type"] == "ugc_query")
{
	with(Obj_Steam_UGC_Item)
		instance_destroy()
	
	if(ds_map_exists(async_load,"results_list"))
	{
		var list = async_load[?"results_list"]
		
		for(var a = 0 ; a < ds_list_size(list) && a < 4 ; a++)
		{
			var item_map = list[|a]
			with(instance_create_depth(500, 350 + a*100, depth, Obj_Steam_UGC_Item))
			{
				text = "Item " + string(a);
				item = item_map[?"published_file_id"];
				handle_preview_file = item_map[?"handle_preview_file"];
			}
		}
	}
}

