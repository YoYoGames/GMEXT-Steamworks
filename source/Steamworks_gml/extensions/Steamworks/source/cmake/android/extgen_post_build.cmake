# Android post-build: copy .so to AndroidSource/libs/<ABI>/, optional AAR and third-party .so files

if(EXT_ANDROID_OUTPUT_DIR STREQUAL "")
  set(_EXT_ANDROID_OUT_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../AndroidSource")
elseif(IS_ABSOLUTE "${EXT_ANDROID_OUTPUT_DIR}")
  set(_EXT_ANDROID_OUT_DIR "${EXT_ANDROID_OUTPUT_DIR}")
else()
  get_filename_component(_EXT_ANDROID_OUT_DIR
    "${CMAKE_CURRENT_SOURCE_DIR}/${EXT_ANDROID_OUTPUT_DIR}"
    ABSOLUTE
  )
endif()

set(_ANDROID_ABI_DIR "${_EXT_ANDROID_OUT_DIR}/libs/${CMAKE_ANDROID_ARCH_ABI}")

add_custom_command(
  TARGET ${PROJECT_NAME} POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E make_directory "${_ANDROID_ABI_DIR}"
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
          "$<TARGET_FILE:${PROJECT_NAME}>"
          "${_ANDROID_ABI_DIR}/lib$<TARGET_PROPERTY:${PROJECT_NAME},OUTPUT_NAME>.so"
  COMMENT "Copying Android shared library to ${_ANDROID_ABI_DIR}"
)

if(DEFINED EXT_TP_ANDROID_AAR AND EXISTS "${EXT_TP_ANDROID_AAR}")
  set(_ANDROID_AAR_DIR "${_EXT_ANDROID_OUT_DIR}/libs-aar")
  add_custom_command(
    TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E make_directory "${_ANDROID_AAR_DIR}"
    COMMAND ${CMAKE_COMMAND} -E copy_if_different "${EXT_TP_ANDROID_AAR}" "${_ANDROID_AAR_DIR}/"
    COMMENT "Copying third-party AAR to ${_ANDROID_AAR_DIR}"
  )
endif()

if(EXT_TP_RUNTIME_DLLS)
  add_custom_command(
    TARGET ${PROJECT_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_if_different ${EXT_TP_RUNTIME_DLLS} "${_ANDROID_ABI_DIR}/"
    COMMENT "Copying third-party Android .so(s) to ${_ANDROID_ABI_DIR}"
  )
endif()
