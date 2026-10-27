// FUNCTIONS

/**
 * @func steam_parties_get_num_available_beacon_locations
 * @desc > **Steamworks Function**: [ISteamParties::GetNumAvailableBeaconLocations](https://partner.steamgames.com/doc/api/isteamparties#GetNumAvailableBeaconLocations)
 *
 * This function returns the number of Steam locations where the local user can post a party beacon. Use the returned `count` to size UI and to decide whether ${function.steam_parties_get_available_beacon_locations} has anything useful to return.
 *
 * @returns {struct} A struct containing `ok` (${type.bool}) and `count` (${type.real}). `count` is `0` when `ok` is `false`.
 *
 * @event steam
 * @desc This event is triggered when Steam updates the list of locations where the local user can post a party beacon.
 * @member {string} event_type The string `"steam_parties_available_beacon_locations_updated"`.
 * @member {real} count Number of available beacon locations after the update.
 * @event_end
 *
 * @example
 * ```gml
 * var _locations = steam_parties_get_num_available_beacon_locations();
 * if (_locations.ok && _locations.count > 0)
 * {
 *     show_debug_message("Party beacon locations: " + string(_locations.count));
 * }
 * ```
 * The above code checks whether Steam has any locations where this user can advertise a party.
 * @func_end
 */

/**
 * @func steam_parties_get_available_beacon_locations
 * @desc > **Steamworks Function**: [ISteamParties::GetAvailableBeaconLocations](https://partner.steamgames.com/doc/api/isteamparties#GetAvailableBeaconLocations)
 *
 * This function returns the Steam locations where the local user can post a party beacon. The `location_types` and `location_ids` arrays use matching indexes, so `location_types[i]` and `location_ids[i]` describe the same location.
 *
 * @returns {struct} A struct containing `ok` (${type.bool}), `count` (${type.real}), `location_types` (${type.array}), and `location_ids` (${type.array}). The `location_types` array contains real-valued location types. The `location_ids` array contains int64 location IDs.
 *
 * @example
 * ```gml
 * var _locations = steam_parties_get_available_beacon_locations();
 * if (_locations.ok)
 * {
 *     for (var i = 0; i < _locations.count; i++)
 *     {
 *         var _type = _locations.location_types[i];
 *         var _id = _locations.location_ids[i];
 *         var _name = steam_parties_get_beacon_location_data(_type, _id, STEAM_PARTIES_BEACON_LOCATION_DATA.DATA_NAME);
 *         show_debug_message("Beacon location: " + _name);
 *     }
 * }
 * ```
 * The above code lists every location returned by Steam and reads the display name for each one.
 * @func_end
 */

/**
 * @func steam_parties_get_num_active_beacons
 * @desc > **Steamworks Function**: [ISteamParties::GetNumActiveBeacons](https://partner.steamgames.com/doc/api/isteamparties#GetNumActiveBeacons)
 *
 * This function returns the number of active party beacons visible to the local user.
 *
 * @returns {real}
 *
 * @event steam
 * @desc This event is triggered when Steam updates the visible active beacon list.
 * @member {string} event_type The string `"steam_parties_active_beacons_updated"`.
 * @member {real} count Number of active beacons after the update.
 * @event_end
 *
 * @example
 * ```gml
 * var _count = steam_parties_get_num_active_beacons();
 * for (var i = 0; i < _count; i++)
 * {
 *     var _beacon_id = steam_parties_get_beacon_by_index(i);
 *     var _details = steam_parties_get_beacon_details(_beacon_id);
 *     if (_details.ok)
 *     {
 *         show_debug_message("Beacon metadata: " + _details.metadata);
 *     }
 * }
 * ```
 * The above code iterates through the active beacons visible to the local user.
 * @func_end
 */

