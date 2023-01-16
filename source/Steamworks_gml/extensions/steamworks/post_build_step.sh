#!/bin/bash

source "$(dirname "$0")/scriptUtils.sh"

# ######################################################################################
# Macros

pathExtractDirectory "$0" SCRIPT_PATH
pathExtractBase "$0" EXTENSION_NAME
toUpper "$EXTENSION_NAME" EXTENSION_NAME

export SCRIPT_PATH
export EXTENSION_NAME

# Version locks
RUNTIME_VERSION_STABLE="2023.1.0.0"
RUNTIME_VERSION_BETA="2023.100.0.0"
RUNTIME_VERSION_RED="9.9.1.293"

# SDK version v1.55
SDK_HASH_WIN="1DB3FD414039D3E5815A5721925DD2E0A3A9F2549603C6CAB7C49B84966A1AF3"
SDK_HASH_OSX="88DC79403F68E81B6674C927ED362EF3CF69046F587ED009FDC6AD85D85E97F2"
SDK_HASH_LINUX="C0CC3D2802E5F2463BFA0046C41D2F65A6335BAAEEFBBA6C7DBD5681D5CA7C46"

# ######################################################################################
# Script Functions

setupmacOS() {

    SDK_SOURCE="$SDK_PATH/redistributable_bin/osx/libsteam_api.dylib"
    assertFileHash $SDK_SOURCE $SDK_HASH_OSX "Steam SDK"
    
    echo "Copying macOS (64 bit) dependencies"
    if [[ "$YYTARGET_runtime" == "VM" ]]; then
        fileCopyTo $SDK_SOURCE "libsteam_api.dylib"
    else
        fileCopyTo $SDK_SOURCE "${YYprojectName}/${YYprojectName}/Supporting Files/libsteam_api.dylib"
    fi

    [[ ! -z ${DEBUG_MODE+x} ]] && echo "Running $YYTARGET_runtime macOS Steamworks project on macOS via IDE, enabling Debug..."
}

setupLinux() {

    SDK_SOURCE="$SDK_PATH/redistributable_bin/linux64/libsteam_api.so"
    assertFileHash $SDK_SOURCE $SDK_HASH_LINUX "Steam SDK"

    echo "Copying Linux (64 bit) dependencies"
    
    fileExtract "${YYprojectName}.zip" "_temp"
    [[ ! -f "_temp/assets/libsteam_api.so" ]] && fileCopyTo $SDK_SOURCE "_temp/assets/libsteam_api.so"

    [[ ! -z ${DEBUG_MODE+x} ]] && echo "Running $YYTARGET_runtime Linux Steamworks project via IDE, enabling Debug..."
	
    folderCompress "_temp" "${YYprojectName}.zip"
    rm -r _temp
}

# ######################################################################################
# Script Logic

# Checks IDE and Runtime versions
checkMinVersion "$YYruntimeVersion" $RUNTIME_VERSION_STABLE $RUNTIME_VERSION_BETA $RUNTIME_VERSION_RED runtime

# Resolve the SDK path (must exist)
SDK_PATH=$YYEXTOPT_Steamworks_SteamSDK
pathResolveExisting "$YYprojectDir" "$SDK_PATH" SDK_PATH

# Check if debug mode is 'Enabled' else is 'Auto' (use YYTargetFile hacks)
[[ "$YYEXTOPT_Steamworks_Debug" == "Enabled" ]] && echo "Debug mode 'Enable'" && DEBUG_MODE=1
[[ "$YYtargetFile" == " " ]] && echo "Debug mode 'Auto'" && DEBUG_MODE=1
[[ "$YYtargetFile" == "" ]] && echo "Debug mode 'Auto'" && DEBUG_MODE=1

# Ensure we are on the output path
pushd "$YYoutputFolder" >/dev/null

# Call setup method depending on the platform
# NOTE: the setup method can be (:setupmacOS or :setupLinux)
setup$YYPLATFORM_name

popd >/dev/null

exit 0

