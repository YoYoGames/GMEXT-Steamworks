#pragma once

#include <cstdint>
#include <cstdarg>
#include <cstring>
#include <string>
#include <string_view>
#include <vector>
#include <optional>
#include <stdexcept>
#include <algorithm>
#include <queue>
#include <memory>
#include <mutex>
#include <condition_variable>

#include "GMExtUtils.h"

// ---------------------------------------------------------------------------
// GMWIRE_THROW — portable throw / fatal-abort for exception-disabled platforms
//
// When C++ exceptions are enabled (__cpp_exceptions defined), GMWIRE_THROW(ex)
// is a normal throw that callers can catch.
//
// When exceptions are disabled (e.g. Nintendo Switch, PS4 ORBIS toolset default),
// throw is a compile error. GMWIRE_THROW instead prints a diagnostic via
// GMWIRE_TRACE and calls std::abort(). This fires in BOTH Debug and Release —
// unlike assert() which is stripped in Release builds.
//
// Override GMWIRE_TRACE before including this header to redirect output
// (e.g. to a platform logging API).
// ---------------------------------------------------------------------------
#if !defined(GMWIRE_TRACE)
#define GMWIRE_TRACE(msg) LOG_ERROR("[GMExtWire] fatal: %s", msg)
#endif

#if defined(__cpp_exceptions)
#define GMWIRE_THROW(ex) throw ex
#else
#include <cstdlib>
#define GMWIRE_THROW(ex) do { GMWIRE_TRACE(#ex); std::abort(); } while (0)
#endif

// #############################################################################
// # GMExtWire
// #############################################################################

namespace gm::byteio {
    // #############################################################################
    // # Span
    // #############################################################################

    template<class T>
    class span_lite {
        T* data_;
        size_t size_;

    public:
        using element_type = T;

        constexpr span_lite() noexcept : data_{ nullptr }, size_{ 0 } {}
        constexpr span_lite(T* p, size_t n) noexcept : data_{ p }, size_{ n } {}

        template<size_t N>
        constexpr span_lite(T(&arr)[N]) noexcept : data_{ arr }, size_{ N }
        {
        }

        constexpr T* data() const noexcept { return data_; }
        constexpr size_t size() const noexcept { return size_; }

        constexpr span_lite subspan(size_t offset) const noexcept { return { data_ + offset, size_ - offset }; }

        constexpr span_lite subspan(size_t offset, size_t count) const
        {
            if (offset > size_ || count > size_ - offset)
                GMWIRE_THROW(std::out_of_range("span_lite::subspan out of range"));
            return { data_ + offset, count };
        }
    };

    // #############################################################################
    // # Buffer
    // #############################################################################

    struct BufferError : std::runtime_error {
        using std::runtime_error::runtime_error;
    };
    struct BufferOverflow : std::overflow_error {
        using std::overflow_error::overflow_error;
    };
    struct BufferUnderflow : std::underflow_error {
        using std::underflow_error::underflow_error;
    };
    struct BufferCorrupted : BufferError {
        using BufferError::BufferError;
    };

    template<class T>
    inline void writeLe(std::byte* dst, const T& v) noexcept
    {
        static_assert(std::is_arithmetic_v<T>);
        std::memcpy(dst, &v, sizeof(T));
    }

    template<class T>
    inline T readLe(const std::byte* src) noexcept
    {
        static_assert(std::is_arithmetic_v<T>);
        T v;
        std::memcpy(&v, src, sizeof(T));
        return v;
    }

    template<class Span>
    class BufferCursor // Span is gsl::span<std::byte>  or  gsl::span<const std::byte>
    {
        Span s_;         // the whole view [read- or write-qualified]
        size_t pos_{ 0 }; // current offset

        void need(size_t n) const
        {
            if (pos_ + n > s_.size())
                GMWIRE_THROW(BufferOverflow("cursor out of bounds"));
        }

    public:
        explicit BufferCursor(Span s) : s_{ s } {}

        using byte_t = typename Span::element_type;                         // std::byte or const std::byte
        static constexpr bool is_const_span = std::is_const<byte_t>::value; // true  for Reader

        /* --------------------------------------------------------------
               Convenience ctor: const void*  ->  span<const std::byte>
               -------------------------------------------------------------- */
        BufferCursor(void* raw, std::size_t n) : BufferCursor(Span{ reinterpret_cast<typename Span::element_type*>(raw), n })
        {
        }

        template<class Q = typename Span::element_type, std::enable_if_t<std::is_const_v<Q>, int> = 0>
        BufferCursor(const void* raw, std::size_t n) : BufferCursor(Span{ reinterpret_cast<const Q*>(raw), n })
        {
        }

        /* ------------- read path (enabled when Span::element_type is const) */
        template<class T, class Q = typename Span::element_type>
        std::enable_if_t<std::is_const_v<Q>&& std::is_arithmetic_v<T> && !std::is_constructible_v<T, std::string_view>, T>
            read()
        {
            need(sizeof(T));
            T v;
            std::memcpy(&v, static_cast<const std::byte*>(static_cast<const void*>(s_.data())) + pos_, sizeof(T));
            pos_ += sizeof(T);
            return v;
        }

        // 2) NUL-terminated read for string_view-constructible types
        template<class T, class Q = typename Span::element_type>
        std::enable_if_t<std::is_const_v<Q>&& std::is_constructible_v<T, std::string_view>, T> read()
        {
            // bytes left
            const size_t remaining = s_.size() - pos_;
            const char* begin = reinterpret_cast<const char*>(s_.data()) + pos_;

            // find '\0' within remaining
            const void* endPtr = std::memchr(begin, '\0', remaining);
            if (!endPtr) {
                GMWIRE_THROW(std::runtime_error("read(): unterminated NUL string in buffer"));
            }

            const char* end = static_cast<const char*>(endPtr);
            const size_t len = static_cast<size_t>(end - begin);

            // advance (include the NUL terminator)
            pos_ += (len + 1);

            // construct T from the bytes (without the NUL)
            std::string_view sv(begin, len);
            return T(sv);
        }

        /* ------------- write path (enabled when element_type is non-const) */
        template<class T, class Q = typename Span::element_type>
        std::enable_if_t<!std::is_const<Q>::value> write(const T& v)
        {
            need(sizeof(T));
            std::memcpy(s_.data() + pos_, &v, sizeof(T));
            pos_ += sizeof(T);
        }

        /* ------------- bulk helpers */
        template<class Q = typename Span::element_type>
        std::enable_if_t<std::is_const<Q>::value> readBytes(void* dst, size_t n)
        {
            need(n);
            std::memcpy(dst, s_.data() + pos_, n);
            pos_ += n;
        }

        template<class Q = typename Span::element_type>
        std::enable_if_t<!std::is_const<Q>::value> writeBytes(const void* src, size_t n)
        {
            need(n);
            std::memcpy(s_.data() + pos_, src, n);
            pos_ += n;
        }

        /* misc utilities */
        size_t remaining() const noexcept { return s_.size() - pos_; }
        void skip(size_t n)
        {
            need(n);
            pos_ += n;
        }
        auto subspan() const noexcept { return s_.subspan(pos_); } // view from cursor to end

