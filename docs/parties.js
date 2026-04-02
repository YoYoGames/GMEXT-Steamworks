// FUNCTIONS

/**
 * @func steam_parties_get_num_available_beacon_locations
 * @desc This function returns the number of locations in which you are able to post a party beacon.
 *
 * @returns {real}
 *
 * @example
 * ```gml
 * var _count = steam_parties_get_num_available_beacon_locations();
 * show_debug_message("Available beacon locations: " + string(_count));
 * ```
 * The above code will output the number of available beacon locations to the debug log.
 * @func_end
 */

/**
 * @func steam_parties_get_available_beacon_locations
 * @desc This function returns an array of available beacon locations. Each element is a struct with `type` and `id` fields representing the location type and location ID respectively.
 *
 * @param {real} max_locations The maximum number of locations to retrieve. Use ${function.steam_parties_get_num_available_beacon_locations} to get the total count.
 *
 * @returns {array[struct]}
 *
 * @example
 * ```gml
 * var _count = steam_parties_get_num_available_beacon_locations();
 * var _locations = steam_parties_get_available_beacon_locations(_count);
 * for (var i = 0; i < array_length(_locations); i++)
 * {
 *     show_debug_message("Location type: " + string(_locations[i].type) + " id: " + string(_locations[i].id));
 * }
 * ```
 * The code above retrieves all available beacon locations and prints their type and id.
 * @func_end
 */

/**
 * @func steam_parties_create_beacon
 * @desc This function creates a party beacon. You can only have one beacon active at a time. When users begin to join your party, you will receive ${function.steam_parties_on_reservation_completed} notifications. When the beacon is successfully created, a `"party_beacon_created"` async event is triggered.
 *
 * @param {real} open_slots The number of open party slots
 * @param {real} location_type The beacon location type (see ${constant.PartyBeaconLocationType})
 * @param {int64} location_id The location ID (obtained from ${function.steam_parties_get_available_beacon_locations})
 * @param {string} connect_string A connection string that will be given to the joining user so they can connect to the host
 * @param {string} metadata Additional beacon metadata that will be visible to potential joiners
 *
 * @returns {boolean}
 *
 * @event steam
 * @member {string} event_type The string value `"party_beacon_created"`
 * @member {boolean} success Whether or not the request was successful
 * @member {real} result The status code (descriptions can be found in Steam API documentation)
 * @member {int64} beacon_id The ID of the newly created beacon
 * @event_end
 *
 * @example
 * ```gml
 * var _locations = steam_parties_get_available_beacon_locations(1);
 * if (array_length(_locations) > 0)
 * {
 *     steam_parties_create_beacon(3, _locations[0].type, _locations[0].id, "connect:192.168.1.1:7777", "My Game Party");
 * }
 * ```
 * The above code creates a beacon with 3 open slots at the first available location. The async result can be handled as follows:
 *
 * @example
 * ```gml
 * var _type = async_load[? "event_type"];
 * if (_type == "party_beacon_created")
 * {
 *     if (async_load[? "success"])
 *     {
 *         global.beacon_id = async_load[? "beacon_id"];
 *         show_debug_message("Beacon created: " + string(global.beacon_id));
 *     }
 *     else
 *         show_debug_message("Failed to create beacon");
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_parties_on_reservation_completed
 * @desc When a user joins the party via the beacon, Steam will reserve a slot and send a `"party_reservation_notification"` callback. After the user has successfully connected to the game, call this function to notify Steam that the reservation has been completed.
 *
 * @param {int64} beacon_id The beacon ID
 * @param {int64} user_id The Steam ID of the user who completed the reservation
 *
 * @example
 * ```gml
 * steam_parties_on_reservation_completed(global.beacon_id, joining_user_id);
 * ```
 * The above code notifies Steam that the specified user has successfully joined the party.
 * @func_end
 */

