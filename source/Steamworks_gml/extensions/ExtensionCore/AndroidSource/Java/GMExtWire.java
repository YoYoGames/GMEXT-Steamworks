package ${YYAndroidPackageName};

import java.nio.BufferUnderflowException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.StandardCharsets;
import java.lang.ref.Cleaner;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ConcurrentHashMap;

public class GMExtWire
{
    private static final Cleaner CLEANER = Cleaner.create();

    private static final class GMFunctionReleaser implements Runnable {
        private final long uid;
        private final GMDispatcher dispatcher;

        GMFunctionReleaser(long uid, GMDispatcher dispatcher) {
            this.uid = uid;
            this.dispatcher = dispatcher;
        }

        @Override
        public void run() {
            if (dispatcher == null || uid == 0) return;

            DataStream ds = new DataStream();
            ds.putRawI64(uid);
            ds.putRawI8(GMFunctionAction.Release.tag);
            dispatcher.dispatch(ds);
        }
    }

    private static final ConcurrentHashMap<Class<?>, Integer> CODEC_ID_CACHE = new ConcurrentHashMap<>();

    private static int resolveCodecId(Class<?> cls) {
        return CODEC_ID_CACHE.computeIfAbsent(cls, c -> {
            try {
                var field = c.getField("CODEC_ID");
                return field.getInt(null);
            } catch (NoSuchFieldException | IllegalAccessException e) {
                throw new IllegalArgumentException(
                    "ITypedStruct type " + c.getName() +
                    " must define public static final int CODEC_ID", e);
            }
        });
    }

    public enum GMKind {
        NULL, // encoded as ValueType.Undefined
        BOOL, BYTE, SHORT, INT, LONG, FLOAT, DOUBLE,
        STRING,
        ARRAY, OBJECT, // “Struct” => object
        TYPED_STRUCT, TYPED_ARRAY, BUFFER, POINTER; // extra buckets (optional)

        public static GMKind fromTag(byte t) {
            switch (t & 0xFF) { // unsigned compare
                /* ---------- scalars ---------- */
                case 1: /* UInt8 */
                case 2: /* Int8 */
                    return GMKind.BYTE;
                case 3: /* UInt16 */
                case 4: /* Int16 */
                    return GMKind.SHORT;
                case 5: /* UInt32 */
                case 6: /* Int32 */
                    return GMKind.INT;
                case 12: /* UInt64 */
                    return GMKind.LONG;
                case 7: /* Float16 – we’ll up-cast */
                case 8: /* Float */
                    return GMKind.FLOAT;
                case 9: /* Double */
                    return GMKind.DOUBLE;
                case 10: /* Bool */
                    return GMKind.BOOL;
                case 11: /* String */
                case 13: /* Text */
                    return GMKind.STRING;

                /* ---------- compound ---------- */
                case 249: 
                    return GMKind.TYPED_STRUCT;
                case 250:
                    return GMKind.TYPED_ARRAY;
                case 251:
                    return GMKind.NULL; // Undefined
                case 252:
                    return GMKind.POINTER;
                case 253:
                    return GMKind.BUFFER;
                case 254:
                    return GMKind.ARRAY;
                case 255:
                    return GMKind.OBJECT;

                default:
                    throw new IllegalStateException("Unknown tag " + (t & 0xFF));
            }
        }
    }

    public interface ITypedStruct {
        /** Serialize JUST the payload fields (no kind/tag/codecId). */
        void encode(ByteBuffer b);
    }

    public static class DataStream {

        protected static final int DEFAULT_CAP = 512;

        protected ByteBuffer buf;

        public DataStream(int capacity) {
            buf = alloc(capacity);
        }

        public DataStream() {
            this(DEFAULT_CAP);
        }

        private static ByteBuffer alloc(int n) {
            return ByteBuffer.allocate(n).order(ByteOrder.LITTLE_ENDIAN);
        }

