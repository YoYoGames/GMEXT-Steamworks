// gm_steam_ugc.cpp
// Steamworks module: ugc (ISteamUGC)

#include "GMSteamworks.h"

#include "steam_async_common.h"
#include <steam/steam_api.h>
#include <steam/isteamugc.h>

#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <algorithm>

// ---------------- Helpers ----------------

static inline ISteamUGC* steam_ugc_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam UGC: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamUGC* ugc = SteamUGC();
    if (!ugc)
        steam_set_last_error("Steam UGC: SteamUGC() returned NULL.");

    return ugc;
}

static inline PublishedFileId_t pubid_from_u64(std::uint64_t v) { return (PublishedFileId_t)v; }
static inline std::uint64_t pubid_to_u64(PublishedFileId_t v) { return (std::uint64_t)v; }

static inline UGCQueryHandle_t qh_from_u64(std::uint64_t v) { return (UGCQueryHandle_t)v; }
static inline std::uint64_t qh_to_u64(UGCQueryHandle_t v) { return (std::uint64_t)v; }

static inline UGCUpdateHandle_t uh_from_u64(std::uint64_t v) { return (UGCUpdateHandle_t)v; }

static inline std::uint64_t call_to_u64(SteamAPICall_t c) { return (std::uint64_t)c; }

static inline std::vector<std::string> split_csv(std::string_view csv)
{
    std::vector<std::string> out;
    std::string cur;
    for (char ch : csv) {
        if (ch == ',') {
            if (!cur.empty())
                out.push_back(cur);
            cur.clear();
        } else {
            cur.push_back(ch);
        }
    }
    if (!cur.empty())
        out.push_back(cur);
    return out;
}

static inline SteamParamStringArray_t
make_param_string_array(const std::vector<std::string>& strs, std::vector<const char*>& cstr_out)
{
    cstr_out.clear();
    cstr_out.reserve(strs.size());
    for (const auto& s : strs)
        cstr_out.push_back(s.c_str());

    SteamParamStringArray_t arr {};
    arr.m_ppStrings = cstr_out.empty() ? nullptr : const_cast<const char**>(cstr_out.data());
    arr.m_nNumStrings = (int)cstr_out.size();
    return arr;
}

template<typename T>
static inline auto ugc_get_num_subscribed_items_impl(T* u, bool include_disabled, int)
    -> decltype(u->GetNumSubscribedItems(include_disabled), uint32(0))
{
    return u->GetNumSubscribedItems(include_disabled);
}
template<typename T>
static inline auto ugc_get_num_subscribed_items_impl(T* u, bool include_disabled, long)
    -> decltype(u->GetNumSubscribedItems(), uint32(0))
{
    (void)include_disabled;
    return u->GetNumSubscribedItems();
}

template<typename T>
static inline auto ugc_get_subscribed_items_impl(T* u, PublishedFileId_t* out, uint32 max, bool include_disabled, int)
    -> decltype(u->GetSubscribedItems(out, max, include_disabled), uint32(0))
{
    return u->GetSubscribedItems(out, max, include_disabled);
}
template<typename T>
static inline auto ugc_get_subscribed_items_impl(T* u, PublishedFileId_t* out, uint32 max, bool include_disabled, long)
    -> decltype(u->GetSubscribedItems(out, max), uint32(0))
{
    (void)include_disabled;
    return u->GetSubscribedItems(out, max);
}

bool steam_ugc_add_excluded_tag(std::uint64_t query_handle, std::string_view tag_name)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    std::string tag(tag_name);
    return ugc->AddExcludedTag(qh_from_u64(query_handle), tag.c_str());
}

bool steam_ugc_add_item_key_value_tag(std::uint64_t update_handle, std::string_view key, std::string_view value)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    std::string k(key), v(value);
    return ugc->AddItemKeyValueTag(uh_from_u64(update_handle), k.c_str(), v.c_str());
}

bool steam_ugc_add_item_preview_file(
    std::uint64_t update_handle, std::string_view preview_file_path, gm_enums::SteamItemPreviewType preview_type
)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    std::string p(preview_file_path);
    return ugc->AddItemPreviewFile(uh_from_u64(update_handle), p.c_str(), static_cast<EItemPreviewType>((int)preview_type));
}

bool steam_ugc_add_item_preview_video(std::uint64_t update_handle, std::string_view video_id)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    std::string v(video_id);
    return ugc->AddItemPreviewVideo(uh_from_u64(update_handle), v.c_str());
}

bool steam_ugc_add_required_key_value_tag(std::uint64_t query_handle, std::string_view key, std::string_view value)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    std::string k(key), v(value);
    return ugc->AddRequiredKeyValueTag(qh_from_u64(query_handle), k.c_str(), v.c_str());
}

// ---------------- Part 2 ----------------

bool steam_ugc_add_required_tag(std::uint64_t query_handle, std::string_view tag_name)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    std::string tag(tag_name);
    return ugc->AddRequiredTag(qh_from_u64(query_handle), tag.c_str());
}

