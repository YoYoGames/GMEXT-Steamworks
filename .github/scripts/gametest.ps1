# Builds the demo project with a local GMRT build and runs GameTest specs against it.
#
# Used by the gametest job in trusted.yml on the tier 3 runner, which is signed in to Steam. Runs from the repository
# root. The extension's Steamworks.dll must already be the one to test (the job puts the windows-build artifact there).
#
#   gametest.ps1 -GmrtRoot C:\s\GMRT -Specs tests/gametest/a.json,tests/gametest/b.json -Out C:\path\to\results
#
# Exits non-zero if the build fails or any spec fails. Each spec's results.json and the game's log are left in -Out;
# the log can hold Steam account and friends' data, so it isn't printed or uploaded (trusted.yml uploads results.json).
param(
    [Parameter(Mandatory)] [string] $GmrtRoot,
    [Parameter(Mandatory)] [string[]] $Specs,
    [Parameter(Mandatory)] [string] $Out,
    [int] $TimeoutSeconds = 300
)
$ErrorActionPreference = 'Stop'

$repo = (Get-Location).Path
$project = Join-Path $repo 'source/Steamworks_gml/Steamworks.yyp'
$extYy = Join-Path $repo 'source/Steamworks_gml/extensions/Steamworks/Steamworks.yy'

function Need($path, $what) {
    if (-not (Test-Path $path)) { Write-Error "$what not found: $path" }
    return (Resolve-Path $path).Path
}

$GmrtRoot = Need $GmrtRoot 'GMRT_ROOT'

# Specs named *.hooks.json need a test build of the extension (STEAMWORKS_TEST_HOOKS, which forces the I/O failure path
# of every call result), so the run rebuilds Steamworks.dll that way. A run can't mix them with ordinary specs, which
# test the release build
$hooks = @($Specs | Where-Object { $_ -like '*.hooks.json' })
if ($hooks.Count -and $hooks.Count -ne $Specs.Count) { Write-Error 'Run *.hooks.json specs on their own: they need a test build of Steamworks.dll' }
# GMRT and cctl find their toolchains and libraries through YYC_WORKSPACE
$env:YYC_WORKSPACE = $GmrtRoot
$gmrt = Need (Join-Path $GmrtRoot 'build/libs_x86_64-pc-windows-msvc/Release/bin/gmrt.exe') 'gmrt.exe (build GMRT with: cctl build -p x86_64-pc-windows-msvc -b Release)'
$graph = Need (Join-Path $GmrtRoot 'tools/gmrt/targets/buildgraph-win64-dev.xml') 'the Windows build graph'
# cctl setup doesn't install ProjectTool or the prefabs; cctl's project-build tests do, so install them the same way
# (the ProjectTool version those tests pin) the first time
$projectToolExe = Join-Path $GmrtRoot 'third_party/project-tool-win-x64/package/ProjectTool.exe'
$prefabs = Join-Path $GmrtRoot 'third_party/gm_prefabs'
if (-not ((Test-Path $projectToolExe) -and (Test-Path $prefabs))) {
    $runner = Get-Content (Join-Path $GmrtRoot 'auxiliary/cctl/test/runners/ProjectBuildRunner.py') -Raw
    $ver = [regex]::Match($runner, 'install_gamemaker_projecttool\("([^"]+)"\)').Groups[1].Value
    if (-not $ver) { Write-Error "Couldn't find the ProjectTool version cctl uses" }
    Write-Host "Installing ProjectTool $ver and the prefabs into GMRT's third_party"
    $python = Need (Join-Path $GmrtRoot '.venv/Scripts/python.exe') "GMRT's Python environment (run cctl setup)"
    Push-Location $GmrtRoot
    try {
        & $python -c "import sys; sys.path.insert(0, 'auxiliary'); from cctl.setup.platforms import install_gamemaker_projecttool, install_gamemaker_prefabs; install_gamemaker_projecttool(sys.argv[1]); install_gamemaker_prefabs()" $ver
        if ($LASTEXITCODE -ne 0) { Write-Error "Installing ProjectTool and the prefabs failed ($LASTEXITCODE)" }
    } finally { Pop-Location }
}
$projectTool = Need $projectToolExe 'ProjectTool.exe'
$prefabs = Need $prefabs 'gm_prefabs'
foreach ($s in $Specs) { $null = Need (Join-Path $repo $s) 'GameTest spec' }

