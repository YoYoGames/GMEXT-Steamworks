// gm_steam_friends.cpp
//
// Steamworks module: friends (ISteamFriends)

#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteamfriends.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <algorithm>
#include <mutex>

using namespace gm::wire;
using namespace gm_structs;
using namespace gm_enums;


static inline ISteamFriends* steam_friends_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Friends: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamFriends* f = SteamFriends();
    if (!f)
        steam_set_last_error("Steam Friends: SteamFriends() returned NULL.");

    return f;
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_avatar_image_loaded = nullptr;

static inline gm_structs::SteamFriendsAvatarImageLoaded fromNative(const AvatarImageLoaded_t& e)
{
    gm_structs::SteamFriendsAvatarImageLoaded out {};
    out.steam_id_64 = (std::uint64_t)e.m_steamID.ConvertToUint64();
    out.image_handle = (std::int32_t)e.m_iImage;
    out.width = (std::int32_t)e.m_iWide;
    out.height = (std::int32_t)e.m_iTall;
    return out;
}

class SteamFriends_Callbacks {
public:
    STEAM_CALLBACK(SteamFriends_Callbacks, OnAvatarImageLoaded, AvatarImageLoaded_t);
};

void SteamFriends_Callbacks::OnAvatarImageLoaded(AvatarImageLoaded_t* p)
{
    if (!p)
        return;

    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_avatar_image_loaded;
    }

    if (cb)
        cb.call(fromNative(*p));
}

static SteamFriends_Callbacks g_steamfriends_callbacks;

void steam_friends_set_callback_avatar_image_loaded(const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_avatar_image_loaded = callback;
}

void steam_friends_clear_callback_avatar_image_loaded()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_avatar_image_loaded = nullptr;
}

void steam_friends_activate_game_overlay(std::string_view pchDialog)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    std::string dlg(pchDialog);
    f->ActivateGameOverlay(dlg.c_str());
}

void steam_friends_activate_game_overlay_invite_dialog(std::uint64_t steamIDLobby)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    f->ActivateGameOverlayInviteDialog(steam_id_from_u64(steamIDLobby));
}

void steam_friends_activate_game_overlay_to_store(std::uint32_t nAppID, gm_enums::SteamFriendsOverlayToStoreFlag eFlag)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    f->ActivateGameOverlayToStore((AppId_t)nAppID, (EOverlayToStoreFlag)(int)eFlag);
}

void steam_friends_activate_game_overlay_to_user(std::string_view pchDialog, std::uint64_t steamID)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    std::string dlg(pchDialog);
    f->ActivateGameOverlayToUser(dlg.c_str(), steam_id_from_u64(steamID));
}

void steam_friends_activate_game_overlay_to_web_page(
    std::string_view pchURL, gm_enums::SteamFriendsOverlayToWebpageMode eMode
)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    std::string url(pchURL);
    f->ActivateGameOverlayToWebPage(url.c_str(), (EActivateGameOverlayToWebPageMode)(int)eMode);
}

void steam_friends_clear_rich_presence()
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    f->ClearRichPresence();
}

bool steam_friends_close_clan_chat_window_in_steam(std::uint64_t steamIDClanChat)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->CloseClanChatWindowInSteam(steam_id_from_u64(steamIDClanChat));
}

std::uint64_t steam_friends_get_chat_member_by_index(std::uint64_t steamIDClan, std::int32_t iUser)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    CSteamID id = f->GetChatMemberByIndex(steam_id_from_u64(steamIDClan), iUser);
    return steam_u64_from_steam_id(id);
}

gm_structs::SteamFriendsClanActivityCounts steam_friends_get_clan_activity_counts(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamFriendsClanActivityCounts out {};
    out.ok = false;
    out.online = 0;
    out.in_game = 0;
    out.chatting = 0;

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return out;

    int online = 0, inGame = 0, chatting = 0;
    const bool ok = f->GetClanActivityCounts(steam_id_from_u64(steamIDClan), &online, &inGame, &chatting);

    out.ok = ok;
    if (ok) {
        out.online = online;
        out.in_game = inGame;
        out.chatting = chatting;
    } else {
        steam_set_last_error("GetClanActivityCounts failed.");
    }

    return out;
}

