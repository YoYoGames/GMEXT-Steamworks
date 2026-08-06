
// FUNCTIONS

/**
 * @function steam_api_last_error
 * @description > **Steamworks Function**: N / A
 *
 * This function returns a string containing the last error that occurred.
 *
 * @returns {String}
 * @function_end
 */

/**
 * @function steam_api_is_initialized
 * @description > **Steamworks Function**: N / A
 *
 * This function returns whether the Steam API is currently initialised or not.
 *
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_api_init
 * @description > **Steamworks Function**: [SteamAPI_Init](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_Init)
 *
 * This function initialises the Steamworks API and returns if this was successful or not.
 *
 * @param {Real} own_app_id The app ID.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_api_release_current_thread_memory
 * @description > **Steamworks Function**: [SteamAPI_ReleaseCurrentThreadMemory](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_ReleaseCurrentThreadMemory)
 *
 * This function frees the internal Steamworks API memory associated with the calling thread.
 * 
 * Most Steamworks API functions allocate a small amount of thread-local memory for parameter storage, calling this will manually free such memory. This function is called automatically by ${function.steam_api_run_callbacks}, so a program that only ever accesses the Steamworks API from a single thread never needs to explicitly call this function.
 *
 * @function_end
 */

/**
 * @function steam_api_restart_app_if_necessary
 * @description > **Steamworks Function**: [SteamAPI_RestartAppIfNecessary](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_RestartAppIfNecessary)
 *
 * This function checks if your executable was launched through Steam and relaunches it through Steam if it wasn't.
 * 
 * See [Initialization and Shutdown](https://partner.steamgames.com/doc/sdk/api#initialization_and_shutdown) for additional information.
 *
 * @param {Real} own_app_id The app ID.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_api_run_callbacks
 * @description > **Steamworks Function**: [SteamAPI_RunCallbacks](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_RunCallbacks)
 *
 * This function dispatches callbacks and call results to all of the registered listeners.
 * 
 * It's best to call this at >10Hz, the more time between calls, the more potential latency between receiving events or results from the Steamworks API. Most games call this once per render-frame. All registered listener functions will be invoked during this call, in the caller's thread context.
 * 
 * [[Warning: This function is required to be called in order for the Steamworks extension to work. Certain callbacks are only triggered when you call this function. We recommend you place this function in a persistent controller object that calls it inside its ${event.step}.]]
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t)
 * 
 * Called when a connection to the Steam back-end has been established.
 * This means the Steam client now has a working connection to the Steam servers. Usually this will have occurred before the game has launched, and should only be seen if the user has dropped connection due to a networking issue or a Steam server update.
 * 
 * This callback has no fields.
 * 
 * @event_end
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::SteamServersDisconnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersDisconnected_t)
 * 
 * Called if the client has lost connection to the Steam servers.
 * 
 * Real-time services will be disabled until a matching [SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t) has been posted.
 * 
 * @member {Enum.SteamApiResult} result The reason we were disconnected from Steam.
 * @event_end
 *
 * @function_end
 */

/**
 * @function steam_api_shutdown
 * @description > **Steamworks Function**: [SteamAPI_Shutdown](https://partner.steamgames.com/doc/api/steam_api#SteamAPI_Shutdown)
 *
 * This function shuts down the Steamworks API, releases pointers and frees memory.
 * 
 * You should call this during process shutdown if possible.
 * 
 * This will not unhook the [Steam overlay](https://partner.steamgames.com/doc/features/overlay) from your game as there's no guarantee that your rendering API is done using it.
 * 
 * [[Warning: This function is required to be called in order for the Steamworks extension to work. We recommend you place this function in the ${event.game_end} of a controller object. You need to check if this is not a ${function.game_restart}.]]
 *
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamId
 * @description > **Steamworks Struct**: [steam_api::CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID)
 *
 * This struct holds details about the globally unique identifier for all Steam accounts, Steam groups, Lobbies and Chat rooms.
 *
 * @member {Real} id64 Unique ID.
 * @member {Real} account_id The account ID.
 * @member {Real} account_instance The account instance.
 * @member {Enum.SteamApiUniverse} universe The universe, or self-contained Steam instance, this account belongs to.
 * @member {Enum.SteamApiAccountType} account_type The type of account.
 * @member {Bool} is_valid Whether this Steam ID is valid.
 * @member {Bool} is_lobby Whether this Steam ID is a lobby.
 * @member {Bool} is_individual Whether this is an individual user account ID.
 * @member {Bool} is_game_server Whether this is a persistent (not anonymous) game server account ID.
 * @member {Bool} is_anon_game_server Whether this is an anonymous game server account.
 * @member {Bool} is_anon_user Whether this is an anonymous user account.
 * @member {Bool} is_content_server Whether this is a content server account ID.
 * @member {Bool} is_clan Whether this is a clan account ID.
 * @member {Bool} is_chat Whether this is a chat account ID.
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamApiAccountType
 * @description > **Steamworks Enum**: [EAccountType](https://partner.steamgames.com/doc/api/steam_api#EAccountType)
 *
 * This enum holds the different Steam account types.
 *
 * @member Invalid Used for invalid Steam IDs.
 * @member Individual Regular user account.
 * @member Multiseat Multiseat (e.g. cybercafe) account.
 * @member GameServer Persistent (not anonymous) game server account.
 * @member AnonGameServer Anonymous game server account.
 * @member Pending Pending.
 * @member ContentServer Valve internal content server account.
 * @member Clan Steam Group (clan).
 * @member Chat Steam group chat or lobby.
 * @member ConsoleUser Fake Steam ID for local PSN account on PS3 or Live account on 360, etc.
 * @member AnonUser Anonymous user account. (Used to create an account or reset a password)
 * @enum_end 
 */

