
// FUNCTIONS

/**
 * @function steam_user_advertise_game
 * @description > **Steamworks Function**: [ISteamUser::AdvertiseGame](https://partner.steamgames.com/doc/api/ISteamUser#AdvertiseGame)
 *
 * This function sets the rich presence data for an unsecured game server that the user is playing on. This allows friends to be able to view the game info and join your game.
 * 
 * When you are using Steam authentication system this call is never required, the auth system automatically sets the appropriate rich presence.
 *
 * @param {Real} steam_id_game_server This should be `STEAM_ID_NON_STEAM_GS` ([k_steamIDNonSteamGS](https://partner.steamgames.com/doc/api/steam_api#k_steamIDNonSteamGS)) if you're setting the IP/Port, otherwise it should be `STEAM_ID_NIL` ([k_steamIDNil](https://partner.steamgames.com/doc/api/steam_api#k_steamIDNil)) if you're clearing this.
 * @param {Real} server_ip The IP of the game server in host order, i.e 127.0.0.1 == 0x7f000001.
 * @param {Real} server_port The connection port of the game server, in host order.
 * @function_end
 */

/**
 * @function steam_user_begin_auth_session
 * @description > **Steamworks Function**: [ISteamUser::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamUser#BeginAuthSession)
 *
 * This function authenticates the ticket from the entity Steam ID to be sure it is valid and isn't reused. Note that identity is not confirmed until the response callback is received and the return value in that callback is checked for success.
 * 
 * The ticket is created on the entity with ${function.steam_user_get_auth_session_ticket} or [ISteamGameServer::GetAuthSessionTicket](https://partner.steamgames.com/doc/api/ISteamGameServer#GetAuthSessionTicket) and then needs to be provided over the network for the other end to validate.
 * 
 * This registers for additional [ValidateAuthTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#ValidateAuthTicketResponse_t) callbacks if the entity goes offline or cancels the ticket. See ${constant.SteamAuthSessionResponse} for more information.
 * 
 * When the multiplayer session terminates you must call ${function.steam_user_end_auth_session}.
 * 
 * See also: [User Authentication and Ownership](https://partner.steamgames.com/doc/features/auth)
 *
 * @param {Buffer} auth_ticket The auth ticket to validate. The size of the buffer must be the ticket size provided by the call that created the ticket.
 * @param {Real} steam_id The entity's Steam ID that sent this ticket.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The size of the ticket in bytes. Defaults to the buffer size minus the offset.
 * @returns {Enum.SteamUserBeginAuthSessionResult} 
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::ValidateAuthTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#ValidateAuthTicketResponse_t)
 * 
 * Called when an auth ticket has been validated.
 * 
 * @member {Struct.SteamUserValidateAuthTicketResponse} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_is_behind_nat
 * @description > **Steamworks Function**: [ISteamUser::BIsBehindNAT](https://partner.steamgames.com/doc/api/ISteamUser#BIsBehindNAT)
 *
 * This function checks if the current user looks like they are behind a NAT device.
 * 
 * This is only valid if the user is connected to the Steam servers and may not catch all forms of NAT.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_phone_identifying
 * @description > **Steamworks Function**: [ISteamUser::BIsPhoneIdentifying](https://partner.steamgames.com/doc/api/ISteamUser#BIsPhoneIdentifying)
 *
 * This function checks whether the user's phone number is used to uniquely identify them.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_phone_requiring_verification
 * @description > **Steamworks Function**: [ISteamUser::BIsPhoneRequiringVerification](https://partner.steamgames.com/doc/api/ISteamUser#BIsPhoneRequiringVerification)
 *
 * This function checks whether the current user's phone number is awaiting (re)verification.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_phone_verified
 * @description > **Steamworks Function**: [ISteamUser::BIsPhoneVerified](https://partner.steamgames.com/doc/api/ISteamUser#BIsPhoneVerified)
 *
 * This function checks whether the current user has verified their phone number.
 * 
 * See the [Steam Guard Mobile Authenticator](https://support.steampowered.com/kb_article.php?ref=8625-wrah-9030) page on the customer facing Steam Support site for more information.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_is_two_factor_enabled
 * @description > **Steamworks Function**: [ISteamUser::BIsTwoFactorEnabled](https://partner.steamgames.com/doc/api/ISteamUser#BIsTwoFactorEnabled)
 *
 * This function checks whether the current user has Steam Guard two factor authentication enabled on their account.
 * 
 * See the [Steam Guard Mobile Authenticator](https://support.steampowered.com/kb_article.php?ref=8625-wrah-9030) page on the customer facing Steam Support site for more information.
 *
 * @returns {Bool} 
 * @function_end
 */

/**
 * @function steam_user_logged_on
 * @description > **Steamworks Function**: [ISteamUser::BLoggedOn](https://partner.steamgames.com/doc/api/ISteamUser#BLoggedOn)
 *
 * This function checks if the current user's Steam client is connected to the Steam servers.
 * 
 * If it's not then no real-time services provided by the Steamworks API will be enabled. The Steam client will automatically be trying to recreate the connection as often as possible. When the connection is restored a [SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t) callback will be posted.
 * 
 * You usually don't need to check for this yourself. All of the API calls that rely on this will check internally. Forcefully disabling stuff when the player loses access is usually not a very good experience for the player and you could be preventing them from accessing APIs that do not need a live connection to Steam.
 *
 * @returns {Bool} `true` if the Steam client current has a live connection to the Steam servers; otherwise, `false` if there is no active connection due to either a networking issue on the local machine, or the Steam server is down/busy.
 * @function_end
 */

