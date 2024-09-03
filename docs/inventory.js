// FUNCTIONS

/**
 * @func steam_inventory_consume_item
 * @desc This function consumes items from a user's inventory. If the quantity of the given item goes to zero, it is permanently removed.
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [ConsumeItem](http://partner.steamgames.com/doc/api/ISteamInventory#ConsumeItem).
 * 
 * @param {int64} item_id The [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) to consume.
 * @param {real} quantity The number of items in that stack to consume.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 *
 * @example
 * ```gml
 * steam_inventory_consume_item(player.apple, 1);
 * ```
 * The code sample above will try to consume one item (`apple`,  [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t)), and trigger an async event with the task result.
 * @func_end
 */
 
 /**
 * @func steam_inventory_get_item_price
 * @desc After a successful call to ${function.steam_inventory_request_prices}, you can call this method to get the pricing for a specific item definition.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetItemPrice](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemPrice).
 * 
 * @param {real} item The [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) to get the price of.
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * var _price = steam_inventory_get_item_price(item);
 * ```
 * The code sample above will return you the price for the specified item definition. For a more detailed example on using the function check ${function.steam_inventory_request_prices}.
 * @func_end
 */

/**
 * @func steam_inventory_get_items_with_prices
 * @desc After a successful call to ${function.steam_inventory_request_prices}, you can call this method to get all the prices for applicable item definitions.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetItemsWithPrices](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsWithPrices).
 * 
 * @returns {array[type.struct]}
 * 
 * @param {real} item_def The [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) representing the item type
 * @param {int64} price The price of the item definition
 * @param {int64} base_price The base price of the item definition :eight_pointed_black_star: WINDOWS ONLY
 * 
 * @example
 * ```gml
 * var _array = steam_inventory_get_items_with_prices(inv_result);
 * if(array_length(_array) > 0)
 * {
 *     var _item_def = _array[0].item_def;
 *     var _price = _array[0].price;
 *     var base_price = _array[0].base_price;
 *     show_debug_message("Found at one item that costs: " + string(_price));
 * }
 * ```
 * The code above will get items with prices and if the returning array size is greater than zero (meaning there is at least one item with a configured price) it prints to the console the item's price.
 * @func_end
 */

/**
 * @func steam_inventory_request_eligible_promo_item_defs
 * @desc This function requests the list of "eligible" promo items that can be manually granted to the given user.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [RequestEligiblePromoItemDefinitionsIDs](https://partner.steamgames.com/doc/api/ISteamInventory#RequestEligiblePromoItemDefinitionsIDs).
 * 
 * @param {int64} user_id The user ID of the user to request the eligible promo items for.
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_request_eligible_promo_item_defs"`
 * @member {int64} user_id The user's unique identifier
 * @member {real} item_def_count The number of items
 * @member {string} item_def_json A JSON array of items identifiers (must be parsed using ${function.json_parse} or ${function.json_decode})
 * @member {boolean} is_cached_data Whether the data was retrieved from the cache and not from the server
 * @event_end
 * 
 * @example
 * ```gml
 * steam_inventory_request_eligible_promo_item_defs(user_id);
 * ```
 * For more information on this function call please refer to the official manual.
 * @func_end
 */

/**
 * @func steam_inventory_request_prices
 * @desc This function requests prices for all item definitions that can be purchased in the user's local currency.
 * 
 * * ${function.steam_inventory_get_item_price}
 * * ${function.steam_inventory_get_items_with_prices}
 * 
 * > [!TIP]
 * >
 * > A wrapper around [RequestPrices](https://partner.steamgames.com/doc/api/ISteamInventory#RequestPrices).
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_request_prices"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {string} currency The string representing the user's [local currency](https://partner.steamgames.com/doc/store/pricing/currencies) code.
 * @event_end
 * 
 * @example
 * ```gml
 * steam_inventory_request_prices();
 * ```
 * The code above will request for price information. The result for this task can be caught inside the ${event.steam} with the following code:
 * 
 * ```gml
 * // Early exit if event type doesn't match
 * if (async_load[? "event_type"] != "inventory_request_prices") exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "success"])
 * {
 *     show_debug_message("The currency being used is: " + async_load[? "currency"]);
 * 
 *     _var price = steam_inventory_get_item_price(global.swordId);
 * }
 * 
 * ```
 * The code above matches the event type and if so shows the currency being used. It also gets the price for a specific item using the ${function.steam_inventory_get_item_price} function.
 * @func_end
 */

