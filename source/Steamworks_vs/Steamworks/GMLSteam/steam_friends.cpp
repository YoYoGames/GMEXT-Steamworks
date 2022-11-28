
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"


//#include "Files/IO/LoadSave.h"
//#include "Files/Support/Support_Data_Structures.h"

//extern "C" void dsMapAddInt64(int _dsMap, char* _key, int64 _value);
//extern void CreateAsynEventWithDSMap(int dsmapindex, int event_index);

enum eOverlayType
{
	eOV_Friends = 0,
	eOV_Community,
	eOV_Players,
	eOV_Settings,
	eOV_OfficialGameGroup,
	eOV_Achievements,
	eOV_NumOverlays
};

static const char* s_pszOverlayNames[] = 
{	"Friends",	// - opens the Steam Friends dialog
	"Community",	// - opens the Steam Community web page
	"Players",		//- opens the list of recently-played with users
	"Settings",		// - opens the Steam overlay settings dialog
	"OfficialGameGroup", // - opens the Steam Community web browser to the official game group for this game
	"Achievements"		// - opens the Steam Community web browser to the achievements stats for this game
};

static void SendPersonaNameAsyncEvent( int _asyncId, uint64 _steamId, const char* pszPersonaName );

class CSteamFriendsCallbacks
{
public:

	CSteamFriendsCallbacks()
		:	m_CallbackOverlayActivated(this,&CSteamFriendsCallbacks::OnGameOverlayActivated),
			m_bOverlayActivated(false)
			{}


	void OnGameOverlayActivated( GameOverlayActivated_t *callback )
	{
		if ( callback->m_bActive )	
		{
			m_bOverlayActivated=true;
			DebugConsoleOutput("Steam overlay now active\n" );
		}
		else {
			m_bOverlayActivated=false;
			DebugConsoleOutput("Steam overlay now inactive\n" );
		}
	}

	CCallback<CSteamFriendsCallbacks, GameOverlayActivated_t, false>	m_CallbackOverlayActivated;
	
	bool m_bOverlayActivated;
};

class CPersonaStateChangeListener
{
public:
	int			m_asyncId;
	uint64	m_steamId;
	CCallback<CPersonaStateChangeListener, PersonaStateChange_t,false> m_CallbackPersonaStateChanged;

	CPersonaStateChangeListener( int _asyncId, CSteamID _steamId)
		: m_asyncId(_asyncId),
		m_CallbackPersonaStateChanged(this,&CPersonaStateChangeListener::OnPersonaStateChanged)
	{
		m_steamId = _steamId.ConvertToUint64();
	}

	void OnPersonaStateChanged( PersonaStateChange_t* callback )
	{
		//DebugConsoleOutput("OnPersonaStateChanged:%lld\n", callback->m_ulSteamID );
		if( callback->m_ulSteamID == m_steamId )
		{
			CSteamID steamId(m_steamId );
			const char* pszName = SteamFriends()->GetFriendPersonaName( steamId );
			SendPersonaNameAsyncEvent(m_asyncId, m_steamId, pszName );
			delete this;
		}
	}
};


//const char			gUnknownString[] = "Unknown";//redefinition
static CSteamFriendsCallbacks*	m_pFriendsCallback=NULL;


