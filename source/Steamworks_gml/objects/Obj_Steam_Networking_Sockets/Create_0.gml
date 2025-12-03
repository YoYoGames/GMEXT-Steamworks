/// Steam Net Sockets constants (match Steamworks)
global.SEND_UNRELIABLE = 0;
global.SEND_RELIABLE   = 8; // k_nSteamNetworkingSend_Reliable

event_inherited();

text = "Net Sockets"

/// obj_steam_sockets_demo - Create

// You must have Steam already initialized via your existing Steam extension:
// e.g. steam_init(); somewhere in your game startup.

show_debug_message("=== Steam Net Sockets demo: Create ===");

// Create a socket pair (two connections in the same process)
var ok = steam_net_sockets_create_socket_pair(true); // use loopback = true
show_debug_message("create_socket_pair -> " + string(ok));
if (!ok) {
    show_debug_message("Failed to create socket pair");
    socket_demo_ready = false;
    exit;
}

// Get the two connection handles (both live in this process)
conn_a = steam_net_sockets_get_socket_pair_connection1();
conn_b = steam_net_sockets_get_socket_pair_connection2();

show_debug_message("Socket pair created: A=" + string(conn_a) + ", B=" + string(conn_b));

// One shared buffer for sending/receiving.
// (You can use two buffers if you want, but one is enough for a demo.)
buf_size = 1024;
buf = buffer_create(buf_size, buffer_grow, 1);

// Text log for drawing steam_net_sockets_create_socket_pairon screen
log = [];
log_max = 10;

// helper to push into log
function log_add(msg) {
    array_push(log, msg);
    if (array_length(log) > log_max) {
        array_delete(log, 0, array_length(log) - log_max);
    }
}

log_add("Demo ready. Press SPACE to send from A -> B");
log_add("Hold LEFT SHIFT and press SPACE to send from B -> A");

socket_demo_ready = true;
send_counter = 0;