/**
 * @function steam_user_set_duration_control_online_state
 * @description > **Steamworks Function**: [ISteamUser::BSetDurationControlOnlineState](https://partner.steamgames.com/doc/api/ISteamUser#BSetDurationControlOnlineState)
 *
 * This function allows the game to specify the offline/online gameplay state for Steam china duration control.
 *
 * @param {Enum.SteamUserDurationControlOnlineState} state The new gameplay state.
 * @returns {Bool} `true` if the online state was set successfully; otherwise, `false`.
 * @function_end
 */

/**
 * @function steam_user_cancel_auth_ticket
 * @description > **Steamworks Function**: [ISteamUser::CancelAuthTicket](https://partner.steamgames.com/doc/api/ISteamUser#CancelAuthTicket)
 *
 * This function cancels an auth ticket received from ${function.steam_user_get_auth_session_ticket} or ${function.steam_user_request_auth_ticket_for_web_api}. This should be called when no longer playing with the specified entity.
 * 
 * See also: [User Authentication and Ownership](https://partner.steamgames.com/doc/features/auth)
 *
 * @param {Real} auth_ticket_handle The active auth ticket to cancel.
 * @function_end
 */

/**
 * @function steam_user_decompress_voice
 * @description > **Steamworks Function**: [ISteamUser::DecompressVoice](https://partner.steamgames.com/doc/api/ISteamUser#DecompressVoice)
 *
 * This function decodes the compressed voice data returned by ${function.steam_user_get_voice}.
 * 
 * The output data is raw single-channel 16-bit PCM audio. The decoder supports any sample rate from 11025 to 48000. See ${function.steam_user_get_voice_optimal_sample_rate} for more information.
 * 
 * It is recommended that you start with a 20KiB buffer and then reallocate as necessary.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @param {Buffer} compressed The compressed data received from ${function.steam_user_get_voice}.
 * @param {Buffer} dest The buffer where the raw audio data will be returned. This can then be passed to your audio subsystems for playback.
 * @param {Real} desired_sample_rate The sample rate that will be returned. This can be from 11025 to 48000, you should either use the rate that works best for your audio playback system, which likely takes the user's audio hardware into account, or you can use ${function.steam_user_get_voice_optimal_sample_rate} to get the native sample rate of the Steam voice decoder.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The number of bytes. Defaults to the buffer size minus the offset.
 * @returns {Struct.SteamUserDecompressVoiceResult}
 * @function_end
 */

/**
 * @function steam_user_end_auth_session
 * @description > **Steamworks Function**: [ISteamUser::EndAuthSession](https://partner.steamgames.com/doc/api/ISteamUser#EndAuthSession)
 *
 * This function ends an auth session that was started with ${function.steam_user_begin_auth_session}. This should be called when no longer playing with the specified entity.
 * 
 * See: [User Authentication and Ownership](https://partner.steamgames.com/doc/features/auth)
 *
 * @param {Real} steam_id The entity to end the active auth session with.
 * @function_end
 */

/**
 * @function steam_user_get_auth_session_ticket
 * @description > **Steamworks Function**: [ISteamUser::GetAuthSessionTicket](https://partner.steamgames.com/doc/api/ISteamUser#GetAuthSessionTicket)
 *
 * This function retrieves an authentication ticket to be sent to the entity who wishes to authenticate you.
 * 
 * After calling this you can send the ticket to the entity where they can then call ${function.steam_user_begin_auth_session} / [ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession) to verify this entity's integrity.
 * 
 * [[Note: This API can not be used to create a ticket for use by the [ISteamUserAuth::AuthenticateUserTicket](https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket) Web API. Use the ${function.steam_user_request_auth_ticket_for_web_api} call instead.]]
 *
 * @param {Buffer} out_ticket The buffer where the new auth ticket will be copied into if the call was successful. Typically a buffer size of 1024 will be sufficient. However, in certain cases (e.g., when an application has a large amount of available DLC), a larger buffer size may be required.
 * @param {Enum.SteamNetworkingIdentityType} [identity_type] The type of the remote system's identity that will authenticate the ticket. Omit for no identity. If it is peer-to-peer then the user steam ID (`SteamId`). If it is a game server, then the game server steam ID may be used if it was obtained from a trusted 3rd party (`SteamId`), otherwise use the IP address (`IpAddress`). If it is a service, a string identifier of that service if one is provided (`GenericString`).
 * @param {Any} [identity_value] The identity's payload - shape depends on `identity_type`: `SteamId` is a Real (the steam ID); `IpAddress` is a `{ip: String, port: Real}` struct; `GenericString` is a String; `GenericBytes` is an Array of Real (0-255 each, up to 32 elements). Omit/undefined when `identity_type` is omitted.
 * @returns {Struct.SteamUserAuthSessionTicket}
 * 
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUser::GetAuthSessionTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#GetAuthSessionTicketResponse_t)
 * 
 * Result when creating an auth session ticket.
 * 
 * @member {Struct.SteamUserGetAuthSessionTicketResponse} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_get_h_steam_user
 * @description > **Steamworks Function**: [ISteamUser::GetHSteamUser](https://partner.steamgames.com/doc/api/ISteamUser#GetHSteamUser)
 *
 * This function gets the Steam user handle that this interface represents.
 * 
 * This is only used internally by the API, and by a few select interfaces that support multi-user.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_player_steam_level
 * @description > **Steamworks Function**: [ISteamUser::GetPlayerSteamLevel](https://partner.steamgames.com/doc/api/ISteamUser#GetPlayerSteamLevel)
 *
 * This function gets the Steam level of the user, as shown on their Steam community profile.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_steam_id
 * @description > **Steamworks Function**: [ISteamUser::GetSteamID](https://partner.steamgames.com/doc/api/ISteamUser#GetSteamID)
 *
 * This function gets the Steam ID of the account currently logged into the Steam client. This is commonly called the 'current user', or 'local user'.
 * 
 * A Steam ID is a unique identifier for a Steam accounts, Steam groups, Lobbies and Chat rooms, and used to differentiate users in all parts of the Steamworks API.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_decode_steam_id
 * @description > **Steamworks Function**: N / A
 *
 * This function gets information about the given Steam ID and returns it in a struct.
 *
 * @param {Real} steam_id The Steam ID to get information about.
 * @returns {Struct.SteamId} 
 * @function_end
 */

