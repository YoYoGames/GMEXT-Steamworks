
event_inherited();

draw_set_font(fnt_gm_15)
draw_set_valign(fa_top)
draw_set_halign(fa_left)

draw_text(50,100,"Lobby ID: " + string(steam_lobby_get_lobby_id()))

draw_text(50,130,"Is Owner?: " + string(steam_lobby_is_owner()))
draw_text(50,160,"Owner: " + string(steam_lobby_get_owner_id()))

draw_text(50,190,"Ping: " + string(rtt_curr) + "ms")

draw_text(50,220,"Players: " + string(steam_lobby_get_member_count()))
for(var a = 0 ; a < steam_lobby_get_member_count() ; a++)
	draw_text(50,250+a*30,string(a)+") "+ string(steam_lobby_get_member_id(a)))