bool steam_ugc_add_required_tag_group(std::uint64_t query_handle, const std::vector<std::string_view>& tags_csv)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::vector<const char*> result;
    result.reserve(tags_csv.size());

    for (auto sv : tags_csv)
    {
        std::cout << sv.data() << std::endl;
        result.push_back(sv.data()); // assumes null-terminated
    }

    SteamParamStringArray_t arr = {};
    arr.m_nNumStrings = result.size();
    arr.m_ppStrings = result.data();

    return ugc->AddRequiredTagGroup(qh_from_u64(query_handle), &arr);
}

bool steam_ugc_init_workshop_for_game_server(std::uint32_t workshop_depot_id, std::string_view folder)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    std::string f(folder);
    return ugc->BInitWorkshopForGameServer((DepotId_t)workshop_depot_id, f.c_str());
}

std::uint64_t steam_ugc_create_query_all_ugc_request(
    gm_enums::SteamUgcQuery query_type,
    gm_enums::SteamUgcMatchingUgcType matching_ugc_type, 
    std::uint32_t creator_app_id, 
    std::uint32_t consumer_app_id, 
    std::uint32_t page)
{
    STEAM_GUARD_RET(0);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    UGCQueryHandle_t h = ugc->CreateQueryAllUGCRequest(
        static_cast<EUGCQuery>((int)query_type),
        static_cast<EUGCMatchingUGCType>((int)matching_ugc_type),
        (AppId_t)creator_app_id,
        (AppId_t)consumer_app_id,
        (uint32)page
    );
    return qh_to_u64(h);
}

std::uint64_t steam_ugc_create_query_ugc_details_request(
    const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids
)
{
    STEAM_GUARD_RET(0);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    const uint32 n = (uint32)std::min<std::size_t>(published_file_ids.size(), (size_t)num_published_file_ids);
    if (n == 0)
        return 0;

    std::vector<PublishedFileId_t> ids;
    ids.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        ids.push_back(pubid_from_u64(published_file_ids[(size_t)i]));

    return qh_to_u64(ugc->CreateQueryUGCDetailsRequest(ids.data(), n));
}

std::uint64_t steam_ugc_create_query_user_ugc_request(
    std::uint32_t account_id,
    gm_enums::SteamUserUgcList list_type,
    gm_enums::SteamUgcMatchingUgcType matching_ugc_type,
    gm_enums::SteamUserUgcListSortOrder sort_order,
    std::uint32_t creator_app_id,
    std::uint32_t consumer_app_id,
    std::uint32_t page
)
{
    STEAM_GUARD_RET(0);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    UGCQueryHandle_t h = ugc->CreateQueryUserUGCRequest(
        (AccountID_t)account_id,
        static_cast<EUserUGCList>((int)list_type),
        static_cast<EUGCMatchingUGCType>((int)matching_ugc_type),
        static_cast<EUserUGCListSortOrder>((int)sort_order),
        (AppId_t)creator_app_id,
        (AppId_t)consumer_app_id,
        (uint32)page
    );
    return qh_to_u64(h);
}

bool steam_ugc_download_item(std::uint64_t published_file_id, bool high_priority)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;
    return ugc->DownloadItem(pubid_from_u64(published_file_id), high_priority);
}

gm_structs::SteamUgcItemDownloadInfo steam_ugc_get_item_download_info(std::uint64_t published_file_id)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcItemDownloadInfo out {};
    out.ok = false;
    out.bytes_downloaded = 0;
    out.bytes_total = 0;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    uint64 dl = 0, total = 0;
    const bool ok = ugc->GetItemDownloadInfo(pubid_from_u64(published_file_id), &dl, &total);

    out.ok = ok;
    if (ok) {
        out.bytes_downloaded = (std::uint64_t)dl;
        out.bytes_total = (std::uint64_t)total;
    }
    return out;
}

gm_structs::SteamUgcItemInstallInfo
steam_ugc_get_item_install_info(std::uint64_t published_file_id)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcItemInstallInfo out {};
    out.ok = false;
    out.size_on_disk = 0;
    out.folder = "";
    out.timestamp = 0;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    uint32 cch_folder_size = 1024;
    uint64 sizeOnDisk = 0;
    uint32 ts = 0;
    std::vector<char> folder((size_t)cch_folder_size);
    folder[0] = '\0';

    const bool ok = ugc->GetItemInstallInfo(
        pubid_from_u64(published_file_id), &sizeOnDisk, folder.data(), (uint32)folder.size(), &ts
    );

    out.ok = ok;
    if (ok) {
        out.size_on_disk = (std::uint64_t)sizeOnDisk;
        out.folder = std::string(folder.data());
        out.timestamp = (std::uint32_t)ts;
    }
    return out;
}

std::uint32_t steam_ugc_get_item_state(std::uint64_t published_file_id)
{
    STEAM_GUARD_RET(0);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;
    return (std::uint32_t)ugc->GetItemState(pubid_from_u64(published_file_id));
}

gm_structs::SteamUgcItemUpdateProgress steam_ugc_get_item_update_progress(std::uint64_t update_handle)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcItemUpdateProgress out {};
    out.status = 0;
    out.bytes_processed = 0;
    out.bytes_total = 0;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    uint64 processed = 0, total = 0;
    EItemUpdateStatus st = ugc->GetItemUpdateProgress(uh_from_u64(update_handle), &processed, &total);

    out.status = (int32)st;
    out.bytes_processed = (std::uint64_t)processed;
    out.bytes_total = (std::uint64_t)total;
    return out;
}

