#include "GMSteamworks.h"
#include "steam_async_common.h"

#include <steam/steam_api.h>
#include <steam/isteamremotestorage.h>

#include <algorithm>
#include <cstdint>
#include <string>
#include <string_view>
#include <vector>
#include <mutex>

static inline ISteamRemoteStorage* steam_remote_storage_iface()
{
    if (!steam_api_is_initialized()) {
        steam_set_last_error("Steam Remote Storage: Steam API not initialized (call steam_api_init first).");
        return nullptr;
    }

    ISteamRemoteStorage* s = SteamRemoteStorage();
    if (!s)
        steam_set_last_error("Steam Remote Storage: SteamRemoteStorage() returned NULL.");

    return s;
}

static std::mutex g_callbacks_mtx;

static gm::wire::GMFunction g_cb_rs_published_subscribed = nullptr;
static gm::wire::GMFunction g_cb_rs_published_unsubscribed = nullptr;
static gm::wire::GMFunction g_cb_rs_local_file_change = nullptr;

static inline gm_structs::SteamRemoteStoragePublishedFileSubscribed rs_fromNative(const RemoteStoragePublishedFileSubscribed_t& e)
{
    gm_structs::SteamRemoteStoragePublishedFileSubscribed out{};
    out.app_id = (std::uint32_t)e.m_nAppID;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

static inline gm_structs::SteamRemoteStoragePublishedFileUnsubscribed rs_fromNative(const RemoteStoragePublishedFileUnsubscribed_t& e)
{
    gm_structs::SteamRemoteStoragePublishedFileUnsubscribed out{};
    out.app_id = (std::uint32_t)e.m_nAppID;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

static inline gm_structs::SteamRemoteStorageLocalFileChange rs_fromNative(const RemoteStorageLocalFileChange_t&)
{
    gm_structs::SteamRemoteStorageLocalFileChange out{};
    out.dummy = 0;
    return out;
}

class SteamRemoteStorage_PersistentCallbacks
{
public:
    STEAM_CALLBACK(SteamRemoteStorage_PersistentCallbacks, OnSubscribed, RemoteStoragePublishedFileSubscribed_t);
    STEAM_CALLBACK(SteamRemoteStorage_PersistentCallbacks, OnUnsubscribed, RemoteStoragePublishedFileUnsubscribed_t);
    STEAM_CALLBACK(SteamRemoteStorage_PersistentCallbacks, OnLocalFileChange, RemoteStorageLocalFileChange_t);
};

void SteamRemoteStorage_PersistentCallbacks::OnSubscribed(RemoteStoragePublishedFileSubscribed_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_rs_published_subscribed;
    }
    if (cb)
        cb.call(rs_fromNative(*p));
}
void SteamRemoteStorage_PersistentCallbacks::OnUnsubscribed(RemoteStoragePublishedFileUnsubscribed_t* p)
{
    if (!p) return;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_rs_published_unsubscribed;
    }
    if (cb)
        cb.call(rs_fromNative(*p));
}
void SteamRemoteStorage_PersistentCallbacks::OnLocalFileChange(RemoteStorageLocalFileChange_t* p)
{
    (void)p;
    gm::wire::GMFunction cb;
    {
        std::lock_guard<std::mutex> lock(g_callbacks_mtx);
        cb = g_cb_rs_local_file_change;
    }
    if (cb)
        cb.call(rs_fromNative(RemoteStorageLocalFileChange_t{}));
}

static SteamRemoteStorage_PersistentCallbacks g_rs_callbacks;

void steam_remote_storage_set_callback_published_file_subscribed(const gm::wire::GMFunction& cb)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rs_published_subscribed = cb;
}
void steam_remote_storage_clear_callback_published_file_subscribed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rs_published_subscribed = nullptr;
}
void steam_remote_storage_set_callback_published_file_unsubscribed(const gm::wire::GMFunction& cb)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rs_published_unsubscribed = cb;
}
void steam_remote_storage_clear_callback_published_file_unsubscribed()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rs_published_unsubscribed = nullptr;
}
void steam_remote_storage_set_callback_local_file_change(const gm::wire::GMFunction& cb)
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rs_local_file_change = cb;
}
void steam_remote_storage_clear_callback_local_file_change()
{
    steam_clear_last_error();
    std::lock_guard<std::mutex> lock(g_callbacks_mtx);
    g_cb_rs_local_file_change = nullptr;
}