        size_t position() const noexcept { return pos_; }
        const std::byte* data() const noexcept { return s_.data() + pos_; }
        std::byte* data() noexcept { return const_cast<std::byte*>(s_.data() + pos_); }
    };

    using BufferReader = BufferCursor<span_lite<const std::byte>>;

    // --------------------------------------
    // IByteWriter: generic byte sink
    // --------------------------------------
    struct IByteWriter {
        virtual ~IByteWriter() = default;

        virtual void writeBytes(const void* src, std::size_t n) = 0;

        template<class T>
        void write(const T& v)
        {
            static_assert(std::is_arithmetic_v<T>, "IByteWriter::write only for arithmetic types");
            writeBytes(&v, sizeof(T));
        }
    };

    // --------------------------------------
    // BufferWriter: fixed-size span writer
    // --------------------------------------
    class BufferWriter : public IByteWriter {
        BufferCursor<span_lite<std::byte>> cur_;

    public:
        using byte_t = std::byte;

        BufferWriter(void* raw, std::size_t n) : cur_{ span_lite<std::byte>(reinterpret_cast<std::byte*>(raw), n) } {}

        // keep a ctor if you were using the span ctor
        BufferWriter(span_lite<std::byte> s) : cur_{ s } {}

        // IByteWriter implementation
        void writeBytes(const void* src, std::size_t n) override { cur_.writeBytes(src, n); }

        template<class T>
        void write(const T& v)
        {
            cur_.write<T>(v);
        }

        // Forward the helpers you were using elsewhere:
        std::size_t remaining() const noexcept { return cur_.remaining(); }
        void skip(std::size_t n) { cur_.skip(n); }
        std::size_t position() const noexcept { return cur_.position(); }
        const std::byte* data() const noexcept { return cur_.data(); }
        std::byte* data() noexcept { return cur_.data(); }
    };

    // --------------------------------------
    // VectorWriter: dynamic buffer writer
    // --------------------------------------
    class VectorWriter : public IByteWriter {
        std::vector<std::byte>& buf_;

    public:
        explicit VectorWriter(std::vector<std::byte>& b) : buf_(b) {}

        void writeBytes(const void* src, std::size_t n) override
        {
            const auto old = buf_.size();
            buf_.resize(old + n);
            std::memcpy(buf_.data() + old, src, n);
        }

        template<class T>
        void write(const T& v)
        {
            static_assert(std::is_arithmetic_v<T>);
            writeBytes(&v, sizeof(T));
        }
    };

} // namespace gm::byteio

namespace gm::wire {
    // #############################################################################
    // # Kind
    // #############################################################################

    enum GMKind : std::uint8_t {
        UInt8 = 1,
        Int8 = 2,
        UInt16 = 3,
        Int16 = 4,
        UInt32 = 5,
        Int32 = 6,
        UInt64 = 12,
        Float16 = 7,
        Float = 8,
        Double = 9,
        Bool = 10,
        String = 11,
        Text = 13,

        TypedStruct = 249,
        TypedArray = 250,
        Undefined = 251,
        Pointer = 252,
        Buffer = 253,
        Array = 254,
        Struct = 255
    };

} // namespace gm::wire

namespace gm::wire {
    // #############################################################################
    // # Forward Declarations
    // #############################################################################

    struct GMValue;
} // namespace gm::wire

namespace gm::wire::codec {
    // #############################################################################
    // # Forward Declarations
    // #############################################################################

    gm::wire::GMValue readValue(gm::byteio::BufferReader&);
} // namespace gm::wire::codec

namespace gm::runtime {
    // #############################################################################
    // # Forward Declarations
    // #############################################################################
    class DispatchQueue;
} // namespace gm::runtime

namespace gm::wire {
    // #############################################################################
    // # GMTypes
    // #############################################################################

    using GMBufferReader = gm::byteio::BufferReader;
    using GMBufferWriter = gm::byteio::BufferWriter;

    class ArrayStream;

    struct GMBuffer {
    private:
        void* ptr = nullptr;
        std::uint64_t size = 0;

    public:
        constexpr GMBuffer() = default;

        constexpr GMBuffer(void* p, std::uint64_t n) noexcept : ptr(p), size(n) {}

        GMBufferReader getReader() { return { ptr, (std::size_t)size }; }

        GMBufferWriter getWriter() { return { ptr, (std::size_t)size }; }

        void* data() const noexcept { return ptr; }
        std::uint64_t length() const noexcept { return size; }
    };

    using GMString = std::string;
    using GMStringView = std::string_view;

    class GMFunction {
    public:
        GMFunction() = default;
        GMFunction(std::nullptr_t) : handle_(nullptr) {}

        GMFunction(std::uint64_t id, gm::runtime::DispatchQueue* owner) : handle_(std::make_shared<Handle>(id, owner)) {}

        GMFunction(const GMFunction&) = default;
        GMFunction(GMFunction&&) noexcept = default;
        GMFunction& operator=(const GMFunction&) = default;
        GMFunction& operator=(GMFunction&&) noexcept = default;

        GMFunction& operator=(std::nullptr_t)
        {
            handle_.reset();
            return *this;
        }

        explicit operator bool() const { return static_cast<bool>(handle_); }

        std::uint64_t getId() const { return handle_ ? handle_->id : 0; }

        // public API
        void call_with_args(const ArrayStream& args) const;

        template<class... Args>
        void call(Args&&... args) const;

    private:
        // completely hidden from the outside world
        struct Handle {
            std::uint64_t id = 0;
            gm::runtime::DispatchQueue* owner = nullptr;

            Handle(std::uint64_t id_, gm::runtime::DispatchQueue* owner_) : id(id_), owner(owner_) {}

            ~Handle() { release(); }

            void release();
        };

        std::shared_ptr<Handle> handle_;
    };

    struct GMValue {
    private:
        gm::wire::GMKind kind_;
        const std::byte* data_;

    public:
        GMValue() : kind_(gm::wire::GMKind::Undefined), data_(nullptr) {}

        GMValue(gm::wire::GMKind kind, const std::byte* data) : kind_(kind), data_(data) {};

        gm::wire::GMKind kind() const { return kind_; }
        const std::byte* data() const { return data_; }

        template<class T>
        std::optional<T> getIf() const;

        template<class T>
        T as() const;

        template<class T>
        bool is() const;
    };

    struct GMArrayView {
    private:
        std::uint16_t sz{};       // element count   (host endian)
        const std::byte* first{}; // -> tag-byte of element #0

        mutable std::shared_ptr<std::vector<std::uint32_t>> offs_;

        void buildOffsets() const
        {
            if (offs_)
                return;
            auto tbl = std::make_unique<std::vector<std::uint32_t>>();
            tbl->reserve(sz);
            const std::byte* p = first;
            for (std::uint16_t i = 0; i < sz; ++i) {
                tbl->push_back(static_cast<std::uint32_t>(p - first));
                p += skipOne(p);
            }
            offs_ = std::move(tbl);
        }

