#!/bin/bash

# ######################################################################################
# Auxiliar Functions

# Checks minimum product version for the 3 available builds (handles errors)
checkMinVersion() { # current stable beta develop identifier
    compareVersions "$1" "$3" result
    [[ "$result" -ge "0" ]] && return
    compareVersions "$1" "$2" result
    [[ "$result" -ge "0" ]] && return
    compareVersions "$1" "$4" result
    [[ "$result" -ge "0" ]] && return
    errorMinVersion "$1" "STABLE v$2 or BETA v$3" "$5"
}

# Resolves a relative path if required
pathResolve() { # basePath relativePath result
    pushd "$1" >/dev/null
    if [[ -d "$2" ]]
    then
        cd "$2" >/dev/null
        export $3="$(pwd)" && popd >/dev/null
    elif [[ -e "$2" ]]
    then
        cd "$(dirname "$2")" >/dev/null
        export $3="$(pwd)/$(basename "$2")" && popd >/dev/null
    fi
}

# Resolves an existing relative path if required (handles errors)
pathResolveExisting() { # basePath relativePath result
    pushd "$1" >/dev/null
    [[ ! -d "$2" ]] && errorPathInexistant "$2"
    popd >/dev/null

    local loc_test
    pathResolve "$1" "$2" loc_test
    export $3=$loc_test
}

# Copies file to provided location (handles errors)
fileCopyTo() { # srcFile destFolder
    cp -fr "$1" "$2"
    [[ $? != 0 ]] && errorFileCopy "$1" "$2"
}

# Extracts a zip file to a folder (handles errors)
fileExtract() { # srcFile destFolder identifier
    unzip $1.zip -d "$2"
    [[ $? != 0 ]] && errorFileExtract "$1" "$2" "$3"
}

# Compresses folder into a zip file (handles errors)
folderCompress() { # srcFolder destFile identifier
    zip -FS -j -r "$2" "$1/*"
    [[ $? != 0 ]] && errorFolderCompress "$1" "$2" "$3"
}

# Generates a SHA256 hash of a file and stores it into a variable
fileGetHash() { # pathToBinary
    export $2=$(shasum -a 256 "$1" | cut -d ' ' -f 1)
}

# Asserts a file hash
assertFileHash() { # pathToBinary hash name
    local loc_name=$(basename -- "$1")
    [[ $# == 3 ]] && loc_name="$3"
    local loc_output
    fileGetHash "$1" loc_output
    shopt -s nocasematch
    case "$loc_output" in
    $2 ) return;;
    *) echo errorHashMismatch "$loc_name";;
    esac
}

# Compares two version numbers and saves result into variable
compareVersions() { # version1 version2 result
    if [[ $1 == $2 ]]
    then
        export $3=0 && return 0
    fi
    local IFS=.
    local i ver1=($1) ver2=($2)
    # fill empty fields in ver1 with zeros
    for ((i=${#ver1[@]}; i<${#ver2[@]}; i++))
    do
        ver1[i]=0
    done

    for ((i=0; i<${#ver1[@]}; i++))
    do
        if [[ -z ${ver2[i]} ]]
        then
            # fill empty fields in ver2 with zeros
            ver2[i]=0
        fi
        if ((10#${ver1[i]} > 10#${ver2[i]}))
        then
            export $3=1 && return 0
        fi
        if ((10#${ver1[i]} < 10#${ver2[i]}))
        then
            export $3=-1 && return 0
        fi
    done
    export $3=0 %% return 0
}

# Asserts an exact version number
assertExactVersion() { # version reqVersion name
    local loc_name="file"
    [[ $# == 3 ]] && loc_name=$3
    local loc_output
    compareVersion "$1" "$2" loc_output
    [[ $loc_output != 0 ]] && errorExactVersion "$1" "$2" "$loc_name"
}

# Asserts a minimum version number
assertMinVersion() { # version minVersion name
    local loc_name="file"
    [[ $# == 3 ]] && loc_name=$3
    local loc_output
    compareVersion "$1" "$2" loc_output
    [[ $loc_output == -1 ]] && errorMinVersion "$1" "$2" "$loc_name"
}

# ######################################################################################
# Error Messages

errorExactVersion() { # version reqVersion name
    echo "########################################## ERROR ##########################################"
    echo "# Invalid '$3' version, requires '$2' (got '$1')"
    echo "###########################################################################################"
    exit 1
}

errorMinVersion() { # version minVersion name
    echo "########################################## ERROR ##########################################"
    echo "# Invalid '$3' version, requires at least '$2' (got '$1')"
    echo "###########################################################################################"
    exit 1
}

errorHashMismatch() { # identifier
    echo "########################################## ERROR ##########################################"
    echo "# Invalid '$1' version, sha256 hash mismatch. Please check documentation."
    echo "###########################################################################################"
    exit 1
}

errorPathInexistant() { # fullpath
    echo "########################################## ERROR ##########################################"
    echo "# Invalid path '$1' does not exist."
    echo "###########################################################################################"
    exit 1
}

errorFileExtract() { # filepath identifier
    local loc_name="file"
    [[ $# == 2 ]] && loc_name=$2
    echo "########################################## ERROR ##########################################"
    echo "# Failed to expand $loc_name '$1' (please file a bug on this issue)."
    echo "###########################################################################################"
    exit 1
}

errorFolderCompress() { # folderpath identifier
    local loc_name="folder"
    [[ $# == 2 ]] && loc_name=$2
    echo "########################################## ERROR ##########################################"
    echo "# Failed to compress $loc_name '$1' (please file a bug on this issue)."
    echo "###########################################################################################"
    exit 1
}

errorDirectoryDelete() { # fullpath
    echo "########################################## ERROR ##########################################"
    echo "# Failed to delete folder '$1' (please file a bug on this issue)."
    echo "###########################################################################################"
    exit 1
}

errorFileCopy() { # source destination
    echo "########################################## ERROR ##########################################"
    echo "# Failed to copy file '$1' to '$2' (please file a bug on this issue)."
    echo "###########################################################################################"
    exit 1
}

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

# Version locks
RUNTIME_VERSION_STABLE="2023.1.0.0"
RUNTIME_VERSION_BETA="2023.100.0.0"
RUNTIME_VERSION_DEV="9.9.1.293"

# SDK version v1.55
SDK_HASH_WIN="1DB3FD414039D3E5815A5721925DD2E0A3A9F2549603C6CAB7C49B84966A1AF3"
SDK_HASH_OSX="88DC79403F68E81B6674C927ED362EF3CF69046F587ED009FDC6AD85D85E97F2"
SDK_HASH_LINUX="C0CC3D2802E5F2463BFA0046C41D2F65A6335BAAEEFBBA6C7DBD5681D5CA7C46"

# Checks IDE and Runtime versions
checkMinVersion "$YYruntimeVersion" $RUNTIME_VERSION_STABLE $RUNTIME_VERSION_BETA $RUNTIME_VERSION_DEV runtime

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

