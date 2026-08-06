
// FUNCTIONS

/**
 * @function steam_remote_storage_set_callback_published_file_subscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call when subscribed to a published file on remote storage.
 * 
 * See: [ISteamRemoteStorage::RemoteStoragePublishedFileSubscribed_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileSubscribed_t)
 * 
 * See: ${struct.SteamRemoteStoragePublishedFileSubscribed}
 *
 * @param {Function} callback The function to be called when a published file is subscribed to.
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_published_file_subscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_remote_storage_set_callback_published_file_subscribed}.
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_published_file_unsubscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call when subscribed to a published file on remote storage.
 * 
 * See: [ISteamRemoteStorage::RemoteStoragePublishedFileUnsubscribed_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileUnsubscribed_t)
 * 
 * See: ${struct.SteamRemoteStoragePublishedFileUnsubscribed}
 *
 * @param {Function} callback The function to be called when a published file is unsubscribed from.
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_published_file_unsubscribed
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_remote_storage_set_callback_published_file_unsubscribed}.
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_callback_local_file_change
 * @description > **Steamworks Function**: N / A
 *
 * This function sets the function to call in case of a local file change. If a Steam app is flagged for supporting dynamic Steam Cloud sync, and a sync occurs, this callback will be posted to the app if any local files changed.
 * 
 * See: [ISteamRemoteStorage::RemoteStorageLocalFileChange_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageLocalFileChange_t)
 * 
 * This callback has no fields.
 *
 * @param {Function} callback The function to be called when a local file change is detected.
 * @function_end 
 */

/**
 * @function steam_remote_storage_clear_callback_local_file_change
 * @description > **Steamworks Function**: N / A
 *
 * This function clears the callback function previously set using ${function.steam_remote_storage_set_callback_local_file_change}.
 *
 * @function_end 
 */

/**
 * @function steam_remote_storage_is_cloud_enabled_for_account
 * @description > **Steamworks Function**: [ISteamRemoteStorage::IsCloudEnabledForAccount](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#IsCloudEnabledForAccount)
 *
 * This function checks if the account wide Steam Cloud setting is enabled for this user; or if they disabled it in the Settings->Cloud dialog.
 * 
 * Ensure that you are also checking ${function.steam_remote_storage_is_cloud_enabled_for_app}, as these two options are mutually exclusive.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_is_cloud_enabled_for_app
 * @description > **Steamworks Function**: [ISteamRemoteStorage::IsCloudEnabledForApp](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#IsCloudEnabledForApp)
 *
 * This function checks if the per game Steam Cloud setting is enabled for this user; or if they disabled it in the Game Properties->Update dialog.
 * 
 * Ensure that you are also checking ${function.steam_remote_storage_is_cloud_enabled_for_account}, as these two options are mutually exclusive.
 * 
 * It's generally recommended that you allow the user to toggle this setting within your in-game options, you can toggle it with ${function.steam_remote_storage_set_cloud_enabled_for_app}.
 *
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_cloud_enabled_for_app
 * @description > **Steamworks Function**: [ISteamRemoteStorage::SetCloudEnabledForApp](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#SetCloudEnabledForApp)
 *
 * This function toggles whether the Steam Cloud is enabled for your application.
 * 
 * This setting can be queried with ${function.steam_remote_storage_is_cloud_enabled_for_app}.
 * 
 * [[Note: This must only ever be called as the direct result of the user explicitly requesting that it's enabled or not. This is typically accomplished with a checkbox within your in-game options.]]
 *
 * @param {Bool} enabled Enable (`true`) or disable (`false`) the Steam Cloud for this application.
 * @function_end
 */

