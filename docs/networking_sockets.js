// FUNCTIONS

/**
 * @func steam_net_sockets_create_listen_socket_ip
 * @desc > **Steam Function**: [ISteamnetworkingSockets::CreateListenSocketIP](https://partner.steamgames.com/doc/api/ISteamnetworkingSockets#CreateListenSocketIP)
 * 
 * This function creates a "server" socket that listens for clients to connect to by calling ${function.steam_net_sockets_connect_by_ip}, over ordinary UDP (IPv4 or IPv6). You must select a specific local port to listen on and set it as the port field of the local address.
 * 
 * @param {string} ip The local IP address
 * @param {real} port The local port to listen on
 * 
 * @returns {real} Listen socket handle (>= 0) or -1
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_connect_by_ip
 * @desc > **Steam Function**: [ISteamNetworkingSockets::ConnectByIPAddress](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ConnectByIPAddress)
 * 
 * This function creates a connection and begins talking to a "server" over UDP at the given IPv4 or IPv6 address. The remote host must be listening with a matching call to ${function.steam_net_sockets_create_listen_socket_ip} on the specified port.
 * 
 * A ${event.steam} will be triggered when we start connecting, and then another one on either timeout or successful connection.
 * 
 * @param {string} ip The IP address to connect to
 * @param {real} port The port to connect to
 * 
 * @returns {real} Connection handle (>= 0) or -1
 * 
 * @event steam
 * @desc This event is triggered whenever a connection is created, destroyed, or changes state.
 * @member {string} event_type The string `"steam_net_message_on_state_change"`
 * @member {real} connection The connection handle
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} state The current state
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} old_state The previous state
 * @member {real} end_reason The end reason (one of [ESteamNetConnectionEnd](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetConnectionEnd))
 * @member {string} debug A debug message
 * @event_end
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_create_listen_socket_p2p
 * @desc > **Steam Function**: [ISteamNetworkingSockets::CreateListenSocketP2P](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateListenSocketP2P)
 * 
 * This function works like ${function.steam_net_sockets_create_listen_socket_ip}, but clients will connect using ${function.steam_net_sockets_connect_p2p}. The connection will be relayed through the Valve network.
 * 
 * @param {real} local_virtual_port This specifies how clients can connect to this socket using ${function.steam_net_sockets_connect_p2p}. It's very common for applications to only have one listening socket; in that case, use zero. If you need to open multiple listen sockets and have clients be able to connect to one or the other, then this should be a small integer (<1000) unique to each listen socket you create.
 * 
 * @returns {real} Listen socket handle (>= 0) or -1
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_connect_p2p
 * @desc > **Steam Function**: [ISteamNetworkingSockets::ConnectP2P](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ConnectP2P)
 * 
 * This function begins connecting to a peer that is identified using a platform-specific identifier. This uses the default rendezvous service, which depends on the platform and library configuration. (E.g. on Steam, it goes through the Steam backend.) The traffic is relayed over the Steam Datagram Relay network.
 * 
 * @param {int64} steam_id64 The SteamID to connect to
 * @param {real} virtual_port The virtual port to use
 * 
 * @returns {real} Connection handle (>= 0) or -1
 * 
 * @event steam
 * @desc This event is triggered whenever a connection is created, destroyed, or changes state.
 * @member {string} event_type The string `"steam_net_message_on_state_change"`
 * @member {real} connection The connection handle
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} state The current state
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} old_state The previous state
 * @member {real} end_reason The end reason (one of [ESteamNetConnectionEnd](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetConnectionEnd))
 * @member {string} debug A debug message
 * @event_end
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_accept_connection
 * @desc > **Steam Function**: [ISteamNetworkingSockets::AcceptConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#AcceptConnection)
 * 
 * This function accepts an incoming connection that has been received on a listen socket.
 * 
 * @param {real} connection The connection handle
 * 
 * @returns {real} The Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code
 * 
 * @event steam
 * @desc This event is triggered whenever a connection is created, destroyed, or changes state.
 * @member {string} event_type The string `"steam_net_message_on_state_change"`
 * @member {real} connection The connection handle
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} state The current state
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} old_state The previous state
 * @member {real} end_reason The end reason (one of [ESteamNetConnectionEnd](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetConnectionEnd))
 * @member {string} debug A debug message
 * @event_end
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_close_connection
 * @desc > **Steam Function**: [ISteamNetworkingSockets::CloseConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CloseConnection)
 * 
 * This function disconnects from the remote host and invalidates the connection handle. Any unread data on the connection is discarded.
 * 
 * @param {real} connection The connection to a peer
 * @param {constant.STEAMWORKS_NET_CONNECTION_STATE} reason An application defined code that will be received on the other end and recorded (when possible) in backend analytics
 * @param {string} [debug] An optional human-readable diagnostic string that will be received by the remote host and recorded (when possible) in backend analytics
 * @param {bool} linger Set to `true` to attempt to deliver any remaining outbound reliable messages before actually closing the connection. Otherwise any unsent reliable data is discarded.
 * 
 * @returns {bool}
 * 
 * @event steam
 * @desc This event is triggered whenever a connection is created, destroyed, or changes state.
 * @member {string} event_type The string `"steam_net_message_on_state_change"`
 * @member {real} connection The connection handle
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} state The current state
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} old_state The previous state
 * @member {real} end_reason The end reason (one of [ESteamNetConnectionEnd](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetConnectionEnd))
 * @member {string} debug A debug message
 * @event_end
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_close_listen_socket
 * @desc > **Steam Function**: [ISteamNetworkingSockets::CloseListenSocket](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CloseListenSocket)
 * 
 * This function destroys a listen socket. All the connections that were accepted on the listen socket are closed ungracefully.
 * 
 * @param {real} listen_socket The listen socket to destroy
 * 
 * @returns {bool}
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_create_socket_pair
 * @desc > **Steam Function**: [ISteamNetworkingSockets::CreateSocketPair](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreateSocketPair)
 * 
 * This function creates a pair of connections that are talking to each other, e.g. a loopback connection. This is very useful for testing, or so that your client/server code can work the same even when you are running a local "server".
 * 
 * The two connections will immediately be placed into the connected state, and no callbacks will be posted immediately. After this, if you close either connection, the other connection will receive a callback, exactly as if they were communicating over the network. You must close *both* sides in order to fully clean up the resources!
 * 
 * Note that this extension function doesn't support assigning a specific identity to either connection.
 * 
 * @param {bool} use_loopback Set to `true` to cause the socket pair to send packets through the local network loopback device (127.0.0.1) on ephemeral ports. Fake lag and loss are supported in this case, and CPU time is expended to encrypt and decrypt.
 * 
 * @returns {array[struct]} An array holding a struct for each connection, with each struct having `connection` (${type.real}), `identity` (${type.string}) and `loopback` (${type.bool}) variables
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_send_message
 * @desc > **Steam Function**: [ISteamNetworkingSockets::SendMessageToConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SendMessageToConnection)
 * 
 * This function sends a single message to the remote host on the specified connection.
 * 
 * @param {real} connection The connection to send the message to
 * @param {buffer} buffer The buffer holding the message data to send
 * @param {real} size The number of bytes to send
 * @param {constant.STEAMWORKS_NET_SEND_FLAG} send_flags A bitmask of send flags. Determines the delivery guarantees that will be provided, when data should be buffered, etc.
 * 
 * @returns {struct} A struct holding the Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code (`result`) and the message number assigned to the message (`message_id`), if sending was successful
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_send_messages
 * @desc > **Steam Function**: [ISteamNetworkingSockets::SendMessages](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SendMessages)
 * 
 * This function sends the same message to all connections in the provided array. This is the most efficient way to send messages.
 * 
 * @param {array[real]} connection_array An array storing the connection handles
 * @param {buffer} buffer The buffer holding the message data to send
 * @param {real} size The number of bytes to send (-1 sends all of the buffer's contents)
 * @param {constant.STEAMWORKS_NET_SEND_FLAG} send_flags A bitmask of send flags. Determines the delivery guarantees that will be provided, when data should be buffered, etc.
 * @param {real} [lane] The lane to use
 * 
 * @returns {real} The Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code, or -1 if an case of an error
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_flush_messages_on_connection
 * @desc > **Steam Function**: [ISteamNetworkingSockets::FlushMessagesOnConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#FlushMessagesOnConnection)
 * 
 * This function flushes any messages waiting on the Nagle timer and sends them at the next transmission opportunity (often that means right now).
 * 
 * If Nagle is enabled (it's on by default) then when calling ${function.steam_net_sockets_send_message} the message will be buffered, up to the Nagle time before being sent, to merge small messages into the same packet. (See k_ESteamNetworkingConfig_NagleTime).
 * 
 * @param {real} connection The connection handle
 * 
 * @returns {real} The Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_recv_messages_on_connection
 * @desc > **Steam Function**: [ISteamNetworkingSockets::ReceiveMessagesOnConnection](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ReceiveMessagesOnConnection)
 * 
 * This function fetches the next available message(s) from the given connection (if any) and writes their data to the given buffer. It does this for up to up to `max_messages` messages.
 * 
 * The function returns an array with a struct element containing offset and size for each message.
 * 
 * A `max_size` value can also be specified to limit the number of bytes written.
 * 
 * @param {real} connection The connection to receive messages on
 * @param {buffer} buffer The buffer to write the messages to
 * @param {real} max_messages The maximum number of messages to retrieve (32 by default, capped to a maximum value of 256)
 * @param {real} max_size The maximum number of bytes to write in this function call for all messages combined
 * 
 * @returns {array[struct]} An array containing structs with the `offset` (${type.real}) and `size` (${type.real}) of each message in the buffer and whether that message was `truncated` (${type.bool})
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_create_poll_group
 * @desc > **Steam Function**: [ISteamNetworkingSockets::CreatePollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#CreatePollGroup)
 * 
 * This function creates a new poll group.
 * 
 * You should destroy the poll group when you are done using ${function.steam_net_sockets_destroy_poll_group}.
 * 
 * @returns {real} The poll group handle, or -1 in case something went wrong
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_destroy_poll_group
 * @desc > **Steam Function**: [ISteamNetworkingSockets::DestroyPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#DestroyPollGroup)
 * 
 * This function destroys a poll group created with ${function.steam_net_sockets_create_poll_group}.
 * 
 * @param {real} poll_group The poll group handle
 * 
 * @returns {bool} Whether successful or not
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_set_connection_poll_group
 * @desc > **Steam Function**: [ISteamNetworkingSockets::SetConnectionPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionPollGroup)
 * 
 * This function assigns a connection to a poll group. Note that a connection may only belong to a single poll group. Adding a connection to a poll group implicitly removes it from any other poll group it is in.
 * 
 * @param {real} connection The connection handle
 * @param {real} poll_group The poll group to assign the connection to
 * 
 * @returns {bool} Whether successful or not
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_recv_messages_on_poll_group
 * @desc > **Steam Function**: [ISteamNetworkingSockets::ReceiveMessagesOnPollGroup](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ReceiveMessagesOnPollGroup)
 * 
 * This function is the same as ${function.steam_net_sockets_recv_messages_on_connection}, but will return the next messages available on any connection in the poll group. Examine a struct's `connection` to know which connection.
 * 
 * Delivery order of messages among different connections will usually match the order that the last packet was received which completed the message. But this is not a strong guarantee, especially for packets received right as a connection is being assigned to poll group.
 * 
 * @param {real} poll_group The poll group on which to receive messages
 * @param {buffer} buffer The buffer to write the messages to
 * @param {real} max_messages The maximum number of messages to write
 * @param {real} max_size The maximum number of bytes to write
 * 
 * @returns {array[struct]} An array of structs holding `offset` (${type.real}) and `size` (${type.real}),  `connection` handle (${type.real}), `flags` (${constant.STEAMWORKS_NET_SEND_FLAG}) and `lane` (${type.real}) of each message
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_connection_info
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetConnectionInfo](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionInfo)
 * 
 * This function returns a struct that holds basic information about the high-level state of the connection.
 * 
 * @param {real} connection The connection handle
 * 
 * @returns {struct.ConnectionInfo} Connection info struct, `undefined` if the information couldn't be retrieved, or the [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) error code if the function returned an error
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_connection_real_time_status
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetConnectionRealTimeStatus](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionRealTimeStatus)
 * 
 * This function returns a small set of information about the real-time state of the connection and the queue status of each lane.
 * 
 * @param {real} connection The connection handle
 * 
 * @returns {struct.ConnectionRealTimeStatus} A struct holding real-time info about the connection, the [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) error code if the Steam function returned one, or `undefined` if there was another issue
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_detailed_connection_status
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetDetailedConnectionStatus](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetDetailedConnectionStatus)
 * 
 * This function returns very detailed connection stats in diagnostic text format. Useful for dumping to a log, etc. The format of this information is subject to change.
 * 
 * @param {real} connection The connection handle
 * @param {buffer} buffer The buffer to write the data to
 * 
 * @returns {string} A string holding the connection status, or `undefined` if an error occurred
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_set_connection_user_data
 * @desc > **Steam Function**: [ISteamNetworkingSockets::SetConnectionUserData](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionUserData)
 * 
 * This function sets connection user data. The data is used in the following places:
 * 
 * * You can query it using ${function.steam_net_sockets_get_connection_user_data}.
 * * Networking messages (The Steam `SteamNetworkingMessage_t` structure.)
 * * The ${struct.ConnectionInfo} struct.
 * 
 * @param {real} connection The connection handle
 * @param {int64} user_data The user data
 * 
 * @returns {bool} `false` if the handle is invalid, `true` otherwise
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_connection_user_data
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetConnectionUserData](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionUserData)
 * 
 * This fetches connection user data. Returns -1 if the handle is invalid or if you haven't set any user data on the connection.
 * 
 * @param {real} connection The connection handle
 * 
 * @returns {int64}
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_set_connection_name
 * @desc > **Steam Function**: [ISteamNetworkingSockets::SetConnectionName](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#SetConnectionName)
 * 
 * This function sets a name for the connection, used mostly for debugging.
 * 
 * @param {real} connection The connection handle
 * @param {string} name The name to use
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_connection_name
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetConnectionName](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetConnectionName)
 * 
 * This function fetches the connection name, or returns an empty string `""` if the handle is invalid.
 * 
 * @param {real} connection The connection handle
 * 
 * @returns {string}
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_configure_connection_lanes
 * @desc > **Steam Function**: [ISteamNetworkingSockets::ConfigureConnectionLanes](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#ConfigureConnectionLanes)
 * 
 * This function configures multiple outbound message streams ("lanes") on a connection, and controls head-of-line blocking between them. Messages within a given lane are always sent in the order they are queued, but messages from different lanes may be sent out of order. Each lane has its own message number sequence. The first message sent on each lane will be assigned the number 1.
 * 
 * Each lane has a "priority". Lower priority lanes will only be processed when all higher-priority lanes are empty. The magnitudes of the priority values are not relevant, only their sort order. Higher numeric values take priority over lower numeric values.
 * 
 * Each lane also is assigned a weight, which controls the approximate proportion of the bandwidth that will be consumed by the lane, relative to other lanes of the same priority. (This is assuming the lane stays busy. An idle lane does not build up "credits" to be spent once a message is queued.) This value is only meaningful as a proportion, relative to other lanes with the same priority. For lanes with different priorities, the strict priority order will prevail, and their weights relative to each other are not relevant. Thus, if a lane has a unique priority value, the weight value for that lane is not relevant.
 * 
 * @param {real} connection The connection handle
 * @param {real} lane_count The number of lanes
 * @param {buffer} priorities_buffer buffer storing the priorities as `buffer_s32` values
 * @param {buffer} weights_buffer buffer storing the weights as `buffer_u16` values
 * 
 * @returns {bool}
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_listen_socket_address
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetListenSocketAddress](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetListenSocketAddress)
 * 
 * This function returns the local IP and port that a listen socket created using ${function.steam_net_sockets_create_listen_socket_ip} is bound to.
 * 
 * Specific IPv6/IPv4 addresses may be returned if you bound the socket to a particular interface.\
 * An IPv6 address of ::0 means "any IPv4 or IPv6"\
 * An IPv6 address of ::ffff:0000:0000 means "any IPv4"
 * 
 * @param {real} listen_socket The listen socket
 * 
 * @returns {string} A string holding the address as "ip:port", or an empty string `""` if the handle is invalid or the information is not available for that type of listen socket
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_identity
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetIdentity](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetIdentity)
 * 
 * This function gets the identity assigned to this interface.
 * 
 * E.g. on Steam, this is the user's SteamID, or for the gameserver interface, the SteamID assigned to the gameserver. Returns `false` in the `success` key if we don't know our identity yet. (E.g. GameServer has not logged in. On Steam, the user will know their SteamID even if they are not signed into Steam.)
 * 
 * @returns {struct.Identity}
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_init_authentication
 * @desc > **Steam Function**: [ISteamNetworkingSockets::InitAuthentication](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#InitAuthentication)
 * 
 * This function indicates our desire to be ready participate in authenticated communications. If we are currently not ready, then steps will be taken to obtain the necessary certificates. (This includes a certificate for us, as well as any CA certificates needed to authenticate peers.)
 * 
 * You can use ${function.steam_net_sockets_get_authentication_status} to monitor the status.
 * 
 * Returns the current value that would be returned from ${function.steam_net_sockets_get_authentication_status}.
 * 
 * @returns {constant.STEAMWORKS_NET_AVAILABILITY}
 * 
 * @func_end
 */

