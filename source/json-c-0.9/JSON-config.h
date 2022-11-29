#ifndef _JSON_CONFIG_H_
#define _JSON_CONFIG_H_

#if defined(WIN_PHONE)
#include "WinPhone/JSON-configM.h"
#elif defined (WIN_CLASSIC)
#include "Win32/JSON-configM.h"
#elif defined (WIN_METRO)
#include "WinMetro/JSON-configM.h"
#elif defined (IPAD)
#include "iPad/JSON-configM.h"
#elif defined(ANDROID_NDK)
#include "Android/JSON-configM.h"
#elif defined(MAC)
#include "Mac/JSON-configM.h"
#elif defined(__psp__)
#include "PSP/JSON-configM.h"
#elif defined(LINUX) || defined(EMSCRIPTEN)
#include "Linux/JSON-configM.h"
#elif defined(TIZEN)
#include "Tizen/JSON-configM.h"
#elif defined(YYPSVITA)
#include "PSVita/JSON-configM.h"
#elif defined(YYPS4)
#include "PS4/JSON-configM.h"
#elif defined(YYPS5)
#include "PS5/JSON-configM.h"
#elif defined(YYPS3)
#include "PS3/JSON-configM.h"
#elif defined(YYSWITCH)
#include "Switch/JSON-configM.h"
#elif defined(YYWIIU)
#include "WiiU/JSON-configM.h"
#elif defined(YY3DS)
#include "3DS/JSON-configM.h"
#elif defined (YYXBOX)
#include "XboxOne/JSON-configM.h"
#endif




#endif