/**
 * @func steam_parties_change_num_open_slots
 * @desc This function changes the number of open slots on an existing party beacon. Call this whenever players join or leave the party through other methods (such as direct matchmaking) so that the beacon accurately reflects the number of available slots.
 *
 * @param {int64} beacon_id The beacon ID
 * @param {real} open_slots The new number of open slots
 *
 * @returns {boolean}
 *
 * @event steam
 * @member {string} event_type The string value `"party_change_num_open_slots"`
 * @member {boolean} success Whether or not the request was successful
 * @member {real} result The status code (descriptions can be found in Steam API documentation)
 * @event_end
 *
 * @example
 * ```gml
 * steam_parties_change_num_open_slots(global.beacon_id, 2);
 * ```
 * The above code updates the beacon to indicate there are now 2 open slots.
 * @func_end
 */

/**
 * @func steam_parties_destroy_beacon
 * @desc This function destroys the specified party beacon. Steam will immediately stop showing the beacon in the party UI to other players.
 *
 * @param {int64} beacon_id The beacon ID to destroy
 *
 * @returns {boolean}
 *
 * @example
 * ```gml
 * steam_parties_destroy_beacon(global.beacon_id);
 * ```
 * The above code destroys the party beacon.
 * @func_end
 */

/**
 * @func steam_parties_get_num_active_beacons
 * @desc This function returns the number of active party beacons created by other users for your game, visible to the current user.
 *
 * @returns {real}
 *
 * @example
 * ```gml
 * var _count = steam_parties_get_num_active_beacons();
 * show_debug_message("Active beacons: " + string(_count));
 * ```
 * The above code outputs the number of active beacons to the debug log.
 * @func_end
 */

/**
 * @func steam_parties_get_beacon_by_index
 * @desc This function returns the beacon ID for the given index. Use in conjunction with ${function.steam_parties_get_num_active_beacons} to iterate over all active beacons.
 *
 * @param {real} index The beacon index (from 0 to ${function.steam_parties_get_num_active_beacons} - 1)
 *
 * @returns {int64}
 *
 * @example
 * ```gml
 * var _count = steam_parties_get_num_active_beacons();
 * for (var i = 0; i < _count; i++)
 * {
 *     var _beacon_id = steam_parties_get_beacon_by_index(i);
 *     var _details = steam_parties_get_beacon_details(_beacon_id);
 *     if (_details.success)
 *         show_debug_message("Beacon owner: " + string(_details.owner_id));
 * }
 * ```
 * The above code iterates over all active beacons and shows details about each one.
 * @func_end
 */

/**
 * @func steam_parties_get_beacon_details
 * @desc This function returns details about the specified beacon as a struct. The returned struct contains the following fields:
 *
 * - `success` ({boolean}): Whether the details were retrieved successfully
 * - `owner_id` ({int64}): The Steam ID of the beacon owner (only present if `success` is **true**)
 * - `location_type` ({real}): The beacon location type (only present if `success` is **true**)
 * - `location_id` ({int64}): The beacon location ID (only present if `success` is **true**)
 * - `metadata` ({string}): The metadata string set when the beacon was created (only present if `success` is **true**)
 *
 * @param {int64} beacon_id The beacon ID
 *
 * @returns {struct}
 *
 * @example
 * ```gml
 * var _beacon_id = steam_parties_get_beacon_by_index(0);
 * var _details = steam_parties_get_beacon_details(_beacon_id);
 * if (_details.success)
 * {
 *     show_debug_message("Owner: " + string(_details.owner_id));
 *     show_debug_message("Metadata: " + _details.metadata);
 * }
 * ```
 * The above code retrieves and displays the details of the first active beacon.
 * @func_end
 */

