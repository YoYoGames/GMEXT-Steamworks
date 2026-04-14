#pragma once

#include <cstddef>
#include <cstdio>
#include <string>

#if defined(OS_WINDOWS) || defined(OS_PS4) || defined(OS_PS5) || defined(OS_GDK)
#define GMEXPORT extern "C" __declspec(dllexport)
#define YYEXPORT __declspec(dllexport)
#elif defined(OS_ANDROID)
#define GMEXPORT
#define YYEXPORT
#elif defined(__APPLE__)
#include <TargetConditionals.h>
#if TARGET_OS_IOS || TARGET_OS_TV || defined(OS_IOS) || defined(OS_TVOS)
#define GMEXPORT
#define YYEXPORT
#define TARGET_APPLE_MOBILE
#else // macOS, etc.
#define GMEXPORT extern "C" __attribute__((visibility("default")))
#define YYEXPORT __attribute__((visibility("default")))
#endif
#else
// Linux and others
#define GMEXPORT extern "C" __attribute__((visibility("default")))
#define YYEXPORT __attribute__((visibility("default")))
#endif

// -------------------------------
// Runner Interfaces (as provided)
// -------------------------------
namespace gm::details {

    struct GMS2RunnerInterface {
        // basic interaction with the user
        void (*unused_00)(); // DebugConsoleOutput
        void (*unused_01)(); // ReleaseConsoleOutput
        void (*unused_02)(); // ShowMessage

        // for printing error messages
        void (*unused_03)(); // YYError

        // alloc, realloc and free
        void (*unused_04)(); // YYAlloc
        void (*unused_05)(); // YYRealloc
        void (*unused_06)(); // YYFree
        void (*unused_07)(); // YYStrDup

        // yyget* functions for parsing arguments out of the arg index
        void (*unused_08)(); // YYGetBool
        void (*unused_09)(); // YYGetFloat
        void (*unused_10)(); // YYGetReal
        void (*unused_11)(); // YYGetInt32
        void (*unused_12)(); // YYGetUint32
        void (*unused_13)(); // YYGetInt64
        void (*unused_14)(); // YYGetPtr
        void (*unused_15)(); // YYGetPtrOrInt
        void (*unused_16)(); // YYGetString

        // typed get functions from a single rvalue
        void (*unused_17)(); // BOOL_RValue
        void (*unused_18)(); // REAL_RValue
        void (*unused_19)(); // PTR_RValue
        void (*unused_20)(); // INT64_RValue
        void (*unused_21)(); // INT32_RValue

        // calculate hash values from an RValue
        void (*unused_22)(); // HASH_RValue

        // copying, setting and getting RValue
        void (*unused_23)(); // SET_RValue
        bool (*unused_24)(); // GET_RValue
        void (*unused_25)(); // COPY_RValue
        void (*unused_26)(); // KIND_RValue
        void (*unused_27)(); // FREE_RValue
        void (*unused_28)(); // YYCreateString

        void (*unused_29)(); // YYCreateArray

        // finding and runnine user scripts from name
        void (*unused_30)(); // Script_Find_Id
        bool (*unused_31)(); // Script_Perform

        // finding builtin functions
        void (*unused_32)(); // Code_Function_Find

        // http functions
        void (*unused_33)(); // HTTP_Get
        void (*unused_34)(); // HTTP_Post
        void (*unused_35)(); // HTTP_Request

        // sprite loading helper functions
        void (*unused_36)(); // ASYNCFunc_SpriteAdd
        void (*unused_37)(); // ASYNCFunc_SpriteCleanup
        void (*unused_38)(); // CreateSpriteAsync

        // timing
        void (*unused_39)(); // Timing_Time
        void (*unused_40)(); // Timing_Sleep

        // mutex handling
        void (*unused_41)(); // YYMutexCreate
        void (*unused_42)(); // YYMutexDestroy
        void (*unused_43)(); // YYMutexLock
        void (*unused_44)(); // YYMutexUnlock

        // async events
        void (*unused_45)(); // CreateAsyncEventWithDSMap
        void (*unused_46)(); // CreateAsyncEventWithDSMapAndBuffer

        // ds map manipulation
        void (*unused_47)(); // CreateDsMap
        void (*unused_48)(); // DsMapAddDouble
        void (*unused_49)(); // DsMapAddString
        void (*unused_50)(); // DsMapAddInt64

        // buffer access
        void (*unused_51)(); // BufferGetContent
        void (*unused_52)(); // BufferWriteContent
        void (*unused_53)(); // CreateBuffer

        // variables
        void* unused_54; // pLiveConnection
        void* unused_55; // pHTTP_ID

        // ds list manipulation
        void (*unused_56)(); // DsListCreate
        void (*unused_57)(); // DsMapAddList
        void (*unused_58)(); // DsListAddMap
        void (*unused_59)(); // DsMapClear
        void (*unused_60)(); // DsListClear

        // files
        bool (*unused_61)(); // BundleFileExists
        bool (*unused_62)(); // BundleFileName
        bool (*unused_63)(); // SaveFileExists
        bool (*unused_64)(); // SaveFileName

        // base64
        bool (*unused_65)(); // Base64Encode

        // ds list manipulation (part 2)
        void (*unused_66)(); // DsListAddInt64

        // whitelisting
        void (*unused_67)(); // AddDirectoryToBundleWhitelist
        void (*unused_68)(); // AddFileToBundleWhitelist
        void (*unused_69)(); // AddDirectoryToSaveWhitelist
        void (*unused_70)(); // AddFileToSaveWhitelist

