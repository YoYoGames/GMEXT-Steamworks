@func UGC
This section is for those users that have been given access to the Steam API for publishing your game to that platform and that want to use the possibilities that the Steam Workshop and Community gives you for adding and generating user content in your projects. The simplest form of user generated content is the ability for the user to take and share screenshots, which is facilitated using the following two functions:

* [steam_is_screenshot_requested](#steam_is_screenshot_requested)
* [steam_send_screenshot](#steam_send_screenshot)

Before using any of the built in functions for the Steam UGC ( **U** ser **G** enerated **C** ontent) API you need to have set up your game correctly from the Steam dashboard and you should have read through the required documentation found here:

* [Sharing User Generated Content](https://partner.steamgames.com/documentation/ugc#Tech)

> **:information_source: NOTE**
>
> You need to have your game accepted for the Steam online store and have access to the developer areas of the Steam API documentation.

All subscribed UGC items will be downloaded by the Steam client automatically, and you should have code in the [Steam Asynchronous Event](E:\Source\YoYoExtensionDocumentation\The_Asset_Editors\Object_Properties\Async_Events\Steam.htm) to catch this and store the ID of the UGC that has been downloaded for use in the other UGC functions.

> **:warning: IMPORTANT**
>
> Steam UGC IDs can be huge numbers This means that sometimes you may need to store these as a string rather than try and store them as a real value, especially if working with buffers or trying to write the value to a text file (since this will convert it to a simplified standard format like &quot;6.6624e+003&quot; which will cause issues being read back).

The normal workflow for getting UGC into your game would be as follows:

1. The user would subscribe to an item (either from your game using [steam_ugc_subscribe_item](#steam_ugc_subscribe_item) or from the client/browser). If done from the game you are able to &quot;listen&quot; to the callback from the Steam Async Event.
2. When you get a successful subscription callback this means that your game is now downloading the UGC. You would then check if the item is installed (ie: download completed) with [steam_ugc_get_item_install_info](#steam_ugc_get_item_install_info).
3. If the item is not completely installed, you can use [steam_ugc_get_item_update_info](#steam_ugc_get_item_update_info) to track the download progress.

The following sections explain all the functions required to get UGC functioning in GameMaker Studio 2:

## Creating And Editing Content

The following functions are essentially &quot;wrapper&quot; functions for those supplied in the Steam API for creating and uploading content to their servers. As such, we recommend that you read over the linked Steam documentation before using them to gain a greater understanding of how they work: [Creating And Uploading Content](https://partner.steamgames.com/documentation/ugc#CreateUploadContent).

* [steam_ugc_create_item](#steam_ugc_create_item)
* [steam_ugc_delete_item](#steam_ugc_delete_item)
* [steam_ugc_start_item_update](#steam_ugc_start_item_update)
* [steam_ugc_set_item_title](#steam_ugc_set_item_title)
* [steam_ugc_set_item_description](#steam_ugc_set_item_description)
* [steam_ugc_set_item_visibility](#steam_ugc_set_item_visibility)
* [steam_ugc_set_item_tags](#steam_ugc_set_item_tags)
* [steam_ugc_set_item_content](#steam_ugc_set_item_content)
* [steam_ugc_set_item_preview](#steam_ugc_set_item_preview)
* [steam_ugc_submit_item_update](#steam_ugc_submit_item_update)
* [steam_ugc_get_item_update_progress](#steam_ugc_get_item_update_progress)

## Consuming Content

Once your user content has been created and the workshop has it available for download, people can subscribe to it through the Steam App or through the Web portal. However GameMaker Studio 2 also includes the following functions to use the Steam API for creating and canceling subscriptions as well as for getting information about what the user is subscribed to currently:

* [steam_ugc_subscribe_item](#steam_ugc_subscribe_item)
* [steam_ugc_unsubscribe_item](#steam_ugc_unsubscribe_item)
* [steam_ugc_num_subscribed_items](#steam_ugc_num_subscribed_items)
* [steam_ugc_get_subscribed_items](#steam_ugc_get_subscribed_items)
* [steam_ugc_get_item_install_info](#steam_ugc_get_item_install_info)
* [steam_ugc_get_item_update_info](#steam_ugc_get_item_update_info)
* [steam_ugc_request_item_details](#steam_ugc_request_item_details)

## Querying Content

There are also a large number of functions available to query the Steam API about the UGC items available:

- [steam\_is\_screenshot\_requested](#steam_is_screenshot_requested)
- [steam\_send\_screenshot](#steam_send_screenshot)
- [steam\_ugc\_create\_item](#steam_ugc_create_item)
- [steam\_ugc\_delete\_item](#steam_ugc_delete_item)
- [steam\_ugc\_start\_item\_update](#steam_ugc_start_item_update)
- [steam\_ugc\_set\_item\_title](#steam_ugc_set_item_title)
- [steam\_ugc\_set\_item\_description](#steam_ugc_set_item_description)
- [steam\_ugc\_set\_item\_visibility](#steam_ugc_set_item_visibility)
- [steam\_ugc\_set\_item\_tags](#steam_ugc_set_item_tags)
- [steam\_ugc\_set\_item\_content](#steam_ugc_set_item_content)
- [steam\_ugc\_set\_item\_preview](#steam_ugc_set_item_preview)
- [steam\_ugc\_submit\_item\_update](#steam_ugc_submit_item_update)
- [steam\_ugc\_get\_item\_update\_progress](#steam_ugc_get_item_update_progress)
- [steam\_ugc\_subscribe\_item](#steam_ugc_subscribe_item)
- [steam\_ugc\_unsubscribe\_item](#steam_ugc_unsubscribe_item)
- [steam\_ugc\_num\_subscribed\_items](#steam_ugc_num_subscribed_items)
- [steam\_ugc\_get\_subscribed\_items](#steam_ugc_get_subscribed_items)
- [steam\_ugc\_get\_item\_install\_info](#steam_ugc_get_item_install_info)
- [steam\_ugc\_get\_item\_update\_info](#steam_ugc_get_item_update_info)
- [steam\_ugc\_request\_item\_details](#steam_ugc_request_item_details)
- [steam\_ugc\_create\_query\_user](#steam_ugc_create_query_user)
- [steam\_ugc\_create\_query\_user\_ex](#steam_ugc_create_query_user_ex)
- [steam\_ugc\_create\_query\_all](#steam_ugc_create_query_all)
- [steam\_ugc\_create\_query\_all\_ex](#steam_ugc_create_query_all_ex)
- [steam\_ugc\_query\_set\_cloud\_filename\_filter](#steam_ugc_query_set_cloud_filename_filter)
- [steam\_ugc\_query\_set\_match\_any\_tag](#steam_ugc_query_set_match_any_tag)
- [steam\_ugc\_query\_set\_search\_text](#steam_ugc_query_set_search_text)
- [steam\_ugc\_query\_set\_ranked\_by\_trend\_days](#steam_ugc_query_set_ranked_by_trend_days)
- [steam\_ugc\_query\_add\_required\_tag](#steam_ugc_query_add_required_tag)
- [steam\_ugc\_query\_add\_excluded\_tag](#steam_ugc_query_add_excluded_tag)
- [steam\_ugc\_query\_set\_return\_long\_description](#steam_ugc_query_set_return_long_description)
- [steam\_ugc\_query\_set\_return\_total\_only](#steam_ugc_query_set_return_total_only)
- [steam\_ugc\_query\_set\_allow\_cached\_response](#steam_ugc_query_set_allow_cached_response)
- [steam\_ugc\_send\_query](#steam_ugc_send_query)
- [steam\_ugc\_download](#steam_ugc_download)

## Constants

This section also provides a set of constants to be used along side the functions provided above:

* [UGCFileType](#UGCFileType)
* [UGCFileVisibility](#UGCFileVisibility)
* [UGCListSortOrder](#UGCListSortOrder)
* [UGCListType](#UGCListType)
* [UGCMatchType](#UGCMatchType)
* [UGCQueryType](#ugcquerytype-sorting--filtering)

  <!-- KEYWORDS
Steam UGC
-->

@func_end


@func steam_is_screenshot_requested
This function will poll the Steam API to see if the key for taking a screenshot of the game has been pressed. The function will only return `true` for one step (game tick) when the key is pressed, and will return`false` at all other times.
Please note that if the screenshot key is pressed, this function will only return `true` once for each step that it is pressed, and return `false` for any subsequent calls *within the same step* . For example, if a screenshot is requested in the current frame and you call this function in the Step event to find that out, you will get `true`; however, if you call it again in Draw GUI to check whether a screenshot was requested, you will get `false` as the function had already been &quot;used up&quot; in the Step event. To use the function&#39;s return value multiple times within the same frame, it is recommended to store it in a variable and read that instead of calling the function again.

> **:information_source: NOTE**
>
> This function does not take a screenshot for you. This only signals that the key has been pressed and you must use the GameMaker Studio 2 functions [screen_save](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Cameras_And_Display/screen_save.htm) or [screen_save_part](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Cameras_And_Display/screen_save_part.htm) to save a local copy of the file to be uploaded.



@returns {Bool}

```gml
if steam_is_screenshot_requested()
{
    var file = "Catch_The_Haggis_" + string(global.scrn_num) + ".png");
    screen_save(file)
    steam_send_screenshot(file, window_get_width(), window_get_height());
    global.scrn_num += 1;
}
```
The above code will poll the Steam API for a screenshot request and if it has been, a unique name for the image file will be generated, a screenshot will be taken, and the file will be sent to the Steam Community page for the user.



@func_end


@func steam_send_screenshot
With this function you can upload a screenshot to the Steam Community profile page of the currently logged in user. The filename you supply is the name of the local file that was created when you took the screenshot using the GameMaker Studio 2 functions [screen_save](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Cameras_And_Display/screen_save.htm) or [screen_save_part.](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Cameras_And_Display/screen_save_part.htm) The width and height define the image size, and the function will return a value of 0 if it fails for whatever reason and a value greater than 0 if it succeeds.


**Syntax:**

```gml
steam_send_screenshot(filename, width, height);
```

@param {string} filename The name of the image file to upload.
@param {real} width The width of the image.
@param {real} height The height of the image.


@returns {Real}

```gml
if steam_is_screenshot_requested()
{
    var file = "Catch_The_Haggis_" + string(global.scrn_num) + ".png");
    screen_save(file)
    steam_send_screenshot(file, window_get_width(), window_get_height());
    global.scrn_num += 1;
}
```
The above code will poll the Steam API for a screenshot request and if it has been, a unique name for the image file will be generated, a screenshot will be taken, and the file will be sent to the Steam Community page for the user.



@func_end


@func steam_ugc_create_item
This function is used to prepare the Workshop API and generate a published file ID for the item to be added. The function <i>must</i> be called before doing anything else with the item to be uploaded, as you will be required to use the unique published ID value that it returns in the Steam Async Event for updating.
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


**Syntax:**

```gml
steam_ugc_create_item(consumer_app_id, file_type);
```

@param {integer} consumer_app_id The unique App ID for your game on Steam.
@param {constant.UGCFileType} file_type One of the available file type constants (see [UGCFileType](#UGCFileType) constants).


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_create_item"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
@param {bool} legal_agreement_required Will be `true` or `false` (see the [Steam docs](https://partner.steamgames.com/documentation/ugc#Legal) for more details)
|published_file_id|int64|This key holds the unique published ID for the item (you may need to cast it using the [int64()](E:\Source\YoYoExtensionDocumentation\YoYoExtensionDocumentation_RoboHelp\contents\Variable_Functions\int64.htm) function)


@example
In this example we first call the function and store the async ID value in a variable:

```gml
var app_id = steam_get_app_id();
new_item = steam_ugc_create_item(app_id, ugc_filetype_community);
```
This would then send off a request to the Steam API to create the new Workshop item, generating an async event which we would deal with as follows:

```gml
var event_id = async_load[? "id"];
if event_id == new_item
{
    var type = async_load[? "event_type"];
    if type == "ugc_create_item"
    {
        global.Publish_ID = async_load[? "published_file_id"];
    }
}
```
The above code checks the event type and if it is &quot;ugc_create_item&quot; then it retrieves the published file ID and stores it in a global variable for future reference.

  <!-- KEYWORDS
steam_ugc_create_item
ugc_filetype_community
ugc_filetype_microtrans
-->

@func_end


@func steam_ugc_delete_item
This function attempts to delete a previously published UGC item.
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


@param {real} ugc_query_handle The query handle to use.


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_item_delete"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)


```gml
steam_ugc_delete_item(ugc_query_handle);
```
The above code creates a deletion request for `ugc_query_handle`.


@func_end


@func steam_ugc_start_item_update
This function must be called before adding or updating information on a UGC item. You need to supply the unique App ID for your game on Steam, along with the unique published file ID that was returned for the item when you created it using the function [steam_ugc_create_item](#steam_ugc_create_item). The function will return a unique update handle for the item, which you can then use in the UGC item functions to update (or add) information for uploading.


**Syntax:**

```gml
steam_ugc_start_item_update(consumer_app_id, published_file_id);
```

@param {real} consumer_app_id The unique App ID for your game on Steam.
|published_file_id|int64|The unique published file ID value for the item.


@returns {Real}

```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, tagArray);
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.



@func_end


@func steam_ugc_set_item_title
This function will set the title to be used for the given item.
The function will return `true` if the API was successfully accessed and `false` if there was an issue.


**Syntax:**

```gml
steam_ugc_set_item_title(ugc_update_handle, title);
```

@param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from [steam_ugc_start_item_update](#steam_ugc_start_item_update))
@param {string} title The title (max 128 characters) to be used for the item.


@returns {Bool}

```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, tagArray);
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.



@func_end


@func steam_ugc_set_item_description
This function will set the description to be used for the given item.
The function will return `true` if the API was successfully accessed and `false` if there was an issue.


**Syntax:**

```gml
steam_ugc_set_item_description(ugc_update_handle, description);
```

@param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from [steam_ugc_start_item_update](#steam_ugc_start_item_update))
@param {string} description The description (max 8000 characters) to be used for the item.


@returns {Bool}

```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, tagArray);
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.



@func_end


@func steam_ugc_set_item_visibility
This function will set the visibility of the given item, using one of the [UGCFileVisibility](#UGCFileVisibility) constants.
The function will return `true` if the API was successfully accessed and `false` if there was an issue.


**Syntax:**

```gml
steam_ugc_set_item_visibility(ugc_update_handle, visibility);
```

@param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from [steam_ugc_start_item_update](#steam_ugc_start_item_update))
@param {constant.UGCFileVisibility} visibility The visibility to be used for the item (see [UGCFileVisibility](#UGCFileVisibility) constant)


@returns {Bool}

```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, tagArray);
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.

  <!-- KEYWORDS
steam_ugc_set_item_visibility
ugc_visibility_public
ugc_visibility_friends_only
ugc_visibility_private
-->

@func_end


@func steam_ugc_set_item_tags
This function will set the tags to be used for the given item. The tags should be added to a 1D array as string elements and the array passed to the function.
The function will return `true` if the API was successfully accessed and `false` if there was an issue.


**Syntax:**

```gml
steam_ugc_set_item_tags(ugc_update_handle, tags);
```

@param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from [steam_ugc_start_item_update](#steam_ugc_start_item_update))
@param {string} tags The tags (as an string json array) to be used for the item.


@returns {Bool}

```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, string(tagArray));
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.



@func_end


@func steam_ugc_set_item_content
This function will set the content path to be used for the given item, and it should be a relative path to the folder which contains the content files to upload - which in turn should be in the save are <i>or</i> the game bundle (ie: an included file).
The function will return `true` if the API was successfully accessed and `false` if there was an issue.


**Syntax:**

```gml
steam_ugc_set_item_content(ugc_update_handle, content);
```

@param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from [steam_ugc_start_item_update](#steam_ugc_start_item_update))
@param {string} content The content path to be used for the item


@returns {Bool}

```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, tagArray);
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.



@func_end


@func steam_ugc_set_item_preview
This function will set the preview image to be used for the given item. The image should be supplied as either a PNG, JPG or GIF format file with a maximum size of 1MB. The path to the image should be a relative path in the save are <i>or</i> the game bundle (ie: an included file).
The function will return `true` if the API was successfully accessed and `false` if there was an issue.


**Syntax:**

```gml
steam_ugc_set_item_preview(ugc_update_handle, preview);
```

@param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from [steam_ugc_start_item_update](#steam_ugc_start_item_update))
@param {string} preview The preview image (JPG, GIF or PNG - max size 1MB) to be used for the item.


@returns {Bool}

```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, tagArray);
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.



@func_end


@func steam_ugc_submit_item_update
This function will submit the UGC item indexed by the given handle to the Steam Workshop servers, adding the change notes to be used for the given item.
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


**Syntax:**

```gml
steam_ugc_submit_item_update(ugc_update_handle, change_note);
```

@param {real} ugc_update_handle The unique handle for the UGC to be updated (returned from [steam_ugc_start_item_update](#steam_ugc_start_item_update))
@param {string} change_note The change notes to be used for the item.


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_update_item"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
@param {bool} legal_agreement_required Will be `true` or `false` (see the [Steam docs](https://partner.steamgames.com/documentation/ugc#Legal) for more details)


```gml
var app_id = steam_get_app_id();
var updateHandle = steam_ugc_start_item_update(app_id, global.Publish_ID);
steam_ugc_set_item_title(updateHandle, "My workshop item(3)!");
steam_ugc_set_item_description( updateHandle, "testing workshop...");
steam_ugc_set_item_visibility(updateHandle, ugc_visibility_public);
var tagArray;
tagArray[0] = "Test";
tagArray[1] = "New";
steam_ugc_set_item_tags(updateHandle, tagArray);
steam_ugc_set_item_preview(updateHandle, "promo.jpg");
steam_ugc_set_item_content(updateHandle, "WorkshopContent1");
requestId = steam_ugc_submit_item_update(updateHandle, "Version 1.2");
```
The above code gets the game ID, then uses that along with a previously stored published file ID to generate an update handle for the item. This handle is then used to update various pieces of information before the update is pushed to the Workshop servers.



@func_end<!--<div class="body-scroll" style="top: 150px;">-->


@func steam_ugc_get_item_update_progress
    This function can be used to track the update status for an item. You give the item handle (as returned by the function [steam_ugc_start_item_update](#steam_ugc_start_item_update)) and an empty [DS map](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm) which will then be populated with the update information (see table below)
    If there is an error the function will return `false` and the map will be empty, otherwise the function returns `true`.


**Syntax:**

```gml
steam_ugc_get_item_update_progress(ugc_update_handle, info_map);
```

@param {integer} ugc_update_handle The unique handle for the UGC to be updated.
|info_map|DS Map ID|A (previously created) [DS map](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm) index.

@param {real} status_code The Steam status code
@param {string} status_string A string for the current status
@param {real} bytes_processed The bytes processed so far
@param {real} bytes_total The total number of bytes in the update


@returns {Bool}

```gml
var uploadMap = ds_map_create();

steam_ugc_get_item_update_progress(global.itemHandle, uploadMap);

var statusCode = uploadMap[? "status_code"];

var status = uploadMap[? "status_string"];

var processed = uploadMap[? "bytes_processed"];

var total = uploadMap[? "bytes_total"];

draw_text(32, 0, "Upload info for item:" + string(global.itemHandle));

draw_text(32, 15, "status code:" + string(statusCode));

draw_text(32, 30, "status:" + string(status));

draw_text(32, 45, "bytes processed:" +string(processed));

draw_text(32, 60, "bytes total:" + string( total));

ds_map_destroy(uploadMap);
```
    The above code will query the upload status of the item indexed in the global variable &quot;itemHandle&quot;, using a `DS Map` to store the information. This is then parsed and the resulting values drawn to the screen.

@func_end


@func steam_ugc_subscribe_item
This function can be used to subscribe to a UGC item.
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


|published_file_id|int64|The unique file ID for the UGC to subscribe to.


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_subscribe_item"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
|published_file_id|int64|This key holds the unique published ID for the item (you may need to cast it using the [int64](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Variable_Functions/int64.htm) function, before passing it to subsequent functions)


```gml
steam_sub = steam_ugc_subscribe_item(global.pubFileID);
```
The above code will subscribe (and download) the item with the file ID stored in the global variable &quot;pubFileID&quot;.



@func_end


@func steam_ugc_unsubscribe_item
This function can be used to unsubscribe from a UGC item.
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


|published_file_id|int64|The unique file ID for the UGC to unsubscribe from.


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_unsubscribe_item"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
|published_file_id|int64|This key holds the unique published ID for the item (you may need to cast it using the [int64](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Variable_Functions/int64.htm) function)


```gml
steam_sub = steam_ugc_unsubscribe_item(global.pubFileID);
```
The above code will unsubscribe (and remove) the item with the file ID stored in the global variable &quot;pubFileID&quot;.



@func_end


@func steam_ugc_num_subscribed_items
This function can be used to get the number of items that the current user has subscribed to.



@returns {Real}

```gml
numSub = steam_ugc_num_subscribed_items();
```
The above code will store the number of subscribed items in a variable.




@func_end<!--<div class="body-scroll" style="top: 150px;">-->


@func steam_ugc_get_subscribed_items
    This function will populate a DS list with all the published file IDs for the items that the user is currently subscribed to. You must first create the list and store the index in a variable, then pass this to the function.
    The function will return ```true` if everything is correct and the Steam API is initialized, or `false` if there is an error.


|item_list|DS List ID|A (previously created) [DS list](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/DS_Lists.htm) index.


@returns {Bool}

```gml
steam_list = ds_list_create();

steam_ugc_get_subscribed_items(steam_list);
```
    The above code will create an empty DS list and then populate it with the file IDs for all subscribed items for the user.

@func_end<!--<div class="body-scroll" style="top: 150px;">-->


@func steam_ugc_get_item_install_info
    This function can be used to retrieve information about any given published file item that has been subscribed to and downloaded to the Steam local storage area for your game. You give the item ID and supply the index to an empty [DS map](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm) which will then be populated with the install information (see table below).
    If the item exists (ie.: as been subscribed and download was complete) then the function will return `true` and populate the map, otherwise it will return `false` and the map will remain empty.


**Syntax:**

```gml
steam_ugc_get_item_install_info(published_file_id, info_map);
```

|published_file_id|int64|The unique handle for the UGC to be updated.
|info_map|DS Map ID|A (previously created) DS map index.

@param {real} size_on_disk The file size on disk (in bytes)
@param {bool} legacy_item Will be `true` or `false` depending on whether it is a legacy file or not
@param {string} folder This is the full path to the installed content ( please refer to "Item Installation" in Steam SDK docs, as "legacy" items uploaded with the old method, are treated differently)


@returns {Bool}

```gml
var item_map = ds_map_create();

steam_ugc_get_item_install_info(global.fileID, item_map);
```
    The above code will query the install status of the item indexed in the global variable &quot;fileID&quot;, using a `DS Map` to store the information.

@func_end<!--<div class="body-scroll" style="top: 150px;">-->


@func steam_ugc_get_item_update_info
    This function can be used to retrieve information about the current download state for the given file ID. You give the item ID and supply the index to an empty [DS map](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm) which will then be populated with the update information (see table below).
    If the item exists then the function will return `true` and populate the map, otherwise it will return `false` and the map will remain empty.


**Syntax:**

```gml
steam_ugc_get_item_update_info(published_file_id, info_map);
```

|published_file_id|int64|The unique file ID for the UGC to be checked.
|info_map|DS Map ID|A (previously created) DS map index.

@param {bool} needs_update Whether the item needs an update or not
@param {bool} is_downloading Whether the item is currently downloading or not
@param {real} bytes_downloaded The number of bytes that has been downloaded
@param {real} bytes_total The total size (number of bytes) required for the item on disk


@returns {Bool}

```gml
var info_map = ds_map_create();

var info = steam_ugc_get_item_update_info(global.fileID, info_map);

if info

  {

draw_text(32, 15, "needs_update: " + string(info_map[? "needs_update"]));

draw_text(32, 30, "is_downloading: " + string(info_map[? "is_downloading"]));

draw_text(32, 45, "bytes_downloaded: " + string(info_map[? "bytes_downloaded"]));

draw_text(32, 60, "bytes_total: " + string(info_map[? "bytes_total"]));

  }
```
    The above code will query the download status of the item indexed in the global variable &quot;fileID&quot;, using a `DS Map` to store the information.

@func_end


@func steam_ugc_request_item_details
This function can be used to retrieve information about a given file ID. You give the file ID and supply a maximum age for checking (see the Steam docs for more information).
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


**Syntax:**

```gml
steam_ugc_request_item_details(published_file_id, max_age_seconds);
```

@param {real} published_file_id The unique file ID for the UGC to be checked.
@param {real} max_age_seconds The age of the data to check (recommended 30 - 60 seconds).


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_item_details"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
@param {bool} cached_data Will be `true` if the returned details are from the local cache or `false` if they are taken from the server
|published_file_id|int64|This key holds the unique published ID for the item (you may need to cast it using the [int64](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Variable_Functions/int64.htm) function)
@param {string} file_type The type of file used
@param {real} creator_app_id The Steam ID of the item creator
@param {real} consumer_app_id The Steam ID of the item consumer
@param {string} title The title of the item
@param {string} description The description of the item
@param {real} steam_id_owner The Steam ID of the item owner
@param {real} time_created The time the item was first created
@param {real} time_uploaded The last time the item was updated
@param {real} time_added_to_user_list The time that the item was subscribed to
@param {constant.UGCFileVisibility} visibility The visibility of the item (see [UGCFileVisibility](#UGCFileVisibility) constant)
@param {bool} banned Whether the item has been banned or not
@param {bool} accepted_for_use Whether the item has been accepted for use or not
@param {array} tags_truncated Short version of the tags as an array
|tags|Array\<String>|An array of the tags for the item
|handle_file|int64|The unique file handle for the item
|handle_preview_file|int64|The unique handle for the image preview for the item (can be used with [steam_ugc_download](#steam_ugc_download) to download a preview image)
@param {string} filename The name of the item file
@param {real} file_size The size of the item file
@param {real} preview_file_size The size of the preview image
@param {string} url The full URL for the item
@param {real} up_votes The number of up-votes received
@param {real} down_votes The number of down-votes received
@param {real} score The overall score of the item
@param {real} account_id_owner The account ID from the Steam ID owner (this can be used in function [steam_ugc_create_query_user_ex](#steam_ugc_create_query_user_ex))


@example
In this example we send off a details request for an item and then parse the resulting `async_load` DS map to set some variables. First we send of the request:

```gml
steam_details = steam_ugc_request_item_details(global.fileID, 60);
```
The above code will request details on the item with the file ID stored in the global variable and will trigger a Steam Async event with the returned information. In this event we can then parse the map and store some of the values in variables which can then be used to display the information to the user:

```gml
var map_id = async_load[? "id"];
var result = async_load[? "result"];
if (map_id == steam_details) && (result == ugc_result_success)
{
    mTitle = async_load[? "title"];
    mDesc = async_load[? "description"];
    mTags = async_load[? "tags"];
    m_hPreviewFile = async_load[? "handle_preview_file"];
    m_hOwnerSteamId = async_load[? "steam_id_owner"];
    mOwnerAccountId = async_load[? "account_id_owner"];
    mPubFileId = async_load[? "published_file_id"];
    mScore = async_load[? "score"];
}
```



@func_end


@func steam_ugc_create_query_user
This function can be used to query the UGC data base. The function automatically uses the default ID for the app, user and assumes that the query is being done by the consumer (rather than the creator). The function requires you to use the following constants for the type of data to query ([UGCListType](#UGCListType)), the type of item to match ([UGCMatchType](#UGCMatchType)) and the order in which the returned items will be sorted ([UGCListSortOrder](#UGCListSortOrder)), as well as a page number - note that a query will return a <i>maximum</i> number of 50 items.
The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function [steam_ugc_send_query](#steam_ugc_send_query) - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.


**Syntax:**

```gml
steam_ugc_create_query_user(list_type, match_type, sort_order, page);
```

@param {constant.UGCListType} list_type The type of data list to create (see [UGCListType](#UGCListType) constants)
@param {constant.UGCMatchType} match_type The type of UGC items to query (see [UGCMatchType](#UGCMatchType) constants)
@param {constant.UGCListSortOrder} sort_order The way that data should be ordered (see [UGCListSortOrder](#UGCListSortOrder) constants)
@param {real} page The page number to query.


@returns {Real}

```gml
query_handle = steam_ugc_create_query_user(ugc_list_Published, ugc_match_Items, ugc_sortorder_TitleAsc, 1);
```
The above code creates a query request and stores it&#39;s handle in a variable for future use.

  <!-- KEYWORDS
steam_ugc_create_query_user
ugc_list_Published
ugc_list_VotedOn
ugc_list_VotedUp
ugc_list_VotedDown
ugc_list_WillVoteLater
ugc_list_Favorited
ugc_list_Subscribed
ugc_list_UsedOrPlayed
ugc_list_Followed
ugc_match_Items
ugc_match_Items_Mtx
ugc_match_Items_ReadyToUse
ugc_match_Collections
ugc_match_Artwork
ugc_match_Videos
ugc_match_Screenshots
ugc_match_AllGuides
ugc_match_WebGuides
ugc_match_IntegratedGuides
ugc_match_UsableInGame
ugc_match_ControllerBindings
ugc_sortorder_CreationOrderDesc
ugc_sortorder_CreationOrderAsc
ugc_sortorder_TitleAsc
ugc_sortorder_LastUpdatedDesc
ugc_sortorder_SubscriptionDateDesc
ugc_sortorder_VoteScoreDesc
ugc_sortorder_ForModeration
-->

@func_end


@func steam_ugc_create_query_user_ex
This function can be used to query the UGC data base. The function requires the ID value for the user and the ID of the game that is going to consume the item and/or the ID of the game that created the item. You also need to use the following constants for the type of data to query ([UGCListType](#UGCListType)), the type of item to query ([UGCMatchType](#UGCMatchType)) and the order in which the returned items will be sorted ([UGCListSortOrder](#UGCListSortOrder)), as well as a page number - note that a query will return a <i>maximum</i> number of 50 items.
The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function [steam_ugc_send_query](#steam_ugc_send_query) - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.


**Syntax:**

```gml
steam_ugc_create_query_user_ex(list_type, match_type, sort_order, page, account_id, creator_app_id, consumer_app_id);
```

@param {constant.UGCListType} list_type The type of data list to create (see [UGCListType](#UGCListType) constants)
@param {constant.UGCMatchType} match_type The type of UGC items to query (see [UGCMatchType](#UGCMatchType) constants)
@param {constant.UGCListSortOrder} sort_order The way that data should be ordered (see [UGCListSortOrder](#UGCListSortOrder) constants)
@param {real} page The page number to query
@param {real} account_id The Steam account ID
@param {real} creator_app_id The item creator app ID
@param {real} consumer_app_id The consumer app ID


@returns {Real}

```gml
query_handle = steam_ugc_create_query_user_ex(ugc_list_Published, ugc_match_Items, ugc_sortorder_TitleAsc, page, global.AccountID, 0, global.GameID);
```
The above code creates a query request and stores it&#39;s handle in a variable for future use.

  <!-- KEYWORDS
steam_ugc_create_query_user_ex
ugc_list_Published
ugc_list_VotedOn
ugc_list_VotedUp
ugc_list_VotedDown
ugc_list_WillVoteLater
ugc_list_Favorited
ugc_list_Subscribed
ugc_list_UsedOrPlayed
ugc_list_Followed
ugc_match_Items
ugc_match_Items_Mtx
ugc_match_Items_ReadyToUse
ugc_match_Collections
ugc_match_Artwork
ugc_match_Videos
ugc_match_Screenshots
ugc_match_AllGuides
ugc_match_WebGuides
ugc_match_IntegratedGuides
ugc_match_UsableInGame
ugc_match_ControllerBindings
ugc_sortorder_CreationOrderDesc
ugc_sortorder_CreationOrderAsc
ugc_sortorder_TitleAsc
ugc_sortorder_LastUpdatedDesc
ugc_sortorder_SubscriptionDateDesc
ugc_sortorder_VoteScoreDesc
ugc_sortorder_ForModeration
-->

@func_end


@func steam_ugc_create_query_all
This function can be used to query the UGC data base using some predefined query types. The function requires the following constants for the type of query to create ([UGCQueryType](#UGCQueryType)), the type of item to match ([UGCMatchType](#UGCMatchType)) and the page number to query - note that a query will return a <i>maximum</i> number of 50 items.
The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function [steam_ugc_send_query](#steam_ugc_send_query) - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.


**Syntax:**

```gml
steam_ugc_create_query_all(query_type, match_type, page);
```

@param {constant.UGCQueryType} query_type The type of query to create (see [UGCQueryType](#UGCQueryType) constants)
@param {constant.UGCMatchType} match_type The type of UGC items to query (see [UGCMatchType](#UGCMatchType) constants)
@param {real} page The page number to query


@returns {Real}

```gml
query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
```
The above code creates a general query request and stores it&#39;s handle in a variable for future use.

  <!-- KEYWORDS
steam_ugc_create_query_all
ugc_query_RankedByVote
ugc_query_RankedByPublicationDate
ugc_query_AcceptedForGameRankedByAcceptanceDate
ugc_query_RankedByTrend
ugc_query_FavoritedByFriendsRankedByPublicationDate
ugc_query_CreatedByFriendsRankedByPublicationDate
ugc_query_RankedByNumTimesReported
ugc_query_CreatedByFollowedUsersRankedByPublicationDate
ugc_query_NotYetRated
ugc_query_RankedByTotalVotesAsc
ugc_query_RankedByVotesUp
ugc_query_RankedByTextSearch
ugc_match_Items
ugc_match_Items_Mtx
ugc_match_Items_ReadyToUse
ugc_match_Collections
ugc_match_Artwork
ugc_match_Videos
ugc_match_Screenshots
ugc_match_AllGuides
ugc_match_WebGuides
ugc_match_IntegratedGuides
ugc_match_UsableInGame
ugc_match_ControllerBindings
-->

@func_end


@func steam_ugc_create_query_all_ex
This function can be used to query the UGC data base. The function requires the ID of the game that is going to consume the item and/or the ID of the game that created the item, and you need to use the following constants for the type of query to create ([UGCQueryType](#UGCQueryType)), the type of item to match ([UGCMatchType](#UGCMatchType)) and the page number to query. Note that a query will return a <i>maximum</i> number of 50 items.
The function returns a unique query handle value which should be stored in a variable for use in the other query functions. Note that this function only prepares the query but does not actually send it - for that you must call the function [steam_ugc_send_query](#steam_ugc_send_query) - and you can use further `steam_ugc_query_*()` functions to refine the search request before it is actually sent.


**Syntax:**

```gml
steam_ugc_create_query_all_ex(query_type, match_type, page, creator_app_id, consumer_app_id);
```

@param {constant.UGCQueryType} query_type The type of query to create (see [UGCQueryType](#UGCQueryType) constants)
@param {constant.UGCMatchType} match_type The type of UGC items to query (see  [UGCMatchType](#UGCMatchType) constants)
@param {real} page The page number to query
@param {integer} creator_app_id The item creator app ID
@param {integer} consumer_app_id The consumer app ID


@returns {Real}

```gml
query_handle = steam_ugc_create_query_all_ex(ugc_query_RankedByVote, page, global.AccountID, 0, global.GameID);
```
The above code creates a query request and stores it&#39;s handle in a variable for future use.

  <!-- KEYWORDS
steam_ugc_create_query_all_ex
ugc_query_RankedByVote
ugc_query_RankedByPublicationDate
ugc_query_AcceptedForGameRankedByAcceptanceDate
ugc_query_RankedByTrend
ugc_query_FavoritedByFriendsRankedByPublicationDate
ugc_query_CreatedByFriendsRankedByPublicationDate
ugc_query_RankedByNumTimesReported
ugc_query_CreatedByFollowedUsersRankedByPublicationDate
ugc_query_NotYetRated
ugc_query_RankedByTotalVotesAsc
ugc_query_RankedByVotesUp
ugc_query_RankedByTextSearch
ugc_match_Items
ugc_match_Items_Mtx
ugc_match_Items_ReadyToUse
ugc_match_Collections
ugc_match_Artwork
ugc_match_Videos
ugc_match_Screenshots
ugc_match_AllGuides
ugc_match_WebGuides
ugc_match_IntegratedGuides
ugc_match_UsableInGame
ugc_match_ControllerBindings
-->

@func_end


@func steam_ugc_query_set_cloud_filename_filter
This function can be used to further filter any given UGC query, specifically to check and see if a Workshop item file name must match or not. The query handle is the value returned when you created the query (using, for example, [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is either `true` or`false`` `depending on whether you require the file names to match.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_set_cloud_filename_filter(ugc_query_handle, should_match);
```

@param {integer} ugc_query_handle The query handle to use.
@param {bool} match_cloud_filename Sets whether the UGC item file name should match or not.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
steam_ugc_query_set_cloud_filename_filter(query_handle, true);
steam_ugc_query_add_excluded_tag(query_handle, "nasty chips");
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_set_match_any_tag
This function can be used to further filter any given UGC query, specifically to switch on or off tag matching. The query handle is the value returned when you created the query (using, for example, [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is either `true` or`false```depending on whether you require a check for matching tags.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_set_match_any_tag(ugc_query_handle, match_any_tag);
```

@param {integer} ugc_query_handle The query handle to use.
@param {bool} match_any_tag Sets whether the UGC item tags should match anything or not.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
steam_ugc_query_set_match_any_tag(query_handle, false);
steam_ugc_query_add_excluded_tag(query_handle, "walking simulator");
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_set_search_text
This function can be used to further filter any given UGC query, specifically to search for the given string in the title and description of the UGC items. The query handle is the value returned when you created the query (using, for example,  [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is a string you want to use as the search term.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_set_search_text(ugc_query_handle , search_text);
```

@param {real} ugc_query_handle The query handle to use.
@param {string} search_text The search text to use for the query.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
steam_ugc_query_set_search_text(query_handle, "texture");
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_set_ranked_by_trend_days
This function can be used to further filter any UGC query made using the `ugc_query_RankedByTrend` constant ([UGCQueryType](#UGCQueryType)), specifically to search over a number of days. The query handle is the value returned when you created the query (using, for example, [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is the number of days over which you want the query to run.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_set_ranked_by_trend_days(ugc_query_handle, days);
```

@param {real} ugc_query_handle The query handle to use.
@param {real} days The number of days to query.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);
steam_ugc_query_set_ranked_by_trend_days(query_handle, 5);
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_add_required_tag
This function can be used to further filter any given UGC query, specifically to search only those UGC items with the given tag. The query handle is the value returned when you created the query (using, for example, [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is a string you want to use as the tag to include.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_add_required_tag(ugc_query_handle, tag_name);
```

@param {integer} ugc_query_handle The query handle to use.
@param {string} tag_name The tag name to include.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);
steam_ugc_query_add_required_tag(query_handle, "RPG");
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_add_excluded_tag
This function can be used to further filter any given UGC query, specifically to exclude a given UGC from the query request. The query handle is the value returned when you created the query (using, for example, [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is a string you want to use as the tag to exclude.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_add_excluded_tag(ugc_query_handle, tag_name);
```

@param {integer} ugc_query_handle The query handle to use.
@param {string} tag_name The tag name to exclude.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
steam_ugc_query_add_excluded_tag(query_handle, "walking simulator");
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_set_return_long_description
This function can be used to further filter any given UGC query, specifically to retrieve the long description text in the call back event triggered when the query was sent. The query handle is the value returned when you created the query (using, for example,  [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is either `true` or`false```.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_set_return_long_description(ugc_query_handle, should_return);
```

@param {real} ugc_query_handle The query handle to use.
@param {bool} long_description Whether to have the query return the long description text.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_set_return_total_only
This function can be used to further filter any given UGC query, specifically to request only the number of results without any other information (meaning that the DS map generated by the send function will contain the key &quot;num_results&quot; without any further map data). The query handle is the value returned when you created the query (using, for example,  [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is either `true` or`false```.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_set_return_total_only(ugc_query_handle , total_only);
```

@param {real} ugc_query_handle The query handle to use.
@param {bool} total_only Whether to have the query return only the total number of hits or not.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByVote, ugc_match_Items, 1);
steam_ugc_query_set_return_total_only(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end


@func steam_ugc_query_set_allow_cached_response
This function can be used to further filter any given UGC query, specifically to request that the query check the local cache rather than online. The query handle is the value returned when you created the query (using, for example, [steam_ugc_create_query_user](#steam_ugc_create_query_user)) and the second argument is either `true` or`false`````.
The function will return `true` if the query filter was correctly set, or `false` otherwise.


**Syntax:**

```gml
steam_ugc_query_set_allow_cached_response(ugc_query_handle , check_cache);
```

@param {integer} ugc_query_handle The query handle to use.
@param {bool} cache Whether to have the query check the local cache or not.


@returns {Bool}

```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);
steam_ugc_query_add_required_tag(query_handle, "RPG");
steam_ugc_query_set_return_long_description(query_handle, true);
steam_ugc_query_set_allow_cached_response(query_handle, true);
query_ID = steam_ugc_send_query(query_handle);
```
The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.



@func_end<!--<div class="body-scroll" style="top: 150px;">-->


@func steam_ugc_send_query
    This function can be used to send a query request. You first define the query using one of the following function:

* [steam_ugc_create_query_all](#steam_ugc_create_query_all)
* [steam_ugc_create_query_all_ex](#steam_ugc_create_query_all_ex)
* [steam_ugc_create_query_user](#steam_ugc_create_query_user)
* [steam_ugc_create_query_user_ex](#steam_ugc_create_query_user_ex)

    which will return a query handle. This handle is then used to set filters etc.... before being used in this function to send off the query request.
    This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


@param {real} ugc_query_handle The query handle to send.


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_query"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api#EResult), for more details)
@param {bool} cached_data Will be `true` if the returned details are from the local cache or `false` if they are taken from the server
@param {real} total_matching The total number of matching results
@param {real} num_results The number of results returned (max 50)
|results_list|DS List ID|A [DS list](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/DS_Lists.htm) index, where each list entry is a DS Map index containing details of the particular item (see table below)

|published_file_id|int64|This key holds the unique published ID for the item (you may need to cast it using the [int64](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Variable_Functions/int64.htm) function)
@param {string} file_type The type of file used
@param {real} creator_app_id The Steam ID of the item creator
@param {real} consumer_app_id The Steam ID of the item consumer
@param {string} title The title of the item
@param {string} description The description of the item
@param {real} steam_id_owner The Steam ID of the item owner
@param {real} time_created The time the item was first created
@param {real} time_uploaded The last time the item was updated
@param {real} time_added_to_user_list The time that the item was subscribed to
@param {constant.UGCFileVisibility} visibility The visibility of the item (see [UGCFileVisibility](#UGCFileVisibility) constant)
@param {bool} banned Whether the item has been banned or not
@param {bool} accepted_for_use Whether the item has been accepted for use or not
@param {array} tags_truncated Short version of the tags as an array
|tags|Array\<String>|An array of the tags for the item
|handle_file|int64|The unique file handle for the item
|handle_preview_file|int64|The unique handle for the image preview for the item (can be used  with [steam_ugc_download](#steam_ugc_download) to download a preview image)
@param {string} filename The name of the item file
@param {real} file_size The size of the item file
@param {real} preview_file_size The size of the preview image
@param {string} url The full URL for the item
@param {real} up_votes The number of up-votes received
@param {real} down_votes The number of down-votes received
@param {real} score The overall score of the item
@param {real} account_id_owner The account ID from the Steam ID owner (can be used in the function  [steam_ugc_create_query_user](#steam_ugc_create_query_user))


```gml
var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);

steam_ugc_query_add_required_tag(query_handle, "RPG");

steam_ugc_query_set_return_long_description(query_handle, true);

steam_ugc_query_set_allow_cached_response(query_handle, true);

query_ID = steam_ugc_send_query(query_handle);
```
    The above code creates a query request and stores it&#39;s handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.

@func_end


@func steam_ugc_download
With this function you can download a preview image for any given UGC item. The `ugc_handle` is the unique identifying value for the image (which you can get using the function [steam_ugc_send_query](#steam_ugc_send_query)), and the destination filename is the name (and local path within the Steam sandbox) that you wish to give the image file when the download is complete.
This is an asynchronous function that will return an asynchronous id and trigger the [Steam Async Event](https://manual-en.yoyogames.com/The_Asset_Editors/Object_Properties/Async_Events/Steam.htm) when the task is finished.


**Syntax:**

```gml
steam_ugc_download(ugc_handle, dest_filename);
```

|ugc_handle|int64|The unique handle for the preview to be downloaded.
@param {string} dest_filename The file name to save the preview with.


@returns {Real}

@event steam
@param {real} id The asynchronous request ID
@param {string} event_type The string value `"ugc_create_item"`
@param {real} result This will either be the GML constant `ugc_result_success` or some other real number (see the[Steam docs](https://partner.steamgames.com/doc/api/steam_api) under **EResult** , for more details)
@param {string} original_filename This key holds the original name of the image file <i>on the server</i> (a string)
@param {string} dest_filename This key holds the image file name you passed in (a string)
@param {integer} ugc_handle 


@example
In this example we first call the function and store the async ID value in a variable:

```gml
steam_get = steam_ugc_download(steam_handle, "\UGC\Preview_file.png");
```
This would then send off a file request to the Steam API, generating an async event which we would deal with as follows:

```gml
var event_id = async_load[? "id"];
if event_id == steam_get
{
    var type = async_load[? "event_type"];
    if type == "ugc_download"
    {
        sprite_delete(preview_sprite);
        preview_sprite = sprite_add(async_load[? "dest_filename"], 0, false, false, 0, 0);
    }
}
```
The above code checks the event type and then creates a sprite from the downloaded image.



@func_end


@func UGCFileType
These constants specify the way that a shared file will be shared with the community and should be used while creating a new item with [steam_ugc_create_item](#steam_ugc_create_item).

> **:information_source: NOTE**
>
> See [Steam Docs](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#EWorkshopFileType) for more details.

|UGC File Type Constant|Description
|----|----
|`ugc_filetype_community`|This is used to create files that will be uploaded and made available to anyone in the community
|`ugc_filetype_microtrans`|This is used to describe files that are uploaded but intended only for the game to consider adding as official content


@func_end


@func UGCFileVisibility
These constants specify possible visibility states that a Workshop item can be in. They are used with the function [steam_ugc_set_item_visibility](#steam_ugc_set_item_visibility) and are an async callback parameter for the functions [steam_ugc_request_item_details](#steam_ugc_request_item_details) and [steam_ugc_send_query](#steam_ugc_send_query).

> **:information_source: NOTE**
>
> See [Steam Docs](https://partner.steamgames.com/doc/api/ISteamRemoteStorage#ERemoteStoragePublishedFileVisibility) for more details.

|UGC File Visibility Constant|Description
|----|----
|`ugc_visibility_public`|Set the item to be publicly visible
|`ugc_visibility_friends_only`|Set the item to be visible to only people on the users friends list
|`ugc_visibility_private`|Set the item to be private


@func_end


@func UGCListSortOrder
These constants specify the sorting order of user published UGC lists from queries created using one of the following functions:

* [steam_ugc_create_query_user](#steam_ugc_create_query_user)
* [steam_ugc_create_query_user_ex](#steam_ugc_create_query_user_ex)

> **:information_source: NOTE**
>
> See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUserUGCListSortOrder) for more details.

|UGC List Sort Order Constant|Description
|----|----
|`ugc_sortorder_CreationOrderDesc`|Returns items by creation date. Descending - the newest items are first
|`ugc_sortorder_CreationOrderAsc`|Returns items by creation date. Ascending - the oldest items are first
|`ugc_sortorder_TitleAsc`|Returns items by name
|`ugc_sortorder_LastUpdatedDesc`|Returns the most recently updated items first
|`ugc_sortorder_SubscriptionDateDesc`|Returns the most recently subscribed items first
|`ugc_sortorder_VoteScoreDesc`|Returns the items with the more recent score updates first
|`ugc_sortorder_ForModeration`|Returns the items that have been reported for moderation


@func_end


@func UGCListType
These constants specify the type of published UGC list to obtain from queries created using one of the following functions:

* [steam_ugc_create_query_user](#steam_ugc_create_query_user)
* [steam_ugc_create_query_user_ex](#steam_ugc_create_query_user_ex) 

> **:information_source: NOTE**
>
> See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUserUGCList) for more details.

|UGC List Type Constant|Description
|----|----
|`ugc_list_Published`|List of files the user has published
|`ugc_list_VotedOn`|List of files the user has voted on. Includes both VotedUp and VotedDown
|`ugc_list_VotedUp`|List of files the user has voted up (restricted to the current user only)
|`ugc_list_VotedDown`|List of files the user has voted down (restricted to the current user only)
|`ugc_list_WillVoteLater`|:warning: DEPRECATED
|`ugc_list_Favorited`|List of files the user has favorited
|`ugc_list_Subscribed`|List of files the user has subscribed to (restricted to the current user only)
|`ugc_list_UsedOrPlayed`|List of files the user has spent time in game with
|`ugc_list_Followed`|List of files the user is following updates for


@func_end


@func UGCMatchType
These constants specify the types of UGC to obtain from queries created using one of the following function:

* [steam_ugc_create_query_all](#steam_ugc_create_query_all)
* [steam_ugc_create_query_all_ex](#steam_ugc_create_query_all_ex)
* [steam_ugc_create_query_user](#steam_ugc_create_query_user)
* [steam_ugc_create_query_user_ex](#steam_ugc_create_query_user_ex)

> **:information_source: NOTE**
>
> See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUGCMatchingUGCType) for more details.

|UGC Match Type Constant|Description
|----|----
|`ugc_match_Items`|Both microtransaction items and Ready-to-use items
|`ugc_match_Items_Mtx`|Microtransaction items
|`ugc_match_Items_ReadyToUse`|Regular in game items that players have uploaded
|`ugc_match_Collections`|Shared collections of UGC
|`ugc_match_Artwork`|Artwork which has been shared
|`ugc_match_Videos`|Videos which have been shared
|`ugc_match_Screenshots`|Screenshots which have been shared
|`ugc_match_AllGuides`|Both web guides and integrated guides
|`ugc_match_WebGuides`|Guides that are only available on the steam community
|`ugc_match_IntegratedGuides`|Guides that you can use within your game (like Dota 2's in game character guides)
|`ugc_match_UsableInGame`|Ready-to-use items and integrated guides
|`ugc_match_ControllerBindings`|Controller Bindings which have been shared


@func_end


# UGCQueryType (Sorting &amp; Filtering)

These constants specify the sorting and filtering for queries across all available UGC, and are to be used with the following functions:

* [steam_ugc_create_query_all](#steam_ugc_create_query_all)
* [steam_ugc_create_query_all_ex](#steam_ugc_create_query_all_ex)

> **:information_source: NOTE**
>
> See [Steam UGC Docs](https://partner.steamgames.com/doc/api/ISteamUGC#EUGCQuery) for more details.

|UGC Query Type Constant|Description
|----|----
|`ugc_query_RankedByVote`|Sort by vote popularity all-time
|`ugc_query_RankedByPublicationDate`|Sort by publication date descending
|`ugc_query_AcceptedForGameRankedByAcceptanceDate`|Sort by date accepted (for mtx items)
|`ugc_query_RankedByTrend`|Sort by vote popularity within the given "trend" period (set in [steam_ugc_query_set_ranked_by_trend_days](#steam_ugc_query_set_ranked_by_trend_days))
|`ugc_query_FavoritedByFriendsRankedByPublicationDate`|Filter to items the user's friends have favorited, sorted by publication date descending
|`ugc_query_CreatedByFriendsRankedByPublicationDate`|Filter to items created by friends, sorted by publication date descending
|`ugc_query_RankedByNumTimesReported`|Sort by report weight descending
|`ugc_query_CreatedByFollowedUsersRankedByPublicationDate`|Filter to items created by users that the current user has followed, sorted by publication date descending
|`ugc_query_NotYetRated`|Filtered to the user's voting queue
|`ugc_query_RankedByTotalVotesAsc`|Sort by total # of votes ascending (used internally for building the user's voting queue)
|`ugc_query_RankedByVotesUp`|Sort by number of votes up descending. Will use the "trend" period if specified (set in [steam_ugc_query_set_ranked_by_trend_days](#steam_ugc_query_set_ranked_by_trend_days))
|`ugc_query_RankedByTextSearch`|Sort by keyword text search relevancy


@func_end