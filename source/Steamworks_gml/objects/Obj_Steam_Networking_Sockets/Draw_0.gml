
event_inherited();

/// obj_steam_sockets_demo - Draw

draw_set_color(c_white);
draw_set_font(-1); // default font

var _x = 500;
var _y = 16;

draw_text(_x, _y, "Steam Net Sockets Demo (Socket Pair)");
_y += 24;
draw_text(_x, _y, "Press SPACE to send A -> B");
_y += 16;
draw_text(_x, _y, "Hold LEFT SHIFT + SPACE to send B -> A");
_y += 24;

for (var i = 0; i < array_length(log); i++) {
    draw_text(_x, _y, log[i]);
    _y += 16;
}
