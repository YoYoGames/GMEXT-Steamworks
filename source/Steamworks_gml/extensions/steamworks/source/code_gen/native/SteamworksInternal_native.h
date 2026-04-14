// ##### extgen :: Auto-generated file do not edit!! #####

#pragma once
#include <cstdint>
#include <string_view>
#include <vector>
#include <array>
#include <optional>
#include "core/GMExtWire.h"

namespace gm_consts
{
}


namespace gm_enums
{
    enum class SteamApiAccountType : std::int64_t
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
    };

    enum class SteamApiDenyReason : std::int64_t
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
    };

    enum class SteamApiGameIdType : std::int64_t
    {
        App = 0,
        GameMod = 1,
        Shortcut = 2,
        P2p = 3
    };

    enum class SteamApiLaunchOptionType : std::int64_t
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
    };

    enum class SteamApiMarketingMessageFlag : std::int64_t
    {
        None = 0,
        HighPriority = 1,
        PlatformWindows = 2,
        PlatformMac = 4,
        PlatformLinux = 8,
        PlatformRestrictions = 14
    };

    enum class SteamApiNotificationPosition : std::int64_t
    {
        TopLeft = 0,
        TopRight = 1,
        BottomLeft = 2,
        BottomRight = 3
    };

    enum class SteamApiUniverse : std::int64_t
    {
        Invalid = 0,
        Public = 1,
        Beta = 2,
        Internal = 3,
        Dev = 4,
        Max = 5
    };

    enum class SteamApiUserHasLicenseResult : std::int64_t
    {
        HasLicense = 0,
        DoesNotHaveLicense = 1,
        NoAuth = 2
    };

    enum class SteamApiVoiceResult : std::int64_t
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
    };

    enum class SteamApiResult : std::int64_t
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
    };

    enum class SteamFriendsOverlayToStoreFlag : std::int64_t
    {
        None = 0,
        AddToCart = 1,
        AddToCartAndShow = 2
    };

    enum class SteamFriendsOverlayToWebpageMode : std::int64_t
    {
        Default = 0,
        Modal = 1
    };

    enum class SteamFriendsChatEntryType : std::int64_t
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
    };

    enum class SteamFriendsFriendFlag : std::int64_t
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
    };

    enum class SteamFriendsPersonaState : std::int64_t
    {
        Offline = 0,
        Online = 1,
        Busy = 2,
        Away = 3,
        Snooze = 4,
        LookingToTrade = 5,
        LookingToPlay = 6
    };

    enum class SteamFriendsRelationship : std::int64_t
    {
        None = 0,
        Blocked = 1,
        RequestRecipient = 2,
        Friend = 3,
        RequestInitiator = 4,
        Ignored = 5,
        IgnoredFriend = 6,
        SuggestedFriend = 7
    };

    enum class SteamScreenshotsVrScreenshotType : std::int64_t
    {
        None = 0,
        Mono = 1,
        Stereo = 2,
        MonoCubemap = 3,
        MonoPanorama = 4,
        StereoPanorama = 5
    };

    enum class SteamScreenshotsConst : std::int64_t
    {
        InvalidScreenshotHandle = 0,
        TagTypeMax = 255,
        TagValueMax = 255,
        MaxTaggedPublishedFiles = 32,
        MaxTaggedUsers = 32,
        ThumbWidth = 200
    };

    enum class SteamNetworkingIdentityType : std::int64_t
    {
        Invalid = 0,
        SteamId = 1,
        IpAddress = 2,
        GenericString = 3,
        GenericBytes = 4
    };

    enum class SteamUserBeginAuthSessionResult : std::int64_t
    {
        Ok = 0,
        InvalidTicket = 1,
        DuplicateRequest = 2,
        InvalidVersion = 3,
        GameMismatch = 4,
        ExpiredTicket = 5
    };

    enum class SteamUserDurationControlOnlineState : std::int64_t
    {
        Invalid = 0,
        Offline = 1,
        Online = 2,
        OnlineHighPri = 3
    };

    enum class SteamUtilsApiCallFailure : std::int64_t
    {
        None = -1,
        SteamGone = 0,
        NetworkFailure = 1,
        InvalidHandle = 2,
        MismatchedCallback = 3
    };

    enum class SteamUtilsGamepadTextInputMode : std::int64_t
    {
        Normal = 0,
        Password = 1
    };

    enum class SteamUtilsGamepadTextInputLineMode : std::int64_t
    {
        SingleLine = 0,
        MultipleLines = 1
    };

    enum class SteamUtilsFloatingGamepadTextInputMode : std::int64_t
    {
        SingleLine = 0,
        MultipleLines = 1,
        Email = 2,
        Numeric = 3
    };

    enum class SteamUtilsTextFilteringContext : std::int64_t
    {
        Unknown = 0,
        GameContent = 1,
        Chat = 2,
        Name = 3
    };

    enum class SteamUgcMatchingUgcType : std::int64_t
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
    };

    enum class SteamUgcQuery : std::int64_t
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
    };

    enum class SteamUserUgcList : std::int64_t
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
    };

    enum class SteamUserUgcListSortOrder : std::int64_t
    {
        CreationOrderDesc = 0,
        CreationOrderAsc = 1,
        TitleAsc = 2,
        LastUpdatedDesc = 3,
        SubscriptionDateDesc = 4,
        VoteScoreDesc = 5,
        ForModeration = 6
    };

    enum class SteamWorkshopFileType : std::int64_t
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
    };

    enum class SteamItemPreviewType : std::int64_t
    {
        Image = 0,
        YouTubeVideo = 1,
        Sketchfab = 2,
        EnvironmentMap_HorizontalCross = 3,
        EnvironmentMap_LatLong = 4,
        ReservedMax = 255
    };

    enum class SteamRemoteStoragePublishedFileVisibility : std::int64_t
    {
        Public = 0,
        FriendsOnly = 1,
        Private = 2,
        Unlisted = 3
    };

    enum class SteamUgcContentDescriptorId : std::int64_t
    {
        NudityOrSexualContent = 1,
        FrequentViolenceOrGore = 2,
        AdultOnlySexualContent = 3,
        GratuitousSexualContent = 4,
        AnyMatureContent = 5
    };

    enum class SteamUgcStatisticType : std::int64_t
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
    };

    enum class SteamLeaderboardDataRequest : std::int64_t
    {
        Global = 0,
        GlobalAroundUser = 1,
        Friends = 2
    };

    enum class SteamLeaderboardSortMethod : std::int64_t
    {
        None = 0,
        Ascending = 1,
        Descending = 2
    };

    enum class SteamLeaderboardDisplayType : std::int64_t
    {
        None = 0,
        Numeric = 1,
        TimeSeconds = 2,
        TimeMilliSeconds = 3
    };

    enum class SteamLeaderboardUploadScoreMethod : std::int64_t
    {
        None = 0,
        KeepBest = 1,
        ForceUpdate = 2
    };

    enum class SteamMusicPlaybackStatus : std::int64_t
    {
        Undefined = 0,
        Playing = 1,
        Paused = 2,
        Idle = 3
    };

    enum class SteamTimelineGameMode : std::int64_t
    {
        Playing = 1,
        Staging = 2,
        Menus = 3,
        LoadingScreen = 4
    };

    enum class SteamTimelineEventClipPriority : std::int64_t
    {
        None = 1,
        Standard = 2,
        Featured = 3
    };

    enum class SteamInventoryConst : std::int64_t
    {
        InvalidResult = -1
    };

    enum class SteamRemoteStoragePlatform : std::int64_t
    {
        None = 0,
        Windows = 1,
        OSX = 2,
        PS3 = 4,
        Linux = 8,
        Reserved2 = 16,
        All = -1
    };

    enum class SteamRemoteStorageUgcReadAction : std::int64_t
    {
        ContinueReadingUntilFinished = 0,
        ContinueReading = 1,
        Close = 2
    };

    enum class SteamRemoteStorageWorkshopFileType : std::int64_t
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
    };

    enum class SteamMatchmakingLobbyType : std::int64_t
    {
        Private = 0,
        FriendsOnly = 1,
        Public = 2,
        Invisible = 3
    };

    enum class SteamMatchmakingLobbyComparison : std::int64_t
    {
        EqualToOrLessThan = -2,
        LessThan = -1,
        Equal = 0,
        GreaterThan = 1,
        EqualToOrGreaterThan = 2,
        NotEqual = 3
    };

    enum class SteamMatchmakingLobbyDistanceFilter : std::int64_t
    {
        Close = 0,
        Default = 1,
        Far = 2,
        Worldwide = 3
    };

    enum class SteamNetworkingConnectionState : std::int64_t
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
    };

    enum class SteamNetworkingSendFlags : std::int64_t
    {
        Unreliable = 0,
        NoNagle = 1,
        NoDelay = 4,
        Reliable = 8,
        UseCurrentThread = 16,
        AutoRestartBrokenSession = 32
    };

    enum class SteamPartiesBeaconLocationType : std::int64_t
    {
        Invalid = 0,
        ChatGroup = 1,
        Max = 2
    };

    enum class SteamPartiesBeaconLocationData : std::int64_t
    {
        Invalid = 0,
        Name = 1,
        IconURLSmall = 2,
        IconURLMedium = 3,
        IconURLLarge = 4
    };

}


namespace gm_structs
{
    struct SteamId;
    struct SteamFriendsGetFollowerCountResult;
    struct SteamFriendsIsFollowingResult;
    struct SteamFriendsEnumerateFollowingListResult;
    struct SteamFriendsRequestClanOfficerListResult;
    struct SteamFriendsDownloadClanActivityCountsResult;
    struct SteamFriendsAvatarImageLoaded;
    struct SteamFriendsClanActivityCounts;
    struct SteamFriendsClanChatMessage;
    struct SteamFriendsFriendGamePlayed;
    struct SteamFriendsFriendMessage;
    struct SteamFriendsPersonaStateChange;
    struct SteamFriendsGameOverlayActivated;
    struct SteamFriendsGameRichPresenceJoinRequested;
    struct SteamFriendsGameLobbyJoinRequested;
    struct SteamFriendsFriendRichPresenceUpdate;
    struct SteamFriendsGameServerChangeRequested;
    struct SteamAppsFileDetailsResult;
    struct SteamAppsDlcData;
    struct SteamAppsTimedTrialStatus;
    struct SteamAppsInstallDir;
    struct SteamAppsBetaName;
    struct SteamAppsNumBetas;
    struct SteamAppsBetaInfo;
    struct SteamAppsDlcDownloadProgress;
    struct SteamAppsLaunchCommandLine;
    struct SteamAppsInstallSize;
    struct SteamAppsDlcInstallDir;
    struct SteamAppsLanguageInfo;
    struct SteamAppsDlcInstalled;
    struct SteamScreenshotsScreenshotReady;
    struct SteamUserStoreAuthUrlResponse;
    struct SteamUserEncryptedAppTicketResponse;
    struct SteamUserDurationControl;
    struct SteamUserMarketEligibilityResponse;
    struct SteamNetworkingIdentity;
    struct SteamUserAuthSessionTicket;
    struct SteamUserAvailableVoice;
    struct SteamUserGetVoiceResult;
    struct SteamUserGameConnectionToken;
    struct SteamUserDataFolder;
    struct SteamUserEncryptedAppTicket;
    struct SteamUserSteamServersConnected;
    struct SteamUserSteamServersDisconnected;
    struct SteamUserSteamServerConnectFailure;
    struct SteamUserClientGameServerDeny;
    struct SteamUserLicensesUpdated;
    struct SteamUserMicroTxnAuthorizationResponse;
    struct SteamUtilsApiCallResult;
    struct SteamUtilsCheckFileSignatureResult;
    struct SteamUtilsLowBatteryPower;
    struct SteamUtilsSteamApiCallCompleted;
    struct SteamUtilsCserIpPort;
    struct SteamUtilsGamepadTextInput;
    struct SteamUtilsImageSize;
    struct SteamUtilsApiCallCompleted;
    struct SteamUtilsFilterTextResult;
    struct SteamUtilsGamepadTextInputDismissed;
    struct SteamUtilsFloatingGamepadTextInputDismissed;
    struct SteamUtilsWarningMessage;
    struct SteamUgcItemDownloadInfo;
    struct SteamUgcItemInstallInfo;
    struct SteamUgcItemUpdateProgress;
    struct SteamUgcQueryResult;
    struct SteamUgcQueryPreviewUrl;
    struct SteamUgcQueryMetadata;
    struct SteamUgcAdditionalPreview;
    struct SteamUgcKeyValueTag;
    struct SteamUgcItemInstalled;
    struct SteamUgcUserSubscribedItemsListChanged;
    struct SteamUgcFileSubscribed;
    struct SteamUgcFileUnsubscribed;
    struct SteamUgcQueryCompleted;
    struct SteamUgcCreateItemResult;
    struct SteamUgcSubmitItemUpdateResult;
    struct SteamUgcSubscribeItemResult;
    struct SteamUgcUnsubscribeItemResult;
    struct SteamUgcFavoriteItemsListChanged;
    struct SteamUgcSetUserItemVoteResult;
    struct SteamUgcGetUserItemVoteResult;
    struct SteamUgcRequestItemDetailsResult;
    struct SteamUgcSupportedGameVersionData;
    struct SteamUgcDeleteItemResult;
    struct SteamUgcDownloadItemResult;
    struct SteamInputAnalogActionData;
    struct SteamInputDigitalActionData;
    struct SteamInputMotionData;
    struct SteamInputActiveActionSetLayers;
    struct SteamInputActionOrigins;
    struct SteamInputDeviceBindingRevision;
    struct SteamInputDeviceEvent;
    struct SteamInputActionSetChanged;
    struct SteamInputControllerBattery;
    struct SteamUserStatsAchievementAndUnlockTime;
    struct SteamUserStatsAchievementAndProgress;
    struct SteamUserStatsAchievementNamesAndPercent;
    struct SteamUserStatsMostAchievedAchievementInfo;
    struct SteamUserStatsNumAchievementsAndHours;
    struct SteamUserStatsStatInt;
    struct SteamUserStatsStatFloat;
    struct SteamUserStatsUserAchievement;
    struct SteamUserStatsGlobalStatInt64;
    struct SteamUserStatsGlobalStatDouble;
    struct SteamUserStatsGlobalStatHistoryInt64;
    struct SteamUserStatsGlobalStatHistoryDouble;
    struct SteamUserStatsDownloadedLeaderboardEntry;
    struct SteamUserStatsRequestUserStatsResult;
    struct SteamUserStatsLeaderboardFindResult;
    struct SteamUserStatsScoresDownloadedResult;
    struct SteamUserStatsScoreUploadedResult;
    struct SteamUserStatsNumberOfCurrentPlayersResult;
    struct SteamUserStatsGlobalAchievementPercentagesReadyResult;
    struct SteamUserStatsGlobalStatsReceivedResult;
    struct SteamUserStatsAttachLeaderboardUgcResult;
    struct SteamUserStatsUserStatsReceived;
    struct SteamUserStatsUserStatsStored;
    struct SteamUserStatsUserAchievementStored;
    struct SteamUserStatsIntMinMax;
    struct SteamUserStatsFloatMinMax;
    struct SteamMusicPlaybackStatusHasChanged;
    struct SteamMusicVolumeHasChanged;
    struct SteamTimelineGamePhaseRecordingExists;
    struct SteamTimelineEventRecordingExists;
    struct SteamInventoryResultItems;
    struct SteamInventoryDeserializeResult;
    struct SteamInventorySerializeResult;
    struct SteamInventoryItemProperty;
    struct SteamInventoryItemsWithPrices;
    struct SteamInventoryDefProperty;
    struct SteamInventoryItemPrice;
    struct SteamInventoryResultReady;
    struct SteamInventoryFullUpdate;
    struct SteamInventoryDefinitionUpdate;
    struct SteamInventoryStartPurchaseResult;
    struct SteamInventoryRequestPricesResult;
    struct SteamRemoteStorageFileNameAndSize;
    struct SteamRemoteStorageQuota;
    struct SteamRemoteStorageUgcDetails;
    struct SteamRemoteStorageFileShareResult;
    struct SteamRemoteStorageDownloadUgcResult;
    struct SteamRemoteStoragePublishedFileSubscribed;
    struct SteamRemoteStoragePublishedFileUnsubscribed;
    struct SteamRemoteStorageLocalFileChange;
    struct SteamRemoteStoragePublishFileResult;
    struct SteamRemoteStorageUpdatePublishedFileResult;
    struct SteamRemoteStorageSubscribePublishedFileResult;
    struct SteamRemoteStorageUnsubscribePublishedFileResult;
    struct SteamMatchmakingLobbyCreated;
    struct SteamMatchmakingLobbyEnter;
    struct SteamMatchmakingLobbyMatchList;
    struct SteamMatchmakingLobbyDataUpdate;
    struct SteamMatchmakingLobbyChatUpdate;
    struct SteamMatchmakingLobbyChatMsg;
    struct SteamMatchmakingLobbyGameCreated;
    struct SteamMatchmakingLobbyInvite;
    struct SteamMatchmakingLobbyChatEntry;
    struct SteamMatchmakingLobbyGameServer;
    struct SteamNetworkingMessagesSessionRequest;
    struct SteamNetworkingMessagesSessionFailed;
    struct SteamNetworkingMessagesReceived;
    struct SteamNetworkingSocketsConnectionInfo;
    struct SteamNetworkingSocketsReceived;
    struct SteamPartiesAvailableBeaconLocationCount;
    struct SteamPartiesAvailableBeaconLocations;
    struct SteamPartiesCreateBeaconResult;
    struct SteamPartiesJoinPartyResult;
    struct SteamPartiesChangeNumOpenSlotsResult;
    struct SteamPartiesReservationNotification;
    struct SteamPartiesBeaconDetails;
    struct SteamNetworkingSocketsStatusChanged;

    struct SteamId
    {
        std::uint64_t id64;
        std::uint32_t account_id;
        std::uint32_t account_instance;
        gm_enums::SteamApiUniverse universe;
        gm_enums::SteamApiAccountType account_type;
        bool is_valid;
        bool is_lobby;
        bool is_individual;
        bool is_game_server;
        bool is_anon_game_server;
        bool is_anon_user;
        bool is_content_server;
        bool is_clan;
        bool is_chat;
    };

    struct SteamFriendsGetFollowerCountResult
    {
        std::int32_t result;
        std::uint64_t steam_id;
        std::int32_t count;
    };

    struct SteamFriendsIsFollowingResult
    {
        std::int32_t result;
        std::uint64_t steam_id;
        bool is_following;
    };

    struct SteamFriendsEnumerateFollowingListResult
    {
        std::int32_t result;
        std::vector<std::uint64_t> steam_ids;
        std::int32_t results_returned;
        std::int32_t total_result_count;
    };

    struct SteamFriendsRequestClanOfficerListResult
    {
        std::int32_t result;
        std::uint64_t clan_id;
        std::int32_t officers;
    };

    struct SteamFriendsDownloadClanActivityCountsResult
    {
        std::int32_t result;
    };

    struct SteamFriendsAvatarImageLoaded
    {
        std::uint64_t steam_id_64;
        std::int32_t image_handle;
        std::int32_t width;
        std::int32_t height;
    };

    struct SteamFriendsClanActivityCounts
    {
        bool ok;
        std::int32_t online;
        std::int32_t in_game;
        std::int32_t chatting;
    };

    struct SteamFriendsClanChatMessage
    {
        std::int32_t bytes_copied;
        std::string text;
        gm_enums::SteamFriendsChatEntryType entry_type;
        std::uint64_t chatter_steam_id_64;
    };

    struct SteamFriendsFriendGamePlayed
    {
        bool ok;
        std::uint64_t game_id;
        std::uint32_t game_ip_v4;
        std::uint32_t game_port;
        std::uint32_t query_port;
        std::uint64_t lobby_steam_id_64;
    };

    struct SteamFriendsFriendMessage
    {
        std::int32_t bytes_copied;
        gm_enums::SteamFriendsChatEntryType entry_type;
        std::string data;
    };

    struct SteamFriendsPersonaStateChange
    {
        std::uint64_t steam_id;
        std::int32_t change_flags;
    };

    struct SteamFriendsGameOverlayActivated
    {
        bool active;
    };

    struct SteamFriendsGameRichPresenceJoinRequested
    {
        std::uint64_t steam_id_friend;
        std::string connect_string;
    };

    struct SteamFriendsGameLobbyJoinRequested
    {
        std::uint64_t steam_id_friend;
        std::uint64_t steam_id_lobby;
    };

    struct SteamFriendsFriendRichPresenceUpdate
    {
        std::uint64_t steam_id_friend;
        std::uint32_t app_id;
    };

    struct SteamFriendsGameServerChangeRequested
    {
        std::string server;
        std::string password;
    };

    struct SteamAppsFileDetailsResult
    {
        std::int32_t result;
        std::int32_t file_size;
        std::int32_t flags;
        std::string sha1;
    };

    struct SteamAppsDlcData
    {
        bool ok;
        std::uint32_t app_id;
        bool available;
        std::string name;
    };

    struct SteamAppsTimedTrialStatus
    {
        bool ok;
        std::uint32_t seconds_allowed;
        std::uint32_t seconds_played;
    };

    struct SteamAppsInstallDir
    {
        std::uint32_t bytes_copied;
        std::string path;
    };

    struct SteamAppsBetaName
    {
        bool ok;
        std::string name;
    };

    struct SteamAppsNumBetas
    {
        std::int32_t total;
        std::int32_t available;
        std::int32_t private_count;
    };

    struct SteamAppsBetaInfo
    {
        bool ok;
        std::uint32_t flags;
        std::uint32_t build_id;
        std::string beta_name;
        std::string description;
    };

    struct SteamAppsDlcDownloadProgress
    {
        bool ok;
        std::uint64_t bytes_downloaded;
        std::uint64_t bytes_total;
    };

    struct SteamAppsLaunchCommandLine
    {
        std::int32_t bytes_copied;
        std::string command_line;
    };

    struct SteamAppsInstallSize
    {
        bool ok;
        std::uint64_t bytes_install_size;
        std::uint64_t bytes_download_size;
    };

    struct SteamAppsDlcInstallDir
    {
        std::uint32_t bytes_copied;
        std::string path;
    };

    struct SteamAppsLanguageInfo
    {
        bool ok;
        std::string language_name;
        std::string language_code;
    };

    struct SteamAppsDlcInstalled
    {
        std::uint32_t app_id;
    };

    struct SteamScreenshotsScreenshotReady
    {
        std::uint32_t screenshot_handle;
        gm_enums::SteamApiResult result;
    };

