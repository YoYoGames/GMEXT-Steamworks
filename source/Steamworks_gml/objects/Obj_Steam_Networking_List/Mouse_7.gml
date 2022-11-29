
with(Obj_Steam_Networking_List_Slot)
	instance_destroy()

steam_lobby_list_add_string_filter("isGameMakerTest","true",steam_lobby_list_filter_eq)
steam_lobby_list_request()

//steam_lobby_list_is_loading()
//
//steam_lobby_list_add_numerical_filter()
//steam_lobby_list_add_near_filter() 
//steam_lobby_list_add_distance_filter()





