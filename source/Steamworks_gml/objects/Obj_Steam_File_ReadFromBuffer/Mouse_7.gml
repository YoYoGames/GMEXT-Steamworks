
var uimsg = "[Failed to read the data, file is either empty or doesn't exist, try the Write from buffer button]"
var buff = steam_file_read_buffer("binary.dat");
if (!is_undefined(buff)) {
	uimsg = buffer_read(buff, buffer_string);
	buffer_delete(buff);
}

show_message_async(uimsg);