std::uint32_t steam_ugc_get_num_subscribed_items(bool include_locally_disabled)
{
    STEAM_GUARD_RET(0);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;
    return (std::uint32_t)ugc_get_num_subscribed_items_impl(ugc, include_locally_disabled, 0);
}

std::vector<std::uint64_t> steam_ugc_get_subscribed_items(std::uint32_t c_max_entries, bool include_locally_disabled)
{
    STEAM_GUARD_RET({});

    std::vector<std::uint64_t> out;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    if (c_max_entries == 0)
        return out;

    std::vector<PublishedFileId_t> ids((size_t)c_max_entries);
    const uint32 n = ugc_get_subscribed_items_impl(ugc, ids.data(), (uint32)ids.size(), include_locally_disabled, 0);

    out.reserve((size_t)n);
    for (uint32 i = 0; i < n; ++i)
        out.push_back(pubid_to_u64(ids[(size_t)i]));

    return out;
}

gm_structs::SteamUgcQueryResult steam_ugc_get_query_ugc_result(std::uint64_t query_handle, std::uint32_t index)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcQueryResult out {};
    out.ok = false;
    out.published_file_id = 0;
    out.title = "";
    out.description = "";
    out.time_created = 0;
    out.time_updated = 0;
    out.visibility = 0;
    out.banned = false;
    out.accepted_for_use = false;
    out.tags_truncated = false;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    SteamUGCDetails_t d {};
    const bool ok = ugc->GetQueryUGCResult(qh_from_u64(query_handle), index, &d);
    out.ok = ok;
    if (!ok)
        return out;

    out.published_file_id = (std::uint64_t)d.m_nPublishedFileId;
    out.title = d.m_rgchTitle;
    out.description = d.m_rgchDescription;
    out.time_created = (std::uint32_t)d.m_rtimeCreated;
    out.time_updated = (std::uint32_t)d.m_rtimeUpdated;
    out.visibility = (int32)d.m_eVisibility;
    out.banned = (d.m_bBanned != 0);
    out.accepted_for_use = (d.m_bAcceptedForUse != 0);
    out.tags_truncated = (d.m_bTagsTruncated != 0);

    return out;
}

gm_structs::SteamUgcQueryPreviewUrl steam_ugc_get_query_ugc_preview_url(std::uint64_t query_handle, std::uint32_t index)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcQueryPreviewUrl out {};
    out.ok = false;
    out.url = "";

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    char buf[1024] = {};
    const bool ok = ugc->GetQueryUGCPreviewURL(qh_from_u64(query_handle), index, buf, (uint32)sizeof(buf));
    out.ok = ok;
    if (ok)
        out.url = buf;
    return out;
}

gm_structs::SteamUgcQueryMetadata
steam_ugc_get_query_ugc_metadata(std::uint64_t query_handle, std::uint32_t index)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcQueryMetadata out {};
    out.ok = false;
    out.metadata = "";

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    uint32 cch_metadata = 1024;
    std::vector<char> buf((size_t)cch_metadata);
    buf[0] = '\0';

    const bool ok = ugc->GetQueryUGCMetadata(qh_from_u64(query_handle), index, buf.data(), (uint32)buf.size());
    out.ok = ok;
    if (ok)
        out.metadata = std::string(buf.data());
    return out;
}

std::vector<std::uint64_t>
steam_ugc_get_query_ugc_children(std::uint64_t query_handle, std::uint32_t index, std::uint32_t c_max_entries)
{
    STEAM_GUARD_RET({});

    std::vector<std::uint64_t> out;
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    if (c_max_entries == 0)
        return out;

    std::vector<PublishedFileId_t> tmp((size_t)c_max_entries);
    const uint32 n = ugc->GetQueryUGCChildren(qh_from_u64(query_handle), index, tmp.data(), (uint32)tmp.size());

    out.reserve((size_t)n);
    for (uint32 i = 0; i < n; ++i)
        out.push_back((std::uint64_t)tmp[(size_t)i]);

    return out;
}

std::uint64_t steam_ugc_get_query_ugc_statistic(
    std::uint64_t query_handle, std::uint32_t index, gm_enums::SteamUgcStatisticType stat_type
)
{
    STEAM_GUARD_RET(0);

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    uint64 val = 0;
    const bool ok = ugc->GetQueryUGCStatistic(qh_from_u64(query_handle), index, (EItemStatistic)(int)stat_type, &val);
    return ok ? (std::uint64_t)val : 0;
}

std::uint32_t steam_ugc_get_query_ugc_num_additional_previews(std::uint64_t query_handle, std::uint32_t index)
{
    STEAM_GUARD_RET(0);

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    return (std::uint32_t)ugc->GetQueryUGCNumAdditionalPreviews(qh_from_u64(query_handle), index);
}

