
enum SteamResult
{
	None = 0,							// no result
	OK	= 1,							// success
	Fail = 2,							// generic failure 
	NoConnection = 3,					// no/failed network connection
//	NoConnectionRetry = 4,				// OBSOLETE - removed
	InvalidPassword = 5,				// password/ticket is invalid
	LoggedInElsewhere = 6,				// same user logged in elsewhere
	InvalidProtocolVer = 7,			// protocol version is incorrect
	InvalidParam = 8,					// a parameter is incorrect
	FileNotFound = 9,					// file was not found
	Busy = 10,							// called method busy - action not taken
	InvalidState = 11,					// called object was in an invalid state
	InvalidName = 12,					// name is invalid
	InvalidEmail = 13,					// email is invalid
	DuplicateName = 14,				// name is not unique
	AccessDenied = 15,					// access is denied
	Timeout = 16,						// operation timed out
	Banned = 17,						// VAC2 banned
	AccountNotFound = 18,				// account not found
	InvalidSteamID = 19,				// steamID is invalid
	ServiceUnavailable = 20,			// The requested service is currently unavailable
	NotLoggedOn = 21,					// The user is not logged on
	Pending = 22,						// Request is pending (may be in process, or waiting on third party)
	EncryptionFailure = 23,			// Encryption or Decryption failed
	InsufficientPrivilege = 24,		// Insufficient privilege
	LimitExceeded = 25,				// Too much of a good thing
	Revoked = 26,						// Access has been revoked (used for revoked guest passes)
	Expired = 27,						// License/Guest pass the user is trying to access is expired
	AlreadyRedeemed = 28,				// Guest pass has already been redeemed by account, cannot be acked again
	DuplicateRequest = 29,				// The request is a duplicate and the action has already occurred in the past, ignored this time
	AlreadyOwned = 30,					// All the games in this guest pass redemption request are already owned by the user
	IPNotFound = 31,					// IP address not found
	PersistFailed = 32,				// failed to write change to the data store
	LockingFailed = 33,				// failed to acquire access lock for this operation
	LogonSessionReplaced = 34,
	ConnectFailed = 35,
	HandshakeFailed = 36,
	IOFailure = 37,
	RemoteDisconnect = 38,
	ShoppingCartNotFound = 39,			// failed to find the shopping cart requested
	Blocked = 40,						// a user didn't allow it
	Ignored = 41,						// target is ignoring sender
	NoMatch = 42,						// nothing matching the request found
	AccountDisabled = 43,
	ServiceReadOnly = 44,				// this service is not accepting content changes right now
	AccountNotFeatured = 45,			// account doesn't have value, so this feature isn't available
	AdministratorOK = 46,				// allowed to take this action, but only because requester is admin
	ContentVersion = 47,				// A Version mismatch in content transmitted within the Steam protocol.
	TryAnotherCM = 48,					// The current CM can't service the user making a request, user should try another.
	PasswordRequiredToKickSession = 49,// You are already logged in elsewhere, this cached credential login has failed.
	AlreadyLoggedInElsewhere = 50,		// You are already logged in elsewhere, you must wait
	Suspended = 51,					// Long running operation (content download) suspended/paused
	Cancelled = 52,					// Operation canceled (typically by user: content download)
	DataCorruption = 53,				// Operation canceled because data is ill formed or unrecoverable
	DiskFull = 54,						// Operation canceled - not enough disk space.
	RemoteCallFailed = 55,				// an remote call or IPC call failed
	PasswordUnset = 56,				// Password could not be verified as it's unset server side
	ExternalAccountUnlinked = 57,		// External account (PSN, Facebook...) is not linked to a Steam account
	PSNTicketInvalid = 58,				// PSN ticket was invalid
	ExternalAccountAlreadyLinked = 59,	// External account (PSN, Facebook...) is already linked to some other account, must explicitly request to replace/delete the link first
	RemoteFileConflict = 60,			// The sync cannot resume due to a conflict between the local and remote files
	IllegalPassword = 61,				// The requested new password is not legal
	SameAsPreviousValue = 62,			// new value is the same as the old one ( secret question and answer )
	AccountLogonDenied = 63,			// account login denied due to 2nd factor authentication failure
	CannotUseOldPassword = 64,			// The requested new password is not legal
	InvalidLoginAuthCode = 65,			// account login denied due to auth code invalid
	AccountLogonDeniedNoMail = 66,		// account login denied due to 2nd factor auth failure - and no mail has been sent - partner site specific
	HardwareNotCapableOfIPT = 67,		// 
	IPTInitError = 68,					// 
	ParentalControlRestricted = 69,	// operation failed due to parental control restrictions for current user
	FacebookQueryError = 70,			// Facebook query returned an error
	ExpiredLoginAuthCode = 71,			// account login denied due to auth code expired
	IPLoginRestrictionFailed = 72,
	AccountLockedDown = 73,
	AccountLogonDeniedVerifiedEmailRequired = 74,
	NoMatchingURL = 75,
	BadResponse = 76,					// parse failure, missing field, etc.
	RequirePasswordReEntry = 77,		// The user cannot complete the action until they re-enter their password
	ValueOutOfRange = 78,				// the value entered is outside the acceptable range
	UnexpectedError = 79,				// something happened that we didn't expect to ever happen
	Disabled = 80,						// The requested service has been configured to be unavailable
	InvalidCEGSubmission = 81,			// The set of files submitted to the CEG server are not valid !
	RestrictedDevice = 82,				// The device being used is not allowed to perform this action
	RegionLocked = 83,					// The action could not be complete because it is region restricted
	RateLimitExceeded = 84,			// Temporary rate limit exceeded, try again later, different from LimitExceeded which may be permanent
	AccountLoginDeniedNeedTwoFactor = 85,	// Need two-factor code to login
	ItemDeleted = 86,					// The thing we're trying to access has been deleted
	AccountLoginDeniedThrottle = 87,	// login attempt failed, try to throttle response to possible attacker
	TwoFactorCodeMismatch = 88,		// two factor code mismatch
	TwoFactorActivationCodeMismatch = 89,	// activation code for two-factor didn't match
	AccountAssociatedToMultiplePartners = 90,	// account has been associated with multiple partners
	NotModified = 91,					// data not modified
	NoMobileDevice = 92,				// the account does not have a mobile device associated with it
	TimeNotSynced = 93,				// the time presented is out of range or tolerance
	SmsCodeFailed = 94,				// SMS code failure (no match, none pending, etc.)
	AccountLimitExceeded = 95,			// Too many accounts access this resource
	AccountActivityLimitExceeded = 96,	// Too many changes to this account
	PhoneActivityLimitExceeded = 97,	// Too many changes to this phone
	RefundToWallet = 98,				// Cannot refund to payment method, must use wallet
	EmailSendFailure = 99,				// Cannot send an email
	NotSettled = 100,					// Can't perform operation till payment has settled
	NeedCaptcha = 101,					// Needs to provide a valid captcha
	GSLTDenied = 102,					// a game server login token owned by this token's owner has been banned
	GSOwnerDenied = 103,				// game server owner is denied for other reason (account lock, community ban, vac ban, missing phone)
	InvalidItemType = 104,				// the type of thing we were requested to act on is invalid
	IPBanned = 105,					// the ip address has been banned from taking this action
	GSLTExpired = 106,					// this token has expired from disuse; can be reset for use
	InsufficientFunds = 107,			// user doesn't have enough wallet funds to complete the action
	TooManyPending = 108,				// There are too many of this thing pending already
	NoSiteLicensesFound = 109,			// No site licenses found
	WGNetworkSendExceeded = 110,		// the WG couldn't send a response because we exceeded max network send size
	AccountNotFriends = 111,			// the user is not mutually friends
	LimitedUserAccount = 112,			// the user is limited
	CantRemoveItem = 113,				// item can't be removed
	AccountDeleted = 114,				// account has been deleted
	ExistingUserCancelledLicense = 115,	// A license for this already exists, but cancelled
	CommunityCooldown = 116,			// access is denied because of a community cooldown (probably from support profile data resets)
	NoLauncherSpecified = 117,			// No launcher was specified, but a launcher was needed to choose correct realm for operation.
	MustAgreeToSSA = 118,				// User must agree to china SSA or global SSA before login
	LauncherMigrated = 119,			// The specified launcher type is no longer supported; the user should be directed elsewhere
	SteamRealmMismatch = 120,			// The user's realm does not match the realm of the requested resource
	InvalidSignature = 121,			// signature check did not match
	ParseFailure = 122,				// Failed to parse input
	NoVerifiedPhone = 123,				// account does not have a verified phone number
	InsufficientBattery = 124,			// user device doesn't have enough battery charge currently to complete the action
	ChargerRequired = 125,				// The operation requires a charger to be plugged in, which wasn't present
	CachedCredentialInvalid = 126,		// Cached credential was invalid - user must reauthenticate
	PhoneNumberIsVOIP = 127,			// The phone number provided is a Voice Over IP number
	NotSupported = 128,				// The data being accessed is not supported by this API
	FamilySizeLimitExceeded = 129,		// Reached the maximum size of the family
	OfflineAppCacheInvalid = 130,		// The local data for the offline mode cache is insufficient to login
	TryLater = 131,					// retry the operation later
};




