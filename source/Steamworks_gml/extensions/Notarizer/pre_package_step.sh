#!/bin/bash
# TO CREATE A PROFILE RUN THIS COMMAND:
# xcrun notarytool store-credentials "PROFILE_NAME_HERE" --apple-id "email goes here" --team-id "team id goes here" --password "2FA app specific password here"

# This is pre_package_step.sh of notarizer.

if [[ "$YYPLATFORM_name" != "macOS" ]]; then
    echo "Notarizer: not on macOS"
    exit 0
fi

if [[ "$YYPLATFORM_option_mac_build_app_store" == "True" ]]; then
    # App Store's own backend will automatically notarize the application on upload.
    echo "Notarizer: not needed for App Store builds"
    exit 0
fi

if [[ "$YYEXTOPT_Notarizer_enable" != "True" ]]; then
    echo "Notarizer: not enabled for this build"
    exit 0
fi

profileName="$YYEXTOPT_Notarizer_notarytool_profile_name"
zipPath="${YYtempFolder}/notarizer_file_${RANDOM}.zip"
# TODO: change to Igor path later!!
appPath="${HOME}/gamemakerstudio2/Mac/GM_MAC/${YYprojectName}/${YYprojectName}.app"

# This entitlement plist allows Steamworks to load, and also allows audio input functions to work.
PLIST="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n<plist version=\"1.0\">\n<dict>\n    <key>com.apple.security.cs.allow-dyld-environment-variables</key>\n    <true/>\n    <key>com.apple.security.cs.disable-library-validation</key>\n    <true/>\n    <key>com.apple.security.device.audio-input</key>\n    <true/>\n</dict>\n</plist>"

# should be called for macOS VM Create Executable only builds...
if [[ "$YYTARGET_runtime" == "VM" ]]; then
    # the reason why we need to do this is because
    # for YYC Xcode will do codesigning for us, but VM won't do that *properly*
    TMP_PLIST="/tmp/notarizer${RANDOM}.plist"
    echo -e "$PLIST">"${TMP_PLIST}"
    echo "Notarizer: VM re-codesigning .app with a sane entitlement plist ${TMP_PLIST}"
    codesign -s "${YYPLATFORM_option_mac_signing_identity}" -f --deep --timestamp --verbose --options runtime --entitlements "${TMP_PLIST}" "${appPath}"
    rm -f "${TMP_PLIST}"
fi

echo "Notarizer: writing ${appPath} notarization zip to ${zipPath}"
/usr/bin/ditto -c -k --keepParent "$appPath" "$zipPath"

echo "Notarizer: using creds. profile $profileName"
xcrun notarytool submit "$zipPath" --keychain-profile "$profileName" --verbose --wait

echo "Notarizer: removing the temp zip"
rm -f "$zipPath"

echo "Notarizer: stapling the app"
xcrun stapler staple --verbose "$appPath"

echo "Notarizer: done, GM should make a notarized package now"
