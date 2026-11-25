#pragma once
// receive_hold_back.h
//
// Messages a batch receive took from Steam but couldn't write into the game's buffer. Steam can't put a message
// back or let us peek, so a message that doesn't fit is held here and returned first by the next receive that
// covers it, instead of being released and lost (reliable ones included).
//
// Held messages are kept per connection, stamped with the order they were taken from Steam. A connection receive
// returns its own held messages first. A poll group receive returns the held messages of every connection in the
// group first, merged in the order they were taken, so a message held by a poll group receive still comes before
// later ones when its connection is then read directly, and the other way round.
//
// Independent of the Steam headers so it can be unit tested: Traits supplies conn(m), size(m) and release(m) for the
// message type.

#include <algorithm>
#include <cstddef>
#include <cstdint>
#include <deque>
#include <functional>
#include <map>
#include <mutex>
#include <vector>

namespace steam_receive
{
    template <typename Msg, typename Traits>
    class HoldBack
    {
    public:
        using Conn = std::uint32_t;
        using Group = std::uint32_t;

        struct Held
        {
            std::uint64_t seq;
            Msg* msg;
        };

        struct Result
        {
            std::size_t written = 0;  // messages written to the buffer and released
            bool oversized = false;   // the first message alone doesn't fit the buffer; it stays held
            std::uint32_t needed = 0; // its size, when oversized
        };

        // Fetch(max, out) takes up to max messages from Steam into out and returns how many.
        // Write(msg, offset) copies the message into the game's buffer at offset and reports it.
        using Fetch = std::function<int(int max, Msg** out)>;
        using Write = std::function<void(Msg* msg, std::uint32_t offset)>;

        Result receive_on_connection(Conn conn, std::uint32_t count, std::uint64_t capacity, const Fetch& fetch,
                                     const Write& write)
        {
            std::lock_guard<std::mutex> lock(mutex_);
            std::vector<Held> pending = take_connection(conn);
            return receive(std::move(pending), count, capacity, fetch, write, 0, false);
        }

        Result receive_on_poll_group(Group group, std::uint32_t count, std::uint64_t capacity, const Fetch& fetch,
                                     const Write& write)
        {
            std::lock_guard<std::mutex> lock(mutex_);
            std::vector<Held> pending;
            for (auto it = held_.begin(); it != held_.end();) {
                auto g = group_of_.find(it->first);
                if (g != group_of_.end() && g->second == group) {
                    pending.insert(pending.end(), it->second.begin(), it->second.end());
                    it = held_.erase(it);
                } else {
                    ++it;
                }
            }
            std::sort(pending.begin(), pending.end(), [](const Held& a, const Held& b) { return a.seq < b.seq; });
            return receive(std::move(pending), count, capacity, fetch, write, group, true);
        }

        // SetConnectionPollGroup: later poll group receives cover the connection's held messages
        void set_poll_group(Conn conn, Group group)
        {
            std::lock_guard<std::mutex> lock(mutex_);
            if (group == 0)
                group_of_.erase(conn);
            else
                group_of_[conn] = group;
        }

        void destroy_poll_group(Group group)
        {
            std::lock_guard<std::mutex> lock(mutex_);
            for (auto it = group_of_.begin(); it != group_of_.end();)
                it = (it->second == group) ? group_of_.erase(it) : std::next(it);
        }

        // CloseConnection: its held messages can't be read any more
        void release_connection(Conn conn)
        {
            std::lock_guard<std::mutex> lock(mutex_);
            for (const Held& h : take_connection(conn))
                Traits::release(h.msg);
            group_of_.erase(conn);
        }

        // Before SteamAPI_Shutdown
        void release_all()
        {
            std::lock_guard<std::mutex> lock(mutex_);
            for (auto& [conn, queue] : held_)
                for (const Held& h : queue)
                    Traits::release(h.msg);
            held_.clear();
            group_of_.clear();
        }

        // Connections that have held messages (to release those of connections closed some other way)
        std::vector<Conn> held_connections() const
        {
            std::lock_guard<std::mutex> lock(mutex_);
            std::vector<Conn> out;
            for (const auto& [conn, queue] : held_)
                out.push_back(conn);
            return out;
        }

        std::size_t held_count(Conn conn) const
        {
            std::lock_guard<std::mutex> lock(mutex_);
            auto it = held_.find(conn);
            return it == held_.end() ? 0 : it->second.size();
        }

    private:
        mutable std::mutex mutex_;
        std::map<Conn, std::deque<Held>> held_;
        std::map<Conn, Group> group_of_;
        std::uint64_t next_seq_ = 1;

        std::vector<Held> take_connection(Conn conn)
        {
            std::vector<Held> out;
            auto it = held_.find(conn);
            if (it != held_.end()) {
                out.assign(it->second.begin(), it->second.end());
                held_.erase(it);
            }
            return out;
        }

        void put_back(const Held& h)
        {
            // Everything put back is older than anything still in Steam, and pending is in seq order, so appending
            // keeps each connection's queue in order
            held_[Traits::conn(h.msg)].push_back(h);
        }

        Result receive(std::vector<Held> pending, std::uint32_t count, std::uint64_t capacity, const Fetch& fetch,
                       const Write& write, Group group, bool from_group)
        {
            Result result;
            if (count == 0) {
                for (const Held& h : pending)
                    put_back(h);
                return result;
            }

            // Only ask Steam for more when the held messages don't already fill the request
            if (pending.size() < count) {
                std::vector<Msg*> fresh(count - pending.size(), nullptr);
                int n = fetch((int)fresh.size(), fresh.data());
                n = std::max(0, std::min(n, (int)fresh.size()));
                for (int i = 0; i < n; ++i) {
                    if (!fresh[i])
                        continue;
                    if (from_group)
                        group_of_[Traits::conn(fresh[i])] = group;
                    pending.push_back(Held{next_seq_++, fresh[i]});
                }
            }

            // Steam only orders messages within a connection. A connection receive stops at the first message that
            // doesn't fit. A poll group receive stops only that message's connection: its later messages are held
            // behind it, and other connections' messages that fit are still written, so one peer's big message
            // can't stall the whole group
            std::uint64_t offset = 0;
            std::vector<Conn> blocked;
            std::uint32_t first_blocked_size = 0;
            std::size_t i = 0;
            for (; i < pending.size() && result.written < count; ++i) {
                const Held& h = pending[i];
                const Conn c = Traits::conn(h.msg);
                const std::uint32_t size = Traits::size(h.msg);
                const bool is_blocked = std::find(blocked.begin(), blocked.end(), c) != blocked.end();
                if (!is_blocked && offset + size <= capacity) {
                    write(h.msg, (std::uint32_t)offset);
                    Traits::release(h.msg);
                    offset += size;
                    ++result.written;
                    continue;
                }
                if (!is_blocked) {
                    if (blocked.empty())
                        first_blocked_size = size;
                    blocked.push_back(c);
                }
                put_back(h);
                if (!from_group)
                    break;
            }
            if (!from_group && i < pending.size() && !blocked.empty())
                ++i; // the message that didn't fit is already held
            for (; i < pending.size(); ++i)
                put_back(pending[i]);
            // Nothing could be written because the first message in the way is bigger than the whole buffer
            if (result.written == 0 && !blocked.empty() && first_blocked_size > capacity) {
                result.oversized = true;
                result.needed = first_blocked_size;
            }
            return result;
        }
    };
}