/**
 * @func steam_net_sockets_get_authentication_status
 * @desc > **Steam Function**: [ISteamNetworkingSockets::GetAuthenticationStatus](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets#GetAuthenticationStatus)
 * 
 * This function queries our readiness to participate in authenticated communications.
 * 
 * @returns {struct} A struct containing variables `availability` (${constant.STEAMWORKS_NET_AVAILABILITY}) and `debug_message` (${type.string}), or `undefined` if the status could not be retrieved
 * 
 * @func_end
 */

// CONSTANTS

/**
 * @constant STEAMWORKS_NET_FAKE_IP_TYPE
 * @desc > **Steamworks**: [ESteamNetworkingFakeIPType]()
 * 
 * This enumeration holds the types of fake IP.
 * 
 * @member INVALID Error, argument was not even an IP address, etc.
 * @member NOT_FAKE Argument was a valid IP, but was not from the reserved "fake" range
 * @member GLOBAL_IPV4 Globally unique (for a given app) IPv4 address. Address space managed by Steam
 * @member LOCAL_IPV4 Locally unique IPv4 address.  Address space managed by the local process. For internal use only; should not be shared!
 * @constant_end
 */

/**
 * @constant STEAMWORKS_NET_IDENTITY_TYPE
 * @desc > **Steamworks Enumeration**: [ESteamNetworkingIdentityType](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetworkingIdentityType)
 * 
 * This enumeration holds the different types of identities that a remote host can have. Most of the time on Steam, this will be a SteamID. However, in some cases you can disable authentication, in which case a more generic identity will be used.
 * 
 * @member INVALID Dummy/unknown/invalid
 * @member STEAM_ID 64-bit SteamID
 * @member IP_ADDRESS Use an IP address (and port) as the "identity".
 * @member GENERIC_STRING Generic string. It's up to your app to interpret this.
 * @member GENERIC_BYTES Generic binary blobs. It's up to your app to interpret this.
 * @constant_end
 */

