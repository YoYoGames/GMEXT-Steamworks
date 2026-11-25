// Status panel.
var _x = 820;
var _y = 120;
var _line = 26;

draw_set_halign(fa_left);
draw_set_valign(fa_top);
draw_set_colour(c_white);

draw_set_font(fnt_gm_20);
draw_text(_x, _y, batch_mode ? "Mode: batches (B)" : "Mode: one at a time (B)");
_y += _line * 1.5;

draw_set_font(fnt_gm_15);
draw_text(_x, _y, "S: send a burst    L: send a large message");
_y += _line * 1.5;
draw_text(_x, _y, $"Receive buffer: {buffer_get_size(receive_buffer)} bytes");
_y += _line;
draw_text(_x, _y, $"Circles received: {received_total}");
_y += _line;
if (last_sender != 0)
{
	draw_text(_x, _y, $"Last circle from: {steam_friends_get_friend_persona_name(last_sender)}");
	_y += _line;
}
draw_text(_x, _y, $"Held while the batch buffer was full: {held_total}");
_y += _line;
draw_text(_x, _y, $"Batches in the last busy frame: {batches_last_busy_frame}");
_y += _line;
draw_text(_x, _y, $"Discarded as too large: {discarded_total}");