    public:
        GMArrayView() : sz(0), first(nullptr) {}

        explicit GMArrayView(const GMValue& v)
        {
            if (v.kind() != gm::wire::GMKind::Array)
                GMWIRE_THROW(std::bad_cast{});
            sz = gm::byteio::readLe<std::uint16_t>(v.data());
            first = v.data() + 2;
        }

        static std::uint32_t skipOne(const std::byte* p)
        {
            gm::byteio::BufferReader r(const_cast<std::byte*>(p), SIZE_MAX);
            gm::wire::codec::readValue(r);

            auto consumed = static_cast<std::uint32_t>(r.position());
            if (consumed == 0)
                GMWIRE_THROW(gm::byteio::BufferError("corrupt stream: element size == 0"));
            return consumed;
        }

        class const_iterator {
            const std::byte* cur_{};

        public:
            explicit const_iterator(const std::byte* p) : cur_(p) {}

            GMValue operator*() const
            {
                gm::byteio::BufferReader r(const_cast<std::byte*>(cur_), SIZE_MAX);
                return gm::wire::codec::readValue(r);
            }
            const_iterator& operator++()
            {
                cur_ += skipOne(cur_);
                return *this;
            }
            bool operator!=(const const_iterator& o) const { return cur_ != o.cur_; }
        };

        const_iterator begin() const { return const_iterator(first); }
        const_iterator end() const
        {
            const std::byte* p = first;
            for (std::uint16_t i = 0; i < sz; ++i)
                p += skipOne(p);
            return const_iterator(p);
        }

        std::uint16_t size() const noexcept { return sz; }
        bool empty() const noexcept { return sz == 0; }

        const GMValue operator[](std::size_t idx) const
        {
            if (idx >= sz)
                GMWIRE_THROW(std::out_of_range("GMArrayView[]"));
            buildOffsets();
            const std::byte* p = first + (*offs_)[idx];
            gm::byteio::BufferReader r(const_cast<std::byte*>(p), SIZE_MAX);
            return gm::wire::codec::readValue(r);
        }

        template<class T>
        std::optional<T> getIf(size_t idx) const
        {
            auto gmv = operator[](idx);
            if (!gmv.template is<T>())
                return std::nullopt;
            return gmv.template as<T>();
        }

        template<class T>
        T as(size_t idx) const
        {
            auto gmv = operator[](idx);
            return gmv.template as<T>();
        }

        template<class T>
        bool is(size_t idx) const
        {
            auto gmv = operator[](idx);  // fetch as GMValue
            return gmv.template is<T>(); // use the logic for GMValue
        }
    };

    struct GMObjectView {
        struct Entry { // cached entry
            GMStringView key{};
            std::uint32_t valOff{}; // offset from first to *tag* of value
        };

    private:
        std::uint16_t sz{};
        const std::byte* first{};
        mutable std::shared_ptr<std::vector<Entry>> index_; // lazy index

        GMValue valueFor(GMStringView k) const
        {
            buildIndex(); // make sure the table exists
            auto it = std::find_if(index_->begin(), index_->end(), [&](auto& e) { return e.key == k; });
            if (it == index_->end())
                GMWIRE_THROW(std::out_of_range("GMObjectView: key not found"));

            const std::byte* valPtr = first + it->valOff; // locate the value tag
            gm::byteio::BufferReader r(const_cast<std::byte*>(valPtr), SIZE_MAX);
            return gm::wire::codec::readValue(r); // decode ONE value
        }

    public:
        explicit GMObjectView(const GMValue& v)
        {
            if (v.kind() != gm::wire::GMKind::Struct)
                GMWIRE_THROW(std::bad_cast{});
            sz = gm::byteio::readLe<std::uint16_t>(v.data());
            first = v.data() + 2;
        }

        static std::uint32_t skipValue(const std::byte* p)
        {
            gm::byteio::BufferReader r(const_cast<std::byte*>(p), SIZE_MAX);
            gm::wire::codec::readValue(r);
            return static_cast<std::uint32_t>(r.position());
        }

        static std::uint32_t parsePair(const std::byte* p, const std::byte* base, Entry& out)
        {
            gm::byteio::BufferReader r(const_cast<std::byte*>(p), SIZE_MAX);

            auto tag = static_cast<gm::wire::GMKind>(r.read<std::uint8_t>());
            if (tag != gm::wire::GMKind::String && tag != gm::wire::GMKind::Text)
                GMWIRE_THROW(gm::byteio::BufferCorrupted("Struct key tag wrong"));

            std::uint32_t len = r.read<std::uint32_t>();
            const char* s = reinterpret_cast<const char*>(r.data());
            r.skip(static_cast<size_t>(len) + 1);

            out.key = GMStringView{ s, len };
            out.valOff = static_cast<std::uint32_t>((p - base) + r.position());

            r.skip(skipValue(r.data()));

            return static_cast<std::uint32_t>(r.position());
        }

    private:
        void buildIndex() const
        {
            if (index_)
                return;
            auto tbl = std::make_unique<std::vector<Entry>>();
            tbl->reserve(sz);

            const std::byte* p = first;
            for (std::uint16_t i = 0; i < sz; ++i) {
                Entry e;
                p += parsePair(p, first, e);
                tbl->push_back(e);
            }
            index_ = std::move(tbl);
        }

    public:
        class const_iterator {
            const std::byte* base_{};      // start of the whole struct
            const std::byte* cur_{};       // start of *current* pair
            mutable Entry tmp_;             // cached decoding result
            mutable std::uint32_t len_{ 0 }; // bytes of the current pair
            mutable bool ready_{ false };    // has tmp_/len_ been filled?

            void ensure() const
            {
                if (ready_)
                    return;
                len_ = parsePair(cur_, base_, tmp_); // returns bytes consumed
                ready_ = true;
            }

        public:
            const_iterator(const std::byte* p, const std::byte* base) : base_(base), cur_(p) {}

            std::pair<GMStringView, GMValue> operator*() const
            {
                ensure(); // decode on-demand
                gm::byteio::BufferReader r(const_cast<std::byte*>(base_ + tmp_.valOff), SIZE_MAX);
                return { tmp_.key, gm::wire::codec::readValue(r) };
            }

            const_iterator& operator++()
            {
                ensure();       // know len_ first
                cur_ += len_;   // jump to next pair
                ready_ = false; // invalidate cache
                return *this;
            }

            bool operator!=(const const_iterator& o) const { return cur_ != o.cur_; }
        };

        const_iterator begin() const
        { // no pre-decode
            return { first, first };
        }
        const_iterator end() const
        {
            const std::byte* p = first;
            Entry dummy;
            for (std::uint16_t i = 0; i < sz; ++i)
                p += parsePair(p, first, dummy); // walk to sentinel
            return { p, first };
        }

        std::uint16_t size() const noexcept { return sz; }
        bool empty() const noexcept { return sz == 0; }

        const GMValue operator[](GMStringView k) const { return valueFor(k); }