/**
 * @constant STEAMWORKS_NET_AVAILABILITY
 * @desc > **Steamworks Enumeration**: [ESteamNetworkingAvailability]()
 * 
 * @member CANNOT_TRY A dependent resource is missing, so this service is unavailable. (E.g. we cannot talk to routers because Internet is down or we don't have the network config.)
 * @member FAILED We have tried for enough time that we would expect to have been successful by now. We have never been successful.
 * @member PREVIOUSLY We tried and were successful at one time, but now it looks like we have a problem.
 * @member RETRYING We previously failed and are currently retrying.
 * @member NEVER_TRIED We don't know because we haven't ever checked/tried.
 * @member WAITING We're waiting on a dependent resource to be acquired. (E.g. we cannot obtain a cert until we are logged into Steam. We cannot measure latency to relays until we have the network config.)
 * @member ATTEMPTING We're actively trying now, but are not yet successful.
 * @member CURRENT Resource is online/available.
 * @member UNKNOWN Internal dummy/sentinel, or value is not applicable in this context
 * @constant_end
 */

/**
 * @constant STEAMWORKS_NET_SEND_FLAG
 * @desc > **Steamworks Flags**: [k_nSteamNetworkingSend_*](https://partner.steamgames.com/doc/api/steamnetworkingtypes#message_sending_flags)
 * 
 * These values are used in bitmask parameters to functions for message sending such as ${function.steam_net_sockets_send_message}.
 * 
 * @member UNRELIABLE Send the message unreliably. Can be lost. Messages *can* be larger than a single MTU (UDP packet), but there is no retransmission, so if any piece of the message is lost, the entire message will be dropped.
 * @member NO_NAGLE Disable [Nagle's algorithm](https://en.wikipedia.org/wiki/Nagle%27s_algorithm).
 * @member UNRELIABLE_NO_NAGLE Send a message unreliably, bypassing Nagle's algorithm for this message and any messages currently pending on the Nagle timer.
 * @member NO_DELAY If the message cannot be sent very soon (because the connection is still doing some initial handshaking, route negotiations, etc), then just drop it. This is only applicable for unreliable messages. Using this flag on reliable messages is invalid.
 * @member UNRELIABLE_NO_DELAY Send an unreliable message, but if it cannot be sent relatively quickly, just drop it instead of queuing it. This is useful for messages that are not useful if they are excessively delayed, such as voice data.
 * @member RELIABLE Reliable message send. Can send up to k_cbMaxSteamNetworkingSocketsMessageSizeSend bytes in a single message. Does fragmentation/re-assembly of messages under the hood, as well as a sliding window for efficient sends of large chunks of data.
 * @member RELIABLE_NO_NAGLE Send a message reliably, but bypass Nagle's algorithm.
 * @constant_end
 */

