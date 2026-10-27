#include "GMSteamworks.h"
#include "steam_async_common.h"

#include <steam/steam_api.h>
#include <steam/isteamremotestorage.h>

#include <algorithm>
#include <climits>
#include <cstdint>
#include <optional>
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
        cb.call();
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

bool steam_remote_storage_file_write(std::string_view file_name, gm::wire::GMBuffer data, std::optional<std::uint32_t> buffer_offset, std::optional<std::uint32_t> buffer_count)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    std::uint32_t offset = buffer_offset.value_or(0);

    if (static_cast<std::uint64_t>(offset) >= data.length()) {
        steam_set_last_error("FileWrite: buffer_offset exceeds buffer length.");
        return false;
    }

    std::uint32_t actual_count;
    if (buffer_count.has_value()) {
        actual_count = buffer_count.value();
    } else {
        std::uint64_t remaining = data.length() - static_cast<std::uint64_t>(offset);
        actual_count = static_cast<std::uint32_t>(std::min(remaining, static_cast<std::uint64_t>(INT_MAX)));
    }

    if (actual_count == 0) return false;

    if ((std::uint64_t)offset + (std::uint64_t)actual_count > (std::uint64_t)data.length()) {
        steam_set_last_error("FileWrite: buffer_offset + buffer_count exceeds buffer length.");
        return false;
    }

    std::string fn(file_name);
    auto reader = data.getReader();
    reader.skip((size_t)offset);
    const void* file_data = reader.data();
    return rs->FileWrite(fn.c_str(), file_data, (int32)actual_count);
}

std::int32_t steam_remote_storage_file_read(std::string_view file_name, gm::wire::GMBuffer out_data)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    if (out_data.length() == 0) return 0;

    std::string fn(file_name);

    const int32 file_size = rs->GetFileSize(fn.c_str());
    if (file_size <= 0) return 0;

    if ((std::uint64_t)file_size > out_data.length()) {
        steam_set_last_error("steam_remote_storage_file_read: output buffer too small for file contents (query steam_remote_storage_get_file_size first).");
        return 0;
    }

    auto w = out_data.getWriter();
    int32 read = rs->FileRead(fn.c_str(), w.data(), (int32)file_size);
    if (read <= 0) return 0;

    w.skip((size_t)read);
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

std::int64_t steam_remote_storage_get_file_timestamp(std::string_view file_name)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    std::string fn(file_name);
    return (std::int64_t)rs->GetFileTimestamp(fn.c_str());
}

std::int32_t steam_remote_storage_get_file_count()
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    return (std::int32_t)rs->GetFileCount();
}

std::optional<gm_structs::SteamRemoteStorageFileNameAndSize> steam_remote_storage_get_file_name_and_size(std::int32_t index)
{
    STEAM_GUARD_RET(std::nullopt);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return std::nullopt;

    int32 sz = 0;
    const char* name = rs->GetFileNameAndSize((int)index, &sz);
    if (!name) return std::nullopt;

    gm_structs::SteamRemoteStorageFileNameAndSize out{};
    out.file_name = name;
    out.file_size = (std::int32_t)sz;
    return out;
}