        protected ByteBuffer need(int n) {
            if (buf.remaining() >= n)
                return buf;

            int newCap = buf.capacity();
            int minCap = buf.position() + n;
            while (newCap < minCap)
                newCap = newCap * 2; // exponential growth

            ByteBuffer bigger = alloc(newCap);
            buf.flip(); // make the written portion readable
            bigger.put(buf); // copy existing payload
            buf = bigger;
            return buf;
        }

        public int length() {
            return buf.position();
        }

        public void clear() {
            buf.clear();
        }

        // ---- RAW (no type tag) writers ----
        public DataStream putRawI8(byte v)    { need(1); GMExtWire.writeI8(buf, v);   return this; }
        public DataStream putRawI16(short v)  { need(2); GMExtWire.writeI16(buf, v);  return this; }
        public DataStream putRawI32(int v)    { need(4); GMExtWire.writeI32(buf, v);  return this; }
        public DataStream putRawI64(long v)   { need(8); GMExtWire.writeI64(buf, v);  return this; }
        public DataStream putRawBool(boolean v){ need(1);  GMExtWire.writeBool(buf, v); return this; }

        public DataStream put(byte v) {
            need(1 + 1);
            GMExtWire.writeI8(buf, ValueType.Int8.tag);
            GMExtWire.writeI8(buf, v);
            return this;
        }

        public DataStream put(short v) {
            need(1 + 2);
            GMExtWire.writeI8(buf, ValueType.Int16.tag);
            GMExtWire.writeI16(buf, v);
            return this;
        }

        public DataStream put(int v) {
            need(1 + 4);
            GMExtWire.writeI8(buf, ValueType.Int32.tag);
            GMExtWire.writeI32(buf, v);
            return this;
        }

        public DataStream put(long v) {
            need(1 + 8);
            GMExtWire.writeI8(buf, ValueType.UInt64.tag);
            GMExtWire.writeI64(buf, v);
            return this;
        }

        public DataStream put(float v) {
            need(1 + 4);
            GMExtWire.writeI8(buf, ValueType.Float.tag);
            GMExtWire.writeF32(buf, v);
            return this;
        }

        public DataStream put(double v) {
            need(1 + 8);
            GMExtWire.writeI8(buf, ValueType.Double.tag);
            GMExtWire.writeF64(buf, v);
            return this;
        }

        public DataStream put(boolean v) {
            need(1 + 1);
            GMExtWire.writeI8(buf, ValueType.Bool.tag);
            GMExtWire.writeBool(buf, v);
            return this;
        }

        public DataStream put(String s) {
            need(1 + 4 + s.length() + 1);
            GMExtWire.writeI8(buf, ValueType.String.tag);
            GMExtWire.writeString(buf, s);
            return this;
        }

        public DataStream put(ITypedStruct s) {
            need(1 + 4); // at least tag + codecId
            GMExtWire.writeI8(buf, ValueType.TypedStruct.tag);
            // 2) write codec id (32-bit, matches C++)
            int codecId = resolveCodecId(s.getClass());
            GMExtWire.writeI32(buf, codecId);

            s.encode(buf);
            return this;
        }

        public DataStream put(Optional<?> opt) {
            if (opt == null || !opt.isPresent()) {
                // Empty optional => Undefined tag
                need(1);
                GMExtWire.writeI8(buf, ValueType.Undefined.tag);
            } else {
                putAny(opt.get());  // delegate to normal typed path
            }
            return this;
        }

        public DataStream put(java.util.List<?> list) {
            Objects.requireNonNull(list, "List is null");

            need(1 + 2);
            GMExtWire.writeI8(buf, ValueType.Array.tag);
            GMExtWire.writeI16(buf, (short) list.size());

            for (Object e : list) {
                putAny(e);
            }
            return this;
        }

        protected DataStream put(DataStream v) {
            ByteBuffer src = v.buf.asReadOnlyBuffer();
            src.flip();
            need(v.length());
            buf.put(src);
            return this;
        }

