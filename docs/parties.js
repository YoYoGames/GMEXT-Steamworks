
// FUNCTIONS

/**
 * @function steam_parties_set_callback_reservation_notification
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called by Steam when a user "follows" a previously created beacon. This lets you know that you should be prepared for the user to join your game.
 * 
 * See: [ISteamParties::ReservationNotificationCallback_t](https://partner.steamgames.com/doc/api/isteamparties#ReservationNotificationCallback_t)
 * 
 * See: ${struct.SteamPartiesReservationNotification}
 *
 * @param {Function} callback The function to be called when a reservation notification event occurs.
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_reservation_notification
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_parties_set_callback_reservation_notification}.
 *
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_available_beacon_locations_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when the list of available locations for posting a beacon has been updated.
 * 
 * See: [ISteamParties::AvailableBeaconLocationsUpdated_t](https://partner.steamgames.com/doc/api/isteamparties#AvailableBeaconLocationsUpdated_t)
 * 
 * This callback has no members.
 *
 * @param {Function} callback The function to be called when the available beacon locations are updated.
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_available_beacon_locations_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_parties_set_callback_available_beacon_locations_updated}.
 *
 * @function_end 
 */

/**
 * @function steam_parties_set_callback_active_beacons_updated
 * @description > **Steamworks Function**: N / A
 * 
 * This function sets the function to be called when the list of active beacons visible to the current user has changed.
 * 
 * See: [ISteamParties::ActiveBeaconsUpdated_t](https://partner.steamgames.com/doc/api/isteamparties#ActiveBeaconsUpdated_t)
 * 
 * This callback has no members.
 * 
 * @param {Function} callback The function to be called when the active beacons are updated.
 * @function_end 
 */

/**
 * @function steam_parties_clear_callback_active_beacons_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_parties_set_callback_active_beacons_updated}.
 *
 * @function_end 
 */

/**
 * @function steam_parties_get_num_available_beacon_locations
 * @description > **Steamworks Function**: [ISteamParties::GetNumAvailableBeaconLocations](https://partner.steamgames.com/doc/api/ISteamParties#GetNumAvailableBeaconLocations)
 *
 * This function gets the number of locations in which you are able to post a party beacon.
 *
 * @returns {Real}
 * @function_end 
 */

/**
 * @function steam_parties_get_available_beacon_locations
 * @description > **Steamworks Function**: [ISteamParties::GetAvailableBeaconLocations](https://partner.steamgames.com/doc/api/ISteamParties#GetAvailableBeaconLocations)
 *
 * This function gets the list of locations in which you can post a party beacon. 
 *
 * @returns {Array[Struct.SteamPartiesBeaconLocation]}
 * @function_end 
 */

/**
 * @function steam_parties_create_beacon
 * @description > **Steamworks Function**: [ISteamParties::CreateBeacon](https://partner.steamgames.com/doc/api/ISteamParties#CreateBeacon)
 *
 * This function creates a beacon. You can only create one beacon at a time. Steam will display the beacon in the specified location, and let up to `open_slots` users "follow" the beacon to your party.
 * 
 * If users join your party through other matchmaking, adjust the number of remaining open slots using ${function.steam_parties_change_num_open_slots}.
 *
 * @param {Real} open_slots The number of reservation slots to create for the beacon, normally the party size minus one.
 * @param {Enum.SteamPartiesBeaconLocationType} beacon_location_type The type of the beacon location, taken from one of the locations returned by ${function.steam_parties_get_available_beacon_locations}.
 * @param {Real} beacon_location_id The location ID of the beacon location, taken from one of the locations returned by ${function.steam_parties_get_available_beacon_locations}.
 * @param {String} connect_string The connect string that will be given to the game on launch for a user that follows the beacon.
 * @param {String} metadata Additional game metadata that can be set on the beacon, and is exposed via ${function.steam_parties_get_beacon_details}.
 * @param {Function} callback The function to call upon completion.
 * @returns {Bool}
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamParties::CreateBeaconCallback_t](https://partner.steamgames.com/doc/api/ISteamParties#CreateBeaconCallback_t)
 *
 * This callback is returned as the response to a call to create a beacon. A successful result means your beacon has been posted in the desired location and you can begin receiving reservation notifications as users follow it.
 *
 * @member {Struct.SteamPartiesCreateBeaconResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_parties_on_reservation_completed
 * @description > **Steamworks Function**: [ISteamParties::OnReservationCompleted](https://partner.steamgames.com/doc/api/ISteamParties#OnReservationCompleted)
 *
 * This function notifies Steam that a reserved user has successfully joined your party, once a user who followed your beacon has joined.
 * 
 * See: ${struct.SteamPartiesReservationNotification}
 *
 * @param {Real} beacon_id The beacon ID for the beacon created by your process.
 * @param {Real} user_steam_id The Steam ID of the user joining your party.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_parties_cancel_reservation
 * @description > **Steamworks Function**: [ISteamParties::CancelReservation](https://partner.steamgames.com/doc/api/ISteamParties#CancelReservation)
 *
 * This function cancels a reservation, notifying Steam that a reserved user did not join your party and is not still waiting to do so.
 *
 * See: ${struct.SteamPartiesReservationNotification}
 *
 * @param {Real} beacon_id The beacon ID for the beacon created by your process.
 * @param {Real} user_steam_id The Steam ID of the user whose reservation is being cancelled.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_parties_change_num_open_slots
 * @description > **Steamworks Function**: [ISteamParties::ChangeNumOpenSlots](https://partner.steamgames.com/doc/api/ISteamParties#ChangeNumOpenSlots)
 *
 * This function reduces the number of open slots that Steam is managing through the party beacon when a user joins your party through other matchmaking.
 *
 * @param {Real} beacon_id The beacon ID for the beacon created by your process.
 * @param {Real} open_slots The new number of open slots in your party. This value represents the total number of *new* users that you would like Steam to send to your party.
 * @param {Function} callback The function to call upon completion.
 * @returns {Bool}
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamParties::ChangeNumOpenSlotsCallback_t](https://partner.steamgames.com/doc/api/ISteamParties#ChangeNumOpenSlotsCallback_t)
 * 
 * @member {Struct.SteamPartiesChangeNumOpenSlotsResult} result The result of the operation.
 * @event_end
 * @function_end 
 */

