// FUNCTIONS

/**
 * @func steam_gameserver_init
 * @desc > **Steam Function**: [SteamGameServer_Init](https://partner.steamgames.com/doc/api/steam_gameserver#SteamGameServer_Init)
 *
 * This function initializes the Steam GameServer API. Set the extension's **Initialization Mode** option to `Dedicated Server` before using this in a dedicated server build so the extension skips client Steam API startup.
 *
 * After this function succeeds, set required server fields such as ${function.steam_gameserver_set_product}, ${function.steam_gameserver_set_game_description}, ${function.steam_gameserver_set_mod_dir} and ${function.steam_gameserver_set_dedicated_server}, then call ${function.steam_gameserver_log_on_anonymous} or ${function.steam_gameserver_log_on}.
 *
 * @param {struct.GameServerInitConfig} config The initialization settings
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_initialised
 * @desc This function returns whether the Steam GameServer API has been initialized by ${function.steam_gameserver_init}.
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_update
 * @desc > **Steam Function**: [SteamGameServer_RunCallbacks](https://partner.steamgames.com/doc/api/steam_gameserver#SteamGameServer_RunCallbacks)
 *
 * This function dispatches Steam GameServer callbacks. Call it frequently while the dedicated server is running. The shared ${function.steam_update} function also dispatches GameServer callbacks after the GameServer API is initialized.
 *
 * @returns {bool}
 *
 * @event steam
 * @desc Triggered when the game server connects to Steam.
 * @member {string} event_type The string value `"steam_gameserver_servers_connected"`
 * @event_end
 *
 * @event steam
 * @desc Triggered when the game server fails to connect to Steam.
 * @member {string} event_type The string value `"steam_gameserver_servers_connect_failure"`
 * @member {real} result The Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code
 * @member {bool} still_retrying Whether Steam is still retrying the connection
 * @event_end
 *
 * @event steam
 * @desc Triggered when the game server disconnects from Steam.
 * @member {string} event_type The string value `"steam_gameserver_servers_disconnected"`
 * @member {real} result The Steam [EResult](https://partner.steamgames.com/doc/api/steam_api#EResult) code
 * @event_end
 *
 * @event steam
 * @desc Triggered when Steam responds with the server's secure policy.
 * @member {string} event_type The string value `"steam_gameserver_policy_response"`
 * @member {bool} secure Whether the game server is VAC secure
 * @event_end
 *
 * @event steam
 * @desc Triggered when a game server auth session ticket is validated.
 * @member {string} event_type The string value `"steam_gameserver_validate_auth_ticket_response"`
 * @member {bool} success Whether the auth response was OK
 * @member {real} response The Steam auth session response. You can use the `STEAMWORKS_AUTH_SESSION_RESPONSE` enum.
 * @member {int64} steam_id The user SteamID
 * @member {int64} owner_steam_id The owner SteamID
 * @event_end
 *
 * @event steam
 * @desc Triggered when a player is approved by the game server auth system.
 * @member {string} event_type The string value `"steam_gameserver_client_approve"`
 * @member {int64} steam_id The user SteamID
 * @member {int64} owner_steam_id The owner SteamID
 * @event_end
 *
 * @event steam
 * @desc Triggered when a player is denied by the game server auth system.
 * @member {string} event_type The string value `"steam_gameserver_client_deny"`
 * @member {int64} steam_id The user SteamID
 * @member {real} deny_reason The deny reason
 * @member {string} optional_text Optional diagnostic text
 * @event_end
 *
 * @event steam
 * @desc Triggered when Steam requests that the game server kick a player.
 * @member {string} event_type The string value `"steam_gameserver_client_kick"`
 * @member {int64} steam_id The user SteamID
 * @member {real} deny_reason The deny reason
 * @event_end
 *
 * @event steam
 * @desc Triggered when ${function.steam_gameserver_request_user_group_status} completes.
 * @member {string} event_type The string value `"steam_gameserver_client_group_status"`
 * @member {int64} steam_id The user SteamID
 * @member {int64} group_steam_id The group SteamID
 * @member {bool} member Whether the user is a member
 * @member {bool} officer Whether the user is an officer
 * @event_end
 *
 * @func_end
 */

