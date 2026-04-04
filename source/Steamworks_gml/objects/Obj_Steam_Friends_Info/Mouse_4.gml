
show_debug_message("----------------")
show_debug_message(steam_get_friends_game_info(steam_friends_flags_blocked))
show_debug_message(steam_get_friends_game_info(steam_friends_flags_immediate))//default
show_debug_message(steam_get_friends_game_info())

show_debug_message("----------------")
show_debug_message(steam_get_friends(steam_friends_flags_immediate))