std::uint64_t steam_friends_get_clan_by_index(std::int32_t iClan)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    CSteamID id = f->GetClanByIndex(iClan);
    return steam_u64_from_steam_id(id);
}

std::int32_t steam_friends_get_clan_chat_member_count(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetClanChatMemberCount(steam_id_from_u64(steamIDClan));
}

gm_structs::SteamFriendsClanChatMessage
steam_friends_get_clan_chat_message(std::uint64_t steamIDClanChat, std::int32_t iMessage)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamFriendsClanChatMessage out {};
    out.bytes_copied = 0;
    out.text = "";
    out.entry_type = gm_enums::SteamFriendsChatEntryType::Invalid;
    out.chatter_steam_id_64 = 0;

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return out;

    uint32 cchTextMax = 1024;
    std::vector<char> buf((size_t)cchTextMax);

    CSteamID chatter {};
    EChatEntryType entry = k_EChatEntryTypeInvalid;

    const int bytes = f->GetClanChatMessage(
        steam_id_from_u64(steamIDClanChat), iMessage, buf.data(), (int)buf.size(), &entry, &chatter
    );

    out.bytes_copied = bytes;
    out.entry_type = (gm_enums::SteamFriendsChatEntryType)(int)entry;
    out.chatter_steam_id_64 = steam_u64_from_steam_id(chatter);

    if (bytes > 0) {
        const int n = std::min<int>(bytes, (int)buf.size());
        out.text.assign(buf.data(), buf.data() + n);
    }

    return out;
}

std::int32_t steam_friends_get_clan_count()
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetClanCount();
}

std::string steam_friends_get_clan_name(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetClanName(steam_id_from_u64(steamIDClan));
    return s ? std::string(s) : std::string();
}

std::uint64_t steam_friends_get_clan_officer_by_index(std::uint64_t steamIDClan, std::int32_t iOfficer)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    CSteamID id = f->GetClanOfficerByIndex(steam_id_from_u64(steamIDClan), iOfficer);
    return steam_u64_from_steam_id(id);
}

std::int32_t steam_friends_get_clan_officer_count(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetClanOfficerCount(steam_id_from_u64(steamIDClan));
}

std::uint64_t steam_friends_get_clan_owner(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    CSteamID id = f->GetClanOwner(steam_id_from_u64(steamIDClan));
    return steam_u64_from_steam_id(id);
}

std::string steam_friends_get_clan_tag(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetClanTag(steam_id_from_u64(steamIDClan));
    return s ? std::string(s) : std::string();
}

std::uint64_t steam_friends_get_coplay_friend(std::int32_t iCoplayFriend)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    CSteamID id = f->GetCoplayFriend(iCoplayFriend);
    return steam_u64_from_steam_id(id);
}

std::int32_t steam_friends_get_coplay_friend_count()
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetCoplayFriendCount();
}

std::uint64_t steam_friends_get_friend_by_index(std::int32_t iFriend, std::int32_t iFriendFlags)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    CSteamID id = f->GetFriendByIndex(iFriend, iFriendFlags);
    return steam_u64_from_steam_id(id);
}

std::uint32_t steam_friends_get_friend_coplay_game(std::uint64_t steamIDFriend)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::uint32_t)f->GetFriendCoplayGame(steam_id_from_u64(steamIDFriend));
}

std::int32_t steam_friends_get_friend_coplay_time(std::uint64_t steamIDFriend)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendCoplayTime(steam_id_from_u64(steamIDFriend));
}

std::int32_t steam_friends_get_friend_count(std::int32_t iFriendFlags)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendCount(iFriendFlags);
}

std::int32_t steam_friends_get_friend_count_from_source(std::uint64_t steamIDSource)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendCountFromSource(steam_id_from_u64(steamIDSource));
}

// ============================================================
// ISteamFriends — Part 4 (From source + game played + messages + persona)
// ============================================================

std::uint64_t steam_friends_get_friend_from_source_by_index(std::uint64_t steamIDSource, std::int32_t iFriend)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    CSteamID id = f->GetFriendFromSourceByIndex(steam_id_from_u64(steamIDSource), iFriend);
    return steam_u64_from_steam_id(id);
}

