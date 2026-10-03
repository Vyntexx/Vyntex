import { createRequire as __cr } from 'module'; const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x, {
  get: (a, b) => (typeof require < "u" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res, err) => function() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod2) => function() {
  try {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  } catch (e) {
    throw mod2 = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 == "object" || typeof from2 == "function")
    for (let key2 of __getOwnPropNames(from2))
      !__hasOwnProp.call(to, key2) && key2 !== except && __defProp(to, key2, { get: () => from2[key2], enumerable: !(desc = __getOwnPropDesc(from2, key2)) || desc.enumerable });
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: !0 }) : target,
  mod2
));

// node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = !0 } = {}) {
  return !value || typeof value != "string" ? !1 : strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esm({
  "node_modules/viem/_esm/utils/data/isHex.js"() {
  }
});

// node_modules/viem/_esm/utils/data/size.js
function size(value) {
  return isHex(value, { strict: !1 }) ? Math.ceil((value.length - 2) / 2) : value.length;
}
var init_size = __esm({
  "node_modules/viem/_esm/utils/data/size.js"() {
    init_isHex();
  }
});

// node_modules/viem/_esm/errors/version.js
var version, init_version = __esm({
  "node_modules/viem/_esm/errors/version.js"() {
    version = "2.57.2";
  }
});

// node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
  return fn?.(err) ? err : err && typeof err == "object" && "cause" in err && err.cause !== void 0 ? walk(err.cause, fn) : fn ? null : err;
}
var errorConfig, BaseError, init_base = __esm({
  "node_modules/viem/_esm/errors/base.js"() {
    init_version();
    errorConfig = {
      getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
      version: `viem@${version}`
    }, BaseError = class _BaseError extends Error {
      constructor(shortMessage, args = {}) {
        let details = args.cause instanceof _BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details, docsPath = args.cause instanceof _BaseError && args.cause.docsPath || args.docsPath, docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath }), message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsUrl ? [`Docs: ${docsUrl}`] : [],
          ...details ? [`Details: ${details}`] : [],
          ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
        ].join(`
`);
        super(message, args.cause ? { cause: args.cause } : void 0), Object.defineProperty(this, "details", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "docsPath", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "metaMessages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "shortMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "version", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "BaseError"
        }), this.details = details, this.docsPath = docsPath, this.metaMessages = args.metaMessages, this.name = args.name ?? this.name, this.shortMessage = shortMessage, this.version = version;
      }
      walk(fn) {
        return walk(this, fn);
      }
    };
  }
});

// node_modules/viem/_esm/errors/abi.js
var AbiEncodingArrayLengthMismatchError, AbiEncodingBytesSizeMismatchError, AbiEncodingLengthMismatchError, BytesSizeMismatchError, InvalidAbiEncodingTypeError, InvalidArrayError, init_abi = __esm({
  "node_modules/viem/_esm/errors/abi.js"() {
    init_size();
    init_base();
    AbiEncodingArrayLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength, type }) {
        super([
          `ABI encoding array length mismatch for type ${type}.`,
          `Expected length: ${expectedLength}`,
          `Given length: ${givenLength}`
        ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
      }
    }, AbiEncodingBytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${size(value)}) does not match expected size (bytes${expectedSize}).`, { name: "AbiEncodingBytesSizeMismatchError" });
      }
    }, AbiEncodingLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength }) {
        super([
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${expectedLength}`,
          `Given length (values): ${givenLength}`
        ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
      }
    }, BytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, givenSize }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
          name: "BytesSizeMismatchError"
        });
      }
    }, InvalidAbiEncodingTypeError = class extends BaseError {
      constructor(type, { docsPath }) {
        super([
          `Type "${type}" is not a valid encoding type.`,
          "Please provide a valid ABI type."
        ].join(`
`), { docsPath, name: "InvalidAbiEncodingType" });
      }
    }, InvalidArrayError = class extends BaseError {
      constructor(value) {
        super([`Value "${value}" is not a valid array.`].join(`
`), {
          name: "InvalidArrayError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/errors/data.js
var SliceOffsetOutOfBoundsError, SizeExceedsPaddingSizeError, init_data = __esm({
  "node_modules/viem/_esm/errors/data.js"() {
    init_base();
    SliceOffsetOutOfBoundsError = class extends BaseError {
      constructor({ offset, position, size: size2 }) {
        super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size2}).`, { name: "SliceOffsetOutOfBoundsError" });
      }
    }, SizeExceedsPaddingSizeError = class extends BaseError {
      constructor({ size: size2, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
      }
    };
  }
});

// node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size2 = 32 } = {}) {
  return typeof hexOrBytes == "string" ? padHex(hexOrBytes, { dir, size: size2 }) : padBytes(hexOrBytes, { dir, size: size2 });
}
function padHex(hex_, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return hex_;
  let hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return bytes;
  if (bytes.length > size2)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size2,
      type: "bytes"
    });
  let paddedBytes = new Uint8Array(size2);
  for (let i = 0; i < size2; i++) {
    let padEnd = dir === "right";
    paddedBytes[padEnd ? i : size2 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}
var init_pad = __esm({
  "node_modules/viem/_esm/utils/data/pad.js"() {
    init_data();
  }
});

// node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, SizeOverflowError, init_encoding = __esm({
  "node_modules/viem/_esm/errors/encoding.js"() {
    init_base();
    IntegerOutOfRangeError = class extends BaseError {
      constructor({ max, min, signed, size: size2, value }) {
        super(`Number "${value}" is not in safe ${size2 ? `${size2 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
      }
    }, SizeOverflowError = class extends BaseError {
      constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
      }
    };
  }
});

// node_modules/viem/_esm/utils/data/trim.js
function trim(hexOrBytes, { dir = "left" } = {}) {
  let data = typeof hexOrBytes == "string" ? hexOrBytes.replace("0x", "") : hexOrBytes, sliceLength = 0;
  for (let i = 0; i < data.length - 1 && data[dir === "left" ? i : data.length - i - 1].toString() === "0"; i++)
    sliceLength++;
  return data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength), typeof hexOrBytes == "string" ? (data.length === 1 && dir === "right" && (data = `${data}0`), `0x${data.length % 2 === 1 ? `0${data}` : data}`) : data;
}
var init_trim = __esm({
  "node_modules/viem/_esm/utils/data/trim.js"() {
  }
});

// node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size2 }) {
  if (size(hexOrBytes) > size2)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size2
    });
}
function hexToBigInt(hex, opts = {}) {
  let { signed } = opts;
  opts.size && assertSize(hex, { size: opts.size });
  let value = BigInt(hex);
  if (!signed)
    return value;
  let size2 = Math.ceil((hex.length - 2) / 2), max = (1n << BigInt(size2) * 8n - 1n) - 1n;
  return value <= max ? value : value - BigInt(`0x${"f".padStart(size2 * 2, "f")}`) - 1n;
}
function hexToNumber(hex, opts = {}) {
  let value = hexToBigInt(hex, opts), number = Number(value);
  if (!Number.isSafeInteger(number))
    throw new IntegerOutOfRangeError({
      max: `${Number.MAX_SAFE_INTEGER}`,
      min: `${Number.MIN_SAFE_INTEGER}`,
      signed: opts.signed,
      size: opts.size,
      value: `${value}n`
    });
  return number;
}
var init_fromHex = __esm({
  "node_modules/viem/_esm/utils/encoding/fromHex.js"() {
    init_encoding();
    init_size();
  }
});

// node_modules/viem/_esm/utils/encoding/toHex.js
function toHex(value, opts = {}) {
  return typeof value == "number" || typeof value == "bigint" ? numberToHex(value, opts) : typeof value == "string" ? stringToHex(value, opts) : typeof value == "boolean" ? boolToHex(value, opts) : bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  let hex = `0x${Number(value)}`;
  return typeof opts.size == "number" ? (assertSize(hex, { size: opts.size }), pad(hex, { size: opts.size })) : hex;
}
function bytesToHex(value, opts = {}) {
  let string = "";
  for (let i = 0; i < value.length; i++)
    string += hexes[value[i]];
  let hex = `0x${string}`;
  return typeof opts.size == "number" ? (assertSize(hex, { size: opts.size }), pad(hex, { dir: "right", size: opts.size })) : hex;
}
function numberToHex(value_, opts = {}) {
  let { signed, size: size2 } = opts, value = BigInt(value_), maxValue;
  size2 ? signed ? maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n : maxValue = 2n ** (BigInt(size2) * 8n) - 1n : typeof value_ == "number" && (maxValue = BigInt(Number.MAX_SAFE_INTEGER));
  let minValue = typeof maxValue == "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    let suffix = typeof value_ == "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value_}${suffix}`
    });
  }
  let hex = `0x${(signed && value < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value) : value).toString(16)}`;
  return size2 ? pad(hex, { size: size2 }) : hex;
}
function stringToHex(value_, opts = {}) {
  let value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder, init_toHex = __esm({
  "node_modules/viem/_esm/utils/encoding/toHex.js"() {
    init_encoding();
    init_pad();
    init_fromHex();
    hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
    encoder = /* @__PURE__ */ new TextEncoder();
  }
});

// node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  return typeof value == "number" || typeof value == "bigint" ? numberToBytes(value, opts) : typeof value == "boolean" ? boolToBytes(value, opts) : isHex(value) ? hexToBytes(value, opts) : stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  let bytes = new Uint8Array(1);
  return bytes[0] = Number(value), typeof opts.size == "number" ? (assertSize(bytes, { size: opts.size }), pad(bytes, { size: opts.size })) : bytes;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  opts.size && (assertSize(hex, { size: opts.size }), hex = pad(hex, { dir: "right", size: opts.size }));
  let hexString = hex.slice(2);
  hexString.length % 2 && (hexString = `0${hexString}`);
  let length = hexString.length / 2, bytes = new Uint8Array(length);
  for (let index2 = 0, j = 0; index2 < length; index2++) {
    let nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++)), nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0)
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    bytes[index2] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function numberToBytes(value, opts) {
  let hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  let bytes = encoder2.encode(value);
  return typeof opts.size == "number" ? (assertSize(bytes, { size: opts.size }), pad(bytes, { dir: "right", size: opts.size })) : bytes;
}
var encoder2, charCodeMap, init_toBytes = __esm({
  "node_modules/viem/_esm/utils/encoding/toBytes.js"() {
    init_base();
    init_isHex();
    init_pad();
    init_fromHex();
    init_toHex();
    encoder2 = /* @__PURE__ */ new TextEncoder();
    charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
  }
});

// node_modules/@noble/hashes/esm/_u64.js
function fromBig(n, le = !1) {
  return le ? { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) } : { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = !1) {
  let len = lst.length, Ah = new Uint32Array(len), Al = new Uint32Array(len);
  for (let i = 0; i < len; i++) {
    let { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL, init_u64 = __esm({
  "node_modules/@noble/hashes/esm/_u64.js"() {
    U32_MASK64 = /* @__PURE__ */ BigInt(4294967295), _32n = /* @__PURE__ */ BigInt(32);
    rotlSH = (h, l, s) => h << s | l >>> 32 - s, rotlSL = (h, l, s) => l << s | h >>> 32 - s, rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s, rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  }
});

// node_modules/@noble/hashes/esm/cryptoNode.js
import * as nc from "node:crypto";
var crypto2, init_cryptoNode = __esm({
  "node_modules/@noble/hashes/esm/cryptoNode.js"() {
    crypto2 = nc && typeof nc == "object" && "webcrypto" in nc ? nc.webcrypto : nc && typeof nc == "object" && "randomBytes" in nc ? nc : void 0;
  }
});

// node_modules/@noble/hashes/esm/utils.js
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function abytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function ahash(h) {
  if (typeof h != "function" || typeof h.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  anumber(h.outputLen), anumber(h.blockLen);
}
function aexists(instance, checkFinished = !0) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  let min = instance.outputLen;
  if (out.length < min)
    throw new Error("digestInto() expects output buffer of length at least " + min);
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++)
    arrays[i].fill(0);
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++)
    arr[i] = byteSwap(arr[i]);
  return arr;
}
function utf8ToBytes(str) {
  if (typeof str != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  return typeof data == "string" && (data = utf8ToBytes(data)), abytes(data), data;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    let a = arrays[i];
    abytes(a), sum += a.length;
  }
  let res = new Uint8Array(sum);
  for (let i = 0, pad2 = 0; i < arrays.length; i++) {
    let a = arrays[i];
    res.set(a, pad2), pad2 += a.length;
  }
  return res;
}
function createHasher(hashCons) {
  let hashC = (msg) => hashCons().update(toBytes2(msg)).digest(), tmp = hashCons();
  return hashC.outputLen = tmp.outputLen, hashC.blockLen = tmp.blockLen, hashC.create = () => hashCons(), hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto2 && typeof crypto2.getRandomValues == "function")
    return crypto2.getRandomValues(new Uint8Array(bytesLength));
  if (crypto2 && typeof crypto2.randomBytes == "function")
    return Uint8Array.from(crypto2.randomBytes(bytesLength));
  throw new Error("crypto.getRandomValues must be defined");
}
var isLE, swap32IfBE, Hash, init_utils = __esm({
  "node_modules/@noble/hashes/esm/utils.js"() {
    init_cryptoNode();
    isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    swap32IfBE = isLE ? (u) => u : byteSwap32;
    Hash = class {
    };
  }
});

// node_modules/@noble/hashes/esm/sha3.js
function keccakP(s, rounds = 24) {
  let B = new Uint32Array(10);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      let idx1 = (x + 8) % 10, idx0 = (x + 2) % 10, B0 = B[idx0], B1 = B[idx0 + 1], Th = rotlH(B0, B1, 1) ^ B[idx1], Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10)
        s[x + y] ^= Th, s[x + y + 1] ^= Tl;
    }
    let curH = s[2], curL = s[3];
    for (let t = 0; t < 24; t++) {
      let shift = SHA3_ROTL[t], Th = rotlH(curH, curL, shift), Tl = rotlL(curH, curL, shift), PI = SHA3_PI[t];
      curH = s[PI], curL = s[PI + 1], s[PI] = Th, s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round], s[1] ^= SHA3_IOTA_L[round];
  }
  clean(B);
}
var _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_PI, SHA3_ROTL, _SHA3_IOTA, IOTAS, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, keccak_256, init_sha3 = __esm({
  "node_modules/@noble/hashes/esm/sha3.js"() {
    init_u64();
    init_utils();
    _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _7n = BigInt(7), _256n = BigInt(256), _0x71n = BigInt(113), SHA3_PI = [], SHA3_ROTL = [], _SHA3_IOTA = [];
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5], SHA3_PI.push(2 * (5 * y + x)), SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++)
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n, R & _2n && (t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n);
      _SHA3_IOTA.push(t);
    }
    IOTAS = split(_SHA3_IOTA, !0), SHA3_IOTA_H = IOTAS[0], SHA3_IOTA_L = IOTAS[1], rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s), rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
    Keccak = class _Keccak extends Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = !1, rounds = 24) {
        if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = blockLen, this.suffix = suffix, this.outputLen = outputLen, this.enableXOF = enableXOF, this.rounds = rounds, anumber(outputLen), !(0 < blockLen && blockLen < 200))
          throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200), this.state32 = u32(this.state);
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        swap32IfBE(this.state32), keccakP(this.state32, this.rounds), swap32IfBE(this.state32), this.posOut = 0, this.pos = 0;
      }
      update(data) {
        aexists(this), data = toBytes2(data), abytes(data);
        let { blockLen, state } = this, len = data.length;
        for (let pos = 0; pos < len; ) {
          let take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          this.pos === blockLen && this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = !0;
        let { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix, (suffix & 128) !== 0 && pos === blockLen - 1 && this.keccak(), state[blockLen - 1] ^= 128, this.keccak();
      }
      writeInto(out) {
        aexists(this, !1), abytes(out), this.finish();
        let bufferOut = this.state, { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          this.posOut >= blockLen && this.keccak();
          let take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos), this.posOut += take, pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        return anumber(bytes), this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        if (aoutput(out, this), this.finished)
          throw new Error("digest() was already called");
        return this.writeInto(out), this.destroy(), out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = !0, clean(this.state);
      }
      _cloneInto(to) {
        let { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        return to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds)), to.state32.set(this.state32), to.pos = this.pos, to.posOut = this.posOut, to.finished = this.finished, to.rounds = rounds, to.suffix = suffix, to.outputLen = outputLen, to.enableXOF = enableXOF, to.destroyed = this.destroyed, to;
      }
    }, gen = (suffix, blockLen, outputLen) => createHasher(() => new Keccak(blockLen, suffix, outputLen)), keccak_256 = gen(1, 136, 256 / 8);
  }
});

// node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  let to = to_ || "hex", bytes = keccak_256(isHex(value, { strict: !1 }) ? toBytes(value) : value);
  return to === "bytes" ? bytes : toHex(bytes);
}
var init_keccak256 = __esm({
  "node_modules/viem/_esm/utils/hash/keccak256.js"() {
    init_sha3();
    init_isHex();
    init_toBytes();
    init_toHex();
  }
});

// node_modules/viem/_esm/errors/address.js
var InvalidAddressError, init_address = __esm({
  "node_modules/viem/_esm/errors/address.js"() {
    init_base();
    InvalidAddressError = class extends BaseError {
      constructor({ address }) {
        super(`Address "${address}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart."
          ],
          name: "InvalidAddressError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/lru.js
var LruMap, init_lru = __esm({
  "node_modules/viem/_esm/utils/lru.js"() {
    LruMap = class extends Map {
      constructor(size2) {
        super(), Object.defineProperty(this, "maxSize", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), this.maxSize = size2;
      }
      get(key2) {
        let value = super.get(key2);
        return super.has(key2) && (super.delete(key2), super.set(key2, value)), value;
      }
      set(key2, value) {
        if (super.has(key2) && super.delete(key2), super.set(key2, value), this.maxSize && this.size > this.maxSize) {
          let firstKey = super.keys().next().value;
          firstKey !== void 0 && super.delete(firstKey);
        }
        return this;
      }
    };
  }
});

// node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  if (checksumAddressCache.has(`${address_}.${chainId}`))
    return checksumAddressCache.get(`${address_}.${chainId}`);
  let hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase(), hash = keccak256(stringToBytes(hexAddress), "bytes"), address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i = 0; i < 40; i += 2)
    hash[i >> 1] >> 4 >= 8 && address[i] && (address[i] = address[i].toUpperCase()), (hash[i >> 1] & 15) >= 8 && address[i + 1] && (address[i + 1] = address[i + 1].toUpperCase());
  let result2 = `0x${address.join("")}`;
  return checksumAddressCache.set(`${address_}.${chainId}`, result2), result2;
}
function getAddress(address, chainId) {
  if (!isAddress(address, { strict: !1 }))
    throw new InvalidAddressError({ address });
  return checksumAddress(address, chainId);
}
var checksumAddressCache, init_getAddress = __esm({
  "node_modules/viem/_esm/utils/address/getAddress.js"() {
    init_address();
    init_toBytes();
    init_keccak256();
    init_lru();
    init_isAddress();
    checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// node_modules/viem/_esm/utils/address/isAddress.js
function isAddress(address, options) {
  let { strict = !0 } = options ?? {}, cacheKey = `${address}.${strict}`;
  if (isAddressCache.has(cacheKey))
    return isAddressCache.get(cacheKey);
  let result2 = addressRegex.test(address) ? address.toLowerCase() === address ? !0 : strict ? checksumAddress(address) === address : !0 : !1;
  return isAddressCache.set(cacheKey, result2), result2;
}
var addressRegex, isAddressCache, init_isAddress = __esm({
  "node_modules/viem/_esm/utils/address/isAddress.js"() {
    init_lru();
    init_getAddress();
    addressRegex = /^0x[a-fA-F0-9]{40}$/, isAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// node_modules/viem/_esm/utils/data/concat.js
function concat(values) {
  return typeof values[0] == "string" ? concatHex(values) : concatBytes2(values);
}
function concatBytes2(values) {
  let length = 0;
  for (let arr of values)
    length += arr.length;
  let result2 = new Uint8Array(length), offset = 0;
  for (let arr of values)
    result2.set(arr, offset), offset += arr.length;
  return result2;
}
function concatHex(values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
var init_concat = __esm({
  "node_modules/viem/_esm/utils/data/concat.js"() {
  }
});

// node_modules/viem/_esm/utils/data/slice.js
function slice(value, start, end, { strict } = {}) {
  return isHex(value, { strict: !1 }) ? sliceHex(value, start, end, {
    strict
  }) : sliceBytes(value, start, end, {
    strict
  });
}
function assertStartOffset(value, start) {
  if (typeof start == "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start == "number" && typeof end == "number" && size(value) !== end - start)
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
}
function sliceBytes(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  let value = value_.slice(start, end);
  return strict && assertEndOffset(value, start, end), value;
}
function sliceHex(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  let value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
  return strict && assertEndOffset(value, start, end), value;
}
var init_slice = __esm({
  "node_modules/viem/_esm/utils/data/slice.js"() {
    init_data();
    init_isHex();
    init_size();
  }
});

// node_modules/viem/_esm/utils/regex.js
var bytesRegex, integerRegex, init_regex = __esm({
  "node_modules/viem/_esm/utils/regex.js"() {
    bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
  }
});

// node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
function encodeAbiParameters(params, values) {
  if (params.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: params.length,
      givenLength: values.length
    });
  let preparedParams = prepareParams({
    params,
    values
  });
  return encodeParams(preparedParams);
}
function prepareParams({ params, values }) {
  let preparedParams = [];
  for (let i = 0; i < params.length; i++)
    preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
  return preparedParams;
}
function prepareParam({ param, value }) {
  let arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    let [length, type] = arrayComponents;
    return encodeArray(value, { length, param: { ...param, type } });
  }
  if (param.type === "tuple")
    return encodeTuple(value, {
      param
    });
  if (param.type === "address")
    return encodeAddress(value);
  if (param.type === "bool")
    return encodeBool(value);
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    let signed = param.type.startsWith("int"), [, , size2 = "256"] = integerRegex.exec(param.type) ?? [];
    return encodeNumber(value, {
      signed,
      size: Number(size2)
    });
  }
  if (param.type.startsWith("bytes"))
    return encodeBytes(value, { param });
  if (param.type === "string")
    return encodeString(value);
  throw new InvalidAbiEncodingTypeError(param.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function encodeParams(preparedParams) {
  let staticSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    let { dynamic, encoded } = preparedParams[i];
    dynamic ? staticSize += 32 : staticSize += size(encoded);
  }
  let staticParams = [], dynamicParams = [], dynamicSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    let { dynamic, encoded } = preparedParams[i];
    dynamic ? (staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 })), dynamicParams.push(encoded), dynamicSize += size(encoded)) : staticParams.push(encoded);
  }
  return concatHex([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
  if (!isAddress(value))
    throw new InvalidAddressError({ address: value });
  return { dynamic: !1, encoded: padHex(value.toLowerCase()) };
}
function encodeArray(value, { length, param }) {
  let dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new AbiEncodingArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${param.type}[${length}]`
    });
  let dynamicChild = value.length === 0 && isDynamicType(param), preparedParams = [];
  for (let i = 0; i < value.length; i++) {
    let preparedParam = prepareParam({ param, value: value[i] });
    preparedParam.dynamic && (dynamicChild = !0), preparedParams.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    let data = encodeParams(preparedParams);
    if (dynamic) {
      let length2 = numberToHex(preparedParams.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: concatHex([length2, data])
      };
    }
    if (dynamicChild)
      return { dynamic: !0, encoded: data };
  }
  return {
    dynamic: !1,
    encoded: concatHex(preparedParams.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { param }) {
  let [, paramSize] = param.type.split("bytes"), bytesSize = size(value);
  if (!paramSize) {
    let value_ = value;
    return bytesSize % 32 !== 0 && (value_ = padHex(value_, {
      dir: "right",
      size: Math.ceil((value.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: concatHex([
        padHex(numberToHex(bytesSize, { size: 32 })),
        value_
      ])
    };
  }
  if (bytesSize !== Number.parseInt(paramSize, 10))
    throw new AbiEncodingBytesSizeMismatchError({
      expectedSize: Number.parseInt(paramSize, 10),
      value
    });
  return { dynamic: !1, encoded: padHex(value, { dir: "right" }) };
}
function encodeBool(value) {
  if (typeof value != "boolean")
    throw new BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: padHex(boolToHex(value)) };
}
function encodeNumber(value, { signed, size: size2 = 256 }) {
  if (typeof size2 == "number") {
    let max = 2n ** (BigInt(size2) - (signed ? 1n : 0n)) - 1n, min = signed ? -max - 1n : 0n;
    if (value > max || value < min)
      throw new IntegerOutOfRangeError({
        max: max.toString(),
        min: min.toString(),
        signed,
        size: size2 / 8,
        value: value.toString()
      });
  }
  return {
    dynamic: !1,
    encoded: numberToHex(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  let hexValue = stringToHex(value), partsLength = Math.ceil(size(hexValue) / 32), parts = [];
  for (let i = 0; i < partsLength; i++)
    parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: concatHex([
      padHex(numberToHex(size(hexValue), { size: 32 })),
      ...parts
    ])
  };
}
function encodeTuple(value, { param }) {
  let dynamic = !1, preparedParams = [];
  for (let i = 0; i < param.components.length; i++) {
    let param_ = param.components[i], index2 = Array.isArray(value) ? i : param_.name, preparedParam = prepareParam({
      param: param_,
      value: value[index2]
    });
    preparedParams.push(preparedParam), preparedParam.dynamic && (dynamic = !0);
  }
  return {
    dynamic,
    encoded: dynamic ? encodeParams(preparedParams) : concatHex(preparedParams.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  let matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
function isDynamicType(param) {
  let { type } = param;
  if (type === "string" || type === "bytes" || type.endsWith("[]"))
    return !0;
  if (type === "tuple")
    return param.components.some(isDynamicType);
  let arrayComponents = getArrayComponents(type);
  return arrayComponents ? isDynamicType({ ...param, type: arrayComponents[1] }) : !1;
}
var init_encodeAbiParameters = __esm({
  "node_modules/viem/_esm/utils/abi/encodeAbiParameters.js"() {
    init_abi();
    init_address();
    init_base();
    init_encoding();
    init_isAddress();
    init_concat();
    init_pad();
    init_size();
    init_slice();
    init_toHex();
    init_regex();
  }
});

// node_modules/viem/_esm/errors/cursor.js
var NegativeOffsetError, PositionOutOfBoundsError, RecursiveReadLimitExceededError, init_cursor = __esm({
  "node_modules/viem/_esm/errors/cursor.js"() {
    init_base();
    NegativeOffsetError = class extends BaseError {
      constructor({ offset }) {
        super(`Offset \`${offset}\` cannot be negative.`, {
          name: "NegativeOffsetError"
        });
      }
    }, PositionOutOfBoundsError = class extends BaseError {
      constructor({ length, position }) {
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, { name: "PositionOutOfBoundsError" });
      }
    }, RecursiveReadLimitExceededError = class extends BaseError {
      constructor({ count, limit }) {
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, { name: "RecursiveReadLimitExceededError" });
      }
    };
  }
});

// node_modules/viem/_esm/utils/cursor.js
function createCursor(bytes, { recursiveReadLimit = 8192 } = {}) {
  let cursor = Object.create(staticCursor);
  return cursor.bytes = bytes, cursor.dataView = new DataView(bytes.buffer ?? bytes, bytes.byteOffset, bytes.byteLength), cursor.positionReadCount = /* @__PURE__ */ new Map(), cursor.recursiveReadLimit = recursiveReadLimit, cursor;
}
var staticCursor, init_cursor2 = __esm({
  "node_modules/viem/_esm/utils/cursor.js"() {
    init_cursor();
    staticCursor = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: /* @__PURE__ */ new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: Number.POSITIVE_INFINITY,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
          });
      },
      assertPosition(position) {
        if (position < 0 || position > this.bytes.length - 1)
          throw new PositionOutOfBoundsError({
            length: this.bytes.length,
            position
          });
      },
      decrementPosition(offset) {
        if (offset < 0)
          throw new NegativeOffsetError({ offset });
        let position = this.position - offset;
        this.assertPosition(position), this.position = position;
      },
      getReadCount(position) {
        return this.positionReadCount.get(position || this.position) || 0;
      },
      incrementPosition(offset) {
        if (offset < 0)
          throw new NegativeOffsetError({ offset });
        let position = this.position + offset;
        this.assertPosition(position), this.position = position;
      },
      inspectByte(position_) {
        let position = position_ ?? this.position;
        return this.assertPosition(position), this.bytes[position];
      },
      inspectBytes(length, position_) {
        let position = position_ ?? this.position;
        return this.assertPosition(position + length - 1), this.bytes.subarray(position, position + length);
      },
      inspectUint8(position_) {
        let position = position_ ?? this.position;
        return this.assertPosition(position), this.bytes[position];
      },
      inspectUint16(position_) {
        let position = position_ ?? this.position;
        return this.assertPosition(position + 1), this.dataView.getUint16(position);
      },
      inspectUint24(position_) {
        let position = position_ ?? this.position;
        return this.assertPosition(position + 2), (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
      },
      inspectUint32(position_) {
        let position = position_ ?? this.position;
        return this.assertPosition(position + 3), this.dataView.getUint32(position);
      },
      pushByte(byte) {
        this.assertPosition(this.position), this.bytes[this.position] = byte, this.position++;
      },
      pushBytes(bytes) {
        this.assertPosition(this.position + bytes.length - 1), this.bytes.set(bytes, this.position), this.position += bytes.length;
      },
      pushUint8(value) {
        this.assertPosition(this.position), this.bytes[this.position] = value, this.position++;
      },
      pushUint16(value) {
        this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, value), this.position += 2;
      },
      pushUint24(value) {
        this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, value >> 8), this.dataView.setUint8(this.position + 2, value & 255), this.position += 3;
      },
      pushUint32(value) {
        this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, value), this.position += 4;
      },
      readByte() {
        this.assertReadLimit(), this._touch();
        let value = this.inspectByte();
        return this.position++, value;
      },
      readBytes(length, size2) {
        this.assertReadLimit(), this._touch();
        let value = this.inspectBytes(length);
        return this.position += size2 ?? length, value;
      },
      readUint8() {
        this.assertReadLimit(), this._touch();
        let value = this.inspectUint8();
        return this.position += 1, value;
      },
      readUint16() {
        this.assertReadLimit(), this._touch();
        let value = this.inspectUint16();
        return this.position += 2, value;
      },
      readUint24() {
        this.assertReadLimit(), this._touch();
        let value = this.inspectUint24();
        return this.position += 3, value;
      },
      readUint32() {
        this.assertReadLimit(), this._touch();
        let value = this.inspectUint32();
        return this.position += 4, value;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(position) {
        let oldPosition = this.position;
        return this.assertPosition(position), this.position = position, () => this.position = oldPosition;
      },
      _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
          return;
        let count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1), count > 0 && this.recursiveReadCount++;
      }
    };
  }
});

// node_modules/viem/_esm/utils/stringify.js
var stringify, init_stringify = __esm({
  "node_modules/viem/_esm/utils/stringify.js"() {
    stringify = (value, replacer, space) => JSON.stringify(value, (key2, value_) => {
      let value2 = typeof value_ == "bigint" ? value_.toString() : value_;
      return typeof replacer == "function" ? replacer(key2, value2) : value2;
    }, space);
  }
});

// node_modules/viem/_esm/utils/unit/Value.js
function format(value, decimals = 0) {
  if (!Number.isInteger(decimals) || decimals < 0)
    throw new InvalidDecimalsError({ decimals });
  let display = value.toString(), negative = display.startsWith("-");
  negative && (display = display.slice(1)), display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  return fraction = fraction.replace(/(0+)$/, ""), `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
function formatGwei(wei, unit = "wei") {
  return format(wei, exponents.gwei - exponents[unit]);
}
function from(value, decimals = 0) {
  if (!Number.isInteger(decimals) || decimals < 0)
    throw new InvalidDecimalsError({ decimals });
  if (!/^-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/.test(value))
    throw new InvalidDecimalNumberError({ value });
  let [integer = "", fraction = "0"] = value.split("."), negative = integer.startsWith("-");
  if (negative && (integer = integer.slice(1)), integer === "" && (integer = "0"), fraction = fraction.replace(/(0+)$/, ""), decimals === 0)
    fraction.length > 0 && Number.parseInt(fraction[0], 10) >= 5 && (integer = `${BigInt(integer) + 1n}`), fraction = "";
  else if (fraction.length > decimals) {
    let left = fraction.slice(0, decimals);
    if (Number.parseInt(fraction.slice(decimals, decimals + 1), 10) >= 5) {
      let carried = carry(left);
      carried.length > decimals ? (fraction = carried.slice(1), integer = `${BigInt(integer) + 1n}`) : fraction = carried;
    } else
      fraction = left;
  } else
    fraction = fraction.padEnd(decimals, "0");
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}
function carry(digits) {
  let out = digits.split(""), i = out.length - 1;
  for (; i >= 0; ) {
    let d = Number.parseInt(out[i], 10) + 1;
    if (d < 10)
      return out[i] = String(d), out.join("");
    out[i] = "0", i--;
  }
  return `1${out.join("")}`;
}
var exponents, InvalidDecimalNumberError, InvalidDecimalsError, init_Value = __esm({
  "node_modules/viem/_esm/utils/unit/Value.js"() {
    exponents = {
      wei: 0,
      gwei: 9,
      szabo: 12,
      finney: 15,
      ether: 18
    };
    InvalidDecimalNumberError = class extends Error {
      constructor({ value }) {
        super(`Value \`${value}\` is not a valid decimal number.`), Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Value.InvalidDecimalNumberError"
        });
      }
    }, InvalidDecimalsError = class extends Error {
      constructor({ decimals }) {
        super(`\`decimals\` must be a non-negative integer. Got \`${decimals}\`.`), Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Value.InvalidDecimalsError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/unit/formatGwei.js
function formatGwei2(wei, unit = "wei") {
  return formatGwei(wei, unit);
}
var init_formatGwei = __esm({
  "node_modules/viem/_esm/utils/unit/formatGwei.js"() {
    init_Value();
  }
});

// node_modules/viem/_esm/errors/transaction.js
function prettyPrint(args) {
  let entries = Object.entries(args).map(([key2, value]) => value === void 0 || value === !1 ? null : [key2, value]).filter(Boolean), maxLength = entries.reduce((acc, [key2]) => Math.max(acc, key2.length), 0);
  return entries.map(([key2, value]) => `  ${`${key2}:`.padEnd(maxLength + 1)}  ${value}`).join(`
`);
}
var InvalidLegacyVError, InvalidSerializableTransactionError, InvalidStorageKeySizeError, init_transaction = __esm({
  "node_modules/viem/_esm/errors/transaction.js"() {
    init_base();
    InvalidLegacyVError = class extends BaseError {
      constructor({ v }) {
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
          name: "InvalidLegacyVError"
        });
      }
    }, InvalidSerializableTransactionError = class extends BaseError {
      constructor({ transaction }) {
        super("Cannot infer a transaction type from provided transaction.", {
          metaMessages: [
            "Provided Transaction:",
            "{",
            prettyPrint(transaction),
            "}",
            "",
            "To infer the type, either provide:",
            "- a `type` to the Transaction, or",
            "- an EIP-1559 Transaction with `maxFeePerGas`, or",
            "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
            "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
            "- an EIP-7702 Transaction with `authorizationList`, or",
            "- a Legacy Transaction with `gasPrice`"
          ],
          name: "InvalidSerializableTransactionError"
        });
      }
    }, InvalidStorageKeySizeError = class extends BaseError {
      constructor({ storageKey }) {
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
      }
    };
  }
});

// node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 == "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  let _32n2 = BigInt(32), _u32_max = BigInt(4294967295), wh = Number(value >> _32n2 & _u32_max), wl = Number(value & _u32_max), h = isLE2 ? 4 : 0, l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2), view.setUint32(byteOffset + l, wl, isLE2);
}
function Chi(a, b, c) {
  return a & b ^ ~a & c;
}
function Maj(a, b, c) {
  return a & b ^ a & c ^ b & c;
}
var HashMD, SHA256_IV, init_md = __esm({
  "node_modules/@noble/hashes/esm/_md.js"() {
    init_utils();
    HashMD = class extends Hash {
      constructor(blockLen, outputLen, padOffset, isLE2) {
        super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = blockLen, this.outputLen = outputLen, this.padOffset = padOffset, this.isLE = isLE2, this.buffer = new Uint8Array(blockLen), this.view = createView(this.buffer);
      }
      update(data) {
        aexists(this), data = toBytes2(data), abytes(data);
        let { view, buffer: buffer2, blockLen } = this, len = data.length;
        for (let pos = 0; pos < len; ) {
          let take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            let dataView = createView(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer2.set(data.subarray(pos, pos + take), this.pos), this.pos += take, pos += take, this.pos === blockLen && (this.process(view, 0), this.pos = 0);
        }
        return this.length += data.length, this.roundClean(), this;
      }
      digestInto(out) {
        aexists(this), aoutput(out, this), this.finished = !0;
        let { buffer: buffer2, view, blockLen, isLE: isLE2 } = this, { pos } = this;
        buffer2[pos++] = 128, clean(this.buffer.subarray(pos)), this.padOffset > blockLen - pos && (this.process(view, 0), pos = 0);
        for (let i = pos; i < blockLen; i++)
          buffer2[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2), this.process(view, 0);
        let oview = createView(out), len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        let outLen = len / 4, state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i = 0; i < outLen; i++)
          oview.setUint32(4 * i, state[i], isLE2);
      }
      digest() {
        let { buffer: buffer2, outputLen } = this;
        this.digestInto(buffer2);
        let res = buffer2.slice(0, outputLen);
        return this.destroy(), res;
      }
      _cloneInto(to) {
        to || (to = new this.constructor()), to.set(...this.get());
        let { blockLen, buffer: buffer2, length, finished, destroyed, pos } = this;
        return to.destroyed = destroyed, to.finished = finished, to.length = length, to.pos = pos, length % blockLen && to.buffer.set(buffer2), to;
      }
      clone() {
        return this._cloneInto();
      }
    }, SHA256_IV = /* @__PURE__ */ Uint32Array.from([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
  }
});

// node_modules/@noble/hashes/esm/sha2.js
var SHA256_K, SHA256_W, SHA256, sha256, init_sha2 = __esm({
  "node_modules/@noble/hashes/esm/sha2.js"() {
    init_md();
    init_utils();
    SHA256_K = /* @__PURE__ */ Uint32Array.from([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]), SHA256_W = /* @__PURE__ */ new Uint32Array(64), SHA256 = class extends HashMD {
      constructor(outputLen = 32) {
        super(64, outputLen, 8, !1), this.A = SHA256_IV[0] | 0, this.B = SHA256_IV[1] | 0, this.C = SHA256_IV[2] | 0, this.D = SHA256_IV[3] | 0, this.E = SHA256_IV[4] | 0, this.F = SHA256_IV[5] | 0, this.G = SHA256_IV[6] | 0, this.H = SHA256_IV[7] | 0;
      }
      get() {
        let { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
      }
      // prettier-ignore
      set(A, B, C, D, E, F, G, H) {
        this.A = A | 0, this.B = B | 0, this.C = C | 0, this.D = D | 0, this.E = E | 0, this.F = F | 0, this.G = G | 0, this.H = H | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
          SHA256_W[i] = view.getUint32(offset, !1);
        for (let i = 16; i < 64; i++) {
          let W15 = SHA256_W[i - 15], W2 = SHA256_W[i - 2], s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3, s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
          SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
          let sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25), T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0, T2 = (rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22)) + Maj(A, B, C) | 0;
          H = G, G = F, F = E, E = D + T1 | 0, D = C, C = B, B = A, A = T1 + T2 | 0;
        }
        A = A + this.A | 0, B = B + this.B | 0, C = C + this.C | 0, D = D + this.D | 0, E = E + this.E | 0, F = F + this.F | 0, G = G + this.G | 0, H = H + this.H | 0, this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
        clean(SHA256_W);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), clean(this.buffer);
      }
    }, sha256 = /* @__PURE__ */ createHasher(() => new SHA256());
  }
});

// node_modules/@noble/hashes/esm/hmac.js
var HMAC, hmac, init_hmac = __esm({
  "node_modules/@noble/hashes/esm/hmac.js"() {
    init_utils();
    HMAC = class extends Hash {
      constructor(hash, _key) {
        super(), this.finished = !1, this.destroyed = !1, ahash(hash);
        let key2 = toBytes2(_key);
        if (this.iHash = hash.create(), typeof this.iHash.update != "function")
          throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        let blockLen = this.blockLen, pad2 = new Uint8Array(blockLen);
        pad2.set(key2.length > blockLen ? hash.create().update(key2).digest() : key2);
        for (let i = 0; i < pad2.length; i++)
          pad2[i] ^= 54;
        this.iHash.update(pad2), this.oHash = hash.create();
        for (let i = 0; i < pad2.length; i++)
          pad2[i] ^= 106;
        this.oHash.update(pad2), clean(pad2);
      }
      update(buf) {
        return aexists(this), this.iHash.update(buf), this;
      }
      digestInto(out) {
        aexists(this), abytes(out, this.outputLen), this.finished = !0, this.iHash.digestInto(out), this.oHash.update(out), this.oHash.digestInto(out), this.destroy();
      }
      digest() {
        let out = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(out), out;
      }
      _cloneInto(to) {
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        return to = to, to.finished = finished, to.destroyed = destroyed, to.blockLen = blockLen, to.outputLen = outputLen, to.oHash = oHash._cloneInto(to.oHash), to.iHash = iHash._cloneInto(to.iHash), to;
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
      }
    }, hmac = (hash, key2, message) => new HMAC(hash, key2).update(message).digest();
    hmac.create = (hash, key2) => new HMAC(hash, key2);
  }
});

// node_modules/@noble/curves/esm/abstract/utils.js
function isBytes2(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes2(item) {
  if (!isBytes2(item))
    throw new Error("Uint8Array expected");
}
function abool(title, value) {
  if (typeof value != "boolean")
    throw new Error(title + " boolean expected, got " + value);
}
function numberToHexUnpadded(num2) {
  let hex = num2.toString(16);
  return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber2(hex) {
  if (typeof hex != "string")
    throw new Error("hex string expected, got " + typeof hex);
  return hex === "" ? _0n2 : BigInt("0x" + hex);
}
function bytesToHex2(bytes) {
  if (abytes2(bytes), hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i = 0; i < bytes.length; i++)
    hex += hexes2[bytes[i]];
  return hex;
}
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
}
function hexToBytes2(hex) {
  if (typeof hex != "string")
    throw new Error("hex string expected, got " + typeof hex);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex);
  let hl = hex.length, al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  let array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    let n1 = asciiToBase16(hex.charCodeAt(hi)), n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      let char = hex[hi] + hex[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
function bytesToNumberBE(bytes) {
  return hexToNumber2(bytesToHex2(bytes));
}
function bytesToNumberLE(bytes) {
  return abytes2(bytes), hexToNumber2(bytesToHex2(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
  return hexToBytes2(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex == "string")
    try {
      res = hexToBytes2(hex);
    } catch (e) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
    }
  else if (isBytes2(hex))
    res = Uint8Array.from(hex);
  else
    throw new Error(title + " must be hex string or Uint8Array");
  let len = res.length;
  if (typeof expectedLength == "number" && len !== expectedLength)
    throw new Error(title + " of length " + expectedLength + " expected, got " + len);
  return res;
}
function concatBytes3(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    let a = arrays[i];
    abytes2(a), sum += a.length;
  }
  let res = new Uint8Array(sum);
  for (let i = 0, pad2 = 0; i < arrays.length; i++) {
    let a = arrays[i];
    res.set(a, pad2), pad2 += a.length;
  }
  return res;
}
function utf8ToBytes2(str) {
  if (typeof str != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function inRange(n, min, max) {
  return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
function aInRange(title, n, min, max) {
  if (!inRange(n, min, max))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
function bitLen(n) {
  let len;
  for (len = 0; n > _0n2; n >>= _1n2, len += 1)
    ;
  return len;
}
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen != "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen != "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn != "function")
    throw new Error("hmacFn must be a function");
  let v = u8n(hashLen), k = u8n(hashLen), i = 0, reset = () => {
    v.fill(1), k.fill(0), i = 0;
  }, h = (...b) => hmacFn(k, v, ...b), reseed = (seed = u8n(0)) => {
    k = h(u8fr([0]), seed), v = h(), seed.length !== 0 && (k = h(u8fr([1]), seed), v = h());
  }, gen2 = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0, out = [];
    for (; len < qByteLen; ) {
      v = h();
      let sl = v.slice();
      out.push(sl), len += v.length;
    }
    return concatBytes3(...out);
  };
  return (seed, pred) => {
    reset(), reseed(seed);
    let res;
    for (; !(res = pred(gen2())); )
      reseed();
    return reset(), res;
  };
}
function validateObject(object, validators, optValidators = {}) {
  let checkField = (fieldName, type, isOptional) => {
    let checkVal = validatorFns[type];
    if (typeof checkVal != "function")
      throw new Error("invalid validator function");
    let val = object[fieldName];
    if (!(isOptional && val === void 0) && !checkVal(val, object))
      throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
  };
  for (let [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, !1);
  for (let [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, !0);
  return object;
}
function memoized(fn) {
  let map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    let val = map.get(arg);
    if (val !== void 0)
      return val;
    let computed = fn(arg, ...args);
    return map.set(arg, computed), computed;
  };
}
var _0n2, _1n2, hasHexBuiltin, hexes2, asciis, isPosBig, bitMask, u8n, u8fr, validatorFns, init_utils2 = __esm({
  "node_modules/@noble/curves/esm/abstract/utils.js"() {
    _0n2 = /* @__PURE__ */ BigInt(0), _1n2 = /* @__PURE__ */ BigInt(1);
    hasHexBuiltin = // @ts-ignore
    typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
    isPosBig = (n) => typeof n == "bigint" && _0n2 <= n;
    bitMask = (n) => (_1n2 << BigInt(n)) - _1n2, u8n = (len) => new Uint8Array(len), u8fr = (arr) => Uint8Array.from(arr);
    validatorFns = {
      bigint: (val) => typeof val == "bigint",
      function: (val) => typeof val == "function",
      boolean: (val) => typeof val == "boolean",
      string: (val) => typeof val == "string",
      stringOrUint8Array: (val) => typeof val == "string" || isBytes2(val),
      isSafeInteger: (val) => Number.isSafeInteger(val),
      array: (val) => Array.isArray(val),
      field: (val, object) => object.Fp.isValid(val),
      hash: (val) => typeof val == "function" && Number.isSafeInteger(val.outputLen)
    };
  }
});

// node_modules/@noble/curves/esm/abstract/modular.js
function mod(a, b) {
  let result2 = a % b;
  return result2 >= _0n3 ? result2 : b + result2;
}
function pow2(x, power, modulo) {
  let res = x;
  for (; power-- > _0n3; )
    res *= res, res %= modulo;
  return res;
}
function invert(number, modulo) {
  if (number === _0n3)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n3)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a = mod(number, modulo), b = modulo, x = _0n3, y = _1n3, u = _1n3, v = _0n3;
  for (; a !== _0n3; ) {
    let q = b / a, r = b % a, m = x - u * q, n = y - v * q;
    b = a, a = r, x = u, y = v, u = m, v = n;
  }
  if (b !== _1n3)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function sqrt3mod4(Fp, n) {
  let p1div4 = (Fp.ORDER + _1n3) / _4n, root = Fp.pow(n, p1div4);
  if (!Fp.eql(Fp.sqr(root), n))
    throw new Error("Cannot find square root");
  return root;
}
function sqrt5mod8(Fp, n) {
  let p5div8 = (Fp.ORDER - _5n) / _8n, n2 = Fp.mul(n, _2n2), v = Fp.pow(n2, p5div8), nv = Fp.mul(n, v), i = Fp.mul(Fp.mul(nv, _2n2), v), root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
  if (!Fp.eql(Fp.sqr(root), n))
    throw new Error("Cannot find square root");
  return root;
}
function tonelliShanks(P) {
  if (P < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let Q = P - _1n3, S = 0;
  for (; Q % _2n2 === _0n3; )
    Q /= _2n2, S++;
  let Z = _2n2, _Fp = Field(P);
  for (; FpLegendre(_Fp, Z) === 1; )
    if (Z++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (S === 1)
    return sqrt3mod4;
  let cc = _Fp.pow(Z, Q), Q1div2 = (Q + _1n3) / _2n2;
  return function(Fp, n) {
    if (Fp.is0(n))
      return n;
    if (FpLegendre(Fp, n) !== 1)
      throw new Error("Cannot find square root");
    let M = S, c = Fp.mul(Fp.ONE, cc), t = Fp.pow(n, Q), R = Fp.pow(n, Q1div2);
    for (; !Fp.eql(t, Fp.ONE); ) {
      if (Fp.is0(t))
        return Fp.ZERO;
      let i = 1, t_tmp = Fp.sqr(t);
      for (; !Fp.eql(t_tmp, Fp.ONE); )
        if (i++, t_tmp = Fp.sqr(t_tmp), i === M)
          throw new Error("Cannot find square root");
      let exponent = _1n3 << BigInt(M - i - 1), b = Fp.pow(c, exponent);
      M = i, c = Fp.sqr(b), t = Fp.mul(t, c), R = Fp.mul(R, b);
    }
    return R;
  };
}
function FpSqrt(P) {
  return P % _4n === _3n ? sqrt3mod4 : P % _8n === _5n ? sqrt5mod8 : tonelliShanks(P);
}
function validateField(field) {
  let initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, opts = FIELD_FIELDS.reduce((map, val) => (map[val] = "function", map), initial);
  return validateObject(field, opts);
}
function FpPow(Fp, num2, power) {
  if (power < _0n3)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n3)
    return Fp.ONE;
  if (power === _1n3)
    return num2;
  let p = Fp.ONE, d = num2;
  for (; power > _0n3; )
    power & _1n3 && (p = Fp.mul(p, d)), d = Fp.sqr(d), power >>= _1n3;
  return p;
}
function FpInvertBatch(Fp, nums, passZero = !1) {
  let inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0), multipliedAcc = nums.reduce((acc, num2, i) => Fp.is0(num2) ? acc : (inverted[i] = acc, Fp.mul(acc, num2)), Fp.ONE), invertedAcc = Fp.inv(multipliedAcc);
  return nums.reduceRight((acc, num2, i) => Fp.is0(num2) ? acc : (inverted[i] = Fp.mul(acc, inverted[i]), Fp.mul(acc, num2)), invertedAcc), inverted;
}
function FpLegendre(Fp, n) {
  let p1mod2 = (Fp.ORDER - _1n3) / _2n2, powered = Fp.pow(n, p1mod2), yes = Fp.eql(powered, Fp.ONE), zero = Fp.eql(powered, Fp.ZERO), no = Fp.eql(powered, Fp.neg(Fp.ONE));
  if (!yes && !zero && !no)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function nLength(n, nBitLength) {
  nBitLength !== void 0 && anumber(nBitLength);
  let _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length, nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE2 = !1, redef = {}) {
  if (ORDER <= _0n3)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  let { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP, f = Object.freeze({
    ORDER,
    isLE: isLE2,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n3,
    ONE: _1n3,
    create: (num2) => mod(num2, ORDER),
    isValid: (num2) => {
      if (typeof num2 != "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num2);
      return _0n3 <= num2 && num2 < ORDER;
    },
    is0: (num2) => num2 === _0n3,
    isOdd: (num2) => (num2 & _1n3) === _1n3,
    neg: (num2) => mod(-num2, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num2) => mod(num2 * num2, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num2, power) => FpPow(f, num2, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num2) => num2 * num2,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num2) => invert(num2, ORDER),
    sqrt: redef.sqrt || ((n) => (sqrtP || (sqrtP = FpSqrt(ORDER)), sqrtP(f, n))),
    toBytes: (num2) => isLE2 ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
    fromBytes: (bytes) => {
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      return isLE2 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (lst) => FpInvertBatch(f, lst),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a, b, c) => c ? b : a
  });
  return Object.freeze(f);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder != "bigint")
    throw new Error("field order must be bigint");
  let bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  let length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key2, fieldOrder, isLE2 = !1) {
  let len = key2.length, fieldLen = getFieldBytesLength(fieldOrder), minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  let num2 = isLE2 ? bytesToNumberLE(key2) : bytesToNumberBE(key2), reduced = mod(num2, fieldOrder - _1n3) + _1n3;
  return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
var _0n3, _1n3, _2n2, _3n, _4n, _5n, _8n, FIELD_FIELDS, init_modular = __esm({
  "node_modules/@noble/curves/esm/abstract/modular.js"() {
    init_utils();
    init_utils2();
    _0n3 = BigInt(0), _1n3 = BigInt(1), _2n2 = /* @__PURE__ */ BigInt(2), _3n = /* @__PURE__ */ BigInt(3), _4n = /* @__PURE__ */ BigInt(4), _5n = /* @__PURE__ */ BigInt(5), _8n = /* @__PURE__ */ BigInt(8);
    FIELD_FIELDS = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN"
    ];
  }
});

// node_modules/@noble/curves/esm/abstract/curve.js
function constTimeNegate(condition, item) {
  let neg = item.negate();
  return condition ? neg : item;
}
function validateW(W, bits) {
  if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts(W, scalarBits) {
  validateW(W, scalarBits);
  let windows = Math.ceil(scalarBits / W) + 1, windowSize = 2 ** (W - 1), maxNumber = 2 ** W, mask = bitMask(W), shiftBy = BigInt(W);
  return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n, window, wOpts) {
  let { windowSize, mask, maxNumber, shiftBy } = wOpts, wbits = Number(n & mask), nextN = n >> shiftBy;
  wbits > windowSize && (wbits -= maxNumber, nextN += _1n4);
  let offsetStart = window * windowSize, offset = offsetStart + Math.abs(wbits) - 1, isZero = wbits === 0, isNeg = wbits < 0, isNegF = window % 2 !== 0;
  return { nextN, offset, isZero, isNeg, isNegF, offsetF: offsetStart };
}
function validateMSMPoints(points, c) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p, i) => {
    if (!(p instanceof c))
      throw new Error("invalid point at index " + i);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s, i) => {
    if (!field.isValid(s))
      throw new Error("invalid scalar at index " + i);
  });
}
function getW(P) {
  return pointWindowSizes.get(P) || 1;
}
function wNAF(c, bits) {
  return {
    constTimeNegate,
    hasPrecomputes(elm) {
      return getW(elm) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(elm, n, p = c.ZERO) {
      let d = elm;
      for (; n > _0n4; )
        n & _1n4 && (p = p.add(d)), d = d.double(), n >>= _1n4;
      return p;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W) {
      let { windows, windowSize } = calcWOpts(W, bits), points = [], p = elm, base = p;
      for (let window = 0; window < windows; window++) {
        base = p, points.push(base);
        for (let i = 1; i < windowSize; i++)
          base = base.add(p), points.push(base);
        p = base.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n) {
      let p = c.ZERO, f = c.BASE, wo = calcWOpts(W, bits);
      for (let window = 0; window < wo.windows; window++) {
        let { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
        n = nextN, isZero ? f = f.add(constTimeNegate(isNegF, precomputes[offsetF])) : p = p.add(constTimeNegate(isNeg, precomputes[offset]));
      }
      return { p, f };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
      let wo = calcWOpts(W, bits);
      for (let window = 0; window < wo.windows && n !== _0n4; window++) {
        let { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
        if (n = nextN, !isZero) {
          let item = precomputes[offset];
          acc = acc.add(isNeg ? item.negate() : item);
        }
      }
      return acc;
    },
    getPrecomputes(W, P, transform) {
      let comp = pointPrecomputes.get(P);
      return comp || (comp = this.precomputeWindow(P, W), W !== 1 && pointPrecomputes.set(P, transform(comp))), comp;
    },
    wNAFCached(P, n, transform) {
      let W = getW(P);
      return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
    },
    wNAFCachedUnsafe(P, n, transform, prev) {
      let W = getW(P);
      return W === 1 ? this.unsafeLadder(P, n, prev) : this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(P, W) {
      validateW(W, bits), pointWindowSizes.set(P, W), pointPrecomputes.delete(P);
    }
  };
}
function pippenger(c, fieldN, points, scalars) {
  validateMSMPoints(points, c), validateMSMScalars(scalars, fieldN);
  let plength = points.length, slength = scalars.length;
  if (plength !== slength)
    throw new Error("arrays of points and scalars must have equal length");
  let zero = c.ZERO, wbits = bitLen(BigInt(plength)), windowSize = 1;
  wbits > 12 ? windowSize = wbits - 3 : wbits > 4 ? windowSize = wbits - 2 : wbits > 0 && (windowSize = 2);
  let MASK = bitMask(windowSize), buckets = new Array(Number(MASK) + 1).fill(zero), lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize, sum = zero;
  for (let i = lastBits; i >= 0; i -= windowSize) {
    buckets.fill(zero);
    for (let j = 0; j < slength; j++) {
      let scalar = scalars[j], wbits2 = Number(scalar >> BigInt(i) & MASK);
      buckets[wbits2] = buckets[wbits2].add(points[j]);
    }
    let resI = zero;
    for (let j = buckets.length - 1, sumI = zero; j > 0; j--)
      sumI = sumI.add(buckets[j]), resI = resI.add(sumI);
    if (sum = sum.add(resI), i !== 0)
      for (let j = 0; j < windowSize; j++)
        sum = sum.double();
  }
  return sum;
}
function validateBasic(curve) {
  return validateField(curve.Fp), validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    p: curve.Fp.ORDER
  });
}
var _0n4, _1n4, pointPrecomputes, pointWindowSizes, init_curve = __esm({
  "node_modules/@noble/curves/esm/abstract/curve.js"() {
    init_modular();
    init_utils2();
    _0n4 = BigInt(0), _1n4 = BigInt(1);
    pointPrecomputes = /* @__PURE__ */ new WeakMap(), pointWindowSizes = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@noble/curves/esm/abstract/weierstrass.js
function validateSigVerOpts(opts) {
  opts.lowS !== void 0 && abool("lowS", opts.lowS), opts.prehash !== void 0 && abool("prehash", opts.prehash);
}
function validatePointOpts(curve) {
  let opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowInfinityPoint: "boolean",
    allowedPrivateKeyLengths: "array",
    clearCofactor: "function",
    fromBytes: "function",
    isTorsionFree: "function",
    toBytes: "function",
    wrapPrivateKey: "boolean"
  });
  let { endo, Fp, a } = opts;
  if (endo) {
    if (!Fp.eql(a, Fp.ZERO))
      throw new Error("invalid endo: CURVE.a must be 0");
    if (typeof endo != "object" || typeof endo.beta != "bigint" || typeof endo.splitScalar != "function")
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
  }
  return Object.freeze({ ...opts });
}
function numToSizedHex(num2, size2) {
  return bytesToHex2(numberToBytesBE(num2, size2));
}
function weierstrassPoints(opts) {
  let CURVE = validatePointOpts(opts), { Fp } = CURVE, Fn = Field(CURVE.n, CURVE.nBitLength), toBytes3 = CURVE.toBytes || ((_c, point, _isCompressed) => {
    let a = point.toAffine();
    return concatBytes3(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
  }), fromBytes = CURVE.fromBytes || ((bytes) => {
    let tail = bytes.subarray(1), x = Fp.fromBytes(tail.subarray(0, Fp.BYTES)), y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
    return { x, y };
  });
  function weierstrassEquation(x) {
    let { a, b } = CURVE, x2 = Fp.sqr(x), x3 = Fp.mul(x2, x);
    return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
  }
  function isValidXY(x, y) {
    let left = Fp.sqr(y), right = weierstrassEquation(x);
    return Fp.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  let _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2), _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
  if (Fp.is0(Fp.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function isWithinCurveOrder(num2) {
    return inRange(num2, _1n5, CURVE.n);
  }
  function normPrivateKeyToScalar(key2) {
    let { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
    if (lengths && typeof key2 != "bigint") {
      if (isBytes2(key2) && (key2 = bytesToHex2(key2)), typeof key2 != "string" || !lengths.includes(key2.length))
        throw new Error("invalid private key");
      key2 = key2.padStart(nByteLength * 2, "0");
    }
    let num2;
    try {
      num2 = typeof key2 == "bigint" ? key2 : bytesToNumberBE(ensureBytes("private key", key2, nByteLength));
    } catch {
      throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key2);
    }
    return wrapPrivateKey && (num2 = mod(num2, N)), aInRange("private key", num2, _1n5, N), num2;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  let toAffineMemo = memoized((p, iz) => {
    let { px: x, py: y, pz: z } = p;
    if (Fp.eql(z, Fp.ONE))
      return { x, y };
    let is0 = p.is0();
    iz == null && (iz = is0 ? Fp.ONE : Fp.inv(z));
    let ax = Fp.mul(x, iz), ay = Fp.mul(y, iz), zz = Fp.mul(z, iz);
    if (is0)
      return { x: Fp.ZERO, y: Fp.ZERO };
    if (!Fp.eql(zz, Fp.ONE))
      throw new Error("invZ was invalid");
    return { x: ax, y: ay };
  }), assertValidMemo = memoized((p) => {
    if (p.is0()) {
      if (CURVE.allowInfinityPoint && !Fp.is0(p.py))
        return;
      throw new Error("bad point: ZERO");
    }
    let { x, y } = p.toAffine();
    if (!Fp.isValid(x) || !Fp.isValid(y))
      throw new Error("bad point: x or y not FE");
    if (!isValidXY(x, y))
      throw new Error("bad point: equation left != right");
    if (!p.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class Point2 {
    constructor(px, py, pz) {
      if (px == null || !Fp.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp.isValid(py) || Fp.is0(py))
        throw new Error("y required");
      if (pz == null || !Fp.isValid(pz))
        throw new Error("z required");
      this.px = px, this.py = py, this.pz = pz, Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      let { x, y } = p || {};
      if (!p || !Fp.isValid(x) || !Fp.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof Point2)
        throw new Error("projective point not allowed");
      let is0 = (i) => Fp.eql(i, Fp.ZERO);
      return is0(x) && is0(y) ? Point2.ZERO : new Point2(x, y, Fp.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      let toInv = FpInvertBatch(Fp, points.map((p) => p.pz));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex) {
      let P = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
      return P.assertValidity(), P;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // Multiscalar Multiplication
    static msm(points, scalars) {
      return pippenger(Point2, Fn, points, scalars);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      wnaf.setWindowSize(this, windowSize);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      let { y } = this.toAffine();
      if (Fp.isOdd)
        return !Fp.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      aprjpoint(other);
      let { px: X1, py: Y1, pz: Z1 } = this, { px: X2, py: Y2, pz: Z2 } = other, U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1)), U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      let { a, b } = CURVE, b3 = Fp.mul(b, _3n2), { px: X1, py: Y1, pz: Z1 } = this, X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO, t0 = Fp.mul(X1, X1), t1 = Fp.mul(Y1, Y1), t2 = Fp.mul(Z1, Z1), t3 = Fp.mul(X1, Y1);
      return t3 = Fp.add(t3, t3), Z3 = Fp.mul(X1, Z1), Z3 = Fp.add(Z3, Z3), X3 = Fp.mul(a, Z3), Y3 = Fp.mul(b3, t2), Y3 = Fp.add(X3, Y3), X3 = Fp.sub(t1, Y3), Y3 = Fp.add(t1, Y3), Y3 = Fp.mul(X3, Y3), X3 = Fp.mul(t3, X3), Z3 = Fp.mul(b3, Z3), t2 = Fp.mul(a, t2), t3 = Fp.sub(t0, t2), t3 = Fp.mul(a, t3), t3 = Fp.add(t3, Z3), Z3 = Fp.add(t0, t0), t0 = Fp.add(Z3, t0), t0 = Fp.add(t0, t2), t0 = Fp.mul(t0, t3), Y3 = Fp.add(Y3, t0), t2 = Fp.mul(Y1, Z1), t2 = Fp.add(t2, t2), t0 = Fp.mul(t2, t3), X3 = Fp.sub(X3, t0), Z3 = Fp.mul(t2, t1), Z3 = Fp.add(Z3, Z3), Z3 = Fp.add(Z3, Z3), new Point2(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      let { px: X1, py: Y1, pz: Z1 } = this, { px: X2, py: Y2, pz: Z2 } = other, X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO, a = CURVE.a, b3 = Fp.mul(CURVE.b, _3n2), t0 = Fp.mul(X1, X2), t1 = Fp.mul(Y1, Y2), t2 = Fp.mul(Z1, Z2), t3 = Fp.add(X1, Y1), t4 = Fp.add(X2, Y2);
      t3 = Fp.mul(t3, t4), t4 = Fp.add(t0, t1), t3 = Fp.sub(t3, t4), t4 = Fp.add(X1, Z1);
      let t5 = Fp.add(X2, Z2);
      return t4 = Fp.mul(t4, t5), t5 = Fp.add(t0, t2), t4 = Fp.sub(t4, t5), t5 = Fp.add(Y1, Z1), X3 = Fp.add(Y2, Z2), t5 = Fp.mul(t5, X3), X3 = Fp.add(t1, t2), t5 = Fp.sub(t5, X3), Z3 = Fp.mul(a, t4), X3 = Fp.mul(b3, t2), Z3 = Fp.add(X3, Z3), X3 = Fp.sub(t1, Z3), Z3 = Fp.add(t1, Z3), Y3 = Fp.mul(X3, Z3), t1 = Fp.add(t0, t0), t1 = Fp.add(t1, t0), t2 = Fp.mul(a, t2), t4 = Fp.mul(b3, t4), t1 = Fp.add(t1, t2), t2 = Fp.sub(t0, t2), t2 = Fp.mul(a, t2), t4 = Fp.add(t4, t2), t0 = Fp.mul(t1, t4), Y3 = Fp.add(Y3, t0), t0 = Fp.mul(t5, t4), X3 = Fp.mul(t3, X3), X3 = Fp.sub(X3, t0), t0 = Fp.mul(t3, t1), Z3 = Fp.mul(t5, Z3), Z3 = Fp.add(Z3, t0), new Point2(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, n, Point2.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc) {
      let { endo: endo2, n: N } = CURVE;
      aInRange("scalar", sc, _0n5, N);
      let I = Point2.ZERO;
      if (sc === _0n5)
        return I;
      if (this.is0() || sc === _1n5)
        return this;
      if (!endo2 || wnaf.hasPrecomputes(this))
        return wnaf.wNAFCachedUnsafe(this, sc, Point2.normalizeZ);
      let { k1neg, k1, k2neg, k2 } = endo2.splitScalar(sc), k1p = I, k2p = I, d = this;
      for (; k1 > _0n5 || k2 > _0n5; )
        k1 & _1n5 && (k1p = k1p.add(d)), k2 & _1n5 && (k2p = k2p.add(d)), d = d.double(), k1 >>= _1n5, k2 >>= _1n5;
      return k1neg && (k1p = k1p.negate()), k2neg && (k2p = k2p.negate()), k2p = new Point2(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz), k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      let { endo: endo2, n: N } = CURVE;
      aInRange("scalar", scalar, _1n5, N);
      let point, fake;
      if (endo2) {
        let { k1neg, k1, k2neg, k2 } = endo2.splitScalar(scalar), { p: k1p, f: f1p } = this.wNAF(k1), { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p), k2p = wnaf.constTimeNegate(k2neg, k2p), k2p = new Point2(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz), point = k1p.add(k2p), fake = f1p.add(f2p);
      } else {
        let { p, f } = this.wNAF(scalar);
        point = p, fake = f;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a, b) {
      let G = Point2.BASE, mul = (P, a2) => a2 === _0n5 || a2 === _1n5 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2), sum = mul(this, a).add(mul(Q, b));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      return toAffineMemo(this, iz);
    }
    isTorsionFree() {
      let { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n5)
        return !0;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      let { h: cofactor, clearCofactor } = CURVE;
      return cofactor === _1n5 ? this : clearCofactor ? clearCofactor(Point2, this) : this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = !0) {
      return abool("isCompressed", isCompressed), this.assertValidity(), toBytes3(Point2, this, isCompressed);
    }
    toHex(isCompressed = !0) {
      return abool("isCompressed", isCompressed), bytesToHex2(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp.ONE), Point2.ZERO = new Point2(Fp.ZERO, Fp.ONE, Fp.ZERO);
  let { endo, nBitLength } = CURVE, wnaf = wNAF(Point2, endo ? Math.ceil(nBitLength / 2) : nBitLength);
  return {
    CURVE,
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts(curve) {
  let opts = validateBasic(curve);
  return validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...opts });
}
function weierstrass(curveDef) {
  let CURVE = validateOpts(curveDef), { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE, compressedLen = Fp.BYTES + 1, uncompressedLen = 2 * Fp.BYTES + 1;
  function modN2(a) {
    return mod(a, CURVE_ORDER);
  }
  function invN(a) {
    return invert(a, CURVE_ORDER);
  }
  let { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c, point, isCompressed) {
      let a = point.toAffine(), x = Fp.toBytes(a.x), cat = concatBytes3;
      return abool("isCompressed", isCompressed), isCompressed ? cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x) : cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
    },
    fromBytes(bytes) {
      let len = bytes.length, head = bytes[0], tail = bytes.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        let x = bytesToNumberBE(tail);
        if (!inRange(x, _1n5, Fp.ORDER))
          throw new Error("Point is not on curve");
        let y2 = weierstrassEquation(x), y;
        try {
          y = Fp.sqrt(y2);
        } catch (sqrtError) {
          let suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("Point is not on curve" + suffix);
        }
        let isYOdd = (y & _1n5) === _1n5;
        return (head & 1) === 1 !== isYOdd && (y = Fp.neg(y)), { x, y };
      } else if (len === uncompressedLen && head === 4) {
        let x = Fp.fromBytes(tail.subarray(0, Fp.BYTES)), y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return { x, y };
      } else {
        let cl = compressedLen, ul = uncompressedLen;
        throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
      }
    }
  });
  function isBiggerThanHalfOrder(number) {
    let HALF = CURVE_ORDER >> _1n5;
    return number > HALF;
  }
  function normalizeS(s) {
    return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
  }
  let slcNum = (b, from2, to) => bytesToNumberBE(b.slice(from2, to));
  class Signature {
    constructor(r, s, recovery) {
      aInRange("r", r, _1n5, CURVE_ORDER), aInRange("s", s, _1n5, CURVE_ORDER), this.r = r, this.s = s, recovery != null && (this.recovery = recovery), Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      let l = nByteLength;
      return hex = ensureBytes("compactSignature", hex, l * 2), new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      let { r, s } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r, s);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      let { r, s, recovery: rec } = this, h = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      let radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
      if (radj >= Fp.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      let prefix = (rec & 1) === 0 ? "02" : "03", R = Point2.fromHex(prefix + numToSizedHex(radj, Fp.BYTES)), ir = invN(radj), u1 = modN2(-h * ir), u2 = modN2(s * ir), Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
      if (!Q)
        throw new Error("point at infinify");
      return Q.assertValidity(), Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes2(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes2(this.toCompactHex());
    }
    toCompactHex() {
      let l = nByteLength;
      return numToSizedHex(this.r, l) + numToSizedHex(this.s, l);
    }
  }
  let utils = {
    isValidPrivateKey(privateKey) {
      try {
        return normPrivateKeyToScalar(privateKey), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      let length = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      return point._setWindowSize(windowSize), point.multiply(BigInt(3)), point;
    }
  };
  function getPublicKey(privateKey, isCompressed = !0) {
    return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    if (typeof item == "bigint")
      return !1;
    if (item instanceof Point2)
      return !0;
    let len = ensureBytes("key", item).length, fpl = Fp.BYTES, compLen = fpl + 1, uncompLen = 2 * fpl + 1;
    if (!(CURVE.allowedPrivateKeyLengths || nByteLength === compLen))
      return len === compLen || len === uncompLen;
  }
  function getSharedSecret(privateA, publicB, isCompressed = !0) {
    if (isProbPub(privateA) === !0)
      throw new Error("first arg must be private key");
    if (isProbPub(publicB) === !1)
      throw new Error("second arg must be public key");
    return Point2.fromHex(publicB).multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  let bits2int = CURVE.bits2int || function(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    let num2 = bytesToNumberBE(bytes), delta = bytes.length * 8 - nBitLength;
    return delta > 0 ? num2 >> BigInt(delta) : num2;
  }, bits2int_modN = CURVE.bits2int_modN || function(bytes) {
    return modN2(bits2int(bytes));
  }, ORDER_MASK = bitMask(nBitLength);
  function int2octets(num2) {
    return aInRange("num < 2^" + nBitLength, num2, _0n5, ORDER_MASK), numberToBytesBE(num2, nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    let { hash, randomBytes: randomBytes2 } = CURVE, { lowS, prehash, extraEntropy: ent } = opts;
    lowS == null && (lowS = !0), msgHash = ensureBytes("msgHash", msgHash), validateSigVerOpts(opts), prehash && (msgHash = ensureBytes("prehashed msgHash", hash(msgHash)));
    let h1int = bits2int_modN(msgHash), d = normPrivateKeyToScalar(privateKey), seedArgs = [int2octets(d), int2octets(h1int)];
    if (ent != null && ent !== !1) {
      let e = ent === !0 ? randomBytes2(Fp.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e));
    }
    let seed = concatBytes3(...seedArgs), m = h1int;
    function k2sig(kBytes) {
      let k = bits2int(kBytes);
      if (!isWithinCurveOrder(k))
        return;
      let ik = invN(k), q = Point2.BASE.multiply(k).toAffine(), r = modN2(q.x);
      if (r === _0n5)
        return;
      let s = modN2(ik * modN2(m + r * d));
      if (s === _0n5)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n5), normS = s;
      return lowS && isBiggerThanHalfOrder(s) && (normS = normalizeS(s), recovery ^= 1), new Signature(r, normS, recovery);
    }
    return { seed, k2sig };
  }
  let defaultSigOpts = { lowS: CURVE.lowS, prehash: !1 }, defaultVerOpts = { lowS: CURVE.lowS, prehash: !1 };
  function sign2(msgHash, privKey, opts = defaultSigOpts) {
    let { seed, k2sig } = prepSig(msgHash, privKey, opts), C = CURVE;
    return createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac)(seed, k2sig);
  }
  Point2.BASE._setWindowSize(8);
  function verify2(signature, msgHash, publicKey, opts = defaultVerOpts) {
    let sg = signature;
    msgHash = ensureBytes("msgHash", msgHash), publicKey = ensureBytes("publicKey", publicKey);
    let { lowS, prehash, format: format2 } = opts;
    if (validateSigVerOpts(opts), "strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    if (format2 !== void 0 && format2 !== "compact" && format2 !== "der")
      throw new Error("format must be compact or der");
    let isHex2 = typeof sg == "string" || isBytes2(sg), isObj = !isHex2 && !format2 && typeof sg == "object" && sg !== null && typeof sg.r == "bigint" && typeof sg.s == "bigint";
    if (!isHex2 && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let _sig, P;
    try {
      if (isObj && (_sig = new Signature(sg.r, sg.s)), isHex2) {
        try {
          format2 !== "compact" && (_sig = Signature.fromDER(sg));
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
        }
        !_sig && format2 !== "der" && (_sig = Signature.fromCompact(sg));
      }
      P = Point2.fromHex(publicKey);
    } catch {
      return !1;
    }
    if (!_sig || lowS && _sig.hasHighS())
      return !1;
    prehash && (msgHash = CURVE.hash(msgHash));
    let { r, s } = _sig, h = bits2int_modN(msgHash), is = invN(s), u1 = modN2(h * is), u2 = modN2(r * is), R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
    return R ? modN2(R.x) === r : !1;
  }
  return {
    CURVE,
    getPublicKey,
    getSharedSecret,
    sign: sign2,
    verify: verify2,
    ProjectivePoint: Point2,
    Signature,
    utils
  };
}
function SWUFpSqrtRatio(Fp, Z) {
  let q = Fp.ORDER, l = _0n5;
  for (let o = q - _1n5; o % _2n3 === _0n5; o /= _2n3)
    l += _1n5;
  let c1 = l, _2n_pow_c1_1 = _2n3 << c1 - _1n5 - _1n5, _2n_pow_c1 = _2n_pow_c1_1 * _2n3, c2 = (q - _1n5) / _2n_pow_c1, c3 = (c2 - _1n5) / _2n3, c4 = _2n_pow_c1 - _1n5, c5 = _2n_pow_c1_1, c6 = Fp.pow(Z, c2), c7 = Fp.pow(Z, (c2 + _1n5) / _2n3), sqrtRatio = (u, v) => {
    let tv1 = c6, tv2 = Fp.pow(v, c4), tv3 = Fp.sqr(tv2);
    tv3 = Fp.mul(tv3, v);
    let tv5 = Fp.mul(u, tv3);
    tv5 = Fp.pow(tv5, c3), tv5 = Fp.mul(tv5, tv2), tv2 = Fp.mul(tv5, v), tv3 = Fp.mul(tv5, u);
    let tv4 = Fp.mul(tv3, tv2);
    tv5 = Fp.pow(tv4, c5);
    let isQR = Fp.eql(tv5, Fp.ONE);
    tv2 = Fp.mul(tv3, c7), tv5 = Fp.mul(tv4, tv1), tv3 = Fp.cmov(tv2, tv3, isQR), tv4 = Fp.cmov(tv5, tv4, isQR);
    for (let i = c1; i > _1n5; i--) {
      let tv52 = i - _2n3;
      tv52 = _2n3 << tv52 - _1n5;
      let tvv5 = Fp.pow(tv4, tv52), e1 = Fp.eql(tvv5, Fp.ONE);
      tv2 = Fp.mul(tv3, tv1), tv1 = Fp.mul(tv1, tv1), tvv5 = Fp.mul(tv4, tv1), tv3 = Fp.cmov(tv2, tv3, e1), tv4 = Fp.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp.ORDER % _4n2 === _3n2) {
    let c12 = (Fp.ORDER - _3n2) / _4n2, c22 = Fp.sqrt(Fp.neg(Z));
    sqrtRatio = (u, v) => {
      let tv1 = Fp.sqr(v), tv2 = Fp.mul(u, v);
      tv1 = Fp.mul(tv1, tv2);
      let y1 = Fp.pow(tv1, c12);
      y1 = Fp.mul(y1, tv2);
      let y2 = Fp.mul(y1, c22), tv3 = Fp.mul(Fp.sqr(y1), v), isQR = Fp.eql(tv3, u), y = Fp.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp, opts) {
  if (validateField(Fp), !Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  let sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
  if (!Fp.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
    tv1 = Fp.sqr(u), tv1 = Fp.mul(tv1, opts.Z), tv2 = Fp.sqr(tv1), tv2 = Fp.add(tv2, tv1), tv3 = Fp.add(tv2, Fp.ONE), tv3 = Fp.mul(tv3, opts.B), tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)), tv4 = Fp.mul(tv4, opts.A), tv2 = Fp.sqr(tv3), tv6 = Fp.sqr(tv4), tv5 = Fp.mul(tv6, opts.A), tv2 = Fp.add(tv2, tv5), tv2 = Fp.mul(tv2, tv3), tv6 = Fp.mul(tv6, tv4), tv5 = Fp.mul(tv6, opts.B), tv2 = Fp.add(tv2, tv5), x = Fp.mul(tv1, tv3);
    let { isValid, value } = sqrtRatio(tv2, tv6);
    y = Fp.mul(tv1, u), y = Fp.mul(y, value), x = Fp.cmov(x, tv3, isValid), y = Fp.cmov(y, value, isValid);
    let e1 = Fp.isOdd(u) === Fp.isOdd(y);
    y = Fp.cmov(Fp.neg(y), y, e1);
    let tv4_inv = FpInvertBatch(Fp, [tv4], !0)[0];
    return x = Fp.mul(x, tv4_inv), { x, y };
  };
}
var DERErr, DER, _0n5, _1n5, _2n3, _3n2, _4n2, init_weierstrass = __esm({
  "node_modules/@noble/curves/esm/abstract/weierstrass.js"() {
    init_curve();
    init_modular();
    init_utils2();
    DERErr = class extends Error {
      constructor(m = "") {
        super(m);
      }
    }, DER = {
      // asn.1 DER encoding utils
      Err: DERErr,
      // Basic building block is TLV (Tag-Length-Value)
      _tlv: {
        encode: (tag, data) => {
          let { Err: E } = DER;
          if (tag < 0 || tag > 256)
            throw new E("tlv.encode: wrong tag");
          if (data.length & 1)
            throw new E("tlv.encode: unpadded data");
          let dataLen = data.length / 2, len = numberToHexUnpadded(dataLen);
          if (len.length / 2 & 128)
            throw new E("tlv.encode: long form length too big");
          let lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
          return numberToHexUnpadded(tag) + lenLen + len + data;
        },
        // v - value, l - left bytes (unparsed)
        decode(tag, data) {
          let { Err: E } = DER, pos = 0;
          if (tag < 0 || tag > 256)
            throw new E("tlv.encode: wrong tag");
          if (data.length < 2 || data[pos++] !== tag)
            throw new E("tlv.decode: wrong tlv");
          let first = data[pos++], isLong = !!(first & 128), length = 0;
          if (!isLong)
            length = first;
          else {
            let lenLen = first & 127;
            if (!lenLen)
              throw new E("tlv.decode(long): indefinite length not supported");
            if (lenLen > 4)
              throw new E("tlv.decode(long): byte length is too big");
            let lengthBytes = data.subarray(pos, pos + lenLen);
            if (lengthBytes.length !== lenLen)
              throw new E("tlv.decode: length bytes not complete");
            if (lengthBytes[0] === 0)
              throw new E("tlv.decode(long): zero leftmost byte");
            for (let b of lengthBytes)
              length = length << 8 | b;
            if (pos += lenLen, length < 128)
              throw new E("tlv.decode(long): not minimal encoding");
          }
          let v = data.subarray(pos, pos + length);
          if (v.length !== length)
            throw new E("tlv.decode: wrong value length");
          return { v, l: data.subarray(pos + length) };
        }
      },
      // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
      // since we always use positive integers here. It must always be empty:
      // - add zero byte if exists
      // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
      _int: {
        encode(num2) {
          let { Err: E } = DER;
          if (num2 < _0n5)
            throw new E("integer: negative integers are not allowed");
          let hex = numberToHexUnpadded(num2);
          if (Number.parseInt(hex[0], 16) & 8 && (hex = "00" + hex), hex.length & 1)
            throw new E("unexpected DER parsing assertion: unpadded hex");
          return hex;
        },
        decode(data) {
          let { Err: E } = DER;
          if (data[0] & 128)
            throw new E("invalid signature integer: negative");
          if (data[0] === 0 && !(data[1] & 128))
            throw new E("invalid signature integer: unnecessary leading zero");
          return bytesToNumberBE(data);
        }
      },
      toSig(hex) {
        let { Err: E, _int: int, _tlv: tlv } = DER, data = ensureBytes("signature", hex), { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
        if (seqLeftBytes.length)
          throw new E("invalid signature: left bytes after parsing");
        let { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes), { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
        if (sLeftBytes.length)
          throw new E("invalid signature: left bytes after parsing");
        return { r: int.decode(rBytes), s: int.decode(sBytes) };
      },
      hexFromSig(sig) {
        let { _tlv: tlv, _int: int } = DER, rs = tlv.encode(2, int.encode(sig.r)), ss = tlv.encode(2, int.encode(sig.s)), seq = rs + ss;
        return tlv.encode(48, seq);
      }
    };
    _0n5 = BigInt(0), _1n5 = BigInt(1), _2n3 = BigInt(2), _3n2 = BigInt(3), _4n2 = BigInt(4);
  }
});

// node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash) {
  return {
    hash,
    hmac: (key2, ...msgs) => hmac(hash, key2, concatBytes(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  let create = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
  return { ...create(defHash), create };
}
var init_shortw_utils = __esm({
  "node_modules/@noble/curves/esm/_shortw_utils.js"() {
    init_hmac();
    init_utils();
    init_weierstrass();
  }
});

// node_modules/@noble/curves/esm/abstract/hash-to-curve.js
function i2osp(value, length) {
  if (anum(value), anum(length), value < 0 || value >= 1 << 8 * length)
    throw new Error("invalid I2OSP input: " + value);
  let res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--)
    res[i] = value & 255, value >>>= 8;
  return new Uint8Array(res);
}
function strxor(a, b) {
  let arr = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++)
    arr[i] = a[i] ^ b[i];
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
  abytes2(msg), abytes2(DST), anum(lenInBytes), DST.length > 255 && (DST = H(concatBytes3(utf8ToBytes2("H2C-OVERSIZE-DST-"), DST)));
  let { outputLen: b_in_bytes, blockLen: r_in_bytes } = H, ell = Math.ceil(lenInBytes / b_in_bytes);
  if (lenInBytes > 65535 || ell > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  let DST_prime = concatBytes3(DST, i2osp(DST.length, 1)), Z_pad = i2osp(0, r_in_bytes), l_i_b_str = i2osp(lenInBytes, 2), b = new Array(ell), b_0 = H(concatBytes3(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b[0] = H(concatBytes3(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i <= ell; i++) {
    let args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
    b[i] = H(concatBytes3(...args));
  }
  return concatBytes3(...b).slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
  if (abytes2(msg), abytes2(DST), anum(lenInBytes), DST.length > 255) {
    let dkLen = Math.ceil(2 * k / 8);
    DST = H.create({ dkLen }).update(utf8ToBytes2("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  let { p, k, m, hash, expand, DST: _DST } = options;
  abytes2(msg), anum(count);
  let DST = typeof _DST == "string" ? utf8ToBytes2(_DST) : _DST, log2p = p.toString(2).length, L = Math.ceil((log2p + k) / 8), len_in_bytes = count * m * L, prb;
  if (expand === "xmd")
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
  else if (expand === "xof")
    prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
  else if (expand === "_internal_pass")
    prb = msg;
  else
    throw new Error('expand must be "xmd" or "xof"');
  let u = new Array(count);
  for (let i = 0; i < count; i++) {
    let e = new Array(m);
    for (let j = 0; j < m; j++) {
      let elm_offset = L * (j + i * m), tv = prb.subarray(elm_offset, elm_offset + L);
      e[j] = mod(os2ip(tv), p);
    }
    u[i] = e;
  }
  return u;
}
function isogenyMap(field, map) {
  let coeff = map.map((i) => Array.from(i).reverse());
  return (x, y) => {
    let [xn, xd, yn, yd] = coeff.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i))), [xd_inv, yd_inv] = FpInvertBatch(field, [xd, yd], !0);
    return x = field.mul(xn, xd_inv), y = field.mul(y, field.mul(yn, yd_inv)), { x, y };
  };
}
function createHasher2(Point2, mapToCurve, defaults2) {
  if (typeof mapToCurve != "function")
    throw new Error("mapToCurve() must be defined");
  function map(num2) {
    return Point2.fromAffine(mapToCurve(num2));
  }
  function clear(initial) {
    let P = initial.clearCofactor();
    return P.equals(Point2.ZERO) ? Point2.ZERO : (P.assertValidity(), P);
  }
  return {
    defaults: defaults2,
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(msg, options) {
      let u = hash_to_field(msg, 2, { ...defaults2, DST: defaults2.DST, ...options }), u0 = map(u[0]), u1 = map(u[1]);
      return clear(u0.add(u1));
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(msg, options) {
      let u = hash_to_field(msg, 1, { ...defaults2, DST: defaults2.encodeDST, ...options });
      return clear(map(u[0]));
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(scalars) {
      if (!Array.isArray(scalars))
        throw new Error("expected array of bigints");
      for (let i of scalars)
        if (typeof i != "bigint")
          throw new Error("expected array of bigints");
      return clear(map(scalars));
    }
  };
}
var os2ip, init_hash_to_curve = __esm({
  "node_modules/@noble/curves/esm/abstract/hash-to-curve.js"() {
    init_modular();
    init_utils2();
    os2ip = bytesToNumberBE;
  }
});

// node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_exports = {};
__export(secp256k1_exports, {
  encodeToCurve: () => encodeToCurve,
  hashToCurve: () => hashToCurve,
  schnorr: () => schnorr,
  secp256k1: () => secp256k1,
  secp256k1_hasher: () => secp256k1_hasher
});
function sqrtMod(y) {
  let P = secp256k1P, _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22), _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88), b2 = y * y * y % P, b3 = b2 * b2 * y % P, b6 = pow2(b3, _3n3, P) * b3 % P, b9 = pow2(b6, _3n3, P) * b3 % P, b11 = pow2(b9, _2n4, P) * b2 % P, b22 = pow2(b11, _11n, P) * b11 % P, b44 = pow2(b22, _22n, P) * b22 % P, b88 = pow2(b44, _44n, P) * b44 % P, b176 = pow2(b88, _88n, P) * b88 % P, b220 = pow2(b176, _44n, P) * b44 % P, b223 = pow2(b220, _3n3, P) * b3 % P, t1 = pow2(b223, _23n, P) * b22 % P, t2 = pow2(t1, _6n, P) * b2 % P, root = pow2(t2, _2n4, P);
  if (!Fpk1.eql(Fpk1.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    let tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
    tagP = concatBytes3(tagH, tagH), TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256(concatBytes3(tagP, ...messages));
}
function schnorrGetExtPubKey(priv) {
  let d_ = secp256k1.utils.normPrivateKeyToScalar(priv), p = Point.fromPrivateKey(d_);
  return { scalar: p.hasEvenY() ? d_ : modN(-d_), bytes: pointToBytes(p) };
}
function lift_x(x) {
  aInRange("x", x, _1n6, secp256k1P);
  let xx = modP(x * x), c = modP(xx * x + BigInt(7)), y = sqrtMod(c);
  y % _2n4 !== _0n6 && (y = modP(-y));
  let p = new Point(x, y, _1n6);
  return p.assertValidity(), p;
}
function challenge(...args) {
  return modN(num(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(privateKey) {
  return schnorrGetExtPubKey(privateKey).bytes;
}
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
  let m = ensureBytes("message", message), { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey), a = ensureBytes("auxRand", auxRand, 32), t = numTo32b(d ^ num(taggedHash("BIP0340/aux", a))), rand = taggedHash("BIP0340/nonce", t, px, m), k_ = modN(num(rand));
  if (k_ === _0n6)
    throw new Error("sign failed: k is zero");
  let { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_), e = challenge(rx, px, m), sig = new Uint8Array(64);
  if (sig.set(rx, 0), sig.set(numTo32b(modN(k + e * d)), 32), !schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  let sig = ensureBytes("signature", signature, 64), m = ensureBytes("message", message), pub = ensureBytes("publicKey", publicKey, 32);
  try {
    let P = lift_x(num(pub)), r = num(sig.subarray(0, 32));
    if (!inRange(r, _1n6, secp256k1P))
      return !1;
    let s = num(sig.subarray(32, 64));
    if (!inRange(s, _1n6, secp256k1N))
      return !1;
    let e = challenge(numTo32b(r), pointToBytes(P), m), R = GmulAdd(P, s, modN(-e));
    return !(!R || !R.hasEvenY() || R.toAffine().x !== r);
  } catch {
    return !1;
  }
}
var secp256k1P, secp256k1N, _0n6, _1n6, _2n4, divNearest, Fpk1, secp256k1, TAGGED_HASH_PREFIXES, pointToBytes, numTo32b, modP, modN, Point, GmulAdd, num, schnorr, isoMap, mapSWU, secp256k1_hasher, hashToCurve, encodeToCurve, init_secp256k1 = __esm({
  "node_modules/@noble/curves/esm/secp256k1.js"() {
    init_sha2();
    init_utils();
    init_shortw_utils();
    init_hash_to_curve();
    init_modular();
    init_utils2();
    init_weierstrass();
    secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), _0n6 = BigInt(0), _1n6 = BigInt(1), _2n4 = BigInt(2), divNearest = (a, b) => (a + b / _2n4) / b;
    Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod }), secp256k1 = createCurve({
      a: _0n6,
      b: BigInt(7),
      Fp: Fpk1,
      n: secp256k1N,
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      h: BigInt(1),
      lowS: !0,
      // Allow only low-S signatures by default in sign() and verify()
      endo: {
        // Endomorphism, see above
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: (k) => {
          let n = secp256k1N, a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), b1 = -_1n6 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), b2 = a1, POW_2_128 = BigInt("0x100000000000000000000000000000000"), c1 = divNearest(b2 * k, n), c2 = divNearest(-b1 * k, n), k1 = mod(k - c1 * a1 - c2 * a2, n), k2 = mod(-c1 * b1 - c2 * b2, n), k1neg = k1 > POW_2_128, k2neg = k2 > POW_2_128;
          if (k1neg && (k1 = n - k1), k2neg && (k2 = n - k2), k1 > POW_2_128 || k2 > POW_2_128)
            throw new Error("splitScalar: Endomorphism failed, k=" + k);
          return { k1neg, k1, k2neg, k2 };
        }
      }
    }, sha256), TAGGED_HASH_PREFIXES = {};
    pointToBytes = (point) => point.toRawBytes(!0).slice(1), numTo32b = (n) => numberToBytesBE(n, 32), modP = (x) => mod(x, secp256k1P), modN = (x) => mod(x, secp256k1N), Point = secp256k1.ProjectivePoint, GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
    num = bytesToNumberBE;
    schnorr = {
      getPublicKey: schnorrGetPublicKey,
      sign: schnorrSign,
      verify: schnorrVerify,
      utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod
      }
    }, isoMap = isogenyMap(Fpk1, [
      // xNum
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
      ],
      // xDen
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ],
      // yNum
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
      ],
      // yDen
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ]
    ].map((i) => i.map((j) => BigInt(j)))), mapSWU = mapToCurveSimpleSWU(Fpk1, {
      A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
      B: BigInt("1771"),
      Z: Fpk1.create(BigInt("-11"))
    }), secp256k1_hasher = createHasher2(secp256k1.ProjectivePoint, (scalars) => {
      let { x, y } = mapSWU(Fpk1.create(scalars[0]));
      return isoMap(x, y);
    }, {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: Fpk1.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: sha256
    }), hashToCurve = secp256k1_hasher.hashToCurve, encodeToCurve = secp256k1_hasher.encodeToCurve;
  }
});

// node_modules/viem/_esm/errors/node.js
var ExecutionRevertedError, FeeCapTooHighError, FeeCapTooLowError, NonceTooHighError, NonceTooLowError, NonceMaxValueError, InsufficientFundsError, IntrinsicGasTooHighError, IntrinsicGasTooLowError, TransactionTypeNotSupportedError, TipAboveFeeCapError, init_node = __esm({
  "node_modules/viem/_esm/errors/node.js"() {
    init_formatGwei();
    init_base();
    ExecutionRevertedError = class extends BaseError {
      constructor({ cause, message } = {}) {
        let reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
          cause,
          name: "ExecutionRevertedError"
        });
      }
    };
    Object.defineProperty(ExecutionRevertedError, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    });
    Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /execution reverted|gas required exceeds allowance/
    });
    FeeCapTooHighError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei2(maxFeePerGas)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
          cause,
          name: "FeeCapTooHighError"
        });
      }
    };
    Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
    });
    FeeCapTooLowError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei2(maxFeePerGas)}` : ""} gwei) cannot be lower than the block base fee.`, {
          cause,
          name: "FeeCapTooLowError"
        });
      }
    };
    Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
    });
    NonceTooHighError = class extends BaseError {
      constructor({ cause, nonce: nonce2 } = {}) {
        super(`Nonce provided for the transaction ${nonce2 ? `(${nonce2}) ` : ""}is higher than the next one expected.`, { cause, name: "NonceTooHighError" });
      }
    };
    Object.defineProperty(NonceTooHighError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too high/
    });
    NonceTooLowError = class extends BaseError {
      constructor({ cause, nonce: nonce2 } = {}) {
        super([
          `Nonce provided for the transaction ${nonce2 ? `(${nonce2}) ` : ""}is lower than the current nonce of the account.`,
          "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
        ].join(`
`), { cause, name: "NonceTooLowError" });
      }
    };
    Object.defineProperty(NonceTooLowError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too low|transaction already imported|already known/
    });
    NonceMaxValueError = class extends BaseError {
      constructor({ cause, nonce: nonce2 } = {}) {
        super(`Nonce provided for the transaction ${nonce2 ? `(${nonce2}) ` : ""}exceeds the maximum allowed nonce.`, { cause, name: "NonceMaxValueError" });
      }
    };
    Object.defineProperty(NonceMaxValueError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce has max value/
    });
    InsufficientFundsError = class extends BaseError {
      constructor({ cause } = {}) {
        super([
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
        ].join(`
`), {
          cause,
          metaMessages: [
            "This error could arise when the account does not have enough funds to:",
            " - pay for the total gas fee,",
            " - pay for the value to send.",
            " ",
            "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
            " - `gas` is the amount of gas needed for transaction to execute,",
            " - `gas fee` is the gas fee,",
            " - `value` is the amount of ether to send to the recipient."
          ],
          name: "InsufficientFundsError"
        });
      }
    };
    Object.defineProperty(InsufficientFundsError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /insufficient funds|exceeds transaction sender account balance/
    });
    IntrinsicGasTooHighError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
          cause,
          name: "IntrinsicGasTooHighError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too high|gas limit reached/
    });
    IntrinsicGasTooLowError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction is too low.`, {
          cause,
          name: "IntrinsicGasTooLowError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too low/
    });
    TransactionTypeNotSupportedError = class extends BaseError {
      constructor({ cause }) {
        super("The transaction type is not supported for this chain.", {
          cause,
          name: "TransactionTypeNotSupportedError"
        });
      }
    };
    Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /transaction type not valid/
    });
    TipAboveFeeCapError = class extends BaseError {
      constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}) {
        super([
          `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei2(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei2(maxFeePerGas)} gwei` : ""}).`
        ].join(`
`), {
          cause,
          name: "TipAboveFeeCapError"
        });
      }
    };
    Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
    });
  }
});

// node_modules/viem/_esm/constants/number.js
var maxInt8, maxInt16, maxInt24, maxInt32, maxInt40, maxInt48, maxInt56, maxInt64, maxInt72, maxInt80, maxInt88, maxInt96, maxInt104, maxInt112, maxInt120, maxInt128, maxInt136, maxInt144, maxInt152, maxInt160, maxInt168, maxInt176, maxInt184, maxInt192, maxInt200, maxInt208, maxInt216, maxInt224, maxInt232, maxInt240, maxInt248, maxInt256, minInt8, minInt16, minInt24, minInt32, minInt40, minInt48, minInt56, minInt64, minInt72, minInt80, minInt88, minInt96, minInt104, minInt112, minInt120, minInt128, minInt136, minInt144, minInt152, minInt160, minInt168, minInt176, minInt184, minInt192, minInt200, minInt208, minInt216, minInt224, minInt232, minInt240, minInt248, minInt256, maxUint8, maxUint16, maxUint24, maxUint32, maxUint40, maxUint48, maxUint56, maxUint64, maxUint72, maxUint80, maxUint88, maxUint96, maxUint104, maxUint112, maxUint120, maxUint128, maxUint136, maxUint144, maxUint152, maxUint160, maxUint168, maxUint176, maxUint184, maxUint192, maxUint200, maxUint208, maxUint216, maxUint224, maxUint232, maxUint240, maxUint248, maxUint256, init_number = __esm({
  "node_modules/viem/_esm/constants/number.js"() {
    maxInt8 = 2n ** (8n - 1n) - 1n, maxInt16 = 2n ** (16n - 1n) - 1n, maxInt24 = 2n ** (24n - 1n) - 1n, maxInt32 = 2n ** (32n - 1n) - 1n, maxInt40 = 2n ** (40n - 1n) - 1n, maxInt48 = 2n ** (48n - 1n) - 1n, maxInt56 = 2n ** (56n - 1n) - 1n, maxInt64 = 2n ** (64n - 1n) - 1n, maxInt72 = 2n ** (72n - 1n) - 1n, maxInt80 = 2n ** (80n - 1n) - 1n, maxInt88 = 2n ** (88n - 1n) - 1n, maxInt96 = 2n ** (96n - 1n) - 1n, maxInt104 = 2n ** (104n - 1n) - 1n, maxInt112 = 2n ** (112n - 1n) - 1n, maxInt120 = 2n ** (120n - 1n) - 1n, maxInt128 = 2n ** (128n - 1n) - 1n, maxInt136 = 2n ** (136n - 1n) - 1n, maxInt144 = 2n ** (144n - 1n) - 1n, maxInt152 = 2n ** (152n - 1n) - 1n, maxInt160 = 2n ** (160n - 1n) - 1n, maxInt168 = 2n ** (168n - 1n) - 1n, maxInt176 = 2n ** (176n - 1n) - 1n, maxInt184 = 2n ** (184n - 1n) - 1n, maxInt192 = 2n ** (192n - 1n) - 1n, maxInt200 = 2n ** (200n - 1n) - 1n, maxInt208 = 2n ** (208n - 1n) - 1n, maxInt216 = 2n ** (216n - 1n) - 1n, maxInt224 = 2n ** (224n - 1n) - 1n, maxInt232 = 2n ** (232n - 1n) - 1n, maxInt240 = 2n ** (240n - 1n) - 1n, maxInt248 = 2n ** (248n - 1n) - 1n, maxInt256 = 2n ** (256n - 1n) - 1n, minInt8 = -(2n ** (8n - 1n)), minInt16 = -(2n ** (16n - 1n)), minInt24 = -(2n ** (24n - 1n)), minInt32 = -(2n ** (32n - 1n)), minInt40 = -(2n ** (40n - 1n)), minInt48 = -(2n ** (48n - 1n)), minInt56 = -(2n ** (56n - 1n)), minInt64 = -(2n ** (64n - 1n)), minInt72 = -(2n ** (72n - 1n)), minInt80 = -(2n ** (80n - 1n)), minInt88 = -(2n ** (88n - 1n)), minInt96 = -(2n ** (96n - 1n)), minInt104 = -(2n ** (104n - 1n)), minInt112 = -(2n ** (112n - 1n)), minInt120 = -(2n ** (120n - 1n)), minInt128 = -(2n ** (128n - 1n)), minInt136 = -(2n ** (136n - 1n)), minInt144 = -(2n ** (144n - 1n)), minInt152 = -(2n ** (152n - 1n)), minInt160 = -(2n ** (160n - 1n)), minInt168 = -(2n ** (168n - 1n)), minInt176 = -(2n ** (176n - 1n)), minInt184 = -(2n ** (184n - 1n)), minInt192 = -(2n ** (192n - 1n)), minInt200 = -(2n ** (200n - 1n)), minInt208 = -(2n ** (208n - 1n)), minInt216 = -(2n ** (216n - 1n)), minInt224 = -(2n ** (224n - 1n)), minInt232 = -(2n ** (232n - 1n)), minInt240 = -(2n ** (240n - 1n)), minInt248 = -(2n ** (248n - 1n)), minInt256 = -(2n ** (256n - 1n)), maxUint8 = 2n ** 8n - 1n, maxUint16 = 2n ** 16n - 1n, maxUint24 = 2n ** 24n - 1n, maxUint32 = 2n ** 32n - 1n, maxUint40 = 2n ** 40n - 1n, maxUint48 = 2n ** 48n - 1n, maxUint56 = 2n ** 56n - 1n, maxUint64 = 2n ** 64n - 1n, maxUint72 = 2n ** 72n - 1n, maxUint80 = 2n ** 80n - 1n, maxUint88 = 2n ** 88n - 1n, maxUint96 = 2n ** 96n - 1n, maxUint104 = 2n ** 104n - 1n, maxUint112 = 2n ** 112n - 1n, maxUint120 = 2n ** 120n - 1n, maxUint128 = 2n ** 128n - 1n, maxUint136 = 2n ** 136n - 1n, maxUint144 = 2n ** 144n - 1n, maxUint152 = 2n ** 152n - 1n, maxUint160 = 2n ** 160n - 1n, maxUint168 = 2n ** 168n - 1n, maxUint176 = 2n ** 176n - 1n, maxUint184 = 2n ** 184n - 1n, maxUint192 = 2n ** 192n - 1n, maxUint200 = 2n ** 200n - 1n, maxUint208 = 2n ** 208n - 1n, maxUint216 = 2n ** 216n - 1n, maxUint224 = 2n ** 224n - 1n, maxUint232 = 2n ** 232n - 1n, maxUint240 = 2n ** 240n - 1n, maxUint248 = 2n ** 248n - 1n, maxUint256 = 2n ** 256n - 1n;
  }
});

// node_modules/viem/_esm/utils/address/isAddressEqual.js
function isAddressEqual(a, b) {
  if (!isAddress(a, { strict: !1 }))
    throw new InvalidAddressError({ address: a });
  if (!isAddress(b, { strict: !1 }))
    throw new InvalidAddressError({ address: b });
  return a.toLowerCase() === b.toLowerCase();
}
var init_isAddressEqual = __esm({
  "node_modules/viem/_esm/utils/address/isAddressEqual.js"() {
    init_address();
    init_isAddress();
  }
});

// node_modules/viem/_esm/errors/chain.js
var InvalidChainIdError, init_chain = __esm({
  "node_modules/viem/_esm/errors/chain.js"() {
    init_base();
    InvalidChainIdError = class extends BaseError {
      constructor({ chainId }) {
        super(typeof chainId == "number" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
      }
    };
  }
});

// node_modules/postgres-array/index.js
var require_postgres_array = __commonJS({
  "node_modules/postgres-array/index.js"(exports) {
    "use strict";
    exports.parse = function(source, transform) {
      return new ArrayParser(source, transform).parse();
    };
    var ArrayParser = class _ArrayParser {
      constructor(source, transform) {
        this.source = source, this.transform = transform || identity, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
      }
      isEof() {
        return this.position >= this.source.length;
      }
      nextCharacter() {
        var character = this.source[this.position++];
        return character === "\\" ? {
          value: this.source[this.position++],
          escaped: !0
        } : {
          value: character,
          escaped: !1
        };
      }
      record(character) {
        this.recorded.push(character);
      }
      newEntry(includeEmpty) {
        var entry;
        (this.recorded.length > 0 || includeEmpty) && (entry = this.recorded.join(""), entry === "NULL" && !includeEmpty && (entry = null), entry !== null && (entry = this.transform(entry)), this.entries.push(entry), this.recorded = []);
      }
      consumeDimensions() {
        if (this.source[0] === "[")
          for (; !this.isEof(); ) {
            var char = this.nextCharacter();
            if (char.value === "=") break;
          }
      }
      parse(nested) {
        var character, parser, quote2;
        for (this.consumeDimensions(); !this.isEof(); )
          if (character = this.nextCharacter(), character.value === "{" && !quote2)
            this.dimension++, this.dimension > 1 && (parser = new _ArrayParser(this.source.substr(this.position - 1), this.transform), this.entries.push(parser.parse(!0)), this.position += parser.position - 2);
          else if (character.value === "}" && !quote2) {
            if (this.dimension--, !this.dimension && (this.newEntry(), nested))
              return this.entries;
          } else character.value === '"' && !character.escaped ? (quote2 && this.newEntry(!0), quote2 = !quote2) : character.value === "," && !quote2 ? this.newEntry() : this.record(character.value);
        if (this.dimension !== 0)
          throw new Error("array dimension not balanced");
        return this.entries;
      }
    };
    function identity(value) {
      return value;
    }
  }
});

// node_modules/pg-types/lib/arrayParser.js
var require_arrayParser = __commonJS({
  "node_modules/pg-types/lib/arrayParser.js"(exports, module) {
    var array = require_postgres_array();
    module.exports = {
      create: function(source, transform) {
        return {
          parse: function() {
            return array.parse(source, transform);
          }
        };
      }
    };
  }
});

// node_modules/postgres-date/index.js
var require_postgres_date = __commonJS({
  "node_modules/postgres-date/index.js"(exports, module) {
    "use strict";
    var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, DATE = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, INFINITY = /^-?infinity$/;
    module.exports = function(isoDate) {
      if (INFINITY.test(isoDate))
        return Number(isoDate.replace("i", "I"));
      var matches = DATE_TIME.exec(isoDate);
      if (!matches)
        return getDate(isoDate) || null;
      var isBC = !!matches[8], year = parseInt(matches[1], 10);
      isBC && (year = bcYearToNegativeYear(year));
      var month = parseInt(matches[2], 10) - 1, day = matches[3], hour = parseInt(matches[4], 10), minute = parseInt(matches[5], 10), second = parseInt(matches[6], 10), ms = matches[7];
      ms = ms ? 1e3 * parseFloat(ms) : 0;
      var date, offset = timeZoneOffset(isoDate);
      return offset != null ? (date = new Date(Date.UTC(year, month, day, hour, minute, second, ms)), is0To99(year) && date.setUTCFullYear(year), offset !== 0 && date.setTime(date.getTime() - offset)) : (date = new Date(year, month, day, hour, minute, second, ms), is0To99(year) && date.setFullYear(year)), date;
    };
    function getDate(isoDate) {
      var matches = DATE.exec(isoDate);
      if (matches) {
        var year = parseInt(matches[1], 10), isBC = !!matches[4];
        isBC && (year = bcYearToNegativeYear(year));
        var month = parseInt(matches[2], 10) - 1, day = matches[3], date = new Date(year, month, day);
        return is0To99(year) && date.setFullYear(year), date;
      }
    }
    function timeZoneOffset(isoDate) {
      if (isoDate.endsWith("+00"))
        return 0;
      var zone = TIME_ZONE.exec(isoDate.split(" ")[1]);
      if (zone) {
        var type = zone[1];
        if (type === "Z")
          return 0;
        var sign2 = type === "-" ? -1 : 1, offset = parseInt(zone[2], 10) * 3600 + parseInt(zone[3] || 0, 10) * 60 + parseInt(zone[4] || 0, 10);
        return offset * sign2 * 1e3;
      }
    }
    function bcYearToNegativeYear(year) {
      return -(year - 1);
    }
    function is0To99(num2) {
      return num2 >= 0 && num2 < 100;
    }
  }
});

// node_modules/xtend/mutable.js
var require_mutable = __commonJS({
  "node_modules/xtend/mutable.js"(exports, module) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key2 in source)
          hasOwnProperty.call(source, key2) && (target[key2] = source[key2]);
      }
      return target;
    }
  }
});

// node_modules/postgres-interval/index.js
var require_postgres_interval = __commonJS({
  "node_modules/postgres-interval/index.js"(exports, module) {
    "use strict";
    var extend = require_mutable();
    module.exports = PostgresInterval;
    function PostgresInterval(raw) {
      if (!(this instanceof PostgresInterval))
        return new PostgresInterval(raw);
      extend(this, parse(raw));
    }
    var properties = ["seconds", "minutes", "hours", "days", "months", "years"];
    PostgresInterval.prototype.toPostgres = function() {
      var filtered = properties.filter(this.hasOwnProperty, this);
      return this.milliseconds && filtered.indexOf("seconds") < 0 && filtered.push("seconds"), filtered.length === 0 ? "0" : filtered.map(function(property) {
        var value = this[property] || 0;
        return property === "seconds" && this.milliseconds && (value = (value + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, "")), value + " " + property;
      }, this).join(" ");
    };
    var propertiesISOEquivalent = {
      years: "Y",
      months: "M",
      days: "D",
      hours: "H",
      minutes: "M",
      seconds: "S"
    }, dateProperties = ["years", "months", "days"], timeProperties = ["hours", "minutes", "seconds"];
    PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function() {
      var datePart = dateProperties.map(buildProperty, this).join(""), timePart = timeProperties.map(buildProperty, this).join("");
      return "P" + datePart + "T" + timePart;
      function buildProperty(property) {
        var value = this[property] || 0;
        return property === "seconds" && this.milliseconds && (value = (value + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "")), value + propertiesISOEquivalent[property];
      }
    };
    var NUMBER = "([+-]?\\d+)", YEAR = NUMBER + "\\s+years?", MONTH = NUMBER + "\\s+mons?", DAY = NUMBER + "\\s+days?", TIME = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?", INTERVAL = new RegExp([YEAR, MONTH, DAY, TIME].map(function(regexString) {
      return "(" + regexString + ")?";
    }).join("\\s*")), positions = {
      years: 2,
      months: 4,
      days: 6,
      hours: 9,
      minutes: 10,
      seconds: 11,
      milliseconds: 12
    }, negatives = ["hours", "minutes", "seconds", "milliseconds"];
    function parseMilliseconds(fraction) {
      var microseconds = fraction + "000000".slice(fraction.length);
      return parseInt(microseconds, 10) / 1e3;
    }
    function parse(interval) {
      if (!interval) return {};
      var matches = INTERVAL.exec(interval), isNegative = matches[8] === "-";
      return Object.keys(positions).reduce(function(parsed, property) {
        var position = positions[property], value = matches[position];
        return !value || (value = property === "milliseconds" ? parseMilliseconds(value) : parseInt(value, 10), !value) || (isNegative && ~negatives.indexOf(property) && (value *= -1), parsed[property] = value), parsed;
      }, {});
    }
  }
});

// node_modules/postgres-bytea/index.js
var require_postgres_bytea = __commonJS({
  "node_modules/postgres-bytea/index.js"(exports, module) {
    "use strict";
    var bufferFrom = Buffer.from || Buffer;
    module.exports = function(input) {
      if (/^\\x/.test(input))
        return bufferFrom(input.substr(2), "hex");
      for (var output = "", i = 0; i < input.length; )
        if (input[i] !== "\\")
          output += input[i], ++i;
        else if (/[0-7]{3}/.test(input.substr(i + 1, 3)))
          output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8)), i += 4;
        else {
          for (var backslashes = 1; i + backslashes < input.length && input[i + backslashes] === "\\"; )
            backslashes++;
          for (var k = 0; k < Math.floor(backslashes / 2); ++k)
            output += "\\";
          i += Math.floor(backslashes / 2) * 2;
        }
      return bufferFrom(output, "binary");
    };
  }
});

// node_modules/pg-types/lib/textParsers.js
var require_textParsers = __commonJS({
  "node_modules/pg-types/lib/textParsers.js"(exports, module) {
    var array = require_postgres_array(), arrayParser = require_arrayParser(), parseDate = require_postgres_date(), parseInterval = require_postgres_interval(), parseByteA = require_postgres_bytea();
    function allowNull(fn) {
      return function(value) {
        return value === null ? value : fn(value);
      };
    }
    function parseBool(value) {
      return value === null ? value : value === "TRUE" || value === "t" || value === "true" || value === "y" || value === "yes" || value === "on" || value === "1";
    }
    function parseBoolArray(value) {
      return value ? array.parse(value, parseBool) : null;
    }
    function parseBaseTenInt(string) {
      return parseInt(string, 10);
    }
    function parseIntegerArray(value) {
      return value ? array.parse(value, allowNull(parseBaseTenInt)) : null;
    }
    function parseBigIntegerArray(value) {
      return value ? array.parse(value, allowNull(function(entry) {
        return parseBigInteger(entry).trim();
      })) : null;
    }
    var parsePointArray = function(value) {
      if (!value)
        return null;
      var p = arrayParser.create(value, function(entry) {
        return entry !== null && (entry = parsePoint(entry)), entry;
      });
      return p.parse();
    }, parseFloatArray = function(value) {
      if (!value)
        return null;
      var p = arrayParser.create(value, function(entry) {
        return entry !== null && (entry = parseFloat(entry)), entry;
      });
      return p.parse();
    }, parseStringArray = function(value) {
      if (!value)
        return null;
      var p = arrayParser.create(value);
      return p.parse();
    }, parseDateArray = function(value) {
      if (!value)
        return null;
      var p = arrayParser.create(value, function(entry) {
        return entry !== null && (entry = parseDate(entry)), entry;
      });
      return p.parse();
    }, parseIntervalArray = function(value) {
      if (!value)
        return null;
      var p = arrayParser.create(value, function(entry) {
        return entry !== null && (entry = parseInterval(entry)), entry;
      });
      return p.parse();
    }, parseByteAArray = function(value) {
      return value ? array.parse(value, allowNull(parseByteA)) : null;
    }, parseInteger = function(value) {
      return parseInt(value, 10);
    }, parseBigInteger = function(value) {
      var valStr = String(value);
      return /^\d+$/.test(valStr) ? valStr : value;
    }, parseJsonArray = function(value) {
      return value ? array.parse(value, allowNull(JSON.parse)) : null;
    }, parsePoint = function(value) {
      return value[0] !== "(" ? null : (value = value.substring(1, value.length - 1).split(","), {
        x: parseFloat(value[0]),
        y: parseFloat(value[1])
      });
    }, parseCircle = function(value) {
      if (value[0] !== "<" && value[1] !== "(")
        return null;
      for (var point = "(", radius = "", pointParsed = !1, i = 2; i < value.length - 1; i++) {
        if (pointParsed || (point += value[i]), value[i] === ")") {
          pointParsed = !0;
          continue;
        } else if (!pointParsed)
          continue;
        value[i] !== "," && (radius += value[i]);
      }
      var result2 = parsePoint(point);
      return result2.radius = parseFloat(radius), result2;
    }, init = function(register) {
      register(20, parseBigInteger), register(21, parseInteger), register(23, parseInteger), register(26, parseInteger), register(700, parseFloat), register(701, parseFloat), register(16, parseBool), register(1082, parseDate), register(1114, parseDate), register(1184, parseDate), register(600, parsePoint), register(651, parseStringArray), register(718, parseCircle), register(1e3, parseBoolArray), register(1001, parseByteAArray), register(1005, parseIntegerArray), register(1007, parseIntegerArray), register(1028, parseIntegerArray), register(1016, parseBigIntegerArray), register(1017, parsePointArray), register(1021, parseFloatArray), register(1022, parseFloatArray), register(1231, parseFloatArray), register(1014, parseStringArray), register(1015, parseStringArray), register(1008, parseStringArray), register(1009, parseStringArray), register(1040, parseStringArray), register(1041, parseStringArray), register(1115, parseDateArray), register(1182, parseDateArray), register(1185, parseDateArray), register(1186, parseInterval), register(1187, parseIntervalArray), register(17, parseByteA), register(114, JSON.parse.bind(JSON)), register(3802, JSON.parse.bind(JSON)), register(199, parseJsonArray), register(3807, parseJsonArray), register(3907, parseStringArray), register(2951, parseStringArray), register(791, parseStringArray), register(1183, parseStringArray), register(1270, parseStringArray);
    };
    module.exports = {
      init
    };
  }
});

// node_modules/pg-int8/index.js
var require_pg_int8 = __commonJS({
  "node_modules/pg-int8/index.js"(exports, module) {
    "use strict";
    var BASE = 1e6;
    function readInt8(buffer2) {
      var high = buffer2.readInt32BE(0), low = buffer2.readUInt32BE(4), sign2 = "";
      high < 0 && (high = ~high + (low === 0), low = ~low + 1 >>> 0, sign2 = "-");
      var result2 = "", carry2, t, digits, pad2, l, i;
      {
        if (carry2 = high % BASE, high = high / BASE >>> 0, t = 4294967296 * carry2 + low, low = t / BASE >>> 0, digits = "" + (t - BASE * low), low === 0 && high === 0)
          return sign2 + digits + result2;
        for (pad2 = "", l = 6 - digits.length, i = 0; i < l; i++)
          pad2 += "0";
        result2 = pad2 + digits + result2;
      }
      {
        if (carry2 = high % BASE, high = high / BASE >>> 0, t = 4294967296 * carry2 + low, low = t / BASE >>> 0, digits = "" + (t - BASE * low), low === 0 && high === 0)
          return sign2 + digits + result2;
        for (pad2 = "", l = 6 - digits.length, i = 0; i < l; i++)
          pad2 += "0";
        result2 = pad2 + digits + result2;
      }
      {
        if (carry2 = high % BASE, high = high / BASE >>> 0, t = 4294967296 * carry2 + low, low = t / BASE >>> 0, digits = "" + (t - BASE * low), low === 0 && high === 0)
          return sign2 + digits + result2;
        for (pad2 = "", l = 6 - digits.length, i = 0; i < l; i++)
          pad2 += "0";
        result2 = pad2 + digits + result2;
      }
      return carry2 = high % BASE, t = 4294967296 * carry2 + low, digits = "" + t % BASE, sign2 + digits + result2;
    }
    module.exports = readInt8;
  }
});

// node_modules/pg-types/lib/binaryParsers.js
var require_binaryParsers = __commonJS({
  "node_modules/pg-types/lib/binaryParsers.js"(exports, module) {
    var parseInt64 = require_pg_int8(), parseBits = function(data, bits, offset, invert2, callback) {
      offset = offset || 0, invert2 = invert2 || !1, callback = callback || function(lastValue, newValue, bits2) {
        return lastValue * Math.pow(2, bits2) + newValue;
      };
      var offsetBytes = offset >> 3, inv = function(value) {
        return invert2 ? ~value & 255 : value;
      }, mask = 255, firstBits = 8 - offset % 8;
      bits < firstBits && (mask = 255 << 8 - bits & 255, firstBits = bits), offset && (mask = mask >> offset % 8);
      var result2 = 0;
      offset % 8 + bits >= 8 && (result2 = callback(0, inv(data[offsetBytes]) & mask, firstBits));
      for (var bytes = bits + offset >> 3, i = offsetBytes + 1; i < bytes; i++)
        result2 = callback(result2, inv(data[i]), 8);
      var lastBits = (bits + offset) % 8;
      return lastBits > 0 && (result2 = callback(result2, inv(data[bytes]) >> 8 - lastBits, lastBits)), result2;
    }, parseFloatFromBits = function(data, precisionBits, exponentBits) {
      var bias = Math.pow(2, exponentBits - 1) - 1, sign2 = parseBits(data, 1), exponent = parseBits(data, exponentBits, 1);
      if (exponent === 0)
        return 0;
      var precisionBitsCounter = 1, parsePrecisionBits = function(lastValue, newValue, bits) {
        lastValue === 0 && (lastValue = 1);
        for (var i = 1; i <= bits; i++)
          precisionBitsCounter /= 2, (newValue & 1 << bits - i) > 0 && (lastValue += precisionBitsCounter);
        return lastValue;
      }, mantissa = parseBits(data, precisionBits, exponentBits + 1, !1, parsePrecisionBits);
      return exponent == Math.pow(2, exponentBits + 1) - 1 ? mantissa === 0 ? sign2 === 0 ? 1 / 0 : -1 / 0 : NaN : (sign2 === 0 ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
    }, parseInt16 = function(value) {
      return parseBits(value, 1) == 1 ? -1 * (parseBits(value, 15, 1, !0) + 1) : parseBits(value, 15, 1);
    }, parseInt32 = function(value) {
      return parseBits(value, 1) == 1 ? -1 * (parseBits(value, 31, 1, !0) + 1) : parseBits(value, 31, 1);
    }, parseFloat32 = function(value) {
      return parseFloatFromBits(value, 23, 8);
    }, parseFloat64 = function(value) {
      return parseFloatFromBits(value, 52, 11);
    }, parseNumeric = function(value) {
      var sign2 = parseBits(value, 16, 32);
      if (sign2 == 49152)
        return NaN;
      for (var weight = Math.pow(1e4, parseBits(value, 16, 16)), result2 = 0, digits = [], ndigits = parseBits(value, 16), i = 0; i < ndigits; i++)
        result2 += parseBits(value, 16, 64 + 16 * i) * weight, weight /= 1e4;
      var scale = Math.pow(10, parseBits(value, 16, 48));
      return (sign2 === 0 ? 1 : -1) * Math.round(result2 * scale) / scale;
    }, parseDate = function(isUTC, value) {
      var sign2 = parseBits(value, 1), rawValue = parseBits(value, 63, 1), result2 = new Date((sign2 === 0 ? 1 : -1) * rawValue / 1e3 + 9466848e5);
      return isUTC || result2.setTime(result2.getTime() + result2.getTimezoneOffset() * 6e4), result2.usec = rawValue % 1e3, result2.getMicroSeconds = function() {
        return this.usec;
      }, result2.setMicroSeconds = function(value2) {
        this.usec = value2;
      }, result2.getUTCMicroSeconds = function() {
        return this.usec;
      }, result2;
    }, parseArray = function(value) {
      for (var dim = parseBits(value, 32), flags = parseBits(value, 32, 32), elementType = parseBits(value, 32, 64), offset = 96, dims = [], i = 0; i < dim; i++)
        dims[i] = parseBits(value, 32, offset), offset += 32, offset += 32;
      var parseElement = function(elementType2) {
        var length = parseBits(value, 32, offset);
        if (offset += 32, length == 4294967295)
          return null;
        var result2;
        if (elementType2 == 23 || elementType2 == 20)
          return result2 = parseBits(value, length * 8, offset), offset += length * 8, result2;
        if (elementType2 == 25)
          return result2 = value.toString(this.encoding, offset >> 3, (offset += length << 3) >> 3), result2;
        console.log("ERROR: ElementType not implemented: " + elementType2);
      }, parse = function(dimension, elementType2) {
        var array = [], i2;
        if (dimension.length > 1) {
          var count = dimension.shift();
          for (i2 = 0; i2 < count; i2++)
            array[i2] = parse(dimension, elementType2);
          dimension.unshift(count);
        } else
          for (i2 = 0; i2 < dimension[0]; i2++)
            array[i2] = parseElement(elementType2);
        return array;
      };
      return parse(dims, elementType);
    }, parseText = function(value) {
      return value.toString("utf8");
    }, parseBool = function(value) {
      return value === null ? null : parseBits(value, 8) > 0;
    }, init = function(register) {
      register(20, parseInt64), register(21, parseInt16), register(23, parseInt32), register(26, parseInt32), register(1700, parseNumeric), register(700, parseFloat32), register(701, parseFloat64), register(16, parseBool), register(1114, parseDate.bind(null, !1)), register(1184, parseDate.bind(null, !0)), register(1e3, parseArray), register(1007, parseArray), register(1016, parseArray), register(1008, parseArray), register(1009, parseArray), register(25, parseText);
    };
    module.exports = {
      init
    };
  }
});

// node_modules/pg-types/lib/builtins.js
var require_builtins = __commonJS({
  "node_modules/pg-types/lib/builtins.js"(exports, module) {
    module.exports = {
      BOOL: 16,
      BYTEA: 17,
      CHAR: 18,
      INT8: 20,
      INT2: 21,
      INT4: 23,
      REGPROC: 24,
      TEXT: 25,
      OID: 26,
      TID: 27,
      XID: 28,
      CID: 29,
      JSON: 114,
      XML: 142,
      PG_NODE_TREE: 194,
      SMGR: 210,
      PATH: 602,
      POLYGON: 604,
      CIDR: 650,
      FLOAT4: 700,
      FLOAT8: 701,
      ABSTIME: 702,
      RELTIME: 703,
      TINTERVAL: 704,
      CIRCLE: 718,
      MACADDR8: 774,
      MONEY: 790,
      MACADDR: 829,
      INET: 869,
      ACLITEM: 1033,
      BPCHAR: 1042,
      VARCHAR: 1043,
      DATE: 1082,
      TIME: 1083,
      TIMESTAMP: 1114,
      TIMESTAMPTZ: 1184,
      INTERVAL: 1186,
      TIMETZ: 1266,
      BIT: 1560,
      VARBIT: 1562,
      NUMERIC: 1700,
      REFCURSOR: 1790,
      REGPROCEDURE: 2202,
      REGOPER: 2203,
      REGOPERATOR: 2204,
      REGCLASS: 2205,
      REGTYPE: 2206,
      UUID: 2950,
      TXID_SNAPSHOT: 2970,
      PG_LSN: 3220,
      PG_NDISTINCT: 3361,
      PG_DEPENDENCIES: 3402,
      TSVECTOR: 3614,
      TSQUERY: 3615,
      GTSVECTOR: 3642,
      REGCONFIG: 3734,
      REGDICTIONARY: 3769,
      JSONB: 3802,
      REGNAMESPACE: 4089,
      REGROLE: 4096
    };
  }
});

// node_modules/pg-types/index.js
var require_pg_types = __commonJS({
  "node_modules/pg-types/index.js"(exports) {
    var textParsers = require_textParsers(), binaryParsers = require_binaryParsers(), arrayParser = require_arrayParser(), builtinTypes = require_builtins();
    exports.getTypeParser = getTypeParser;
    exports.setTypeParser = setTypeParser;
    exports.arrayParser = arrayParser;
    exports.builtins = builtinTypes;
    var typeParsers = {
      text: {},
      binary: {}
    };
    function noParse(val) {
      return String(val);
    }
    function getTypeParser(oid, format2) {
      return format2 = format2 || "text", typeParsers[format2] && typeParsers[format2][oid] || noParse;
    }
    function setTypeParser(oid, format2, parseFn) {
      typeof format2 == "function" && (parseFn = format2, format2 = "text"), typeParsers[format2][oid] = parseFn;
    }
    textParsers.init(function(oid, converter) {
      typeParsers.text[oid] = converter;
    });
    binaryParsers.init(function(oid, converter) {
      typeParsers.binary[oid] = converter;
    });
  }
});

// node_modules/pg/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/pg/lib/defaults.js"(exports, module) {
    "use strict";
    var user;
    try {
      user = process.platform === "win32" ? process.env.USERNAME : process.env.USER;
    } catch {
    }
    module.exports = {
      // database host. defaults to localhost
      host: "localhost",
      // database user's name
      user,
      // name of database to connect
      database: void 0,
      // database user's password
      password: null,
      // a Postgres connection string to be used instead of setting individual connection items
      // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
      // in the defaults object.
      connectionString: void 0,
      // database port
      port: 5432,
      // number of rows to return at a time from a prepared statement's
      // portal. 0 will return all rows at once
      rows: 0,
      // binary result mode
      binary: !1,
      // Connection pool options - see https://github.com/brianc/node-pg-pool
      // number of connections to use in connection pool
      // 0 will disable connection pooling
      max: 10,
      // max milliseconds a client can go unused before it is removed
      // from the pool and destroyed
      idleTimeoutMillis: 3e4,
      client_encoding: "",
      ssl: !1,
      // SSL negotiation style: 'postgres' (traditional SSLRequest) or 'direct'
      sslnegotiation: void 0,
      application_name: void 0,
      fallback_application_name: void 0,
      options: void 0,
      parseInputDatesAsUTC: !1,
      // max milliseconds any query using this connection will execute for before timing out in error.
      // false=unlimited
      statement_timeout: !1,
      // Abort any statement that waits longer than the specified duration in milliseconds while attempting to acquire a lock.
      // false=unlimited
      lock_timeout: !1,
      // Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
      // false=unlimited
      idle_in_transaction_session_timeout: !1,
      // max milliseconds to wait for query to complete (client side)
      query_timeout: !1,
      connect_timeout: 0,
      keepalives: 1,
      keepalives_idle: 0
    };
    var pgTypes = require_pg_types(), parseBigInteger = pgTypes.getTypeParser(20, "text"), parseBigIntegerArray = pgTypes.getTypeParser(1016, "text");
    module.exports.__defineSetter__("parseInt8", function(val) {
      pgTypes.setTypeParser(20, "text", val ? pgTypes.getTypeParser(23, "text") : parseBigInteger), pgTypes.setTypeParser(1016, "text", val ? pgTypes.getTypeParser(1007, "text") : parseBigIntegerArray);
    });
  }
});

// node_modules/pg/lib/utils.js
var require_utils = __commonJS({
  "node_modules/pg/lib/utils.js"(exports, module) {
    "use strict";
    var defaults2 = require_defaults(), nodeUtils = __require("util"), { isDate } = __require("util/types"), invalidDateDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Sending an invalid date to Postgres is deprecated and will throw an error in the next major version of pg. Ensure any Date object passed as a query parameter is valid.",
      "PG_INVALID_DATE"
    );
    function escapeElement(elementRepresentation) {
      return '"' + elementRepresentation.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
    }
    function arrayString(val) {
      let result2 = "{";
      for (let i = 0; i < val.length; i++) {
        i > 0 && (result2 += ",");
        let item = val[i];
        item == null ? result2 += "NULL" : Array.isArray(item) ? result2 += arrayString(item) : ArrayBuffer.isView(item) ? (item instanceof Buffer || (item = Buffer.from(item.buffer, item.byteOffset, item.byteLength)), result2 += "\\\\x" + item.toString("hex")) : result2 += escapeElement(prepareValue(item));
      }
      return result2 += "}", result2;
    }
    var prepareValue = function(val, seen) {
      return val == null ? null : typeof val == "object" ? val instanceof Buffer ? val : ArrayBuffer.isView(val) ? Buffer.from(val.buffer, val.byteOffset, val.byteLength) : isDate(val) ? (isNaN(val.getTime()) && invalidDateDeprecationNotice(), defaults2.parseInputDatesAsUTC ? dateToStringUTC(val) : dateToString(val)) : Array.isArray(val) ? arrayString(val) : prepareObject(val, seen) : val.toString();
    };
    function prepareObject(val, seen) {
      if (val && typeof val.toPostgres == "function") {
        if (seen = seen || [], seen.indexOf(val) !== -1)
          throw new Error('circular reference detected while preparing "' + val + '" for query');
        return seen.push(val), prepareValue(val.toPostgres(prepareValue), seen);
      }
      return JSON.stringify(val);
    }
    function dateToString(date) {
      let offset = -date.getTimezoneOffset(), year = date.getFullYear(), isBCYear = year < 1;
      isBCYear && (year = Math.abs(year) + 1);
      let ret = String(year).padStart(4, "0") + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0") + "T" + String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0") + "." + String(date.getMilliseconds()).padStart(3, "0");
      return offset < 0 ? (ret += "-", offset *= -1) : ret += "+", ret += String(Math.floor(offset / 60)).padStart(2, "0") + ":" + String(offset % 60).padStart(2, "0"), isBCYear && (ret += " BC"), ret;
    }
    function dateToStringUTC(date) {
      let year = date.getUTCFullYear(), isBCYear = year < 1;
      isBCYear && (year = Math.abs(year) + 1);
      let ret = String(year).padStart(4, "0") + "-" + String(date.getUTCMonth() + 1).padStart(2, "0") + "-" + String(date.getUTCDate()).padStart(2, "0") + "T" + String(date.getUTCHours()).padStart(2, "0") + ":" + String(date.getUTCMinutes()).padStart(2, "0") + ":" + String(date.getUTCSeconds()).padStart(2, "0") + "." + String(date.getUTCMilliseconds()).padStart(3, "0");
      return ret += "+00:00", isBCYear && (ret += " BC"), ret;
    }
    function normalizeQueryConfig(config, values, callback) {
      return config = typeof config == "string" ? { text: config } : cloneQueryConfig(config), values && (typeof values == "function" ? config.callback = values : config.values = values), callback && (config.callback = callback), config;
    }
    function cloneQueryConfig(config) {
      return config == null ? config : Object.defineProperties(Object.create(Object.getPrototypeOf(config)), Object.getOwnPropertyDescriptors(config));
    }
    var escapeIdentifier2 = function(str) {
      return '"' + str.replace(/"/g, '""') + '"';
    }, escapeLiteral2 = function(str) {
      let hasBackslash = !1, escaped = "'";
      if (str == null || typeof str != "string")
        return "''";
      for (let i = 0; i < str.length; i++) {
        let c = str[i];
        c === "'" ? escaped += c + c : c === "\\" ? (escaped += c + c, hasBackslash = !0) : escaped += c;
      }
      return escaped += "'", hasBackslash === !0 && (escaped = " E" + escaped), escaped;
    };
    module.exports = {
      prepareValue: function(value) {
        return prepareValue(value);
      },
      normalizeQueryConfig,
      escapeIdentifier: escapeIdentifier2,
      escapeLiteral: escapeLiteral2
    };
  }
});

// node_modules/pg/lib/crypto/utils.js
var require_utils2 = __commonJS({
  "node_modules/pg/lib/crypto/utils.js"(exports, module) {
    var nodeCrypto = __require("crypto");
    module.exports = {
      postgresMd5PasswordHash,
      randomBytes: randomBytes2,
      deriveKey,
      sha256: sha2564,
      hashByName,
      hmacSha256,
      md5
    };
    var webCrypto = nodeCrypto.webcrypto || globalThis.crypto, subtleCrypto = webCrypto.subtle, textEncoder = new TextEncoder();
    function randomBytes2(length) {
      return webCrypto.getRandomValues(Buffer.alloc(length));
    }
    async function md5(string) {
      try {
        return nodeCrypto.createHash("md5").update(string, "utf-8").digest("hex");
      } catch {
        let data = typeof string == "string" ? textEncoder.encode(string) : string, hash = await subtleCrypto.digest("MD5", data);
        return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
      }
    }
    async function postgresMd5PasswordHash(user, password, salt) {
      let inner = await md5(password + user);
      return "md5" + await md5(Buffer.concat([Buffer.from(inner), salt]));
    }
    async function sha2564(text) {
      return await subtleCrypto.digest("SHA-256", text);
    }
    async function hashByName(hashName, text) {
      return await subtleCrypto.digest(hashName, text);
    }
    async function hmacSha256(keyBuffer, msg) {
      let key2 = await subtleCrypto.importKey("raw", keyBuffer, { name: "HMAC", hash: "SHA-256" }, !1, ["sign"]);
      return await subtleCrypto.sign("HMAC", key2, textEncoder.encode(msg));
    }
    async function deriveKey(password, salt, iterations) {
      let key2 = await subtleCrypto.importKey("raw", textEncoder.encode(password), "PBKDF2", !1, ["deriveBits"]), params = { name: "PBKDF2", hash: "SHA-256", salt, iterations };
      return await subtleCrypto.deriveBits(params, key2, 256, ["deriveBits"]);
    }
  }
});

// node_modules/pg/lib/crypto/cert-signatures.js
var require_cert_signatures = __commonJS({
  "node_modules/pg/lib/crypto/cert-signatures.js"(exports, module) {
    function x509Error(msg, cert) {
      return new Error("SASL channel binding: " + msg + " when parsing public certificate " + cert.toString("base64"));
    }
    function readASN1Length(data, index2) {
      let length = data[index2++];
      if (length < 128) return { length, index: index2 };
      let lengthBytes = length & 127;
      if (lengthBytes > 4) throw x509Error("bad length", data);
      length = 0;
      for (let i = 0; i < lengthBytes; i++)
        length = length << 8 | data[index2++];
      return { length, index: index2 };
    }
    function readASN1OID(data, index2) {
      if (data[index2++] !== 6) throw x509Error("non-OID data", data);
      let { length: OIDLength, index: indexAfterOIDLength } = readASN1Length(data, index2);
      index2 = indexAfterOIDLength;
      let lastIndex = index2 + OIDLength, byte1 = data[index2++], oid = (byte1 / 40 >> 0) + "." + byte1 % 40;
      for (; index2 < lastIndex; ) {
        let value = 0;
        for (; index2 < lastIndex; ) {
          let nextByte = data[index2++];
          if (value = value << 7 | nextByte & 127, nextByte < 128) break;
        }
        oid += "." + value;
      }
      return { oid, index: index2 };
    }
    function expectASN1Seq(data, index2) {
      if (data[index2++] !== 48) throw x509Error("non-sequence data", data);
      return readASN1Length(data, index2);
    }
    function signatureAlgorithmHashFromCertificate(data, index2) {
      index2 === void 0 && (index2 = 0), index2 = expectASN1Seq(data, index2).index;
      let { length: certInfoLength, index: indexAfterCertInfoLength } = expectASN1Seq(data, index2);
      index2 = indexAfterCertInfoLength + certInfoLength, index2 = expectASN1Seq(data, index2).index;
      let { oid, index: indexAfterOID } = readASN1OID(data, index2);
      switch (oid) {
        // RSA
        case "1.2.840.113549.1.1.4":
          return "MD5";
        case "1.2.840.113549.1.1.5":
          return "SHA-1";
        case "1.2.840.113549.1.1.11":
          return "SHA-256";
        case "1.2.840.113549.1.1.12":
          return "SHA-384";
        case "1.2.840.113549.1.1.13":
          return "SHA-512";
        case "1.2.840.113549.1.1.14":
          return "SHA-224";
        case "1.2.840.113549.1.1.15":
          return "SHA512-224";
        case "1.2.840.113549.1.1.16":
          return "SHA512-256";
        // ECDSA
        case "1.2.840.10045.4.1":
          return "SHA-1";
        case "1.2.840.10045.4.3.1":
          return "SHA-224";
        case "1.2.840.10045.4.3.2":
          return "SHA-256";
        case "1.2.840.10045.4.3.3":
          return "SHA-384";
        case "1.2.840.10045.4.3.4":
          return "SHA-512";
        // RSASSA-PSS: hash is indicated separately
        case "1.2.840.113549.1.1.10": {
          if (index2 = indexAfterOID, index2 = expectASN1Seq(data, index2).index, data[index2++] !== 160) throw x509Error("non-tag data", data);
          index2 = readASN1Length(data, index2).index, index2 = expectASN1Seq(data, index2).index;
          let { oid: hashOID } = readASN1OID(data, index2);
          switch (hashOID) {
            // standalone hash OIDs
            case "1.2.840.113549.2.5":
              return "MD5";
            case "1.3.14.3.2.26":
              return "SHA-1";
            case "2.16.840.1.101.3.4.2.1":
              return "SHA-256";
            case "2.16.840.1.101.3.4.2.2":
              return "SHA-384";
            case "2.16.840.1.101.3.4.2.3":
              return "SHA-512";
          }
          throw x509Error("unknown hash OID " + hashOID, data);
        }
        // Ed25519 -- see https://github.com/openssl/openssl/issues/15477
        case "1.3.101.110":
        case "1.3.101.112":
          return "SHA-512";
        // Ed448 -- still not in pg 17.2 (if supported, digest would be SHAKE256 x 64 bytes)
        case "1.3.101.111":
        case "1.3.101.113":
          throw x509Error("Ed448 certificate channel binding is not currently supported by Postgres");
      }
      throw x509Error("unknown OID " + oid, data);
    }
    module.exports = { signatureAlgorithmHashFromCertificate };
  }
});

// node_modules/pg/lib/crypto/sasl.js
var require_sasl = __commonJS({
  "node_modules/pg/lib/crypto/sasl.js"(exports, module) {
    "use strict";
    var crypto3 = require_utils2(), { signatureAlgorithmHashFromCertificate } = require_cert_signatures();
    function saslprep(password) {
      let nonAsciiSpace = /[\u00A0\u1680\u2000-\u200B\u202F\u205F\u3000]/g, mappedToNothing = /[\u00AD\u034F\u1806\u180B\u180C\u180D\u200C\u200D\u2060\uFE00-\uFE0F\uFEFF]/g;
      return password.replace(nonAsciiSpace, " ").replace(mappedToNothing, "").normalize("NFKC");
    }
    var DEFAULT_MAX_SCRAM_ITERATIONS = 1e5;
    function startSession(mechanisms, stream, scramMaxIterations = DEFAULT_MAX_SCRAM_ITERATIONS) {
      let candidates = ["SCRAM-SHA-256"];
      stream && candidates.unshift("SCRAM-SHA-256-PLUS");
      let mechanism = candidates.find((candidate) => mechanisms.includes(candidate));
      if (!mechanism)
        throw new Error("SASL: Only mechanism(s) " + candidates.join(" and ") + " are supported");
      if (mechanism === "SCRAM-SHA-256-PLUS" && typeof stream.getPeerCertificate != "function")
        throw new Error("SASL: Mechanism SCRAM-SHA-256-PLUS requires a certificate");
      let clientNonce = crypto3.randomBytes(18).toString("base64");
      return {
        mechanism,
        clientNonce,
        response: (mechanism === "SCRAM-SHA-256-PLUS" ? "p=tls-server-end-point" : stream ? "y" : "n") + ",,n=*,r=" + clientNonce,
        message: "SASLInitialResponse",
        scramMaxIterations
      };
    }
    async function continueSession(session, password, serverData, stream) {
      if (session.message !== "SASLInitialResponse")
        throw new Error("SASL: Last message was not SASLInitialResponse");
      if (typeof password != "string")
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
      if (password === "")
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a non-empty string");
      if (typeof serverData != "string")
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
      let sv = parseServerFirstMessage(serverData);
      if (sv.nonce.startsWith(session.clientNonce)) {
        if (sv.nonce.length === session.clientNonce.length)
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
      } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
      let scramMaxIterations = typeof session.scramMaxIterations == "number" ? session.scramMaxIterations : DEFAULT_MAX_SCRAM_ITERATIONS;
      if (scramMaxIterations !== 0 && sv.iteration > scramMaxIterations)
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration count " + sv.iteration + " exceeds scramMaxIterations of " + scramMaxIterations
        );
      let clientFirstMessageBare = "n=*,r=" + session.clientNonce, serverFirstMessage = "r=" + sv.nonce + ",s=" + sv.salt + ",i=" + sv.iteration, channelBinding = stream ? "eSws" : "biws";
      if (session.mechanism === "SCRAM-SHA-256-PLUS") {
        let peerCert = stream.getPeerCertificate().raw, hashName = signatureAlgorithmHashFromCertificate(peerCert);
        (hashName === "MD5" || hashName === "SHA-1") && (hashName = "SHA-256");
        let certHash = await crypto3.hashByName(hashName, peerCert);
        channelBinding = Buffer.concat([Buffer.from("p=tls-server-end-point,,"), Buffer.from(certHash)]).toString("base64");
      }
      let clientFinalMessageWithoutProof = "c=" + channelBinding + ",r=" + sv.nonce, authMessage = clientFirstMessageBare + "," + serverFirstMessage + "," + clientFinalMessageWithoutProof, saltBytes = Buffer.from(sv.salt, "base64"), saltedPassword = await crypto3.deriveKey(saslprep(password), saltBytes, sv.iteration), clientKey = await crypto3.hmacSha256(saltedPassword, "Client Key"), storedKey = await crypto3.sha256(clientKey), clientSignature = await crypto3.hmacSha256(storedKey, authMessage), clientProof = xorBuffers(Buffer.from(clientKey), Buffer.from(clientSignature)).toString("base64"), serverKey = await crypto3.hmacSha256(saltedPassword, "Server Key"), serverSignatureBytes = await crypto3.hmacSha256(serverKey, authMessage);
      session.message = "SASLResponse", session.serverSignature = Buffer.from(serverSignatureBytes).toString("base64"), session.response = clientFinalMessageWithoutProof + ",p=" + clientProof;
    }
    function finalizeSession(session, serverData) {
      if (session.message !== "SASLResponse")
        throw new Error("SASL: Last message was not SASLResponse");
      if (typeof serverData != "string")
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
      let { serverSignature } = parseServerFinalMessage(serverData);
      if (serverSignature !== session.serverSignature)
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
    }
    function isPrintableChars(text) {
      if (typeof text != "string")
        throw new TypeError("SASL: text must be a string");
      return text.split("").map((_, i) => text.charCodeAt(i)).every((c) => c >= 33 && c <= 43 || c >= 45 && c <= 126);
    }
    function isBase64(text) {
      return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(text);
    }
    function parseAttributePairs(text) {
      if (typeof text != "string")
        throw new TypeError("SASL: attribute pairs text must be a string");
      return new Map(
        text.split(",").map((attrValue) => {
          if (!/^.=/.test(attrValue))
            throw new Error("SASL: Invalid attribute pair entry");
          let name = attrValue[0], value = attrValue.substring(2);
          return [name, value];
        })
      );
    }
    function parseServerFirstMessage(data) {
      let attrPairs = parseAttributePairs(data), nonce2 = attrPairs.get("r");
      if (nonce2) {
        if (!isPrintableChars(nonce2))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
      } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
      let salt = attrPairs.get("s");
      if (salt) {
        if (!isBase64(salt))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
      } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
      let iterationText = attrPairs.get("i");
      if (iterationText) {
        if (!/^[1-9][0-9]*$/.test(iterationText))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
      } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
      let iteration = parseInt(iterationText, 10);
      return {
        nonce: nonce2,
        salt,
        iteration
      };
    }
    function parseServerFinalMessage(serverData) {
      let attrPairs = parseAttributePairs(serverData), error = attrPairs.get("e"), serverSignature = attrPairs.get("v");
      if (error)
        throw new Error(`SASL: SCRAM-SERVER-FINAL-MESSAGE: server returned error: "${error}"`);
      if (serverSignature) {
        if (!isBase64(serverSignature))
          throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
      } else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
      return {
        serverSignature
      };
    }
    function xorBuffers(a, b) {
      if (!Buffer.isBuffer(a))
        throw new TypeError("first argument must be a Buffer");
      if (!Buffer.isBuffer(b))
        throw new TypeError("second argument must be a Buffer");
      if (a.length !== b.length)
        throw new Error("Buffer lengths must match");
      if (a.length === 0)
        throw new Error("Buffers cannot be empty");
      return Buffer.from(a.map((_, i) => a[i] ^ b[i]));
    }
    module.exports = {
      startSession,
      continueSession,
      finalizeSession,
      DEFAULT_MAX_SCRAM_ITERATIONS
    };
  }
});

// node_modules/pg/lib/type-overrides.js
var require_type_overrides = __commonJS({
  "node_modules/pg/lib/type-overrides.js"(exports, module) {
    "use strict";
    var types2 = require_pg_types();
    function TypeOverrides2(userTypes) {
      this._types = userTypes || types2, this.text = {}, this.binary = {};
    }
    TypeOverrides2.prototype.getOverrides = function(format2) {
      switch (format2) {
        case "text":
          return this.text;
        case "binary":
          return this.binary;
        default:
          return {};
      }
    };
    TypeOverrides2.prototype.setTypeParser = function(oid, format2, parseFn) {
      typeof format2 == "function" && (parseFn = format2, format2 = "text"), this.getOverrides(format2)[oid] = parseFn;
    };
    TypeOverrides2.prototype.getTypeParser = function(oid, format2) {
      return format2 = format2 || "text", this.getOverrides(format2)[oid] || this._types.getTypeParser(oid, format2);
    };
    module.exports = TypeOverrides2;
  }
});

// node_modules/pg-connection-string/index.js
var require_pg_connection_string = __commonJS({
  "node_modules/pg-connection-string/index.js"(exports, module) {
    "use strict";
    function parse(str, options = {}) {
      if (str.charAt(0) === "/") {
        let config2 = str.split(" ");
        return { host: config2[0], database: config2[1] };
      }
      let config = /* @__PURE__ */ Object.create(null), result2, dummyHost = !1;
      / |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str) && (str = encodeURI(str).replace(/%25(\d\d)/g, "%$1"));
      try {
        try {
          result2 = new URL(str, "postgres://base");
        } catch {
          result2 = new URL(str.replace("@/", "@___DUMMY___/"), "postgres://base"), dummyHost = !0;
        }
      } catch (err) {
        throw err.input && (err.input = "*****REDACTED*****"), err;
      }
      for (let entry of result2.searchParams.entries())
        config[entry[0]] = entry[1];
      if (config.user = config.user || decodeURIComponent(result2.username), config.password = config.password || decodeURIComponent(result2.password), result2.protocol == "socket:")
        return config.host = decodeURI(result2.pathname), config.database = result2.searchParams.get("db"), config.client_encoding = result2.searchParams.get("encoding"), config;
      let hostname = (dummyHost ? "" : result2.hostname).replace(/^\[(.+)\]$/, "$1");
      config.host ? hostname && /^%2f/i.test(hostname) && (result2.pathname = hostname + result2.pathname) : config.host = decodeURIComponent(hostname), config.port || (config.port = result2.port);
      let pathname = result2.pathname.slice(1) || null;
      config.database = pathname ? decodeURI(pathname) : null, (config.ssl === "true" || config.ssl === "1") && (config.ssl = !0), config.ssl === "0" && (config.ssl = !1), (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) && (config.ssl = {}), config.sslnegotiation === "direct" && config.ssl === void 0 && (config.ssl = !0);
      let fs = config.sslcert || config.sslkey || config.sslrootcert ? __require("fs") : null;
      if (config.sslcert && (config.ssl.cert = fs.readFileSync(config.sslcert).toString()), config.sslkey && (config.ssl.key = fs.readFileSync(config.sslkey).toString()), config.sslrootcert && (config.ssl.ca = fs.readFileSync(config.sslrootcert).toString()), options.useLibpqCompat && config.uselibpqcompat)
        throw new Error("Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.");
      if (config.uselibpqcompat === "true" || options.useLibpqCompat)
        switch (config.sslmode) {
          case "disable": {
            config.ssl = !1;
            break;
          }
          case "prefer": {
            config.ssl.rejectUnauthorized = !1;
            break;
          }
          case "require": {
            config.sslrootcert ? config.ssl.checkServerIdentity = function() {
            } : config.ssl.rejectUnauthorized = !1;
            break;
          }
          case "verify-ca": {
            if (!config.ssl.ca)
              throw new Error(
                "SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security."
              );
            config.ssl.checkServerIdentity = function() {
            };
            break;
          }
          case "verify-full":
            break;
        }
      else
        switch (config.sslmode) {
          case "disable": {
            config.ssl = !1;
            break;
          }
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full": {
            config.sslmode !== "verify-full" && deprecatedSslModeWarning(config.sslmode);
            break;
          }
          case "no-verify": {
            config.ssl.rejectUnauthorized = !1;
            break;
          }
        }
      return config;
    }
    function toConnectionOptions(sslConfig) {
      return Object.entries(sslConfig).reduce((c, [key2, value]) => (value != null && (c[key2] = value), c), /* @__PURE__ */ Object.create(null));
    }
    function toClientConfig(config) {
      return Object.entries(config).reduce((c, [key2, value]) => {
        if (key2 === "ssl") {
          let sslConfig = value;
          typeof sslConfig == "boolean" && (c[key2] = sslConfig), typeof sslConfig == "object" && (c[key2] = toConnectionOptions(sslConfig));
        } else if (value != null)
          if (key2 === "port") {
            if (value !== "") {
              let v = parseInt(value, 10);
              if (isNaN(v))
                throw new Error(`Invalid ${key2}: ${value}`);
              c[key2] = v;
            }
          } else
            c[key2] = value;
        return c;
      }, /* @__PURE__ */ Object.create(null));
    }
    function parseIntoClientConfig(str) {
      return toClientConfig(parse(str));
    }
    function deprecatedSslModeWarning(sslmode) {
      !deprecatedSslModeWarning.warned && typeof process < "u" && process.emitWarning && (deprecatedSslModeWarning.warned = !0, process.emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${sslmode}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`));
    }
    module.exports = parse;
    parse.parse = parse;
    parse.toClientConfig = toClientConfig;
    parse.parseIntoClientConfig = parseIntoClientConfig;
  }
});

// node_modules/pg/lib/connection-parameters.js
var require_connection_parameters = __commonJS({
  "node_modules/pg/lib/connection-parameters.js"(exports, module) {
    "use strict";
    var dns = __require("dns"), defaults2 = require_defaults(), parse = require_pg_connection_string().parse, val = function(key2, config, envVar) {
      return config[key2] ? config[key2] : (envVar === void 0 ? envVar = process.env["PG" + key2.toUpperCase()] : envVar === !1 || (envVar = process.env[envVar]), envVar || defaults2[key2]);
    }, readSSLConfigFromEnvironment = function() {
      switch (process.env.PGSSLMODE) {
        case "disable":
          return !1;
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          return !0;
        case "no-verify":
          return { rejectUnauthorized: !1 };
      }
      return defaults2.ssl;
    }, quoteParamValue = function(value) {
      return "'" + ("" + value).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    }, add = function(params, config, paramName) {
      let value = config[paramName];
      value != null && params.push(paramName + "=" + quoteParamValue(value));
    }, ConnectionParameters = class {
      constructor(config) {
        if (config = typeof config == "string" ? parse(config) : config || {}, config.connectionString && (config = Object.assign({}, config, parse(config.connectionString))), this.user = val("user", config), this.database = val("database", config), this.database === void 0 && (this.database = this.user), this.port = parseInt(val("port", config), 10), this.host = val("host", config), Object.defineProperty(this, "password", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: val("password", config)
        }), this.binary = val("binary", config), this.options = val("options", config), this.ssl = typeof config.ssl > "u" ? readSSLConfigFromEnvironment() : config.ssl, typeof this.ssl == "string" && this.ssl === "true" && (this.ssl = !0), this.ssl === "no-verify" && (this.ssl = { rejectUnauthorized: !1 }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", {
          enumerable: !1
        }), this.sslnegotiation = val("sslnegotiation", config, "PGSSLNEGOTIATION"), this.sslnegotiation !== void 0 && this.sslnegotiation !== "postgres" && this.sslnegotiation !== "direct")
          throw new Error(
            `Invalid sslnegotiation value: "${this.sslnegotiation}". Valid values are "postgres" and "direct".`
          );
        if (this.sslnegotiation === "direct" && !this.ssl)
          throw new Error("sslnegotiation=direct requires SSL to be enabled");
        this.client_encoding = val("client_encoding", config), this.replication = val("replication", config), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = val("application_name", config, "PGAPPNAME"), this.fallback_application_name = val("fallback_application_name", config, !1), this.statement_timeout = val("statement_timeout", config, !1), this.lock_timeout = val("lock_timeout", config, !1), this.idle_in_transaction_session_timeout = val("idle_in_transaction_session_timeout", config, !1), this.query_timeout = val("query_timeout", config, !1), config.connectionTimeoutMillis === void 0 ? this.connect_timeout = process.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(config.connectionTimeoutMillis / 1e3), config.keepAlive === !1 ? this.keepalives = 0 : config.keepAlive === !0 && (this.keepalives = 1), typeof config.keepAliveInitialDelayMillis == "number" && (this.keepalives_idle = Math.floor(config.keepAliveInitialDelayMillis / 1e3));
      }
      getLibpqConnectionString(cb) {
        let params = [];
        add(params, this, "user"), add(params, this, "password"), add(params, this, "port"), add(params, this, "application_name"), add(params, this, "fallback_application_name"), add(params, this, "connect_timeout"), add(params, this, "options");
        let ssl = typeof this.ssl == "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
        if (add(params, ssl, "sslmode"), add(params, ssl, "sslca"), add(params, ssl, "sslkey"), add(params, ssl, "sslcert"), add(params, ssl, "sslrootcert"), add(params, this, "sslnegotiation"), this.database && params.push("dbname=" + quoteParamValue(this.database)), this.replication && params.push("replication=" + quoteParamValue(this.replication)), this.host && params.push("host=" + quoteParamValue(this.host)), this.isDomainSocket)
          return cb(null, params.join(" "));
        this.client_encoding && params.push("client_encoding=" + quoteParamValue(this.client_encoding)), dns.lookup(this.host, function(err, address) {
          return err ? cb(err, null) : (params.push("hostaddr=" + quoteParamValue(address)), cb(null, params.join(" ")));
        });
      }
    };
    module.exports = ConnectionParameters;
  }
});

// node_modules/pg/lib/result.js
var require_result = __commonJS({
  "node_modules/pg/lib/result.js"(exports, module) {
    "use strict";
    var types2 = require_pg_types(), matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/, Result2 = class {
      constructor(rowMode, types3) {
        this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = void 0, this._types = types3, this.RowCtor = null, this.rowAsArray = rowMode === "array", this.rowAsArray && (this.parseRow = this._parseRowAsArray), this._prebuiltEmptyResultObject = null;
      }
      // adds a command complete message
      addCommandComplete(msg) {
        let match;
        msg.text ? match = matchRegexp.exec(msg.text) : match = matchRegexp.exec(msg.command), match && (this.command = match[1], match[3] ? (this.oid = parseInt(match[2], 10), this.rowCount = parseInt(match[3], 10)) : match[2] && (this.rowCount = parseInt(match[2], 10)));
      }
      _parseRowAsArray(rowData) {
        let row = new Array(rowData.length);
        for (let i = 0, len = rowData.length; i < len; i++) {
          let rawValue = rowData[i];
          rawValue !== null ? row[i] = this._parsers[i](rawValue) : row[i] = null;
        }
        return row;
      }
      parseRow(rowData) {
        let row = { ...this._prebuiltEmptyResultObject };
        for (let i = 0, len = rowData.length; i < len; i++) {
          let rawValue = rowData[i], field = this.fields[i].name;
          if (rawValue !== null) {
            let v = this.fields[i].format === "binary" ? Buffer.from(rawValue) : rawValue;
            row[field] = this._parsers[i](v);
          } else
            row[field] = null;
        }
        return row;
      }
      addRow(row) {
        this.rows.push(row);
      }
      addFields(fieldDescriptions) {
        this.fields = fieldDescriptions, this.fields.length && (this._parsers = new Array(fieldDescriptions.length));
        let row = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < fieldDescriptions.length; i++) {
          let desc = fieldDescriptions[i];
          row[desc.name] = null, this._types ? this._parsers[i] = this._types.getTypeParser(desc.dataTypeID, desc.format || "text") : this._parsers[i] = types2.getTypeParser(desc.dataTypeID, desc.format || "text");
        }
        this._prebuiltEmptyResultObject = { ...row };
      }
    };
    module.exports = Result2;
  }
});

// node_modules/pg/lib/query.js
var require_query = __commonJS({
  "node_modules/pg/lib/query.js"(exports, module) {
    "use strict";
    var { EventEmitter } = __require("events"), Result2 = require_result(), utils = require_utils(), Query2 = class extends EventEmitter {
      constructor(config, values, callback) {
        super(), config = utils.normalizeQueryConfig(config, values, callback), this.text = config.text, this.values = config.values, this.rows = config.rows, this.types = config.types, this.name = config.name, this.queryMode = config.queryMode, this.binary = config.binary, this.portal = config.portal || "", this.callback = config.callback, this._rowMode = config.rowMode, process.domain && config.callback && (this.callback = process.domain.bind(config.callback)), this._result = new Result2(this._rowMode, this.types), this._results = this._result, this._canceledDueToError = !1;
      }
      requiresPreparation() {
        return this.queryMode === "extended" || this.name || this.rows ? !0 : !this.text || !this.values ? !1 : this.values.length > 0;
      }
      _checkForMultirow() {
        this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), this._result = new Result2(this._rowMode, this._result._types), this._results.push(this._result));
      }
      // associates row metadata from the supplied
      // message with this query object
      // metadata used when parsing row results
      handleRowDescription(msg) {
        this._checkForMultirow(), this._result.addFields(msg.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
      }
      handleDataRow(msg) {
        let row;
        if (!this._canceledDueToError) {
          try {
            row = this._result.parseRow(msg.fields);
          } catch (err) {
            this._canceledDueToError = err;
            return;
          }
          this.emit("row", row, this._result), this._accumulateRows && this._result.addRow(row);
        }
      }
      handleCommandComplete(msg, connection) {
        this._checkForMultirow(), this._result.addCommandComplete(msg), this.rows && connection.sync();
      }
      // if a named prepared statement is created with empty query text
      // the backend will send an emptyQuery message but *not* a command complete message
      // since we pipeline sync immediately after execute we don't need to do anything here
      // unless we have rows specified, in which case we did not pipeline the initial sync call
      handleEmptyQuery(connection) {
        this.rows && connection.sync();
      }
      handleError(err, connection) {
        if (this._canceledDueToError && (err = this._canceledDueToError, this._canceledDueToError = !1), this.callback)
          return this.callback(err);
        this.emit("error", err);
      }
      handleReadyForQuery(con) {
        if (this._canceledDueToError)
          return this.handleError(this._canceledDueToError, con);
        if (this.callback)
          try {
            this.callback(null, this._results);
          } catch (err) {
            process.nextTick(() => {
              throw err;
            });
          }
        this.emit("end", this._results);
      }
      submit(connection) {
        if (typeof this.text != "string" && typeof this.name != "string")
          return new Error("A query must have either text or a name. Supplying neither is unsupported.");
        let previous = connection.parsedStatements[this.name] || connection.submittedNamedStatements[this.name];
        if (this.text && previous && this.text !== previous)
          return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
        if (this.values && !Array.isArray(this.values))
          return new Error("Query values must be an array");
        if (this.requiresPreparation()) {
          connection.stream.cork && connection.stream.cork();
          try {
            this.prepare(connection);
          } finally {
            connection.stream.uncork && connection.stream.uncork();
          }
        } else
          connection.query(this.text);
        return null;
      }
      hasBeenParsed(connection) {
        return this.name && (connection.parsedStatements[this.name] !== void 0 || connection.submittedNamedStatements[this.name] !== void 0);
      }
      handlePortalSuspended(connection) {
        this._getRows(connection, this.rows);
      }
      _getRows(connection, rows) {
        connection.execute({
          portal: this.portal,
          rows
        }), rows ? connection.flush() : connection.sync();
      }
      // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
      prepare(connection) {
        this.hasBeenParsed(connection) || (connection.parse({
          text: this.text,
          name: this.name,
          types: this.types
        }), this.name && (connection.submittedNamedStatements[this.name] = this.text));
        try {
          connection.bind({
            portal: this.portal,
            statement: this.name,
            values: this.values,
            binary: this.binary,
            valueMapper: utils.prepareValue
          });
        } catch (err) {
          connection.close({ type: "S", name: this.name }), connection.sync(), this.handleError(err, connection);
          return;
        }
        connection.describe({
          type: "P",
          name: this.portal || ""
        }), this._getRows(connection, this.rows);
      }
      handleCopyInResponse(connection) {
        connection.sendCopyFail("No source stream defined");
      }
      handleCopyData(msg, connection) {
      }
    };
    module.exports = Query2;
  }
});

// node_modules/pg-protocol/dist/messages.js
var require_messages = __commonJS({
  "node_modules/pg-protocol/dist/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.NoticeMessage = exports.DataRowMessage = exports.CommandCompleteMessage = exports.ReadyForQueryMessage = exports.NotificationResponseMessage = exports.BackendKeyDataMessage = exports.AuthenticationMD5Password = exports.ParameterStatusMessage = exports.ParameterDescriptionMessage = exports.RowDescriptionMessage = exports.Field = exports.CopyResponse = exports.CopyDataMessage = exports.DatabaseError = exports.copyDone = exports.emptyQuery = exports.replicationStart = exports.portalSuspended = exports.noData = exports.closeComplete = exports.bindComplete = exports.parseComplete = void 0;
    exports.parseComplete = {
      name: "parseComplete",
      length: 5
    };
    exports.bindComplete = {
      name: "bindComplete",
      length: 5
    };
    exports.closeComplete = {
      name: "closeComplete",
      length: 5
    };
    exports.noData = {
      name: "noData",
      length: 5
    };
    exports.portalSuspended = {
      name: "portalSuspended",
      length: 5
    };
    exports.replicationStart = {
      name: "replicationStart",
      length: 4
    };
    exports.emptyQuery = {
      name: "emptyQuery",
      length: 4
    };
    exports.copyDone = {
      name: "copyDone",
      length: 4
    };
    var DatabaseError2 = class extends Error {
      constructor(message, length, name) {
        super(message), this.length = length, this.name = name;
      }
    };
    exports.DatabaseError = DatabaseError2;
    var CopyDataMessage = class {
      constructor(length, chunk) {
        this.length = length, this.chunk = chunk, this.name = "copyData";
      }
    };
    exports.CopyDataMessage = CopyDataMessage;
    var CopyResponse = class {
      constructor(length, name, binary, columnCount) {
        this.length = length, this.name = name, this.binary = binary, this.columnTypes = new Array(columnCount);
      }
    };
    exports.CopyResponse = CopyResponse;
    var Field2 = class {
      constructor(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, format2) {
        this.name = name, this.tableID = tableID, this.columnID = columnID, this.dataTypeID = dataTypeID, this.dataTypeSize = dataTypeSize, this.dataTypeModifier = dataTypeModifier, this.format = format2;
      }
    };
    exports.Field = Field2;
    var RowDescriptionMessage = class {
      constructor(length, fieldCount) {
        this.length = length, this.fieldCount = fieldCount, this.name = "rowDescription", this.fields = new Array(this.fieldCount);
      }
    };
    exports.RowDescriptionMessage = RowDescriptionMessage;
    var ParameterDescriptionMessage = class {
      constructor(length, parameterCount) {
        this.length = length, this.parameterCount = parameterCount, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
      }
    };
    exports.ParameterDescriptionMessage = ParameterDescriptionMessage;
    var ParameterStatusMessage = class {
      constructor(length, parameterName, parameterValue) {
        this.length = length, this.parameterName = parameterName, this.parameterValue = parameterValue, this.name = "parameterStatus";
      }
    };
    exports.ParameterStatusMessage = ParameterStatusMessage;
    var AuthenticationMD5Password = class {
      constructor(length, salt) {
        this.length = length, this.salt = salt, this.name = "authenticationMD5Password";
      }
    };
    exports.AuthenticationMD5Password = AuthenticationMD5Password;
    var BackendKeyDataMessage = class {
      constructor(length, processID, secretKey) {
        this.length = length, this.processID = processID, this.secretKey = secretKey, this.name = "backendKeyData";
      }
    };
    exports.BackendKeyDataMessage = BackendKeyDataMessage;
    var NotificationResponseMessage = class {
      constructor(length, processId, channel, payload) {
        this.length = length, this.processId = processId, this.channel = channel, this.payload = payload, this.name = "notification";
      }
    };
    exports.NotificationResponseMessage = NotificationResponseMessage;
    var ReadyForQueryMessage = class {
      constructor(length, status) {
        this.length = length, this.status = status, this.name = "readyForQuery";
      }
    };
    exports.ReadyForQueryMessage = ReadyForQueryMessage;
    var CommandCompleteMessage = class {
      constructor(length, text) {
        this.length = length, this.text = text, this.name = "commandComplete";
      }
    };
    exports.CommandCompleteMessage = CommandCompleteMessage;
    var DataRowMessage = class {
      constructor(length, fields) {
        this.length = length, this.fields = fields, this.name = "dataRow", this.fieldCount = fields.length;
      }
    };
    exports.DataRowMessage = DataRowMessage;
    var NoticeMessage = class {
      constructor(length, message) {
        this.length = length, this.message = message, this.name = "notice";
      }
    };
    exports.NoticeMessage = NoticeMessage;
  }
});

// node_modules/pg-protocol/dist/buffer-writer.js
var require_buffer_writer = __commonJS({
  "node_modules/pg-protocol/dist/buffer-writer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.Writer = void 0;
    var Writer = class {
      constructor(size2 = 256) {
        this.size = size2, this.offset = 5, this.headerPosition = 0, this.buffer = Buffer.allocUnsafe(size2);
      }
      ensure(size2) {
        if (this.buffer.length - this.offset < size2) {
          let oldBuffer = this.buffer, newSize = oldBuffer.length + (oldBuffer.length >> 1) + size2;
          this.buffer = Buffer.allocUnsafe(newSize), oldBuffer.copy(this.buffer, 0, 0, this.offset);
        }
      }
      addInt32(num2) {
        return this.ensure(4), this.buffer[this.offset++] = num2 >>> 24 & 255, this.buffer[this.offset++] = num2 >>> 16 & 255, this.buffer[this.offset++] = num2 >>> 8 & 255, this.buffer[this.offset++] = num2 >>> 0 & 255, this;
      }
      addInt16(num2) {
        return this.ensure(2), this.buffer[this.offset++] = num2 >>> 8 & 255, this.buffer[this.offset++] = num2 >>> 0 & 255, this;
      }
      addCString(string) {
        if (!string)
          this.ensure(1);
        else {
          let len = Buffer.byteLength(string);
          this.ensure(len + 1), this.buffer.write(string, this.offset, "utf-8"), this.offset += len;
        }
        return this.buffer[this.offset++] = 0, this;
      }
      addString(string = "") {
        let len = Buffer.byteLength(string);
        return this.ensure(len), this.buffer.write(string, this.offset), this.offset += len, this;
      }
      // Write an Int32 byte-length prefix immediately followed by the string's UTF-8
      // bytes. Postgres' Bind wire format prefixes every parameter with its length,
      // and doing it in one method computes Buffer.byteLength ONCE — the previous
      // `addInt32(Buffer.byteLength(s)).addString(s)` pairing scanned the string
      // three times (byteLength for the prefix, byteLength again inside addString,
      // then the encode), which is costly for large text parameters.
      addInt32PrefixedString(string) {
        let len = Buffer.byteLength(string);
        this.ensure(4 + len);
        let buffer2 = this.buffer, offset = this.offset;
        return buffer2[offset++] = len >>> 24 & 255, buffer2[offset++] = len >>> 16 & 255, buffer2[offset++] = len >>> 8 & 255, buffer2[offset++] = len >>> 0 & 255, buffer2.write(string, offset, "utf-8"), this.offset = offset + len, this;
      }
      add(otherBuffer) {
        return this.ensure(otherBuffer.length), otherBuffer.copy(this.buffer, this.offset), this.offset += otherBuffer.length, this;
      }
      /**
       * Appends an uninitialized block of {@link size} bytes to the buffer and returns its offset.
       */
      reserveUnsafe(size2) {
        let offset = this.offset;
        return this.ensure(size2), this.offset += size2, offset;
      }
      join(code) {
        if (code) {
          this.buffer[this.headerPosition] = code;
          let length = this.offset - (this.headerPosition + 1);
          this.buffer.writeInt32BE(length, this.headerPosition + 1);
        }
        return this.buffer.slice(code ? 0 : 5, this.offset);
      }
      flush(code) {
        let result2 = this.join(code);
        return this.offset = 5, this.headerPosition = 0, this.buffer = Buffer.allocUnsafe(this.size), result2;
      }
      clear() {
        this.offset = 5, this.headerPosition = 0;
      }
    };
    exports.Writer = Writer;
  }
});

// node_modules/pg-protocol/dist/serializer.js
var require_serializer = __commonJS({
  "node_modules/pg-protocol/dist/serializer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.serialize = void 0;
    var buffer_writer_1 = require_buffer_writer(), writer = new buffer_writer_1.Writer(), startup = (opts) => {
      writer.addInt16(3).addInt16(0);
      for (let key2 of Object.keys(opts))
        writer.addCString(key2).addCString(opts[key2]);
      writer.addCString("client_encoding").addCString("UTF8");
      let bodyBuffer = writer.addCString("").flush(), length = bodyBuffer.length + 4;
      return new buffer_writer_1.Writer().addInt32(length).add(bodyBuffer).flush();
    }, requestSsl = () => {
      let response = Buffer.allocUnsafe(8);
      return response.writeInt32BE(8, 0), response.writeInt32BE(80877103, 4), response;
    }, password = (password2) => writer.addCString(password2).flush(
      112
      /* code.startup */
    ), sendSASLInitialResponseMessage = function(mechanism, initialResponse) {
      return writer.addCString(mechanism).addInt32PrefixedString(initialResponse), writer.flush(
        112
        /* code.startup */
      );
    }, sendSCRAMClientFinalMessage = function(additionalData) {
      return writer.addString(additionalData).flush(
        112
        /* code.startup */
      );
    }, query = (text) => writer.addCString(text).flush(
      81
      /* code.query */
    ), emptyArray = [], parse = (query2) => {
      let name = query2.name || "";
      name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", name, name.length), console.error("This can cause conflicts and silent errors executing queries"));
      let types2 = query2.types || emptyArray, len = types2.length, buffer2 = writer.addCString(name).addCString(query2.text).addInt16(len);
      for (let i = 0; i < len; i++)
        buffer2.addInt32(types2[i]);
      return writer.flush(
        80
        /* code.parse */
      );
    }, writeValues = function(values, valueMapper, formatsOffset) {
      let len = values.length;
      for (let i = 0; i < len; i++) {
        let mappedVal = valueMapper ? valueMapper(values[i], i) : values[i], formatByte = 0;
        mappedVal == null ? writer.addInt32(-1) : mappedVal instanceof Buffer ? (formatByte = 1, writer.addInt32(mappedVal.length), writer.add(mappedVal)) : writer.addInt32PrefixedString(mappedVal);
        let buf = writer.buffer;
        buf[formatsOffset++] = 0, buf[formatsOffset++] = formatByte;
      }
    }, bind = (config = {}) => {
      let portal = config.portal || "", statement = config.statement || "", binary = config.binary || !1, values = config.values || emptyArray, len = values.length;
      writer.addCString(portal).addCString(statement), writer.addInt16(len);
      let formatsOffset = writer.reserveUnsafe(len * 2);
      writer.addInt16(len);
      try {
        writeValues(values, config.valueMapper, formatsOffset);
      } catch (err) {
        throw writer.clear(), err;
      }
      return writer.addInt16(1), writer.addInt16(
        binary ? 1 : 0
        /* ParamType.STRING */
      ), writer.flush(
        66
        /* code.bind */
      );
    }, emptyExecute = Buffer.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]), execute = (config) => {
      if (!config || !config.portal && !config.rows)
        return emptyExecute;
      let portal = config.portal || "", rows = config.rows || 0, portalLength = Buffer.byteLength(portal), len = 4 + portalLength + 1 + 4, buff = Buffer.allocUnsafe(1 + len);
      return buff[0] = 69, buff.writeInt32BE(len, 1), buff.write(portal, 5, "utf-8"), buff[portalLength + 5] = 0, buff.writeUInt32BE(rows, buff.length - 4), buff;
    }, cancel = (processID, secretKey) => {
      let buffer2 = Buffer.allocUnsafe(16);
      return buffer2.writeInt32BE(16, 0), buffer2.writeInt16BE(1234, 4), buffer2.writeInt16BE(5678, 6), buffer2.writeInt32BE(processID, 8), buffer2.writeInt32BE(secretKey, 12), buffer2;
    }, cstringMessage = (code, string) => {
      let len = 4 + Buffer.byteLength(string) + 1, buffer2 = Buffer.allocUnsafe(1 + len);
      return buffer2[0] = code, buffer2.writeInt32BE(len, 1), buffer2.write(string, 5, "utf-8"), buffer2[len] = 0, buffer2;
    }, emptyDescribePortal = writer.addCString("P").flush(
      68
      /* code.describe */
    ), emptyDescribeStatement = writer.addCString("S").flush(
      68
      /* code.describe */
    ), describe = (msg) => msg.name ? cstringMessage(68, `${msg.type}${msg.name || ""}`) : msg.type === "P" ? emptyDescribePortal : emptyDescribeStatement, close = (msg) => {
      let text = `${msg.type}${msg.name || ""}`;
      return cstringMessage(67, text);
    }, copyData = (chunk) => writer.add(chunk).flush(
      100
      /* code.copyFromChunk */
    ), copyFail = (message) => cstringMessage(102, message), codeOnlyBuffer = (code) => Buffer.from([code, 0, 0, 0, 4]), flushBuffer = codeOnlyBuffer(
      72
      /* code.flush */
    ), syncBuffer = codeOnlyBuffer(
      83
      /* code.sync */
    ), endBuffer = codeOnlyBuffer(
      88
      /* code.end */
    ), copyDoneBuffer = codeOnlyBuffer(
      99
      /* code.copyDone */
    ), serialize = {
      startup,
      password,
      requestSsl,
      sendSASLInitialResponseMessage,
      sendSCRAMClientFinalMessage,
      query,
      parse,
      bind,
      execute,
      describe,
      close,
      flush: () => flushBuffer,
      sync: () => syncBuffer,
      end: () => endBuffer,
      copyData,
      copyDone: () => copyDoneBuffer,
      copyFail,
      cancel
    };
    exports.serialize = serialize;
  }
});

// node_modules/pg-protocol/dist/buffer-reader.js
var require_buffer_reader = __commonJS({
  "node_modules/pg-protocol/dist/buffer-reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.BufferReader = void 0;
    var BufferReader = class {
      constructor(offset = 0) {
        this.offset = offset, this.buffer = Buffer.allocUnsafe(0), this.encoding = "utf-8";
      }
      setBuffer(offset, buffer2) {
        this.offset = offset, this.buffer = buffer2;
      }
      int16() {
        let result2 = this.buffer.readInt16BE(this.offset);
        return this.offset += 2, result2;
      }
      byte() {
        let result2 = this.buffer[this.offset];
        return this.offset++, result2;
      }
      int32() {
        let result2 = this.buffer.readInt32BE(this.offset);
        return this.offset += 4, result2;
      }
      uint32() {
        let result2 = this.buffer.readUInt32BE(this.offset);
        return this.offset += 4, result2;
      }
      string(length) {
        let result2 = this.buffer.toString(this.encoding, this.offset, this.offset + length);
        return this.offset += length, result2;
      }
      cstring() {
        let start = this.offset, end = start;
        for (; this.buffer[end++]; )
          ;
        return this.offset = end, this.buffer.toString(this.encoding, start, end - 1);
      }
      bytes(length) {
        let result2 = this.buffer.slice(this.offset, this.offset + length);
        return this.offset += length, result2;
      }
    };
    exports.BufferReader = BufferReader;
  }
});

// node_modules/pg-protocol/dist/parser.js
var require_parser = __commonJS({
  "node_modules/pg-protocol/dist/parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.Parser = void 0;
    var messages_1 = require_messages(), buffer_reader_1 = require_buffer_reader(), CODE_LENGTH = 1, LEN_LENGTH = 4, HEADER_LENGTH = CODE_LENGTH + LEN_LENGTH, LATEINIT_LENGTH = -1, emptyBuffer = Buffer.allocUnsafe(0), Parser = class {
      constructor(opts) {
        if (this.buffer = emptyBuffer, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new buffer_reader_1.BufferReader(), opts?.mode === "binary")
          throw new Error("Binary mode not supported yet");
        this.mode = opts?.mode || "text";
      }
      parse(buffer2, callback) {
        this.mergeBuffer(buffer2);
        let bufferFullLength = this.bufferOffset + this.bufferLength, offset = this.bufferOffset;
        for (; offset + HEADER_LENGTH <= bufferFullLength; ) {
          let code = this.buffer[offset], length = this.buffer.readUInt32BE(offset + CODE_LENGTH), fullMessageLength = CODE_LENGTH + length;
          if (fullMessageLength + offset <= bufferFullLength) {
            let message = this.handlePacket(offset + HEADER_LENGTH, code, length, this.buffer);
            callback(message), offset += fullMessageLength;
          } else
            break;
        }
        offset === bufferFullLength ? (this.buffer = emptyBuffer, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = bufferFullLength - offset, this.bufferOffset = offset);
      }
      mergeBuffer(buffer2) {
        if (this.bufferLength > 0) {
          let newLength = this.bufferLength + buffer2.byteLength;
          if (newLength + this.bufferOffset > this.buffer.byteLength) {
            let newBuffer;
            if (newLength <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength)
              newBuffer = this.buffer;
            else {
              let newBufferLength = this.buffer.byteLength * 2;
              for (; newLength >= newBufferLength; )
                newBufferLength *= 2;
              newBuffer = Buffer.allocUnsafe(newBufferLength);
            }
            this.buffer.copy(newBuffer, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), this.buffer = newBuffer, this.bufferOffset = 0;
          }
          buffer2.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = newLength;
        } else
          this.buffer = buffer2, this.bufferOffset = 0, this.bufferLength = buffer2.byteLength;
      }
      handlePacket(offset, code, length, bytes) {
        let { reader } = this;
        reader.setBuffer(offset, bytes);
        let message;
        switch (code) {
          case 50:
            message = messages_1.bindComplete;
            break;
          case 49:
            message = messages_1.parseComplete;
            break;
          case 51:
            message = messages_1.closeComplete;
            break;
          case 110:
            message = messages_1.noData;
            break;
          case 115:
            message = messages_1.portalSuspended;
            break;
          case 99:
            message = messages_1.copyDone;
            break;
          case 87:
            message = messages_1.replicationStart;
            break;
          case 73:
            message = messages_1.emptyQuery;
            break;
          case 68:
            message = parseDataRowMessage(reader);
            break;
          case 67:
            message = parseCommandCompleteMessage(reader);
            break;
          case 90:
            message = parseReadyForQueryMessage(reader);
            break;
          case 65:
            message = parseNotificationMessage(reader);
            break;
          case 82:
            message = parseAuthenticationResponse(reader, length);
            break;
          case 83:
            message = parseParameterStatusMessage(reader);
            break;
          case 75:
            message = parseBackendKeyData(reader);
            break;
          case 69:
            message = parseErrorMessage(reader, "error");
            break;
          case 78:
            message = parseErrorMessage(reader, "notice");
            break;
          case 84:
            message = parseRowDescriptionMessage(reader);
            break;
          case 116:
            message = parseParameterDescriptionMessage(reader);
            break;
          case 71:
            message = parseCopyInMessage(reader);
            break;
          case 72:
            message = parseCopyOutMessage(reader);
            break;
          case 100:
            message = parseCopyData(reader, length);
            break;
          default:
            return new messages_1.DatabaseError("received invalid response: " + code.toString(16), length, "error");
        }
        return reader.setBuffer(0, emptyBuffer), message.length = length, message;
      }
    };
    exports.Parser = Parser;
    var parseReadyForQueryMessage = (reader) => {
      let status = reader.string(1);
      return new messages_1.ReadyForQueryMessage(LATEINIT_LENGTH, status);
    }, parseCommandCompleteMessage = (reader) => {
      let text = reader.cstring();
      return new messages_1.CommandCompleteMessage(LATEINIT_LENGTH, text);
    }, parseCopyData = (reader, length) => {
      let chunk = reader.bytes(length - 4);
      return new messages_1.CopyDataMessage(LATEINIT_LENGTH, chunk);
    }, parseCopyInMessage = (reader) => parseCopyMessage(reader, "copyInResponse"), parseCopyOutMessage = (reader) => parseCopyMessage(reader, "copyOutResponse"), parseCopyMessage = (reader, messageName) => {
      let isBinary = reader.byte() !== 0, columnCount = reader.int16(), message = new messages_1.CopyResponse(LATEINIT_LENGTH, messageName, isBinary, columnCount);
      for (let i = 0; i < columnCount; i++)
        message.columnTypes[i] = reader.int16();
      return message;
    }, parseNotificationMessage = (reader) => {
      let processId = reader.int32(), channel = reader.cstring(), payload = reader.cstring();
      return new messages_1.NotificationResponseMessage(LATEINIT_LENGTH, processId, channel, payload);
    }, parseRowDescriptionMessage = (reader) => {
      let fieldCount = reader.int16(), message = new messages_1.RowDescriptionMessage(LATEINIT_LENGTH, fieldCount);
      for (let i = 0; i < fieldCount; i++)
        message.fields[i] = parseField(reader);
      return message;
    }, parseField = (reader) => {
      let name = reader.cstring(), tableID = reader.uint32(), columnID = reader.int16(), dataTypeID = reader.uint32(), dataTypeSize = reader.int16(), dataTypeModifier = reader.int32(), mode = reader.int16() === 0 ? "text" : "binary";
      return new messages_1.Field(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, mode);
    }, parseParameterDescriptionMessage = (reader) => {
      let parameterCount = reader.int16(), message = new messages_1.ParameterDescriptionMessage(LATEINIT_LENGTH, parameterCount);
      for (let i = 0; i < parameterCount; i++)
        message.dataTypeIDs[i] = reader.uint32();
      return message;
    }, parseDataRowMessage = (reader) => {
      let fieldCount = reader.int16(), fields = new Array(fieldCount);
      for (let i = 0; i < fieldCount; i++) {
        let len = reader.int32();
        fields[i] = len === -1 ? null : reader.string(len);
      }
      return new messages_1.DataRowMessage(LATEINIT_LENGTH, fields);
    }, parseParameterStatusMessage = (reader) => {
      let name = reader.cstring(), value = reader.cstring();
      return new messages_1.ParameterStatusMessage(LATEINIT_LENGTH, name, value);
    }, parseBackendKeyData = (reader) => {
      let processID = reader.int32(), secretKey = reader.int32();
      return new messages_1.BackendKeyDataMessage(LATEINIT_LENGTH, processID, secretKey);
    }, parseAuthenticationResponse = (reader, length) => {
      let code = reader.int32(), message = {
        name: "authenticationOk",
        length
      };
      switch (code) {
        case 0:
          break;
        case 3:
          message.length === 8 && (message.name = "authenticationCleartextPassword");
          break;
        case 5:
          if (message.length === 12) {
            message.name = "authenticationMD5Password";
            let salt = reader.bytes(4);
            return new messages_1.AuthenticationMD5Password(LATEINIT_LENGTH, salt);
          }
          break;
        case 10:
          {
            message.name = "authenticationSASL", message.mechanisms = [];
            let mechanism;
            do
              mechanism = reader.cstring(), mechanism && message.mechanisms.push(mechanism);
            while (mechanism);
          }
          break;
        case 11:
          message.name = "authenticationSASLContinue", message.data = reader.string(length - 8);
          break;
        case 12:
          message.name = "authenticationSASLFinal", message.data = reader.string(length - 8);
          break;
        default:
          throw new Error("Unknown authenticationOk message type " + code);
      }
      return message;
    }, parseErrorMessage = (reader, name) => {
      let fields = {}, fieldType = reader.string(1);
      for (; fieldType !== "\0"; )
        fields[fieldType] = reader.cstring(), fieldType = reader.string(1);
      let messageValue = fields.M, message = name === "notice" ? new messages_1.NoticeMessage(LATEINIT_LENGTH, messageValue) : new messages_1.DatabaseError(messageValue, LATEINIT_LENGTH, name);
      return message.severity = fields.S, message.code = fields.C, message.detail = fields.D, message.hint = fields.H, message.position = fields.P, message.internalPosition = fields.p, message.internalQuery = fields.q, message.where = fields.W, message.schema = fields.s, message.table = fields.t, message.column = fields.c, message.dataType = fields.d, message.constraint = fields.n, message.file = fields.F, message.line = fields.L, message.routine = fields.R, message;
    };
  }
});

// node_modules/pg-protocol/dist/index.js
var require_dist = __commonJS({
  "node_modules/pg-protocol/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.DatabaseError = exports.serialize = void 0;
    exports.parse = parse;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "DatabaseError", { enumerable: !0, get: function() {
      return messages_1.DatabaseError;
    } });
    var serializer_1 = require_serializer();
    Object.defineProperty(exports, "serialize", { enumerable: !0, get: function() {
      return serializer_1.serialize;
    } });
    var parser_1 = require_parser();
    function parse(stream, callback) {
      let parser = new parser_1.Parser();
      return stream.on("data", (buffer2) => parser.parse(buffer2, callback)), new Promise((resolve) => stream.on("end", () => resolve()));
    }
  }
});

// node_modules/pg-cloudflare/dist/empty.js
var require_empty = __commonJS({
  "node_modules/pg-cloudflare/dist/empty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.default = {};
  }
});

// node_modules/pg/lib/stream.js
var require_stream = __commonJS({
  "node_modules/pg/lib/stream.js"(exports, module) {
    var { getStream, getSecureStream } = getStreamFuncs();
    module.exports = {
      /**
       * Get a socket stream compatible with the current runtime environment.
       * @returns {Duplex}
       */
      getStream,
      /**
       * Get a TLS secured socket, compatible with the current environment,
       * using the socket and other settings given in `options`.
       * @returns {Duplex}
       */
      getSecureStream
    };
    function getNodejsStreamFuncs() {
      function getStream2(ssl) {
        let net = __require("net");
        return new net.Socket();
      }
      function getSecureStream2(options) {
        return __require("tls").connect(options);
      }
      return {
        getStream: getStream2,
        getSecureStream: getSecureStream2
      };
    }
    function getCloudflareStreamFuncs() {
      function getStream2(ssl) {
        let { CloudflareSocket } = require_empty();
        return new CloudflareSocket(ssl);
      }
      function getSecureStream2(options) {
        return options.socket.startTls(options), options.socket;
      }
      return {
        getStream: getStream2,
        getSecureStream: getSecureStream2
      };
    }
    function isCloudflareRuntime() {
      if (typeof navigator == "object" && navigator !== null && typeof navigator.userAgent == "string")
        return navigator.userAgent === "Cloudflare-Workers";
      if (typeof Response == "function") {
        let resp = new Response(null, { cf: { thing: !0 } });
        if (typeof resp.cf == "object" && resp.cf !== null && resp.cf.thing)
          return !0;
      }
      return !1;
    }
    function getStreamFuncs() {
      return isCloudflareRuntime() ? getCloudflareStreamFuncs() : getNodejsStreamFuncs();
    }
  }
});

// node_modules/pg/lib/connection.js
var require_connection = __commonJS({
  "node_modules/pg/lib/connection.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter, { parse, serialize } = require_dist(), stream = require_stream(), { getStream } = stream, flushBuffer = serialize.flush(), syncBuffer = serialize.sync(), endBuffer = serialize.end(), Connection2 = class extends EventEmitter {
      constructor(config) {
        super(), config = config || {}, this.stream = config.stream || getStream(config.ssl), typeof this.stream == "function" && (this.stream = this.stream(config)), this._keepAlive = config.keepAlive, this._keepAliveInitialDelayMillis = config.keepAliveInitialDelayMillis, this.parsedStatements = {}, this.submittedNamedStatements = {}, this.ssl = config.ssl || !1, this.sslNegotiation = config.sslNegotiation || "postgres", this._ending = !1, this._emitMessage = !1;
        let self = this;
        this.on("newListener", function(eventName) {
          eventName === "message" && (self._emitMessage = !0);
        });
      }
      connect(port, host) {
        let self = this;
        this._connecting = !0, this.stream.setNoDelay(!0), this.stream.connect(port, host), this.stream.once("connect", function() {
          self._keepAlive && self.stream.setKeepAlive(!0, self._keepAliveInitialDelayMillis), self.emit("connect");
        });
        let reportStreamError = function(error) {
          self._ending && (error.code === "ECONNRESET" || error.code === "EPIPE") || self.emit("error", error);
        };
        if (this.stream.on("error", reportStreamError), this.stream.on("close", function() {
          self.emit("end");
        }), !this.ssl)
          return this.attachListeners(this.stream);
        if (this.sslNegotiation === "direct")
          return this.stream.once("connect", function() {
            self.upgradeToSSL(host, reportStreamError);
          });
        this.stream.once("data", function(buffer2) {
          switch (buffer2.toString("utf8")) {
            case "S":
              break;
            case "N":
              return self.stream.end(), self.emit("error", new Error("The server does not support SSL connections"));
            default:
              return self.stream.end(), self.emit("error", new Error("There was an error establishing an SSL connection"));
          }
          self.upgradeToSSL(host, reportStreamError);
        });
      }
      upgradeToSSL(host, reportStreamError) {
        let self = this, options = {
          socket: self.stream,
          // tls.connect checks the server identity against `servername`, falling
          // back to `host` and then to 'localhost'. `servername` must stay unset
          // for IP addresses (see below), so `host` is needed to keep certificate
          // validation working when connecting to an IP address.
          host
        };
        self.ssl !== !0 && (Object.assign(options, self.ssl), "key" in self.ssl && (options.key = self.ssl.key)), self.sslNegotiation === "direct" && (options.ALPNProtocols = ["postgresql"]);
        let net = __require("net");
        net.isIP && net.isIP(host) === 0 && (options.servername = host);
        try {
          self.stream = stream.getSecureStream(options);
        } catch (err) {
          return self.emit("error", err);
        }
        self.attachListeners(self.stream), self.stream.on("error", reportStreamError), self.emit("sslconnect");
      }
      attachListeners(stream2) {
        parse(stream2, (msg) => {
          let eventName = msg.name === "error" ? "errorMessage" : msg.name;
          this._emitMessage && this.emit("message", msg), this.emit(eventName, msg);
        });
      }
      requestSsl() {
        this.stream.write(serialize.requestSsl());
      }
      startup(config) {
        this.stream.write(serialize.startup(config));
      }
      cancel(processID, secretKey) {
        this._send(serialize.cancel(processID, secretKey));
      }
      password(password) {
        this._send(serialize.password(password));
      }
      sendSASLInitialResponseMessage(mechanism, initialResponse) {
        this._send(serialize.sendSASLInitialResponseMessage(mechanism, initialResponse));
      }
      sendSCRAMClientFinalMessage(additionalData) {
        this._send(serialize.sendSCRAMClientFinalMessage(additionalData));
      }
      _send(buffer2) {
        return this.stream.writable ? this.stream.write(buffer2) : !1;
      }
      query(text) {
        this._send(serialize.query(text));
      }
      // send parse message
      parse(query) {
        this._send(serialize.parse(query));
      }
      // send bind message
      bind(config) {
        this._send(serialize.bind(config));
      }
      // send execute message
      execute(config) {
        this._send(serialize.execute(config));
      }
      flush() {
        this.stream.writable && this.stream.write(flushBuffer);
      }
      sync() {
        this._send(syncBuffer);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        if (this._ending = !0, !this._connecting || !this.stream.writable) {
          this.stream.end();
          return;
        }
        return this.stream.write(endBuffer, () => {
          this.stream.end();
        });
      }
      close(msg) {
        this._send(serialize.close(msg));
      }
      describe(msg) {
        this._send(serialize.describe(msg));
      }
      sendCopyFromChunk(chunk) {
        this._send(serialize.copyData(chunk));
      }
      endCopyFrom() {
        this._send(serialize.copyDone());
      }
      sendCopyFail(msg) {
        this._send(serialize.copyFail(msg));
      }
    };
    module.exports = Connection2;
  }
});

// node_modules/split2/index.js
var require_split2 = __commonJS({
  "node_modules/split2/index.js"(exports, module) {
    "use strict";
    var { Transform } = __require("stream"), { StringDecoder } = __require("string_decoder"), kLast = /* @__PURE__ */ Symbol("last"), kDecoder = /* @__PURE__ */ Symbol("decoder");
    function transform(chunk, enc2, cb) {
      let list;
      if (this.overflow) {
        if (list = this[kDecoder].write(chunk).split(this.matcher), list.length === 1) return cb();
        list.shift(), this.overflow = !1;
      } else
        this[kLast] += this[kDecoder].write(chunk), list = this[kLast].split(this.matcher);
      this[kLast] = list.pop();
      for (let i = 0; i < list.length; i++)
        try {
          push(this, this.mapper(list[i]));
        } catch (error) {
          return cb(error);
        }
      if (this.overflow = this[kLast].length > this.maxLength, this.overflow && !this.skipOverflow) {
        cb(new Error("maximum buffer reached"));
        return;
      }
      cb();
    }
    function flush(cb) {
      if (this[kLast] += this[kDecoder].end(), this[kLast])
        try {
          push(this, this.mapper(this[kLast]));
        } catch (error) {
          return cb(error);
        }
      cb();
    }
    function push(self, val) {
      val !== void 0 && self.push(val);
    }
    function noop(incoming) {
      return incoming;
    }
    function split2(matcher, mapper, options) {
      switch (matcher = matcher || /\r?\n/, mapper = mapper || noop, options = options || {}, arguments.length) {
        case 1:
          typeof matcher == "function" ? (mapper = matcher, matcher = /\r?\n/) : typeof matcher == "object" && !(matcher instanceof RegExp) && !matcher[Symbol.split] && (options = matcher, matcher = /\r?\n/);
          break;
        case 2:
          typeof matcher == "function" ? (options = mapper, mapper = matcher, matcher = /\r?\n/) : typeof mapper == "object" && (options = mapper, mapper = noop);
      }
      options = Object.assign({}, options), options.autoDestroy = !0, options.transform = transform, options.flush = flush, options.readableObjectMode = !0;
      let stream = new Transform(options);
      return stream[kLast] = "", stream[kDecoder] = new StringDecoder("utf8"), stream.matcher = matcher, stream.mapper = mapper, stream.maxLength = options.maxLength, stream.skipOverflow = options.skipOverflow || !1, stream.overflow = !1, stream._destroy = function(err, cb) {
        this._writableState.errorEmitted = !1, cb(err);
      }, stream;
    }
    module.exports = split2;
  }
});

// node_modules/pgpass/lib/helper.js
var require_helper = __commonJS({
  "node_modules/pgpass/lib/helper.js"(exports, module) {
    "use strict";
    var path = __require("path"), Stream = __require("stream").Stream, split2 = require_split2(), util = __require("util"), defaultPort = 5432, isWin = process.platform === "win32", warnStream = process.stderr, S_IRWXG = 56, S_IRWXO = 7, S_IFMT = 61440, S_IFREG = 32768;
    function isRegFile(mode) {
      return (mode & S_IFMT) == S_IFREG;
    }
    var fieldNames = ["host", "port", "database", "user", "password"], nrOfFields = fieldNames.length, passKey = fieldNames[nrOfFields - 1];
    function warn() {
      var isWritable = warnStream instanceof Stream && warnStream.writable === !0;
      if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat(`
`);
        warnStream.write(util.format.apply(util, args));
      }
    }
    Object.defineProperty(module.exports, "isWin", {
      get: function() {
        return isWin;
      },
      set: function(val) {
        isWin = val;
      }
    });
    module.exports.warnTo = function(stream) {
      var old = warnStream;
      return warnStream = stream, old;
    };
    module.exports.getFileName = function(rawEnv) {
      var env = rawEnv || process.env, file = env.PGPASSFILE || (isWin ? path.join(env.APPDATA || "./", "postgresql", "pgpass.conf") : path.join(env.HOME || "./", ".pgpass"));
      return file;
    };
    module.exports.usePgPass = function(stats, fname) {
      return Object.prototype.hasOwnProperty.call(process.env, "PGPASSWORD") ? !1 : isWin ? !0 : (fname = fname || "<unkn>", isRegFile(stats.mode) ? stats.mode & (S_IRWXG | S_IRWXO) ? (warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname), !1) : !0 : (warn('WARNING: password file "%s" is not a plain file', fname), !1));
    };
    var matcher = module.exports.match = function(connInfo, entry) {
      return fieldNames.slice(0, -1).reduce(function(prev, field, idx) {
        return idx == 1 && Number(connInfo[field] || defaultPort) === Number(entry[field]) ? prev && !0 : prev && (entry[field] === "*" || entry[field] === connInfo[field]);
      }, !0);
    };
    module.exports.getPassword = function(connInfo, stream, cb) {
      var pass, lineStream = stream.pipe(split2());
      function onLine(line) {
        var entry = parseLine(line);
        entry && isValidEntry(entry) && matcher(connInfo, entry) && (pass = entry[passKey], lineStream.end());
      }
      var onEnd = function() {
        stream.destroy(), cb(pass);
      }, onErr = function(err) {
        stream.destroy(), warn("WARNING: error on reading file: %s", err), cb(void 0);
      };
      stream.on("error", onErr), lineStream.on("data", onLine).on("end", onEnd).on("error", onErr);
    };
    var parseLine = module.exports.parseLine = function(line) {
      if (line.length < 11 || line.match(/^\s+#/))
        return null;
      for (var curChar = "", prevChar = "", fieldIdx = 0, startIdx = 0, endIdx = 0, obj = {}, isLastField = !1, addToObj = function(idx, i0, i1) {
        var field = line.substring(i0, i1);
        Object.hasOwnProperty.call(process.env, "PGPASS_NO_DEESCAPE") || (field = field.replace(/\\([:\\])/g, "$1")), obj[fieldNames[idx]] = field;
      }, i = 0; i < line.length - 1; i += 1) {
        if (curChar = line.charAt(i + 1), prevChar = line.charAt(i), isLastField = fieldIdx == nrOfFields - 1, isLastField) {
          addToObj(fieldIdx, startIdx);
          break;
        }
        i >= 0 && curChar == ":" && prevChar !== "\\" && (addToObj(fieldIdx, startIdx, i + 1), startIdx = i + 2, fieldIdx += 1);
      }
      return obj = Object.keys(obj).length === nrOfFields ? obj : null, obj;
    }, isValidEntry = module.exports.isValidEntry = function(entry) {
      for (var rules = {
        // host
        0: function(x) {
          return x.length > 0;
        },
        // port
        1: function(x) {
          return x === "*" ? !0 : (x = Number(x), isFinite(x) && x > 0 && x < 9007199254740992 && Math.floor(x) === x);
        },
        // database
        2: function(x) {
          return x.length > 0;
        },
        // username
        3: function(x) {
          return x.length > 0;
        },
        // password
        4: function(x) {
          return x.length > 0;
        }
      }, idx = 0; idx < fieldNames.length; idx += 1) {
        var rule = rules[idx], value = entry[fieldNames[idx]] || "", res = rule(value);
        if (!res)
          return !1;
      }
      return !0;
    };
  }
});

// node_modules/pgpass/lib/index.js
var require_lib = __commonJS({
  "node_modules/pgpass/lib/index.js"(exports, module) {
    "use strict";
    var path = __require("path"), fs = __require("fs"), helper = require_helper();
    module.exports = function(connInfo, cb) {
      var file = helper.getFileName();
      fs.stat(file, function(err, stat) {
        if (err || !helper.usePgPass(stat, file))
          return cb(void 0);
        var st = fs.createReadStream(file);
        helper.getPassword(connInfo, st, cb);
      });
    };
    module.exports.warnTo = helper.warnTo;
  }
});

// node_modules/pg/lib/client.js
var require_client = __commonJS({
  "node_modules/pg/lib/client.js"(exports, module) {
    var EventEmitter = __require("events").EventEmitter, utils = require_utils(), nodeUtils = __require("util"), sasl = require_sasl(), TypeOverrides2 = require_type_overrides(), ConnectionParameters = require_connection_parameters(), Query2 = require_query(), defaults2 = require_defaults(), Connection2 = require_connection(), crypto3 = require_utils2(), activeQueryDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Client.activeQuery is deprecated and will be removed in pg@9.0"
    ), queryQueueDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Client.queryQueue is deprecated and will be removed in pg@9.0."
    ), pgPassDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "pgpass support is deprecated and will be removed in pg@9.0. You can provide an async function as the password property to the Client/Pool constructor that returns a password instead. Within this function you can call the pgpass module in your own code."
    ), byoPromiseDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Passing a custom Promise implementation to the Client/Pool constructor is deprecated and will be removed in pg@9.0."
    ), queryQueueLengthDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Calling client.query() when the client is already executing a query is deprecated and will be removed in pg@9.0. Use async/await or an external async flow control mechanism instead."
    );
    function coerceNumberOrDefault(value, defaultValue) {
      if (typeof value == "number")
        return Number.isFinite(value) ? value : defaultValue;
      if (typeof value == "string" && value.trim() !== "") {
        let n = Number(value);
        return Number.isFinite(n) ? n : defaultValue;
      }
      return defaultValue;
    }
    var Client2 = class extends EventEmitter {
      constructor(config) {
        super(), this.connectionParameters = new ConnectionParameters(config), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(this, "password", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: this.connectionParameters.password
        }), this.replication = this.connectionParameters.replication;
        let c = config || {};
        c.Promise && byoPromiseDeprecationNotice(), this._Promise = c.Promise || global.Promise, this._types = new TypeOverrides2(c.types), this._ending = !1, this._ended = !1, this._connecting = !1, this._connected = !1, this._connectionError = !1, this._queryable = !0, this._activeQuery = null, this._txStatus = null, this.enableChannelBinding = !!c.enableChannelBinding, this.scramMaxIterations = coerceNumberOrDefault(c.scramMaxIterations, sasl.DEFAULT_MAX_SCRAM_ITERATIONS), this.connection = c.connection || new Connection2({
          stream: c.stream,
          ssl: this.connectionParameters.ssl,
          sslNegotiation: this.connectionParameters.sslnegotiation,
          keepAlive: c.keepAlive || !1,
          keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
          encoding: this.connectionParameters.client_encoding || "utf8"
        }), this._queryQueue = [], this._sentQueryQueue = [], this.pipeline = !!c.pipeline, this.binary = c.binary || defaults2.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || !1, this.sslNegotiation = this.connectionParameters.sslnegotiation || "postgres", this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", {
          enumerable: !1
        }), this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0;
      }
      get activeQuery() {
        return activeQueryDeprecationNotice(), this._activeQuery;
      }
      set activeQuery(val) {
        activeQueryDeprecationNotice(), this._activeQuery = val;
      }
      _getActiveQuery() {
        return this._activeQuery;
      }
      _errorAllQueries(err) {
        let enqueueError = (query) => {
          process.nextTick(() => {
            query.handleError(err, this.connection);
          });
        }, activeQuery = this._getActiveQuery();
        activeQuery && (enqueueError(activeQuery), this._activeQuery = null), this._sentQueryQueue.forEach(enqueueError), this._sentQueryQueue.length = 0, this._queryQueue.forEach(enqueueError), this._queryQueue.length = 0;
      }
      _connect(callback) {
        let self = this, con = this.connection;
        if (this._connectionCallback = callback, this._connecting || this._connected) {
          let err = new Error("Client has already been connected. You cannot reuse a client.");
          process.nextTick(() => {
            callback(err);
          });
          return;
        }
        this._connecting = !0, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(() => {
          con._ending = !0, con.stream.destroy(new Error("timeout expired"));
        }, this._connectionTimeoutMillis), this.connectionTimeoutHandle.unref && this.connectionTimeoutHandle.unref()), this.host && this.host.indexOf("/") === 0 ? con.connect(this.host + "/.s.PGSQL." + this.port) : con.connect(this.port, this.host), con.on("connect", function() {
          self.ssl ? self.sslNegotiation !== "direct" && con.requestSsl() : con.startup(self.getStartupConf());
        }), con.on("sslconnect", function() {
          con.startup(self.getStartupConf());
        }), this._attachListeners(con), con.once("end", () => {
          let error = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
          clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(error), this._ended = !0, this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(error) : this._handleErrorEvent(error) : this._connectionError || this._handleErrorEvent(error)), process.nextTick(() => {
            this.emit("end");
          });
        });
      }
      connect(callback) {
        if (callback) {
          this._connect(callback);
          return;
        }
        return new this._Promise((resolve, reject) => {
          this._connect((error) => {
            error ? reject(error) : resolve(this);
          });
        });
      }
      _attachListeners(con) {
        con.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), con.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), con.on("authenticationSASL", this._handleAuthSASL.bind(this)), con.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this)), con.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), con.on("backendKeyData", this._handleBackendKeyData.bind(this)), con.on("error", this._handleErrorEvent.bind(this)), con.on("errorMessage", this._handleErrorMessage.bind(this)), con.on("readyForQuery", this._handleReadyForQuery.bind(this)), con.on("notice", this._handleNotice.bind(this)), con.on("rowDescription", this._handleRowDescription.bind(this)), con.on("dataRow", this._handleDataRow.bind(this)), con.on("portalSuspended", this._handlePortalSuspended.bind(this)), con.on("emptyQuery", this._handleEmptyQuery.bind(this)), con.on("commandComplete", this._handleCommandComplete.bind(this)), con.on("parseComplete", this._handleParseComplete.bind(this)), con.on("copyInResponse", this._handleCopyInResponse.bind(this)), con.on("copyData", this._handleCopyData.bind(this)), con.on("notification", this._handleNotification.bind(this));
      }
      _getPassword(cb) {
        let con = this.connection;
        if (typeof this.password == "function")
          this._Promise.resolve().then(() => this.password(this.connectionParameters)).then((pass) => {
            if (pass !== void 0) {
              if (typeof pass != "string") {
                con.emit("error", new TypeError("Password must be a string"));
                return;
              }
              this.connectionParameters.password = this.password = pass;
            } else
              this.connectionParameters.password = this.password = null;
            cb();
          }).catch((err) => {
            con.emit("error", err);
          });
        else if (this.password !== null)
          cb();
        else
          try {
            require_lib()(this.connectionParameters, (pass) => {
              pass !== void 0 && (pgPassDeprecationNotice(), this.connectionParameters.password = this.password = pass), cb();
            });
          } catch (e) {
            this.emit("error", e);
          }
      }
      _handleAuthCleartextPassword(msg) {
        this._getPassword(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(msg) {
        this._getPassword(async () => {
          try {
            let hashedPassword = await crypto3.postgresMd5PasswordHash(this.user, this.password, msg.salt);
            this.connection.password(hashedPassword);
          } catch (e) {
            this.emit("error", e);
          }
        });
      }
      _handleAuthSASL(msg) {
        this._getPassword(() => {
          try {
            this.saslSession = sasl.startSession(
              msg.mechanisms,
              this.enableChannelBinding && this.connection.stream,
              this.scramMaxIterations
            ), this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
          } catch (err) {
            this.connection.emit("error", err);
          }
        });
      }
      async _handleAuthSASLContinue(msg) {
        try {
          await sasl.continueSession(
            this.saslSession,
            this.password,
            msg.data,
            this.enableChannelBinding && this.connection.stream
          ), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
        } catch (err) {
          this.connection.emit("error", err);
        }
      }
      _handleAuthSASLFinal(msg) {
        try {
          sasl.finalizeSession(this.saslSession, msg.data), this.saslSession = null;
        } catch (err) {
          this.connection.emit("error", err);
        }
      }
      _handleBackendKeyData(msg) {
        this.processID = msg.processID, this.secretKey = msg.secretKey;
      }
      _handleReadyForQuery(msg) {
        this._connecting && (this._connecting = !1, this._connected = !0, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("connect"));
        let activeQuery = this._getActiveQuery();
        this._activeQuery = null, this._txStatus = msg?.status ?? null, this.readyForQuery = !0, activeQuery && activeQuery.handleReadyForQuery(this.connection), this._pulseQueryQueue();
      }
      // if we receive an error event or error message
      // during the connection process we handle it here
      _handleErrorWhileConnecting(err) {
        if (!this._connectionError) {
          if (this._connectionError = !0, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback)
            return this._connectionCallback(err);
          this.emit("error", err);
        }
      }
      // if we're connected and we receive an error event from the connection
      // this means the socket is dead - do a hard abort of all queries and emit
      // the socket error on the client as well
      _handleErrorEvent(err) {
        if (this._connecting)
          return this._handleErrorWhileConnecting(err);
        this._queryable = !1, this._errorAllQueries(err), this.emit("error", err);
      }
      // handle error messages from the postgres backend
      _handleErrorMessage(msg) {
        if (this._connecting)
          return this._handleErrorWhileConnecting(msg);
        let activeQuery = this._getActiveQuery();
        if (!activeQuery) {
          this._handleErrorEvent(msg);
          return;
        }
        this._activeQuery = null, activeQuery.name && delete this.connection.submittedNamedStatements[activeQuery.name], activeQuery.handleError(msg, this.connection);
      }
      _handleRowDescription(msg) {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected rowDescription message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleRowDescription(msg);
      }
      _handleDataRow(msg) {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected dataRow message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleDataRow(msg);
      }
      _handlePortalSuspended(msg) {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected portalSuspended message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(msg) {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected emptyQuery message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(msg) {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected commandComplete message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCommandComplete(msg, this.connection);
      }
      _handleParseComplete() {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected parseComplete message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.name && (this.connection.parsedStatements[activeQuery.name] = activeQuery.text, delete this.connection.submittedNamedStatements[activeQuery.name]);
      }
      _handleCopyInResponse(msg) {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected copyInResponse message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCopyInResponse(this.connection);
      }
      _handleCopyData(msg) {
        let activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          let error = new Error("Received unexpected copyData message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCopyData(msg, this.connection);
      }
      _handleNotification(msg) {
        this.emit("notification", msg);
      }
      _handleNotice(msg) {
        this.emit("notice", msg);
      }
      getStartupConf() {
        let params = this.connectionParameters, data = {
          user: params.user,
          database: params.database
        }, appName = params.application_name || params.fallback_application_name;
        return appName && (data.application_name = appName), params.replication && (data.replication = "" + params.replication), params.statement_timeout && (data.statement_timeout = String(parseInt(params.statement_timeout, 10))), params.lock_timeout && (data.lock_timeout = String(parseInt(params.lock_timeout, 10))), params.idle_in_transaction_session_timeout && (data.idle_in_transaction_session_timeout = String(parseInt(params.idle_in_transaction_session_timeout, 10))), params.options && (data.options = params.options), data;
      }
      cancel(client, query) {
        if (client.activeQuery === query) {
          let con = this.connection;
          this.host && this.host.indexOf("/") === 0 ? con.connect(this.host + "/.s.PGSQL." + this.port) : con.connect(this.port, this.host), con.on("connect", function() {
            con.cancel(client.processID, client.secretKey);
          });
        } else client._queryQueue.indexOf(query) !== -1 ? client._queryQueue.splice(client._queryQueue.indexOf(query), 1) : client._sentQueryQueue.indexOf(query) !== -1 && (query.callback = () => {
        });
      }
      setTypeParser(oid, format2, parseFn) {
        return this._types.setTypeParser(oid, format2, parseFn);
      }
      getTypeParser(oid, format2) {
        return this._types.getTypeParser(oid, format2);
      }
      // escapeIdentifier and escapeLiteral moved to utility functions & exported
      // on PG
      // re-exported here for backwards compatibility
      escapeIdentifier(str) {
        return utils.escapeIdentifier(str);
      }
      escapeLiteral(str) {
        return utils.escapeLiteral(str);
      }
      _pulseQueryQueue() {
        if (this.pipeline) {
          this._pulsePipelinedQueryQueue();
          return;
        }
        if (this.readyForQuery === !0) {
          this._activeQuery = this._queryQueue.shift();
          let activeQuery = this._getActiveQuery();
          if (activeQuery) {
            this.readyForQuery = !1, this.hasExecuted = !0;
            let queryError = activeQuery.submit(this.connection);
            queryError && process.nextTick(() => {
              activeQuery.handleError(queryError, this.connection), this.readyForQuery = !0, this._pulseQueryQueue();
            });
          } else this.hasExecuted && (this._activeQuery = null, this.emit("drain"));
        }
      }
      _pulsePipelinedQueryQueue() {
        if (!(!this._connected || !this._queryable)) {
          for (; this._queryQueue.length > 0; ) {
            let query = this._queryQueue.shift();
            this.hasExecuted = !0;
            let queryError = query.submit(this.connection);
            if (queryError) {
              process.nextTick(() => {
                query.handleError(queryError, this.connection);
              });
              continue;
            }
            this._sentQueryQueue.push(query);
          }
          this.readyForQuery && !this._activeQuery && this._sentQueryQueue.length > 0 && (this._activeQuery = this._sentQueryQueue.shift(), this.readyForQuery = !1), !this._activeQuery && this._sentQueryQueue.length === 0 && this._queryQueue.length === 0 && this.hasExecuted && this.emit("drain");
        }
      }
      query(config, values, callback) {
        let query, result2;
        if (config == null)
          throw new TypeError("Client was passed a null or undefined query");
        if (typeof config.submit == "function")
          result2 = query = config, query.callback || (typeof values == "function" ? query.callback = values : callback && (query.callback = callback));
        else if (query = new Query2(config, values, callback), !query.callback)
          result2 = new this._Promise((resolve, reject) => {
            query.callback = (err, res) => err ? reject(err) : resolve(res);
          }).catch((err) => {
            throw Error.captureStackTrace(err), err;
          });
        else if (typeof query.callback != "function")
          throw new TypeError("callback is not a function");
        let readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
        if (readTimeout) {
          let queryCallback = query.callback || (() => {
          }), readTimeoutTimer = setTimeout(() => {
            let error = new Error("Query read timeout");
            process.nextTick(() => {
              query.handleError(error, this.connection);
            }), queryCallback(error), query.callback = () => {
            };
            let index2 = this._queryQueue.indexOf(query);
            if (index2 > -1)
              this._queryQueue.splice(index2, 1);
            else if (this.pipeline) {
              this.connection.stream.destroy();
              return;
            }
            this._pulseQueryQueue();
          }, readTimeout);
          query.callback = (err, res) => {
            clearTimeout(readTimeoutTimer), queryCallback(err, res);
          };
        }
        if (this.binary && !query.binary && (query.binary = !0), query._result && !query._result._types && (query._result._types = this._types), this.pipeline) {
          let portalQuery = typeof config.submit == "function" && !(query instanceof Query2) ? "Custom query classes such as pg-cursor and pg-query-stream are" : query.rows ? "The `rows` option is" : null;
          if (portalQuery)
            return process.nextTick(() => {
              query.handleError(new Error(`${portalQuery} not supported in pipeline mode`), this.connection);
            }), result2;
        }
        return this._queryable ? this._ending ? (process.nextTick(() => {
          query.handleError(new Error("Client was closed and is not queryable"), this.connection);
        }), result2) : (this._queryQueue.length > 0 && !this.pipeline && queryQueueLengthDeprecationNotice(), this._queryQueue.push(query), this._pulseQueryQueue(), result2) : (process.nextTick(() => {
          query.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
        }), result2);
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      getTransactionStatus() {
        return this._txStatus;
      }
      end(cb) {
        if (this._ending = !0, !this.connection._connecting || this._ended)
          if (cb) {
            cb();
            return;
          } else
            return this._Promise.resolve();
        if (this._queryable ? this.pipeline && (this._getActiveQuery() || this._sentQueryQueue.length > 0 || this._queryQueue.length > 0) ? this.once("drain", () => this.connection.end()) : this._getActiveQuery() ? this.connection.stream.destroy() : this.connection.end() : this.connection.stream.destroy(), cb)
          this.connection.once("end", cb);
        else
          return new this._Promise((resolve) => {
            this.connection.once("end", resolve);
          });
      }
      get queryQueue() {
        return queryQueueDeprecationNotice(), this._queryQueue;
      }
    };
    Client2.Query = Query2;
    module.exports = Client2;
  }
});

// node_modules/pg-pool/index.js
var require_pg_pool = __commonJS({
  "node_modules/pg-pool/index.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter, NOOP = function() {
    }, removeWhere = (list, predicate) => {
      let i = list.findIndex(predicate);
      return i === -1 ? void 0 : list.splice(i, 1)[0];
    }, IdleItem = class {
      constructor(client, idleListener, timeoutId) {
        this.client = client, this.idleListener = idleListener, this.timeoutId = timeoutId;
      }
    }, PendingItem = class {
      constructor(callback) {
        this.callback = callback;
      }
    };
    function throwOnDoubleRelease() {
      throw new Error("Release called on client which has already been released to the pool.");
    }
    function promisify(Promise2, callback) {
      if (callback)
        return { callback, result: void 0 };
      let rej, res, cb = function(err, client) {
        err ? rej(err) : res(client);
      }, result2 = new Promise2(function(resolve, reject) {
        res = resolve, rej = reject;
      }).catch((err) => {
        throw Error.captureStackTrace(err), err;
      });
      return { callback: cb, result: result2 };
    }
    function makeIdleListener(pool, client) {
      return function idleListener(err) {
        err.client = client, client.removeListener("error", idleListener), client.on("error", () => {
          pool.log("additional client error after disconnection due to error", err);
        }), pool._remove(client), pool.emit("error", err, client);
      };
    }
    var Pool2 = class extends EventEmitter {
      constructor(options, Client2) {
        super(), this.options = Object.assign({}, options), options != null && "password" in options && Object.defineProperty(this.options, "password", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: options.password
        }), options != null && options.ssl && options.ssl.key && Object.defineProperty(this.options.ssl, "key", {
          enumerable: !1
        }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.min = this.options.min || 0, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || !1, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {
        }, this.Client = this.options.Client || Client2 || require_lib2().Client, this.Promise = this.options.Promise || global.Promise, typeof this.options.idleTimeoutMillis > "u" && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = /* @__PURE__ */ new WeakSet(), this._pendingQueue = [], this._endCallback = void 0, this.ending = !1, this.ended = !1;
      }
      _promiseTry(f) {
        let Promise2 = this.Promise;
        return typeof Promise2.try == "function" ? Promise2.try(f) : new Promise2((resolve) => resolve(f()));
      }
      _isFull() {
        return this._clients.length >= this.options.max;
      }
      _isAboveMin() {
        return this._clients.length > this.options.min;
      }
      _pulseQueue() {
        if (this.log("pulse queue"), this.ended) {
          this.log("pulse queue ended");
          return;
        }
        if (this.ending) {
          this.log("pulse queue on ending"), this._idle.length && this._idle.slice().map((item) => {
            this._remove(item.client);
          }), this._clients.length || (this.ended = !0, this._endCallback());
          return;
        }
        if (!this._pendingQueue.length) {
          this.log("no queued requests");
          return;
        }
        if (!this._idle.length && this._isFull())
          return;
        let pendingItem = this._pendingQueue.shift();
        if (this._idle.length) {
          let idleItem = this._idle.pop();
          clearTimeout(idleItem.timeoutId);
          let client = idleItem.client;
          client.ref && client.ref();
          let idleListener = idleItem.idleListener;
          return this._acquireClient(client, pendingItem, idleListener, !1);
        }
        if (!this._isFull())
          return this.newClient(pendingItem);
        throw new Error("unexpected condition");
      }
      _remove(client, callback) {
        let removed = removeWhere(this._idle, (item) => item.client === client);
        removed !== void 0 && clearTimeout(removed.timeoutId), this._clients = this._clients.filter((c) => c !== client);
        let context = this;
        client.end(() => {
          context.emit("remove", client), typeof callback == "function" && callback();
        });
      }
      connect(cb) {
        if (this.ending) {
          let err = new Error("Cannot use a pool after calling end on the pool");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        let response = promisify(this.Promise, cb), result2 = response.result;
        if (this._isFull() || this._idle.length) {
          if (this._idle.length && process.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis)
            return this._pendingQueue.push(new PendingItem(response.callback)), result2;
          let queueCallback = (err, res, done) => {
            clearTimeout(tid), response.callback(err, res, done);
          }, pendingItem = new PendingItem(queueCallback), tid = setTimeout(() => {
            removeWhere(this._pendingQueue, (i) => i.callback === queueCallback), pendingItem.timedOut = !0, response.callback(new Error("timeout exceeded when trying to connect"));
          }, this.options.connectionTimeoutMillis);
          return tid.unref && tid.unref(), this._pendingQueue.push(pendingItem), result2;
        }
        return this.newClient(new PendingItem(response.callback)), result2;
      }
      newClient(pendingItem) {
        let client = new this.Client(this.options);
        this._clients.push(client);
        let idleListener = makeIdleListener(this, client);
        this.log("checking client timeout");
        let tid, timeoutHit = !1;
        this.options.connectionTimeoutMillis && (tid = setTimeout(() => {
          client.connection ? (this.log("ending client due to timeout"), timeoutHit = !0, client.connection.stream.destroy()) : client.isConnected() || (this.log("ending client due to timeout"), timeoutHit = !0, client.end());
        }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), client.connect((err) => {
          if (tid && clearTimeout(tid), client.on("error", idleListener), err)
            this.log("client failed to connect", err), this._clients = this._clients.filter((c) => c !== client), timeoutHit && (err = new Error("Connection terminated due to connection timeout", { cause: err })), this._pulseQueue(), pendingItem.timedOut || pendingItem.callback(err, void 0, NOOP);
          else {
            if (this.log("new client connected"), this.options.onConnect) {
              this._promiseTry(() => this.options.onConnect(client)).then(
                () => {
                  this._afterConnect(client, pendingItem, idleListener);
                },
                (hookErr) => {
                  this._clients = this._clients.filter((c) => c !== client), client.end(() => {
                    this._pulseQueue(), pendingItem.timedOut || pendingItem.callback(hookErr, void 0, NOOP);
                  });
                }
              );
              return;
            }
            return this._afterConnect(client, pendingItem, idleListener);
          }
        });
      }
      _afterConnect(client, pendingItem, idleListener) {
        if (this.options.maxLifetimeSeconds !== 0) {
          let maxLifetimeTimeout = setTimeout(() => {
            this.log("ending client due to expired lifetime"), this._expired.add(client), this._idle.findIndex((idleItem) => idleItem.client === client) !== -1 && this._acquireClient(
              client,
              new PendingItem((err, client2, clientRelease) => clientRelease()),
              idleListener,
              !1
            );
          }, this.options.maxLifetimeSeconds * 1e3);
          maxLifetimeTimeout.unref(), client.once("end", () => clearTimeout(maxLifetimeTimeout));
        }
        return this._acquireClient(client, pendingItem, idleListener, !0);
      }
      // acquire a client for a pending work item
      _acquireClient(client, pendingItem, idleListener, isNew) {
        isNew && this.emit("connect", client), this.emit("acquire", client), client.release = this._releaseOnce(client, idleListener), client.removeListener("error", idleListener), pendingItem.timedOut ? isNew && this.options.verify ? this.options.verify(client, client.release) : client.release() : isNew && this.options.verify ? this.options.verify(client, (err) => {
          if (err)
            return client.release(err), pendingItem.callback(err, void 0, NOOP);
          pendingItem.callback(void 0, client, client.release);
        }) : pendingItem.callback(void 0, client, client.release);
      }
      // returns a function that wraps _release and throws if called more than once
      _releaseOnce(client, idleListener) {
        let released = !1;
        return (err) => {
          released && throwOnDoubleRelease(), released = !0, this._release(client, idleListener, err);
        };
      }
      // release a client back to the poll, include an error
      // to remove it from the pool
      _release(client, idleListener, err) {
        if (client.on("error", idleListener), client._poolUseCount = (client._poolUseCount || 0) + 1, this.emit("release", err, client), err || this.ending || !client._queryable || client._ending || client._poolUseCount >= this.options.maxUses)
          return client._poolUseCount >= this.options.maxUses && this.log("remove expended client"), this._remove(client, this._pulseQueue.bind(this));
        if (this._expired.has(client))
          return this.log("remove expired client"), this._expired.delete(client), this._remove(client, this._pulseQueue.bind(this));
        let tid;
        this.options.idleTimeoutMillis && this._isAboveMin() && (tid = setTimeout(() => {
          this._isAboveMin() && (this.log("remove idle client"), this._remove(client, this._pulseQueue.bind(this)));
        }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && tid.unref()), this.options.allowExitOnIdle && client.unref(), this._idle.push(new IdleItem(client, idleListener, tid)), this._pulseQueue();
      }
      query(text, values, cb) {
        if (typeof text == "function") {
          let response2 = promisify(this.Promise, text);
          return setImmediate(function() {
            return response2.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
          }), response2.result;
        }
        typeof values == "function" && (cb = values, values = void 0);
        let response = promisify(this.Promise, cb);
        return cb = response.callback, this.connect((err, client) => {
          if (err)
            return cb(err);
          let clientReleased = !1, onError = (err2) => {
            clientReleased || (clientReleased = !0, client.release(err2), cb(err2));
          };
          client.once("error", onError), this.log("dispatching query");
          try {
            client.query(text, values, (err2, res) => {
              if (this.log("query dispatched"), client.removeListener("error", onError), !clientReleased)
                return clientReleased = !0, client.release(err2), err2 ? cb(err2) : cb(void 0, res);
            });
          } catch (err2) {
            return client.release(err2), cb(err2);
          }
        }), response.result;
      }
      end(cb) {
        if (this.log("ending"), this.ending) {
          let err = new Error("Called end on pool more than once");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        this.ending = !0;
        let promised = promisify(this.Promise, cb);
        return this._endCallback = promised.callback, this._pulseQueue(), promised.result;
      }
      get waitingCount() {
        return this._pendingQueue.length;
      }
      get idleCount() {
        return this._idle.length;
      }
      get expiredCount() {
        return this._clients.reduce((acc, client) => acc + (this._expired.has(client) ? 1 : 0), 0);
      }
      get totalCount() {
        return this._clients.length;
      }
    };
    module.exports = Pool2;
  }
});

// node_modules/pg/lib/native/query.js
var require_query2 = __commonJS({
  "node_modules/pg/lib/native/query.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter, util = __require("util"), utils = require_utils(), NativeQuery = module.exports = function(config, values, callback) {
      EventEmitter.call(this), config = utils.normalizeQueryConfig(config, values, callback), this.text = config.text, this.values = config.values, this.name = config.name, this.queryMode = config.queryMode, this.callback = config.callback, this.state = "new", this._arrayMode = config.rowMode === "array", this._emitRowEvents = !1, this.on(
        "newListener",
        function(event) {
          event === "row" && (this._emitRowEvents = !0);
        }.bind(this)
      );
    };
    util.inherits(NativeQuery, EventEmitter);
    var errorFieldMap = {
      sqlState: "code",
      statementPosition: "position",
      messagePrimary: "message",
      messageDetail: "detail",
      messageHint: "hint",
      context: "where",
      schemaName: "schema",
      tableName: "table",
      columnName: "column",
      dataTypeName: "dataType",
      constraintName: "constraint",
      sourceFile: "file",
      sourceLine: "line",
      sourceFunction: "routine"
    };
    NativeQuery.prototype.handleError = function(err) {
      let fields = this.native && this.native.pq.resultErrorFields();
      if (fields)
        for (let key2 in fields) {
          let normalizedFieldName = errorFieldMap[key2] || key2;
          err[normalizedFieldName] = fields[key2];
        }
      this.callback ? this.callback(err) : this.emit("error", err), this.state = "error";
    };
    NativeQuery.prototype.then = function(onSuccess, onFailure) {
      return this._getPromise().then(onSuccess, onFailure);
    };
    NativeQuery.prototype.catch = function(callback) {
      return this._getPromise().catch(callback);
    };
    NativeQuery.prototype._getPromise = function() {
      return this._promise ? this._promise : (this._promise = new Promise(
        function(resolve, reject) {
          this._once("end", resolve), this._once("error", reject);
        }.bind(this)
      ), this._promise);
    };
    NativeQuery.prototype.submit = function(client) {
      this.state = "running";
      let self = this;
      this.native = client.native, client.native.arrayMode = this._arrayMode;
      let after = function(err, rows, results) {
        if (client.native.arrayMode = !1, setImmediate(function() {
          self.emit("_done");
        }), err)
          return self.handleError(err);
        self._emitRowEvents && (results.length > 1 ? rows.forEach((rowOfRows, i) => {
          rowOfRows.forEach((row) => {
            self.emit("row", row, results[i]);
          });
        }) : rows.forEach(function(row) {
          self.emit("row", row, results);
        })), self.state = "end", self.emit("end", results), self.callback && self.callback(null, results);
      };
      if (process.domain && (after = process.domain.bind(after)), this.name) {
        this.name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", this.name, this.name.length), console.error("This can cause conflicts and silent errors executing queries"));
        let values = (this.values || []).map(utils.prepareValue);
        if (client.namedQueries[this.name] !== void 0) {
          if (this.text && client.namedQueries[this.name] !== this.text) {
            let err = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
            return after(err);
          }
          return client.native.execute(this.name, values, after);
        }
        return client.native.prepare(this.name, this.text, values.length, function(err) {
          return err ? after(err) : (client.namedQueries[self.name] = self.text, self.native.execute(self.name, values, after));
        });
      } else if (this.values) {
        if (!Array.isArray(this.values)) {
          let err = new Error("Query values must be an array");
          return after(err);
        }
        let vals = this.values.map(utils.prepareValue);
        client.native.query(this.text, vals, after);
      } else this.queryMode === "extended" ? client.native.query(this.text, [], after) : client.native.query(this.text, after);
    };
  }
});

// node_modules/pg/lib/native/client.js
var require_client2 = __commonJS({
  "node_modules/pg/lib/native/client.js"(exports, module) {
    var nodeUtils = __require("util"), Native;
    try {
      Native = __require("pg-native");
    } catch (e) {
      throw e;
    }
    var TypeOverrides2 = require_type_overrides(), EventEmitter = __require("events").EventEmitter, util = __require("util"), ConnectionParameters = require_connection_parameters(), NativeQuery = require_query2(), queryQueueLengthDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Calling client.query() when the client is already executing a query is deprecated and will be removed in pg@9.0. Use async/await or an external async flow control mechanism instead."
    ), Client2 = module.exports = function(config) {
      EventEmitter.call(this), config = config || {}, this._Promise = config.Promise || global.Promise, this._types = new TypeOverrides2(config.types), this.native = new Native({
        types: this._types
      }), this._queryQueue = [], this._ending = !1, this._connecting = !1, this._connected = !1, this._queryable = !0, this.pipeline = !!config.pipeline, this._pipelineInFlight = !1;
      let cp = this.connectionParameters = new ConnectionParameters(config);
      config.nativeConnectionString && (cp.nativeConnectionString = config.nativeConnectionString), this.user = cp.user, Object.defineProperty(this, "password", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: cp.password
      }), this.database = cp.database, this.host = cp.host, this.port = cp.port, this.namedQueries = {};
    };
    Client2.Query = NativeQuery;
    util.inherits(Client2, EventEmitter);
    Client2.prototype._errorAllQueries = function(err) {
      let enqueueError = (query) => {
        process.nextTick(() => {
          query.native = this.native, query.handleError(err);
        });
      };
      this._hasActiveQuery() && (enqueueError(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(enqueueError), this._queryQueue.length = 0;
    };
    Client2.prototype._connect = function(cb) {
      let self = this;
      if (this._connecting) {
        process.nextTick(() => cb(new Error("Client has already been connected. You cannot reuse a client.")));
        return;
      }
      this._connecting = !0, this.connectionParameters.getLibpqConnectionString(function(err, conString) {
        if (self.connectionParameters.nativeConnectionString && (conString = self.connectionParameters.nativeConnectionString), err) return cb(err);
        self.native.connect(conString, function(err2) {
          if (err2)
            return self.native.end(), cb(err2);
          self._connected = !0, self.native.on("error", function(err3) {
            self._queryable = !1, self._errorAllQueries(err3), self.emit("error", err3);
          }), self.native.on("notification", function(msg) {
            self.emit("notification", {
              channel: msg.relname,
              payload: msg.extra
            });
          }), self.emit("connect"), self._pulseQueryQueue(!0), cb(null, this);
        });
      });
    };
    Client2.prototype.connect = function(callback) {
      if (callback) {
        this._connect(callback);
        return;
      }
      return new this._Promise((resolve, reject) => {
        this._connect((error) => {
          error ? reject(error) : resolve(this);
        });
      });
    };
    Client2.prototype.query = function(config, values, callback) {
      let query, result2, readTimeout, readTimeoutTimer, queryCallback;
      if (config == null)
        throw new TypeError("Client was passed a null or undefined query");
      if (typeof config.submit == "function")
        readTimeout = config.query_timeout || this.connectionParameters.query_timeout, result2 = query = config, typeof values == "function" && (config.callback = values);
      else if (readTimeout = config.query_timeout || this.connectionParameters.query_timeout, query = new NativeQuery(config, values, callback), !query.callback) {
        let resolveOut, rejectOut;
        result2 = new this._Promise((resolve, reject) => {
          resolveOut = resolve, rejectOut = reject;
        }).catch((err) => {
          throw Error.captureStackTrace(err), err;
        }), query.callback = (err, res) => err ? rejectOut(err) : resolveOut(res);
      }
      return readTimeout && (queryCallback = query.callback || (() => {
      }), readTimeoutTimer = setTimeout(() => {
        let error = new Error("Query read timeout");
        process.nextTick(() => {
          query.handleError(error, this.connection);
        }), queryCallback(error), query.callback = () => {
        };
        let index2 = this._queryQueue.indexOf(query);
        index2 > -1 && this._queryQueue.splice(index2, 1), this._pulseQueryQueue();
      }, readTimeout), query.callback = (err, res) => {
        clearTimeout(readTimeoutTimer), queryCallback(err, res);
      }), this._queryable ? this._ending ? (query.native = this.native, process.nextTick(() => {
        query.handleError(new Error("Client was closed and is not queryable"));
      }), result2) : (this._queryQueue.length > 0 && !this.pipeline && queryQueueLengthDeprecationNotice(), this._queryQueue.push(query), this._pulseQueryQueue(), result2) : (query.native = this.native, process.nextTick(() => {
        query.handleError(new Error("Client has encountered a connection error and is not queryable"));
      }), result2);
    };
    Client2.prototype.end = function(cb) {
      let self = this;
      this._ending = !0, this._connecting && !this._connected && this.once("connect", () => {
        this.end(() => {
        });
      });
      let result2;
      cb || (result2 = new this._Promise(function(resolve, reject) {
        cb = (err) => err ? reject(err) : resolve();
      }));
      let doEnd = function() {
        self.native.end(function() {
          self._connected = !1, self._errorAllQueries(new Error("Connection terminated")), process.nextTick(() => {
            self.emit("end"), cb && cb();
          });
        });
      };
      return this.pipeline && (this._pipelineInFlight || this._queryQueue.length > 0) ? this.once("drain", doEnd) : doEnd(), result2;
    };
    Client2.prototype._hasActiveQuery = function() {
      return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
    };
    Client2.prototype._pulseQueryQueue = function(initialConnection) {
      if (!this._connected)
        return;
      if (this.pipeline && !initialConnection)
        return this._pulsePipelinedQueryQueue();
      if (this._hasActiveQuery())
        return;
      let query = this._queryQueue.shift();
      if (!query) {
        initialConnection || this.emit("drain");
        return;
      }
      this._activeQuery = query, query.submit(this);
      let self = this;
      query.once("_done", function() {
        self._pulseQueryQueue();
      });
    };
    Client2.prototype._pulsePipelinedQueryQueue = function() {
      if (!this._connected || this._pipelineInFlight)
        return;
      if (this._queryQueue.length === 0) {
        this.hasExecuted && this.emit("drain");
        return;
      }
      this._pipelineInFlight = !0;
      let self = this, queries = [], nativeQueries = [], utils = require_utils();
      for (; this._queryQueue.length > 0; ) {
        let query = this._queryQueue.shift();
        this.hasExecuted = !0, nativeQueries.push(query);
        let values = query.values ? query.values.map(utils.prepareValue) : null, pipelineEntry = { text: query.text, name: query.name, arrayMode: query._arrayMode };
        values && (pipelineEntry.values = values), query.name && this.namedQueries[query.name] && (pipelineEntry._alreadyPrepared = !0), queries.push(pipelineEntry);
      }
      this.native.pipeline(queries, function(err, results) {
        if (self._pipelineInFlight = !1, err) {
          self._connected = !1, self._queryable = !1;
          for (let i = 0; i < nativeQueries.length; i++) {
            let q = nativeQueries[i];
            q.native = self.native, q.handleError(err);
          }
          self._errorAllQueries(err), self.emit("error", err), self.emit("end");
          return;
        }
        for (let i = 0; i < nativeQueries.length; i++) {
          let q = nativeQueries[i], r = results[i];
          q.native = self.native, r.err ? q.handleError(r.err) : (q.name && (self.namedQueries[q.name] = q.text), q.state = "end", q.emit("end", r.result), q.callback && q.callback(null, r.result)), setImmediate(function() {
            q.emit("_done");
          });
        }
        self._pulsePipelinedQueryQueue();
      });
    };
    Client2.prototype.cancel = function(query) {
      this._activeQuery === query ? this.native.cancel(function() {
      }) : this._queryQueue.indexOf(query) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(query), 1);
    };
    Client2.prototype.ref = function() {
    };
    Client2.prototype.unref = function() {
    };
    Client2.prototype.setTypeParser = function(oid, format2, parseFn) {
      return this._types.setTypeParser(oid, format2, parseFn);
    };
    Client2.prototype.getTypeParser = function(oid, format2) {
      return this._types.getTypeParser(oid, format2);
    };
    Client2.prototype.isConnected = function() {
      return this._connected;
    };
    Client2.prototype.getTransactionStatus = function() {
      return this.native.getTransactionStatus();
    };
  }
});

// node_modules/pg/lib/native/index.js
var require_native = __commonJS({
  "node_modules/pg/lib/native/index.js"(exports, module) {
    "use strict";
    module.exports = require_client2();
  }
});

// node_modules/pg/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/pg/lib/index.js"(exports, module) {
    "use strict";
    var Client2 = require_client(), defaults2 = require_defaults(), Connection2 = require_connection(), Result2 = require_result(), utils = require_utils(), Pool2 = require_pg_pool(), TypeOverrides2 = require_type_overrides(), { DatabaseError: DatabaseError2 } = require_dist(), { escapeIdentifier: escapeIdentifier2, escapeLiteral: escapeLiteral2 } = require_utils(), poolFactory = (Client3) => class extends Pool2 {
      constructor(options) {
        super(options, Client3);
      }
    }, PG = function(clientConstructor2) {
      this.defaults = defaults2, this.Client = clientConstructor2, this.Query = this.Client.Query, this.Pool = poolFactory(this.Client), this._pools = [], this.Connection = Connection2, this.types = require_pg_types(), this.DatabaseError = DatabaseError2, this.TypeOverrides = TypeOverrides2, this.escapeIdentifier = escapeIdentifier2, this.escapeLiteral = escapeLiteral2, this.Result = Result2, this.utils = utils;
    }, clientConstructor = Client2, forceNative = !1;
    try {
      forceNative = !!process.env.NODE_PG_FORCE_NATIVE;
    } catch {
    }
    forceNative && (clientConstructor = require_native());
    module.exports = new PG(clientConstructor);
    Object.defineProperty(module.exports, "native", {
      configurable: !0,
      enumerable: !1,
      get() {
        let native = null;
        try {
          native = new PG(require_native());
        } catch (err) {
          if (err.code !== "MODULE_NOT_FOUND")
            throw err;
        }
        return Object.defineProperty(module.exports, "native", {
          value: native
        }), native;
      }
    });
  }
});

// src/http.js
var HttpError = class extends Error {
  constructor(status, code, message) {
    super(message || code), this.status = status, this.code = code;
  }
}, bad = (code, message) => new HttpError(400, code, message);
function corsHeaders(req, env) {
  let origin = req.headers.get("Origin") || "";
  return (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean).includes(origin) || /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin) ? {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "content-type, authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  } : { Vary: "Origin" };
}
var json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", ...headers } });
async function readJson(req) {
  try {
    let body = await req.json();
    if (body && typeof body == "object") return body;
  } catch {
  }
  throw bad("invalid_json", "Request body must be a JSON object");
}
var isPositive = (n) => typeof n == "number" && Number.isFinite(n) && n > 0, newId = () => {
  let b = crypto.getRandomValues(new Uint8Array(9));
  return Date.now().toString(36) + Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
};

// src/session.js
var SESSION_MS = 168 * 36e5, enc = new TextEncoder(), b64u = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""), unb64u = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
async function key(env) {
  if (!env.SESSION_SECRET || env.SESSION_SECRET.length < 32) throw new HttpError(500, "misconfigured", "SESSION_SECRET is not set");
  return crypto.subtle.importKey("raw", enc.encode(env.SESSION_SECRET), { name: "HMAC", hash: "SHA-256" }, !1, ["sign", "verify"]);
}
async function issueSession(env, address) {
  let payload = b64u(enc.encode(JSON.stringify({ a: address, exp: Date.now() + SESSION_MS }))), sig = await crypto.subtle.sign("HMAC", await key(env), enc.encode(payload));
  return `${payload}.${b64u(sig)}`;
}
async function requireAddress(req, env) {
  let token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, ""), [payload, sig] = token.split(".");
  if (payload && sig && await crypto.subtle.verify("HMAC", await key(env), unb64u(sig), enc.encode(payload)).catch(() => !1)) {
    let { a, exp } = JSON.parse(new TextDecoder().decode(unb64u(payload)));
    if (exp > Date.now() && /^0x[0-9a-f]{40}$/.test(a)) return a;
  }
  throw new HttpError(401, "unauthorized", "Sign in with your wallet first");
}

// node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
init_getAddress();
init_keccak256();
function publicKeyToAddress(publicKey) {
  let address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address}`);
}

// node_modules/viem/_esm/utils/signature/recoverPublicKey.js
init_isHex();
init_size();
init_fromHex();
init_toHex();
async function recoverPublicKey({ hash, signature }) {
  let hashHex = isHex(hash) ? hash : toHex(hash), { secp256k1: secp256k12 } = await Promise.resolve().then(() => (init_secp256k1(), secp256k1_exports));
  return `0x${(() => {
    if (typeof signature == "object" && "r" in signature && "s" in signature) {
      let { r, s, v, yParity } = signature, yParityOrV2 = Number(yParity ?? v), recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k12.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit2);
    }
    let signatureHex = isHex(signature) ? signature : toHex(signature);
    if (size(signatureHex) !== 65)
      throw new Error("invalid signature length");
    let yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`), recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k12.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })().recoverPublicKey(hashHex.substring(2)).toHex(!1)}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

// node_modules/viem/_esm/utils/authorization/hashAuthorization.js
init_concat();
init_toBytes();
init_toHex();

// node_modules/viem/_esm/utils/encoding/toRlp.js
init_base();
init_cursor2();
init_toBytes();
init_toHex();
function toRlp(bytes, to = "hex") {
  let encodable = getEncodable(bytes), cursor = createCursor(new Uint8Array(encodable.length));
  return encodable.encode(cursor), to === "hex" ? bytesToHex(cursor.bytes) : cursor.bytes;
}
function getEncodable(bytes) {
  return Array.isArray(bytes) ? getEncodableList(bytes.map((x) => getEncodable(x))) : getEncodableBytes(bytes);
}
function getEncodableList(list) {
  let bodyLength = list.reduce((acc, x) => acc + x.length, 0), sizeOfBodyLength = getSizeOfLength(bodyLength);
  return {
    length: bodyLength <= 55 ? 1 + bodyLength : 1 + sizeOfBodyLength + bodyLength,
    encode(cursor) {
      bodyLength <= 55 ? cursor.pushByte(192 + bodyLength) : (cursor.pushByte(247 + sizeOfBodyLength), sizeOfBodyLength === 1 ? cursor.pushUint8(bodyLength) : sizeOfBodyLength === 2 ? cursor.pushUint16(bodyLength) : sizeOfBodyLength === 3 ? cursor.pushUint24(bodyLength) : cursor.pushUint32(bodyLength));
      for (let { encode } of list)
        encode(cursor);
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  let bytes = typeof bytesOrHex == "string" ? hexToBytes(bytesOrHex) : bytesOrHex, sizeOfBytesLength = getSizeOfLength(bytes.length);
  return {
    length: bytes.length === 1 && bytes[0] < 128 ? 1 : bytes.length <= 55 ? 1 + bytes.length : 1 + sizeOfBytesLength + bytes.length,
    encode(cursor) {
      bytes.length === 1 && bytes[0] < 128 ? cursor.pushBytes(bytes) : bytes.length <= 55 ? (cursor.pushByte(128 + bytes.length), cursor.pushBytes(bytes)) : (cursor.pushByte(183 + sizeOfBytesLength), sizeOfBytesLength === 1 ? cursor.pushUint8(bytes.length) : sizeOfBytesLength === 2 ? cursor.pushUint16(bytes.length) : sizeOfBytesLength === 3 ? cursor.pushUint24(bytes.length) : cursor.pushUint32(bytes.length), cursor.pushBytes(bytes));
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/viem/_esm/utils/authorization/hashAuthorization.js
init_keccak256();
function hashAuthorization(parameters) {
  let { chainId, nonce: nonce2, to } = parameters, address = parameters.contractAddress ?? parameters.address, hash = keccak256(concatHex([
    "0x05",
    toRlp([
      chainId ? numberToHex(chainId) : "0x",
      address,
      nonce2 ? numberToHex(nonce2) : "0x"
    ])
  ]));
  return to === "bytes" ? hexToBytes(hash) : hash;
}

// node_modules/viem/_esm/utils/blob/blobsToCommitments.js
init_toBytes();
init_toHex();
function blobsToCommitments(parameters) {
  let { kzg } = parameters, to = parameters.to ?? (typeof parameters.blobs[0] == "string" ? "hex" : "bytes"), blobs = typeof parameters.blobs[0] == "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs, commitments = [];
  for (let blob of blobs)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return to === "bytes" ? commitments : commitments.map((x) => bytesToHex(x));
}

// node_modules/viem/_esm/utils/blob/blobsToProofs.js
init_toBytes();
init_toHex();
function blobsToProofs(parameters) {
  let { kzg } = parameters, to = parameters.to ?? (typeof parameters.blobs[0] == "string" ? "hex" : "bytes"), blobs = typeof parameters.blobs[0] == "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs, commitments = typeof parameters.commitments[0] == "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments, proofs = [];
  for (let i = 0; i < blobs.length; i++) {
    let blob = blobs[i], commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return to === "bytes" ? proofs : proofs.map((x) => bytesToHex(x));
}

// node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
init_toHex();

// node_modules/@noble/hashes/esm/sha256.js
init_sha2();
var sha2562 = sha256;

// node_modules/viem/_esm/utils/hash/sha256.js
init_isHex();
init_toBytes();
init_toHex();
function sha2563(value, to_) {
  let to = to_ || "hex", bytes = sha2562(isHex(value, { strict: !1 }) ? toBytes(value) : value);
  return to === "bytes" ? bytes : toHex(bytes);
}

// node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
function commitmentToVersionedHash(parameters) {
  let { commitment, version: version2 = 1 } = parameters, to = parameters.to ?? (typeof commitment == "string" ? "hex" : "bytes"), versionedHash = sha2563(commitment, "bytes");
  return versionedHash.set([version2], 0), to === "bytes" ? versionedHash : bytesToHex(versionedHash);
}

// node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js
function commitmentsToVersionedHashes(parameters) {
  let { commitments, version: version2 } = parameters, to = parameters.to ?? (typeof commitments[0] == "string" ? "hex" : "bytes"), hashes = [];
  for (let commitment of commitments)
    hashes.push(commitmentToVersionedHash({
      commitment,
      to,
      version: version2
    }));
  return hashes;
}

// node_modules/viem/_esm/errors/blob.js
init_base();
var BlobSizeTooLargeError = class extends BaseError {
  constructor({ maxSize, size: size2 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size2} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}, EmptyBlobError = class extends BaseError {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}, InvalidVersionedHashSizeError = class extends BaseError {
  constructor({ hash, size: size2 }) {
    super(`Versioned hash "${hash}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${size2}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
}, InvalidVersionedHashVersionError = class extends BaseError {
  constructor({ hash, version: version2 }) {
    super(`Versioned hash "${hash}" version is invalid.`, {
      metaMessages: [
        `Expected: ${1}`,
        `Received: ${version2}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
};

// node_modules/viem/_esm/utils/blob/toBlobs.js
init_cursor2();
init_size();
init_toBytes();
init_toHex();
function toBlobs(parameters) {
  let to = parameters.to ?? (typeof parameters.data == "string" ? "hex" : "bytes"), data = typeof parameters.data == "string" ? hexToBytes(parameters.data) : parameters.data, size_ = size(data);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > 761855)
    throw new BlobSizeTooLargeError({
      maxSize: 761855,
      size: size_
    });
  let blobs = [], active = !0, position = 0;
  for (; active; ) {
    let blob = createCursor(new Uint8Array(131072)), size2 = 0;
    for (; size2 < 4096; ) {
      let bytes = data.slice(position, position + 31);
      if (blob.pushByte(0), blob.pushBytes(bytes), bytes.length < 31) {
        blob.pushByte(128), active = !1;
        break;
      }
      size2++, position += 31;
    }
    blobs.push(blob);
  }
  return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex(x.bytes));
}

// node_modules/viem/_esm/utils/blob/toBlobSidecars.js
function toBlobSidecars(parameters) {
  let { data, kzg, to } = parameters, blobs = parameters.blobs ?? toBlobs({ data, to }), commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg, to }), proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg, to }), sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}

// node_modules/viem/_esm/utils/transaction/getTransactionType.js
init_transaction();
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.authorizationList < "u")
    return "eip7702";
  if (typeof transaction.blobs < "u" || typeof transaction.blobVersionedHashes < "u" || typeof transaction.maxFeePerBlobGas < "u" || typeof transaction.sidecars < "u")
    return "eip4844";
  if (typeof transaction.maxFeePerGas < "u" || typeof transaction.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof transaction.gasPrice < "u")
    return typeof transaction.accessList < "u" ? "eip2930" : "legacy";
  throw new InvalidSerializableTransactionError({ transaction });
}

// node_modules/viem/_esm/utils/uid.js
var index = 256, buffer;
function uid(length = 11) {
  if (!buffer || index + length > 256 * 2) {
    buffer = "", index = 0;
    for (let i = 0; i < 256; i++)
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/viem/_esm/utils/authorization/serializeAuthorizationList.js
init_toHex();

// node_modules/viem/_esm/utils/transaction/serializeTransaction.js
init_transaction();
init_concat();
init_trim();
init_toHex();

// node_modules/viem/_esm/utils/transaction/assertTransaction.js
init_number();
init_address();
init_base();
init_chain();
init_node();
init_isAddress();
init_size();
init_slice();
init_fromHex();
function assertTransactionEIP7702(transaction) {
  let { authorizationList } = transaction;
  if (authorizationList)
    for (let authorization of authorizationList) {
      let { chainId } = authorization, address = authorization.address;
      if (!isAddress(address))
        throw new InvalidAddressError({ address });
      if (chainId < 0)
        throw new InvalidChainIdError({ chainId });
    }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
  let { blobVersionedHashes } = transaction;
  if (blobVersionedHashes) {
    if (blobVersionedHashes.length === 0)
      throw new EmptyBlobError();
    for (let hash of blobVersionedHashes) {
      let size_ = size(hash), version2 = hexToNumber(slice(hash, 0, 1));
      if (size_ !== 32)
        throw new InvalidVersionedHashSizeError({ hash, size: size_ });
      if (version2 !== 1)
        throw new InvalidVersionedHashVersionError({
          hash,
          version: version2
        });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
  let { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxFeePerGas && maxFeePerGas > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
function assertTransactionEIP2930(transaction) {
  let { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}
function assertTransactionLegacy(transaction) {
  let { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof chainId < "u" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}

// node_modules/viem/_esm/utils/transaction/serializeAccessList.js
init_address();
init_transaction();
init_isAddress();
function serializeAccessList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  let serializedAccessList = [];
  for (let i = 0; i < accessList.length; i++) {
    let { address, storageKeys } = accessList[i];
    for (let j = 0; j < storageKeys.length; j++)
      if (storageKeys[j].length - 2 !== 64)
        throw new InvalidStorageKeySizeError({ storageKey: storageKeys[j] });
    if (!isAddress(address, { strict: !1 }))
      throw new InvalidAddressError({ address });
    serializedAccessList.push([address, storageKeys]);
  }
  return serializedAccessList;
}

// node_modules/viem/_esm/utils/transaction/serializeTransaction.js
function serializeTransaction(transaction, signature) {
  let type = getTransactionType(transaction);
  return type === "eip1559" ? serializeTransactionEIP1559(transaction, signature) : type === "eip2930" ? serializeTransactionEIP2930(transaction, signature) : type === "eip4844" ? serializeTransactionEIP4844(transaction, signature) : type === "eip7702" ? serializeTransactionEIP7702(transaction, signature) : serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
  let { authorizationList, chainId, gas, nonce: nonce2, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP7702(transaction);
  let serializedAccessList = serializeAccessList(accessList), serializedAuthorizationList = serializeAuthorizationList(authorizationList);
  return concatHex([
    "0x04",
    toRlp([
      numberToHex(chainId),
      nonce2 ? numberToHex(nonce2) : "0x",
      maxPriorityFeePerGas ? numberToHex(maxPriorityFeePerGas) : "0x",
      maxFeePerGas ? numberToHex(maxFeePerGas) : "0x",
      gas ? numberToHex(gas) : "0x",
      to ?? "0x",
      value ? numberToHex(value) : "0x",
      data ?? "0x",
      serializedAccessList,
      serializedAuthorizationList,
      ...toYParitySignatureArray(transaction, signature)
    ])
  ]);
}
function serializeTransactionEIP4844(transaction, signature) {
  let { chainId, gas, nonce: nonce2, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP4844(transaction);
  let blobVersionedHashes = transaction.blobVersionedHashes, sidecars = transaction.sidecars;
  if (transaction.blobs && (typeof blobVersionedHashes > "u" || typeof sidecars > "u")) {
    let blobs2 = typeof transaction.blobs[0] == "string" ? transaction.blobs : transaction.blobs.map((x) => bytesToHex(x)), kzg = transaction.kzg, commitments2 = blobsToCommitments({
      blobs: blobs2,
      kzg
    });
    if (typeof blobVersionedHashes > "u" && (blobVersionedHashes = commitmentsToVersionedHashes({
      commitments: commitments2
    })), typeof sidecars > "u") {
      let proofs2 = blobsToProofs({ blobs: blobs2, commitments: commitments2, kzg });
      sidecars = toBlobSidecars({ blobs: blobs2, commitments: commitments2, proofs: proofs2 });
    }
  }
  let serializedAccessList = serializeAccessList(accessList), serializedTransaction = [
    numberToHex(chainId),
    nonce2 ? numberToHex(nonce2) : "0x",
    maxPriorityFeePerGas ? numberToHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? numberToHex(maxFeePerGas) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    maxFeePerBlobGas ? numberToHex(maxFeePerBlobGas) : "0x",
    blobVersionedHashes ?? [],
    ...toYParitySignatureArray(transaction, signature)
  ], blobs = [], commitments = [], proofs = [];
  if (sidecars)
    for (let i = 0; i < sidecars.length; i++) {
      let { blob, commitment, proof } = sidecars[i];
      blobs.push(blob), commitments.push(commitment), proofs.push(proof);
    }
  return concatHex([
    "0x03",
    sidecars ? (
      // If sidecars are enabled, envelope turns into a "wrapper":
      toRlp([serializedTransaction, blobs, commitments, proofs])
    ) : (
      // If sidecars are disabled, standard envelope is used:
      toRlp(serializedTransaction)
    )
  ]);
}
function serializeTransactionEIP1559(transaction, signature) {
  let { chainId, gas, nonce: nonce2, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP1559(transaction);
  let serializedAccessList = serializeAccessList(accessList), serializedTransaction = [
    numberToHex(chainId),
    nonce2 ? numberToHex(nonce2) : "0x",
    maxPriorityFeePerGas ? numberToHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? numberToHex(maxFeePerGas) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x02",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionEIP2930(transaction, signature) {
  let { chainId, gas, data, nonce: nonce2, to, value, accessList, gasPrice } = transaction;
  assertTransactionEIP2930(transaction);
  let serializedAccessList = serializeAccessList(accessList), serializedTransaction = [
    numberToHex(chainId),
    nonce2 ? numberToHex(nonce2) : "0x",
    gasPrice ? numberToHex(gasPrice) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x01",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionLegacy(transaction, signature) {
  let { chainId = 0, gas, data, nonce: nonce2, to, value, gasPrice } = transaction;
  assertTransactionLegacy(transaction);
  let serializedTransaction = [
    nonce2 ? numberToHex(nonce2) : "0x",
    gasPrice ? numberToHex(gasPrice) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x"
  ];
  if (signature) {
    let v = (() => {
      if (signature.v >= 35n)
        return (signature.v - 35n) / 2n > 0 ? signature.v : 27n + (signature.v === 35n ? 0n : 1n);
      if (chainId > 0)
        return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
      let v2 = 27n + (signature.v === 27n ? 0n : 1n);
      if (signature.v !== v2)
        throw new InvalidLegacyVError({ v: signature.v });
      return v2;
    })(), r = trim(signature.r), s = trim(signature.s);
    serializedTransaction = [
      ...serializedTransaction,
      numberToHex(v),
      r === "0x00" ? "0x" : r,
      s === "0x00" ? "0x" : s
    ];
  } else chainId > 0 && (serializedTransaction = [
    ...serializedTransaction,
    numberToHex(chainId),
    "0x",
    "0x"
  ]);
  return toRlp(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
  let signature = signature_ ?? transaction, { v, yParity } = signature;
  if (typeof signature.r > "u")
    return [];
  if (typeof signature.s > "u")
    return [];
  if (typeof v > "u" && typeof yParity > "u")
    return [];
  let r = trim(signature.r), s = trim(signature.s);
  return [typeof yParity == "number" ? yParity ? numberToHex(1) : "0x" : v === 0n ? "0x" : v === 1n ? numberToHex(1) : v === 27n ? "0x" : numberToHex(1), r === "0x00" ? "0x" : r, s === "0x00" ? "0x" : s];
}

// node_modules/viem/_esm/utils/authorization/serializeAuthorizationList.js
function serializeAuthorizationList(authorizationList) {
  if (!authorizationList || authorizationList.length === 0)
    return [];
  let serializedAuthorizationList = [];
  for (let authorization of authorizationList) {
    let { chainId, nonce: nonce2, ...signature } = authorization, contractAddress = authorization.address;
    serializedAuthorizationList.push([
      chainId ? toHex(chainId) : "0x",
      contractAddress,
      nonce2 ? toHex(nonce2) : "0x",
      ...toYParitySignatureArray({}, signature)
    ]);
  }
  return serializedAuthorizationList;
}

// node_modules/viem/_esm/utils/signature/hashMessage.js
init_keccak256();

// node_modules/viem/_esm/constants/strings.js
var presignMessagePrefix = `Ethereum Signed Message:
`;

// node_modules/viem/_esm/utils/signature/toPrefixedMessage.js
init_concat();
init_size();
init_toHex();
function toPrefixedMessage(message_) {
  let message = typeof message_ == "string" ? stringToHex(message_) : typeof message_.raw == "string" ? message_.raw : bytesToHex(message_.raw), prefix = stringToHex(`${presignMessagePrefix}${size(message)}`);
  return concat([prefix, message]);
}

// node_modules/viem/_esm/utils/signature/hashMessage.js
function hashMessage(message, to_) {
  return keccak256(toPrefixedMessage(message), to_);
}

// node_modules/viem/_esm/utils/signature/hashTypedData.js
init_encodeAbiParameters();
init_concat();
init_toHex();
init_keccak256();

// node_modules/viem/_esm/utils/typedData.js
init_abi();
init_address();

// node_modules/viem/_esm/errors/typedData.js
init_stringify();
init_base();
var InvalidDomainError = class extends BaseError {
  constructor({ domain }) {
    super(`Invalid domain "${stringify(domain)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
  }
}, InvalidPrimaryTypeError = class extends BaseError {
  constructor({ primaryType, types: types2 }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types2))}\`.`, {
      docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
  }
}, InvalidStructTypeError = class extends BaseError {
  constructor({ type }) {
    super(`Struct type "${type}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
}, InvalidTypedDataTypeError = class extends BaseError {
  constructor({ type }) {
    let canonicalType = type.replace(/^(u?int)/, "$&256");
    super(`Type "${type}" is not a valid EIP-712 type.`, {
      metaMessages: [`Use "${canonicalType}" instead.`],
      name: "InvalidTypedDataTypeError"
    });
  }
};

// node_modules/viem/_esm/utils/typedData.js
init_isAddress();
init_size();
init_toHex();
init_regex();
function validateTypedData(parameters) {
  let { domain, message, primaryType, types: types2 } = parameters, validateData = (struct, data) => {
    for (let param of struct) {
      let { name, type } = param, value = data[name], baseType = type.replace(/(\[[0-9]*\])+$/, "");
      if (baseType === "int" || baseType === "uint")
        throw new InvalidTypedDataTypeError({ type });
      let integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value == "number" || typeof value == "bigint")) {
        let [_type, base, size_] = integerMatch;
        numberToHex(value, {
          signed: base === "int",
          size: Number.parseInt(size_, 10) / 8
        });
      }
      if (type === "address" && typeof value == "string" && !isAddress(value))
        throw new InvalidAddressError({ address: value });
      let bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        let [_type, size_] = bytesMatch;
        if (size_ && size(value) !== Number.parseInt(size_, 10))
          throw new BytesSizeMismatchError({
            expectedSize: Number.parseInt(size_, 10),
            givenSize: size(value)
          });
      }
      let struct2 = types2[type];
      struct2 && (validateReference(type), validateData(struct2, value));
    }
  };
  if (types2.EIP712Domain && domain) {
    if (typeof domain != "object")
      throw new InvalidDomainError({ domain });
    validateData(types2.EIP712Domain, domain);
  }
  if (primaryType !== "EIP712Domain")
    if (types2[primaryType])
      validateData(types2[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types: types2 });
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof domain?.name == "string" && { name: "name", type: "string" },
    domain?.version && { name: "version", type: "string" },
    (typeof domain?.chainId == "number" || typeof domain?.chainId == "bigint") && {
      name: "chainId",
      type: "uint256"
    },
    domain?.verifyingContract && {
      name: "verifyingContract",
      type: "address"
    },
    domain?.salt && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function validateReference(type) {
  if (type === "address" || type === "bool" || type === "string" || type.startsWith("bytes") || type.startsWith("uint") || type.startsWith("int"))
    throw new InvalidStructTypeError({ type });
}

// node_modules/viem/_esm/utils/signature/hashTypedData.js
function hashTypedData(parameters) {
  let { domain = {}, message, primaryType } = parameters, types2 = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...parameters.types
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types: types2
  });
  let parts = ["0x1901"];
  return domain && parts.push(hashDomain({
    domain,
    types: types2
  })), primaryType !== "EIP712Domain" && parts.push(hashStruct({
    data: message,
    primaryType,
    types: types2
  })), keccak256(concat(parts));
}
function hashDomain({ domain, types: types2 }) {
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types: types2
  });
}
function hashStruct({ data, primaryType, types: types2 }) {
  let encoded = encodeData({
    data,
    primaryType,
    types: types2
  });
  return keccak256(encoded);
}
function encodeData({ data, primaryType, types: types2 }) {
  let encodedTypes = [{ type: "bytes32" }], encodedValues = [hashType({ primaryType, types: types2 })];
  for (let field of types2[primaryType]) {
    let [type, value] = encodeField({
      types: types2,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type), encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types: types2 }) {
  let encodedHashType = toHex(encodeType({ primaryType, types: types2 }));
  return keccak256(encodedHashType);
}
function encodeType({ primaryType, types: types2 }) {
  let result2 = "", unsortedDeps = findTypeDependencies({ primaryType, types: types2 });
  unsortedDeps.delete(primaryType);
  let deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (let type of deps)
    result2 += `${type}(${types2[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  return result2;
}
function findTypeDependencies({ primaryType: primaryType_, types: types2 }, results = /* @__PURE__ */ new Set()) {
  let primaryType = primaryType_.match(/^\w*/u)?.[0];
  if (results.has(primaryType) || types2[primaryType] === void 0)
    return results;
  results.add(primaryType);
  for (let field of types2[primaryType])
    findTypeDependencies({ primaryType: field.type, types: types2 }, results);
  return results;
}
function encodeField({ types: types2, name, type, value }) {
  if (types2[type] !== void 0)
    return [
      { type: "bytes32" },
      keccak256(encodeData({ data: value, primaryType: type, types: types2 }))
    ];
  if (type === "bytes")
    return [{ type: "bytes32" }, keccak256(value)];
  if (type === "string")
    return [{ type: "bytes32" }, keccak256(toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    let parsedType = type.slice(0, type.lastIndexOf("[")), typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types: types2,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// node_modules/viem/_esm/utils/signature/recoverMessageAddress.js
async function recoverMessageAddress({ message, signature }) {
  return recoverAddress({ hash: hashMessage(message), signature });
}

// node_modules/viem/_esm/utils/unit/parseUnits.js
init_Value();
function parseUnits(value, decimals) {
  return from(value, decimals);
}

// node_modules/viem/_esm/utils/signature/serializeSignature.js
init_secp256k1();
init_fromHex();
init_toBytes();
function serializeSignature({ r, s, to = "hex", v, yParity }) {
  let yParity_ = (() => {
    if (yParity === 0 || yParity === 1)
      return yParity;
    if (v && (v === 27n || v === 28n || v >= 35n))
      return v % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })(), signature = `0x${new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).toCompactHex()}${yParity_ === 0 ? "1b" : "1c"}`;
  return to === "hex" ? signature : hexToBytes(signature);
}

// node_modules/viem/_esm/utils/siwe/parseSiweMessage.js
var siweDateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function isValidSiweDateTime(value) {
  return siweDateTimeRegex.test(value) ? !Number.isNaN(new Date(value).getTime()) : !1;
}
function parseSiweDateTime(value) {
  return isValidSiweDateTime(value) ? new Date(value) : new Date(Number.NaN);
}
function parseSiweMessage(message) {
  let { scheme, statement, ...prefix } = message.match(prefixRegex)?.groups ?? {}, { chainId, expirationTime, issuedAt, notBefore, requestId, resources: resources_, ...suffix } = message.match(suffixRegex)?.groups ?? {}, resources = resources_?.split(`
- `).slice(1);
  return {
    ...prefix,
    ...suffix,
    ...chainId ? { chainId: Number(chainId) } : {},
    ...expirationTime ? { expirationTime: parseSiweDateTime(expirationTime) } : {},
    ...issuedAt ? { issuedAt: parseSiweDateTime(issuedAt) } : {},
    ...notBefore ? { notBefore: parseSiweDateTime(notBefore) } : {},
    ...requestId ? { requestId } : {},
    ...resources ? { resources } : {},
    ...scheme ? { scheme } : {},
    ...statement ? { statement } : {}
  };
}
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.*))?(?:\nResources:(?<resources>(?:\n- .+)*))?/;

// node_modules/viem/_esm/utils/siwe/validateSiweMessage.js
init_isAddress();
init_isAddressEqual();
function validateSiweMessage(parameters) {
  let { address, domain, message, nonce: nonce2, scheme, time = /* @__PURE__ */ new Date() } = parameters;
  if (domain && message.domain !== domain || nonce2 && message.nonce !== nonce2 || scheme && message.scheme !== scheme || Number.isNaN(time.getTime()) || message.expirationTime && (Number.isNaN(message.expirationTime.getTime()) || time >= message.expirationTime) || message.notBefore && (Number.isNaN(message.notBefore.getTime()) || time < message.notBefore))
    return !1;
  try {
    if (!message.address || !isAddress(message.address, { strict: !1 }) || address && !isAddressEqual(message.address, address))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}

// node_modules/viem/_esm/index.js
init_toBytes();
init_keccak256();

// node_modules/viem/_esm/errors/siwe.js
init_base();
var SiweInvalidMessageFieldError = class extends BaseError {
  constructor(parameters) {
    let { docsPath, field, metaMessages } = parameters;
    super(`Invalid Sign-In with Ethereum message field "${field}".`, {
      docsPath,
      metaMessages,
      name: "SiweInvalidMessageFieldError"
    });
  }
};

// node_modules/viem/_esm/utils/siwe/createSiweMessage.js
init_getAddress();

// node_modules/viem/_esm/utils/siwe/utils.js
function isUri(value) {
  if (/[^a-z0-9:/?#[\]@!$&'()*+,;=.\-_~%]/i.test(value) || /%[^0-9a-f]/i.test(value) || /%[0-9a-f](:?[^0-9a-f]|$)/i.test(value))
    return !1;
  let splitted = splitUri(value), scheme = splitted[1], authority = splitted[2], path = splitted[3], query = splitted[4], fragment = splitted[5];
  if (!(scheme?.length && path.length >= 0))
    return !1;
  if (authority?.length) {
    if (!(path.length === 0 || /^\//.test(path)))
      return !1;
  } else if (/^\/\//.test(path))
    return !1;
  if (!/^[a-z][a-z0-9+\-.]*$/.test(scheme.toLowerCase()))
    return !1;
  let out = "";
  return out += `${scheme}:`, authority?.length && (out += `//${authority}`), out += path, query?.length && (out += `?${query}`), fragment?.length && (out += `#${fragment}`), out;
}
function splitUri(value) {
  return value.match(/(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
}

// node_modules/viem/_esm/utils/siwe/createSiweMessage.js
function createSiweMessage(parameters) {
  let { chainId, domain, expirationTime, issuedAt = /* @__PURE__ */ new Date(), nonce: nonce2, notBefore, requestId, resources, scheme, uri, version: version2 } = parameters;
  {
    if (chainId !== Math.floor(chainId))
      throw new SiweInvalidMessageFieldError({
        field: "chainId",
        metaMessages: [
          "- Chain ID must be a EIP-155 chain ID.",
          "- See https://eips.ethereum.org/EIPS/eip-155",
          "",
          `Provided value: ${chainId}`
        ]
      });
    if (!(domainRegex.test(domain) || ipRegex.test(domain) || localhostRegex.test(domain)))
      throw new SiweInvalidMessageFieldError({
        field: "domain",
        metaMessages: [
          "- Domain must be an RFC 3986 authority.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${domain}`
        ]
      });
    if (!nonceRegex.test(nonce2))
      throw new SiweInvalidMessageFieldError({
        field: "nonce",
        metaMessages: [
          "- Nonce must be at least 8 characters.",
          "- Nonce must be alphanumeric.",
          "",
          `Provided value: ${nonce2}`
        ]
      });
    if (!isUri(uri))
      throw new SiweInvalidMessageFieldError({
        field: "uri",
        metaMessages: [
          "- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${uri}`
        ]
      });
    if (version2 !== "1")
      throw new SiweInvalidMessageFieldError({
        field: "version",
        metaMessages: [
          "- Version must be '1'.",
          "",
          `Provided value: ${version2}`
        ]
      });
    if (scheme && !schemeRegex.test(scheme))
      throw new SiweInvalidMessageFieldError({
        field: "scheme",
        metaMessages: [
          "- Scheme must be an RFC 3986 URI scheme.",
          "- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1",
          "",
          `Provided value: ${scheme}`
        ]
      });
    let statement2 = parameters.statement;
    if (statement2?.includes(`
`))
      throw new SiweInvalidMessageFieldError({
        field: "statement",
        metaMessages: [
          "- Statement must not include '\\n'.",
          "",
          `Provided value: ${statement2}`
        ]
      });
  }
  let address = getAddress(parameters.address), origin = scheme ? `${scheme}://${domain}` : domain, statement = parameters.statement ? `${parameters.statement}
` : "", prefix = `${origin} wants you to sign in with your Ethereum account:
${address}

${statement}`, suffix = `URI: ${uri}
Version: ${version2}
Chain ID: ${chainId}
Nonce: ${nonce2}
Issued At: ${issuedAt.toISOString()}`;
  if (expirationTime && (suffix += `
Expiration Time: ${expirationTime.toISOString()}`), notBefore && (suffix += `
Not Before: ${notBefore.toISOString()}`), requestId && (suffix += `
Request ID: ${requestId}`), resources) {
    let content = `
Resources:`;
    for (let resource of resources) {
      if (!isUri(resource))
        throw new SiweInvalidMessageFieldError({
          field: "resources",
          metaMessages: [
            "- Every resource must be a RFC 3986 URI.",
            "- See https://www.rfc-editor.org/rfc/rfc3986",
            "",
            `Provided value: ${resource}`
          ]
        });
      content += `
- ${resource}`;
    }
    suffix += content;
  }
  return `${prefix}
${suffix}`;
}
var domainRegex = /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/, ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/, localhostRegex = /^localhost(:[0-9]{1,5})?$/, nonceRegex = /^[a-zA-Z0-9]{8,}$/, schemeRegex = /^([a-zA-Z][a-zA-Z0-9+\-.]*)$/;

// node_modules/viem/_esm/utils/siwe/generateSiweNonce.js
function generateSiweNonce() {
  return uid(96);
}

// ../shared/currencies.js
var CURRENCIES = {
  ETH: { sym: "ETH", name: "Ether", start: 5, chips: [0.01, 0.05, 0.1, 0.5], dp: 4 },
  BNB: { sym: "BNB", name: "BNB", start: 20, chips: [0.05, 0.1, 0.5, 1], dp: 3 },
  HYPE: { sym: "HYPE", name: "Hyperliquid", start: 300, chips: [1, 5, 10, 50], dp: 2 },
  OKB: { sym: "OKB", name: "OKB", start: 200, chips: [1, 5, 10, 50], dp: 2 },
  MON: { sym: "MON", name: "Monad", start: 1e5, chips: [100, 500, 1e3, 5e3], dp: 0 },
  USDC: { sym: "USDC", name: "USD Coin", start: 1e4, chips: [25, 100, 250, 1e3], dp: 2, stable: !0 },
  USDT: { sym: "USDT", name: "Tether", start: 1e4, chips: [25, 100, 250, 1e3], dp: 2, stable: !0 },
  USDT0: { sym: "USDT0", name: "USDT0", start: 1e4, chips: [25, 100, 250, 1e3], dp: 2, stable: !0 },
  USDG: { sym: "USDG", name: "Global Dollar", start: 1e4, chips: [25, 100, 250, 1e3], dp: 2, stable: !0 }
}, CHAIN_CURRENCIES = {
  8453: ["ETH", "USDC"],
  // Base
  56: ["BNB", "USDT"],
  // BSC
  4663: ["ETH", "USDG"],
  // Robinhood Chain
  999: ["HYPE", "USDT0"],
  // HyperEVM
  1: ["ETH", "USDC"],
  // Ethereum
  196: ["OKB", "USDT"],
  // X Layer
  42161: ["ETH", "USDC"],
  // Arbitrum
  988: ["USDT0"],
  // Stable (USDT0 is the gas token)
  5042: ["USDC"],
  // Arc (USDC is the gas token)
  4326: ["ETH"],
  // MegaETH
  143: ["MON", "USDC"]
  // Monad
};
var conf = (sym) => CURRENCIES[sym] || CURRENCIES.ETH, symOf = (cur) => cur.slice(cur.indexOf(":") + 1), isValidCurrency = (cur) => {
  let [chainId, sym] = [cur.slice(0, cur.indexOf(":")), symOf(cur)];
  return !!CHAIN_CURRENCIES[chainId]?.includes(sym);
}, poolStake = (amount, sym) => amount * 1e4 / conf(sym).start;

// src/auth.js
var NONCE_MS = 10 * 6e4;
async function nonce(req, env) {
  let { address, chainId, domain, uri } = await readJson(req);
  if (!/^0x[0-9a-fA-F]{40}$/.test(address || "")) throw bad("invalid_address");
  if (!CHAIN_CURRENCIES[chainId]) throw bad("unsupported_chain");
  if (typeof domain != "string" || typeof uri != "string") throw bad("invalid_origin");
  let n = generateSiweNonce(), now = Date.now();
  return await env.DB.prepare("INSERT INTO nonces (nonce, expires_at) VALUES (?, ?)").bind(n, now + NONCE_MS).run(), { message: createSiweMessage({
    address,
    chainId,
    domain,
    uri,
    nonce: n,
    version: "1",
    statement: "Sign in to Vyntex. This is free and does not send a transaction.",
    issuedAt: new Date(now),
    expirationTime: new Date(now + NONCE_MS)
  }) };
}
async function verify(req, env) {
  let { message, signature } = await readJson(req);
  if (typeof message != "string" || typeof signature != "string") throw bad("invalid_request");
  let fields = parseSiweMessage(message);
  if (!fields.address || !fields.nonce || !validateSiweMessage({ message: fields, time: /* @__PURE__ */ new Date() })) throw new HttpError(401, "invalid_message");
  if (!(await env.DB.prepare("DELETE FROM nonces WHERE nonce = ? AND expires_at > ?").bind(fields.nonce, Date.now()).run()).meta.changes) throw new HttpError(401, "nonce_expired", "Sign-in request expired, try again");
  let signer = await recoverMessageAddress({ message, signature }).catch(() => null);
  if (!signer || signer.toLowerCase() !== fields.address.toLowerCase()) throw new HttpError(401, "bad_signature");
  let address = signer.toLowerCase();
  return await env.DB.prepare("INSERT INTO users (address, points, created_at) VALUES (?, 0, ?) ON CONFLICT DO NOTHING").bind(address, Date.now()).run(), { token: await issueSession(env, address), address };
}

// ../shared/chains.js
var DEX_CHAINS = ["solana", "bsc", "robinhood", "base", "hyperevm", "ethereum", "arbitrum", "stable", "arc", "megaeth", "monad", "tron"], tokenId = (chain, address) => `${chain}:${address}`, splitTokenId = (id) => {
  let i = id.indexOf(":");
  return [id.slice(0, i), id.slice(i + 1)];
}, CASE_SENSITIVE = /* @__PURE__ */ new Set(["solana", "tron"]);
function canonicalTid(id) {
  let [chain, address] = splitTokenId(id);
  return tokenId(chain, CASE_SENSITIVE.has(chain) ? address : address.toLowerCase());
}
var DEX_TO_EVM = {
  bsc: 56,
  robinhood: 4663,
  base: 8453,
  hyperevm: 999,
  ethereum: 1,
  xlayer: 196,
  arbitrum: 42161,
  stable: 988,
  arc: 5042,
  megaeth: 4326,
  monad: 143
};
var tradableOn = (tidOrChain, chainId) => DEX_TO_EVM[splitTokenId(tidOrChain.includes(":") ? tidOrChain : `${tidOrChain}:x`)[0]] === Number(chainId);

// ../shared/dex.js
var API = "https://api.dexscreener.com", STAPLES = [
  "base:0x532f27101965dd16442E59d40670FaF5eBB142E4",
  // BRETT
  "base:0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
  // TOSHI
  "base:0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
  // DEGEN
  "base:0x9a26F5433671751C3276a065f57e5a02D2817973",
  // KEYCAT
  "base:0x768BE13e1680b5ebE0024C42c896E3dB59ec0149",
  // SKI
  "base:0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
  // MIGGLES
  "ethereum:0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  // PEPE
  "ethereum:0xaaeE1A9723aaDB7afA2810263653A34bA2C21C7a",
  // MOG
  "ethereum:0xE0f63A424a4439cBE457D80E4f4b51aD25b2c56C",
  // SPX6900
  "ethereum:0x812Ba41e071C7b7fA4EBcFB62dF5F45f6fA853Ee",
  // NEIRO
  "bsc:0xc748673057861a797275CD8A068AbB95A902e8de",
  // BABYDOGE
  "bsc:0xfb5B838b6cfEEdC2873aB27866079AC55363D37E",
  // FLOKI
  "bsc:0x0df0587216A4a1bB7d5082FDc491D93D2dd4b413",
  // CHEEMS
  "bsc:0x86Bb94DdD16Efc8bc58e6b056e8df71D9e666429",
  // TST
  "robinhood:0x385F4f8ae47651ce5F58F5265395a669f8281e18",
  // MEME
  "hyperevm:0x9b498C3c8A0b8CD8BA1D9851d40D186F1872b44E",
  // PURR
  "hyperevm:0xa320D9f65ec992EfF38622c63627856382Db726c",
  // HFUN
  "monad:0xd8e004AcbA279417c04c0633cb5a21CecA207777",
  // MOE
  "monad:0x350035555E10d9AfAF1566AaebfCeD5BA6C27777",
  // CHOG
  "monad:0x81A224F8A62f52BdE942dBF23A56df77A10b7777",
  // EMO
  "monad:0x7B2728c04aD436153285702e969e6EfAc3a97777",
  // MOLANDAK
  "monad:0x405b6330e213DED490240CbcDD64790806827777",
  // MONCOCK
  "megaeth:0x28B7E77f82B25B95953825F1E3eA0E36c1c29861",
  // MEGA
  "stable:0xd86800D5b021F5D79350C2F742Bbb1ecc010Bf82",
  // PUMPER
  "stable:0xeaf7aC0FdF150CDD89340fB762D83848De6A7b83",
  // FEFER
  "tron:TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S",
  // SUN
  "tron:TXL6rJbvmjD46zeN1JssfgxvSo99qC8MRT"
  // SUNDOG
], MIN_LIQ = 1e4;
async function getJson(url, retries = 2) {
  try {
    let r = await fetch(url, { signal: AbortSignal.timeout(1e4) });
    if (!r.ok) throw new Error(`${r.status} ${url}`);
    return await r.json();
  } catch (e) {
    if (retries <= 0) throw e;
    return await new Promise((res) => setTimeout(res, 700)), getJson(url, retries - 1);
  }
}
function bestPairs(pairs) {
  let byToken = /* @__PURE__ */ new Map();
  for (let p of pairs || []) {
    if (!DEX_CHAINS.includes(p.chainId) || !p.priceUsd) continue;
    let key2 = canonicalTid(tokenId(p.chainId, p.baseToken.address)), prev = byToken.get(key2);
    (!prev || (p.liquidity?.usd || 0) > (prev.liquidity?.usd || 0)) && byToken.set(key2, p);
  }
  return [...byToken.values()];
}
var thumb = (url) => url ? url.replace(/width=\d+&height=\d+&quality=\d+/, "width=128&height=128&quality=90") : null;
function toToken(p) {
  return {
    id: canonicalTid(tokenId(p.chainId, p.baseToken.address)),
    // one spelling per token (EVM lowercase)
    chain: p.chainId,
    address: p.baseToken.address,
    pair: p.pairAddress,
    symbol: p.baseToken.symbol,
    name: p.baseToken.name,
    image: thumb(p.info?.imageUrl),
    price: parseFloat(p.priceUsd),
    change: {
      m5: p.priceChange?.m5 ?? 0,
      h1: p.priceChange?.h1 ?? 0,
      h6: p.priceChange?.h6 ?? 0,
      h24: p.priceChange?.h24 ?? 0
    },
    volume: { m5: p.volume?.m5 || 0, h1: p.volume?.h1 || 0, h24: p.volume?.h24 || 0 },
    txns: p.txns || {},
    mcap: p.marketCap || p.fdv || 0,
    liquidity: p.liquidity?.usd || 0,
    createdAt: p.pairCreatedAt || Date.now(),
    dex: p.dexId,
    url: p.url,
    socials: [...p.info?.websites || [], ...p.info?.socials || []],
    updatedAt: Date.now()
  };
}
async function tokensByIds(ids, onBatch) {
  let byChain = /* @__PURE__ */ new Map();
  for (let id of ids) {
    let i = id.indexOf(":"), chain = id.slice(0, i);
    DEX_CHAINS.includes(chain) && (byChain.has(chain) || byChain.set(chain, []), byChain.get(chain).push(id.slice(i + 1)));
  }
  let calls = [];
  for (let [chain, addrs] of byChain)
    for (let i = 0; i < addrs.length; i += 30)
      calls.push(
        getJson(`${API}/tokens/v1/${chain}/${addrs.slice(i, i + 30).join(",")}`).catch(() => []).then((pairs) => {
          let tokens = bestPairs(pairs).map(toToken);
          return tokens.length && onBatch?.(tokens), tokens;
        })
      );
  return (await Promise.all(calls)).flat();
}
var STAPLE_SET = new Set(STAPLES.map((id) => id.toLowerCase())), isStaple = (t) => STAPLE_SET.has(t.id.toLowerCase()), listable = (t) => t.price > 0 && (isStaple(t) || t.liquidity >= MIN_LIQ);
async function refreshPrices(ids) {
  return ids.length ? tokensByIds(ids) : [];
}

// src/prices.js
var FRESH_MS = 15e3;
function parseTid(raw) {
  if (typeof raw != "string" || raw.length > 120) throw bad("invalid_market");
  let [chain, address] = splitTokenId(raw);
  if (!DEX_CHAINS.includes(chain) || !/^[0-9A-Za-z]{20,64}$/.test(address)) throw bad("invalid_market");
  return canonicalTid(raw);
}
async function fetchQuotes(env, tids, now = Date.now()) {
  if (!tids.length) return /* @__PURE__ */ new Map();
  let tokens = await refreshPrices(tids), out = /* @__PURE__ */ new Map(), stmts = [], t = Math.floor(now / 1e3) * 1e3;
  for (let tok of tokens) {
    let id = canonicalTid(tok.id);
    out.set(id, { ...tok, id }), stmts.push(env.DB.prepare(`INSERT INTO quotes (tid, price, data, updated_at) VALUES (?, ?, ?, ?)
      ON CONFLICT (tid) DO UPDATE SET price = excluded.price, data = excluded.data, updated_at = excluded.updated_at`).bind(id, tok.price, JSON.stringify(tok), now)), stmts.push(env.DB.prepare("INSERT INTO ticks (tid, t, price) VALUES (?, ?, ?) ON CONFLICT DO NOTHING").bind(id, t, tok.price));
  }
  return stmts.length && await env.DB.batch(stmts), out;
}
async function quote(env, tid) {
  let row = await env.DB.prepare("SELECT data, updated_at FROM quotes WHERE tid = ?").bind(tid).first(), tok = row && Date.now() - row.updated_at < FRESH_MS ? { ...JSON.parse(row.data), id: tid } : null;
  if (tok || (tok = (await fetchQuotes(env, [tid])).get(tid)), !tok || !(tok.price > 0)) throw new HttpError(503, "no_price", "No live price for this market right now");
  if (!listable(tok)) throw bad("market_not_listed", "This market does not have enough liquidity");
  return tok;
}
var tickAfter = (env, tid, t, window) => env.DB.prepare("SELECT t, price FROM ticks WHERE tid = ? AND t >= ? AND t <= ? ORDER BY t ASC LIMIT 1").bind(tid, t, t + window).first();

// ../shared/rules.js
var TIMEFRAMES = [
  { id: "1m", label: "1 MIN", ms: 6e4 },
  { id: "5m", label: "5 MIN", ms: 3e5 },
  { id: "15m", label: "15 MIN", ms: 9e5 },
  { id: "1h", label: "1 HOUR", ms: 36e5 }
], tfById = (id) => TIMEFRAMES.find((t) => t.id === id), ROUND_FEE = 0.03, FUTURES_FEE = 1e-3, MAINT = 0.9, LEVERAGES = [1, 2, 5, 10, 25, 50, 100], LOCK_MS = 5e3, CLOSE_WINDOW = 6e4, FAUCET_EVERY = 36e5;
function roundWindow(tfMs, now = Date.now()) {
  let start = Math.floor(now / tfMs) * tfMs;
  return { start, end: start + tfMs };
}
function sentiment(token) {
  let m5 = token.txns?.m5 || {}, h1 = token.txns?.h1 || {}, b = (m5.buys || 0) * 3 + (h1.buys || 0), s = (m5.sells || 0) * 3 + (h1.sells || 0), raw = b + s > 0 ? b / (b + s) : 0.5, tilt = Math.max(-0.15, Math.min(0.15, (token.change.m5 || 0) / 40)), up = Math.max(0.12, Math.min(0.88, 0.5 + (raw - 0.5) * 0.9 + tilt)), pool = Math.max(500, Math.round((token.volume.m5 || 0) * 0.08 + (token.volume.h1 || 0) * 0.01));
  return { up, down: 1 - up, pool };
}
function roundMultiplier(share, pool, stake) {
  let sidePool = share * pool + stake, total = pool + stake;
  return Math.max(1.01, total * (1 - ROUND_FEE) / sidePool);
}
function liqPrice(side, entry, lev) {
  return side === "long" ? entry * (1 - MAINT / lev) : entry * (1 + MAINT / lev);
}
function futuresPnl(pos, price) {
  let dir = pos.side === "long" ? 1 : -1;
  return pos.margin * pos.lev * dir * (price / pos.entry - 1);
}
var roundOutcome = (side, open, close) => close === open ? "push" : side === "up" == close > open ? "win" : "loss";

// src/book.js
var round9 = (n) => Math.round(n * 1e9) / 1e9;
function parseCur(cur) {
  if (typeof cur != "string" || !isValidCurrency(cur)) throw bad("invalid_currency");
  return cur;
}
function sameNetwork(tid, cur) {
  if (!tradableOn(tid, cur.split(":")[0])) throw bad("wrong_network", "This market is on another network. Switch your wallet to its network to trade it.");
}
var ensureBalance = (env, address, cur) => env.DB.prepare("INSERT INTO balances (address, cur, amount) VALUES (?, ?, ?) ON CONFLICT DO NOTHING").bind(address, cur, conf(symOf(cur)).start).run();
async function debit(env, address, cur, amount) {
  if (await ensureBalance(env, address, cur), !(await env.DB.prepare("UPDATE balances SET amount = round(amount - ?, 9) WHERE address = ? AND cur = ? AND amount >= ?").bind(amount, address, cur, amount).run()).meta.changes) throw bad("insufficient_balance", `Not enough ${symOf(cur)}`);
}
async function refundOnError(env, address, cur, amount, fn) {
  try {
    return await fn();
  } catch (e) {
    throw await creditStmt(env, address, cur, amount, 0).run(), e;
  }
}
var creditStmt = (env, address, cur, amount, pnl) => env.DB.prepare("UPDATE balances SET amount = round(amount + ?, 9), realized = round(realized + ?, 9) WHERE address = ? AND cur = ?").bind(amount, pnl, address, cur), feeStmt = (env, cur, amount) => env.DB.prepare("INSERT INTO fees (cur, amount) VALUES (?, ?) ON CONFLICT (cur) DO UPDATE SET amount = round(fees.amount + excluded.amount, 9)").bind(cur, amount), pointsStmt = (env, address, pts) => env.DB.prepare("UPDATE users SET points = points + ? WHERE address = ?").bind(Math.max(0, Math.ceil(pts)), address);
async function placeBet(req, env, address) {
  let b = await readJson(req), tid = parseTid(b.tid), cur = parseCur(b.cur);
  sameNetwork(tid, cur);
  let tf = tfById(b.tf);
  if (!tf) throw bad("invalid_timeframe");
  if (b.side !== "up" && b.side !== "down") throw bad("invalid_side");
  let sym = symOf(cur);
  if (!isPositive(b.stake) || b.stake < conf(sym).chips[0] / 10) throw bad("invalid_amount");
  let stake = round9(b.stake), now = Date.now(), { start, end } = roundWindow(tf.ms, now);
  if (end - now < LOCK_MS) throw bad("round_locked", "Round is locking. Next one opens in a few seconds.");
  let tok = await quote(env, tid), open = (await tickAfter(env, tid, start, CLOSE_WINDOW))?.price ?? tok.price, s = sentiment(tok), mult = round9(roundMultiplier(b.side === "up" ? s.up : s.down, s.pool, poolStake(stake, sym)));
  await debit(env, address, cur, stake);
  let id = newId();
  return await refundOnError(env, address, cur, stake, () => env.DB.batch([
    env.DB.prepare(`INSERT INTO bets (id, address, cur, tid, symbol, image, side, stake, mult, tf, start_at, end_at, open_price, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(id, address, cur, tid, tok.symbol, tok.image, b.side, stake, mult, tf.id, start, end, open, now),
    pointsStmt(env, address, poolStake(stake, sym) / 10)
  ])), { bet: mapBet(await env.DB.prepare("SELECT * FROM bets WHERE id = ?").bind(id).first()) };
}
async function openFuture(req, env, address) {
  let b = await readJson(req), tid = parseTid(b.tid), cur = parseCur(b.cur);
  if (sameNetwork(tid, cur), b.side !== "long" && b.side !== "short") throw bad("invalid_side");
  if (!LEVERAGES.includes(b.lev)) throw bad("invalid_leverage");
  let sym = symOf(cur);
  if (!isPositive(b.margin) || b.margin < conf(sym).chips[0] / 10) throw bad("invalid_amount");
  let margin = round9(b.margin), fee = round9(margin * b.lev * FUTURES_FEE), tok = await quote(env, tid);
  await debit(env, address, cur, margin + fee);
  let id = newId();
  return await refundOnError(env, address, cur, margin + fee, () => env.DB.batch([
    env.DB.prepare(`INSERT INTO futures (id, address, cur, tid, symbol, image, side, margin, lev, fee, entry, liq, opened_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(id, address, cur, tid, tok.symbol, tok.image, b.side, margin, b.lev, fee, tok.price, liqPrice(b.side, tok.price, b.lev), Date.now()),
    feeStmt(env, cur, fee),
    pointsStmt(env, address, poolStake(margin * b.lev, sym) / 100)
  ])), { future: mapFuture(await env.DB.prepare("SELECT * FROM futures WHERE id = ?").bind(id).first()) };
}
async function settleFuture(env, f, price, liquidated) {
  let pnl = liquidated ? -f.margin : futuresPnl(f, price), back = Math.max(0, f.margin + pnl), realized = round9(back - f.margin);
  if (!(await env.DB.prepare("UPDATE futures SET status = ?, exit_price = ?, pnl = ?, closed_at = ? WHERE id = ? AND status = 'open'").bind(liquidated ? "liquidated" : "closed", price, realized, Date.now(), f.id).run()).meta.changes) return !1;
  let stmts = [creditStmt(env, f.address, f.cur, round9(back), realized)];
  return realized > 0 && stmts.push(pointsStmt(env, f.address, poolStake(realized, symOf(f.cur)) / 10)), await env.DB.batch(stmts), !0;
}
async function closeFuture(env, address, id) {
  let f = await env.DB.prepare("SELECT * FROM futures WHERE id = ? AND address = ? AND status = 'open'").bind(id, address).first();
  if (!f) throw new HttpError(404, "not_found", "Position not found or already closed");
  let tok = await quote(env, f.tid), hit = f.side === "long" ? tok.price <= f.liq : tok.price >= f.liq;
  return await settleFuture(env, f, tok.price, hit), { future: mapFuture(await env.DB.prepare("SELECT * FROM futures WHERE id = ?").bind(id).first()) };
}
async function faucet(req, env, address) {
  let cur = parseCur((await readJson(req)).cur);
  await ensureBalance(env, address, cur);
  let now = Date.now(), add = conf(symOf(cur)).start * 0.1;
  if (!(await env.DB.prepare("UPDATE balances SET amount = round(amount + ?, 9), faucet_at = ? WHERE address = ? AND cur = ? AND faucet_at <= ?").bind(add, now, address, cur, now - FAUCET_EVERY).run()).meta.changes) throw new HttpError(429, "faucet_cooldown", "Faucet refills once an hour");
  return { added: add };
}
async function me(env, address) {
  let [user, balances, openBets, openFut, doneBets, doneFut] = await env.DB.batch([
    env.DB.prepare("SELECT points FROM users WHERE address = ?").bind(address),
    env.DB.prepare("SELECT cur, amount, realized, faucet_at FROM balances WHERE address = ?").bind(address),
    env.DB.prepare("SELECT * FROM bets WHERE address = ? AND status = 'open' ORDER BY created_at DESC").bind(address),
    env.DB.prepare("SELECT * FROM futures WHERE address = ? AND status = 'open' ORDER BY opened_at DESC").bind(address),
    env.DB.prepare("SELECT * FROM bets WHERE address = ? AND status != 'open' ORDER BY settled_at DESC LIMIT 100").bind(address),
    env.DB.prepare("SELECT * FROM futures WHERE address = ? AND status != 'open' ORDER BY closed_at DESC LIMIT 100").bind(address)
  ]), bal = {}, realized = {}, faucetAt = {};
  for (let r of balances.results)
    bal[r.cur] = r.amount, realized[r.cur] = r.realized, faucetAt[r.cur] = r.faucet_at;
  let history = [...doneBets.results.map(mapBet), ...doneFut.results.map(mapFuture)].sort((a, b) => b.closedAt - a.closedAt).slice(0, 100);
  return {
    address,
    points: user.results[0]?.points ?? 0,
    balances: bal,
    realized,
    faucetAt,
    bets: openBets.results.map(mapBet),
    positions: openFut.results.map(mapFuture),
    history,
    serverTime: Date.now()
  };
}
var tokenFields = (r) => {
  let [chain, addr] = splitTokenId(r.tid);
  return { tid: r.tid, chain, address: addr, symbol: r.symbol, image: r.image };
};
function mapBet(r) {
  return {
    id: r.id,
    kind: "round",
    ...tokenFields(r),
    cur: r.cur,
    sym: symOf(r.cur),
    side: r.side,
    stake: r.stake,
    mult: r.mult,
    tf: r.tf,
    start: r.start_at,
    end: r.end_at,
    open: r.open_price,
    placedAt: r.created_at,
    ...r.status !== "open" && {
      close: r.close_price,
      pnl: r.pnl,
      closedAt: r.settled_at,
      result: { win: "WIN", loss: "LOSS", push: "PUSH", void: "PUSH" }[r.status],
      ...r.status === "void" && { void: !0 }
    }
  };
}
function mapFuture(r) {
  return {
    id: r.id,
    kind: "future",
    ...tokenFields(r),
    cur: r.cur,
    sym: symOf(r.cur),
    side: r.side,
    margin: r.margin,
    lev: r.lev,
    entry: r.entry,
    liq: r.liq,
    openedAt: r.opened_at,
    ...r.status !== "open" && {
      exit: r.exit_price,
      pnl: r.pnl,
      closedAt: r.closed_at,
      result: r.status === "liquidated" ? "REKT" : r.pnl > 0 ? "WIN" : r.pnl < 0 ? "LOSS" : "PUSH"
    }
  };
}

// src/public.js
var short = (a) => `${a.slice(0, 6)}\u2026${a.slice(-4)}`;
async function leaderboard(env) {
  let { results } = await env.DB.prepare(`
    SELECT u.address, u.points,
      (SELECT COUNT(*) FROM bets b WHERE b.address = u.address) + (SELECT COUNT(*) FROM futures f WHERE f.address = u.address) AS calls,
      (SELECT COUNT(*) FROM bets b WHERE b.address = u.address AND b.status = 'win') AS wins,
      (SELECT COUNT(*) FROM bets b WHERE b.address = u.address AND b.status IN ('win', 'loss')) AS decided
    FROM users u WHERE u.points > 0 ORDER BY u.points DESC LIMIT 50`).all();
  return {
    rows: results.map((r, i) => ({ rank: i + 1, address: r.address, name: short(r.address), points: r.points, calls: r.calls, winRate: r.decided ? Math.round(r.wins / r.decided * 100) : null }))
  };
}
async function activity(env) {
  let { results } = await env.DB.prepare(`
    SELECT * FROM (
      SELECT 'round' AS kind, address, tid, symbol, image, side, stake AS amount, NULL AS lev, cur, created_at AS t, status FROM bets
      UNION ALL
      SELECT 'future', address, tid, symbol, image, side, margin, lev, cur, opened_at, status FROM futures
    ) AS x ORDER BY t DESC LIMIT 30`).all();
  return {
    items: results.map((r) => ({
      kind: r.kind,
      who: short(r.address),
      tid: r.tid,
      symbol: r.symbol,
      image: r.image,
      side: r.side,
      amount: r.amount,
      lev: r.lev,
      sym: r.cur.slice(r.cur.indexOf(":") + 1),
      t: r.t,
      rekt: r.status === "liquidated"
    }))
  };
}

// src/settle.js
var round92 = (n) => Math.round(n * 1e9) / 1e9;
async function runCron(env, now = Date.now()) {
  let { results } = await env.DB.prepare(`
    SELECT tid FROM bets WHERE status = 'open' OR created_at > ?1
    UNION SELECT tid FROM futures WHERE status = 'open'`).bind(now - 72e5).all(), tids = [.../* @__PURE__ */ new Set([...results.map((r) => r.tid), ...STAPLES.map(canonicalTid)])], quotes = await fetchQuotes(env, tids, now).catch((e) => (console.error("quotes failed", e), /* @__PURE__ */ new Map())), settled = await settleRounds(env, now), liquidated = await liquidate(env, quotes);
  return await env.DB.batch([
    env.DB.prepare("DELETE FROM ticks WHERE t < ?").bind(now - 3 * 864e5),
    env.DB.prepare("DELETE FROM nonces WHERE expires_at < ?").bind(now)
  ]), { ticked: quotes.size, settled, liquidated };
}
async function settleRounds(env, now = Date.now()) {
  let { results: due } = await env.DB.prepare("SELECT * FROM bets WHERE status = 'open' AND end_at <= ? LIMIT 500").bind(now).all(), n = 0;
  for (let b of due) {
    let tick = await tickAfter(env, b.tid, b.end_at, CLOSE_WINDOW);
    if (!tick && now - b.end_at < CLOSE_WINDOW) continue;
    let status, payout;
    tick ? (status = roundOutcome(b.side, b.open_price, tick.price), payout = status === "win" ? b.stake * b.mult : status === "push" ? b.stake : 0) : (status = "void", payout = b.stake);
    let pnl = round92(payout - b.stake);
    if (!(await env.DB.prepare("UPDATE bets SET status = ?, close_price = ?, pnl = ?, settled_at = ? WHERE id = ? AND status = 'open'").bind(status, tick?.price ?? null, pnl, now, b.id).run()).meta.changes) continue;
    let stmts = [];
    payout > 0 ? stmts.push(creditStmt(env, b.address, b.cur, round92(payout), pnl)) : stmts.push(creditStmt(env, b.address, b.cur, 0, pnl)), status === "win" && (stmts.push(pointsStmt(env, b.address, poolStake(pnl, symOf(b.cur)) / 10)), stmts.push(env.DB.prepare("INSERT INTO fees (cur, amount) VALUES (?, ?) ON CONFLICT (cur) DO UPDATE SET amount = round(fees.amount + excluded.amount, 9)").bind(b.cur, round92(payout * ROUND_FEE / (1 - ROUND_FEE))))), await env.DB.batch(stmts), n++;
  }
  return n;
}
async function liquidate(env, quotes) {
  let { results: open } = await env.DB.prepare("SELECT * FROM futures WHERE status = 'open'").all(), n = 0;
  for (let f of open) {
    let price = quotes.get(f.tid)?.price;
    if (!price) continue;
    (f.side === "long" ? price <= f.liq : price >= f.liq) && await settleFuture(env, f, price, !0) && n++;
  }
  return n;
}

// node_modules/viem/_esm/accounts/privateKeyToAccount.js
init_secp256k1();
init_toHex();

// node_modules/viem/_esm/accounts/toAccount.js
init_address();
init_isAddress();
function toAccount(source) {
  if (typeof source == "string") {
    if (!isAddress(source, { strict: !1 }))
      throw new InvalidAddressError({ address: source });
    return {
      address: source,
      type: "json-rpc"
    };
  }
  if (!isAddress(source.address, { strict: !1 }))
    throw new InvalidAddressError({ address: source.address });
  return {
    address: source.address,
    nonceManager: source.nonceManager,
    sign: source.sign,
    signAuthorization: source.signAuthorization,
    signMessage: source.signMessage,
    signTransaction: source.signTransaction,
    signTypedData: source.signTypedData,
    source: "custom",
    type: "local"
  };
}

// node_modules/viem/_esm/accounts/utils/sign.js
init_secp256k1();
init_isHex();
init_toBytes();
init_toHex();
var extraEntropy = !1;
async function sign({ hash, privateKey, to = "object" }) {
  let { r, s, recovery } = secp256k1.sign(hash.slice(2), privateKey.slice(2), {
    lowS: !0,
    extraEntropy: isHex(extraEntropy, { strict: !1 }) ? hexToBytes(extraEntropy) : extraEntropy
  }), signature = {
    r: numberToHex(r, { size: 32 }),
    s: numberToHex(s, { size: 32 }),
    v: recovery ? 28n : 27n,
    yParity: recovery
  };
  return to === "bytes" || to === "hex" ? serializeSignature({ ...signature, to }) : signature;
}

// node_modules/viem/_esm/accounts/utils/signAuthorization.js
async function signAuthorization(parameters) {
  let { chainId, nonce: nonce2, privateKey, to = "object" } = parameters, address = parameters.contractAddress ?? parameters.address, signature = await sign({
    hash: hashAuthorization({ address, chainId, nonce: nonce2 }),
    privateKey,
    to
  });
  return to === "object" ? {
    address,
    chainId,
    nonce: nonce2,
    ...signature
  } : signature;
}

// node_modules/viem/_esm/accounts/utils/signMessage.js
async function signMessage({ message, privateKey }) {
  return await sign({ hash: hashMessage(message), privateKey, to: "hex" });
}

// node_modules/viem/_esm/accounts/utils/signTransaction.js
init_keccak256();
async function signTransaction(parameters) {
  let { privateKey, transaction, serializer = serializeTransaction } = parameters, signableTransaction = transaction.type === "eip4844" ? {
    ...transaction,
    sidecars: !1
  } : transaction, signature = await sign({
    hash: keccak256(await serializer(signableTransaction)),
    privateKey
  });
  return await serializer(transaction, signature);
}

// node_modules/viem/_esm/accounts/utils/signTypedData.js
async function signTypedData(parameters) {
  let { privateKey, ...typedData } = parameters;
  return await sign({
    hash: hashTypedData(typedData),
    privateKey,
    to: "hex"
  });
}

// node_modules/viem/_esm/accounts/privateKeyToAccount.js
function privateKeyToAccount(privateKey, options = {}) {
  let { nonceManager } = options, publicKey = toHex(secp256k1.getPublicKey(privateKey.slice(2), !1)), address = publicKeyToAddress(publicKey);
  return {
    ...toAccount({
      address,
      nonceManager,
      async sign({ hash }) {
        return sign({ hash, privateKey, to: "hex" });
      },
      async signAuthorization(authorization) {
        return signAuthorization({ ...authorization, privateKey });
      },
      async signMessage({ message }) {
        return signMessage({ message, privateKey });
      },
      async signTransaction(transaction, { serializer } = {}) {
        return signTransaction({ privateKey, transaction, serializer });
      },
      async signTypedData(typedData) {
        return signTypedData({ ...typedData, privateKey });
      }
    }),
    publicKey,
    source: "privateKey"
  };
}

// src/oracle.js
var TIMEFRAMES_S = [60, 300, 900, 3600], marketIdOf = (tid) => keccak256(toBytes(tid)), toWad = (price) => parseUnits(price.toFixed(18), 18), ROUND_PRICE_TYPES = {
  RoundPrice: [
    { name: "marketId", type: "bytes32" },
    { name: "timeframe", type: "uint32" },
    { name: "startTime", type: "uint64" },
    { name: "openPrice", type: "uint256" },
    { name: "closePrice", type: "uint256" }
  ]
};
async function signRound(url, env, now = Date.now()) {
  let contracts;
  try {
    contracts = JSON.parse(env.ROUNDS_CONTRACTS || "{}");
  } catch {
    throw new HttpError(500, "misconfigured", 'ROUNDS_CONTRACTS must be JSON like {"8453":"0x\u2026"}');
  }
  let chainId = Number(url.searchParams.get("chainId")), verifyingContract = contracts[chainId];
  if (!verifyingContract) throw bad("chain_not_live", "Rounds are not live on this network");
  if (!env.ORACLE_PRIVATE_KEY) throw new HttpError(500, "misconfigured", "ORACLE_PRIVATE_KEY is not set");
  let tid = parseTid(url.searchParams.get("tid")), tf = Number(url.searchParams.get("tf")), start = Number(url.searchParams.get("start"));
  if (!TIMEFRAMES_S.includes(tf)) throw bad("invalid_timeframe");
  if (!Number.isInteger(start) || start % tf !== 0) throw bad("invalid_start");
  let end = start + tf;
  if (now < end * 1e3) throw new HttpError(425, "round_open", "Round has not closed yet");
  let [open, close] = await Promise.all([
    tickAfter(env, tid, start * 1e3, CLOSE_WINDOW),
    tickAfter(env, tid, end * 1e3, CLOSE_WINDOW)
  ]);
  if (!open || !close) throw new HttpError(404, "no_price", "No oracle price for this round; it will be refunded");
  let message = { marketId: marketIdOf(tid), timeframe: tf, startTime: BigInt(start), openPrice: toWad(open.price), closePrice: toWad(close.price) }, account = privateKeyToAccount(env.ORACLE_PRIVATE_KEY), signature = await account.signTypedData({
    domain: { name: "VyntexRounds", version: "1", chainId, verifyingContract },
    types: ROUND_PRICE_TYPES,
    primaryType: "RoundPrice",
    message
  });
  return {
    oracle: account.address,
    chainId,
    contract: verifyingContract,
    tid,
    marketId: message.marketId,
    timeframe: tf,
    startTime: start,
    openPrice: message.openPrice.toString(),
    closePrice: message.closePrice.toString(),
    signature
  };
}

// node_modules/pg/esm/index.mjs
var import_lib = __toESM(require_lib2(), 1), Client = import_lib.default.Client, Pool = import_lib.default.Pool, Connection = import_lib.default.Connection, types = import_lib.default.types, Query = import_lib.default.Query, DatabaseError = import_lib.default.DatabaseError, escapeIdentifier = import_lib.default.escapeIdentifier, escapeLiteral = import_lib.default.escapeLiteral, Result = import_lib.default.Result, TypeOverrides = import_lib.default.TypeOverrides, defaults = import_lib.default.defaults, esm_default = import_lib.default;

// src/schema.js
var SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  address    TEXT PRIMARY KEY,
  points     BIGINT NOT NULL DEFAULT 0,
  created_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS nonces (
  nonce      TEXT PRIMARY KEY,
  expires_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS balances (
  address   TEXT NOT NULL,
  cur       TEXT NOT NULL,
  amount    NUMERIC NOT NULL,
  realized  NUMERIC NOT NULL DEFAULT 0,
  faucet_at BIGINT NOT NULL DEFAULT 0,
  PRIMARY KEY (address, cur)
);

CREATE TABLE IF NOT EXISTS bets (
  id          TEXT PRIMARY KEY,
  address     TEXT NOT NULL,
  cur         TEXT NOT NULL,
  tid         TEXT NOT NULL,
  symbol      TEXT NOT NULL,
  image       TEXT,
  side        TEXT NOT NULL CHECK (side IN ('up', 'down')),
  stake       NUMERIC NOT NULL,
  mult        NUMERIC NOT NULL,
  tf          TEXT NOT NULL,
  start_at    BIGINT NOT NULL,
  end_at      BIGINT NOT NULL,
  open_price  NUMERIC NOT NULL,
  status      TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'win', 'loss', 'push', 'void')),
  close_price NUMERIC,
  pnl         NUMERIC,
  created_at  BIGINT NOT NULL,
  settled_at  BIGINT
);
CREATE INDEX IF NOT EXISTS bets_open ON bets (status, end_at);
CREATE INDEX IF NOT EXISTS bets_user ON bets (address, created_at);

CREATE TABLE IF NOT EXISTS futures (
  id         TEXT PRIMARY KEY,
  address    TEXT NOT NULL,
  cur        TEXT NOT NULL,
  tid        TEXT NOT NULL,
  symbol     TEXT NOT NULL,
  image      TEXT,
  side       TEXT NOT NULL CHECK (side IN ('long', 'short')),
  margin     NUMERIC NOT NULL,
  lev        NUMERIC NOT NULL,
  fee        NUMERIC NOT NULL,
  entry      NUMERIC NOT NULL,
  liq        NUMERIC NOT NULL,
  status     TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed', 'liquidated')),
  exit_price NUMERIC,
  pnl        NUMERIC,
  opened_at  BIGINT NOT NULL,
  closed_at  BIGINT
);
CREATE INDEX IF NOT EXISTS futures_open ON futures (status, tid);
CREATE INDEX IF NOT EXISTS futures_user ON futures (address, opened_at);

CREATE TABLE IF NOT EXISTS quotes (       -- latest DexScreener snapshot per token (short cache)
  tid        TEXT PRIMARY KEY,
  price      NUMERIC NOT NULL,
  data       TEXT NOT NULL,
  updated_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS ticks (        -- server-observed prices: round open/close + oracle source
  tid   TEXT NOT NULL,
  t     BIGINT NOT NULL,
  price NUMERIC NOT NULL,
  PRIMARY KEY (tid, t)
);

CREATE TABLE IF NOT EXISTS fees (         -- fees the house took, per coin (paper now, treasury later)
  cur    TEXT PRIMARY KEY,
  amount NUMERIC NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS kv (           -- server settings: generated session secret, last maintenance run
  k TEXT PRIMARY KEY,
  v TEXT NOT NULL
);
`;

// src/db.js
esm_default.types.setTypeParser(1700, (v) => v === null ? null : parseFloat(v));
esm_default.types.setTypeParser(20, (v) => v === null ? null : Number(v));
var toPg = (sql) => {
  let i = 0;
  return sql.replace(/\?(\d+)?/g, (_, n) => `$${n || ++i}`);
}, result = (r) => ({ results: r.rows, meta: { changes: r.rowCount ?? 0 } }), Stmt = class _Stmt {
  constructor(db, sql, args = []) {
    this.db = db, this.sql = sql, this.args = args;
  }
  bind(...args) {
    return new _Stmt(this.db, this.sql, args);
  }
  exec(client) {
    return client.query(toPg(this.sql), this.args).then(result);
  }
  async first() {
    return (await this.exec(await this.db.ready())).results[0] ?? null;
  }
  all() {
    return this.db.ready().then((c) => this.exec(c));
  }
  run() {
    return this.all();
  }
}, Db = class {
  constructor(connectionString) {
    let local = /@(localhost|127\.0\.0\.1)[:/]/.test(connectionString) || /host=\/|sslmode=disable/.test(connectionString);
    this.pool = new esm_default.Pool({
      connectionString: connectionString.replace(/[?&]sslmode=[^&]*/, ""),
      ssl: local ? !1 : { rejectUnauthorized: !1 },
      max: 3,
      idleTimeoutMillis: 1e4
    }), this.pool.on("error", (e) => console.error("pg pool", e.message)), this.schema = null;
  }
  // creates the tables once per instance (CREATE … IF NOT EXISTS is cheap and idempotent)
  async ready() {
    return this.schema ??= this.pool.query(SCHEMA).catch((e) => {
      throw this.schema = null, e;
    }), await this.schema, this.pool;
  }
  prepare(sql) {
    return new Stmt(this, sql);
  }
  // all statements in one transaction, like D1's batch
  async batch(stmts) {
    await this.ready();
    let client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      let out = [];
      for (let s of stmts) out.push(await s.exec(client));
      return await client.query("COMMIT"), out;
    } catch (e) {
      throw await client.query("ROLLBACK").catch(() => {
      }), e;
    } finally {
      client.release();
    }
  }
};

// src/app.js
var MAINTENANCE_EVERY = 15e3;
async function route(req, env, path, url) {
  let m = req.method;
  if (m === "GET" && path === "/health")
    return await env.DB.prepare("SELECT 1").first(), { ok: !0, service: "vyntex", time: Date.now() };
  if (m === "POST" && path === "/auth/nonce") return nonce(req, env);
  if (m === "POST" && path === "/auth/verify") return verify(req, env);
  if (m === "GET" && path === "/leaderboard") return leaderboard(env);
  if (m === "GET" && path === "/activity") return activity(env);
  if (m === "GET" && path === "/oracle/round") return signRound(url, env);
  if (m === "GET" && path === "/cron")
    return (!!env.CRON_SECRET && req.headers.get("Authorization") === `Bearer ${env.CRON_SECRET}` ? runCron(env) : maintain(env)).then((r) => r || { skipped: "ran recently" });
  let address = await requireAddress(req, env);
  if (m === "GET" && path === "/me") return me(env, address);
  if (m === "POST" && path === "/bets") return placeBet(req, env, address);
  if (m === "POST" && path === "/futures") return openFuture(req, env, address);
  if (m === "POST" && path === "/faucet") return faucet(req, env, address);
  let close = m === "POST" && path.match(/^\/futures\/([0-9a-z]{6,40})\/close$/);
  if (close) return closeFuture(env, address, close[1]);
  throw new HttpError(404, "not_found");
}
async function maintain(env) {
  let now = Date.now();
  return await env.DB.prepare("INSERT INTO kv (k, v) VALUES ('maintenance', '0') ON CONFLICT DO NOTHING").run(), (await env.DB.prepare("UPDATE kv SET v = ? WHERE k = 'maintenance' AND CAST(v AS BIGINT) < ?").bind(String(now), now - MAINTENANCE_EVERY).run()).meta.changes ? runCron(env, now) : null;
}
var shared;
async function environment(vars) {
  return shared ??= (async () => {
    let url = vars.DATABASE_URL || vars.POSTGRES_URL;
    if (!url) throw new HttpError(503, "no_database", "Add a Postgres database (Neon) to this Vercel project");
    let env = {
      DB: new Db(url),
      SESSION_SECRET: vars.SESSION_SECRET,
      ALLOWED_ORIGINS: vars.ALLOWED_ORIGINS,
      ROUNDS_CONTRACTS: vars.ROUNDS_CONTRACTS || "{}",
      ORACLE_PRIVATE_KEY: vars.ORACLE_PRIVATE_KEY,
      CRON_SECRET: vars.CRON_SECRET
    };
    if (!env.SESSION_SECRET || env.SESSION_SECRET.length < 32) {
      let fresh = Array.from(crypto.getRandomValues(new Uint8Array(32)), (b) => b.toString(16).padStart(2, "0")).join("");
      await env.DB.prepare("INSERT INTO kv (k, v) VALUES ('session_secret', ?) ON CONFLICT DO NOTHING").bind(fresh).run(), env.SESSION_SECRET = (await env.DB.prepare("SELECT v FROM kv WHERE k = 'session_secret'").first()).v;
    }
    return env;
  })().catch((e) => {
    throw shared = null, e;
  }), shared;
}
async function handle(req, vars, waitUntil) {
  let cors = corsHeaders(req, vars);
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  let url = new URL(req.url), path = "/" + (url.searchParams.get("path") ?? url.pathname.replace(/^\/api(\/|$)/, "")).replace(/^\/+|\/+$/g, "");
  try {
    let env = await environment(vars);
    if (path !== "/cron" && path !== "/health") {
      let job = maintain(env).catch((e) => console.error("maintenance", e));
      waitUntil ? waitUntil(job) : await job;
    }
    return json(await route(req, env, path, url), 200, cors);
  } catch (e) {
    return e instanceof HttpError ? json({ error: e.code, message: e.message }, e.status, cors) : (console.error(e), json({ error: "server_error", message: "Something went wrong" }, 500, cors));
  }
}

// src/vercel.js
function run(req) {
  let ctx = globalThis[/* @__PURE__ */ Symbol.for("@vercel/request-context")]?.get?.();
  return handle(req, process.env, ctx?.waitUntil ? (p) => ctx.waitUntil(p) : null);
}
var GET = run, POST = run, OPTIONS = run;
export {
  GET,
  OPTIONS,
  POST
};