/**
 * @func steam_parties_get_beacon_by_index
 * @desc > **Steamworks Function**: [ISteamParties::GetBeaconByIndex](https://partner.steamgames.com/doc/api/isteamparties#GetBeaconByIndex)
 *
 * This function returns the beacon ID at the given active-beacon index. Valid indexes are from `0` to one less than the value returned by ${function.steam_parties_get_num_active_beacons}.
 *
 * @param {real} index The active beacon index.
 *
 * @returns {int64}
 *
 * @example
 * ```gml
 * var _beacon_id = steam_parties_get_beacon_by_index(0);
 * if (_beacon_id != 0)
 * {
 *     steam_parties_join_party(_beacon_id);
 * }
 * ```
 * The above code requests to join the first active beacon, if one exists.
 * @func_end
 */

/**
 * @func steam_parties_get_beacon_details
 * @desc > **Steamworks Function**: [ISteamParties::GetBeaconDetails](https://partner.steamgames.com/doc/api/isteamparties#GetBeaconDetails)
 *
 * This function returns details for a visible active party beacon.
 *
 * @param {int64} beacon_id The beacon ID returned by ${function.steam_parties_get_beacon_by_index}.
 *
 * @returns {struct} A struct containing `ok` (${type.bool}), `beacon_owner_steam_id` (${type.int64}), `location_type` (${type.real}), `location_id` (${type.int64}), and `metadata` (${type.string}). The ID fields are `0` and `metadata` is an empty string when `ok` is `false`.
 *
 * @example
 * ```gml
 * var _details = steam_parties_get_beacon_details(beacon_id);
 * if (_details.ok)
 * {
 *     show_debug_message("Beacon owner: " + string(_details.beacon_owner_steam_id));
 *     show_debug_message("Beacon metadata: " + _details.metadata);
 * }
 * ```
 * The above code reads the owner and metadata for a beacon.
 * @func_end
 */

/**
 * @func steam_parties_get_beacon_location_data
 * @desc > **Steamworks Function**: [ISteamParties::GetBeaconLocationData](https://partner.steamgames.com/doc/api/isteamparties#GetBeaconLocationData)
 *
 * This function returns a display string for a beacon location, such as its name or icon URL.
 *
 * @param {real} location_type Beacon location type.
 * @param {int64} location_id Beacon location ID.
 * @param {constant.STEAM_PARTIES_BEACON_LOCATION_DATA} data_kind The location data field to read.
 *
 * @returns {string}
 *
 * @example
 * ```gml
 * var _locations = steam_parties_get_available_beacon_locations();
 * if (_locations.ok && _locations.count > 0)
 * {
 *     var _name = steam_parties_get_beacon_location_data(
 *         _locations.location_types[0],
 *         _locations.location_ids[0],
 *         STEAM_PARTIES_BEACON_LOCATION_DATA.DATA_NAME
 *     );
 * }
 * ```
 * The above code reads the display name for the first available beacon location.
 * @func_end
 */

/**
 * @func steam_parties_create_beacon
 * @desc > **Steamworks Function**: [ISteamParties::CreateBeacon](https://partner.steamgames.com/doc/api/isteamparties#CreateBeacon)
 *
 * This function starts creating a party beacon at a Steam location. Steam shows the beacon in that location and lets up to `open_slots` users reserve a place in the party. Only one beacon can be active for the local process at a time.
 *
 * @param {real} open_slots Number of open reservation slots.
 * @param {real} location_type Beacon location type returned by ${function.steam_parties_get_available_beacon_locations}.
 * @param {int64} location_id Beacon location ID returned by ${function.steam_parties_get_available_beacon_locations}.
 * @param {string} connect_string String passed to users who join through this beacon.
 * @param {string} metadata Metadata visible to users browsing beacons.
 *
 * @returns {bool}
 *
 * @event steam
 * @desc This event is triggered when Steam completes the create-beacon request.
 * @member {string} event_type The string `"steam_parties_create_beacon"`.
 * @member {bool} success Whether Steam created the beacon successfully.
 * @member {real} result Steam `EResult` value for the operation.
 * @member {int64} beacon_id ID of the created beacon.
 * @event_end
 *
 * @event steam
 * @desc This event is triggered when a user reserves a slot in one of the local user's party beacons. After the user has connected to the game, call ${function.steam_parties_on_reservation_completed}.
 * @member {string} event_type The string `"steam_parties_reservation_notification"`.
 * @member {int64} beacon_id Beacon ID that received the reservation.
 * @member {int64} joiner_steam_id Steam ID of the user who reserved a slot.
 * @event_end
 *
 * @example
 * ```gml
 * var _locations = steam_parties_get_available_beacon_locations();
 * if (_locations.ok && _locations.count > 0)
 * {
 *     steam_parties_create_beacon(
 *         3,
 *         _locations.location_types[0],
 *         _locations.location_ids[0],
 *         "join:127.0.0.1:7777",
 *         "Public party"
 *     );
 * }
 * ```
 * The above code creates a party beacon at the first available Steam location.
 * @func_end
 */