/**
 * @function steam_user_start_voice_recording
 * @description > **Steamworks Function**: [ISteamUser::StartVoiceRecording](https://partner.steamgames.com/doc/api/ISteamUser#StartVoiceRecording)
 *
 * This function starts voice recording.
 * 
 * Once started, use ${function.steam_user_get_available_voice} and ${function.steam_user_get_voice} to get the data, and then call ${function.steam_user_stop_voice_recording} when the user has released their push-to-talk hotkey or the game session has completed.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @function_end
 */

/**
 * @function steam_user_stop_voice_recording
 * @description > **Steamworks Function**: [ISteamUser::StartVoiceRecording](https://partner.steamgames.com/doc/api/ISteamUser#StartVoiceRecording)
 *
 * This function stops voice recording.
 * 
 * Because people often release push-to-talk keys early, the system will keep recording for a little bit after this function is called. As such, ${function.steam_user_get_voice} should continue to be called until it returns `SteamApiVoiceResult.NotRecording`, only then will voice recording be stopped.
 *
 * @function_end
 */

/**
 * @function steam_user_get_voice_optimal_sample_rate
 * @description > **Steamworks Function**: [ISteamUser::GetVoiceOptimalSampleRate](https://partner.steamgames.com/doc/api/ISteamUser#GetVoiceOptimalSampleRate)
 *
 * This function gets the native sample rate of the Steam voice decoder.
 * 
 * Using this sample rate for ${function.steam_user_decompress_voice} will perform the least CPU processing. However, the final audio quality will depend on how well the audio device (and/or your application's audio output SDK) deals with lower sample rates. You may find that you get the best audio output quality when you ignore this function and use the native sample rate of your audio output device, which is usually 48000 or 44100.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_get_available_voice
 * @description > **Steamworks Function**: [ISteamUser::GetAvailableVoice](https://partner.steamgames.com/doc/api/ISteamUser#GetAvailableVoice)
 *
 * This function checks to see if there is captured audio data available from ${function.steam_user_get_voice}, and gets the size of the data.
 * 
 * Most applications will only use compressed data and should ignore the other parameters, which exist primarily for backwards compatibility. See ${function.steam_user_get_voice} for further explanation of "uncompressed" data.
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @returns {Struct.SteamUserAvailableVoice} 
 * @function_end
 */

/**
 * @function steam_user_get_voice
 * @description > **Stermworks Function**: [ISteamUser::GetVoice](https://partner.steamgames.com/doc/api/ISteamUser#GetVoice)
 * 
 * This function reads captured audio data from the microphone buffer.
 * 
 * The compressed data can be transmitted by your application and decoded back into raw audio data using ${function.steam_user_decompress_voice} on the other side. The compressed data provided is in an arbitrary format and is not meant to be played directly.
 * 
 * This should be called once per frame, and at worst no more than four times a second to keep the microphone input delay as low as possible. Calling this any less may result in gaps in the returned stream.
 * 
 * It is recommended that you pass in an 8 kilobytes or larger destination buffer for compressed audio. Static buffers are recommended for performance reasons. However, if you would like to allocate precisely the right amount of space for a buffer before each call you may use ${function.steam_user_get_available_voice} to find out how much data is available to be read.
 * 
 * [[Note: Uncompressed" audio is a deprecated feature and should not be used by most applications. It is raw single-channel 16-bit PCM wave data which may have been run through preprocessing filters and/or had silence removed, so the uncompressed audio could have a shorter duration than you expect. There may be no data at all during long periods of silence. Also, fetching uncompressed audio will cause ${function.steam_user_get_voice} to discard any leftover compressed audio, so you must fetch both types at once. Finally, ${function.steam_user_get_available_voice} is not precisely accurate when the uncompressed size is requested. So if you really need to use uncompressed audio, you should call ${function.steam_user_get_voice} GetVoice frequently with two very large (20KiB+) output buffers instead of trying to allocate perfectly-sized buffers. But most applications should ignore all of these details and simply leave the "uncompressed" parameters as 0.]]
 * 
 * See [Steam Voice](https://partner.steamgames.com/doc/features/voice) for more information.
 *
 * @param {Bool} want_compressed This should always be `true`.
 * @param {Buffer} dest_compressed The buffer where the audio data will be copied into.
 * @param {Bool} want_uncompressed Deprecated.
 * @param {Buffer} dest_uncompressed Deprecated.
 * @param {Real} desired_sample_rate Deprecated.
 * @returns {Struct.SteamUserGetVoiceResult} 
 * @function_end
 */

