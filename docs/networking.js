
// FUNCTIONS

/**
 * @function steam_networking_messages_set_callback_session_request
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a remote host is sending us a message, and we do not already have a session with them.
 * 
 * See: [ISteamNetworkingMessages::SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t)
 * 
 * See: ${struct.SteamNetworkingMessagesSessionRequest}
 *
 * @param {Function} callback The function to be called when a session request event occurs.
 * @function_end 
 */

/**
 * @function steam_networking_messages_clear_callback_session_request
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_networking_messages_set_callback_session_request}.
 *
 * @function_end 
 */

/**
 * @function steam_networking_messages_set_callback_session_failed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when we fail to establish a connection, or we detect that communications have been disrupted in an unusual way. There is no notification when a peer proactively closes the session. ("Closed by peer" is not a concept of UDP-style communications, and ISteamNetworkingMessages is primarily intended to make porting UDP code easy.)
 * 
 * See: [ISteamNetworkingMessages::SteamNetworkingMessagesSessionFailed_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionFailed_t)
 * 
 * See: ${struct.SteamNetworkingMessagesSessionFailed}
 *
 * @param {Function} callback The function to be called when a session failed event occurs.
 * @function_end 
 */

/**
 * @function steam_networking_messages_clear_callback_session_failed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_networking_messages_set_callback_session_failed}.
 * 
 * Sending a message to a host will also implicitly accept any incoming connection from that host.
 * 
 * It is guaranteed that reliable messages to the same host on the same channel will be be received by the remote host (if they are received at all) exactly once, and in the same order that they were sent.
 *
 * @function_end 
 */

/**
 * @function steam_networking_messages_send_message_to_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::SendMessageToUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SendMessageToUser)
 *
 * This function sends a message to the specified host. If we don't already have a session with that user, a session is implicitly created. There might be some handshaking that needs to happen before we can actually begin sending message data. If this handshaking fails and we can't get through, an error will be posted via the callback [SteamNetworkingMessagesSessionFailed_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionFailed_t).
 * 
 * Sending a message to a host will also implicitly accept any incoming connection from that host.
 *
 * @param {Real} steam_id_remote The identity of the host to send the message to; if a session does not already exist with that user, one is implicitly created.
 * @param {Buffer} data The buffer holding the message data to send.
 * @param {Enum.SteamNetworkingSendFlags} send_flags A bitmask of ${constant.SteamNetworkingSendFlags} options that determine the delivery guarantees for the message.
 * @param {Real} remote_channel A routing channel number you can use to help route the message to different systems on the remote host.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The number of bytes to write. Defaults to the buffer size minus the offset.
 * @returns {Real} The number of messages returned into your list. (0 if no messages are available on that channel.)
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamNetworkingMessages::SteamNetworkingMessagesSessionFailed_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionFailed_t)
 * 
 * Posted when we fail to establish a connection, or we detect that communications have been disrupted in an unusual way.
 * 
 * @member {Struct.SteamNetworkingMessagesSessionFailed} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_networking_messages_receive_messages_on_channel
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::ReceiveMessagesOnChannel](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#ReceiveMessagesOnChannel)
 *
 * This function reads the next messages that have been sent from another user via ${function.steam_networking_messages_send_message_to_user} on the given channel.
 * 
 * The function returns an array of structs, where each struct contains an offset into the buffer and a size.
 *
 * @param {Real} local_channel The channel to read messages from (must match the channel used when sending).
 * @param {Buffer} out_data The buffer that receives the message data.
 * @param {Real} count The number of messages to receive.
 * @returns {Array[Struct.SteamNetworkingMessage]}
 * @function_end
 */

