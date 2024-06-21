
#include <sstream>
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "pch.h"
#include "steam_api.h"
#include "steam_common.h"

class CLeaderboardFindHandler;
class CLeaderboardUploadHandler;

bool OnFindLeaderboardResult(LeaderboardFindResult_t* pCallback, bool bIOFailure, CLeaderboardFindHandler* pHandler);
bool OnUploadScoreResult(LeaderboardScoreUploaded_t* pCallback, bool bIOFailure, CLeaderboardUploadHandler* pHandler);
void OnDownloadScoreResult(LeaderboardScoresDownloaded_t* pCallback, bool bIOFailure, int callId);
void OnUserStatsReceivedCallback(UserStatsReceived_t* pCallback);
void OnUserStatsStoredCallback(UserStatsStored_t* pCallback);
bool LookupLeaderboardHandle(const char* pszName, SteamLeaderboard_t& handle);

const int kMaxEntries = 100;
// const char            gUnknownString[] = "Unknown";
const int kLBExtraDataMax = k_cLeaderboardDetailsMax;  // max size in int32 of leader board entry data

// leaderboard/stat queues...
// used to cache retrieved handles for leaderboard names
struct SLeaderboardInfo
{
	SteamLeaderboard_t m_hSteamLeaderboard;
	char m_pszName[k_cchLeaderboardNameMax];
	bool m_bLeaderboardFound;
	bool m_bRequestedCreate;
};

struct SLeaderboardExtraData
{
	int m_count;
	int32 m_data[kLBExtraDataMax];
};

// leaderboard callbacks
struct SLeaderboardData
{
	SteamLeaderboard_t m_hSteamLeaderboard;	  // lb handle - required?
	char m_pszName[k_cchLeaderboardNameMax];  // leaderboard name
	int m_numEntries;
	LeaderboardEntry_t m_Entries[kMaxEntries];	// downloaded entries
	SLeaderboardExtraData m_extraData[kMaxEntries];
};

//! Each Steamworks title can create up to 10,000 leaderboards...
static int m_MaxLeaderboards = 64;
static SLeaderboardInfo* m_aLeaderboardInfo;
static int m_numLeaderboardInfo;
static bool m_bStatsReady = false;
static bool m_bStoreStats = false;
static bool m_bStoringStats = false;
static bool m_bStatsGlobalReady = false;
static bool m_bStatsGlobalAchievementReady = false;

bool LookupLeaderboardHandle(const char* pszName, SteamLeaderboard_t& handle)
{
	// search stored handles
	for (int i = 0; i < m_numLeaderboardInfo; ++i)
	{
		SLeaderboardInfo* pInfo = &m_aLeaderboardInfo[i];
		if (strncmp(pszName, pInfo->m_pszName, k_cchLeaderboardNameMax) == 0)
		{
			// lb name is in the list
			if (pInfo->m_bLeaderboardFound)
			{
				// we have a cached handle for this lb - return it
				handle = m_aLeaderboardInfo[i].m_hSteamLeaderboard;
				return true;
			}
		}
	}
	return false;
}

// used to queue leaderboard post/get requests
struct SLBRequest
{
	char m_pszName[k_cchLeaderboardNameMax];  // name of the leaderboard to use
	bool m_bPost;							  // post or get
	int m_method;							  // get method
	int m_score;							  // score to post
	int m_rangeStart;						  // get range
	int m_rangeEnd;							  // get range
	HTTP_REQ_CONTEXT* m_pContext;			  // the async context to return results
	SLBRequest* m_pNext;

	int m_postId;
	int32* m_pExtraData;
	int m_extraDataCount;

	// post cstr
	SLBRequest(const char* pLBName, int score, int _postId)	 // post
	{
		m_pContext = NULL;
		m_pNext = NULL;
		m_bPost = true;
		strncpy(m_pszName, pLBName, k_cchLeaderboardNameMax);
		m_score = score;

		m_postId = _postId;
		m_pExtraData = NULL;
		m_extraDataCount = 0;
	}

	// post, with extra data
	SLBRequest(const char* pLBName, int score, int _postId, int32* pData, int dataCount)
	{
		m_pContext = NULL;
		m_pNext = NULL;
		m_bPost = true;
		strncpy(m_pszName, pLBName, k_cchLeaderboardNameMax);
		m_score = score;
		m_postId = _postId;

		// store extra data
		if (pData != NULL && dataCount > 0)
		{
			m_pExtraData = (int32*)YYAlloc(dataCount * 4);	// , __FILE__, __LINE__, true);
			memcpy(m_pExtraData, pData, dataCount * 4);
			m_extraDataCount = dataCount;
		}
		else
		{
			m_pExtraData = NULL;
			m_extraDataCount = 0;
		}
	}

	// get cstr
	SLBRequest(HTTP_REQ_CONTEXT* pContext, const char* pLBName, int method, int rangeStart, int rangeEnd)  // get
	{
		m_pContext = pContext;
		m_bPost = false;
		m_pNext = NULL;
		strncpy(m_pszName, pLBName, k_cchLeaderboardNameMax);
		m_method = method;
		m_rangeStart = rangeStart;
		m_rangeEnd = rangeEnd;

		m_pExtraData = NULL;
		m_extraDataCount = 0;
	}

	~SLBRequest()
	{
		if (m_pExtraData != NULL)
		{
			YYFree(m_pExtraData);
			m_pExtraData = NULL;
		}
	}
};

static SLBRequest* g_pLBQueue = NULL;

// add leaderboard post/get request to queue
void QueueLBRequest(SLBRequest* pRequest)
{
	if (g_pLBQueue)
	{
		pRequest->m_pNext = g_pLBQueue;
		g_pLBQueue = pRequest;
	}
	else
	{
		g_pLBQueue = pRequest;
	}
}

// we also need an handler instance for every leaderboard "find" request,
//-a single handler instance is no use since a callresult only stores a single api call handle
//-doing multiple requests will only return callback for last request
class CLeaderboardFindHandler
{
   public:
	char m_pszName[k_cchLeaderboardNameMax];
	CCallResult<CLeaderboardFindHandler, LeaderboardFindResult_t> m_SteamCallResultFindLeaderboard;
	bool m_bCreate;
	ELeaderboardSortMethod m_sortMethod;
	ELeaderboardDisplayType m_displayType;
	int async_id;

	CLeaderboardFindHandler() {}
	CLeaderboardFindHandler(const char* pszName, int async_id_)
	{
		strncpy(m_pszName, pszName, k_cchLeaderboardNameMax);
		m_bCreate = false;
		async_id = async_id_;
	}

	// create cstr
	CLeaderboardFindHandler(const char* pszName, ELeaderboardSortMethod sortMethod, ELeaderboardDisplayType displayType, int async_id_)
	{
		strncpy(m_pszName, pszName, k_cchLeaderboardNameMax);
		m_bCreate = true;
		m_sortMethod = sortMethod;
		m_displayType = displayType;
		async_id = async_id_;
	}

	void SetCallResult(SteamAPICall_t apicall) { m_SteamCallResultFindLeaderboard.Set(apicall, this, &CLeaderboardFindHandler::OnFindLeaderboard); }

	void OnFindLeaderboard(LeaderboardFindResult_t* pCallback, bool bIOFailure)
	{
		bool bDelete = OnFindLeaderboardResult(pCallback, bIOFailure, this);
		// true return denotes we are done with the handler
		if (bDelete)
		{
			// delete the handler (unregisters)
			delete this;
		}
	}
};

// if we want to get every upload result, we need a handler instance for each call
class CLeaderboardUploadHandler
{
   public:
	int m_postId;

	CCallResult<CLeaderboardUploadHandler, LeaderboardScoreUploaded_t> m_SteamCallResultUploadScore;

	CLeaderboardUploadHandler(int _postId) : m_postId(_postId) {}

	void SetCallResult(SteamAPICall_t apicall) { m_SteamCallResultUploadScore.Set(apicall, this, &CLeaderboardUploadHandler::OnUploadResult); }

