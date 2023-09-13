@func Management

@func steam_init
This function initialises the steam APIs.

> **:information_source: NOTE**
>
> This function is already configured to be called at Game Start by the extension, and should not be called from your game code.





@func_end


@func steam_update
This function updates the steam APIs.

> **:warning: IMPORTANT**
>
> This function is required to be called in order for the Steamworks extension to work. We recommend you place this function in a persistent controller object that calls it inside its <span style="font-weight:bold;">Step Event.





```gml
steam_update();
```
The above code will update the steam APIs.


@func_end


@func steam_shutdown
This function shuts down the Steamworks API, releases pointers and frees memory.

> **:warning: IMPORTANT**
>
> This function is required to be called in order for the Steamworks extension to work. We recommend you place this function in the <span style="font-weight:bold;">GameEnd Event of a controller object. You need to check if this is not a `game_restart()`.





```gml
global.is_game_restarting = true;
game_restart();
```
The code above should be used when you want to restart your game. We set the `is_game_restarting` global variable to `true` announcing the game being restarted to true (this global variable should already be declared at the begining of your game and be set to `false` by default).
Now inside our [Game End Event](https://manual.yoyogames.com/The_Asset_Editors/Object_Properties/Other_Events.htm) we can use the following code.

```gml
if (global.is_game_restarting == false) {
    steam_shutdown();
}
global.is_game_restarting = false;
```
First we check if the game is not restarting and in that case we know we are actually ending so we call the `steam_shutdown` method.


@func_end