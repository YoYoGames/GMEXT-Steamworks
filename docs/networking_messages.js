// FUNCTIONS

/**
 * @func steam_net_messages_register_callbacks
 * @desc > **Steamworks Function**: N / A
 * 
 * This function registers the internal Steam Networking Messages callback handler. It should be called once after Steam initialisation.
 * 
 * A call to this function is required to receive async events of type:
 * 
 * * `steam_net_message_on_session_request`
 * * `steam_net_message_on_session_failed`
 * 
 * @returns {bool}
 * 
 * @event steam
 * @desc This event is triggered when a remote host is sending us a message, and we do not already have a session with them.
 * @member {string} event_type The string `"steam_net_message_on_session_request"`
 * @member {int64} steamid The user's Steam ID
 * @member {string} identity_string The identity string
 * @member {constant.STEAMWORKS_NET_IDENTITY_TYPE} identity_type The type of identity
 * @member {string} ip IP address including the port number
 * @member {bool} is_local_host Whether this identity is localhost
 * @member {constant.STEAMWORKS_NET_FAKE_IP_TYPE} fake_ip_type The fake IP type
 * @event_end
 * 
 * @event steam
 * @desc This event is triggered when we fail to establish a connection, or we detect that communications have been disrupted in an unusual way.
 * @member {string} event_type The string `"steam_net_message_on_session_failed"`
 * @member {int64} steamid The user's Steam ID
 * @member {real} state The high level state of the connection
 * @member {real} end_reason The basic cause of the connection termination or problem
 * @member {constant.STEAMWORKS_NET_SEND_FLAG} flags The send flags
 * @member {int64} user_data Arbitrary user data set by the local application code
 * @member {real} listen_socket Handle to listen socket this was connected on (0 indicates invalid)
 * @member {real} remote_pop What data center is the remote host in?  (0 if we don't know.)
 * @member {real} relay_pop What relay are we using to communicate with the remote host? (0 if not applicable.)
 * @member {string} remote_identity Who is on the other end?  Depending on the connection type and phase of the connection, we might not know
 * @member {string} remote_addr Remote address. Might be all 0's if we don't know it, or if this is N/A. (E.g. Basically everything except direct UDP connection.)
 * @member {string} description Debug description. This includes the connection handle, connection type (and peer information), and the app name. This string is used in various internal logging messages.
 * @member {string} debug Human-readable, but non-localized explanation for connection termination or problem.  This is intended for debugging / diagnostic purposes only, not to display to users. It might have some details specific to the issue.
 * @event_end
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_unregister_callbacks
 * @desc > **Steamworks Function**: N / A
 * 
 * This function unregisters and deletes the callback handler created earlier. Call this when unloading or shutting down networking.
 * 
 * @returns {bool}
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_send
 * @desc > **Steamworks Function**: [ISteamnetworkingMessages::SendMessageToUser](https://partner.steamgames.com/doc/api/ISteamnetworkingMessages#SendMessageToUser)
 * 
 * This function sends a message to a specific Steam user on a given channel.
 * 
 * @param {int64} steamid64 The remote user's SteamID64
 * @param {real} channel The local channel number
 * @param {buffer} buffer The buffer containing the data
 * @param {real} size The number of bytes to send
 * @param {constant.STEAMWORKS_NET_SEND_FLAG} send_flags The send flags to use
 * 
 * @returns {real} -1 on error, positive values indicate a Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_accept_session
 * @desc > **Steamworks Function**: [ISteamNetworkingMessages::AcceptSessionWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#AcceptSessionWithUser)
 * 
 * This function accepts a pending message session request from a user.
 * 
 * @param {int64} steamid64 The remote user's SteamID64
 * 
 * @returns {bool}
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_close_session
 * @desc > **Steamworks Function**: [ISteamNetworkingMessages::CloseSessionWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#CloseSessionWithUser)
 * 
 * This function closes any active message session with this user.
 * 
 * @param {int64} steamid64 The remote user's SteamID64
 * 
 * @returns {bool}
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_close_channel
 * @desc > **Steamworks Function**: [ISteamNetworkingMessages::CloseChannelWithUser](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#CloseChannelWithUser)
 * 
 * This function closes a specific channel for messaging with that user.
 * 
 * @param {int64} steamid64 The remote user's SteamID64
 * 
 * @returns {bool}
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_receive_on_channel
 * @desc > **Steamworks Function**: [ISteamNetworkingMessages::ReceiveMessagesOnChannel](https://partner.steamgames.com/doc/api/ISteamNetworkingMessages#ReceiveMessagesOnChannel)
 * 
 * This function receives at most one message from the specified channel. Also records metadata for "last message" helpers.
 * 
 * The function returns one of the following:
 * 
 * * -1 on error (buffer not found or couldn't write to buffer)
 * * >= 0 - The number of bytes copied
 * 
 * @param {real} channel The channel number
 * @param {buffer} buffer The buffer to write the data into
 * @param {real} max_size The maximum allowed number of bytes to write
 * 
 * @returns {real}
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_get_last_size
 * @desc > **Steamworks Function**: N / A
 * 
 * This function returns the FULL size of the last received message (even if it was truncated when written into a buffer).
 * 
 * @returns {real}
 * 
 * @func_end
 */

/**
 * @func steam_net_messages_get_last_steam_id
 * @desc > **Steamworks Function**: N / A
 * 
 * This function returns the SteamID64 of the sender of the last received message, or 0 if the identity was not a SteamID.
 * 
 * @returns {int64}
 * 
 * @func_end
 */

// MODULES

/**
 * @module networking_messages
 * @title Networking Messages
 * @desc > **Steamworks Interface**: [ISteamnetworkingMessages](https://partner.steamgames.com/doc/api/ISteamnetworkingMessages)
 * 
 * The Networking Messages module of the Steamworks extension is intended to make it easy to port non-connection-oriented code to take advantage of P2P connectivity and [Steam Datagram Relay](https://partner.steamgames.com/doc/features/multiplayer/steamdatagramrelay).
 * 
 * While the ${module.networking_sockets} module is connection-oriented (like TCP), meaning you need to listen and connect, and then you send messages using a connection handle. ${module.networking_messages}, on the other hand, is more like UDP, in that you can just send messages to arbitrary peers at any time. The underlying connections are established implicitly.
 * 
 * See: [Steam Networking](https://partner.steamgames.com/doc/features/multiplayer/networking)
 * 
 * @section_func General
 * @desc The following are general functions for working with messages:
 * @ref steam_net_messages_register_callbacks
 * @ref steam_net_messages_unregister_callbacks
 * @ref steam_net_messages_get_last_size
 * @ref steam_net_messages_get_last_steam_id
 * @section_end
 * 
 * @section_func Sending and receiving messages
 * @desc The following functions are used for sending and receiving:
 * @ref steam_net_messages_send
 * @ref steam_net_messages_receive_on_channel
 * @section_end
 * 
 * @section_func Managing sessions with peers
 * @desc The following functions are used for managing sessions:
 * @ref steam_net_messages_accept_session
 * @ref steam_net_messages_close_session
 * @ref steam_net_messages_close_channel
 * @section_end
 * 
 * @module_end
 */