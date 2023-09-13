# Stats and Achievements

The Steam Stats and Achievements API provides an easy way for your game to provide persistent, roaming achievement and statistics tracking for your users. The user&#39;s data is associated with their Steam account, and each user&#39;s achievements and statistics can be formatted and displayed in their Steam Community Profile.

> **:information_source: NOTE**
>
> You must wait until [steam_stats_ready](General#steam_stats_ready) has returned true, before attempting to read or write stats and achievements.

## Achievements

In addition to providing highly-valued rewards to players of your games, achievements are useful for encouraging and rewarding teamwork and player interaction, providing extra dimensionality to the game objectives, and rewarding users for spending more of their time in-game, and as such it is recommended that your game has a few. They are easily set up from the Steam Dashboard, but will require that you create special Icons for them.
The following functions are provided for working with achievements:

* [steam_set_achievement](#steam_set_achievement)
* [steam_get_achievement](#steam_get_achievement)
* [steam_clear_achievement](#steam_clear_achievement)

## Statistics Functions

Statistics track fine-grained pieces of information, such as play time, number of power-ups used, etc. You may choose to use them simply for tracking internal game data - so that, for instance, you can grant an achievement based on multi-session game-play statistics collected from the user across multiple computers. Or, you can track interesting game data for display on the user&#39;s Steam Community page, where users can compare their own stats against their friends.

> **:information_source: NOTE**
>
> Previously to being used statistics must be initialized from the Steamworks control panel for your game.

The following functions are provided for working with statistics:

* [steam_set_stat_int](#steam_set_stat_int)
* [steam_set_stat_float](#steam_set_stat_float)
* [steam_set_stat_avg_rate](#steam_set_stat_avg_rate)
* [steam_get_stat_int](#steam_get_stat_int)
* [steam_get_stat_float](#steam_get_stat_float)
* [steam_get_stat_avg_rate](#steam_get_stat_avg_rate)

## Debug Functions

The following functions are provided for debugging purposes and are not recommended in the production version of you game:

* [steam_reset_all_stats](#steam_reset_all_stats)
* [steam_reset_all_stats_achievements](#steam_reset_all_stats_achievements)

If the user is in Offline Mode, Steam keeps a local cache of the stats and achievement data so that the APIs can be use as normal. Any stats unable to be committed are saved for the next time the user is online. In the event that there have been modifications on more than one machine, Steam will automatically merge achievements and choose the set of stats that has had more progress. Because Steam keeps a local cache of stats data it is not necessary for the game to <i>also</i> keep a local cache of the data on disk, especially as such caches often come in conflict and when they do it looks to a users as if their progress has been reverted, which is a frustrating experience.

@func_end

@func steam_set_achievement
With this function you can tell the Steam API to award (&quot;set&quot;) an achievement for the player. These achievements should have been defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel. The Steam Game Overlay will display a notification panel to the user informing them of the achievement that they have received, unless the achievement has already been awarded, in which case nothing will happen.


|ach_name|string|The name of the achievement to set.|




```gml
if hp <= 0
{
    global.Deaths += 1;
    if global.Deaths == 10
    {
        if !steam_get_achievement("ach_Player_Dies_Ten_Times") steam_set_achievement("ach_Player_Dies_Ten_Times");
    }
}
```
The above code will reward the player an achievement if the global variable &quot;Deaths&quot; is equal to 10 and if the achievement has not already been awarded.<br>



@func_end

@func steam_get_achievement
With this function you can check the Steam API to see if a specific achievement has been awarded. The achievement should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.


|ach_name|string|The name of the achievement to get.|


@returns {Bool}

```gml
if hp <= 0
{
    global.Deaths += 1;
    if global.Deaths == 10
    {
        if !steam_get_achievement("ach_Player_Dies_Ten_Times") steam_set_achievement("ach_Player_Dies_Ten_Times");
    }
}
```
The above code will reward the player an achievement if the global variable &quot;Deaths&quot; is equal to 10 and if the achievement has not already been awarded.


@func_end

@func steam_clear_achievement
With this function you can tell the Steam API to clear (reset) a specific achievement. The achievement should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.


|ach_name|string|The name of the achievement to clear.|




```gml
if mouse_check_button_pressed(mb_left)
{
    steam_clear_achievement("Ach_Game_Win");
    steam_clear_achievement("Ach_Died_10_Times");
    steam_clear_achievement("Ach_Killed_100_Enemies");
    steam_clear_achievement("Ach_Beat_Boss_Level_1");
}
```
The above code will reset the achievements of the game when the user clicks the left mouse button.

  <br>


@func_end

@func steam_set_stat_int
With this function you can set a specific statistic to a new, signed integer, value. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel. Examples of when you could use this are for tracking how many times the player dies or for tracking progress towards an achievement.


**Syntax:**

```gml
steam_set_stat_int(stat_name, value);
```

|stat_name|string|The name of the statistic to set.|
|value|integer|The value to set the stat to.|




```gml
xp += 100;
steam_set_stat_int("Total_XP", steam_get_stat_int("Total_XP") + 100);
if steam_get_stat_int("Total_XP") > 1000
{
    if !steam_get_achievement("Ach_1000XP") steam_set_achievement("Ach_1000XP");
}
```
The above code sets a statistic and then checks the final value for it to decide whether to award an achievement or not.


@func_end

@func steam_set_stat_float
With this function you can set a specific statistic to a new, floating point, value. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel. Examples of when you could use this are for tracking how far your player has travelled, or what percentage of the game is complete.


**Syntax:**

```gml
steam_set_stat_float(stat_name, value);
```

|stat_name|string|The name of the statistic to set.|
|value|real|The value to set the stat to.|




```gml
var dist_pc = (dist / dist_max) * 100;
steam_set_stat_float("Travelled", dist_pc);
```
The above code calculates a percentage based on the distance travelled variable &quot;dist&quot; and the maximum distance you can travel &quot;dist_max&quot; and then sets the stat &quot;Travelled&quot; to the new value.



@func_end

@func steam_set_stat_avg_rate
@desc This function permits you to set an average statistic type with a &quot;sliding window&quot; effect on the average. The &quot;session_count&quot; value is the current value that you wish to average out, while the &quot;session_length&quot; is the amount of game time since the last call to the function. Please see the extended Example below for further details on how this can be used.

|stat_name|string|The name of the statistic to set.|
|session_count|real|The value to get the average of.|
|session_length|real|The time that has been taken since the last time the stat was set.|

@example
Since the average stat function can be complex to understand, we will illustrate its use with the following example. Consider the case where you&#39;d like to track an average statistic, such as &quot;Points earned per hour&quot;. One approach would be to have two stats: an <i>integer</i> stat, &quot;TotalPoints&quot;, and a <i>float</i> stat &quot;TotalPlayTimeHours&quot;, and then divide the total points by the total time to get the &quot;Points per Hour&quot; value.
However, once the player has accumulated a significant amount of playtime, the calculated average will change extremely slowly, and the more the user plays the game, the less responsive that average will be. If the user has spent 100 hours playing the game, the calculated average will &quot;lag&quot; by about 50 hours of that, and if they increase their skill, they will not see the increase in &quot;Points Per Hour&quot; that they expect. To get around that we can use a &quot;sliding window&quot; to only calculate the &quot;Points per hour&quot; for the last 10 hours played.
So, to use this function, we would need to create a Steam stat (in the control panel for the game on the Workshop) called &quot;AvgPointsPerHour&quot; and set its Window property to 10. Now in your game you would have to add some global variables into an instance at the start:

```gml
global.Points = 0;
global.Time = 0;
```
You would then have some controller object to count up the global &quot;Time&quot; variable in an alarm (for example) every second, while your game-play would affect the global &quot;Points&quot; variable. At regular intervals while playing (again, in a controller object, perhaps in an Alarm, or at intervals from polling the &quot;Time&quot; value) you would set the stat like this:

```gml
steam_set_stat_avg_rate("AvgPointsPerHour", global.Points, (global.Time / 3600));
global.Points = 0;
global.Time = 0;
```
Note that we divide time by 3600 since we want the time in <i>hours</i> and not in seconds, and afterward we reset the global &quot;Points&quot; variable and the global &quot;Time&quot; variable to 0 so that the next time the function is called, we get a new average for the statistic. Now, what Steam will do is take this value that you have sent and create an average value over the time that was set for our &quot;window&quot;.


@func_end

@func steam_get_stat_int
With this function you can get the value of a specific signed integer statistic. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.


|stat_name|string|The name of the statistic to get.|


@returns {Real}

```gml
xp += 100;
steam_set_stat_int("Total_XP", steam_get_stat_int("Total_XP") + 100);
if steam_get_stat_int("Total_XP") > 1000
{
    if !steam_get_achievement("Ach_1000XP") steam_set_achievement("Ach_1000XP");
}
```
The above code sets a statistic and then checks the final value for it to decide whether to award an achievement or not.


@func_end

@func steam_get_stat_float
With this function you can get the value of a specific floating point statistic. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.


|stat_name|string|The name of the statistic to get.|

@returns {Real}

```gml
var dist_pc = (dist / dist_max) * 100;
if steam_get_stat_float("Travelled") < dist_pc
{
    steam_set_stat_int("Travelled", dist_pc);
}
```
The above code calculates a percentage based on the distance travelled variable &quot;dist&quot; and the maximum distance you can travel &quot;dist_max&quot;. It then polls the current value for the statistic &quot;Travelled&quot; and if it is less than the calculated value, it sets the stat again.
@func_end

@func steam_get_stat_avg_rate
With this function you can get the value of a specific average statistic. The statistic should have been previously defined on the Steamworks control panel accounts page for your game and the string that is passed to the function should match that used as the API Name on the control panel.

|stat_name|string|The name of the statistic to get.|


@returns {Real}

```gml
var avg = steam_get_stat_avg_rate("PointsPerHour");
draw_text(8, 8, "PPH = " + string(avg);
```
The above code gets the current value for the average statistic &quot;PointsPerHour&quot; and draws it on the screen.
@func_end

@func steam_reset_all_stats
With this function you can reset all the statistics for the **current user** to their default values (as defined in the Steamworks control panel for your game). If need to also reset the achievement to their default values use the [steam_reset_all_stats_achievements](#steam_reset_all_stats_achievements) instead.

> **:information_source: TIP**
>
> It is recommended that you only use this function as a debug tool when developing your game.

```gml
ini_open("Save.ini");
if global.Version != ini_read_real("Data", "Version", 0)
{
    ini_write_real("Data", "Version", global.Version);
    steam_reset_all_stats();
}
ini_close();
```
The above code checks a stored value in an ini file against that of a global variable and if they are different, it resets the statistics for the game.
@func_end

@func steam_reset_all_stats_achievements
With this function you can reset all the statistics *and* achievements for the **current user** to their default values (as defined in the Steamworks control panel for your game). If you only need to reset the stats to their default values use the [steam_reset_all_stats](#steam_reset_all_stats) instead.

> **:information_source: TIP**
>
> It is recommended that you only use this function as a debug tool when developing your game.

```gml
ini_open("Save.ini");
if global.Version != ini_read_real("Data", "Version", 0)
{
    ini_write_real("Data", "Version", global.Version);
    steam_reset_all_stats_achievements();
}
ini_close();
```
The above code checks a stored value in an ini file against that of a global variable and if they are different, it resets the statistics and achievements for the game.

@func_end