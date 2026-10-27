# Apple mobile: defines package_ios_xcframework and package_tvos_xcframework CMake targets

if(NOT APPLE)
  return()
endif()

# Only relevant for iOS/tvOS builds from a mac host
option(EXTGEN_ENABLE_XCFRAMEWORK_PACKAGING "Add package_* targets" ON)

# Default: build both device + simulator
option(EXTGEN_APPLE_BUILD_SIMULATOR "Build simulator slice (arm64)" ON)
option(EXTGEN_APPLE_BUILD_SIMULATOR_X86_64 "Also build x86_64 simulator slice" ON)

set(EXTGEN_APPLE_PACKAGE_CONFIG "Release" CACHE STRING "Debug/Release")
set_property(CACHE EXTGEN_APPLE_PACKAGE_CONFIG PROPERTY STRINGS Debug Release)

if(NOT EXTGEN_ENABLE_XCFRAMEWORK_PACKAGING)
  return()
endif()

# IMPORTANT:
# The packager runs via `cmake -P` (script mode), which does NOT load the cache
# from your configured build. Therefore, we must pass header lists explicitly.

# Escape semicolons for command-line safety (so the shell / generator doesn't split them)
set(_IOS_HDRS_ESC "")
set(_TVOS_HDRS_ESC "")

if(DEFINED EXT_PUBLIC_HEADERS_IOS)
  string(REPLACE ";" "\\;" _IOS_HDRS_ESC "${EXT_PUBLIC_HEADERS_IOS}")
endif()
if(DEFINED EXT_PUBLIC_HEADERS_TVOS)
  string(REPLACE ";" "\\;" _TVOS_HDRS_ESC "${EXT_PUBLIC_HEADERS_TVOS}")
endif()

add_custom_target(
  package_ios_xcframework
  COMMAND ${CMAKE_COMMAND}
    -DPLATFORM=ios
    -DPROJECT_NAME=${PROJECT_NAME}
    -DSRC_DIR=${CMAKE_SOURCE_DIR}
    -DBUILD_CONFIG=${EXTGEN_APPLE_PACKAGE_CONFIG}
    -DBUILD_SIM=${EXTGEN_APPLE_BUILD_SIMULATOR}
    -DBUILD_SIM_X86_64=${EXTGEN_APPLE_BUILD_SIMULATOR_X86_64}
    -DEXT_USE_THIRD_PARTY=${EXT_USE_THIRD_PARTY}
    -DEXT_APPLE_NATIVE_FRAMEWORK:BOOL=${EXT_APPLE_NATIVE_FRAMEWORK}
    -DEXTGEN_ENABLE_SWIFT:BOOL=${EXTGEN_ENABLE_SWIFT}
    -DEXT_APPLE_DROP_DIR:STRING=${EXT_APPLE_DROP_DIR}
    -DPUBLIC_HEADERS:STRING=${_IOS_HDRS_ESC}
    -P ${CMAKE_SOURCE_DIR}/cmake/apple_mobile/extgen_xcframework_package.cmake
  VERBATIM
)

add_custom_target(
  package_tvos_xcframework
  COMMAND ${CMAKE_COMMAND}
    -DPLATFORM=tvos
    -DPROJECT_NAME=${PROJECT_NAME}
    -DSRC_DIR=${CMAKE_SOURCE_DIR}
    -DBUILD_CONFIG=${EXTGEN_APPLE_PACKAGE_CONFIG}
    -DBUILD_SIM=${EXTGEN_APPLE_BUILD_SIMULATOR}
    -DBUILD_SIM_X86_64=${EXTGEN_APPLE_BUILD_SIMULATOR_X86_64}
    -DEXT_USE_THIRD_PARTY=${EXT_USE_THIRD_PARTY}
    -DEXT_APPLE_NATIVE_FRAMEWORK:BOOL=${EXT_APPLE_NATIVE_FRAMEWORK}
    -DEXTGEN_ENABLE_SWIFT:BOOL=${EXTGEN_ENABLE_SWIFT}
    -DEXT_APPLE_DROP_DIR:STRING=${EXT_APPLE_DROP_DIR}
    -DPUBLIC_HEADERS:STRING=${_TVOS_HDRS_ESC}
    -P ${CMAKE_SOURCE_DIR}/cmake/apple_mobile/extgen_xcframework_package.cmake
  VERBATIM
)
