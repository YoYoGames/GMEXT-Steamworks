// FUNCTIONS

/**
 * @func steam_is_cloud_enabled_for_app
 * @desc With this function you can check to make sure that the Steam Cloud service is enabled for your game. It will return `true` if it is and `false` otherwise.
 * 
 * [[WARNING: This does not automatically mean that you can use the Cloud functions as the user can switch off Cloud synchronization from their Steam Client. You can check this using the function ${function.steam_is_cloud_enabled_for_account}, but, even if it is disabled for the user (and enabled for the game), the functions will still work to store and retrieve data from a local copy of all files, it will just not upload them to the cloud on the game end, nor synchronize on the game start.]]
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (steam_is_cloud_enabled_for_app())
 * {
 *     quota = steam_get_quota_total();
 * }
 * ```
 * The above code checks to see if the Steam Cloud is enabled for the game and if so it gets the size of the storage quota and stores it in a variable.
 * @func_end
 */

/**
 * @func steam_is_cloud_enabled_for_account
 * @desc With this function you can check to make sure that the Steam Cloud service is enabled by the user in their Steam Client settings. It will return `true` if it is and `false` otherwise.
 * 
 * [[WARNING: This does not automatically mean that you can store data to the Cloud, as it will also have to have been enabled for your game (you can check this using the function ${function.steam_is_cloud_enabled_for_app}). If the Steam Cloud is enabled for your game, but the user has it switched off locally, you can still use the Cloud functions to store and retrieve data from a local copy of all files, it will just not upload them to the cloud on the game end, nor synchronize on the game start.]]
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (steam_is_cloud_enabled_for_account())
 * {
 *     steam_file_share("Save.txt");
 * }
 * ```
 * The above code checks to see if the user has the Steam Cloud enabled and if it returns `true`, it will then synchronize the given file.
 * @func_end
 */

/**
 * @func steam_get_quota_total
 * @desc When using the Steam Cloud to store and synchronize files, you must set up the *quota* of space that your game will need. This quota is enforced on each Cloud-enabled game, on a per-user-per-game basis, so, for example, if the quota for Game X is 1 megabyte, then each Steam account that owns Game X may store, at most, 1 megabyte of data associated with that game in the Cloud. Any other Cloud-enabled games that the user owns (say, Game Y) will not be affected by the data stored by Game X. The default quota for new Steamworks games is one gigabyte, but you can change this from the Steamworks control panel for your game.
 * 
 * [[NOTE: Once the quota is exhausted file writes will fail. If you think it may be possible for the quota to be exhausted for the user of your game, you should create code to handle it, as by doing nothing you leave users in a situation where they are unable to fix things and that will lead to a poor experience of your game.]]
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * if (steam_is_cloud_enabled_for_app())
 * {
 *     quota = steam_get_quota_total();
 * }
 * ```
 * The above code checks to see if the Steam Cloud is enabled for the game and if so it gets the size of the storage quota and stores it in a variable.
 * @func_end
 */

/**
 * @func steam_get_quota_free
 * @desc With this function you can find out how much free space is left for the user of the Steam Cloud quota. The value returned is in *bytes*.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * if (steam_is_cloud_enabled_for_app())
 * {
 *     quota = steam_get_quota_free();
 * }
 * ```
 * The above code checks to see if the Steam Cloud is enabled for the game and if so it gets the size of the free storage space and stores it in a variable.
 * @func_end
 * 
 * @func steam_file_exists
 * @desc With this function you can check to see if a file from the Steam Cloud exists or not, with a return value of `true` if it exists, or `false` otherwise.
 * 
 * @param {string} filename The name of the file to check for.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (steam_file_exists("Save.txt"))
 * {
 *     save_str = steam_file_read("Save.txt");
 * }
 * ```
 * The above code checks to see if a file exists on the Steam Cloud and if it does, it opens it and reads its contents into the variable "save_str".
 * @func_end
 */

/**
 * @func steam_file_size
 * @desc With this function you can check the size of a file stored on the Steam Cloud. The returned real number is the size, in bytes, of the file.
 * 
 * @param {string} filename The name of the file to check the size of.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * file_bytes = steam_file_size("Save.txt");
 * ```
 * The above code stores the size of a file from the Steam Cloud in the variable "file_bytes".
 * @func_end
 */

/**
 * @func steam_file_persisted
 * @desc With this function you can check the given file to see if it has been synchronized with the Steam Cloud. A return value of `true` means that it is, while `false` means it is not.
 * 
 * @param {string} filename The name of the file to check.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (!steam_file_persisted("Save.txt"))
 * {
 *     steam_file_share("Save.txt");
 * }
 * ```
 * The above code will check to see if a file has been stored to the Steam Cloud, and if it has not it will then synchronize it.
 * @func_end
 */