bool steam_remote_storage_is_cloud_enabled_for_account()
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    return rs->IsCloudEnabledForAccount();
}

bool steam_remote_storage_is_cloud_enabled_for_app()
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    return rs->IsCloudEnabledForApp();
}

void steam_remote_storage_set_cloud_enabled_for_app(bool enabled)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;
    rs->SetCloudEnabledForApp(enabled);
}

bool steam_remote_storage_file_write(std::string_view file_name, gm::wire::GMBuffer data, std::uint32_t bytes)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    if (bytes == 0) return false;

    std::string fn(file_name);
    return rs->FileWrite(fn.c_str(), (const void*)data.data(), (int32)bytes);
}

std::int32_t steam_remote_storage_file_read(std::string_view file_name, gm::wire::GMBuffer out_data, std::uint32_t max_bytes)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    if (max_bytes == 0) return 0;

    std::string fn(file_name);
    std::vector<std::uint8_t> tmp((size_t)max_bytes);

    int32 read = rs->FileRead(fn.c_str(), tmp.data(), (int32)tmp.size());
    if (read <= 0) return 0;

    auto w = out_data.getWriter();
    w.writeBytes((const char*)tmp.data(), (int)read);
    return (std::int32_t)read;
}

bool steam_remote_storage_file_delete(std::string_view file_name)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    std::string fn(file_name);
    return rs->FileDelete(fn.c_str());
}

bool steam_remote_storage_file_exists(std::string_view file_name)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    std::string fn(file_name);
    return rs->FileExists(fn.c_str());
}

bool steam_remote_storage_file_persisted(std::string_view file_name)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    std::string fn(file_name);
    return rs->FilePersisted(fn.c_str());
}

std::int32_t steam_remote_storage_get_file_size(std::string_view file_name)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    std::string fn(file_name);
    return (std::int32_t)rs->GetFileSize(fn.c_str());
}

std::int32_t steam_remote_storage_get_file_timestamp(std::string_view file_name)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    std::string fn(file_name);
    return (std::int32_t)rs->GetFileTimestamp(fn.c_str());
}

std::int32_t steam_remote_storage_get_file_count()
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    return (std::int32_t)rs->GetFileCount();
}

gm_structs::SteamRemoteStorageFileNameAndSize steam_remote_storage_get_file_name_and_size(std::int32_t index)
{
    gm_structs::SteamRemoteStorageFileNameAndSize out{};
    out.ok = false;
    out.file_name = "";
    out.file_size = 0;

    STEAM_GUARD_RET(out);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return out;

    int32 sz = 0;
    const char* name = rs->GetFileNameAndSize((int)index, &sz);
    if (!name) return out;

    out.ok = true;
    out.file_name = name;
    out.file_size = (std::int32_t)sz;
    return out;
}

gm_structs::SteamRemoteStorageQuota steam_remote_storage_get_quota()
{
    gm_structs::SteamRemoteStorageQuota out{};
    out.ok = false;
    out.total_bytes = 0;
    out.available_bytes = 0;

    STEAM_GUARD_RET(out);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return out;

    uint64 total = 0, avail = 0;
    bool ok = rs->GetQuota(&total, &avail);
    out.ok = ok;
    out.total_bytes = (std::uint64_t)total;
    out.available_bytes = (std::uint64_t)avail;
    return out;
}

bool steam_remote_storage_set_sync_platforms(std::string_view file_name, gm_enums::SteamRemoteStoragePlatform platforms)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    std::string fn(file_name);
    return rs->SetSyncPlatforms(fn.c_str(), (ERemoteStoragePlatform)((int)platforms));
}

gm_enums::SteamRemoteStoragePlatform steam_remote_storage_get_sync_platforms(std::string_view file_name)
{
    STEAM_GUARD_RET((gm_enums::SteamRemoteStoragePlatform)0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return (gm_enums::SteamRemoteStoragePlatform)0;
    std::string fn(file_name);
    ERemoteStoragePlatform p = rs->GetSyncPlatforms(fn.c_str());
    return (gm_enums::SteamRemoteStoragePlatform)((int)p);
}

bool steam_remote_storage_file_forget(std::string_view file_name)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    std::string fn(file_name);
    return rs->FileForget(fn.c_str());
}

