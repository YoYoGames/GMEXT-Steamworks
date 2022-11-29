/// @description Game restart (part 2)

// This prsents a game restart implementation example
// When we reach the game end event we are either closing or restarting the game
// we now check our flag variable and we call 'steam_shutdown' only if not restarting
if (is_game_restarting == false) {
	steam_shutdown();
}

