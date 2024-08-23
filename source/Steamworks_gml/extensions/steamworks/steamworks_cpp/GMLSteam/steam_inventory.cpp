///// steam_inventory.cpp
//
#include "pch.h"
#include "steam_glue.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"

// @dllg:docName SteamInventoryResult_t steam_inventory_result
// @dllg:docName SteamItemInstanceID_t steam_inventory_item_id
// @dllg:docName SteamItemDef_t steam_inventory_item_def
// @dllg:docName SteamInventoryUpdateHandle_t steam_inventory_update_handle

//// helpers:
#define API SteamInventory()

//#pragma region Result
///
#define steam_inventory_result_invalid (-1 /*#as steam_inventory_result*/)

YYEXPORT void /*int*/ steam_inventory_result_get_status(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryResult_t inv_result) 
{
	int32 inv_result = YYGetInt32(arg, 0);

	Result.kind = VALUE_REAL;
	Result.val = API->GetResultStatus(inv_result);
}
///
enum class steam_inventory_result_status {
	invalid = -1,
	ok = 1,
	fail = 2,
	invalid_param = 8,
	service_unavailable = 20,
	pending = 22,
	limit_exceeded = 25,
	expired = 27,
};

/// (result:steam_inventory_result)->int
YYEXPORT void /*int*/ steam_inventory_result_get_unix_timestamp(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryResult_t inv_result) 
{
	int32 inv_result = YYGetInt32(arg, 0);

	Result.kind = VALUE_REAL;
	Result.val = API->GetResultTimestamp(inv_result);
}

YYEXPORT void /*const char**/ steam_inventory_result_get_item_property(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryResult_t inv_result, int item_index, const char* prop_name) 
{
	int32 inv_result = YYGetInt32(arg, 0);
	int item_index = YYGetInt32(arg, 1);
	char* prop_name = (char*)YYGetString(arg, 2);

	static vector<char> tmp;
	uint32 size = 0;
	if (!API->GetResultItemProperty(inv_result, item_index, prop_name, nullptr, &size))
	{
		YYCreateString(&Result, "");
		return;
	}

	if (tmp.size() <= size) 
		tmp.resize(size + 1);

	if (!API->GetResultItemProperty(inv_result, item_index, prop_name, tmp.data(), &size))
	{
		YYCreateString(&Result, "");
		return;
	}

	YYCreateString(&Result, tmp.data());
}

struct steam_inventory_result_item {
	SteamItemInstanceID_t item_id;
	SteamItemDef_t item_def;
	uint16 quantity;
	uint16 flags;
};

YYEXPORT void /*vector<steam_inventory_result_item>*/ steam_inventory_result_get_items(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryResult_t inv_result) 
{
	int32 inv_result = YYGetInt32(arg, 0);

	uint32 count = 0;
	API->GetResultItems(inv_result, nullptr, &count);
	vector<SteamItemDetails_t> items{};
	items.resize(count);

	if (!API->GetResultItems(inv_result, items.data(), &count))
	{
		RValue Struct{};
		YYStructCreate(&Struct);
		COPY_RValue(&Result, &Struct);
		FREE_RValue(&Struct);

		return;
	}

	vector<RValue> vec{};

	for (uint32 i = 0 ; i < count ; i++)
	{
		RValue Struct{};
		YYStructCreate(&Struct);

		YYStructAddInt64(&Struct, "item_id", items[i].m_itemId);
		YYStructAddDouble(&Struct, "item_def", items[i].m_iDefinition);
		YYStructAddDouble(&Struct, "quantity", items[i].m_unQuantity);
		YYStructAddDouble(&Struct, "flags", items[i].m_unFlags);

		vec.push_back(Struct);
	}

	_SW_SetArrayOfRValue(&Result, vec);
}