YYEXPORT void /*double*/ steam_activate_overlay(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( int iOverlay)/*Steam_Friends_ActivateGameOverlay*/
{
	int iOverlay = (int)YYGetReal(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	
	if( SteamFriends()!=NULL)
	{
		if( iOverlay>=0 && iOverlay < eOV_NumOverlays )
		{
			const char* pszOverlayName = s_pszOverlayNames[iOverlay];
			SteamFriends()->ActivateGameOverlay( pszOverlayName );
			Result.val = 1;
			return;
		}
	}
	Result.val = 0;
}

YYEXPORT void /*const char**/ steam_get_persona_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_Friends_GetPersonaName*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	if ( SteamFriends()!=NULL)
	{
		YYCreateString(&Result, SteamFriends()->GetPersonaName());
		return;
	}
	YYCreateString(&Result, "");
}

YYEXPORT void /*double*/ steam_is_overlay_enabled(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_Utils_IsOverlayEnabled*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;

	if ( SteamUtils() != NULL )
	{
		if ( SteamUtils()->IsOverlayEnabled() == true )
		{
			Result.val = 1.0;
			return;
		}
	}
	Result.val = 0.0;
}

YYEXPORT void /*double*/ steam_is_overlay_activated(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_Friends_IsOverlayActive*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if( m_pFriendsCallback ) 
	{
		if( m_pFriendsCallback->m_bOverlayActivated )
		{
			Result.val = 1.0;
			return;
		}
	}
	Result.val = 0.0;
}

YYEXPORT void /*double*/ steam_activate_overlay_browser(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pszUrl )/*Steam_Friends_ActivateOverlayBrowser*/
{
	const char* pszUrl = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	SteamFriends()->ActivateGameOverlayToWebPage( pszUrl );

	Result.kind = VALUE_REAL;
	Result.val = 1.0;
}

YYEXPORT void /*double*/ steam_activate_overlay_user(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pszDialog, int64 _steamId )/*Steam_Friends_ActivateOverlayUser*/
{
	const char* pszDialog = YYGetString(arg, 0);
	int64 _steamId = YYGetInt64(arg, 1);
	
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	CSteamID steamId( (uint64)_steamId);
	SteamFriends()->ActivateGameOverlayToUser(pszDialog, steamId );

	Result.kind = VALUE_REAL;
	Result.val = 1.0;
}

YYEXPORT void /*double*/ steam_activate_overlay_store(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( double _appId)/*Steam_Friends_ActivateOverlayStore*/
{
	double _appId = YYGetReal(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	SteamFriends()->ActivateGameOverlayToStore( (AppId_t)_appId, k_EOverlayToStoreFlag_None );

	Result.kind = VALUE_REAL;
	Result.val = 1.0;
}


static void SendPersonaNameAsyncEvent( int _asyncId, uint64 _steamId, const char* pszPersonaName )
{
	if (!steam_is_initialised)
	{
		return;
	}

	//DebugConsoleOutput("SendPersonaNameAsyncEvent:%lld %s\n", _steamId, pszPersonaName );

	int dsMapIndex = CreateDsMap( 3,
		"id", (double)(_asyncId), NULL,
		"event_type", (double)0.0, "user_persona_name",
		"persona_name", (double)0.0, pszPersonaName );

	g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "steamid", _steamId);

	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

YYEXPORT void /*double*/ steam_get_user_persona_name(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( int64 _steamId )/*Steam_Friends_GetUserPersonaName*/
{
	int64 _steamId = YYGetInt64(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;

	CSteamID steamId( (uint64)_steamId);
	// if returns false, it means that we already have all the details about that user, and functions can be called immediately
	if( !SteamFriends()->RequestUserInformation( steamId, true ) )
	{
		const char* pszName = SteamFriends()->GetFriendPersonaName( steamId );
		int asyncId = getAsyncRequestInd();
		SendPersonaNameAsyncEvent( asyncId, _steamId, pszName );
		Result.val = asyncId;
		return;
	}
	else
	{
		//if returns true, it means that data is being requested, and a PersonaStateChanged_t callback will be posted when it's retrieved
		int async_id = getAsyncRequestInd();
		//CPersonaStateChangeListener* pListener = new CPersonaStateChangeListener(async_id, steamId );
		Result.val = async_id;
		return;
	}

	
	Result.val = 1.0;
}

void Steam_Friends_Init()
{
	//(register callbacks?)
	m_pFriendsCallback = new CSteamFriendsCallbacks();
}

void Steam_Friends_Shutdown()
{
	if (!steam_is_initialised)
	{
		return;
	}


	//(register callbacks?)
	delete m_pFriendsCallback;
	m_pFriendsCallback = NULL;
}


