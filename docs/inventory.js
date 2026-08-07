
// FUNCTIONS

/**
 * @function steam_inventory_add_promo_item
 * @description > **Steamworks Function**: [ISteamInventory::AddPromoItem](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItem)
 *
 * This function grants a specific one-time promotional item to the current user.
 * 
 * This can be safely called from the client because the items it can grant can be locked down via policies in the itemdefs. One of the primary scenarios for this call is to grant an item to users who also own a specific other game. This can be useful if your game has custom UI for showing a specific promo item to the user otherwise if you want to grant multiple promotional items then use ${function.steam_inventory_add_promo_items} or ${function.steam_inventory_grant_promo_items}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Real} item_def_id The item definition id to grant the player.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_add_promo_items
 * @description > **Steamworks Function**: [ISteamInventory::AddPromoItems](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItems)
 *
 * This function grants a specific one-time promotional item to the current user.
 * 
 * This can be safely called from the client because the items it can grant can be locked down via policies in the itemdefs. One of the primary scenarios for this call is to grant an item to users who also own a specific other game. If you want to grant a single promotional item then use ${function.steam_inventory_add_promo_item}. If you want to grant all possible promo items then use ${function.steam_inventory_grant_promo_items}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Real]} item_def_ids The list of items to grant the user.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_check_result_steam_id
 * @description > **Steamworks Function**: [ISteamInventory::CheckResultSteamID](https://partner.steamgames.com/doc/api/ISteamInventory#CheckResultSteamID)
 *
 * This function checks whether an inventory result handle belongs to the specified Steam ID.
 * 
 * This is important when using ${function.steam_inventory_deserialize_result}, to verify that a remote player is not pretending to have a different user's inventory.
 *
 * @param {Real} result_handle The inventory result handle to check the Steam ID on.
 * @param {Real} steam_id_expected The Steam ID to verify.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_consume_item
 * @description > **Steamworks Function**: [ISteamInventory::ConsumeItem](https://partner.steamgames.com/doc/api/ISteamInventory#ConsumeItem)
 *
 * This function consumes items from a user's inventory. If the quantity of the given item goes to zero, it is permanently removed.
 * 
 * Once an item is removed it cannot be recovered. This is not for the faint of heart - if your game implements item removal at all, a high-friction UI confirmation process is highly recommended.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Real} item_instance_id The item instance id to consume.
 * @param {Real} quantity The number of items in that stack to consume.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_deserialize_result
 * @description > **Steamworks Function**: [ISteamInventory::DeserializeResult](https://partner.steamgames.com/doc/api/ISteamInventory#DeserializeResult)
 *
 * This function deserializes a result set and verifies the signature bytes.
 * 
 * You should call ${function.steam_inventory_check_result_steam_id} on the result handle when it completes to verify that a remote player is not pretending to have a different user's inventory.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Buffer} data The buffer holding the data to deserialise.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The length of the data, in bytes. Defaults to the buffer size minus the offset.
 * @returns {Struct.SteamInventoryDeserializeResult} 
 * @function_end 
 */

/**
 * @function steam_inventory_destroy_result
 * @description > **Steamworks Function**: [ISteamInventory::DestroyResult](https://partner.steamgames.com/doc/api/ISteamInventory#DestroyResult)
 *
 * This function destroys a result handle and frees all associated memory.
 *
 * @param {Real} result_handle The inventory result handle to destroy.
 * @function_end
 */

/**
 * @function steam_inventory_exchange_items
 * @description > **Steamworks Function**: [ISteamInventory::ExchangeItems](https://partner.steamgames.com/doc/api/ISteamInventory#ExchangeItems)
 *
 * This function grants one item in exchange for a set of other items.
 * 
 * This can be used to implement crafting recipes or transmutations, or items which unpack themselves into other items (e.g., a chest).
 * 
 * See the [Steam Inventory Schema](https://partner.steamgames.com/doc/features/inventory/schema) documentation for more details.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Struct.SteamInventoryItemDefQuantity]} generate_items An array of structs holding itemdef IDs with their corresponding quantities.
 * @param {Array[Struct.SteamInventoryItemInstanceQuantity]} destroy_items An array of structs holding item instance IDs with their corresponding quantities.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end
 */

