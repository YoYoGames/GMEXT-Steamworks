
if(async_load[?"event_type"] == "user_encrypted_app_ticket_response_received")
if(async_load[?"result"])
{
	var ticket_data = async_load[?"ticket_data"]
	show_debug_message("ticket_data: " + ticket_data)
}

