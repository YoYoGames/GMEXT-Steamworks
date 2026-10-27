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

# The NDK compiles with -g in every configuration, so an unstripped Release .so
# is mostly DWARF. Drop the debug sections and keep .symtab so a native crash
# still resolves to function names. The static runtime archives (libc++,
# libc++abi, libunwind) are private to this library: hide their symbols so
# nothing from them is exported.
target_link_options(${PROJECT_NAME} PRIVATE
  "LINKER:--exclude-libs,ALL"
  "$<$<CONFIG:Release>:LINKER:--strip-debug>")

message(STATUS "Android ABI=${CMAKE_ANDROID_ARCH_ABI}, STL=c++_static")