/**
 * @function steam_inventory_generate_items
 * @description > **Steamworks Function**: [ISteamInventory::GenerateItems](https://partner.steamgames.com/doc/api/ISteamInventory#GenerateItems)
 *
 * This function grants specific items to the current user, for developers only.
 * 
 * This API is only intended for prototyping - it is only usable by Steam accounts that belong to the publisher group for your game.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Struct.SteamInventoryItemDefQuantity]} items An array of structs holding items to give to the user.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end
 */

/**
 * @function steam_inventory_get_all_items
 * @description > **Steamworks Function**: [ISteamInventory::GetAllItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetAllItems)
 *
 * This function starts retrieving all items in the current user's inventory.
 * 
 * [[Note: Calls to this function are subject to rate limits and may return cached results if called too frequently. It is suggested that you call this function only when you are about to display the user's full inventory, or if you expect that the inventory may have changed.]]
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_items
 * @description > **Steamworks Function**: [ISteamInventory::GetResultItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItems)
 *
 * This function gets the items associated with an inventory result handle.
 *
 * @param {Real} result_handle The inventory result handle to get the items for.
 * @returns {Array[Struct.SteamInventoryItemDetails]} 
 * @function_end
 */

/**
 * @function steam_inventory_get_result_status
 * @description > **Steamworks Function**: [ISteamInventory::GetResultStatus](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultStatus)
 *
 * This function finds out the status of an asynchronous inventory result handle.
 * 
 * This is a polling equivalent to registering a callback function for [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) (see ${function.steam_inventory_set_callback_result_ready}).
 *
 * @param {Real} result_handle The inventory result handle to get the status for.
 * @returns {Enum.SteamApiResult} Whether the call was successful or not.
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_timestamp
 * @description > **Steamworks Function**: [ISteamInventory::GetResultTimestamp](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultTimestamp)
 *
 * This function gets the server time at which the result was generated. (as Unix epoch time (Time since Jan 1st, 1970))
 * 
 * You can compare this value against ${function.steam_utils_get_server_real_time} to determine the age of the result.
 *
 * @param {Real} result_handle The inventory result handle to get the timestamp for.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_request_eligible_promo_item_definition_ids
 * @description > **Steamworks Function**: [ISteamInventory::RequestEligiblePromoItemDefinitionsIDs](https://partner.steamgames.com/doc/api/ISteamInventory#RequestEligiblePromoItemDefinitionsIDs)
 *
 * This function requests the list of "eligible" promo items that can be manually granted to the local user. These are promo items of type "manual" that won't be granted automatically.
 *
 * [[Note: You must call this and wait for its callback before calling ${function.steam_inventory_get_eligible_promo_item_definition_ids} - there is no offset/cursor parameter, this just primes Steam's client-side cache for the local user.]]
 *
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamInventory::SteamInventoryEligiblePromoItemDefIDs_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryEligiblePromoItemDefIDs_t)
 *
 * Returned after ${function.steam_inventory_request_eligible_promo_item_definition_ids} is called.
 *
 * @member {Struct.SteamInventoryEligiblePromoItemDefIdsResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_inventory_get_eligible_promo_item_definition_ids
 * @description > **Steamworks Function**: [ISteamInventory::GetEligiblePromoItemDefinitionIDs](https://partner.steamgames.com/doc/api/ISteamInventory#GetEligiblePromoItemDefinitionIDs)
 *
 * This function gets the list of item definition ids that a user can be granted.
 * 
 * You should call this while handling a [SteamInventoryEligiblePromoItemDefIDs_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryEligiblePromoItemDefIDs_t) call result to pull out the item definition ids.
 *
 * @param {Real} max_item_defs The maximum number of item definition ids to retrieve.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_inventory_load_item_definitions
 * @description > **Steamworks Function**: [ISteamInventory::LoadItemDefinitions](https://partner.steamgames.com/doc/api/ISteamInventory#LoadItemDefinitions)
 *
 * This function triggers an asynchronous load and refresh of item definitions.
 * 
 * Item definitions are a mapping of "definition IDs" (integers between 1 and 999999999) to a set of string properties. Some of these properties are required to display items on the Steam community web site. Other properties can be defined by applications. There is no reason to call this function if your game hardcoded the numeric definition IDs (e.g. purple face mask = 20, blue weapon mod = 55) and does not allow for adding new item types without a client patch.
 *
 * @returns {Bool} This call will always return true.
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamInventory::SteamInventoryDefinitionUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryDefinitionUpdate_t)
 * 
 * Triggered whenever item definitions have been updated, which could be in response to ${function.steam_inventory_load_item_definitions} or any time new item definitions are available (e.g., from the dynamic addition of new item types while players are still in-game).
 * 
 * This callback has no fields.
 * @event_end
 * @function_end
 */

