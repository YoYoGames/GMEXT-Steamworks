@echo off

goto :start

:: ######################################################################################
:: Auxiliar Functions

:: Checks minimum product version for the 3 available builds (handles errors)
:checkMinVersion current stable beta develop identifier
call :compareVersions "%~1" "%~3" result
if %result% geq 0 exit /b 0
call :compareVersions "%~1" "%~2" result
if %result% geq 0 exit /b 0
call :compareVersions "%~1" "%~4" result
if %result% geq 0 exit /b 0
call :errorMinVersion "%~1" "STABLE v%~2 or BETA v%~3" "%~5"
exit /b 0

:: Resolves a relative path if required
:pathResolve basePath relativePath result
for /f "delims=" %%i in ('powershell -Command "Push-Location %~1; $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath('%~2'); Pop-Location;"') do set "%~3=%%i"
exit /b 0

:: Resolves an existing relative path if required (handles errors)
:pathResolveExisting basePath relativePath result
call :pathResolve "%~1" "%~2" test
set "%~3=%test%"
if not exist "%test%" call :errorPathInexistant "%test%"
set "test="
exit /b 0

:: Copies file to provided location (handles errors)
:fileCopyTo srcFile destFolder
powershell -NoLogo -NoProfile -Command Copy-Item -Path '%~1' -Destination '%~2' -Force && echo "Finished copying '%~nx1' to '%~2'"
if ERRORLEVEL 1 call :errorFileCopy "%~1" "%~2"
exit /b 0

:: Extracts a zip file to a folder (handles errors)
:fileExtract srcFile destFolder identifier
powershell Expand-Archive '%~1' '%~2'
if ERRORLEVEL 1 call :errorFileExtract "%~1" "%~2" "%~3"
exit /b 0

:: Compresses folder into a zip file (handles errors)
:folderCompress srcFolder destFile identifier
powershell Compress-Archive -Force '%~1' '%~2'
if ERRORLEVEL 1 call :errorFolderCompress "%~1" "%~2" "%~2"
exit /b 0

:: Generates a SHA256 hash of a file and stores it into a variable
:fileGetHash pathToFile result
for /f "tokens=* usebackq" %%F in (`powershell -NoLogo -NoProfile -Command ^(Get-FileHash '%~1'^)[0].Hash`) do ( set "%~2=%%F" )
exit /b 0

:: Asserts a file hash
:assertFileHash pathToFile hash name
setlocal
set name=%~nx1
if "%~3" neq "" ( set name=%~3 )
call :fileGetHash "%~1" result
if "%result%" neq "%~2" call :errorHashMismatch "%name%"
endlocal
exit /b 0

:: Compares two version numbers and saves result into variable
:compareVersions version1 version2 result
for /f "tokens=* usebackq" %%F in (`powershell -NoLogo -NoProfile -Command ^([System.Version]'%~1'^).compareTo^([System.Version]'%~2'^)`) do ( set "%~3=%%F" )
exit /b 0

:: Asserts an exact version number
:assertExactVersion version reqVersion name
setlocal
set name=file
if "%~3" neq "" ( set name=%~3 )
call :compareVersions "%~1" "%~2" result
if %result% neq 0 call :errorExactVersion "%1" "%2" "%3"
endlocal
exit /b 0

:: Asserts a minimum version number
:assertMinVersion version minVersion name
setlocal
set name=file
if "%~3" neq "" ( set name=%~3 )
call :compareVersions "%~1" "%~2" result 
if %result% equ -1 call :errorMinVersion "%1" "%2" "%3"
endlocal
exit /b 0

:: ######################################################################################
:: Error Messages

:errorExactVersion version reqVersion name
echo "########################################## ERROR ##########################################"
echo "# Invalid '%~3' version, requires '%~2' (got '%~1')"
echo "###########################################################################################"
exit 1

:errorMinVersion version minVersion name
echo "########################################## ERROR ##########################################"
echo "# Invalid '%~3' version, requires at least '%~2' (got '%~1')"
echo "###########################################################################################"
exit 1

:errorHashMismatch identifier
echo "########################################## ERROR ##########################################"
echo "# Invalid '%~1' version, sha256 hash mismatch. Please check documentation."
echo "###########################################################################################"
exit 1

:errorPathInexistant fullpath
echo "########################################## ERROR ##########################################"
echo "# Invalid path '%~1%' does not exist."
echo "###########################################################################################"
exit 1