/**
 * @function steam_networking_messages_accept_session_with_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::AcceptSessionWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#AcceptSessionWithUser)
 *
 * This function is called in response to a [SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t) callback, which is posted when a user attempts to message you first.
 * 
 * SteamNetworkingMessagesSessionRequest_t (${struct.SteamNetworkingMessagesSessionRequest}) are posted when a user tries to send you a message, and you haven't tried to talk to them first. If you don't want to talk to them, just ignore the request. If the user continues to send you messages, SteamNetworkingMessagesSessionRequest_t callbacks will continue to be posted periodically.
 * 
 * Calling ${function.steam_networking_messages_send_message_to_user} will implicitly accept any pending session request to that user.
 *
 * @param {Real} steam_id_remote The identity of the remote user whose session request you are accepting.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_messages_close_session_with_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::CloseSessionWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#CloseSessionWithUser)
 *
 * This function is called when you're done talking to a user on a specific channel to immediately free up resources under-the-hood. If the remote user tries to send data to you again, another [SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t) callback will be posted.
 * 
 * Note that sessions that go unused for a few minutes are automatically timed out.
 *
 * @param {Real} steam_id_remote The identity of the remote user whose session you want to close.
 * @returns {Bool}
 * 
 * @event callback
 * @description > **Steamworks Callback**: [SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t)
 * 
 * Posted when a remote host is sending us a message, and we do not already have a session with them.
 * 
 * @member {struct.SteamNetworkingMessagesSessionRequest} result The result of the operation.
 * @event_end
 * @function_end 
 */

/**
 * @function steam_networking_messages_close_channel_with_user
 * @description > **Steamworks Function**: [ISteamNetworkingMessages::CloseChannelWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#CloseChannelWithUser)
 *
 * This function is called when you're done talking to a user on a specific channel. Once all open channels to a user have been closed, the open session to the user will be closed, and any new data from this user will trigger a [SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t) callback (${struct.SteamNetworkingMessagesSessionRequest}).
 *
 * @param {Real} steam_id_remote The identity of the remote user whose channel you want to close.
 * @param {Real} local_channel The specific channel to close with the user.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_callback_connection_status_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called whenever a connection is created, destroyed, or changes state.
 * 
 * See: [ISteamNetworkingSockets::SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t)
 * 
 * See: ${struct.SteamNetworkingSocketsStatusChanged}
 *
 * @param {Function} callback The function to be called when the connection status changes.
 * @function_end 
 */

/**
 * @function steam_networking_sockets_clear_callback_connection_status_changed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_networking_sockets_set_callback_connection_status_changed}.
 *
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_listen_socket_ip
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreateListenSocketIP](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateListenSocketIP)
 *
 * This function creates a "server" socket that listens for clients to connect to by calling ${function.steam_networking_sockets_connect_by_ip_address}, over ordinary UDP (IPv4 or IPv6).
 * 
 * You must select a specific local port to listen on and set it as the port field of the local address.
 * 
 * When a client attempts to connect, a [SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t) ${struct.SteamNetworkingSocketsStatusChanged} will be posted. The connection will be in the `SteamNetworkingConnectionState.Connecting` state.
 *
 * @param {Real} port The local port to bind the listen socket to.
 * @returns {Real} The handle to the listen socket
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamNetworkingSockets::SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t)
 * 
 * Triggered whenever a connection is created, destroyed, or changes state.
 * @member {Struct.SteamNetworkingSocketsStatusChanged} data The callback data.
 * @event_end
 * @function_end 
 */

/**
 * @function steam_networking_sockets_close_listen_socket
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CloseListenSocket](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CloseListenSocket)
 *
 * This function destroys a listen socket. All the connections that were accepted on the listen socket are closed ungracefully.
 *
 * @param {Real} listen_socket The listen socket to destroy; all connections accepted on it are closed ungracefully.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_connect_by_ip_address
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ConnectByIPAddress](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ConnectByIPAddress)
 *
 * This function creates a connection and begins talking to a "server" over UDP at the given IPv4 or IPv6 address. The remote host must be listening with a matching call to ${function.steam_networking_sockets_create_listen_socket_ip} on the specified port.
 * 
 * A [SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t) callback will be triggered when we start connecting, and then another one on either timeout or successful connection.
 *
 * @param {String} ip The IPv4 or IPv6 address of the server to connect to.
 * @param {Real} port The port of the server to connect to.
 * @returns {Real}
 * 
 * @event callback
 * @member {Struct.SteamNetworkingSocketsStatusChanged} data The callback data.
 * @event_end
 * 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_accept_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::AcceptConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#AcceptConnection)
 *
 * This function accepts an incoming connection that has been received on a listen socket.
 * 
 * When a connection attempt is received (perhaps after a few basic handshake packets have been exchanged to prevent trivial spoofing), a connection interface object is created in the `SteamNetworkingConnectionState.Connecting` state and a [SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t) is posted. At this point, your application MUST either accept or close the connection. (It may not ignore it.) Accepting the connection will transition it either into the connected state, or the finding route state, depending on the connection type.
 *
 * @param {Real} conn The handle of the incoming connection to accept.
 * @returns {Enum.SteamApiResult}
 *
 * @event callback
 * @description > **Steamworks Callback**: [ISteamNetworkingSockets::SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t)
 * 
 * Posted whenever a connection is created, destroyed, or changes state.
 * 
 * @member {struct.SteamNetworkingSocketsStatusChanged} result The result of the operation.
 * @event_end
 * @function_end 
 */

