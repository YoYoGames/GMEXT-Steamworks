// gm_steam_userstats.cpp
//
// Steamworks module: userstats (ISteamUserStats)

#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteamuserstats.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <algorithm>
#include <mutex>

using namespace gm_structs;
using namespace gm_enums;

static inline ISteamUserStats* steam_userstats_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam UserStats: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamUserStats* s = SteamUserStats();
    if (!s)
        steam_set_last_error("Steam UserStats: SteamUserStats() returned NULL.");

    return s;
}

static inline std::uint64_t call_to_u64(SteamAPICall_t c) { return (std::uint64_t)c; }
static inline SteamAPICall_t u64_to_call(std::uint64_t v) { return (SteamAPICall_t)v; }

static inline SteamLeaderboard_t u64_to_leaderboard(std::uint64_t v) { return (SteamLeaderboard_t)v; }
static inline std::uint64_t leaderboard_to_u64(SteamLeaderboard_t v) { return (std::uint64_t)v; }

static inline SteamLeaderboardEntries_t u64_to_leaderboard_entries(std::uint64_t v)
{
    return (SteamLeaderboardEntries_t)v;
}

static inline CSteamID steamid_from_u64(std::uint64_t v) { return steam_id_from_u64(v); }

SteamUserStatsStatInt steam_userstats_get_stat_int(std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsStatInt out {};
    out.ok = false;
    out.data = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);
    int32 v = 0;
    const bool ok = s->GetStat(name.c_str(), &v);
    out.ok = ok;
    out.data = v;
    return out;
}

SteamUserStatsStatFloat steam_userstats_get_stat_float(std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsStatFloat out {};
    out.ok = false;
    out.data = 0.0f;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);
    float v = 0.0f;
    const bool ok = s->GetStat(name.c_str(), &v);
    out.ok = ok;
    out.data = v;
    return out;
}

bool steam_userstats_set_stat_int(std::string_view stat_name, std::int32_t data)
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    std::string name(stat_name);
    return s->SetStat(name.c_str(), (int32)data);
}

bool steam_userstats_set_stat_float(std::string_view stat_name, float data)
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    std::string name(stat_name);
    return s->SetStat(name.c_str(), data);
}

bool steam_userstats_update_avg_rate_stat(std::string_view stat_name, float count_this_session, double session_length)
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    std::string name(stat_name);
    return s->UpdateAvgRateStat(name.c_str(), count_this_session, (double)session_length);
}

SteamUserStatsUserAchievement steam_userstats_get_achievement(std::string_view achievement_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsUserAchievement out {};
    out.ok = false;
    out.achieved = false;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(achievement_name);
    bool achieved = false;
    const bool ok = s->GetAchievement(name.c_str(), &achieved);

    out.ok = ok;
    out.achieved = achieved;
    return out;
}

bool steam_userstats_set_achievement(std::string_view achievement_name)
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    std::string name(achievement_name);
    return s->SetAchievement(name.c_str());
}

bool steam_userstats_clear_achievement(std::string_view achievement_name)
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    std::string name(achievement_name);
    return s->ClearAchievement(name.c_str());
}

SteamUserStatsAchievementAndUnlockTime steam_userstats_achievement_and_unlock_time(std::string_view achievement_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsAchievementAndUnlockTime out {};
    out.achieved = false;
    out.unlock_time = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(achievement_name);
    bool achieved = false;
    uint32 unlock = 0;

    const bool ok = s->GetAchievementAndUnlockTime(name.c_str(), &achieved, &unlock);
    (void)ok;

    out.achieved = achieved;
    out.unlock_time = unlock;
    return out;
}

bool steam_userstats_store_stats()
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    return s->StoreStats();
}

std::int32_t steam_userstats_achievement_icon(std::string_view achievement_name)
{
    STEAM_GUARD_RET(0);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return 0;

    std::string name(achievement_name);
    return (std::int32_t)s->GetAchievementIcon(name.c_str());
}