// Streams
std::uint64_t steam_remote_storage_file_write_stream_open(std::string_view file_name)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    std::string fn(file_name);
    UGCFileWriteStreamHandle_t h = rs->FileWriteStreamOpen(fn.c_str());
    return (std::uint64_t)h;
}

bool steam_remote_storage_file_write_stream_write_chunk(std::uint64_t stream, gm::wire::GMBuffer data, std::uint32_t bytes)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    if (bytes == 0) return false;
    return rs->FileWriteStreamWriteChunk((UGCFileWriteStreamHandle_t)stream, (const void*)data.data(), (int32)bytes);
}

bool steam_remote_storage_file_write_stream_close(std::uint64_t stream)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    return rs->FileWriteStreamClose((UGCFileWriteStreamHandle_t)stream);
}

bool steam_remote_storage_file_write_stream_cancel(std::uint64_t stream)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;
    return rs->FileWriteStreamCancel((UGCFileWriteStreamHandle_t)stream);
}

std::int32_t steam_remote_storage_get_cached_ugc_count()
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    return (std::int32_t)rs->GetCachedUGCCount();
}

std::uint64_t steam_remote_storage_get_cached_ugc_handle(std::int32_t index)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    UGCHandle_t h = rs->GetCachedUGCHandle((int)index);
    return (std::uint64_t)h;
}

gm_structs::SteamRemoteStorageUgcDetails
steam_remote_storage_get_ugc_details(std::uint64_t ugc_handle)
{
    gm_structs::SteamRemoteStorageUgcDetails out{};
    out.ok = false;
    out.ugc_handle = ugc_handle;
    out.app_id = 0;
    out.size_in_bytes = 0;
    out.file_name = "";
    out.steam_id_owner = 0;

    STEAM_GUARD_RET(out);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return out;

    AppId_t app = 0;
    char* name = nullptr;               // 👈 IMPORTANT
    int32 size = 0;
    CSteamID owner;

    if (!rs->GetUGCDetails(
            (UGCHandle_t)ugc_handle,
            &app,
            &name,                      // 👈 char**
            &size,
            &owner))
    {
        return out;
    }

    out.ok = true;
    out.app_id = (std::uint32_t)app;
    out.size_in_bytes = (std::int32_t)size;
    out.file_name = name ? name : "";
    out.steam_id_owner = (std::uint64_t)owner.ConvertToUint64();

    return out;
}


std::int32_t steam_remote_storage_ugc_read(std::uint64_t ugc_handle,
                                           gm::wire::GMBuffer out_data,
                                           std::int32_t bytes_to_read,
                                           std::uint32_t offset,
                                           gm_enums::SteamRemoteStorageUgcReadAction action)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    if (bytes_to_read <= 0) return 0;

    std::vector<std::uint8_t> tmp((size_t)bytes_to_read);
    int32 r = rs->UGCRead((UGCHandle_t)ugc_handle, tmp.data(), bytes_to_read, (uint32)offset, (EUGCReadAction)((int)action));
    if (r <= 0) return 0;

    auto w = out_data.getWriter();
    w.writeBytes((const char*)tmp.data(), (int)r);
    return (std::int32_t)r;
}

static inline gm_structs::SteamRemoteStorageFileShareResult rs_fromNative(const RemoteStorageFileShareResult_t& e)
{
    gm_structs::SteamRemoteStorageFileShareResult out{};
    out.result = (std::int32_t)e.m_eResult;
    out.ugc_handle = (std::uint64_t)e.m_hFile;
    out.file_name = e.m_rgchFilename;
    return out;
}

static inline gm_structs::SteamRemoteStorageDownloadUgcResult rs_fromNative(const RemoteStorageDownloadUGCResult_t& e)
{
    gm_structs::SteamRemoteStorageDownloadUgcResult out{};
    out.result = (std::int32_t)e.m_eResult;
    out.ugc_handle = (std::uint64_t)e.m_hFile;
    out.app_id = (std::uint32_t)e.m_nAppID;
    out.size_in_bytes = (std::int32_t)e.m_nSizeInBytes;
    out.file_name = e.m_pchFileName;
    out.steam_id_owner = (std::uint64_t)e.m_ulSteamIDOwner;
    return out;
}

void steam_remote_storage_file_share(std::string_view file_name,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    std::string fn(file_name);
    SteamAPICall_t call = rs->FileShare(fn.c_str());
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageFileShareResult, RemoteStorageFileShareResult_t>(callback.value(), &rs_fromNative);
        h->set(call);
    }
}