/**
 * @function steam_inventory_get_item_definition_ids
 * @description > **Steamworks Function**: [ISteamInventory::GetItemDefinitionIDs](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemDefinitionIDs)
 *
 * This function returns the set of all item definition IDs which are defined in the App Admin panel of the Steamworks website.
 * 
 * These item definitions may not necessarily be contiguous integers.
 * 
 * This should be called in response to a [SteamInventoryDefinitionUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryDefinitionUpdate_t) callback. There is no reason to call this function if your game hardcodes the numeric definition IDs (eg, purple face mask = 20, blue weapon mod = 55) and does not allow for adding new item types without a client patch.
 *
 * @param {Real} max_item_defs The maximum number of item definition ids to retrieve.
 * @returns {Array[Real]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_items_by_id
 * @description > **Steamworks Function**: [ISteamInventory::GetItemsByID](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsByID)
 *
 * This function gets the state of a subset of the current user's inventory.
 * 
 * The subset is specified by an array of item instance IDs.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Array[Real]} item_instance_ids A list of the item instance ids to update the state of.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_serialize_result
 * @description > **Steamworks Function**: [ISteamInventory::SerializeResult](https://partner.steamgames.com/doc/api/ISteamInventory#SerializeResult)
 *
 * This function serialises a result set with a short signature which can't be forged or replayed across different game sessions.
 * 
 * A result set can be serialised on the local client, transmitted to other players via your game networking, and deserialised by the remote players. This is a secure way of preventing hackers from lying about posessing rare/high-value items. Serialises a result set with signature bytes to an output buffer. The size of a serialised result depends on the number of items which are being serialised. When securely transmitting items to other players, it is recommended to use ${function.steam_inventory_get_items_by_id} first to create a minimal result set.
 *
 * @param {Real} result_handle The inventory result handle to serialise.
 * @param {Buffer} out_data The buffer that the serialised result will be copied into.
 * @returns {Real} The number of bytes written.
 * @function_end
 */

/**
 * @function steam_inventory_get_result_item_property_keys_array
 * @description > **Steamworks Function**: [ISteamInventory::GetResultItemProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItemProperty)
 *
 * This function gets the list of dynamic property names available on an item in an inventory result set.
 *
 * @param {Real} result_handle The result handle containing the item to get the properties of.
 * @param {Real} item_index The index of the item within the result set to query.
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_result_item_property
 * @description > **Steamworks Function**: [ISteamInventory::GetResultItemProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItemProperty)
 *
 * This function gets the dynamic properties from an item in an inventory result set.
 * 
 * Property names are always composed of ASCII letters, numbers, and/or underscores.
 *
 * @param {Real} result_handle The result handle containing the item to get the properties of.
 * @param {Real} item_index The index of the item within the result set to query.
 * @param {String} property_name The property name to get the value for.
 * @returns {String}
 * @function_end 
 */

