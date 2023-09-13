@func Inventory
The following functions, constants and structures allow to use the [Steam Inventory Service](https://partner.steamgames.com/doc/features/inventory).

## Pricing and Consumables

These functions are provided for handling pricing, purchases and consumables:

* [steam_inventory_consume_item](#steam_inventory_consume_item)
* [steam_inventory_get_item_price](#steam_inventory_get_item_price)
* [steam_inventory_get_items_with_prices](#steam_inventory_get_items_with_prices)
* [steam_inventory_request_eligible_promo_item_defs](#steam_inventory_request_eligible_promo_item_defs)
* [steam_inventory_request_prices](#steam_inventory_request_prices)
* [steam_inventory_start_purchase](#steam_inventory_start_purchase)

## Inventory Management (Async Result)

These asynchronous functions will return a **inventory result handle** that can be used to get additional information (see section below):

* [steam_inventory_add_promo_item](#steam_inventory_add_promo_item)
* [steam_inventory_add_promo_items](#steam_inventory_add_promo_items)
* [steam_inventory_exchange_items](#steam_inventory_exchange_items)
* [steam_inventory_generate_items](#steam_inventory_exchange_items-copy) :information_source: DEV ONLY
* [steam_inventory_get_all_items](#steam_inventory_get_all_items)
* [steam_inventory_get_items_by_id](#steam_inventory_get_items_by_id)
* [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties)
* [steam_inventory_transfer_item_quantity](#steam_inventory_transfer_item_quantity)
* [steam_inventory_trigger_item_drop](#steam_inventory_trigger_item_drop)

## Inventory Result Information

These functions can be called with the **inventory result handle** (from previous section) to get additional information:

* [steam_inventory_result_destroy](#steam_inventory_result_destroy)
* [steam_inventory_result_get_item_property](#steam_inventory_result_get_item_property)
* [steam_inventory_result_get_items](#steam_inventory_result_get_items)
* [steam_inventory_result_get_status](#steam_inventory_result_get_status)
* [steam_inventory_result_get_unix_timestamp](#steam_inventory_result_get_unix_timestamp)

## Dynamic Properties

This set of functions can be used to author items dynamic properties:

* [steam_inventory_start_update_properties](#steam_inventory_start_update_properties)
* [steam_inventory_remove_property](#steam_inventory_remove_property)
* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties)

## Constants

These are the constants used by this API:

* [InventoryResultStatus](#InventoryResultStatus)

## Structures

These are the structures used by this API:

* [InventoryItemConsumptionData](#InventoryItemConsumptionData)
* [InventoryItemCreationData](#InventoryItemCreationData)


@func_end


@func steam_inventory_consume_item
Consumes items from a user&#39;s inventory. If the quantity of the given item goes to zero, it is permanently removed.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [ConsumeItem](http://partner.steamgames.com/doc/api/ISteamInventory#ConsumeItem).


**Syntax:**

```gml
steam_inventory_consume_item(item_id, quantity);
```

|item_id|int64|The [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) to consume.|
|quantity|real|The number of items in that stack to consume.|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
steam_inventory_consume_item(player.apple, 1);
```
The code sample above will try to consume one item (`apple`,  [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t)), and trigger an async event with the task result.


@func_end


@func steam_inventory_get_item_price
After a successful call to [steam_inventory_request_prices](#steam_inventory_request_prices), you can call this method to get the pricing for a specific item definition.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetItemPrice](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemPrice).


|Argument|kind|Description|
|----|----|----|
|item|real|The [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) to get the price of.|


**Returns:**

```gml
int64
```


```gml
var price = steam_inventory_get_item_price(item);
```
The code sample above will return you the price for the speficied item definition. For more detailed example on using the function check [steam_inventory_request_prices](#steam_inventory_request_prices)


@func_end


@func steam_inventory_get_items_with_prices
After a successful call to [steam_inventory_request_prices](#steam_inventory_request_prices), you can call this method to get all the prices for applicable item definitions. 

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetItemsWithPrices](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsWithPrices).



**Returns:**

```gml
array of structs
```

|----|----|----|
|item_def|real|The [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) representing the item type|
|price|int64|The price of the item definition|
|base_price|int64|The base price of the item definition :eight_pointed_black_star: WINDOWS ONLY|


```gml
var array = steam_inventory_get_items_with_prices(inv_result);
if(array_length(array) > 0)
{
    var item_def = array[0].item_def
    var price = array[0].price
    var base_price = array[0].base_price
    show_debug_message("Found at one item that costs: " + string(price));
}
```
The code above will get items with prices and if the returning array size is greater than zero (meaning there is at least one item with a configured price) it prints to the console the item&#39;s price.


@func_end


@func steam_inventory_request_eligible_promo_item_defs
Requests the list of &quot;eligible&quot; promo items that can be manually granted to the given user.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [RequestEligiblePromoItemDefinitionsIDs](https://partner.steamgames.com/doc/api/ISteamInventory#RequestEligiblePromoItemDefinitionsIDs).


|user_id|int64|The user ID of the user to request the eligible promo items for.|


@returns {bool}

@event steam
|event_type|string|The string value `"inventory_request_eligible_promo_item_defs"`|
|user_id|int64|The user's unique identifier|
|item_def_count|real|The number of items|
|item_def_json|string|A json array of items identifiers (must be parsed using [json_parse](https://manual-en.yoyogames.com/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.htm) or [json_decode](https://manual-en.yoyogames.com/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.htm))|
|is_cached_data|bool|Whether the data was retrieved from the cache and not from the server|


```gml
steam_inventory_request_eligible_promo_item_defs(user_id)
```
For more information on this function call please refer to the official manual.


@func_end


@func steam_inventory_request_prices
Request prices for all item definitions that can be purchased in the user&#39;s local currency.

This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished, after which you can use the following functions:

* [steam_inventory_get_item_price](#steam_inventory_get_item_price)
* [steam_inventory_get_items_with_prices](#steam_inventory_get_items_with_prices)

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [RequestPrices](https://partner.steamgames.com/doc/api/ISteamInventory#RequestPrices).



@returns {bool}

@event steam
|event_type|string|The string value `"inventory_request_prices"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|currency|string|The string representing the user's [local currency](https://partner.steamgames.com/doc/store/pricing/currencies) code.|


```gml
steam_inventory_request_prices();
```
The code above will request for price information. The result for this task can be caught inside the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) with the following code:

```gml
// Early exit if event type doesn't match
if (async_load[? "event_type"] != "inventory_request_prices") exit;

// Early exit if handle doesn't match
if (async_load[? "success"])
{
    show_debug_message("The currenct being used is: " + async_load[? "currency"]);

    var price = steam_inventory_get_item_price(global.swordId);
}

```
The code above matches the event type and if so shows the currency being used. It also gets the price for a specific item using the [steam_inventory_get_item_price](#steam_inventory_get_item_price) function.


@func_end


@func steam_inventory_start_purchase
Starts the purchase process for the user, given a &quot;shopping cart&quot; of item definitions that the user would like to buy.
The user will be prompted in the Steam Overlay to complete the purchase in their local currency, funding their Steam Wallet if necessary, etc.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [StartPurchase](https://partner.steamgames.com/doc/api/ISteamInventory#StartPurchase).


|array|Array<[InventoryItemCreationData](#InventoryItemCreationData)>|An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be purchased (see [InventoryItemCreationData](#InventoryItemCreationData))|




```gml
var arrayCreate = [
              {item_def: item1, quantity: 3},
              {item_def: item2, quantity: 5},
       ]

steam_inventory_start_purchase()

```
The code above will initialize a purchase intent that will be finalized in the Steam Overlay.


@func_end


@func steam_inventory_add_promo_item
Take an Item Definition and grants the user the promo item. Item Definitions are integer numbers ranging from 1 to 999999999. Values below the range are invalid and values above the range are reserved.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:warning: IMPORTANT**
>
> You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [AddPromoItem](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItem).


|item_def|int64|The [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) to grant the player (number between 1 and 999999999)|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
steam_inventory_add_promo_item(item)
```
The above code will grant the user with a specific item. For an example on how to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to read the callback response, refer to the function [steam_inventory_get_all_items](#steam_inventory_get_all_items).


@func_end


@func steam_inventory_add_promo_items
Takes an array of Item Definitions and grants the user multiple items. Item Definitions are integer numbers ranging from 1 to 999999999. Values below the range are invalid and values above the range are reserved.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:warning: IMPORTANT**
>
> You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [AddPromoItems](https://partner.steamgames.com/doc/api/ISteamInventory#AddPromoItems).


|item_defs|Array\<Real>|An array of [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) to grant the user with.|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
steam_inventory_add_promo_items([item1,item2,item3])
```
The above code will grant the user with an multiple items specified in an array format. For an example on how to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to read the callback response, refer to the function [steam_inventory_get_all_items](#steam_inventory_get_all_items).


@func_end


@func steam_inventory_exchange_items
Grants one item in exchange for a set of other items.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [ExchangeItems](https://partner.steamgames.com/doc/api/ISteamInventory#ExchangeItems).


**Syntax:**

```gml
steam_inventory_exchange_items(create_arr, destroy_arr);
```

|create_arr|Array<[InventoryItemCreationData](#InventoryItemCreationData)>|An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be created (see [InventoryItemCreationData](#InventoryItemCreationData))|
|destroy_arr|Array<[InventoryItemConsumptionData](#InventoryItemConsumptionData)>|An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be consumed (see [InventoryItemConsumptionData](#InventoryItemConsumptionData))|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
var arrayDestroy = [
    { item_id: player.cursed_sword, quantity: 1 },
    { item_id: player.apple, quantity: 7 },
];

var arrayCreate = [
    { item_def: global.holy_sword, quantity: 1 },
    { item_def: global.orange, quantity: 2 }
];

steam_inventory_exchange_items(arrayCreate, arrayDestroy);

```
Given the provided items to be destroyed and the items to be create the code above will perform an exchange removing the current items (`arrayDestroy`) from the inventory and adding the new (`arrayCreate`) in their place. The result for this task can be caught inside the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) with the following code:

```gml
// Early exit if event type doesn't match
if (async_load[? "event_type"] != "inventory_result_ready") exit;

// Early exit if handle doesn't match
if (async_load[? "handle"] != handle) exit;

// Early exit if handle doesn't match
if (async_load[? "success"])
{
    show_debug_message("Exchange was a success");
}
else 
{
    show_debug_message("Exchange failed");
}

// Don't forget to clean the ununsed handle
steam_inventory_result_destroy(handle);
handle = undefined;

```
The code above matches the event type and checks if the handle id matches the one that initialized the request and if so we print a debug message with the success of the task. In the end we also use a call to [steam_inventory_result_destroy](#steam_inventory_result_destroy) to make sure we dispose and free all the used memory.


@func_end


@func steam_inventory_generate_items
Generates specific items for the current user.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:information_source: NOTE**
>
> This is only usable by Steam accounts that belong to the publisher group for your game.

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GenerateItems](https://partner.steamgames.com/doc/api/ISteamInventory#GenerateItems).


|create_arr|Array<[InventoryItemCreationData](#InventoryItemCreationData)>|An array of [structs](https://manual.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) representing items to be created (see [InventoryItemCreationData](#InventoryItemCreationData))|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
var arrayCreate = [
    {item_def: item1, quantity: 3},
    {item_def: item2, quantity: 5},
];

steam_inventory_generate_items(arrayCreate)

```
The code above will grant the specific items to the current user. For an example on how to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to read the callback response, refer to the function [steam_inventory_get_all_items](#steam_inventory_get_all_items).


@func_end


@func steam_inventory_get_all_items
Starts retrieving all items in the current user&#39;s inventory.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetAllItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetAllItems).



@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|

> **:eight_pointed_black_star: OPTIONAL**
>
> The asynchronous event presented below is only triggered when the result is newer/fresher than the last known result. It will not trigger if the inventory hasn&#39;t changed, or if results from two overlapping calls are reversed in flight and the earlier result is already known to be stale/out-of-date. The regular callback will still be triggered immediately afterwards; this is an additional notification for your convenience.

|event_type|string|The string value `"inventory_full_update"`|
|success|bool|Whether the async action succeeded|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
handle = steam_inventory_get_all_items();
```
The code above will start a query for all the items in current users inventory. The result for this task can be caught inside the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) with the following code:

```gml
// Early exit if event type doesn't match
if (async_load[? "event_type"] != "inventory_result_ready") exit;

// Early exit if handle doesn't match
if (async_load[? "handle"] != handle) exit;

// Early exit if handle doesn't match
if (async_load[? "success"])
{
    var items = steam_inventory_result_get_items(handle);

    for (var i = 0; i < array_length(items); i++)
    {
        var item = items[i];
        // access item data for each entry
        //
        // item.item_id
        // item.item_def
        // item.quantity
        // item.flags
    }
}

// Don't forget to clean the ununsed handle
steam_inventory_result_destroy(handle);
handle = undefined;

```
The code above matches the event type and checks if the handle id matches the one that initialized the request and if so gets the items from the result using the function [steam_inventory_result_get_items](#steam_inventory_result_get_items) and loops through them. In the end we also use a call to [steam_inventory_result_destroy](#steam_inventory_result_destroy) to make sure we dispose and free all the used memory.


@func_end


@func steam_inventory_get_items_by_id
Requests information about a subset of the current user&#39;s inventory.

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetItemsByID](https://partner.steamgames.com/doc/api/ISteamInventory#GetItemsByID).


|item_ids|Array\<Real>|An array of [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) of items to get information of.|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
handle = steam_inventory_get_items_by_id([item1, item2])
```
Similar to [steam_inventory_get_all_items](#steam_inventory_get_all_items) but you can specify an array of items to query information instead of querying all of them. For an example on how to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to read the callback response, refer to the function [steam_inventory_get_all_items](#steam_inventory_get_all_items).


@func_end


@func steam_inventory_submit_update_properties
Submits the transaction request to modify [dynamic properties](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) on items for the current user. See [StartUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#StartUpdateProperties).

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [SubmitUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#SubmitUpdateProperties).


|handle|real|The update handle corresponding to the transaction request|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
var handle = steam_inventory_start_update_properties()
steam_inventory_set_property_bool(handle, item_id, "invisible", true)
steam_inventory_set_property_float(handle, item_id, "power", 123.54)
steam_inventory_set_property_int(handle, item_id, "uses", 5)
steam_inventory_set_property_string(handle, item_id, "name", "Big Sword")
...
steam_inventory_remove_property(handle, item_id, "invisible")
...
steam_inventory_submit_update_properties(handle)
```
The code above provides a simple sample on how to set/removed some properties.
Starting with a [steam_inventory_start_update_properties](#steam_inventory_start_update_properties) then multiple calls to set/remove property functions:

* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_remove_property](#steam_inventory_remove_property)

Finishing with the submition of the update using the function call [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties). For an example on how to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to read the callback response, refer to the function [steam_inventory_get_all_items](#steam_inventory_get_all_items).


@func_end


@func steam_inventory_transfer_item_quantity
Transfer items between stacks within a user&#39;s inventory.

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [TransferItemQuantity](https://partner.steamgames.com/doc/api/ISteamInventory#TransferItemQuantity).


**Syntax:**

```gml
steam_inventory_transfer_item_quantity(source_item_id, quantity, dest_item_id);
```

|source_item_id|int64|The source [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) to transfer from|
|quantity|real|The quantity of the item that will be transferred|
|dest_item_id|int64|The destination [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) to transfer to|


@returns {real}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
handle = steam_inventory_transfer_item_quantity(global.apple, 2, global.oranges);
```
The above code will trigger a transfer between to items owned by the used the amount to be transferred in the example, the user will lose 2 apples and receive 2 oranges. For an example on how to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to read the callback response, refer to the function [steam_inventory_get_all_items](#steam_inventory_get_all_items).


@func_end


@func steam_inventory_trigger_item_drop
Trigger an item drop if the user has played a long enough period of time.<br>
      <br>
      This period can be customized in two places:

* At the application level within Inventory Service: Playtime Item Grants. This will automatically apply to all &quot;playtimegenerator&quot; items that do not specify any overrides.
* In an individual &quot;playtimegenerator&quot; item definition. The settings would take precedence over any application-level settings.

  <br>
    Only item definitions which are marked as &quot;playtime item generators&quot; can be spawned.

This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:warning: IMPORTANT**
>
>  You must call [steam_inventory_result_destroy](#steam_inventory_result_destroy) on the returned async result ID when you are done with it.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [TriggerItemDrop](https://partner.steamgames.com/doc/api/ISteamInventory#TriggerItemDrop).


|item_def|real|This must refer to an item definition of the type "playtimegenerator". See the [inventory schema](https://partner.steamgames.com/doc/features/inventory/schema) for more details.|


@returns {bool}

@event steam
|event_type|string|The string value `"inventory_result_ready"`|
|success|bool|Whether the async action succeeded|
|result|[InventoryResultStatus](#InventoryResultStatus)|The status code as returned by [steam_inventory_result_get_status](#steam_inventory_result_get_status)|
|handle|real|The associated async result ID, which can be used to tell apart what result this event is for.|


```gml
handle = steam_inventory_trigger_item_drop(item_def)
```
For more information on this function call please refer to the official manual. For an example on how to use the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to read the callback response, refer to the function [steam_inventory_get_all_items](#steam_inventory_get_all_items).


@func_end


@func steam_inventory_result_destroy
Destroys a result handle and frees all associated memory. 
This handle is returned by the following functions:

* [steam_inventory_add_promo_item](#steam_inventory_add_promo_item)
* [steam_inventory_add_promo_items](#steam_inventory_add_promo_items)
* [steam_inventory_consume_item](#steam_inventory_consume_item)
* [steam_inventory_exchange_items](#steam_inventory_exchange_items)
* [steam_inventory_generate_items](#steam_inventory_exchange_items-copy)
* [steam_inventory_get_all_items](#steam_inventory_get_all_items)
* [steam_inventory_get_items_by_id](#steam_inventory_get_items_by_id)
* [steam_inventory_trigger_item_drop](#steam_inventory_trigger_item_drop)
* [steam_inventory_transfer_item_quantity](#steam_inventory_transfer_item_quantity)
* [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties)

> **:information_source: NOTE**
>
> This function can be called using an inventory result handle after the corresponding async event has been triggered.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [DestroyResult](https://partner.steamgames.com/doc/api/ISteamInventory#DestroyResult).


|inv_result|real|The inventory result handle to destroy|


@returns {bool}

```gml
// Early exit if event type doesn't match
if (async_load[? "event_type"] != "inventory_result_ready") exit;

// Early exit if handle doesn't match
if (async_load[? "handle"] != handle) exit;

// Early exit if handle doesn't match
if (async_load[? "success"])
{
    show_debug_message("Exchange was a success");
}
else 
{
    show_debug_message("Exchange failed");
}

// Don't forget to clean the ununsed handle
steam_inventory_result_destroy(handle);
handle = undefined;

```
In the code above we have an example of a asynchronous callback that generates a result handle by the end of which we execute a call to [steam_inventory_result_destroy](#steam_inventory_result_destroy) to make sure we dispose and free all the used memory.


@func_end


@func steam_inventory_result_get_item_property
Gets the dynamic properties from an item in an inventory result set.
Property names are always composed of ASCII letters, numbers, and/or underscores.

> **:information_source: NOTE**
>
> This function can be called using an inventory result handle after the corresponding async event has been triggered.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetResultItemProperty](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItemProperty).


**Syntax:**

```gml
steam_inventory_result_get_item_property(inv_result, item_index, prop_name);
```

|inv_result|real|The inventory result handle|
|item_index|real|Position of the item in the result set|
|prop_name|string|The property name to get the value for|


@returns {string}

```gml
handle = steam_inventory_get_all_items();
```
The code above will start a query for all the items in current users inventory. The result for this task can be caught inside the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) with the following code:

```gml
// Early exit if event type doesn't match
if (async_load[? "event_type"] != "inventory_result_ready") exit;

// Early exit if handle doesn't match
if (async_load[? "handle"] != handle) exit;

// Early exit if handle doesn't match
if (async_load[? "success"])
{
    var items = steam_inventory_result_get_items(handle);

    var status = steam_inventory_result_get_status(handle);
    var timestamp = steam_inventory_result_get_unix_timestamp(handle);

    for (var i = 0; i < array_length(items); i++)
    {      
        // It's also possible to get properties from each item using 
        // prop1 = steam_inventory_result_get_item_property(handle, i, "property_name1")
        // prop2 = steam_inventory_result_get_item_property(handle, i, "property_name2")
    }
}

// Don't forget to clean the ununsed handle
steam_inventory_result_destroy(handle);
handle = undefined;

```
The code above matches the event type and checks if the handle id matches the one that initialized the request and if so gets the items from the result using the function [steam_inventory_result_get_items](#steam_inventory_result_get_items) and loops through them to get the item properties we want. In the end we also use a call to [steam_inventory_result_destroy](#steam_inventory_result_destroy) to make sure we dispose and free all the used memory.


@func_end


@func steam_inventory_result_get_items
Get the items associated with an inventory result handle.

> **:information_source: NOTE**
>
> This function can be called using an inventory result handle after the corresponding async event has been triggered.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetResultItems](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultItems).


|inv_result|real|The inventory result handle|


**Returns:**

```gml
Array<Struct>
```

|----|----|----|
|item_id|real|A  representing the item instance|
|item_def|real|A  representing the item type|
|quantity|int64|How many of the said item there is in the slot|
|flags|int64|This is a bit-masked collection of [ESteamItemFlags](https://partner.steamgames.com/doc/api/ISteamInventory#ESteamItemFlags)|


```gml
var array = steam_inventory_result_get_items(inv_result);
for(var i = 0 ; i < array_lenght(array) ; i++)
{
     var struct = array[i]
     var item_id = struct.item_id
     var item_def = struct.item_def
     var quantity = struct.quantity
}
```
For a more detailed implementation sample please refer to the [steam_inventory_get_all_items](#steam_inventory_get_all_items) function.


@func_end


@func steam_inventory_result_get_status
Returns status code of a result.

> **:information_source: NOTE**
>
> This function can be called using an inventory result handle after the corresponding async event has been triggered.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetResultStatus](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultStatus).


|inv_result|real|The inventory result handle|


@returns {InventoryResultStatus}

```gml

if(steam_inventory_result_get_status(inv_result) != steam_inventory_result_status_ok)
     exit
```
For a more detailed implementation sample please refer to the [steam_inventory_result_get_item_property](#steam_inventory_result_get_item_property) function.


@func_end


@func steam_inventory_result_get_unix_timestamp
Returns a Unix timestamp for the server time at which the result was generated.

> **:information_source: NOTE**
>
> This function can be called using an inventory result handle after the corresponding async event has been triggered.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [GetResultTimestamp](https://partner.steamgames.com/doc/api/ISteamInventory#GetResultTimestamp).


|inv_result|real|The inventory result handle|


**Returns:**

```gml
int64
```


```gml
var timestamp = steam_inventory_result_get_unix_timestamp(inv_result);
```
For a more detailed implementation sample please refer to the [steam_inventory_result_get_item_property](#steam_inventory_result_get_item_property) function.


@func_end


@func steam_inventory_start_update_properties
Starts a transaction request to update dynamic properties on items for the current user.
Returns a steam_inventory_update_handle that can be used with the following functions:

* [steam_inventory_remove_property](#steam_inventory_remove_property)
* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [StartUpdateProperties](https://partner.steamgames.com/doc/api/ISteamInventory#StartUpdateProperties).



**Returns:**

```gml
int64
```


```gml
handle = steam_inventory_start_update_properties()
steam_inventory_set_property_bool(handle, item_id, "invisible", true)
steam_inventory_set_property_float(handle, item_id, "power", 123.54)
steam_inventory_set_property_int(handle, item_id, "uses", 5)
steam_inventory_set_property_string(handle, item_id, "name", "Big Sword")
steam_inventory_submit_update_properties(handle)
```
The code above provides a simple sample on how to set/removed some properties.
Starting with a [steam_inventory_start_update_properties](#steam_inventory_start_update_properties) then mutliple calls to set/remove property functions:

* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_remove_property](#steam_inventory_remove_property)

Finishing with the submition of the update using the function call [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties).


@func_end


@func steam_inventory_remove_property
Removes a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) of the given item.

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [RemoveProperty](https://partner.steamgames.com/doc/api/ISteamInventory#RemoveProperty).


**Syntax:**

```gml
steam_inventory_remove_property(handle, item_id, prop_name);
```

|handle|real|The update handle returned by [steam_inventory_start_update_properties](#steam_inventory_start_update_properties)|
|item_id|int64|The [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) of the item being modified|
|prop_name|string|The dynamic property being removed|


@returns {bool}

```gml
var handler = steam_inventory_start_update_properties()
steam_inventory_set_property_bool(handler, item_id, "invisible", true)
steam_inventory_set_property_float(handler, item_id, "power", 123.54)
steam_inventory_set_property_int(handler, item_id, "uses", 5)
steam_inventory_set_property_string(handler, item_id, "name", "Big Sword")
...
steam_inventory_remove_property(handler, item_id, "invisible")
...
steam_inventory_submit_update_properties(handler)
```
The code above provides a simple sample on how to set/removed some properties.
Starting with a [steam_inventory_start_update_properties](#steam_inventory_start_update_properties) then mutliple calls to set/remove property functions:

* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_remove_property](#steam_inventory_remove_property)

Finishing with the submition of the update using the function call [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties).


@func_end


@func steam_inventory_set_property_bool
Sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the boolean given item 

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).


**Syntax:**

```gml
steam_inventory_set_property_bool(handle, prop_name, val);
```

|handle|real|The update handle corresponding to the transaction request|
|prop_name|string|The dynamic property being added or updated.|
|val|bool|value being set.|


@returns {bool}

```gml
handle = steam_inventory_start_update_properties()
steam_inventory_set_property_bool(handle, item_id, "invisible", true)
steam_inventory_set_property_float(handle, item_id, "power", 123.54)
steam_inventory_set_property_int(handle, item_id, "uses", 5)
steam_inventory_set_property_string(handle, item_id, "name", "Big Sword")
...
steam_inventory_remove_property(handle, item_id, "invisible")
...
steam_inventory_submit_update_properties(handle)
```
The code above provides a simple sample on how to set/removed some properties.
Starting with a [steam_inventory_start_update_properties](#steam_inventory_start_update_properties) then mutliple calls to set/remove property functions:

* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_remove_property](#steam_inventory_remove_property)

Finishing with the submition of the update using the function call [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties).


@func_end


@func steam_inventory_set_property_float
Sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the float given item 

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).


**Syntax:**

```gml
steam_inventory_set_property_float(handle, prop_name, val);
```

|handle|real|The update handle corresponding to the transaction request|
|prop_name|string|The dynamic property being added or updated.|
|val|real|value being set.|


@returns {bool}

```gml
handle = steam_inventory_start_update_properties()
steam_inventory_set_property_bool(handle, item_id, "invisible", true)
steam_inventory_set_property_float(handle, item_id, "power", 123.54)
steam_inventory_set_property_int(handle, item_id, "uses", 5)
steam_inventory_set_property_string(handle, item_id, "name", "Big Sword")
...
steam_inventory_remove_property(handle, item_id, "invisible")
...
steam_inventory_submit_update_properties(handle)
```
The code above provides a simple sample on how to set/removed some properties.
Starting with a [steam_inventory_start_update_properties](#steam_inventory_start_update_properties) then mutliple calls to set/remove property functions:

* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_remove_property](#steam_inventory_remove_property)

Finishing with the submition of the update using the function call [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties).


@func_end


@func steam_inventory_set_property_int
Sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the int given item 

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).


**Syntax:**

```gml
steam_inventory_set_property_int(handle, prop_name, val);
```

|handle|real|The update handle corresponding to the transaction request|
|prop_name|string|The dynamic property being added or updated.|
|val|real|value being set.|


@returns {bool}

```gml
handle = steam_inventory_start_update_properties()
steam_inventory_set_property_bool(handle, item_id, "invisible", true)
steam_inventory_set_property_float(handle, item_id, "power", 123.54)
steam_inventory_set_property_int(handle, item_id, "uses", 5)
steam_inventory_set_property_string(handle, item_id, "name", "Big Sword")
...
steam_inventory_remove_property(handle, item_id, "invisible")
...
steam_inventory_submit_update_properties(handle)
```
The code above provides a simple sample on how to set/removed some properties.
Starting with a [steam_inventory_start_update_properties](#steam_inventory_start_update_properties) then mutliple calls to set/remove property functions:

* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_remove_property](#steam_inventory_remove_property)

Finishing with the submition of the update using the function call [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties).


@func_end


@func steam_inventory_result_get_status
Sets a [dynamic property](https://partner.steamgames.com/doc/features/inventory/dynamicproperties) for the string given item 

> **:eight_pointed_black_star: EXTERNAL**
>
> A wrapper around [SetProperty](https://partner.steamgames.com/doc/api/ISteamInventory#SetProperty).


**Syntax:**

```gml
steam_inventory_set_property_string(handle, prop_name, val);
```

|handle|real|The update handle corresponding to the transaction request|
|prop_name|string|The dynamic property being added or updated.|
|val|string|value being set.|


@returns {bool}

```gml
var handle = steam_inventory_start_update_properties()
steam_inventory_set_property_bool(handle, item_id, "invisible", true)
steam_inventory_set_property_float(handle, item_id, "power", 123.54)
steam_inventory_set_property_int(handle, item_id, "uses", 5)
steam_inventory_set_property_string(handle, item_id, "name", "Big Sword")
...
steam_inventory_remove_property(handle, item_id, "invisible")
...
steam_inventory_submit_update_properties(handle)
```
The code above provides a simple sample on how to set/removed some properties.
Starting with a [steam_inventory_start_update_properties](#steam_inventory_start_update_properties) then mutliple calls to set/remove property functions:

* [steam_inventory_set_property_bool](#steam_inventory_set_property_bool)
* [steam_inventory_set_property_float](#steam_inventory_set_property_float)
* [steam_inventory_set_property_int](#steam_inventory_set_property_int)
* [steam_inventory_set_property_string](#steam_inventory_set_property_string)
* [steam_inventory_remove_property](#steam_inventory_remove_property)

Finishing with the submition of the update using the function call [steam_inventory_submit_update_properties](#steam_inventory_submit_update_properties).


@func_end


@func InventoryResultStatus
These constants represent the status of an inventory result async event, and are returned by the async events of the following functions:

* [steam_inventory_add_promo_item](#steam_inventory_add_promo_item)
* [steam_inventory_add_promo_items](#steam_inventory_add_promo_items)
* [steam_inventory_consume_item](#steam_inventory_consume_item)
* [steam_inventory_exchange_items](#steam_inventory_exchange_items)
* [steam_inventory_get_all_items](#steam_inventory_get_all_items)

|Inventory Result Status Constant|Description|
|----|----|
|`steam_inventory_result_status_pending`|Pending|
|`steam_inventory_result_status_ok`|Ok|
|`steam_inventory_result_status_expired`|Expired|
|`steam_inventory_result_status_invalid`|Invalid|
|`steam_inventory_result_status_fail`|Fail|
|`steam_inventory_result_status_invalid_param`|Iinvalid|
|`steam_inventory_result_status_service_unavailable`|Unavailable|
|`steam_inventory_result_status_limit_exceeded`|Exceeded|

  <br>


@func_end


@func InventoryItemConsumptionData
This struct is used as an argument when performing a call to the following functions

* [steam_inventory_exchange_items](#steam_inventory_exchange_items)

and it contains the following details about an item consumption:

|item_id|int64|A [steam_inventory_item_id](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemInstanceID_t) of an item to be consumed|
|quantity|real|How much of the said item is to be consumed|


@func_end


@func InventoryItemCreationData
This struct is used as an argument when performing a call to the following functions

* [steam_inventory_exchange_items](#steam_inventory_exchange_items)
* [steam_inventory_generate_items](#steam_inventory_exchange_items-copy)
* [steam_inventory_start_purchase](#steam_inventory_start_purchase)

and it contains the following details about an item creation/purchase:

|item_def|int64|A [steam_inventory_item_def](https://partner.steamgames.com/doc/api/ISteamInventory#SteamItemDef_t) representing the item type|
|quantity|real|Number of items of type to be created|


@func_end