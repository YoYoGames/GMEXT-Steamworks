#include "GMSteamworks.h"
#include "steam_async_common.h"

#include <steam/steam_api.h>
#include <steam/isteammatchmaking.h>

#include <algorithm>
#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <mutex>

static inline ISteamMatchmaking* steam_matchmaking_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Matchmaking: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamMatchmaking* mm = SteamMatchmaking();
    if (!mm)
        steam_set_last_error("Steam Matchmaking: SteamMatchmaking() returned NULL.");

    return mm;
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_lobby_data_update = nullptr;
static gm::wire::GMFunction g_cb_lobby_chat_update = nullptr;
static gm::wire::GMFunction g_cb_lobby_chat_msg = nullptr;
static gm::wire::GMFunction g_cb_lobby_game_created = nullptr;
static gm::wire::GMFunction g_cb_lobby_invite = nullptr;

static inline gm_structs::SteamMatchmakingLobbyDataUpdate mm_fromNative(const LobbyDataUpdate_t& e)
{
    gm_structs::SteamMatchmakingLobbyDataUpdate out{};
    out.lobby_id = (std::uint64_t)e.m_ulSteamIDLobby;
    out.member_id = (std::uint64_t)e.m_ulSteamIDMember;
    out.success = (e.m_bSuccess != 0);
    return out;
}

static inline gm_structs::SteamMatchmakingLobbyChatUpdate mm_fromNative(const LobbyChatUpdate_t& e)
{
    gm_structs::SteamMatchmakingLobbyChatUpdate out{};
    out.lobby_id = (std::uint64_t)e.m_ulSteamIDLobby;
    out.user_changed_id = (std::uint64_t)e.m_ulSteamIDUserChanged;
    out.making_change_id = (std::uint64_t)e.m_ulSteamIDMakingChange;
    out.chat_member_state_change = (std::uint32_t)e.m_rgfChatMemberStateChange;
    return out;
}

static inline gm_structs::SteamMatchmakingLobbyChatMsg mm_fromNative(const LobbyChatMsg_t& e)
{
    gm_structs::SteamMatchmakingLobbyChatMsg out{};
    out.lobby_id = (std::uint64_t)e.m_ulSteamIDLobby;
    out.sender_id = (std::uint64_t)e.m_ulSteamIDUser;
    out.chat_entry_type = (std::int32_t)e.m_eChatEntryType;
    out.message_size = 0;
    return out;
}

static inline gm_structs::SteamMatchmakingLobbyGameCreated mm_fromNative(const LobbyGameCreated_t& e)
{
    gm_structs::SteamMatchmakingLobbyGameCreated out{};
    out.lobby_id = (std::uint64_t)e.m_ulSteamIDLobby;
    out.server_ip = (std::uint32_t)e.m_unIP;
    out.server_port = (std::uint32_t)e.m_usPort;
    out.game_server_id = (std::uint64_t)e.m_ulSteamIDGameServer;
    return out;
}

static inline gm_structs::SteamMatchmakingLobbyInvite mm_fromNative(const LobbyInvite_t& e)
{
    gm_structs::SteamMatchmakingLobbyInvite out{};
    out.inviter_id = (std::uint64_t)e.m_ulSteamIDUser;
    out.lobby_id = (std::uint64_t)e.m_ulSteamIDLobby;

    char buf[32] = {};
    snprintf(buf, sizeof(buf), "%llu", (unsigned long long)e.m_ulGameID);
    out.game_id = buf;

    return out;
}

class SteamMatchmaking_PersistentCallbacks
{
public:
    STEAM_CALLBACK(SteamMatchmaking_PersistentCallbacks, OnLobbyDataUpdate, LobbyDataUpdate_t);
    STEAM_CALLBACK(SteamMatchmaking_PersistentCallbacks, OnLobbyChatUpdate, LobbyChatUpdate_t);
    STEAM_CALLBACK(SteamMatchmaking_PersistentCallbacks, OnLobbyChatMsg, LobbyChatMsg_t);
    STEAM_CALLBACK(SteamMatchmaking_PersistentCallbacks, OnLobbyGameCreated, LobbyGameCreated_t);
    STEAM_CALLBACK(SteamMatchmaking_PersistentCallbacks, OnLobbyInvite, LobbyInvite_t);
};

void SteamMatchmaking_PersistentCallbacks::OnLobbyDataUpdate(LobbyDataUpdate_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    { std::lock_guard<std::mutex> lock(g_callbacks_mtx); cb = g_cb_lobby_data_update; }
    if (cb) cb.call(mm_fromNative(*p));
}

void SteamMatchmaking_PersistentCallbacks::OnLobbyChatUpdate(LobbyChatUpdate_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    { std::lock_guard<std::mutex> lock(g_callbacks_mtx); cb = g_cb_lobby_chat_update; }
    if (cb) cb.call(mm_fromNative(*p));
}