gm_structs::SteamFriendsFriendGamePlayed steam_friends_get_friend_game_played(std::uint64_t steamIDFriend)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamFriendsFriendGamePlayed out {};
    out.ok = false;
    out.game_id = 0;
    out.game_ip_v4 = 0;
    out.game_port = 0;
    out.query_port = 0;
    out.lobby_steam_id_64 = 0;

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return out;

    FriendGameInfo_t info {};
    const bool ok = f->GetFriendGamePlayed(steam_id_from_u64(steamIDFriend), &info);

    out.ok = ok;
    if (!ok)
        return out;

    out.game_id = (std::uint64_t)info.m_gameID.ToUint64();
    out.game_ip_v4 = (std::uint32_t)info.m_unGameIP;
    out.game_port = (std::uint32_t)info.m_usGamePort;
    out.query_port = (std::uint32_t)info.m_usQueryPort;
    out.lobby_steam_id_64 = steam_u64_from_steam_id(info.m_steamIDLobby);

    return out;
}

gm_structs::SteamFriendsFriendMessage
steam_friends_get_friend_message(std::uint64_t steamIDFriend, std::int32_t iMessageID, std::int32_t cubData)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamFriendsFriendMessage out {};
    out.bytes_copied = 0;
    out.entry_type = gm_enums::SteamFriendsChatEntryType::Invalid;
    out.data = "";

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return out;

    if (cubData <= 0) {
        steam_set_last_error("GetFriendMessage: cubData must be > 0.");
        return out;
    }

    std::vector<std::uint8_t> buf((size_t)cubData);

    EChatEntryType entry = k_EChatEntryTypeInvalid;
    const int bytes
        = f->GetFriendMessage(steam_id_from_u64(steamIDFriend), iMessageID, buf.data(), (int)buf.size(), &entry);

    out.bytes_copied = bytes;
    out.entry_type = (gm_enums::SteamFriendsChatEntryType)(int)entry;

    if (bytes > 0) {
        const int n = std::min<int>(bytes, (int)buf.size());
        out.data.assign((const char*)buf.data(), (const char*)buf.data() + n);
    }

    return out;
}

std::string steam_friends_get_friend_persona_name(std::uint64_t steamIDFriend)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetFriendPersonaName(steam_id_from_u64(steamIDFriend));
    return s ? std::string(s) : std::string();
}

std::string steam_friends_get_friend_persona_name_history(std::uint64_t steamIDFriend, std::int32_t iPersonaName)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetFriendPersonaNameHistory(steam_id_from_u64(steamIDFriend), iPersonaName);
    return s ? std::string(s) : std::string();
}

gm_enums::SteamFriendsPersonaState steam_friends_get_friend_persona_state(std::uint64_t steamIDFriend)
{
    STEAM_GUARD_RET(gm_enums::SteamFriendsPersonaState::Offline);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return gm_enums::SteamFriendsPersonaState::Offline;

    const EPersonaState st = f->GetFriendPersonaState(steam_id_from_u64(steamIDFriend));
    return (gm_enums::SteamFriendsPersonaState)(int)st;
}

gm_enums::SteamFriendsRelationship steam_friends_get_friend_relationship(std::uint64_t steamIDFriend)
{
    STEAM_GUARD_RET({});
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return gm_enums::SteamFriendsRelationship::None;

    const EFriendRelationship rel = f->GetFriendRelationship(steam_id_from_u64(steamIDFriend));
    return (gm_enums::SteamFriendsRelationship)(int)rel;
}

std::string steam_friends_get_friend_rich_presence(std::uint64_t steamIDFriend, std::string_view pchKey)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    std::string key(pchKey);
    const char* s = f->GetFriendRichPresence(steam_id_from_u64(steamIDFriend), key.c_str());
    return s ? std::string(s) : std::string();
}

std::string steam_friends_get_friend_rich_presence_key_by_index(std::uint64_t steamIDFriend, std::int32_t iKey)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetFriendRichPresenceKeyByIndex(steam_id_from_u64(steamIDFriend), iKey);
    return s ? std::string(s) : std::string();
}

std::int32_t steam_friends_get_friend_rich_presence_key_count(std::uint64_t steamIDFriend)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendRichPresenceKeyCount(steam_id_from_u64(steamIDFriend));
}

std::int32_t steam_friends_get_friends_group_count()
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendsGroupCount();
}

std::int32_t steam_friends_get_friends_group_id_by_index(std::int32_t iFG)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendsGroupIDByIndex(iFG);
}