/**
 * @func steam_inventory_start_purchase
 * @desc This function starts the purchase process for the user, given a "shopping cart" of item definitions that the user would like to buy.
 * The user will be prompted in the Steam Overlay to complete the purchase in their local currency, funding their Steam Wallet if necessary, etc.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [StartPurchase](https://partner.steamgames.com/doc/api/ISteamInventory#StartPurchase).
 * 
 * @param {array[struct.InventoryItemCreationData]} array An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be purchased (see ${struct.InventoryItemCreationData})
 * 
 * @example
 * ```gml
 * var _arrayCreate = [
 *               {item_def: item1, quantity: 3},
 *               {item_def: item2, quantity: 5},
 *        ];
 * 
 * steam_inventory_start_purchase();
 * ```
 * The code above will initialize a purchase intent that will be finalized in the Steam Overlay.
 * @func_end
 */

/**
 * @func steam_inventory_add_promo_item
 * @desc This function takes an Item Definition and grants the user the promo item. Item Definitions are integer numbers ranging from 1 to 999999999. Values below the range are invalid and values above the range are reserved.
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [AddPromoItem](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItem).
 * 
 * @param {int64} item_def The [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) to grant the player (number between 1 and 999999999)
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * steam_inventory_add_promo_item(item);
 * ```
 * The above code will grant the user with a specific item. For an example on how to use the ${event.steam} to read the callback response, refer to the function ${function.steam_inventory_get_all_items}.
 * @func_end
 */

/**
 * @func steam_inventory_add_promo_items
 * @desc This function takes an array of Item Definitions and grants the user multiple items. Item Definitions are integer numbers ranging from 1 to 999999999. Values below the range are invalid and values above the range are reserved.
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [AddPromoItems](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItems).
 * 
 * @param {array} item_defs An array of [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) to grant the user with.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * steam_inventory_add_promo_items([item1, item2, item3]);
 * ```
 * The above code will grant the user with an multiple items specified in an array format. For an example on how to use the ${event.steam} to read the callback response, refer to the function ${function.steam_inventory_get_all_items}.
 * @func_end
 */

/**
 * @func steam_inventory_exchange_items
 * @desc This function grants one item in exchange for a set of other items.
 * 
 * The API currently takes an array of items to generate but at this time the size of that array must be 1 and the quantity of the new item must be 1.
 * 
 * [[NOTE: Any items that can be granted MUST have an exchange attribute in their itemdef.]]
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [ExchangeItems](https://partner.steamgames.com/doc/api/ISteamInventory#ExchangeItems).
 * 
 * @param {array[struct.InventoryItemCreationData]} create_arr An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be created (must be of size 1 and the item quantity must also be 1)
 * @param {array[struct.InventoryItemConsumptionData]} destroy_arr An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be consumed
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * var _arrayDestroy = [
 *     { item_id: player.cursed_sword, quantity: 1 },
 *     { item_id: player.apple, quantity: 7 },
 * ];
 * 
 * var _arrayCreate = [
 *     { item_def: global.holy_sword, quantity: 1 },
 * ];
 * 
 * steam_inventory_exchange_items(_arrayCreate, _arrayDestroy);
 * ```
 * Given the provided items to be destroyed and the items to be create the code above will perform an exchange removing the current items (`arrayDestroy`) from the inventory and adding the new (`arrayCreate`) in their place. The result for this task can be caught inside the ${event.steam} with the following code:
 * 
 * ```gml
 * // Early exit if event type doesn't match
 * if (async_load[? "event_type"] != "inventory_result_ready") exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "handle"] != handle) exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "success"])
 * {
 *     show_debug_message("Exchange was a success");
 * }
 * else 
 * {
 *     show_debug_message("Exchange failed");
 * }
 * 
 * // Don't forget to clean the ununsed handle
 * steam_inventory_result_destroy(handle);
 * handle = undefined;
 * ```
 * The code above matches the event type and checks if the handle ID matches the one that initialized the request and if so we print a debug message with the success of the task. In the end we also use a call to ${function.steam_inventory_result_destroy} to make sure we dispose and free all the used memory.
 * @func_end
 */

