@func Social
@desc The following set of functions are used for setting or getting social information.

## Rich Presence

The following functions are provided to work with rich presence:

* ${function.}
* ${function.}

## User &amp; Friends

The following functions are provided to work with user and friends data:

- [steam\_set\_rich\_presence](#steam_set_rich_presence)
- [steam\_set\_rich\_presence](#steam_set_rich_presence-1)
- [steam\_user\_set\_played\_with](#steam_user_set_played_with)
- [steam\_get\_friends\_game\_info](#steam_get_friends_game_info)
- [steam\_get\_user\_avatar](#steam_get_user_avatar)
- [steam\_image\_get\_size](#steam_image_get_size)
- [steam\_image\_get\_rgba](#steam_image_get_rgba)
- [steam\_image\_get\_bgra](#steam_image_get_bgra)


@func_end

@func steam_set_rich_presence
@desc Sets a Rich Presence key/value for the current user that is automatically shared to all friends playing the same game.



@param {string} key The rich presence 'key' to set
@param {string} value The rich presence 'value' to associate




```gml
steam_set_rich_presence("game", "MyAwesomeGame");
steam_set_rich_presence("level", "Last");
steam_set_rich_presence("Mood","Happy");

steam_clear_rich_presence();

```
The code sample above uses sets a couple values for the local user rich presence and after that clears this values (using a call to the ${function.} function) meaning those will no longer show.



@func_end


@func steam_clear_rich_presence
@desc Clears all of the current user's Rich Presence key/values.





```gml
steam_set_rich_presence("game", "MyAwesomeGame");
steam_set_rich_presence("level", "Last");
steam_set_rich_presence("Mood","Happy");

steam_clear_rich_presence();

```
The code sample above uses ${function.} to set a couple values for the local user rich presence and after that clears this values meaning those will no longer show.



@func_end


@func steam_user_set_played_with
@desc Adds the given user to the "recently played with" list (accessed via "Players" - "Recent games") menu in Steam overlay.
This is usually something to do on session start for all remote users.


|user_id|int64|Other player user id


@returns {boolean}

```gml
steam_user_set_played_with(anyFriendUserID)
```
This code will add the specified user id to the "recently played with" list, of the local user.



@func_end


@func steam_get_friends_game_info
@desc Returns an array of information about what the current user's Steam friends are playing.
Equivalent to what can be seen in Steam Friends UI.



**Returns:**

```gml
Array<Struct>
```

|friendId|int64|The Steam user id
@param {real} gameId The Steam game id
|lobbyId|int64|The Steam lobby id (if hosting a lobby that is open for friends to join - otherwise `0`)
@param {string} name The friend's user name


```gml
var info_arr = steam_get_friends_game_info();
var info_num = array_length(info_arr);
var _steam_app_id = steam_get_app_id();
for (var i = 0; i < info_num; i++)
{
    var info = info_arr[i];
    // same game!
    if (info.gameId == _steam_app_id)
    {
        var lobby_id = info.lobbyId;
        // has an open lobby!
        if (lobby_id != 0)
        {
            var user_id = info.friendId;
            var name = info.name;
            // Use steam_lobby_join_id(lobby_id) to join the lobby when asked
        }
    }
}
```
The above code will check all you friends to see if anyone of them is playing the same game as you are ([steam_get_app_id](General#steam_get_app_id)) and check if they have an open lobbies and if so we can request to join the lobby they are in using [steam_lobby_join_id](Lobbies#steam_lobby_join_id).



@func_end


@func steam_get_user_avatar
@desc Fetches an avatar for the specified user ID. 
Returns `0` if no avatar is set for the user;<br>
      Returns `-1` if the request is pending, in which case an ${event.steam} will be triggered.
Returns positive IDs if the avatar is ready, this id is to be used with the following function:

* ${function.}
* ${function.}
* ${function.}



|userID|int64|The user Steam unique identifier
|avatar_size|[AvatarSize](E:\Source\YoYoExtensionDocumentation\YoYoExtensionDocumentation_RoboHelp\contents\Steamworks\Modules\Social\Constants\AvatarSize.htm)|The size of the avatar to be requested


@returns {real}

@event steam
@param {string} event_type The string value `"avatar_image_loaded"`
@param {boolean} success Whether the async action succeeded
|user_id|int64|The associated user's ID
@param {real} image The image ID that would otherwise be returned by the function
@param {real} width The image width, in pixels
@param {real} height The image height, in pixels **** 


```gml
var l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);

// Check if avatar is ready
if (l_img > 0)
{
    var l_dims = steam_image_get_size(l_img);
    var buff_size = l_dims[0] * l_dims[1] * 4

    var l_cols = buffer_create(buff_size, buffer_fixed, 1);

    l_ok = steam_image_get_rgba(l_img, l_cols, buff_size);

    if(!l_ok)
    {
        buffer_delete(l_cols);
    }

    var l_surf = surface_create(l_dims[0], l_dims[1]);
    buffer_set_surface(l_cols, l_surf, 0);

    l_sprite = sprite_create_from_surface(l_surf, 0, 0, l_dims[0], l_dims[1], false, false, 0, 0);

    surface_free(l_surf);
    buffer_delete(l_cols);
}

```
In the code above we query for the current user's ([steam_get_user_steam_id](General#steam_get_user_steam_id)) avatar, this function this function will either return:

* the handle to the function (return value greater than zero): in this case we follow by getting size information (${function.}), creating a buffer and and getting the avatar image RBGA data into the buffer (${function.}) and lastely creating a sprite from said buffer.
* no handle at all (return value equal to zero): in this case there is no avatar image for the specified used.
* a value of -1: in this last case it measn that the request is pending and you can catch the output with a ${event.steam}, using the following code:

```gml
// Early exit if event type doesn't match
if (async_load[?"event_type"] != "avatar_image_loaded") exit

// Validate status
var success = async_load[?"success"];
if (success == 1) {

    // Do what you want with the provided image handle
}
else {
    // Failure
    show_debug_message("Failed to get user avatar");
}

```



@func_end


@func steam_image_get_size
@desc Fetches dimensions for the said Steam image ID.
If the call succeeds, the return value is a two-element array containing width and height in pixels.


|steam_image_id|int64|steam identifier of the image


@returns {array}

```gml
var l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);
var l_dims = steam_image_get_size(l_img);
var buff_size = l_dims[0] * l_dims[1] * 4
var l_cols = buffer_create(buff_size, buffer_fixed, 1);
l_ok = steam_image_get_rgba(l_img, l_cols, buff_size);
if(!l_ok)
    exit
var l_surf = surface_create(l_dims[0], l_dims[1]);
buffer_set_surface(l_cols, l_surf, 0);
l_sprite = sprite_create_from_surface(l_surf, 0, 0, l_dims[0], l_dims[1], false, false, 0, 0);
surface_free(l_surf);
buffer_delete(l_cols);
```
The above code will show a code example.




@func_end


@func steam_image_get_rgba
@desc Grabs RGBA data of the specified Steam image ID into a GameMaker buffer.
Returns whether successful.

[[NOTE: NOTE The buffer should be appropriately sized in accordance with [steam_image_get_size](https://yal.cc/r/17/steamworks-gml/#steam_image_get_size) (width * height * 4).



|steam_image_id|int64|The steam image identifier
@param {type.buffer} buffer The buffer where data will be written
@param {real} size The size of the buffer supplied


@returns {Boolean}

```gml
var l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);

// Check if avatar is ready
if (l_img > 0)
{
    var l_dims = steam_image_get_size(l_img);
    var buff_size = l_dims[0] * l_dims[1] * 4

    var l_cols = buffer_create(buff_size, buffer_fixed, 1);

    l_ok = steam_image_get_rgba(l_img, l_cols, buff_size);

    if(!l_ok)
    {
        buffer_delete(l_cols);
    }

    var l_surf = surface_create(l_dims[0], l_dims[1]);
    buffer_set_surface(l_cols, l_surf, 0);

    l_sprite = sprite_create_from_surface(l_surf, 0, 0, l_dims[0], l_dims[1], false, false, 0, 0);

    surface_free(l_surf);
    buffer_delete(l_cols);
}

```
In the code above we query for the current user's ([steam_get_user_steam_id](General#steam_get_user_steam_id)) avatar data and place it inside a buffer (with the RGBA color format).
For a more extensive example refer to the ${function.} function.



@func_end


@func steam_image_get_bgra
@desc Grabs BGRA data of the specified Steam image ID into a GameMaker buffer.
Returns whether successful.

[[NOTE: NOTE The buffer should be appropriately sized in accordance with [steam_image_get_size](https://yal.cc/r/17/steamworks-gml/#steam_image_get_size) (width * height * 4).



|steam_image_id|int64|The steam image identifier
@param {type.buffer} buffer The buffer where data will be written
@param {real} size The size of the buffer supplied


@returns {Boolean}

```gml
var l_img = steam_get_user_avatar(steam_get_user_steam_id(), steam_user_avatar_size_large);

// Check if avatar is ready
if (l_img > 0)
{
    var l_dims = steam_image_get_size(l_img);
    var buff_size = l_dims[0] * l_dims[1] * 4

    var l_cols = buffer_create(buff_size, buffer_fixed, 1);

    l_ok = steam_image_get_bgra(l_img, l_cols, buff_size);

    if(!l_ok)
    {
        buffer_delete(l_cols);
    }

    var l_surf = surface_create(l_dims[0], l_dims[1]);
    buffer_set_surface(l_cols, l_surf, 0);

    l_sprite = sprite_create_from_surface(l_surf, 0, 0, l_dims[0], l_dims[1], false, false, 0, 0);

    surface_free(l_surf);
    buffer_delete(l_cols);
}

```
In the code above we query for the current user's ([steam_get_user_steam_id](General#steam_get_user_steam_id)) avatar data and place it inside a buffer (with the BGRA color format).
For a more extensive example refer to the ${function.} function.


@func_end