/**
 * @function steam_networking_sockets_close_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CloseConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CloseConnection)
 *
 * This function disconnects from the remote host and invalidates the connection handle. Any unread data on the connection is discarded.
 * 
 * If the connection has already ended (`SteamNetworkingConnectionState.ClosedByPeer` or `SteamNetworkingConnectionState.ProblemDetectedLocally`) and you are just freeing up the connection object, then `reason`, `debug` and `linger` are ignored.
 *
 * @param {Real} conn The connection to disconnect.
 * @param {Enum.SteamNetworkingConnectionEnd} reason An application-defined code that will be received on the other end and recorded for diagnostic purposes.
 * @param {String} debug An optional human-readable diagnostic string that will be received on the other end.
 * @param {Bool} linger Whether to attempt to flush any remaining reliable messages before actually closing the connection.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_user_data
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SetConnectionUserData](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionUserData)
 *
 * This function sets the connection user data, which is returned in various queries and structures.
 *
 * @param {Real} conn The connection handle whose user data you want to set.
 * @param {Real} user_data The user data value to associate with the connection.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_user_data
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetConnectionUserData](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionUserData)
 *
 * This function fetches connection user data.
 *
 * @param {Real} conn The connection handle whose user data you want to fetch.
 * @returns {Real} The user data value, or -1 if the handle is invalid or if you haven't set any userdata on the connection
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_name
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SetConnectionName](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionName)
 *
 * This function sets a name for the connection, used mostly for debugging.
 *
 * @param {Real} conn The connection handle whose name you want to set.
 * @param {String} name The name to assign to the connection, used mostly for debugging.
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_connection_name
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetConnectionName](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionName)
 *
 * This function fetches the connection name.
 *
 * @param {Real} conn The connection handle whose name you want to fetch.
 * @returns {String} The connection name, or an empty string `""` if the handle is invalid
 * @function_end 
 */

/**
 * @function steam_networking_sockets_send_message_to_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SendMessageToConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SendMessageToConnection)
 *
 * This function sends a message to the remote host on the specified connection.
 *
 * @param {Real} conn The connection to send the message on.
 * @param {Buffer} data The buffer holding the message data to send.
 * @param {Enum.SteamNetworkingSendFlags} send_flags The send flags that determine the delivery guarantees, buffering behaviour, etc., for the message.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The number of bytes to write. Defaults to the buffer size minus the offset.
 * @returns {Enum.SteamApiResult}
 * @function_end
 */

/**
 * @function steam_networking_sockets_flush_messages_on_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::FlushMessagesOnConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#FlushMessagesOnConnection)
 *
 * This function flushes any messages waiting on the Nagle timer and sends them at the next transmission opportunity.
 * 
 * If Nagle is enabled (it's on by default) then when calling ${function.steam_networking_sockets_send_message_to_connection} the message will be buffered, up to the Nagle time before being sent, to merge small messages into the same packet. (See `SteamNetworkingConfigValue.NagleTime`)
 *
 * @param {Real} conn The connection whose Nagle-buffered messages should be flushed.
 * @returns {Enum.SteamApiResult} 
 * @function_end
 */

/**
 * @function steam_networking_sockets_receive_messages_on_connection
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ReceiveMessagesOnConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ReceiveMessagesOnConnection)
 *
 * This function fetches the next available messages from the connection, if any.
 * 
 * The order of the messages returned in the array is relevant. Reliable messages will be received in the order they were sent.
 * 
 * Unreliable messages may be dropped, or delivered out of order with respect to each other or with respect to reliable messages.
 *
 * @param {Real} conn The connection to read messages from.
 * @param {Buffer} out_data The buffer into which the received message data will be written.
 * @param {Real} count The number of messages to receive.
 * @returns {Array[Struct.SteamNetworkingMessage]}
 * @function_end
 */

