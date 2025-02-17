

import Long = require("long");

var val: Long;
var n: number = 42;
var b: boolean = true;
var s: string = "1337";
var bytes: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

val = new Long(0xFFFFFFFF, 0x7FFFFFFF, true);
val = new Long(0xFFFFFFFF, 0x7FFFFFFF);
val = new Long(0xFFFFFFFF);

n = val.low;
n = val.high;
b = val.unsigned;

val = val.add(val);
val = val.add(n);
val = val.add(s);

val = val.and(val);
val = val.and(n);
val = val.and(s);

n = val.compare(val);
n = val.compare(n);
n = val.compare(s);

val = Long.ONE;
val = val.div(val);
val = val.div(n);
val = val.div(s);

b = val.equals(val);
b = val.equals(n);
b = val.equals(s);

n = val.getHighBits();
n = val.getHighBitsUnsigned();
n = val.getLowBits();
n = val.getLowBitsUnsigned();
n = val.getNumBitsAbs();

b = val.greaterThan(val);
b = val.greaterThan(n);
b = val.greaterThan(s);

b = val.greaterThanOrEqual(val);
b = val.greaterThanOrEqual(n);
b = val.greaterThanOrEqual(s);

b = val.isEven();
b = val.isNegative();
b = val.isOdd();
b = val.isPositive();
b = val.isZero();

b = val.lessThan(val);
b = val.lessThan(n);
b = val.lessThan(s);

b = val.lessThanOrEqual(val);
b = val.lessThanOrEqual(n);
b = val.lessThanOrEqual(s);

val = Long.fromValue(10);
val = Long.fromValue('10');
val = Long.fromValue(10, true);
val = Long.fromValue('10', true);
val = Long.fromValue({ low: 1, high: 1, unsigned: true });
val = Long.fromValue({ low: 1, high: 1, unsigned: true }, true);
val = val.modulo(val);
val = val.modulo(n);
val = val.modulo(s);

val = val.multiply(val);
val = val.multiply(n);
val = val.multiply(s);

val = val.negate();
val = val.not();

b = val.notEquals(val);
b = val.notEquals(n);
b = val.notEquals(s);

val = val.or(val);
val = val.or(n);
val = val.or(s);

val = val.shiftLeft(2);
val = val.shiftLeft(val);

val = val.shiftRight(1);
val = val.shiftRight(val);

val = val.shiftRightUnsigned(1);
val = val.shiftRightUnsigned(val);

val = val.subtract(val);
val = val.subtract(n);
val = val.subtract(s);

n = val.toInt();
n = val.toNumber();
val = val.toSigned();

s = val.toString();
s = val.toString(16);

val = val.toUnsigned();

val = val.xor(val);
val = val.xor(n);
val = val.xor(s);

val = Long.MAX_UNSIGNED_VALUE;
val = Long.MAX_VALUE;
val = Long.MIN_VALUE;
val = Long.NEG_ONE;
val = Long.ONE;
val = Long.UZERO;
val = Long.ZERO;

val = Long.fromBytes(bytes);
val = Long.fromBytes(bytes, true);
val = Long.fromBytes(bytes, true, true);
bytes = val.toBytes();
val = Long.fromBytes(bytes)
bytes = val.toBytesLE()
val = Long.fromBytesLE(bytes)
bytes = val.toBytesBE()
val = Long.fromBytesBE(bytes)


// Testing module augmentation
declare module 'long' {
    interface Long {
        to42(): number;
    }
  
    interface LongConstructor {
        from42(input: number): Long;
    }
}

Long.prototype.to42 = function() {
    return 42
}

Long.from42 = function(input: number): Long {
    return Long.fromNumber(42)
}
