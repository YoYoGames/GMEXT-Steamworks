
steam_user_request_encrypted_app_ticket()

var appId = steam_get_app_id()
show_debug_message("steam_get_app_ownership_ticket_data: " + string(steam_get_app_ownership_ticket_data(appId)))

// -- auth ticket for web api -- //

if (auth_ticket_buffer >= 0)
{
	buffer_delete(auth_ticket_buffer)
	auth_ticket_buffer = -1
}

if (auth_ticket_handle > 0)
{
	steam_user_cancel_auth_ticket(auth_ticket_handle)
	auth_ticket_handle = 0
}

auth_ticket_buffer = steam_user_get_auth_session_ticket()
// now wait for an async event...