/**
 * @func steam_inventory_generate_items
 * @desc This function generates specific items for the current user.
 * 
 * [[NOTE: This is only usable by Steam accounts that belong to the publisher group for your game.]]
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GenerateItems](https://partner.steamgames.com/doc/api/ISteamInventory#GenerateItems).
 * 
 * @param {array[struct.InventoryItemCreationData]} create_arr An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be created
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * var _arrayCreate = [
 *     {item_def: item1, quantity: 3},
 *     {item_def: item2, quantity: 5},
 * ];
 * 
 * steam_inventory_generate_items(_arrayCreate);
 * ```
 * The code above will grant the specific items to the current user. For an example on how to use the ${event.steam} to read the callback response, refer to the function ${function.steam_inventory_get_all_items}.
 * @func_end
 */

/**
 * @func steam_inventory_get_all_items
 * @desc This function starts retrieving all items in the current user's inventory.
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetAllItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetAllItems).
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @event steam
 * @desc
 * > **:eight_pointed_black_star: OPTIONAL**
 * >
 * > The asynchronous event presented below is only triggered when the result is newer/fresher than the last known result. It will not trigger if the inventory hasn't changed, or if results from two overlapping calls are reversed in flight and the earlier result is already known to be stale/out-of-date. The regular callback will still be triggered immediately afterwards; this is an additional notification for your convenience.
 * @member {string} event_type The string value `"inventory_full_update"`
 * @member {boolean} success Whether the async action succeeded
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * handle = steam_inventory_get_all_items();
 * ```
 * The code above will start a query for all the items in current users inventory. The result for this task can be caught inside the ${event.steam} with the following code:
 * 
 * ```gml
 * // Early exit if event type doesn't match
 * if (async_load[? "event_type"] != "inventory_result_ready") exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "handle"] != handle) exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "success"])
 * {
 *     var _items = steam_inventory_result_get_items(handle);
 * 
 *     for (var i = 0; i < array_length(_items); i++)
 *     {
 *         var _item = _items[i];
 *         // access item data for each entry
 *         //
 *         // _item.item_id
 *         // _item.item_def
 *         // _item.quantity
 *         // _item.flags
 *     }
 * }
 * 
 * // Don't forget to clean the ununsed handle
 * steam_inventory_result_destroy(handle);
 * handle = undefined;
 * ```
 * The code above matches the event type and checks if the handle ID matches the one that initialized the request and if so gets the items from the result using the function ${function.steam_inventory_result_get_items} and loops through them. In the end we also use a call to ${function.steam_inventory_result_destroy} to make sure we dispose and free all the used memory.
 * @func_end
 */

/**
 * @func steam_inventory_get_items_by_id
 * @desc This function requests information about a subset of the current user's inventory.
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetItemsByID](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsByID).
 * 
 * @param item_ids {array} An array of [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) of items to get information of.
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * handle = steam_inventory_get_items_by_id([item1, item2]);
 * ```
 * Similar to ${function.steam_inventory_get_all_items} but you can specify an array of items to query information instead of querying all of them. For an example on how to use the ${event.steam} to read the callback response, refer to the function ${function.steam_inventory_get_all_items}.
 * @func_end
 */

/**
 * @func steam_inventory_submit_update_properties
 * @desc Submits the transaction request to modify [dynamic properties](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) on items for the current user. See [StartUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#StartUpdateProperties).
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [SubmitUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#SubmitUpdateProperties).
 * 
 * @param {real} handle The update handle corresponding to the transaction request
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * var _handle = steam_inventory_start_update_properties();
 * steam_inventory_set_property_bool(_handle, item_id, "invisible", true);
 * steam_inventory_set_property_float(_handle, item_id, "power", 123.54);
 * steam_inventory_set_property_int(_handle, item_id, "uses", 5);
 * steam_inventory_set_property_string(_handle, item_id, "name", "Big Sword");
 * // ...
 * steam_inventory_remove_property(_handle, item_id, "invisible");
 * // ...
 * steam_inventory_submit_update_properties(_handle);
 * ```
 * The code above provides a simple sample on how to set/removed some properties.
 * Starting with a ${function.steam_inventory_start_update_properties} then multiple calls to set/remove property functions:
 * 
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * * ${function.steam_inventory_remove_property}
 * 
 * Finishing with the submission of the update using the function call ${function.steam_inventory_submit_update_properties}. For an example on how to use the ${event.steam} to read the callback response, refer to the function ${function.steam_inventory_get_all_items}.
 * @func_end
 */

