#!/bin/bash

# ######################################################################################
# Auxiliar Functions

# Sets a string to uppercase
toUpper() { # str result
    export $2=$(echo $1 | tr '[:lower:]' '[:upper:]')
}

# Extracts the full folder path from a filepath
pathExtractDirectory() { # fullpath result
    export $2="$(dirname "$1")"
}

# Extracts the parent folder from a path
pathExtractBase() { # fullpath result
    export $2="$(basename $(dirname "$1"))"
}

# Resolves a relative path if required
pathResolve() { # basePath relativePath result
    pushd "$1" >/dev/null
    export $3=$(readlink -f "$2")
    popd >/dev/null
}

# Resolves an existing relative path if required (handles errors)
pathResolveExisting() { # basePath relativePath result
    pathResolve "$1" "$2" loc_test
    export $3=$loc_test
    [[ ! -e "$loc_test" ]] && errorPathInexistant "$2"
    unsetVars loc_test
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
    setWithDefault loc_identifier $(basename -- "$1") $3
    fileGetHash "$1" loc_output
    shopt -s nocasematch
    case "$loc_output" in
    $2 ) return;;
    *) echo errorHashMismatch "$loc_identifier";;
    esac
    unsetVars loc_identifier loc_output
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

# Asserts an exact version number
assertExactVersion() { # version reqVersion name
    setWithDefault loc_identifier "file" $3
    compareVersion "$1" "$2" loc_output
    [[ $loc_output != 0 ]] && errorExactVersion "$1" "$2" "$loc_identifier"
    unsetVars loc_identifier loc_output
}

# Asserts a minimum version number
assertMinVersion() { # version minVersion name
    setWithDefault loc_identifier "file" $3
    compareVersion "$1" "$2" loc_output
    [[ $loc_output == -1 ]] && errorMinVersion "$1" "$2" "$loc_identifier"
    unsetVars loc_identifier loc_output
}

# Sets a variable to a given value with default
setWithDefault() { # variable optional value
    export $1=$2
    [[ $# == 3 ]] && loc_name=$3
}

# Unsets a collection of variables
unsetVars() { # variables
    for var in "$@"
    do
        unset "$var"
    done
}

# Logs a information message
logInformation() { # message
    log "Information" "$1"
}

# Logs a warning message
logWarning() { # message
    log "Warning" "$1"
}

# Logs a error message
logError() { # message
    log "Error" "$1"
}

# Logs a message with a tag
log() { # tag message
    [[ -z $EXTENSION_NAME ]] && EXTENSION_NAME="UNKNOWN"
    echo [$EXTENSION_NAME] $1: $2
}


# ######################################################################################
# Error Messages

errorExactVersion() { # version reqVersion name
    logError "Invalid '$3' version, requires '$2' (got '$1')"
    exit 1
}

errorMinVersion() { # version minVersion name
    logError "Invalid '$3' version, requires at least '$2' (got '$1')"
    exit 1
}

errorHashMismatch() { # identifier
    logError "Invalid '$1' version, sha256 hash mismatch. Please check documentation."
    exit 1
}

errorPathInexistant() { # fullpath
    logError "Invalid path '$1' does not exist."
    exit 1
}

errorFileExtract() { # filepath identifier
    setWithDefault loc_identifier "file" $2
    logError "Failed to expand $loc_identifier '$1' (please file a bug on this issue)."
    exit 1
}

errorFolderCompress() { # folderpath identifier
    setWithDefault loc_identifier "folder" $2
    logError "Failed to compress $loc_identifier '$1' (please file a bug on this issue)."
    exit 1
}

errorDirectoryDelete() { # fullpath
    logError "Failed to delete folder '$1' (please file a bug on this issue)."
    exit 1
}

errorFileCopy() { # source destination
    logError "Failed to copy file '$1' to '$2' (please file a bug on this issue)."
    exit 1
}

