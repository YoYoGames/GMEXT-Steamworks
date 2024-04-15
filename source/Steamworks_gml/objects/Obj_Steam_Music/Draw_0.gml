var _i = 0;

draw_set_font(fnt_gm_15)
draw_set_valign(fa_top);
draw_set_halign(fa_left);

draw_text(50,100+_i *25 ,"playback_enabled: " + string(steam_music_is_enabled()))
draw_text(50,100+ ++_i *25,"playback_is_playing (returns true even if is paused): " + string(steam_music_is_playing()))

var _playback_status = ""

switch (steam_music_get_status()){

	case steam_music_playback_undefined:
		_playback_status = "steam_music_playback_undefined"
	break;
	case steam_music_playback_playing:
		_playback_status = "steam_music_playback_playing"
	break;
	case steam_music_playback_paused:
		_playback_status = "steam_music_playback_paused"
	break;
	case steam_music_playback_idle:
		_playback_status = "steam_music_playback_idle"
	break;

}

draw_text(50,100+ ++_i *25 ,"playback_status: " + string(_playback_status))