//#define STEAM_INPUT_MAX_COUNT 16

//#define STEAM_INPUT_MAX_ANALOG_ACTIONS 24

//#define STEAM_INPUT_MAX_DIGITAL_ACTIONS 256

//#define STEAM_INPUT_MAX_ORIGINS 8

//#define STEAM_INPUT_MAX_ACTIVE_LAYERS 16

//// When sending an option to a specific controller handle, you can send to all devices via this command
//#define STEAM_INPUT_HANDLE_ALL_CONTROLLERS UINT64_MAX

//#define STEAM_INPUT_MIN_ANALOG_ACTION_DATA -1.0f
//#define STEAM_INPUT_MAX_ANALOG_ACTION_DATA 1.0f

enum SteamInputSourceMode
{
	None,
	Dpad,
	Buttons,
	FourButtons,
	AbsoluteMouse,
	RelativeMouse,
	JoystickMove,
	JoystickMouse,
	JoystickCamera,
	ScrollWheel,
	Trigger,
	TouchMenu,
	MouseJoystick,
	MouseRegion,
	RadialMenu,
	SingleButton,
	Switches
};

// Note: Please do not use action origins as a way to identify controller types. There is no
// guarantee that they will be added in a contiguous manner - use GetInputTypeForHandle instead.
// Versions of Steam that add new controller types in the future will extend this enum so if you're
// using a lookup table please check the bounds of any origins returned by Steam.
enum SteamInputActionOrigin
{
	// Steam Controller
	None,
	SteamController_A,
	SteamController_B,
	SteamController_X,
	SteamController_Y,
	SteamController_LeftBumper,
	SteamController_RightBumper,
	SteamController_LeftGrip,
	SteamController_RightGrip,
	SteamController_Start,
	SteamController_Back,
	SteamController_LeftPad_Touch,
	SteamController_LeftPad_Swipe,
	SteamController_LeftPad_Click,
	SteamController_LeftPad_DPadNorth,
	SteamController_LeftPad_DPadSouth,
	SteamController_LeftPad_DPadWest,
	SteamController_LeftPad_DPadEast,
	SteamController_RightPad_Touch,
	SteamController_RightPad_Swipe,
	SteamController_RightPad_Click,
	SteamController_RightPad_DPadNorth,
	SteamController_RightPad_DPadSouth,
	SteamController_RightPad_DPadWest,
	SteamController_RightPad_DPadEast,
	SteamController_LeftTrigger_Pull,
	SteamController_LeftTrigger_Click,
	SteamController_RightTrigger_Pull,
	SteamController_RightTrigger_Click,
	SteamController_LeftStick_Move,
	SteamController_LeftStick_Click,
	SteamController_LeftStick_DPadNorth,
	SteamController_LeftStick_DPadSouth,
	SteamController_LeftStick_DPadWest,
	SteamController_LeftStick_DPadEast,
	SteamController_Gyro_Move,
	SteamController_Gyro_Pitch,
	SteamController_Gyro_Yaw,
	SteamController_Gyro_Roll,
	SteamController_Reserved0,
	SteamController_Reserved1,
	SteamController_Reserved2,
	SteamController_Reserved3,
	SteamController_Reserved4,
	SteamController_Reserved5,
	SteamController_Reserved6,
	SteamController_Reserved7,
	SteamController_Reserved8,
	SteamController_Reserved9,
	SteamController_Reserved10,
	