/**
 * @function steam_remote_storage_file_write
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWrite](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWrite)
 *
 * This function creates a new file, writes the bytes to the file, and then closes the file. If the target file already exists, it is overwritten.
 * 
 * [[Note: This is a synchronous call and as such is a will block your calling thread on the disk IO, and will also block the SteamAPI, which can cause other threads in your application to block. To avoid "hitching" due to a busy disk on the client machine using ${function.steam_remote_storage_file_write_async}, the asynchronous version of this API is recommended.]]
 *
 * @param {String} file_name The name of the file to write to.
 * @param {Buffer} data The buffer containing the bytes to write to the file.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The number of bytes to write, starting at the offset. Defaults to the buffer size minus the offset.
 * @returns {Bool}
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_async
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteAsync](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteAsync)
 * 
 * This function creates a new file and asynchronously writes the raw byte data to the Steam Cloud, and then closes the file. If the target file already exists, it is overwritten.
 * 
 * @param {String} file_name The name of the file to write to.
 * @param {Buffer} data The buffer holding the bytes to write to the file.
 * @param {Function} callback The callback function to call upon completion.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The number of bytes to write. Defaults to the buffer size minus the offset.
 * 
 * @event callback
 * @desc **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageFileWriteAsyncComplete_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageFileWriteAsyncComplete_t)
 * @member {Struct.SteamRemoteStorageFileWriteAsyncResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_file_read
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileRead](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileRead)
 *
 * This function opens a binary file, reads the contents of the file into a buffer, and then closes the file.
 *
 * @param {String} file_name The name of the file to read from.
 * @param {Buffer} out_data The buffer that the file will be read into. The size can be generally obtained from ${function.steam_remote_storage_get_file_size}.
 * @returns {Real} The number of bytes read, or 0 if the file doesn't exist or the read fails.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_delete
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileDelete](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileDelete)
 *
 * This function deletes a file from the local disk, and propagates that delete to the cloud.
 * 
 * This is meant to be used when a user actively deletes a file. Use ${function.steam_remote_storage_file_forget} if you want to remove a file from the Steam Cloud but retain it on the user's local disk.
 * 
 * When a file has been deleted it can be re-written with ${function.steam_remote_storage_file_write} to reupload it to the Steam Cloud.
 *
 * @param {String} file_name The name of the file that will be deleted.
 * @returns {Bool} `true` if the file exists and has been successfully deleted; otherwise, `false` if the file did not exist.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_exists
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileExists](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileExists)
 *
 * This function checks whether the specified file exists.
 *
 * @param {String} file_name The name of the file.
 * @returns {Bool} `true` if the file exists; otherwise, `false`.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_persisted
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FilePersisted](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FilePersisted)
 *
 * This function checks if a specific file is persisted in the Steam cloud.
 *
 * @param {String} file_name The name of the file.
 * @returns {Bool} `true` if the file exists and the file is persisted in the Steam Cloud, `false` if ${function.steam_remote_storage_file_forget} was called on it and is only available locally.
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_size
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileSize](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileSize)
 *
 * This function gets the specified file's size in bytes.
 *
 * @param {String} file_name The name of the file.
 * @returns {Real} The size of the file in bytes. Returns 0 if the file does not exist.
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_timestamp
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileTimestamp](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileTimestamp)
 *
 * This function gets the specified file's last modified timestamp in Unix epoch format (seconds since Jan 1st 1970).
 *
 * @param {String} file_name The name of the file.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_count
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileCount](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileCount)
 *
 * This function gets the total number of local files synchronized by Steam Cloud.
 * 
 * Used for enumeration with ${function.steam_remote_storage_get_file_name_and_size}.
 *
 * @returns {Real} The number of files present for the current user, including files in subfolders.
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_file_name_and_size
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetFileNameAndSize](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetFileNameAndSize)
 *
 * This function gets the file name and size of a file from the index.
 * 
 * [[Note: You must call ${function.steam_remote_storage_get_file_count} first to get the number of files.]]
 *
 * @param {Real} index The index of the file, this should be between 0 and the value returned by ${function.steam_remote_storage_get_file_count}.
 * @returns {Struct.SteamRemoteStorageFileNameAndSize} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_quota
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetQuota](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetQuota)
 *
 * This function gets the number of bytes available, and used on the user's Steam Cloud storage.
 *
 * @returns {Struct.SteamRemoteStorageQuota} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_set_sync_platforms
 * @description > **Steamworks Function**: [ISteamRemoteStorage::SetSyncPlatforms](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#SetSyncPlatforms)
 *
 * This function allows you to specify which operating systems a file will be synchronised to.
 * 
 * Use this if you have a multiplatform game but have data which is incompatible between platforms.
 * 
 * Files default to `SteamRemoteStoragePlatform.All` when they are first created. You can use the bitwise OR operator, `|` to specify multiple platforms.
 *
 * @param {String} file_name The name of the file.
 * @param {Enum.SteamRemoteStoragePlatform} platforms The platforms that the file will be synchronised to.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_sync_platforms
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetSyncPlatforms](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetSyncPlatforms)
 *
 * This function obtains the platforms that the specified file will synchronise to.
 *
 * @param {String} file_name The name of the file.
 * @returns {Enum.SteamRemoteStoragePlatform} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_forget
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileForget](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileForget)
 *
 * This function deletes the file from remote storage, but leaves it on the local disk and remains accessible from the API.
 * 
 * When you are out of Cloud space, this can be used to allow calls to ${function.steam_remote_storage_file_write} to keep working without needing to make the user delete files.
 * 
 * How you decide which files to forget are up to you. It could be a simple Least Recently Used (LRU) queue or something more complicated.
 * 
 * Requiring the user to manage their Cloud-ised files for a game, while is possible to do, it is never recommended. For instance, "Which file would you like to delete so that you may store this new one?" removes a significant advantage of using the Cloud in the first place: its transparency.
 * 
 * Once a file has been deleted or forgotten, calling ${function.steam_remote_storage_file_write} will resynchronise it in the Cloud. Rewriting a forgotten file is the only way to make it persisted again.
 *
 * @param {String} file_name The name of the file that will be forgotten.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_open
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamOpen](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamOpen)
 *
 * This function creates a new file output stream allowing you to stream out data to the Steam Cloud file in chunks. If the target file already exists, it is not overwritten until ${function.steam_remote_storage_file_write_stream_close} has been called.
 * 
 * To write data out to this stream you can use ${function.steam_remote_storage_file_write_stream_write_chunk}, and then to close or cancel you use ${function.steam_remote_storage_file_write_stream_close} and ${function.steam_remote_storage_file_write_stream_cancel} respectively.
 *
 * @param {String} file_name The name of the file to write to.
 * @returns {Real} The file write stream handle, or `STEAM_REMOTE_STORAGE_UGC_FILE_STREAM_HANDLE_INVALID` in case the stream couldn't be opened
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_write_chunk
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamWriteChunk](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamWriteChunk)
 *
 * This function writes a blob of data to the file write stream.
 *
 * @param {Real} stream The file write stream to write to.
 * @param {Buffer} data The buffer containing the data to write to the stream.
 * @param {Real} [buffer_offset] The offset into the buffer, in bytes. Defaults to 0.
 * @param {Real} [buffer_count] The number of bytes to write, starting at the offset. Defaults to the buffer size minus the offset.
 * @returns {Bool} `true` if the data was successfully written to the file write stream, `false` if not.
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_close
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamClose](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamClose)
 *
 * This function closes a file write stream that was started by ${function.steam_remote_storage_file_write_stream_open}.
 * 
 * This flushes the stream to the disk, overwriting the existing file if there was one.
 *
 * @param {Real} stream The file write stream to close.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_write_stream_cancel
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileWriteStreamCancel](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileWriteStreamCancel)
 *
 * This function cancels a file write stream that was started by ${function.steam_remote_storage_file_write_stream_open}.
 * 
 * This trashes all of the data written and closes the write stream, but if there was an existing file with this name, it remains untouched.
 *
 * @param {Real} stream The file write stream to cancel.
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_cached_ugc_count
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetCachedUGCCount](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetCachedUGCCount)
 *
 * This function returns the cached UGC count.
 *
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_cached_ugc_handle
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetCachedUGCHandle](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetCachedUGCHandle)
 *
 * This function gets a handle to the cached UGC with the given index.
 *
 * @param {Real} index The index of the cached UGC, between 0 and the cached UGC count.
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_get_ugc_details
 * @description > **Steamworks Function**: [ISteamRemoteStorage::GetUGCDetails](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#GetUGCDetails)
 *
 * This function gets the details of the UGC content referred to by the given handle.
 *
 * @param {Real} ugc_handle The handle of the UGC content to get the details for.
 * @returns {Struct.SteamRemoteStorageUgcDetails} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_ugc_read
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UGCRead](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UGCRead)
 *
 * This function reads the UGC content referred to by the given handle into a buffer.
 *
 * @param {Real} ugc_handle The handle of the UGC content to read.
 * @param {Buffer} out_data The buffer that the content will be read into.
 * @param {Real} offset The offset, in bytes, within the file at which to start reading.
 * @param {Enum.SteamRemoteStorageUgcReadAction} action The action to take when reading the content (controls how the file is held in memory after the read).
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function steam_remote_storage_file_share
 * @description > **Steamworks Function**: [ISteamRemoteStorage::FileShare](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#FileShare)
 *
 * This function shares the file with the given filename.
 *
 * @param {String} file_name The name of the file to share.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageFileShareResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageFileShareResult_t)
 *
 * This callback is fired in response to sharing a file, and provides a handle that can be used to refer to the shared file.
 *
 * @member {Struct.SteamRemoteStorageFileShareResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_ugc_download
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UGCDownload](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UGCDownload)
 *
 * This function downloads the UGC content referred to by the given handle.
 *
 * @param {Real} ugc_handle The handle of the UGC content to download.
 * @param {Real} priority The download priority, where a lower value indicates a higher priority.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageDownloadUGCResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageDownloadUGCResult_t)
 *
 * This callback is fired in response to a UGC download request, and contains the details of the file that was downloaded.
 *
 * @member {Struct.SteamRemoteStorageDownloadUgcResult} result The result of the operation.
 * @event_end
 * @function_end
 */