/**
 * @function steam_inventory_start_purchase
 * @description > **Steamworks Function**: [ISteamInventory::StartPurchase](https://partner.steamgames.com/doc/api/ISteamInventory#StartPurchase)
 *
 * This function starts the purchase process for the user, given a "shopping cart" of item definitions that the user would like to buy. The user will be prompted in the Steam Overlay to complete the purchase in their local currency, funding their Steam Wallet if necessary, etc.
 * 
 * If the purchase process was started successfully, then `order_id` and `transaction_id` will be valid in the [SteamInventoryStartPurchaseResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryStartPurchaseResult_t) call result.
 * 
 * If the user authorizes the transaction and completes the purchase, then the callback [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) will be triggered and you can then retrieve what new items the user has acquired.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the inventory result for when you are done with it.]]
 *
 * @param {Array[Struct.SteamInventoryItemDefQuantity]} items An array of structs holding itemdef IDs with their corresponding quantity.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamInventory::SteamInventoryStartPurchaseResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryStartPurchaseResult_t)
 *
 * Returned after ${function.steam_inventory_start_purchase} is called.
 *
 * @member {Struct.SteamInventoryStartPurchaseResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_inventory_request_prices
 * @description > **Steamworks Function**: [ISteamInventory::RequestPrices](https://partner.steamgames.com/doc/api/ISteamInventory#RequestPrices)
 *
 * This function requests prices for all item definitions that can be purchased in the user's local currency.
 * 
 * A [SteamInventoryRequestPricesResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryRequestPricesResult_t) call result will be returned with the user's local currency code. After that, you can call ${function.steam_inventory_get_num_items_with_prices} and ${function.steam_inventory_get_items_with_prices} to get prices for all the known item definitions, or ${function.steam_inventory_get_item_price} for a specific item definition.
 *
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamInventory::SteamInventoryRequestPricesResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryRequestPricesResult_t)
 *
 * Returned after ${function.steam_inventory_request_prices} is called.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {String} currency The user's local currency code (e.g. "USD").
 * @event_end
 * @function_end
 */

/**
 * @function steam_inventory_get_num_items_with_prices
 * @description > **Steamworks Function**: [ISteamInventory::GetNumItemsWithPrices](https://partner.steamgames.com/doc/api/ISteamInventory#GetNumItemsWithPrices)
 *
 * This function, after a successful call to ${function.steam_inventory_request_prices}, returns the number of item definitions with valid pricing.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_items_with_prices
 * @description > **Steamworks Function**: [ISteamInventory::GetItemsWithPrices](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsWithPrices)
 *
 * This function, after a successful call to ${function.steam_inventory_request_prices}, gets all the pricing for applicable item definitions.
 * 
 * @returns {Array[Struct.SteamInventoryItemWithPrice]}
 * @function_end
 */

/**
 * @function steam_inventory_start_update_properties
 * @description > **Steamworks Function**: [ISteamInventory::StartUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#StartUpdateProperties)
 *
 * This function starts a transaction request to update [dynamic properties](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) on items for the current user.
 * 
 * This call is rate-limited by user, so property modifications should be batched as much as possible (e.g. at the end of a map or game session). After calling `steam_inventory_set_property_*` or `steam_inventory_remove_property_*` for all the items that you want to modify, you will need to call ${function.steam_inventory_submit_update_properties} to send the request to the Steam servers. A [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) callback will be fired with the results of the operation.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result for ${function.steam_inventory_submit_update_properties} when you are done with it.]]
 *
 * @returns {Real} The inventory update handle
 * @function_end 
 */