	// PS4 Dual Shock
	PS4_X,
	PS4_Circle,
	PS4_Triangle,
	PS4_Square,
	PS4_LeftBumper,
	PS4_RightBumper,
	PS4_Options,	//Start
	PS4_Share,		//Back
	PS4_LeftPad_Touch,
	PS4_LeftPad_Swipe,
	PS4_LeftPad_Click,
	PS4_LeftPad_DPadNorth,
	PS4_LeftPad_DPadSouth,
	PS4_LeftPad_DPadWest,
	PS4_LeftPad_DPadEast,
	PS4_RightPad_Touch,
	PS4_RightPad_Swipe,
	PS4_RightPad_Click,
	PS4_RightPad_DPadNorth,
	PS4_RightPad_DPadSouth,
	PS4_RightPad_DPadWest,
	PS4_RightPad_DPadEast,
	PS4_CenterPad_Touch,
	PS4_CenterPad_Swipe,
	PS4_CenterPad_Click,
	PS4_CenterPad_DPadNorth,
	PS4_CenterPad_DPadSouth,
	PS4_CenterPad_DPadWest,
	PS4_CenterPad_DPadEast,
	PS4_LeftTrigger_Pull,
	PS4_LeftTrigger_Click,
	PS4_RightTrigger_Pull,
	PS4_RightTrigger_Click,
	PS4_LeftStick_Move,
	PS4_LeftStick_Click,
	PS4_LeftStick_DPadNorth,
	PS4_LeftStick_DPadSouth,
	PS4_LeftStick_DPadWest,
	PS4_LeftStick_DPadEast,
	PS4_RightStick_Move,
	PS4_RightStick_Click,
	PS4_RightStick_DPadNorth,
	PS4_RightStick_DPadSouth,
	PS4_RightStick_DPadWest,
	PS4_RightStick_DPadEast,
	PS4_DPad_North,
	PS4_DPad_South,
	PS4_DPad_West,
	PS4_DPad_East,
	PS4_Gyro_Move,
	PS4_Gyro_Pitch,
	PS4_Gyro_Yaw,
	PS4_Gyro_Roll,
	PS4_DPad_Move,
	PS4_Reserved1,
	PS4_Reserved2,
	PS4_Reserved3,
	PS4_Reserved4,
	PS4_Reserved5,
	PS4_Reserved6,
	PS4_Reserved7,
	PS4_Reserved8,
	PS4_Reserved9,
	PS4_Reserved10,