std::string steam_userstats_achievement_display_attribute(std::string_view achievement_name, std::string_view key)
{
    STEAM_GUARD_RET("");
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return "";

    std::string a(achievement_name);
    std::string k(key);
    const char* v = s->GetAchievementDisplayAttribute(a.c_str(), k.c_str());
    return v ? std::string(v) : std::string();
}

bool steam_userstats_indicate_achievement_progress(
    std::string_view achievement_name, std::uint32_t cur_progress, std::uint32_t max_progress
)
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    std::string name(achievement_name);
    return s->IndicateAchievementProgress(name.c_str(), cur_progress, max_progress);
}

std::uint32_t steam_userstats_num_achievements()
{
    STEAM_GUARD_RET(0);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return 0;

    return (std::uint32_t)s->GetNumAchievements();
}

std::string steam_userstats_achievement_name(std::uint32_t index)
{
    STEAM_GUARD_RET("");
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return "";

    const char* n = s->GetAchievementName(index);
    return n ? std::string(n) : std::string();
}

SteamUserStatsStatInt steam_userstats_user_stat_int(std::uint64_t steam_id_user, std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsStatInt out {};
    out.ok = false;
    out.data = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);
    int32 v = 0;
    const bool ok = s->GetUserStat(steamid_from_u64(steam_id_user), name.c_str(), &v);

    out.ok = ok;
    out.data = v;
    return out;
}

SteamUserStatsStatFloat steam_userstats_user_stat_float(std::uint64_t steam_id_user, std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsStatFloat out {};
    out.ok = false;
    out.data = 0.0f;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);
    float v = 0.0f;
    const bool ok = s->GetUserStat(steamid_from_u64(steam_id_user), name.c_str(), &v);

    out.ok = ok;
    out.data = v;
    return out;
}

SteamUserStatsUserAchievement
steam_userstats_user_achievement(std::uint64_t steam_id_user, std::string_view achievement_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsUserAchievement out {};
    out.ok = false;
    out.achieved = false;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(achievement_name);
    bool achieved = false;
    const bool ok = s->GetUserAchievement(steamid_from_u64(steam_id_user), name.c_str(), &achieved);

    out.ok = ok;
    out.achieved = achieved;
    return out;
}

SteamUserStatsAchievementAndUnlockTime
steam_userstats_user_achievement_and_unlock_time(std::uint64_t steam_id_user, std::string_view achievement_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsAchievementAndUnlockTime out {};
    out.achieved = false;
    out.unlock_time = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(achievement_name);
    bool achieved = false;
    uint32 unlock = 0;
    const bool ok
        = s->GetUserAchievementAndUnlockTime(steamid_from_u64(steam_id_user), name.c_str(), &achieved, &unlock);
    (void)ok;

    out.achieved = achieved;
    out.unlock_time = unlock;
    return out;
}

bool steam_userstats_reset_all_stats(bool achievements_too)
{
    STEAM_GUARD_RET(false);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return false;

    return s->ResetAllStats(achievements_too);
}

std::string steam_userstats_leaderboard_name(std::uint64_t leaderboard_handle)
{
    STEAM_GUARD_RET("");
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return "";

    const char* n = s->GetLeaderboardName(u64_to_leaderboard(leaderboard_handle));
    return n ? std::string(n) : std::string();
}

std::int32_t steam_userstats_leaderboard_entry_count(std::uint64_t leaderboard_handle)
{
    STEAM_GUARD_RET(0);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return 0;

    return (std::int32_t)s->GetLeaderboardEntryCount(u64_to_leaderboard(leaderboard_handle));
}

gm_enums::SteamLeaderboardSortMethod steam_userstats_leaderboard_sort_method(std::uint64_t leaderboard_handle)
{
    STEAM_GUARD_RET(gm_enums::SteamLeaderboardSortMethod::None);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return gm_enums::SteamLeaderboardSortMethod::None;

    return (gm_enums::SteamLeaderboardSortMethod)(int)s->GetLeaderboardSortMethod(
        u64_to_leaderboard(leaderboard_handle)
    );
}

