@func General
The following set of functions are all for checking the availability of certain aspects of the Steam client or server API. This means that these functions should be used before any other Steam API function call to ensure that the client/server setup is correct and communicating with your game:

* [steam_initialised](#steam_initialised)
* [steam_stats_ready](#steam_stats_ready)
* [steam_get_app_id](#steam_get_app_id)
* [steam_get_user_account_id](#steam_get_user_account_id)
* [steam_get_user_steam_id](#steam_get_user_steam_id)
* [steam_get_persona_name](#steam_get_persona_name)
* [steam_get_user_persona_name](#steam_get_user_persona_name)
* [steam_is_user_logged_on](#steam_is_user_logged_on)
* [steam_current_game_language](#steam_current_game_language)
* [steam_available_languages](#steam_available_languages)
* [steam_is_subscribed](#steam_is_subscribed)
* [steam_set_warning_message_hook](#steam_set_warning_message_hook)


@func_end


@func steam_initialised
When using the Steam API, this function can be called to check that the Steam client API has been initialised correctly before any doing any further calls to Steam specific functions in your game.



@returns {Bool}

```gml
global.steam_api = false;
if (steam_initialised())
{
    if (steam_stats_ready() && steam_is_overlay_enabled())
    {
        global.steam_api = true;
    }
}
```
The above code will set a global variable to true if the Steam client API is correctly initialised, along with the Steam statistics and overlay functionality, or it will set the variable to false otherwise.



@func_end


@func steam_stats_ready
When using the Steam API, this function can be called to check that the Steam client API has correctly initialised the statistics for your game.



@returns {Bool}

```gml
global.steam_api = false;
if steam_initialised()
{
    if steam_stats_ready() && steam_is_overlay_enabled()
    {
        global.steam_api = true;
    }
}
```
The above code will set a global variable to true if the Steam client API is correctly initialised, along with the Steam statistics and overlay functionality, or it will set the variable to false otherwise.



@func_end


@func steam_get_app_id
This function is used retrieve the unique app ID that Steam assigns for your game, which is required for using some of the [User Generated Content](UGC#UGC) functions.



@returns {Real}

```gml
global.app_id = steam_get_app_id();
```
The above code gets the unique app ID for your game on Steam and stores it in a global variable.




@func_end


@func steam_get_user_account_id
This function is used retrieve the unique User ID that Steam assigns to each user, which is required for using some of the [User Generated Content](UGC#UGC) functions.



@returns {Real}

```gml
global.user_id = steam_get_user_account_id();
```
The above code gets the unique user ID for the person who owns the game and stores it in a global variable.




@func_end


@func steam_get_user_steam_id
You can use this function to return the unique Steam user id of the user currently logged into the Steam client. If you need to get the user&#39;s on screen user name you should refer to the function [steam_get_persona_name](#steam_get_persona_name).



**Returns:**

```gml
int64
```


```gml
if steam_initialised()
{
    global.u_id = steam_get_user_steam_id();
}
```
The above code will set a global variable to the current users unique Steam ID if the Steam client API is correctly initialised.



@func_end


@func steam_get_persona_name
You can use this function to return the user name of the user currently logged into the Steam client. This is the visible screen name and <i>not</i> the unique user id (this can be found using the function [steam_get_user_steam_id](#steam_get_user_steam_id)).



@returns {String}

```gml
if steam_initialised()
{
    global.p_name = steam_get_persona_name();
}
```
The above code will set a global variable to current users screen name if the Steam client API is correctly initialised.



@func_end


@func steam_get_user_persona_name
This function can be used to retrieve the user name (screen name) for any specific user ID. 
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


|steamID|int64|The unique Steam ID for a user.|


@returns {Real}

@event steam
|id|real|The asynchronous request ID|
|event_type|string|The string value `"user_persona_name"`|
|steamid|int64|The unique user id of the user currently logged into the Steam client|
|persona_name|string|The visible screen name of the user currently logged into the Steam client|


```gml
request = steam_get_user_persona_name(global.UGC_UserID);
```
The above code will request the user name of the user ID stored in the global variable &quot;UGC_UserID&quot;, storing the returned value in a variable for parsing in the Async Event.



@func_end


@func steam_is_user_logged_on
This function will return `true` if the Steam client currently has a live connection to the Steam servers. If it returns `false`, it means there is no active connection due to either a networking issue on the local machine, or the Steam server being down or busy.



@returns {Bool}

```gml
if (steam_is_user_logged_on())
{
    global.user_id = steam_get_user_account_id();
}
```
The above code will check to see if the user is logged onto the Steam server and if it stores the user ID in a global variable.



@func_end


@func steam_current_game_language
This function is used retrieve the current language that Steam is using (as a string), for example &quot;english&quot;.



@returns {String}

```gml
language = steam_current_game_language();
```
The above code gets the language used for the current game.




@func_end


@func steam_available_languages
This function can be used to retrieve a list of all available languages for Steam. The returned value is simply a comma-separated list of languages.



@returns {String}

```gml
language = steam_available_languages();
```
The above gets the available languages for Steam as a string and stores it in a variable.



@func_end


@func steam_is_subscribed
This function checks if the active user is subscribed to the current App ID.

> **:information_source: NOTE**
>
> This will always return `true` if you&#39;re using Steam DRM.



@returns {Bool}

```gml
if (steam_is_subscribed())
{
    show_debug_message("is_subscribed")
}
```
The above code will check to see if the user is logged onto the Steam server and if it stores the user ID in a global variable.


@func_end


@func steam_set_warning_message_hook
This function sets a warning message hook to receive SteamAPI warnings and info messages in the console.





```gml
steam_set_warning_message_hook();
```
The above code start Steamworks logging messages in console.


@func_end