/**
 * @func steam_inventory_transfer_item_quantity
 * @desc Transfer items between stacks within a user's inventory.
 *
 * This can be used to stack, split, and move items. The source and destination items must have the same itemdef id. To move items onto a destination stack specify the source, the quantity to move, and the destination item id. To split an existing stack, pass `steam_item_instance_id_invalid` into `dest_item_id`. A new item stack will be generated with the requested quantity.
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [TransferItemQuantity](https://partner.steamgames.com/doc/api/ISteamInventory#TransferItemQuantity).
 * 
 * @param {int64} source_item_id The source [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) to transfer from
 * @param {real} quantity The quantity of the item that will be transferred
 * @param  {int64} dest_item_id The destination [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) to transfer to or `steam_item_instance_id_invalid` to create a new stack
 * 
 * @returns {real}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * handle = steam_inventory_transfer_item_quantity(global.apples[0], 2, global.apples[1]);
 * ```
 * The above code will trigger a transfer between two item stacks owned by the user the amount to be transferred in the example, this will move 2 apples from stack 0 to stack 1. For an example on how to use the ${event.steam} to read the callback response, refer to the function ${function.steam_inventory_get_all_items}.
 * @func_end
 */

/**
 * @func steam_inventory_trigger_item_drop
 * @desc This function triggers an item drop if the user has played a long enough period of time.
 * This period can be customized in two places:
 * 
 * * At the application level within Inventory Service: Playtime Item Grants. This will automatically apply to all "playtimegenerator" items that do not specify any overrides.
 * * In an individual "playtimegenerator" item definition. The settings would take precedence over any application-level settings.
 * 
 * Only item definitions which are marked as "playtime item generators" can be spawned.
 * 
 * [[WARNING: You must call ${function.steam_inventory_result_destroy} on the returned async result ID when you are done with it.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [TriggerItemDrop](https://partner.steamgames.com/doc/api/ISteamInventory#TriggerItemDrop).
 * 
 * @param {real} item_def This must refer to an item definition of the type "playtimegenerator". See the [inventory schema](https://partner.steamgames.com/doc/features/inventory/schema) for more details.
 * 
 * @returns {boolean}
 * 
 * @event steam
 * @member {string} event_type The string value `"inventory_result_ready"`
 * @member {boolean} success Whether the async action succeeded
 * @member {constant.InventoryResultStatus} result The status code as returned by ${function.steam_inventory_result_get_status}
 * @member {real} handle The associated async result ID, which can be used to tell apart what result this event is for.
 * @event_end
 * 
 * @example
 * ```gml
 * handle = steam_inventory_trigger_item_drop(item_def);
 * ```
 * For more information on this function call please refer to the official manual. For an example on how to use the ${event.steam} to read the callback response, refer to the function ${function.steam_inventory_get_all_items}.
 * @func_end
 */

/**
 * @func steam_inventory_result_destroy
 * @desc Destroys a result handle and frees all associated memory. 
 * This handle is returned by the following functions:
 * 
 * * ${function.steam_inventory_add_promo_item}
 * * ${function.steam_inventory_add_promo_items}
 * * ${function.steam_inventory_consume_item}
 * * ${function.steam_inventory_exchange_items}
 * * ${function.steam_inventory_generate_items}
 * * ${function.steam_inventory_get_all_items}
 * * ${function.steam_inventory_get_items_by_id}
 * * ${function.steam_inventory_trigger_item_drop}
 * * ${function.steam_inventory_transfer_item_quantity}
 * * ${function.steam_inventory_submit_update_properties}
 * 
 * [[NOTE: This function can be called using an inventory result handle after the corresponding async event has been triggered.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [DestroyResult](https://partner.steamgames.com/doc/api/ISteamInventory#DestroyResult).
 * 
 * @param {real} inv_result The inventory result handle to destroy
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * // Early exit if event type doesn't match
 * if (async_load[? "event_type"] != "inventory_result_ready") exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "handle"] != handle) exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "success"])
 * {
 *     show_debug_message("Exchange was a success");
 * }
 * else 
 * {
 *     show_debug_message("Exchange failed");
 * }
 * 
 * // Don't forget to clean the unused handle
 * steam_inventory_result_destroy(handle);
 * handle = undefined;
 * ```
 * In the code above we have an example of a asynchronous callback that generates a result handle by the end of which we execute a call to ${function.steam_inventory_result_destroy} to make sure we dispose and free all the used memory.
 * @func_end
 */

