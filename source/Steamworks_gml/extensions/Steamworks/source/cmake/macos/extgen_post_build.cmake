# macOS post-build: copy dylib and optional third-party runtimes to the output directory
add_custom_command(
  TARGET ${PROJECT_NAME} POST_BUILD
  COMMAND "${CMAKE_COMMAND}" -E copy_if_different
          "$<TARGET_FILE:${PROJECT_NAME}>"
          "${_EXT_OUT_DIR}/$<TARGET_FILE_NAME:${PROJECT_NAME}>"
  COMMENT "Copying shared library to ${_EXT_OUT_DIR}"
)

if(DEFINED EXT_TP_RUNTIME_DLLS AND EXT_TP_RUNTIME_DLLS)
  add_custom_command(
    TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND "${CMAKE_COMMAND}" -E copy_if_different ${EXT_TP_RUNTIME_DLLS} "${_EXT_OUT_DIR}/"
    COMMAND_EXPAND_LISTS
    COMMENT "Copying third-party runtime(s)"
  )
endif()
