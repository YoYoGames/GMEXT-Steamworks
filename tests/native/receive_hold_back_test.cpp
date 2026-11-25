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
        check(res.oversized && res.needed == 500, "reported as oversized even though other connections' messages were written");
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
    {
        // A peer stuck behind a big message that keeps sending doesn't stop the others over several receives
        Queue q; FakeSteam steam;
        std::vector<FakeMsg*> all;
        auto msg = [&](std::uint32_t conn, std::uint32_t size, int id) { all.push_back(new FakeMsg{conn, size, id}); return all.back(); };
        steam.pending = {msg(1, 500, 0)};
        int id = 1;
        std::size_t conn2_written = 0;
        bool always_reported = true;
        for (int frame = 0; frame < 6; ++frame) {
            for (int k = 0; k < 3; ++k) {
                steam.pending.push_back(msg(1, 10, id++));
                steam.pending.push_back(msg(2, 10, id++));
            }
            Received r;
            auto res = q.receive_on_poll_group(7, 10, 100, steam.on_group({1, 2}), r.write());
            conn2_written += r.ids.size();
            always_reported = always_reported && res.oversized && res.needed == 500;
        }
        check(conn2_written == 18, "connection 2's 18 messages are all written across 6 receives");
        check(always_reported, "every receive reports connection 1's 500-byte message");
        check(q.held_count(1) == 19, "connection 1's messages are held in order behind the big one");
        Received r;
        q.receive_on_connection(1, 100, 1000, steam.on_connection(1), r.write());
        bool in_order = r.ids.size() == 19 && r.ids[0] == 0;
        for (std::size_t k = 1; k < r.ids.size(); ++k) in_order = in_order && r.ids[k] > r.ids[k - 1];
        check(in_order, "a big enough buffer returns them all in order");
        for (FakeMsg* m : all) delete m;
    }
    {
        // A stuck connection's held messages are capped; at the cap, nothing more is taken from Steam and it's reported
        Queue q; FakeSteam steam;
        std::vector<FakeMsg*> all;
        all.push_back(new FakeMsg{1, 500, 0});
        steam.pending = {all.back()};
        for (std::size_t k = 0; k < Queue::kMaxHeldPerConnection + 50; ++k) {
            all.push_back(new FakeMsg{1, 10, (int)k + 1});
            steam.pending.push_back(all.back());
        }
        Queue::Result last;
        for (int frame = 0; frame < 100 && !last.held_limit; ++frame) {
            Received r;
            last = q.receive_on_poll_group(7, 10, 100, steam.on_group({1}), r.write());
        }
        check(last.held_limit && last.oversized, "the cap is reached and reported");
        std::size_t held = q.held_count(1);
        Received r;
        auto again = q.receive_on_poll_group(7, 10, 100, steam.on_group({1}), r.write());
        check(again.held_limit && q.held_count(1) == held, "at the cap nothing more is taken from Steam");
        q.release_all();
        for (FakeMsg* m : all) delete m;
    }
    {
        // A connection receive whose next message is too big asks Steam for nothing
        Queue q; FakeSteam steam;
        FakeMsg big{1, 500, 1}, s{1, 10, 2};
        steam.pending = {&big, &s};
        Received r;
        q.receive_on_connection(1, 1, 100, steam.on_connection(1), r.write());
        int fetched = 0;
        auto counting = [&](int max, FakeMsg** out) { fetched++; return steam.on_connection(1)(max, out); };
        auto res = q.receive_on_connection(1, 10, 100, counting, r.write());
        check(fetched == 0 && res.oversized && q.held_count(1) == 1 && steam.pending.size() == 1,
              "a stuck connection receive doesn't take more from Steam");
        q.release_all();
    }
    {
        // Two stuck connections: the size reported is the larger, so one buffer of that size frees both
        Queue q; FakeSteam steam;
        FakeMsg a{1, 500, 1}, b{2, 2000, 2}, c{3, 10, 3};
        steam.pending = {&a, &b, &c};
        Received r;
        auto res = q.receive_on_poll_group(7, 10, 100, steam.on_group({1, 2, 3}), r.write());
        check(r.ids == std::vector<int>({3}) && res.oversized && res.needed == 2000, "the larger of two stuck messages is reported");
        Received r2;
        q.receive_on_poll_group(7, 10, 2000, steam.on_group({1, 2, 3}), r2.write());
        check(r2.ids.size() == 1, "a 2000-byte buffer frees the first of them in this receive (2000 bytes total)");
        q.release_all();
    }
    std::printf("%s\n", failures ? "FAILED" : "all passed");
    return failures ? 1 : 0;
}
