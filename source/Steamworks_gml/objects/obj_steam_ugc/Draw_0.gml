
draw_set_font(fnt_gm_15)
draw_set_valign(fa_top);
draw_set_halign(fa_left);

draw_text(50,100,$"subscribed_items: {steam_ugc_get_num_subscribed_items(false)}")

