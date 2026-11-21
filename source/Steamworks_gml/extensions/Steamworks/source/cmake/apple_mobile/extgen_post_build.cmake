# Apple mobile (iOS/tvOS) post-build: XCFramework packaging and GameMaker Xcode integration
message(STATUS "Apple mobile build: use package_ios_xcframework / package_tvos_xcframework targets.")

include(${CMAKE_CURRENT_SOURCE_DIR}/cmake/apple_mobile/extgen_xcframework_targets.cmake)

# Effective .xcodeproj path (src-controlled override takes precedence)
set(_EXT_GM_XCODEPROJ "${EXT_GM_XCODEPROJ}")
if(NOT EXT_GM_XCODEPROJ_OVERRIDE STREQUAL "")
  set(_EXT_GM_XCODEPROJ "${EXT_GM_XCODEPROJ_OVERRIDE}")
endif()

# Effective app target (src-controlled override takes precedence)
set(_EXT_GM_APP_TARGET "${EXT_GM_APP_TARGET}")
if(NOT EXT_GM_APP_TARGET_OVERRIDE STREQUAL "")
  set(_EXT_GM_APP_TARGET "${EXT_GM_APP_TARGET_OVERRIDE}")
endif()

add_custom_target(integrate_gamemaker
  COMMAND ${CMAKE_COMMAND}
    -DEXT_REPO_ROOT:PATH=${CMAKE_SOURCE_DIR}
    -DEXT_GM_XCODEPROJ:FILEPATH=${_EXT_GM_XCODEPROJ}
    -DEXT_GM_APP_TARGET:STRING=${_EXT_GM_APP_TARGET}
    -DEXT_EXT_XCODEPROJ:FILEPATH=${CMAKE_BINARY_DIR}/${PROJECT_NAME}.xcodeproj
    -DEXT_EXT_TARGET:STRING=${PROJECT_NAME}
    -P "${CMAKE_SOURCE_DIR}/cmake/apple_mobile/extgen_xcode_integrate.cmake"
  COMMENT "Integrating extension into GameMaker Xcode project"
  VERBATIM
)

if(NOT EXT_ENABLE_GM_INTEGRATION)
  set_property(TARGET integrate_gamemaker PROPERTY EXCLUDE_FROM_ALL TRUE)
endif()