std::string steam_friends_get_friends_group_name(std::int32_t friendsGroupID)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetFriendsGroupName((FriendsGroupID_t)friendsGroupID);
    return s ? std::string(s) : std::string();
}

std::int32_t steam_friends_get_friend_steam_level(std::uint64_t steam_id_friend)
{
    STEAM_GUARD_RET(0);

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendSteamLevel(steam_id_from_u64(steam_id_friend));
}

std::int32_t steam_friends_get_large_friend_avatar(std::uint64_t steam_id_friend)
{
    STEAM_GUARD_RET(-1);

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return -1;

    return (std::int32_t)f->GetLargeFriendAvatar(steam_id_from_u64(steam_id_friend));
}

std::int32_t steam_friends_get_medium_friend_avatar(std::uint64_t steam_id_friend)
{
    STEAM_GUARD_RET(-1);

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return -1;

    return (std::int32_t)f->GetMediumFriendAvatar(steam_id_from_u64(steam_id_friend));
}

std::int32_t steam_friends_get_friends_group_members_count(std::int32_t friendsGroupID)
{
    STEAM_GUARD_RET(0);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return 0;

    return (std::int32_t)f->GetFriendsGroupMembersCount((FriendsGroupID_t)friendsGroupID);
}

std::vector<std::uint64_t> steam_friends_get_friends_group_members_list(std::int32_t friendsGroupID)
{
    std::vector<std::uint64_t> out;

    STEAM_GUARD_RET(out);

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return out;

    const int n = f->GetFriendsGroupMembersCount((FriendsGroupID_t)friendsGroupID);
    if (n <= 0)
        return out;

    std::vector<CSteamID> ids((size_t)n);
    f->GetFriendsGroupMembersList((FriendsGroupID_t)friendsGroupID, ids.data(), n);

    out.reserve((size_t)n);
    for (int i = 0; i < n; ++i)
        out.push_back(steam_u64_from_steam_id(ids[(size_t)i]));

    return out;
}

std::string steam_friends_get_persona_name()
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetPersonaName();
    return s ? std::string(s) : std::string();
}

gm_enums::SteamFriendsPersonaState steam_friends_get_persona_state()
{
    STEAM_GUARD_RET(gm_enums::SteamFriendsPersonaState::Offline);

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return gm_enums::SteamFriendsPersonaState::Offline;

    const EPersonaState st = f->GetPersonaState();
    return (gm_enums::SteamFriendsPersonaState)(int)st;
}

std::string steam_friends_get_player_nickname(std::uint64_t steamIDPlayer)
{
    STEAM_GUARD_RET("");
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return "";

    const char* s = f->GetPlayerNickname(steam_id_from_u64(steamIDPlayer));
    return s ? std::string(s) : std::string();
}

std::int32_t steam_friends_get_small_friend_avatar(std::uint64_t steam_id_friend)
{
    STEAM_GUARD_RET(-1);

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return -1;

    return (std::int32_t)f->GetSmallFriendAvatar(steam_id_from_u64(steam_id_friend));
}

bool steam_friends_has_friend(std::uint64_t steamIDFriend, std::int32_t iFriendFlags)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->HasFriend(steam_id_from_u64(steamIDFriend), iFriendFlags);
}

bool steam_friends_invite_user_to_game(std::uint64_t steamIDFriend, std::string_view pchConnectString)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    std::string s(pchConnectString);
    return f->InviteUserToGame(steam_id_from_u64(steamIDFriend), s.c_str());
}

bool steam_friends_is_clan_chat_admin(std::uint64_t steamIDClanChat, std::uint64_t steamIDUser)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->IsClanChatAdmin(steam_id_from_u64(steamIDClanChat), steam_id_from_u64(steamIDUser));
}

bool steam_friends_is_clan_public(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->IsClanPublic(steam_id_from_u64(steamIDClan));
}

bool steam_friends_is_clan_official_game_group(std::uint64_t steamIDClan)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->IsClanOfficialGameGroup(steam_id_from_u64(steamIDClan));
}

bool steam_friends_is_clan_chat_window_open_in_steam(std::uint64_t steamIDClanChat)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->IsClanChatWindowOpenInSteam(steam_id_from_u64(steamIDClanChat));
}