    struct SteamUserStoreAuthUrlResponse
    {
        std::int32_t result;
        std::string url;
    };

    struct SteamUserEncryptedAppTicketResponse
    {
        std::int32_t result;
    };

    struct SteamUserDurationControl
    {
        std::int32_t result;
        std::uint32_t app_id;
        bool applicable;
        std::int32_t csecs_last_5h;
        std::int32_t progress;
        std::int32_t notification;
    };

    struct SteamUserMarketEligibilityResponse
    {
        bool allowed;
        std::int32_t not_allowed_reason;
        std::uint32_t allowed_at_time;
        std::uint32_t steam_purchase_time;
        std::uint32_t day_steam_guard_required_days;
        std::uint32_t day_new_device_cooldown;
    };

    struct SteamNetworkingIdentity
    {
        gm_enums::SteamNetworkingIdentityType type;
        std::uint64_t steam_id;
        std::string ip;
        std::uint32_t port;
        std::string generic_string;
    };

    struct SteamUserAuthSessionTicket
    {
        std::uint32_t auth_ticket_handle;
        std::uint32_t ticket_size;
    };

    struct SteamUserAvailableVoice
    {
        gm_enums::SteamApiVoiceResult result;
        std::uint32_t compressed_bytes;
        std::uint32_t uncompressed_bytes;
    };

    struct SteamUserGetVoiceResult
    {
        gm_enums::SteamApiVoiceResult result;
        std::uint32_t written_compressed;
        std::uint32_t written_uncompressed;
    };

    struct SteamUserGameConnectionToken
    {
        bool ok;
        std::int32_t bytes_written;
    };

    struct SteamUserDataFolder
    {
        bool ok;
        std::string path;
    };

    struct SteamUserEncryptedAppTicket
    {
        bool ok;
        std::uint32_t ticket_size;
    };

    struct SteamUserSteamServersConnected
    {
        std::int32_t dummy;
    };

    struct SteamUserSteamServersDisconnected
    {
        std::int32_t result;
    };

    struct SteamUserSteamServerConnectFailure
    {
        std::int32_t result;
        bool still_retrying;
    };

    struct SteamUserClientGameServerDeny
    {
        std::uint32_t app_id;
        std::uint32_t game_server_ip;
        std::uint32_t game_server_port;
        bool secure;
        std::int32_t reason;
    };

    struct SteamUserLicensesUpdated
    {
        std::int32_t dummy;
    };

    struct SteamUserMicroTxnAuthorizationResponse
    {
        std::uint32_t app_id;
        std::uint64_t order_id;
        bool authorized;
    };

    struct SteamUtilsApiCallResult
    {
        bool ok;
        bool failed;
    };

    struct SteamUtilsCheckFileSignatureResult
    {
        std::int32_t result;
    };

    struct SteamUtilsLowBatteryPower
    {
        std::uint32_t minutes_battery_left;
    };

    struct SteamUtilsSteamApiCallCompleted
    {
        std::uint64_t async_call;
        std::int32_t callback_id;
        std::uint32_t param_size;
    };

    struct SteamUtilsCserIpPort
    {
        bool ok;
        std::uint32_t ip_v4;
        std::uint32_t port;
    };

    struct SteamUtilsGamepadTextInput
    {
        bool ok;
        std::string text;
    };

    struct SteamUtilsImageSize
    {
        bool ok;
        std::uint32_t width;
        std::uint32_t height;
    };

    struct SteamUtilsApiCallCompleted
    {
        bool ok;
        bool failed;
    };

    struct SteamUtilsFilterTextResult
    {
        bool ok;
        std::int32_t characters_filtered;
        std::string filtered_text;
    };

    struct SteamUtilsGamepadTextInputDismissed
    {
        bool submitted;
        std::uint32_t submitted_text_length;
    };

    struct SteamUtilsFloatingGamepadTextInputDismissed
    {
        bool submitted;
    };

    struct SteamUtilsWarningMessage
    {
        std::int32_t severity;
        std::string text;
    };

    struct SteamUgcItemDownloadInfo
    {
        bool ok;
        std::uint64_t bytes_downloaded;
        std::uint64_t bytes_total;
    };

    struct SteamUgcItemInstallInfo
    {
        bool ok;
        std::uint64_t size_on_disk;
        std::string folder;
        std::uint32_t timestamp;
    };

    struct SteamUgcItemUpdateProgress
    {
        std::int32_t status;
        std::uint64_t bytes_processed;
        std::uint64_t bytes_total;
    };

    struct SteamUgcQueryResult
    {
        bool ok;
        std::uint64_t published_file_id;
        std::string title;
        std::string description;
        std::uint32_t time_created;
        std::uint32_t time_updated;
        std::int32_t visibility;
        bool banned;
        bool accepted_for_use;
        bool tags_truncated;
    };

    struct SteamUgcQueryPreviewUrl
    {
        bool ok;
        std::string url;
    };

    struct SteamUgcQueryMetadata
    {
        bool ok;
        std::string metadata;
    };

    struct SteamUgcAdditionalPreview
    {
        bool ok;
        std::string url_or_video_id;
        std::int32_t preview_type;
    };

    struct SteamUgcKeyValueTag
    {
        bool ok;
        std::string key;
        std::string value;
    };

    struct SteamUgcItemInstalled
    {
        std::uint32_t app_id;
        std::uint64_t published_file_id;
    };

    struct SteamUgcUserSubscribedItemsListChanged
    {
        std::uint32_t app_id;
    };

    struct SteamUgcFileSubscribed
    {
        std::uint32_t app_id;
        std::uint64_t published_file_id;
    };

    struct SteamUgcFileUnsubscribed
    {
        std::uint32_t app_id;
        std::uint64_t published_file_id;
    };

    struct SteamUgcQueryCompleted
    {
        std::uint64_t query_handle;
        std::int32_t result;
        std::uint32_t num_results_returned;
        std::uint32_t total_matching_results;
        bool cached_data;
    };

    struct SteamUgcCreateItemResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
        bool legal_agreement_required;
    };

    struct SteamUgcSubmitItemUpdateResult
    {
        std::int32_t result;
        bool legal_agreement_required;
    };

    struct SteamUgcSubscribeItemResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
    };

    struct SteamUgcUnsubscribeItemResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
    };

    struct SteamUgcFavoriteItemsListChanged
    {
        std::int32_t result;
        std::uint64_t published_file_id;
        bool was_add_request;
    };

    struct SteamUgcSetUserItemVoteResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
        bool vote_up;
    };

    struct SteamUgcGetUserItemVoteResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
        bool voted_up;
        bool voted_down;
        bool vote_skipped;
    };

    struct SteamUgcRequestItemDetailsResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
        bool cached_data;
    };

    struct SteamUgcSupportedGameVersionData
    {
        bool ok;
        std::string game_branch_min;
        std::string game_branch_max;
    };

    struct SteamUgcDeleteItemResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
    };

    struct SteamUgcDownloadItemResult
    {
        std::uint32_t app_id;
        std::uint64_t published_file_id;
        std::int32_t result;
    };

    struct SteamInputAnalogActionData
    {
        std::int32_t mode;
        float x;
        float y;
        bool active;
    };

    struct SteamInputDigitalActionData
    {
        bool state;
        bool active;
    };

    struct SteamInputMotionData
    {
        float rot_quat_x;
        float rot_quat_y;
        float rot_quat_z;
        float rot_quat_w;
        float pos_accel_x;
        float pos_accel_y;
        float pos_accel_z;
        float rot_vel_x;
        float rot_vel_y;
        float rot_vel_z;
    };

    struct SteamInputActiveActionSetLayers
    {
        std::int32_t count;
        std::vector<std::uint64_t> handles;
    };

    struct SteamInputActionOrigins
    {
        std::int32_t count;
        std::vector<std::int32_t> origins;
    };

    struct SteamInputDeviceBindingRevision
    {
        bool ok;
        std::int32_t major;
        std::int32_t minor;
    };

    struct SteamInputDeviceEvent
    {
        std::uint64_t controller_handle;
    };

    struct SteamInputActionSetChanged
    {
        std::uint64_t controller_handle;
        std::uint64_t action_set_handle;
    };

    struct SteamInputControllerBattery
    {
        std::uint64_t controller_handle;
        std::int32_t battery_percent;
    };

    struct SteamUserStatsAchievementAndUnlockTime
    {
        bool achieved;
        std::uint32_t unlock_time;
    };

    struct SteamUserStatsAchievementAndProgress
    {
        bool achieved;
        std::uint32_t cur_progress;
        std::uint32_t max_progress;
    };

    struct SteamUserStatsAchievementNamesAndPercent
    {
        std::string name;
        float percent;
    };

    struct SteamUserStatsMostAchievedAchievementInfo
    {
        bool ok;
        std::string name;
        float percent;
        bool achieved;
    };

    struct SteamUserStatsNumAchievementsAndHours
    {
        std::uint32_t num_achievements;
        float hours;
    };

    struct SteamUserStatsStatInt
    {
        bool ok;
        std::int32_t data;
    };

    struct SteamUserStatsStatFloat
    {
        bool ok;
        float data;
    };

    struct SteamUserStatsUserAchievement
    {
        bool ok;
        bool achieved;
    };

    struct SteamUserStatsGlobalStatInt64
    {
        bool ok;
        std::int64_t data;
    };

    struct SteamUserStatsGlobalStatDouble
    {
        bool ok;
        double data;
    };

    struct SteamUserStatsGlobalStatHistoryInt64
    {
        bool ok;
        std::vector<std::int64_t> data;
    };

    struct SteamUserStatsGlobalStatHistoryDouble
    {
        bool ok;
        std::vector<double> data;
    };

    struct SteamUserStatsDownloadedLeaderboardEntry
    {
        bool ok;
        std::uint64_t steam_id_user;
        std::int32_t global_rank;
        std::int32_t score;
        std::int32_t details_count;
        std::int32_t details_written;
        std::int32_t bytes_written;
    };

    struct SteamUserStatsRequestUserStatsResult
    {
        std::uint64_t game_id;
        std::uint64_t steam_id_user;
        std::int32_t result;
    };

    struct SteamUserStatsLeaderboardFindResult
    {
        std::uint64_t leaderboard_handle;
        bool leaderboard_found;
    };

    struct SteamUserStatsScoresDownloadedResult
    {
        std::uint64_t leaderboard_handle;
        std::uint64_t entries_handle;
        std::uint32_t entry_count;
    };

    struct SteamUserStatsScoreUploadedResult
    {
        bool success;
        std::uint64_t leaderboard_handle;
        std::int32_t score;
        bool score_changed;
        std::int32_t global_rank_new;
        std::int32_t global_rank_previous;
    };

    struct SteamUserStatsNumberOfCurrentPlayersResult
    {
        bool success;
        std::int32_t players;
    };

    struct SteamUserStatsGlobalAchievementPercentagesReadyResult
    {
        std::uint64_t game_id;
        std::int32_t result;
    };

    struct SteamUserStatsGlobalStatsReceivedResult
    {
        std::uint64_t game_id;
        std::int32_t result;
    };

    struct SteamUserStatsAttachLeaderboardUgcResult
    {
        bool ok;
        std::int32_t result;
        std::uint64_t leaderboard_handle;
    };

    struct SteamUserStatsUserStatsReceived
    {
        std::uint64_t game_id;
        std::uint64_t steam_id_user;
        std::int32_t result;
    };

    struct SteamUserStatsUserStatsStored
    {
        std::uint64_t game_id;
        std::int32_t result;
    };

    struct SteamUserStatsUserAchievementStored
    {
        std::uint64_t game_id;
        std::string achievement_name;
        std::int32_t cur_progress;
        std::int32_t max_progress;
    };

    struct SteamUserStatsIntMinMax
    {
        std::int32_t min;
        std::int32_t max;
        bool ok;
    };

    struct SteamUserStatsFloatMinMax
    {
        double min;
        double max;
        bool ok;
    };

    struct SteamMusicPlaybackStatusHasChanged
    {
        std::int32_t playback_status;
    };

    struct SteamMusicVolumeHasChanged
    {
        float volume;
    };

    struct SteamTimelineGamePhaseRecordingExists
    {
        std::string phase_id;
        std::uint64_t recording_ms;
        std::uint64_t longest_clip_ms;
        std::uint32_t clip_count;
        std::uint32_t screenshot_count;
    };

    struct SteamTimelineEventRecordingExists
    {
        std::uint64_t event_id;
        bool recording_exists;
    };

    struct SteamInventoryResultItems
    {
        bool ok;
        std::uint32_t count;
        std::vector<std::uint64_t> item_instance_ids;
        std::vector<std::uint32_t> item_def_ids;
        std::vector<std::uint32_t> quantities;
        std::vector<std::uint32_t> flags;
    };

    struct SteamInventoryDeserializeResult
    {
        bool ok;
        std::int32_t result_handle;
        gm_enums::SteamApiResult status;
    };

    struct SteamInventorySerializeResult
    {
        bool ok;
        std::uint32_t bytes_written;
    };

    struct SteamInventoryItemProperty
    {
        bool ok;
        std::string value;
    };

    struct SteamInventoryItemsWithPrices
    {
        bool ok;
        std::uint32_t count;
        std::vector<std::uint32_t> item_def_ids;
        std::vector<std::int64_t> current_prices;
        std::vector<std::int64_t> base_prices;
    };

    struct SteamInventoryDefProperty
    {
        bool ok;
        std::string value;
    };

    struct SteamInventoryItemPrice
    {
        bool ok;
        std::uint64_t current_price;
        std::uint64_t base_price;
    };

    struct SteamInventoryResultReady
    {
        std::int32_t result_handle;
        std::int32_t result;
    };

    struct SteamInventoryFullUpdate
    {
        std::int32_t result_handle;
    };

    struct SteamInventoryDefinitionUpdate
    {
        std::int32_t dummy;
    };

    struct SteamInventoryStartPurchaseResult
    {
        std::int32_t result;
        std::uint64_t order_id;
        std::uint64_t transaction_id;
    };

    struct SteamInventoryRequestPricesResult
    {
        std::int32_t result;
        std::string currency;
    };

    struct SteamRemoteStorageFileNameAndSize
    {
        bool ok;
        std::string file_name;
        std::int32_t file_size;
    };

    struct SteamRemoteStorageQuota
    {
        bool ok;
        std::uint64_t total_bytes;
        std::uint64_t available_bytes;
    };

    struct SteamRemoteStorageUgcDetails
    {
        bool ok;
        std::uint64_t ugc_handle;
        std::uint32_t app_id;
        std::int32_t size_in_bytes;
        std::string file_name;
        std::uint64_t steam_id_owner;
    };

    struct SteamRemoteStorageFileShareResult
    {
        std::int32_t result;
        std::uint64_t ugc_handle;
        std::string file_name;
    };

    struct SteamRemoteStorageDownloadUgcResult
    {
        std::int32_t result;
        std::uint64_t ugc_handle;
        std::uint32_t app_id;
        std::int32_t size_in_bytes;
        std::string file_name;
        std::uint64_t steam_id_owner;
    };

    struct SteamRemoteStoragePublishedFileSubscribed
    {
        std::uint32_t app_id;
        std::uint64_t published_file_id;
    };

    struct SteamRemoteStoragePublishedFileUnsubscribed
    {
        std::uint32_t app_id;
        std::uint64_t published_file_id;
    };

    struct SteamRemoteStorageLocalFileChange
    {
        std::int32_t dummy;
    };

    struct SteamRemoteStoragePublishFileResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
        bool user_needs_to_accept_wla;
    };

    struct SteamRemoteStorageUpdatePublishedFileResult
    {
        std::int32_t result;
        bool user_needs_to_accept_wla;
    };

    struct SteamRemoteStorageSubscribePublishedFileResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
    };

    struct SteamRemoteStorageUnsubscribePublishedFileResult
    {
        std::int32_t result;
        std::uint64_t published_file_id;
    };

    struct SteamMatchmakingLobbyCreated
    {
        std::int32_t result;
        std::uint64_t lobby_id;
    };

    struct SteamMatchmakingLobbyEnter
    {
        std::uint64_t lobby_id;
        std::uint32_t chat_permissions;
        bool locked;
        std::uint32_t response;
    };

    struct SteamMatchmakingLobbyMatchList
    {
        std::uint32_t lobbies_count;
    };

    struct SteamMatchmakingLobbyDataUpdate
    {
        std::uint64_t lobby_id;
        std::uint64_t member_id;
        bool success;
    };

    struct SteamMatchmakingLobbyChatUpdate
    {
        std::uint64_t lobby_id;
        std::uint64_t user_changed_id;
        std::uint64_t making_change_id;
        std::uint32_t chat_member_state_change;
    };

    struct SteamMatchmakingLobbyChatMsg
    {
        std::uint64_t lobby_id;
        std::uint64_t sender_id;
        std::int32_t chat_entry_type;
        std::uint32_t message_size;
    };

    struct SteamMatchmakingLobbyGameCreated
    {
        std::uint64_t lobby_id;
        std::uint32_t server_ip;
        std::uint32_t server_port;
        std::uint64_t game_server_id;
    };

    struct SteamMatchmakingLobbyInvite
    {
        std::uint64_t inviter_id;
        std::uint64_t lobby_id;
        std::string game_id;
    };

    struct SteamMatchmakingLobbyChatEntry
    {
        bool ok;
        std::uint32_t bytes;
        std::uint64_t sender_id;
        std::int32_t entry_type;
    };

    struct SteamMatchmakingLobbyGameServer
    {
        bool ok;
        std::uint32_t ip;
        std::uint32_t port;
        std::uint64_t steam_id_gs;
    };

    struct SteamNetworkingMessagesSessionRequest
    {
        std::uint64_t steam_id_remote;
    };

    struct SteamNetworkingMessagesSessionFailed
    {
        std::uint64_t steam_id_remote;
        std::int32_t end_reason;
        std::string debug_msg;
    };

    struct SteamNetworkingMessagesReceived
    {
        bool ok;
        std::uint64_t steam_id_remote;
        std::int32_t channel;
        std::uint32_t bytes_written;
        std::int32_t send_flags;
    };

    struct SteamNetworkingSocketsConnectionInfo
    {
        std::uint64_t user_data;
        std::int32_t end_reason;
        std::string end_debug;
        std::string connection_description;
        std::int32_t flags;
        std::int32_t state;
        std::uint64_t steam_id_remote;
        std::string addr_remote;
    };

    struct SteamNetworkingSocketsReceived
    {
        bool ok;
        std::uint32_t conn;
        std::uint32_t bytes_written;
        std::int32_t flags;
    };

    struct SteamPartiesAvailableBeaconLocationCount
    {
        bool ok;
        std::uint32_t count;
    };

    struct SteamPartiesAvailableBeaconLocations
    {
        bool ok;
        std::uint32_t count;
        std::vector<gm_enums::SteamPartiesBeaconLocationType> location_types;
        std::vector<std::uint64_t> location_ids;
    };

    struct SteamPartiesCreateBeaconResult
    {
        std::int32_t result;
        std::uint64_t beacon_id;
    };

    struct SteamPartiesJoinPartyResult
    {
        std::int32_t result;
        std::uint64_t beacon_id;
        std::uint64_t beacon_owner_steam_id;
        std::string connect_string;
    };

    struct SteamPartiesChangeNumOpenSlotsResult
    {
        std::int32_t result;
    };

    struct SteamPartiesReservationNotification
    {
        std::uint64_t beacon_id;
        std::uint64_t joiner_steam_id;
    };

    struct SteamPartiesBeaconDetails
    {
        bool ok;
        std::uint64_t beacon_owner_steam_id;
        gm_enums::SteamPartiesBeaconLocationType location_type;
        std::uint64_t location_id;
        std::string metadata;
    };

    struct SteamNetworkingSocketsStatusChanged
    {
        std::uint32_t conn;
        std::int32_t old_state;
        gm_structs::SteamNetworkingSocketsConnectionInfo info;
    };

}

