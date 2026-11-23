
draw_set_font(fnt_gm_15)
draw_set_valign(fa_top);
draw_set_halign(fa_left);

var _i = 0;
draw_text(50,100+_i *25 ,$"playback_enabled: {steam_music_is_enabled()}")
draw_text(50,100+ ++_i *25,$"playback_is_playing (returns true even if is paused): {steam_music_is_playing()}")

var _playback_status = ""

switch (steam_music_get_playback_status()){

	case SteamMusicPlaybackStatus.Undefined:
		_playback_status = "Undefined"
	break;
	case SteamMusicPlaybackStatus.Playing:
		_playback_status = "Playing"
	break;
	case SteamMusicPlaybackStatus.Paused:
		_playback_status = "Paused"
	break;
	case SteamMusicPlaybackStatus.Idle:
		_playback_status = "Idle"
	break;

}

draw_text(50,100+ ++_i *25 ,$"playback_status: {_playback_status}")


