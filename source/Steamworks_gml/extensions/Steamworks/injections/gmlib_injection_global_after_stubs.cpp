struct GMRTRunnerInterface
{
    const char* (*ExtOptGetString)(const char* _ext, const char* _opt);
    void (*AllowPath)(const char* _path, bool _isDirectory, bool _allowWrite);
};
void Init_Steamworks()
{
    GMRTRunnerInterface ri;
    ri.ExtOptGetString = &ExtensionOptions_GetValue;
    #if defined(GMRT_HAS_EXTENSION_FILES_ALLOW_PATH)
    ri.AllowPath = &ExtensionFiles_AllowPath;
    #else
    ri.AllowPath = nullptr;
    #endif

    using FunctionPointer = void (*)(GMRTRunnerInterface*, size_t);
    FunctionPointer fnHandle = nullptr;
    void* libHandle = nullptr;

    libHandle = ExtUtils_GetLibraryHandle("Steamworks.ext");
    if (libHandle)
    {
        fnHandle = (FunctionPointer)SharedLibrary_GetFunctionAddress(libHandle, "GMExtensionInitialise");
        if (fnHandle) fnHandle(&ri, sizeof(GMRTRunnerInterface));
    }
}
void Startup_Steamworks()
{
    if (isInitialized) return;

    using FunctionPointer = void (*)();
    FunctionPointer fnHandle = nullptr;
    void* libHandle = nullptr;

    isInitialized = true;
}
void Shutdown_Steamworks()
{
    if (!isInitialized) return;

    using FunctionPointer = void (*)();
    FunctionPointer fnHandle = nullptr;
    void* libHandle = nullptr;

    libHandle = ExtUtils_GetLibraryHandle("Steamworks.ext");
    if (libHandle)
    {
        fnHandle = (FunctionPointer)SharedLibrary_GetFunctionAddress(libHandle, "__EXT_NATIVE__steam_api_shutdown");
        if (fnHandle) fnHandle();
    }
    isInitialized = false;
}
