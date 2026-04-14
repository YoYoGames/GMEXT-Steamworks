
if(mouse_check_button_pressed(mb_left))
if(sprite_exists(avatar_sprite))
if(point_in_rectangle(mouse_x,mouse_y,x,y,x+sprite_get_width(avatar_sprite),y+sprite_get_height(avatar_sprite)))
{
	if(only_one)
	{
		var _id = id
		with(object_index)
		if(_id != self.id)
		{
			selected = false
		}
		
		selected = true
	}
	else
		selected = !selected
}

if(selected)
	image_alpha = 1.0
else
	image_alpha = 0.5
