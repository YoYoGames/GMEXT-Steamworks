// gm_steam_parties.cpp
//
// Steamworks module: parties (ISteamParties)
// Naming: steam_parties_*
//
// Notes:
// - Uses the same callback + CallResult patterns as the existing modules.
// - Beacon locations are exposed to GML as primitive fields (type + id)
//   instead of passing SteamPartyBeaconLocation_t objects in arguments.

#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteammatchmaking.h>

#include <algorithm>
#include <cstdint>
#include <optional>
#include <string>
#include <string_view>
#include <vector>
#include <mutex>

using namespace gm::wire;
using namespace gm_structs;
using namespace gm_enums;

static inline ISteamParties* steam_parties_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Parties: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamParties* p = SteamParties();
    if (!p)
        steam_set_last_error("Steam Parties: SteamParties() returned NULL.");

    return p;
}

static inline SteamPartyBeaconLocation_t steam_party_location(
    gm_enums::SteamPartiesBeaconLocationType location_type,
    std::uint64_t location_id
)
{
    SteamPartyBeaconLocation_t out {};
    out.m_eType = (ESteamPartyBeaconLocationType)(int)location_type;
    out.m_ulLocationID = (uint64)location_id;
    return out;
}

// ------------------------------------------------------------
// Callback payload conversion
// ------------------------------------------------------------

static inline gm_structs::SteamPartiesCreateBeaconResult fromNative(const CreateBeaconCallback_t& e)
{
    gm_structs::SteamPartiesCreateBeaconResult out {};
    out.result = (gm_enums::SteamApiResult)e.m_eResult;
    out.beacon_id = (std::uint64_t)e.m_ulBeaconID;
    return out;
}

static inline gm_structs::SteamPartiesJoinPartyResult fromNative(const JoinPartyCallback_t& e)
{
    gm_structs::SteamPartiesJoinPartyResult out {};
    out.result = (gm_enums::SteamApiResult)e.m_eResult;
    out.beacon_id = (std::uint64_t)e.m_ulBeaconID;
    out.beacon_owner_steam_id = (std::uint64_t)e.m_SteamIDBeaconOwner.ConvertToUint64();
    out.connect_string = e.m_rgchConnectString;
    return out;
}

static inline gm_structs::SteamPartiesChangeNumOpenSlotsResult fromNative(const ChangeNumOpenSlotsCallback_t& e)
{
    gm_structs::SteamPartiesChangeNumOpenSlotsResult out {};
    out.result = (std::int32_t)e.m_eResult;
    return out;
}

static inline gm_structs::SteamPartiesReservationNotification fromNative(const ReservationNotificationCallback_t& e)
{
    gm_structs::SteamPartiesReservationNotification out {};
    out.beacon_id = (std::uint64_t)e.m_ulBeaconID;
    out.joiner_steam_id = (std::uint64_t)e.m_steamIDJoiner.ConvertToUint64();
    return out;
}

// ------------------------------------------------------------
// Global callbacks
// ------------------------------------------------------------

static std::mutex g_callbacks_mtx;

static GMFunction g_cb_reservation_notification = nullptr;
static GMFunction g_cb_available_beacon_locations_updated = nullptr;
static GMFunction g_cb_active_beacons_updated = nullptr;

class SteamParties_Callbacks {
public:
    STEAM_CALLBACK(SteamParties_Callbacks, OnReservationNotification, ReservationNotificationCallback_t);
    STEAM_CALLBACK(SteamParties_Callbacks, OnAvailableBeaconLocationsUpdated, AvailableBeaconLocationsUpdated_t);
    STEAM_CALLBACK(SteamParties_Callbacks, OnActiveBeaconsUpdated, ActiveBeaconsUpdated_t);
};

void SteamParties_Callbacks::OnReservationNotification(ReservationNotificationCallback_t* p)
{
    if (!p) {
        return;
    }

    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_reservation_notification;
    }

    if (cb) {
        cb.call(fromNative(*p));
    }
}

