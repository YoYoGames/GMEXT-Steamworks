


steam_apps_get_file_details("nonexistent_file.bin", function(ev) {
    show_debug_message($"GetFileDetails result= {ev.result}");
    show_debug_message($"size={ev.file_size} flags= {ev.flags}");
    show_debug_message($"sha1= {ev.sha1}");
});

steam_utils_check_file_signature("nonexistent_file.bin", function(ev) {
    show_debug_message($"CheckFileSignature result= {ev.result}");
});