	void OnUploadResult(LeaderboardScoreUploaded_t* pCallback, bool bIOFailure)
	{
		bool bDelete = OnUploadScoreResult(pCallback, bIOFailure, this);
		if (bDelete)
		{
			// finished with handler, free & deregister
			delete this;
		}
	}
};

// we need to create a new handler for *each* leaderboard download request,
// so that we can store the asyncID and identify our http context on result
class CLeaderboardDownloadHandler
{
   public:
	int m_callID;

	CCallResult<CLeaderboardDownloadHandler, LeaderboardScoresDownloaded_t> m_SteamCallResultDownloadScore;

	CLeaderboardDownloadHandler() : m_callID(-1) {}

	CLeaderboardDownloadHandler(int callID) : m_callID(callID) {}

	void SetCallResult(SteamAPICall_t apicall) { m_SteamCallResultDownloadScore.Set(apicall, this, &CLeaderboardDownloadHandler::OnDownloadResult); }

	void OnDownloadResult(LeaderboardScoresDownloaded_t* pCallback, bool bIOFailure)
	{
		// pass the results on
		OnDownloadScoreResult(pCallback, bIOFailure, m_callID);
		// delete the handler (unregisters)
		delete this;
	}
};

void DoLBRequest(SLBRequest* pRequest, SteamLeaderboard_t hLeaderboard)
{
	if (pRequest->m_bPost)
	{
		// dbg_csol.Output("Sending queued LB post: %s, %d \n", pszName, pRequest->m_score);
		SteamAPICall_t hSteamAPICall = SteamUserStats()->UploadLeaderboardScore(hLeaderboard, k_ELeaderboardUploadScoreMethodKeepBest, pRequest->m_score,
																				pRequest->m_pExtraData, pRequest->m_extraDataCount);
		// new handler for each request, to make sure we get a result for each post
		CLeaderboardUploadHandler* pResultHandler = new CLeaderboardUploadHandler(pRequest->m_postId);
		pResultHandler->SetCallResult(hSteamAPICall);
	}
	else
	{
		// dbg_csol.Output("Sending queued LB get: %s, %d, %d, %d, %d \n", pszName, pRequest->m_pContext->ID, pRequest->m_method, pRequest->m_rangeStart,
		// pRequest->m_rangeEnd);
		SteamAPICall_t hSteamAPICall = SteamUserStats()->DownloadLeaderboardEntries(hLeaderboard, (ELeaderboardDataRequest)pRequest->m_method,
																					pRequest->m_rangeStart, pRequest->m_rangeEnd);
		// m_pUserStatCallback->SetLeaderboardDownloadCallback(hSteamAPICall);
		// need to create a new result handler for each get request, so we can identify http context
		CLeaderboardDownloadHandler* pResultHandler =
			new CLeaderboardDownloadHandler(pRequest->m_postId);  // getAsyncRequestInd());// pRequest->m_pContext->ID);//Here...
		pResultHandler->SetCallResult(hSteamAPICall);
	}
}

void SendLBRequests()
{
	SteamLeaderboard_t handle;
	SLBRequest* pCurr = g_pLBQueue;
	SLBRequest* pPrev = NULL;
	while (pCurr)
	{
		SLBRequest* pNext = pCurr->m_pNext;
		if (LookupLeaderboardHandle(pCurr->m_pszName, handle))
		{
			// perform the request
			DoLBRequest(pCurr, handle);
			// remove from list
			if (pPrev != NULL)
			{
				pPrev->m_pNext = pNext;
			}
			else
			{
				g_pLBQueue = pNext;
			}
			delete pCurr;

			pCurr = pPrev;
		}
		pPrev = pCurr;
		pCurr = pNext;
	}
}

// leaderboard find callback - return true if we are finished with handler
bool OnFindLeaderboardResult(LeaderboardFindResult_t* pCallback, bool bIOFailure, CLeaderboardFindHandler* pHandler)
{
	// find leaderboard name in the info list
	const char* pszLBName = pHandler->m_pszName;
	SLeaderboardInfo* pInfo = NULL;
	int infoIdx = -1;
	for (int i = 0; i < m_numLeaderboardInfo; ++i)
	{
		SLeaderboardInfo* pI = &m_aLeaderboardInfo[i];
		if (strncmp(pszLBName, pI->m_pszName, k_cchLeaderboardNameMax) == 0)
		{
			pInfo = pI;
			infoIdx = i;
			break;
		}
	}

	// handle failure to find name in list...should not happen
	if (!pInfo)
	{
		// DebugConsoleOutput("ERROR: failed to find entry for leaderboard: %s\n", pszLBName );
		// YYASSERT(false);
		return true;
	}

	if (bIOFailure)
	{
		// DebugConsoleOutput("IO Error finding leaderboard \"%s\" - retrying\n", pszLBName);
		// should we just retry...?need to know if it was a find or create (+need sortMethod&display type also in that case)
		SteamAPICall_t hSteamAPICall;
		if (pHandler->m_bCreate)
		{
			hSteamAPICall = SteamUserStats()->FindOrCreateLeaderboard(pHandler->m_pszName, pHandler->m_sortMethod, pHandler->m_displayType);
		}
		else
		{
			hSteamAPICall = SteamUserStats()->FindLeaderboard(pHandler->m_pszName);
		}
		pHandler->SetCallResult(hSteamAPICall);	 // re-use the handler
		return false;							 // dont't free handler as we are re-using it
	}
	else if (!pCallback->m_bLeaderboardFound)
	{
		// DebugConsoleOutput("Failed to find leaderboard \"%s\"\n", pszLBName);
		//- tried to find but no leaderboard of this name exists;
		// remove any queued post/get requests for this LBName
		//! must also complete any async events! (fail status)
		// RemoveLBRequests( pszLBName );
		// and also remove from info list
		if (m_numLeaderboardInfo > 1)
		{
			SLeaderboardInfo* pLast = &m_aLeaderboardInfo[m_numLeaderboardInfo - 1];
			m_aLeaderboardInfo[infoIdx] = *pLast;
		}
		--m_numLeaderboardInfo;
		return true;
	}

	SteamLeaderboard_t hLeaderboard = pCallback->m_hSteamLeaderboard;
	// const char* pszName = SteamUserStats()->GetLeaderboardName( hLeaderboard );
	// DebugConsoleOutput("found leaderboard: %s\n", pszLBName );
	// cache handle for this name
	pInfo->m_bLeaderboardFound = true;
	pInfo->m_hSteamLeaderboard = hLeaderboard;
	// send any waiting requests
	SendLBRequests();

	// int map = g_pYYRunnerInterface->CreateDsMap(0,0);
	// g_pYYRunnerInterface->DsMapAddString(map, "event_type", "create_leaderboard");
	// g_pYYRunnerInterface->DsMapAddString(map, "lb_name", pszLBName);
	// g_pYYRunnerInterface->DsMapAddDouble(map, "status", (double)1);
	// g_pYYRunnerInterface->DsMapAddDouble(map, "id", (double)pHandler->async_id);
	// g_pYYRunnerInterface->CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);

	return true;
}

void AddLeaderboardInfo(const char* pszName, bool bRequestCreate)
{
	// add a new entry
	SLeaderboardInfo* pInfo = &m_aLeaderboardInfo[m_numLeaderboardInfo];
	strncpy(pInfo->m_pszName, pszName, k_cchLeaderboardNameMax);
	pInfo->m_bRequestedCreate = bRequestCreate;
	pInfo->m_bLeaderboardFound = false;

	// FIX #0015989: removed max leaderboard limit
	++m_numLeaderboardInfo;
	if (m_numLeaderboardInfo >= m_MaxLeaderboards)
	{
		m_MaxLeaderboards += 64;
		m_aLeaderboardInfo = (SLeaderboardInfo*)g_pYYRunnerInterface->YYRealloc((void*)m_aLeaderboardInfo,
																				sizeof(SLeaderboardInfo) * m_MaxLeaderboards);	// , __FILE__, __LINE__ );
	}
}

