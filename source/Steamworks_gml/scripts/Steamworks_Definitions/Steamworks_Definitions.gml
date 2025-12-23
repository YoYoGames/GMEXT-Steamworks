
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
	UNRELIABLE_NO_NAGLE = (0|1),
	NO_DELAY = 4,
	UNRELIABLE_NO_DELAY = (0|1|4),
	RELIABLE = 8,
	RELIABLE_NO_NAGLE = (8|1),
	USE_CURRENT_THREAD = 16,
	AUTO_START_BROKEN_SESSION = 32,
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

// ESteamNetConnectionEnd
/// Enumerate various causes of connection termination.  These are designed to work similar
/// to HTTP error codes: the numeric range gives you a rough classification as to the source
/// of the problem.
enum STEAMWORKS_NET_CONNECTION_END
{
	// Invalid/sentinel value
	INVALID = 0,

	//
	// Application codes.  These are the values you will pass to
	// ISteamNetworkingSockets::CloseConnection.  You can use these codes if
	// you want to plumb through application-specific reason codes.  If you don't
	// need this facility, feel free to always pass
	// App_Generic.
	//
	// The distinction between "normal" and "exceptional" termination is
	// one you may use if you find useful, but it's not necessary for you
	// to do so.  The only place where we distinguish between normal and
	// exceptional is in connection analytics.  If a significant
	// proportion of connections terminates in an exceptional manner,
	// this can trigger an alert.
	//

	// 1xxx: Application ended the connection in a "usual" manner.
	//       E.g.: user intentionally disconnected from the server,
	//             gameplay ended normally, etc
	APP_MIN = 1000,
		APP_GENERIC = 1000,
		// Use codes in this range for "normal" disconnection
	APP_MAX = 1999,

	// 2xxx: Application ended the connection in some sort of exceptional
	//       or unusual manner that might indicate a bug or configuration
	//       issue.
	// 
	APP_EXCEPTION_MIN = 2000,
		APP_EXCEPTION_GENERIC = 2000,
		// Use codes in this range for "unusual" disconnection
	APP_EXCEPTION_MAX = 2999,

	//
	// System codes.  These will be returned by the system when
	// the connection state is k_ESteamNetworkingConnectionState_ClosedByPeer
	// or k_ESteamNetworkingConnectionState_ProblemDetectedLocally.  It is
	// illegal to pass a code in this range to ISteamNetworkingSockets::CloseConnection
	//

	// 3xxx: Connection failed or ended because of problem with the
	//       local host or their connection to the Internet.
	LOCAL_MIN = 3000,

		// You cannot do what you want to do because you're running in offline mode.
		LOCAL_OFFLINE_MODE = 3001,

		// We're having trouble contacting many (perhaps all) relays.
		// Since it's unlikely that they all went offline at once, the best
		// explanation is that we have a problem on our end.  Note that we don't
		// bother distinguishing between "many" and "all", because in practice,
		// it takes time to detect a connection problem, and by the time
		// the connection has timed out, we might not have been able to
		// actively probe all of the relay clusters, even if we were able to
		// contact them at one time.  So this code just means that:
		//
		// * We don't have any recent successful communication with any relay.
		// * We have evidence of recent failures to communicate with multiple relays.
		LOCAL_MANY_RELAY_CONNECTIVITY = 3002,

		// A hosted server is having trouble talking to the relay
		// that the client was using, so the problem is most likely
		// on our end
		LOCAL_HOSTED_SERVER_PRIMARY_RELAY = 3003,

		// We're not able to get the SDR network config.  This is
		// *almost* always a local issue, since the network config
		// comes from the CDN, which is pretty darn reliable.
		LOCAL_NETWORK_CONFIG = 3004,

		// Steam rejected our request because we don't have rights
		// to do this.
		LOCAL_RIGHTS = 3005,

		// ICE P2P rendezvous failed because we were not able to
		// determine our "public" address (e.g. reflexive address via STUN)
		//
		// If relay fallback is available (it always is on Steam), then
		// this is only used internally and will not be returned as a high
		// level failure.
		LOCAL_P2P_ICE_NO_PUBLIC_ADDRESSES = 3006,