        template<class T>
        std::optional<T> getIf(GMStringView k) const
        {
            auto gmv = operator[](k); // fetch as GMValue
            if (!gmv.template is<T>())
                return std::nullopt;
            return gmv.template as<T>();
        }

        template<class T>
        T as(GMStringView k) const
        {
            auto gmv = operator[](k);    // fetch as GMValue
            return gmv.template as<T>(); // use the logic for GMValue
        }

        template<class T>
        bool is(GMStringView k) const
        {
            auto gmv = operator[](k);    // fetch as GMValue
            return gmv.template is<T>(); // use the logic for GMValue
        }
    };
} // namespace gm::wire

namespace gm::wire::details {
    // #############################################################################
    // # Core Utils
    // #############################################################################

    template<class T>
    struct KindOf;

#define MAP(cpp, tag)                                                                                                  \
    template<>                                                                                                         \
    struct KindOf<cpp> {                                                                                               \
        static constexpr gm::wire::GMKind value = gm::wire::GMKind::tag;                                               \
    };

    MAP(std::uint8_t, UInt8);
    MAP(std::int8_t, Int8);
    MAP(std::uint16_t, UInt16)
        MAP(std::int16_t, Int16);
    MAP(std::uint32_t, UInt32)
        MAP(std::int32_t, Int32);
    MAP(std::uint64_t, UInt64);
    MAP(float, Float)
        MAP(double, Double);
    MAP(bool, Bool);
    MAP(gm::wire::GMStringView, String);
    MAP(gm::wire::GMArrayView, Array);
    MAP(gm::wire::GMObjectView, Struct);
    MAP(void*, Pointer); // if you keep raw pointers

#undef MAP

    template<class T>
    T extract(const gm::wire::GMValue&) // primary template - static_assert
    {
        static_assert(sizeof(T) == 0, "Unsupported T in GMValue::getIf/as ");
    }

#define SCALAR(cpp)                                                                                                    \
    template<>                                                                                                         \
    inline cpp extract(const gm::wire::GMValue& v)                                                                     \
    {                                                                                                                  \
        return gm::byteio::readLe<cpp>(v.data());                                                                      \
    };

    SCALAR(std::uint8_t);
    SCALAR(std::int8_t);
    SCALAR(std::uint16_t);
    SCALAR(std::int16_t);
    SCALAR(std::uint32_t);
    SCALAR(std::int32_t);
    SCALAR(std::uint64_t);
    SCALAR(float);
    SCALAR(double);
    SCALAR(bool);
    //SCALAR(void*);
#undef SCALAR

    template<>
    inline std::string_view extract(const gm::wire::GMValue& v)
    {
        std::uint32_t len = gm::byteio::readLe<std::uint32_t>(v.data());
        const char* s = reinterpret_cast<const char*>(v.data() + 4);
        return { s, len };
    }

    template<>
    inline gm::wire::GMArrayView extract(const gm::wire::GMValue& v)
    {
        return gm::wire::GMArrayView{ v };
    }

    template<>
    inline gm::wire::GMObjectView extract(const gm::wire::GMValue& v)
    {
        return gm::wire::GMObjectView{ v };
    }

    template<class T>
    inline constexpr bool is_scalar_v
        = std::is_same_v<T, bool> || std::is_integral_v<T> || std::is_floating_point_v<T> || std::is_pointer_v<T>;

    template<class T>
    T coerceScalar(gm::wire::GMKind k, const std::byte* bytes)
    {
        switch (k) {
        case gm::wire::GMKind::UInt8:
            return static_cast<T>(gm::byteio::readLe<std::uint8_t>(bytes));
        case gm::wire::GMKind::Int8:
            return static_cast<T>(gm::byteio::readLe<std::int8_t>(bytes));
        case gm::wire::GMKind::UInt16:
            return static_cast<T>(gm::byteio::readLe<std::uint16_t>(bytes));
        case gm::wire::GMKind::Int16:
            return static_cast<T>(gm::byteio::readLe<std::int16_t>(bytes));
        case gm::wire::GMKind::UInt32:
            return static_cast<T>(gm::byteio::readLe<std::uint32_t>(bytes));
        case gm::wire::GMKind::Int32:
            return static_cast<T>(gm::byteio::readLe<std::int32_t>(bytes));
        case gm::wire::GMKind::UInt64:
            return static_cast<T>(gm::byteio::readLe<std::uint64_t>(bytes));
        case gm::wire::GMKind::Float:
            return static_cast<T>(gm::byteio::readLe<float>(bytes));
        case gm::wire::GMKind::Double:
            return static_cast<T>(gm::byteio::readLe<double>(bytes));
        case gm::wire::GMKind::Bool:
            return static_cast<T>(gm::byteio::readLe<std::uint8_t>(bytes) != 0);
        case gm::wire::GMKind::Pointer:
            return static_cast<T>(gm::byteio::readLe<std::uintptr_t>(bytes));
        default:
            GMWIRE_THROW(std::runtime_error("GMValue: kind not coercible to scalar"));
        }
    }
} // namespace gm::wire::details

namespace gm::wire {
    template<class T>
    inline std::optional<T> GMValue::getIf() const
    {
        if (kind_ == gm::wire::details::KindOf<T>::value)
            return gm::wire::details::extract<T>(*this);
        return std::nullopt;
    }

    template<class T>
    inline T GMValue::as() const
    {
        if (auto v = getIf<T>())
            return *v;

        if constexpr (gm::wire::details::is_scalar_v<T>)
            return gm::wire::details::coerceScalar<T>(kind_, data_);

        GMWIRE_THROW(std::runtime_error("GMValue: cannot coerce to requested type"));
    }

    template<class T>
    inline bool GMValue::is() const
    {
        return (kind_ == gm::wire::details::KindOf<T>::value);
    }
} // namespace gm::wire

namespace gm::wire::details {
    // Utility structure to create a dependent false value
    template<typename T>
    struct dependent_false : std::false_type {};

    template<typename T>
    struct gm_struct_traits {
        static constexpr bool is_gm_struct = false;
        // codec_id is only valid if is_gm_struct == true
        static constexpr std::uint32_t codec_id = 0;
    };

    template<typename T>
    inline constexpr bool is_gm_struct_v = gm_struct_traits<std::remove_cv_t<std::remove_reference_t<T>>>::is_gm_struct;

    template<typename T>
    inline constexpr std::uint32_t gm_struct_codec_id_v
        = gm_struct_traits<std::remove_cv_t<std::remove_reference_t<T>>>::codec_id;

    class ISerializable {
    public:
        virtual void serializeTo(std::vector<std::byte>& buffer) const = 0;
        virtual ~ISerializable() = default;
    };

