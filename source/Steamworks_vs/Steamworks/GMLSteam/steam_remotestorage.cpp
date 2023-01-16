
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"


//#include "yoyo_types.h"
//#include <MemoryManager.h>
//#include <stdio.h>
//#include "Files/Graphics/Graphics_Support.h"
//#include <Files/Base/Console.h> 
//#include "Files/IO/LoadSave.h"

void OnFileShareResult(RemoteStorageFileShareResult_t *pCallback, bool bIOFailure );

class RemoteStorageCallbacks;
static RemoteStorageCallbacks*		mpRemoteStorageCallback;
static bool	mbWorkshopPublishInProgress=false;
static bool mbWorkshopPublishFailed=false;
static int mFileShareCount=0;
static const char* mpWSFilename;
static const char* mpWSPreview;
static const char* mpWSTitle;
static const char* mpWSDesc;

class RemoteStorageCallbacks
{
public:

	RemoteStorageCallbacks()  { }

	  void	SetWorkshopPublishCallback ( SteamAPICall_t apicall )
	  {
		  m_SteamCallResultWorkshopPublish.Set(apicall, this, &RemoteStorageCallbacks::OnWorkshopPublish);
	  }

	  void	OnWorkshopPublish( RemoteStoragePublishFileResult_t *pCallback,	bool bIOFailure )
	  {
		  if (( pCallback->m_eResult == k_EResultOK ) && ( bIOFailure != true ))
		  {
			 DebugConsoleOutput("workshop publish success\n");
		  }
		  else
		  {
			  //DebugConsoleOutput("Error publishing to workshop - error code %d\n", pCallback->m_eResult);
		  }
		  mbWorkshopPublishInProgress=false; //publish complete
	  }

	  CCallResult<RemoteStorageCallbacks, RemoteStoragePublishFileResult_t>		m_SteamCallResultWorkshopPublish;
};

class CFileShareResultHandler
{
public:
	CCallResult<CFileShareResultHandler,  RemoteStorageFileShareResult_t>		m_SteamCallResultFileShare;

	//specifically for workshop publish ( which requires files to be shared 1st )
	void	SetCallResultWorkshopShare ( SteamAPICall_t apicall )
	{
		m_SteamCallResultFileShare.Set(apicall,this,&CFileShareResultHandler::OnFileShareWorkshop);
	}

	//regular file share callback ( just displays result status )
	void	SetCallResultFileShare( SteamAPICall_t apicall )
	{
		m_SteamCallResultFileShare.Set(apicall, this, &CFileShareResultHandler::OnFileShare );
	}

	void	OnFileShare( RemoteStorageFileShareResult_t *pCallback, bool bIOFailure  )
	{
		if( bIOFailure )
		{
			DebugConsoleOutput("File share failed : IO Failure\n");
		}
		else if( pCallback->m_eResult != k_EResultOK)
		{
			//DebugConsoleOutput("File share failed with error: %d\n", pCallback->m_eResult );
		}
		else
		{
			DebugConsoleOutput("File share success\n");
		}
	}

	void	OnFileShareWorkshop(RemoteStorageFileShareResult_t *pCallback, bool bIOFailure )
	{
		OnFileShareResult( pCallback, bIOFailure );
		//finished with handler, free & deregister
		delete this;
	}
};