/**
 * @constant STEAMWORKS_NET_CONNECTION_STATE
 * @desc > **Steamworks Enumeration**: [ESteamNetworkingConnectionState](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetworkingConnectionState)
 * 
 * This enumeration holds the possible high level connection states.
 * 
 * @member NONE Dummy value used to indicate an error condition in the API. Specified connection doesn't exist or has already been closed.
 * @member CONNECTING We are trying to establish whether peers can talk to each other, whether they WANT to talk to each other, perform basic auth, and exchange crypt keys.
 * @member FINDING_ROUTE Some connection types use a back channel or trusted 3rd party for earliest communication. If the server accepts the connection, then these connections switch into the rendezvous state. During this state, we still have not yet established an end-to-end route (through the relay network), and so if you send any messages unreliable, they are going to be discarded.
 * @member CONNECTED We've received communications from our peer (and we know who they are) and are all good.
 * @member CLOSED_BY_PEER Connection has been closed by our peer, but not closed locally.
 * @member PROBLEM_LOCAL A disruption in the connection has been detected locally. (E.g. timeout, local internet connection disrupted, etc.)
 * @member FIN_WAIT We've disconnected on our side, and from an API perspective the connection is closed. No more data may be sent or received.  All reliable data has been flushed, or else we've given up and discarded it. We do not yet know for sure that the peer knows the connection has been closed.
 * @member LINGER We've disconnected on our side, and from an API perspective the connection is closed. No more data may be sent or received.  From a network perspective, however, on the wire, we have not yet given any indication to the peer that the connection is closed. We are in the process of flushing out the last bit of reliable data.  Once that is done, we will inform the peer that the connection has been closed, and transition to the `FIN_WAIT` state.
 * @member DEAD Connection is completely inactive and ready to be destroyed.
 * @member TERMINATED Connection was terminated
 * @constant_end
 */

