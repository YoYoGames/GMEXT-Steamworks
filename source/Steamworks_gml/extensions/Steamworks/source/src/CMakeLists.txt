
set(SRC_DIR ${CMAKE_CURRENT_LIST_DIR})

file(GLOB ALL_SRCS CONFIGURE_DEPENDS
    "${SRC_DIR}/*.cpp")

target_sources(${PROJECT_NAME} PRIVATE ${ALL_SRCS})
target_include_directories(${PROJECT_NAME} PRIVATE "${SRC_DIR}")

# Test builds only: every Steam call result takes the I/O failure path (steam_async_common.h), so GameTest specs
# (tests/gametest/*.hooks.json) can check the failure each payload reports. Never on for a release build
option(STEAMWORKS_TEST_HOOKS "Build the test hooks into the extension (test builds only)" OFF)
if(STEAMWORKS_TEST_HOOKS)
    target_compile_definitions(${PROJECT_NAME} PRIVATE STEAMWORKS_TEST_HOOKS=1)
    message(STATUS "Steamworks: STEAMWORKS_TEST_HOOKS is on - this is a test build, not for release")
endif()