/**
 * @function steam_user_request_encrypted_app_ticket
 * @description > **Steamworks Function**: [ISteamUser::RequestEncryptedAppTicket](https://partner.steamgames.com/doc/api/ISteamUser#RequestEncryptedAppTicket)
 *
 * This function requests an application ticket encrypted with the secret "encrypted app ticket key".
 * 
 * The encryption key can be obtained from the [Encrypted App Ticket Key](https://partner.steamgames.com/apps/sdkauth/) page on the App Admin for your app.
 * 
 * There can only be one [EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t) pending, and this call is subject to a 60 second rate limit.
 * 
 * After receiving the response you should call ${function.steam_user_get_encrypted_app_ticket} to get the ticket data, and then you need to send it to a secure server to be decrypted with the [SteamEncryptedAppTicket](https://partner.steamgames.com/doc/api/SteamEncryptedAppTicket) functions.
 *
 * @param {Buffer} data_to_include The data which will be encrypted into the ticket.
 * @param {Function} callback The function to call upon completion.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The length of the data, in bytes. Defaults to the buffer size minus the offset.
 * 
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t)
 * 
 * Called when an encrypted application ticket has been received.
 * 
 * @member {Struct.SteamUserEncryptedAppTicketResponse} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_get_encrypted_app_ticket
 * @description > **Steamworks Function**: [ISteamUser::GetEncryptedAppTicket](https://partner.steamgames.com/doc/api/ISteamUser#GetEncryptedAppTicket)
 *
 * This function retrieves an encrypted ticket.
 * 
 * This should be called after requesting an encrypted app ticket with ${function.steam_user_request_encrypted_app_ticket} and receiving the [EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t) call result. You should then pass this encrypted ticket to your secure servers to be decrypted using your secret key using [SteamEncryptedAppTicket::BDecryptTicket](https://partner.steamgames.com/doc/api/SteamEncryptedAppTicket#BDecryptTicket).
 * 
 * [[Note: If you call this without calling ${function.steam_user_request_encrypted_app_ticket}, the call may succeed but you will likely get a stale ticket.]]
 *
 * @param {Buffer} out_ticket The encrypted app ticket is copied into this buffer.
 * @returns {Real} The number of bytes copied into the buffer.
 * @function_end
 */

/**
 * @function steam_user_get_game_badge_level
 * @description > **Steamworks Function**: [ISteamUser::GetGameBadgeLevel](https://partner.steamgames.com/doc/api/ISteamUser#GetGameBadgeLevel)
 *
 * This function gets the level of the user's Steam badge for your game.
 * 
 * The user can have two different badges for a series; the regular badge (max level 5) and the foil badge (max level 1).
 *
 * @param {Real} series If you only have one set of cards, the series will be 1.
 * @param {Bool} foil Whether to check if they have received the foil badge.
 * @returns {Real} 
 * @function_end
 */

/**
 * @function steam_user_request_auth_ticket_for_web_api
 * @description > **Steamworks Function**: [ISteamUser::GetAuthTicketForWebApi](https://partner.steamgames.com/doc/api/ISteamUser#GetAuthTicketForWebApi)
 *
 * This function requests an authentication ticket for use with the ISteamUserAuth Web API.
 *
 * The ticket handle is returned synchronously, but the ticket bytes are not ready until `callback` fires. Once it fires with a successful result, call ${function.steam_user_fetch_auth_ticket_for_web_api} with the same handle to copy the ticket bytes into a buffer.
 *
 * @param {String} identity The identity of the remote service that will authenticate the ticket, as a string identifier. Pass an empty string if none was provided.
 * @param {Function} callback The function to call once the ticket is ready to fetch.
 * @returns {Real} The ticket handle, used to correlate the callback and to call ${function.steam_user_fetch_auth_ticket_for_web_api}.
 *
 * @event callback
 * @description > **Steamworks Callback**: [ISteamUser::GetTicketForWebApiResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#GetTicketForWebApiResponse_t)
 *
 * Called when the requested ticket is ready (or has failed).
 *
 * @member {Struct.SteamUserGetTicketForWebApiResponse} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_fetch_auth_ticket_for_web_api
 * @description > **Steamworks Function**: N / A
 *
 * This function copies the ticket bytes held natively for a completed ${function.steam_user_request_auth_ticket_for_web_api} callback into a GML buffer. The held bytes are released once fetched.
 *
 * @param {Real} auth_ticket_handle The ticket handle returned by ${function.steam_user_request_auth_ticket_for_web_api}.
 * @param {Buffer} out_ticket Returns the ticket bytes by copying them into this buffer. Size it to at least ${struct.SteamUserGetTicketForWebApiResponse}'s `ticket_size` field from the callback.
 * @returns {Bool}
 * @function_end
 */

