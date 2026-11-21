# Apple mobile: -P script that bootstraps Bundler and runs the Xcode project integrator

if(NOT DEFINED EXT_REPO_ROOT OR EXT_REPO_ROOT STREQUAL "")
  message(FATAL_ERROR "EXT_REPO_ROOT is empty (expected repo root path).")
endif()

# `cmake -E env --unset=<name>` (used below to strip Xcode's injected iOS
# build env out of the Ruby/Bundler invocations) needs CMake 3.24+.
if(CMAKE_VERSION VERSION_LESS 3.24)
  message(FATAL_ERROR "This script requires CMake 3.24+ (found ${CMAKE_VERSION}) for 'cmake -E env --unset'. Upgrade CMake, e.g. `brew upgrade cmake`.")
endif()

# --- Locate ruby (only) ---
find_program(RUBY_EXECUTABLE ruby HINTS /opt/homebrew/opt/ruby/bin /usr/bin)
if(NOT RUBY_EXECUTABLE)
  message(FATAL_ERROR "ruby not found")
endif()

# --- Where the Gemfile lives (repo) ---
set(_GEMFILE "${EXT_REPO_ROOT}/cmake/apple_mobile/Gemfile")
if(NOT EXISTS "${_GEMFILE}")
  message(FATAL_ERROR "Gemfile not found: ${_GEMFILE}")
endif()

# --- Local gem home (self-contained, no sudo, no user PATH) ---
set(_LOCAL_GEM_HOME "${CMAKE_BINARY_DIR}/.gem")
set(_LOCAL_GEM_BIN  "${_LOCAL_GEM_HOME}/bin")
file(MAKE_DIRECTORY "${_LOCAL_GEM_HOME}")
file(MAKE_DIRECTORY "${_LOCAL_GEM_BIN}")

# --- Bundled gems install location (your existing bundle dir) ---
set(_BUNDLE_DIR "${CMAKE_BINARY_DIR}/bundle")
file(MAKE_DIRECTORY "${_BUNDLE_DIR}")

# --- Resolve a known-good, CURRENT macOS SDK path ---
#
# The host Ruby's own baked -isysroot (from RbConfig) can go stale after an
# Xcode upgrade removes the SDK version it was built against, so resolve the
# actual current macOS SDK fresh instead of trusting it.
execute_process(
  COMMAND xcrun --sdk macosx --show-sdk-path
  OUTPUT_VARIABLE _MACOS_SDK_PATH
  OUTPUT_STRIP_TRAILING_WHITESPACE
  RESULT_VARIABLE _sdk_res
)
if(NOT _sdk_res EQUAL 0 OR NOT EXISTS "${_MACOS_SDK_PATH}")
  message(FATAL_ERROR "Could not resolve a valid macOS SDK ('xcrun --sdk macosx --show-sdk-path' returned '${_MACOS_SDK_PATH}', exit ${_sdk_res}). Check your Xcode Command Line Tools: xcode-select -p, xcodebuild -runFirstLaunch.")
endif()

# Helper: env for ALL ruby/bundler invocations
#
# This runs inside an Xcode Run Script build phase for an iOS target, and
# CMake's Xcode generator applies CMAKE_SYSTEM_NAME=iOS to every target in
# the .xcodeproj (including this non-compiling one), so the process starts
# with Xcode's iOS SDK/architecture/compiler env already set. Building a
# native gem extension (e.g. xcodeproj's nkf dependency) under that
# environment cross-compiles for iOS instead of the host macOS Ruby it
# actually links against, and fails at link time.
#
# SDKROOT/CFLAGS/CPPFLAGS/LDFLAGS get an explicit macOS sysroot rather than
# just being unset - Ruby's own mkmf fallback (e.g.
# `ENV['CFLAGS'] || RbConfig::CONFIG[...]`) treats an empty string as a
# provided value and skips its own baked default, so an explicit value is
# needed either way. The platform/toolchain-selection vars a host tool has
# no use for regardless are genuinely unset (--unset, not an empty string).
set(_ENV_CMD ${CMAKE_COMMAND} -E env
  "BUNDLE_GEMFILE=${_GEMFILE}"
  "BUNDLE_PATH=${_BUNDLE_DIR}"
  "BUNDLE_DISABLE_SHARED_GEMS=true"
  "GEM_HOME=${_LOCAL_GEM_HOME}"
  "GEM_PATH=${_LOCAL_GEM_HOME}"
  "PATH=${_LOCAL_GEM_BIN}:$ENV{PATH}"
  "SDKROOT=${_MACOS_SDK_PATH}"
  "CFLAGS=-isysroot ${_MACOS_SDK_PATH}"
  "CPPFLAGS=-isysroot ${_MACOS_SDK_PATH}"
  "LDFLAGS=-isysroot ${_MACOS_SDK_PATH}"
  --unset=ARCHS
  --unset=PLATFORM_NAME
  --unset=IPHONEOS_DEPLOYMENT_TARGET
  --unset=CC
  --unset=CXX
  --unset=CPP
  --unset=LD
  --unset=CXXFLAGS
  --unset=OTHER_CFLAGS
  --unset=OTHER_CPLUSPLUSFLAGS
  --unset=OTHER_LDFLAGS
)