/**
 * @func steam_file_write
 * @desc You can use this function to write data to a file, which will then be synchronized with the Steam Cloud when the user exits the game. if the file does not exist, this function will create it for you, and if it does already exist, it will overwrite any data that is already stored within the file with the new data string. The function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.
 * 
 * @param {string} filename The name of the file to write to.
 * @param {string} data The data to write (a string).
 * @param {real} size the size of the data to be written.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * var _fname = "SaveData.txt";
 * var _data = string(global.Level) + "|" + string(global.Points) + "|" + string(global.HP);
 * var _len = string_length(_data);
 * steam_file_write_file(_fname, _data, _len);
 * ```
 * The above code will prepare a number of local variables and then use them to write to (or create) a file which will then be synchronized with the Steam Cloud.
 * @func_end
 */

/**
 * @func steam_file_write_file
 * @desc With this function you can copy the contents of a locally saved file to a file that is synchronized with the Steam Cloud. The local file *must exist* before using this function, and it will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.
 * 
 * @param {string} steam_filename The Steam Cloud file to copy over.
 * @param {string} local_filename The local file to use to copy from.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * steam_file_write_file("rm_koala.png", "Koala2.png");
 * ```
 * The above code will copy the contents of the file "Koala2.png" to the Steam Cloud file "rm_koala.png".
 * @func_end
 */

/**
 * @func steam_file_read
 * @desc This function will read the contents of the given file into a string which can later be parsed in your game.
 * 
 * @param {string} filename The name of the file to read from.
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * if steam_file_exists("Save.txt")
 * {
 *     save_str = steam_file_read("Save.txt");
 * }
 * ```
 * The above code checks to see if a file exists on the Steam Cloud and if it does, it opens it and reads its contents into the variable "save_str".
 * @func_end
 */

/**
 * @func steam_file_read_buffer
 * @desc This function will read the contents of the given file into a buffer. You can read contents into an existing buffer. Returns undefined on error and a buffer id on success.
 * 
 * [[WARNING: As this function deals with buffers, you are responsible for deallocating the buffer with buffer_delete when you no longer need it, as this function will not do it for you. You will get a hard to debug memory leak if you don't delete the buffers you no longer need.]]
 *
 * @param {string} filename The name of the file to read from.
 * @param {Id.Buffer} [bufferId] OPTIONAL: ID of the buffer to read into, or -1 to create a new one. You are responsible for calling buffer_delete in both cases.
 * @param {real} [offset] OPTIONAL: Offset at which to begin writing data into the buffer, if creating a new buffer this argument is ignored.
 * 
 * @returns {Id.Buffer|undefined}
 * 
 * @example
 * ```gml
 * var buff = steam_file_read_buffer("Save.bin");
 * if (!is_undefined(buff)) {
 *     buffer_seek(buff, buffer_seek_start, 0);
 *     var number = buffer_read(buff, buffer_s32);
 *     var str = buffer_read(buff, buffer_string);
 *     buffer_delete(buff);
 * }
 * ```
 * The above code reads the file "Save.bin" into a buffer and then deletes it.
 * @func_end
 */

/**
 * @func steam_file_write_buffer
 * @desc You can use this function to write data to a file, which will then be synchronized with the Steam Cloud when the user exits the game. if the file does not exist, this function will create it for you, and if it does already exist, it will overwrite any data that is already stored within the file with the new data. The function will return false if it fails for whatever reason and true if it succeeds.
 * 
 * [[WARNING: As this function deals with buffers, you are responsible for deallocating the buffer with buffer_delete when you no longer need it, as this function will not do it for you. You will get a hard to debug memory leak if you don't delete the buffers you no longer need.]]
 *
 * @param {string} filename The name of the file to write or create.
 * @param {Id.Buffer} bufferId ID of the buffer to read from, any seek positions are ignored and the buffer will be read in full.
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * var buff = buffer_create(1, buffer_grow, 1);
 * buffer_write(buff, buffer_string, "hampsterdance");
 * buffer_write(buff, buffer_f64, 420.69);
 * steam_file_write_buffer("Save.bin", buff);
 * buffer_delete(buff);
 * ```
 * The above code creates a buffer, writes some random data, saves the buffer into Steam Cloud and then deletes the buffer.
 * @func_end
 */

/**
 * @func steam_file_share
 * @desc With this function you can force your game to synchronize the given file with the Steam Cloud. This is not normally necessary due to the fact that the game will synchronize automatically at the end of the player's session, nor is it recommended by Steam, but it can be useful to ensure sensitive information is synchronized immediately. The function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.
 * 
 * @param {string} filename The name of the file synchronize.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * if (!steam_file_persisted("Save.txt"))
 * {
 *     steam_file_share("Save.txt");
 * }
 * ```
 * The above code will check to see if a file has been stored to the Steam Cloud, and if it has not it will then synchronize it.
 * @func_end
 */

