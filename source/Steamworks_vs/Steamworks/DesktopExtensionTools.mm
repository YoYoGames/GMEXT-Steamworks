
#import <Foundation/Foundation.h>

#include "DesktopExtensionTools.h"

#include "Extension_Interface.h"

#include <filesystem>
#include <string>

#include <stdio.h>

std::string DesktopExtensionTools_getPathToExe()
{
    NSString *bundlename = [[NSBundle mainBundle] executablePath];
    std::filesystem::path exePath =  [bundlename UTF8String];
        
    exePath = exePath.parent_path();
    return exePath.string();
}