/**
 * @function steam_networking_sockets_get_connection_info
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetConnectionInfo](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionInfo)
 *
 * This function returns basic information about the high-level state of the connection.
 *
 * @param {Real} conn The connection handle to query for basic high-level state information.
 * @returns {Struct.SteamNetworkingSocketsConnectionInfo} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_detailed_connection_status
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetDetailedConnectionStatus](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetDetailedConnectionStatus)
 *
 * This function returns very detailed connection stats in diagnostic text format. Useful for dumping to a log, etc. The format of this information is subject to change.
 *
 * @param {Real} conn The connection handle to query for detailed diagnostic status.
 * @returns {String} Connection stats, or an empty string `""` on failure
 * @function_end 
 */

/**
 * @function steam_networking_sockets_run_callbacks
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::RunCallbacks](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#RunCallbacks)
 *
 * This function runs the callbacks related to Steamworks' Networking Sockets functionality.
 * 
 * [[Note: These are normally run automatically when you call ${function.steam_api_run_callbacks}. If you do not want to use Steam's callback dispatch mechanism and you want to use the same callback on all (or most) listen sockets and connections, then you can use this function.]]
 *
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_socket_pair
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreateSocketPair](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateSocketPair)
 *
 * This function creates a pair of connections that are talking to each other, e.g. a loopback connection. This is very useful for testing, or so that your client/server code can work the same even when you are running a local "server".
 * 
 * The two connections will immediately be placed into the connected state, and no callbacks will be posted immediately. After this, if you close either connection, the other connection will receive a callback, exactly as if they were communicating over the network. You must close *both* sides in order to fully clean up the resources!
 * 
 * Both connections will assume a generic "localhost" identity.
 *
 * @param {Bool} use_network_loopback If true, traffic is sent through the local loopback (127.0.0.1), supporting simulated lag and loss; otherwise internal buffers are used.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_listen_socket_p2p
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreateListenSocketP2P](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateListenSocketP2P)
 *
 * This function works like ${function.steam_networking_sockets_create_listen_socket_ip}, but the clients connect using ${function.steam_networking_sockets_connect_p2p}, with the traffic relayed through the Valve network.
 *
 * @param {Real} local_virtual_port The local virtual port that specifies how clients can connect to this socket using ConnectP2P; use zero for a single socket.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_connect_p2p
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ConnectP2P](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ConnectP2P)
 *
 * This function begins connecting to a peer that is identified using a platform-specific identifier.
 *
 * @param {Real} steam_id_remote The platform-specific identity of the remote peer to connect to.
 * @param {Real} remote_virtual_port The remote virtual port on the peer to connect to.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_get_listen_socket_address
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::GetListenSocketAddress](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetListenSocketAddress)
 *
 * This function returns the local IP and port that a listen socket created via ${function.steam_networking_sockets_create_listen_socket_ip} is bound to.
 *
 * @param {Real} listen_socket The listen socket whose bound local IP and port you want to retrieve.
 * @returns {String} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_create_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::CreatePollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreatePollGroup)
 *
 * This function creates a new poll group.
 * 
 * You should destroy the poll group when you are done using ${function.steam_networking_sockets_destroy_poll_group}.
 *
 * @returns {Real} The poll group handle
 * @function_end 
 */