/**
 * @func steam_gameserver_shutdown
 * @desc > **Steam Function**: [SteamGameServer_Shutdown](https://partner.steamgames.com/doc/api/steam_gameserver#SteamGameServer_Shutdown)
 *
 * This function shuts down the Steam GameServer API.
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_set_product
 * @desc > **Steam Function**: [ISteamGameServer::SetProduct](https://partner.steamgames.com/doc/api/ISteamGameServer#SetProduct)
 *
 * This function sets the game product identifier. Set it before logging on.
 *
 * @param {string} product The product identifier
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_set_game_description
 * @desc > **Steam Function**: [ISteamGameServer::SetGameDescription](https://partner.steamgames.com/doc/api/ISteamGameServer#SetGameDescription)
 *
 * This function sets the game description displayed in the Steam server browser. Set it before logging on.
 *
 * @param {string} description The game description
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_set_mod_dir
 * @desc > **Steam Function**: [ISteamGameServer::SetModDir](https://partner.steamgames.com/doc/api/ISteamGameServer#SetModDir)
 *
 * This function sets the mod directory identifier. For a non-mod game, pass an empty string.
 *
 * @param {string} mod_dir The mod directory identifier
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_set_dedicated_server
 * @desc > **Steam Function**: [ISteamGameServer::SetDedicatedServer](https://partner.steamgames.com/doc/api/ISteamGameServer#SetDedicatedServer)
 *
 * This function sets whether the server is a dedicated server. Set it before logging on.
 *
 * @param {bool} dedicated Whether this is a dedicated server
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_log_on
 * @desc > **Steam Function**: [ISteamGameServer::LogOn](https://partner.steamgames.com/doc/api/ISteamGameServer#LogOn)
 *
 * This function logs on using a persistent game server login token.
 *
 * @param {string} token The game server login token
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_log_on_anonymous
 * @desc > **Steam Function**: [ISteamGameServer::LogOnAnonymous](https://partner.steamgames.com/doc/api/ISteamGameServer#LogOnAnonymous)
 *
 * This function logs on anonymously.
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_log_off
 * @desc > **Steam Function**: [ISteamGameServer::LogOff](https://partner.steamgames.com/doc/api/ISteamGameServer#LogOff)
 *
 * This function logs the game server off Steam.
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_logged_on
 * @desc > **Steam Function**: [ISteamGameServer::BLoggedOn](https://partner.steamgames.com/doc/api/ISteamGameServer#BLoggedOn)
 *
 * This function checks whether the game server is logged on.
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_secure
 * @desc > **Steam Function**: [ISteamGameServer::BSecure](https://partner.steamgames.com/doc/api/ISteamGameServer#BSecure)
 *
 * This function checks whether the game server is VAC secure.
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_get_steam_id
 * @desc > **Steam Function**: [ISteamGameServer::GetSteamID](https://partner.steamgames.com/doc/api/ISteamGameServer#GetSteamID)
 *
 * This function gets the SteamID assigned to the game server.
 *
 * @returns {int64}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_was_restart_requested
 * @desc > **Steam Function**: [ISteamGameServer::WasRestartRequested](https://partner.steamgames.com/doc/api/ISteamGameServer#WasRestartRequested)
 *
 * This function checks whether Steam has requested a server restart.
 *
 * @returns {bool}
 *
 * @func_end
 */