/**
 * @function steam_remote_storage_ugc_download_to_location
 * @description > **Steamworks Function**: [ISteamRemoteStorage::UGCDownloadToLocation](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#UGCDownloadToLocation)
 *
 * This function downloads the UGC content referred to by the given handle to the given location.
 *
 * @param {Real} ugc_handle The handle of the UGC content to download.
 * @param {String} location The absolute file path to download the content to.
 * @param {Real} priority The download priority, where a lower value indicates a higher priority.
 * @param {Function} callback The function to call upon completion.
 *
 * @event callback
 * @desc > **Steamworks Callback**: [ISteamRemoteStorage::RemoteStorageDownloadUGCResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageDownloadUGCResult_t)
 *
 * This callback is fired in response to a UGC download request, and contains the details of the file that was downloaded.
 *
 * @member {Struct.SteamRemoteStorageDownloadUgcResult} result The result of the operation.
 * @event_end
 * @function_end
 */

// STRUCTS

/**
 * @struct SteamRemoteStorageFileNameAndSize
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_remote_storage_get_file_name_and_size}.
 * 
 * @member {String} file_name The name of the file at the specified index, if it exists, or an empty string (`""`) if the file doesn't exist.
 * @member {Real} file_size The file size in bytes.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageQuota
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_remote_storage_get_quota}.
 * 
 * @member {Real} total_bytes The total amount of bytes the user has access to.
 * @member {Real} available_bytes The number of bytes available.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageUgcDetails
 * @description > **Steamworks Struct**: N / A
 *
 * This struct holds information returned by ${function.steam_remote_storage_get_ugc_details}.
 * 
 * @member {Real} ugc_handle The handle to the piece of user generated content.
 * @member {Real} app_id The app ID.
 * @member {Real} size_in_bytes The size of the file in bytes.
 * @member {String} file_name The file name.
 * @member {Real} steam_id_owner The Steam ID of the owner.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageFileShareResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageFileShareResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageFileShareResult_t)
 *
 * This struct holds the response to sharing a file, and provides a handle that can be used to refer to the shared file.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} ugc_handle The handle that can be shared with users and features.
 * @member {String} file_name The name of the file that was shared.
 * @struct_end
 */

