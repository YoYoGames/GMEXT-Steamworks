// Unit tests for src/receive_hold_back.h with a fake message type: no Steam needed.
//   tests/native/run.sh
#include "receive_hold_back.h"

#include <cstdio>
#include <cstdlib>
#include <string>
#include <vector>

namespace
{
    struct FakeMsg
    {
        std::uint32_t conn;
        std::uint32_t size;
        int id;
        bool released = false;
    };

    struct Traits
    {
        static std::uint32_t conn(FakeMsg* m) { return m->conn; }
        static std::uint32_t size(FakeMsg* m) { return m->size; }
        static void release(FakeMsg* m) { m->released = true; }
    };

    using Queue = steam_receive::HoldBack<FakeMsg, Traits>;

    // What Steam still has to deliver, in order
    struct FakeSteam
    {
        std::vector<FakeMsg*> pending;

        Queue::Fetch on_connection(std::uint32_t conn)
        {
            return [this, conn](int max, FakeMsg** out) {
                int n = 0;
                for (auto it = pending.begin(); it != pending.end() && n < max;) {
                    if ((*it)->conn == conn) { out[n++] = *it; it = pending.erase(it); } else { ++it; }
                }
                return n;
            };
        }

        Queue::Fetch on_group(std::vector<std::uint32_t> conns)
        {
            return [this, conns](int max, FakeMsg** out) {
                int n = 0;
                for (auto it = pending.begin(); it != pending.end() && n < max;) {
                    if (std::find(conns.begin(), conns.end(), (*it)->conn) != conns.end()) { out[n++] = *it; it = pending.erase(it); } else { ++it; }
                }
                return n;
            };
        }
    };

    int failures = 0;
    void check(bool ok, const std::string& what)
    {
        std::printf("%s %s\n", ok ? "ok  " : "FAIL", what.c_str());
        if (!ok) ++failures;
    }

    struct Received
    {
        std::vector<int> ids;
        std::vector<std::uint32_t> offsets;
        Queue::Write write() { return [this](FakeMsg* m, std::uint32_t off) { ids.push_back(m->id); offsets.push_back(off); }; }
    };
}