/**
 * @func steam_inventory_result_get_item_property
 * @desc This function gets the dynamic properties from an item in an inventory result set.
 * Property names are always composed of ASCII letters, numbers, and/or underscores.
 * 
 * [[NOTE: This function can be called using an inventory result handle after the corresponding async event has been triggered.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetResultItemProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItemProperty).
 * 
 * @param {real} inv_result The inventory result handle
 * @param {real} item_index Position of the item in the result set
 * @param {string} prop_name The property name to get the value for
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * handle = steam_inventory_get_all_items();
 * ```
 * The code above will start a query for all the items in the current user's inventory. The result for this task can be caught inside the ${event.steam} with the following code:
 * 
 * ```gml
 * // Early exit if event type doesn't match
 * if (async_load[? "event_type"] != "inventory_result_ready") exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "handle"] != handle) exit;
 * 
 * // Early exit if handle doesn't match
 * if (async_load[? "success"])
 * {
 *     var _items = steam_inventory_result_get_items(handle);
 * 
 *     var _status = steam_inventory_result_get_status(handle);
 *     var _timestamp = steam_inventory_result_get_unix_timestamp(handle);
 * 
 *     for (var i = 0; i < array_length(_items); i++)
 *     {      
 *         // It's also possible to get properties from each item using 
 *         // prop1 = steam_inventory_result_get_item_property(handle, i, "property_name1");
 *         // prop2 = steam_inventory_result_get_item_property(handle, i, "property_name2");
 *     }
 * }
 * 
 * // Don't forget to clean the unused handle
 * steam_inventory_result_destroy(handle);
 * handle = undefined;
 * 
 * ```
 * The code above matches the event type and checks if the handle ID matches the one that initialized the request and if so gets the items from the result using the function ${function.steam_inventory_result_get_items} and loops through them to get the item properties we want. In the end we also use a call to ${function.steam_inventory_result_destroy} to make sure we dispose and free all the used memory.
 * @func_end
 */

/**
 * @func steam_inventory_result_get_items
 * @desc This function gets the items associated with an inventory result handle.
 * 
 * [[NOTE: This function can be called using an inventory result handle after the corresponding async event has been triggered.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetResultItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItems).
 * 
 * @param {real} inv_result The inventory result handle
 * 
 * @returns {array[struct.ResultItem]}
 * 
 * @example
 * ```gml
 * var _array = steam_inventory_result_get_items(inv_result);
 * for(var i = 0 ; i < array_length(_array) ; i++)
 * {
 *      var _struct = _array[i];
 *      var _item_id = _struct.item_id;
 *      var _item_def = _struct.item_def;
 *      var _quantity = _struct.quantity;
 * }
 * ```
 * For a more detailed implementation sample please refer to the ${function.steam_inventory_get_all_items} function.
 * @func_end
 */

/**
 * @func steam_inventory_result_get_status
 * @desc This function returns the status code of a result.
 * 
 * [[NOTE: This function can be called using an inventory result handle after the corresponding async event has been triggered.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetResultStatus](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultStatus).
 * 
 * @param {real} inv_result The inventory result handle
 * 
 * @returns {constant.InventoryResultStatus}
 * 
 * @example
 * ```gml
 * if(steam_inventory_result_get_status(inv_result) != steam_inventory_result_status_ok)
 *      exit;
 * ```
 * For a more detailed implementation sample please refer to the ${function.steam_inventory_result_get_item_property} function.
 * @func_end
 */

