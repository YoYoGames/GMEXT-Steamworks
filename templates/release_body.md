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
