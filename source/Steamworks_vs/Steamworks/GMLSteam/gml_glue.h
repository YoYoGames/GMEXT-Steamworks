/// gml_glue.h
#pragma once

#include "steam_glue.h"
#include "gml_ext.h"
#include "Extension_Interface.h"

// Debug output macro, { printf(...); printf("\n"); fflush(stdout); }
//#define trace(...) { printf(__VA_ARGS__); printf("\n"); fflush(stdout); }

// Shortcuts for uint32<->uint64 conversions:
//#ifndef UINT32_MAX
//#define UINT32_MAX 4294967295u
//#endif
//#define uint64_make(high, low) (((uint64)(high) << 32) | (uint64)(low))
//#define uint64_high(value) (uint32)((value) >> 32)
//#define uint64_low(value) (uint32)((value) & UINT32_MAX)

// GameMaker has an unusual way of detecting if a value is "true".
//inline bool gml_bool(double val) {
//	return val > 0.5;
//}

//char* gml_string(const char* s);

// As per http://help.yoyogames.com/hc/en-us/articles/216755258:
// typedef int gml_ds_map;
//
//typedef void (*gml_event_perform_async_t)(gml_ds_map map, int event_type);
//typedef int (*gml_ds_map_create_ext_t)(int n, ...);
//typedef bool (*gml_ds_map_set_double_t)(gml_ds_map map, char* key, double value);
//typedef bool (*gml_ds_map_set_string_t)(gml_ds_map map, char* key, char* value);
////
//extern gml_event_perform_async_t gml_event_perform_async;
//extern gml_ds_map_create_ext_t gml_ds_map_create_ext;
//extern gml_ds_map_set_double_t gml_ds_map_set_double;
//extern gml_ds_map_set_string_t gml_ds_map_set_string;
//
//inline gml_ds_map gml_ds_map_create() {
//	//return gml_ds_map_create_ext(0);
//	return CreateDsMap(0,0);
//}

// A wrapper for queuing async events for GML easier.
class steam_net_event {
private:
	int map;
public:
	steam_net_event() {
		map = CreateDsMap(0,0);
	}
	steam_net_event(char* type) {
		map = CreateDsMap(0,0);
		set((char*)"event_type", type);
	}
	~steam_net_event() {
		//
	}
	/// Dispatches this event and cleans up the map.
	void dispatch() {
		CreateAsyncEventWithDSMap(map, 69);
	}
	bool set(char* key, double value) {
		DsMapAddDouble(map, key, value);
		return true;
	}
	bool set(char* key, char* value) {
		DsMapAddString(map, key, value);
		return true;
	}
	bool set_uint64_str(char* key, uint64 value) {
		DsMapAddInt64(map, key, value);
		return true;
	}
	template<size_t size> void set_uint64_all(const char(&key)[size], uint64 value) {
		DsMapAddInt64(map, key, value);
	}
	template<size_t size> void set_steamid_all(const char(&key)[size], CSteamID& id) {
		DsMapAddInt64(map, key, id.ConvertToUint64());
	}
	void set_success(bool success) {
		set((char*)"success", success);
		set((char*)"result", success ? k_EResultOK : k_EResultFail);
	}
	void set_result(int result) {
		set((char*)"success", result == k_EResultOK);
		set((char*)"result", result);
	}
};