// STRUCTS

/**
 * @struct Identity
 * @desc > **Steamworks Struct**: [SteamNetworkingIdentity](partner.steamgames.com/doc/api/steamnetworkingtypes#SteamNetworkingIdentity)
 * 
 * This struct represents an abstract way to represent the identity of a network host.
 * 
 * @member {constant.STEAMWORKS_NET_IDENTITY_TYPE} type The type of identity
 * @member {string} type_name The identity type as a string
 * @member {string} identity_string A human-readable string version of the identity. This is suitable for debug messages or any other time you need to encode the identity as a string. It has a URL-like format (type:<type-data>).
 * @member {int64} steam_id The SteamID as a raw 64-bit number
 * @member {string} xbox_pairwise_id Publisher-specific user identity, as string
 * @member {int64} psn_id 64-bit PSN ID
 * @member {string} generic_string A generic string value
 * @member {string} generic_bytes A Base64-encoded string holding generic byte data
 * @member {string} generic_bytes_len The number of bytes in `generic_bytes`
 * @member {string} ip The identity's IP address
 * @member {bool} is_local_host `true` if this identity is localhost, `false` otherwise
 * @struct_end
 */

/**
 * @struct ConnectionInfo
 * @desc > **Steamworks Struct**: [SteamNetConnectionInfo_t](https://partner.steamgames.com/doc/api/steamnetworkingtypes#SteamNetConnectionInfo_t)
 * 
 * This struct describes the state of a connection.
 * 
 * @member {constant.STEAMWORKS_NET_CONNECTION_STATE} state The connection state
 * @member {real} end_reason The reason the connection was ended (one of [ESteamNetConnectionEnd](partner.steamgames.com/doc/api/steamnetworkingtypes#ESteamNetConnectionEnd))
 * @member {constant.STEAMWORKS_NET_SEND_FLAG} flags A bitmask of the flags
 * @member {int64} user_data Arbitrary user data set by the local application code
 * @member {real} listen_socket The listen socket
 * @member {real} remote_pop What data center is the remote host in?  (0 if we don't know.)
 * @member {real} relay_pop What relay are we using to communicate with the remote host? (0 if not applicable.)
 * @member {string} remote_identity Who is on the other end?  Depending on the connection type and phase of the connection, we might not know
 * @member {string} remote_addr Remote address. Might be all 0's if we don't know it, or if this is N/A. (E.g. Basically everything except direct UDP connection.)
 * @member {string} description Debug description. This includes the connection handle, connection type (and peer information), and the app name. This string is used in various internal logging messages.
 * @member {string} debug Human-readable, but non-localized explanation for connection termination or problem.  This is intended for debugging / diagnostic purposes only, not to display to users. It might have some details specific to the issue.
 * @struct_end
 */

