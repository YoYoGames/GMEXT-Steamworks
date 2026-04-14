# Windows post-build: copy .dll, runtime DLLs (CMake 3.21+), and third-party runtimes
add_custom_command(
  TARGET ${PROJECT_NAME} POST_BUILD
  COMMAND "${CMAKE_COMMAND}" -E copy_if_different
          "$<TARGET_FILE:${PROJECT_NAME}>"
          "${_EXT_OUT_DIR}/$<TARGET_FILE_NAME:${PROJECT_NAME}>"
  COMMENT "Copying shared library to ${_EXT_OUT_DIR}"
)

if(CMAKE_VERSION VERSION_GREATER_EQUAL 3.21)
  file(WRITE "${CMAKE_CURRENT_BINARY_DIR}/_copy_runtime_dlls.cmake" [=[
    if(NOT DEFINED dlls OR dlls STREQUAL "")
      message(STATUS "No runtime DLLs to copy")
      return()
    endif()
    foreach(f IN LISTS dlls)
      if(EXISTS "${f}")
        file(COPY "${f}" DESTINATION "${dst}")
      endif()
    endforeach()
  ]=])

  add_custom_command(
    TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND "${CMAKE_COMMAND}"
            -Ddlls="$<TARGET_RUNTIME_DLLS:${PROJECT_NAME}>"
            -Ddst="${_EXT_OUT_DIR}"
            -P "${CMAKE_CURRENT_BINARY_DIR}/_copy_runtime_dlls.cmake"
    COMMENT "Copying dependent runtime DLLs (if any)"
  )
endif()

if(DEFINED EXT_TP_RUNTIME_DLLS AND EXT_TP_RUNTIME_DLLS)
  add_custom_command(
    TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND "${CMAKE_COMMAND}" -E copy_if_different ${EXT_TP_RUNTIME_DLLS} "${_EXT_OUT_DIR}/"
    COMMAND_EXPAND_LISTS
    COMMENT "Copying third-party runtime(s)"
  )
endif()
