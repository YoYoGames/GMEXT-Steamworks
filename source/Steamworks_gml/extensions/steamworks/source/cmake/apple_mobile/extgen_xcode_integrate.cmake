# Apple mobile: -P script that bootstraps Bundler and runs the Xcode project integrator

if(NOT DEFINED EXT_REPO_ROOT OR EXT_REPO_ROOT STREQUAL "")
  message(FATAL_ERROR "EXT_REPO_ROOT is empty (expected repo root path).")
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

# Helper: env for ALL ruby/bundler invocations
set(_ENV_CMD ${CMAKE_COMMAND} -E env
  "BUNDLE_GEMFILE=${_GEMFILE}"
  "BUNDLE_PATH=${_BUNDLE_DIR}"
  "BUNDLE_DISABLE_SHARED_GEMS=true"
  "GEM_HOME=${_LOCAL_GEM_HOME}"
  "GEM_PATH=${_LOCAL_GEM_HOME}"
  "PATH=${_LOCAL_GEM_BIN}:$ENV{PATH}"
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