/**
 * @function steam_networking_sockets_destroy_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::DestroyPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#DestroyPollGroup)
 *
 * This function destroys a poll group created with ${function.steam_networking_sockets_create_poll_group}.
 * 
 * If there are any connections in the poll group, they are removed from the group, and left in a state where they are not part of any poll group. Returns `false` if passed an invalid poll group handle.
 *
 * @param {Real} poll_group The poll group to destroy.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_set_connection_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::SetConnectionPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionPollGroup)
 *
 * This function assigns a connection to a poll group. Note that a connection may only belong to a single poll group. Adding a connection to a poll group implicitly removes it from any other poll group it is in.
 * 
 * 
 * 
 * @param {Real} conn The connection to assign to the poll group.
 * @param {Real} poll_group The target poll group; pass an invalid handle (`STEAM_NETWORKING_POLL_GROUP_INVALID`) to remove the connection from any group.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_networking_sockets_receive_messages_on_poll_group
 * @description > **Steamworks Function**: [ISteamNetworkingSockets::ReceiveMessagesOnPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ReceiveMessagesOnPollGroup)
 *
 * This function works like ${function.steam_networking_sockets_receive_messages_on_connection}, but it returns messages from any connection in the poll group.
 * 
 * The function returns an array of structs, where each struct contains an offset into the buffer and a size.
 * 
 * You can pass `STEAM_NETWORKING_POLL_GROUP_INVALID` to remove a connection from its current poll group without adding it to a new poll group.
 * 
 * If there are received messages currently pending on the connection, an attempt is made to add them to the queue of messages for the poll group in approximately the order that would have applied if the connection was already part of the poll group at the time that the messages were received.
 * 
 * Returns `false` if the connection handle is invalid, or if the poll group handle is invalid (and not `STEAM_NETWORKING_POLL_GROUP_INVALID`).
 * 
 * @param {Real} poll_group The poll group to read messages from.
 * @param {Buffer} out_data The buffer into which the received message data will be written.
 * @param {Real} count The number of messages to receive.
 * @returns {Array[Struct.SteamNetworkingMessage]}
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamNetworkingMessagesSessionRequest
 * @description > **Steamworks Struct**: [ISteamNetworkingMessages::SteamNetworkingMessagesSessionRequest_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionRequest_t)
 *
 * This struct holds information posted when a remote host is sending us a message, and we do not already have a session with them.
 *
 * @member {Real} steam_id_remote The Steam ID associated with the remote identity.
 * @struct_end 
 */

/**
 * @struct SteamNetworkingMessagesSessionFailed
 * @description > **Steamworks Struct**: [ISteamNetworkingMessages::SteamNetworkingMessagesSessionFailed_t](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#SteamNetworkingMessagesSessionFailed_t)
 *
 * This struct holds information passed to a `SteamNetworkingMessagesSessionFailed_t` callback.
 *
 * @member {Real} steam_id_remote The Steam ID associated with the remote identity.
 * @member {Enum.SteamNetworkingConnectionEnd} end_reason Basic cause of the connection termination or problem.
 * @member {String} debug_msg Human-readable, but non-localized explanation for connection termination or problem.  This is intended for debugging / diagnostic purposes only, not to display to users.  It might have some details specific to the issue.
 * @struct_end 
 */

/**
 * @struct SteamNetworkingMessage
 * @description > **Steamworks Struct**: [SteamNetworkingMessage_t](partner.steamgames.com/doc/api/steamnetworkingtypes#SteamNetworkingMessage_t)
 * 
 * This struct holds information about a message that has been received.
 * 
 * @member {Real} steam_id_remote The SteamID of the user who sent this message.
 * @member {Real} channel The channel number the message was received on.
 * @member {Real} offset The offset in the buffer (in bytes) at which the message data starts.
 * @member {Real} size The size of the message data, in bytes.
 * @member {Enum.SteamNetworkingSendFlags} flags A bitmask of ${constant.SteamNetworkingSendFlags}. For received messages, only the `SteamNetworkingSendFlags.Reliable` bit is valid. For outbound messages, all bits are relevant.
 * @member {Real} message_number The message number assigned by the sender. This is not used for outbound messages.
 * @member {Real} usec_time_received Local timestamp when the message was received.
 * @member {Real} conn For messages received on connections: what connection did this come from? For outgoing messages: what connection to send it to?
 * @member {Real} conn_user_data Arbitrary user data that you can use when sending messages using ${function.steam_networking_sockets_send_message_to_connection}.
 * @struct_end
 */

/**
 * @struct SteamNetworkingSocketsConnectionInfo
 * @description > **Steamworks Struct**: [SteamNetConnectionInfo_t](partner.steamgames.com/doc/api/steamnetworkingtypes#SteamNetConnectionInfo_t)
 *
 * This struct describes the state of a connection.
 *
 * @member {Real} user_data Arbitrary user data set by the local application code.
 * @member {Enum.SteamNetworkingConnectionEnd} end_reason Basic cause of the connection termination or problem.
 * @member {String} end_debug Human-readable, but non-localized explanation for connection termination or problem.  This is intended for debugging / diagnostic purposes only, not to display to users.  It might have some details specific to the issue.
 * @member {String} connection_description Debug description. This includes the connection handle, connection type (and peer information), and the app name. This string is used in various internal logging messages.
 * @member {Enum.SteamNetworkingConnectionInfoFlags} flags A bitmask of ${constant.SteamNetworkingConnectionInfoFlags}.
 * @member {Enum.SteamNetworkingConnectionState} state High level state of the connection.
 * @member {Real} steam_id_remote The Steam ID associated with the remote identity.
 * @member {String} addr_remote Remote address. Might be all 0's if we don't know it, or if this is N/A. (E.g. Basically everything except direct UDP connection.)
 * @struct_end
 */

