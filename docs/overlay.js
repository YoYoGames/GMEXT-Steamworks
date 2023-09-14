@func Overlay
The Steam Overlay is the visual display that can be brought up to display the Steam interface to the user. This is normally done by the user themselves using a combination of keys, but you also have the possibility of doing it from within your game, so that you can map a button or an event to show the overlay.

## Functions

The extension provides you with the following functions:

* [steam_is_overlay_enabled](#steam_is_overlay_enabled)
* [steam_is_overlay_activated](#steam_is_overlay_activated)
* [steam_activate_overlay](#steam_activate_overlay)
* [steam_activate_overlay_browser](#steam_activate_overlay_browser)
* [steam_activate_overlay_store](#steam_activate_overlay_store)
* [steam_activate_overlay_user](#steam_activate_overlay_user)
* [steam_set_overlay_notification_inset](#steam_set_overlay_notification_inset)
* [steam_set_overlay_notification_position](#steam_set_overlay_notification_position)

## Constants

This section also provides the following constants to use with the functions:

* [OverlayType](#OverlayType)
* [OverlayNotificationPosition](#OverlayNotificationPosition)

@func_end


@func steam_is_overlay_enabled
When using the Steam API, this function can be called to check that the Steam client API has the overlay functionality enabled.



@returns {Bool}

```gml
global.steam_api = false;
if steam_initialised()
{
    if steam_stats_ready() && steam_is_overlay_enabled()
    {
        global.steamapi = true;
    }
}
```
The above code will set a global variable to `true` if the Steam client API is correctly initialized, along with the Steam statistics and overlay functionality, or it will set the variable to `false` otherwise.



@func_end


@func steam_is_overlay_activated
This function can be used to find out if the user has the Steam Overlay active or not. If the overlay is active and visible to the user the function will return `true`, and if it is not, then it will return `false`. An example of what this function can be used for would be for polling the Steam API for the overlay so that you can pause your game while the overlay is being shown.



@returns {Bool}

```gml
if steam_is_overlay_activated()
{
    global.Pause = true;
}
```
The above code will check to see if the Steam overlay is active and if it is it will set the global variable &quot;Pause&quot; to true.



@func_end


@func steam_activate_overlay
The Steam overlay is a piece of the Steam user interface that can be activated over the top of almost any game launched through Steam. It lets the user access their friends list, web browser, chat, and in-game DLC purchasing. The default key for a user to access the overlay while in a game is SHIFT + TAB, but you can also bring up any page of the overlay using this function. It takes one of six constants that are listed below:


@param {constant.OverlayType} overlay_type The page index of the Steam API UI to show (see [OverlayType](#OverlayType) constants).




```gml
var key = keyboard_lastkey;
switch (key)
{
    case vk_f1: steam_activate_overlay(ov_friends); break;
    case vk_f2: steam_activate_overlay(ov_community); break;
    case vk_f3: steam_activate_overlay(ov_players); break;
    case vk_f4: steam_activate_overlay(ov_settings); break;
    case vk_f5: steam_activate_overlay(ov_gamegroup); break;
    case vk_f6: steam_activate_overlay(ov_achievements); break;
}
```
The above code polls the last keyboard key pressed and if it is any of the function keys from 1 to 6 it will open the corresponding page of the Steam overlay.

  <!-- KEYWORDS
steam_activate_overlay
ov_friends
ov_community
ov_players
ov_settings
ov_gamegroup
ov_achievements
-->

@func_end


@func steam_activate_overlay_browser
With this function you can open the Steam game overlay to its web browser and then have it load the specified URL. you need to use the full URL as a string for this to resolve correctly, for example: `&quot;http://www.steamgames.com/&quot;`.


@param {string} url The (full) URL for the overlay to open.




```gml
if keyboard_check_pressed(vk_f1)
{
    steam_activate_overlay_browser("http://www.steamgames.com/");
}
```
The above code polls the keyboard for the F1 key and if it is then Steam overlay will be opened and resolve to the given URL.



@func_end


@func steam_activate_overlay_store
With this function you can open the Steam overlay on the store page for a game so that users can buy or download DLC (for example). You need to supply the unique App ID for the game or DLC which you would get from the Steam dashboard when you set it up.


@param {integer} app_id The unique App ID for your game.




```gml
if keyboard_check_pressed(vk_f1)
{
    steam_activate_overlay_store(global.DLC_id);
}
```
The above code polls the keyboard for the F1 key and if it is then Steam overlay will be opened on the page for the game content using the app ID stored in the global variable.




@func_end


@func steam_activate_overlay_user
This function will open the Steam overlay to one of the chosen dialogues relating to the user ID given.
Note that Steam IDs can be large numbers and so you may need to cast your ID value as an [int64()](E:\Source\YoYoExtensionDocumentation\YoYoExtensionDocumentation_RoboHelp\contents\Variable_Functions\int64.htm) before supplying it to the function.


**Syntax:**

```gml
steam_activate_overlay_user(dialog_name, steamid);
```

@param {string} dialog_name The dialogue to open the overlay on (see below).
|steamid|int64|The Steam user ID or group ID to use.

|Dialog Names|Description
|----|----
|`"steamid"`|Opens the Steam Community web browser to the page of the user or group
|`"chat"`|Opens a chat window to the specified user




```gml
var key = keyboard_lastkey;
switch (key)
{
    case vk_f1: steam_activate_overlay_user("steamid", global.GameGroupID); break;
    case vk_f2: steam_activate_overlay_user("chat", global.FriendID); break;
}
```
The above code polls the last keyboard key pressed and if it is function key 1 or function key 2, it will open the Steam overlay to either see the Steam group stored in the global variable &quot;GamegroupID&quot;, or it will open the chat window to chat with the user stored in the global &quot;FriendID&quot; variable.




@func_end


@func steam_set_overlay_notification_inset
Sets the inset of the overlay notification from the corner specified by [steam_set_overlay_notification_position](#steam_set_overlay_notification_position)


**Syntax:**

```gml
steam_set_overlay_notification_inset(hor_inset, vert_inset);
```

@param {real} hor_inset The horizontal (left-right) distance in pixels from the corner.
@param {real} vert_inset The vertical (up-down) distance in pixels from the corner.


@returns {Bool}

```gml
steam_set_overlay_notification_inset(10, 10);
```
The code above will inset the over lay 10px on the horizontal axis and 10px in the vertical axis.



@func_end


@func steam_set_overlay_notification_position
Changes the corner in which the overlay notifications will appear.


|position|[OverlayNotificationPosition](#OverlayNotificationPosition)|A constant that indicates the position where the notification overlay should render




```gml
steam_set_overlay_notification_position(steam_overlay_notification_position_bottom_right);
```
The above code will change the notification position to the bottom right corner.



@func_end


@func OverlayType
These constants specify the type of overlay to be activated when using the function [steam_activate_overlay](#steam_activate_overlay).

|Overlay Type Constant|Description
|----|----
|`ov_friends`|The friends page for the current user
|`ov_community`|The community page for your game
|`ov_players`|The page showing others that are playing the same game or that you have recently played with
|`ov_settings`|The Steam client overlay settings
|`ov_gamegroup`|Opens the Steam Community web browser to the official game group for this game
|`ov_achievements`|The achievements page for your game


@func_end


@func OverlayNotificationPosition
These constants specify the position of the notification overlay onscreen an should be used with the function [steam_set_overlay_notification_position](#steam_set_overlay_notification_position).

|Overlay Notification Position Constant|Description
|----|----
|`steam_overlay_notification_position_top_left`|Point to the top left position
|`steam_overlay_notification_position_top_right`|Point to the top right position
|`steam_overlay_notification_position_bottom_left`|Point to the bottom left position
|`steam_overlay_notification_position_bottom_right`|Point to the bottom right position


@func_end