/**
 * @function steam_inventory_remove_property
 * @description > **Steamworks Function**: [ISteamInventory::RemoveProperty](https://partner.steamgames.com/doc/api/ISteamInventory#RemoveProperty)
 *
 * This function removes a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} update_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being removed.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_string
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} update_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {String} value The string value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_bool
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} update_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {Bool} value The boolean value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_int64
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} update_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {Real} value The 64 bit integer value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_property_float
 * @description > **Steamworks Function**: [ISteamInventory::SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty)
 *
 * This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the given item.
 *
 * @param {Real} update_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Real} item_instance_id The id of the item being modified.
 * @param {String} property_name The dynamic property being added or updated.
 * @param {Real} value The floating point number value being set.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_inventory_submit_update_properties
 * @description > **Steamworks Function**: [ISteamInventory::SubmitUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#SubmitUpdateProperties)
 *
 * This function submits the transaction request to modify [dynamic properties](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) on items for the current user. See ${function.steam_inventory_start_update_properties}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result for when you are done with it.]]
 *
 * @param {Real} update_handle The update handle corresponding to the transaction request, returned from ${function.steam_inventory_start_update_properties}.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The new inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_transfer_item_quantity
 * @description > **Steamworks Function**: [ISteamInventory::TransferItemQuantity](https://partner.steamgames.com/doc/api/ISteamInventory#TransferItemQuantity)
 *
 * This function transfers items between stacks within a user's inventory.
 * 
 * This can be used to stack, split, and move items. The source and destination items must have the same itemdef ID. To move items onto a destination stack specify the source, the quantity to move, and the destination item ID. To split an existing stack, pass `STEAM_INVENTORY_ITEM_INSTANCE_ID_INVALID` into `item_instance_id_dest`. A new item stack will be generated with the requested quantity.
 * 
 * [[Note: Tradability/marketability restrictions are copied along with transferred items. The destination stack receives the latest tradability/marketability date of any item in its composition.]]
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Real} item_instance_id_source The source item to transfer.
 * @param {Real} quantity The quantity of the item that will be transferred from `item_instance_id_source` to `item_instance_id_dest`.
 * @param {Real} item_instance_id_dest The destination item.
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_trigger_item_drop
 * @description > **Steamworks Function**: [ISteamInventory::TriggerItemDrop](https://partner.steamgames.com/doc/api/ISteamInventory#TriggerItemDrop)
 *
 * This function triggers an item drop if the user has played a long enough period of time.
 * 
 * This period can be customized in two places:
 * 
 * * At the application level within Inventory Service: Playtime Item Grants. This will automatically apply to all "playtimegenerator" items that do not specify any overrides.
 * * In an individual "playtimegenerator" item definition. The settings would take precedence over any application-level settings.
 * 
 * Only item definitions which are marked as "playtime item generators" can be spawned.
 * 
 * Typically this function should be called at the end of a game or level or match or any point of significance in the game in which an item drop could occur. The granularity of the playtime generator settings is in minutes, so calling it more frequently than minutes is not useful and will be rate limited in the Steam client. The Steam servers will perform playtime accounting to prevent too-frequent drops. The servers will also manage adding the item to the players inventory.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Real} item_def_id The item definition id, which must refer to an itemdefid of the type "playtimegenerator".
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_grant_promo_items
 * @description > **Steamworks Function**: [ISteamInventory::GrantPromoItems](https://partner.steamgames.com/doc/api/ISteamInventory#GrantPromoItems)
 *
 * This function grants all potential one-time promotional items to the current user.
 * 
 * This can be safely called from the client because the items it can grant can be locked down via policies in the itemdefs. One of the primary scenarios for this call is to grant an item to users who also own a specific other game. If you want to grant specific promotional items rather than all of them see: ${function.steam_inventory_add_promo_item} and ${function.steam_inventory_add_promo_items}.
 * 
 * [[Note: You must call ${function.steam_inventory_destroy_result} on the provided inventory result when you are done with it.]]
 *
 * @param {Function} callback The function to call upon completion.
 * @returns {Real} The inventory result handle
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_definition_property
 * @description > **Steamworks Function**: [ISteamInventory::GetItemDefinitionProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemDefinitionProperty)
 *
 * This function gets a string property from the specified item definition, or gets a property value for a specific item definition.
 * 
 * Note that some properties (for example, "name") may be localised and will depend on the current Steam language settings (see ${function.steam_apps_get_current_game_language}). Property names are always ASCII alphanumeric and underscores.
 * 
 * [[Note: Call ${function.steam_inventory_load_item_definitions} first, to ensure that items are ready to be used before calling ${function.steam_inventory_get_item_definition_property}.]]
 *
 * @param {Real} item_def_id The item definition to get the property for.
 * @param {String} property_name The property name to get the value for.
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_inventory_get_item_definition_property_keys
 * @description > **Steamworks Function**: [ISteamInventory::GetItemDefinitionProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemDefinitionProperty)
 *
 * This function gets the list of string property names available on the specified item definition.
 * 
 * Note that some properties (for example, "name") may be localised and will depend on the current Steam language settings (see ${function.steam_apps_get_current_game_language}). Property names are always ASCII alphanumeric and underscores.
 * 
 * [[Note: Call ${function.steam_inventory_load_item_definitions} first, to ensure that items are ready to be used before calling ${function.steam_inventory_get_item_definition_property}.]]
 *
 * @param {Real} item_def_id The item definition to get the properties for.
 * @returns {Array[String]} 
 * @function_end 
 */

