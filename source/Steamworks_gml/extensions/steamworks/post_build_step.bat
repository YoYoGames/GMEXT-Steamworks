@echo off

set Utils="%~dp0\scriptUtils.bat"

:: ######################################################################################
:: Macros

call %Utils% pathExtractDirectory "%~0" SCRIPT_PATH
call %Utils% pathExtractBase "%~0" EXTENSION_NAME
call %Utils% toUpper "%EXTENSION_NAME%" EXTENSION_NAME

:: ######################################################################################
:: Script Logic

:: Version locks
set RUNTIME_VERSION_STABLE="2023.1.0.0"
set RUNTIME_VERSION_BETA="2023.100.0.0"
set RUNTIME_VERSION_DEV="9.9.1.293"

:: SDK version v1.55
set SDK_HASH_WIN="1DB3FD414039D3E5815A5721925DD2E0A3A9F2549603C6CAB7C49B84966A1AF3"
set SDK_HASH_OSX="88DC79403F68E81B6674C927ED362EF3CF69046F587ED009FDC6AD85D85E97F2"
set SDK_HASH_LINUX="C0CC3D2802E5F2463BFA0046C41D2F65A6335BAAEEFBBA6C7DBD5681D5CA7C46"

:: Checks IDE and Runtime versions
call %Utils% checkMinVersion "%YYruntimeVersion%" %RUNTIME_VERSION_STABLE% %RUNTIME_VERSION_BETA% %RUNTIME_VERSION_DEV% runtime

:: Resolve the SDK path (must exist)
set SDK_PATH=%YYEXTOPT_Steamworks_SteamSDK%
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

exit %ERRORLEVEL%

:: ----------------------------------------------------------------------------------------------------
:setupWindows

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\win64\steam_api64.dll"
    call %Utils% assertFileHash %SDK_SOURCE% %SDK_HASH_WIN% "Steam SDK"

    echo "Copying Windows (64 bit) dependencies"
    if not exist "steam_api64.dll" call %Utils% fileCopyTo %SDK_SOURCE% "steam_api64.dll"
   
    if defined DEBUG_MODE (
        echo "Running a Windows Steamworks game project inside the Windows IDE, enabling Debug..."
    )

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupMacOS

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call %Utils% assertFileHash %SDK_SOURCE% %SDK_HASH_OSX% "Steam SDK"

    echo "Copying macOS (64 bit) dependencies"
    if "%YYTARGET_runtime%" == "VM" (
        :: This is used from VM compilation
        call %Utils% fileExtract "%YYprojectName%.zip" "_temp\"
        call %Utils% fileCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.dylib"
        call %Utils% folderCompress "_temp\*" "%YYprojectName%.zip"

        rmdir /s /q _temp

    ) else (

        :: This is used from YYC compilation
        call %Utils% fileCopyTo %SDK_SOURCE% "%YYprojectName%\%YYprojectName%\Supporting Files\libsteam_api.dylib"
    )

    if defined DEBUG_MODE (
        echo "Running a macOS %YYTARGET_runtime% Steamworks game project inside the Windows IDE, enabling Debug..."
    )

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupLinux

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call %Utils% assertFileHash %SDK_SOURCE% %SDK_HASH_LINUX% "Steam SDK"

    echo "Copying Linux (64 bit) dependencies"
    
    call %Utils% fileExtract "%YYprojectName%.zip" "_temp\"
    if not exist "assets\libsteam_api.so" (
        call %Utils% fileCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.so"
        call %Utils% folderCompress "_temp\*" "%YYprojectName%.zip"
    )

    if defined DEBUG_MODE (
        echo "Running a Linux Steamworks game project inside the Windows IDE, enabling Debug..."
    )

    rmdir /s /q _temp

exit /b 0
