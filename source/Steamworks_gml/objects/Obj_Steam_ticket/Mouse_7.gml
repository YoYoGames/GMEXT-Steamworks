
var data_to_include = buffer_create(1024, buffer_fixed, 1);
// fill data_to_include with whatever you want to embed, or leave empty

steam_user_request_encrypted_app_ticket(data_to_include, 1024, function(ev) {
    show_debug_message($"RequestEncryptedAppTicket result= {ev.result}");

    if (ev.result == SteamApiResult.Ok) {
        var ticket_buf = buffer_create(2048, buffer_fixed, 1);
        var bytes = steam_user_get_encrypted_app_ticket(ticket_buf, 2048);
        show_debug_message("Encrypted ticket bytes= {bytes}");
        buffer_delete(ticket_buf);
    }
});

buffer_delete(data_to_include);


var result

var app_ownership_ticket_data_buffer = buffer_create(4096, buffer_fixed, 1);
result = steam_apps_get_app_ownership_ticket_data(steam_utils_get_app_id(), app_ownership_ticket_data_buffer, 4096);
show_debug_message($"Result {result}");



var buff_auth_session_ticket = buffer_create(1024,buffer_fixed,1)
result = steam_user_get_auth_session_ticket(buff_auth_session_ticket,1024)
show_debug_message($"Result {result}");

