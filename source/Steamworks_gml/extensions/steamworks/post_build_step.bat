@echo off
:: fix weird error encoding stuff for non-Latin alphabets
chcp 65001
setlocal EnableDelayedExpansion
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
    
    if "%YYPLATFORM_option_mac_build_app_store%" == "True" (
        call %Utils% logError "Build for App Store is not supported by Steamworks, please disable it or use a Config."
        exit /b 1
    )
    
    if "%YYPLATFORM_option_mac_apple_sign_in%" == "True" (
        call %Utils% logError "Apple SignIn is not supported by Steamworks, please disable it or use a Config."
        exit /b 1
    )
    
    set SDK_SOURCE="%SDK_PATH%\redistributable_bin\osx\libsteam_api.dylib"
    call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_OSX% "%ERROR_SDK_HASH%"

    echo "Copying macOS (64 bit) dependencies"
    if "%YYTARGET_runtime%" == "VM" (
        rem This is used for VM compilation
        call %Utils% logError "VM remote runs are currently not supported, please build on a Mac."
        exit /b 1
    ) else (
        rem This is used for YYC compilation
        call %Utils% itemCopyTo %SDK_SOURCE% "%YYprojectName: =_%\%YYprojectName: =_%\Supporting Files\libsteam_api.dylib"
        
        rem Write the entitlements plist
        set plistPath="%YYprojectName: =_%\%YYprojectName: =_%\Supporting Files\%YYprojectName: =_%.entitlements"
        echo Writing entitlements to !plistPath!
        echo ^<^?xml version^=^"1.0^" encoding^=^"UTF-8^"^?^>> !plistPath!
        echo ^<^^!DOCTYPE^ plist^ PUBLIC^ ^"^-^/^/Apple^/^/DTD^ PLIST^ 1.0^/^/EN"^ "http^:^/^/www.apple.com^/DTDs^/PropertyList-1.0.dtd^"^>>> !plistPath!
        echo ^<plist^ version^=^"1.0^"^>>> !plistPath!
        echo ^<dict^>>> !plistPath!
        echo     ^<key^>com.apple.security.cs.allow-dyld-environment-variables^<^/key^>>> !plistPath!
        echo     ^<true^/^>>> !plistPath!
        echo     ^<key^>com.apple.security.cs.disable-library-validation^<^/key^>>> !plistPath!
        echo     ^<true^/^>>> !plistPath!
        echo     ^<key^>com.apple.security.device.audio-input^<^/key^>>> !plistPath!
        echo     ^<true^/^>>> !plistPath!
        echo ^<^/dict^>>> !plistPath!
        echo ^<^/plist^>>> !plistPath!
        
        rem Patch the xcodeproj file
        set xcodeProj=%YYprojectName: =_%\%YYprojectName: =_%.xcodeproj\project.pbxproj
        echo Patching xcodeproj in !xcodeProj!
        rem DO NOT MESS WITH TABS BELOW THIS LINE, THEY ARE VERY IMPORTANT
        powershell -NoLogo -NoProfile -Command "(Get-Content $env:xcodeProj) -replace '				EXCLUDED_ARCHS = ', """				ENABLE_HARDENED_RUNTIME = YES;`r`n				EXCLUDED_ARCHS = """ | Set-Content $env:xcodeProj"
        powershell -NoLogo -NoProfile -Command "(Get-Content $env:xcodeProj) -replace '						        enabled = 1;', '						        enabled = 0;' | Set-Content $env:xcodeProj"
        powershell -NoLogo -NoProfile -Command "(Get-Content $env:xcodeProj) -replace '		831BBFDC15C83806007085F8 /* StoreKit.framework in Frameworks */ = {isa = PBXBuildFile; fileRef = 831BBFDB15C83806007085F8 /* StoreKit.framework */; settings = {ATTRIBUTES = (Weak, ); }; };', '' | Set-Content $env:xcodeProj"
        powershell -NoLogo -NoProfile -Command "(Get-Content $env:xcodeProj) -replace '		831BBFDB15C83806007085F8 /* StoreKit.framework */ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = StoreKit.framework; path = System/Library/Frameworks/StoreKit.framework; sourceTree = SDKROOT; };', '' | Set-Content $env:xcodeProj"
        powershell -NoLogo -NoProfile -Command "(Get-Content $env:xcodeProj) -replace '				831BBFDC15C83806007085F8 /* StoreKit.framework in Frameworks */,', '' | Set-Content $env:xcodeProj"
        powershell -NoLogo -NoProfile -Command "(Get-Content $env:xcodeProj) -replace '				831BBFDB15C83806007085F8 /* StoreKit.framework */,', '' | Set-Content $env:xcodeProj"
        echo Xcodeproj patch done
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
