/// Support for the GameTest specs in tests/gametest. Not needed by games using the extension.
///
/// A GameTest chunk can't define a function literal, so a spec passes gametest_async_recorder("name") as an
/// async function's callback. The callback stores the payload's result in global.gametest_async_results[$ name],
/// which a later chunk reads with gametest_async_result("name") (undefined until the callback has run).

function gametest_async_recorder(_name)
{
	return method({ name: _name }, function(_payload)
	{
		if (!variable_global_exists("gametest_async_results"))
			global.gametest_async_results = {};
		global.gametest_async_results[$ name] = _payload.result;
	});
}

function gametest_async_result(_name)
{
	if (!variable_global_exists("gametest_async_results"))
		return undefined;
	return global.gametest_async_results[$ _name];
}

/// For callbacks set with a steam_*_set_callback_* function: gametest_event_counter("name") counts each call in
/// global.gametest_event_counts[$ name], which gametest_event_count("name") reads (0 until the first call).
function gametest_event_counter(_name)
{
	return method({ name: _name }, function(_payload)
	{
		if (!variable_global_exists("gametest_event_counts"))
			global.gametest_event_counts = {};
		global.gametest_event_counts[$ name] = (global.gametest_event_counts[$ name] ?? 0) + 1;
	});
}

function gametest_event_count(_name)
{
	if (!variable_global_exists("gametest_event_counts"))
		return 0;
	return global.gametest_event_counts[$ _name] ?? 0;
}