gm_structs::SteamUgcAdditionalPreview steam_ugc_get_query_ugc_additional_preview(std::uint64_t query_handle, std::uint32_t index, std::uint32_t preview_index, std::string_view original_file_name)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcAdditionalPreview out {};
    out.ok = false;
    out.url_or_video_id = "";
    out.preview_type = 0;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    char url[1024] = {};
    EItemPreviewType type;// = k_EItemPreviewType_Image;

    std::string str = original_file_name.data();
    bool ok = ugc->GetQueryUGCAdditionalPreview(
                qh_from_u64(query_handle),
                index,
                preview_index,
                url,
                sizeof(url),
                str.data(),
                (size_t)str.size(),
                &type
            );

    out.ok = ok;
    if (ok) {
        out.url_or_video_id = url;
        out.preview_type = (int32)type;
    }
    return out;
}

std::uint32_t steam_ugc_get_query_ugc_num_key_value_tags(std::uint64_t query_handle, std::uint32_t index)
{
    STEAM_GUARD_RET(0);

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    return (std::uint32_t)ugc->GetQueryUGCNumKeyValueTags(qh_from_u64(query_handle), index);
}

gm_structs::SteamUgcKeyValueTag steam_ugc_get_query_ugc_key_value_tag(
    std::uint64_t query_handle, std::uint32_t index, std::uint32_t key_value_tag_index
)
{
    STEAM_GUARD_RET({});

    gm_structs::SteamUgcKeyValueTag out {};
    out.ok = false;
    out.key = "";
    out.value = "";

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return out;

    char key[256] = {};
    char val[256] = {};
    const bool ok = ugc->GetQueryUGCKeyValueTag(
        qh_from_u64(query_handle), index, key_value_tag_index, key, (uint32)sizeof(key), val, (uint32)sizeof(val)
    );

    out.ok = ok;
    if (ok) {
        out.key = key;
        out.value = val;
    }
    return out;
}

std::vector<std::int32_t> steam_ugc_get_query_ugc_content_descriptors(
    std::uint64_t query_handle,
    std::uint32_t index,
    std::uint32_t max_descriptors)
{
    STEAM_GUARD_RET({});

    std::vector<std::int32_t> out;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return out;

    if (max_descriptors == 0) return out;

    std::vector<EUGCContentDescriptorID> tmp;
    tmp.resize((size_t)max_descriptors);

    const bool ok = ugc->GetQueryUGCContentDescriptors(
        (UGCQueryHandle_t)query_handle,
        (uint32)index,
        tmp.data(),
        (uint32)tmp.size()
    );

    if (!ok) return out;

    out.reserve(tmp.size());
    for (auto d : tmp)
        out.push_back((std::int32_t)d);

    return out;
}

std::uint32_t steam_ugc_get_num_supported_game_versions(std::uint64_t query_handle, std::uint32_t index)
{
    UGCQueryHandle_t query = qh_from_u64(query_handle);

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    return ugc->GetNumSupportedGameVersions(query, index);
}

bool steam_ugc_remove_item_key_value_tags(std::uint64_t update_handle, std::string_view key)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string k(key);
    return ugc->RemoveItemKeyValueTags(uh_from_u64(update_handle), k.c_str());
}

bool steam_ugc_remove_item_preview(std::uint64_t update_handle, std::uint32_t index)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->RemoveItemPreview(uh_from_u64(update_handle), (uint32)index);
}

bool steam_ugc_add_content_descriptor(std::uint64_t update_handle, gm_enums::SteamUgcContentDescriptorId descriptor_id)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->AddContentDescriptor(uh_from_u64(update_handle), static_cast<EUGCContentDescriptorID>((int)descriptor_id));
}

bool steam_ugc_remove_content_descriptor(std::uint64_t update_handle, gm_enums::SteamUgcContentDescriptorId descriptor_id)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->RemoveContentDescriptor(uh_from_u64(update_handle), static_cast<EUGCContentDescriptorID>((int)descriptor_id));
}

bool steam_ugc_set_required_game_versions(
    std::uint64_t update_handle, std::string_view game_branch_min, std::string_view game_branch_max
)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string a(game_branch_min);
    std::string b(game_branch_max);
    return ugc->SetRequiredGameVersions(uh_from_u64(update_handle), a.c_str(), b.c_str());
}

void steam_ugc_release_query_ugc_request(std::uint64_t query_handle)
{
    steam_clear_last_error();

    if (query_handle == 0)
        return;

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return;

    ugc->ReleaseQueryUGCRequest((UGCQueryHandle_t)query_handle);
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_item_installed = nullptr;

static inline gm_structs::SteamUgcItemInstalled ugc_fromNative(const ItemInstalled_t& e)
{
    gm_structs::SteamUgcItemInstalled out{};
    out.app_id = (std::uint32_t)e.m_unAppID;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

class SteamUgc_ItemInstalled_Callback
{
public:
    STEAM_CALLBACK(SteamUgc_ItemInstalled_Callback, OnItemInstalled, ItemInstalled_t);
};

void SteamUgc_ItemInstalled_Callback::OnItemInstalled(ItemInstalled_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_item_installed;
    }
    if (cb)
        cb.call(ugc_fromNative(*p));
}

static SteamUgc_ItemInstalled_Callback g_ugc_item_installed_cb;

void steam_ugc_set_callback_item_installed( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_item_installed = callback;
}

void steam_ugc_clear_callback_item_installed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_item_installed = nullptr;
}

static gm::wire::GMFunction g_cb_download_item_result = nullptr;

