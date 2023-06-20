
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#include "steam_glue.h"

#include "steam_callbacks.h"


#ifdef OS_Windows
#include <algorithm>
#include <execution>
#endif


///	\brief	Returns 1.0 if the user is logged on
YYEXPORT void /*double*/ steam_is_user_logged_on(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_User_IsLoggedOn*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = SteamUser()->BLoggedOn()?1.0:0.0;
}

///	\brief	Returns a 64bit Steam User ID
YYEXPORT void /*uint64*/ steam_get_user_steam_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_User_GetSteamID*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_INT64;
		Result.v64 = 0;
		return;
	}

	Result.kind = VALUE_INT64;
	Result.v64 = SteamUser()->GetSteamID().ConvertToUint64();
}

//returns a 32bit account Id
YYEXPORT void /*double*/ steam_get_user_account_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_User_GetAccountID*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = (double) SteamUser()->GetSteamID().GetAccountID();
}

//return steam appID of running app
YYEXPORT void /*double*/ steam_get_app_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_Utils_GetAppId*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}
		
	Result.kind = VALUE_REAL;
	Result.val = (double) SteamUtils()->GetAppID();
}

///////////////////////////////////// YAL

/// Can be called on lobby session start, adds the user to "recently played with" list.
YYEXPORT void /*double*/ steam_user_set_played_with(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double id_high, double id_low) 
{
	uint64 value64 = (uint64)YYGetInt64(arg, 0);

	CSteamID target;
	target.SetFromUint64(value64);
	if (SteamFriends()) {
		SteamFriends()->SetPlayedWith(target);

		Result.kind = VALUE_REAL;
		Result.val = 1.0;
		return;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}
}

void steam_net_callbacks_t::micro_txn_auth_response(MicroTxnAuthorizationResponse_t* e) {
	steam_net_event r((char*)"micro_txn_auth_response");
	r.set_result(e->m_bAuthorized);
	r.set_uint64_all("order_id", e->m_ulOrderID);
	r.set((char*)"app_id", e->m_unAppID);
	r.dispatch();
}

struct steam_get_friends_game_info_t {
	uint64 friendId;
	uint32 gameId;
	uint64 lobbyId;
	char name[32];
};

YYEXPORT void /*vector<steam_get_friends_game_info_t>*/ steam_get_friends_game_info(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	int flags = k_EFriendFlagImmediate;
	int count = SteamFriends()->GetFriendCount(flags);
	//vector<steam_get_friends_game_info_t> vec{};
	vector<RValue> vec{};

	for (auto i = 0; i < count ; i++) 
	{
		FriendGameInfo_t gameInfo{};
		auto friendId = SteamFriends()->GetFriendByIndex(i, flags);

		SteamFriends()->GetFriendGamePlayed(friendId, &gameInfo);
		//if (!SteamFriends()->GetFriendGamePlayed(friendId, &gameInfo)) 
		//	continue;

		RValue Struct{};
		YYStructCreate(&Struct);

		YYStructAddInt64(&Struct, "friendId", friendId.ConvertToUint64());
		YYStructAddDouble(&Struct, "gameId", gameInfo.m_gameID.AppID());
		YYStructAddInt64(&Struct, "lobbyId", gameInfo.m_steamIDLobby.ConvertToUint64());
		YYStructAddString(&Struct, "name", SteamFriends()->GetFriendPersonaName(friendId));

		//COPY_RValue(&Result, &Struct);
		//FREE_RValue(&Struct);

		vec.push_back(Struct);
	}
	_SW_SetArrayOfRValue(&Result, vec);
}

