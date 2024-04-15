
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

#include <filesystem>
#include <string>
#include <vector>


//#include "Files/Function/Function_Data_Structures.h"
//#include "Files/Support/Support_Data_Structures.h"
//#include "Files/IO/LoadSave.h"
//#include <Files/Support/Support_File.h>

//------- steam ugc callbacks -------------------------
//callback handlers for item subscription, unsubscription, installation
void OnUgcFileSubscribed(RemoteStoragePublishedFileSubscribed_t* pCallback );
void OnUgcFileUnsubscribed(RemoteStoragePublishedFileUnsubscribed_t* pCallback );
void OnUgcItemInstalled(ItemInstalled_t* pCallback );
void AddWorkshopItemToWhitelist( PublishedFileId_t _pubFileId );

class CUGCCallbacks
{
public:

	CCallback<CUGCCallbacks, RemoteStoragePublishedFileSubscribed_t,false>		m_CallbackFileSubscribed;
	CCallback<CUGCCallbacks, RemoteStoragePublishedFileUnsubscribed_t,false>	m_CallbackFileUnsubscribed;
	CCallback<CUGCCallbacks, ItemInstalled_t,false>								m_CallbackItemInstalled;

	CUGCCallbacks():
	  m_CallbackFileSubscribed(this,&CUGCCallbacks::OnFileSubscribed),
	  m_CallbackFileUnsubscribed(this,&CUGCCallbacks::OnFileUnsubscribed),
	  m_CallbackItemInstalled(this,&CUGCCallbacks::OnItemInstalled)
	{
	}
	
	void OnFileSubscribed( RemoteStoragePublishedFileSubscribed_t* pCallback )
	{
		//the handler will be called for all item subscriptions regardless of the running application
		if( pCallback->m_nAppID == SteamUtils()->GetAppID() )
		{
			OnUgcFileSubscribed( pCallback );
		}
	}

	void OnFileUnsubscribed( RemoteStoragePublishedFileUnsubscribed_t* pCallback )
	{
		//the handler will be called for all item subscriptions regardless of the running application
		if( pCallback->m_nAppID == SteamUtils()->GetAppID() )
		{
			OnUgcFileUnsubscribed( pCallback );
		}
	}

	void OnItemInstalled( ItemInstalled_t* pCallback )
	{
		//the handler will be called for all item installations regardless of the running application
		if( pCallback->m_unAppID == SteamUtils()->GetAppID() )
		{
			OnUgcItemInstalled( pCallback );
		}
	}
};

static CUGCCallbacks* s_pUgcCallbacks = NULL;
void Steam_UGC_Init()
{

	//register for ugc callbacks
	s_pUgcCallbacks = new CUGCCallbacks();

	//get a list of all currently installed items for this appId, and add directory path for each to whitelist
	//...perhaps we could just add the parent directory, which is possibly the same for all workshop items for this app?

	if ( SteamUser()->BLoggedOn() )
	{
		DebugConsoleOutput("SteamUser()->BLoggedOn()");
		//extern uint64 Steam_User_GetSteamID();
		//int64 m_SteamIDLocalUser  = Steam_User_GetSteamID();
		//DebugConsoleOutput("Logged in steam user id %ld\n",m_SteamIDLocalUser);
	}


	if(SteamUGC()==NULL)
	{
		DebugConsoleOutput("SteamUGC is NULL, stopping init\n" );
		return;
	}
	


	uint32 numSub = SteamUGC()->GetNumSubscribedItems();
	//DebugConsoleOutput("Found %d subscribed items\n", numSub );
	if( numSub > 0 )
	{

		PublishedFileId_t* aPubFileIds = (PublishedFileId_t*)alloca( sizeof(PublishedFileId_t) * numSub );
		uint32 listSize = SteamUGC()->GetSubscribedItems( aPubFileIds, numSub );	//->all subscribed item PublishFileIDs

		for( uint32 i=0; i < listSize; ++i )
		{
			PublishedFileId_t pubFileId = aPubFileIds[ i ];
			AddWorkshopItemToWhitelist( pubFileId );
		}
	}
}

void Steam_UGC_Shutdown()
{
	delete s_pUgcCallbacks;
	s_pUgcCallbacks = NULL;
}

void OnUgcFileSubscribed(RemoteStoragePublishedFileSubscribed_t* pCallback )
{
	//User subscribed to a file for the app (from within the app or on the web)
	//DebugConsoleOutput("Steam UGC - an item was subscribed (%ld)\n", pCallback->m_nPublishedFileId );
	//send async event	
	int dsMapIndex = CreateDsMap( 1,
			"event_type", (double)0.0, "ugc_item_subscribed" );
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "published_file_id", pCallback->m_nPublishedFileId );
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

void OnUgcFileUnsubscribed(RemoteStoragePublishedFileUnsubscribed_t* pCallback )
{
	//User unsubscribed from a file for the app (from within the app or on the web)
	//DebugConsoleOutput("Steam UGC - an item was unsubscribed (%ld)\n", pCallback->m_nPublishedFileId );
	//send async event	
	int dsMapIndex = CreateDsMap( 1,
			"event_type", (double)0.0, "ugc_item_unsubscribed" );
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "published_file_id", pCallback->m_nPublishedFileId );
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

void OnUgcItemInstalled(ItemInstalled_t* pCallback )
{
	//a new Workshop item has been installed 
	//DebugConsoleOutput("SteamUGC - an item was installed (%x)\n", pCallback->m_nPublishedFileId );
	AddWorkshopItemToWhitelist( pCallback->m_nPublishedFileId );
	
	//will definitely want an async event for this chappy, i reckon
	int dsMapIndex = CreateDsMap( 1,
			"event_type", (double) 0.0, "ugc_item_installed");
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "published_file_id", pCallback->m_nPublishedFileId );

	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}


//const char* ExtractFilePath(const char* fn, bool preserve_last_slash)
//{
//	//const char* pLastSlash = utf8_strrchr(fn, '\\', '/');
//	std::string s = g_pYYRunnerInterface->YYStrDup(fn);
//	std::replace(s.begin(), s.end(), '\\', '/'); 
//	const char* pLastSlash = s.c_str();
//
//	char* ret = NULL;
//	if (pLastSlash != NULL) {
//		int len = pLastSlash - fn;
//		if (preserve_last_slash)
//			len++;
//		if (len > 0) {
//			ret = (char*)g_pYYRunnerInterface->YYAlloc(len + 1);
//			strncpy(ret, fn, len);
//			ret[len] = '\0';
//		} // end if
//	} // end if
//
//	if (ret == NULL) {
//		ret = (char*)g_pYYRunnerInterface->YYStrDup("");
//	} // end else
//
//	return ret;
//} // end ExtractFilePath

const char* ExtractFilePath(const char* fn)
{
    if (!fn || strlen(fn) == 0) {
        // Input string is empty or null.
        return g_pYYRunnerInterface->YYStrDup("");
    }

    std::string s = fn;
    std::size_t found = s.find_last_of("/\\");

    // Check if slash or backslash was found.
    if (found == std::string::npos) {
        // No path delimiter found, return an empty string.
        return g_pYYRunnerInterface->YYStrDup("");
    }

    std::string path = s.substr(0, found);
    return g_pYYRunnerInterface->YYStrDup(path.c_str());
}


