## IMPORTANT

- This extension is to be used with GameMaker **2026.0 LTS** or newer
- Requires Steamworks SDK version 1.65
- Works with **Windows**, **macOS** and **Ubuntu**.
- macOS (VM) is only supported when building from a macOS host; from a Windows host use YYC.
- **Version 3.0.0 is a breaking change**: the extension has been fully rewritten, with the native
  bindings generated from a single GMIDL spec and the API organised by Steamworks interface (Apps,
  Friends, Matchmaking, Remote Storage, User Stats, ...). Function names and signatures differ from
  2.x, and results are delivered to a GML callback function instead of the Steam Async Event, so
  moving an existing project across is a migration rather than a drop-in upgrade. Projects that need
  the old API should stay on the final 2.2.2 release. Check the documentation for the current API.
- When running from the IDE, set the extension's **Debug** option to `Enabled`. On `Auto`, an IDE run can restart through Steam and exit.

## FIXES IN 3.0.1

- **Behaviour change: Cloud writes without a count** (`steam_remote_storage_file_write`, `_file_write_async`, `_file_write_stream_write_chunk`) write the bytes written to the buffer past the offset (its `buffer_tell` position), not its whole allocated size. If the position isn't past the offset, as for a buffer from `buffer_load`, the whole buffer from the offset is written as before. Reading from a buffer moves its position too, so pass the count if you have read from it.
- **Async callbacks always arrive.** Every function that takes a callback now calls it, also when the call can't go ahead:
  - with `SteamApiResult.Fail` if Steam isn't initialised, Steam won't dispatch the call, or an argument is rejected;
  - with `SteamApiResult.IoFailure` if Steam can't deliver the result.

  Before, these cases returned without a callback, so a game waiting on it waited forever. A result that's a success flag gets `false`. The one exception is `steam_utils_check_file_signature`, whose result has no failure value.
- **Received network messages are no longer lost.** Networking Sockets and Networking Messages receives keep any message that doesn't fit the buffer and return it first next time, instead of releasing it.
  - A message bigger than the whole buffer sets `steam_api_last_error()` with the size needed.
  - In a poll group, one connection's oversized message doesn't hold up the others.
- **Callback payloads have a `result`.** 11 payloads that had no `result` field now have one.
  - A refused lobby join calls back with `Fail`.
  - Results of UGC calls with an invalid handle report `Fail`.
- **Other fixes:**
  - `steam_utils_is_api_call_completed` returns whether the call has completed. It used to return the SDK's failed flag.
  - A connection status callback set before Steam is initialised is registered once it is. Connection status callbacks need `steam_networking_sockets_run_callbacks()` each step.
  - `steam_remote_storage_file_read` sets `steam_api_last_error()` when it returns 0 for an empty buffer, a missing file or a failed read.
  - An empty **App ID** option now says why Steam isn't initialised.
- **Added and restored:**
  - `steam_networking_messages_receive_message_on_channel` receives one message at a time into your buffer, with no allocation per call.
  - `steam_input_set_dualsense_trigger_effect` is implemented.
- **Platform files:**
  - macOS and Linux games can load the extension. 3.0.0 didn't list `libSteamworks.dylib` and `libSteamworks.so` as the extension's files for those platforms, so they weren't found.
  - Games built with GMRT include the Steam API library. 3.0.0 copied it into a folder current GMRT builds don't have, so the game shipped without it.
- **Demo:** it no longer calls functions that don't exist.

## CHANGES SINCE ${releaseOldVersion}

https://github.com/YoYoGames/GMEXT-Steamworks/compare/${releaseOldVersion}...${releaseNewVersion}

## DESCRIPTION

Steamworks is a set of tools and services that help game developers and publishers build their games and get the most out of distributing on Steam.

## FEATURES

- Steam API (initialisation, callbacks, shutdown)
- Apps (ownership, DLC, betas, languages)
- Friends and Overlay
- Input
- Inventory
- Matchmaking and Lobbies
- Music
- Networking, Networking Messages and Networking Sockets
- Parties
- Remote Storage (Cloud)
- Screenshots
- Timeline
- UGC (Workshop)
- User (authentication tickets)
- User Stats (stats, achievements and leaderboards)
- Utilities

## DOCUMENTATION

The full documentation of the API is included in the extension asset (included files).