static inline gm_structs::SteamUgcDownloadItemResult ugc_fromNative(const DownloadItemResult_t& e)
{
    gm_structs::SteamUgcDownloadItemResult out{};
    out.app_id = (std::uint32_t)e.m_unAppID;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    out.result = (std::int32_t)e.m_eResult;
    return out;
}

class SteamUgc_DownloadItemResult_Callback
{
public:
    STEAM_CALLBACK(SteamUgc_DownloadItemResult_Callback, OnDownloadItemResult, DownloadItemResult_t);
};

void SteamUgc_DownloadItemResult_Callback::OnDownloadItemResult(DownloadItemResult_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_download_item_result;
    }
    if (cb)
        cb.call(ugc_fromNative(*p));
}

static SteamUgc_DownloadItemResult_Callback g_ugc_download_item_result_cb;

void steam_ugc_set_callback_download_item_result( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_download_item_result = callback;
}

void steam_ugc_clear_callback_download_item_result()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_download_item_result = nullptr;
}

bool steam_ugc_set_allow_cached_response(std::uint64_t query_handle, std::uint32_t max_age_seconds)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetAllowCachedResponse(qh_from_u64(query_handle), (uint32)max_age_seconds);
}

bool steam_ugc_set_cloud_file_name_filter(std::uint64_t query_handle, std::string_view match_cloud_file_name)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(match_cloud_file_name);
    return ugc->SetCloudFileNameFilter(qh_from_u64(query_handle), s.c_str());
}

bool steam_ugc_set_item_content(std::uint64_t update_handle, std::string_view content_folder)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(content_folder);
    return ugc->SetItemContent(uh_from_u64(update_handle), s.c_str());
}

bool steam_ugc_set_item_description(std::uint64_t update_handle, std::string_view description)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(description);
    return ugc->SetItemDescription(uh_from_u64(update_handle), s.c_str());
}

bool steam_ugc_set_item_metadata(std::uint64_t update_handle, std::string_view metadata)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(metadata);
    return ugc->SetItemMetadata(uh_from_u64(update_handle), s.c_str());
}

bool steam_ugc_set_item_preview(std::uint64_t update_handle, std::string_view preview_file)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(preview_file);
    return ugc->SetItemPreview(uh_from_u64(update_handle), s.c_str());
}

bool steam_ugc_set_item_tags(std::uint64_t update_handle, const std::vector<std::string_view>& tags_csv)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::vector<const char*> result;
    result.reserve(tags_csv.size());

    for (auto sv : tags_csv)
    {
        std::cout << sv.data() << std::endl;
        result.push_back(sv.data()); // assumes null-terminated
    }
    
    SteamParamStringArray_t arr = {};
    arr.m_nNumStrings = result.size();
    arr.m_ppStrings = result.data();
    return ugc->SetItemTags(uh_from_u64(update_handle), &arr);
}

bool steam_ugc_set_item_title(std::uint64_t update_handle, std::string_view title)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(title);
    return ugc->SetItemTitle(uh_from_u64(update_handle), s.c_str());
}

bool steam_ugc_set_item_update_language(std::uint64_t update_handle, std::string_view language)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(language);
    return ugc->SetItemUpdateLanguage(uh_from_u64(update_handle), s.c_str());
}

bool steam_ugc_set_items_disabled_locally(
    const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids, bool disabled_locally
)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    const uint32 n = (uint32)std::min<std::size_t>(published_file_ids.size(), (size_t)num_published_file_ids);
    if (n == 0)
        return true;

    std::vector<PublishedFileId_t> ids;
    ids.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        ids.push_back(pubid_from_u64(published_file_ids[(size_t)i]));

    return ugc->SetItemsDisabledLocally(ids.data(), n, disabled_locally);
}

bool steam_ugc_set_item_visibility(std::uint64_t update_handle, gm_enums::SteamRemoteStoragePublishedFileVisibility visibility)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetItemVisibility(uh_from_u64(update_handle), static_cast<ERemoteStoragePublishedFileVisibility>((int)visibility));
}

bool steam_ugc_set_language(std::uint64_t query_handle, std::string_view language)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(language);
    return ugc->SetLanguage(qh_from_u64(query_handle), s.c_str());
}

bool steam_ugc_set_match_any_tag(std::uint64_t query_handle, bool match_any_tag)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetMatchAnyTag(qh_from_u64(query_handle), match_any_tag);
}

bool steam_ugc_set_ranked_by_trend_days(std::uint64_t query_handle, std::uint32_t days)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetRankedByTrendDays(qh_from_u64(query_handle), (uint32)days);
}

bool steam_ugc_set_return_additional_previews(std::uint64_t query_handle, bool return_additional_previews)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnAdditionalPreviews(qh_from_u64(query_handle), return_additional_previews);
}

bool steam_ugc_set_return_children(std::uint64_t query_handle, bool return_children)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnChildren(qh_from_u64(query_handle), return_children);
}

bool steam_ugc_set_return_key_value_tags(std::uint64_t query_handle, bool return_key_value_tags)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnKeyValueTags(qh_from_u64(query_handle), return_key_value_tags);
}

bool steam_ugc_set_return_long_description(std::uint64_t query_handle, bool return_long_description)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnLongDescription(qh_from_u64(query_handle), return_long_description);
}

