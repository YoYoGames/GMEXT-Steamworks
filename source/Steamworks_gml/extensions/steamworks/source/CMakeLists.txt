cmake_minimum_required(VERSION 3.18)

# ============================================================
# Console platform options (must be set before project())
# ============================================================
# Switch requires explicit opt-in because the Nintendo SDK toolchain must be
# configured before CMake's project() call. Other consoles (PS4, PS5, Xbox)
# have their SDKs auto-detected by Visual Studio via the architecture set in
# CMakePresets.json, so their flags default to OFF unless pre-project hooks
# are needed.
option(EXTGEN_PLATFORM_SWITCH        "Enable Nintendo Switch pre-project setup" OFF)
option(EXTGEN_PLATFORM_PS4           "Enable PS4 pre-project setup"             OFF)
option(EXTGEN_PLATFORM_PS5           "Enable PS5 pre-project setup"             OFF)
option(EXTGEN_PLATFORM_XBOX_ONE      "Enable Xbox One pre-project setup"        OFF)
option(EXTGEN_PLATFORM_XBOX_SCARLETT "Enable Xbox Series pre-project setup"     OFF)

set(NINTENDO_SDK_PROPS_PATH "" CACHE STRING
    "Path to Nintendo SDK props file (relative to NINTENDO_SDK_ROOT) - REQUIRED for Switch builds")

if(EXTGEN_PLATFORM_SWITCH)
  include("${CMAKE_CURRENT_SOURCE_DIR}/cmake/switch/extgen_pre_project.cmake")
endif()
if(EXTGEN_PLATFORM_PS4)
  include("${CMAKE_CURRENT_SOURCE_DIR}/cmake/ps4/extgen_pre_project.cmake")
endif()
if(EXTGEN_PLATFORM_PS5)
  include("${CMAKE_CURRENT_SOURCE_DIR}/cmake/ps5/extgen_pre_project.cmake")
endif()
if(EXTGEN_PLATFORM_XBOX_ONE)
  include("${CMAKE_CURRENT_SOURCE_DIR}/cmake/xbox_one/extgen_pre_project.cmake")
endif()
if(EXTGEN_PLATFORM_XBOX_SCARLETT)
  include("${CMAKE_CURRENT_SOURCE_DIR}/cmake/xbox_scarlett/extgen_pre_project.cmake")
endif()

# ============================================================
# Make project
# ============================================================
project(Steamworks LANGUAGES CXX)

# ============================================================
# Global language / options
# ============================================================
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

option(EXT_STRICT_WARNINGS "Enable -Wall/-Wextra or /W4" ON)
option(EXT_USE_THIRD_PARTY "Enable third_party directory" ON)

# Apple "native flavour" (ObjC wrapper + shared C++ native core)
option(EXT_APPLE_NATIVE_FRAMEWORK
       "Use Apple NATIVE flavour (ObjC wrapper + shared C++ native core)"
       OFF)

option(EXTGEN_ENABLE_SWIFT "Enable Swift sources (Apple only)" ON)

# Packaging config used by xcframework packagers
set(EXT_APPLE_PACKAGE_CONFIG "Release" CACHE STRING "Config used by xcframework packagers (Debug/Release)")
set_property(CACHE EXT_APPLE_PACKAGE_CONFIG PROPERTY STRINGS Debug Release)

# GameMaker XCode integration (iOS|tvOS development, optional)
set(EXT_GM_XCODEPROJ "" CACHE STRING "Absolute path to GameMaker-exported .xcodeproj")
set(EXT_GM_APP_TARGET "" CACHE STRING "Optional: GameMaker app target name (empty = auto-detect)")

set(EXT_GM_XCODEPROJ_OVERRIDE "" CACHE STRING "Override GM .xcodeproj (src-controlled)")
set(EXT_GM_APP_TARGET_OVERRIDE "" CACHE STRING "Override GM app target (src-controlled)")

# Disable code signing for Xcode-generated projects (device & sim)
if(APPLE AND CMAKE_GENERATOR STREQUAL "Xcode")
  set(CMAKE_XCODE_ATTRIBUTE_CODE_SIGNING_ALLOWED "NO")
  set(CMAKE_XCODE_ATTRIBUTE_CODE_SIGNING_REQUIRED "NO")
  set(CMAKE_XCODE_ATTRIBUTE_CODE_SIGNING_STYLE "Manual")
  set(CMAKE_XCODE_ATTRIBUTE_DEVELOPMENT_TEAM "")
  set(CMAKE_XCODE_ATTRIBUTE_PROVISIONING_PROFILE_SPECIFIER "")
