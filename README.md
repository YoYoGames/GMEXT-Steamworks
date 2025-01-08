# GMEXT-Steamworks
Repository for GameMaker's Steamworks Extension

This repository was created with the intent of presenting users with the latest version available of the extension (even previous to marketplace updates) and also provide a way for the community to contribute with bug fixes and feature implementation.

This extension will work on Windows, macOS and Linux.

SOURCE CODE: `source/steamworks_gml/extensions/steamworks/steamworks_cpp/`

VISUAL STUDIO PROJECT: `source/steamworks_gml/extensions/steamworks/steamworks_windows/`

XCODE PROJECT: `source/steamworks_gml/extensions/steamworks/Steamworks_macos/`

LINUX BUILD SCRIPTS: `source/steamworks_gml/extensions/steamworks/steamworks_linux/`

After compilation the exported dll/dylib/so file is automatically copied into the extension folder inside the included GameMaker project folder.

## Requirements

In order to compile for Windows/macOS/Linux you are required to [download the Steam SDK v1.61](https://partner.steamgames.com/dashboard) and place it inside `source/Steamworks_sdk/`

> [!IMPORTANT]
> Version 2.1.X requires Steamworks SDK version v1.61 and won't work correctly with previous versions of the SDK. If for any reason you need to keep using a previous SDK version please refrain from updating to the v2.1.X version.
>
> * `steam_user_get_auth_session_ticket` can no longer be used for HTTP Web API purposes, this is now only for Game Server authentication (NOT HTTP, this is related to Steam Networking).
> * `steam_user_get_auth_ticket_for_web_api` must now be used for HTTP Web API, along with the identity parameter (not required but heavily recommended by Valve)

## Documentation

* Check [the documentation](../../wiki)

The online documentation is regularly updated to ensure it contains the most current information. For those who prefer a different format, we also offer a HTML version. This HTML is directly converted from the GitHub Wiki content, ensuring consistency, although it may follow slightly behind in updates.

We encourage users to refer primarily to the GitHub Wiki for the latest information and updates. The HTML version, included with the extension and within the demo project's data files, serves as a secondary, static reference.

Additionally, if you're contributing new features through PR (Pull Requests), we kindly ask that you also provide accompanying documentation for these features, to maintain the comprehensiveness and usefulness of our resources.

