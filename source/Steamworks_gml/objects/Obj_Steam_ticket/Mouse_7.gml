
var buff = buffer_create(0,buffer_fixed,1)
steam_user_request_encrypted_app_ticket(buff)
buffer_delete(buff)

var appId = extension_get_option_value("Steamworks", "AppID")
show_debug_message("steam_get_app_ownership_ticket_data: " + string(steam_get_app_ownership_ticket_data(appId)))