/**
 * @struct ConnectionRealTimeStatus
 * @desc > **Steamworks Struct**: [SteamNetConnectionRealTimeStatus_t]()
 * 
 * This struct holds information on the connection state.
 * 
 * @member {real} state The high level state of the connection
 * @member {real} ping The current ping (ms)
 * @member {real} local_quality Connection quality measured locally, 0...1. (Percentage of packets delivered end-to-end in order).
 * @member {real} remote_quality Packet delivery success rate as observed from remote host
 * @member {real} out_packets_per_sec Current out packets per second from recent history
 * @member {real} out_bytes_per_sec Current out bytes per second from recent history
 * @member {real} in_packets_per_sec Current in packets per second from recent history
 * @member {real} in_bytes_per_sec Current in bytes per second from recent history
 * @member {real} send_rate_bytes_per_sec Estimate rate that we believe that we can send data to our peer.
 * @member {real} pending_unreliable Number of bytes pending to be sent. This is data that you have recently requested to be sent but has not yet actually been put on the wire.
 * @member {real} pending_reliable This number also includes data that was previously placed on the wire, but has now been scheduled for re-transmission.
 * @member {real} sent_unacked_reliable Number of bytes of reliable data that has been placed the wire, but for which we have not yet received an acknowledgment, and thus we may have to re-transmit.
 * @member {int64} queue_time_usec If you queued a message right now, approximately how long would that message wait in the queue before we actually started putting its data on the wire in a packet?
 * @struct_end
 */