void SteamParties_Callbacks::OnAvailableBeaconLocationsUpdated(AvailableBeaconLocationsUpdated_t* p)
{
    if (!p)
        return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_available_beacon_locations_updated;
    }
    if (cb)
        cb.call();
}

void SteamParties_Callbacks::OnActiveBeaconsUpdated(ActiveBeaconsUpdated_t* p)
{
    if (!p)
        return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_active_beacons_updated;
    }
    if (cb)
        cb.call();
}

static SteamParties_Callbacks g_steamparties_callbacks;

void steam_parties_set_callback_reservation_notification(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_reservation_notification = callback;
}

void steam_parties_clear_callback_reservation_notification()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_reservation_notification = nullptr;
}

void steam_parties_set_callback_available_beacon_locations_updated(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_available_beacon_locations_updated = callback;
}

void steam_parties_clear_callback_available_beacon_locations_updated()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_available_beacon_locations_updated = nullptr;
}

void steam_parties_set_callback_active_beacons_updated(const GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_active_beacons_updated = callback;
}

void steam_parties_clear_callback_active_beacons_updated()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_active_beacons_updated = nullptr;
}

// ------------------------------------------------------------
// ISteamParties functions
// ------------------------------------------------------------

std::optional<std::uint32_t> steam_parties_get_num_available_beacon_locations()
{
    STEAM_GUARD_RET(std::nullopt);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return std::nullopt;

    uint32 count = 0;
    const bool ok = p->GetNumAvailableBeaconLocations(&count);
    if (!ok) {
        steam_set_last_error("Steam Parties: GetNumAvailableBeaconLocations failed.");
        return std::nullopt;
    }

    return (std::uint32_t)count;
}

std::vector<gm_structs::SteamPartiesBeaconLocation> steam_parties_get_available_beacon_locations()
{
    STEAM_GUARD_RET({});

    std::vector<gm_structs::SteamPartiesBeaconLocation> out;

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return out;

    uint32 count = 0;
    if (!p->GetNumAvailableBeaconLocations(&count)) {
        steam_set_last_error("Steam Parties: GetNumAvailableBeaconLocations failed.");
        return out;
    }

    if (count == 0)
        return out;

    std::vector<SteamPartyBeaconLocation_t> native((size_t)count);
    if (!p->GetAvailableBeaconLocations(native.data(), count)) {
        steam_set_last_error("Steam Parties: GetAvailableBeaconLocations failed.");
        return out;
    }

    out.reserve((size_t)count);
    for (uint32 i = 0; i < count; ++i) {
        gm_structs::SteamPartiesBeaconLocation entry{};
        entry.location_id = (std::uint64_t)native[(size_t)i].m_ulLocationID;
        entry.location_type = static_cast<gm_enums::SteamPartiesBeaconLocationType>((int)native[(size_t)i].m_eType);
        out.push_back(std::move(entry));
    }

    return out;
}

bool steam_parties_create_beacon(
    std::uint32_t open_slots,
    gm_enums::SteamPartiesBeaconLocationType beacon_location_type,
    std::uint64_t beacon_location_id,
    std::string_view connect_string,
    std::string_view metadata,
    const GMFunction& callback
)
{
    STEAM_GUARD_RET(false);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return false;

    SteamPartyBeaconLocation_t loc = steam_party_location(beacon_location_type, beacon_location_id);
    std::string join(connect_string);
    std::string meta(metadata);

    SteamAPICall_t call = p->CreateBeacon(open_slots, &loc, join.c_str(), meta.c_str());
    if (!call) {
        steam_set_last_error("Steam Parties: CreateBeacon returned k_uAPICallInvalid.");
        return false;
    }

    auto* h = new steam_async::CallResult<gm_structs::SteamPartiesCreateBeaconResult, CreateBeaconCallback_t>(
        callback, &fromNative
    );
    h->set(call);

    return true;
}

bool steam_parties_on_reservation_completed(std::uint64_t beacon_id, std::uint64_t user_steam_id)
{
    STEAM_GUARD_RET(false);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return false;

    p->OnReservationCompleted((PartyBeaconID_t)beacon_id, steam_id_from_u64(user_steam_id));
    return true;
}

