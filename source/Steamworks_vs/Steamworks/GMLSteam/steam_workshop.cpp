/// steam_workshop.cpp
#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
#include "steam_callbacks.h"

//#if STEAMWORKS >= 142
CCallResult<steam_net_callbacks_t, DeleteItemResult_t> steam_item_deleted;
//YYEXPORT void /*double*/ steam_ugc_delete_item(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double file_high, double file_low) 
//{
//	uint64 value64 = (uint64)YYGetInt64(arg, 0);
//
//	if (SteamUGC()) 
//	{
//		SteamAPICall_t call = SteamUGC()->DeleteItem(value64);
//		steam_item_deleted.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::item_deleted);
//	}
//}

void steam_net_callbacks_t::item_deleted(DeleteItemResult_t* r, bool failed) 
{
	steam_net_event x = steam_net_event((char*)"ugc_delete_item");
	x.set_result(r->m_eResult);
	x.set_uint64_all("published_file_id", r->m_nPublishedFileId);
	x.dispatch();
}
//#endif

#pragma endregion

#pragma region Secure App Tickets
YYEXPORT void /*double*/ steam_get_app_ownership_ticket_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* outbuf, uint32* vals) 
{
	char* outbuf = (char*)YYGetString(arg, 0);
	uint32 vals_ = YYGetUint32(arg, 1);
	uint32* vals = &vals_;

	static ISteamAppTicket* SteamAppTicket = nullptr;
	static bool ready = false;
	if (!ready) {
		ready = true;
		SteamAppTicket = (ISteamAppTicket*)SteamClient()->GetISteamGenericInterface(
			SteamAPI_GetHSteamUser(), SteamAPI_GetHSteamPipe(), STEAMAPPTICKET_INTERFACE_VERSION);
	}
	uint32 ret = 0;
	uint32 iAppID = 0;
	uint32 iSteamID = 0;
	uint32 iSignature = 0;
	uint32 cbSignature = 0;
	if (SteamAppTicket) ret = SteamAppTicket->GetAppOwnershipTicketData(
		vals[0], outbuf, vals[1], &iAppID, &iSteamID, &iSignature, &cbSignature);
	vals[0] = ret;
	vals[1] = iAppID;
	vals[2] = iSteamID;
	vals[3] = iSignature;
	vals[4] = cbSignature;

	Result.kind = VALUE_REAL;
	Result.val = ret;
}

void steam_net_callbacks_t::encrypted_app_ticket_response_received(EncryptedAppTicketResponse_t* r, bool failed) 
{
	steam_net_event e = steam_net_event((char*)"user_encrypted_app_ticket_response_received");
	auto result = r->m_eResult;
	if (result == k_EResultOK) {
		uint8 ticket[1024];
		uint32 ticketSize;
		if (SteamUser()->GetEncryptedAppTicket(&ticket, sizeof ticket, &ticketSize)) {
			static std::string s;
			s.resize(ticketSize+1);
			Base64Encode(ticket, ticketSize,s.data(), ticketSize);//s = b64encode(ticket, ticketSize); 
			e.set((char*) "ticket_data", &s[0]);
		} else {
			DebugConsoleOutput("Failed to retrieve GetEncryptedAppTicket data.");
			result = k_EResultFail;
		}
	}
	e.set_result(result);
	e.dispatch();
}

CCallResult<steam_net_callbacks_t, EncryptedAppTicketResponse_t> steam_user_app_ticket;
YYEXPORT void /*double*/ steam_user_request_encrypted_app_ticket(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* data, double size) 
{
	char* data = (char*)YYGetString(arg, 0);
	//double size = YYGetReal(arg, 1);

	auto cc = SteamUser()->RequestEncryptedAppTicket(data, strlen(data));// (int)size);
	steam_user_app_ticket.Set(cc, &steam_net_callbacks, &steam_net_callbacks_t::encrypted_app_ticket_response_received);
	Result.kind = VALUE_REAL;
	Result.val = 1;
}
#pragma endregion