/**
 * @function steam_user_get_duration_control
 * @description > **Steamworks Function**: [ISteamUser::GetDurationControl](https://partner.steamgames.com/doc/api/ISteamUser#GetDurationControl)
 *
 * This function retrieves anti indulgence / duration control for the current user / game combination.
 *
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::DurationControl_t](https://partner.steamgames.com/doc/api/ISteamUser#DurationControl_t)
 *
 * Called when the user's playtime/duration-control information has been received (used for the anti-addiction / playtime systems required in some regions).
 *
 * @member {Struct.SteamUserDurationControl} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_request_store_auth_url
 * @description > **Steamworks Function**: [ISteamUser::RequestStoreAuthURL](https://partner.steamgames.com/doc/api/ISteamUser#RequestStoreAuthURL)
 *
 * This function requests a URL that authenticates an in-game browser for store checkout, then redirects.
 * 
 * As long as the in-game browser accepts and handles session cookies, Steam microtransaction checkout pages will automatically recognize the user instead of presenting a login page.
 * 
 * [[Note: The URL has a very short lifetime to prevent history-snooping attacks, so you should only call this API when you are about to launch the browser, or else immediately navigate to the result URL using a hidden browser window.]]
 * 
 * [[Note: The resulting authorization cookie has an expiration time of one day, so it would be a good idea to request and visit a new auth URL every 12 hours.]]
 *
 * @param {String} redirect_url The URL to redirect the user to once the in-game browser has been authenticated for the store.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::StoreAuthURLResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#StoreAuthURLResponse_t)
 *
 * Called when a store authentication URL has been received.
 *
 * @member {Struct.SteamUserStoreAuthUrlResponse} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_get_market_eligibility
 * @description > **Steamworks Function**: [ISteamUser::GetMarketEligibility](https://partner.steamgames.com/doc/api/ISteamUser#GetMarketEligibility)
 *
 * This function checks whether or not an account is allowed to use the market.
 *
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamUser::MarketEligibilityResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#MarketEligibilityResponse_t)
 *
 * Called when the user's Steam Community Market eligibility has been received.
 *
 * @member {Struct.SteamUserMarketEligibilityResponse} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_user_track_app_usage_event
 * @description > **Steamworks Function**: [ISteamUser::TrackAppUsageEvent](https://partner.steamgames.com/doc/api/ISteamUser#TrackAppUsageEvent)
 *
 * This function was previously used by a few games to track usage events before Stats and Achievements (now deprecated).
 *
 * @param {Real} game_id The game ID that the usage event applies to.
 * @param {Real} app_usage_event The type of app usage event to track.
 * @param {String} extra_info Additional information describing the event.
 * @function_end
 */

/**
 * @function steam_user_user_has_license_for_app
 * @description > **Steamworks Function**: [ISteamUser::UserHasLicenseForApp](https://partner.steamgames.com/doc/api/ISteamUser#UserHasLicenseForApp)
 *
 * This function checks if the user owns a specific piece of Downloadable Content (DLC).
 * 
 * This can only be called after sending the user's auth ticket to [ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession).
 *
 * @param {Real} steam_id The Steam ID of the user to check.
 * @param {Real} app_id The DLC App ID to check if the user owns it.
 * @returns {Enum.SteamApiUserHasLicenseForAppResult} 
 * @function_end
 */

/**
 * @function steam_user_set_callback_steam_servers_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a connection to the Steam servers is established.
 * 
 * See: [ISteamUser::SteamServersConnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersConnected_t)
 * 
 * This callback has no fields.
 *
 * @param {Function} callback The function to be called when a connection to the Steam servers is established.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_steam_servers_connected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_steam_servers_connected}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_steam_server_connect_failure
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a connection attempt has failed.
 * 
 * See: [ISteamUser::SteamServerConnectFailure_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServerConnectFailure_t)
 * 
 * See: ${struct.SteamUserSteamServerConnectFailure}
 *
 * @param {Function} callback The function to be called when a connection attempt to the Steam servers fails.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_steam_server_connect_failure
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_steam_server_connect_failure}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_steam_servers_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called if the client has lost connection to the Steam servers.
 * 
 * See: [ISteamUser::SteamServersDisconnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersDisconnected_t)
 * 
 * See: ${struct.SteamUserSteamServersDisconnected}
 *
 * @param {Function} callback The function to be called when the connection to the Steam servers is lost.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_steam_servers_disconnected
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_steam_servers_disconnected}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_client_game_server_deny
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a message is sent by the Steam server to the client telling it to disconnect from the specified game server, which it may be in the process of or already connected to. The game client should immediately disconnect upon receiving this message.
 * 
 * See: [ISteamUser::ClientGameServerDeny_t](https://partner.steamgames.com/doc/api/ISteamUser#ClientGameServerDeny_t)
 * 
 * See: ${struct.SteamUserClientGameServerDeny}
 *
 * @param {Function} callback The function to be called when Steam requests that the client disconnect from a game server.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_client_game_server_deny
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_client_game_server_deny}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_licenses_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called whenever the user's licenses (owned packages) changes.
 * 
 * See: [ISteamUser::LicensesUpdated_t](https://partner.steamgames.com/doc/api/ISteamUser#LicensesUpdated_t)
 * 
 * This callback has no fields.
 *
 * @param {Function} callback The function to be called when the user's licenses (owned packages) change.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_licenses_updated
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_licenses_updated}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_microtxn_authorization_response
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to be called when a user has responded to a microtransaction authorization request.
 * 
 * See: [ISteamUser::MicroTxnAuthorizationResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#MicroTxnAuthorizationResponse_t)
 * 
 * See: ${struct.SteamUserMicroTxnAuthorizationResponse}
 *
 * @param {Function} callback The function to be called when the user responds to a microtransaction authorization request.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_microtxn_authorization_response
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback previously set with ${function.steam_user_set_callback_microtxn_authorization_response}.
 *
 * @function_end
 */

