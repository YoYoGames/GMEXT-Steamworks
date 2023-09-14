@func Leaderboards
@desc The Steam API supports persistent leaderboards with automatically ordered entries. These leaderboards can be used to display global and friend leaderboards in your game and on the community web page for your game. Each game can have up to 10,000 leaderboards, and each leaderboard can be retrieved immediately after a player&#39;s score has been inserted into it, but note that for each leaderboard, a player can have only <i>one</i> entry, although there is no limit on the number of players per leaderboard.

## Functions

Each leaderboard entry contains a name, a score and a rank for the leaderboard, and this data will be replaced when a new leaderboard entry is created for the user, and the following functions can be used to add and retrieve this data form the leaderboards for your game:

- ${function.}
- ${function.}
- ${function.}
- ${function.}
- ${function.}
- ${function.}
- ${function.}
- ${function.}

## Data Types

The following data types are used by the leaderboard functions:

* ${function.}

## Constants

The following constants are used by the leaderboard functions:

* ${function.}
* ${function.}


@func_end


@func steam_create_leaderboard
@desc With this function you can create a new leaderboard for your game. The first argument is a string which defines the name of your leaderboard, and this name should be used in any further function calls relating to the leaderboard being created. You can then define the sort order (see ${function.} constants) as well as the way in which the information is displayed (see ${function.} constants).
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If you have previously created a leaderboard with the same name (either through code or through your Steam page for the game), then this function will not create a new one.



@param {string} lb_name The name of the leaderboard that you are creating
|sort_order|LeaderboardSortOrder constant|The method for sorting the leaderboard entries (see ${function.} constants)
|display_type|LeaderboardDisplayType constant|The way to display the leaderboard to the user (see ${function.} constants)