namespace gm::wire::codec
{
    template<>
    inline void writeValue<gm_structs::SteamId>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamId& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.id64);
        gm::wire::codec::writeValue(_buf, obj.account_id);
        gm::wire::codec::writeValue(_buf, obj.account_instance);
        gm::wire::codec::writeValue(_buf, obj.universe);
        gm::wire::codec::writeValue(_buf, obj.account_type);
        gm::wire::codec::writeValue(_buf, obj.is_valid);
        gm::wire::codec::writeValue(_buf, obj.is_lobby);
        gm::wire::codec::writeValue(_buf, obj.is_individual);
        gm::wire::codec::writeValue(_buf, obj.is_game_server);
        gm::wire::codec::writeValue(_buf, obj.is_anon_game_server);
        gm::wire::codec::writeValue(_buf, obj.is_anon_user);
        gm::wire::codec::writeValue(_buf, obj.is_content_server);
        gm::wire::codec::writeValue(_buf, obj.is_clan);
        gm::wire::codec::writeValue(_buf, obj.is_chat);
    }

    template<>
    inline gm_structs::SteamId readValue<gm_structs::SteamId>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamId obj;
        obj.id64 = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.account_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.account_instance = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.universe = gm::wire::codec::readValue<gm_enums::SteamApiUniverse>(_buf);
        obj.account_type = gm::wire::codec::readValue<gm_enums::SteamApiAccountType>(_buf);
        obj.is_valid = gm::wire::codec::readValue<bool>(_buf);
        obj.is_lobby = gm::wire::codec::readValue<bool>(_buf);
        obj.is_individual = gm::wire::codec::readValue<bool>(_buf);
        obj.is_game_server = gm::wire::codec::readValue<bool>(_buf);
        obj.is_anon_game_server = gm::wire::codec::readValue<bool>(_buf);
        obj.is_anon_user = gm::wire::codec::readValue<bool>(_buf);
        obj.is_content_server = gm::wire::codec::readValue<bool>(_buf);
        obj.is_clan = gm::wire::codec::readValue<bool>(_buf);
        obj.is_chat = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsGetFollowerCountResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsGetFollowerCountResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.steam_id);
        gm::wire::codec::writeValue(_buf, obj.count);
    }

    template<>
    inline gm_structs::SteamFriendsGetFollowerCountResult readValue<gm_structs::SteamFriendsGetFollowerCountResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsGetFollowerCountResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.steam_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.count = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsIsFollowingResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsIsFollowingResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.steam_id);
        gm::wire::codec::writeValue(_buf, obj.is_following);
    }

    template<>
    inline gm_structs::SteamFriendsIsFollowingResult readValue<gm_structs::SteamFriendsIsFollowingResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsIsFollowingResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.steam_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.is_following = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsEnumerateFollowingListResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsEnumerateFollowingListResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.steam_ids);
        gm::wire::codec::writeValue(_buf, obj.results_returned);
        gm::wire::codec::writeValue(_buf, obj.total_result_count);
    }

    template<>
    inline gm_structs::SteamFriendsEnumerateFollowingListResult readValue<gm_structs::SteamFriendsEnumerateFollowingListResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsEnumerateFollowingListResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.steam_ids = gm::wire::codec::readVector<std::uint64_t>(_buf);
        obj.results_returned = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.total_result_count = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsRequestClanOfficerListResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsRequestClanOfficerListResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.clan_id);
        gm::wire::codec::writeValue(_buf, obj.officers);
    }

    template<>
    inline gm_structs::SteamFriendsRequestClanOfficerListResult readValue<gm_structs::SteamFriendsRequestClanOfficerListResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsRequestClanOfficerListResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.clan_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.officers = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsDownloadClanActivityCountsResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsDownloadClanActivityCountsResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamFriendsDownloadClanActivityCountsResult readValue<gm_structs::SteamFriendsDownloadClanActivityCountsResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsDownloadClanActivityCountsResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsAvatarImageLoaded>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsAvatarImageLoaded& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.steam_id_64);
        gm::wire::codec::writeValue(_buf, obj.image_handle);
        gm::wire::codec::writeValue(_buf, obj.width);
        gm::wire::codec::writeValue(_buf, obj.height);
    }

    template<>
    inline gm_structs::SteamFriendsAvatarImageLoaded readValue<gm_structs::SteamFriendsAvatarImageLoaded>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsAvatarImageLoaded obj;
        obj.steam_id_64 = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.image_handle = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.width = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.height = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsClanActivityCounts>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsClanActivityCounts& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.online);
        gm::wire::codec::writeValue(_buf, obj.in_game);
        gm::wire::codec::writeValue(_buf, obj.chatting);
    }

    template<>
    inline gm_structs::SteamFriendsClanActivityCounts readValue<gm_structs::SteamFriendsClanActivityCounts>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsClanActivityCounts obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.online = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.in_game = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.chatting = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsClanChatMessage>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsClanChatMessage& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.bytes_copied);
        gm::wire::codec::writeValue(_buf, obj.text);
        gm::wire::codec::writeValue(_buf, obj.entry_type);
        gm::wire::codec::writeValue(_buf, obj.chatter_steam_id_64);
    }

    template<>
    inline gm_structs::SteamFriendsClanChatMessage readValue<gm_structs::SteamFriendsClanChatMessage>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsClanChatMessage obj;
        obj.bytes_copied = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.text = gm::wire::codec::readValue<std::string>(_buf);
        obj.entry_type = gm::wire::codec::readValue<gm_enums::SteamFriendsChatEntryType>(_buf);
        obj.chatter_steam_id_64 = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsFriendGamePlayed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsFriendGamePlayed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.game_id);
        gm::wire::codec::writeValue(_buf, obj.game_ip_v4);
        gm::wire::codec::writeValue(_buf, obj.game_port);
        gm::wire::codec::writeValue(_buf, obj.query_port);
        gm::wire::codec::writeValue(_buf, obj.lobby_steam_id_64);
    }

    template<>
    inline gm_structs::SteamFriendsFriendGamePlayed readValue<gm_structs::SteamFriendsFriendGamePlayed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsFriendGamePlayed obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.game_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.game_ip_v4 = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.game_port = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.query_port = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.lobby_steam_id_64 = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsFriendMessage>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsFriendMessage& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.bytes_copied);
        gm::wire::codec::writeValue(_buf, obj.entry_type);
        gm::wire::codec::writeValue(_buf, obj.data);
    }

    template<>
    inline gm_structs::SteamFriendsFriendMessage readValue<gm_structs::SteamFriendsFriendMessage>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsFriendMessage obj;
        obj.bytes_copied = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.entry_type = gm::wire::codec::readValue<gm_enums::SteamFriendsChatEntryType>(_buf);
        obj.data = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsPersonaStateChange>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsPersonaStateChange& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.steam_id);
        gm::wire::codec::writeValue(_buf, obj.change_flags);
    }

    template<>
    inline gm_structs::SteamFriendsPersonaStateChange readValue<gm_structs::SteamFriendsPersonaStateChange>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsPersonaStateChange obj;
        obj.steam_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.change_flags = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsGameOverlayActivated>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsGameOverlayActivated& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.active);
    }

    template<>
    inline gm_structs::SteamFriendsGameOverlayActivated readValue<gm_structs::SteamFriendsGameOverlayActivated>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsGameOverlayActivated obj;
        obj.active = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsGameRichPresenceJoinRequested>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsGameRichPresenceJoinRequested& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.steam_id_friend);
        gm::wire::codec::writeValue(_buf, obj.connect_string);
    }

    template<>
    inline gm_structs::SteamFriendsGameRichPresenceJoinRequested readValue<gm_structs::SteamFriendsGameRichPresenceJoinRequested>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsGameRichPresenceJoinRequested obj;
        obj.steam_id_friend = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.connect_string = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsGameLobbyJoinRequested>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsGameLobbyJoinRequested& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.steam_id_friend);
        gm::wire::codec::writeValue(_buf, obj.steam_id_lobby);
    }

    template<>
    inline gm_structs::SteamFriendsGameLobbyJoinRequested readValue<gm_structs::SteamFriendsGameLobbyJoinRequested>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsGameLobbyJoinRequested obj;
        obj.steam_id_friend = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.steam_id_lobby = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsFriendRichPresenceUpdate>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsFriendRichPresenceUpdate& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.steam_id_friend);
        gm::wire::codec::writeValue(_buf, obj.app_id);
    }

    template<>
    inline gm_structs::SteamFriendsFriendRichPresenceUpdate readValue<gm_structs::SteamFriendsFriendRichPresenceUpdate>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsFriendRichPresenceUpdate obj;
        obj.steam_id_friend = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamFriendsGameServerChangeRequested>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamFriendsGameServerChangeRequested& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.server);
        gm::wire::codec::writeValue(_buf, obj.password);
    }

    template<>
    inline gm_structs::SteamFriendsGameServerChangeRequested readValue<gm_structs::SteamFriendsGameServerChangeRequested>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamFriendsGameServerChangeRequested obj;
        obj.server = gm::wire::codec::readValue<std::string>(_buf);
        obj.password = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsFileDetailsResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsFileDetailsResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.file_size);
        gm::wire::codec::writeValue(_buf, obj.flags);
        gm::wire::codec::writeValue(_buf, obj.sha1);
    }

    template<>
    inline gm_structs::SteamAppsFileDetailsResult readValue<gm_structs::SteamAppsFileDetailsResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsFileDetailsResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.file_size = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.flags = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.sha1 = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsDlcData>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsDlcData& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.available);
        gm::wire::codec::writeValue(_buf, obj.name);
    }

    template<>
    inline gm_structs::SteamAppsDlcData readValue<gm_structs::SteamAppsDlcData>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsDlcData obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.available = gm::wire::codec::readValue<bool>(_buf);
        obj.name = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsTimedTrialStatus>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsTimedTrialStatus& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.seconds_allowed);
        gm::wire::codec::writeValue(_buf, obj.seconds_played);
    }

    template<>
    inline gm_structs::SteamAppsTimedTrialStatus readValue<gm_structs::SteamAppsTimedTrialStatus>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsTimedTrialStatus obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.seconds_allowed = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.seconds_played = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsInstallDir>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsInstallDir& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.bytes_copied);
        gm::wire::codec::writeValue(_buf, obj.path);
    }

    template<>
    inline gm_structs::SteamAppsInstallDir readValue<gm_structs::SteamAppsInstallDir>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsInstallDir obj;
        obj.bytes_copied = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.path = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsBetaName>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsBetaName& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.name);
    }

    template<>
    inline gm_structs::SteamAppsBetaName readValue<gm_structs::SteamAppsBetaName>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsBetaName obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.name = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsNumBetas>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsNumBetas& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.total);
        gm::wire::codec::writeValue(_buf, obj.available);
        gm::wire::codec::writeValue(_buf, obj.private_count);
    }

    template<>
    inline gm_structs::SteamAppsNumBetas readValue<gm_structs::SteamAppsNumBetas>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsNumBetas obj;
        obj.total = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.available = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.private_count = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsBetaInfo>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsBetaInfo& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.flags);
        gm::wire::codec::writeValue(_buf, obj.build_id);
        gm::wire::codec::writeValue(_buf, obj.beta_name);
        gm::wire::codec::writeValue(_buf, obj.description);
    }

    template<>
    inline gm_structs::SteamAppsBetaInfo readValue<gm_structs::SteamAppsBetaInfo>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsBetaInfo obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.flags = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.build_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.beta_name = gm::wire::codec::readValue<std::string>(_buf);
        obj.description = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsDlcDownloadProgress>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsDlcDownloadProgress& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.bytes_downloaded);
        gm::wire::codec::writeValue(_buf, obj.bytes_total);
    }

    template<>
    inline gm_structs::SteamAppsDlcDownloadProgress readValue<gm_structs::SteamAppsDlcDownloadProgress>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsDlcDownloadProgress obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.bytes_downloaded = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.bytes_total = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsLaunchCommandLine>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsLaunchCommandLine& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.bytes_copied);
        gm::wire::codec::writeValue(_buf, obj.command_line);
    }

    template<>
    inline gm_structs::SteamAppsLaunchCommandLine readValue<gm_structs::SteamAppsLaunchCommandLine>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsLaunchCommandLine obj;
        obj.bytes_copied = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.command_line = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsInstallSize>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsInstallSize& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.bytes_install_size);
        gm::wire::codec::writeValue(_buf, obj.bytes_download_size);
    }

    template<>
    inline gm_structs::SteamAppsInstallSize readValue<gm_structs::SteamAppsInstallSize>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsInstallSize obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.bytes_install_size = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.bytes_download_size = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsDlcInstallDir>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsDlcInstallDir& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.bytes_copied);
        gm::wire::codec::writeValue(_buf, obj.path);
    }

    template<>
    inline gm_structs::SteamAppsDlcInstallDir readValue<gm_structs::SteamAppsDlcInstallDir>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsDlcInstallDir obj;
        obj.bytes_copied = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.path = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsLanguageInfo>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsLanguageInfo& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.language_name);
        gm::wire::codec::writeValue(_buf, obj.language_code);
    }

    template<>
    inline gm_structs::SteamAppsLanguageInfo readValue<gm_structs::SteamAppsLanguageInfo>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsLanguageInfo obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.language_name = gm::wire::codec::readValue<std::string>(_buf);
        obj.language_code = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamAppsDlcInstalled>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamAppsDlcInstalled& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
    }

    template<>
    inline gm_structs::SteamAppsDlcInstalled readValue<gm_structs::SteamAppsDlcInstalled>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamAppsDlcInstalled obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamScreenshotsScreenshotReady>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamScreenshotsScreenshotReady& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.screenshot_handle);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamScreenshotsScreenshotReady readValue<gm_structs::SteamScreenshotsScreenshotReady>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamScreenshotsScreenshotReady obj;
        obj.screenshot_handle = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.result = gm::wire::codec::readValue<gm_enums::SteamApiResult>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStoreAuthUrlResponse>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStoreAuthUrlResponse& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.url);
    }

    template<>
    inline gm_structs::SteamUserStoreAuthUrlResponse readValue<gm_structs::SteamUserStoreAuthUrlResponse>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStoreAuthUrlResponse obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.url = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserEncryptedAppTicketResponse>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserEncryptedAppTicketResponse& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUserEncryptedAppTicketResponse readValue<gm_structs::SteamUserEncryptedAppTicketResponse>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserEncryptedAppTicketResponse obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserDurationControl>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserDurationControl& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.applicable);
        gm::wire::codec::writeValue(_buf, obj.csecs_last_5h);
        gm::wire::codec::writeValue(_buf, obj.progress);
        gm::wire::codec::writeValue(_buf, obj.notification);
    }

    template<>
    inline gm_structs::SteamUserDurationControl readValue<gm_structs::SteamUserDurationControl>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserDurationControl obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.applicable = gm::wire::codec::readValue<bool>(_buf);
        obj.csecs_last_5h = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.progress = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.notification = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserMarketEligibilityResponse>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserMarketEligibilityResponse& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.allowed);
        gm::wire::codec::writeValue(_buf, obj.not_allowed_reason);
        gm::wire::codec::writeValue(_buf, obj.allowed_at_time);
        gm::wire::codec::writeValue(_buf, obj.steam_purchase_time);
        gm::wire::codec::writeValue(_buf, obj.day_steam_guard_required_days);
        gm::wire::codec::writeValue(_buf, obj.day_new_device_cooldown);
    }

    template<>
    inline gm_structs::SteamUserMarketEligibilityResponse readValue<gm_structs::SteamUserMarketEligibilityResponse>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserMarketEligibilityResponse obj;
        obj.allowed = gm::wire::codec::readValue<bool>(_buf);
        obj.not_allowed_reason = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.allowed_at_time = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.steam_purchase_time = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.day_steam_guard_required_days = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.day_new_device_cooldown = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamNetworkingIdentity>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamNetworkingIdentity& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.type);
        gm::wire::codec::writeValue(_buf, obj.steam_id);
        gm::wire::codec::writeValue(_buf, obj.ip);
        gm::wire::codec::writeValue(_buf, obj.port);
        gm::wire::codec::writeValue(_buf, obj.generic_string);
    }

    template<>
    inline gm_structs::SteamNetworkingIdentity readValue<gm_structs::SteamNetworkingIdentity>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamNetworkingIdentity obj;
        obj.type = gm::wire::codec::readValue<gm_enums::SteamNetworkingIdentityType>(_buf);
        obj.steam_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.ip = gm::wire::codec::readValue<std::string>(_buf);
        obj.port = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.generic_string = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserAuthSessionTicket>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserAuthSessionTicket& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.auth_ticket_handle);
        gm::wire::codec::writeValue(_buf, obj.ticket_size);
    }

    template<>
    inline gm_structs::SteamUserAuthSessionTicket readValue<gm_structs::SteamUserAuthSessionTicket>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserAuthSessionTicket obj;
        obj.auth_ticket_handle = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.ticket_size = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserAvailableVoice>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserAvailableVoice& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.compressed_bytes);
        gm::wire::codec::writeValue(_buf, obj.uncompressed_bytes);
    }

    template<>
    inline gm_structs::SteamUserAvailableVoice readValue<gm_structs::SteamUserAvailableVoice>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserAvailableVoice obj;
        obj.result = gm::wire::codec::readValue<gm_enums::SteamApiVoiceResult>(_buf);
        obj.compressed_bytes = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.uncompressed_bytes = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserGetVoiceResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserGetVoiceResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.written_compressed);
        gm::wire::codec::writeValue(_buf, obj.written_uncompressed);
    }

    template<>
    inline gm_structs::SteamUserGetVoiceResult readValue<gm_structs::SteamUserGetVoiceResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserGetVoiceResult obj;
        obj.result = gm::wire::codec::readValue<gm_enums::SteamApiVoiceResult>(_buf);
        obj.written_compressed = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.written_uncompressed = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserGameConnectionToken>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserGameConnectionToken& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.bytes_written);
    }

    template<>
    inline gm_structs::SteamUserGameConnectionToken readValue<gm_structs::SteamUserGameConnectionToken>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserGameConnectionToken obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.bytes_written = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserDataFolder>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserDataFolder& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.path);
    }

    template<>
    inline gm_structs::SteamUserDataFolder readValue<gm_structs::SteamUserDataFolder>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserDataFolder obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.path = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserEncryptedAppTicket>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserEncryptedAppTicket& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.ticket_size);
    }

    template<>
    inline gm_structs::SteamUserEncryptedAppTicket readValue<gm_structs::SteamUserEncryptedAppTicket>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserEncryptedAppTicket obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.ticket_size = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserSteamServersConnected>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserSteamServersConnected& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.dummy);
    }

    template<>
    inline gm_structs::SteamUserSteamServersConnected readValue<gm_structs::SteamUserSteamServersConnected>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserSteamServersConnected obj;
        obj.dummy = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserSteamServersDisconnected>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserSteamServersDisconnected& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUserSteamServersDisconnected readValue<gm_structs::SteamUserSteamServersDisconnected>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserSteamServersDisconnected obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserSteamServerConnectFailure>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserSteamServerConnectFailure& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.still_retrying);
    }

    template<>
    inline gm_structs::SteamUserSteamServerConnectFailure readValue<gm_structs::SteamUserSteamServerConnectFailure>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserSteamServerConnectFailure obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.still_retrying = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserClientGameServerDeny>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserClientGameServerDeny& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.game_server_ip);
        gm::wire::codec::writeValue(_buf, obj.game_server_port);
        gm::wire::codec::writeValue(_buf, obj.secure);
        gm::wire::codec::writeValue(_buf, obj.reason);
    }

    template<>
    inline gm_structs::SteamUserClientGameServerDeny readValue<gm_structs::SteamUserClientGameServerDeny>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserClientGameServerDeny obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.game_server_ip = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.game_server_port = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.secure = gm::wire::codec::readValue<bool>(_buf);
        obj.reason = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserLicensesUpdated>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserLicensesUpdated& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.dummy);
    }

    template<>
    inline gm_structs::SteamUserLicensesUpdated readValue<gm_structs::SteamUserLicensesUpdated>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserLicensesUpdated obj;
        obj.dummy = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserMicroTxnAuthorizationResponse>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserMicroTxnAuthorizationResponse& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.order_id);
        gm::wire::codec::writeValue(_buf, obj.authorized);
    }

    template<>
    inline gm_structs::SteamUserMicroTxnAuthorizationResponse readValue<gm_structs::SteamUserMicroTxnAuthorizationResponse>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserMicroTxnAuthorizationResponse obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.order_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.authorized = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsApiCallResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsApiCallResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.failed);
    }

    template<>
    inline gm_structs::SteamUtilsApiCallResult readValue<gm_structs::SteamUtilsApiCallResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsApiCallResult obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.failed = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsCheckFileSignatureResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsCheckFileSignatureResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUtilsCheckFileSignatureResult readValue<gm_structs::SteamUtilsCheckFileSignatureResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsCheckFileSignatureResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsLowBatteryPower>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsLowBatteryPower& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.minutes_battery_left);
    }

    template<>
    inline gm_structs::SteamUtilsLowBatteryPower readValue<gm_structs::SteamUtilsLowBatteryPower>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsLowBatteryPower obj;
        obj.minutes_battery_left = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsSteamApiCallCompleted>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsSteamApiCallCompleted& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.async_call);
        gm::wire::codec::writeValue(_buf, obj.callback_id);
        gm::wire::codec::writeValue(_buf, obj.param_size);
    }

    template<>
    inline gm_structs::SteamUtilsSteamApiCallCompleted readValue<gm_structs::SteamUtilsSteamApiCallCompleted>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsSteamApiCallCompleted obj;
        obj.async_call = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.callback_id = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.param_size = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsCserIpPort>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsCserIpPort& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.ip_v4);
        gm::wire::codec::writeValue(_buf, obj.port);
    }

    template<>
    inline gm_structs::SteamUtilsCserIpPort readValue<gm_structs::SteamUtilsCserIpPort>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsCserIpPort obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.ip_v4 = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.port = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsGamepadTextInput>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsGamepadTextInput& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.text);
    }

    template<>
    inline gm_structs::SteamUtilsGamepadTextInput readValue<gm_structs::SteamUtilsGamepadTextInput>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsGamepadTextInput obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.text = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsImageSize>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsImageSize& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.width);
        gm::wire::codec::writeValue(_buf, obj.height);
    }

    template<>
    inline gm_structs::SteamUtilsImageSize readValue<gm_structs::SteamUtilsImageSize>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsImageSize obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.width = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.height = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsApiCallCompleted>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsApiCallCompleted& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.failed);
    }

    template<>
    inline gm_structs::SteamUtilsApiCallCompleted readValue<gm_structs::SteamUtilsApiCallCompleted>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsApiCallCompleted obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.failed = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsFilterTextResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsFilterTextResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.characters_filtered);
        gm::wire::codec::writeValue(_buf, obj.filtered_text);
    }

    template<>
    inline gm_structs::SteamUtilsFilterTextResult readValue<gm_structs::SteamUtilsFilterTextResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsFilterTextResult obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.characters_filtered = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.filtered_text = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsGamepadTextInputDismissed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsGamepadTextInputDismissed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.submitted);
        gm::wire::codec::writeValue(_buf, obj.submitted_text_length);
    }

    template<>
    inline gm_structs::SteamUtilsGamepadTextInputDismissed readValue<gm_structs::SteamUtilsGamepadTextInputDismissed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsGamepadTextInputDismissed obj;
        obj.submitted = gm::wire::codec::readValue<bool>(_buf);
        obj.submitted_text_length = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsFloatingGamepadTextInputDismissed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsFloatingGamepadTextInputDismissed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.submitted);
    }

    template<>
    inline gm_structs::SteamUtilsFloatingGamepadTextInputDismissed readValue<gm_structs::SteamUtilsFloatingGamepadTextInputDismissed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsFloatingGamepadTextInputDismissed obj;
        obj.submitted = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUtilsWarningMessage>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUtilsWarningMessage& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.severity);
        gm::wire::codec::writeValue(_buf, obj.text);
    }

    template<>
    inline gm_structs::SteamUtilsWarningMessage readValue<gm_structs::SteamUtilsWarningMessage>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUtilsWarningMessage obj;
        obj.severity = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.text = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcItemDownloadInfo>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcItemDownloadInfo& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.bytes_downloaded);
        gm::wire::codec::writeValue(_buf, obj.bytes_total);
    }

    template<>
    inline gm_structs::SteamUgcItemDownloadInfo readValue<gm_structs::SteamUgcItemDownloadInfo>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcItemDownloadInfo obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.bytes_downloaded = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.bytes_total = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcItemInstallInfo>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcItemInstallInfo& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.size_on_disk);
        gm::wire::codec::writeValue(_buf, obj.folder);
        gm::wire::codec::writeValue(_buf, obj.timestamp);
    }

    template<>
    inline gm_structs::SteamUgcItemInstallInfo readValue<gm_structs::SteamUgcItemInstallInfo>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcItemInstallInfo obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.size_on_disk = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.folder = gm::wire::codec::readValue<std::string>(_buf);
        obj.timestamp = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcItemUpdateProgress>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcItemUpdateProgress& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.status);
        gm::wire::codec::writeValue(_buf, obj.bytes_processed);
        gm::wire::codec::writeValue(_buf, obj.bytes_total);
    }

    template<>
    inline gm_structs::SteamUgcItemUpdateProgress readValue<gm_structs::SteamUgcItemUpdateProgress>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcItemUpdateProgress obj;
        obj.status = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.bytes_processed = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.bytes_total = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcQueryResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcQueryResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.title);
        gm::wire::codec::writeValue(_buf, obj.description);
        gm::wire::codec::writeValue(_buf, obj.time_created);
        gm::wire::codec::writeValue(_buf, obj.time_updated);
        gm::wire::codec::writeValue(_buf, obj.visibility);
        gm::wire::codec::writeValue(_buf, obj.banned);
        gm::wire::codec::writeValue(_buf, obj.accepted_for_use);
        gm::wire::codec::writeValue(_buf, obj.tags_truncated);
    }

    template<>
    inline gm_structs::SteamUgcQueryResult readValue<gm_structs::SteamUgcQueryResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcQueryResult obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.title = gm::wire::codec::readValue<std::string>(_buf);
        obj.description = gm::wire::codec::readValue<std::string>(_buf);
        obj.time_created = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.time_updated = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.visibility = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.banned = gm::wire::codec::readValue<bool>(_buf);
        obj.accepted_for_use = gm::wire::codec::readValue<bool>(_buf);
        obj.tags_truncated = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcQueryPreviewUrl>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcQueryPreviewUrl& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.url);
    }

    template<>
    inline gm_structs::SteamUgcQueryPreviewUrl readValue<gm_structs::SteamUgcQueryPreviewUrl>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcQueryPreviewUrl obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.url = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcQueryMetadata>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcQueryMetadata& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.metadata);
    }

    template<>
    inline gm_structs::SteamUgcQueryMetadata readValue<gm_structs::SteamUgcQueryMetadata>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcQueryMetadata obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.metadata = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcAdditionalPreview>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcAdditionalPreview& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.url_or_video_id);
        gm::wire::codec::writeValue(_buf, obj.preview_type);
    }

    template<>
    inline gm_structs::SteamUgcAdditionalPreview readValue<gm_structs::SteamUgcAdditionalPreview>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcAdditionalPreview obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.url_or_video_id = gm::wire::codec::readValue<std::string>(_buf);
        obj.preview_type = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcKeyValueTag>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcKeyValueTag& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.key);
        gm::wire::codec::writeValue(_buf, obj.value);
    }

    template<>
    inline gm_structs::SteamUgcKeyValueTag readValue<gm_structs::SteamUgcKeyValueTag>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcKeyValueTag obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.key = gm::wire::codec::readValue<std::string>(_buf);
        obj.value = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcItemInstalled>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcItemInstalled& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamUgcItemInstalled readValue<gm_structs::SteamUgcItemInstalled>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcItemInstalled obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcUserSubscribedItemsListChanged>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcUserSubscribedItemsListChanged& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
    }

    template<>
    inline gm_structs::SteamUgcUserSubscribedItemsListChanged readValue<gm_structs::SteamUgcUserSubscribedItemsListChanged>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcUserSubscribedItemsListChanged obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcFileSubscribed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcFileSubscribed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamUgcFileSubscribed readValue<gm_structs::SteamUgcFileSubscribed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcFileSubscribed obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcFileUnsubscribed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcFileUnsubscribed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamUgcFileUnsubscribed readValue<gm_structs::SteamUgcFileUnsubscribed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcFileUnsubscribed obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcQueryCompleted>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcQueryCompleted& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.query_handle);
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.num_results_returned);
        gm::wire::codec::writeValue(_buf, obj.total_matching_results);
        gm::wire::codec::writeValue(_buf, obj.cached_data);
    }

    template<>
    inline gm_structs::SteamUgcQueryCompleted readValue<gm_structs::SteamUgcQueryCompleted>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcQueryCompleted obj;
        obj.query_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.num_results_returned = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.total_matching_results = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.cached_data = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcCreateItemResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcCreateItemResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.legal_agreement_required);
    }

    template<>
    inline gm_structs::SteamUgcCreateItemResult readValue<gm_structs::SteamUgcCreateItemResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcCreateItemResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.legal_agreement_required = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcSubmitItemUpdateResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcSubmitItemUpdateResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.legal_agreement_required);
    }

    template<>
    inline gm_structs::SteamUgcSubmitItemUpdateResult readValue<gm_structs::SteamUgcSubmitItemUpdateResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcSubmitItemUpdateResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.legal_agreement_required = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcSubscribeItemResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcSubscribeItemResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamUgcSubscribeItemResult readValue<gm_structs::SteamUgcSubscribeItemResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcSubscribeItemResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcUnsubscribeItemResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcUnsubscribeItemResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamUgcUnsubscribeItemResult readValue<gm_structs::SteamUgcUnsubscribeItemResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcUnsubscribeItemResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcFavoriteItemsListChanged>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcFavoriteItemsListChanged& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.was_add_request);
    }

    template<>
    inline gm_structs::SteamUgcFavoriteItemsListChanged readValue<gm_structs::SteamUgcFavoriteItemsListChanged>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcFavoriteItemsListChanged obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.was_add_request = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcSetUserItemVoteResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcSetUserItemVoteResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.vote_up);
    }

    template<>
    inline gm_structs::SteamUgcSetUserItemVoteResult readValue<gm_structs::SteamUgcSetUserItemVoteResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcSetUserItemVoteResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.vote_up = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcGetUserItemVoteResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcGetUserItemVoteResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.voted_up);
        gm::wire::codec::writeValue(_buf, obj.voted_down);
        gm::wire::codec::writeValue(_buf, obj.vote_skipped);
    }

    template<>
    inline gm_structs::SteamUgcGetUserItemVoteResult readValue<gm_structs::SteamUgcGetUserItemVoteResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcGetUserItemVoteResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.voted_up = gm::wire::codec::readValue<bool>(_buf);
        obj.voted_down = gm::wire::codec::readValue<bool>(_buf);
        obj.vote_skipped = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcRequestItemDetailsResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcRequestItemDetailsResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.cached_data);
    }

    template<>
    inline gm_structs::SteamUgcRequestItemDetailsResult readValue<gm_structs::SteamUgcRequestItemDetailsResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcRequestItemDetailsResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.cached_data = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcSupportedGameVersionData>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcSupportedGameVersionData& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.game_branch_min);
        gm::wire::codec::writeValue(_buf, obj.game_branch_max);
    }

    template<>
    inline gm_structs::SteamUgcSupportedGameVersionData readValue<gm_structs::SteamUgcSupportedGameVersionData>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcSupportedGameVersionData obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.game_branch_min = gm::wire::codec::readValue<std::string>(_buf);
        obj.game_branch_max = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcDeleteItemResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcDeleteItemResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamUgcDeleteItemResult readValue<gm_structs::SteamUgcDeleteItemResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcDeleteItemResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUgcDownloadItemResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUgcDownloadItemResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUgcDownloadItemResult readValue<gm_structs::SteamUgcDownloadItemResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUgcDownloadItemResult obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputAnalogActionData>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputAnalogActionData& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.mode);
        gm::wire::codec::writeValue(_buf, obj.x);
        gm::wire::codec::writeValue(_buf, obj.y);
        gm::wire::codec::writeValue(_buf, obj.active);
    }

    template<>
    inline gm_structs::SteamInputAnalogActionData readValue<gm_structs::SteamInputAnalogActionData>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputAnalogActionData obj;
        obj.mode = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.x = gm::wire::codec::readValue<float>(_buf);
        obj.y = gm::wire::codec::readValue<float>(_buf);
        obj.active = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputDigitalActionData>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputDigitalActionData& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.state);
        gm::wire::codec::writeValue(_buf, obj.active);
    }

    template<>
    inline gm_structs::SteamInputDigitalActionData readValue<gm_structs::SteamInputDigitalActionData>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputDigitalActionData obj;
        obj.state = gm::wire::codec::readValue<bool>(_buf);
        obj.active = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputMotionData>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputMotionData& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.rot_quat_x);
        gm::wire::codec::writeValue(_buf, obj.rot_quat_y);
        gm::wire::codec::writeValue(_buf, obj.rot_quat_z);
        gm::wire::codec::writeValue(_buf, obj.rot_quat_w);
        gm::wire::codec::writeValue(_buf, obj.pos_accel_x);
        gm::wire::codec::writeValue(_buf, obj.pos_accel_y);
        gm::wire::codec::writeValue(_buf, obj.pos_accel_z);
        gm::wire::codec::writeValue(_buf, obj.rot_vel_x);
        gm::wire::codec::writeValue(_buf, obj.rot_vel_y);
        gm::wire::codec::writeValue(_buf, obj.rot_vel_z);
    }

    template<>
    inline gm_structs::SteamInputMotionData readValue<gm_structs::SteamInputMotionData>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputMotionData obj;
        obj.rot_quat_x = gm::wire::codec::readValue<float>(_buf);
        obj.rot_quat_y = gm::wire::codec::readValue<float>(_buf);
        obj.rot_quat_z = gm::wire::codec::readValue<float>(_buf);
        obj.rot_quat_w = gm::wire::codec::readValue<float>(_buf);
        obj.pos_accel_x = gm::wire::codec::readValue<float>(_buf);
        obj.pos_accel_y = gm::wire::codec::readValue<float>(_buf);
        obj.pos_accel_z = gm::wire::codec::readValue<float>(_buf);
        obj.rot_vel_x = gm::wire::codec::readValue<float>(_buf);
        obj.rot_vel_y = gm::wire::codec::readValue<float>(_buf);
        obj.rot_vel_z = gm::wire::codec::readValue<float>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputActiveActionSetLayers>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputActiveActionSetLayers& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.count);
        gm::wire::codec::writeValue(_buf, obj.handles);
    }

    template<>
    inline gm_structs::SteamInputActiveActionSetLayers readValue<gm_structs::SteamInputActiveActionSetLayers>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputActiveActionSetLayers obj;
        obj.count = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.handles = gm::wire::codec::readVector<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputActionOrigins>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputActionOrigins& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.count);
        gm::wire::codec::writeValue(_buf, obj.origins);
    }

    template<>
    inline gm_structs::SteamInputActionOrigins readValue<gm_structs::SteamInputActionOrigins>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputActionOrigins obj;
        obj.count = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.origins = gm::wire::codec::readVector<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputDeviceBindingRevision>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputDeviceBindingRevision& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.major);
        gm::wire::codec::writeValue(_buf, obj.minor);
    }

    template<>
    inline gm_structs::SteamInputDeviceBindingRevision readValue<gm_structs::SteamInputDeviceBindingRevision>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputDeviceBindingRevision obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.major = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.minor = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputDeviceEvent>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputDeviceEvent& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.controller_handle);
    }

    template<>
    inline gm_structs::SteamInputDeviceEvent readValue<gm_structs::SteamInputDeviceEvent>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputDeviceEvent obj;
        obj.controller_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputActionSetChanged>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputActionSetChanged& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.controller_handle);
        gm::wire::codec::writeValue(_buf, obj.action_set_handle);
    }

    template<>
    inline gm_structs::SteamInputActionSetChanged readValue<gm_structs::SteamInputActionSetChanged>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputActionSetChanged obj;
        obj.controller_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.action_set_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInputControllerBattery>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInputControllerBattery& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.controller_handle);
        gm::wire::codec::writeValue(_buf, obj.battery_percent);
    }

    template<>
    inline gm_structs::SteamInputControllerBattery readValue<gm_structs::SteamInputControllerBattery>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInputControllerBattery obj;
        obj.controller_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.battery_percent = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsAchievementAndUnlockTime>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsAchievementAndUnlockTime& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.achieved);
        gm::wire::codec::writeValue(_buf, obj.unlock_time);
    }

    template<>
    inline gm_structs::SteamUserStatsAchievementAndUnlockTime readValue<gm_structs::SteamUserStatsAchievementAndUnlockTime>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsAchievementAndUnlockTime obj;
        obj.achieved = gm::wire::codec::readValue<bool>(_buf);
        obj.unlock_time = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsAchievementAndProgress>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsAchievementAndProgress& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.achieved);
        gm::wire::codec::writeValue(_buf, obj.cur_progress);
        gm::wire::codec::writeValue(_buf, obj.max_progress);
    }

    template<>
    inline gm_structs::SteamUserStatsAchievementAndProgress readValue<gm_structs::SteamUserStatsAchievementAndProgress>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsAchievementAndProgress obj;
        obj.achieved = gm::wire::codec::readValue<bool>(_buf);
        obj.cur_progress = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.max_progress = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsAchievementNamesAndPercent>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsAchievementNamesAndPercent& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.name);
        gm::wire::codec::writeValue(_buf, obj.percent);
    }

    template<>
    inline gm_structs::SteamUserStatsAchievementNamesAndPercent readValue<gm_structs::SteamUserStatsAchievementNamesAndPercent>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsAchievementNamesAndPercent obj;
        obj.name = gm::wire::codec::readValue<std::string>(_buf);
        obj.percent = gm::wire::codec::readValue<float>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsMostAchievedAchievementInfo>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsMostAchievedAchievementInfo& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.name);
        gm::wire::codec::writeValue(_buf, obj.percent);
        gm::wire::codec::writeValue(_buf, obj.achieved);
    }

    template<>
    inline gm_structs::SteamUserStatsMostAchievedAchievementInfo readValue<gm_structs::SteamUserStatsMostAchievedAchievementInfo>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsMostAchievedAchievementInfo obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.name = gm::wire::codec::readValue<std::string>(_buf);
        obj.percent = gm::wire::codec::readValue<float>(_buf);
        obj.achieved = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsNumAchievementsAndHours>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsNumAchievementsAndHours& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.num_achievements);
        gm::wire::codec::writeValue(_buf, obj.hours);
    }

    template<>
    inline gm_structs::SteamUserStatsNumAchievementsAndHours readValue<gm_structs::SteamUserStatsNumAchievementsAndHours>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsNumAchievementsAndHours obj;
        obj.num_achievements = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.hours = gm::wire::codec::readValue<float>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsStatInt>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsStatInt& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.data);
    }

    template<>
    inline gm_structs::SteamUserStatsStatInt readValue<gm_structs::SteamUserStatsStatInt>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsStatInt obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.data = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsStatFloat>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsStatFloat& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.data);
    }

    template<>
    inline gm_structs::SteamUserStatsStatFloat readValue<gm_structs::SteamUserStatsStatFloat>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsStatFloat obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.data = gm::wire::codec::readValue<float>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsUserAchievement>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsUserAchievement& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.achieved);
    }

    template<>
    inline gm_structs::SteamUserStatsUserAchievement readValue<gm_structs::SteamUserStatsUserAchievement>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsUserAchievement obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.achieved = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsGlobalStatInt64>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsGlobalStatInt64& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.data);
    }

    template<>
    inline gm_structs::SteamUserStatsGlobalStatInt64 readValue<gm_structs::SteamUserStatsGlobalStatInt64>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsGlobalStatInt64 obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.data = gm::wire::codec::readValue<std::int64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsGlobalStatDouble>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsGlobalStatDouble& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.data);
    }

    template<>
    inline gm_structs::SteamUserStatsGlobalStatDouble readValue<gm_structs::SteamUserStatsGlobalStatDouble>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsGlobalStatDouble obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.data = gm::wire::codec::readValue<double>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsGlobalStatHistoryInt64>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsGlobalStatHistoryInt64& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.data);
    }

    template<>
    inline gm_structs::SteamUserStatsGlobalStatHistoryInt64 readValue<gm_structs::SteamUserStatsGlobalStatHistoryInt64>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsGlobalStatHistoryInt64 obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.data = gm::wire::codec::readVector<std::int64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsGlobalStatHistoryDouble>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsGlobalStatHistoryDouble& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.data);
    }

    template<>
    inline gm_structs::SteamUserStatsGlobalStatHistoryDouble readValue<gm_structs::SteamUserStatsGlobalStatHistoryDouble>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsGlobalStatHistoryDouble obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.data = gm::wire::codec::readVector<double>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsDownloadedLeaderboardEntry>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsDownloadedLeaderboardEntry& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.steam_id_user);
        gm::wire::codec::writeValue(_buf, obj.global_rank);
        gm::wire::codec::writeValue(_buf, obj.score);
        gm::wire::codec::writeValue(_buf, obj.details_count);
        gm::wire::codec::writeValue(_buf, obj.details_written);
        gm::wire::codec::writeValue(_buf, obj.bytes_written);
    }

    template<>
    inline gm_structs::SteamUserStatsDownloadedLeaderboardEntry readValue<gm_structs::SteamUserStatsDownloadedLeaderboardEntry>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsDownloadedLeaderboardEntry obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.steam_id_user = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.global_rank = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.score = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.details_count = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.details_written = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.bytes_written = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsRequestUserStatsResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsRequestUserStatsResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.game_id);
        gm::wire::codec::writeValue(_buf, obj.steam_id_user);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUserStatsRequestUserStatsResult readValue<gm_structs::SteamUserStatsRequestUserStatsResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsRequestUserStatsResult obj;
        obj.game_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.steam_id_user = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsLeaderboardFindResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsLeaderboardFindResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.leaderboard_handle);
        gm::wire::codec::writeValue(_buf, obj.leaderboard_found);
    }

    template<>
    inline gm_structs::SteamUserStatsLeaderboardFindResult readValue<gm_structs::SteamUserStatsLeaderboardFindResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsLeaderboardFindResult obj;
        obj.leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.leaderboard_found = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsScoresDownloadedResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsScoresDownloadedResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.leaderboard_handle);
        gm::wire::codec::writeValue(_buf, obj.entries_handle);
        gm::wire::codec::writeValue(_buf, obj.entry_count);
    }

    template<>
    inline gm_structs::SteamUserStatsScoresDownloadedResult readValue<gm_structs::SteamUserStatsScoresDownloadedResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsScoresDownloadedResult obj;
        obj.leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.entries_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.entry_count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsScoreUploadedResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsScoreUploadedResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.success);
        gm::wire::codec::writeValue(_buf, obj.leaderboard_handle);
        gm::wire::codec::writeValue(_buf, obj.score);
        gm::wire::codec::writeValue(_buf, obj.score_changed);
        gm::wire::codec::writeValue(_buf, obj.global_rank_new);
        gm::wire::codec::writeValue(_buf, obj.global_rank_previous);
    }

    template<>
    inline gm_structs::SteamUserStatsScoreUploadedResult readValue<gm_structs::SteamUserStatsScoreUploadedResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsScoreUploadedResult obj;
        obj.success = gm::wire::codec::readValue<bool>(_buf);
        obj.leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.score = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.score_changed = gm::wire::codec::readValue<bool>(_buf);
        obj.global_rank_new = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.global_rank_previous = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsNumberOfCurrentPlayersResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsNumberOfCurrentPlayersResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.success);
        gm::wire::codec::writeValue(_buf, obj.players);
    }

    template<>
    inline gm_structs::SteamUserStatsNumberOfCurrentPlayersResult readValue<gm_structs::SteamUserStatsNumberOfCurrentPlayersResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsNumberOfCurrentPlayersResult obj;
        obj.success = gm::wire::codec::readValue<bool>(_buf);
        obj.players = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.game_id);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult readValue<gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult obj;
        obj.game_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsGlobalStatsReceivedResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsGlobalStatsReceivedResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.game_id);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUserStatsGlobalStatsReceivedResult readValue<gm_structs::SteamUserStatsGlobalStatsReceivedResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsGlobalStatsReceivedResult obj;
        obj.game_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsAttachLeaderboardUgcResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsAttachLeaderboardUgcResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.leaderboard_handle);
    }

    template<>
    inline gm_structs::SteamUserStatsAttachLeaderboardUgcResult readValue<gm_structs::SteamUserStatsAttachLeaderboardUgcResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsAttachLeaderboardUgcResult obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsUserStatsReceived>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsUserStatsReceived& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.game_id);
        gm::wire::codec::writeValue(_buf, obj.steam_id_user);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUserStatsUserStatsReceived readValue<gm_structs::SteamUserStatsUserStatsReceived>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsUserStatsReceived obj;
        obj.game_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.steam_id_user = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsUserStatsStored>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsUserStatsStored& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.game_id);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamUserStatsUserStatsStored readValue<gm_structs::SteamUserStatsUserStatsStored>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsUserStatsStored obj;
        obj.game_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsUserAchievementStored>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsUserAchievementStored& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.game_id);
        gm::wire::codec::writeValue(_buf, obj.achievement_name);
        gm::wire::codec::writeValue(_buf, obj.cur_progress);
        gm::wire::codec::writeValue(_buf, obj.max_progress);
    }

    template<>
    inline gm_structs::SteamUserStatsUserAchievementStored readValue<gm_structs::SteamUserStatsUserAchievementStored>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsUserAchievementStored obj;
        obj.game_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.achievement_name = gm::wire::codec::readValue<std::string>(_buf);
        obj.cur_progress = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.max_progress = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsIntMinMax>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsIntMinMax& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.min);
        gm::wire::codec::writeValue(_buf, obj.max);
        gm::wire::codec::writeValue(_buf, obj.ok);
    }

    template<>
    inline gm_structs::SteamUserStatsIntMinMax readValue<gm_structs::SteamUserStatsIntMinMax>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsIntMinMax obj;
        obj.min = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.max = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamUserStatsFloatMinMax>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamUserStatsFloatMinMax& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.min);
        gm::wire::codec::writeValue(_buf, obj.max);
        gm::wire::codec::writeValue(_buf, obj.ok);
    }

    template<>
    inline gm_structs::SteamUserStatsFloatMinMax readValue<gm_structs::SteamUserStatsFloatMinMax>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamUserStatsFloatMinMax obj;
        obj.min = gm::wire::codec::readValue<double>(_buf);
        obj.max = gm::wire::codec::readValue<double>(_buf);
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMusicPlaybackStatusHasChanged>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMusicPlaybackStatusHasChanged& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.playback_status);
    }

    template<>
    inline gm_structs::SteamMusicPlaybackStatusHasChanged readValue<gm_structs::SteamMusicPlaybackStatusHasChanged>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMusicPlaybackStatusHasChanged obj;
        obj.playback_status = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMusicVolumeHasChanged>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMusicVolumeHasChanged& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.volume);
    }

    template<>
    inline gm_structs::SteamMusicVolumeHasChanged readValue<gm_structs::SteamMusicVolumeHasChanged>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMusicVolumeHasChanged obj;
        obj.volume = gm::wire::codec::readValue<float>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamTimelineGamePhaseRecordingExists>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamTimelineGamePhaseRecordingExists& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.phase_id);
        gm::wire::codec::writeValue(_buf, obj.recording_ms);
        gm::wire::codec::writeValue(_buf, obj.longest_clip_ms);
        gm::wire::codec::writeValue(_buf, obj.clip_count);
        gm::wire::codec::writeValue(_buf, obj.screenshot_count);
    }

    template<>
    inline gm_structs::SteamTimelineGamePhaseRecordingExists readValue<gm_structs::SteamTimelineGamePhaseRecordingExists>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamTimelineGamePhaseRecordingExists obj;
        obj.phase_id = gm::wire::codec::readValue<std::string>(_buf);
        obj.recording_ms = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.longest_clip_ms = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.clip_count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.screenshot_count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamTimelineEventRecordingExists>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamTimelineEventRecordingExists& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.event_id);
        gm::wire::codec::writeValue(_buf, obj.recording_exists);
    }

    template<>
    inline gm_structs::SteamTimelineEventRecordingExists readValue<gm_structs::SteamTimelineEventRecordingExists>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamTimelineEventRecordingExists obj;
        obj.event_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.recording_exists = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryResultItems>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryResultItems& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.count);
        gm::wire::codec::writeValue(_buf, obj.item_instance_ids);
        gm::wire::codec::writeValue(_buf, obj.item_def_ids);
        gm::wire::codec::writeValue(_buf, obj.quantities);
        gm::wire::codec::writeValue(_buf, obj.flags);
    }

    template<>
    inline gm_structs::SteamInventoryResultItems readValue<gm_structs::SteamInventoryResultItems>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryResultItems obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.item_instance_ids = gm::wire::codec::readVector<std::uint64_t>(_buf);
        obj.item_def_ids = gm::wire::codec::readVector<std::uint32_t>(_buf);
        obj.quantities = gm::wire::codec::readVector<std::uint32_t>(_buf);
        obj.flags = gm::wire::codec::readVector<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryDeserializeResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryDeserializeResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.result_handle);
        gm::wire::codec::writeValue(_buf, obj.status);
    }

    template<>
    inline gm_structs::SteamInventoryDeserializeResult readValue<gm_structs::SteamInventoryDeserializeResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryDeserializeResult obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.result_handle = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.status = gm::wire::codec::readValue<gm_enums::SteamApiResult>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventorySerializeResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventorySerializeResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.bytes_written);
    }

    template<>
    inline gm_structs::SteamInventorySerializeResult readValue<gm_structs::SteamInventorySerializeResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventorySerializeResult obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.bytes_written = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryItemProperty>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryItemProperty& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.value);
    }

    template<>
    inline gm_structs::SteamInventoryItemProperty readValue<gm_structs::SteamInventoryItemProperty>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryItemProperty obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.value = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryItemsWithPrices>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryItemsWithPrices& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.count);
        gm::wire::codec::writeValue(_buf, obj.item_def_ids);
        gm::wire::codec::writeValue(_buf, obj.current_prices);
        gm::wire::codec::writeValue(_buf, obj.base_prices);
    }

    template<>
    inline gm_structs::SteamInventoryItemsWithPrices readValue<gm_structs::SteamInventoryItemsWithPrices>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryItemsWithPrices obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.item_def_ids = gm::wire::codec::readVector<std::uint32_t>(_buf);
        obj.current_prices = gm::wire::codec::readVector<std::int64_t>(_buf);
        obj.base_prices = gm::wire::codec::readVector<std::int64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryDefProperty>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryDefProperty& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.value);
    }

    template<>
    inline gm_structs::SteamInventoryDefProperty readValue<gm_structs::SteamInventoryDefProperty>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryDefProperty obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.value = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryItemPrice>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryItemPrice& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.current_price);
        gm::wire::codec::writeValue(_buf, obj.base_price);
    }

    template<>
    inline gm_structs::SteamInventoryItemPrice readValue<gm_structs::SteamInventoryItemPrice>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryItemPrice obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.current_price = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.base_price = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryResultReady>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryResultReady& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result_handle);
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamInventoryResultReady readValue<gm_structs::SteamInventoryResultReady>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryResultReady obj;
        obj.result_handle = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryFullUpdate>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryFullUpdate& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result_handle);
    }

    template<>
    inline gm_structs::SteamInventoryFullUpdate readValue<gm_structs::SteamInventoryFullUpdate>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryFullUpdate obj;
        obj.result_handle = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryDefinitionUpdate>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryDefinitionUpdate& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.dummy);
    }

    template<>
    inline gm_structs::SteamInventoryDefinitionUpdate readValue<gm_structs::SteamInventoryDefinitionUpdate>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryDefinitionUpdate obj;
        obj.dummy = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryStartPurchaseResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryStartPurchaseResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.order_id);
        gm::wire::codec::writeValue(_buf, obj.transaction_id);
    }

    template<>
    inline gm_structs::SteamInventoryStartPurchaseResult readValue<gm_structs::SteamInventoryStartPurchaseResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryStartPurchaseResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.order_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.transaction_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamInventoryRequestPricesResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamInventoryRequestPricesResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.currency);
    }

    template<>
    inline gm_structs::SteamInventoryRequestPricesResult readValue<gm_structs::SteamInventoryRequestPricesResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamInventoryRequestPricesResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.currency = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageFileNameAndSize>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageFileNameAndSize& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.file_name);
        gm::wire::codec::writeValue(_buf, obj.file_size);
    }

    template<>
    inline gm_structs::SteamRemoteStorageFileNameAndSize readValue<gm_structs::SteamRemoteStorageFileNameAndSize>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageFileNameAndSize obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.file_name = gm::wire::codec::readValue<std::string>(_buf);
        obj.file_size = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageQuota>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageQuota& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.total_bytes);
        gm::wire::codec::writeValue(_buf, obj.available_bytes);
    }

    template<>
    inline gm_structs::SteamRemoteStorageQuota readValue<gm_structs::SteamRemoteStorageQuota>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageQuota obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.total_bytes = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.available_bytes = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageUgcDetails>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageUgcDetails& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.ugc_handle);
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.size_in_bytes);
        gm::wire::codec::writeValue(_buf, obj.file_name);
        gm::wire::codec::writeValue(_buf, obj.steam_id_owner);
    }

    template<>
    inline gm_structs::SteamRemoteStorageUgcDetails readValue<gm_structs::SteamRemoteStorageUgcDetails>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageUgcDetails obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.ugc_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.size_in_bytes = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.file_name = gm::wire::codec::readValue<std::string>(_buf);
        obj.steam_id_owner = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageFileShareResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageFileShareResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.ugc_handle);
        gm::wire::codec::writeValue(_buf, obj.file_name);
    }

    template<>
    inline gm_structs::SteamRemoteStorageFileShareResult readValue<gm_structs::SteamRemoteStorageFileShareResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageFileShareResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.ugc_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.file_name = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageDownloadUgcResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageDownloadUgcResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.ugc_handle);
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.size_in_bytes);
        gm::wire::codec::writeValue(_buf, obj.file_name);
        gm::wire::codec::writeValue(_buf, obj.steam_id_owner);
    }

    template<>
    inline gm_structs::SteamRemoteStorageDownloadUgcResult readValue<gm_structs::SteamRemoteStorageDownloadUgcResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageDownloadUgcResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.ugc_handle = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.size_in_bytes = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.file_name = gm::wire::codec::readValue<std::string>(_buf);
        obj.steam_id_owner = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStoragePublishedFileSubscribed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStoragePublishedFileSubscribed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamRemoteStoragePublishedFileSubscribed readValue<gm_structs::SteamRemoteStoragePublishedFileSubscribed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStoragePublishedFileSubscribed obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStoragePublishedFileUnsubscribed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStoragePublishedFileUnsubscribed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.app_id);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamRemoteStoragePublishedFileUnsubscribed readValue<gm_structs::SteamRemoteStoragePublishedFileUnsubscribed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStoragePublishedFileUnsubscribed obj;
        obj.app_id = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageLocalFileChange>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageLocalFileChange& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.dummy);
    }

    template<>
    inline gm_structs::SteamRemoteStorageLocalFileChange readValue<gm_structs::SteamRemoteStorageLocalFileChange>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageLocalFileChange obj;
        obj.dummy = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStoragePublishFileResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStoragePublishFileResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
        gm::wire::codec::writeValue(_buf, obj.user_needs_to_accept_wla);
    }

    template<>
    inline gm_structs::SteamRemoteStoragePublishFileResult readValue<gm_structs::SteamRemoteStoragePublishFileResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStoragePublishFileResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.user_needs_to_accept_wla = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageUpdatePublishedFileResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageUpdatePublishedFileResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.user_needs_to_accept_wla);
    }

    template<>
    inline gm_structs::SteamRemoteStorageUpdatePublishedFileResult readValue<gm_structs::SteamRemoteStorageUpdatePublishedFileResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageUpdatePublishedFileResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.user_needs_to_accept_wla = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageSubscribePublishedFileResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageSubscribePublishedFileResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamRemoteStorageSubscribePublishedFileResult readValue<gm_structs::SteamRemoteStorageSubscribePublishedFileResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageSubscribePublishedFileResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.published_file_id);
    }

    template<>
    inline gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult readValue<gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.published_file_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyCreated>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyCreated& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.lobby_id);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyCreated readValue<gm_structs::SteamMatchmakingLobbyCreated>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyCreated obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.lobby_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyEnter>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyEnter& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.lobby_id);
        gm::wire::codec::writeValue(_buf, obj.chat_permissions);
        gm::wire::codec::writeValue(_buf, obj.locked);
        gm::wire::codec::writeValue(_buf, obj.response);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyEnter readValue<gm_structs::SteamMatchmakingLobbyEnter>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyEnter obj;
        obj.lobby_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.chat_permissions = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.locked = gm::wire::codec::readValue<bool>(_buf);
        obj.response = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyMatchList>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyMatchList& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.lobbies_count);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyMatchList readValue<gm_structs::SteamMatchmakingLobbyMatchList>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyMatchList obj;
        obj.lobbies_count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyDataUpdate>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyDataUpdate& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.lobby_id);
        gm::wire::codec::writeValue(_buf, obj.member_id);
        gm::wire::codec::writeValue(_buf, obj.success);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyDataUpdate readValue<gm_structs::SteamMatchmakingLobbyDataUpdate>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyDataUpdate obj;
        obj.lobby_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.member_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.success = gm::wire::codec::readValue<bool>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyChatUpdate>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyChatUpdate& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.lobby_id);
        gm::wire::codec::writeValue(_buf, obj.user_changed_id);
        gm::wire::codec::writeValue(_buf, obj.making_change_id);
        gm::wire::codec::writeValue(_buf, obj.chat_member_state_change);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyChatUpdate readValue<gm_structs::SteamMatchmakingLobbyChatUpdate>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyChatUpdate obj;
        obj.lobby_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.user_changed_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.making_change_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.chat_member_state_change = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyChatMsg>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyChatMsg& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.lobby_id);
        gm::wire::codec::writeValue(_buf, obj.sender_id);
        gm::wire::codec::writeValue(_buf, obj.chat_entry_type);
        gm::wire::codec::writeValue(_buf, obj.message_size);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyChatMsg readValue<gm_structs::SteamMatchmakingLobbyChatMsg>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyChatMsg obj;
        obj.lobby_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.sender_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.chat_entry_type = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.message_size = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyGameCreated>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyGameCreated& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.lobby_id);
        gm::wire::codec::writeValue(_buf, obj.server_ip);
        gm::wire::codec::writeValue(_buf, obj.server_port);
        gm::wire::codec::writeValue(_buf, obj.game_server_id);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyGameCreated readValue<gm_structs::SteamMatchmakingLobbyGameCreated>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyGameCreated obj;
        obj.lobby_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.server_ip = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.server_port = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.game_server_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyInvite>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyInvite& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.inviter_id);
        gm::wire::codec::writeValue(_buf, obj.lobby_id);
        gm::wire::codec::writeValue(_buf, obj.game_id);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyInvite readValue<gm_structs::SteamMatchmakingLobbyInvite>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyInvite obj;
        obj.inviter_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.lobby_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.game_id = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyChatEntry>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyChatEntry& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.bytes);
        gm::wire::codec::writeValue(_buf, obj.sender_id);
        gm::wire::codec::writeValue(_buf, obj.entry_type);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyChatEntry readValue<gm_structs::SteamMatchmakingLobbyChatEntry>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyChatEntry obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.bytes = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.sender_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.entry_type = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamMatchmakingLobbyGameServer>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamMatchmakingLobbyGameServer& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.ip);
        gm::wire::codec::writeValue(_buf, obj.port);
        gm::wire::codec::writeValue(_buf, obj.steam_id_gs);
    }

    template<>
    inline gm_structs::SteamMatchmakingLobbyGameServer readValue<gm_structs::SteamMatchmakingLobbyGameServer>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamMatchmakingLobbyGameServer obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.ip = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.port = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.steam_id_gs = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamNetworkingMessagesSessionRequest>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamNetworkingMessagesSessionRequest& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.steam_id_remote);
    }

    template<>
    inline gm_structs::SteamNetworkingMessagesSessionRequest readValue<gm_structs::SteamNetworkingMessagesSessionRequest>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamNetworkingMessagesSessionRequest obj;
        obj.steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamNetworkingMessagesSessionFailed>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamNetworkingMessagesSessionFailed& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.steam_id_remote);
        gm::wire::codec::writeValue(_buf, obj.end_reason);
        gm::wire::codec::writeValue(_buf, obj.debug_msg);
    }

    template<>
    inline gm_structs::SteamNetworkingMessagesSessionFailed readValue<gm_structs::SteamNetworkingMessagesSessionFailed>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamNetworkingMessagesSessionFailed obj;
        obj.steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.end_reason = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.debug_msg = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamNetworkingMessagesReceived>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamNetworkingMessagesReceived& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.steam_id_remote);
        gm::wire::codec::writeValue(_buf, obj.channel);
        gm::wire::codec::writeValue(_buf, obj.bytes_written);
        gm::wire::codec::writeValue(_buf, obj.send_flags);
    }

    template<>
    inline gm_structs::SteamNetworkingMessagesReceived readValue<gm_structs::SteamNetworkingMessagesReceived>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamNetworkingMessagesReceived obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.channel = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.bytes_written = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.send_flags = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamNetworkingSocketsConnectionInfo>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamNetworkingSocketsConnectionInfo& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.user_data);
        gm::wire::codec::writeValue(_buf, obj.end_reason);
        gm::wire::codec::writeValue(_buf, obj.end_debug);
        gm::wire::codec::writeValue(_buf, obj.connection_description);
        gm::wire::codec::writeValue(_buf, obj.flags);
        gm::wire::codec::writeValue(_buf, obj.state);
        gm::wire::codec::writeValue(_buf, obj.steam_id_remote);
        gm::wire::codec::writeValue(_buf, obj.addr_remote);
    }

    template<>
    inline gm_structs::SteamNetworkingSocketsConnectionInfo readValue<gm_structs::SteamNetworkingSocketsConnectionInfo>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamNetworkingSocketsConnectionInfo obj;
        obj.user_data = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.end_reason = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.end_debug = gm::wire::codec::readValue<std::string>(_buf);
        obj.connection_description = gm::wire::codec::readValue<std::string>(_buf);
        obj.flags = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.state = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.addr_remote = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamNetworkingSocketsReceived>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamNetworkingSocketsReceived& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.conn);
        gm::wire::codec::writeValue(_buf, obj.bytes_written);
        gm::wire::codec::writeValue(_buf, obj.flags);
    }

    template<>
    inline gm_structs::SteamNetworkingSocketsReceived readValue<gm_structs::SteamNetworkingSocketsReceived>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamNetworkingSocketsReceived obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.conn = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.bytes_written = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.flags = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamPartiesAvailableBeaconLocationCount>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamPartiesAvailableBeaconLocationCount& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.count);
    }

    template<>
    inline gm_structs::SteamPartiesAvailableBeaconLocationCount readValue<gm_structs::SteamPartiesAvailableBeaconLocationCount>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamPartiesAvailableBeaconLocationCount obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamPartiesAvailableBeaconLocations>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamPartiesAvailableBeaconLocations& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.count);
        gm::wire::codec::writeValue(_buf, obj.location_types);
        gm::wire::codec::writeValue(_buf, obj.location_ids);
    }

    template<>
    inline gm_structs::SteamPartiesAvailableBeaconLocations readValue<gm_structs::SteamPartiesAvailableBeaconLocations>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamPartiesAvailableBeaconLocations obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.count = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.location_types = gm::wire::codec::readVector<gm_enums::SteamPartiesBeaconLocationType>(_buf);
        obj.location_ids = gm::wire::codec::readVector<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamPartiesCreateBeaconResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamPartiesCreateBeaconResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.beacon_id);
    }

    template<>
    inline gm_structs::SteamPartiesCreateBeaconResult readValue<gm_structs::SteamPartiesCreateBeaconResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamPartiesCreateBeaconResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.beacon_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamPartiesJoinPartyResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamPartiesJoinPartyResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
        gm::wire::codec::writeValue(_buf, obj.beacon_id);
        gm::wire::codec::writeValue(_buf, obj.beacon_owner_steam_id);
        gm::wire::codec::writeValue(_buf, obj.connect_string);
    }

    template<>
    inline gm_structs::SteamPartiesJoinPartyResult readValue<gm_structs::SteamPartiesJoinPartyResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamPartiesJoinPartyResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.beacon_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.beacon_owner_steam_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.connect_string = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamPartiesChangeNumOpenSlotsResult>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamPartiesChangeNumOpenSlotsResult& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.result);
    }

    template<>
    inline gm_structs::SteamPartiesChangeNumOpenSlotsResult readValue<gm_structs::SteamPartiesChangeNumOpenSlotsResult>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamPartiesChangeNumOpenSlotsResult obj;
        obj.result = gm::wire::codec::readValue<std::int32_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamPartiesReservationNotification>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamPartiesReservationNotification& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.beacon_id);
        gm::wire::codec::writeValue(_buf, obj.joiner_steam_id);
    }

    template<>
    inline gm_structs::SteamPartiesReservationNotification readValue<gm_structs::SteamPartiesReservationNotification>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamPartiesReservationNotification obj;
        obj.beacon_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.joiner_steam_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamPartiesBeaconDetails>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamPartiesBeaconDetails& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.ok);
        gm::wire::codec::writeValue(_buf, obj.beacon_owner_steam_id);
        gm::wire::codec::writeValue(_buf, obj.location_type);
        gm::wire::codec::writeValue(_buf, obj.location_id);
        gm::wire::codec::writeValue(_buf, obj.metadata);
    }

    template<>
    inline gm_structs::SteamPartiesBeaconDetails readValue<gm_structs::SteamPartiesBeaconDetails>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamPartiesBeaconDetails obj;
        obj.ok = gm::wire::codec::readValue<bool>(_buf);
        obj.beacon_owner_steam_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.location_type = gm::wire::codec::readValue<gm_enums::SteamPartiesBeaconLocationType>(_buf);
        obj.location_id = gm::wire::codec::readValue<std::uint64_t>(_buf);
        obj.metadata = gm::wire::codec::readValue<std::string>(_buf);
        return obj;
    }

    template<>
    inline void writeValue<gm_structs::SteamNetworkingSocketsStatusChanged>(gm::byteio::IByteWriter& _buf, const gm_structs::SteamNetworkingSocketsStatusChanged& obj)
    {
        gm::wire::codec::writeValue(_buf, obj.conn);
        gm::wire::codec::writeValue(_buf, obj.old_state);
        gm::wire::codec::writeValue(_buf, obj.info);
    }

    template<>
    inline gm_structs::SteamNetworkingSocketsStatusChanged readValue<gm_structs::SteamNetworkingSocketsStatusChanged>(gm::byteio::BufferReader& _buf)
    {
        gm_structs::SteamNetworkingSocketsStatusChanged obj;
        obj.conn = gm::wire::codec::readValue<std::uint32_t>(_buf);
        obj.old_state = gm::wire::codec::readValue<std::int32_t>(_buf);
        obj.info = gm::wire::codec::readValue<gm_structs::SteamNetworkingSocketsConnectionInfo>(_buf);
        return obj;
    }

}

