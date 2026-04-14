# Android post-project hook: code_gen source discovery, includes, defines, link libraries

file(GLOB SRC_CORE CONFIGURE_DEPENDS
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/core/*.cpp
)
file(GLOB SRC_COMMON CONFIGURE_DEPENDS
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/*.cpp
)
file(GLOB_RECURSE SRC_ANDROID CONFIGURE_DEPENDS
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/android/*.[cS]
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/android/*.cpp
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/native/*.[cS]
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/native/*.cpp
)

target_sources(${PROJECT_NAME} PRIVATE ${SRC_CORE} ${SRC_COMMON} ${SRC_ANDROID})
target_include_directories(${PROJECT_NAME} PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/core
  ${CMAKE_CURRENT_SOURCE_DIR}/code_gen/android
)
target_compile_definitions(${PROJECT_NAME} PRIVATE OS_ANDROID EXTGEN_HAS_JNI=1)

find_library(_log_lib log)
find_library(_android_lib android)
target_link_libraries(${PROJECT_NAME} PRIVATE ${_log_lib} ${_android_lib})

message(STATUS "Android ABI=${CMAKE_ANDROID_ARCH_ABI}, STL=c++_static")