//Check if folder has been added to whitelist, add if required
//-itemState is result of SteamUGC()->GetItemState
void AddFolderToWhitelistIfRequired( const char* pszFolder, uint32 itemState )
{
	//if k_EItemStateLegacyItem is set, pchFolder contains the path to the legacy file itself (not a folder)
	const char* pszFolderName = pszFolder;
	bool bLegacyItem = (itemState & k_EItemStateLegacyItem) != 0;
	if( bLegacyItem )
	{
		pszFolderName = ExtractFilePath(pszFolder/*,false*/);
	}
	
	//add path to load whitelist, if not already there
	if( !g_pYYRunnerInterface->WhitelistIsDirectoryIn( pszFolderName ) )
	{
		//DebugConsoleOutput("Adding Workshop Item to whitelist: %s\n", pszFolderName );
		g_pYYRunnerInterface->WhiteListAddTo( pszFolderName, true );
	}
}


void AddWorkshopItemToWhitelist( PublishedFileId_t _pubFileId )
{
	uint64 sizeOnDisk = 0;
	char pszFolder[1024];
	//bool bLegacyItem = false;
	uint32 timeStamp;
	uint32 itemState = SteamUGC()->GetItemState(_pubFileId );
	bool bResult = SteamUGC()->GetItemInstallInfo( _pubFileId, &sizeOnDisk, pszFolder, 1024, &timeStamp );
	if( bResult )
	{
		//the workshop item is installed 
		AddFolderToWhitelistIfRequired( pszFolder, itemState );
#if 0
		//TESTING - check files are accessable-
		void  F_DirectoryExists(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg);
		RValue res;
		RValue args[1];
		args[0].kind = VALUE_STRING;
		args[0].str = (char*)pszFolderName;
		F_DirectoryExists( res, NULL, NULL, 1, args );
		DebugConsoleOutput("Dir_exists(%s) = result=%d\n", pszFolderName, (int)res.val );
#endif
	}
}

//---- Steam UGC call result handlers------------------------
void OnUgcDownloadResult( RemoteStorageDownloadUGCResult_t* pCallback, bool bIOFailure, int _asyncId, const char* _pszDestFile );
void OnUgcCreateItemResult( CreateItemResult_t* pCallback, bool bIOFailure, int _asyncId );
void OnUgcSubmitItemUpdateResult( SubmitItemUpdateResult_t* pCallback, bool bIOFailure, int _asyncId );
void OnUgcSubscribeItemResult( RemoteStorageSubscribePublishedFileResult_t* pCallback, bool bIOFailure, int asyncId );
void OnUgcUnsubscribeItemResult( RemoteStorageUnsubscribePublishedFileResult_t* pCallback, bool bIOFailure, int asyncId );
void OnUgcRequestDetailsResult(SteamUGCRequestUGCDetailsResult_t* pCallback, bool bIOFailure, int asyncId);
void OnUgcRequestDeleteResult(DeleteItemResult_t* pCallback, bool bIOFailure, int asyncId);
void OnUgcQueryResult( SteamUGCQueryCompleted_t* pCallback, bool bIOFailure, int _asyncId );
void AddUGCDetailsToMap( SteamUGCDetails_t* pDetails, int dsMapIndex );

//CallResult handler for UGCDownload / RemoteStorageDownloadUGCResult_t
class CUGCDownloadResultHandler
{
public:
	CCallResult<CUGCDownloadResultHandler, RemoteStorageDownloadUGCResult_t>	m_SteamCallResultUGCDownload;
	int m_asyncId;
	char m_szDestFile[1024];

	CUGCDownloadResultHandler( int _asyncId, const char* _pszDestFile )
		: m_asyncId( _asyncId ) 
	{
		snprintf(m_szDestFile, 1024, "%s", _pszDestFile);
		m_szDestFile[1023]=0;
	}

	void SetCallResult( SteamAPICall_t apicall )
	{
		m_SteamCallResultUGCDownload.Set( apicall, this, &CUGCDownloadResultHandler::OnDownloadResult );
	}

	void OnDownloadResult( RemoteStorageDownloadUGCResult_t* pCallback, bool bIOFailure )
	{
		OnUgcDownloadResult( pCallback, bIOFailure, m_asyncId, m_szDestFile );
		delete this;	//delete the handler (unregisters)
	}
};

void OnUgcDownloadResult( RemoteStorageDownloadUGCResult_t* pCallback, bool bIOFailure, int _asyncId, const char* _pszDestFile )
{
	/*EResult m_eResult;				// The result of the operation.
	UGCHandle_t m_hFile;			// The handle to the file that was attempted to be downloaded.
	AppId_t m_nAppID;				// ID of the app that created this file.
	int32 m_nSizeInBytes;			// The size of the file that was downloaded, in bytes.
	char m_pchFileName[k_cchFilenameMax];		// The name of the file that was downloaded. 
	uint64 m_ulSteamIDOwner;		// Steam ID of the user who created this content.*/

	int result = (bIOFailure) ? 0 : pCallback->m_eResult;	

	//pCallback->m_nSizeInBytes - seems to be always 0 regardless of actual filesize, which is not a lot of help...
	int dsMapIndex = CreateDsMap( 5,
			"id", (double)_asyncId, NULL,
			"event_type", (double) 0.0, "ugc_download",
			"result", (double)result, NULL,
			"original_filename", (double)0.0, pCallback->m_pchFileName,
			"dest_filename", (double)0.0, _pszDestFile
			);
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "ugc_handle", pCallback->m_hFile );

	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}


//CallResult handler for CreateItemResult_t ---------------------------
class CCreateItemResultHandler
{
public:
	CCallResult<CCreateItemResultHandler, CreateItemResult_t>	m_SteamCallResultCreateItem;
	int m_asyncId;

	CCreateItemResultHandler( int _asyncId )
		: m_asyncId( _asyncId )
	{
	}

	void SetCallResult( SteamAPICall_t apicall )
	{
		m_SteamCallResultCreateItem.Set(apicall, this, &CCreateItemResultHandler::OnCreateItem);
	}

	void OnCreateItem( CreateItemResult_t* pCallback, bool bIOFailure )
	{
		OnUgcCreateItemResult( pCallback, bIOFailure, m_asyncId );
		delete this;	//delete the handler (unregisters)
	}
};

void OnUgcCreateItemResult( CreateItemResult_t* pCallback, bool bIOFailure, int _asyncId )
{
	/*struct CreateItemResult_t
{
	enum { k_iCallback = k_iClientUGCCallbacks + 3 };
	EResult m_eResult;
	PublishedFileId_t m_nPublishedFileId; // new item got this UGC PublishFileID
	bool m_bUserNeedsToAcceptWorkshopLegalAgreement;
};*/
	
	int result = (bIOFailure) ? 0 : pCallback->m_eResult;
	int dsMapIndex = CreateDsMap( 4,
			"id", (double)_asyncId, NULL,
			"event_type", (double) 0.0, "ugc_create_item",
			"result", (double)result, NULL,
			//"published_file_id", (double)pCallback->m_nPublishedFileId, NULL,
			"legal_agreement_required", (double)pCallback->m_bUserNeedsToAcceptWorkshopLegalAgreement, NULL 
			);

	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "published_file_id", pCallback->m_nPublishedFileId );

	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

// call result handler for SubmitItemUpdateResult_t -----------------
class CSubmitItemUpdateResultHandler
{
public:
	int m_asyncId;
	CCallResult<CSubmitItemUpdateResultHandler, SubmitItemUpdateResult_t>	m_SteamCallResultSubmitItem;

	CSubmitItemUpdateResultHandler( int _asyncId )
		: m_asyncId( _asyncId )
	{
	}

