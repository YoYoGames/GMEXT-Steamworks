
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"


//#include "Files/IO/LoadSave.h"

class ScreenshotCallbacks
{
public:

	ScreenshotCallbacks() :	m_CallbackScreenshotRequest(this,&ScreenshotCallbacks::OnScreenshotRequest),m_bScreenShotRequested(false){}


	void OnScreenshotRequest( ScreenshotRequested_t *pCallback )
	{
 		m_bScreenShotRequested = true; // set flag, to be poled by game
	}


	CCallback<ScreenshotCallbacks, ScreenshotRequested_t, false>	m_CallbackScreenshotRequest;

	bool m_bScreenShotRequested;
};


//...have a bad feeling about this...constructor registers callback before steam api initialised?
static ScreenshotCallbacks*		m_pScreenshotCallback;

void Steam_Screenshots_Init()
{
	m_pScreenshotCallback = new ScreenshotCallbacks();
	// tell steam we're handling screenshots, not the steam overlay (which we're not using) 
	SteamScreenshots()->HookScreenshots( true );
}

void Steam_Screenshots_Shutdown( void )
{
	delete m_pScreenshotCallback;
	m_pScreenshotCallback = NULL;
}


///	\brief	Should be polled by game every frame. Has player pressed
///			Steam's 'screenshot key'?
YYEXPORT void /*double*/ steam_is_screenshot_requested(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( void )/*Steam_Screenshots_IsScreenshotRequested*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;

	if( m_pScreenshotCallback->m_bScreenShotRequested )
	{
		m_pScreenshotCallback->m_bScreenShotRequested = false; // reset flag
		Result.val = 1;
		return;
	}
	Result.val = 0;
}


///	\brief	Let steam know the path / dimensions of screenshot to be added to steam screenshot library
YYEXPORT void /*double*/ steam_send_screenshot(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pFilePathName, double width, double height )/*Steam_Screenshots_SendScreenshotToSteam*/
{
	const char* pFilePathName = YYGetString(arg, 0);
	double width = YYGetReal(arg,1);
	double height = YYGetReal(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//i guess we should expand the path to look in save data/bundle?
	bool bFoundFile = false;
	char filename[ 1024 ];
	if (g_pYYRunnerInterface->SaveFileExists( (char*)pFilePathName ))
	{
		g_pYYRunnerInterface->SaveFileName( filename, sizeof(filename), pFilePathName );
		bFoundFile = true;
	} 
	else if (g_pYYRunnerInterface->BundleFileExists( (char*)pFilePathName ))
	{
		g_pYYRunnerInterface->BundleFileName( filename, sizeof(filename), pFilePathName );
		bFoundFile = true;
	}
	
	Result.kind = VALUE_REAL;

	if( bFoundFile )
	{
		ScreenshotHandle handle = SteamScreenshots()->AddScreenshotToLibrary( filename, 0, (int)width, (int)height );	
		Result.val = handle; // > 0 == success
		return;
	}
	//DebugConsoleOutput("steam_send_screenshot: failed to find file %s\n", pFilePathName );
	Result.val = -1;
}

