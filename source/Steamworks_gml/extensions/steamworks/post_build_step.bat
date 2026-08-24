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
:: NOTE: skipped under GMRT (the new runner). GMRT does not report a legacy GameMaker runtime version
:: in 'YYruntimeVersion', so these 2022/2023-era locks can never be satisfied there - versionLockCheck
:: would fall into the LTS branch and logError out (hard 'exit 1'), killing this script before any
:: dependency is staged.
if not "%YYTARGET_runtime%" == "GMRT" (
    call %Utils% versionLockCheck "%YYruntimeVersion%" %RUNTIME_VERSION_STABLE% %RUNTIME_VERSION_BETA% %RUNTIME_VERSION_DEV% %RUNTIME_VERSION_LTS%
)

:: Resolve the SDK path (must exist)
call %Utils% pathResolveExisting "%YYprojectDir%" "%SDK_PATH%" SDK_PATH

:: Ensure we are on the output path
:: NOTE: GMRT (the new runner) expects the dependencies inside the 'build\assets' folder
if "%YYTARGET_runtime%" == "GMRT" (
    pushd "%YYoutputFolder%\build\assets"
) else (
    pushd "%YYoutputFolder%"
)

:: Call setup method depending on the platform
:: NOTE: the setup method can be (:setupWindows, :setupMacOS, :setupMac [GMRT] or :setupLinux)
call :setup%YYPLATFORM_name%

:: Capture the dispatch result before anything else can reset it (a missing :setup<platform> label or a
:: failed itemCopyTo is non-fatal to cmd, so it must be propagated explicitly - see the exit below).
set "SETUP_RESULT=%ERRORLEVEL%"

:: If debug is set to 'Enabled' provide a warning to the user.
if "%DEBUG_MODE%" equ "Enabled" call %Utils% logWarning "Debug mode is set to 'Enabled', make sure to set it to 'Auto' before publishing."

popd

:: Report the real result. A hard 'logError' already terminates this script with 1, but a missing platform
:: label or a failed copy does not - 'exit 0' used to swallow both and report a clean build.
exit %SETUP_RESULT%

:: ----------------------------------------------------------------------------------------------------
:setupWindows

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\win64\steam_api64.dll"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_WIN% "%ERROR_SDK_HASH%"

    echo "Copying Windows (64 bit) dependencies"
    call %Utils% itemCopyTo %SDK_SOURCE% "steam_api64.dll"

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupMacOS

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_OSX% "%ERROR_SDK_HASH%"

    echo "Copying macOS (64 bit) dependencies"

    if "%YYTARGET_runtime%" == "VM" (
        :: VM is only supported when building from a macOS host (post_build_step.sh's setupmacOS), which
        :: is the only place 'codesign' exists - the VM path stages both dylibs into the game zip and has
        :: to sign them. From a Windows host there is no way to sign, so VM stays rejected here.
        call %Utils% logError "Extension is not compatible with the macOS VM export from a Windows host, please use YYC."
    ) else (
        setlocal enabledelayedexpansion

        :: When running from CI the 'YYprojectName' will not be set use 'YYprojectPath' instead.
        if "%YYprojectName%"=="" (
            for %%A in ("%YYprojectPath%") do set "YYprojectName=%%~nA"
        )
        :: Replace spaces with underscores (this matches the assetcompiler output)
        set YYfixedProjectName=!YYprojectName: =_!

        :: This is used for YYC compilation
        call %Utils% itemCopyTo %SDK_SOURCE% "!YYfixedProjectName!\!YYfixedProjectName!\Supporting Files\libsteam_api.dylib"
        endlocal
    )
exit /b 0

:: ----------------------------------------------------------------------------------------------------
:: GMRT (the new runner) variant of the macOS setup. Under GMRT the platform name is 'Mac' (legacy is
:: 'macOS', which dispatches to :setupMacOS above) and the dependency goes bare into the output
:: 'build\assets' folder we already pushd'd into. No code signing here - that only happens on a macOS
:: host, via post_build_step.sh's setupMac().
:setupMac

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_OSX% "%ERROR_SDK_HASH%"

    echo "Copying macOS (64 bit) dependencies (GMRT)"
    call %Utils% itemCopyTo %SDK_SOURCE% "libsteam_api.dylib"

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupLinux

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\linux64\libsteam_api.so"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_LINUX% "%ERROR_SDK_HASH%"

    echo "Copying Linux (64 bit) dependencies"

    setlocal enabledelayedexpansion

    :: When running from CI the 'YYprojectName' will not be set use 'YYprojectPath' instead.
    if "%YYprojectName%"=="" (
        for %%A in ("%YYprojectPath%") do set "YYprojectName=%%~nA"
    )

    :: Update the zip file with the required SDKs
    mkdir _temp\assets
    call %Utils% itemCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.so"
    call %Utils% zipUpdate "_temp" "!YYprojectName!.zip"
    rmdir /s /q _temp

    endlocal

exit /b 0