	void SetCallResult( SteamAPICall_t apicall )
	{
		m_SteamCallResultSubmitItem.Set(apicall, this, &CSubmitItemUpdateResultHandler::OnSubmitItem);
	}

	void OnSubmitItem( SubmitItemUpdateResult_t* pCallback, bool bIOFailure )
	{
		OnUgcSubmitItemUpdateResult( pCallback, bIOFailure, m_asyncId );
		delete this;	//delete the handler (unregisters)
	}
};

void OnUgcSubmitItemUpdateResult( SubmitItemUpdateResult_t* pCallback, bool bIOFailure, int _asyncId )
{
	/*struct SubmitItemUpdateResult_t
{
	enum { k_iCallback = k_iClientUGCCallbacks + 4 };
	EResult m_eResult;
	bool m_bUserNeedsToAcceptWorkshopLegalAgreement;
};*/
	int result = (bIOFailure) ? 0 : pCallback->m_eResult;

	int dsMapIndex = CreateDsMap( 4,
			"id", (double)_asyncId, NULL,
			"event_type", (double) 0.0, "ugc_update_item",
			"result", (double)result, NULL,
			"legal_agreement_required", (double)pCallback->m_bUserNeedsToAcceptWorkshopLegalAgreement, NULL 
			);

	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

//----- call result handler for RemoteStorageSubscribePublishedFileResult_t
class CSubscribeItemResultHandler
{
public:
	int m_asyncId;
	CCallResult<CSubscribeItemResultHandler, RemoteStorageSubscribePublishedFileResult_t>	m_SteamCallResultSubscribeItem;

	CSubscribeItemResultHandler( int _asyncId )
		: m_asyncId( _asyncId ) {}

	void SetCallResult( SteamAPICall_t apicall )
	{
		m_SteamCallResultSubscribeItem.Set(apicall, this, &CSubscribeItemResultHandler::OnSubscribeItem);
	}

	void OnSubscribeItem( RemoteStorageSubscribePublishedFileResult_t* pCallback, bool bIOFailure )
	{
		OnUgcSubscribeItemResult( pCallback, bIOFailure, m_asyncId );
		delete this;	//delete the handler (unregisters)
	}
};

void OnUgcSubscribeItemResult( RemoteStorageSubscribePublishedFileResult_t* pCallback, bool bIOFailure, int asyncId )
{
	int result = (bIOFailure) ? 0 : pCallback->m_eResult;	

	int dsMapIndex = CreateDsMap( 3,
			"id", (double)asyncId, NULL,
			"event_type", (double) 0.0, "ugc_subscribe_item",
			"result", (double)result, NULL
			//"published_filed_id", (double)pCallback->m_nPublishedFileId, NULL 
			);
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "published_file_id", pCallback->m_nPublishedFileId );


	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

//----- call result handler for RemoteStorageUnsubscribePublishedFileResult_t
class CUnsubscribeItemResultHandler
{
public:
	int m_asyncId;
	CCallResult<CUnsubscribeItemResultHandler, RemoteStorageUnsubscribePublishedFileResult_t>	m_SteamCallResultUnsubscribeItem;

	CUnsubscribeItemResultHandler( int _asyncId )
		: m_asyncId( _asyncId ) {}

	void SetCallResult( SteamAPICall_t apicall )
	{
		m_SteamCallResultUnsubscribeItem.Set(apicall, this, &CUnsubscribeItemResultHandler::OnUnsubscribeItem);
	}

	void OnUnsubscribeItem( RemoteStorageUnsubscribePublishedFileResult_t* pCallback, bool bIOFailure )
	{
		OnUgcUnsubscribeItemResult( pCallback, bIOFailure, m_asyncId );
		delete this;	//delete the handler (unregisters)
	}
};

void OnUgcUnsubscribeItemResult( RemoteStorageUnsubscribePublishedFileResult_t* pCallback, bool bIOFailure, int asyncId )
{
	int result = (bIOFailure) ? 0 : pCallback->m_eResult;	

	int dsMapIndex = CreateDsMap( 3,
			"id", (double)asyncId, NULL,
			"event_type", (double) 0.0, "ugc_unsubscribe_item",
			"result", (double)result, NULL
			//"published_filed_id", (double)pCallback->m_nPublishedFileId, NULL 
			);
	
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "published_file_id", pCallback->m_nPublishedFileId );


	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

// ---------- call result handler for RequestUGCDetails / SteamUGCRequestUGCDetailsResult_t -----------
class CRequestUGCDetailsResultHandler
{
public:
	int m_asyncId;
	CCallResult<CRequestUGCDetailsResultHandler, SteamUGCRequestUGCDetailsResult_t>	m_SteamCallResultRequestUGCDetails;

	CRequestUGCDetailsResultHandler(int _asyncId)
		: m_asyncId(_asyncId) {}

	void SetCallResult(SteamAPICall_t apicall)
	{
		m_SteamCallResultRequestUGCDetails.Set(apicall, this, &CRequestUGCDetailsResultHandler::OnRequestDetails);
	}

	void OnRequestDetails(SteamUGCRequestUGCDetailsResult_t* pCallback, bool bIOFailure)
	{
		OnUgcRequestDetailsResult(pCallback, bIOFailure, m_asyncId);
		delete this;	//delete the handler (unregisters)
	}
};



void OnUgcRequestDetailsResult(SteamUGCRequestUGCDetailsResult_t* pCallback, bool bIOFailure, int asyncId)
{
	SteamUGCDetails_t* pDetails = &pCallback->m_details;
	int result = (bIOFailure) ? 0 : pDetails->m_eResult;
	int cached = (pCallback->m_bCachedData) ? 1 : 0;
	int dsMapIndex = CreateDsMap(4,
		"id", (double)asyncId, NULL,
		"event_type", (double)0.0, "ugc_item_details",
		"result", (double)result, NULL,
		"cached_data", (double)cached, NULL);

	if (result == k_EResultOK)
	{
		AddUGCDetailsToMap(pDetails, dsMapIndex);
	}

	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}


////////////////////////////////////////////////////////////////////
class CRequestUGCDeleteResultHandler
{
public:
	int m_asyncId;
	CCallResult<CRequestUGCDeleteResultHandler, DeleteItemResult_t>	m_SteamCallResultRequestUGCDelete;

	CRequestUGCDeleteResultHandler(int _asyncId)
		: m_asyncId(_asyncId) {}

	void SetCallResult(SteamAPICall_t apicall)
	{
		m_SteamCallResultRequestUGCDelete.Set(apicall, this, &CRequestUGCDeleteResultHandler::OnRequestDelete);
	}

	void OnRequestDelete(DeleteItemResult_t* pCallback, bool bIOFailure)
	{
		OnUgcRequestDeleteResult(pCallback, bIOFailure, m_asyncId);
		delete this;	//delete the handler (unregisters)
	}
};


void OnUgcRequestDeleteResult(DeleteItemResult_t* pCallback, bool bIOFailure, int asyncId)
{
	int result = (bIOFailure) ? 0 : pCallback->m_eResult;
	PublishedFileId_t publishField = pCallback->m_nPublishedFileId;

	int dsMapIndex = CreateDsMap(3,
		"id", (double)asyncId, NULL,
		"event_type", (double)0.0, "ugc_item_delete",
		"result", (double)result, NULL);// ,
		//"cached_data", (double)publishField, NULL);

	g_pYYRunnerInterface->DsMapAddInt64(dsMapIndex, "pubFileId", publishField);

	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

///////////////////////////////////////


//fill map with SteamUGCDetails_t* data...ugh
void AddUGCDetailsToMap( SteamUGCDetails_t* pDetails, int dsMapIndex )
{
	// Details for a single published file/UGC
	/*struct SteamUGCDetails_t
	{
		PublishedFileId_t m_nPublishedFileId;
		EResult m_eResult;												// The result of the operation.	
		EWorkshopFileType m_eFileType;									// Type of the file
		AppId_t m_nCreatorAppID;										// ID of the app that created this file.
		AppId_t m_nConsumerAppID;										// ID of the app that will consume this file.
		char m_rgchTitle[k_cchPublishedDocumentTitleMax];				// title of document
		char m_rgchDescription[k_cchPublishedDocumentDescriptionMax];	// description of document
		uint64 m_ulSteamIDOwner;										// Steam ID of the user who created this content.
		uint32 m_rtimeCreated;											// time when the published file was created
		uint32 m_rtimeUpdated;											// time when the published file was last updated
		uint32 m_rtimeAddedToUserList;									// time when the user added the published file to their list (not always applicable)
		ERemoteStoragePublishedFileVisibility m_eVisibility;			// visibility
		bool m_bBanned;													// whether the file was banned
		bool m_bAcceptedForUse;											// developer has specifically flagged this item as accepted in the Workshop
		bool m_bTagsTruncated;											// whether the list of tags was too long to be returned in the provided buffer
		char m_rgchTags[k_cchTagListMax];								// comma separated list of all tags associated with this file	
		// file/url information
		UGCHandle_t m_hFile;											// The handle of the primary file
		UGCHandle_t m_hPreviewFile;										// The handle of the preview file
		char m_pchFileName[k_cchFilenameMax];							// The cloud filename of the primary file
		int32 m_nFileSize;												// Size of the primary file
		int32 m_nPreviewFileSize;										// Size of the preview file
		char m_rgchURL[k_cchPublishedFileURLMax];						// URL (for a video or a website)
		// voting information
		uint32 m_unVotesUp;												// number of votes up
		uint32 m_unVotesDown;											// number of votes down
		float m_flScore;												// calculated score
		uint32 m_unNumChildren;											// if m_eFileType == k_EWorkshopFileTypeCollection, then this number will be the number of children contained within the collection
	};*/

	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "published_file_id", pDetails->m_nPublishedFileId );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "result", (double)pDetails->m_eResult );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "file_type", pDetails->m_eFileType );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "creator_app_id", pDetails->m_nCreatorAppID );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "consumer_app_id", pDetails->m_nConsumerAppID );
	g_pYYRunnerInterface->DsMapAddString( dsMapIndex, "title", pDetails->m_rgchTitle );
	g_pYYRunnerInterface->DsMapAddString( dsMapIndex, "description", pDetails->m_rgchDescription );
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "steam_id_owner", pDetails->m_ulSteamIDOwner );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "time_created", pDetails->m_rtimeCreated );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "time_updated", pDetails->m_rtimeUpdated );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "time_added_to_user_list", pDetails->m_rtimeAddedToUserList );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "visibility", pDetails->m_eVisibility );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "banned", (pDetails->m_bBanned)? 1:0 );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "accepted_for_use", (pDetails->m_bAcceptedForUse)? 1:0 );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "tags_truncated", (pDetails->m_bTagsTruncated)? 1:0);

	RValue tags = { 0 };
	YYCreateArray(&tags, 0);
	_SW_SetArrayOfString(&tags, pDetails->m_rgchTags, ",");
	g_pYYRunnerInterface->DsMapAddRValue(dsMapIndex, "tags", &tags);

	//g_pYYRunnerInterface->DsMapAddString( dsMapIndex, "tags", pDetails->m_rgchTags );
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "handle_file", pDetails->m_hFile );
	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "handle_preview_file", pDetails->m_hPreviewFile );
	printf("pDetails->m_hPreviewFile: %llu\n", pDetails->m_hPreviewFile);
	g_pYYRunnerInterface->DsMapAddString( dsMapIndex, "filename", pDetails->m_pchFileName );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "file_size", pDetails->m_nFileSize );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "preview_file_size", pDetails->m_nPreviewFileSize );
	g_pYYRunnerInterface->DsMapAddString( dsMapIndex, "url", pDetails->m_rgchURL );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "votes_up", pDetails->m_unVotesUp );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "votes_down", pDetails->m_unVotesDown );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "score", pDetails->m_flScore );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "num_children", pDetails->m_unNumChildren );

	//additional, add owner account id - for eg user queries
	//SteamUser->GetSteamID().GetAccountID()
	CSteamID steamID = CSteamID( pDetails->m_ulSteamIDOwner );
	AccountID_t accountID = steamID.GetAccountID();
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "account_id_owner", accountID );

}

