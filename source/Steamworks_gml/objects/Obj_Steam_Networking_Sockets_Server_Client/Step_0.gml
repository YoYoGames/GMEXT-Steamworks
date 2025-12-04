/// Step event

event_inherited()

/// obj_net_controller Step (add this after sending part)

// Try to receive all messages this step
if (global.net_connection > 0)
{
    while (true)
    {
        buffer_seek(global.net_buffer, buffer_seek_start, 0);
        var bytes_read = steam_net_sockets_recv_messages_on_connection(
            global.net_connection,
            global.net_buffer,
            1024//NET_BUFFER_SIZE
        );

        if (bytes_read <= 0)
        {
            // No more messages in the queue
            break;
        }

        // We wrote raw bytes into the buffer. Rewind it and decode.
        buffer_seek(global.net_buffer, buffer_seek_start, 0);

        // For this demo we wrote: [u8 length][string]
        var len = buffer_read(global.net_buffer, buffer_u8);
        var received_str = buffer_read(global.net_buffer, buffer_string);

        show_debug_message("RECV (" + string(bytes_read) + " bytes): " + received_str);
    }
}