/**
 * @function steam_user_set_callback_get_auth_session_ticket_response
 * @description > **Steamworks Function**: N / A
 * 
 * This function sets the function to call when an auth session ticket has been created.
 * 
 * See: [ISteamUser::GetAuthSessionTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#GetAuthSessionTicketResponse_t)
 * 
 * See: ${struct.SteamUserGetAuthSessionTicketResponse}
 * 
 * @param {Function} callback The function to be called when an auth session ticket has been created.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_get_auth_session_ticket_response
 * @description > **Steamworks Function**: N / A
 * 
 * This function clears the callback previously set with ${function.steam_user_set_callback_get_auth_session_ticket_response}.
 * 
 * @function_end
 */

/**
 * @function steam_user_set_callback_validate_auth_ticket_response
 * @description > **Steamworks Function**: N / A
 * 
 * This function sets the function to be called when an auth ticket has been validated.
 * 
 * See: [ISteamUser::ValidateAuthTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#ValidateAuthTicketResponse_t)
 * 
 * See: ${struct.SteamUserValidateAuthTicketResponse}
 * 
 * @param {Function} callback The function to be called when an auth ticket has been validated.
 * @function_end
 */

/**
 * @function steam_user_clear_callback_validate_auth_ticket_response
 * @description > **Steamworks Function**: N / A
 * 
 * This function clears the callback previously set with ${function.steam_user_set_callback_validate_auth_ticket_response}.
 * 
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamUserStoreAuthUrlResponse
 * @description > **Steamworks Struct**: [ISteamUser::StoreAuthURLResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#StoreAuthURLResponse_t)
 *
 * This struct holds information on a received store authentication URL.
 * 
 * @member {String} url The authenticated URL that was requested.
 * @struct_end 
 */

/**
 * @struct SteamUserEncryptedAppTicketResponse
 * @description > **Steamworks Struct**: [ISteamUser::EncryptedAppTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#EncryptedAppTicketResponse_t)
 *
 * This struct holds information returned upon receipt of an encrypted application ticket.
 *
 * @member {Enum.SteamApiResult} result Was the call successful? Possible results:
 * 
 * * `SteamApiResult.Ok` - Success!
 * * `SteamApiResult.NoConnection` - A connection to Steam could not be established.
 * * `SteamApiResult.DuplicateRequest` - There is already a pending request.
 * * `SteamApiResult.LimitExceeded` - This call is subject to a 60 second rate limit, and you have exceeded that.
 * @struct_end
 */

/**
 * @struct SteamUserDurationControl
 * @description > **Steamworks Struct**: [ISteamUser::DurationControl_t](https://partner.steamgames.com/doc/api/ISteamUser#DurationControl_t)
 *
 * This struct holds information on a user's playtime/duration-control information.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} app_id The app ID the duration control information applies to.
 * @member {Bool} applicable Whether duration control is applicable to this user and app (i.e. whether the user is subject to the playtime restrictions).
 * @member {Real} csecs_last_5h The number of seconds the user has played in the last 5 hours, in centiseconds.
 * @member {Enum.SteamUserDurationControlProgress} progress The current duration-control progress level (a `SteamUserDurationControlProgress` value describing whether the user should be encouraged to take a break).
 * @member {Enum.SteamUserDurationControlNotification} notification The notification that should be shown to the user, if any.
 * @struct_end
 */

/**
 * @struct SteamUserMarketEligibilityResponse
 * @description > **Steamworks Struct**: [ISteamUser::MarketEligibilityResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#MarketEligibilityResponse_t)
 *
 * This struct holds info on a user's Steam Community Market eligibility.
 *
 * @member {Bool} allowed Whether the user is allowed to use the Steam Community Market.
 * @member {Enum.SteamMarketNotAllowedReasonFlags} not_allowed_reason The reason the user is not allowed to use the market, if applicable (an ${constant.SteamMarketNotAllowedReasonFlags} bitfield).
 * @member {Real} allowed_at_time The Unix timestamp of when the user will be allowed to use the market, if currently restricted.
 * @member {Real} day_steam_guard_required_days The number of days Steam Guard must have been active before the user is allowed to use the market.
 * @member {Real} day_new_device_cooldown The number of days a newly added device must wait before the user is allowed to use the market.
 * @struct_end
 */

/**
 * @struct SteamUserAuthSessionTicket
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a call to ${function.steam_user_get_auth_session_ticket}.
 *
 * @member {Real} auth_ticket_handle The auth ticket handle.
 * @member {Real} ticket_size The size of the ticket as written to the buffer.
 * @struct_end
 */

/**
 * @struct SteamUserGetAuthSessionTicketResponse
 * @description > **Steamworks Struct**: [ISteamUser::GetAuthSessionTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#GetAuthSessionTicketResponse_t)
 * 
 * This struct holds the result when creating an auth session ticket.
 * 
 * @member {Real} auth_ticket_handle The handle to the ticket that was created.
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @struct_end
 */

/**
 * @struct SteamUserAvailableVoice
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information about the size of available voice data.
 *
 * @member {Enum.SteamApiVoiceResult} result The result of the request.
 * @member {Real} compressed_bytes The size of the available voice data in bytes.
 * @member {Real} uncompressed_bytes Deprecated.
 * @struct_end
 */

