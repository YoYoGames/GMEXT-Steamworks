//
// Copyright (C) 2020 Opera Norway AS. All rights reserved.
//
// This file is an original work developed by Opera.
//

#include "IniOptionsLibrary.h"
#include "Extension_Interface.h"
#include <sstream>

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

	char* extensionNameClosed = (char*)malloc(extensionName.length() + 3);

	sprintf(extensionNameClosed, "[%s]", extensionName.data());

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
	free(extensionNameClosed);

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
	std::filesystem::path exePath = std::filesystem::current_path();

	char filename[1024];

#ifdef OS_Windows
	snprintf(filename, 1024, "%s/options.ini", exePath.string().c_str());
#endif

#ifdef OS_Linux
	snprintf(filename, 1024, "%s/assets/options.ini", exePath.string().c_str());
#endif

	std::string str = (char*)readFile(filename).c_str();

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