/**
 * @struct SteamNetworkingSocketsStatusChanged
 * @description > **Steamworks Struct**: [ISteamNetworkingSockets::SteamNetConnectionStatusChangedCallback_t](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SteamNetConnectionStatusChangedCallback_t)
 *
 * This struct holds the data passed to a callback that is posted whenever a connection is created, destroyed, or changes state. The `info` field will contain a complete description of the connection at the time the change occurred and the callback was posted. In particular, `info.state` will have the new connection state.
 *
 * @member {Real} conn The connection handle.
 * @member {Enum.SteamNetworkingConnectionState} old_state The prevoius state. (current state is in `info.state`)
 * @member {Struct.SteamNetworkingSocketsConnectionInfo} info Full connection info.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamNetworkingIdentityType
 * @description > **Steamworks Enum**: [ESteamNetworkingIdentityType](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetworkingIdentityType)
 *
 * This enum holds the types needed to describe network hosts.
 *
 * @member Invalid Dummy/unknown/invalid
 * @member SteamId Basic platform-specific identifiers.
 * @member IpAddress Use IP address (and port) as the "identity".
 * @member GenericString Generic string.
 * @member GenericBytes Generic binary blobs.
 * @enum_end 
 */

/**
 * @enum SteamNetworkingConnectionEnd
 * @description > **Steamworks Struct**: [ESteamNetConnectionEnd](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetConnectionEnd)
 * @member Invalid Invalid/sentinel value.
 * @member App_Min 1xxx: Application ended the connection in a "usual" manner. E.g.: user intentionally disconnected from the server, gameplay ended normally, etc.
 * @member App_Generic Application ended the connection in a "usual" manner.
 * @member App_Max Max generic value.
 * @member AppException_Min 2xxx: Application ended the connection in some sort of exceptional or unusual manner that might indicate a bug or configuration issue.
 * @member AppException_Generic Application ended the connection in some sort of exceptional or unusual manner that might indicate a bug or configuration issue.
 * @member AppException_Max Max app exception value.
 * @member Local_Min 3xxx: Connection failed or ended because of problem with the local host or their connection to the Internet.
 * @member Local_OfflineMode You cannot do what you want to do because you're running in offline mode.
 * @member Local_ManyRelayConnectivity We don't have any recent successful communication with any relay. We have evidence of recent failures to communicate with multiple relays.
 * @member Local_HostedServerPrimaryRelay A hosted server is having trouble talking to the relay that the client was using, so the problem is most likely on our end.
 * @member Local_NetworkConfig We're not able to get the network config. This is *almost* always a local issue, since the network config comes from the CDN.
 * @member Local_Rights Steam rejected our request because we don't have rights to do this.
 * @member Local_P2P_ICE_NoPublicAddresses Local_P2P_ICE_NoPublicAddresses.
 * @member Local_Max Max system codes value.
 * @member Remote_Min 4xxx: Connection failed or ended, and it appears that the cause does NOT have to do with the local host or their connection to the Internet.  It could be caused by the remote host, or it could be somewhere in between.
 * @member Remote_Timeout The connection was lost, and as far as we can tell our connection to relevant services (relays) has not been disrupted. This doesn't mean that the problem is "their fault", it just means that it doesn't appear that we are having network issues on our end.
 * @member Remote_BadCrypt Something was invalid with the cert or crypt handshake info you gave me, I don't understand or like your key types, etc.
 * @member Remote_BadCert You presented me with a cert that I was able to parseand *technically* we could use encrypted communication. But there was a problem that prevents me from checking your identity or ensuring that somebody int he middle can't observe our communication.
 * @member Remote_BadProtocolVersion Remote_BadProtocolVersion.
 * @member Remote_P2P_ICE_NoPublicAddresses Remote_P2P_ICE_NoPublicAddresses.
 * @member Remote_Max Max "connection failed or ended" value.
 * @member Misc_Min 5xxx: Connection failed for some other reason.
 * @member Misc_Generic A failure that isn't necessarily the result of a software bug, but that should happen rarely enough that it isn't worth specifically writing UI or making a localized message for. The debug string should contain further details.
 * @member Misc_InternalError Generic failure that is most likely a software bug.
 * @member Misc_Timeout The connection to the remote host timed out, but we don't know if the problem is on our end, in the middle, or on their end.
 * @member Misc_SteamConnectivity There's some trouble talking to Steam.
 * @member Misc_NoRelaySessionsToClient A server in a dedicated hosting situation has no relay sessions active with which to talk back to a client.  (It's the client's job to open and maintain those sessions.)
 * @member Misc_P2P_Rendezvous Misc_P2P_Rendezvous.
 * @member Misc_P2P_NAT_Firewall Misc_P2P_NAT_Firewall.
 * @member Misc_PeerSentNoConnection Misc_PeerSentNoConnection.
 * @member Misc_Max Max "connection failed for some other reason" value.
 * @enum_end
 */

