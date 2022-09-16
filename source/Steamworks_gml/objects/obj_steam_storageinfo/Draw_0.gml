
draw_set_font(Font_YoYo_20)
draw_set_valign(fa_top)
draw_set_halign(fa_left)

var _i = 0;

/////////////////////////////////////////////steam_remotestorage.cpp
draw_text(50, 100 + _i++ * 30,"steam_is_cloud_enabled_for_app: " + string(steam_is_cloud_enabled_for_app()))
draw_text(50, 100 + _i++ * 30,"steam_is_cloud_enabled_for_account: " + string(steam_is_cloud_enabled_for_account()))
draw_text(50, 100 + _i++ * 30,"steam_get_quota_total: " + string(steam_get_quota_total()))
draw_text(50, 100 + _i++ * 30,"steam_get_quota_free: " + string(steam_get_quota_free()))

if(steam_file_exists(STEAM_REMOTESTORAGE_FILE))
{
	draw_text(50, 100 + _i++ * 30, "steam_file_size: " + string(steam_file_size(STEAM_REMOTESTORAGE_FILE)))
	draw_text(50, 100 + _i++ * 30, "steam_file_persisted: " + string(steam_file_persisted(STEAM_REMOTESTORAGE_FILE)))
}