void steam_remote_storage_ugc_download(std::uint64_t ugc_handle, std::uint32_t priority,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    SteamAPICall_t call = rs->UGCDownload((UGCHandle_t)ugc_handle, (uint32)priority);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageDownloadUgcResult, RemoteStorageDownloadUGCResult_t>(callback.value(), &rs_fromNative);
        h->set(call);
    }
}

void steam_remote_storage_ugc_download_to_location(std::uint64_t ugc_handle, std::string_view location, std::uint32_t priority,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    std::string loc(location);
    SteamAPICall_t call = rs->UGCDownloadToLocation((UGCHandle_t)ugc_handle, loc.c_str(), (uint32)priority);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageDownloadUgcResult, RemoteStorageDownloadUGCResult_t>(callback.value(), &rs_fromNative);
        h->set(call);
    }
}

static inline gm_structs::SteamRemoteStoragePublishFileResult rs_fromNative(const RemoteStoragePublishFileResult_t& e)
{
    gm_structs::SteamRemoteStoragePublishFileResult out{};
    out.result = (std::int32_t)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    out.user_needs_to_accept_wla = (e.m_bUserNeedsToAcceptWorkshopLegalAgreement != 0);
    return out;
}

static inline gm_structs::SteamRemoteStorageUpdatePublishedFileResult rs_fromNative(const RemoteStorageUpdatePublishedFileResult_t& e)
{
    gm_structs::SteamRemoteStorageUpdatePublishedFileResult out{};
    out.result = (std::int32_t)e.m_eResult;
    out.user_needs_to_accept_wla = (e.m_bUserNeedsToAcceptWorkshopLegalAgreement != 0);
    return out;
}

static inline gm_structs::SteamRemoteStorageSubscribePublishedFileResult rs_fromNative(const RemoteStorageSubscribePublishedFileResult_t& e)
{
    gm_structs::SteamRemoteStorageSubscribePublishedFileResult out{};
    out.result = (std::int32_t)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

static inline gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult rs_fromNative(const RemoteStorageUnsubscribePublishedFileResult_t& e)
{
    gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult out{};
    out.result = (std::int32_t)e.m_eResult;
    out.published_file_id = (std::uint64_t)e.m_nPublishedFileId;
    return out;
}

static inline void rs_build_tag_array(std::string_view tags_csv,
                                      std::vector<std::string>& out_tokens,
                                      std::vector<const char*>& out_ptrs,
                                      SteamParamStringArray_t& out_arr)
{
    out_tokens.clear();
    out_ptrs.clear();

    std::string tags(tags_csv);
    if (!tags.empty())
    {
        size_t start = 0;
        while (true)
        {
            size_t comma = tags.find(',', start);
            std::string tok = (comma == std::string::npos) ? tags.substr(start) : tags.substr(start, comma - start);
            // trim spaces
            while (!tok.empty() && (tok.front() == ' ' || tok.front() == '\t')) tok.erase(tok.begin());
            while (!tok.empty() && (tok.back() == ' ' || tok.back() == '\t')) tok.pop_back();
            if (!tok.empty()) out_tokens.push_back(tok);
            if (comma == std::string::npos) break;
            start = comma + 1;
        }
    }

    out_ptrs.reserve(out_tokens.size());
    for (auto& s : out_tokens) out_ptrs.push_back(s.c_str());

    out_arr.m_nNumStrings = (int)out_ptrs.size();
    out_arr.m_ppStrings = out_ptrs.empty() ? nullptr : out_ptrs.data();
}

void steam_remote_storage_publish_workshop_file(std::string_view file,
                                                std::string_view preview_file,
                                                std::uint32_t app_id_consumer,
                                                std::string_view title,
                                                std::string_view description,
                                                gm_enums::SteamRemoteStoragePublishedFileVisibility visibility,
                                                std::string_view tags_csv,
                                                gm_enums::SteamRemoteStorageWorkshopFileType file_type,
                                                 const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    std::string f(file);
    std::string pf(preview_file);
    std::string t(title);
    std::string d(description);

    std::vector<std::string> tag_tokens;
    std::vector<const char*> tag_ptrs;
    SteamParamStringArray_t tag_arr{};
    rs_build_tag_array(tags_csv, tag_tokens, tag_ptrs, tag_arr);

    SteamAPICall_t call = rs->PublishWorkshopFile(
        f.c_str(),
        pf.c_str(),
        (AppId_t)app_id_consumer,
        t.c_str(),
        d.c_str(),
        (ERemoteStoragePublishedFileVisibility)(int)visibility,
        tag_ptrs.empty() ? nullptr : &tag_arr,
        (EWorkshopFileType)(int)file_type
    );

    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStoragePublishFileResult, RemoteStoragePublishFileResult_t>(callback.value(), &rs_fromNative);
        h->set(call);
    }
}

