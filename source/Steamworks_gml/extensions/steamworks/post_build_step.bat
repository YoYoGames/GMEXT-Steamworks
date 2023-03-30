@echo off
set Utils="%~dp0scriptUtils.bat"

:: ######################################################################################
:: Script Logic

:: Always init the script
call %Utils% scriptInit

:: Version locks
call %Utils% optionGetValue "versionStable" RUNTIME_VERSION_STABLE
call %Utils% optionGetValue "versionBeta" RUNTIME_VERSION_BETA
call %Utils% optionGetValue "versionDev" RUNTIME_VERSION_DEV
call %Utils% optionGetValue "versionLTS" RUNTIME_VERSION_LTS

:: SDK Hash
call %Utils% optionGetValue "sdkHashWin" SDK_HASH_WIN
call %Utils% optionGetValue "sdkHashMac" SDK_HASH_OSX
call %Utils% optionGetValue "sdkHashLinux" SDK_HASH_LINUX

:: SDK Path
call %Utils% optionGetValue "sdkPath" SDK_PATH
call %Utils% optionGetValue "sdkVersion" SDK_VERSION

:: Debug Mode
call %Utils% optionGetValue "debug" DEBUG_MODE

:: Error String
set "ERROR_SDK_HASH=Invalid Steam SDK version, sha256 hash mismatch (expected v%SDK_VERSION%)."

:: Checks IDE and Runtime versions
call %Utils% versionLockCheck "%YYruntimeVersion%" %RUNTIME_VERSION_STABLE% %RUNTIME_VERSION_BETA% %RUNTIME_VERSION_DEV% %RUNTIME_VERSION_LTS%

:: Resolve the SDK path (must exist)
call %Utils% pathResolveExisting "%YYprojectDir%" "%SDK_PATH%" SDK_PATH

:: Ensure we are on the output path
pushd "%YYoutputFolder%"

:: Call setup method depending on the platform
:: NOTE: the setup method can be (:setupWindows, :setupMacOS or :setupLinux)
call :setup%YYPLATFORM_name%

:: If debug is set to 'Enabled' provide a warning to the user.
if "%DEBUG_MODE%" equ "Enabled" call %Utils% logWarning "Debug mode is set to 'Enabled', make sure to set it to 'Auto' before publishing."

popd

exit 0

:: ----------------------------------------------------------------------------------------------------
:setupWindows

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\win64\steam_api64.dll"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_WIN% "%ERROR_SDK_HASH%"

    echo "Copying Windows (64 bit) dependencies"
    if not exist "steam_api64.dll" call %Utils% itemCopyTo %SDK_SOURCE% "steam_api64.dll"

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupMacOS

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_OSX% "%ERROR_SDK_HASH%"

    echo "Copying macOS (64 bit) dependencies"
    if "%YYTARGET_runtime%" == "VM" (
        :: This is used for VM compilation
        call %Utils% logError "Extension is not compatible with the macOS VM export, please use YYC."
    ) else (
        :: This is used for YYC compilation
        call %Utils% itemCopyTo %SDK_SOURCE% "%YYprojectName: =_%\%YYprojectName: =_%\Supporting Files\libsteam_api.dylib"
    )
exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupLinux

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\linux64\libsteam_api.so"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_LINUX% "%ERROR_SDK_HASH%"

    echo "Copying Linux (64 bit) dependencies"
    
    call %Utils% fileExtract "%YYprojectName%.zip" "_temp\"
    if not exist "_temp\assets\libsteam_api.so" (
        call %Utils% itemCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.so"
        call %Utils% folderCompress "_temp" "%YYprojectName%.zip"
    )
    rmdir /s /q _temp

exit /b 0