//----- call result handler for SendQueryUGCRequest / SteamUGCQueryCompleted_t
class CQueryUGCResultHandler
{
public:
	int m_asyncId;
	CCallResult<CQueryUGCResultHandler, SteamUGCQueryCompleted_t>	m_SteamCallResultUGCQuery;

	CQueryUGCResultHandler( int _asyncId )
		: m_asyncId( _asyncId ) {}

	void SetCallResult( SteamAPICall_t apicall )
	{
		m_SteamCallResultUGCQuery.Set(apicall, this, &CQueryUGCResultHandler::OnQueryResult);
	}

	void OnQueryResult( SteamUGCQueryCompleted_t* pCallback, bool bIOFailure )
	{
		OnUgcQueryResult( pCallback, bIOFailure, m_asyncId );
		delete this;	//delete the handler (unregisters)
	}
};

void OnUgcQueryResult( SteamUGCQueryCompleted_t* pCallback, bool bIOFailure, int _asyncId )
{
	/*struct SteamUGCQueryCompleted_t
	{
		enum { k_iCallback = k_iClientUGCCallbacks + 1 };
		UGCQueryHandle_t m_handle;
		EResult m_eResult;
		uint32 m_unNumResultsReturned;
		uint32 m_unTotalMatchingResults;
		bool m_bCachedData;	// indicates whether this data was retrieved from the local on-disk cache
	};*/

	int result = (bIOFailure) ? 0 : pCallback->m_eResult;	

	int dsMapIndex = CreateDsMap( 5,
			"id", (double)_asyncId, NULL,
			"event_type", (double) 0.0, "ugc_query",
			"result", (double)result, NULL,
			"num_results", (double)pCallback->m_unNumResultsReturned, NULL,
			"total_matching", (double)pCallback->m_unTotalMatchingResults, NULL
			);

	g_pYYRunnerInterface->DsMapAddInt64( dsMapIndex, "ugc_query_handle", pCallback->m_handle );
	g_pYYRunnerInterface->DsMapAddDouble( dsMapIndex, "cached_data", (pCallback->m_bCachedData)? 1:0 );

	if( result == k_EResultOK && pCallback->m_unNumResultsReturned > 0 )
	{
		//add list of dsMap for each result...
		int dsResultList = g_pYYRunnerInterface->DsListCreate();
		g_pYYRunnerInterface->DsMapAddList( dsMapIndex, "results_list", dsResultList );
		for( uint32 i=0; i < pCallback->m_unNumResultsReturned; ++i )
		{
			SteamUGCDetails_t ugcDetails;
			bool bOK = SteamUGC()->GetQueryUGCResult( pCallback->m_handle, i, &ugcDetails );
			if( bOK )
			{
				//create a map for this item and populate it
				int dsDetailsMap = CreateDsMap(0,0);
				AddUGCDetailsToMap( &ugcDetails, dsDetailsMap );
				//add to results list
				g_pYYRunnerInterface->DsListAddMap( dsResultList, dsDetailsMap );
			}
		}
	}
	//call bool ReleaseQueryUGCRequest( UGCQueryHandle_t handle ) to free up any memory allocated while querying or retrieving the results.
	SteamUGC()->ReleaseQueryUGCRequest( pCallback->m_handle );

	//return async event
	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);
}