/**
 * @enum SteamNetworkingConnectionState
 * @description > **Steamworks Enum**: [ESteamNetworkingState](https://partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetworkingState)
 *
 * This enum holds high level connection states.
 *
 * @member None Dummy value used to indicate an error condition in the API.
 * @member Connecting We are trying to establish whether peers can talk to each other, whether they WANT to talk to each other, perform basic auth, and exchange crypt keys.
 * @member FindingRoute Some connection types use a back channel or trusted 3rd party for earliest communication. If the server accepts the connection, then these connections switch into the rendezvous state. During this state, we still have not yet established an end-to-end route (through the relay network), and so if you send any messages unreliable, they are going to be discarded.
 * @member Connected We've received communications from our peer (and we know who they are) and are all good.
 * @member ClosedByPeer Connection has been closed by our peer, but not closed locally.
 * @member ProblemDetectedLocally A disruption in the connection has been detected locally. (E.g. timeout, local internet connection disrupted, etc.)
 * @member FinWait We've disconnected on our side, and from an API perspective the connection is closed. No more data may be sent or received. All reliable data has been flushed, or else we've given up and discarded it. We do not yet know for sure that the peer knows the connection has been closed.
 * @member Linger We've disconnected on our side, and from an API perspective the connection is closed. No more data may be sent or received. From a network perspective, however, on the wire, we have not yet given any indication to the peer that the connection is closed. We are in the process of flushing out the last bit of reliable data. Once that is done, we will inform the peer that the connection has been closed, and transition to the `FinWait` state.
 * @member Dead Connection is completely inactive and ready to be destroyed.
 * @enum_end
 */

/**
 * @enum SteamNetworkingSendFlags
 * @description > **Steamworks Flags**: [k_nSteamNetworkingSend_*](https://partner.steamgames.com/doc/api/steamnetworkingtypes#message_sending_flags)
 *
 * This enum holds values that are used in bitmask parameters to functions such as ${function.steam_networking_sockets_send_message_to_connection}.
 *
 * @member Unreliable Send the message unreliably. Can be lost. Messages *can* be larger than a single MTU (UDP packet), but there is no retransmission, so if any piece of the message is lost, the entire message will be dropped.
 * @member NoNagle Disable [Nagle's algorithm](https://en.wikipedia.org/wiki/Nagle%27s_algorithm).
 * @member UnreliableNoNagle Send a message unreliably, bypassing Nagle's algorithm for this message and any messages currently pending on the Nagle timer.
 * @member NoDelay If the message cannot be sent very soon (because the connection is still doing some initial handshaking, route negotiations, etc), then just drop it. This is only applicable for unreliable messages. Using this flag on reliable messages is invalid.
 * @member UnreliableNoDelay Send an unreliable message, but if it cannot be sent relatively quickly, just drop it instead of queuing it. This is useful for messages that are not useful if they are excessively delayed, such as voice data.
 * @member Reliable Reliable message send. Can send up to `STEAM_NETWORKING_SOCKETS_MAX_MESSAGE_SIZE_SEND` bytes in a single message. Does fragmentation/re-assembly of messages under the hood, as well as a sliding window for efficient sends of large chunks of data.
 * @member ReliableNoNagle Send a message reliably, but bypass Nagle's algorithm.
 * @member UseCurrentThread UseCurrentThread.
 * @member AutoRestartBrokenSession AutoRestartBrokenSession.
 * @enum_end
 */