void SteamMatchmaking_PersistentCallbacks::OnLobbyChatMsg(LobbyChatMsg_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    { std::lock_guard<std::mutex> lock(g_callbacks_mtx); cb = g_cb_lobby_chat_msg; }
    if (cb) cb.call(mm_fromNative(*p));
}

void SteamMatchmaking_PersistentCallbacks::OnLobbyGameCreated(LobbyGameCreated_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    { std::lock_guard<std::mutex> lock(g_callbacks_mtx); cb = g_cb_lobby_game_created; }
    if (cb) cb.call(mm_fromNative(*p));
}

void SteamMatchmaking_PersistentCallbacks::OnLobbyInvite(LobbyInvite_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    { std::lock_guard<std::mutex> lock(g_callbacks_mtx); cb = g_cb_lobby_invite; }
    if (cb) cb.call(mm_fromNative(*p));
}

static SteamMatchmaking_PersistentCallbacks g_mm_callbacks;

void steam_matchmaking_set_callback_lobby_data_update(const gm::wire::GMFunction& cb) { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_data_update = cb; }
void steam_matchmaking_clear_callback_lobby_data_update() { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_data_update = nullptr; }

void steam_matchmaking_set_callback_lobby_chat_update(const gm::wire::GMFunction& cb) { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_chat_update = cb; }
void steam_matchmaking_clear_callback_lobby_chat_update() { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_chat_update = nullptr; }

void steam_matchmaking_set_callback_lobby_chat_msg(const gm::wire::GMFunction& cb) { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_chat_msg = cb; }
void steam_matchmaking_clear_callback_lobby_chat_msg() { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_chat_msg = nullptr; }

void steam_matchmaking_set_callback_lobby_game_created(const gm::wire::GMFunction& cb) { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_game_created = cb; }
void steam_matchmaking_clear_callback_lobby_game_created() { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_game_created = nullptr; }

void steam_matchmaking_set_callback_lobby_invite(const gm::wire::GMFunction& cb) { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_invite = cb; }
void steam_matchmaking_clear_callback_lobby_invite() { steam_clear_last_error(); std::lock_guard<std::mutex> lock(g_callbacks_mtx); g_cb_lobby_invite = nullptr; }

static inline gm_structs::SteamMatchmakingLobbyCreated mm_fromNative(const LobbyCreated_t& e)
{
    gm_structs::SteamMatchmakingLobbyCreated out{};
    out.result = (std::int32_t)e.m_eResult;
    out.lobby_id = (std::uint64_t)e.m_ulSteamIDLobby;
    return out;
}

static inline gm_structs::SteamMatchmakingLobbyEnter mm_fromNative(const LobbyEnter_t& e)
{
    gm_structs::SteamMatchmakingLobbyEnter out{};
    out.lobby_id = (std::uint64_t)e.m_ulSteamIDLobby;
    out.chat_permissions = (std::uint32_t)e.m_rgfChatPermissions;
    out.locked = (e.m_bLocked != 0);
    out.response = (std::uint32_t)e.m_EChatRoomEnterResponse;
    return out;
}

static inline gm_structs::SteamMatchmakingLobbyMatchList mm_fromNative(const LobbyMatchList_t& e)
{
    gm_structs::SteamMatchmakingLobbyMatchList out{};
    out.lobbies_count = (std::uint32_t)e.m_nLobbiesMatching;
    return out;
}

void steam_matchmaking_create_lobby(gm_enums::SteamMatchmakingLobbyType lobby_type, std::int32_t max_members,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;

    SteamAPICall_t call = mm->CreateLobby((ELobbyType)(int)lobby_type, (int)max_members);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamMatchmakingLobbyCreated, LobbyCreated_t>(callback.value(), &mm_fromNative);
        h->set(call);
    }
}

void steam_matchmaking_join_lobby(std::uint64_t lobby_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;

    SteamAPICall_t call = mm->JoinLobby(steam_id_from_u64(lobby_id));
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamMatchmakingLobbyEnter, LobbyEnter_t>(callback.value(), &mm_fromNative);
        h->set(call);
    }
}

void steam_matchmaking_request_lobby_list( const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;

    SteamAPICall_t call = mm->RequestLobbyList();
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamMatchmakingLobbyMatchList, LobbyMatchList_t>(callback.value(), &mm_fromNative);
        h->set(call);
    }
}

void steam_matchmaking_add_request_lobby_list_string_filter(std::string_view key, std::string_view value, gm_enums::SteamMatchmakingLobbyComparison comparison)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;
    std::string k(key), v(value);
    mm->AddRequestLobbyListStringFilter(k.c_str(), v.c_str(), (ELobbyComparison)(int)comparison);
}