/**
 * @enum SteamApiDenyReason
 * @description > **Steamworks Enum**: [EDenyReason](https://partner.steamgames.com/doc/api/steam_api#EDenyReason)
 *
 * This enum holds the result values when a client failed to join or has been kicked from a game server.
 *
 * @member Invalid Unknown.
 * @member InvalidVersion The client and server are not the same version.
 * @member Generic Generic.
 * @member NotLoggedOn The client is not logged on.
 * @member NoLicense The client does not have a license to play this game.
 * @member Cheater The client is VAC banned.
 * @member LoggedInElsewhere The client is logged in elsewhere.
 * @member UnknownText UnknownText.
 * @member IncompatibleAnticheat IncompatibleAnticheat.
 * @member MemoryCorruption MemoryCorruption.
 * @member IncompatibleSoftware IncompatibleSoftware.
 * @member SteamConnectionLost The server lost connection to Steam.
 * @member SteamConnectionError The server had a general error connecting to Steam.
 * @member SteamResponseTimedOut The server timed out connecting to Steam.
 * @member SteamValidationStalled The client has not authed with Steam yet.
 * @member SteamOwnerLeftGuestUser The owner of the shared game has left, called for each guest of the owner.
 * @enum_end 
 */

/**
 * @enum SteamApiGameIdType
 * @description > **Steamworks Enum**: [EGameIDType](https://partner.steamgames.com/doc/api/steam_api#EGameIDType)
 *
 * This enum holds the different types of game ID.
 *
 * @member App The Game ID is a regular Steam app.
 * @member GameMod The Game ID is a mod.
 * @member Shortcut The game ID is a shortcut.
 * @member P2p The game ID is a P2P file.
 * @enum_end 
 */

/**
 * @enum SteamApiLaunchOptionType
 * @description > **Steamworks Enum**: [ELaunchOptionType](https://partner.steamgames.com/doc/api/steam_api#ELaunchOptionType)
 *
 * This enum contains codes for well defined launch options, corresponds to "Launch Type" in the application's Launch Options which can be found on the [General Installation Settings](https://partner.steamgames.com/apps/config/) page.
 *
 * @member None Unspecified.
 * @member Default Runs the app in default mode.
 * @member SafeMode Runs the game in safe mode.
 * @member Multiplayer Runs the game in multiplayer mode.
 * @member Config Runs config tool for this game.
 * @member Openvr Runs game in VR mode using OpenVR.
 * @member Server Runs dedicated server for this game.
 * @member Editor Runs game editor.
 * @member Manual Shows game manual.
 * @member Benchmark Runs game benchmark.
 * @member Option1 Generic run option, uses description field for game name.
 * @member Option2 Generic run option, uses description field for game name.
 * @member Option3 Generic run option, uses description field for game name.
 * @member OculusVr Runs game in VR mode using the Oculus SDK.
 * @member OpenvrOverlay Runs an OpenVR dashboard overlay.
 * @member Osvr Runs game in VR mode using the OSVR SDK.
 * @member Dialog Show launch options dialog.
 * @enum_end 
 */

/**
 * @enum SteamApiMarketingMessageFlag
 * @description > **Steamworks Enum**: [EMarketingMessageFlags](https://partner.steamgames.com/doc/api/steam_api#EMarketingMessageFlags)
 *
 * This enum holds internal Steam marketing message flags that change how a client should handle them.
 *
 * @member None None.
 * @member HighPriority High priority.
 * @member PlatformWindows Windows.
 * @member PlatformMac Mac.
 * @member PlatformLinux Linux.
 * @member PlatformRestrictions Aggregate flags.
 * @enum_end 
 */

/**
 * @enum SteamApiNotificationPosition
 * @description > **Steamworks Enum**: [ENotificationPosition](https://partner.steamgames.com/doc/api/steam_api#ENotificationPosition)
 *
 * This enum holds the possible positions to have the overlay show notifications in.
 *
 * @member TopLeft Top-left corner.
 * @member TopRight Top-right corner.
 * @member BottomLeft Bottom-left corner.
 * @member BottomRight Bottom-right corner.
 * @enum_end 
 */

