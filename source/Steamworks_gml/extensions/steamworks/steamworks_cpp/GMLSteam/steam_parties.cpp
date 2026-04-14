/// steam_parties.cpp

#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// -----------------------------------------------------------------------
// Available beacon locations
// -----------------------------------------------------------------------
#pragma region Available beacon locations

void steam_net_callbacks_t::parties_available_beacon_locations_updated(AvailableBeaconLocationsUpdated_t* e)
{
	uint32 count = 0;
	if (SteamParties())
		SteamParties()->GetNumAvailableBeaconLocations(&count);

	steam_net_event ev((char*)"steam_parties_available_beacon_locations_updated");
	ev.set((char*)"count", count);
	ev.dispatch();
}

/// Returns a struct { ok, count } with the number of available beacon locations.
YYEXPORT void /*struct*/ steam_parties_get_num_available_beacon_locations(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
	if (!steam_is_initialised || !SteamParties())
	{
		YYStructCreate(&Result);
		YYStructAddBool(&Result, "ok", false);
		YYStructAddInt(&Result, "count", 0);
		return;
	}

	uint32 count = 0;
	const bool ok = SteamParties()->GetNumAvailableBeaconLocations(&count);

	YYStructCreate(&Result);
	YYStructAddBool(&Result, "ok", ok);
	YYStructAddInt(&Result, "count", ok ? (int)count : 0);
}

/// Returns a struct { ok, count, location_types[], location_ids[] } with all available beacon locations.
YYEXPORT void /*struct*/ steam_parties_get_available_beacon_locations(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
	if (!steam_is_initialised || !SteamParties())
	{
		YYStructCreate(&Result);
		YYStructAddBool(&Result, "ok", false);
		YYStructAddInt(&Result, "count", 0);
		RValue empty{};
		YYCreateArray(&empty);
		YYStructAddRValue(&Result, "location_types", &empty);
		YYStructAddRValue(&Result, "location_ids",   &empty);
		return;
	}

	uint32 count = 0;
	if (!SteamParties()->GetNumAvailableBeaconLocations(&count) || count == 0)
	{
		YYStructCreate(&Result);
		YYStructAddBool(&Result, "ok", count == 0); // count==0 is not a failure
		YYStructAddInt(&Result, "count", 0);
		RValue empty{};
		YYCreateArray(&empty);
		YYStructAddRValue(&Result, "location_types", &empty);
		YYStructAddRValue(&Result, "location_ids",   &empty);
		return;
	}

	std::vector<SteamPartyBeaconLocation_t> locs((size_t)count);
	if (!SteamParties()->GetAvailableBeaconLocations(locs.data(), count))
	{
		YYStructCreate(&Result);
		YYStructAddBool(&Result, "ok", false);
		YYStructAddInt(&Result, "count", 0);
		RValue empty{};
		YYCreateArray(&empty);
		YYStructAddRValue(&Result, "location_types", &empty);
		YYStructAddRValue(&Result, "location_ids",   &empty);
		return;
	}

	// location_types as double array (enum values are small ints)
	std::vector<double> types_dbl;
	types_dbl.reserve((size_t)count);
	for (uint32 i = 0; i < count; ++i)
		types_dbl.push_back((double)locs[i].m_eType);

	RValue arr_types{};
	YYCreateArray(&arr_types, (int)count, types_dbl.data());

	// location_ids as int64 array
	std::vector<int64> ids_i64;
	ids_i64.reserve((size_t)count);
	for (uint32 i = 0; i < count; ++i)
		ids_i64.push_back((int64)locs[i].m_ulLocationID);

	RValue arr_ids{};
	YYCreateArray(&arr_ids);
	_SW_SetArrayOfInt64(&arr_ids, ids_i64);

	YYStructCreate(&Result);
	YYStructAddBool(&Result,   "ok",             true);
	YYStructAddInt(&Result,    "count",           (int)count);
	YYStructAddRValue(&Result, "location_types",  &arr_types);
	YYStructAddRValue(&Result, "location_ids",    &arr_ids);
}

#pragma endregion

// -----------------------------------------------------------------------
// Active beacons
// -----------------------------------------------------------------------
#pragma region Active beacons

void steam_net_callbacks_t::parties_active_beacons_updated(ActiveBeaconsUpdated_t* e)
{
	uint32 count = SteamParties() ? SteamParties()->GetNumActiveBeacons() : 0u;

	steam_net_event ev((char*)"steam_parties_active_beacons_updated");
	ev.set((char*)"count", count);
	ev.dispatch();
}

/// Returns the number of active party beacons visible to the current user.
YYEXPORT void /*double*/ steam_parties_get_num_active_beacons(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
	Result.kind = VALUE_REAL;
	if (!steam_is_initialised || !SteamParties()) { Result.val = 0; return; }

	Result.val = (double)SteamParties()->GetNumActiveBeacons();
}

