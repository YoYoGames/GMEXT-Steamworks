
enum STEAMWORKS_FRIENDS_FLAGS
{
	NONE = 0x00,
	BLOCKED = 0x01,
	FRIENDSHIP_REQUESTED	= 0x02,
	IMMEDIATE = 0x04,			// "REGULAR" FRIEND
	CLAN_MEMBER = 0x08,
	ON_GAME_SERVER = 0x10,	
	// HAS_PLAYED_WITH = 0x20,	// NOT CURRENTLY USED
	// FRIEND_OF_FRIEND = 0x40, // NOT CURRENTLY USED
	REQUESTING_FRIENDSHIP = 0x80,
	REQUESTING_INFO = 0x100,
	IGNORED	= 0x200,
	IGNORED_FRIEND = 0x400,
	// SUGGESTED = 0x800,	// NOT USED
	CHAT_MEMBER = 0x1000,
	ALL = 0xFFFF,
};


enum STEAMWORKS_PERSONA_STATE
{
	OFFLINE = 0,			// FRIEND IS NOT CURRENTLY LOGGED ON
	ONLINE = 1,			// FRIEND IS LOGGED ON
	BUSY = 2,			// USER IS ON, BUT BUSY
	AWAY = 3,			// AUTO-AWAY FEATURE
	SNOOZE = 4,			// AUTO-AWAY FOR A LONG TIME
	LOOKING_TO_TRADE = 5,	// ONLINE, TRADING
	LOOKING_TO_PLAY = 6,	// ONLINE, WANTING TO PLAY
	INVISIBLE = 7,		// ONLINE, BUT APPEARS OFFLINE TO FRIENDS.  THIS STATUS IS NEVER PUBLISHED TO CLIENTS.
	MAX,
};




// SteamNetworking connection states (ESteamNetworkingConnectionState)
enum STEAMWORKS_NET_CONNECTION_STATE
{
	NONE = 0,
	CONNECTING = 1,
	FINDING_ROUTE = 2,
	CONNECTED = 3,
	CLOSED_BY_PEER = 4,
	PROBLEM_LOCAL = 5,
	FIN_WAIT = 6,
	LINGER = 7,
	DEAD = 8,
	TERMINATED = 9,
}


// SteamNetworking send flags (k_nSteamNetworkingSend_*)
enum STEAMWORKS_NET_SEND_FLAG
{
	UNRELIABLE = 0,
	NO_NAGLE = 1,
	NO_DELAY = 4,
	RELIABLE = 8,
	UNRELIABLE_NO_DELAY = 16,
}

// enum ESteamNetworkingFakeIPType
enum STEAMWORKS_NET_FAKE_IP_TYPE
{
	INVALID, // Error, argument was not even an IP address, etc.
	NOT_FAKE, // Argument was a valid IP, but was not from the reserved "fake" range
	GLOBAL_IPV4, // Globally unique (for a given app) IPv4 address.  Address space managed by Steam
	LOCAL_IPV4, // Locally unique IPv4 address.  Address space managed by the local process.  For internal use only; should not be shared!
};


/// enum ESteamNetworkingIdentityType
enum STEAMWORKS_NET_IDENTITY_TYPE
{
	// Dummy/empty/invalid.
	// Please note that if we parse a string that we don't recognize
	// but that appears reasonable, we will NOT use this type.  Instead
	// we'll use k_ESteamNetworkingIdentityType_UnknownType.
	INVALID = 0,

	//
	// Basic platform-specific identifiers.
	//
	STEAM_ID = 16, // 64-bit CSteamID
	XBOX_PAIRWISE_ID = 17, // Publisher-specific user identity, as string
	SONY_PSN = 18, // 64-bit ID

	//
	// Special identifiers.
	//

	// Use their IP address (and port) as their "identity".
	// These types of identities are always unauthenticated.
	// They are useful for porting plain sockets code, and other
	// situations where you don't care about authentication.  In this
	// case, the local identity will be "localhost",
	// and the remote address will be their network address.
	//
	// We use the same type for either IPv4 or IPv6, and
	// the address is always store as IPv6.  We use IPv4
	// mapped addresses to handle IPv4.
	IP_ADDRESS = 1,

	// Generic string/binary blobs.  It's up to your app to interpret this.
	// This library can tell you if the remote host presented a certificate
	// signed by somebody you have chosen to trust, with this identity on it.
	// It's up to you to ultimately decide what this identity means.
	GENERIC_STRING = 2,
	GENERIC_BYTES = 3,

	// This identity type is used when we parse a string that looks like is a
	// valid identity, just of a kind that we don't recognize.  In this case, we
	// can often still communicate with the peer!  Allowing such identities
	// for types we do not recognize useful is very useful for forward
	// compatibility.
	UNKNOWN_TYPE = 4,
};

/// Describe the status of a particular network resource
// enum ESteamNetworkingAvailability
enum STEAMWORKS_NET_AVAILABILITY
{
	// Negative values indicate a problem.
	//
	// In general, we will not automatically retry unless you take some action that
	// depends on of requests this resource, such as querying the status, attempting
	// to initiate a connection, receive a connection, etc.  If you do not take any
	// action at all, we do not automatically retry in the background.
	
	CANNOT_TRY = -102,		// A dependent resource is missing, so this service is unavailable.  (E.g. we cannot talk to routers because Internet is down or we don't have the network config.)
	FAILED = -101,			// We have tried for enough time that we would expect to have been successful by now.  We have never been successful
	PREVIOUSLY = -100,		// We tried and were successful at one time, but now it looks like we have a problem

	RETRYING = -10,		// We previously failed and are currently retrying

	// Not a problem, but not ready either
    NEVER_TRIED = 1,		// We don't know because we haven't ever checked/tried
	WAITING = 2,			// We're waiting on a dependent resource to be acquired.  (E.g. we cannot obtain a cert until we are logged into Steam.  We cannot measure latency to relays until we have the network config.)
	ATTEMPTING = 3,			// We're actively trying now, but are not yet successful.

	CURRENT = 100,			// Resource is online/available

	UNKNOWN = 0,			// Internal dummy/sentinel, or value is not applicable in this context
};