// MODULES

/**
 * @module networking_sockets
 * @title Networking Sockets
 * @desc > **Steamworks Interface**: [ISteamNetworkingSockets](https://partner.steamgames.com/doc/api/ISteamNetworkingSockets)
 * 
 * The Networking Sockets module of the Steam extension provides a networking API similar to Berkeley sockets, but for games.
 * 
 * * It's a connection-oriented API (like TCP, not UDP). When sending and receiving messages, the peer is identified using a connection handle.
 * * But unlike TCP, it's message-oriented, not stream-oriented. (The boundaries between the messages are maintained by the API.)
 * * Both reliable and unreliable messages are supported.
 * * Large messages are split into multiple packets, small messages are combined into fewer packets.
 * * A robust ACK / reassembly / retransmission strategy.
 * * Strong encryption and authentication. When a player connects, you can be sure that if a certain SteamID is authenticated, that someone who has access to that person's account has authorized the connection. Eavesdropping / tampering requires hacking into the VAC-secured process. Impersonation requires access to the target's computer.
 * * Supports relayed connections through the Valve network. This prevents IP addresses from being revealed, protecting your players and gameservers from attack.
 * * Also supports standard connectivity over plain UDP using IPv4 or IPv6.
 * 
 * See: [Steam Networking](https://partner.steamgames.com/doc/features/multiplayer/networking)
 * 
 * @section Connection Status Callback
 * @desc This callback is triggered *any* time a connection changes state. This includes new incoming connections, successful outgoing connections, disconnections, failures, and transitions between internal states.
 * 
 * Steam will invoke this callback automatically whenever:
 * 
 * 1. A remote peer starts connecting to your listen socket (incoming P2P or IP connection request)
 * 2. You call ${function.steam_net_sockets_connect_p2p} or ${function.steam_net_sockets_connect_by_ip} and the connection progresses through states:
 *   * Connecting
 *   * Finding Route
 *   * Connected
 * 3. The connection encounters a problem:
 *   * Timed out
 *   * Lost route
 *   * Ended by peer
 *   * Rejected
 * 4. You call ${function.steam_net_sockets_accept_connection}, ${function.steam_net_sockets_close_connection}, etc.
 * 5. Steam networking changes internal routing state (e.g., switching to relays, NAT punch-through events)
 * 
 * The extension will trigger a ${event.steam} of `event_type` `"steam_net_message_on_state_change"` for callbacks of this type.
 * 
 * @section_end
 * 
 * @section_func Basic Sockets
 * @desc These are the basic functions for working with sockets:
 * @ref steam_net_sockets_create_listen_socket_ip
 * @ref steam_net_sockets_connect_by_ip
 * @ref steam_net_sockets_create_listen_socket_p2p
 * @ref steam_net_sockets_connect_p2p
 * @ref steam_net_sockets_accept_connection
 * @ref steam_net_sockets_close_connection
 * @ref steam_net_sockets_close_listen_socket
 * @section_end
 * 
 * @section_func Socket Pair (Local Connection)
 * @desc These functions allow working with socket pairs:
 * @ref steam_net_sockets_create_socket_pair
 * @section_end
 * 
 * @section_func Send / Receive Messages
 * @desc The following functions can be used to send/receive messages:
 * @ref steam_net_sockets_send_message
 * @ref steam_net_sockets_send_messages
 * @ref steam_net_sockets_flush_messages_on_connection
 * @ref steam_net_sockets_recv_messages_on_connection
 * @section_end
 * 
 * @section_func Poll Groups
 * @desc The following functions can be used to create and use poll groups:
 * @ref steam_net_sockets_create_poll_group
 * @ref steam_net_sockets_destroy_poll_group
 * @ref steam_net_sockets_set_connection_poll_group
 * @ref steam_net_sockets_recv_messages_on_poll_group
 * @section_end
 * 
 * @section_func Connection Info
 * @desc The following functions provide info about a connection:
 * @ref steam_net_sockets_get_connection_info
 * @ref steam_net_sockets_get_connection_real_time_status
 * @ref steam_net_sockets_get_detailed_connection_status
 * @section_end
 * 
 * @section_func User Data / Connection Name
 * @desc These functions get info on user data and the connection name:
 * @ref steam_net_sockets_set_connection_user_data
 * @ref steam_net_sockets_get_connection_user_data
 * @ref steam_net_sockets_set_connection_name
 * @ref steam_net_sockets_get_connection_name
 * @section_end
 * 
 * @section_func Connection Lanes
 * @desc The following function allows configuring connection lanes:
 * @ref steam_net_sockets_configure_connection_lanes
 * @section_end
 * 
 * @section_func Addresses / Identity / Auth
 * @desc These functions are used to work with addresses, identities and authentication:
 * @ref steam_net_sockets_get_listen_socket_address
 * @ref steam_net_sockets_get_identity
 * @ref steam_net_sockets_init_authentication
 * @ref steam_net_sockets_get_authentication_status
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants used by the Steam extension's networking sockets and messages modules:
 * @ref STEAMWORKS_NET_FAKE_IP_TYPE
 * @ref STEAMWORKS_NET_IDENTITY_TYPE
 * @ref STEAMWORKS_NET_AVAILABILITY
 * @ref STEAMWORKS_NET_CONNECTION_STATE
 * @ref STEAMWORKS_NET_SEND_FLAG
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs used by the Steam extension's networking sockets and messages modules:
 * @ref Identity
 * @ref ConnectionInfo
 * @ref ConnectionRealTimeStatus
 * @section_end
 * 
 * @module_end
 */