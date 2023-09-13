@func Networking
The following functions and constants allow you to use Steam&#39;s Networking functionality.

## Packets IO

These functions are provided for handling sending and receiving packets:

- [steam\_net\_packet\_get\_data](#steam_net_packet_get_data)
- [steam\_net\_packet\_get\_sender\_id](#steam_net_packet_get_sender_id)
- [steam\_net\_packet\_get\_size](#steam_net_packet_get_size)
- [steam\_net\_packet\_receive](#steam_net_packet_receive)
- [steam\_net\_packet\_send](#steam_net_packet_send)
- [steam\_net\_packet\_set\_type](#steam_net_packet_set_type)
- [steam\_net\_accept\_p2p\_session](#steam_net_accept_p2p_session)
- [steam\_net\_close\_p2p\_session](#steam_net_close_p2p_session)
- [steam\_net\_set\_auto\_accept\_p2p\_sessions](#steam_net_set_auto_accept_p2p_sessions)

## Session

The following functions allow handling P2P sessions:

* [steam_net_accept_p2p_session](#steam_net_accept_p2p_session)
* [steam_net_close_p2p_session](#steam_net_close_p2p_session)
* [steam_net_set_auto_accept_p2p_sessions](#steam_net_set_auto_accept_p2p_sessions)

## Constants

These are the constants used by this API:

* [PacketType](#PacketType)


@func_end


@func steam_net_packet_get_data
Copies the contents of last received packet to the given buffer. Data is copied to the start of the buffer (position remains unaffected), meaning that if you reuse the same buffer, you should &quot;rewind&quot; it prior to reading.

> **:information_source: NOTE**
>
> If the buffer is not big enough to fit data, it will be resized automatically (the buffer needs to be created using the using the `buffer_grow` type).


|buffer|Id.Buffer|The buffer to write the incoming data to.|


@returns {bool}

```gml
while (steam_net_packet_receive())
{
    steam_net_packet_get_data(inbuf);
    buffer_seek(inbuf, buffer_seek_start, 0);
    switch (buffer_read(inbuf, buffer_u8))
    {
        case 1: show_debug_message("packet ID 1"); break;
        case 2: show_debug_message("packet ID 2"); break;
        default: show_debug_message("unknown packet"); break;
    }
}
```
The code above will check for an incoming packet and get its data into a buffer (resizing if necessary) and reads from it.


@func_end


@func steam_net_packet_get_sender_id
Returns Steam ID of the user that sent the last received packet.
Can be used in conjunction with [steam_net_packet_send](#steam_net_packet_send) to send something back and for just telling the senders apart.



**Returns:**

```gml
int64
```


```gml
while(steam_net_packet_receive())
{
    var sender = steam_net_packet_get_sender_id();

    buffer_seek(outbuf, buffer_seek_start, 0);
    buffer_write(outbuf, buffer_u8, test_network_packet.ping);

    steam_net_packet_send(sender, outbuf);
}

```
The above code will show a code example.


@func_end


@func steam_net_packet_get_size
Returns the size of last received packet, in bytes.



@returns {real}

```gml
while (steam_net_packet_receive())
{
    var size = steam_net_packet_size();
    show_debug_message("Received " + string(size) + " bytes.");
}
```
The code above will display the size of each incoming packet.


@func_end


@func steam_net_packet_receive
Attempts to get the next packet from Steam API and returns whether successfully done so.
Other steam_net_ functions can then be used to get packet information/contents.



@returns {bool}

```gml
while (steam_net_packet_receive())
{
    // process the received packet
}
```
The code above will attempt to get the next packet from Steam API, would be used every step while in lobby or with less frequency otherwise.


@func_end


@func steam_net_packet_send
Sends a packet to the given endpoint, returns whether successful (as opposed to incorrect arguments/invalid ID). If no packet type is passed in then default value will be used, the default value can be set using the [steam_net_packet_set_type](#steam_net_packet_set_type) function. Returns whether or not the packet was successfully sent.


**Syntax:**

```gml
steam_net_packet_send(user_id, buffer, size, packet_type)
```

| **user_id** |int64|The target user to send the packet to|
| **buffer** |real|Buffer that contains the raw byte array for the packet data to send|
|size|real|The size of data to send (default -1, sends the entire buffer) :eight_pointed_black_star: OPTIONAL|
|packet_type|[PacketType](#PacketType)|The type of packet to be used :eight_pointed_black_star: OPTIONAL|


@returns {bool}

```gml
var buf = buffer_create(16, buffer_grow, 1);
buffer_write(buf, buffer_string, "Hello!");
steam_net_packet_send(steam_id, buf, -1);
buffer_delete(buff);
```
The code sample will create a buffer and write to it, sending the total length of it to the given `steam_id`, the buffer is then deleted.


@func_end


@func steam_net_packet_set_type
Set the default connection protocol used when sending the data packets (using the [steam_net_packet_send](#steam_net_packet_send) function). Returns whether or not the default protocol was successfully set.


|protocol|[PacketType](#PacketType)|The default connection protocol to be used|


@returns {bool}

```gml
steam_net_packet_set_type(steam_net_packet_type_reliable)
```
The above code will set the current connection to use the `steam_net_packet_type_reliable` protocol to send data packages.


@func_end


# steam_net_accept_p2p_session

Accepts a P2P session request from the specified user. Returns whether successful or not.


**Syntax:**

```gml
steam_net_accept_p2p_session(userID);
```

|userID|int64|The User ID of the user that sent the initial packet to us.|


@returns {bool}

```gml
if (isMyFriend(userID))
{
    steam_net_accept_p2p_session(userID);
}
```
The code above uses a custom implemented function that will check if a given `userID` is a friend and if it is it will accept the P2P session.


@func_end


# steam_net_close_p2p_session

Closes a P2P session with the specified user. Returns whether successful or not.
Steam will automatically close sessions after a period of inactivity, but you could also do it manually if you so desired.


**Syntax:**

```gml
steam_net_close_p2p_session(user_id)
```

|user_id|int64|The user ID of the user to close the connection with.|


@returns {bool}

```gml
if (global.chat_closed)
{
     steam_net_close_p2p_session(user_id)
}
```
The code above check to see if a global variable (`chat_closed`) is true and if so, it will close the P2P session.


@func_end


# steam_net_set_auto_accept_p2p_sessions

Sets whether to auto-accept session requests coming from players in the same lobby. This is enabled by default for convenience. If you disable it, you will need to handle the async event when someone uses the [steam_lobby_join_id](Lobbies#steam_lobby_join_id) function.


**Syntax:**

```gml
steam_net_set_auto_accept_p2p_sessions(enable);
```

|enable|bool|disable/enable auto accept sessions|




**Triggers:**

```gml
Asynchronous Steam Event (for each request, if disabled)
```

|type|string|The string value `"lobby_join_requested"`|
|lobby_id|int64|The lobby unique identifier|
|friend_id|int64|The friend unique identifier|


```gml
steam_net_set_auto_accept_p2p_sessions(false);
```
The code above will disable the auto accept P2P sessions functionality meaning we  should deal with the requests manually. In order to do so we need to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to catch the callback:

```gml
if (async_load[?"event_type"] == "lobby_join_requested")
{
    steam_net_accept_p2p_session(async_load[?"friend_id"]);
}
```


@func_end


@func PacketType
These constants specify the type of a steam packet and should be used with the function [steam_net_packet_set_type](#steam_net_packet_set_type).

|Packet Type Constant|Description|
|----|----|
|`steam_net_packet_type_unreliable`|Equivalent to UDP the data may or may not be delivered, will not be resent automatically.|
|`steam_net_packet_type_unreliable_nodelay`|Similar to "unreliable" type, but always sent instantly (as soon as function is called). Intended for things like streaming voice data, where you want lowest latency possible and only care about the current data.|
|`steam_net_packet_type_reliable`|Equivalent to TCP, the data is warranted to be delivered in order and intact.|
|`steam_net_packet_type_reliable_buffer`|Similar to "reliable" type, but utilizes [Nagle's algorithm](https://en.wikipedia.org/wiki/Nagle's_algorithm) to reduce the number of packets at cost of potential delay while the data accumulates until the sending threshold.|


@func_end