/**
 * @func steam_inventory_result_get_unix_timestamp
 * @desc This function returns a Unix timestamp for the server time at which the result was generated.
 * 
 * [[NOTE: This function can be called using an inventory result handle after the corresponding async event has been triggered.]]
 * 
 * > [!TIP]
 * >
 * > A wrapper around [GetResultTimestamp](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultTimestamp).
 * 
 * @param {real} inv_result The inventory result handle
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * var _timestamp = steam_inventory_result_get_unix_timestamp(inv_result);
 * ```
 * For a more detailed implementation sample please refer to the ${function.steam_inventory_result_get_item_property} function.
 * @func_end
 */

/**
 * @func steam_inventory_start_update_properties
 * @desc This function starts a transaction request to update dynamic properties on items for the current user.
 * It returns a steam_inventory_update_handle that can be used with the following functions:
 * 
 * * ${function.steam_inventory_remove_property}
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * 
 * > [!TIP]
 * >
 * > A wrapper around [StartUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#StartUpdateProperties).
 * 
 * @returns {int64}
 * 
 * @example
 * ```gml
 * handle = steam_inventory_start_update_properties();
 * steam_inventory_set_property_bool(handle, item_id, "invisible", true);
 * steam_inventory_set_property_float(handle, item_id, "power", 123.54);
 * steam_inventory_set_property_int(handle, item_id, "uses", 5);
 * steam_inventory_set_property_string(handle, item_id, "name", "Big Sword");
 * steam_inventory_submit_update_properties(handle);
 * ```
 * The code above provides a simple sample on how to set/removed some properties.
 * Starting with a ${function.steam_inventory_start_update_properties} then multiple calls to set/remove property functions:
 * 
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * * ${function.steam_inventory_remove_property}
 * 
 * Finishing with the submission of the update using the function call ${function.steam_inventory_submit_update_properties}.
 * @func_end
 */

/**
 * @func steam_inventory_remove_property
 * @desc This function removes a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) of the given item.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [RemoveProperty](https://partner.steamgames.com/doc/api/ISteamInventory#RemoveProperty).
 * 
 * @param {real} handle The update handle returned by ${function.steam_inventory_start_update_properties}
 * @param {int64} item_id The [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) of the item being modified
 * @param {string} prop_name The dynamic property being removed
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _handler = steam_inventory_start_update_properties();
 * steam_inventory_set_property_bool(_handler, item_id, "invisible", true);
 * steam_inventory_set_property_float(_handler, item_id, "power", 123.54);
 * steam_inventory_set_property_int(_handler, item_id, "uses", 5);
 * steam_inventory_set_property_string(_handler, item_id, "name", "Big Sword");
 * // ...
 * steam_inventory_remove_property(_handler, item_id, "invisible");
 * // ...
 * steam_inventory_submit_update_properties(_handler);
 * ```
 * The code above provides a simple sample on how to set/remove some properties.
 * Starting with a ${function.steam_inventory_start_update_properties} then multiple calls to set/remove property functions:
 * 
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * * ${function.steam_inventory_remove_property}
 * 
 * Finishing with the submission of the update using the function call ${function.steam_inventory_submit_update_properties}.
 * @func_end
 */

/**
 * @func steam_inventory_set_property_bool
 * @desc This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the boolean given item.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).
 * 
 * @param {real} handle The update handle corresponding to the transaction request
 * @param {string} prop_name The dynamic property being added or updated.
 * @param {boolean} val value being set.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * handle = steam_inventory_start_update_properties();
 * steam_inventory_set_property_bool(handle, item_id, "invisible", true);
 * steam_inventory_set_property_float(handle, item_id, "power", 123.54);
 * steam_inventory_set_property_int(handle, item_id, "uses", 5);
 * steam_inventory_set_property_string(handle, item_id, "name", "Big Sword");
 * // ...
 * steam_inventory_remove_property(handle, item_id, "invisible");
 * // ...
 * steam_inventory_submit_update_properties(handle);
 * ```
 * The code above provides a simple sample on how to set/removed some properties.
 * Starting with a ${function.steam_inventory_start_update_properties} then multiple calls to set/remove property functions:
 * 
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * * ${function.steam_inventory_remove_property}
 * 
 * Finishing with the submission of the update using the function call ${function.steam_inventory_submit_update_properties}.
 * @func_end
 */