namespace gm::wire::details
{
    template<>
    struct gm_struct_traits<gm_structs::SteamId>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 0;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsGetFollowerCountResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 1;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsIsFollowingResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 2;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsEnumerateFollowingListResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 3;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsRequestClanOfficerListResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 4;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsDownloadClanActivityCountsResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 5;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsAvatarImageLoaded>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 6;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsClanActivityCounts>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 7;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsClanChatMessage>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 8;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsFriendGamePlayed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 9;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsFriendMessage>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 10;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsPersonaStateChange>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 11;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsGameOverlayActivated>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 12;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsGameRichPresenceJoinRequested>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 13;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsGameLobbyJoinRequested>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 14;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsFriendRichPresenceUpdate>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 15;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamFriendsGameServerChangeRequested>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 16;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsFileDetailsResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 17;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsDlcData>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 18;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsTimedTrialStatus>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 19;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsInstallDir>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 20;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsBetaName>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 21;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsNumBetas>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 22;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsBetaInfo>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 23;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsDlcDownloadProgress>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 24;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsLaunchCommandLine>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 25;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsInstallSize>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 26;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsDlcInstallDir>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 27;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsLanguageInfo>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 28;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamAppsDlcInstalled>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 29;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamScreenshotsScreenshotReady>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 30;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStoreAuthUrlResponse>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 31;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserEncryptedAppTicketResponse>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 32;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserDurationControl>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 33;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserMarketEligibilityResponse>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 34;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamNetworkingIdentity>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 35;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserAuthSessionTicket>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 36;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserAvailableVoice>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 37;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserGetVoiceResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 38;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserGameConnectionToken>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 39;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserDataFolder>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 40;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserEncryptedAppTicket>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 41;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserSteamServersConnected>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 42;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserSteamServersDisconnected>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 43;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserSteamServerConnectFailure>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 44;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserClientGameServerDeny>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 45;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserLicensesUpdated>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 46;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserMicroTxnAuthorizationResponse>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 47;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsApiCallResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 48;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsCheckFileSignatureResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 49;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsLowBatteryPower>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 50;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsSteamApiCallCompleted>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 51;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsCserIpPort>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 52;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsGamepadTextInput>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 53;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsImageSize>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 54;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsApiCallCompleted>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 55;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsFilterTextResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 56;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsGamepadTextInputDismissed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 57;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsFloatingGamepadTextInputDismissed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 58;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUtilsWarningMessage>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 59;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcItemDownloadInfo>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 60;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcItemInstallInfo>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 61;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcItemUpdateProgress>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 62;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcQueryResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 63;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcQueryPreviewUrl>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 64;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcQueryMetadata>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 65;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcAdditionalPreview>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 66;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcKeyValueTag>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 67;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcItemInstalled>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 68;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcUserSubscribedItemsListChanged>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 69;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcFileSubscribed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 70;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcFileUnsubscribed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 71;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcQueryCompleted>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 72;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcCreateItemResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 73;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcSubmitItemUpdateResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 74;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcSubscribeItemResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 75;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcUnsubscribeItemResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 76;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcFavoriteItemsListChanged>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 77;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcSetUserItemVoteResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 78;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcGetUserItemVoteResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 79;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcRequestItemDetailsResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 80;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcSupportedGameVersionData>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 81;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcDeleteItemResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 82;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUgcDownloadItemResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 83;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputAnalogActionData>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 84;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputDigitalActionData>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 85;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputMotionData>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 86;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputActiveActionSetLayers>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 87;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputActionOrigins>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 88;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputDeviceBindingRevision>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 89;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputDeviceEvent>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 90;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputActionSetChanged>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 91;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInputControllerBattery>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 92;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsAchievementAndUnlockTime>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 93;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsAchievementAndProgress>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 94;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsAchievementNamesAndPercent>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 95;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsMostAchievedAchievementInfo>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 96;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsNumAchievementsAndHours>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 97;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsStatInt>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 98;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsStatFloat>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 99;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsUserAchievement>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 100;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsGlobalStatInt64>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 101;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsGlobalStatDouble>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 102;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsGlobalStatHistoryInt64>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 103;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsGlobalStatHistoryDouble>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 104;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsDownloadedLeaderboardEntry>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 105;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsRequestUserStatsResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 106;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsLeaderboardFindResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 107;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsScoresDownloadedResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 108;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsScoreUploadedResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 109;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsNumberOfCurrentPlayersResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 110;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 111;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsGlobalStatsReceivedResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 112;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsAttachLeaderboardUgcResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 113;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsUserStatsReceived>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 114;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsUserStatsStored>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 115;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsUserAchievementStored>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 116;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsIntMinMax>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 117;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamUserStatsFloatMinMax>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 118;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMusicPlaybackStatusHasChanged>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 119;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMusicVolumeHasChanged>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 120;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamTimelineGamePhaseRecordingExists>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 121;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamTimelineEventRecordingExists>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 122;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryResultItems>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 123;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryDeserializeResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 124;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventorySerializeResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 125;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryItemProperty>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 126;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryItemsWithPrices>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 127;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryDefProperty>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 128;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryItemPrice>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 129;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryResultReady>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 130;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryFullUpdate>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 131;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryDefinitionUpdate>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 132;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryStartPurchaseResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 133;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamInventoryRequestPricesResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 134;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageFileNameAndSize>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 135;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageQuota>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 136;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageUgcDetails>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 137;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageFileShareResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 138;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageDownloadUgcResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 139;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStoragePublishedFileSubscribed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 140;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStoragePublishedFileUnsubscribed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 141;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageLocalFileChange>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 142;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStoragePublishFileResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 143;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageUpdatePublishedFileResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 144;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageSubscribePublishedFileResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 145;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 146;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyCreated>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 147;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyEnter>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 148;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyMatchList>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 149;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyDataUpdate>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 150;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyChatUpdate>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 151;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyChatMsg>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 152;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyGameCreated>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 153;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyInvite>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 154;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyChatEntry>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 155;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamMatchmakingLobbyGameServer>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 156;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamNetworkingMessagesSessionRequest>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 157;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamNetworkingMessagesSessionFailed>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 158;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamNetworkingMessagesReceived>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 159;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamNetworkingSocketsConnectionInfo>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 160;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamNetworkingSocketsReceived>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 161;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamPartiesAvailableBeaconLocationCount>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 162;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamPartiesAvailableBeaconLocations>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 163;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamPartiesCreateBeaconResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 164;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamPartiesJoinPartyResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 165;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamPartiesChangeNumOpenSlotsResult>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 166;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamPartiesReservationNotification>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 167;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamPartiesBeaconDetails>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 168;
    };

    template<>
    struct gm_struct_traits<gm_structs::SteamNetworkingSocketsStatusChanged>
    {
        static constexpr bool is_gm_struct = true;
        static constexpr std::uint32_t codec_id = 169;
    };

}