/**
 * @enum SteamApiUniverse
 * @description > **Steamworks Enum**: [EUniverse](https://partner.steamgames.com/doc/api/steam_api#EUniverse)
 *
 * This enum holds the different Steam universes. Each universe is a self-contained Steam instance.
 *
 * @member Invalid Invalid.
 * @member Public The standard public universe.
 * @member Beta Beta universe used inside Valve.
 * @member Internal Internal universe used inside Valve.
 * @member Dev Dev universe used inside Valve.
 * @member Max Max value.
 * @enum_end 
 */

/**
 * @enum SteamApiUserHasLicenseForAppResult
 * @description > **Steamworks Enum**: [EUserHasLicenseForAppResult](partner.steamgames.com/doc/api/steam_api#EUserHasLicenseForAppResult)
 *
 * This enum holds the possible results of ${function.steam_user_user_has_license_for_app}.
 *
 * @member HasLicense The user has a license for specified app.
 * @member DoesNotHaveLicense The user does not have a license for the specified app.
 * @member NoAuth The user has not been authenticated.
 * @enum_end 
 */

/**
 * @enum SteamApiVoiceResult
 * @description > **Steamworks Enum**: [EVoiceResult](https://partner.steamgames.com/doc/api/steam_api#EVoiceResult)
 *
 * This enum holds the possible results for use with the [Steam Voice](https://partner.steamgames.com/doc/features/voice) functions.
 *
 * @member Ok The call has completed successfully.
 * @member NotInitialized The Steam Voice interface has not been initialized.
 * @member NotRecording Steam Voice is not currently recording.
 * @member NoData There is no voice data available.
 * @member BufferTooSmall The provided buffer is too small to receive the data.
 * @member DataCorrupted The voice data has been corrupted.
 * @member Restricted The user is chat restricted.
 * @member UnsupportedCodec Deprecated.
 * @member ReceiverOutOfDate Deprecated.
 * @member ReceiverDidNotAnswer Deprecated.
 * @enum_end 
 */