/**
 * @struct SteamUserGetVoiceResult
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds the result of a call to ${function.steam_user_get_voice}.
 *
 * @member {Enum.SteamApiVoiceResult} result The result of the call.
 * @member {Real} written_compressed The number of bytes written into the buffer passed to the function.
 * @member {Real} written_uncompressed The number of bytes uncompressed.
 * @struct_end
 */

/**
 * @struct SteamUserDecompressVoiceResult
 * @description > **Steamworks Struct**: N / A
 * 
 * This struct holds information returned by ${function.steam_user_decompress_voice}.
 * 
 * @member {Enum.SteamApiVoiceResult} result The result of the request.
 * @member {Real} written_bytes The number of bytes written to the buffer.
 * @struct_end
 */

/**
 * @struct SteamUserValidateAuthTicketResponse
 * @description > **Steamworks Struct**: [ISteamUser::ValidateAuthTicketResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#ValidateAuthTicketResponse_t)
 * 
 * Called when an auth ticket has been validated.
 * 
 * @member {Real} steam_id The Steam ID of the entity that provided the auth ticket.
 * @member {Real} owner_steam_id The Steam ID that owns the game, this will be different from `steam_id` if the game is being accessed via Steam Family Sharing.
 * @member {Enum.SteamAuthSessionResponse} auth_session_response The result of the validation.
 * @struct_end
 */

/**
 * @struct SteamUserGetTicketForWebApiResponse
 * @description > **Steamworks Struct**: [ISteamUser::GetTicketForWebApiResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#GetTicketForWebApiResponse_t)
 *
 * This struct holds information returned by ${function.steam_user_request_auth_ticket_for_web_api}.
 *
 * @member {Real} auth_ticket_handle The ticket handle whose bytes are ready to fetch with ${function.steam_user_fetch_auth_ticket_for_web_api}.
 * @member {Enum.SteamApiResult} result The result of the request.
 * @member {Real} ticket_size The number of ticket bytes held and available to fetch. `0` on failure.
 * @struct_end
 */

/**
 * @struct SteamUserSteamServersDisconnected
 * @description > **Steamworks Struct**: [ISteamUser::SteamServersDisconnected_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServersDisconnected_t)
 *
 * This struct holds information about the reason the client has lost connection to the Steam servers.
 *
 * @member {Enum.SteamApiResult} result The reason we were disconnected from Steam.
 * @struct_end 
 */

/**
 * @struct SteamUserSteamServerConnectFailure
 * @description > **Steamworks Struct**: [ISteamUser::SteamServerConnectFailure_t](https://partner.steamgames.com/doc/api/ISteamUser#SteamServerConnectFailure_t)
 *
 * This struct holds information about a failed connection attempt.
 *
 * @member {Enum.SteamApiResult} result The reason why the connection failed.
 * @member {Bool} still_retrying Is the Steam client still trying to connect to the server?
 * @struct_end 
 */

/**
 * @struct SteamUserClientGameServerDeny
 * @description > **Steamworks Struct**: [ISteamUser::ClientGameServerDeny_t](https://partner.steamgames.com/doc/api/ISteamUser#ClientGameServerDeny_t)
 *
 * This struct holds information Sent by the Steam server to the client telling it to disconnect from the specified game server, which it may be in the process of or already connected to.
 *
 * @member {Real} app_id The App ID this call is for. Verify that it's the same as the current App ID with ${function.steam_utils_get_app_id}.
 * @member {Real} game_server_ip The IP of the game server that is telling us to disconnect, in host order, i.e 127.0.0.1 == 0x7f000001.
 * @member {Real} game_server_port The port of the game server that is telling us to disconnect, in host order.
 * @member {Bool} secure Is the game server VAC secure (`true`) or not (`false`)?
 * @member {Enum.SteamApiDenyReason} reason The deny reason.
 * @struct_end 
 */

/**
 * @struct SteamUserMicroTxnAuthorizationResponse
 * @description > **Steamworks Struct**: [ISteamUser::MicroTxnAuthorizationResponse_t](https://partner.steamgames.com/doc/api/ISteamUser#MicroTxnAuthorizationResponse_t)
 *
 * This struct holds information passed in a `ISteamUser::MicroTxnAuthorizationResponse_t` callback, which is called when a user has responded to a microtransaction authorization request.
 *
 * @member {Real} app_id App ID for this microtransaction.
 * @member {Real} order_id Order ID provided for the microtransaction.
 * @member {Bool} authorized Did the user authorise the transaction (`true`) or not (`false`)?
 * @struct_end
 */

// CONSTANTS

/**
 * @enum SteamUserDurationControlProgress
 * @description > **Steamworks Enum**: [ISteamUser::EDurationControlProgress](https://partner.steamgames.com/doc/api/ISteamUser#EDurationControlProgress)
 * 
 * This enum describes playtime restrictions that apply for games with duration control / anti-indulgence enabled for minor Steam China users.
 * 
 * @member Full Normal play.
 * @member Half (This value is deprecated)
 * @member None User's playtime has run out. Steam will terminate the game soon.
 * @member ExitSoon_3h Warns that the allowed gameplay limits are about to expire and the user will soon be forced to exit.
 * @member ExitSoon_5h Warns that the allowed gameplay limits are about to expire and the user will soon be forced to exit.
 * @member ExitSoon_Night Warns that the allowed gameplay limits are about to expire and the user will soon be forced to exit.
 * @enum_end
 */

