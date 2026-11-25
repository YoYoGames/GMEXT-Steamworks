#pragma once
// steam_async_common.h


#include "GMSteamworks.h"

#include <steam/steam_api.h>

#include <type_traits>

namespace steam_async
{
    // Whether a payload can report a failure: its result is a SteamApiResult, or a success flag (bool). The one payload
    // that can't is steam_utils_check_file_signature's, whose result is a signature-check outcome with no failure value
    template <typename Payload>
    constexpr bool can_report_failure()
    {
        using R = std::decay_t<decltype(Payload{}.result)>;
        return std::is_same_v<R, bool> || std::is_same_v<R, gm_enums::SteamApiResult>;
    }

    // Call back at once with a payload that only reports a failure: for an async call that can't be made (Steam not
    // initialised), or whose result Steam couldn't deliver (I/O failure). The callback is queued like any other, so the
    // game sees it on the next frame. A payload that can't report a failure gets no callback
    template <typename Payload>
    void call_back_failed(const gm::wire::GMFunction& callback, gm_enums::SteamApiResult result)
    {
        // Only the known exception may skip the failure callback. Any other payload whose result can't report a
        // failure is a compile error here rather than a game left waiting
        static_assert(can_report_failure<Payload>() || std::is_same_v<Payload, gm_structs::SteamUtilsCheckFileSignatureResult>,
                      "this payload's result can't report a failure: make it a SteamApiResult or bool, or add it here as an exception");
        if constexpr (can_report_failure<Payload>())
        {
            if (callback)
            {
                Payload out{};
                if constexpr (std::is_same_v<std::decay_t<decltype(out.result)>, bool>)
                    out.result = false; // a payload whose result is a success flag
                else
                    out.result = result;
                callback.call(out);
            }
        }
    }

    // A Steam call result that calls the game back with the converted payload, or, when Steam couldn't deliver the
    // result, with a payload reporting IoFailure (false for a success flag), so a game waiting on it isn't left waiting
    template <typename Payload, typename SteamStruct>
    class CallResult
    {
    public:
        using ConverterFn = Payload(*)(const SteamStruct&);

        explicit CallResult(const gm::wire::GMFunction& callback, ConverterFn converter)
            : cb(callback), conv(converter)
        {}

        void set(SteamAPICall_t call)
        {
            cr.Set(call, this, &CallResult::on_result);
        }

    private:
        gm::wire::GMFunction cb;
        ConverterFn conv;
        CCallResult<CallResult, SteamStruct> cr;

        void on_result(SteamStruct* p, bool io_failure)
        {
#if defined(STEAMWORKS_TEST_HOOKS)
            // Test builds take the I/O failure path for every call result, so GameTest specs can check that each kind
            // of payload reports it. Never defined in a release build
            io_failure = true;
#endif
            if (io_failure || !p)
            {
                call_back_failed<Payload>(cb, io_failure ? gm_enums::SteamApiResult::IoFailure : gm_enums::SteamApiResult::Fail);
                delete this;
                return;
            }

            if (cb)
                cb.call(conv(*p));

            delete this;
        }
    };
}

// STEAM_GUARD for an async function: when Steam isn't initialised, call back with result = Fail instead of returning
// without a callback the game may be waiting for.
#define STEAM_ASYNC_GUARD(Payload, callback)                                                                           \
    do {                                                                                                               \
        if (steam_guard_failed()) {                                                                                    \
            steam_async::call_back_failed<Payload>((callback), gm_enums::SteamApiResult::Fail);                       \
            return;                                                                                                    \
        }                                                                                                              \
    } while (0)

#define STEAM_ASYNC_GUARD_RET(Payload, callback, expr)                                                                 \
    do {                                                                                                               \
        if (steam_guard_failed()) {                                                                                    \
            steam_async::call_back_failed<Payload>((callback), gm_enums::SteamApiResult::Fail);                       \
            return expr;                                                                                               \
        }                                                                                                              \
    } while (0)