/**
 * @function steam_parties_destroy_beacon
 * @description > **Steamworks Function**: [ISteamParties::DestroyBeacon](https://partner.steamgames.com/doc/api/ISteamParties#DestroyBeacon)
 *
 * This function destroys the Steam party beacon. This will immediately cause Steam to stop showing the beacon in the target location. Note that any users currently in-flight may still arrive at your party expecting to join.
 * 
 * Your game should call this method when either the party has been filled and the game is beginning, or the user has decided to abandon creating a party. The beacon will be destroyed automatically when your game exits, but the preferred behavior is for the game to call ${function.steam_parties_destroy_beacon} at the right time.
 *
 * @param {Real} beacon_id The beacon ID to be destroyed.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_parties_get_num_active_beacons
 * @description > **Steamworks Function**: [ISteamParties::GetNumActiveBeacons](https://partner.steamgames.com/doc/api/ISteamParties#GetNumActiveBeacons)
 *
 * This function gets the number of active party beacons created by other users for your game, that are visible to the current user.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_parties_get_beacon_by_index
 * @description > **Steamworks Function**: [ISteamParties::GetBeaconByIndex](https://partner.steamgames.com/doc/api/ISteamParties#GetBeaconByIndex)
 *
 * This function is used with ${function.steam_parties_get_num_active_beacons} to iterate the active beacons visible to the current user.
 *
 * @param {Real} index The index of the beacon.
 * @returns {Real} Party beacon ID
 * @function_end 
 */

/**
 * @function steam_parties_get_beacon_details
 * @description > **Steamworks Function**: [ISteamParties::GetBeaconDetails](https://partner.steamgames.com/doc/api/ISteamParties#GetBeaconDetails)
 *
 * This function gets details about the specified beacon.
 *
 * @param {Real} beacon_id The beacon ID to query.
 * @returns {Struct.SteamPartiesBeaconDetails} 
 * @function_end 
 */

/**
 * @function steam_parties_join_party
 * @description > **Steamworks Function**: [ISteamParties::JoinParty](https://partner.steamgames.com/doc/api/ISteamParties#JoinParty)
 *
 * This function is called when the user indicates they wish to join the party advertised by a given beacon. On success, Steam will reserve a slot for this user in the party and return the necessary "join game" string to use to complete the connection.
 *
 * @param {Real} beacon_id The beacon ID for the party you wish to join.
 * @param {Function} callback The function to call upon completion.
 * @returns {Bool}
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamParties::JoinPartyCallback_t](https://partner.steamgames.com/doc/api/ISteamParties#JoinPartyCallback_t)
 *
 * This callback serves as the response to a call to join a party. When it succeeds, you have secured a slot in the beacon owner's party and should use the connect string to link up with their game and finish joining.
 *
 * @member {Struct.SteamPartiesJoinPartyResult} The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_parties_get_beacon_location_data
 * @description > **Steamworks Function**: [ISteamParties::GetBeaconLocationData](https://partner.steamgames.com/doc/api/ISteamParties#GetBeaconLocationData)
 *
 * This function queries general metadata for the given beacon location. For instance the Name, or the URL for an icon if the location type supports icons (for example, the icon for a Steam Chat Room Group).
 *
 * @param {Enum.SteamPartiesBeaconLocationType} beacon_location_type The type of the beacon location to query.
 * @param {Real} beacon_location_id The location ID of the beacon location to query.
 * @param {Enum.SteamPartiesBeaconLocationData} data_kind The type of location data you wish to get.
 * @returns {String} 
 * @function_end 
 */

// STRUCTS

