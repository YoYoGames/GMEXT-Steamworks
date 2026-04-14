
if(async_load[?"id"] == request)
if(async_load[?"status"]) {
	
	var text = async_load[?"result"]
	
	var buff = buffer_create(1024,buffer_fixed,1024)
	buffer_write(buff,buffer_string,text)
	steam_remote_storage_file_write(global.steam_selected_file,buff,buffer_tell(buff))

	if(!steam_remote_storage_file_persisted(global.steam_selected_file))
		steam_remote_storage_file_set_shareable(global.steam_selected_file)
}
