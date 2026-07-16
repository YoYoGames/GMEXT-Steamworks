
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

    var er = steam_networking_sockets_send_message_to_connection(
        from_conn,
        buf,
		0,
		buffer_tell(buf),
        SteamNetworkingSendFlags.Reliable
    );

    log_add("SEND: \"" + msg + "\" via conn " + string(from_conn)
            + " (EResult=" + string(er) + ")");
}



function poll_connection(conn_name, conn_handle) {
    var _array_of_messages = steam_networking_sockets_receive_messages_on_connection(conn_handle, buf, 10);

    for(var _i = 0; _i < array_length(_array_of_messages); _i++) {
        var _msg = _array_of_messages[_i];
        if(_msg.size) {
            buffer_seek(buf, buffer_seek_start, _msg.offset);
            var s = buffer_read(buf, buffer_string);
            log_add($"RECV on {conn_name} ({conn_handle}): {s}");
        }
    }
}

poll_connection("A", conn_a);
poll_connection("B", conn_b);