/**
 * @enum SteamApiResult
 * @description > **Steamworks Enum**: [EResult](partner.steamgames.com/doc/api/steam_api#EResult)
 *
 * This enum holds the possible Steam error result codes.
 *
 * @member Ok Success.
 * @member Fail Generic failure.
 * @member NoConnection Your Steam client doesn't have a connection to the back-end.
 * @member InvalidPassword Password/ticket is invalid.
 * @member LoggedInElsewhere The user is logged in elsewhere.
 * @member InvalidProtocolVer Protocol version is incorrect.
 * @member InvalidParam A parameter is incorrect.
 * @member FileNotFound File was not found.
 * @member Busy Called method is busy - action not taken.
 * @member InvalidState Called object was in an invalid state.
 * @member InvalidName The name was invalid.
 * @member InvalidEmail The email was invalid.
 * @member DuplicateName The name is not unique.
 * @member AccessDenied Access is denied.
 * @member Timeout Operation timed out.
 * @member Banned The user is VAC2 banned.
 * @member AccountNotFound Account not found.
 * @member InvalidSteamId The Steam ID was invalid.
 * @member ServiceUnavailable The requested service is currently unavailable.
 * @member NotLoggedOn The user is not logged on.
 * @member Pending Request is pending, it may be in process or waiting on third party.
 * @member EncryptionFailure Encryption or Decryption failed.
 * @member InsufficientPrivilege Insufficient privilege.
 * @member LimitExceeded Too much of a good thing.
 * @member Revoked Access has been revoked (used for revoked guest passes.)
 * @member Expired License/Guest pass the user is trying to access is expired.
 * @member AlreadyRedeemed Guest pass has already been redeemed by account, cannot be used again.
 * @member DuplicateRequest The request is a duplicate and the action has already occurred in the past, ignored this time.
 * @member AlreadyOwned All the games in this guest pass redemption request are already owned by the user.
 * @member IpNotFound IP address not found.
 * @member PersistFailed Failed to write change to the data store.
 * @member LockingFailed Failed to acquire access lock for this operation.
 * @member LogonSessionReplaced The logon session has been replaced.
 * @member ConnectFailed Failed to connect.
 * @member HandshakeFailed The authentication handshake has failed.
 * @member IoFailure There has been a generic IO failure.
 * @member RemoteDisconnect The remote server has disconnected.
 * @member ShoppingCartNotFound Failed to find the shopping cart requested.
 * @member Blocked A user blocked the action.
 * @member Ignored The target is ignoring sender.
 * @member NoMatch Nothing matching the request found.
 * @member AccountDisabled The account is disabled.
 * @member ServiceReadOnly This service is not accepting content changes right now.
 * @member AccountNotFeatured Account doesn't have value, so this feature isn't available.
 * @member AdministratorOK Allowed to take this action, but only because requester is admin.
 * @member ContentVersion A Version mismatch in content transmitted within the Steam protocol.
 * @member TryAnotherCM The current CM can't service the user making a request, user should try another.
 * @member PasswordRequiredToKickSession You are already logged in elsewhere, this cached credential login has failed.
 * @member AlreadyLoggedInElsewhere The user is logged in elsewhere. (Use `SteamApiResult.LoggedInElsewhere` instead!)
 * @member Suspended Long running operation has suspended/paused. (e.g. content download.)
 * @member Cancelled Operation has been canceled, typically by user. (e.g. a content download.)
 * @member DataCorruption Operation canceled because data is ill formed or unrecoverable.
 * @member DiskFull Operation canceled - not enough disk space.
 * @member RemoteCallFailed The remote or IPC call has failed.
 * @member PasswordUnset Password could not be verified as it's unset server side.
 * @member ExternalAccountUnlinked External account (PSN, Facebook...) is not linked to a Steam account.
 * @member PSNTicketInvalid PSN ticket was invalid.
 * @member ExternalAccountAlreadyLinked External account (PSN, Facebook...) is already linked to some other account, must explicitly request to replace/delete the link first.
 * @member RemoteFileConflict The sync cannot resume due to a conflict between the local and remote files.
 * @member IllegalPassword The requested new password is not allowed.
 * @member SameAsPreviousValue New value is the same as the old one. This is used for secret question and answer.
 * @member AccountLogonDenied Account login denied due to 2nd factor authentication failure.
 * @member CannotUseOldPassword The requested new password is not legal.
 * @member InvalidLoginAuthCode Account login denied due to auth code invalid.
 * @member AccountLogonDeniedNoMail Account login denied due to 2nd factor auth failure - and no mail has been sent.
 * @member HardwareNotCapableOfIPT The user's hardware does not support Intel's Identity Protection Technology (IPT).
 * @member IPTInitError Intel's Identity Protection Technology (IPT) has failed to initialize.
 * @member ParentalControlRestricted Operation failed due to parental control restrictions for current user.
 * @member FacebookQueryError Facebook query returned an error.
 * @member ExpiredLoginAuthCode Account login denied due to an expired auth code.
 * @member IPLoginRestrictionFailed The login failed due to an IP restriction.
 * @member AccountLockedDown The current user's account is currently locked for use. This is likely due to a hijacking and pending ownership verification.
 * @member AccountLogonDeniedVerifiedEmailRequired The logon failed because the account's email is not verified.
 * @member NoMatchingURL There is no URL matching the provided values.
 * @member BadResponse Bad Response due to a Parse failure, missing field, etc.
 * @member RequirePasswordReEntry The user cannot complete the action until they re-enter their password.
 * @member ValueOutOfRange The value entered is outside the acceptable range.
 * @member UnexpectedError Something happened that we didn't expect to ever happen.
 * @member Disabled The requested service has been configured to be unavailable.
 * @member InvalidCEGSubmission The files submitted to the CEG server are not valid.
 * @member RestrictedDevice The device being used is not allowed to perform this action.
 * @member RegionLocked The action could not be complete because it is region restricted.
 * @member RateLimitExceeded Temporary rate limit exceeded, try again later, different from `SteamApiResult.LimitExceeded` which may be permanent.
 * @member AccountLoginDeniedNeedTwoFactor Need two-factor code to login.
 * @member ItemDeleted The thing we're trying to access has been deleted.
 * @member AccountLoginDeniedThrottle Login attempt failed, try to throttle response to possible attacker.
 * @member TwoFactorCodeMismatch Two factor authentication (Steam Guard) code is incorrect.
 * @member TwoFactorActivationCodeMismatch The activation code for two-factor authentication (Steam Guard) didn't match.
 * @member AccountAssociatedToMultiplePartners The current account has been associated with multiple partners.
 * @member NotModified The data has not been modified.
 * @member NoMobileDevice The account does not have a mobile device associated with it.
 * @member TimeNotSynced The time presented is out of range or tolerance.
 * @member SmsCodeFailed SMS code failure - no match, none pending, etc.
 * @member AccountLimitExceeded Too many accounts access this resource.
 * @member AccountActivityLimitExceeded Too many changes to this account.
 * @member PhoneActivityLimitExceeded Too many changes to this phone.
 * @member RefundToWallet Cannot refund to payment method, must use wallet.
 * @member EmailSendFailure Cannot send an email.
 * @member NotSettled Can't perform operation until payment has settled.
 * @member NeedCaptcha The user needs to provide a valid captcha.
 * @member GSLTDenied A game server login token owned by this token's owner has been banned.
 * @member GSOwnerDenied Game server owner is denied for some other reason such as account locked, community ban, vac ban, missing phone, etc.
 * @member InvalidItemType The type of thing we were requested to act on is invalid.
 * @member IPBanned The IP address has been banned from taking this action.
 * @member GSLTExpired This Game Server Login Token (GSLT) has expired from disuse; it can be reset for use.
 * @member InsufficientFunds User doesn't have enough wallet funds to complete the action.
 * @member TooManyPending There are too many of this thing pending already
 * @member NoSiteLicensesFound NoSiteLicensesFound.
 * @member WGNetworkSendExceeded WGNetworkSendExceeded.
 * @member AccountNotFriends AccountNotFriends.
 * @member LimitedUserAccount LimitedUserAccount.
 * @member CantRemoveItem CantRemoveItem.
 * @member AccountDeleted AccountDeleted.
 * @member ExistingUserCancelledLicense ExistingUserCancelledLicense.
 * @member CommunityCooldown CommunityCooldown.
 * @member NoLauncherSpecified NoLauncherSpecified.
 * @member MustAgreeToSSA MustAgreeToSSA.
 * @member LauncherMigrated LauncherMigrated.
 * @member SteamRealmMismatch SteamRealmMismatch.
 * @member InvalidSignature InvalidSignature.
 * @member ParseFailure ParseFailure.
 * @member NoVerifiedPhone NoVerifiedPhone.
 * @member InsufficientBattery InsufficientBattery.
 * @member ChargerRequired ChargerRequired.
 * @member CachedCredentialInvalid CachedCredentialInvalid.
 * @member PhoneNumberIsVOIP PhoneNumberIsVOIP.
 * @member NotSupported NotSupported.
 * @member FamilySizeLimitExceeded FamilySizeLimitExceeded.
 * @member OfflineAppCacheInvalid OfflineAppCacheInvalid.
 * @member TryLater TryLater.
 * @enum_end
 */

