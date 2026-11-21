/// @description Non-allocating receive demo
// The same game as the Net Messages demo: select a friend, and the circles drawn at your mouse appear on their screen
// (and theirs on yours). Here the messages are received with steam_networking_messages_receive_message_on_channel,
// which reads one message per call into a buffer you own and creates no array or struct, so it's safe to call every
// frame. The sender and size of each message come from steam_networking_messages_get_last_message_steam_id and
// steam_networking_messages_get_last_message_size.
//
//  B : switch between reading each message to the start of the buffer (the usual way) and reading several messages
//      into the buffer at increasing offsets, then handling them as a batch.
//  S : send a burst of messages, which fills the batch buffer, so a message is held until the batch is handled.
//  L : send a message bigger than the receive buffer, which is held and then discarded.

alarm[0] = 3;

channel = 0;
// A circle message: u32 colour + u16 x + u16 y.
circle_message_size = 8;
burst_count = 20;
burst_radius = 64;
large_message_size = 1024;

// Small on purpose, so that a burst fills it and the large message never fits. A game would usually size it to
// STEAM_NETWORKING_SOCKETS_MAX_MESSAGE_SIZE_SEND, so that every message fits.
receive_buffer = buffer_create(64, buffer_fixed, 1);
send_buffer = buffer_create(large_message_size, buffer_fixed, 1);

batch_mode = false;
// Where each message of the current batch sits in receive_buffer. Created once and reused: a message is at least one
// byte, so the buffer can't hold more messages than it has bytes.
var _batch_capacity = buffer_get_size(receive_buffer);
batch_offsets = array_create(_batch_capacity, 0);
batch_sizes = array_create(_batch_capacity, 0);
batch_senders = array_create(_batch_capacity, 0);
batch_count = 0;

received_total = 0;
last_sender = 0;
held_total = 0;
discarded_total = 0;
batches_last_busy_frame = 0;

steam_networking_messages_set_callback_session_request(function(_data)
{
	steam_networking_messages_accept_session_with_user(_data.steam_id_remote);
});

steam_networking_messages_set_callback_session_failed(function(_data)
{
	show_debug_message($"Session with {_data.steam_id_remote} failed: {_data.debug_msg}");
});

#region Sending

/// @desc Returns the Steam ID of the selected friend, or undefined when none is selected.
selected_friend_get = function()
{
	with (obj_steam_friends_friend_select)
	{
		if (selected) return data.steam_id;
	}
	return undefined;
}

/// @desc Sends a circle message, reliably so that every circle of a burst arrives.
circle_send = function(_steam_id, _x, _y, _colour)
{
	buffer_seek(send_buffer, buffer_seek_start, 0);
	buffer_write(send_buffer, buffer_u32, _colour);
	buffer_write(send_buffer, buffer_u16, _x);
	buffer_write(send_buffer, buffer_u16, _y);
	steam_networking_messages_send_message_to_user(_steam_id, send_buffer, SteamNetworkingSendFlags.Reliable, channel, 0, circle_message_size);
}

/// @desc Sends a ring of circles around the mouse, more than the receive buffer can hold at once.
burst_send = function()
{
	var _steam_id = selected_friend_get();
	if (is_undefined(_steam_id)) return;

	for (var _i = 0; _i < burst_count; _i++)
	{
		var _angle = _i * 360 / burst_count;
		var _colour = make_colour_hsv(_i * 255 / burst_count, 255, 255);
		circle_send(_steam_id, mouse_x + lengthdir_x(burst_radius, _angle), mouse_y + lengthdir_y(burst_radius, _angle), _colour);
	}
}

/// @desc Sends a message bigger than the whole receive buffer.
large_send = function()
{
	var _steam_id = selected_friend_get();
	if (is_undefined(_steam_id)) return;

	buffer_fill(send_buffer, 0, buffer_u8, 0, large_message_size);
	steam_networking_messages_send_message_to_user(_steam_id, send_buffer, SteamNetworkingSendFlags.Reliable, channel, 0, large_message_size);
}