///////////////////////////////////////

//---------------- gml interface -------------------------------------------------------------------------------------
//steam_ugc_download( ugc_handle, dest_filename )
YYEXPORT void /*double*/ steam_ugc_download(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcHandle, const char* pszDestFilename )/*Steam_Ugc_Download*/
{
	uint64 _ugcHandle = (uint64)YYGetInt64(arg, 0);
	const char* pszDestFilename = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	int  async_id= getAsyncRequestInd();
	char szDestFolder[2048];
	snprintf( szDestFolder, 2048, "%s%s", g_pYYRunnerInterface->FilePrePend(),pszDestFilename );
	
	CUGCDownloadResultHandler* pResultHandler = new CUGCDownloadResultHandler( async_id, pszDestFilename );
	//undocumented fn...is pchLocation a filename or directory? it's a path + filename
	printf("IN steam_ugc_download: %llu\n", _ugcHandle);
	//printf("Destination: "); printf(szDestFolder); printf("\n");
	SteamAPICall_t hSteamAPICall = SteamRemoteStorage()->UGCDownloadToLocation( (UGCHandle_t)_ugcHandle, szDestFolder, 0 );
	pResultHandler->SetCallResult( hSteamAPICall );

	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

//------------ ugc create, edit content -------------------------------------------
//steam_ugc_create_item( consumer_app_id, file_type )
//returns async event id...
YYEXPORT void /*int*/ steam_ugc_create_item(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint32 _consumerAppId, uint32 _fileType )/*Steam_Ugc_CreateItem*/
{
	uint32 _consumerAppId = YYGetUint32(arg, 0);
	uint32 _fileType = YYGetUint32(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	int  async_id= getAsyncRequestInd();

	//create a call result handler instance
	CCreateItemResultHandler* pResultHandler = new CCreateItemResultHandler( async_id );	
	SteamAPICall_t hSteamAPICall = SteamUGC()->CreateItem( (AppId_t)_consumerAppId, (EWorkshopFileType)_fileType);
	pResultHandler->SetCallResult( hSteamAPICall );

	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

//steam_ugc_start_item_update( consumer_app_id, published_file_id )
//returns UGCUpdateHandle_t
YYEXPORT void /*uint64*/ steam_ugc_start_item_update(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint32 _consumerAppId, uint64 _publishedFileId )/*Steam_Ugc_StartItemUpdate*/
{
	uint32 _consumerAppId = YYGetUint32(arg, 0);
	uint64 _publishedFileId = (uint64) YYGetInt64(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	UGCUpdateHandle_t handle = SteamUGC()->StartItemUpdate( (AppId_t)_consumerAppId, (PublishedFileId_t)_publishedFileId);
	Result.kind = VALUE_INT64;
	Result.v64 = handle;
}

//steam_ugc_submit_item_update( ugc_update_handle, change_note )
//return async event id
YYEXPORT void /*double*/ steam_ugc_submit_item_update(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(uint64 _ugcUpdateHandle, const char* _pszChangeNote)/*Steam_Ugc_SubmitItemUpdate*/
{
	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);
	const char* _pszChangeNote = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	int  async_id = getAsyncRequestInd();

	//create a call result handler instance
	CSubmitItemUpdateResultHandler* pResultHandler = new CSubmitItemUpdateResultHandler(async_id);
	SteamAPICall_t hSteamAPICall = SteamUGC()->SubmitItemUpdate((UGCUpdateHandle_t)_ugcUpdateHandle, _pszChangeNote);
	pResultHandler->SetCallResult(hSteamAPICall);

	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

//steam_ugc_set_item_title( ugc_update_handle, title)
YYEXPORT void /*double*/ steam_ugc_set_item_title(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcUpdateHandle, const char* pszTitle )/*Steam_Ugc_SetItemTitle*/
{
	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);
	const char* pszTitle = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetItemTitle( (UGCUpdateHandle_t)_ugcUpdateHandle, pszTitle );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1 : 0;
}

//steam_ugc_set_item_description( ugc_update_handle, description )
YYEXPORT void /*double*/ steam_ugc_set_item_description(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcUpdateHandle, const char* pszDesc )/*Steam_Ugc_SetItemDesc*/
{
	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);
	const char* pszDesc = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetItemDescription((UGCUpdateHandle_t)_ugcUpdateHandle, pszDesc );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1 : 0;
}

//steam_ugc_set_item_visibility(ugc_update_handle, visibility ) 
YYEXPORT void /*double*/ steam_ugc_set_item_visibility(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcUpdateHandle, uint32 _visibility )/*Steam_Ugc_SetItemVis*/
{
	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);
	uint32 _visibility = YYGetUint32(arg, 1);

	bool bResult = SteamUGC()->SetItemVisibility( (UGCUpdateHandle_t)_ugcUpdateHandle, (ERemoteStoragePublishedFileVisibility)_visibility );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1 : 0;
}

//steam_ugc_set_item_tags( ugc_update_handle, tag_array )
YYEXPORT void /*double*/ steam_ugc_set_item_tags(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcUpdateHandle, vector<const char*> _ppTags)/*Steam_Ugc_SetItemTags*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);

	std::vector<const char*> tags = _SW_GetArrayOfStrings(arg, 1, "steam_ugc_set_item_tags");

	SteamParamStringArray_t params;
	params.m_nNumStrings = (int) tags.size();
	params.m_ppStrings = tags.data();

	bool bResult = SteamUGC()->SetItemTags((UGCUpdateHandle_t)_ugcUpdateHandle, &params);
	if (!bResult)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}
	
	Result.kind = VALUE_REAL;
	Result.val = 1;
}

//steam_ugc_set_item_content( ugc_update_handle, directory )
YYEXPORT void /*double*/ steam_ugc_set_item_content(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcUpdateHandle, const char* _pszContentFolder )/*Steam_Ugc_SetItemContent*/
{
	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);
	const char* _pszContentFolder = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//-check for folder in save or bundle area-
	bool bResult = false;
	bool bFoundDir =false;
	char fname[ 1024 ];

	g_pYYRunnerInterface->SaveFileName( &fname[0], sizeof(fname), _pszContentFolder );
	if (g_pYYRunnerInterface->DirExists(fname))
	{
		bFoundDir = true;
	}
	else
	{
		g_pYYRunnerInterface->BundleFileName( &fname[0], sizeof(fname), _pszContentFolder );
		if(g_pYYRunnerInterface->DirExists(fname))
		{
			bFoundDir = true;
		}
	}
	
	if( bFoundDir )
	{
		//DebugConsoleOutput("Found content directory: %s\n", fname );
		//pszContentFolder is the absolute path to a local folder containing one or more files that represents the workshop item
		bResult = SteamUGC()->SetItemContent( (UGCUpdateHandle_t)_ugcUpdateHandle, fname );
		//DebugConsoleOutput("SetItemContent result=%d\n", bResult );
	}
	else
	{
		//DebugConsoleOutput("ERROR:failed to find content directory %s\n", _pszContentFolder );
	}

	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1 : 0;
}

//steam_ugc_set_item_preview( ugc_update_handle, image_path )
YYEXPORT void /*double*/ steam_ugc_set_item_preview(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcUpdateHandle, const char* _pszPreviewFile )/*Steam_Ugc_SetItemPreview*/
{
	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);
	const char* _pszPreviewFile = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//-find local file in save or bundle area
	bool bResult = false;
	bool bFoundFile = false;
	char filename[ 1024 ];
	if (g_pYYRunnerInterface->SaveFileExists( (char*)_pszPreviewFile ))
	{
		g_pYYRunnerInterface->SaveFileName( filename, sizeof(filename), _pszPreviewFile );
		bFoundFile = true;
	} 
	else if (g_pYYRunnerInterface->BundleFileExists( (char*)_pszPreviewFile ))
	{
		g_pYYRunnerInterface->BundleFileName( filename, sizeof(filename), _pszPreviewFile );
		bFoundFile = true;
	}
	if( bFoundFile )
	{
		//DebugConsoleOutput("found preview file: %s\n", filename );
		//pszPreviewFile is the absolute path to a local preview image file for the workshop item
		bResult = SteamUGC()->SetItemPreview( (UGCUpdateHandle_t)_ugcUpdateHandle, filename );
		//DebugConsoleOutput("SetItemPreview result=%d\n", bResult );
	}
	else
	{
		//DebugConsoleOutput("ERROR:failed to find preview file %s\n", _pszPreviewFile );
	}

	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1 : 0;
	
}

