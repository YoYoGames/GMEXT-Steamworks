
#import <Foundation/Foundation.h>

#include "DesktopExtensionTools.h"

#include "Extension_Interface.h"

#include <stdio.h>

std::filesystem::path DesktopExtensionTools_getPathToExe()
{
    NSString *bundlename = [[NSBundle mainBundle] executablePath];
    NSString *exePath = [bundlename stringByDeletingLastPathComponent];
    return std::filesystem::path([exePath UTF8String]);
}