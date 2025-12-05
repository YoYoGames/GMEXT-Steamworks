
event_inherited()

if (!socket_demo_ready) exit;

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

    buffer_seek(buf, buffer_seek_start, 0);
    buffer_write(buf, buffer_string, msg);

    var size = buffer_tell(buf);
    var er = steam_net_sockets_send_message(
        from_conn,
        buf,
        size,
        global.SEND_RELIABLE
    );

    log_add("SEND: \"" + msg + "\" via conn " + string(from_conn)
            + " (EResult=" + string(er) + ")");
}



function poll_connection(conn_name, conn_handle) {
    var received = steam_net_sockets_recv_messages_on_connection(
        conn_handle,
        buf,
        buf_size
    );

    if (received > 0) {
        buffer_seek(buf, buffer_seek_start, 0);
        var s = buffer_read(buf, buffer_string);

        log_add("RECV on " + conn_name + " (" + string(conn_handle) + "): " + s);
    }
}

poll_connection("A", conn_a);
poll_connection("B", conn_b);