/**
 * @enum SteamAuthSessionResponse
 * @description > **Steamworks Enum**: [EAuthSessionResponse](https://partner.steamgames.com/doc/api/steam_api#EAuthSessionResponse)
 * 
 * This enum holds callback return values for the [ISteamUser::ValidateAuthTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#ValidateAuthTicketResponse_t) callback which is posted as a response to ${function.steam_user_begin_auth_session} and [ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession).
 * 
 * @member OK Steam has verified the user is online, the ticket is valid and ticket has not been reused.
 * @member UserNotConnectedToSteam The user in question is not connected to Steam.
 * @member NoLicenseOrExpired The user doesn't have a license for this App ID or the ticket has expired.
 * @member VACBanned The user is VAC banned for this game.
 * @member LoggedInElseWhere The user account has logged in elsewhere and the session containing the game instance has been disconnected.
 * @member VACCheckTimedOut VAC has been unable to perform anti-cheat checks on this user.
 * @member AuthTicketCanceled The ticket has been canceled by the issuer.
 * @member AuthTicketInvalidAlreadyUsed This ticket has already been used, it is not valid.
 * @member AuthTicketInvalid This ticket is not from a user instance currently connected to Steam.
 * @member PublisherIssuedBan The user is banned for this game. The ban came via the web api and not VAC.
 * @member AuthTicketNetworkIdentityFailure The network identity in the ticket does not match the server authenticating the ticket.
 * @enum_end 
 */

/**
 * @enum SteamMarketNotAllowedReasonFlags
 * @description > **Steamworks Enum**: [EMarketNotAllowedReasonFlags]()
 * 
 * This enum holds reasons a user may not use the Community Market.
 * 
 * @member None None.
 * @member TemporaryFailure Temporary failure.
 * @member AccountDisabled Disabled account.
 * @member AccountLockedDown Locked account.
 * @member AccountLimited Limited account (no purchases).
 * @member TradeBanned The account is banned from trading items.
 * @member AccountNotTrusted Wallet funds aren't tradable because the user has had no purchase activity in the last year or has had no purchases prior to last month.
 * @member SteamGuardNotEnabled The user doesn't have Steam Guard enabled.
 * @member SteamGuardOnlyRecentlyEnabled The user has Steam Guard, but it hasn't been enabled for the required number of days.
 * @member RecentPasswordReset The user has recently forgotten their password and reset it.
 * @member NewPaymentMethod The user has recently funded his or her wallet with a new payment method.
 * @member InvalidCookie An invalid cookie was sent by the user.
 * @member UsingNewDevice The user has Steam Guard, but is using a new computer or web browser.
 * @member RecentSelfRefund The user has recently refunded a store purchase by his or herself.
 * @member NewPaymentMethodCannotBeVerified The user has recently funded his or her wallet with a new payment method that cannot be verified.
 * @member NoRecentPurchases Not only is the account not trusted, but they have no recent purchases at all.
 * @member AcceptedWalletGift User accepted a wallet gift that was recently purchased.
 * @member TradeCooldown User did something that triggered a trade cooldown (like reversing trades).
 * @enum_end
 */