//steam_ugc_get_item_update_progress( ugc_update_handle , info_map)
//creates dsMap and returns index
YYEXPORT void /*double*/ steam_ugc_get_item_update_progress(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcUpdateHandle, int _resultMap )/*Steam_Ugc_GetItemUpdateProgress*/
{
	uint64 _ugcUpdateHandle = (uint64)YYGetInt64(arg, 0);
	const int _resultMap = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//EItemUpdateStatus GetItemUpdateProgress( UGCUpdateHandle_t handle, uint64 *punBytesProcessed, uint64* punBytesTotal )
	uint64 bytesProcessed=0;
	uint64 bytesTotal = 0;
	EItemUpdateStatus status = SteamUGC()->GetItemUpdateProgress( (UGCUpdateHandle_t)_ugcUpdateHandle, &bytesProcessed, &bytesTotal );

	const char* pszStatus;
	switch( status)
	{
		case k_EItemUpdateStatusInvalid: pszStatus = "Invalid"; break;
		case k_EItemUpdateStatusPreparingConfig: pszStatus = "PreparingConfig"; break;
		case k_EItemUpdateStatusPreparingContent: pszStatus = "PreparingContent"; break;
		case k_EItemUpdateStatusUploadingContent: pszStatus = "UploadingContent"; break;
		case k_EItemUpdateStatusUploadingPreviewFile: pszStatus = "UploadingPreviewFile"; break;
		case k_EItemUpdateStatusCommittingChanges: pszStatus = "CommittingChanges"; break;
		default: pszStatus = "unknown";
	};
	
	if( _resultMap >=0 )
	{
		g_pYYRunnerInterface->DsMapClear( _resultMap );
		g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "status_code", status );
		g_pYYRunnerInterface->DsMapAddString( _resultMap, "status_string", (char*)pszStatus );
		g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "bytes_processed", (double)bytesProcessed );
		g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "bytes_total", (double)bytesTotal );
	}

	Result.kind = VALUE_REAL;
	Result.val = 1.0;
}

//---------------ugc consuming content -----------------------------------

//steam_ugc_subscribe_item( published_file_id )
//return async event id
YYEXPORT void /*double*/ steam_ugc_subscribe_item(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _pubFileId )/*Steam_Ugc_SubscribeItem*/
{
	uint64 _pubFileId = (uint64)YYGetInt64(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//SteamAPICall_t SubscribeItem ( PublishedFileId_t nPublishedFileID )
	//A call to this method will result in the associated workshop item being downloaded and installed as soon as possible.
	int  async_id= getAsyncRequestInd();
	CSubscribeItemResultHandler* pResultHandler = new CSubscribeItemResultHandler( async_id );
	SteamAPICall_t hSteamAPICall = SteamUGC()->SubscribeItem( (PublishedFileId_t)_pubFileId );
	pResultHandler->SetCallResult( hSteamAPICall );

	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

//steam_ugc_unsubscribe_item( published_file_id )
YYEXPORT void /*double*/ steam_ugc_unsubscribe_item(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _pubFileId )/*Steam_Ugc_UnsubscribeItem*/
{
	uint64 _pubFileId = (uint64)YYGetInt64(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	int  async_id= getAsyncRequestInd();
	CUnsubscribeItemResultHandler* pResultHandler = new CUnsubscribeItemResultHandler( async_id );
	//A call to this method will result in the associated workshop item being removed after the game quits.
	SteamAPICall_t hSteamAPICall = SteamUGC()->UnsubscribeItem((PublishedFileId_t)_pubFileId );
	pResultHandler->SetCallResult( hSteamAPICall );

	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

//steam_ugc_num_subscribed_items()
//return number of subscribed items
YYEXPORT void /*double*/ steam_ugc_num_subscribed_items(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()/*Steam_Ugc_NumSubscribedItems*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	uint32 numSub = SteamUGC()->GetNumSubscribedItems();
	Result.kind = VALUE_REAL;
	Result.val = (double)numSub;
	return;
}

//steam_ugc_get_subscribed_items( item_list )
//fills dsList with PublishedFileId_t list
YYEXPORT void /*double*/ steam_ugc_get_subscribed_items(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( int _resultList )/*Steam_Ugc_GetSubscribedItems*/
{
	int _resultList = (int)YYGetInt64(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	uint32 numSub = SteamUGC()->GetNumSubscribedItems();
	uint32 listSize = 0;
	if( _resultList >=0  )
	{
		g_pYYRunnerInterface->DsListClear( _resultList );
		if( numSub > 0 )
		{
			PublishedFileId_t* aPubFileIds = (PublishedFileId_t*)alloca( sizeof(PublishedFileId_t) * numSub );
			listSize = SteamUGC()->GetSubscribedItems( aPubFileIds, numSub );

			for( uint32 i=0; i < listSize; ++i )
			{
				PublishedFileId_t id = aPubFileIds[ i ];
				g_pYYRunnerInterface->DsListAddInt64( _resultList, id );
			}
		}
	}
	
	Result.kind = VALUE_REAL;
	Result.val = (double)listSize;
}

//steam_ugc_get_item_install_info( published_file_id, info_map )
//fills dsMap with install details
YYEXPORT void /*double*/ steam_ugc_get_item_install_info(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _pubFileId, int _resultMap )/*Steam_Ugc_GetItemInstallInfo*/
{
	uint64 _pubFileId = (uint64)YYGetInt64(arg, 0);
	const int _resultMap = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//bool GetItemInstallInfo( PublishedFileId_t nPublishedFileID, uint64 *punSizeOnDisk, char *pchFolder, uint32 cchFolderSize, bool *pbLegacyItem )
	uint64 sizeOnDisk = 0;
	char pszFolder[512];
	bool bLegacyItem = false;
	uint32 timeStamp;
	uint32 itemState = SteamUGC()->GetItemState((PublishedFileId_t)_pubFileId);
	bool bResult = SteamUGC()->GetItemInstallInfo( (PublishedFileId_t)_pubFileId, &sizeOnDisk, pszFolder, 512, &timeStamp );

	if( _resultMap >=0 )
	{
		g_pYYRunnerInterface->DsMapClear( _resultMap );
		if( bResult )
		{
			bLegacyItem = (itemState & k_EItemStateLegacyItem) != 0;
			
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "size_on_disk", (double)sizeOnDisk );
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "legacy_item", (bLegacyItem)? 1 : 0 );
			g_pYYRunnerInterface->DsMapAddString( _resultMap, "folder", pszFolder );
		}
	}

	//OnUgcItemInstalled callback does not seem to be very reliable...
	//- which is big problem- since we rely on the installed callback to add newly downloaded items to the whitelist
	//->Check whitelist is updated for installed items, when querying install state
	if( bResult )
	{
		AddFolderToWhitelistIfRequired( pszFolder, itemState );
	}

	Result.kind = VALUE_REAL;
	Result.val = (bResult)? 1 : 0;
}

//steam_ugc_get_item_update_info( published_file_id, info_map )
//fills ds map with update details
YYEXPORT void /*double*/ steam_ugc_get_item_update_info(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _pubFileId, int _resultMap )/*Steam_Ugc_GetItemUpdateInfo*/
{
	uint64 _pubFileId = (uint64)YYGetInt64(arg, 0);
	const int _resultMap = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//bool GetItemUpdateInfo( PublishedFileId_t nPublishedFileID, bool *pbNeedsUpdate, bool *pbIsDownloading, uint64 *punBytesDownloaded, uint64 *punBytesTotal )
	bool bNeedsUpdate = false;
	bool bIsDownloading = false;
	bool bIsLegacy = false;
	bool bInstalled = false;
	bool bDownloadPending = false;


	uint64 bytesDownloaded = 0;
	uint64 bytesTotal = 0;
	//bool bResult = SteamUGC()->GetItemUpdateInfo( (PublishedFileId_t)_pubFileId, &bNeedsUpdate, &bIsDownloading, &bytesDownloaded, &bytesTotal );
	bool bResult = SteamUGC()->GetItemDownloadInfo( (PublishedFileId_t)_pubFileId,&bytesDownloaded, &bytesTotal );
	uint32 itemState = SteamUGC()->GetItemState( (PublishedFileId_t)_pubFileId );
	bNeedsUpdate = (itemState& k_EItemStateNeedsUpdate) != 0;
	bIsDownloading = (itemState & k_EItemStateDownloading ) != 0;
	bIsLegacy = (itemState & k_EItemStateLegacyItem)!=0;
	bDownloadPending = (itemState & k_EItemStateDownloadPending)!=0;
	bInstalled = (itemState & k_EItemStateInstalled)!=0;


	if( _resultMap >= 0 )
	{
		g_pYYRunnerInterface->DsMapClear( _resultMap );
		if( bResult )
		{
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "needs_update", (bNeedsUpdate)? 1: 0 );
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "is_downloading", (bIsDownloading)? 1: 0);
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "bytes_downloaded", (double)bytesDownloaded );
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "bytes_total", (double)bytesTotal );

			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "is_legacy", (bIsLegacy)? 1: 0);
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "is_download_pending", (bDownloadPending)? 1: 0);
			g_pYYRunnerInterface->DsMapAddDouble( _resultMap, "is_installed", (bInstalled)? 1: 0);
		}
	}
	
	Result.kind = VALUE_REAL;
	Result.val = (bResult)? 1: 0;
}

