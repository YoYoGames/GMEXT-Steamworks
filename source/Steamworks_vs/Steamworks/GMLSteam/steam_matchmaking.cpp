/// steam_matchmaking.cpp

#include "pch.h"

#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#pragma region Current lobby

YYEXPORT void /*double*/ steam_lobby_get_lobby_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_INT64;
	Result.v64 = steam_lobby_current.ConvertToUint64();
}

bool steam_lobby_leave_()
{
	if (steam_lobby_current.IsValid()) {
		SteamMatchmaking()->LeaveLobby(steam_lobby_current);
		steam_lobby_current.Clear();
		return true;
	}
	else return false;
}

/// Leaves the current lobby (if any)
YYEXPORT void /*double*/ steam_lobby_leave(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_BOOL;
	Result.val = steam_lobby_leave_();
}

/// Returns whether the local user is the owner of the current lobby.
YYEXPORT void /*double*/ steam_lobby_is_owner(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	if (steam_lobby_current.IsValid()) 
	{
		Result.kind = VALUE_REAL;
		Result.val = SteamUser()->GetSteamID().ConvertToUint64() == SteamMatchmaking()->GetLobbyOwner(steam_lobby_current).ConvertToUint64();
	} 
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

uint64 steam_lobby_get_owner_id() {
	if (steam_lobby_current.IsValid()) {
		return SteamMatchmaking()->GetLobbyOwner(steam_lobby_current).ConvertToUint64();
	} else return 0;
}
YYEXPORT void /*double*/ steam_lobby_get_owner_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_INT64;
	Result.v64 = steam_lobby_get_owner_id();
}

YYEXPORT void /*double*/ steam_lobby_set_owner_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double user_id_high, double user_id_low) 
{
	uint64 value64 = (uint64)YYGetInt64(arg, 0);

	if (steam_lobby_current.IsValid()) 
	{
		Result.kind = VALUE_REAL;
		Result.val = SteamMatchmaking()->SetLobbyOwner(steam_lobby_current, value64);
		return;
	} 
	else 
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

YYEXPORT void /*bool*/ steam_lobby_set_joinable(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(bool joinable) 
{
	bool joinable = YYGetBool(arg, 0);

	if (steam_lobby_current.IsValid()) 
	{
		Result.kind = VALUE_BOOL;
		Result.val = SteamMatchmaking()->SetLobbyJoinable(steam_lobby_current, joinable);
	} 
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}
}

double steam_lobby_get_member_count_()
{
	if (SteamMatchmaking()) {
		return SteamMatchmaking()->GetNumLobbyMembers(steam_lobby_current);
	}
	else return 0;
}

/// Returns the number of users in the lobby.
YYEXPORT void /*double*/ steam_lobby_get_member_count(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_REAL;
	Result.val = steam_lobby_get_member_count_();
}

uint64 steam_lobby_get_member_id(int index) 
{
	if(index >= 0 && index < steam_lobby_get_member_count_())
	{
		return SteamMatchmaking()->GetLobbyMemberByIndex(steam_lobby_current, index).ConvertToUint64();
	} else return 0;
}

YYEXPORT void /*double*/ steam_lobby_get_member_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double index) 
{
	double index = YYGetReal(arg, 0);

	Result.kind = VALUE_INT64;
	Result.v64 = steam_lobby_get_member_id((int)index);
}

/// Opens an overlay to invite users to the current lobby.
YYEXPORT void /*double*/ steam_lobby_activate_invite_overlay(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	if (steam_lobby_current.IsValid() && SteamFriends()) {
		SteamFriends()->ActivateGameOverlayInviteDialog(steam_lobby_current);
		Result.kind = VALUE_BOOL;
		Result.val = true;
	}
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}
}

#pragma endregion

#pragma region Lobby list request
bool steam_lobby_list_loading = false;
CCallResult<steam_net_callbacks_t, LobbyMatchList_t> steam_lobby_list_received;
std::vector<CSteamID> steam_lobby_list;
int steam_lobby_count = 0;
void steam_net_callbacks_t::lobby_list_received(LobbyMatchList_t* e, bool failed) 
{
	uint32 n = e->m_nLobbiesMatching;
	steam_lobby_count = n;
	steam_lobby_list.resize(n);
	for (uint32 i = 0; i < n; i++) {
		steam_lobby_list[i] = SteamMatchmaking()->GetLobbyByIndex(i);
	}
	steam_lobby_list_loading = false;
	//
	steam_net_event ev((char*) "lobby_list");
	ev.set_success(!failed);
	ev.set((char*)"lobby_count", n);
	ev.dispatch();
}

