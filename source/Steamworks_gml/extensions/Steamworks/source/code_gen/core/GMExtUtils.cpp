#include "GMExtUtils.h"

#include <cstdarg>
#include <cstdio>
#include <cstdint>
#include <iomanip>
#include <sstream>
#include <algorithm>
#include <atomic>
#include <cstring>
#include <mutex>
#include <string>
#include <unordered_map>

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

    void ExtUtils::AllowPath(const char* path, bool isDirectory, bool allowWrite)
    {
        if (path == nullptr || *path == '\0')
            return;

        // Glyph lookups typically run every frame: remember what was allowed, and with
        // which access, so a repeat costs one lookup instead of a scan of the runner's lists.
        // A path is only remembered once a runner function has taken it.
        static std::mutex s_mutex;
        static std::unordered_map<std::string, bool> s_allowed; // key: 'd'/'f' + path; value: write allowed
        const std::string key = std::string(isDirectory ? "d" : "f") + path;
        {
            std::lock_guard<std::mutex> lock(s_mutex);
            auto it = s_allowed.find(key);
            if (it != s_allowed.end() && (it->second || !allowWrite))
                return;
        }
        auto remember = [&] {
            std::lock_guard<std::mutex> lock(s_mutex);
            s_allowed[key] = allowWrite;
        };

        if (s_allowPath) {
            // GMRT adds the separator variants itself.
            s_allowPath(path, isDirectory, allowWrite);
            remember();
            return;
        }

        WhitelistFn bundleFn = isDirectory ? s_addDirectoryToBundleWhitelist : s_addFileToBundleWhitelist;
        WhitelistFn saveFn = isDirectory ? s_addDirectoryToSaveWhitelist : s_addFileToSaveWhitelist;
#if !defined(__linux__) || defined(__ANDROID__)
        // The classic runner's bundle lookup checks the load (bundle) list on Windows and
        // macOS, so reading needs only that; its save list also allows writing. Linux reads
        // check only the save list, so there a read needs it too.
        if (!allowWrite)
            saveFn = nullptr;
#endif
        if (!bundleFn && !saveFn) {
            static std::atomic<bool> s_warned{false};
            if (!s_warned.exchange(true))
                LOG_WARNING("the runner has not initialised the extension with a whitelist function; '%s' was not added", path);
            return;
        }

        auto add = [&](const std::string& p) {
            if (bundleFn)
                bundleFn(p.c_str());
            if (saveFn)
                saveFn(p.c_str());
        };

        if (!isDirectory) {
            add(path);
            remember();
            return;
        }

        // The runner matches a directory entry as a plain prefix, so it needs a trailing
        // separator, or "C:/mods" would also allow "C:/mods2". Games often append '/' to a
        // backslash path on Windows, so add both separators there.
        std::string dir(path);
        while (!dir.empty() && (dir.back() == '/' || dir.back() == '\\'))
            dir.pop_back();
        if (dir.empty())
            return;
#if defined(OS_WINDOWS) || defined(_WIN32)
        add(dir + '\\');
#endif
        add(dir + '/');
        // The prefix entries don't match the directory's own path, which SDKs return without a
        // separator (directory_exists on it, for example): allow that exactly too.
        WhitelistFn exactBundleFn = s_addFileToBundleWhitelist;
        WhitelistFn exactSaveFn = saveFn ? s_addFileToSaveWhitelist : nullptr;
        if (exactBundleFn)
            exactBundleFn(dir.c_str());
        if (exactSaveFn)
            exactSaveFn(dir.c_str());
        remember();
    }

} // namespace gm

namespace gm::files {

    void AllowFile(const char* path, Access access) { gm::ExtUtils::AllowPath(path, false, access == Access::ReadWrite); }

    void AllowDirectory(const char* path, Access access) { gm::ExtUtils::AllowPath(path, true, access == Access::ReadWrite); }

} // namespace gm::files

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

    // A GMRT without ExtensionFiles_AllowPath may pass just ExtOptGetString, so accept
    // anything that holds it and leave the missing fields null.
    if (_functions_size < offsetof(gm::details::GMRTRunnerInterface, AllowPath)) {
        LOG_ERROR("GMExtensionInitialise called with mismatched incompatible table");
        return;
    }

    gm::details::GMRTRunnerInterface runner{};
    std::memcpy(&runner, _pFunctions, std::min(_functions_size, sizeof(runner)));
    gm::ExtUtils::Init(runner);
}