/**
 * @enum SteamNetworkingConnectionInfoFlags
 * @description > **Steamworks Flags**: [k_nSteamNetworkConnectionInfoFlags_*](https://partner.steamgames.com/doc/api/steamnetworkingtypes#SteamNetConnectionInfo_t)
 *
 * This enum holds the misc flags found on ${struct.SteamNetworkingSocketsConnectionInfo}'s `flags` member.
 *
 * @member Unauthenticated We don't have a certificate for the remote host.
 * @member Unencrypted Information is being sent out over a wire unencrypted (by this library).
 * @member LoopbackBuffers Internal loopback buffers. Won't be true for localhost. (You can check the address to determine that.) This implies `Fast`.
 * @member Fast The connection is "fast" and "reliable". Either internal/localhost (check the address to find out), or the peer is on the same LAN. (Probably. It's based on the address and the ping time, this is actually hard to determine unambiguously).
 * @member Relayed The connection is relayed somehow (SDR or TURN).
 * @member DualWifi We're taking advantage of dual-wifi multi-path.
 * @enum_end
 */

/**
 * @enum SteamNetworkingConfigValue
 * @description > **Steamworks Flags**: [ESteamNetworkingConfigValue](https://partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetworkingConfigValue)
 * 
 * This enumeration holds named identifiers for various config values.
 * 
 * @member Invalid Invalid.
 * @member TimeoutInitial Timeout value (in ms) to use when first connecting
 * @member TimeoutConnected Timeout value (in ms) to use after connection is established
 * @member SendBufferSize Upper limit of buffered pending bytes to be sent, if this is reached SendMessage will return `SteamApiResult.LimitExceeded`)
 * @member RecvBufferSize Upper limit of buffer used for receiving bytes.
 * @member RecvBufferMessages Upper limit on the number of received messages that will be buffered waiting to be processed by the application. If this limit is exceeded, packets will be dropped.  This is to protect us from a malicious peer flooding us with messages faster than we can pull them off the wire.
 * @member RecvMaxMessageSize Maximum message size that we are willing to receive. if a client attempts to send us a message larger than this, the connection will be immediately closed.
 * @member RecvMaxSegmentsPerPacket Max number of segments per packet.
 * @member ConnectionUserData Get/set userdata as a configuration option.
 * @member SendRateMin Minimum send rate clamp, 0 is no limit.
 * @member SendRateMax Maximum send rate clamp, 0 is no limit.
 * @member NagleTime Nagle time, in microseconds.
 * @member IPAllowWithoutAuth Don't automatically fail IP connections that don't have strong auth.
 * @member MTUSize Maximum Transmission Unit size.
 * @member LogLevelAcknowledged Log level for RTT acknowledged.
 * @member LogLevelAlerts Log level for alerts.
 * @enum_end
 */

// MODULE

/**
 * @module networking
 * @title Networking
 * @desc > **Steamworks Interfaces**: [ISteamNetworking](https://partner.steamgames.com/doc/api/ISteamNetworking), [ISteamNetworkingMessages](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages), [ISteamNetworkingSockets](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets)
 * 
 * This module contains networking functions for making connections and sending data between clients, traversing NATs when possible.
 * 
 * [[Note: The [ISteamNetworking](https://partner.steamgames.com/doc/api/ISteamNetworking) API is deprecated. This module groups the functionality of the [ISteamNetworkingMessages](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages) and [ISteamNetworkingSockets](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets). See the [Steam Networking](https://partner.steamgames.com/doc/features/multiplayer/networking) overview for more information.]]
 * 
 * @section_func Networking Messages
 * @desc These are the functions available when using the Messages module:
 * @ref steam_networking_messages_*
 * @section_end
 * 
 * @section_func Networking Sockets
 * @desc These are the functions available when using the Sockets module:
 * @ref steam_networking_sockets_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Networking module:
 * @ref SteamNetworking*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Networking module:
 * @ref SteamNetworking*
 * @section_end
 * @module_end
 */