void steam_matchmaking_add_request_lobby_list_numerical_filter(std::string_view key, std::int32_t value, gm_enums::SteamMatchmakingLobbyComparison comparison)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;
    std::string k(key);
    mm->AddRequestLobbyListNumericalFilter(k.c_str(), (int)value, (ELobbyComparison)(int)comparison);
}

void steam_matchmaking_add_request_lobby_list_near_value_filter(std::string_view key, std::int32_t value)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;
    std::string k(key);
    mm->AddRequestLobbyListNearValueFilter(k.c_str(), (int)value);
}

void steam_matchmaking_add_request_lobby_list_distance_filter(gm_enums::SteamMatchmakingLobbyDistanceFilter distance)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;
    mm->AddRequestLobbyListDistanceFilter((ELobbyDistanceFilter)(int)distance);
}

void steam_matchmaking_add_request_lobby_list_result_count_filter(std::int32_t max_results)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;
    mm->AddRequestLobbyListResultCountFilter((int)max_results);
}

std::uint64_t steam_matchmaking_get_lobby_by_index(std::int32_t index)
{
    STEAM_GUARD_RET(0);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return 0;
    CSteamID id = mm->GetLobbyByIndex((int)index);
    return (std::uint64_t)id.ConvertToUint64();
}

void steam_matchmaking_leave_lobby(std::uint64_t lobby_id)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;
    mm->LeaveLobby(steam_id_from_u64(lobby_id));
}

bool steam_matchmaking_set_lobby_owner(std::uint64_t lobby_id, std::uint64_t new_owner_id)
{
    STEAM_GUARD_RET(false);

    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;

    return mm->SetLobbyOwner(
        steam_id_from_u64(lobby_id),
        steam_id_from_u64(new_owner_id)
    );
}

std::uint64_t steam_matchmaking_get_lobby_owner(std::uint64_t lobby_id)
{
    STEAM_GUARD_RET(0);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return 0;
    CSteamID id = mm->GetLobbyOwner(steam_id_from_u64(lobby_id));
    return (std::uint64_t)id.ConvertToUint64();
}

std::int32_t steam_matchmaking_get_num_lobby_members(std::uint64_t lobby_id)
{
    STEAM_GUARD_RET(0);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return 0;
    return (std::int32_t)mm->GetNumLobbyMembers(steam_id_from_u64(lobby_id));
}

std::uint64_t steam_matchmaking_get_lobby_member_by_index(std::uint64_t lobby_id, std::int32_t member_index)
{
    STEAM_GUARD_RET(0);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return 0;
    CSteamID id = mm->GetLobbyMemberByIndex(steam_id_from_u64(lobby_id), (int)member_index);
    return (std::uint64_t)id.ConvertToUint64();
}

bool steam_matchmaking_set_lobby_data(std::uint64_t lobby_id, std::string_view key, std::string_view value)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;
    std::string k(key), v(value);
    return mm->SetLobbyData(steam_id_from_u64(lobby_id), k.c_str(), v.c_str());
}

std::string steam_matchmaking_get_lobby_data(std::uint64_t lobby_id, std::string_view key)
{
    STEAM_GUARD_RET("");
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return "";
    std::string k(key);
    const char* p = mm->GetLobbyData(steam_id_from_u64(lobby_id), k.c_str());
    return p ? std::string(p) : "";
}

bool steam_matchmaking_delete_lobby_data(std::uint64_t lobby_id, std::string_view key)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;
    std::string k(key);
    return mm->DeleteLobbyData(steam_id_from_u64(lobby_id), k.c_str());
}

std::int32_t steam_matchmaking_get_lobby_data_count(std::uint64_t lobby_id)
{
    STEAM_GUARD_RET(0);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return 0;
    return (std::int32_t)mm->GetLobbyDataCount(steam_id_from_u64(lobby_id));
}

bool steam_matchmaking_get_lobby_data_by_index(std::uint64_t lobby_id,
                                               std::int32_t index,
                                               gm::wire::GMBuffer key_out,
                                               std::int32_t key_max,
                                               gm::wire::GMBuffer val_out,
                                               std::int32_t val_max)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;
    if (key_max <= 0 || val_max <= 0) return false;

    std::vector<char> k((size_t)key_max);
    std::vector<char> v((size_t)val_max);

    bool ok = mm->GetLobbyDataByIndex(steam_id_from_u64(lobby_id), (int)index, k.data(), key_max, v.data(), val_max);
    if (!ok) return false;

    auto kw = key_out.getWriter();
    kw.writeBytes(k.data(), (int)strnlen(k.data(), (size_t)key_max));
    auto vw = val_out.getWriter();
    vw.writeBytes(v.data(), (int)strnlen(v.data(), (size_t)val_max));

    return true;
}

