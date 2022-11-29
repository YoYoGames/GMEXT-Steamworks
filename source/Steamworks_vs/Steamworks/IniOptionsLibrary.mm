//
// Copyright (C) 2020 Opera Norway AS. All rights reserved.
//
// This file is an original work developed by Opera.
//

#include "IniOptionsLibrary.h"
#include <sstream>
#import <Foundation/Foundation.h>

std::string readFile(std::filesystem::path path)
{
    std::ifstream f(path, std::ios::in | std::ios::binary);
    const auto sz = std::filesystem::file_size(path);
    std::string result(sz, '\0');
    f.read(result.data(), sz);

    return result;
}

std::string getLine(const std::string& str, int lineNo)
{
    std::string line;
    std::istringstream stream(str);
    while (lineNo-- >= 0)
        std::getline(stream, line);

    return line;
}

int countLines(const std::string& str)
{
    int c = 1;
    std::string line;
    std::istringstream stream(str);
    while (std::getline(stream, line))
        c++;

    return c;
}

void segmentation(const std::string str, const std::string extensionName, const std::string key, int& start, int& end)
{
    int index = 0;
    int lines = countLines(str);
    end = lines;

    std::string extensionNameClosed = std::string("[") + extensionName + std::string("]");

    while (index < lines)
    {
        std::string line = getLine(str, index);

        if (line.find(extensionNameClosed) != std::string::npos)
        {
            start = index;
            break;
        }
        index++;
    }

    index++;
    while (index < lines)
    {
        std::string line = getLine(str, index);
        if (line.find("]") != std::string::npos)
        {
            end = index;
            break;
        }
        index++;
    }
}

std::string IniOptions_read(std::string extensionName,std::string key)
{
    NSString *bundlename = [[NSBundle mainBundle] executablePath];
    // "./SomeGame.app/Contents/MacOS/Mac_Runner"
    std::filesystem::path optionsIniPath = [bundlename UTF8String];
    
    // Mac_Runner -> MacOS -> Resources / options.ini
    std::filesystem::path testPath;
    
    // This is the default path for MacOS YYC compilation
    testPath = optionsIniPath.parent_path().parent_path() / "Resources" / "options.ini"; // ./Resources/options.ini
    
    if (std::filesystem::exists(testPath))
    {
        optionsIniPath = testPath;
    }
    else
    {
        // We are running the VM version (get path from command line arguments)
        
        // 0: Path to MacOS runner
        // 1: -game
        // 2: /tmp/GameMakerStudio2-Beta/GMS2TEMP/Steamworks_88FEBDE_VM/game.ios
        
        testPath = [[[NSProcessInfo processInfo] arguments][2] UTF8String];
        testPath = testPath.parent_path() / "options.ini";
        if (std::filesystem::exists(testPath))
        {
            optionsIniPath = testPath;
        }
        else
        {
            // We are on Windows -> macOS build
            
            // 0: Path to MacOS runner
            // 1: -game
            // 2: pathToZip
            // 3: -debugoutput
            // 4: pathToDebug
            // 5: -output
            // 6: pathToOutput
            // 7: -runTest
            // 8: -game
            // 9: pathToiOS.ios
            
            testPath = [[[NSProcessInfo processInfo] arguments][9] UTF8String];
            testPath = testPath.parent_path() / "options.ini";
            optionsIniPath = testPath;
        }
    }

    std::string str = readFile(optionsIniPath);

    int start;
    int end;
    segmentation(str,extensionName, key, start, end);

    for (int i = start; i < end ; i++)
    {
        std::string line = getLine(str, i);

        if (line.find(key) != std::string::npos)
        {
            line.erase(0, key.length() + 1);
            //line.erase(line.length() - 1, 1);//Delete \n..... (not necesary in MacOS?)
            
            return line;
        }
    }
    return "";
}


