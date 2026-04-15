event_inherited()

if (conn_a == -1) {
    var array = steam_net_sockets_create_socket_pair(true);
    if (array_length(array) != 2) {
        show_debug_message("Failed to create socket pair");
        exit;
    }
    conn_a = array[0].connection;
    conn_b = array[1].connection;
    show_debug_message("Socket pair created: A=" + string(conn_a) + ", B=" + string(conn_b));
}

if (!socket_demo_ready) {
    var info_a = steam_net_sockets_get_connection_info(conn_a);
    var info_b = steam_net_sockets_get_connection_info(conn_b);
    if (info_a.state == 3 && info_b.state == 3) {
        socket_demo_ready = true;
        log_add("Demo ready. Press SPACE to send from A -> B");
        log_add("Hold LEFT SHIFT and press SPACE to send from B -> A");
    }
    exit;
}

if (keyboard_check_pressed(vk_space)) {
    send_counter++;

    var from_conn;
    if (keyboard_check(vk_shift)) {
        from_conn = conn_b;
    } else {
        from_conn = conn_a;
    }

    var msg = "Hello #" + string(send_counter)
              + " from " + (from_conn == conn_a ? "A" : "B");

    buffer_seek(buf, buffer_seek_start, 0);
    buffer_write(buf, buffer_string, msg);

    var size = buffer_tell(buf);
    var er = steam_net_sockets_send_message(
        from_conn,
        buf,
        size,
        STEAMWORKS_NET_SEND_FLAG.RELIABLE
    );

    if (er.result == 1) { // k_EResultOK
        log_add("SEND: \"" + msg + "\" via conn " + string(from_conn));
    } else {
        log_add("SEND FAILED (EResult=" + string(er.result) + ") via conn " + string(from_conn));
    }
}

function poll_connection(conn_name, conn_handle) {
    while (true) {
        var received = steam_net_sockets_recv_messages_on_connection(
            conn_handle,
            buf,
            buf_size
        );

        if (!received.ok) break;

        if (received.bytes_written > 0) {
            buffer_seek(buf, buffer_seek_start, 0);
            var s = buffer_read(buf, buffer_string);
            log_add("RECV on " + conn_name + ": " + s);
        }
    }
}

poll_connection("A", conn_a);
poll_connection("B", conn_b);