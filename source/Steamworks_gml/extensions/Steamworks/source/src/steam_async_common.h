#pragma once
// steam_async_common.h


#include "GMSteamworks.h"

#include <steam/steam_api.h>

namespace steam_async
{
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

