
show_debug_message(json_encode(async_load))

if(async_load[?"event_type"] == "gamepad_text_input_dismissed")
if(async_load[?"submitted"])
{
	show_message_async(async_load[?"submitted_text"])
}