/// Returns the beacon ID (int64) of the active beacon at the given index.
YYEXPORT void /*int64*/ steam_parties_get_beacon_by_index(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double index)
{
	uint32 index = (uint32)YYGetReal(arg, 0);

	Result.kind = VALUE_INT64;
	if (!steam_is_initialised || !SteamParties()) { Result.v64 = 0; return; }

	Result.v64 = (int64)(uint64)SteamParties()->GetBeaconByIndex(index);
}

#pragma endregion

// -----------------------------------------------------------------------
// Beacon details
// -----------------------------------------------------------------------
#pragma region Beacon details

/// Returns a struct { ok, beacon_owner_steam_id, location_type, location_id, metadata }.
YYEXPORT void /*struct*/ steam_parties_get_beacon_details(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int64 beacon_id)
{
	uint64 beacon_id = (uint64)YYGetInt64(arg, 0);

	if (!steam_is_initialised || !SteamParties())
	{
		YYStructCreate(&Result);
		YYStructAddBool(&Result,   "ok",                   false);
		YYStructAddInt64(&Result,  "beacon_owner_steam_id", 0);
		YYStructAddInt(&Result,    "location_type",         0);
		YYStructAddInt64(&Result,  "location_id",           0);
		YYStructAddString(&Result, "metadata",              "");
		return;
	}

	CSteamID owner;
	SteamPartyBeaconLocation_t loc {};
	char metadata[1024] = {};

	const bool ok = SteamParties()->GetBeaconDetails(
		(PartyBeaconID_t)beacon_id,
		&owner,
		&loc,
		metadata,
		(int)sizeof(metadata)
	);

	YYStructCreate(&Result);
	YYStructAddBool(&Result,   "ok",                   ok);
	YYStructAddInt64(&Result,  "beacon_owner_steam_id", ok ? (int64)owner.ConvertToUint64() : 0LL);
	YYStructAddInt(&Result,    "location_type",         ok ? (int)loc.m_eType : 0);
	YYStructAddInt64(&Result,  "location_id",           ok ? (int64)loc.m_ulLocationID : 0LL);
	YYStructAddString(&Result, "metadata",              ok ? metadata : "");
}

/// Returns a specific data field string for the given beacon location (type + id).
/// data_kind corresponds to ESteamPartyBeaconLocationData values.
YYEXPORT void /*string*/ steam_parties_get_beacon_location_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double location_type, int64 location_id, double data_kind)
{
	int32  loc_type  = YYGetInt32(arg, 0);
	uint64 loc_id    = (uint64)YYGetInt64(arg, 1);
	int32  data_kind = YYGetInt32(arg, 2);

	if (!steam_is_initialised || !SteamParties()) { YYCreateString(&Result, ""); return; }

	SteamPartyBeaconLocation_t loc {};
	loc.m_eType        = (ESteamPartyBeaconLocationType)loc_type;
	loc.m_ulLocationID = loc_id;

	char out[1024] = {};
	const bool ok = SteamParties()->GetBeaconLocationData(
		loc,
		(ESteamPartyBeaconLocationData)data_kind,
		out,
		(int)sizeof(out)
	);

	YYCreateString(&Result, ok ? out : "");
}

#pragma endregion

// -----------------------------------------------------------------------
// Create beacon (async)
// -----------------------------------------------------------------------
#pragma region Create beacon

CCallResult<steam_net_callbacks_t, CreateBeaconCallback_t> steam_parties_create_beacon_result;

void steam_net_callbacks_t::parties_create_beacon(CreateBeaconCallback_t* e, bool failed)
{
	steam_net_event ev((char*)"steam_parties_create_beacon");
	ev.set_result(e->m_eResult);
	ev.set_uint64_all("beacon_id", (uint64)e->m_ulBeaconID);
	ev.dispatch();
}

/// [async] Creates a party beacon at the given location.
/// Triggers a "steam_parties_create_beacon" async Social event on completion with: success, result, beacon_id.
/// Returns false immediately if the call could not be dispatched.
YYEXPORT void /*bool*/ steam_parties_create_beacon(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double open_slots, double location_type, int64 location_id, string connect_string, string metadata)
{
	uint32 open_slots     = (uint32)YYGetReal(arg, 0);
	int32  loc_type       = YYGetInt32(arg, 1);
	uint64 loc_id         = (uint64)YYGetInt64(arg, 2);
	char*  connect_string = (char*)YYGetString(arg, 3);
	char*  metadata       = (char*)YYGetString(arg, 4);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !SteamParties()) { Result.val = false; return; }

	SteamPartyBeaconLocation_t loc {};
	loc.m_eType        = (ESteamPartyBeaconLocationType)loc_type;
	loc.m_ulLocationID = loc_id;

	SteamAPICall_t call = SteamParties()->CreateBeacon(open_slots, &loc, connect_string, metadata);
	if (!call) { Result.val = false; return; }

	steam_parties_create_beacon_result.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::parties_create_beacon);
	Result.val = true;
}

