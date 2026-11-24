#pragma once
// steam_async_common.h


#include "GMSteamworks.h"

#include <steam/steam_api.h>

#include <type_traits>

namespace steam_async
{
    // Call back at once with a payload that only reports a failure, for an async call that can't be made (Steam not
    // initialised). The callback is queued like any other, so the game sees it on the next frame.
    template <typename Payload>
    void call_back_failed(const gm::wire::GMFunction& callback, gm_enums::SteamApiResult result)
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

    template <typename Payload, typename SteamStruct, bool ReportIoFailure = false>
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
            if (io_failure)
            {
                if constexpr (ReportIoFailure)
                {
                    if (cb)
                    {
                        Payload out{};
                        out.result = gm_enums::SteamApiResult::IoFailure;
                        cb.call(out);
                    }
                }
                delete this;
                return;
            }

            if (!p)
            {
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
