
event_inherited();

draw_set_font(fnt_gm_15)
draw_set_valign(fa_top)
draw_set_halign(fa_left)

draw_text(50,100,$"Lobby ID: {global.lobby_id}")

draw_text(50,120,$"Owner: {steam_matchmaking_get_lobby_owner(global.lobby_id)}")

var count = steam_matchmaking_get_num_lobby_members(global.lobby_id)
draw_text(50,140,$"Members: {count}")
for(var a = 0 ; a < count ; a++)
{
	draw_text(50,160+a*20,$"{a}) {steam_matchmaking_get_lobby_member_by_index(global.lobby_id,a)}")
}

