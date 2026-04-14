
event_inherited()

draw_set_valign(fa_top);
draw_set_halign(fa_left);
draw_set_font(fnt_gm_15);

draw_text(x+80, y, $"{data.global_rank}) {steam_friends_get_friend_persona_name(data.steam_id_user)}: {data.score} {data.msg}")