//steam_ugc_request_item_details( published_file_id, max_age_seconds )
//returns async event id
YYEXPORT void /*double*/ steam_ugc_request_item_details(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _pubFileId, int _maxAgeSeconds )/*Steam_Ugc_RequestItemDetails*/
{
	uint64 _pubFileId = (uint64)YYGetInt64(arg, 0);
	const int _maxAgeSeconds = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//SteamAPICall_t RequestUGCDetails(PublishedFileId_t nPublishedFileID, uint32 unMaxAgeSeconds)
	int  async_id= getAsyncRequestInd();
	CRequestUGCDetailsResultHandler* pResultHandler = new CRequestUGCDetailsResultHandler( async_id );
	SteamAPICall_t hSteamAPICall = SteamUGC()->RequestUGCDetails( (PublishedFileId_t)_pubFileId, _maxAgeSeconds );
	pResultHandler->SetCallResult( hSteamAPICall );
	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

YYEXPORT void /*double*/ steam_ugc_delete_item(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(uint64 _pubFileId)
{
	uint64 _pubFileId = (uint64)YYGetInt64(arg, 0);

	int  async_id = getAsyncRequestInd();
	CRequestUGCDeleteResultHandler* pResultHandler = new CRequestUGCDeleteResultHandler(async_id);
	SteamAPICall_t hSteamAPICall = SteamUGC()->DeleteItem((PublishedFileId_t)_pubFileId);
	pResultHandler->SetCallResult(hSteamAPICall);
	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

//------------ ugc querying content ------------------------------------------

UGCQueryHandle_t CreateQueryUser(AccountID_t unAccountID, EUserUGCList eListType, EUGCMatchingUGCType eMatchingUGCType, EUserUGCListSortOrder eSortOrder, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint32 unPage )
{
	//UGCQueryHandle_t CreateQueryUserUGCRequest( AccountID_t unAccountID, EUserUGCList eListType, EUGCMatchingUGCType eMatchingUGCType, EUserUGCListSortOrder eSortOrder, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint32 unPage )
	UGCQueryHandle_t queryHandle = SteamUGC()->CreateQueryUserUGCRequest( unAccountID, eListType, eMatchingUGCType, eSortOrder, nCreatorAppID, nConsumerAppID, unPage );
	return queryHandle;
}

//steam_ugc_create_query_user( list_type, match_type, sort_order, page )
//returns UGCQueryHandle_t
YYEXPORT void /*uint64*/ steam_ugc_create_query_user(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( int _listType, int _matchType, int _sortOrder, int _page )/*Steam_Ugc_CreateQueryUser*/
{
	int _listType = (int)YYGetReal(arg,0);
	int _matchType = (int)YYGetReal(arg, 1);
	int _sortOrder = (int)YYGetReal(arg, 2);
	int _page = (int)YYGetReal(arg, 3);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//CreateQueryUserUGCRequest( AccountID_t unAccountID, EUserUGCList eListType, EUGCMatchingUGCType eMatchingUGCType, EUserUGCListSortOrder eSortOrder, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint32 unPage )
	//typical use - current user account and current app as consumer
	AccountID_t unAccountID = SteamUser()->GetSteamID().GetAccountID();
	AppId_t nCreatorAppId = 0;
	AppId_t nConsumerAppId = SteamUtils()->GetAppID();

	Result.kind = VALUE_INT64;
	Result.v64 = CreateQueryUser(unAccountID, (EUserUGCList)_listType, (EUGCMatchingUGCType)_matchType, (EUserUGCListSortOrder)_sortOrder, nCreatorAppId, nConsumerAppId, _page);

	return;
}

//steam_ugc_create_query_user_ex( list_type, match_type, sort_order, page, account_id, creator_app_id, consumer_add_id )
//returns UGCQueryHandle_t
YYEXPORT void /*uint64*/ steam_ugc_create_query_user_ex(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( int _listType, int _matchType, int _sortOrder, int _page, uint32 _accountId, uint32 _creatorAppId, uint32 _consumerAppId )/*Steam_Ugc_CreateQueryUserEx*/
{
	int _listType = (int)YYGetReal(arg, 0);
	int _matchType = (int)YYGetReal(arg, 1);
	int _sortOrder = (int)YYGetReal(arg, 2);
	int _page = (int)YYGetReal(arg, 3);
	uint32 _accountId = YYGetUint32(arg, 4);
	uint32 _creatorAppId = YYGetUint32(arg, 5);
	uint32 _consumerAppId = YYGetUint32(arg, 6);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	UGCQueryHandle_t queryHandle;
	queryHandle = CreateQueryUser( (AccountID_t)_accountId, (EUserUGCList)_listType, (EUGCMatchingUGCType) _matchType,
		(EUserUGCListSortOrder)_sortOrder, (AppId_t)_creatorAppId, (AppId_t)_consumerAppId, _page );

	Result.kind = VALUE_INT64;
	Result.v64 = queryHandle;
}

UGCQueryHandle_t CreateQueryAll( EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint32 unPage )
{
	//UGCQueryHandle_t CreateQueryAllUGCRequest( EUGCQuery eQueryType, EUGCMatchingUGCType eMatchingeMatchingUGCTypeFileType, AppId_t nCreatorAppID, AppId_t nConsumerAppID, uint32 unPage )
	UGCQueryHandle_t queryHandle = SteamUGC()->CreateQueryAllUGCRequest( eQueryType, eMatchingeMatchingUGCTypeFileType, nCreatorAppID, nConsumerAppID, unPage );
	return queryHandle;
}

//steam_ugc_create_query_all( query_type, match_type, page )
//returns UGCQueryHandle_t
YYEXPORT void /*uint64*/ steam_ugc_create_query_all(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( int _queryType, int _matchType, int _page )/*Steam_Ugc_CreateQueryAll*/
{
	int _queryType = (int)YYGetReal(arg,0);
	int _matchType = (int)YYGetReal(arg, 1);
	int _page = (int)YYGetReal(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	AppId_t nCreatorAppId = 0;
	AppId_t nConsumerAppId = SteamUtils()->GetAppID();
	UGCQueryHandle_t queryHandle = CreateQueryAll( (EUGCQuery)_queryType, (EUGCMatchingUGCType)_matchType,nCreatorAppId, nConsumerAppId, _page );
	Result.kind = VALUE_INT64;
	Result.v64 = queryHandle;
}

//steam_ugc_create_query_all_ex( query_type, match_type, page, creator_app_id, consumer_add_id )
YYEXPORT void /*uint64*/ steam_ugc_create_query_all_ex(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( int _queryType, int _matchType, int _page, uint32 _creatorAppId, uint32 _consumerAppId )/*Steam_Ugc_CreateQueryAllEx*/
{
	int _queryType = (int)YYGetReal(arg, 0);
	int _matchType = (int)YYGetReal(arg, 1);
	int _page = (int)YYGetReal(arg, 2);
	uint32 _creatorAppId = YYGetUint32(arg, 3);
	uint32 _consumerAppId = YYGetUint32(arg, 4);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	UGCQueryHandle_t queryHandle = CreateQueryAll( (EUGCQuery)_queryType, (EUGCMatchingUGCType)_matchType, 
		(AppId_t)_creatorAppId, (AppId_t)_consumerAppId, _page );

	Result.kind = VALUE_INT64;
	Result.v64 = queryHandle;
}

//steam_ugc_query_set_cloud_filename_filter( ugc_query_handle , match_cloud_filename )
YYEXPORT void /*double*/ steam_ugc_query_set_cloud_filename_filter(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, const char* _pszFilename )/*Steam_Ugc_QuerySetCloudFileFilter*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg,0);
	const char* _pszFilename = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	//bool SetCloudFileNameFilter( UGCQueryHandle_t handle, const char *pMatchCloudFileName )
	//Workshop item filename must match pMatchCloudFileName
	bool bResult = SteamUGC()->SetCloudFileNameFilter( (UGCQueryHandle_t)_ugcQueryHandle, _pszFilename );

	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_query_set_match_any_tag( ugc_query_handle, match_any_tag )
YYEXPORT void /*double*/ steam_ugc_query_set_match_any_tag(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, int _matchAnyTag )/*Steam_Ugc_QuerySetMatchAnyTag*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	int _matchAnyTag = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetMatchAnyTag( (UGCQueryHandle_t)_ugcQueryHandle, _matchAnyTag !=0 );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_query_set_search_text( ugc_query_handle, search_text )
YYEXPORT void /*double*/ steam_ugc_query_set_search_text(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, const char* _pszSearchText )/*Steam_Ugc_QuerySetSearchText*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	const char* _pszSearchText = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetSearchText((UGCQueryHandle_t)_ugcQueryHandle, _pszSearchText );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1 : 0;
	return;
}

//steam_ugc_query_set_ranked_by_trend_days( ugc_query_handle , days)
YYEXPORT void /*double*/ steam_ugc_query_set_ranked_by_trend_days(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, int _days )/*Steam_Ugc_QuerySetRankedByTrendDays*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	int _days = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetRankedByTrendDays( (UGCQueryHandle_t)_ugcQueryHandle, _days );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_query_add_required_tag( ugc_query_handle, tag_name )
YYEXPORT void /*double*/ steam_ugc_query_add_required_tag(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, const char* _pszTag )/*Steam_Ugc_QueryAddRequiredTag*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	const char* _pszTag = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->AddRequiredTag( (UGCQueryHandle_t)_ugcQueryHandle, _pszTag );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_query_add_excluded_tag( ugc_query_handle, tag_name )
YYEXPORT void /*double*/ steam_ugc_query_add_excluded_tag(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, const char* _pszTag )/*Steam_Ugc_QueryAddExcludedTag*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	const char* _pszTag = YYGetString(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->AddExcludedTag( (UGCQueryHandle_t)_ugcQueryHandle, _pszTag );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_query_set_return_long_description( ugc_query_handle, return_long_desc )
YYEXPORT void /*double*/ steam_ugc_query_set_return_long_description(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, int _returnLongDesc )/*Steam_Ugc_QuerySetReturnLongDesc*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	int _returnLongDesc = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetReturnLongDescription( (UGCQueryHandle_t)_ugcQueryHandle, _returnLongDesc!=0 );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_query_set_return_total_only( ugc_query_handle, return_total_only )
YYEXPORT void /*double*/ steam_ugc_query_set_return_total_only(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, int _returnTotalOnly )/*Steam_Ugc_QuerySetReturnTotalOnly*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	int _returnTotalOnly = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetReturnTotalOnly( (UGCQueryHandle_t)_ugcQueryHandle, _returnTotalOnly!=0 );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_query_set_allow_cached_response( ugc_query_handle, max_age_seconds )
YYEXPORT void /*double*/ steam_ugc_query_set_allow_cached_response(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle, int _maxAgeSeconds )/*Steam_Ugc_QuerySetAllowCachedResponse*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);
	int _maxAgeSeconds = (int)YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	bool bResult = SteamUGC()->SetAllowCachedResponse( (UGCQueryHandle_t)_ugcQueryHandle, _maxAgeSeconds );
	Result.kind = VALUE_REAL;
	Result.val = (bResult) ? 1:0;
}

//steam_ugc_send_query( ugc_query_handle )
//return async event id
YYEXPORT void /*double*/ steam_ugc_send_query(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//( uint64 _ugcQueryHandle )/*Steam_Ugc_SendQuery*/
{
	uint64 _ugcQueryHandle = YYGetInt64(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	int  async_id = getAsyncRequestInd();
	CQueryUGCResultHandler* pResultHandler = new CQueryUGCResultHandler( async_id );
	SteamAPICall_t hSteamAPICall = SteamUGC()->SendQueryUGCRequest( (UGCQueryHandle_t)_ugcQueryHandle );
	pResultHandler->SetCallResult( hSteamAPICall );
	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

