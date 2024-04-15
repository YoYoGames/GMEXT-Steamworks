#!/bin/sh

YYCOMPILER="g++"

if [ -n "$YYSTEAMRT" ]; then
    YYCOMPILER="g++-9";
fi

echo Compiler: "$YYCOMPILER"
echo Steam RT? "$YYSTEAMRT"

if "$YYCOMPILER" -m64 \
    -Wno-invalid-offsetof \
    -std=c++17 \
	../Steamworks_cpp/*.cpp \
    ../Steamworks_cpp/GMLSteam/steam_*.cpp \
    -Wl,-rpath,assets/ -fPIC \
    -L../../../../Steamworks_sdk/redistributable_bin/linux64 \
    -lsteam_api \
    -I../../../../Steamworks_sdk/public/steam \
	-I../../../../Steamworks_vs/Steamworks/GMLSteam/ \
	-I../Steamworks_cpp/ \
    -shared -o ../Steamworks.so;
then
    echo "BUILD SUCCESS";
else
    echo "BUILD FAILED";
fi