:errorFileExtract filepath identifier
setlocal
call :pathResolve "%~1" fullpath
set identifier=file
if "%~2" neq "" ( set identifier=%~2 )
echo "########################################## ERROR ##########################################"
echo "# Failed to expand %identifier% '%fullpath%' (please file a bug on this issue)."
echo "###########################################################################################"
endlocal
exit 1

:errorFolderCompress folderpath identifier
call :pathResolve "%~1" fullpath
set identifier=folder
if "%~2" neq "" ( set identifier=%~2 )
echo "########################################## ERROR ##########################################"
echo "# Failed to compress %identifier% '%fullpath%' (please file a bug on this issue)."
echo "###########################################################################################"
exit 1

:errorDirectoryDelete fullpath
call :pathResolve "%~1" fullpath
echo "########################################## ERROR ##########################################"
echo "# Failed to delete folder '%fullpath%' (please file a bug on this issue)."
echo "###########################################################################################"
exit 1

:errorFileCopy source destination
echo "########################################## ERROR ##########################################"
echo "# Failed to copy file '%~1' to '%~2' (please file a bug on this issue)."
echo "###########################################################################################"
exit 1

:: ######################################################################################
:: Script Logic

:start

:: Version locks
set RUNTIME_VERSION_STABLE="2023.1.0.0"
set RUNTIME_VERSION_BETA="2023.100.0.0"
set RUNTIME_VERSION_DEV="9.9.1.293"

:: SDK version v1.55
set SDK_HASH_WIN="1DB3FD414039D3E5815A5721925DD2E0A3A9F2549603C6CAB7C49B84966A1AF3"
set SDK_HASH_OSX="88DC79403F68E81B6674C927ED362EF3CF69046F587ED009FDC6AD85D85E97F2"
set SDK_HASH_LINUX="C0CC3D2802E5F2463BFA0046C41D2F65A6335BAAEEFBBA6C7DBD5681D5CA7C46"

:: Checks IDE and Runtime versions
call :checkMinVersion "%YYruntimeVersion%" %RUNTIME_VERSION_STABLE% %RUNTIME_VERSION_BETA% %RUNTIME_VERSION_DEV% runtime

:: Resolve the SDK path (must exist)
set SDK_PATH=%YYEXTOPT_Steamworks_SteamSDK%
call :pathResolveExisting "%YYprojectDir%" "%SDK_PATH%" SDK_PATH

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

exit 0

:: ----------------------------------------------------------------------------------------------------
:setupWindows

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\win64\steam_api64.dll"
    call :assertFileHash %SDK_SOURCE% %SDK_HASH_WIN% "Steam SDK"

    echo "Copying Windows (64 bit) dependencies"
    if not exist "steam_api64.dll" call :fileCopyTo %SDK_SOURCE% "steam_api64.dll"
   
    if defined DEBUG_MODE (
        echo "Running a Windows Steamworks game project inside the Windows IDE, enabling Debug..."
    )

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupMacOS

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call :assertFileHash %SDK_SOURCE% %SDK_HASH_OSX% "Steam SDK"

    echo "Copying macOS (64 bit) dependencies"
    if "%YYTARGET_runtime%" == "VM" (
        :: This is used from VM compilation
        call :fileExtract "%YYprojectName%.zip" "_temp\"
        call :fileCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.dylib"
        call :folderCompress "_temp\*" "%YYprojectName%.zip"

        rmdir /s /q _temp

    ) else (

        :: This is used from YYC compilation
        call :fileCopyTo %SDK_SOURCE% "%YYprojectName%\%YYprojectName%\Supporting Files\libsteam_api.dylib"
    )

    if defined DEBUG_MODE (
        echo "Running a macOS %YYTARGET_runtime% Steamworks game project inside the Windows IDE, enabling Debug..."
    )

exit /b 0

:: ----------------------------------------------------------------------------------------------------
:setupLinux

    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call :assertFileHash %SDK_SOURCE% %SDK_HASH_LINUX% "Steam SDK"

    echo "Copying Linux (64 bit) dependencies"
    
    call :fileExtract "%YYprojectName%.zip" "_temp\"
    if not exist "assets\libsteam_api.so" (
        call :fileCopyTo %SDK_SOURCE% "_temp\assets\libsteam_api.so"
        call :folderCompress "_temp\*" "%YYprojectName%.zip"
    )

    if defined DEBUG_MODE (
        echo "Running a Linux Steamworks game project inside the Windows IDE, enabling Debug..."
    )

    rmdir /s /q _temp

exit /b 0