	// XBox One
	XBoxOne_A,
	XBoxOne_B,
	XBoxOne_X,
	XBoxOne_Y,
	XBoxOne_LeftBumper,
	XBoxOne_RightBumper,
	XBoxOne_Menu,  //Start
	XBoxOne_View,  //Back
	XBoxOne_LeftTrigger_Pull,
	XBoxOne_LeftTrigger_Click,
	XBoxOne_RightTrigger_Pull,
	XBoxOne_RightTrigger_Click,
	XBoxOne_LeftStick_Move,
	XBoxOne_LeftStick_Click,
	XBoxOne_LeftStick_DPadNorth,
	XBoxOne_LeftStick_DPadSouth,
	XBoxOne_LeftStick_DPadWest,
	XBoxOne_LeftStick_DPadEast,
	XBoxOne_RightStick_Move,
	XBoxOne_RightStick_Click,
	XBoxOne_RightStick_DPadNorth,
	XBoxOne_RightStick_DPadSouth,
	XBoxOne_RightStick_DPadWest,
	XBoxOne_RightStick_DPadEast,
	XBoxOne_DPad_North,
	XBoxOne_DPad_South,
	XBoxOne_DPad_West,
	XBoxOne_DPad_East,
	XBoxOne_DPad_Move,
	XBoxOne_LeftGrip_Lower,
	XBoxOne_LeftGrip_Upper,
	XBoxOne_RightGrip_Lower,
	XBoxOne_RightGrip_Upper,
	XBoxOne_Share, // Xbox Series X controllers only
	XBoxOne_Reserved6,
	XBoxOne_Reserved7,
	XBoxOne_Reserved8,
	XBoxOne_Reserved9,
	XBoxOne_Reserved10,