    template<typename T>
    static inline gm::wire::GMKind getGMValueType()
    {
        using U = std::remove_cv_t<std::remove_reference_t<T>>;

        if constexpr (std::is_same_v<U, std::uint8_t>)
            return gm::wire::GMKind::UInt8;
        else if constexpr (std::is_same_v<U, std::int8_t>)
            return gm::wire::GMKind::Int8;
        else if constexpr (std::is_same_v<U, std::uint16_t>)
            return gm::wire::GMKind::UInt16;
        else if constexpr (std::is_same_v<U, std::int16_t>)
            return gm::wire::GMKind::Int16;
        else if constexpr (std::is_same_v<U, std::uint32_t>)
            return gm::wire::GMKind::UInt32;
        else if constexpr (std::is_same_v<U, std::int32_t>)
            return gm::wire::GMKind::Int32;
        else if constexpr (std::is_same_v<U, std::uint64_t>)
            return gm::wire::GMKind::UInt64;
        else if constexpr (std::is_same_v<U, float>)
            return gm::wire::GMKind::Float;
        else if constexpr (std::is_same_v<U, double>)
            return gm::wire::GMKind::Double;
        else if constexpr (std::is_same_v<U, bool>)
            return gm::wire::GMKind::Bool;

        // Strings: prefer string_view convertibility to avoid allocating
        else if constexpr (std::is_convertible_v<U, std::string_view>)
            return gm::wire::GMKind::String;

        // Enums: map by *underlying type*
        else if constexpr (std::is_enum_v<U>) {
            using E = std::underlying_type_t<U>;
            if constexpr (std::is_same_v<E, std::uint8_t>)
                return gm::wire::GMKind::UInt8;
            else if constexpr (std::is_same_v<E, std::int8_t>)
                return gm::wire::GMKind::Int8;
            else if constexpr (std::is_same_v<E, std::uint16_t>)
                return gm::wire::GMKind::UInt16;
            else if constexpr (std::is_same_v<E, std::int16_t>)
                return gm::wire::GMKind::Int16;
            else if constexpr (std::is_same_v<E, std::uint32_t>)
                return gm::wire::GMKind::UInt32;
            else if constexpr (std::is_same_v<E, std::int32_t>)
                return gm::wire::GMKind::Int32;
            else if constexpr (std::is_same_v<E, std::uint64_t>)
                return gm::wire::GMKind::UInt64;
            else
                static_assert(dependent_false<T>::value, "Unsupported enum underlying type.");
        }

        else {
            static_assert(dependent_false<T>::value, "Unsupported type for serialization.");
        }
    }

} // namespace gm::wire::details

namespace gm::wire::codec {
    using namespace gm::byteio;

    inline gm::wire::GMValue readValue(BufferReader& buf)
    {
        gm::wire::GMKind tag = static_cast<gm::wire::GMKind>(buf.read<std::uint8_t>());
        auto payload = buf.data();

        switch (tag) {
        case gm::wire::GMKind::UInt8:
            buf.skip(1);
            break;
        case gm::wire::GMKind::Int8:
            buf.skip(1);
            break;
        case gm::wire::GMKind::UInt16:
            buf.skip(2);
            break;
        case gm::wire::GMKind::Int16:
            buf.skip(2);
            break;
        case gm::wire::GMKind::UInt32:
            buf.skip(4);
            break;
        case gm::wire::GMKind::Int32:
            buf.skip(4);
            break;
        case gm::wire::GMKind::UInt64:
            buf.skip(8);
            break;
        case gm::wire::GMKind::Float16:
            GMWIRE_THROW(gm::byteio::BufferUnderflow("GMBufferIO: unsupported tag byte (float16)"));
        case gm::wire::GMKind::Float:
            buf.skip(4);
            break;
        case gm::wire::GMKind::Double:
            buf.skip(8);
            break;
        case gm::wire::GMKind::Bool:
            buf.skip(1);
            break;

        case gm::wire::GMKind::Text:
        case gm::wire::GMKind::String: {
            std::size_t len = buf.read<std::uint32_t>();
            if (buf.remaining() < len + 1)
                GMWIRE_THROW(gm::byteio::BufferUnderflow("GMBufferIO: buffer overflow / underflow"));
            buf.skip(len);
            if (buf.read<std::uint8_t>() != 0)
                GMWIRE_THROW(gm::byteio::BufferError("GMBufferIO: string missing NUL terminator"));
            break;
        }

        case gm::wire::GMKind::TypedArray:
        case gm::wire::GMKind::TypedStruct:
            GMWIRE_THROW(gm::byteio::BufferError("GMBufferIO: typed kinds not expected from GML"));

        case gm::wire::GMKind::Undefined:
            break;

        case gm::wire::GMKind::Pointer:
            buf.skip(8);
            break;

        case gm::wire::GMKind::Buffer: {
            buf.skip(static_cast<size_t>(4) + 8);
            break;
        }

        case gm::wire::GMKind::Array: {
            std::uint16_t sz = buf.read<std::uint16_t>();
            const std::byte* p = buf.data();

            for (std::uint16_t i = 0; i < sz; ++i)
                p += gm::wire::GMArrayView::skipOne(p);

            std::size_t bytesToSkip = static_cast<std::size_t>(p - buf.data());
            buf.skip(bytesToSkip); // 3. finally advance cursor
            break;
        }

        case gm::wire::GMKind::Struct: {
            std::uint16_t sz = buf.read<std::uint16_t>();
            const std::byte* base = buf.data();

            const std::byte* p = base;
            gm::wire::GMObjectView::Entry dummy;

            for (std::uint16_t i = 0; i < sz; ++i)
                p += gm::wire::GMObjectView::parsePair(p, base, dummy);

            std::size_t bytesToSkip = static_cast<std::size_t>(p - buf.data());
            buf.skip(bytesToSkip); // 3. finally advance cursor
            break;
        }

        default:
            GMWIRE_THROW(gm::byteio::BufferError("GMBufferIO: unknown tag byte"));
        }

        return gm::wire::GMValue{ tag, payload };
    }

    template<class T>
    inline T readValue(BufferReader& buf)
    {
        if constexpr (std::is_enum_v<T>) {
            // Enums: read underlying type and cast back
            using U = std::underlying_type_t<T>;
            U tmp = readValue<U>(buf); // recurse into the same template with U
            return static_cast<T>(tmp);
        }
        else {
            // Non-trivial and not an enum: must have an explicit specialization
            static_assert(
                std::is_arithmetic_v<T>,
                "readValue primary template only for POD/scalars or enums. "
                "Provide an explicit specialization for complex types."
                );
            return buf.read<T>();
        }
    }

    template<>
    inline std::string readValue<std::string>(BufferReader& buf)
    {
        std::size_t len = buf.read<std::uint32_t>();
        if (buf.remaining() < len + 1)
            GMWIRE_THROW(gm::byteio::BufferUnderflow("BufferIO: buffer overflow / underflow"));

        const char* s = reinterpret_cast<const char*>(buf.data());
        buf.skip(len);
        if (buf.read<std::uint8_t>() != 0)
            GMWIRE_THROW(gm::byteio::BufferError("BufferIO: string missing NUL terminator"));

        return std::string{ s };
    }