@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"create_leaderboard"`
@param {real} status The status code, `0` if the leaderboard was create and `1` if it already existed
@param {string} lb_name The name of the leaderboard


```gml
steam_create_leaderboard("Game Times", lb_sort_ascending, lb_disp_time_sec);
```
The above code will create a leaderboard called &quot;Game Times&quot;, and set it to display the results in ascending order and with a display in seconds.

@func_end

@func steam_upload_score
@desc This function will send a score to the given leaderboard. The score to be uploaded is a real number, and the leaderboard name is a string that was defined when you created the leaderboard using the function ${function.}. 
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If the function call fails for any reason it will return -1 and the Async event will not be triggered.



@param {string} lb_name The name of the leaderboard that you are uploading the scores to
@param {real} score The score to upload


@returns {Real}

@event steam
@param {real} post_id The asynchronous request ID
@param {string} event_type The string value `"leaderboard_upload"`
@param {string} lb_name The name of the leaderboard
@param {real} num_entries The number of returned entries
@param {bool} success Whether or not the request was successful
@param {bool} updated Whether or not the leaderboard was updated (ie: the new score was better)
@param {real} score The score that was posted to the leaderboard


@example
In this example, we first upload a score and then parse the `async_load` map returned if successful. The code below shows a typical example for uploading:

```gml
if (hp <= 0)
{
    upload_ID = steam_upload_score("Game Scores", score);
    if (!upload_ID)
    {
        alarm[0] = room_speed;
    }
}
```
Note that we have set an alarm if the call fails. This would be used to try the upload again at a later time and you can add extra code there to retry the upload or to save the score to a text file should it continue to fail, etc... We now add the following into the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) for the instance controlling the scores:

```gml
var type = ds_map_find_value(async_load, "event_type");
if (type == "leaderboard_upload")
{
    var lb_ID = ds_map_find_value(async_load, "post_id");
    if lb_ID == upload_ID
    {
        var lb_name = ds_map_find_value(async_load, "lb_name");
        var lb_done = ds_map_find_value(async_load, "success");
        var lb_score = ds_map_find_value(async_load, "score");
        var lb_updated = ds_map_find_value(async_load, "updated");
        show_debug_message("leaderboard post id:" + string(lb_ID) + " to lb:" + string(lb_name) + " with score:" + string(lb_score) + " updated=" + string(lb_updated));
        if (lb_done)
        {
            show_debug_message("- Succeeded");
        }
        else
        {
            show_debug_message("- Failed");
        }
    }
}
```
in the example we are simply outputting the return values to the compiler window as debug messages, but you can use this event to deal with the information in any way you choose.



@func_end


@func steam_upload_score_ext
@desc This function will send a score to the given leaderboard. It is similar to the function ${function.}but has an extra argument that will allow you to force the update of the score, as by default Steam only updates the score if it is better than the previous one.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If the function call fails for any reason it will return -1 and the Async event will not be triggered.

@param {string} lb_name The name of the leaderboard that you are uploading the scores to
@param {real} score The score to upload
@param {bool} force_update Whether or not the value should be replaced


@returns {Real}

@event steam
@param {real} post_id The asynchronous request ID
@param {string} event_type The string value `"leaderboard_upload"`
@param {string} lb_name The name of the leaderboard
@param {real} num_entries The number of returned entries
@param {bool} success Whether or not the request was successful
@param {bool} updated Whether or not the leaderboard was updated (ie: the new score was better or `forceUpdate` was set to `true`)
@param {real} score The score that was posted to the leaderboard


@example
In this example, we first upload a score and then parse the `async_load` map returned if successful. The code below shows a typical example for uploading:

```gml
if (hp <= 0)
{
    upload_ID = steam_upload_score_ext("Game Scores", score, true);
    if (!upload_ID)
    {
        alarm[0] = room_speed;
    }
}
```
Note that we have set an alarm if the call fails. This would be used to try the upload again at a later time and you can add extra code there to retry the upload or to save the score to a text file should it continue to fail, etc... We now add the following into the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm)  for the instance controlling the scores:

```gml
var type = ds_map_find_value(async_load, "event_type");
if (type == "leaderboard_upload")
{
    var lb_ID = ds_map_find_value(async_load, "post_id");
    if lb_ID == upload_ID
    {
        var lb_name = ds_map_find_value(async_load, "lb_name");
        var lb_done = ds_map_find_value(async_load, "success");
        var lb_score = ds_map_find_value(async_load, "score");
        var lb_updated = ds_map_find_value(async_load, "updated");
        show_debug_message("leaderboard post id:" + string(lb_ID) + " to lb:" + string(lb_name) + " with score:" + string(lb_score) + " updated=" + string(lb_updated));
        if (lb_done)
        {
            show_debug_message("- Succeeded");
        }
        else
        {
            show_debug_message("- Failed");
        }
    }
}
```
in the example we are simply outputting the return values to the compiler window as debug messages, but you can use this event to deal with the information in any way you choose.



@func_end


@func steam_upload_score_buffer
@desc This function will send a score to the given leaderboard along with a data package created from a buffer. The buffer should be no more than 256 bytes in size - anything beyond that will be chopped off - and can contain any data you require. The score to be uploaded should be a real number, and the leaderboard name is a string that was defined when you created the leaderboard using the function ${function.}.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If the function call fails for any reason it will return -1 and the Async event will not be triggered.



@param {string} lb_name The name of the leaderboard that you are uploading the scores to
@param {real} score The score to upload
@param {Id.Buffer} buffer The ID of the buffer to attach


@returns {Real}

@event steam
@param {real} post_id The asynchronous request ID
@param {string} event_type The string value `"leaderboard_upload"`
@param {string} lb_name The name of the leaderboard
@param {real} num_entries The number of returned entries
@param {bool} success Whether or not the request was successful
@param {bool} updated Whether or not the leaderboard was updated (ie: the new score was better). Note that if you score was not updated neither will be the data buffer.
@param {real} score The score that was posted to the leaderboard


@example
In this example, we first upload a score and then parse the `async_load` map returned if successful. The code below shows a typical example for uploading, with a buffer being created to hold a string telling us which level the score was uploaded from:

```gml
if (hp <= 0)
{
    var buff = buffer_create(256, buffer_fixed, 1 );
    buffer_write(buff, buffer_string, "Uploaded on level " + string(global.Level));
    upload_ID = steam_upload_score("Game Scores", score, buff);

    if (!upload_ID)
    {
        alarm[0] = room_speed;
    }

    buffer_delete(buff);
}