gm_enums::SteamLeaderboardDisplayType steam_userstats_leaderboard_display_type(std::uint64_t leaderboard_handle)
{
    STEAM_GUARD_RET(gm_enums::SteamLeaderboardDisplayType::None);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return gm_enums::SteamLeaderboardDisplayType::None;

    return (gm_enums::SteamLeaderboardDisplayType)(int)s->GetLeaderboardDisplayType(
        u64_to_leaderboard(leaderboard_handle)
    );
}

SteamUserStatsDownloadedLeaderboardEntry steam_userstats_downloaded_leaderboard_entry(
    std::uint64_t leaderboard_entries_handle,
    std::int32_t entry_index,
    gm::wire::GMBuffer buffer,
    std::uint32_t buffer_size
)
{
    STEAM_GUARD_RET({});

    SteamUserStatsDownloadedLeaderboardEntry out {};
    out.ok = false;
    out.steam_id_user = 0;
    out.global_rank = 0;
    out.score = 0;
    out.details_count = 0;
    out.details_written = 0;
    out.bytes_written   = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    const std::uint32_t max_ints_u32 = buffer_size / static_cast<std::uint32_t>(sizeof(std::int32_t));

    const int details_max = (max_ints_u32 > static_cast<std::uint32_t>(std::numeric_limits<int>::max()))
        ? std::numeric_limits<int>::max()
        : static_cast<int>(max_ints_u32);

    LeaderboardEntry_t entry {};
    std::vector<std::int32_t> details_vec;
    if (details_max > 0)
        details_vec.resize(static_cast<size_t>(details_max));

    const bool ok = s->GetDownloadedLeaderboardEntry(
        u64_to_leaderboard_entries(leaderboard_entries_handle),
        entry_index,
        &entry,
        (details_max > 0) ? details_vec.data() : nullptr,
        details_max
    );

    out.ok = ok;
    if (!ok)
        return out;

    out.steam_id_user = static_cast<std::uint64_t>(entry.m_steamIDUser.ConvertToUint64());
    out.global_rank   = static_cast<std::int32_t>(entry.m_nGlobalRank);
    out.score        = static_cast<std::int32_t>(entry.m_nScore);

    const int n = (details_max > 0)
        ? std::min<int>(static_cast<int>(entry.m_cDetails), details_max)
        : 0;

    if (n > 0)
    {
        const int bytes = n * static_cast<int>(sizeof(std::int32_t));
        auto w = buffer.getWriter();
        w.writeBytes(reinterpret_cast<const char*>(details_vec.data()), bytes);

        out.details_written = static_cast<std::int32_t>(n);
        out.bytes_written   = static_cast<std::int32_t>(bytes);
    }

    return out;
}

SteamUserStatsMostAchievedAchievementInfo steam_userstats_most_achieved_achievement_info()
{
    STEAM_GUARD_RET({});

    SteamUserStatsMostAchievedAchievementInfo out {};
    out.ok = false;
    out.name = "";
    out.percent = 0.0f;
    out.achieved = false;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    char nameBuf[256] = {};
    float percent = 0.0f;
    bool achieved = false;

    const bool ok = s->GetMostAchievedAchievementInfo(nameBuf, (uint32)sizeof(nameBuf), &percent, &achieved);

    out.ok = ok;
    if (ok) {
        out.name = nameBuf;
        out.percent = percent;
        out.achieved = achieved;
    }
    return out;
}