/**
 * @function steam_inventory_get_item_price
 * @description > **Steamworks Function**: [ISteamInventory::GetItemPrice](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemPrice)
 *
 * This function, after a successful call to ${function.steam_inventory_request_prices}, gets the pricing for a specific item definition.
 *
 * @param {Real} item_def_id The item definition id to retrieve the price for.
 * @returns {Struct.SteamInventoryItemPrice} 
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_result_ready
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be triggered whenever an inventory result transitions from `SteamApiResult.Pending` to any other completed state, see ${function.steam_inventory_get_result_status} for the complete list of states. There will always be exactly one callback per handle.
 * 
 * See: [ISteamInventory::SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t)
 * 
 * See: ${struct.SteamInventoryResultReady}
 *
 * @param {Function} callback The function to be called when an inventory result is ready.
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_result_ready
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_inventory_set_callback_result_ready}.
 *
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_full_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be triggered when ${function.steam_inventory_get_all_items} successfully returns a result which is newer / fresher than the last known result. (It will not trigger if the inventory hasn't changed, or if results from two overlapping calls are reversed in flight and the earlier result is already known to be stale/out-of-date.)
 * 
 * The regular [SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t) callback will still be triggered immediately afterwards; this is an additional notification for your convenience.
 * 
 * See: [ISteamInventory::SteamInventoryFullUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryFullUpdate_t)
 * 
 * See: ${struct.SteamInventoryFullUpdate}
 *
 * @param {Function} callback The function to be called when a full inventory update occurs.
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_full_update
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_inventory_set_callback_full_update}.
 *
 * @function_end 
 */

/**
 * @function steam_inventory_set_callback_definition_update
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be triggered whenever item definitions have been updated, which could be in response to ${function.steam_inventory_load_item_definitions} or any time new item definitions are available (e.g., from the dynamic addition of new item types while players are still in-game).
 * 
 * See: [ISteamInventory::SteamInventoryDefinitionUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryDefinitionUpdate_t)
 *
 * @param {Function} callback The function to be called when item definitions are updated.
 * @function_end 
 */

/**
 * @function steam_inventory_clear_callback_definition_update
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_inventory_set_callback_definition_update}.
 *
 * @function_end 
 */

// STRUCTS

/**
 * @struct SteamInventoryItemDefQuantity
 * @description > **Steamworks Struct**: N / A
 * 
 * This struct holds an itemdef ID with a corresponding quantity.
 * 
 * @member {Real} itemdef_id The itemdef ID.
 * @member {Real} quantity The quantity of this itemdef ID.
 * @struct_end
 */

/**
 * @struct SteamInventoryItemInstanceQuantity
 * @description > **Steamworks Struct**: N / A
 * 
 * This struct holds an item instance ID with a corresponding quantity.
 * 
 * @member {Real} item_instance_id The itemdef ID.
 * @member {Real} quantity The quantity of this item instance ID.
 * @struct_end
 */

/**
 * @struct SteamInventoryItemDetails
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information about a single result item.
 * 
 * See: [ISteamInventory::SteamItemDetails_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDetails_t)
 * 
 * @member {Real} item_instance_id The globally unique item instance handle.
 * @member {Real} item_def_id The item definition number for the item.
 * @member {Real} quantity The current quantity of the item.
 * @member {Enum.SteamInventoryItemFlags} flags A bitmasked collection of item flags for the item.
 * @struct_end
 */

/**
 * @struct SteamInventoryDeserializeResult
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a request to deserialise a result set.
 * 
 * @member {Real} result_handle The new inventory result handle.
 * @member {Enum.SteamApiResult} status Whether the call was successful or not.
 * @struct_end
 */

/**
 * @struct SteamInventoryItemWithPrice
 * @description > **Steamworks Struct**: N / A
 * 
 * This struct holds an item definition ID with its current price and its base price.
 * 
 * @member {Real} itemdef_id The item definition ID.
 * @member {Real} current_price The current price for the item definition ID.
 * @member {Real} base_price The base price for the item definition ID.
 * @struct_end
 */

/**
 * @struct SteamInventoryItemPrice
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_inventory_get_item_price}.
 * 
 * @member {Real} current_price The item price. Prices are rendered in the user's [local currency](https://partner.steamgames.com/doc/store/pricing/currencies).
 * @member {Real} base_price The item's base price.
 * @struct_end
 */