std::string steam_api_last_error();
bool steam_api_is_initialized();
bool steam_api_init(std::uint32_t unOwnAppID);
void steam_api_release_current_thread_memory();
bool steam_api_restart_app_if_necessary(std::uint32_t unOwnAppID);
void steam_api_run_callbacks();
void steam_api_shutdown();
void steam_friends_activate_game_overlay(std::string_view pchDialog);
void steam_friends_activate_game_overlay_invite_dialog(std::uint64_t steamIDLobby);
void steam_friends_activate_game_overlay_to_store(std::uint32_t nAppID, gm_enums::SteamFriendsOverlayToStoreFlag eFlag);
void steam_friends_activate_game_overlay_to_user(std::string_view pchDialog, std::uint64_t steamID);
void steam_friends_activate_game_overlay_to_web_page(std::string_view pchURL, gm_enums::SteamFriendsOverlayToWebpageMode eMode);
void steam_friends_clear_rich_presence();
bool steam_friends_close_clan_chat_window_in_steam(std::uint64_t steamIDClanChat);
bool steam_friends_download_clan_activity_counts(const std::vector<std::uint64_t>& psteamIDClans, std::int32_t cClansToRequest, const std::optional<gm::wire::GMFunction>& callback);
void steam_friends_enumerate_following_list(std::uint32_t unStartIndex, const std::optional<gm::wire::GMFunction>& callback);
void steam_friends_set_callback_avatar_image_loaded(const gm::wire::GMFunction& callback);
void steam_friends_clear_callback_avatar_image_loaded();
std::uint64_t steam_friends_get_chat_member_by_index(std::uint64_t steamIDClan, std::int32_t iUser);
gm_structs::SteamFriendsClanActivityCounts steam_friends_get_clan_activity_counts(std::uint64_t steamIDClan);
std::uint64_t steam_friends_get_clan_by_index(std::int32_t iClan);
std::int32_t steam_friends_get_clan_chat_member_count(std::uint64_t steamIDClan);
gm_structs::SteamFriendsClanChatMessage steam_friends_get_clan_chat_message(std::uint64_t steamIDClanChat, std::int32_t iMessage);
std::int32_t steam_friends_get_clan_count();
std::string steam_friends_get_clan_name(std::uint64_t steamIDClan);
std::uint64_t steam_friends_get_clan_officer_by_index(std::uint64_t steamIDClan, std::int32_t iOfficer);
std::int32_t steam_friends_get_clan_officer_count(std::uint64_t steamIDClan);
std::uint64_t steam_friends_get_clan_owner(std::uint64_t steamIDClan);
std::string steam_friends_get_clan_tag(std::uint64_t steamIDClan);
std::uint64_t steam_friends_get_coplay_friend(std::int32_t iCoplayFriend);
std::int32_t steam_friends_get_coplay_friend_count();
void steam_friends_get_follower_count(std::uint64_t steamID, const std::optional<gm::wire::GMFunction>& callback);
std::uint64_t steam_friends_get_friend_by_index(std::int32_t iFriend, std::int32_t iFriendFlags);
std::uint32_t steam_friends_get_friend_coplay_game(std::uint64_t steamIDFriend);
std::int32_t steam_friends_get_friend_coplay_time(std::uint64_t steamIDFriend);
std::int32_t steam_friends_get_friend_count(std::int32_t iFriendFlags);
std::int32_t steam_friends_get_friend_count_from_source(std::uint64_t steamIDSource);
std::uint64_t steam_friends_get_friend_from_source_by_index(std::uint64_t steamIDSource, std::int32_t iFriend);
gm_structs::SteamFriendsFriendGamePlayed steam_friends_get_friend_game_played(std::uint64_t steamIDFriend);
gm_structs::SteamFriendsFriendMessage steam_friends_get_friend_message(std::uint64_t steamIDFriend, std::int32_t iMessageID, std::int32_t cubData);
std::string steam_friends_get_friend_persona_name(std::uint64_t steamIDFriend);
std::string steam_friends_get_friend_persona_name_history(std::uint64_t steamIDFriend, std::int32_t iPersonaName);
gm_enums::SteamFriendsPersonaState steam_friends_get_friend_persona_state(std::uint64_t steamIDFriend);
gm_enums::SteamFriendsRelationship steam_friends_get_friend_relationship(std::uint64_t steamIDFriend);
std::string steam_friends_get_friend_rich_presence(std::uint64_t steamIDFriend, std::string_view pchKey);
std::string steam_friends_get_friend_rich_presence_key_by_index(std::uint64_t steamIDFriend, std::int32_t iKey);
std::int32_t steam_friends_get_friend_rich_presence_key_count(std::uint64_t steamIDFriend);
std::int32_t steam_friends_get_friends_group_count();
std::int32_t steam_friends_get_friends_group_id_by_index(std::int32_t iFG);
std::string steam_friends_get_friends_group_name(std::int32_t friendsGroupID);
std::int32_t steam_friends_get_friend_steam_level(std::uint64_t steam_id_friend);
std::int32_t steam_friends_get_large_friend_avatar(std::uint64_t steam_id_friend);
std::int32_t steam_friends_get_medium_friend_avatar(std::uint64_t steam_id_friend);
std::int32_t steam_friends_get_friends_group_members_count(std::int32_t friendsGroupID);
std::vector<std::uint64_t> steam_friends_get_friends_group_members_list(std::int32_t friendsGroupID);
std::string steam_friends_get_persona_name();
gm_enums::SteamFriendsPersonaState steam_friends_get_persona_state();
std::string steam_friends_get_player_nickname(std::uint64_t steamIDPlayer);
std::int32_t steam_friends_get_small_friend_avatar(std::uint64_t steam_id_friend);
bool steam_friends_has_friend(std::uint64_t steamIDFriend, std::int32_t iFriendFlags);
bool steam_friends_invite_user_to_game(std::uint64_t steamIDFriend, std::string_view pchConnectString);
bool steam_friends_is_clan_chat_admin(std::uint64_t steamIDClanChat, std::uint64_t steamIDUser);
bool steam_friends_is_clan_public(std::uint64_t steamIDClan);
bool steam_friends_is_clan_official_game_group(std::uint64_t steamIDClan);
bool steam_friends_is_clan_chat_window_open_in_steam(std::uint64_t steamIDClanChat);
void steam_friends_is_following(std::uint64_t steamID, const std::optional<gm::wire::GMFunction>& callback);
bool steam_friends_is_user_in_source(std::uint64_t steamIDUser, std::uint64_t steamIDSource);
void steam_friends_request_clan_officer_list(std::uint64_t steamIDClan, const std::optional<gm::wire::GMFunction>& callback);
void steam_friends_request_friend_rich_presence(std::uint64_t steamIDFriend);
bool steam_friends_request_user_information(std::uint64_t steamIDUser, bool bRequireNameOnly);
void steam_friends_set_in_game_voice_speaking(std::uint64_t steamIDUser, bool bSpeaking);
void steam_friends_set_played_with(std::uint64_t steamIDUserPlayedWith);
bool steam_friends_set_rich_presence(std::string_view pchKey, std::string_view pchValue);
void steam_friends_set_callback_persona_state_change(const gm::wire::GMFunction& callback);
void steam_friends_clear_callback_persona_state_change();
void steam_friends_set_callback_game_overlay_activated(const gm::wire::GMFunction& callback);
void steam_friends_clear_callback_game_overlay_activated();
void steam_friends_set_callback_game_rich_presence_join_requested(const gm::wire::GMFunction& callback);
void steam_friends_clear_callback_game_rich_presence_join_requested();
void steam_friends_set_callback_game_lobby_join_requested(const gm::wire::GMFunction& callback);
void steam_friends_clear_callback_game_lobby_join_requested();
void steam_friends_set_callback_friend_rich_presence_update(const gm::wire::GMFunction& callback);
void steam_friends_clear_callback_friend_rich_presence_update();
void steam_friends_set_callback_game_server_change_requested(const gm::wire::GMFunction& callback);
void steam_friends_clear_callback_game_server_change_requested();
gm_structs::SteamAppsDlcData steam_apps_get_dlc_data_by_index(std::int32_t iDLC);
bool steam_apps_is_app_installed(std::uint32_t appID);
bool steam_apps_is_cybercafe();
bool steam_apps_is_dlc_installed(std::uint32_t appID);
bool steam_apps_is_low_violence();
bool steam_apps_is_subscribed();
bool steam_apps_is_subscribed_app(std::uint32_t appID);
bool steam_apps_is_subscribed_from_family_sharing();
bool steam_apps_is_subscribed_from_free_weekend();
gm_structs::SteamAppsTimedTrialStatus steam_apps_is_timed_trial();
bool steam_apps_is_vac_banned();
std::int32_t steam_apps_get_app_build_id();
gm_structs::SteamAppsInstallDir steam_apps_get_app_install_dir(std::uint32_t appID);
std::uint64_t steam_apps_get_app_owner();
std::string steam_apps_get_available_game_languages();
gm_structs::SteamAppsBetaName steam_apps_get_current_beta_name();
gm_structs::SteamAppsNumBetas steam_apps_get_num_betas();
gm_structs::SteamAppsBetaInfo steam_apps_get_beta_info(std::int32_t iBetaIndex);
bool steam_apps_set_active_beta(std::string_view pchBetaName);
std::string steam_apps_get_current_game_language();
std::int32_t steam_apps_get_dlc_count();
gm_structs::SteamAppsDlcDownloadProgress steam_apps_get_dlc_download_progress(std::uint32_t nAppID);
std::uint32_t steam_apps_get_app_ownership_ticket_data(std::uint32_t app_id, gm::wire::GMBuffer ticket_buffer, std::uint32_t max_bytes);
std::uint32_t steam_apps_get_earliest_purchase_unix_time(std::uint32_t nAppID);
void steam_apps_get_file_details(std::string_view pszFileName, const std::optional<gm::wire::GMFunction>& callback);
std::vector<std::uint32_t> steam_apps_get_installed_depots(std::uint32_t appID, std::uint32_t cMaxDepots);
gm_structs::SteamAppsLaunchCommandLine steam_apps_get_launch_command_line(std::int32_t cubCommandLine);
std::string steam_apps_get_launch_query_param(std::string_view pchKey);
void steam_apps_install_dlc(std::uint32_t nAppID);
bool steam_apps_mark_content_corrupt(bool bMissingFilesOnly);
void steam_apps_request_all_proof_of_purchase_keys();
void steam_apps_request_app_proof_of_purchase_key(std::uint32_t nAppID);
void steam_apps_uninstall_dlc(std::uint32_t nAppID);
void steam_apps_set_callback_dlc_installed(const gm::wire::GMFunction& callback);
void steam_apps_clear_callback_dlc_installed();
std::uint32_t steam_screenshots_add_screenshot_to_library(std::string_view pchFilename, std::string_view pchThumbnailFilename, std::int32_t nWidth, std::int32_t nHeight);
std::uint32_t steam_screenshots_add_vr_screenshot_to_library(gm_enums::SteamScreenshotsVrScreenshotType eType, std::string_view pchFilename, std::string_view pchVRFilename);
void steam_screenshots_hook_screenshots(bool bHook);
bool steam_screenshots_is_screenshots_hooked();
bool steam_screenshots_set_location(std::uint32_t hScreenshot, std::string_view pchLocation);
bool steam_screenshots_tag_published_file(std::uint32_t hScreenshot, std::uint64_t unPublishedFileID);
bool steam_screenshots_tag_user(std::uint32_t hScreenshot, std::uint64_t steamID);
void steam_screenshots_trigger_screenshot();
std::uint32_t steam_screenshots_write_screenshot(gm::wire::GMBuffer pubRGB, std::uint32_t cubRGB, std::int32_t nWidth, std::int32_t nHeight);
void steam_screenshots_set_callback_screenshot_ready(const gm::wire::GMFunction& callback);
void steam_screenshots_set_callback_screenshot_requested(const gm::wire::GMFunction& callback);
void steam_screenshots_clear_callback_screenshot_ready();
void steam_screenshots_clear_callback_screenshot_requested();
void steam_user_advertise_game(std::uint64_t steam_id_game_server, std::uint32_t un_ip_server, std::uint32_t us_port_server);
gm_enums::SteamUserBeginAuthSessionResult steam_user_begin_auth_session(gm::wire::GMBuffer auth_ticket, std::int32_t cb_auth_ticket, std::uint64_t steam_id);
bool steam_user_is_behind_nat();
bool steam_user_is_phone_identifying();
bool steam_user_is_phone_requiring_verification();
bool steam_user_is_phone_verified();
bool steam_user_is_two_factor_enabled();
bool steam_user_logged_on();
bool steam_user_set_duration_control_online_state(gm_enums::SteamUserDurationControlOnlineState state);
void steam_user_cancel_auth_ticket(std::uint32_t h_auth_ticket);
gm_enums::SteamApiVoiceResult steam_user_decompress_voice(gm::wire::GMBuffer compressed, std::uint32_t cb_compressed, gm::wire::GMBuffer dest, std::uint32_t cb_dest_buffer_size, std::uint32_t n_desired_sample_rate);
void steam_user_end_auth_session(std::uint64_t steam_id);
gm_structs::SteamUserAuthSessionTicket steam_user_get_auth_session_ticket(gm::wire::GMBuffer out_ticket, std::int32_t cb_max_ticket, const std::optional<gm_structs::SteamNetworkingIdentity>& remote_identity);
std::int32_t steam_user_get_h_steam_user();
std::int32_t steam_user_get_player_steam_level();
std::uint64_t steam_user_get_steam_id();
gm_structs::SteamId steam_user_decode_steam_id(std::uint64_t steam_id);
void steam_user_start_voice_recording();
void steam_user_stop_voice_recording();
std::uint32_t steam_user_get_voice_optimal_sample_rate();
gm_structs::SteamUserAvailableVoice steam_user_get_available_voice();
gm_structs::SteamUserGetVoiceResult steam_user_get_voice(bool b_want_compressed, gm::wire::GMBuffer dest_compressed, std::uint32_t cb_dest_compressed, bool b_want_uncompressed, gm::wire::GMBuffer dest_uncompressed, std::uint32_t cb_dest_uncompressed, std::uint32_t n_desired_sample_rate);
gm_structs::SteamUserDataFolder steam_user_get_user_data_folder();
void steam_user_request_encrypted_app_ticket(gm::wire::GMBuffer data_to_include, std::int32_t cb_data_to_include, const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamUserEncryptedAppTicket steam_user_get_encrypted_app_ticket(gm::wire::GMBuffer out_ticket, std::int32_t cb_max_ticket);
std::int32_t steam_user_get_game_badge_level(std::int32_t n_series, bool b_foil);
std::uint32_t steam_user_get_auth_ticket_for_web_api(std::string_view pch_identity);
void steam_user_get_duration_control(const std::optional<gm::wire::GMFunction>& callback);
void steam_user_request_store_auth_url(std::string_view pch_redirect_url, const std::optional<gm::wire::GMFunction>& callback);
void steam_user_get_market_eligibility(const std::optional<gm::wire::GMFunction>& callback);
void steam_user_track_app_usage_event(std::uint64_t game_id, std::int32_t e_app_usage_event, std::string_view pch_extra_info);
gm_enums::SteamApiUserHasLicenseResult steam_user_user_has_license_for_app(std::uint64_t steam_id, std::uint32_t app_id);
void steam_user_set_callback_steam_servers_connected(const gm::wire::GMFunction& callback);
void steam_user_clear_callback_steam_servers_connected();
void steam_user_set_callback_steam_server_connect_failure(const gm::wire::GMFunction& callback);
void steam_user_clear_callback_steam_server_connect_failure();
void steam_user_set_callback_steam_servers_disconnected(const gm::wire::GMFunction& callback);
void steam_user_clear_callback_steam_servers_disconnected();
void steam_user_set_callback_client_game_server_deny(const gm::wire::GMFunction& callback);
void steam_user_clear_callback_client_game_server_deny();
void steam_user_set_callback_licenses_updated(const gm::wire::GMFunction& callback);
void steam_user_clear_callback_licenses_updated();
void steam_user_set_callback_microtxn_authorization_response(const gm::wire::GMFunction& callback);
void steam_user_clear_callback_microtxn_authorization_response();
bool steam_utils_overlay_needs_present();
void steam_utils_check_file_signature(std::string_view sz_file_name, const std::optional<gm::wire::GMFunction>& callback);
gm_enums::SteamUtilsApiCallFailure steam_utils_get_api_call_failure_reason(std::uint64_t steam_api_call);
gm_structs::SteamUtilsApiCallResult steam_utils_get_api_call_result(std::uint64_t steam_api_call, std::int32_t callback_expected, gm::wire::GMBuffer out_callback, std::int32_t out_callback_size);
void steam_utils_set_callback_ip_country(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_ip_country();
void steam_utils_set_callback_low_battery_power(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_low_battery_power();
void steam_utils_set_callback_steam_api_call_completed(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_steam_api_call_completed();
void steam_utils_set_callback_app_resuming_from_suspend(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_app_resuming_from_suspend();
void steam_utils_set_callback_steam_shutdown(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_steam_shutdown();
std::uint32_t steam_utils_get_app_id();
gm_enums::SteamApiUniverse steam_utils_get_connected_universe();
std::uint32_t steam_utils_get_current_battery_power();
gm_structs::SteamUtilsGamepadTextInput steam_utils_get_entered_gamepad_text_input();
std::uint32_t steam_utils_get_entered_gamepad_text_length();
bool steam_utils_get_image_rgba(std::int32_t i_image, gm::wire::GMBuffer dest, std::int32_t n_dest_buffer_size);
gm_structs::SteamUtilsImageSize steam_utils_get_image_size(std::int32_t i_image);
std::uint32_t steam_utils_get_ipc_call_count();
std::string steam_utils_get_ip_country();
std::uint32_t steam_utils_get_seconds_since_app_active();
std::uint32_t steam_utils_get_seconds_since_computer_active();
std::uint32_t steam_utils_get_server_real_time();
std::string steam_utils_get_steam_ui_language();
bool steam_utils_is_overlay_enabled();
bool steam_utils_is_steam_in_big_picture_mode();
bool steam_utils_is_steam_running_in_vr();
bool steam_utils_is_steam_running_on_steam_deck();
bool steam_utils_is_steam_china_launcher();
gm_structs::SteamUtilsApiCallCompleted steam_utils_is_api_call_completed(std::uint64_t steam_api_call);
bool steam_utils_init_filter_text();
gm_structs::SteamUtilsFilterTextResult steam_utils_filter_text(gm_enums::SteamUtilsTextFilteringContext context, std::uint64_t source_steam_id, std::string_view input_message);
bool steam_utils_is_vr_headset_streaming_enabled();
void steam_utils_set_overlay_notification_inset(std::int32_t n_horizontal_inset, std::int32_t n_vertical_inset);
void steam_utils_set_overlay_notification_position(gm_enums::SteamApiNotificationPosition notification_position);
void steam_utils_set_vr_headset_streaming_enabled(bool b_enabled);
bool steam_utils_show_gamepad_text_input(gm_enums::SteamUtilsGamepadTextInputMode input_mode, gm_enums::SteamUtilsGamepadTextInputLineMode line_mode, std::string_view description, std::uint32_t char_max, std::string_view existing_text);
bool steam_utils_show_floating_gamepad_text_input(gm_enums::SteamUtilsFloatingGamepadTextInputMode keyboard_mode, std::int32_t text_field_x, std::int32_t text_field_y, std::int32_t text_field_width, std::int32_t text_field_height);
void steam_utils_dismiss_floating_gamepad_text_input();
void steam_utils_start_vr_dashboard();
void steam_utils_set_game_launcher_mode(bool b_launcher_mode);
void steam_utils_set_callback_gamepad_text_input_dismissed(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_gamepad_text_input_dismissed();
void steam_utils_set_callback_floating_gamepad_text_input_dismissed(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_floating_gamepad_text_input_dismissed();
void steam_utils_set_callback_warning_message(const gm::wire::GMFunction& callback);
void steam_utils_clear_callback_warning_message();
void steam_ugc_add_app_dependency(std::uint64_t published_file_id, std::uint32_t app_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_add_dependency(std::uint64_t parent_published_file_id, std::uint64_t child_published_file_id, const std::optional<gm::wire::GMFunction>& callback);
bool steam_ugc_add_excluded_tag(std::uint64_t query_handle, std::string_view tag_name);
bool steam_ugc_add_item_key_value_tag(std::uint64_t update_handle, std::string_view key, std::string_view value);
bool steam_ugc_add_item_preview_file(std::uint64_t update_handle, std::string_view preview_file_path, gm_enums::SteamItemPreviewType preview_type);
bool steam_ugc_add_item_preview_video(std::uint64_t update_handle, std::string_view video_id);
void steam_ugc_add_item_to_favorites(std::uint32_t app_id, std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
bool steam_ugc_add_required_key_value_tag(std::uint64_t query_handle, std::string_view key, std::string_view value);
bool steam_ugc_add_required_tag(std::uint64_t query_handle, std::string_view tag_name);
bool steam_ugc_add_required_tag_group(std::uint64_t query_handle, const std::vector<std::string_view>& tags_csv);
bool steam_ugc_init_workshop_for_game_server(std::uint32_t workshop_depot_id, std::string_view folder);
void steam_ugc_create_item(std::uint32_t consumer_app_id, gm_enums::SteamWorkshopFileType workshop_file_type, const std::optional<gm::wire::GMFunction>& callback);
std::uint64_t steam_ugc_create_query_all_ugc_request(gm_enums::SteamUgcQuery query_type, gm_enums::SteamUgcMatchingUgcType matching_ugc_type, std::uint32_t creator_app_id, std::uint32_t consumer_app_id, std::uint32_t page);
std::uint64_t steam_ugc_create_query_ugc_details_request(const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids);
std::uint64_t steam_ugc_create_query_user_ugc_request(std::uint32_t account_id, gm_enums::SteamUserUgcList list_type, gm_enums::SteamUgcMatchingUgcType matching_ugc_type, gm_enums::SteamUserUgcListSortOrder sort_order, std::uint32_t creator_app_id, std::uint32_t consumer_app_id, std::uint32_t page);
void steam_ugc_delete_item(std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
bool steam_ugc_download_item(std::uint64_t published_file_id, bool high_priority);
void steam_ugc_get_app_dependencies(std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamUgcItemDownloadInfo steam_ugc_get_item_download_info(std::uint64_t published_file_id);
gm_structs::SteamUgcItemInstallInfo steam_ugc_get_item_install_info(std::uint64_t published_file_id);
std::uint32_t steam_ugc_get_item_state(std::uint64_t published_file_id);
gm_structs::SteamUgcItemUpdateProgress steam_ugc_get_item_update_progress(std::uint64_t update_handle);
std::uint32_t steam_ugc_get_num_subscribed_items(bool include_locally_disabled);
std::vector<std::uint64_t> steam_ugc_get_subscribed_items(std::uint32_t c_max_entries, bool include_locally_disabled);
gm_structs::SteamUgcQueryResult steam_ugc_get_query_ugc_result(std::uint64_t query_handle, std::uint32_t index);
gm_structs::SteamUgcQueryPreviewUrl steam_ugc_get_query_ugc_preview_url(std::uint64_t query_handle, std::uint32_t index);
gm_structs::SteamUgcQueryMetadata steam_ugc_get_query_ugc_metadata(std::uint64_t query_handle, std::uint32_t index);
std::vector<std::uint64_t> steam_ugc_get_query_ugc_children(std::uint64_t query_handle, std::uint32_t index, std::uint32_t c_max_entries);
std::uint64_t steam_ugc_get_query_ugc_statistic(std::uint64_t query_handle, std::uint32_t index, gm_enums::SteamUgcStatisticType stat_type);
std::uint32_t steam_ugc_get_query_ugc_num_additional_previews(std::uint64_t query_handle, std::uint32_t index);
gm_structs::SteamUgcAdditionalPreview steam_ugc_get_query_ugc_additional_preview(std::uint64_t query_handle, std::uint32_t index, std::uint32_t preview_index, std::string_view original_file_name);
std::uint32_t steam_ugc_get_query_ugc_num_key_value_tags(std::uint64_t query_handle, std::uint32_t index);
gm_structs::SteamUgcKeyValueTag steam_ugc_get_query_ugc_key_value_tag(std::uint64_t query_handle, std::uint32_t index, std::uint32_t key_value_tag_index);
std::vector<std::int32_t> steam_ugc_get_query_ugc_content_descriptors(std::uint64_t query_handle, std::uint32_t index, std::uint32_t max_descriptors);
void steam_ugc_remove_app_dependency(std::uint64_t published_file_id, std::uint32_t app_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_remove_dependency(std::uint64_t parent_published_file_id, std::uint64_t child_published_file_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_remove_item_from_favorites(std::uint32_t app_id, std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
bool steam_ugc_remove_item_key_value_tags(std::uint64_t update_handle, std::string_view key);
bool steam_ugc_remove_item_preview(std::uint64_t update_handle, std::uint32_t index);
bool steam_ugc_add_content_descriptor(std::uint64_t update_handle, gm_enums::SteamUgcContentDescriptorId descriptor_id);
bool steam_ugc_remove_content_descriptor(std::uint64_t update_handle, gm_enums::SteamUgcContentDescriptorId descriptor_id);
bool steam_ugc_set_required_game_versions(std::uint64_t update_handle, std::string_view game_branch_min, std::string_view game_branch_max);
void steam_ugc_request_ugc_details(std::uint64_t published_file_id, std::uint32_t max_age_seconds, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_send_query_ugc_request(std::uint64_t query_handle, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_release_query_ugc_request(std::uint64_t query_handle);
void steam_ugc_set_callback_item_installed(const gm::wire::GMFunction& callback);
void steam_ugc_clear_callback_item_installed();
bool steam_ugc_set_allow_cached_response(std::uint64_t query_handle, std::uint32_t max_age_seconds);
bool steam_ugc_set_cloud_file_name_filter(std::uint64_t query_handle, std::string_view match_cloud_file_name);
bool steam_ugc_set_item_content(std::uint64_t update_handle, std::string_view content_folder);
bool steam_ugc_set_item_description(std::uint64_t update_handle, std::string_view description);
bool steam_ugc_set_item_metadata(std::uint64_t update_handle, std::string_view metadata);
bool steam_ugc_set_item_preview(std::uint64_t update_handle, std::string_view preview_file);
bool steam_ugc_set_item_tags(std::uint64_t update_handle, const std::vector<std::string_view>& tags_csv);
bool steam_ugc_set_item_title(std::uint64_t update_handle, std::string_view title);
bool steam_ugc_set_item_update_language(std::uint64_t update_handle, std::string_view language);
bool steam_ugc_set_items_disabled_locally(const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids, bool disabled_locally);
bool steam_ugc_set_item_visibility(std::uint64_t update_handle, gm_enums::SteamRemoteStoragePublishedFileVisibility visibility);
bool steam_ugc_set_language(std::uint64_t query_handle, std::string_view language);
bool steam_ugc_set_match_any_tag(std::uint64_t query_handle, bool match_any_tag);
bool steam_ugc_set_ranked_by_trend_days(std::uint64_t query_handle, std::uint32_t days);
bool steam_ugc_set_return_additional_previews(std::uint64_t query_handle, bool return_additional_previews);
bool steam_ugc_set_return_children(std::uint64_t query_handle, bool return_children);
bool steam_ugc_set_return_key_value_tags(std::uint64_t query_handle, bool return_key_value_tags);
bool steam_ugc_set_return_long_description(std::uint64_t query_handle, bool return_long_description);
bool steam_ugc_set_return_metadata(std::uint64_t query_handle, bool return_metadata);
bool steam_ugc_set_return_only_ids(std::uint64_t query_handle, bool return_only_ids);
bool steam_ugc_set_return_playtime_stats(std::uint64_t query_handle, std::uint32_t days);
bool steam_ugc_set_return_total_only(std::uint64_t query_handle, bool return_total_only);
bool steam_ugc_set_search_text(std::uint64_t query_handle, std::string_view search_text);
bool steam_ugc_set_subscriptions_load_order(const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids);
void steam_ugc_set_user_item_vote(std::uint64_t published_file_id, bool vote_up, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_get_user_item_vote(std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
std::uint64_t steam_ugc_start_item_update(std::uint32_t consumer_app_id, std::uint64_t published_file_id);
void steam_ugc_start_playtime_tracking(const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_stop_playtime_tracking(const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_stop_playtime_tracking_for_all_items(const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_submit_item_update(std::uint64_t update_handle, std::string_view change_note, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_subscribe_item(std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_suspend_downloads(bool suspend);
void steam_ugc_unsubscribe_item(std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_set_callback_user_subscribed_items_list_changed(const gm::wire::GMFunction& callback);
void steam_ugc_clear_callback_user_subscribed_items_list_changed();
bool steam_ugc_update_item_preview_file(std::uint64_t update_handle, std::uint32_t index, std::string_view preview_file);
bool steam_ugc_update_item_preview_video(std::uint64_t update_handle, std::uint32_t index, std::string_view video_id);
bool steam_ugc_show_workshop_eula();
void steam_ugc_get_workshop_eula_status(const std::optional<gm::wire::GMFunction>& callback);
void steam_ugc_set_callback_file_subscribed(const gm::wire::GMFunction& callback);
void steam_ugc_clear_callback_file_subscribed();
void steam_ugc_set_callback_file_unsubscribed(const gm::wire::GMFunction& callback);
void steam_ugc_clear_callback_file_unsubscribed();
std::uint32_t steam_ugc_get_num_supported_game_versions(std::uint64_t query_handle, std::uint32_t index);
void steam_input_activate_action_set(std::uint64_t input_handle, std::uint64_t action_set_handle);
void steam_input_activate_action_set_layer(std::uint64_t input_handle, std::uint64_t action_set_layer_handle);
void steam_input_deactivate_action_set_layer(std::uint64_t input_handle, std::uint64_t action_set_layer_handle);
void steam_input_deactivate_all_action_set_layers(std::uint64_t input_handle);
gm_structs::SteamInputActiveActionSetLayers steam_input_get_active_action_set_layers(std::uint64_t input_handle);
std::uint64_t steam_input_get_action_set_handle(std::string_view pszActionSetName);
gm_structs::SteamInputAnalogActionData steam_input_get_analog_action_data(std::uint64_t input_handle, std::uint64_t analog_action_handle);
std::uint64_t steam_input_get_analog_action_handle(std::string_view pszActionName);
gm_structs::SteamInputActionOrigins steam_input_get_analog_action_origins(std::uint64_t input_handle, std::uint64_t action_set_handle, std::uint64_t analog_action_handle);
std::string steam_input_get_glyph_png_for_action_origin(std::uint32_t origin, std::uint32_t size, std::uint32_t flags);
std::string steam_input_get_glyph_svg_for_action_origin(std::uint32_t origin, std::uint32_t flags);
std::vector<std::uint64_t> steam_input_get_connected_controllers();
std::uint64_t steam_input_get_controller_for_gamepad_index(std::int32_t nIndex);
std::uint64_t steam_input_get_current_action_set(std::uint64_t input_handle);
gm_structs::SteamInputDigitalActionData steam_input_get_digital_action_data(std::uint64_t input_handle, std::uint64_t digital_action_handle);
std::uint64_t steam_input_get_digital_action_handle(std::string_view pszActionName);
gm_structs::SteamInputActionOrigins steam_input_get_digital_action_origins(std::uint64_t input_handle, std::uint64_t action_set_handle, std::uint64_t digital_action_handle);
std::int32_t steam_input_get_gamepad_index_for_controller(std::uint64_t input_handle);
std::int32_t steam_input_get_input_type_for_handle(std::uint64_t input_handle);
gm_structs::SteamInputMotionData steam_input_get_motion_data(std::uint64_t input_handle);
std::string steam_input_get_string_for_action_origin(std::int32_t eOrigin);
bool steam_input_init(bool explicitly_call_run_frame);
void steam_input_enable_device_callbacks();
void steam_input_run_frame();
bool steam_input_set_dual_sense_trigger_effect(std::uint64_t input_handle, const std::vector<std::uint32_t>& pParam);
void steam_input_set_led_color(std::uint64_t input_handle, std::uint32_t nColorR, std::uint32_t nColorG, std::uint32_t nColorB, std::uint32_t nFlags);
bool steam_input_show_binding_panel(std::uint64_t input_handle);
bool steam_input_shutdown();
void steam_input_stop_analog_action_momentum(std::uint64_t input_handle, std::uint64_t analog_action_handle);
void steam_input_trigger_vibration(std::uint64_t input_handle, std::uint32_t usLeftSpeed, std::uint32_t usRightSpeed);
void steam_input_trigger_vibration_extended(std::uint64_t input_handle, std::uint32_t usLeftSpeed, std::uint32_t usRightSpeed, std::uint32_t usLeftTriggerSpeed, std::uint32_t usRightTriggerSpeed);
std::int32_t steam_input_get_action_origin_from_xbox_origin(std::uint64_t input_handle, std::int32_t eOrigin);
std::int32_t steam_input_translate_action_origin(std::int32_t eDestinationInputType, std::int32_t eSourceOrigin);
gm_structs::SteamInputDeviceBindingRevision steam_input_get_device_binding_revision(std::uint64_t input_handle);
std::uint32_t steam_input_get_remote_play_session_id(std::uint64_t input_handle);
void steam_input_set_callback_device_connected(const gm::wire::GMFunction& callback);
void steam_input_clear_callback_device_connected();
void steam_input_set_callback_device_disconnected(const gm::wire::GMFunction& callback);
void steam_input_clear_callback_device_disconnected();
void steam_input_set_callback_action_set_changed(const gm::wire::GMFunction& callback);
void steam_input_clear_callback_action_set_changed();
void steam_input_set_callback_controller_battery(const gm::wire::GMFunction& callback);
void steam_input_clear_callback_controller_battery();
gm_structs::SteamUserStatsStatInt steam_userstats_get_stat_int(std::string_view stat_name);
gm_structs::SteamUserStatsStatFloat steam_userstats_get_stat_float(std::string_view stat_name);
bool steam_userstats_set_stat_int(std::string_view stat_name, std::int32_t data);
bool steam_userstats_set_stat_float(std::string_view stat_name, float data);
bool steam_userstats_update_avg_rate_stat(std::string_view stat_name, float count_this_session, double session_length);
gm_structs::SteamUserStatsUserAchievement steam_userstats_get_achievement(std::string_view achievement_name);
bool steam_userstats_set_achievement(std::string_view achievement_name);
bool steam_userstats_clear_achievement(std::string_view achievement_name);
gm_structs::SteamUserStatsAchievementAndUnlockTime steam_userstats_achievement_and_unlock_time(std::string_view achievement_name);
bool steam_userstats_store_stats();
std::int32_t steam_userstats_achievement_icon(std::string_view achievement_name);
std::string steam_userstats_achievement_display_attribute(std::string_view achievement_name, std::string_view key);
bool steam_userstats_indicate_achievement_progress(std::string_view achievement_name, std::uint32_t cur_progress, std::uint32_t max_progress);
std::uint32_t steam_userstats_num_achievements();
std::string steam_userstats_achievement_name(std::uint32_t index);
void steam_userstats_request_user_stats(std::uint64_t steam_id_user, const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamUserStatsStatInt steam_userstats_user_stat_int(std::uint64_t steam_id_user, std::string_view stat_name);
gm_structs::SteamUserStatsStatFloat steam_userstats_user_stat_float(std::uint64_t steam_id_user, std::string_view stat_name);
gm_structs::SteamUserStatsUserAchievement steam_userstats_user_achievement(std::uint64_t steam_id_user, std::string_view achievement_name);
gm_structs::SteamUserStatsAchievementAndUnlockTime steam_userstats_user_achievement_and_unlock_time(std::uint64_t steam_id_user, std::string_view achievement_name);
bool steam_userstats_reset_all_stats(bool achievements_too);
void steam_userstats_find_or_create_leaderboard(std::string_view leaderboard_name, gm_enums::SteamLeaderboardSortMethod sort_method, gm_enums::SteamLeaderboardDisplayType display_type, const std::optional<gm::wire::GMFunction>& callback);
void steam_userstats_find_leaderboard(std::string_view leaderboard_name, const std::optional<gm::wire::GMFunction>& callback);
std::string steam_userstats_leaderboard_name(std::uint64_t leaderboard_handle);
std::int32_t steam_userstats_leaderboard_entry_count(std::uint64_t leaderboard_handle);
gm_enums::SteamLeaderboardSortMethod steam_userstats_leaderboard_sort_method(std::uint64_t leaderboard_handle);
gm_enums::SteamLeaderboardDisplayType steam_userstats_leaderboard_display_type(std::uint64_t leaderboard_handle);
void steam_userstats_download_leaderboard_entries(std::uint64_t leaderboard_handle, gm_enums::SteamLeaderboardDataRequest request, std::int32_t range_start, std::int32_t range_end, const std::optional<gm::wire::GMFunction>& callback);
void steam_userstats_download_leaderboard_entries_for_users(std::uint64_t leaderboard_handle, const std::vector<std::uint64_t>& users, const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamUserStatsDownloadedLeaderboardEntry steam_userstats_downloaded_leaderboard_entry(std::uint64_t leaderboard_entries_handle, std::int32_t entry_index, gm::wire::GMBuffer buffer, std::uint32_t buffer_size);
void steam_userstats_upload_leaderboard_score(std::uint64_t leaderboard_handle, gm_enums::SteamLeaderboardUploadScoreMethod method, std::int32_t score, gm::wire::GMBuffer score_details_buffer, std::int32_t score_details_count, const std::optional<gm::wire::GMFunction>& callback);
void steam_userstats_attach_leaderboard_ugc(std::uint64_t leaderboard_handle, std::uint64_t ugc_handle, const std::optional<gm::wire::GMFunction>& callback);
void steam_userstats_number_of_current_players(const std::optional<gm::wire::GMFunction>& callback);
void steam_userstats_request_global_achievement_percentages(const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamUserStatsMostAchievedAchievementInfo steam_userstats_most_achieved_achievement_info();
gm_structs::SteamUserStatsMostAchievedAchievementInfo steam_userstats_next_most_achieved_achievement_info(std::int32_t iterator_prev);
float steam_userstats_achievement_achieved_percent(std::string_view achievement_name);
void steam_userstats_request_global_stats(std::int32_t history_days, const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamUserStatsGlobalStatInt64 steam_userstats_global_stat_int64(std::string_view stat_name);
gm_structs::SteamUserStatsGlobalStatDouble steam_userstats_global_stat_double(std::string_view stat_name);
gm_structs::SteamUserStatsGlobalStatHistoryInt64 steam_userstats_global_stat_history_int64(std::string_view stat_name);
gm_structs::SteamUserStatsGlobalStatHistoryDouble steam_userstats_global_stat_history_double(std::string_view stat_name);
gm_structs::SteamUserStatsIntMinMax steam_userstats_achievement_progress_limits_int(std::string_view achievement_name, std::uint32_t cur_progress, std::uint32_t max_progress);
gm_structs::SteamUserStatsFloatMinMax steam_userstats_achievement_progress_limits_float(std::string_view achievement_name, float cur_progress, float max_progress);
void steam_userstats_set_callback_user_stats_received(const gm::wire::GMFunction& callback);
void steam_userstats_clear_callback_user_stats_received();
void steam_userstats_set_callback_user_stats_stored(const gm::wire::GMFunction& callback);
void steam_userstats_clear_callback_user_stats_stored();
void steam_userstats_set_callback_user_achievement_stored(const gm::wire::GMFunction& callback);
void steam_userstats_clear_callback_user_achievement_stored();
bool steam_music_is_enabled();
bool steam_music_is_playing();
gm_enums::SteamMusicPlaybackStatus steam_music_get_playback_status();
void steam_music_play();
void steam_music_pause();
void steam_music_play_previous();
void steam_music_play_next();
void steam_music_set_volume(float volume);
float steam_music_get_volume();
void steam_music_set_callback_playback_status_has_changed(const gm::wire::GMFunction& callback);
void steam_music_clear_callback_playback_status_has_changed();
void steam_music_set_callback_volume_has_changed(const gm::wire::GMFunction& callback);
void steam_music_clear_callback_volume_has_changed();
void steam_timeline_set_timeline_tooltip(std::string_view description, float time_delta_seconds);
void steam_timeline_clear_timeline_tooltip(float time_delta_seconds);
std::uint64_t steam_timeline_add_instantaneous_timeline_event(std::string_view title, std::string_view description, std::string_view icon, std::uint32_t priority, float start_offset_seconds, gm_enums::SteamTimelineEventClipPriority possible_clip);
std::uint64_t steam_timeline_add_range_timeline_event(std::string_view title, std::string_view description, std::string_view icon, std::uint32_t priority, float start_offset_seconds, float duration_seconds, gm_enums::SteamTimelineEventClipPriority possible_clip);
std::uint64_t steam_timeline_start_range_timeline_event(std::string_view title, std::string_view description, std::string_view icon, std::uint32_t priority, float start_offset_seconds, gm_enums::SteamTimelineEventClipPriority possible_clip);
void steam_timeline_update_range_timeline_event(std::uint64_t event_handle, std::string_view title, std::string_view description, std::string_view icon, std::uint32_t priority, gm_enums::SteamTimelineEventClipPriority possible_clip);
void steam_timeline_end_range_timeline_event(std::uint64_t event_handle, float end_offset_seconds);
void steam_timeline_remove_timeline_event(std::uint64_t event_handle);
std::uint64_t steam_timeline_does_event_recording_exist(std::uint64_t event_handle);
void steam_timeline_start_game_phase();
void steam_timeline_end_game_phase();
void steam_timeline_set_game_phase_id(std::string_view phase_id);
std::uint64_t steam_timeline_does_game_phase_recording_exist(std::string_view phase_id);
void steam_timeline_add_game_phase_tag(std::string_view tag_name, std::string_view tag_icon, std::string_view tag_group, std::uint32_t priority);
void steam_timeline_set_game_phase_attribute(std::string_view attribute_group, std::string_view attribute_value, std::uint32_t priority);
void steam_timeline_set_timeline_game_mode(gm_enums::SteamTimelineGameMode mode);
void steam_timeline_open_overlay_to_game_phase(std::string_view phase_id);
void steam_timeline_open_overlay_to_timeline_event(std::uint64_t event_handle);
void steam_timeline_set_callback_game_phase_recording_exists(const gm::wire::GMFunction& callback);
void steam_timeline_clear_callback_game_phase_recording_exists();
void steam_timeline_set_callback_event_recording_exists(const gm::wire::GMFunction& callback);
void steam_timeline_clear_callback_event_recording_exists();
std::int32_t steam_inventory_add_promo_item(std::uint32_t item_def_id, const std::optional<gm::wire::GMFunction>& callback);
std::int32_t steam_inventory_add_promo_items(const std::vector<std::uint32_t>& item_def_ids, std::uint32_t num_item_defs, const std::optional<gm::wire::GMFunction>& callback);
bool steam_inventory_check_result_steam_id(std::int32_t result_handle, std::uint64_t steam_id_expected);
std::int32_t steam_inventory_consume_item(std::uint64_t item_instance_id, std::uint32_t quantity, const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamInventoryDeserializeResult steam_inventory_deserialize_result(gm::wire::GMBuffer data, std::uint32_t data_size);
void steam_inventory_destroy_result(std::int32_t result_handle);
std::int32_t steam_inventory_exchange_items(const std::vector<std::uint32_t>& generate_item_defs, const std::vector<std::uint32_t>& generate_qty, std::uint32_t generate_len, const std::vector<std::uint64_t>& destroy_instance_ids, const std::vector<std::uint32_t>& destroy_qty, std::uint32_t destroy_len, const std::optional<gm::wire::GMFunction>& callback);
std::int32_t steam_inventory_generate_items(const std::vector<std::uint32_t>& item_defs, const std::vector<std::uint32_t>& quantities, std::uint32_t count, const std::optional<gm::wire::GMFunction>& callback);
std::int32_t steam_inventory_get_all_items();
gm_structs::SteamInventoryResultItems steam_inventory_get_result_items(std::int32_t result_handle);
gm_enums::SteamApiResult steam_inventory_get_result_status(std::int32_t result_handle);
std::uint32_t steam_inventory_get_result_timestamp(std::int32_t result_handle);
std::vector<std::uint32_t> steam_inventory_get_eligible_promo_item_definition_ids(std::uint32_t c_max_item_defs);
bool steam_inventory_load_item_definitions();
std::vector<std::uint32_t> steam_inventory_get_item_definition_ids(std::uint32_t c_max_item_defs);
std::int32_t steam_inventory_get_items_by_id(const std::vector<std::uint64_t>& item_instance_ids, const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamInventorySerializeResult steam_inventory_serialize_result(std::int32_t result_handle, gm::wire::GMBuffer out_data, std::uint32_t out_capacity);
std::vector<std::string> steam_inventory_get_result_item_property_keys_array(std::int32_t result_handle, std::uint32_t item_index);
gm_structs::SteamInventoryItemProperty steam_inventory_get_result_item_property(std::int32_t result_handle, std::uint32_t item_index, std::string_view property_name);
void steam_inventory_start_purchase(const std::vector<std::uint32_t>& item_def_ids, const std::vector<std::uint32_t>& quantities, std::uint32_t count, const std::optional<gm::wire::GMFunction>& callback);
void steam_inventory_request_prices(const std::optional<gm::wire::GMFunction>& callback);
std::uint32_t steam_inventory_get_num_items_with_prices();
gm_structs::SteamInventoryItemsWithPrices steam_inventory_get_items_with_prices(std::uint32_t max);
std::int32_t steam_inventory_start_update_properties();
bool steam_inventory_remove_property(std::int32_t result_handle, std::uint64_t item_instance_id, std::string_view property_name);
bool steam_inventory_set_property_string(std::int32_t result_handle, std::uint64_t item_instance_id, std::string_view property_name, std::string_view value);
bool steam_inventory_set_property_bool(std::int32_t result_handle, std::uint64_t item_instance_id, std::string_view property_name, bool value);
bool steam_inventory_set_property_int64(std::int32_t result_handle, std::uint64_t item_instance_id, std::string_view property_name, std::int64_t value);
bool steam_inventory_set_property_float(std::int32_t result_handle, std::uint64_t item_instance_id, std::string_view property_name, float value);
std::int32_t steam_inventory_submit_update_properties(std::int32_t result_handle, const std::optional<gm::wire::GMFunction>& callback);
std::int32_t steam_inventory_transfer_item_quantity(std::uint64_t item_instance_id_source, std::uint32_t quantity, std::uint64_t item_instance_id_dest, const std::optional<gm::wire::GMFunction>& callback);
std::int32_t steam_inventory_trigger_item_drop(std::uint32_t item_def_id, const std::optional<gm::wire::GMFunction>& callback);
std::int32_t steam_inventory_grant_promo_items(const std::optional<gm::wire::GMFunction>& callback);
gm_structs::SteamInventoryDefProperty steam_inventory_get_item_definition_property(std::uint32_t item_def_id, std::string_view property_name);
std::vector<std::string> steam_inventory_get_item_definition_property_keys(std::uint32_t item_def_id);
gm_structs::SteamInventoryItemPrice steam_inventory_get_item_price(std::uint32_t item_def_id);
void steam_inventory_set_callback_result_ready(const gm::wire::GMFunction& callback);
void steam_inventory_clear_callback_result_ready();
void steam_inventory_set_callback_full_update(const gm::wire::GMFunction& callback);
void steam_inventory_clear_callback_full_update();
void steam_inventory_set_callback_definition_update(const gm::wire::GMFunction& callback);
void steam_inventory_clear_callback_definition_update();
void steam_remote_storage_set_callback_published_file_subscribed(const gm::wire::GMFunction& callback);
void steam_remote_storage_clear_callback_published_file_subscribed();
void steam_remote_storage_set_callback_published_file_unsubscribed(const gm::wire::GMFunction& callback);
void steam_remote_storage_clear_callback_published_file_unsubscribed();
void steam_remote_storage_set_callback_local_file_change(const gm::wire::GMFunction& callback);
void steam_remote_storage_clear_callback_local_file_change();
bool steam_remote_storage_is_cloud_enabled_for_account();
bool steam_remote_storage_is_cloud_enabled_for_app();
void steam_remote_storage_set_cloud_enabled_for_app(bool enabled);
bool steam_remote_storage_file_write(std::string_view file_name, gm::wire::GMBuffer data, std::uint32_t bytes);
std::int32_t steam_remote_storage_file_read(std::string_view file_name, gm::wire::GMBuffer out_data, std::uint32_t max_bytes);
bool steam_remote_storage_file_delete(std::string_view file_name);
bool steam_remote_storage_file_exists(std::string_view file_name);
bool steam_remote_storage_file_persisted(std::string_view file_name);
std::int32_t steam_remote_storage_get_file_size(std::string_view file_name);
std::int32_t steam_remote_storage_get_file_timestamp(std::string_view file_name);
std::int32_t steam_remote_storage_get_file_count();
gm_structs::SteamRemoteStorageFileNameAndSize steam_remote_storage_get_file_name_and_size(std::int32_t index);
gm_structs::SteamRemoteStorageQuota steam_remote_storage_get_quota();
bool steam_remote_storage_set_sync_platforms(std::string_view file_name, gm_enums::SteamRemoteStoragePlatform platforms);
gm_enums::SteamRemoteStoragePlatform steam_remote_storage_get_sync_platforms(std::string_view file_name);
bool steam_remote_storage_file_forget(std::string_view file_name);
std::uint64_t steam_remote_storage_file_write_stream_open(std::string_view file_name);
bool steam_remote_storage_file_write_stream_write_chunk(std::uint64_t stream, gm::wire::GMBuffer data, std::uint32_t bytes);
bool steam_remote_storage_file_write_stream_close(std::uint64_t stream);
bool steam_remote_storage_file_write_stream_cancel(std::uint64_t stream);
std::int32_t steam_remote_storage_get_cached_ugc_count();
std::uint64_t steam_remote_storage_get_cached_ugc_handle(std::int32_t index);
gm_structs::SteamRemoteStorageUgcDetails steam_remote_storage_get_ugc_details(std::uint64_t ugc_handle);
std::int32_t steam_remote_storage_ugc_read(std::uint64_t ugc_handle, gm::wire::GMBuffer out_data, std::int32_t bytes_to_read, std::uint32_t offset, gm_enums::SteamRemoteStorageUgcReadAction action);
void steam_remote_storage_file_share(std::string_view file_name, const std::optional<gm::wire::GMFunction>& callback);
void steam_remote_storage_ugc_download(std::uint64_t ugc_handle, std::uint32_t priority, const std::optional<gm::wire::GMFunction>& callback);
void steam_remote_storage_ugc_download_to_location(std::uint64_t ugc_handle, std::string_view location, std::uint32_t priority, const std::optional<gm::wire::GMFunction>& callback);
void steam_remote_storage_publish_workshop_file(std::string_view file, std::string_view preview_file, std::uint32_t app_id_consumer, std::string_view title, std::string_view description, gm_enums::SteamRemoteStoragePublishedFileVisibility visibility, std::string_view tags_csv, gm_enums::SteamRemoteStorageWorkshopFileType file_type, const std::optional<gm::wire::GMFunction>& callback);
std::uint64_t steam_remote_storage_create_published_file_update_request(std::uint64_t published_file_id);
bool steam_remote_storage_update_published_file_file(std::uint64_t update_handle, std::string_view file);
bool steam_remote_storage_update_published_file_preview_file(std::uint64_t update_handle, std::string_view preview_file);
bool steam_remote_storage_update_published_file_title(std::uint64_t update_handle, std::string_view title);
bool steam_remote_storage_update_published_file_description(std::uint64_t update_handle, std::string_view description);
bool steam_remote_storage_update_published_file_visibility(std::uint64_t update_handle, gm_enums::SteamRemoteStoragePublishedFileVisibility visibility);
bool steam_remote_storage_update_published_file_tags(std::uint64_t update_handle, std::string_view tags_csv);
void steam_remote_storage_commit_published_file_update(std::uint64_t update_handle, const std::optional<gm::wire::GMFunction>& callback);
void steam_remote_storage_subscribe_published_file(std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_remote_storage_unsubscribe_published_file(std::uint64_t published_file_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_matchmaking_set_callback_lobby_data_update(const gm::wire::GMFunction& callback);
void steam_matchmaking_clear_callback_lobby_data_update();
void steam_matchmaking_set_callback_lobby_chat_update(const gm::wire::GMFunction& callback);
void steam_matchmaking_clear_callback_lobby_chat_update();
void steam_matchmaking_set_callback_lobby_chat_msg(const gm::wire::GMFunction& callback);
void steam_matchmaking_clear_callback_lobby_chat_msg();
void steam_matchmaking_set_callback_lobby_game_created(const gm::wire::GMFunction& callback);
void steam_matchmaking_clear_callback_lobby_game_created();
void steam_matchmaking_set_callback_lobby_invite(const gm::wire::GMFunction& callback);
void steam_matchmaking_clear_callback_lobby_invite();
void steam_matchmaking_create_lobby(gm_enums::SteamMatchmakingLobbyType lobby_type, std::int32_t max_members, const std::optional<gm::wire::GMFunction>& callback);
void steam_matchmaking_join_lobby(std::uint64_t lobby_id, const std::optional<gm::wire::GMFunction>& callback);
void steam_matchmaking_request_lobby_list(const std::optional<gm::wire::GMFunction>& callback);
void steam_matchmaking_add_request_lobby_list_string_filter(std::string_view key, std::string_view value, gm_enums::SteamMatchmakingLobbyComparison comparison);
void steam_matchmaking_add_request_lobby_list_numerical_filter(std::string_view key, std::int32_t value, gm_enums::SteamMatchmakingLobbyComparison comparison);
void steam_matchmaking_add_request_lobby_list_near_value_filter(std::string_view key, std::int32_t value);
void steam_matchmaking_add_request_lobby_list_distance_filter(gm_enums::SteamMatchmakingLobbyDistanceFilter distance);
void steam_matchmaking_add_request_lobby_list_result_count_filter(std::int32_t max_results);
std::uint64_t steam_matchmaking_get_lobby_by_index(std::int32_t index);
void steam_matchmaking_leave_lobby(std::uint64_t lobby_id);
bool steam_matchmaking_set_lobby_owner(std::uint64_t lobby_id, std::uint64_t new_owner_id);
std::uint64_t steam_matchmaking_get_lobby_owner(std::uint64_t lobby_id);
std::int32_t steam_matchmaking_get_num_lobby_members(std::uint64_t lobby_id);
std::uint64_t steam_matchmaking_get_lobby_member_by_index(std::uint64_t lobby_id, std::int32_t member_index);
bool steam_matchmaking_set_lobby_data(std::uint64_t lobby_id, std::string_view key, std::string_view value);
std::string steam_matchmaking_get_lobby_data(std::uint64_t lobby_id, std::string_view key);
bool steam_matchmaking_delete_lobby_data(std::uint64_t lobby_id, std::string_view key);
std::int32_t steam_matchmaking_get_lobby_data_count(std::uint64_t lobby_id);
bool steam_matchmaking_get_lobby_data_by_index(std::uint64_t lobby_id, std::int32_t index, gm::wire::GMBuffer key_out, std::int32_t key_max, gm::wire::GMBuffer val_out, std::int32_t val_max);
void steam_matchmaking_set_lobby_member_data(std::uint64_t lobby_id, std::string_view key, std::string_view value);
std::string steam_matchmaking_get_lobby_member_data(std::uint64_t lobby_id, std::uint64_t member_id, std::string_view key);
bool steam_matchmaking_send_lobby_chat_msg(std::uint64_t lobby_id, gm::wire::GMBuffer msg, std::int32_t bytes);
gm_structs::SteamMatchmakingLobbyChatEntry steam_matchmaking_get_lobby_chat_entry(std::uint64_t lobby_id, std::int32_t chat_id, gm::wire::GMBuffer out_buffer, std::int32_t out_max_bytes);
void steam_matchmaking_add_request_lobby_list_filter_slots_available(std::int32_t slots_available);
bool steam_matchmaking_request_lobby_data(std::uint64_t steam_id_lobby);
bool steam_matchmaking_set_lobby_joinable(std::uint64_t steam_id_lobby, bool joinable);
bool steam_matchmaking_invite_user_to_lobby(std::uint64_t steam_id_lobby, std::uint64_t steam_id_invitee);
void steam_matchmaking_set_lobby_game_server(std::uint64_t steam_id_lobby, std::uint32_t ip, std::uint32_t port, std::uint64_t steam_id_gs);
bool steam_matchmaking_set_linked_lobby(std::uint64_t steam_id_lobby, std::uint64_t steam_id_lobby_dependent);
gm_structs::SteamMatchmakingLobbyGameServer steam_matchmaking_get_lobby_game_server(std::uint64_t steam_id_lobby);
void steam_networking_messages_set_callback_session_request(const gm::wire::GMFunction& callback);
void steam_networking_messages_clear_callback_session_request();
void steam_networking_messages_set_callback_session_failed(const gm::wire::GMFunction& callback);
void steam_networking_messages_clear_callback_session_failed();
std::int32_t steam_networking_messages_send_message_to_user(std::uint64_t steam_id_remote, gm::wire::GMBuffer data, std::uint32_t bytes, std::int32_t send_flags, std::int32_t remote_channel);
gm_structs::SteamNetworkingMessagesReceived steam_networking_messages_receive_one_on_channel(std::int32_t local_channel, gm::wire::GMBuffer out_data, std::uint32_t max_bytes, std::uint32_t offset);
bool steam_networking_messages_accept_session_with_user(std::uint64_t steam_id_remote);
bool steam_networking_messages_close_session_with_user(std::uint64_t steam_id_remote);
bool steam_networking_messages_close_channel_with_user(std::uint64_t steam_id_remote, std::int32_t local_channel);
void steam_networking_sockets_set_callback_connection_status_changed(const gm::wire::GMFunction& callback);
void steam_networking_sockets_clear_callback_connection_status_changed();
std::uint32_t steam_networking_sockets_create_listen_socket_ip(std::uint32_t port);
bool steam_networking_sockets_close_listen_socket(std::uint32_t listen_socket);
std::uint32_t steam_networking_sockets_connect_by_ip_address(std::string_view ip, std::uint32_t port);
std::int32_t steam_networking_sockets_accept_connection(std::uint32_t conn);
bool steam_networking_sockets_close_connection(std::uint32_t conn, std::int32_t reason, std::string_view debug, bool linger);
bool steam_networking_sockets_set_connection_user_data(std::uint32_t conn, std::uint64_t user_data);
std::uint64_t steam_networking_sockets_get_connection_user_data(std::uint32_t conn);
void steam_networking_sockets_set_connection_name(std::uint32_t conn, std::string_view name);
std::string steam_networking_sockets_get_connection_name(std::uint32_t conn);
std::int32_t steam_networking_sockets_send_message_to_connection(std::uint32_t conn, gm::wire::GMBuffer data, std::uint32_t bytes, gm_enums::SteamNetworkingSendFlags send_flags);
std::int32_t steam_networking_sockets_flush_messages_on_connection(std::uint32_t conn);
gm_structs::SteamNetworkingSocketsReceived steam_networking_sockets_receive_one_on_connection(std::uint32_t conn, gm::wire::GMBuffer out_data, std::uint32_t max_bytes, std::uint32_t offset);
gm_structs::SteamNetworkingSocketsConnectionInfo steam_networking_sockets_get_connection_info(std::uint32_t conn);
std::string steam_networking_sockets_get_detailed_connection_status(std::uint32_t conn);
void steam_networking_sockets_run_callbacks();
std::vector<std::uint32_t> steam_networking_sockets_create_socket_pair(bool use_network_loopback);
std::uint32_t steam_networking_sockets_create_listen_socket_p2p(std::int32_t local_virtual_port);
std::uint32_t steam_networking_sockets_connect_p2p(std::uint64_t steam_id_remote, std::int32_t remote_virtual_port);
std::string steam_networking_sockets_get_listen_socket_address(std::uint32_t listen_socket);
std::uint32_t steam_networking_sockets_create_poll_group();
bool steam_networking_sockets_destroy_poll_group(std::uint32_t poll_group);
bool steam_networking_sockets_set_connection_poll_group(std::uint32_t conn, std::uint32_t poll_group);
gm_structs::SteamNetworkingSocketsReceived steam_networking_sockets_receive_messages_on_poll_group(std::uint32_t poll_group, gm::wire::GMBuffer out_data, std::uint32_t max_bytes, std::uint32_t offset);
void steam_parties_set_callback_reservation_notification(const gm::wire::GMFunction& callback);
void steam_parties_clear_callback_reservation_notification();
void steam_parties_set_callback_available_beacon_locations_updated(const gm::wire::GMFunction& callback);
void steam_parties_clear_callback_available_beacon_locations_updated();
void steam_parties_set_callback_active_beacons_updated(const gm::wire::GMFunction& callback);
void steam_parties_clear_callback_active_beacons_updated();
gm_structs::SteamPartiesAvailableBeaconLocationCount steam_parties_get_num_available_beacon_locations();
gm_structs::SteamPartiesAvailableBeaconLocations steam_parties_get_available_beacon_locations();
bool steam_parties_create_beacon(std::uint32_t open_slots, gm_enums::SteamPartiesBeaconLocationType beacon_location_type, std::uint64_t beacon_location_id, std::string_view connect_string, std::string_view metadata, const std::optional<gm::wire::GMFunction>& callback);
bool steam_parties_on_reservation_completed(std::uint64_t beacon_id, std::uint64_t user_steam_id);
bool steam_parties_change_num_open_slots(std::uint64_t beacon_id, std::uint32_t open_slots, const std::optional<gm::wire::GMFunction>& callback);
bool steam_parties_destroy_beacon(std::uint64_t beacon_id);
std::uint32_t steam_parties_get_num_active_beacons();
std::uint64_t steam_parties_get_beacon_by_index(std::uint32_t index);
gm_structs::SteamPartiesBeaconDetails steam_parties_get_beacon_details(std::uint64_t beacon_id);
bool steam_parties_join_party(std::uint64_t beacon_id, const std::optional<gm::wire::GMFunction>& callback);
std::string steam_parties_get_beacon_location_data(gm_enums::SteamPartiesBeaconLocationType beacon_location_type, std::uint64_t beacon_location_id, gm_enums::SteamPartiesBeaconLocationData data_kind);