        public void writeTo(ByteBuffer target) {
            ByteBuffer src = buf.asReadOnlyBuffer();
            src.flip();
            target.put(src);
        }

        public void buildFrom(ByteBuffer src) {
            ByteBuffer r = src.asReadOnlyBuffer().order(ORDER);
            r.rewind();
            buf.clear();
            need(r.remaining());
            buf.put(r);
        }

        protected <T> void putAny(T v) {
            Objects.requireNonNull(v, "null not allowed here");
            if (v instanceof Byte)
                put((byte) v);
            else if (v instanceof Short)
                put((short) v);
            else if (v instanceof Integer)
                put((int) v);
            else if (v instanceof Long)
                put((long) v);
            else if (v instanceof Float)
                put((float) v);
            else if (v instanceof Double)
                put((double) v);
            else if (v instanceof Boolean)
                put((boolean) v);
            else if (v instanceof String)
                put((String) v);
            else if (v instanceof ITypedStruct)
                put((ITypedStruct) v);
            else if (v instanceof DataStream)
                ((DataStream) v).serializeTo(this);
            else
                throw new IllegalArgumentException("Unsupported: " + v.getClass());
        }

        protected void serializeTo(DataStream dst) {
            dst.put(this); // default behavior
        }
    }

    public static abstract class CollectionStream extends DataStream {
        
        protected short count;
        protected final byte tag;

        public CollectionStream(byte typeTag, int cap) {
            super(cap);
            tag = typeTag;
        }

        public CollectionStream(byte typeTag) {
            this(typeTag, DEFAULT_CAP);
        }
        
        @Override
        public void clear() {
            count = 0;
            super.clear();
        }

        @Override
        public void writeTo(ByteBuffer dst) {
            GMExtWire.order(dst);
            GMExtWire.writeI8(dst, tag);
            GMExtWire.writeI16(dst, count);
            super.writeTo(dst);
        }

        @Override
        protected void serializeTo(DataStream dst) {
            GMExtWire.writeI8(dst.buf, tag);
            GMExtWire.writeI16(dst.buf, count);
            super.serializeTo(dst); // write buffer content
        }

        @Override
        public void buildFrom(ByteBuffer src) {
            byte srcTag = src.get();
            if (tag != srcTag)
                throw new IllegalArgumentException("Incompatible 'tag' when building from ByteBuffer.");
            super.buildFrom(src);
        }
    }

    public static final class ArrayStream extends CollectionStream {

        public ArrayStream(int cap) {
            super(ValueType.Array.tag, cap);
        }

        public ArrayStream() {
            this(DEFAULT_CAP);
        }

        public <T> ArrayStream add(T v) {
            ++count;
            putAny(v);
            return this;
        }
    }

    public static final class StructStream extends CollectionStream {

        public StructStream(int cap) {
            super(ValueType.Struct.tag, cap);
        }

        public StructStream() {
            this(DEFAULT_CAP);
        }

        public <T> StructStream kv(String key, T value) {
            ++count;
            put(key);
            putAny(value);
            return this;
        }
    }

    public static final class TypedArrayStream<T> extends CollectionStream {

        private final byte elemTag;
        private final Integer codecId; // null for non-struct element types

        public TypedArrayStream(Class<T> elemType) {
            super(ValueType.TypedArray.tag); // CollectionStream(tag)
            if (ITypedStruct.class.isAssignableFrom(elemType)) {
                this.elemTag = ValueType.TypedStruct.tag;
                this.codecId = resolveCodecId(elemType);
            } else if (elemType == Integer.class) {
                this.elemTag = ValueType.Int32.tag; this.codecId = null;
            } else if (elemType == Long.class) {
                this.elemTag = ValueType.UInt64.tag; this.codecId = null;
            } else if (elemType == String.class) {
                this.elemTag = ValueType.String.tag; this.codecId = null;
            } else {
                throw new IllegalArgumentException("Unsupported type for TypedArrayStream: " + elemType);
            }
        }

