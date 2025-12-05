
global.SEND_UNRELIABLE = 0;
global.SEND_RELIABLE   = 8; // k_nSteamNetworkingSend_Reliable

event_inherited();

text = "Net Sockets"


var array = steam_net_sockets_create_socket_pair(true);
if (array_length(array) != 2) {
    show_debug_message("Failed to create socket pair");
    socket_demo_ready = false;
    exit;
}

conn_a = array[0].connection
conn_b = array[1].connection

show_debug_message("Socket pair created: A=" + string(conn_a) + ", B=" + string(conn_b));

buf_size = 1024;
buf = buffer_create(buf_size, buffer_grow, 1);

log = [];
log_max = 30;

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