/**
 * @struct SteamRemoteStorageFileWriteAsyncResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageFileWriteAsyncComplete_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageFileWriteAsyncComplete_t)
 * 
 * This struct holds the response when writing a file asynchronously with ${function.steam_remote_storage_file_write_async}.
 * 
 * @member {Enum.SteamApiResult} result If the local write was successful then this will be `SteamApiResult.OK` - any other value likely indicates that the filename is invalid or the available quota would have been exceeded by the requested write.
 * @struct_end 
 */

/**
 * @struct SteamRemoteStorageDownloadUgcResult
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStorageDownloadUGCResult_t](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStorageDownloadUGCResult_t)
 *
 * This struct holds the response to a UGC download request, and contains the details of the file that was downloaded.
 *
 * @member {Enum.SteamApiResult} result The result of the operation.
 * @member {Real} ugc_handle The handle of the file that was attempted to be downloaded.
 * @member {Real} app_id The app ID the file was shared from.
 * @member {Real} size_in_bytes The size of the file that was downloaded, in bytes.
 * @member {String} file_name The name of the file that was downloaded.
 * @member {Real} steam_id_owner The Steam ID of the user who created this content.
 * @struct_end
 */

/**
 * @struct SteamRemoteStoragePublishedFileSubscribed
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStoragePublishedFileSubscribed_t](partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileSubscribed_t)
 *
 * This struct holds information passed in a `RemoteStoragePublishedFileSubscribed_t` callback.
 *
 * @member {Real} app_id ID of the app that will consume this file.
 * @member {Real} published_file_id The published file ID.
 * @struct_end 
 */

/**
 * @struct SteamRemoteStoragePublishedFileUnsubscribed
 * @description > **Steamworks Struct**: [ISteamRemoteStorage::RemoteStoragePublishedFileUnsubscribed_t](partner.steamgames.com/doc/api/ISteamRemoteStorage#RemoteStoragePublishedFileUnsubscribed_t)
 *
 * This struct holds information passed in a `RemoteStoragePublishedFileUnsubscribed_t` callback.
 *
 * @member {Real} app_id ID of the app that will consume this file.
 * @member {Real} published_file_id The published file ID.
 * @struct_end 
 */