    template<>
    inline std::string_view readValue<std::string_view>(BufferReader& buf)
    {
        std::size_t len = buf.read<std::uint32_t>();
        if (buf.remaining() < len + 1)
            GMWIRE_THROW(gm::byteio::BufferUnderflow("BufferIO: buffer overflow / underflow"));

        const char* s = reinterpret_cast<const char*>(buf.data());
        buf.skip(len);
        if (buf.read<std::uint8_t>() != 0)
            GMWIRE_THROW(gm::byteio::BufferError("BufferIO: string missing NUL terminator"));

        return std::string_view{ s, len };
    }

    inline gm::wire::GMFunction readFunction(gm::byteio::BufferReader& br, gm::runtime::DispatchQueue* q = nullptr)
    {
        auto uid = readValue<std::uint64_t>(br);
        return gm::wire::GMFunction{ uid, q };
    }

    template<class T>
    inline std::optional<T> readOptional(BufferReader& buf)
    {
        // Must match whatever you wrote on the wire for "has value"
        bool has = readValue<bool>(buf);
        if (!has)
            return std::nullopt;

        return readValue<T>(buf);
    }

    template<class T, std::size_t N>
    inline std::array<T, N> readArray(BufferReader& buf)
    {
        std::array<T, N> arr{};
        if constexpr (std::is_arithmetic_v<T>) {
            if (buf.remaining() < N * sizeof(T))
                GMWIRE_THROW(gm::byteio::BufferUnderflow("BufferIO: buffer overflow / underflow"));

            buf.readBytes(arr.data(), sizeof(arr));
        }
        else {
            for (auto& v : arr)
                v = readValue<T>(buf);
        }
        return arr;
    }

    template<class T>
    inline std::vector<T> readVector(BufferReader& buf)
    {
        std::uint32_t sz = buf.read<std::uint32_t>();

        std::vector<T> vec{};
        vec.reserve(sz);

        if constexpr (std::is_arithmetic_v<T>) {
            if (buf.remaining() < sz * sizeof(T))
                GMWIRE_THROW(gm::byteio::BufferUnderflow("BufferIO: buffer overflow / underflow"));

            vec.resize(sz); // resize only for the memcpy path
            buf.readBytes(vec.data(), sizeof(T) * sz);
        }
        else {
            for (std::uint32_t i = 0; i < sz; ++i)
                vec.emplace_back(readValue<T>(buf)); // construct in-place
        }
        return vec;
    }

    template<>
    inline gm::wire::GMValue readValue<gm::wire::GMValue>(BufferReader& buf)
    {
        return readValue(buf);
    }

    template<>
    inline gm::wire::GMArrayView readValue<gm::wire::GMArrayView>(BufferReader& buf)
    {
        return readValue(buf).as<gm::wire::GMArrayView>();
    }

    template<>
    inline gm::wire::GMObjectView readValue<gm::wire::GMObjectView>(BufferReader& buf)
    {
        return readValue(buf).as<gm::wire::GMObjectView>();
    }

    template<class T>
    inline void writeValue(gm::byteio::IByteWriter& buf, const T& v)
    {
        if constexpr (std::is_enum_v<T>) {
            // Enums: serialize underlying integer type
            using U = std::underlying_type_t<T>;
            writeValue(buf, static_cast<U>(v)); // will hit the scalar version below
        }
        else {
            static_assert(
                std::is_arithmetic_v<T>,
                "writeValue primary template only for POD/scalars/enums. "
                "Provide an explicit specialization for complex types."
                );
            buf.write(v);
        }
    }

    inline void writeValue(gm::byteio::IByteWriter& buf, std::string_view s)
    {
        buf.write<std::uint32_t>(static_cast<std::uint32_t>(s.size()));
        buf.writeBytes(s.data(), s.size());
        buf.write<std::uint8_t>(0); // NUL terminator
    }

    inline void writeValue(gm::byteio::IByteWriter& buf, const char* s) { writeValue(buf, std::string_view{ s }); }

    inline void writeValue(gm::byteio::IByteWriter& buf, const std::string& s) { writeValue(buf, std::string_view{ s }); }

    template<class T>
    inline void writeValue(gm::byteio::IByteWriter& buf, const std::optional<T>& opt)
    {
        buf.write<std::uint8_t>(opt ? 1 : 0);
        if (opt) {
            writeValue(buf, *opt); // calls correct writeValue for T
        }
    }

    template<class T, std::size_t N>
    inline void writeValue(gm::byteio::IByteWriter& buf, const std::array<T, N>& arr)
    {
        if constexpr (std::is_arithmetic_v<T>) {
            if (N)
                buf.writeBytes(arr.data(), sizeof(arr));
        }
        else {
            for (auto const& elem : arr)
                writeValue(buf, elem);
        }
    }

    template<class T>
    inline void writeValue(gm::byteio::IByteWriter& buf, const std::vector<T>& vec)
    {
        buf.write<std::uint32_t>(static_cast<std::uint32_t>(vec.size()));

        if constexpr (std::is_arithmetic_v<T>) {
            if (!vec.empty())
                buf.writeBytes(vec.data(), vec.size() * sizeof(T));
        }
        else {
            for (auto const& elem : vec)
                writeValue(buf, elem); // recursive, uses overload or primary
        }
    }
} // namespace gm::wire::codec

namespace gm::wire {
    class DataStream : public gm::wire::details::ISerializable {
    private:
        std::vector<std::byte> buffer;

    protected:
        void serializeTo(std::vector<std::byte>& out) const override
        {
            const auto& internalBuffer = getBuffer();
            out.insert(out.end(), internalBuffer.begin(), internalBuffer.end());
        }

        // Access to internal buffer if needed
        std::vector<std::byte>& getBuffer() { return buffer; }

    public:
        explicit DataStream(size_t reserveSize) { buffer.reserve(reserveSize); }

        DataStream() : DataStream(512) {} // Delegating to the other constructor

        template<typename T>
        DataStream& operator<<(const T& value)
        {
            using U = std::remove_cv_t<std::remove_reference_t<T>>;

            // 1) gm_structs: GMKind::TypedStruct + codec id + payload
            if constexpr (gm::wire::details::is_gm_struct_v<U>) {
                gm::byteio::VectorWriter w(buffer);

                // write the "typed struct" tag
                gm::wire::codec::writeValue(w, gm::wire::GMKind::TypedStruct);

                // write codec id (32-bit pick your exact type)
                gm::wire::codec::writeValue(w, static_cast<std::uint32_t>(gm::wire::details::gm_struct_codec_id_v<U>));

                // now the actual payload using the gm_struct's codec:
                gm::wire::codec::writeValue(w, value);
            }

            // 2) substreams / collections, already-encoded
            else if constexpr (std::is_base_of_v<gm::wire::details::ISerializable, U>) {
                const auto& base = static_cast<const gm::wire::details::ISerializable&>(value);
                base.serializeTo(buffer);
            }

            // 3) normal scalar / string / array / etc: kind + payload
            else {
                gm::byteio::VectorWriter w(buffer);

                auto kind = gm::wire::details::getGMValueType<U>();
                gm::wire::codec::writeValue(w, kind);
                gm::wire::codec::writeValue(w, value);
            }

            return *this;
        }

