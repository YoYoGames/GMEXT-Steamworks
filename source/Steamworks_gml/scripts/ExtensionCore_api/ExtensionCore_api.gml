
// #############################################################################
// # GMExtCore
// #############################################################################

#macro EXT_CORE_GM_TYPE_STRUCT (255)
#macro EXT_CORE_GM_TYPE_ARRAY (254)
#macro EXT_CORE_GM_TYPE_BUFFER (253)
#macro EXT_CORE_GM_TYPE_POINTER (252)
#macro EXT_CORE_GM_TYPE_UNDEFINED (251)
#macro EXT_CORE_GM_TYPE_TYPED_ARRAY (250)
#macro EXT_CORE_GM_TYPE_TYPED_STRUCT (249)

#macro EXT_CORE_GM_BUFFER_RETURN_SIZE (8192)

#macro EXT_CORE_DEBUG false

/// @desc Unmarshals a value from a buffer.
/// @returns {Any}
/// @ignore
function __ext_core_buffer_unmarshal_value(_buff, _decoders)
{
	var _type = buffer_read(_buff, buffer_u8);

	switch(_type)
	{		
		case EXT_CORE_GM_TYPE_ARRAY:
		{
			var _size = buffer_read(_buff, buffer_u16);
			var _array = array_create(_size);
			for (var _i = 0 ; _i < _size ; _i++) {
				_array[_i] = __ext_core_buffer_unmarshal_value(_buff, _decoders);
			}
			return _array;
		}
		case EXT_CORE_GM_TYPE_TYPED_ARRAY:
		{
			var _size = buffer_read(_buff, buffer_u16);
			var _elem_type = buffer_read(_buff, buffer_u8);
			
			var _array = array_create(_size);
			if (_elem_type == EXT_CORE_GM_TYPE_TYPED_STRUCT)
			{
				for (var _i = 0 ; _i < _size ; _i++) {
					var _decoder_id = buffer_read(_buff, buffer_u32);
					_array[_i] = _decoders[_decoder_id](_buff, buffer_tell(_buff));
				}
			}
			else 
			{
				for (var _i = 0 ; _i < _size ; _i++) {
					_array[_i] = buffer_read(_buff, _elem_type);
				}
			}
			return _array;
		}
		case EXT_CORE_GM_TYPE_TYPED_STRUCT:
		{
			var _decoder_id = buffer_read(_buff, buffer_u32);
			return _decoders[_decoder_id](_buff, buffer_tell(_buff));
		}
		case EXT_CORE_GM_TYPE_STRUCT:
		{
			var _size = buffer_read(_buff, buffer_u16);
			var _struct = {};
			for (var _i = 0 ; _i < _size ; _i++)
			{
				var _key = __ext_core_buffer_unmarshal_value(_buff, _decoders);
				var _value = __ext_core_buffer_unmarshal_value(_buff, _decoders);
				struct_set(_struct, _key, _value);
			}
			return _struct;
		}
		case EXT_CORE_GM_TYPE_UNDEFINED:
		{
			return undefined;
		}
		case buffer_string:
			buffer_read(_buff, buffer_u32); // Fall to the default (this is the string size)
		default:
			return buffer_read(_buff, _type);
	}
}