std::optional<gm_structs::SteamRemoteStorageQuota> steam_remote_storage_get_quota()
{
    STEAM_GUARD_RET(std::nullopt);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return std::nullopt;

    uint64 total = 0, avail = 0;
    bool ok = rs->GetQuota(&total, &avail);
    if (!ok)
        return std::nullopt;

    gm_structs::SteamRemoteStorageQuota out{};
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

bool steam_remote_storage_file_write_stream_write_chunk(std::uint64_t stream, gm::wire::GMBuffer data, std::optional<std::uint32_t> buffer_offset, std::optional<std::uint32_t> buffer_count)
{
    STEAM_GUARD_RET(false);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return false;

    std::uint32_t offset = buffer_offset.value_or(0);

    if (static_cast<std::uint64_t>(offset) >= data.length()) {
        steam_set_last_error("FileWriteStreamWriteChunk: buffer_offset exceeds buffer length.");
        return false;
    }

    std::uint32_t actual_count;
    if (buffer_count.has_value()) {
        actual_count = buffer_count.value();
    } else {
        std::uint64_t remaining = data.length() - static_cast<std::uint64_t>(offset);
        actual_count = static_cast<std::uint32_t>(std::min(remaining, static_cast<std::uint64_t>(INT_MAX)));
    }

    if (actual_count == 0) return false;

    if ((std::uint64_t)offset + (std::uint64_t)actual_count > (std::uint64_t)data.length()) {
        steam_set_last_error("FileWriteStreamWriteChunk: buffer_offset + buffer_count exceeds buffer length.");
        return false;
    }

    auto reader = data.getReader();
    reader.skip((size_t)offset);
    const void* chunk_data = reader.data();
    return rs->FileWriteStreamWriteChunk((UGCFileWriteStreamHandle_t)stream, chunk_data, (int32)actual_count);
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

std::optional<gm_structs::SteamRemoteStorageUgcDetails>
steam_remote_storage_get_ugc_details(std::uint64_t ugc_handle)
{
    STEAM_GUARD_RET(std::nullopt);

    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return std::nullopt;

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
        return std::nullopt;
    }

    gm_structs::SteamRemoteStorageUgcDetails out{};
    out.ugc_handle = ugc_handle;
    out.app_id = (std::uint32_t)app;
    out.size_in_bytes = (std::int32_t)size;
    out.file_name = name ? name : "";
    out.steam_id_owner = (std::uint64_t)owner.ConvertToUint64();

    return out;
}


std::int32_t steam_remote_storage_ugc_read(std::uint64_t ugc_handle,
                                           gm::wire::GMBuffer out_data,
                                           std::uint32_t offset,
                                           gm_enums::SteamRemoteStorageUgcReadAction action)
{
    STEAM_GUARD_RET(0);
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return 0;
    if (out_data.length() <= 0) return 0;

    AppId_t details_app = 0;
    char* details_name = nullptr;
    int32 total_size = 0;
    CSteamID details_owner;
    if (!rs->GetUGCDetails((UGCHandle_t)ugc_handle, &details_app, &details_name, &total_size, &details_owner))
        return 0;

    const std::uint64_t remaining = (offset < (std::uint32_t)total_size) ? ((std::uint64_t)total_size - offset) : 0;
    if (remaining > out_data.length()) {
        steam_set_last_error("steam_remote_storage_ugc_read: output buffer too small for UGC data (query steam_remote_storage_get_ugc_details first).");
        return 0;
    }

    auto w = out_data.getWriter();
    int32 r = rs->UGCRead((UGCHandle_t)ugc_handle, w.data(), (int32)out_data.length(), (uint32)offset, (EUGCReadAction)((int)action));
    if (r <= 0) return 0;

    w.skip((size_t)r);
    return (std::int32_t)r;
}

static inline gm_structs::SteamRemoteStorageFileShareResult rs_fromNative(const RemoteStorageFileShareResult_t& e)
{
    gm_structs::SteamRemoteStorageFileShareResult out{};
    out.result = static_cast<gm_enums::SteamApiResult>((int)e.m_eResult);
    out.ugc_handle = (std::uint64_t)e.m_hFile;
    out.file_name = e.m_rgchFilename;
    return out;
}

static inline gm_structs::SteamRemoteStorageDownloadUgcResult rs_fromNative(const RemoteStorageDownloadUGCResult_t& e)
{
    gm_structs::SteamRemoteStorageDownloadUgcResult out{};
    out.result = static_cast<gm_enums::SteamApiResult>((int)e.m_eResult);
    out.ugc_handle = (std::uint64_t)e.m_hFile;
    out.app_id = (std::uint32_t)e.m_nAppID;
    out.size_in_bytes = (std::int32_t)e.m_nSizeInBytes;
    out.file_name = e.m_pchFileName;
    out.steam_id_owner = (std::uint64_t)e.m_ulSteamIDOwner;
    return out;
}

void steam_remote_storage_file_share(std::string_view file_name,  const gm::wire::GMFunction& callback)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    std::string fn(file_name);
    SteamAPICall_t call = rs->FileShare(fn.c_str());

    if (call == k_uAPICallInvalid) {
        steam_set_last_error("steam_remote_storage_file_share: Steam API call failed to dispatch.");
        return;
    }

    auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageFileShareResult, RemoteStorageFileShareResult_t, true>(callback, &rs_fromNative);
    h->set(call);
}

