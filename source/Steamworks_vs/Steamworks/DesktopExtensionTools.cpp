
#include "DesktopExtensionTools.h"
#include "Extension_Interface.h"

#include <filesystem>
#include <string>

#include <stdio.h>

std::string DesktopExtensionTools_getPathToExe()
{
    std::filesystem::path exePath = std::filesystem::current_path();
    return exePath.string();
}
