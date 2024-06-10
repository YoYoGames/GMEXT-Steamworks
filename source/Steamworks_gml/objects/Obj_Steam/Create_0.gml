
// This variable is used for game_restart() purposes.
is_game_restarting = false;

randomize();

#macro SteamLeaderboard "YYLeaderboard_10/29/21--"

if (steam_initialised()) room_goto(Room_Steam_Main);

handle = -1;