/**
 * @func steam_gameserver_set_max_player_count
 * @desc > **Steam Function**: [ISteamGameServer::SetMaxPlayerCount](https://partner.steamgames.com/doc/api/ISteamGameServer#SetMaxPlayerCount)
 *
 * @param {real} max_players The maximum number of players
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_bot_player_count
 * @desc > **Steam Function**: [ISteamGameServer::SetBotPlayerCount](https://partner.steamgames.com/doc/api/ISteamGameServer#SetBotPlayerCount)
 *
 * @param {real} bot_players The number of bot players
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_server_name
 * @desc > **Steam Function**: [ISteamGameServer::SetServerName](https://partner.steamgames.com/doc/api/ISteamGameServer#SetServerName)
 *
 * @param {string} name The server name
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_map_name
 * @desc > **Steam Function**: [ISteamGameServer::SetMapName](https://partner.steamgames.com/doc/api/ISteamGameServer#SetMapName)
 *
 * @param {string} map_name The map name
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_password_protected
 * @desc > **Steam Function**: [ISteamGameServer::SetPasswordProtected](https://partner.steamgames.com/doc/api/ISteamGameServer#SetPasswordProtected)
 *
 * @param {bool} password_protected Whether the server requires a password
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_spectator_port
 * @desc > **Steam Function**: [ISteamGameServer::SetSpectatorPort](https://partner.steamgames.com/doc/api/ISteamGameServer#SetSpectatorPort)
 *
 * @param {real} port The spectator port
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_spectator_server_name
 * @desc > **Steam Function**: [ISteamGameServer::SetSpectatorServerName](https://partner.steamgames.com/doc/api/ISteamGameServer#SetSpectatorServerName)
 *
 * @param {string} name The spectator server name
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_clear_all_key_values
 * @desc > **Steam Function**: [ISteamGameServer::ClearAllKeyValues](https://partner.steamgames.com/doc/api/ISteamGameServer#ClearAllKeyValues)
 *
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_key_value
 * @desc > **Steam Function**: [ISteamGameServer::SetKeyValue](https://partner.steamgames.com/doc/api/ISteamGameServer#SetKeyValue)
 *
 * @param {string} key The rule key
 * @param {string} value The rule value
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_game_tags
 * @desc > **Steam Function**: [ISteamGameServer::SetGameTags](https://partner.steamgames.com/doc/api/ISteamGameServer#SetGameTags)
 *
 * @param {string} tags The server tags string
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_game_data
 * @desc > **Steam Function**: [ISteamGameServer::SetGameData](https://partner.steamgames.com/doc/api/ISteamGameServer#SetGameData)
 *
 * @param {string} game_data The game data string
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_region
 * @desc > **Steam Function**: [ISteamGameServer::SetRegion](https://partner.steamgames.com/doc/api/ISteamGameServer#SetRegion)
 *
 * @param {string} region The region identifier
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_set_advertise_server_active
 * @desc > **Steam Function**: [ISteamGameServer::SetAdvertiseServerActive](https://partner.steamgames.com/doc/api/ISteamGameServer#SetAdvertiseServerActive)
 *
 * This function controls whether the game server is advertised to master servers and responds to server browser queries.
 *
 * @param {bool} active Whether the server should advertise itself
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_get_public_ip
 * @desc > **Steam Function**: [ISteamGameServer::GetPublicIP](https://partner.steamgames.com/doc/api/ISteamGameServer#GetPublicIP)
 *
 * This function gets the public IP address Steam sees for the game server.
 *
 * @returns {struct.SteamGameServerPublicIP}
 * @func_end
 */

/**
 * @func steam_gameserver_handle_incoming_packet
 * @desc > **Steam Function**: [ISteamGameServer::HandleIncomingPacket](https://partner.steamgames.com/doc/api/ISteamGameServer#HandleIncomingPacket)
 *
 * This function passes a master server query packet to Steam when using shared query port mode.
 *
 * @param {buffer} buffer The buffer containing the packet
 * @param {real} size The packet size
 * @param {real} src_ip The source IP in host order
 * @param {real} src_port The source port
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_get_next_outgoing_packet
 * @desc > **Steam Function**: [ISteamGameServer::GetNextOutgoingPacket](https://partner.steamgames.com/doc/api/ISteamGameServer#GetNextOutgoingPacket)
 *
 * This function gets the next outgoing master server packet when using shared query port mode. Call this repeatedly until the returned `size` is 0.
 *
 * @param {buffer} buffer The buffer to write the packet to
 * @param {real} [max_size] The maximum packet size, defaults to 16 KiB
 * @returns {struct.SteamGameServerOutgoingPacket}
 * @func_end
 */

/**
 * @func steam_gameserver_get_auth_session_ticket
 * @desc > **Steam Function**: [ISteamGameServer::GetAuthSessionTicket](https://partner.steamgames.com/doc/api/ISteamGameServer#GetAuthSessionTicket)
 *
 * This function creates an auth session ticket for the game server.
 *
 * @returns {struct.SteamGameServerAuthTicket}
 * @func_end
 */

/**
 * @func steam_gameserver_begin_auth_session
 * @desc > **Steam Function**: [ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession)
 *
 * This function begins validating an auth session ticket received from a player.
 *
 * @param {buffer} buffer The buffer holding the ticket
 * @param {real} ticket_size The ticket size in bytes
 * @param {int64} steam_id The SteamID that sent the ticket
 * @returns {real} A Steam begin auth session result. You can use the `STEAMWORKS_BEGIN_AUTH_SESSION_RESULT` enum.
 * @func_end
 */

