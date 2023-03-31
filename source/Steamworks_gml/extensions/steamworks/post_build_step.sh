#!/bin/bash

chmod +x "$(dirname "$0")/scriptUtils.sh"
source "$(dirname "$0")/scriptUtils.sh"

# ######################################################################################
# Script Functions

# This entitlement plist allows Steamworks to load, and also allows audio input functions to work.
PLIST="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n<plist version=\"1.0\">\n<dict>\n    <key>com.apple.security.cs.allow-dyld-environment-variables</key>\n    <true/>\n    <key>com.apple.security.cs.disable-library-validation</key>\n    <true/>\n    <key>com.apple.security.device.audio-input</key>\n    <true/>\n</dict>\n</plist>"


setupmacOS() {

    if [[ "$YYPLATFORM_option_mac_build_app_store" == "True" ]]; then
        echo "'Build for App Store' is not compatible with macOS Steamworks, disable or use a Config."
        exit 1
    fi
    
    if [[ "$YYPLATFORM_option_mac_apple_sign_in" == "True" ]]; then
        echo "'Use Apple Sign In' is not compatible with macOS Steamworks, disable or use a Config."
        exit 1
    fi
    
    SDK_SOURCE="$SDK_PATH/redistributable_bin/osx/libsteam_api.dylib"
    assertFileHashEquals $SDK_SOURCE $SDK_HASH_OSX "$ERROR_SDK_HASH"
    
    echo "Copying macOS (64 bit) dependencies"

    if [[ "$YYTARGET_runtime" == "VM" ]]; then
        # logError "Extension is not compatible with the macOS VM export, please use YYC."
        echo "Steamworks with macOS VM export"
        rm "${YYoutputFolder}/libsteam_api.dylib"
        itemCopyTo "$SDK_SOURCE" "${YYoutputFolder}/libsteam_api.dylib"
        
        echo "Codesigning the dylibs with build sign identity..."
        codesign -s "${YYPLATFORM_option_mac_signing_identity}" -f --timestamp --verbose --options runtime "${YYoutputFolder}/libsteam_api.dylib"
        codesign -s "${YYPLATFORM_option_mac_signing_identity}" -f --timestamp --verbose --options runtime "${YYoutputFolder}/libSteamworks.dylib"
        
        # HACKFIX: please delete this ugly if-block later when no longer needed, it's only for macOS VM local runs.
        if [[ -z "$YYtargetFile" ]] || [[ "$YYtargetFile" == " " ]]; then
            YOYO_VM_APP="${YYruntimeLocation}/mac/YoYo Runner.app"
            TMP_PLIST="/tmp/yysteamworks${RANDOM}.plist"
            echo "VM RunTest YoYo Runner location is ${YOYO_VM_APP}"
            echo "Writing entitlements plist to ${TMP_PLIST} for codesigning"
            echo -e "$PLIST">"${TMP_PLIST}"
            codesign -s "${YYPLATFORM_option_mac_signing_identity}" -f --deep --timestamp --verbose --options runtime --entitlements "${TMP_PLIST}" "${YOYO_VM_APP}"
            rm -f "${TMP_PLIST}"
        fi
    else
        itemCopyTo "$SDK_SOURCE" "${YYprojectName}/${YYprojectName}/Supporting Files/libsteam_api.dylib"
        echo "Patching the Xcode project..."
        echo -e "$PLIST">"${YYprojectName}/${YYprojectName}/Supporting Files/${YYprojectName}.entitlements"
        # KEEP TABS IN THESE LINES AS-IS, THEY ARE IMPORTANT FOR SED TO FUNCTION!
        # Enable hardened runtime
        sed -i '' 's/				EXCLUDED_ARCHS = /				ENABLE_HARDENED_RUNTIME = YES;\n				EXCLUDED_ARCHS = /g' "${YYprojectName}/${YYprojectName}.xcodeproj/project.pbxproj"
        # Force disable .Sandbox and .InAppPurchases
        sed -i '' 's/						        enabled = 1;/						        enabled = 0;/g' "${YYprojectName}/${YYprojectName}.xcodeproj/project.pbxproj"
        # Exclude StoreKit from the project
        sed -i '' 's:		831BBFDC15C83806007085F8 /\* StoreKit.framework in Frameworks \*/ = {isa = PBXBuildFile; fileRef = 831BBFDB15C83806007085F8 /\* StoreKit.framework \*/; settings = {ATTRIBUTES = (Weak, ); }; };::g' "${YYprojectName}/${YYprojectName}.xcodeproj/project.pbxproj"
        sed -i '' 's:		831BBFDB15C83806007085F8 /\* StoreKit.framework \*/ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = StoreKit.framework; path = System/Library/Frameworks/StoreKit.framework; sourceTree = SDKROOT; };::g' "${YYprojectName}/${YYprojectName}.xcodeproj/project.pbxproj"
        sed -i '' 's:				831BBFDC15C83806007085F8 /\* StoreKit.framework in Frameworks \*/,::g' "${YYprojectName}/${YYprojectName}.xcodeproj/project.pbxproj"
        sed -i '' 's:				831BBFDB15C83806007085F8 /\* StoreKit.framework \*/,::g' "${YYprojectName}/${YYprojectName}.xcodeproj/project.pbxproj"
        echo "Xcode project patch done."
    fi
}

