#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteaminventory.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <algorithm>
#include <optional>
#include <unordered_map>
#include <mutex>

using namespace gm::wire;
using namespace gm_structs;
using namespace gm_enums;

static inline ISteamInventory* steam_inventory_iface()
{
    if (!steam_api_is_initialized())
    {
        steam_set_last_error("Steam Inventory: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamInventory* inv = SteamInventory();
    if (!inv)
        steam_set_last_error("Steam Inventory: SteamInventory() returned NULL.");

    return inv;
}

static inline std::uint64_t call_to_u64(SteamAPICall_t c) { return (std::uint64_t)c; }

static inline SteamInventoryResult_t make_result_handle(int32 v) { return (SteamInventoryResult_t)v; }
static inline int32 to_i32(SteamInventoryResult_t h) { return (int32)h; }

static inline SteamItemInstanceID_t inst_from_u64(std::uint64_t v) { return (SteamItemInstanceID_t)v; }
static inline std::uint64_t inst_to_u64(SteamItemInstanceID_t v) { return (std::uint64_t)v; }

// ------------------------------------------------------------
// Per-result one-shot callbacks for SteamInventoryResultReady_t
// ------------------------------------------------------------
static std::mutex g_inv_rr_mtx;
static std::unordered_map<int32, gm::wire::GMFunction> g_inv_rr_once; // key = result_handle

static inline bool inv_rr_is_valid_handle(int32 rh)
{
    return !(rh == (int32)SteamInventoryConst::InvalidResult || rh == 0);
}

static inline void inv_rr_register_once(int32 rh, const gm::wire::GMFunction& cb)
{
    if (!inv_rr_is_valid_handle(rh)) return;
    if (!cb) return;
    std::lock_guard<std::mutex> lk(g_inv_rr_mtx);
    g_inv_rr_once[rh] = cb;
}

static inline gm::wire::GMFunction inv_rr_take_once(int32 rh)
{
    std::lock_guard<std::mutex> lk(g_inv_rr_mtx);
    auto it = g_inv_rr_once.find(rh);
    if (it == g_inv_rr_once.end()) return nullptr;
    gm::wire::GMFunction cb = it->second;
    g_inv_rr_once.erase(it);
    return cb;
}

static inline void inv_rr_erase(int32 rh)
{
    std::lock_guard<std::mutex> lk(g_inv_rr_mtx);
    g_inv_rr_once.erase(rh);
}

// AddPromoItem -> returns result handle (int32)
int32 steam_inventory_add_promo_item(std::uint32_t item_def_id,
                                    const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    const bool ok = inv->AddPromoItem(&rh, (SteamItemDef_t)item_def_id);
    (void)ok;

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

int32 steam_inventory_add_promo_items(const std::vector<std::uint32_t>& item_def_ids,
                                     std::uint32_t num_item_defs,
                                     const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    const uint32 n = (uint32)std::min<std::size_t>(item_def_ids.size(), (size_t)num_item_defs);
    if (n == 0) return (int32)SteamInventoryConst::InvalidResult;

    std::vector<SteamItemDef_t> defs;
    defs.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        defs.push_back((SteamItemDef_t)item_def_ids[(size_t)i]);

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->AddPromoItems(&rh, defs.data(), n);

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

bool steam_inventory_check_result_steam_id(int32 result_handle, std::uint64_t steam_id_expected)
{
    STEAM_GUARD_RET(false);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return false;

    return inv->CheckResultSteamID(make_result_handle(result_handle), steam_id_from_u64(steam_id_expected));
}

int32 steam_inventory_consume_item(std::uint64_t item_instance_id,
                                  std::uint32_t quantity,
                                  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->ConsumeItem(&rh, inst_from_u64(item_instance_id), (uint32)quantity);

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

SteamInventoryDeserializeResult steam_inventory_deserialize_result(GMBuffer data, std::uint32_t data_size)
{
    STEAM_GUARD_RET({});

    SteamInventoryDeserializeResult out{};
    out.ok = false;
    out.result_handle = (int32)SteamInventoryConst::InvalidResult;
    out.status = SteamApiResult::Fail;

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    if (data_size == 0)
    {
        steam_set_last_error("DeserializeResult: data_size must be > 0.");
        return out;
    }

    std::vector<std::uint8_t> buf((size_t)data_size);
    auto r = data.getReader();
    r.readBytes((char*)buf.data(), (int)data_size);

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    const bool ok = inv->DeserializeResult(&rh, buf.data(), (uint32)buf.size(), false);

    out.ok = ok;
    out.result_handle = to_i32(rh);
    out.status = (SteamApiResult)(int)inv->GetResultStatus(rh);
    return out;
}

void steam_inventory_destroy_result(int32 result_handle)
{
    steam_clear_last_error();

    if (!inv_rr_is_valid_handle(result_handle))
        return;

    // remove any pending one-shot callbacks to avoid stale map entries
    inv_rr_erase(result_handle);

    if (!steam_api_is_initialized())
        return;

    ISteamInventory* inv = SteamInventory();
    if (!inv)
        return;

    inv->DestroyResult((SteamInventoryResult_t)result_handle);
}

int32 steam_inventory_exchange_items(
    const std::vector<std::uint32_t>& generate_item_defs,
    const std::vector<std::uint32_t>& generate_qty,
    std::uint32_t generate_len,
    const std::vector<std::uint64_t>& destroy_instance_ids,
    const std::vector<std::uint32_t>& destroy_qty,
    std::uint32_t destroy_len,
    const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    const uint32 genN = (uint32)std::min<std::size_t>(generate_item_defs.size(), (size_t)generate_len);
    const uint32 dstN = (uint32)std::min<std::size_t>(destroy_instance_ids.size(), (size_t)destroy_len);

    if (genN == 0 || dstN == 0) return (int32)SteamInventoryConst::InvalidResult;

    std::vector<SteamItemDef_t> genDefs;
    genDefs.reserve(genN);
    for (uint32 i = 0; i < genN; ++i) genDefs.push_back((SteamItemDef_t)generate_item_defs[(size_t)i]);

    std::vector<uint32> genQty;
    genQty.reserve(genN);
    for (uint32 i = 0; i < genN; ++i) genQty.push_back((uint32)(i < generate_qty.size() ? generate_qty[(size_t)i] : 1));

    std::vector<SteamItemInstanceID_t> dstIds;
    dstIds.reserve(dstN);
    for (uint32 i = 0; i < dstN; ++i) dstIds.push_back(inst_from_u64(destroy_instance_ids[(size_t)i]));

    std::vector<uint32> dstQty;
    dstQty.reserve(dstN);
    for (uint32 i = 0; i < dstN; ++i) dstQty.push_back((uint32)(i < destroy_qty.size() ? destroy_qty[(size_t)i] : 1));

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->ExchangeItems(&rh,
        genDefs.data(), genQty.data(), genN,
        dstIds.data(), dstQty.data(), dstN);

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

int32 steam_inventory_generate_items(const std::vector<std::uint32_t>& item_defs,
                                    const std::vector<std::uint32_t>& quantities,
                                    std::uint32_t count,
                                    const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    const uint32 n = (uint32)std::min<std::size_t>(item_defs.size(), (size_t)count);
    if (n == 0) return (int32)SteamInventoryConst::InvalidResult;

    std::vector<SteamItemDef_t> defs;
    defs.reserve(n);
    for (uint32 i = 0; i < n; ++i) defs.push_back((SteamItemDef_t)item_defs[(size_t)i]);

    std::vector<uint32> qty;
    qty.reserve(n);
    for (uint32 i = 0; i < n; ++i) qty.push_back((uint32)(i < quantities.size() ? quantities[(size_t)i] : 1));

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->GenerateItems(&rh, defs.data(), qty.data(), n);

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

int32 steam_inventory_get_all_items()
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->GetAllItems(&rh);

    return to_i32(rh);
}

SteamInventoryResultItems steam_inventory_get_result_items(int32 result_handle)
{
    STEAM_GUARD_RET({});

    SteamInventoryResultItems out{};
    out.ok = false;
    out.count = 0;
    out.item_instance_ids = {};
    out.item_def_ids = {};
    out.quantities = {};
    out.flags = {};

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    uint32 count = 0;
    const bool okCount = inv->GetResultItems(make_result_handle(result_handle), nullptr, &count);
    if (!okCount || count == 0)
    {
        out.ok = okCount;
        out.count = 0;
        return out;
    }

    std::vector<SteamItemDetails_t> items((size_t)count);
    const bool ok = inv->GetResultItems(make_result_handle(result_handle), items.data(), &count);

    out.ok = ok;
    out.count = count;

    if (!ok || count == 0) return out;

    out.item_instance_ids.reserve(count);
    out.item_def_ids.reserve(count);
    out.quantities.reserve(count);
    out.flags.reserve(count);

    for (uint32 i = 0; i < count; ++i)
    {
        out.item_instance_ids.push_back(inst_to_u64(items[(size_t)i].m_itemId));
        out.item_def_ids.push_back((uint32)items[(size_t)i].m_iDefinition);
        out.quantities.push_back((uint32)items[(size_t)i].m_unQuantity);
        out.flags.push_back((uint32)items[(size_t)i].m_unFlags);
    }

    return out;
}

SteamApiResult steam_inventory_get_result_status(int32 result_handle)
{
    STEAM_GUARD_RET(SteamApiResult::Fail);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return SteamApiResult::Fail;

    const EResult r = inv->GetResultStatus(make_result_handle(result_handle));
    return (SteamApiResult)(int)r;
}

std::uint32_t steam_inventory_get_result_timestamp(int32 result_handle)
{
    STEAM_GUARD_RET(0);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return 0;

    return (std::uint32_t)inv->GetResultTimestamp(make_result_handle(result_handle));
}

// GetEligiblePromoItemDefinitionIDs
std::vector<std::uint32_t> steam_inventory_get_eligible_promo_item_definition_ids(std::uint32_t c_max_item_defs)
{
    STEAM_GUARD_RET({});

    std::vector<std::uint32_t> out;

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    if (c_max_item_defs == 0) return out;

    // Steam requires a SteamID; with this signature we use the local user.
    CSteamID steam_id = (SteamUser() ? SteamUser()->GetSteamID() : CSteamID());
    if (!steam_id.IsValid()) return out;

    std::vector<SteamItemDef_t> defs((size_t)c_max_item_defs);
    uint32 count = c_max_item_defs;

    const bool ok = inv->GetEligiblePromoItemDefinitionIDs(steam_id, defs.data(), &count);
    if (!ok || count == 0) return out;

    out.reserve((size_t)count);
    for (uint32 i = 0; i < count; ++i)
        out.push_back((std::uint32_t)defs[(size_t)i]);

    return out;
}

bool steam_inventory_load_item_definitions()
{
    STEAM_GUARD_RET(false);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return false;

    return inv->LoadItemDefinitions();
}

std::vector<std::uint32_t> steam_inventory_get_item_definition_ids(std::uint32_t c_max_item_defs)
{
    STEAM_GUARD_RET({});

    std::vector<std::uint32_t> out;
    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    if (c_max_item_defs == 0) return out;

    std::vector<SteamItemDef_t> defs((size_t)c_max_item_defs);
    uint32 count = c_max_item_defs;

    const bool ok = inv->GetItemDefinitionIDs(defs.data(), &count);
    if (!ok || count == 0) return out;

    out.reserve((size_t)count);
    for (uint32 i = 0; i < count; ++i)
        out.push_back((std::uint32_t)defs[(size_t)i]);

    return out;
}

int32 steam_inventory_get_items_by_id(const std::vector<std::uint64_t>& item_instance_ids,
                                     const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    const uint32 n = (uint32)item_instance_ids.size();
    if (n == 0) return (int32)SteamInventoryConst::InvalidResult;

    std::vector<SteamItemInstanceID_t> ids;
    ids.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        ids.push_back(inst_from_u64(item_instance_ids[(size_t)i]));

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->GetItemsByID(&rh, ids.data(), n);

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

SteamInventorySerializeResult steam_inventory_serialize_result(int32 result_handle, GMBuffer out_data, std::uint32_t out_capacity)
{
    STEAM_GUARD_RET({});

    SteamInventorySerializeResult out{};
    out.ok = false;
    out.bytes_written = 0;

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    if (out_capacity == 0)
    {
        steam_set_last_error("SerializeResult: out_capacity must be > 0.");
        return out;
    }

    std::vector<std::uint8_t> buf((size_t)out_capacity);
    uint32 written = out_capacity;

    const bool ok = inv->SerializeResult(make_result_handle(result_handle), buf.data(), &written);
    out.ok = ok;
    out.bytes_written = ok ? written : 0;

    if (ok && written > 0)
    {
        auto w = out_data.getWriter();
        w.writeBytes((const char*)buf.data(), (int)written);
    }

    return out;
}

//uint32 steam_inventory_get_result_item_properties_num(
std::vector<std::string> steam_inventory_get_result_item_property_keys_array(int32 result_handle, uint32 item_index)
{
    std::vector<std::string> out;

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    uint32 needed = 0;
    if (!inv->GetResultItemProperty(make_result_handle(result_handle), item_index, nullptr, nullptr, &needed) || needed == 0)
        return out;

    std::vector<char> buf((size_t)needed);
    uint32 size = needed;

    if (!inv->GetResultItemProperty(make_result_handle(result_handle), item_index, nullptr, buf.data(), &size))
        return out;

    std::string csv(buf.data());
    size_t start = 0;
    while (start < csv.size())
    {
        size_t comma = csv.find(',', start);
        if (comma == std::string::npos) comma = csv.size();
        std::string key = csv.substr(start, comma - start);
        if (!key.empty()) out.push_back(std::move(key));
        start = comma + 1;
    }

    return out;
}

SteamInventoryItemProperty steam_inventory_get_result_item_property(
    int32 result_handle,
    std::uint32_t item_index,
    std::string_view property_name)
{
    STEAM_GUARD_RET({});

    SteamInventoryItemProperty out{};
    out.ok = false;
    out.value = "";

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    std::string prop(property_name);
    if (prop.empty()) return out;

    uint32 needed = 0;

    // Probe required size (recommended pattern)
    bool ok = inv->GetResultItemProperty(
        make_result_handle(result_handle),
        item_index,
        prop.c_str(),
        nullptr,
        &needed
    );

    // Some SDK builds return false on probe; if needed==0, bail.
    (void)ok;
    if (needed == 0) return out;

    std::vector<char> buf((size_t)needed);
    uint32 size = needed;

    ok = inv->GetResultItemProperty(
        make_result_handle(result_handle),
        item_index,
        prop.c_str(),
        buf.data(),
        &size
    );

    out.ok = ok;
    if (ok) out.value = std::string(buf.data());
    return out;
}

std::uint32_t steam_inventory_get_num_items_with_prices()
{
    STEAM_GUARD_RET(0);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return 0;

    return (std::uint32_t)inv->GetNumItemsWithPrices();
}

int32 steam_inventory_start_update_properties()
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rh = inv->StartUpdateProperties();
    return to_i32(rh);
}

bool steam_inventory_remove_property(int32 result_handle,
                                     std::uint64_t item_instance_id,
                                     std::string_view property_name)
{
    STEAM_GUARD_RET(false);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return false;

    std::string prop(property_name);
    return inv->RemoveProperty(
        make_result_handle(result_handle),
        inst_from_u64(item_instance_id),
        prop.c_str()
    );
}

bool steam_inventory_set_property_string(int32 result_handle,
                                         std::uint64_t item_instance_id,
                                         std::string_view property_name,
                                         std::string_view value)
{
    STEAM_GUARD_RET(false);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return false;

    std::string prop(property_name);
    std::string val(value);

    return inv->SetProperty(
        make_result_handle(result_handle),
        inst_from_u64(item_instance_id),
        prop.c_str(),
        val.c_str()
    );
}

bool steam_inventory_set_property_bool(int32 result_handle,
                                       std::uint64_t item_instance_id,
                                       std::string_view property_name,
                                       bool value)
{
    STEAM_GUARD_RET(false);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return false;

    std::string prop(property_name);

    return inv->SetProperty(
        make_result_handle(result_handle),
        inst_from_u64(item_instance_id),
        prop.c_str(),
        value
    );
}

bool steam_inventory_set_property_int64(int32 result_handle,
                                        std::uint64_t item_instance_id,
                                        std::string_view property_name,
                                        long long value)
{
    STEAM_GUARD_RET(false);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return false;

    std::string prop(property_name);

    return inv->SetProperty(
        make_result_handle(result_handle),
        inst_from_u64(item_instance_id),
        prop.c_str(),
        (int64)value
    );
}

bool steam_inventory_set_property_float(int32 result_handle,
                                        std::uint64_t item_instance_id,
                                        std::string_view property_name,
                                        float value)
{
    STEAM_GUARD_RET(false);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return false;

    std::string prop(property_name);

    return inv->SetProperty(
        make_result_handle(result_handle),
        inst_from_u64(item_instance_id),
        prop.c_str(),
        value
    );
}

int32 steam_inventory_submit_update_properties(int32 result_handle,
                                              const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rhOut = k_SteamInventoryResultInvalid;
    inv->SubmitUpdateProperties(make_result_handle(result_handle), &rhOut);

    const int32 out = to_i32(rhOut);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

int32 steam_inventory_transfer_item_quantity(std::uint64_t item_instance_id_source,
                                             std::uint32_t quantity,
                                             std::uint64_t item_instance_id_dest,
                                             const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->TransferItemQuantity(&rh,
        inst_from_u64(item_instance_id_source),
        (uint32)quantity,
        inst_from_u64(item_instance_id_dest)
    );

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

int32 steam_inventory_trigger_item_drop(std::uint32_t item_def_id,
                                       const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->TriggerItemDrop(&rh, (SteamItemDef_t)item_def_id);

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

int32 steam_inventory_grant_promo_items(const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD_RET((int32)SteamInventoryConst::InvalidResult);

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return (int32)SteamInventoryConst::InvalidResult;

    SteamInventoryResult_t rh = k_SteamInventoryResultInvalid;
    inv->GrantPromoItems(&rh);

    const int32 out = to_i32(rh);
    if (callback) inv_rr_register_once(out, callback.value());
    return out;
}

SteamInventoryDefProperty steam_inventory_get_item_definition_property(
    std::uint32_t item_def_id,
    std::string_view property_name)
{
    STEAM_GUARD_RET({});

    SteamInventoryDefProperty out{};
    out.ok = false;
    out.value = "";

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    std::string prop(property_name);
    if (prop.empty())
        return out;

    // Probe required size first
    uint32 needed = 0;
    inv->GetItemDefinitionProperty(
        (SteamItemDef_t)item_def_id,
        prop.c_str(),
        nullptr,
        &needed
    );

    if (needed == 0)
        return out;

    std::vector<char> buf((size_t)needed);
    uint32 size = needed;

    const bool ok = inv->GetItemDefinitionProperty(
        (SteamItemDef_t)item_def_id,
        prop.c_str(),
        buf.data(),
        &size
    );

    out.ok = ok;
    if (ok)
        out.value = std::string(buf.data());

    return out;
}

static inline void _split_csv_to_strings(const std::string& csv, std::vector<std::string>& out)
{
    out.clear();
    size_t start = 0;

    while (start < csv.size())
    {
        size_t end = csv.find(',', start);
        if (end == std::string::npos) end = csv.size();

        // trim spaces
        size_t l = start;
        while (l < end && (csv[l] == ' ' || csv[l] == '\t' || csv[l] == '\r' || csv[l] == '\n')) ++l;
        size_t r = end;
        while (r > l && (csv[r - 1] == ' ' || csv[r - 1] == '\t' || csv[r - 1] == '\r' || csv[r - 1] == '\n')) --r;

        if (r > l)
            out.emplace_back(csv.substr(l, r - l));

        start = end + 1;
    }
}

std::vector<std::string> steam_inventory_get_item_definition_property_keys(std::uint32_t item_def_id)
{
    STEAM_GUARD_RET({});

    std::vector<std::string> keys;

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return keys;

    // One call: fetch CSV of keys into a buffer.
    // Keys should be small; 4KB is plenty.
    uint32 needed = 4096;
    std::vector<char> buf((size_t)needed);

    const bool ok = inv->GetItemDefinitionProperty(
        (SteamItemDef_t)item_def_id,
        nullptr, // NULL => "all keys" behavior
        buf.data(),
        &needed
    );

    if (!ok)
        return keys;

    std::string csv(buf.data());
    if (csv.empty())
        return keys;

    _split_csv_to_strings(csv, keys);
    return keys;
}

SteamInventoryItemPrice steam_inventory_get_item_price(std::uint32_t item_def_id)
{
    STEAM_GUARD_RET({});

    SteamInventoryItemPrice out{};
    out.ok = false;
    out.current_price = (long long)0;
    out.base_price = (long long)0;

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    uint64 cur = 0;
    uint64 base = 0;

    const bool ok = inv->GetItemPrice((SteamItemDef_t)item_def_id, &cur, &base);
    out.ok = ok;

    if (ok)
    {
        out.current_price = cur;
        out.base_price = base;
    }

    return out;
}

SteamInventoryItemsWithPrices steam_inventory_get_items_with_prices(std::uint32_t max)
{
    STEAM_GUARD_RET({});

    SteamInventoryItemsWithPrices out{};
    out.ok = false;
    out.count = 0;

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return out;

    if (max == 0) return out;

    std::vector<SteamItemDef_t> itemDefs((size_t)max);
    std::vector<uint64> currentPrices((size_t)max);
    std::vector<uint64> basePrices((size_t)max);

    const bool ok = inv->GetItemsWithPrices(
        itemDefs.data(),
        currentPrices.data(),
        basePrices.data(),
        (uint32)max
    );
    if (!ok) return out;

    out.ok = true;
    out.count = max;

    out.item_def_ids.reserve((size_t)max);
    out.current_prices.reserve((size_t)max);
    out.base_prices.reserve((size_t)max);

    for (uint32 i = 0; i < max; ++i)
    {
        out.item_def_ids.push_back((std::uint32_t)itemDefs[(size_t)i]);
        out.current_prices.push_back((long long)currentPrices[(size_t)i]);
        out.base_prices.push_back((long long)basePrices[(size_t)i]);
    }

    return out;
}

static std::mutex g_callbacks_mtx;

static GMFunction g_cb_result_ready = nullptr;
static GMFunction g_cb_full_update = nullptr;
static GMFunction g_cb_definition_update = nullptr;

static inline SteamInventoryResultReady fromNative(const SteamInventoryResultReady_t& e)
{
    SteamInventoryResultReady out{};
    out.result_handle = (int32)e.m_handle;
    out.result = (int32)e.m_result;
    return out;
}

static inline SteamInventoryFullUpdate fromNative(const SteamInventoryFullUpdate_t& e)
{
    SteamInventoryFullUpdate out{};
    out.result_handle = (int32)e.m_handle;
    return out;
}

static inline SteamInventoryDefinitionUpdate fromNative(const SteamInventoryDefinitionUpdate_t&)
{
    SteamInventoryDefinitionUpdate out{};
    out.dummy = 0;
    return out;
}

class SteamInventory_Callbacks
{
public:
    STEAM_CALLBACK(SteamInventory_Callbacks, OnResultReady, SteamInventoryResultReady_t);
    STEAM_CALLBACK(SteamInventory_Callbacks, OnFullUpdate, SteamInventoryFullUpdate_t);
    STEAM_CALLBACK(SteamInventory_Callbacks, OnDefinitionUpdate, SteamInventoryDefinitionUpdate_t);
};

void SteamInventory_Callbacks::OnResultReady(SteamInventoryResultReady_t* p)
{
    if (!p) return;

    const int32 rh = (int32)p->m_handle;

    // 1) Per-call one-shot callback (preferred)
    if (inv_rr_is_valid_handle(rh))
    {
        gm::wire::GMFunction cb = inv_rr_take_once(rh);
        if (cb)
        {
            cb.call(fromNative(*p));
            return;
        }
    }

    // 2) Fallback global callback
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_result_ready;
    }
    if (cb)
        cb.call(fromNative(*p));
}

void SteamInventory_Callbacks::OnFullUpdate(SteamInventoryFullUpdate_t* p)
{
    if (!p) return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_full_update;
    }
    if (cb)
        cb.call(fromNative(*p));
}

void SteamInventory_Callbacks::OnDefinitionUpdate(SteamInventoryDefinitionUpdate_t* p)
{
    if (!p) return;
    GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_definition_update;
    }
    if (cb)
        cb.call(fromNative(*p));
}

static SteamInventory_Callbacks g_inventory_callbacks;

// NOTE: global callbacks remain set/clear style (generator can pass null function)
void steam_inventory_set_callback_result_ready(const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_result_ready = callback;
}

void steam_inventory_clear_callback_result_ready()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_result_ready = nullptr;
}

void steam_inventory_set_callback_full_update(const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_full_update = callback;
}

void steam_inventory_clear_callback_full_update()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_full_update = nullptr;
}

void steam_inventory_set_callback_definition_update(const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_definition_update = callback;
}

void steam_inventory_clear_callback_definition_update()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_definition_update = nullptr;
}

static inline gm_structs::SteamInventoryRequestPricesResult inventory_fromNative(const SteamInventoryRequestPricesResult_t& e)
{
    gm_structs::SteamInventoryRequestPricesResult out{};
    out.result = (int32)e.m_result;
    out.currency = e.m_rgchCurrency;
    return out;
}

static inline gm_structs::SteamInventoryStartPurchaseResult inventory_fromNative(const SteamInventoryStartPurchaseResult_t& e)
{
    gm_structs::SteamInventoryStartPurchaseResult out{};
    out.result = (int32)e.m_result;
    out.order_id = (std::uint64_t)e.m_ulOrderID;
    out.transaction_id = (std::uint64_t)e.m_ulTransID;
    return out;
}

void steam_inventory_request_prices(const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return;

    SteamAPICall_t call = inv->RequestPrices();

    if (callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamInventoryRequestPricesResult, SteamInventoryRequestPricesResult_t>(
            callback.value(), &inventory_fromNative);
        h->set(call);
    }
}

void steam_inventory_start_purchase(const std::vector<std::uint32_t>& item_def_ids,
                                   const std::vector<std::uint32_t>& quantities,
                                   std::uint32_t count,
                                   const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamInventory* inv = steam_inventory_iface();
    if (!inv) return;

    const uint32 n = (uint32)std::min<std::size_t>(item_def_ids.size(), (size_t)count);
    if (n == 0) return;

    std::vector<SteamItemDef_t> defs;
    defs.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        defs.push_back((SteamItemDef_t)item_def_ids[(size_t)i]);

    std::vector<uint32> qty;
    qty.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        qty.push_back((uint32)(i < quantities.size() ? quantities[(size_t)i] : 1));

    SteamAPICall_t call = inv->StartPurchase(defs.data(), qty.data(), n);

    if (callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamInventoryStartPurchaseResult, SteamInventoryStartPurchaseResult_t>(
            callback.value(), &inventory_fromNative);
        h->set(call);
    }
}