bool steam_parties_change_num_open_slots(
    std::uint64_t beacon_id,
    std::uint32_t open_slots,
    const GMFunction& callback
)
{
    STEAM_GUARD_RET(false);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return false;

    SteamAPICall_t call = p->ChangeNumOpenSlots((PartyBeaconID_t)beacon_id, open_slots);
    if (!call) {
        steam_set_last_error("Steam Parties: ChangeNumOpenSlots returned k_uAPICallInvalid.");
        return false;
    }

    auto* h = new steam_async::CallResult<
        gm_structs::SteamPartiesChangeNumOpenSlotsResult,
        ChangeNumOpenSlotsCallback_t
    >(callback, &fromNative);
    h->set(call);

    return true;
}

bool steam_parties_destroy_beacon(std::uint64_t beacon_id)
{
    STEAM_GUARD_RET(false);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return false;

    return p->DestroyBeacon((PartyBeaconID_t)beacon_id);
}

std::uint32_t steam_parties_get_num_active_beacons()
{
    STEAM_GUARD_RET(0);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return 0;

    return (std::uint32_t)p->GetNumActiveBeacons();
}

std::uint64_t steam_parties_get_beacon_by_index(std::uint32_t index)
{
    STEAM_GUARD_RET(0);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return 0;

    return (std::uint64_t)p->GetBeaconByIndex(index);
}

gm_structs::SteamPartiesBeaconDetails steam_parties_get_beacon_details(std::uint64_t beacon_id)
{
    STEAM_GUARD_RET({});

    uint32 metadata_max = 1024;

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return {};

    if (metadata_max <= 0) {
        steam_set_last_error("Steam Parties: metadata_max must be > 0.");
        return {};
    }

    CSteamID owner {};
    SteamPartyBeaconLocation_t loc {};
    std::vector<char> metadata((size_t)metadata_max, '\0');

    const bool ok = p->GetBeaconDetails(
        (PartyBeaconID_t)beacon_id,
        &owner,
        &loc,
        metadata.data(),
        metadata_max
    );

    if (!ok) {
        steam_set_last_error("Steam Parties: GetBeaconDetails failed.");
        return {};
    }

    gm_structs::SteamPartiesBeaconDetails out {};
    out.beacon_owner_steam_id = (std::uint64_t)owner.ConvertToUint64();
    out.location_type = (gm_enums::SteamPartiesBeaconLocationType)(int)loc.m_eType;
    out.location_id = (std::uint64_t)loc.m_ulLocationID;
    out.metadata = std::string(metadata.data());
    out.ok = true;
    return out;
}

bool steam_parties_join_party(std::uint64_t beacon_id, const GMFunction& callback)
{
    STEAM_GUARD_RET(false);

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return false;

    SteamAPICall_t call = p->JoinParty((PartyBeaconID_t)beacon_id);
    if (!call) {
        steam_set_last_error("Steam Parties: JoinParty returned k_uAPICallInvalid.");
        return false;
    }

    auto* h = new steam_async::CallResult<gm_structs::SteamPartiesJoinPartyResult, JoinPartyCallback_t>(
        callback, &fromNative
    );
    h->set(call);

    return true;
}

std::string steam_parties_get_beacon_location_data(
    gm_enums::SteamPartiesBeaconLocationType beacon_location_type,
    std::uint64_t beacon_location_id,
    gm_enums::SteamPartiesBeaconLocationData data_kind
)
{
    STEAM_GUARD_RET("");

    ISteamParties* p = steam_parties_iface();
    if (!p)
        return "";

    std::int32_t out_buffer_size = 1024;

    SteamPartyBeaconLocation_t loc = steam_party_location(beacon_location_type, beacon_location_id);
    std::vector<char> out((size_t)out_buffer_size, '\0');

    const bool ok = p->GetBeaconLocationData(
        loc,
        (ESteamPartyBeaconLocationData)(int)data_kind,
        out.data(),
        out_buffer_size
    );

    if (!ok) {
        steam_set_last_error("Steam Parties: GetBeaconLocationData failed.");
        return "";
    }

    return std::string(out.data());
}

