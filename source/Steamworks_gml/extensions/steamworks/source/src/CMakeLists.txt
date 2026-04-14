
set(SRC_DIR ${CMAKE_CURRENT_LIST_DIR})

file(GLOB ALL_SRCS CONFIGURE_DEPENDS
    "${SRC_DIR}/*.cpp")

target_sources(${PROJECT_NAME} PRIVATE ${ALL_SRCS})
target_include_directories(${PROJECT_NAME} PRIVATE "${SRC_DIR}")
