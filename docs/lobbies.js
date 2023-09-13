# Lobbies & Matchmaking

The following functions and constants allow you to use Steam&#39;s Lobbies and Matchmaking functionality.

## Current Lobby

These functions are provided for handling the current lobby:

* [steam_lobby_activate_invite_overlay](#steam_lobby_activate_invite_overlay)
* [steam_lobby_create](#steam_lobby_create)
* [steam_lobby_get_data](#steam_lobby_get_data)
* [steam_lobby_get_lobby_id](#steam_lobby_get_lobby_id)
* [steam_lobby_get_member_count](#steam_lobby_get_member_count)
* [steam_lobby_get_member_id](#steam_lobby_get_member_id)
* [steam_lobby_get_owner_id](#steam_lobby_get_owner_id)
* [steam_lobby_is_owner](#steam_lobby_is_owner)
* [steam_lobby_join_id](#steam_lobby_join_id)
* [steam_lobby_leave](#steam_lobby_leave)
* [steam_lobby_set_data](#steam_lobby_set_data)
* [steam_lobby_set_joinable](#steam_lobby_set_joinable)
* [steam_lobby_set_owner_id](#steam_lobby_set_owner_id)
* [steam_lobby_set_type](#steam_lobby_set_type)
* [steam_lobby_get_chat_message_data](#steam_lobby_send_chat_message-copy)
* [steam_lobby_get_chat_message_size](#steam_lobby_get_chat_message_size)
* [steam_lobby_get_chat_message_text](#steam_lobby_get_chat_message_text)
* [steam_lobby_send_chat_message](#steam_lobby_send_chat_message)
* [steam_lobby_send_chat_message_buffer](#steam_lobby_send_chat_message_buffer)

## Matchmaking

The following functions allow retrieving and handling lists of public lobbies.

* [steam_lobby_list_add_distance_filter](#steam_lobby_list_add_distance_filter)
* [steam_lobby_list_add_near_filter](#steam_lobby_list_add_near_filter)
* [steam_lobby_list_add_numerical_filter](#steam_lobby_list_add_numerical_filter)
* [steam_lobby_list_add_string_filter](#steam_lobby_list_add_string_filter)
* [steam_lobby_list_request](#steam_lobby_list_request)
* [steam_lobby_list_get_count](#steam_lobby_list_get_count)
* [steam_lobby_list_get_data](#steam_lobby_list_get_data)
* [steam_lobby_list_get_lobby_id](#steam_lobby_list_get_lobby_id)
* [steam_lobby_list_get_lobby_member_count](#steam_lobby_list_get_lobby_member_count)
* [steam_lobby_list_get_lobby_member_id](#steam_lobby_list_get_lobby_member_id)
* [steam_lobby_list_get_lobby_owner_id](#steam_lobby_list_get_lobby_owner_id)
* [steam_lobby_list_is_loading](#steam_lobby_list_is_loading)

## Constants

These are the constants used by this API:

* [LobbyFilterComparisonType](#LobbyFilterComparisonType)
* [LobbyFilterDistanceMode](#LobbyFilterDistanceMode)
* [LobbyType](#LobbyType)


@func_end


@func steam_lobby_activate_invite_overlay
Displays an invitation overlay if currently in a lobby.
The invitation overlay is much akin to the friends-list overlay, but only shows online friends, and shows an &quot;invite&quot; buttons on each row.



@returns {bool}

**Triggers:**

```gml
Asynchronous Steam Event (when an invitation is accepted)
```

|event_type|string|The string value `"lobby_join_requested"`|
|lobby_id|int64|The lobby unique identifier|
|success|bool|Whether or not the task was successful|
|result|real|The code of the result|


```gml
steam_lobby_activate_invite_overlay();
```
The above code will show the Steam invite overlay.


@func_end


@func steam_lobby_create
Starts creating a lobby. Returns whether or not the task was successfully created.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


**Syntax:**

```gml
steam_lobby_create(type, max_members);
```

|type|[LobbyType](#LobbyType)|Constant that indicate the status of the lobby|
|max_members|real|Indicates the maximum allowed number of users in the lobby (including the lobby's creator)|


@returns {bool}

@event steam
|event_type|string|The string value `"lobby_created"`|
|lobby_id|int64|The name of the leaderboard|
|success|real|Whether or not the request was successful|
|result|bool|The status code (descriptions can be found in Steam API documentation)|


```gml
steam_lobby_create(steam_lobby_type_public, 4);
```
The above code will create a lobby with a maximum of 4 users. We now add the following into the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) for checking the success of task:

```gml
var type = async_load[? "type"];
if (type == "lobby_created")
{
    if (async_load[? "success"])
        show_debug_message("Lobby created");
    else
        show_debug_message("Failed to create lobby");
}
```
in the example we are simply outputting the success of the lobby creation task.


@func_end


@func steam_lobby_get_chat_message_data
Returns the data of a message sent using [steam_lobby_send_chat_message_buffer](#steam_lobby_send_chat_message_buffer). Returns whether or not the buffer was successfully filled with the message data.


**Syntax:**

```gml
steam_lobby_get_chat_message_data(message_index, buffer);
```

|message_index|real|The message unique identifier|
|buffer|Id.Buffer|The buffer to write the data to|


@returns {bool}

```gml
chat_message_buf = buffer_create(steam_lobby_max_chat_message_size, buffer_fixed, 1);
steam_lobby_get_chat_message_data(_msg_index, chat_message_buf)
```
The code above will get the current message data and place it into a buffer (resizing if required and allowed, ie.: **buffer_grow** ).


@func_end


@func steam_lobby_get_chat_message_size
Return the size of a message


|message_index|real|The argument to be passed in|


@returns {real}

```gml
// ... INSIDE A STEAM ASYNC EVENT ...
switch (async[? "event_type"])
{
    case "lobby_chat_message":
        size = steam_lobby_get_chat_message_size(async_load[?"message_index"]);
        break;
}
```
The code above will get the current message size in bytes.


@func_end


@func steam_lobby_get_chat_message_text
Return the text of a message.


|index|real|Message index|


@returns {string}

```gml
// ... INSIDE A STEAM ASYNC EVENT ...
switch (async[? "event_type"])
{
    case "lobby_chat_message":
        text = steam_lobby_get_chat_message_text(async_load[?"message_index"]);
        break;
}
```
The code above will get the current message text.


@func_end


@func steam_lobby_get_data
Returns a lobby field value, as set by [steam_lobby_set_data](#steam_lobby_set_data).


|key|string|String representation of the data|


@returns {string}

```gml
var title = steam_lobby_get_data("title");
```
The code above will return the data of the `title` field of the current value.


@func_end


@func steam_lobby_get_lobby_id
  <section>
    <article>
      Returns the Steam ID of the current lobby.
    </article>
  </section>



**Returns:**

```gml
int64
```


```gml
var lobby_id = steam_lobby_get_lobby_id()
```
The code above will get the current lobby id and store it in a variable.


@func_end


@func steam_lobby_get_member_count
Returns the number of users in the current lobby (including you).
If the lobby is not valid, returns 0.



@returns {real}

```gml
for(var i = 0 ; i < steam_lobby_get_member_count() ; i++)
{
    var user_id = steam_lobby_get_member_id(i)
    //Do something with the user id
}
```
The code sample above will get the total number of member in the current lobby and iterate over all of them getting their unique ids, using the [steam_lobby_get_member_id](#steam_lobby_get_member_id)  function.


@func_end


@func steam_lobby_get_member_id
Returns the user ID of the member at the given index in the current lobby.


|index|real|Position of the member of the lobby to return|


**Returns:**

```gml
int64
```


```gml
for(var i = 0 ; i < steam_lobby_get_member_count() ; i++)
{
    var user_id = steam_lobby_get_member_id(i)
    //Do something with the user id
}
```
The code sample above will iterate over all of the members inside a lobby and get their unique ids.


@func_end


@func steam_lobby_get_owner_id
Returns the lobby&#39;s owner&#39;s Steam ID. If the lobby is not valid, returns ID 0.



**Returns:**

```gml
int64
```


```gml
var lobby_owner = steam_lobby_get_owner_id()
```
The code above will return the unique id of the owner of the current lobby.


@func_end


@func steam_lobby_is_owner
Returns whether the local player is the lobby&#39;s owner.

> **:information_source: NOTE**
>
> If the lobby is not valid, returns false.



@returns {bool}

```gml
for (var i = 0; i < steam_lobby_get_member_count(); i++)
{
    if (!steam_lobby_is_owner())
    {
        var user_id = steam_lobby_get_member_id(i)
        steam_lobby_set_owner_id(user_id)
        break;
    }
}
```
The code example will loop through all the members in a lobby and transfers ownership to the first member that is not the owner.


@func_end


@func steam_lobby_join_id
Starts joining a lobby with the given ID. Returns whether or not the API was correctly initialized.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


|lobby_id|int64|Identifier of the lobby|




@event steam
|event_type|string|The string value `"lobby_joined"`|
|lobby_id|int64|The lobby unique identifier|
|success|bool|Whether or not the task was successful|
|result|real|The code of the result|


```gml
steam_lobby_join_id(lobbyID)
```
The code will attempt the join a lobby with a given id, the task callback can be listened to inside the the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) with the folllowing sample code:

```gml
var type = async_load[? "type"];
if (type == "lobby_joined")
{
    var lobby_id = async_load[? "lobby_id"];
    var success = async_load[? "success"];

    // Do something with the data
}

```
In the example we are simply caching the data into variables.


@func_end


@func steam_lobby_leave
Leaves the current lobby (if any). Does not raise any errors if currently not in a lobby.

> **:information_source: NOTE**
>
> If you are the lobby owner and leave the lobby, Steam transfers lobby ownership to any other available user, so you may need to manually handle ownership transfer using [steam_lobby_set_owner_id](#steam_lobby_set_owner_id) before leaving.





```gml
steam_lobby_leave();
```
The code sample above will make the user leave the current lobby.


@func_end


@func steam_lobby_send_chat_message
Broadcasts a chat text message to all the users in the lobby.


|text|string|The string to be sent (up to 4000 characters)|


@returns {bool}

@event steam
|event_type|string|The string value `"lobby_chat_message"`|
|user_id|string|The sender unique identifier|
|message_index|real|The message unique identifier|


```gml
steam_lobby_send_chat_message("Hello World");
```
The code will broadcast a text message to all the members in the current lobby, the message can be read using the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) callback:

```gml
var type = async_load[? "type"];
if (type == "lobby_chat_message")
{
    var user_id = async_load[? "user_id"];
    var msg_id = async_load[? "message_index"];

    var user_name = steam_get_user_persona_name_sync(user_id);
    var message = steam_lobby_get_chat_message_text(msg_id);

    // Do something with the data
}

```
In the example we are simply caching the data into variables notice that use use the function [steam_get_user_persona_name_sync](E:\Source\YoYoExtensionDocumentation\YoYoExtensionDocumentation_RoboHelp\contents\Steamworks\Modules\General\steam_get_user_persona_name_sync.htm) and [steam_lobby_get_chat_message_text](#steam_lobby_get_chat_message_text) to get both the user name and the text inside the message, respectively.


@func_end


@func steam_lobby_send_chat_message_buffer
Broadcasts a chat (text or binary data) message to all the users in the lobby.


**Syntax:**

```gml
steam_lobby_send_chat_message_buffer(buffer, size);
```

|buffer|Id.Buffer|The buffer to be sent (up to 4 Kilobytes in size)|
|size|real|The amount of byte to be sent (there is no offset).|


@returns {bool}

@event steam
|event_type|string|The string value `"lobby_chat_message"`|
|user_id|string|The sender unique identifier|
|entry_type|real|Type of message received.|
|message_index|real|The message unique identifier|
|message_size|real|The size of the message being broadcasted|


```gml
var buff = buffer_create(256, buffer_fixed, 1);
buffer_write(buff, buffer_string, "This is a buffer!");
steam_lobby_send_chat_message_buffer(buff);
```
The code will broadcast a message (text or binary data) to all the members in the current lobby, the message can be read using the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) callback:

```gml
var type = async_load[? "type"];
if (type == "lobby_chat_message")
{
    var user_id = async_load[? "user_id"];
    var msg_id = async_load[? "message_index"];

    var user_name = steam_get_user_persona_name_sync(user_id);
    var data = steam_lobby_get_chat_message_data(global.chat_buffer, msg_id);

    // Do something with the data
}

```
In the example we are simply caching the data into variables notice that use use the function [steam_get_user_persona_name_sync](E:\Source\YoYoExtensionDocumentation\YoYoExtensionDocumentation_RoboHelp\contents\Steamworks\Modules\General\steam_get_user_persona_name_sync.htm) and [steam_lobby_get_chat_message_data](#steam_lobby_send_chat_message-copy) to get both the user name and the data inside the message, respectively.


@func_end


@func steam_lobby_set_data
Changes a lobby&#39;s field. You must be the lobby&#39;s owner to do this. Returns whether or not the data was set.
Fields can then be used to filter lobbies via matchmaking functions.

> **:information_source: NOTE**
>
> If your value is numeric, convert it to string prior to passing it to the function.


**Syntax:**

```gml
steam_lobby_set_data(key, value);
```

|key|string|The key to set the data for|
|value|string|The value to set|


@returns {bool}

```gml
steam_lobby_set_data("LobbyName","GreatLobby")
```
The code sample will set the `&quot;LobbyName&quot;` lobby field to the provided value (`&quot;GreatLobby&quot;`).


@func_end


@func steam_lobby_set_joinable
Sets whether or not a lobby is join-able by other players. This always defaults to enabled for a new lobby. Returns whether or not the property was set.

> **:information_source: NOTE**
>
> If joining is disabled, then no players can join, even if they are a friend or have been invited.

> **:information_source: NOTE**
>
> Lobbies with joining disabled will not be returned from a lobby search.


|joinable|bool|Allow ( **true** ) or prevent ( **false** ) users from joining this lobby|


@returns {bool}

```gml
steam_lobby_set_joinable(false);
```
The code above will prevent user from joining the current lobby.


@func_end


@func steam_lobby_set_owner_id
If you are a lobby owner, transfers the lobby ownership to the specified player, which must be in this same lobby. Returns whether or not the property was set.

> **:information_source: NOTE**
>
> You need to be the lobby owner in order to use the function.


|user_id|bool|The user to set as owner of the lobby|


@returns {bool}

```gml
for(var i = 0 ; i < steam_lobby_get_member_count() ; i++)
{
    if(!steam_lobby_is_owner())
    {
        var user_id = steam_lobby_get_member_id(i)
        steam_lobby_set_owner_id(user_id)
        break;
    }
}
```
The code example will loop through all the members in a lobby and transfers ownership to the first member that is not the owner.


@func_end


@func steam_lobby_set_type
Changes the lobby&#39;s type. Useful, if you don&#39;t allow mid-session joining, you could have the game make lobbies private on session start (or use [steam_lobby_set_joinable](#steam_lobby_set_joinable)).

> **:information_source: NOTE**
>
> You need to be the lobby owner in order to use the function.


|type|[LobbyType](#LobbyType)|The lobby visibility|




```gml
steam_lobby_set_type(steam_lobby_type_private)
```
The code above will change the lobby joining policy.


@func_end


@func steam_lobby_list_add_distance_filter
Restricts results by region and sorts them based on geographical proximity.


|mode|[LobbyFilterDistanceMode](#LobbyFilterDistanceMode)|Distance filter to be applied|


@returns {bool}

```gml
steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
steam_lobby_list_add_near_filter("myNearFilter", 77);
steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq)
steam_lobby_list_request();
```
The code above will apply some filters to be lobby list request before requesting the results.


@func_end


@func steam_lobby_list_add_near_filter
Sorts the results based on how close their field&#39;s (key)&#39;s value is to the provided one.

> **:information_source: NOTE**
>
> If multiple near-filters are specified, the earlier-set ones take precedence.


**Syntax:**

```gml
steam_lobby_list_add_near_filter(key, value);
```

|key|string|The filter key name to match.|
|value|real|The value that lobbies will be sorted on.|


@returns {bool}

```gml
steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
steam_lobby_list_add_near_filter("myNearFilter", 77);
steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq)
steam_lobby_list_request();
```
The code above will apply some filters to be lobby list request before requesting the results.


@func_end


@func steam_lobby_list_add_numerical_filter
Sets up a numeric filter for the next lobby list request. That is, lobbies not matching the condition will be excluded from results.

> **:information_source: NOTE**
>
> Lobbies without the given field (key) will be excluded.


**Syntax:**

```gml
steam_lobby_list_add_numerical_filter(key, value, comparison_type)
```

|key|string|The filter key name to match|
|value|real|The number to compare.|
|comparison_type|[LobbyFilterComparisonType](#LobbyFilterComparisonType)|The type of comparison to make.|


@returns {bool}

```gml
steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
steam_lobby_list_add_near_filter("myNearFilter", 77);
steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq)
steam_lobby_list_request();
```
The code above will apply some filters to be lobby list request before requesting the results.


@func_end


@func steam_lobby_list_add_string_filter
Sets up a string filter for the next lobby list request. That is, lobbies not matching the condition will be excluded from results.

> **:information_source: NOTE**
>
> Lobbies without the given field (`key`) will be assumed to have it as `&quot;&quot;`.


**Syntax:**

```gml
steam_lobby_list_add_string_filter(key, value, comparison_type)
```

|key|string|The filter key name to match|
|value|string|The string to compare|
|comparison_type|[LobbyFilterComparisonType](#LobbyFilterComparisonType)|The type of comparison to make (strings only accepts equal or not equal comparison)|


@returns {bool}

```gml
steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
steam_lobby_list_add_near_filter("myNearFilter", 77);
steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq)
steam_lobby_list_request();
```
The code above will apply some filters to be lobby list request before requesting the results.


@func_end


@func steam_lobby_list_get_count
Return count of lobbies, after a successful call to [steam_lobby_list_request](#steam_lobby_list_request).



@returns {real}

```gml
for(var a = 0 ; a < steam_lobby_list_get_count() ; a++)
{
    ins = instance_create_depth(600,200+90*a,0,Obj_Steam_Networking_List_Slot);
    ins.index = a
    ins.lobby_id = steam_lobby_list_get_lobby_id(a)
    ins.creator = steam_lobby_list_get_data(a, "Creator")
}
```
After a successful [steam_lobby_list_request](#steam_lobby_list_request) this function will return the number of results in the lobby query.


@func_end


@func steam_lobby_list_get_data
Gets the metadata associated with the specified key from the specified lobby.

> **:information_source: NOTE**
>
> The argument `lobby_index` is not a lobby id but instead the position of the lobby (from 0 to [steam_lobby_list_get_count](#steam_lobby_list_get_count)) on the query array after a [steam_lobby_list_request](#steam_lobby_list_request) async event is triggered.


**Syntax:**

```gml
steam_lobby_list_get_data(lobby_index, key);
```

|lobby_index|real|The lobby list index from the queried result.|
|key|string|The key to get the value of.|


@returns {string}

```gml
for(var a = 0 ; a < steam_lobby_list_get_count() ; a++)
{
    ins = instance_create_depth(600,200+90*a,0,Obj_Steam_Networking_List_Slot);
    ins.index = a
    ins.lobby_id = steam_lobby_list_get_lobby_id(a)
    ins.creator = steam_lobby_list_get_data(a, "Creator")
}
```
The above code will show a code example.


@func_end


@func steam_lobby_list_get_lobby_id
Gets the lobby id associated to the index.

> **:information_source: NOTE**
>
> The argument `lobby_index` is not a lobby id but instead the position of the lobby (from 0 to [steam_lobby_list_get_count](#steam_lobby_list_get_count)) on the query array after a [steam_lobby_list_request](#steam_lobby_list_request) async event is triggered.


|lobby_index|real|The lobby index in the current lobby list|


**Returns:**

```gml
int64
```


```gml
for(var a = 0; a < steam_lobby_list_get_count(); a++)
{
    ins = instance_create_depth(600, 200+90*a, 0, Obj_Steam_Networking_List_Slot);
    ins.index = a;
    ins.lobby_id = steam_lobby_list_get_lobby_id(a);
    ins.creator = steam_lobby_list_get_data(a, "Creator");
}
```
The above code will show a code example.


@func_end


@func steam_lobby_list_get_lobby_member_count
Gets the number of users in a lobby. **** 

> **:information_source: NOTE**
>
> The argument `lobby_index` is not a lobby id but instead the position of the lobby (from 0 to [steam_lobby_list_get_count](#steam_lobby_list_get_count)) on the query array after a [steam_lobby_list_request](#steam_lobby_list_request) async event is triggered.


|lobby_index|real|The lobby ID of the lobby to get the number of members of.|


@returns {real}

```gml
steam_lobby_list_get_lobby_member_count(steam_lobby_get_lobby_id());
```
The above code will show a code example.


@func_end


@func steam_lobby_list_get_lobby_member_id
Gets the Steam ID of the lobby member at the given index.

> **:information_source: NOTE**
>
> The argument `lobby_index` is not a lobby id but instead the index representation of the lobby (ranging from 0 to [steam_lobby_list_get_count](#steam_lobby_list_get_count)) on the query array after a [steam_lobby_list_request](#steam_lobby_list_request) async event is triggered. By the same logic the `member_index` is also not the user id but the indexed representation of the user within the lobby (this value ranges from 0 to [steam_lobby_list_get_lobby_member_count](#steam_lobby_list_get_lobby_member_count)).


**Syntax:**

```gml
steam_lobby_list_get_lobby_member_id(lobby_index, member_index);
```

|lobby_index|real|This MUST be an index ranging from 0 to [steam_lobby_list_get_count](#steam_lobby_list_get_count)|
|member_index|real|This MUST be an index ranging from 0 to [steam_lobby_list_get_lobby_member_count](#steam_lobby_list_get_lobby_member_count) of the lobby index|


**Returns:**

```gml
int64
```


```gml
var count = steam_lobby_list_get_lobby_member_count(steam_lobby_get_lobby_id())
for(var i = 0 ; i < count ; i++)
{
     var member = steam_lobby_list_get_lobby_member_id(i)
     //do something with the member id
}
```
The above code will show a code example.


@func_end


@func steam_lobby_list_get_lobby_owner_id
Returns the current lobby owner.

> **:information_source: NOTE**
>
> The argument `lobby_index` is not a lobby id but instead the position of the lobby (from 0 to [steam_lobby_list_get_count](#steam_lobby_list_get_count)) on the query array after a [steam_lobby_list_request](#steam_lobby_list_request) async event is triggered.


|index|real|The lobby index from the lobby list request result|


**Returns:**

```gml
int64
```


```gml
steam_lobby_list_get_lobby_owner_id(steam_lobby_get_lobby_id());
```
The above code will show a code example.


@func_end


@func steam_lobby_list_is_loading
Returns whether a lobby list request is currently underway.



@returns {bool}

```gml
steam_lobby_list_request();

// Later in code

if (steam_lobby_list_is_loading)
    show_message("Loading");

```
The above will code will check to see if the lobby list request is still loading or has finished.


@func_end


@func steam_lobby_list_join
Starts joining a lobby with the given ID.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


|index|Real|Position of the lobby in the list|




@event steam
|event_type|string|The string value `"lobby_joined"`|
|lobby_id|int64|The lobby unique identifier|
|success|bool|Whether or not the task was successful|
|result|real|The code of the result|


```gml
steam_lobby_list_join(0)
```
The code sample above can be used to join a lobby with the given index after a [steam_lobby_list_request](#steam_lobby_list_request) as been preformed.


@func_end


@func steam_lobby_list_request
Starts loading the list of lobbies matching the current filters.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

> **:information_source: NOTE**
>
> Filters are reset afterwards and have to be set again for subsequent request(s).

> **:information_source: NOTE**
>
> Existing results are kept up until the event is dispatched.





@event steam
|event_type|string|The string value `"lobby_list"`|
|lobby_count|int64|The number of lobbies in retrieved (same as [steam_lobby_list_get_count](#steam_lobby_list_get_count))|
|success|bool|Whether or not the task was successful|
|result|real|The code of the result|


```gml
steam_lobby_list_add_distance_filter(steam_lobby_list_distance_filter_far);
steam_lobby_list_add_near_filter("myNearFilter", 77);
steam_lobby_list_add_numerical_filter("level", 10, steam_lobby_list_filter_gt);
steam_lobby_list_add_string_filter("Stage","BattleZone", steam_lobby_list_filter_eq)
steam_lobby_list_request();
```
In this extended example we will request the lobby list that matches the requested filter criteria and parse its results in the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm). to start with we need to request the lobbies with the code above. And afterwards proceed to catch the results **after/during** the corresponding asynchronous event:

```gml
var type = ds_map_find_value(async_load, "event_type");
if (type == "lobby_list")
{
    var lb_count = steam_lobby_list_get_count();
    for (var i = 0; i < lb_count; i++)
    {
        var lb_ID = steam_lobby_list_get_lobby_id(i);
        var lb_owner = steam_lobby_list_get_lobby_owner_id(i);
        var lb_members_count = steam_lobby_list_get_lobby_member_count(i);
        for (var j = 0; j < lb_members_count; j++)
        {
            var lb_member_ID = steam_lobby_list_get_lobby_member_id(i, j);
            // Do what even you need with the queried information
        }
    }
}
```
This code will loop through all the loobies and respective members on the query result.


@func_end


@func LobbyFilterComparisonType
These constants specify the comparison type when applying a filter to a lobby list request by calling the following functions:

* [steam_lobby_list_add_numerical_filter](#steam_lobby_list_add_numerical_filter)
* [steam_lobby_list_add_string_filter](#steam_lobby_list_add_string_filter)

|Lobby Filter Comparison Type Constant|Description|
|----|----|
|`steam_lobby_list_filter_eq`|Equal (==).|
|`steam_lobby_list_filter_ne`|Not-equal (!=)|
|`steam_lobby_list_filter_lt`|Less-than (<), only applies to [steam_lobby_list_add_numerical_filter](#steam_lobby_list_add_numerical_filter)|
|`steam_lobby_list_filter_gt`|Greater-than (>), only applies to [steam_lobby_list_add_numerical_filter](#steam_lobby_list_add_numerical_filter)|
|`steam_lobby_list_filter_le`|Less-than-or-equal (<=), only applies to [steam_lobby_list_add_numerical_filter](#steam_lobby_list_add_numerical_filter)|
|`steam_lobby_list_filter_ge`|Greater-than-or-equal (>=), only applies to [steam_lobby_list_add_numerical_filter](#steam_lobby_list_add_numerical_filter)|


@func_end


@func LobbyFilterDistanceMode
These constants specify the distance mode to be used when applying a filter to a lobby list request by calling the [steam_lobby_list_add_distance_filter](#steam_lobby_list_add_distance_filter) function.

|Constant|Description|
|----|----|
|`steam_lobby_list_distance_filter_close`|Only allows lobbies in same immediate region|
|`steam_lobby_list_distance_filter_default`|Allows lobbies in same or nearby regions (same continent)|
|`steam_lobby_list_distance_filter_far`|Allows lobbies from up to half-way around the globe (nearby continents)|
|`steam_lobby_list_distance_filter_worldwide`|Allows any lobbies. May result in very high latencies, so use with care|


@func_end


@func LobbyType
These constants specify the type of lobby should be used creating a new lobby using the [steam_lobby_create](#steam_lobby_create) function.

|Lobby Type Constant|Description|
|----|----|
|`steam_lobby_type_private`|The lobby can only be joined by invitation|
|`steam_lobby_type_friends_only`|The lobby can be joined by invitation or via friends-list (by opening the user's menu and picking "Join game")|
|`steam_lobby_type_public`|The lobby can be joined by invitation, via friends-list and shows up in the public list (see matchmaking functions)|


@func_end