```
Note that we have set an alarm if the call fails. This would be used to try the upload again at a later time and you can add extra code there to retry the upload or to save the score to a text file should it continue to fail, etc... Also note that we immediately delete the buffer, since it is no longer required for the function. We now add the following into the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) for the instance controlling the scores:

```gml
var type = ds_map_find_value(async_load, "event_type");
if (type == "leaderboard_upload")
{
    var lb_ID = ds_map_find_value(async_load, "post_id");
    if lb_ID == upload_ID
    {
        var lb_name = ds_map_find_value(async_load, "lb_name");
        var lb_done = ds_map_find_value(async_load, "success");
        var lb_score = ds_map_find_value(async_load, "score");
        var lb_updated = ds_map_find_value(async_load, "updated");
        show_debug_message("leaderboard post id:" + string(lb_ID) + " to lb:" + string(lb_name) + " with score:" + string(lb_score) + " updated=" + string(lb_updated));
        if (lb_done)
        {
            show_debug_message("- Succeeded");
        }
        else
        {
            show_debug_message("- Failed");
        }
    }
}
```
In the example we are simply outputting the return values to the compiler window as debug messages, but you can use this event to deal with the information in any way you choose.

@func_end


@func steam_upload_score_buffer_ext
@desc This function will send a score to the given leaderboard along with a data package created from a buffer. The buffer should be no more than 256 bytes in size - anything beyond that will be chopped off - and can contain any data you require. This function is similar to ${function.} but has an extra argument that will allow you to force the update of the score, as by default Steam only updates the score if it is better than the previous one.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If the function call fails for any reason it will return -1 and the Async event will not be triggered.



@param {string} lb_name The name of the leaderboard that you are uploading the scores to
@param {real} score The score to upload
@param {Id.Buffer} buffer The ID of the buffer to attach
@param {bool} force_update Whether or not the value should be replaced


@returns {Real}

@event steam
@param {real} post_id The asynchronous request ID
@param {string} event_type The string value `"leaderboard_upload"`
@param {string} lb_name The name of the leaderboard
@param {real} num_entries The number of returned entries
@param {bool} success Whether or not the request was successful
@param {bool} updated Whether or not the leaderboard was updated (ie: the new score was better or `forceUpdate` was set to `true`). Note that if you score was not updated neither will be the data buffer.
@param {real} score The score that was posted to the leaderboard


@example
In this example, we first upload a score and then parse the `async_load` map returned if successful. The code below shows a typical example for uploading, with a buffer being created to hold a string telling us which level the score was uploaded from:

```gml
if (hp <= 0)
{
    var buff = buffer_create(256, buffer_fixed, 1 );
    buffer_write(buff, buffer_string, "Uploaded on level " + string(global.Level));
    upload_ID = steam_upload_score_buffer_ext("Game Scores", score, buff, true);

    if (!upload_ID)
    {
        alarm[0] = room_speed;
    }

    buffer_delete(buff);
}

```
Note that we have set an alarm if the call fails. This would be used to try the upload again at a later time and you can add extra code there to retry the upload or to save the score to a text file should it continue to fail, etc... Also note that we immediately delete the buffer, since it is no longer required for the function. We now add the following into the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) for the instance controlling the scores:

```gml
var type = ds_map_find_value(async_load, "event_type");
if (type == "leaderboard_upload")
{
    var lb_ID = ds_map_find_value(async_load, "post_id");
    if lb_ID == upload_ID
    {
        var lb_name = ds_map_find_value(async_load, "lb_name");
        var lb_done = ds_map_find_value(async_load, "success");
        var lb_score = ds_map_find_value(async_load, "score");
        var lb_updated = ds_map_find_value(async_load, "updated");
        show_debug_message("leaderboard post id:" + string(lb_ID) + " to lb:" + string(lb_name) + " with score:" + string(lb_score) + " updated=" + string(lb_updated));
        if (lb_done)
        {
            show_debug_message("- Succeeded");
        }
        else
        {
            show_debug_message("- Failed");
        }
    }
}
```
In the example we are simply outputting the return values to the compiler window as debug messages, but you can use this event to deal with the information in any way you choose.



@func_end


@func steam_download_scores
@desc This function is used retrieve a sequential range of leaderboard entries by leaderboard ranking. The `start_idx` and `end_idx` parameters control the requested range of ranks, for example, you can display the top 10 on a leaderboard for your game by setting the start value to 1 and the end value to 10. The leaderboard name is a string that was defined when you created the leaderboard using the function ${function.}.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If the function call fails for any reason it will return -1 and the async event will not be triggered.



@param {string} lb_name The name of the leaderboard that you are downloading the scores from
@param {integer} start_idx The start position within the leaderboard
@param {integer} end_idx The end position within the leaderboard


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"leaderboard_download"`
|status|int64|The status code if download fails
@param {string} lb_name The name of the leaderboard
@param {real} num_entries The number of returned entries
@param {string} entries A json formatted string with all the downloaded entries (see  ${function.} for details)


