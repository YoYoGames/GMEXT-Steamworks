
// Async - Audio Playback: a queued voice chunk finished playing (or its queue was freed).
// The buffer is no longer used by the audio engine, so it can be deleted now.
var _queue_id = async_load[? "queue_id"];

var _keys = struct_get_names(speakers);
for (var _i = 0; _i < array_length(_keys); _i++)
{
	var _speaker = speakers[$ _keys[_i]];
	if (_speaker.queue == _queue_id)
	{
		buffer_delete(async_load[? "buffer_id"]);
		_speaker.pending--;
		break;
	}
}