	LOCAL_Max = 3999,

	// 4xxx: Connection failed or ended, and it appears that the
	//       cause does NOT have to do with the local host or their
	//       connection to the Internet.  It could be caused by the
	//       remote host, or it could be somewhere in between.
	REMOTE_MIN = 4000,

		// The connection was lost, and as far as we can tell our connection
		// to relevant services (relays) has not been disrupted.  This doesn't
		// mean that the problem is "their fault", it just means that it doesn't
		// appear that we are having network issues on our end.
		REMOTE_TIMEOUT = 4001,

		// Something was invalid with the cert or crypt handshake
		// info you gave me, I don't understand or like your key types,
		// etc.
		REMOTE_BAD_CRYPT = 4002,

		// You presented me with a cert that was I was able to parse
		// and *technically* we could use encrypted communication.
		// But there was a problem that prevents me from checking your identity
		// or ensuring that somebody int he middle can't observe our communication.
		// E.g.: - the CA key was missing (and I don't accept unsigned certs)
		// - The CA key isn't one that I trust,
		// - The cert doesn't was appropriately restricted by app, user, time, data center, etc.
		// - The cert wasn't issued to you.
		// - etc
		REMOTE_BAD_CERT = 4003,

		// These will never be returned
		//REMOTE_NotLoggedIn_DEPRECATED = 4004,
		//REMOTE_NotRunningApp_DEPRECATED = 4005,

		// Something wrong with the protocol version you are using.
		// (Probably the code you are running is too old.)
		REMOTE_BAD_PROTOCOL_VERSION = 4006,

		// NAT punch failed failed because we never received any public
		// addresses from the remote host.  (But we did receive some
		// signals form them.)
		//
		// If relay fallback is available (it always is on Steam), then
		// this is only used internally and will not be returned as a high
		// level failure.
		REMOTE_P2P_ICE_NO_PUBLIC_ADDRESSES = 4007,

	REMOTE_Max = 4999,

	// 5xxx: Connection failed for some other reason.
	MISC_MIN = 5000,

		// A failure that isn't necessarily the result of a software bug,
		// but that should happen rarely enough that it isn't worth specifically
		// writing UI or making a localized message for.
		// The debug string should contain further details.
		MISC_GENERIC = 5001,

		// Generic failure that is most likely a software bug.
		MISC_INTERNAL_ERROR = 5002,

		// The connection to the remote host timed out, but we
		// don't know if the problem is on our end, in the middle,
		// or on their end.
		MISC_TIMEOUT = 5003,

		//MISC_RelayConnectivity_DEPRECATED = 5004,

		// There's some trouble talking to Steam.
		MISC_STEAM_CONNECTIVITY = 5005,

		// A server in a dedicated hosting situation has no relay sessions
		// active with which to talk back to a client.  (It's the client's
		// job to open and maintain those sessions.)
		MISC_NO_RELAY_SESSIONS_TO_CLIENT = 5006,

		// While trying to initiate a connection, we never received
		// *any* communication from the peer.
		//MISC_ServerNeverReplied = 5007,

		// P2P rendezvous failed in a way that we don't have more specific
		// information
		MISC_P2P_RENDEZVOUS = 5008,

		// NAT punch failed, probably due to NAT/firewall configuration.
		//
		// If relay fallback is available (it always is on Steam), then
		// this is only used internally and will not be returned as a high
		// level failure.
		MISC_P2P_NAT_FIREWALL = 5009,

		// Our peer replied that it has no record of the connection.
		// This should not happen ordinarily, but can happen in a few
		// exception cases:
		//
		// - This is an old connection, and the peer has already cleaned
		//   up and forgotten about it.  (Perhaps it timed out and they
		//   closed it and were not able to communicate this to us.)
		// - A bug or internal protocol error has caused us to try to
		//   talk to the peer about the connection before we received
		//   confirmation that the peer has accepted the connection.
		// - The peer thinks that we have closed the connection for some
		//   reason (perhaps a bug), and believes that is it is
		//   acknowledging our closure.
		MISC_PEER_SENT_NO_CONNECTION = 5010,

	MISC_MAX = 5999,
};