# --- Ensure bundler is available in the local GEM_HOME ---
# First, quick check: can ruby require 'bundler'?
execute_process(
  COMMAND ${_ENV_CMD} "${RUBY_EXECUTABLE}" -e "require 'bundler'; puts Bundler::VERSION"
  WORKING_DIRECTORY "${CMAKE_BINARY_DIR}"
  RESULT_VARIABLE _bundler_ok
  OUTPUT_VARIABLE _bundler_out
  ERROR_VARIABLE  _bundler_err
)

if(NOT _bundler_ok EQUAL 0)
  message(STATUS "Bundler not available; bootstrapping into ${_LOCAL_GEM_HOME}...")

  execute_process(
    COMMAND ${_ENV_CMD} "${RUBY_EXECUTABLE}" -S gem install bundler --no-document --install-dir "${_LOCAL_GEM_HOME}" --bindir "${_LOCAL_GEM_BIN}"
    WORKING_DIRECTORY "${CMAKE_BINARY_DIR}"
    RESULT_VARIABLE _gires
    OUTPUT_VARIABLE _giout
    ERROR_VARIABLE  _gierr
  )

  if(NOT _gires EQUAL 0)
    message(FATAL_ERROR "Failed to install bundler locally (${_gires}):\n${_gierr}\n${_giout}")
  endif()
endif()

# --- bundle install (Bundler 3 compatible; always invoke via ruby -S) ---
# Set install path locally instead of using removed --path flag
execute_process(
  COMMAND ${_ENV_CMD} "${RUBY_EXECUTABLE}" -S bundle config set --local path "${_BUNDLE_DIR}"
    --gemfile "${_GEMFILE}"
    --quiet
  WORKING_DIRECTORY "${CMAKE_BINARY_DIR}"
  RESULT_VARIABLE _bcres
  OUTPUT_VARIABLE _bcout
  ERROR_VARIABLE  _bcerr
)

if(NOT _bcres EQUAL 0)
  message(FATAL_ERROR "bundle config set path failed (${_bcres}):\n${_bcout}\n${_bcerr}")
endif()

execute_process(
  COMMAND ${_ENV_CMD} "${RUBY_EXECUTABLE}" -S bundle install
    --gemfile "${_GEMFILE}"
    --quiet
  WORKING_DIRECTORY "${CMAKE_BINARY_DIR}"
  RESULT_VARIABLE _bres
  OUTPUT_VARIABLE _bout
  ERROR_VARIABLE  _berr
)

if(NOT _bres EQUAL 0)
  message(FATAL_ERROR "bundle install failed (${_bres}):\n${_berr}\n${_bout}")
endif()

# --- Run integrator using the bundled gems ---
execute_process(
  COMMAND ${_ENV_CMD} "${RUBY_EXECUTABLE}" -S bundle exec "${RUBY_EXECUTABLE}"
    "${CMAKE_CURRENT_LIST_DIR}/extgen_xcode_integrate.rb"
      --gm "${EXT_GM_XCODEPROJ}"
      --gm-target "${EXT_GM_APP_TARGET}"
      --ext-project "${EXT_EXT_XCODEPROJ}"
      --ext-target "${EXT_EXT_TARGET}"
  WORKING_DIRECTORY "${CMAKE_BINARY_DIR}"
  RESULT_VARIABLE _res
  OUTPUT_VARIABLE _out
  ERROR_VARIABLE  _err
)

message(STATUS "${_out}")

if(NOT _res EQUAL 0)
  message(FATAL_ERROR "Integration failed (${_res}):\n${_err}")
endif()
