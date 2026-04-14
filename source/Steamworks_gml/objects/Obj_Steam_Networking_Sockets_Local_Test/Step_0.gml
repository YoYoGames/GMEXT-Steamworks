
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

    var msg = $"Hello # {send_counter} from {from_conn == conn_a ? "A" : "B"}"

    buffer_seek(buf, buffer_seek_start, 0);
    buffer_write(buf, buffer_string, msg);

    var size = buffer_tell(buf);
    var er = steam_networking_sockets_send_message_to_connection(
        from_conn,
        buf,
        size,
        0
    );

    log_add("SEND: \"" + msg + "\" via conn " + string(from_conn)
            + " (EResult=" + string(er) + ")");
}



function poll_connection(conn_name, conn_handle) {
    var received = steam_networking_sockets_receive_one_on_connection(
        conn_handle,
        buf,
        buf_size,
		0
    );

    if (received.bytes_written > 0) {
        buffer_seek(buf, buffer_seek_start, 0);
        var s = buffer_read(buf, buffer_string);

        log_add($"RECV on {conn_name} ( {conn_handle} ): {s}")
    }
}

poll_connection("A", conn_a);
poll_connection("B", conn_b);
