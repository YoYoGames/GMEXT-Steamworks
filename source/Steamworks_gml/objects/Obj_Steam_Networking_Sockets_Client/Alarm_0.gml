
alarm[0] = 3

instance_create_depth(mouse_x,mouse_y,0,obj_steam_networking_circle).image_blend = c_red

var b = buffer_create(8, buffer_fixed, 1);//4+2+2
buffer_write(b, buffer_u32, c_red);//4
buffer_write(b, buffer_u16, mouse_x);//2
buffer_write(b, buffer_u16, mouse_y);//2
		
var res = steam_networking_sockets_send_message_to_connection(
    net_connection,
    b,
    buffer_tell(b),
    SteamNetworkingSendFlags.Reliable
);
		
buffer_delete(b);
		
