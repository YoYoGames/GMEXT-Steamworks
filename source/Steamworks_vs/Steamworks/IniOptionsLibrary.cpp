//
// Copyright (C) 2020 Opera Norway AS. All rights reserved.
//
// This file is an original work developed by Opera.
//

#include "IniOptionsLibrary.h"
#include "Extension_Interface.h"
#include <sstream>
#include <string>

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

std::string IniOptions_read(std::string extensionName, std::string key)
{
	// -- for a macOS implementation see the .mm file -- //
	std::filesystem::path optionsIniPath = std::filesystem::current_path();
#ifdef OS_Linux
	optionsIniPath /= "assets"; // assets are in subdir on linux
#endif
	optionsIniPath /= "options.ini";

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
			line.erase(line.length() - 1, 1);//Delete \n.....
			
			return line;
		}
	}

	return "";
}
