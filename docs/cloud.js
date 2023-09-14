@module Cloud
@desc The Steam Cloud provides an easy and transparent remote file storage system for your game. All files written to disk using the cloud functions will be replicated to the Steam servers after the game exits. If the user then changes computers, the files will then be downloaded to the new computer before the game launches, meaning that the game can then access the files by reading them using the appropriate Steam functions. The Steam Client does the work of ensuring that the files are kept synchronized across all computers the user may be accessing.

[[NOTE: NOTE By default, the Cloud is not enabled for a game on Steamworks. it must be enabled previously from the &#39;Cloud&#39; tab of the Steamworks game admin, where you should set the byte and file quota. The next time you publish your games Steamworks configuration, the Cloud storage will be ready to use.]]

The following functions can be used to access the Steam Cloud from within GameMaker Studio 2

* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}
* ${function.}


@module_end


@func steam_is_cloud_enabled_for_app
@desc With this function you can check to make sure that the Steam Cloud service is enabled for your game. It will return true if it is and false otherwise.

[[warning: IMPORTANT This does not automatically mean that you can use the Cloud functions as the user can switch off Cloud synchronization from their Steam Client. You can check this using the function ${function.}, but, even if it is disabled for the user (and enabled for the game), the functions will still work to store and retrieve data from a local copy of all files, it will just not upload them to the cloud on the game end, nor synchronize on the game start.]]

@returns {Bool}

```gml
if (steam_is_cloud_enabled_for_app())
{
    quota = steam_get_quota_total();
}
```
The above code checks to see if the steam cloud is enabled for the game and if so it gets the size of the storage quota and stores it in a variable.
@func_end


@func steam_is_cloud_enabled_for_account
@desc With this function you can check to make sure that the Steam Cloud service is enabled by the user in their Steam Client settings. It will return true if it is and false otherwise.

[[warning: IMPORTANT This does not automatically mean that you can store data to the Cloud, as it will also have to have been enabled for your game (you can check this using the function ${function.}). If the Steam Cloud is enabled for your game, but the user has it switched off locally, you can still use the Cloud functions to store and retrieve data from a local copy of all files, it will just not upload them to the cloud on the game end, nor synchronize on the game start.]]

@returns {Bool}

```gml
if (steam_is_cloud_enabled_for_account())
{
    steam_file_share("Save.txt");
}
```
The above code checks to see if the user has the Steam Cloud enabled and if it returns true, it will then synchronize the given file.



@func_end


@func steam_get_quota_total
@desc When using the Steam Cloud to store and synchronize files, you must set up the <i>quota</i> of space that your game will need. This quota is enforced on each Cloud-enabled game, on a per-user-per-game basis, so, for example, if the quota for Game X is 1 megabyte, then each Steam account that owns Game X may store, at most, 1 megabyte of data associated with that game in the Cloud. Any other Cloud-enabled games that the user owns (say, Game Y) will not be affected by the data stored by Game X. The default quota for new Steamworks games is one gigabyte, but you can change this from the Steamworks control panel for your game.

[[NOTE: NOTE Once the quota is exhausted file writes will fail. If you think it may be possible for the quota to be exhausted for the user of your game, you should create code to handle it, as by doing nothing you leave users in a situation where they are unable to fix things and that will lead to a poor experience of your game.]]

@returns {Real}

```gml
if (steam_is_cloud_enabled_for_app())
{
    quota = steam_get_quota_total();
}
```
The above code checks to see if the steam cloud is enabled for the game and if so it gets the size of the storage quota and stores it in a variable.
@func_end

@func steam_get_quota_free
@desc With this function you can find out how much free space is left for the user of the Steam Cloud quota. The value returned is in <i>bytes</i>.

@returns {Real}

```gml
if (steam_is_cloud_enabled_for_app())
{
    quota = steam_get_quota_free();
}
```
The above code checks to see if the steam cloud is enabled for the game and if so it gets the size of the free storage space and stores it in a variable.
@func_end


@func steam_file_exists
@desc With this function you can check to see if a file from the Steam Cloud exists or not, with a return value of true if it exists, or false otherwise.


@param {string} filename The name of the file to check for.

@returns {Bool}

```gml
if (steam_file_exists("Save.txt"))
{
    save_str = steam_file_read("Save.txt");
}
```
The above code checks to see if a file exists on the Steam Cloud and if it does, it opens it and reads its contents into the variable &quot;save_str&quot;.
@func_end


@func steam_file_size
@desc With this function you can check the size of a file stored on the Steam Cloud. The returned real number is the size, in bytes, of the file.

@param {string} filename The name of the file to check the size of.

@returns {Real}

```gml
file_bytes = steam_file_size("Save.txt");
```
The above code stores the size of a file from the Steam Cloud in the variable &quot;file_bytes&quot;.
@func_end


@func steam_file_persisted
@desc With this function you can check the given file to see if it has been synchronized with the Steam Cloud. A return value of true means that it is, while false means it is not.


@param {string} filename The name of the file to check.


@returns {Bool}

```gml
if (!steam_file_persisted("Save.txt"))
{
    steam_file_share("Save.txt");
}
```
The above code will check to see if a file has been stored to the Steam Cloud, and if it has not it will then synchronize it.



@func_end


@func steam_file_write
@desc You can use this function to write data to a file, which will then be synchronized with the Steam Cloud when the user exits the game. if the file does not exist, this function will create it for you, and if it does already exists, it will overwrite any data that is already stored within the file with the new data string. The function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.



@param {string} filename The name of the file to write to.
@param {string} data The data to write (a string).
@param {integer} size the size of the data to be written.


@returns {Real}

```gml
var fname = "SaveData.txt";
var data = string(global.Level) + "|" + string(global.Points) + "|" + string(global.HP);
var len = string_length(data);
steam_file_write_file(fname, data, len);
```
The above code will prepare a number of local variables and then use them to write to (or create) a file which will then be synchronized with the Steam Cloud.



@func_end


@func steam_file_write_file
@desc With this function you can copy the contents of a locally saved file to a file that is synchronized with the Steam Cloud. The local file <i>must exist</i> before using this function, and it will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.

@param {string} steam_filename The Steam Cloud file to copy over.
@param {string} local_filename The local file to use to copy from.

@returns {real}

```gml
steam_file_write_file("rm_koala.png", "Koala2.png");
```
The above code will copy the contents of the file &quot;Koala2.png&quot; to the Steam Cloud file &quot;rm_koala.png&quot;.
@func_end


@func steam_file_read
@desc This function will read the contents of the given file into a string which can later be parsed in your game.


@param {string} filename The name of the file to read from.


@returns {String}

```gml
if steam_file_exists("Save.txt")
{
    save_str = steam_file_read("Save.txt");
}
```
The above code checks to see if a file exists on the Steam Cloud and if it does, it opens it and reads its contents into the variable &quot;save_str&quot;.




@func_end


@func steam_file_share
@desc With this function you can force your game to synchronize the given file with the Steam Cloud. This is not normally necessary due to the fact that the game will synchronize automatically at the end of the player&#39;s session, nor is it recommended by Steam, but it can be useful to ensure sensitive information is synchronized immediately. The function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.


@param {string} filename The name of the file synchronize.


@returns {Real}

```gml
if (!steam_file_persisted("Save.txt"))
{
    steam_file_share("Save.txt");
}
```
The above code will check to see if a file has been stored to the Steam Cloud, and if it has not it will then synchronize it.



@func_end


@func steam_file_delete
@desc This function will delete the given file from the Steam Cloud. The function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.


@param {string} filename The name of the file delete.


@returns {Real}

```gml
if (steam_file_exists("Save.txt"))
{
    steam_file_delete("Save.txt");
}
```
The above code will check to see if a file exists, and if it does, it deletes the file from the Steam Cloud.


@func_end