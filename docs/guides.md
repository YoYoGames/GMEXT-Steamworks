@title Setup Guide (IDE/Runtime 2022.6+)

To use the Steam API extension you should follow these steps:

1. Import this Steamworks extension into your project, if you haven't done that already.

2. The Steam app needs to be **installed**, **running** and with an account **logged in** ([official site](https://store.steampowered.com/)).

3. Download Steamworks SDK (1.55) from Steam's [partner site](https://partner.steamgames.com/dashboard) and extract the contents of the zip into a directory of your choice (e.g.: `C:\steamworks\sdk`).

![](assets/steamworks_setup_sdk.jpg)

4. To set up your AppID and environment status, double-click on the Steamworks extension in your Asset Browser in the IDE.

![](assets/steamworks_setup_asset_browser.jpg)

5. In the bottom section you will see the new extension options. Those are all you will need to configure to use this extension. The build options require the path to the SDK downloaded on step 3 and the application options required your Application ID.

![](assets/steamworks_setup_ext_options.png)

# Migration Changes

  During the migration of the Steamworks function library from the base GameMaker runner into this extension, there were some new functions that were added, and others that were slightly changed. This document covers the changes that happened during that migration.

## Changed Functions

  These are the functions that changed:

* [steam_create_leaderboard](leaderboards.md#steam_create_leaderboard)

> This function is now asynchronous, meaning it will return an Async request ID that should be used inside a [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) to check when the task is finished.

## New Functions

  These are the new functions that were added to the Steam extension:

* [steam_update](management.md#steam_update) :warning: REQUIRED
* [steam_is_subscribed](general.md#steam_is_subscribed)
* [steam_set_warning_message_hook](general.md#steam_set_warning_message_hook)
* [steam_upload_score_ext](leaderboards.md#steam_upload_score_ext)
* [steam_upload_score_buffer_ext](leaderboards.md#steam_upload_score_buffer_ext)
* [steam_ugc_delete_item](ugc.md#steam_ugc_delete_item)


<br><br>

---