	// XBox 360
	XBox360_A,
	XBox360_B,
	XBox360_X,
	XBox360_Y,
	XBox360_LeftBumper,
	XBox360_RightBumper,
	XBox360_Start,		//Start
	XBox360_Back,		//Back
	XBox360_LeftTrigger_Pull,
	XBox360_LeftTrigger_Click,
	XBox360_RightTrigger_Pull,
	XBox360_RightTrigger_Click,
	XBox360_LeftStick_Move,
	XBox360_LeftStick_Click,
	XBox360_LeftStick_DPadNorth,
	XBox360_LeftStick_DPadSouth,
	XBox360_LeftStick_DPadWest,
	XBox360_LeftStick_DPadEast,
	XBox360_RightStick_Move,
	XBox360_RightStick_Click,
	XBox360_RightStick_DPadNorth,
	XBox360_RightStick_DPadSouth,
	XBox360_RightStick_DPadWest,
	XBox360_RightStick_DPadEast,
	XBox360_DPad_North,
	XBox360_DPad_South,
	XBox360_DPad_West,
	XBox360_DPad_East,	
	XBox360_DPad_Move,
	XBox360_Reserved1,
	XBox360_Reserved2,
	XBox360_Reserved3,
	XBox360_Reserved4,
	XBox360_Reserved5,
	XBox360_Reserved6,
	XBox360_Reserved7,
	XBox360_Reserved8,
	XBox360_Reserved9,
	XBox360_Reserved10,


	// Switch - Pro or Joycons used as a single input device.
	// This does not apply to a single joycon
	Switch_A,
	Switch_B,
	Switch_X,
	Switch_Y,
	Switch_LeftBumper,
	Switch_RightBumper,
	Switch_Plus,	//Start
	Switch_Minus,	//Back
	Switch_Capture,
	Switch_LeftTrigger_Pull,
	Switch_LeftTrigger_Click,
	Switch_RightTrigger_Pull,
	Switch_RightTrigger_Click,
	Switch_LeftStick_Move,
	Switch_LeftStick_Click,
	Switch_LeftStick_DPadNorth,
	Switch_LeftStick_DPadSouth,
	Switch_LeftStick_DPadWest,
	Switch_LeftStick_DPadEast,
	Switch_RightStick_Move,
	Switch_RightStick_Click,
	Switch_RightStick_DPadNorth,
	Switch_RightStick_DPadSouth,
	Switch_RightStick_DPadWest,
	Switch_RightStick_DPadEast,
	Switch_DPad_North,
	Switch_DPad_South,
	Switch_DPad_West,
	Switch_DPad_East,
	Switch_ProGyro_Move,  // Primary Gyro in Pro Controller, or Right JoyCon
	Switch_ProGyro_Pitch,  // Primary Gyro in Pro Controller, or Right JoyCon
	Switch_ProGyro_Yaw,  // Primary Gyro in Pro Controller, or Right JoyCon
	Switch_ProGyro_Roll,  // Primary Gyro in Pro Controller, or Right JoyCon
	Switch_DPad_Move,
	Switch_Reserved1,
	Switch_Reserved2,
	Switch_Reserved3,
	Switch_Reserved4,
	Switch_Reserved5,
	Switch_Reserved6,
	Switch_Reserved7,
	Switch_Reserved8,
	Switch_Reserved9,
	Switch_Reserved10,

	// Switch JoyCon Specific
	Switch_RightGyro_Move,  // Right JoyCon Gyro generally should correspond to Pro's single gyro
	Switch_RightGyro_Pitch,  // Right JoyCon Gyro generally should correspond to Pro's single gyro
	Switch_RightGyro_Yaw,  // Right JoyCon Gyro generally should correspond to Pro's single gyro
	Switch_RightGyro_Roll,  // Right JoyCon Gyro generally should correspond to Pro's single gyro
	Switch_LeftGyro_Move,
	Switch_LeftGyro_Pitch,
	Switch_LeftGyro_Yaw,
	Switch_LeftGyro_Roll,
	Switch_LeftGrip_Lower, // Left JoyCon SR Button
	Switch_LeftGrip_Upper, // Left JoyCon SL Button
	Switch_RightGrip_Lower,  // Right JoyCon SL Button
	Switch_RightGrip_Upper,  // Right JoyCon SR Button
	Switch_JoyConButton_N, // With a Horizontal JoyCon this will be Y or what would be Dpad Right when vertical
	Switch_JoyConButton_E, // X
	Switch_JoyConButton_S, // A
	Switch_JoyConButton_W, // B
	Switch_Reserved15,
	Switch_Reserved16,
	Switch_Reserved17,
	Switch_Reserved18,
	Switch_Reserved19,
	Switch_Reserved20,
	