YYEXPORT void /*const char**/ steam_get_user_persona_name_sync(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(uint64_t user_id) 
{
	int64 user_id = YYGetInt64(arg, 0);

	CSteamID user{}; user.SetFromUint64(user_id);
	YYCreateString(&Result, SteamFriends()->GetFriendPersonaName(user));
}

#pragma region Rich Text Presence

/// Sets rich text presence for the active user. See: https://partner.steamgames.com/doc/api/ISteamFriends#SetRichPresence
YYEXPORT void /*double*/ steam_set_rich_presence(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(const char* pchKey, const char* pchValue) 
{
	char* pchKey = (char*)YYGetString(arg, 0);
	char* pchValue = (char*)YYGetString(arg, 1);

	if (SteamFriends()) 
	{
		Result.kind = VALUE_REAL;
		Result.val = SteamFriends()->SetRichPresence(pchKey, pchValue);
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

/// Clears rich text presence.
YYEXPORT void /*double*/ steam_clear_rich_presence(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	if (SteamFriends()) 
	{
		SteamFriends()->ClearRichPresence();
		Result.kind = VALUE_REAL;
		Result.val = 1.0;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
	}
}

#pragma endregion

#pragma region Avatar

void steam_net_callbacks_t::avatar_image_loaded(AvatarImageLoaded_t* e) 
{
	steam_net_event r = steam_net_event((char*)"avatar_image_loaded");
	r.set_success(true);
	r.set_steamid_all("user_id", e->m_steamID);
	r.set((char*)"image", e->m_iImage);
	r.set((char*)"width", e->m_iWide);
	r.set((char*)"height", e->m_iTall);
	r.dispatch();
}
typedef int steam_image_id;
///
enum class steam_user_avatar_size {
	small = 0,
	medium = 1,
	large = 2,
};

YYEXPORT void /*steam_image_id*/ steam_get_user_avatar(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(uint64_t user_id, int avatar_size)
{
	int64 user_id = YYGetInt64(arg, 0);
	int avatar_size = (int) YYGetReal(arg, 1);

	Result.kind = VALUE_REAL;
	Result.val = 1.0;

	CSteamID _user_id((uint64)user_id);
	switch ((steam_user_avatar_size)avatar_size) 
	{
		case steam_user_avatar_size::large:
			Result.val = SteamFriends()->GetLargeFriendAvatar(_user_id);
			return;
		case steam_user_avatar_size::medium:
			Result.val = SteamFriends()->GetMediumFriendAvatar(_user_id);
			return;
		default:
			Result.val = SteamFriends()->GetSmallFriendAvatar(_user_id);
			return;
	}
}

YYEXPORT void /*std::optional<std::tuple<int, int>>*/ steam_image_get_size(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(steam_image_id img) 
{
	int img = (int) YYGetReal(arg, 0);

	uint32 width, height;
	if (SteamUtils()->GetImageSize(img, &width, &height)) 
	{
		std::vector<double> vect;
		
		vect.push_back(width);
		vect.push_back(height);
		
		_SW_SetArrayOfReal(&Result, vect);

		//Result.kind = VALUE_REAL;
		//Result.val = 1.0;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = 0.0;
	}
}

//
YYEXPORT void /*bool*/ steam_image_get_rgba(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(steam_image_id img, gml_buffer dest_buf) 
{
	int img = (int)YYGetReal(arg, 0);
	int gml_buf = (int)YYGetReal(arg, 1);
	int size = (int)YYGetReal(arg, 2);

	if (gml_buf >= 0)
	{
		char* data = new char[size];
		if(SteamUtils()->GetImageRGBA(img, (uint8*)data, size))
		{
			BufferWriteContent(gml_buf, 0, data, size);

			Result.kind = VALUE_BOOL;
			Result.val = 1.0;
		}
		else
		{
			Result.kind = VALUE_REAL;
			Result.val = 0.0;
		}
	}
}

YYEXPORT void /*bool*/ steam_image_get_bgra(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(steam_image_id img, gml_buffer dest_buf) 
{
	int img = (int)YYGetReal(arg, 0);
	int gml_buf = (int)YYGetReal(arg, 1);
	int size = (int)YYGetReal(arg, 2);
	
	if (gml_buf >= 0)
	{
		char* data = new char[size];

		if (SteamUtils()->GetImageRGBA(img, (uint8*)data, size)) {
			auto cols = (uint32*)data;
			auto count = (size_t)(size >> 2);
#ifdef OS_Windows
			std::transform(std::execution::par_unseq, cols, cols + count, cols, [](uint32 col) {
				return (col & 0xFF00FF00u) | ((col & 0xFF) << 16) | ((col & 0xFF0000) >> 16);
			});
#else
			for (size_t i = 0; i < count; i++) {
				auto col = cols[i];
				cols[i] = (col & 0xFF00FF00u) | ((col & 0xFF) << 16) | ((col & 0xFF0000) >> 16);
			}

#endif
			BufferWriteContent(gml_buf, 0, data, size);
			Result.kind = VALUE_REAL;
			Result.val = 1.0;
		}
		else
		{
			Result.kind = VALUE_REAL;
			Result.val = 0.0;
		}
	}
}
#pragma endregion
