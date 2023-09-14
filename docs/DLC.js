@func DLC
Steam supports both free and paid downloadable content (DLC), and in the Steam client, a game with downloadable content appears as a single application in the user&#39;s game list with the downloadable content viewable through the games properties dialog. Once owned, downloadable content is treated as an integral part of the game and Steam will automatically update the content when a patch is available and installs the content when the user installs the game.
Since this is all handled by the Steam servers and the configuration of any DLC is done through the Steamworks control panel, there are only a couple of functions necessary in GameMaker Studio 2 to check for this extra content:

* [steam_user_owns_dlc](#steam_user_owns_dlc)
* [steam_user_installed_dlc](#steam_user_installed_dlc)


@func_end


@func steam_user_owns_dlc
If your game has DLC created for it, you can use this function to check whether the user has bought it before accessing any files associated with it. The function will return `true` (`1`) if the player owns the content, `false` (`0`) if they don&#39;t own it *or* the given DLC ID is invalid, or `-1` if they&#39;re not logged into Steam.

> **:information_source: NOTE**
>
> Even if the user owns the DLC it doesn&#39;t mean that they have it installed in their local account, so you should additionally use the function [steam_user_installed_dlc](#steam_user_installed_dlc) to make sure that it is before using it.


|dlc_id|int64|The unique identifier for the DLC to be checked.


@returns {Integer}

```gml
global.Level_Max = 100;
if steam_user_owns_dlc(10354)
{
    if steam_user_installed_dlc(10354)
    {
        global.Level_max = 200;
    }
}
```
The above code will check to see if the user has bought, and installed, the DLC with the id 10354, and if so set a global variable to a different value.



@func_end


@func steam_user_installed_dlc
If your game has DLC created for it, you can use this function to check and see whether the user has installed it before accessing any files associated with it. The function returns true if the player has the content installed, and false if the user does not, but note that the user must also own the DLC, so you should use the additional function of [steam_user_owns_dlc](#steam_user_owns_dlc) to check that it is owned as well before using it.


|dlc_id|int64|The unique identifier for the DLC to be checked.


@returns {Bool}

```gml
global.Level_Max = 100;
if (steam_user_owns_dlc(10354))
{
    if (steam_user_installed_dlc(10354))
    {
        global.Level_max = 200;
    }
}
```
The above code will check to see if the user has bought, and installed, the DLC with the id 10354, and if so set a global variable to a different value.


@func_end