
event_inherited()


/// obj_steam_sockets_demo - Step

if (!socket_demo_ready) exit;

// === SEND ===
// SPACE sends a message.
// If Left Shift is held, send B -> A, otherwise A -> B.
if (keyboard_check_pressed(vk_space)) {
    send_counter++;

    var from_conn;
    var to_conn;
    if (keyboard_check(vk_shift)) {
        from_conn = conn_b;
        to_conn   = conn_a;
    } else {
        from_conn = conn_a;
        to_conn   = conn_b;
    }

    var msg = "Hello #" + string(send_counter)
              + " from " + (from_conn == conn_a ? "A" : "B");

    // Write message into buffer as a string (zero-terminated)
    buffer_seek(buf, buffer_seek_start, 0);
    buffer_write(buf, buffer_string, msg);

    // Size of data written (up to current position)
    var size = buffer_tell(buf);

    // Send using your wrapper (single message API or batched; here: SendMessages)
    var er = steam_net_sockets_send_message(
        from_conn,
        buf,
        size,
        global.SEND_RELIABLE//,  // reliable
        //0                      // lane (0 = default)
    );

    log_add("SEND: \"" + msg + "\" via conn " + string(from_conn)
            + " (EResult=" + string(er) + ")");
}



// === RECEIVE helper ===
function poll_connection(conn_name, conn_handle) {
    // try to receive one message
    var received = steam_net_sockets_recv_messages_on_connection(
        conn_handle,
        buf,
        buf_size
    );

    if (received > 0) {
        // Read string from buffer
        buffer_seek(buf, buffer_seek_start, 0);
        var s = buffer_read(buf, buffer_string);

        log_add("RECV on " + conn_name + " (" + string(conn_handle) + "): " + s);
    }
}

// Poll both ends every step
poll_connection("A", conn_a);
poll_connection("B", conn_b);