// CONSTANTS

/**
 * @enum SteamRemoteStoragePublishedFileVisibility
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::ERemoteStoragePublishedFileVisibility](partner.steamgames.com/doc/api/ISteamRemoteStorage#ERemoteStoragePublishedFileVisibility)
 *
 * This enum holds the possible visibility states that a Workshop item can be in.
 *
 * @member Public Visible to everyone.
 * @member FriendsOnly Visible to friends only.
 * @member Private Only visible to the creator. Setting an item to private is the closest that you can get to deleting a workshop item from the API.
 * @member Unlisted Visible to everyone, but will not be returned in any global queries. Will also not be returned in any user lists unless the caller is the creator or a subscriber.
 * @enum_end 
 */

/**
 * @enum SteamRemoteStoragePlatform
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::ERemoteStoragePlatform](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#ERemoteStoragePlatform)
 *
 * This enum holds the possible sync platform flags. These can be used with ${function.steam_remote_storage_set_sync_platforms} to restrict a file to a specific OS.
 *
 * @member None This file will not be downloaded on any platform.
 * @member Windows This file will download on Windows.
 * @member OSX This file will download on macOS.
 * @member PS3 This file will download on the Playstation 3.
 * @member Linux This file will download on SteamOS/Linux.
 * @member Reserved2 Reserved.
 * @member All This file will download on every platform. This is the default.
 * @enum_end 
 */

/**
 * @enum SteamRemoteStorageUgcReadAction
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::EUGCReadAction](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#EUGCReadAction)
 *
 * This enum holds the possible UGC Read Actions used with ${function.steam_remote_storage_ugc_read}.
 *
 * @member ContinueReadingUntilFinished Keeps the file handle open unless the last byte is read. You can use this when reading large files (over 100MB) in sequential chunks.
 * @member ContinueReading Keeps the file handle open. Use this when using ${function.steam_remote_storage_ugc_read} to seek to different parts of the file.
 * @member Close Frees the file handle.
 * @enum_end 
 */

/**
 * @enum SteamRemoteStorageWorkshopFileType
 * @description > **Steamworks Enum**: [ISteamRemoteStorage::EWorkshopFileType](partner.steamgames.com/doc/api/ISteamRemoteStorage#EWorkshopFileType)
 *
 * This enum holds members that represent the way that a shared file will be shared with the community.
 *
 * @member Community Normal Workshop item that can be subscribed to.
 * @member Microtransaction Workshop item that is meant to be voted on for the purpose of selling in-game. (See: [Curated Workshop](https://partner.steamgames.com/doc/features/workshop#curated_workshop))
 * @member Collection A collection of Workshop items.
 * @member Art Artwork.
 * @member Video External video.
 * @member Screenshot Screenshot.
 * @member Game Unused, used to be for Greenlight game entries.
 * @member Software Unused, used to be for Greenlight software entries.
 * @member Concept Unused, used to be for Greenlight concepts.
 * @member WebGuide Steam web guide.
 * @member IntegratedGuide Application integrated guide.
 * @member Merch Workshop merchandise meant to be voted on for the purpose of being sold.
 * @member ControllerBinding Steam Controller bindings.
 * @member SteamworksAccessInvite Only used internally in Steam.
 * @member SteamVideo Steam video.
 * @member GameManagedItem Managed completely by the game, not the user, and not shown on the web.
 * @enum_end 
 */

// MODULE

/**
 * @module remote_storage
 * @title Remote Storage
 * @desc > **Steamworks Interface**: [ISteamRemoteStorage](https://partner.steamgames.com/doc/api/ISteamRemoteStorage)
 * 
 * This module provides functions for reading, writing, and accessing files which can be stored remotely in the Steam Cloud.
 * 
 * See [Steam Cloud](https://partner.steamgames.com/doc/features/cloud) for more information.
 * 
 * @section_func Functions
 * @desc These are the functions of the Remote Storage module:
 * @ref steam_remote_storage_*
 * @section_end
 * 
 * @section_const Constants
 * @desc These are the constants and enums of the Remote Storage module:
 * @ref SteamRemoteStorage*
 * @section_end
 * 
 * @section_struct Structs
 * @desc These are the structs of the Remote Storage module:
 * @ref SteamRemoteStorage*
 * @section_end
 * @module_end
 */