        template<typename T>
        DataStream& operator<<(const std::vector<T>& value)
        {
            gm::byteio::VectorWriter w(buffer);

            // write the "typed struct" tag
            gm::wire::codec::writeValue(w, gm::wire::GMKind::TypedArray);
            gm::wire::codec::writeValue(w, static_cast<std::uint16_t>(value.size()));

            using U = std::remove_cv_t<std::remove_reference_t<T>>;

            // 1) gm_structs: GMKind::TypedStruct + codec id + payload
            if constexpr (gm::wire::details::is_gm_struct_v<U>) {
                // write the "typed struct" tag
                gm::wire::codec::writeValue(w, gm::wire::GMKind::TypedStruct);
                // write codec id (32-bit pick your exact type)
                gm::wire::codec::writeValue(w, static_cast<std::uint32_t>(gm::wire::details::gm_struct_codec_id_v<U>));
            }
            else {
                auto kind = gm::wire::details::getGMValueType<U>();
                gm::wire::codec::writeValue(w, kind);
            }

            for (auto& el : value) {
                gm::wire::codec::writeValue(w, el);
            }

            return *this;
        }

        template<typename T>
        DataStream& operator<<(const std::optional<T>& opt)
        {
            gm::byteio::VectorWriter w(buffer);

            if (!opt)
                gm::wire::codec::writeValue(w, gm::wire::GMKind::Undefined);
            else
                *this << opt.value();

            return *this;
        }

        const std::vector<std::byte>& getBuffer() const { return buffer; }

        size_t getLength() { return buffer.size(); }

        virtual void clear() { buffer.clear(); }

        virtual void writeTo(gm::byteio::IByteWriter& output) const { output.writeBytes(buffer.data(), buffer.size()); }

    protected:
        virtual void buildFrom(gm::byteio::BufferReader& bv) { buffer.assign(bv.data(), bv.data() + bv.remaining()); }

        friend class GMFunction;
    };

} // namespace gm::wire

namespace gm::wire::details {
    class CollectionStream : public gm::wire::DataStream {
    private:
        uint16_t length = 0;

    protected:
        explicit CollectionStream(size_t reserveSize) : gm::wire::DataStream(reserveSize)
        {
            // Additional initialization as needed
        }

        void incrementSize() { length++; }

        void serializeHeaderTo(std::vector<std::byte>& out, gm::wire::GMKind type) const
        {
            gm::byteio::VectorWriter w(out);
            gm::wire::codec::writeValue(w, type);
            gm::wire::codec::writeValue(w, length);
        }

        template<typename T>
        CollectionStream& operator<<(const T& value)
        {
            ++length;
            gm::wire::DataStream::operator<<(value);
            return *this;
        }

        inline bool writeCollectionHeader(gm::byteio::IByteWriter& out, gm::wire::GMKind type) const noexcept
        {
            gm::wire::codec::writeValue(out, type);
            gm::wire::codec::writeValue(out, length);
            return true;
        }

        inline bool parseCollectionHeader(gm::byteio::BufferReader& bufferView, gm::wire::GMKind type)
        {
            if ((gm::wire::GMKind)bufferView.read<uint8_t>() != type) {
                //LOG_ERROR("Trying to build CollectionStream from raw corrupted data.");
                return false;
            }
            length = bufferView.read<uint16_t>();
            return true;
        }

    public:
        void clear() override
        {
            length = 0;
            gm::wire::DataStream::clear();
        }
    };

} // namespace gm::wire::details

namespace gm::wire {

    class StructStream;

    class ArrayStream : public gm::wire::details::CollectionStream {
    private:
        static constexpr gm::wire::GMKind kind = gm::wire::GMKind::Array;

    protected:
        void serializeTo(std::vector<std::byte>& out) const override
        {
            serializeHeaderTo(out, kind);
            DataStream::serializeTo(out);
        }

    public:
        explicit ArrayStream(size_t reserveSize) : CollectionStream(reserveSize)
        {
            // Additional initialization as needed
        }

        ArrayStream() : ArrayStream(512) {} // Delegating to the other constructor

        template<typename T>
        ArrayStream& operator<<(const T& value)
        {
            CollectionStream::operator<<(value);
            return *this;
        }

        void writeTo(gm::byteio::IByteWriter& output) const override
        {
            if (!writeCollectionHeader(output, kind))
                return;
            DataStream::writeTo(output);
        }

        void buildFrom(gm::byteio::BufferReader& bv) override
        {
            if (!parseCollectionHeader(bv, kind))
                return;
            DataStream::buildFrom(bv);
        }

        // scalar helpers
        void push(std::int8_t v) { *this << v; }

        void push(std::uint8_t v) { *this << v; }

        void push(std::int16_t v) { *this << v; }

        void push(std::uint16_t v) { *this << v; }

        void push(std::int32_t v) { *this << v; }

        void push(std::uint32_t v) { *this << v; }

        void push(std::uint64_t v) { *this << v; }

        void push(bool v) { *this << v; }

        void push(float v) { *this << v; }

        void push(double v) { *this << v; }

        // string helpers
        void push(const std::string& s) { *this << s; }
        void push(std::string_view sv) { *this << sv; }

        // collection helpers (if you want Swift to pass these too)
        void push(const ArrayStream& arr) { *this << arr; }
        void push(const StructStream& obj) { *this << obj; }
    };

    class StructStream : public gm::wire::details::CollectionStream {
    private:
        static constexpr gm::wire::GMKind kind = gm::wire::GMKind::Struct;

    protected:
        void serializeTo(std::vector<std::byte>& out) const override
        {
            serializeHeaderTo(out, kind);
            DataStream::serializeTo(out);
        }

    public:
        explicit StructStream(size_t reserveSize) : CollectionStream(reserveSize)
        {
            // Additional initialization as needed
        }

        StructStream() : StructStream(512) {} // Delegating to the other constructor

        template<typename T>
        void addKeyValue(std::string_view key, const T& value)
        {
            DataStream::operator<<(key);
            CollectionStream::operator<<(value);
        }

        template<typename T>
        StructStream& operator<<(const std::pair<const char*, const T&>& pair)
        {
            addKeyValue(pair.first, pair.second);
            return *this;
        }

        // ---- NEW: scalar helpers ----
        void add(const char* key, std::int8_t v) { addKeyValue(key, v); }

        void add(const char* key, std::uint8_t v) { addKeyValue(key, v); }

        void add(const char* key, std::int16_t v) { addKeyValue(key, v); }

        void add(const char* key, std::uint16_t v) { addKeyValue(key, v); }

        void add(const char* key, std::int32_t v) { addKeyValue(key, v); }

        void add(const char* key, std::uint32_t v) { addKeyValue(key, v); }

        void add(const char* key, std::uint64_t v) { addKeyValue(key, v); }

        void add(const char* key, bool v) { addKeyValue(key, v); }

        void add(const char* key, float v) { addKeyValue(key, v); }

        void add(const char* key, double v) { addKeyValue(key, v); }

        void add(const char* key, const std::string& s) { addKeyValue(key, s); }

        void add(const char* key, std::string_view sv) { addKeyValue(key, sv); }