endif()

# User-supplied Nintendo Switch MSBuild props (we DO NOT SHIP Nintendo's props)
set(EXT_SWITCH_USER_PROPS "" CACHE FILEPATH
    "Path to a user-provided Nintendo Switch .props file to import into generated VS projects")

set(EXT_OUTPUT_DIR "../" CACHE STRING "Where to copy the final built binary")
set(EXT_APPLE_DROP_DIR "" CACHE STRING "Where to copy packaged Apple xcframework zip (optional)")
set(EXT_ANDROID_OUTPUT_DIR "" CACHE STRING "Where to copy the JNI binaries (optional)")

# ============================================================
# Platform classification
# ============================================================
set(EXTGEN_IS_IOS FALSE)
set(EXTGEN_IS_TVOS FALSE)
set(EXTGEN_IS_APPLE_MOBILE FALSE)
set(EXTGEN_IS_SWITCH FALSE)
set(EXTGEN_IS_PS4 FALSE)
set(EXTGEN_IS_PS5 FALSE)
set(EXTGEN_IS_XBOX_ONE FALSE)
set(EXTGEN_IS_XBOX_SCARLETT FALSE)

if(EXTGEN_PLATFORM_SWITCH)
  set(EXTGEN_IS_SWITCH TRUE)
endif()

# PS4/PS5: detected via CMAKE_SYSTEM_NAME (set by the ORBIS/Prospero VS architecture)
# Also honoured if the explicit option is set for pre-project hook compatibility.
if(EXTGEN_PLATFORM_PS4 OR CMAKE_SYSTEM_NAME STREQUAL "ORBIS")
  set(EXTGEN_IS_PS4 TRUE)
elseif(EXTGEN_PLATFORM_PS5 OR CMAKE_SYSTEM_NAME STREQUAL "Prospero")
  set(EXTGEN_IS_PS5 TRUE)
endif()

# Xbox: detected via CMAKE_GENERATOR_PLATFORM (GDK architecture strings).
# WIN32 is also TRUE for GDK builds, so these must be classified before WIN32 is checked.
if(EXTGEN_PLATFORM_XBOX_ONE OR CMAKE_GENERATOR_PLATFORM STREQUAL "Gaming.Xbox.XboxOne.x64")
  set(EXTGEN_IS_XBOX_ONE TRUE)
elseif(EXTGEN_PLATFORM_XBOX_SCARLETT OR CMAKE_GENERATOR_PLATFORM STREQUAL "Gaming.Xbox.Scarlett.x64")
  set(EXTGEN_IS_XBOX_SCARLETT TRUE)
endif()

if(APPLE)
  # CMAKE_OSX_SYSROOT may be: iphoneos, iphonesimulator, appletvos, appletvsimulator, or a full path.
  if(CMAKE_OSX_SYSROOT MATCHES "iphone")
    set(EXTGEN_IS_IOS TRUE)
    set(EXTGEN_IS_APPLE_MOBILE TRUE)
  elseif(CMAKE_OSX_SYSROOT MATCHES "appletv")
    set(EXTGEN_IS_TVOS TRUE)
    set(EXTGEN_IS_APPLE_MOBILE TRUE)
  endif()
endif()

# ============================================================
# Target kind
# ============================================================
if(EXTGEN_IS_APPLE_MOBILE)
  add_library(${PROJECT_NAME} STATIC)
else()
  add_library(${PROJECT_NAME} SHARED)
endif()

set_target_properties(${PROJECT_NAME} PROPERTIES
  POSITION_INDEPENDENT_CODE ON
  OUTPUT_NAME "${PROJECT_NAME}"
)

# ============================================================
# Platform post-project hook: code_gen source discovery, includes, defines
# Each platform file is self-contained — it GLOBs exactly the code_gen
# sources it needs and adds them alongside its platform-specific setup.
# Note: Xbox and consoles checked before WIN32 — GDK builds have WIN32=TRUE.
# ============================================================
if(ANDROID)
  include(cmake/android/extgen_post_project.cmake)
elseif(EXTGEN_IS_SWITCH)
  include(cmake/switch/extgen_post_project.cmake)
elseif(EXTGEN_IS_XBOX_ONE)
  include(cmake/xbox_one/extgen_post_project.cmake)
elseif(EXTGEN_IS_XBOX_SCARLETT)
  include(cmake/xbox_scarlett/extgen_post_project.cmake)
elseif(EXTGEN_IS_PS4)
  include(cmake/ps4/extgen_post_project.cmake)
