# tvOS post-project hook: code_gen source discovery, ObjCXX/Swift setup, includes, defines

enable_language(OBJCXX)

file(GLOB SRC_CORE CONFIGURE_DEPENDS
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/core/*.cpp
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/core/*.mm
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/core/*.swift
)
file(GLOB SRC_COMMON CONFIGURE_DEPENDS
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/*.cpp
)
file(GLOB_RECURSE SRC_TVOS CONFIGURE_DEPENDS
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/tvos/*.[cS]
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/tvos/*.cpp
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/tvos/*.mm
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/tvos/*.swift
)
file(GLOB_RECURSE SRC_NATIVE CONFIGURE_DEPENDS
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/native/*.[cS]
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/native/*.cpp
)

if(EXTGEN_ENABLE_SWIFT)
  enable_language(Swift)
  set_target_properties(${PROJECT_NAME} PROPERTIES
    XCODE_ATTRIBUTE_DEFINES_MODULE                YES
    XCODE_ATTRIBUTE_SWIFT_INSTALL_OBJC_HEADER     YES
    XCODE_ATTRIBUTE_SWIFT_OBJC_INTERFACE_HEADER_NAME "${PROJECT_NAME}-Swift.h"
    XCODE_ATTRIBUTE_SWIFT_OBJC_INTEROP_MODE       objcxx
    XCODE_ATTRIBUTE_SWIFT_OBJC_BRIDGING_HEADER
      "${CMAKE_CURRENT_SOURCE_DIR}/code_gen/tvos/${PROJECT_NAME}-Bridging-Header.h"
  )
endif()

if(EXT_APPLE_NATIVE_FRAMEWORK)
  message(STATUS "tvOS flavour: NATIVE (ObjC wrapper + C++ native core)")
  target_sources(${PROJECT_NAME} PRIVATE ${SRC_CORE} ${SRC_COMMON} ${SRC_NATIVE} ${SRC_TVOS})
  target_compile_definitions(${PROJECT_NAME} PRIVATE EXTGEN_APPLE_NATIVE_FW=1)
else()
  message(STATUS "tvOS flavour: STANDARD (platform-native implementation)")
  target_sources(${PROJECT_NAME} PRIVATE ${SRC_CORE} ${SRC_COMMON} ${SRC_TVOS})
  target_compile_definitions(${PROJECT_NAME} PRIVATE EXTGEN_APPLE_NATIVE_FW=0)
endif()

target_include_directories(${PROJECT_NAME} PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/core
)
target_compile_definitions(${PROJECT_NAME} PRIVATE OS_TVOS EXTGEN_HAS_JNI=0)