/**
 * @func steam_file_delete
 * @desc This function will delete the given file from the Steam Cloud. The function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.
 * 
 * @param {string} filename The name of the file delete.
 * 
 * @returns {real}
 * 
 * @example
 * ```gml
 * if (steam_file_exists("Save.txt"))
 * {
 *     steam_file_delete("Save.txt");
 * }
 * ```
 * The above code will check to see if a file exists, and if it does, it deletes the file from the Steam Cloud.
 * @func_end
 */

/**
 * @func steam_get_local_file_change
 * @desc This function gets the changes in a local file.
 * 
 * @returns {struct.SteamLocalFileChange}
 * 
 * @func_end
 */

/**
 * @func steam_get_local_file_change_count
 * @desc This function gets the number of changes in a local file change event.
 * 
 * @returns {real}
 * 
 * @func_end
 */

/**
 * @func steam_file_get_list
 * @desc This function returns a list of all currently stored files in the user's cloud storage as an array, an empty array is returned on failure.
 * 
 * @returns {array[struct.SteamCloudFileEntry]}
 * 
 * @example
 * ```gml
 * var _i = 0;
 * var files = steam_file_get_list();
 * for (var i = 0, len = array_length(files); i < len; ++i)
 * {
 * 	var file = files[i];
 * 	draw_text(50, 100 + _i++ * 30, file.file_name + " size is " + string(file.file_size));
 * 	// steam_file_delete(file.file_name); // etc...
 * }
 * ```
 * The above code will enumerate through all cloud files and draw their information on the screen.
 * @func_end
 */

/**
 * @struct SteamLocalFileChange
 * @desc This struct provides details on what happened in a local file change.
 * @member {constant.steam_local_file_change} local_file_change The type of change that happened to the file
 * @member {constant.steam_local_file_path_type} file_path_type The type of file path
 * @member {string} name This is either a full path or an API filename.
 * @struct_end
 */

/**
 * @const steam_local_file_change
 * @member steam_local_file_change_invalid impossible value
 * @member steam_local_file_change_updated file's contents were updated
 * @member steam_local_file_change_deleted the file was deleted
 * @const_end
 */

/**
 * @const steam_local_file_path_type
 * @member steam_local_file_path_type_invalid An impossible value
 * @member steam_local_file_path_type_absolute The absolute path to a file inside the Auto Cloud folder (should be your save folder, which means it should be already in the filesystem sandbox). Use ${function.buffer_load} or any other function to read the file.
 * @member steam_local_file_path_type_api_filename A file for the steam_file_* functions. Pass `name` to the steam_file_* functions.
 * @const_end
 */

/**
 * @struct SteamCloudFileEntry
 * @desc This struct provides information about a file in a file list returned by the ${function.steam_file_get_list} function
 * @member {string} file_name The full name of the file
 * @member {real} file_size The size of the file in bytes
 * @struct_end
 */

/**
 * @module cloud
 * @title Cloud
 * @desc The Steam Cloud provides an easy and transparent remote file storage system for your game. All files written to disk using the cloud functions will be replicated to the Steam servers after the game exits. If the user then changes computers, the files will then be downloaded to the new computer before the game launches, meaning that the game can then access the files by reading them using the appropriate Steam functions. The Steam Client does the work of ensuring that the files are kept synchronized across all computers the user may be accessing.
 * 
 * [[NOTE: By default, the Cloud is not enabled for a game on Steamworks. it must be enabled previously from the 'Cloud' tab of the Steamworks game admin, where you should set the byte and file quota. The next time you publish your games Steamworks configuration, the Cloud storage will be ready to use.]]
 * 
 * @section_func Functions
 * @desc The following functions can be used to access the Steam Cloud from within GameMaker:
 * @ref steam_is_cloud_enabled_for_app
 * @ref steam_is_cloud_enabled_for_account
 * @ref steam_get_quota_total
 * @ref steam_get_quota_free
 * @ref steam_file_exists
 * @ref steam_file_size
 * @ref steam_file_persisted
 * @ref steam_file_write
 * @ref steam_file_write_file
 * @ref steam_file_read
 * @ref steam_file_read_buffer
 * @ref steam_file_write_buffer
 * @ref steam_file_share
 * @ref steam_file_delete
 * @ref steam_get_local_file_change
 * @ref steam_get_local_file_change_count
 * @ref steam_file_get_list
 * @section_end
 * 
 * @section_struct
 * @ref SteamLocalFileChange
 * @ref SteamCloudFileEntry
 * @section_end
 * 
 * @section_const
 * @ref steam_local_file_change
 * @ref steam_local_file_path_type
 * @section_end
 * 
 * @module_end
 */