#endregion

#region Receiving

/// @desc Draws the circle a message describes.
circle_message_handle = function(_buffer, _offset, _size, _sender)
{
	// Anyone can message us on this channel, so check the message is a circle before reading it.
	if (_size != circle_message_size) return;

	buffer_seek(_buffer, buffer_seek_start, _offset);
	var _colour = buffer_read(_buffer, buffer_u32);
	var _x = buffer_read(_buffer, buffer_u16);
	var _y = buffer_read(_buffer, buffer_u16);
	instance_create_depth(_x, _y, 0, obj_steam_networking_circle).image_blend = _colour;
	received_total++;
	last_sender = _sender;
}

/// @desc Throws away the message held because it doesn't fit even an empty receive buffer. A game that expects big
///       messages could instead resize the buffer to steam_networking_messages_get_last_message_size() and read again.
held_message_discard = function()
{
	show_debug_message($"Discarding a {steam_networking_messages_get_last_message_size()} byte message from {steam_networking_messages_get_last_message_steam_id()}: it doesn't fit the {buffer_get_size(receive_buffer)} byte receive buffer.");
	steam_networking_messages_discard_held_message(channel);
	discarded_total++;
}

/// @desc The usual way: read every waiting message to the start of the buffer, handling each before reading the next.
receive_one_at_a_time = function()
{
	var _size = steam_networking_messages_receive_message_on_channel(channel, receive_buffer);
	while (_size != 0)
	{
		if (_size == STEAM_NETWORKING_MESSAGES_RECEIVE_DOES_NOT_FIT)
		{
			held_message_discard();
		}
		else
		{
			circle_message_handle(receive_buffer, 0, _size, steam_networking_messages_get_last_message_steam_id());
		}
		_size = steam_networking_messages_receive_message_on_channel(channel, receive_buffer);
	}
}

/// @desc Read messages into the buffer one after another, and handle them together once it's full or nothing is left.
receive_in_batches = function()
{
	var _batches = 0;
	var _offset = 0;
	while (true)
	{
		var _size = steam_networking_messages_receive_message_on_channel(channel, receive_buffer, _offset);
		if (_size == 0) break;

		if (_size == STEAM_NETWORKING_MESSAGES_RECEIVE_DOES_NOT_FIT)
		{
			if (_offset == 0)
			{
				held_message_discard();
				continue;
			}
			// The buffer is full. Nothing is lost: the message is held, and the next read on this channel returns it.
			held_total++;
			batch_handle();
			_batches++;
			_offset = 0;
			continue;
		}

		// The get_last_message functions describe only the latest read, so keep the sender with the message.
		batch_offsets[batch_count] = _offset;
		batch_sizes[batch_count] = _size;
		batch_senders[batch_count] = steam_networking_messages_get_last_message_steam_id();
		batch_count++;
		_offset += _size;
	}

	if (batch_count > 0)
	{
		batch_handle();
		_batches++;
	}
	if (_batches > 0) batches_last_busy_frame = _batches;
}

batch_handle = function()
{
	for (var _i = 0; _i < batch_count; _i++)
	{
		circle_message_handle(receive_buffer, batch_offsets[_i], batch_sizes[_i], batch_senders[_i]);
	}
	batch_count = 0;
}

#endregion

// Friend list (same as the Net Messages demo): click to select who receives your circles.
var _flag = SteamFriendsFriendFlag.All;
var _count = steam_friends_get_friend_count(_flag);

var _x = 100;
var _y = 150;
for (var _i = 0; _i < _count; _i++)
{
	var _friend_id = steam_friends_get_friend_by_index(_i, _flag);
	var _friend_name = steam_friends_get_friend_persona_name(_friend_id);

	var _data = { steam_id: _friend_id, image_xscale: 3 };
	instance_create_depth(_x, _y, 0, obj_steam_friends_friend_select, { data: _data }).text = _friend_name;
	_y += 100;

	if (_y > room_height - 100)
	{
		_y = 150;
		_x += 300;
	}
}