bool GetLeaderboardHandleCreate(const char* pszName, SteamLeaderboard_t& handle, int sortMethod, int displayType, int async_id)
{
	// search stored handles
	for (int i = 0; i < m_numLeaderboardInfo; ++i)
	{
		SLeaderboardInfo* pInfo = &m_aLeaderboardInfo[i];
		if (strncmp(pszName, pInfo->m_pszName, k_cchLeaderboardNameMax) == 0)
		{
			// lb name is in the list
			if (pInfo->m_bLeaderboardFound)
			{
				// we have a cached handle for this lb - return it
				handle = m_aLeaderboardInfo[i].m_hSteamLeaderboard;

				int map = CreateDsMap(4, "event_type", (double)0.0, "create_leaderboard", "lb_name", (double)0.0, pszName, "status", (double)1.0, NULL, "id",
									  (double)async_id, NULL);
				g_pYYRunnerInterface->CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);

				return true;
			}
			else if (pInfo->m_bRequestedCreate)
			{
				// we are already waiting on a create callback - do nothing

				int map = CreateDsMap(4, "event_type", (double)0.0, "create_leaderboard", "lb_name", (double)0.0, pszName, "status", (double)0.0, NULL, "id",
									  (double)async_id, NULL);
				g_pYYRunnerInterface->CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);

				return false;
			}
			else
			{
				// already asked to *find* this leaderboard, but need to send a *create* request
				pInfo->m_bRequestedCreate = true;
				SteamAPICall_t hSteamAPICall =
					SteamUserStats()->FindOrCreateLeaderboard(pszName, (ELeaderboardSortMethod)sortMethod, (ELeaderboardDisplayType)displayType);
				// need a handler instance for each find
				CLeaderboardFindHandler* pResultHandler =
					new CLeaderboardFindHandler(pszName, (ELeaderboardSortMethod)sortMethod, (ELeaderboardDisplayType)displayType, async_id);
				pResultHandler->SetCallResult(hSteamAPICall);

				int map = CreateDsMap(4, "event_type", (double)0.0, "create_leaderboard", "lb_name", (double)0.0, pszName, "status", (double)0.0, NULL, "id",
									  (double)async_id, NULL);
				g_pYYRunnerInterface->CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);

				return false;
			}
		}
	}

	// lb name is not in the list, so request create
	AddLeaderboardInfo(pszName, true);
	SteamAPICall_t hSteamAPICall = SteamUserStats()->FindOrCreateLeaderboard(pszName, (ELeaderboardSortMethod)sortMethod, (ELeaderboardDisplayType)displayType);
	CLeaderboardFindHandler* pResultHandler =
		new CLeaderboardFindHandler(pszName, (ELeaderboardSortMethod)sortMethod, (ELeaderboardDisplayType)displayType, async_id);
	pResultHandler->SetCallResult(hSteamAPICall);

	return false;
}

///////////////////////////////CREATE LEADERBOARD//////////////////////////////////////

