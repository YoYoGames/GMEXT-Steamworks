/// steam_lobby_chat.cpp

#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
#include "steam_glue.h"
#include "steam_callbacks.h"

struct steam_lobby_message {
	uint8_t* data;
	size_t size;
	int lifetime;
};

struct {
	vector<steam_lobby_message> arr{};
	int offset = 0;
} static chat_messages;

void steam_lobby_chat_update() {
	size_t removeCount = 0;
	auto& arr = chat_messages.arr;
	auto count = arr.size();
	for (size_t i = 0u; i < count; i++) {
		if (--arr[i].lifetime <= 0) {
			//trace("Freeing message %d", i);
			delete arr[i].data;
			arr[i].data = nullptr;
			removeCount = i + 1;
		}
	}
	if (removeCount > 0) {
		arr.erase(arr.begin(), arr.begin() + removeCount);
		chat_messages.offset += (int)removeCount;
	}
}

#define steam_lobby_max_chat_message_size 4096

YYEXPORT void /*bool*/ steam_lobby_send_chat_message(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(const char* text) 
{
	char* text = (char*)YYGetString(arg, 0);

	if (!steam_lobby_current.IsValid())
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	Result.kind = VALUE_BOOL;
	Result.val = SteamMatchmaking()->SendLobbyChatMsg(steam_lobby_current, text, (int)strlen(text) + 1);
}

YYEXPORT void /*bool*/ steam_lobby_send_chat_message_buffer(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(gml_buffer buf, int size = -1) 
{
	int32 bufferId = YYGetInt32(arg, 0);
	int32 size = YYGetInt32(arg, 1);

	if (!steam_lobby_current.IsValid())
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	void* buffer_data = nullptr;
	int buffer_size = 0;

	if (!BufferGetContent(bufferId, &buffer_data, &buffer_size) || !buffer_data)
	{
		DebugConsoleOutput("steam_lobby_send_chat_message_buffer() - error: specified buffer %d not found\n", (int)bufferId);
		Result.kind = VALUE_BOOL;
		Result.val = false;

		return;
	}

	if (size <= -1 || size > buffer_size) size = buffer_size;

	Result.kind = VALUE_BOOL;
	Result.val = SteamMatchmaking()->SendLobbyChatMsg(steam_lobby_current, buffer_data, size);
	YYFree(buffer_data);
}

YYEXPORT void /*const char**/ steam_lobby_get_chat_message_text(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double message_index) 
{
	double message_index = YYGetReal(arg, 0);

	message_index -= chat_messages.offset;
	if (message_index < 0 || message_index >= chat_messages.arr.size()) 
		YYCreateString(&Result, "");

	YYCreateString(&Result, (char*)chat_messages.arr[(size_t)message_index].data);
}

YYEXPORT void /*double*/ steam_lobby_get_chat_message_size(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(double message_index) 
{
	int64 message_index = YYGetInt64(arg, 0);

	message_index -= chat_messages.offset;
	if (message_index < 0 || message_index >= static_cast<int64>(chat_messages.arr.size()))
	{ 
		Result.kind = VALUE_REAL;
		Result.val = -1;
		return;
	}

	Result.kind = VALUE_INT64;
	Result.v64 = chat_messages.arr[message_index].size;
}

YYEXPORT void /*bool*/ steam_lobby_get_chat_message_data(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(int64_t message_index, gml_buffer buf) 
{
	int64 message_index = YYGetInt64(arg, 0);
	int32 gml_buff = YYGetInt32(arg, 1);
	 
	if (BufferGetFromGML(gml_buff) == NULL)
	{
		DebugConsoleOutput("steam_lobby_get_chat_message_data() - error: specified buffer not found\n");
		Result.kind = VALUE_BOOL;
		Result.val = false;

		return;
	}

	message_index -= chat_messages.offset;
	if (message_index < 0 || message_index >= static_cast<int64>(chat_messages.arr.size()))
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	auto& msg = chat_messages.arr[message_index];
	auto size = msg.size;
	
	if (BufferWriteContent(gml_buff, 0, msg.data, (int)size, true) != size)
	{
		DebugConsoleOutput("steam_lobby_get_chat_message_data() - error: could not write to buffer\n");
		Result.kind = VALUE_BOOL;
		Result.val = false;
	}

	Result.kind = VALUE_BOOL;
	Result.val = true;
	
}

void steam_net_callbacks_t::lobby_chat_message(LobbyChatMsg_t* e) 
{
	steam_lobby_message msg{};
	static uint8_t data[steam_lobby_max_chat_message_size];
	auto size = SteamMatchmaking()->GetLobbyChatEntry(e->m_ulSteamIDLobby, e->m_iChatID, nullptr, &data, sizeof(data), nullptr);
	msg.size = size;
	msg.data = new uint8_t[size + 1];
	msg.data[size] = 0;
	msg.lifetime = 3;
	memcpy(msg.data, data, size);
	auto index = chat_messages.arr.size();
	chat_messages.arr.push_back(msg);
	
	steam_net_event ev = steam_net_event((char*)"lobby_chat_message");
	ev.set_uint64_all("lobby_id", e->m_ulSteamIDLobby);
	ev.set_uint64_all("user_id", e->m_ulSteamIDUser);
	ev.set((char*)"entry_type", e->m_eChatEntryType);
	ev.set((char*)"message_index", (double)index);
	ev.set((char*)"message_size", (double)size);
	ev.dispatch();
}

enum class steam_lobby_member_change {
	entered = 0x01,
	left = 0x02,
	disconnected = 0x04,
	kicked = 0x08,
	banned = 0x10,
};

void steam_net_callbacks_t::lobby_chat_update(LobbyChatUpdate_t* e) 
{
	steam_net_event ev((char*)"lobby_chat_update");
	ev.set_uint64_all("lobby_id", e->m_ulSteamIDLobby);
	ev.set_uint64_all("user_id", e->m_ulSteamIDUserChanged);
	ev.set_uint64_all("change_id", e->m_ulSteamIDMakingChange);
	ev.set((char*)"change_flags", e->m_rgfChatMemberStateChange);
	ev.dispatch();
}
