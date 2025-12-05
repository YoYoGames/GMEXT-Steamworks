
event_inherited();

draw_set_color(c_white);
draw_set_font(-1);

var _x = 100;
var _y = 125;

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