YYEXPORT void /*bool*/ steam_inventory_result_destroy(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryResult_t inv_result) 
{
	int32 inv_result = YYGetInt32(arg, 0);

	if (inv_result != k_SteamInventoryResultInvalid) 
	{
		API->DestroyResult(inv_result);
		Result.kind = VALUE_BOOL;
		Result.val = true;
		return;
	}
	else
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}
}
#pragma endregion

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_trigger_item_drop(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamItemDef_t item_def) 
{
	int32 item_def = YYGetInt32(arg, 0);

	SteamInventoryResult_t result;
	if (API->TriggerItemDrop(&result, item_def)) 
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	} 
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_add_promo_item(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamItemDef_t item_def) 
{
	int32 item_def = YYGetInt32(arg, 0);

	SteamInventoryResult_t result;
	if (API->AddPromoItem(&result, item_def)) 
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	} 
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_add_promo_items(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(vector<SteamItemDef_t> item_defs) 
{
	vector<int32> item_defs = _SW_GetArrayOfInt32(arg, 0, "steam_inventory_add_promo_items");

	SteamInventoryResult_t result;
	if (API->AddPromoItems(&result, item_defs.data(), (uint32_t)item_defs.size()))
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	} 
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_consume_item(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamItemInstanceID_t item_id, uint32 quantity) 
{
	int64 item_id = YYGetInt64(arg, 0);
	uint32 quantity = YYGetUint32(arg, 1);

	SteamInventoryResult_t result;
	if (API->ConsumeItem(&result, item_id, quantity)) 
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	}
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

struct steam_inventory_itemdef_w_quantity {
	SteamItemDef_t item_def;
	uint32 quantity;
};

struct steam_inventory_itemid_w_quantity {
	SteamItemInstanceID_t item_id;
	uint32 quantity;
};

vector<steam_inventory_itemdef_w_quantity> argToSteam_inventory_itemdef_w_quantity(RValue* arg, int index)
{
	RValue* pV = &(arg[index]);

	vector<steam_inventory_itemdef_w_quantity> items;
	if (KIND_RValue(pV) == VALUE_ARRAY)
	{
		RValue elem;
		for (int i = 0; GET_RValue(&elem, pV, NULL, i); ++i)
		{
			steam_inventory_itemdef_w_quantity* _struct = new steam_inventory_itemdef_w_quantity();// {0};
			_struct->item_def = static_cast<SteamItemDef_t>(YYStructGetMember(&elem, "item_def")->val);
			_struct->quantity = static_cast<uint32>(YYStructGetMember(&elem, "quantity")->val);

			items.push_back(*_struct);
		}
	}
	else 
	{
		//YYError("%s argument %d incorrect type (%s) expecting an Array", func, (arg_idx + 1), KIND_NAME_RValue(pV));
		//return;
	}

	return items;
}

vector<steam_inventory_itemid_w_quantity> argToSteam_inventory_itemid_w_quantity(RValue* arg, int index)
{
	RValue* pV = &(arg[index]);

	vector<steam_inventory_itemid_w_quantity> items;
	if (KIND_RValue(pV) == VALUE_ARRAY)
	{
		RValue elem;
		for (int i = 0; GET_RValue(&elem, pV, NULL, i); ++i)
		{
			steam_inventory_itemid_w_quantity* _struct = new steam_inventory_itemid_w_quantity();// {0};
			_struct->item_id = static_cast<SteamItemInstanceID_t>(YYStructGetMember(&elem, "item_id")->v64);
			_struct->quantity = static_cast<uint32>(YYStructGetMember(&elem, "quantity")->val);

			items.push_back(*_struct);
		}
	}
	else 
	{
		//YYError("%s argument %d incorrect type (%s) expecting an Array", func, (arg_idx + 1), KIND_NAME_RValue(pV));
		//return;
	}

	return items;
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_exchange_items(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(vector<steam_inventory_itemdef_w_quantity> create, vector< steam_inventory_itemid_w_quantity> destroy) 
{
	const vector<steam_inventory_itemdef_w_quantity>& create = argToSteam_inventory_itemdef_w_quantity(arg, 0);
	const vector<steam_inventory_itemid_w_quantity>& destroy = argToSteam_inventory_itemid_w_quantity(arg, 1);

	vector<SteamItemDef_t> create_defs; create_defs.resize(create.size());
	vector<uint32> create_quantities; create_quantities.resize(create.size());
	for (auto i = 0u; i < create.size(); i++) {
		create_defs[i] = create[i].item_def;
		create_quantities[i] = create[i].quantity;
	}
	
	vector<SteamItemInstanceID_t> destroy_items; destroy_items.resize(destroy.size());
	vector<uint32> destroy_quantities; destroy_quantities.resize(destroy.size());
	for (auto i = 0u; i < destroy.size(); i++) {
		destroy_items[i] = destroy[i].item_id;
		destroy_quantities[i] = destroy[i].quantity;
	}
	
	SteamInventoryResult_t result;
	if (API->ExchangeItems(&result, create_defs.data(), create_quantities.data(), (uint32_t)create.size(), destroy_items.data(), destroy_quantities.data(), (uint32_t)destroy.size()))
		{
			Result.kind = VALUE_INT32;
			Result.v32 = result;
			return;
		}
		else
		{
			Result.kind = VALUE_INT32;
			Result.v32 = k_SteamInventoryResultInvalid;
			return;
		}
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_generate_items(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(vector<steam_inventory_itemdef_w_quantity> create) 
{
	vector<steam_inventory_itemdef_w_quantity> create = argToSteam_inventory_itemdef_w_quantity(arg, 0);

	vector<SteamItemDef_t> create_defs; create_defs.resize(create.size());
	vector<uint32> create_quantities; create_quantities.resize(create.size());
	for (auto i = 0u; i < create.size(); i++) 
	{
		create_defs[i] = create[i].item_def;
		create_quantities[i] = create[i].quantity;
	}

	SteamInventoryResult_t result;
	if (API->GenerateItems(&result, create_defs.data(), create_quantities.data(), (uint32_t)create.size()))
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	}
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_get_all_items(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	SteamInventoryResult_t result;
	if (API->GetAllItems(&result)) 
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	}
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

CCallResult<steam_net_callbacks_t, SteamInventoryEligiblePromoItemDefIDs_t> _steam_inventory_request_eligible_promo_item_defs;
void steam_net_callbacks_t::steam_inventory_request_eligible_promo_item_defs(SteamInventoryEligiblePromoItemDefIDs_t* e, bool failed) 
{
	steam_net_event q = steam_net_event((char*)"inventory_request_eligible_promo_item_defs");
	q.set_result(e->m_result);

	uint64 user_id = e->m_steamID.ConvertToUint64();
	q.set((char*)"user_id", user_id);
	//static string user_id_str{};
	//user_id_str = std::to_string(user_id);
	//q.set((char*)"user_id_string", user_id_str.data());

	static string json{};
	uint32 n = e->m_numEligiblePromoItemDefs;
	static vector<SteamItemDef_t> item_defs{};
	if (item_defs.size() < n) item_defs.resize(n);
	if (e->m_result == EResult::k_EResultOK && API->GetEligiblePromoItemDefinitionIDs(e->m_steamID, item_defs.data(), &n)) {
		json = "[";
		for (auto i = 0u; i < n; i++) {
			if (i > 0) json.append(",");
			json.append(std::to_string(item_defs[i]));
		}
		json.append("]");
	} else {
		json = "[]";
		n = 0;
	}
	q.set((char*)"item_def_json", json.data());
	q.set((char*)"item_def_count", n);

	q.set((char*)"is_cached_data", e->m_bCachedData);
	q.dispatch();
}

YYEXPORT void /*bool*/ steam_inventory_start_purchase(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(vector<steam_inventory_itemdef_w_quantity> items) 
{
	vector<steam_inventory_itemdef_w_quantity> items = argToSteam_inventory_itemdef_w_quantity(arg, 0);
	
	vector<SteamItemDef_t> create_defs; create_defs.resize(items.size());
	vector<uint32> create_quantities; create_quantities.resize(items.size());
	for (auto i = 0u; i < items.size(); i++) {
		create_defs[i] = items[i].item_def;
		create_quantities[i] = items[i].quantity;
	}
	auto call = API->StartPurchase(create_defs.data(), create_quantities.data(), (uint32_t)items.size());
	Result.kind = VALUE_BOOL;
	Result.val = call != k_uAPICallInvalid;
}

YYEXPORT void /*bool*/ steam_inventory_request_eligible_promo_item_defs(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(uint64 user_id = 0) 
{
	int64 user_id = YYGetInt64(arg, 0);

	//#if (STEAMWORKS >= 142)
	CSteamID userID{};
	if (user_id != 0) {
		userID.SetFromUint64(user_id);
	} else userID = SteamUser()->GetSteamID();
	SteamAPICall_t call = API->RequestEligiblePromoItemDefinitionsIDs(userID);
	if (call == k_uAPICallInvalid)
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}

	_steam_inventory_request_eligible_promo_item_defs.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::steam_inventory_request_eligible_promo_item_defs);
	Result.kind = VALUE_BOOL;
	Result.val = true;
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_get_items_by_id(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(vector<SteamItemInstanceID_t> item_ids) 
{
	std::vector<uint64> item_ids = _SW_GetArrayOfUint64(arg, 0, "steam_inventory_get_items_by_id");

	SteamInventoryResult_t result;
	if (API->GetItemsByID(&result, item_ids.data(), (uint32_t)item_ids.size()))
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	}
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

#pragma region Update properties
YYEXPORT void /*SteamInventoryUpdateHandle_t*/ steam_inventory_start_update_properties(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_INT64;
	Result.v64 = API->StartUpdateProperties();
}

YYEXPORT void /*bool*/ steam_inventory_set_property_bool(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t item_id, const char* prop_name, bool value) 
{
    uint64_t handle = YYGetInt64(arg, 0);
	uint64_t item_id = YYGetInt64(arg, 1);
	char* prop_name = (char*)YYGetString(arg,2);
	bool value = YYGetBool(arg, 3);

	Result.kind = VALUE_INT64;
	Result.v64 = API->SetProperty(handle, item_id, prop_name, value);
}

YYEXPORT void /*bool*/ steam_inventory_set_property_float(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t item_id, const char* prop_name, float value) 
{
    uint64_t handle = YYGetInt64(arg, 0);
    uint64_t item_id = YYGetInt64(arg, 1);
	char* prop_name = (char*)YYGetString(arg, 2);
	double value = YYGetReal(arg, 3);

	Result.kind = VALUE_BOOL;
	Result.val = API->SetProperty(handle, item_id, prop_name, (float)value);
}

YYEXPORT void /*bool*/ steam_inventory_set_property_int(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t item_id, const char* prop_name, int64 value) 
{
    uint64_t handle = YYGetInt64(arg, 0);
    uint64_t item_id = YYGetInt64(arg, 1);
	char* prop_name = (char*)YYGetString(arg, 2);
	int64 value = YYGetInt64(arg, 3);

	//#if (STEAMWORKS >= 142)
	Result.kind = VALUE_BOOL;
	Result.val = API->SetProperty(handle, item_id, prop_name, value);
	//#else
	//return false;
	//#endif
}

YYEXPORT void /*bool*/ steam_inventory_set_property_string(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t item_id, const char* prop_name, const char* value)
{
    uint64_t handle = YYGetInt64(arg, 0);
    uint64_t item_id = YYGetInt64(arg, 1);
	char* prop_name = (char*)YYGetString(arg, 2);
	char* value = (char*)YYGetString(arg, 3);

	Result.kind = VALUE_BOOL;
	Result.val = API->SetProperty(handle, item_id, prop_name, value);
}

YYEXPORT void /*bool*/ steam_inventory_remove_property(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryUpdateHandle_t handle, SteamItemInstanceID_t item_id, const char* prop_name) 
{
    uint64_t handle = YYGetInt64(arg, 0);
    uint64_t item_id = YYGetInt64(arg, 1);
	char* prop_name = (char*)YYGetString(arg, 2);

	Result.kind = VALUE_BOOL;
	Result.val = API->RemoveProperty(handle, item_id, prop_name);
}

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_submit_update_properties(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamInventoryUpdateHandle_t handle) 
{
    uint64_t handle = YYGetInt64(arg, 0);

	SteamInventoryResult_t result;
	Result.kind = VALUE_INT64;
	Result.v64 = API->SubmitUpdateProperties(handle, &result) ? result : k_SteamInventoryResultInvalid;
}

#pragma endregion

YYEXPORT void /*bool*/ steam_inventory_load_item_definitions(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	Result.kind = VALUE_BOOL;
	Result.val = API->LoadItemDefinitions();
}

#pragma region Prices

YYEXPORT void /*optional<uint64>*/ steam_inventory_get_item_price(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamItemDef_t item_def) 
{
	int32 item_def = YYGetInt32(arg, 0);

	uint64 result;
	uint64 basePrice;
    
#if defined(OS_Windows) || defined(OS_Linux)
	if (API->GetItemPrice(item_def, &result, &basePrice))
#elif defined(OS_MacOs)
	if (API->GetItemPrice(item_def, &result, &basePrice))
#endif // OS_Windows
	{
		Result.kind = VALUE_INT64;
		Result.v64 = result;
	}
	else
	{
		Result.kind = VALUE_INT64;
		Result.v64 = 0;
	}
}

struct steam_inventory_get_item_prices_t {
	SteamItemDef_t item_def;
	uint64 price;
};

YYEXPORT void /*optional<vector<steam_inventory_get_item_prices_t>>*/ steam_inventory_get_items_with_prices(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//() 
{
	uint32 n = API->GetNumItemsWithPrices();
	vector<SteamItemDef_t> defs; defs.resize(n);
	vector<uint64> prices; prices.resize(n);
	vector<uint64> basePrices; basePrices.resize(n);

#if defined(OS_Windows) || defined(OS_Linux)
	if (!API->GetItemsWithPrices(defs.data(), prices.data(), basePrices.data(), n))
#elif defined(OS_MacOs)
	if (!API->GetItemsWithPrices(defs.data(), prices.data(), basePrices.data(), n))
#endif // OS_Windows
	{
		return;
	}

	vector<RValue> vec{}; 
	for (uint32 i = 0; i < n; i++)
	{
		RValue Struct = { 0 };
		YYStructCreate(&Struct);

		YYStructAddDouble(&Struct, "item_def", defs[i]);
		YYStructAddInt64(&Struct, "price", prices[i]);
		YYStructAddInt64(&Struct, "base_price", basePrices[i]);

		vec.push_back(Struct);
	}

	_SW_SetArrayOfRValue(&Result, vec);
}

CCallResult<steam_net_callbacks_t, SteamInventoryRequestPricesResult_t> _steam_inventory_request_prices;
void steam_net_callbacks_t::steam_inventory_request_prices(SteamInventoryRequestPricesResult_t* e, bool failed) {
	steam_net_event q((char*)"inventory_request_prices");
	static char currency[5];
	strncpy(currency, e->m_rgchCurrency, 4);
	currency[4] = 0;
	q.set_result(e->m_result);
	q.set((char*)"currency", currency);
	q.dispatch();
}

YYEXPORT void /*bool*/ steam_inventory_request_prices(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//()
{
	SteamAPICall_t call = API->RequestPrices();
	if (call == k_uAPICallInvalid)
	{
		Result.kind = VALUE_BOOL;
		Result.val = false;
		return;
	}
	_steam_inventory_request_prices.Set(call, &steam_net_callbacks, &steam_net_callbacks_t::steam_inventory_request_prices);
	
	Result.kind = VALUE_BOOL;
	Result.val = true;
}

#pragma endregion

// todo: serialization functions

YYEXPORT void /*SteamInventoryResult_t*/ steam_inventory_transfer_item_quantity(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)//(SteamItemInstanceID_t source_item_id, uint32 quantity, SteamItemInstanceID_t dest_item_id) 
{
	int64 source_item_id = YYGetInt64(arg, 0);
	int32 quantity = YYGetInt32(arg, 1);
	int64 dest_item_id = YYGetInt64(arg, 2);

	SteamInventoryResult_t result;
	if (API->TransferItemQuantity(&result, source_item_id, quantity, dest_item_id)) 
	{
		Result.kind = VALUE_INT32;
		Result.v32 = result;
		return;
	}
	else
	{
		Result.kind = VALUE_INT32;
		Result.v32 = k_SteamInventoryResultInvalid;
		return;
	}
}

#pragma region callbacks

void steam_net_callbacks_t::steam_inventory_result_ready(SteamInventoryResultReady_t* e) {
	steam_net_event r((char*)"inventory_result_ready");
	r.set_result(e->m_result);
	r.set((char*)"handle", (int32)e->m_handle);
	r.dispatch();
}

void steam_net_callbacks_t::steam_inventory_full_update(SteamInventoryFullUpdate_t* e) {
	steam_net_event r((char*)"inventory_full_update");
	r.set_success(true);
	r.set((char*)"handle", (int32)e->m_handle);
	r.dispatch();
}

void steam_net_callbacks_t::steam_inventory_definition_update(SteamInventoryDefinitionUpdate_t* e) {
	steam_net_event r((char*)"inventory_definition_update");
	r.set_success(true);
	r.dispatch();
}
#pragma endregion

#undef API
