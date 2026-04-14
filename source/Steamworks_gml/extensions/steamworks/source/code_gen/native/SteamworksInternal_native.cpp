// ##### extgen :: Auto-generated file do not edit!! #####

#include "SteamworksInternal_native.h"
#include "SteamworksInternal_exports.h"

using namespace gm_structs;
using namespace gm::wire::codec;

static gm::runtime::DispatchQueue __dispatch_queue;

// Internal function used for fetching dispatched function calls to GML
GMEXPORT double __EXT_NATIVE__Steamworks_invocation_handler(char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferWriter __bw{ __ret_buffer, static_cast<size_t>(__ret_buffer_length) };
    return __dispatch_queue.fetch(__bw);
}

static std::queue<gm::wire::GMBuffer> __buffer_queue;

// Internal function used for queueing buffers to native code
GMEXPORT double __EXT_NATIVE__Steamworks_queue_buffer(char* __arg_buffer, double __arg_buffer_length)
{
    gm::wire::GMBuffer __buff{__arg_buffer, static_cast<uint64_t>(__arg_buffer_length)};
    __buffer_queue.push(__buff);

    return 1.0;
}

GMEXPORT char* __EXT_NATIVE__steam_api_last_error()
{
    static std::string __result;
    __result = steam_api_last_error();
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_api_is_initialized()
{
    auto&& __result = steam_api_is_initialized();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_api_init(double unOwnAppID)
{
    auto&& __result = steam_api_init(static_cast<std::uint32_t>(unOwnAppID));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_api_release_current_thread_memory()
{
    steam_api_release_current_thread_memory();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_api_restart_app_if_necessary(double unOwnAppID)
{
    auto&& __result = steam_api_restart_app_if_necessary(static_cast<std::uint32_t>(unOwnAppID));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_api_run_callbacks()
{
    steam_api_run_callbacks();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_api_shutdown()
{
    steam_api_shutdown();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_activate_game_overlay(char* pchDialog)
{
    steam_friends_activate_game_overlay(pchDialog);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_activate_game_overlay_invite_dialog(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDLobby, type: UInt64
    std::uint64_t steamIDLobby = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_friends_activate_game_overlay_invite_dialog(steamIDLobby);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_activate_game_overlay_to_store(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: nAppID, type: UInt32
    std::uint32_t nAppID = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: eFlag, type: enum SteamFriendsOverlayToStoreFlag
    gm_enums::SteamFriendsOverlayToStoreFlag eFlag = gm::wire::codec::readValue<gm_enums::SteamFriendsOverlayToStoreFlag>(__br);

    steam_friends_activate_game_overlay_to_store(nAppID, eFlag);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_activate_game_overlay_to_user(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: pchDialog, type: String
    std::string_view pchDialog = gm::wire::codec::readValue<std::string_view>(__br);

    // field: steamID, type: UInt64
    std::uint64_t steamID = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_friends_activate_game_overlay_to_user(pchDialog, steamID);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_activate_game_overlay_to_web_page(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: pchURL, type: String
    std::string_view pchURL = gm::wire::codec::readValue<std::string_view>(__br);

    // field: eMode, type: enum SteamFriendsOverlayToWebpageMode
    gm_enums::SteamFriendsOverlayToWebpageMode eMode = gm::wire::codec::readValue<gm_enums::SteamFriendsOverlayToWebpageMode>(__br);

    steam_friends_activate_game_overlay_to_web_page(pchURL, eMode);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_rich_presence()
{
    steam_friends_clear_rich_presence();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_close_clan_chat_window_in_steam(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClanChat, type: UInt64
    std::uint64_t steamIDClanChat = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_close_clan_chat_window_in_steam(steamIDClanChat);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_download_clan_activity_counts(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: psteamIDClans, type: UInt64[]
    std::vector<std::uint64_t> psteamIDClans = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: cClansToRequest, type: Int32
    std::int32_t cClansToRequest = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_friends_download_clan_activity_counts(psteamIDClans, cClansToRequest, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_enumerate_following_list(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: unStartIndex, type: UInt32
    std::uint32_t unStartIndex = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_friends_enumerate_following_list(unStartIndex, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_callback_avatar_image_loaded(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_friends_set_callback_avatar_image_loaded(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_callback_avatar_image_loaded()
{
    steam_friends_clear_callback_avatar_image_loaded();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_chat_member_by_index(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iUser, type: Int32
    std::int32_t iUser = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_friends_get_chat_member_by_index(steamIDClan, iUser);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_activity_counts(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_clan_activity_counts(steamIDClan);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamFriendsClanActivityCounts
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_by_index(double iClan, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_friends_get_clan_by_index(static_cast<std::int32_t>(iClan));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_chat_member_count(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_clan_chat_member_count(steamIDClan);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_chat_message(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClanChat, type: UInt64
    std::uint64_t steamIDClanChat = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iMessage, type: Int32
    std::int32_t iMessage = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_friends_get_clan_chat_message(steamIDClanChat, iMessage);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamFriendsClanChatMessage
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_count()
{
    auto&& __result = steam_friends_get_clan_count();
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_clan_name(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    static std::string __result;
    __result = steam_friends_get_clan_name(steamIDClan);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_officer_by_index(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iOfficer, type: Int32
    std::int32_t iOfficer = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_friends_get_clan_officer_by_index(steamIDClan, iOfficer);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_officer_count(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_clan_officer_count(steamIDClan);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_clan_owner(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_clan_owner(steamIDClan);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_clan_tag(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    static std::string __result;
    __result = steam_friends_get_clan_tag(steamIDClan);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_coplay_friend(double iCoplayFriend, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_friends_get_coplay_friend(static_cast<std::int32_t>(iCoplayFriend));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_coplay_friend_count()
{
    auto&& __result = steam_friends_get_coplay_friend_count();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_follower_count(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamID, type: UInt64
    std::uint64_t steamID = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_friends_get_follower_count(steamID, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_by_index(double iFriend, double iFriendFlags, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_friends_get_friend_by_index(static_cast<std::int32_t>(iFriend), static_cast<std::int32_t>(iFriendFlags));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_coplay_game(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_coplay_game(steamIDFriend);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_coplay_time(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_coplay_time(steamIDFriend);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_count(double iFriendFlags)
{
    auto&& __result = steam_friends_get_friend_count(static_cast<std::int32_t>(iFriendFlags));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_count_from_source(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDSource, type: UInt64
    std::uint64_t steamIDSource = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_count_from_source(steamIDSource);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_from_source_by_index(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDSource, type: UInt64
    std::uint64_t steamIDSource = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iFriend, type: Int32
    std::int32_t iFriend = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_friends_get_friend_from_source_by_index(steamIDSource, iFriend);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_game_played(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_game_played(steamIDFriend);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamFriendsFriendGamePlayed
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_message(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iMessageID, type: Int32
    std::int32_t iMessageID = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: cubData, type: Int32
    std::int32_t cubData = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_friends_get_friend_message(steamIDFriend, iMessageID, cubData);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamFriendsFriendMessage
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_friend_persona_name(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    static std::string __result;
    __result = steam_friends_get_friend_persona_name(steamIDFriend);
    return (char*)__result.c_str();
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_friend_persona_name_history(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iPersonaName, type: Int32
    std::int32_t iPersonaName = gm::wire::codec::readValue<std::int32_t>(__br);

    static std::string __result;
    __result = steam_friends_get_friend_persona_name_history(steamIDFriend, iPersonaName);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_persona_state(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_persona_state(steamIDFriend);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamFriendsPersonaState
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_relationship(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_relationship(steamIDFriend);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamFriendsRelationship
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_friend_rich_presence(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: pchKey, type: String
    std::string_view pchKey = gm::wire::codec::readValue<std::string_view>(__br);

    static std::string __result;
    __result = steam_friends_get_friend_rich_presence(steamIDFriend, pchKey);
    return (char*)__result.c_str();
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_friend_rich_presence_key_by_index(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iKey, type: Int32
    std::int32_t iKey = gm::wire::codec::readValue<std::int32_t>(__br);

    static std::string __result;
    __result = steam_friends_get_friend_rich_presence_key_by_index(steamIDFriend, iKey);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_rich_presence_key_count(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_rich_presence_key_count(steamIDFriend);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friends_group_count()
{
    auto&& __result = steam_friends_get_friends_group_count();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friends_group_id_by_index(double iFG)
{
    auto&& __result = steam_friends_get_friends_group_id_by_index(static_cast<std::int32_t>(iFG));
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_friends_group_name(double friendsGroupID)
{
    static std::string __result;
    __result = steam_friends_get_friends_group_name(static_cast<std::int32_t>(friendsGroupID));
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friend_steam_level(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_friend, type: UInt64
    std::uint64_t steam_id_friend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_friend_steam_level(steam_id_friend);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_large_friend_avatar(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_friend, type: UInt64
    std::uint64_t steam_id_friend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_large_friend_avatar(steam_id_friend);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_medium_friend_avatar(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_friend, type: UInt64
    std::uint64_t steam_id_friend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_medium_friend_avatar(steam_id_friend);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friends_group_members_count(double friendsGroupID)
{
    auto&& __result = steam_friends_get_friends_group_members_count(static_cast<std::int32_t>(friendsGroupID));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_friends_group_members_list(double friendsGroupID, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_friends_get_friends_group_members_list(static_cast<std::int32_t>(friendsGroupID));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_persona_name()
{
    static std::string __result;
    __result = steam_friends_get_persona_name();
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_persona_state(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_friends_get_persona_state();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamFriendsPersonaState
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_friends_get_player_nickname(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDPlayer, type: UInt64
    std::uint64_t steamIDPlayer = gm::wire::codec::readValue<std::uint64_t>(__br);

    static std::string __result;
    __result = steam_friends_get_player_nickname(steamIDPlayer);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_friends_get_small_friend_avatar(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_friend, type: UInt64
    std::uint64_t steam_id_friend = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_get_small_friend_avatar(steam_id_friend);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_has_friend(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: iFriendFlags, type: Int32
    std::int32_t iFriendFlags = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_friends_has_friend(steamIDFriend, iFriendFlags);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_invite_user_to_game(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: pchConnectString, type: String
    std::string_view pchConnectString = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_friends_invite_user_to_game(steamIDFriend, pchConnectString);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_is_clan_chat_admin(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClanChat, type: UInt64
    std::uint64_t steamIDClanChat = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: steamIDUser, type: UInt64
    std::uint64_t steamIDUser = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_is_clan_chat_admin(steamIDClanChat, steamIDUser);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_is_clan_public(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_is_clan_public(steamIDClan);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_is_clan_official_game_group(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_is_clan_official_game_group(steamIDClan);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_is_clan_chat_window_open_in_steam(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClanChat, type: UInt64
    std::uint64_t steamIDClanChat = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_is_clan_chat_window_open_in_steam(steamIDClanChat);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_is_following(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamID, type: UInt64
    std::uint64_t steamID = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_friends_is_following(steamID, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_is_user_in_source(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDUser, type: UInt64
    std::uint64_t steamIDUser = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: steamIDSource, type: UInt64
    std::uint64_t steamIDSource = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_friends_is_user_in_source(steamIDUser, steamIDSource);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_request_clan_officer_list(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDClan, type: UInt64
    std::uint64_t steamIDClan = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_friends_request_clan_officer_list(steamIDClan, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_request_friend_rich_presence(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDFriend, type: UInt64
    std::uint64_t steamIDFriend = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_friends_request_friend_rich_presence(steamIDFriend);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_request_user_information(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDUser, type: UInt64
    std::uint64_t steamIDUser = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: bRequireNameOnly, type: Bool
    bool bRequireNameOnly = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_friends_request_user_information(steamIDUser, bRequireNameOnly);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_in_game_voice_speaking(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDUser, type: UInt64
    std::uint64_t steamIDUser = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: bSpeaking, type: Bool
    bool bSpeaking = gm::wire::codec::readValue<bool>(__br);

    steam_friends_set_in_game_voice_speaking(steamIDUser, bSpeaking);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_played_with(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steamIDUserPlayedWith, type: UInt64
    std::uint64_t steamIDUserPlayedWith = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_friends_set_played_with(steamIDUserPlayedWith);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_rich_presence(char* pchKey, char* pchValue)
{
    auto&& __result = steam_friends_set_rich_presence(pchKey, pchValue);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_callback_persona_state_change(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_friends_set_callback_persona_state_change(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_callback_persona_state_change()
{
    steam_friends_clear_callback_persona_state_change();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_callback_game_overlay_activated(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_friends_set_callback_game_overlay_activated(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_callback_game_overlay_activated()
{
    steam_friends_clear_callback_game_overlay_activated();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_callback_game_rich_presence_join_requested(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_friends_set_callback_game_rich_presence_join_requested(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_callback_game_rich_presence_join_requested()
{
    steam_friends_clear_callback_game_rich_presence_join_requested();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_callback_game_lobby_join_requested(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_friends_set_callback_game_lobby_join_requested(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_callback_game_lobby_join_requested()
{
    steam_friends_clear_callback_game_lobby_join_requested();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_callback_friend_rich_presence_update(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_friends_set_callback_friend_rich_presence_update(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_callback_friend_rich_presence_update()
{
    steam_friends_clear_callback_friend_rich_presence_update();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_set_callback_game_server_change_requested(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_friends_set_callback_game_server_change_requested(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_friends_clear_callback_game_server_change_requested()
{
    steam_friends_clear_callback_game_server_change_requested();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_dlc_data_by_index(double iDLC, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_dlc_data_by_index(static_cast<std::int32_t>(iDLC));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsDlcData
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_app_installed(double appID)
{
    auto&& __result = steam_apps_is_app_installed(static_cast<std::uint32_t>(appID));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_cybercafe()
{
    auto&& __result = steam_apps_is_cybercafe();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_dlc_installed(double appID)
{
    auto&& __result = steam_apps_is_dlc_installed(static_cast<std::uint32_t>(appID));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_low_violence()
{
    auto&& __result = steam_apps_is_low_violence();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_subscribed()
{
    auto&& __result = steam_apps_is_subscribed();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_subscribed_app(double appID)
{
    auto&& __result = steam_apps_is_subscribed_app(static_cast<std::uint32_t>(appID));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_subscribed_from_family_sharing()
{
    auto&& __result = steam_apps_is_subscribed_from_family_sharing();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_subscribed_from_free_weekend()
{
    auto&& __result = steam_apps_is_subscribed_from_free_weekend();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_timed_trial(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_is_timed_trial();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsTimedTrialStatus
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_is_vac_banned()
{
    auto&& __result = steam_apps_is_vac_banned();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_app_build_id()
{
    auto&& __result = steam_apps_get_app_build_id();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_app_install_dir(double appID, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_app_install_dir(static_cast<std::uint32_t>(appID));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsInstallDir
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_app_owner(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_app_owner();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_apps_get_available_game_languages()
{
    static std::string __result;
    __result = steam_apps_get_available_game_languages();
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_current_beta_name(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_current_beta_name();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsBetaName
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_num_betas(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_num_betas();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsNumBetas
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_beta_info(double iBetaIndex, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_beta_info(static_cast<std::int32_t>(iBetaIndex));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsBetaInfo
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_set_active_beta(char* pchBetaName)
{
    auto&& __result = steam_apps_set_active_beta(pchBetaName);
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_apps_get_current_game_language()
{
    static std::string __result;
    __result = steam_apps_get_current_game_language();
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_dlc_count()
{
    auto&& __result = steam_apps_get_dlc_count();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_dlc_download_progress(double nAppID, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_dlc_download_progress(static_cast<std::uint32_t>(nAppID));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsDlcDownloadProgress
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_app_ownership_ticket_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: app_id, type: UInt32
    std::uint32_t app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: ticket_buffer, type: Buffer
    gm::wire::GMBuffer ticket_buffer = __buffer_queue.front();
    __buffer_queue.pop();

    // field: max_bytes, type: UInt32
    std::uint32_t max_bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_apps_get_app_ownership_ticket_data(app_id, ticket_buffer, max_bytes);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_earliest_purchase_unix_time(double nAppID)
{
    auto&& __result = steam_apps_get_earliest_purchase_unix_time(static_cast<std::uint32_t>(nAppID));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_file_details(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: pszFileName, type: String
    std::string_view pszFileName = gm::wire::codec::readValue<std::string_view>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_apps_get_file_details(pszFileName, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_installed_depots(double appID, double cMaxDepots, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_installed_depots(static_cast<std::uint32_t>(appID), static_cast<std::uint32_t>(cMaxDepots));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt32[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_get_launch_command_line(double cubCommandLine, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_apps_get_launch_command_line(static_cast<std::int32_t>(cubCommandLine));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamAppsLaunchCommandLine
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_apps_get_launch_query_param(char* pchKey)
{
    static std::string __result;
    __result = steam_apps_get_launch_query_param(pchKey);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_apps_install_dlc(double nAppID)
{
    steam_apps_install_dlc(static_cast<std::uint32_t>(nAppID));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_mark_content_corrupt(double bMissingFilesOnly)
{
    auto&& __result = steam_apps_mark_content_corrupt(static_cast<bool>(bMissingFilesOnly));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_apps_request_all_proof_of_purchase_keys()
{
    steam_apps_request_all_proof_of_purchase_keys();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_request_app_proof_of_purchase_key(double nAppID)
{
    steam_apps_request_app_proof_of_purchase_key(static_cast<std::uint32_t>(nAppID));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_uninstall_dlc(double nAppID)
{
    steam_apps_uninstall_dlc(static_cast<std::uint32_t>(nAppID));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_set_callback_dlc_installed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_apps_set_callback_dlc_installed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_apps_clear_callback_dlc_installed()
{
    steam_apps_clear_callback_dlc_installed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_add_screenshot_to_library(char* pchFilename, char* pchThumbnailFilename, double nWidth, double nHeight)
{
    auto&& __result = steam_screenshots_add_screenshot_to_library(pchFilename, pchThumbnailFilename, static_cast<std::int32_t>(nWidth), static_cast<std::int32_t>(nHeight));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_add_vr_screenshot_to_library(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: eType, type: enum SteamScreenshotsVrScreenshotType
    gm_enums::SteamScreenshotsVrScreenshotType eType = gm::wire::codec::readValue<gm_enums::SteamScreenshotsVrScreenshotType>(__br);

    // field: pchFilename, type: String
    std::string_view pchFilename = gm::wire::codec::readValue<std::string_view>(__br);

    // field: pchVRFilename, type: String
    std::string_view pchVRFilename = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_screenshots_add_vr_screenshot_to_library(eType, pchFilename, pchVRFilename);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_hook_screenshots(double bHook)
{
    steam_screenshots_hook_screenshots(static_cast<bool>(bHook));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_is_screenshots_hooked()
{
    auto&& __result = steam_screenshots_is_screenshots_hooked();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_set_location(double hScreenshot, char* pchLocation)
{
    auto&& __result = steam_screenshots_set_location(static_cast<std::uint32_t>(hScreenshot), pchLocation);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_tag_published_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: hScreenshot, type: UInt32
    std::uint32_t hScreenshot = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: unPublishedFileID, type: UInt64
    std::uint64_t unPublishedFileID = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_screenshots_tag_published_file(hScreenshot, unPublishedFileID);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_tag_user(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: hScreenshot, type: UInt32
    std::uint32_t hScreenshot = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: steamID, type: UInt64
    std::uint64_t steamID = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_screenshots_tag_user(hScreenshot, steamID);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_trigger_screenshot()
{
    steam_screenshots_trigger_screenshot();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_write_screenshot(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: pubRGB, type: Buffer
    gm::wire::GMBuffer pubRGB = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cubRGB, type: UInt32
    std::uint32_t cubRGB = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: nWidth, type: Int32
    std::int32_t nWidth = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: nHeight, type: Int32
    std::int32_t nHeight = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_screenshots_write_screenshot(pubRGB, cubRGB, nWidth, nHeight);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_set_callback_screenshot_ready(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_screenshots_set_callback_screenshot_ready(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_set_callback_screenshot_requested(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_screenshots_set_callback_screenshot_requested(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_clear_callback_screenshot_ready()
{
    steam_screenshots_clear_callback_screenshot_ready();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_screenshots_clear_callback_screenshot_requested()
{
    steam_screenshots_clear_callback_screenshot_requested();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_advertise_game(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_game_server, type: UInt64
    std::uint64_t steam_id_game_server = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: un_ip_server, type: UInt32
    std::uint32_t un_ip_server = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: us_port_server, type: UInt32
    std::uint32_t us_port_server = gm::wire::codec::readValue<std::uint32_t>(__br);

    steam_user_advertise_game(steam_id_game_server, un_ip_server, us_port_server);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_begin_auth_session(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: auth_ticket, type: Buffer
    gm::wire::GMBuffer auth_ticket = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_auth_ticket, type: Int32
    std::int32_t cb_auth_ticket = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: steam_id, type: UInt64
    std::uint64_t steam_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_user_begin_auth_session(auth_ticket, cb_auth_ticket, steam_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamUserBeginAuthSessionResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_is_behind_nat()
{
    auto&& __result = steam_user_is_behind_nat();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_is_phone_identifying()
{
    auto&& __result = steam_user_is_phone_identifying();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_is_phone_requiring_verification()
{
    auto&& __result = steam_user_is_phone_requiring_verification();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_is_phone_verified()
{
    auto&& __result = steam_user_is_phone_verified();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_is_two_factor_enabled()
{
    auto&& __result = steam_user_is_two_factor_enabled();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_logged_on()
{
    auto&& __result = steam_user_logged_on();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_set_duration_control_online_state(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: state, type: enum SteamUserDurationControlOnlineState
    gm_enums::SteamUserDurationControlOnlineState state = gm::wire::codec::readValue<gm_enums::SteamUserDurationControlOnlineState>(__br);

    auto&& __result = steam_user_set_duration_control_online_state(state);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_cancel_auth_ticket(double h_auth_ticket)
{
    steam_user_cancel_auth_ticket(static_cast<std::uint32_t>(h_auth_ticket));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_decompress_voice(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: compressed, type: Buffer
    gm::wire::GMBuffer compressed = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_compressed, type: UInt32
    std::uint32_t cb_compressed = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: dest, type: Buffer
    gm::wire::GMBuffer dest = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_dest_buffer_size, type: UInt32
    std::uint32_t cb_dest_buffer_size = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: n_desired_sample_rate, type: UInt32
    std::uint32_t n_desired_sample_rate = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_user_decompress_voice(compressed, cb_compressed, dest, cb_dest_buffer_size, n_desired_sample_rate);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamApiVoiceResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_end_auth_session(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id, type: UInt64
    std::uint64_t steam_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_user_end_auth_session(steam_id);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_auth_session_ticket(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: out_ticket, type: Buffer
    gm::wire::GMBuffer out_ticket = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_max_ticket, type: Int32
    std::int32_t cb_max_ticket = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: remote_identity, type: optional<struct SteamNetworkingIdentity>
    std::optional<gm_structs::SteamNetworkingIdentity> remote_identity = gm::wire::codec::readOptional<gm_structs::SteamNetworkingIdentity>(__br);

    auto&& __result = steam_user_get_auth_session_ticket(out_ticket, cb_max_ticket, remote_identity);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserAuthSessionTicket
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_h_steam_user()
{
    auto&& __result = steam_user_get_h_steam_user();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_get_player_steam_level()
{
    auto&& __result = steam_user_get_player_steam_level();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_get_steam_id(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_user_get_steam_id();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_decode_steam_id(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id, type: UInt64
    std::uint64_t steam_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_user_decode_steam_id(steam_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamId
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_start_voice_recording()
{
    steam_user_start_voice_recording();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_stop_voice_recording()
{
    steam_user_stop_voice_recording();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_voice_optimal_sample_rate()
{
    auto&& __result = steam_user_get_voice_optimal_sample_rate();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_get_available_voice(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_user_get_available_voice();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserAvailableVoice
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_voice(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: b_want_compressed, type: Bool
    bool b_want_compressed = gm::wire::codec::readValue<bool>(__br);

    // field: dest_compressed, type: Buffer
    gm::wire::GMBuffer dest_compressed = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_dest_compressed, type: UInt32
    std::uint32_t cb_dest_compressed = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: b_want_uncompressed, type: Bool
    bool b_want_uncompressed = gm::wire::codec::readValue<bool>(__br);

    // field: dest_uncompressed, type: Buffer
    gm::wire::GMBuffer dest_uncompressed = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_dest_uncompressed, type: UInt32
    std::uint32_t cb_dest_uncompressed = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: n_desired_sample_rate, type: UInt32
    std::uint32_t n_desired_sample_rate = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_user_get_voice(b_want_compressed, dest_compressed, cb_dest_compressed, b_want_uncompressed, dest_uncompressed, cb_dest_uncompressed, n_desired_sample_rate);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserGetVoiceResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_user_data_folder(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_user_get_user_data_folder();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserDataFolder
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_request_encrypted_app_ticket(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: data_to_include, type: Buffer
    gm::wire::GMBuffer data_to_include = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_data_to_include, type: Int32
    std::int32_t cb_data_to_include = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_user_request_encrypted_app_ticket(data_to_include, cb_data_to_include, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_encrypted_app_ticket(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: out_ticket, type: Buffer
    gm::wire::GMBuffer out_ticket = __buffer_queue.front();
    __buffer_queue.pop();

    // field: cb_max_ticket, type: Int32
    std::int32_t cb_max_ticket = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_user_get_encrypted_app_ticket(out_ticket, cb_max_ticket);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserEncryptedAppTicket
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_game_badge_level(double n_series, double b_foil)
{
    auto&& __result = steam_user_get_game_badge_level(static_cast<std::int32_t>(n_series), static_cast<bool>(b_foil));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_get_auth_ticket_for_web_api(char* pch_identity)
{
    auto&& __result = steam_user_get_auth_ticket_for_web_api(pch_identity);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_user_get_duration_control(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_user_get_duration_control(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_request_store_auth_url(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: pch_redirect_url, type: String
    std::string_view pch_redirect_url = gm::wire::codec::readValue<std::string_view>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_user_request_store_auth_url(pch_redirect_url, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_get_market_eligibility(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_user_get_market_eligibility(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_track_app_usage_event(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: game_id, type: UInt64
    std::uint64_t game_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: e_app_usage_event, type: Int32
    std::int32_t e_app_usage_event = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: pch_extra_info, type: String
    std::string_view pch_extra_info = gm::wire::codec::readValue<std::string_view>(__br);

    steam_user_track_app_usage_event(game_id, e_app_usage_event, pch_extra_info);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_user_has_license_for_app(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id, type: UInt64
    std::uint64_t steam_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: app_id, type: UInt32
    std::uint32_t app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_user_user_has_license_for_app(steam_id, app_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamApiUserHasLicenseResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_set_callback_steam_servers_connected(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_user_set_callback_steam_servers_connected(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_clear_callback_steam_servers_connected()
{
    steam_user_clear_callback_steam_servers_connected();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_set_callback_steam_server_connect_failure(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_user_set_callback_steam_server_connect_failure(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_clear_callback_steam_server_connect_failure()
{
    steam_user_clear_callback_steam_server_connect_failure();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_set_callback_steam_servers_disconnected(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_user_set_callback_steam_servers_disconnected(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_clear_callback_steam_servers_disconnected()
{
    steam_user_clear_callback_steam_servers_disconnected();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_set_callback_client_game_server_deny(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_user_set_callback_client_game_server_deny(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_clear_callback_client_game_server_deny()
{
    steam_user_clear_callback_client_game_server_deny();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_set_callback_licenses_updated(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_user_set_callback_licenses_updated(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_clear_callback_licenses_updated()
{
    steam_user_clear_callback_licenses_updated();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_set_callback_microtxn_authorization_response(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_user_set_callback_microtxn_authorization_response(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_user_clear_callback_microtxn_authorization_response()
{
    steam_user_clear_callback_microtxn_authorization_response();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_overlay_needs_present()
{
    auto&& __result = steam_utils_overlay_needs_present();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_check_file_signature(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: sz_file_name, type: String
    std::string_view sz_file_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_utils_check_file_signature(sz_file_name, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_api_call_failure_reason(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_api_call, type: UInt64
    std::uint64_t steam_api_call = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_utils_get_api_call_failure_reason(steam_api_call);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamUtilsApiCallFailure
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_api_call_result(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_api_call, type: UInt64
    std::uint64_t steam_api_call = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback_expected, type: Int32
    std::int32_t callback_expected = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: out_callback, type: Buffer
    gm::wire::GMBuffer out_callback = __buffer_queue.front();
    __buffer_queue.pop();

    // field: out_callback_size, type: Int32
    std::int32_t out_callback_size = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_utils_get_api_call_result(steam_api_call, callback_expected, out_callback, out_callback_size);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUtilsApiCallResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_ip_country(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_ip_country(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_ip_country()
{
    steam_utils_clear_callback_ip_country();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_low_battery_power(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_low_battery_power(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_low_battery_power()
{
    steam_utils_clear_callback_low_battery_power();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_steam_api_call_completed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_steam_api_call_completed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_steam_api_call_completed()
{
    steam_utils_clear_callback_steam_api_call_completed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_app_resuming_from_suspend(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_app_resuming_from_suspend(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_app_resuming_from_suspend()
{
    steam_utils_clear_callback_app_resuming_from_suspend();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_steam_shutdown(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_steam_shutdown(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_steam_shutdown()
{
    steam_utils_clear_callback_steam_shutdown();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_app_id()
{
    auto&& __result = steam_utils_get_app_id();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_connected_universe(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_utils_get_connected_universe();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamApiUniverse
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_current_battery_power()
{
    auto&& __result = steam_utils_get_current_battery_power();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_entered_gamepad_text_input(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_utils_get_entered_gamepad_text_input();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUtilsGamepadTextInput
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_entered_gamepad_text_length()
{
    auto&& __result = steam_utils_get_entered_gamepad_text_length();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_image_rgba(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: i_image, type: Int32
    std::int32_t i_image = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: dest, type: Buffer
    gm::wire::GMBuffer dest = __buffer_queue.front();
    __buffer_queue.pop();

    // field: n_dest_buffer_size, type: Int32
    std::int32_t n_dest_buffer_size = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_utils_get_image_rgba(i_image, dest, n_dest_buffer_size);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_image_size(double i_image, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_utils_get_image_size(static_cast<std::int32_t>(i_image));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUtilsImageSize
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_ipc_call_count()
{
    auto&& __result = steam_utils_get_ipc_call_count();
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_utils_get_ip_country()
{
    static std::string __result;
    __result = steam_utils_get_ip_country();
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_seconds_since_app_active()
{
    auto&& __result = steam_utils_get_seconds_since_app_active();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_seconds_since_computer_active()
{
    auto&& __result = steam_utils_get_seconds_since_computer_active();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_get_server_real_time()
{
    auto&& __result = steam_utils_get_server_real_time();
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_utils_get_steam_ui_language()
{
    static std::string __result;
    __result = steam_utils_get_steam_ui_language();
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_utils_is_overlay_enabled()
{
    auto&& __result = steam_utils_is_overlay_enabled();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_is_steam_in_big_picture_mode()
{
    auto&& __result = steam_utils_is_steam_in_big_picture_mode();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_is_steam_running_in_vr()
{
    auto&& __result = steam_utils_is_steam_running_in_vr();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_is_steam_running_on_steam_deck()
{
    auto&& __result = steam_utils_is_steam_running_on_steam_deck();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_is_steam_china_launcher()
{
    auto&& __result = steam_utils_is_steam_china_launcher();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_is_api_call_completed(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_api_call, type: UInt64
    std::uint64_t steam_api_call = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_utils_is_api_call_completed(steam_api_call);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUtilsApiCallCompleted
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_init_filter_text()
{
    auto&& __result = steam_utils_init_filter_text();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_filter_text(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: context, type: enum SteamUtilsTextFilteringContext
    gm_enums::SteamUtilsTextFilteringContext context = gm::wire::codec::readValue<gm_enums::SteamUtilsTextFilteringContext>(__br);

    // field: source_steam_id, type: UInt64
    std::uint64_t source_steam_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: input_message, type: String
    std::string_view input_message = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_utils_filter_text(context, source_steam_id, input_message);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUtilsFilterTextResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_is_vr_headset_streaming_enabled()
{
    auto&& __result = steam_utils_is_vr_headset_streaming_enabled();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_overlay_notification_inset(double n_horizontal_inset, double n_vertical_inset)
{
    steam_utils_set_overlay_notification_inset(static_cast<std::int32_t>(n_horizontal_inset), static_cast<std::int32_t>(n_vertical_inset));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_overlay_notification_position(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: notification_position, type: enum SteamApiNotificationPosition
    gm_enums::SteamApiNotificationPosition notification_position = gm::wire::codec::readValue<gm_enums::SteamApiNotificationPosition>(__br);

    steam_utils_set_overlay_notification_position(notification_position);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_vr_headset_streaming_enabled(double b_enabled)
{
    steam_utils_set_vr_headset_streaming_enabled(static_cast<bool>(b_enabled));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_show_gamepad_text_input(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_mode, type: enum SteamUtilsGamepadTextInputMode
    gm_enums::SteamUtilsGamepadTextInputMode input_mode = gm::wire::codec::readValue<gm_enums::SteamUtilsGamepadTextInputMode>(__br);

    // field: line_mode, type: enum SteamUtilsGamepadTextInputLineMode
    gm_enums::SteamUtilsGamepadTextInputLineMode line_mode = gm::wire::codec::readValue<gm_enums::SteamUtilsGamepadTextInputLineMode>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    // field: char_max, type: UInt32
    std::uint32_t char_max = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: existing_text, type: String
    std::string_view existing_text = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_utils_show_gamepad_text_input(input_mode, line_mode, description, char_max, existing_text);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_show_floating_gamepad_text_input(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: keyboard_mode, type: enum SteamUtilsFloatingGamepadTextInputMode
    gm_enums::SteamUtilsFloatingGamepadTextInputMode keyboard_mode = gm::wire::codec::readValue<gm_enums::SteamUtilsFloatingGamepadTextInputMode>(__br);

    // field: text_field_x, type: Int32
    std::int32_t text_field_x = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: text_field_y, type: Int32
    std::int32_t text_field_y = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: text_field_width, type: Int32
    std::int32_t text_field_width = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: text_field_height, type: Int32
    std::int32_t text_field_height = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_utils_show_floating_gamepad_text_input(keyboard_mode, text_field_x, text_field_y, text_field_width, text_field_height);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_utils_dismiss_floating_gamepad_text_input()
{
    steam_utils_dismiss_floating_gamepad_text_input();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_start_vr_dashboard()
{
    steam_utils_start_vr_dashboard();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_game_launcher_mode(double b_launcher_mode)
{
    steam_utils_set_game_launcher_mode(static_cast<bool>(b_launcher_mode));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_gamepad_text_input_dismissed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_gamepad_text_input_dismissed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_gamepad_text_input_dismissed()
{
    steam_utils_clear_callback_gamepad_text_input_dismissed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_floating_gamepad_text_input_dismissed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_floating_gamepad_text_input_dismissed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_floating_gamepad_text_input_dismissed()
{
    steam_utils_clear_callback_floating_gamepad_text_input_dismissed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_set_callback_warning_message(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_utils_set_callback_warning_message(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_utils_clear_callback_warning_message()
{
    steam_utils_clear_callback_warning_message();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_app_dependency(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: app_id, type: UInt32
    std::uint32_t app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_add_app_dependency(published_file_id, app_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_dependency(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: parent_published_file_id, type: UInt64
    std::uint64_t parent_published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: child_published_file_id, type: UInt64
    std::uint64_t child_published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_add_dependency(parent_published_file_id, child_published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_excluded_tag(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: tag_name, type: String
    std::string_view tag_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_add_excluded_tag(query_handle, tag_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_item_key_value_tag(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: String
    std::string_view value = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_add_item_key_value_tag(update_handle, key, value);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_item_preview_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: preview_file_path, type: String
    std::string_view preview_file_path = gm::wire::codec::readValue<std::string_view>(__br);

    // field: preview_type, type: enum SteamItemPreviewType
    gm_enums::SteamItemPreviewType preview_type = gm::wire::codec::readValue<gm_enums::SteamItemPreviewType>(__br);

    auto&& __result = steam_ugc_add_item_preview_file(update_handle, preview_file_path, preview_type);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_item_preview_video(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: video_id, type: String
    std::string_view video_id = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_add_item_preview_video(update_handle, video_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_item_to_favorites(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: app_id, type: UInt32
    std::uint32_t app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_add_item_to_favorites(app_id, published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_required_key_value_tag(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: String
    std::string_view value = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_add_required_key_value_tag(query_handle, key, value);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_required_tag(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: tag_name, type: String
    std::string_view tag_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_add_required_tag(query_handle, tag_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_required_tag_group(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: tags_csv, type: String[]
    std::vector<std::string_view> tags_csv = gm::wire::codec::readVector<std::string_view>(__br);

    auto&& __result = steam_ugc_add_required_tag_group(query_handle, tags_csv);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_init_workshop_for_game_server(double workshop_depot_id, char* folder)
{
    auto&& __result = steam_ugc_init_workshop_for_game_server(static_cast<std::uint32_t>(workshop_depot_id), folder);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_create_item(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: consumer_app_id, type: UInt32
    std::uint32_t consumer_app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: workshop_file_type, type: enum SteamWorkshopFileType
    gm_enums::SteamWorkshopFileType workshop_file_type = gm::wire::codec::readValue<gm_enums::SteamWorkshopFileType>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_create_item(consumer_app_id, workshop_file_type, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_create_query_all_ugc_request(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_type, type: enum SteamUgcQuery
    gm_enums::SteamUgcQuery query_type = gm::wire::codec::readValue<gm_enums::SteamUgcQuery>(__br);

    // field: matching_ugc_type, type: enum SteamUgcMatchingUgcType
    gm_enums::SteamUgcMatchingUgcType matching_ugc_type = gm::wire::codec::readValue<gm_enums::SteamUgcMatchingUgcType>(__br);

    // field: creator_app_id, type: UInt32
    std::uint32_t creator_app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: consumer_app_id, type: UInt32
    std::uint32_t consumer_app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: page, type: UInt32
    std::uint32_t page = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_create_query_all_ugc_request(query_type, matching_ugc_type, creator_app_id, consumer_app_id, page);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_create_query_ugc_details_request(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_ids, type: UInt64[]
    std::vector<std::uint64_t> published_file_ids = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: num_published_file_ids, type: UInt32
    std::uint32_t num_published_file_ids = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_create_query_ugc_details_request(published_file_ids, num_published_file_ids);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_create_query_user_ugc_request(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: account_id, type: UInt32
    std::uint32_t account_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: list_type, type: enum SteamUserUgcList
    gm_enums::SteamUserUgcList list_type = gm::wire::codec::readValue<gm_enums::SteamUserUgcList>(__br);

    // field: matching_ugc_type, type: enum SteamUgcMatchingUgcType
    gm_enums::SteamUgcMatchingUgcType matching_ugc_type = gm::wire::codec::readValue<gm_enums::SteamUgcMatchingUgcType>(__br);

    // field: sort_order, type: enum SteamUserUgcListSortOrder
    gm_enums::SteamUserUgcListSortOrder sort_order = gm::wire::codec::readValue<gm_enums::SteamUserUgcListSortOrder>(__br);

    // field: creator_app_id, type: UInt32
    std::uint32_t creator_app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: consumer_app_id, type: UInt32
    std::uint32_t consumer_app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: page, type: UInt32
    std::uint32_t page = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_create_query_user_ugc_request(account_id, list_type, matching_ugc_type, sort_order, creator_app_id, consumer_app_id, page);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_delete_item(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_delete_item(published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_download_item(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: high_priority, type: Bool
    bool high_priority = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_download_item(published_file_id, high_priority);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_app_dependencies(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_get_app_dependencies(published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_item_download_info(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_ugc_get_item_download_info(published_file_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcItemDownloadInfo
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_item_install_info(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_ugc_get_item_install_info(published_file_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcItemInstallInfo
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_item_state(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_ugc_get_item_state(published_file_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_item_update_progress(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_ugc_get_item_update_progress(update_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcItemUpdateProgress
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_num_subscribed_items(double include_locally_disabled)
{
    auto&& __result = steam_ugc_get_num_subscribed_items(static_cast<bool>(include_locally_disabled));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_subscribed_items(double c_max_entries, double include_locally_disabled, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_ugc_get_subscribed_items(static_cast<std::uint32_t>(c_max_entries), static_cast<bool>(include_locally_disabled));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_result(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_result(query_handle, index);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcQueryResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_preview_url(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_preview_url(query_handle, index);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcQueryPreviewUrl
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_metadata(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_metadata(query_handle, index);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcQueryMetadata
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_children(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: c_max_entries, type: UInt32
    std::uint32_t c_max_entries = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_children(query_handle, index, c_max_entries);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_statistic(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: stat_type, type: enum SteamUgcStatisticType
    gm_enums::SteamUgcStatisticType stat_type = gm::wire::codec::readValue<gm_enums::SteamUgcStatisticType>(__br);

    auto&& __result = steam_ugc_get_query_ugc_statistic(query_handle, index, stat_type);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_num_additional_previews(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_num_additional_previews(query_handle, index);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_additional_preview(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: preview_index, type: UInt32
    std::uint32_t preview_index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: original_file_name, type: String
    std::string_view original_file_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_get_query_ugc_additional_preview(query_handle, index, preview_index, original_file_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcAdditionalPreview
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_num_key_value_tags(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_num_key_value_tags(query_handle, index);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_key_value_tag(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: key_value_tag_index, type: UInt32
    std::uint32_t key_value_tag_index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_key_value_tag(query_handle, index, key_value_tag_index);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUgcKeyValueTag
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_query_ugc_content_descriptors(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: max_descriptors, type: UInt32
    std::uint32_t max_descriptors = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_query_ugc_content_descriptors(query_handle, index, max_descriptors);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: Int32[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_remove_app_dependency(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: app_id, type: UInt32
    std::uint32_t app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_remove_app_dependency(published_file_id, app_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_remove_dependency(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: parent_published_file_id, type: UInt64
    std::uint64_t parent_published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: child_published_file_id, type: UInt64
    std::uint64_t child_published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_remove_dependency(parent_published_file_id, child_published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_remove_item_from_favorites(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: app_id, type: UInt32
    std::uint32_t app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_remove_item_from_favorites(app_id, published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_remove_item_key_value_tags(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_remove_item_key_value_tags(update_handle, key);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_remove_item_preview(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_remove_item_preview(update_handle, index);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_add_content_descriptor(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: descriptor_id, type: enum SteamUgcContentDescriptorId
    gm_enums::SteamUgcContentDescriptorId descriptor_id = gm::wire::codec::readValue<gm_enums::SteamUgcContentDescriptorId>(__br);

    auto&& __result = steam_ugc_add_content_descriptor(update_handle, descriptor_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_remove_content_descriptor(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: descriptor_id, type: enum SteamUgcContentDescriptorId
    gm_enums::SteamUgcContentDescriptorId descriptor_id = gm::wire::codec::readValue<gm_enums::SteamUgcContentDescriptorId>(__br);

    auto&& __result = steam_ugc_remove_content_descriptor(update_handle, descriptor_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_required_game_versions(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: game_branch_min, type: String
    std::string_view game_branch_min = gm::wire::codec::readValue<std::string_view>(__br);

    // field: game_branch_max, type: String
    std::string_view game_branch_max = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_required_game_versions(update_handle, game_branch_min, game_branch_max);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_request_ugc_details(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: max_age_seconds, type: UInt32
    std::uint32_t max_age_seconds = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_request_ugc_details(published_file_id, max_age_seconds, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_send_query_ugc_request(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_send_query_ugc_request(query_handle, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_release_query_ugc_request(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_ugc_release_query_ugc_request(query_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_callback_item_installed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_ugc_set_callback_item_installed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_clear_callback_item_installed()
{
    steam_ugc_clear_callback_item_installed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_allow_cached_response(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: max_age_seconds, type: UInt32
    std::uint32_t max_age_seconds = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_set_allow_cached_response(query_handle, max_age_seconds);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_cloud_file_name_filter(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: match_cloud_file_name, type: String
    std::string_view match_cloud_file_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_cloud_file_name_filter(query_handle, match_cloud_file_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_content(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: content_folder, type: String
    std::string_view content_folder = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_item_content(update_handle, content_folder);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_description(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_item_description(update_handle, description);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_metadata(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: metadata, type: String
    std::string_view metadata = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_item_metadata(update_handle, metadata);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_preview(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: preview_file, type: String
    std::string_view preview_file = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_item_preview(update_handle, preview_file);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_tags(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: tags_csv, type: String[]
    std::vector<std::string_view> tags_csv = gm::wire::codec::readVector<std::string_view>(__br);

    auto&& __result = steam_ugc_set_item_tags(update_handle, tags_csv);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_title(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: title, type: String
    std::string_view title = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_item_title(update_handle, title);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_update_language(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: language, type: String
    std::string_view language = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_item_update_language(update_handle, language);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_items_disabled_locally(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_ids, type: UInt64[]
    std::vector<std::uint64_t> published_file_ids = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: num_published_file_ids, type: UInt32
    std::uint32_t num_published_file_ids = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: disabled_locally, type: Bool
    bool disabled_locally = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_items_disabled_locally(published_file_ids, num_published_file_ids, disabled_locally);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_item_visibility(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: visibility, type: enum SteamRemoteStoragePublishedFileVisibility
    gm_enums::SteamRemoteStoragePublishedFileVisibility visibility = gm::wire::codec::readValue<gm_enums::SteamRemoteStoragePublishedFileVisibility>(__br);

    auto&& __result = steam_ugc_set_item_visibility(update_handle, visibility);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_language(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: language, type: String
    std::string_view language = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_language(query_handle, language);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_match_any_tag(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: match_any_tag, type: Bool
    bool match_any_tag = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_match_any_tag(query_handle, match_any_tag);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_ranked_by_trend_days(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: days, type: UInt32
    std::uint32_t days = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_set_ranked_by_trend_days(query_handle, days);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_additional_previews(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: return_additional_previews, type: Bool
    bool return_additional_previews = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_return_additional_previews(query_handle, return_additional_previews);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_children(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: return_children, type: Bool
    bool return_children = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_return_children(query_handle, return_children);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_key_value_tags(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: return_key_value_tags, type: Bool
    bool return_key_value_tags = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_return_key_value_tags(query_handle, return_key_value_tags);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_long_description(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: return_long_description, type: Bool
    bool return_long_description = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_return_long_description(query_handle, return_long_description);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_metadata(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: return_metadata, type: Bool
    bool return_metadata = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_return_metadata(query_handle, return_metadata);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_only_ids(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: return_only_ids, type: Bool
    bool return_only_ids = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_return_only_ids(query_handle, return_only_ids);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_playtime_stats(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: days, type: UInt32
    std::uint32_t days = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_set_return_playtime_stats(query_handle, days);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_return_total_only(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: return_total_only, type: Bool
    bool return_total_only = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_ugc_set_return_total_only(query_handle, return_total_only);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_search_text(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: search_text, type: String
    std::string_view search_text = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_set_search_text(query_handle, search_text);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_subscriptions_load_order(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_ids, type: UInt64[]
    std::vector<std::uint64_t> published_file_ids = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: num_published_file_ids, type: UInt32
    std::uint32_t num_published_file_ids = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_set_subscriptions_load_order(published_file_ids, num_published_file_ids);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_user_item_vote(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: vote_up, type: Bool
    bool vote_up = gm::wire::codec::readValue<bool>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_set_user_item_vote(published_file_id, vote_up, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_user_item_vote(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_get_user_item_vote(published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_start_item_update(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: consumer_app_id, type: UInt32
    std::uint32_t consumer_app_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_ugc_start_item_update(consumer_app_id, published_file_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_start_playtime_tracking(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_ids, type: UInt64[]
    std::vector<std::uint64_t> published_file_ids = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: num_published_file_ids, type: UInt32
    std::uint32_t num_published_file_ids = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_start_playtime_tracking(published_file_ids, num_published_file_ids, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_stop_playtime_tracking(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_ids, type: UInt64[]
    std::vector<std::uint64_t> published_file_ids = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: num_published_file_ids, type: UInt32
    std::uint32_t num_published_file_ids = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_stop_playtime_tracking(published_file_ids, num_published_file_ids, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_stop_playtime_tracking_for_all_items(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_stop_playtime_tracking_for_all_items(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_submit_item_update(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: change_note, type: String
    std::string_view change_note = gm::wire::codec::readValue<std::string_view>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_submit_item_update(update_handle, change_note, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_subscribe_item(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_subscribe_item(published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_suspend_downloads(double suspend)
{
    steam_ugc_suspend_downloads(static_cast<bool>(suspend));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_unsubscribe_item(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_unsubscribe_item(published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_callback_user_subscribed_items_list_changed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_ugc_set_callback_user_subscribed_items_list_changed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_clear_callback_user_subscribed_items_list_changed()
{
    steam_ugc_clear_callback_user_subscribed_items_list_changed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_update_item_preview_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: preview_file, type: String
    std::string_view preview_file = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_update_item_preview_file(update_handle, index, preview_file);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_update_item_preview_video(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: video_id, type: String
    std::string_view video_id = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_ugc_update_item_preview_video(update_handle, index, video_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_show_workshop_eula()
{
    auto&& __result = steam_ugc_show_workshop_eula();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_workshop_eula_status(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_ugc_get_workshop_eula_status(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_callback_file_subscribed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_ugc_set_callback_file_subscribed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_clear_callback_file_subscribed()
{
    steam_ugc_clear_callback_file_subscribed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_set_callback_file_unsubscribed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_ugc_set_callback_file_unsubscribed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_clear_callback_file_unsubscribed()
{
    steam_ugc_clear_callback_file_unsubscribed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_ugc_get_num_supported_game_versions(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: query_handle, type: UInt64
    std::uint64_t query_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: UInt32
    std::uint32_t index = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_ugc_get_num_supported_game_versions(query_handle, index);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_activate_action_set(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: action_set_handle, type: UInt64
    std::uint64_t action_set_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_input_activate_action_set(input_handle, action_set_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_activate_action_set_layer(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: action_set_layer_handle, type: UInt64
    std::uint64_t action_set_layer_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_input_activate_action_set_layer(input_handle, action_set_layer_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_deactivate_action_set_layer(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: action_set_layer_handle, type: UInt64
    std::uint64_t action_set_layer_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_input_deactivate_action_set_layer(input_handle, action_set_layer_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_deactivate_all_action_set_layers(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_input_deactivate_all_action_set_layers(input_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_active_action_set_layers(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_active_action_set_layers(input_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInputActiveActionSetLayers
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_action_set_handle(char* pszActionSetName, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_input_get_action_set_handle(pszActionSetName);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_analog_action_data(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: analog_action_handle, type: UInt64
    std::uint64_t analog_action_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_analog_action_data(input_handle, analog_action_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInputAnalogActionData
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_analog_action_handle(char* pszActionName, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_input_get_analog_action_handle(pszActionName);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_analog_action_origins(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: action_set_handle, type: UInt64
    std::uint64_t action_set_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: analog_action_handle, type: UInt64
    std::uint64_t analog_action_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_analog_action_origins(input_handle, action_set_handle, analog_action_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInputActionOrigins
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_input_get_glyph_png_for_action_origin(double origin, double size, double flags)
{
    static std::string __result;
    __result = steam_input_get_glyph_png_for_action_origin(static_cast<std::uint32_t>(origin), static_cast<std::uint32_t>(size), static_cast<std::uint32_t>(flags));
    return (char*)__result.c_str();
}

GMEXPORT char* __EXT_NATIVE__steam_input_get_glyph_svg_for_action_origin(double origin, double flags)
{
    static std::string __result;
    __result = steam_input_get_glyph_svg_for_action_origin(static_cast<std::uint32_t>(origin), static_cast<std::uint32_t>(flags));
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_input_get_connected_controllers(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_input_get_connected_controllers();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_controller_for_gamepad_index(double nIndex, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_input_get_controller_for_gamepad_index(static_cast<std::int32_t>(nIndex));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_current_action_set(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_current_action_set(input_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_digital_action_data(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: digital_action_handle, type: UInt64
    std::uint64_t digital_action_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_digital_action_data(input_handle, digital_action_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInputDigitalActionData
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_digital_action_handle(char* pszActionName, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_input_get_digital_action_handle(pszActionName);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_digital_action_origins(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: action_set_handle, type: UInt64
    std::uint64_t action_set_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: digital_action_handle, type: UInt64
    std::uint64_t digital_action_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_digital_action_origins(input_handle, action_set_handle, digital_action_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInputActionOrigins
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_gamepad_index_for_controller(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_gamepad_index_for_controller(input_handle);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_get_input_type_for_handle(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_input_type_for_handle(input_handle);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_get_motion_data(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_motion_data(input_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInputMotionData
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_input_get_string_for_action_origin(double eOrigin)
{
    static std::string __result;
    __result = steam_input_get_string_for_action_origin(static_cast<std::int32_t>(eOrigin));
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_input_init(double explicitly_call_run_frame)
{
    auto&& __result = steam_input_init(static_cast<bool>(explicitly_call_run_frame));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_enable_device_callbacks()
{
    steam_input_enable_device_callbacks();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_run_frame()
{
    steam_input_run_frame();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_set_dual_sense_trigger_effect(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: pParam, type: UInt32[]
    std::vector<std::uint32_t> pParam = gm::wire::codec::readVector<std::uint32_t>(__br);

    auto&& __result = steam_input_set_dual_sense_trigger_effect(input_handle, pParam);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_set_led_color(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: nColorR, type: UInt32
    std::uint32_t nColorR = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: nColorG, type: UInt32
    std::uint32_t nColorG = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: nColorB, type: UInt32
    std::uint32_t nColorB = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: nFlags, type: UInt32
    std::uint32_t nFlags = gm::wire::codec::readValue<std::uint32_t>(__br);

    steam_input_set_led_color(input_handle, nColorR, nColorG, nColorB, nFlags);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_show_binding_panel(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_show_binding_panel(input_handle);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_shutdown()
{
    auto&& __result = steam_input_shutdown();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_stop_analog_action_momentum(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: analog_action_handle, type: UInt64
    std::uint64_t analog_action_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_input_stop_analog_action_momentum(input_handle, analog_action_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_trigger_vibration(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: usLeftSpeed, type: UInt32
    std::uint32_t usLeftSpeed = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: usRightSpeed, type: UInt32
    std::uint32_t usRightSpeed = gm::wire::codec::readValue<std::uint32_t>(__br);

    steam_input_trigger_vibration(input_handle, usLeftSpeed, usRightSpeed);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_trigger_vibration_extended(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: usLeftSpeed, type: UInt32
    std::uint32_t usLeftSpeed = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: usRightSpeed, type: UInt32
    std::uint32_t usRightSpeed = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: usLeftTriggerSpeed, type: UInt32
    std::uint32_t usLeftTriggerSpeed = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: usRightTriggerSpeed, type: UInt32
    std::uint32_t usRightTriggerSpeed = gm::wire::codec::readValue<std::uint32_t>(__br);

    steam_input_trigger_vibration_extended(input_handle, usLeftSpeed, usRightSpeed, usLeftTriggerSpeed, usRightTriggerSpeed);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_action_origin_from_xbox_origin(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: eOrigin, type: Int32
    std::int32_t eOrigin = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_input_get_action_origin_from_xbox_origin(input_handle, eOrigin);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_translate_action_origin(double eDestinationInputType, double eSourceOrigin)
{
    auto&& __result = steam_input_translate_action_origin(static_cast<std::int32_t>(eDestinationInputType), static_cast<std::int32_t>(eSourceOrigin));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_get_device_binding_revision(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_device_binding_revision(input_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInputDeviceBindingRevision
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_get_remote_play_session_id(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: input_handle, type: UInt64
    std::uint64_t input_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_input_get_remote_play_session_id(input_handle);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_input_set_callback_device_connected(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_input_set_callback_device_connected(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_clear_callback_device_connected()
{
    steam_input_clear_callback_device_connected();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_set_callback_device_disconnected(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_input_set_callback_device_disconnected(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_clear_callback_device_disconnected()
{
    steam_input_clear_callback_device_disconnected();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_set_callback_action_set_changed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_input_set_callback_action_set_changed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_clear_callback_action_set_changed()
{
    steam_input_clear_callback_action_set_changed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_set_callback_controller_battery(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_input_set_callback_controller_battery(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_input_clear_callback_controller_battery()
{
    steam_input_clear_callback_controller_battery();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_get_stat_int(char* stat_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_get_stat_int(stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsStatInt
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_get_stat_float(char* stat_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_get_stat_float(stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsStatFloat
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_set_stat_int(char* stat_name, double data)
{
    auto&& __result = steam_userstats_set_stat_int(stat_name, static_cast<std::int32_t>(data));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_set_stat_float(char* stat_name, double data)
{
    auto&& __result = steam_userstats_set_stat_float(stat_name, static_cast<float>(data));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_update_avg_rate_stat(char* stat_name, double count_this_session, double session_length)
{
    auto&& __result = steam_userstats_update_avg_rate_stat(stat_name, static_cast<float>(count_this_session), static_cast<double>(session_length));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_get_achievement(char* achievement_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_get_achievement(achievement_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsUserAchievement
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_set_achievement(char* achievement_name)
{
    auto&& __result = steam_userstats_set_achievement(achievement_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_clear_achievement(char* achievement_name)
{
    auto&& __result = steam_userstats_clear_achievement(achievement_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_achievement_and_unlock_time(char* achievement_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_achievement_and_unlock_time(achievement_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsAchievementAndUnlockTime
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_store_stats()
{
    auto&& __result = steam_userstats_store_stats();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_achievement_icon(char* achievement_name)
{
    auto&& __result = steam_userstats_achievement_icon(achievement_name);
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_userstats_achievement_display_attribute(char* achievement_name, char* key)
{
    static std::string __result;
    __result = steam_userstats_achievement_display_attribute(achievement_name, key);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_userstats_indicate_achievement_progress(char* achievement_name, double cur_progress, double max_progress)
{
    auto&& __result = steam_userstats_indicate_achievement_progress(achievement_name, static_cast<std::uint32_t>(cur_progress), static_cast<std::uint32_t>(max_progress));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_num_achievements()
{
    auto&& __result = steam_userstats_num_achievements();
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_userstats_achievement_name(double index)
{
    static std::string __result;
    __result = steam_userstats_achievement_name(static_cast<std::uint32_t>(index));
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_userstats_request_user_stats(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_user, type: UInt64
    std::uint64_t steam_id_user = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_request_user_stats(steam_id_user, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_user_stat_int(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_user, type: UInt64
    std::uint64_t steam_id_user = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: stat_name, type: String
    std::string_view stat_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_userstats_user_stat_int(steam_id_user, stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsStatInt
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_user_stat_float(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_user, type: UInt64
    std::uint64_t steam_id_user = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: stat_name, type: String
    std::string_view stat_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_userstats_user_stat_float(steam_id_user, stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsStatFloat
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_user_achievement(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_user, type: UInt64
    std::uint64_t steam_id_user = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: achievement_name, type: String
    std::string_view achievement_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_userstats_user_achievement(steam_id_user, achievement_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsUserAchievement
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_user_achievement_and_unlock_time(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_user, type: UInt64
    std::uint64_t steam_id_user = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: achievement_name, type: String
    std::string_view achievement_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_userstats_user_achievement_and_unlock_time(steam_id_user, achievement_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsAchievementAndUnlockTime
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_reset_all_stats(double achievements_too)
{
    auto&& __result = steam_userstats_reset_all_stats(static_cast<bool>(achievements_too));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_find_or_create_leaderboard(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_name, type: String
    std::string_view leaderboard_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: sort_method, type: enum SteamLeaderboardSortMethod
    gm_enums::SteamLeaderboardSortMethod sort_method = gm::wire::codec::readValue<gm_enums::SteamLeaderboardSortMethod>(__br);

    // field: display_type, type: enum SteamLeaderboardDisplayType
    gm_enums::SteamLeaderboardDisplayType display_type = gm::wire::codec::readValue<gm_enums::SteamLeaderboardDisplayType>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_find_or_create_leaderboard(leaderboard_name, sort_method, display_type, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_find_leaderboard(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_name, type: String
    std::string_view leaderboard_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_find_leaderboard(leaderboard_name, callback);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_userstats_leaderboard_name(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    static std::string __result;
    __result = steam_userstats_leaderboard_name(leaderboard_handle);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_userstats_leaderboard_entry_count(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_userstats_leaderboard_entry_count(leaderboard_handle);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_leaderboard_sort_method(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_userstats_leaderboard_sort_method(leaderboard_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamLeaderboardSortMethod
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_leaderboard_display_type(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_userstats_leaderboard_display_type(leaderboard_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamLeaderboardDisplayType
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_download_leaderboard_entries(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: request, type: enum SteamLeaderboardDataRequest
    gm_enums::SteamLeaderboardDataRequest request = gm::wire::codec::readValue<gm_enums::SteamLeaderboardDataRequest>(__br);

    // field: range_start, type: Int32
    std::int32_t range_start = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: range_end, type: Int32
    std::int32_t range_end = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_download_leaderboard_entries(leaderboard_handle, request, range_start, range_end, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_download_leaderboard_entries_for_users(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: users, type: UInt64[]
    std::vector<std::uint64_t> users = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_download_leaderboard_entries_for_users(leaderboard_handle, users, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_downloaded_leaderboard_entry(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_entries_handle, type: UInt64
    std::uint64_t leaderboard_entries_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: entry_index, type: Int32
    std::int32_t entry_index = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: buffer, type: Buffer
    gm::wire::GMBuffer buffer = __buffer_queue.front();
    __buffer_queue.pop();

    // field: buffer_size, type: UInt32
    std::uint32_t buffer_size = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_userstats_downloaded_leaderboard_entry(leaderboard_entries_handle, entry_index, buffer, buffer_size);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsDownloadedLeaderboardEntry
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_upload_leaderboard_score(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: method, type: enum SteamLeaderboardUploadScoreMethod
    gm_enums::SteamLeaderboardUploadScoreMethod method = gm::wire::codec::readValue<gm_enums::SteamLeaderboardUploadScoreMethod>(__br);

    // field: score, type: Int32
    std::int32_t score = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: score_details_buffer, type: Buffer
    gm::wire::GMBuffer score_details_buffer = __buffer_queue.front();
    __buffer_queue.pop();

    // field: score_details_count, type: Int32
    std::int32_t score_details_count = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_upload_leaderboard_score(leaderboard_handle, method, score, score_details_buffer, score_details_count, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_attach_leaderboard_ugc(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: leaderboard_handle, type: UInt64
    std::uint64_t leaderboard_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: ugc_handle, type: UInt64
    std::uint64_t ugc_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_attach_leaderboard_ugc(leaderboard_handle, ugc_handle, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_number_of_current_players(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_number_of_current_players(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_request_global_achievement_percentages(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_request_global_achievement_percentages(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_most_achieved_achievement_info(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_most_achieved_achievement_info();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsMostAchievedAchievementInfo
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_next_most_achieved_achievement_info(double iterator_prev, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_next_most_achieved_achievement_info(static_cast<std::int32_t>(iterator_prev));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsMostAchievedAchievementInfo
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_achievement_achieved_percent(char* achievement_name)
{
    auto&& __result = steam_userstats_achievement_achieved_percent(achievement_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_userstats_request_global_stats(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: history_days, type: Int32
    std::int32_t history_days = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_userstats_request_global_stats(history_days, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_global_stat_int64(char* stat_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_global_stat_int64(stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsGlobalStatInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_global_stat_double(char* stat_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_global_stat_double(stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsGlobalStatDouble
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_global_stat_history_int64(char* stat_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_global_stat_history_int64(stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsGlobalStatHistoryInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_global_stat_history_double(char* stat_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_userstats_global_stat_history_double(stat_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsGlobalStatHistoryDouble
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_achievement_progress_limits_int(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: achievement_name, type: String
    std::string_view achievement_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: cur_progress, type: UInt32
    std::uint32_t cur_progress = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: max_progress, type: UInt32
    std::uint32_t max_progress = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_userstats_achievement_progress_limits_int(achievement_name, cur_progress, max_progress);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsIntMinMax
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_achievement_progress_limits_float(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: achievement_name, type: String
    std::string_view achievement_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: cur_progress, type: Float32
    float cur_progress = gm::wire::codec::readValue<float>(__br);

    // field: max_progress, type: Float32
    float max_progress = gm::wire::codec::readValue<float>(__br);

    auto&& __result = steam_userstats_achievement_progress_limits_float(achievement_name, cur_progress, max_progress);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamUserStatsFloatMinMax
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_set_callback_user_stats_received(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_userstats_set_callback_user_stats_received(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_clear_callback_user_stats_received()
{
    steam_userstats_clear_callback_user_stats_received();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_set_callback_user_stats_stored(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_userstats_set_callback_user_stats_stored(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_clear_callback_user_stats_stored()
{
    steam_userstats_clear_callback_user_stats_stored();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_set_callback_user_achievement_stored(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_userstats_set_callback_user_achievement_stored(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_userstats_clear_callback_user_achievement_stored()
{
    steam_userstats_clear_callback_user_achievement_stored();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_is_enabled()
{
    auto&& __result = steam_music_is_enabled();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_music_is_playing()
{
    auto&& __result = steam_music_is_playing();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_music_get_playback_status(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_music_get_playback_status();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamMusicPlaybackStatus
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_play()
{
    steam_music_play();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_pause()
{
    steam_music_pause();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_play_previous()
{
    steam_music_play_previous();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_play_next()
{
    steam_music_play_next();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_set_volume(double volume)
{
    steam_music_set_volume(static_cast<float>(volume));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_get_volume()
{
    auto&& __result = steam_music_get_volume();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_music_set_callback_playback_status_has_changed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_music_set_callback_playback_status_has_changed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_clear_callback_playback_status_has_changed()
{
    steam_music_clear_callback_playback_status_has_changed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_set_callback_volume_has_changed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_music_set_callback_volume_has_changed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_music_clear_callback_volume_has_changed()
{
    steam_music_clear_callback_volume_has_changed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_set_timeline_tooltip(char* description, double time_delta_seconds)
{
    steam_timeline_set_timeline_tooltip(description, static_cast<float>(time_delta_seconds));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_clear_timeline_tooltip(double time_delta_seconds)
{
    steam_timeline_clear_timeline_tooltip(static_cast<float>(time_delta_seconds));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_add_instantaneous_timeline_event(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: title, type: String
    std::string_view title = gm::wire::codec::readValue<std::string_view>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    // field: icon, type: String
    std::string_view icon = gm::wire::codec::readValue<std::string_view>(__br);

    // field: priority, type: UInt32
    std::uint32_t priority = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: start_offset_seconds, type: Float32
    float start_offset_seconds = gm::wire::codec::readValue<float>(__br);

    // field: possible_clip, type: enum SteamTimelineEventClipPriority
    gm_enums::SteamTimelineEventClipPriority possible_clip = gm::wire::codec::readValue<gm_enums::SteamTimelineEventClipPriority>(__br);

    auto&& __result = steam_timeline_add_instantaneous_timeline_event(title, description, icon, priority, start_offset_seconds, possible_clip);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_add_range_timeline_event(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: title, type: String
    std::string_view title = gm::wire::codec::readValue<std::string_view>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    // field: icon, type: String
    std::string_view icon = gm::wire::codec::readValue<std::string_view>(__br);

    // field: priority, type: UInt32
    std::uint32_t priority = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: start_offset_seconds, type: Float32
    float start_offset_seconds = gm::wire::codec::readValue<float>(__br);

    // field: duration_seconds, type: Float32
    float duration_seconds = gm::wire::codec::readValue<float>(__br);

    // field: possible_clip, type: enum SteamTimelineEventClipPriority
    gm_enums::SteamTimelineEventClipPriority possible_clip = gm::wire::codec::readValue<gm_enums::SteamTimelineEventClipPriority>(__br);

    auto&& __result = steam_timeline_add_range_timeline_event(title, description, icon, priority, start_offset_seconds, duration_seconds, possible_clip);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_start_range_timeline_event(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: title, type: String
    std::string_view title = gm::wire::codec::readValue<std::string_view>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    // field: icon, type: String
    std::string_view icon = gm::wire::codec::readValue<std::string_view>(__br);

    // field: priority, type: UInt32
    std::uint32_t priority = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: start_offset_seconds, type: Float32
    float start_offset_seconds = gm::wire::codec::readValue<float>(__br);

    // field: possible_clip, type: enum SteamTimelineEventClipPriority
    gm_enums::SteamTimelineEventClipPriority possible_clip = gm::wire::codec::readValue<gm_enums::SteamTimelineEventClipPriority>(__br);

    auto&& __result = steam_timeline_start_range_timeline_event(title, description, icon, priority, start_offset_seconds, possible_clip);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_update_range_timeline_event(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: event_handle, type: UInt64
    std::uint64_t event_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: title, type: String
    std::string_view title = gm::wire::codec::readValue<std::string_view>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    // field: icon, type: String
    std::string_view icon = gm::wire::codec::readValue<std::string_view>(__br);

    // field: priority, type: UInt32
    std::uint32_t priority = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: possible_clip, type: enum SteamTimelineEventClipPriority
    gm_enums::SteamTimelineEventClipPriority possible_clip = gm::wire::codec::readValue<gm_enums::SteamTimelineEventClipPriority>(__br);

    steam_timeline_update_range_timeline_event(event_handle, title, description, icon, priority, possible_clip);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_end_range_timeline_event(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: event_handle, type: UInt64
    std::uint64_t event_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: end_offset_seconds, type: Float32
    float end_offset_seconds = gm::wire::codec::readValue<float>(__br);

    steam_timeline_end_range_timeline_event(event_handle, end_offset_seconds);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_remove_timeline_event(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: event_handle, type: UInt64
    std::uint64_t event_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_timeline_remove_timeline_event(event_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_does_event_recording_exist(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: event_handle, type: UInt64
    std::uint64_t event_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_timeline_does_event_recording_exist(event_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_start_game_phase()
{
    steam_timeline_start_game_phase();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_end_game_phase()
{
    steam_timeline_end_game_phase();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_set_game_phase_id(char* phase_id)
{
    steam_timeline_set_game_phase_id(phase_id);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_does_game_phase_recording_exist(char* phase_id, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_timeline_does_game_phase_recording_exist(phase_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_add_game_phase_tag(char* tag_name, char* tag_icon, char* tag_group, double priority)
{
    steam_timeline_add_game_phase_tag(tag_name, tag_icon, tag_group, static_cast<std::uint32_t>(priority));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_set_game_phase_attribute(char* attribute_group, char* attribute_value, double priority)
{
    steam_timeline_set_game_phase_attribute(attribute_group, attribute_value, static_cast<std::uint32_t>(priority));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_set_timeline_game_mode(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: mode, type: enum SteamTimelineGameMode
    gm_enums::SteamTimelineGameMode mode = gm::wire::codec::readValue<gm_enums::SteamTimelineGameMode>(__br);

    steam_timeline_set_timeline_game_mode(mode);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_open_overlay_to_game_phase(char* phase_id)
{
    steam_timeline_open_overlay_to_game_phase(phase_id);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_open_overlay_to_timeline_event(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: event_handle, type: UInt64
    std::uint64_t event_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_timeline_open_overlay_to_timeline_event(event_handle);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_set_callback_game_phase_recording_exists(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_timeline_set_callback_game_phase_recording_exists(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_clear_callback_game_phase_recording_exists()
{
    steam_timeline_clear_callback_game_phase_recording_exists();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_set_callback_event_recording_exists(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_timeline_set_callback_event_recording_exists(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_timeline_clear_callback_event_recording_exists()
{
    steam_timeline_clear_callback_event_recording_exists();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_add_promo_item(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_def_id, type: UInt32
    std::uint32_t item_def_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_add_promo_item(item_def_id, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_add_promo_items(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_def_ids, type: UInt32[]
    std::vector<std::uint32_t> item_def_ids = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: num_item_defs, type: UInt32
    std::uint32_t num_item_defs = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_add_promo_items(item_def_ids, num_item_defs, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_check_result_steam_id(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: steam_id_expected, type: UInt64
    std::uint64_t steam_id_expected = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_inventory_check_result_steam_id(result_handle, steam_id_expected);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_consume_item(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_instance_id, type: UInt64
    std::uint64_t item_instance_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: quantity, type: UInt32
    std::uint32_t quantity = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_consume_item(item_instance_id, quantity, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_deserialize_result(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: data, type: Buffer
    gm::wire::GMBuffer data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: data_size, type: UInt32
    std::uint32_t data_size = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_inventory_deserialize_result(data, data_size);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInventoryDeserializeResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_destroy_result(double result_handle)
{
    steam_inventory_destroy_result(static_cast<std::int32_t>(result_handle));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_exchange_items(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: generate_item_defs, type: UInt32[]
    std::vector<std::uint32_t> generate_item_defs = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: generate_qty, type: UInt32[]
    std::vector<std::uint32_t> generate_qty = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: generate_len, type: UInt32
    std::uint32_t generate_len = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: destroy_instance_ids, type: UInt64[]
    std::vector<std::uint64_t> destroy_instance_ids = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: destroy_qty, type: UInt32[]
    std::vector<std::uint32_t> destroy_qty = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: destroy_len, type: UInt32
    std::uint32_t destroy_len = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_exchange_items(generate_item_defs, generate_qty, generate_len, destroy_instance_ids, destroy_qty, destroy_len, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_generate_items(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_defs, type: UInt32[]
    std::vector<std::uint32_t> item_defs = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: quantities, type: UInt32[]
    std::vector<std::uint32_t> quantities = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: count, type: UInt32
    std::uint32_t count = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_generate_items(item_defs, quantities, count, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_all_items()
{
    auto&& __result = steam_inventory_get_all_items();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_result_items(double result_handle, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_result_items(static_cast<std::int32_t>(result_handle));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInventoryResultItems
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_result_status(double result_handle, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_result_status(static_cast<std::int32_t>(result_handle));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamApiResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_result_timestamp(double result_handle)
{
    auto&& __result = steam_inventory_get_result_timestamp(static_cast<std::int32_t>(result_handle));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_eligible_promo_item_definition_ids(double c_max_item_defs, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_eligible_promo_item_definition_ids(static_cast<std::uint32_t>(c_max_item_defs));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt32[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_load_item_definitions()
{
    auto&& __result = steam_inventory_load_item_definitions();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_item_definition_ids(double c_max_item_defs, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_item_definition_ids(static_cast<std::uint32_t>(c_max_item_defs));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt32[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_items_by_id(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_instance_ids, type: UInt64[]
    std::vector<std::uint64_t> item_instance_ids = gm::wire::codec::readVector<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_get_items_by_id(item_instance_ids, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_serialize_result(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: out_data, type: Buffer
    gm::wire::GMBuffer out_data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: out_capacity, type: UInt32
    std::uint32_t out_capacity = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_inventory_serialize_result(result_handle, out_data, out_capacity);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInventorySerializeResult
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_result_item_property_keys_array(double result_handle, double item_index, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_result_item_property_keys_array(static_cast<std::int32_t>(result_handle), static_cast<std::uint32_t>(item_index));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: String[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_result_item_property(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: item_index, type: UInt32
    std::uint32_t item_index = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: property_name, type: String
    std::string_view property_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_inventory_get_result_item_property(result_handle, item_index, property_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInventoryItemProperty
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_start_purchase(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_def_ids, type: UInt32[]
    std::vector<std::uint32_t> item_def_ids = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: quantities, type: UInt32[]
    std::vector<std::uint32_t> quantities = gm::wire::codec::readVector<std::uint32_t>(__br);

    // field: count, type: UInt32
    std::uint32_t count = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_inventory_start_purchase(item_def_ids, quantities, count, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_request_prices(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_inventory_request_prices(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_num_items_with_prices()
{
    auto&& __result = steam_inventory_get_num_items_with_prices();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_items_with_prices(double max, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_items_with_prices(static_cast<std::uint32_t>(max));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInventoryItemsWithPrices
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_start_update_properties()
{
    auto&& __result = steam_inventory_start_update_properties();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_remove_property(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: item_instance_id, type: UInt64
    std::uint64_t item_instance_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: property_name, type: String
    std::string_view property_name = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_inventory_remove_property(result_handle, item_instance_id, property_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_set_property_string(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: item_instance_id, type: UInt64
    std::uint64_t item_instance_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: property_name, type: String
    std::string_view property_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: String
    std::string_view value = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_inventory_set_property_string(result_handle, item_instance_id, property_name, value);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_set_property_bool(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: item_instance_id, type: UInt64
    std::uint64_t item_instance_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: property_name, type: String
    std::string_view property_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: Bool
    bool value = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_inventory_set_property_bool(result_handle, item_instance_id, property_name, value);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_set_property_int64(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: item_instance_id, type: UInt64
    std::uint64_t item_instance_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: property_name, type: String
    std::string_view property_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: Int64
    std::int64_t value = gm::wire::codec::readValue<std::int64_t>(__br);

    auto&& __result = steam_inventory_set_property_int64(result_handle, item_instance_id, property_name, value);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_set_property_float(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: item_instance_id, type: UInt64
    std::uint64_t item_instance_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: property_name, type: String
    std::string_view property_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: Float32
    float value = gm::wire::codec::readValue<float>(__br);

    auto&& __result = steam_inventory_set_property_float(result_handle, item_instance_id, property_name, value);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_submit_update_properties(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: result_handle, type: Int32
    std::int32_t result_handle = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_submit_update_properties(result_handle, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_transfer_item_quantity(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_instance_id_source, type: UInt64
    std::uint64_t item_instance_id_source = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: quantity, type: UInt32
    std::uint32_t quantity = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: item_instance_id_dest, type: UInt64
    std::uint64_t item_instance_id_dest = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_transfer_item_quantity(item_instance_id_source, quantity, item_instance_id_dest, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_trigger_item_drop(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: item_def_id, type: UInt32
    std::uint32_t item_def_id = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_trigger_item_drop(item_def_id, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_grant_promo_items(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_inventory_grant_promo_items(callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_item_definition_property(double item_def_id, char* property_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_item_definition_property(static_cast<std::uint32_t>(item_def_id), property_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInventoryDefProperty
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_item_definition_property_keys(double item_def_id, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_item_definition_property_keys(static_cast<std::uint32_t>(item_def_id));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: String[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_get_item_price(double item_def_id, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_inventory_get_item_price(static_cast<std::uint32_t>(item_def_id));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamInventoryItemPrice
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_set_callback_result_ready(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_inventory_set_callback_result_ready(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_clear_callback_result_ready()
{
    steam_inventory_clear_callback_result_ready();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_set_callback_full_update(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_inventory_set_callback_full_update(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_clear_callback_full_update()
{
    steam_inventory_clear_callback_full_update();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_set_callback_definition_update(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_inventory_set_callback_definition_update(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_inventory_clear_callback_definition_update()
{
    steam_inventory_clear_callback_definition_update();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_set_callback_published_file_subscribed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_remote_storage_set_callback_published_file_subscribed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_clear_callback_published_file_subscribed()
{
    steam_remote_storage_clear_callback_published_file_subscribed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_set_callback_published_file_unsubscribed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_remote_storage_set_callback_published_file_unsubscribed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_clear_callback_published_file_unsubscribed()
{
    steam_remote_storage_clear_callback_published_file_unsubscribed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_set_callback_local_file_change(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_remote_storage_set_callback_local_file_change(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_clear_callback_local_file_change()
{
    steam_remote_storage_clear_callback_local_file_change();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_is_cloud_enabled_for_account()
{
    auto&& __result = steam_remote_storage_is_cloud_enabled_for_account();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_is_cloud_enabled_for_app()
{
    auto&& __result = steam_remote_storage_is_cloud_enabled_for_app();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_set_cloud_enabled_for_app(double enabled)
{
    steam_remote_storage_set_cloud_enabled_for_app(static_cast<bool>(enabled));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_write(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: file_name, type: String
    std::string_view file_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: data, type: Buffer
    gm::wire::GMBuffer data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: bytes, type: UInt32
    std::uint32_t bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_remote_storage_file_write(file_name, data, bytes);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_read(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: file_name, type: String
    std::string_view file_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: out_data, type: Buffer
    gm::wire::GMBuffer out_data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: max_bytes, type: UInt32
    std::uint32_t max_bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_remote_storage_file_read(file_name, out_data, max_bytes);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_delete(char* file_name)
{
    auto&& __result = steam_remote_storage_file_delete(file_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_exists(char* file_name)
{
    auto&& __result = steam_remote_storage_file_exists(file_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_persisted(char* file_name)
{
    auto&& __result = steam_remote_storage_file_persisted(file_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_file_size(char* file_name)
{
    auto&& __result = steam_remote_storage_get_file_size(file_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_file_timestamp(char* file_name)
{
    auto&& __result = steam_remote_storage_get_file_timestamp(file_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_file_count()
{
    auto&& __result = steam_remote_storage_get_file_count();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_file_name_and_size(double index, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_remote_storage_get_file_name_and_size(static_cast<std::int32_t>(index));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamRemoteStorageFileNameAndSize
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_quota(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_remote_storage_get_quota();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamRemoteStorageQuota
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_set_sync_platforms(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: file_name, type: String
    std::string_view file_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: platforms, type: enum SteamRemoteStoragePlatform
    gm_enums::SteamRemoteStoragePlatform platforms = gm::wire::codec::readValue<gm_enums::SteamRemoteStoragePlatform>(__br);

    auto&& __result = steam_remote_storage_set_sync_platforms(file_name, platforms);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_sync_platforms(char* file_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_remote_storage_get_sync_platforms(file_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: enum SteamRemoteStoragePlatform
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_forget(char* file_name)
{
    auto&& __result = steam_remote_storage_file_forget(file_name);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_write_stream_open(char* file_name, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_remote_storage_file_write_stream_open(file_name);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_write_stream_write_chunk(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: stream, type: UInt64
    std::uint64_t stream = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: data, type: Buffer
    gm::wire::GMBuffer data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: bytes, type: UInt32
    std::uint32_t bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_remote_storage_file_write_stream_write_chunk(stream, data, bytes);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_write_stream_close(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: stream, type: UInt64
    std::uint64_t stream = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_remote_storage_file_write_stream_close(stream);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_write_stream_cancel(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: stream, type: UInt64
    std::uint64_t stream = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_remote_storage_file_write_stream_cancel(stream);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_cached_ugc_count()
{
    auto&& __result = steam_remote_storage_get_cached_ugc_count();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_cached_ugc_handle(double index, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_remote_storage_get_cached_ugc_handle(static_cast<std::int32_t>(index));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_get_ugc_details(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: ugc_handle, type: UInt64
    std::uint64_t ugc_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_remote_storage_get_ugc_details(ugc_handle);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamRemoteStorageUgcDetails
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_ugc_read(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: ugc_handle, type: UInt64
    std::uint64_t ugc_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: out_data, type: Buffer
    gm::wire::GMBuffer out_data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: bytes_to_read, type: Int32
    std::int32_t bytes_to_read = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: offset, type: UInt32
    std::uint32_t offset = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: action, type: enum SteamRemoteStorageUgcReadAction
    gm_enums::SteamRemoteStorageUgcReadAction action = gm::wire::codec::readValue<gm_enums::SteamRemoteStorageUgcReadAction>(__br);

    auto&& __result = steam_remote_storage_ugc_read(ugc_handle, out_data, bytes_to_read, offset, action);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_file_share(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: file_name, type: String
    std::string_view file_name = gm::wire::codec::readValue<std::string_view>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_remote_storage_file_share(file_name, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_ugc_download(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: ugc_handle, type: UInt64
    std::uint64_t ugc_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: priority, type: UInt32
    std::uint32_t priority = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_remote_storage_ugc_download(ugc_handle, priority, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_ugc_download_to_location(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: ugc_handle, type: UInt64
    std::uint64_t ugc_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: location, type: String
    std::string_view location = gm::wire::codec::readValue<std::string_view>(__br);

    // field: priority, type: UInt32
    std::uint32_t priority = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_remote_storage_ugc_download_to_location(ugc_handle, location, priority, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_publish_workshop_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: file, type: String
    std::string_view file = gm::wire::codec::readValue<std::string_view>(__br);

    // field: preview_file, type: String
    std::string_view preview_file = gm::wire::codec::readValue<std::string_view>(__br);

    // field: app_id_consumer, type: UInt32
    std::uint32_t app_id_consumer = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: title, type: String
    std::string_view title = gm::wire::codec::readValue<std::string_view>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    // field: visibility, type: enum SteamRemoteStoragePublishedFileVisibility
    gm_enums::SteamRemoteStoragePublishedFileVisibility visibility = gm::wire::codec::readValue<gm_enums::SteamRemoteStoragePublishedFileVisibility>(__br);

    // field: tags_csv, type: String
    std::string_view tags_csv = gm::wire::codec::readValue<std::string_view>(__br);

    // field: file_type, type: enum SteamRemoteStorageWorkshopFileType
    gm_enums::SteamRemoteStorageWorkshopFileType file_type = gm::wire::codec::readValue<gm_enums::SteamRemoteStorageWorkshopFileType>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_remote_storage_publish_workshop_file(file, preview_file, app_id_consumer, title, description, visibility, tags_csv, file_type, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_create_published_file_update_request(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_remote_storage_create_published_file_update_request(published_file_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_update_published_file_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: file, type: String
    std::string_view file = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_remote_storage_update_published_file_file(update_handle, file);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_update_published_file_preview_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: preview_file, type: String
    std::string_view preview_file = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_remote_storage_update_published_file_preview_file(update_handle, preview_file);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_update_published_file_title(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: title, type: String
    std::string_view title = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_remote_storage_update_published_file_title(update_handle, title);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_update_published_file_description(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: description, type: String
    std::string_view description = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_remote_storage_update_published_file_description(update_handle, description);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_update_published_file_visibility(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: visibility, type: enum SteamRemoteStoragePublishedFileVisibility
    gm_enums::SteamRemoteStoragePublishedFileVisibility visibility = gm::wire::codec::readValue<gm_enums::SteamRemoteStoragePublishedFileVisibility>(__br);

    auto&& __result = steam_remote_storage_update_published_file_visibility(update_handle, visibility);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_update_published_file_tags(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: tags_csv, type: String
    std::string_view tags_csv = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_remote_storage_update_published_file_tags(update_handle, tags_csv);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_commit_published_file_update(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: update_handle, type: UInt64
    std::uint64_t update_handle = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_remote_storage_commit_published_file_update(update_handle, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_subscribe_published_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_remote_storage_subscribe_published_file(published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_remote_storage_unsubscribe_published_file(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: published_file_id, type: UInt64
    std::uint64_t published_file_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_remote_storage_unsubscribe_published_file(published_file_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_callback_lobby_data_update(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_matchmaking_set_callback_lobby_data_update(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_clear_callback_lobby_data_update()
{
    steam_matchmaking_clear_callback_lobby_data_update();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_callback_lobby_chat_update(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_matchmaking_set_callback_lobby_chat_update(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_clear_callback_lobby_chat_update()
{
    steam_matchmaking_clear_callback_lobby_chat_update();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_callback_lobby_chat_msg(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_matchmaking_set_callback_lobby_chat_msg(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_clear_callback_lobby_chat_msg()
{
    steam_matchmaking_clear_callback_lobby_chat_msg();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_callback_lobby_game_created(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_matchmaking_set_callback_lobby_game_created(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_clear_callback_lobby_game_created()
{
    steam_matchmaking_clear_callback_lobby_game_created();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_callback_lobby_invite(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_matchmaking_set_callback_lobby_invite(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_clear_callback_lobby_invite()
{
    steam_matchmaking_clear_callback_lobby_invite();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_create_lobby(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_type, type: enum SteamMatchmakingLobbyType
    gm_enums::SteamMatchmakingLobbyType lobby_type = gm::wire::codec::readValue<gm_enums::SteamMatchmakingLobbyType>(__br);

    // field: max_members, type: Int32
    std::int32_t max_members = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_matchmaking_create_lobby(lobby_type, max_members, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_join_lobby(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_matchmaking_join_lobby(lobby_id, callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_request_lobby_list(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    steam_matchmaking_request_lobby_list(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_add_request_lobby_list_string_filter(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: String
    std::string_view value = gm::wire::codec::readValue<std::string_view>(__br);

    // field: comparison, type: enum SteamMatchmakingLobbyComparison
    gm_enums::SteamMatchmakingLobbyComparison comparison = gm::wire::codec::readValue<gm_enums::SteamMatchmakingLobbyComparison>(__br);

    steam_matchmaking_add_request_lobby_list_string_filter(key, value, comparison);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_add_request_lobby_list_numerical_filter(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: Int32
    std::int32_t value = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: comparison, type: enum SteamMatchmakingLobbyComparison
    gm_enums::SteamMatchmakingLobbyComparison comparison = gm::wire::codec::readValue<gm_enums::SteamMatchmakingLobbyComparison>(__br);

    steam_matchmaking_add_request_lobby_list_numerical_filter(key, value, comparison);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_add_request_lobby_list_near_value_filter(char* key, double value)
{
    steam_matchmaking_add_request_lobby_list_near_value_filter(key, static_cast<std::int32_t>(value));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_add_request_lobby_list_distance_filter(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: distance, type: enum SteamMatchmakingLobbyDistanceFilter
    gm_enums::SteamMatchmakingLobbyDistanceFilter distance = gm::wire::codec::readValue<gm_enums::SteamMatchmakingLobbyDistanceFilter>(__br);

    steam_matchmaking_add_request_lobby_list_distance_filter(distance);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_add_request_lobby_list_result_count_filter(double max_results)
{
    steam_matchmaking_add_request_lobby_list_result_count_filter(static_cast<std::int32_t>(max_results));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_lobby_by_index(double index, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_matchmaking_get_lobby_by_index(static_cast<std::int32_t>(index));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_leave_lobby(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_matchmaking_leave_lobby(lobby_id);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_lobby_owner(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: new_owner_id, type: UInt64
    std::uint64_t new_owner_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_set_lobby_owner(lobby_id, new_owner_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_lobby_owner(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_get_lobby_owner(lobby_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_num_lobby_members(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_get_num_lobby_members(lobby_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_lobby_member_by_index(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: member_index, type: Int32
    std::int32_t member_index = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_matchmaking_get_lobby_member_by_index(lobby_id, member_index);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_lobby_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: String
    std::string_view value = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_matchmaking_set_lobby_data(lobby_id, key, value);
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_matchmaking_get_lobby_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    static std::string __result;
    __result = steam_matchmaking_get_lobby_data(lobby_id, key);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_delete_lobby_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    auto&& __result = steam_matchmaking_delete_lobby_data(lobby_id, key);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_lobby_data_count(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_get_lobby_data_count(lobby_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_lobby_data_by_index(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: index, type: Int32
    std::int32_t index = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: key_out, type: Buffer
    gm::wire::GMBuffer key_out = __buffer_queue.front();
    __buffer_queue.pop();

    // field: key_max, type: Int32
    std::int32_t key_max = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: val_out, type: Buffer
    gm::wire::GMBuffer val_out = __buffer_queue.front();
    __buffer_queue.pop();

    // field: val_max, type: Int32
    std::int32_t val_max = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_matchmaking_get_lobby_data_by_index(lobby_id, index, key_out, key_max, val_out, val_max);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_lobby_member_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    // field: value, type: String
    std::string_view value = gm::wire::codec::readValue<std::string_view>(__br);

    steam_matchmaking_set_lobby_member_data(lobby_id, key, value);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_matchmaking_get_lobby_member_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: member_id, type: UInt64
    std::uint64_t member_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: key, type: String
    std::string_view key = gm::wire::codec::readValue<std::string_view>(__br);

    static std::string __result;
    __result = steam_matchmaking_get_lobby_member_data(lobby_id, member_id, key);
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_send_lobby_chat_msg(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: msg, type: Buffer
    gm::wire::GMBuffer msg = __buffer_queue.front();
    __buffer_queue.pop();

    // field: bytes, type: Int32
    std::int32_t bytes = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_matchmaking_send_lobby_chat_msg(lobby_id, msg, bytes);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_lobby_chat_entry(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: lobby_id, type: UInt64
    std::uint64_t lobby_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: chat_id, type: Int32
    std::int32_t chat_id = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: out_buffer, type: Buffer
    gm::wire::GMBuffer out_buffer = __buffer_queue.front();
    __buffer_queue.pop();

    // field: out_max_bytes, type: Int32
    std::int32_t out_max_bytes = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_matchmaking_get_lobby_chat_entry(lobby_id, chat_id, out_buffer, out_max_bytes);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamMatchmakingLobbyChatEntry
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_add_request_lobby_list_filter_slots_available(double slots_available)
{
    steam_matchmaking_add_request_lobby_list_filter_slots_available(static_cast<std::int32_t>(slots_available));
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_request_lobby_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_lobby, type: UInt64
    std::uint64_t steam_id_lobby = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_request_lobby_data(steam_id_lobby);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_lobby_joinable(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_lobby, type: UInt64
    std::uint64_t steam_id_lobby = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: joinable, type: Bool
    bool joinable = gm::wire::codec::readValue<bool>(__br);

    auto&& __result = steam_matchmaking_set_lobby_joinable(steam_id_lobby, joinable);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_invite_user_to_lobby(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_lobby, type: UInt64
    std::uint64_t steam_id_lobby = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: steam_id_invitee, type: UInt64
    std::uint64_t steam_id_invitee = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_invite_user_to_lobby(steam_id_lobby, steam_id_invitee);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_lobby_game_server(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_lobby, type: UInt64
    std::uint64_t steam_id_lobby = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: ip, type: UInt32
    std::uint32_t ip = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: port, type: UInt32
    std::uint32_t port = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: steam_id_gs, type: UInt64
    std::uint64_t steam_id_gs = gm::wire::codec::readValue<std::uint64_t>(__br);

    steam_matchmaking_set_lobby_game_server(steam_id_lobby, ip, port, steam_id_gs);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_set_linked_lobby(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_lobby, type: UInt64
    std::uint64_t steam_id_lobby = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: steam_id_lobby_dependent, type: UInt64
    std::uint64_t steam_id_lobby_dependent = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_set_linked_lobby(steam_id_lobby, steam_id_lobby_dependent);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_matchmaking_get_lobby_game_server(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_lobby, type: UInt64
    std::uint64_t steam_id_lobby = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_matchmaking_get_lobby_game_server(steam_id_lobby);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamMatchmakingLobbyGameServer
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_set_callback_session_request(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_networking_messages_set_callback_session_request(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_clear_callback_session_request()
{
    steam_networking_messages_clear_callback_session_request();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_set_callback_session_failed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_networking_messages_set_callback_session_failed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_clear_callback_session_failed()
{
    steam_networking_messages_clear_callback_session_failed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_send_message_to_user(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_remote, type: UInt64
    std::uint64_t steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: data, type: Buffer
    gm::wire::GMBuffer data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: bytes, type: UInt32
    std::uint32_t bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: send_flags, type: Int32
    std::int32_t send_flags = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: remote_channel, type: Int32
    std::int32_t remote_channel = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_networking_messages_send_message_to_user(steam_id_remote, data, bytes, send_flags, remote_channel);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_receive_one_on_channel(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: local_channel, type: Int32
    std::int32_t local_channel = gm::wire::codec::readValue<std::int32_t>(__br);

    // field: out_data, type: Buffer
    gm::wire::GMBuffer out_data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: max_bytes, type: UInt32
    std::uint32_t max_bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: offset, type: UInt32
    std::uint32_t offset = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_networking_messages_receive_one_on_channel(local_channel, out_data, max_bytes, offset);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamNetworkingMessagesReceived
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_accept_session_with_user(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_remote, type: UInt64
    std::uint64_t steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_networking_messages_accept_session_with_user(steam_id_remote);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_close_session_with_user(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_remote, type: UInt64
    std::uint64_t steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_networking_messages_close_session_with_user(steam_id_remote);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_messages_close_channel_with_user(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_remote, type: UInt64
    std::uint64_t steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: local_channel, type: Int32
    std::int32_t local_channel = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_networking_messages_close_channel_with_user(steam_id_remote, local_channel);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_set_callback_connection_status_changed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_networking_sockets_set_callback_connection_status_changed(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_clear_callback_connection_status_changed()
{
    steam_networking_sockets_clear_callback_connection_status_changed();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_create_listen_socket_ip(double port)
{
    auto&& __result = steam_networking_sockets_create_listen_socket_ip(static_cast<std::uint32_t>(port));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_close_listen_socket(double listen_socket)
{
    auto&& __result = steam_networking_sockets_close_listen_socket(static_cast<std::uint32_t>(listen_socket));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_connect_by_ip_address(char* ip, double port)
{
    auto&& __result = steam_networking_sockets_connect_by_ip_address(ip, static_cast<std::uint32_t>(port));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_accept_connection(double conn)
{
    auto&& __result = steam_networking_sockets_accept_connection(static_cast<std::uint32_t>(conn));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_close_connection(double conn, double reason, char* debug, double linger)
{
    auto&& __result = steam_networking_sockets_close_connection(static_cast<std::uint32_t>(conn), static_cast<std::int32_t>(reason), debug, static_cast<bool>(linger));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_set_connection_user_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: conn, type: UInt32
    std::uint32_t conn = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: user_data, type: UInt64
    std::uint64_t user_data = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_networking_sockets_set_connection_user_data(conn, user_data);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_get_connection_user_data(double conn, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_networking_sockets_get_connection_user_data(static_cast<std::uint32_t>(conn));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_set_connection_name(double conn, char* name)
{
    steam_networking_sockets_set_connection_name(static_cast<std::uint32_t>(conn), name);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_networking_sockets_get_connection_name(double conn)
{
    static std::string __result;
    __result = steam_networking_sockets_get_connection_name(static_cast<std::uint32_t>(conn));
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_send_message_to_connection(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: conn, type: UInt32
    std::uint32_t conn = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: data, type: Buffer
    gm::wire::GMBuffer data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: bytes, type: UInt32
    std::uint32_t bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: send_flags, type: enum SteamNetworkingSendFlags
    gm_enums::SteamNetworkingSendFlags send_flags = gm::wire::codec::readValue<gm_enums::SteamNetworkingSendFlags>(__br);

    auto&& __result = steam_networking_sockets_send_message_to_connection(conn, data, bytes, send_flags);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_flush_messages_on_connection(double conn)
{
    auto&& __result = steam_networking_sockets_flush_messages_on_connection(static_cast<std::uint32_t>(conn));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_receive_one_on_connection(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: conn, type: UInt32
    std::uint32_t conn = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: out_data, type: Buffer
    gm::wire::GMBuffer out_data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: max_bytes, type: UInt32
    std::uint32_t max_bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: offset, type: UInt32
    std::uint32_t offset = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_networking_sockets_receive_one_on_connection(conn, out_data, max_bytes, offset);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamNetworkingSocketsReceived
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_get_connection_info(double conn, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_networking_sockets_get_connection_info(static_cast<std::uint32_t>(conn));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamNetworkingSocketsConnectionInfo
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT char* __EXT_NATIVE__steam_networking_sockets_get_detailed_connection_status(double conn)
{
    static std::string __result;
    __result = steam_networking_sockets_get_detailed_connection_status(static_cast<std::uint32_t>(conn));
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_run_callbacks()
{
    steam_networking_sockets_run_callbacks();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_create_socket_pair(double use_network_loopback, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_networking_sockets_create_socket_pair(static_cast<bool>(use_network_loopback));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt32[]
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_create_listen_socket_p2p(double local_virtual_port)
{
    auto&& __result = steam_networking_sockets_create_listen_socket_p2p(static_cast<std::int32_t>(local_virtual_port));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_connect_p2p(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: steam_id_remote, type: UInt64
    std::uint64_t steam_id_remote = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: remote_virtual_port, type: Int32
    std::int32_t remote_virtual_port = gm::wire::codec::readValue<std::int32_t>(__br);

    auto&& __result = steam_networking_sockets_connect_p2p(steam_id_remote, remote_virtual_port);
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_networking_sockets_get_listen_socket_address(double listen_socket)
{
    static std::string __result;
    __result = steam_networking_sockets_get_listen_socket_address(static_cast<std::uint32_t>(listen_socket));
    return (char*)__result.c_str();
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_create_poll_group()
{
    auto&& __result = steam_networking_sockets_create_poll_group();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_destroy_poll_group(double poll_group)
{
    auto&& __result = steam_networking_sockets_destroy_poll_group(static_cast<std::uint32_t>(poll_group));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_set_connection_poll_group(double conn, double poll_group)
{
    auto&& __result = steam_networking_sockets_set_connection_poll_group(static_cast<std::uint32_t>(conn), static_cast<std::uint32_t>(poll_group));
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_networking_sockets_receive_messages_on_poll_group(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: poll_group, type: UInt32
    std::uint32_t poll_group = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: out_data, type: Buffer
    gm::wire::GMBuffer out_data = __buffer_queue.front();
    __buffer_queue.pop();

    // field: max_bytes, type: UInt32
    std::uint32_t max_bytes = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: offset, type: UInt32
    std::uint32_t offset = gm::wire::codec::readValue<std::uint32_t>(__br);

    auto&& __result = steam_networking_sockets_receive_messages_on_poll_group(poll_group, out_data, max_bytes, offset);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamNetworkingSocketsReceived
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_set_callback_reservation_notification(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_parties_set_callback_reservation_notification(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_clear_callback_reservation_notification()
{
    steam_parties_clear_callback_reservation_notification();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_set_callback_available_beacon_locations_updated(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_parties_set_callback_available_beacon_locations_updated(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_clear_callback_available_beacon_locations_updated()
{
    steam_parties_clear_callback_available_beacon_locations_updated();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_set_callback_active_beacons_updated(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: callback, type: Function
    gm::wire::GMFunction callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);

    steam_parties_set_callback_active_beacons_updated(callback);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_clear_callback_active_beacons_updated()
{
    steam_parties_clear_callback_active_beacons_updated();
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_get_num_available_beacon_locations(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_parties_get_num_available_beacon_locations();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamPartiesAvailableBeaconLocationCount
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_get_available_beacon_locations(char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_parties_get_available_beacon_locations();
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamPartiesAvailableBeaconLocations
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_create_beacon(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: open_slots, type: UInt32
    std::uint32_t open_slots = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: beacon_location_type, type: enum SteamPartiesBeaconLocationType
    gm_enums::SteamPartiesBeaconLocationType beacon_location_type = gm::wire::codec::readValue<gm_enums::SteamPartiesBeaconLocationType>(__br);

    // field: beacon_location_id, type: UInt64
    std::uint64_t beacon_location_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: connect_string, type: String
    std::string_view connect_string = gm::wire::codec::readValue<std::string_view>(__br);

    // field: metadata, type: String
    std::string_view metadata = gm::wire::codec::readValue<std::string_view>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_parties_create_beacon(open_slots, beacon_location_type, beacon_location_id, connect_string, metadata, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_parties_on_reservation_completed(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: beacon_id, type: UInt64
    std::uint64_t beacon_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: user_steam_id, type: UInt64
    std::uint64_t user_steam_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_parties_on_reservation_completed(beacon_id, user_steam_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_parties_change_num_open_slots(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: beacon_id, type: UInt64
    std::uint64_t beacon_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: open_slots, type: UInt32
    std::uint32_t open_slots = gm::wire::codec::readValue<std::uint32_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_parties_change_num_open_slots(beacon_id, open_slots, callback);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_parties_destroy_beacon(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: beacon_id, type: UInt64
    std::uint64_t beacon_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_parties_destroy_beacon(beacon_id);
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_parties_get_num_active_beacons()
{
    auto&& __result = steam_parties_get_num_active_beacons();
    return static_cast<double>(__result);
}

GMEXPORT double __EXT_NATIVE__steam_parties_get_beacon_by_index(double index, char* __ret_buffer, double __ret_buffer_length)
{
    auto&& __result = steam_parties_get_beacon_by_index(static_cast<std::uint32_t>(index));
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: UInt64
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_get_beacon_details(char* __arg_buffer, double __arg_buffer_length, char* __ret_buffer, double __ret_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: beacon_id, type: UInt64
    std::uint64_t beacon_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    auto&& __result = steam_parties_get_beacon_details(beacon_id);
    gm::byteio::BufferWriter __bw{__ret_buffer, static_cast<size_t>(__ret_buffer_length)};

    // return: __result, type: struct SteamPartiesBeaconDetails
    gm::wire::codec::writeValue(__bw, __result);
    return 0;
}

GMEXPORT double __EXT_NATIVE__steam_parties_join_party(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: beacon_id, type: UInt64
    std::uint64_t beacon_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: callback, type: optional<Function>
    std::optional<gm::wire::GMFunction> callback = std::nullopt;
    if (gm::wire::codec::readValue<bool>(__br))
    {
        callback = gm::wire::codec::readFunction(__br, &__dispatch_queue);
    }

    auto&& __result = steam_parties_join_party(beacon_id, callback);
    return static_cast<double>(__result);
}

GMEXPORT char* __EXT_NATIVE__steam_parties_get_beacon_location_data(char* __arg_buffer, double __arg_buffer_length)
{
    gm::byteio::BufferReader __br{__arg_buffer, static_cast<size_t>(__arg_buffer_length)};

    // field: beacon_location_type, type: enum SteamPartiesBeaconLocationType
    gm_enums::SteamPartiesBeaconLocationType beacon_location_type = gm::wire::codec::readValue<gm_enums::SteamPartiesBeaconLocationType>(__br);

    // field: beacon_location_id, type: UInt64
    std::uint64_t beacon_location_id = gm::wire::codec::readValue<std::uint64_t>(__br);

    // field: data_kind, type: enum SteamPartiesBeaconLocationData
    gm_enums::SteamPartiesBeaconLocationData data_kind = gm::wire::codec::readValue<gm_enums::SteamPartiesBeaconLocationData>(__br);

    static std::string __result;
    __result = steam_parties_get_beacon_location_data(beacon_location_type, beacon_location_id, data_kind);
    return (char*)__result.c_str();
}

