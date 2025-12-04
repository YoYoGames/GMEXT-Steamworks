
var name = async_load[? "event_type"];
if (name != "steam_net_message_on_state_change") exit;

var conn        = async_load[? "connection"];
var state       = async_load[? "state"];
var old_state   = async_load[? "old_state"];
var end_reason  = async_load[? "end_reason"];
var debug_str   = async_load[? "debug"];

show_debug_message("SteamNet: conn=" + string(conn)
    + " state=" + string(state)
    + " old=" + string(old_state)
    + " reason=" + string(end_reason)
    + " debug=" + string(debug_str));


if(state == NET_STATE_CONNECTING)
{
	steam_net_sockets_accept_connection(conn)
}
else
if (state == NET_STATE_CONNECTED)
{
    net_connection = conn;
    show_debug_message("SteamNet: CONNECTED on conn " + string(conn));
}
else if (state == NET_STATE_CLOSED_BY_PEER || state == NET_STATE_PROBLEM_LOCAL)
{
    show_debug_message("SteamNet: connection closed / problem on " + string(conn));
    if (net_connection == conn)
    {
        net_connection = -1;
    }
}