SteamUserStatsMostAchievedAchievementInfo
steam_userstats_next_most_achieved_achievement_info(std::int32_t iterator_prev)
{
    STEAM_GUARD_RET({});

    SteamUserStatsMostAchievedAchievementInfo out {};
    out.ok = false;
    out.name = "";
    out.percent = 0.0f;
    out.achieved = false;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    char nameBuf[256] = {};
    float percent = 0.0f;
    bool achieved = false;

    const bool ok
        = s->GetNextMostAchievedAchievementInfo(iterator_prev, nameBuf, (uint32)sizeof(nameBuf), &percent, &achieved);

    out.ok = ok;
    if (ok) {
        out.name = nameBuf;
        out.percent = percent;
        out.achieved = achieved;
    }
    return out;
}

float steam_userstats_achievement_achieved_percent(std::string_view achievement_name)
{
    STEAM_GUARD_RET(0.0f);
    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return 0.0f;

    std::string name(achievement_name);
    float p = 0.0f;
    const bool ok = s->GetAchievementAchievedPercent(name.c_str(), &p);
    return ok ? p : 0.0f;
}

SteamUserStatsGlobalStatInt64 steam_userstats_global_stat_int64(std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsGlobalStatInt64 out {};
    out.ok = false;
    out.data = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);
    int64 v = 0;
    const bool ok = s->GetGlobalStat(name.c_str(), &v);

    out.ok = ok;
    out.data = v;
    return out;
}

SteamUserStatsGlobalStatDouble steam_userstats_global_stat_double(std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsGlobalStatDouble out {};
    out.ok = false;
    out.data = 0.0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);
    double v = 0.0;
    const bool ok = s->GetGlobalStat(name.c_str(), &v);

    out.ok = ok;
    out.data = v;
    return out;
}

SteamUserStatsGlobalStatHistoryInt64 steam_userstats_global_stat_history_int64(std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsGlobalStatHistoryInt64 out {};
    out.ok = false;
    out.data = {};

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);

    // Spec has no max; choose a sane cap.
    const int kMax = 1024;
    std::vector<int64> tmp((size_t)kMax);

    const int n = s->GetGlobalStatHistory(name.c_str(), tmp.data(), kMax);
    out.ok = (n > 0);

    if (n > 0) {
        out.data.clear();
        out.data.reserve((size_t)n);
        for (int i = 0; i < n; ++i)
            out.data.push_back((long long)tmp[(size_t)i]);
    }

    return out;
}

SteamUserStatsGlobalStatHistoryDouble steam_userstats_global_stat_history_double(std::string_view stat_name)
{
    STEAM_GUARD_RET({});

    SteamUserStatsGlobalStatHistoryDouble out {};
    out.ok = false;
    out.data = {};

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    std::string name(stat_name);

    const int kMax = 1024;
    std::vector<double> tmp((size_t)kMax);

    const int n = s->GetGlobalStatHistory(name.c_str(), tmp.data(), kMax);
    out.ok = (n > 0);

    if (n > 0) {
        out.data.clear();
        out.data.reserve((size_t)n);
        for (int i = 0; i < n; ++i)
            out.data.push_back(tmp[(size_t)i]);
    }

    return out;
}

gm_structs::SteamUserStatsIntMinMax steam_userstats_achievement_progress_limits_int(std::string_view achievement_name, std::uint32_t cur_progress, std::uint32_t max_progress)
{
    gm_structs::SteamUserStatsIntMinMax out {};
    STEAM_GUARD_RET(out);
    out.ok = false;
    out.max = 0;
    out.min = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    (void)cur_progress;
    (void)max_progress;

    std::string name(achievement_name);
    int32 minV = 0, maxV = 0;
    bool ok = s->GetAchievementProgressLimits(name.c_str(), &minV, &maxV);
    out.ok = ok;
    out.max = maxV;
    out.min = minV;
    return out;
}

