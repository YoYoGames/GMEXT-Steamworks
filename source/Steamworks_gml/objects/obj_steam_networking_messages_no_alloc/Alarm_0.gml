alarm[0] = 3;

instance_create_depth(mouse_x, mouse_y, 0, obj_steam_networking_circle).image_blend = c_red;

var _steam_id = selected_friend_get();
if (!is_undefined(_steam_id))
{
	circle_send(_steam_id, mouse_x, mouse_y, c_red);
}