/**
 * @func steam_parties_join_party
 * @desc This function requests to join the party advertised by the given beacon. When the result is ready, a `"party_joined"` async event is triggered with the connection string needed to connect to the host.
 *
 * @param {int64} beacon_id The beacon ID to join
 *
 * @returns {boolean}
 *
 * @event steam
 * @member {string} event_type The string value `"party_joined"`
 * @member {boolean} success Whether or not the request was successful
 * @member {real} result The status code (descriptions can be found in Steam API documentation)
 * @member {int64} beacon_id The beacon ID
 * @member {int64} steam_id_beacon_owner The Steam ID of the beacon owner
 * @member {string} connect_string The connection string to use to join the host's game
 * @event_end
 *
 * @example
 * ```gml
 * steam_parties_join_party(selected_beacon_id);
 * ```
 * The async result should be handled in the ${event.steam}:
 *
 * @example
 * ```gml
 * var _type = async_load[? "event_type"];
 * if (_type == "party_joined")
 * {
 *     if (async_load[? "success"])
 *     {
 *         var _connect_string = async_load[? "connect_string"];
 *         show_debug_message("Joining party with: " + _connect_string);
 *         // Use _connect_string to connect to the host
 *     }
 *     else
 *         show_debug_message("Failed to join party");
 * }
 * ```
 * @func_end
 */

/**
 * @func steam_parties_get_beacon_location_data
 * @desc This function returns metadata (such as a name or icon URL) for a given beacon location. The type of data returned depends on the `data_type` parameter (see ${constant.PartyBeaconLocationData}).
 *
 * @param {real} location_type The beacon location type (see ${constant.PartyBeaconLocationType})
 * @param {int64} location_id The location ID
 * @param {real} data_type The data type to retrieve (see ${constant.PartyBeaconLocationData})
 *
 * @returns {string}
 *
 * @example
 * ```gml
 * var _locations = steam_parties_get_available_beacon_locations(1);
 * if (array_length(_locations) > 0)
 * {
 *     var _name = steam_parties_get_beacon_location_data(_locations[0].type, _locations[0].id, steam_party_beacon_location_data_name);
 *     show_debug_message("Location name: " + _name);
 * }
 * ```
 * The above code retrieves the name of the first available beacon location.
 * @func_end
 */

// CONSTANTS

/**
 * @const PartyBeaconLocationType
 * @desc These constants specify the type of a party beacon location.
 * @member steam_party_beacon_location_type_invalid Invalid location type
 * @member steam_party_beacon_location_type_chat_group A Steam chat group location
 * @const_end
 */

/**
 * @const PartyBeaconLocationData
 * @desc These constants specify the type of data to retrieve for a beacon location using ${function.steam_parties_get_beacon_location_data}.
 * @member steam_party_beacon_location_data_invalid Invalid data type
 * @member steam_party_beacon_location_data_name The name of the location
 * @member steam_party_beacon_location_data_icon_url_small A URL to a small icon for the location
 * @member steam_party_beacon_location_data_icon_url_medium A URL to a medium icon for the location
 * @member steam_party_beacon_location_data_icon_url_large A URL to a large icon for the location
 * @const_end
 */

// MODULES

/**
 * @module parties
 * @title Parties
 * @desc The following functions and constants allow you to use Steam's Party Beacon system. Party beacons allow games to advertise open party slots on Steam, enabling friends to discover and join games directly from the Steam UI — even launching the game if needed.
 *
 * For more information, see the [ISteamParties](https://partner.steamgames.com/doc/api/isteamparties) documentation.
 *
 * @section_func Beacon Locations
 * @desc These functions handle querying beacon locations:
 * @ref steam_parties_get_num_available_beacon_locations
 * @ref steam_parties_get_available_beacon_locations
 * @ref steam_parties_get_beacon_location_data
 * @section_end
 *
 * @section_func Creating and Managing Beacons
 * @desc These functions handle creating and managing party beacons:
 * @ref steam_parties_create_beacon
 * @ref steam_parties_on_reservation_completed
 * @ref steam_parties_change_num_open_slots
 * @ref steam_parties_destroy_beacon
 * @section_end
 *
 * @section_func Browsing and Joining Beacons
 * @desc These functions handle browsing and joining other players' beacons:
 * @ref steam_parties_get_num_active_beacons
 * @ref steam_parties_get_beacon_by_index
 * @ref steam_parties_get_beacon_details
 * @ref steam_parties_join_party
 * @section_end
 *
 * @section_const Constants
 * @desc These are the constants used by this API:
 * @ref PartyBeaconLocationType
 * @ref PartyBeaconLocationData
 * @section_end
 *
 * @module_end
 */