bool steam_friends_is_user_in_source(std::uint64_t steamIDUser, std::uint64_t steamIDSource)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->IsUserInSource(steam_id_from_u64(steamIDUser), steam_id_from_u64(steamIDSource));
}

void steam_friends_request_friend_rich_presence(std::uint64_t steamIDFriend)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    f->RequestFriendRichPresence(steam_id_from_u64(steamIDFriend));
}

bool steam_friends_request_user_information(std::uint64_t steamIDUser, bool bRequireNameOnly)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    return f->RequestUserInformation(steam_id_from_u64(steamIDUser), bRequireNameOnly);
}

void steam_friends_set_in_game_voice_speaking(std::uint64_t steamIDUser, bool bSpeaking)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    f->SetInGameVoiceSpeaking(steam_id_from_u64(steamIDUser), bSpeaking);
}

void steam_friends_set_played_with(std::uint64_t steamIDUserPlayedWith)
{
    STEAM_GUARD();
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    f->SetPlayedWith(steam_id_from_u64(steamIDUserPlayedWith));
}

bool steam_friends_set_rich_presence(std::string_view pchKey, std::string_view pchValue)
{
    STEAM_GUARD_RET(false);
    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    std::string key(pchKey);
    std::string val(pchValue);

    const bool ok = f->SetRichPresence(key.c_str(), val.c_str());
    if (!ok)
        steam_set_last_error("SetRichPresence failed (Steam returned false).");

    return ok;
}

static inline gm_structs::SteamFriendsGetFollowerCountResult friends_fromNative(const FriendsGetFollowerCount_t& e)
{
    gm_structs::SteamFriendsGetFollowerCountResult out{};
    out.result = (int32)e.m_eResult;
    out.steam_id = (std::uint64_t)e.m_steamID.ConvertToUint64();
    out.count = (int32)e.m_nCount;
    return out;
}

static inline gm_structs::SteamFriendsIsFollowingResult friends_fromNative(const FriendsIsFollowing_t& e)
{
    gm_structs::SteamFriendsIsFollowingResult out{};
    out.result = (int32)e.m_eResult;
    out.steam_id = (std::uint64_t)e.m_steamID.ConvertToUint64();
    out.is_following = (e.m_bIsFollowing != 0);
    return out;
}

static inline gm_structs::SteamFriendsEnumerateFollowingListResult friends_fromNative(const FriendsEnumerateFollowingList_t& e)
{
    gm_structs::SteamFriendsEnumerateFollowingListResult out{};
    out.result = (int32)e.m_eResult;

    out.steam_ids.clear();
    out.steam_ids.reserve((size_t)e.m_nResultsReturned);
    for (int i = 0; i < e.m_nResultsReturned; ++i)
        out.steam_ids.push_back((std::uint64_t)e.m_rgSteamID[i].ConvertToUint64());

    out.results_returned = (int32)e.m_nResultsReturned;
    out.total_result_count = (int32)e.m_nTotalResultCount;
    return out;
}

static inline gm_structs::SteamFriendsRequestClanOfficerListResult friends_fromNative(const ClanOfficerListResponse_t& e)
{
    gm_structs::SteamFriendsRequestClanOfficerListResult out{};
    out.result = e.m_bSuccess;
    out.clan_id = (std::uint64_t)e.m_steamIDClan.ConvertToUint64();
    out.officers = (int32)e.m_cOfficers;
    return out;
}

static inline gm_structs::SteamFriendsDownloadClanActivityCountsResult friends_fromNative(const DownloadClanActivityCountsResult_t& e)
{
    gm_structs::SteamFriendsDownloadClanActivityCountsResult out{};
    out.result = e.m_bSuccess;
    return out;
}

void steam_friends_get_follower_count(std::uint64_t steam_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    SteamAPICall_t call = f->GetFollowerCount(steam_id_from_u64(steam_id));
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamFriendsGetFollowerCountResult, FriendsGetFollowerCount_t>(callback.value(), &friends_fromNative);
        h->set(call);
    }
}

void steam_friends_is_following(std::uint64_t steam_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    SteamAPICall_t call = f->IsFollowing(steam_id_from_u64(steam_id));
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamFriendsIsFollowingResult, FriendsIsFollowing_t>(callback.value(), &friends_fromNative);
        h->set(call);
    }
}