@example
In this extended example we will request the top ten ranking for the given leaderboard and parse its results in the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm). to start with we need to request the scores with the following code:

```gml
score_get = steam_download_scores("Game Scores", 1, 10);
```
This will send off a request to the Steam Server for the scores from the leaderboard &quot;Game Scores&quot;, storing the async id of the request in the variable &quot;score_get&quot;. this will then be handled in the Steam Async Event in the following way:

```gml
var async_id = ds_map_find_value(async_load, "id");
if async_id == score_get
{
    var entries = ds_map_find_value(async_load, "entries");
    var map = json_decode(entries);
    if ds_map_exists(map, "default")
    {
        ds_map_destroy(map);
        exit;
    }
    else
    {
        var list = ds_map_find_value(map, "entries");
        var len = ds_list_size(list);
        var entry;
        for(var i = 0; i < len; i++;)
        {
            entry = ds_list_find_value(list, i );
            steam_name[i] = ds_map_find_value(entry, "name");
            steam_score[i] = ds_map_find_value(entry, "score");
            steam_rank[i] = ds_map_find_value(entry, "rank");
            steam_data[i] = ds_map_find_value(entry, "data");
        }
    }
    ds_map_destroy(map)
}
```
What we do here is first check the &quot;id&quot; key of the special [async_load](https://manual-en.yoyogames.com/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.htm) DS map. If this value is the same as the value of the original call-back function (stored in the &quot;score_get&quot; variable) we then continue to process the data. The first thing we do is parse the `async_load` DS map for the key &quot;entries&quot; which will contain a JSON formatted string containing the leaderboard data. This JSON object is then decoded (see [json_decode](https://manual-en.yoyogames.com/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.htm)) as another [DS map](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm), and this new map id is stored in the variable &quot;map&quot;.
This map is checked for the key &quot;default&quot; and if that is found then the map is destroyed and the event is exited. If no &quot;default&quot; key is found, the code will then parse the map to extract the necessary information about the leaderboard, by first extracting a DS list from the &quot;entries&quot; key of the DS map, and then looping through each entry of the list to get <i>another</i> DS map with the name, score and rank of each entry. These values are then stored to arrays.
Once the loop has finished, the JSON [DS map](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm) is destroyed (which in turn destroys all the internal maps and lists). There is no need to destroy the [async_load](https://manual-en.yoyogames.com/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.htm) DS map as this is handled for you by GameMaker Studio 2.



@func_end


@func steam_download_scores_around_user
@desc This function is used to retrieve leaderboard entries relative the current users entry. The `range_start` parameter is the number of entries to retrieve <i>before</i> the current users entry, and the `range_end` parameter is the number of entries after the current user&#39;s entry, and the current user&#39;s entry is <i>always</i> included in the results. For example, if the current user is number 5 on a given leaderboard, then setting the start range to -2 and the end range to 2 will return 5 entries: 3 through 7. If there are not enough entries in the leaderboard before or after the user&#39;s entry, Steam will adjust the range start and end points trying to maintained the range size. For example, if the user is #1 on the leaderboard, start is set to -2, and end is set to 2, Steam will return the first 5 entries in the leaderboard.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If the function call fails for any reason it will return -1 and the async event will not be triggered.



@param {string} lb_name The name of the leaderboard that you are downloading the scores from
@param {integer} range_start The start position within the leaderboard
@param {integer} range_end The end position within the leaderboard


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"leaderboard_download"`
|status|int64|The status code if download fails
@param {string} lb_name The name of the leaderboard
@param {real} num_entries The number of returned entries
@param {string} entries A json formatted string with all the downloaded entries (see  ${function.} for details)


```gml
request_id = steam_download_scores_around_user("Game Scores", -4, 5);
```
This will send off a request to the Steam Server for a range of 10 scores from the leaderboard `&quot;Game Scores&quot;`, centered on the player and will store the async id of the request in the variable `request_id`. This will then be handled in the [Steam Async Event](E:\Source\YoYoExtensionDocumentation\The_Asset_Editors\Object_Properties\Async_Events\Steam.htm), as shown in the Extended Example for ${function.}.



@func_end


@func steam_download_friends_scores
@desc With this function you can retrieve <i>only</i> the scores on the leaderboard that belong to those people that are marked as &quot;friends&quot; in the Steam client. So, if your leaderboard has 200 entries, and 50 of them are your friends, this function will retrieve only those 50 results. The leaderboard name is a string that was defined when you created the leaderboard using the function ${function.}.
This is an asynchronous function that will trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.

[[NOTE: NOTE If the function call fails for any reason it will return -1 and the async event will not be triggered.


@param {string} lb_name The name of the leaderboard that you are downloading the scores from


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"leaderboard_download"`
|status|int64|The status code if download fails
@param {string} lb_name The name of the leaderboard
@param {real} num_entries The number of returned entries
@param {string} entries A json formatted string with all the downloaded entries (see  ${function.} for details)


```gml
request_id = steam_download_friends_scores("Game Scores");
```
This will send off a request to the Steam Server for the users friends scores from the given leaderboard and will store the async id of the request in the variable `request_id`. This will then be handled in the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm), as shown in the Extended Example for ${function.}.



@func_end


@func LeaderboardEntry
@desc A leaderboard entry is represented by a json formatted string that can be returned by the async callback event of the following functions:

* ${function.}
* ${function.}
* ${function.}

This string can be decoded into a [DS map](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm) (see [json_decode](https://manual-en.yoyogames.com/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.htm), needs to be destroyed afterwards) or into a [struct](https://manual-en.yoyogames.com/GameMaker_Language/GML_Overview/Structs.htm) (see [json_parse](https://manual-en.yoyogames.com/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_parse.htm), recommended) and will provide the following members.

@param {real} rank The rank of the entry on the specified leaderboard
@param {string} data The base64 encoded string with the data provided when uploading scores using the ${function.} or <br> ${function.} functions :eight_pointed_black_star: OPTIONAL
@param {real} score The score attributed to this entry
@param {string} name The display name of the player for this entry
|userID|int64|The unique user id of the player for this entry

[[NOTE: NOTE If ${function.} or ${function.} were used to upload the score, the decoded entry will now have a `&quot;data&quot;` key so you can retrieve the data of the uploaded buffer (see the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) extended code example for further details). This data will be base64 encoded and so you will need to use the function [buffer_base64_decode](https://manual-en.yoyogames.com/GameMaker_Language/GML_Reference/Buffers/buffer_base64_decode.htm) on the data before reading from the buffer.


@func_end


@func LeaderboardDisplayType
@desc These constants specify the display type of a leaderboard and should be used with the function ${function.}.

|Leaderboard Display Type Constant|Description
|----|----
|`lb_disp_none`|Show the leaderboard "as is".
|`lb_disp_numeric`|Show the leaderboard as a numeric display.
|`lb_disp_time_sec`|Show the leaderboard values as times, with the base value being seconds.
|`lb_disp_time_ms`|Show the leaderboard values as times, with the base value being milliseconds


@func_end


@func LeaderboardSortOrder
@desc These constants specify the sort order of a leaderboard and should be used with the function ${function.}.

|Leaderboard Sort Order Constant|Description
|----|----
|`lb_sort_none`|No sorting. The information will be displayed "as is".
|`lb_sort_ascending`|Sort the leaderboard in ascending order.
|`lb_sort_descending`|Sort the leaderboard in descending order.


@func_end