/**
 * @func steam_gameserver_end_auth_session
 * @desc > **Steam Function**: [ISteamGameServer::EndAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#EndAuthSession)
 *
 * @param {int64} steam_id The SteamID to stop validating
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_cancel_auth_ticket
 * @desc > **Steam Function**: [ISteamGameServer::CancelAuthTicket](https://partner.steamgames.com/doc/api/ISteamGameServer#CancelAuthTicket)
 *
 * @param {real} auth_ticket_handle The auth ticket handle returned by ${function.steam_gameserver_get_auth_session_ticket}
 * @returns {bool}
 * @func_end
 */

/**
 * @func steam_gameserver_user_has_license_for_app
 * @desc > **Steam Function**: [ISteamGameServer::UserHasLicenseForApp](https://partner.steamgames.com/doc/api/ISteamGameServer#UserHasLicenseForApp)
 *
 * @param {int64} steam_id The user SteamID
 * @param {real} app_id The app ID to check
 * @returns {constant.steam_user_has_license_for_app_result}
 * @func_end
 */

/**
 * @func steam_gameserver_request_user_group_status
 * @desc > **Steam Function**: [ISteamGameServer::RequestUserGroupStatus](https://partner.steamgames.com/doc/api/ISteamGameServer#RequestUserGroupStatus)
 *
 * @param {int64} steam_id The user SteamID
 * @param {int64} group_steam_id The group SteamID
 * @returns {bool}
 * @func_end
 */

// CONSTANTS

/**
 * @constant steam_gameserver_mode
 * @desc > **Steamworks Enumeration**: [EServerMode](https://partner.steamgames.com/doc/api/steam_gameserver#EServerMode)
 *
 * [[Note: Alternatively, you can use the `STEAMWORKS_GAMESERVER_MODE` enum.]]
 *
 * @member steam_gameserver_mode_invalid Deprecated, do not use
 * @member steam_gameserver_mode_no_authentication Do not authenticate logins and do not list on the server list
 * @member steam_gameserver_mode_authentication Authenticate users and list on the server list
 * @member steam_gameserver_mode_authentication_and_secure Authenticate users, list on the server list and VAC protect clients
 * @constant_end
 */

/**
 * @constant steam_gameserver_query_port
 * @desc Query port constants for ${function.steam_gameserver_init}.
 *
 * [[Note: Alternatively, you can use the `STEAMWORKS_GAMESERVER_QUERY_PORT` enum.]]
 *
 * @member steam_gameserver_query_port_shared Use GameSocketShare mode. The value is 65535, equivalent to `(uint16)-1`.
 * @constant_end
 */

/**
 * @constant steam_user_has_license_for_app_result
 * @desc > **Steamworks Enumeration**: [EUserHasLicenseForAppResult](https://partner.steamgames.com/doc/api/steam_api#EUserHasLicenseForAppResult)
 *
 * [[Note: Alternatively, you can use the `STEAMWORKS_USER_HAS_LICENSE_FOR_APP_RESULT` enum.]]
 *
 * @member steam_user_has_license_for_app_result_has_license The user has a license
 * @member steam_user_has_license_for_app_result_does_not_have_license The user does not have a license
 * @member steam_user_has_license_for_app_result_no_auth The server is not authenticated with Steam
 * @constant_end
 */

// STRUCTS

/**
 * @struct GameServerInitConfig
 * @desc This struct configures ${function.steam_gameserver_init}.
 *
 * @member {real|string} ip The IPv4 address to bind in host order, or a dotted IPv4 string. Use `0` or `"0.0.0.0"` for all local IPv4 addresses.
 * @member {real} steam_port The local port used to communicate with Steam, defaults to 8766
 * @member {real} game_port The gameplay port clients connect to, defaults to 27015
 * @member {real} query_port The server browser query port, defaults to 27016. Use ${constant.steam_gameserver_query_port_shared} for shared query port mode.
 * @member {constant.steam_gameserver_mode} server_mode The authentication mode, defaults to ${constant.steam_gameserver_mode_authentication}
 * @member {string} version The server version string, defaults to `"1.0.0.0"`
 * @struct_end
 */

/**
 * @struct SteamGameServerPublicIP
 * @desc This struct is returned by ${function.steam_gameserver_get_public_ip}.
 *
 * @member {bool} is_set Whether Steam reported an IP address
 * @member {real} type The Steam IP type
 * @member {real} ipv4 The IPv4 address in host order, or 0
 * @member {string} ipv4_string The IPv4 address as a dotted string, or an empty string
 * @struct_end
 */