	// Added in SDK 1.51
	PS5_X,
	PS5_Circle,
	PS5_Triangle,
	PS5_Square,
	PS5_LeftBumper,
	PS5_RightBumper,
	PS5_Option,	//Start
	PS5_Create,		//Back
	PS5_Mute,
	PS5_LeftPad_Touch,
	PS5_LeftPad_Swipe,
	PS5_LeftPad_Click,
	PS5_LeftPad_DPadNorth,
	PS5_LeftPad_DPadSouth,
	PS5_LeftPad_DPadWest,
	PS5_LeftPad_DPadEast,
	PS5_RightPad_Touch,
	PS5_RightPad_Swipe,
	PS5_RightPad_Click,
	PS5_RightPad_DPadNorth,
	PS5_RightPad_DPadSouth,
	PS5_RightPad_DPadWest,
	PS5_RightPad_DPadEast,
	PS5_CenterPad_Touch,
	PS5_CenterPad_Swipe,
	PS5_CenterPad_Click,
	PS5_CenterPad_DPadNorth,
	PS5_CenterPad_DPadSouth,
	PS5_CenterPad_DPadWest,
	PS5_CenterPad_DPadEast,
	PS5_LeftTrigger_Pull,
	PS5_LeftTrigger_Click,
	PS5_RightTrigger_Pull,
	PS5_RightTrigger_Click,
	PS5_LeftStick_Move,
	PS5_LeftStick_Click,
	PS5_LeftStick_DPadNorth,
	PS5_LeftStick_DPadSouth,
	PS5_LeftStick_DPadWest,
	PS5_LeftStick_DPadEast,
	PS5_RightStick_Move,
	PS5_RightStick_Click,
	PS5_RightStick_DPadNorth,
	PS5_RightStick_DPadSouth,
	PS5_RightStick_DPadWest,
	PS5_RightStick_DPadEast,
	PS5_DPad_North,
	PS5_DPad_South,
	PS5_DPad_West,
	PS5_DPad_East,
	PS5_Gyro_Move,
	PS5_Gyro_Pitch,
	PS5_Gyro_Yaw,
	PS5_Gyro_Roll,
	PS5_DPad_Move,
	PS5_LeftGrip,
	PS5_RightGrip,
	PS5_LeftFn,
	PS5_RightFn,
	PS5_Reserved5,
	PS5_Reserved6,
	PS5_Reserved7,
	PS5_Reserved8,
	PS5_Reserved9,
	PS5_Reserved10,
	PS5_Reserved11,
	PS5_Reserved12,
	PS5_Reserved13,
	PS5_Reserved14,
	PS5_Reserved15,
	PS5_Reserved16,
	PS5_Reserved17,
	PS5_Reserved18,
	PS5_Reserved19,
	PS5_Reserved20,

	// Added in SDK 1.53
	SteamDeck_A,
	SteamDeck_B,
	SteamDeck_X,
	SteamDeck_Y,
	SteamDeck_L1,
	SteamDeck_R1,
	SteamDeck_Menu,
	SteamDeck_View,
	SteamDeck_LeftPad_Touch,
	SteamDeck_LeftPad_Swipe,
	SteamDeck_LeftPad_Click,
	SteamDeck_LeftPad_DPadNorth,
	SteamDeck_LeftPad_DPadSouth,
	SteamDeck_LeftPad_DPadWest,
	SteamDeck_LeftPad_DPadEast,
	SteamDeck_RightPad_Touch,
	SteamDeck_RightPad_Swipe,
	SteamDeck_RightPad_Click,
	SteamDeck_RightPad_DPadNorth,
	SteamDeck_RightPad_DPadSouth,
	SteamDeck_RightPad_DPadWest,
	SteamDeck_RightPad_DPadEast,
	SteamDeck_L2_SoftPull,
	SteamDeck_L2,
	SteamDeck_R2_SoftPull,
	SteamDeck_R2,
	SteamDeck_LeftStick_Move,
	SteamDeck_L3,
	SteamDeck_LeftStick_DPadNorth,
	SteamDeck_LeftStick_DPadSouth,
	SteamDeck_LeftStick_DPadWest,
	SteamDeck_LeftStick_DPadEast,
	SteamDeck_LeftStick_Touch,
	SteamDeck_RightStick_Move,
	SteamDeck_R3,
	SteamDeck_RightStick_DPadNorth,
	SteamDeck_RightStick_DPadSouth,
	SteamDeck_RightStick_DPadWest,
	SteamDeck_RightStick_DPadEast,
	SteamDeck_RightStick_Touch,
	SteamDeck_L4,
	SteamDeck_R4,
	SteamDeck_L5,
	SteamDeck_R5,
	SteamDeck_DPad_Move,
	SteamDeck_DPad_North,
	SteamDeck_DPad_South,
	SteamDeck_DPad_West,
	SteamDeck_DPad_East,
	SteamDeck_Gyro_Move,
	SteamDeck_Gyro_Pitch,
	SteamDeck_Gyro_Yaw,
	SteamDeck_Gyro_Roll,
	SteamDeck_Reserved1,
	SteamDeck_Reserved2,
	SteamDeck_Reserved3,
	SteamDeck_Reserved4,
	SteamDeck_Reserved5,
	SteamDeck_Reserved6,
	SteamDeck_Reserved7,
	SteamDeck_Reserved8,
	SteamDeck_Reserved9,
	SteamDeck_Reserved10,
	SteamDeck_Reserved11,
	SteamDeck_Reserved12,
	SteamDeck_Reserved13,
	SteamDeck_Reserved14,
	SteamDeck_Reserved15,
	SteamDeck_Reserved16,
	SteamDeck_Reserved17,
	SteamDeck_Reserved18,
	SteamDeck_Reserved19,
	SteamDeck_Reserved20,