/**
 * @struct SteamPartiesBeaconLocation
 * @description > **Steamworks Struct**: N / A
 * 
 * This struct holds information about a beacon location.
 * 
 * @member {Real} location_id The location ID.
 * @member {Enum.SteamPartiesBeaconLocationType} location_type The location type.
 * @struct_end 
 */

/**
 * @struct SteamPartiesCreateBeaconResult
 * @description > **Steamworks Struct**: [ISteamParties#CreateBeaconCallback_t](https://partner.steamgames.com/doc/api/isteamparties#CreateBeaconCallback_t)
 *
 * This struct holds information about the result of creating a beacon.
 *
 * @member {Enum.SteamApiResult} result The result of the attempt to create a beacon.
 * @member {Real} beacon_id Beacon ID of the newly created beacon.
 * @struct_end
 */

/**
 * @struct SteamPartiesJoinPartyResult
 * @description > **Steamworks Struct**: [ISteamParties::JoinPartyCallback_t](partner.steamgames.com/doc/api/ISteamParties#JoinPartyCallback_t)
 *
 * This struct holds the data used as a call response for ${function.steam_parties_join_party}. On success, you will have reserved a slot in the beacon-owner's party, and should use `connect_string` to connect to their game and complete the process.
 *
 * @member {Enum.SteamApiResult} result The result of the attempt to join the party.
 * @member {Real} beacon_id The beacon ID used in the attempt.
 * @member {Real} beacon_owner_steam_id Creator of the beacon used in the attempt.
 * @member {String} connect_string If successful, a "join game" string for your game to use to complete the process of joining the desired party.
 * @struct_end
 */

/**
 * @struct SteamPartiesChangeNumOpenSlotsResult
 * @description > **Steamworks Struct**: [ISteamParties::ChangeNumOpenSlotsCallback_t](https://partner.steamgames.com/doc/api/ISteamParties#ChangeNumOpenSlotsCallback_t)
 *
 * This struct holds the call result for ${function.steam_parties_change_num_open_slots}.
 *
 * @member {Enum.SteamApiResult} result The result of the attempt to change the number of open slots.
 * @struct_end
 */

/**
 * @struct SteamPartiesReservationNotification
 * @description > **Steamworks Struct**: [ISteamParties::ReservationNotificationCallback_t](https://partner.steamgames.com/doc/api/ISteamParties#ReservationNotificationCallback_t)
 *
 * This struct holds the information passed to a reservation notification callback. When you receive this callback, be sure to call ${function.steam_parties_on_reservation_completed} to let Steam know.
 *
 * @member {Real} beacon_id Beacon ID of your beacon.
 * @member {Real} joiner_steam_id SteamID of the user following your beacon.
 * @struct_end
 */

/**
 * @struct SteamPartiesBeaconDetails
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the details of a beacon, as requested using ${function.steam_parties_get_beacon_details}.
 * 
 * @member {Real} beacon_owner_steam_id Creator of the beacon.
 * @member {Enum.SteamPartiesBeaconLocationType} location_type The location type.
 * @member {Real} location_id Opaque identifier of this location.
 * @member {String} metadata Any additional metadata the game has set on this beacon (e.g. game mode). Will hold an empty string `""` if not successful.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamPartiesBeaconLocationType
 * @description > **Steamworks Enum**: [ISteamParties::ESteamPartyBeaconLocationType](https://partner.steamgames.com/doc/api/ISteamParties#ESteamPartyBeaconLocationType)
 *
 * This enum holds the types of locations where beacons can be posted.
 *
 * @member Invalid Invalid location type.
 * @member ChatGroup A Steam Chat Room Group.
 * @member Max Value is always one greater than the largest valid location type value.
 * @enum_end 
 */

/**
 * @enum SteamPartiesBeaconLocationData
 * @description > **Steamworks Enum**: [ISteamParties::ESteamPartyBeaconLocationData](partner.steamgames.com/doc/api/ISteamParties#ESteamPartyBeaconLocationData)
 *
 * This enum holds the types of extended metadata for beacon locations.
 *
 * @member Invalid Invalid location data type.
 * @member Name The name, if any, of the location.
 * @member IconURLSmall If the location has an associated icon, this is the URL for the small format icon image.
 * @member IconURLMedium If the location has an associated icon, this is the URL for the medium format icon image.
 * @member IconURLLarge If the location has an associated icon, this is the URL for the small large icon image.
 * @enum_end 
 */

// MODULE

/**
 * @module parties
 * @title Parties
 * @desc > **Steamworks Interface**: [ISteamParties](https://partner.steamgames.com/doc/api/isteamparties)
 * 
 * This API can be used to selectively advertise your multiplayer game session in a Steam chat room group. Tell Steam the number of player spots that are available for your party, and a join-game string, and it will show a beacon in the selected group and allow that many users to “follow” the beacon to your party. Adjust the number of open slots if other players join through alternate matchmaking methods.
 * 
 * @section_func Functions
 * @desc These are the functions of the Parties module:
 * @ref steam_parties_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Parties module:
 * @ref SteamParties*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Parties module:
 * @ref SteamParties*
 * @section_end
 * @module_end
 */