/**
 * @struct SteamGameServerOutgoingPacket
 * @desc This struct is returned by ${function.steam_gameserver_get_next_outgoing_packet}.
 *
 * @member {bool} success Whether a packet was written
 * @member {real} size The number of bytes written, or 0 if there are no packets
 * @member {real} ip The destination IP in host order
 * @member {string} ip_string The destination IP as a dotted string
 * @member {real} port The destination port
 * @struct_end
 */

/**
 * @struct SteamGameServerAuthTicket
 * @desc This struct is returned by ${function.steam_gameserver_get_auth_session_ticket}.
 *
 * @member {buffer} ticket_buffer The buffer containing the ticket, or -1 if no ticket was created
 * @member {real} ticket_size The ticket size in bytes
 * @member {real} auth_ticket_handle The auth ticket handle to pass to ${function.steam_gameserver_cancel_auth_ticket}
 * @struct_end
 */

// MODULES

/**
 * @module dedicated_servers
 * @title Dedicated Servers
 * @desc > **Steamworks Interfaces**: [steam_gameserver.h](https://partner.steamgames.com/doc/api/steam_gameserver), [ISteamGameServer](https://partner.steamgames.com/doc/api/ISteamGameServer)
 *
 * This module exposes the Steam GameServer API for GameMaker dedicated server builds.
 *
 * @section Setup
 * @desc For dedicated server builds, set the extension option **Initialization Mode** to `Dedicated Server`. This prevents client Steam API initialization and lets your server initialize with ${function.steam_gameserver_init}.
 * @section_end
 *
 * @section_func Lifecycle
 * @desc These functions initialize, update and shut down the GameServer API:
 * @ref steam_gameserver_init
 * @ref steam_gameserver_initialised
 * @ref steam_gameserver_update
 * @ref steam_gameserver_shutdown
 * @section_end
 *
 * @section_func Login And Status
 * @desc These functions log on and query server status:
 * @ref steam_gameserver_log_on
 * @ref steam_gameserver_log_on_anonymous
 * @ref steam_gameserver_log_off
 * @ref steam_gameserver_logged_on
 * @ref steam_gameserver_secure
 * @ref steam_gameserver_get_steam_id
 * @ref steam_gameserver_was_restart_requested
 * @section_end
 *
 * @section_func Server Configuration
 * @desc These functions configure server browser data:
 * @ref steam_gameserver_set_product
 * @ref steam_gameserver_set_game_description
 * @ref steam_gameserver_set_mod_dir
 * @ref steam_gameserver_set_dedicated_server
 * @ref steam_gameserver_set_max_player_count
 * @ref steam_gameserver_set_bot_player_count
 * @ref steam_gameserver_set_server_name
 * @ref steam_gameserver_set_map_name
 * @ref steam_gameserver_set_password_protected
 * @ref steam_gameserver_set_spectator_port
 * @ref steam_gameserver_set_spectator_server_name
 * @ref steam_gameserver_clear_all_key_values
 * @ref steam_gameserver_set_key_value
 * @ref steam_gameserver_set_game_tags
 * @ref steam_gameserver_set_game_data
 * @ref steam_gameserver_set_region
 * @ref steam_gameserver_set_advertise_server_active
 * @ref steam_gameserver_get_public_ip
 * @section_end
 *
 * @section_func Shared Query Port
 * @desc These functions support GameSocketShare mode:
 * @ref steam_gameserver_handle_incoming_packet
 * @ref steam_gameserver_get_next_outgoing_packet
 * @section_end
 *
 * @section_func Authentication
 * @desc These functions handle server auth tickets and license checks:
 * @ref steam_gameserver_get_auth_session_ticket
 * @ref steam_gameserver_begin_auth_session
 * @ref steam_gameserver_end_auth_session
 * @ref steam_gameserver_cancel_auth_ticket
 * @ref steam_gameserver_user_has_license_for_app
 * @ref steam_gameserver_request_user_group_status
 * @section_end
 *
 * @section_const Constants
 * @desc Constants used by the dedicated server module:
 * @ref steam_gameserver_mode
 * @ref steam_gameserver_query_port
 * @ref steam_user_has_license_for_app_result
 * @section_end
 *
 * @section_struct Structs
 * @desc Structs used by the dedicated server module:
 * @ref GameServerInitConfig
 * @ref SteamGameServerPublicIP
 * @ref SteamGameServerOutgoingPacket
 * @ref SteamGameServerAuthTicket
 * @section_end
 *
 * @module_end
 */