///    \brief    Creates a new leaderboard
YYEXPORT void /*double*/ steam_create_leaderboard(
	RValue& Result,
	CInstance* selfinst,
	CInstance* otherinst,
	int argc,
	RValue* arg)  //(const char* pLeaderboardName, double sortMethod, double displayType)/*Steam_UserStats_CreateLeaderboard*/
{
	const char* pLeaderboardName = YYGetString(arg, 0);
	double sortMethod = YYGetReal(arg, 1);
	double displayType = YYGetReal(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	if (!SteamUser()->BLoggedOn())
	{
		// DebugConsoleOutput("Create leaderboard failed: must be logged on\n");
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	int async_id = getAsyncRequestInd();  // g_HTTP_ID;

	// this will perform a FindOrCreate request, if we do not already have a handle cached for this name (otherwise, do nothing - leaderboard exists already )
	SteamLeaderboard_t hLeaderboard;
	GetLeaderboardHandleCreate(pLeaderboardName, hLeaderboard, (int)sortMethod, (int)displayType, async_id);

	Result.kind = VALUE_REAL;
	Result.val = async_id;
}

////////////////////////////////// UPLOAD ////////////////////////////////////////////////////

// leaderboard post callback
bool OnUploadScoreResult(LeaderboardScoreUploaded_t* pCallback, bool bIOFailure, CLeaderboardUploadHandler* pHandler)
{
	const char* pszName = SteamUserStats()->GetLeaderboardName(pCallback->m_hSteamLeaderboard);
	bool bSuccess = false;
	bool bUpdated = false;
	if (bIOFailure)
	{
		// DebugConsoleOutput("IO Error uploading score %d to \"%s\"\n", pCallback->m_nScore, pszName);
	}
	else if (!pCallback->m_bSuccess)
	{
		// why would it fail? what do we do?
		// does tend to fail here if a lot of posts are sent at once, so need to retry
		// BUT- fails when many uploads are attempted in a short space of time - perhaps being throttled by steam; and retries will also fail, until a certain
		// amount of time has passed -so repeatedly retrying is a really bad idea, as it will likely prevent further posts...
		//...instead, would be better to return result via async event, and leave it up to the user
		// DebugConsoleOutput("Failed to upload score %d to \"%s\"\n", pCallback->m_nScore, pszName);
	}
	else
	{
		bSuccess = true;
		bUpdated = (pCallback->m_bScoreChanged != 0);  // true if the score in the leaderboard change, false if the existing score was better
		if (bUpdated)
		{
			// DebugConsoleOutput("uploaded score %d to lb %s - score was updated\n", pCallback->m_nScore, pszName);
		}
		else
		{
			// DebugConsoleOutput("uploaded score %d to lb %s - score was not updated\n", pCallback->m_nScore, pszName);
		}
	}

	// removing this, as it is not helping...
	/*if(bRetry)
	{
		DebugConsoleOutput("Retrying upload...\n");
		SteamAPICall_t hSteamAPICall = SteamUserStats()->UploadLeaderboardScore( pCallback->m_hSteamLeaderboard, k_ELeaderboardUploadScoreMethodKeepBest,
	pCallback->m_nScore, NULL, 0 ); pHandler->SetCallResult( hSteamAPICall ); return false;    //re-using this handler
	}*/
	// and return async event instead
	int iSuccess = (bSuccess) ? 1 : 0;
	int iUpdated = (bUpdated) ? 1 : 0;
	int dsMapIndex = CreateDsMap(6, "event_type", (double)0.0, "leaderboard_upload", "lb_name", (double)0.0, pszName, "success", (double)iSuccess, NULL,
								 "updated", (double)iUpdated, NULL, "post_id", (double)pHandler->m_postId, NULL, "score", (double)pCallback->m_nScore, NULL);

	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(dsMapIndex, EVENT_OTHER_WEB_STEAM);

	return true;
}

// might rename this since it also does an api find call
bool GetLeaderboardHandle(const char* pszName, SteamLeaderboard_t& handle)
{
	// search stored handles
	for (int i = 0; i < m_numLeaderboardInfo; ++i)
	{
		SLeaderboardInfo* pInfo = &m_aLeaderboardInfo[i];
		if (strncmp(pszName, pInfo->m_pszName, k_cchLeaderboardNameMax) == 0)
		{
			// lb name is in the list
			if (pInfo->m_bLeaderboardFound)
			{
				// we have a cached handle for this lb - return it
				handle = m_aLeaderboardInfo[i].m_hSteamLeaderboard;
				return true;
			}
			else
			{
				// we have *already* requested this leaderboard, but don't have a handle for it yet...
				return false;
			}
		}
	}

	////lb name not in the list, so request handle for this lb
	AddLeaderboardInfo(pszName, false);
	SteamAPICall_t hSteamAPICall = SteamUserStats()->FindLeaderboard(pszName);
	// need a handler instance for each find
	CLeaderboardFindHandler* pResultHandler = new CLeaderboardFindHandler(pszName, 1);	// check this '1'
	pResultHandler->SetCallResult(hSteamAPICall);

	return false;
}

static int s_postId = 1;
double Steam_UserStats_UploadScore(const char* pszLeaderboardName, double score, int _bufferId, bool _forceupdate)
{
	if (!SteamUser()->BLoggedOn())
	{
		// DebugConsoleOutput("Upload score failed: must be logged on\n");
		return -1;
	}

	int32 aExtraData[kLBExtraDataMax] = {0};
	int32* pExtraData = NULL;
	int dataCount = 0;

	if (_bufferId >= 0)
	{
		void* bufferRawData = nullptr;
		int bufferRawSize = 0;
		const int maxBytesSize = kLBExtraDataMax * sizeof(int);
		if (BufferGetContent(_bufferId, &bufferRawData, &bufferRawSize) && bufferRawData)
		{
			if (bufferRawSize > maxBytesSize)
			{
				// truncate...(or, abandon...)
				DebugConsoleOutput("steam_upload_score_buffer: requested upload of %d bytes was truncated to max of %d bytes\n", bufferRawSize, maxBytesSize);
				bufferRawSize = maxBytesSize;
			}

			dataCount = (bufferRawSize + 3) / 4;  // always rounds up to largest int count (but never >64)
			memcpy(aExtraData, bufferRawData, bufferRawSize);
			pExtraData = aExtraData;
			YYFree(bufferRawData);
			// !!! BufferGetContent returns a copy of the memory allocated via YYAlloc, so we must free it
		}
		else
		{
			DebugConsoleOutput("steam_upload_score_buffer: buffer index %d does not exist - no data will be uploaded\n", _bufferId);
		}
	}

	// if we have stored handle for leaderboard name,  post
	// otherwise Q post & request leaderboard name
	SteamLeaderboard_t hLeaderboard;
	if (GetLeaderboardHandle(pszLeaderboardName, hLeaderboard))
	{
		SteamAPICall_t hSteamAPICall;
		// SteamAPICall_t hSteamAPICall = SteamUserStats()->UploadLeaderboardScore( hLeaderboard, k_ELeaderboardUploadScoreMethodKeepBest, (int32)score, NULL, 0
		// );
		if (_forceupdate)
			hSteamAPICall =
				SteamUserStats()->UploadLeaderboardScore(hLeaderboard, k_ELeaderboardUploadScoreMethodForceUpdate, (int32)score, pExtraData, dataCount);
		else
			hSteamAPICall =
				SteamUserStats()->UploadLeaderboardScore(hLeaderboard, k_ELeaderboardUploadScoreMethodKeepBest, (int32)score, pExtraData, dataCount);

		// new handler for each request, to make sure we get a result for each post
		CLeaderboardUploadHandler* pResultHandler = new CLeaderboardUploadHandler(s_postId);
		pResultHandler->SetCallResult(hSteamAPICall);
	}
	else
	{
		// add post request to Q, perform post when we get leaderboard callback handle
		SLBRequest* pReq;
		if (pExtraData == NULL)
			pReq = new SLBRequest(pszLeaderboardName, (int)score, s_postId);
		else  // need to store extra data if queueing request, pesky
			pReq = new SLBRequest(pszLeaderboardName, (int)score, s_postId, pExtraData, dataCount);

		QueueLBRequest(pReq);
	}
	return s_postId++;
}

YYEXPORT void /*double*/ steam_upload_score(RValue& Result,
											CInstance* selfinst,
											CInstance* otherinst,
											int argc,
											RValue* arg)  //(const char* pszLeaderboardName, double score)
{
	const char* pszLeaderboardName = YYGetString(arg, 0);
	double score = YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = Steam_UserStats_UploadScore(pszLeaderboardName, score, -1, false);
}

YYEXPORT void /*double*/ steam_upload_score_ext(RValue& Result,
												CInstance* selfinst,
												CInstance* otherinst,
												int argc,
												RValue* arg)  //(const char* pszLeaderboardName, double score, bool _forceupdate)
{
	const char* pszLeaderboardName = YYGetString(arg, 0);
	double score = YYGetReal(arg, 1);
	bool _forceupdate = YYGetBool(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = Steam_UserStats_UploadScore(pszLeaderboardName, score, -1, _forceupdate);
}

YYEXPORT void /*double*/ steam_upload_score_buffer(RValue& Result,
												   CInstance* selfinst,
												   CInstance* otherinst,
												   int argc,
												   RValue* arg)	 //(const char* pszLeaderboardName, double score, int _bufferId)
{
	const char* pszLeaderboardName = YYGetString(arg, 0);
	double score = YYGetReal(arg, 1);
	int _bufferId = (int)YYGetReal(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = Steam_UserStats_UploadScore(pszLeaderboardName, score, _bufferId, false);
}

YYEXPORT void /*double*/ steam_upload_score_buffer_ext(RValue& Result,
													   CInstance* selfinst,
													   CInstance* otherinst,
													   int argc,
													   RValue* arg)	 //(const char* pszLeaderboardName, double score, int _bufferId, bool _forceupdate)
{
	const char* pszLeaderboardName = YYGetString(arg, 0);
	double score = YYGetReal(arg, 1);
	int _bufferId = YYGetInt32(arg, 2);
	bool _forceupdate = YYGetBool(arg, 3);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = Steam_UserStats_UploadScore(pszLeaderboardName, score, _bufferId, _forceupdate);
}

/////////////////////////////////////////////////////////// DOWNLOAD /////////////////////////////////////////////////////

//    \brief    Downloads scores using a starting offset
YYEXPORT void /*double*/ steam_download_scores(
	RValue& Result,
	CInstance* selfinst,
	CInstance* otherinst,
	int argc,
	RValue* arg)  //(const char* pszLeaderboardName, double startidx, double endidx)/*Steam_UserStats_DownloadScores*/
{
	const char* pszLeaderboardName = YYGetString(arg, 0);
	double startidx = YYGetReal(arg, 1);
	double endidx = YYGetReal(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	if (!SteamUser()->BLoggedOn())
	{
		DebugConsoleOutput("Download scores failed: must be logged on\n");
		Result.kind = VALUE_REAL;
		Result.val = -1;
		return;	 //=invalid async id
	}

	// create a new async context for the returned data
	int async_id = getAsyncRequestInd();  // g_HTTP_ID;
	//

	SteamLeaderboard_t hLeaderboard;
	if (GetLeaderboardHandle(pszLeaderboardName, hLeaderboard))
	{
		// create a handler instance so we can identify the http_req_context
		CLeaderboardDownloadHandler* pResultHandler = new CLeaderboardDownloadHandler(async_id);
		SteamAPICall_t hSteamAPICall = SteamUserStats()->DownloadLeaderboardEntries(hLeaderboard, k_ELeaderboardDataRequestGlobal, (int)startidx, (int)endidx);
		pResultHandler->SetCallResult(hSteamAPICall);
	}
	else
	{
		// TODO:: Q download request
		SLBRequest* pReq = new SLBRequest(/*pContext*/ NULL, pszLeaderboardName, k_ELeaderboardDataRequestGlobal, (int)startidx, (int)endidx);
		pReq->m_postId = async_id;
		QueueLBRequest(pReq);
	}

	Result.kind = VALUE_REAL;
	Result.val = (double)async_id;
}

//\brief    Downloads scores around the current user
YYEXPORT void /*double*/ steam_download_scores_around_user(
	RValue& Result,
	CInstance* selfinst,
	CInstance* otherinst,
	int argc,
	RValue* arg)  //( const char* pszLeaderboardName, double rangeStart, double rangeEnd )/*Steam_UserStats_DownloadScoresAroundUser*/
{
	const char* pszLeaderboardName = YYGetString(arg, 0);
	double rangeStart = YYGetReal(arg, 1);
	double rangeEnd = YYGetReal(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	if (!SteamUser()->BLoggedOn())
	{
		DebugConsoleOutput("Download scores failed: must be logged on\n");
		Result.kind = VALUE_REAL;
		Result.val = -1;
		return;	 //=invalid async id
	}

	int async_id = getAsyncRequestInd();  // g_HTTP_ID;

	SteamLeaderboard_t hLeaderboard;
	if (GetLeaderboardHandle(pszLeaderboardName, hLeaderboard))
	{
		CLeaderboardDownloadHandler* pResultHandler = new CLeaderboardDownloadHandler(async_id);
		SteamAPICall_t hSteamAPICall =
			SteamUserStats()->DownloadLeaderboardEntries(hLeaderboard, k_ELeaderboardDataRequestGlobalAroundUser, (int)rangeStart, (int)rangeEnd);
		pResultHandler->SetCallResult(hSteamAPICall);
	}
	else
	{
		// Q download request
		SLBRequest* pReq = new SLBRequest(/*pContext*/ NULL, pszLeaderboardName, k_ELeaderboardDataRequestGlobalAroundUser, (int)rangeStart, (int)rangeEnd);
		pReq->m_postId = async_id;
		QueueLBRequest(pReq);
	}

	// return async id
	Result.kind = VALUE_REAL;
	Result.val = (double)async_id;
}

//\brief    Downloads friends score for current leaderboard
YYEXPORT void /*double*/ steam_download_friends_scores(RValue& Result,
													   CInstance* selfinst,
													   CInstance* otherinst,
													   int argc,
													   RValue* arg)	 // const char* pszLeaderboardName )/*Steam_UserStats_DownloadFriendsScores*/
{
	const char* pszLeaderboardName = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	if (!SteamUser()->BLoggedOn())
	{
		DebugConsoleOutput("Download scores failed: must be logged on\n");
		Result.kind = VALUE_REAL;
		Result.val = -1;
		return;	 //=invalid async id
	}

	// create a new async context for the returned data
	int async_id = getAsyncRequestInd();  // g_HTTP_ID;

	SteamLeaderboard_t hLeaderboard;
	if (GetLeaderboardHandle(pszLeaderboardName, hLeaderboard))
	{
		// create a handler instance so we can identify the http_req_context
		CLeaderboardDownloadHandler* pResultHandler = new CLeaderboardDownloadHandler(async_id);
		SteamAPICall_t hSteamAPICall = SteamUserStats()->DownloadLeaderboardEntries(hLeaderboard, k_ELeaderboardDataRequestFriends, 0, 0);
		pResultHandler->SetCallResult(hSteamAPICall);
	}
	else
	{
		// TODO:: Q download request
		SLBRequest* pReq = new SLBRequest(/*pContext*/ NULL, pszLeaderboardName, k_ELeaderboardDataRequestFriends, 0, 0);
		pReq->m_postId = async_id;
		QueueLBRequest(pReq);
	}

	// return async id
	Result.kind = VALUE_REAL;
	Result.val = (double)async_id;
}

void expand_escapes(std::string& input_string)
{
	for (std::string::iterator it = input_string.begin(); it != input_string.end(); ++it)
	{
		switch (*it)
		{
			case '"':
			{
				it = input_string.insert(it, '\\') + 1;
				break;
			}

			case '\\':
			{
				it = input_string.insert(it, '\\') + 1;
				break;
			}

			case '/':
			{
				it = input_string.insert(it, '\\') + 1;
				break;
			}

			case '\b':
			{
				*it = 'b';
				it = input_string.insert(it, '\\') + 1;
				break;
			}

			case '\f':
			{
				*it = 'f';
				it = input_string.insert(it, '\\') + 1;
				break;
			}

			case '\n':
			{
				*it = 'n';
				it = input_string.insert(it, '\\') + 1;
				break;
			}

			case '\r':
			{
				*it = 'r';
				it = input_string.insert(it, '\\') + 1;
				break;
			}

			case '\t':
			{
				*it = 't';
				it = input_string.insert(it, '\\') + 1;
				break;
			}
		}
	}
}

// leaderboard get callback
void OnDownloadScoreResult(LeaderboardScoresDownloaded_t* pCallback, bool bIOFailure, int callId)
{
	int map = CreateDsMap(0, 0);
	g_pYYRunnerInterface->DsMapAddDouble(map, "id", (double)callId);
	g_pYYRunnerInterface->DsMapAddString(map, "event_type", "leaderboard_download");
	g_pYYRunnerInterface->DsMapAddDouble(map, "status", bIOFailure ? 1.0 : 0.0);

	if (bIOFailure)
	{
		g_pYYRunnerInterface->CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
		return;
	}

	int numLeaderboardEntries;
	if (pCallback->m_cEntryCount < kMaxEntries)
		numLeaderboardEntries = pCallback->m_cEntryCount;
	else
		numLeaderboardEntries = kMaxEntries;

	const char* pszLBName = SteamUserStats()->GetLeaderboardName(pCallback->m_hSteamLeaderboard);

	g_pYYRunnerInterface->DsMapAddString(map, "lb_name", pszLBName);
	g_pYYRunnerInterface->DsMapAddDouble(map, "num_entries", (double)numLeaderboardEntries);

	std::stringstream sJson;

	sJson << "{\n    \"entries\": [\n        ";
	for (int index = 0; index < numLeaderboardEntries; index++)
	{
		// SteamUserStats()->GetDownloadedLeaderboardEntry( pCallback->m_hSteamLeaderboardEntries,index,&pData->m_Entries[index],NULL,0);
		// SteamUserStats()->GetDownloadedLeaderboardEntry(pCallback->m_hSteamLeaderboardEntries, index, &(pCallback->m_hSteamLeaderboard->m_Entries[index]),
		// pExtraData, kLBExtraDataMax);
		LeaderboardEntry_t leaderboardEntry;
		int32 pExtraData[kLBExtraDataMax] = {0};
		SteamUserStats()->GetDownloadedLeaderboardEntry(pCallback->m_hSteamLeaderboardEntries, index, &leaderboardEntry, pExtraData, kLBExtraDataMax);

		std::string sUserName = SteamFriends()->GetFriendPersonaName(leaderboardEntry.m_steamIDUser);
		expand_escapes(sUserName);

		sJson << "        {"
			  << " \"name\"  : "
			  << "\"" << sUserName << "\""
			  << ","
			  << " \"score\" : " << leaderboardEntry.m_nScore << ","
			  << " \"rank\"  : " << leaderboardEntry.m_nGlobalRank
			  << ","
			  // always encode this as an int64json string (GM Format)
			  // snprintf(int64buff, 0x20, "@i64@%llx$i64$", int64val);
			  << " \"userID\": "
			  << "\"@i64@" << std::hex << leaderboardEntry.m_steamIDUser.ConvertToUint64() << std::dec << "$i64$\"";

		if (leaderboardEntry.m_cDetails > 0)
		{
			int numBytes = leaderboardEntry.m_cDetails * sizeof(int32);
			// btoa("AAAA") -> 'QUFBQQ==' 8 bytes
			// so one int32 takes approximately 8 bytes
			// but since the '==' padding is only applied to the end, not to every int
			// this size should be sufficiently enough, also ensure the last byte is always null
			char b64string[(kLBExtraDataMax * 8) + 1] = {'\0'};

			if (g_pYYRunnerInterface->Base64Encode((const char*)pExtraData, numBytes, b64string, sizeof(b64string) - 1))
			{
				std::string sb64string(b64string);
				expand_escapes(sb64string);

				sJson << ","
					  << " \"data\"  : "
					  << "\"" << sb64string << "\"";
			}
		}

		sJson << " }";

		if (index < numLeaderboardEntries - 1)
		{
			sJson << ",";
		}

		sJson << "\n        ";
	}
	sJson << "\n    ]\n}\n";

	std::string sjsons = sJson.str();

	g_pYYRunnerInterface->DsMapAddString(map, "entries", sjsons.c_str());

	g_pYYRunnerInterface->CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

//////////////////Achievements & Stats/////////////////////////////////////////////////////////////////////////////////////////////////

class UserStatCallbacks
{
   public:
	UserStatCallbacks()
		: m_CallbackUserStatsStored(this, &UserStatCallbacks::OnUserStatsStored),
		  m_CallbackAchievementStored(this, &UserStatCallbacks::OnAchievementStored),
		  m_CallbackUserStatsReceived(this, &UserStatCallbacks::OnUserStatsReceived)
	{
	}

	/*void    SetLeaderboardUploadCallback ( SteamAPICall_t apicall )
	{
		m_SteamCallResultUploadScore.Set(apicall,this,&UserStatCallbacks::OnUploadScore);
	}*/

	void OnUserStatsReceived(UserStatsReceived_t* pCallback)
	{
		// we may get callbacks for other games' stats arriving, ignore them
		if (SteamUtils()->GetAppID() == pCallback->m_nGameID)
		{
			OnUserStatsReceivedCallback(pCallback);
		}
	}

	void OnUserStatsStored(UserStatsStored_t* pCallback)
	{
		// we may get callbacks for other games' stats arriving, ignore them
		if (SteamUtils()->GetAppID() == pCallback->m_nGameID)
		{
			OnUserStatsStoredCallback(pCallback);
		}
	}

	void OnAchievementStored(UserAchievementStored_t* pCallback)
	{
		// we may get callbacks for other games' stats arriving, ignore them
		if (SteamUtils()->GetAppID() == pCallback->m_nGameID)
		{
			// Success!
			DebugConsoleOutput("achievement store SUCCESS\n");
		}
	}

	void OnNumberOfCurrentPlayers(NumberOfCurrentPlayers_t* pParam, bool bIOFailure)
	{
		int map = CreateDsMap(0, 0);

		DsMapAddString(map, "event_type", "number_of_current_players");
		if (pParam != nullptr && !bIOFailure)
		{
			DsMapAddBool(map, "success", pParam->m_bSuccess);
			// this is a int32 for some reason... kinda low but whatever
			DsMapAddDouble(map, "players", pParam->m_cPlayers);
		}
		else
		{
			DsMapAddBool(map, "success", false);
			DsMapAddDouble(map, "players", 0);
		}

		CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
	}

	bool StartGetNumberOfCurrentPlayers()
	{
		if (m_CallResultNumberOfCurrentPlayers.IsActive())
			return false; // already busy

		const auto apiCall = SteamUserStats()->GetNumberOfCurrentPlayers();
		if (apiCall == k_uAPICallInvalid)
			return false; // failed to start the request

		m_CallResultNumberOfCurrentPlayers.Set(apiCall, this, &UserStatCallbacks::OnNumberOfCurrentPlayers);
		return true;
	}

	// CCallResult<UserStatCallbacks, LeaderboardScoreUploaded_t>        m_SteamCallResultUploadScore;

	CCallback<UserStatCallbacks, UserStatsStored_t, false> m_CallbackUserStatsStored;
	CCallback<UserStatCallbacks, UserAchievementStored_t, false> m_CallbackAchievementStored;
	CCallback<UserStatCallbacks, UserStatsReceived_t, false> m_CallbackUserStatsReceived;
	CCallResult<UserStatCallbacks, NumberOfCurrentPlayers_t> m_CallResultNumberOfCurrentPlayers;
};
//- do we need to initialise steam first, since constructor registers callbacks...?
static UserStatCallbacks* m_pUserStatCallback = NULL;

///    \brief    Sets the achievement to be achieved
YYEXPORT void /*double*/ steam_set_achievement(RValue& Result,
											   CInstance* selfinst,
											   CInstance* otherinst,
											   int argc,
											   RValue* arg)	 //(const char* pAchievementID)/*Steam_UserStats_SetAchievement*/
{
	const char* pAchievementID = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)	// we cant set stats until we have got callback result from SteamUserStats()->RequestCurrentStats()
	{
		if (SteamUserStats()->SetAchievement(pAchievementID) == true)
		{
			// Store stats end of frame
			m_bStoreStats = true;
			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

///    \brief    Gets the specified achievement state
YYEXPORT void /*double*/ steam_get_achievement(RValue& Result,
											   CInstance* selfinst,
											   CInstance* otherinst,
											   int argc,
											   RValue* arg)	 //(const char* pAchievementID)/*Steam_UserStats_GetAchievement*/
{
	const char* pAchievementID = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	// need to wait for request stats return...? i believe so
	if (m_bStatsReady)
	{
		bool bAchieved = false;

		if (SteamUserStats()->GetAchievement(pAchievementID, &bAchieved) == true)
		{
			Result.val = bAchieved ? 1.0 : 0.0;
			return;
		}
	}
	Result.val = 0.0;

	return;
}

///    \brief    Clears the specified achievement
YYEXPORT void /*double*/ steam_clear_achievement(RValue& Result,
												 CInstance* selfinst,
												 CInstance* otherinst,
												 int argc,
												 RValue* arg)  //(const char* pAchievementID)/*Steam_UserStats_ClearAchievement*/
{
	const char* pAchievementID = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)
	{
		bool bRet = SteamUserStats()->ClearAchievement(pAchievementID);
		if (bRet == true)
		{
			// Store stats end of frame
			m_bStoreStats = true;
			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

/////////////////////////////////////////////////////////////////STATS

///    \brief    Sets the specified stat as a int
YYEXPORT void /*double*/ steam_set_stat_int(RValue& Result,
											CInstance* selfinst,
											CInstance* otherinst,
											int argc,
											RValue* arg)  //(const char* pStatName, double val)/*Steam_UserStats_SetStatInt*/
{
	const char* pStatName = YYGetString(arg, 0);
	double val = YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)
	{
		if (SteamUserStats()->SetStat(pStatName, (int32)val) == true)
		{
			// Store stats end of frame
			m_bStoreStats = true;
			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

///    \brief    Sets the specified stat as a float
YYEXPORT void /*double*/ steam_set_stat_float(RValue& Result,
											  CInstance* selfinst,
											  CInstance* otherinst,
											  int argc,
											  RValue* arg)	//(const char* pStatName, double val)/*Steam_UserStats_SetStatFloat*/
{
	const char* pStatName = YYGetString(arg, 0);
	double val = YYGetReal(arg, 1);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)
	{
		if (SteamUserStats()->SetStat(pStatName, (float)val) == true)
		{
			m_bStoreStats = true;  // Store stats end of frame
			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

///    \brief    Sets the specified Average Rate Stat
YYEXPORT void /*double*/ steam_set_stat_avg_rate(
	RValue& Result,
	CInstance* selfinst,
	CInstance* otherinst,
	int argc,
	RValue* arg)  //(const char* pStatName, double dCountThisSession, double dSessionLength)/*Steam_UserStats_SetStatAvgRate*/
{
	const char* pStatName = YYGetString(arg, 0);
	double dCountThisSession = YYGetReal(arg, 1);
	double dSessionLength = YYGetReal(arg, 2);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)
	{
		if (SteamUserStats()->UpdateAvgRateStat(pStatName, (float)dCountThisSession, dSessionLength) == true)
		{
			m_bStoreStats = true;  // Store stats end of frame
			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

///    \brief    Gets the specified int stat
YYEXPORT void /*double*/ steam_get_stat_int(RValue& Result,
											CInstance* selfinst,
											CInstance* otherinst,
											int argc,
											RValue* arg)  //(const char* pStatName)/*Steam_UserStats_GetStatInt*/
{
	const char* pStatName = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)	// cannot query until RequestCurrentStats() callback received
	{
		int32 statval;

		if (SteamUserStats()->GetStat(pStatName, &statval) == true)
		{
			Result.val = (double)statval;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

///    \brief    Get the specified float stat
YYEXPORT void /*double*/ steam_get_stat_float(RValue& Result,
											  CInstance* selfinst,
											  CInstance* otherinst,
											  int argc,
											  RValue* arg)	//(const char* pStatName)/*Steam_UserStats_GetStatFloat*/
{
	const char* pStatName = YYGetString(arg, 0);
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)	// cannot query until RequestCurrentStats() callback received
	{
		float statval;

		if (SteamUserStats()->GetStat(pStatName, &statval) == true)
		{
			Result.val = (double)statval;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

///    \brief    Get the specified avgrate stat
YYEXPORT void /*double*/ steam_get_stat_avg_rate(RValue& Result,
												 CInstance* selfinst,
												 CInstance* otherinst,
												 int argc,
												 RValue* arg)  //(const char* pStatName)/*Steam_UserStats_GetStatAvgRate*/
{
	const char* pStatName = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)	// cannot query until RequestCurrentStats() callback received
	{
		float statval;

		if (SteamUserStats()->GetStat(pStatName, &statval) == true)
		{
			Result.val = (double)statval;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

///    \brief    Resets all the stats to the server defaults
YYEXPORT void /*double*/ steam_reset_all_stats(RValue& Result,
											   CInstance* selfinst,
											   CInstance* otherinst,
											   int argc,
											   RValue* arg)	 //()/*Steam_UserStats_ResetAllStats*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)
	{
		if (SteamUserStats() != NULL)
		{
			SteamUserStats()->ResetAllStats(false);
			m_bStoreStats = true;  // Store stats end of frame
			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

////////////////////////////// Global Stats

class CRequestGlobalStats
{
   public:
	int m_postId;

	CCallResult<CRequestGlobalStats, GlobalStatsReceived_t> m_SteamCallResultGlobalStats;

	CRequestGlobalStats(int _postId) : m_postId(_postId) {}

	void SetCallResult(SteamAPICall_t apicall) { m_SteamCallResultGlobalStats.Set(apicall, this, &CRequestGlobalStats::OnGlobalStatsResult); }

	void OnGlobalStatsResult(GlobalStatsReceived_t* pCallback, bool bIOFailure)
	{
		auto mapID = CreateDsMap(0, 0);
		DsMapAddString(mapID, "event_type", "steam_request_global_stats");

		if (!bIOFailure && pCallback->m_eResult == k_EResultOK && SteamUtils()->GetAppID() == pCallback->m_nGameID)
		{
			// finished with handler, free & deregister
			m_bStatsGlobalReady = true;
			DsMapAddBool(mapID, "success", true);
			delete this;
		}
		else DsMapAddBool(mapID, "success", false);

		CreateAsyncEventWithDSMap(mapID, EVENT_OTHER_WEB_STEAM);
	}
};

YYEXPORT void steam_request_global_stats(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	int nHistoryDays = (int)YYGetReal(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)
	{
		if (SteamUserStats() != NULL)
		{
			SteamAPICall_t mSteamAPICall_t = SteamUserStats()->RequestGlobalStats(nHistoryDays);
			CRequestGlobalStats* callback = new CRequestGlobalStats(getAsyncRequestInd());
			callback->SetCallResult(mSteamAPICall_t);

			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

class CRequestGlobalAchievementPercentages
{
   public:
	int m_postId;

	CCallResult<CRequestGlobalAchievementPercentages, GlobalAchievementPercentagesReady_t> m_SteamCallResultGlobalAchievementPercentages;

	CRequestGlobalAchievementPercentages(int _postId) : m_postId(_postId) {}

	void SetCallResult(SteamAPICall_t apicall)
	{
		m_SteamCallResultGlobalAchievementPercentages.Set(apicall, this, &CRequestGlobalAchievementPercentages::OnCRequestGlobalAchievementPercentages);
	}

	void OnCRequestGlobalAchievementPercentages(GlobalAchievementPercentagesReady_t* pCallback, bool bIOFailure)
	{
		auto mapID = CreateDsMap(0, 0);
		DsMapAddString(mapID, "event_type", "steam_request_global_achievement_percentages");

		if (!bIOFailure && pCallback->m_eResult == k_EResultOK && SteamUtils()->GetAppID() == pCallback->m_nGameID)
		{
			// finished with handler, free & deregister
			m_bStatsGlobalAchievementReady = true;
			DsMapAddBool(mapID, "success", true);
			delete this;
			
		}
		else DsMapAddBool(mapID, "success", false);

		CreateAsyncEventWithDSMap(mapID, EVENT_OTHER_WEB_STEAM);
	}
};

YYEXPORT void steam_request_global_achievement_percentages(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;

	if (m_bStatsReady)
	{
		if (SteamUserStats() != NULL)
		{
			SteamAPICall_t mSteamAPICall_t = SteamUserStats()->RequestGlobalAchievementPercentages();
			CRequestGlobalAchievementPercentages* callback = new CRequestGlobalAchievementPercentages(getAsyncRequestInd());
			callback->SetCallResult(mSteamAPICall_t);

			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

YYEXPORT void steam_get_achievement_achieved_percent(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	const char* statname = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsGlobalAchievementReady)
	{
		if (SteamUserStats() != NULL)
		{
			float percent;
			if (SteamUserStats()->GetAchievementAchievedPercent(statname, &percent))
			{
				Result.val = percent;
				return;
			}
			else
			{
				Result.val = 0.0;
				return;
			}
		}
	}
	Result.val = 0.0;
	return;
}

constexpr int kAchNameMaxLength = 1024;

YYEXPORT void steam_get_most_achieved_achievement_info(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	YYStructCreate(&Result);

	if (!steam_is_initialised) { return; }

	if (m_bStatsGlobalAchievementReady)
	{
		if (SteamUserStats() != NULL)
		{
			float percent;
			bool achieved;
			char pchName[kAchNameMaxLength]{};

			int iterator = SteamUserStats()->GetMostAchievedAchievementInfo(pchName, sizeof(pchName), &percent, &achieved);
			YYStructAddInt(&Result, "iterator", iterator);

			if (iterator != -1)
			{
				YYStructAddString(&Result, "achievement", pchName);
				YYStructAddDouble(&Result, "percent", percent);
				YYStructAddBool(&Result, "achieved", achieved);
				return;
			}
		}
	}
	return;
}

YYEXPORT void steam_get_next_most_achieved_achievement_info(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	auto prevIterator = YYGetInt32(arg, 0);

	YYStructCreate(&Result);

	if (!steam_is_initialised) { return; }

	if (m_bStatsGlobalAchievementReady)
	{
		if (SteamUserStats() != NULL)
		{
			float percent;
			bool achieved;
			char pchName[kAchNameMaxLength]{};

			int iterator = SteamUserStats()->GetNextMostAchievedAchievementInfo(prevIterator, pchName, sizeof(pchName), &percent, &achieved);
			YYStructAddInt(&Result, "iterator", iterator);

			if (iterator != -1)
			{
				YYStructAddString(&Result, "achievement", pchName);
				YYStructAddDouble(&Result, "percent", percent);
				YYStructAddBool(&Result, "achieved", achieved);
				return;
			}
		}
	}
	return;
}

YYEXPORT void steam_get_global_stat_int(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_REAL;
	Result.val = NAN;

	const char* pStatName = YYGetString(arg, 0);

	if (!steam_is_initialised) return;

	if (m_bStatsGlobalReady)
	{
		if (SteamUserStats() != NULL)
		{
			int64 pData = 0;
			if (!SteamUserStats()->GetGlobalStat(pStatName, &pData))
			{
				DebugConsoleOutput("%s Failed: wrong data type for stat '%s'\n", __FUNCTION__, pStatName);
				return;
			}

			Result.kind = VALUE_INT64;
			Result.v64 = pData;
		}
		else
		{
			DebugConsoleOutput("%s Failed: could not access SteamUserStats interface\n", __FUNCTION__);
		}
	}
	else
	{
		DebugConsoleOutput("%s Failed: global stats are not ready call: 'steam_request_global_stats'\n", __FUNCTION__);
	}
}

YYEXPORT void steam_get_global_stat_real(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_REAL;
	Result.val = NAN;

	const char* pStatName = YYGetString(arg, 0);

	if (!steam_is_initialised) return;

	if (m_bStatsGlobalReady)
	{
		if (SteamUserStats() != NULL)
		{
			double pData = 0;
			if (!SteamUserStats()->GetGlobalStat(pStatName, &pData))
			{
				DebugConsoleOutput("%s Failed: wrong data type for stat '%s'\n", __FUNCTION__, pStatName);
				return;
			}
			Result.val = pData;
		}
		else
		{
			DebugConsoleOutput("%s Failed: could not access SteamUserStats interface\n", __FUNCTION__);
		}
	}
	else
	{
		DebugConsoleOutput("%s Failed: global stats are not ready call: 'steam_request_global_stats'\n", __FUNCTION__);
	}
	return;
}

YYEXPORT void steam_get_global_stat_history_int(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	YYCreateArray(&Result);
	
	if (!steam_is_initialised) return;

	const char* pStatName = YYGetString(arg, 0);

	if (m_bStatsGlobalReady)
	{
		if (SteamUserStats() != NULL)
		{
			constexpr int MAX_VALID_ENTRIES = 60;
			std::vector<int64> pData(MAX_VALID_ENTRIES); 

			SteamUserStats()->GetGlobalStatHistory(pStatName, pData.data(), MAX_VALID_ENTRIES);
			_SW_SetArrayOfInt64(&Result, pData);
		}
		else
		{
			DebugConsoleOutput("%s Failed: could not access SteamUserStats interface\n", __FUNCTION__);
		}
	}
	else
	{
		DebugConsoleOutput("%s Failed: global stats are not ready call: 'steam_request_global_stats'\n", __FUNCTION__);
	}
}

YYEXPORT void steam_get_global_stat_history_real(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	YYCreateArray(&Result);

	if (!steam_is_initialised) return;

	const char* pStatName = YYGetString(arg, 0);

	if (m_bStatsGlobalReady)
	{
		if (SteamUserStats() != NULL)
		{
			constexpr int MAX_VALID_ENTRIES = 60;
			std::vector<double> pData(MAX_VALID_ENTRIES);

			SteamUserStats()->GetGlobalStatHistory(pStatName, pData.data(), MAX_VALID_ENTRIES);
			_SW_SetArrayOfReal(&Result, pData);
		}
		else
		{
			DebugConsoleOutput("%s Failed: could not access SteamUserStats interface\n", __FUNCTION__);
		}
	}
	else
	{
		DebugConsoleOutput("%s Failed: global stats are not ready call: 'steam_request_global_stats'\n", __FUNCTION__);
	}
}

YYEXPORT void steam_get_leaderboard_display_type(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	const char* pszLeaderboardName = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	SteamLeaderboard_t hLeaderboard;
	if (GetLeaderboardHandle(pszLeaderboardName, hLeaderboard))
	{
		int type = SteamUserStats()->GetLeaderboardDisplayType(hLeaderboard);
		Result.kind = VALUE_REAL;
		Result.val = type;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = -1;
	}
}

YYEXPORT void steam_get_leaderboard_entry_count(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	const char* pszLeaderboardName = YYGetString(arg, 0);

	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	SteamLeaderboard_t hLeaderboard;
	if (GetLeaderboardHandle(pszLeaderboardName, hLeaderboard))
	{
		int type = SteamUserStats()->GetLeaderboardEntryCount(hLeaderboard);
		Result.kind = VALUE_REAL;
		Result.val = type;
	}
	else
	{
		Result.kind = VALUE_REAL;
		Result.val = -1;
	}
}

///    \brief    Resets all the stats to the server defaults
YYEXPORT void /*double*/ steam_reset_all_stats_achievements(RValue& Result,
															CInstance* selfinst,
															CInstance* otherinst,
															int argc,
															RValue* arg)  //()/*Steam_UserStats_ResetAllStatsAndAchievements*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	if (m_bStatsReady)
	{
		if (SteamUserStats() != NULL)
		{
			SteamUserStats()->ResetAllStats(true);
			m_bStoreStats = true;  // Store stats end of frame
			Result.val = 1.0;
			return;
		}
	}

	Result.val = 0.0;
	return;
}

YYEXPORT void steam_indicate_achievement_progress(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	const char* pchName = YYGetString(arg, 0);
	uint32 nCurProgress = YYGetUint32(arg, 1);
	uint32 nMaxProgress = YYGetUint32(arg, 2);

	Result.kind = VALUE_REAL;
	Result.val = SteamUserStats()->IndicateAchievementProgress(pchName, nCurProgress, nMaxProgress);
}

YYEXPORT void steam_get_number_of_current_players(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = m_pUserStatCallback->StartGetNumberOfCurrentPlayers();
}

YYEXPORT void steam_get_achievement_progress_limits_int(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_UNDEFINED;
	Result.v64 = 0;

	if (!steam_is_initialised)
	{
		return;
	}

	const char* pchName = YYGetString(arg, 0);

	int32 minProgress = 0, maxProgress = 0;
	if (SteamUserStats()->GetAchievementProgressLimits(pchName, &minProgress, &maxProgress))
	{
		YYStructCreate(&Result);
		YYStructAddDouble(&Result, "min_progress", minProgress);
		YYStructAddDouble(&Result, "max_progress", maxProgress);
	}
}

YYEXPORT void steam_get_achievement_progress_limits_float(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	Result.kind = VALUE_UNDEFINED;
	Result.v64 = 0;

	if (!steam_is_initialised)
	{
		return;
	}

	const char* pchName = YYGetString(arg, 0);

	float minProgress = 0, maxProgress = 0;
	if (SteamUserStats()->GetAchievementProgressLimits(pchName, &minProgress, &maxProgress))
	{
		YYStructCreate(&Result);
		YYStructAddDouble(&Result, "min_progress", minProgress);
		YYStructAddDouble(&Result, "max_progress", maxProgress);
	}
}

void Steam_UserStats_Init()
{
	//(register callbacks?)
	m_pUserStatCallback = new UserStatCallbacks();

	m_aLeaderboardInfo = (SLeaderboardInfo*)g_pYYRunnerInterface->YYAlloc(sizeof(SLeaderboardInfo) * m_MaxLeaderboards);  // , __FILE__, __LINE__);

	// request stats - !!This call needs to be made before you can set any stats or achievements !!
	//- we need to WAIT for callback before we can get or set stats ( i think )
	m_bStatsReady = false;
	m_bStoreStats = false;
	m_bStoringStats = false;
	DebugConsoleOutput("Ok, you can continue\n");
	SteamUserStats()->RequestCurrentStats();  // You will receive a UserStatsReceived_t callback when the data is ready.
}

YYEXPORT void /*double*/ steam_stats_ready(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)  //()/*Steam_UserStats_StatsReady*/
{
	if (!steam_is_initialised)
	{
		Result.kind = VALUE_REAL;
		Result.val = 0;
		return;
	}

	Result.kind = VALUE_REAL;
	Result.val = (m_bStatsReady) ? 1.0 : 0;
	return;
}

void OnUserStatsReceivedCallback(UserStatsReceived_t* pCallback)
{
	if (k_EResultOK == pCallback->m_eResult)
	{
		DebugConsoleOutput("Received stats and achievements from Steam\n");
		m_bStatsReady = true;  // ready to set & get stats
	}
	else
	{
		// DebugConsoleOutput("RequestStats - failed: %d\n", pCallback->m_eResult );
	}
}

void Steam_UserStats_Process()
{
	if (!m_bStatsReady)
		return;

	// stats or achievements updated, send them off
	if (m_bStoreStats)
	{
		// if we have already sent a store stats call, wait till its done before sending again
		if (!m_bStoringStats)
		{
			bool bSuccess = SteamUserStats()->StoreStats();
			// If this failed, we never sent anything to the server, try again later
			m_bStoreStats = !bSuccess;
		}
	}
}

void OnUserStatsStoredCallback(UserStatsStored_t* pCallback)
{
	if (k_EResultOK == pCallback->m_eResult)
	{
		DebugConsoleOutput("StoreStats - success\n");
	}
	else if (k_EResultInvalidParam == pCallback->m_eResult)
	{
		// One or more stats we set broke a constraint. They've been reverted,
		DebugConsoleOutput("StoreStats - some failed to validate\n");
	}
	else
	{
		DebugConsoleOutput("Error storing stats\n");
	}
	m_bStoringStats = false;
}

void Steam_UserStats_Shutdown()
{
	delete m_pUserStatCallback;	 // unregisters callbacks

	g_pYYRunnerInterface->YYFree((void*)m_aLeaderboardInfo);
	m_aLeaderboardInfo = NULL;
}
