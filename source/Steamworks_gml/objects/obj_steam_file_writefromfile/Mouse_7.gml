
var localFile = "myTextSteamFile.txt"
var file = file_text_open_write(localFile)
file_text_write_string(file,"HELLO WORLD FROM FILE")
file_text_close(file)

steam_file_write_file(STEAM_REMOTESTORAGE_FILE,localFile)

if(!steam_file_persisted(STEAM_REMOTESTORAGE_FILE))
	steam_file_share(STEAM_REMOTESTORAGE_FILE)
