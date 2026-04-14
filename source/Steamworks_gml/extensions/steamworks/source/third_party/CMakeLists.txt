cmake_minimum_required(VERSION 3.18)

add_library(ext_third_party INTERFACE)
target_compile_definitions(ext_third_party INTERFACE HAVE_THIRDPARTY_FEATURE=1)

set(_EXT_TP_RUNTIME_DLLS "")
set(_MAP_REL_CONFIGS "Release")

function(_ext_tp_append_runtime)
  foreach(_f IN LISTS ARGN)
    if(_f)
      list(APPEND _EXT_TP_RUNTIME_DLLS "${_f}")
    endif()
  endforeach()
  set(_EXT_TP_RUNTIME_DLLS
      "${_EXT_TP_RUNTIME_DLLS}"
      PARENT_SCOPE)
endfunction()

# =============================================================================
# Steamworks SDK
# =============================================================================
set(STEAMWORKS_SDK_ROOT
    "${CMAKE_CURRENT_LIST_DIR}/../../../../../steamworks_sdk"
    CACHE PATH "Path to Steamworks SDK root")

set(_STEAM_PUBLIC_DIR "${STEAMWORKS_SDK_ROOT}/public")
set(_STEAM_REDIST_DIR "${STEAMWORKS_SDK_ROOT}/redistributable_bin")

if(NOT EXISTS "${_STEAM_PUBLIC_DIR}/steam/steam_api.h")
  message(FATAL_ERROR
    "Missing Steamworks header:\n"
    "  ${_STEAM_PUBLIC_DIR}/steam/steam_api.h\n"
    "Check STEAMWORKS_SDK_ROOT:\n"
    "  ${STEAMWORKS_SDK_ROOT}")
endif()

# Headers (all platforms)
target_include_directories(ext_third_party INTERFACE "${_STEAM_PUBLIC_DIR}")

# =============================================================================
# Windows (win64 only)
# =============================================================================
if(WIN32)
  get_filename_component(_TP_DIR "${CMAKE_CURRENT_LIST_DIR}" ABSOLUTE)
  get_filename_component(_SRC_DIR "${_TP_DIR}/.." ABSOLUTE)
  get_filename_component(_EXT_DIR "${_SRC_DIR}/.." ABSOLUTE)

  message(STATUS "Windows: linking Steamworks (win64 only)")

  # win64 only
  set(_STEAM_DLL "${_STEAM_REDIST_DIR}/win64/steam_api64.dll")
  if(NOT EXISTS "${_STEAM_DLL}")
    message(FATAL_ERROR "Missing Steamworks win64 DLL: ${_STEAM_DLL}")
  endif()

  set(_STEAM_LIB "${_STEAM_REDIST_DIR}/win64/steam_api64.lib")
  if(NOT EXISTS "${_STEAM_LIB}")
    message(FATAL_ERROR "Missing Steamworks win64 import lib: ${_STEAM_LIB}")
  endif()

  # IMPORTANT:
  # Link ONLY the import library (.lib). Do NOT link the DLL.
  target_link_libraries(ext_third_party INTERFACE "${_STEAM_LIB}")

  # Package the runtime DLL next to the runner/game (do not link it)
  _ext_tp_append_runtime("${_STEAM_DLL}")
endif()