elseif(EXTGEN_IS_PS5)
  include(cmake/ps5/extgen_post_project.cmake)
elseif(WIN32)
  include(cmake/windows/extgen_post_project.cmake)
elseif(EXTGEN_IS_IOS)
  include(cmake/ios/extgen_post_project.cmake)
elseif(EXTGEN_IS_TVOS)
  include(cmake/tvos/extgen_post_project.cmake)
elseif(APPLE)
  include(cmake/macos/extgen_post_project.cmake)
elseif(UNIX)
  include(cmake/linux/extgen_post_project.cmake)
endif()

# User implementation sources (developer-owned, in src/)
add_subdirectory("${CMAKE_CURRENT_SOURCE_DIR}/src")

# ============================================================
# Warnings
# ============================================================
if(EXT_STRICT_WARNINGS)
  if(MSVC)
    target_compile_options(${PROJECT_NAME} PRIVATE /W4 /permissive-)
    target_compile_definitions(${PROJECT_NAME} PRIVATE _CRT_SECURE_NO_WARNINGS WIN32_LEAN_AND_MEAN NOMINMAX)
  else()
    target_compile_options(${PROJECT_NAME} PRIVATE
      $<$<COMPILE_LANGUAGE:CXX>:-Wall -Wextra -Wpedantic>
      $<$<COMPILE_LANGUAGE:OBJCXX>:-Wall -Wextra -Wpedantic>
    )

    if(CMAKE_CXX_COMPILER_ID MATCHES "Clang")
      target_compile_options(${PROJECT_NAME} PRIVATE
        $<$<COMPILE_LANGUAGE:CXX>:-Wno-unknown-pragmas -Wno-gnu-zero-variadic-macro-arguments>
        $<$<COMPILE_LANGUAGE:OBJCXX>:-Wno-unknown-pragmas -Wno-gnu-zero-variadic-macro-arguments>
      )
    endif()
  endif()
endif()

# ============================================================
# third_party
# ============================================================
set(EXT_THIRDPARTY_DIR "${CMAKE_CURRENT_SOURCE_DIR}/third_party")
if(EXT_USE_THIRD_PARTY AND EXISTS "${EXT_THIRDPARTY_DIR}/CMakeLists.txt")
  message(STATUS "Loading third_party from: ${EXT_THIRDPARTY_DIR}")
  set(EXT_MAIN_TARGET "${PROJECT_NAME}")
  add_subdirectory("${EXT_THIRDPARTY_DIR}")

  if(TARGET ext_third_party)
    target_link_libraries(${PROJECT_NAME} PRIVATE ext_third_party)
  endif()
else()
  message(STATUS "No third_party directory (or disabled).")
endif()

# ============================================================
# Outputs / post-build copies
# ============================================================

# Normalize EXT_OUTPUT_DIR -> _EXT_OUT_DIR
if(EXT_OUTPUT_DIR STREQUAL "")
  set(_EXT_OUT_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../")
elseif(IS_ABSOLUTE "${EXT_OUTPUT_DIR}")
  set(_EXT_OUT_DIR "${EXT_OUTPUT_DIR}")
else()
  get_filename_component(_EXT_OUT_DIR
    "${CMAKE_CURRENT_SOURCE_DIR}/${EXT_OUTPUT_DIR}"
    ABSOLUTE
  )
endif()

# Note: Xbox and consoles checked before WIN32 — GDK builds have WIN32=TRUE.
if(ANDROID)
  include(cmake/android/extgen_post_build.cmake)
elseif(EXTGEN_IS_APPLE_MOBILE)
  include(cmake/apple_mobile/extgen_post_build.cmake)
elseif(EXTGEN_IS_SWITCH)
  include(cmake/switch/extgen_post_build.cmake)
elseif(EXTGEN_IS_XBOX_ONE)
  include(cmake/xbox_one/extgen_post_build.cmake)
elseif(EXTGEN_IS_XBOX_SCARLETT)
  include(cmake/xbox_scarlett/extgen_post_build.cmake)
elseif(EXTGEN_IS_PS4)
  include(cmake/ps4/extgen_post_build.cmake)
elseif(EXTGEN_IS_PS5)
  include(cmake/ps5/extgen_post_build.cmake)
elseif(WIN32)
  include(cmake/windows/extgen_post_build.cmake)
elseif(APPLE)
  include(cmake/macos/extgen_post_build.cmake)
elseif(UNIX)
  include(cmake/linux/extgen_post_build.cmake)
endif()
