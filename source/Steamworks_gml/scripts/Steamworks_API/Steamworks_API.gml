// ##### extgen :: Auto-generated file do not edit!! #####

// #####################################################################
// # Macros
// #####################################################################

// #####################################################################
// # Enums
// #####################################################################

enum SteamApiAccountType
{
    Invalid = 0,
    Individual = 1,
    Multiseat = 2,
    GameServer = 3,
    AnonGameServer = 4,
    Pending = 5,
    ContentServer = 6,
    Clan = 7,
    Chat = 8,
    ConsoleUser = 9,
    AnonUser = 10
}

enum SteamApiDenyReason
{
    Invalid = 0,
    InvalidVersion = 1,
    Generic = 2,
    NotLoggedOn = 3,
    NoLicense = 4,
    Cheater = 5,
    LoggedInElsewhere = 6,
    UnknownText = 7,
    IncompatibleAnticheat = 8,
    MemoryCorruption = 9,
    IncompatibleSoftware = 10,
    SteamConnectionLost = 11,
    SteamConnectionError = 12,
    SteamResponseTimedOut = 13,
    SteamValidationStalled = 14,
    SteamOwnerLeftGuestUser = 15
}

enum SteamApiGameIdType
{
    App = 0,
    GameMod = 1,
    Shortcut = 2,
    P2p = 3
}

enum SteamApiLaunchOptionType
{
    None = 0,
    Default = 1,
    SafeMode = 2,
    Multiplayer = 3,
    Config = 4,
    Openvr = 5,
    Server = 6,
    Editor = 7,
    Manual = 8,
    Benchmark = 9,
    Option1 = 10,
    Option2 = 11,
    Option3 = 12,
    OculusVr = 13,
    OpenvrOverlay = 14,
    Osvr = 15,
    Dialog = 1000
}

enum SteamApiMarketingMessageFlag
{
    None = 0,
    HighPriority = 1,
    PlatformWindows = 2,
    PlatformMac = 4,
    PlatformLinux = 8,
    PlatformRestrictions = 14
}

enum SteamApiNotificationPosition
{
    TopLeft = 0,
    TopRight = 1,
    BottomLeft = 2,
    BottomRight = 3
}

enum SteamApiUniverse
{
    Invalid = 0,
    Public = 1,
    Beta = 2,
    Internal = 3,
    Dev = 4,
    Max = 5
}

enum SteamApiUserHasLicenseResult
{
    HasLicense = 0,
    DoesNotHaveLicense = 1,
    NoAuth = 2
}

enum SteamApiVoiceResult
{
    Ok = 0,
    NotInitialized = 1,
    NotRecording = 2,
    NoData = 3,
    BufferTooSmall = 4,
    DataCorrupted = 5,
    Restricted = 6,
    UnsupportedCodec = 7,
    ReceiverOutOfDate = 8,
    ReceiverDidNotAnswer = 9
}

enum SteamApiResult
{
    Ok = 1,
    Fail = 2,
    NoConnection = 3,
    InvalidPassword = 5,
    LoggedInElsewhere = 6,
    InvalidProtocolVer = 7,
    InvalidParam = 8,
    FileNotFound = 9,
    Busy = 10,
    InvalidState = 11,
    InvalidName = 12,
    InvalidEmail = 13,
    DuplicateName = 14,
    AccessDenied = 15,
    Timeout = 16,
    Banned = 17,
    AccountNotFound = 18,
    InvalidSteamId = 19,
    ServiceUnavailable = 20,
    NotLoggedOn = 21,
    Pending = 22,
    EncryptionFailure = 23,
    InsufficientPrivilege = 24,
    LimitExceeded = 25,
    Revoked = 26,
    Expired = 27,
    AlreadyRedeemed = 28,
    DuplicateRequest = 29,
    AlreadyOwned = 30,
    IpNotFound = 31,
    PersistFailed = 32,
    LockingFailed = 33,
    LogonSessionReplaced = 34,
    ConnectFailed = 35,
    HandshakeFailed = 36,
    IoFailure = 37,
    RemoteDisconnect = 38,
    ShoppingCartNotFound = 39,
    Blocked = 40,
    Ignored = 41,
    NoMatch = 42,
    AccountDisabled = 43,
    ServiceReadOnly = 44
}

enum SteamFriendsOverlayToStoreFlag
{
    None = 0,
    AddToCart = 1,
    AddToCartAndShow = 2
}

enum SteamFriendsOverlayToWebpageMode
{
    Default = 0,
    Modal = 1
}

enum SteamFriendsChatEntryType
{
    Invalid = 0,
    ChatMsg = 1,
    Typing = 2,
    InviteGame = 3,
    Emote = 4,
    LeftConversation = 6,
    Entered = 7,
    WasKicked = 8,
    WasBanned = 9,
    Disconnected = 10,
    HistoricalChat = 11,
    LinkBlocked = 14
}

enum SteamFriendsFriendFlag
{
    None = 0,
    Blocked = 1,
    FriendshipRequested = 2,
    Immediate = 4,
    ClanMember = 8,
    OnGameServer = 16,
    RequestingFriendship = 128,
    RequestingInfo = 256,
    Ignored = 512,
    IgnoredFriend = 1024,
    ChatMember = 4096,
    All = 65535
}

enum SteamFriendsPersonaState
{
    Offline = 0,
    Online = 1,
    Busy = 2,
    Away = 3,
    Snooze = 4,
    LookingToTrade = 5,
    LookingToPlay = 6
}

enum SteamFriendsRelationship
{
    None = 0,
    Blocked = 1,
    RequestRecipient = 2,
    Friend = 3,
    RequestInitiator = 4,
    Ignored = 5,
    IgnoredFriend = 6,
    SuggestedFriend = 7
}

enum SteamScreenshotsVrScreenshotType
{
    None = 0,
    Mono = 1,
    Stereo = 2,
    MonoCubemap = 3,
    MonoPanorama = 4,
    StereoPanorama = 5
}

enum SteamScreenshotsConst
{
    InvalidScreenshotHandle = 0,
    TagTypeMax = 255,
    TagValueMax = 255,
    MaxTaggedPublishedFiles = 32,
    MaxTaggedUsers = 32,
    ThumbWidth = 200
}

enum SteamNetworkingIdentityType
{
    Invalid = 0,
    SteamId = 1,
    IpAddress = 2,
    GenericString = 3,
    GenericBytes = 4
}

enum SteamUserBeginAuthSessionResult
{
    Ok = 0,
    InvalidTicket = 1,
    DuplicateRequest = 2,
    InvalidVersion = 3,
    GameMismatch = 4,
    ExpiredTicket = 5
}

enum SteamUserDurationControlOnlineState
{
    Invalid = 0,
    Offline = 1,
    Online = 2,
    OnlineHighPri = 3
}

enum SteamUtilsApiCallFailure
{
    None = -1,
    SteamGone = 0,
    NetworkFailure = 1,
    InvalidHandle = 2,
    MismatchedCallback = 3
}

enum SteamUtilsGamepadTextInputMode
{
    Normal = 0,
    Password = 1
}

enum SteamUtilsGamepadTextInputLineMode
{
    SingleLine = 0,
    MultipleLines = 1
}

enum SteamUtilsFloatingGamepadTextInputMode
{
    SingleLine = 0,
    MultipleLines = 1,
    Email = 2,
    Numeric = 3
}

enum SteamUtilsTextFilteringContext
{
    Unknown = 0,
    GameContent = 1,
    Chat = 2,
    Name = 3
}

enum SteamUgcMatchingUgcType
{
    Items = 0,
    Items_Mtx = 1,
    Items_ReadyToUse = 2,
    Collections = 3,
    Artwork = 4,
    Videos = 5,
    Screenshots = 6,
    AllGuides = 7,
    WebGuides = 8,
    IntegratedGuides = 9,
    UsableInGame = 10,
    ControllerBindings = 11,
    GameManagedItems = 12,
    All = -1
}

enum SteamUgcQuery
{
    RankedByVote = 0,
    RankedByPublicationDate = 1,
    AcceptedForGameRankedByAcceptanceDate = 2,
    RankedByTrend = 3,
    FavoritedByFriendsRankedByPublicationDate = 4,
    CreatedByFriendsRankedByPublicationDate = 5,
    RankedByNumTimesReported = 6,
    CreatedByFollowedUsersRankedByPublicationDate = 7,
    NotYetRated = 8,
    RankedByTotalVotesAsc = 9,
    RankedByVotesUp = 10,
    RankedByTextSearch = 11,
    RankedByTotalUniqueSubscriptions = 12,
    RankedByPlaytimeTrend = 13,
    RankedByTotalPlaytime = 14,
    RankedByAveragePlaytimeTrend = 15,
    RankedByLifetimeAveragePlaytime = 16,
    RankedByPlaytimeSessionsTrend = 17,
    RankedByLifetimePlaytimeSessions = 18,
    RankedByLastUpdatedDate = 19
}

enum SteamUserUgcList
{
    Published = 0,
    VotedOn = 1,
    VotedUp = 2,
    VotedDown = 3,
    WillVoteLater = 4,
    Favorited = 5,
    Subscribed = 6,
    UsedOrPlayed = 7,
    Followed = 8
}

enum SteamUserUgcListSortOrder
{
    CreationOrderDesc = 0,
    CreationOrderAsc = 1,
    TitleAsc = 2,
    LastUpdatedDesc = 3,
    SubscriptionDateDesc = 4,
    VoteScoreDesc = 5,
    ForModeration = 6
}

enum SteamWorkshopFileType
{
    Community = 0,
    Microtransaction = 1,
    Collection = 2,
    Art = 3,
    Video = 4,
    Screenshot = 5,
    Game = 6,
    Software = 7,
    Concept = 8,
    WebGuide = 9,
    IntegratedGuide = 10,
    Merch = 11,
    ControllerBinding = 12,
    SteamworksAccessInvite = 13,
    SteamVideo = 14,
    GameManagedItem = 15
}

enum SteamItemPreviewType
{
    Image = 0,
    YouTubeVideo = 1,
    Sketchfab = 2,
    EnvironmentMap_HorizontalCross = 3,
    EnvironmentMap_LatLong = 4,
    ReservedMax = 255
}

enum SteamRemoteStoragePublishedFileVisibility
{
    Public = 0,
    FriendsOnly = 1,
    Private = 2,
    Unlisted = 3
}

enum SteamUgcContentDescriptorId
{
    NudityOrSexualContent = 1,
    FrequentViolenceOrGore = 2,
    AdultOnlySexualContent = 3,
    GratuitousSexualContent = 4,
    AnyMatureContent = 5
}

enum SteamUgcStatisticType
{
    NumSubscriptions = 0,
    NumFavorites = 1,
    NumFollowers = 2,
    NumUniqueSubscriptions = 3,
    NumUniqueFavorites = 4,
    NumUniqueFollowers = 5,
    NumUniqueWebsiteViews = 6,
    ReportScore = 7,
    NumSecondsPlayed = 8,
    NumPlaytimeSessions = 9,
    NumComments = 10,
    NumSecondsPlayedDuringTimePeriod = 11
}

enum SteamLeaderboardDataRequest
{
    Global = 0,
    GlobalAroundUser = 1,
    Friends = 2
}

enum SteamLeaderboardSortMethod
{
    None = 0,
    Ascending = 1,
    Descending = 2
}

enum SteamLeaderboardDisplayType
{
    None = 0,
    Numeric = 1,
    TimeSeconds = 2,
    TimeMilliSeconds = 3
}

enum SteamLeaderboardUploadScoreMethod
{
    None = 0,
    KeepBest = 1,
    ForceUpdate = 2
}

enum SteamMusicPlaybackStatus
{
    Undefined = 0,
    Playing = 1,
    Paused = 2,
    Idle = 3
}

enum SteamTimelineGameMode
{
    Playing = 1,
    Staging = 2,
    Menus = 3,
    LoadingScreen = 4
}

enum SteamTimelineEventClipPriority
{
    None = 1,
    Standard = 2,
    Featured = 3
}

enum SteamInventoryConst
{
    InvalidResult = -1
}

enum SteamRemoteStoragePlatform
{
    None = 0,
    Windows = 1,
    OSX = 2,
    PS3 = 4,
    Linux = 8,
    Reserved2 = 16,
    All = -1
}

enum SteamRemoteStorageUgcReadAction
{
    ContinueReadingUntilFinished = 0,
    ContinueReading = 1,
    Close = 2
}

enum SteamRemoteStorageWorkshopFileType
{
    Community = 0,
    Microtransaction = 1,
    Collection = 2,
    Art = 3,
    Video = 4,
    Screenshot = 5,
    Game = 6,
    Software = 7,
    Concept = 8,
    WebGuide = 9,
    IntegratedGuide = 10,
    Merch = 11,
    ControllerBinding = 12,
    SteamworksAccessInvite = 13,
    SteamVideo = 14,
    GameManagedItem = 15
}

enum SteamMatchmakingLobbyType
{
    Private = 0,
    FriendsOnly = 1,
    Public = 2,
    Invisible = 3
}

enum SteamMatchmakingLobbyComparison
{
    EqualToOrLessThan = -2,
    LessThan = -1,
    Equal = 0,
    GreaterThan = 1,
    EqualToOrGreaterThan = 2,
    NotEqual = 3
}

enum SteamMatchmakingLobbyDistanceFilter
{
    Close = 0,
    Default = 1,
    Far = 2,
    Worldwide = 3
}

enum SteamNetworkingConnectionState
{
    None = 0,
    Connecting = 1,
    FindingRoute = 2,
    Connected = 3,
    ClosedByPeer = 4,
    ProblemDetectedLocally = 5,
    FinWait = -1,
    Linger = -2,
    Dead = -3
}

enum SteamNetworkingSendFlags
{
    Unreliable = 0,
    NoNagle = 1,
    NoDelay = 4,
    Reliable = 8,
    UseCurrentThread = 16,
    AutoRestartBrokenSession = 32
}

enum SteamPartiesBeaconLocationType
{
    Invalid = 0,
    ChatGroup = 1,
    Max = 2
}

enum SteamPartiesBeaconLocationData
{
    Invalid = 0,
    Name = 1,
    IconURLSmall = 2,
    IconURLMedium = 3,
    IconURLLarge = 4
}

// #####################################################################
// # Constructors
// #####################################################################

/**
 * @returns {Struct.SteamId} 
 */
function SteamId() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3945585790;

    self.id64 = undefined;
    self.account_id = undefined;
    self.account_instance = undefined;
    self.universe = undefined;
    self.account_type = undefined;
    self.is_valid = undefined;
    self.is_lobby = undefined;
    self.is_individual = undefined;
    self.is_game_server = undefined;
    self.is_anon_game_server = undefined;
    self.is_anon_user = undefined;
    self.is_content_server = undefined;
    self.is_clan = undefined;
    self.is_chat = undefined;

}

/**
 * @returns {Struct.SteamFriendsGetFollowerCountResult} 
 */
function SteamFriendsGetFollowerCountResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 760337428;

    self.result = undefined;
    self.steam_id = undefined;
    self.count = undefined;

}

/**
 * @returns {Struct.SteamFriendsIsFollowingResult} 
 */
function SteamFriendsIsFollowingResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 499178470;

    self.result = undefined;
    self.steam_id = undefined;
    self.is_following = undefined;

}

/**
 * @returns {Struct.SteamFriendsEnumerateFollowingListResult} 
 */
function SteamFriendsEnumerateFollowingListResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2082408288;

    self.result = undefined;
    self.steam_ids = undefined;
    self.results_returned = undefined;
    self.total_result_count = undefined;

}

/**
 * @returns {Struct.SteamFriendsRequestClanOfficerListResult} 
 */
function SteamFriendsRequestClanOfficerListResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3581036;

    self.result = undefined;
    self.clan_id = undefined;
    self.officers = undefined;

}

/**
 * @returns {Struct.SteamFriendsDownloadClanActivityCountsResult} 
 */
function SteamFriendsDownloadClanActivityCountsResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2553683852;

    self.result = undefined;

}

/**
 * @returns {Struct.SteamFriendsAvatarImageLoaded} 
 */
function SteamFriendsAvatarImageLoaded() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3288597523;

    self.steam_id_64 = undefined;
    self.image_handle = undefined;
    self.width = undefined;
    self.height = undefined;

}

/**
 * @returns {Struct.SteamFriendsClanActivityCounts} 
 */
function SteamFriendsClanActivityCounts() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3710411397;

    self.ok = undefined;
    self.online = undefined;
    self.in_game = undefined;
    self.chatting = undefined;

}

/**
 * @returns {Struct.SteamFriendsClanChatMessage} 
 */
function SteamFriendsClanChatMessage() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2186456733;

    self.bytes_copied = undefined;
    self.text = undefined;
    self.entry_type = undefined;
    self.chatter_steam_id_64 = undefined;

}

/**
 * @returns {Struct.SteamFriendsFriendGamePlayed} 
 */
function SteamFriendsFriendGamePlayed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2300734433;

    self.ok = undefined;
    self.game_id = undefined;
    self.game_ip_v4 = undefined;
    self.game_port = undefined;
    self.query_port = undefined;
    self.lobby_steam_id_64 = undefined;

}

/**
 * @returns {Struct.SteamFriendsFriendMessage} 
 */
function SteamFriendsFriendMessage() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2609338083;

    self.bytes_copied = undefined;
    self.entry_type = undefined;
    self.data = undefined;

}

/**
 * @returns {Struct.SteamFriendsPersonaStateChange} 
 */
function SteamFriendsPersonaStateChange() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3004519013;

    self.steam_id = undefined;
    self.change_flags = undefined;

}

/**
 * @returns {Struct.SteamFriendsGameOverlayActivated} 
 */
function SteamFriendsGameOverlayActivated() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2594899553;

    self.active = undefined;

}

/**
 * @returns {Struct.SteamFriendsGameRichPresenceJoinRequested} 
 */
function SteamFriendsGameRichPresenceJoinRequested() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 551052451;

    self.steam_id_friend = undefined;
    self.connect_string = undefined;

}

/**
 * @returns {Struct.SteamFriendsGameLobbyJoinRequested} 
 */
function SteamFriendsGameLobbyJoinRequested() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 197877814;

    self.steam_id_friend = undefined;
    self.steam_id_lobby = undefined;

}

/**
 * @returns {Struct.SteamFriendsFriendRichPresenceUpdate} 
 */
function SteamFriendsFriendRichPresenceUpdate() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1882561134;

    self.steam_id_friend = undefined;
    self.app_id = undefined;

}

/**
 * @returns {Struct.SteamFriendsGameServerChangeRequested} 
 */
function SteamFriendsGameServerChangeRequested() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1391156503;

    self.server = undefined;
    self.password = undefined;

}

/**
 * @returns {Struct.SteamAppsFileDetailsResult} 
 */
function SteamAppsFileDetailsResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1007679992;

    self.result = undefined;
    self.file_size = undefined;
    self.flags = undefined;
    self.sha1 = undefined;

}

/**
 * @returns {Struct.SteamAppsDlcData} 
 */
function SteamAppsDlcData() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 549140660;

    self.ok = undefined;
    self.app_id = undefined;
    self.available = undefined;
    self.name = undefined;

}

/**
 * @returns {Struct.SteamAppsTimedTrialStatus} 
 */
function SteamAppsTimedTrialStatus() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1491843204;

    self.ok = undefined;
    self.seconds_allowed = undefined;
    self.seconds_played = undefined;

}

/**
 * @returns {Struct.SteamAppsInstallDir} 
 */
function SteamAppsInstallDir() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 319641229;

    self.bytes_copied = undefined;
    self.path = undefined;

}

/**
 * @returns {Struct.SteamAppsBetaName} 
 */
function SteamAppsBetaName() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 910695366;

    self.ok = undefined;
    self.name = undefined;

}

/**
 * @returns {Struct.SteamAppsNumBetas} 
 */
function SteamAppsNumBetas() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 805655252;

    self.total = undefined;
    self.available = undefined;
    self.private_count = undefined;

}

/**
 * @returns {Struct.SteamAppsBetaInfo} 
 */
function SteamAppsBetaInfo() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3058170853;

    self.ok = undefined;
    self.flags = undefined;
    self.build_id = undefined;
    self.beta_name = undefined;
    self.description = undefined;

}

/**
 * @returns {Struct.SteamAppsDlcDownloadProgress} 
 */
function SteamAppsDlcDownloadProgress() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1492980319;

    self.ok = undefined;
    self.bytes_downloaded = undefined;
    self.bytes_total = undefined;

}

/**
 * @returns {Struct.SteamAppsLaunchCommandLine} 
 */
function SteamAppsLaunchCommandLine() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2567012291;

    self.bytes_copied = undefined;
    self.command_line = undefined;

}

/**
 * @returns {Struct.SteamAppsInstallSize} 
 */
function SteamAppsInstallSize() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3392103799;

    self.ok = undefined;
    self.bytes_install_size = undefined;
    self.bytes_download_size = undefined;

}

/**
 * @returns {Struct.SteamAppsDlcInstallDir} 
 */
function SteamAppsDlcInstallDir() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2062723030;

    self.bytes_copied = undefined;
    self.path = undefined;

}

/**
 * @returns {Struct.SteamAppsLanguageInfo} 
 */
function SteamAppsLanguageInfo() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1005371145;

    self.ok = undefined;
    self.language_name = undefined;
    self.language_code = undefined;

}

/**
 * @returns {Struct.SteamAppsDlcInstalled} 
 */
function SteamAppsDlcInstalled() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2560014134;

    self.app_id = undefined;

}

/**
 * @returns {Struct.SteamScreenshotsScreenshotReady} 
 */
function SteamScreenshotsScreenshotReady() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1903574551;

    self.screenshot_handle = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserStoreAuthUrlResponse} 
 */
function SteamUserStoreAuthUrlResponse() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4276589035;

    self.result = undefined;
    self.url = undefined;

}

/**
 * @returns {Struct.SteamUserEncryptedAppTicketResponse} 
 */
function SteamUserEncryptedAppTicketResponse() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1653416272;

    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserDurationControl} 
 */
function SteamUserDurationControl() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 111616597;

    self.result = undefined;
    self.app_id = undefined;
    self.applicable = undefined;
    self.csecs_last_5h = undefined;
    self.progress = undefined;
    self.notification = undefined;

}

/**
 * @returns {Struct.SteamUserMarketEligibilityResponse} 
 */
function SteamUserMarketEligibilityResponse() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3177849834;

    self.allowed = undefined;
    self.not_allowed_reason = undefined;
    self.allowed_at_time = undefined;
    self.steam_purchase_time = undefined;
    self.day_steam_guard_required_days = undefined;
    self.day_new_device_cooldown = undefined;

}

/**
 * @returns {Struct.SteamNetworkingIdentity} 
 */
function SteamNetworkingIdentity() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3447469139;

    self.type = undefined;
    self.steam_id = undefined;
    self.ip = undefined;
    self.port = undefined;
    self.generic_string = undefined;

}

/**
 * @returns {Struct.SteamUserAuthSessionTicket} 
 */
function SteamUserAuthSessionTicket() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 174080998;

    self.auth_ticket_handle = undefined;
    self.ticket_size = undefined;

}

/**
 * @returns {Struct.SteamUserAvailableVoice} 
 */
function SteamUserAvailableVoice() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 890944143;

    self.result = undefined;
    self.compressed_bytes = undefined;
    self.uncompressed_bytes = undefined;

}

/**
 * @returns {Struct.SteamUserGetVoiceResult} 
 */
function SteamUserGetVoiceResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 537562335;

    self.result = undefined;
    self.written_compressed = undefined;
    self.written_uncompressed = undefined;

}

/**
 * @returns {Struct.SteamUserGameConnectionToken} 
 */
function SteamUserGameConnectionToken() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 695322339;

    self.ok = undefined;
    self.bytes_written = undefined;

}

/**
 * @returns {Struct.SteamUserDataFolder} 
 */
function SteamUserDataFolder() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3533311132;

    self.ok = undefined;
    self.path = undefined;

}

/**
 * @returns {Struct.SteamUserEncryptedAppTicket} 
 */
function SteamUserEncryptedAppTicket() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1314589283;

    self.ok = undefined;
    self.ticket_size = undefined;

}

/**
 * @returns {Struct.SteamUserSteamServersConnected} 
 */
function SteamUserSteamServersConnected() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2306665879;

    self.dummy = undefined;

}

/**
 * @returns {Struct.SteamUserSteamServersDisconnected} 
 */
function SteamUserSteamServersDisconnected() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 392513291;

    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserSteamServerConnectFailure} 
 */
function SteamUserSteamServerConnectFailure() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 899600127;

    self.result = undefined;
    self.still_retrying = undefined;

}

/**
 * @returns {Struct.SteamUserClientGameServerDeny} 
 */
function SteamUserClientGameServerDeny() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 675933256;

    self.app_id = undefined;
    self.game_server_ip = undefined;
    self.game_server_port = undefined;
    self.secure = undefined;
    self.reason = undefined;

}

/**
 * @returns {Struct.SteamUserLicensesUpdated} 
 */
function SteamUserLicensesUpdated() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 167002367;

    self.dummy = undefined;

}

/**
 * @returns {Struct.SteamUserMicroTxnAuthorizationResponse} 
 */
function SteamUserMicroTxnAuthorizationResponse() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1696404752;

    self.app_id = undefined;
    self.order_id = undefined;
    self.authorized = undefined;

}

/**
 * @returns {Struct.SteamUtilsApiCallResult} 
 */
function SteamUtilsApiCallResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1911850877;

    self.ok = undefined;
    self.failed = undefined;

}

/**
 * @returns {Struct.SteamUtilsCheckFileSignatureResult} 
 */
function SteamUtilsCheckFileSignatureResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1640139361;

    self.result = undefined;

}

/**
 * @returns {Struct.SteamUtilsLowBatteryPower} 
 */
function SteamUtilsLowBatteryPower() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 993592600;

    self.minutes_battery_left = undefined;

}

/**
 * @returns {Struct.SteamUtilsSteamApiCallCompleted} 
 */
function SteamUtilsSteamApiCallCompleted() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2065056789;

    self.async_call = undefined;
    self.callback_id = undefined;
    self.param_size = undefined;

}

/**
 * @returns {Struct.SteamUtilsCserIpPort} 
 */
function SteamUtilsCserIpPort() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1117647;

    self.ok = undefined;
    self.ip_v4 = undefined;
    self.port = undefined;

}

/**
 * @returns {Struct.SteamUtilsGamepadTextInput} 
 */
function SteamUtilsGamepadTextInput() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3411599876;

    self.ok = undefined;
    self.text = undefined;

}

/**
 * @returns {Struct.SteamUtilsImageSize} 
 */
function SteamUtilsImageSize() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2079072888;

    self.ok = undefined;
    self.width = undefined;
    self.height = undefined;

}

/**
 * @returns {Struct.SteamUtilsApiCallCompleted} 
 */
function SteamUtilsApiCallCompleted() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3478127517;

    self.ok = undefined;
    self.failed = undefined;

}

/**
 * @returns {Struct.SteamUtilsFilterTextResult} 
 */
function SteamUtilsFilterTextResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1816154716;

    self.ok = undefined;
    self.characters_filtered = undefined;
    self.filtered_text = undefined;

}

/**
 * @returns {Struct.SteamUtilsGamepadTextInputDismissed} 
 */
function SteamUtilsGamepadTextInputDismissed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1214060977;

    self.submitted = undefined;
    self.submitted_text_length = undefined;

}

/**
 * @returns {Struct.SteamUtilsFloatingGamepadTextInputDismissed} 
 */
function SteamUtilsFloatingGamepadTextInputDismissed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 215564439;

    self.submitted = undefined;

}

/**
 * @returns {Struct.SteamUtilsWarningMessage} 
 */
function SteamUtilsWarningMessage() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4133013175;

    self.severity = undefined;
    self.text = undefined;

}

/**
 * @returns {Struct.SteamUgcItemDownloadInfo} 
 */
function SteamUgcItemDownloadInfo() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3002068827;

    self.ok = undefined;
    self.bytes_downloaded = undefined;
    self.bytes_total = undefined;

}

/**
 * @returns {Struct.SteamUgcItemInstallInfo} 
 */
function SteamUgcItemInstallInfo() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3611113442;

    self.ok = undefined;
    self.size_on_disk = undefined;
    self.folder = undefined;
    self.timestamp = undefined;

}

/**
 * @returns {Struct.SteamUgcItemUpdateProgress} 
 */
function SteamUgcItemUpdateProgress() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1277506373;

    self.status = undefined;
    self.bytes_processed = undefined;
    self.bytes_total = undefined;

}

/**
 * @returns {Struct.SteamUgcQueryResult} 
 */
function SteamUgcQueryResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2158147385;

    self.ok = undefined;
    self.published_file_id = undefined;
    self.title = undefined;
    self.description = undefined;
    self.time_created = undefined;
    self.time_updated = undefined;
    self.visibility = undefined;
    self.banned = undefined;
    self.accepted_for_use = undefined;
    self.tags_truncated = undefined;

}

/**
 * @returns {Struct.SteamUgcQueryPreviewUrl} 
 */
function SteamUgcQueryPreviewUrl() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2404481149;

    self.ok = undefined;
    self.url = undefined;

}

/**
 * @returns {Struct.SteamUgcQueryMetadata} 
 */
function SteamUgcQueryMetadata() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1312557445;

    self.ok = undefined;
    self.metadata = undefined;

}

/**
 * @returns {Struct.SteamUgcAdditionalPreview} 
 */
function SteamUgcAdditionalPreview() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3322980683;

    self.ok = undefined;
    self.url_or_video_id = undefined;
    self.preview_type = undefined;

}

/**
 * @returns {Struct.SteamUgcKeyValueTag} 
 */
function SteamUgcKeyValueTag() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2267694496;

    self.ok = undefined;
    self.key = undefined;
    self.value = undefined;

}

/**
 * @returns {Struct.SteamUgcItemInstalled} 
 */
function SteamUgcItemInstalled() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4023767051;

    self.app_id = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamUgcUserSubscribedItemsListChanged} 
 */
function SteamUgcUserSubscribedItemsListChanged() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2315828027;

    self.app_id = undefined;

}

/**
 * @returns {Struct.SteamUgcFileSubscribed} 
 */
function SteamUgcFileSubscribed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3497348414;

    self.app_id = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamUgcFileUnsubscribed} 
 */
function SteamUgcFileUnsubscribed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2582908905;

    self.app_id = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamUgcQueryCompleted} 
 */
function SteamUgcQueryCompleted() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2842394473;

    self.query_handle = undefined;
    self.result = undefined;
    self.num_results_returned = undefined;
    self.total_matching_results = undefined;
    self.cached_data = undefined;

}

/**
 * @returns {Struct.SteamUgcCreateItemResult} 
 */
function SteamUgcCreateItemResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2598362310;

    self.result = undefined;
    self.published_file_id = undefined;
    self.legal_agreement_required = undefined;

}

/**
 * @returns {Struct.SteamUgcSubmitItemUpdateResult} 
 */
function SteamUgcSubmitItemUpdateResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3063359699;

    self.result = undefined;
    self.legal_agreement_required = undefined;

}

/**
 * @returns {Struct.SteamUgcSubscribeItemResult} 
 */
function SteamUgcSubscribeItemResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 963936114;

    self.result = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamUgcUnsubscribeItemResult} 
 */
function SteamUgcUnsubscribeItemResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 431924523;

    self.result = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamUgcFavoriteItemsListChanged} 
 */
function SteamUgcFavoriteItemsListChanged() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1569097968;

    self.result = undefined;
    self.published_file_id = undefined;
    self.was_add_request = undefined;

}

/**
 * @returns {Struct.SteamUgcSetUserItemVoteResult} 
 */
function SteamUgcSetUserItemVoteResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 766475093;

    self.result = undefined;
    self.published_file_id = undefined;
    self.vote_up = undefined;

}

/**
 * @returns {Struct.SteamUgcGetUserItemVoteResult} 
 */
function SteamUgcGetUserItemVoteResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2209146033;

    self.result = undefined;
    self.published_file_id = undefined;
    self.voted_up = undefined;
    self.voted_down = undefined;
    self.vote_skipped = undefined;

}

/**
 * @returns {Struct.SteamUgcRequestItemDetailsResult} 
 */
function SteamUgcRequestItemDetailsResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2371881405;

    self.result = undefined;
    self.published_file_id = undefined;
    self.cached_data = undefined;

}

/**
 * @returns {Struct.SteamUgcSupportedGameVersionData} 
 */
function SteamUgcSupportedGameVersionData() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2501994908;

    self.ok = undefined;
    self.game_branch_min = undefined;
    self.game_branch_max = undefined;

}

/**
 * @returns {Struct.SteamUgcDeleteItemResult} 
 */
function SteamUgcDeleteItemResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2594992913;

    self.result = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamUgcDownloadItemResult} 
 */
function SteamUgcDownloadItemResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2015232426;

    self.app_id = undefined;
    self.published_file_id = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamInputAnalogActionData} 
 */
function SteamInputAnalogActionData() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 168659087;

    self.mode = undefined;
    self.x = undefined;
    self.y = undefined;
    self.active = undefined;

}

/**
 * @returns {Struct.SteamInputDigitalActionData} 
 */
function SteamInputDigitalActionData() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1851676037;

    self.state = undefined;
    self.active = undefined;

}

/**
 * @returns {Struct.SteamInputMotionData} 
 */
function SteamInputMotionData() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4219057907;

    self.rot_quat_x = undefined;
    self.rot_quat_y = undefined;
    self.rot_quat_z = undefined;
    self.rot_quat_w = undefined;
    self.pos_accel_x = undefined;
    self.pos_accel_y = undefined;
    self.pos_accel_z = undefined;
    self.rot_vel_x = undefined;
    self.rot_vel_y = undefined;
    self.rot_vel_z = undefined;

}

/**
 * @returns {Struct.SteamInputActiveActionSetLayers} 
 */
function SteamInputActiveActionSetLayers() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3015103601;

    self.count = undefined;
    self.handles = undefined;

}

/**
 * @returns {Struct.SteamInputActionOrigins} 
 */
function SteamInputActionOrigins() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3337827802;

    self.count = undefined;
    self.origins = undefined;

}

/**
 * @returns {Struct.SteamInputDeviceBindingRevision} 
 */
function SteamInputDeviceBindingRevision() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4021434149;

    self.ok = undefined;
    self.major = undefined;
    self.minor = undefined;

}

/**
 * @returns {Struct.SteamInputDeviceEvent} 
 */
function SteamInputDeviceEvent() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1245875165;

    self.controller_handle = undefined;

}

/**
 * @returns {Struct.SteamInputActionSetChanged} 
 */
function SteamInputActionSetChanged() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2606866111;

    self.controller_handle = undefined;
    self.action_set_handle = undefined;

}

/**
 * @returns {Struct.SteamInputControllerBattery} 
 */
function SteamInputControllerBattery() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2079938398;

    self.controller_handle = undefined;
    self.battery_percent = undefined;

}

/**
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 */
function SteamUserStatsAchievementAndUnlockTime() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2667306638;

    self.achieved = undefined;
    self.unlock_time = undefined;

}

/**
 * @returns {Struct.SteamUserStatsAchievementAndProgress} 
 */
function SteamUserStatsAchievementAndProgress() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1842473848;

    self.achieved = undefined;
    self.cur_progress = undefined;
    self.max_progress = undefined;

}

/**
 * @returns {Struct.SteamUserStatsAchievementNamesAndPercent} 
 */
function SteamUserStatsAchievementNamesAndPercent() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1265809496;

    self.name = undefined;
    self.percent = undefined;

}

/**
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 */
function SteamUserStatsMostAchievedAchievementInfo() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4144113084;

    self.ok = undefined;
    self.name = undefined;
    self.percent = undefined;
    self.achieved = undefined;

}

/**
 * @returns {Struct.SteamUserStatsNumAchievementsAndHours} 
 */
function SteamUserStatsNumAchievementsAndHours() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 245908757;

    self.num_achievements = undefined;
    self.hours = undefined;

}

/**
 * @returns {Struct.SteamUserStatsStatInt} 
 */
function SteamUserStatsStatInt() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 852916042;

    self.ok = undefined;
    self.data = undefined;

}

/**
 * @returns {Struct.SteamUserStatsStatFloat} 
 */
function SteamUserStatsStatFloat() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1417783553;

    self.ok = undefined;
    self.data = undefined;

}

/**
 * @returns {Struct.SteamUserStatsUserAchievement} 
 */
function SteamUserStatsUserAchievement() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 701331071;

    self.ok = undefined;
    self.achieved = undefined;

}

/**
 * @returns {Struct.SteamUserStatsGlobalStatInt64} 
 */
function SteamUserStatsGlobalStatInt64() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1384202129;

    self.ok = undefined;
    self.data = undefined;

}

/**
 * @returns {Struct.SteamUserStatsGlobalStatDouble} 
 */
function SteamUserStatsGlobalStatDouble() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2244441207;

    self.ok = undefined;
    self.data = undefined;

}

/**
 * @returns {Struct.SteamUserStatsGlobalStatHistoryInt64} 
 */
function SteamUserStatsGlobalStatHistoryInt64() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1364153185;

    self.ok = undefined;
    self.data = undefined;

}

/**
 * @returns {Struct.SteamUserStatsGlobalStatHistoryDouble} 
 */
function SteamUserStatsGlobalStatHistoryDouble() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3586793191;

    self.ok = undefined;
    self.data = undefined;

}

/**
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 */
function SteamUserStatsDownloadedLeaderboardEntry() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4102278799;

    self.ok = undefined;
    self.steam_id_user = undefined;
    self.global_rank = undefined;
    self.score = undefined;
    self.details_count = undefined;
    self.details_written = undefined;
    self.bytes_written = undefined;

}

/**
 * @returns {Struct.SteamUserStatsRequestUserStatsResult} 
 */
function SteamUserStatsRequestUserStatsResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3971412107;

    self.game_id = undefined;
    self.steam_id_user = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserStatsLeaderboardFindResult} 
 */
function SteamUserStatsLeaderboardFindResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3474580816;

    self.leaderboard_handle = undefined;
    self.leaderboard_found = undefined;

}

/**
 * @returns {Struct.SteamUserStatsScoresDownloadedResult} 
 */
function SteamUserStatsScoresDownloadedResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3634037196;

    self.leaderboard_handle = undefined;
    self.entries_handle = undefined;
    self.entry_count = undefined;

}

/**
 * @returns {Struct.SteamUserStatsScoreUploadedResult} 
 */
function SteamUserStatsScoreUploadedResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 286504762;

    self.success = undefined;
    self.leaderboard_handle = undefined;
    self.score = undefined;
    self.score_changed = undefined;
    self.global_rank_new = undefined;
    self.global_rank_previous = undefined;

}

/**
 * @returns {Struct.SteamUserStatsNumberOfCurrentPlayersResult} 
 */
function SteamUserStatsNumberOfCurrentPlayersResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 339603487;

    self.success = undefined;
    self.players = undefined;

}

/**
 * @returns {Struct.SteamUserStatsGlobalAchievementPercentagesReadyResult} 
 */
function SteamUserStatsGlobalAchievementPercentagesReadyResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4040813178;

    self.game_id = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserStatsGlobalStatsReceivedResult} 
 */
function SteamUserStatsGlobalStatsReceivedResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1506123869;

    self.game_id = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserStatsAttachLeaderboardUgcResult} 
 */
function SteamUserStatsAttachLeaderboardUgcResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1507142583;

    self.ok = undefined;
    self.result = undefined;
    self.leaderboard_handle = undefined;

}

/**
 * @returns {Struct.SteamUserStatsUserStatsReceived} 
 */
function SteamUserStatsUserStatsReceived() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3865380428;

    self.game_id = undefined;
    self.steam_id_user = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserStatsUserStatsStored} 
 */
function SteamUserStatsUserStatsStored() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3431133144;

    self.game_id = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamUserStatsUserAchievementStored} 
 */
function SteamUserStatsUserAchievementStored() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2884583188;

    self.game_id = undefined;
    self.achievement_name = undefined;
    self.cur_progress = undefined;
    self.max_progress = undefined;

}

/**
 * @returns {Struct.SteamUserStatsIntMinMax} 
 */
function SteamUserStatsIntMinMax() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3033978254;

    self.min = undefined;
    self.max = undefined;
    self.ok = undefined;

}

/**
 * @returns {Struct.SteamUserStatsFloatMinMax} 
 */
function SteamUserStatsFloatMinMax() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3060986917;

    self.min = undefined;
    self.max = undefined;
    self.ok = undefined;

}

/**
 * @returns {Struct.SteamMusicPlaybackStatusHasChanged} 
 */
function SteamMusicPlaybackStatusHasChanged() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1445107601;

    self.playback_status = undefined;

}

/**
 * @returns {Struct.SteamMusicVolumeHasChanged} 
 */
function SteamMusicVolumeHasChanged() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3095150156;

    self.volume = undefined;

}

/**
 * @returns {Struct.SteamTimelineGamePhaseRecordingExists} 
 */
function SteamTimelineGamePhaseRecordingExists() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1026498664;

    self.phase_id = undefined;
    self.recording_ms = undefined;
    self.longest_clip_ms = undefined;
    self.clip_count = undefined;
    self.screenshot_count = undefined;

}

/**
 * @returns {Struct.SteamTimelineEventRecordingExists} 
 */
function SteamTimelineEventRecordingExists() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2357313499;

    self.event_id = undefined;
    self.recording_exists = undefined;

}

/**
 * @returns {Struct.SteamInventoryResultItems} 
 */
function SteamInventoryResultItems() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4004490304;

    self.ok = undefined;
    self.count = undefined;
    self.item_instance_ids = undefined;
    self.item_def_ids = undefined;
    self.quantities = undefined;
    self.flags = undefined;

}

/**
 * @returns {Struct.SteamInventoryDeserializeResult} 
 */
function SteamInventoryDeserializeResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1416794353;

    self.ok = undefined;
    self.result_handle = undefined;
    self.status = undefined;

}

/**
 * @returns {Struct.SteamInventorySerializeResult} 
 */
function SteamInventorySerializeResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2819554552;

    self.ok = undefined;
    self.bytes_written = undefined;

}

/**
 * @returns {Struct.SteamInventoryItemProperty} 
 */
function SteamInventoryItemProperty() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2133042107;

    self.ok = undefined;
    self.value = undefined;

}

/**
 * @returns {Struct.SteamInventoryItemsWithPrices} 
 */
function SteamInventoryItemsWithPrices() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3257099841;

    self.ok = undefined;
    self.count = undefined;
    self.item_def_ids = undefined;
    self.current_prices = undefined;
    self.base_prices = undefined;

}

/**
 * @returns {Struct.SteamInventoryDefProperty} 
 */
function SteamInventoryDefProperty() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1057110581;

    self.ok = undefined;
    self.value = undefined;

}

/**
 * @returns {Struct.SteamInventoryItemPrice} 
 */
function SteamInventoryItemPrice() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1342449503;

    self.ok = undefined;
    self.current_price = undefined;
    self.base_price = undefined;

}

/**
 * @returns {Struct.SteamInventoryResultReady} 
 */
function SteamInventoryResultReady() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 673237835;

    self.result_handle = undefined;
    self.result = undefined;

}

/**
 * @returns {Struct.SteamInventoryFullUpdate} 
 */
function SteamInventoryFullUpdate() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3981795813;

    self.result_handle = undefined;

}

/**
 * @returns {Struct.SteamInventoryDefinitionUpdate} 
 */
function SteamInventoryDefinitionUpdate() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4023159945;

    self.dummy = undefined;

}

/**
 * @returns {Struct.SteamInventoryStartPurchaseResult} 
 */
function SteamInventoryStartPurchaseResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 411774353;

    self.result = undefined;
    self.order_id = undefined;
    self.transaction_id = undefined;

}

/**
 * @returns {Struct.SteamInventoryRequestPricesResult} 
 */
function SteamInventoryRequestPricesResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2486814769;

    self.result = undefined;
    self.currency = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageFileNameAndSize} 
 */
function SteamRemoteStorageFileNameAndSize() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2152397209;

    self.ok = undefined;
    self.file_name = undefined;
    self.file_size = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageQuota} 
 */
function SteamRemoteStorageQuota() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1951566378;

    self.ok = undefined;
    self.total_bytes = undefined;
    self.available_bytes = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageUgcDetails} 
 */
function SteamRemoteStorageUgcDetails() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 448591303;

    self.ok = undefined;
    self.ugc_handle = undefined;
    self.app_id = undefined;
    self.size_in_bytes = undefined;
    self.file_name = undefined;
    self.steam_id_owner = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageFileShareResult} 
 */
function SteamRemoteStorageFileShareResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2353423750;

    self.result = undefined;
    self.ugc_handle = undefined;
    self.file_name = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageDownloadUgcResult} 
 */
function SteamRemoteStorageDownloadUgcResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2264363846;

    self.result = undefined;
    self.ugc_handle = undefined;
    self.app_id = undefined;
    self.size_in_bytes = undefined;
    self.file_name = undefined;
    self.steam_id_owner = undefined;

}

/**
 * @returns {Struct.SteamRemoteStoragePublishedFileSubscribed} 
 */
function SteamRemoteStoragePublishedFileSubscribed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3140138138;

    self.app_id = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamRemoteStoragePublishedFileUnsubscribed} 
 */
function SteamRemoteStoragePublishedFileUnsubscribed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2925934949;

    self.app_id = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageLocalFileChange} 
 */
function SteamRemoteStorageLocalFileChange() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 819464539;

    self.dummy = undefined;

}

/**
 * @returns {Struct.SteamRemoteStoragePublishFileResult} 
 */
function SteamRemoteStoragePublishFileResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2774424070;

    self.result = undefined;
    self.published_file_id = undefined;
    self.user_needs_to_accept_wla = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageUpdatePublishedFileResult} 
 */
function SteamRemoteStorageUpdatePublishedFileResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2453285188;

    self.result = undefined;
    self.user_needs_to_accept_wla = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageSubscribePublishedFileResult} 
 */
function SteamRemoteStorageSubscribePublishedFileResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 502205787;

    self.result = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamRemoteStorageUnsubscribePublishedFileResult} 
 */
function SteamRemoteStorageUnsubscribePublishedFileResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1258648592;

    self.result = undefined;
    self.published_file_id = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyCreated} 
 */
function SteamMatchmakingLobbyCreated() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3489071257;

    self.result = undefined;
    self.lobby_id = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyEnter} 
 */
function SteamMatchmakingLobbyEnter() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1535015755;

    self.lobby_id = undefined;
    self.chat_permissions = undefined;
    self.locked = undefined;
    self.response = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyMatchList} 
 */
function SteamMatchmakingLobbyMatchList() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3619150160;

    self.lobbies_count = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyDataUpdate} 
 */
function SteamMatchmakingLobbyDataUpdate() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1989451126;

    self.lobby_id = undefined;
    self.member_id = undefined;
    self.success = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyChatUpdate} 
 */
function SteamMatchmakingLobbyChatUpdate() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1632966816;

    self.lobby_id = undefined;
    self.user_changed_id = undefined;
    self.making_change_id = undefined;
    self.chat_member_state_change = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyChatMsg} 
 */
function SteamMatchmakingLobbyChatMsg() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 265153878;

    self.lobby_id = undefined;
    self.sender_id = undefined;
    self.chat_entry_type = undefined;
    self.message_size = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyGameCreated} 
 */
function SteamMatchmakingLobbyGameCreated() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3529517803;

    self.lobby_id = undefined;
    self.server_ip = undefined;
    self.server_port = undefined;
    self.game_server_id = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyInvite} 
 */
function SteamMatchmakingLobbyInvite() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3419406010;

    self.inviter_id = undefined;
    self.lobby_id = undefined;
    self.game_id = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyChatEntry} 
 */
function SteamMatchmakingLobbyChatEntry() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3831783599;

    self.ok = undefined;
    self.bytes = undefined;
    self.sender_id = undefined;
    self.entry_type = undefined;

}

/**
 * @returns {Struct.SteamMatchmakingLobbyGameServer} 
 */
function SteamMatchmakingLobbyGameServer() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2967224418;

    self.ok = undefined;
    self.ip = undefined;
    self.port = undefined;
    self.steam_id_gs = undefined;

}

/**
 * @returns {Struct.SteamNetworkingMessagesSessionRequest} 
 */
function SteamNetworkingMessagesSessionRequest() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 884635792;

    self.steam_id_remote = undefined;

}

/**
 * @returns {Struct.SteamNetworkingMessagesSessionFailed} 
 */
function SteamNetworkingMessagesSessionFailed() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1294767802;

    self.steam_id_remote = undefined;
    self.end_reason = undefined;
    self.debug_msg = undefined;

}

/**
 * @returns {Struct.SteamNetworkingMessagesReceived} 
 */
function SteamNetworkingMessagesReceived() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2694983162;

    self.ok = undefined;
    self.steam_id_remote = undefined;
    self.channel = undefined;
    self.bytes_written = undefined;
    self.send_flags = undefined;

}

/**
 * @returns {Struct.SteamNetworkingSocketsConnectionInfo} 
 */
function SteamNetworkingSocketsConnectionInfo() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 2071815473;

    self.user_data = undefined;
    self.end_reason = undefined;
    self.end_debug = undefined;
    self.connection_description = undefined;
    self.flags = undefined;
    self.state = undefined;
    self.steam_id_remote = undefined;
    self.addr_remote = undefined;

}

/**
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 */
function SteamNetworkingSocketsReceived() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1546586274;

    self.ok = undefined;
    self.conn = undefined;
    self.bytes_written = undefined;
    self.flags = undefined;

}

/**
 * @returns {Struct.SteamPartiesAvailableBeaconLocationCount} 
 */
function SteamPartiesAvailableBeaconLocationCount() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3480678726;

    self.ok = undefined;
    self.count = undefined;

}

/**
 * @returns {Struct.SteamPartiesAvailableBeaconLocations} 
 */
function SteamPartiesAvailableBeaconLocations() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1478496452;

    self.ok = undefined;
    self.count = undefined;
    self.location_types = undefined;
    self.location_ids = undefined;

}

/**
 * @returns {Struct.SteamPartiesCreateBeaconResult} 
 */
function SteamPartiesCreateBeaconResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3070717988;

    self.result = undefined;
    self.beacon_id = undefined;

}

/**
 * @returns {Struct.SteamPartiesJoinPartyResult} 
 */
function SteamPartiesJoinPartyResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 4054506566;

    self.result = undefined;
    self.beacon_id = undefined;
    self.beacon_owner_steam_id = undefined;
    self.connect_string = undefined;

}

/**
 * @returns {Struct.SteamPartiesChangeNumOpenSlotsResult} 
 */
function SteamPartiesChangeNumOpenSlotsResult() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 1710357493;

    self.result = undefined;

}

/**
 * @returns {Struct.SteamPartiesReservationNotification} 
 */
function SteamPartiesReservationNotification() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3095086470;

    self.beacon_id = undefined;
    self.joiner_steam_id = undefined;

}

/**
 * @returns {Struct.SteamPartiesBeaconDetails} 
 */
function SteamPartiesBeaconDetails() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 253007317;

    self.ok = undefined;
    self.beacon_owner_steam_id = undefined;
    self.location_type = undefined;
    self.location_id = undefined;
    self.metadata = undefined;

}

/**
 * @returns {Struct.SteamNetworkingSocketsStatusChanged} 
 */
function SteamNetworkingSocketsStatusChanged() constructor
{
    /**
     * Internally generated hash for quick validation
     * @ignore 
     */
    static __uid = 3310812365;

    self.conn = undefined;
    self.old_state = undefined;
    self.info = undefined;

}

// #####################################################################
// # Codecs
// #####################################################################

/**
 * @func __SteamId_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamId} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamId_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: id64, type: UInt64
        if (!is_numeric(self.id64)) show_error($"{_where} :: self.id64 expected number", true);
        buffer_write(_buffer, buffer_u64, self.id64);

        // field: account_id, type: UInt32
        if (!is_numeric(self.account_id)) show_error($"{_where} :: self.account_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.account_id);

        // field: account_instance, type: UInt32
        if (!is_numeric(self.account_instance)) show_error($"{_where} :: self.account_instance expected number", true);
        buffer_write(_buffer, buffer_u32, self.account_instance);

        // field: universe, type: enum SteamApiUniverse

        if (!is_numeric(self.universe)) show_error($"{_where} :: self.universe expected number", true);
        buffer_write(_buffer, buffer_u64, self.universe);

        // field: account_type, type: enum SteamApiAccountType

        if (!is_numeric(self.account_type)) show_error($"{_where} :: self.account_type expected number", true);
        buffer_write(_buffer, buffer_u64, self.account_type);

        // field: is_valid, type: Bool
        if (!is_bool(self.is_valid)) show_error($"{_where} :: self.is_valid expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_valid);

        // field: is_lobby, type: Bool
        if (!is_bool(self.is_lobby)) show_error($"{_where} :: self.is_lobby expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_lobby);

        // field: is_individual, type: Bool
        if (!is_bool(self.is_individual)) show_error($"{_where} :: self.is_individual expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_individual);

        // field: is_game_server, type: Bool
        if (!is_bool(self.is_game_server)) show_error($"{_where} :: self.is_game_server expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_game_server);

        // field: is_anon_game_server, type: Bool
        if (!is_bool(self.is_anon_game_server)) show_error($"{_where} :: self.is_anon_game_server expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_anon_game_server);

        // field: is_anon_user, type: Bool
        if (!is_bool(self.is_anon_user)) show_error($"{_where} :: self.is_anon_user expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_anon_user);

        // field: is_content_server, type: Bool
        if (!is_bool(self.is_content_server)) show_error($"{_where} :: self.is_content_server expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_content_server);

        // field: is_clan, type: Bool
        if (!is_bool(self.is_clan)) show_error($"{_where} :: self.is_clan expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_clan);

        // field: is_chat, type: Bool
        if (!is_bool(self.is_chat)) show_error($"{_where} :: self.is_chat expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_chat);

    }
}

/**
 * @func __SteamId_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamId} 
 * @ignore 
 */
function __SteamId_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamId();
    with (_inst)
    {
        // field: id64, type: UInt64
        self.id64 = buffer_read(_buffer, buffer_u64);

        // field: account_id, type: UInt32
        self.account_id = buffer_read(_buffer, buffer_u32);

        // field: account_instance, type: UInt32
        self.account_instance = buffer_read(_buffer, buffer_u32);

        // field: universe, type: enum SteamApiUniverse
        self.universe = buffer_read(_buffer, buffer_u64);

        // field: account_type, type: enum SteamApiAccountType
        self.account_type = buffer_read(_buffer, buffer_u64);

        // field: is_valid, type: Bool
        self.is_valid = buffer_read(_buffer, buffer_bool);

        // field: is_lobby, type: Bool
        self.is_lobby = buffer_read(_buffer, buffer_bool);

        // field: is_individual, type: Bool
        self.is_individual = buffer_read(_buffer, buffer_bool);

        // field: is_game_server, type: Bool
        self.is_game_server = buffer_read(_buffer, buffer_bool);

        // field: is_anon_game_server, type: Bool
        self.is_anon_game_server = buffer_read(_buffer, buffer_bool);

        // field: is_anon_user, type: Bool
        self.is_anon_user = buffer_read(_buffer, buffer_bool);

        // field: is_content_server, type: Bool
        self.is_content_server = buffer_read(_buffer, buffer_bool);

        // field: is_clan, type: Bool
        self.is_clan = buffer_read(_buffer, buffer_bool);

        // field: is_chat, type: Bool
        self.is_chat = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamFriendsGetFollowerCountResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsGetFollowerCountResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsGetFollowerCountResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: steam_id, type: UInt64
        if (!is_numeric(self.steam_id)) show_error($"{_where} :: self.steam_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id);

        // field: count, type: Int32
        if (!is_numeric(self.count)) show_error($"{_where} :: self.count expected number", true);
        buffer_write(_buffer, buffer_s32, self.count);

    }
}

/**
 * @func __SteamFriendsGetFollowerCountResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsGetFollowerCountResult} 
 * @ignore 
 */
function __SteamFriendsGetFollowerCountResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsGetFollowerCountResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: steam_id, type: UInt64
        self.steam_id = buffer_read(_buffer, buffer_u64);

        // field: count, type: Int32
        self.count = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsIsFollowingResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsIsFollowingResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsIsFollowingResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: steam_id, type: UInt64
        if (!is_numeric(self.steam_id)) show_error($"{_where} :: self.steam_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id);

        // field: is_following, type: Bool
        if (!is_bool(self.is_following)) show_error($"{_where} :: self.is_following expected bool", true);
        buffer_write(_buffer, buffer_bool, self.is_following);

    }
}

/**
 * @func __SteamFriendsIsFollowingResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsIsFollowingResult} 
 * @ignore 
 */
function __SteamFriendsIsFollowingResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsIsFollowingResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: steam_id, type: UInt64
        self.steam_id = buffer_read(_buffer, buffer_u64);

        // field: is_following, type: Bool
        self.is_following = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamFriendsEnumerateFollowingListResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsEnumerateFollowingListResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsEnumerateFollowingListResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: steam_ids, type: UInt64[]
        if (!is_array(self.steam_ids)) show_error($"{_where} :: self.steam_ids expected array", true);
        var _length = array_length(self.steam_ids);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.steam_ids[_i])) show_error($"{_where} :: self.steam_ids[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.steam_ids[_i]);
        }

        // field: results_returned, type: Int32
        if (!is_numeric(self.results_returned)) show_error($"{_where} :: self.results_returned expected number", true);
        buffer_write(_buffer, buffer_s32, self.results_returned);

        // field: total_result_count, type: Int32
        if (!is_numeric(self.total_result_count)) show_error($"{_where} :: self.total_result_count expected number", true);
        buffer_write(_buffer, buffer_s32, self.total_result_count);

    }
}

/**
 * @func __SteamFriendsEnumerateFollowingListResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsEnumerateFollowingListResult} 
 * @ignore 
 */
function __SteamFriendsEnumerateFollowingListResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsEnumerateFollowingListResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: steam_ids, type: UInt64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.steam_ids = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.steam_ids[_i] = buffer_read(_buffer, buffer_u64);
        }

        // field: results_returned, type: Int32
        self.results_returned = buffer_read(_buffer, buffer_s32);

        // field: total_result_count, type: Int32
        self.total_result_count = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsRequestClanOfficerListResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsRequestClanOfficerListResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsRequestClanOfficerListResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: clan_id, type: UInt64
        if (!is_numeric(self.clan_id)) show_error($"{_where} :: self.clan_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.clan_id);

        // field: officers, type: Int32
        if (!is_numeric(self.officers)) show_error($"{_where} :: self.officers expected number", true);
        buffer_write(_buffer, buffer_s32, self.officers);

    }
}

/**
 * @func __SteamFriendsRequestClanOfficerListResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsRequestClanOfficerListResult} 
 * @ignore 
 */
function __SteamFriendsRequestClanOfficerListResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsRequestClanOfficerListResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: clan_id, type: UInt64
        self.clan_id = buffer_read(_buffer, buffer_u64);

        // field: officers, type: Int32
        self.officers = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsDownloadClanActivityCountsResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsDownloadClanActivityCountsResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsDownloadClanActivityCountsResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamFriendsDownloadClanActivityCountsResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsDownloadClanActivityCountsResult} 
 * @ignore 
 */
function __SteamFriendsDownloadClanActivityCountsResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsDownloadClanActivityCountsResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsAvatarImageLoaded_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsAvatarImageLoaded} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsAvatarImageLoaded_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: steam_id_64, type: UInt64
        if (!is_numeric(self.steam_id_64)) show_error($"{_where} :: self.steam_id_64 expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_64);

        // field: image_handle, type: Int32
        if (!is_numeric(self.image_handle)) show_error($"{_where} :: self.image_handle expected number", true);
        buffer_write(_buffer, buffer_s32, self.image_handle);

        // field: width, type: Int32
        if (!is_numeric(self.width)) show_error($"{_where} :: self.width expected number", true);
        buffer_write(_buffer, buffer_s32, self.width);

        // field: height, type: Int32
        if (!is_numeric(self.height)) show_error($"{_where} :: self.height expected number", true);
        buffer_write(_buffer, buffer_s32, self.height);

    }
}

/**
 * @func __SteamFriendsAvatarImageLoaded_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsAvatarImageLoaded} 
 * @ignore 
 */
function __SteamFriendsAvatarImageLoaded_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsAvatarImageLoaded();
    with (_inst)
    {
        // field: steam_id_64, type: UInt64
        self.steam_id_64 = buffer_read(_buffer, buffer_u64);

        // field: image_handle, type: Int32
        self.image_handle = buffer_read(_buffer, buffer_s32);

        // field: width, type: Int32
        self.width = buffer_read(_buffer, buffer_s32);

        // field: height, type: Int32
        self.height = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsClanActivityCounts_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsClanActivityCounts} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsClanActivityCounts_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: online, type: Int32
        if (!is_numeric(self.online)) show_error($"{_where} :: self.online expected number", true);
        buffer_write(_buffer, buffer_s32, self.online);

        // field: in_game, type: Int32
        if (!is_numeric(self.in_game)) show_error($"{_where} :: self.in_game expected number", true);
        buffer_write(_buffer, buffer_s32, self.in_game);

        // field: chatting, type: Int32
        if (!is_numeric(self.chatting)) show_error($"{_where} :: self.chatting expected number", true);
        buffer_write(_buffer, buffer_s32, self.chatting);

    }
}

/**
 * @func __SteamFriendsClanActivityCounts_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsClanActivityCounts} 
 * @ignore 
 */
function __SteamFriendsClanActivityCounts_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsClanActivityCounts();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: online, type: Int32
        self.online = buffer_read(_buffer, buffer_s32);

        // field: in_game, type: Int32
        self.in_game = buffer_read(_buffer, buffer_s32);

        // field: chatting, type: Int32
        self.chatting = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsClanChatMessage_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsClanChatMessage} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsClanChatMessage_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: bytes_copied, type: Int32
        if (!is_numeric(self.bytes_copied)) show_error($"{_where} :: self.bytes_copied expected number", true);
        buffer_write(_buffer, buffer_s32, self.bytes_copied);

        // field: text, type: String
        if (!is_string(self.text)) show_error($"{_where} :: self.text expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.text));
        buffer_write(_buffer, buffer_string, self.text);

        // field: entry_type, type: enum SteamFriendsChatEntryType

        if (!is_numeric(self.entry_type)) show_error($"{_where} :: self.entry_type expected number", true);
        buffer_write(_buffer, buffer_u64, self.entry_type);

        // field: chatter_steam_id_64, type: UInt64
        if (!is_numeric(self.chatter_steam_id_64)) show_error($"{_where} :: self.chatter_steam_id_64 expected number", true);
        buffer_write(_buffer, buffer_u64, self.chatter_steam_id_64);

    }
}

/**
 * @func __SteamFriendsClanChatMessage_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsClanChatMessage} 
 * @ignore 
 */
function __SteamFriendsClanChatMessage_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsClanChatMessage();
    with (_inst)
    {
        // field: bytes_copied, type: Int32
        self.bytes_copied = buffer_read(_buffer, buffer_s32);

        // field: text, type: String
        buffer_read(_buffer, buffer_u32);
        self.text = buffer_read(_buffer, buffer_string);

        // field: entry_type, type: enum SteamFriendsChatEntryType
        self.entry_type = buffer_read(_buffer, buffer_u64);

        // field: chatter_steam_id_64, type: UInt64
        self.chatter_steam_id_64 = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamFriendsFriendGamePlayed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsFriendGamePlayed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsFriendGamePlayed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: game_id, type: UInt64
        if (!is_numeric(self.game_id)) show_error($"{_where} :: self.game_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_id);

        // field: game_ip_v4, type: UInt32
        if (!is_numeric(self.game_ip_v4)) show_error($"{_where} :: self.game_ip_v4 expected number", true);
        buffer_write(_buffer, buffer_u32, self.game_ip_v4);

        // field: game_port, type: UInt32
        if (!is_numeric(self.game_port)) show_error($"{_where} :: self.game_port expected number", true);
        buffer_write(_buffer, buffer_u32, self.game_port);

        // field: query_port, type: UInt32
        if (!is_numeric(self.query_port)) show_error($"{_where} :: self.query_port expected number", true);
        buffer_write(_buffer, buffer_u32, self.query_port);

        // field: lobby_steam_id_64, type: UInt64
        if (!is_numeric(self.lobby_steam_id_64)) show_error($"{_where} :: self.lobby_steam_id_64 expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_steam_id_64);

    }
}

/**
 * @func __SteamFriendsFriendGamePlayed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsFriendGamePlayed} 
 * @ignore 
 */
function __SteamFriendsFriendGamePlayed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsFriendGamePlayed();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: game_id, type: UInt64
        self.game_id = buffer_read(_buffer, buffer_u64);

        // field: game_ip_v4, type: UInt32
        self.game_ip_v4 = buffer_read(_buffer, buffer_u32);

        // field: game_port, type: UInt32
        self.game_port = buffer_read(_buffer, buffer_u32);

        // field: query_port, type: UInt32
        self.query_port = buffer_read(_buffer, buffer_u32);

        // field: lobby_steam_id_64, type: UInt64
        self.lobby_steam_id_64 = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamFriendsFriendMessage_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsFriendMessage} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsFriendMessage_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: bytes_copied, type: Int32
        if (!is_numeric(self.bytes_copied)) show_error($"{_where} :: self.bytes_copied expected number", true);
        buffer_write(_buffer, buffer_s32, self.bytes_copied);

        // field: entry_type, type: enum SteamFriendsChatEntryType

        if (!is_numeric(self.entry_type)) show_error($"{_where} :: self.entry_type expected number", true);
        buffer_write(_buffer, buffer_u64, self.entry_type);

        // field: data, type: String
        if (!is_string(self.data)) show_error($"{_where} :: self.data expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.data));
        buffer_write(_buffer, buffer_string, self.data);

    }
}

/**
 * @func __SteamFriendsFriendMessage_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsFriendMessage} 
 * @ignore 
 */
function __SteamFriendsFriendMessage_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsFriendMessage();
    with (_inst)
    {
        // field: bytes_copied, type: Int32
        self.bytes_copied = buffer_read(_buffer, buffer_s32);

        // field: entry_type, type: enum SteamFriendsChatEntryType
        self.entry_type = buffer_read(_buffer, buffer_u64);

        // field: data, type: String
        buffer_read(_buffer, buffer_u32);
        self.data = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamFriendsPersonaStateChange_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsPersonaStateChange} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsPersonaStateChange_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: steam_id, type: UInt64
        if (!is_numeric(self.steam_id)) show_error($"{_where} :: self.steam_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id);

        // field: change_flags, type: Int32
        if (!is_numeric(self.change_flags)) show_error($"{_where} :: self.change_flags expected number", true);
        buffer_write(_buffer, buffer_s32, self.change_flags);

    }
}

/**
 * @func __SteamFriendsPersonaStateChange_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsPersonaStateChange} 
 * @ignore 
 */
function __SteamFriendsPersonaStateChange_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsPersonaStateChange();
    with (_inst)
    {
        // field: steam_id, type: UInt64
        self.steam_id = buffer_read(_buffer, buffer_u64);

        // field: change_flags, type: Int32
        self.change_flags = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsGameOverlayActivated_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsGameOverlayActivated} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsGameOverlayActivated_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: active, type: Bool
        if (!is_bool(self.active)) show_error($"{_where} :: self.active expected bool", true);
        buffer_write(_buffer, buffer_bool, self.active);

    }
}

/**
 * @func __SteamFriendsGameOverlayActivated_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsGameOverlayActivated} 
 * @ignore 
 */
function __SteamFriendsGameOverlayActivated_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsGameOverlayActivated();
    with (_inst)
    {
        // field: active, type: Bool
        self.active = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamFriendsGameRichPresenceJoinRequested_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsGameRichPresenceJoinRequested} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsGameRichPresenceJoinRequested_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: steam_id_friend, type: UInt64
        if (!is_numeric(self.steam_id_friend)) show_error($"{_where} :: self.steam_id_friend expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_friend);

        // field: connect_string, type: String
        if (!is_string(self.connect_string)) show_error($"{_where} :: self.connect_string expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.connect_string));
        buffer_write(_buffer, buffer_string, self.connect_string);

    }
}

/**
 * @func __SteamFriendsGameRichPresenceJoinRequested_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsGameRichPresenceJoinRequested} 
 * @ignore 
 */
function __SteamFriendsGameRichPresenceJoinRequested_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsGameRichPresenceJoinRequested();
    with (_inst)
    {
        // field: steam_id_friend, type: UInt64
        self.steam_id_friend = buffer_read(_buffer, buffer_u64);

        // field: connect_string, type: String
        buffer_read(_buffer, buffer_u32);
        self.connect_string = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamFriendsGameLobbyJoinRequested_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsGameLobbyJoinRequested} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsGameLobbyJoinRequested_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: steam_id_friend, type: UInt64
        if (!is_numeric(self.steam_id_friend)) show_error($"{_where} :: self.steam_id_friend expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_friend);

        // field: steam_id_lobby, type: UInt64
        if (!is_numeric(self.steam_id_lobby)) show_error($"{_where} :: self.steam_id_lobby expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_lobby);

    }
}

/**
 * @func __SteamFriendsGameLobbyJoinRequested_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsGameLobbyJoinRequested} 
 * @ignore 
 */
function __SteamFriendsGameLobbyJoinRequested_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsGameLobbyJoinRequested();
    with (_inst)
    {
        // field: steam_id_friend, type: UInt64
        self.steam_id_friend = buffer_read(_buffer, buffer_u64);

        // field: steam_id_lobby, type: UInt64
        self.steam_id_lobby = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamFriendsFriendRichPresenceUpdate_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsFriendRichPresenceUpdate} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsFriendRichPresenceUpdate_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: steam_id_friend, type: UInt64
        if (!is_numeric(self.steam_id_friend)) show_error($"{_where} :: self.steam_id_friend expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_friend);

        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

    }
}

/**
 * @func __SteamFriendsFriendRichPresenceUpdate_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsFriendRichPresenceUpdate} 
 * @ignore 
 */
function __SteamFriendsFriendRichPresenceUpdate_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsFriendRichPresenceUpdate();
    with (_inst)
    {
        // field: steam_id_friend, type: UInt64
        self.steam_id_friend = buffer_read(_buffer, buffer_u64);

        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamFriendsGameServerChangeRequested_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamFriendsGameServerChangeRequested} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamFriendsGameServerChangeRequested_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: server, type: String
        if (!is_string(self.server)) show_error($"{_where} :: self.server expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.server));
        buffer_write(_buffer, buffer_string, self.server);

        // field: password, type: String
        if (!is_string(self.password)) show_error($"{_where} :: self.password expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.password));
        buffer_write(_buffer, buffer_string, self.password);

    }
}

/**
 * @func __SteamFriendsGameServerChangeRequested_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamFriendsGameServerChangeRequested} 
 * @ignore 
 */
function __SteamFriendsGameServerChangeRequested_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamFriendsGameServerChangeRequested();
    with (_inst)
    {
        // field: server, type: String
        buffer_read(_buffer, buffer_u32);
        self.server = buffer_read(_buffer, buffer_string);

        // field: password, type: String
        buffer_read(_buffer, buffer_u32);
        self.password = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsFileDetailsResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsFileDetailsResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsFileDetailsResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: file_size, type: Int32
        if (!is_numeric(self.file_size)) show_error($"{_where} :: self.file_size expected number", true);
        buffer_write(_buffer, buffer_s32, self.file_size);

        // field: flags, type: Int32
        if (!is_numeric(self.flags)) show_error($"{_where} :: self.flags expected number", true);
        buffer_write(_buffer, buffer_s32, self.flags);

        // field: sha1, type: String
        if (!is_string(self.sha1)) show_error($"{_where} :: self.sha1 expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.sha1));
        buffer_write(_buffer, buffer_string, self.sha1);

    }
}

/**
 * @func __SteamAppsFileDetailsResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsFileDetailsResult} 
 * @ignore 
 */
function __SteamAppsFileDetailsResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsFileDetailsResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: file_size, type: Int32
        self.file_size = buffer_read(_buffer, buffer_s32);

        // field: flags, type: Int32
        self.flags = buffer_read(_buffer, buffer_s32);

        // field: sha1, type: String
        buffer_read(_buffer, buffer_u32);
        self.sha1 = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsDlcData_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsDlcData} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsDlcData_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: available, type: Bool
        if (!is_bool(self.available)) show_error($"{_where} :: self.available expected bool", true);
        buffer_write(_buffer, buffer_bool, self.available);

        // field: name, type: String
        if (!is_string(self.name)) show_error($"{_where} :: self.name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.name));
        buffer_write(_buffer, buffer_string, self.name);

    }
}

/**
 * @func __SteamAppsDlcData_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsDlcData} 
 * @ignore 
 */
function __SteamAppsDlcData_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsDlcData();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: available, type: Bool
        self.available = buffer_read(_buffer, buffer_bool);

        // field: name, type: String
        buffer_read(_buffer, buffer_u32);
        self.name = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsTimedTrialStatus_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsTimedTrialStatus} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsTimedTrialStatus_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: seconds_allowed, type: UInt32
        if (!is_numeric(self.seconds_allowed)) show_error($"{_where} :: self.seconds_allowed expected number", true);
        buffer_write(_buffer, buffer_u32, self.seconds_allowed);

        // field: seconds_played, type: UInt32
        if (!is_numeric(self.seconds_played)) show_error($"{_where} :: self.seconds_played expected number", true);
        buffer_write(_buffer, buffer_u32, self.seconds_played);

    }
}

/**
 * @func __SteamAppsTimedTrialStatus_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsTimedTrialStatus} 
 * @ignore 
 */
function __SteamAppsTimedTrialStatus_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsTimedTrialStatus();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: seconds_allowed, type: UInt32
        self.seconds_allowed = buffer_read(_buffer, buffer_u32);

        // field: seconds_played, type: UInt32
        self.seconds_played = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamAppsInstallDir_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsInstallDir} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsInstallDir_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: bytes_copied, type: UInt32
        if (!is_numeric(self.bytes_copied)) show_error($"{_where} :: self.bytes_copied expected number", true);
        buffer_write(_buffer, buffer_u32, self.bytes_copied);

        // field: path, type: String
        if (!is_string(self.path)) show_error($"{_where} :: self.path expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.path));
        buffer_write(_buffer, buffer_string, self.path);

    }
}

/**
 * @func __SteamAppsInstallDir_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsInstallDir} 
 * @ignore 
 */
function __SteamAppsInstallDir_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsInstallDir();
    with (_inst)
    {
        // field: bytes_copied, type: UInt32
        self.bytes_copied = buffer_read(_buffer, buffer_u32);

        // field: path, type: String
        buffer_read(_buffer, buffer_u32);
        self.path = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsBetaName_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsBetaName} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsBetaName_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: name, type: String
        if (!is_string(self.name)) show_error($"{_where} :: self.name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.name));
        buffer_write(_buffer, buffer_string, self.name);

    }
}

/**
 * @func __SteamAppsBetaName_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsBetaName} 
 * @ignore 
 */
function __SteamAppsBetaName_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsBetaName();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: name, type: String
        buffer_read(_buffer, buffer_u32);
        self.name = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsNumBetas_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsNumBetas} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsNumBetas_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: total, type: Int32
        if (!is_numeric(self.total)) show_error($"{_where} :: self.total expected number", true);
        buffer_write(_buffer, buffer_s32, self.total);

        // field: available, type: Int32
        if (!is_numeric(self.available)) show_error($"{_where} :: self.available expected number", true);
        buffer_write(_buffer, buffer_s32, self.available);

        // field: private_count, type: Int32
        if (!is_numeric(self.private_count)) show_error($"{_where} :: self.private_count expected number", true);
        buffer_write(_buffer, buffer_s32, self.private_count);

    }
}

/**
 * @func __SteamAppsNumBetas_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsNumBetas} 
 * @ignore 
 */
function __SteamAppsNumBetas_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsNumBetas();
    with (_inst)
    {
        // field: total, type: Int32
        self.total = buffer_read(_buffer, buffer_s32);

        // field: available, type: Int32
        self.available = buffer_read(_buffer, buffer_s32);

        // field: private_count, type: Int32
        self.private_count = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamAppsBetaInfo_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsBetaInfo} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsBetaInfo_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: flags, type: UInt32
        if (!is_numeric(self.flags)) show_error($"{_where} :: self.flags expected number", true);
        buffer_write(_buffer, buffer_u32, self.flags);

        // field: build_id, type: UInt32
        if (!is_numeric(self.build_id)) show_error($"{_where} :: self.build_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.build_id);

        // field: beta_name, type: String
        if (!is_string(self.beta_name)) show_error($"{_where} :: self.beta_name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.beta_name));
        buffer_write(_buffer, buffer_string, self.beta_name);

        // field: description, type: String
        if (!is_string(self.description)) show_error($"{_where} :: self.description expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.description));
        buffer_write(_buffer, buffer_string, self.description);

    }
}

/**
 * @func __SteamAppsBetaInfo_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsBetaInfo} 
 * @ignore 
 */
function __SteamAppsBetaInfo_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsBetaInfo();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: flags, type: UInt32
        self.flags = buffer_read(_buffer, buffer_u32);

        // field: build_id, type: UInt32
        self.build_id = buffer_read(_buffer, buffer_u32);

        // field: beta_name, type: String
        buffer_read(_buffer, buffer_u32);
        self.beta_name = buffer_read(_buffer, buffer_string);

        // field: description, type: String
        buffer_read(_buffer, buffer_u32);
        self.description = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsDlcDownloadProgress_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsDlcDownloadProgress} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsDlcDownloadProgress_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: bytes_downloaded, type: UInt64
        if (!is_numeric(self.bytes_downloaded)) show_error($"{_where} :: self.bytes_downloaded expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_downloaded);

        // field: bytes_total, type: UInt64
        if (!is_numeric(self.bytes_total)) show_error($"{_where} :: self.bytes_total expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_total);

    }
}

/**
 * @func __SteamAppsDlcDownloadProgress_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsDlcDownloadProgress} 
 * @ignore 
 */
function __SteamAppsDlcDownloadProgress_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsDlcDownloadProgress();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: bytes_downloaded, type: UInt64
        self.bytes_downloaded = buffer_read(_buffer, buffer_u64);

        // field: bytes_total, type: UInt64
        self.bytes_total = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamAppsLaunchCommandLine_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsLaunchCommandLine} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsLaunchCommandLine_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: bytes_copied, type: Int32
        if (!is_numeric(self.bytes_copied)) show_error($"{_where} :: self.bytes_copied expected number", true);
        buffer_write(_buffer, buffer_s32, self.bytes_copied);

        // field: command_line, type: String
        if (!is_string(self.command_line)) show_error($"{_where} :: self.command_line expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.command_line));
        buffer_write(_buffer, buffer_string, self.command_line);

    }
}

/**
 * @func __SteamAppsLaunchCommandLine_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsLaunchCommandLine} 
 * @ignore 
 */
function __SteamAppsLaunchCommandLine_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsLaunchCommandLine();
    with (_inst)
    {
        // field: bytes_copied, type: Int32
        self.bytes_copied = buffer_read(_buffer, buffer_s32);

        // field: command_line, type: String
        buffer_read(_buffer, buffer_u32);
        self.command_line = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsInstallSize_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsInstallSize} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsInstallSize_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: bytes_install_size, type: UInt64
        if (!is_numeric(self.bytes_install_size)) show_error($"{_where} :: self.bytes_install_size expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_install_size);

        // field: bytes_download_size, type: UInt64
        if (!is_numeric(self.bytes_download_size)) show_error($"{_where} :: self.bytes_download_size expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_download_size);

    }
}

/**
 * @func __SteamAppsInstallSize_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsInstallSize} 
 * @ignore 
 */
function __SteamAppsInstallSize_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsInstallSize();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: bytes_install_size, type: UInt64
        self.bytes_install_size = buffer_read(_buffer, buffer_u64);

        // field: bytes_download_size, type: UInt64
        self.bytes_download_size = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamAppsDlcInstallDir_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsDlcInstallDir} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsDlcInstallDir_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: bytes_copied, type: UInt32
        if (!is_numeric(self.bytes_copied)) show_error($"{_where} :: self.bytes_copied expected number", true);
        buffer_write(_buffer, buffer_u32, self.bytes_copied);

        // field: path, type: String
        if (!is_string(self.path)) show_error($"{_where} :: self.path expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.path));
        buffer_write(_buffer, buffer_string, self.path);

    }
}

/**
 * @func __SteamAppsDlcInstallDir_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsDlcInstallDir} 
 * @ignore 
 */
function __SteamAppsDlcInstallDir_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsDlcInstallDir();
    with (_inst)
    {
        // field: bytes_copied, type: UInt32
        self.bytes_copied = buffer_read(_buffer, buffer_u32);

        // field: path, type: String
        buffer_read(_buffer, buffer_u32);
        self.path = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsLanguageInfo_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsLanguageInfo} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsLanguageInfo_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: language_name, type: String
        if (!is_string(self.language_name)) show_error($"{_where} :: self.language_name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.language_name));
        buffer_write(_buffer, buffer_string, self.language_name);

        // field: language_code, type: String
        if (!is_string(self.language_code)) show_error($"{_where} :: self.language_code expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.language_code));
        buffer_write(_buffer, buffer_string, self.language_code);

    }
}

/**
 * @func __SteamAppsLanguageInfo_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsLanguageInfo} 
 * @ignore 
 */
function __SteamAppsLanguageInfo_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsLanguageInfo();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: language_name, type: String
        buffer_read(_buffer, buffer_u32);
        self.language_name = buffer_read(_buffer, buffer_string);

        // field: language_code, type: String
        buffer_read(_buffer, buffer_u32);
        self.language_code = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamAppsDlcInstalled_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamAppsDlcInstalled} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamAppsDlcInstalled_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

    }
}

/**
 * @func __SteamAppsDlcInstalled_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamAppsDlcInstalled} 
 * @ignore 
 */
function __SteamAppsDlcInstalled_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamAppsDlcInstalled();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamScreenshotsScreenshotReady_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamScreenshotsScreenshotReady} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamScreenshotsScreenshotReady_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: screenshot_handle, type: UInt32
        if (!is_numeric(self.screenshot_handle)) show_error($"{_where} :: self.screenshot_handle expected number", true);
        buffer_write(_buffer, buffer_u32, self.screenshot_handle);

        // field: result, type: enum SteamApiResult

        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_u64, self.result);

    }
}

/**
 * @func __SteamScreenshotsScreenshotReady_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamScreenshotsScreenshotReady} 
 * @ignore 
 */
function __SteamScreenshotsScreenshotReady_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamScreenshotsScreenshotReady();
    with (_inst)
    {
        // field: screenshot_handle, type: UInt32
        self.screenshot_handle = buffer_read(_buffer, buffer_u32);

        // field: result, type: enum SteamApiResult
        self.result = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUserStoreAuthUrlResponse_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStoreAuthUrlResponse} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStoreAuthUrlResponse_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: url, type: String
        if (!is_string(self.url)) show_error($"{_where} :: self.url expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.url));
        buffer_write(_buffer, buffer_string, self.url);

    }
}

/**
 * @func __SteamUserStoreAuthUrlResponse_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStoreAuthUrlResponse} 
 * @ignore 
 */
function __SteamUserStoreAuthUrlResponse_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStoreAuthUrlResponse();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: url, type: String
        buffer_read(_buffer, buffer_u32);
        self.url = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUserEncryptedAppTicketResponse_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserEncryptedAppTicketResponse} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserEncryptedAppTicketResponse_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUserEncryptedAppTicketResponse_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserEncryptedAppTicketResponse} 
 * @ignore 
 */
function __SteamUserEncryptedAppTicketResponse_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserEncryptedAppTicketResponse();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserDurationControl_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserDurationControl} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserDurationControl_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: applicable, type: Bool
        if (!is_bool(self.applicable)) show_error($"{_where} :: self.applicable expected bool", true);
        buffer_write(_buffer, buffer_bool, self.applicable);

        // field: csecs_last_5h, type: Int32
        if (!is_numeric(self.csecs_last_5h)) show_error($"{_where} :: self.csecs_last_5h expected number", true);
        buffer_write(_buffer, buffer_s32, self.csecs_last_5h);

        // field: progress, type: Int32
        if (!is_numeric(self.progress)) show_error($"{_where} :: self.progress expected number", true);
        buffer_write(_buffer, buffer_s32, self.progress);

        // field: notification, type: Int32
        if (!is_numeric(self.notification)) show_error($"{_where} :: self.notification expected number", true);
        buffer_write(_buffer, buffer_s32, self.notification);

    }
}

/**
 * @func __SteamUserDurationControl_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserDurationControl} 
 * @ignore 
 */
function __SteamUserDurationControl_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserDurationControl();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: applicable, type: Bool
        self.applicable = buffer_read(_buffer, buffer_bool);

        // field: csecs_last_5h, type: Int32
        self.csecs_last_5h = buffer_read(_buffer, buffer_s32);

        // field: progress, type: Int32
        self.progress = buffer_read(_buffer, buffer_s32);

        // field: notification, type: Int32
        self.notification = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserMarketEligibilityResponse_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserMarketEligibilityResponse} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserMarketEligibilityResponse_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: allowed, type: Bool
        if (!is_bool(self.allowed)) show_error($"{_where} :: self.allowed expected bool", true);
        buffer_write(_buffer, buffer_bool, self.allowed);

        // field: not_allowed_reason, type: Int32
        if (!is_numeric(self.not_allowed_reason)) show_error($"{_where} :: self.not_allowed_reason expected number", true);
        buffer_write(_buffer, buffer_s32, self.not_allowed_reason);

        // field: allowed_at_time, type: UInt32
        if (!is_numeric(self.allowed_at_time)) show_error($"{_where} :: self.allowed_at_time expected number", true);
        buffer_write(_buffer, buffer_u32, self.allowed_at_time);

        // field: steam_purchase_time, type: UInt32
        if (!is_numeric(self.steam_purchase_time)) show_error($"{_where} :: self.steam_purchase_time expected number", true);
        buffer_write(_buffer, buffer_u32, self.steam_purchase_time);

        // field: day_steam_guard_required_days, type: UInt32
        if (!is_numeric(self.day_steam_guard_required_days)) show_error($"{_where} :: self.day_steam_guard_required_days expected number", true);
        buffer_write(_buffer, buffer_u32, self.day_steam_guard_required_days);

        // field: day_new_device_cooldown, type: UInt32
        if (!is_numeric(self.day_new_device_cooldown)) show_error($"{_where} :: self.day_new_device_cooldown expected number", true);
        buffer_write(_buffer, buffer_u32, self.day_new_device_cooldown);

    }
}

/**
 * @func __SteamUserMarketEligibilityResponse_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserMarketEligibilityResponse} 
 * @ignore 
 */
function __SteamUserMarketEligibilityResponse_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserMarketEligibilityResponse();
    with (_inst)
    {
        // field: allowed, type: Bool
        self.allowed = buffer_read(_buffer, buffer_bool);

        // field: not_allowed_reason, type: Int32
        self.not_allowed_reason = buffer_read(_buffer, buffer_s32);

        // field: allowed_at_time, type: UInt32
        self.allowed_at_time = buffer_read(_buffer, buffer_u32);

        // field: steam_purchase_time, type: UInt32
        self.steam_purchase_time = buffer_read(_buffer, buffer_u32);

        // field: day_steam_guard_required_days, type: UInt32
        self.day_steam_guard_required_days = buffer_read(_buffer, buffer_u32);

        // field: day_new_device_cooldown, type: UInt32
        self.day_new_device_cooldown = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamNetworkingIdentity_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamNetworkingIdentity} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamNetworkingIdentity_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: type, type: enum SteamNetworkingIdentityType

        if (!is_numeric(self.type)) show_error($"{_where} :: self.type expected number", true);
        buffer_write(_buffer, buffer_u64, self.type);

        // field: steam_id, type: UInt64
        if (!is_numeric(self.steam_id)) show_error($"{_where} :: self.steam_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id);

        // field: ip, type: String
        if (!is_string(self.ip)) show_error($"{_where} :: self.ip expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.ip));
        buffer_write(_buffer, buffer_string, self.ip);

        // field: port, type: UInt32
        if (!is_numeric(self.port)) show_error($"{_where} :: self.port expected number", true);
        buffer_write(_buffer, buffer_u32, self.port);

        // field: generic_string, type: String
        if (!is_string(self.generic_string)) show_error($"{_where} :: self.generic_string expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.generic_string));
        buffer_write(_buffer, buffer_string, self.generic_string);

    }
}

/**
 * @func __SteamNetworkingIdentity_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingIdentity} 
 * @ignore 
 */
function __SteamNetworkingIdentity_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamNetworkingIdentity();
    with (_inst)
    {
        // field: type, type: enum SteamNetworkingIdentityType
        self.type = buffer_read(_buffer, buffer_u64);

        // field: steam_id, type: UInt64
        self.steam_id = buffer_read(_buffer, buffer_u64);

        // field: ip, type: String
        buffer_read(_buffer, buffer_u32);
        self.ip = buffer_read(_buffer, buffer_string);

        // field: port, type: UInt32
        self.port = buffer_read(_buffer, buffer_u32);

        // field: generic_string, type: String
        buffer_read(_buffer, buffer_u32);
        self.generic_string = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUserAuthSessionTicket_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserAuthSessionTicket} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserAuthSessionTicket_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: auth_ticket_handle, type: UInt32
        if (!is_numeric(self.auth_ticket_handle)) show_error($"{_where} :: self.auth_ticket_handle expected number", true);
        buffer_write(_buffer, buffer_u32, self.auth_ticket_handle);

        // field: ticket_size, type: UInt32
        if (!is_numeric(self.ticket_size)) show_error($"{_where} :: self.ticket_size expected number", true);
        buffer_write(_buffer, buffer_u32, self.ticket_size);

    }
}

/**
 * @func __SteamUserAuthSessionTicket_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserAuthSessionTicket} 
 * @ignore 
 */
function __SteamUserAuthSessionTicket_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserAuthSessionTicket();
    with (_inst)
    {
        // field: auth_ticket_handle, type: UInt32
        self.auth_ticket_handle = buffer_read(_buffer, buffer_u32);

        // field: ticket_size, type: UInt32
        self.ticket_size = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUserAvailableVoice_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserAvailableVoice} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserAvailableVoice_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: enum SteamApiVoiceResult

        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_u64, self.result);

        // field: compressed_bytes, type: UInt32
        if (!is_numeric(self.compressed_bytes)) show_error($"{_where} :: self.compressed_bytes expected number", true);
        buffer_write(_buffer, buffer_u32, self.compressed_bytes);

        // field: uncompressed_bytes, type: UInt32
        if (!is_numeric(self.uncompressed_bytes)) show_error($"{_where} :: self.uncompressed_bytes expected number", true);
        buffer_write(_buffer, buffer_u32, self.uncompressed_bytes);

    }
}

/**
 * @func __SteamUserAvailableVoice_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserAvailableVoice} 
 * @ignore 
 */
function __SteamUserAvailableVoice_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserAvailableVoice();
    with (_inst)
    {
        // field: result, type: enum SteamApiVoiceResult
        self.result = buffer_read(_buffer, buffer_u64);

        // field: compressed_bytes, type: UInt32
        self.compressed_bytes = buffer_read(_buffer, buffer_u32);

        // field: uncompressed_bytes, type: UInt32
        self.uncompressed_bytes = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUserGetVoiceResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserGetVoiceResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserGetVoiceResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: enum SteamApiVoiceResult

        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_u64, self.result);

        // field: written_compressed, type: UInt32
        if (!is_numeric(self.written_compressed)) show_error($"{_where} :: self.written_compressed expected number", true);
        buffer_write(_buffer, buffer_u32, self.written_compressed);

        // field: written_uncompressed, type: UInt32
        if (!is_numeric(self.written_uncompressed)) show_error($"{_where} :: self.written_uncompressed expected number", true);
        buffer_write(_buffer, buffer_u32, self.written_uncompressed);

    }
}

/**
 * @func __SteamUserGetVoiceResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserGetVoiceResult} 
 * @ignore 
 */
function __SteamUserGetVoiceResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserGetVoiceResult();
    with (_inst)
    {
        // field: result, type: enum SteamApiVoiceResult
        self.result = buffer_read(_buffer, buffer_u64);

        // field: written_compressed, type: UInt32
        self.written_compressed = buffer_read(_buffer, buffer_u32);

        // field: written_uncompressed, type: UInt32
        self.written_uncompressed = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUserGameConnectionToken_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserGameConnectionToken} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserGameConnectionToken_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: bytes_written, type: Int32
        if (!is_numeric(self.bytes_written)) show_error($"{_where} :: self.bytes_written expected number", true);
        buffer_write(_buffer, buffer_s32, self.bytes_written);

    }
}

/**
 * @func __SteamUserGameConnectionToken_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserGameConnectionToken} 
 * @ignore 
 */
function __SteamUserGameConnectionToken_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserGameConnectionToken();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: bytes_written, type: Int32
        self.bytes_written = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserDataFolder_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserDataFolder} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserDataFolder_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: path, type: String
        if (!is_string(self.path)) show_error($"{_where} :: self.path expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.path));
        buffer_write(_buffer, buffer_string, self.path);

    }
}

/**
 * @func __SteamUserDataFolder_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserDataFolder} 
 * @ignore 
 */
function __SteamUserDataFolder_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserDataFolder();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: path, type: String
        buffer_read(_buffer, buffer_u32);
        self.path = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUserEncryptedAppTicket_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserEncryptedAppTicket} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserEncryptedAppTicket_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: ticket_size, type: UInt32
        if (!is_numeric(self.ticket_size)) show_error($"{_where} :: self.ticket_size expected number", true);
        buffer_write(_buffer, buffer_u32, self.ticket_size);

    }
}

/**
 * @func __SteamUserEncryptedAppTicket_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserEncryptedAppTicket} 
 * @ignore 
 */
function __SteamUserEncryptedAppTicket_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserEncryptedAppTicket();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: ticket_size, type: UInt32
        self.ticket_size = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUserSteamServersConnected_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserSteamServersConnected} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserSteamServersConnected_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: dummy, type: Int32
        if (!is_numeric(self.dummy)) show_error($"{_where} :: self.dummy expected number", true);
        buffer_write(_buffer, buffer_s32, self.dummy);

    }
}

/**
 * @func __SteamUserSteamServersConnected_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserSteamServersConnected} 
 * @ignore 
 */
function __SteamUserSteamServersConnected_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserSteamServersConnected();
    with (_inst)
    {
        // field: dummy, type: Int32
        self.dummy = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserSteamServersDisconnected_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserSteamServersDisconnected} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserSteamServersDisconnected_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUserSteamServersDisconnected_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserSteamServersDisconnected} 
 * @ignore 
 */
function __SteamUserSteamServersDisconnected_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserSteamServersDisconnected();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserSteamServerConnectFailure_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserSteamServerConnectFailure} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserSteamServerConnectFailure_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: still_retrying, type: Bool
        if (!is_bool(self.still_retrying)) show_error($"{_where} :: self.still_retrying expected bool", true);
        buffer_write(_buffer, buffer_bool, self.still_retrying);

    }
}

/**
 * @func __SteamUserSteamServerConnectFailure_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserSteamServerConnectFailure} 
 * @ignore 
 */
function __SteamUserSteamServerConnectFailure_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserSteamServerConnectFailure();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: still_retrying, type: Bool
        self.still_retrying = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUserClientGameServerDeny_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserClientGameServerDeny} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserClientGameServerDeny_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: game_server_ip, type: UInt32
        if (!is_numeric(self.game_server_ip)) show_error($"{_where} :: self.game_server_ip expected number", true);
        buffer_write(_buffer, buffer_u32, self.game_server_ip);

        // field: game_server_port, type: UInt32
        if (!is_numeric(self.game_server_port)) show_error($"{_where} :: self.game_server_port expected number", true);
        buffer_write(_buffer, buffer_u32, self.game_server_port);

        // field: secure, type: Bool
        if (!is_bool(self.secure)) show_error($"{_where} :: self.secure expected bool", true);
        buffer_write(_buffer, buffer_bool, self.secure);

        // field: reason, type: Int32
        if (!is_numeric(self.reason)) show_error($"{_where} :: self.reason expected number", true);
        buffer_write(_buffer, buffer_s32, self.reason);

    }
}

/**
 * @func __SteamUserClientGameServerDeny_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserClientGameServerDeny} 
 * @ignore 
 */
function __SteamUserClientGameServerDeny_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserClientGameServerDeny();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: game_server_ip, type: UInt32
        self.game_server_ip = buffer_read(_buffer, buffer_u32);

        // field: game_server_port, type: UInt32
        self.game_server_port = buffer_read(_buffer, buffer_u32);

        // field: secure, type: Bool
        self.secure = buffer_read(_buffer, buffer_bool);

        // field: reason, type: Int32
        self.reason = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserLicensesUpdated_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserLicensesUpdated} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserLicensesUpdated_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: dummy, type: Int32
        if (!is_numeric(self.dummy)) show_error($"{_where} :: self.dummy expected number", true);
        buffer_write(_buffer, buffer_s32, self.dummy);

    }
}

/**
 * @func __SteamUserLicensesUpdated_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserLicensesUpdated} 
 * @ignore 
 */
function __SteamUserLicensesUpdated_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserLicensesUpdated();
    with (_inst)
    {
        // field: dummy, type: Int32
        self.dummy = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserMicroTxnAuthorizationResponse_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserMicroTxnAuthorizationResponse} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserMicroTxnAuthorizationResponse_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: order_id, type: UInt64
        if (!is_numeric(self.order_id)) show_error($"{_where} :: self.order_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.order_id);

        // field: authorized, type: Bool
        if (!is_bool(self.authorized)) show_error($"{_where} :: self.authorized expected bool", true);
        buffer_write(_buffer, buffer_bool, self.authorized);

    }
}

/**
 * @func __SteamUserMicroTxnAuthorizationResponse_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserMicroTxnAuthorizationResponse} 
 * @ignore 
 */
function __SteamUserMicroTxnAuthorizationResponse_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserMicroTxnAuthorizationResponse();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: order_id, type: UInt64
        self.order_id = buffer_read(_buffer, buffer_u64);

        // field: authorized, type: Bool
        self.authorized = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUtilsApiCallResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsApiCallResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsApiCallResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: failed, type: Bool
        if (!is_bool(self.failed)) show_error($"{_where} :: self.failed expected bool", true);
        buffer_write(_buffer, buffer_bool, self.failed);

    }
}

/**
 * @func __SteamUtilsApiCallResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsApiCallResult} 
 * @ignore 
 */
function __SteamUtilsApiCallResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsApiCallResult();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: failed, type: Bool
        self.failed = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUtilsCheckFileSignatureResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsCheckFileSignatureResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsCheckFileSignatureResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUtilsCheckFileSignatureResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsCheckFileSignatureResult} 
 * @ignore 
 */
function __SteamUtilsCheckFileSignatureResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsCheckFileSignatureResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUtilsLowBatteryPower_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsLowBatteryPower} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsLowBatteryPower_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: minutes_battery_left, type: UInt32
        if (!is_numeric(self.minutes_battery_left)) show_error($"{_where} :: self.minutes_battery_left expected number", true);
        buffer_write(_buffer, buffer_u32, self.minutes_battery_left);

    }
}

/**
 * @func __SteamUtilsLowBatteryPower_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsLowBatteryPower} 
 * @ignore 
 */
function __SteamUtilsLowBatteryPower_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsLowBatteryPower();
    with (_inst)
    {
        // field: minutes_battery_left, type: UInt32
        self.minutes_battery_left = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUtilsSteamApiCallCompleted_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsSteamApiCallCompleted} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsSteamApiCallCompleted_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: async_call, type: UInt64
        if (!is_numeric(self.async_call)) show_error($"{_where} :: self.async_call expected number", true);
        buffer_write(_buffer, buffer_u64, self.async_call);

        // field: callback_id, type: Int32
        if (!is_numeric(self.callback_id)) show_error($"{_where} :: self.callback_id expected number", true);
        buffer_write(_buffer, buffer_s32, self.callback_id);

        // field: param_size, type: UInt32
        if (!is_numeric(self.param_size)) show_error($"{_where} :: self.param_size expected number", true);
        buffer_write(_buffer, buffer_u32, self.param_size);

    }
}

/**
 * @func __SteamUtilsSteamApiCallCompleted_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsSteamApiCallCompleted} 
 * @ignore 
 */
function __SteamUtilsSteamApiCallCompleted_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsSteamApiCallCompleted();
    with (_inst)
    {
        // field: async_call, type: UInt64
        self.async_call = buffer_read(_buffer, buffer_u64);

        // field: callback_id, type: Int32
        self.callback_id = buffer_read(_buffer, buffer_s32);

        // field: param_size, type: UInt32
        self.param_size = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUtilsCserIpPort_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsCserIpPort} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsCserIpPort_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: ip_v4, type: UInt32
        if (!is_numeric(self.ip_v4)) show_error($"{_where} :: self.ip_v4 expected number", true);
        buffer_write(_buffer, buffer_u32, self.ip_v4);

        // field: port, type: UInt32
        if (!is_numeric(self.port)) show_error($"{_where} :: self.port expected number", true);
        buffer_write(_buffer, buffer_u32, self.port);

    }
}

/**
 * @func __SteamUtilsCserIpPort_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsCserIpPort} 
 * @ignore 
 */
function __SteamUtilsCserIpPort_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsCserIpPort();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: ip_v4, type: UInt32
        self.ip_v4 = buffer_read(_buffer, buffer_u32);

        // field: port, type: UInt32
        self.port = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUtilsGamepadTextInput_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsGamepadTextInput} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsGamepadTextInput_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: text, type: String
        if (!is_string(self.text)) show_error($"{_where} :: self.text expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.text));
        buffer_write(_buffer, buffer_string, self.text);

    }
}

/**
 * @func __SteamUtilsGamepadTextInput_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsGamepadTextInput} 
 * @ignore 
 */
function __SteamUtilsGamepadTextInput_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsGamepadTextInput();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: text, type: String
        buffer_read(_buffer, buffer_u32);
        self.text = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUtilsImageSize_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsImageSize} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsImageSize_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: width, type: UInt32
        if (!is_numeric(self.width)) show_error($"{_where} :: self.width expected number", true);
        buffer_write(_buffer, buffer_u32, self.width);

        // field: height, type: UInt32
        if (!is_numeric(self.height)) show_error($"{_where} :: self.height expected number", true);
        buffer_write(_buffer, buffer_u32, self.height);

    }
}

/**
 * @func __SteamUtilsImageSize_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsImageSize} 
 * @ignore 
 */
function __SteamUtilsImageSize_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsImageSize();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: width, type: UInt32
        self.width = buffer_read(_buffer, buffer_u32);

        // field: height, type: UInt32
        self.height = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUtilsApiCallCompleted_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsApiCallCompleted} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsApiCallCompleted_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: failed, type: Bool
        if (!is_bool(self.failed)) show_error($"{_where} :: self.failed expected bool", true);
        buffer_write(_buffer, buffer_bool, self.failed);

    }
}

/**
 * @func __SteamUtilsApiCallCompleted_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsApiCallCompleted} 
 * @ignore 
 */
function __SteamUtilsApiCallCompleted_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsApiCallCompleted();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: failed, type: Bool
        self.failed = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUtilsFilterTextResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsFilterTextResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsFilterTextResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: characters_filtered, type: Int32
        if (!is_numeric(self.characters_filtered)) show_error($"{_where} :: self.characters_filtered expected number", true);
        buffer_write(_buffer, buffer_s32, self.characters_filtered);

        // field: filtered_text, type: String
        if (!is_string(self.filtered_text)) show_error($"{_where} :: self.filtered_text expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.filtered_text));
        buffer_write(_buffer, buffer_string, self.filtered_text);

    }
}

/**
 * @func __SteamUtilsFilterTextResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsFilterTextResult} 
 * @ignore 
 */
function __SteamUtilsFilterTextResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsFilterTextResult();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: characters_filtered, type: Int32
        self.characters_filtered = buffer_read(_buffer, buffer_s32);

        // field: filtered_text, type: String
        buffer_read(_buffer, buffer_u32);
        self.filtered_text = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUtilsGamepadTextInputDismissed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsGamepadTextInputDismissed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsGamepadTextInputDismissed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: submitted, type: Bool
        if (!is_bool(self.submitted)) show_error($"{_where} :: self.submitted expected bool", true);
        buffer_write(_buffer, buffer_bool, self.submitted);

        // field: submitted_text_length, type: UInt32
        if (!is_numeric(self.submitted_text_length)) show_error($"{_where} :: self.submitted_text_length expected number", true);
        buffer_write(_buffer, buffer_u32, self.submitted_text_length);

    }
}

/**
 * @func __SteamUtilsGamepadTextInputDismissed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsGamepadTextInputDismissed} 
 * @ignore 
 */
function __SteamUtilsGamepadTextInputDismissed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsGamepadTextInputDismissed();
    with (_inst)
    {
        // field: submitted, type: Bool
        self.submitted = buffer_read(_buffer, buffer_bool);

        // field: submitted_text_length, type: UInt32
        self.submitted_text_length = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUtilsFloatingGamepadTextInputDismissed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsFloatingGamepadTextInputDismissed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsFloatingGamepadTextInputDismissed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: submitted, type: Bool
        if (!is_bool(self.submitted)) show_error($"{_where} :: self.submitted expected bool", true);
        buffer_write(_buffer, buffer_bool, self.submitted);

    }
}

/**
 * @func __SteamUtilsFloatingGamepadTextInputDismissed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsFloatingGamepadTextInputDismissed} 
 * @ignore 
 */
function __SteamUtilsFloatingGamepadTextInputDismissed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsFloatingGamepadTextInputDismissed();
    with (_inst)
    {
        // field: submitted, type: Bool
        self.submitted = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUtilsWarningMessage_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUtilsWarningMessage} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUtilsWarningMessage_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: severity, type: Int32
        if (!is_numeric(self.severity)) show_error($"{_where} :: self.severity expected number", true);
        buffer_write(_buffer, buffer_s32, self.severity);

        // field: text, type: String
        if (!is_string(self.text)) show_error($"{_where} :: self.text expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.text));
        buffer_write(_buffer, buffer_string, self.text);

    }
}

/**
 * @func __SteamUtilsWarningMessage_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUtilsWarningMessage} 
 * @ignore 
 */
function __SteamUtilsWarningMessage_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUtilsWarningMessage();
    with (_inst)
    {
        // field: severity, type: Int32
        self.severity = buffer_read(_buffer, buffer_s32);

        // field: text, type: String
        buffer_read(_buffer, buffer_u32);
        self.text = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUgcItemDownloadInfo_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcItemDownloadInfo} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcItemDownloadInfo_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: bytes_downloaded, type: UInt64
        if (!is_numeric(self.bytes_downloaded)) show_error($"{_where} :: self.bytes_downloaded expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_downloaded);

        // field: bytes_total, type: UInt64
        if (!is_numeric(self.bytes_total)) show_error($"{_where} :: self.bytes_total expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_total);

    }
}

/**
 * @func __SteamUgcItemDownloadInfo_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcItemDownloadInfo} 
 * @ignore 
 */
function __SteamUgcItemDownloadInfo_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcItemDownloadInfo();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: bytes_downloaded, type: UInt64
        self.bytes_downloaded = buffer_read(_buffer, buffer_u64);

        // field: bytes_total, type: UInt64
        self.bytes_total = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcItemInstallInfo_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcItemInstallInfo} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcItemInstallInfo_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: size_on_disk, type: UInt64
        if (!is_numeric(self.size_on_disk)) show_error($"{_where} :: self.size_on_disk expected number", true);
        buffer_write(_buffer, buffer_u64, self.size_on_disk);

        // field: folder, type: String
        if (!is_string(self.folder)) show_error($"{_where} :: self.folder expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.folder));
        buffer_write(_buffer, buffer_string, self.folder);

        // field: timestamp, type: UInt32
        if (!is_numeric(self.timestamp)) show_error($"{_where} :: self.timestamp expected number", true);
        buffer_write(_buffer, buffer_u32, self.timestamp);

    }
}

/**
 * @func __SteamUgcItemInstallInfo_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcItemInstallInfo} 
 * @ignore 
 */
function __SteamUgcItemInstallInfo_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcItemInstallInfo();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: size_on_disk, type: UInt64
        self.size_on_disk = buffer_read(_buffer, buffer_u64);

        // field: folder, type: String
        buffer_read(_buffer, buffer_u32);
        self.folder = buffer_read(_buffer, buffer_string);

        // field: timestamp, type: UInt32
        self.timestamp = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUgcItemUpdateProgress_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcItemUpdateProgress} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcItemUpdateProgress_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: status, type: Int32
        if (!is_numeric(self.status)) show_error($"{_where} :: self.status expected number", true);
        buffer_write(_buffer, buffer_s32, self.status);

        // field: bytes_processed, type: UInt64
        if (!is_numeric(self.bytes_processed)) show_error($"{_where} :: self.bytes_processed expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_processed);

        // field: bytes_total, type: UInt64
        if (!is_numeric(self.bytes_total)) show_error($"{_where} :: self.bytes_total expected number", true);
        buffer_write(_buffer, buffer_u64, self.bytes_total);

    }
}

/**
 * @func __SteamUgcItemUpdateProgress_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcItemUpdateProgress} 
 * @ignore 
 */
function __SteamUgcItemUpdateProgress_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcItemUpdateProgress();
    with (_inst)
    {
        // field: status, type: Int32
        self.status = buffer_read(_buffer, buffer_s32);

        // field: bytes_processed, type: UInt64
        self.bytes_processed = buffer_read(_buffer, buffer_u64);

        // field: bytes_total, type: UInt64
        self.bytes_total = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcQueryResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcQueryResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcQueryResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: title, type: String
        if (!is_string(self.title)) show_error($"{_where} :: self.title expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.title));
        buffer_write(_buffer, buffer_string, self.title);

        // field: description, type: String
        if (!is_string(self.description)) show_error($"{_where} :: self.description expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.description));
        buffer_write(_buffer, buffer_string, self.description);

        // field: time_created, type: UInt32
        if (!is_numeric(self.time_created)) show_error($"{_where} :: self.time_created expected number", true);
        buffer_write(_buffer, buffer_u32, self.time_created);

        // field: time_updated, type: UInt32
        if (!is_numeric(self.time_updated)) show_error($"{_where} :: self.time_updated expected number", true);
        buffer_write(_buffer, buffer_u32, self.time_updated);

        // field: visibility, type: Int32
        if (!is_numeric(self.visibility)) show_error($"{_where} :: self.visibility expected number", true);
        buffer_write(_buffer, buffer_s32, self.visibility);

        // field: banned, type: Bool
        if (!is_bool(self.banned)) show_error($"{_where} :: self.banned expected bool", true);
        buffer_write(_buffer, buffer_bool, self.banned);

        // field: accepted_for_use, type: Bool
        if (!is_bool(self.accepted_for_use)) show_error($"{_where} :: self.accepted_for_use expected bool", true);
        buffer_write(_buffer, buffer_bool, self.accepted_for_use);

        // field: tags_truncated, type: Bool
        if (!is_bool(self.tags_truncated)) show_error($"{_where} :: self.tags_truncated expected bool", true);
        buffer_write(_buffer, buffer_bool, self.tags_truncated);

    }
}

/**
 * @func __SteamUgcQueryResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcQueryResult} 
 * @ignore 
 */
function __SteamUgcQueryResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcQueryResult();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: title, type: String
        buffer_read(_buffer, buffer_u32);
        self.title = buffer_read(_buffer, buffer_string);

        // field: description, type: String
        buffer_read(_buffer, buffer_u32);
        self.description = buffer_read(_buffer, buffer_string);

        // field: time_created, type: UInt32
        self.time_created = buffer_read(_buffer, buffer_u32);

        // field: time_updated, type: UInt32
        self.time_updated = buffer_read(_buffer, buffer_u32);

        // field: visibility, type: Int32
        self.visibility = buffer_read(_buffer, buffer_s32);

        // field: banned, type: Bool
        self.banned = buffer_read(_buffer, buffer_bool);

        // field: accepted_for_use, type: Bool
        self.accepted_for_use = buffer_read(_buffer, buffer_bool);

        // field: tags_truncated, type: Bool
        self.tags_truncated = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcQueryPreviewUrl_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcQueryPreviewUrl} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcQueryPreviewUrl_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: url, type: String
        if (!is_string(self.url)) show_error($"{_where} :: self.url expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.url));
        buffer_write(_buffer, buffer_string, self.url);

    }
}

/**
 * @func __SteamUgcQueryPreviewUrl_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcQueryPreviewUrl} 
 * @ignore 
 */
function __SteamUgcQueryPreviewUrl_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcQueryPreviewUrl();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: url, type: String
        buffer_read(_buffer, buffer_u32);
        self.url = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUgcQueryMetadata_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcQueryMetadata} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcQueryMetadata_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: metadata, type: String
        if (!is_string(self.metadata)) show_error($"{_where} :: self.metadata expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.metadata));
        buffer_write(_buffer, buffer_string, self.metadata);

    }
}

/**
 * @func __SteamUgcQueryMetadata_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcQueryMetadata} 
 * @ignore 
 */
function __SteamUgcQueryMetadata_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcQueryMetadata();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: metadata, type: String
        buffer_read(_buffer, buffer_u32);
        self.metadata = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUgcAdditionalPreview_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcAdditionalPreview} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcAdditionalPreview_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: url_or_video_id, type: String
        if (!is_string(self.url_or_video_id)) show_error($"{_where} :: self.url_or_video_id expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.url_or_video_id));
        buffer_write(_buffer, buffer_string, self.url_or_video_id);

        // field: preview_type, type: Int32
        if (!is_numeric(self.preview_type)) show_error($"{_where} :: self.preview_type expected number", true);
        buffer_write(_buffer, buffer_s32, self.preview_type);

    }
}

/**
 * @func __SteamUgcAdditionalPreview_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcAdditionalPreview} 
 * @ignore 
 */
function __SteamUgcAdditionalPreview_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcAdditionalPreview();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: url_or_video_id, type: String
        buffer_read(_buffer, buffer_u32);
        self.url_or_video_id = buffer_read(_buffer, buffer_string);

        // field: preview_type, type: Int32
        self.preview_type = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUgcKeyValueTag_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcKeyValueTag} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcKeyValueTag_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: key, type: String
        if (!is_string(self.key)) show_error($"{_where} :: self.key expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.key));
        buffer_write(_buffer, buffer_string, self.key);

        // field: value, type: String
        if (!is_string(self.value)) show_error($"{_where} :: self.value expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.value));
        buffer_write(_buffer, buffer_string, self.value);

    }
}

/**
 * @func __SteamUgcKeyValueTag_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcKeyValueTag} 
 * @ignore 
 */
function __SteamUgcKeyValueTag_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcKeyValueTag();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: key, type: String
        buffer_read(_buffer, buffer_u32);
        self.key = buffer_read(_buffer, buffer_string);

        // field: value, type: String
        buffer_read(_buffer, buffer_u32);
        self.value = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUgcItemInstalled_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcItemInstalled} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcItemInstalled_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamUgcItemInstalled_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcItemInstalled} 
 * @ignore 
 */
function __SteamUgcItemInstalled_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcItemInstalled();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcUserSubscribedItemsListChanged_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcUserSubscribedItemsListChanged} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcUserSubscribedItemsListChanged_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

    }
}

/**
 * @func __SteamUgcUserSubscribedItemsListChanged_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcUserSubscribedItemsListChanged} 
 * @ignore 
 */
function __SteamUgcUserSubscribedItemsListChanged_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcUserSubscribedItemsListChanged();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUgcFileSubscribed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcFileSubscribed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcFileSubscribed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamUgcFileSubscribed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcFileSubscribed} 
 * @ignore 
 */
function __SteamUgcFileSubscribed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcFileSubscribed();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcFileUnsubscribed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcFileUnsubscribed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcFileUnsubscribed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamUgcFileUnsubscribed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcFileUnsubscribed} 
 * @ignore 
 */
function __SteamUgcFileUnsubscribed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcFileUnsubscribed();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcQueryCompleted_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcQueryCompleted} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcQueryCompleted_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: query_handle, type: UInt64
        if (!is_numeric(self.query_handle)) show_error($"{_where} :: self.query_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.query_handle);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: num_results_returned, type: UInt32
        if (!is_numeric(self.num_results_returned)) show_error($"{_where} :: self.num_results_returned expected number", true);
        buffer_write(_buffer, buffer_u32, self.num_results_returned);

        // field: total_matching_results, type: UInt32
        if (!is_numeric(self.total_matching_results)) show_error($"{_where} :: self.total_matching_results expected number", true);
        buffer_write(_buffer, buffer_u32, self.total_matching_results);

        // field: cached_data, type: Bool
        if (!is_bool(self.cached_data)) show_error($"{_where} :: self.cached_data expected bool", true);
        buffer_write(_buffer, buffer_bool, self.cached_data);

    }
}

/**
 * @func __SteamUgcQueryCompleted_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcQueryCompleted} 
 * @ignore 
 */
function __SteamUgcQueryCompleted_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcQueryCompleted();
    with (_inst)
    {
        // field: query_handle, type: UInt64
        self.query_handle = buffer_read(_buffer, buffer_u64);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: num_results_returned, type: UInt32
        self.num_results_returned = buffer_read(_buffer, buffer_u32);

        // field: total_matching_results, type: UInt32
        self.total_matching_results = buffer_read(_buffer, buffer_u32);

        // field: cached_data, type: Bool
        self.cached_data = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcCreateItemResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcCreateItemResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcCreateItemResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: legal_agreement_required, type: Bool
        if (!is_bool(self.legal_agreement_required)) show_error($"{_where} :: self.legal_agreement_required expected bool", true);
        buffer_write(_buffer, buffer_bool, self.legal_agreement_required);

    }
}

/**
 * @func __SteamUgcCreateItemResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcCreateItemResult} 
 * @ignore 
 */
function __SteamUgcCreateItemResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcCreateItemResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: legal_agreement_required, type: Bool
        self.legal_agreement_required = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcSubmitItemUpdateResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcSubmitItemUpdateResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcSubmitItemUpdateResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: legal_agreement_required, type: Bool
        if (!is_bool(self.legal_agreement_required)) show_error($"{_where} :: self.legal_agreement_required expected bool", true);
        buffer_write(_buffer, buffer_bool, self.legal_agreement_required);

    }
}

/**
 * @func __SteamUgcSubmitItemUpdateResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcSubmitItemUpdateResult} 
 * @ignore 
 */
function __SteamUgcSubmitItemUpdateResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcSubmitItemUpdateResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: legal_agreement_required, type: Bool
        self.legal_agreement_required = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcSubscribeItemResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcSubscribeItemResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcSubscribeItemResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamUgcSubscribeItemResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcSubscribeItemResult} 
 * @ignore 
 */
function __SteamUgcSubscribeItemResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcSubscribeItemResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcUnsubscribeItemResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcUnsubscribeItemResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcUnsubscribeItemResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamUgcUnsubscribeItemResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcUnsubscribeItemResult} 
 * @ignore 
 */
function __SteamUgcUnsubscribeItemResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcUnsubscribeItemResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcFavoriteItemsListChanged_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcFavoriteItemsListChanged} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcFavoriteItemsListChanged_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: was_add_request, type: Bool
        if (!is_bool(self.was_add_request)) show_error($"{_where} :: self.was_add_request expected bool", true);
        buffer_write(_buffer, buffer_bool, self.was_add_request);

    }
}

/**
 * @func __SteamUgcFavoriteItemsListChanged_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcFavoriteItemsListChanged} 
 * @ignore 
 */
function __SteamUgcFavoriteItemsListChanged_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcFavoriteItemsListChanged();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: was_add_request, type: Bool
        self.was_add_request = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcSetUserItemVoteResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcSetUserItemVoteResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcSetUserItemVoteResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: vote_up, type: Bool
        if (!is_bool(self.vote_up)) show_error($"{_where} :: self.vote_up expected bool", true);
        buffer_write(_buffer, buffer_bool, self.vote_up);

    }
}

/**
 * @func __SteamUgcSetUserItemVoteResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcSetUserItemVoteResult} 
 * @ignore 
 */
function __SteamUgcSetUserItemVoteResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcSetUserItemVoteResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: vote_up, type: Bool
        self.vote_up = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcGetUserItemVoteResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcGetUserItemVoteResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcGetUserItemVoteResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: voted_up, type: Bool
        if (!is_bool(self.voted_up)) show_error($"{_where} :: self.voted_up expected bool", true);
        buffer_write(_buffer, buffer_bool, self.voted_up);

        // field: voted_down, type: Bool
        if (!is_bool(self.voted_down)) show_error($"{_where} :: self.voted_down expected bool", true);
        buffer_write(_buffer, buffer_bool, self.voted_down);

        // field: vote_skipped, type: Bool
        if (!is_bool(self.vote_skipped)) show_error($"{_where} :: self.vote_skipped expected bool", true);
        buffer_write(_buffer, buffer_bool, self.vote_skipped);

    }
}

/**
 * @func __SteamUgcGetUserItemVoteResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcGetUserItemVoteResult} 
 * @ignore 
 */
function __SteamUgcGetUserItemVoteResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcGetUserItemVoteResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: voted_up, type: Bool
        self.voted_up = buffer_read(_buffer, buffer_bool);

        // field: voted_down, type: Bool
        self.voted_down = buffer_read(_buffer, buffer_bool);

        // field: vote_skipped, type: Bool
        self.vote_skipped = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcRequestItemDetailsResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcRequestItemDetailsResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcRequestItemDetailsResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: cached_data, type: Bool
        if (!is_bool(self.cached_data)) show_error($"{_where} :: self.cached_data expected bool", true);
        buffer_write(_buffer, buffer_bool, self.cached_data);

    }
}

/**
 * @func __SteamUgcRequestItemDetailsResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcRequestItemDetailsResult} 
 * @ignore 
 */
function __SteamUgcRequestItemDetailsResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcRequestItemDetailsResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: cached_data, type: Bool
        self.cached_data = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUgcSupportedGameVersionData_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcSupportedGameVersionData} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcSupportedGameVersionData_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: game_branch_min, type: String
        if (!is_string(self.game_branch_min)) show_error($"{_where} :: self.game_branch_min expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.game_branch_min));
        buffer_write(_buffer, buffer_string, self.game_branch_min);

        // field: game_branch_max, type: String
        if (!is_string(self.game_branch_max)) show_error($"{_where} :: self.game_branch_max expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.game_branch_max));
        buffer_write(_buffer, buffer_string, self.game_branch_max);

    }
}

/**
 * @func __SteamUgcSupportedGameVersionData_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcSupportedGameVersionData} 
 * @ignore 
 */
function __SteamUgcSupportedGameVersionData_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcSupportedGameVersionData();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: game_branch_min, type: String
        buffer_read(_buffer, buffer_u32);
        self.game_branch_min = buffer_read(_buffer, buffer_string);

        // field: game_branch_max, type: String
        buffer_read(_buffer, buffer_u32);
        self.game_branch_max = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamUgcDeleteItemResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcDeleteItemResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcDeleteItemResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamUgcDeleteItemResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcDeleteItemResult} 
 * @ignore 
 */
function __SteamUgcDeleteItemResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcDeleteItemResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUgcDownloadItemResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUgcDownloadItemResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUgcDownloadItemResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUgcDownloadItemResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUgcDownloadItemResult} 
 * @ignore 
 */
function __SteamUgcDownloadItemResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUgcDownloadItemResult();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamInputAnalogActionData_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputAnalogActionData} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputAnalogActionData_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: mode, type: Int32
        if (!is_numeric(self.mode)) show_error($"{_where} :: self.mode expected number", true);
        buffer_write(_buffer, buffer_s32, self.mode);

        // field: x, type: Float32
        if (!is_numeric(self.x)) show_error($"{_where} :: self.x expected number", true);
        buffer_write(_buffer, buffer_f32, self.x);

        // field: y, type: Float32
        if (!is_numeric(self.y)) show_error($"{_where} :: self.y expected number", true);
        buffer_write(_buffer, buffer_f32, self.y);

        // field: active, type: Bool
        if (!is_bool(self.active)) show_error($"{_where} :: self.active expected bool", true);
        buffer_write(_buffer, buffer_bool, self.active);

    }
}

/**
 * @func __SteamInputAnalogActionData_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputAnalogActionData} 
 * @ignore 
 */
function __SteamInputAnalogActionData_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputAnalogActionData();
    with (_inst)
    {
        // field: mode, type: Int32
        self.mode = buffer_read(_buffer, buffer_s32);

        // field: x, type: Float32
        self.x = buffer_read(_buffer, buffer_f32);

        // field: y, type: Float32
        self.y = buffer_read(_buffer, buffer_f32);

        // field: active, type: Bool
        self.active = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamInputDigitalActionData_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputDigitalActionData} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputDigitalActionData_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: state, type: Bool
        if (!is_bool(self.state)) show_error($"{_where} :: self.state expected bool", true);
        buffer_write(_buffer, buffer_bool, self.state);

        // field: active, type: Bool
        if (!is_bool(self.active)) show_error($"{_where} :: self.active expected bool", true);
        buffer_write(_buffer, buffer_bool, self.active);

    }
}

/**
 * @func __SteamInputDigitalActionData_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputDigitalActionData} 
 * @ignore 
 */
function __SteamInputDigitalActionData_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputDigitalActionData();
    with (_inst)
    {
        // field: state, type: Bool
        self.state = buffer_read(_buffer, buffer_bool);

        // field: active, type: Bool
        self.active = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamInputMotionData_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputMotionData} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputMotionData_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: rot_quat_x, type: Float32
        if (!is_numeric(self.rot_quat_x)) show_error($"{_where} :: self.rot_quat_x expected number", true);
        buffer_write(_buffer, buffer_f32, self.rot_quat_x);

        // field: rot_quat_y, type: Float32
        if (!is_numeric(self.rot_quat_y)) show_error($"{_where} :: self.rot_quat_y expected number", true);
        buffer_write(_buffer, buffer_f32, self.rot_quat_y);

        // field: rot_quat_z, type: Float32
        if (!is_numeric(self.rot_quat_z)) show_error($"{_where} :: self.rot_quat_z expected number", true);
        buffer_write(_buffer, buffer_f32, self.rot_quat_z);

        // field: rot_quat_w, type: Float32
        if (!is_numeric(self.rot_quat_w)) show_error($"{_where} :: self.rot_quat_w expected number", true);
        buffer_write(_buffer, buffer_f32, self.rot_quat_w);

        // field: pos_accel_x, type: Float32
        if (!is_numeric(self.pos_accel_x)) show_error($"{_where} :: self.pos_accel_x expected number", true);
        buffer_write(_buffer, buffer_f32, self.pos_accel_x);

        // field: pos_accel_y, type: Float32
        if (!is_numeric(self.pos_accel_y)) show_error($"{_where} :: self.pos_accel_y expected number", true);
        buffer_write(_buffer, buffer_f32, self.pos_accel_y);

        // field: pos_accel_z, type: Float32
        if (!is_numeric(self.pos_accel_z)) show_error($"{_where} :: self.pos_accel_z expected number", true);
        buffer_write(_buffer, buffer_f32, self.pos_accel_z);

        // field: rot_vel_x, type: Float32
        if (!is_numeric(self.rot_vel_x)) show_error($"{_where} :: self.rot_vel_x expected number", true);
        buffer_write(_buffer, buffer_f32, self.rot_vel_x);

        // field: rot_vel_y, type: Float32
        if (!is_numeric(self.rot_vel_y)) show_error($"{_where} :: self.rot_vel_y expected number", true);
        buffer_write(_buffer, buffer_f32, self.rot_vel_y);

        // field: rot_vel_z, type: Float32
        if (!is_numeric(self.rot_vel_z)) show_error($"{_where} :: self.rot_vel_z expected number", true);
        buffer_write(_buffer, buffer_f32, self.rot_vel_z);

    }
}

/**
 * @func __SteamInputMotionData_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputMotionData} 
 * @ignore 
 */
function __SteamInputMotionData_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputMotionData();
    with (_inst)
    {
        // field: rot_quat_x, type: Float32
        self.rot_quat_x = buffer_read(_buffer, buffer_f32);

        // field: rot_quat_y, type: Float32
        self.rot_quat_y = buffer_read(_buffer, buffer_f32);

        // field: rot_quat_z, type: Float32
        self.rot_quat_z = buffer_read(_buffer, buffer_f32);

        // field: rot_quat_w, type: Float32
        self.rot_quat_w = buffer_read(_buffer, buffer_f32);

        // field: pos_accel_x, type: Float32
        self.pos_accel_x = buffer_read(_buffer, buffer_f32);

        // field: pos_accel_y, type: Float32
        self.pos_accel_y = buffer_read(_buffer, buffer_f32);

        // field: pos_accel_z, type: Float32
        self.pos_accel_z = buffer_read(_buffer, buffer_f32);

        // field: rot_vel_x, type: Float32
        self.rot_vel_x = buffer_read(_buffer, buffer_f32);

        // field: rot_vel_y, type: Float32
        self.rot_vel_y = buffer_read(_buffer, buffer_f32);

        // field: rot_vel_z, type: Float32
        self.rot_vel_z = buffer_read(_buffer, buffer_f32);

    }

    return _inst;
}

/**
 * @func __SteamInputActiveActionSetLayers_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputActiveActionSetLayers} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputActiveActionSetLayers_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: count, type: Int32
        if (!is_numeric(self.count)) show_error($"{_where} :: self.count expected number", true);
        buffer_write(_buffer, buffer_s32, self.count);

        // field: handles, type: UInt64[]
        if (!is_array(self.handles)) show_error($"{_where} :: self.handles expected array", true);
        var _length = array_length(self.handles);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.handles[_i])) show_error($"{_where} :: self.handles[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.handles[_i]);
        }

    }
}

/**
 * @func __SteamInputActiveActionSetLayers_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputActiveActionSetLayers} 
 * @ignore 
 */
function __SteamInputActiveActionSetLayers_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputActiveActionSetLayers();
    with (_inst)
    {
        // field: count, type: Int32
        self.count = buffer_read(_buffer, buffer_s32);

        // field: handles, type: UInt64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.handles = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.handles[_i] = buffer_read(_buffer, buffer_u64);
        }

    }

    return _inst;
}

/**
 * @func __SteamInputActionOrigins_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputActionOrigins} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputActionOrigins_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: count, type: Int32
        if (!is_numeric(self.count)) show_error($"{_where} :: self.count expected number", true);
        buffer_write(_buffer, buffer_s32, self.count);

        // field: origins, type: Int32[]
        if (!is_array(self.origins)) show_error($"{_where} :: self.origins expected array", true);
        var _length = array_length(self.origins);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.origins[_i])) show_error($"{_where} :: self.origins[_i] expected number", true);
            buffer_write(_buffer, buffer_s32, self.origins[_i]);
        }

    }
}

/**
 * @func __SteamInputActionOrigins_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputActionOrigins} 
 * @ignore 
 */
function __SteamInputActionOrigins_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputActionOrigins();
    with (_inst)
    {
        // field: count, type: Int32
        self.count = buffer_read(_buffer, buffer_s32);

        // field: origins, type: Int32[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.origins = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.origins[_i] = buffer_read(_buffer, buffer_s32);
        }

    }

    return _inst;
}

/**
 * @func __SteamInputDeviceBindingRevision_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputDeviceBindingRevision} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputDeviceBindingRevision_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: major, type: Int32
        if (!is_numeric(self.major)) show_error($"{_where} :: self.major expected number", true);
        buffer_write(_buffer, buffer_s32, self.major);

        // field: minor, type: Int32
        if (!is_numeric(self.minor)) show_error($"{_where} :: self.minor expected number", true);
        buffer_write(_buffer, buffer_s32, self.minor);

    }
}

/**
 * @func __SteamInputDeviceBindingRevision_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputDeviceBindingRevision} 
 * @ignore 
 */
function __SteamInputDeviceBindingRevision_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputDeviceBindingRevision();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: major, type: Int32
        self.major = buffer_read(_buffer, buffer_s32);

        // field: minor, type: Int32
        self.minor = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamInputDeviceEvent_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputDeviceEvent} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputDeviceEvent_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: controller_handle, type: UInt64
        if (!is_numeric(self.controller_handle)) show_error($"{_where} :: self.controller_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.controller_handle);

    }
}

/**
 * @func __SteamInputDeviceEvent_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputDeviceEvent} 
 * @ignore 
 */
function __SteamInputDeviceEvent_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputDeviceEvent();
    with (_inst)
    {
        // field: controller_handle, type: UInt64
        self.controller_handle = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamInputActionSetChanged_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputActionSetChanged} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputActionSetChanged_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: controller_handle, type: UInt64
        if (!is_numeric(self.controller_handle)) show_error($"{_where} :: self.controller_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.controller_handle);

        // field: action_set_handle, type: UInt64
        if (!is_numeric(self.action_set_handle)) show_error($"{_where} :: self.action_set_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.action_set_handle);

    }
}

/**
 * @func __SteamInputActionSetChanged_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputActionSetChanged} 
 * @ignore 
 */
function __SteamInputActionSetChanged_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputActionSetChanged();
    with (_inst)
    {
        // field: controller_handle, type: UInt64
        self.controller_handle = buffer_read(_buffer, buffer_u64);

        // field: action_set_handle, type: UInt64
        self.action_set_handle = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamInputControllerBattery_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInputControllerBattery} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInputControllerBattery_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: controller_handle, type: UInt64
        if (!is_numeric(self.controller_handle)) show_error($"{_where} :: self.controller_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.controller_handle);

        // field: battery_percent, type: Int32
        if (!is_numeric(self.battery_percent)) show_error($"{_where} :: self.battery_percent expected number", true);
        buffer_write(_buffer, buffer_s32, self.battery_percent);

    }
}

/**
 * @func __SteamInputControllerBattery_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInputControllerBattery} 
 * @ignore 
 */
function __SteamInputControllerBattery_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInputControllerBattery();
    with (_inst)
    {
        // field: controller_handle, type: UInt64
        self.controller_handle = buffer_read(_buffer, buffer_u64);

        // field: battery_percent, type: Int32
        self.battery_percent = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsAchievementAndUnlockTime_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsAchievementAndUnlockTime} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsAchievementAndUnlockTime_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: achieved, type: Bool
        if (!is_bool(self.achieved)) show_error($"{_where} :: self.achieved expected bool", true);
        buffer_write(_buffer, buffer_bool, self.achieved);

        // field: unlock_time, type: UInt32
        if (!is_numeric(self.unlock_time)) show_error($"{_where} :: self.unlock_time expected number", true);
        buffer_write(_buffer, buffer_u32, self.unlock_time);

    }
}

/**
 * @func __SteamUserStatsAchievementAndUnlockTime_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 * @ignore 
 */
function __SteamUserStatsAchievementAndUnlockTime_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsAchievementAndUnlockTime();
    with (_inst)
    {
        // field: achieved, type: Bool
        self.achieved = buffer_read(_buffer, buffer_bool);

        // field: unlock_time, type: UInt32
        self.unlock_time = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsAchievementAndProgress_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsAchievementAndProgress} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsAchievementAndProgress_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: achieved, type: Bool
        if (!is_bool(self.achieved)) show_error($"{_where} :: self.achieved expected bool", true);
        buffer_write(_buffer, buffer_bool, self.achieved);

        // field: cur_progress, type: UInt32
        if (!is_numeric(self.cur_progress)) show_error($"{_where} :: self.cur_progress expected number", true);
        buffer_write(_buffer, buffer_u32, self.cur_progress);

        // field: max_progress, type: UInt32
        if (!is_numeric(self.max_progress)) show_error($"{_where} :: self.max_progress expected number", true);
        buffer_write(_buffer, buffer_u32, self.max_progress);

    }
}

/**
 * @func __SteamUserStatsAchievementAndProgress_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsAchievementAndProgress} 
 * @ignore 
 */
function __SteamUserStatsAchievementAndProgress_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsAchievementAndProgress();
    with (_inst)
    {
        // field: achieved, type: Bool
        self.achieved = buffer_read(_buffer, buffer_bool);

        // field: cur_progress, type: UInt32
        self.cur_progress = buffer_read(_buffer, buffer_u32);

        // field: max_progress, type: UInt32
        self.max_progress = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsAchievementNamesAndPercent_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsAchievementNamesAndPercent} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsAchievementNamesAndPercent_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: name, type: String
        if (!is_string(self.name)) show_error($"{_where} :: self.name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.name));
        buffer_write(_buffer, buffer_string, self.name);

        // field: percent, type: Float32
        if (!is_numeric(self.percent)) show_error($"{_where} :: self.percent expected number", true);
        buffer_write(_buffer, buffer_f32, self.percent);

    }
}

/**
 * @func __SteamUserStatsAchievementNamesAndPercent_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsAchievementNamesAndPercent} 
 * @ignore 
 */
function __SteamUserStatsAchievementNamesAndPercent_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsAchievementNamesAndPercent();
    with (_inst)
    {
        // field: name, type: String
        buffer_read(_buffer, buffer_u32);
        self.name = buffer_read(_buffer, buffer_string);

        // field: percent, type: Float32
        self.percent = buffer_read(_buffer, buffer_f32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsMostAchievedAchievementInfo_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsMostAchievedAchievementInfo} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsMostAchievedAchievementInfo_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: name, type: String
        if (!is_string(self.name)) show_error($"{_where} :: self.name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.name));
        buffer_write(_buffer, buffer_string, self.name);

        // field: percent, type: Float32
        if (!is_numeric(self.percent)) show_error($"{_where} :: self.percent expected number", true);
        buffer_write(_buffer, buffer_f32, self.percent);

        // field: achieved, type: Bool
        if (!is_bool(self.achieved)) show_error($"{_where} :: self.achieved expected bool", true);
        buffer_write(_buffer, buffer_bool, self.achieved);

    }
}

/**
 * @func __SteamUserStatsMostAchievedAchievementInfo_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 * @ignore 
 */
function __SteamUserStatsMostAchievedAchievementInfo_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsMostAchievedAchievementInfo();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: name, type: String
        buffer_read(_buffer, buffer_u32);
        self.name = buffer_read(_buffer, buffer_string);

        // field: percent, type: Float32
        self.percent = buffer_read(_buffer, buffer_f32);

        // field: achieved, type: Bool
        self.achieved = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsNumAchievementsAndHours_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsNumAchievementsAndHours} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsNumAchievementsAndHours_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: num_achievements, type: UInt32
        if (!is_numeric(self.num_achievements)) show_error($"{_where} :: self.num_achievements expected number", true);
        buffer_write(_buffer, buffer_u32, self.num_achievements);

        // field: hours, type: Float32
        if (!is_numeric(self.hours)) show_error($"{_where} :: self.hours expected number", true);
        buffer_write(_buffer, buffer_f32, self.hours);

    }
}

/**
 * @func __SteamUserStatsNumAchievementsAndHours_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsNumAchievementsAndHours} 
 * @ignore 
 */
function __SteamUserStatsNumAchievementsAndHours_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsNumAchievementsAndHours();
    with (_inst)
    {
        // field: num_achievements, type: UInt32
        self.num_achievements = buffer_read(_buffer, buffer_u32);

        // field: hours, type: Float32
        self.hours = buffer_read(_buffer, buffer_f32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsStatInt_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsStatInt} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsStatInt_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: data, type: Int32
        if (!is_numeric(self.data)) show_error($"{_where} :: self.data expected number", true);
        buffer_write(_buffer, buffer_s32, self.data);

    }
}

/**
 * @func __SteamUserStatsStatInt_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsStatInt} 
 * @ignore 
 */
function __SteamUserStatsStatInt_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsStatInt();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: data, type: Int32
        self.data = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsStatFloat_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsStatFloat} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsStatFloat_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: data, type: Float32
        if (!is_numeric(self.data)) show_error($"{_where} :: self.data expected number", true);
        buffer_write(_buffer, buffer_f32, self.data);

    }
}

/**
 * @func __SteamUserStatsStatFloat_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsStatFloat} 
 * @ignore 
 */
function __SteamUserStatsStatFloat_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsStatFloat();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: data, type: Float32
        self.data = buffer_read(_buffer, buffer_f32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsUserAchievement_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsUserAchievement} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsUserAchievement_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: achieved, type: Bool
        if (!is_bool(self.achieved)) show_error($"{_where} :: self.achieved expected bool", true);
        buffer_write(_buffer, buffer_bool, self.achieved);

    }
}

/**
 * @func __SteamUserStatsUserAchievement_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsUserAchievement} 
 * @ignore 
 */
function __SteamUserStatsUserAchievement_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsUserAchievement();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: achieved, type: Bool
        self.achieved = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsGlobalStatInt64_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsGlobalStatInt64} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsGlobalStatInt64_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: data, type: Int64
        if (!is_numeric(self.data)) show_error($"{_where} :: self.data expected number", true);
        buffer_write(_buffer, buffer_u64, self.data);

    }
}

/**
 * @func __SteamUserStatsGlobalStatInt64_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsGlobalStatInt64} 
 * @ignore 
 */
function __SteamUserStatsGlobalStatInt64_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsGlobalStatInt64();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: data, type: Int64
        self.data = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsGlobalStatDouble_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsGlobalStatDouble} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsGlobalStatDouble_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: data, type: Float64
        if (!is_numeric(self.data)) show_error($"{_where} :: self.data expected number", true);
        buffer_write(_buffer, buffer_f64, self.data);

    }
}

/**
 * @func __SteamUserStatsGlobalStatDouble_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsGlobalStatDouble} 
 * @ignore 
 */
function __SteamUserStatsGlobalStatDouble_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsGlobalStatDouble();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: data, type: Float64
        self.data = buffer_read(_buffer, buffer_f64);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsGlobalStatHistoryInt64_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsGlobalStatHistoryInt64} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsGlobalStatHistoryInt64_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: data, type: Int64[]
        if (!is_array(self.data)) show_error($"{_where} :: self.data expected array", true);
        var _length = array_length(self.data);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.data[_i])) show_error($"{_where} :: self.data[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.data[_i]);
        }

    }
}

/**
 * @func __SteamUserStatsGlobalStatHistoryInt64_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsGlobalStatHistoryInt64} 
 * @ignore 
 */
function __SteamUserStatsGlobalStatHistoryInt64_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsGlobalStatHistoryInt64();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: data, type: Int64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.data = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.data[_i] = buffer_read(_buffer, buffer_u64);
        }

    }

    return _inst;
}

/**
 * @func __SteamUserStatsGlobalStatHistoryDouble_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsGlobalStatHistoryDouble} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsGlobalStatHistoryDouble_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: data, type: Float64[]
        if (!is_array(self.data)) show_error($"{_where} :: self.data expected array", true);
        var _length = array_length(self.data);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.data[_i])) show_error($"{_where} :: self.data[_i] expected number", true);
            buffer_write(_buffer, buffer_f64, self.data[_i]);
        }

    }
}

/**
 * @func __SteamUserStatsGlobalStatHistoryDouble_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsGlobalStatHistoryDouble} 
 * @ignore 
 */
function __SteamUserStatsGlobalStatHistoryDouble_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsGlobalStatHistoryDouble();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: data, type: Float64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.data = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.data[_i] = buffer_read(_buffer, buffer_f64);
        }

    }

    return _inst;
}

/**
 * @func __SteamUserStatsDownloadedLeaderboardEntry_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsDownloadedLeaderboardEntry} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsDownloadedLeaderboardEntry_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: steam_id_user, type: UInt64
        if (!is_numeric(self.steam_id_user)) show_error($"{_where} :: self.steam_id_user expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_user);

        // field: global_rank, type: Int32
        if (!is_numeric(self.global_rank)) show_error($"{_where} :: self.global_rank expected number", true);
        buffer_write(_buffer, buffer_s32, self.global_rank);

        // field: score, type: Int32
        if (!is_numeric(self.score)) show_error($"{_where} :: self.score expected number", true);
        buffer_write(_buffer, buffer_s32, self.score);

        // field: details_count, type: Int32
        if (!is_numeric(self.details_count)) show_error($"{_where} :: self.details_count expected number", true);
        buffer_write(_buffer, buffer_s32, self.details_count);

        // field: details_written, type: Int32
        if (!is_numeric(self.details_written)) show_error($"{_where} :: self.details_written expected number", true);
        buffer_write(_buffer, buffer_s32, self.details_written);

        // field: bytes_written, type: Int32
        if (!is_numeric(self.bytes_written)) show_error($"{_where} :: self.bytes_written expected number", true);
        buffer_write(_buffer, buffer_s32, self.bytes_written);

    }
}

/**
 * @func __SteamUserStatsDownloadedLeaderboardEntry_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 * @ignore 
 */
function __SteamUserStatsDownloadedLeaderboardEntry_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsDownloadedLeaderboardEntry();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: steam_id_user, type: UInt64
        self.steam_id_user = buffer_read(_buffer, buffer_u64);

        // field: global_rank, type: Int32
        self.global_rank = buffer_read(_buffer, buffer_s32);

        // field: score, type: Int32
        self.score = buffer_read(_buffer, buffer_s32);

        // field: details_count, type: Int32
        self.details_count = buffer_read(_buffer, buffer_s32);

        // field: details_written, type: Int32
        self.details_written = buffer_read(_buffer, buffer_s32);

        // field: bytes_written, type: Int32
        self.bytes_written = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsRequestUserStatsResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsRequestUserStatsResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsRequestUserStatsResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: game_id, type: UInt64
        if (!is_numeric(self.game_id)) show_error($"{_where} :: self.game_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_id);

        // field: steam_id_user, type: UInt64
        if (!is_numeric(self.steam_id_user)) show_error($"{_where} :: self.steam_id_user expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_user);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUserStatsRequestUserStatsResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsRequestUserStatsResult} 
 * @ignore 
 */
function __SteamUserStatsRequestUserStatsResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsRequestUserStatsResult();
    with (_inst)
    {
        // field: game_id, type: UInt64
        self.game_id = buffer_read(_buffer, buffer_u64);

        // field: steam_id_user, type: UInt64
        self.steam_id_user = buffer_read(_buffer, buffer_u64);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsLeaderboardFindResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsLeaderboardFindResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsLeaderboardFindResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: leaderboard_handle, type: UInt64
        if (!is_numeric(self.leaderboard_handle)) show_error($"{_where} :: self.leaderboard_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.leaderboard_handle);

        // field: leaderboard_found, type: Bool
        if (!is_bool(self.leaderboard_found)) show_error($"{_where} :: self.leaderboard_found expected bool", true);
        buffer_write(_buffer, buffer_bool, self.leaderboard_found);

    }
}

/**
 * @func __SteamUserStatsLeaderboardFindResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsLeaderboardFindResult} 
 * @ignore 
 */
function __SteamUserStatsLeaderboardFindResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsLeaderboardFindResult();
    with (_inst)
    {
        // field: leaderboard_handle, type: UInt64
        self.leaderboard_handle = buffer_read(_buffer, buffer_u64);

        // field: leaderboard_found, type: Bool
        self.leaderboard_found = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsScoresDownloadedResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsScoresDownloadedResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsScoresDownloadedResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: leaderboard_handle, type: UInt64
        if (!is_numeric(self.leaderboard_handle)) show_error($"{_where} :: self.leaderboard_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.leaderboard_handle);

        // field: entries_handle, type: UInt64
        if (!is_numeric(self.entries_handle)) show_error($"{_where} :: self.entries_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.entries_handle);

        // field: entry_count, type: UInt32
        if (!is_numeric(self.entry_count)) show_error($"{_where} :: self.entry_count expected number", true);
        buffer_write(_buffer, buffer_u32, self.entry_count);

    }
}

/**
 * @func __SteamUserStatsScoresDownloadedResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsScoresDownloadedResult} 
 * @ignore 
 */
function __SteamUserStatsScoresDownloadedResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsScoresDownloadedResult();
    with (_inst)
    {
        // field: leaderboard_handle, type: UInt64
        self.leaderboard_handle = buffer_read(_buffer, buffer_u64);

        // field: entries_handle, type: UInt64
        self.entries_handle = buffer_read(_buffer, buffer_u64);

        // field: entry_count, type: UInt32
        self.entry_count = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsScoreUploadedResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsScoreUploadedResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsScoreUploadedResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: success, type: Bool
        if (!is_bool(self.success)) show_error($"{_where} :: self.success expected bool", true);
        buffer_write(_buffer, buffer_bool, self.success);

        // field: leaderboard_handle, type: UInt64
        if (!is_numeric(self.leaderboard_handle)) show_error($"{_where} :: self.leaderboard_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.leaderboard_handle);

        // field: score, type: Int32
        if (!is_numeric(self.score)) show_error($"{_where} :: self.score expected number", true);
        buffer_write(_buffer, buffer_s32, self.score);

        // field: score_changed, type: Bool
        if (!is_bool(self.score_changed)) show_error($"{_where} :: self.score_changed expected bool", true);
        buffer_write(_buffer, buffer_bool, self.score_changed);

        // field: global_rank_new, type: Int32
        if (!is_numeric(self.global_rank_new)) show_error($"{_where} :: self.global_rank_new expected number", true);
        buffer_write(_buffer, buffer_s32, self.global_rank_new);

        // field: global_rank_previous, type: Int32
        if (!is_numeric(self.global_rank_previous)) show_error($"{_where} :: self.global_rank_previous expected number", true);
        buffer_write(_buffer, buffer_s32, self.global_rank_previous);

    }
}

/**
 * @func __SteamUserStatsScoreUploadedResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsScoreUploadedResult} 
 * @ignore 
 */
function __SteamUserStatsScoreUploadedResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsScoreUploadedResult();
    with (_inst)
    {
        // field: success, type: Bool
        self.success = buffer_read(_buffer, buffer_bool);

        // field: leaderboard_handle, type: UInt64
        self.leaderboard_handle = buffer_read(_buffer, buffer_u64);

        // field: score, type: Int32
        self.score = buffer_read(_buffer, buffer_s32);

        // field: score_changed, type: Bool
        self.score_changed = buffer_read(_buffer, buffer_bool);

        // field: global_rank_new, type: Int32
        self.global_rank_new = buffer_read(_buffer, buffer_s32);

        // field: global_rank_previous, type: Int32
        self.global_rank_previous = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsNumberOfCurrentPlayersResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsNumberOfCurrentPlayersResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsNumberOfCurrentPlayersResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: success, type: Bool
        if (!is_bool(self.success)) show_error($"{_where} :: self.success expected bool", true);
        buffer_write(_buffer, buffer_bool, self.success);

        // field: players, type: Int32
        if (!is_numeric(self.players)) show_error($"{_where} :: self.players expected number", true);
        buffer_write(_buffer, buffer_s32, self.players);

    }
}

/**
 * @func __SteamUserStatsNumberOfCurrentPlayersResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsNumberOfCurrentPlayersResult} 
 * @ignore 
 */
function __SteamUserStatsNumberOfCurrentPlayersResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsNumberOfCurrentPlayersResult();
    with (_inst)
    {
        // field: success, type: Bool
        self.success = buffer_read(_buffer, buffer_bool);

        // field: players, type: Int32
        self.players = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsGlobalAchievementPercentagesReadyResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsGlobalAchievementPercentagesReadyResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsGlobalAchievementPercentagesReadyResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: game_id, type: UInt64
        if (!is_numeric(self.game_id)) show_error($"{_where} :: self.game_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_id);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUserStatsGlobalAchievementPercentagesReadyResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsGlobalAchievementPercentagesReadyResult} 
 * @ignore 
 */
function __SteamUserStatsGlobalAchievementPercentagesReadyResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsGlobalAchievementPercentagesReadyResult();
    with (_inst)
    {
        // field: game_id, type: UInt64
        self.game_id = buffer_read(_buffer, buffer_u64);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsGlobalStatsReceivedResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsGlobalStatsReceivedResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsGlobalStatsReceivedResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: game_id, type: UInt64
        if (!is_numeric(self.game_id)) show_error($"{_where} :: self.game_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_id);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUserStatsGlobalStatsReceivedResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsGlobalStatsReceivedResult} 
 * @ignore 
 */
function __SteamUserStatsGlobalStatsReceivedResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsGlobalStatsReceivedResult();
    with (_inst)
    {
        // field: game_id, type: UInt64
        self.game_id = buffer_read(_buffer, buffer_u64);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsAttachLeaderboardUgcResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsAttachLeaderboardUgcResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsAttachLeaderboardUgcResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: leaderboard_handle, type: UInt64
        if (!is_numeric(self.leaderboard_handle)) show_error($"{_where} :: self.leaderboard_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.leaderboard_handle);

    }
}

/**
 * @func __SteamUserStatsAttachLeaderboardUgcResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsAttachLeaderboardUgcResult} 
 * @ignore 
 */
function __SteamUserStatsAttachLeaderboardUgcResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsAttachLeaderboardUgcResult();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: leaderboard_handle, type: UInt64
        self.leaderboard_handle = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsUserStatsReceived_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsUserStatsReceived} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsUserStatsReceived_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: game_id, type: UInt64
        if (!is_numeric(self.game_id)) show_error($"{_where} :: self.game_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_id);

        // field: steam_id_user, type: UInt64
        if (!is_numeric(self.steam_id_user)) show_error($"{_where} :: self.steam_id_user expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_user);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUserStatsUserStatsReceived_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsUserStatsReceived} 
 * @ignore 
 */
function __SteamUserStatsUserStatsReceived_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsUserStatsReceived();
    with (_inst)
    {
        // field: game_id, type: UInt64
        self.game_id = buffer_read(_buffer, buffer_u64);

        // field: steam_id_user, type: UInt64
        self.steam_id_user = buffer_read(_buffer, buffer_u64);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsUserStatsStored_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsUserStatsStored} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsUserStatsStored_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: game_id, type: UInt64
        if (!is_numeric(self.game_id)) show_error($"{_where} :: self.game_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_id);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamUserStatsUserStatsStored_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsUserStatsStored} 
 * @ignore 
 */
function __SteamUserStatsUserStatsStored_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsUserStatsStored();
    with (_inst)
    {
        // field: game_id, type: UInt64
        self.game_id = buffer_read(_buffer, buffer_u64);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsUserAchievementStored_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsUserAchievementStored} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsUserAchievementStored_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: game_id, type: UInt64
        if (!is_numeric(self.game_id)) show_error($"{_where} :: self.game_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_id);

        // field: achievement_name, type: String
        if (!is_string(self.achievement_name)) show_error($"{_where} :: self.achievement_name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.achievement_name));
        buffer_write(_buffer, buffer_string, self.achievement_name);

        // field: cur_progress, type: Int32
        if (!is_numeric(self.cur_progress)) show_error($"{_where} :: self.cur_progress expected number", true);
        buffer_write(_buffer, buffer_s32, self.cur_progress);

        // field: max_progress, type: Int32
        if (!is_numeric(self.max_progress)) show_error($"{_where} :: self.max_progress expected number", true);
        buffer_write(_buffer, buffer_s32, self.max_progress);

    }
}

/**
 * @func __SteamUserStatsUserAchievementStored_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsUserAchievementStored} 
 * @ignore 
 */
function __SteamUserStatsUserAchievementStored_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsUserAchievementStored();
    with (_inst)
    {
        // field: game_id, type: UInt64
        self.game_id = buffer_read(_buffer, buffer_u64);

        // field: achievement_name, type: String
        buffer_read(_buffer, buffer_u32);
        self.achievement_name = buffer_read(_buffer, buffer_string);

        // field: cur_progress, type: Int32
        self.cur_progress = buffer_read(_buffer, buffer_s32);

        // field: max_progress, type: Int32
        self.max_progress = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsIntMinMax_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsIntMinMax} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsIntMinMax_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: min, type: Int32
        if (!is_numeric(self.min)) show_error($"{_where} :: self.min expected number", true);
        buffer_write(_buffer, buffer_s32, self.min);

        // field: max, type: Int32
        if (!is_numeric(self.max)) show_error($"{_where} :: self.max expected number", true);
        buffer_write(_buffer, buffer_s32, self.max);

        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

    }
}

/**
 * @func __SteamUserStatsIntMinMax_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsIntMinMax} 
 * @ignore 
 */
function __SteamUserStatsIntMinMax_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsIntMinMax();
    with (_inst)
    {
        // field: min, type: Int32
        self.min = buffer_read(_buffer, buffer_s32);

        // field: max, type: Int32
        self.max = buffer_read(_buffer, buffer_s32);

        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamUserStatsFloatMinMax_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamUserStatsFloatMinMax} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamUserStatsFloatMinMax_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: min, type: Float64
        if (!is_numeric(self.min)) show_error($"{_where} :: self.min expected number", true);
        buffer_write(_buffer, buffer_f64, self.min);

        // field: max, type: Float64
        if (!is_numeric(self.max)) show_error($"{_where} :: self.max expected number", true);
        buffer_write(_buffer, buffer_f64, self.max);

        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

    }
}

/**
 * @func __SteamUserStatsFloatMinMax_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamUserStatsFloatMinMax} 
 * @ignore 
 */
function __SteamUserStatsFloatMinMax_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamUserStatsFloatMinMax();
    with (_inst)
    {
        // field: min, type: Float64
        self.min = buffer_read(_buffer, buffer_f64);

        // field: max, type: Float64
        self.max = buffer_read(_buffer, buffer_f64);

        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamMusicPlaybackStatusHasChanged_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMusicPlaybackStatusHasChanged} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMusicPlaybackStatusHasChanged_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: playback_status, type: Int32
        if (!is_numeric(self.playback_status)) show_error($"{_where} :: self.playback_status expected number", true);
        buffer_write(_buffer, buffer_s32, self.playback_status);

    }
}

/**
 * @func __SteamMusicPlaybackStatusHasChanged_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMusicPlaybackStatusHasChanged} 
 * @ignore 
 */
function __SteamMusicPlaybackStatusHasChanged_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMusicPlaybackStatusHasChanged();
    with (_inst)
    {
        // field: playback_status, type: Int32
        self.playback_status = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamMusicVolumeHasChanged_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMusicVolumeHasChanged} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMusicVolumeHasChanged_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: volume, type: Float32
        if (!is_numeric(self.volume)) show_error($"{_where} :: self.volume expected number", true);
        buffer_write(_buffer, buffer_f32, self.volume);

    }
}

/**
 * @func __SteamMusicVolumeHasChanged_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMusicVolumeHasChanged} 
 * @ignore 
 */
function __SteamMusicVolumeHasChanged_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMusicVolumeHasChanged();
    with (_inst)
    {
        // field: volume, type: Float32
        self.volume = buffer_read(_buffer, buffer_f32);

    }

    return _inst;
}

/**
 * @func __SteamTimelineGamePhaseRecordingExists_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamTimelineGamePhaseRecordingExists} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamTimelineGamePhaseRecordingExists_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: phase_id, type: String
        if (!is_string(self.phase_id)) show_error($"{_where} :: self.phase_id expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.phase_id));
        buffer_write(_buffer, buffer_string, self.phase_id);

        // field: recording_ms, type: UInt64
        if (!is_numeric(self.recording_ms)) show_error($"{_where} :: self.recording_ms expected number", true);
        buffer_write(_buffer, buffer_u64, self.recording_ms);

        // field: longest_clip_ms, type: UInt64
        if (!is_numeric(self.longest_clip_ms)) show_error($"{_where} :: self.longest_clip_ms expected number", true);
        buffer_write(_buffer, buffer_u64, self.longest_clip_ms);

        // field: clip_count, type: UInt32
        if (!is_numeric(self.clip_count)) show_error($"{_where} :: self.clip_count expected number", true);
        buffer_write(_buffer, buffer_u32, self.clip_count);

        // field: screenshot_count, type: UInt32
        if (!is_numeric(self.screenshot_count)) show_error($"{_where} :: self.screenshot_count expected number", true);
        buffer_write(_buffer, buffer_u32, self.screenshot_count);

    }
}

/**
 * @func __SteamTimelineGamePhaseRecordingExists_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamTimelineGamePhaseRecordingExists} 
 * @ignore 
 */
function __SteamTimelineGamePhaseRecordingExists_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamTimelineGamePhaseRecordingExists();
    with (_inst)
    {
        // field: phase_id, type: String
        buffer_read(_buffer, buffer_u32);
        self.phase_id = buffer_read(_buffer, buffer_string);

        // field: recording_ms, type: UInt64
        self.recording_ms = buffer_read(_buffer, buffer_u64);

        // field: longest_clip_ms, type: UInt64
        self.longest_clip_ms = buffer_read(_buffer, buffer_u64);

        // field: clip_count, type: UInt32
        self.clip_count = buffer_read(_buffer, buffer_u32);

        // field: screenshot_count, type: UInt32
        self.screenshot_count = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamTimelineEventRecordingExists_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamTimelineEventRecordingExists} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamTimelineEventRecordingExists_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: event_id, type: UInt64
        if (!is_numeric(self.event_id)) show_error($"{_where} :: self.event_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.event_id);

        // field: recording_exists, type: Bool
        if (!is_bool(self.recording_exists)) show_error($"{_where} :: self.recording_exists expected bool", true);
        buffer_write(_buffer, buffer_bool, self.recording_exists);

    }
}

/**
 * @func __SteamTimelineEventRecordingExists_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamTimelineEventRecordingExists} 
 * @ignore 
 */
function __SteamTimelineEventRecordingExists_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamTimelineEventRecordingExists();
    with (_inst)
    {
        // field: event_id, type: UInt64
        self.event_id = buffer_read(_buffer, buffer_u64);

        // field: recording_exists, type: Bool
        self.recording_exists = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamInventoryResultItems_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryResultItems} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryResultItems_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: count, type: UInt32
        if (!is_numeric(self.count)) show_error($"{_where} :: self.count expected number", true);
        buffer_write(_buffer, buffer_u32, self.count);

        // field: item_instance_ids, type: UInt64[]
        if (!is_array(self.item_instance_ids)) show_error($"{_where} :: self.item_instance_ids expected array", true);
        var _length = array_length(self.item_instance_ids);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.item_instance_ids[_i])) show_error($"{_where} :: self.item_instance_ids[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.item_instance_ids[_i]);
        }

        // field: item_def_ids, type: UInt32[]
        if (!is_array(self.item_def_ids)) show_error($"{_where} :: self.item_def_ids expected array", true);
        var _length = array_length(self.item_def_ids);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.item_def_ids[_i])) show_error($"{_where} :: self.item_def_ids[_i] expected number", true);
            buffer_write(_buffer, buffer_u32, self.item_def_ids[_i]);
        }

        // field: quantities, type: UInt32[]
        if (!is_array(self.quantities)) show_error($"{_where} :: self.quantities expected array", true);
        var _length = array_length(self.quantities);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.quantities[_i])) show_error($"{_where} :: self.quantities[_i] expected number", true);
            buffer_write(_buffer, buffer_u32, self.quantities[_i]);
        }

        // field: flags, type: UInt32[]
        if (!is_array(self.flags)) show_error($"{_where} :: self.flags expected array", true);
        var _length = array_length(self.flags);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.flags[_i])) show_error($"{_where} :: self.flags[_i] expected number", true);
            buffer_write(_buffer, buffer_u32, self.flags[_i]);
        }

    }
}

/**
 * @func __SteamInventoryResultItems_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryResultItems} 
 * @ignore 
 */
function __SteamInventoryResultItems_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryResultItems();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: count, type: UInt32
        self.count = buffer_read(_buffer, buffer_u32);

        // field: item_instance_ids, type: UInt64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.item_instance_ids = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.item_instance_ids[_i] = buffer_read(_buffer, buffer_u64);
        }

        // field: item_def_ids, type: UInt32[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.item_def_ids = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.item_def_ids[_i] = buffer_read(_buffer, buffer_u32);
        }

        // field: quantities, type: UInt32[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.quantities = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.quantities[_i] = buffer_read(_buffer, buffer_u32);
        }

        // field: flags, type: UInt32[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.flags = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.flags[_i] = buffer_read(_buffer, buffer_u32);
        }

    }

    return _inst;
}

/**
 * @func __SteamInventoryDeserializeResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryDeserializeResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryDeserializeResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: result_handle, type: Int32
        if (!is_numeric(self.result_handle)) show_error($"{_where} :: self.result_handle expected number", true);
        buffer_write(_buffer, buffer_s32, self.result_handle);

        // field: status, type: enum SteamApiResult

        if (!is_numeric(self.status)) show_error($"{_where} :: self.status expected number", true);
        buffer_write(_buffer, buffer_u64, self.status);

    }
}

/**
 * @func __SteamInventoryDeserializeResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryDeserializeResult} 
 * @ignore 
 */
function __SteamInventoryDeserializeResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryDeserializeResult();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: result_handle, type: Int32
        self.result_handle = buffer_read(_buffer, buffer_s32);

        // field: status, type: enum SteamApiResult
        self.status = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamInventorySerializeResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventorySerializeResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventorySerializeResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: bytes_written, type: UInt32
        if (!is_numeric(self.bytes_written)) show_error($"{_where} :: self.bytes_written expected number", true);
        buffer_write(_buffer, buffer_u32, self.bytes_written);

    }
}

/**
 * @func __SteamInventorySerializeResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventorySerializeResult} 
 * @ignore 
 */
function __SteamInventorySerializeResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventorySerializeResult();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: bytes_written, type: UInt32
        self.bytes_written = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamInventoryItemProperty_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryItemProperty} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryItemProperty_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: value, type: String
        if (!is_string(self.value)) show_error($"{_where} :: self.value expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.value));
        buffer_write(_buffer, buffer_string, self.value);

    }
}

/**
 * @func __SteamInventoryItemProperty_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryItemProperty} 
 * @ignore 
 */
function __SteamInventoryItemProperty_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryItemProperty();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: value, type: String
        buffer_read(_buffer, buffer_u32);
        self.value = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamInventoryItemsWithPrices_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryItemsWithPrices} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryItemsWithPrices_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: count, type: UInt32
        if (!is_numeric(self.count)) show_error($"{_where} :: self.count expected number", true);
        buffer_write(_buffer, buffer_u32, self.count);

        // field: item_def_ids, type: UInt32[]
        if (!is_array(self.item_def_ids)) show_error($"{_where} :: self.item_def_ids expected array", true);
        var _length = array_length(self.item_def_ids);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.item_def_ids[_i])) show_error($"{_where} :: self.item_def_ids[_i] expected number", true);
            buffer_write(_buffer, buffer_u32, self.item_def_ids[_i]);
        }

        // field: current_prices, type: Int64[]
        if (!is_array(self.current_prices)) show_error($"{_where} :: self.current_prices expected array", true);
        var _length = array_length(self.current_prices);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.current_prices[_i])) show_error($"{_where} :: self.current_prices[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.current_prices[_i]);
        }

        // field: base_prices, type: Int64[]
        if (!is_array(self.base_prices)) show_error($"{_where} :: self.base_prices expected array", true);
        var _length = array_length(self.base_prices);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.base_prices[_i])) show_error($"{_where} :: self.base_prices[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.base_prices[_i]);
        }

    }
}

/**
 * @func __SteamInventoryItemsWithPrices_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryItemsWithPrices} 
 * @ignore 
 */
function __SteamInventoryItemsWithPrices_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryItemsWithPrices();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: count, type: UInt32
        self.count = buffer_read(_buffer, buffer_u32);

        // field: item_def_ids, type: UInt32[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.item_def_ids = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.item_def_ids[_i] = buffer_read(_buffer, buffer_u32);
        }

        // field: current_prices, type: Int64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.current_prices = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.current_prices[_i] = buffer_read(_buffer, buffer_u64);
        }

        // field: base_prices, type: Int64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.base_prices = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.base_prices[_i] = buffer_read(_buffer, buffer_u64);
        }

    }

    return _inst;
}

/**
 * @func __SteamInventoryDefProperty_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryDefProperty} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryDefProperty_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: value, type: String
        if (!is_string(self.value)) show_error($"{_where} :: self.value expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.value));
        buffer_write(_buffer, buffer_string, self.value);

    }
}

/**
 * @func __SteamInventoryDefProperty_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryDefProperty} 
 * @ignore 
 */
function __SteamInventoryDefProperty_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryDefProperty();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: value, type: String
        buffer_read(_buffer, buffer_u32);
        self.value = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamInventoryItemPrice_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryItemPrice} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryItemPrice_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: current_price, type: UInt64
        if (!is_numeric(self.current_price)) show_error($"{_where} :: self.current_price expected number", true);
        buffer_write(_buffer, buffer_u64, self.current_price);

        // field: base_price, type: UInt64
        if (!is_numeric(self.base_price)) show_error($"{_where} :: self.base_price expected number", true);
        buffer_write(_buffer, buffer_u64, self.base_price);

    }
}

/**
 * @func __SteamInventoryItemPrice_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryItemPrice} 
 * @ignore 
 */
function __SteamInventoryItemPrice_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryItemPrice();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: current_price, type: UInt64
        self.current_price = buffer_read(_buffer, buffer_u64);

        // field: base_price, type: UInt64
        self.base_price = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamInventoryResultReady_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryResultReady} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryResultReady_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result_handle, type: Int32
        if (!is_numeric(self.result_handle)) show_error($"{_where} :: self.result_handle expected number", true);
        buffer_write(_buffer, buffer_s32, self.result_handle);

        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamInventoryResultReady_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryResultReady} 
 * @ignore 
 */
function __SteamInventoryResultReady_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryResultReady();
    with (_inst)
    {
        // field: result_handle, type: Int32
        self.result_handle = buffer_read(_buffer, buffer_s32);

        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamInventoryFullUpdate_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryFullUpdate} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryFullUpdate_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result_handle, type: Int32
        if (!is_numeric(self.result_handle)) show_error($"{_where} :: self.result_handle expected number", true);
        buffer_write(_buffer, buffer_s32, self.result_handle);

    }
}

/**
 * @func __SteamInventoryFullUpdate_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryFullUpdate} 
 * @ignore 
 */
function __SteamInventoryFullUpdate_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryFullUpdate();
    with (_inst)
    {
        // field: result_handle, type: Int32
        self.result_handle = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamInventoryDefinitionUpdate_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryDefinitionUpdate} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryDefinitionUpdate_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: dummy, type: Int32
        if (!is_numeric(self.dummy)) show_error($"{_where} :: self.dummy expected number", true);
        buffer_write(_buffer, buffer_s32, self.dummy);

    }
}

/**
 * @func __SteamInventoryDefinitionUpdate_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryDefinitionUpdate} 
 * @ignore 
 */
function __SteamInventoryDefinitionUpdate_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryDefinitionUpdate();
    with (_inst)
    {
        // field: dummy, type: Int32
        self.dummy = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamInventoryStartPurchaseResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryStartPurchaseResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryStartPurchaseResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: order_id, type: UInt64
        if (!is_numeric(self.order_id)) show_error($"{_where} :: self.order_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.order_id);

        // field: transaction_id, type: UInt64
        if (!is_numeric(self.transaction_id)) show_error($"{_where} :: self.transaction_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.transaction_id);

    }
}

/**
 * @func __SteamInventoryStartPurchaseResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryStartPurchaseResult} 
 * @ignore 
 */
function __SteamInventoryStartPurchaseResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryStartPurchaseResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: order_id, type: UInt64
        self.order_id = buffer_read(_buffer, buffer_u64);

        // field: transaction_id, type: UInt64
        self.transaction_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamInventoryRequestPricesResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamInventoryRequestPricesResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamInventoryRequestPricesResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: currency, type: String
        if (!is_string(self.currency)) show_error($"{_where} :: self.currency expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.currency));
        buffer_write(_buffer, buffer_string, self.currency);

    }
}

/**
 * @func __SteamInventoryRequestPricesResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamInventoryRequestPricesResult} 
 * @ignore 
 */
function __SteamInventoryRequestPricesResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamInventoryRequestPricesResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: currency, type: String
        buffer_read(_buffer, buffer_u32);
        self.currency = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageFileNameAndSize_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageFileNameAndSize} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageFileNameAndSize_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: file_name, type: String
        if (!is_string(self.file_name)) show_error($"{_where} :: self.file_name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.file_name));
        buffer_write(_buffer, buffer_string, self.file_name);

        // field: file_size, type: Int32
        if (!is_numeric(self.file_size)) show_error($"{_where} :: self.file_size expected number", true);
        buffer_write(_buffer, buffer_s32, self.file_size);

    }
}

/**
 * @func __SteamRemoteStorageFileNameAndSize_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageFileNameAndSize} 
 * @ignore 
 */
function __SteamRemoteStorageFileNameAndSize_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageFileNameAndSize();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: file_name, type: String
        buffer_read(_buffer, buffer_u32);
        self.file_name = buffer_read(_buffer, buffer_string);

        // field: file_size, type: Int32
        self.file_size = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageQuota_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageQuota} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageQuota_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: total_bytes, type: UInt64
        if (!is_numeric(self.total_bytes)) show_error($"{_where} :: self.total_bytes expected number", true);
        buffer_write(_buffer, buffer_u64, self.total_bytes);

        // field: available_bytes, type: UInt64
        if (!is_numeric(self.available_bytes)) show_error($"{_where} :: self.available_bytes expected number", true);
        buffer_write(_buffer, buffer_u64, self.available_bytes);

    }
}

/**
 * @func __SteamRemoteStorageQuota_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageQuota} 
 * @ignore 
 */
function __SteamRemoteStorageQuota_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageQuota();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: total_bytes, type: UInt64
        self.total_bytes = buffer_read(_buffer, buffer_u64);

        // field: available_bytes, type: UInt64
        self.available_bytes = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageUgcDetails_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageUgcDetails} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageUgcDetails_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: ugc_handle, type: UInt64
        if (!is_numeric(self.ugc_handle)) show_error($"{_where} :: self.ugc_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.ugc_handle);

        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: size_in_bytes, type: Int32
        if (!is_numeric(self.size_in_bytes)) show_error($"{_where} :: self.size_in_bytes expected number", true);
        buffer_write(_buffer, buffer_s32, self.size_in_bytes);

        // field: file_name, type: String
        if (!is_string(self.file_name)) show_error($"{_where} :: self.file_name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.file_name));
        buffer_write(_buffer, buffer_string, self.file_name);

        // field: steam_id_owner, type: UInt64
        if (!is_numeric(self.steam_id_owner)) show_error($"{_where} :: self.steam_id_owner expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_owner);

    }
}

/**
 * @func __SteamRemoteStorageUgcDetails_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageUgcDetails} 
 * @ignore 
 */
function __SteamRemoteStorageUgcDetails_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageUgcDetails();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: ugc_handle, type: UInt64
        self.ugc_handle = buffer_read(_buffer, buffer_u64);

        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: size_in_bytes, type: Int32
        self.size_in_bytes = buffer_read(_buffer, buffer_s32);

        // field: file_name, type: String
        buffer_read(_buffer, buffer_u32);
        self.file_name = buffer_read(_buffer, buffer_string);

        // field: steam_id_owner, type: UInt64
        self.steam_id_owner = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageFileShareResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageFileShareResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageFileShareResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: ugc_handle, type: UInt64
        if (!is_numeric(self.ugc_handle)) show_error($"{_where} :: self.ugc_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.ugc_handle);

        // field: file_name, type: String
        if (!is_string(self.file_name)) show_error($"{_where} :: self.file_name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.file_name));
        buffer_write(_buffer, buffer_string, self.file_name);

    }
}

/**
 * @func __SteamRemoteStorageFileShareResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageFileShareResult} 
 * @ignore 
 */
function __SteamRemoteStorageFileShareResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageFileShareResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: ugc_handle, type: UInt64
        self.ugc_handle = buffer_read(_buffer, buffer_u64);

        // field: file_name, type: String
        buffer_read(_buffer, buffer_u32);
        self.file_name = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageDownloadUgcResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageDownloadUgcResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageDownloadUgcResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: ugc_handle, type: UInt64
        if (!is_numeric(self.ugc_handle)) show_error($"{_where} :: self.ugc_handle expected number", true);
        buffer_write(_buffer, buffer_u64, self.ugc_handle);

        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: size_in_bytes, type: Int32
        if (!is_numeric(self.size_in_bytes)) show_error($"{_where} :: self.size_in_bytes expected number", true);
        buffer_write(_buffer, buffer_s32, self.size_in_bytes);

        // field: file_name, type: String
        if (!is_string(self.file_name)) show_error($"{_where} :: self.file_name expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.file_name));
        buffer_write(_buffer, buffer_string, self.file_name);

        // field: steam_id_owner, type: UInt64
        if (!is_numeric(self.steam_id_owner)) show_error($"{_where} :: self.steam_id_owner expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_owner);

    }
}

/**
 * @func __SteamRemoteStorageDownloadUgcResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageDownloadUgcResult} 
 * @ignore 
 */
function __SteamRemoteStorageDownloadUgcResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageDownloadUgcResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: ugc_handle, type: UInt64
        self.ugc_handle = buffer_read(_buffer, buffer_u64);

        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: size_in_bytes, type: Int32
        self.size_in_bytes = buffer_read(_buffer, buffer_s32);

        // field: file_name, type: String
        buffer_read(_buffer, buffer_u32);
        self.file_name = buffer_read(_buffer, buffer_string);

        // field: steam_id_owner, type: UInt64
        self.steam_id_owner = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStoragePublishedFileSubscribed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStoragePublishedFileSubscribed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStoragePublishedFileSubscribed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamRemoteStoragePublishedFileSubscribed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStoragePublishedFileSubscribed} 
 * @ignore 
 */
function __SteamRemoteStoragePublishedFileSubscribed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStoragePublishedFileSubscribed();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStoragePublishedFileUnsubscribed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStoragePublishedFileUnsubscribed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStoragePublishedFileUnsubscribed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: app_id, type: UInt32
        if (!is_numeric(self.app_id)) show_error($"{_where} :: self.app_id expected number", true);
        buffer_write(_buffer, buffer_u32, self.app_id);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamRemoteStoragePublishedFileUnsubscribed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStoragePublishedFileUnsubscribed} 
 * @ignore 
 */
function __SteamRemoteStoragePublishedFileUnsubscribed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStoragePublishedFileUnsubscribed();
    with (_inst)
    {
        // field: app_id, type: UInt32
        self.app_id = buffer_read(_buffer, buffer_u32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageLocalFileChange_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageLocalFileChange} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageLocalFileChange_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: dummy, type: Int32
        if (!is_numeric(self.dummy)) show_error($"{_where} :: self.dummy expected number", true);
        buffer_write(_buffer, buffer_s32, self.dummy);

    }
}

/**
 * @func __SteamRemoteStorageLocalFileChange_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageLocalFileChange} 
 * @ignore 
 */
function __SteamRemoteStorageLocalFileChange_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageLocalFileChange();
    with (_inst)
    {
        // field: dummy, type: Int32
        self.dummy = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStoragePublishFileResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStoragePublishFileResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStoragePublishFileResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

        // field: user_needs_to_accept_wla, type: Bool
        if (!is_bool(self.user_needs_to_accept_wla)) show_error($"{_where} :: self.user_needs_to_accept_wla expected bool", true);
        buffer_write(_buffer, buffer_bool, self.user_needs_to_accept_wla);

    }
}

/**
 * @func __SteamRemoteStoragePublishFileResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStoragePublishFileResult} 
 * @ignore 
 */
function __SteamRemoteStoragePublishFileResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStoragePublishFileResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

        // field: user_needs_to_accept_wla, type: Bool
        self.user_needs_to_accept_wla = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageUpdatePublishedFileResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageUpdatePublishedFileResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageUpdatePublishedFileResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: user_needs_to_accept_wla, type: Bool
        if (!is_bool(self.user_needs_to_accept_wla)) show_error($"{_where} :: self.user_needs_to_accept_wla expected bool", true);
        buffer_write(_buffer, buffer_bool, self.user_needs_to_accept_wla);

    }
}

/**
 * @func __SteamRemoteStorageUpdatePublishedFileResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageUpdatePublishedFileResult} 
 * @ignore 
 */
function __SteamRemoteStorageUpdatePublishedFileResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageUpdatePublishedFileResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: user_needs_to_accept_wla, type: Bool
        self.user_needs_to_accept_wla = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageSubscribePublishedFileResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageSubscribePublishedFileResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageSubscribePublishedFileResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamRemoteStorageSubscribePublishedFileResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageSubscribePublishedFileResult} 
 * @ignore 
 */
function __SteamRemoteStorageSubscribePublishedFileResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageSubscribePublishedFileResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamRemoteStorageUnsubscribePublishedFileResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamRemoteStorageUnsubscribePublishedFileResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamRemoteStorageUnsubscribePublishedFileResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: published_file_id, type: UInt64
        if (!is_numeric(self.published_file_id)) show_error($"{_where} :: self.published_file_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.published_file_id);

    }
}

/**
 * @func __SteamRemoteStorageUnsubscribePublishedFileResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamRemoteStorageUnsubscribePublishedFileResult} 
 * @ignore 
 */
function __SteamRemoteStorageUnsubscribePublishedFileResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamRemoteStorageUnsubscribePublishedFileResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: published_file_id, type: UInt64
        self.published_file_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyCreated_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyCreated} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyCreated_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: lobby_id, type: UInt64
        if (!is_numeric(self.lobby_id)) show_error($"{_where} :: self.lobby_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_id);

    }
}

/**
 * @func __SteamMatchmakingLobbyCreated_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyCreated} 
 * @ignore 
 */
function __SteamMatchmakingLobbyCreated_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyCreated();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: lobby_id, type: UInt64
        self.lobby_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyEnter_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyEnter} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyEnter_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        if (!is_numeric(self.lobby_id)) show_error($"{_where} :: self.lobby_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_id);

        // field: chat_permissions, type: UInt32
        if (!is_numeric(self.chat_permissions)) show_error($"{_where} :: self.chat_permissions expected number", true);
        buffer_write(_buffer, buffer_u32, self.chat_permissions);

        // field: locked, type: Bool
        if (!is_bool(self.locked)) show_error($"{_where} :: self.locked expected bool", true);
        buffer_write(_buffer, buffer_bool, self.locked);

        // field: response, type: UInt32
        if (!is_numeric(self.response)) show_error($"{_where} :: self.response expected number", true);
        buffer_write(_buffer, buffer_u32, self.response);

    }
}

/**
 * @func __SteamMatchmakingLobbyEnter_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyEnter} 
 * @ignore 
 */
function __SteamMatchmakingLobbyEnter_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyEnter();
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        self.lobby_id = buffer_read(_buffer, buffer_u64);

        // field: chat_permissions, type: UInt32
        self.chat_permissions = buffer_read(_buffer, buffer_u32);

        // field: locked, type: Bool
        self.locked = buffer_read(_buffer, buffer_bool);

        // field: response, type: UInt32
        self.response = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyMatchList_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyMatchList} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyMatchList_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: lobbies_count, type: UInt32
        if (!is_numeric(self.lobbies_count)) show_error($"{_where} :: self.lobbies_count expected number", true);
        buffer_write(_buffer, buffer_u32, self.lobbies_count);

    }
}

/**
 * @func __SteamMatchmakingLobbyMatchList_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyMatchList} 
 * @ignore 
 */
function __SteamMatchmakingLobbyMatchList_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyMatchList();
    with (_inst)
    {
        // field: lobbies_count, type: UInt32
        self.lobbies_count = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyDataUpdate_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyDataUpdate} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyDataUpdate_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        if (!is_numeric(self.lobby_id)) show_error($"{_where} :: self.lobby_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_id);

        // field: member_id, type: UInt64
        if (!is_numeric(self.member_id)) show_error($"{_where} :: self.member_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.member_id);

        // field: success, type: Bool
        if (!is_bool(self.success)) show_error($"{_where} :: self.success expected bool", true);
        buffer_write(_buffer, buffer_bool, self.success);

    }
}

/**
 * @func __SteamMatchmakingLobbyDataUpdate_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyDataUpdate} 
 * @ignore 
 */
function __SteamMatchmakingLobbyDataUpdate_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyDataUpdate();
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        self.lobby_id = buffer_read(_buffer, buffer_u64);

        // field: member_id, type: UInt64
        self.member_id = buffer_read(_buffer, buffer_u64);

        // field: success, type: Bool
        self.success = buffer_read(_buffer, buffer_bool);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyChatUpdate_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyChatUpdate} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyChatUpdate_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        if (!is_numeric(self.lobby_id)) show_error($"{_where} :: self.lobby_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_id);

        // field: user_changed_id, type: UInt64
        if (!is_numeric(self.user_changed_id)) show_error($"{_where} :: self.user_changed_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.user_changed_id);

        // field: making_change_id, type: UInt64
        if (!is_numeric(self.making_change_id)) show_error($"{_where} :: self.making_change_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.making_change_id);

        // field: chat_member_state_change, type: UInt32
        if (!is_numeric(self.chat_member_state_change)) show_error($"{_where} :: self.chat_member_state_change expected number", true);
        buffer_write(_buffer, buffer_u32, self.chat_member_state_change);

    }
}

/**
 * @func __SteamMatchmakingLobbyChatUpdate_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyChatUpdate} 
 * @ignore 
 */
function __SteamMatchmakingLobbyChatUpdate_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyChatUpdate();
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        self.lobby_id = buffer_read(_buffer, buffer_u64);

        // field: user_changed_id, type: UInt64
        self.user_changed_id = buffer_read(_buffer, buffer_u64);

        // field: making_change_id, type: UInt64
        self.making_change_id = buffer_read(_buffer, buffer_u64);

        // field: chat_member_state_change, type: UInt32
        self.chat_member_state_change = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyChatMsg_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyChatMsg} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyChatMsg_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        if (!is_numeric(self.lobby_id)) show_error($"{_where} :: self.lobby_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_id);

        // field: sender_id, type: UInt64
        if (!is_numeric(self.sender_id)) show_error($"{_where} :: self.sender_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.sender_id);

        // field: chat_entry_type, type: Int32
        if (!is_numeric(self.chat_entry_type)) show_error($"{_where} :: self.chat_entry_type expected number", true);
        buffer_write(_buffer, buffer_s32, self.chat_entry_type);

        // field: message_size, type: UInt32
        if (!is_numeric(self.message_size)) show_error($"{_where} :: self.message_size expected number", true);
        buffer_write(_buffer, buffer_u32, self.message_size);

    }
}

/**
 * @func __SteamMatchmakingLobbyChatMsg_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyChatMsg} 
 * @ignore 
 */
function __SteamMatchmakingLobbyChatMsg_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyChatMsg();
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        self.lobby_id = buffer_read(_buffer, buffer_u64);

        // field: sender_id, type: UInt64
        self.sender_id = buffer_read(_buffer, buffer_u64);

        // field: chat_entry_type, type: Int32
        self.chat_entry_type = buffer_read(_buffer, buffer_s32);

        // field: message_size, type: UInt32
        self.message_size = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyGameCreated_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyGameCreated} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyGameCreated_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        if (!is_numeric(self.lobby_id)) show_error($"{_where} :: self.lobby_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_id);

        // field: server_ip, type: UInt32
        if (!is_numeric(self.server_ip)) show_error($"{_where} :: self.server_ip expected number", true);
        buffer_write(_buffer, buffer_u32, self.server_ip);

        // field: server_port, type: UInt32
        if (!is_numeric(self.server_port)) show_error($"{_where} :: self.server_port expected number", true);
        buffer_write(_buffer, buffer_u32, self.server_port);

        // field: game_server_id, type: UInt64
        if (!is_numeric(self.game_server_id)) show_error($"{_where} :: self.game_server_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.game_server_id);

    }
}

/**
 * @func __SteamMatchmakingLobbyGameCreated_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyGameCreated} 
 * @ignore 
 */
function __SteamMatchmakingLobbyGameCreated_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyGameCreated();
    with (_inst)
    {
        // field: lobby_id, type: UInt64
        self.lobby_id = buffer_read(_buffer, buffer_u64);

        // field: server_ip, type: UInt32
        self.server_ip = buffer_read(_buffer, buffer_u32);

        // field: server_port, type: UInt32
        self.server_port = buffer_read(_buffer, buffer_u32);

        // field: game_server_id, type: UInt64
        self.game_server_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyInvite_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyInvite} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyInvite_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: inviter_id, type: UInt64
        if (!is_numeric(self.inviter_id)) show_error($"{_where} :: self.inviter_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.inviter_id);

        // field: lobby_id, type: UInt64
        if (!is_numeric(self.lobby_id)) show_error($"{_where} :: self.lobby_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.lobby_id);

        // field: game_id, type: String
        if (!is_string(self.game_id)) show_error($"{_where} :: self.game_id expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.game_id));
        buffer_write(_buffer, buffer_string, self.game_id);

    }
}

/**
 * @func __SteamMatchmakingLobbyInvite_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyInvite} 
 * @ignore 
 */
function __SteamMatchmakingLobbyInvite_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyInvite();
    with (_inst)
    {
        // field: inviter_id, type: UInt64
        self.inviter_id = buffer_read(_buffer, buffer_u64);

        // field: lobby_id, type: UInt64
        self.lobby_id = buffer_read(_buffer, buffer_u64);

        // field: game_id, type: String
        buffer_read(_buffer, buffer_u32);
        self.game_id = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyChatEntry_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyChatEntry} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyChatEntry_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: bytes, type: UInt32
        if (!is_numeric(self.bytes)) show_error($"{_where} :: self.bytes expected number", true);
        buffer_write(_buffer, buffer_u32, self.bytes);

        // field: sender_id, type: UInt64
        if (!is_numeric(self.sender_id)) show_error($"{_where} :: self.sender_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.sender_id);

        // field: entry_type, type: Int32
        if (!is_numeric(self.entry_type)) show_error($"{_where} :: self.entry_type expected number", true);
        buffer_write(_buffer, buffer_s32, self.entry_type);

    }
}

/**
 * @func __SteamMatchmakingLobbyChatEntry_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyChatEntry} 
 * @ignore 
 */
function __SteamMatchmakingLobbyChatEntry_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyChatEntry();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: bytes, type: UInt32
        self.bytes = buffer_read(_buffer, buffer_u32);

        // field: sender_id, type: UInt64
        self.sender_id = buffer_read(_buffer, buffer_u64);

        // field: entry_type, type: Int32
        self.entry_type = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamMatchmakingLobbyGameServer_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamMatchmakingLobbyGameServer} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamMatchmakingLobbyGameServer_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: ip, type: UInt32
        if (!is_numeric(self.ip)) show_error($"{_where} :: self.ip expected number", true);
        buffer_write(_buffer, buffer_u32, self.ip);

        // field: port, type: UInt32
        if (!is_numeric(self.port)) show_error($"{_where} :: self.port expected number", true);
        buffer_write(_buffer, buffer_u32, self.port);

        // field: steam_id_gs, type: UInt64
        if (!is_numeric(self.steam_id_gs)) show_error($"{_where} :: self.steam_id_gs expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_gs);

    }
}

/**
 * @func __SteamMatchmakingLobbyGameServer_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamMatchmakingLobbyGameServer} 
 * @ignore 
 */
function __SteamMatchmakingLobbyGameServer_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamMatchmakingLobbyGameServer();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: ip, type: UInt32
        self.ip = buffer_read(_buffer, buffer_u32);

        // field: port, type: UInt32
        self.port = buffer_read(_buffer, buffer_u32);

        // field: steam_id_gs, type: UInt64
        self.steam_id_gs = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamNetworkingMessagesSessionRequest_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamNetworkingMessagesSessionRequest} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamNetworkingMessagesSessionRequest_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: steam_id_remote, type: UInt64
        if (!is_numeric(self.steam_id_remote)) show_error($"{_where} :: self.steam_id_remote expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_remote);

    }
}

/**
 * @func __SteamNetworkingMessagesSessionRequest_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingMessagesSessionRequest} 
 * @ignore 
 */
function __SteamNetworkingMessagesSessionRequest_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamNetworkingMessagesSessionRequest();
    with (_inst)
    {
        // field: steam_id_remote, type: UInt64
        self.steam_id_remote = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamNetworkingMessagesSessionFailed_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamNetworkingMessagesSessionFailed} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamNetworkingMessagesSessionFailed_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: steam_id_remote, type: UInt64
        if (!is_numeric(self.steam_id_remote)) show_error($"{_where} :: self.steam_id_remote expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_remote);

        // field: end_reason, type: Int32
        if (!is_numeric(self.end_reason)) show_error($"{_where} :: self.end_reason expected number", true);
        buffer_write(_buffer, buffer_s32, self.end_reason);

        // field: debug_msg, type: String
        if (!is_string(self.debug_msg)) show_error($"{_where} :: self.debug_msg expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.debug_msg));
        buffer_write(_buffer, buffer_string, self.debug_msg);

    }
}

/**
 * @func __SteamNetworkingMessagesSessionFailed_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingMessagesSessionFailed} 
 * @ignore 
 */
function __SteamNetworkingMessagesSessionFailed_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamNetworkingMessagesSessionFailed();
    with (_inst)
    {
        // field: steam_id_remote, type: UInt64
        self.steam_id_remote = buffer_read(_buffer, buffer_u64);

        // field: end_reason, type: Int32
        self.end_reason = buffer_read(_buffer, buffer_s32);

        // field: debug_msg, type: String
        buffer_read(_buffer, buffer_u32);
        self.debug_msg = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamNetworkingMessagesReceived_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamNetworkingMessagesReceived} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamNetworkingMessagesReceived_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: steam_id_remote, type: UInt64
        if (!is_numeric(self.steam_id_remote)) show_error($"{_where} :: self.steam_id_remote expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_remote);

        // field: channel, type: Int32
        if (!is_numeric(self.channel)) show_error($"{_where} :: self.channel expected number", true);
        buffer_write(_buffer, buffer_s32, self.channel);

        // field: bytes_written, type: UInt32
        if (!is_numeric(self.bytes_written)) show_error($"{_where} :: self.bytes_written expected number", true);
        buffer_write(_buffer, buffer_u32, self.bytes_written);

        // field: send_flags, type: Int32
        if (!is_numeric(self.send_flags)) show_error($"{_where} :: self.send_flags expected number", true);
        buffer_write(_buffer, buffer_s32, self.send_flags);

    }
}

/**
 * @func __SteamNetworkingMessagesReceived_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingMessagesReceived} 
 * @ignore 
 */
function __SteamNetworkingMessagesReceived_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamNetworkingMessagesReceived();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: steam_id_remote, type: UInt64
        self.steam_id_remote = buffer_read(_buffer, buffer_u64);

        // field: channel, type: Int32
        self.channel = buffer_read(_buffer, buffer_s32);

        // field: bytes_written, type: UInt32
        self.bytes_written = buffer_read(_buffer, buffer_u32);

        // field: send_flags, type: Int32
        self.send_flags = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamNetworkingSocketsConnectionInfo_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamNetworkingSocketsConnectionInfo} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamNetworkingSocketsConnectionInfo_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: user_data, type: UInt64
        if (!is_numeric(self.user_data)) show_error($"{_where} :: self.user_data expected number", true);
        buffer_write(_buffer, buffer_u64, self.user_data);

        // field: end_reason, type: Int32
        if (!is_numeric(self.end_reason)) show_error($"{_where} :: self.end_reason expected number", true);
        buffer_write(_buffer, buffer_s32, self.end_reason);

        // field: end_debug, type: String
        if (!is_string(self.end_debug)) show_error($"{_where} :: self.end_debug expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.end_debug));
        buffer_write(_buffer, buffer_string, self.end_debug);

        // field: connection_description, type: String
        if (!is_string(self.connection_description)) show_error($"{_where} :: self.connection_description expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.connection_description));
        buffer_write(_buffer, buffer_string, self.connection_description);

        // field: flags, type: Int32
        if (!is_numeric(self.flags)) show_error($"{_where} :: self.flags expected number", true);
        buffer_write(_buffer, buffer_s32, self.flags);

        // field: state, type: Int32
        if (!is_numeric(self.state)) show_error($"{_where} :: self.state expected number", true);
        buffer_write(_buffer, buffer_s32, self.state);

        // field: steam_id_remote, type: UInt64
        if (!is_numeric(self.steam_id_remote)) show_error($"{_where} :: self.steam_id_remote expected number", true);
        buffer_write(_buffer, buffer_u64, self.steam_id_remote);

        // field: addr_remote, type: String
        if (!is_string(self.addr_remote)) show_error($"{_where} :: self.addr_remote expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.addr_remote));
        buffer_write(_buffer, buffer_string, self.addr_remote);

    }
}

/**
 * @func __SteamNetworkingSocketsConnectionInfo_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingSocketsConnectionInfo} 
 * @ignore 
 */
function __SteamNetworkingSocketsConnectionInfo_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamNetworkingSocketsConnectionInfo();
    with (_inst)
    {
        // field: user_data, type: UInt64
        self.user_data = buffer_read(_buffer, buffer_u64);

        // field: end_reason, type: Int32
        self.end_reason = buffer_read(_buffer, buffer_s32);

        // field: end_debug, type: String
        buffer_read(_buffer, buffer_u32);
        self.end_debug = buffer_read(_buffer, buffer_string);

        // field: connection_description, type: String
        buffer_read(_buffer, buffer_u32);
        self.connection_description = buffer_read(_buffer, buffer_string);

        // field: flags, type: Int32
        self.flags = buffer_read(_buffer, buffer_s32);

        // field: state, type: Int32
        self.state = buffer_read(_buffer, buffer_s32);

        // field: steam_id_remote, type: UInt64
        self.steam_id_remote = buffer_read(_buffer, buffer_u64);

        // field: addr_remote, type: String
        buffer_read(_buffer, buffer_u32);
        self.addr_remote = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamNetworkingSocketsReceived_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamNetworkingSocketsReceived} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamNetworkingSocketsReceived_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: conn, type: UInt32
        if (!is_numeric(self.conn)) show_error($"{_where} :: self.conn expected number", true);
        buffer_write(_buffer, buffer_u32, self.conn);

        // field: bytes_written, type: UInt32
        if (!is_numeric(self.bytes_written)) show_error($"{_where} :: self.bytes_written expected number", true);
        buffer_write(_buffer, buffer_u32, self.bytes_written);

        // field: flags, type: Int32
        if (!is_numeric(self.flags)) show_error($"{_where} :: self.flags expected number", true);
        buffer_write(_buffer, buffer_s32, self.flags);

    }
}

/**
 * @func __SteamNetworkingSocketsReceived_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 * @ignore 
 */
function __SteamNetworkingSocketsReceived_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamNetworkingSocketsReceived();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: conn, type: UInt32
        self.conn = buffer_read(_buffer, buffer_u32);

        // field: bytes_written, type: UInt32
        self.bytes_written = buffer_read(_buffer, buffer_u32);

        // field: flags, type: Int32
        self.flags = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamPartiesAvailableBeaconLocationCount_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamPartiesAvailableBeaconLocationCount} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamPartiesAvailableBeaconLocationCount_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: count, type: UInt32
        if (!is_numeric(self.count)) show_error($"{_where} :: self.count expected number", true);
        buffer_write(_buffer, buffer_u32, self.count);

    }
}

/**
 * @func __SteamPartiesAvailableBeaconLocationCount_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamPartiesAvailableBeaconLocationCount} 
 * @ignore 
 */
function __SteamPartiesAvailableBeaconLocationCount_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamPartiesAvailableBeaconLocationCount();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: count, type: UInt32
        self.count = buffer_read(_buffer, buffer_u32);

    }

    return _inst;
}

/**
 * @func __SteamPartiesAvailableBeaconLocations_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamPartiesAvailableBeaconLocations} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamPartiesAvailableBeaconLocations_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: count, type: UInt32
        if (!is_numeric(self.count)) show_error($"{_where} :: self.count expected number", true);
        buffer_write(_buffer, buffer_u32, self.count);

        // field: location_types, type: enum SteamPartiesBeaconLocationType[]
        if (!is_array(self.location_types)) show_error($"{_where} :: self.location_types expected array", true);
        var _length = array_length(self.location_types);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {

            if (!is_numeric(self.location_types[_i])) show_error($"{_where} :: self.location_types[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.location_types[_i]);
        }

        // field: location_ids, type: UInt64[]
        if (!is_array(self.location_ids)) show_error($"{_where} :: self.location_ids expected array", true);
        var _length = array_length(self.location_ids);
        buffer_write(_buffer, buffer_u32, _length);
        for (var _i = 0; _i < _length; ++_i)
        {
            if (!is_numeric(self.location_ids[_i])) show_error($"{_where} :: self.location_ids[_i] expected number", true);
            buffer_write(_buffer, buffer_u64, self.location_ids[_i]);
        }

    }
}

/**
 * @func __SteamPartiesAvailableBeaconLocations_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamPartiesAvailableBeaconLocations} 
 * @ignore 
 */
function __SteamPartiesAvailableBeaconLocations_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamPartiesAvailableBeaconLocations();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: count, type: UInt32
        self.count = buffer_read(_buffer, buffer_u32);

        // field: location_types, type: enum SteamPartiesBeaconLocationType[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.location_types = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.location_types[_i] = buffer_read(_buffer, buffer_u64);
        }

        // field: location_ids, type: UInt64[]
        var _length = buffer_read(_buffer, buffer_u32);
        self.location_ids = array_create(_length);
        for (var _i = 0; _i < _length; ++_i)
        {
            self.location_ids[_i] = buffer_read(_buffer, buffer_u64);
        }

    }

    return _inst;
}

/**
 * @func __SteamPartiesCreateBeaconResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamPartiesCreateBeaconResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamPartiesCreateBeaconResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: beacon_id, type: UInt64
        if (!is_numeric(self.beacon_id)) show_error($"{_where} :: self.beacon_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.beacon_id);

    }
}

/**
 * @func __SteamPartiesCreateBeaconResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamPartiesCreateBeaconResult} 
 * @ignore 
 */
function __SteamPartiesCreateBeaconResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamPartiesCreateBeaconResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: beacon_id, type: UInt64
        self.beacon_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamPartiesJoinPartyResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamPartiesJoinPartyResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamPartiesJoinPartyResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

        // field: beacon_id, type: UInt64
        if (!is_numeric(self.beacon_id)) show_error($"{_where} :: self.beacon_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.beacon_id);

        // field: beacon_owner_steam_id, type: UInt64
        if (!is_numeric(self.beacon_owner_steam_id)) show_error($"{_where} :: self.beacon_owner_steam_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.beacon_owner_steam_id);

        // field: connect_string, type: String
        if (!is_string(self.connect_string)) show_error($"{_where} :: self.connect_string expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.connect_string));
        buffer_write(_buffer, buffer_string, self.connect_string);

    }
}

/**
 * @func __SteamPartiesJoinPartyResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamPartiesJoinPartyResult} 
 * @ignore 
 */
function __SteamPartiesJoinPartyResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamPartiesJoinPartyResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

        // field: beacon_id, type: UInt64
        self.beacon_id = buffer_read(_buffer, buffer_u64);

        // field: beacon_owner_steam_id, type: UInt64
        self.beacon_owner_steam_id = buffer_read(_buffer, buffer_u64);

        // field: connect_string, type: String
        buffer_read(_buffer, buffer_u32);
        self.connect_string = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamPartiesChangeNumOpenSlotsResult_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamPartiesChangeNumOpenSlotsResult} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamPartiesChangeNumOpenSlotsResult_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: result, type: Int32
        if (!is_numeric(self.result)) show_error($"{_where} :: self.result expected number", true);
        buffer_write(_buffer, buffer_s32, self.result);

    }
}

/**
 * @func __SteamPartiesChangeNumOpenSlotsResult_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamPartiesChangeNumOpenSlotsResult} 
 * @ignore 
 */
function __SteamPartiesChangeNumOpenSlotsResult_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamPartiesChangeNumOpenSlotsResult();
    with (_inst)
    {
        // field: result, type: Int32
        self.result = buffer_read(_buffer, buffer_s32);

    }

    return _inst;
}

/**
 * @func __SteamPartiesReservationNotification_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamPartiesReservationNotification} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamPartiesReservationNotification_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: beacon_id, type: UInt64
        if (!is_numeric(self.beacon_id)) show_error($"{_where} :: self.beacon_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.beacon_id);

        // field: joiner_steam_id, type: UInt64
        if (!is_numeric(self.joiner_steam_id)) show_error($"{_where} :: self.joiner_steam_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.joiner_steam_id);

    }
}

/**
 * @func __SteamPartiesReservationNotification_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamPartiesReservationNotification} 
 * @ignore 
 */
function __SteamPartiesReservationNotification_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamPartiesReservationNotification();
    with (_inst)
    {
        // field: beacon_id, type: UInt64
        self.beacon_id = buffer_read(_buffer, buffer_u64);

        // field: joiner_steam_id, type: UInt64
        self.joiner_steam_id = buffer_read(_buffer, buffer_u64);

    }

    return _inst;
}

/**
 * @func __SteamPartiesBeaconDetails_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamPartiesBeaconDetails} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamPartiesBeaconDetails_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: ok, type: Bool
        if (!is_bool(self.ok)) show_error($"{_where} :: self.ok expected bool", true);
        buffer_write(_buffer, buffer_bool, self.ok);

        // field: beacon_owner_steam_id, type: UInt64
        if (!is_numeric(self.beacon_owner_steam_id)) show_error($"{_where} :: self.beacon_owner_steam_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.beacon_owner_steam_id);

        // field: location_type, type: enum SteamPartiesBeaconLocationType

        if (!is_numeric(self.location_type)) show_error($"{_where} :: self.location_type expected number", true);
        buffer_write(_buffer, buffer_u64, self.location_type);

        // field: location_id, type: UInt64
        if (!is_numeric(self.location_id)) show_error($"{_where} :: self.location_id expected number", true);
        buffer_write(_buffer, buffer_u64, self.location_id);

        // field: metadata, type: String
        if (!is_string(self.metadata)) show_error($"{_where} :: self.metadata expected string", true);
        buffer_write(_buffer, buffer_u32, string_byte_length(self.metadata));
        buffer_write(_buffer, buffer_string, self.metadata);

    }
}

/**
 * @func __SteamPartiesBeaconDetails_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamPartiesBeaconDetails} 
 * @ignore 
 */
function __SteamPartiesBeaconDetails_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamPartiesBeaconDetails();
    with (_inst)
    {
        // field: ok, type: Bool
        self.ok = buffer_read(_buffer, buffer_bool);

        // field: beacon_owner_steam_id, type: UInt64
        self.beacon_owner_steam_id = buffer_read(_buffer, buffer_u64);

        // field: location_type, type: enum SteamPartiesBeaconLocationType
        self.location_type = buffer_read(_buffer, buffer_u64);

        // field: location_id, type: UInt64
        self.location_id = buffer_read(_buffer, buffer_u64);

        // field: metadata, type: String
        buffer_read(_buffer, buffer_u32);
        self.metadata = buffer_read(_buffer, buffer_string);

    }

    return _inst;
}

/**
 * @func __SteamNetworkingSocketsStatusChanged_encode(_inst, _buffer, _offset, _where)
 * @param {Struct.SteamNetworkingSocketsStatusChanged} _inst
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @param {String} _where
 * @ignore 
 */
function __SteamNetworkingSocketsStatusChanged_encode(_inst, _buffer, _offset, _where = _GMFUNCTION_)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);
    with (_inst)
    {
        // field: conn, type: UInt32
        if (!is_numeric(self.conn)) show_error($"{_where} :: self.conn expected number", true);
        buffer_write(_buffer, buffer_u32, self.conn);

        // field: old_state, type: Int32
        if (!is_numeric(self.old_state)) show_error($"{_where} :: self.old_state expected number", true);
        buffer_write(_buffer, buffer_s32, self.old_state);

        // field: info, type: struct SteamNetworkingSocketsConnectionInfo
        if (self.info.__uid != 2071815473) show_error($"{_where} :: self.info expected SteamNetworkingSocketsConnectionInfo", true);
        __SteamNetworkingSocketsConnectionInfo_encode(self.info, _buffer, buffer_tell(_buffer), _where);

    }
}

/**
 * @func __SteamNetworkingSocketsStatusChanged_decode(_buffer, _offset)
 * @param {Id.Buffer} _buffer
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingSocketsStatusChanged} 
 * @ignore 
 */
function __SteamNetworkingSocketsStatusChanged_decode(_buffer, _offset)
{
    buffer_seek(_buffer, buffer_seek_start, _offset);

    _inst = new SteamNetworkingSocketsStatusChanged();
    with (_inst)
    {
        // field: conn, type: UInt32
        self.conn = buffer_read(_buffer, buffer_u32);

        // field: old_state, type: Int32
        self.old_state = buffer_read(_buffer, buffer_s32);

        // field: info, type: struct SteamNetworkingSocketsConnectionInfo
        self.info = __SteamNetworkingSocketsConnectionInfo_decode(_buffer, buffer_tell(_buffer));

    }

    return _inst;
}

// #####################################################################
// # Functions
// #####################################################################

// Skipping function steam_api_last_error (no wrapper is required)


// Skipping function steam_api_is_initialized (no wrapper is required)


// Skipping function steam_api_init (no wrapper is required)


// Skipping function steam_api_release_current_thread_memory (no wrapper is required)


// Skipping function steam_api_restart_app_if_necessary (no wrapper is required)


// Skipping function steam_api_run_callbacks (no wrapper is required)


// Skipping function steam_api_shutdown (no wrapper is required)


// Skipping function steam_friends_activate_game_overlay (no wrapper is required)


/**
 * @param {Real} _steamIDLobby
 */
function steam_friends_activate_game_overlay_invite_dialog(_steamIDLobby)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDLobby, type: UInt64
    if (!is_numeric(_steamIDLobby)) show_error($"{_GMFUNCTION_} :: _steamIDLobby expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDLobby);

    var _return_value = __steam_friends_activate_game_overlay_invite_dialog(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _nAppID
 * @param {Enum.SteamFriendsOverlayToStoreFlag} _eFlag
 */
function steam_friends_activate_game_overlay_to_store(_nAppID, _eFlag)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _nAppID, type: UInt32
    if (!is_numeric(_nAppID)) show_error($"{_GMFUNCTION_} :: _nAppID expected number", true);
    buffer_write(__args_buffer, buffer_u32, _nAppID);

    // param: _eFlag, type: enum SteamFriendsOverlayToStoreFlag

    if (!is_numeric(_eFlag)) show_error($"{_GMFUNCTION_} :: _eFlag expected number", true);
    buffer_write(__args_buffer, buffer_u64, _eFlag);

    var _return_value = __steam_friends_activate_game_overlay_to_store(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _pchDialog
 * @param {Real} _steamID
 */
function steam_friends_activate_game_overlay_to_user(_pchDialog, _steamID)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _pchDialog, type: String
    if (!is_string(_pchDialog)) show_error($"{_GMFUNCTION_} :: _pchDialog expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pchDialog));
    buffer_write(__args_buffer, buffer_string, _pchDialog);

    // param: _steamID, type: UInt64
    if (!is_numeric(_steamID)) show_error($"{_GMFUNCTION_} :: _steamID expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamID);

    var _return_value = __steam_friends_activate_game_overlay_to_user(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _pchURL
 * @param {Enum.SteamFriendsOverlayToWebpageMode} _eMode
 */
function steam_friends_activate_game_overlay_to_web_page(_pchURL, _eMode)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _pchURL, type: String
    if (!is_string(_pchURL)) show_error($"{_GMFUNCTION_} :: _pchURL expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pchURL));
    buffer_write(__args_buffer, buffer_string, _pchURL);

    // param: _eMode, type: enum SteamFriendsOverlayToWebpageMode

    if (!is_numeric(_eMode)) show_error($"{_GMFUNCTION_} :: _eMode expected number", true);
    buffer_write(__args_buffer, buffer_u64, _eMode);

    var _return_value = __steam_friends_activate_game_overlay_to_web_page(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_rich_presence (no wrapper is required)


/**
 * @param {Real} _steamIDClanChat
 * @returns {Bool} 
 */
function steam_friends_close_clan_chat_window_in_steam(_steamIDClanChat)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClanChat, type: UInt64
    if (!is_numeric(_steamIDClanChat)) show_error($"{_GMFUNCTION_} :: _steamIDClanChat expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClanChat);

    var _return_value = __steam_friends_close_clan_chat_window_in_steam(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Array[Real]} _psteamIDClans
 * @param {Real} _cClansToRequest
 * @param {Function} _callback
 * @returns {Bool} 
 */
function steam_friends_download_clan_activity_counts(_psteamIDClans, _cClansToRequest, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _psteamIDClans, type: UInt64[]
    if (!is_array(_psteamIDClans)) show_error($"{_GMFUNCTION_} :: _psteamIDClans expected array", true);
    var _length = array_length(_psteamIDClans);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_psteamIDClans[_i])) show_error($"{_GMFUNCTION_} :: _psteamIDClans[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _psteamIDClans[_i]);
    }

    // param: _cClansToRequest, type: Int32
    if (!is_numeric(_cClansToRequest)) show_error($"{_GMFUNCTION_} :: _cClansToRequest expected number", true);
    buffer_write(__args_buffer, buffer_s32, _cClansToRequest);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_friends_download_clan_activity_counts(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _unStartIndex
 * @param {Function} _callback
 */
function steam_friends_enumerate_following_list(_unStartIndex, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _unStartIndex, type: UInt32
    if (!is_numeric(_unStartIndex)) show_error($"{_GMFUNCTION_} :: _unStartIndex expected number", true);
    buffer_write(__args_buffer, buffer_u32, _unStartIndex);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_friends_enumerate_following_list(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_friends_set_callback_avatar_image_loaded(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_friends_set_callback_avatar_image_loaded(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_callback_avatar_image_loaded (no wrapper is required)


/**
 * @param {Real} _steamIDClan
 * @param {Real} _iUser
 * @returns {Real} 
 */
function steam_friends_get_chat_member_by_index(_steamIDClan, _iUser)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    // param: _iUser, type: Int32
    if (!is_numeric(_iUser)) show_error($"{_GMFUNCTION_} :: _iUser expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iUser);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_chat_member_by_index(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDClan
 * @returns {Struct.SteamFriendsClanActivityCounts} 
 */
function steam_friends_get_clan_activity_counts(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_clan_activity_counts(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamFriendsClanActivityCounts_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _iClan
 * @returns {Real} 
 */
function steam_friends_get_clan_by_index(_iClan)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_clan_by_index(_iClan, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDClan
 * @returns {Real} 
 */
function steam_friends_get_clan_chat_member_count(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var _return_value = __steam_friends_get_clan_chat_member_count(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClanChat
 * @param {Real} _iMessage
 * @returns {Struct.SteamFriendsClanChatMessage} 
 */
function steam_friends_get_clan_chat_message(_steamIDClanChat, _iMessage)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClanChat, type: UInt64
    if (!is_numeric(_steamIDClanChat)) show_error($"{_GMFUNCTION_} :: _steamIDClanChat expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClanChat);

    // param: _iMessage, type: Int32
    if (!is_numeric(_iMessage)) show_error($"{_GMFUNCTION_} :: _iMessage expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iMessage);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_clan_chat_message(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamFriendsClanChatMessage_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_friends_get_clan_count (no wrapper is required)


/**
 * @param {Real} _steamIDClan
 * @returns {String} 
 */
function steam_friends_get_clan_name(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var _return_value = __steam_friends_get_clan_name(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClan
 * @param {Real} _iOfficer
 * @returns {Real} 
 */
function steam_friends_get_clan_officer_by_index(_steamIDClan, _iOfficer)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    // param: _iOfficer, type: Int32
    if (!is_numeric(_iOfficer)) show_error($"{_GMFUNCTION_} :: _iOfficer expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iOfficer);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_clan_officer_by_index(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDClan
 * @returns {Real} 
 */
function steam_friends_get_clan_officer_count(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var _return_value = __steam_friends_get_clan_officer_count(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClan
 * @returns {Real} 
 */
function steam_friends_get_clan_owner(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_clan_owner(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDClan
 * @returns {String} 
 */
function steam_friends_get_clan_tag(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var _return_value = __steam_friends_get_clan_tag(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _iCoplayFriend
 * @returns {Real} 
 */
function steam_friends_get_coplay_friend(_iCoplayFriend)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_coplay_friend(_iCoplayFriend, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_friends_get_coplay_friend_count (no wrapper is required)


/**
 * @param {Real} _steamID
 * @param {Function} _callback
 */
function steam_friends_get_follower_count(_steamID, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamID, type: UInt64
    if (!is_numeric(_steamID)) show_error($"{_GMFUNCTION_} :: _steamID expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamID);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_friends_get_follower_count(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _iFriend
 * @param {Real} _iFriendFlags
 * @returns {Real} 
 */
function steam_friends_get_friend_by_index(_iFriend, _iFriendFlags)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_friend_by_index(_iFriend, _iFriendFlags, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDFriend
 * @returns {Real} 
 */
function steam_friends_get_friend_coplay_game(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var _return_value = __steam_friends_get_friend_coplay_game(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 * @returns {Real} 
 */
function steam_friends_get_friend_coplay_time(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var _return_value = __steam_friends_get_friend_coplay_time(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_get_friend_count (no wrapper is required)


/**
 * @param {Real} _steamIDSource
 * @returns {Real} 
 */
function steam_friends_get_friend_count_from_source(_steamIDSource)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDSource, type: UInt64
    if (!is_numeric(_steamIDSource)) show_error($"{_GMFUNCTION_} :: _steamIDSource expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDSource);

    var _return_value = __steam_friends_get_friend_count_from_source(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDSource
 * @param {Real} _iFriend
 * @returns {Real} 
 */
function steam_friends_get_friend_from_source_by_index(_steamIDSource, _iFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDSource, type: UInt64
    if (!is_numeric(_steamIDSource)) show_error($"{_GMFUNCTION_} :: _steamIDSource expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDSource);

    // param: _iFriend, type: Int32
    if (!is_numeric(_iFriend)) show_error($"{_GMFUNCTION_} :: _iFriend expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iFriend);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_friend_from_source_by_index(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDFriend
 * @returns {Struct.SteamFriendsFriendGamePlayed} 
 */
function steam_friends_get_friend_game_played(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_friend_game_played(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamFriendsFriendGamePlayed_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _steamIDFriend
 * @param {Real} _iMessageID
 * @param {Real} _cubData
 * @returns {Struct.SteamFriendsFriendMessage} 
 */
function steam_friends_get_friend_message(_steamIDFriend, _iMessageID, _cubData)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    // param: _iMessageID, type: Int32
    if (!is_numeric(_iMessageID)) show_error($"{_GMFUNCTION_} :: _iMessageID expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iMessageID);

    // param: _cubData, type: Int32
    if (!is_numeric(_cubData)) show_error($"{_GMFUNCTION_} :: _cubData expected number", true);
    buffer_write(__args_buffer, buffer_s32, _cubData);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_friend_message(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamFriendsFriendMessage_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _steamIDFriend
 * @returns {String} 
 */
function steam_friends_get_friend_persona_name(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var _return_value = __steam_friends_get_friend_persona_name(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 * @param {Real} _iPersonaName
 * @returns {String} 
 */
function steam_friends_get_friend_persona_name_history(_steamIDFriend, _iPersonaName)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    // param: _iPersonaName, type: Int32
    if (!is_numeric(_iPersonaName)) show_error($"{_GMFUNCTION_} :: _iPersonaName expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iPersonaName);

    var _return_value = __steam_friends_get_friend_persona_name_history(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 * @returns {Enum.SteamFriendsPersonaState} 
 */
function steam_friends_get_friend_persona_state(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_friend_persona_state(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDFriend
 * @returns {Enum.SteamFriendsRelationship} 
 */
function steam_friends_get_friend_relationship(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_friend_relationship(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDFriend
 * @param {String} _pchKey
 * @returns {String} 
 */
function steam_friends_get_friend_rich_presence(_steamIDFriend, _pchKey)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    // param: _pchKey, type: String
    if (!is_string(_pchKey)) show_error($"{_GMFUNCTION_} :: _pchKey expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pchKey));
    buffer_write(__args_buffer, buffer_string, _pchKey);

    var _return_value = __steam_friends_get_friend_rich_presence(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 * @param {Real} _iKey
 * @returns {String} 
 */
function steam_friends_get_friend_rich_presence_key_by_index(_steamIDFriend, _iKey)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    // param: _iKey, type: Int32
    if (!is_numeric(_iKey)) show_error($"{_GMFUNCTION_} :: _iKey expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iKey);

    var _return_value = __steam_friends_get_friend_rich_presence_key_by_index(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 * @returns {Real} 
 */
function steam_friends_get_friend_rich_presence_key_count(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var _return_value = __steam_friends_get_friend_rich_presence_key_count(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_get_friends_group_count (no wrapper is required)


// Skipping function steam_friends_get_friends_group_id_by_index (no wrapper is required)


// Skipping function steam_friends_get_friends_group_name (no wrapper is required)


/**
 * @param {Real} _steam_id_friend
 * @returns {Real} 
 */
function steam_friends_get_friend_steam_level(_steam_id_friend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_friend, type: UInt64
    if (!is_numeric(_steam_id_friend)) show_error($"{_GMFUNCTION_} :: _steam_id_friend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_friend);

    var _return_value = __steam_friends_get_friend_steam_level(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_friend
 * @returns {Real} 
 */
function steam_friends_get_large_friend_avatar(_steam_id_friend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_friend, type: UInt64
    if (!is_numeric(_steam_id_friend)) show_error($"{_GMFUNCTION_} :: _steam_id_friend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_friend);

    var _return_value = __steam_friends_get_large_friend_avatar(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_friend
 * @returns {Real} 
 */
function steam_friends_get_medium_friend_avatar(_steam_id_friend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_friend, type: UInt64
    if (!is_numeric(_steam_id_friend)) show_error($"{_GMFUNCTION_} :: _steam_id_friend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_friend);

    var _return_value = __steam_friends_get_medium_friend_avatar(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_get_friends_group_members_count (no wrapper is required)


/**
 * @param {Real} _friendsGroupID
 * @returns {Array[Real]} 
 */
function steam_friends_get_friends_group_members_list(_friendsGroupID)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_friends_group_members_list(_friendsGroupID, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u64);
    }
    return _result;
}

// Skipping function steam_friends_get_persona_name (no wrapper is required)


/**
 * @returns {Enum.SteamFriendsPersonaState} 
 */
function steam_friends_get_persona_state()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_friends_get_persona_state(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steamIDPlayer
 * @returns {String} 
 */
function steam_friends_get_player_nickname(_steamIDPlayer)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDPlayer, type: UInt64
    if (!is_numeric(_steamIDPlayer)) show_error($"{_GMFUNCTION_} :: _steamIDPlayer expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDPlayer);

    var _return_value = __steam_friends_get_player_nickname(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_friend
 * @returns {Real} 
 */
function steam_friends_get_small_friend_avatar(_steam_id_friend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_friend, type: UInt64
    if (!is_numeric(_steam_id_friend)) show_error($"{_GMFUNCTION_} :: _steam_id_friend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_friend);

    var _return_value = __steam_friends_get_small_friend_avatar(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 * @param {Real} _iFriendFlags
 * @returns {Bool} 
 */
function steam_friends_has_friend(_steamIDFriend, _iFriendFlags)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    // param: _iFriendFlags, type: Int32
    if (!is_numeric(_iFriendFlags)) show_error($"{_GMFUNCTION_} :: _iFriendFlags expected number", true);
    buffer_write(__args_buffer, buffer_s32, _iFriendFlags);

    var _return_value = __steam_friends_has_friend(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 * @param {String} _pchConnectString
 * @returns {Bool} 
 */
function steam_friends_invite_user_to_game(_steamIDFriend, _pchConnectString)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    // param: _pchConnectString, type: String
    if (!is_string(_pchConnectString)) show_error($"{_GMFUNCTION_} :: _pchConnectString expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pchConnectString));
    buffer_write(__args_buffer, buffer_string, _pchConnectString);

    var _return_value = __steam_friends_invite_user_to_game(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClanChat
 * @param {Real} _steamIDUser
 * @returns {Bool} 
 */
function steam_friends_is_clan_chat_admin(_steamIDClanChat, _steamIDUser)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClanChat, type: UInt64
    if (!is_numeric(_steamIDClanChat)) show_error($"{_GMFUNCTION_} :: _steamIDClanChat expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClanChat);

    // param: _steamIDUser, type: UInt64
    if (!is_numeric(_steamIDUser)) show_error($"{_GMFUNCTION_} :: _steamIDUser expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDUser);

    var _return_value = __steam_friends_is_clan_chat_admin(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClan
 * @returns {Bool} 
 */
function steam_friends_is_clan_public(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var _return_value = __steam_friends_is_clan_public(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClan
 * @returns {Bool} 
 */
function steam_friends_is_clan_official_game_group(_steamIDClan)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    var _return_value = __steam_friends_is_clan_official_game_group(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClanChat
 * @returns {Bool} 
 */
function steam_friends_is_clan_chat_window_open_in_steam(_steamIDClanChat)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClanChat, type: UInt64
    if (!is_numeric(_steamIDClanChat)) show_error($"{_GMFUNCTION_} :: _steamIDClanChat expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClanChat);

    var _return_value = __steam_friends_is_clan_chat_window_open_in_steam(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamID
 * @param {Function} _callback
 */
function steam_friends_is_following(_steamID, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamID, type: UInt64
    if (!is_numeric(_steamID)) show_error($"{_GMFUNCTION_} :: _steamID expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamID);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_friends_is_following(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDUser
 * @param {Real} _steamIDSource
 * @returns {Bool} 
 */
function steam_friends_is_user_in_source(_steamIDUser, _steamIDSource)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDUser, type: UInt64
    if (!is_numeric(_steamIDUser)) show_error($"{_GMFUNCTION_} :: _steamIDUser expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDUser);

    // param: _steamIDSource, type: UInt64
    if (!is_numeric(_steamIDSource)) show_error($"{_GMFUNCTION_} :: _steamIDSource expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDSource);

    var _return_value = __steam_friends_is_user_in_source(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDClan
 * @param {Function} _callback
 */
function steam_friends_request_clan_officer_list(_steamIDClan, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDClan, type: UInt64
    if (!is_numeric(_steamIDClan)) show_error($"{_GMFUNCTION_} :: _steamIDClan expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDClan);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_friends_request_clan_officer_list(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDFriend
 */
function steam_friends_request_friend_rich_presence(_steamIDFriend)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDFriend, type: UInt64
    if (!is_numeric(_steamIDFriend)) show_error($"{_GMFUNCTION_} :: _steamIDFriend expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDFriend);

    var _return_value = __steam_friends_request_friend_rich_presence(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDUser
 * @param {Bool} _bRequireNameOnly
 * @returns {Bool} 
 */
function steam_friends_request_user_information(_steamIDUser, _bRequireNameOnly)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDUser, type: UInt64
    if (!is_numeric(_steamIDUser)) show_error($"{_GMFUNCTION_} :: _steamIDUser expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDUser);

    // param: _bRequireNameOnly, type: Bool
    if (!is_bool(_bRequireNameOnly)) show_error($"{_GMFUNCTION_} :: _bRequireNameOnly expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _bRequireNameOnly);

    var _return_value = __steam_friends_request_user_information(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDUser
 * @param {Bool} _bSpeaking
 */
function steam_friends_set_in_game_voice_speaking(_steamIDUser, _bSpeaking)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDUser, type: UInt64
    if (!is_numeric(_steamIDUser)) show_error($"{_GMFUNCTION_} :: _steamIDUser expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDUser);

    // param: _bSpeaking, type: Bool
    if (!is_bool(_bSpeaking)) show_error($"{_GMFUNCTION_} :: _bSpeaking expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _bSpeaking);

    var _return_value = __steam_friends_set_in_game_voice_speaking(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steamIDUserPlayedWith
 */
function steam_friends_set_played_with(_steamIDUserPlayedWith)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steamIDUserPlayedWith, type: UInt64
    if (!is_numeric(_steamIDUserPlayedWith)) show_error($"{_GMFUNCTION_} :: _steamIDUserPlayedWith expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamIDUserPlayedWith);

    var _return_value = __steam_friends_set_played_with(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_set_rich_presence (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_friends_set_callback_persona_state_change(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_friends_set_callback_persona_state_change(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_callback_persona_state_change (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_friends_set_callback_game_overlay_activated(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_friends_set_callback_game_overlay_activated(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_callback_game_overlay_activated (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_friends_set_callback_game_rich_presence_join_requested(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_friends_set_callback_game_rich_presence_join_requested(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_callback_game_rich_presence_join_requested (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_friends_set_callback_game_lobby_join_requested(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_friends_set_callback_game_lobby_join_requested(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_callback_game_lobby_join_requested (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_friends_set_callback_friend_rich_presence_update(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_friends_set_callback_friend_rich_presence_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_callback_friend_rich_presence_update (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_friends_set_callback_game_server_change_requested(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_friends_set_callback_game_server_change_requested(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_friends_clear_callback_game_server_change_requested (no wrapper is required)


/**
 * @param {Real} _iDLC
 * @returns {Struct.SteamAppsDlcData} 
 */
function steam_apps_get_dlc_data_by_index(_iDLC)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_dlc_data_by_index(_iDLC, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsDlcData_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_apps_is_app_installed (no wrapper is required)


// Skipping function steam_apps_is_cybercafe (no wrapper is required)


// Skipping function steam_apps_is_dlc_installed (no wrapper is required)


// Skipping function steam_apps_is_low_violence (no wrapper is required)


// Skipping function steam_apps_is_subscribed (no wrapper is required)


// Skipping function steam_apps_is_subscribed_app (no wrapper is required)


// Skipping function steam_apps_is_subscribed_from_family_sharing (no wrapper is required)


// Skipping function steam_apps_is_subscribed_from_free_weekend (no wrapper is required)


/**
 * @returns {Struct.SteamAppsTimedTrialStatus} 
 */
function steam_apps_is_timed_trial()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_is_timed_trial(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsTimedTrialStatus_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_apps_is_vac_banned (no wrapper is required)


// Skipping function steam_apps_get_app_build_id (no wrapper is required)


/**
 * @param {Real} _appID
 * @returns {Struct.SteamAppsInstallDir} 
 */
function steam_apps_get_app_install_dir(_appID)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_app_install_dir(_appID, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsInstallDir_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @returns {Real} 
 */
function steam_apps_get_app_owner()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_app_owner(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_apps_get_available_game_languages (no wrapper is required)


/**
 * @returns {Struct.SteamAppsBetaName} 
 */
function steam_apps_get_current_beta_name()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_current_beta_name(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsBetaName_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @returns {Struct.SteamAppsNumBetas} 
 */
function steam_apps_get_num_betas()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_num_betas(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsNumBetas_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _iBetaIndex
 * @returns {Struct.SteamAppsBetaInfo} 
 */
function steam_apps_get_beta_info(_iBetaIndex)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_beta_info(_iBetaIndex, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsBetaInfo_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_apps_set_active_beta (no wrapper is required)


// Skipping function steam_apps_get_current_game_language (no wrapper is required)


// Skipping function steam_apps_get_dlc_count (no wrapper is required)


/**
 * @param {Real} _nAppID
 * @returns {Struct.SteamAppsDlcDownloadProgress} 
 */
function steam_apps_get_dlc_download_progress(_nAppID)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_dlc_download_progress(_nAppID, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsDlcDownloadProgress_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _app_id
 * @param {Id.Buffer} _ticket_buffer
 * @param {Real} _max_bytes
 * @returns {Real} 
 */
function steam_apps_get_app_ownership_ticket_data(_app_id, _ticket_buffer, _max_bytes)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _app_id, type: UInt32
    if (!is_numeric(_app_id)) show_error($"{_GMFUNCTION_} :: _app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _app_id);

    // param: _ticket_buffer, type: Buffer
    if (!buffer_exists(_ticket_buffer)) show_error($"{_GMFUNCTION_} :: _ticket_buffer expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_ticket_buffer), buffer_get_size(_ticket_buffer));

    // param: _max_bytes, type: UInt32
    if (!is_numeric(_max_bytes)) show_error($"{_GMFUNCTION_} :: _max_bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_bytes);

    var _return_value = __steam_apps_get_app_ownership_ticket_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_apps_get_earliest_purchase_unix_time (no wrapper is required)


/**
 * @param {String} _pszFileName
 * @param {Function} _callback
 */
function steam_apps_get_file_details(_pszFileName, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _pszFileName, type: String
    if (!is_string(_pszFileName)) show_error($"{_GMFUNCTION_} :: _pszFileName expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pszFileName));
    buffer_write(__args_buffer, buffer_string, _pszFileName);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_apps_get_file_details(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _appID
 * @param {Real} _cMaxDepots
 * @returns {Array[Real]} 
 */
function steam_apps_get_installed_depots(_appID, _cMaxDepots)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_installed_depots(_appID, _cMaxDepots, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u32);
    }
    return _result;
}

/**
 * @param {Real} _cubCommandLine
 * @returns {Struct.SteamAppsLaunchCommandLine} 
 */
function steam_apps_get_launch_command_line(_cubCommandLine)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_apps_get_launch_command_line(_cubCommandLine, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamAppsLaunchCommandLine_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_apps_get_launch_query_param (no wrapper is required)


// Skipping function steam_apps_install_dlc (no wrapper is required)


// Skipping function steam_apps_mark_content_corrupt (no wrapper is required)


// Skipping function steam_apps_request_all_proof_of_purchase_keys (no wrapper is required)


// Skipping function steam_apps_request_app_proof_of_purchase_key (no wrapper is required)


// Skipping function steam_apps_uninstall_dlc (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_apps_set_callback_dlc_installed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_apps_set_callback_dlc_installed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_apps_clear_callback_dlc_installed (no wrapper is required)


// Skipping function steam_screenshots_add_screenshot_to_library (no wrapper is required)


/**
 * @param {Enum.SteamScreenshotsVrScreenshotType} _eType
 * @param {String} _pchFilename
 * @param {String} _pchVRFilename
 * @returns {Real} 
 */
function steam_screenshots_add_vr_screenshot_to_library(_eType, _pchFilename, _pchVRFilename)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _eType, type: enum SteamScreenshotsVrScreenshotType

    if (!is_numeric(_eType)) show_error($"{_GMFUNCTION_} :: _eType expected number", true);
    buffer_write(__args_buffer, buffer_u64, _eType);

    // param: _pchFilename, type: String
    if (!is_string(_pchFilename)) show_error($"{_GMFUNCTION_} :: _pchFilename expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pchFilename));
    buffer_write(__args_buffer, buffer_string, _pchFilename);

    // param: _pchVRFilename, type: String
    if (!is_string(_pchVRFilename)) show_error($"{_GMFUNCTION_} :: _pchVRFilename expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pchVRFilename));
    buffer_write(__args_buffer, buffer_string, _pchVRFilename);

    var _return_value = __steam_screenshots_add_vr_screenshot_to_library(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_screenshots_hook_screenshots (no wrapper is required)


// Skipping function steam_screenshots_is_screenshots_hooked (no wrapper is required)


// Skipping function steam_screenshots_set_location (no wrapper is required)


/**
 * @param {Real} _hScreenshot
 * @param {Real} _unPublishedFileID
 * @returns {Bool} 
 */
function steam_screenshots_tag_published_file(_hScreenshot, _unPublishedFileID)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _hScreenshot, type: UInt32
    if (!is_numeric(_hScreenshot)) show_error($"{_GMFUNCTION_} :: _hScreenshot expected number", true);
    buffer_write(__args_buffer, buffer_u32, _hScreenshot);

    // param: _unPublishedFileID, type: UInt64
    if (!is_numeric(_unPublishedFileID)) show_error($"{_GMFUNCTION_} :: _unPublishedFileID expected number", true);
    buffer_write(__args_buffer, buffer_u64, _unPublishedFileID);

    var _return_value = __steam_screenshots_tag_published_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _hScreenshot
 * @param {Real} _steamID
 * @returns {Bool} 
 */
function steam_screenshots_tag_user(_hScreenshot, _steamID)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _hScreenshot, type: UInt32
    if (!is_numeric(_hScreenshot)) show_error($"{_GMFUNCTION_} :: _hScreenshot expected number", true);
    buffer_write(__args_buffer, buffer_u32, _hScreenshot);

    // param: _steamID, type: UInt64
    if (!is_numeric(_steamID)) show_error($"{_GMFUNCTION_} :: _steamID expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steamID);

    var _return_value = __steam_screenshots_tag_user(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_screenshots_trigger_screenshot (no wrapper is required)


/**
 * @param {Id.Buffer} _pubRGB
 * @param {Real} _cubRGB
 * @param {Real} _nWidth
 * @param {Real} _nHeight
 * @returns {Real} 
 */
function steam_screenshots_write_screenshot(_pubRGB, _cubRGB, _nWidth, _nHeight)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _pubRGB, type: Buffer
    if (!buffer_exists(_pubRGB)) show_error($"{_GMFUNCTION_} :: _pubRGB expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_pubRGB), buffer_get_size(_pubRGB));

    // param: _cubRGB, type: UInt32
    if (!is_numeric(_cubRGB)) show_error($"{_GMFUNCTION_} :: _cubRGB expected number", true);
    buffer_write(__args_buffer, buffer_u32, _cubRGB);

    // param: _nWidth, type: Int32
    if (!is_numeric(_nWidth)) show_error($"{_GMFUNCTION_} :: _nWidth expected number", true);
    buffer_write(__args_buffer, buffer_s32, _nWidth);

    // param: _nHeight, type: Int32
    if (!is_numeric(_nHeight)) show_error($"{_GMFUNCTION_} :: _nHeight expected number", true);
    buffer_write(__args_buffer, buffer_s32, _nHeight);

    var _return_value = __steam_screenshots_write_screenshot(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_screenshots_set_callback_screenshot_ready(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_screenshots_set_callback_screenshot_ready(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_screenshots_set_callback_screenshot_requested(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_screenshots_set_callback_screenshot_requested(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_screenshots_clear_callback_screenshot_ready (no wrapper is required)


// Skipping function steam_screenshots_clear_callback_screenshot_requested (no wrapper is required)


/**
 * @param {Real} _steam_id_game_server
 * @param {Real} _un_ip_server
 * @param {Real} _us_port_server
 */
function steam_user_advertise_game(_steam_id_game_server, _un_ip_server, _us_port_server)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_game_server, type: UInt64
    if (!is_numeric(_steam_id_game_server)) show_error($"{_GMFUNCTION_} :: _steam_id_game_server expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_game_server);

    // param: _un_ip_server, type: UInt32
    if (!is_numeric(_un_ip_server)) show_error($"{_GMFUNCTION_} :: _un_ip_server expected number", true);
    buffer_write(__args_buffer, buffer_u32, _un_ip_server);

    // param: _us_port_server, type: UInt32
    if (!is_numeric(_us_port_server)) show_error($"{_GMFUNCTION_} :: _us_port_server expected number", true);
    buffer_write(__args_buffer, buffer_u32, _us_port_server);

    var _return_value = __steam_user_advertise_game(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Id.Buffer} _auth_ticket
 * @param {Real} _cb_auth_ticket
 * @param {Real} _steam_id
 * @returns {Enum.SteamUserBeginAuthSessionResult} 
 */
function steam_user_begin_auth_session(_auth_ticket, _cb_auth_ticket, _steam_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _auth_ticket, type: Buffer
    if (!buffer_exists(_auth_ticket)) show_error($"{_GMFUNCTION_} :: _auth_ticket expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_auth_ticket), buffer_get_size(_auth_ticket));

    // param: _cb_auth_ticket, type: Int32
    if (!is_numeric(_cb_auth_ticket)) show_error($"{_GMFUNCTION_} :: _cb_auth_ticket expected number", true);
    buffer_write(__args_buffer, buffer_s32, _cb_auth_ticket);

    // param: _steam_id, type: UInt64
    if (!is_numeric(_steam_id)) show_error($"{_GMFUNCTION_} :: _steam_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_begin_auth_session(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_user_is_behind_nat (no wrapper is required)


// Skipping function steam_user_is_phone_identifying (no wrapper is required)


// Skipping function steam_user_is_phone_requiring_verification (no wrapper is required)


// Skipping function steam_user_is_phone_verified (no wrapper is required)


// Skipping function steam_user_is_two_factor_enabled (no wrapper is required)


// Skipping function steam_user_logged_on (no wrapper is required)


/**
 * @param {Enum.SteamUserDurationControlOnlineState} _state
 * @returns {Bool} 
 */
function steam_user_set_duration_control_online_state(_state)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _state, type: enum SteamUserDurationControlOnlineState

    if (!is_numeric(_state)) show_error($"{_GMFUNCTION_} :: _state expected number", true);
    buffer_write(__args_buffer, buffer_u64, _state);

    var _return_value = __steam_user_set_duration_control_online_state(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_user_cancel_auth_ticket (no wrapper is required)


/**
 * @param {Id.Buffer} _compressed
 * @param {Real} _cb_compressed
 * @param {Id.Buffer} _dest
 * @param {Real} _cb_dest_buffer_size
 * @param {Real} _n_desired_sample_rate
 * @returns {Enum.SteamApiVoiceResult} 
 */
function steam_user_decompress_voice(_compressed, _cb_compressed, _dest, _cb_dest_buffer_size, _n_desired_sample_rate)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _compressed, type: Buffer
    if (!buffer_exists(_compressed)) show_error($"{_GMFUNCTION_} :: _compressed expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_compressed), buffer_get_size(_compressed));

    // param: _cb_compressed, type: UInt32
    if (!is_numeric(_cb_compressed)) show_error($"{_GMFUNCTION_} :: _cb_compressed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _cb_compressed);

    // param: _dest, type: Buffer
    if (!buffer_exists(_dest)) show_error($"{_GMFUNCTION_} :: _dest expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_dest), buffer_get_size(_dest));

    // param: _cb_dest_buffer_size, type: UInt32
    if (!is_numeric(_cb_dest_buffer_size)) show_error($"{_GMFUNCTION_} :: _cb_dest_buffer_size expected number", true);
    buffer_write(__args_buffer, buffer_u32, _cb_dest_buffer_size);

    // param: _n_desired_sample_rate, type: UInt32
    if (!is_numeric(_n_desired_sample_rate)) show_error($"{_GMFUNCTION_} :: _n_desired_sample_rate expected number", true);
    buffer_write(__args_buffer, buffer_u32, _n_desired_sample_rate);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_decompress_voice(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steam_id
 */
function steam_user_end_auth_session(_steam_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id, type: UInt64
    if (!is_numeric(_steam_id)) show_error($"{_GMFUNCTION_} :: _steam_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id);

    var _return_value = __steam_user_end_auth_session(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Id.Buffer} _out_ticket
 * @param {Real} _cb_max_ticket
 * @param {Struct.SteamNetworkingIdentity} _remote_identity
 * @returns {Struct.SteamUserAuthSessionTicket} 
 */
function steam_user_get_auth_session_ticket(_out_ticket, _cb_max_ticket, _remote_identity)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _out_ticket, type: Buffer
    if (!buffer_exists(_out_ticket)) show_error($"{_GMFUNCTION_} :: _out_ticket expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_ticket), buffer_get_size(_out_ticket));

    // param: _cb_max_ticket, type: Int32
    if (!is_numeric(_cb_max_ticket)) show_error($"{_GMFUNCTION_} :: _cb_max_ticket expected number", true);
    buffer_write(__args_buffer, buffer_s32, _cb_max_ticket);

    // param: _remote_identity, type: optional<struct SteamNetworkingIdentity>
    if (is_undefined(_remote_identity))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (_remote_identity.__uid != 3447469139) show_error($"{_GMFUNCTION_} :: _remote_identity expected SteamNetworkingIdentity", true);
        __SteamNetworkingIdentity_encode(_remote_identity, __args_buffer, buffer_tell(__args_buffer), _GMFUNCTION_);
    }

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_get_auth_session_ticket(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserAuthSessionTicket_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_user_get_h_steam_user (no wrapper is required)


// Skipping function steam_user_get_player_steam_level (no wrapper is required)


/**
 * @returns {Real} 
 */
function steam_user_get_steam_id()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_get_steam_id(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steam_id
 * @returns {Struct.SteamId} 
 */
function steam_user_decode_steam_id(_steam_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id, type: UInt64
    if (!is_numeric(_steam_id)) show_error($"{_GMFUNCTION_} :: _steam_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_decode_steam_id(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamId_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_user_start_voice_recording (no wrapper is required)


// Skipping function steam_user_stop_voice_recording (no wrapper is required)


// Skipping function steam_user_get_voice_optimal_sample_rate (no wrapper is required)


/**
 * @returns {Struct.SteamUserAvailableVoice} 
 */
function steam_user_get_available_voice()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_get_available_voice(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserAvailableVoice_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Bool} _b_want_compressed
 * @param {Id.Buffer} _dest_compressed
 * @param {Real} _cb_dest_compressed
 * @param {Bool} _b_want_uncompressed
 * @param {Id.Buffer} _dest_uncompressed
 * @param {Real} _cb_dest_uncompressed
 * @param {Real} _n_desired_sample_rate
 * @returns {Struct.SteamUserGetVoiceResult} 
 */
function steam_user_get_voice(_b_want_compressed, _dest_compressed, _cb_dest_compressed, _b_want_uncompressed, _dest_uncompressed, _cb_dest_uncompressed, _n_desired_sample_rate)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _b_want_compressed, type: Bool
    if (!is_bool(_b_want_compressed)) show_error($"{_GMFUNCTION_} :: _b_want_compressed expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _b_want_compressed);

    // param: _dest_compressed, type: Buffer
    if (!buffer_exists(_dest_compressed)) show_error($"{_GMFUNCTION_} :: _dest_compressed expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_dest_compressed), buffer_get_size(_dest_compressed));

    // param: _cb_dest_compressed, type: UInt32
    if (!is_numeric(_cb_dest_compressed)) show_error($"{_GMFUNCTION_} :: _cb_dest_compressed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _cb_dest_compressed);

    // param: _b_want_uncompressed, type: Bool
    if (!is_bool(_b_want_uncompressed)) show_error($"{_GMFUNCTION_} :: _b_want_uncompressed expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _b_want_uncompressed);

    // param: _dest_uncompressed, type: Buffer
    if (!buffer_exists(_dest_uncompressed)) show_error($"{_GMFUNCTION_} :: _dest_uncompressed expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_dest_uncompressed), buffer_get_size(_dest_uncompressed));

    // param: _cb_dest_uncompressed, type: UInt32
    if (!is_numeric(_cb_dest_uncompressed)) show_error($"{_GMFUNCTION_} :: _cb_dest_uncompressed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _cb_dest_uncompressed);

    // param: _n_desired_sample_rate, type: UInt32
    if (!is_numeric(_n_desired_sample_rate)) show_error($"{_GMFUNCTION_} :: _n_desired_sample_rate expected number", true);
    buffer_write(__args_buffer, buffer_u32, _n_desired_sample_rate);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_get_voice(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserGetVoiceResult_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @returns {Struct.SteamUserDataFolder} 
 */
function steam_user_get_user_data_folder()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_get_user_data_folder(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserDataFolder_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Id.Buffer} _data_to_include
 * @param {Real} _cb_data_to_include
 * @param {Function} _callback
 */
function steam_user_request_encrypted_app_ticket(_data_to_include, _cb_data_to_include, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _data_to_include, type: Buffer
    if (!buffer_exists(_data_to_include)) show_error($"{_GMFUNCTION_} :: _data_to_include expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_data_to_include), buffer_get_size(_data_to_include));

    // param: _cb_data_to_include, type: Int32
    if (!is_numeric(_cb_data_to_include)) show_error($"{_GMFUNCTION_} :: _cb_data_to_include expected number", true);
    buffer_write(__args_buffer, buffer_s32, _cb_data_to_include);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_user_request_encrypted_app_ticket(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Id.Buffer} _out_ticket
 * @param {Real} _cb_max_ticket
 * @returns {Struct.SteamUserEncryptedAppTicket} 
 */
function steam_user_get_encrypted_app_ticket(_out_ticket, _cb_max_ticket)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _out_ticket, type: Buffer
    if (!buffer_exists(_out_ticket)) show_error($"{_GMFUNCTION_} :: _out_ticket expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_ticket), buffer_get_size(_out_ticket));

    // param: _cb_max_ticket, type: Int32
    if (!is_numeric(_cb_max_ticket)) show_error($"{_GMFUNCTION_} :: _cb_max_ticket expected number", true);
    buffer_write(__args_buffer, buffer_s32, _cb_max_ticket);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_get_encrypted_app_ticket(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserEncryptedAppTicket_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_user_get_game_badge_level (no wrapper is required)


// Skipping function steam_user_get_auth_ticket_for_web_api (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_user_get_duration_control(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_user_get_duration_control(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _pch_redirect_url
 * @param {Function} _callback
 */
function steam_user_request_store_auth_url(_pch_redirect_url, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _pch_redirect_url, type: String
    if (!is_string(_pch_redirect_url)) show_error($"{_GMFUNCTION_} :: _pch_redirect_url expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pch_redirect_url));
    buffer_write(__args_buffer, buffer_string, _pch_redirect_url);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_user_request_store_auth_url(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_user_get_market_eligibility(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_user_get_market_eligibility(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _game_id
 * @param {Real} _e_app_usage_event
 * @param {String} _pch_extra_info
 */
function steam_user_track_app_usage_event(_game_id, _e_app_usage_event, _pch_extra_info)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _game_id, type: UInt64
    if (!is_numeric(_game_id)) show_error($"{_GMFUNCTION_} :: _game_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _game_id);

    // param: _e_app_usage_event, type: Int32
    if (!is_numeric(_e_app_usage_event)) show_error($"{_GMFUNCTION_} :: _e_app_usage_event expected number", true);
    buffer_write(__args_buffer, buffer_s32, _e_app_usage_event);

    // param: _pch_extra_info, type: String
    if (!is_string(_pch_extra_info)) show_error($"{_GMFUNCTION_} :: _pch_extra_info expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_pch_extra_info));
    buffer_write(__args_buffer, buffer_string, _pch_extra_info);

    var _return_value = __steam_user_track_app_usage_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id
 * @param {Real} _app_id
 * @returns {Enum.SteamApiUserHasLicenseResult} 
 */
function steam_user_user_has_license_for_app(_steam_id, _app_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id, type: UInt64
    if (!is_numeric(_steam_id)) show_error($"{_GMFUNCTION_} :: _steam_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id);

    // param: _app_id, type: UInt32
    if (!is_numeric(_app_id)) show_error($"{_GMFUNCTION_} :: _app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _app_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_user_user_has_license_for_app(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Function} _callback
 */
function steam_user_set_callback_steam_servers_connected(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_user_set_callback_steam_servers_connected(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_user_clear_callback_steam_servers_connected (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_user_set_callback_steam_server_connect_failure(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_user_set_callback_steam_server_connect_failure(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_user_clear_callback_steam_server_connect_failure (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_user_set_callback_steam_servers_disconnected(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_user_set_callback_steam_servers_disconnected(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_user_clear_callback_steam_servers_disconnected (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_user_set_callback_client_game_server_deny(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_user_set_callback_client_game_server_deny(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_user_clear_callback_client_game_server_deny (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_user_set_callback_licenses_updated(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_user_set_callback_licenses_updated(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_user_clear_callback_licenses_updated (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_user_set_callback_microtxn_authorization_response(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_user_set_callback_microtxn_authorization_response(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_user_clear_callback_microtxn_authorization_response (no wrapper is required)


// Skipping function steam_utils_overlay_needs_present (no wrapper is required)


/**
 * @param {String} _sz_file_name
 * @param {Function} _callback
 */
function steam_utils_check_file_signature(_sz_file_name, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _sz_file_name, type: String
    if (!is_string(_sz_file_name)) show_error($"{_GMFUNCTION_} :: _sz_file_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_sz_file_name));
    buffer_write(__args_buffer, buffer_string, _sz_file_name);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_utils_check_file_signature(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_api_call
 * @returns {Enum.SteamUtilsApiCallFailure} 
 */
function steam_utils_get_api_call_failure_reason(_steam_api_call)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_api_call, type: UInt64
    if (!is_numeric(_steam_api_call)) show_error($"{_GMFUNCTION_} :: _steam_api_call expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_api_call);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_utils_get_api_call_failure_reason(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _steam_api_call
 * @param {Real} _callback_expected
 * @param {Id.Buffer} _out_callback
 * @param {Real} _out_callback_size
 * @returns {Struct.SteamUtilsApiCallResult} 
 */
function steam_utils_get_api_call_result(_steam_api_call, _callback_expected, _out_callback, _out_callback_size)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_api_call, type: UInt64
    if (!is_numeric(_steam_api_call)) show_error($"{_GMFUNCTION_} :: _steam_api_call expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_api_call);

    // param: _callback_expected, type: Int32
    if (!is_numeric(_callback_expected)) show_error($"{_GMFUNCTION_} :: _callback_expected expected number", true);
    buffer_write(__args_buffer, buffer_s32, _callback_expected);

    // param: _out_callback, type: Buffer
    if (!buffer_exists(_out_callback)) show_error($"{_GMFUNCTION_} :: _out_callback expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_callback), buffer_get_size(_out_callback));

    // param: _out_callback_size, type: Int32
    if (!is_numeric(_out_callback_size)) show_error($"{_GMFUNCTION_} :: _out_callback_size expected number", true);
    buffer_write(__args_buffer, buffer_s32, _out_callback_size);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_utils_get_api_call_result(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUtilsApiCallResult_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_ip_country(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_ip_country(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_ip_country (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_low_battery_power(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_low_battery_power(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_low_battery_power (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_steam_api_call_completed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_steam_api_call_completed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_steam_api_call_completed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_app_resuming_from_suspend(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_app_resuming_from_suspend(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_app_resuming_from_suspend (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_steam_shutdown(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_steam_shutdown(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_steam_shutdown (no wrapper is required)


// Skipping function steam_utils_get_app_id (no wrapper is required)


/**
 * @returns {Enum.SteamApiUniverse} 
 */
function steam_utils_get_connected_universe()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_utils_get_connected_universe(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_utils_get_current_battery_power (no wrapper is required)


/**
 * @returns {Struct.SteamUtilsGamepadTextInput} 
 */
function steam_utils_get_entered_gamepad_text_input()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_utils_get_entered_gamepad_text_input(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUtilsGamepadTextInput_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_utils_get_entered_gamepad_text_length (no wrapper is required)


/**
 * @param {Real} _i_image
 * @param {Id.Buffer} _dest
 * @param {Real} _n_dest_buffer_size
 * @returns {Bool} 
 */
function steam_utils_get_image_rgba(_i_image, _dest, _n_dest_buffer_size)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _i_image, type: Int32
    if (!is_numeric(_i_image)) show_error($"{_GMFUNCTION_} :: _i_image expected number", true);
    buffer_write(__args_buffer, buffer_s32, _i_image);

    // param: _dest, type: Buffer
    if (!buffer_exists(_dest)) show_error($"{_GMFUNCTION_} :: _dest expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_dest), buffer_get_size(_dest));

    // param: _n_dest_buffer_size, type: Int32
    if (!is_numeric(_n_dest_buffer_size)) show_error($"{_GMFUNCTION_} :: _n_dest_buffer_size expected number", true);
    buffer_write(__args_buffer, buffer_s32, _n_dest_buffer_size);

    var _return_value = __steam_utils_get_image_rgba(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _i_image
 * @returns {Struct.SteamUtilsImageSize} 
 */
function steam_utils_get_image_size(_i_image)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_utils_get_image_size(_i_image, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUtilsImageSize_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_utils_get_ipc_call_count (no wrapper is required)


// Skipping function steam_utils_get_ip_country (no wrapper is required)


// Skipping function steam_utils_get_seconds_since_app_active (no wrapper is required)


// Skipping function steam_utils_get_seconds_since_computer_active (no wrapper is required)


// Skipping function steam_utils_get_server_real_time (no wrapper is required)


// Skipping function steam_utils_get_steam_ui_language (no wrapper is required)


// Skipping function steam_utils_is_overlay_enabled (no wrapper is required)


// Skipping function steam_utils_is_steam_in_big_picture_mode (no wrapper is required)


// Skipping function steam_utils_is_steam_running_in_vr (no wrapper is required)


// Skipping function steam_utils_is_steam_running_on_steam_deck (no wrapper is required)


// Skipping function steam_utils_is_steam_china_launcher (no wrapper is required)


/**
 * @param {Real} _steam_api_call
 * @returns {Struct.SteamUtilsApiCallCompleted} 
 */
function steam_utils_is_api_call_completed(_steam_api_call)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_api_call, type: UInt64
    if (!is_numeric(_steam_api_call)) show_error($"{_GMFUNCTION_} :: _steam_api_call expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_api_call);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_utils_is_api_call_completed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUtilsApiCallCompleted_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_utils_init_filter_text (no wrapper is required)


/**
 * @param {Enum.SteamUtilsTextFilteringContext} _context
 * @param {Real} _source_steam_id
 * @param {String} _input_message
 * @returns {Struct.SteamUtilsFilterTextResult} 
 */
function steam_utils_filter_text(_context, _source_steam_id, _input_message)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _context, type: enum SteamUtilsTextFilteringContext

    if (!is_numeric(_context)) show_error($"{_GMFUNCTION_} :: _context expected number", true);
    buffer_write(__args_buffer, buffer_u64, _context);

    // param: _source_steam_id, type: UInt64
    if (!is_numeric(_source_steam_id)) show_error($"{_GMFUNCTION_} :: _source_steam_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _source_steam_id);

    // param: _input_message, type: String
    if (!is_string(_input_message)) show_error($"{_GMFUNCTION_} :: _input_message expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_input_message));
    buffer_write(__args_buffer, buffer_string, _input_message);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_utils_filter_text(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUtilsFilterTextResult_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_utils_is_vr_headset_streaming_enabled (no wrapper is required)


// Skipping function steam_utils_set_overlay_notification_inset (no wrapper is required)


/**
 * @param {Enum.SteamApiNotificationPosition} _notification_position
 */
function steam_utils_set_overlay_notification_position(_notification_position)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _notification_position, type: enum SteamApiNotificationPosition

    if (!is_numeric(_notification_position)) show_error($"{_GMFUNCTION_} :: _notification_position expected number", true);
    buffer_write(__args_buffer, buffer_u64, _notification_position);

    var _return_value = __steam_utils_set_overlay_notification_position(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_set_vr_headset_streaming_enabled (no wrapper is required)


/**
 * @param {Enum.SteamUtilsGamepadTextInputMode} _input_mode
 * @param {Enum.SteamUtilsGamepadTextInputLineMode} _line_mode
 * @param {String} _description
 * @param {Real} _char_max
 * @param {String} _existing_text
 * @returns {Bool} 
 */
function steam_utils_show_gamepad_text_input(_input_mode, _line_mode, _description, _char_max, _existing_text)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_mode, type: enum SteamUtilsGamepadTextInputMode

    if (!is_numeric(_input_mode)) show_error($"{_GMFUNCTION_} :: _input_mode expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_mode);

    // param: _line_mode, type: enum SteamUtilsGamepadTextInputLineMode

    if (!is_numeric(_line_mode)) show_error($"{_GMFUNCTION_} :: _line_mode expected number", true);
    buffer_write(__args_buffer, buffer_u64, _line_mode);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    // param: _char_max, type: UInt32
    if (!is_numeric(_char_max)) show_error($"{_GMFUNCTION_} :: _char_max expected number", true);
    buffer_write(__args_buffer, buffer_u32, _char_max);

    // param: _existing_text, type: String
    if (!is_string(_existing_text)) show_error($"{_GMFUNCTION_} :: _existing_text expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_existing_text));
    buffer_write(__args_buffer, buffer_string, _existing_text);

    var _return_value = __steam_utils_show_gamepad_text_input(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Enum.SteamUtilsFloatingGamepadTextInputMode} _keyboard_mode
 * @param {Real} _text_field_x
 * @param {Real} _text_field_y
 * @param {Real} _text_field_width
 * @param {Real} _text_field_height
 * @returns {Bool} 
 */
function steam_utils_show_floating_gamepad_text_input(_keyboard_mode, _text_field_x, _text_field_y, _text_field_width, _text_field_height)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _keyboard_mode, type: enum SteamUtilsFloatingGamepadTextInputMode

    if (!is_numeric(_keyboard_mode)) show_error($"{_GMFUNCTION_} :: _keyboard_mode expected number", true);
    buffer_write(__args_buffer, buffer_u64, _keyboard_mode);

    // param: _text_field_x, type: Int32
    if (!is_numeric(_text_field_x)) show_error($"{_GMFUNCTION_} :: _text_field_x expected number", true);
    buffer_write(__args_buffer, buffer_s32, _text_field_x);

    // param: _text_field_y, type: Int32
    if (!is_numeric(_text_field_y)) show_error($"{_GMFUNCTION_} :: _text_field_y expected number", true);
    buffer_write(__args_buffer, buffer_s32, _text_field_y);

    // param: _text_field_width, type: Int32
    if (!is_numeric(_text_field_width)) show_error($"{_GMFUNCTION_} :: _text_field_width expected number", true);
    buffer_write(__args_buffer, buffer_s32, _text_field_width);

    // param: _text_field_height, type: Int32
    if (!is_numeric(_text_field_height)) show_error($"{_GMFUNCTION_} :: _text_field_height expected number", true);
    buffer_write(__args_buffer, buffer_s32, _text_field_height);

    var _return_value = __steam_utils_show_floating_gamepad_text_input(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_dismiss_floating_gamepad_text_input (no wrapper is required)


// Skipping function steam_utils_start_vr_dashboard (no wrapper is required)


// Skipping function steam_utils_set_game_launcher_mode (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_gamepad_text_input_dismissed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_gamepad_text_input_dismissed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_gamepad_text_input_dismissed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_floating_gamepad_text_input_dismissed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_floating_gamepad_text_input_dismissed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_floating_gamepad_text_input_dismissed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_utils_set_callback_warning_message(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_utils_set_callback_warning_message(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_utils_clear_callback_warning_message (no wrapper is required)


/**
 * @param {Real} _published_file_id
 * @param {Real} _app_id
 * @param {Function} _callback
 */
function steam_ugc_add_app_dependency(_published_file_id, _app_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _app_id, type: UInt32
    if (!is_numeric(_app_id)) show_error($"{_GMFUNCTION_} :: _app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _app_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_add_app_dependency(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _parent_published_file_id
 * @param {Real} _child_published_file_id
 * @param {Function} _callback
 */
function steam_ugc_add_dependency(_parent_published_file_id, _child_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _parent_published_file_id, type: UInt64
    if (!is_numeric(_parent_published_file_id)) show_error($"{_GMFUNCTION_} :: _parent_published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _parent_published_file_id);

    // param: _child_published_file_id, type: UInt64
    if (!is_numeric(_child_published_file_id)) show_error($"{_GMFUNCTION_} :: _child_published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _child_published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_add_dependency(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {String} _tag_name
 * @returns {Bool} 
 */
function steam_ugc_add_excluded_tag(_query_handle, _tag_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _tag_name, type: String
    if (!is_string(_tag_name)) show_error($"{_GMFUNCTION_} :: _tag_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_tag_name));
    buffer_write(__args_buffer, buffer_string, _tag_name);

    var _return_value = __steam_ugc_add_excluded_tag(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _key
 * @param {String} _value
 * @returns {Bool} 
 */
function steam_ugc_add_item_key_value_tag(_update_handle, _key, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    // param: _value, type: String
    if (!is_string(_value)) show_error($"{_GMFUNCTION_} :: _value expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_value));
    buffer_write(__args_buffer, buffer_string, _value);

    var _return_value = __steam_ugc_add_item_key_value_tag(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _preview_file_path
 * @param {Enum.SteamItemPreviewType} _preview_type
 * @returns {Bool} 
 */
function steam_ugc_add_item_preview_file(_update_handle, _preview_file_path, _preview_type)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _preview_file_path, type: String
    if (!is_string(_preview_file_path)) show_error($"{_GMFUNCTION_} :: _preview_file_path expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_preview_file_path));
    buffer_write(__args_buffer, buffer_string, _preview_file_path);

    // param: _preview_type, type: enum SteamItemPreviewType

    if (!is_numeric(_preview_type)) show_error($"{_GMFUNCTION_} :: _preview_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _preview_type);

    var _return_value = __steam_ugc_add_item_preview_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _video_id
 * @returns {Bool} 
 */
function steam_ugc_add_item_preview_video(_update_handle, _video_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _video_id, type: String
    if (!is_string(_video_id)) show_error($"{_GMFUNCTION_} :: _video_id expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_video_id));
    buffer_write(__args_buffer, buffer_string, _video_id);

    var _return_value = __steam_ugc_add_item_preview_video(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _app_id
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_ugc_add_item_to_favorites(_app_id, _published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _app_id, type: UInt32
    if (!is_numeric(_app_id)) show_error($"{_GMFUNCTION_} :: _app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _app_id);

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_add_item_to_favorites(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {String} _key
 * @param {String} _value
 * @returns {Bool} 
 */
function steam_ugc_add_required_key_value_tag(_query_handle, _key, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    // param: _value, type: String
    if (!is_string(_value)) show_error($"{_GMFUNCTION_} :: _value expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_value));
    buffer_write(__args_buffer, buffer_string, _value);

    var _return_value = __steam_ugc_add_required_key_value_tag(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {String} _tag_name
 * @returns {Bool} 
 */
function steam_ugc_add_required_tag(_query_handle, _tag_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _tag_name, type: String
    if (!is_string(_tag_name)) show_error($"{_GMFUNCTION_} :: _tag_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_tag_name));
    buffer_write(__args_buffer, buffer_string, _tag_name);

    var _return_value = __steam_ugc_add_required_tag(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Array[String]} _tags_csv
 * @returns {Bool} 
 */
function steam_ugc_add_required_tag_group(_query_handle, _tags_csv)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _tags_csv, type: String[]
    if (!is_array(_tags_csv)) show_error($"{_GMFUNCTION_} :: _tags_csv expected array", true);
    var _length = array_length(_tags_csv);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_string(_tags_csv[_i])) show_error($"{_GMFUNCTION_} :: _tags_csv[_i] expected string", true);
        buffer_write(__args_buffer, buffer_u32, string_byte_length(_tags_csv[_i]));
        buffer_write(__args_buffer, buffer_string, _tags_csv[_i]);
    }

    var _return_value = __steam_ugc_add_required_tag_group(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_ugc_init_workshop_for_game_server (no wrapper is required)


/**
 * @param {Real} _consumer_app_id
 * @param {Enum.SteamWorkshopFileType} _workshop_file_type
 * @param {Function} _callback
 */
function steam_ugc_create_item(_consumer_app_id, _workshop_file_type, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _consumer_app_id, type: UInt32
    if (!is_numeric(_consumer_app_id)) show_error($"{_GMFUNCTION_} :: _consumer_app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _consumer_app_id);

    // param: _workshop_file_type, type: enum SteamWorkshopFileType

    if (!is_numeric(_workshop_file_type)) show_error($"{_GMFUNCTION_} :: _workshop_file_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _workshop_file_type);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_create_item(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Enum.SteamUgcQuery} _query_type
 * @param {Enum.SteamUgcMatchingUgcType} _matching_ugc_type
 * @param {Real} _creator_app_id
 * @param {Real} _consumer_app_id
 * @param {Real} _page
 * @returns {Real} 
 */
function steam_ugc_create_query_all_ugc_request(_query_type, _matching_ugc_type, _creator_app_id, _consumer_app_id, _page)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_type, type: enum SteamUgcQuery

    if (!is_numeric(_query_type)) show_error($"{_GMFUNCTION_} :: _query_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_type);

    // param: _matching_ugc_type, type: enum SteamUgcMatchingUgcType

    if (!is_numeric(_matching_ugc_type)) show_error($"{_GMFUNCTION_} :: _matching_ugc_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _matching_ugc_type);

    // param: _creator_app_id, type: UInt32
    if (!is_numeric(_creator_app_id)) show_error($"{_GMFUNCTION_} :: _creator_app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _creator_app_id);

    // param: _consumer_app_id, type: UInt32
    if (!is_numeric(_consumer_app_id)) show_error($"{_GMFUNCTION_} :: _consumer_app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _consumer_app_id);

    // param: _page, type: UInt32
    if (!is_numeric(_page)) show_error($"{_GMFUNCTION_} :: _page expected number", true);
    buffer_write(__args_buffer, buffer_u32, _page);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_create_query_all_ugc_request(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Array[Real]} _published_file_ids
 * @param {Real} _num_published_file_ids
 * @returns {Real} 
 */
function steam_ugc_create_query_ugc_details_request(_published_file_ids, _num_published_file_ids)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_ids, type: UInt64[]
    if (!is_array(_published_file_ids)) show_error($"{_GMFUNCTION_} :: _published_file_ids expected array", true);
    var _length = array_length(_published_file_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_published_file_ids[_i])) show_error($"{_GMFUNCTION_} :: _published_file_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _published_file_ids[_i]);
    }

    // param: _num_published_file_ids, type: UInt32
    if (!is_numeric(_num_published_file_ids)) show_error($"{_GMFUNCTION_} :: _num_published_file_ids expected number", true);
    buffer_write(__args_buffer, buffer_u32, _num_published_file_ids);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_create_query_ugc_details_request(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _account_id
 * @param {Enum.SteamUserUgcList} _list_type
 * @param {Enum.SteamUgcMatchingUgcType} _matching_ugc_type
 * @param {Enum.SteamUserUgcListSortOrder} _sort_order
 * @param {Real} _creator_app_id
 * @param {Real} _consumer_app_id
 * @param {Real} _page
 * @returns {Real} 
 */
function steam_ugc_create_query_user_ugc_request(_account_id, _list_type, _matching_ugc_type, _sort_order, _creator_app_id, _consumer_app_id, _page)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _account_id, type: UInt32
    if (!is_numeric(_account_id)) show_error($"{_GMFUNCTION_} :: _account_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _account_id);

    // param: _list_type, type: enum SteamUserUgcList

    if (!is_numeric(_list_type)) show_error($"{_GMFUNCTION_} :: _list_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _list_type);

    // param: _matching_ugc_type, type: enum SteamUgcMatchingUgcType

    if (!is_numeric(_matching_ugc_type)) show_error($"{_GMFUNCTION_} :: _matching_ugc_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _matching_ugc_type);

    // param: _sort_order, type: enum SteamUserUgcListSortOrder

    if (!is_numeric(_sort_order)) show_error($"{_GMFUNCTION_} :: _sort_order expected number", true);
    buffer_write(__args_buffer, buffer_u64, _sort_order);

    // param: _creator_app_id, type: UInt32
    if (!is_numeric(_creator_app_id)) show_error($"{_GMFUNCTION_} :: _creator_app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _creator_app_id);

    // param: _consumer_app_id, type: UInt32
    if (!is_numeric(_consumer_app_id)) show_error($"{_GMFUNCTION_} :: _consumer_app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _consumer_app_id);

    // param: _page, type: UInt32
    if (!is_numeric(_page)) show_error($"{_GMFUNCTION_} :: _page expected number", true);
    buffer_write(__args_buffer, buffer_u32, _page);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_create_query_user_ugc_request(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_ugc_delete_item(_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_delete_item(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Bool} _high_priority
 * @returns {Bool} 
 */
function steam_ugc_download_item(_published_file_id, _high_priority)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _high_priority, type: Bool
    if (!is_bool(_high_priority)) show_error($"{_GMFUNCTION_} :: _high_priority expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _high_priority);

    var _return_value = __steam_ugc_download_item(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_ugc_get_app_dependencies(_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_get_app_dependencies(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @returns {Struct.SteamUgcItemDownloadInfo} 
 */
function steam_ugc_get_item_download_info(_published_file_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_item_download_info(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcItemDownloadInfo_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _published_file_id
 * @returns {Struct.SteamUgcItemInstallInfo} 
 */
function steam_ugc_get_item_install_info(_published_file_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_item_install_info(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcItemInstallInfo_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _published_file_id
 * @returns {Real} 
 */
function steam_ugc_get_item_state(_published_file_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    var _return_value = __steam_ugc_get_item_state(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @returns {Struct.SteamUgcItemUpdateProgress} 
 */
function steam_ugc_get_item_update_progress(_update_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_item_update_progress(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcItemUpdateProgress_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_ugc_get_num_subscribed_items (no wrapper is required)


/**
 * @param {Real} _c_max_entries
 * @param {Bool} _include_locally_disabled
 * @returns {Array[Real]} 
 */
function steam_ugc_get_subscribed_items(_c_max_entries, _include_locally_disabled)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_subscribed_items(_c_max_entries, _include_locally_disabled, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u64);
    }
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @returns {Struct.SteamUgcQueryResult} 
 */
function steam_ugc_get_query_ugc_result(_query_handle, _index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_result(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcQueryResult_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @returns {Struct.SteamUgcQueryPreviewUrl} 
 */
function steam_ugc_get_query_ugc_preview_url(_query_handle, _index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_preview_url(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcQueryPreviewUrl_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @returns {Struct.SteamUgcQueryMetadata} 
 */
function steam_ugc_get_query_ugc_metadata(_query_handle, _index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_metadata(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcQueryMetadata_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @param {Real} _c_max_entries
 * @returns {Array[Real]} 
 */
function steam_ugc_get_query_ugc_children(_query_handle, _index, _c_max_entries)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    // param: _c_max_entries, type: UInt32
    if (!is_numeric(_c_max_entries)) show_error($"{_GMFUNCTION_} :: _c_max_entries expected number", true);
    buffer_write(__args_buffer, buffer_u32, _c_max_entries);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_children(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u64);
    }
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @param {Enum.SteamUgcStatisticType} _stat_type
 * @returns {Real} 
 */
function steam_ugc_get_query_ugc_statistic(_query_handle, _index, _stat_type)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    // param: _stat_type, type: enum SteamUgcStatisticType

    if (!is_numeric(_stat_type)) show_error($"{_GMFUNCTION_} :: _stat_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _stat_type);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_statistic(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @returns {Real} 
 */
function steam_ugc_get_query_ugc_num_additional_previews(_query_handle, _index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    var _return_value = __steam_ugc_get_query_ugc_num_additional_previews(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @param {Real} _preview_index
 * @param {String} _original_file_name
 * @returns {Struct.SteamUgcAdditionalPreview} 
 */
function steam_ugc_get_query_ugc_additional_preview(_query_handle, _index, _preview_index, _original_file_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    // param: _preview_index, type: UInt32
    if (!is_numeric(_preview_index)) show_error($"{_GMFUNCTION_} :: _preview_index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _preview_index);

    // param: _original_file_name, type: String
    if (!is_string(_original_file_name)) show_error($"{_GMFUNCTION_} :: _original_file_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_original_file_name));
    buffer_write(__args_buffer, buffer_string, _original_file_name);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_additional_preview(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcAdditionalPreview_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @returns {Real} 
 */
function steam_ugc_get_query_ugc_num_key_value_tags(_query_handle, _index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    var _return_value = __steam_ugc_get_query_ugc_num_key_value_tags(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @param {Real} _key_value_tag_index
 * @returns {Struct.SteamUgcKeyValueTag} 
 */
function steam_ugc_get_query_ugc_key_value_tag(_query_handle, _index, _key_value_tag_index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    // param: _key_value_tag_index, type: UInt32
    if (!is_numeric(_key_value_tag_index)) show_error($"{_GMFUNCTION_} :: _key_value_tag_index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _key_value_tag_index);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_key_value_tag(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUgcKeyValueTag_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @param {Real} _max_descriptors
 * @returns {Array[Real]} 
 */
function steam_ugc_get_query_ugc_content_descriptors(_query_handle, _index, _max_descriptors)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    // param: _max_descriptors, type: UInt32
    if (!is_numeric(_max_descriptors)) show_error($"{_GMFUNCTION_} :: _max_descriptors expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_descriptors);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_get_query_ugc_content_descriptors(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_s32);
    }
    return _result;
}

/**
 * @param {Real} _published_file_id
 * @param {Real} _app_id
 * @param {Function} _callback
 */
function steam_ugc_remove_app_dependency(_published_file_id, _app_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _app_id, type: UInt32
    if (!is_numeric(_app_id)) show_error($"{_GMFUNCTION_} :: _app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _app_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_remove_app_dependency(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _parent_published_file_id
 * @param {Real} _child_published_file_id
 * @param {Function} _callback
 */
function steam_ugc_remove_dependency(_parent_published_file_id, _child_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _parent_published_file_id, type: UInt64
    if (!is_numeric(_parent_published_file_id)) show_error($"{_GMFUNCTION_} :: _parent_published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _parent_published_file_id);

    // param: _child_published_file_id, type: UInt64
    if (!is_numeric(_child_published_file_id)) show_error($"{_GMFUNCTION_} :: _child_published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _child_published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_remove_dependency(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _app_id
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_ugc_remove_item_from_favorites(_app_id, _published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _app_id, type: UInt32
    if (!is_numeric(_app_id)) show_error($"{_GMFUNCTION_} :: _app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _app_id);

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_remove_item_from_favorites(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _key
 * @returns {Bool} 
 */
function steam_ugc_remove_item_key_value_tags(_update_handle, _key)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    var _return_value = __steam_ugc_remove_item_key_value_tags(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Real} _index
 * @returns {Bool} 
 */
function steam_ugc_remove_item_preview(_update_handle, _index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    var _return_value = __steam_ugc_remove_item_preview(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Enum.SteamUgcContentDescriptorId} _descriptor_id
 * @returns {Bool} 
 */
function steam_ugc_add_content_descriptor(_update_handle, _descriptor_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _descriptor_id, type: enum SteamUgcContentDescriptorId

    if (!is_numeric(_descriptor_id)) show_error($"{_GMFUNCTION_} :: _descriptor_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _descriptor_id);

    var _return_value = __steam_ugc_add_content_descriptor(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Enum.SteamUgcContentDescriptorId} _descriptor_id
 * @returns {Bool} 
 */
function steam_ugc_remove_content_descriptor(_update_handle, _descriptor_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _descriptor_id, type: enum SteamUgcContentDescriptorId

    if (!is_numeric(_descriptor_id)) show_error($"{_GMFUNCTION_} :: _descriptor_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _descriptor_id);

    var _return_value = __steam_ugc_remove_content_descriptor(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _game_branch_min
 * @param {String} _game_branch_max
 * @returns {Bool} 
 */
function steam_ugc_set_required_game_versions(_update_handle, _game_branch_min, _game_branch_max)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _game_branch_min, type: String
    if (!is_string(_game_branch_min)) show_error($"{_GMFUNCTION_} :: _game_branch_min expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_game_branch_min));
    buffer_write(__args_buffer, buffer_string, _game_branch_min);

    // param: _game_branch_max, type: String
    if (!is_string(_game_branch_max)) show_error($"{_GMFUNCTION_} :: _game_branch_max expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_game_branch_max));
    buffer_write(__args_buffer, buffer_string, _game_branch_max);

    var _return_value = __steam_ugc_set_required_game_versions(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Real} _max_age_seconds
 * @param {Function} _callback
 */
function steam_ugc_request_ugc_details(_published_file_id, _max_age_seconds, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _max_age_seconds, type: UInt32
    if (!is_numeric(_max_age_seconds)) show_error($"{_GMFUNCTION_} :: _max_age_seconds expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_age_seconds);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_request_ugc_details(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Function} _callback
 */
function steam_ugc_send_query_ugc_request(_query_handle, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_send_query_ugc_request(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 */
function steam_ugc_release_query_ugc_request(_query_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    var _return_value = __steam_ugc_release_query_ugc_request(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_ugc_set_callback_item_installed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_ugc_set_callback_item_installed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_ugc_clear_callback_item_installed (no wrapper is required)


/**
 * @param {Real} _query_handle
 * @param {Real} _max_age_seconds
 * @returns {Bool} 
 */
function steam_ugc_set_allow_cached_response(_query_handle, _max_age_seconds)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _max_age_seconds, type: UInt32
    if (!is_numeric(_max_age_seconds)) show_error($"{_GMFUNCTION_} :: _max_age_seconds expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_age_seconds);

    var _return_value = __steam_ugc_set_allow_cached_response(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {String} _match_cloud_file_name
 * @returns {Bool} 
 */
function steam_ugc_set_cloud_file_name_filter(_query_handle, _match_cloud_file_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _match_cloud_file_name, type: String
    if (!is_string(_match_cloud_file_name)) show_error($"{_GMFUNCTION_} :: _match_cloud_file_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_match_cloud_file_name));
    buffer_write(__args_buffer, buffer_string, _match_cloud_file_name);

    var _return_value = __steam_ugc_set_cloud_file_name_filter(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _content_folder
 * @returns {Bool} 
 */
function steam_ugc_set_item_content(_update_handle, _content_folder)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _content_folder, type: String
    if (!is_string(_content_folder)) show_error($"{_GMFUNCTION_} :: _content_folder expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_content_folder));
    buffer_write(__args_buffer, buffer_string, _content_folder);

    var _return_value = __steam_ugc_set_item_content(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _description
 * @returns {Bool} 
 */
function steam_ugc_set_item_description(_update_handle, _description)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    var _return_value = __steam_ugc_set_item_description(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _metadata
 * @returns {Bool} 
 */
function steam_ugc_set_item_metadata(_update_handle, _metadata)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _metadata, type: String
    if (!is_string(_metadata)) show_error($"{_GMFUNCTION_} :: _metadata expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_metadata));
    buffer_write(__args_buffer, buffer_string, _metadata);

    var _return_value = __steam_ugc_set_item_metadata(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _preview_file
 * @returns {Bool} 
 */
function steam_ugc_set_item_preview(_update_handle, _preview_file)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _preview_file, type: String
    if (!is_string(_preview_file)) show_error($"{_GMFUNCTION_} :: _preview_file expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_preview_file));
    buffer_write(__args_buffer, buffer_string, _preview_file);

    var _return_value = __steam_ugc_set_item_preview(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Array[String]} _tags_csv
 * @returns {Bool} 
 */
function steam_ugc_set_item_tags(_update_handle, _tags_csv)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _tags_csv, type: String[]
    if (!is_array(_tags_csv)) show_error($"{_GMFUNCTION_} :: _tags_csv expected array", true);
    var _length = array_length(_tags_csv);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_string(_tags_csv[_i])) show_error($"{_GMFUNCTION_} :: _tags_csv[_i] expected string", true);
        buffer_write(__args_buffer, buffer_u32, string_byte_length(_tags_csv[_i]));
        buffer_write(__args_buffer, buffer_string, _tags_csv[_i]);
    }

    var _return_value = __steam_ugc_set_item_tags(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _title
 * @returns {Bool} 
 */
function steam_ugc_set_item_title(_update_handle, _title)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _title, type: String
    if (!is_string(_title)) show_error($"{_GMFUNCTION_} :: _title expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_title));
    buffer_write(__args_buffer, buffer_string, _title);

    var _return_value = __steam_ugc_set_item_title(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _language
 * @returns {Bool} 
 */
function steam_ugc_set_item_update_language(_update_handle, _language)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _language, type: String
    if (!is_string(_language)) show_error($"{_GMFUNCTION_} :: _language expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_language));
    buffer_write(__args_buffer, buffer_string, _language);

    var _return_value = __steam_ugc_set_item_update_language(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Array[Real]} _published_file_ids
 * @param {Real} _num_published_file_ids
 * @param {Bool} _disabled_locally
 * @returns {Bool} 
 */
function steam_ugc_set_items_disabled_locally(_published_file_ids, _num_published_file_ids, _disabled_locally)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_ids, type: UInt64[]
    if (!is_array(_published_file_ids)) show_error($"{_GMFUNCTION_} :: _published_file_ids expected array", true);
    var _length = array_length(_published_file_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_published_file_ids[_i])) show_error($"{_GMFUNCTION_} :: _published_file_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _published_file_ids[_i]);
    }

    // param: _num_published_file_ids, type: UInt32
    if (!is_numeric(_num_published_file_ids)) show_error($"{_GMFUNCTION_} :: _num_published_file_ids expected number", true);
    buffer_write(__args_buffer, buffer_u32, _num_published_file_ids);

    // param: _disabled_locally, type: Bool
    if (!is_bool(_disabled_locally)) show_error($"{_GMFUNCTION_} :: _disabled_locally expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _disabled_locally);

    var _return_value = __steam_ugc_set_items_disabled_locally(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} _visibility
 * @returns {Bool} 
 */
function steam_ugc_set_item_visibility(_update_handle, _visibility)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _visibility, type: enum SteamRemoteStoragePublishedFileVisibility

    if (!is_numeric(_visibility)) show_error($"{_GMFUNCTION_} :: _visibility expected number", true);
    buffer_write(__args_buffer, buffer_u64, _visibility);

    var _return_value = __steam_ugc_set_item_visibility(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {String} _language
 * @returns {Bool} 
 */
function steam_ugc_set_language(_query_handle, _language)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _language, type: String
    if (!is_string(_language)) show_error($"{_GMFUNCTION_} :: _language expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_language));
    buffer_write(__args_buffer, buffer_string, _language);

    var _return_value = __steam_ugc_set_language(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _match_any_tag
 * @returns {Bool} 
 */
function steam_ugc_set_match_any_tag(_query_handle, _match_any_tag)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _match_any_tag, type: Bool
    if (!is_bool(_match_any_tag)) show_error($"{_GMFUNCTION_} :: _match_any_tag expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _match_any_tag);

    var _return_value = __steam_ugc_set_match_any_tag(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _days
 * @returns {Bool} 
 */
function steam_ugc_set_ranked_by_trend_days(_query_handle, _days)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _days, type: UInt32
    if (!is_numeric(_days)) show_error($"{_GMFUNCTION_} :: _days expected number", true);
    buffer_write(__args_buffer, buffer_u32, _days);

    var _return_value = __steam_ugc_set_ranked_by_trend_days(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _return_additional_previews
 * @returns {Bool} 
 */
function steam_ugc_set_return_additional_previews(_query_handle, _return_additional_previews)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _return_additional_previews, type: Bool
    if (!is_bool(_return_additional_previews)) show_error($"{_GMFUNCTION_} :: _return_additional_previews expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _return_additional_previews);

    var _return_value = __steam_ugc_set_return_additional_previews(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _return_children
 * @returns {Bool} 
 */
function steam_ugc_set_return_children(_query_handle, _return_children)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _return_children, type: Bool
    if (!is_bool(_return_children)) show_error($"{_GMFUNCTION_} :: _return_children expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _return_children);

    var _return_value = __steam_ugc_set_return_children(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _return_key_value_tags
 * @returns {Bool} 
 */
function steam_ugc_set_return_key_value_tags(_query_handle, _return_key_value_tags)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _return_key_value_tags, type: Bool
    if (!is_bool(_return_key_value_tags)) show_error($"{_GMFUNCTION_} :: _return_key_value_tags expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _return_key_value_tags);

    var _return_value = __steam_ugc_set_return_key_value_tags(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _return_long_description
 * @returns {Bool} 
 */
function steam_ugc_set_return_long_description(_query_handle, _return_long_description)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _return_long_description, type: Bool
    if (!is_bool(_return_long_description)) show_error($"{_GMFUNCTION_} :: _return_long_description expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _return_long_description);

    var _return_value = __steam_ugc_set_return_long_description(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _return_metadata
 * @returns {Bool} 
 */
function steam_ugc_set_return_metadata(_query_handle, _return_metadata)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _return_metadata, type: Bool
    if (!is_bool(_return_metadata)) show_error($"{_GMFUNCTION_} :: _return_metadata expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _return_metadata);

    var _return_value = __steam_ugc_set_return_metadata(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _return_only_ids
 * @returns {Bool} 
 */
function steam_ugc_set_return_only_ids(_query_handle, _return_only_ids)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _return_only_ids, type: Bool
    if (!is_bool(_return_only_ids)) show_error($"{_GMFUNCTION_} :: _return_only_ids expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _return_only_ids);

    var _return_value = __steam_ugc_set_return_only_ids(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Real} _days
 * @returns {Bool} 
 */
function steam_ugc_set_return_playtime_stats(_query_handle, _days)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _days, type: UInt32
    if (!is_numeric(_days)) show_error($"{_GMFUNCTION_} :: _days expected number", true);
    buffer_write(__args_buffer, buffer_u32, _days);

    var _return_value = __steam_ugc_set_return_playtime_stats(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {Bool} _return_total_only
 * @returns {Bool} 
 */
function steam_ugc_set_return_total_only(_query_handle, _return_total_only)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _return_total_only, type: Bool
    if (!is_bool(_return_total_only)) show_error($"{_GMFUNCTION_} :: _return_total_only expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _return_total_only);

    var _return_value = __steam_ugc_set_return_total_only(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _query_handle
 * @param {String} _search_text
 * @returns {Bool} 
 */
function steam_ugc_set_search_text(_query_handle, _search_text)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _search_text, type: String
    if (!is_string(_search_text)) show_error($"{_GMFUNCTION_} :: _search_text expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_search_text));
    buffer_write(__args_buffer, buffer_string, _search_text);

    var _return_value = __steam_ugc_set_search_text(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Array[Real]} _published_file_ids
 * @param {Real} _num_published_file_ids
 * @returns {Bool} 
 */
function steam_ugc_set_subscriptions_load_order(_published_file_ids, _num_published_file_ids)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_ids, type: UInt64[]
    if (!is_array(_published_file_ids)) show_error($"{_GMFUNCTION_} :: _published_file_ids expected array", true);
    var _length = array_length(_published_file_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_published_file_ids[_i])) show_error($"{_GMFUNCTION_} :: _published_file_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _published_file_ids[_i]);
    }

    // param: _num_published_file_ids, type: UInt32
    if (!is_numeric(_num_published_file_ids)) show_error($"{_GMFUNCTION_} :: _num_published_file_ids expected number", true);
    buffer_write(__args_buffer, buffer_u32, _num_published_file_ids);

    var _return_value = __steam_ugc_set_subscriptions_load_order(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Bool} _vote_up
 * @param {Function} _callback
 */
function steam_ugc_set_user_item_vote(_published_file_id, _vote_up, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _vote_up, type: Bool
    if (!is_bool(_vote_up)) show_error($"{_GMFUNCTION_} :: _vote_up expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _vote_up);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_set_user_item_vote(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_ugc_get_user_item_vote(_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_get_user_item_vote(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _consumer_app_id
 * @param {Real} _published_file_id
 * @returns {Real} 
 */
function steam_ugc_start_item_update(_consumer_app_id, _published_file_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _consumer_app_id, type: UInt32
    if (!is_numeric(_consumer_app_id)) show_error($"{_GMFUNCTION_} :: _consumer_app_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _consumer_app_id);

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_ugc_start_item_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Array[Real]} _published_file_ids
 * @param {Real} _num_published_file_ids
 * @param {Function} _callback
 */
function steam_ugc_start_playtime_tracking(_published_file_ids, _num_published_file_ids, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_ids, type: UInt64[]
    if (!is_array(_published_file_ids)) show_error($"{_GMFUNCTION_} :: _published_file_ids expected array", true);
    var _length = array_length(_published_file_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_published_file_ids[_i])) show_error($"{_GMFUNCTION_} :: _published_file_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _published_file_ids[_i]);
    }

    // param: _num_published_file_ids, type: UInt32
    if (!is_numeric(_num_published_file_ids)) show_error($"{_GMFUNCTION_} :: _num_published_file_ids expected number", true);
    buffer_write(__args_buffer, buffer_u32, _num_published_file_ids);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_start_playtime_tracking(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Array[Real]} _published_file_ids
 * @param {Real} _num_published_file_ids
 * @param {Function} _callback
 */
function steam_ugc_stop_playtime_tracking(_published_file_ids, _num_published_file_ids, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_ids, type: UInt64[]
    if (!is_array(_published_file_ids)) show_error($"{_GMFUNCTION_} :: _published_file_ids expected array", true);
    var _length = array_length(_published_file_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_published_file_ids[_i])) show_error($"{_GMFUNCTION_} :: _published_file_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _published_file_ids[_i]);
    }

    // param: _num_published_file_ids, type: UInt32
    if (!is_numeric(_num_published_file_ids)) show_error($"{_GMFUNCTION_} :: _num_published_file_ids expected number", true);
    buffer_write(__args_buffer, buffer_u32, _num_published_file_ids);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_stop_playtime_tracking(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_ugc_stop_playtime_tracking_for_all_items(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_stop_playtime_tracking_for_all_items(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _change_note
 * @param {Function} _callback
 */
function steam_ugc_submit_item_update(_update_handle, _change_note, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _change_note, type: String
    if (!is_string(_change_note)) show_error($"{_GMFUNCTION_} :: _change_note expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_change_note));
    buffer_write(__args_buffer, buffer_string, _change_note);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_submit_item_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_ugc_subscribe_item(_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_subscribe_item(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_ugc_suspend_downloads (no wrapper is required)


/**
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_ugc_unsubscribe_item(_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_unsubscribe_item(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_ugc_set_callback_user_subscribed_items_list_changed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_ugc_set_callback_user_subscribed_items_list_changed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_ugc_clear_callback_user_subscribed_items_list_changed (no wrapper is required)


/**
 * @param {Real} _update_handle
 * @param {Real} _index
 * @param {String} _preview_file
 * @returns {Bool} 
 */
function steam_ugc_update_item_preview_file(_update_handle, _index, _preview_file)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    // param: _preview_file, type: String
    if (!is_string(_preview_file)) show_error($"{_GMFUNCTION_} :: _preview_file expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_preview_file));
    buffer_write(__args_buffer, buffer_string, _preview_file);

    var _return_value = __steam_ugc_update_item_preview_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Real} _index
 * @param {String} _video_id
 * @returns {Bool} 
 */
function steam_ugc_update_item_preview_video(_update_handle, _index, _video_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    // param: _video_id, type: String
    if (!is_string(_video_id)) show_error($"{_GMFUNCTION_} :: _video_id expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_video_id));
    buffer_write(__args_buffer, buffer_string, _video_id);

    var _return_value = __steam_ugc_update_item_preview_video(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_ugc_show_workshop_eula (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_ugc_get_workshop_eula_status(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_ugc_get_workshop_eula_status(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_ugc_set_callback_file_subscribed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_ugc_set_callback_file_subscribed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_ugc_clear_callback_file_subscribed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_ugc_set_callback_file_unsubscribed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_ugc_set_callback_file_unsubscribed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_ugc_clear_callback_file_unsubscribed (no wrapper is required)


/**
 * @param {Real} _query_handle
 * @param {Real} _index
 * @returns {Real} 
 */
function steam_ugc_get_num_supported_game_versions(_query_handle, _index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _query_handle, type: UInt64
    if (!is_numeric(_query_handle)) show_error($"{_GMFUNCTION_} :: _query_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _query_handle);

    // param: _index, type: UInt32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _index);

    var _return_value = __steam_ugc_get_num_supported_game_versions(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _action_set_handle
 */
function steam_input_activate_action_set(_input_handle, _action_set_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _action_set_handle, type: UInt64
    if (!is_numeric(_action_set_handle)) show_error($"{_GMFUNCTION_} :: _action_set_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _action_set_handle);

    var _return_value = __steam_input_activate_action_set(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _action_set_layer_handle
 */
function steam_input_activate_action_set_layer(_input_handle, _action_set_layer_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _action_set_layer_handle, type: UInt64
    if (!is_numeric(_action_set_layer_handle)) show_error($"{_GMFUNCTION_} :: _action_set_layer_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _action_set_layer_handle);

    var _return_value = __steam_input_activate_action_set_layer(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _action_set_layer_handle
 */
function steam_input_deactivate_action_set_layer(_input_handle, _action_set_layer_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _action_set_layer_handle, type: UInt64
    if (!is_numeric(_action_set_layer_handle)) show_error($"{_GMFUNCTION_} :: _action_set_layer_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _action_set_layer_handle);

    var _return_value = __steam_input_deactivate_action_set_layer(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 */
function steam_input_deactivate_all_action_set_layers(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var _return_value = __steam_input_deactivate_all_action_set_layers(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @returns {Struct.SteamInputActiveActionSetLayers} 
 */
function steam_input_get_active_action_set_layers(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_active_action_set_layers(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInputActiveActionSetLayers_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _pszActionSetName
 * @returns {Real} 
 */
function steam_input_get_action_set_handle(_pszActionSetName)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_action_set_handle(_pszActionSetName, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _analog_action_handle
 * @returns {Struct.SteamInputAnalogActionData} 
 */
function steam_input_get_analog_action_data(_input_handle, _analog_action_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _analog_action_handle, type: UInt64
    if (!is_numeric(_analog_action_handle)) show_error($"{_GMFUNCTION_} :: _analog_action_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _analog_action_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_analog_action_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInputAnalogActionData_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _pszActionName
 * @returns {Real} 
 */
function steam_input_get_analog_action_handle(_pszActionName)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_analog_action_handle(_pszActionName, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _action_set_handle
 * @param {Real} _analog_action_handle
 * @returns {Struct.SteamInputActionOrigins} 
 */
function steam_input_get_analog_action_origins(_input_handle, _action_set_handle, _analog_action_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _action_set_handle, type: UInt64
    if (!is_numeric(_action_set_handle)) show_error($"{_GMFUNCTION_} :: _action_set_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _action_set_handle);

    // param: _analog_action_handle, type: UInt64
    if (!is_numeric(_analog_action_handle)) show_error($"{_GMFUNCTION_} :: _analog_action_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _analog_action_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_analog_action_origins(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInputActionOrigins_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_input_get_glyph_png_for_action_origin (no wrapper is required)


// Skipping function steam_input_get_glyph_svg_for_action_origin (no wrapper is required)


/**
 * @returns {Array[Real]} 
 */
function steam_input_get_connected_controllers()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_connected_controllers(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u64);
    }
    return _result;
}

/**
 * @param {Real} _nIndex
 * @returns {Real} 
 */
function steam_input_get_controller_for_gamepad_index(_nIndex)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_controller_for_gamepad_index(_nIndex, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _input_handle
 * @returns {Real} 
 */
function steam_input_get_current_action_set(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_current_action_set(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _digital_action_handle
 * @returns {Struct.SteamInputDigitalActionData} 
 */
function steam_input_get_digital_action_data(_input_handle, _digital_action_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _digital_action_handle, type: UInt64
    if (!is_numeric(_digital_action_handle)) show_error($"{_GMFUNCTION_} :: _digital_action_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _digital_action_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_digital_action_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInputDigitalActionData_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _pszActionName
 * @returns {Real} 
 */
function steam_input_get_digital_action_handle(_pszActionName)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_digital_action_handle(_pszActionName, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _action_set_handle
 * @param {Real} _digital_action_handle
 * @returns {Struct.SteamInputActionOrigins} 
 */
function steam_input_get_digital_action_origins(_input_handle, _action_set_handle, _digital_action_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _action_set_handle, type: UInt64
    if (!is_numeric(_action_set_handle)) show_error($"{_GMFUNCTION_} :: _action_set_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _action_set_handle);

    // param: _digital_action_handle, type: UInt64
    if (!is_numeric(_digital_action_handle)) show_error($"{_GMFUNCTION_} :: _digital_action_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _digital_action_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_digital_action_origins(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInputActionOrigins_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _input_handle
 * @returns {Real} 
 */
function steam_input_get_gamepad_index_for_controller(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var _return_value = __steam_input_get_gamepad_index_for_controller(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @returns {Real} 
 */
function steam_input_get_input_type_for_handle(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var _return_value = __steam_input_get_input_type_for_handle(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @returns {Struct.SteamInputMotionData} 
 */
function steam_input_get_motion_data(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_motion_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInputMotionData_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_input_get_string_for_action_origin (no wrapper is required)


// Skipping function steam_input_init (no wrapper is required)


// Skipping function steam_input_enable_device_callbacks (no wrapper is required)


// Skipping function steam_input_run_frame (no wrapper is required)


/**
 * @param {Real} _input_handle
 * @param {Array[Real]} _pParam
 * @returns {Bool} 
 */
function steam_input_set_dual_sense_trigger_effect(_input_handle, _pParam)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _pParam, type: UInt32[]
    if (!is_array(_pParam)) show_error($"{_GMFUNCTION_} :: _pParam expected array", true);
    var _length = array_length(_pParam);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_pParam[_i])) show_error($"{_GMFUNCTION_} :: _pParam[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _pParam[_i]);
    }

    var _return_value = __steam_input_set_dual_sense_trigger_effect(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _nColorR
 * @param {Real} _nColorG
 * @param {Real} _nColorB
 * @param {Real} _nFlags
 */
function steam_input_set_led_color(_input_handle, _nColorR, _nColorG, _nColorB, _nFlags)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _nColorR, type: UInt32
    if (!is_numeric(_nColorR)) show_error($"{_GMFUNCTION_} :: _nColorR expected number", true);
    buffer_write(__args_buffer, buffer_u32, _nColorR);

    // param: _nColorG, type: UInt32
    if (!is_numeric(_nColorG)) show_error($"{_GMFUNCTION_} :: _nColorG expected number", true);
    buffer_write(__args_buffer, buffer_u32, _nColorG);

    // param: _nColorB, type: UInt32
    if (!is_numeric(_nColorB)) show_error($"{_GMFUNCTION_} :: _nColorB expected number", true);
    buffer_write(__args_buffer, buffer_u32, _nColorB);

    // param: _nFlags, type: UInt32
    if (!is_numeric(_nFlags)) show_error($"{_GMFUNCTION_} :: _nFlags expected number", true);
    buffer_write(__args_buffer, buffer_u32, _nFlags);

    var _return_value = __steam_input_set_led_color(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @returns {Bool} 
 */
function steam_input_show_binding_panel(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var _return_value = __steam_input_show_binding_panel(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_input_shutdown (no wrapper is required)


/**
 * @param {Real} _input_handle
 * @param {Real} _analog_action_handle
 */
function steam_input_stop_analog_action_momentum(_input_handle, _analog_action_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _analog_action_handle, type: UInt64
    if (!is_numeric(_analog_action_handle)) show_error($"{_GMFUNCTION_} :: _analog_action_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _analog_action_handle);

    var _return_value = __steam_input_stop_analog_action_momentum(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _usLeftSpeed
 * @param {Real} _usRightSpeed
 */
function steam_input_trigger_vibration(_input_handle, _usLeftSpeed, _usRightSpeed)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _usLeftSpeed, type: UInt32
    if (!is_numeric(_usLeftSpeed)) show_error($"{_GMFUNCTION_} :: _usLeftSpeed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _usLeftSpeed);

    // param: _usRightSpeed, type: UInt32
    if (!is_numeric(_usRightSpeed)) show_error($"{_GMFUNCTION_} :: _usRightSpeed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _usRightSpeed);

    var _return_value = __steam_input_trigger_vibration(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _usLeftSpeed
 * @param {Real} _usRightSpeed
 * @param {Real} _usLeftTriggerSpeed
 * @param {Real} _usRightTriggerSpeed
 */
function steam_input_trigger_vibration_extended(_input_handle, _usLeftSpeed, _usRightSpeed, _usLeftTriggerSpeed, _usRightTriggerSpeed)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _usLeftSpeed, type: UInt32
    if (!is_numeric(_usLeftSpeed)) show_error($"{_GMFUNCTION_} :: _usLeftSpeed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _usLeftSpeed);

    // param: _usRightSpeed, type: UInt32
    if (!is_numeric(_usRightSpeed)) show_error($"{_GMFUNCTION_} :: _usRightSpeed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _usRightSpeed);

    // param: _usLeftTriggerSpeed, type: UInt32
    if (!is_numeric(_usLeftTriggerSpeed)) show_error($"{_GMFUNCTION_} :: _usLeftTriggerSpeed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _usLeftTriggerSpeed);

    // param: _usRightTriggerSpeed, type: UInt32
    if (!is_numeric(_usRightTriggerSpeed)) show_error($"{_GMFUNCTION_} :: _usRightTriggerSpeed expected number", true);
    buffer_write(__args_buffer, buffer_u32, _usRightTriggerSpeed);

    var _return_value = __steam_input_trigger_vibration_extended(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _input_handle
 * @param {Real} _eOrigin
 * @returns {Real} 
 */
function steam_input_get_action_origin_from_xbox_origin(_input_handle, _eOrigin)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    // param: _eOrigin, type: Int32
    if (!is_numeric(_eOrigin)) show_error($"{_GMFUNCTION_} :: _eOrigin expected number", true);
    buffer_write(__args_buffer, buffer_s32, _eOrigin);

    var _return_value = __steam_input_get_action_origin_from_xbox_origin(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_input_translate_action_origin (no wrapper is required)


/**
 * @param {Real} _input_handle
 * @returns {Struct.SteamInputDeviceBindingRevision} 
 */
function steam_input_get_device_binding_revision(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_input_get_device_binding_revision(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInputDeviceBindingRevision_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _input_handle
 * @returns {Real} 
 */
function steam_input_get_remote_play_session_id(_input_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _input_handle, type: UInt64
    if (!is_numeric(_input_handle)) show_error($"{_GMFUNCTION_} :: _input_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _input_handle);

    var _return_value = __steam_input_get_remote_play_session_id(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_input_set_callback_device_connected(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_input_set_callback_device_connected(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_input_clear_callback_device_connected (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_input_set_callback_device_disconnected(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_input_set_callback_device_disconnected(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_input_clear_callback_device_disconnected (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_input_set_callback_action_set_changed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_input_set_callback_action_set_changed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_input_clear_callback_action_set_changed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_input_set_callback_controller_battery(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_input_set_callback_controller_battery(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_input_clear_callback_controller_battery (no wrapper is required)


/**
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsStatInt} 
 */
function steam_userstats_get_stat_int(_stat_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_get_stat_int(_stat_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsStatInt_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsStatFloat} 
 */
function steam_userstats_get_stat_float(_stat_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_get_stat_float(_stat_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsStatFloat_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_userstats_set_stat_int (no wrapper is required)


// Skipping function steam_userstats_set_stat_float (no wrapper is required)


// Skipping function steam_userstats_update_avg_rate_stat (no wrapper is required)


/**
 * @param {String} _achievement_name
 * @returns {Struct.SteamUserStatsUserAchievement} 
 */
function steam_userstats_get_achievement(_achievement_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_get_achievement(_achievement_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsUserAchievement_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_userstats_set_achievement (no wrapper is required)


// Skipping function steam_userstats_clear_achievement (no wrapper is required)


/**
 * @param {String} _achievement_name
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 */
function steam_userstats_achievement_and_unlock_time(_achievement_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_achievement_and_unlock_time(_achievement_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsAchievementAndUnlockTime_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_userstats_store_stats (no wrapper is required)


// Skipping function steam_userstats_achievement_icon (no wrapper is required)


// Skipping function steam_userstats_achievement_display_attribute (no wrapper is required)


// Skipping function steam_userstats_indicate_achievement_progress (no wrapper is required)


// Skipping function steam_userstats_num_achievements (no wrapper is required)


// Skipping function steam_userstats_achievement_name (no wrapper is required)


/**
 * @param {Real} _steam_id_user
 * @param {Function} _callback
 */
function steam_userstats_request_user_stats(_steam_id_user, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_user, type: UInt64
    if (!is_numeric(_steam_id_user)) show_error($"{_GMFUNCTION_} :: _steam_id_user expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_user);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_request_user_stats(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_user
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsStatInt} 
 */
function steam_userstats_user_stat_int(_steam_id_user, _stat_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_user, type: UInt64
    if (!is_numeric(_steam_id_user)) show_error($"{_GMFUNCTION_} :: _steam_id_user expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_user);

    // param: _stat_name, type: String
    if (!is_string(_stat_name)) show_error($"{_GMFUNCTION_} :: _stat_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_stat_name));
    buffer_write(__args_buffer, buffer_string, _stat_name);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_user_stat_int(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsStatInt_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _steam_id_user
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsStatFloat} 
 */
function steam_userstats_user_stat_float(_steam_id_user, _stat_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_user, type: UInt64
    if (!is_numeric(_steam_id_user)) show_error($"{_GMFUNCTION_} :: _steam_id_user expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_user);

    // param: _stat_name, type: String
    if (!is_string(_stat_name)) show_error($"{_GMFUNCTION_} :: _stat_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_stat_name));
    buffer_write(__args_buffer, buffer_string, _stat_name);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_user_stat_float(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsStatFloat_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _steam_id_user
 * @param {String} _achievement_name
 * @returns {Struct.SteamUserStatsUserAchievement} 
 */
function steam_userstats_user_achievement(_steam_id_user, _achievement_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_user, type: UInt64
    if (!is_numeric(_steam_id_user)) show_error($"{_GMFUNCTION_} :: _steam_id_user expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_user);

    // param: _achievement_name, type: String
    if (!is_string(_achievement_name)) show_error($"{_GMFUNCTION_} :: _achievement_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_achievement_name));
    buffer_write(__args_buffer, buffer_string, _achievement_name);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_user_achievement(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsUserAchievement_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _steam_id_user
 * @param {String} _achievement_name
 * @returns {Struct.SteamUserStatsAchievementAndUnlockTime} 
 */
function steam_userstats_user_achievement_and_unlock_time(_steam_id_user, _achievement_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_user, type: UInt64
    if (!is_numeric(_steam_id_user)) show_error($"{_GMFUNCTION_} :: _steam_id_user expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_user);

    // param: _achievement_name, type: String
    if (!is_string(_achievement_name)) show_error($"{_GMFUNCTION_} :: _achievement_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_achievement_name));
    buffer_write(__args_buffer, buffer_string, _achievement_name);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_user_achievement_and_unlock_time(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsAchievementAndUnlockTime_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_userstats_reset_all_stats (no wrapper is required)


/**
 * @param {String} _leaderboard_name
 * @param {Enum.SteamLeaderboardSortMethod} _sort_method
 * @param {Enum.SteamLeaderboardDisplayType} _display_type
 * @param {Function} _callback
 */
function steam_userstats_find_or_create_leaderboard(_leaderboard_name, _sort_method, _display_type, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_name, type: String
    if (!is_string(_leaderboard_name)) show_error($"{_GMFUNCTION_} :: _leaderboard_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_leaderboard_name));
    buffer_write(__args_buffer, buffer_string, _leaderboard_name);

    // param: _sort_method, type: enum SteamLeaderboardSortMethod

    if (!is_numeric(_sort_method)) show_error($"{_GMFUNCTION_} :: _sort_method expected number", true);
    buffer_write(__args_buffer, buffer_u64, _sort_method);

    // param: _display_type, type: enum SteamLeaderboardDisplayType

    if (!is_numeric(_display_type)) show_error($"{_GMFUNCTION_} :: _display_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _display_type);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_find_or_create_leaderboard(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _leaderboard_name
 * @param {Function} _callback
 */
function steam_userstats_find_leaderboard(_leaderboard_name, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_name, type: String
    if (!is_string(_leaderboard_name)) show_error($"{_GMFUNCTION_} :: _leaderboard_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_leaderboard_name));
    buffer_write(__args_buffer, buffer_string, _leaderboard_name);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_find_leaderboard(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _leaderboard_handle
 * @returns {String} 
 */
function steam_userstats_leaderboard_name(_leaderboard_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    var _return_value = __steam_userstats_leaderboard_name(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _leaderboard_handle
 * @returns {Real} 
 */
function steam_userstats_leaderboard_entry_count(_leaderboard_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    var _return_value = __steam_userstats_leaderboard_entry_count(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _leaderboard_handle
 * @returns {Enum.SteamLeaderboardSortMethod} 
 */
function steam_userstats_leaderboard_sort_method(_leaderboard_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_leaderboard_sort_method(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _leaderboard_handle
 * @returns {Enum.SteamLeaderboardDisplayType} 
 */
function steam_userstats_leaderboard_display_type(_leaderboard_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_leaderboard_display_type(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _leaderboard_handle
 * @param {Enum.SteamLeaderboardDataRequest} _request
 * @param {Real} _range_start
 * @param {Real} _range_end
 * @param {Function} _callback
 */
function steam_userstats_download_leaderboard_entries(_leaderboard_handle, _request, _range_start, _range_end, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    // param: _request, type: enum SteamLeaderboardDataRequest

    if (!is_numeric(_request)) show_error($"{_GMFUNCTION_} :: _request expected number", true);
    buffer_write(__args_buffer, buffer_u64, _request);

    // param: _range_start, type: Int32
    if (!is_numeric(_range_start)) show_error($"{_GMFUNCTION_} :: _range_start expected number", true);
    buffer_write(__args_buffer, buffer_s32, _range_start);

    // param: _range_end, type: Int32
    if (!is_numeric(_range_end)) show_error($"{_GMFUNCTION_} :: _range_end expected number", true);
    buffer_write(__args_buffer, buffer_s32, _range_end);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_download_leaderboard_entries(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _leaderboard_handle
 * @param {Array[Real]} _users
 * @param {Function} _callback
 */
function steam_userstats_download_leaderboard_entries_for_users(_leaderboard_handle, _users, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    // param: _users, type: UInt64[]
    if (!is_array(_users)) show_error($"{_GMFUNCTION_} :: _users expected array", true);
    var _length = array_length(_users);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_users[_i])) show_error($"{_GMFUNCTION_} :: _users[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _users[_i]);
    }

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_download_leaderboard_entries_for_users(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _leaderboard_entries_handle
 * @param {Real} _entry_index
 * @param {Id.Buffer} _buffer
 * @param {Real} _buffer_size
 * @returns {Struct.SteamUserStatsDownloadedLeaderboardEntry} 
 */
function steam_userstats_downloaded_leaderboard_entry(_leaderboard_entries_handle, _entry_index, _buffer, _buffer_size)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_entries_handle, type: UInt64
    if (!is_numeric(_leaderboard_entries_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_entries_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_entries_handle);

    // param: _entry_index, type: Int32
    if (!is_numeric(_entry_index)) show_error($"{_GMFUNCTION_} :: _entry_index expected number", true);
    buffer_write(__args_buffer, buffer_s32, _entry_index);

    // param: _buffer, type: Buffer
    if (!buffer_exists(_buffer)) show_error($"{_GMFUNCTION_} :: _buffer expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_buffer), buffer_get_size(_buffer));

    // param: _buffer_size, type: UInt32
    if (!is_numeric(_buffer_size)) show_error($"{_GMFUNCTION_} :: _buffer_size expected number", true);
    buffer_write(__args_buffer, buffer_u32, _buffer_size);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_downloaded_leaderboard_entry(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsDownloadedLeaderboardEntry_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _leaderboard_handle
 * @param {Enum.SteamLeaderboardUploadScoreMethod} _method
 * @param {Real} _score
 * @param {Id.Buffer} _score_details_buffer
 * @param {Real} _score_details_count
 * @param {Function} _callback
 */
function steam_userstats_upload_leaderboard_score(_leaderboard_handle, _method, _score, _score_details_buffer, _score_details_count, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    // param: _method, type: enum SteamLeaderboardUploadScoreMethod

    if (!is_numeric(_method)) show_error($"{_GMFUNCTION_} :: _method expected number", true);
    buffer_write(__args_buffer, buffer_u64, _method);

    // param: _score, type: Int32
    if (!is_numeric(_score)) show_error($"{_GMFUNCTION_} :: _score expected number", true);
    buffer_write(__args_buffer, buffer_s32, _score);

    // param: _score_details_buffer, type: Buffer
    if (!buffer_exists(_score_details_buffer)) show_error($"{_GMFUNCTION_} :: _score_details_buffer expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_score_details_buffer), buffer_get_size(_score_details_buffer));

    // param: _score_details_count, type: Int32
    if (!is_numeric(_score_details_count)) show_error($"{_GMFUNCTION_} :: _score_details_count expected number", true);
    buffer_write(__args_buffer, buffer_s32, _score_details_count);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_upload_leaderboard_score(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _leaderboard_handle
 * @param {Real} _ugc_handle
 * @param {Function} _callback
 */
function steam_userstats_attach_leaderboard_ugc(_leaderboard_handle, _ugc_handle, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _leaderboard_handle, type: UInt64
    if (!is_numeric(_leaderboard_handle)) show_error($"{_GMFUNCTION_} :: _leaderboard_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _leaderboard_handle);

    // param: _ugc_handle, type: UInt64
    if (!is_numeric(_ugc_handle)) show_error($"{_GMFUNCTION_} :: _ugc_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _ugc_handle);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_attach_leaderboard_ugc(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_userstats_number_of_current_players(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_number_of_current_players(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_userstats_request_global_achievement_percentages(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_request_global_achievement_percentages(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 */
function steam_userstats_most_achieved_achievement_info()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_most_achieved_achievement_info(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsMostAchievedAchievementInfo_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _iterator_prev
 * @returns {Struct.SteamUserStatsMostAchievedAchievementInfo} 
 */
function steam_userstats_next_most_achieved_achievement_info(_iterator_prev)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_next_most_achieved_achievement_info(_iterator_prev, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsMostAchievedAchievementInfo_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_userstats_achievement_achieved_percent (no wrapper is required)


/**
 * @param {Real} _history_days
 * @param {Function} _callback
 */
function steam_userstats_request_global_stats(_history_days, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _history_days, type: Int32
    if (!is_numeric(_history_days)) show_error($"{_GMFUNCTION_} :: _history_days expected number", true);
    buffer_write(__args_buffer, buffer_s32, _history_days);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_userstats_request_global_stats(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsGlobalStatInt64} 
 */
function steam_userstats_global_stat_int64(_stat_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_global_stat_int64(_stat_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsGlobalStatInt64_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsGlobalStatDouble} 
 */
function steam_userstats_global_stat_double(_stat_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_global_stat_double(_stat_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsGlobalStatDouble_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsGlobalStatHistoryInt64} 
 */
function steam_userstats_global_stat_history_int64(_stat_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_global_stat_history_int64(_stat_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsGlobalStatHistoryInt64_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _stat_name
 * @returns {Struct.SteamUserStatsGlobalStatHistoryDouble} 
 */
function steam_userstats_global_stat_history_double(_stat_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_global_stat_history_double(_stat_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsGlobalStatHistoryDouble_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _achievement_name
 * @param {Real} _cur_progress
 * @param {Real} _max_progress
 * @returns {Struct.SteamUserStatsIntMinMax} 
 */
function steam_userstats_achievement_progress_limits_int(_achievement_name, _cur_progress, _max_progress)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _achievement_name, type: String
    if (!is_string(_achievement_name)) show_error($"{_GMFUNCTION_} :: _achievement_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_achievement_name));
    buffer_write(__args_buffer, buffer_string, _achievement_name);

    // param: _cur_progress, type: UInt32
    if (!is_numeric(_cur_progress)) show_error($"{_GMFUNCTION_} :: _cur_progress expected number", true);
    buffer_write(__args_buffer, buffer_u32, _cur_progress);

    // param: _max_progress, type: UInt32
    if (!is_numeric(_max_progress)) show_error($"{_GMFUNCTION_} :: _max_progress expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_progress);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_achievement_progress_limits_int(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsIntMinMax_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _achievement_name
 * @param {Real} _cur_progress
 * @param {Real} _max_progress
 * @returns {Struct.SteamUserStatsFloatMinMax} 
 */
function steam_userstats_achievement_progress_limits_float(_achievement_name, _cur_progress, _max_progress)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _achievement_name, type: String
    if (!is_string(_achievement_name)) show_error($"{_GMFUNCTION_} :: _achievement_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_achievement_name));
    buffer_write(__args_buffer, buffer_string, _achievement_name);

    // param: _cur_progress, type: Float32
    if (!is_numeric(_cur_progress)) show_error($"{_GMFUNCTION_} :: _cur_progress expected number", true);
    buffer_write(__args_buffer, buffer_f32, _cur_progress);

    // param: _max_progress, type: Float32
    if (!is_numeric(_max_progress)) show_error($"{_GMFUNCTION_} :: _max_progress expected number", true);
    buffer_write(__args_buffer, buffer_f32, _max_progress);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_userstats_achievement_progress_limits_float(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamUserStatsFloatMinMax_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Function} _callback
 */
function steam_userstats_set_callback_user_stats_received(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_userstats_set_callback_user_stats_received(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_userstats_clear_callback_user_stats_received (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_userstats_set_callback_user_stats_stored(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_userstats_set_callback_user_stats_stored(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_userstats_clear_callback_user_stats_stored (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_userstats_set_callback_user_achievement_stored(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_userstats_set_callback_user_achievement_stored(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_userstats_clear_callback_user_achievement_stored (no wrapper is required)


// Skipping function steam_music_is_enabled (no wrapper is required)


// Skipping function steam_music_is_playing (no wrapper is required)


/**
 * @returns {Enum.SteamMusicPlaybackStatus} 
 */
function steam_music_get_playback_status()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_music_get_playback_status(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_music_play (no wrapper is required)


// Skipping function steam_music_pause (no wrapper is required)


// Skipping function steam_music_play_previous (no wrapper is required)


// Skipping function steam_music_play_next (no wrapper is required)


// Skipping function steam_music_set_volume (no wrapper is required)


// Skipping function steam_music_get_volume (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_music_set_callback_playback_status_has_changed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_music_set_callback_playback_status_has_changed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_music_clear_callback_playback_status_has_changed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_music_set_callback_volume_has_changed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_music_set_callback_volume_has_changed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_music_clear_callback_volume_has_changed (no wrapper is required)


// Skipping function steam_timeline_set_timeline_tooltip (no wrapper is required)


// Skipping function steam_timeline_clear_timeline_tooltip (no wrapper is required)


/**
 * @param {String} _title
 * @param {String} _description
 * @param {String} _icon
 * @param {Real} _priority
 * @param {Real} _start_offset_seconds
 * @param {Enum.SteamTimelineEventClipPriority} _possible_clip
 * @returns {Real} 
 */
function steam_timeline_add_instantaneous_timeline_event(_title, _description, _icon, _priority, _start_offset_seconds, _possible_clip)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _title, type: String
    if (!is_string(_title)) show_error($"{_GMFUNCTION_} :: _title expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_title));
    buffer_write(__args_buffer, buffer_string, _title);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    // param: _icon, type: String
    if (!is_string(_icon)) show_error($"{_GMFUNCTION_} :: _icon expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_icon));
    buffer_write(__args_buffer, buffer_string, _icon);

    // param: _priority, type: UInt32
    if (!is_numeric(_priority)) show_error($"{_GMFUNCTION_} :: _priority expected number", true);
    buffer_write(__args_buffer, buffer_u32, _priority);

    // param: _start_offset_seconds, type: Float32
    if (!is_numeric(_start_offset_seconds)) show_error($"{_GMFUNCTION_} :: _start_offset_seconds expected number", true);
    buffer_write(__args_buffer, buffer_f32, _start_offset_seconds);

    // param: _possible_clip, type: enum SteamTimelineEventClipPriority

    if (!is_numeric(_possible_clip)) show_error($"{_GMFUNCTION_} :: _possible_clip expected number", true);
    buffer_write(__args_buffer, buffer_u64, _possible_clip);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_timeline_add_instantaneous_timeline_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {String} _title
 * @param {String} _description
 * @param {String} _icon
 * @param {Real} _priority
 * @param {Real} _start_offset_seconds
 * @param {Real} _duration_seconds
 * @param {Enum.SteamTimelineEventClipPriority} _possible_clip
 * @returns {Real} 
 */
function steam_timeline_add_range_timeline_event(_title, _description, _icon, _priority, _start_offset_seconds, _duration_seconds, _possible_clip)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _title, type: String
    if (!is_string(_title)) show_error($"{_GMFUNCTION_} :: _title expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_title));
    buffer_write(__args_buffer, buffer_string, _title);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    // param: _icon, type: String
    if (!is_string(_icon)) show_error($"{_GMFUNCTION_} :: _icon expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_icon));
    buffer_write(__args_buffer, buffer_string, _icon);

    // param: _priority, type: UInt32
    if (!is_numeric(_priority)) show_error($"{_GMFUNCTION_} :: _priority expected number", true);
    buffer_write(__args_buffer, buffer_u32, _priority);

    // param: _start_offset_seconds, type: Float32
    if (!is_numeric(_start_offset_seconds)) show_error($"{_GMFUNCTION_} :: _start_offset_seconds expected number", true);
    buffer_write(__args_buffer, buffer_f32, _start_offset_seconds);

    // param: _duration_seconds, type: Float32
    if (!is_numeric(_duration_seconds)) show_error($"{_GMFUNCTION_} :: _duration_seconds expected number", true);
    buffer_write(__args_buffer, buffer_f32, _duration_seconds);

    // param: _possible_clip, type: enum SteamTimelineEventClipPriority

    if (!is_numeric(_possible_clip)) show_error($"{_GMFUNCTION_} :: _possible_clip expected number", true);
    buffer_write(__args_buffer, buffer_u64, _possible_clip);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_timeline_add_range_timeline_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {String} _title
 * @param {String} _description
 * @param {String} _icon
 * @param {Real} _priority
 * @param {Real} _start_offset_seconds
 * @param {Enum.SteamTimelineEventClipPriority} _possible_clip
 * @returns {Real} 
 */
function steam_timeline_start_range_timeline_event(_title, _description, _icon, _priority, _start_offset_seconds, _possible_clip)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _title, type: String
    if (!is_string(_title)) show_error($"{_GMFUNCTION_} :: _title expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_title));
    buffer_write(__args_buffer, buffer_string, _title);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    // param: _icon, type: String
    if (!is_string(_icon)) show_error($"{_GMFUNCTION_} :: _icon expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_icon));
    buffer_write(__args_buffer, buffer_string, _icon);

    // param: _priority, type: UInt32
    if (!is_numeric(_priority)) show_error($"{_GMFUNCTION_} :: _priority expected number", true);
    buffer_write(__args_buffer, buffer_u32, _priority);

    // param: _start_offset_seconds, type: Float32
    if (!is_numeric(_start_offset_seconds)) show_error($"{_GMFUNCTION_} :: _start_offset_seconds expected number", true);
    buffer_write(__args_buffer, buffer_f32, _start_offset_seconds);

    // param: _possible_clip, type: enum SteamTimelineEventClipPriority

    if (!is_numeric(_possible_clip)) show_error($"{_GMFUNCTION_} :: _possible_clip expected number", true);
    buffer_write(__args_buffer, buffer_u64, _possible_clip);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_timeline_start_range_timeline_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _event_handle
 * @param {String} _title
 * @param {String} _description
 * @param {String} _icon
 * @param {Real} _priority
 * @param {Enum.SteamTimelineEventClipPriority} _possible_clip
 */
function steam_timeline_update_range_timeline_event(_event_handle, _title, _description, _icon, _priority, _possible_clip)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _event_handle, type: UInt64
    if (!is_numeric(_event_handle)) show_error($"{_GMFUNCTION_} :: _event_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _event_handle);

    // param: _title, type: String
    if (!is_string(_title)) show_error($"{_GMFUNCTION_} :: _title expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_title));
    buffer_write(__args_buffer, buffer_string, _title);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    // param: _icon, type: String
    if (!is_string(_icon)) show_error($"{_GMFUNCTION_} :: _icon expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_icon));
    buffer_write(__args_buffer, buffer_string, _icon);

    // param: _priority, type: UInt32
    if (!is_numeric(_priority)) show_error($"{_GMFUNCTION_} :: _priority expected number", true);
    buffer_write(__args_buffer, buffer_u32, _priority);

    // param: _possible_clip, type: enum SteamTimelineEventClipPriority

    if (!is_numeric(_possible_clip)) show_error($"{_GMFUNCTION_} :: _possible_clip expected number", true);
    buffer_write(__args_buffer, buffer_u64, _possible_clip);

    var _return_value = __steam_timeline_update_range_timeline_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _event_handle
 * @param {Real} _end_offset_seconds
 */
function steam_timeline_end_range_timeline_event(_event_handle, _end_offset_seconds)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _event_handle, type: UInt64
    if (!is_numeric(_event_handle)) show_error($"{_GMFUNCTION_} :: _event_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _event_handle);

    // param: _end_offset_seconds, type: Float32
    if (!is_numeric(_end_offset_seconds)) show_error($"{_GMFUNCTION_} :: _end_offset_seconds expected number", true);
    buffer_write(__args_buffer, buffer_f32, _end_offset_seconds);

    var _return_value = __steam_timeline_end_range_timeline_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _event_handle
 */
function steam_timeline_remove_timeline_event(_event_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _event_handle, type: UInt64
    if (!is_numeric(_event_handle)) show_error($"{_GMFUNCTION_} :: _event_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _event_handle);

    var _return_value = __steam_timeline_remove_timeline_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _event_handle
 * @returns {Real} 
 */
function steam_timeline_does_event_recording_exist(_event_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _event_handle, type: UInt64
    if (!is_numeric(_event_handle)) show_error($"{_GMFUNCTION_} :: _event_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _event_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_timeline_does_event_recording_exist(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_timeline_start_game_phase (no wrapper is required)


// Skipping function steam_timeline_end_game_phase (no wrapper is required)


// Skipping function steam_timeline_set_game_phase_id (no wrapper is required)


/**
 * @param {String} _phase_id
 * @returns {Real} 
 */
function steam_timeline_does_game_phase_recording_exist(_phase_id)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_timeline_does_game_phase_recording_exist(_phase_id, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_timeline_add_game_phase_tag (no wrapper is required)


// Skipping function steam_timeline_set_game_phase_attribute (no wrapper is required)


/**
 * @param {Enum.SteamTimelineGameMode} _mode
 */
function steam_timeline_set_timeline_game_mode(_mode)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _mode, type: enum SteamTimelineGameMode

    if (!is_numeric(_mode)) show_error($"{_GMFUNCTION_} :: _mode expected number", true);
    buffer_write(__args_buffer, buffer_u64, _mode);

    var _return_value = __steam_timeline_set_timeline_game_mode(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_timeline_open_overlay_to_game_phase (no wrapper is required)


/**
 * @param {Real} _event_handle
 */
function steam_timeline_open_overlay_to_timeline_event(_event_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _event_handle, type: UInt64
    if (!is_numeric(_event_handle)) show_error($"{_GMFUNCTION_} :: _event_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _event_handle);

    var _return_value = __steam_timeline_open_overlay_to_timeline_event(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_timeline_set_callback_game_phase_recording_exists(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_timeline_set_callback_game_phase_recording_exists(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_timeline_clear_callback_game_phase_recording_exists (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_timeline_set_callback_event_recording_exists(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_timeline_set_callback_event_recording_exists(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_timeline_clear_callback_event_recording_exists (no wrapper is required)


/**
 * @param {Real} _item_def_id
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_add_promo_item(_item_def_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_def_id, type: UInt32
    if (!is_numeric(_item_def_id)) show_error($"{_GMFUNCTION_} :: _item_def_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _item_def_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_add_promo_item(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Array[Real]} _item_def_ids
 * @param {Real} _num_item_defs
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_add_promo_items(_item_def_ids, _num_item_defs, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_def_ids, type: UInt32[]
    if (!is_array(_item_def_ids)) show_error($"{_GMFUNCTION_} :: _item_def_ids expected array", true);
    var _length = array_length(_item_def_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_item_def_ids[_i])) show_error($"{_GMFUNCTION_} :: _item_def_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _item_def_ids[_i]);
    }

    // param: _num_item_defs, type: UInt32
    if (!is_numeric(_num_item_defs)) show_error($"{_GMFUNCTION_} :: _num_item_defs expected number", true);
    buffer_write(__args_buffer, buffer_u32, _num_item_defs);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_add_promo_items(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _result_handle
 * @param {Real} _steam_id_expected
 * @returns {Bool} 
 */
function steam_inventory_check_result_steam_id(_result_handle, _steam_id_expected)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _steam_id_expected, type: UInt64
    if (!is_numeric(_steam_id_expected)) show_error($"{_GMFUNCTION_} :: _steam_id_expected expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_expected);

    var _return_value = __steam_inventory_check_result_steam_id(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _item_instance_id
 * @param {Real} _quantity
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_consume_item(_item_instance_id, _quantity, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_instance_id, type: UInt64
    if (!is_numeric(_item_instance_id)) show_error($"{_GMFUNCTION_} :: _item_instance_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id);

    // param: _quantity, type: UInt32
    if (!is_numeric(_quantity)) show_error($"{_GMFUNCTION_} :: _quantity expected number", true);
    buffer_write(__args_buffer, buffer_u32, _quantity);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_consume_item(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Id.Buffer} _data
 * @param {Real} _data_size
 * @returns {Struct.SteamInventoryDeserializeResult} 
 */
function steam_inventory_deserialize_result(_data, _data_size)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _data, type: Buffer
    if (!buffer_exists(_data)) show_error($"{_GMFUNCTION_} :: _data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_data), buffer_get_size(_data));

    // param: _data_size, type: UInt32
    if (!is_numeric(_data_size)) show_error($"{_GMFUNCTION_} :: _data_size expected number", true);
    buffer_write(__args_buffer, buffer_u32, _data_size);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_deserialize_result(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInventoryDeserializeResult_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_inventory_destroy_result (no wrapper is required)


/**
 * @param {Array[Real]} _generate_item_defs
 * @param {Array[Real]} _generate_qty
 * @param {Real} _generate_len
 * @param {Array[Real]} _destroy_instance_ids
 * @param {Array[Real]} _destroy_qty
 * @param {Real} _destroy_len
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_exchange_items(_generate_item_defs, _generate_qty, _generate_len, _destroy_instance_ids, _destroy_qty, _destroy_len, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _generate_item_defs, type: UInt32[]
    if (!is_array(_generate_item_defs)) show_error($"{_GMFUNCTION_} :: _generate_item_defs expected array", true);
    var _length = array_length(_generate_item_defs);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_generate_item_defs[_i])) show_error($"{_GMFUNCTION_} :: _generate_item_defs[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _generate_item_defs[_i]);
    }

    // param: _generate_qty, type: UInt32[]
    if (!is_array(_generate_qty)) show_error($"{_GMFUNCTION_} :: _generate_qty expected array", true);
    var _length = array_length(_generate_qty);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_generate_qty[_i])) show_error($"{_GMFUNCTION_} :: _generate_qty[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _generate_qty[_i]);
    }

    // param: _generate_len, type: UInt32
    if (!is_numeric(_generate_len)) show_error($"{_GMFUNCTION_} :: _generate_len expected number", true);
    buffer_write(__args_buffer, buffer_u32, _generate_len);

    // param: _destroy_instance_ids, type: UInt64[]
    if (!is_array(_destroy_instance_ids)) show_error($"{_GMFUNCTION_} :: _destroy_instance_ids expected array", true);
    var _length = array_length(_destroy_instance_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_destroy_instance_ids[_i])) show_error($"{_GMFUNCTION_} :: _destroy_instance_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _destroy_instance_ids[_i]);
    }

    // param: _destroy_qty, type: UInt32[]
    if (!is_array(_destroy_qty)) show_error($"{_GMFUNCTION_} :: _destroy_qty expected array", true);
    var _length = array_length(_destroy_qty);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_destroy_qty[_i])) show_error($"{_GMFUNCTION_} :: _destroy_qty[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _destroy_qty[_i]);
    }

    // param: _destroy_len, type: UInt32
    if (!is_numeric(_destroy_len)) show_error($"{_GMFUNCTION_} :: _destroy_len expected number", true);
    buffer_write(__args_buffer, buffer_u32, _destroy_len);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_exchange_items(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Array[Real]} _item_defs
 * @param {Array[Real]} _quantities
 * @param {Real} _count
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_generate_items(_item_defs, _quantities, _count, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_defs, type: UInt32[]
    if (!is_array(_item_defs)) show_error($"{_GMFUNCTION_} :: _item_defs expected array", true);
    var _length = array_length(_item_defs);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_item_defs[_i])) show_error($"{_GMFUNCTION_} :: _item_defs[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _item_defs[_i]);
    }

    // param: _quantities, type: UInt32[]
    if (!is_array(_quantities)) show_error($"{_GMFUNCTION_} :: _quantities expected array", true);
    var _length = array_length(_quantities);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_quantities[_i])) show_error($"{_GMFUNCTION_} :: _quantities[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _quantities[_i]);
    }

    // param: _count, type: UInt32
    if (!is_numeric(_count)) show_error($"{_GMFUNCTION_} :: _count expected number", true);
    buffer_write(__args_buffer, buffer_u32, _count);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_generate_items(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_inventory_get_all_items (no wrapper is required)


/**
 * @param {Real} _result_handle
 * @returns {Struct.SteamInventoryResultItems} 
 */
function steam_inventory_get_result_items(_result_handle)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_result_items(_result_handle, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInventoryResultItems_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _result_handle
 * @returns {Enum.SteamApiResult} 
 */
function steam_inventory_get_result_status(_result_handle)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_result_status(_result_handle, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_inventory_get_result_timestamp (no wrapper is required)


/**
 * @param {Real} _c_max_item_defs
 * @returns {Array[Real]} 
 */
function steam_inventory_get_eligible_promo_item_definition_ids(_c_max_item_defs)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_eligible_promo_item_definition_ids(_c_max_item_defs, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u32);
    }
    return _result;
}

// Skipping function steam_inventory_load_item_definitions (no wrapper is required)


/**
 * @param {Real} _c_max_item_defs
 * @returns {Array[Real]} 
 */
function steam_inventory_get_item_definition_ids(_c_max_item_defs)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_item_definition_ids(_c_max_item_defs, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u32);
    }
    return _result;
}

/**
 * @param {Array[Real]} _item_instance_ids
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_get_items_by_id(_item_instance_ids, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_instance_ids, type: UInt64[]
    if (!is_array(_item_instance_ids)) show_error($"{_GMFUNCTION_} :: _item_instance_ids expected array", true);
    var _length = array_length(_item_instance_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_item_instance_ids[_i])) show_error($"{_GMFUNCTION_} :: _item_instance_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u64, _item_instance_ids[_i]);
    }

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_get_items_by_id(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _result_handle
 * @param {Id.Buffer} _out_data
 * @param {Real} _out_capacity
 * @returns {Struct.SteamInventorySerializeResult} 
 */
function steam_inventory_serialize_result(_result_handle, _out_data, _out_capacity)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _out_data, type: Buffer
    if (!buffer_exists(_out_data)) show_error($"{_GMFUNCTION_} :: _out_data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_data), buffer_get_size(_out_data));

    // param: _out_capacity, type: UInt32
    if (!is_numeric(_out_capacity)) show_error($"{_GMFUNCTION_} :: _out_capacity expected number", true);
    buffer_write(__args_buffer, buffer_u32, _out_capacity);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_serialize_result(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInventorySerializeResult_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _result_handle
 * @param {Real} _item_index
 * @returns {Array[String]} 
 */
function steam_inventory_get_result_item_property_keys_array(_result_handle, _item_index)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_result_item_property_keys_array(_result_handle, _item_index, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        buffer_read(__ret_buffer, buffer_u32);
        _result[_i] = buffer_read(__ret_buffer, buffer_string);
    }
    return _result;
}

/**
 * @param {Real} _result_handle
 * @param {Real} _item_index
 * @param {String} _property_name
 * @returns {Struct.SteamInventoryItemProperty} 
 */
function steam_inventory_get_result_item_property(_result_handle, _item_index, _property_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _item_index, type: UInt32
    if (!is_numeric(_item_index)) show_error($"{_GMFUNCTION_} :: _item_index expected number", true);
    buffer_write(__args_buffer, buffer_u32, _item_index);

    // param: _property_name, type: String
    if (!is_string(_property_name)) show_error($"{_GMFUNCTION_} :: _property_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_property_name));
    buffer_write(__args_buffer, buffer_string, _property_name);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_result_item_property(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInventoryItemProperty_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Array[Real]} _item_def_ids
 * @param {Array[Real]} _quantities
 * @param {Real} _count
 * @param {Function} _callback
 */
function steam_inventory_start_purchase(_item_def_ids, _quantities, _count, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_def_ids, type: UInt32[]
    if (!is_array(_item_def_ids)) show_error($"{_GMFUNCTION_} :: _item_def_ids expected array", true);
    var _length = array_length(_item_def_ids);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_item_def_ids[_i])) show_error($"{_GMFUNCTION_} :: _item_def_ids[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _item_def_ids[_i]);
    }

    // param: _quantities, type: UInt32[]
    if (!is_array(_quantities)) show_error($"{_GMFUNCTION_} :: _quantities expected array", true);
    var _length = array_length(_quantities);
    buffer_write(__args_buffer, buffer_u32, _length);
    for (var _i = 0; _i < _length; ++_i)
    {
        if (!is_numeric(_quantities[_i])) show_error($"{_GMFUNCTION_} :: _quantities[_i] expected number", true);
        buffer_write(__args_buffer, buffer_u32, _quantities[_i]);
    }

    // param: _count, type: UInt32
    if (!is_numeric(_count)) show_error($"{_GMFUNCTION_} :: _count expected number", true);
    buffer_write(__args_buffer, buffer_u32, _count);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_start_purchase(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_inventory_request_prices(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_request_prices(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_inventory_get_num_items_with_prices (no wrapper is required)


/**
 * @param {Real} _max
 * @returns {Struct.SteamInventoryItemsWithPrices} 
 */
function steam_inventory_get_items_with_prices(_max)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_items_with_prices(_max, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInventoryItemsWithPrices_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_inventory_start_update_properties (no wrapper is required)


/**
 * @param {Real} _result_handle
 * @param {Real} _item_instance_id
 * @param {String} _property_name
 * @returns {Bool} 
 */
function steam_inventory_remove_property(_result_handle, _item_instance_id, _property_name)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _item_instance_id, type: UInt64
    if (!is_numeric(_item_instance_id)) show_error($"{_GMFUNCTION_} :: _item_instance_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id);

    // param: _property_name, type: String
    if (!is_string(_property_name)) show_error($"{_GMFUNCTION_} :: _property_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_property_name));
    buffer_write(__args_buffer, buffer_string, _property_name);

    var _return_value = __steam_inventory_remove_property(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _result_handle
 * @param {Real} _item_instance_id
 * @param {String} _property_name
 * @param {String} _value
 * @returns {Bool} 
 */
function steam_inventory_set_property_string(_result_handle, _item_instance_id, _property_name, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _item_instance_id, type: UInt64
    if (!is_numeric(_item_instance_id)) show_error($"{_GMFUNCTION_} :: _item_instance_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id);

    // param: _property_name, type: String
    if (!is_string(_property_name)) show_error($"{_GMFUNCTION_} :: _property_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_property_name));
    buffer_write(__args_buffer, buffer_string, _property_name);

    // param: _value, type: String
    if (!is_string(_value)) show_error($"{_GMFUNCTION_} :: _value expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_value));
    buffer_write(__args_buffer, buffer_string, _value);

    var _return_value = __steam_inventory_set_property_string(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _result_handle
 * @param {Real} _item_instance_id
 * @param {String} _property_name
 * @param {Bool} _value
 * @returns {Bool} 
 */
function steam_inventory_set_property_bool(_result_handle, _item_instance_id, _property_name, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _item_instance_id, type: UInt64
    if (!is_numeric(_item_instance_id)) show_error($"{_GMFUNCTION_} :: _item_instance_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id);

    // param: _property_name, type: String
    if (!is_string(_property_name)) show_error($"{_GMFUNCTION_} :: _property_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_property_name));
    buffer_write(__args_buffer, buffer_string, _property_name);

    // param: _value, type: Bool
    if (!is_bool(_value)) show_error($"{_GMFUNCTION_} :: _value expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _value);

    var _return_value = __steam_inventory_set_property_bool(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _result_handle
 * @param {Real} _item_instance_id
 * @param {String} _property_name
 * @param {Real} _value
 * @returns {Bool} 
 */
function steam_inventory_set_property_int64(_result_handle, _item_instance_id, _property_name, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _item_instance_id, type: UInt64
    if (!is_numeric(_item_instance_id)) show_error($"{_GMFUNCTION_} :: _item_instance_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id);

    // param: _property_name, type: String
    if (!is_string(_property_name)) show_error($"{_GMFUNCTION_} :: _property_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_property_name));
    buffer_write(__args_buffer, buffer_string, _property_name);

    // param: _value, type: Int64
    if (!is_numeric(_value)) show_error($"{_GMFUNCTION_} :: _value expected number", true);
    buffer_write(__args_buffer, buffer_u64, _value);

    var _return_value = __steam_inventory_set_property_int64(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _result_handle
 * @param {Real} _item_instance_id
 * @param {String} _property_name
 * @param {Real} _value
 * @returns {Bool} 
 */
function steam_inventory_set_property_float(_result_handle, _item_instance_id, _property_name, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _item_instance_id, type: UInt64
    if (!is_numeric(_item_instance_id)) show_error($"{_GMFUNCTION_} :: _item_instance_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id);

    // param: _property_name, type: String
    if (!is_string(_property_name)) show_error($"{_GMFUNCTION_} :: _property_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_property_name));
    buffer_write(__args_buffer, buffer_string, _property_name);

    // param: _value, type: Float32
    if (!is_numeric(_value)) show_error($"{_GMFUNCTION_} :: _value expected number", true);
    buffer_write(__args_buffer, buffer_f32, _value);

    var _return_value = __steam_inventory_set_property_float(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _result_handle
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_submit_update_properties(_result_handle, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _result_handle, type: Int32
    if (!is_numeric(_result_handle)) show_error($"{_GMFUNCTION_} :: _result_handle expected number", true);
    buffer_write(__args_buffer, buffer_s32, _result_handle);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_submit_update_properties(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _item_instance_id_source
 * @param {Real} _quantity
 * @param {Real} _item_instance_id_dest
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_transfer_item_quantity(_item_instance_id_source, _quantity, _item_instance_id_dest, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_instance_id_source, type: UInt64
    if (!is_numeric(_item_instance_id_source)) show_error($"{_GMFUNCTION_} :: _item_instance_id_source expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id_source);

    // param: _quantity, type: UInt32
    if (!is_numeric(_quantity)) show_error($"{_GMFUNCTION_} :: _quantity expected number", true);
    buffer_write(__args_buffer, buffer_u32, _quantity);

    // param: _item_instance_id_dest, type: UInt64
    if (!is_numeric(_item_instance_id_dest)) show_error($"{_GMFUNCTION_} :: _item_instance_id_dest expected number", true);
    buffer_write(__args_buffer, buffer_u64, _item_instance_id_dest);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_transfer_item_quantity(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _item_def_id
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_trigger_item_drop(_item_def_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _item_def_id, type: UInt32
    if (!is_numeric(_item_def_id)) show_error($"{_GMFUNCTION_} :: _item_def_id expected number", true);
    buffer_write(__args_buffer, buffer_u32, _item_def_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_trigger_item_drop(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 * @returns {Real} 
 */
function steam_inventory_grant_promo_items(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_inventory_grant_promo_items(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _item_def_id
 * @param {String} _property_name
 * @returns {Struct.SteamInventoryDefProperty} 
 */
function steam_inventory_get_item_definition_property(_item_def_id, _property_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_item_definition_property(_item_def_id, _property_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInventoryDefProperty_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _item_def_id
 * @returns {Array[String]} 
 */
function steam_inventory_get_item_definition_property_keys(_item_def_id)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_item_definition_property_keys(_item_def_id, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        buffer_read(__ret_buffer, buffer_u32);
        _result[_i] = buffer_read(__ret_buffer, buffer_string);
    }
    return _result;
}

/**
 * @param {Real} _item_def_id
 * @returns {Struct.SteamInventoryItemPrice} 
 */
function steam_inventory_get_item_price(_item_def_id)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_inventory_get_item_price(_item_def_id, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamInventoryItemPrice_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Function} _callback
 */
function steam_inventory_set_callback_result_ready(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_inventory_set_callback_result_ready(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_inventory_clear_callback_result_ready (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_inventory_set_callback_full_update(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_inventory_set_callback_full_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_inventory_clear_callback_full_update (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_inventory_set_callback_definition_update(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_inventory_set_callback_definition_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_inventory_clear_callback_definition_update (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_remote_storage_set_callback_published_file_subscribed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_remote_storage_set_callback_published_file_subscribed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_remote_storage_clear_callback_published_file_subscribed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_remote_storage_set_callback_published_file_unsubscribed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_remote_storage_set_callback_published_file_unsubscribed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_remote_storage_clear_callback_published_file_unsubscribed (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_remote_storage_set_callback_local_file_change(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_remote_storage_set_callback_local_file_change(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_remote_storage_clear_callback_local_file_change (no wrapper is required)


// Skipping function steam_remote_storage_is_cloud_enabled_for_account (no wrapper is required)


// Skipping function steam_remote_storage_is_cloud_enabled_for_app (no wrapper is required)


// Skipping function steam_remote_storage_set_cloud_enabled_for_app (no wrapper is required)


/**
 * @param {String} _file_name
 * @param {Id.Buffer} _data
 * @param {Real} _bytes
 * @returns {Bool} 
 */
function steam_remote_storage_file_write(_file_name, _data, _bytes)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _file_name, type: String
    if (!is_string(_file_name)) show_error($"{_GMFUNCTION_} :: _file_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_file_name));
    buffer_write(__args_buffer, buffer_string, _file_name);

    // param: _data, type: Buffer
    if (!buffer_exists(_data)) show_error($"{_GMFUNCTION_} :: _data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_data), buffer_get_size(_data));

    // param: _bytes, type: UInt32
    if (!is_numeric(_bytes)) show_error($"{_GMFUNCTION_} :: _bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _bytes);

    var _return_value = __steam_remote_storage_file_write(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _file_name
 * @param {Id.Buffer} _out_data
 * @param {Real} _max_bytes
 * @returns {Real} 
 */
function steam_remote_storage_file_read(_file_name, _out_data, _max_bytes)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _file_name, type: String
    if (!is_string(_file_name)) show_error($"{_GMFUNCTION_} :: _file_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_file_name));
    buffer_write(__args_buffer, buffer_string, _file_name);

    // param: _out_data, type: Buffer
    if (!buffer_exists(_out_data)) show_error($"{_GMFUNCTION_} :: _out_data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_data), buffer_get_size(_out_data));

    // param: _max_bytes, type: UInt32
    if (!is_numeric(_max_bytes)) show_error($"{_GMFUNCTION_} :: _max_bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_bytes);

    var _return_value = __steam_remote_storage_file_read(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_remote_storage_file_delete (no wrapper is required)


// Skipping function steam_remote_storage_file_exists (no wrapper is required)


// Skipping function steam_remote_storage_file_persisted (no wrapper is required)


// Skipping function steam_remote_storage_get_file_size (no wrapper is required)


// Skipping function steam_remote_storage_get_file_timestamp (no wrapper is required)


// Skipping function steam_remote_storage_get_file_count (no wrapper is required)


/**
 * @param {Real} _index
 * @returns {Struct.SteamRemoteStorageFileNameAndSize} 
 */
function steam_remote_storage_get_file_name_and_size(_index)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_remote_storage_get_file_name_and_size(_index, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamRemoteStorageFileNameAndSize_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @returns {Struct.SteamRemoteStorageQuota} 
 */
function steam_remote_storage_get_quota()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_remote_storage_get_quota(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamRemoteStorageQuota_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {String} _file_name
 * @param {Enum.SteamRemoteStoragePlatform} _platforms
 * @returns {Bool} 
 */
function steam_remote_storage_set_sync_platforms(_file_name, _platforms)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _file_name, type: String
    if (!is_string(_file_name)) show_error($"{_GMFUNCTION_} :: _file_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_file_name));
    buffer_write(__args_buffer, buffer_string, _file_name);

    // param: _platforms, type: enum SteamRemoteStoragePlatform

    if (!is_numeric(_platforms)) show_error($"{_GMFUNCTION_} :: _platforms expected number", true);
    buffer_write(__args_buffer, buffer_u64, _platforms);

    var _return_value = __steam_remote_storage_set_sync_platforms(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _file_name
 * @returns {Enum.SteamRemoteStoragePlatform} 
 */
function steam_remote_storage_get_sync_platforms(_file_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_remote_storage_get_sync_platforms(_file_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_remote_storage_file_forget (no wrapper is required)


/**
 * @param {String} _file_name
 * @returns {Real} 
 */
function steam_remote_storage_file_write_stream_open(_file_name)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_remote_storage_file_write_stream_open(_file_name, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _stream
 * @param {Id.Buffer} _data
 * @param {Real} _bytes
 * @returns {Bool} 
 */
function steam_remote_storage_file_write_stream_write_chunk(_stream, _data, _bytes)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _stream, type: UInt64
    if (!is_numeric(_stream)) show_error($"{_GMFUNCTION_} :: _stream expected number", true);
    buffer_write(__args_buffer, buffer_u64, _stream);

    // param: _data, type: Buffer
    if (!buffer_exists(_data)) show_error($"{_GMFUNCTION_} :: _data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_data), buffer_get_size(_data));

    // param: _bytes, type: UInt32
    if (!is_numeric(_bytes)) show_error($"{_GMFUNCTION_} :: _bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _bytes);

    var _return_value = __steam_remote_storage_file_write_stream_write_chunk(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _stream
 * @returns {Bool} 
 */
function steam_remote_storage_file_write_stream_close(_stream)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _stream, type: UInt64
    if (!is_numeric(_stream)) show_error($"{_GMFUNCTION_} :: _stream expected number", true);
    buffer_write(__args_buffer, buffer_u64, _stream);

    var _return_value = __steam_remote_storage_file_write_stream_close(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _stream
 * @returns {Bool} 
 */
function steam_remote_storage_file_write_stream_cancel(_stream)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _stream, type: UInt64
    if (!is_numeric(_stream)) show_error($"{_GMFUNCTION_} :: _stream expected number", true);
    buffer_write(__args_buffer, buffer_u64, _stream);

    var _return_value = __steam_remote_storage_file_write_stream_cancel(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_remote_storage_get_cached_ugc_count (no wrapper is required)


/**
 * @param {Real} _index
 * @returns {Real} 
 */
function steam_remote_storage_get_cached_ugc_handle(_index)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_remote_storage_get_cached_ugc_handle(_index, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _ugc_handle
 * @returns {Struct.SteamRemoteStorageUgcDetails} 
 */
function steam_remote_storage_get_ugc_details(_ugc_handle)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _ugc_handle, type: UInt64
    if (!is_numeric(_ugc_handle)) show_error($"{_GMFUNCTION_} :: _ugc_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _ugc_handle);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_remote_storage_get_ugc_details(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamRemoteStorageUgcDetails_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _ugc_handle
 * @param {Id.Buffer} _out_data
 * @param {Real} _bytes_to_read
 * @param {Real} _offset
 * @param {Enum.SteamRemoteStorageUgcReadAction} _action
 * @returns {Real} 
 */
function steam_remote_storage_ugc_read(_ugc_handle, _out_data, _bytes_to_read, _offset, _action)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _ugc_handle, type: UInt64
    if (!is_numeric(_ugc_handle)) show_error($"{_GMFUNCTION_} :: _ugc_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _ugc_handle);

    // param: _out_data, type: Buffer
    if (!buffer_exists(_out_data)) show_error($"{_GMFUNCTION_} :: _out_data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_data), buffer_get_size(_out_data));

    // param: _bytes_to_read, type: Int32
    if (!is_numeric(_bytes_to_read)) show_error($"{_GMFUNCTION_} :: _bytes_to_read expected number", true);
    buffer_write(__args_buffer, buffer_s32, _bytes_to_read);

    // param: _offset, type: UInt32
    if (!is_numeric(_offset)) show_error($"{_GMFUNCTION_} :: _offset expected number", true);
    buffer_write(__args_buffer, buffer_u32, _offset);

    // param: _action, type: enum SteamRemoteStorageUgcReadAction

    if (!is_numeric(_action)) show_error($"{_GMFUNCTION_} :: _action expected number", true);
    buffer_write(__args_buffer, buffer_u64, _action);

    var _return_value = __steam_remote_storage_ugc_read(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _file_name
 * @param {Function} _callback
 */
function steam_remote_storage_file_share(_file_name, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _file_name, type: String
    if (!is_string(_file_name)) show_error($"{_GMFUNCTION_} :: _file_name expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_file_name));
    buffer_write(__args_buffer, buffer_string, _file_name);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_remote_storage_file_share(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _ugc_handle
 * @param {Real} _priority
 * @param {Function} _callback
 */
function steam_remote_storage_ugc_download(_ugc_handle, _priority, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _ugc_handle, type: UInt64
    if (!is_numeric(_ugc_handle)) show_error($"{_GMFUNCTION_} :: _ugc_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _ugc_handle);

    // param: _priority, type: UInt32
    if (!is_numeric(_priority)) show_error($"{_GMFUNCTION_} :: _priority expected number", true);
    buffer_write(__args_buffer, buffer_u32, _priority);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_remote_storage_ugc_download(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _ugc_handle
 * @param {String} _location
 * @param {Real} _priority
 * @param {Function} _callback
 */
function steam_remote_storage_ugc_download_to_location(_ugc_handle, _location, _priority, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _ugc_handle, type: UInt64
    if (!is_numeric(_ugc_handle)) show_error($"{_GMFUNCTION_} :: _ugc_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _ugc_handle);

    // param: _location, type: String
    if (!is_string(_location)) show_error($"{_GMFUNCTION_} :: _location expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_location));
    buffer_write(__args_buffer, buffer_string, _location);

    // param: _priority, type: UInt32
    if (!is_numeric(_priority)) show_error($"{_GMFUNCTION_} :: _priority expected number", true);
    buffer_write(__args_buffer, buffer_u32, _priority);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_remote_storage_ugc_download_to_location(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _file
 * @param {String} _preview_file
 * @param {Real} _app_id_consumer
 * @param {String} _title
 * @param {String} _description
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} _visibility
 * @param {String} _tags_csv
 * @param {Enum.SteamRemoteStorageWorkshopFileType} _file_type
 * @param {Function} _callback
 */
function steam_remote_storage_publish_workshop_file(_file, _preview_file, _app_id_consumer, _title, _description, _visibility, _tags_csv, _file_type, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _file, type: String
    if (!is_string(_file)) show_error($"{_GMFUNCTION_} :: _file expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_file));
    buffer_write(__args_buffer, buffer_string, _file);

    // param: _preview_file, type: String
    if (!is_string(_preview_file)) show_error($"{_GMFUNCTION_} :: _preview_file expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_preview_file));
    buffer_write(__args_buffer, buffer_string, _preview_file);

    // param: _app_id_consumer, type: UInt32
    if (!is_numeric(_app_id_consumer)) show_error($"{_GMFUNCTION_} :: _app_id_consumer expected number", true);
    buffer_write(__args_buffer, buffer_u32, _app_id_consumer);

    // param: _title, type: String
    if (!is_string(_title)) show_error($"{_GMFUNCTION_} :: _title expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_title));
    buffer_write(__args_buffer, buffer_string, _title);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    // param: _visibility, type: enum SteamRemoteStoragePublishedFileVisibility

    if (!is_numeric(_visibility)) show_error($"{_GMFUNCTION_} :: _visibility expected number", true);
    buffer_write(__args_buffer, buffer_u64, _visibility);

    // param: _tags_csv, type: String
    if (!is_string(_tags_csv)) show_error($"{_GMFUNCTION_} :: _tags_csv expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_tags_csv));
    buffer_write(__args_buffer, buffer_string, _tags_csv);

    // param: _file_type, type: enum SteamRemoteStorageWorkshopFileType

    if (!is_numeric(_file_type)) show_error($"{_GMFUNCTION_} :: _file_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _file_type);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_remote_storage_publish_workshop_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @returns {Real} 
 */
function steam_remote_storage_create_published_file_update_request(_published_file_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_remote_storage_create_published_file_update_request(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _update_handle
 * @param {String} _file
 * @returns {Bool} 
 */
function steam_remote_storage_update_published_file_file(_update_handle, _file)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _file, type: String
    if (!is_string(_file)) show_error($"{_GMFUNCTION_} :: _file expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_file));
    buffer_write(__args_buffer, buffer_string, _file);

    var _return_value = __steam_remote_storage_update_published_file_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _preview_file
 * @returns {Bool} 
 */
function steam_remote_storage_update_published_file_preview_file(_update_handle, _preview_file)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _preview_file, type: String
    if (!is_string(_preview_file)) show_error($"{_GMFUNCTION_} :: _preview_file expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_preview_file));
    buffer_write(__args_buffer, buffer_string, _preview_file);

    var _return_value = __steam_remote_storage_update_published_file_preview_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _title
 * @returns {Bool} 
 */
function steam_remote_storage_update_published_file_title(_update_handle, _title)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _title, type: String
    if (!is_string(_title)) show_error($"{_GMFUNCTION_} :: _title expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_title));
    buffer_write(__args_buffer, buffer_string, _title);

    var _return_value = __steam_remote_storage_update_published_file_title(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _description
 * @returns {Bool} 
 */
function steam_remote_storage_update_published_file_description(_update_handle, _description)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _description, type: String
    if (!is_string(_description)) show_error($"{_GMFUNCTION_} :: _description expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_description));
    buffer_write(__args_buffer, buffer_string, _description);

    var _return_value = __steam_remote_storage_update_published_file_description(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Enum.SteamRemoteStoragePublishedFileVisibility} _visibility
 * @returns {Bool} 
 */
function steam_remote_storage_update_published_file_visibility(_update_handle, _visibility)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _visibility, type: enum SteamRemoteStoragePublishedFileVisibility

    if (!is_numeric(_visibility)) show_error($"{_GMFUNCTION_} :: _visibility expected number", true);
    buffer_write(__args_buffer, buffer_u64, _visibility);

    var _return_value = __steam_remote_storage_update_published_file_visibility(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {String} _tags_csv
 * @returns {Bool} 
 */
function steam_remote_storage_update_published_file_tags(_update_handle, _tags_csv)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _tags_csv, type: String
    if (!is_string(_tags_csv)) show_error($"{_GMFUNCTION_} :: _tags_csv expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_tags_csv));
    buffer_write(__args_buffer, buffer_string, _tags_csv);

    var _return_value = __steam_remote_storage_update_published_file_tags(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _update_handle
 * @param {Function} _callback
 */
function steam_remote_storage_commit_published_file_update(_update_handle, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _update_handle, type: UInt64
    if (!is_numeric(_update_handle)) show_error($"{_GMFUNCTION_} :: _update_handle expected number", true);
    buffer_write(__args_buffer, buffer_u64, _update_handle);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_remote_storage_commit_published_file_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_remote_storage_subscribe_published_file(_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_remote_storage_subscribe_published_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _published_file_id
 * @param {Function} _callback
 */
function steam_remote_storage_unsubscribe_published_file(_published_file_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _published_file_id, type: UInt64
    if (!is_numeric(_published_file_id)) show_error($"{_GMFUNCTION_} :: _published_file_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _published_file_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_remote_storage_unsubscribe_published_file(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_matchmaking_set_callback_lobby_data_update(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_matchmaking_set_callback_lobby_data_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_matchmaking_clear_callback_lobby_data_update (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_matchmaking_set_callback_lobby_chat_update(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_matchmaking_set_callback_lobby_chat_update(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_matchmaking_clear_callback_lobby_chat_update (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_matchmaking_set_callback_lobby_chat_msg(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_matchmaking_set_callback_lobby_chat_msg(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_matchmaking_clear_callback_lobby_chat_msg (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_matchmaking_set_callback_lobby_game_created(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_matchmaking_set_callback_lobby_game_created(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_matchmaking_clear_callback_lobby_game_created (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_matchmaking_set_callback_lobby_invite(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_matchmaking_set_callback_lobby_invite(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_matchmaking_clear_callback_lobby_invite (no wrapper is required)


/**
 * @param {Enum.SteamMatchmakingLobbyType} _lobby_type
 * @param {Real} _max_members
 * @param {Function} _callback
 */
function steam_matchmaking_create_lobby(_lobby_type, _max_members, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_type, type: enum SteamMatchmakingLobbyType

    if (!is_numeric(_lobby_type)) show_error($"{_GMFUNCTION_} :: _lobby_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_type);

    // param: _max_members, type: Int32
    if (!is_numeric(_max_members)) show_error($"{_GMFUNCTION_} :: _max_members expected number", true);
    buffer_write(__args_buffer, buffer_s32, _max_members);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_matchmaking_create_lobby(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {Function} _callback
 */
function steam_matchmaking_join_lobby(_lobby_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_matchmaking_join_lobby(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_matchmaking_request_lobby_list(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_matchmaking_request_lobby_list(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _key
 * @param {String} _value
 * @param {Enum.SteamMatchmakingLobbyComparison} _comparison
 */
function steam_matchmaking_add_request_lobby_list_string_filter(_key, _value, _comparison)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    // param: _value, type: String
    if (!is_string(_value)) show_error($"{_GMFUNCTION_} :: _value expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_value));
    buffer_write(__args_buffer, buffer_string, _value);

    // param: _comparison, type: enum SteamMatchmakingLobbyComparison

    if (!is_numeric(_comparison)) show_error($"{_GMFUNCTION_} :: _comparison expected number", true);
    buffer_write(__args_buffer, buffer_u64, _comparison);

    var _return_value = __steam_matchmaking_add_request_lobby_list_string_filter(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {String} _key
 * @param {Real} _value
 * @param {Enum.SteamMatchmakingLobbyComparison} _comparison
 */
function steam_matchmaking_add_request_lobby_list_numerical_filter(_key, _value, _comparison)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    // param: _value, type: Int32
    if (!is_numeric(_value)) show_error($"{_GMFUNCTION_} :: _value expected number", true);
    buffer_write(__args_buffer, buffer_s32, _value);

    // param: _comparison, type: enum SteamMatchmakingLobbyComparison

    if (!is_numeric(_comparison)) show_error($"{_GMFUNCTION_} :: _comparison expected number", true);
    buffer_write(__args_buffer, buffer_u64, _comparison);

    var _return_value = __steam_matchmaking_add_request_lobby_list_numerical_filter(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_matchmaking_add_request_lobby_list_near_value_filter (no wrapper is required)


/**
 * @param {Enum.SteamMatchmakingLobbyDistanceFilter} _distance
 */
function steam_matchmaking_add_request_lobby_list_distance_filter(_distance)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _distance, type: enum SteamMatchmakingLobbyDistanceFilter

    if (!is_numeric(_distance)) show_error($"{_GMFUNCTION_} :: _distance expected number", true);
    buffer_write(__args_buffer, buffer_u64, _distance);

    var _return_value = __steam_matchmaking_add_request_lobby_list_distance_filter(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_matchmaking_add_request_lobby_list_result_count_filter (no wrapper is required)


/**
 * @param {Real} _index
 * @returns {Real} 
 */
function steam_matchmaking_get_lobby_by_index(_index)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_matchmaking_get_lobby_by_index(_index, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _lobby_id
 */
function steam_matchmaking_leave_lobby(_lobby_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    var _return_value = __steam_matchmaking_leave_lobby(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {Real} _new_owner_id
 * @returns {Bool} 
 */
function steam_matchmaking_set_lobby_owner(_lobby_id, _new_owner_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _new_owner_id, type: UInt64
    if (!is_numeric(_new_owner_id)) show_error($"{_GMFUNCTION_} :: _new_owner_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _new_owner_id);

    var _return_value = __steam_matchmaking_set_lobby_owner(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @returns {Real} 
 */
function steam_matchmaking_get_lobby_owner(_lobby_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_matchmaking_get_lobby_owner(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _lobby_id
 * @returns {Real} 
 */
function steam_matchmaking_get_num_lobby_members(_lobby_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    var _return_value = __steam_matchmaking_get_num_lobby_members(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {Real} _member_index
 * @returns {Real} 
 */
function steam_matchmaking_get_lobby_member_by_index(_lobby_id, _member_index)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _member_index, type: Int32
    if (!is_numeric(_member_index)) show_error($"{_GMFUNCTION_} :: _member_index expected number", true);
    buffer_write(__args_buffer, buffer_s32, _member_index);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_matchmaking_get_lobby_member_by_index(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _lobby_id
 * @param {String} _key
 * @param {String} _value
 * @returns {Bool} 
 */
function steam_matchmaking_set_lobby_data(_lobby_id, _key, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    // param: _value, type: String
    if (!is_string(_value)) show_error($"{_GMFUNCTION_} :: _value expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_value));
    buffer_write(__args_buffer, buffer_string, _value);

    var _return_value = __steam_matchmaking_set_lobby_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {String} _key
 * @returns {String} 
 */
function steam_matchmaking_get_lobby_data(_lobby_id, _key)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    var _return_value = __steam_matchmaking_get_lobby_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {String} _key
 * @returns {Bool} 
 */
function steam_matchmaking_delete_lobby_data(_lobby_id, _key)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    var _return_value = __steam_matchmaking_delete_lobby_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @returns {Real} 
 */
function steam_matchmaking_get_lobby_data_count(_lobby_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    var _return_value = __steam_matchmaking_get_lobby_data_count(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {Real} _index
 * @param {Id.Buffer} _key_out
 * @param {Real} _key_max
 * @param {Id.Buffer} _val_out
 * @param {Real} _val_max
 * @returns {Bool} 
 */
function steam_matchmaking_get_lobby_data_by_index(_lobby_id, _index, _key_out, _key_max, _val_out, _val_max)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _index, type: Int32
    if (!is_numeric(_index)) show_error($"{_GMFUNCTION_} :: _index expected number", true);
    buffer_write(__args_buffer, buffer_s32, _index);

    // param: _key_out, type: Buffer
    if (!buffer_exists(_key_out)) show_error($"{_GMFUNCTION_} :: _key_out expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_key_out), buffer_get_size(_key_out));

    // param: _key_max, type: Int32
    if (!is_numeric(_key_max)) show_error($"{_GMFUNCTION_} :: _key_max expected number", true);
    buffer_write(__args_buffer, buffer_s32, _key_max);

    // param: _val_out, type: Buffer
    if (!buffer_exists(_val_out)) show_error($"{_GMFUNCTION_} :: _val_out expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_val_out), buffer_get_size(_val_out));

    // param: _val_max, type: Int32
    if (!is_numeric(_val_max)) show_error($"{_GMFUNCTION_} :: _val_max expected number", true);
    buffer_write(__args_buffer, buffer_s32, _val_max);

    var _return_value = __steam_matchmaking_get_lobby_data_by_index(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {String} _key
 * @param {String} _value
 */
function steam_matchmaking_set_lobby_member_data(_lobby_id, _key, _value)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    // param: _value, type: String
    if (!is_string(_value)) show_error($"{_GMFUNCTION_} :: _value expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_value));
    buffer_write(__args_buffer, buffer_string, _value);

    var _return_value = __steam_matchmaking_set_lobby_member_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {Real} _member_id
 * @param {String} _key
 * @returns {String} 
 */
function steam_matchmaking_get_lobby_member_data(_lobby_id, _member_id, _key)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _member_id, type: UInt64
    if (!is_numeric(_member_id)) show_error($"{_GMFUNCTION_} :: _member_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _member_id);

    // param: _key, type: String
    if (!is_string(_key)) show_error($"{_GMFUNCTION_} :: _key expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_key));
    buffer_write(__args_buffer, buffer_string, _key);

    var _return_value = __steam_matchmaking_get_lobby_member_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {Id.Buffer} _msg
 * @param {Real} _bytes
 * @returns {Bool} 
 */
function steam_matchmaking_send_lobby_chat_msg(_lobby_id, _msg, _bytes)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _msg, type: Buffer
    if (!buffer_exists(_msg)) show_error($"{_GMFUNCTION_} :: _msg expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_msg), buffer_get_size(_msg));

    // param: _bytes, type: Int32
    if (!is_numeric(_bytes)) show_error($"{_GMFUNCTION_} :: _bytes expected number", true);
    buffer_write(__args_buffer, buffer_s32, _bytes);

    var _return_value = __steam_matchmaking_send_lobby_chat_msg(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _lobby_id
 * @param {Real} _chat_id
 * @param {Id.Buffer} _out_buffer
 * @param {Real} _out_max_bytes
 * @returns {Struct.SteamMatchmakingLobbyChatEntry} 
 */
function steam_matchmaking_get_lobby_chat_entry(_lobby_id, _chat_id, _out_buffer, _out_max_bytes)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _lobby_id, type: UInt64
    if (!is_numeric(_lobby_id)) show_error($"{_GMFUNCTION_} :: _lobby_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _lobby_id);

    // param: _chat_id, type: Int32
    if (!is_numeric(_chat_id)) show_error($"{_GMFUNCTION_} :: _chat_id expected number", true);
    buffer_write(__args_buffer, buffer_s32, _chat_id);

    // param: _out_buffer, type: Buffer
    if (!buffer_exists(_out_buffer)) show_error($"{_GMFUNCTION_} :: _out_buffer expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_buffer), buffer_get_size(_out_buffer));

    // param: _out_max_bytes, type: Int32
    if (!is_numeric(_out_max_bytes)) show_error($"{_GMFUNCTION_} :: _out_max_bytes expected number", true);
    buffer_write(__args_buffer, buffer_s32, _out_max_bytes);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_matchmaking_get_lobby_chat_entry(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamMatchmakingLobbyChatEntry_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_matchmaking_add_request_lobby_list_filter_slots_available (no wrapper is required)


/**
 * @param {Real} _steam_id_lobby
 * @returns {Bool} 
 */
function steam_matchmaking_request_lobby_data(_steam_id_lobby)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_lobby, type: UInt64
    if (!is_numeric(_steam_id_lobby)) show_error($"{_GMFUNCTION_} :: _steam_id_lobby expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_lobby);

    var _return_value = __steam_matchmaking_request_lobby_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_lobby
 * @param {Bool} _joinable
 * @returns {Bool} 
 */
function steam_matchmaking_set_lobby_joinable(_steam_id_lobby, _joinable)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_lobby, type: UInt64
    if (!is_numeric(_steam_id_lobby)) show_error($"{_GMFUNCTION_} :: _steam_id_lobby expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_lobby);

    // param: _joinable, type: Bool
    if (!is_bool(_joinable)) show_error($"{_GMFUNCTION_} :: _joinable expected bool", true);
    buffer_write(__args_buffer, buffer_bool, _joinable);

    var _return_value = __steam_matchmaking_set_lobby_joinable(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_lobby
 * @param {Real} _steam_id_invitee
 * @returns {Bool} 
 */
function steam_matchmaking_invite_user_to_lobby(_steam_id_lobby, _steam_id_invitee)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_lobby, type: UInt64
    if (!is_numeric(_steam_id_lobby)) show_error($"{_GMFUNCTION_} :: _steam_id_lobby expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_lobby);

    // param: _steam_id_invitee, type: UInt64
    if (!is_numeric(_steam_id_invitee)) show_error($"{_GMFUNCTION_} :: _steam_id_invitee expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_invitee);

    var _return_value = __steam_matchmaking_invite_user_to_lobby(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_lobby
 * @param {Real} _ip
 * @param {Real} _port
 * @param {Real} _steam_id_gs
 */
function steam_matchmaking_set_lobby_game_server(_steam_id_lobby, _ip, _port, _steam_id_gs)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_lobby, type: UInt64
    if (!is_numeric(_steam_id_lobby)) show_error($"{_GMFUNCTION_} :: _steam_id_lobby expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_lobby);

    // param: _ip, type: UInt32
    if (!is_numeric(_ip)) show_error($"{_GMFUNCTION_} :: _ip expected number", true);
    buffer_write(__args_buffer, buffer_u32, _ip);

    // param: _port, type: UInt32
    if (!is_numeric(_port)) show_error($"{_GMFUNCTION_} :: _port expected number", true);
    buffer_write(__args_buffer, buffer_u32, _port);

    // param: _steam_id_gs, type: UInt64
    if (!is_numeric(_steam_id_gs)) show_error($"{_GMFUNCTION_} :: _steam_id_gs expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_gs);

    var _return_value = __steam_matchmaking_set_lobby_game_server(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_lobby
 * @param {Real} _steam_id_lobby_dependent
 * @returns {Bool} 
 */
function steam_matchmaking_set_linked_lobby(_steam_id_lobby, _steam_id_lobby_dependent)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_lobby, type: UInt64
    if (!is_numeric(_steam_id_lobby)) show_error($"{_GMFUNCTION_} :: _steam_id_lobby expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_lobby);

    // param: _steam_id_lobby_dependent, type: UInt64
    if (!is_numeric(_steam_id_lobby_dependent)) show_error($"{_GMFUNCTION_} :: _steam_id_lobby_dependent expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_lobby_dependent);

    var _return_value = __steam_matchmaking_set_linked_lobby(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_lobby
 * @returns {Struct.SteamMatchmakingLobbyGameServer} 
 */
function steam_matchmaking_get_lobby_game_server(_steam_id_lobby)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_lobby, type: UInt64
    if (!is_numeric(_steam_id_lobby)) show_error($"{_GMFUNCTION_} :: _steam_id_lobby expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_lobby);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_matchmaking_get_lobby_game_server(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamMatchmakingLobbyGameServer_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Function} _callback
 */
function steam_networking_messages_set_callback_session_request(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_networking_messages_set_callback_session_request(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_networking_messages_clear_callback_session_request (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_networking_messages_set_callback_session_failed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_networking_messages_set_callback_session_failed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_networking_messages_clear_callback_session_failed (no wrapper is required)


/**
 * @param {Real} _steam_id_remote
 * @param {Id.Buffer} _data
 * @param {Real} _bytes
 * @param {Real} _send_flags
 * @param {Real} _remote_channel
 * @returns {Real} 
 */
function steam_networking_messages_send_message_to_user(_steam_id_remote, _data, _bytes, _send_flags, _remote_channel)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_remote, type: UInt64
    if (!is_numeric(_steam_id_remote)) show_error($"{_GMFUNCTION_} :: _steam_id_remote expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_remote);

    // param: _data, type: Buffer
    if (!buffer_exists(_data)) show_error($"{_GMFUNCTION_} :: _data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_data), buffer_get_size(_data));

    // param: _bytes, type: UInt32
    if (!is_numeric(_bytes)) show_error($"{_GMFUNCTION_} :: _bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _bytes);

    // param: _send_flags, type: Int32
    if (!is_numeric(_send_flags)) show_error($"{_GMFUNCTION_} :: _send_flags expected number", true);
    buffer_write(__args_buffer, buffer_s32, _send_flags);

    // param: _remote_channel, type: Int32
    if (!is_numeric(_remote_channel)) show_error($"{_GMFUNCTION_} :: _remote_channel expected number", true);
    buffer_write(__args_buffer, buffer_s32, _remote_channel);

    var _return_value = __steam_networking_messages_send_message_to_user(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _local_channel
 * @param {Id.Buffer} _out_data
 * @param {Real} _max_bytes
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingMessagesReceived} 
 */
function steam_networking_messages_receive_one_on_channel(_local_channel, _out_data, _max_bytes, _offset)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _local_channel, type: Int32
    if (!is_numeric(_local_channel)) show_error($"{_GMFUNCTION_} :: _local_channel expected number", true);
    buffer_write(__args_buffer, buffer_s32, _local_channel);

    // param: _out_data, type: Buffer
    if (!buffer_exists(_out_data)) show_error($"{_GMFUNCTION_} :: _out_data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_data), buffer_get_size(_out_data));

    // param: _max_bytes, type: UInt32
    if (!is_numeric(_max_bytes)) show_error($"{_GMFUNCTION_} :: _max_bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_bytes);

    // param: _offset, type: UInt32
    if (!is_numeric(_offset)) show_error($"{_GMFUNCTION_} :: _offset expected number", true);
    buffer_write(__args_buffer, buffer_u32, _offset);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_networking_messages_receive_one_on_channel(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamNetworkingMessagesReceived_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _steam_id_remote
 * @returns {Bool} 
 */
function steam_networking_messages_accept_session_with_user(_steam_id_remote)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_remote, type: UInt64
    if (!is_numeric(_steam_id_remote)) show_error($"{_GMFUNCTION_} :: _steam_id_remote expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_remote);

    var _return_value = __steam_networking_messages_accept_session_with_user(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_remote
 * @returns {Bool} 
 */
function steam_networking_messages_close_session_with_user(_steam_id_remote)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_remote, type: UInt64
    if (!is_numeric(_steam_id_remote)) show_error($"{_GMFUNCTION_} :: _steam_id_remote expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_remote);

    var _return_value = __steam_networking_messages_close_session_with_user(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _steam_id_remote
 * @param {Real} _local_channel
 * @returns {Bool} 
 */
function steam_networking_messages_close_channel_with_user(_steam_id_remote, _local_channel)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_remote, type: UInt64
    if (!is_numeric(_steam_id_remote)) show_error($"{_GMFUNCTION_} :: _steam_id_remote expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_remote);

    // param: _local_channel, type: Int32
    if (!is_numeric(_local_channel)) show_error($"{_GMFUNCTION_} :: _local_channel expected number", true);
    buffer_write(__args_buffer, buffer_s32, _local_channel);

    var _return_value = __steam_networking_messages_close_channel_with_user(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Function} _callback
 */
function steam_networking_sockets_set_callback_connection_status_changed(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_networking_sockets_set_callback_connection_status_changed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_networking_sockets_clear_callback_connection_status_changed (no wrapper is required)


// Skipping function steam_networking_sockets_create_listen_socket_ip (no wrapper is required)


// Skipping function steam_networking_sockets_close_listen_socket (no wrapper is required)


// Skipping function steam_networking_sockets_connect_by_ip_address (no wrapper is required)


// Skipping function steam_networking_sockets_accept_connection (no wrapper is required)


// Skipping function steam_networking_sockets_close_connection (no wrapper is required)


/**
 * @param {Real} _conn
 * @param {Real} _user_data
 * @returns {Bool} 
 */
function steam_networking_sockets_set_connection_user_data(_conn, _user_data)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _conn, type: UInt32
    if (!is_numeric(_conn)) show_error($"{_GMFUNCTION_} :: _conn expected number", true);
    buffer_write(__args_buffer, buffer_u32, _conn);

    // param: _user_data, type: UInt64
    if (!is_numeric(_user_data)) show_error($"{_GMFUNCTION_} :: _user_data expected number", true);
    buffer_write(__args_buffer, buffer_u64, _user_data);

    var _return_value = __steam_networking_sockets_set_connection_user_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _conn
 * @returns {Real} 
 */
function steam_networking_sockets_get_connection_user_data(_conn)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_networking_sockets_get_connection_user_data(_conn, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

// Skipping function steam_networking_sockets_set_connection_name (no wrapper is required)


// Skipping function steam_networking_sockets_get_connection_name (no wrapper is required)


/**
 * @param {Real} _conn
 * @param {Id.Buffer} _data
 * @param {Real} _bytes
 * @param {Enum.SteamNetworkingSendFlags} _send_flags
 * @returns {Real} 
 */
function steam_networking_sockets_send_message_to_connection(_conn, _data, _bytes, _send_flags)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _conn, type: UInt32
    if (!is_numeric(_conn)) show_error($"{_GMFUNCTION_} :: _conn expected number", true);
    buffer_write(__args_buffer, buffer_u32, _conn);

    // param: _data, type: Buffer
    if (!buffer_exists(_data)) show_error($"{_GMFUNCTION_} :: _data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_data), buffer_get_size(_data));

    // param: _bytes, type: UInt32
    if (!is_numeric(_bytes)) show_error($"{_GMFUNCTION_} :: _bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _bytes);

    // param: _send_flags, type: enum SteamNetworkingSendFlags

    if (!is_numeric(_send_flags)) show_error($"{_GMFUNCTION_} :: _send_flags expected number", true);
    buffer_write(__args_buffer, buffer_u64, _send_flags);

    var _return_value = __steam_networking_sockets_send_message_to_connection(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_networking_sockets_flush_messages_on_connection (no wrapper is required)


/**
 * @param {Real} _conn
 * @param {Id.Buffer} _out_data
 * @param {Real} _max_bytes
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 */
function steam_networking_sockets_receive_one_on_connection(_conn, _out_data, _max_bytes, _offset)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _conn, type: UInt32
    if (!is_numeric(_conn)) show_error($"{_GMFUNCTION_} :: _conn expected number", true);
    buffer_write(__args_buffer, buffer_u32, _conn);

    // param: _out_data, type: Buffer
    if (!buffer_exists(_out_data)) show_error($"{_GMFUNCTION_} :: _out_data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_data), buffer_get_size(_out_data));

    // param: _max_bytes, type: UInt32
    if (!is_numeric(_max_bytes)) show_error($"{_GMFUNCTION_} :: _max_bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_bytes);

    // param: _offset, type: UInt32
    if (!is_numeric(_offset)) show_error($"{_GMFUNCTION_} :: _offset expected number", true);
    buffer_write(__args_buffer, buffer_u32, _offset);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_networking_sockets_receive_one_on_connection(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamNetworkingSocketsReceived_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _conn
 * @returns {Struct.SteamNetworkingSocketsConnectionInfo} 
 */
function steam_networking_sockets_get_connection_info(_conn)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_networking_sockets_get_connection_info(_conn, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamNetworkingSocketsConnectionInfo_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

// Skipping function steam_networking_sockets_get_detailed_connection_status (no wrapper is required)


// Skipping function steam_networking_sockets_run_callbacks (no wrapper is required)


/**
 * @param {Bool} _use_network_loopback
 * @returns {Array[Real]} 
 */
function steam_networking_sockets_create_socket_pair(_use_network_loopback)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_networking_sockets_create_socket_pair(_use_network_loopback, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    var _length = buffer_read(__ret_buffer, buffer_u32);
    _result = array_create(_length);
    for (var _i = 0; _i < _length; ++_i)
    {
        _result[_i] = buffer_read(__ret_buffer, buffer_u32);
    }
    return _result;
}

// Skipping function steam_networking_sockets_create_listen_socket_p2p (no wrapper is required)


/**
 * @param {Real} _steam_id_remote
 * @param {Real} _remote_virtual_port
 * @returns {Real} 
 */
function steam_networking_sockets_connect_p2p(_steam_id_remote, _remote_virtual_port)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _steam_id_remote, type: UInt64
    if (!is_numeric(_steam_id_remote)) show_error($"{_GMFUNCTION_} :: _steam_id_remote expected number", true);
    buffer_write(__args_buffer, buffer_u64, _steam_id_remote);

    // param: _remote_virtual_port, type: Int32
    if (!is_numeric(_remote_virtual_port)) show_error($"{_GMFUNCTION_} :: _remote_virtual_port expected number", true);
    buffer_write(__args_buffer, buffer_s32, _remote_virtual_port);

    var _return_value = __steam_networking_sockets_connect_p2p(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_networking_sockets_get_listen_socket_address (no wrapper is required)


// Skipping function steam_networking_sockets_create_poll_group (no wrapper is required)


// Skipping function steam_networking_sockets_destroy_poll_group (no wrapper is required)


// Skipping function steam_networking_sockets_set_connection_poll_group (no wrapper is required)


/**
 * @param {Real} _poll_group
 * @param {Id.Buffer} _out_data
 * @param {Real} _max_bytes
 * @param {Real} _offset
 * @returns {Struct.SteamNetworkingSocketsReceived} 
 */
function steam_networking_sockets_receive_messages_on_poll_group(_poll_group, _out_data, _max_bytes, _offset)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _poll_group, type: UInt32
    if (!is_numeric(_poll_group)) show_error($"{_GMFUNCTION_} :: _poll_group expected number", true);
    buffer_write(__args_buffer, buffer_u32, _poll_group);

    // param: _out_data, type: Buffer
    if (!buffer_exists(_out_data)) show_error($"{_GMFUNCTION_} :: _out_data expected Id.Buffer", true);
    __Steamworks_queue_buffer(buffer_get_address(_out_data), buffer_get_size(_out_data));

    // param: _max_bytes, type: UInt32
    if (!is_numeric(_max_bytes)) show_error($"{_GMFUNCTION_} :: _max_bytes expected number", true);
    buffer_write(__args_buffer, buffer_u32, _max_bytes);

    // param: _offset, type: UInt32
    if (!is_numeric(_offset)) show_error($"{_GMFUNCTION_} :: _offset expected number", true);
    buffer_write(__args_buffer, buffer_u32, _offset);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_networking_sockets_receive_messages_on_poll_group(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamNetworkingSocketsReceived_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Function} _callback
 */
function steam_parties_set_callback_reservation_notification(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_parties_set_callback_reservation_notification(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_parties_clear_callback_reservation_notification (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_parties_set_callback_available_beacon_locations_updated(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_parties_set_callback_available_beacon_locations_updated(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_parties_clear_callback_available_beacon_locations_updated (no wrapper is required)


/**
 * @param {Function} _callback
 */
function steam_parties_set_callback_active_beacons_updated(_callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _callback, type: Function
    if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
    var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
    buffer_write(__args_buffer, buffer_u64, _callback_handle);

    var _return_value = __steam_parties_set_callback_active_beacons_updated(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_parties_clear_callback_active_beacons_updated (no wrapper is required)


/**
 * @returns {Struct.SteamPartiesAvailableBeaconLocationCount} 
 */
function steam_parties_get_num_available_beacon_locations()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_parties_get_num_available_beacon_locations(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamPartiesAvailableBeaconLocationCount_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @returns {Struct.SteamPartiesAvailableBeaconLocations} 
 */
function steam_parties_get_available_beacon_locations()
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_parties_get_available_beacon_locations(buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamPartiesAvailableBeaconLocations_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _open_slots
 * @param {Enum.SteamPartiesBeaconLocationType} _beacon_location_type
 * @param {Real} _beacon_location_id
 * @param {String} _connect_string
 * @param {String} _metadata
 * @param {Function} _callback
 * @returns {Bool} 
 */
function steam_parties_create_beacon(_open_slots, _beacon_location_type, _beacon_location_id, _connect_string, _metadata, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _open_slots, type: UInt32
    if (!is_numeric(_open_slots)) show_error($"{_GMFUNCTION_} :: _open_slots expected number", true);
    buffer_write(__args_buffer, buffer_u32, _open_slots);

    // param: _beacon_location_type, type: enum SteamPartiesBeaconLocationType

    if (!is_numeric(_beacon_location_type)) show_error($"{_GMFUNCTION_} :: _beacon_location_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_location_type);

    // param: _beacon_location_id, type: UInt64
    if (!is_numeric(_beacon_location_id)) show_error($"{_GMFUNCTION_} :: _beacon_location_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_location_id);

    // param: _connect_string, type: String
    if (!is_string(_connect_string)) show_error($"{_GMFUNCTION_} :: _connect_string expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_connect_string));
    buffer_write(__args_buffer, buffer_string, _connect_string);

    // param: _metadata, type: String
    if (!is_string(_metadata)) show_error($"{_GMFUNCTION_} :: _metadata expected string", true);
    buffer_write(__args_buffer, buffer_u32, string_byte_length(_metadata));
    buffer_write(__args_buffer, buffer_string, _metadata);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_parties_create_beacon(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _beacon_id
 * @param {Real} _user_steam_id
 * @returns {Bool} 
 */
function steam_parties_on_reservation_completed(_beacon_id, _user_steam_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _beacon_id, type: UInt64
    if (!is_numeric(_beacon_id)) show_error($"{_GMFUNCTION_} :: _beacon_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_id);

    // param: _user_steam_id, type: UInt64
    if (!is_numeric(_user_steam_id)) show_error($"{_GMFUNCTION_} :: _user_steam_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _user_steam_id);

    var _return_value = __steam_parties_on_reservation_completed(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _beacon_id
 * @param {Real} _open_slots
 * @param {Function} _callback
 * @returns {Bool} 
 */
function steam_parties_change_num_open_slots(_beacon_id, _open_slots, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _beacon_id, type: UInt64
    if (!is_numeric(_beacon_id)) show_error($"{_GMFUNCTION_} :: _beacon_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_id);

    // param: _open_slots, type: UInt32
    if (!is_numeric(_open_slots)) show_error($"{_GMFUNCTION_} :: _open_slots expected number", true);
    buffer_write(__args_buffer, buffer_u32, _open_slots);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_parties_change_num_open_slots(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Real} _beacon_id
 * @returns {Bool} 
 */
function steam_parties_destroy_beacon(_beacon_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _beacon_id, type: UInt64
    if (!is_numeric(_beacon_id)) show_error($"{_GMFUNCTION_} :: _beacon_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_id);

    var _return_value = __steam_parties_destroy_beacon(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

// Skipping function steam_parties_get_num_active_beacons (no wrapper is required)


/**
 * @param {Real} _index
 * @returns {Real} 
 */
function steam_parties_get_beacon_by_index(_index)
{
    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_parties_get_beacon_by_index(_index, buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = buffer_read(__ret_buffer, buffer_u64);
    return _result;
}

/**
 * @param {Real} _beacon_id
 * @returns {Struct.SteamPartiesBeaconDetails} 
 */
function steam_parties_get_beacon_details(_beacon_id)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _beacon_id, type: UInt64
    if (!is_numeric(_beacon_id)) show_error($"{_GMFUNCTION_} :: _beacon_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_id);

    var __ret_buffer = __ext_core_get_ret_buffer();

    var _return_value = __steam_parties_get_beacon_details(buffer_get_address(__args_buffer), buffer_tell(__args_buffer), buffer_get_address(__ret_buffer), buffer_get_size(__ret_buffer));

    var _result = undefined;
    _result = __SteamPartiesBeaconDetails_decode(__ret_buffer, buffer_tell(__ret_buffer));
    return _result;
}

/**
 * @param {Real} _beacon_id
 * @param {Function} _callback
 * @returns {Bool} 
 */
function steam_parties_join_party(_beacon_id, _callback)
{
    static __dispatcher = __Steamworks_get_dispatcher();

    var __args_buffer = __ext_core_get_args_buffer();

    // param: _beacon_id, type: UInt64
    if (!is_numeric(_beacon_id)) show_error($"{_GMFUNCTION_} :: _beacon_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_id);

    // param: _callback, type: optional<Function>
    if (is_undefined(_callback))
    {
        buffer_write(__args_buffer, buffer_bool, false);
    }
    else
    {
        buffer_write(__args_buffer, buffer_bool, true);
        if (!is_callable(_callback)) show_error($"{_GMFUNCTION_} :: _callback expected callable type", true);
        var _callback_handle = __ext_core_function_register(_callback, __dispatcher);
        buffer_write(__args_buffer, buffer_u64, _callback_handle);
    }

    var _return_value = __steam_parties_join_party(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/**
 * @param {Enum.SteamPartiesBeaconLocationType} _beacon_location_type
 * @param {Real} _beacon_location_id
 * @param {Enum.SteamPartiesBeaconLocationData} _data_kind
 * @returns {String} 
 */
function steam_parties_get_beacon_location_data(_beacon_location_type, _beacon_location_id, _data_kind)
{
    var __args_buffer = __ext_core_get_args_buffer();

    // param: _beacon_location_type, type: enum SteamPartiesBeaconLocationType

    if (!is_numeric(_beacon_location_type)) show_error($"{_GMFUNCTION_} :: _beacon_location_type expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_location_type);

    // param: _beacon_location_id, type: UInt64
    if (!is_numeric(_beacon_location_id)) show_error($"{_GMFUNCTION_} :: _beacon_location_id expected number", true);
    buffer_write(__args_buffer, buffer_u64, _beacon_location_id);

    // param: _data_kind, type: enum SteamPartiesBeaconLocationData

    if (!is_numeric(_data_kind)) show_error($"{_GMFUNCTION_} :: _data_kind expected number", true);
    buffer_write(__args_buffer, buffer_u64, _data_kind);

    var _return_value = __steam_parties_get_beacon_location_data(buffer_get_address(__args_buffer), buffer_tell(__args_buffer));

    return _return_value;
}

/// @ignore
function __Steamworks_get_decoders()
{
    static __decoders = [
        __SteamId_decode,
        __SteamFriendsGetFollowerCountResult_decode,
        __SteamFriendsIsFollowingResult_decode,
        __SteamFriendsEnumerateFollowingListResult_decode,
        __SteamFriendsRequestClanOfficerListResult_decode,
        __SteamFriendsDownloadClanActivityCountsResult_decode,
        __SteamFriendsAvatarImageLoaded_decode,
        __SteamFriendsClanActivityCounts_decode,
        __SteamFriendsClanChatMessage_decode,
        __SteamFriendsFriendGamePlayed_decode,
        __SteamFriendsFriendMessage_decode,
        __SteamFriendsPersonaStateChange_decode,
        __SteamFriendsGameOverlayActivated_decode,
        __SteamFriendsGameRichPresenceJoinRequested_decode,
        __SteamFriendsGameLobbyJoinRequested_decode,
        __SteamFriendsFriendRichPresenceUpdate_decode,
        __SteamFriendsGameServerChangeRequested_decode,
        __SteamAppsFileDetailsResult_decode,
        __SteamAppsDlcData_decode,
        __SteamAppsTimedTrialStatus_decode,
        __SteamAppsInstallDir_decode,
        __SteamAppsBetaName_decode,
        __SteamAppsNumBetas_decode,
        __SteamAppsBetaInfo_decode,
        __SteamAppsDlcDownloadProgress_decode,
        __SteamAppsLaunchCommandLine_decode,
        __SteamAppsInstallSize_decode,
        __SteamAppsDlcInstallDir_decode,
        __SteamAppsLanguageInfo_decode,
        __SteamAppsDlcInstalled_decode,
        __SteamScreenshotsScreenshotReady_decode,
        __SteamUserStoreAuthUrlResponse_decode,
        __SteamUserEncryptedAppTicketResponse_decode,
        __SteamUserDurationControl_decode,
        __SteamUserMarketEligibilityResponse_decode,
        __SteamNetworkingIdentity_decode,
        __SteamUserAuthSessionTicket_decode,
        __SteamUserAvailableVoice_decode,
        __SteamUserGetVoiceResult_decode,
        __SteamUserGameConnectionToken_decode,
        __SteamUserDataFolder_decode,
        __SteamUserEncryptedAppTicket_decode,
        __SteamUserSteamServersConnected_decode,
        __SteamUserSteamServersDisconnected_decode,
        __SteamUserSteamServerConnectFailure_decode,
        __SteamUserClientGameServerDeny_decode,
        __SteamUserLicensesUpdated_decode,
        __SteamUserMicroTxnAuthorizationResponse_decode,
        __SteamUtilsApiCallResult_decode,
        __SteamUtilsCheckFileSignatureResult_decode,
        __SteamUtilsLowBatteryPower_decode,
        __SteamUtilsSteamApiCallCompleted_decode,
        __SteamUtilsCserIpPort_decode,
        __SteamUtilsGamepadTextInput_decode,
        __SteamUtilsImageSize_decode,
        __SteamUtilsApiCallCompleted_decode,
        __SteamUtilsFilterTextResult_decode,
        __SteamUtilsGamepadTextInputDismissed_decode,
        __SteamUtilsFloatingGamepadTextInputDismissed_decode,
        __SteamUtilsWarningMessage_decode,
        __SteamUgcItemDownloadInfo_decode,
        __SteamUgcItemInstallInfo_decode,
        __SteamUgcItemUpdateProgress_decode,
        __SteamUgcQueryResult_decode,
        __SteamUgcQueryPreviewUrl_decode,
        __SteamUgcQueryMetadata_decode,
        __SteamUgcAdditionalPreview_decode,
        __SteamUgcKeyValueTag_decode,
        __SteamUgcItemInstalled_decode,
        __SteamUgcUserSubscribedItemsListChanged_decode,
        __SteamUgcFileSubscribed_decode,
        __SteamUgcFileUnsubscribed_decode,
        __SteamUgcQueryCompleted_decode,
        __SteamUgcCreateItemResult_decode,
        __SteamUgcSubmitItemUpdateResult_decode,
        __SteamUgcSubscribeItemResult_decode,
        __SteamUgcUnsubscribeItemResult_decode,
        __SteamUgcFavoriteItemsListChanged_decode,
        __SteamUgcSetUserItemVoteResult_decode,
        __SteamUgcGetUserItemVoteResult_decode,
        __SteamUgcRequestItemDetailsResult_decode,
        __SteamUgcSupportedGameVersionData_decode,
        __SteamUgcDeleteItemResult_decode,
        __SteamUgcDownloadItemResult_decode,
        __SteamInputAnalogActionData_decode,
        __SteamInputDigitalActionData_decode,
        __SteamInputMotionData_decode,
        __SteamInputActiveActionSetLayers_decode,
        __SteamInputActionOrigins_decode,
        __SteamInputDeviceBindingRevision_decode,
        __SteamInputDeviceEvent_decode,
        __SteamInputActionSetChanged_decode,
        __SteamInputControllerBattery_decode,
        __SteamUserStatsAchievementAndUnlockTime_decode,
        __SteamUserStatsAchievementAndProgress_decode,
        __SteamUserStatsAchievementNamesAndPercent_decode,
        __SteamUserStatsMostAchievedAchievementInfo_decode,
        __SteamUserStatsNumAchievementsAndHours_decode,
        __SteamUserStatsStatInt_decode,
        __SteamUserStatsStatFloat_decode,
        __SteamUserStatsUserAchievement_decode,
        __SteamUserStatsGlobalStatInt64_decode,
        __SteamUserStatsGlobalStatDouble_decode,
        __SteamUserStatsGlobalStatHistoryInt64_decode,
        __SteamUserStatsGlobalStatHistoryDouble_decode,
        __SteamUserStatsDownloadedLeaderboardEntry_decode,
        __SteamUserStatsRequestUserStatsResult_decode,
        __SteamUserStatsLeaderboardFindResult_decode,
        __SteamUserStatsScoresDownloadedResult_decode,
        __SteamUserStatsScoreUploadedResult_decode,
        __SteamUserStatsNumberOfCurrentPlayersResult_decode,
        __SteamUserStatsGlobalAchievementPercentagesReadyResult_decode,
        __SteamUserStatsGlobalStatsReceivedResult_decode,
        __SteamUserStatsAttachLeaderboardUgcResult_decode,
        __SteamUserStatsUserStatsReceived_decode,
        __SteamUserStatsUserStatsStored_decode,
        __SteamUserStatsUserAchievementStored_decode,
        __SteamUserStatsIntMinMax_decode,
        __SteamUserStatsFloatMinMax_decode,
        __SteamMusicPlaybackStatusHasChanged_decode,
        __SteamMusicVolumeHasChanged_decode,
        __SteamTimelineGamePhaseRecordingExists_decode,
        __SteamTimelineEventRecordingExists_decode,
        __SteamInventoryResultItems_decode,
        __SteamInventoryDeserializeResult_decode,
        __SteamInventorySerializeResult_decode,
        __SteamInventoryItemProperty_decode,
        __SteamInventoryItemsWithPrices_decode,
        __SteamInventoryDefProperty_decode,
        __SteamInventoryItemPrice_decode,
        __SteamInventoryResultReady_decode,
        __SteamInventoryFullUpdate_decode,
        __SteamInventoryDefinitionUpdate_decode,
        __SteamInventoryStartPurchaseResult_decode,
        __SteamInventoryRequestPricesResult_decode,
        __SteamRemoteStorageFileNameAndSize_decode,
        __SteamRemoteStorageQuota_decode,
        __SteamRemoteStorageUgcDetails_decode,
        __SteamRemoteStorageFileShareResult_decode,
        __SteamRemoteStorageDownloadUgcResult_decode,
        __SteamRemoteStoragePublishedFileSubscribed_decode,
        __SteamRemoteStoragePublishedFileUnsubscribed_decode,
        __SteamRemoteStorageLocalFileChange_decode,
        __SteamRemoteStoragePublishFileResult_decode,
        __SteamRemoteStorageUpdatePublishedFileResult_decode,
        __SteamRemoteStorageSubscribePublishedFileResult_decode,
        __SteamRemoteStorageUnsubscribePublishedFileResult_decode,
        __SteamMatchmakingLobbyCreated_decode,
        __SteamMatchmakingLobbyEnter_decode,
        __SteamMatchmakingLobbyMatchList_decode,
        __SteamMatchmakingLobbyDataUpdate_decode,
        __SteamMatchmakingLobbyChatUpdate_decode,
        __SteamMatchmakingLobbyChatMsg_decode,
        __SteamMatchmakingLobbyGameCreated_decode,
        __SteamMatchmakingLobbyInvite_decode,
        __SteamMatchmakingLobbyChatEntry_decode,
        __SteamMatchmakingLobbyGameServer_decode,
        __SteamNetworkingMessagesSessionRequest_decode,
        __SteamNetworkingMessagesSessionFailed_decode,
        __SteamNetworkingMessagesReceived_decode,
        __SteamNetworkingSocketsConnectionInfo_decode,
        __SteamNetworkingSocketsReceived_decode,
        __SteamPartiesAvailableBeaconLocationCount_decode,
        __SteamPartiesAvailableBeaconLocations_decode,
        __SteamPartiesCreateBeaconResult_decode,
        __SteamPartiesJoinPartyResult_decode,
        __SteamPartiesChangeNumOpenSlotsResult_decode,
        __SteamPartiesReservationNotification_decode,
        __SteamPartiesBeaconDetails_decode,
        __SteamNetworkingSocketsStatusChanged_decode
    ];
    return __decoders;
}
/// @ignore
function __Steamworks_get_dispatcher()
{
    static __dispatcher = new __GMNativeFunctionDispatcher(__Steamworks_invocation_handler, __Steamworks_get_decoders());
    return __dispatcher;
}