/// @desc Marshals a value into a buffer.
/// @param {Id.Buffer} _buffer The buffer to marshal data into.
/// @param {Any} _value The The value to be marshalled into the buffer.
/// @ignore
function __ext_core_buffer_marshal_value(_buffer, _value)
{
	// Context struct (used with array_foreach and struct_foreach)
	static __context = { buffer: undefined };
	
	/// @func __array_marshalling(_value)
	/// @desc Function for handling array marshalling (used with array_foreach)
	/// @param {Any} _value The value of the array entry.
	static __array_marshalling = function(_value) {
		/// feather ignore GM1041
		__ext_core_buffer_marshal_value(buffer, _value);
	}
	
	/// @func __struct_marshalling(_value)
	/// @desc Function for handling struct marshalling (used with struct_foreach)
	/// @param {String} _key The key of the struct entry pair.
	/// @param {Any} _value The value of the struct entry pair.
	static __struct_marshalling = function(_key, _value) {
		/// feather ignore GM1041
		// Encode key
        buffer_write(buffer, buffer_u8, buffer_string);
        buffer_write(buffer, buffer_u32, string_length(_key));
		buffer_write(buffer, buffer_string, _key);
		// Encode value
		__ext_core_buffer_marshal_value(buffer, _value);
	}
	
	// Encode any value as <<type><data>>

	// Array encoded as <<type><size><<child><child>...>>
	if (is_array(_value))
	{
		var _length = array_length(_value)

		buffer_write(_buffer, buffer_u8, EXT_CORE_GM_TYPE_ARRAY);
		buffer_write(_buffer, buffer_u16, _length);

		__context.buffer = _buffer;
		with (__context) array_foreach(_value, __array_marshalling);
	}
	// Struct encoded as <<type><size><<child><child>...>>
	else if (is_struct(_value))
	{
		var _names = struct_get_names(_value);
		var _length = array_length(_names);

		buffer_write(_buffer, buffer_u8, EXT_CORE_GM_TYPE_STRUCT);
		buffer_write(_buffer, buffer_u16, _length);

		__context.buffer = _buffer;
		with (__context) struct_foreach(_value, __struct_marshalling)
	}
	else if (is_ptr(_value))
	{
		buffer_write(_buffer, buffer_u8, EXT_CORE_GM_TYPE_POINTER);
		buffer_write(_buffer, buffer_u64, _value);
	}
	else if (is_string(_value))
	{
		buffer_write(_buffer, buffer_u8, buffer_string);
        buffer_write(_buffer, buffer_u32, string_length(_value));
		buffer_write(_buffer, buffer_string, _value);
	}
	else if (is_bool(_value))
	{
		buffer_write(_buffer, buffer_u8, buffer_bool);
		buffer_write(_buffer, buffer_bool, _value);
	}
	else if (is_int32(_value))
	{
		buffer_write(_buffer, buffer_u8, buffer_s32);
		buffer_write(_buffer, buffer_s32, _value);
	}
	else if (is_int64(_value))
	{
		buffer_write(_buffer, buffer_u8, buffer_u64);
		buffer_write(_buffer, buffer_u64, _value);
	}
	else if (is_real(_value))
	{
		buffer_write(_buffer, buffer_u8, buffer_f64);
		buffer_write(_buffer, buffer_f64, _value);
	}
	else if (is_undefined(_value)) 
	{
		buffer_write(_buffer, buffer_u8, EXT_CORE_GM_TYPE_UNDEFINED);
	}
	else
	{
		show_error($"[ERROR] {_GMFUNCTION_} :: Cannot encoding value: '{_value}', invalid type.", true);
	}
}

/// @desc Returns the global buffer used for passing arguments into extension function calls.
/// @param {Real} _request_size Request for the buffer to be resized
/// @returns {Id.Buffer}
/// @ignore
function __ext_core_get_args_buffer(_request_size = undefined) {
	static __internal_args = buffer_create(1, buffer_grow, 1);
	if (!is_undefined(_request_size)) buffer_resize(__internal_args, _request_size);
	
	buffer_seek(__internal_args, buffer_seek_start, 0);
	buffer_poke(__internal_args, 0, buffer_u8, EXT_CORE_GM_TYPE_UNDEFINED);
	return __internal_args;
}

/// @desc Returns the global buffer used for handling return values from extensions function calls.
/// @param {Real} _request_size Request for the buffer to be resized
/// @returns {Id.Buffer}
/// @ignore
function __ext_core_get_ret_buffer(_request_size = undefined) {
	static __internal_ret = buffer_create(EXT_CORE_GM_BUFFER_RETURN_SIZE, buffer_grow, 1);
	if (!is_undefined(_request_size)) buffer_resize(__internal_ret, _request_size);
	
	buffer_seek(__internal_ret, buffer_seek_start, 0);
	buffer_poke(__internal_ret, 0, buffer_u8, EXT_CORE_GM_TYPE_UNDEFINED);
	return __internal_ret;
}

/// @desc Returns the global buffer used for handling async calls from extensions.
/// @param {Real} _request_size Request for the buffer to be resized
/// @returns {Id.Buffer}
/// @ignore
function __ext_core_get_async_buffer(_request_size = undefined) {
	static __internal_async = buffer_create(EXT_CORE_GM_BUFFER_RETURN_SIZE, buffer_grow, 1);
	if (!is_undefined(_request_size)) buffer_resize(__internal_async, _request_size);
	
	buffer_seek(__internal_async, buffer_seek_start, 0);
	buffer_poke(__internal_async, 0, buffer_u8, EXT_CORE_GM_TYPE_UNDEFINED);
	return __internal_async;
}

/// @desc Returns the map that keeps all the registered GML side function references passed to extensions.
/// @returns {Id.DsMap}
/// @ignore
function __ext_core_function_map() {
	static __internal_map = ds_map_create();
	return __internal_map;
}