gm_structs::SteamUserStatsFloatMinMax steam_userstats_achievement_progress_limits_float(std::string_view achievement_name, float cur_progress, float max_progress)
{
    gm_structs::SteamUserStatsFloatMinMax out {};
    STEAM_GUARD_RET(out);
    out.ok = false;
    out.max = 0;
    out.min = 0;

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return out;

    (void)cur_progress;
    (void)max_progress;

    std::string name(achievement_name);
    float minV = 0.0f, maxV = 0.0f;
    bool ok = s->GetAchievementProgressLimits(name.c_str(), &minV, &maxV);
    out.ok = ok;
    out.max = maxV;
    out.min = minV;

    return out;
}


static inline gm_structs::SteamUserStatsRequestUserStatsResult userstats_fromNative(const UserStatsReceived_t& e)
{
    gm_structs::SteamUserStatsRequestUserStatsResult out{};
    out.game_id = (std::uint64_t)e.m_nGameID;
    out.steam_id_user = (std::uint64_t)e.m_steamIDUser.ConvertToUint64();
    out.result = (int32)e.m_eResult;
    return out;
}

static inline gm_structs::SteamUserStatsLeaderboardFindResult userstats_fromNative(const LeaderboardFindResult_t& e)
{
    gm_structs::SteamUserStatsLeaderboardFindResult out{};
    out.leaderboard_handle = (std::uint64_t)e.m_hSteamLeaderboard;
    out.leaderboard_found = (e.m_bLeaderboardFound != 0);
    return out;
}

static inline gm_structs::SteamUserStatsScoresDownloadedResult userstats_fromNative(const LeaderboardScoresDownloaded_t& e)
{
    gm_structs::SteamUserStatsScoresDownloadedResult out{};
    out.leaderboard_handle = (std::uint64_t)e.m_hSteamLeaderboard;
    out.entries_handle = (std::uint64_t)e.m_hSteamLeaderboardEntries;
    out.entry_count = (std::uint32_t)e.m_cEntryCount;
    return out;
}

static inline gm_structs::SteamUserStatsScoreUploadedResult userstats_fromNative(const LeaderboardScoreUploaded_t& e)
{
    gm_structs::SteamUserStatsScoreUploadedResult out{};
    out.success = (e.m_bSuccess != 0);
    out.leaderboard_handle = (std::uint64_t)e.m_hSteamLeaderboard;
    out.score = (int32)e.m_nScore;
    out.score_changed = (e.m_bScoreChanged != 0);
    out.global_rank_new = (int32)e.m_nGlobalRankNew;
    out.global_rank_previous = (int32)e.m_nGlobalRankPrevious;
    return out;
}


static inline gm_structs::SteamUserStatsAttachLeaderboardUgcResult userstats_fromNative(const LeaderboardUGCSet_t& e)
{
    gm_structs::SteamUserStatsAttachLeaderboardUgcResult out{};
    out.ok = (e.m_eResult == k_EResultOK);
    out.result = (int32)e.m_eResult;
    out.leaderboard_handle = (std::uint64_t)e.m_hSteamLeaderboard;
    return out;
}

static inline gm_structs::SteamUserStatsNumberOfCurrentPlayersResult userstats_fromNative(const NumberOfCurrentPlayers_t& e)
{
    gm_structs::SteamUserStatsNumberOfCurrentPlayersResult out{};
    out.success = (e.m_bSuccess != 0);
    out.players = (int32)e.m_cPlayers;
    return out;
}

static inline gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult userstats_fromNative(const GlobalAchievementPercentagesReady_t& e)
{
    gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult out{};
    out.game_id = (std::uint64_t)e.m_nGameID;
    out.result = (int32)e.m_eResult;
    return out;
}

static inline gm_structs::SteamUserStatsGlobalStatsReceivedResult userstats_fromNative(const GlobalStatsReceived_t& e)
{
    gm_structs::SteamUserStatsGlobalStatsReceivedResult out{};
    out.game_id = (std::uint64_t)e.m_nGameID;
    out.result = (int32)e.m_eResult;
    return out;
}

