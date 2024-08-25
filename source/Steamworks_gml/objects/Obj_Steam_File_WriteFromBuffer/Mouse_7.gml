
var data = "HELLO WORLD FROM BUFFER / HAMPSTERDANCE"
var buff = buffer_create(string_byte_length(data), buffer_fixed, 1)
buffer_write(buff, buffer_text, data)
var ok = steam_file_write_buffer("binary.dat", buff)
buffer_delete(buff)
show_message_async(ok ? "Wrote OK. Try the Read from buffer button" : "Failed to write the file")