        public TypedArrayStream<T> add(T value) {
            ++count;
            // Only payload: no per-element tag. For gm_struct we rely on encode().
            if (value instanceof ITypedStruct s) {
                s.encode(buf);
            } else {
                // scalar/string – write raw, no GMValue tag
                if (value instanceof Integer i) GMExtWire.writeI32(buf, i);
                else if (value instanceof Long l) GMExtWire.writeI64(buf, l);
                else if (value instanceof String s) GMExtWire.writeString(buf, s);
                else throw new IllegalArgumentException("Unsupported elem: " + value.getClass());
            }
            return this;
        }

        @Override
        public void writeTo(ByteBuffer dst) {
            GMExtWire.order(dst);

            GMExtWire.writeI8(dst, ValueType.TypedArray.tag);
            GMExtWire.writeI16(dst, count);

            GMExtWire.writeI8(dst, elemTag);
            if (codecId != null) {
                GMExtWire.writeI32(dst, codecId);
            }

            // now write just the payload contained in buf
            ByteBuffer src = buf.asReadOnlyBuffer();
            src.flip();
            dst.put(src);
        }

        @Override
        protected void serializeTo(DataStream dst) {
            GMExtWire.writeI8(dst.buf, ValueType.TypedArray.tag);
            GMExtWire.writeI16(dst.buf, count);
            GMExtWire.writeI8(dst.buf, elemTag);
            if (codecId != null) GMExtWire.writeI32(dst.buf, codecId);

            ByteBuffer src = buf.asReadOnlyBuffer();
            src.flip();
            dst.need(src.remaining());
            dst.buf.put(src);
        }
    }

    public static final class GMValue {

        private final GMKind kind;
        private final Object payload; // may be null

        private GMValue(GMKind k, Object p) {
            kind = k;
            payload = p;
        }

        static GMValue ofNull() {
            return new GMValue(GMKind.NULL, null);
        }

        static GMValue of(boolean b) {
            return new GMValue(GMKind.BOOL, b);
        }

        static GMValue of(byte b) {
            return new GMValue(GMKind.BYTE, b);
        }

        static GMValue of(short s) {
            return new GMValue(GMKind.SHORT, s);
        }

        static GMValue of(int i) {
            return new GMValue(GMKind.INT, i);
        }

        static GMValue of(long l) {
            return new GMValue(GMKind.LONG, l);
        }

        static GMValue of(float f) {
            return new GMValue(GMKind.FLOAT, f);
        }

        static GMValue of(double d) {
            return new GMValue(GMKind.DOUBLE, d);
        }

        static GMValue of(String s) {
            return new GMValue(GMKind.STRING, s);
        }

        static GMValue of(List<GMValue> a) {
            return new GMValue(GMKind.ARRAY, a);
        }

        static GMValue of(Map<String, GMValue> obj) {
            return new GMValue(GMKind.OBJECT, obj);
        }

        /* accessors */
        public GMKind kind() {
            return kind;
        }

        public boolean asBool() {
            return (boolean) payload;
        }

        public int asInt() {
            return (int) payload;
        }

        public long asLong() {
            return (long) payload;
        }

        public float asFloat() {
            return (float) payload;
        }

        public double asDouble() {
            return (double) payload;
        }

        public String asString() {
            return (String) payload;
        }

        public List<GMValue> asArray() {
            return cast(payload);
        }

        public Map<String, GMValue> asObject() {
            return cast(payload);
        }

        /** Generic optional accessor – idiomatic Java 8 style */
        @SuppressWarnings("unchecked")
        public <T> Optional<T> getIf(Class<T> type) {
            return type.isInstance(payload) ? Optional.of((T) payload) : Optional.empty();
        }

        @SuppressWarnings("unchecked")
        private static <T> T cast(Object o) {
            return (T) o;
        }

        @Override
        public String toString() {
            return kind + ":" + payload;
        }
    }