/**
 * @func steam_parties_on_reservation_completed
 * @desc > **Steamworks Function**: [ISteamParties::OnReservationCompleted](https://partner.steamgames.com/doc/api/isteamparties#OnReservationCompleted)
 *
 * This function tells Steam that the game accepted a user who reserved a slot through a beacon. Call it after handling a `"steam_parties_reservation_notification"` event and after the user has connected to the game.
 *
 * @param {int64} beacon_id Beacon ID from the reservation notification.
 * @param {int64} user_steam_id Steam ID of the user whose reservation was completed.
 *
 * @returns {bool}
 *
 * @example
 * ```gml
 * if (async_load[? "event_type"] == "steam_parties_reservation_notification")
 * {
 *     var _beacon_id = async_load[? "beacon_id"];
 *     var _joiner = async_load[? "joiner_steam_id"];
 *     steam_parties_on_reservation_completed(_beacon_id, _joiner);
 * }
 * ```
 * The above code acknowledges a completed reservation after receiving Steam's notification.
 * @func_end
 */

/**
 * @func steam_parties_destroy_beacon
 * @desc > **Steamworks Function**: [ISteamParties::DestroyBeacon](https://partner.steamgames.com/doc/api/isteamparties#DestroyBeacon)
 *
 * This function destroys a party beacon created by the local user.
 *
 * @param {int64} beacon_id The beacon ID to destroy.
 *
 * @returns {bool}
 *
 * @example
 * ```gml
 * steam_parties_destroy_beacon(global.beacon_id);
 * ```
 * The above code stops advertising the stored party beacon.
 * @func_end
 */

/**
 * @func steam_parties_change_num_open_slots
 * @desc > **Steamworks Function**: [ISteamParties::ChangeNumOpenSlots](https://partner.steamgames.com/doc/api/isteamparties#ChangeNumOpenSlots)
 *
 * This function starts updating the number of open reservation slots on a party beacon. Call it when users join or leave through another route so Steam can advertise the current number of available slots.
 *
 * @param {int64} beacon_id The beacon ID to update.
 * @param {real} open_slots New number of open reservation slots.
 *
 * @returns {bool}
 *
 * @event steam
 * @desc This event is triggered when Steam completes the open-slot update request.
 * @member {string} event_type The string `"steam_parties_change_num_open_slots"`.
 * @member {bool} success Whether Steam updated the slot count successfully.
 * @member {real} result Steam `EResult` value for the operation.
 * @event_end
 *
 * @example
 * ```gml
 * steam_parties_change_num_open_slots(global.beacon_id, 2);
 * ```
 * The above code updates an existing beacon to advertise two open slots.
 * @func_end
 */