# =============================================================================
# Apple (macOS only; Steamworks is not iOS/tvOS)
# =============================================================================
if(APPLE)
  set(_IS_IOS FALSE)
  set(_IS_TVOS FALSE)
  set(_IS_MACOS FALSE)

  if(CMAKE_OSX_SYSROOT MATCHES "iphone") # iphoneos / iphonesimulator
    set(_IS_IOS TRUE)
  elseif(CMAKE_OSX_SYSROOT MATCHES "appletv") # appletvos / appletvsimulator
    set(_IS_TVOS TRUE)
  else()
    set(_IS_MACOS TRUE)
  endif()

  if(_IS_MACOS)
    message(STATUS "macOS: linking Steamworks libsteam_api.dylib")

    get_filename_component(_TP_DIR "${CMAKE_CURRENT_LIST_DIR}" ABSOLUTE)
    get_filename_component(_SRC_DIR "${_TP_DIR}/.." ABSOLUTE)
    get_filename_component(_EXT_DIR "${_SRC_DIR}/.." ABSOLUTE)

    # Steamworks SDK typical macOS redist locations (varies by SDK version)
    set(_STEAM_DYLIB_CANDIDATES
        "${_STEAM_REDIST_DIR}/osx/libsteam_api.dylib"
        "${_STEAM_REDIST_DIR}/osx64/libsteam_api.dylib"
        "${_STEAM_REDIST_DIR}/macos/libsteam_api.dylib"
        "${_STEAM_REDIST_DIR}/libsteam_api.dylib")

    set(_STEAM_DYLIB "")
    foreach(_p IN LISTS _STEAM_DYLIB_CANDIDATES)
      if(EXISTS "${_p}")
        set(_STEAM_DYLIB "${_p}")
        break()
      endif()
    endforeach()

    if(NOT _STEAM_DYLIB)
      message(FATAL_ERROR
        "Missing Steamworks macOS dylib (libsteam_api.dylib). Looked in:\n"
        "  ${_STEAM_DYLIB_CANDIDATES}\n"
        "SDK root:\n"
        "  ${STEAMWORKS_SDK_ROOT}")
    endif()

    add_library(Steamworks::steam_api SHARED IMPORTED GLOBAL)
    set_target_properties(Steamworks::steam_api PROPERTIES
      IMPORTED_LOCATION "${_STEAM_DYLIB}"
    )

    target_link_libraries(ext_third_party INTERFACE Steamworks::steam_api)

    # Register runtime dylib for packaging/staging
    _ext_tp_append_runtime("${_STEAM_DYLIB}")
  endif()
endif()

# =============================================================================
# Linux (desktop only)
# =============================================================================
if(UNIX AND NOT APPLE AND NOT ANDROID)
  message(STATUS "Linux: linking Steamworks libsteam_api.so")

  get_filename_component(_TP_DIR  "${CMAKE_CURRENT_LIST_DIR}" ABSOLUTE)
  get_filename_component(_SRC_DIR "${_TP_DIR}/.." ABSOLUTE)
  get_filename_component(_EXT_DIR "${_SRC_DIR}/.." ABSOLUTE)

  # Steamworks SDK typical Linux redist locations (varies by SDK version)
  set(_STEAM_SO_CANDIDATES
      "${_STEAM_REDIST_DIR}/linux64/libsteam_api.so"
      "${_STEAM_REDIST_DIR}/linux_x64/libsteam_api.so"
      "${_STEAM_REDIST_DIR}/linux32/libsteam_api.so"
      "${_STEAM_REDIST_DIR}/linux_x86/libsteam_api.so"
      "${_STEAM_REDIST_DIR}/libsteam_api.so")

  set(_STEAM_SO "")
  foreach(_p IN LISTS _STEAM_SO_CANDIDATES)
    if(EXISTS "${_p}")
      set(_STEAM_SO "${_p}")
      break()
    endif()
  endforeach()

  if(NOT _STEAM_SO)
    message(FATAL_ERROR
      "Missing Steamworks Linux shared lib (libsteam_api.so). Looked in:\n"
      "  ${_STEAM_SO_CANDIDATES}\n"
      "SDK root:\n"
      "  ${STEAMWORKS_SDK_ROOT}")
  endif()

  add_library(Steamworks::steam_api SHARED IMPORTED GLOBAL)
  set_target_properties(Steamworks::steam_api PROPERTIES
    IMPORTED_LOCATION "${_STEAM_SO}"
    MAP_IMPORTED_CONFIG_RELWITHDEBINFO "${_MAP_REL_CONFIGS}"
    MAP_IMPORTED_CONFIG_MINSIZEREL     "${_MAP_REL_CONFIGS}"
  )

  target_link_libraries(ext_third_party INTERFACE Steamworks::steam_api)

  # Register runtime .so for packaging/staging
  _ext_tp_append_runtime("${_STEAM_SO}")
endif()

# Export to parent
set(EXT_TP_RUNTIME_DLLS "${_EXT_TP_RUNTIME_DLLS}" PARENT_SCOPE)
