
if(async_load[?"event_type"] == "user_encrypted_app_ticket_response_received")
if(async_load[?"result"])
{
	var ticket_data = async_load[?"ticket_data"]
	show_debug_message("ticket_data: " + ticket_data)
}

if(async_load[? "event_type"] == "ticket_response")
if(async_load[? "auth_ticket_handle"] > 0)
{
	auth_ticket_handle = async_load[? "auth_ticket_handle"]
	show_debug_message("Auth ticket can now be used, see buffer index " + string(auth_ticket_buffer))
}


if(async_load[?"event_type"] == "ticket_for_web_api_response")
if(async_load[?"auth_ticket_handle"] == auth_ticket_handle)
{
	var temp_buffer = async_load[?"auth_ticket_buffer"]
	if (temp_buffer < 0)
	{
		show_debug_message("Failed to obtain the webapi auth ticket")
		// inspect async_load[?"result"] for the EResult error code from Steam...
	}
	else
	{
		var temp_buffer_size = buffer_get_size(temp_buffer)
		show_debug_message("Got a ticket buffer: " + string(temp_buffer_size) + " bytes")
		// temp_buffer will be freed once this Async event exits
		// so if you want to persist ticket data, copy into your own buffer
		auth_ticket_buffer = buffer_create(temp_buffer_size, buffer_fixed, 1)
		buffer_copy(temp_buffer, 0, temp_buffer_size, auth_ticket_buffer, 0)
		show_debug_message("Copied into buffer index " + string(auth_ticket_buffer))
		// now use auth_ticket_buffer, you can inspect this buffer in the Debugger.
	}
}
