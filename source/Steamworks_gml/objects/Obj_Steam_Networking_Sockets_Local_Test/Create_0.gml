event_inherited();

text = "Net Sockets"

conn_a = -1;
conn_b = -1;
socket_demo_ready = false;
send_counter = 0;

buf_size = 1024;
buf = buffer_create(buf_size, buffer_grow, 1);

log = [];
log_max = 30;

function log_add(msg) {
    array_push(log, msg);
    if (array_length(log) > log_max) {
        array_delete(log, 0, array_length(log) - log_max);
    }
	show_debug_message(msg)
}
