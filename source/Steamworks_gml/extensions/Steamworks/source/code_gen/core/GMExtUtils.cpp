#include "GMExtUtils.h"

#include <cstdarg>
#include <cstdio>
#include <cstdint>
#include <iomanip>
#include <sstream>
#include <atomic>
#include <mutex>

#if defined(OS_ANDROID)
#include <android/log.h>
#endif

#include "GMExtUtils.h"

// -------------------------------
// Logging sink implementation
// -------------------------------
namespace gm::log {

    static int AndroidPrio(Level lvl)
    {
#if defined(OS_ANDROID)
        switch (lvl) {
        case Level::Error:
            return ANDROID_LOG_ERROR;
        case Level::Warning:
            return ANDROID_LOG_WARN;
        case Level::Info:
            return ANDROID_LOG_INFO;
        case Level::Debug:
            return ANDROID_LOG_DEBUG;
        default:
            return ANDROID_LOG_INFO;
        }
#else
        (void)lvl;
        return 0;
#endif
    }

    void Write(Level lvl, const char* tag, const char* func, const char* fmt, ...)
    {
        char msg[2048];

        va_list args;
        va_start(args, fmt);
        std::vsnprintf(msg, sizeof(msg), fmt, args);
        va_end(args);

#if defined(OS_ANDROID)
        __android_log_print(AndroidPrio(lvl), (tag && *tag) ? tag : "gm", "%s :: %s", func ? func : "?", msg);
#else
        AndroidPrio(lvl);
        // stderr tends to be more reliable across desktop/mobile tooling than stdout.
        std::fprintf(stderr, "[%s] %s :: %s\n", (tag && *tag) ? tag : "gm", func ? func : "?", msg);
        std::fflush(stderr);
#endif
    }

} // namespace gm::log

namespace gm {

    // InitHook
    static std::atomic<InitHook>& HookStorage()
    {
        static std::atomic<InitHook> hook{ nullptr };
        return hook;
    }

    static std::once_flag& OnceFlag()
    {
        static std::once_flag f;
        return f;
    }

    void SetInitHook(InitHook hook) { HookStorage().store(hook, std::memory_order_release); }

    void RunInitHookOnce()
    {
        std::call_once(OnceFlag(), [] {
            InitHook hook = HookStorage().load(std::memory_order_acquire);
            if (hook)
                hook();
            });
    }

    // ExtUtils
    std::string ExtUtils::BufferToHex(const void* buffer, std::size_t length, bool spaced)
    {
        if (!buffer || length == 0)
            return {};

        const auto* bytes = static_cast<const std::uint8_t*>(buffer);

        std::ostringstream oss;
        oss << std::hex << std::setfill('0');

        for (std::size_t i = 0; i < length; ++i) {
            oss << std::setw(2) << static_cast<unsigned>(bytes[i]);
            if (spaced && i + 1 < length)
                oss << ' ';
        }

        return oss.str();
    }

} // namespace gm

// -------------------------------
// GameMaker entry point
// -------------------------------

struct YYRunnerInterface {};
YYEXPORT void YYExtensionInitialise(const struct YYRunnerInterface* _pFunctions, size_t _functions_size)
{
    (void)_functions_size;

    if (_pFunctions == nullptr) {
        LOG_ERROR("YYExtensionInitialise called with null function table");
        return;
    }

    if (_functions_size < sizeof(gm::details::GMS2RunnerInterface)) {
        LOG_ERROR("YYExtensionInitialise called with mismatched incompatible table");
        return;
    }

    // Wire your utilities (TODO body inside Init per your request)
    gm::ExtUtils::Init(*(gm::details::GMS2RunnerInterface*)_pFunctions);
}

GMEXPORT void GMExtensionInitialise(const struct gm::details::GMRTRunnerInterface* _pFunctions, size_t _functions_size)
{
    (void)_functions_size;

    if (_pFunctions == nullptr) {
        LOG_ERROR("GMExtensionInitialise called with null function table");
        return;
    }

    if (_functions_size < sizeof(gm::details::GMRTRunnerInterface)) {
        LOG_ERROR("GMExtensionInitialise called with mismatched incompatible table");
        return;
    }

    // Wire your utilities (TODO body inside Init per your request)
    gm::ExtUtils::Init(*_pFunctions);
}