    /** Minimal interface the queue must satisfy. */
    public interface GMDispatcher {
        void dispatch(DataStream ev);
        double fetch(ByteBuffer output);
    }

    /** Per-instance queue; lock-free producers, single consumer. */
    public static final class DispatchQueue implements GMDispatcher {
        private final ConcurrentLinkedQueue<DataStream> q = new ConcurrentLinkedQueue<>();
        private final ArrayStream packed = new ArrayStream();

        @Override
        public void dispatch(DataStream ev) {
            // Snapshot the bytes so caller can reuse their DataStream safely.
            ByteBuffer ro = ev.buf.asReadOnlyBuffer();
            ro.flip();
            DataStream copy = new DataStream(ro.remaining());
            copy.buildFrom(ro);
            q.add(copy);
        }

        @Override
        public double fetch(ByteBuffer output)
        {
            if (packed.length() == 0) {
                DataStream ev;
                while ((ev = q.poll()) != null) {
                    packed.add(ev);
                }
                if (packed.length() == 0) return 0.0;
            }

            int need = packed.length();
            if (need > output.remaining()) return - (double) need;

            packed.writeTo(output);
            packed.clear();

            return (double) need;
        }
    }

    private enum GMFunctionAction {
        Execute((byte)1),
        Release((byte)2);

        public final byte tag;

        GMFunctionAction(byte v) {
            tag = v;
        }
    }

    public static final class GMFunction {
        private final long uid;
        private final GMDispatcher dispatcher;
        private final Cleaner.Cleanable cleanable;

        public GMFunction(long id, GMDispatcher dispatcher) {
            this.uid = id;
            this.dispatcher = dispatcher;

            // Register a cleanup action that sends Release when this GMFunction is GC’d
            this.cleanable = CLEANER.register(this, new GMFunctionReleaser(id, dispatcher));
        }

        public void call(Object... args) {
            DataStream ds = new DataStream();
            ds.putRawI64(uid);
            ds.putRawI8(GMFunctionAction.Execute.tag);

            // Encode args as a GM Array value
            ds.put(Arrays.asList(args));   // uses DataStream.put(List<?>)

            dispatcher.dispatch(ds);
        }

        public void release() {
            // Manually trigger cleanup once. Subsequent calls are no-ops.
            cleanable.clean();
        }

        public long getId() { return uid; }
    }

    public enum ValueType {
        UInt8(1), Int8(2),
        UInt16(3), Int16(4),
        UInt32(5), Int32(6),
        UInt64(12),
        Float16(7), Float(8),
        Double(9),
        Bool(10),
        String(11),
        Text(13), // not used but kept for parity

        TypedStruct(249),
        TypedArray(250),
        Undefined(251),
        Pointer(252),
        Buffer(253),
        Array(254),
        Struct(255);

        public final byte tag;

        ValueType(int v) {
            tag = (byte) v;
        }
    }

	private GMExtWire() {}

	public static final ByteOrder ORDER = ByteOrder.LITTLE_ENDIAN;

    // Cursor helpers
    public static ByteBuffer order(ByteBuffer b) {
        return b.order(ORDER);
    }

    private static ByteBuffer need(ByteBuffer b, int n) {
        if (b.remaining() < n) throw new BufferUnderflowException();
		return b;
    }

    // Read Primitives
    public static byte   readI8(ByteBuffer b){ need(b,1); return b.get(); }
    public static short  readI16(ByteBuffer b){ need(b,2); return b.getShort(); }
    public static int    readI32(ByteBuffer b){ need(b,4); return b.getInt(); }
    public static long   readI64(ByteBuffer b){ need(b,8); return b.getLong(); }
    public static float  readF32(ByteBuffer b){ need(b,4); return b.getFloat(); }
    public static double readF64(ByteBuffer b){ need(b,8); return b.getDouble(); }
    public static boolean readBool(ByteBuffer b){ need(b,1); return b.get()!=0; }
	