	Horipad_M1,
	Horipad_M2,
	Horipad_L4,
	Horipad_R4,

	LenovoLegionGo_A,
	LenovoLegionGo_B,
	LenovoLegionGo_X,
	LenovoLegionGo_Y,
	LenovoLegionGo_LB,
	LenovoLegionGo_RB,
	LenovoLegionGo_Menu,
	LenovoLegionGo_View,
	LenovoLegionGo_LeftPad_Touch, // Left pad is only present on the original Legion Go
	LenovoLegionGo_LeftPad_Swipe,
	LenovoLegionGo_LeftPad_Click,
	LenovoLegionGo_LeftPad_DPadNorth,
	LenovoLegionGo_LeftPad_DPadSouth,
	LenovoLegionGo_LeftPad_DPadWest,
	LenovoLegionGo_LeftPad_DPadEast,
	LenovoLegionGo_RightPad_Touch,
	LenovoLegionGo_RightPad_Swipe,
	LenovoLegionGo_RightPad_Click,
	LenovoLegionGo_RightPad_DPadNorth,
	LenovoLegionGo_RightPad_DPadSouth,
	LenovoLegionGo_RightPad_DPadWest,
	LenovoLegionGo_RightPad_DPadEast,
	LenovoLegionGo_LT_SoftPull,
	LenovoLegionGo_LT,
	LenovoLegionGo_RT_SoftPull,
	LenovoLegionGo_RT,
	LenovoLegionGo_LeftStick_Move,
	LenovoLegionGo_LS,
	LenovoLegionGo_LeftStick_DPadNorth,
	LenovoLegionGo_LeftStick_DPadSouth,
	LenovoLegionGo_LeftStick_DPadWest,
	LenovoLegionGo_LeftStick_DPadEast,
	LenovoLegionGo_RightStick_Move,
	LenovoLegionGo_RS,
	LenovoLegionGo_RightStick_DPadNorth,
	LenovoLegionGo_RightStick_DPadSouth,
	LenovoLegionGo_RightStick_DPadWest,
	LenovoLegionGo_RightStick_DPadEast,
	LenovoLegionGo_Y1,
	LenovoLegionGo_Y2,
	LenovoLegionGo_DPad_Move,
	LenovoLegionGo_DPad_North,
	LenovoLegionGo_DPad_South,
	LenovoLegionGo_DPad_West,
	LenovoLegionGo_DPad_East,
	LenovoLegionGo_Gyro_Move,
	LenovoLegionGo_Gyro_Pitch,
	LenovoLegionGo_Gyro_Yaw,
	LenovoLegionGo_Gyro_Roll,
	LenovoLegionGo_Reserved1,
	LenovoLegionGo_Reserved2,
	LenovoLegionGo_Reserved3,
	LenovoLegionGo_Reserved4,
	LenovoLegionGo_Reserved5,
	LenovoLegionGo_Reserved6,
	LenovoLegionGo_Reserved7,
	LenovoLegionGo_Reserved8,
	LenovoLegionGo_Reserved9,
	LenovoLegionGo_Reserved10,
	LenovoLegionGo_Reserved11,
	LenovoLegionGo_Reserved12,
	LenovoLegionGo_Reserved13,
	LenovoLegionGo_Reserved14,
	LenovoLegionGo_Reserved15,
	LenovoLegionGo_Reserved16,
	LenovoLegionGo_Reserved17,
	LenovoLegionGo_Reserved18,
	LenovoLegionGo_Reserved19,
	LenovoLegionGo_Reserved20,