/// Requests the list of lobbies to be (re-)loaded.
YYEXPORT void /*double*/ steam_lobby_list_request(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	if (SteamMatchmaking()) 
	{
		SteamAPICall_t call = SteamMatchmaking()->RequestLobbyList();
		steam_lobby_list_received.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::lobby_list_received);
		steam_lobby_list_loading = true;
		Result.kind = VALUE_REAL;
		Result.val = 1;
	} 
	else 
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

/// Returns whether the list of lobbies is currently loading.
YYEXPORT void /*double*/ steam_lobby_list_is_loading(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_REAL;
	Result.val = steam_lobby_list_loading;
}

#pragma endregion

#pragma region Lobby list filters

/// "==" / Equal
#define steam_lobby_list_filter_eq 0
/// "!=" / Not Equal
#define steam_lobby_list_filter_ne 3
/// "<" / Less Than
#define steam_lobby_list_filter_lt -1
/// ">" / Greater Than
#define steam_lobby_list_filter_gt 1
/// "<=" / Less than or Equal
#define steam_lobby_list_filter_le -2
/// ">=" / Greater than or Equal
#define steam_lobby_list_filter_ge 2

ELobbyComparison steam_lobby_list_filter_convert(int32 filter) {
	switch (filter) {
		case steam_lobby_list_filter_le: return k_ELobbyComparisonEqualToOrLessThan;
		case steam_lobby_list_filter_lt: return k_ELobbyComparisonLessThan;
		case steam_lobby_list_filter_gt: return k_ELobbyComparisonGreaterThan;
		case steam_lobby_list_filter_ge: return k_ELobbyComparisonEqualToOrGreaterThan;
		case steam_lobby_list_filter_ne: return k_ELobbyComparisonNotEqual;
		default: return k_ELobbyComparisonEqual;
	}
}

