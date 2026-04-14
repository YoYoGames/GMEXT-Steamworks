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
//    uint64 value64 = (uint64)YYGetInt64(arg, 0);
//
//    if (SteamUGC())
//    {
//        SteamAPICall_t call = SteamUGC()->DeleteItem(value64);
//        steam_item_deleted.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::item_deleted);
//    }
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
    AppId_t AppID = (AppId_t)YYGetReal(arg, 0);

    static ISteamAppTicket* SteamAppTicket = nullptr;
    SteamAppTicket = (ISteamAppTicket*)SteamClient()->GetISteamGenericInterface(SteamAPI_GetHSteamUser(), SteamAPI_GetHSteamPipe(), STEAMAPPTICKET_INTERFACE_VERSION);

    const int k_bufferLength = 256;
    const int k_signatureLength = 128;
    char buffer[k_bufferLength];
    uint32 iAppID;
    uint32 iSteamID;
    uint32 iSignature;
    uint32 cbSignature;
    uint32 ret = SteamAppTicket->GetAppOwnershipTicketData(AppID, buffer, k_bufferLength, &iAppID, &iSteamID, &iSignature, &cbSignature);
    
    RValue Struct = { 0 };
    YYStructCreate(&Struct);

    if (ret > 0)
    {
        AppId_t appID;
        memcpy(&appID, &buffer[iAppID], sizeof(AppId_t));
        YYStructAddDouble(&Struct, "appId", appID);

        CSteamID steamID;
        memcpy(&steamID, &buffer[iSteamID], sizeof(CSteamID));
        YYStructAddInt64(&Struct, "steamId", steamID.ConvertToUint64());

        char signature[k_signatureLength];
        memcpy(signature, &buffer[iSignature], cbSignature);
        char b64string[1024] = { };
        Base64Encode(signature, k_signatureLength, b64string, sizeof b64string);
        YYStructAddString(&Struct, "signature", b64string);
    }
    COPY_RValue(&Result, &Struct);
    FREE_RValue(&Struct);
}

void steam_net_callbacks_t::encrypted_app_ticket_response_received(EncryptedAppTicketResponse_t* r, bool failed)
{
    auto result = r->m_eResult;
    if (result == k_EResultOK)
    {
        uint8 rgubTicket[2048];
        uint32 cubTicket = 0;
        SteamUser()->GetEncryptedAppTicket(rgubTicket, sizeof(rgubTicket), &cubTicket);

        //TODO: Done on Windows 
        
        //480 SteamEncryptedAppTicketSymmetricKeyLen
        //const uint8 rgubKey[k_nSteamEncryptedAppTicketSymmetricKeyLen] = { 0xed, 0x93, 0x86, 0x07, 0x36, 0x47, 0xce, 0xa5, 0x8b, 0x77, 0x21, 0x49, 0x0d, 0x59, 0xed, 0x44, 0x57, 0x23, 0xf0, 0xf6, 0x6e, 0x74, 0x14, 0xe1, 0x53, 0x3b, 0xa3, 0x3c, 0xd8, 0x03, 0xbd, 0xbd };

        //uint8 rgubDecrypted[1024];
        //uint32 cubDecrypted = sizeof(rgubDecrypted);
        //if (!SteamEncryptedAppTicket_BDecryptTicket(rgubTicket, cubTicket, rgubDecrypted, &cubDecrypted, rgubKey, sizeof(rgubKey)))
        //{
        //    DebugConsoleOutput("Ticket failed to decrypt\n");
        //    return;
        //}

        //if (!SteamEncryptedAppTicket_BIsTicketForApp(rgubDecrypted, cubDecrypted, SteamUtils()->GetAppID()))
        //    DebugConsoleOutput("Ticket for wrong app id\n");

        //DebugConsoleOutput("Ok \n");

        //CSteamID steamIDFromTicket;
        //SteamEncryptedAppTicket_GetTicketSteamID(rgubDecrypted, cubDecrypted, &steamIDFromTicket);
        //if (steamIDFromTicket != SteamUser()->GetSteamID())
        //    DebugConsoleOutput("Ticket for wrong user\n");

        //uint32 cubData;
        //uint32* punSecretData = (uint32*)SteamEncryptedAppTicket_GetUserVariableData(rgubDecrypted, cubDecrypted, &cubData);
        //if (cubData != sizeof(uint32) || *punSecretData != k_unSecretData)
        //    printf("Failed to retrieve secret data\n");

        //DebugConsoleOutput("Ok \n");

        steam_net_event e = steam_net_event((char*)"user_encrypted_app_ticket_response_received");


        /*char* b64string_[1024] = { };
        Base64Encode(rgubDecrypted, cubDecrypted, b64string_, sizeof b64string_);
        e.set((char*)"ticket_data_decrypt", (char*)b64string_);*/


        char* b64string[1024] = { };
        Base64Encode(rgubTicket, cubTicket, b64string, sizeof b64string);
        e.set((char*)"ticket_data", (char*)b64string);

        e.set_result(result);
        e.dispatch();
    }
}

