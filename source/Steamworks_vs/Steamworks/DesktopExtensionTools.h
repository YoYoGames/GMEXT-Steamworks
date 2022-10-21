//
// Copyright (C) 2020 Opera Norway AS. All rights reserved.
//
// This file is an original work developed by Opera.
//

#include <filesystem>
#include <fstream>
#include <string>


std::string DesktopExtensionTools_getPathToExe();

#define tracef(...) do { printf("[STEAMWORKS]: "); printf(__VA_ARGS__); printf("\n"); fflush(stdout); } while (0)
