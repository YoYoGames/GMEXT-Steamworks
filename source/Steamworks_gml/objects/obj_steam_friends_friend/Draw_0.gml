
if(sprite_exists(avatar_sprite))
	draw_sprite_ext(avatar_sprite, 0, x, y,1,1,0,c_white,image_alpha);

draw_set_colour(c_yellow)
draw_set_valign(fa_top)
draw_set_halign(fa_left)
draw_set_font(fnt_gm_20)

if(print_info)
{
	var _x = x
	if(medium)
	{
		draw_set_font(fnt_gm_15)
		if(sprite_exists(avatar_sprite))
			_x += sprite_get_width(avatar_sprite)
	}
		
	draw_text(_x,y,$"({level}){name}\n{state_str}\n{relationship_str}")
}

