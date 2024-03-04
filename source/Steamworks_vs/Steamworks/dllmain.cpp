
#include "pch.h"
#include "steam_api.h"
#include "Extension_Interface.h"
#include "YYRValue.h"
#include "steam_common.h"
#include <vector>

YYRunnerInterface gs_runnerInterface;
YYRunnerInterface* g_pYYRunnerInterface;

//extern "C" __declspec(dllexport) void PreGraphicsInitialisation(char* arg1)
//{
//
//}
extern void OldPreGraphicsInitialisation();

YYEXPORT void YYExtensionInitialise(const struct YYRunnerInterface* _pFunctions, size_t _functions_size)
{
	 //copy out all the functions 
	memcpy(&gs_runnerInterface, _pFunctions, sizeof(YYRunnerInterface));
	g_pYYRunnerInterface = &gs_runnerInterface;

	if (_functions_size < sizeof(YYRunnerInterface)) {
		DebugConsoleOutput("ERROR : runner interface mismatch in extension DLL\n ");
	} // end if
	OldPreGraphicsInitialisation();
	DebugConsoleOutput("YYExtensionInitialise CONFIGURED \n ");

	// This stops the runner from crashing hard
	if (!steam_is_initialised) return;

    Steam_UserStats_Init();
    Steam_Friends_Init();
    Steam_UGC_Init();
    Steam_Screenshots_Init();
    Steam_RemoteStorage_Init();
}


std::vector<const char*> _SW_GetArrayOfStrings(RValue* arg, int arg_idx, const char* func)
{
	RValue* pV = &(arg[arg_idx]);

	std::vector<const char*> strings;

	if (KIND_RValue(pV) == VALUE_ARRAY)
	{
		RValue elem;
		for (int i = 0; GET_RValue(&elem, pV, NULL, i); ++i)
		{
			if (KIND_RValue(&elem) != VALUE_STRING)
			{
				YYError("%s argument %d [array element %d] incorrect type (%s) expecting a String", func, (arg_idx + 1), i, KIND_NAME_RValue(pV));
			}

			strings.push_back(elem.GetString());
		}
	}
	else {
		YYError("%s argument %d incorrect type (%s) expecting an Array", func, (arg_idx + 1), KIND_NAME_RValue(pV));
	}

	return strings;
}

std::vector<int32> _SW_GetArrayOfInt32(RValue* arg, int arg_idx, const char* func)
{
	RValue* pV = &(arg[arg_idx]);

	std::vector<int32> vec;

	if (KIND_RValue(pV) == VALUE_ARRAY)
	{
		RValue elem;
		for (int i = 0; GET_RValue(&elem, pV, NULL, i); ++i)
		{
			if (KIND_RValue(&elem) != VALUE_INT32)
			{
				YYError("%s argument %d [array element %d] incorrect type (%s) expecting a String", func, (arg_idx + 1), i, KIND_NAME_RValue(pV));
			}

			vec.push_back(YYGetInt32(&elem, i));
		}
	}
	else {
		YYError("%s argument %d incorrect type (%s) expecting an Array", func, (arg_idx + 1), KIND_NAME_RValue(pV));
	}

	return vec;
}

std::vector<uint64> _SW_GetArrayOfUint64(RValue* arg, int arg_idx, const char* func)
{
	RValue* pV = &(arg[arg_idx]);

	std::vector<uint64> vec;

	if (KIND_RValue(pV) == VALUE_ARRAY)
	{
		RValue elem;
		for (int i = 0; GET_RValue(&elem, pV, NULL, i); ++i)
		{
			if (KIND_RValue(&elem) != VALUE_INT64)
			{
				YYError("%s argument %d [array element %d] incorrect type (%s) expecting a String", func, (arg_idx + 1), i, KIND_NAME_RValue(pV));
			}

			vec.push_back(YYGetInt64(&elem, i));
		}
	}
	else {
		YYError("%s argument %d incorrect type (%s) expecting an Array", func, (arg_idx + 1), KIND_NAME_RValue(pV));
	}

	return vec;
}

void _SW_SetArrayOfString(RValue* _array, char* str, const char* delim) 
{
	int idx = 0;
	char* token;

	/* get the first token */
	token = strtok(str, delim);

	/* walk through other tokens */
	while (token != NULL)
	{
		RValue tag = { 0 };
		YYCreateString(&tag, token);
		SET_RValue(_array, &tag, NULL, idx++);
		FREE_RValue(&tag);

		token = strtok(NULL, delim);
	}
}

void _SW_SetArrayOfReal(RValue* _array, std::vector<double> &values)
{
	for (int i = 0; i < values.size(); i++)
	{
		RValue tag = { 0 };
		tag.kind = VALUE_REAL;
		tag.val = values[i];

		SET_RValue(_array, &tag, NULL, i);
		FREE_RValue(&tag);
	}
}

void _SW_SetArrayOfRValue(RValue* _array, std::vector<RValue> &values)
{
	for (int i = 0 ; i < values.size() ; i++)
	{
		RValue tag = values[i];

		SET_RValue(_array, &tag, NULL, i);
		FREE_RValue(&tag);
	}
}

void _SW_SetArrayOfInt32(RValue* _array, std::vector<int32> &values)
{
	for (int i = 0; i < values.size(); i++)
	{
		RValue tag = { 0 };
		tag.kind = VALUE_INT32;
		tag.v32 = values[i];

		SET_RValue(_array, &tag, NULL, i);
		FREE_RValue(&tag);
	}
}

void _SW_SetArrayOfInt64(RValue* _array, std::vector<int64> &values)
{
	for (int i = 0; i < values.size(); i++)
	{
		RValue tag = { 0 };
		tag.kind = VALUE_INT64;
		tag.v64 = values[i];

		SET_RValue(_array, &tag, NULL, i);
		FREE_RValue(&tag);
	}
}

YYEXPORT double SimpleDesktopExample_Test(double val)
{
	return val;
}

YYEXPORT void SimpleDesktopExample_ReturnString(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	DebugConsoleOutput("SimpleDesktopExample_ReturnString \n ");
	YYCreateString(&Result, "Hello World");
}

double val = 0;
YYEXPORT void SimpleDesktopExample_ReturnDouble(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	double inc = YYGetReal(arg, 0);

	val += inc;

	Result.kind = VALUE_REAL;
	Result.val = val;
}

YYEXPORT void SimpleDesktopExample_AsyncCallback(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	int map = CreateDsMap(0,0);
	DsMapAddString(map, "type", "SimpleDesktopExample_AsyncCallback");
	DsMapAddDouble(map, "double", val);
	DsMapAddString(map, "string", "Hello World");

	CreateAsyncEventWithDSMap(map, 70);
}
/*
YYEXPORT void SimpleDesktopExample_EchoStruct(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	RValue* pV = &(arg[0]);

	COPY_RValue(&Result, pV);
	FREE_RValue(pV);
}
*/
YYEXPORT void SimpleDesktopExample_ReturnStruct(RValue& Result, CInstance* selfinst, CInstance* otherinst, int argc, RValue* arg)
{
	RValue Struct = { 0 };
	YYStructCreate(&Struct);

	YYStructAddDouble(&Struct, "double", val);
	YYStructAddString(&Struct, "string", "YoYoGames X Opera");

	COPY_RValue(&Result, &Struct);
	FREE_RValue(&Struct);
}