    // Reads ONE GMValue (can be single value or a collection).
    public static GMValue readGMValue(ByteBuffer b) {
		order(b);
		byte tag = need(b, 1).get();
		GMKind k = GMKind.fromTag(tag);

		switch (k) {
			case NULL:
				return GMValue.ofNull();
			case BOOL:
				return GMValue.of(need(b, 1).get() != 0);
			case BYTE:
				return GMValue.of(need(b, 1).get());
			case SHORT:
				return GMValue.of(need(b, 2).getShort());
			case INT:
				return GMValue.of(need(b, 4).getInt());
			case LONG:
				return GMValue.of(need(b, 8).getLong());
			case FLOAT:
				return GMValue.of(need(b, 4).getFloat());
			case DOUBLE:
				return GMValue.of(need(b, 8).getDouble());
			case STRING: {
				String s = readString(b);          // consumes trailing NUL
				return GMValue.of(s);
			}
			case ARRAY: {
				int sz = need(b, 2).getShort() & 0xFFFF;
				List<GMValue> list = new ArrayList<>(sz);
				for (int i = 0; i < sz; i++) list.add(readGMValue(b));
				return GMValue.of(list);
			}
			case OBJECT: {
				int sz = need(b, 2).getShort() & 0xFFFF;
				Map<String, GMValue> map = new LinkedHashMap<>(sz);
				for (int i = 0; i < sz; i++) {
					String key = readGMValue(b).asString();
					map.put(key, readGMValue(b));
				}
				return GMValue.of(map);
			}
            case TYPED_ARRAY:
            case TYPED_STRUCT:
                // These are only produced by C++/Java -> GML, never the other way.
                throw new IllegalStateException("Typed kinds not expected from GML");
			default:
				throw new IllegalStateException("Unknown tag " + (tag & 0xFF));
		}
	}

    // Reads ONE GMValue and expects it to be an ARRAY; returns its elements.
    public static List<GMValue> readGMArray(ByteBuffer b) {
        order(b);
        GMValue v = readGMValue(b);
        if (v.kind() != GMKind.ARRAY) {
            throw new IllegalStateException("Expected ARRAY GMValue, got " + v.kind());
        }
        return v.asArray(); // already a List<GMValue>
    }

    // Reads ONE GMValue and expects it to be an OBJECT/STRUCT; returns its entries.
    public static Map<String, GMValue> readGMObject(ByteBuffer b) {
        order(b);
        GMValue v = readGMValue(b);
        if (v.kind() != GMKind.OBJECT) {
            throw new IllegalStateException("Expected OBJECT GMValue, got " + v.kind());
        }
        return v.asObject();
    }

    // Reads a pointer from the buffer and create a GMFunction wrapper for it. 
    public static GMFunction readGMFunction(ByteBuffer b, GMDispatcher dispatcher) {
        long ref = readI64(b);
        return new GMFunction(ref, dispatcher);
    }

    // Write Primitives
    public static void writeI8(ByteBuffer b, byte v){ need(b,1); b.put(v); }
    public static void writeI16(ByteBuffer b, short v){ need(b,2); b.putShort(v); }
    public static void writeI32(ByteBuffer b, int v){ need(b,4); b.putInt(v); }
    public static void writeI64(ByteBuffer b, long v){ need(b,8); b.putLong(v); }
    public static void writeF32(ByteBuffer b, float v){ need(b,4); b.putFloat(v); }
    public static void writeF64(ByteBuffer b, double v){ need(b,8); b.putDouble(v); }
    public static void writeBool(ByteBuffer b, boolean v){ need(b,1); b.put((byte)(v?1:0)); }

