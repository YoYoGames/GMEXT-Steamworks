
    if (net_connection > 0)
    {
        var msg = "Hello from " + "host" + " at " + string(current_time);
		
        // Write string into the buffer
        buffer_seek(net_buffer, buffer_seek_start, 0);
        buffer_write(net_buffer, buffer_u8, string_length(msg)); // store length first (1 byte if <=255)
        buffer_write(net_buffer, buffer_string, msg);

        var size = buffer_tell(net_buffer);

        // Send reliable
        var res = steam_net_sockets_send_message(
            net_connection,
            net_buffer,
            size,
            NET_SEND_RELIABLE
        );

        show_debug_message("Send result = " + string(res) + " (0 or 1 is OK, check docs)");
    }
    else
    {
        show_debug_message("No active connection to send on");
    }