static inline gm_structs::SteamRemoteStorageFileWriteAsyncResult rs_fromNative(const RemoteStorageFileWriteAsyncComplete_t& e)
{
    gm_structs::SteamRemoteStorageFileWriteAsyncResult out{};
    out.result = static_cast<gm_enums::SteamApiResult>((int)e.m_eResult);
    return out;
}

void steam_remote_storage_file_write_async(std::string_view file_name, gm::wire::GMBuffer data, const gm::wire::GMFunction& callback, std::optional<std::uint32_t> buffer_offset, std::optional<std::uint32_t> buffer_count)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    std::uint32_t offset = buffer_offset.value_or(0);

    if (static_cast<std::uint64_t>(offset) >= data.length()) {
        steam_set_last_error("FileWriteAsync: buffer_offset exceeds buffer length.");
        return;
    }

    std::uint32_t actual_count;
    if (buffer_count.has_value()) {
        actual_count = buffer_count.value();
    } else {
        std::uint64_t remaining = data.length() - static_cast<std::uint64_t>(offset);
        actual_count = static_cast<std::uint32_t>(std::min(remaining, static_cast<std::uint64_t>(INT_MAX)));
    }

    if (actual_count == 0) return;

    if ((std::uint64_t)offset + (std::uint64_t)actual_count > (std::uint64_t)data.length()) {
        steam_set_last_error("FileWriteAsync: buffer_offset + buffer_count exceeds buffer length.");
        return;
    }

    std::string fn(file_name);
    std::vector<std::uint8_t> tmp((size_t)actual_count);
    auto reader = data.getReader();
    reader.skip((size_t)offset);
    reader.readBytes((char*)tmp.data(), (int)actual_count);
    SteamAPICall_t call = rs->FileWriteAsync(fn.c_str(), (const void*)tmp.data(), (uint32)actual_count);

    if (call == k_uAPICallInvalid) {
        steam_set_last_error("steam_remote_storage_file_write_async: Steam API call failed to dispatch.");
        return;
    }

    auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageFileWriteAsyncResult, RemoteStorageFileWriteAsyncComplete_t, true>(callback, &rs_fromNative);
    h->set(call);
}

void steam_remote_storage_ugc_download(std::uint64_t ugc_handle, std::uint32_t priority,  const gm::wire::GMFunction& callback)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    SteamAPICall_t call = rs->UGCDownload((UGCHandle_t)ugc_handle, (uint32)priority);

    if (call == k_uAPICallInvalid) {
        steam_set_last_error("steam_remote_storage_ugc_download: Steam API call failed to dispatch.");
        return;
    }

    auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageDownloadUgcResult, RemoteStorageDownloadUGCResult_t, true>(callback, &rs_fromNative);
    h->set(call);
}

void steam_remote_storage_ugc_download_to_location(std::uint64_t ugc_handle, std::string_view location, std::uint32_t priority,  const gm::wire::GMFunction& callback)
{
    STEAM_GUARD();
    ISteamRemoteStorage* rs = steam_remote_storage_iface();
    if (!rs) return;

    std::string loc(location);
    SteamAPICall_t call = rs->UGCDownloadToLocation((UGCHandle_t)ugc_handle, loc.c_str(), (uint32)priority);

    if (call == k_uAPICallInvalid) {
        steam_set_last_error("steam_remote_storage_ugc_download_to_location: Steam API call failed to dispatch.");
        return;
    }

    auto* h = new steam_async::CallResult<gm_structs::SteamRemoteStorageDownloadUgcResult, RemoteStorageDownloadUGCResult_t, true>(callback, &rs_fromNative);
    h->set(call);
}