    // Strings: length-prefixed UTF-8 + NUL
    public static String readString(ByteBuffer b){
        int len = readI32(b);
        need(b, len + 1);
        byte[] tmp = new byte[len];
        b.get(tmp);
        byte nul = b.get();
        if (nul != 0) throw new IllegalStateException("String missing NUL terminator");
        return new String(tmp, StandardCharsets.UTF_8);
    }
    public static void writeString(ByteBuffer b, String s){
        byte[] bytes = s.getBytes(StandardCharsets.UTF_8);
        writeI32(b, bytes.length);
        need(b, bytes.length + 1);
        b.put(bytes);
        b.put((byte)0);
    }

    // Optional<T>: 1-byte presence, then payload
    @FunctionalInterface public interface Reader<T>{ T read(ByteBuffer b); }
    @FunctionalInterface public interface Writer<T>{ void write(ByteBuffer b, T v); }

    public static <T> Optional<T> readOptional(ByteBuffer b, Reader<T> r){
        boolean present = readBool(b);
        return present ? Optional.of(r.read(b)) : Optional.empty();
    }
    public static <T> void writeOptional(ByteBuffer b, Optional<T> v, Writer<T> w){
        writeBool(b, v!=null && v.isPresent());
        if (v!=null && v.isPresent()) w.write(b, v.get());
    }

    // Vectors: length-prefixed (int32) list
    public static <T> List<T> readList(ByteBuffer b, Reader<T> r){
        int count = readI32(b);
        if (count < 0) throw new IllegalStateException("negative list size");
        ArrayList<T> out = new ArrayList<>(count);
        for (int i=0;i<count;i++) out.add(r.read(b));
        return out;
    }
    public static <T> void writeList(ByteBuffer b, List<T> xs, Writer<T> w){
        writeI32(b, xs.size());
        for (T x: xs) w.write(b, x);
    }

    // Vectors: fixed-count vector (caller already knows count)
    public static <T> List<T> readVector(ByteBuffer b, int count, Reader<T> r){
        ArrayList<T> out = new ArrayList<>(count);
        for (int i=0;i<count;i++) out.add(r.read(b));
        return out;
    }
    public static <T> void writeVector(ByteBuffer b, List<T> xs, Writer<T> w){
        for (T x: xs) w.write(b, x);
    }

    // Arrays: fixed-count array (caller already knows count)
    public static <T> T[] readFixedArray(ByteBuffer b, int n, Reader<T> r, T[] out){
        for (int i=0;i<n;i++) out[i] = r.read(b);
        return out;
    }
    public static <T> void writeFixedArray(ByteBuffer b, T[] arr, Writer<T> w){
        for (T t: arr) w.write(b, t);
    }

    // Primitive "element readers/writers"
    public static final Reader<Byte> BYTE = GMExtWire::readI8;
    public static final Writer<Byte> BYTE_W = GMExtWire::writeI8;

    public static final Reader<Short> SHORT = GMExtWire::readI16;
    public static final Writer<Short> SHORT_W = GMExtWire::writeI16;

    public static final Reader<Integer> INT = GMExtWire::readI32;
    public static final Writer<Integer> INT_W = GMExtWire::writeI32;

    public static final Reader<Long> LONG = GMExtWire::readI64;
    public static final Writer<Long> LONG_W = GMExtWire::writeI64;

    public static final Reader<Float> FLOAT = GMExtWire::readF32;
    public static final Writer<Float> FLOAT_W = GMExtWire::writeF32;

    public static final Reader<Double> DOUBLE = GMExtWire::readF64;
    public static final Writer<Double> DOUBLE_W = GMExtWire::writeF64;

    public static final Reader<Boolean> BOOL = GMExtWire::readBool;
    public static final Writer<Boolean> BOOL_W = GMExtWire::writeBool;

    public static final Reader<String> STR = GMExtWire::readString;
    public static final Writer<String> STR_W = GMExtWire::writeString;

    // Dynamic "element readers"
	public static final Reader<GMValue> GM_VALUE = GMExtWire::readGMValue;
    public static final Reader<List<GMValue>> GM_ARRAY = GMExtWire::readGMArray;
    public static final Reader<Map<String, GMValue>> GM_OBJECT = GMExtWire::readGMObject;
}