/**
 * @enum SteamUserDurationControlNotification
 * @description > **Steamworks Enum**: [ISteamUser::EDurationControlNotification](https://partner.steamgames.com/doc/api/ISteamUser#EDurationControlNotification)
 * 
 * This enum describes which notification timer has expired, for steam china duration control feature. Some of these notifications are deprecated and are no longer sent.
 * 
 * @member None Callback is just informing you about progress, no notification to show.
 * @member OneHour Player has been playing for an hour - game can show something at this time if desired.
 * @member ThreeHours (deprecated)
 * @member HalfProgress (deprecated)
 * @member NoProgress No progress.
 * @member ExitSoon_3h Player has been playing for the allowed time and should exit the game.
 * @member ExitSoon_5h 	Player has been playing for the allowed time and should exit the game.
 * @member ExitSoon_Night Player has been playing until the locally allowed time of day (10PM) and should exit the game.
 * @enum_end
 */

/**
 * @enum SteamUserBeginAuthSessionResult
 * @description > **Steamworks Enum**: [EBeginAuthSessionResult](https://partner.steamgames.com/doc/api/steam_api#EBeginAuthSessionResult)
 *
 * This enum holds the results returned from ${function.steam_user_begin_auth_session} and [ISteamGameServer::BeginAuthSession](https://partner.steamgames.com/doc/api/ISteamGameServer#BeginAuthSession).
 *
 * @member Ok Ticket is valid for this game and this Steam ID.
 * @member InvalidTicket The ticket is invalid.
 * @member DuplicateRequest A ticket has already been submitted for this Steam ID.
 * @member InvalidVersion Ticket is from an incompatible interface version.
 * @member GameMismatch Ticket is not for this game.
 * @member ExpiredTicket Ticket has expired.
 * @enum_end 
 */

/**
 * @enum SteamUserDurationControlOnlineState
 * @description > **Steamworks Enum**: [ISteamUser::EDurationControlOnlineState](https://partner.steamgames.com/doc/api/ISteamUser#EDurationControlOnlineState)
 *
 * This enum describes the online/offline play state of a game.
 *
 * @member Invalid Invalid.
 * @member Offline Offline play.
 * @member Online Online play.
 * @member OnlineHighPri Online play - game requests that Steam not force exit the game.
 * @enum_end 
 */

/**
 * @enum SteamUserUgcList
 * @description > **Steamworks Enum**: [ISteamUGC::EUserUGCList](https://partner.steamgames.com/doc/api/ISteamUGC#EUserUGCList)
 *
 * This enum is used with ${function.steam_ugc_create_query_user_ugc_request} to obtain different lists of published UGC for a user.
 *
 * @member Published List of files the user has published. (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=myfiles)
 * @member VotedOn List of files the user has voted on. Includes both VotedUp and VotedDown.
 * @member VotedUp List of files the user has voted up. (Restricted to the current user only).
 * @member VotedDown List of files the user has voted down. (Restricted to the current user only).
 * @member WillVoteLater Deprecated. Do not use! (Restricted to the current user only).
 * @member Favorited List of files the user has favorited. (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=myfavorites)
 * @member Subscribed List of files the user has subscribed to. (Restricted to the current user only). (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=mysubscriptions)
 * @member UsedOrPlayed List of files the user has spent time in game with. (equivalent to http://steamcommunity.com/my/myworkshopfiles/?browsesort=myplayedfiles)
 * @member Followed List of files the user is following updates for.
 * @enum_end 
 */

/**
 * @enum SteamUserUgcListSortOrder
 * @description > **Steamworks Enum**: [ISteamUGC::EUserUGCListSortOrder](https://partner.steamgames.com/doc/api/ISteamUGC#EUserUGCListSortOrder)
 *
 * This enum is used with ${function.steam_ugc_create_query_user_ugc_request} to specify the sort order for user published UGC lists. Defaults to creation order descending.
 *
 * @member CreationOrderDesc Returns items by creation date. Descending - the newest items are first. (Corresponds to "sortmethod=newestfirst" on the workshop page)
 * @member CreationOrderAsc Returns items by creation date. Ascending - the oldest items are first. (Corresponds to "sortmethod=oldestfirst" on the workshop page)
 * @member TitleAsc Returns items by name. (Corresponds to "sortmethod=alpha" on the workshop page)
 * @member LastUpdatedDesc Returns the most recently updated items first. (Corresponds to "sortmethod=lastupdated" on the workshop page)
 * @member SubscriptionDateDesc Returns the most recently subscribed items first. (Corresponds to "sortmethod=subscriptiondate" on the workshop page)
 * @member VoteScoreDesc Returns the items with the more recent score updates first. (Corresponds to "sortmethod=score" on the workshop page)
 * @member ForModeration Returns the items that have been reported for moderation. (Corresponds to "sortmethod=formoderation" on the workshop page)
 * @enum_end 
 */

// MODULE

/**
 * @module user
 * @title User
 * @desc > **Steamworks Interface**: [ISteamUser](https://partner.steamgames.com/doc/api/ISteamUser)
 * 
 * This module contains functions for accessing and manipulating Steam user information.
 * 
 * This is also where the APIs for [Steam Voice](https://partner.steamgames.com/doc/features/voice) are exposed.
 * 
 * @section_func Functions
 * @desc These are the functions of the User module:
 * @ref steam_user_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the User module:
 * @ref SteamUser*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the User module:
 * @ref SteamUser*
 * @section_end
 * @module_end
 */