bool steam_ugc_set_return_metadata(std::uint64_t query_handle, bool return_metadata)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnMetadata(qh_from_u64(query_handle), return_metadata);
}

bool steam_ugc_set_return_only_ids(std::uint64_t query_handle, bool return_only_ids)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnOnlyIDs(qh_from_u64(query_handle), return_only_ids);
}

bool steam_ugc_set_return_playtime_stats(std::uint64_t query_handle, std::uint32_t days)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnPlaytimeStats(qh_from_u64(query_handle), (uint32)days);
}

bool steam_ugc_set_return_total_only(std::uint64_t query_handle, bool return_total_only)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->SetReturnTotalOnly(qh_from_u64(query_handle), return_total_only);
}

bool steam_ugc_set_search_text(std::uint64_t query_handle, std::string_view search_text)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(search_text);
    return ugc->SetSearchText(qh_from_u64(query_handle), s.c_str());
}

bool steam_ugc_set_subscriptions_load_order(
    const std::vector<std::uint64_t>& published_file_ids, std::uint32_t num_published_file_ids
)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    const uint32 n = (uint32)std::min<std::size_t>(published_file_ids.size(), (size_t)num_published_file_ids);
    if (n == 0)
        return true;

    std::vector<PublishedFileId_t> ids;
    ids.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        ids.push_back(pubid_from_u64(published_file_ids[(size_t)i]));

    return ugc->SetSubscriptionsLoadOrder(ids.data(), n);
}

std::uint64_t steam_ugc_start_item_update(std::uint32_t consumer_app_id, std::uint64_t published_file_id)
{
    STEAM_GUARD_RET(0);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return 0;

    UGCUpdateHandle_t h = ugc->StartItemUpdate((AppId_t)consumer_app_id, pubid_from_u64(published_file_id));
    return (std::uint64_t)h;
}
void steam_ugc_suspend_downloads(bool suspend)
{
    STEAM_GUARD();
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return;

    ugc->SuspendDownloads(suspend);
}

bool steam_ugc_update_item_preview_file(std::uint64_t update_handle, std::uint32_t index, std::string_view preview_file)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(preview_file);
    return ugc->UpdateItemPreviewFile(uh_from_u64(update_handle), (uint32)index, s.c_str());
}

bool steam_ugc_update_item_preview_video(std::uint64_t update_handle, std::uint32_t index, std::string_view video_id)
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    std::string s(video_id);
    return ugc->UpdateItemPreviewVideo(uh_from_u64(update_handle), (uint32)index, s.c_str());
}

bool steam_ugc_show_workshop_eula()
{
    STEAM_GUARD_RET(false);
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc)
        return false;

    return ugc->ShowWorkshopEULA();
}

#include <steam/isteamremotestorage.h>
#include <mutex>
// Converters (native->gm_structs)
static inline gm_structs::SteamUgcQueryCompleted ugc_fromNative(const SteamUGCQueryCompleted_t& e)
{
    gm_structs::SteamUgcQueryCompleted out{};
    out.query_handle = (std::uint64_t)e.m_handle;
    out.result = (int32)e.m_eResult;
    out.num_results_returned = (std::uint32_t)e.m_unNumResultsReturned;
    out.total_matching_results = (std::uint32_t)e.m_unTotalMatchingResults;
    out.cached_data = (e.m_bCachedData != 0);
    return out;
}

static inline gm_structs::SteamUgcCreateItemResult ugc_fromNative(const CreateItemResult_t& e)
{
    gm_structs::SteamUgcCreateItemResult out{};
    out.result = (int32)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    out.legal_agreement_required = (e.m_bUserNeedsToAcceptWorkshopLegalAgreement != 0);
    return out;
}

static inline gm_structs::SteamUgcSubmitItemUpdateResult ugc_fromNative(const SubmitItemUpdateResult_t& e)
{
    gm_structs::SteamUgcSubmitItemUpdateResult out{};
    out.result = (int32)e.m_eResult;
    out.legal_agreement_required = (e.m_bUserNeedsToAcceptWorkshopLegalAgreement != 0);
    return out;
}