#pragma endregion

// -----------------------------------------------------------------------
// Reservation notification (sync callback) and reservation completion
// -----------------------------------------------------------------------
#pragma region Reservations

void steam_net_callbacks_t::parties_reservation_notification(ReservationNotificationCallback_t* e)
{
	steam_net_event ev((char*)"steam_parties_reservation_notification");
	ev.set_uint64_all("beacon_id",       (uint64)e->m_ulBeaconID);
	ev.set_uint64_all("joiner_steam_id", e->m_steamIDJoiner.ConvertToUint64());
	ev.dispatch();
}

/// Notifies Steam that the local game accepted the reservation for the given user.
/// Call after receiving a "steam_parties_reservation_notification" event.
/// Returns true if the call succeeded.
YYEXPORT void /*bool*/ steam_parties_on_reservation_completed(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int64 beacon_id, int64 user_steam_id)
{
	uint64 beacon_id     = (uint64)YYGetInt64(arg, 0);
	uint64 user_steam_id = (uint64)YYGetInt64(arg, 1);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !SteamParties()) { Result.val = false; return; }

	CSteamID steamID(user_steam_id);
	SteamParties()->OnReservationCompleted((PartyBeaconID_t)beacon_id, steamID);
	Result.val = true;
}

/// Destroys the beacon with the given ID. Returns true on success.
YYEXPORT void /*bool*/ steam_parties_destroy_beacon(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int64 beacon_id)
{
	uint64 beacon_id = (uint64)YYGetInt64(arg, 0);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !SteamParties()) { Result.val = false; return; }

	Result.val = SteamParties()->DestroyBeacon((PartyBeaconID_t)beacon_id);
}

#pragma endregion

// -----------------------------------------------------------------------
// Change number of open slots (async)
// -----------------------------------------------------------------------
#pragma region Change open slots

CCallResult<steam_net_callbacks_t, ChangeNumOpenSlotsCallback_t> steam_parties_change_num_open_slots_result;

void steam_net_callbacks_t::parties_change_num_open_slots(ChangeNumOpenSlotsCallback_t* e, bool failed)
{
	steam_net_event ev((char*)"steam_parties_change_num_open_slots");
	ev.set_result(e->m_eResult);
	ev.dispatch();
}

/// [async] Changes the number of open slots on the given beacon.
/// Triggers a "steam_parties_change_num_open_slots" async Social event on completion with: success, result.
/// Returns false immediately if the call could not be dispatched.
YYEXPORT void /*bool*/ steam_parties_change_num_open_slots(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int64 beacon_id, double open_slots)
{
	uint64 beacon_id  = (uint64)YYGetInt64(arg, 0);
	uint32 open_slots = (uint32)YYGetReal(arg, 1);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !SteamParties()) { Result.val = false; return; }

	SteamAPICall_t call = SteamParties()->ChangeNumOpenSlots((PartyBeaconID_t)beacon_id, open_slots);
	if (!call) { Result.val = false; return; }

	steam_parties_change_num_open_slots_result.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::parties_change_num_open_slots);
	Result.val = true;
}

#pragma endregion

// -----------------------------------------------------------------------
// Join party (async)
// -----------------------------------------------------------------------
#pragma region Join party

CCallResult<steam_net_callbacks_t, JoinPartyCallback_t> steam_parties_join_party_result;

void steam_net_callbacks_t::parties_join_party(JoinPartyCallback_t* e, bool failed)
{
	steam_net_event ev((char*)"steam_parties_join_party");
	ev.set_result(e->m_eResult);
	ev.set_uint64_all("beacon_id",             (uint64)e->m_ulBeaconID);
	ev.set_uint64_all("beacon_owner_steam_id",  e->m_SteamIDBeaconOwner.ConvertToUint64());
	ev.set((char*)"connect_string",            (char*)e->m_rgchConnectString);
	ev.dispatch();
}

/// [async] Sends a request to join the party at the given beacon.
/// Triggers a "steam_parties_join_party" async Social event on completion with:
///   success, result, beacon_id, beacon_owner_steam_id, connect_string.
/// Returns false immediately if the call could not be dispatched.
YYEXPORT void /*bool*/ steam_parties_join_party(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int64 beacon_id)
{
	uint64 beacon_id = (uint64)YYGetInt64(arg, 0);

	Result.kind = VALUE_BOOL;
	if (!steam_is_initialised || !SteamParties()) { Result.val = false; return; }

	SteamAPICall_t call = SteamParties()->JoinParty((PartyBeaconID_t)beacon_id);
	if (!call) { Result.val = false; return; }

	steam_parties_join_party_result.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::parties_join_party);
	Result.val = true;
}

#pragma endregion
