#!/bin/bash

sed -i -e 's/\r$//' "$(dirname "$0")/scriptUtils.sh"
chmod +x "$(dirname "$0")/scriptUtils.sh"
source "$(dirname "$0")/scriptUtils.sh"

# ######################################################################################
# Script Functions

setupmacOS() {

    SDK_SOURCE="$SDK_PATH/redistributable_bin/osx/libsteam_api.dylib"
    assertFileHashEquals $SDK_SOURCE $SDK_HASH_OSX "$ERROR_SDK_HASH"

    for f in "${SDK_SOURCE}"; do
        # Skip empty vars
        [ -n "$f" ] || continue

        if [ ! -e "$f" ]; then
            logWarning "Not found: $f"
            continue
        fi

        if xattr -p com.apple.quarantine "$f" >/dev/null 2>&1; then
            logWarning "'$(basename "$f")' is quarantined. Removing com.apple.quarantine…"
            if xattr -d com.apple.quarantine "$f" >/dev/null 2>&1; then
                logInformation "Removed quarantine from '$f'"
            else
                logError "Failed to remove quarantine from '$f' (permissions/path?)."
            fi
        fi
    done

    echo "Copying macOS (64 bit) dependencies"

    if [[ "$YYTARGET_runtime" == "VM" ]]; then

        # Assert if xcode-tools are installed (required)
        assertXcodeToolsInstalled

        # Code sign the original library binary
        codesign -s "${YYPLATFORM_option_mac_signing_identity}" -f --timestamp --verbose --options runtime "./libSteamworks.dylib"

        # Copy and code sign dependencies
        itemCopyTo "$SDK_SOURCE" "./libsteam_api.dylib"
        codesign -s "${YYPLATFORM_option_mac_signing_identity}" -f --timestamp --verbose --options runtime "./libsteam_api.dylib"

        # If there is an extra game.zip file here then this is a package command
        # Update the libraries inside the zip file (used for packaging)
        if [ -f "./game.zip" ]; then
            TEMP_FOLDER="${YYprojectName}___temp___"

            mkdir "./${TEMP_FOLDER}"

            itemCopyTo "./libSteamworks.dylib" "${TEMP_FOLDER}/assets/libSteamworks.dylib"
            itemCopyTo "./libsteam_api.dylib" "${TEMP_FOLDER}/assets/libsteam_api.dylib"
    
            zipUpdate "${TEMP_FOLDER}" "game.zip"
            rm -r ${TEMP_FOLDER}
        fi


        logError "Extension is not compatible with the macOS VM export, please use YYC."
    else
        # When running from CI the 'YYprojectName' will not be set use 'YYprojectPath' instead.
        if [ -z "$YYprojectName" ]; then
            YYprojectName=$(basename "${YYprojectPath%.*}")
        fi

        # Replace spaces with underscores (this matches the assetcompiler output)
        YYfixedProjectName="${YYprojectName// /_}"

        itemCopyTo "$SDK_SOURCE" "${YYfixedProjectName}/${YYfixedProjectName}/Supporting Files/libsteam_api.dylib"
    fi
}

setupLinux() {

    SDK_SOURCE="$SDK_PATH/redistributable_bin/linux64/libsteam_api.so"
    assertFileHashEquals $SDK_SOURCE $SDK_HASH_LINUX "$ERROR_SDK_HASH"

    echo "Copying Linux (64 bit) dependencies"
    
    # When running from CI the 'YYprojectName' will not be set use 'YYprojectPath' instead.
    if [ -z "$YYprojectName" ]; then
        YYprojectName=$(basename "${YYprojectPath%.*}")
    fi

    # Replace spaces with underscores (this matches the assetcompiler output)
    YYfixedProjectName="${YYprojectName// /_}"

    TEMP_FOLDER="${YYprojectName}___temp___"

    # Update the zip file with the required SDKs
    mkdir "./${TEMP_FOLDER}"
    itemCopyTo "$SDK_SOURCE" "${TEMP_FOLDER}/assets/libsteam_api.so"
    zipUpdate "${TEMP_FOLDER}" "${YYprojectName}.zip"
    rm -r ${TEMP_FOLDER}
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
