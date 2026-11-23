
steam_input_run_frame();

controllers = steam_input_get_connected_controllers();
if(array_length(controllers))
{
	input_setup()
}

for(var i = 0; i < array_length(controllers); i++)
{
    steam_input_activate_action_set(controllers[i], action_sets.menu_controls);
}


