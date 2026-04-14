#pragma once

#include <cstdint>
#include <string>
#include <string_view>
#include <iostream>

#include "native/SteamworksInternal_native.h"

inline bool steam_guard_failed();

// Pass a special token for "void return"
#define STEAM_GUARD()                                                                                                  \
    do {                                                                                                               \
        if (steam_guard_failed())                                                                                      \
            return;                                                                                                    \
    } while (0)

#define STEAM_GUARD_RET(expr)                                                                                          \
    do {                                                                                                               \
        if (steam_guard_failed())                                                                                      \
            return expr;                                                                                               \
    } while (0)

// Steamworks headers used across modules.
// You can include only steam_api.h here, and include other headers per-module,
// but it is usually fine to keep only steam_api.h in the common header.
#include <steam/steam_api.h>

// ------------------------------------------------------------
// Shared error facility (used by all modules)
// ------------------------------------------------------------

// Set last error message (overwrite).
void steam_set_last_error(std::string_view msg);

void steam_clear_last_error();

// Public API exposed to GML (matches your spec binding).
// If your spec is steam_api_last_error() keep this name.
// If later you move to steam_last_error(), rename here and in spec.
std::string steam_api_last_error();

// ------------------------------------------------------------
// Shared initialization state (optional but useful across modules)
// ------------------------------------------------------------

// True if SteamAPI_Init succeeded and not shutdown yet.
bool steam_api_is_initialized();

// Internal: set init flag (used by steam_api_init/shutdown).
void steam_set_initialized(bool v);

// ------------------------------------------------------------
// Small shared conversion helpers (optional)
// ------------------------------------------------------------

inline bool steam_guard_failed()
{
    steam_clear_last_error();
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam API not initialized");
        return true;
    }
    return false;
}

static inline uint64_t steam_u64_from_uint64(std::uint64_t v) { return v; }
static inline std::uint64_t steam_uint64_from_u64(std::uint64_t v) { return v; }

extern std::atomic<bool> g_steam_initialized;

static inline CSteamID steam_id_from_u64(std::uint64_t v) { return CSteamID((uint64)v); }

static inline std::uint64_t steam_u64_from_steam_id(const CSteamID& id) { return (std::uint64_t)id.ConvertToUint64(); }

static inline std::uint64_t steam_u64_from_api_call(SteamAPICall_t call) { return (std::uint64_t)call; }

static inline bool steam_u32_to_u16_checked(std::uint32_t v, std::uint16_t& out)
{
    if (v > 65535u)
        return false;
    out = (std::uint16_t)v;
    return true;
}

static inline const char* steam_empty_string_as_null(std::string_view s, std::string& tmp)
{
    if (s.empty())
        return nullptr;
    tmp.assign(s.data(), s.size());
    return tmp.c_str();
}

static inline gm_structs::SteamId steam_make_steam_id(const CSteamID& sid)
{
    gm_structs::SteamId out {};

    const std::uint64_t id64 = (std::uint64_t)sid.ConvertToUint64();
    out.id64 = id64;

    // Core
    out.account_id = (std::uint32_t)sid.GetAccountID();
    out.account_instance = (std::uint32_t)sid.GetUnAccountInstance();
    out.universe = (gm_enums::SteamApiUniverse)(int)sid.GetEUniverse();
    out.account_type = (gm_enums::SteamApiAccountType)(int)sid.GetEAccountType();

    // Predicates
    out.is_valid = sid.IsValid();
    out.is_lobby = sid.IsLobby();
    //out.is_valid_external = sid.BValidExternalSteamID();//Internal Steam debug function....

    out.is_individual = sid.BIndividualAccount();
    out.is_game_server = sid.BGameServerAccount();
    out.is_anon_game_server = sid.BAnonGameServerAccount();
    out.is_anon_user = sid.BAnonUserAccount();
    out.is_content_server = sid.BContentServerAccount();
    out.is_clan = sid.BClanAccount();
    out.is_chat = sid.BChatAccount();

    return out;
}