YYEXPORT void /*double*/ steam_is_cloud_enabled_for_app(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( void )/*Steam_RemoteStorage_IsCloudEnabledForApp*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = SteamRemoteStorage()->IsCloudEnabledForApp() ? 1.0 : 0.0;
}

YYEXPORT void /*double*/ steam_is_cloud_enabled_for_account(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( void )/*Steam_RemoteStorage_IsCloudEnabledForAccount*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = SteamRemoteStorage()->IsCloudEnabledForAccount() ? 1.0 : 0.0;
}

YYEXPORT void /*double*/ steam_file_persisted(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pFilename )/*Steam_RemoteStorage_FilePersisted*/
{
	const char* pFilename = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = SteamRemoteStorage()->FilePersisted(pFilename) ? 1.0 : 0.0;
}

YYEXPORT void /*double*/ steam_get_quota_total(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( void )/*Steam_RemoteStorage_GetQuotaTotal*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	/*int32 totalBytes;
	int32 availableBytes;*/

	uint64 totalBytes;
	uint64 availableBytes;

	SteamRemoteStorage()->GetQuota(&totalBytes,&availableBytes);

	Result.kind = VALUE_REAL;
	Result.val = (double)totalBytes;
}

YYEXPORT void /*double*/ steam_get_quota_free(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( void )/*Steam_RemoteStorage_GetQuotaFree*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//int32 totalBytes;
	//int32 availableBytes;

	uint64 totalBytes;
	uint64 availableBytes;

	SteamRemoteStorage()->GetQuota(&totalBytes,&availableBytes);

	Result.kind = VALUE_REAL;
	Result.val = (double)availableBytes;
}


double steam_file_write_internal( const char* filename, const char* pData, double size )/*Steam_RemoteStorage_FileWrite*/
{

	if (!steam_is_initialised)
	{
		return 0.0;
	}

	SteamRemoteStorage()->FileForget(filename);	//what is the point of this? file will be remembered again when we write it?
	
	if ( SteamRemoteStorage()->FileWrite(filename,pData,(int32)size) == true )
	{
		SteamRemoteStorage()->SetSyncPlatforms(filename,k_ERemoteStoragePlatformAll);
		return 1.0;
	}
	return 0.0;
}

YYEXPORT void /*double*/ steam_file_write(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* filename, const char* pData, double size )/*Steam_RemoteStorage_FileWrite*/
{
	const char* filename = YYGetString(arg, 0);
	const char* pData = YYGetString(arg, 1);
	double size = YYGetReal(arg, 2);

	Result.kind = VALUE_REAL;
	Result.val = steam_file_write_internal(filename, pData, size);
}

//write contents of local file to steam remote storage file
YYEXPORT void /*double*/ steam_file_write_file(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pszSteamFilename, const char* pszLocalFilename )/*Steam_RemoteStorage_FileWriteFile*/
{
	const char* pszSteamFilename = YYGetString(arg, 0);
	const char* pszLocalFilename = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//find local file in bundle or save data
	bool bFoundFile = false;
	char filename[ 1024 ];
	if (g_pYYRunnerInterface->SaveFileExists( (char*)pszLocalFilename ))
	{
		g_pYYRunnerInterface->SaveFileName( filename, sizeof(filename), pszLocalFilename );
		bFoundFile = true;
	} 
	else if (g_pYYRunnerInterface->BundleFileExists( (char*)pszLocalFilename ))
	{
		g_pYYRunnerInterface->BundleFileName( filename, sizeof(filename), pszLocalFilename );
		bFoundFile = true;
	}

	Result.kind = VALUE_REAL;
	
	
	if( !bFoundFile )
	{
		//DebugConsoleOutput("Failed to find local file %s\n", pszLocalFilename );
		Result.val = 0.0;
		return;
	}
	
	FILE* pFile = fopen(filename, "rb");// g_pYYRunnerInterface->FileOpen(filename, "rb");
	if( pFile==NULL ){
		//Error_Show_Action(STRLIT_0408, false);
		DebugConsoleOutput("ERROR!!! :: Failed to open file");
		Result.val = 0.0;
		return;
	}

	//read the file
	int fileSize=0;
	fseek( pFile, 0, SEEK_END );
	fileSize = (int)ftell( pFile ); // get file size
	fseek( pFile, 0, SEEK_SET ); // set it back to where it was
	
	char* pBuffer = (char*)g_pYYRunnerInterface->YYAlloc(fileSize + 1);// , __FILE__, __LINE__ );
	fread(pBuffer, 1, fileSize, pFile );
	pBuffer[fileSize] = 0;
	//close the file
	fclose(pFile);

	double res= steam_file_write_internal/*Steam_RemoteStorage_FileWrite*/( pszSteamFilename, pBuffer, fileSize );
	
	g_pYYRunnerInterface->YYFree(pBuffer);
	Result.val = res;
}


YYEXPORT void /*const char**/ steam_file_read(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* filename )/*Steam_RemoteStorage_FileRead*/
{
	const char* filename = YYGetString(arg,0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	if( SteamRemoteStorage()->FileExists(filename) == true )
	{
		int32 size = SteamRemoteStorage()->GetFileSize(filename);
		
		if ( size > 0 )
		{
			void* filedata = g_pYYRunnerInterface->YYAlloc(size + 1);// , __FILE__, __LINE__  );
			if ( SteamRemoteStorage()->FileRead(filename, filedata ,size) == size )
			{
				char* pStringData = (char*)filedata;
				pStringData[size]=0;	//null terminate since returned as string
				YYCreateString(&Result, (const char*)filedata);
				return;
			}
		}
	}
	else {
		DebugConsoleOutput("File read failed: file does not exist\n");
	}

	YYCreateString(&Result, "");
}

YYEXPORT void /*double*/ steam_file_delete(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pFilename )/*Steam_RemoteStorage_FileDelete*/
{
	const char* pFilename = YYGetString(arg,0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if ( SteamRemoteStorage()->FileDelete(pFilename) == true )
	{
		Result.val = 1.0;
		return;
	}

	Result.val = 0.0;
}

YYEXPORT void /*double*/ steam_file_exists(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pFilename )/*Steam_RemoteStorage_FileExists*/
{
	const char* pFilename = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if ( SteamRemoteStorage()->FileExists(pFilename) == true )
	{
		Result.val = 1.0;
		return;
	}

	Result.val = 0.0;
}

YYEXPORT void /*double*/ steam_file_size(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pFilename )/*Steam_RemoteStorage_FileSize*/
{
	const char* pFilename = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = SteamRemoteStorage()->GetFileSize(pFilename);
}


YYEXPORT void /*double*/ steam_file_share(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( const char* pFilename )/*Steam_RemoteStorage_FileShare*/
{
	const char* pFilename = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;

	if( !SteamUser()->BLoggedOn() )
	{
		DebugConsoleOutput("File share failed: must be logged on\n");
		Result.val = 0;
		return;
	}
	
	if( !SteamRemoteStorage()->FileExists(pFilename) )
	{
		Result.val = 0;
		//DebugConsoleOutput("File share failed: \"%s\" does not exist, must write first\n");
		return;
	}

	//DebugConsoleOutput("Uploading %s to cloud...\n", pFilename);
	SteamAPICall_t hSteamAPICall =  SteamRemoteStorage()->FileShare(pFilename);
	//atm just displaying result status in call result
	CFileShareResultHandler* pHandler = new CFileShareResultHandler();
	pHandler->SetCallResultFileShare( hSteamAPICall );
	Result.val = 1.0;
	return;
}

double Steam_RemoteStorage_PublishWorkshopFile( const char* pFilename, const char* pPreviewImg, const char* pTitle, const char* pDesc )
{
	//workshop publish requires a few steps-from steam docs -
	//To share content, the file must first be written into the Cloud with FileWrite
	//Normally, files are written to the cloud when your application exits, but you'll want to upload them right away to publish them. 
	//To do that, call SteamAPICall_t FileShare( const char *pchFile ) and then register a callback to check the result of the call, which will return a RemoteStorageFileShareResult_t struct
	//Once the file has been written to the cloud, call PublishWorkshopFile
	//The pchFile must be the filename that was provided in the FileWrite call. In additional to the primary file, a preview image can be provided (Remember to call FileWrite on the preview file first!)


	//i) user must first call FileWrite on files to share; (workshop file & preview if required)
	//ii)do immediate upload to cloud with FileShare(async), return
	
	//iii)when we get success callbacks (files uploaded to cloud), call PublishWorkshopFile
	
	//-do we need to return success/fail to user via async event...?
	
	//!need to guard against multiple publish calls before current has completed...
	if( mbWorkshopPublishInProgress )
	{
		DebugConsoleOutput("Workshop publish already in progress...\n");
		return 0;
	}
	
	//i) user must first call FileWrite on files to share; (workshop file & preview if required)
	if( !SteamRemoteStorage()->FileExists(pFilename) )
	{
		//DebugConsoleOutput("Write file \"%s\" to remote storage first\n", pFilename );
		return 0;
	}
	bool bPreview = ( strlen(pPreviewImg)>0 );

	if( bPreview && !SteamRemoteStorage()->FileExists(pPreviewImg) )
	{
		//DebugConsoleOutput("Write file \"%s\" to remote storage first\n", pPreviewImg );
		return 0;
	}

	//must be logged on to steam or fileshare will fail
	if( !SteamUser()->BLoggedOn() )
	{
		//DebugConsoleOutput("Workshop publish error - user must be logged on\n");
		return 0;
	}
	

	//DebugConsoleOutput("workshop publish - uploading to cloud...\n");
	SteamAPICall_t hSteamAPICall = SteamRemoteStorage()->FileShare(pFilename);
	CFileShareResultHandler* pHandler = new CFileShareResultHandler();
	pHandler->SetCallResultWorkshopShare( hSteamAPICall);
	mFileShareCount = 1;

	if( bPreview )
	{
		hSteamAPICall = SteamRemoteStorage()->FileShare(pPreviewImg);
		pHandler = new CFileShareResultHandler();
		pHandler->SetCallResultWorkshopShare( hSteamAPICall);
		++mFileShareCount;
	}
	mbWorkshopPublishInProgress = true;
	mbWorkshopPublishFailed=false;
	
	//store details to publish on file share callback(s) received
	if (mpWSFilename != NULL) g_pYYRunnerInterface->YYFree(mpWSFilename);
	mpWSFilename = g_pYYRunnerInterface->YYStrDup( pFilename );

	if (mpWSPreview != NULL) g_pYYRunnerInterface->YYFree(mpWSPreview);
	mpWSPreview = g_pYYRunnerInterface->YYStrDup( pPreviewImg );

	if (mpWSTitle != NULL) g_pYYRunnerInterface->YYFree(mpWSTitle);
	mpWSTitle = g_pYYRunnerInterface->YYStrDup( pTitle );

	if (mpWSDesc != NULL) g_pYYRunnerInterface->YYFree(mpWSDesc);
	mpWSDesc = g_pYYRunnerInterface->YYStrDup( pDesc );
	
	//SteamAPICall_t hSteamAPICall = SteamRemoteStorage()->PublishWorkshopFile(pFilename,pPreviewImg,SteamUtils()->GetAppID(),pTitle,pDesc,k_ERemoteStoragePublishedFileVisibilityPublic,NULL,k_EWorkshopFileTypeCommunity);
	//gRemoteStorageCallback.SetWorkshopPublishCallback(hSteamAPICall);
	return 1.0;
}

void OnFileShareResult(RemoteStorageFileShareResult_t *pCallback, bool bIOFailure )
{
	if( pCallback->m_eResult != k_EResultOK || bIOFailure )
	{
		if(bIOFailure)
		{
			DebugConsoleOutput("File share failed: IO Failure\n");
		} else {
			//DebugConsoleOutput("File share failed with error: %d\n", pCallback->m_eResult );
		}
		mbWorkshopPublishFailed=true;	//...
	}
	else
	{
		DebugConsoleOutput("File share success\n");
	}
	--mFileShareCount;
	if( mFileShareCount <=0 )
	{
		//all file shares returned (success or fail)
		if(mbWorkshopPublishFailed)
		{
			//we can't publish if any of the file shares failed
			mbWorkshopPublishInProgress=false;
		}
		else
		{
			//file shares succeeded, proceed with publish
			SteamAPICall_t hSteamAPICall = SteamRemoteStorage()->PublishWorkshopFile(mpWSFilename,mpWSPreview,SteamUtils()->GetAppID(),mpWSTitle,mpWSDesc,k_ERemoteStoragePublishedFileVisibilityPublic,NULL,k_EWorkshopFileTypeCommunity);
			mpRemoteStorageCallback->SetWorkshopPublishCallback(hSteamAPICall);
		}
	}
}

void Steam_RemoteStorage_Init()
{
	mpRemoteStorageCallback = new RemoteStorageCallbacks();
	mbWorkshopPublishInProgress = false;
}

void Steam_RemoteStorage_Shutdown()
{
	delete mpRemoteStorageCallback;
	mpRemoteStorageCallback = NULL;

	if( mpWSFilename != NULL ) g_pYYRunnerInterface->YYFree( mpWSFilename);
	if( mpWSPreview != NULL ) g_pYYRunnerInterface->YYFree(mpWSPreview);
	if( mpWSTitle != NULL ) g_pYYRunnerInterface->YYFree(mpWSTitle);
	if( mpWSDesc != NULL ) g_pYYRunnerInterface->YYFree(mpWSDesc);

	mpWSFilename = NULL;
	mpWSPreview = NULL;
	mpWSTitle = NULL;
	mpWSDesc = NULL;
}

