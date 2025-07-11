
show_debug_message("----------------")
show_debug_message(steam_get_friends_game_info(STEAMWORKS_FRIENDS_FLAGS.BLOCKED))
show_debug_message(steam_get_friends_game_info(STEAMWORKS_FRIENDS_FLAGS.IMMEDIATE))//default
show_debug_message(steam_get_friends_game_info())

show_debug_message("----------------")
show_debug_message(steam_get_friends(STEAMWORKS_FRIENDS_FLAGS.IMMEDIATE))