/**
 * @func steam_inventory_set_property_float
 * @desc This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the float given item.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).
 * 
 * @param {real} handle The update handle corresponding to the transaction request
 * @param {string} prop_name The dynamic property being added or updated.
 * @param {real} val value being set.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * handle = steam_inventory_start_update_properties();
 * steam_inventory_set_property_bool(handle, item_id, "invisible", true);
 * steam_inventory_set_property_float(handle, item_id, "power", 123.54);
 * steam_inventory_set_property_int(handle, item_id, "uses", 5);
 * steam_inventory_set_property_string(handle, item_id, "name", "Big Sword");
 * // ...
 * steam_inventory_remove_property(handle, item_id, "invisible");
 * // ...
 * steam_inventory_submit_update_properties(handle);
 * ```
 * The code above provides a simple sample on how to set/removed some properties.
 * Starting with a ${function.steam_inventory_start_update_properties} then multiple calls to set/remove property functions:
 * 
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * * ${function.steam_inventory_remove_property}
 * 
 * Finishing with the submission of the update using the function call ${function.steam_inventory_submit_update_properties}.
 * @func_end
 */

/**
 * @func steam_inventory_set_property_int
 * @desc This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the int given item.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).
 * 
 * @param {real} handle The update handle corresponding to the transaction request
 * @param {string} prop_name The dynamic property being added or updated.
 * @param {real} val value being set.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * handle = steam_inventory_start_update_properties();
 * steam_inventory_set_property_bool(handle, item_id, "invisible", true);
 * steam_inventory_set_property_float(handle, item_id, "power", 123.54);
 * steam_inventory_set_property_int(handle, item_id, "uses", 5);
 * steam_inventory_set_property_string(handle, item_id, "name", "Big Sword");
 * // ...
 * steam_inventory_remove_property(handle, item_id, "invisible");
 * // ...
 * steam_inventory_submit_update_properties(handle);
 * ```
 * The code above provides a simple sample on how to set/removed some properties.
 * Starting with a ${function.steam_inventory_start_update_properties} then multiple calls to set/remove property functions:
 * 
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * * ${function.steam_inventory_remove_property}
 * 
 * Finishing with the submission of the update using the function call ${function.steam_inventory_submit_update_properties}.
 * @func_end
 */

/**
 * @func steam_inventory_set_property_string
 * @desc This function sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the string given item.
 * 
 * > [!TIP]
 * >
 * > A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).
 * 
 * @param {real} handle The update handle corresponding to the transaction request
 * @param {string} prop_name The dynamic property being added or updated.
 * @param {string} val value being set.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * var _handle = steam_inventory_start_update_properties();
 * steam_inventory_set_property_bool(_handle, item_id, "invisible", true);
 * steam_inventory_set_property_float(_handle, item_id, "power", 123.54);
 * steam_inventory_set_property_int(_handle, item_id, "uses", 5);
 * steam_inventory_set_property_string(_handle, item_id, "name", "Big Sword");
 * // ...
 * steam_inventory_remove_property(_handle, item_id, "invisible");
 * // ...
 * steam_inventory_submit_update_properties(_handle);
 * ```
 * The code above provides a simple sample on how to set/removed some properties.
 * Starting with a ${function.steam_inventory_start_update_properties} then multiple calls to set/remove property functions:
 * 
 * * ${function.steam_inventory_set_property_bool}
 * * ${function.steam_inventory_set_property_float}
 * * ${function.steam_inventory_set_property_int}
 * * ${function.steam_inventory_set_property_string}
 * * ${function.steam_inventory_remove_property}
 * 
 * Finishing with the submission of the update using the function call ${function.steam_inventory_submit_update_properties}.
 * @func_end
 */

/**
 * @const InventoryResultStatus
 * @desc These constants represent the status of an inventory result async event.
 * 
 * @member steam_inventory_result_status_pending Pending
 * @member steam_inventory_result_status_ok Ok
 * @member steam_inventory_result_status_expired Expired
 * @member steam_inventory_result_status_invalid Invalid
 * @member steam_inventory_result_status_fail Fail
 * @member steam_inventory_result_status_invalid_param Iinvalid
 * @member steam_inventory_result_status_service_unavailable Unavailable
 * @member steam_inventory_result_status_limit_exceeded Exceeded
 * @const_end
 */