        // utilities
        void (*unused_71)(); // KIND_NAME_RValue

        // ds map manipulation (part 2)
        void (*unused_72)(); // DsMapAddBool
        void (*unused_73)(); // DsMapAddRValue
        void (*unused_74)(); // DestroyDsMap

        // struct manipulation
        void (*unused_75)(); // StructCreate
        void (*unused_76)(); // StructAddBool
        void (*unused_77)(); // StructAddDouble
        void (*unused_78)(); // StructAddInt
        void (*unused_79)(); // StructAddRValue
        void (*unused_80)(); // StructAddString

        // directory manipulation
        void (*unused_81)(); // WhitelistIsDirectoryIn
        void (*unused_82)(); // WhiteListIsFilenameIn
        void (*unused_83)(); // WhiteListAddTo
        void (*unused_84)(); // DirExists

        // buffer access (part 2)
        void (*unused_85)(); // BufferGetFromGML
        void (*unused_86)(); // BufferTELL
        void (*unused_87)(); // BufferGet

        // files (part 2)
        void (*unused_88)(); // FilePrePend

        // struct manipulation (part 2)
        void (*unused_89)(); // StructAddInt32
        void (*unused_90)(); // StructAddInt64
        void (*unused_91)(); // StructGetMember
        void (*unused_92)(); // StructGetKeys
        void (*unused_93)(); // YYGetStruct

        // extension options
        void (*unused_94)(); // extOptGetRValue
        const char* (*ExtOptGetString)(const char* _ext, const char* _opt);
        void (*unused_95)(); // extOptGetReal

        // utilities (part 2)
        void (*unused_96)(); // isRunningFromIDE
        void (*unused_97)(); // YYArrayGetLength
        void (*unused_98)(); // extGetVersion
    };

    struct GMRTRunnerInterface {
        const char* (*ExtOptGetString)(const char* _ext, const char* _opt);
    };

}
// ----------------------------------
// Cross-platform logging declarations
// ----------------------------------
namespace gm::log {
    enum class Level { Debug, Info, Warning, Error };

    // Central sink used by TRACE/LOG_* macros.
    void Write(Level lvl, const char* tag, const char* func, const char* fmt, ...);
} // namespace gm::log

// ----------------------------------
// Logging macros (now cross-platform)
// ----------------------------------
#define TRACE(fmt, ...) ::gm::log::Write(::gm::log::Level::Debug, "TRACE", __func__, fmt, ##__VA_ARGS__)
#define LOG_DEBUG(fmt, ...) ::gm::log::Write(::gm::log::Level::Debug, "DEBUG", __func__, fmt, ##__VA_ARGS__)
#define LOG_INFO(fmt, ...) ::gm::log::Write(::gm::log::Level::Info, "INFO", __func__, fmt, ##__VA_ARGS__)
#define LOG_WARNING(fmt, ...) ::gm::log::Write(::gm::log::Level::Warning, "WARNING", __func__, fmt, ##__VA_ARGS__)
#define LOG_ERROR(fmt, ...) ::gm::log::Write(::gm::log::Level::Error, "ERROR", __func__, fmt, ##__VA_ARGS__)

namespace gm {

    // InitHook

    // Single init hook: void(), no args
    using InitHook = void (*)();

    // Set or replace the hook (thread-safe store)
    void SetInitHook(InitHook hook);

    // Invoke once (safe if called multiple times)
    void RunInitHookOnce();

    // Helper for global-scope registration
    struct AutoInitHook final {
        explicit AutoInitHook(InitHook hook) { SetInitHook(hook); }
    };

    // ExtUtils

    class ExtUtils final {
    public:
        // Matches the runner-provided function signature (const char* return).
        using GetExtensionOptionFn = const char* (*)(const char* extName, const char* optName);

        // "returns void and has no args"
        using InitCallbackFn = void (*)();

        // Redirect to stored function pointer. If null -> empty string.
        static std::string GetExtensionOption(const char* extName, const char* optName)
        {
            if (!s_getExtensionOption)
                return {};
            const char* s = s_getExtensionOption(extName, optName);
            return s ? std::string(s) : std::string{};
        }

        static void SetInitializationCallback(InitCallbackFn fn) { s_initCallback = fn; }

        static void Init(const gm::details::GMS2RunnerInterface& runner)
        {
            s_getExtensionOption = runner.ExtOptGetString;

            // Run the single registered hook once.
            gm::RunInitHookOnce();
        }

        static void Init(const gm::details::GMRTRunnerInterface& runner)
        {
            s_getExtensionOption = runner.ExtOptGetString;

            // Run the single registered hook once.
            gm::RunInitHookOnce();
        }

        // Utility: returns hex string (optionally spaced: "aa bb cc")
        static std::string BufferToHex(const void* buffer, std::size_t length, bool spaced = true);

    private:
        inline static GetExtensionOptionFn s_getExtensionOption = nullptr;
        inline static InitCallbackFn s_initCallback = nullptr;
    };

} // namespace gm

// Global-scope helper macro.
// Usage: GM_REGISTER_INIT_HOOK(MyInitFn);
#define GM_REGISTER_INIT_HOOK(fn) static ::gm::AutoInitHook _gm_autoinit_hook_##__COUNTER__(&(fn))

GMEXPORT void GMExtensionInitialise(const struct gm::details::GMRTRunnerInterface* _pFunctions, size_t _functions_size);