int main()
{
    {
        // A message that doesn't fit is held, not lost, and comes back first
        Queue q; FakeSteam steam;
        FakeMsg a{1, 40, 1}, b{1, 40, 2}, c{1, 40, 3};
        steam.pending = {&a, &b, &c};
        Received r1;
        auto res = q.receive_on_connection(1, 10, 100, steam.on_connection(1), r1.write());
        check(res.written == 2 && r1.ids == std::vector<int>({1, 2}) && r1.offsets == std::vector<std::uint32_t>({0, 40}),
              "fills the buffer with what fits");
        check(!c.released && q.held_count(1) == 1, "the message that doesn't fit is held, not released");
        check(a.released && b.released, "written messages are released");
        FakeMsg d{1, 10, 4};
        steam.pending = {&d};
        Received r2;
        q.receive_on_connection(1, 10, 100, steam.on_connection(1), r2.write());
        check(r2.ids == std::vector<int>({3, 4}), "the held message comes back before newer ones");
        check(q.held_count(1) == 0, "nothing left held");
    }
    {
        // A single message bigger than the buffer reports the size needed and stays held
        Queue q; FakeSteam steam;
        FakeMsg big{1, 500, 1};
        steam.pending = {&big};
        Received r;
        auto res = q.receive_on_connection(1, 4, 100, steam.on_connection(1), r.write());
        check(res.written == 0 && res.oversized && res.needed == 500, "oversized message reports the size needed");
        check(!big.released && q.held_count(1) == 1, "oversized message stays held");
        auto res2 = q.receive_on_connection(1, 4, 500, steam.on_connection(1), r.write());
        check(res2.written == 1 && r.ids == std::vector<int>({1}), "it's returned once the buffer is big enough");
    }
    {
        // count limits the messages taken; held ones count toward it, and Steam isn't asked when they fill it
        Queue q; FakeSteam steam;
        FakeMsg a{1, 10, 1}, b{1, 10, 2}, c{1, 10, 3};
        steam.pending = {&a, &b, &c};
        Received r1;
        q.receive_on_connection(1, 2, 15, steam.on_connection(1), r1.write());
        check(r1.ids == std::vector<int>({1}) && q.held_count(1) == 1 && steam.pending.size() == 1,
              "count 2 with room for 1: one written, one held, one left in Steam");
        Received r2;
        int fetched = 0;
        auto counting = [&](int max, FakeMsg** out) { fetched++; return steam.on_connection(1)(max, out); };
        q.receive_on_connection(1, 1, 100, counting, r2.write());
        check(r2.ids == std::vector<int>({2}) && fetched == 0, "a held message that fills count doesn't ask Steam");
    }
    {
        // Held by a poll group receive, then read on the connection: order kept
        Queue q; FakeSteam steam;
        FakeMsg a1{1, 30, 1}, b1{2, 30, 2}, a2{1, 30, 3}, b2{2, 30, 4};
        steam.pending = {&a1, &b1, &a2, &b2};
        Received r1;
        q.receive_on_poll_group(7, 10, 60, steam.on_group({1, 2}), r1.write());
        check(r1.ids == std::vector<int>({1, 2}), "poll group receive writes what fits");
        check(q.held_count(1) == 1 && q.held_count(2) == 1, "the rest is held per connection");
        FakeMsg a3{1, 30, 5};
        steam.pending.push_back(&a3);
        Received r2;
        q.receive_on_connection(1, 10, 100, steam.on_connection(1), r2.write());
        check(r2.ids == std::vector<int>({3, 5}), "connection 1 gets its held message before its newer one");
        Received r3;
        q.receive_on_poll_group(7, 10, 100, steam.on_group({1, 2}), r3.write());
        check(r3.ids == std::vector<int>({4}), "the group still returns connection 2's held message");
    }
    {
        // Held by a connection receive, then read through the connection's poll group: order kept
        Queue q; FakeSteam steam;
        FakeMsg a1{1, 30, 1}, a2{1, 30, 2}, b1{2, 30, 3};
        steam.pending = {&a1, &a2, &b1};
        q.set_poll_group(1, 7);
        q.set_poll_group(2, 7);
        Received r1;
        q.receive_on_connection(1, 10, 40, steam.on_connection(1), r1.write());
        check(r1.ids == std::vector<int>({1}) && q.held_count(1) == 1, "connection receive holds the second");
        Received r2;
        q.receive_on_poll_group(7, 10, 100, steam.on_group({1, 2}), r2.write());
        check(r2.ids == std::vector<int>({2, 3}), "the group returns the held message first");
    }
    {
        // Closing a connection and shutdown release what's held
        Queue q; FakeSteam steam;
        FakeMsg a{1, 50, 1}, b{2, 50, 2};
        steam.pending = {&a};
        Received r;
        q.receive_on_connection(1, 1, 10, steam.on_connection(1), r.write());
        q.release_connection(1);
        check(a.released && q.held_count(1) == 0, "closing the connection releases its held messages");
        steam.pending = {&b};
        q.receive_on_connection(2, 1, 10, steam.on_connection(2), r.write());
        q.release_all();
        check(b.released && q.held_count(2) == 0, "release_all releases everything");
    }
    {
        // A poll group receive: one connection's big message stops only that connection
        Queue q; FakeSteam steam;
        FakeMsg big{1, 500, 1}, a2{1, 10, 2}, b1{2, 10, 3}, b2{2, 10, 4};
        steam.pending = {&big, &b1, &a2, &b2};
        Received r;
        auto res = q.receive_on_poll_group(7, 10, 100, steam.on_group({1, 2}), r.write());
        check(r.ids == std::vector<int>({3, 4}), "other connections' messages are still written");
        check(q.held_count(1) == 2 && !big.released && !a2.released, "the big message and its connection's later ones are held, in order");
        check(!res.oversized, "not reported as oversized while something was written");
        Received r2;
        auto res2 = q.receive_on_poll_group(7, 10, 100, steam.on_group({1, 2}), r2.write());
        check(r2.ids.empty() && res2.oversized && res2.needed == 500, "with only the big message left, it's reported with its size");
        Received r3;
        q.receive_on_connection(1, 10, 600, steam.on_connection(1), r3.write());
        check(r3.ids == std::vector<int>({1, 2}), "a big enough buffer returns connection 1's messages in order");
    }
    {
        // A poll group receive: a connection that's stopped keeps its order, while another carries on
        Queue q; FakeSteam steam;
        FakeMsg a1{1, 60, 1}, b1{2, 30, 2}, a2{1, 10, 3}, b2{2, 30, 4};
        steam.pending = {&a1, &b1, &a2, &b2};
        Received r;
        q.receive_on_poll_group(7, 10, 70, steam.on_group({1, 2}), r.write());
        check(r.ids == std::vector<int>({1, 3}), "connection 1's messages that fit are written in order");
        check(q.held_count(1) == 0 && q.held_count(2) == 2, "connection 2 stops at its first message that doesn't fit, and its later one stays behind it");
        q.release_all();
    }
    {
        // held_connections lists what's held
        Queue q; FakeSteam steam;
        FakeMsg a{1, 50, 1}, b{4, 50, 2};
        steam.pending = {&a, &b};
        Received r;
        q.receive_on_poll_group(7, 10, 10, steam.on_group({1, 4}), r.write());
        auto conns = q.held_connections();
        check(conns.size() == 2, "held_connections lists both connections");
        q.release_all();
    }
    std::printf("%s\n", failures ? "FAILED" : "all passed");
    return failures ? 1 : 0;
}