	Generic_L4,
	Generic_R4,
	Generic_L5,
	Generic_R5,
	Generic_PL,
	Generic_PR,
	Generic_C,
	Generic_Z,
	Generic_MISC1,
	Generic_MISC2,
	Generic_MISC3,
	Generic_MISC4,
	Generic_MISC5,
	Generic_MISC6,
	Generic_MISC7,
	Generic_MISC8,

	Count, // If Steam has added support for new controllers origins will go here.
	MaximumPossibleValue = 32767, // Origins are currently a maximum of 16 bits.
};

enum SteamXboxOrigin
{
	A,
	B,
	X,
	Y,
	LeftBumper,
	RightBumper,
	Menu,  //Start
	View,  //Back
	LeftTrigger_Pull,
	LeftTrigger_Click,
	RightTrigger_Pull,
	RightTrigger_Click,
	LeftStick_Move,
	LeftStick_Click,
	LeftStick_DPadNorth,
	LeftStick_DPadSouth,
	LeftStick_DPadWest,
	LeftStick_DPadEast,
	RightStick_Move,
	RightStick_Click,
	RightStick_DPadNorth,
	RightStick_DPadSouth,
	RightStick_DPadWest,
	RightStick_DPadEast,
	DPad_North,
	DPad_South,
	DPad_West,
	DPad_East,
	Count,
};

enum SteamControllerPad
{
	Left,
	Right
};

//enum SteamControllerHapticLocation
//{
//	Left = ( 1 << Left ),
//	Right = ( 1 << Right ),
//	Both = ( 1 << Left | 1 << Right ),
//};

enum SteamControllerHapticType
{
	Off,
	Tick,
	Click,
};

enum SteamInputType
{
	Unknown,
	SteamController,
	XBox360Controller,
	XBoxOneController,
	GenericGamepad,		// DirectInput controllers
	PS4Controller,
	AppleMFiController,	// Unused
	AndroidController,	// Unused
	SwitchJoyConPair,		// Unused
	SwitchJoyConSingle,	// Unused
	SwitchProController,
	MobileTouch,			// Steam Link App On-screen Virtual Controller
	PS3Controller,		// Currently uses PS4 Origins
	PS5Controller,		// Added in SDK 151
	SteamDeckController,	// Added in SDK 153
	Count,
	MaximumPossibleValue = 255,
};

// Individual values are used by the GetSessionInputConfigurationSettings bitmask
enum SteamInputConfigurationEnableType
{
	None			= 0x0000,
	Playstation	= 0x0001,
	Xbox			= 0x0002,
	Generic		= 0x0004,
	Switch			= 0x0008,
};

// These values are passed into SetLEDColor
enum SteamInputLEDFlag
{
	SetColor,
	// Restore the LED color to the user's preference setting as set in the controller personalization menu.
	// This also happens automatically on exit of your game.  
	RestoreUserDefault 
};

// These values are passed into GetGlyphPNGForActionOrigin
enum SteamInputGlyphSize
{
	Small,	// 32x32 pixels
	Medium,	// 128x128 pixels
	Large,	// 256x256 pixels
	Count,
};

enum SteamInputGlyphStyle
{
	// Base-styles - cannot mix
	Knockout 	= 0x0, // Face buttons will have colored labels/outlines on a knocked out background
										   // Rest of inputs will have white detail/borders on a knocked out background
	Light		= 0x1, // Black detail/borders on a white background
	Dark 		= 0x2, // White detail/borders on a black background

	// Modifiers
	// Default ABXY/PS equivalent glyphs have a solid fill w/ color matching the physical buttons on the device
	NeutralColorABXY 	= 0x10, // ABXY Buttons will match the base style color instead of their normal associated color
	SolidABXY 		= 0x20,	// ABXY Buttons will have a solid fill
};

enum SteamInputActionEventType
{
	DigitalAction,
	AnalogAction,
};