void steam_userstats_request_user_stats(std::uint64_t steam_id_user,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    SteamAPICall_t call = s->RequestUserStats(steam_id_from_u64(steam_id_user));
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsRequestUserStatsResult, UserStatsReceived_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

void steam_userstats_find_or_create_leaderboard(std::string_view leaderboard_name,
                                                gm_enums::SteamLeaderboardSortMethod sort_method,
                                                gm_enums::SteamLeaderboardDisplayType display_type,
                                                 const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    std::string name(leaderboard_name);
    SteamAPICall_t call = s->FindOrCreateLeaderboard(name.c_str(),
                                                     (ELeaderboardSortMethod)(int)sort_method,
                                                     (ELeaderboardDisplayType)(int)display_type);

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsLeaderboardFindResult, LeaderboardFindResult_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

void steam_userstats_find_leaderboard(std::string_view leaderboard_name,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    std::string name(leaderboard_name);
    SteamAPICall_t call = s->FindLeaderboard(name.c_str());

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsLeaderboardFindResult, LeaderboardFindResult_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

void steam_userstats_download_leaderboard_entries(std::uint64_t leaderboard_handle,
                                                  gm_enums::SteamLeaderboardDataRequest request,
                                                  std::int32_t range_start,
                                                  std::int32_t range_end,
                                                   const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    SteamAPICall_t call = s->DownloadLeaderboardEntries(
        (SteamLeaderboard_t)leaderboard_handle,
        (ELeaderboardDataRequest)(int)request,
        range_start,
        range_end
    );

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsScoresDownloadedResult, LeaderboardScoresDownloaded_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

void steam_userstats_download_leaderboard_entries_for_users(std::uint64_t leaderboard_handle,
                                                            const std::vector<std::uint64_t>& users,
                                                             const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    if (users.empty()) return;

    std::vector<CSteamID> ids;
    ids.reserve(users.size());
    for (auto u : users) ids.push_back(steam_id_from_u64(u));

    SteamAPICall_t call = s->DownloadLeaderboardEntriesForUsers(
        (SteamLeaderboard_t)leaderboard_handle,
        ids.data(),
        (int)ids.size()
    );

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsScoresDownloadedResult, LeaderboardScoresDownloaded_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

void steam_userstats_upload_leaderboard_score(
    std::uint64_t leaderboard_handle,
    gm_enums::SteamLeaderboardUploadScoreMethod method,
    std::int32_t score,
    gm::wire::GMBuffer score_details_buffer,
    std::int32_t score_details_count,
     const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s)
        return;

    const int* pDetails = nullptr;

    if (score_details_count > 0)
    {
        pDetails = reinterpret_cast<const int*>(
            score_details_buffer.data());
    }

    SteamAPICall_t call = s->UploadLeaderboardScore(
        (SteamLeaderboard_t)leaderboard_handle,
        (ELeaderboardUploadScoreMethod)(int)method,
        (int32)score,
        pDetails,
        (int)score_details_count
    );

    if(callback)
    {
        auto* h = new steam_async::CallResult<
            gm_structs::SteamUserStatsScoreUploadedResult,
            LeaderboardScoreUploaded_t
        >(callback.value(), &userstats_fromNative);

        h->set(call);
    }
}

void steam_userstats_attach_leaderboard_ugc(std::uint64_t leaderboard_handle, std::uint64_t ugc_handle,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    SteamAPICall_t call = s->AttachLeaderboardUGC(
        (SteamLeaderboard_t)leaderboard_handle,
        (UGCHandle_t)ugc_handle
    );

    if(callback)
    {
        auto* h = new steam_async::CallResult<
            gm_structs::SteamUserStatsAttachLeaderboardUgcResult,
            LeaderboardUGCSet_t
        >(callback.value(), &userstats_fromNative);

        h->set(call);
    }
}


void steam_userstats_number_of_current_players( const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    SteamAPICall_t call = s->GetNumberOfCurrentPlayers();
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsNumberOfCurrentPlayersResult, NumberOfCurrentPlayers_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

void steam_userstats_request_global_achievement_percentages( const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    SteamAPICall_t call = s->RequestGlobalAchievementPercentages();
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsGlobalAchievementPercentagesReadyResult, GlobalAchievementPercentagesReady_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

void steam_userstats_request_global_stats(std::int32_t history_days,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUserStats* s = steam_userstats_iface();
    if (!s) return;

    SteamAPICall_t call = s->RequestGlobalStats(history_days);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUserStatsGlobalStatsReceivedResult, GlobalStatsReceived_t>(callback.value(), &userstats_fromNative);
        h->set(call);
    }
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_user_stats_received = nullptr;
static gm::wire::GMFunction g_cb_user_stats_stored = nullptr;
static gm::wire::GMFunction g_cb_user_achievement_stored = nullptr;

static inline gm_structs::SteamUserStatsUserStatsReceived userstats_persist_fromNative_received(const UserStatsReceived_t& e)
{
    gm_structs::SteamUserStatsUserStatsReceived out{};
    out.game_id = (std::uint64_t)e.m_nGameID;
    out.steam_id_user = (std::uint64_t)e.m_steamIDUser.ConvertToUint64();
    out.result = (int32)e.m_eResult;
    return out;
}

static inline gm_structs::SteamUserStatsUserStatsStored userstats_persist_fromNative_stored(const UserStatsStored_t& e)
{
    gm_structs::SteamUserStatsUserStatsStored out{};
    out.game_id = (std::uint64_t)e.m_nGameID;
    out.result = (int32)e.m_eResult;
    return out;
}

static inline gm_structs::SteamUserStatsUserAchievementStored userstats_persist_fromNative_achievement(const UserAchievementStored_t& e)
{
    gm_structs::SteamUserStatsUserAchievementStored out{};
    out.game_id = (std::uint64_t)e.m_nGameID;
    out.achievement_name = e.m_rgchAchievementName;
    out.cur_progress = (int32)e.m_nCurProgress;
    out.max_progress = (int32)e.m_nMaxProgress;
    return out;
}

class SteamUserStats_PersistentCallbacks
{
public:
    STEAM_CALLBACK(SteamUserStats_PersistentCallbacks, OnUserStatsReceived, UserStatsReceived_t);
    STEAM_CALLBACK(SteamUserStats_PersistentCallbacks, OnUserStatsStored, UserStatsStored_t);
    STEAM_CALLBACK(SteamUserStats_PersistentCallbacks, OnUserAchievementStored, UserAchievementStored_t);
};

void SteamUserStats_PersistentCallbacks::OnUserStatsReceived(UserStatsReceived_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_stats_received;
    }
    if (cb)
        cb.call(userstats_persist_fromNative_received(*p));
}

void SteamUserStats_PersistentCallbacks::OnUserStatsStored(UserStatsStored_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_stats_stored;
    }
    if (cb)
        cb.call(userstats_persist_fromNative_stored(*p));
}

void SteamUserStats_PersistentCallbacks::OnUserAchievementStored(UserAchievementStored_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_achievement_stored;
    }
    if (cb)
        cb.call(userstats_persist_fromNative_achievement(*p));
}

static SteamUserStats_PersistentCallbacks g_userstats_persistent_callbacks;

void steam_userstats_set_callback_user_stats_received( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_stats_received = callback;
}

void steam_userstats_clear_callback_user_stats_received()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_stats_received = nullptr;
}

void steam_userstats_set_callback_user_stats_stored( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_stats_stored = callback;
}

void steam_userstats_clear_callback_user_stats_stored()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_stats_stored = nullptr;
}

void steam_userstats_set_callback_user_achievement_stored( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_achievement_stored = callback;
}

void steam_userstats_clear_callback_user_achievement_stored()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_achievement_stored = nullptr;
}