std::uint64_t steam_remote_storage_create_published_file_update_request(std::uint64_t published_file_id)
{
    STEAM_GUARD_RET(0);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;

    PublishedFileUpdateHandle_t h = rs->CreatePublishedFileUpdateRequest((PublishedFileId_t)published_file_id);
    return (std::uint64_t)h;
}

bool steam_remote_storage_update_published_file_file(std::uint64_t update_handle, std::string_view file)
{
    STEAM_GUARD_RET(false);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    std::string f(file);
    return rs->UpdatePublishedFileFile((PublishedFileUpdateHandle_t)update_handle, f.c_str());
}

bool steam_remote_storage_update_published_file_preview_file(std::uint64_t update_handle, std::string_view preview_file)
{
    STEAM_GUARD_RET(false);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    std::string f(preview_file);
    return rs->UpdatePublishedFilePreviewFile((PublishedFileUpdateHandle_t)update_handle, f.c_str());
}

bool steam_remote_storage_update_published_file_title(std::uint64_t update_handle, std::string_view title)
{
    STEAM_GUARD_RET(false);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    std::string t(title);
    return rs->UpdatePublishedFileTitle((PublishedFileUpdateHandle_t)update_handle, t.c_str());
}

bool steam_remote_storage_update_published_file_description(std::uint64_t update_handle, std::string_view description)
{
    STEAM_GUARD_RET(false);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    std::string d(description);
    return rs->UpdatePublishedFileDescription((PublishedFileUpdateHandle_t)update_handle, d.c_str());
}

bool steam_remote_storage_update_published_file_visibility(std::uint64_t update_handle,
                                                           gm_enums::SteamRemoteStoragePublishedFileVisibility visibility)
{
    STEAM_GUARD_RET(false);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    return rs->UpdatePublishedFileVisibility((PublishedFileUpdateHandle_t)update_handle,
                                             (ERemoteStoragePublishedFileVisibility)(int)visibility);
}

bool steam_remote_storage_update_published_file_tags(std::uint64_t update_handle, std::string_view tags_csv)
{
    STEAM_GUARD_RET(false);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    std::vector<std::string> tag_tokens;
    std::vector<const char*> tag_ptrs;
    SteamParamStringArray_t tag_arr{};
    rs_build_tag_array(tags_csv, tag_tokens, tag_ptrs, tag_arr);

    return rs->UpdatePublishedFileTags((PublishedFileUpdateHandle_t)update_handle,
                                       tag_ptrs.empty() ? nullptr : &tag_arr);
}

void steam_remote_storage_commit_published_file_update(std::uint64_t update_handle,
                                                        const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    SteamAPICall_t call = rs->CommitPublishedFileUpdate((PublishedFileUpdateHandle_t)update_handle);

    if(callback)
    {
        auto* h = new steam_async::CallResult<
            gm_structs::SteamRemoteStorageUpdatePublishedFileResult,
            RemoteStorageUpdatePublishedFileResult_t
        >(callback.value(), &rs_fromNative);

        h->set(call);
    }
}


void steam_remote_storage_subscribe_published_file(std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    SteamAPICall_t call = rs->SubscribePublishedFile((PublishedFileId_t)published_file_id);
    if(callback)
    {
        auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageSubscribePublishedFileResult, RemoteStorageSubscribePublishedFileResult_t>(callback.value(), &rs_fromNative);
        h->set(call);
    }
}

void steam_remote_storage_unsubscribe_published_file(std::uint64_t published_file_id,  const std::optional<gm::wire::GMFunction>& callback)
{
    STEAM_GUARD();

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    if(callback)
    {
        SteamAPICall_t call = rs->UnsubscribePublishedFile((PublishedFileId_t)published_file_id);
        auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageUnsubscribePublishedFileResult, RemoteStorageUnsubscribePublishedFileResult_t>(callback.value(), &rs_fromNative);
        h->set(call);
    }
}