/// Sets a string filter for the next lobby list request.
YYEXPORT void /*double*/ steam_lobby_list_add_string_filter(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* key, char* value, double comparison_type) 
{
	char* key = (char*)YYGetString(arg, 0);
	char* value = (char*)YYGetString(arg, 1);
	double comparison_type = YYGetReal(arg, 2);

	if (SteamMatchmaking()) 
	{
		ELobbyComparison cmp = steam_lobby_list_filter_convert((int32)comparison_type);
		SteamMatchmaking()->AddRequestLobbyListStringFilter(key, value, cmp);
		Result.kind = VALUE_REAL;
		Result.val = 1;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

/// Sets a numerical filter for the next lobby list request.
YYEXPORT void /*double*/ steam_lobby_list_add_numerical_filter(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* key, double value, double comparison_type) 
{
	char* key = (char*)YYGetString(arg, 0);
	double value = YYGetReal(arg, 1);
	double comparison_type = YYGetReal(arg, 2);

	if (SteamMatchmaking()) 
	{
		ELobbyComparison cmp = steam_lobby_list_filter_convert((int32)comparison_type);
		SteamMatchmaking()->AddRequestLobbyListNumericalFilter(key, (int)value, cmp);
		Result.kind = VALUE_REAL;
		Result.val = 1;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

/// Sorts the results of the next lobby list request based to proximity to the given value.
YYEXPORT void /*double*/ steam_lobby_list_add_near_filter(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* key, double value) 
{
	char* key = (char*)YYGetString(arg, 0);
	double value = YYGetReal(arg, 1);

	if (SteamMatchmaking()) 
	{
		SteamMatchmaking()->AddRequestLobbyListNearValueFilter(key, (int)value);
		Result.kind = VALUE_REAL;
		Result.val = 1;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

///
#define steam_lobby_list_distance_filter_close 0
///
#define steam_lobby_list_distance_filter_default 1
///
#define steam_lobby_list_distance_filter_far 2
///
#define steam_lobby_list_distance_filter_worldwide 3

/// Restricts results by region
YYEXPORT void /*double*/ steam_lobby_list_add_distance_filter(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double mode) 
{
	double mode = YYGetReal(arg, 0);

	ELobbyDistanceFilter d = k_ELobbyDistanceFilterDefault;
	switch ((int32)mode) {
		case 0: d = k_ELobbyDistanceFilterClose; break;
		case 1: d = k_ELobbyDistanceFilterDefault; break;
		case 2: d = k_ELobbyDistanceFilterFar; break;
		case 3: d = k_ELobbyDistanceFilterWorldwide; break;
	}

	if (SteamMatchmaking()) 
	{
		SteamMatchmaking()->AddRequestLobbyListDistanceFilter(d);
		Result.kind = VALUE_BOOL;
		Result.val = true;
	}
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}
}

#pragma endregion

#pragma region Lobby list items

/// Returns the number of the matching lobbies.
YYEXPORT void /*double*/ steam_lobby_list_get_count(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
	Result.kind = VALUE_REAL;
	Result.val = steam_lobby_count;
}

char* steam_lobby_list_get_data_str = (char*)malloc(1);

/// Retrieves given information about the given lobby
YYEXPORT void /*const char**/ steam_lobby_list_get_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double index, char* key) 
{
	double index = YYGetReal(arg, 0);
	char* key = (char*)YYGetString(arg, 1);

	int32 i = (int32)index;
	if (i >= 0 && i < steam_lobby_count) {
		CSteamID lobby = steam_lobby_list[i];
		YYCreateString(&Result, SteamMatchmaking()->GetLobbyData(lobby, key));
	} 
	else 
		YYCreateString(&Result, "");
}
//
uint64 steam_lobby_list_get_lobby_id(int32 index) {
	if (index >= 0 && index < steam_lobby_count) {
		return steam_lobby_list[index].ConvertToUint64();
	} 
	else return 0;
}

YYEXPORT void /*double*/ steam_lobby_list_get_lobby_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double index) 
{
	int32 value64 = YYGetInt32(arg, 0);

	Result.kind = VALUE_INT64;
	Result.v64 = steam_lobby_list_get_lobby_id(value64);
}

YYEXPORT void /*double*/ steam_lobby_list_get_lobby_owner_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double index) 
{
	int32 i = YYGetInt32(arg, 0);

	Result.kind = VALUE_INT64;
	Result.v64 = SteamMatchmaking()->GetLobbyOwner(steam_lobby_list[i]).ConvertToUint64();
}

/// [async] Returns the number of members in the given lobby in search results.
YYEXPORT void /*double*/ steam_lobby_list_get_lobby_member_count(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double lobby_index)
{

	int32 i = YYGetInt32(arg, 0);
	if (i >= 0 && i < steam_lobby_count) 
	{
		Result.kind = VALUE_REAL;
		Result.val = SteamMatchmaking()->GetNumLobbyMembers(steam_lobby_list[i]);
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

YYEXPORT void /*double*/ steam_lobby_list_get_lobby_member_id(RValue & Result, CInstance * selfinst, CInstance * otherinst, int argc, RValue * arg) { //(double lobby_index, member_index)

	Result.kind = VALUE_INT64;

	int32 lobby_idx = YYGetInt32(arg, 0);
	int32 member_idx = YYGetInt32(arg, 1);

	if (lobby_idx >= 0 && lobby_idx < steam_lobby_count)
	{
		int steam_lobby_member_count = SteamMatchmaking()->GetNumLobbyMembers(steam_lobby_list[lobby_idx]);
		if (member_idx >= 0 && member_idx < steam_lobby_member_count)
			Result.v64 = SteamMatchmaking()->GetLobbyMemberByIndex(steam_lobby_list[lobby_idx], member_idx).ConvertToUint64();
		else
			Result.v64 = 0;
	}
	else 
	{
		Result.v64 = 0;
	}
}

#pragma endregion

#pragma region Joining lobbies

CCallResult<steam_net_callbacks_t, LobbyEnter_t> steam_lobby_joined;
void steam_net_callbacks_t::lobby_joined(LobbyEnter_t* e, bool failed) {
	steam_lobby_current.SetFromUint64(e->m_ulSteamIDLobby);
	steam_net_event q((char*)"lobby_joined");
	q.set_uint64_all("lobby_id", e->m_ulSteamIDLobby);
	q.set_success(!failed);
	q.dispatch();
}

/// [async] Starts joining the given lobby.
YYEXPORT void /*double*/ steam_lobby_list_join(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double index) 
{
	double index = YYGetReal(arg, 0);

	steam_lobby_leave_();
	int32 i = (int32)index;
	if (i >= 0 && i < steam_lobby_count) {
		SteamAPICall_t call = SteamMatchmaking()->JoinLobby(steam_lobby_list[i]);
		steam_lobby_joined.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::lobby_joined);
		Result.kind = VALUE_REAL;
		Result.val = 1.0;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

bool steam_lobby_join_id(uint64 lobby_id) {
	if (SteamMatchmaking()) {
		SteamAPICall_t call = SteamMatchmaking()->JoinLobby(lobby_id);
		steam_lobby_joined.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::lobby_joined);
		return true;
	} else return false;
}

YYEXPORT void /*double*/ steam_lobby_join_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double lobby_id_high, double lobby_id_low) 
{
	uint64 value64 = (uint64)YYGetInt64(arg, 0);

	Result.kind = VALUE_BOOL;
	Result.val = steam_lobby_join_id(value64);
}

void steam_net_callbacks_t::lobby_join_requested(GameLobbyJoinRequested_t* e) {
	steam_net_event q((char*)"lobby_join_requested");
	q.set_steamid_all("lobby_id", e->m_steamIDLobby);
	q.set_steamid_all("friend_id", e->m_steamIDFriend);
	q.dispatch();
}

#pragma endregion

#pragma region Creating lobbies

/// Private lobby. People can only join if invited.
#define steam_lobby_type_private 0
/// Friends-only lobby. Visible to friends.
#define steam_lobby_type_friends_only 1
/// Public lobby. Visible to everyone.
#define steam_lobby_type_public 2

ELobbyType steam_lobby_type_from_int(int32 type) {
	switch ((int32)type) {
		case steam_lobby_type_friends_only: return k_ELobbyTypeFriendsOnly;
		case steam_lobby_type_public: return k_ELobbyTypePublic;
		default: return k_ELobbyTypePrivate;
	}
}

CCallResult<steam_net_callbacks_t, LobbyCreated_t> steam_lobby_created;
void steam_net_callbacks_t::lobby_created(LobbyCreated_t* e, bool failed) {
	auto lobby_id = e->m_ulSteamIDLobby;
	steam_lobby_current.SetFromUint64(lobby_id);
	steam_net_event r((char*)"lobby_created");
	r.set_uint64_all("lobby_id", lobby_id);
	r.set_result(e->m_eResult);
	r.dispatch();
}

/// [async] Creates a lobby.
YYEXPORT void /*double*/ steam_lobby_create(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double type, double max_members) 
{
	double type = YYGetReal(arg, 0);
	double max_members = YYGetReal(arg, 1);

	steam_lobby_leave_();
	if (SteamMatchmaking()) {
		SteamAPICall_t call = SteamMatchmaking()->CreateLobby(steam_lobby_type_from_int((int32)type), (int)max_members);
		steam_lobby_created.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::lobby_created);
		Result.kind = VALUE_BOOL;
		Result.val = true;
	}
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}
}

#pragma endregion

#pragma region Managing lobbies

/// [lobby owner only] Sets the data for the current lobby.
YYEXPORT void /*double*/ steam_lobby_set_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* key, char* value) 
{
	char* key = (char*)YYGetString(arg, 0);
	char* value = (char*)YYGetString(arg, 1);

	if (steam_lobby_current.IsValid() && SteamMatchmaking()) 
	{
		Result.kind = VALUE_BOOL;
		Result.val = SteamMatchmaking()->SetLobbyData(steam_lobby_current, key, value);
	}
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}
}

/// [anyone] Retrieves previously set data for the current lobby.
YYEXPORT void /*char**/ steam_lobby_get_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* key) 
{
	char* key = (char*)YYGetString(arg, 0);

	if (steam_lobby_current.IsValid() && SteamMatchmaking()) 
	{
		YYCreateString(&Result, SteamMatchmaking()->GetLobbyData(steam_lobby_current, key));
	} 
	else YYCreateString(&Result, "");
}

/// [lobby owner only] Changes the type of the current lobby.
YYEXPORT void /*double*/ steam_lobby_set_type(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double type) 
{
	double type = YYGetReal(arg, 0);

	if (steam_lobby_current.IsValid() && SteamMatchmaking()) 
	{
		Result.kind = VALUE_BOOL;
		Result.val = SteamMatchmaking()->SetLobbyType(steam_lobby_current, steam_lobby_type_from_int((int32)type));
	}
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}
}

#pragma endregion
