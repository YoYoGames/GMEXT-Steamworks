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
	Steamworks_vs/Steamworks/*.cpp \
    Steamworks_vs/Steamworks/GMLSteam/steam_*.cpp \
    -Wl,-rpath,assets/ -fPIC \
    -LSteamworks_sdk/redistributable_bin/linux64 \
    -lsteam_api \
    -ISteamworks_sdk/public/steam \
	-ISteamworks_vs/Steamworks/GMLSteam/ \
	-ISteamworks_vs/Steamworks/ \
    -shared -o Steamworks_gml/extensions/steamworks/Steamworks.so;
then
    echo "BUILD SUCCESS";
else
    echo "BUILD FAILED";
fi