/**
 * @struct SteamInventoryResultReady
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryResultReady_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryResultReady_t)
 *
 * This struct holds information received in a `SteamInventoryResultReady_t` callback.
 *
 * @member {Real} result_handle The inventory result which is now ready.
 * @member {Enum.SteamApiResult} result The new status of the handle. This is equivalent to calling ${function.steam_inventory_get_result_status}.
 * @struct_end
 */

/**
 * @struct SteamInventoryFullUpdate
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryFullUpdate_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryFullUpdate_t)
 *
 * This struct holds information returned in a `SteamInventoryFullUpdate_t` callback, which is triggered when ${function.steam_inventory_get_all_items} successfully returns a result which is newer / fresher than the last known result.
 *
 * @member {Real} result_handle The new inventory result handle.
 * @struct_end
 */

/**
 * @struct SteamInventoryStartPurchaseResult
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryStartPurchaseResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryStartPurchaseResult_t)
 *
 * This struct holds the result of the start of an inventory purchase.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} order_id The auto-generated order id for the initiated purchase.
 * @member {Real} transaction_id The auto-generated transaction id for the initiated purchase.
 * @struct_end
 */

/**
 * @struct SteamInventoryEligiblePromoItemDefIdsResult
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryEligiblePromoItemDefIDs_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryEligiblePromoItemDefIDs_t)
 *
 * This struct holds the result of ${function.steam_inventory_request_eligible_promo_item_definition_ids}.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} num_eligible_promo_item_defs The number of eligible promo item definition ids available - pass this (or less) as `max_item_defs` to ${function.steam_inventory_get_eligible_promo_item_definition_ids}.
 * @member {Bool} cached_data Whether the data was retrieved from the cache and not the server.
 * @struct_end
 */

/**
 * @struct SteamInventoryRequestPricesResult
 * @description > **Steamworks Struct**: [ISteamInventory::SteamInventoryRequestPricesResult_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamInventoryRequestPricesResult_t)
 *
 * This struct holds the result of a request of prices.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {String} currency The string representing the user's [local currency](https://partner.steamgames.com/doc/store/pricing/currencies) code.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamInventoryItemFlags
 * @description > **Steamworks Enum**: [ISteamInventory::ESteamItemFlags](https://partner.steamgames.com/doc/api/ISteamInventory#ESteamItemFlags)
 * 
 * This enum holds bitflags that are set in a `SteamItemDetails_t` callback.
 * 
 * @member NoTrade This item is account-locked and cannot be traded or given away. This is an item status flag which is permanently attached to specific item instances.
 * @member Removed The item has been destroyed, traded away, expired, or otherwise invalidated. This is an action confirmation flag which is only set one time, as part of a result set.
 * @member Consumed The item quantity has been decreased by 1 via ${function.steam_inventory_consume_item} API. This is an action confirmation flag which is only set one time, as part of a result set.
 * @enum_end
 */

// MODULE

/**
 * @module inventory
 * @title Inventory
 * @desc > **Steamworks Interface**: [ISteamInventory](https://partner.steamgames.com/doc/api/ISteamInventory)
 * 
 * The Inventory module contains functions, constants and structures that allow you to use the [Steam Inventory Service](https://partner.steamgames.com/doc/features/inventory).
 * 
 * [[Warning: The Steamworks SDK limits the number of items that can be read from one stack to 65535.
 * This is a limitation of the SDK rather than of the extension: the data type used for the `m_unQuantity` member of [SteamItemDetails_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDetails_t) is uint16, which can hold a maximum value of 65535.
 * 
 * Since the limitation is per stack, you can work around it by transferring any amount over 65535 to a new stack using the function ${function.steam_inventory_transfer_item_quantity} and add the necessary logic to your game that keeps track of the excess amount on the second stack.
 * For example, an amount of 100000 would be divided over two stacks as follows: the first stack holds 65535, the other the remaining 34465.]]
 * 
 * @section_func Functions
 * @desc These are the functions of the Inventory module:
 * @ref steam_inventory_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Inventory module:
 * @ref SteamInventory*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Inventory module:
 * @ref SteamInventory*
 * @section_end
 * @module_end
 */
