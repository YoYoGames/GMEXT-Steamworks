/**
 * @module home
 * @title Home
 * @desc This extension wraps the [Steamworks API](https://partner.steamgames.com/doc/api) for games published on Steam. To use it your game must have been accepted onto Steam, either through a publisher or through the self-publishing system, and you need its app ID from the [Steamworks dashboard](https://partner.steamgames.com/dashboard).
 *
 * The API is initialised for you before the first frame and shut down when the game ends. The one thing every game must do is call ${function.steam_api_run_callbacks} every frame, since no callback fires until it is called. See ${page.getting_started}.
 *
 * @section Guides
 * @desc These are the guides for the Steamworks extension:
 * @ref page.getting_started
 * @ref page.extension_options
 * @section_end
 *
 * @section Management
 * @desc These are the functions that control the lifetime of the API:
 *
 *  * ${function.steam_api_run_callbacks} - required, once per frame
 *  * ${function.steam_api_is_initialized}
 *  * ${function.steam_api_last_error}
 *  * ${function.steam_api_init} - automatic; only for a manual retry
 *  * ${function.steam_api_shutdown} - automatic
 * @section_end
 * 
 * @section Modules
 * @desc The functions of the Steam API are split into the following modules, one per Steamworks interface:
 * @ref module.api
 * @ref module.friends
 * @ref module.apps
 * @ref module.screenshots
 * @ref module.user
 * @ref module.utils
 * @ref module.ugc
 * @ref module.input
 * @ref module.userstats
 * @ref module.music
 * @ref module.timeline
 * @ref module.inventory
 * @ref module.remote_storage
 * @ref module.matchmaking
 * @ref module.networking
 * @ref module.parties
 * @section_end
 * 
 * @module_end
 */
