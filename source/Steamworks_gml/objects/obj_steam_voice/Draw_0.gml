
// Highlight friends we are currently hearing.
draw_set_colour(c_lime);
with (obj_steam_friends_friend_select)
{
	if (sprite_exists(avatar_sprite) && other.voice_is_speaking(data.steam_id))
	{
		var _w = sprite_get_width(avatar_sprite);
		var _h = sprite_get_height(avatar_sprite);
		draw_rectangle(x - 3, y - 3, x + _w + 2, y + _h + 2, true);
		draw_rectangle(x - 4, y - 4, x + _w + 3, y + _h + 3, true);
	}
}

// Status panel.
var _x = 820;
var _y = 120;

draw_set_halign(fa_left);
draw_set_valign(fa_top);
draw_set_font(fnt_gm_20);
draw_set_colour(c_white);
draw_text(_x, _y, "Steam Voice (P2P)");
_y += 40;

draw_set_font(fnt_gm_15);
draw_set_colour(c_silver);
draw_text(_x, _y, "Select friends on the left to\nsend your voice to them.");
_y += 50;
draw_text(_x, _y, "Hold [V] to talk");
_y += 25;
draw_text(_x, _y, $"[L] Loopback: {loopback ? "ON" : "OFF"}");
_y += 40;

var _mic_state = ptt_held ? "TALKING" : (recording ? "finishing..." : "idle");
draw_set_colour(recording ? c_red : c_dkgray);
draw_circle(_x + 8, _y + 10, 8, false);
draw_set_colour(c_white);
draw_text(_x + 24, _y, $"Mic: {_mic_state}");
_y += 30;

draw_text(_x, _y, $"Sample rate: {sample_rate} Hz");
_y += 25;
draw_text(_x, _y, $"Available: {available_bytes} bytes");
_y += 25;
draw_text(_x, _y, $"Sent: {sent_packets} pkts / {sent_bytes} bytes");
_y += 25;
draw_text(_x, _y, $"Received: {received_packets} pkts / {received_bytes} bytes");
_y += 25;
if (!is_undefined(last_error))
{
	draw_set_colour(c_orange);
	draw_text(_x, _y, $"Last voice error: {last_error}");
	draw_set_colour(c_white);
}
_y += 40;

draw_text(_x, _y, "Speaking now:");
_y += 25;
var _keys = struct_get_names(speakers);
for (var _i = 0; _i < array_length(_keys); _i++)
{
	var _speaker = speakers[$ _keys[_i]];
	if (!voice_is_speaking(_speaker.steam_id)) continue;

	var _name = (_speaker.steam_id == my_steam_id) ? "You (loopback)" : steam_friends_get_friend_persona_name(_speaker.steam_id);
	draw_set_colour(c_lime);
	draw_text(_x + 16, _y, _name);
	_y += 25;
}
draw_set_colour(c_white);