$env:DOTNET_CLI_TELEMETRY_OPTOUT = '1'
# The hash only: GMRT is private, and this log is public
# safe.directory: the checkout may belong to another account than the runner's
# In its own scope with errors not stopping: under Windows PowerShell, git writing to stderr would otherwise end the
# job, and this line is only informational
$gmrtHash = & {
    $ErrorActionPreference = 'Continue'
    try { (git -c "safe.directory=$($GmrtRoot -replace '\\', '/')" -C $GmrtRoot rev-parse --short=9 HEAD 2>$null) -join '' } catch { '' }
}
Write-Host "GMRT: $(if ($gmrtHash) { $gmrtHash } else { 'unknown' })"

# A *.hooks.json run uses a test build of Steamworks.dll. It's built in its own build directory and output folder, so
# the win-x64-release build directory (what windows-build and developers use) never gets STEAMWORKS_TEST_HOOKS cached,
# and it replaces the extension's Steamworks.dll only for this run: the finally block below puts the original back
$extDll = Join-Path $repo 'source/Steamworks_gml/extensions/Steamworks/Steamworks.dll'
$savedDll = $null
if ($hooks.Count) {
    if (-not $env:STEAMWORKS_SDK_ROOT) { Write-Error 'STEAMWORKS_SDK_ROOT is not set: the test build of Steamworks.dll needs the SDK' }
    Write-Host 'Building a test Steamworks.dll with STEAMWORKS_TEST_HOOKS for the *.hooks.json specs'
    $hooksOut = Join-Path ([IO.Path]::GetTempPath()) "steamworks-test-hooks-$PID"
    if (Test-Path $hooksOut) { Remove-Item -Recurse -Force $hooksOut }
    New-Item -ItemType Directory -Force $hooksOut | Out-Null
    $hooksLog = Join-Path $hooksOut 'build.log'
    Push-Location (Join-Path $repo 'source/Steamworks_gml/extensions/Steamworks/source')
    try {
        cmake --preset win-x64-release -B out/build/win-x64-test-hooks "-DSTEAMWORKS_SDK_ROOT=$env:STEAMWORKS_SDK_ROOT" `
            -DSTEAMWORKS_TEST_HOOKS=ON "-DEXT_OUTPUT_DIR=$hooksOut" *> $hooksLog
        if ($LASTEXITCODE -ne 0) { Get-Content $hooksLog -Tail 30 | Write-Host; Write-Error 'configuring the test build failed' }
        if (-not (Select-String -Path $hooksLog -Pattern 'STEAMWORKS_TEST_HOOKS is on' -Quiet)) { Write-Error "The test build didn't report STEAMWORKS_TEST_HOOKS as on" }
        cmake --build out/build/win-x64-test-hooks --config Release *>> $hooksLog
        if ($LASTEXITCODE -ne 0) { Select-String -Path $hooksLog -Pattern '(?i)\berror\b' | Select-Object -First 30 | ForEach-Object { Write-Host $_.Line }; Write-Error 'the test build failed' }
    } finally { Pop-Location }
    $testDll = Join-Path $hooksOut 'Steamworks.dll'
    if (-not (Test-Path $testDll)) { Write-Error "The test build didn't produce Steamworks.dll in $hooksOut" }
    if (Test-Path $extDll) {
        $savedDll = Join-Path $hooksOut 'Steamworks.original.dll'
        Copy-Item $extDll $savedDll
    }
    Copy-Item -Force $testDll $extDll
}

try {
    # Debug=Enabled so the extension writes steam_appid.txt and runs as app 480 outside Steam's launcher. This changes the
    # checkout only
    $yy = [IO.File]::ReadAllText($extYy)
    $re = '("%Name":\s*"debug",\s*"defaultValue":\s*)"Auto"'
    if ($yy -notmatch $re) { Write-Error "Couldn't find the debug option set to Auto in Steamworks.yy" }
    [IO.File]::WriteAllText($extYy, ($yy -replace $re, '$1"Enabled"'), (New-Object Text.UTF8Encoding $false))

    New-Item -ItemType Directory -Force $Out | Out-Null
    $Out = (Resolve-Path $Out).Path
    $build = Join-Path $Out 'build'
    $cache = Join-Path $Out 'cache'
    if (Test-Path $build) { Remove-Item -Recurse -Force $build }

    Write-Host 'Building the demo with GMRT'
    $buildLog = Join-Path $Out 'gmrt-build.log'
    & $gmrt $project -o $build -bg $graph -bj Build-native-windows-x64 --build-type=Release --script-build-type=Release `
        --cache-dir $cache --user-email ci@localhost "--projecttool=$projectTool" "--prefab-dir=$prefabs" *> $buildLog
    $code = $LASTEXITCODE
    if ($code -ne 0) {
        # Error lines only, not the whole log: GMRT is private, and this output is public
        Select-String -Path $buildLog -Pattern '(?i)\berror\b' | Select-Object -First 30 | ForEach-Object { Write-Host $_.Line }
        Write-Error "gmrt build failed ($code); the full log stays on the runner ($buildLog)"
    }
    $exe = Get-ChildItem $build -Recurse -Filter *.exe | Where-Object { $_.Name -notmatch '^(crashpad|ProjectTool)' } | Select-Object -First 1
    if (-not $exe) { Write-Error "The build made no .exe in $build" }
    Write-Host "Built $($exe.FullName)"
    # Without it Steamworks.dll can't load, and every extension call returns garbage rather than failing. Under GMRT the
    # post-build step copies it into the game's assets folder (assets or build/assets), so look anywhere in the output
    $steamApi = Get-ChildItem $build -Recurse -Filter steam_api64.dll -ErrorAction SilentlyContinue | Select-Object -First 1
    if (-not $steamApi) {
        Write-Error "steam_api64.dll isn't in the build output: the extension's post-build step didn't find the SDK (sdkPath)"
    }
    Write-Host "steam_api64.dll: $($steamApi.FullName.Substring($build.Length).TrimStart('\'))"

    $failed = 0
    foreach ($s in $Specs) {
        $name = [IO.Path]::GetFileNameWithoutExtension($s)
        $res = Join-Path $Out $name
        if (Test-Path $res) { Remove-Item -Recurse -Force $res }
        $log = Join-Path $Out "$name.log"
        Write-Host "::group::$s"
        $p = Start-Process -FilePath $exe.FullName -WorkingDirectory $exe.DirectoryName -PassThru -NoNewWindow `
            -ArgumentList "--gametest=`"$(Join-Path $repo $s)`"", "--gametest-out=`"$res`"" `
            -RedirectStandardOutput $log -RedirectStandardError "$log.err"
        # Keep the process handle open, or ExitCode is empty once it exits
        $null = $p.Handle
        $exit = $null
        if ($p.WaitForExit($TimeoutSeconds * 1000)) {
            $exit = $p.ExitCode
        } else {
            Write-Host "Timed out after $TimeoutSeconds s"
            # Kill is asynchronous, and the process can exit on its own just after the timed wait: wait for it, and
            # don't let either case stop the remaining specs
            try { $p.Kill() } catch { }
            try { $null = $p.WaitForExit(10000) } catch { }
            $exit = 'timed out'
        }
        $json = Join-Path $res 'results.json'
        if (-not (Test-Path $json)) {
            Write-Host "No results.json (game exit $exit)"
            # Not the whole log: the demo logs Steam friends' data, and this output is public
            Select-String -Path $log, "$log.err" -Pattern '(?i)^(error|fatal|exception|unhandled|startup:)|steam_api_init' -ErrorAction SilentlyContinue |
                Select-Object -First 20 | ForEach-Object { Write-Host $_.Line }
            $failed++
            Write-Host '::endgroup::'
            continue
        }
        $r = Get-Content $json -Raw | ConvertFrom-Json
        foreach ($a in $r.asserts) {
            Write-Host ('{0} {1} (actual {2})' -f ($(if ($a.pass) { 'PASS' } else { 'FAIL' })), $a.name, (ConvertTo-Json -InputObject $a.actual -Compress))
        }
        foreach ($e in $r.errors) { Write-Host "ERROR $e" }
        # Lines the specs log for diagnosis (paths Steam returned, the last error) from stdout, and the extension's own
        # Steam init trace from stderr (TRACE writes there; Steam's error text is on the line after it, hence the context).
        # Never the rest, which can hold account details
        Select-String -Path $log -Pattern '^(allow_steam_paths|gametest):' -ErrorAction SilentlyContinue | ForEach-Object { Write-Host $_.Line }
        Select-String -Path "$log.err" -Pattern 'steam_api_init' -Context 0, 1 -ErrorAction SilentlyContinue |
            ForEach-Object { Write-Host $_.Line; $_.Context.PostContext | ForEach-Object { Write-Host "  $_" } }
        Write-Host '::endgroup::'
        $pass = @($r.asserts | Where-Object pass).Count
        Write-Host "$s : $(if ($r.passed) { 'passed' } else { 'FAILED' }) ($pass/$(@($r.asserts).Count) asserts, game exit $exit)"
        if (-not $r.passed) { $failed++ }
    }
    if ($failed) { Write-Error "$failed of $($Specs.Count) specs failed" }
} finally {
    # Put back the Steamworks.dll that was there before a test build replaced it
    if ($hooks.Count) {
        if ($savedDll) { Copy-Item -Force $savedDll $extDll; Write-Host 'Restored the original Steamworks.dll' }
        else { Remove-Item -Force $extDll -ErrorAction SilentlyContinue }
    }
}
