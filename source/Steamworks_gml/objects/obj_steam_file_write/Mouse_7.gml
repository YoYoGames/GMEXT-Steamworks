
var data = "HELLO WORLD"
steam_file_write(STEAM_REMOTESTORAGE_FILE,data,string_length(data))

if(!steam_file_persisted(STEAM_REMOTESTORAGE_FILE))
	steam_file_share(STEAM_REMOTESTORAGE_FILE)