/**
 * @const macros
 * @member STEAM_API_BREAKPAD_INVALID_HANDLE (value: '0') Breakpad invalid handle.
 * @member STEAM_API_GAME_EXTRA_INFO_MAX (value: '64') The maximum size (in UTF-8 bytes, including the null terminator) of the `extra_info` parameter of ${function.steam_user_track_app_usage_event}.
 * @member STEAM_API_SALT_SIZE (value: '8') Only used internally in Steam.
 * @member STEAM_API_GID_NIL (value: '-1') Only used internally in Steam.
 * @member STEAM_API_AUTH_TICKET_INVALID (value: '0') An invalid user authentication ticket.
 * @member STEAM_API_JOB_ID_NIL (value: '-1') Only used internally in Steam.
 * @member STEAM_API_TXN_ID_NIL (value: '-1') Only used internally in Steam.
 * @member STEAM_API_TXN_ID_UNKNOWN (value: '0') Only used internally in Steam.
 * @member STEAM_API_API_CALL_INVALID (value: '0x0') An Invalid Steam API Call handle.
 * @member STEAM_API_APP_ID_INVALID (value: '0x0') An Invalid App ID.
 * @member STEAM_API_BUNDLE_ID_INVALID (value: '0') Only used internally in Steam.
 * @member STEAM_API_CELL_ID_INVALID (value: '0xFFFFFFFF') Only used internally in Steam.
 * @member STEAM_API_DEPOT_ID_INVALID (value: '0x0') An Invalid Depot ID.
 * @member STEAM_API_ASSET_CLASS_ID_INVALID (value: '0x0') Only used internally in Steam.
 * @member STEAM_API_MANIFEST_ID_INVALID (value: '0') Only used internally in Steam.
 * @member STEAM_API_STEAM_ACCOUNT_ID_MASK (value: '0xFFFFFFFF') Used in [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to mask out the [AccountID_t](https://partner.steamgames.com/doc/api/steam_api#AccountID_t).
 * @member STEAM_API_STEAM_ACCOUNT_INSTANCE_MASK (value: '0x000FFFFF') Used in [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to mask out the account instance.
 * @member STEAM_API_STEAM_USER_CONSOLE_INSTANCE (value: '2') Used by [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to identify users logged in from a console.
 * @member STEAM_API_STEAM_USER_DESKTOP_INSTANCE (value: '1') Used by [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to identify users logged in from the desktop client.
 * @member STEAM_API_STEAM_USER_WEB_INSTANCE (value: '4') Used by [CSteamID](https://partner.steamgames.com/doc/api/steam_api#CSteamID) to identify users logged in from the web.
 * @member STEAM_API_PACKAGE_ID_FREE_SUB (value: '0x0') Only used internally in Steam.
 * @member STEAM_API_PACKAGE_ID_INVALID (value: '0xFFFFFFFF') Only used internally in Steam.
 * @member STEAM_API_PARTNER_ID_INVALID (value: '0') Only used internally in Steam.
 * @member STEAM_API_PHYSICAL_ITEM_ID_INVALID (value: '0x0') Only used internally in Steam.
 * @member STEAM_API_QUERY_PORT_ERROR (value: '0xFFFE') We were unable to get the query port for this server.
 * @member STEAM_API_QUERY_PORT_NOT_INITIALIZED (value: '0xFFFF') We haven't asked the GS for this query port's actual value yet.
 * @member STEAM_FRIENDS_MAX_FRIENDS_GROUP_NAME (value: '64') The maximum length that a friends group name can be (not including the null-terminator!)
 * @member STEAM_FRIENDS_MAX_RICH_PRESENCE_KEY_LENGTH (value: '64') The maximum length that a rich presence key can be.
 * @member STEAM_FRIENDS_MAX_RICH_PRESENCE_KEYS (value: '20')The maximum amount of rich presence keys that can be set.
 * @member STEAM_FRIENDS_MAX_RICH_PRESENCE_VALUE_LENGTH (value: '256') The maximum length that a rich presence value can be.
 * @member STEAM_FRIENDS_PERSONA_NAME_MAX (value: '128') Maximum number of UTF-8 bytes in a users persona (display) name.
 * @member STEAM_FRIENDS_ENUMERATE_FOLLOWERS_MAX (value: '50') The maximum number of followers that will be returned in a [FriendsEnumerateFollowingList_t](https://partner.steamgames.com/doc/api/ISteamFriends#FriendsEnumerateFollowingList_t) call result at once.
 * @member STEAM_FRIENDS_FRIENDS_GROUP_LIMIT (value: '100') Deprecated - Unused.
 * @member STEAM_FRIENDS_CHAT_METADATA_MAX (value: '8192') Maximum size in bytes that chat room, lobby, or chat/lobby member metadata may have.
 * @member STEAM_FRIENDS_PERSONA_NAME_MAX_UTF16 (value: '32') The maximum amount of UTF-16 characters in a users persona (display) name.
 * @member STEAM_FRIENDS_GROUP_ID_INVALID (value: '-1') Invalid friends group identifier.
 * @member STEAM_FRIENDS_INTERFACE_VERSION (value: '"SteamFriends015"') Steam Friends interface version.
 * @member STEAM_APPS_APP_PROOF_OF_PURCHASE_KEY_MAX (value: '240') Only used internally in Steam.
 * @member STEAM_APPS_INTERFACE_VERSION (value: '"STEAMAPPS_INTERFACE_VERSION008"') Steam Apps interface version.
 * @member STEAM_SCREENSHOTS_INVALID_SCREENSHOT_HANDLE (value: '0') An invalid screenshot handle, this is returned when writing or adding a screenshot has failed.
 * @member STEAM_SCREENSHOTS_UFS_TAG_TYPE_MAX (value: '255') Unused.
 * @member STEAM_SCREENSHOTS_UFS_TAG_VALUE_MAX (value: '255') The maximum length in bytes of a location metadata string set on a screenshot using ${function.steam_screenshots_set_location}.
 * @member STEAM_SCREENSHOTS_MAX_TAGGED_PUBLISHED_FILES (value: '32') The maximum number of workshop items that can be tagged in a screenshot using ${function.steam_screenshots_tag_published_file}.
 * @member STEAM_SCREENSHOTS_MAX_TAGGED_USERS (value: '32') The maximum number of users that can be tagged in a screenshot using ${function.steam_screenshots_tag_user}.
 * @member STEAM_SCREENSHOTS_THUMB_WIDTH (value: '200') Required width of a thumbnail provided to ${function.steam_screenshots_add_screenshot_to_library}. If you do not provide a thumbnail then one will be generated automatically.
 * @member STEAM_SCREENSHOTS_INTERFACE_VERSION (value: '"STEAMSCREENSHOTS_INTERFACE_VERSION003"') Steam Screenshots interface version.
 * @member STEAM_USER_INTERFACE_VERSION (value: '"SteamUser019"') Steam User interface version.
 * @member STEAM_USER_ENCRYPTED_APP_TICKET_SYMMETRIC_KEY_LEN (value: '32') The length of a key used with [SteamEncryptedAppTicket::BDecryptTicket](https://partner.steamgames.com/doc/api/SteamEncryptedAppTicket#BDecryptTicket).
 * @member STEAM_UTILS_INTERFACE_VERSION (value: '"SteamUtils009"') Steam Utils interface version.
 * @member STEAM_UGC_NUM_RESULTS_PER_PAGE (value: '50') The maximum number of results that you'll receive for a query result.
 * @member STEAM_UGC_DEVELOPER_METADATA_MAX (value: '5000') The maximum amount of bytes you can set with ${function.steam_ugc_set_item_metadata}.
 * @member STEAM_UGC_QUERY_HANDLE_INVALID (value: '-1') Used to specify an invalid query handle. This is frequently returned if a call fails.
 * @member STEAM_UGC_UPDATE_HANDLE_INVALID (value: '-1') Used to specify an invalid item update handle. This is frequently returned if a call fails.
 * @member STEAM_UGC_INTERFACE_VERSION (value: '"STEAMUGC_INTERFACE_VERSION015"') Steam UGC interface version.
 * @member STEAM_INPUT_INTERFACE_VERSION (value: '"SteamInput001"') Steam Input interface version.
 * @member STEAM_INPUT_HANDLE_ALL_CONTROLLERS (value: '-1') When sending an option to a specific controller handle, you can use this special value in the place of a handle to send the option to all controllers instead.
 * @member STEAM_INPUT_MAX_ANALOG_ACTIONS (value: '16') The maximum number of analog actions that can be performed on each controller.
 * @member STEAM_INPUT_MAX_ANALOG_ACTION_DATA (value: '1.0') The maximum value that can be reported by an analog action on any given axis.
 * @member STEAM_INPUT_MAX_COUNT (value: '16') The maximum number of controllers that can be used simultaneously with the Steam Input Configurator.
 * @member STEAM_INPUT_MAX_DIGITAL_ACTIONS (value: '128') The maximum number of digital actions that can be performed on each controller.
 * @member STEAM_INPUT_MAX_ORIGINS (value: '8') The maximum number of input origins that can be attached to a single action.
 * @member STEAM_INPUT_MIN_ANALOG_ACTION_DATA (value: '-1.0') The minimum value that can be reported by an analog action on any given axis.
 * @member STEAM_USER_STATS_LEADERBOARD_NAME_MAX (value: '128') Maximum number of bytes for a leaderboard name (UTF-8 encoded).
 * @member STEAM_USER_STATS_STAT_NAME_MAX (value: '128') Maximum number of bytes for stat and achievement names (UTF-8 encoded).
 * @member STEAM_USER_STATS_LEADERBOARD_DETAILS_MAX (value: '64') Maximum number of details that you can store for a single leaderboard entry.
 * @member STEAM_USER_STATS_INTERFACE_VERSION (value: '"STEAMUSERSTATS_INTERFACE_VERSION011"') Steam Userstats interface version.
 * @member STEAM_MUSIC_INTERFACE_VERSION (value: '"STEAMMUSIC_INTERFACE_VERSION001"') Steam Music interface version.
 * @member STEAM_TIMELINE_MAX_TIMELINE_PRIORITY (value: '1000') The maximum timeline priority value.
 * @member STEAM_INVENTORY_RESULT_INVALID (value: '-1') An invalid Steam inventory result handle.
 * @member STEAM_INVENTORY_ITEM_INSTANCE_ID_INVALID (value: '-1') An invalid item instance id. This is usually returned when an operation has failed. It's recommended that you initialise all new item instances with this value.
 * @member STEAM_INVENTORY_INTERFACE_VERSION (value: '"STEAMINVENTORY_INTERFACE_V002"') Steam Inventory interface version.
 * @member STEAM_REMOTE_STORAGE_FILENAME_MAX (value: '260') The maximum length that a Steam Cloud file path can be.
 * @member STEAM_REMOTE_STORAGE_PUBLISHED_DOCUMENT_CHANGE_DESCRIPTION_MAX (value: '8000') Unused.
 * @member STEAM_REMOTE_STORAGE_PUBLISHED_DOCUMENT_DESCRIPTION_MAX (value: '8000') The maximum size in bytes that a Workshop item description can be.
 * @member STEAM_REMOTE_STORAGE_PUBLISHED_DOCUMENT_TITLE_MAX (value: '129') The maximum size in bytes that a Workshop item title can be.
 * @member STEAM_REMOTE_STORAGE_PUBLISHED_FILE_URL_MAX (value: '256') The maximum size in bytes that a Workshop item URL can be.
 * @member STEAM_REMOTE_STORAGE_TAG_LIST_MAX (value: '1025') The maximum size in bytes that a Workshop item comma separated tag list can be.
 * @member STEAM_REMOTE_STORAGE_PUBLISHED_FILE_ID_INVALID (value: '0') An invalid Workshop item handle.
 * @member STEAM_REMOTE_STORAGE_PUBLISHED_FILE_UPDATE_HANDLE_INVALID (value: '-1') Deprecated - Only used with the deprecated RemoteStorage based Workshop API.
 * @member STEAM_REMOTE_STORAGE_UGC_FILE_STREAM_HANDLE_INVALID (value: '-1') Returned when an error has occured when using ${function.steam_remote_storage_file_write_stream_open}.
 * @member STEAM_REMOTE_STORAGE_UGC_HANDLE_INVALID (value: '-1') An invalid UGC Handle. This is often returned by functions signifying an error.
 * @member STEAM_REMOTE_STORAGE_ENUMERATE_PUBLISHED_FILES_MAX_RESULTS (value: '50') Deprecated - Only used with the deprecated RemoteStorage based Workshop API.
 * @member STEAM_REMOTE_STORAGE_MAX_CLOUD_FILE_CHUNK_SIZE (value: '104857600') Defines the largest allowed file size for the Steam Cloud. Cloud files cannot be written in a single chunk over 100MiB and cannot be over 200MiB total.
 * @member STEAM_REMOTE_STORAGE_INTERFACE_VERSION (value: '"STEAMREMOTESTORAGE_INTERFACE_VERSION014"')
 * @member STEAM_MATCHMAKING_SERVER_QUERY_INVALID (value: '0xffffffff') Invalid server query.
 * @member STEAM_MATCHMAKING_MAX_LOBBY_KEY_LENGTH (value: '255') Maximum number of characters a lobby metadata key can be.
 * @member STEAM_MATCHMAKING_FAVORITE_FLAG_FAVORITE (value: '0x01') This favorite game server entry is for the favorites list.
 * @member STEAM_MATCHMAKING_FAVORITE_FLAG_HISTORY (value: '0x02') This favorite game server entry is for the history list.
 * @member STEAM_MATCHMAKING_FAVORITE_FLAG_NONE (value: '0x00') This favorite game server has no flags set.
 * @member STEAM_MATCHMAKING_SERVERS_INTERFACE_VERSION (value: '"SteamMatchMakingServers002"') Steam Matchmaking servers interface version.
 * @member STEAM_MATCHMAKING_INTERFACE_VERSION (value: '"SteamMatchMaking009"') Steam Matchmaking interface version.
 * @member STEAM_NETWORKING_POLL_GROUP_INVALID (value: '0') Invalid pollgroup handle.
 * @const_end
 */

// MODULE

/**
 * @module api
 * @title API
 * @desc > **Steamworks Interface**: N / A
 * 
 * This module contains general management functions.
 * 
 * See: https://partner.steamgames.com/doc/api/steam_api
 * 
 * @section_func Functions
 * @desc These are the functions of the API module:
 * @ref steam_api_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the API module:
 * @ref SteamApi*
 * @ref SteamAuthSessionResponse
 * @ref SteamMarketNotAllowedReasonFlags
 * @ref macros
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the API module:
 * @ref SteamId
 * @section_end
 * @module_end
 */
