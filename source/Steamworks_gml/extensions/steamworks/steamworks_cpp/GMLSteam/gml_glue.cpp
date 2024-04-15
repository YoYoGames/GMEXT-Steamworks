/// gml_glue.cpp
#include "pch.h"
#include "gml_glue.h"
#include "Extension_Interface.h"

//gml_event_perform_async_t gml_event_perform_async = nullptr;
//gml_ds_map_create_ext_t gml_ds_map_create_ext = nullptr;
//gml_ds_map_set_double_t gml_ds_map_set_double = nullptr;
//gml_ds_map_set_string_t gml_ds_map_set_string = nullptr;

// Converts a const char* to a one-time reusable char* for returning to GML.
/*
char* gml_string(const char* s) {
	static char* __gml_string_b = nullptr;
	static size_t __gml_string_n = 0;
	size_t n = strlen(s) + 1;
	if (__gml_string_n < n) {
		auto b = realloc(__gml_string_b, n);
		if (b == nullptr) {
			DebugConsoleOutput("Failed to realloc %zu bytes.", n);
			return (char*)"";
		}
		__gml_string_b = (char*)b;
	}
	strcpy(__gml_string_b, s);
	return __gml_string_b;
}
*/