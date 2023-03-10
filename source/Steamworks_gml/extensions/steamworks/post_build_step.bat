@echo off

set LOG_LEVEL=0
set Utils="%~dp0scriptUtils.bat"

:: ######################################################################################
:: Script Logic

:: Version locks
call %Utils% optionGetValue "versionStable" RUNTIME_VERSION_STABLE
call %Utils% optionGetValue "versionBeta" RUNTIME_VERSION_BETA
call %Utils% optionGetValue "versionDev" RUNTIME_VERSION_DEV

:: SDK Hash
call %Utils% optionGetValue "sdkHashWin" SDK_HASH_WIN
call %Utils% optionGetValue "sdkHashMac" SDK_HASH_OSX
call %Utils% optionGetValue "sdkHashLinux" SDK_HASH_LINUX

:: SDK Path
call %Utils% optionGetValue "sdkPath" SDK_PATH
call %Utils% optionGetValue "sdkVersion" SDK_VERSION

:: Checks IDE and Runtime versions
call %Utils% versionCheckMin "%YYruntimeVersion%" %RUNTIME_VERSION_STABLE% %RUNTIME_VERSION_BETA% %RUNTIME_VERSION_DEV% runtime

:: Resolve the SDK path (must exist)
call %Utils% pathResolveExisting "%YYprojectDir%" "%SDK_PATH%" SDK_PATH

:: Check if debug mode is 'Enabled' else is 'Auto' (use YYTargetFile hacks)
set "DEBUG_MODE="
if "%YYEXTOPT_Steamworks_Debug%" == "Enabled" set DEBUG_MODE=1
if "%YYtargetFile%" == " " set DEBUG_MODE=1
if "%YYtargetFile%" == "" set DEBUG_MODE=1

:: Ensure we are on the output path
pushd "%YYoutputFolder%"

:: Call setup method depending on the platform
:: NOTE: the setup method can be (:setupWindows, :setupMacOS or :setupLinux)
call :setup%YYPLATFORM_name%

popd

exit %errorlevel%

:: ----------------------------------------------------------------------------------------------------
:setupWindows

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\win64\steam_api64.dll"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_WIN% "Steam SDK v%SDK_VERSION%"

    echo "Copying Windows (64 bit) dependencies"
    if not exist "steam_api64.dll" call %Utils% itemCopyTo %SDK_SOURCE% "steam_api64.dll"
   
    if defined DEBUG_MODE (
        echo "Running a Windows Steamworks game project inside the Windows IDE, enabling Debug..."
    )

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupMacOS

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_OSX% "Steam SDK v%SDK_VERSION%"

    echo "Copying macOS (64 bit) dependencies"
    if "%YYTARGET_runtime%" == "VM" (
        :: This is used for VM compilation
        call %Utils% fileExtract "%YYprojectName%.zip" "_temp\"
        call %Utils% itemCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.dylib"
        call %Utils% folderCompress "_temp" "%YYprojectName%.zip"

        rmdir /s /q _temp

    ) else (
        :: This is used for YYC compilation
        call %Utils% itemCopyTo %SDK_SOURCE% "%YYprojectName: =_%\%YYprojectName: =_%\Supporting Files\libsteam_api.dylib"
    )

    if defined DEBUG_MODE (
        echo "Running a macOS %YYTARGET_runtime% Steamworks game project inside the Windows IDE, enabling Debug..."
    )

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupLinux

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\linux64\libsteam_api.so"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_LINUX% "Steam SDK v%SDK_VERSION%"

    echo "Copying Linux (64 bit) dependencies"
    
    call %Utils% fileExtract "%YYprojectName%.zip" "_temp\"
    if not exist "assets\libsteam_api.so" (
        call %Utils% itemCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.so"
        call %Utils% folderCompress "_temp" "%YYprojectName%.zip"
    )

    if defined DEBUG_MODE (
        echo "Running a Linux Steamworks game project inside the Windows IDE, enabling Debug..."
    )

    rmdir /s /q _temp

exit /b 0