static inline gm_structs::SteamUgcSubscribeItemResult ugc_fromNative(const RemoteStorageSubscribePublishedFileResult_t& e)
{
    gm_structs::SteamUgcSubscribeItemResult out{};
    out.result = (int32)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

static inline gm_structs::SteamUgcUnsubscribeItemResult ugc_fromNative(const RemoteStorageUnsubscribePublishedFileResult_t& e)
{
    gm_structs::SteamUgcUnsubscribeItemResult out{};
    out.result = (int32)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

static inline gm_structs::SteamUgcFavoriteItemsListChanged ugc_fromNative(const UserFavoriteItemsListChanged_t& e)
{
    gm_structs::SteamUgcFavoriteItemsListChanged out{};
    out.result = (int32)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    out.was_add_request = (e.m_bWasAddRequest != 0);
    return out;
}

static inline gm_structs::SteamUgcSetUserItemVoteResult ugc_fromNative(const SetUserItemVoteResult_t& e)
{
    gm_structs::SteamUgcSetUserItemVoteResult out{};
    out.result = (int32)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    out.vote_up = (e.m_bVoteUp != 0);
    return out;
}

static inline gm_structs::SteamUgcGetUserItemVoteResult ugc_fromNative(const GetUserItemVoteResult_t& e)
{
    gm_structs::SteamUgcGetUserItemVoteResult out{};
    out.result = (int32)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    out.voted_up = (e.m_bVotedUp != 0);
    out.voted_down = (e.m_bVotedDown != 0);
    out.vote_skipped = (e.m_bVoteSkipped != 0);
    return out;
}

static inline gm_structs::SteamUgcRequestItemDetailsResult ugc_fromNative(const SteamUGCRequestUGCDetailsResult_t& e)
{
    gm_structs::SteamUgcRequestItemDetailsResult out{};
    out.result = (int32)e.m_details.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_details.m_nPublishedFileId;
    out.cached_data = (e.m_bCachedData != 0);
    return out;
}

static inline gm_structs::SteamUgcDeleteItemResult ugc_fromNative(const DeleteItemResult_t& e)
{
    gm_structs::SteamUgcDeleteItemResult out{};
    out.result = (int32)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

void steam_ugc_send_query_ugc_request(std::uint64_t query_handle,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    if(callback)
    {
        SteamAPICall_t call = ugc->SendQueryUGCRequest((UGCQueryHandle_t)query_handle);
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcQueryCompleted, SteamUGCQueryCompleted_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_create_item(std::uint32_t consumer_app_id, gm_enums::SteamWorkshopFileType workshop_file_type,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    if(callback)
    {
        SteamAPICall_t call = ugc->CreateItem((AppId_t)consumer_app_id, static_cast<EWorkshopFileType>((int)workshop_file_type));
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcCreateItemResult, CreateItemResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_submit_item_update(std::uint64_t update_handle, std::string_view change_note,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    std::string note(change_note);
    const char* p = note.empty() ? nullptr : note.c_str();

    if(callback)
    {
        SteamAPICall_t call = ugc->SubmitItemUpdate((UGCUpdateHandle_t)update_handle, p);
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcSubmitItemUpdateResult, SubmitItemUpdateResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_subscribe_item(std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->SubscribeItem((PublishedFileId_t)published_file_id);

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcSubscribeItemResult, RemoteStorageSubscribePublishedFileResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_unsubscribe_item(std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->UnsubscribeItem((PublishedFileId_t)published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcUnsubscribeItemResult, RemoteStorageUnsubscribePublishedFileResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

static gm::wire::GMFunction g_cb_user_subscribed_items_list_changed = nullptr;

static inline gm_structs::SteamUgcUserSubscribedItemsListChanged ugc_fromNative(const UserSubscribedItemsListChanged_t& e)
{
    gm_structs::SteamUgcUserSubscribedItemsListChanged out{};
    out.app_id = (std::uint32_t)e.m_nAppID;
    return out;
}

class SteamUgc_UserSubscribedItemsListChanged_Callback
{
public:
    STEAM_CALLBACK(SteamUgc_UserSubscribedItemsListChanged_Callback, OnUserSubscribedItemsListChanged, UserSubscribedItemsListChanged_t);
};

void SteamUgc_UserSubscribedItemsListChanged_Callback::OnUserSubscribedItemsListChanged(UserSubscribedItemsListChanged_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_user_subscribed_items_list_changed;
    }
    if (cb)
        cb.call(ugc_fromNative(*p));
}

static SteamUgc_UserSubscribedItemsListChanged_Callback g_ugc_user_subscribed_cb;

void steam_ugc_set_callback_user_subscribed_items_list_changed( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_subscribed_items_list_changed = callback;
}

void steam_ugc_clear_callback_user_subscribed_items_list_changed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_user_subscribed_items_list_changed = nullptr;
}

void steam_ugc_add_item_to_favorites(std::uint32_t app_id, std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->AddItemToFavorites((AppId_t)app_id, (PublishedFileId_t)published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcFavoriteItemsListChanged, UserFavoriteItemsListChanged_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_remove_item_from_favorites(std::uint32_t app_id, std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();
    
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->RemoveItemFromFavorites((AppId_t)app_id, (PublishedFileId_t)published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcFavoriteItemsListChanged, UserFavoriteItemsListChanged_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_set_user_item_vote(std::uint64_t published_file_id, bool vote_up,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->SetUserItemVote((PublishedFileId_t)published_file_id, vote_up);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcSetUserItemVoteResult, SetUserItemVoteResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_get_user_item_vote(std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->GetUserItemVote((PublishedFileId_t)published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcGetUserItemVoteResult, GetUserItemVoteResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_request_ugc_details(std::uint64_t published_file_id, std::uint32_t max_age_seconds,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();
    
    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->RequestUGCDetails((PublishedFileId_t)published_file_id, (uint32)max_age_seconds);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcRequestItemDetailsResult, SteamUGCRequestUGCDetailsResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_delete_item(std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->DeleteItem((PublishedFileId_t)published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamUgcDeleteItemResult, DeleteItemResult_t>(callback.value(), &ugc_fromNative);
        h->set(call);
    }
}

void steam_ugc_add_app_dependency(std::uint64_t published_file_id, std::uint32_t app_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->AddAppDependency((PublishedFileId_t)published_file_id, (AppId_t)app_id);
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<AddAppDependencyResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_remove_app_dependency(std::uint64_t published_file_id, std::uint32_t app_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->RemoveAppDependency((PublishedFileId_t)published_file_id, (AppId_t)app_id);
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<RemoveAppDependencyResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_add_dependency(std::uint64_t parent_published_file_id, std::uint64_t child_published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->AddDependency((PublishedFileId_t)parent_published_file_id, (PublishedFileId_t)child_published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<AddUGCDependencyResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_remove_dependency(std::uint64_t parent_published_file_id, std::uint64_t child_published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->RemoveDependency((PublishedFileId_t)parent_published_file_id, (PublishedFileId_t)child_published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<RemoveUGCDependencyResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_get_app_dependencies(std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->GetAppDependencies((PublishedFileId_t)published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<GetAppDependenciesResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_start_playtime_tracking(const std::vector<std::uint64_t>& published_file_ids,
                                       std::uint32_t num_published_file_ids,
                                        const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    const uint32 n = (uint32)std::min<std::size_t>(published_file_ids.size(), (size_t)num_published_file_ids);
    if (n == 0) { steam_set_last_error("steam_ugc_start_playtime_tracking: empty ids"); return; }

    std::vector<PublishedFileId_t> ids;
    ids.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        ids.push_back((PublishedFileId_t)published_file_ids[(size_t)i]);

    SteamAPICall_t call = ugc->StartPlaytimeTracking(ids.data(), n);
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<StartPlaytimeTrackingResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_stop_playtime_tracking(const std::vector<std::uint64_t>& published_file_ids,
                                      std::uint32_t num_published_file_ids,
                                       const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    const uint32 n = (uint32)std::min<std::size_t>(published_file_ids.size(), (size_t)num_published_file_ids);
    if (n == 0) { steam_set_last_error("steam_ugc_stop_playtime_tracking: empty ids"); return; }

    std::vector<PublishedFileId_t> ids;
    ids.reserve(n);
    for (uint32 i = 0; i < n; ++i)
        ids.push_back((PublishedFileId_t)published_file_ids[(size_t)i]);

    SteamAPICall_t call = ugc->StopPlaytimeTracking(ids.data(), n);
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<StopPlaytimeTrackingResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_stop_playtime_tracking_for_all_items( const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->StopPlaytimeTrackingForAllItems();
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<StopPlaytimeTrackingResult_t>(callback.value());
        h->set(call);
    }
}

void steam_ugc_get_workshop_eula_status( const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamUGC* ugc = steam_ugc_iface();
    if (!ugc) return;

    SteamAPICall_t call = ugc->GetWorkshopEULAStatus();
    if(callback)
    {
        auto* h = new steam_async::CallResultNoPayload<WorkshopEULAStatus_t>(callback.value());
        h->set(call);
    }
}

static gm::wire::GMFunction g_cb_file_subscribed = nullptr;
static gm::wire::GMFunction g_cb_file_unsubscribed = nullptr;

static inline gm_structs::SteamUgcFileSubscribed ugc_fromNative(const RemoteStoragePublishedFileSubscribed_t& e)
{
    gm_structs::SteamUgcFileSubscribed out{};
    out.app_id = (std::uint32_t)e.m_nAppID;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

static inline gm_structs::SteamUgcFileUnsubscribed ugc_fromNative(const RemoteStoragePublishedFileUnsubscribed_t& e)
{
    gm_structs::SteamUgcFileUnsubscribed out{};
    out.app_id = (std::uint32_t)e.m_nAppID;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

class SteamUgc_FileSubscribed_Callback
{
public:
    STEAM_CALLBACK(SteamUgc_FileSubscribed_Callback, OnFileSubscribed, RemoteStoragePublishedFileSubscribed_t);
};

void SteamUgc_FileSubscribed_Callback::OnFileSubscribed(RemoteStoragePublishedFileSubscribed_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_file_subscribed;
    }
    if (cb)
        cb.call(ugc_fromNative(*p));
}

static SteamUgc_FileSubscribed_Callback g_ugc_file_subscribed_cb;

class SteamUgc_FileUnsubscribed_Callback
{
public:
    STEAM_CALLBACK(SteamUgc_FileUnsubscribed_Callback, OnFileUnsubscribed, RemoteStoragePublishedFileUnsubscribed_t);
};

void SteamUgc_FileUnsubscribed_Callback::OnFileUnsubscribed(RemoteStoragePublishedFileUnsubscribed_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_file_unsubscribed;
    }
    if (cb)
        cb.call(ugc_fromNative(*p));
}

static SteamUgc_FileUnsubscribed_Callback g_ugc_file_unsubscribed_cb;

void steam_ugc_set_callback_file_subscribed( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_file_subscribed = callback;
}

void steam_ugc_clear_callback_file_subscribed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_file_subscribed = nullptr;
}

void steam_ugc_set_callback_file_unsubscribed( const gm::wire::GMFunction& callback)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_file_unsubscribed = callback;
}

void steam_ugc_clear_callback_file_unsubscribed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_file_unsubscribed = nullptr;
}
