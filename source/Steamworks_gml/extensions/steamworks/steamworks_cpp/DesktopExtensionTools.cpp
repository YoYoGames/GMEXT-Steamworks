
#include "DesktopExtensionTools.h"
#include "Extension_Interface.h"
#include <stdio.h>

std::filesystem::path DesktopExtensionTools_getPathToExe()
{
    return std::filesystem::current_path();
}
