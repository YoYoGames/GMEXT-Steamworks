
draw_set_font(fnt_gm_15)
draw_set_valign(fa_top)
draw_set_halign(fa_left)

var _i = 0;

/////////////////////////////////////////////steam_remotestorage.cpp
draw_text(50, 100 + _i++ * 30,$"steam_is_cloud_enabled_for_app: {steam_remote_storage_is_cloud_enabled_for_app()}")
draw_text(50, 100 + _i++ * 30,$"steam_is_cloud_enabled_for_account: {steam_remote_storage_is_cloud_enabled_for_account()}")
draw_text(50, 100 + _i++ * 30,$"steam_get_quota_total: {steam_remote_storage_get_quota()}")

if(steam_remote_storage_file_exists(global.steam_selected_file))
{
	draw_text(50, 100 + _i++ * 30, $"steam_file_size: {steam_remote_storage_get_file_size(global.steam_selected_file)}")
	draw_text(50, 100 + _i++ * 30, $"steam_file_persisted {steam_remote_storage_file_persisted(global.steam_selected_file)}")
}


// NOTE: Don't actually do this every frame! This is purely for example purposes:
_i += 5; // offset the thing by a little bit...
draw_text(50, 100 + _i++ * 30, "File list:")


var num = steam_remote_storage_get_file_count()
for (var i = 0 ; i < num ; ++i)
{
	draw_text(50, 100 + _i++ * 30, steam_remote_storage_get_file_name_and_size(i))
}