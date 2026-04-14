#pragma once
// steam_async_common.h


#include "GMSteamworks.h"

#include <steam/steam_api.h>

namespace steam_async
{
    bool require_callback(const gm::wire::GMFunction& cb, const char* fn_name);

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
            if (!p || io_failure)
            {
                delete this;
                return;
            }

            if (cb)
                cb.call(conv(*p));

            delete this;
        }
    };

    template <typename SteamStruct>
    class CallResultNoPayload
    {
    public:
        explicit CallResultNoPayload(const gm::wire::GMFunction& callback)
            : cb(callback)
        {}

        void set(SteamAPICall_t call)
        {
            cr.Set(call, this, &CallResultNoPayload::on_result);
        }

    private:
        gm::wire::GMFunction cb;
        CCallResult<CallResultNoPayload, SteamStruct> cr;

        void on_result(SteamStruct* /*p*/, bool io_failure)
        {
            if (io_failure)
            {
                delete this;
                return;
            }

            if (cb)
                cb.call();

            delete this;
        }
    };
}
