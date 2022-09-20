
if(locked)
	image_index = 2
else
if(mouse_check_button(mb_left) and point_in_rectangle(mouse_x,mouse_y,bbox_left,bbox_top,bbox_right,bbox_bottom))
	image_index = 0
else
	image_index = 1
