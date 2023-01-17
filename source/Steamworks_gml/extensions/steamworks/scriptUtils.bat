@echo off

shift & goto :%~1

:: ######################################################################################
:: Auxiliar Functions

:: Sets a string to uppercase
:toUpper str result
    for /f "usebackq delims=" %%I in (`powershell '%~1'.toUpper^(^)`) do set "%~2=%%~I"
exit /b 0

:: Extracts the full folder path from a filepath
:pathExtractDirectory fullpath result
    set "%~2=%~dp1"
exit /b 0

:: Extracts the parent folder path from a filepath
:pathExtractBase fullpath result
    for %%I in ("%~dp1\.") do set "%~2=%%~nI%%~xI"
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
:assertFileHash pathToFile hash identifier
    set loc_identifier=%~nx1
    if "%~3" neq "" ( set loc_identifier=%~3 )
    call :fileGetHash "%~1" loc_result
    if "%loc_result%" neq "%~2" call :errorHashMismatch "%loc_identifier%"
    set "loc_identifier="
    set "loc_result="
exit /b 0

:: Compares two version numbers (major.minor.build.rev) and saves result into variable
:compareVersions version1 version2 result
    for /f "tokens=* usebackq" %%F in (`powershell -NoLogo -NoProfile -Command ^([System.Version]'%~1'^).compareTo^([System.Version]'%~2'^)`) do ( set "%~3=%%F" )
exit /b 0

:: Checks minimum product version for the 3 available builds (handles errors)
:checkMinVersion current stable beta develop identifier
    call :compareVersions "%~1" "%~3" loc_result
    if %loc_result% geq 0 exit /b 0
    call :compareVersions "%~1" "%~2" loc_result
    if %loc_result% geq 0 exit /b 0
    call :compareVersions "%~1" "%~4" loc_result
    if %loc_result% geq 0 exit /b 0
    call :errorMinVersion "%~1" "STABLE v%~2 or BETA v%~3" "%~5"
exit /b 0

:: Asserts an exact version number
:assertExactVersion version reqVersion identifier
    set loc_identifier=file
    if "%~3" neq "" ( set loc_identifier=%~3 )
    call :compareVersions "%~1" "%~2" loc_result
    if %loc_result% neq 0 call :errorExactVersion "%1" "%2" "%loc_identifier%"
    set "loc_identifier="
    set "loc_result="
exit /b 0

:: Asserts a minimum version number
:assertMinVersion version minVersion identifier
    set loc_identifier=file
    if "%~3" neq "" ( set loc_identifier=%~3 )
    call :compareVersions "%~1" "%~2" loc_result 
    if %loc_result% equ -1 call :errorMinVersion "%1" "%2" "%loc_identifier%"
    set "loc_identifier="
    set "loc_result="
exit /b 0

:: Sets a variable to a given value with default
:setWithDefault variable optional value
    set "%~1=%~2"
    if "%~3" neq "" ( set "%~1=%~3" )
exit /b 0

:unsetVars variables
    for %%x in (%*) do ( set "%%~x=" )
exit /b 0

:logInformation message
    call :log "Information" "%~1"
exit /b 0

:logWarning message
    call :log "Warning" "%~1"
exit /b 0

:logError message
    call :log "Error" "%~1"
exit /b 0

:log tag message
    echo [%EXTENSION_NAME%] %~1: %~2
exit /b 0

:: ######################################################################################
:: Error Messages

:errorExactVersion version reqVersion identifier
    call :logError "Invalid '%~3' version, requires '%~2' (got '%~1')"
exit 1

:errorMinVersion version minVersion identifier
    call :logError "Invalid '%~3' version, requires at least '%~2' (got '%~1')"
exit 1

:errorHashMismatch identifier
    call :logError "Invalid '%~1' version, sha256 hash mismatch. Please check documentation."
exit 1

:errorPathInexistant fullpath
    call :logError "Invalid path '%~1%' does not exist."
exit 1

:errorFileExtract filepath identifier
    call :pathResolve "%~1" loc_fullpath
    call :setWithDefault loc_identifier "file" "%~2"
    call :logError "Failed to expand %loc_identifier% '%loc_fullpath%' (please file a bug on this issue)."
    call :unsetVars loc_fullpath loc_identifier
exit 1

:errorFolderCompress folderpath identifier
    call :pathResolve "%~1" loc_fullpath
    call :setWithDefault loc_identifier "folder" "%~2"
    call :logError "Failed to compress %loc_identifier% '%loc_fullpath%' (please file a bug on this issue)."
    call :unsetVars loc_fullpath loc_identifier
exit 1

:errorDirectoryDelete fullpath
    call :pathResolve "%~1" fullpath
    call :logError "Failed to delete folder '%fullpath%' (please file a bug on this issue)."
exit 1

:errorFileCopy source destination
    call :logError "Failed to copy file '%~1' to '%~2' (please file a bug on this issue)."
exit 1

