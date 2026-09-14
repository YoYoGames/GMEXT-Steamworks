@title Extension Options

# Extension Options

Open the Steamworks extension's options from the Asset Browser (double-click the extension, or right-click it and choose **Properties**) to configure it. See ${page.getting_started} for the full setup walkthrough.

## Build Options

| Option | Required | What it does |
|---|---|---|
| **Steam SDK** | Yes | The path to the folder where you extracted the Steamworks SDK (version 1.63). It may be relative to the project folder. The build step copies the Steam runtime library for the target platform from here, and fails the build if the SDK version does not match. |

## App Options

| Option | Required | Where to find it | What it does |
|---|---|---|---|
| **Application ID** | Yes | The [Steamworks dashboard](https://partner.steamgames.com/dashboard) | The app ID of your game. The extension initialises the Steamworks API with it before the first frame. The default, `480`, is Valve's test app (Spacewar) and works with any Steam account, so it is enough for trying the extension out. |
| **Debug** | Yes | - | `Auto` (the default) or `Enabled`. With `Enabled`, a `steam_appid.txt` file holding the app ID is written next to the executable, which lets a game that was not launched through Steam - one started from the IDE, or a build handed to a tester - use the API. With `Auto`, that file is removed and a game not launched through Steam is relaunched through it. |

[[Warning: Ship with **Debug** set to `Auto`. A build with `Enabled` runs outside Steam, so it does not enforce ownership of the game. The build step prints a warning while it is `Enabled`.]]

## Extra Options

| Option | Required | What it does |
|---|---|---|
| **Log Level** | No | How much the build step prints to the compiler output: `0` shows only errors, `1` (the default) shows errors and warnings, `2` shows everything. Use `2` to gather the output before submitting a bug. |

## Platform notes

The extension supports Windows, macOS and Linux. The same options apply to every platform; the build step picks the right library from the **Steam SDK** folder for the target. On macOS the build step also adds the Hardened Runtime entitlements Steam needs to a YYC build's Xcode project - see "Building for macOS" in ${page.getting_started}.