void steam_matchmaking_set_lobby_member_data(std::uint64_t lobby_id, std::string_view key, std::string_view value)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;
    std::string k(key), v(value);
    mm->SetLobbyMemberData(steam_id_from_u64(lobby_id), k.c_str(), v.c_str());
}

std::string steam_matchmaking_get_lobby_member_data(std::uint64_t lobby_id, std::uint64_t member_id, std::string_view key)
{
    STEAM_GUARD_RET("");
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return "";
    std::string k(key);
    const char* p = mm->GetLobbyMemberData(steam_id_from_u64(lobby_id), steam_id_from_u64(member_id), k.c_str());
    return p ? std::string(p) : "";
}

bool steam_matchmaking_send_lobby_chat_msg(std::uint64_t lobby_id, gm::wire::GMBuffer msg, std::int32_t bytes)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;
    if (bytes <= 0) return false;
    return mm->SendLobbyChatMsg(steam_id_from_u64(lobby_id), (const void*)msg.data(), bytes);
}

gm_structs::SteamMatchmakingLobbyChatEntry steam_matchmaking_get_lobby_chat_entry(std::uint64_t lobby_id, std::int32_t chat_id, gm::wire::GMBuffer out_buffer, std::int32_t out_max_bytes)
{
    gm_structs::SteamMatchmakingLobbyChatEntry out{};
    out.ok = false;
    out.bytes = 0;
    out.sender_id = 0;
    out.entry_type = 0;

    STEAM_GUARD_RET(out);

    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return out;
    if (out_max_bytes <= 0) return out;

    CSteamID sender;
    EChatEntryType type = k_EChatEntryTypeInvalid;

    std::vector<std::uint8_t> tmp((size_t)out_max_bytes);
    int r = mm->GetLobbyChatEntry(steam_id_from_u64(lobby_id), (int)chat_id, &sender, tmp.data(), out_max_bytes, &type);
    if (r <= 0) return out;

    auto w = out_buffer.getWriter();
    w.writeBytes((const char*)tmp.data(), r);

    out.ok = true;
    out.bytes = (std::uint32_t)r;
    out.sender_id = (std::uint64_t)sender.ConvertToUint64();
    out.entry_type = (std::int32_t)type;
    return out;
}

void steam_matchmaking_add_request_lobby_list_filter_slots_available(std::int32_t slots_available)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;

    mm->AddRequestLobbyListFilterSlotsAvailable((int)slots_available);
}


bool steam_matchmaking_request_lobby_data(std::uint64_t steam_id_lobby)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;
    return mm->RequestLobbyData(CSteamID(steam_id_lobby));
}

bool steam_matchmaking_set_lobby_joinable(std::uint64_t steam_id_lobby, bool joinable)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;
    return mm->SetLobbyJoinable(CSteamID(steam_id_lobby), joinable);
}

bool steam_matchmaking_invite_user_to_lobby(std::uint64_t steam_id_lobby, std::uint64_t steam_id_invitee)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;
    return mm->InviteUserToLobby(CSteamID(steam_id_lobby), CSteamID(steam_id_invitee));
}

void steam_matchmaking_set_lobby_game_server(std::uint64_t steam_id_lobby, std::uint32_t ip, std::uint32_t port, std::uint64_t steam_id_gs)
{
    STEAM_GUARD();
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return;

    mm->SetLobbyGameServer(CSteamID(steam_id_lobby), (uint32)ip, (uint16)port, CSteamID(steam_id_gs));
}

bool steam_matchmaking_set_linked_lobby(std::uint64_t steam_id_lobby, std::uint64_t steam_id_lobby_dependent)
{
    STEAM_GUARD_RET(false);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return false;

    return mm->SetLinkedLobby(CSteamID(steam_id_lobby), CSteamID(steam_id_lobby_dependent));
}


gm_structs::SteamMatchmakingLobbyGameServer steam_matchmaking_get_lobby_game_server(std::uint64_t steam_id_lobby)
{
    gm_structs::SteamMatchmakingLobbyGameServer out{};
    out.ok = false;
    out.ip = 0;
    out.port = 0;
    out.steam_id_gs = 0;

    STEAM_GUARD_RET(out);
    ISteamMatchmaking* mm = steam_matchmaking_iface();
    if (!mm) return out;

    uint32 ip = 0;
    uint16 port = 0;
    CSteamID gs;
    if (!mm->GetLobbyGameServer(CSteamID(steam_id_lobby), &ip, &port, &gs))
        return out;

    out.ok = true;
    out.ip = (std::uint32_t)ip;
    out.port = (std::uint16_t)port;
    out.steam_id_gs = (std::uint64_t)gs.ConvertToUint64();
    return out;
}

