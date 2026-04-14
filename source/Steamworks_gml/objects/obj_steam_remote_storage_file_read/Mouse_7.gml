
var buff = buffer_create(1024,buffer_fixed,1024)
if(steam_remote_storage_file_read(global.steam_selected_file,buff,1024))
{
	var str = buffer_read(buff,buffer_string)
	show_message_async(str)
}
else
{
	show_message_async("NOONE/EMPTY")
}

buffer_delete(buff)
