/// steam_parties.cpp

#include "pch.h"

#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#pragma region Callbacks

// CCallResult declarations
CCallResult<steam_net_callbacks_t, CreateBeaconCallback_t> steam_party_beacon_created;
CCallResult<steam_net_callbacks_t, JoinPartyCallback_t> steam_party_joined;
CCallResult<steam_net_callbacks_t, ChangeNumOpenSlotsCallback_t> steam_party_change_num_open_slots;

// CCallResult callback implementations
void steam_net_callbacks_t::party_beacon_created(CreateBeaconCallback_t* e, bool failed) {
	steam_net_event ev((char*)"party_beacon_created");
	ev.set_result(e->m_eResult);
	ev.set((char*)"beacon_id", (uint64)e->m_ulBeaconID);
	ev.dispatch();
}

void steam_net_callbacks_t::party_joined(JoinPartyCallback_t* e, bool failed) {
	steam_net_event ev((char*)"party_joined");
	ev.set_result(e->m_eResult);
	ev.set((char*)"beacon_id", (uint64)e->m_ulBeaconID);
	ev.set_steamid_all("steam_id_beacon_owner", e->m_SteamIDBeaconOwner);
	ev.set((char*)"connect_string", (char*)e->m_rgchConnectString);
	ev.dispatch();
}

void steam_net_callbacks_t::party_change_num_open_slots(ChangeNumOpenSlotsCallback_t* e, bool failed) {
	steam_net_event ev((char*)"party_change_num_open_slots");
	ev.set_result(e->m_eResult);
	ev.dispatch();
}

// STEAM_CALLBACK implementations (auto-dispatched by Steam)
void steam_net_callbacks_t::party_reservation_notification(ReservationNotificationCallback_t* e) {
	steam_net_event ev((char*)"party_reservation_notification");
	ev.set((char*)"beacon_id", (uint64)e->m_ulBeaconID);
	ev.set_steamid_all("steam_id_joiner", e->m_steamIDJoiner);
	ev.dispatch();
}

void steam_net_callbacks_t::party_available_beacon_locations_updated(AvailableBeaconLocationsUpdated_t* e) {
	steam_net_event ev((char*)"party_available_beacon_locations_updated");
	ev.dispatch();
}

void steam_net_callbacks_t::party_active_beacons_updated(ActiveBeaconsUpdated_t* e) {
	steam_net_event ev((char*)"party_active_beacons_updated");
	ev.dispatch();
}

#pragma endregion

#pragma region Beacon locations

/// Returns the number of locations in which you are able to post a party beacon.
YYEXPORT void steam_parties_get_num_available_beacon_locations(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!SteamParties())
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	uint32 numLocations = 0;
	SteamParties()->GetNumAvailableBeaconLocations(&numLocations);

	Result.kind = VALUE_REAL;
	Result.val = (double)numLocations;
}

/// Returns an array of available beacon locations, each as a struct with "type" and "id" fields.
YYEXPORT void steam_parties_get_available_beacon_locations(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint32 maxLocations = (uint32)YYGetReal(arg, 0);

	if (!SteamParties())
	{
		YYCreateArray(&Result);
		return;
	}

	uint32 actualCount = 0;
	SteamParties()->GetNumAvailableBeaconLocations(&actualCount);
	uint32 count = (maxLocations < actualCount) ? maxLocations : actualCount;

	std::vector<SteamPartyBeaconLocation_t> locations(count);

	if (count == 0 || !SteamParties()->GetAvailableBeaconLocations(locations.data(), count))
	{
		YYCreateArray(&Result);
		return;
	}

	std::vector<RValue> vec{};
	for (uint32 i = 0; i < count; i++)
	{
		RValue Struct = { 0 };
		YYStructCreate(&Struct);

		YYStructAddDouble(&Struct, "type", (double)locations[i].m_eType);
		YYStructAddInt64(&Struct, "id", locations[i].m_ulLocationID);

		vec.push_back(Struct);
	}

	YYCreateArray(&Result);
	_SW_SetArrayOfRValue(&Result, vec);
}

/// Returns location data (name, icon URLs) for a given beacon location.
YYEXPORT void steam_parties_get_beacon_location_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	int32 locationType = YYGetInt32(arg, 0);
	uint64 locationId = (uint64)YYGetInt64(arg, 1);
	int32 dataType = YYGetInt32(arg, 2);

	if (!SteamParties())
	{
		YYCreateString(&Result, "");
		return;
	}

	SteamPartyBeaconLocation_t location;
	location.m_eType = (ESteamPartyBeaconLocationType)locationType;
	location.m_ulLocationID = locationId;

	char buffer[2048];
	if (SteamParties()->GetBeaconLocationData(location, (ESteamPartyBeaconLocationData)dataType, buffer, sizeof(buffer)))
	{
		YYCreateString(&Result, buffer);
	}
	else
	{
		YYCreateString(&Result, "");
	}
}