        // ---- NEW: nested collections ----
        void add(const char* key, const ArrayStream& arr) { addKeyValue(key, arr); }

        void add(const char* key, const StructStream& obj) { addKeyValue(key, obj); }

        void writeTo(gm::byteio::IByteWriter& output) const override
        {
            if (!writeCollectionHeader(output, kind))
                return;
            DataStream::writeTo(output);
        }

        void buildFrom(gm::byteio::BufferReader& bv) override
        {
            if (!parseCollectionHeader(bv, kind))
                return;
            DataStream::buildFrom(bv);
        }
    };

    template<typename T>
    class TypedArrayStream : public gm::wire::details::CollectionStream {
        static_assert(
            std::is_arithmetic_v<T> || std::is_enum_v<T> || std::is_convertible_v<T, std::string_view>,
            "TypedArrayStream only supports arithmetic types, enums and strings"
            );

    private:
        static constexpr gm::wire::GMKind kind = gm::wire::GMKind::TypedArray;

    protected:
        void serializeTo(std::vector<std::byte>& buffer) const override
        {
            serializeHeaderTo(buffer, kind);

            gm::byteio::VectorWriter w(buffer);
            // write element type once
            auto elemKind = gm::wire::details::getGMValueType<T>();
            gm::wire::codec::writeValue(w, elemKind);

            // now the raw payload from DataStream
            DataStream::serializeTo(buffer);
        }

    public:
        explicit TypedArrayStream(size_t reserveSize) : CollectionStream(reserveSize)
        {
            // Additional initialization as needed
        }

        TypedArrayStream() : TypedArrayStream(512) {} // Delegating to the other constructor

        TypedArrayStream& operator<<(const T& value)
        {
            incrementSize();
            // Serialize just the value as type information is homogeneous
            gm::wire::DataStream::operator<<(value);
            return *this;
        }

        void writeTo(gm::byteio::IByteWriter& output) const override
        {
            if (!writeCollectionHeader(output, kind))
                return;

            auto elemKind = gm::wire::details::getGMValueType<T>();
            gm::wire::codec::writeValue(output, elemKind);

            DataStream::writeTo(output);
        }

        void buildFrom(gm::byteio::BufferReader& bv) override
        {
            if (!parseCollectionHeader(bv, kind))
                return;

            auto tag = bv.read<std::uint8_t>();
            if (static_cast<gm::wire::GMKind>(tag) != gm::wire::details::getGMValueType<T>()) {
                return;
            }
            DataStream::buildFrom(bv);
        }
    };

} // namespace gm::wire

namespace gm::runtime {

    class DispatchQueue {
    public:
        DispatchQueue() = default;

        /* Enqueue a StructStream from any worker thread */
        void dispatch(const gm::wire::DataStream& ev);
        void dispatch(gm::wire::DataStream&& ev);

        /* Called by GML runner each step */
        double fetch(gm::byteio::BufferWriter& output);

    private:
        std::mutex m_mutex;
        std::vector<gm::wire::DataStream> m_pending; // guarded by m_mutex
        gm::wire::ArrayStream m_packed;              // lives only on the main thread
    };

    inline void DispatchQueue::dispatch(const gm::wire::DataStream& ev)
    {
        std::lock_guard<std::mutex> lock(m_mutex);
        m_pending.push_back(ev); // copy
    }

    inline void DispatchQueue::dispatch(gm::wire::DataStream&& ev)
    {
        std::lock_guard<std::mutex> lock(m_mutex);
        m_pending.push_back(std::move(ev)); // move
    }

    inline double DispatchQueue::fetch(gm::byteio::BufferWriter& output)
    {
        std::size_t bytesNeeded = m_packed.getLength();
        if (bytesNeeded == 0) // no pending stream
        {
            std::vector<gm::wire::DataStream> local;
            {
                std::lock_guard<std::mutex> lock(m_mutex);
                if (m_pending.empty())
                    return 0;          // nothing to do
                local.swap(m_pending); // steal vector in O(1)
            }

            for (auto& ev : local) {
                m_packed << std::move(ev); // append into ArrayStream
            }

            bytesNeeded = m_packed.getLength();
        }

        if (bytesNeeded > output.remaining()) {
            return -static_cast<double>(bytesNeeded);
        }

        m_packed.writeTo(output);
        m_packed.clear();
        return static_cast<double>(bytesNeeded);
    }

    enum GMFunctionAction : uint8_t { Execute = 1, Release };
} // namespace gm::runtime

namespace gm::wire::codec {

    template<>
    inline gm::wire::ArrayStream readValue<gm::wire::ArrayStream>(BufferReader& buf)
    {
        size_t _init = buf.position();
        readValue(buf);
        size_t _end = buf.position();

        BufferReader _sub(buf.data() + _init, _end - _init);
        gm::wire::ArrayStream as;
        as.buildFrom(_sub);
        return as;
    }

    template<>
    inline gm::wire::StructStream readValue<gm::wire::StructStream>(BufferReader& buf)
    {
        size_t _init = buf.position();
        readValue(buf);
        size_t _end = buf.position();

        BufferReader _sub(buf.data() + _init, _end - _init);
        gm::wire::StructStream ss;
        ss.buildFrom(_sub);
        return ss;
    }

    inline void writeValue(gm::byteio::IByteWriter& buf, const gm::wire::DataStream& v) { v.writeTo(buf); }

    inline void writeValue(gm::byteio::IByteWriter& buf, const gm::wire::ArrayStream& v) { v.writeTo(buf); }

    inline void writeValue(gm::byteio::IByteWriter& buf, const gm::wire::StructStream& v) { v.writeTo(buf); }
} // namespace gm::wire::codec

namespace gm::wire {

    inline void GMFunction::call_with_args(const ArrayStream& args) const
    {
        if (!handle_ || !handle_->owner || handle_->id == 0)
            return;

        DataStream ds;

        auto& buff = ds.getBuffer();
        gm::byteio::VectorWriter w(buff);
        gm::wire::codec::writeValue(w, handle_->id);
        gm::wire::codec::writeValue(w, gm::runtime::GMFunctionAction::Execute);
        ds << args;

        handle_->owner->dispatch(std::move(ds));
    }

    template<class... Args>
    void GMFunction::call(Args&&... args) const
    {
        if (!handle_ || !handle_->owner || handle_->id == 0)
            return;

        ArrayStream as;
        // No initializer_list; guaranteed left-to-right
        ((void)(as << std::forward<Args>(args)), ...);

        call_with_args(as);
    }

    inline void GMFunction::Handle::release()
    {
        DataStream ds;

        auto& buff = ds.getBuffer();

        gm::byteio::VectorWriter w(buff);
        gm::wire::codec::writeValue(w, id);
        gm::wire::codec::writeValue(w, gm::runtime::GMFunctionAction::Release);

        if (owner) {
            owner->dispatch(std::move(ds));
            return;
        }

#if defined(GMEXT_DEBUG) || defined(_DEBUG)
        std::abort();
#endif
    }

} // namespace gm::wire