CCallResult<steam_net_callbacks_t, EncryptedAppTicketResponse_t> steam_user_app_ticket;
YYEXPORT void /*double*/ steam_user_request_encrypted_app_ticket(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* data, double size)
{
    int32 bufferId = (argc > 0) ? YYGetInt32(arg, 0) : -1;

    void* buffer_data = nullptr;
    int buffer_size = 0;

    if (bufferId >= 0 && !BufferGetContent(bufferId, &buffer_data, &buffer_size))
    {
        DebugConsoleOutput("steam_user_request_encrypted_app_ticket() - error: specified buffer %d not found\n", (int)bufferId);
        Result.kind = VALUE_BOOL;
        Result.val = false;

        return;
    }

    auto cc = SteamUser()->RequestEncryptedAppTicket(buffer_data, buffer_size);
    YYFree(buffer_data);
    steam_user_app_ticket.Set(cc, &steam_net_callbacks, &steam_net_callbacks_t::encrypted_app_ticket_response_received);
    Result.kind = VALUE_BOOL;
    Result.val = true;
}

class CGMAuthTicketCallbacks {
public:

    static CGMAuthTicketCallbacks* m_pAuthTicketCallbacks;

    static void Ensure()
    {
        if (m_pAuthTicketCallbacks == nullptr)
        {
            m_pAuthTicketCallbacks = new CGMAuthTicketCallbacks();
        }
    }

    STEAM_CALLBACK(CGMAuthTicketCallbacks, OnGetTicketForWebApiResponse, GetTicketForWebApiResponse_t);
    STEAM_CALLBACK(CGMAuthTicketCallbacks, OnGetAuthSessionTicketResponse, GetAuthSessionTicketResponse_t);
};

CGMAuthTicketCallbacks *CGMAuthTicketCallbacks::m_pAuthTicketCallbacks = nullptr;

void CGMAuthTicketCallbacks::OnGetTicketForWebApiResponse(GetTicketForWebApiResponse_t* pParam)
{
    int map = CreateDsMap(0,0);
    DsMapAddString(map, "event_type", "ticket_for_web_api_response");
    DsMapAddDouble(map, "result", pParam->m_eResult);
    DsMapAddBool(map, "success", pParam->m_eResult == k_EResultOK);
    DsMapAddDouble(map, "auth_ticket_handle", static_cast<double>(pParam->m_hAuthTicket));
    if (pParam->m_cubTicket > 0)
    {
        int buffer = CreateBuffer(pParam->m_cubTicket, eBuffer_Format_Grow, 1);
        BufferWriteContent(buffer, 0, pParam->m_rgubTicket, pParam->m_cubTicket, true);
        DsMapAddDouble(map, "auth_ticket_buffer", buffer);
        CreateAsyncEventWithDSMapAndBuffer(map, buffer, EVENT_OTHER_WEB_STEAM);
    }
    else
    {
        DsMapAddDouble(map, "auth_ticket_buffer", -1.0);
        CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
    }
}

void CGMAuthTicketCallbacks::OnGetAuthSessionTicketResponse(GetAuthSessionTicketResponse_t* pParam)
{
    int map = CreateDsMap(0,0);
    DsMapAddString(map, "event_type", "ticket_response");
    DsMapAddDouble(map, "result", pParam->m_eResult);
    DsMapAddBool(map, "success", pParam->m_eResult == k_EResultOK);
    DsMapAddDouble(map, "auth_ticket_handle", static_cast<double>(pParam->m_hAuthTicket));
    CreateAsyncEventWithDSMap(map, EVENT_OTHER_WEB_STEAM);
}

HAuthTicket authTicket = k_HAuthTicketInvalid;
YYEXPORT void steam_user_get_auth_ticket_for_web_api(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    Result.kind = VALUE_REAL;
    Result.val = k_HAuthTicketInvalid;

    if (!steam_is_initialised)
    {
        return;
    }

    const char* pchIdentity = nullptr;
    if (argc > 0 && arg)
    {
        pchIdentity = YYGetString(arg, 0);
    }

    CGMAuthTicketCallbacks::Ensure();
    Result.val = SteamUser()->GetAuthTicketForWebApi(pchIdentity);
}

YYEXPORT void steam_user_get_auth_session_ticket(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(char* data, double size)
{
    CGMAuthTicketCallbacks::Ensure();

    uint8 ticketBytes[3000] = { '\0' };
    uint32 ticketSize = 0;

    authTicket = SteamUser()->GetAuthSessionTicket(ticketBytes, sizeof(ticketBytes), &ticketSize, nullptr);

    Result.kind = VALUE_REAL;
    if (ticketSize == 0) {
        // no ticket bytes
        Result.val = -1.0;
    }
    else {
        int ticketBuffer = CreateBuffer(ticketSize, eBuffer_Format_Fixed, 1);
        BufferWriteContent(ticketBuffer, 0, ticketBytes, ticketSize);
        Result.val = ticketBuffer;
    }
}

YYEXPORT void steam_user_cancel_auth_ticket(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
    CGMAuthTicketCallbacks::Ensure();

    HAuthTicket htk = authTicket;

    if (argc > 0 && arg)
    {
        htk = static_cast<HAuthTicket>(YYGetReal(arg, 0));
    }

    SteamUser()->CancelAuthTicket(htk);
    if (htk == authTicket)
    {
        authTicket = k_HAuthTicketInvalid;
    }
}

#pragma endregion