/// @desc A native function dispatcher that manages the polling and lifecycle of functions registered
/// from GML and exposed to native (C++) code. This struct acts as an intermediary between GameMaker and 
/// an external native library, allowing the native side to "call" GML functions asynchronously by queuing 
/// invocation data that is then dispatched each frame. The dispatcher keeps an internal reference count
/// (`pending`) representing the number of active function references currently held by the native side.
///
/// @param {Function} _handler A native (C++) function that handles the dispatch of queued calls and releases.
/// @param {Array[Function]} _decoders The list of decoders that exist to decode constructor structs.
function __GMNativeFunctionDispatcher(_handler, _decoders) constructor {
	
	handler = _handler;
	decoders = _decoders;
	pending = 0;
	ticker = time_source_create(time_source_global, 1, time_source_units_frames, function() {		
		var _released = __ext_core_function_dispatch_calls(handler, decoders);
		pending -= _released;
		if (pending <= 0) {
			pending = 0;
			time_source_pause(ticker);
		}
		
	}, [], -1);
	
	/// @func dispatch(_amount)
	/// @desc Increments the internal reference count and ensures the dispatcher’s time source is running.
    /// Should be called whenever a new function is registered on the GML side.
    /// @param {Real} [_amount=1] The number of active references to add.
	static dispatch = function(_amount = 1) {
		pending += _amount;
		time_source_start(ticker);
	}
}

/// @desc This will register GML function into a wrapper that will keep it in alive for being 
/// called from native C++ code (it needs to be released from the C++ side).
/// @param {Function} _callable The GML function to be registered.
/// @param {Struct.__GMNativeFunctionDispatcher} _dispatcher The native function dispatcher.
/// @returns {Real} The handle to the callable reference.
/// @ignore
function __ext_core_function_register(_callable, _dispatcher) {
	var _map = __ext_core_function_map();
    
    var _handle = int64(ptr(_callable));
    var _ref = ds_map_find_value(_map, _handle);
    if (!is_undefined(_ref)) {
        // Already registered increase the refcount
        _ref[1 /* ref count */] += 1;
    }
    else
    {
        // Create a new ref
    	_ref = [_callable /* callable */, 1 /* ref count */];
    	ds_map_add(_map, _handle, _ref);
    }

    // Make sure we kick the dispatcher (we might be in pause mode)
	_dispatcher.dispatch();

	return _handle;
}

/// @desc Dispatchs all the pending calls from extension side.
/// @param {Function} The extension function that handles functions and pools the queue buffers.
/// @param {Array[Function]} _decoders The list of decoders that exist to decode constructor structs.
/// @returns {Real} The number of released calls.
/// @ignore
function __ext_core_function_dispatch_calls(_handler, _decoders) {

    static _dummy_context = {};
	var _buf = __ext_core_get_async_buffer();
	var _size = _handler(buffer_get_address(_buf), buffer_get_size(_buf));
		
	// Nothing to handle
	if (_size == 0) return 0;

	// Not enough space in the buffer
	if (_size < 0) {
		// Request a buffer resize
		_buf = __ext_core_get_async_buffer(-_size + 3 /* 1 type + 2 size */);
		// This call will always succeed cus it will get the temp packed array
		_handler(buffer_get_address(_buf), buffer_get_size(_buf));
	}

	// There will be a type metadata encoded should be an array
	var _type = buffer_read(_buf, buffer_u8);
	if (_type != EXT_CORE_GM_TYPE_ARRAY) return 0; // Bail if it's not
	
	// Keep track on the amount of released functions
	var _released = 0;
	
	// Read the size of callbacks to be triggered this frame
	var _count = buffer_read(_buf, buffer_u16);
	var _ref_map = __ext_core_function_map(); // Cache the ref map
	repeat (_count) {
	    var _packet_start = buffer_tell(_buf);

	    var _handle = buffer_read(_buf, buffer_u64);
	    var _command = buffer_read(_buf, buffer_u8);

	    if (EXT_CORE_DEBUG) show_debug_message($"PACKET start={_packet_start} handle={_handle} cmd={_command}");

	    var _ref = ds_map_find_value(_ref_map, _handle);
	    if (is_undefined(_ref)) {
	        show_debug_message($"BAD PACKET at pos={_packet_start}, next={buffer_tell(_buf)}");
	        continue;
	    }

	    switch (_command) {
	        case 1:
	        {
	            var _args_start = buffer_tell(_buf);
				
				var _peek_type = buffer_peek(_buf, buffer_tell(_buf), buffer_u8);
				if (EXT_CORE_DEBUG) show_debug_message($"Next args type = {_peek_type}");
				
	            var _args = __ext_core_buffer_unmarshal_value(_buf, _decoders);
	            var _args_end = buffer_tell(_buf);
	            if (EXT_CORE_DEBUG) show_debug_message($"ARGS consumed: {_args_end - _args_start} bytes");
	            with (_dummy_context) method_call(_ref[0], _args);
	            break;
	        }

	        case 2:
	        {
	            var _ref_count = --_ref[1];
	            if (_ref_count <= 0) {
	                ds_map_delete(_ref_map, _handle);
	            }
	            _released++;
	            break;
	        }

	        default:
	            show_debug_message($"INVALID COMMAND {_command} at packet start {_packet_start}");
	    }
	}
	
	return _released;
}