void steam_friends_enumerate_following_list(std::uint32_t start_index,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    SteamAPICall_t call = f->EnumerateFollowingList(start_index);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamFriendsEnumerateFollowingListResult, FriendsEnumerateFollowingList_t>(callback.value(), &friends_fromNative);
        h->set(call);
    }
}

void steam_friends_request_clan_officer_list(std::uint64_t clan_steam_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return;

    SteamAPICall_t call = f->RequestClanOfficerList(steam_id_from_u64(clan_steam_id));
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamFriendsRequestClanOfficerListResult, ClanOfficerListResponse_t>(callback.value(), &friends_fromNative);
        h->set(call);
    }
}

bool steam_friends_download_clan_activity_counts(
    const std::vector<std::uint64_t>& psteamIDClans,
    std::int32_t cClansToRequest,
    const std::optional<gm::wire::GMFunction>& callback
)
{
    STEAM_GUARD_RET(false);

    ISteamFriends* f = steam_friends_iface();
    if (!f)
        return false;

    // Clamp requested count to input vector size
    const uint32 n = (uint32)std::min<std::size_t>(
        psteamIDClans.size(),
        (size_t)std::max<std::int32_t>(0, cClansToRequest)
    );

    if (n == 0)
        return false;

    std::vector<CSteamID> ids;
    ids.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        ids.push_back(steam_id_from_u64(psteamIDClans[(size_t)i]));

    SteamAPICall_t call = f->DownloadClanActivityCounts(ids.data(), (int)ids.size());
    if (!call)
    {
        steam_set_last_error("Steam Friends: DownloadClanActivityCounts returned NULL SteamAPICall_t.");
        return false;
    }

    if (callback)
    {
        auto* h =
            new steam_async::CallResult<
                gm_structs::SteamFriendsDownloadClanActivityCountsResult,
                DownloadClanActivityCountsResult_t
            >(callback.value(), &friends_fromNative);

        h->set(call);
    }

    return true;
}

static gm::wire::GMFunction g_cb_persona_state_change = nullptr;

static inline gm_structs::SteamFriendsPersonaStateChange friends_fromNative(const PersonaStateChange_t& e)
{
    gm_structs::SteamFriendsPersonaStateChange out{};
    out.steam_id = (std::uint64_t)e.m_ulSteamID;
    out.change_flags = (int32)e.m_nChangeFlags;
    return out;
}

class SteamFriends_Persona_Callback
{
public:
    STEAM_CALLBACK(SteamFriends_Persona_Callback, OnPersonaStateChange, PersonaStateChange_t);
};

void SteamFriends_Persona_Callback::OnPersonaStateChange(PersonaStateChange_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_persona_state_change;
    }
    if (cb)
        cb.call(friends_fromNative(*p));
}

static SteamFriends_Persona_Callback g_friends_persona_cb;

void steam_friends_set_callback_persona_state_change( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_persona_state_change = callback;
}

void steam_friends_clear_callback_persona_state_change()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_persona_state_change = nullptr;
}

static gm::wire::GMFunction g_cb_game_overlay_activated = nullptr;
static gm::wire::GMFunction g_cb_rich_presence_join_requested = nullptr;
static gm::wire::GMFunction g_cb_lobby_join_requested = nullptr;
static gm::wire::GMFunction g_cb_friend_rich_presence_update = nullptr;

static inline gm_structs::SteamFriendsGameOverlayActivated friends_fromNative(const GameOverlayActivated_t& e)
{
    gm_structs::SteamFriendsGameOverlayActivated out{};
    out.active = (e.m_bActive != 0);
    return out;
}

static inline gm_structs::SteamFriendsGameRichPresenceJoinRequested friends_fromNative(const GameRichPresenceJoinRequested_t& e)
{
    gm_structs::SteamFriendsGameRichPresenceJoinRequested out{};
    out.steam_id_friend = (std::uint64_t)e.m_steamIDFriend.ConvertToUint64();
    out.connect_string = e.m_rgchConnect;
    return out;
}