/**
 * @struct InventoryItemConsumptionData
 * @desc This struct contains items consumption data. It contains the following details about an item consumption:
 * 
 * @member {int64} item_id A [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) of an item to be consumed
 * @member {real} quantity How much of the said item is to be consumed
 * @struct_end
 */

/**
 * @struct InventoryItemCreationData
 * @desc This struct contains Inventory item creation data. It contains the following details about an item creation/purchase:
 * 
 * @member {int64} item_def A [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) representing the item type
 * @member {real} quantity Number of items of type to be created
 * @struct_end
 */

/**
 * @struct ResultItem
 * @member {real} item_id A representing the item instance
 * @member {real} item_def A representing the item type
 * @member {int64} quantity How many of the said item there is in the slot
 * @member {int64} flags This is a bit-masked collection of [ESteamItemFlags](https://partner.steamgames.com/doc/api/ISteamInventory#ESteamItemFlags)
 * @struct_end
 */

// MODULES

/**
 * @module inventory
 * @title Inventory
 * @desc The Inventory module contains functions, constants and structures that allow you to use the [Steam Inventory Service](https://partner.steamgames.com/doc/features/inventory).
 * 
 * [[Warning: The Steamworks SDK limits the number of items that can be read from one stack to 65535.
 * This is a limitation of the SDK rather than of the extension: the data type used for the `m_unQuantity` member of [SteamItemDetails_t](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDetails_t) is uint16, which can hold a maximum value of 65535.
 * 
 * Since the limitation is per stack, you can work around it by transferring any amount over 65535 to a new stack using the function ${function.steam_inventory_transfer_item_quantity} and add the necessary logic to your game that keeps track of the excess amount on the second stack.
 * For example, an amount of 100000 would be divided over two stacks as follows: the first stack holds 65535, the other the remaining 34465.]]
 * 
 * @section_func Pricing and Consumables
 * @desc These functions are provided for handling pricing, purchases and consumables:
 * 
 * @ref steam_inventory_consume_item
 * @ref steam_inventory_get_item_price
 * @ref steam_inventory_get_items_with_prices
 * @ref steam_inventory_request_eligible_promo_item_defs
 * @ref steam_inventory_request_prices
 * @ref steam_inventory_start_purchase
 * 
 * @section_end
 * 
 * @section_func Inventory Management (Async Result)
 * @desc These asynchronous functions will return an **inventory result handle** that can be used to get additional information (see section below):
 * 
 * @ref steam_inventory_add_promo_item
 * @ref steam_inventory_add_promo_items
 * @ref steam_inventory_exchange_items
 * @ref steam_inventory_generate_items :information_source: DEV ONLY
 * @ref steam_inventory_get_all_items
 * @ref steam_inventory_get_items_by_id
 * @ref steam_inventory_submit_update_properties
 * @ref steam_inventory_transfer_item_quantity
 * @ref steam_inventory_trigger_item_drop
 * 
 * @section_end
 * 
 * @section_func Inventory Result Information
 * @desc These functions can be called with the **inventory result handle** (from previous section) to get additional information:
 * 
 * @ref steam_inventory_result_destroy
 * @ref steam_inventory_result_get_item_property
 * @ref steam_inventory_result_get_items
 * @ref steam_inventory_result_get_status
 * @ref steam_inventory_result_get_unix_timestamp
 * 
 * @section_end
 * 
 * @section_func Dynamic Properties
 * @desc This set of functions can be used to author items dynamic properties:
 * 
 * @ref steam_inventory_start_update_properties
 * @ref steam_inventory_remove_property
 * @ref steam_inventory_set_property_bool
 * @ref steam_inventory_set_property_float
 * @ref steam_inventory_set_property_int
 * @ref steam_inventory_set_property_string
 * @ref steam_inventory_submit_update_properties
 * 
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants used by this API:
 * 
 * @ref InventoryResultStatus
 * 
 * @section_end
 * 
 * @section_struct Structures
 * @desc These are the structures used by this API:
 * 
 * @ref InventoryItemConsumptionData
 * @ref InventoryItemCreationData
 * @ref ResultItem
 * 
 * @section_end
 * 
 * @module_end
 */