#pragma endregion

#pragma region Creating and managing beacons

/// [async] Creates a party beacon. You can only create one beacon at a time.
YYEXPORT void steam_parties_create_beacon(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint32 openSlots = (uint32)YYGetReal(arg, 0);
	int32 locationType = YYGetInt32(arg, 1);
	uint64 locationId = (uint64)YYGetInt64(arg, 2);
	const char* connectString = YYGetString(arg, 3);
	const char* metadata = YYGetString(arg, 4);

	if (!SteamParties())
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	SteamPartyBeaconLocation_t location;
	location.m_eType = (ESteamPartyBeaconLocationType)locationType;
	location.m_ulLocationID = locationId;

	SteamAPICall_t call = SteamParties()->CreateBeacon(openSlots, &location, connectString, metadata);
	steam_party_beacon_created.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::party_beacon_created);

	Result.kind = VALUE_BOOL;
	Result.val = true;
}

/// Notifies Steam that a user has joined the party and the beacon's reservation has been fulfilled.
YYEXPORT void steam_parties_on_reservation_completed(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint64 beaconId = (uint64)YYGetInt64(arg, 0);
	uint64 userId = (uint64)YYGetInt64(arg, 1);

	if (!SteamParties())
	{
		return;
	}

	SteamParties()->OnReservationCompleted((PartyBeaconID_t)beaconId, CSteamID(userId));
}

/// [async] Changes the number of open slots on an existing beacon.
YYEXPORT void steam_parties_change_num_open_slots(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint64 beaconId = (uint64)YYGetInt64(arg, 0);
	uint32 openSlots = (uint32)YYGetReal(arg, 1);

	if (!SteamParties())
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	SteamAPICall_t call = SteamParties()->ChangeNumOpenSlots((PartyBeaconID_t)beaconId, openSlots);
	steam_party_change_num_open_slots.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::party_change_num_open_slots);

	Result.kind = VALUE_BOOL;
	Result.val = true;
}

/// Destroys the specified party beacon.
YYEXPORT void steam_parties_destroy_beacon(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint64 beaconId = (uint64)YYGetInt64(arg, 0);

	if (!SteamParties())
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	Result.kind = VALUE_BOOL;
	Result.val = SteamParties()->DestroyBeacon((PartyBeaconID_t)beaconId);
}

#pragma endregion

#pragma region Browsing beacons

/// Returns the number of active party beacons created by other users for your game.
YYEXPORT void steam_parties_get_num_active_beacons(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!SteamParties())
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = (double)SteamParties()->GetNumActiveBeacons();
}

/// Returns the beacon ID at the given index.
YYEXPORT void steam_parties_get_beacon_by_index(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint32 index = (uint32)YYGetReal(arg, 0);

	if (!SteamParties())
	{
		Result.kind = VALUE_INT64;
		Result.v64 = 0;
		return;
	}

	Result.kind = VALUE_INT64;
	Result.v64 = (int64)SteamParties()->GetBeaconByIndex(index);
}

/// Returns details about a beacon as a struct with owner_id, location_type, location_id, and metadata.
YYEXPORT void steam_parties_get_beacon_details(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint64 beaconId = (uint64)YYGetInt64(arg, 0);

	YYStructCreate(&Result);

	if (!SteamParties())
	{
		YYStructAddBool(&Result, "success", false);
		return;
	}

	CSteamID ownerID;
	SteamPartyBeaconLocation_t location;
	char metadata[2048];

	if (SteamParties()->GetBeaconDetails((PartyBeaconID_t)beaconId, &ownerID, &location, metadata, sizeof(metadata)))
	{
		YYStructAddBool(&Result, "success", true);
		YYStructAddInt64(&Result, "owner_id", ownerID.ConvertToUint64());
		YYStructAddDouble(&Result, "location_type", (double)location.m_eType);
		YYStructAddInt64(&Result, "location_id", location.m_ulLocationID);
		YYStructAddString(&Result, "metadata", metadata);
	}
	else
	{
		YYStructAddBool(&Result, "success", false);
	}
}

/// [async] Joins the party advertised by the given beacon.
YYEXPORT void steam_parties_join_party(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	uint64 beaconId = (uint64)YYGetInt64(arg, 0);

	if (!SteamParties())
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	SteamAPICall_t call = SteamParties()->JoinParty((PartyBeaconID_t)beaconId);
	steam_party_joined.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::party_joined);

	Result.kind = VALUE_BOOL;
	Result.val = true;
}

#pragma endregion