static inline gm_structs::SteamFriendsGameLobbyJoinRequested friends_fromNative(const GameLobbyJoinRequested_t& e)
{
    gm_structs::SteamFriendsGameLobbyJoinRequested out{};
    out.steam_id_friend = (std::uint64_t)e.m_steamIDFriend.ConvertToUint64();
    out.steam_id_lobby  = (std::uint64_t)e.m_steamIDLobby.ConvertToUint64();
    return out;
}

static inline gm_structs::SteamFriendsFriendRichPresenceUpdate friends_fromNative(const FriendRichPresenceUpdate_t& e)
{
    gm_structs::SteamFriendsFriendRichPresenceUpdate out{};
    out.steam_id_friend = (std::uint64_t)e.m_steamIDFriend.ConvertToUint64();
    out.app_id = (std::uint32_t)e.m_nAppID;
    return out;
}

class SteamFriends_ExtraCallbacks
{
public:
    STEAM_CALLBACK(SteamFriends_ExtraCallbacks, OnGameOverlayActivated, GameOverlayActivated_t);
    STEAM_CALLBACK(SteamFriends_ExtraCallbacks, OnRichPresenceJoinRequested, GameRichPresenceJoinRequested_t);
    STEAM_CALLBACK(SteamFriends_ExtraCallbacks, OnLobbyJoinRequested, GameLobbyJoinRequested_t);
    STEAM_CALLBACK(SteamFriends_ExtraCallbacks, OnFriendRichPresenceUpdate, FriendRichPresenceUpdate_t);
};

void SteamFriends_ExtraCallbacks::OnGameOverlayActivated(GameOverlayActivated_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_game_overlay_activated;
    }
    if (cb)
        cb.call(friends_fromNative(*p));
}

void SteamFriends_ExtraCallbacks::OnRichPresenceJoinRequested(GameRichPresenceJoinRequested_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_rich_presence_join_requested;
    }
    if (cb)
        cb.call(friends_fromNative(*p));
}

void SteamFriends_ExtraCallbacks::OnLobbyJoinRequested(GameLobbyJoinRequested_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_lobby_join_requested;
    }
    if (cb)
        cb.call(friends_fromNative(*p));
}

void SteamFriends_ExtraCallbacks::OnFriendRichPresenceUpdate(FriendRichPresenceUpdate_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_friend_rich_presence_update;
    }
    if (cb)
        cb.call(friends_fromNative(*p));
}

static SteamFriends_ExtraCallbacks g_friends_extra_callbacks;

void steam_friends_set_callback_game_overlay_activated(const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_game_overlay_activated = callback;
}

void steam_friends_clear_callback_game_overlay_activated()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_game_overlay_activated = nullptr;
}

void steam_friends_set_callback_game_rich_presence_join_requested( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rich_presence_join_requested = callback;
}

void steam_friends_clear_callback_game_rich_presence_join_requested()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rich_presence_join_requested = nullptr;
}

void steam_friends_set_callback_game_lobby_join_requested( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_lobby_join_requested = callback;
}

void steam_friends_clear_callback_game_lobby_join_requested()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_lobby_join_requested = nullptr;
}

void steam_friends_set_callback_friend_rich_presence_update( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_friend_rich_presence_update = callback;
}

void steam_friends_clear_callback_friend_rich_presence_update()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_friend_rich_presence_update = nullptr;
}

static gm::wire::GMFunction g_cb_game_server_change_requested = nullptr;

static inline gm_structs::SteamFriendsGameServerChangeRequested friends_fromNative(const GameServerChangeRequested_t& e)
{
    gm_structs::SteamFriendsGameServerChangeRequested out{};
    out.server = e.m_rgchServer;
    out.password = e.m_rgchPassword;
    return out;
}

class SteamFriends_GameServerChangeRequested_Callback
{
public:
    STEAM_CALLBACK(SteamFriends_GameServerChangeRequested_Callback, OnGameServerChangeRequested, GameServerChangeRequested_t);
};

void SteamFriends_GameServerChangeRequested_Callback::OnGameServerChangeRequested(GameServerChangeRequested_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_game_server_change_requested;
    }
    if (cb)
        cb.call(friends_fromNative(*p));
}

static SteamFriends_GameServerChangeRequested_Callback g_friends_gs_change_cb;

void steam_friends_set_callback_game_server_change_requested( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_game_server_change_requested = callback;
}

void steam_friends_clear_callback_game_server_change_requested()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_game_server_change_requested = nullptr;
}