setupLinux() {

    SDK_SOURCE="$SDK_PATH/redistributable_bin/linux64/libsteam_api.so"
    assertFileHashEquals $SDK_SOURCE $SDK_HASH_LINUX "$ERROR_SDK_HASH"

    echo "Copying Linux (64 bit) dependencies"
    
    fileExtract "${YYprojectName}.zip" "_temp"
    [[ ! -f "_temp/assets/libsteam_api.so" ]] && itemCopyTo "$SDK_SOURCE" "_temp/assets/libsteam_api.so"
    folderCompress "_temp" "${YYprojectName}.zip"
    rm -r _temp
}

# ######################################################################################
# Script Logic

# Always init the script
scriptInit

# Version locks
optionGetValue "versionStable" RUNTIME_VERSION_STABLE
optionGetValue "versionBeta" RUNTIME_VERSION_BETA
optionGetValue "versionDev" RUNTIME_VERSION_DEV
optionGetValue "versionLTS" RUNTIME_VERSION_LTS

# SDK Hash
optionGetValue "sdkHashWin" SDK_HASH_WIN
optionGetValue "sdkHashMac" SDK_HASH_OSX
optionGetValue "sdkHashLinux" SDK_HASH_LINUX

# SDK Path
optionGetValue "sdkPath" SDK_PATH
optionGetValue "sdkVersion" SDK_VERSION

# Debug Mode
optionGetValue "debug" DEBUG_MODE

# Error String
ERROR_SDK_HASH="Invalid Steam SDK version, sha256 hash mismatch (expected v$SDK_VERSION)."

# Checks IDE and Runtime versions
versionLockCheck "$YYruntimeVersion" $RUNTIME_VERSION_STABLE $RUNTIME_VERSION_BETA $RUNTIME_VERSION_DEV $RUNTIME_VERSION_LTS

# Resolve the SDK path (must exist)
pathResolveExisting "$YYprojectDir" "$SDK_PATH" SDK_PATH

# Ensure we are on the output path
pushd "$YYoutputFolder" >/dev/null

# Call setup method depending on the platform
# NOTE: the setup method can be (:setupmacOS or :setupLinux)
setup$YYPLATFORM_name

# If debug is set to 'Enabled' provide a warning to the user.
if [ "$DEBUG_MODE" = "Enabled" ]; then
    logWarning "Debug mode is set to 'Enabled', make sure to set it to 'Auto' before publishing."
fi

popd >/dev/null

exit 0