/**
 * @func steam_parties_join_party
 * @desc > **Steamworks Function**: [ISteamParties::JoinParty](https://partner.steamgames.com/doc/api/isteamparties#JoinParty)
 *
 * This function starts a request to join the party advertised by a beacon. If Steam accepts the join, the async event includes the beacon owner's Steam ID and the connection string supplied by the host.
 *
 * @param {int64} beacon_id The beacon ID to join.
 *
 * @returns {bool}
 *
 * @event steam
 * @desc This event is triggered when Steam completes the join-party request.
 * @member {string} event_type The string `"steam_parties_join_party"`.
 * @member {bool} success Whether Steam accepted the join request.
 * @member {real} result Steam `EResult` value for the operation.
 * @member {int64} beacon_id Beacon ID that was joined.
 * @member {int64} beacon_owner_steam_id Steam ID of the beacon owner.
 * @member {string} connect_string Connection string supplied by the beacon owner.
 * @event_end
 *
 * @example
 * ```gml
 * steam_parties_join_party(beacon_id);
 * ```
 *
 * ```gml
 * if (async_load[? "event_type"] == "steam_parties_join_party" && async_load[? "success"])
 * {
 *     var _connect_string = async_load[? "connect_string"];
 *     show_debug_message("Connect with: " + _connect_string);
 * }
 * ```
 * The above code requests to join a beacon and handles the connection string returned by Steam.
 * @func_end
 */

// CONSTANTS

/**
 * @constant STEAM_PARTIES_BEACON_LOCATION
 * @desc > **Steamworks Enumeration**: [ESteamPartyBeaconLocationType](https://partner.steamgames.com/doc/api/isteamparties#ESteamPartyBeaconLocationType)
 *
 * This enum contains the location types used by party beacon locations.
 *
 * @member STEAM_PARTIES_BEACON_LOCATION.TYPE_INVALID Invalid location type.
 * @member STEAM_PARTIES_BEACON_LOCATION.CHAT_GROUP Steam chat group location.
 * @member STEAM_PARTIES_BEACON_LOCATION.TYPE_MAX Sentinel value.
 * @constant_end
 */

/**
 * @constant STEAM_PARTIES_BEACON_LOCATION_DATA
 * @desc > **Steamworks Enumeration**: [ESteamPartyBeaconLocationData](https://partner.steamgames.com/doc/api/isteamparties#ESteamPartyBeaconLocationData)
 *
 * This enum contains the data fields that can be read with ${function.steam_parties_get_beacon_location_data}.
 *
 * @member STEAM_PARTIES_BEACON_LOCATION_DATA.DATA_INVALID Invalid data field.
 * @member STEAM_PARTIES_BEACON_LOCATION_DATA.DATA_NAME Display name for the location.
 * @member STEAM_PARTIES_BEACON_LOCATION_DATA.ICON_URL_SMALL Small icon URL for the location.
 * @member STEAM_PARTIES_BEACON_LOCATION_DATA.ICON_URL_MEDIUM Medium icon URL for the location.
 * @member STEAM_PARTIES_BEACON_LOCATION_DATA.ICON_URL_LARGE Large icon URL for the location.
 * @constant_end
 */

// MODULES

/**
 * @module parties
 * @title Parties
 * @desc > **Steamworks Interface**: [ISteamParties](https://partner.steamgames.com/doc/api/isteamparties)
 *
 * The Parties module exposes Steam's party beacon API. Party beacons let a game advertise open party slots in Steam locations, let other users discover those beacons through Steam, and return a connection string when a user joins.
 *
 * @section_func Beacon locations
 * @desc These functions query locations where the local user can post a party beacon:
 * @ref steam_parties_get_num_available_beacon_locations
 * @ref steam_parties_get_available_beacon_locations
 * @ref steam_parties_get_beacon_location_data
 * @section_end
 *
 * @section_func Hosting beacons
 * @desc These functions create and manage the local user's party beacon:
 * @ref steam_parties_create_beacon
 * @ref steam_parties_on_reservation_completed
 * @ref steam_parties_change_num_open_slots
 * @ref steam_parties_destroy_beacon
 * @section_end
 *
 * @section_func Joining beacons
 * @desc These functions browse and join party beacons visible to the local user:
 * @ref steam_parties_get_num_active_beacons
 * @ref steam_parties_get_beacon_by_index
 * @ref steam_parties_get_beacon_details
 * @ref steam_parties_join_party
 * @section_end
 *
 * @section_const Constants
 * @desc These enums are used by the Parties module:
 * @ref STEAM_PARTIES_BEACON_LOCATION
 * @ref STEAM_PARTIES_BEACON_LOCATION_DATA
 * @section_end
 *
 * @module_end
 */
