
steam_user_request_encrypted_app_ticket("06956d5fafa4b9e185d757337eb4e21f117ae15ea1d1e81134f1838a6b5e0d8f")

var appId = extension_get_option_value("Steamworks", "AppID")
show_debug_message("steam_get_app_ownership_ticket_data: " + string(steam_get_app_ownership_ticket_data(appId)))

