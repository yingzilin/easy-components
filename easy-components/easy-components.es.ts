import { ref, watch, getCurrentScope, onScopeDispose, unref, getCurrentInstance, onMounted, nextTick, computed as computed$1, openBlock, createElementBlock, createElementVNode, warn, inject, watchEffect, onBeforeUnmount, toRef, onUnmounted, isRef, onBeforeMount, provide, defineComponent, mergeProps, renderSlot, useAttrs as useAttrs$1, useSlots, shallowRef, onUpdated, withDirectives, createCommentVNode, Fragment, normalizeClass, createBlock, withCtx, resolveDynamicComponent, withModifiers, createVNode, toDisplayString, normalizeStyle, vShow, Transition, reactive, cloneVNode, Text, Comment, toRefs, resolveComponent, Teleport, readonly, onDeactivated, renderList, createTextVNode, toRaw as toRaw$1, vModelCheckbox, vModelRadio, h as h$1, onBeforeUpdate, resolveDirective, withKeys, vModelText, toHandlers, createSlots, markRaw, effectScope, triggerRef, TransitionGroup, createApp, pushScopeId, popScopeId, normalizeProps, guardReactiveProps, onActivated } from "vue";
import { ElConfigProvider, ElMessage } from "element-plus";
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array4, iteratee) {
  var index2 = -1, length = array4 == null ? 0 : array4.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array4[index2], index2, array4);
  }
  return result;
}
var isArray$1 = Array.isArray;
var isArray$2 = isArray$1;
var INFINITY$2 = 1 / 0;
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$2(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string3) {
  var index2 = string3.length;
  while (index2-- && reWhitespace.test(string3.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string3) {
  return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
}
function isObject$2(value) {
  var type4 = typeof value;
  return value != null && (type4 == "object" || type4 == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$b = objectProto$c.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern4 = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern4.test(toSource(value));
}
function getValue$1(object4, key) {
  return object4 == null ? void 0 : object4[key];
}
function getNative(object4, key) {
  var value = getValue$1(object4, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object4() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object4.prototype = proto;
    var result = new object4();
    object4.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function copyArray(source, array4) {
  var index2 = -1, length = source.length;
  array4 || (array4 = Array(length));
  while (++index2 < length) {
    array4[index2] = source[index2];
  }
  return array4;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty$1 = defineProperty;
function arrayEach(array4, iteratee) {
  var index2 = -1, length = array4 == null ? 0 : array4.length;
  while (++index2 < length) {
    if (iteratee(array4[index2], index2, array4) === false) {
      break;
    }
  }
  return array4;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type4 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object4, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object4, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object4[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$a = objectProto$b.hasOwnProperty;
function assignValue(object4, key, value) {
  var objValue = object4[key];
  if (!(hasOwnProperty$a.call(object4, key) && eq(objValue, value)) || value === void 0 && !(key in object4)) {
    baseAssignValue(object4, key, value);
  }
}
function copyObject(source, props, object4, customizer) {
  var isNew = !object4;
  object4 || (object4 = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object4, key, newValue);
    } else {
      assignValue(object4, key, newValue);
    }
  }
  return object4;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var objectProto$a = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto;
}
function baseTimes(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types2) {
      return types2;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$8 = Object.prototype;
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$2(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
function baseKeys(object4) {
  if (!isPrototype(object4)) {
    return nativeKeys$1(object4);
  }
  var result = [];
  for (var key in Object(object4)) {
    if (hasOwnProperty$7.call(object4, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4) : baseKeys(object4);
}
function nativeKeysIn(object4) {
  var result = [];
  if (object4 != null) {
    for (var key in Object(object4)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function baseKeysIn(object4) {
  if (!isObject$2(object4)) {
    return nativeKeysIn(object4);
  }
  var isProto = isPrototype(object4), result = [];
  for (var key in object4) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object4, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4, true) : baseKeysIn(object4);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object4) {
  if (isArray$2(value)) {
    return false;
  }
  var type4 = typeof value;
  if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object4 != null && value in Object(object4);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array4, key) {
  var length = array4.length;
  while (length--) {
    if (eq(array4[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type4 = typeof value;
  return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$2 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string3) {
  var result = [];
  if (string3.charCodeAt(0) === 46) {
    result.push("");
  }
  string3.replace(rePropName, function(match, number4, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object4) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey(value, object4) ? [value] : stringToPath$1(toString(value));
}
var INFINITY$1 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function baseGet(object4, path) {
  path = castPath(path, object4);
  var index2 = 0, length = path.length;
  while (object4 != null && index2 < length) {
    object4 = object4[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object4 : void 0;
}
function get(object4, path, defaultValue) {
  var result = object4 == null ? void 0 : baseGet(object4, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array4, values) {
  var index2 = -1, length = values.length, offset = array4.length;
  while (++index2 < length) {
    array4[offset + index2] = values[index2];
  }
  return array4;
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray$2(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array4, depth, predicate, isStrict, result) {
  var index2 = -1, length = array4.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array4[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function castArray$1() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray$2(value) ? value : [value];
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object4, source) {
  return object4 && copyObject(source, keys(source), object4);
}
function baseAssignIn(object4, source) {
  return object4 && copyObject(source, keysIn(source), object4);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array4, predicate) {
  var index2 = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array4[index2];
    if (predicate(value, index2, array4)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object4) {
  if (object4 == null) {
    return [];
  }
  object4 = Object(object4);
  return arrayFilter(nativeGetSymbols$1(object4), function(symbol) {
    return propertyIsEnumerable.call(object4, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object4) {
  return copyObject(source, getSymbols$1(source), object4);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object4) {
  var result = [];
  while (object4) {
    arrayPush(result, getSymbols$1(object4));
    object4 = getPrototype$1(object4);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object4) {
  return copyObject(source, getSymbolsIn$1(source), object4);
}
function baseGetAllKeys(object4, keysFunc, symbolsFunc) {
  var result = keysFunc(object4);
  return isArray$2(object4) ? result : arrayPush(result, symbolsFunc(object4));
}
function getAllKeys(object4) {
  return baseGetAllKeys(object4, keys, getSymbols$1);
}
function getAllKeysIn(object4) {
  return baseGetAllKeys(object4, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto$2 = Object.prototype;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
function initCloneArray(array4) {
  var length = array4.length, result = new array4.constructor(length);
  if (length && typeof array4[0] == "string" && hasOwnProperty$3.call(array4, "index")) {
    result.index = array4.index;
    result.input = array4.input;
  }
  return result;
}
var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp4) {
  var result = new regexp4.constructor(regexp4.source, reFlags.exec(regexp4));
  result.lastIndex = regexp4.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object4, tag, isDeep) {
  var Ctor = object4.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object4);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object4);
    case dataViewTag$2:
      return cloneDataView(object4, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object4, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object4);
    case regexpTag$2:
      return cloneRegExp(object4);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object4);
  }
}
function initCloneObject(object4) {
  return typeof object4.constructor == "function" && !isPrototype(object4) ? baseCreate$1(getPrototype$1(object4)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object4, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object4 ? customizer(value, key, object4, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$2(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object4) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object4 ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_SYMBOLS_FLAG = 4;
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array4, predicate) {
  var index2 = -1, length = array4 == null ? 0 : array4.length;
  while (++index2 < length) {
    if (predicate(array4[index2], index2, array4)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array4.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array4);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array4;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array4, other);
  stack.set(other, array4);
  while (++index2 < arrLength) {
    var arrValue = array4[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array4, stack) : customizer(arrValue, othValue, index2, array4, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array4);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object4, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
        return false;
      }
      object4 = object4.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object4), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object4, +other);
    case errorTag:
      return object4.name == other.name && object4.message == other.message;
    case regexpTag:
    case stringTag:
      return object4 == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object4.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object4);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object4, other);
      var result = equalArrays(convert(object4), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object4);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object4) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function equalObjects(object4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object4), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object4);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object4;
  }
  var result = true;
  stack.set(object4, other);
  stack.set(other, object4);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object4[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack) : customizer(objValue, othValue, key, object4, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object4.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object4 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object4);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function baseIsEqualDeep(object4, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$2(object4), othIsArr = isArray$2(other), objTag = objIsArr ? arrayTag : getTag$1(object4), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object4)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object4) ? equalArrays(object4, other, bitmask, customizer, equalFunc, stack) : equalByTag(object4, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object4, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object4.value() : object4, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object4, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var INFINITY = 1 / 0;
function flattenDeep(array4) {
  var length = array4 == null ? 0 : array4.length;
  return length ? baseFlatten(array4, INFINITY) : [];
}
function fromPairs(pairs) {
  var index2 = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index2 < length) {
    var pair = pairs[index2];
    result[pair[0]] = pair[1];
  }
  return result;
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
function isNil(value) {
  return value == null;
}
function baseSet(object4, path, value, customizer) {
  if (!isObject$2(object4)) {
    return object4;
  }
  path = castPath(path, object4);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object4;
  while (nested != null && ++index2 < length) {
    var key = toKey(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object4;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$2(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object4;
}
function set(object4, path, value) {
  return object4 == null ? object4 : baseSet(object4, path, value);
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject$2(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const isLeaf = (el) => !el.getAttribute("aria-owns");
const getSibling = (el, distance, elClass) => {
  const { parentNode } = el;
  if (!parentNode)
    return null;
  const siblings = parentNode.querySelectorAll(elClass);
  const index2 = Array.prototype.indexOf.call(siblings, el);
  return siblings[index2 + distance] || null;
};
const focusNode = (el) => {
  if (!el)
    return;
  el.focus();
  !isLeaf(el) && el.click();
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
var _a$1;
const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a$1 = window == null ? void 0 : window.navigator) == null ? void 0 : _a$1.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function createFilterWrapper(filter, fn2) {
  function wrapper(...args) {
    filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
  };
  return filter;
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
function useDebounceFn(fn2, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn2);
}
function refDebounced(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}
function useThrottleFn(fn2, ms = 200, trailing = false, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn2);
}
function tryOnMounted(fn2, sync = true) {
  if (getCurrentInstance())
    onMounted(fn2);
  else if (sync)
    fn2();
  else
    nextTick(fn2);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  let fallback;
  const listener = (event) => {
    window2.clearTimeout(fallback);
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e2) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e2.composedPath().includes(el);
    }, { passive: true }),
    useEventListener(window2, "pointerup", (e2) => {
      if (e2.button === 0) {
        const path = e2.composedPath();
        e2.composedPath = () => path;
        fallback = window2.setTimeout(() => listener(e2), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn2) => fn2());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useVModel(props, key, emit, options = {}) {
  var _a2, _b, _c;
  const {
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a2 = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a2.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key.toString()}`;
  const getValue2 = () => isDef(props[key]) ? props[key] : defaultValue;
  if (passive) {
    const proxy = ref(getValue2());
    watch(() => props[key], (v2) => proxy.value = v2);
    watch(proxy, (v2) => {
      if (v2 !== props[key] || deep)
        _emit(event, v2);
    }, {
      deep
    });
    return proxy;
  } else {
    return computed$1({
      get() {
        return getValue2();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}
const isInContainer = (el, container) => {
  if (!isClient || !el || !container)
    return false;
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect();
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
const NOOP = () => {
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const cacheStringFunction = (fn2) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn2(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject$1(val) && !Object.keys(val).length;
const isElement = (e2) => {
  if (typeof Element === "undefined")
    return false;
  return e2 instanceof Element;
};
const escapeStringRegexp = (string3 = "") => string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const keysOf = (arr) => Object.keys(arr);
const entriesOf = (arr) => Object.entries(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};
class ElementPlusError extends Error {
  constructor(m2) {
    super(m2);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m2) {
  throw new ElementPlusError(`[${scope}] ${m2}`);
}
function debugWarn(scope, message) {
}
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  var _a2;
  if (!isClient || !element || !styleName)
    return "";
  let key = camelize(styleName);
  if (key === "float")
    key = "cssFloat";
  try {
    const style = element.style[key];
    if (style)
      return style;
    const computed2 = (_a2 = document.defaultView) == null ? void 0 : _a2.getComputedStyle(element, "");
    return computed2 ? computed2[key] : "";
  } catch (e2) {
    return element.style[key];
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
const isScroll = (el, isVertical) => {
  if (!isClient)
    return false;
  const key = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(isVertical)];
  const overflow = getStyle(el, key);
  return ["scroll", "auto", "overlay"].some((s2) => overflow.includes(s2));
};
const getScrollContainer = (el, isVertical) => {
  if (!isClient)
    return;
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent))
      return window;
    if (isScroll(parent, isVertical))
      return parent;
    parent = parent.parentNode;
  }
  return parent;
};
let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a2;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a2 = outer.parentNode) == null ? void 0 : _a2.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
function scrollIntoView(container, selected) {
  if (!isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
/*! Element Plus Icons Vue v2.0.9 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var _sfc_main5 = {
  name: "ArrowDownBold"
}, _hoisted_15 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_25 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1), _hoisted_35 = [
  _hoisted_25
];
function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_15, _hoisted_35);
}
var arrow_down_bold_default = /* @__PURE__ */ export_helper_default(_sfc_main5, [["render", _sfc_render5], ["__file", "arrow-down-bold.vue"]]);
var _sfc_main6 = {
  name: "ArrowDown"
}, _hoisted_16 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_26 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), _hoisted_36 = [
  _hoisted_26
];
function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_16, _hoisted_36);
}
var arrow_down_default = /* @__PURE__ */ export_helper_default(_sfc_main6, [["render", _sfc_render6], ["__file", "arrow-down.vue"]]);
var _sfc_main8 = {
  name: "ArrowLeft"
}, _hoisted_18 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_28 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), _hoisted_38 = [
  _hoisted_28
];
function _sfc_render8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_18, _hoisted_38);
}
var arrow_left_default = /* @__PURE__ */ export_helper_default(_sfc_main8, [["render", _sfc_render8], ["__file", "arrow-left.vue"]]);
var _sfc_main10 = {
  name: "ArrowRight"
}, _hoisted_110 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_210 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), _hoisted_310 = [
  _hoisted_210
];
function _sfc_render10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_110, _hoisted_310);
}
var arrow_right_default = /* @__PURE__ */ export_helper_default(_sfc_main10, [["render", _sfc_render10], ["__file", "arrow-right.vue"]]);
var _sfc_main11 = {
  name: "ArrowUpBold"
}, _hoisted_111 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_211 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1), _hoisted_311 = [
  _hoisted_211
];
function _sfc_render11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_111, _hoisted_311);
}
var arrow_up_bold_default = /* @__PURE__ */ export_helper_default(_sfc_main11, [["render", _sfc_render11], ["__file", "arrow-up-bold.vue"]]);
var _sfc_main12 = {
  name: "ArrowUp"
}, _hoisted_112 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_212 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), _hoisted_312 = [
  _hoisted_212
];
function _sfc_render12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_112, _hoisted_312);
}
var arrow_up_default = /* @__PURE__ */ export_helper_default(_sfc_main12, [["render", _sfc_render12], ["__file", "arrow-up.vue"]]);
var _sfc_main29 = {
  name: "Calendar"
}, _hoisted_129 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_229 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), _hoisted_328 = [
  _hoisted_229
];
function _sfc_render29(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_129, _hoisted_328);
}
var calendar_default = /* @__PURE__ */ export_helper_default(_sfc_main29, [["render", _sfc_render29], ["__file", "calendar.vue"]]);
var _sfc_main43 = {
  name: "Check"
}, _hoisted_143 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_243 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1), _hoisted_342 = [
  _hoisted_243
];
function _sfc_render43(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_143, _hoisted_342);
}
var check_default = /* @__PURE__ */ export_helper_default(_sfc_main43, [["render", _sfc_render43], ["__file", "check.vue"]]);
var _sfc_main49 = {
  name: "CircleCheck"
}, _hoisted_149 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_249 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_348 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), _hoisted_415 = [
  _hoisted_249,
  _hoisted_348
];
function _sfc_render49(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_149, _hoisted_415);
}
var circle_check_default = /* @__PURE__ */ export_helper_default(_sfc_main49, [["render", _sfc_render49], ["__file", "circle-check.vue"]]);
var _sfc_main51 = {
  name: "CircleClose"
}, _hoisted_151 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_251 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), _hoisted_350 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_416 = [
  _hoisted_251,
  _hoisted_350
];
function _sfc_render51(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_151, _hoisted_416);
}
var circle_close_default = /* @__PURE__ */ export_helper_default(_sfc_main51, [["render", _sfc_render51], ["__file", "circle-close.vue"]]);
var _sfc_main54 = {
  name: "Clock"
}, _hoisted_154 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_254 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_353 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_418 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1), _hoisted_56 = [
  _hoisted_254,
  _hoisted_353,
  _hoisted_418
];
function _sfc_render54(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_154, _hoisted_56);
}
var clock_default = /* @__PURE__ */ export_helper_default(_sfc_main54, [["render", _sfc_render54], ["__file", "clock.vue"]]);
var _sfc_main56 = {
  name: "Close"
}, _hoisted_156 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_256 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), _hoisted_355 = [
  _hoisted_256
];
function _sfc_render56(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_156, _hoisted_355);
}
var close_default = /* @__PURE__ */ export_helper_default(_sfc_main56, [["render", _sfc_render56], ["__file", "close.vue"]]);
var _sfc_main72 = {
  name: "DArrowLeft"
}, _hoisted_172 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_272 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), _hoisted_371 = [
  _hoisted_272
];
function _sfc_render72(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_172, _hoisted_371);
}
var d_arrow_left_default = /* @__PURE__ */ export_helper_default(_sfc_main72, [["render", _sfc_render72], ["__file", "d-arrow-left.vue"]]);
var _sfc_main73 = {
  name: "DArrowRight"
}, _hoisted_173 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_273 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), _hoisted_372 = [
  _hoisted_273
];
function _sfc_render73(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_173, _hoisted_372);
}
var d_arrow_right_default = /* @__PURE__ */ export_helper_default(_sfc_main73, [["render", _sfc_render73], ["__file", "d-arrow-right.vue"]]);
var _sfc_main80 = {
  name: "Delete"
}, _hoisted_180 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_280 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), _hoisted_379 = [
  _hoisted_280
];
function _sfc_render80(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_180, _hoisted_379);
}
var delete_default = /* @__PURE__ */ export_helper_default(_sfc_main80, [["render", _sfc_render80], ["__file", "delete.vue"]]);
var _sfc_main90 = {
  name: "Document"
}, _hoisted_190 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_290 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), _hoisted_389 = [
  _hoisted_290
];
function _sfc_render90(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_190, _hoisted_389);
}
var document_default = /* @__PURE__ */ export_helper_default(_sfc_main90, [["render", _sfc_render90], ["__file", "document.vue"]]);
var _sfc_main118 = {
  name: "FullScreen"
}, _hoisted_1118 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2118 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1), _hoisted_3117 = [
  _hoisted_2118
];
function _sfc_render118(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1118, _hoisted_3117);
}
var full_screen_default = /* @__PURE__ */ export_helper_default(_sfc_main118, [["render", _sfc_render118], ["__file", "full-screen.vue"]]);
var _sfc_main133 = {
  name: "Hide"
}, _hoisted_1133 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2133 = /* @__PURE__ */ createElementVNode("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), _hoisted_3132 = /* @__PURE__ */ createElementVNode("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), _hoisted_438 = [
  _hoisted_2133,
  _hoisted_3132
];
function _sfc_render133(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1133, _hoisted_438);
}
var hide_default = /* @__PURE__ */ export_helper_default(_sfc_main133, [["render", _sfc_render133], ["__file", "hide.vue"]]);
var _sfc_main150 = {
  name: "Loading"
}, _hoisted_1150 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2150 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), _hoisted_3149 = [
  _hoisted_2150
];
function _sfc_render150(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1150, _hoisted_3149);
}
var loading_default = /* @__PURE__ */ export_helper_default(_sfc_main150, [["render", _sfc_render150], ["__file", "loading.vue"]]);
var _sfc_main174 = {
  name: "MoreFilled"
}, _hoisted_1174 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2174 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), _hoisted_3173 = [
  _hoisted_2174
];
function _sfc_render174(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1174, _hoisted_3173);
}
var more_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main174, [["render", _sfc_render174], ["__file", "more-filled.vue"]]);
var _sfc_main201 = {
  name: "Plus"
}, _hoisted_1201 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2201 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), _hoisted_3200 = [
  _hoisted_2201
];
function _sfc_render201(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1201, _hoisted_3200);
}
var plus_default = /* @__PURE__ */ export_helper_default(_sfc_main201, [["render", _sfc_render201], ["__file", "plus.vue"]]);
var _sfc_main215 = {
  name: "RefreshLeft"
}, _hoisted_1215 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2215 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), _hoisted_3214 = [
  _hoisted_2215
];
function _sfc_render215(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1215, _hoisted_3214);
}
var refresh_left_default = /* @__PURE__ */ export_helper_default(_sfc_main215, [["render", _sfc_render215], ["__file", "refresh-left.vue"]]);
var _sfc_main216 = {
  name: "RefreshRight"
}, _hoisted_1216 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2216 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), _hoisted_3215 = [
  _hoisted_2216
];
function _sfc_render216(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1216, _hoisted_3215);
}
var refresh_right_default = /* @__PURE__ */ export_helper_default(_sfc_main216, [["render", _sfc_render216], ["__file", "refresh-right.vue"]]);
var _sfc_main222 = {
  name: "ScaleToOriginal"
}, _hoisted_1222 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2222 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1), _hoisted_3221 = [
  _hoisted_2222
];
function _sfc_render222(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1222, _hoisted_3221);
}
var scale_to_original_default = /* @__PURE__ */ export_helper_default(_sfc_main222, [["render", _sfc_render222], ["__file", "scale-to-original.vue"]]);
var _sfc_main283 = {
  name: "View"
}, _hoisted_1283 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2283 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), _hoisted_3282 = [
  _hoisted_2283
];
function _sfc_render283(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1283, _hoisted_3282);
}
var view_default = /* @__PURE__ */ export_helper_default(_sfc_main283, [["render", _sfc_render283], ["__file", "view.vue"]]);
var _sfc_main287 = {
  name: "WarningFilled"
}, _hoisted_1287 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2287 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), _hoisted_3286 = [
  _hoisted_2287
];
function _sfc_render287(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1287, _hoisted_3286);
}
var warning_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main287, [["render", _sfc_render287], ["__file", "warning-filled.vue"]]);
var _sfc_main292 = {
  name: "ZoomIn"
}, _hoisted_1292 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2292 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), _hoisted_3291 = [
  _hoisted_2292
];
function _sfc_render292(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1292, _hoisted_3291);
}
var zoom_in_default = /* @__PURE__ */ export_helper_default(_sfc_main292, [["render", _sfc_render292], ["__file", "zoom-in.vue"]]);
var _sfc_main293 = {
  name: "ZoomOut"
}, _hoisted_1293 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2293 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), _hoisted_3292 = [
  _hoisted_2293
];
function _sfc_render293(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1293, _hoisted_3292);
}
var zoom_out_default = /* @__PURE__ */ export_helper_default(_sfc_main293, [["render", _sfc_render293], ["__file", "zoom-out.vue"]]);
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$1(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject$1(prop) || isEpProp(prop))
    return prop;
  const { values, required: required4, default: defaultValue, type: type4, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type: type4,
    required: !!required4,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: close_default
};
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      if (isFunction(ref2)) {
        ref2(el);
      } else {
        ref2.value = el;
      }
    });
  };
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const datePickTypes = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
];
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const componentSizes = ["", "default", "small", "large"];
const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
};
const getComponentSize = (size) => {
  return componentSizeMap[size || "default"];
};
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const unique = (arr) => [...new Set(arr)];
const castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};
const isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
const isKorean = (text) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);
const generateId = () => Math.floor(Math.random() * 1e4);
const mutable = (val) => val;
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys } = params;
  const allExcludeKeys = computed$1(() => {
    return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
  });
  const instance = getCurrentInstance();
  if (!instance) {
    return computed$1(() => ({}));
  }
  return computed$1(() => {
    var _a2;
    return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const configProviderContextKey = Symbol();
const dialogInjectionKey = Symbol("dialogInjectionKey");
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const elPaginationKey = Symbol("elPaginationKey");
const radioGroupKey = Symbol("radioGroupKey");
const rowContextKey = Symbol("rowContextKey");
const scrollbarContextKey = Symbol("scrollbarContextKey");
const uploadContextKey = Symbol("uploadContextKey");
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const ROOT_PICKER_INJECTION_KEY = Symbol();
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed$1(() => {
    var _a2, _b;
    return (_b = ((_a2 = vm.proxy) == null ? void 0 : _a2.$props)[name]) != null ? _b : void 0;
  });
};
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed$1(() => {
      var _a2, _b;
      return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalConfig("size");
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed$1(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
};
const useDisabled$1 = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed$1(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type: type4 = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
const useDraggable = (targetRef, dragRef, draggable) => {
  let transform = {
    offsetX: 0,
    offsetY: 0
  };
  const onMousedown = (e2) => {
    const downX = e2.clientX;
    const downY = e2.clientY;
    const { offsetX, offsetY } = transform;
    const targetRect = targetRef.value.getBoundingClientRect();
    const targetLeft = targetRect.left;
    const targetTop = targetRect.top;
    const targetWidth = targetRect.width;
    const targetHeight = targetRect.height;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const minLeft = -targetLeft + offsetX;
    const minTop = -targetTop + offsetY;
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
    const maxTop = clientHeight - targetTop - targetHeight + offsetY;
    const onMousemove = (e22) => {
      const moveX = Math.min(Math.max(offsetX + e22.clientX - downX, minLeft), maxLeft);
      const moveY = Math.min(Math.max(offsetY + e22.clientY - downY, minTop), maxTop);
      transform = {
        offsetX: moveX,
        offsetY: moveY
      };
      targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
    };
    const onMouseup = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener("mousedown", onMousedown);
    }
  };
  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener("mousedown", onMousedown);
    }
  };
  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable();
      } else {
        offDraggable();
      }
    });
  });
  onBeforeUnmount(() => {
    offDraggable();
  });
};
const useFocus = (el) => {
  return {
    focus: () => {
      var _a2, _b;
      (_b = (_a2 = el.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    }
  };
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig2 = useGlobalConfig("namespace");
  const namespace = computed$1(() => globalConfig2.value || defaultNamespace);
  const b2 = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e2 = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m2 = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be2 = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(unref(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(unref(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object4) => {
    const styles = {};
    for (const key in object4) {
      if (object4[key]) {
        styles[`--${namespace.value}-${key}`] = object4[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object4) => {
    const styles = {};
    for (const key in object4) {
      if (object4[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object4[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b: b2,
    e: e2,
    m: m2,
    be: be2,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection);
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const idRef = computed$1(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = ref(false);
  }
  const inputId = ref();
  let idUnwatch = void 0;
  const isLabeledByFormItem = computed$1(() => {
    var _a2;
    return !!(!props.label && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
  });
  onMounted(() => {
    idUnwatch = watch([toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
      const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
      if (newId !== inputId.value) {
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);
          if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
            formItemContext.addInputId(newId);
          }
        }
        inputId.value = newId;
      }
    }, { immediate: true });
  });
  onUnmounted(() => {
    idUnwatch && idUnwatch();
    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_2, key) => {
  var _a2;
  return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed$1(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const useLocale = () => {
  const locale = useGlobalConfig("locale");
  return buildLocaleContext(computed$1(() => locale.value || English));
};
let activeEffectScope;
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i2 = 0; i2 < deps.length; i2++) {
      const dep = deps[i2];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
class ReactiveEffect {
  constructor(fn2, scheduler = null, scope) {
    this.fn = fn2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
var _a;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a = "__v_isReadonly";
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
const useLockscreen = (trigger) => {
  if (!isRef(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns2 = useNamespace("popup");
  const hiddenCls = computed(() => ns2.bm("parent", "hidden"));
  if (!isClient || hasClass(document.body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  let bodyWidth = "0";
  const cleanup = () => {
    removeClass(document.body, hiddenCls.value);
    if (withoutHiddenClass) {
      document.body.style.width = bodyWidth;
    }
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass(document.body, hiddenCls.value);
    if (withoutHiddenClass) {
      bodyWidth = document.body.style.width;
    }
    scrollBarWidth2 = getScrollBarWidth(ns2.namespace.value);
    const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      document.body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
    }
    addClass(document.body, hiddenCls.value);
  });
  onScopeDispose(() => cleanup());
};
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed$1(() => isFunction(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed$1(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e2) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e2);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e2) => {
    mousedownTarget = e2.target === e2.currentTarget;
  };
  const onMouseup = (e2) => {
    mouseupTarget = e2.target === e2.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn2, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn2, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
let registeredEscapeHandlers = [];
const cachedHandler = (e2) => {
  const event = e2;
  if (event.key === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
const useEscapeKeydown = (handler) => {
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (isClient)
      registeredEscapeHandlers.push(handler);
  });
  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (isClient)
        document.removeEventListener("keydown", cachedHandler);
    }
  });
};
let cachedContainer;
const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient)
      return;
    if (!cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
    }, unref(showAfter));
  };
  const onClose = (event) => {
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = computed$1(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
function useCursor(input) {
  const selectionRef = ref();
  function recordCursor() {
    if (input.value == void 0)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (input.value == void 0 || selectionRef.value == void 0)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$J = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  ...__default__$J,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns2 = useNamespace("icon");
    const style = computed$1(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns2).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$1c, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ElIcon = withInstall(Icon);
let hiddenTextarea = void 0;
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a2;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (isNumber(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}
const inputProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: iconPropType,
    default: ""
  },
  prefixIcon: {
    type: iconPropType,
    default: ""
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  }
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  input: (value) => isString(value),
  change: (value) => isString(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
const _hoisted_1$E = ["role"];
const _hoisted_2$t = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_3$g = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
const __default__$I = {
  name: "ElInput",
  inheritAttrs: false
};
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  ...__default__$I,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const PENDANT_MAP = {
      suffix: "append",
      prefix: "prepend"
    };
    const instance = getCurrentInstance();
    const rawAttrs = useAttrs$1();
    const slots = useSlots();
    const containerAttrs = computed$1(() => {
      const comboBoxAttrs = {};
      if (props.containerRole === "combobox") {
        comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
        comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
        comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
      }
      return comboBoxAttrs;
    });
    const attrs = useAttrs({
      excludeKeys: computed$1(() => {
        return Object.keys(containerAttrs.value);
      })
    });
    const { form, formItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const inputSize = useSize();
    const inputDisabled = useDisabled$1();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = shallowRef();
    const textarea = shallowRef();
    const focused = ref(false);
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const countStyle = ref();
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const _ref = computed$1(() => input.value || textarea.value);
    const needStatusIcon = computed$1(() => {
      var _a2;
      return (_a2 = form == null ? void 0 : form.statusIcon) != null ? _a2 : false;
    });
    const validateState = computed$1(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = computed$1(() => validateState.value && ValidateComponentsMap[validateState.value]);
    const passwordIcon = computed$1(() => passwordVisible.value ? view_default : hide_default);
    const containerStyle = computed$1(() => [
      rawAttrs.style,
      props.inputStyle
    ]);
    const textareaStyle = computed$1(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed$1(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const showClear = computed$1(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = computed$1(() => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = computed$1(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed$1(() => Array.from(nativeInputValue.value).length);
    const inputExceed = computed$1(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const suffixVisible = computed$1(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const [recordCursor, setCursor] = useCursor(input);
    useResizeObserver(textarea, (entries) => {
      if (!isWordLimitVisible.value || props.resize !== "both")
        return;
      const entry = entries[0];
      const { width } = entry.contentRect;
      countStyle.value = {
        right: `calc(100% - ${width + 15 + 6}px)`
      };
    });
    const resizeTextarea = () => {
      const { type: type4, autosize } = props;
      if (!isClient || type4 !== "textarea")
        return;
      if (autosize) {
        const minRows = isObject$1(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject$1(autosize) ? autosize.maxRows : void 0;
        textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const calcIconOffset = (place) => {
      const { el } = instance.vnode;
      if (!el)
        return;
      const elList = Array.from(el.querySelectorAll(`.${nsInput.e(place)}`));
      const target = elList.find((item) => item.parentNode === el);
      if (!target)
        return;
      const pendant = PENDANT_MAP[place];
      if (slots[pendant]) {
        target.style.transform = `translateX(${place === "suffix" ? "-" : ""}${el.querySelector(`.${nsInput.be("group", pendant)}`).offsetWidth}px)`;
      } else {
        target.removeAttribute("style");
      }
    };
    const updateIconOffset = () => {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };
    const handleInput = async (event) => {
      recordCursor();
      let { value } = event.target;
      if (props.formatter) {
        value = props.parser ? props.parser(value) : value;
        value = props.formatter(value);
      }
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await nextTick();
      setNativeInputValue();
      setCursor();
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a2;
      emit("compositionupdate", event);
      const text = (_a2 = event.target) == null ? void 0 : _a2.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a2;
      await nextTick();
      (_a2 = _ref.value) == null ? void 0 : _a2.focus();
    };
    const blur = () => {
      var _a2;
      return (_a2 = _ref.value) == null ? void 0 : _a2.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a2;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur").catch((err) => debugWarn());
      }
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a2;
      (_a2 = _ref.value) == null ? void 0 : _a2.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    watch(() => props.modelValue, () => {
      var _a2;
      nextTick(() => resizeTextarea());
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, async () => {
      await nextTick();
      setNativeInputValue();
      resizeTextarea();
      updateIconOffset();
    });
    onMounted(async () => {
      if (!props.formatter && props.parser)
        ;
      setNativeInputValue();
      updateIconOffset();
      await nextTick();
      resizeTextarea();
    });
    onUpdated(async () => {
      await nextTick();
      updateIconOffset();
    });
    expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: toRef(props, "autosize"),
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", mergeProps(unref(containerAttrs), {
        class: [
          _ctx.type === "textarea" ? unref(nsTextarea).b() : unref(nsInput).b(),
          unref(nsInput).m(unref(inputSize)),
          unref(nsInput).is("disabled", unref(inputDisabled)),
          unref(nsInput).is("exceed", unref(inputExceed)),
          {
            [unref(nsInput).b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
            [unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
            [unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend,
            [unref(nsInput).m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
            [unref(nsInput).m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
            [unref(nsInput).bm("suffix", "password-clear")]: unref(showClear) && unref(showPwdVisible)
          },
          _ctx.$attrs.class
        ],
        style: unref(containerStyle),
        role: _ctx.containerRole,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }), [
        createCommentVNode(" input "),
        _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createCommentVNode(" prepend slot "),
          _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(nsInput).be("group", "prepend"))
          }, [
            renderSlot(_ctx.$slots, "prepend")
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass([unref(nsInput).e("wrapper"), unref(nsInput).is("focus", focused.value)])
          }, [
            createCommentVNode(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(nsInput).e("prefix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("prefix-inner"))
              }, [
                renderSlot(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(nsInput).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("input", mergeProps({
              id: unref(inputId),
              ref_key: "input",
              ref: input,
              class: unref(nsInput).e("inner")
            }, unref(attrs), {
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: unref(inputDisabled),
              formatter: _ctx.formatter,
              parser: _ctx.parser,
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.label,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              onCompositionstart: handleCompositionStart,
              onCompositionupdate: handleCompositionUpdate,
              onCompositionend: handleCompositionEnd,
              onInput: handleInput,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, _hoisted_2$t),
            createCommentVNode(" suffix slot "),
            unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(nsInput).e("suffix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("suffix-inner"))
              }, [
                !unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  renderSlot(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(unref(nsInput).e("icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                  onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                  onClick: clear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circle_close_default))
                  ]),
                  _: 1
                }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
                unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                  key: 3,
                  class: normalizeClass(unref(nsInput).e("count"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsInput).e("count-inner"))
                  }, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 3)
                ], 2)) : createCommentVNode("v-if", true),
                unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 4,
                  class: normalizeClass([
                    unref(nsInput).e("icon"),
                    unref(nsInput).e("validateIcon"),
                    unref(nsInput).is("loading", unref(validateState) === "validating")
                  ])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true)
          ], 2),
          createCommentVNode(" append slot "),
          _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(nsInput).be("group", "append"))
          }, [
            renderSlot(_ctx.$slots, "append")
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createCommentVNode(" textarea "),
          createElementVNode("textarea", mergeProps({
            id: unref(inputId),
            ref_key: "textarea",
            ref: textarea,
            class: unref(nsTextarea).e("inner")
          }, unref(attrs), {
            tabindex: _ctx.tabindex,
            disabled: unref(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: unref(textareaStyle),
            "aria-label": _ctx.label,
            placeholder: _ctx.placeholder,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_3$g),
          unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: normalizeStyle(countStyle.value),
            class: normalizeClass(unref(nsInput).e("count"))
          }, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 7)) : createCommentVNode("v-if", true)
        ], 64))
      ], 16, _hoisted_1$E)), [
        [vShow, _ctx.type !== "hidden"]
      ]);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$1b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ElInput = withInstall(Input);
const GAP = 4;
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({
  move,
  size,
  bar
}) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});
const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    const COMPONENT_NAME2 = "Thumb";
    const scrollbar = inject(scrollbarContextKey);
    const ns2 = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME2, "can not inject scrollbar context");
    const instance = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = isClient ? document.onselectstart : null;
    const bar = computed$1(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed$1(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed$1(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e2) => {
      var _a2;
      e2.stopPropagation();
      if (e2.ctrlKey || [1, 2].includes(e2.button))
        return;
      (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      startDrag(e2);
      const el = e2.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e2[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e2) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(e2.target.getBoundingClientRect()[bar.value.direction] - e2[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e2) => {
      e2.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e2) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e2[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns2).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "instance",
            ref: instance,
            class: normalizeClass([unref(ns2).e("bar"), unref(ns2).is(unref(bar).key)]),
            onMousedown: clickTrackHandler
          }, [
            createElementVNode("div", {
              ref_key: "thumb",
              ref: thumb,
              class: normalizeClass(unref(ns2).e("thumb")),
              style: normalizeStyle(unref(thumbStyle)),
              onMousedown: clickThumbHandler
            }, null, 38)
          ], 34), [
            [vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Thumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$1a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
});
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const moveX = ref(0);
    const moveY = ref(0);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    expose({
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Thumb, {
          move: moveX.value,
          ratio: _ctx.ratioX,
          size: _ctx.width,
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"]),
        createVNode(Thumb, {
          move: moveY.value,
          ratio: _ctx.ratioY,
          size: _ctx.height,
          vertical: "",
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"])
      ], 64);
    };
  }
});
var Bar = /* @__PURE__ */ _export_sfc$1(_sfc_main$19, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: Boolean,
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(isNumber)
};
const __default__$H = {
  name: "ElScrollbar"
};
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  ...__default__$H,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns2 = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbar$ = ref();
    const wrap$ = ref();
    const resize$ = ref();
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const barRef = ref();
    const ratioY = ref(1);
    const ratioX = ref(1);
    const style = computed$1(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const handleScroll = () => {
      var _a2;
      if (wrap$.value) {
        (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (isObject$1(arg1)) {
        wrap$.value.scrollTo(arg1);
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrap$.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrap$.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap$.value)
        return;
      const offsetHeight = wrap$.value.offsetHeight - GAP;
      const offsetWidth = wrap$.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resize$, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    watch(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        nextTick(() => {
          var _a2;
          update();
          if (wrap$.value) {
            (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
          }
        });
    });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    onMounted(() => {
      if (!props.native)
        nextTick(() => {
          update();
        });
    });
    onUpdated(() => update());
    expose({
      wrap$,
      update,
      scrollTo,
      setScrollTop,
      setScrollLeft,
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollbar$",
        ref: scrollbar$,
        class: normalizeClass(unref(ns2).b())
      }, [
        createElementVNode("div", {
          ref_key: "wrap$",
          ref: wrap$,
          class: normalizeClass([
            _ctx.wrapClass,
            unref(ns2).e("wrap"),
            { [unref(ns2).em("wrap", "hidden-default")]: !_ctx.native }
          ]),
          style: normalizeStyle(unref(style)),
          onScroll: handleScroll
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            ref_key: "resize$",
            ref: resize$,
            class: normalizeClass([unref(ns2).e("view"), _ctx.viewClass]),
            style: normalizeStyle(_ctx.viewStyle)
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"]))
        ], 38),
        !_ctx.native ? (openBlock(), createBlock(Bar, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          height: sizeHeight.value,
          width: sizeWidth.value,
          always: _ctx.always,
          "ratio-x": ratioX.value,
          "ratio-y": ratioY.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Scrollbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$18, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const ElScrollbar = withInstall(Scrollbar);
const usePopperProps = buildProps({
  role: {
    type: String,
    default: "tooltip"
  }
});
const __default__$G = {
  name: "ElPopperRoot",
  inheritAttrs: false
};
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  ...__default__$G,
  props: usePopperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef2 = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed$1(() => props.role);
    const popperProvides = {
      triggerRef: triggerRef2,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc$1(_sfc_main$17, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const __default__$F = {
  name: "ElPopperArrow",
  inheritAttrs: false
};
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  ...__default__$F,
  props: usePopperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns2 = useNamespace("popper");
    const { arrowOffset, arrowRef } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    onBeforeUnmount(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns2).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc$1(_sfc_main$16, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_2, {
    slots,
    attrs
  }) {
    var _a2;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
    return () => {
      var _a22;
      const defaultSlot = (_a22 = slots.default) == null ? void 0 : _a22.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject$1(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s2) {
  const ns2 = useNamespace("only-child");
  return createVNode("span", {
    "class": ns2.e("content")
  }, [s2]);
}
const usePopperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
});
const __default__$E = {
  name: "ElPopperTrigger",
  inheritAttrs: false
};
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  ...__default__$E,
  props: usePopperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef: triggerRef2 } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef2);
    const ariaControls = computed$1(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed$1(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed$1(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed$1(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    let virtualTriggerAriaStopWatch = void 0;
    onMounted(() => {
      watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef2.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      watch(() => triggerRef2.value, (el, prevEl) => {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;
        if (isElement(el)) {
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a2;
            const handler = props[eventName];
            if (handler) {
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a2 = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a2.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          virtualTriggerAriaStopWatch = watch([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
            [
              "aria-controls",
              "aria-describedby",
              "aria-haspopup",
              "aria-expanded"
            ].forEach((key, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (isElement(prevEl)) {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((key) => prevEl.removeAttribute(key));
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(() => {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
    });
    expose({
      triggerRef: triggerRef2
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$15, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
var E$2 = "top", R = "bottom", W = "right", P$2 = "left", me = "auto", G = [E$2, R, W, P$2], U$1 = "start", J = "end", Xe = "clippingParents", je = "viewport", K = "popper", Ye = "reference", De = G.reduce(function(t2, e2) {
  return t2.concat([e2 + "-" + U$1, e2 + "-" + J]);
}, []), Ee = [].concat(G, [me]).reduce(function(t2, e2) {
  return t2.concat([e2, e2 + "-" + U$1, e2 + "-" + J]);
}, []), Ge = "beforeRead", Je = "read", Ke = "afterRead", Qe = "beforeMain", Ze = "main", et = "afterMain", tt = "beforeWrite", nt = "write", rt = "afterWrite", ot = [Ge, Je, Ke, Qe, Ze, et, tt, nt, rt];
function C$1(t2) {
  return t2 ? (t2.nodeName || "").toLowerCase() : null;
}
function H(t2) {
  if (t2 == null)
    return window;
  if (t2.toString() !== "[object Window]") {
    var e2 = t2.ownerDocument;
    return e2 && e2.defaultView || window;
  }
  return t2;
}
function Q(t2) {
  var e2 = H(t2).Element;
  return t2 instanceof e2 || t2 instanceof Element;
}
function B(t2) {
  var e2 = H(t2).HTMLElement;
  return t2 instanceof e2 || t2 instanceof HTMLElement;
}
function Pe(t2) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e2 = H(t2).ShadowRoot;
  return t2 instanceof e2 || t2 instanceof ShadowRoot;
}
function Mt(t2) {
  var e2 = t2.state;
  Object.keys(e2.elements).forEach(function(n2) {
    var r2 = e2.styles[n2] || {}, o2 = e2.attributes[n2] || {}, i2 = e2.elements[n2];
    !B(i2) || !C$1(i2) || (Object.assign(i2.style, r2), Object.keys(o2).forEach(function(a2) {
      var s2 = o2[a2];
      s2 === false ? i2.removeAttribute(a2) : i2.setAttribute(a2, s2 === true ? "" : s2);
    }));
  });
}
function Rt(t2) {
  var e2 = t2.state, n2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e2.elements.popper.style, n2.popper), e2.styles = n2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, n2.arrow), function() {
    Object.keys(e2.elements).forEach(function(r2) {
      var o2 = e2.elements[r2], i2 = e2.attributes[r2] || {}, a2 = Object.keys(e2.styles.hasOwnProperty(r2) ? e2.styles[r2] : n2[r2]), s2 = a2.reduce(function(f2, c2) {
        return f2[c2] = "", f2;
      }, {});
      !B(o2) || !C$1(o2) || (Object.assign(o2.style, s2), Object.keys(i2).forEach(function(f2) {
        o2.removeAttribute(f2);
      }));
    });
  };
}
var Ae = { name: "applyStyles", enabled: true, phase: "write", fn: Mt, effect: Rt, requires: ["computeStyles"] };
function q(t2) {
  return t2.split("-")[0];
}
var X$1 = Math.max, ve = Math.min, Z = Math.round;
function ee(t2, e2) {
  e2 === void 0 && (e2 = false);
  var n2 = t2.getBoundingClientRect(), r2 = 1, o2 = 1;
  if (B(t2) && e2) {
    var i2 = t2.offsetHeight, a2 = t2.offsetWidth;
    a2 > 0 && (r2 = Z(n2.width) / a2 || 1), i2 > 0 && (o2 = Z(n2.height) / i2 || 1);
  }
  return { width: n2.width / r2, height: n2.height / o2, top: n2.top / o2, right: n2.right / r2, bottom: n2.bottom / o2, left: n2.left / r2, x: n2.left / r2, y: n2.top / o2 };
}
function ke(t2) {
  var e2 = ee(t2), n2 = t2.offsetWidth, r2 = t2.offsetHeight;
  return Math.abs(e2.width - n2) <= 1 && (n2 = e2.width), Math.abs(e2.height - r2) <= 1 && (r2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: n2, height: r2 };
}
function it(t2, e2) {
  var n2 = e2.getRootNode && e2.getRootNode();
  if (t2.contains(e2))
    return true;
  if (n2 && Pe(n2)) {
    var r2 = e2;
    do {
      if (r2 && t2.isSameNode(r2))
        return true;
      r2 = r2.parentNode || r2.host;
    } while (r2);
  }
  return false;
}
function N$1(t2) {
  return H(t2).getComputedStyle(t2);
}
function Wt(t2) {
  return ["table", "td", "th"].indexOf(C$1(t2)) >= 0;
}
function I$1(t2) {
  return ((Q(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function ge(t2) {
  return C$1(t2) === "html" ? t2 : t2.assignedSlot || t2.parentNode || (Pe(t2) ? t2.host : null) || I$1(t2);
}
function at(t2) {
  return !B(t2) || N$1(t2).position === "fixed" ? null : t2.offsetParent;
}
function Bt(t2) {
  var e2 = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n2 = navigator.userAgent.indexOf("Trident") !== -1;
  if (n2 && B(t2)) {
    var r2 = N$1(t2);
    if (r2.position === "fixed")
      return null;
  }
  var o2 = ge(t2);
  for (Pe(o2) && (o2 = o2.host); B(o2) && ["html", "body"].indexOf(C$1(o2)) < 0; ) {
    var i2 = N$1(o2);
    if (i2.transform !== "none" || i2.perspective !== "none" || i2.contain === "paint" || ["transform", "perspective"].indexOf(i2.willChange) !== -1 || e2 && i2.willChange === "filter" || e2 && i2.filter && i2.filter !== "none")
      return o2;
    o2 = o2.parentNode;
  }
  return null;
}
function se(t2) {
  for (var e2 = H(t2), n2 = at(t2); n2 && Wt(n2) && N$1(n2).position === "static"; )
    n2 = at(n2);
  return n2 && (C$1(n2) === "html" || C$1(n2) === "body" && N$1(n2).position === "static") ? e2 : n2 || Bt(t2) || e2;
}
function Le(t2) {
  return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
}
function fe(t2, e2, n2) {
  return X$1(t2, ve(e2, n2));
}
function St(t2, e2, n2) {
  var r2 = fe(t2, e2, n2);
  return r2 > n2 ? n2 : r2;
}
function st() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ft(t2) {
  return Object.assign({}, st(), t2);
}
function ct(t2, e2) {
  return e2.reduce(function(n2, r2) {
    return n2[r2] = t2, n2;
  }, {});
}
var Tt = function(t2, e2) {
  return t2 = typeof t2 == "function" ? t2(Object.assign({}, e2.rects, { placement: e2.placement })) : t2, ft(typeof t2 != "number" ? t2 : ct(t2, G));
};
function Ht(t2) {
  var e2, n2 = t2.state, r2 = t2.name, o2 = t2.options, i2 = n2.elements.arrow, a2 = n2.modifiersData.popperOffsets, s2 = q(n2.placement), f2 = Le(s2), c2 = [P$2, W].indexOf(s2) >= 0, u2 = c2 ? "height" : "width";
  if (!(!i2 || !a2)) {
    var m2 = Tt(o2.padding, n2), v2 = ke(i2), l2 = f2 === "y" ? E$2 : P$2, h2 = f2 === "y" ? R : W, p2 = n2.rects.reference[u2] + n2.rects.reference[f2] - a2[f2] - n2.rects.popper[u2], g = a2[f2] - n2.rects.reference[f2], x2 = se(i2), y = x2 ? f2 === "y" ? x2.clientHeight || 0 : x2.clientWidth || 0 : 0, $ = p2 / 2 - g / 2, d2 = m2[l2], b2 = y - v2[u2] - m2[h2], w2 = y / 2 - v2[u2] / 2 + $, O2 = fe(d2, w2, b2), j2 = f2;
    n2.modifiersData[r2] = (e2 = {}, e2[j2] = O2, e2.centerOffset = O2 - w2, e2);
  }
}
function Ct(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = n2.element, o2 = r2 === void 0 ? "[data-popper-arrow]" : r2;
  o2 != null && (typeof o2 == "string" && (o2 = e2.elements.popper.querySelector(o2), !o2) || !it(e2.elements.popper, o2) || (e2.elements.arrow = o2));
}
var pt = { name: "arrow", enabled: true, phase: "main", fn: Ht, effect: Ct, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function te(t2) {
  return t2.split("-")[1];
}
var qt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Vt(t2) {
  var e2 = t2.x, n2 = t2.y, r2 = window, o2 = r2.devicePixelRatio || 1;
  return { x: Z(e2 * o2) / o2 || 0, y: Z(n2 * o2) / o2 || 0 };
}
function ut(t2) {
  var e2, n2 = t2.popper, r2 = t2.popperRect, o2 = t2.placement, i2 = t2.variation, a2 = t2.offsets, s2 = t2.position, f2 = t2.gpuAcceleration, c2 = t2.adaptive, u2 = t2.roundOffsets, m2 = t2.isFixed, v2 = a2.x, l2 = v2 === void 0 ? 0 : v2, h2 = a2.y, p2 = h2 === void 0 ? 0 : h2, g = typeof u2 == "function" ? u2({ x: l2, y: p2 }) : { x: l2, y: p2 };
  l2 = g.x, p2 = g.y;
  var x2 = a2.hasOwnProperty("x"), y = a2.hasOwnProperty("y"), $ = P$2, d2 = E$2, b2 = window;
  if (c2) {
    var w2 = se(n2), O2 = "clientHeight", j2 = "clientWidth";
    if (w2 === H(n2) && (w2 = I$1(n2), N$1(w2).position !== "static" && s2 === "absolute" && (O2 = "scrollHeight", j2 = "scrollWidth")), w2 = w2, o2 === E$2 || (o2 === P$2 || o2 === W) && i2 === J) {
      d2 = R;
      var A2 = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.height : w2[O2];
      p2 -= A2 - r2.height, p2 *= f2 ? 1 : -1;
    }
    if (o2 === P$2 || (o2 === E$2 || o2 === R) && i2 === J) {
      $ = W;
      var k2 = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.width : w2[j2];
      l2 -= k2 - r2.width, l2 *= f2 ? 1 : -1;
    }
  }
  var D2 = Object.assign({ position: s2 }, c2 && qt), S2 = u2 === true ? Vt({ x: l2, y: p2 }) : { x: l2, y: p2 };
  if (l2 = S2.x, p2 = S2.y, f2) {
    var L;
    return Object.assign({}, D2, (L = {}, L[d2] = y ? "0" : "", L[$] = x2 ? "0" : "", L.transform = (b2.devicePixelRatio || 1) <= 1 ? "translate(" + l2 + "px, " + p2 + "px)" : "translate3d(" + l2 + "px, " + p2 + "px, 0)", L));
  }
  return Object.assign({}, D2, (e2 = {}, e2[d2] = y ? p2 + "px" : "", e2[$] = x2 ? l2 + "px" : "", e2.transform = "", e2));
}
function Nt(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = n2.gpuAcceleration, o2 = r2 === void 0 ? true : r2, i2 = n2.adaptive, a2 = i2 === void 0 ? true : i2, s2 = n2.roundOffsets, f2 = s2 === void 0 ? true : s2, c2 = { placement: q(e2.placement), variation: te(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: o2, isFixed: e2.options.strategy === "fixed" };
  e2.modifiersData.popperOffsets != null && (e2.styles.popper = Object.assign({}, e2.styles.popper, ut(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: a2, roundOffsets: f2 })))), e2.modifiersData.arrow != null && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, ut(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
}
var Me = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Nt, data: {} }, ye = { passive: true };
function It(t2) {
  var e2 = t2.state, n2 = t2.instance, r2 = t2.options, o2 = r2.scroll, i2 = o2 === void 0 ? true : o2, a2 = r2.resize, s2 = a2 === void 0 ? true : a2, f2 = H(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
  return i2 && c2.forEach(function(u2) {
    u2.addEventListener("scroll", n2.update, ye);
  }), s2 && f2.addEventListener("resize", n2.update, ye), function() {
    i2 && c2.forEach(function(u2) {
      u2.removeEventListener("scroll", n2.update, ye);
    }), s2 && f2.removeEventListener("resize", n2.update, ye);
  };
}
var Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: It, data: {} }, _t = { left: "right", right: "left", bottom: "top", top: "bottom" };
function be(t2) {
  return t2.replace(/left|right|bottom|top/g, function(e2) {
    return _t[e2];
  });
}
var zt = { start: "end", end: "start" };
function lt(t2) {
  return t2.replace(/start|end/g, function(e2) {
    return zt[e2];
  });
}
function We(t2) {
  var e2 = H(t2), n2 = e2.pageXOffset, r2 = e2.pageYOffset;
  return { scrollLeft: n2, scrollTop: r2 };
}
function Be(t2) {
  return ee(I$1(t2)).left + We(t2).scrollLeft;
}
function Ft(t2) {
  var e2 = H(t2), n2 = I$1(t2), r2 = e2.visualViewport, o2 = n2.clientWidth, i2 = n2.clientHeight, a2 = 0, s2 = 0;
  return r2 && (o2 = r2.width, i2 = r2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a2 = r2.offsetLeft, s2 = r2.offsetTop)), { width: o2, height: i2, x: a2 + Be(t2), y: s2 };
}
function Ut(t2) {
  var e2, n2 = I$1(t2), r2 = We(t2), o2 = (e2 = t2.ownerDocument) == null ? void 0 : e2.body, i2 = X$1(n2.scrollWidth, n2.clientWidth, o2 ? o2.scrollWidth : 0, o2 ? o2.clientWidth : 0), a2 = X$1(n2.scrollHeight, n2.clientHeight, o2 ? o2.scrollHeight : 0, o2 ? o2.clientHeight : 0), s2 = -r2.scrollLeft + Be(t2), f2 = -r2.scrollTop;
  return N$1(o2 || n2).direction === "rtl" && (s2 += X$1(n2.clientWidth, o2 ? o2.clientWidth : 0) - i2), { width: i2, height: a2, x: s2, y: f2 };
}
function Se(t2) {
  var e2 = N$1(t2), n2 = e2.overflow, r2 = e2.overflowX, o2 = e2.overflowY;
  return /auto|scroll|overlay|hidden/.test(n2 + o2 + r2);
}
function dt(t2) {
  return ["html", "body", "#document"].indexOf(C$1(t2)) >= 0 ? t2.ownerDocument.body : B(t2) && Se(t2) ? t2 : dt(ge(t2));
}
function ce(t2, e2) {
  var n2;
  e2 === void 0 && (e2 = []);
  var r2 = dt(t2), o2 = r2 === ((n2 = t2.ownerDocument) == null ? void 0 : n2.body), i2 = H(r2), a2 = o2 ? [i2].concat(i2.visualViewport || [], Se(r2) ? r2 : []) : r2, s2 = e2.concat(a2);
  return o2 ? s2 : s2.concat(ce(ge(a2)));
}
function Te(t2) {
  return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
}
function Xt(t2) {
  var e2 = ee(t2);
  return e2.top = e2.top + t2.clientTop, e2.left = e2.left + t2.clientLeft, e2.bottom = e2.top + t2.clientHeight, e2.right = e2.left + t2.clientWidth, e2.width = t2.clientWidth, e2.height = t2.clientHeight, e2.x = e2.left, e2.y = e2.top, e2;
}
function ht(t2, e2) {
  return e2 === je ? Te(Ft(t2)) : Q(e2) ? Xt(e2) : Te(Ut(I$1(t2)));
}
function Yt(t2) {
  var e2 = ce(ge(t2)), n2 = ["absolute", "fixed"].indexOf(N$1(t2).position) >= 0, r2 = n2 && B(t2) ? se(t2) : t2;
  return Q(r2) ? e2.filter(function(o2) {
    return Q(o2) && it(o2, r2) && C$1(o2) !== "body";
  }) : [];
}
function Gt(t2, e2, n2) {
  var r2 = e2 === "clippingParents" ? Yt(t2) : [].concat(e2), o2 = [].concat(r2, [n2]), i2 = o2[0], a2 = o2.reduce(function(s2, f2) {
    var c2 = ht(t2, f2);
    return s2.top = X$1(c2.top, s2.top), s2.right = ve(c2.right, s2.right), s2.bottom = ve(c2.bottom, s2.bottom), s2.left = X$1(c2.left, s2.left), s2;
  }, ht(t2, i2));
  return a2.width = a2.right - a2.left, a2.height = a2.bottom - a2.top, a2.x = a2.left, a2.y = a2.top, a2;
}
function mt(t2) {
  var e2 = t2.reference, n2 = t2.element, r2 = t2.placement, o2 = r2 ? q(r2) : null, i2 = r2 ? te(r2) : null, a2 = e2.x + e2.width / 2 - n2.width / 2, s2 = e2.y + e2.height / 2 - n2.height / 2, f2;
  switch (o2) {
    case E$2:
      f2 = { x: a2, y: e2.y - n2.height };
      break;
    case R:
      f2 = { x: a2, y: e2.y + e2.height };
      break;
    case W:
      f2 = { x: e2.x + e2.width, y: s2 };
      break;
    case P$2:
      f2 = { x: e2.x - n2.width, y: s2 };
      break;
    default:
      f2 = { x: e2.x, y: e2.y };
  }
  var c2 = o2 ? Le(o2) : null;
  if (c2 != null) {
    var u2 = c2 === "y" ? "height" : "width";
    switch (i2) {
      case U$1:
        f2[c2] = f2[c2] - (e2[u2] / 2 - n2[u2] / 2);
        break;
      case J:
        f2[c2] = f2[c2] + (e2[u2] / 2 - n2[u2] / 2);
        break;
    }
  }
  return f2;
}
function ne(t2, e2) {
  e2 === void 0 && (e2 = {});
  var n2 = e2, r2 = n2.placement, o2 = r2 === void 0 ? t2.placement : r2, i2 = n2.boundary, a2 = i2 === void 0 ? Xe : i2, s2 = n2.rootBoundary, f2 = s2 === void 0 ? je : s2, c2 = n2.elementContext, u2 = c2 === void 0 ? K : c2, m2 = n2.altBoundary, v2 = m2 === void 0 ? false : m2, l2 = n2.padding, h2 = l2 === void 0 ? 0 : l2, p2 = ft(typeof h2 != "number" ? h2 : ct(h2, G)), g = u2 === K ? Ye : K, x2 = t2.rects.popper, y = t2.elements[v2 ? g : u2], $ = Gt(Q(y) ? y : y.contextElement || I$1(t2.elements.popper), a2, f2), d2 = ee(t2.elements.reference), b2 = mt({ reference: d2, element: x2, strategy: "absolute", placement: o2 }), w2 = Te(Object.assign({}, x2, b2)), O2 = u2 === K ? w2 : d2, j2 = { top: $.top - O2.top + p2.top, bottom: O2.bottom - $.bottom + p2.bottom, left: $.left - O2.left + p2.left, right: O2.right - $.right + p2.right }, A2 = t2.modifiersData.offset;
  if (u2 === K && A2) {
    var k2 = A2[o2];
    Object.keys(j2).forEach(function(D2) {
      var S2 = [W, R].indexOf(D2) >= 0 ? 1 : -1, L = [E$2, R].indexOf(D2) >= 0 ? "y" : "x";
      j2[D2] += k2[L] * S2;
    });
  }
  return j2;
}
function Jt(t2, e2) {
  e2 === void 0 && (e2 = {});
  var n2 = e2, r2 = n2.placement, o2 = n2.boundary, i2 = n2.rootBoundary, a2 = n2.padding, s2 = n2.flipVariations, f2 = n2.allowedAutoPlacements, c2 = f2 === void 0 ? Ee : f2, u2 = te(r2), m2 = u2 ? s2 ? De : De.filter(function(h2) {
    return te(h2) === u2;
  }) : G, v2 = m2.filter(function(h2) {
    return c2.indexOf(h2) >= 0;
  });
  v2.length === 0 && (v2 = m2);
  var l2 = v2.reduce(function(h2, p2) {
    return h2[p2] = ne(t2, { placement: p2, boundary: o2, rootBoundary: i2, padding: a2 })[q(p2)], h2;
  }, {});
  return Object.keys(l2).sort(function(h2, p2) {
    return l2[h2] - l2[p2];
  });
}
function Kt(t2) {
  if (q(t2) === me)
    return [];
  var e2 = be(t2);
  return [lt(t2), e2, lt(e2)];
}
function Qt(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = t2.name;
  if (!e2.modifiersData[r2]._skip) {
    for (var o2 = n2.mainAxis, i2 = o2 === void 0 ? true : o2, a2 = n2.altAxis, s2 = a2 === void 0 ? true : a2, f2 = n2.fallbackPlacements, c2 = n2.padding, u2 = n2.boundary, m2 = n2.rootBoundary, v2 = n2.altBoundary, l2 = n2.flipVariations, h2 = l2 === void 0 ? true : l2, p2 = n2.allowedAutoPlacements, g = e2.options.placement, x2 = q(g), y = x2 === g, $ = f2 || (y || !h2 ? [be(g)] : Kt(g)), d2 = [g].concat($).reduce(function(z, V) {
      return z.concat(q(V) === me ? Jt(e2, { placement: V, boundary: u2, rootBoundary: m2, padding: c2, flipVariations: h2, allowedAutoPlacements: p2 }) : V);
    }, []), b2 = e2.rects.reference, w2 = e2.rects.popper, O2 = /* @__PURE__ */ new Map(), j2 = true, A2 = d2[0], k2 = 0; k2 < d2.length; k2++) {
      var D2 = d2[k2], S2 = q(D2), L = te(D2) === U$1, re = [E$2, R].indexOf(S2) >= 0, oe = re ? "width" : "height", M2 = ne(e2, { placement: D2, boundary: u2, rootBoundary: m2, altBoundary: v2, padding: c2 }), T2 = re ? L ? W : P$2 : L ? R : E$2;
      b2[oe] > w2[oe] && (T2 = be(T2));
      var pe = be(T2), _2 = [];
      if (i2 && _2.push(M2[S2] <= 0), s2 && _2.push(M2[T2] <= 0, M2[pe] <= 0), _2.every(function(z) {
        return z;
      })) {
        A2 = D2, j2 = false;
        break;
      }
      O2.set(D2, _2);
    }
    if (j2)
      for (var ue = h2 ? 3 : 1, xe = function(z) {
        var V = d2.find(function(de) {
          var ae = O2.get(de);
          if (ae)
            return ae.slice(0, z).every(function(Y2) {
              return Y2;
            });
        });
        if (V)
          return A2 = V, "break";
      }, ie = ue; ie > 0; ie--) {
        var le = xe(ie);
        if (le === "break")
          break;
      }
    e2.placement !== A2 && (e2.modifiersData[r2]._skip = true, e2.placement = A2, e2.reset = true);
  }
}
var vt = { name: "flip", enabled: true, phase: "main", fn: Qt, requiresIfExists: ["offset"], data: { _skip: false } };
function gt(t2, e2, n2) {
  return n2 === void 0 && (n2 = { x: 0, y: 0 }), { top: t2.top - e2.height - n2.y, right: t2.right - e2.width + n2.x, bottom: t2.bottom - e2.height + n2.y, left: t2.left - e2.width - n2.x };
}
function yt(t2) {
  return [E$2, W, R, P$2].some(function(e2) {
    return t2[e2] >= 0;
  });
}
function Zt(t2) {
  var e2 = t2.state, n2 = t2.name, r2 = e2.rects.reference, o2 = e2.rects.popper, i2 = e2.modifiersData.preventOverflow, a2 = ne(e2, { elementContext: "reference" }), s2 = ne(e2, { altBoundary: true }), f2 = gt(a2, r2), c2 = gt(s2, o2, i2), u2 = yt(f2), m2 = yt(c2);
  e2.modifiersData[n2] = { referenceClippingOffsets: f2, popperEscapeOffsets: c2, isReferenceHidden: u2, hasPopperEscaped: m2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": u2, "data-popper-escaped": m2 });
}
var bt = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zt };
function en(t2, e2, n2) {
  var r2 = q(t2), o2 = [P$2, E$2].indexOf(r2) >= 0 ? -1 : 1, i2 = typeof n2 == "function" ? n2(Object.assign({}, e2, { placement: t2 })) : n2, a2 = i2[0], s2 = i2[1];
  return a2 = a2 || 0, s2 = (s2 || 0) * o2, [P$2, W].indexOf(r2) >= 0 ? { x: s2, y: a2 } : { x: a2, y: s2 };
}
function tn(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = t2.name, o2 = n2.offset, i2 = o2 === void 0 ? [0, 0] : o2, a2 = Ee.reduce(function(u2, m2) {
    return u2[m2] = en(m2, e2.rects, i2), u2;
  }, {}), s2 = a2[e2.placement], f2 = s2.x, c2 = s2.y;
  e2.modifiersData.popperOffsets != null && (e2.modifiersData.popperOffsets.x += f2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[r2] = a2;
}
var wt = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tn };
function nn(t2) {
  var e2 = t2.state, n2 = t2.name;
  e2.modifiersData[n2] = mt({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
}
var He = { name: "popperOffsets", enabled: true, phase: "read", fn: nn, data: {} };
function rn(t2) {
  return t2 === "x" ? "y" : "x";
}
function on(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = t2.name, o2 = n2.mainAxis, i2 = o2 === void 0 ? true : o2, a2 = n2.altAxis, s2 = a2 === void 0 ? false : a2, f2 = n2.boundary, c2 = n2.rootBoundary, u2 = n2.altBoundary, m2 = n2.padding, v2 = n2.tether, l2 = v2 === void 0 ? true : v2, h2 = n2.tetherOffset, p2 = h2 === void 0 ? 0 : h2, g = ne(e2, { boundary: f2, rootBoundary: c2, padding: m2, altBoundary: u2 }), x2 = q(e2.placement), y = te(e2.placement), $ = !y, d2 = Le(x2), b2 = rn(d2), w2 = e2.modifiersData.popperOffsets, O2 = e2.rects.reference, j2 = e2.rects.popper, A2 = typeof p2 == "function" ? p2(Object.assign({}, e2.rects, { placement: e2.placement })) : p2, k2 = typeof A2 == "number" ? { mainAxis: A2, altAxis: A2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, A2), D2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, S2 = { x: 0, y: 0 };
  if (w2) {
    if (i2) {
      var L, re = d2 === "y" ? E$2 : P$2, oe = d2 === "y" ? R : W, M2 = d2 === "y" ? "height" : "width", T2 = w2[d2], pe = T2 + g[re], _2 = T2 - g[oe], ue = l2 ? -j2[M2] / 2 : 0, xe = y === U$1 ? O2[M2] : j2[M2], ie = y === U$1 ? -j2[M2] : -O2[M2], le = e2.elements.arrow, z = l2 && le ? ke(le) : { width: 0, height: 0 }, V = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : st(), de = V[re], ae = V[oe], Y2 = fe(0, O2[M2], z[M2]), jt = $ ? O2[M2] / 2 - ue - Y2 - de - k2.mainAxis : xe - Y2 - de - k2.mainAxis, Dt = $ ? -O2[M2] / 2 + ue + Y2 + ae + k2.mainAxis : ie + Y2 + ae + k2.mainAxis, Oe = e2.elements.arrow && se(e2.elements.arrow), Et = Oe ? d2 === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (L = D2 == null ? void 0 : D2[d2]) != null ? L : 0, Pt = T2 + jt - Ce - Et, At = T2 + Dt - Ce, qe = fe(l2 ? ve(pe, Pt) : pe, T2, l2 ? X$1(_2, At) : _2);
      w2[d2] = qe, S2[d2] = qe - T2;
    }
    if (s2) {
      var Ve, kt = d2 === "x" ? E$2 : P$2, Lt = d2 === "x" ? R : W, F2 = w2[b2], he = b2 === "y" ? "height" : "width", Ne = F2 + g[kt], Ie = F2 - g[Lt], $e = [E$2, P$2].indexOf(x2) !== -1, _e = (Ve = D2 == null ? void 0 : D2[b2]) != null ? Ve : 0, ze = $e ? Ne : F2 - O2[he] - j2[he] - _e + k2.altAxis, Fe = $e ? F2 + O2[he] + j2[he] - _e - k2.altAxis : Ie, Ue = l2 && $e ? St(ze, F2, Fe) : fe(l2 ? ze : Ne, F2, l2 ? Fe : Ie);
      w2[b2] = Ue, S2[b2] = Ue - F2;
    }
    e2.modifiersData[r2] = S2;
  }
}
var xt = { name: "preventOverflow", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"] };
function an(t2) {
  return { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop };
}
function sn(t2) {
  return t2 === H(t2) || !B(t2) ? We(t2) : an(t2);
}
function fn(t2) {
  var e2 = t2.getBoundingClientRect(), n2 = Z(e2.width) / t2.offsetWidth || 1, r2 = Z(e2.height) / t2.offsetHeight || 1;
  return n2 !== 1 || r2 !== 1;
}
function cn(t2, e2, n2) {
  n2 === void 0 && (n2 = false);
  var r2 = B(e2), o2 = B(e2) && fn(e2), i2 = I$1(e2), a2 = ee(t2, o2), s2 = { scrollLeft: 0, scrollTop: 0 }, f2 = { x: 0, y: 0 };
  return (r2 || !r2 && !n2) && ((C$1(e2) !== "body" || Se(i2)) && (s2 = sn(e2)), B(e2) ? (f2 = ee(e2, true), f2.x += e2.clientLeft, f2.y += e2.clientTop) : i2 && (f2.x = Be(i2))), { x: a2.left + s2.scrollLeft - f2.x, y: a2.top + s2.scrollTop - f2.y, width: a2.width, height: a2.height };
}
function pn(t2) {
  var e2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), r2 = [];
  t2.forEach(function(i2) {
    e2.set(i2.name, i2);
  });
  function o2(i2) {
    n2.add(i2.name);
    var a2 = [].concat(i2.requires || [], i2.requiresIfExists || []);
    a2.forEach(function(s2) {
      if (!n2.has(s2)) {
        var f2 = e2.get(s2);
        f2 && o2(f2);
      }
    }), r2.push(i2);
  }
  return t2.forEach(function(i2) {
    n2.has(i2.name) || o2(i2);
  }), r2;
}
function un(t2) {
  var e2 = pn(t2);
  return ot.reduce(function(n2, r2) {
    return n2.concat(e2.filter(function(o2) {
      return o2.phase === r2;
    }));
  }, []);
}
function ln(t2) {
  var e2;
  return function() {
    return e2 || (e2 = new Promise(function(n2) {
      Promise.resolve().then(function() {
        e2 = void 0, n2(t2());
      });
    })), e2;
  };
}
function dn(t2) {
  var e2 = t2.reduce(function(n2, r2) {
    var o2 = n2[r2.name];
    return n2[r2.name] = o2 ? Object.assign({}, o2, r2, { options: Object.assign({}, o2.options, r2.options), data: Object.assign({}, o2.data, r2.data) }) : r2, n2;
  }, {});
  return Object.keys(e2).map(function(n2) {
    return e2[n2];
  });
}
var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $t() {
  for (var t2 = arguments.length, e2 = new Array(t2), n2 = 0; n2 < t2; n2++)
    e2[n2] = arguments[n2];
  return !e2.some(function(r2) {
    return !(r2 && typeof r2.getBoundingClientRect == "function");
  });
}
function we(t2) {
  t2 === void 0 && (t2 = {});
  var e2 = t2, n2 = e2.defaultModifiers, r2 = n2 === void 0 ? [] : n2, o2 = e2.defaultOptions, i2 = o2 === void 0 ? Ot : o2;
  return function(a2, s2, f2) {
    f2 === void 0 && (f2 = i2);
    var c2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ot, i2), modifiersData: {}, elements: { reference: a2, popper: s2 }, attributes: {}, styles: {} }, u2 = [], m2 = false, v2 = { state: c2, setOptions: function(p2) {
      var g = typeof p2 == "function" ? p2(c2.options) : p2;
      h2(), c2.options = Object.assign({}, i2, c2.options, g), c2.scrollParents = { reference: Q(a2) ? ce(a2) : a2.contextElement ? ce(a2.contextElement) : [], popper: ce(s2) };
      var x2 = un(dn([].concat(r2, c2.options.modifiers)));
      return c2.orderedModifiers = x2.filter(function(y) {
        return y.enabled;
      }), l2(), v2.update();
    }, forceUpdate: function() {
      if (!m2) {
        var p2 = c2.elements, g = p2.reference, x2 = p2.popper;
        if ($t(g, x2)) {
          c2.rects = { reference: cn(g, se(x2), c2.options.strategy === "fixed"), popper: ke(x2) }, c2.reset = false, c2.placement = c2.options.placement, c2.orderedModifiers.forEach(function(j2) {
            return c2.modifiersData[j2.name] = Object.assign({}, j2.data);
          });
          for (var y = 0; y < c2.orderedModifiers.length; y++) {
            if (c2.reset === true) {
              c2.reset = false, y = -1;
              continue;
            }
            var $ = c2.orderedModifiers[y], d2 = $.fn, b2 = $.options, w2 = b2 === void 0 ? {} : b2, O2 = $.name;
            typeof d2 == "function" && (c2 = d2({ state: c2, options: w2, name: O2, instance: v2 }) || c2);
          }
        }
      }
    }, update: ln(function() {
      return new Promise(function(p2) {
        v2.forceUpdate(), p2(c2);
      });
    }), destroy: function() {
      h2(), m2 = true;
    } };
    if (!$t(a2, s2))
      return v2;
    v2.setOptions(f2).then(function(p2) {
      !m2 && f2.onFirstUpdate && f2.onFirstUpdate(p2);
    });
    function l2() {
      c2.orderedModifiers.forEach(function(p2) {
        var g = p2.name, x2 = p2.options, y = x2 === void 0 ? {} : x2, $ = p2.effect;
        if (typeof $ == "function") {
          var d2 = $({ state: c2, name: g, instance: v2, options: y }), b2 = function() {
          };
          u2.push(d2 || b2);
        }
      });
    }
    function h2() {
      u2.forEach(function(p2) {
        return p2();
      }), u2 = [];
    }
    return v2;
  };
}
we();
var mn = [Re, He, Me, Ae];
we({ defaultModifiers: mn });
var gn = [Re, He, Me, Ae, wt, vt, xt, pt, bt], yn = we({ defaultModifiers: gn });
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a2, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a2 = stack[0]) == null ? void 0 : _a2.resume) == null ? void 0 : _b.call(_a2);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const _sfc_main$14 = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e2) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e2;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            e2.preventDefault();
            emit("focusout-prevented");
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e2.preventDefault();
            if (loop)
              tryFocus(first, true);
            emit("focusout-prevented");
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            e2.preventDefault();
            if (loop)
              tryFocus(last, true);
            emit("focusout-prevented");
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e2) => {
      emit(ON_TRAP_FOCUS_EVT, e2);
    };
    const releaseOnFocus = (e2) => emit(ON_RELEASE_FOCUS_EVT, e2);
    const onFocusIn = (e2) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e2.target;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (isFocusedInTrap)
        emit("focusin", e2);
      if (focusLayer.paused)
        return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e2) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e2.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              tryFocus(lastFocusAfterTrapped, true);
            }
          }, 0);
        }
      } else {
        const target = e2.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e2);
      }
    };
    async function startTrap() {
      await nextTick();
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            nextTick(() => {
              let focusStartEl = props.focusStartEl;
              if (!isString(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              }
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new Event(FOCUS_AFTER_RELEASED, FOCUS_AFTER_TRAPPED_OPTS);
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body, true);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, trapOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    onMounted(() => {
      if (props.trapped) {
        startTrap();
      }
      watch(() => props.trapped, (trapped) => {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    onBeforeUnmount(() => {
      if (props.trapped) {
        stopTrap();
      }
    });
    return {
      onKeydown
    };
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$14, [["render", _sfc_render$f], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const usePopperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Ee,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const usePopperContentProps = buildProps({
  ...usePopperCoreConfigProps,
  id: String,
  style: { type: definePropType([String, Array, Object]) },
  className: { type: definePropType([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
});
const usePopperContentEmits = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
];
const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions: popperOptions2 } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions2,
    modifiers: genModifiers(props)
  };
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions2 == null ? void 0 : popperOptions2.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
}
function attachArrow(options, { arrowEl, arrowOffset }) {
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const __default__$D = {
  name: "ElPopperContent"
};
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  ...__default__$D,
  props: usePopperContentProps,
  emits: usePopperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { popperInstanceRef, contentRef, triggerRef: triggerRef2, role } = inject(POPPER_INJECTION_KEY, void 0);
    const formItemContext = inject(formItemContextKey, void 0);
    const { nextZIndex } = useZIndex();
    const ns2 = useNamespace("popper");
    const popperContentRef = ref();
    const focusStartRef = ref("first");
    const arrowRef = ref();
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const contentZIndex = ref(props.zIndex || nextZIndex());
    const trapped = ref(false);
    let triggerTargetAriaStopWatch = void 0;
    const computedReference = computed$1(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef2));
    const contentStyle = computed$1(() => [{ zIndex: unref(contentZIndex) }, props.popperStyle]);
    const contentClass = computed$1(() => [
      ns2.b(),
      ns2.is("pure", props.pure),
      ns2.is(props.effect),
      props.popperClass
    ]);
    const ariaModal = computed$1(() => {
      return role && role.value === "dialog" ? "false" : void 0;
    });
    const createPopperInstance = ({ referenceEl, popperContentEl, arrowEl }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset)
      });
      return yn(referenceEl, popperContentEl, options);
    };
    const updatePopper = (shouldUpdateZIndex = true) => {
      var _a2;
      (_a2 = unref(popperInstanceRef)) == null ? void 0 : _a2.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };
    const togglePopperAlive = () => {
      var _a2, _b;
      const monitorable = { name: "eventListeners", enabled: props.visible };
      (_b = (_a2 = unref(popperInstanceRef)) == null ? void 0 : _a2.setOptions) == null ? void 0 : _b.call(_a2, (options) => ({
        ...options,
        modifiers: [...options.modifiers || [], monitorable]
      }));
      updatePopper(false);
      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };
    const onFocusAfterTrapped = () => {
      emit("focus");
    };
    const onFocusAfterReleased = () => {
      focusStartRef.value = "first";
      emit("blur");
    };
    const onFocusInTrap = (event) => {
      var _a2;
      if (props.visible && !trapped.value) {
        if (event.target) {
          focusStartRef.value = event.target;
        }
        trapped.value = true;
        if (event.relatedTarget) {
          (_a2 = event.relatedTarget) == null ? void 0 : _a2.focus();
        }
      }
    };
    const onFocusoutPrevented = () => {
      if (!props.trapping) {
        trapped.value = false;
      }
    };
    const onReleaseRequested = () => {
      trapped.value = false;
      emit("close");
    };
    onMounted(() => {
      let updateHandle;
      watch(computedReference, (referenceEl) => {
        var _a2;
        updateHandle == null ? void 0 : updateHandle();
        const popperInstance = unref(popperInstanceRef);
        (_a2 = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a2.call(popperInstance);
        if (referenceEl) {
          const popperContentEl = unref(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl,
            popperContentEl,
            arrowEl: unref(arrowRef)
          });
          updateHandle = watch(() => referenceEl.getBoundingClientRect(), () => updatePopper(), {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        const el = unref(triggerTargetEl || popperContentRef.value);
        const prevEl = unref(prevTriggerTargetEl || popperContentRef.value);
        if (isElement(el)) {
          const { ariaLabel, id } = toRefs(props);
          triggerTargetAriaStopWatch = watch([role, ariaLabel, ariaModal, id], (watches) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (isElement(prevEl)) {
          ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
            prevEl.removeAttribute(key);
          });
        }
      }, { immediate: true });
      watch(() => props.visible, togglePopperAlive, { immediate: true });
      watch(() => buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset)
      }), (option) => {
        var _a2;
        return (_a2 = popperInstanceRef.value) == null ? void 0 : _a2.setOptions(option);
      });
    });
    onBeforeUnmount(() => {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef,
      popperInstanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: normalizeStyle(unref(contentStyle)),
        class: normalizeClass(unref(contentClass)),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e2) => _ctx.$emit("mouseenter", e2)),
        onMouseleave: _cache[1] || (_cache[1] = (e2) => _ctx.$emit("mouseleave", e2))
      }, [
        createVNode(unref(ElFocusTrap), {
          trapped: trapped.value,
          "trap-on-focus-in": true,
          "focus-trap-el": popperContentRef.value,
          "focus-start-el": focusStartRef.value,
          onFocusAfterTrapped,
          onFocusAfterReleased,
          onFocusin: onFocusInTrap,
          onFocusoutPrevented,
          onReleaseRequested
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
      ], 38);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$13, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const ElPopper = withInstall(Popper);
const ns = useNamespace("tooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...usePopperContentProps,
  appendTo: {
    type: definePropType([String, Object]),
    default: POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = buildProps({
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const useTooltipProps = buildProps({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const _sfc_main$12 = defineComponent({
  name: "ElTooltipContent",
  components: {
    ElPopperContent
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = ref(null);
    const intermediateOpen = ref(false);
    const entering = ref(false);
    const leaving = ref(false);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = computed$1(() => {
      return props.persistent;
    });
    onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = computed$1(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed$1(() => {
      return props.disabled ? false : unref(open);
    });
    const contentStyle = computed$1(() => {
      var _a2;
      return (_a2 = props.style) != null ? _a2 : {};
    });
    const ariaHidden = computed$1(() => !unref(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a2, _b;
      (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside(computed$1(() => {
        var _a2;
        return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
      }), () => {
        if (unref(controlled))
          return;
        const $trigger = unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      destroyed,
      shouldRender,
      shouldShow,
      onClose,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave,
      onBlur
    };
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_content = resolveComponent("el-popper-content");
  return openBlock(), createBlock(Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    createVNode(Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: withCtx(() => [
        _ctx.shouldRender ? withDirectives((openBlock(), createBlock(_component_el_popper_content, mergeProps({
          key: 0,
          id: _ctx.id,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-label": _ctx.ariaLabel,
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          "trigger-target-el": _ctx.triggerTargetEl,
          visible: _ctx.shouldShow,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave,
          onBlur: _ctx.onBlur,
          onClose: _ctx.onClose
        }), {
          default: withCtx(() => [
            createCommentVNode(" Workaround bug #6378 "),
            !_ctx.destroyed ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [vShow, _ctx.shouldShow]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$12, [["render", _sfc_render$e], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const isTriggerType = (trigger, type4) => {
  if (isArray(trigger)) {
    return trigger.includes(type4);
  }
  return trigger === type4;
};
const whenTrigger = (trigger, type4, handler) => {
  return (e2) => {
    isTriggerType(unref(trigger), type4) && handler(e2);
  };
};
const _sfc_main$11 = defineComponent({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger
  },
  props: useTooltipTriggerProps,
  setup(props) {
    const ns2 = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef2 = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e2) => {
      if (e2.button === 0) {
        onToggle(e2);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e2) => {
      e2.preventDefault();
      onToggle(e2);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e2) => {
      const { code } = e2;
      if (props.triggerKeys.includes(code)) {
        e2.preventDefault();
        onToggle(e2);
      }
    });
    return {
      onBlur,
      onContextMenu,
      onFocus,
      onMouseenter,
      onMouseleave,
      onClick,
      onKeydown,
      open,
      id,
      triggerRef: triggerRef2,
      ns: ns2
    };
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_trigger = resolveComponent("el-popper-trigger");
  return openBlock(), createBlock(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    class: normalizeClass(_ctx.ns.e("trigger")),
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$11, [["render", _sfc_render$d], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps, useModelToggle, useModelToggleEmits } = createModelToggleComposable("visible");
const _sfc_main$10 = defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper,
    ElPopperArrow,
    ElTooltipContent,
    ElTooltipTrigger
  },
  props: {
    ...usePopperProps,
    ...useModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...usePopperArrowProps,
    ...useTooltipProps
  },
  emits: [
    ...useModelToggleEmits,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(props, { emit }) {
    usePopperContainer();
    const compatShowAfter = computed$1(() => {
      if (!isUndefined(props.openDelay))
        ;
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = computed$1(() => {
      if (!isUndefined(props.visibleArrow))
        ;
      return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = useId();
    const popperRef = ref(null);
    const contentRef = ref(null);
    const updatePopper = () => {
      var _a2;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref(void 0);
    const { show, hide, hasUpdateHandler } = useModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = computed$1(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = () => {
      var _a2, _b;
      const popperContent = (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };
    onDeactivated(() => open.value && hide());
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      contentRef,
      open,
      hide,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1$D = ["innerHTML"];
const _hoisted_2$s = { key: 1 };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = resolveComponent("el-tooltip-trigger");
  const _component_el_popper_arrow = resolveComponent("el-popper-arrow");
  const _component_el_tooltip_content = resolveComponent("el-tooltip-content");
  const _component_el_popper = resolveComponent("el-popper");
  return openBlock(), createBlock(_component_el_popper, {
    ref: "popperRef",
    role: _ctx.role
  }, {
    default: withCtx(() => [
      createVNode(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "trigger-keys": _ctx.triggerKeys,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: withCtx(() => [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      createVNode(_component_el_tooltip_content, {
        ref: "contentRef",
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "trigger-target-el": _ctx.triggerTargetEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "virtual-triggering": _ctx.virtualTriggering,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1$D)) : (openBlock(), createElementBlock("span", _hoisted_2$s, toDisplayString(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? (openBlock(), createBlock(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$10, [["render", _sfc_render$c], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType,
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => loading_default
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r2, g, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g, b2) {
  r2 = bound01(r2, 255);
  g = bound01(g, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g, b2);
  var min = Math.min(r2, g, b2);
  var h2 = 0;
  var s2 = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s2 = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r2:
        h2 = (g - b2) / d2 + (g < b2 ? 6 : 0);
        break;
      case g:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, l: l2 };
}
function hue2rgb(p2, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q2 - p2) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function hslToRgb(h2, s2, l2) {
  var r2;
  var g;
  var b2;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  if (s2 === 0) {
    g = l2;
    b2 = l2;
    r2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p2 = 2 * l2 - q2;
    r2 = hue2rgb(p2, q2, h2 + 1 / 3);
    g = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return { r: r2 * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHsv(r2, g, b2) {
  r2 = bound01(r2, 255);
  g = bound01(g, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g, b2);
  var min = Math.min(r2, g, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s2 = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r2:
        h2 = (g - b2) / d2 + (g < b2 ? 6 : 0);
        break;
      case g:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, v: v2 };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p2 = v2 * (1 - s2);
  var q2 = v2 * (1 - f2 * s2);
  var t2 = v2 * (1 - (1 - f2) * s2);
  var mod = i2 % 6;
  var r2 = [v2, q2, p2, p2, t2, v2][mod];
  var g = [t2, v2, v2, q2, p2, p2][mod];
  var b2 = [p2, p2, t2, v2, v2, q2][mod];
  return { r: r2 * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHex(r2, g, b2, allow3Char) {
  var hex2 = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r2, g, b2, a2, allow4Char) {
  var hex2 = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = function() {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a2;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R2;
    var G2;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G2 = GsRGB / 12.92;
    } else {
      G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s2 = Math.round(hsv.s * 100);
    var v2 = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s2 = Math.round(hsl.s * 100);
    var l2 = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r2 = Math.round(this.r);
    var g = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g, ", ").concat(b2, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x2) {
      return "".concat(Math.round(bound01(x2, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x2) {
      return Math.round(bound01(x2, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
      var _b = _a2[_i], key = _b[0], value = _b[1];
      if (hex2 === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format2) {
    var formatSet = Boolean(format2);
    format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
    if (needsAlphaFormat) {
      if (format2 === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }
    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format2 === "name") {
      formattedString = this.toName();
    }
    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }
    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p2 = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p2 + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s2 = hsv.s;
    var v2 = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
      v2 = (v2 + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n2) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n2;
    for (var i2 = 1; i2 < n2; i2++) {
      result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
}();
function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useDisabled$1();
  const ns2 = useNamespace("button");
  return computed$1(() => {
    let styles = {};
    const buttonColor = props.color;
    if (buttonColor) {
      const color = new TinyColor(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = ns2.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": `var(${ns2.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns2.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns2.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns2.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns2.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? `var(${ns2.cssVarName("color-white")})` : `var(${ns2.cssVarName("color-black")})`;
        styles = ns2.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns2.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns2.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns2.cssVarName("color-white")})`;
          styles[ns2.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}
const _hoisted_1$C = ["aria-disabled", "disabled", "autofocus", "type"];
const __default__$C = {
  name: "ElButton"
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  ...__default__$C,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      from: "type.text",
      replacement: "type.link",
      version: "3.0.0",
      scope: "props",
      ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
    }, computed$1(() => props.type === "text"));
    const buttonGroupContext = inject(buttonGroupContextKey, void 0);
    const globalConfig2 = useGlobalConfig("button");
    const ns2 = useNamespace("button");
    const { form } = useFormItem();
    const _size = useSize(computed$1(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = useDisabled$1();
    const _ref = ref();
    const _type = computed$1(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = computed$1(() => {
      var _a2, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = computed$1(() => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
      }
      return false;
    });
    const buttonStyle = useButtonCustomStyle(props);
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref_key: "_ref",
        ref: _ref,
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).m(unref(_type)),
          unref(ns2).m(unref(_size)),
          unref(ns2).is("disabled", unref(_disabled)),
          unref(ns2).is("loading", _ctx.loading),
          unref(ns2).is("plain", _ctx.plain),
          unref(ns2).is("round", _ctx.round),
          unref(ns2).is("circle", _ctx.circle),
          unref(ns2).is("text", _ctx.text),
          unref(ns2).is("link", _ctx.link),
          unref(ns2).is("has-bg", _ctx.bg)
        ]),
        "aria-disabled": unref(_disabled) || _ctx.loading,
        disabled: unref(_disabled) || _ctx.loading,
        autofocus: _ctx.autofocus,
        type: _ctx.nativeType,
        style: normalizeStyle(unref(buttonStyle)),
        onClick: handleClick
      }, [
        _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
            key: 1,
            class: normalizeClass(unref(ns2).is("loading"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : _ctx.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ [unref(ns2).em("text", "expand")]: unref(shouldAddSpace) })
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 14, _hoisted_1$C);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
const __default__$B = {
  name: "ElButtonGroup"
};
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  ...__default__$B,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns2 = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns2).b("group")}`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const ElButton = withInstall(Button, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t2, e2) {
    module2.exports = e2();
  }(commonjsGlobal, function() {
    var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", f2 = "month", h2 = "quarter", c2 = "year", d2 = "date", $ = "Invalid Date", l2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m2 = function(t3, e3, n3) {
      var r3 = String(t3);
      return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
    }, g = { s: m2, z: function(t3) {
      var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
      return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
    }, m: function t3(e3, n3) {
      if (e3.date() < n3.date())
        return -t3(n3, e3);
      var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, f2), s3 = n3 - i3 < 0, u3 = e3.clone().add(r3 + (s3 ? -1 : 1), f2);
      return +(-(r3 + (n3 - i3) / (s3 ? i3 - u3 : u3 - i3)) || 0);
    }, a: function(t3) {
      return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
    }, p: function(t3) {
      return { M: f2, y: c2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i2, ms: r2, Q: h2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t3) {
      return void 0 === t3;
    } }, v2 = "en", D2 = {};
    D2[v2] = M2;
    var p2 = function(t3) {
      return t3 instanceof _2;
    }, S2 = function t3(e3, n3, r3) {
      var i3;
      if (!e3)
        return v2;
      if ("string" == typeof e3) {
        var s3 = e3.toLowerCase();
        D2[s3] && (i3 = s3), n3 && (D2[s3] = n3, i3 = s3);
        var u3 = e3.split("-");
        if (!i3 && u3.length > 1)
          return t3(u3[0]);
      } else {
        var a3 = e3.name;
        D2[a3] = e3, i3 = a3;
      }
      return !r3 && i3 && (v2 = i3), i3 || !r3 && v2;
    }, w2 = function(t3, e3) {
      if (p2(t3))
        return t3.clone();
      var n3 = "object" == typeof e3 ? e3 : {};
      return n3.date = t3, n3.args = arguments, new _2(n3);
    }, O2 = g;
    O2.l = S2, O2.i = p2, O2.w = function(t3, e3) {
      return w2(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _2 = function() {
      function M3(t3) {
        this.$L = S2(t3.locale, null, true), this.parse(t3);
      }
      var m3 = M3.prototype;
      return m3.parse = function(t3) {
        this.$d = function(t4) {
          var e3 = t4.date, n3 = t4.utc;
          if (null === e3)
            return new Date(NaN);
          if (O2.u(e3))
            return new Date();
          if (e3 instanceof Date)
            return new Date(e3);
          if ("string" == typeof e3 && !/Z$/i.test(e3)) {
            var r3 = e3.match(l2);
            if (r3) {
              var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
            }
          }
          return new Date(e3);
        }(t3), this.$x = t3.x || {}, this.init();
      }, m3.init = function() {
        var t3 = this.$d;
        this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
      }, m3.$utils = function() {
        return O2;
      }, m3.isValid = function() {
        return !(this.$d.toString() === $);
      }, m3.isSame = function(t3, e3) {
        var n3 = w2(t3);
        return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
      }, m3.isAfter = function(t3, e3) {
        return w2(t3) < this.startOf(e3);
      }, m3.isBefore = function(t3, e3) {
        return this.endOf(e3) < w2(t3);
      }, m3.$g = function(t3, e3, n3) {
        return O2.u(t3) ? this[e3] : this.set(n3, t3);
      }, m3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m3.valueOf = function() {
        return this.$d.getTime();
      }, m3.startOf = function(t3, e3) {
        var n3 = this, r3 = !!O2.u(e3) || e3, h3 = O2.p(t3), $2 = function(t4, e4) {
          var i3 = O2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
          return r3 ? i3 : i3.endOf(a2);
        }, l3 = function(t4, e4) {
          return O2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
        }, y2 = this.$W, M4 = this.$M, m4 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
        switch (h3) {
          case c2:
            return r3 ? $2(1, 0) : $2(31, 11);
          case f2:
            return r3 ? $2(1, M4) : $2(0, M4 + 1);
          case o2:
            var v3 = this.$locale().weekStart || 0, D3 = (y2 < v3 ? y2 + 7 : y2) - v3;
            return $2(r3 ? m4 - D3 : m4 + (6 - D3), M4);
          case a2:
          case d2:
            return l3(g2 + "Hours", 0);
          case u2:
            return l3(g2 + "Minutes", 1);
          case s2:
            return l3(g2 + "Seconds", 2);
          case i2:
            return l3(g2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m3.endOf = function(t3) {
        return this.startOf(t3, false);
      }, m3.$set = function(t3, e3) {
        var n3, o3 = O2.p(t3), h3 = "set" + (this.$u ? "UTC" : ""), $2 = (n3 = {}, n3[a2] = h3 + "Date", n3[d2] = h3 + "Date", n3[f2] = h3 + "Month", n3[c2] = h3 + "FullYear", n3[u2] = h3 + "Hours", n3[s2] = h3 + "Minutes", n3[i2] = h3 + "Seconds", n3[r2] = h3 + "Milliseconds", n3)[o3], l3 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
        if (o3 === f2 || o3 === c2) {
          var y2 = this.clone().set(d2, 1);
          y2.$d[$2](l3), y2.init(), this.$d = y2.set(d2, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $2 && this.$d[$2](l3);
        return this.init(), this;
      }, m3.set = function(t3, e3) {
        return this.clone().$set(t3, e3);
      }, m3.get = function(t3) {
        return this[O2.p(t3)]();
      }, m3.add = function(r3, h3) {
        var d3, $2 = this;
        r3 = Number(r3);
        var l3 = O2.p(h3), y2 = function(t3) {
          var e3 = w2($2);
          return O2.w(e3.date(e3.date() + Math.round(t3 * r3)), $2);
        };
        if (l3 === f2)
          return this.set(f2, this.$M + r3);
        if (l3 === c2)
          return this.set(c2, this.$y + r3);
        if (l3 === a2)
          return y2(1);
        if (l3 === o2)
          return y2(7);
        var M4 = (d3 = {}, d3[s2] = e2, d3[u2] = n2, d3[i2] = t2, d3)[l3] || 1, m4 = this.$d.getTime() + r3 * M4;
        return O2.w(m4, this);
      }, m3.subtract = function(t3, e3) {
        return this.add(-1 * t3, e3);
      }, m3.format = function(t3) {
        var e3 = this, n3 = this.$locale();
        if (!this.isValid())
          return n3.invalidDate || $;
        var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = O2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n3.weekdays, f3 = n3.months, h3 = function(t4, n4, i4, s4) {
          return t4 && (t4[n4] || t4(e3, r3)) || i4[n4].slice(0, s4);
        }, c3 = function(t4) {
          return O2.s(s3 % 12 || 12, t4, "0");
        }, d3 = n3.meridiem || function(t4, e4, n4) {
          var r4 = t4 < 12 ? "AM" : "PM";
          return n4 ? r4.toLowerCase() : r4;
        }, l3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: O2.s(a3 + 1, 2, "0"), MMM: h3(n3.monthsShort, a3, f3, 3), MMMM: h3(f3, a3), D: this.$D, DD: O2.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n3.weekdaysMin, this.$W, o3, 2), ddd: h3(n3.weekdaysShort, this.$W, o3, 3), dddd: o3[this.$W], H: String(s3), HH: O2.s(s3, 2, "0"), h: c3(1), hh: c3(2), a: d3(s3, u3, true), A: d3(s3, u3, false), m: String(u3), mm: O2.s(u3, 2, "0"), s: String(this.$s), ss: O2.s(this.$s, 2, "0"), SSS: O2.s(this.$ms, 3, "0"), Z: i3 };
        return r3.replace(y, function(t4, e4) {
          return e4 || l3[t4] || i3.replace(":", "");
        });
      }, m3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m3.diff = function(r3, d3, $2) {
        var l3, y2 = O2.p(d3), M4 = w2(r3), m4 = (M4.utcOffset() - this.utcOffset()) * e2, g2 = this - M4, v3 = O2.m(this, M4);
        return v3 = (l3 = {}, l3[c2] = v3 / 12, l3[f2] = v3, l3[h2] = v3 / 3, l3[o2] = (g2 - m4) / 6048e5, l3[a2] = (g2 - m4) / 864e5, l3[u2] = g2 / n2, l3[s2] = g2 / e2, l3[i2] = g2 / t2, l3)[y2] || g2, $2 ? v3 : O2.a(v3);
      }, m3.daysInMonth = function() {
        return this.endOf(f2).$D;
      }, m3.$locale = function() {
        return D2[this.$L];
      }, m3.locale = function(t3, e3) {
        if (!t3)
          return this.$L;
        var n3 = this.clone(), r3 = S2(t3, e3, true);
        return r3 && (n3.$L = r3), n3;
      }, m3.clone = function() {
        return O2.w(this.$d, this);
      }, m3.toDate = function() {
        return new Date(this.valueOf());
      }, m3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m3.toISOString = function() {
        return this.$d.toISOString();
      }, m3.toString = function() {
        return this.$d.toUTCString();
      }, M3;
    }(), T2 = _2.prototype;
    return w2.prototype = T2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", f2], ["$y", c2], ["$D", d2]].forEach(function(t3) {
      T2[t3[1]] = function(e3) {
        return this.$g(e3, t3[0], t3[1]);
      };
    }), w2.extend = function(t3, e3) {
      return t3.$i || (t3(e3, _2, w2), t3.$i = true), w2;
    }, w2.locale = S2, w2.isDayjs = p2, w2.unix = function(t3) {
      return w2(1e3 * t3);
    }, w2.en = D2[v2], w2.Ls = D2, w2.p = {}, w2;
  });
})(dayjs_min);
var dayjs = dayjs_min.exports;
var localeData$1 = { exports: {} };
(function(module2, exports2) {
  !function(n2, e2) {
    module2.exports = e2();
  }(commonjsGlobal, function() {
    return function(n2, e2, t2) {
      var r2 = e2.prototype, o2 = function(n3) {
        return n3 && (n3.indexOf ? n3 : n3.s);
      }, u2 = function(n3, e3, t3, r3, u3) {
        var i3 = n3.name ? n3 : n3.$locale(), a3 = o2(i3[e3]), s3 = o2(i3[t3]), f2 = a3 || s3.map(function(n4) {
          return n4.slice(0, r3);
        });
        if (!u3)
          return f2;
        var d2 = i3.weekStart;
        return f2.map(function(n4, e4) {
          return f2[(e4 + (d2 || 0)) % 7];
        });
      }, i2 = function() {
        return t2.Ls[t2.locale()];
      }, a2 = function(n3, e3) {
        return n3.formats[e3] || function(n4) {
          return n4.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n5, e4, t3) {
            return e4 || t3.slice(1);
          });
        }(n3.formats[e3.toUpperCase()]);
      }, s2 = function() {
        var n3 = this;
        return { months: function(e3) {
          return e3 ? e3.format("MMMM") : u2(n3, "months");
        }, monthsShort: function(e3) {
          return e3 ? e3.format("MMM") : u2(n3, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n3.$locale().weekStart || 0;
        }, weekdays: function(e3) {
          return e3 ? e3.format("dddd") : u2(n3, "weekdays");
        }, weekdaysMin: function(e3) {
          return e3 ? e3.format("dd") : u2(n3, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e3) {
          return e3 ? e3.format("ddd") : u2(n3, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e3) {
          return a2(n3.$locale(), e3);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r2.localeData = function() {
        return s2.bind(this)();
      }, t2.localeData = function() {
        var n3 = i2();
        return { firstDayOfWeek: function() {
          return n3.weekStart || 0;
        }, weekdays: function() {
          return t2.weekdays();
        }, weekdaysShort: function() {
          return t2.weekdaysShort();
        }, weekdaysMin: function() {
          return t2.weekdaysMin();
        }, months: function() {
          return t2.months();
        }, monthsShort: function() {
          return t2.monthsShort();
        }, longDateFormat: function(e3) {
          return a2(n3, e3);
        }, meridiem: n3.meridiem, ordinal: n3.ordinal };
      }, t2.months = function() {
        return u2(i2(), "months");
      }, t2.monthsShort = function() {
        return u2(i2(), "monthsShort", "months", 3);
      }, t2.weekdays = function(n3) {
        return u2(i2(), "weekdays", null, null, n3);
      }, t2.weekdaysShort = function(n3) {
        return u2(i2(), "weekdaysShort", "weekdays", 3, n3);
      }, t2.weekdaysMin = function(n3) {
        return u2(i2(), "weekdaysMin", "weekdays", 2, n3);
      };
    };
  });
})(localeData$1);
var localeData = localeData$1.exports;
var customParseFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t2 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d\d/, r2 = /\d\d?/, i2 = /\d*[^-_:/,()\s\d]+/, o2 = {}, s2 = function(e3) {
      return (e3 = +e3) + (e3 > 68 ? 1900 : 2e3);
    };
    var a2 = function(e3) {
      return function(t3) {
        this[e3] = +t3;
      };
    }, f2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e3) {
      (this.zone || (this.zone = {})).offset = function(e4) {
        if (!e4)
          return 0;
        if ("Z" === e4)
          return 0;
        var t3 = e4.match(/([+-]|\d\d)/g), n3 = 60 * t3[1] + (+t3[2] || 0);
        return 0 === n3 ? 0 : "+" === t3[0] ? -n3 : n3;
      }(e3);
    }], h2 = function(e3) {
      var t3 = o2[e3];
      return t3 && (t3.indexOf ? t3 : t3.s.concat(t3.f));
    }, u2 = function(e3, t3) {
      var n3, r3 = o2.meridiem;
      if (r3) {
        for (var i3 = 1; i3 <= 24; i3 += 1)
          if (e3.indexOf(r3(i3, 0, t3)) > -1) {
            n3 = i3 > 12;
            break;
          }
      } else
        n3 = e3 === (t3 ? "pm" : "PM");
      return n3;
    }, d2 = { A: [i2, function(e3) {
      this.afternoon = u2(e3, false);
    }], a: [i2, function(e3) {
      this.afternoon = u2(e3, true);
    }], S: [/\d/, function(e3) {
      this.milliseconds = 100 * +e3;
    }], SS: [n2, function(e3) {
      this.milliseconds = 10 * +e3;
    }], SSS: [/\d{3}/, function(e3) {
      this.milliseconds = +e3;
    }], s: [r2, a2("seconds")], ss: [r2, a2("seconds")], m: [r2, a2("minutes")], mm: [r2, a2("minutes")], H: [r2, a2("hours")], h: [r2, a2("hours")], HH: [r2, a2("hours")], hh: [r2, a2("hours")], D: [r2, a2("day")], DD: [n2, a2("day")], Do: [i2, function(e3) {
      var t3 = o2.ordinal, n3 = e3.match(/\d+/);
      if (this.day = n3[0], t3)
        for (var r3 = 1; r3 <= 31; r3 += 1)
          t3(r3).replace(/\[|\]/g, "") === e3 && (this.day = r3);
    }], M: [r2, a2("month")], MM: [n2, a2("month")], MMM: [i2, function(e3) {
      var t3 = h2("months"), n3 = (h2("monthsShort") || t3.map(function(e4) {
        return e4.slice(0, 3);
      })).indexOf(e3) + 1;
      if (n3 < 1)
        throw new Error();
      this.month = n3 % 12 || n3;
    }], MMMM: [i2, function(e3) {
      var t3 = h2("months").indexOf(e3) + 1;
      if (t3 < 1)
        throw new Error();
      this.month = t3 % 12 || t3;
    }], Y: [/[+-]?\d+/, a2("year")], YY: [n2, function(e3) {
      this.year = s2(e3);
    }], YYYY: [/\d{4}/, a2("year")], Z: f2, ZZ: f2 };
    function c2(n3) {
      var r3, i3;
      r3 = n3, i3 = o2 && o2.formats;
      for (var s3 = (n3 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t3, n4, r4) {
        var o3 = r4 && r4.toUpperCase();
        return n4 || i3[r4] || e2[r4] || i3[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t4, n5) {
          return t4 || n5.slice(1);
        });
      })).match(t2), a3 = s3.length, f3 = 0; f3 < a3; f3 += 1) {
        var h3 = s3[f3], u3 = d2[h3], c3 = u3 && u3[0], l2 = u3 && u3[1];
        s3[f3] = l2 ? { regex: c3, parser: l2 } : h3.replace(/^\[|\]$/g, "");
      }
      return function(e3) {
        for (var t3 = {}, n4 = 0, r4 = 0; n4 < a3; n4 += 1) {
          var i4 = s3[n4];
          if ("string" == typeof i4)
            r4 += i4.length;
          else {
            var o3 = i4.regex, f4 = i4.parser, h4 = e3.slice(r4), u4 = o3.exec(h4)[0];
            f4.call(t3, u4), e3 = e3.replace(u4, "");
          }
        }
        return function(e4) {
          var t4 = e4.afternoon;
          if (void 0 !== t4) {
            var n5 = e4.hours;
            t4 ? n5 < 12 && (e4.hours += 12) : 12 === n5 && (e4.hours = 0), delete e4.afternoon;
          }
        }(t3), t3;
      };
    }
    return function(e3, t3, n3) {
      n3.p.customParseFormat = true, e3 && e3.parseTwoDigitYear && (s2 = e3.parseTwoDigitYear);
      var r3 = t3.prototype, i3 = r3.parse;
      r3.parse = function(e4) {
        var t4 = e4.date, r4 = e4.utc, s3 = e4.args;
        this.$u = r4;
        var a3 = s3[1];
        if ("string" == typeof a3) {
          var f3 = true === s3[2], h3 = true === s3[3], u3 = f3 || h3, d3 = s3[2];
          h3 && (d3 = s3[2]), o2 = this.$locale(), !f3 && d3 && (o2 = n3.Ls[d3]), this.$d = function(e5, t5, n4) {
            try {
              if (["x", "X"].indexOf(t5) > -1)
                return new Date(("X" === t5 ? 1e3 : 1) * e5);
              var r5 = c2(t5)(e5), i4 = r5.year, o3 = r5.month, s4 = r5.day, a4 = r5.hours, f4 = r5.minutes, h4 = r5.seconds, u4 = r5.milliseconds, d4 = r5.zone, l3 = new Date(), m3 = s4 || (i4 || o3 ? 1 : l3.getDate()), M3 = i4 || l3.getFullYear(), Y2 = 0;
              i4 && !o3 || (Y2 = o3 > 0 ? o3 - 1 : l3.getMonth());
              var p2 = a4 || 0, v2 = f4 || 0, D2 = h4 || 0, g = u4 || 0;
              return d4 ? new Date(Date.UTC(M3, Y2, m3, p2, v2, D2, g + 60 * d4.offset * 1e3)) : n4 ? new Date(Date.UTC(M3, Y2, m3, p2, v2, D2, g)) : new Date(M3, Y2, m3, p2, v2, D2, g);
            } catch (e6) {
              return new Date("");
            }
          }(t4, a3, r4), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u3 && t4 != this.format(a3) && (this.$d = new Date("")), o2 = {};
        } else if (a3 instanceof Array)
          for (var l2 = a3.length, m2 = 1; m2 <= l2; m2 += 1) {
            s3[1] = a3[m2 - 1];
            var M2 = n3.apply(this, s3);
            if (M2.isValid()) {
              this.$d = M2.$d, this.$L = M2.$L, this.init();
              break;
            }
            m2 === l2 && (this.$d = new Date(""));
          }
        else
          i3.call(this, e4);
      };
    };
  });
})(customParseFormat$1);
var customParseFormat = customParseFormat$1.exports;
const timeUnits = ["hours", "minutes", "seconds"];
const DEFAULT_FORMATS_TIME = "HH:mm:ss";
const DEFAULT_FORMATS_DATE = "YYYY-MM-DD";
const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  dates: DEFAULT_FORMATS_DATE,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: "YYYY-MM",
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`
};
const buildTimeList = (value, bound) => {
  return [
    value > 0 ? value - 1 : void 0,
    value,
    value < bound ? value + 1 : void 0
  ];
};
const rangeArr = (n2) => Array.from(Array.from({ length: n2 }).keys());
const extractDateFormat = (format2) => {
  return format2.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format2) => {
  return format2.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};
const dateEquals = function(a2, b2) {
  const aIsDate = isDate(a2);
  const bIsDate = isDate(b2);
  if (aIsDate && bIsDate) {
    return a2.getTime() === b2.getTime();
  }
  if (!aIsDate && !bIsDate) {
    return a2 === b2;
  }
  return false;
};
const valueEquals = function(a2, b2) {
  const aIsArray = isArray(a2);
  const bIsArray = isArray(b2);
  if (aIsArray && bIsArray) {
    if (a2.length !== b2.length) {
      return false;
    }
    return a2.every((item, index2) => dateEquals(item, b2[index2]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a2, b2);
  }
  return false;
};
const parseDate = function(date4, format2, lang) {
  const day = isEmpty(format2) || format2 === "x" ? dayjs(date4).locale(lang) : dayjs(date4, format2).locale(lang);
  return day.isValid() ? day : void 0;
};
const formatter = function(date4, format2, lang) {
  if (isEmpty(format2))
    return date4;
  if (format2 === "x")
    return +date4;
  return dayjs(date4).locale(lang).format(format2);
};
const makeList = (total, method4) => {
  var _a2;
  const arr = [];
  const disabledArr = method4 == null ? void 0 : method4();
  for (let i2 = 0; i2 < total; i2++) {
    arr.push((_a2 = disabledArr == null ? void 0 : disabledArr.includes(i2)) != null ? _a2 : false);
  }
  return arr;
};
const disabledTimeListsProps = buildProps({
  disabledHours: {
    type: definePropType(Function)
  },
  disabledMinutes: {
    type: definePropType(Function)
  },
  disabledSeconds: {
    type: definePropType(Function)
  }
});
const timePanelSharedProps = buildProps({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
});
const timePickerDefaultProps = buildProps({
  id: {
    type: definePropType([Array, String])
  },
  name: {
    type: definePropType([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: definePropType([String, Object]),
    default: circle_close_default
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  size: useSizeProp,
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  modelValue: {
    type: definePropType([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: definePropType([Date, Array])
  },
  defaultTime: {
    type: definePropType([Date, Array])
  },
  isRange: {
    type: Boolean,
    default: false
  },
  ...disabledTimeListsProps,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: definePropType([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  unlinkPanels: Boolean
});
const _hoisted_1$B = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const _hoisted_2$r = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const __default__$A = {
  name: "Picker"
};
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  ...__default__$A,
  props: timePickerDefaultProps,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(__props, { expose, emit }) {
    const props = __props;
    const { lang } = useLocale();
    const nsDate = useNamespace("date");
    const nsInput = useNamespace("input");
    const nsRange = useNamespace("range");
    const { form, formItem } = useFormItem();
    const elPopperOptions = inject("ElPopperOptions", {});
    const refPopper = ref();
    const inputRef = ref();
    const pickerVisible = ref(false);
    const pickerActualVisible = ref(false);
    const valueOnOpen = ref(null);
    let hasJustTabExitedInput = false;
    let ignoreFocusEvent = false;
    watch(pickerVisible, (val) => {
      if (!val) {
        userInput.value = null;
        nextTick(() => {
          emitChange(props.modelValue);
        });
      } else {
        valueOnOpen.value = props.modelValue;
      }
    });
    const emitChange = (val, isClear) => {
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        emit("change", val);
        props.validateEvent && (formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn()));
      }
    };
    const emitInput = (input) => {
      if (!valueEquals(props.modelValue, input)) {
        let formatted;
        if (isArray(input)) {
          formatted = input.map((item) => formatter(item, props.valueFormat, lang.value));
        } else if (input) {
          formatted = formatter(input, props.valueFormat, lang.value);
        }
        emit("update:modelValue", input ? formatted : input, lang.value);
      }
    };
    const emitKeydown = (e2) => {
      emit("keydown", e2);
    };
    const refInput = computed$1(() => {
      if (inputRef.value) {
        const _r = isRangeInput.value ? inputRef.value : inputRef.value.$el;
        return Array.from(_r.querySelectorAll("input"));
      }
      return [];
    });
    const setSelectionRange = (start, end, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start, end);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start, end);
        _inputs[1].focus();
      }
    };
    const focusOnInputBox = () => {
      focus(true, true);
      nextTick(() => {
        ignoreFocusEvent = false;
      });
    };
    const onPick = (date4 = "", visible = false) => {
      if (!visible) {
        focusOnInputBox();
      }
      pickerVisible.value = visible;
      let result;
      if (isArray(date4)) {
        result = date4.map((_2) => _2.toDate());
      } else {
        result = date4 ? date4.toDate() : date4;
      }
      userInput.value = null;
      emitInput(result);
    };
    const onBeforeShow = () => {
      pickerActualVisible.value = true;
    };
    const onShow = () => {
      emit("visible-change", true);
    };
    const onKeydownPopperContent = (event) => {
      if ((event == null ? void 0 : event.key) === EVENT_CODE.esc) {
        focus(true, true);
      }
    };
    const onHide = () => {
      pickerActualVisible.value = false;
      ignoreFocusEvent = false;
      emit("visible-change", false);
    };
    const focus = (focusStartInput = true, isIgnoreFocusEvent = false) => {
      ignoreFocusEvent = isIgnoreFocusEvent;
      const [leftInput, rightInput] = unref(refInput);
      let input = leftInput;
      if (!focusStartInput && isRangeInput.value) {
        input = rightInput;
      }
      if (input) {
        input.focus();
      }
    };
    const handleFocusInput = (e2) => {
      if (props.readonly || pickerDisabled.value || pickerVisible.value || ignoreFocusEvent) {
        return;
      }
      pickerVisible.value = true;
      emit("focus", e2);
    };
    let currentHandleBlurDeferCallback = void 0;
    const handleBlurInput = (e2) => {
      const handleBlurDefer = async () => {
        setTimeout(() => {
          var _a2;
          if (currentHandleBlurDeferCallback === handleBlurDefer) {
            if (!(((_a2 = refPopper.value) == null ? void 0 : _a2.isFocusInsideContent()) && !hasJustTabExitedInput) && refInput.value.filter((input) => {
              return input.contains(document.activeElement);
            }).length === 0) {
              handleChange();
              pickerVisible.value = false;
              emit("blur", e2);
              props.validateEvent && (formItem == null ? void 0 : formItem.validate("blur").catch((err) => debugWarn()));
            }
            hasJustTabExitedInput = false;
          }
        }, 0);
      };
      currentHandleBlurDeferCallback = handleBlurDefer;
      handleBlurDefer();
    };
    const pickerDisabled = computed$1(() => {
      return props.disabled || (form == null ? void 0 : form.disabled);
    });
    const parsedValue2 = computed$1(() => {
      let dayOrDays;
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          dayOrDays = pickerOptions.value.getDefaultValue();
        }
      } else {
        if (isArray(props.modelValue)) {
          dayOrDays = props.modelValue.map((d2) => parseDate(d2, props.valueFormat, lang.value));
        } else {
          dayOrDays = parseDate(props.modelValue, props.valueFormat, lang.value);
        }
      }
      if (pickerOptions.value.getRangeAvailableTime) {
        const availableResult = pickerOptions.value.getRangeAvailableTime(dayOrDays);
        if (!isEqual(availableResult, dayOrDays)) {
          dayOrDays = availableResult;
          emitInput(isArray(dayOrDays) ? dayOrDays.map((_2) => _2.toDate()) : dayOrDays.toDate());
        }
      }
      if (isArray(dayOrDays) && dayOrDays.some((day) => !day)) {
        dayOrDays = [];
      }
      return dayOrDays;
    });
    const displayValue = computed$1(() => {
      if (!pickerOptions.value.panelReady)
        return "";
      const formattedValue = formatDayjsToString(parsedValue2.value);
      if (isArray(userInput.value)) {
        return [
          userInput.value[0] || formattedValue && formattedValue[0] || "",
          userInput.value[1] || formattedValue && formattedValue[1] || ""
        ];
      } else if (userInput.value !== null) {
        return userInput.value;
      }
      if (!isTimePicker.value && valueIsEmpty.value)
        return "";
      if (!pickerVisible.value && valueIsEmpty.value)
        return "";
      if (formattedValue) {
        return isDatesPicker.value ? formattedValue.join(", ") : formattedValue;
      }
      return "";
    });
    const isTimeLikePicker = computed$1(() => props.type.includes("time"));
    const isTimePicker = computed$1(() => props.type.startsWith("time"));
    const isDatesPicker = computed$1(() => props.type === "dates");
    const triggerIcon = computed$1(() => props.prefixIcon || (isTimeLikePicker.value ? clock_default : calendar_default));
    const showClose = ref(false);
    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (showClose.value) {
        event.stopPropagation();
        focusOnInputBox();
        emitInput(null);
        emitChange(null, true);
        showClose.value = false;
        pickerVisible.value = false;
        pickerOptions.value.handleClear && pickerOptions.value.handleClear();
      }
    };
    const valueIsEmpty = computed$1(() => {
      const { modelValue } = props;
      return !modelValue || isArray(modelValue) && !modelValue.filter(Boolean).length;
    });
    const onMouseDownInput = async (event) => {
      var _a2;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a2 = event.target) == null ? void 0 : _a2.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true;
      }
    };
    const onMouseLeave = () => {
      showClose.value = false;
    };
    const onTouchStartInput = (event) => {
      var _a2;
      if (((_a2 = event.touches[0].target) == null ? void 0 : _a2.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const isRangeInput = computed$1(() => {
      return props.type.includes("range");
    });
    const pickerSize = useSize();
    const popperEl = computed$1(() => {
      var _a2, _b;
      return (_b = (_a2 = unref(refPopper)) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    const actualInputRef = computed$1(() => {
      var _a2;
      if (unref(isRangeInput)) {
        return unref(inputRef);
      }
      return (_a2 = unref(inputRef)) == null ? void 0 : _a2.$el;
    });
    onClickOutside(actualInputRef, (e2) => {
      const unrefedPopperEl = unref(popperEl);
      const inputEl = unref(actualInputRef);
      if (unrefedPopperEl && (e2.target === unrefedPopperEl || e2.composedPath().includes(unrefedPopperEl)) || e2.target === inputEl || e2.composedPath().includes(inputEl))
        return;
      pickerVisible.value = false;
    });
    const userInput = ref(null);
    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value);
        if (value) {
          if (isValidValue(value)) {
            emitInput(isArray(value) ? value.map((_2) => _2.toDate()) : value.toDate());
            userInput.value = null;
          }
        }
      }
      if (userInput.value === "") {
        emitInput(null);
        emitChange(null);
        userInput.value = null;
      }
    };
    const parseUserInputToDayjs = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.parseUserInput(value);
    };
    const formatDayjsToString = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.formatToString(value);
    };
    const isValidValue = (value) => {
      return pickerOptions.value.isValidValue(value);
    };
    const handleKeydownInput = async (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      const { code } = event;
      emitKeydown(event);
      if (code === EVENT_CODE.esc) {
        if (pickerVisible.value === true) {
          pickerVisible.value = false;
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (code === EVENT_CODE.down) {
        if (pickerOptions.value.handleFocusPicker) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (pickerVisible.value === false) {
          pickerVisible.value = true;
          await nextTick();
        }
        if (pickerOptions.value.handleFocusPicker) {
          pickerOptions.value.handleFocusPicker();
          return;
        }
      }
      if (code === EVENT_CODE.tab) {
        hasJustTabExitedInput = true;
        return;
      }
      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (userInput.value === null || userInput.value === "" || isValidValue(parseUserInputToDayjs(displayValue.value))) {
          handleChange();
          pickerVisible.value = false;
        }
        event.stopPropagation();
        return;
      }
      if (userInput.value) {
        event.stopPropagation();
        return;
      }
      if (pickerOptions.value.handleKeydownInput) {
        pickerOptions.value.handleKeydownInput(event);
      }
    };
    const onUserInput = (e2) => {
      userInput.value = e2;
      if (!pickerVisible.value) {
        pickerVisible.value = true;
      }
    };
    const handleStartInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [target.value, userInput.value[1]];
      } else {
        userInput.value = [target.value, null];
      }
    };
    const handleEndInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [userInput.value[0], target.value];
      } else {
        userInput.value = [null, target.value];
      }
    };
    const handleStartChange = () => {
      var _a2;
      const values = userInput.value;
      const value = parseUserInputToDayjs(values && values[0]);
      const parsedVal = unref(parsedValue2);
      if (value && value.isValid()) {
        userInput.value = [
          formatDayjsToString(value),
          ((_a2 = displayValue.value) == null ? void 0 : _a2[1]) || null
        ];
        const newValue = [value, parsedVal && (parsedVal[1] || null)];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const handleEndChange = () => {
      var _a2;
      const values = unref(userInput);
      const value = parseUserInputToDayjs(values && values[1]);
      const parsedVal = unref(parsedValue2);
      if (value && value.isValid()) {
        userInput.value = [
          ((_a2 = unref(displayValue)) == null ? void 0 : _a2[0]) || null,
          formatDayjsToString(value)
        ];
        const newValue = [parsedVal && parsedVal[0], value];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const pickerOptions = ref({});
    const onSetPickerOption = (e2) => {
      pickerOptions.value[e2[0]] = e2[1];
      pickerOptions.value.panelReady = true;
    };
    const onCalendarChange = (e2) => {
      emit("calendar-change", e2);
    };
    const onPanelChange = (value, mode, view) => {
      emit("panel-change", value, mode, view);
    };
    provide("EP_PICKER_BASE", {
      props
    });
    expose({
      focus,
      handleFocusInput,
      handleBlurInput,
      onPick
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "refPopper",
        ref: refPopper,
        visible: pickerVisible.value,
        effect: "light",
        pure: "",
        trigger: "click"
      }, _ctx.$attrs, {
        role: "dialog",
        teleported: "",
        transition: `${unref(nsDate).namespace.value}-zoom-in-top`,
        "popper-class": [`${unref(nsDate).namespace.value}-picker__popper`, _ctx.popperClass],
        "popper-options": unref(elPopperOptions),
        "fallback-placements": ["bottom", "top", "right", "left"],
        "gpu-acceleration": false,
        "stop-popper-mouse-event": false,
        "hide-after": 0,
        persistent: "",
        onBeforeShow,
        onShow,
        onHide
      }), {
        default: withCtx(() => [
          !unref(isRangeInput) ? (openBlock(), createBlock(unref(ElInput), {
            key: 0,
            id: _ctx.id,
            ref_key: "inputRef",
            ref: inputRef,
            "container-role": "combobox",
            "model-value": unref(displayValue),
            name: _ctx.name,
            size: unref(pickerSize),
            disabled: unref(pickerDisabled),
            placeholder: _ctx.placeholder,
            class: normalizeClass([unref(nsDate).b("editor"), unref(nsDate).bm("editor", _ctx.type), _ctx.$attrs.class]),
            style: normalizeStyle(_ctx.$attrs.style),
            readonly: !_ctx.editable || _ctx.readonly || unref(isDatesPicker) || _ctx.type === "week",
            label: _ctx.label,
            tabindex: _ctx.tabindex,
            "validate-event": _ctx.validateEvent,
            onInput: onUserInput,
            onFocus: handleFocusInput,
            onBlur: handleBlurInput,
            onKeydown: handleKeydownInput,
            onChange: handleChange,
            onMousedown: onMouseDownInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstart: onTouchStartInput,
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, {
            prefix: withCtx(() => [
              unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(nsInput).e("icon")),
                onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
                onTouchstart: onTouchStartInput
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
            ]),
            suffix: withCtx(() => [
              showClose.value && _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(`${unref(nsInput).e("icon")} clear-icon`),
                onClick: withModifiers(onClearIconClick, ["stop"])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 1
          }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "validate-event", "onKeydown"])) : (openBlock(), createElementBlock("div", {
            key: 1,
            ref_key: "inputRef",
            ref: inputRef,
            class: normalizeClass([
              unref(nsDate).b("editor"),
              unref(nsDate).bm("editor", _ctx.type),
              unref(nsInput).e("wrapper"),
              unref(nsDate).is("disabled", unref(pickerDisabled)),
              unref(nsDate).is("active", pickerVisible.value),
              unref(nsRange).b("editor"),
              unref(pickerSize) ? unref(nsRange).bm("editor", unref(pickerSize)) : "",
              _ctx.$attrs.class
            ]),
            style: normalizeStyle(_ctx.$attrs.style),
            onClick: handleFocusInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstart: onTouchStartInput,
            onKeydown: handleKeydownInput
          }, [
            unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass([unref(nsInput).e("icon"), unref(nsRange).e("icon")]),
              onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
              onTouchstart: onTouchStartInput
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
            createElementVNode("input", {
              id: _ctx.id && _ctx.id[0],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[0],
              placeholder: _ctx.startPlaceholder,
              value: unref(displayValue) && unref(displayValue)[0],
              disabled: unref(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: normalizeClass(unref(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onInput: handleStartInput,
              onChange: handleStartChange,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput
            }, null, 42, _hoisted_1$B),
            renderSlot(_ctx.$slots, "range-separator", {}, () => [
              createElementVNode("span", {
                class: normalizeClass(unref(nsRange).b("separator"))
              }, toDisplayString(_ctx.rangeSeparator), 3)
            ]),
            createElementVNode("input", {
              id: _ctx.id && _ctx.id[1],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[1],
              placeholder: _ctx.endPlaceholder,
              value: unref(displayValue) && unref(displayValue)[1],
              disabled: unref(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: normalizeClass(unref(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput,
              onInput: handleEndInput,
              onChange: handleEndChange
            }, null, 42, _hoisted_2$r),
            _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([
                unref(nsInput).e("icon"),
                unref(nsRange).e("close-icon"),
                {
                  [unref(nsRange).e("close-icon--hidden")]: !showClose.value
                }
              ]),
              onClick: onClearIconClick
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 38))
        ]),
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            visible: pickerVisible.value,
            actualVisible: pickerActualVisible.value,
            parsedValue: unref(parsedValue2),
            format: _ctx.format,
            unlinkPanels: _ctx.unlinkPanels,
            type: _ctx.type,
            defaultValue: _ctx.defaultValue,
            onPick,
            onSelectRange: setSelectionRange,
            onSetPickerOption,
            onCalendarChange,
            onPanelChange,
            onKeydown: onKeydownPopperContent,
            onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["stop"]))
          })
        ]),
        _: 3
      }, 16, ["visible", "transition", "popper-class", "popper-options"]);
    };
  }
});
var CommonPicker = /* @__PURE__ */ _export_sfc$1(_sfc_main$Z, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType(Object)
  }
});
const useTimePanel = ({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds
}) => {
  const getAvailableTime = (date4, role, first, compareDate) => {
    const availableTimeGetters = {
      hour: getAvailableHours,
      minute: getAvailableMinutes,
      second: getAvailableSeconds
    };
    let result = date4;
    ["hour", "minute", "second"].forEach((type4) => {
      if (availableTimeGetters[type4]) {
        let availableTimeSlots;
        const method4 = availableTimeGetters[type4];
        switch (type4) {
          case "minute": {
            availableTimeSlots = method4(result.hour(), role, compareDate);
            break;
          }
          case "second": {
            availableTimeSlots = method4(result.hour(), result.minute(), role, compareDate);
            break;
          }
          default: {
            availableTimeSlots = method4(role, compareDate);
            break;
          }
        }
        if ((availableTimeSlots == null ? void 0 : availableTimeSlots.length) && !availableTimeSlots.includes(result[type4]())) {
          const pos = first ? 0 : availableTimeSlots.length - 1;
          result = result[type4](availableTimeSlots[pos]);
        }
      }
    });
    return result;
  };
  const timePickerOptions = {};
  const onSetOption = ([key, val]) => {
    timePickerOptions[key] = val;
  };
  return {
    timePickerOptions,
    getAvailableTime,
    onSetOption
  };
};
const makeAvailableArr = (disabledList) => {
  const trueOrNumber = (isDisabled, index2) => isDisabled || index2;
  const getNumber = (predicate) => predicate !== true;
  return disabledList.map(trueOrNumber).filter(getNumber);
};
const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare) => {
    return makeList(24, disabledHours && (() => disabledHours == null ? void 0 : disabledHours(role, compare)));
  };
  const getMinutesList = (hour, role, compare) => {
    return makeList(60, disabledMinutes && (() => disabledMinutes == null ? void 0 : disabledMinutes(hour, role, compare)));
  };
  const getSecondsList = (hour, minute, role, compare) => {
    return makeList(60, disabledSeconds && (() => disabledSeconds == null ? void 0 : disabledSeconds(hour, minute, role, compare)));
  };
  return {
    getHoursList,
    getMinutesList,
    getSecondsList
  };
};
const buildAvailableTimeSlotGetter = (disabledHours, disabledMinutes, disabledSeconds) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(disabledHours, disabledMinutes, disabledSeconds);
  const getAvailableHours = (role, compare) => {
    return makeAvailableArr(getHoursList(role, compare));
  };
  const getAvailableMinutes = (hour, role, compare) => {
    return makeAvailableArr(getMinutesList(hour, role, compare));
  };
  const getAvailableSeconds = (hour, minute, role, compare) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare));
  };
  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds
  };
};
const useOldValue = (props) => {
  const oldValue = ref(props.parsedValue);
  watch(() => props.visible, (val) => {
    if (!val) {
      oldValue.value = props.parsedValue;
    }
  });
  return oldValue;
};
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e2) => startClick = e2);
  document.addEventListener("mouseup", (e2) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e2, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const RepeatClick = {
  beforeMount(el, binding) {
    let interval = null;
    let isHandlerCalled = false;
    const handler = () => binding.value && binding.value();
    const clear = () => {
      clearInterval(interval);
      interval = null;
      if (!isHandlerCalled) {
        handler();
      }
      isHandlerCalled = false;
    };
    el.addEventListener("mousedown", (e2) => {
      if (e2.button !== 0)
        return;
      document.addEventListener("mouseup", clear, { once: true });
      clearInterval(interval);
      interval = setInterval(() => {
        isHandlerCalled = true;
        handler();
      }, 100);
    });
  }
};
var v = false, o$1, f, s, u, d, N, l, p, m, w$1, D$1, x, E$1, M, F;
function a$1() {
  if (!v) {
    v = true;
    var e2 = navigator.userAgent, n2 = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e2), i2 = /(Mac OS X)|(Windows)|(Linux)/.exec(e2);
    if (x = /\b(iPhone|iP[ao]d)/.exec(e2), E$1 = /\b(iP[ao]d)/.exec(e2), w$1 = /Android/i.exec(e2), M = /FBAN\/\w+;/i.exec(e2), F = /Mobile/i.exec(e2), D$1 = !!/Win64/.exec(e2), n2) {
      o$1 = n2[1] ? parseFloat(n2[1]) : n2[5] ? parseFloat(n2[5]) : NaN, o$1 && document && document.documentMode && (o$1 = document.documentMode);
      var r2 = /(?:Trident\/(\d+.\d+))/.exec(e2);
      N = r2 ? parseFloat(r2[1]) + 4 : o$1, f = n2[2] ? parseFloat(n2[2]) : NaN, s = n2[3] ? parseFloat(n2[3]) : NaN, u = n2[4] ? parseFloat(n2[4]) : NaN, u ? (n2 = /(?:Chrome\/(\d+\.\d+))/.exec(e2), d = n2 && n2[1] ? parseFloat(n2[1]) : NaN) : d = NaN;
    } else
      o$1 = f = s = d = u = NaN;
    if (i2) {
      if (i2[1]) {
        var t2 = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e2);
        l = t2 ? parseFloat(t2[1].replace("_", ".")) : true;
      } else
        l = false;
      p = !!i2[2], m = !!i2[3];
    } else
      l = p = m = false;
  }
}
var _$1 = { ie: function() {
  return a$1() || o$1;
}, ieCompatibilityMode: function() {
  return a$1() || N > o$1;
}, ie64: function() {
  return _$1.ie() && D$1;
}, firefox: function() {
  return a$1() || f;
}, opera: function() {
  return a$1() || s;
}, webkit: function() {
  return a$1() || u;
}, safari: function() {
  return _$1.webkit();
}, chrome: function() {
  return a$1() || d;
}, windows: function() {
  return a$1() || p;
}, osx: function() {
  return a$1() || l;
}, linux: function() {
  return a$1() || m;
}, iphone: function() {
  return a$1() || x;
}, mobile: function() {
  return a$1() || x || E$1 || w$1 || F;
}, nativeApp: function() {
  return a$1() || M;
}, android: function() {
  return a$1() || w$1;
}, ipad: function() {
  return a$1() || E$1;
} }, A = _$1;
var c = !!(typeof window < "u" && window.document && window.document.createElement), U = { canUseDOM: c, canUseWorkers: typeof Worker < "u", canUseEventListeners: c && !!(window.addEventListener || window.attachEvent), canUseViewport: c && !!window.screen, isInWorker: !c }, h = U;
var X;
h.canUseDOM && (X = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function S$1(e2, n2) {
  if (!h.canUseDOM || n2 && !("addEventListener" in document))
    return false;
  var i2 = "on" + e2, r2 = i2 in document;
  if (!r2) {
    var t2 = document.createElement("div");
    t2.setAttribute(i2, "return;"), r2 = typeof t2[i2] == "function";
  }
  return !r2 && X && e2 === "wheel" && (r2 = document.implementation.hasFeature("Events.wheel", "3.0")), r2;
}
var b = S$1;
var O$1 = 10, I = 40, P$1 = 800;
function T$1(e2) {
  var n2 = 0, i2 = 0, r2 = 0, t2 = 0;
  return "detail" in e2 && (i2 = e2.detail), "wheelDelta" in e2 && (i2 = -e2.wheelDelta / 120), "wheelDeltaY" in e2 && (i2 = -e2.wheelDeltaY / 120), "wheelDeltaX" in e2 && (n2 = -e2.wheelDeltaX / 120), "axis" in e2 && e2.axis === e2.HORIZONTAL_AXIS && (n2 = i2, i2 = 0), r2 = n2 * O$1, t2 = i2 * O$1, "deltaY" in e2 && (t2 = e2.deltaY), "deltaX" in e2 && (r2 = e2.deltaX), (r2 || t2) && e2.deltaMode && (e2.deltaMode == 1 ? (r2 *= I, t2 *= I) : (r2 *= P$1, t2 *= P$1)), r2 && !n2 && (n2 = r2 < 1 ? -1 : 1), t2 && !i2 && (i2 = t2 < 1 ? -1 : 1), { spinX: n2, spinY: i2, pixelX: r2, pixelY: t2 };
}
T$1.getEventType = function() {
  return A.firefox() ? "DOMMouseScroll" : b("wheel") ? "wheel" : "mousewheel";
};
var Y = T$1;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    const fn2 = function(event) {
      const normalized = Y(event);
      callback && Reflect.apply(callback, this, [event, normalized]);
    };
    element.addEventListener("wheel", fn2, { passive: true });
  }
};
const Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  }
};
const basicTimeSpinnerProps = buildProps({
  role: {
    type: String,
    required: true
  },
  spinnerDate: {
    type: definePropType(Object),
    required: true
  },
  showSeconds: {
    type: Boolean,
    default: true
  },
  arrowControl: Boolean,
  amPmMode: {
    type: definePropType(String),
    default: ""
  },
  ...disabledTimeListsProps
});
const _hoisted_1$A = ["onClick"];
const _hoisted_2$q = ["onMouseenter"];
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "basic-time-spinner",
  props: basicTimeSpinnerProps,
  emits: ["change", "select-range", "set-option"],
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("time");
    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    let isScrolling = false;
    const currentScrollbar = ref();
    const listHoursRef = ref();
    const listMinutesRef = ref();
    const listSecondsRef = ref();
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = computed$1(() => {
      return props.showSeconds ? timeUnits : timeUnits.slice(0, 2);
    });
    const timePartials = computed$1(() => {
      const { spinnerDate } = props;
      const hours = spinnerDate.hour();
      const minutes = spinnerDate.minute();
      const seconds = spinnerDate.second();
      return { hours, minutes, seconds };
    });
    const timeList = computed$1(() => {
      const { hours, minutes } = unref(timePartials);
      return {
        hours: getHoursList(props.role),
        minutes: getMinutesList(hours, props.role),
        seconds: getSecondsList(hours, minutes, props.role)
      };
    });
    const arrowControlTimeList = computed$1(() => {
      const { hours, minutes, seconds } = unref(timePartials);
      return {
        hours: buildTimeList(hours, 23),
        minutes: buildTimeList(minutes, 59),
        seconds: buildTimeList(seconds, 59)
      };
    });
    const debouncedResetScroll = debounce((type4) => {
      isScrolling = false;
      adjustCurrentSpinner(type4);
    }, 200);
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type4) => {
      let range3;
      switch (type4) {
        case "hours":
          range3 = [0, 2];
          break;
        case "minutes":
          range3 = [3, 5];
          break;
        case "seconds":
          range3 = [6, 8];
          break;
      }
      const [left, right] = range3;
      emit("select-range", left, right);
      currentScrollbar.value = type4;
    };
    const adjustCurrentSpinner = (type4) => {
      adjustSpinner(type4, unref(timePartials)[type4]);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const getScrollbarElement = (el) => el.querySelector(`.${ns2.namespace.value}-scrollbar__wrap`);
    const adjustSpinner = (type4, value) => {
      if (props.arrowControl)
        return;
      const scrollbar = unref(listRefsMap[type4]);
      if (scrollbar && scrollbar.$el) {
        getScrollbarElement(scrollbar.$el).scrollTop = Math.max(0, value * typeItemHeight(type4));
      }
    };
    const typeItemHeight = (type4) => {
      const scrollbar = unref(listRefsMap[type4]);
      return (scrollbar == null ? void 0 : scrollbar.$el.querySelector("li").offsetHeight) || 0;
    };
    const onIncrement = () => {
      scrollDown(1);
    };
    const onDecrement = () => {
      scrollDown(-1);
    };
    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      const now2 = unref(timePartials)[label];
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      const next = findNextUnDisabled(label, now2, step, total);
      modifyDateField(label, next);
      adjustSpinner(label, next);
      nextTick(() => emitSelectRange(label));
    };
    const findNextUnDisabled = (type4, now2, step, total) => {
      let next = (now2 + step + total) % total;
      const list = unref(timeList)[type4];
      while (list[next] && next !== now2) {
        next = (next + step + total) % total;
      }
      return next;
    };
    const modifyDateField = (type4, value) => {
      const list = unref(timeList)[type4];
      const isDisabled = list[value];
      if (isDisabled)
        return;
      const { hours, minutes, seconds } = unref(timePartials);
      let changeTo;
      switch (type4) {
        case "hours":
          changeTo = props.spinnerDate.hour(value).minute(minutes).second(seconds);
          break;
        case "minutes":
          changeTo = props.spinnerDate.hour(hours).minute(value).second(seconds);
          break;
        case "seconds":
          changeTo = props.spinnerDate.hour(hours).minute(minutes).second(value);
          break;
      }
      emit("change", changeTo);
    };
    const handleClick = (type4, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type4, value);
        emitSelectRange(type4);
        adjustSpinner(type4, value);
      }
    };
    const handleScroll = (type4) => {
      isScrolling = true;
      debouncedResetScroll(type4);
      const value = Math.min(Math.round((getScrollbarElement(unref(listRefsMap[type4]).$el).scrollTop - (scrollBarHeight(type4) * 0.5 - 10) / typeItemHeight(type4) + 3) / typeItemHeight(type4)), type4 === "hours" ? 23 : 59);
      modifyDateField(type4, value);
    };
    const scrollBarHeight = (type4) => {
      return unref(listRefsMap[type4]).$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFunction = (type4) => {
        const scrollbar = unref(listRefsMap[type4]);
        if (scrollbar && scrollbar.$el) {
          getScrollbarElement(scrollbar.$el).onscroll = () => {
            handleScroll(type4);
          };
        }
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const setRef = (scrollbar, type4) => {
      listRefsMap[type4].value = scrollbar;
    };
    emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    watch(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns2).b("spinner"), { "has-seconds": _ctx.showSeconds }])
      }, [
        !_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createBlock(unref(ElScrollbar), {
            key: item,
            ref_for: true,
            ref: (scollbar) => setRef(scollbar, item),
            class: normalizeClass(unref(ns2).be("spinner", "wrapper")),
            "wrap-style": "max-height: inherit;",
            "view-class": unref(ns2).be("spinner", "list"),
            noresize: "",
            tag: "ul",
            onMouseenter: ($event) => emitSelectRange(item),
            onMousemove: ($event) => adjustCurrentSpinner(item)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(timeList)[item], (disabled, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([
                    unref(ns2).be("spinner", "item"),
                    unref(ns2).is("active", key === unref(timePartials)[item]),
                    unref(ns2).is("disabled", disabled)
                  ]),
                  onClick: ($event) => handleClick(item, { value: key, disabled })
                }, [
                  item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + toDisplayString(getAmPmFlag(key)), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(("0" + key).slice(-2)), 1)
                  ], 64))
                ], 10, _hoisted_1$A);
              }), 128))
            ]),
            _: 2
          }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
        }), 128)) : createCommentVNode("v-if", true),
        _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item,
            class: normalizeClass([unref(ns2).be("spinner", "wrapper"), unref(ns2).is("arrow")]),
            onMouseenter: ($event) => emitSelectRange(item)
          }, [
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-up", unref(ns2).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_up_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(RepeatClick), onDecrement]
            ]),
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-down", unref(ns2).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_down_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(RepeatClick), onIncrement]
            ]),
            createElementVNode("ul", {
              class: normalizeClass(unref(ns2).be("spinner", "list"))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(arrowControlTimeList)[item], (time, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([
                    unref(ns2).be("spinner", "item"),
                    unref(ns2).is("active", time === unref(timePartials)[item]),
                    unref(ns2).is("disabled", unref(timeList)[item][time])
                  ])
                }, [
                  typeof time === "number" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + toDisplayString(getAmPmFlag(time)), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(("0" + time).slice(-2)), 1)
                    ], 64))
                  ], 64)) : createCommentVNode("v-if", true)
                ], 2);
              }), 128))
            ], 2)
          ], 42, _hoisted_2$q);
        }), 128)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var TimeSpinner = /* @__PURE__ */ _export_sfc$1(_sfc_main$Y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "panel-time-pick",
  props: panelTimePickerProps,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds);
    const ns2 = useNamespace("time");
    const { t: t2, lang } = useLocale();
    const selectionRange = ref([0, 2]);
    const oldValue = useOldValue(props);
    const transitionName = computed$1(() => {
      return isUndefined(props.actualVisible) ? `${ns2.namespace.value}-zoom-in-top` : "";
    });
    const showSeconds = computed$1(() => {
      return props.format.includes("ss");
    });
    const amPmMode = computed$1(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const isValidValue = (_date) => {
      const parsedDate = dayjs(_date).locale(lang.value);
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate.isSame(result);
    };
    const handleCancel = () => {
      emit("pick", oldValue.value, false);
    };
    const handleConfirm = (visible = false, first = false) => {
      if (first)
        return;
      emit("pick", props.parsedValue, visible);
    };
    const handleChange = (_date) => {
      if (!props.visible) {
        return;
      }
      const result = getRangeAvailableTime(_date).millisecond(0);
      emit("pick", result, true);
    };
    const setSelectionRange = (start, end) => {
      emit("select-range", start, end);
      selectionRange.value = [start, end];
    };
    const changeSelectionRange = (step) => {
      const list = [0, 3].concat(showSeconds.value ? [6] : []);
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index2 = list.indexOf(selectionRange.value[0]);
      const next = (index2 + step + list.length) % list.length;
      timePickerOptions["start_emitSelectRange"](mapping[next]);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      const { left, right, up, down } = EVENT_CODE;
      if ([left, right].includes(code)) {
        const step = code === left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if ([up, down].includes(code)) {
        const step = code === up ? -1 : 1;
        timePickerOptions["start_scrollDown"](step);
        event.preventDefault();
        return;
      }
    };
    const { timePickerOptions, onSetOption, getAvailableTime } = useTimePanel({
      getAvailableHours,
      getAvailableMinutes,
      getAvailableSeconds
    });
    const getRangeAvailableTime = (date4) => {
      return getAvailableTime(date4, props.datetimeRole || "", true);
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      return dayjs(value, props.format).locale(lang.value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      return value.format(props.format);
    };
    const getDefaultValue2 = () => {
      return dayjs(defaultValue).locale(lang.value);
    };
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
    emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
    emit("set-picker-option", ["getDefaultValue", getDefaultValue2]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: unref(transitionName) }, {
        default: withCtx(() => [
          _ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns2).b("panel"))
          }, [
            createElementVNode("div", {
              class: normalizeClass([unref(ns2).be("panel", "content"), { "has-seconds": unref(showSeconds) }])
            }, [
              createVNode(TimeSpinner, {
                ref: "spinner",
                role: _ctx.datetimeRole || "start",
                "arrow-control": unref(arrowControl),
                "show-seconds": unref(showSeconds),
                "am-pm-mode": unref(amPmMode),
                "spinner-date": _ctx.parsedValue,
                "disabled-hours": unref(disabledHours),
                "disabled-minutes": unref(disabledMinutes),
                "disabled-seconds": unref(disabledSeconds),
                onChange: handleChange,
                onSetOption: unref(onSetOption),
                onSelectRange: setSelectionRange
              }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
            ], 2),
            createElementVNode("div", {
              class: normalizeClass(unref(ns2).be("panel", "footer"))
            }, [
              createElementVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns2).be("panel", "btn"), "cancel"]),
                onClick: handleCancel
              }, toDisplayString(unref(t2)("el.datepicker.cancel")), 3),
              createElementVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns2).be("panel", "btn"), "confirm"]),
                onClick: _cache[0] || (_cache[0] = ($event) => handleConfirm())
              }, toDisplayString(unref(t2)("el.datepicker.confirm")), 3)
            ], 2)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var TimePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$X, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);
const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});
const __default__$z = {
  name: "ElCard"
};
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  ...__default__$z,
  props: cardProps,
  setup(__props) {
    const ns2 = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns2).b(), unref(ns2).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns2).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(ns2).e("body")),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc$1(_sfc_main$W, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);
const ElCard = withInstall(Card);
const useCheckboxGroupProps = {
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: void 0
  },
  max: {
    type: Number,
    default: void 0
  },
  size: useSizeProp,
  id: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  fill: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: void 0
  },
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: () => void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const useCheckboxGroup = () => {
  const { form: elForm2, formItem: elFormItem2 } = useFormItem();
  const checkboxGroup = inject("CheckboxGroup", {});
  const isGroup = computed$1(() => checkboxGroup && (checkboxGroup == null ? void 0 : checkboxGroup.name) === "ElCheckboxGroup");
  const elFormItemSize = computed$1(() => {
    return elFormItem2 == null ? void 0 : elFormItem2.size;
  });
  return {
    isGroup,
    checkboxGroup,
    elForm: elForm2,
    elFormItemSize,
    elFormItem: elFormItem2
  };
};
const useCheckboxGroupId = (props, { elFormItem: elFormItem2 }) => {
  const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem2
  });
  return {
    isLabeledByFormItem,
    groupId
  };
};
const useModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const { isGroup, checkboxGroup, elFormItem: elFormItem2 } = useCheckboxGroup();
  const isLimitExceeded = ref(false);
  const model = computed$1({
    get() {
      var _a2, _b;
      return isGroup.value ? (_a2 = checkboxGroup.modelValue) == null ? void 0 : _a2.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a2;
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value = checkboxGroup.max !== void 0 && val.length > checkboxGroup.max.value;
        isLimitExceeded.value === false && ((_a2 = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _a2.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded,
    elFormItem: elFormItem2
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const focus = ref(false);
  const size = useSize(checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize, { prop: true });
  const isChecked = computed$1(() => {
    const value = model.value;
    if (toTypeString(value) === "[object Boolean]") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(toRaw$1).includes(props.label);
    } else if (value !== null && value !== void 0) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxSize = useSize(computed$1(() => {
    var _a2;
    return isGroup.value ? (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize) == null ? void 0 : _a2.value : void 0;
  }));
  const hasOwnLabel = computed$1(() => {
    return !!(slots.default || props.label);
  });
  return {
    isChecked,
    focus,
    size,
    checkboxSize,
    hasOwnLabel
  };
};
const useDisabled = (props, {
  model,
  isChecked
}) => {
  const { elForm: elForm2, isGroup, checkboxGroup } = useCheckboxGroup();
  const isLimitDisabled = computed$1(() => {
    var _a2, _b;
    const max = (_a2 = checkboxGroup.max) == null ? void 0 : _a2.value;
    const min = (_b = checkboxGroup.min) == null ? void 0 : _b.value;
    return !!(max || min) && model.value.length >= max && !isChecked.value || model.value.length <= min && isChecked.value;
  });
  const isDisabled = computed$1(() => {
    var _a2, _b;
    const disabled = props.disabled || (elForm2 == null ? void 0 : elForm2.disabled);
    return (_b = isGroup.value ? ((_a2 = checkboxGroup.disabled) == null ? void 0 : _a2.value) || disabled || isLimitDisabled.value : disabled) != null ? _b : false;
  });
  return {
    isDisabled,
    isLimitDisabled
  };
};
const setStoreValue = (props, { model }) => {
  function addToStore() {
    if (Array.isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  }
  props.checked && addToStore();
};
const useEvent$1 = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const { elFormItem: elFormItem2, checkboxGroup } = useCheckboxGroup();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a2, _b;
    return value === props.trueLabel || value === true ? (_a2 = props.trueLabel) != null ? _a2 : true : (_b = props.falseLabel) != null ? _b : false;
  }
  function emitChangeEvent(checked, e2) {
    emit("change", getLabeledValue(checked), e2);
  }
  function handleChange(e2) {
    if (isLimitExceeded.value)
      return;
    const target = e2.target;
    emit("change", getLabeledValue(target.checked), e2);
  }
  async function onClickRoot(e2) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      model.value = getLabeledValue([false, props.falseLabel].includes(model.value));
      await nextTick();
      emitChangeEvent(model.value, e2);
    }
  }
  const validateEvent = computed$1(() => {
    var _a2;
    return ((_a2 = checkboxGroup.validateEvent) == null ? void 0 : _a2.value) || props.validateEvent;
  });
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      elFormItem2 == null ? void 0 : elFormItem2.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray(val),
  change: (val) => isArray(val)
};
const useCheckbox = (props, slots) => {
  const { model, isGroup, isLimitExceeded, elFormItem: elFormItem2 } = useModel(props);
  const { focus, size, isChecked, checkboxSize, hasOwnLabel } = useCheckboxStatus(props, slots, {
    model
  });
  const { isDisabled } = useDisabled(props, { model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem2,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useEvent$1(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  setStoreValue(props, { model });
  return {
    elFormItem: elFormItem2,
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isGroup,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot,
    focus,
    size
  };
};
const _hoisted_1$z = ["tabindex", "role", "aria-checked"];
const _hoisted_2$p = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_3$f = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
const __default__$y = {
  name: "ElCheckbox"
};
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  ...__default__$y,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      checkboxSize,
      hasOwnLabel,
      model,
      handleChange,
      onClickRoot,
      focus
    } = useCheckbox(props, slots);
    const ns2 = useNamespace("checkbox");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).m(unref(checkboxSize)),
          unref(ns2).is("disabled", unref(isDisabled)),
          unref(ns2).is("bordered", _ctx.border),
          unref(ns2).is("checked", unref(isChecked))
        ]),
        "aria-controls": _ctx.indeterminate ? _ctx.controls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass([
              unref(ns2).e("input"),
              unref(ns2).is("disabled", unref(isDisabled)),
              unref(ns2).is("checked", unref(isChecked)),
              unref(ns2).is("indeterminate", _ctx.indeterminate),
              unref(ns2).is("focus", unref(focus))
            ]),
            tabindex: _ctx.indeterminate ? 0 : void 0,
            role: _ctx.indeterminate ? "checkbox" : void 0,
            "aria-checked": _ctx.indeterminate ? "mixed" : void 0
          }, [
            _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns2).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              disabled: unref(isDisabled),
              "true-value": _ctx.trueLabel,
              "false-value": _ctx.falseLabel,
              onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[2] || (_cache[2] = ($event) => focus.value = true),
              onBlur: _cache[3] || (_cache[3] = ($event) => focus.value = false)
            }, null, 42, _hoisted_2$p)), [
              [vModelCheckbox, unref(model)]
            ]) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              id: unref(inputId),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
              class: normalizeClass(unref(ns2).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              disabled: unref(isDisabled),
              value: _ctx.label,
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
              onFocus: _cache[6] || (_cache[6] = ($event) => focus.value = true),
              onBlur: _cache[7] || (_cache[7] = ($event) => focus.value = false)
            }, null, 42, _hoisted_3$f)), [
              [vModelCheckbox, unref(model)]
            ]),
            createElementVNode("span", {
              class: normalizeClass(unref(ns2).e("inner"))
            }, null, 2)
          ], 10, _hoisted_1$z),
          unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(ns2).e("label"))
          }, [
            renderSlot(_ctx.$slots, "default"),
            !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ], 64)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$V, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const _hoisted_1$y = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$o = ["name", "tabindex", "disabled", "value"];
const __default__$x = {
  name: "ElCheckboxButton"
};
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  ...__default__$x,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { focus, isChecked, isDisabled, size, model, handleChange } = useCheckbox(props, slots);
    const { checkboxGroup } = useCheckboxGroup();
    const ns2 = useNamespace("checkbox");
    const activeStyle = computed$1(() => {
      var _a2, _b, _c, _d;
      const fillValue = (_b = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a2.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b("button"),
          unref(ns2).bm("button", unref(size)),
          unref(ns2).is("disabled", unref(isDisabled)),
          unref(ns2).is("checked", unref(isChecked)),
          unref(ns2).is("focus", unref(focus))
        ])
      }, [
        _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": _ctx.trueLabel,
          "false-value": _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => focus.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => focus.value = false)
        }, null, 42, _hoisted_1$y)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: _ctx.label,
          onChange: _cache[5] || (_cache[5] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[6] || (_cache[6] = ($event) => focus.value = true),
          onBlur: _cache[7] || (_cache[7] = ($event) => focus.value = false)
        }, null, 42, _hoisted_2$o)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns2).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$U, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const __default__$w = {
  name: "ElCheckboxGroup"
};
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  ...__default__$w,
  props: useCheckboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { elFormItem: elFormItem2 } = useCheckboxGroup();
    const { groupId, isLabeledByFormItem } = useCheckboxGroupId(props, {
      elFormItem: elFormItem2
    });
    const checkboxGroupSize = useSize();
    const ns2 = useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        emit("change", value);
      });
    };
    const modelValue = computed$1({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      ...toRefs(props),
      modelValue,
      checkboxGroupSize,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        elFormItem2 == null ? void 0 : elFormItem2.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns2).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a2 = unref(elFormItem2)) == null ? void 0 : _a2.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$T, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
const ElCheckboxGroup$1 = withNoopInstall(CheckboxGroup);
const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed$1(() => !!radioGroup);
  const modelValue = computed$1({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const size = useSize(computed$1(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useDisabled$1(computed$1(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed$1(() => {
    return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
  });
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue
  };
};
const _hoisted_1$x = ["value", "name", "disabled"];
const __default__$v = {
  name: "ElRadio"
};
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  ...__default__$v,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).is("disabled", unref(disabled)),
          unref(ns2).is("focus", unref(focus)),
          unref(ns2).is("bordered", _ctx.border),
          unref(ns2).is("checked", unref(modelValue) === _ctx.label),
          unref(ns2).m(unref(size))
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([
            unref(ns2).e("input"),
            unref(ns2).is("disabled", unref(disabled)),
            unref(ns2).is("checked", unref(modelValue) === _ctx.label)
          ])
        }, [
          withDirectives(createElementVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
            class: normalizeClass(unref(ns2).e("original")),
            value: _ctx.label,
            name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
            disabled: unref(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange
          }, null, 42, _hoisted_1$x), [
            [vModelRadio, unref(modelValue)]
          ]),
          createElementVNode("span", {
            class: normalizeClass(unref(ns2).e("inner"))
          }, null, 2)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(ns2).e("label")),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc$1(_sfc_main$S, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});
const _hoisted_1$w = ["value", "name", "disabled"];
const __default__$u = {
  name: "ElRadioButton"
};
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  ...__default__$u,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup } = useRadio(props);
    const activeStyle = computed$1(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns2).b("button"),
          unref(ns2).is("active", unref(modelValue) === _ctx.label),
          unref(ns2).is("disabled", unref(disabled)),
          unref(ns2).is("focus", unref(focus)),
          unref(ns2).bm("button", unref(size))
        ])
      }, [
        withDirectives(createElementVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
          class: normalizeClass(unref(ns2).be("button", "original-radio")),
          value: _ctx.label,
          type: "radio",
          name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
          disabled: unref(disabled),
          onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false)
        }, null, 42, _hoisted_1$w), [
          [vModelRadio, unref(modelValue)]
        ]),
        createElementVNode("span", {
          class: normalizeClass(unref(ns2).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === _ctx.label ? unref(activeStyle) : {}),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$R, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const radioGroupEmits = radioEmits;
const _hoisted_1$v = ["id", "aria-label", "aria-labelledby"];
const __default__$t = {
  name: "ElRadioGroup"
};
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  ...__default__$t,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns2 = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit("change", value));
    };
    onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    const name = computed$1(() => {
      return props.name || radioId.value;
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns2).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$v);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$Q, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const ElRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup
});
const ElRadioGroup = withNoopInstall(RadioGroup);
withNoopInstall(RadioButton);
var NodeContent = defineComponent({
  name: "NodeContent",
  setup() {
    const ns2 = useNamespace("cascader-node");
    return {
      ns: ns2
    };
  },
  render() {
    const { ns: ns2 } = this;
    const { node, panel } = this.$parent;
    const { data, label } = node;
    const { renderLabelFn } = panel;
    return h$1("span", { class: ns2.e("label") }, renderLabelFn ? renderLabelFn({ node, data }) : label);
  }
});
const CASCADER_PANEL_INJECTION_KEY = Symbol();
const _sfc_main$P = defineComponent({
  name: "ElCascaderNode",
  components: {
    ElCheckbox,
    ElRadio,
    NodeContent,
    ElIcon,
    Check: check_default,
    Loading: loading_default,
    ArrowRight: arrow_right_default
  },
  props: {
    node: {
      type: Object,
      required: true
    },
    menuId: String
  },
  emits: ["expand"],
  setup(props, { emit }) {
    const panel = inject(CASCADER_PANEL_INJECTION_KEY);
    const ns2 = useNamespace("cascader-node");
    const isHoverMenu = computed$1(() => panel.isHoverMenu);
    const multiple = computed$1(() => panel.config.multiple);
    const checkStrictly = computed$1(() => panel.config.checkStrictly);
    const checkedNodeId = computed$1(() => {
      var _a2;
      return (_a2 = panel.checkedNodes[0]) == null ? void 0 : _a2.uid;
    });
    const isDisabled = computed$1(() => props.node.isDisabled);
    const isLeaf2 = computed$1(() => props.node.isLeaf);
    const expandable = computed$1(() => checkStrictly.value && !isLeaf2.value || !isDisabled.value);
    const inExpandingPath = computed$1(() => isInPath(panel.expandingNode));
    const inCheckedPath = computed$1(() => checkStrictly.value && panel.checkedNodes.some(isInPath));
    const isInPath = (node) => {
      var _a2;
      const { level, uid: uid2 } = props.node;
      return ((_a2 = node == null ? void 0 : node.pathNodes[level - 1]) == null ? void 0 : _a2.uid) === uid2;
    };
    const doExpand = () => {
      if (inExpandingPath.value)
        return;
      panel.expandNode(props.node);
    };
    const doCheck = (checked) => {
      const { node } = props;
      if (checked === node.checked)
        return;
      panel.handleCheckChange(node, checked);
    };
    const doLoad = () => {
      panel.lazyLoad(props.node, () => {
        if (!isLeaf2.value)
          doExpand();
      });
    };
    const handleHoverExpand = (e2) => {
      if (!isHoverMenu.value)
        return;
      handleExpand();
      !isLeaf2.value && emit("expand", e2);
    };
    const handleExpand = () => {
      const { node } = props;
      if (!expandable.value || node.loading)
        return;
      node.loaded ? doExpand() : doLoad();
    };
    const handleClick = () => {
      if (isHoverMenu.value && !isLeaf2.value)
        return;
      if (isLeaf2.value && !isDisabled.value && !checkStrictly.value && !multiple.value) {
        handleCheck(true);
      } else {
        handleExpand();
      }
    };
    const handleSelectCheck = (checked) => {
      if (checkStrictly.value) {
        doCheck(checked);
        if (props.node.loaded) {
          doExpand();
        }
      } else {
        handleCheck(checked);
      }
    };
    const handleCheck = (checked) => {
      if (!props.node.loaded) {
        doLoad();
      } else {
        doCheck(checked);
        !checkStrictly.value && doExpand();
      }
    };
    return {
      panel,
      isHoverMenu,
      multiple,
      checkStrictly,
      checkedNodeId,
      isDisabled,
      isLeaf: isLeaf2,
      expandable,
      inExpandingPath,
      inCheckedPath,
      ns: ns2,
      handleHoverExpand,
      handleExpand,
      handleClick,
      handleCheck,
      handleSelectCheck
    };
  }
});
const _hoisted_1$u = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"];
const _hoisted_2$n = /* @__PURE__ */ createElementVNode("span", null, null, -1);
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_check = resolveComponent("check");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_node_content = resolveComponent("node-content");
  const _component_loading = resolveComponent("loading");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("li", {
    id: `${_ctx.menuId}-${_ctx.node.uid}`,
    role: "menuitem",
    "aria-haspopup": !_ctx.isLeaf,
    "aria-owns": _ctx.isLeaf ? null : _ctx.menuId,
    "aria-expanded": _ctx.inExpandingPath,
    tabindex: _ctx.expandable ? -1 : void 0,
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.is("selectable", _ctx.checkStrictly),
      _ctx.ns.is("active", _ctx.node.checked),
      _ctx.ns.is("disabled", !_ctx.expandable),
      _ctx.inExpandingPath && "in-active-path",
      _ctx.inCheckedPath && "in-checked-path"
    ]),
    onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createCommentVNode(" prefix "),
    _ctx.multiple ? (openBlock(), createBlock(_component_el_checkbox, {
      key: 0,
      "model-value": _ctx.node.checked,
      indeterminate: _ctx.node.indeterminate,
      disabled: _ctx.isDisabled,
      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["stop"])),
      "onUpdate:modelValue": _ctx.handleSelectCheck
    }, null, 8, ["model-value", "indeterminate", "disabled", "onUpdate:modelValue"])) : _ctx.checkStrictly ? (openBlock(), createBlock(_component_el_radio, {
      key: 1,
      "model-value": _ctx.checkedNodeId,
      label: _ctx.node.uid,
      disabled: _ctx.isDisabled,
      "onUpdate:modelValue": _ctx.handleSelectCheck,
      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["stop"]))
    }, {
      default: withCtx(() => [
        createCommentVNode("\n        Add an empty element to avoid render label,\n        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485\n      "),
        _hoisted_2$n
      ]),
      _: 1
    }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"])) : _ctx.isLeaf && _ctx.node.checked ? (openBlock(), createBlock(_component_el_icon, {
      key: 2,
      class: normalizeClass(_ctx.ns.e("prefix"))
    }, {
      default: withCtx(() => [
        createVNode(_component_check)
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("v-if", true),
    createCommentVNode(" content "),
    createVNode(_component_node_content),
    createCommentVNode(" postfix "),
    !_ctx.isLeaf ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      _ctx.node.loading ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: normalizeClass([_ctx.ns.is("loading"), _ctx.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(_component_loading)
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createBlock(_component_el_icon, {
        key: 1,
        class: normalizeClass(["arrow-right", _ctx.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(_component_arrow_right)
        ]),
        _: 1
      }, 8, ["class"]))
    ], 64)) : createCommentVNode("v-if", true)
  ], 42, _hoisted_1$u);
}
var ElCascaderNode = /* @__PURE__ */ _export_sfc$1(_sfc_main$P, [["render", _sfc_render$b], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);
const _sfc_main$O = defineComponent({
  name: "ElCascaderMenu",
  components: {
    Loading: loading_default,
    ElIcon,
    ElScrollbar,
    ElCascaderNode
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const ns2 = useNamespace("cascader-menu");
    const { t: t2 } = useLocale();
    const id = generateId();
    let activeNode = null;
    let hoverTimer = null;
    const panel = inject(CASCADER_PANEL_INJECTION_KEY);
    const hoverZone = ref(null);
    const isEmpty2 = computed$1(() => !props.nodes.length);
    const isLoading = computed$1(() => !panel.initialLoaded);
    const menuId = computed$1(() => `cascader-menu-${id}-${props.index}`);
    const handleExpand = (e2) => {
      activeNode = e2.target;
    };
    const handleMouseMove = (e2) => {
      if (!panel.isHoverMenu || !activeNode || !hoverZone.value)
        return;
      if (activeNode.contains(e2.target)) {
        clearHoverTimer();
        const el = instance.vnode.el;
        const { left } = el.getBoundingClientRect();
        const { offsetWidth, offsetHeight } = el;
        const startX = e2.clientX - left;
        const top = activeNode.offsetTop;
        const bottom = top + activeNode.offsetHeight;
        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `;
      } else if (!hoverTimer) {
        hoverTimer = window.setTimeout(clearHoverZone, panel.config.hoverThreshold);
      }
    };
    const clearHoverTimer = () => {
      if (!hoverTimer)
        return;
      clearTimeout(hoverTimer);
      hoverTimer = null;
    };
    const clearHoverZone = () => {
      if (!hoverZone.value)
        return;
      hoverZone.value.innerHTML = "";
      clearHoverTimer();
    };
    return {
      ns: ns2,
      panel,
      hoverZone,
      isEmpty: isEmpty2,
      isLoading,
      menuId,
      t: t2,
      handleExpand,
      handleMouseMove,
      clearHoverZone
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader_node = resolveComponent("el-cascader-node");
  const _component_loading = resolveComponent("loading");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createBlock(_component_el_scrollbar, {
    key: _ctx.menuId,
    tag: "ul",
    role: "menu",
    class: normalizeClass(_ctx.ns.b()),
    "wrap-class": _ctx.ns.e("wrap"),
    "view-class": [_ctx.ns.e("list"), _ctx.ns.is("empty", _ctx.isEmpty)],
    onMousemove: _ctx.handleMouseMove,
    onMouseleave: _ctx.clearHoverZone
  }, {
    default: withCtx(() => {
      var _a2;
      return [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.nodes, (node) => {
          return openBlock(), createBlock(_component_el_cascader_node, {
            key: node.uid,
            node,
            "menu-id": _ctx.menuId,
            onExpand: _ctx.handleExpand
          }, null, 8, ["node", "menu-id", "onExpand"]);
        }), 128)),
        _ctx.isLoading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.ns.e("empty-text"))
        }, [
          createVNode(_component_el_icon, {
            size: "14",
            class: normalizeClass(_ctx.ns.is("loading"))
          }, {
            default: withCtx(() => [
              createVNode(_component_loading)
            ]),
            _: 1
          }, 8, ["class"]),
          createTextVNode(" " + toDisplayString(_ctx.t("el.cascader.loading")), 1)
        ], 2)) : _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.ns.e("empty-text"))
        }, toDisplayString(_ctx.t("el.cascader.noData")), 3)) : ((_a2 = _ctx.panel) == null ? void 0 : _a2.isHoverMenu) ? (openBlock(), createElementBlock("svg", {
          key: 2,
          ref: "hoverZone",
          class: normalizeClass(_ctx.ns.e("hover-zone"))
        }, null, 2)) : createCommentVNode("v-if", true)
      ];
    }),
    _: 1
  }, 8, ["class", "wrap-class", "view-class", "onMousemove", "onMouseleave"]);
}
var ElCascaderMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$O, [["render", _sfc_render$a], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);
var ExpandTrigger = /* @__PURE__ */ ((ExpandTrigger2) => {
  ExpandTrigger2["CLICK"] = "click";
  ExpandTrigger2["HOVER"] = "hover";
  return ExpandTrigger2;
})(ExpandTrigger || {});
let uid = 0;
const calculatePathNodes = (node) => {
  const nodes = [node];
  let { parent } = node;
  while (parent) {
    nodes.unshift(parent);
    parent = parent.parent;
  }
  return nodes;
};
class Node {
  constructor(data, config, parent, root2 = false) {
    this.data = data;
    this.config = config;
    this.parent = parent;
    this.root = root2;
    this.uid = uid++;
    this.checked = false;
    this.indeterminate = false;
    this.loading = false;
    const { value: valueKey, label: labelKey, children: childrenKey } = config;
    const childrenData = data[childrenKey];
    const pathNodes = calculatePathNodes(this);
    this.level = root2 ? 0 : parent ? parent.level + 1 : 1;
    this.value = data[valueKey];
    this.label = data[labelKey];
    this.pathNodes = pathNodes;
    this.pathValues = pathNodes.map((node) => node.value);
    this.pathLabels = pathNodes.map((node) => node.label);
    this.childrenData = childrenData;
    this.children = (childrenData || []).map((child) => new Node(child, config, this));
    this.loaded = !config.lazy || this.isLeaf || !isEmpty(childrenData);
  }
  get isDisabled() {
    const { data, parent, config } = this;
    const { disabled, checkStrictly } = config;
    const isDisabled = isFunction(disabled) ? disabled(data, this) : !!data[disabled];
    return isDisabled || !checkStrictly && (parent == null ? void 0 : parent.isDisabled);
  }
  get isLeaf() {
    const { data, config, childrenData, loaded } = this;
    const { lazy, leaf } = config;
    const isLeaf2 = isFunction(leaf) ? leaf(data, this) : data[leaf];
    return isUndefined(isLeaf2) ? lazy && !loaded ? false : !(Array.isArray(childrenData) && childrenData.length) : !!isLeaf2;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(childData) {
    const { childrenData, children } = this;
    const node = new Node(childData, this.config, this);
    if (Array.isArray(childrenData)) {
      childrenData.push(childData);
    } else {
      this.childrenData = [childData];
    }
    children.push(node);
    return node;
  }
  calcText(allLevels, separator) {
    const text = allLevels ? this.pathLabels.join(separator) : this.label;
    this.text = text;
    return text;
  }
  broadcast(event, ...args) {
    const handlerName = `onParent${capitalize(event)}`;
    this.children.forEach((child) => {
      if (child) {
        child.broadcast(event, ...args);
        child[handlerName] && child[handlerName](...args);
      }
    });
  }
  emit(event, ...args) {
    const { parent } = this;
    const handlerName = `onChild${capitalize(event)}`;
    if (parent) {
      parent[handlerName] && parent[handlerName](...args);
      parent.emit(event, ...args);
    }
  }
  onParentCheck(checked) {
    if (!this.isDisabled) {
      this.setCheckState(checked);
    }
  }
  onChildCheck() {
    const { children } = this;
    const validChildren = children.filter((child) => !child.isDisabled);
    const checked = validChildren.length ? validChildren.every((child) => child.checked) : false;
    this.setCheckState(checked);
  }
  setCheckState(checked) {
    const totalNum = this.children.length;
    const checkedNum = this.children.reduce((c2, p2) => {
      const num = p2.checked ? 1 : p2.indeterminate ? 0.5 : 0;
      return c2 + num;
    }, 0);
    this.checked = this.loaded && this.children.filter((child) => !child.isDisabled).every((child) => child.loaded && child.checked) && checked;
    this.indeterminate = this.loaded && checkedNum !== totalNum && checkedNum > 0;
  }
  doCheck(checked) {
    if (this.checked === checked)
      return;
    const { checkStrictly, multiple } = this.config;
    if (checkStrictly || !multiple) {
      this.checked = checked;
    } else {
      this.broadcast("check", checked);
      this.setCheckState(checked);
      this.emit("check");
    }
  }
}
const flatNodes = (nodes, leafOnly) => {
  return nodes.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node);
    } else {
      !leafOnly && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly));
    }
    return res;
  }, []);
};
class Store {
  constructor(data, config) {
    this.config = config;
    const nodes = (data || []).map((nodeData) => new Node(nodeData, this.config));
    this.nodes = nodes;
    this.allNodes = flatNodes(nodes, false);
    this.leafNodes = flatNodes(nodes, true);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(leafOnly) {
    return leafOnly ? this.leafNodes : this.allNodes;
  }
  appendNode(nodeData, parentNode) {
    const node = parentNode ? parentNode.appendChild(nodeData) : new Node(nodeData, this.config);
    if (!parentNode)
      this.nodes.push(node);
    this.allNodes.push(node);
    node.isLeaf && this.leafNodes.push(node);
  }
  appendNodes(nodeDataList, parentNode) {
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode));
  }
  getNodeByValue(value, leafOnly = false) {
    if (!value && value !== 0)
      return null;
    const node = this.getFlattedNodes(leafOnly).find((node2) => isEqual(node2.value, value) || isEqual(node2.pathValues, value));
    return node || null;
  }
  getSameNode(node) {
    if (!node)
      return null;
    const node_ = this.getFlattedNodes(false).find(({ value, level }) => isEqual(node.value, value) && node.level === level);
    return node_ || null;
  }
}
const CommonProps = {
  modelValue: [Number, String, Array],
  options: {
    type: Array,
    default: () => []
  },
  props: {
    type: Object,
    default: () => ({})
  }
};
const DefaultProps = {
  expandTrigger: ExpandTrigger.CLICK,
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: NOOP,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
const useCascaderConfig = (props) => {
  return computed$1(() => ({
    ...DefaultProps,
    ...props.props
  }));
};
const getMenuIndex = (el) => {
  if (!el)
    return 0;
  const pieces = el.id.split("-");
  return Number(pieces[pieces.length - 2]);
};
const checkNode = (el) => {
  if (!el)
    return;
  const input = el.querySelector("input");
  if (input) {
    input.click();
  } else if (isLeaf(el)) {
    el.click();
  }
};
const sortByOriginalOrder = (oldNodes, newNodes) => {
  const newNodesCopy = newNodes.slice(0);
  const newIds = newNodesCopy.map((node) => node.uid);
  const res = oldNodes.reduce((acc, item) => {
    const index2 = newIds.indexOf(item.uid);
    if (index2 > -1) {
      acc.push(item);
      newNodesCopy.splice(index2, 1);
      newIds.splice(index2, 1);
    }
    return acc;
  }, []);
  res.push(...newNodesCopy);
  return res;
};
const _sfc_main$N = defineComponent({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu
  },
  props: {
    ...CommonProps,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, "close", "expand-change"],
  setup(props, { emit, slots }) {
    let manualChecked = false;
    const ns2 = useNamespace("cascader");
    const config = useCascaderConfig(props);
    let store = null;
    const initialLoaded = ref(true);
    const menuList = ref([]);
    const checkedValue = ref(null);
    const menus = ref([]);
    const expandingNode = ref(null);
    const checkedNodes = ref([]);
    const isHoverMenu = computed$1(() => config.value.expandTrigger === ExpandTrigger.HOVER);
    const renderLabelFn = computed$1(() => props.renderLabel || slots.default);
    const initStore = () => {
      const { options } = props;
      const cfg = config.value;
      manualChecked = false;
      store = new Store(options, cfg);
      menus.value = [store.getNodes()];
      if (cfg.lazy && isEmpty(props.options)) {
        initialLoaded.value = false;
        lazyLoad(void 0, (list) => {
          if (list) {
            store = new Store(list, cfg);
            menus.value = [store.getNodes()];
          }
          initialLoaded.value = true;
          syncCheckedValue(false, true);
        });
      } else {
        syncCheckedValue(false, true);
      }
    };
    const lazyLoad = (node, cb) => {
      const cfg = config.value;
      node = node || new Node({}, cfg, void 0, true);
      node.loading = true;
      const resolve = (dataList) => {
        const _node = node;
        const parent = _node.root ? null : _node;
        dataList && (store == null ? void 0 : store.appendNodes(dataList, parent));
        _node.loading = false;
        _node.loaded = true;
        _node.childrenData = _node.childrenData || [];
        cb && cb(dataList);
      };
      cfg.lazyLoad(node, resolve);
    };
    const expandNode = (node, silent) => {
      var _a2;
      const { level } = node;
      const newMenus = menus.value.slice(0, level);
      let newExpandingNode;
      if (node.isLeaf) {
        newExpandingNode = node.pathNodes[level - 2];
      } else {
        newExpandingNode = node;
        newMenus.push(node.children);
      }
      if (((_a2 = expandingNode.value) == null ? void 0 : _a2.uid) !== (newExpandingNode == null ? void 0 : newExpandingNode.uid)) {
        expandingNode.value = node;
        menus.value = newMenus;
        !silent && emit("expand-change", (node == null ? void 0 : node.pathValues) || []);
      }
    };
    const handleCheckChange = (node, checked, emitClose = true) => {
      const { checkStrictly, multiple } = config.value;
      const oldNode = checkedNodes.value[0];
      manualChecked = true;
      !multiple && (oldNode == null ? void 0 : oldNode.doCheck(false));
      node.doCheck(checked);
      calculateCheckedValue();
      emitClose && !multiple && !checkStrictly && emit("close");
      !emitClose && !multiple && !checkStrictly && expandParentNode(node);
    };
    const expandParentNode = (node) => {
      if (!node)
        return;
      node = node.parent;
      expandParentNode(node);
      node && expandNode(node);
    };
    const getFlattedNodes = (leafOnly) => {
      return store == null ? void 0 : store.getFlattedNodes(leafOnly);
    };
    const getCheckedNodes = (leafOnly) => {
      var _a2;
      return (_a2 = getFlattedNodes(leafOnly)) == null ? void 0 : _a2.filter((node) => node.checked !== false);
    };
    const clearCheckedNodes = () => {
      checkedNodes.value.forEach((node) => node.doCheck(false));
      calculateCheckedValue();
    };
    const calculateCheckedValue = () => {
      var _a2;
      const { checkStrictly, multiple } = config.value;
      const oldNodes = checkedNodes.value;
      const newNodes = getCheckedNodes(!checkStrictly);
      const nodes = sortByOriginalOrder(oldNodes, newNodes);
      const values = nodes.map((node) => node.valueByOption);
      checkedNodes.value = nodes;
      checkedValue.value = multiple ? values : (_a2 = values[0]) != null ? _a2 : null;
    };
    const syncCheckedValue = (loaded = false, forced = false) => {
      const { modelValue } = props;
      const { lazy, multiple, checkStrictly } = config.value;
      const leafOnly = !checkStrictly;
      if (!initialLoaded.value || manualChecked || !forced && isEqual(modelValue, checkedValue.value))
        return;
      if (lazy && !loaded) {
        const values = unique(flattenDeep(castArray(modelValue)));
        const nodes = values.map((val) => store == null ? void 0 : store.getNodeByValue(val)).filter((node) => !!node && !node.loaded && !node.loading);
        if (nodes.length) {
          nodes.forEach((node) => {
            lazyLoad(node, () => syncCheckedValue(false, forced));
          });
        } else {
          syncCheckedValue(true, forced);
        }
      } else {
        const values = multiple ? castArray(modelValue) : [modelValue];
        const nodes = unique(values.map((val) => store == null ? void 0 : store.getNodeByValue(val, leafOnly)));
        syncMenuState(nodes, forced);
        checkedValue.value = modelValue;
      }
    };
    const syncMenuState = (newCheckedNodes, reserveExpandingState = true) => {
      const { checkStrictly } = config.value;
      const oldNodes = checkedNodes.value;
      const newNodes = newCheckedNodes.filter((node) => !!node && (checkStrictly || node.isLeaf));
      const oldExpandingNode = store == null ? void 0 : store.getSameNode(expandingNode.value);
      const newExpandingNode = reserveExpandingState && oldExpandingNode || newNodes[0];
      if (newExpandingNode) {
        newExpandingNode.pathNodes.forEach((node) => expandNode(node, true));
      } else {
        expandingNode.value = null;
      }
      oldNodes.forEach((node) => node.doCheck(false));
      newNodes.forEach((node) => node.doCheck(true));
      checkedNodes.value = newNodes;
      nextTick(scrollToExpandingNode);
    };
    const scrollToExpandingNode = () => {
      if (!isClient)
        return;
      menuList.value.forEach((menu) => {
        const menuElement = menu == null ? void 0 : menu.$el;
        if (menuElement) {
          const container = menuElement.querySelector(`.${ns2.namespace.value}-scrollbar__wrap`);
          const activeNode = menuElement.querySelector(`.${ns2.b("node")}.${ns2.is("active")}`) || menuElement.querySelector(`.${ns2.b("node")}.in-active-path`);
          scrollIntoView(container, activeNode);
        }
      });
    };
    const handleKeyDown = (e2) => {
      const target = e2.target;
      const { code } = e2;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          e2.preventDefault();
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, `.${ns2.b("node")}[tabindex="-1"]`));
          break;
        }
        case EVENT_CODE.left: {
          e2.preventDefault();
          const preMenu = menuList.value[getMenuIndex(target) - 1];
          const expandedNode = preMenu == null ? void 0 : preMenu.$el.querySelector(`.${ns2.b("node")}[aria-expanded="true"]`);
          focusNode(expandedNode);
          break;
        }
        case EVENT_CODE.right: {
          e2.preventDefault();
          const nextMenu = menuList.value[getMenuIndex(target) + 1];
          const firstNode = nextMenu == null ? void 0 : nextMenu.$el.querySelector(`.${ns2.b("node")}[tabindex="-1"]`);
          focusNode(firstNode);
          break;
        }
        case EVENT_CODE.enter:
          checkNode(target);
          break;
      }
    };
    provide(CASCADER_PANEL_INJECTION_KEY, reactive({
      config,
      expandingNode,
      checkedNodes,
      isHoverMenu,
      initialLoaded,
      renderLabelFn,
      lazyLoad,
      expandNode,
      handleCheckChange
    }));
    watch([config, () => props.options], initStore, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, () => {
      manualChecked = false;
      syncCheckedValue();
    });
    watch(checkedValue, (val) => {
      if (!isEqual(val, props.modelValue)) {
        emit(UPDATE_MODEL_EVENT, val);
        emit(CHANGE_EVENT, val);
      }
    });
    onBeforeUpdate(() => menuList.value = []);
    onMounted(() => !isEmpty(props.modelValue) && syncCheckedValue());
    return {
      ns: ns2,
      menuList,
      menus,
      checkedNodes,
      handleKeyDown,
      handleCheckChange,
      getFlattedNodes,
      getCheckedNodes,
      clearCheckedNodes,
      calculateCheckedValue,
      scrollToExpandingNode
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader_menu = resolveComponent("el-cascader-menu");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("panel"), _ctx.ns.is("bordered", _ctx.border)]),
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeyDown && _ctx.handleKeyDown(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menus, (menu, index2) => {
      return openBlock(), createBlock(_component_el_cascader_menu, {
        key: index2,
        ref_for: true,
        ref: (item) => _ctx.menuList[index2] = item,
        index: index2,
        nodes: [...menu]
      }, null, 8, ["index", "nodes"]);
    }), 128))
  ], 34);
}
var CascaderPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$N, [["render", _sfc_render$9], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);
CascaderPanel.install = (app) => {
  app.component(CascaderPanel.name, CascaderPanel);
};
const _CascaderPanel = CascaderPanel;
const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$s = {
  name: "ElTag"
};
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  ...__default__$s,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useSize();
    const ns2 = useNamespace("tag");
    const classes = computed$1(() => {
      const { type: type4, hit, effect, closable, round } = props;
      return [
        ns2.b(),
        ns2.is("closable", closable),
        ns2.m(type4),
        ns2.m(tagSize.value),
        ns2.m(effect),
        ns2.is("hit", hit),
        ns2.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(classes)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns2).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns2).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns2).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(classes)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns2).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns2).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$M, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const ElTag = withInstall(Tag);
const DEFAULT_INPUT_HEIGHT = 40;
const INPUT_HEIGHT_MAP = {
  large: 36,
  default: 32,
  small: 28
};
const popperOptions = {
  modifiers: [
    {
      name: "arrowPosition",
      enabled: true,
      phase: "main",
      fn: ({ state }) => {
        const { modifiersData, placement } = state;
        if (["right", "left", "bottom", "top"].includes(placement))
          return;
        modifiersData.arrow.x = 35;
      },
      requires: ["arrow"]
    }
  ]
};
const COMPONENT_NAME$2 = "ElCascader";
const _sfc_main$L = defineComponent({
  name: COMPONENT_NAME$2,
  components: {
    ElCascaderPanel: _CascaderPanel,
    ElInput,
    ElTooltip,
    ElScrollbar,
    ElTag,
    ElIcon,
    CircleClose: circle_close_default,
    Check: check_default,
    ArrowDown: arrow_down_default
  },
  directives: {
    Clickoutside: ClickOutside
  },
  props: {
    ...CommonProps,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    placeholder: {
      type: String
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: {
      type: Function,
      default: (node, keyword) => node.text.includes(keyword)
    },
    separator: {
      type: String,
      default: " / "
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: () => true
    },
    popperClass: {
      type: String,
      default: ""
    },
    teleported: useTooltipContentProps.teleported,
    tagType: { ...tagProps.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "focus",
    "blur",
    "visible-change",
    "expand-change",
    "remove-tag"
  ],
  setup(props, { emit }) {
    let inputInitialHeight = 0;
    let pressDeleteCount = 0;
    const nsCascader = useNamespace("cascader");
    const nsInput = useNamespace("input");
    const { t: t2 } = useLocale();
    const { form, formItem } = useFormItem();
    const tooltipRef = ref(null);
    const input = ref(null);
    const tagWrapper = ref(null);
    const panel = ref(null);
    const suggestionPanel = ref(null);
    const popperVisible = ref(false);
    const inputHover = ref(false);
    const filtering = ref(false);
    const inputValue = ref("");
    const searchInputValue = ref("");
    const presentTags = ref([]);
    const allPresentTags = ref([]);
    const suggestions = ref([]);
    const isOnComposition = ref(false);
    const isDisabled = computed$1(() => props.disabled || (form == null ? void 0 : form.disabled));
    const inputPlaceholder = computed$1(() => props.placeholder || t2("el.cascader.placeholder"));
    const realSize = useSize();
    const tagSize = computed$1(() => ["small"].includes(realSize.value) ? "small" : "default");
    const multiple = computed$1(() => !!props.props.multiple);
    const readonly2 = computed$1(() => !props.filterable || multiple.value);
    const searchKeyword = computed$1(() => multiple.value ? searchInputValue.value : inputValue.value);
    const checkedNodes = computed$1(() => {
      var _a2;
      return ((_a2 = panel.value) == null ? void 0 : _a2.checkedNodes) || [];
    });
    const clearBtnVisible = computed$1(() => {
      if (!props.clearable || isDisabled.value || filtering.value || !inputHover.value)
        return false;
      return !!checkedNodes.value.length;
    });
    const presentText = computed$1(() => {
      const { showAllLevels, separator } = props;
      const nodes = checkedNodes.value;
      return nodes.length ? multiple.value ? " " : nodes[0].calcText(showAllLevels, separator) : "";
    });
    const checkedValue = computed$1({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit(UPDATE_MODEL_EVENT, val);
        emit(CHANGE_EVENT, val);
        if (props.validateEvent) {
          formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
        }
      }
    });
    const popperPaneRef = computed$1(() => {
      var _a2, _b;
      return (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    const togglePopperVisible = (visible) => {
      var _a2, _b, _c;
      if (isDisabled.value)
        return;
      visible = visible != null ? visible : !popperVisible.value;
      if (visible !== popperVisible.value) {
        popperVisible.value = visible;
        (_b = (_a2 = input.value) == null ? void 0 : _a2.input) == null ? void 0 : _b.setAttribute("aria-expanded", `${visible}`);
        if (visible) {
          updatePopperPosition();
          nextTick((_c = panel.value) == null ? void 0 : _c.scrollToExpandingNode);
        } else if (props.filterable) {
          syncPresentTextValue();
        }
        emit("visible-change", visible);
      }
    };
    const updatePopperPosition = () => {
      nextTick(() => {
        var _a2;
        (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper();
      });
    };
    const hideSuggestionPanel = () => {
      filtering.value = false;
    };
    const genTag2 = (node) => {
      const { showAllLevels, separator } = props;
      return {
        node,
        key: node.uid,
        text: node.calcText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled,
        isCollapseTag: false
      };
    };
    const deleteTag = (tag) => {
      var _a2;
      const node = tag.node;
      node.doCheck(false);
      (_a2 = panel.value) == null ? void 0 : _a2.calculateCheckedValue();
      emit("remove-tag", node.valueByOption);
    };
    const calculatePresentTags = () => {
      if (!multiple.value)
        return;
      const nodes = checkedNodes.value;
      const tags = [];
      const allTags = [];
      nodes.forEach((node) => allTags.push(genTag2(node)));
      allPresentTags.value = allTags;
      if (nodes.length) {
        const [first, ...rest] = nodes;
        const restCount = rest.length;
        tags.push(genTag2(first));
        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false,
              isCollapseTag: true
            });
          } else {
            rest.forEach((node) => tags.push(genTag2(node)));
          }
        }
      }
      presentTags.value = tags;
    };
    const calculateSuggestions = () => {
      var _a2, _b;
      const { filterMethod, showAllLevels, separator } = props;
      const res = (_b = (_a2 = panel.value) == null ? void 0 : _a2.getFlattedNodes(!props.props.checkStrictly)) == null ? void 0 : _b.filter((node) => {
        if (node.isDisabled)
          return false;
        node.calcText(showAllLevels, separator);
        return filterMethod(node, searchKeyword.value);
      });
      if (multiple.value) {
        presentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
        allPresentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
      }
      filtering.value = true;
      suggestions.value = res;
      updatePopperPosition();
    };
    const focusFirstNode = () => {
      var _a2;
      let firstNode;
      if (filtering.value && suggestionPanel.value) {
        firstNode = suggestionPanel.value.$el.querySelector(`.${nsCascader.e("suggestion-item")}`);
      } else {
        firstNode = (_a2 = panel.value) == null ? void 0 : _a2.$el.querySelector(`.${nsCascader.b("node")}[tabindex="-1"]`);
      }
      if (firstNode) {
        firstNode.focus();
        !filtering.value && firstNode.click();
      }
    };
    const updateStyle = () => {
      var _a2, _b;
      const inputInner = (_a2 = input.value) == null ? void 0 : _a2.input;
      const tagWrapperEl = tagWrapper.value;
      const suggestionPanelEl = (_b = suggestionPanel.value) == null ? void 0 : _b.$el;
      if (!isClient || !inputInner)
        return;
      if (suggestionPanelEl) {
        const suggestionList = suggestionPanelEl.querySelector(`.${nsCascader.e("suggestion-list")}`);
        suggestionList.style.minWidth = `${inputInner.offsetWidth}px`;
      }
      if (tagWrapperEl) {
        const { offsetHeight } = tagWrapperEl;
        const height = presentTags.value.length > 0 ? `${Math.max(offsetHeight + 6, inputInitialHeight)}px` : `${inputInitialHeight}px`;
        inputInner.style.height = height;
        updatePopperPosition();
      }
    };
    const getCheckedNodes = (leafOnly) => {
      var _a2;
      return (_a2 = panel.value) == null ? void 0 : _a2.getCheckedNodes(leafOnly);
    };
    const handleExpandChange = (value) => {
      updatePopperPosition();
      emit("expand-change", value);
    };
    const handleComposition = (event) => {
      var _a2;
      const text = (_a2 = event.target) == null ? void 0 : _a2.value;
      if (event.type === "compositionend") {
        isOnComposition.value = false;
        nextTick(() => handleInput(text));
      } else {
        const lastCharacter = text[text.length - 1] || "";
        isOnComposition.value = !isKorean(lastCharacter);
      }
    };
    const handleKeyDown = (e2) => {
      if (isOnComposition.value)
        return;
      switch (e2.code) {
        case EVENT_CODE.enter:
          togglePopperVisible();
          break;
        case EVENT_CODE.down:
          togglePopperVisible(true);
          nextTick(focusFirstNode);
          e2.preventDefault();
          break;
        case EVENT_CODE.esc:
          if (popperVisible.value === true) {
            e2.preventDefault();
            e2.stopPropagation();
            togglePopperVisible(false);
          }
          break;
        case EVENT_CODE.tab:
          togglePopperVisible(false);
          break;
      }
    };
    const handleClear = () => {
      var _a2;
      (_a2 = panel.value) == null ? void 0 : _a2.clearCheckedNodes();
      if (!popperVisible.value && props.filterable) {
        syncPresentTextValue();
      }
      togglePopperVisible(false);
    };
    const syncPresentTextValue = () => {
      const { value } = presentText;
      inputValue.value = value;
      searchInputValue.value = value;
    };
    const handleSuggestionClick = (node) => {
      var _a2, _b;
      const { checked } = node;
      if (multiple.value) {
        (_a2 = panel.value) == null ? void 0 : _a2.handleCheckChange(node, !checked, false);
      } else {
        !checked && ((_b = panel.value) == null ? void 0 : _b.handleCheckChange(node, true, false));
        togglePopperVisible(false);
      }
    };
    const handleSuggestionKeyDown = (e2) => {
      const target = e2.target;
      const { code } = e2;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, `.${nsCascader.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case EVENT_CODE.enter:
          target.click();
          break;
      }
    };
    const handleDelete = () => {
      const tags = presentTags.value;
      const lastTag = tags[tags.length - 1];
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1;
      if (!lastTag || !pressDeleteCount || props.collapseTags && tags.length > 1)
        return;
      if (lastTag.hitState) {
        deleteTag(lastTag);
      } else {
        lastTag.hitState = true;
      }
    };
    const handleFilter = debounce(() => {
      const { value } = searchKeyword;
      if (!value)
        return;
      const passed = props.beforeFilter(value);
      if (isPromise(passed)) {
        passed.then(calculateSuggestions).catch(() => {
        });
      } else if (passed !== false) {
        calculateSuggestions();
      } else {
        hideSuggestionPanel();
      }
    }, props.debounce);
    const handleInput = (val, e2) => {
      !popperVisible.value && togglePopperVisible(true);
      if (e2 == null ? void 0 : e2.isComposing)
        return;
      val ? handleFilter() : hideSuggestionPanel();
    };
    watch(filtering, updatePopperPosition);
    watch([checkedNodes, isDisabled], calculatePresentTags);
    watch(presentTags, () => {
      nextTick(() => updateStyle());
    });
    watch(presentText, (val) => inputValue.value = val, { immediate: true });
    onMounted(() => {
      var _a2;
      const inputEl = (_a2 = input.value) == null ? void 0 : _a2.$el;
      inputInitialHeight = (inputEl == null ? void 0 : inputEl.offsetHeight) || INPUT_HEIGHT_MAP[realSize.value] || DEFAULT_INPUT_HEIGHT;
      useResizeObserver(inputEl, updateStyle);
    });
    return {
      popperOptions,
      tooltipRef,
      popperPaneRef,
      input,
      tagWrapper,
      panel,
      suggestionPanel,
      popperVisible,
      inputHover,
      inputPlaceholder,
      filtering,
      presentText,
      checkedValue,
      inputValue,
      searchInputValue,
      presentTags,
      allPresentTags,
      suggestions,
      isDisabled,
      isOnComposition,
      realSize,
      tagSize,
      multiple,
      readonly: readonly2,
      clearBtnVisible,
      nsCascader,
      nsInput,
      t: t2,
      togglePopperVisible,
      hideSuggestionPanel,
      deleteTag,
      focusFirstNode,
      getCheckedNodes,
      handleExpandChange,
      handleKeyDown,
      handleComposition,
      handleClear,
      handleSuggestionClick,
      handleSuggestionKeyDown,
      handleDelete,
      handleInput
    };
  }
});
const _hoisted_1$t = { key: 0 };
const _hoisted_2$m = ["placeholder"];
const _hoisted_3$e = ["onClick"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_circle_close = resolveComponent("circle-close");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_cascader_panel = resolveComponent("el-cascader-panel");
  const _component_check = resolveComponent("check");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltipRef",
    visible: _ctx.popperVisible,
    teleported: _ctx.teleported,
    "popper-class": [_ctx.nsCascader.e("dropdown"), _ctx.popperClass],
    "popper-options": _ctx.popperOptions,
    "fallback-placements": [
      "bottom-start",
      "bottom",
      "top-start",
      "top",
      "right",
      "left"
    ],
    "stop-popper-mouse-event": false,
    "gpu-acceleration": false,
    placement: "bottom-start",
    transition: `${_ctx.nsCascader.namespace.value}-zoom-in-top`,
    effect: "light",
    pure: "",
    persistent: "",
    onHide: _ctx.hideSuggestionPanel
  }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.nsCascader.b(),
          _ctx.nsCascader.m(_ctx.realSize),
          _ctx.nsCascader.is("disabled", _ctx.isDisabled),
          _ctx.$attrs.class
        ]),
        style: normalizeStyle(_ctx.$attrs.style),
        onClick: _cache[11] || (_cache[11] = () => _ctx.togglePopperVisible(_ctx.readonly ? void 0 : true)),
        onKeydown: _cache[12] || (_cache[12] = (...args) => _ctx.handleKeyDown && _ctx.handleKeyDown(...args)),
        onMouseenter: _cache[13] || (_cache[13] = ($event) => _ctx.inputHover = true),
        onMouseleave: _cache[14] || (_cache[14] = ($event) => _ctx.inputHover = false)
      }, [
        createVNode(_component_el_input, {
          ref: "input",
          modelValue: _ctx.inputValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.inputValue = $event),
          placeholder: _ctx.searchInputValue ? "" : _ctx.inputPlaceholder,
          readonly: _ctx.readonly,
          disabled: _ctx.isDisabled,
          "validate-event": false,
          size: _ctx.realSize,
          class: normalizeClass(_ctx.nsCascader.is("focus", _ctx.popperVisible)),
          onCompositionstart: _ctx.handleComposition,
          onCompositionupdate: _ctx.handleComposition,
          onCompositionend: _ctx.handleComposition,
          onFocus: _cache[2] || (_cache[2] = (e2) => _ctx.$emit("focus", e2)),
          onBlur: _cache[3] || (_cache[3] = (e2) => _ctx.$emit("blur", e2)),
          onInput: _ctx.handleInput
        }, {
          suffix: withCtx(() => [
            _ctx.clearBtnVisible ? (openBlock(), createBlock(_component_el_icon, {
              key: "clear",
              class: normalizeClass([_ctx.nsInput.e("icon"), "icon-circle-close"]),
              onClick: withModifiers(_ctx.handleClear, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(_component_circle_close)
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : (openBlock(), createBlock(_component_el_icon, {
              key: "arrow-down",
              class: normalizeClass([
                _ctx.nsInput.e("icon"),
                "icon-arrow-down",
                _ctx.nsCascader.is("reverse", _ctx.popperVisible)
              ]),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.togglePopperVisible(), ["stop"]))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"]))
          ]),
          _: 1
        }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput"]),
        _ctx.multiple ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref: "tagWrapper",
          class: normalizeClass(_ctx.nsCascader.e("tags"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presentTags, (tag) => {
            return openBlock(), createBlock(_component_el_tag, {
              key: tag.key,
              type: _ctx.tagType,
              size: _ctx.tagSize,
              hit: tag.hitState,
              closable: tag.closable,
              "disable-transitions": "",
              onClose: ($event) => _ctx.deleteTag(tag)
            }, {
              default: withCtx(() => [
                tag.isCollapseTag === false ? (openBlock(), createElementBlock("span", _hoisted_1$t, toDisplayString(tag.text), 1)) : (openBlock(), createBlock(_component_el_tooltip, {
                  key: 1,
                  teleported: false,
                  disabled: _ctx.popperVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  placement: "bottom",
                  effect: "light"
                }, {
                  default: withCtx(() => [
                    createElementVNode("span", null, toDisplayString(tag.text), 1)
                  ]),
                  content: withCtx(() => [
                    createElementVNode("div", {
                      class: normalizeClass(_ctx.nsCascader.e("collapse-tags"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.allPresentTags, (tag2, idx) => {
                        return openBlock(), createElementBlock("div", {
                          key: idx,
                          class: normalizeClass(_ctx.nsCascader.e("collapse-tag"))
                        }, [
                          (openBlock(), createBlock(_component_el_tag, {
                            key: tag2.key,
                            class: "in-tooltip",
                            type: _ctx.tagType,
                            size: _ctx.tagSize,
                            hit: tag2.hitState,
                            closable: tag2.closable,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag(tag2)
                          }, {
                            default: withCtx(() => [
                              createElementVNode("span", null, toDisplayString(tag2.text), 1)
                            ]),
                            _: 2
                          }, 1032, ["type", "size", "hit", "closable", "onClose"]))
                        ], 2);
                      }), 128))
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]))
              ]),
              _: 2
            }, 1032, ["type", "size", "hit", "closable", "onClose"]);
          }), 128)),
          _ctx.filterable && !_ctx.isDisabled ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.searchInputValue = $event),
            type: "text",
            class: normalizeClass(_ctx.nsCascader.e("search-input")),
            placeholder: _ctx.presentText ? "" : _ctx.inputPlaceholder,
            onInput: _cache[5] || (_cache[5] = (e2) => _ctx.handleInput(_ctx.searchInputValue, e2)),
            onClick: _cache[6] || (_cache[6] = withModifiers(($event) => _ctx.togglePopperVisible(true), ["stop"])),
            onKeydown: _cache[7] || (_cache[7] = withKeys((...args) => _ctx.handleDelete && _ctx.handleDelete(...args), ["delete"])),
            onCompositionstart: _cache[8] || (_cache[8] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
            onCompositionupdate: _cache[9] || (_cache[9] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
            onCompositionend: _cache[10] || (_cache[10] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args))
          }, null, 42, _hoisted_2$m)), [
            [vModelText, _ctx.searchInputValue]
          ]) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 38)), [
        [_directive_clickoutside, () => _ctx.togglePopperVisible(false), _ctx.popperPaneRef]
      ])
    ]),
    content: withCtx(() => [
      withDirectives(createVNode(_component_el_cascader_panel, {
        ref: "panel",
        modelValue: _ctx.checkedValue,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.checkedValue = $event),
        options: _ctx.options,
        props: _ctx.props,
        border: false,
        "render-label": _ctx.$slots.default,
        onExpandChange: _ctx.handleExpandChange,
        onClose: _cache[16] || (_cache[16] = ($event) => _ctx.$nextTick(() => _ctx.togglePopperVisible(false)))
      }, null, 8, ["modelValue", "options", "props", "render-label", "onExpandChange"]), [
        [vShow, !_ctx.filtering]
      ]),
      _ctx.filterable ? withDirectives((openBlock(), createBlock(_component_el_scrollbar, {
        key: 0,
        ref: "suggestionPanel",
        tag: "ul",
        class: normalizeClass(_ctx.nsCascader.e("suggestion-panel")),
        "view-class": _ctx.nsCascader.e("suggestion-list"),
        onKeydown: _ctx.handleSuggestionKeyDown
      }, {
        default: withCtx(() => [
          _ctx.suggestions.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.suggestions, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.uid,
              class: normalizeClass([
                _ctx.nsCascader.e("suggestion-item"),
                _ctx.nsCascader.is("checked", item.checked)
              ]),
              tabindex: -1,
              onClick: ($event) => _ctx.handleSuggestionClick(item)
            }, [
              createElementVNode("span", null, toDisplayString(item.text), 1),
              item.checked ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_check)
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ], 10, _hoisted_3$e);
          }), 128)) : renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
            createElementVNode("li", {
              class: normalizeClass(_ctx.nsCascader.e("empty-text"))
            }, toDisplayString(_ctx.t("el.cascader.noMatch")), 3)
          ])
        ]),
        _: 3
      }, 8, ["class", "view-class", "onKeydown"])), [
        [vShow, _ctx.filtering]
      ]) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["visible", "teleported", "popper-class", "popper-options", "transition", "onHide"]);
}
var Cascader = /* @__PURE__ */ _export_sfc$1(_sfc_main$L, [["render", _sfc_render$8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader/src/index.vue"]]);
Cascader.install = (app) => {
  app.component(Cascader.name, Cascader);
};
const _Cascader = Cascader;
const ElCascader = _Cascader;
const __default__$r = {
  name: "ElCollapseTransition"
};
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  ...__default__$r,
  setup(__props) {
    const ns2 = useNamespace("collapse-transition");
    const on2 = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = `${el.scrollHeight}px`;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
          el.style.maxHeight = 0;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        el.style.overflow = "hidden";
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns2).b()
      }, toHandlers(on2)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$K, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const ElCollapseTransition = _CollapseTransition;
var advancedFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2, r2) {
      var n2 = t2.prototype, s2 = n2.format;
      r2.en.ordinal = function(e3) {
        var t3 = ["th", "st", "nd", "rd"], r3 = e3 % 100;
        return "[" + e3 + (t3[(r3 - 20) % 10] || t3[r3] || t3[0]) + "]";
      }, n2.format = function(e3) {
        var t3 = this, r3 = this.$locale();
        if (!this.isValid())
          return s2.bind(this)(e3);
        var n3 = this.$utils(), a2 = (e3 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e4) {
          switch (e4) {
            case "Q":
              return Math.ceil((t3.$M + 1) / 3);
            case "Do":
              return r3.ordinal(t3.$D);
            case "gggg":
              return t3.weekYear();
            case "GGGG":
              return t3.isoWeekYear();
            case "wo":
              return r3.ordinal(t3.week(), "W");
            case "w":
            case "ww":
              return n3.s(t3.week(), "w" === e4 ? 1 : 2, "0");
            case "W":
            case "WW":
              return n3.s(t3.isoWeek(), "W" === e4 ? 1 : 2, "0");
            case "k":
            case "kk":
              return n3.s(String(0 === t3.$H ? 24 : t3.$H), "k" === e4 ? 1 : 2, "0");
            case "X":
              return Math.floor(t3.$d.getTime() / 1e3);
            case "x":
              return t3.$d.getTime();
            case "z":
              return "[" + t3.offsetName() + "]";
            case "zzz":
              return "[" + t3.offsetName("long") + "]";
            default:
              return e4;
          }
        });
        return s2.bind(this)(a2);
      };
    };
  });
})(advancedFormat$1);
var advancedFormat = advancedFormat$1.exports;
var weekOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    var e2 = "week", t2 = "year";
    return function(i2, n2, r2) {
      var f2 = n2.prototype;
      f2.week = function(i3) {
        if (void 0 === i3 && (i3 = null), null !== i3)
          return this.add(7 * (i3 - this.week()), "day");
        var n3 = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var f3 = r2(this).startOf(t2).add(1, t2).date(n3), s2 = r2(this).endOf(e2);
          if (f3.isBefore(s2))
            return 1;
        }
        var a2 = r2(this).startOf(t2).date(n3).startOf(e2).subtract(1, "millisecond"), o2 = this.diff(a2, e2, true);
        return o2 < 0 ? r2(this).startOf("week").week() : Math.ceil(o2);
      }, f2.weeks = function(e3) {
        return void 0 === e3 && (e3 = null), this.week(e3);
      };
    };
  });
})(weekOfYear$1);
var weekOfYear = weekOfYear$1.exports;
var weekYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2) {
      t2.prototype.weekYear = function() {
        var e3 = this.month(), t3 = this.week(), n2 = this.year();
        return 1 === t3 && 11 === e3 ? n2 + 1 : 0 === e3 && t3 >= 52 ? n2 - 1 : n2;
      };
    };
  });
})(weekYear$1);
var weekYear = weekYear$1.exports;
var dayOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2, n2) {
      t2.prototype.dayOfYear = function(e3) {
        var t3 = Math.round((n2(this).startOf("day") - n2(this).startOf("year")) / 864e5) + 1;
        return null == e3 ? t3 : this.add(e3 - t3, "day");
      };
    };
  });
})(dayOfYear$1);
var dayOfYear = dayOfYear$1.exports;
var isSameOrAfter$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2) {
      t2.prototype.isSameOrAfter = function(e3, t3) {
        return this.isSame(e3, t3) || this.isAfter(e3, t3);
      };
    };
  });
})(isSameOrAfter$1);
var isSameOrAfter = isSameOrAfter$1.exports;
var isSameOrBefore$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, i2) {
    module2.exports = i2();
  }(commonjsGlobal, function() {
    return function(e2, i2) {
      i2.prototype.isSameOrBefore = function(e3, i3) {
        return this.isSame(e3, i3) || this.isBefore(e3, i3);
      };
    };
  });
})(isSameOrBefore$1);
var isSameOrBefore = isSameOrBefore$1.exports;
const datePickerProps = buildProps({
  type: {
    type: definePropType(String),
    default: "date"
  }
});
const selectionModes = ["date", "dates", "year", "month", "week", "range"];
const datePickerSharedProps = buildProps({
  disabledDate: {
    type: definePropType(Function)
  },
  date: {
    type: definePropType(Object),
    required: true
  },
  minDate: {
    type: definePropType(Object)
  },
  maxDate: {
    type: definePropType(Object)
  },
  parsedValue: {
    type: definePropType([Object, Array])
  },
  rangeState: {
    type: definePropType(Object),
    default: () => ({
      endDate: null,
      selecting: false
    })
  }
});
const panelSharedProps = buildProps({
  type: {
    type: definePropType(String),
    required: true,
    values: datePickTypes
  }
});
const panelRangeSharedProps = buildProps({
  unlinkPanels: Boolean,
  parsedValue: {
    type: definePropType(Array)
  }
});
const selectionModeWithDefault = (mode) => {
  return {
    type: String,
    values: selectionModes,
    default: mode
  };
};
const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  }
});
const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault("date")
});
const isValidRange = (range3) => {
  if (!isArray(range3))
    return false;
  const [left, right] = range3;
  return dayjs.isDayjs(left) && dayjs.isDayjs(right) && left.isSameOrBefore(right);
};
const getDefaultValue = (defaultValue, { lang, unit, unlinkPanels }) => {
  let start;
  if (isArray(defaultValue)) {
    let [left, right] = defaultValue.map((d2) => dayjs(d2).locale(lang));
    if (!unlinkPanels) {
      right = left.add(1, unit);
    }
    return [left, right];
  } else if (defaultValue) {
    start = dayjs(defaultValue);
  } else {
    start = dayjs();
  }
  start = start.locale(lang);
  return [start, start.add(1, unit)];
};
const buildPickerTable = (dimension, rows, {
  columnIndexOffset,
  startDate,
  nextEndDate,
  now: now2,
  unit,
  relativeDateGetter,
  setCellMetadata,
  setRowMetadata
}) => {
  for (let rowIndex = 0; rowIndex < dimension.row; rowIndex++) {
    const row = rows[rowIndex];
    for (let columnIndex = 0; columnIndex < dimension.column; columnIndex++) {
      let cell = row[columnIndex + columnIndexOffset];
      if (!cell) {
        cell = {
          row: rowIndex,
          column: columnIndex,
          type: "normal",
          inRange: false,
          start: false,
          end: false
        };
      }
      const index2 = rowIndex * dimension.column + columnIndex;
      const nextStartDate = relativeDateGetter(index2);
      cell.dayjs = nextStartDate;
      cell.date = nextStartDate.toDate();
      cell.timestamp = nextStartDate.valueOf();
      cell.type = "normal";
      cell.inRange = !!(startDate && nextStartDate.isSameOrAfter(startDate, unit) && nextEndDate && nextStartDate.isSameOrBefore(nextEndDate, unit)) || !!(startDate && nextStartDate.isSameOrBefore(startDate, unit) && nextEndDate && nextStartDate.isSameOrAfter(nextEndDate, unit));
      if (startDate == null ? void 0 : startDate.isSameOrAfter(nextEndDate)) {
        cell.start = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit);
        cell.end = startDate && nextStartDate.isSame(startDate, unit);
      } else {
        cell.start = !!startDate && nextStartDate.isSame(startDate, unit);
        cell.end = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit);
      }
      const isToday = nextStartDate.isSame(now2, unit);
      if (isToday) {
        cell.type = "today";
      }
      setCellMetadata == null ? void 0 : setCellMetadata(cell, { rowIndex, columnIndex });
      row[columnIndex + columnIndexOffset] = cell;
    }
    setRowMetadata == null ? void 0 : setRowMetadata(row);
  }
};
const basicCellProps = buildProps({
  cell: {
    type: definePropType(Object)
  }
});
var ElDatePickerCell = defineComponent({
  name: "ElDatePickerCell",
  props: basicCellProps,
  setup(props) {
    const ns2 = useNamespace("date-table-cell");
    const {
      slots
    } = inject(ROOT_PICKER_INJECTION_KEY);
    return () => {
      const {
        cell
      } = props;
      if (slots.default) {
        const list = slots.default(cell).filter((item) => {
          return item.patchFlag !== -2 && item.type.toString() !== "Symbol(Comment)";
        });
        if (list.length) {
          return list;
        }
      }
      return createVNode("div", {
        "class": ns2.b()
      }, [createVNode("span", {
        "class": ns2.e("text")
      }, [cell == null ? void 0 : cell.text])]);
    };
  }
});
const _hoisted_1$s = ["aria-label"];
const _hoisted_2$l = {
  key: 0,
  scope: "col"
};
const _hoisted_3$d = ["aria-label"];
const _hoisted_4$7 = ["aria-current", "aria-selected", "tabindex"];
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "basic-date-table",
  props: basicDateTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns2 = useNamespace("date-table");
    const { t: t2, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const lastRow = ref();
    const lastColumn = ref();
    const tableRows = ref([[], [], [], [], [], []]);
    let focusWithClick = false;
    const firstDayOfWeek = props.date.$locale().weekStart || 7;
    const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map((_2) => _2.toLowerCase());
    const offsetDay = computed$1(() => {
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
    });
    const startDate = computed$1(() => {
      const startDayOfMonth = props.date.startOf("month");
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
    });
    const WEEKS = computed$1(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
    });
    const hasCurrent = computed$1(() => {
      return rows.value.flat().some((row) => {
        return row.isCurrent;
      });
    });
    const days = computed$1(() => {
      const startOfMonth = props.date.startOf("month");
      const startOfMonthDay = startOfMonth.day() || 7;
      const dateCountOfMonth = startOfMonth.daysInMonth();
      const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
      return {
        startOfMonthDay,
        dateCountOfMonth,
        dateCountOfLastMonth
      };
    });
    const selectedDate = computed$1(() => {
      return props.selectionMode === "dates" ? castArray(props.parsedValue) : [];
    });
    const setDateText = (cell, {
      count,
      rowIndex,
      columnIndex
    }) => {
      const { startOfMonthDay, dateCountOfMonth, dateCountOfLastMonth } = unref(days);
      const offset = unref(offsetDay);
      if (rowIndex >= 0 && rowIndex <= 1) {
        const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
        if (columnIndex + rowIndex * 7 >= numberOfDaysFromPreviousMonth) {
          cell.text = count;
          return true;
        } else {
          cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - columnIndex % 7) + 1 + rowIndex * 7;
          cell.type = "prev-month";
        }
      } else {
        if (count <= dateCountOfMonth) {
          cell.text = count;
        } else {
          cell.text = count - dateCountOfMonth;
          cell.type = "next-month";
        }
        return true;
      }
      return false;
    };
    const setCellMetadata = (cell, {
      columnIndex,
      rowIndex
    }, count) => {
      const { disabledDate: disabledDate2, cellClassName } = props;
      const _selectedDate = unref(selectedDate);
      const shouldIncrement = setDateText(cell, { count, rowIndex, columnIndex });
      const cellDate = cell.dayjs.toDate();
      cell.selected = _selectedDate.find((d2) => d2.valueOf() === cell.dayjs.valueOf());
      cell.isSelected = !!cell.selected;
      cell.isCurrent = isCurrent(cell);
      cell.disabled = disabledDate2 == null ? void 0 : disabledDate2(cellDate);
      cell.customClass = cellClassName == null ? void 0 : cellClassName(cellDate);
      return shouldIncrement;
    };
    const setRowMetadata = (row) => {
      if (props.selectionMode === "week") {
        const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6];
        const isActive = isWeekActive(row[start + 1]);
        row[start].inRange = isActive;
        row[start].start = isActive;
        row[end].inRange = isActive;
        row[end].end = isActive;
      }
    };
    const rows = computed$1(() => {
      const { minDate, maxDate, rangeState, showWeekNumber } = props;
      const offset = offsetDay.value;
      const rows_ = tableRows.value;
      const dateUnit = "day";
      let count = 1;
      if (showWeekNumber) {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
          if (!rows_[rowIndex][0]) {
            rows_[rowIndex][0] = {
              type: "week",
              text: startDate.value.add(rowIndex * 7 + 1, dateUnit).week()
            };
          }
        }
      }
      buildPickerTable({ row: 6, column: 7 }, rows_, {
        startDate: minDate,
        columnIndexOffset: showWeekNumber ? 1 : 0,
        nextEndDate: rangeState.endDate || maxDate || rangeState.selecting && minDate || null,
        now: dayjs().locale(unref(lang)).startOf(dateUnit),
        unit: dateUnit,
        relativeDateGetter: (idx) => startDate.value.add(idx - offset, dateUnit),
        setCellMetadata: (...args) => {
          if (setCellMetadata(...args, count)) {
            count += 1;
          }
        },
        setRowMetadata
      });
      return rows_;
    });
    watch(() => props.date, async () => {
      var _a2, _b;
      if ((_a2 = tbodyRef.value) == null ? void 0 : _a2.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    const focus = async () => {
      var _a2;
      (_a2 = currentCellRef.value) == null ? void 0 : _a2.focus();
    };
    const isNormalDay = (type4 = "") => {
      return ["normal", "today"].includes(type4);
    };
    const isCurrent = (cell) => {
      return props.selectionMode === "date" && isNormalDay(cell.type) && cellMatchesDate(cell, props.parsedValue);
    };
    const cellMatchesDate = (cell, date4) => {
      if (!date4)
        return false;
      return dayjs(date4).locale(lang.value).isSame(props.date.date(Number(cell.text)), "day");
    };
    const getCellClasses = (cell) => {
      const classes = [];
      if (isNormalDay(cell.type) && !cell.disabled) {
        classes.push("available");
        if (cell.type === "today") {
          classes.push("today");
        }
      } else {
        classes.push(cell.type);
      }
      if (isCurrent(cell)) {
        classes.push("current");
      }
      if (cell.inRange && (isNormalDay(cell.type) || props.selectionMode === "week")) {
        classes.push("in-range");
        if (cell.start) {
          classes.push("start-date");
        }
        if (cell.end) {
          classes.push("end-date");
        }
      }
      if (cell.disabled) {
        classes.push("disabled");
      }
      if (cell.selected) {
        classes.push("selected");
      }
      if (cell.customClass) {
        classes.push(cell.customClass);
      }
      return classes.join(" ");
    };
    const getDateOfCell = (row, column) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value;
      return startDate.value.add(offsetFromStart, "day");
    };
    const handleMouseMove = (event) => {
      var _a2;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "SPAN") {
        target = (_a2 = target.parentNode) == null ? void 0 : _a2.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: getDateOfCell(row, column)
        });
      }
    };
    const isSelectedCell = (cell) => {
      return !hasCurrent.value && (cell == null ? void 0 : cell.text) === 1 && cell.type === "normal" || cell.isCurrent;
    };
    const handleFocus = (event) => {
      if (focusWithClick || hasCurrent.value || props.selectionMode !== "date")
        return;
      handlePickDate(event, true);
    };
    const handleMouseDown = (event) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      focusWithClick = true;
    };
    const handleMouseUp = (event) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      focusWithClick = false;
    };
    const handlePickDate = (event, isKeyboardMovement = false) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      const cell = rows.value[row][column];
      if (cell.disabled || cell.type === "week")
        return;
      const newDate = getDateOfCell(row, column);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting || !props.minDate) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else if (props.selectionMode === "date") {
        emit("pick", newDate, isKeyboardMovement);
      } else if (props.selectionMode === "week") {
        const weekNumber = newDate.week();
        const value = `${newDate.year()}w${weekNumber}`;
        emit("pick", {
          year: newDate.year(),
          week: weekNumber,
          value,
          date: newDate.startOf("week")
        });
      } else if (props.selectionMode === "dates") {
        const newValue = cell.selected ? castArray(props.parsedValue).filter((d2) => (d2 == null ? void 0 : d2.valueOf()) !== newDate.valueOf()) : castArray(props.parsedValue).concat([newDate]);
        emit("pick", newValue);
      }
    };
    const isWeekActive = (cell) => {
      if (props.selectionMode !== "week")
        return false;
      let newDate = props.date.startOf("day");
      if (cell.type === "prev-month") {
        newDate = newDate.subtract(1, "month");
      }
      if (cell.type === "next-month") {
        newDate = newDate.add(1, "month");
      }
      newDate = newDate.date(Number.parseInt(cell.text, 10));
      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
        const weekDate = props.parsedValue.subtract(dayOffset, "day");
        return weekDate.isSame(newDate, "day");
      }
      return false;
    };
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t2)("el.datepicker.dateTablePrompt"),
        cellspacing: "0",
        cellpadding: "0",
        class: normalizeClass([unref(ns2).b(), { "is-week-mode": _ctx.selectionMode === "week" }]),
        onClick: handlePickDate,
        onMousemove: handleMouseMove,
        onMousedown: handleMouseDown,
        onMouseup: handleMouseUp
      }, [
        createElementVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          createElementVNode("tr", null, [
            _ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_2$l, toDisplayString(unref(t2)("el.datepicker.week")), 1)) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(WEEKS), (week, key) => {
              return openBlock(), createElementBlock("th", {
                key,
                scope: "col",
                "aria-label": unref(t2)("el.datepicker.weeksFull." + week)
              }, toDisplayString(unref(t2)("el.datepicker.weeks." + week)), 9, _hoisted_3$d);
            }), 128))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, rowKey) => {
            return openBlock(), createElementBlock("tr", {
              key: rowKey,
              class: normalizeClass([unref(ns2).e("row"), { current: isWeekActive(row[1]) }])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, columnKey) => {
                return openBlock(), createElementBlock("td", {
                  key: `${rowKey}.${columnKey}`,
                  ref_for: true,
                  ref: (el) => isSelectedCell(cell) && (currentCellRef.value = el),
                  class: normalizeClass(getCellClasses(cell)),
                  "aria-current": cell.isCurrent ? "date" : void 0,
                  "aria-selected": cell.isCurrent,
                  tabindex: isSelectedCell(cell) ? 0 : -1,
                  onFocus: handleFocus
                }, [
                  createVNode(unref(ElDatePickerCell), { cell }, null, 8, ["cell"])
                ], 42, _hoisted_4$7);
              }), 128))
            ], 2);
          }), 128))
        ], 512)
      ], 42, _hoisted_1$s);
    };
  }
});
var DateTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$J, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);
const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault("month")
});
const _hoisted_1$r = ["aria-label"];
const _hoisted_2$k = ["aria-selected", "aria-label", "tabindex", "onKeydown"];
const _hoisted_3$c = { class: "cell" };
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "basic-month-table",
  props: basicMonthTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInMonth = (year, month, lang2) => {
      const firstDay = dayjs().locale(lang2).startOf("month").month(month).year(year);
      const numOfDays = firstDay.daysInMonth();
      return rangeArr(numOfDays).map((n2) => firstDay.add(n2, "day").toDate());
    };
    const ns2 = useNamespace("month-table");
    const { t: t2, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const months = ref(props.date.locale("en").localeData().monthsShort().map((_2) => _2.toLowerCase()));
    const tableRows = ref([
      [],
      [],
      []
    ]);
    const lastRow = ref();
    const lastColumn = ref();
    const rows = computed$1(() => {
      var _a2, _b;
      const rows2 = tableRows.value;
      const now2 = dayjs().locale(lang.value).startOf("month");
      for (let i2 = 0; i2 < 3; i2++) {
        const row = rows2[i2];
        for (let j2 = 0; j2 < 4; j2++) {
          const cell = row[j2] || (row[j2] = {
            row: i2,
            column: j2,
            type: "normal",
            inRange: false,
            start: false,
            end: false,
            text: -1,
            disabled: false
          });
          cell.type = "normal";
          const index2 = i2 * 4 + j2;
          const calTime = props.date.startOf("year").month(index2);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate || null;
          cell.inRange = !!(props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month")) || !!(props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month"));
          if ((_a2 = props.minDate) == null ? void 0 : _a2.isSameOrAfter(calEndDate)) {
            cell.start = !!(calEndDate && calTime.isSame(calEndDate, "month"));
            cell.end = props.minDate && calTime.isSame(props.minDate, "month");
          } else {
            cell.start = !!(props.minDate && calTime.isSame(props.minDate, "month"));
            cell.end = !!(calEndDate && calTime.isSame(calEndDate, "month"));
          }
          const isToday = now2.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          cell.text = index2;
          cell.disabled = ((_b = props.disabledDate) == null ? void 0 : _b.call(props, calTime.toDate())) || false;
        }
      }
      return rows2;
    });
    const focus = () => {
      var _a2;
      (_a2 = currentCellRef.value) == null ? void 0 : _a2.focus();
    };
    const getCellStyle = (cell) => {
      const style = {};
      const year = props.date.year();
      const today = new Date();
      const month = cell.text;
      style.disabled = props.disabledDate ? datesInMonth(year, month, lang.value).every(props.disabledDate) : false;
      style.current = castArray(props.parsedValue).findIndex((date4) => dayjs.isDayjs(date4) && date4.year() === year && date4.month() === month) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      if (cell.inRange) {
        style["in-range"] = true;
        if (cell.start) {
          style["start-date"] = true;
        }
        if (cell.end) {
          style["end-date"] = true;
        }
      }
      return style;
    };
    const isSelectedCell = (cell) => {
      const year = props.date.year();
      const month = cell.text;
      return castArray(props.date).findIndex((date4) => date4.year() === year && date4.month() === month) >= 0;
    };
    const handleMouseMove = (event) => {
      var _a2;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "A") {
        target = (_a2 = target.parentNode) == null ? void 0 : _a2.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: props.date.startOf("year").month(row * 4 + column)
        });
      }
    };
    const handleMonthTableClick = (event) => {
      var _a2;
      const target = (_a2 = event.target) == null ? void 0 : _a2.closest("td");
      if ((target == null ? void 0 : target.tagName) !== "TD")
        return;
      if (hasClass(target, "disabled"))
        return;
      const column = target.cellIndex;
      const row = target.parentNode.rowIndex;
      const month = row * 4 + column;
      const newDate = props.date.startOf("year").month(month);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (props.minDate && newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else {
        emit("pick", month);
      }
    };
    watch(() => props.date, async () => {
      var _a2, _b;
      if ((_a2 = tbodyRef.value) == null ? void 0 : _a2.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t2)("el.datepicker.monthTablePrompt"),
        class: normalizeClass(unref(ns2).b()),
        onClick: handleMonthTableClick,
        onMousemove: handleMouseMove
      }, [
        createElementVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, key) => {
            return openBlock(), createElementBlock("tr", { key }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
                return openBlock(), createElementBlock("td", {
                  key: key_,
                  ref_for: true,
                  ref: (el) => isSelectedCell(cell) && (currentCellRef.value = el),
                  class: normalizeClass(getCellStyle(cell)),
                  "aria-selected": `${isSelectedCell(cell)}`,
                  "aria-label": unref(t2)(`el.datepicker.month${+cell.text + 1}`),
                  tabindex: isSelectedCell(cell) ? 0 : -1,
                  onKeydown: [
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["space"]),
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["enter"])
                  ]
                }, [
                  createElementVNode("div", null, [
                    createElementVNode("span", _hoisted_3$c, toDisplayString(unref(t2)("el.datepicker.months." + months.value[cell.text])), 1)
                  ])
                ], 42, _hoisted_2$k);
              }), 128))
            ]);
          }), 128))
        ], 512)
      ], 42, _hoisted_1$r);
    };
  }
});
var MonthTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$I, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);
const { date: date$1, disabledDate, parsedValue } = datePickerSharedProps;
const basicYearTableProps = buildProps({
  date: date$1,
  disabledDate,
  parsedValue
});
const _hoisted_1$q = ["aria-label"];
const _hoisted_2$j = ["aria-selected", "tabindex", "onKeydown"];
const _hoisted_3$b = { class: "cell" };
const _hoisted_4$6 = { key: 1 };
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "basic-year-table",
  props: basicYearTableProps,
  emits: ["pick"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInYear = (year, lang2) => {
      const firstDay = dayjs(String(year)).locale(lang2).startOf("year");
      const lastDay = firstDay.endOf("year");
      const numOfDays = lastDay.dayOfYear();
      return rangeArr(numOfDays).map((n2) => firstDay.add(n2, "day").toDate());
    };
    const ns2 = useNamespace("year-table");
    const { t: t2, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const startYear = computed$1(() => {
      return Math.floor(props.date.year() / 10) * 10;
    });
    const focus = () => {
      var _a2;
      (_a2 = currentCellRef.value) == null ? void 0 : _a2.focus();
    };
    const getCellKls = (year) => {
      const kls = {};
      const today = dayjs().locale(lang.value);
      kls.disabled = props.disabledDate ? datesInYear(year, lang.value).every(props.disabledDate) : false;
      kls.current = castArray(props.parsedValue).findIndex((d2) => d2.year() === year) >= 0;
      kls.today = today.year() === year;
      return kls;
    };
    const isSelectedCell = (year) => {
      return year === startYear.value && props.date.year() < startYear.value && props.date.year() > startYear.value + 9 || castArray(props.date).findIndex((date4) => date4.year() === year) >= 0;
    };
    const handleYearTableClick = (event) => {
      const clickTarget = event.target;
      const target = clickTarget.closest("td");
      if (target) {
        if (hasClass(target, "disabled"))
          return;
        const year = target.textContent || target.innerText;
        emit("pick", Number(year));
      }
    };
    watch(() => props.date, async () => {
      var _a2, _b;
      if ((_a2 = tbodyRef.value) == null ? void 0 : _a2.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t2)("el.datepicker.yearTablePrompt"),
        class: normalizeClass(unref(ns2).b()),
        onClick: handleYearTableClick
      }, [
        createElementVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(3, (_2, i2) => {
            return createElementVNode("tr", { key: i2 }, [
              (openBlock(), createElementBlock(Fragment, null, renderList(4, (__, j2) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: i2 + "_" + j2
                }, [
                  i2 * 4 + j2 < 10 ? (openBlock(), createElementBlock("td", {
                    key: 0,
                    ref_for: true,
                    ref: (el) => isSelectedCell(unref(startYear) + i2 * 4 + j2) && (currentCellRef.value = el),
                    class: normalizeClass(["available", getCellKls(unref(startYear) + i2 * 4 + j2)]),
                    "aria-selected": `${isSelectedCell(unref(startYear) + i2 * 4 + j2)}`,
                    tabindex: isSelectedCell(unref(startYear) + i2 * 4 + j2) ? 0 : -1,
                    onKeydown: [
                      withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["space"]),
                      withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["enter"])
                    ]
                  }, [
                    createElementVNode("span", _hoisted_3$b, toDisplayString(unref(startYear) + i2 * 4 + j2), 1)
                  ], 42, _hoisted_2$j)) : (openBlock(), createElementBlock("td", _hoisted_4$6))
                ], 64);
              }), 64))
            ]);
          }), 64))
        ], 512)
      ], 10, _hoisted_1$q);
    };
  }
});
var YearTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$H, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);
const _hoisted_1$p = ["onClick"];
const _hoisted_2$i = ["aria-label"];
const _hoisted_3$a = ["aria-label"];
const _hoisted_4$5 = ["aria-label"];
const _hoisted_5$5 = ["aria-label"];
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "panel-date-pick",
  props: panelDatePickProps,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(__props, { emit: contextEmit }) {
    const props = __props;
    const timeWithinRange = (_2, __, ___) => true;
    const ppNs = useNamespace("picker-panel");
    const dpNs = useNamespace("date-picker");
    const attrs = useAttrs$1();
    const slots = useSlots();
    const { t: t2, lang } = useLocale();
    const pickerBase = inject("EP_PICKER_BASE");
    const popper = inject(TOOLTIP_INJECTION_KEY);
    const { shortcuts, disabledDate: disabledDate2, cellClassName, defaultTime, arrowControl } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const currentViewRef = ref();
    const innerDate = ref(dayjs().locale(lang.value));
    const defaultTimeD = computed$1(() => {
      return dayjs(defaultTime).locale(lang.value);
    });
    const month = computed$1(() => {
      return innerDate.value.month();
    });
    const year = computed$1(() => {
      return innerDate.value.year();
    });
    const selectableRange = ref([]);
    const userInputDate = ref(null);
    const userInputTime = ref(null);
    const checkDateWithinRange = (date4) => {
      return selectableRange.value.length > 0 ? timeWithinRange(date4, selectableRange.value, props.format || "HH:mm:ss") : true;
    };
    const formatEmit = (emitDayjs) => {
      if (defaultTime && !visibleTime.value) {
        return defaultTimeD.value.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      if (showTime.value)
        return emitDayjs.millisecond(0);
      return emitDayjs.startOf("day");
    };
    const emit = (value, ...args) => {
      if (!value) {
        contextEmit("pick", value, ...args);
      } else if (isArray(value)) {
        const dates = value.map(formatEmit);
        contextEmit("pick", dates, ...args);
      } else {
        contextEmit("pick", formatEmit(value), ...args);
      }
      userInputDate.value = null;
      userInputTime.value = null;
    };
    const handleDatePick = (value, keepOpen) => {
      if (selectionMode.value === "date") {
        value = value;
        let newDate = props.parsedValue ? props.parsedValue.year(value.year()).month(value.month()).date(value.date()) : value;
        if (!checkDateWithinRange(newDate)) {
          newDate = selectableRange.value[0][0].year(value.year()).month(value.month()).date(value.date());
        }
        innerDate.value = newDate;
        emit(newDate, showTime.value || keepOpen);
      } else if (selectionMode.value === "week") {
        emit(value.date);
      } else if (selectionMode.value === "dates") {
        emit(value, true);
      }
    };
    const moveByMonth = (forward) => {
      const action = forward ? "add" : "subtract";
      innerDate.value = innerDate.value[action](1, "month");
      handlePanelChange("month");
    };
    const moveByYear = (forward) => {
      const currentDate = innerDate.value;
      const action = forward ? "add" : "subtract";
      innerDate.value = currentView.value === "year" ? currentDate[action](10, "year") : currentDate[action](1, "year");
      handlePanelChange("year");
    };
    const currentView = ref("date");
    const yearLabel = computed$1(() => {
      const yearTranslation = t2("el.datepicker.year");
      if (currentView.value === "year") {
        const startYear = Math.floor(year.value / 10) * 10;
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}`;
        }
        return `${startYear} - ${startYear + 9}`;
      }
      return `${year.value} ${yearTranslation}`;
    });
    const handleShortcutClick = (shortcut) => {
      const shortcutValue = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
      if (shortcutValue) {
        emit(dayjs(shortcutValue).locale(lang.value));
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick({
          attrs,
          slots,
          emit: contextEmit
        });
      }
    };
    const selectionMode = computed$1(() => {
      const { type: type4 } = props;
      if (["week", "month", "year", "dates"].includes(type4))
        return type4;
      return "date";
    });
    const keyboardMode = computed$1(() => {
      return selectionMode.value === "date" ? currentView.value : selectionMode.value;
    });
    const hasShortcuts = computed$1(() => !!shortcuts.length);
    const handleMonthPick = async (month2) => {
      innerDate.value = innerDate.value.startOf("month").month(month2);
      if (selectionMode.value === "month") {
        emit(innerDate.value, false);
      } else {
        currentView.value = "date";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("month");
    };
    const handleYearPick = async (year2) => {
      if (selectionMode.value === "year") {
        innerDate.value = innerDate.value.startOf("year").year(year2);
        emit(innerDate.value, false);
      } else {
        innerDate.value = innerDate.value.year(year2);
        currentView.value = "month";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("year");
    };
    const showPicker = async (view) => {
      currentView.value = view;
      await nextTick();
      handleFocusPicker();
    };
    const showTime = computed$1(() => props.type === "datetime" || props.type === "datetimerange");
    const footerVisible = computed$1(() => {
      return showTime.value || selectionMode.value === "dates";
    });
    const onConfirm = () => {
      if (selectionMode.value === "dates") {
        emit(props.parsedValue);
      } else {
        let result = props.parsedValue;
        if (!result) {
          const defaultTimeD2 = dayjs(defaultTime).locale(lang.value);
          const defaultValueD = getDefaultValue2();
          result = defaultTimeD2.year(defaultValueD.year()).month(defaultValueD.month()).date(defaultValueD.date());
        }
        innerDate.value = result;
        emit(result);
      }
    };
    const changeToNow = () => {
      const now2 = dayjs().locale(lang.value);
      const nowDate = now2.toDate();
      if ((!disabledDate2 || !disabledDate2(nowDate)) && checkDateWithinRange(nowDate)) {
        innerDate.value = dayjs().locale(lang.value);
        emit(innerDate.value);
      }
    };
    const timeFormat = computed$1(() => {
      return extractTimeFormat(props.format);
    });
    const dateFormat = computed$1(() => {
      return extractDateFormat(props.format);
    });
    const visibleTime = computed$1(() => {
      if (userInputTime.value)
        return userInputTime.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(timeFormat.value);
    });
    const visibleDate = computed$1(() => {
      if (userInputDate.value)
        return userInputDate.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(dateFormat.value);
    });
    const timePickerVisible = ref(false);
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true;
    };
    const handleTimePickClose = () => {
      timePickerVisible.value = false;
    };
    const getUnits = (date4) => {
      return {
        hour: date4.hour(),
        minute: date4.minute(),
        second: date4.second(),
        year: date4.year(),
        month: date4.month(),
        date: date4.date()
      };
    };
    const handleTimePick = (value, visible, first) => {
      const { hour, minute, second } = getUnits(value);
      const newDate = props.parsedValue ? props.parsedValue.hour(hour).minute(minute).second(second) : value;
      innerDate.value = newDate;
      emit(innerDate.value, true);
      if (!first) {
        timePickerVisible.value = visible;
      }
    };
    const handleVisibleTimeChange = (value) => {
      const newDate = dayjs(value, timeFormat.value).locale(lang.value);
      if (newDate.isValid() && checkDateWithinRange(newDate)) {
        const { year: year2, month: month2, date: date4 } = getUnits(innerDate.value);
        innerDate.value = newDate.year(year2).month(month2).date(date4);
        userInputTime.value = null;
        timePickerVisible.value = false;
        emit(innerDate.value, true);
      }
    };
    const handleVisibleDateChange = (value) => {
      const newDate = dayjs(value, dateFormat.value).locale(lang.value);
      if (newDate.isValid()) {
        if (disabledDate2 && disabledDate2(newDate.toDate())) {
          return;
        }
        const { hour, minute, second } = getUnits(innerDate.value);
        innerDate.value = newDate.hour(hour).minute(minute).second(second);
        userInputDate.value = null;
        emit(innerDate.value, true);
      }
    };
    const isValidValue = (date4) => {
      return dayjs.isDayjs(date4) && date4.isValid() && (disabledDate2 ? !disabledDate2(date4.toDate()) : true);
    };
    const formatToString = (value) => {
      if (selectionMode.value === "dates") {
        return value.map((_2) => _2.format(props.format));
      }
      return value.format(props.format);
    };
    const parseUserInput = (value) => {
      return dayjs(value, props.format).locale(lang.value);
    };
    const getDefaultValue2 = () => {
      const parseDate2 = dayjs(defaultValue.value).locale(lang.value);
      if (!defaultValue.value) {
        const defaultTimeDValue = defaultTimeD.value;
        return dayjs().hour(defaultTimeDValue.hour()).minute(defaultTimeDValue.minute()).second(defaultTimeDValue.second()).locale(lang.value);
      }
      return parseDate2;
    };
    const handleFocusPicker = async () => {
      var _a2;
      if (["week", "month", "year", "date"].includes(selectionMode.value)) {
        (_a2 = currentViewRef.value) == null ? void 0 : _a2.focus();
        if (selectionMode.value === "week") {
          handleKeyControl(EVENT_CODE.down);
        }
      }
    };
    const handleKeydownTable = (event) => {
      const { code } = event;
      const validCode = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right,
        EVENT_CODE.home,
        EVENT_CODE.end,
        EVENT_CODE.pageUp,
        EVENT_CODE.pageDown
      ];
      if (validCode.includes(code)) {
        handleKeyControl(code);
        event.stopPropagation();
        event.preventDefault();
      }
      if ([EVENT_CODE.enter, EVENT_CODE.space].includes(code) && userInputDate.value === null && userInputTime.value === null) {
        event.preventDefault();
        emit(innerDate.value, false);
      }
    };
    const handleKeyControl = (code) => {
      var _a2;
      const { up, down, left, right, home, end, pageUp, pageDown } = EVENT_CODE;
      const mapping = {
        year: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date4, step) => date4.setFullYear(date4.getFullYear() + step)
        },
        month: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date4, step) => date4.setMonth(date4.getMonth() + step)
        },
        week: {
          [up]: -1,
          [down]: 1,
          [left]: -1,
          [right]: 1,
          offset: (date4, step) => date4.setDate(date4.getDate() + step * 7)
        },
        date: {
          [up]: -7,
          [down]: 7,
          [left]: -1,
          [right]: 1,
          [home]: (date4) => -date4.getDay(),
          [end]: (date4) => -date4.getDay() + 6,
          [pageUp]: (date4) => -new Date(date4.getFullYear(), date4.getMonth(), 0).getDate(),
          [pageDown]: (date4) => new Date(date4.getFullYear(), date4.getMonth() + 1, 0).getDate(),
          offset: (date4, step) => date4.setDate(date4.getDate() + step)
        }
      };
      const newDate = innerDate.value.toDate();
      while (Math.abs(innerDate.value.diff(newDate, "year", true)) < 1) {
        const map = mapping[keyboardMode.value];
        if (!map)
          return;
        map.offset(newDate, isFunction(map[code]) ? map[code](newDate) : (_a2 = map[code]) != null ? _a2 : 0);
        if (disabledDate2 && disabledDate2(newDate)) {
          break;
        }
        const result = dayjs(newDate).locale(lang.value);
        innerDate.value = result;
        contextEmit("pick", result, true);
        break;
      }
    };
    const handlePanelChange = (mode) => {
      contextEmit("panel-change", innerDate.value.toDate(), mode, currentView.value);
    };
    watch(() => selectionMode.value, (val) => {
      if (["month", "year"].includes(val)) {
        currentView.value = val;
        return;
      }
      currentView.value = "date";
    }, { immediate: true });
    watch(() => currentView.value, () => {
      popper == null ? void 0 : popper.updatePopper();
    });
    watch(() => defaultValue.value, (val) => {
      if (val) {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    watch(() => props.parsedValue, (val) => {
      if (val) {
        if (selectionMode.value === "dates")
          return;
        if (Array.isArray(val))
          return;
        innerDate.value = val;
      } else {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    contextEmit("set-picker-option", ["isValidValue", isValidValue]);
    contextEmit("set-picker-option", ["formatToString", formatToString]);
    contextEmit("set-picker-option", ["parseUserInput", parseUserInput]);
    contextEmit("set-picker-option", ["handleFocusPicker", handleFocusPicker]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(dpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => handleShortcutClick(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$p);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(dpNs).e("time-header"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t2)("el.datepicker.selectDate"),
                  "model-value": unref(visibleDate),
                  size: "small",
                  onInput: _cache[0] || (_cache[0] = (val) => userInputDate.value = val),
                  onChange: handleVisibleDateChange
                }, null, 8, ["placeholder", "model-value"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t2)("el.datepicker.selectTime"),
                  "model-value": unref(visibleTime),
                  size: "small",
                  onFocus: onTimePickerInputFocus,
                  onInput: _cache[1] || (_cache[1] = (val) => userInputTime.value = val),
                  onChange: handleVisibleTimeChange
                }, null, 8, ["placeholder", "model-value"]),
                createVNode(unref(TimePickPanel), {
                  visible: timePickerVisible.value,
                  format: unref(timeFormat),
                  "time-arrow-control": unref(arrowControl),
                  "parsed-value": innerDate.value,
                  onPick: handleTimePick
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [unref(ClickOutside), handleTimePickClose]
              ])
            ], 2)) : createCommentVNode("v-if", true),
            withDirectives(createElementVNode("div", {
              class: normalizeClass([
                unref(dpNs).e("header"),
                (currentView.value === "year" || currentView.value === "month") && unref(dpNs).e("header--bordered")
              ])
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(dpNs).e("prev-btn"))
              }, [
                createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.prevYear`),
                  class: normalizeClass(["d-arrow-left", unref(ppNs).e("icon-btn")]),
                  onClick: _cache[2] || (_cache[2] = ($event) => moveByYear(false))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$i),
                withDirectives(createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.prevMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  onClick: _cache[3] || (_cache[3] = ($event) => moveByMonth(false))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$a), [
                  [vShow, currentView.value === "date"]
                ])
              ], 2),
              createElementVNode("span", {
                role: "button",
                class: normalizeClass(unref(dpNs).e("header-label")),
                "aria-live": "polite",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys(($event) => showPicker("year"), ["enter"])),
                onClick: _cache[5] || (_cache[5] = ($event) => showPicker("year"))
              }, toDisplayString(unref(yearLabel)), 35),
              withDirectives(createElementVNode("span", {
                role: "button",
                "aria-live": "polite",
                tabindex: "0",
                class: normalizeClass([
                  unref(dpNs).e("header-label"),
                  { active: currentView.value === "month" }
                ]),
                onKeydown: _cache[6] || (_cache[6] = withKeys(($event) => showPicker("month"), ["enter"])),
                onClick: _cache[7] || (_cache[7] = ($event) => showPicker("month"))
              }, toDisplayString(unref(t2)(`el.datepicker.month${unref(month) + 1}`)), 35), [
                [vShow, currentView.value === "date"]
              ]),
              createElementVNode("span", {
                class: normalizeClass(unref(dpNs).e("next-btn"))
              }, [
                withDirectives(createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.nextMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  onClick: _cache[8] || (_cache[8] = ($event) => moveByMonth(true))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_4$5), [
                  [vShow, currentView.value === "date"]
                ]),
                createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.nextYear`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[9] || (_cache[9] = ($event) => moveByYear(true))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_5$5)
              ], 2)
            ], 2), [
              [vShow, currentView.value !== "time"]
            ]),
            createElementVNode("div", {
              class: normalizeClass(unref(ppNs).e("content")),
              onKeydown: handleKeydownTable
            }, [
              currentView.value === "date" ? (openBlock(), createBlock(DateTable, {
                key: 0,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onPick: handleDatePick
              }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : createCommentVNode("v-if", true),
              currentView.value === "year" ? (openBlock(), createBlock(YearTable, {
                key: 1,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "disabled-date": unref(disabledDate2),
                "parsed-value": _ctx.parsedValue,
                onPick: handleYearPick
              }, null, 8, ["date", "disabled-date", "parsed-value"])) : createCommentVNode("v-if", true),
              currentView.value === "month" ? (openBlock(), createBlock(MonthTable, {
                key: 2,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate2),
                onPick: handleMonthPick
              }, null, 8, ["date", "parsed-value", "disabled-date"])) : createCommentVNode("v-if", true)
            ], 34)
          ], 2)
        ], 2),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          withDirectives(createVNode(unref(ElButton), {
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: changeToNow
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.now")), 1)
            ]),
            _: 1
          }, 8, ["class"]), [
            [vShow, unref(selectionMode) !== "dates"]
          ]),
          createVNode(unref(ElButton), {
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: onConfirm
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ], 2), [
          [vShow, unref(footerVisible) && currentView.value === "date"]
        ])
      ], 2);
    };
  }
});
var DatePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);
const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps
});
const useShortcut = (lang) => {
  const { emit } = getCurrentInstance();
  const attrs = useAttrs$1();
  const slots = useSlots();
  const handleShortcutClick = (shortcut) => {
    const shortcutValues = isFunction(shortcut.value) ? shortcut.value() : shortcut.value;
    if (shortcutValues) {
      emit("pick", [
        dayjs(shortcutValues[0]).locale(lang.value),
        dayjs(shortcutValues[1]).locale(lang.value)
      ]);
      return;
    }
    if (shortcut.onClick) {
      shortcut.onClick({
        attrs,
        slots,
        emit
      });
    }
  };
  return handleShortcutClick;
};
const useRangePicker = (props, {
  defaultValue,
  leftDate,
  rightDate,
  unit,
  onParsedValueChanged
}) => {
  const { emit } = getCurrentInstance();
  const { pickerNs } = inject(ROOT_PICKER_INJECTION_KEY);
  const drpNs = useNamespace("date-range-picker");
  const { t: t2, lang } = useLocale();
  const handleShortcutClick = useShortcut(lang);
  const minDate = ref();
  const maxDate = ref();
  const rangeState = ref({
    endDate: null,
    selecting: false
  });
  const handleChangeRange = (val) => {
    rangeState.value = val;
  };
  const handleRangeConfirm = (visible = false) => {
    const _minDate = unref(minDate);
    const _maxDate = unref(maxDate);
    if (isValidRange([_minDate, _maxDate])) {
      emit("pick", [_minDate, _maxDate], visible);
    }
  };
  const onSelect = (selecting) => {
    rangeState.value.selecting = selecting;
    if (!selecting) {
      rangeState.value.endDate = null;
    }
  };
  const restoreDefault = () => {
    const [start, end] = getDefaultValue(unref(defaultValue), {
      lang: unref(lang),
      unit,
      unlinkPanels: props.unlinkPanels
    });
    minDate.value = void 0;
    maxDate.value = void 0;
    leftDate.value = start;
    rightDate.value = end;
  };
  watch(defaultValue, (val) => {
    if (val) {
      restoreDefault();
    }
  }, { immediate: true });
  watch(() => props.parsedValue, (parsedValue2) => {
    if (isArray(parsedValue2) && parsedValue2.length === 2) {
      const [start, end] = parsedValue2;
      minDate.value = start;
      leftDate.value = start;
      maxDate.value = end;
      onParsedValueChanged(unref(minDate), unref(maxDate));
    } else {
      restoreDefault();
    }
  }, { immediate: true });
  return {
    minDate,
    maxDate,
    rangeState,
    lang,
    ppNs: pickerNs,
    drpNs,
    handleChangeRange,
    handleRangeConfirm,
    handleShortcutClick,
    onSelect,
    t: t2
  };
};
const _hoisted_1$o = ["onClick"];
const _hoisted_2$h = ["disabled"];
const _hoisted_3$9 = ["disabled"];
const _hoisted_4$4 = ["disabled"];
const _hoisted_5$4 = ["disabled"];
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "panel-date-range",
  props: panelDateRangeProps,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const unit = "month";
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      disabledDate: disabledDate2,
      cellClassName,
      format: format2,
      defaultTime,
      arrowControl,
      clearable
    } = pickerBase.props;
    const shortcuts = toRef(pickerBase.props, "shortcuts");
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const { lang } = useLocale();
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect,
      t: t2
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit,
      onParsedValueChanged
    });
    const dateUserInput = ref({
      min: null,
      max: null
    });
    const timeUserInput = ref({
      min: null,
      max: null
    });
    const leftLabel = computed$1(() => {
      return `${leftDate.value.year()} ${t2("el.datepicker.year")} ${t2(`el.datepicker.month${leftDate.value.month() + 1}`)}`;
    });
    const rightLabel = computed$1(() => {
      return `${rightDate.value.year()} ${t2("el.datepicker.year")} ${t2(`el.datepicker.month${rightDate.value.month() + 1}`)}`;
    });
    const leftYear = computed$1(() => {
      return leftDate.value.year();
    });
    const leftMonth = computed$1(() => {
      return leftDate.value.month();
    });
    const rightYear = computed$1(() => {
      return rightDate.value.year();
    });
    const rightMonth = computed$1(() => {
      return rightDate.value.month();
    });
    const hasShortcuts = computed$1(() => !!shortcuts.value.length);
    const minVisibleDate = computed$1(() => {
      if (dateUserInput.value.min !== null)
        return dateUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(dateFormat.value);
      return "";
    });
    const maxVisibleDate = computed$1(() => {
      if (dateUserInput.value.max !== null)
        return dateUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(dateFormat.value);
      return "";
    });
    const minVisibleTime = computed$1(() => {
      if (timeUserInput.value.min !== null)
        return timeUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(timeFormat.value);
      return "";
    });
    const maxVisibleTime = computed$1(() => {
      if (timeUserInput.value.max !== null)
        return timeUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(timeFormat.value);
      return "";
    });
    const timeFormat = computed$1(() => {
      return extractTimeFormat(format2);
    });
    const dateFormat = computed$1(() => {
      return extractDateFormat(format2);
    });
    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, "year");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("year");
    };
    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, "month");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "year");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "year");
      }
      handlePanelChange("year");
    };
    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "month");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, "year");
      handlePanelChange("year");
    };
    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, "month");
      handlePanelChange("month");
    };
    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, "year");
      handlePanelChange("year");
    };
    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, "month");
      handlePanelChange("month");
    };
    const handlePanelChange = (mode) => {
      emit("panel-change", [leftDate.value.toDate(), rightDate.value.toDate()], mode);
    };
    const enableMonthArrow = computed$1(() => {
      const nextMonth = (leftMonth.value + 1) % 12;
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value);
    });
    const enableYearArrow = computed$1(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12;
    });
    const btnDisabled = computed$1(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidRange([minDate.value, maxDate.value]));
    });
    const showTime = computed$1(() => props.type === "datetime" || props.type === "datetimerange");
    const formatEmit = (emitDayjs, index2) => {
      if (!emitDayjs)
        return;
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index2] || defaultTime).locale(lang.value);
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      return emitDayjs;
    };
    const handleRangePick = (val, close = true) => {
      const min_ = val.minDate;
      const max_ = val.maxDate;
      const minDate_ = formatEmit(min_, 0);
      const maxDate_ = formatEmit(max_, 1);
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [min_.toDate(), max_ && max_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close || showTime.value)
        return;
      handleRangeConfirm();
    };
    const minTimePickerVisible = ref(false);
    const maxTimePickerVisible = ref(false);
    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false;
    };
    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false;
    };
    const handleDateInput = (value, type4) => {
      dateUserInput.value[type4] = value;
      const parsedValueD = dayjs(value, dateFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (disabledDate2 && disabledDate2(parsedValueD.toDate())) {
          return;
        }
        if (type4 === "min") {
          leftDate.value = parsedValueD;
          minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            rightDate.value = parsedValueD.add(1, "month");
            maxDate.value = minDate.value.add(1, "month");
          }
        } else {
          rightDate.value = parsedValueD;
          maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            leftDate.value = parsedValueD.subtract(1, "month");
            minDate.value = maxDate.value.subtract(1, "month");
          }
        }
      }
    };
    const handleDateChange = (_2, type4) => {
      dateUserInput.value[type4] = null;
    };
    const handleTimeInput = (value, type4) => {
      timeUserInput.value[type4] = value;
      const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (type4 === "min") {
          minTimePickerVisible.value = true;
          minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value;
          }
        } else {
          maxTimePickerVisible.value = true;
          maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          rightDate.value = maxDate.value;
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value;
          }
        }
      }
    };
    const handleTimeChange = (value, type4) => {
      timeUserInput.value[type4] = null;
      if (type4 === "min") {
        leftDate.value = minDate.value;
        minTimePickerVisible.value = false;
      } else {
        rightDate.value = maxDate.value;
        maxTimePickerVisible.value = false;
      }
    };
    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min)
        return;
      if (value) {
        leftDate.value = value;
        minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        minTimePickerVisible.value = visible;
      }
      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value;
        rightDate.value = value;
      }
    };
    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max)
        return;
      if (value) {
        rightDate.value = value;
        maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        maxTimePickerVisible.value = visible;
      }
      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value;
      }
    };
    const handleClear = () => {
      leftDate.value = getDefaultValue(unref(defaultValue), {
        lang: unref(lang),
        unit: "month",
        unlinkPanels: props.unlinkPanels
      })[0];
      rightDate.value = leftDate.value.add(1, "month");
      emit("pick", null);
    };
    const formatToString = (value) => {
      return isArray(value) ? value.map((_2) => _2.format(format2)) : value.format(format2);
    };
    const parseUserInput = (value) => {
      return isArray(value) ? value.map((_2) => dayjs(_2, format2).locale(lang.value)) : dayjs(value, format2).locale(lang.value);
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const minDateMonth = (minDate2 == null ? void 0 : minDate2.month()) || 0;
        const maxDateYear = maxDate2.year();
        const maxDateMonth = maxDate2.month();
        rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? maxDate2.add(1, unit) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit);
        if (maxDate2) {
          rightDate.value = rightDate.value.hour(maxDate2.hour()).minute(maxDate2.minute()).second(maxDate2.second());
        }
      }
    }
    emit("set-picker-option", ["isValidValue", isValidRange]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["handleClear", handleClear]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$o);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(drpNs).e("time-header"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(drpNs).e("editors-wrap"))
              }, [
                createElementVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.startDate"),
                    class: normalizeClass(unref(drpNs).e("editor")),
                    "model-value": unref(minVisibleDate),
                    onInput: _cache[0] || (_cache[0] = (val) => handleDateInput(val, "min")),
                    onChange: _cache[1] || (_cache[1] = (val) => handleDateChange(val, "min"))
                  }, null, 8, ["disabled", "placeholder", "class", "model-value"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.startTime"),
                    "model-value": unref(minVisibleTime),
                    onFocus: _cache[2] || (_cache[2] = ($event) => minTimePickerVisible.value = true),
                    onInput: _cache[3] || (_cache[3] = (val) => handleTimeInput(val, "min")),
                    onChange: _cache[4] || (_cache[4] = (val) => handleTimeChange(val, "min"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                  createVNode(unref(TimePickPanel), {
                    visible: minTimePickerVisible.value,
                    format: unref(timeFormat),
                    "datetime-role": "start",
                    "time-arrow-control": unref(arrowControl),
                    "parsed-value": leftDate.value,
                    onPick: handleMinTimePick
                  }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMinTimeClose]
                ])
              ], 2),
              createElementVNode("span", null, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("span", {
                class: normalizeClass([unref(drpNs).e("editors-wrap"), "is-right"])
              }, [
                createElementVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.endDate"),
                    "model-value": unref(maxVisibleDate),
                    readonly: !unref(minDate),
                    onInput: _cache[5] || (_cache[5] = (val) => handleDateInput(val, "max")),
                    onChange: _cache[6] || (_cache[6] = (val) => handleDateChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.endTime"),
                    "model-value": unref(maxVisibleTime),
                    readonly: !unref(minDate),
                    onFocus: _cache[7] || (_cache[7] = ($event) => unref(minDate) && (maxTimePickerVisible.value = true)),
                    onInput: _cache[8] || (_cache[8] = (val) => handleTimeInput(val, "max")),
                    onChange: _cache[9] || (_cache[9] = (val) => handleTimeChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                  createVNode(unref(TimePickPanel), {
                    "datetime-role": "end",
                    visible: maxTimePickerVisible.value,
                    format: unref(timeFormat),
                    "time-arrow-control": unref(arrowControl),
                    "parsed-value": rightDate.value,
                    onPick: handleMaxTimePick
                  }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMaxTimeClose]
                ])
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  onClick: leftPrevYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  onClick: leftPrevMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-right"]),
                  onClick: leftNextYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$h)) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { "is-disabled": !unref(enableMonthArrow) }
                  ], "arrow-right"]),
                  onClick: leftNextMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$9)) : createCommentVNode("v-if", true),
                createElementVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(DateTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2),
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-left"]),
                  onClick: rightPrevYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_4$4)) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { "is-disabled": !unref(enableMonthArrow) }
                  ], "arrow-left"]),
                  onClick: rightPrevMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_5$4)) : createCommentVNode("v-if", true),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: rightNextYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  onClick: rightNextMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createElementVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(DateTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2),
        unref(showTime) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          unref(clearable) ? (openBlock(), createBlock(unref(ElButton), {
            key: 0,
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: handleClear
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          createVNode(unref(ElButton), {
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(btnDisabled),
            onClick: _cache[10] || (_cache[10] = ($event) => unref(handleRangeConfirm)(false))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var DateRangePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);
const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps
});
const panelMonthRangeEmits = ["pick", "set-picker-option"];
const useMonthRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate
}) => {
  const { t: t2 } = useLocale();
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(1, "year");
    if (!unlinkPanels) {
      rightDate.value = rightDate.value.subtract(1, "year");
    }
  };
  const rightNextYear = () => {
    if (!unlinkPanels) {
      leftDate.value = leftDate.value.add(1, "year");
    }
    rightDate.value = rightDate.value.add(1, "year");
  };
  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(1, "year");
  };
  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(1, "year");
  };
  const leftLabel = computed$1(() => {
    return `${leftDate.value.year()} ${t2("el.datepicker.year")}`;
  });
  const rightLabel = computed$1(() => {
    return `${rightDate.value.year()} ${t2("el.datepicker.year")}`;
  });
  const leftYear = computed$1(() => {
    return leftDate.value.year();
  });
  const rightYear = computed$1(() => {
    return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
  });
  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear
  };
};
const _hoisted_1$n = ["onClick"];
const _hoisted_2$g = ["disabled"];
const _hoisted_3$8 = ["disabled"];
const __default__$q = {
  name: "DatePickerMonthRange"
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  ...__default__$q,
  props: panelMonthRangeProps,
  emits: panelMonthRangeEmits,
  setup(__props, { emit }) {
    const props = __props;
    const unit = "year";
    const { lang } = useLocale();
    const pickerBase = inject("EP_PICKER_BASE");
    const { shortcuts, disabledDate: disabledDate2, format: format2 } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit,
      onParsedValueChanged
    });
    const hasShortcuts = computed$1(() => !!shortcuts.length);
    const {
      leftPrevYear,
      rightNextYear,
      leftNextYear,
      rightPrevYear,
      leftLabel,
      rightLabel,
      leftYear,
      rightYear
    } = useMonthRangeHeader({
      unlinkPanels: toRef(props, "unlinkPanels"),
      leftDate,
      rightDate
    });
    const enableYearArrow = computed$1(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1;
    });
    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate;
      const maxDate_ = val.maxDate;
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close)
        return;
      handleRangeConfirm();
    };
    const formatToString = (days) => {
      return days.map((day) => day.format(format2));
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const maxDateYear = maxDate2.year();
        rightDate.value = minDateYear === maxDateYear ? maxDate2.add(1, unit) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit);
      }
    }
    emit("set-picker-option", ["formatToString", formatToString]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          {
            "has-sidebar": Boolean(_ctx.$slots.sidebar) || unref(hasShortcuts)
          }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$n);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(leftPrevYear) && unref(leftPrevYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { [unref(ppNs).is("disabled")]: !unref(enableYearArrow) }
                  ], "d-arrow-right"]),
                  onClick: _cache[1] || (_cache[1] = (...args) => unref(leftNextYear) && unref(leftNextYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$g)) : createCommentVNode("v-if", true),
                createElementVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2),
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-left"]),
                  onClick: _cache[2] || (_cache[2] = (...args) => unref(rightPrevYear) && unref(rightPrevYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$8)) : createCommentVNode("v-if", true),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[3] || (_cache[3] = (...args) => unref(rightNextYear) && unref(rightNextYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createElementVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var MonthRangePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);
const getPanel = function(type4) {
  switch (type4) {
    case "daterange":
    case "datetimerange": {
      return DateRangePickPanel;
    }
    case "monthrange": {
      return MonthRangePickPanel;
    }
    default: {
      return DatePickPanel;
    }
  }
};
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
var DatePicker = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    ...datePickerProps
  },
  emits: ["update:modelValue"],
  setup(props, {
    expose,
    emit,
    slots
  }) {
    const ns2 = useNamespace("picker-panel");
    provide("ElPopperOptions", reactive(toRef(props, "popperOptions")));
    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns2
    });
    const commonPicker = ref();
    const refProps = {
      focus: (focusStartInput = true) => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.focus(focusStartInput);
      }
    };
    expose(refProps);
    const onModelValueUpdated = (val) => {
      emit("update:modelValue", val);
    };
    return () => {
      var _a2;
      const format2 = (_a2 = props.format) != null ? _a2 : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      const Component = getPanel(props.type);
      return createVNode(CommonPicker, mergeProps(props, {
        "format": format2,
        "type": props.type,
        "ref": commonPicker,
        "onUpdate:modelValue": onModelValueUpdated
      }), {
        default: (scopedProps) => createVNode(Component, scopedProps, null),
        "range-separator": slots["range-separator"]
      });
    };
  }
});
const _DatePicker = DatePicker;
_DatePicker.install = (app) => {
  app.component(_DatePicker.name, _DatePicker);
};
const ElDatePicker = _DatePicker;
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns2 = useNamespace("overlay");
    const onMaskClick = (e2) => {
      emit("click", e2);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns2.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h$1("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogContentProps = buildProps({
  center: {
    type: Boolean,
    default: false
  },
  closeIcon: {
    type: iconPropType,
    default: ""
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  }
});
const dialogContentEmits = {
  close: () => true
};
const _hoisted_1$m = ["aria-label"];
const _hoisted_2$f = ["id"];
const __default__$p = { name: "ElDialogContent" };
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  ...__default__$p,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props) {
    const props = __props;
    const { t: t2 } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns: ns2, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed$1(() => props.draggable);
    useDraggable(dialogRef, headerRef, draggable);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).is("fullscreen", _ctx.fullscreen),
          unref(ns2).is("draggable", unref(draggable)),
          { [unref(ns2).m("center")]: _ctx.center },
          _ctx.customClass
        ]),
        style: normalizeStyle(unref(style)),
        tabindex: "-1",
        onClick: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createElementVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass(unref(ns2).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("span", {
              role: "heading",
              class: normalizeClass(unref(ns2).e("title"))
            }, toDisplayString(_ctx.title), 3)
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t2)("el.dialog.close"),
            class: normalizeClass(unref(ns2).e("headerbtn")),
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns2).e("close"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, _hoisted_1$m)) : createCommentVNode("v-if", true)
        ], 2),
        createElementVNode("div", {
          id: unref(bodyId),
          class: normalizeClass(unref(ns2).e("body"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_2$f),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass(unref(ns2).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: false
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex2 = ref(props.zIndex || nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed$1(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex2.value = props.zIndex ? zIndex2.value++ : nextZIndex();
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    titleId,
    bodyId,
    closed,
    style,
    rendered,
    visible,
    zIndex: zIndex2
  };
};
const _hoisted_1$l = ["aria-label", "aria-labelledby", "aria-describedby"];
const __default__$o = {
  name: "ElDialog"
};
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  ...__default__$o,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed$1(() => !!slots.title));
    const ns2 = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      rendered,
      zIndex: zIndex2,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns: ns2,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed$1(() => props.draggable && !props.fullscreen);
    expose({
      visible,
      dialogContentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        createVNode(Transition, {
          name: "dialog-fade",
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave),
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(ElOverlay), {
              "custom-mask-event": "",
              mask: _ctx.modal,
              "overlay-class": _ctx.modalClass,
              "z-index": unref(zIndex2)
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": _ctx.title || void 0,
                  "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                  "aria-describedby": unref(bodyId),
                  class: normalizeClass(`${unref(ns2).namespace.value}-overlay-dialog`),
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
                  onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
                  onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
                }, [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      unref(rendered) ? (openBlock(), createBlock(ElDialogContent, {
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: dialogContentRef,
                        "custom-class": _ctx.customClass,
                        center: _ctx.center,
                        "close-icon": _ctx.closeIcon,
                        draggable: unref(draggable),
                        fullscreen: _ctx.fullscreen,
                        "show-close": _ctx.showClose,
                        title: _ctx.title,
                        onClose: unref(handleClose)
                      }, createSlots({
                        header: withCtx(() => [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns2).e("title")
                          }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                        ]),
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        _ctx.$slots.footer ? {
                          name: "footer",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1032, ["custom-class", "center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : createCommentVNode("v-if", true)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onReleaseRequested"])
                ], 42, _hoisted_1$l)
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const ElDialog = withInstall(Dialog);
const formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  },
  scrollToError: Boolean
});
const formEmits = {
  validate: (prop, isValid, message) => (isArray(prop) || isString(prop)) && isBoolean(isValid) && isString(message)
};
function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([]);
  const autoLabelWidth = computed$1(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index2 = potentialLabelWidthArr.value.indexOf(width);
    return index2;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index2 = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index2, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index2 = getLabelWidthIndex(val);
    if (index2 > -1) {
      potentialLabelWidthArr.value.splice(index2, 1);
    }
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
const filterFields = (fields, props) => {
  const normalized = castArray$1(props);
  return normalized.length > 0 ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
};
const __default__$n = {
  name: "ElForm"
};
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  props: formProps,
  emits: formEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const fields = [];
    const formSize = useSize();
    const ns2 = useNamespace("form");
    const formClasses = computed$1(() => {
      const { labelPosition, inline } = props;
      return [
        ns2.b(),
        ns2.m(formSize.value || "default"),
        {
          [ns2.m(`label-${labelPosition}`)]: labelPosition,
          [ns2.m("inline")]: inline
        }
      ];
    });
    const addField = (field) => {
      fields.push(field);
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = (properties = []) => {
      if (!props.model) {
        return;
      }
      filterFields(fields, properties).forEach((field) => field.resetField());
    };
    const clearValidate = (props2 = []) => {
      filterFields(fields, props2).forEach((field) => field.clearValidate());
    };
    const isValidatable = computed$1(() => {
      const hasModel = !!props.model;
      return hasModel;
    });
    const obtainValidateFields = (props2) => {
      if (fields.length === 0)
        return [];
      const filteredFields = filterFields(fields, props2);
      if (!filteredFields.length) {
        return [];
      }
      return filteredFields;
    };
    const validate = async (callback) => validateField(void 0, callback);
    const doValidateField = async (props2 = []) => {
      if (!isValidatable.value)
        return false;
      const fields2 = obtainValidateFields(props2);
      if (fields2.length === 0)
        return true;
      let validationErrors = {};
      for (const field of fields2) {
        try {
          await field.validate("");
        } catch (fields3) {
          validationErrors = {
            ...validationErrors,
            ...fields3
          };
        }
      }
      if (Object.keys(validationErrors).length === 0)
        return true;
      return Promise.reject(validationErrors);
    };
    const validateField = async (modelProps = [], callback) => {
      const shouldThrow = !isFunction(callback);
      try {
        const result = await doValidateField(modelProps);
        if (result === true) {
          callback == null ? void 0 : callback(result);
        }
        return result;
      } catch (e2) {
        const invalidFields = e2;
        if (props.scrollToError) {
          scrollToField(Object.keys(invalidFields)[0]);
        }
        callback == null ? void 0 : callback(false, invalidFields);
        return shouldThrow && Promise.reject(invalidFields);
      }
    };
    const scrollToField = (prop) => {
      var _a2;
      const field = filterFields(fields, prop)[0];
      if (field) {
        (_a2 = field.$el) == null ? void 0 : _a2.scrollIntoView();
      }
    };
    watch(() => props.rules, () => {
      if (props.validateOnRuleChange) {
        validate().catch((err) => debugWarn());
      }
    }, { deep: true });
    provide(formContextKey, reactive({
      ...toRefs(props),
      emit,
      resetFields,
      clearValidate,
      validateField,
      addField,
      removeField,
      ...useFormLabelWidth()
    }));
    expose({
      validate,
      validateField,
      resetFields,
      clearValidate,
      scrollToField
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass(unref(formClasses))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Form = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn2) {
  return Function.toString.call(fn2).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && false) {
  warning = function warning3(type4, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e2) {
        return typeof e2 === "string";
      })) {
        console.warn(type4, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i2 = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x2) {
      if (x2 === "%%") {
        return "%";
      }
      if (i2 >= len) {
        return x2;
      }
      switch (x2) {
        case "%s":
          return String(args[i2++]);
        case "%d":
          return Number(args[i2++]);
        case "%j":
          try {
            return JSON.stringify(args[i2++]);
          } catch (_2) {
            return "[Circular]";
          }
          break;
        default:
          return x2;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a2) {
    func(a2, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index2 = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index2;
    index2 = index2 + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k2) {
    ret.push.apply(ret, objArr[k2] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e2) {
      return e2;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e2) {
    return e2;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v2 = value;
  for (var i2 = 0; i2 < path.length; i2++) {
    if (v2 == void 0) {
      return v2;
    }
    v2 = v2[path[i2]];
  }
  return v2;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s2 in source) {
      if (source.hasOwnProperty(s2)) {
        var value = source[s2];
        if (typeof value === "object" && typeof target[s2] === "object") {
          target[s2] = _extends({}, target[s2], value);
        } else {
          target[s2] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var urlReg;
var getUrlRegex = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b2 = function b3(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b2(options) + v4 + b2(options) + ")|(?:" + b2(options) + v6 + b2(options) + ")", "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("" + b2(options) + v4 + b2(options), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("" + b2(options) + v6 + b2(options), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", "i");
  return urlReg;
};
var pattern$2 = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e2) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var required2 = function required3(rule, value, callback, source, options) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type4);
  callback(errors);
};
var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone2() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o2, oc) {
    var _this2 = this;
    if (o2 === void 0) {
      o2 = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o2;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add(e2) {
        if (Array.isArray(e2)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e2);
        } else {
          errors.push(e2);
        }
      }
      for (var i2 = 0; i2 < results.length; i2++) {
        add(results[i2]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys2 = options.keys || Object.keys(this.rules);
    keys2.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r2) {
        var rule = r2;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e2) {
        if (e2 === void 0) {
          e2 = [];
        }
        var errorList = Array.isArray(e2) ? e2 : [e2];
        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error);
          if (!options.suppressValidatorError) {
            setTimeout(function() {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e2) {
          return cb(e2);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");
    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }
    if (keys2.length === 1 && keys2[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  };
  return Schema2;
}();
Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type4] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success"
];
const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: definePropType([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: definePropType([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  }
});
const COMPONENT_NAME$1 = "ElLabelWrap";
var FormLabelWrap = defineComponent({
  name: COMPONENT_NAME$1,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, {
    slots
  }) {
    const formContext = inject(formContextKey, void 0);
    const formItemContext = inject(formItemContextKey);
    if (!formItemContext)
      throwError(COMPONENT_NAME$1, "usage: <el-form-item><label-wrap /></el-form-item>");
    const ns2 = useNamespace("form");
    const el = ref();
    const computedWidth = ref(0);
    const getLabelWidth = () => {
      var _a2;
      if ((_a2 = el.value) == null ? void 0 : _a2.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    onMounted(() => {
      updateLabelWidthFn();
    });
    onBeforeUnmount(() => {
      updateLabelWidth("remove");
    });
    onUpdated(() => updateLabelWidthFn());
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
      }
    });
    useResizeObserver(computed$1(() => {
      var _a2, _b;
      return (_b = (_a2 = el.value) == null ? void 0 : _a2.firstElementChild) != null ? _b : null;
    }), updateLabelWidthFn);
    return () => {
      var _a2, _b;
      if (!slots)
        return null;
      const {
        isAutoWidth
      } = props;
      if (isAutoWidth) {
        const autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
        const style = {};
        if (autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
          const marginPosition = formContext.labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return createVNode("div", {
          "ref": el,
          "class": [ns2.be("item", "label-wrap")],
          "style": style
        }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
      } else {
        return createVNode(Fragment, {
          "ref": el
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
      }
    };
  }
});
const _hoisted_1$k = ["role", "aria-labelledby"];
const __default__$m = {
  name: "ElFormItem"
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  props: formItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    const formContext = inject(formContextKey, void 0);
    const parentFormItemContext = inject(formItemContextKey, void 0);
    const _size = useSize(void 0, { formItem: false });
    const ns2 = useNamespace("form-item");
    const labelId = useId().value;
    const inputIds = ref([]);
    const validateState = ref("");
    const validateStateDebounced = refDebounced(validateState, 100);
    const validateMessage = ref("");
    const formItemRef = ref();
    let initialValue = void 0;
    let isResettingField = false;
    const labelStyle = computed$1(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top") {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (labelWidth)
        return { width: labelWidth };
      return {};
    });
    const contentStyle = computed$1(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top" || (formContext == null ? void 0 : formContext.inline)) {
        return {};
      }
      if (!props.label && !props.labelWidth && isNested) {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (!props.label && !slots.label) {
        return { marginLeft: labelWidth };
      }
      return {};
    });
    const formItemClasses = computed$1(() => [
      ns2.b(),
      ns2.m(_size.value),
      ns2.is("error", validateState.value === "error"),
      ns2.is("validating", validateState.value === "validating"),
      ns2.is("success", validateState.value === "success"),
      ns2.is("required", isRequired.value || props.required),
      ns2.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
      (formContext == null ? void 0 : formContext.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [ns2.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon }
    ]);
    const _inlineMessage = computed$1(() => isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
    const validateClasses = computed$1(() => [
      ns2.e("error"),
      { [ns2.em("error", "inline")]: _inlineMessage.value }
    ]);
    const propString = computed$1(() => {
      if (!props.prop)
        return "";
      return isString(props.prop) ? props.prop : props.prop.join(".");
    });
    const hasLabel = computed$1(() => {
      return !!(props.label || slots.label);
    });
    const labelFor = computed$1(() => {
      return props.for || inputIds.value.length === 1 ? inputIds.value[0] : void 0;
    });
    const isGroup = computed$1(() => {
      return !labelFor.value && hasLabel.value;
    });
    const isNested = !!parentFormItemContext;
    const fieldValue = computed$1(() => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop) {
        return;
      }
      return getProp(model, props.prop).value;
    });
    const _rules = computed$1(() => {
      const rules2 = props.rules ? castArray$1(props.rules) : [];
      const formRules = formContext == null ? void 0 : formContext.rules;
      if (formRules && props.prop) {
        const _rules2 = getProp(formRules, props.prop).value;
        if (_rules2) {
          rules2.push(...castArray$1(_rules2));
        }
      }
      if (props.required !== void 0) {
        rules2.push({ required: !!props.required });
      }
      return rules2;
    });
    const validateEnabled = computed$1(() => _rules.value.length > 0);
    const getFilteredRule = (trigger) => {
      const rules2 = _rules.value;
      return rules2.filter((rule) => {
        if (!rule.trigger || !trigger)
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      }).map(({ trigger: trigger2, ...rule }) => rule);
    };
    const isRequired = computed$1(() => _rules.value.some((rule) => rule.required === true));
    const shouldShowError = computed$1(() => {
      var _a2;
      return validateStateDebounced.value === "error" && props.showMessage && ((_a2 = formContext == null ? void 0 : formContext.showMessage) != null ? _a2 : true);
    });
    const currentLabel = computed$1(() => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
    const setValidationState = (state) => {
      validateState.value = state;
    };
    const onValidationFailed = (error) => {
      var _a2, _b;
      const { errors, fields } = error;
      if (!errors || !fields) {
        console.error(error);
      }
      setValidationState("error");
      validateMessage.value = errors ? (_b = (_a2 = errors == null ? void 0 : errors[0]) == null ? void 0 : _a2.message) != null ? _b : `${props.prop} is required` : "";
      formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
    };
    const onValidationSucceeded = () => {
      setValidationState("success");
      formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
    };
    const doValidate = async (rules2) => {
      const modelName = propString.value;
      const validator = new Schema({
        [modelName]: rules2
      });
      return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
        onValidationSucceeded();
        return true;
      }).catch((err) => {
        onValidationFailed(err);
        return Promise.reject(err);
      });
    };
    const validate = async (trigger, callback) => {
      if (isResettingField) {
        isResettingField = false;
        return false;
      }
      const hasCallback = isFunction(callback);
      if (!validateEnabled.value) {
        callback == null ? void 0 : callback(false);
        return false;
      }
      const rules2 = getFilteredRule(trigger);
      if (rules2.length === 0) {
        callback == null ? void 0 : callback(true);
        return true;
      }
      setValidationState("validating");
      return doValidate(rules2).then(() => {
        callback == null ? void 0 : callback(true);
        return true;
      }).catch((err) => {
        const { fields } = err;
        callback == null ? void 0 : callback(false, fields);
        return hasCallback ? false : Promise.reject(fields);
      });
    };
    const clearValidate = () => {
      setValidationState("");
      validateMessage.value = "";
    };
    const resetField = async () => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop)
        return;
      const computedValue = getProp(model, props.prop);
      if (!isEqual(computedValue.value, initialValue)) {
        isResettingField = true;
        computedValue.value = clone(initialValue);
      }
      await nextTick();
      clearValidate();
    };
    const addInputId = (id) => {
      if (!inputIds.value.includes(id)) {
        inputIds.value.push(id);
      }
    };
    const removeInputId = (id) => {
      inputIds.value = inputIds.value.filter((listId) => listId !== id);
    };
    watch(() => props.error, (val) => {
      validateMessage.value = val || "";
      setValidationState(val ? "error" : "");
    }, { immediate: true });
    watch(() => props.validateStatus, (val) => setValidationState(val || ""));
    const context = reactive({
      ...toRefs(props),
      $el: formItemRef,
      size: _size,
      validateState,
      labelId,
      inputIds,
      isGroup,
      addInputId,
      removeInputId,
      resetField,
      clearValidate,
      validate
    });
    provide(formItemContextKey, context);
    onMounted(() => {
      if (props.prop) {
        formContext == null ? void 0 : formContext.addField(context);
        initialValue = clone(fieldValue.value);
      }
    });
    onBeforeUnmount(() => {
      formContext == null ? void 0 : formContext.removeField(context);
    });
    expose({
      size: _size,
      validateMessage,
      validateState,
      validate,
      clearValidate,
      resetField
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", {
        ref_key: "formItemRef",
        ref: formItemRef,
        class: normalizeClass(unref(formItemClasses)),
        role: unref(isGroup) ? "group" : void 0,
        "aria-labelledby": unref(isGroup) ? unref(labelId) : void 0
      }, [
        createVNode(unref(FormLabelWrap), {
          "is-auto-width": unref(labelStyle).width === "auto",
          "update-all": ((_a2 = unref(formContext)) == null ? void 0 : _a2.labelWidth) === "auto"
        }, {
          default: withCtx(() => [
            unref(hasLabel) ? (openBlock(), createBlock(resolveDynamicComponent(unref(labelFor) ? "label" : "div"), {
              key: 0,
              id: unref(labelId),
              for: unref(labelFor),
              class: normalizeClass(unref(ns2).e("label")),
              style: normalizeStyle(unref(labelStyle))
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "label", { label: unref(currentLabel) }, () => [
                  createTextVNode(toDisplayString(unref(currentLabel)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        createElementVNode("div", {
          class: normalizeClass(unref(ns2).e("content")),
          style: normalizeStyle(unref(contentStyle))
        }, [
          renderSlot(_ctx.$slots, "default"),
          createVNode(Transition, {
            name: `${unref(ns2).namespace.value}-zoom-in-top`
          }, {
            default: withCtx(() => [
              unref(shouldShowError) ? renderSlot(_ctx.$slots, "error", {
                key: 0,
                error: validateMessage.value
              }, () => [
                createElementVNode("div", {
                  class: normalizeClass(unref(validateClasses))
                }, toDisplayString(validateMessage.value), 3)
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, _hoisted_1$k);
    };
  }
});
var FormItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const ElForm = withInstall(Form, {
  FormItem
});
const ElFormItem = withNoopInstall(FormItem);
const imageViewerProps = buildProps({
  urlList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  teleported: {
    type: Boolean,
    default: false
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  }
});
const imageViewerEmits = {
  close: () => true,
  switch: (index2) => isNumber(index2)
};
const _hoisted_1$j = ["src"];
const __default__$l = {
  name: "ElImageViewer"
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(__props, { emit }) {
    const props = __props;
    const modes = {
      CONTAIN: {
        name: "contain",
        icon: markRaw(full_screen_default)
      },
      ORIGINAL: {
        name: "original",
        icon: markRaw(scale_to_original_default)
      }
    };
    const mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("image-viewer");
    const { nextZIndex } = useZIndex();
    const wrapper = ref();
    const imgRefs = ref([]);
    const scopeEventListener = effectScope();
    const loading = ref(true);
    const index2 = ref(props.initialIndex);
    const mode = shallowRef(modes.CONTAIN);
    const transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const isSingle = computed$1(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed$1(() => {
      return index2.value === 0;
    });
    const isLast = computed$1(() => {
      return index2.value === props.urlList.length - 1;
    });
    const currentImg = computed$1(() => {
      return props.urlList[index2.value];
    });
    const imgStyle = computed$1(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      switch (deg % 360) {
        case 90:
        case -270:
          [translateX, translateY] = [translateY, -translateX];
          break;
        case 180:
        case -180:
          [translateX, translateY] = [-translateX, -translateY];
          break;
        case 270:
        case -90:
          [translateX, translateY] = [-translateY, translateX];
          break;
      }
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === modes.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    const computedZIndex = computed$1(() => {
      return isNumber(props.zIndex) ? props.zIndex : nextZIndex();
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = throttle((e2) => {
        switch (e2.code) {
          case EVENT_CODE.esc:
            props.closeOnPressEscape && hide();
            break;
          case EVENT_CODE.space:
            toggleMode();
            break;
          case EVENT_CODE.left:
            prev();
            break;
          case EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case EVENT_CODE.right:
            next();
            break;
          case EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = throttle((e2) => {
        const delta = e2.wheelDelta ? e2.wheelDelta : -e2.detail;
        if (delta > 0) {
          handleActions("zoomIn", {
            zoomRate: 1.2,
            enableTransition: false
          });
        } else {
          handleActions("zoomOut", {
            zoomRate: 1.2,
            enableTransition: false
          });
        }
      });
      scopeEventListener.run(() => {
        useEventListener(document, "keydown", keydownHandler);
        useEventListener(document, mousewheelEventName, mousewheelHandler);
      });
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e2) {
      loading.value = false;
      e2.target.alt = t2("el.image.error");
    }
    function handleMouseDown(e2) {
      if (loading.value || e2.button !== 0 || !wrapper.value)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const startX = e2.pageX;
      const startY = e2.pageY;
      const dragHandler = throttle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = useEventListener(document, "mousemove", dragHandler);
      useEventListener(document, "mouseup", () => {
        removeMousemove();
      });
      e2.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value)
        return;
      const modeNames = keysOf(modes);
      const modeValues = Object.values(modes);
      const currentMode = mode.value.name;
      const index22 = modeValues.findIndex((i2) => i2.name === currentMode);
      const nextIndex = (index22 + 1) % modeNames.length;
      mode.value = modes[modeNames[nextIndex]];
      reset();
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index2.value = (index2.value - 1 + len) % len;
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index2.value = (index2.value + 1) % len;
    }
    function handleActions(action, options = {}) {
      if (loading.value)
        return;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 1.4,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > 0.2) {
            transform.value.scale = Number.parseFloat((transform.value.scale / zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          if (transform.value.scale < 7) {
            transform.value.scale = Number.parseFloat((transform.value.scale * zoomRate).toFixed(3));
          }
          break;
        case "clockwise":
          transform.value.deg += rotateDeg;
          break;
        case "anticlockwise":
          transform.value.deg -= rotateDeg;
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    watch(index2, (val) => {
      reset();
      emit("switch", val);
    });
    onMounted(() => {
      var _a2, _b;
      registerEventListener();
      (_b = (_a2 = wrapper.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.teleported
      }, [
        createVNode(Transition, {
          name: "viewer-fade",
          appear: ""
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              ref_key: "wrapper",
              ref: wrapper,
              tabindex: -1,
              class: normalizeClass(unref(ns2).e("wrapper")),
              style: normalizeStyle({ zIndex: unref(computedZIndex) })
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(ns2).e("mask")),
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"]))
              }, null, 2),
              createCommentVNode(" CLOSE "),
              createElementVNode("span", {
                class: normalizeClass([unref(ns2).e("btn"), unref(ns2).e("close")]),
                onClick: hide
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 1
                })
              ], 2),
              createCommentVNode(" ARROW "),
              !unref(isSingle) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createElementVNode("span", {
                  class: normalizeClass([
                    unref(ns2).e("btn"),
                    unref(ns2).e("prev"),
                    unref(ns2).is("disabled", !_ctx.infinite && unref(isFirst))
                  ]),
                  onClick: prev
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createElementVNode("span", {
                  class: normalizeClass([
                    unref(ns2).e("btn"),
                    unref(ns2).e("next"),
                    unref(ns2).is("disabled", !_ctx.infinite && unref(isLast))
                  ]),
                  onClick: next
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2)
              ], 64)) : createCommentVNode("v-if", true),
              createCommentVNode(" ACTIONS "),
              createElementVNode("div", {
                class: normalizeClass([unref(ns2).e("btn"), unref(ns2).e("actions")])
              }, [
                createElementVNode("div", {
                  class: normalizeClass(unref(ns2).e("actions__inner"))
                }, [
                  createVNode(unref(ElIcon), {
                    onClick: _cache[1] || (_cache[1] = ($event) => handleActions("zoomOut"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(zoom_out_default))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[2] || (_cache[2] = ($event) => handleActions("zoomIn"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(zoom_in_default))
                    ]),
                    _: 1
                  }),
                  createElementVNode("i", {
                    class: normalizeClass(unref(ns2).e("actions__divider"))
                  }, null, 2),
                  createVNode(unref(ElIcon), { onClick: toggleMode }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(mode).icon)))
                    ]),
                    _: 1
                  }),
                  createElementVNode("i", {
                    class: normalizeClass(unref(ns2).e("actions__divider"))
                  }, null, 2),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[3] || (_cache[3] = ($event) => handleActions("anticlockwise"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(refresh_left_default))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[4] || (_cache[4] = ($event) => handleActions("clockwise"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(refresh_right_default))
                    ]),
                    _: 1
                  })
                ], 2)
              ], 2),
              createCommentVNode(" CANVAS "),
              createElementVNode("div", {
                class: normalizeClass(unref(ns2).e("canvas"))
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.urlList, (url2, i2) => {
                  return withDirectives((openBlock(), createElementBlock("img", {
                    ref_for: true,
                    ref: (el) => imgRefs.value[i2] = el,
                    key: url2,
                    src: url2,
                    style: normalizeStyle(unref(imgStyle)),
                    class: normalizeClass(unref(ns2).e("img")),
                    onLoad: handleImgLoad,
                    onError: handleImgError,
                    onMousedown: handleMouseDown
                  }, null, 46, _hoisted_1$j)), [
                    [vShow, i2 === index2.value]
                  ]);
                }), 128))
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ], 6)
          ]),
          _: 3
        })
      ], 8, ["disabled"]);
    };
  }
});
var ImageViewer = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);
const ElImageViewer = withInstall(ImageViewer);
const imageProps = buildProps({
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  loading: {
    type: String,
    values: ["eager", "lazy"]
  },
  lazy: {
    type: Boolean,
    default: false
  },
  scrollContainer: {
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  previewTeleported: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  }
});
const imageEmits = {
  load: (evt) => evt instanceof Event,
  error: (evt) => evt instanceof Event,
  switch: (val) => isNumber(val),
  close: () => true,
  show: () => true
};
const _hoisted_1$i = ["src", "loading"];
const _hoisted_2$e = { key: 0 };
const __default__$k = {
  name: "ElImage",
  inheritAttrs: false
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  props: imageProps,
  emits: imageEmits,
  setup(__props, { emit }) {
    const props = __props;
    let prevOverflow = "";
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("image");
    const rawAttrs = useAttrs$1();
    const attrs = useAttrs();
    const imageSrc = ref();
    const hasLoadError = ref(false);
    const isLoading = ref(true);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    const supportLoading = isClient && "loading" in HTMLImageElement.prototype;
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = computed$1(() => rawAttrs.style);
    const imageStyle = computed$1(() => {
      const { fit } = props;
      if (isClient && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed$1(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed$1(() => {
      const { previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0;
      }
      return previewIndex;
    });
    const isManual = computed$1(() => {
      if (props.loading === "eager")
        return false;
      return !supportLoading && props.loading === "lazy" || props.lazy;
    });
    const loadImage = () => {
      if (!isClient)
        return;
      isLoading.value = true;
      hasLoadError.value = false;
      imageSrc.value = props.src;
    };
    function handleLoad(event) {
      isLoading.value = false;
      hasLoadError.value = false;
      emit("load", event);
    }
    function handleError(event) {
      isLoading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200);
    async function addLazyLoadListener() {
      var _a2;
      if (!isClient)
        return;
      await nextTick();
      const { scrollContainer } = props;
      if (isElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (isString(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a2 = document.querySelector(scrollContainer)) != null ? _a2 : void 0;
      } else if (container.value) {
        _scrollContainer.value = getScrollContainer(container.value);
      }
      if (_scrollContainer.value) {
        stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
        setTimeout(() => handleLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!isClient || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener == null ? void 0 : stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e2) {
      if (!e2.ctrlKey)
        return;
      if (e2.deltaY < 0) {
        e2.preventDefault();
        return false;
      } else if (e2.deltaY > 0) {
        e2.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
      emit("show");
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(() => props.src, () => {
      if (isManual.value) {
        isLoading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onMounted(() => {
      if (isManual.value) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: normalizeClass([unref(ns2).b(), _ctx.$attrs.class]),
        style: normalizeStyle(unref(containerStyle))
      }, [
        imageSrc.value !== void 0 && !hasLoadError.value ? (openBlock(), createElementBlock("img", mergeProps({ key: 0 }, unref(attrs), {
          src: imageSrc.value,
          loading: _ctx.loading,
          style: unref(imageStyle),
          class: [
            unref(ns2).e("inner"),
            unref(preview) && unref(ns2).e("preview"),
            isLoading.value && unref(ns2).is("loading")
          ],
          onClick: clickHandler,
          onLoad: handleLoad,
          onError: handleError
        }), null, 16, _hoisted_1$i)) : createCommentVNode("v-if", true),
        isLoading.value || hasLoadError.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns2).e("wrapper"))
        }, [
          isLoading.value ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
            createElementVNode("div", {
              class: normalizeClass(unref(ns2).e("placeholder"))
            }, null, 2)
          ]) : hasLoadError.value ? renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
            createElementVNode("div", {
              class: normalizeClass(unref(ns2).e("error"))
            }, toDisplayString(unref(t2)("el.image.error")), 3)
          ]) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        unref(preview) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          showViewer.value ? (openBlock(), createBlock(unref(ElImageViewer), {
            key: 0,
            "z-index": _ctx.zIndex,
            "initial-index": unref(imageIndex),
            infinite: _ctx.infinite,
            "url-list": _ctx.previewSrcList,
            "hide-on-click-modal": _ctx.hideOnClickModal,
            teleported: _ctx.previewTeleported,
            "close-on-press-escape": _ctx.closeOnPressEscape,
            onClose: closeViewer,
            onSwitch: switchViewer
          }, {
            default: withCtx(() => [
              _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
                renderSlot(_ctx.$slots, "viewer")
              ])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["z-index", "initial-index", "infinite", "url-list", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : createCommentVNode("v-if", true)
        ], 64)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Image$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);
const ElImage = withInstall(Image$1);
const paginationPrevProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: iconPropType
  }
});
const paginationPrevEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1$h = ["disabled", "aria-disabled"];
const _hoisted_2$d = { key: 0 };
const __default__$j = {
  name: "ElPaginationPrev"
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  ...__default__$j,
  props: paginationPrevProps,
  emits: paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const internalDisabled = computed$1(() => props.disabled || props.currentPage <= 1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: unref(internalDisabled),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2$d, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.prevIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$h);
    };
  }
});
var Prev = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const paginationNextProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: iconPropType
  }
});
const _hoisted_1$g = ["disabled", "aria-disabled"];
const _hoisted_2$c = { key: 0 };
const __default__$i = {
  name: "ElPaginationNext"
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  ...__default__$i,
  props: paginationNextProps,
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const internalDisabled = computed$1(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: unref(internalDisabled),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (openBlock(), createElementBlock("span", _hoisted_2$c, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$g);
    };
  }
});
var Next = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const selectGroupKey = "ElSelectGroup";
const selectKey = "ElSelect";
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const isObject2 = computed$1(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  const itemSelected = computed$1(() => {
    if (!select.props.multiple) {
      return isEqual2(props.value, select.props.modelValue);
    } else {
      return contains(select.props.modelValue, props.value);
    }
  });
  const limitReached = computed$1(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed$1(() => {
    return props.label || (isObject2.value ? "" : props.value);
  });
  const currentValue = computed$1(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed$1(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject2.value) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw$1(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const isEqual2 = (a2, b2) => {
    if (!isObject2.value) {
      return a2 === b2;
    } else {
      const { valueKey } = select.props;
      return get(a2, valueKey) === get(b2, valueKey);
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!props.created && !remote) {
      if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  const { queryChange } = toRaw$1(select);
  watch(queryChange, (changes) => {
    const { query } = unref(changes);
    const regexp4 = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp4.test(currentLabel.value) || props.created;
    if (!states.visible) {
      select.filteredOptionsCount--;
    }
  });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem
  };
}
const _sfc_main$v = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns2 = useNamespace("select");
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    const key = vm.value;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const { selected } = select;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      nextTick(() => {
        if (select.cachedOptions.get(key) === vm && !doesSelected) {
          select.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true);
      }
    }
    return {
      ns: ns2,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.ns.be("dropdown", "item"),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      {
        selected: _ctx.itemSelected,
        hover: _ctx.hover
      }
    ]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const _sfc_main$u = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns2 = useNamespace("select");
    const popperClass = computed$1(() => select.props.popperClass);
    const isMultiple = computed$1(() => select.props.multiple);
    const isFitInputWidth = computed$1(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a2;
      minWidth.value = `${(_a2 = select.selectWrapper) == null ? void 0 : _a2.offsetWidth}px`;
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select.selectWrapper, updateMinWidth);
    });
    return {
      ns: ns2,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function useSelectStates(props) {
  const { t: t2 } = useLocale();
  return reactive({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t2("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 11,
    tagInMultiLine: false
  });
}
const useSelect = (props, states, ctx) => {
  const { t: t2 } = useLocale();
  const ns2 = useNamespace("select");
  const reference = ref(null);
  const input = ref(null);
  const tooltipRef = ref(null);
  const tags = ref(null);
  const selectWrapper = ref(null);
  const scrollbar = ref(null);
  const hoverOption = ref(-1);
  const queryChange = shallowRef({ query: "" });
  const groupQueryChange = shallowRef("");
  const { form, formItem } = useFormItem();
  const readonly2 = computed$1(() => !props.filterable || props.multiple || !states.visible);
  const selectDisabled = computed$1(() => props.disabled || (form == null ? void 0 : form.disabled));
  const showClose = computed$1(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  const iconComponent = computed$1(() => props.remote && props.filterable ? "" : props.suffixIcon);
  const iconReverse = computed$1(() => ns2.is("reverse", iconComponent.value && states.visible));
  const debounce$1 = computed$1(() => props.remote ? 300 : 0);
  const emptyText = computed$1(() => {
    if (props.loading) {
      return props.loadingText || t2("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0)
        return false;
      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t2("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t2("el.select.noData");
      }
    }
    return null;
  });
  const optionsArray = computed$1(() => Array.from(states.options.values()));
  const cachedOptionsArray = computed$1(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed$1(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  const selectSize = useSize();
  const collapseTagSize = computed$1(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropMenuVisible = computed$1({
    get() {
      return states.visible && emptyText.value !== false;
    },
    set(val) {
      states.visible = val;
    }
  });
  watch([() => selectDisabled.value, () => selectSize.value, () => form == null ? void 0 : form.size], () => {
    nextTick(() => {
      resetInputHeight();
    });
  });
  watch(() => props.placeholder, (val) => {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      resetInputHeight();
      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }
    setSelected();
    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => states.visible, (val) => {
    var _a2, _b, _c;
    if (!val) {
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      nextTick(() => {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });
      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }
          if (props.filterable)
            states.query = states.selectedLabel;
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;
        if (props.multiple) {
          (_c = input.value) == null ? void 0 : _c.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = `${states.selectedLabel}`;
            states.selectedLabel = "";
          }
        }
        handleQueryChange(states.query);
        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          triggerRef(queryChange);
          triggerRef(groupQueryChange);
        }
      }
    }
    ctx.emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a2, _b, _c;
    if (!isClient)
      return;
    (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    if (props.multiple) {
      resetInputHeight();
    }
    const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
    if (!Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoverIndex, (val) => {
    if (typeof val === "number" && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable)
      return;
    nextTick(() => {
      var _a2, _b;
      if (!reference.value)
        return;
      const input2 = reference.value.$el.querySelector("input");
      const _tags = tags.value;
      const sizeInMap = getComponentSize(selectSize.value || (form == null ? void 0 : form.size));
      input2.style.height = `${(states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2}px`;
      states.tagInMultiLine = Number.parseFloat(input2.style.height) >= sizeInMap;
      if (states.visible && emptyText.value !== false) {
        (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      }
    });
  };
  const handleQueryChange = (val) => {
    if (states.previousQuery === val || states.isOnComposition)
      return;
    if (states.previousQuery === null && (typeof props.filterMethod === "function" || typeof props.remoteMethod === "function")) {
      states.previousQuery = val;
      return;
    }
    states.previousQuery = val;
    nextTick(() => {
      var _a2, _b;
      if (states.visible)
        (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    });
    states.hoverIndex = -1;
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }
    if (props.remote && typeof props.remoteMethod === "function") {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (typeof props.filterMethod === "function") {
      props.filterMethod(val);
      triggerRef(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      triggerRef(queryChange);
      triggerRef(groupQueryChange);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  };
  const managePlaceholder = () => {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n2) => n2.visible && !n2.disabled && !n2.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n2) => n2.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    var _a2;
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      if ((_a2 = option.props) == null ? void 0 : _a2.created) {
        states.createdLabel = option.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      if (props.filterable)
        states.query = states.selectedLabel;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
    nextTick(() => {
      resetInputHeight();
    });
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i2 = states.cachedOptions.size - 1; i2 >= 0; i2--) {
      const cachedOption = cachedOptionsArray.value[i2];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    if (props.multiple) {
      newOption.hitState = false;
    }
    return newOption;
  };
  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return get(item, valueKey) === get(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };
  const handleResize = () => {
    var _a2, _b;
    resetInputWidth();
    (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    if (props.multiple && !props.filterable)
      resetInputHeight();
  };
  const resetInputWidth = () => {
    var _a2;
    states.inputWidth = (_a2 = reference.value) == null ? void 0 : _a2.$el.getBoundingClientRect().width;
  };
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const debouncedQueryChange = debounce((e2) => {
    handleQueryChange(e2.target.value);
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };
  const deletePrevTag = (e2) => {
    if (e2.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
    if (e2.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };
  const deleteTag = (event, tag) => {
    const index2 = states.selected.indexOf(tag);
    if (index2 > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index2, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag.value);
    }
    event.stopPropagation();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : "";
    if (typeof value !== "string") {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.visible = false;
    ctx.emit("clear");
  };
  const handleOptionSelect = (option, byClick) => {
    var _a2;
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable)
        (_a2 = input.value) == null ? void 0 : _a2.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      states.visible = false;
    }
    states.isSilentBlur = byClick;
    setSoftFocus();
    if (states.visible)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject$1(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index2 = -1;
    arr.some((item, i2) => {
      if (toRaw$1(get(item, valueKey)) === get(value, valueKey)) {
        index2 = i2;
        return true;
      }
      return false;
    });
    return index2;
  };
  const setSoftFocus = () => {
    states.softFocus = true;
    const _input = input.value || reference.value;
    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };
  const scrollToOption = (option) => {
    var _a2, _b, _c, _d, _e;
    const targetOption = Array.isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${ns2.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbar.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--;
      states.filteredOptionsCount--;
      states.options.delete(key);
    }
  };
  const resetInputState = (e2) => {
    if (e2.code !== EVENT_CODE.backspace)
      toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };
  const toggleLastOptionHitState = (hit) => {
    if (!Array.isArray(states.selected))
      return;
    const option = states.selected[states.selected.length - 1];
    if (!option)
      return;
    if (hit === true || hit === false) {
      option.hitState = hit;
      return hit;
    }
    option.hitState = !option.hitState;
    return option.hitState;
  };
  const handleComposition = (event) => {
    const text = event.target.value;
    if (event.type === "compositionend") {
      states.isOnComposition = false;
      nextTick(() => handleQueryChange(text));
    } else {
      const lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };
  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected));
  };
  const handleFocus = (event) => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true;
        }
        states.visible = true;
      }
      ctx.emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const blur = () => {
    var _a2;
    states.visible = false;
    (_a2 = reference.value) == null ? void 0 : _a2.blur();
  };
  const handleBlur = (event) => {
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        ctx.emit("blur", event);
      }
    });
    states.softFocus = false;
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClose = () => {
    states.visible = false;
  };
  const handleKeydownEscape = (event) => {
    if (states.visible) {
      event.preventDefault();
      event.stopPropagation();
      states.visible = false;
    }
  };
  const toggleMenu = () => {
    var _a2;
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        states.visible = !states.visible;
      }
      if (states.visible) {
        (_a2 = input.value || reference.value) == null ? void 0 : _a2.focus();
      }
    }
  };
  const selectOption = () => {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], void 0);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject$1(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed$1(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0)
      return;
    if (states.isOnComposition)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoverIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  return {
    optionsArray,
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly: readonly2,
    resetInputHeight,
    showClose,
    iconComponent,
    iconReverse,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    reference,
    input,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar
  };
};
const COMPONENT_NAME = "ElSelect";
const _sfc_main$t = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: [String, Object],
      default: circle_close_default
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: [String, Object],
      default: arrow_up_default
    },
    tagType: { ...tagProps.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const nsSelect = useNamespace("select");
    const nsInput = useNamespace("input");
    const { t: t2 } = useLocale();
    const states = useSelectStates(props);
    const {
      optionsArray,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange
    } = useSelect(props, states, ctx);
    const { focus } = useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = toRefs(states);
    const wrapperKls = computed$1(() => {
      const classList = [nsSelect.b()];
      const _selectSize = unref(selectSize);
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize));
      }
      if (props.disabled) {
        classList.push(nsSelect.m("disabled"));
      }
      return classList;
    });
    const selectTagsStyle = computed$1(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: "100%"
    }));
    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || t2("el.select.placeholder");
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }
      useResizeObserver(selectWrapper, handleResize);
      if (props.remote && props.multiple) {
        resetInputHeight();
      }
      nextTick(() => {
        const refEl = reference.value && reference.value.$el;
        if (!refEl)
          return;
        inputWidth.value = refEl.getBoundingClientRect().width;
        if (ctx.slots.prefix) {
          const prefix = refEl.querySelector(`.${nsInput.e("prefix")}`);
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30);
        }
      });
      setSelected();
    });
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = computed$1(() => {
      var _a2, _b;
      return (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,
      wrapperKls,
      selectTagsStyle,
      nsSelect
    };
  }
});
const _hoisted_1$f = { class: "select-trigger" };
const _hoisted_2$b = ["disabled", "autocomplete"];
const _hoisted_3$7 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectWrapper",
    class: normalizeClass(_ctx.wrapperKls),
    onClick: _cache[22] || (_cache[22] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropMenuVisible,
      placement: "bottom-start",
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onShow: _ctx.handleMenuEnter
    }, {
      default: withCtx(() => [
        createElementVNode("div", _hoisted_1$f, [
          _ctx.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: normalizeClass(_ctx.nsSelect.e("tags")),
            style: normalizeStyle(_ctx.selectTagsStyle)
          }, [
            _ctx.collapseTags && _ctx.selected.length ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass([
                _ctx.nsSelect.b("tags-wrapper"),
                { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
              ])
            }, [
              createVNode(_component_el_tag, {
                closable: !_ctx.selectDisabled && !_ctx.selected[0].isDisabled,
                size: _ctx.collapseTagSize,
                hit: _ctx.selected[0].hitState,
                type: _ctx.tagType,
                "disable-transitions": "",
                onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.selected[0]))
              }, {
                default: withCtx(() => [
                  createElementVNode("span", {
                    class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                    style: normalizeStyle({ maxWidth: _ctx.inputWidth - 123 + "px" })
                  }, toDisplayString(_ctx.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              _ctx.selected.length > 1 ? (openBlock(), createBlock(_component_el_tag, {
                key: 0,
                closable: false,
                size: _ctx.collapseTagSize,
                type: _ctx.tagType,
                "disable-transitions": ""
              }, {
                default: withCtx(() => [
                  _ctx.collapseTagsTooltip ? (openBlock(), createBlock(_component_el_tooltip, {
                    key: 0,
                    disabled: _ctx.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: _ctx.effect,
                    placement: "bottom",
                    teleported: _ctx.teleported
                  }, {
                    default: withCtx(() => [
                      createElementVNode("span", {
                        class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                      }, "+ " + toDisplayString(_ctx.selected.length - 1), 3)
                    ]),
                    content: withCtx(() => [
                      createElementVNode("div", {
                        class: normalizeClass(_ctx.nsSelect.e("collapse-tags"))
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected.slice(1), (item, idx) => {
                          return openBlock(), createElementBlock("div", {
                            key: idx,
                            class: normalizeClass(_ctx.nsSelect.e("collapse-tag"))
                          }, [
                            (openBlock(), createBlock(_component_el_tag, {
                              key: _ctx.getValueKey(item),
                              class: "in-tooltip",
                              closable: !_ctx.selectDisabled && !item.isDisabled,
                              size: _ctx.collapseTagSize,
                              hit: item.hitState,
                              type: _ctx.tagType,
                              "disable-transitions": "",
                              style: { margin: "2px" },
                              onClose: ($event) => _ctx.deleteTag($event, item)
                            }, {
                              default: withCtx(() => [
                                createElementVNode("span", {
                                  class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                                  style: normalizeStyle({
                                    maxWidth: _ctx.inputWidth - 75 + "px"
                                  })
                                }, toDisplayString(item.currentLabel), 7)
                              ]),
                              _: 2
                            }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                          ], 2);
                        }), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                  }, "+ " + toDisplayString(_ctx.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true),
            createCommentVNode(" <div> "),
            !_ctx.collapseTags ? (openBlock(), createBlock(Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  class: normalizeClass([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text")),
                          style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, toDisplayString(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            createCommentVNode(" </div> "),
            _ctx.filterable ? withDirectives((openBlock(), createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.query = $event),
              type: "text",
              class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: normalizeStyle({
                marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? `${_ctx.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[5] || (_cache[5] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[8] || (_cache[8] = withKeys((...args) => _ctx.handleKeydownEscape && _ctx.handleKeydownEscape(...args), ["esc"])),
                _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[10] || (_cache[10] = withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[11] || (_cache[11] = withKeys(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[15] || (_cache[15] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, _hoisted_2$b)), [
              [vModelText, _ctx.query]
            ]) : createCommentVNode("v-if", true)
          ], 6)) : createCommentVNode("v-if", true),
          createVNode(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: normalizeClass([_ctx.nsSelect.is("focus", _ctx.visible)]),
            tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              withKeys(_ctx.handleKeydownEscape, ["esc"]),
              _cache[19] || (_cache[19] = withKeys(($event) => _ctx.visible = false, ["tab"]))
            ],
            onMouseenter: _cache[20] || (_cache[20] = ($event) => _ctx.inputHovering = true),
            onMouseleave: _cache[21] || (_cache[21] = ($event) => _ctx.inputHovering = false)
          }, createSlots({
            suffix: withCtx(() => [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: withCtx(() => [
                createElementVNode("div", _hoisted_3$7, [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, null, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([
                _ctx.nsSelect.is("empty", !_ctx.allowCreate && Boolean(_ctx.query) && _ctx.filteredOptionsCount === 0)
              ])
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
              }, toDisplayString(_ctx.emptyText), 3))
            ], 64)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 2)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const _sfc_main$s = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns2 = useNamespace("select");
    const visible = ref(true);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const select = inject(selectKey);
    onMounted(() => {
      children.value = flattedChildren(instance.subTree);
    });
    const flattedChildren = (node) => {
      const children2 = [];
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          var _a2;
          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a2 = child.children) == null ? void 0 : _a2.length) {
            children2.push(...flattedChildren(child));
          }
        });
      }
      return children2;
    };
    const { groupQueryChange } = toRaw$1(select);
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true);
    });
    return {
      visible,
      ns: ns2
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const usePagination = () => inject(elPaginationKey, {});
const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "default"
  }
});
const __default__$h = {
  name: "ElPaginationSizes"
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  ...__default__$h,
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(__props, { emit }) {
    const props = __props;
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("pagination");
    const pagination = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPageSizes = computed$1(() => props.pageSizes);
    function handleChange(val) {
      var _a2;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a2 = pagination.handleSizeChange) == null ? void 0 : _a2.call(pagination, Number(val));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns2).e("sizes"))
      }, [
        createVNode(unref(ElSelect), {
          "model-value": innerPageSize.value,
          disabled: _ctx.disabled,
          "popper-class": _ctx.popperClass,
          size: _ctx.size,
          onChange: handleChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(innerPageSizes), (item) => {
              return openBlock(), createBlock(unref(ElOption), {
                key: item,
                value: item,
                label: item + unref(t2)("el.pagination.pagesize")
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["model-value", "disabled", "popper-class", "size"])
      ], 2);
    };
  }
});
var Sizes = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const _hoisted_1$e = ["disabled"];
const __default__$g = {
  name: "ElPaginationJumper"
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  setup(__props) {
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("pagination");
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref();
    const innerValue = computed$1(() => {
      var _a2;
      return (_a2 = userInput.value) != null ? _a2 : currentPage == null ? void 0 : currentPage.value;
    });
    function handleInput(val) {
      userInput.value = +val;
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(+val);
      userInput.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns2).e("jump")),
        disabled: unref(disabled)
      }, [
        createTextVNode(toDisplayString(unref(t2)("el.pagination.goto")) + " ", 1),
        createVNode(unref(ElInput), {
          size: "small",
          class: normalizeClass([unref(ns2).e("editor"), unref(ns2).is("in-pagination")]),
          min: 1,
          max: unref(pageCount),
          disabled: unref(disabled),
          "model-value": unref(innerValue),
          type: "number",
          "onUpdate:modelValue": handleInput,
          onChange: handleChange
        }, null, 8, ["class", "max", "disabled", "model-value"]),
        createTextVNode(" " + toDisplayString(unref(t2)("el.pagination.pageClassifier")), 1)
      ], 10, _hoisted_1$e);
    };
  }
});
var Jumper = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const paginationTotalProps = buildProps({
  total: {
    type: Number,
    default: 1e3
  }
});
const _hoisted_1$d = ["disabled"];
const __default__$f = {
  name: "ElPaginationTotal"
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: paginationTotalProps,
  setup(__props) {
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("pagination");
    const { disabled } = usePagination();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns2).e("total")),
        disabled: unref(disabled)
      }, toDisplayString(unref(t2)("el.pagination.total", {
        total: _ctx.total
      })), 11, _hoisted_1$d);
    };
  }
});
var Total = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const paginationPagerProps = buildProps({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
});
const _hoisted_1$c = ["onKeyup"];
const _hoisted_2$a = ["aria-current", "tabindex"];
const _hoisted_3$6 = ["tabindex"];
const _hoisted_4$3 = ["aria-current", "tabindex"];
const _hoisted_5$3 = ["tabindex"];
const _hoisted_6 = ["aria-current", "tabindex"];
const __default__$e = {
  name: "ElPaginationPager"
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: paginationPagerProps,
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const nsPager = useNamespace("pager");
    const nsIcon = useNamespace("icon");
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quickPrevHover = ref(false);
    const quickNextHover = ref(false);
    const quickPrevFocus = ref(false);
    const quickNextFocus = ref(false);
    const pagers = computed$1(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array4 = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i2 = startPage; i2 < pageCount; i2++) {
          array4.push(i2);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i2 = 2; i2 < pagerCount; i2++) {
          array4.push(i2);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i2 = currentPage - offset; i2 <= currentPage + offset; i2++) {
          array4.push(i2);
        }
      } else {
        for (let i2 = 2; i2 < pageCount; i2++) {
          array4.push(i2);
        }
      }
      return array4;
    });
    const tabindex = computed$1(() => props.disabled ? -1 : 0);
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onMouseEnter(forward = false) {
      if (props.disabled)
        return;
      if (forward) {
        quickPrevHover.value = true;
      } else {
        quickNextHover.value = true;
      }
    }
    function onFocus(forward = false) {
      if (forward) {
        quickPrevFocus.value = true;
      } else {
        quickNextFocus.value = true;
      }
    }
    function onEnter(e2) {
      const target = e2.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit("change", newPage);
        }
      } else if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("more")) {
        onPagerClick(e2);
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(unref(nsPager).b()),
        onClick: onPagerClick,
        onKeyup: withKeys(onEnter, ["enter"])
      }, [
        _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
          key: 0,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === 1),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === 1,
          tabindex: unref(tabindex)
        }, " 1 ", 10, _hoisted_2$a)) : createCommentVNode("v-if", true),
        showPrevMore.value ? (openBlock(), createElementBlock("li", {
          key: 1,
          class: normalizeClass([
            "more",
            "btn-quickprev",
            unref(nsIcon).b(),
            unref(nsPager).is("disabled", _ctx.disabled)
          ]),
          tabindex: unref(tabindex),
          onMouseenter: _cache[0] || (_cache[0] = ($event) => onMouseEnter(true)),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => quickPrevHover.value = false),
          onFocus: _cache[2] || (_cache[2] = ($event) => onFocus(true)),
          onBlur: _cache[3] || (_cache[3] = ($event) => quickPrevFocus.value = false)
        }, [
          quickPrevHover.value || quickPrevFocus.value ? (openBlock(), createBlock(unref(d_arrow_left_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_3$6)) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagers), (pager) => {
          return openBlock(), createElementBlock("li", {
            key: pager,
            class: normalizeClass([[
              unref(nsPager).is("active", _ctx.currentPage === pager),
              unref(nsPager).is("disabled", _ctx.disabled)
            ], "number"]),
            "aria-current": _ctx.currentPage === pager,
            tabindex: unref(tabindex)
          }, toDisplayString(pager), 11, _hoisted_4$3);
        }), 128)),
        showNextMore.value ? (openBlock(), createElementBlock("li", {
          key: 2,
          class: normalizeClass([
            "more",
            "btn-quicknext",
            unref(nsIcon).b(),
            unref(nsPager).is("disabled", _ctx.disabled)
          ]),
          tabindex: unref(tabindex),
          onMouseenter: _cache[4] || (_cache[4] = ($event) => onMouseEnter()),
          onMouseleave: _cache[5] || (_cache[5] = ($event) => quickNextHover.value = false),
          onFocus: _cache[6] || (_cache[6] = ($event) => onFocus()),
          onBlur: _cache[7] || (_cache[7] = ($event) => quickNextFocus.value = false)
        }, [
          quickNextHover.value || quickNextFocus.value ? (openBlock(), createBlock(unref(d_arrow_right_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_5$3)) : createCommentVNode("v-if", true),
        _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
          key: 3,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === _ctx.pageCount),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === _ctx.pageCount,
          tabindex: unref(tabindex)
        }, toDisplayString(_ctx.pageCount), 11, _hoisted_6)) : createCommentVNode("v-if", true)
      ], 42, _hoisted_1$c);
    };
  }
});
var Pager = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const isAbsent = (v2) => typeof v2 !== "number";
const paginationProps = buildProps({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (value) => {
      return typeof value === "number" && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1;
    },
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: iconPropType,
    default: () => arrow_left_default
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: iconPropType,
    default: () => arrow_right_default
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
});
const paginationEmits = {
  "update:current-page": (val) => typeof val === "number",
  "update:page-size": (val) => typeof val === "number",
  "size-change": (val) => typeof val === "number",
  "current-change": (val) => typeof val === "number",
  "prev-click": (val) => typeof val === "number",
  "next-click": (val) => typeof val === "number"
};
const componentName = "ElPagination";
var Pagination = defineComponent({
  name: componentName,
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit, slots }) {
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("pagination");
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = computed$1(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
    const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
    const pageSizeBridge = computed$1({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v2) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v2;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v2);
          emit("size-change", v2);
        }
      }
    });
    const pageCountBridge = computed$1(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = computed$1({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v2) {
        let newCurrentPage = v2;
        if (v2 < 1) {
          newCurrentPage = 1;
        } else if (v2 > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val)
        currentPageBridge.value = val;
    });
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    function addClass2(element, cls) {
      if (element) {
        if (!element.props) {
          element.props = {};
        }
        element.props.class = [element.props.class, cls].join(" ");
      }
    }
    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed$1(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      var _a2, _b;
      if (!assertValidUsage.value) {
        debugWarn(componentName, t2("el.pagination.deprecationWarning"));
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h$1("div", { class: ns2.e("rightwrapper") }, rightWrapperChildren);
      const TEMPLATE_MAP = {
        prev: h$1(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev
        }),
        jumper: h$1(Jumper),
        pager: h$1(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h$1(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next
        }),
        sizes: h$1(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          disabled: props.disabled,
          size: props.small ? "small" : "default"
        }),
        slot: (_b = (_a2 = slots == null ? void 0 : slots.default) == null ? void 0 : _a2.call(slots)) != null ? _b : null,
        total: h$1(Total, { total: isAbsent(props.total) ? 0 : props.total })
      };
      const components2 = props.layout.split(",").map((item) => item.trim());
      let haveRightWrapper = false;
      components2.forEach((c2) => {
        if (c2 === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c2]);
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c2]);
        }
      });
      addClass2(rootChildren[0], ns2.is("first"));
      addClass2(rootChildren[rootChildren.length - 1], ns2.is("last"));
      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        addClass2(rightWrapperChildren[0], ns2.is("first"));
        addClass2(rightWrapperChildren[rightWrapperChildren.length - 1], ns2.is("last"));
        rootChildren.push(rightWrapperRoot);
      }
      return h$1("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          ns2.b(),
          ns2.is("background", props.background),
          {
            [ns2.m("small")]: props.small
          }
        ]
      }, rootChildren);
    };
  }
});
const ElPagination = withInstall(Pagination);
const progressProps = buildProps({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  textInside: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  },
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  }
});
const _hoisted_1$b = ["aria-valuenow"];
const _hoisted_2$9 = { viewBox: "0 0 100 100" };
const _hoisted_3$5 = ["d", "stroke", "stroke-width"];
const _hoisted_4$2 = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"];
const _hoisted_5$2 = { key: 0 };
const __default__$d = {
  name: "ElProgress"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: progressProps,
  setup(__props) {
    const props = __props;
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const ns2 = useNamespace("progress");
    const barStyle = computed$1(() => ({
      width: `${props.percentage}%`,
      animationDuration: `${props.duration}s`,
      backgroundColor: getCurrentColor(props.percentage)
    }));
    const relativeStrokeWidth = computed$1(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed$1(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      }
      return 0;
    });
    const trackPath = computed$1(() => {
      const r2 = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r2}
          a ${r2} ${r2} 0 1 1 0 ${isDashboard ? "-" : ""}${r2 * 2}
          a ${r2} ${r2} 0 1 1 0 ${isDashboard ? "" : "-"}${r2 * 2}
          `;
    });
    const perimeter = computed$1(() => 2 * Math.PI * radius.value);
    const rate = computed$1(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed$1(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed$1(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed$1(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed$1(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const statusIcon = computed$1(() => {
      if (props.status === "warning") {
        return warning_filled_default;
      }
      if (props.type === "line") {
        return props.status === "success" ? circle_check_default : circle_close_default;
      } else {
        return props.status === "success" ? check_default : close_default;
      }
    });
    const progressTextSize = computed$1(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed$1(() => props.format(props.percentage));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index2) => {
        if (isString(seriesColor)) {
          return {
            color: seriesColor,
            percentage: (index2 + 1) * span
          };
        }
        return seriesColor;
      });
      return seriesColors.sort((a2, b2) => a2.percentage - b2.percentage);
    }
    const getCurrentColor = (percentage) => {
      var _a2;
      const { color } = props;
      if (isFunction(color)) {
        return color(percentage);
      } else if (isString(color)) {
        return color;
      } else {
        const colors = getColors(color);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a2 = colors[colors.length - 1]) == null ? void 0 : _a2.color;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).m(_ctx.type),
          unref(ns2).is(_ctx.status),
          {
            [unref(ns2).m("without-text")]: !_ctx.showText,
            [unref(ns2).m("text-inside")]: _ctx.textInside
          }
        ]),
        role: "progressbar",
        "aria-valuenow": _ctx.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns2).b("bar"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns2).be("bar", "outer")),
            style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                unref(ns2).be("bar", "inner"),
                { [unref(ns2).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate }
              ]),
              style: normalizeStyle(unref(barStyle))
            }, [
              (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns2).be("bar", "innerText"))
              }, [
                renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                  createElementVNode("span", null, toDisplayString(unref(content)), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true)
            ], 6)
          ], 6)
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns2).b("circle")),
          style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
        }, [
          (openBlock(), createElementBlock("svg", _hoisted_2$9, [
            createElementVNode("path", {
              class: normalizeClass(unref(ns2).be("circle", "track")),
              d: unref(trackPath),
              stroke: `var(${unref(ns2).cssVarName("fill-color-light")}, #e5e9f2)`,
              "stroke-width": unref(relativeStrokeWidth),
              fill: "none",
              style: normalizeStyle(unref(trailPathStyle))
            }, null, 14, _hoisted_3$5),
            createElementVNode("path", {
              class: normalizeClass(unref(ns2).be("circle", "path")),
              d: unref(trackPath),
              stroke: unref(stroke),
              fill: "none",
              opacity: _ctx.percentage ? 1 : 0,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              style: normalizeStyle(unref(circlePathStyle))
            }, null, 14, _hoisted_4$2)
          ]))
        ], 6)),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(ns2).e("text")),
          style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
        }, [
          renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
            !_ctx.status ? (openBlock(), createElementBlock("span", _hoisted_5$2, toDisplayString(unref(content)), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(statusIcon))))
              ]),
              _: 1
            }))
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1$b);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);
const ElProgress = withInstall(Progress);
const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
];
const RowAlign = ["top", "middle", "bottom"];
const rowProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: RowJustify,
    default: "start"
  },
  align: {
    type: String,
    values: RowAlign,
    default: "top"
  }
});
const __default__$c = {
  name: "ElRow"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: rowProps,
  setup(__props) {
    const props = __props;
    const ns2 = useNamespace("row");
    const gutter = computed$1(() => props.gutter);
    provide(rowContextKey, {
      gutter
    });
    const style = computed$1(() => {
      const styles = {};
      if (!props.gutter) {
        return styles;
      }
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
      return styles;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass([
          unref(ns2).b(),
          unref(ns2).is(`justify-${props.justify}`, _ctx.justify !== "start"),
          unref(ns2).is(`align-${props.align}`, _ctx.align !== "top")
        ]),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Row = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);
const ElRow = withInstall(Row);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var matchHtmlRegExp = /["'&<>]/;
var escapeHtml_1 = escapeHtml;
function escapeHtml(string3) {
  var str = "" + string3;
  var match = matchHtmlRegExp.exec(str);
  if (!match) {
    return str;
  }
  var escape;
  var html = "";
  var index2 = 0;
  var lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escape = "&quot;";
        break;
      case 38:
        escape = "&amp;";
        break;
      case 39:
        escape = "&#39;";
        break;
      case 60:
        escape = "&lt;";
        break;
      case 62:
        escape = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.substring(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escape;
  }
  return lastIndex !== index2 ? html + str.substring(lastIndex, index2) : html;
}
const getCell = function(event) {
  var _a2;
  return (_a2 = event.target) == null ? void 0 : _a2.closest("td");
};
const isObject = function(obj) {
  return obj !== null && typeof obj === "object";
};
const orderBy = function(array4, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array4;
  }
  if (typeof reverse === "string") {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index2) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map((by) => {
        if (typeof by === "string") {
          return get(value, by);
        } else {
          return by(value, index2, array4);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject(value) ? get(value, sortKey) : value];
  };
  const compare = function(a2, b2) {
    if (sortMethod) {
      return sortMethod(a2.value, b2.value);
    }
    for (let i2 = 0, len = a2.key.length; i2 < len; i2++) {
      if (a2.key[i2] < b2.key[i2]) {
        return -1;
      }
      if (a2.key[i2] > b2.key[i2]) {
        return 1;
      }
    }
    return 0;
  };
  return array4.map((value, index2) => {
    return {
      value,
      index: index2,
      key: getKey ? getKey(value, index2) : null
    };
  }).sort((a2, b2) => {
    let order = compare(a2, b2);
    if (!order) {
      order = a2.index - b2.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table, columnKey) {
  let column = null;
  for (let i2 = 0; i2 < table.columns.length; i2++) {
    const item = table.columns[i2];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};
const getColumnByCell = function(table, cell, namespace) {
  const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("Row is required when get row identity");
  if (typeof rowKey === "string") {
    if (!rowKey.includes(".")) {
      return `${row[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (typeof rowKey === "function") {
    return rowKey.call(null, row);
  }
};
const getKeysMap = function(array4, rowKey) {
  const arrayMap2 = {};
  (array4 || []).forEach((row, index2) => {
    arrayMap2[getRowIdentity(row, rowKey)] = { row, index: index2 };
  });
  return arrayMap2;
};
function mergeOptions(defaults, config) {
  const options = {};
  let key;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      const value = config[key];
      if (typeof value !== "undefined") {
        options[key] = value;
      }
    }
  }
  return options;
}
function parseWidth(width) {
  if (width === "")
    return width;
  if (width !== void 0) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (minWidth !== void 0) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function parseHeight(height) {
  if (typeof height === "number") {
    return height;
  }
  if (typeof height === "string") {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a2, b2) => (...args) => a2(b2(...args)));
}
function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index2 = statusArr.indexOf(row);
  const included = index2 !== -1;
  const addRow = () => {
    statusArr.push(row);
    changed = true;
  };
  const removeRow = () => {
    statusArr.splice(index2, 1);
    changed = true;
  };
  if (typeof newVal === "boolean") {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}
function walkTreeNode(root2, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil2 = (array4) => !(Array.isArray(array4) && array4.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil2(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root2.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil2(children)) {
      _walker(item, children, 0);
    }
  });
}
let removePopper;
function createTablePopper(parentNode, trigger, popperContent, popperOptions2, tooltipEffect) {
  const { nextZIndex } = useZIndex();
  const ns2 = parentNode == null ? void 0 : parentNode.dataset.prefix;
  const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns2}-scrollbar__wrap`);
  function renderContent() {
    const isLight = tooltipEffect === "light";
    const content2 = document.createElement("div");
    content2.className = `${ns2}-popper ${isLight ? "is-light" : "is-dark"}`;
    popperContent = escapeHtml_1(popperContent);
    content2.innerHTML = popperContent;
    content2.style.zIndex = String(nextZIndex());
    parentNode == null ? void 0 : parentNode.appendChild(content2);
    return content2;
  }
  function renderArrow() {
    const arrow2 = document.createElement("div");
    arrow2.className = `${ns2}-popper__arrow`;
    return arrow2;
  }
  function showPopper() {
    popperInstance && popperInstance.update();
  }
  removePopper == null ? void 0 : removePopper();
  removePopper = () => {
    try {
      popperInstance && popperInstance.destroy();
      content && (parentNode == null ? void 0 : parentNode.removeChild(content));
      trigger.removeEventListener("mouseenter", showPopper);
      trigger.removeEventListener("mouseleave", removePopper);
      scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", removePopper);
      removePopper = void 0;
    } catch (e2) {
    }
  };
  let popperInstance = null;
  const content = renderContent();
  const arrow = renderArrow();
  content.appendChild(arrow);
  popperInstance = yn(trigger, content, {
    strategy: "absolute",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "arrow",
        options: {
          element: arrow,
          padding: 10
        }
      }
    ],
    ...popperOptions2
  });
  trigger.addEventListener("mouseenter", showPopper);
  trigger.addEventListener("mouseleave", removePopper);
  scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", removePopper);
  return popperInstance;
}
const isFixedColumn = (index2, fixed, store, realColumns) => {
  let start = 0;
  let after = index2;
  if (realColumns) {
    if (realColumns[index2].colSpan > 1) {
      return {};
    }
    for (let i2 = 0; i2 < index2; i2++) {
      start += realColumns[i2].colSpan;
    }
    after = start + realColumns[index2].colSpan - 1;
  } else {
    start = index2;
  }
  let fixedLayout;
  const columns = store.states.columns;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace, index2, fixed, store, realColumns) => {
  const classes = [];
  const { direction, start } = isFixedColumn(index2, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === "left";
    classes.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && start === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push("is-last-column");
    } else if (!isLeft && start === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes.push("is-first-column");
    }
  }
  return classes;
};
function getOffset(offset, column) {
  return offset + (column.realWidth === null || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index2, fixed, store, realColumns) => {
  const { direction, start = 0 } = isFixedColumn(index2, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, index2).reduce(getOffset, 0);
  } else {
    styles.right = columns.slice(start + 1).reverse().reduce(getOffset, 0);
  }
  return styles;
};
const ensurePosition = (style, key) => {
  if (!style)
    return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};
function useExpand(watcherData) {
  const instance = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded);
    if (changed) {
      instance.emit("expand-change", row, expandRows.value.slice());
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance.store.assertRowKey();
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.value.includes(row);
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}
function useCurrent(watcherData) {
  const instance = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    const { data, rowKey } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = (unref(data) || []).find((item) => getRowIdentity(item, rowKey.value) === key);
    }
    currentRow.value = _currentRow;
    instance.emit("current-change", currentRow.value, null);
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (!data.includes(oldCurrentRow) && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (currentRow.value === null) {
        instance.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}
function useTree(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const instance = getCurrentInstance();
  const normalizedData = computed$1(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data = watcherData.data.value || [];
    return normalize(data);
  });
  const normalizedLazyNode = computed$1(() => {
    const rowKey = watcherData.rowKey.value;
    const keys2 = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys2.length)
      return res;
    keys2.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] };
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey);
          item.children.push(currentRowKey);
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(data, (parent, children, level) => {
      const parentId = getRowIdentity(parent, rowKey);
      if (Array.isArray(children)) {
        res[parentId] = {
          children: children.map((row) => getRowIdentity(row, rowKey)),
          level
        };
      } else if (lazy.value) {
        res[parentId] = {
          children: [],
          lazy: true,
          level
        };
      }
    }, childrenColumnName.value, lazyColumnIdentifier.value);
    return res;
  };
  const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll = ((_a2) => (_a2 = instance.store) == null ? void 0 : _a2.states.defaultExpandAll.value)()) => {
    var _a2;
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys2 = Object.keys(nested);
    const newTreeData = {};
    if (keys2.length) {
      const oldTreeData = unref(treeData);
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value) {
            return ifExpandAll || expandRowKeys.value.includes(key);
          } else {
            return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
          }
        } else {
          const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
          return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
        }
      };
      keys2.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = { ...nested[key] };
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.includes(key)) {
            if (newTreeData[key].children.length !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const { loaded = false, loading = false } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: ""
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_a2 = instance.store) == null ? void 0 : _a2.updateTableScrollY();
  };
  watch(() => expandRowKeys.value, () => {
    updateTreeData(true);
  });
  watch(() => normalizedData.value, () => {
    updateTreeData();
  });
  watch(() => normalizedLazyNode.value, () => {
    updateTreeData();
  });
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const toggleTreeExpansion = (row, expanded) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = id && treeData.value[id];
    if (id && data && "expanded" in data) {
      const oldExpanded = data.expanded;
      expanded = typeof expanded === "undefined" ? !data.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance.emit("expand-change", row, expanded);
      }
      instance.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = treeData.value[id];
    if (lazy.value && data && "loaded" in data && !data.loaded) {
      loadData(row, id, data);
    } else {
      toggleTreeExpansion(row, void 0);
    }
  };
  const loadData = (row, key, treeNode) => {
    const { load } = instance.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row, treeNode, (data) => {
        if (!Array.isArray(data)) {
          throw new TypeError("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data.length) {
          lazyTreeNodeMap.value[key] = data;
        }
        instance.emit("expand-change", row, true);
      });
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName
    }
  };
}
const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === "string") {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  var _a2;
  const instance = getCurrentInstance();
  const { size: tableSize } = toRefs((_a2 = instance.proxy) == null ? void 0 : _a2.$props);
  const rowKey = ref(null);
  const data = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  watch(data, () => instance.state && scheduleLayout(false), {
    deep: true
  });
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateColumns = () => {
    fixedColumns.value = _columns.value.filter((column) => column.fixed === true || column.fixed === "left");
    rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
    if (fixedColumns.value.length > 0 && _columns.value[0] && _columns.value[0].type === "selection" && !_columns.value[0].fixed) {
      _columns.value[0].fixed = true;
      fixedColumns.value.unshift(_columns.value[0]);
    }
    const notFixedColumns = _columns.value.filter((column) => !column.fixed);
    originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance.state.doLayout();
    } else {
      instance.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row) => {
    return selection.value.includes(row);
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    if (oldSelection.length) {
      selection.value = [];
      instance.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const selectedMap = getKeysMap(selection.value, rowKey.value);
      const dataMap = getKeysMap(data.value, rowKey.value);
      for (const key in selectedMap) {
        if (hasOwn(selectedMap, key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data.value.includes(item));
    }
    if (deleted.length) {
      const newSelection = selection.value.filter((item) => !deleted.includes(item));
      selection.value = newSelection;
      instance.emit("selection-change", newSelection.slice());
    }
  };
  const getSelectionRows = () => {
    return (selection.value || []).slice();
  };
  const toggleRowSelection = (row, selected = void 0, emitChange = true) => {
    const changed = toggleRowStatus(selection.value, row, selected);
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance.emit("select", newSelection, row);
      }
      instance.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    var _a22, _b;
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    let childrenCount = 0;
    const rowKey2 = (_b = (_a22 = instance == null ? void 0 : instance.store) == null ? void 0 : _a22.states) == null ? void 0 : _b.rowKey.value;
    data.value.forEach((row, index2) => {
      const rowIndex = index2 + childrenCount;
      if (selectable.value) {
        if (selectable.value.call(null, row, rowIndex) && toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
    });
    if (selectionChanged) {
      instance.emit("selection-change", selection.value ? selection.value.slice() : []);
    }
    instance.emit("select-all", selection.value);
  };
  const updateSelectionByRowKey = () => {
    const selectedMap = getKeysMap(selection.value, rowKey.value);
    data.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value);
      const rowInfo = selectedMap[rowId];
      if (rowInfo) {
        selection.value[rowInfo.index] = row;
      }
    });
  };
  const updateAllSelected = () => {
    var _a22, _b, _c;
    if (((_a22 = data.value) == null ? void 0 : _a22.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    let selectedMap;
    if (rowKey.value) {
      selectedMap = getKeysMap(selection.value, rowKey.value);
    }
    const isSelected2 = function(row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey.value)];
      } else {
        return selection.value.includes(row);
      }
    };
    let isAllSelected_ = true;
    let selectedCount = 0;
    let childrenCount = 0;
    for (let i2 = 0, j2 = (data.value || []).length; i2 < j2; i2++) {
      const keyProp = (_c = (_b = instance == null ? void 0 : instance.store) == null ? void 0 : _b.states) == null ? void 0 : _c.rowKey.value;
      const rowIndex = i2 + childrenCount;
      const item = data.value[i2];
      const isRowSelectable = selectable.value && selectable.value.call(null, item, rowIndex);
      if (!isSelected2(item)) {
        if (!selectable.value || isRowSelectable) {
          isAllSelected_ = false;
          break;
        }
      } else {
        selectedCount++;
      }
      childrenCount += getChildrenCount(getRowIdentity(item, keyProp));
    }
    if (selectedCount === 0)
      isAllSelected_ = false;
    isAllSelected.value = isAllSelected_;
  };
  const getChildrenCount = (rowKey2) => {
    var _a22;
    if (!instance || !instance.store)
      return 0;
    const { treeData } = instance.store.states;
    let count = 0;
    const children = (_a22 = treeData.value[rowKey2]) == null ? void 0 : _a22.children;
    if (children) {
      count += children.length;
      children.forEach((childKey) => {
        count += getChildrenCount(childKey);
      });
    }
    return count;
  };
  const updateFilters = (columns2, values) => {
    if (!Array.isArray(columns2)) {
      columns2 = [columns2];
    }
    const filters_ = {};
    columns2.forEach((col) => {
      filters.value[col.id] = values;
      filters_[col.columnKey || col.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById({
        columns: columns.value
      }, columnId);
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some((value) => column.filterMethod.call(null, value, row, column));
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    data.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore = void 0) => {
    if (!(ignore && ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const { tableHeaderRef } = instance.refs;
    if (!tableHeaderRef)
      return;
    const panels = Object.assign({}, tableHeaderRef.filterPanels);
    const keys2 = Object.keys(panels);
    if (!keys2.length)
      return;
    if (typeof columnKeys === "string") {
      columnKeys = [columnKeys];
    }
    if (Array.isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) => getColumnByKey({
        columns: columns.value
      }, key));
      keys2.forEach((key) => {
        const column = columns_.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys2.forEach((key) => {
        const column = columns.value.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand({
    data,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    loadOrToggle,
    states: treeStates
  } = useTree({
    data,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = columns.value.some(({ type: type4 }) => type4 === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded);
    } else {
      toggleTreeExpansion(row, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    getSelectionRows,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    states: {
      tableSize,
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData
    }
  };
}
function replaceColumn(array4, column) {
  return array4.map((item) => {
    var _a2;
    if (item.id === column.id) {
      return column;
    } else if ((_a2 = item.children) == null ? void 0 : _a2.length) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function sortColumn(array4) {
  array4.forEach((item) => {
    var _a2, _b;
    item.no = (_a2 = item.getColumnIndex) == null ? void 0 : _a2.call(item);
    if ((_b = item.children) == null ? void 0 : _b.length) {
      sortColumn(item.children);
    }
  });
  array4.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
  const instance = getCurrentInstance();
  const watcher = useWatcher$1();
  const ns2 = useNamespace("table");
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states._data) !== data;
      states.data.value = data;
      states._data.value = data;
      instance.store.execQuery();
      instance.store.updateCurrentRowData();
      instance.store.updateExpandRows();
      instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey();
        instance.store.updateSelectionByRowKey();
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection();
        } else {
          instance.store.cleanSelection();
        }
      }
      instance.store.updateAllSelected();
      if (instance.$ready) {
        instance.store.scheduleLayout();
      }
    },
    insertColumn(states, column, parent) {
      const array4 = unref(states._columns);
      let newColumns = [];
      if (!parent) {
        array4.push(column);
        newColumns = array4;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        parent.children.push(column);
        newColumns = replaceColumn(array4, parent);
      }
      sortColumn(newColumns);
      states._columns.value = newColumns;
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    removeColumn(states, column, parent) {
      const array4 = unref(states._columns) || [];
      if (parent) {
        parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
        if (parent.children.length === 0) {
          delete parent.children;
        }
        states._columns.value = replaceColumn(array4, parent);
      } else {
        const index2 = array4.indexOf(column);
        if (index2 > -1) {
          array4.splice(index2, 1);
          states._columns.value = array4;
        }
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const { prop, order, init } = options;
      if (prop) {
        const column = unref(states.columns).find((column2) => column2.property === prop);
        if (column) {
          column.order = order;
          instance.store.updateSort(column, prop, order);
          instance.store.commit("changeSortCondition", { init });
        }
      }
    },
    changeSortCondition(states, options) {
      const { sortingColumn: column, sortProp: prop, sortOrder: order } = states;
      if (unref(order) === null) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ingore = { filter: true };
      instance.store.execQuery(ingore);
      if (!options || !(options.silent || options.init)) {
        instance.emit("sort-change", {
          column: unref(column),
          prop: unref(prop),
          order: unref(order)
        });
      }
      instance.store.updateTableScrollY();
    },
    filterChange(_states, options) {
      const { column, values, silent } = options;
      const newFilters = instance.store.updateFilters(column, values);
      instance.store.execQuery();
      if (!silent) {
        instance.emit("filter-change", newFilters);
      }
      instance.store.updateTableScrollY();
    },
    toggleAllSelection() {
      instance.store.toggleAllSelection();
    },
    rowSelectedChanged(_states, row) {
      instance.store.toggleRowSelection(row);
      instance.store.updateAllSelected();
    },
    setHoverRow(states, row) {
      states.hoverRow.value = row;
    },
    setCurrentRow(_states, row) {
      instance.store.updateCurrentRow(row);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance, [instance.store.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
  };
  return {
    ns: ns2,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY
  };
}
const InitialStateMap = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function createStore(table, props) {
  if (!table) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10);
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store);
  });
  proxyTableProps(store, props);
  return store;
}
function proxyTableProps(store, props) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(() => getArrKeysValue(props, key), (value) => {
      handleValue(value, key, store);
    });
  });
}
function handleValue(value, propsKey, store) {
  let newVal = value;
  let storeKey = InitialStateMap[propsKey];
  if (typeof InitialStateMap[propsKey] === "object") {
    storeKey = storeKey.key;
    newVal = newVal || InitialStateMap[propsKey].default;
  }
  store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, keys2) {
  if (keys2.includes(".")) {
    const keyList = keys2.split(".");
    let value = props;
    keyList.forEach((key) => {
      value = value[key];
    });
    return value;
  } else {
    return props[keys2];
  }
}
class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.gutterWidth = 0;
    for (const name in options) {
      if (hasOwn(options, name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("Table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("Store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (height === null)
      return false;
    const scrollBarRef = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && scrollBarRef) {
      let scrollY = true;
      const prevScrollY = this.scrollY.value;
      scrollY = scrollBarRef.wrap$.scrollHeight > scrollBarRef.wrap$.clientHeight;
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    if (!isClient)
      return;
    const el = this.table.vnode.el;
    value = parseHeight(value);
    this.height.value = Number(value);
    if (!el && (value || value === 0))
      return nextTick(() => this.setHeight(value, prop));
    if (typeof value === "number") {
      el.style[prop] = `${value}px`;
      this.updateElsHeight();
    } else if (typeof value === "string") {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (!isClient)
      return;
    const fit = this.fit;
    const bodyWidth = this.table.vnode.el.clientWidth;
    let bodyMinWidth = 0;
    const flattenColumns = this.getFlattenColumns();
    const flexColumns = flattenColumns.filter((column) => typeof column.width !== "number");
    flattenColumns.forEach((column) => {
      if (typeof column.width === "number" && column.realWidth)
        column.realWidth = null;
    });
    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += Number(column.width || column.minWidth || 80);
      });
      if (bodyMinWidth <= bodyWidth) {
        this.scrollX.value = false;
        const totalFlexWidth = bodyWidth - bodyMinWidth;
        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + Number(column.minWidth || 80), 0);
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;
          flexColumns.forEach((column, index2) => {
            if (index2 === 0)
              return;
            const flexWidth = Math.floor(Number(column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = Number(column.minWidth || 80) + flexWidth;
          });
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        this.scrollX.value = true;
        flexColumns.forEach((column) => {
          column.realWidth = Number(column.minWidth);
        });
      }
      this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
      this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else {
      flattenColumns.forEach((column) => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = Number(column.width || column.minWidth);
        }
        bodyMinWidth += column.realWidth;
      });
      this.scrollX.value = bodyMinWidth > bodyWidth;
      this.bodyWidth.value = bodyMinWidth;
    }
    const fixedColumns = this.store.states.fixedColumns.value;
    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach((column) => {
        fixedWidth += Number(column.realWidth || column.width);
      });
      this.fixedWidth.value = fixedWidth;
    }
    const rightFixedColumns = this.store.states.rightFixedColumns.value;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach((column) => {
        rightFixedWidth += Number(column.realWidth || column.width);
      });
      this.rightFixedWidth.value = rightFixedWidth;
    }
    this.notifyObservers("columns");
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index2 = this.observers.indexOf(observer);
    if (index2 !== -1) {
      this.observers.splice(index2, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach((observer) => {
      var _a2, _b;
      switch (event) {
        case "columns":
          (_a2 = observer.state) == null ? void 0 : _a2.onColumnsChange(this);
          break;
        case "scrollable":
          (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}
const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
const _sfc_main$l = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown: arrow_down_default,
    ArrowUp: arrow_up_default
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("table-filter");
    const parent = instance == null ? void 0 : instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip = ref(null);
    const filters = computed$1(() => {
      return props.column && props.column.filters;
    });
    const filterValue = computed$1({
      get: () => {
        var _a2;
        return (((_a2 = props.column) == null ? void 0 : _a2.filteredValue) || [])[0];
      },
      set: (value) => {
        if (filteredValue.value) {
          if (typeof value !== "undefined" && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed$1({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = computed$1(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e2) => {
      e2.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== "undefined" && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = computed$1(() => {
      var _a2, _b;
      return (_b = (_a2 = tooltip.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t: t2,
      ns: ns2,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip
    };
  }
});
const _hoisted_1$a = { key: 0 };
const _hoisted_2$8 = ["disabled"];
const _hoisted_3$4 = ["label", "onClick"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltip",
    visible: _ctx.tooltipVisible,
    offset: 0,
    placement: _ctx.placement,
    "show-arrow": false,
    "stop-popper-mouse-event": false,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": _ctx.ns.b(),
    persistent: ""
  }, {
    content: withCtx(() => [
      _ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          createVNode(_component_el_scrollbar, {
            "wrap-class": _ctx.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(_component_el_checkbox_group, {
                modelValue: _ctx.filteredValue,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filteredValue = $event),
                class: normalizeClass(_ctx.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
                    return openBlock(), createBlock(_component_el_checkbox, {
                      key: filter.value,
                      label: filter.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filter.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("bottom"))
        }, [
          createElementVNode("button", {
            class: normalizeClass({ [_ctx.ns.is("disabled")]: _ctx.filteredValue.length === 0 }),
            disabled: _ctx.filteredValue.length === 0,
            type: "button",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
          }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, _hoisted_2$8),
          createElementVNode("button", {
            type: "button",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleReset && _ctx.handleReset(...args))
          }, toDisplayString(_ctx.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: normalizeClass(_ctx.ns.e("list"))
      }, [
        createElementVNode("li", {
          class: normalizeClass([
            _ctx.ns.e("list-item"),
            {
              [_ctx.ns.is("active")]: _ctx.filterValue === void 0 || _ctx.filterValue === null
            }
          ]),
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleSelect(null))
        }, toDisplayString(_ctx.t("el.table.clearFilter")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
          return openBlock(), createElementBlock("li", {
            key: filter.value,
            class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
            label: filter.value,
            onClick: ($event) => _ctx.handleSelect(filter.value)
          }, toDisplayString(filter.text), 11, _hoisted_3$4);
        }), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${_ctx.ns.namespace.value}-table__column-filter-trigger`,
          `${_ctx.ns.namespace.value}-none-outline`
        ]),
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showFilterPanel && _ctx.showFilterPanel(...args))
      }, [
        createVNode(_component_el_icon, null, {
          default: withCtx(() => [
            _ctx.column.filterOpened ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [_directive_click_outside, _ctx.hideFilterPanel, _ctx.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function useLayoutObserver(root2) {
  const instance = getCurrentInstance();
  onBeforeMount(() => {
    tableLayout.value.addObserver(instance);
  });
  onMounted(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUpdated(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance);
  });
  const tableLayout = computed$1(() => {
    const layout = root2.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    var _a2;
    const cols = ((_a2 = root2.vnode.el) == null ? void 0 : _a2.querySelectorAll("colgroup > col")) || [];
    if (!cols.length)
      return;
    const flattenColumns = layout.getFlattenColumns();
    const columnsMap = {};
    flattenColumns.forEach((column) => {
      columnsMap[column.id] = column;
    });
    for (let i2 = 0, j2 = cols.length; i2 < j2; i2++) {
      const col = cols[i2];
      const name = col.getAttribute("name");
      const column = columnsMap[name];
      if (column) {
        col.setAttribute("width", column.realWidth || column.width);
      }
    }
  };
  const onScrollableChange = (layout) => {
    var _a2, _b;
    const cols = ((_a2 = root2.vnode.el) == null ? void 0 : _a2.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let i2 = 0, j2 = cols.length; i2 < j2; i2++) {
      const col = cols[i2];
      col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
    }
    const ths = ((_b = root2.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
    for (let i2 = 0, j2 = ths.length; i2 < j2; i2++) {
      const th = ths[i2];
      th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
      th.style.display = layout.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}
const TABLE_INJECTION_KEY = Symbol("ElTable");
function useEvent(props, emit) {
  const instance = getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent == null ? void 0 : parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent == null ? void 0 : parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  const dragState = ref({});
  const handleMouseDown = (event, column) => {
    if (!isClient)
      return;
    if (column.children && column.children.length > 0)
      return;
    if (draggingColumn.value && props.border) {
      dragging.value = true;
      const table = parent;
      emit("set-drag-visible", true);
      const tableEl = table == null ? void 0 : table.vnode.el;
      const tableLeft = tableEl.getBoundingClientRect().left;
      const columnEl = instance.vnode.el.querySelector(`th.${column.id}`);
      const columnRect = columnEl.getBoundingClientRect();
      const minLeft = columnRect.left - tableLeft + 30;
      addClass(columnEl, "noclick");
      dragState.value = {
        startMouseLeft: event.clientX,
        startLeft: columnRect.right - tableLeft,
        startColumnLeft: columnRect.left - tableLeft,
        tableLeft
      };
      const resizeProxy = table == null ? void 0 : table.refs.resizeProxy;
      resizeProxy.style.left = `${dragState.value.startLeft}px`;
      document.onselectstart = function() {
        return false;
      };
      document.ondragstart = function() {
        return false;
      };
      const handleMouseMove2 = (event2) => {
        const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
        const proxyLeft = dragState.value.startLeft + deltaLeft;
        resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
      };
      const handleMouseUp = () => {
        if (dragging.value) {
          const { startColumnLeft, startLeft } = dragState.value;
          const finalLeft = Number.parseInt(resizeProxy.style.left, 10);
          const columnWidth = finalLeft - startColumnLeft;
          column.width = column.realWidth = columnWidth;
          table == null ? void 0 : table.emit("header-dragend", column.width, startLeft - startColumnLeft, column, event);
          requestAnimationFrame(() => {
            props.store.scheduleLayout(false, true);
          });
          document.body.style.cursor = "";
          dragging.value = false;
          draggingColumn.value = null;
          dragState.value = {};
          emit("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", handleMouseMove2);
        document.removeEventListener("mouseup", handleMouseUp);
        document.onselectstart = null;
        document.ondragstart = null;
        setTimeout(() => {
          removeClass(columnEl, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", handleMouseMove2);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };
  const handleMouseMove = (event, column) => {
    var _a2;
    if (column.children && column.children.length > 0)
      return;
    const target = (_a2 = event.target) == null ? void 0 : _a2.closest("th");
    if (!column || !column.resizable)
      return;
    if (!dragging.value && props.border) {
      const rect = target.getBoundingClientRect();
      const bodyStyle = document.body.style;
      if (rect.width > 12 && rect.right - event.pageX < 8) {
        bodyStyle.cursor = "col-resize";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "col-resize";
        }
        draggingColumn.value = column;
      } else if (!dragging.value) {
        bodyStyle.cursor = "";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "pointer";
        }
        draggingColumn.value = null;
      }
    }
  };
  const handleMouseOut = () => {
    if (!isClient)
      return;
    document.body.style.cursor = "";
  };
  const toggleOrder = ({ order, sortOrders }) => {
    if (order === "")
      return sortOrders[0];
    const index2 = sortOrders.indexOf(order || null);
    return sortOrders[index2 > sortOrders.length - 2 ? 0 : index2 + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    var _a2;
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    const target = (_a2 = event.target) == null ? void 0 : _a2.closest("th");
    if (target) {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const states = props.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent == null ? void 0 : parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}
function useStyle$2(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns2 = useNamespace("table");
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
    if (typeof headerRowStyle === "function") {
      return headerRowStyle.call(null, { rowIndex });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes = [];
    const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
    if (typeof headerRowClassName === "string") {
      classes.push(headerRowClassName);
    } else if (typeof headerRowClassName === "function") {
      classes.push(headerRowClassName.call(null, { rowIndex }));
    }
    return classes.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
    var _a2;
    let headerCellStyles = (_a2 = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a2 : {};
    if (typeof headerCellStyles === "function") {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = column.isSubColumn ? null : getFixedColumnOffset(columnIndex, column.fixed, props.store, row);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, headerCellStyles, fixedStyle);
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = column.isSubColumn ? [] : getFixedColumnsClass(ns2.b(), columnIndex, column.fixed, props.store, row);
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses
    ];
    if (!column.children) {
      classes.push("is-leaf");
    }
    if (column.sortable) {
      classes.push("is-sortable");
    }
    const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
    if (typeof headerCellClassName === "string") {
      classes.push(headerCellClassName);
    } else if (typeof headerCellClassName === "function") {
      classes.push(headerCellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns2.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}
const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i2 = 0; i2 < maxLevel; i2++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach((col) => col.isSubColumn = true);
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const columnRows = computed$1(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed$1(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent == null ? void 0 : parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}
var TableHeader = defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns2 = useNamespace("table");
    const filterPanels = ref({});
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    onMounted(async () => {
      await nextTick();
      await nextTick();
      const { prop, order } = props.defaultSort;
      parent == null ? void 0 : parent.store.commit("sort", { prop, order, init: true });
    });
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props, emit);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$2(props);
    const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      ns: ns2,
      filterPanels,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection
    };
  },
  render() {
    const {
      ns: ns2,
      isGroup,
      columnRows,
      getHeaderCellStyle,
      getHeaderCellClass,
      getHeaderRowClass,
      getHeaderRowStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleSortClick,
      handleMouseOut,
      store,
      $parent
    } = this;
    let rowSpan = 1;
    return h$1("thead", {
      class: { [ns2.is("group")]: isGroup }
    }, columnRows.map((subColumns, rowIndex) => h$1("tr", {
      class: getHeaderRowClass(rowIndex),
      key: rowIndex,
      style: getHeaderRowStyle(rowIndex)
    }, subColumns.map((column, cellIndex) => {
      if (column.rowSpan > rowSpan) {
        rowSpan = column.rowSpan;
      }
      return h$1("th", {
        class: getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
        colspan: column.colSpan,
        key: `${column.id}-thead`,
        rowspan: column.rowSpan,
        style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
        onClick: ($event) => handleHeaderClick($event, column),
        onContextmenu: ($event) => handleHeaderContextMenu($event, column),
        onMousedown: ($event) => handleMouseDown($event, column),
        onMousemove: ($event) => handleMouseMove($event, column),
        onMouseout: handleMouseOut
      }, [
        h$1("div", {
          class: [
            "cell",
            column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""
          ]
        }, [
          column.renderHeader ? column.renderHeader({
            column,
            $index: cellIndex,
            store,
            _self: $parent
          }) : column.label,
          column.sortable && h$1("span", {
            onClick: ($event) => handleSortClick($event, column),
            class: "caret-wrapper"
          }, [
            h$1("i", {
              onClick: ($event) => handleSortClick($event, column, "ascending"),
              class: "sort-caret ascending"
            }),
            h$1("i", {
              onClick: ($event) => handleSortClick($event, column, "descending"),
              class: "sort-caret descending"
            })
          ]),
          column.filterable && h$1(FilterPanel, {
            store,
            placement: column.filterPlacement || "bottom-start",
            column,
            upDataColumn: (key, value) => {
              column[key] = value;
            }
          })
        ])
      ]);
    }))));
  }
});
function useEvents(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h$1("div"));
  const handleEvent = (event, row, name) => {
    var _a2;
    const table = parent;
    const cell = getCell(event);
    let column;
    const namespace = (_a2 = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a2.dataset.prefix;
    if (cell) {
      column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      if (column) {
        table == null ? void 0 : table.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table == null ? void 0 : table.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    props.store.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce((index2) => {
    props.store.commit("setHoverRow", index2);
  }, 30);
  const handleMouseLeave = debounce(() => {
    props.store.commit("setHoverRow", null);
  }, 30);
  const handleCellMouseEnter = (event, row, tooltipEffect) => {
    var _a2;
    const table = parent;
    const cell = getCell(event);
    const namespace = (_a2 = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a2.dataset.prefix;
    if (cell) {
      const column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      const hoverState = table.hoverState = { cell, column, row };
      table == null ? void 0 : table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length)) {
      return;
    }
    const range3 = document.createRange();
    range3.setStart(cellChild, 0);
    range3.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range3.getBoundingClientRect().width;
    const padding = (Number.parseInt(getStyle(cellChild, "paddingLeft"), 10) || 0) + (Number.parseInt(getStyle(cellChild, "paddingRight"), 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      createTablePopper(parent == null ? void 0 : parent.refs.tableWrapper, cell, cell.innerText || cell.textContent, {
        placement: "top",
        strategy: "fixed"
      }, tooltipEffect);
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
    if (!cell)
      return;
    const oldHoverState = parent == null ? void 0 : parent.hoverState;
    parent == null ? void 0 : parent.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}
function useStyles(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns2 = useNamespace("table");
  const getRowStyle = (row, rowIndex) => {
    const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
    if (typeof rowStyle === "function") {
      return rowStyle.call(null, {
        row,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row, rowIndex) => {
    const classes = [ns2.e("row")];
    if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row === props.store.states.currentRow.value) {
      classes.push("current-row");
    }
    if (props.stripe && rowIndex % 2 === 1) {
      classes.push(ns2.em("row", "striped"));
    }
    const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
    if (typeof rowClassName === "string") {
      classes.push(rowClassName);
    } else if (typeof rowClassName === "function") {
      classes.push(rowClassName.call(null, {
        row,
        rowIndex
      }));
    }
    return classes;
  };
  const getCellStyle = (rowIndex, columnIndex, row, column) => {
    const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
    let cellStyles = cellStyle != null ? cellStyle : {};
    if (typeof cellStyle === "function") {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = column.isSubColumn ? null : getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, cellStyles, fixedStyle);
  };
  const getCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = column.isSubColumn ? [] : getFixedColumnsClass(ns2.b(), columnIndex, props == null ? void 0 : props.fixed, props.store);
    const classes = [column.id, column.align, column.className, ...fixedClasses];
    const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
    if (typeof cellClassName === "string") {
      classes.push(cellClassName);
    } else if (typeof cellClassName === "function") {
      classes.push(cellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes.push(ns2.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  const getSpan = (row, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn2 = parent == null ? void 0 : parent.props.spanMethod;
    if (typeof fn2 === "function") {
      const result = fn2({
        row,
        column,
        rowIndex,
        columnIndex
      });
      if (Array.isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (typeof result === "object") {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  };
  const getColspanRealWidth = (columns, colspan, index2) => {
    if (colspan < 1) {
      return columns[index2].realWidth;
    }
    const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index2, index2 + colspan);
    return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  };
}
function useRender$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns2 = useNamespace("table");
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props);
  const firstDefaultColumnIndex = computed$1(() => {
    return props.store.states.columns.value.findIndex(({ type: type4 }) => type4 === "default");
  });
  const getKeyOfRow = (row, index2) => {
    const rowKey = parent.props.rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index2;
  };
  const rowRender = (row, $index, treeRowData, expanded = false) => {
    const { tooltipEffect, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = getRowClass(row, $index);
    let display = true;
    if (treeRowData) {
      rowClasses.push(ns2.em("row", `level-${treeRowData.level}`));
      display = treeRowData.display;
    }
    const displayStyle = display ? null : {
      display: "none"
    };
    return h$1("tr", {
      style: [displayStyle, getRowStyle(row, $index)],
      class: rowClasses,
      key: getKeyOfRow(row, $index),
      onDblclick: ($event) => handleDoubleClick($event, row),
      onClick: ($event) => handleClick($event, row),
      onContextmenu: ($event) => handleContextMenu($event, row),
      onMouseenter: () => handleMouseEnter($index),
      onMouseleave: handleMouseLeave
    }, columns.value.map((column, cellIndex) => {
      const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = { ...column };
      columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
      const data = {
        store: props.store,
        _self: props.context || parent,
        column: columnData,
        row,
        $index,
        cellIndex,
        expanded
      };
      if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * indent.value,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === "boolean") {
          data.treeNode.expanded = treeRowData.expanded;
          if ("loading" in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ("noLazyChildren" in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      const baseKey = `${$index},${cellIndex}`;
      const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
      const tdChildren = cellChildren(cellIndex, column, data);
      return h$1("td", {
        style: getCellStyle($index, cellIndex, row, column),
        class: getCellClass($index, cellIndex, row, column),
        key: `${patchKey}${baseKey}`,
        rowspan,
        colspan,
        onMouseenter: ($event) => handleCellMouseEnter($event, row, tooltipEffect),
        onMouseleave: handleCellMouseLeave
      }, [tdChildren]);
    }));
  };
  const cellChildren = (cellIndex, column, data) => {
    return column.renderCell(data);
  };
  const wrappedRowRender = (row, $index) => {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type: type4 }) => type4 === "expand");
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row);
      const tr = rowRender(row, $index, void 0, expanded);
      const renderExpanded = parent.renderExpanded;
      if (expanded) {
        if (!renderExpanded) {
          console.error("[Element Error]renderExpanded is required.");
          return tr;
        }
        return [
          [
            tr,
            h$1("tr", {
              key: `expanded-row__${tr.key}`
            }, [
              h$1("td", {
                colspan: columns.length,
                class: `${ns2.e("cell")} ${ns2.e("expanded-cell")}`
              }, [renderExpanded({ row, $index, store, expanded })])
            ])
          ]
        ];
      } else {
        return [[tr]];
      }
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true
        };
        if (typeof cur.lazy === "boolean") {
          if (typeof cur.loaded === "boolean" && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row, $index, treeRowData)];
      if (cur) {
        let i2 = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (childKey === void 0 || childKey === null) {
              throw new Error("For nested data item, row-key is required.");
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (typeof cur.lazy === "boolean") {
                if (typeof cur.loaded === "boolean" && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i2++;
            tmp.push(rowRender(node, $index + i2, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row, $index, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger
  };
}
const defaultProps$2 = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var TableBody = defineComponent({
  name: "ElTableBody",
  props: defaultProps$2,
  setup(props) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns2 = useNamespace("table");
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    watch(props.store.states.hoverRow, (newVal, oldVal) => {
      if (!props.store.states.isComplex.value || !isClient)
        return;
      let raf = window.requestAnimationFrame;
      if (!raf) {
        raf = (fn2) => window.setTimeout(fn2, 16);
      }
      raf(() => {
        var _a2;
        const rows = (_a2 = instance == null ? void 0 : instance.vnode.el) == null ? void 0 : _a2.querySelectorAll(`.${ns2.e("row")}`);
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    onUnmounted(() => {
      var _a2;
      (_a2 = removePopper) == null ? void 0 : _a2();
    });
    return {
      ns: ns2,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const { wrappedRowRender, store } = this;
    const data = store.states.data.value || [];
    return h$1("tbody", {}, [
      data.reduce((acc, row) => {
        return acc.concat(wrappedRowRender(row, acc.length));
      }, [])
    ]);
  }
});
function hColgroup(props) {
  const isAuto = props.tableLayout === "auto";
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every((column) => column.width === void 0)) {
      columns = [];
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: void 0
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };
  return h$1("colgroup", {}, columns.map((column) => h$1("col", getPropsData(column))));
}
hColgroup.props = ["columns", "tableLayout"];
function useMapState() {
  const table = inject(TABLE_INJECTION_KEY);
  const store = table == null ? void 0 : table.store;
  const leftFixedLeafCount = computed$1(() => {
    return store.states.fixedLeafColumnsLength.value;
  });
  const rightFixedLeafCount = computed$1(() => {
    return store.states.rightFixedColumns.value.length;
  });
  const columnsCount = computed$1(() => {
    return store.states.columns.value.length;
  });
  const leftFixedCount = computed$1(() => {
    return store.states.fixedColumns.value.length;
  });
  const rightFixedCount = computed$1(() => {
    return store.states.rightFixedColumns.value.length;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns
  };
}
function useStyle$1(props) {
  const { columns } = useMapState();
  const ns2 = useNamespace("table");
  const getCellClasses = (columns2, cellIndex) => {
    const column = columns2[cellIndex];
    const classes = [
      ns2.e("cell"),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns2.b(), cellIndex, column.fixed, props.store)
    ];
    if (column.className) {
      classes.push(column.className);
    }
    if (!column.children) {
      classes.push(ns2.is("leaf"));
    }
    return classes;
  };
  const getCellStyles = (column, cellIndex) => {
    const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return fixedStyle;
  };
  return {
    getCellClasses,
    getCellStyles,
    columns
  };
}
var TableFooter = defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
    const ns2 = useNamespace("table");
    return {
      ns: ns2,
      getCellClasses,
      getCellStyles,
      columns
    };
  },
  render() {
    const {
      columns,
      getCellStyles,
      getCellClasses,
      summaryMethod,
      sumText,
      ns: ns2
    } = this;
    const data = this.store.states.data.value;
    let sums = [];
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data
      });
    } else {
      columns.forEach((column, index2) => {
        if (index2 === 0) {
          sums[index2] = sumText;
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!Number.isNaN(+value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index2] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(+value)) {
              return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index2] = "";
        }
      });
    }
    return h$1("table", {
      class: ns2.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      hColgroup({
        columns
      }),
      h$1("tbody", [
        h$1("tr", {}, [
          ...columns.map((column, cellIndex) => h$1("td", {
            key: cellIndex,
            colspan: column.colSpan,
            rowspan: column.rowSpan,
            class: getCellClasses(columns, cellIndex),
            style: getCellStyles(column, cellIndex)
          }, [
            h$1("div", {
              class: ["cell", column.labelClassName]
            }, [sums[cellIndex]])
          ]))
        ])
      ])
    ]);
  }
});
function useUtils(store) {
  const setCurrentRow = (row) => {
    store.commit("setCurrentRow", row);
  };
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };
  const toggleRowSelection = (row, selected) => {
    store.toggleRowSelection(row, selected, false);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row, expanded) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const sort = (prop, order) => {
    store.commit("sort", { prop, order });
  };
  return {
    setCurrentRow,
    getSelectionRows,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort
  };
}
function useStyle(props, layout, store, table) {
  const isHidden2 = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null,
    headerHeight: null
  });
  const isGroup = ref(false);
  const scrollbarViewStyle = {
    display: "inline-block",
    verticalAlign: "middle"
  };
  const tableWidth = ref();
  const tableScrollHeight = ref(0);
  const bodyScrollHeight = ref(0);
  const headerScrollHeight = ref(0);
  const footerScrollHeight = ref(0);
  watchEffect(() => {
    layout.setHeight(props.height);
  });
  watchEffect(() => {
    layout.setMaxHeight(props.maxHeight);
  });
  watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
    if (!unref(rowKey))
      return;
    store.setCurrentRowKey(`${currentRowKey}`);
  }, {
    immediate: true
  });
  watch(() => props.data, (data) => {
    table.store.commit("setData", data);
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table.store.commit("setHoverRow", null);
    if (table.hoverState)
      table.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed$1(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const tableBodyStyles = computed$1(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
    };
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    requestAnimationFrame(syncPosition);
  };
  onMounted(async () => {
    await nextTick();
    store.updateColumns();
    bindEvents();
    requestAnimationFrame(doLayout);
    const el = table.vnode.el;
    const tableHeader = table.refs.headerWrapper;
    if (props.flexible && el && el.parentElement) {
      el.parentElement.style.minWidth = "0";
    }
    resizeState.value = {
      width: tableWidth.value = el.offsetWidth,
      height: el.offsetHeight,
      headerHeight: props.showHeader && tableHeader ? tableHeader.offsetHeight : null
    };
    store.states.columns.value.forEach((column) => {
      if (column.filteredValue && column.filteredValue.length) {
        table.store.commit("filterChange", {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });
    table.$ready = true;
  });
  const setScrollClassByEl = (el, className) => {
    if (!el)
      return;
    const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
    classList.push(layout.scrollX.value ? className : "is-scrolling-none");
    el.className = classList.join(" ");
  };
  const setScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    setScrollClassByEl(tableWrapper, className);
  };
  const hasScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    return !!(tableWrapper && tableWrapper.classList.contains(className));
  };
  const syncPosition = function() {
    if (!table.refs.scrollBarRef)
      return;
    if (!layout.scrollX.value) {
      const scrollingNoneClass = "is-scrolling-none";
      if (!hasScrollClass(scrollingNoneClass)) {
        setScrollClass(scrollingNoneClass);
      }
      return;
    }
    const scrollContainer = table.refs.scrollBarRef.wrap$;
    if (!scrollContainer)
      return;
    const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
    const { headerWrapper, footerWrapper } = table.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass("is-scrolling-right");
    } else if (scrollLeft === 0) {
      setScrollClass("is-scrolling-left");
    } else {
      setScrollClass("is-scrolling-middle");
    }
  };
  const bindEvents = () => {
    if (!table.refs.scrollBarRef)
      return;
    if (table.refs.scrollBarRef.wrap$) {
      useEventListener(table.refs.scrollBarRef.wrap$, "scroll", syncPosition, {
        passive: true
      });
    }
    if (props.fit) {
      useResizeObserver(table.vnode.el, resizeListener);
    } else {
      useEventListener(window, "resize", resizeListener);
    }
    useResizeObserver(table.refs.bodyWrapper, () => {
      var _a2, _b;
      resizeListener();
      (_b = (_a2 = table.refs) == null ? void 0 : _a2.scrollBarRef) == null ? void 0 : _b.update();
    });
  };
  const resizeListener = () => {
    var _a2, _b, _c;
    const el = table.vnode.el;
    if (!table.$ready || !el)
      return;
    let shouldUpdateLayout = false;
    const {
      width: oldWidth,
      height: oldHeight,
      headerHeight: oldHeaderHeight
    } = resizeState.value;
    const width = tableWidth.value = el.offsetWidth;
    if (oldWidth !== width) {
      shouldUpdateLayout = true;
    }
    const height = el.offsetHeight;
    if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) {
      shouldUpdateLayout = true;
    }
    const tableHeader = props.tableLayout === "fixed" ? table.refs.headerWrapper : (_a2 = table.refs.tableHeaderRef) == null ? void 0 : _a2.$el;
    if (props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) !== oldHeaderHeight) {
      shouldUpdateLayout = true;
    }
    tableScrollHeight.value = ((_b = table.refs.tableWrapper) == null ? void 0 : _b.scrollHeight) || 0;
    headerScrollHeight.value = (tableHeader == null ? void 0 : tableHeader.scrollHeight) || 0;
    footerScrollHeight.value = ((_c = table.refs.footerWrapper) == null ? void 0 : _c.offsetHeight) || 0;
    bodyScrollHeight.value = tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value;
    if (shouldUpdateLayout) {
      resizeState.value = {
        width,
        height,
        headerHeight: props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) || 0
      };
      doLayout();
    }
  };
  const tableSize = useSize();
  const bodyWidth = computed$1(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const tableLayout = computed$1(() => {
    if (props.maxHeight)
      return "fixed";
    return props.tableLayout;
  });
  const emptyBlockStyle = computed$1(() => {
    if (props.data && props.data.length)
      return null;
    let height = "100%";
    if (props.height && bodyScrollHeight.value) {
      height = `${bodyScrollHeight.value}px`;
    }
    const width = tableWidth.value;
    return {
      width: width ? `${width}px` : "",
      height
    };
  });
  const tableInnerStyle = computed$1(() => {
    if (props.height) {
      return {
        height: !Number.isNaN(Number(props.height)) ? `${props.height}px` : props.height
      };
    }
    if (props.maxHeight) {
      return {
        maxHeight: !Number.isNaN(Number(props.maxHeight)) ? `${props.maxHeight}px` : props.maxHeight
      };
    }
    return {};
  });
  const scrollbarStyle = computed$1(() => {
    if (props.height) {
      return {
        height: "100%"
      };
    }
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = props.maxHeight;
        const reachMaxHeight = tableScrollHeight.value >= Number(maxHeight);
        if (reachMaxHeight) {
          return {
            maxHeight: `${tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value}px`
          };
        }
      } else {
        return {
          maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)`
        };
      }
    }
    return {};
  });
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table.refs.bodyWrapper;
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
    }
  };
  return {
    isHidden: isHidden2,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    emptyBlockStyle,
    handleFixedMousewheel,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle,
    tableInnerStyle,
    scrollbarStyle
  };
}
var defaultProps$1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children"
      };
    }
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  },
  flexible: Boolean
};
const useScrollbar = () => {
  const scrollBarRef = ref();
  const scrollTo = (options, yCoord) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar) {
      scrollbar.scrollTo(options, yCoord);
    }
  };
  const setScrollPosition = (position, offset) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar && isNumber(offset) && ["Top", "Left"].includes(position)) {
      scrollbar[`setScroll${position}`](offset);
    }
  };
  const setScrollTop = (top) => setScrollPosition("Top", top);
  const setScrollLeft = (left) => setScrollPosition("Left", left);
  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft
  };
};
let tableIdSeed = 1;
const _sfc_main$k = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    ElScrollbar,
    hColgroup
  },
  props: defaultProps$1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(props) {
    const { t: t2 } = useLocale();
    const ns2 = useNamespace("table");
    const table = getCurrentInstance();
    provide(TABLE_INJECTION_KEY, table);
    const store = createStore(table, props);
    table.store = store;
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table.layout = layout;
    const isEmpty2 = computed$1(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort
    } = useUtils(store);
    const {
      isHidden: isHidden2,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      handleFixedMousewheel,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle
    } = useStyle(props, layout, store, table);
    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
    const debouncedUpdateLayout = debounce(doLayout, 50);
    const tableId = `el-table_${tableIdSeed++}`;
    table.tableId = tableId;
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    const computedSumText = computed$1(() => props.sumText || t2("el.table.sumText"));
    const computedEmptyText = computed$1(() => {
      return props.emptyText || t2("el.table.emptyText");
    });
    return {
      ns: ns2,
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden: isHidden2,
      isEmpty: isEmpty2,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      t: t2,
      setDragVisible,
      context: table,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle,
      scrollBarRef,
      scrollTo,
      setScrollLeft,
      setScrollTop
    };
  }
});
const _hoisted_1$9 = ["data-prefix"];
const _hoisted_2$7 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hColgroup = resolveComponent("hColgroup");
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_table_footer = resolveComponent("table-footer");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
      {
        [_ctx.ns.m("fit")]: _ctx.fit,
        [_ctx.ns.m("striped")]: _ctx.stripe,
        [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
        [_ctx.ns.m("hidden")]: _ctx.isHidden,
        [_ctx.ns.m("group")]: _ctx.isGroup,
        [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
        [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
        [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
        [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
        [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
        "has-footer": _ctx.showSummary
      },
      _ctx.ns.m(_ctx.tableSize),
      _ctx.className,
      _ctx.ns.b(),
      _ctx.ns.m(`layout-${_ctx.tableLayout}`)
    ]),
    style: normalizeStyle(_ctx.style),
    "data-prefix": _ctx.ns.namespace.value,
    onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.handleMouseLeave())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("inner-wrapper")),
      style: normalizeStyle(_ctx.tableInnerStyle)
    }, [
      createElementVNode("div", _hoisted_2$7, [
        renderSlot(_ctx.$slots, "default")
      ], 512),
      _ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "headerWrapper",
        class: normalizeClass(_ctx.ns.e("header-wrapper"))
      }, [
        createElementVNode("table", {
          ref: "tableHeader",
          class: normalizeClass(_ctx.ns.e("header")),
          style: normalizeStyle(_ctx.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_header, {
            ref: "tableHeaderRef",
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            onSetDragVisible: _ctx.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      createElementVNode("div", {
        ref: "bodyWrapper",
        class: normalizeClass(_ctx.ns.e("body-wrapper"))
      }, [
        createVNode(_component_el_scrollbar, {
          ref: "scrollBarRef",
          "view-style": _ctx.scrollbarViewStyle,
          "wrap-style": _ctx.scrollbarStyle,
          always: _ctx.scrollbarAlwaysOn
        }, {
          default: withCtx(() => [
            createElementVNode("table", {
              ref: "tableBody",
              class: normalizeClass(_ctx.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: normalizeStyle({
                width: _ctx.bodyWidth,
                tableLayout: _ctx.tableLayout
              })
            }, [
              createVNode(_component_hColgroup, {
                columns: _ctx.store.states.columns.value,
                "table-layout": _ctx.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              _ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
                key: 0,
                ref: "tableHeaderRef",
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                onSetDragVisible: _ctx.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : createCommentVNode("v-if", true),
              createVNode(_component_table_body, {
                context: _ctx.context,
                highlight: _ctx.highlightCurrentRow,
                "row-class-name": _ctx.rowClassName,
                "tooltip-effect": _ctx.tooltipEffect,
                "row-style": _ctx.rowStyle,
                store: _ctx.store,
                stripe: _ctx.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "row-style", "store", "stripe"])
            ], 6),
            _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "emptyBlock",
              style: normalizeStyle(_ctx.emptyBlockStyle),
              class: normalizeClass(_ctx.ns.e("empty-block"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.ns.e("empty-text"))
              }, [
                renderSlot(_ctx.$slots, "empty", {}, () => [
                  createTextVNode(toDisplayString(_ctx.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : createCommentVNode("v-if", true),
            _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref: "appendWrapper",
              class: normalizeClass(_ctx.ns.e("append-wrapper"))
            }, [
              renderSlot(_ctx.$slots, "append")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      _ctx.showSummary ? withDirectives((openBlock(), createElementBlock("div", {
        key: 1,
        ref: "footerWrapper",
        class: normalizeClass(_ctx.ns.e("footer-wrapper"))
      }, [
        createVNode(_component_table_footer, {
          border: _ctx.border,
          "default-sort": _ctx.defaultSort,
          store: _ctx.store,
          style: normalizeStyle(_ctx.tableBodyStyles),
          "sum-text": _ctx.computedSumText,
          "summary-method": _ctx.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [vShow, !_ctx.isEmpty],
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      _ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(_ctx.ns.e("border-left-patch"))
      }, null, 2)) : createCommentVNode("v-if", true)
    ], 6),
    withDirectives(createElementVNode("div", {
      ref: "resizeProxy",
      class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
    }, null, 2), [
      [vShow, _ctx.resizeProxyVisible]
    ])
  ], 46, _hoisted_1$9);
}
var Table = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const defaultClassNames = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
const cellStarts = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
};
const getDefaultClassName = (type4) => {
  return defaultClassNames[type4] || "";
};
const cellForced = {
  selection: {
    renderHeader({ store }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return h$1(ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value
      });
    },
    renderCell({
      row,
      column,
      store,
      $index
    }) {
      return h$1(ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row)
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({ column }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i2 = $index + 1;
      const index2 = column.index;
      if (typeof index2 === "number") {
        i2 = $index + index2;
      } else if (typeof index2 === "function") {
        i2 = index2($index);
      }
      return h$1("div", {}, [i2]);
    },
    sortable: false
  },
  expand: {
    renderHeader({ column }) {
      return column.label || "";
    },
    renderCell({
      row,
      store,
      expanded
    }) {
      const { ns: ns2 } = store;
      const classes = [ns2.e("expand-icon")];
      if (expanded) {
        classes.push(ns2.em("expand-icon", "expanded"));
      }
      const callback = function(e2) {
        e2.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h$1("div", {
        class: classes,
        onClick: callback
      }, {
        default: () => {
          return [
            h$1(ElIcon, null, {
              default: () => {
                return [h$1(arrow_right_default)];
              }
            })
          ];
        }
      });
    },
    sortable: false,
    resizable: false
  }
};
function defaultRenderCell({
  row,
  column,
  $index
}) {
  var _a2;
  const property = column.property;
  const value = property && getProp(row, property).value;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return ((_a2 = value == null ? void 0 : value.toString) == null ? void 0 : _a2.call(value)) || "";
}
function treeCellPrefix({
  row,
  treeNode,
  store
}, createPlacehoder = false) {
  const { ns: ns2 } = store;
  if (!treeNode) {
    if (createPlacehoder) {
      return [
        h$1("span", {
          class: ns2.e("placeholder")
        })
      ];
    }
    return null;
  }
  const ele = [];
  const callback = function(e2) {
    e2.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h$1("span", {
      class: ns2.e("indent"),
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns2.e("expand-icon"),
      treeNode.expanded ? ns2.em("expand-icon", "expanded") : ""
    ];
    let icon = arrow_right_default;
    if (treeNode.loading) {
      icon = loading_default;
    }
    ele.push(h$1("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          h$1(ElIcon, { class: { [ns2.is("loading")]: treeNode.loading } }, {
            default: () => [h$1(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(h$1("span", {
      class: ns2.e("placeholder")
    }));
  }
  return ele;
}
function getAllAliases(props, aliases) {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
function useWatcher(owner, props_) {
  const instance = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          let value = newVal;
          if (columnKey === "width" && key === "realWidth") {
            value = parseWidth(newVal);
          }
          if (columnKey === "minWidth" && key === "realMinWidth") {
            value = parseMinWidth(newVal);
          }
          instance.columnConfig.value[columnKey] = value;
          instance.columnConfig.value[key] = value;
          const updateColumns = columnKey === "fixed";
          owner.value.store.scheduleLayout(updateColumns);
        });
      }
    });
  };
  const registerNormalWatchers = () => {
    const props = [
      "label",
      "filters",
      "filterMultiple",
      "sortable",
      "index",
      "formatter",
      "className",
      "labelClassName",
      "showOverflowTooltip"
    ];
    const aliases = {
      property: "prop",
      align: "realAlign",
      headerAlign: "realHeaderAlign"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance.columnConfig.value[key] = newVal;
        });
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}
function useRender(props, slots, owner) {
  const instance = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  const ns2 = useNamespace("table");
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed$1(() => {
    let parent = instance.vnode.vParent || instance.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const hasTreeColumn = computed$1(() => {
    const { store } = instance.parent;
    if (!store)
      return false;
    const { treeData } = store.states;
    const treeDataValue = treeData.value;
    return treeDataValue && Object.keys(treeDataValue).length > 0;
  });
  const realWidth = ref(parseWidth(props.width));
  const realMinWidth = ref(parseMinWidth(props.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = Number(column.width === void 0 ? column.minWidth : column.width);
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type4 = column.type;
    const source = cellForced[type4] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (prop !== "className" && value !== void 0) {
        column[prop] = value;
      }
    });
    const className = getDefaultClassName(type4);
    if (className) {
      const forceClass = `${unref(ns2.namespace)}-${className}`;
      column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
    }
    return column;
  };
  const checkSubColumn = (children) => {
    if (Array.isArray(children)) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _a2;
      if (((_a2 = item == null ? void 0 : item.type) == null ? void 0 : _a2.name) === "ElTableColumn") {
        item.vParent = instance;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props.renderHeader)
      ;
    else if (column.type !== "selection") {
      column.renderHeader = (scope) => {
        instance.columnConfig.value["label"];
        const renderHeader = slots.header;
        return renderHeader ? renderHeader(scope) : column.label;
      };
    }
    let originRenderCell = column.renderCell;
    const hasTreeColumnValue = hasTreeColumn.value;
    if (column.type === "expand") {
      column.renderCell = (data) => h$1("div", {
        class: "cell"
      }, [originRenderCell(data)]);
      owner.value.renderExpanded = (data) => {
        return slots.default ? slots.default(data) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data) => {
        let children = null;
        if (slots.default) {
          const vnodes = slots.default(data);
          children = vnodes.some((v2) => v2.type !== Comment) ? vnodes : originRenderCell(data);
        } else {
          children = originRenderCell(data);
        }
        const shouldCreatePlaceholder = hasTreeColumnValue && data.cellIndex === 0;
        const prefix = treeCellPrefix(data, shouldCreatePlaceholder);
        const props2 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props2.class = `${props2.class} ${unref(ns2.namespace)}-tooltip`;
          props2.style = {
            width: `${(data.column.realWidth || Number(data.column.width)) - 1}px`
          };
        }
        checkSubColumn(children);
        return h$1("div", props2, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props[key];
        });
      }
      return prev;
    }, {});
  };
  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex
  };
}
var defaultProps = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showTooltipWhenOverflow: Boolean,
  showOverflowTooltip: Boolean,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every((order) => ["ascending", "descending", null].includes(order));
    }
  }
};
let columnIdSeed = 1;
var ElTableColumn$1 = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox
  },
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const owner = computed$1(() => {
      let parent2 = instance.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(owner, props);
    const {
      columnId,
      isSubColumn,
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign
    } = useRender(props, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;
    onBeforeMount(() => {
      isSubColumn.value = owner.value !== parent;
      const type4 = props.type || "default";
      const sortable = props.sortable === "" ? true : props.sortable;
      const defaults = {
        ...cellStarts[type4],
        id: columnId.value,
        type: type4,
        property: props.prop || props.property,
        align: realAlign,
        headerAlign: realHeaderAlign,
        showOverflowTooltip: props.showOverflowTooltip || props.showTooltipWhenOverflow,
        filterable: props.filters || props.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: false,
        isSubColumn: false,
        filterOpened: false,
        sortable,
        index: props.index,
        rawColumnKey: instance.vnode.key
      };
      const basicProps = [
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ];
      const sortProps = ["sortMethod", "sortBy", "sortOrders"];
      const selectProps = ["selectable", "reserveSelection"];
      const filterProps = [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ];
      let column = getPropsData(basicProps, sortProps, selectProps, filterProps);
      column = mergeOptions(defaults, column);
      const chains = compose(setColumnRenders, setColumnWidth, setColumnForcedProps);
      column = chains(column);
      columnConfig.value = column;
      registerNormalWatchers();
      registerComplexWatchers();
    });
    onMounted(() => {
      var _a2;
      const parent2 = columnOrTableParent.value;
      const children = isSubColumn.value ? parent2.vnode.el.children : (_a2 = parent2.refs.hiddenColumns) == null ? void 0 : _a2.children;
      const getColumnIndex = () => getColumnElIndex(children || [], instance.vnode.el);
      columnConfig.value.getColumnIndex = getColumnIndex;
      const columnIndex = getColumnIndex();
      columnIndex > -1 && owner.value.store.commit("insertColumn", columnConfig.value, isSubColumn.value ? parent2.columnConfig.value : null);
    });
    onBeforeUnmount(() => {
      owner.value.store.commit("removeColumn", columnConfig.value, isSubColumn.value ? parent.columnConfig.value : null);
    });
    instance.columnId = columnId.value;
    instance.columnConfig = columnConfig;
    return;
  },
  render() {
    var _a2, _b, _c;
    try {
      const renderDefault = (_b = (_a2 = this.$slots).default) == null ? void 0 : _b.call(_a2, {
        row: {},
        column: {},
        $index: -1
      });
      const children = [];
      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && Array.isArray(childNode.children)) {
            childNode.children.forEach((vnode2) => {
              if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString(vnode2 == null ? void 0 : vnode2.children)) {
                children.push(vnode2);
              }
            });
          }
        }
      }
      const vnode = h$1("div", children);
      return vnode;
    } catch (e2) {
      return h$1("div", []);
    }
  }
});
const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);
const SCOPE$1 = "ElUpload";
class UploadAjaxError extends Error {
  constructor(message, status, method4, url2) {
    super(message);
    this.name = "UploadAjaxError";
    this.status = status;
    this.method = method4;
    this.url = url2;
  }
}
function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to ${option.method} ${action} ${xhr.status}`;
  }
  return new UploadAjaxError(msg, xhr.status, option.method, action);
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e2) {
    return text;
  }
}
const ajaxUpload = (option) => {
  if (typeof XMLHttpRequest === "undefined")
    throwError(SCOPE$1, "XMLHttpRequest is undefined");
  const xhr = new XMLHttpRequest();
  const action = option.action;
  if (xhr.upload) {
    xhr.upload.addEventListener("progress", (evt) => {
      const progressEvt = evt;
      progressEvt.percent = evt.total > 0 ? evt.loaded / evt.total * 100 : 0;
      option.onProgress(progressEvt);
    });
  }
  const formData = new FormData();
  if (option.data) {
    for (const [key, value] of Object.entries(option.data)) {
      if (Array.isArray(value))
        formData.append(key, ...value);
      else
        formData.append(key, value);
    }
  }
  formData.append(option.filename, option.file, option.file.name);
  xhr.addEventListener("error", () => {
    option.onError(getError(action, option, xhr));
  });
  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  });
  xhr.open(option.method, action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => xhr.setRequestHeader(key, value));
  } else {
    for (const [key, value] of Object.entries(headers)) {
      if (isNil(value))
        continue;
      xhr.setRequestHeader(key, String(value));
    }
  }
  xhr.send(formData);
  return xhr;
};
const uploadListTypes = ["text", "picture", "picture-card"];
let fileId = 1;
const genFileId = () => Date.now() + fileId++;
const uploadBaseProps = buildProps({
  action: {
    type: String,
    default: "#"
  },
  headers: {
    type: definePropType(Object)
  },
  method: {
    type: String,
    default: "post"
  },
  data: {
    type: Object,
    default: () => mutable({})
  },
  multiple: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: "file"
  },
  drag: {
    type: Boolean,
    default: false
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  accept: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "select"
  },
  fileList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  httpRequest: {
    type: definePropType(Function),
    default: ajaxUpload
  },
  disabled: Boolean,
  limit: Number
});
const uploadProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  beforeRemove: {
    type: definePropType(Function)
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onChange: {
    type: definePropType(Function),
    default: NOOP
  },
  onPreview: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  }
});
const uploadListProps = buildProps({
  files: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  disabled: {
    type: Boolean,
    default: false
  },
  handlePreview: {
    type: definePropType(Function),
    default: NOOP
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  }
});
const uploadListEmits = {
  remove: (file) => !!file
};
const _hoisted_1$8 = ["onKeydown"];
const _hoisted_2$6 = ["src"];
const _hoisted_3$3 = ["onClick"];
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = ["onClick"];
const __default__$b = {
  name: "ElUploadList"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: uploadListProps,
  emits: uploadListEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { t: t2 } = useLocale();
    const nsUpload = useNamespace("upload");
    const nsIcon = useNamespace("icon");
    const nsList = useNamespace("list");
    const focusing = ref(false);
    const handleClick = (file) => {
      props.handlePreview(file);
    };
    const handleRemove = (file) => {
      emit("remove", file);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        tag: "ul",
        class: normalizeClass([
          unref(nsUpload).b("list"),
          unref(nsUpload).bm("list", _ctx.listType),
          unref(nsUpload).is("disabled", _ctx.disabled)
        ]),
        name: unref(nsList).b()
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, (file) => {
            return openBlock(), createElementBlock("li", {
              key: file.uid || file.name,
              class: normalizeClass([
                unref(nsUpload).be("list", "item"),
                unref(nsUpload).is(file.status),
                { focusing: focusing.value }
              ]),
              tabindex: "0",
              onKeydown: withKeys(($event) => !_ctx.disabled && handleRemove(file), ["delete"]),
              onFocus: _cache[0] || (_cache[0] = ($event) => focusing.value = true),
              onBlur: _cache[1] || (_cache[1] = ($event) => focusing.value = false),
              onClick: _cache[2] || (_cache[2] = ($event) => focusing.value = false)
            }, [
              renderSlot(_ctx.$slots, "default", { file }, () => [
                _ctx.listType === "picture" || file.status !== "uploading" && _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: normalizeClass(unref(nsUpload).be("list", "item-thumbnail")),
                  src: file.url,
                  alt: ""
                }, null, 10, _hoisted_2$6)) : createCommentVNode("v-if", true),
                _ctx.listType !== "picture" && (file.status === "uploading" || _ctx.listType !== "picture-card") ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(nsUpload).be("list", "item-info"))
                }, [
                  createElementVNode("a", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-name")),
                    onClick: withModifiers(($event) => handleClick(file), ["prevent"])
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("document"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(document_default))
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createElementVNode("span", {
                      class: normalizeClass(unref(nsUpload).be("list", "item-file-name"))
                    }, toDisplayString(file.name), 3)
                  ], 10, _hoisted_3$3),
                  file.status === "uploading" ? (openBlock(), createBlock(unref(ElProgress), {
                    key: 0,
                    type: _ctx.listType === "picture-card" ? "circle" : "line",
                    "stroke-width": _ctx.listType === "picture-card" ? 6 : 2,
                    percentage: Number(file.percentage),
                    style: normalizeStyle(_ctx.listType === "picture-card" ? "" : "margin-top: 0.5rem")
                  }, null, 8, ["type", "stroke-width", "percentage", "style"])) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true),
                createElementVNode("label", {
                  class: normalizeClass(unref(nsUpload).be("list", "item-status-label"))
                }, [
                  _ctx.listType === "text" ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("circle-check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(circle_check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : ["picture-card", "picture"].includes(_ctx.listType) ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 1,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 2),
                !_ctx.disabled ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass(unref(nsIcon).m("close")),
                  onClick: ($event) => handleRemove(file)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])) : createCommentVNode("v-if", true),
                createCommentVNode(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),
                createCommentVNode(" This is a bug which needs to be fixed "),
                createCommentVNode(" TODO: Fix the incorrect navigation interaction "),
                !_ctx.disabled ? (openBlock(), createElementBlock("i", {
                  key: 3,
                  class: normalizeClass(unref(nsIcon).m("close-tip"))
                }, toDisplayString(unref(t2)("el.upload.deleteTip")), 3)) : createCommentVNode("v-if", true),
                _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("span", {
                  key: 4,
                  class: normalizeClass(unref(nsUpload).be("list", "item-actions"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-preview")),
                    onClick: ($event) => _ctx.handlePreview(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("zoom-in"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(zoom_in_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, _hoisted_4$1),
                  !_ctx.disabled ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(unref(nsUpload).be("list", "item-delete")),
                    onClick: ($event) => handleRemove(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("delete"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(delete_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, _hoisted_5$1)) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true)
              ])
            ], 42, _hoisted_1$8);
          }), 128)),
          renderSlot(_ctx.$slots, "append")
        ]),
        _: 3
      }, 8, ["class", "name"]);
    };
  }
});
var UploadList = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);
const uploadDraggerProps = buildProps({
  disabled: {
    type: Boolean,
    default: false
  }
});
const uploadDraggerEmits = {
  file: (file) => isArray(file)
};
const _hoisted_1$7 = ["onDrop", "onDragover"];
const __default__$a = {
  name: "ElUploadDrag"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: uploadDraggerProps,
  emits: uploadDraggerEmits,
  setup(__props, { emit }) {
    const props = __props;
    const COMPONENT_NAME2 = "ElUploadDrag";
    const uploaderContext = inject(uploadContextKey);
    if (!uploaderContext) {
      throwError(COMPONENT_NAME2, "usage: <el-upload><el-upload-dragger /></el-upload>");
    }
    const ns2 = useNamespace("upload");
    const dragover = ref(false);
    const onDrop = (e2) => {
      if (props.disabled)
        return;
      dragover.value = false;
      const files2 = Array.from(e2.dataTransfer.files);
      const accept = uploaderContext.accept.value;
      if (!accept) {
        emit("file", files2);
        return;
      }
      const filesFiltered = files2.filter((file) => {
        const { type: type4, name } = file;
        const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
        const baseType = type4.replace(/\/.*$/, "");
        return accept.split(",").map((type22) => type22.trim()).filter((type22) => type22).some((acceptedType) => {
          if (acceptedType.startsWith(".")) {
            return extension === acceptedType;
          }
          if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, "");
          }
          if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
            return type4 === acceptedType;
          }
          return false;
        });
      });
      emit("file", filesFiltered);
    };
    const onDragover = () => {
      if (!props.disabled)
        dragover.value = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns2).b("dragger"), unref(ns2).is("dragover", dragover.value)]),
        onDrop: withModifiers(onDrop, ["prevent"]),
        onDragover: withModifiers(onDragover, ["prevent"]),
        onDragleave: _cache[0] || (_cache[0] = withModifiers(($event) => dragover.value = false, ["prevent"]))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, _hoisted_1$7);
    };
  }
});
var UploadDragger = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);
const uploadContentProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onStart: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  }
});
const _hoisted_1$6 = ["onKeydown"];
const _hoisted_2$5 = ["name", "multiple", "accept"];
const __default__$9 = {
  name: "ElUploadContent",
  inheritAttrs: false
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: uploadContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns2 = useNamespace("upload");
    const requests = shallowRef({});
    const inputRef = shallowRef();
    const uploadFiles = (files2) => {
      if (files2.length === 0)
        return;
      const { autoUpload, limit, fileList, multiple, onStart, onExceed } = props;
      if (limit && fileList.length + files2.length > limit) {
        onExceed(files2, fileList);
        return;
      }
      if (!multiple) {
        files2 = files2.slice(0, 1);
      }
      for (const file of files2) {
        const rawFile = file;
        rawFile.uid = genFileId();
        onStart(rawFile);
        if (autoUpload)
          upload(rawFile);
      }
    };
    const upload = async (rawFile) => {
      inputRef.value.value = "";
      if (!props.beforeUpload) {
        return doUpload(rawFile);
      }
      let hookResult;
      try {
        hookResult = await props.beforeUpload(rawFile);
      } catch (e2) {
        hookResult = false;
      }
      if (hookResult === false) {
        props.onRemove(rawFile);
        return;
      }
      let file = rawFile;
      if (hookResult instanceof Blob) {
        if (hookResult instanceof File) {
          file = hookResult;
        } else {
          file = new File([hookResult], rawFile.name, {
            type: rawFile.type
          });
        }
      }
      doUpload(Object.assign(file, {
        uid: rawFile.uid
      }));
    };
    const doUpload = (rawFile) => {
      const {
        headers,
        data,
        method: method4,
        withCredentials,
        name: filename,
        action,
        onProgress,
        onSuccess,
        onError,
        httpRequest
      } = props;
      const { uid: uid2 } = rawFile;
      const options = {
        headers: headers || {},
        withCredentials,
        file: rawFile,
        data,
        method: method4,
        filename,
        action,
        onProgress: (evt) => {
          onProgress(evt, rawFile);
        },
        onSuccess: (res) => {
          onSuccess(res, rawFile);
          delete requests.value[uid2];
        },
        onError: (err) => {
          onError(err, rawFile);
          delete requests.value[uid2];
        }
      };
      const request = httpRequest(options);
      requests.value[uid2] = request;
      if (request instanceof Promise) {
        request.then(options.onSuccess, options.onError);
      }
    };
    const handleChange = (e2) => {
      const files2 = e2.target.files;
      if (!files2)
        return;
      uploadFiles(Array.from(files2));
    };
    const handleClick = () => {
      if (!props.disabled) {
        inputRef.value.value = "";
        inputRef.value.click();
      }
    };
    const handleKeydown = () => {
      handleClick();
    };
    const abort = (file) => {
      const _reqs = entriesOf(requests.value).filter(file ? ([uid2]) => String(file.uid) === uid2 : () => true);
      _reqs.forEach(([uid2, req]) => {
        if (req instanceof XMLHttpRequest)
          req.abort();
        delete requests.value[uid2];
      });
    };
    expose({
      abort,
      upload
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns2).b(), unref(ns2).m(_ctx.listType), unref(ns2).is("drag", _ctx.drag)]),
        tabindex: "0",
        onClick: handleClick,
        onKeydown: withKeys(withModifiers(handleKeydown, ["self"]), ["enter", "space"])
      }, [
        _ctx.drag ? (openBlock(), createBlock(UploadDragger, {
          key: 0,
          disabled: _ctx.disabled,
          onFile: uploadFiles
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["disabled"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
        createElementVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          class: normalizeClass(unref(ns2).e("input")),
          name: _ctx.name,
          multiple: _ctx.multiple,
          accept: _ctx.accept,
          type: "file",
          onChange: handleChange,
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_2$5)
      ], 42, _hoisted_1$6);
    };
  }
});
var UploadContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);
const SCOPE = "ElUpload";
const revokeObjectURL = (file) => {
  var _a2;
  if ((_a2 = file.url) == null ? void 0 : _a2.startsWith("blob:")) {
    URL.revokeObjectURL(file.url);
  }
};
const useHandlers = (props, uploadRef) => {
  const uploadFiles = useVModel(props, "fileList", void 0, { passive: true });
  const getFile = (rawFile) => uploadFiles.value.find((file) => file.uid === rawFile.uid);
  function abort(file) {
    var _a2;
    (_a2 = uploadRef.value) == null ? void 0 : _a2.abort(file);
  }
  function clearFiles(states = ["ready", "uploading", "success", "fail"]) {
    uploadFiles.value = uploadFiles.value.filter((row) => !states.includes(row.status));
  }
  const handleError = (err, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    console.error(err);
    file.status = "fail";
    uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1);
    props.onError(err, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleProgress = (evt, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    props.onProgress(evt, file, uploadFiles.value);
    file.status = "uploading";
    file.percentage = Math.round(evt.percent);
  };
  const handleSuccess = (response, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    file.status = "success";
    file.response = response;
    props.onSuccess(response, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleStart = (file) => {
    const uploadFile = {
      name: file.name,
      percentage: 0,
      status: "ready",
      size: file.size,
      raw: file,
      uid: file.uid
    };
    if (props.listType === "picture-card" || props.listType === "picture") {
      try {
        uploadFile.url = URL.createObjectURL(file);
      } catch (err) {
        debugWarn(SCOPE, err.message);
        props.onError(err, uploadFile, uploadFiles.value);
      }
    }
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile, uploadFiles.value);
  };
  const handleRemove = async (file) => {
    const uploadFile = file instanceof File ? getFile(file) : file;
    if (!uploadFile)
      throwError(SCOPE, "file to be removed not found");
    const doRemove = (file2) => {
      abort(file2);
      const fileList = uploadFiles.value;
      fileList.splice(fileList.indexOf(file2), 1);
      props.onRemove(file2, fileList);
      revokeObjectURL(file2);
    };
    if (props.beforeRemove) {
      const before = await props.beforeRemove(uploadFile, uploadFiles.value);
      if (before !== false)
        doRemove(uploadFile);
    } else {
      doRemove(uploadFile);
    }
  };
  function submit() {
    uploadFiles.value.filter(({ status }) => status === "ready").forEach(({ raw }) => {
      var _a2;
      return raw && ((_a2 = uploadRef.value) == null ? void 0 : _a2.upload(raw));
    });
  }
  watch(() => props.listType, (val) => {
    if (val !== "picture-card" && val !== "picture") {
      return;
    }
    uploadFiles.value = uploadFiles.value.map((file) => {
      const { raw, url: url2 } = file;
      if (!url2 && raw) {
        try {
          file.url = URL.createObjectURL(raw);
        } catch (err) {
          props.onError(err, file, uploadFiles.value);
        }
      }
      return file;
    });
  });
  watch(uploadFiles, (files2) => {
    for (const file of files2) {
      file.uid || (file.uid = genFileId());
      file.status || (file.status = "success");
    }
  }, { immediate: true, deep: true });
  return {
    uploadFiles,
    abort,
    clearFiles,
    handleError,
    handleProgress,
    handleStart,
    handleSuccess,
    handleRemove,
    submit
  };
};
const __default__$8 = {
  name: "ElUpload"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    const disabled = useDisabled$1();
    const uploadRef = shallowRef();
    const {
      abort,
      submit,
      clearFiles,
      uploadFiles,
      handleStart,
      handleError,
      handleRemove,
      handleSuccess,
      handleProgress
    } = useHandlers(props, uploadRef);
    const isPictureCard = computed$1(() => props.listType === "picture-card");
    const uploadContentProps2 = computed$1(() => ({
      ...props,
      onStart: handleStart,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
      onRemove: handleRemove
    }));
    onBeforeUnmount(() => {
      uploadFiles.value.forEach(({ url: url2 }) => {
        if (url2 == null ? void 0 : url2.startsWith("blob:"))
          URL.revokeObjectURL(url2);
      });
    });
    provide(uploadContextKey, {
      accept: toRef(props, "accept")
    });
    expose({
      abort,
      submit,
      clearFiles,
      handleStart,
      handleRemove
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 0,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({
          append: withCtx(() => [
            _ctx.listType === "picture-card" ? (openBlock(), createBlock(UploadContent, mergeProps({
              key: 0,
              ref_key: "uploadRef",
              ref: uploadRef
            }, unref(uploadContentProps2)), {
              default: withCtx(() => [
                unref(slots).trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
                !unref(slots).trigger && unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16)) : createCommentVNode("v-if", true)
          ]),
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file }) => [
              renderSlot(_ctx.$slots, "file", { file })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true),
        _ctx.listType !== "picture-card" ? (openBlock(), createBlock(UploadContent, mergeProps({
          key: 1,
          ref_key: "uploadRef",
          ref: uploadRef
        }, unref(uploadContentProps2)), {
          default: withCtx(() => [
            unref(slots).trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
            !unref(slots).trigger && unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16)) : createCommentVNode("v-if", true),
        _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "default", { key: 2 }) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "tip"),
        !unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 3,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({ _: 2 }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file }) => [
              renderSlot(_ctx.$slots, "file", { file })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
var Upload = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);
const ElUpload = withInstall(Upload);
function createLoadingComponent(options) {
  let afterLeaveTimer;
  const ns2 = useNamespace("loading");
  const afterLeaveFlag = ref(false);
  const data = reactive({
    ...options,
    originalPosition: "",
    originalOverflow: "",
    visible: false
  });
  function setText(text) {
    data.text = text;
  }
  function destroySelf() {
    const target = data.parent;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute("loading-number");
      loadingNumber = Number.parseInt(loadingNumber) - 1;
      if (!loadingNumber) {
        removeClass(target, ns2.bm("parent", "relative"));
        target.removeAttribute("loading-number");
      } else {
        target.setAttribute("loading-number", loadingNumber.toString());
      }
      removeClass(target, ns2.bm("parent", "hidden"));
    }
    removeElLoadingChild();
    loadingInstance.unmount();
  }
  function removeElLoadingChild() {
    var _a2, _b;
    (_b = (_a2 = vm.$el) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.removeChild(vm.$el);
  }
  function close() {
    var _a2;
    if (options.beforeClose && !options.beforeClose())
      return;
    const target = data.parent;
    target.vLoadingAddClassList = void 0;
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);
    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false;
        destroySelf();
      }
    }, 400);
    data.visible = false;
    (_a2 = options.closed) == null ? void 0 : _a2.call(options);
  }
  function handleAfterLeave() {
    if (!afterLeaveFlag.value)
      return;
    afterLeaveFlag.value = false;
    destroySelf();
  }
  const elLoadingComponent = {
    name: "ElLoading",
    setup() {
      return () => {
        const svg = data.spinner || data.svg;
        const spinner = h$1("svg", {
          class: "circular",
          viewBox: data.svgViewBox ? data.svgViewBox : "25 25 50 50",
          ...svg ? { innerHTML: svg } : {}
        }, [
          h$1("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none"
          })
        ]);
        const spinnerText = data.text ? h$1("p", { class: ns2.b("text") }, [data.text]) : void 0;
        return h$1(Transition, {
          name: ns2.b("fade"),
          onAfterLeave: handleAfterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createVNode("div", {
              style: {
                backgroundColor: data.background || ""
              },
              class: [
                ns2.b("mask"),
                data.customClass,
                data.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              h$1("div", {
                class: ns2.b("spinner")
              }, [spinner, spinnerText])
            ]), [[vShow, data.visible]])
          ])
        });
      };
    }
  };
  const loadingInstance = createApp(elLoadingComponent);
  const vm = loadingInstance.mount(document.createElement("div"));
  return {
    ...toRefs(data),
    setText,
    removeElLoadingChild,
    close,
    handleAfterLeave,
    vm,
    get $el() {
      return vm.$el;
    }
  };
}
let fullscreenInstance = void 0;
const Loading = function(options = {}) {
  if (!isClient)
    return void 0;
  const resolved = resolveOptions(options);
  if (resolved.fullscreen && fullscreenInstance) {
    return fullscreenInstance;
  }
  const instance = createLoadingComponent({
    ...resolved,
    closed: () => {
      var _a2;
      (_a2 = resolved.closed) == null ? void 0 : _a2.call(resolved);
      if (resolved.fullscreen)
        fullscreenInstance = void 0;
    }
  });
  addStyle(resolved, resolved.parent, instance);
  addClassList(resolved, resolved.parent, instance);
  resolved.parent.vLoadingAddClassList = () => addClassList(resolved, resolved.parent, instance);
  let loadingNumber = resolved.parent.getAttribute("loading-number");
  if (!loadingNumber) {
    loadingNumber = "1";
  } else {
    loadingNumber = `${Number.parseInt(loadingNumber) + 1}`;
  }
  resolved.parent.setAttribute("loading-number", loadingNumber);
  resolved.parent.appendChild(instance.$el);
  nextTick(() => instance.visible.value = resolved.visible);
  if (resolved.fullscreen) {
    fullscreenInstance = instance;
  }
  return instance;
};
const resolveOptions = (options) => {
  var _a2, _b, _c, _d;
  let target;
  if (isString(options.target)) {
    target = (_a2 = document.querySelector(options.target)) != null ? _a2 : document.body;
  } else {
    target = options.target || document.body;
  }
  return {
    parent: target === document.body || options.body ? document.body : target,
    background: options.background || "",
    svg: options.svg || "",
    svgViewBox: options.svgViewBox || "",
    spinner: options.spinner || false,
    text: options.text || "",
    fullscreen: target === document.body && ((_b = options.fullscreen) != null ? _b : true),
    lock: (_c = options.lock) != null ? _c : false,
    customClass: options.customClass || "",
    visible: (_d = options.visible) != null ? _d : true,
    target
  };
};
const addStyle = async (options, parent, instance) => {
  const { nextZIndex } = useZIndex();
  const maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle(document.body, "position");
    instance.originalOverflow.value = getStyle(document.body, "overflow");
    maskStyle.zIndex = nextZIndex();
  } else if (options.parent === document.body) {
    instance.originalPosition.value = getStyle(document.body, "position");
    await nextTick();
    for (const property of ["top", "left"]) {
      const scroll = property === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property] = `${options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - Number.parseInt(getStyle(document.body, `margin-${property}`), 10)}px`;
    }
    for (const property of ["height", "width"]) {
      maskStyle[property] = `${options.target.getBoundingClientRect()[property]}px`;
    }
  } else {
    instance.originalPosition.value = getStyle(parent, "position");
  }
  for (const [key, value] of Object.entries(maskStyle)) {
    instance.$el.style[key] = value;
  }
};
const addClassList = (options, parent, instance) => {
  const ns2 = useNamespace("loading");
  if (instance.originalPosition.value !== "absolute" && instance.originalPosition.value !== "fixed") {
    addClass(parent, ns2.bm("parent", "relative"));
  } else {
    removeClass(parent, ns2.bm("parent", "relative"));
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, ns2.bm("parent", "hidden"));
  } else {
    removeClass(parent, ns2.bm("parent", "hidden"));
  }
};
const INSTANCE_KEY = Symbol("ElLoading");
const createInstance = (el, binding) => {
  var _a2, _b, _c, _d;
  const vm = binding.instance;
  const getBindingProp = (key) => isObject$1(binding.value) ? binding.value[key] : void 0;
  const resolveExpression = (key) => {
    const data = isString(key) && (vm == null ? void 0 : vm[key]) || key;
    if (data)
      return ref(data);
    else
      return data;
  };
  const getProp2 = (name) => resolveExpression(getBindingProp(name) || el.getAttribute(`element-loading-${hyphenate(name)}`));
  const fullscreen = (_a2 = getBindingProp("fullscreen")) != null ? _a2 : binding.modifiers.fullscreen;
  const options = {
    text: getProp2("text"),
    svg: getProp2("svg"),
    svgViewBox: getProp2("svgViewBox"),
    spinner: getProp2("spinner"),
    background: getProp2("background"),
    customClass: getProp2("customClass"),
    fullscreen,
    target: (_b = getBindingProp("target")) != null ? _b : fullscreen ? void 0 : el,
    body: (_c = getBindingProp("body")) != null ? _c : binding.modifiers.body,
    lock: (_d = getBindingProp("lock")) != null ? _d : binding.modifiers.lock
  };
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  };
};
const updateOptions = (newOptions, originalOptions) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key];
  }
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding);
      } else if (binding.value && binding.oldValue) {
        if (isObject$1(binding.value))
          updateOptions(binding.value, instance.options);
      } else {
        instance == null ? void 0 : instance.instance.close();
      }
    }
  },
  unmounted(el) {
    var _a2;
    (_a2 = el[INSTANCE_KEY]) == null ? void 0 : _a2.instance.close();
  }
};
var base = "";
var elCascader = "";
var elInput = "";
var elPopper = "";
var elTag = "";
var elCascaderPanel = "";
var elCheckbox = "";
var elRadio = "";
var elScrollbar = "";
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: []
    },
    config: {
      type: Object,
      default: {}
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    ref(["selected and disabled", "Option A"]);
    console.log("props====>", props);
    const data = reactive({
      val: []
    });
    const handleChange = (e2) => {
      console.log("e==>", e2);
      $emit("update:value", data.val);
    };
    watchEffect(() => {
      if (props.value) {
        data.val = props.value;
      }
    });
    return (_ctx, _cache) => {
      var _a2, _b, _c, _d, _e;
      const _component_el_cascader = ElCascader;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_cascader, {
          modelValue: data.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.val = $event),
          options: (_a2 = __props.config) == null ? void 0 : _a2.options,
          props: (_b = __props.config) == null ? void 0 : _b.data_type,
          onChange: handleChange,
          style: normalizeStyle((_e = (_d = (_c = __props.config) == null ? void 0 : _c.type_params) == null ? void 0 : _d.style) != null ? _e : "")
        }, null, 8, ["modelValue", "options", "props", "style"])
      ]);
    };
  }
});
var __glob_11_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
var elCheckboxGroup = "";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    value: {
      type: [String, Number, Object],
      default: ""
    },
    config: {
      type: Object,
      default: {}
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const data = reactive({
      val: []
    });
    const handleChange = (e2) => {
      console.log("e==>", e2);
      $emit("update:value", data.val);
    };
    watchEffect(() => {
      if (props.value) {
        data.val = props.value;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup$1;
      return openBlock(), createBlock(_component_el_checkbox_group, {
        modelValue: data.val,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.val = $event),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.config.options, (item, index2) => {
            var _a2, _b, _c;
            return openBlock(), createBlock(_component_el_checkbox, {
              label: item.value,
              key: index2,
              style: normalizeStyle((_c = (_b = (_a2 = __props.config) == null ? void 0 : _a2.type_params) == null ? void 0 : _b.style) != null ? _c : "")
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["label", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
var __glob_11_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
var elDatePicker = "";
var elButton = "";
var zhCn$1 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  var zhCn2 = {
    name: "zh-cn",
    el: {
      colorpicker: {
        confirm: "\u786E\u5B9A",
        clear: "\u6E05\u7A7A"
      },
      datepicker: {
        now: "\u6B64\u523B",
        today: "\u4ECA\u5929",
        cancel: "\u53D6\u6D88",
        clear: "\u6E05\u7A7A",
        confirm: "\u786E\u5B9A",
        selectDate: "\u9009\u62E9\u65E5\u671F",
        selectTime: "\u9009\u62E9\u65F6\u95F4",
        startDate: "\u5F00\u59CB\u65E5\u671F",
        startTime: "\u5F00\u59CB\u65F6\u95F4",
        endDate: "\u7ED3\u675F\u65E5\u671F",
        endTime: "\u7ED3\u675F\u65F6\u95F4",
        prevYear: "\u524D\u4E00\u5E74",
        nextYear: "\u540E\u4E00\u5E74",
        prevMonth: "\u4E0A\u4E2A\u6708",
        nextMonth: "\u4E0B\u4E2A\u6708",
        year: "\u5E74",
        month1: "1 \u6708",
        month2: "2 \u6708",
        month3: "3 \u6708",
        month4: "4 \u6708",
        month5: "5 \u6708",
        month6: "6 \u6708",
        month7: "7 \u6708",
        month8: "8 \u6708",
        month9: "9 \u6708",
        month10: "10 \u6708",
        month11: "11 \u6708",
        month12: "12 \u6708",
        weeks: {
          sun: "\u65E5",
          mon: "\u4E00",
          tue: "\u4E8C",
          wed: "\u4E09",
          thu: "\u56DB",
          fri: "\u4E94",
          sat: "\u516D"
        },
        months: {
          jan: "\u4E00\u6708",
          feb: "\u4E8C\u6708",
          mar: "\u4E09\u6708",
          apr: "\u56DB\u6708",
          may: "\u4E94\u6708",
          jun: "\u516D\u6708",
          jul: "\u4E03\u6708",
          aug: "\u516B\u6708",
          sep: "\u4E5D\u6708",
          oct: "\u5341\u6708",
          nov: "\u5341\u4E00\u6708",
          dec: "\u5341\u4E8C\u6708"
        }
      },
      select: {
        loading: "\u52A0\u8F7D\u4E2D",
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        placeholder: "\u8BF7\u9009\u62E9"
      },
      cascader: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        loading: "\u52A0\u8F7D\u4E2D",
        placeholder: "\u8BF7\u9009\u62E9",
        noData: "\u6682\u65E0\u6570\u636E"
      },
      pagination: {
        goto: "\u524D\u5F80",
        pagesize: "\u6761/\u9875",
        total: "\u5171 {total} \u6761",
        pageClassifier: "\u9875",
        deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
      },
      messagebox: {
        title: "\u63D0\u793A",
        confirm: "\u786E\u5B9A",
        cancel: "\u53D6\u6D88",
        error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
      },
      upload: {
        deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
        delete: "\u5220\u9664",
        preview: "\u67E5\u770B\u56FE\u7247",
        continue: "\u7EE7\u7EED\u4E0A\u4F20"
      },
      table: {
        emptyText: "\u6682\u65E0\u6570\u636E",
        confirmFilter: "\u7B5B\u9009",
        resetFilter: "\u91CD\u7F6E",
        clearFilter: "\u5168\u90E8",
        sumText: "\u5408\u8BA1"
      },
      tree: {
        emptyText: "\u6682\u65E0\u6570\u636E"
      },
      transfer: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
        filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
        noCheckedFormat: "\u5171 {total} \u9879",
        hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
      },
      image: {
        error: "\u52A0\u8F7D\u5931\u8D25"
      },
      pageHeader: {
        title: "\u8FD4\u56DE"
      },
      popconfirm: {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88"
      }
    }
  };
  exports2["default"] = zhCn2;
})(zhCn$1);
var zhCn = /* @__PURE__ */ getDefaultExportFromCjs(zhCn$1);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    },
    value: {
      default: ""
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const locale = ref(zhCn);
    const handleChange = (e2) => {
      $emit("update:value", data.val);
    };
    watchEffect(() => {
      if (props.value) {
        data.val = props.value;
      }
    });
    const data = reactive({
      val: ""
    });
    return (_ctx, _cache) => {
      const _component_el_date_picker = ElDatePicker;
      return openBlock(), createBlock(unref(ElConfigProvider), { locale: locale.value }, {
        default: withCtx(() => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
          return [
            createElementVNode("div", null, [
              ((_b = (_a2 = __props.config) == null ? void 0 : _a2.time_limit) != null ? _b : false) ? (openBlock(), createBlock(_component_el_date_picker, {
                key: 0,
                modelValue: data.val,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.val = $event),
                type: (_e = (_d = (_c = __props.config) == null ? void 0 : _c.type_params) == null ? void 0 : _d.type) != null ? _e : "daterange",
                placeholder: (_g = (_f = __props.config) == null ? void 0 : _f.placeholder) != null ? _g : `\u8BF7\u9009\u62E9${__props.config.label}}`,
                "start-placeholder": (_j = (_i = (_h = __props.config) == null ? void 0 : _h.type_params) == null ? void 0 : _i.startPlaceholder) != null ? _j : "\u5F00\u59CB\u65F6\u95F4",
                "end-placeholder": (_m = (_l = (_k = __props.config) == null ? void 0 : _k.type_params) == null ? void 0 : _l.endPlaceholder) != null ? _m : " \u7ED3\u675F\u65F6\u95F4",
                format: "YYYY-MM-DD",
                "value-format": "YYYY-MM-DD",
                onChange: handleChange,
                style: normalizeStyle((_p = (_o = (_n = __props.config) == null ? void 0 : _n.type_params) == null ? void 0 : _o.style) != null ? _p : "")
              }, null, 8, ["modelValue", "type", "placeholder", "start-placeholder", "end-placeholder", "style"])) : (openBlock(), createBlock(_component_el_date_picker, {
                key: 1,
                onChange: handleChange,
                modelValue: data.val,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => data.val = $event),
                type: (_s = (_r = (_q = __props.config) == null ? void 0 : _q.type_params) == null ? void 0 : _r.type) != null ? _s : "date",
                placeholder: (_u = (_t2 = __props.config) == null ? void 0 : _t2.placeholder) != null ? _u : `\u8BF7\u9009\u62E9${__props.config.label}`,
                format: ((_w = (_v = __props.config) == null ? void 0 : _v.type_params) == null ? void 0 : _w.type) === "week" ? "" : ((_y = (_x = __props.config) == null ? void 0 : _x.type_params) == null ? void 0 : _y.type) === "month" ? "YYYY-MM" : ((_A = (_z = __props.config) == null ? void 0 : _z.type_params) == null ? void 0 : _A.type) === "year" ? "YYYY" : "YYYY-MM-DD",
                "value-format": "YYYY-MM-DD",
                style: normalizeStyle((_D = (_C = (_B = __props.config) == null ? void 0 : _B.type_params) == null ? void 0 : _C.style) != null ? _D : "")
              }, null, 8, ["modelValue", "type", "placeholder", "format", "style"]))
            ])
          ];
        }),
        _: 1
      }, 8, ["locale"]);
    };
  }
});
var __glob_11_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    config: {
      type: Object,
      default: {}
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    console.log("props", props);
    const data = reactive({
      val: ""
    });
    const handleInput = (e2) => {
      $emit("update:value", data.val);
    };
    watchEffect(() => {
      if (props.value) {
        data.val = props.value;
      }
    });
    return (_ctx, _cache) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_input, {
          placeholder: (_a2 = __props.config.placeholder) != null ? _a2 : `\u8BF7\u8F93\u5165${__props.config.label}`,
          modelValue: data.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.val = $event),
          onInput: handleInput,
          rows: (_c = (_b = __props.config) == null ? void 0 : _b.data_type) == null ? void 0 : _c.rows,
          clearable: "",
          autosize: ((_e = (_d = __props.config) == null ? void 0 : _d.data_type) == null ? void 0 : _e.autosize) ? __props.config.data_type.autosize : false,
          "show-word-limit": "",
          maxlength: (_h = (_g = (_f = __props.config) == null ? void 0 : _f.data_type) == null ? void 0 : _g.maxlength) != null ? _h : "",
          type: (_k = (_j = (_i = __props.config) == null ? void 0 : _i.data_type) == null ? void 0 : _j.type) != null ? _k : "text",
          style: normalizeStyle((_n = (_m = (_l = __props.config) == null ? void 0 : _l.type_params) == null ? void 0 : _m.style) != null ? _n : "")
        }, null, 8, ["placeholder", "modelValue", "rows", "autosize", "maxlength", "type", "style"])
      ]);
    };
  }
});
var __glob_11_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
var elRadioGroup = "";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    value: {
      type: [String, Number, Object],
      default: ""
    },
    config: {
      type: Object,
      default: {}
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    console.log("props====>", props);
    const data = reactive({
      val: ""
    });
    const handleChange = (e2) => {
      $emit("update:value", data.val);
    };
    watchEffect(() => {
      if (props.value) {
        data.val = props.value;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      return openBlock(), createBlock(_component_el_radio_group, {
        modelValue: data.val,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.val = $event),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.config.options, (item, index2) => {
            var _a2, _b, _c;
            return openBlock(), createBlock(_component_el_radio, {
              label: item.value,
              key: index2,
              style: normalizeStyle((_c = (_b = (_a2 = __props.config) == null ? void 0 : _a2.type_params) == null ? void 0 : _b.style) != null ? _c : "")
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["label", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
var __glob_11_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
var elOption = "";
var elOptionGroup = "";
var elSelect = "";
var index_vue_vue_type_style_index_0_lang$4 = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: null
    },
    config: {
      type: [Object],
      default: {}
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const data = reactive({
      val: []
    });
    console.log("props", props);
    const handleInput = (e2) => {
      console.log("e", e2);
      $emit("update:value", data.val);
    };
    watchEffect(() => {
      if (props.value) {
        data.val = props.value;
      }
    });
    return (_ctx, _cache) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_select, {
          modelValue: data.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.val = $event),
          onChange: handleInput,
          clearable: "",
          multiple: (_c = (_b = (_a2 = __props.config) == null ? void 0 : _a2.data_type) == null ? void 0 : _b.multiple) != null ? _c : false,
          placeholder: (_e = (_d = __props.config) == null ? void 0 : _d.placeholder) != null ? _e : `\u8BF7\u9009\u62E9${__props.config.label}`,
          style: normalizeStyle((_h = (_g = (_f = __props.config) == null ? void 0 : _f.type_params) == null ? void 0 : _g.style) != null ? _h : "")
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.config.options, (item, index2) => {
              var _a3, _b2;
              return openBlock(), createBlock(_component_el_option, {
                label: (_a3 = item.label) != null ? _a3 : item,
                value: (_b2 = item.value) != null ? _b2 : item,
                key: index2
              }, null, 8, ["label", "value"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "multiple", "placeholder", "style"])
      ]);
    };
  }
});
var __glob_11_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
var elDialog = "";
var elOverlay = "";
var elUpload = "";
var elProgress = "";
var elIcon = "";
function formatStorage$1(num, digits) {
  digits = digits || 2;
  if (num < 1024) {
    return num + "B";
  }
  num = num * 1e3 / 1024;
  const si = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" }
  ];
  for (let i2 = 0; i2 < si.length; i2++) {
    if (num >= si[i2].value) {
      return (num / si[i2].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i2].symbol + "B";
    }
  }
}
function validateSize$1(file, maxSize) {
  const size = +maxSize;
  const isSizeOut = file.size / 1024 > size;
  if (isSizeOut) {
    ElMessage({
      type: "error",
      message: "\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7" + formatStorage$1(size * 1024)
    });
    return false;
  } else {
    return true;
  }
}
function validateImgScreen$1(file, screenWidth, screenHeight, maxScreenWidth, maxScreenHeight) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e2) => {
      const base64Url = e2.target.result;
      const img = new Image();
      img.onload = () => {
        if (screenWidth && +img.width !== +screenWidth) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u5BBD\u5EA6\u9650\u5236\u53EA\u80FD\u4E3A" + screenWidth + "\u50CF\u7D20"
          });
        } else if (screenHeight && +img.height !== +screenHeight) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u9AD8\u5EA6\u9650\u5236\u53EA\u80FD\u4E3A" + screenHeight + "\u50CF\u7D20"
          });
        } else if (maxScreenWidth && +img.width > +maxScreenWidth) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u5BBD\u5EA6\u4E0D\u80FD\u8D85\u8FC7" + maxScreenWidth + "\u50CF\u7D20"
          });
        } else if (maxScreenHeight && +img.height > +maxScreenHeight) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u9AD8\u5EA6\u4E0D\u80FD\u8D85\u8FC7" + maxScreenHeight + "\u50CF\u7D20"
          });
        } else {
          resolve(true);
        }
      };
      img.src = base64Url;
    };
    fileReader.readAsDataURL(file);
  });
}
var utils$1 = {
  validateImgScreen: validateImgScreen$1,
  validateSize: validateSize$1
};
var index_vue_vue_type_style_index_0_lang$3 = "";
const _hoisted_1$5 = { class: "upload-box" };
const _hoisted_2$4 = { key: 0 };
const _hoisted_3$2 = ["src"];
const __default__$7 = defineComponent({
  name: "BUpload",
  inheritAttrs: false
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: {
    config: {
      type: Object,
      default: () => {
      }
    },
    value: {
      default: () => ""
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const data = reactive({
      fileList: []
    });
    watchEffect(() => {
      if (props.value) {
        data.fileList = props.value;
      }
    });
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    ref(false);
    const handleRemove = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };
    const handlePictureCardPreview = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url;
      dialogVisible.value = true;
    };
    const handleSuccess = (res, file, fileList) => {
      $emit("update:value", data.fileList);
    };
    const handleChange = (uploadFile, uploadFiles) => {
    };
    const beforeUpload = (rawFile) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2;
      if ((_b = (_a2 = props.config) == null ? void 0 : _a2.type_params) == null ? void 0 : _b.maxSize) {
        return utils$1.validateSize(rawFile, (_d = (_c = props.config) == null ? void 0 : _c.type_params) == null ? void 0 : _d.maxSize);
      } else if (((_f = (_e = props.config) == null ? void 0 : _e.type_params) == null ? void 0 : _f.screenWidth) || ((_h = (_g = props.config) == null ? void 0 : _g.type_params) == null ? void 0 : _h.screenHeight) || ((_j = (_i = props.config) == null ? void 0 : _i.type_params) == null ? void 0 : _j.maxScreenWidth) || ((_l = (_k = props.config) == null ? void 0 : _k.type_params) == null ? void 0 : _l.maxScreenHeight)) {
        return utils$1.validateImgScreen(
          rawFile,
          (_n = (_m = props.config) == null ? void 0 : _m.type_params) == null ? void 0 : _n.screenWidth,
          (_p = (_o = props.config) == null ? void 0 : _o.type_params) == null ? void 0 : _p.screenHeight,
          (_r = (_q = props.config) == null ? void 0 : _q.type_params) == null ? void 0 : _r.maxScreenWidth,
          (_t2 = (_s = props.config) == null ? void 0 : _s.type_params) == null ? void 0 : _t2.maxScreenHeight
        );
      } else {
        return true;
      }
    };
    const handleOnExceed = (files2, uploadFiles) => {
      var _a2, _b, _c, _d;
      if (data.fileList.length >= ((_b = (_a2 = props.config) == null ? void 0 : _a2.type_params) == null ? void 0 : _b.limit)) {
        ElMessage.info(`\u6700\u591A\u4E0A\u4F20${(_d = (_c = props.config) == null ? void 0 : _c.type_params) == null ? void 0 : _d.limit}\u5F20\u56FE\u7247`);
      }
    };
    return (_ctx, _cache) => {
      var _a2, _b, _c, _d, _e;
      const _component_el_icon = ElIcon;
      const _component_el_upload = ElUpload;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_upload, mergeProps(_ctx.$attrs, {
          action: (_c = (_b = (_a2 = __props.config) == null ? void 0 : _a2.type_params) == null ? void 0 : _b.action) != null ? _c : "",
          "list-type": "picture-card",
          limit: (_e = (_d = __props.config) == null ? void 0 : _d.type_params) == null ? void 0 : _e.limit,
          "file-list": data.fileList,
          "on-success": handleSuccess,
          "on-change": handleChange,
          "on-preview": handlePictureCardPreview,
          "on-remove": handleRemove,
          "before-upload": beforeUpload,
          "on-exceed": handleOnExceed
        }), {
          default: withCtx(() => {
            var _a3, _b2, _c2, _d2;
            return [
              createElementVNode("div", _hoisted_1$5, [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(unref(plus_default))
                  ]),
                  _: 1
                }),
                ((_b2 = (_a3 = __props.config) == null ? void 0 : _a3.type_params) == null ? void 0 : _b2.limit) ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(`\u6700\u591A\u4E0A\u4F20${(_d2 = (_c2 = __props.config) == null ? void 0 : _c2.type_params) == null ? void 0 : _d2.limit}\u5F20\u56FE\u7247`), 1)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "tips")
              ])
            ];
          }),
          _: 3
        }, 16, ["action", "limit", "file-list"]),
        createVNode(_component_el_dialog, {
          modelValue: dialogVisible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event)
        }, {
          default: withCtx(() => [
            createElementVNode("img", {
              class: "dialog-img",
              src: dialogImageUrl.value,
              alt: "Preview Image"
            }, null, 8, _hoisted_3$2)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
var __glob_11_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
var elForm = "";
var elFormItem = "";
const emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
const phoneRule = /^[1][3,4,5,7,8][0-9]{9}$/;
const idCardRule = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
const checkPhone = (rule, value, callback) => {
  if (phoneRule.test(value)) {
    callback();
  } else {
    callback(new Error("\u8BF7\u8F93\u516511\u4F4D\u6570\u624B\u673A\u53F7\u7801"));
  }
};
const checkEmail = (rule, value, callback) => {
  if (emailRule.test(value)) {
    callback();
  } else {
    callback(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u90AE\u7BB1\u5730\u5740"));
  }
};
const checkIdCard = (rule, value, callback) => {
  if (idCardRule.test(value)) {
    callback();
  } else {
    callback(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u8EAB\u4EFD\u8BC1\u53F7\u7801"));
  }
};
const createRules = (data) => {
  data.forEach((item) => {
    let rules_array = [];
    if (item.required) {
      const rule = {
        required: true,
        message: item.message || createMessage(item)
      };
      rules_array.push(rule);
    }
    if (item.value_type && item.value_type === "phone") {
      const rule = { validator: checkPhone, trigger: "change" };
      rules_array.push(rule);
    }
    if (item.value_type && item.value_type === "email") {
      const rule = { validator: checkEmail, trigger: "change" };
      rules_array.push(rule);
    }
    if (item.value_type && item.value_type === "idCard") {
      const rule = { validator: checkIdCard, trigger: "change" };
      rules_array.push(rule);
    }
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rules_array = rules_array.concat(item.rules);
    }
    item.rules = rules_array;
  });
  return data;
};
const createMessage = (data) => {
  let msg = "";
  switch (data.type) {
    case "input":
      msg = `\u8BF7\u8F93\u5165${data.label}`;
      break;
    case "select":
      msg = `\u8BF7\u9009\u62E9${data.label}`;
      break;
    case "checkBox":
      msg = `\u8BF7\u9009\u62E9${data.label}`;
      break;
    case "radio":
      msg = `\u8BF7\u9009\u62E9${data.label}`;
      break;
    case "upload":
      msg = `\u8BF7\u4E0A\u4F20${data.label}`;
      break;
  }
  return msg;
};
const modules$1 = {};
const files$1 = { "./components/cascader/index.vue": __glob_11_0, "./components/checkBox/index.vue": __glob_11_1, "./components/datePicker/index.vue": __glob_11_2, "./components/input/index.vue": __glob_11_3, "./components/radio/index.vue": __glob_11_4, "./components/select/index.vue": __glob_11_5, "./components/upload/index.vue": __glob_11_6 };
for (const key in files$1) {
  if (Object.prototype.hasOwnProperty.call(files$1, key)) {
    const keys2 = key.split("/");
    const name = keys2[2];
    modules$1[`com-${name}`] = files$1[key].default;
  }
}
const __default__$6 = defineComponent({
  name: "BForm",
  inheritAttrs: false,
  components: {
    ...modules$1
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    formItem: {
      type: Array,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
    button: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const ruleFormRef = ref();
    onBeforeMount(() => {
      data.items = createRules(props.formItem);
    });
    const data = reactive({
      items: []
    });
    const submitForm = async (formEl, option) => {
      if (!formEl)
        return;
      await formEl.validate((valid) => {
        console.log("valid", valid);
        option.callback && option.callback(valid);
      });
    };
    const resetForm = (formEl, option) => {
      if (!formEl)
        return;
      formEl.resetFields();
      option.callback && option.callback();
    };
    return (_ctx, _cache) => {
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, mergeProps({
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: __props.formData
      }, _ctx.$attrs), {
        default: withCtx(() => {
          var _a2;
          return [
            (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, index2) => {
              return openBlock(), createBlock(_component_el_form_item, {
                key: index2,
                label: item.label,
                prop: item.prop,
                rules: item.rules
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createElementVNode("div", {
                      style: normalizeStyle((_a3 = item.style) != null ? _a3 : { width: "100%" })
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(item.type ? `com-${item.type}` : "com-text"), {
                        value: __props.formData[item.prop],
                        "onUpdate:value": ($event) => __props.formData[item.prop] = $event,
                        config: item
                      }, null, 40, ["value", "onUpdate:value", "config"]))
                    ], 4)
                  ];
                }),
                _: 2
              }, 1032, ["label", "prop", "rules"]);
            }), 128)),
            ((_a2 = __props.button) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(_component_el_form_item, { key: 0 }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.button, (btnItem) => {
                  return openBlock(), createBlock(_component_el_button, {
                    key: btnItem.key,
                    type: btnItem.type,
                    onClick: () => {
                      if (btnItem.key === "submit") {
                        submitForm(ruleFormRef.value, btnItem);
                        return false;
                      }
                      if (btnItem.key === "cancel") {
                        resetForm(ruleFormRef.value, btnItem);
                        return false;
                      }
                      btnItem.callback && btnItem.callback(btnItem);
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(btnItem.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["type", "onClick"]);
                }), 128))
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ];
        }),
        _: 1
      }, 16, ["model"]);
    };
  }
});
var __glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
var elCard = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = defineComponent({
  name: "BCard",
  inheritAttrs: false
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_card = ElCard;
  return openBlock(), createBlock(_component_el_card, mergeProps(_ctx.$attrs, {
    class: "box-card",
    shadow: "hover"
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1]]);
var __glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$4
}, Symbol.toStringTag, { value: "Module" }));
var elImage = "";
var elImageViewer = "";
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _withScopeId$1 = (n2) => (pushScopeId("data-v-72c05094"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "image-slot" }, [
  /* @__PURE__ */ createTextVNode(" Loading "),
  /* @__PURE__ */ createElementVNode("span", { class: "dot" }, "...")
], -1));
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "image-slot" }, "\u52A0\u8F7D\u5931\u8D25", -1));
const __default__$5 = defineComponent({
  name: "BImg",
  inheritAttrs: false
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    fit: {
      type: String,
      default: "cover"
    },
    loading: {
      type: String,
      default: "lazy"
    },
    alt: {
      type: String,
      default: "...\u52A0\u8F7D\u4E2D"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_image = ElImage;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_image, mergeProps(_ctx.$attrs, {
          fit: __props.fit,
          loading: __props.loading,
          lazy: "",
          alt: __props.alt
        }), {
          placeholder: withCtx(() => [
            _hoisted_1$4
          ]),
          error: withCtx(() => [
            _hoisted_2$3
          ]),
          _: 1
        }, 16, ["fit", "loading", "alt"])
      ]);
    };
  }
});
var index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-72c05094"]]);
var __glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$3
}, Symbol.toStringTag, { value: "Module" }));
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$5 = defineComponent({
  name: "BLoading",
  setup() {
    return {};
  }
});
const _withScopeId = (n2) => (pushScopeId("data-v-44af5fa9"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "loading" }, null, -1));
const _hoisted_2$2 = [
  _hoisted_1$3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: "loading_container" }, _ctx.$attrs), _hoisted_2$2, 16);
}
var index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-44af5fa9"]]);
var __glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$2
}, Symbol.toStringTag, { value: "Module" }));
var elPagination = "";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$4 = defineComponent({
  name: "BPagination",
  inheritAttrs: false
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    layout: {
      type: String,
      default: " total, sizes, prev, pager, next, jumper ,"
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Array,
      default: () => [10, 20, 30, 50, 100]
    }
  },
  emits: ["sizeChange", "currentChange"],
  setup(__props, { emit }) {
    const sizeChange = (val) => {
      console.log(`${val} \u5F53\u524D\u6761\u6570`);
      emit("sizeChange", val);
    };
    const currentChange = (val) => {
      console.log(`\u9875\u9762\u66F4\u6539: ${val}`);
      emit("currentChange", val);
    };
    return (_ctx, _cache) => {
      const _component_el_pagination = ElPagination;
      return openBlock(), createBlock(_component_el_pagination, mergeProps(_ctx.$attrs, {
        "page-sizes": __props.pageSize,
        layout: __props.layout,
        total: __props.total,
        onSizeChange: sizeChange,
        onCurrentChange: currentChange
      }), null, 16, ["page-sizes", "layout", "total"]);
    };
  }
});
var index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6e8ee970"]]);
var __glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$1
}, Symbol.toStringTag, { value: "Module" }));
var elCollapseTransition = "";
var elRow = "";
var index_vue_vue_type_style_index_0_lang$2 = "";
const _hoisted_1$2 = /* @__PURE__ */ createTextVNode("\u67E5\u8BE2");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("\u6E05\u9664\u6761\u4EF6");
const _hoisted_3$1 = {
  key: 0,
  class: "m-l-10px"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5C55\u5F00 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u6536\u8D77 ");
const __default__$3 = defineComponent({
  name: "BSearchForm",
  inheritAttrs: false
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    params: {
      type: Object,
      default: {}
    },
    showMore: {
      type: Boolean,
      default: false
    }
  },
  emits: ["onSubmit", "resetForm"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const state = reactive({
      opened: false
    });
    let formInline = {};
    watchEffect(() => {
      if (props) {
        formInline = props.params;
      }
    });
    const onSubmit = () => {
      console.log("submit!", formInline);
      $emit("onSubmit", formInline);
    };
    const resetForm = () => {
      $emit("resetForm", formInline);
    };
    const handleClick = () => {
      state.opened = !state.opened;
    };
    return (_ctx, _cache) => {
      const _component_el_row = ElRow;
      const _component_el_collapse_transition = ElCollapseTransition;
      const _component_el_button = ElButton;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        inline: true,
        model: unref(formInline),
        class: "demo-form-inline"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_row, { gutter: 20 }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "form", { data: unref(formInline) })
            ]),
            _: 3
          }),
          createVNode(_component_el_collapse_transition, null, {
            default: withCtx(() => [
              state.opened ? (openBlock(), createBlock(_component_el_row, {
                key: 0,
                gutter: 20
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "more", { data: unref(formInline) })
                ]),
                _: 3
              })) : createCommentVNode("", true)
            ]),
            _: 3
          }),
          createVNode(_component_el_row, null, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, { class: "searchForm-elFormItem-btnBox" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: onSubmit
                  }, {
                    default: withCtx(() => [
                      _hoisted_1$2
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_button, { onClick: resetForm }, {
                    default: withCtx(() => [
                      _hoisted_2$1
                    ]),
                    _: 1
                  }),
                  __props.showMore ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                    !state.opened ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      type: "primary",
                      icon: unref(arrow_down_bold_default),
                      text: "",
                      onClick: handleClick
                    }, {
                      default: withCtx(() => [
                        _hoisted_4
                      ]),
                      _: 1
                    }, 8, ["icon"])) : (openBlock(), createBlock(_component_el_button, {
                      key: 1,
                      type: "primary",
                      icon: unref(arrow_up_bold_default),
                      text: "",
                      onClick: handleClick
                    }, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 1
                    }, 8, ["icon"]))
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["model"]);
    };
  }
});
var __glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
var elLoading = "";
var elTable = "";
var elTooltip = "";
var elTableColumn = "";
var index_vue_vue_type_style_index_0_lang$1 = "";
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("div", null, "\u6682\u65E0\u6570\u636E", -1);
const __default__$2 = defineComponent({
  name: "BTable",
  inheritAttrs: false
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    columns: {
      type: Array,
      required: true
    },
    selection: {
      type: Boolean,
      default: false
    },
    rowIndex: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number || String,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      const _directive_loading = vLoading;
      return withDirectives((openBlock(), createBlock(_component_el_table, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        empty: withCtx(() => [
          _hoisted_1$1
        ]),
        default: withCtx(() => [
          __props.selection ? (openBlock(), createBlock(_component_el_table_column, {
            key: 0,
            type: "selection",
            width: "50",
            label: "#",
            align: "center"
          })) : createCommentVNode("", true),
          __props.rowIndex ? (openBlock(), createBlock(_component_el_table_column, {
            key: 1,
            type: "index",
            width: "50",
            label: "#",
            align: "center"
          })) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (item) => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
            return openBlock(), createElementBlock(Fragment, {
              key: item.prop
            }, [
              (item == null ? void 0 : item.type) === "slot" ? (openBlock(), createBlock(_component_el_table_column, {
                key: 0,
                label: item == null ? void 0 : item.label,
                prop: item == null ? void 0 : item.prop,
                width: (_a2 = item == null ? void 0 : item.width) != null ? _a2 : __props.width,
                align: (_b = item == null ? void 0 : item.align) != null ? _b : null,
                "min-width": (_c = item == null ? void 0 : item.minWidth) != null ? _c : null,
                fixed: (_d = item == null ? void 0 : item.fixed) != null ? _d : null,
                sortable: (_e = item == null ? void 0 : item.sortable) != null ? _e : false
              }, {
                default: withCtx((scope) => [
                  renderSlot(_ctx.$slots, item == null ? void 0 : item.slot_name, {
                    data: scope.row
                  })
                ]),
                _: 2
              }, 1032, ["label", "prop", "width", "align", "min-width", "fixed", "sortable"])) : (openBlock(), createBlock(_component_el_table_column, {
                key: 1,
                prop: item == null ? void 0 : item.prop,
                label: item == null ? void 0 : item.label,
                width: (_f = item == null ? void 0 : item.width) != null ? _f : __props.width,
                align: (_g = item == null ? void 0 : item.align) != null ? _g : null,
                "min-width": (_h = item == null ? void 0 : item.minWidth) != null ? _h : null,
                fixed: (_i = item == null ? void 0 : item.fixed) != null ? _i : null,
                sortable: (_j = item == null ? void 0 : item.sortable) != null ? _j : false
              }, null, 8, ["prop", "label", "width", "align", "min-width", "fixed", "sortable"]))
            ], 64);
          }), 128))
        ]),
        _: 3
      }, 16)), [
        [_directive_loading, __props.isLoading]
      ]);
    };
  }
});
var __glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
var e = Object.defineProperty, t = Object.defineProperties, o = Object.getOwnPropertyDescriptors, n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, i = (t2, o2, n2) => o2 in t2 ? e(t2, o2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[o2] = n2;
const O = (e2) => e2 + "_" + (Date.now() + Math.floor(1e6 * Math.random())), _ = () => {
  const e2 = "undefined" != typeof window ? window : global;
  return e2 && "tinymce" in e2 ? e2.tinymce : null;
};
function C(e2) {
  return e2 ? e2.getContent() : "";
}
function j(e2, t2) {
  t2 && t2.setContent(e2);
}
function w(e2, t2 = true) {
  e2 && e2.mode.set(t2 ? "readonly" : "design");
}
function k(e2, t2, o2, n2, r2) {
  let a2, i2, { images_upload_url: l2, images_upload_credentials: s2, custom_images_upload_header: d2, custom_images_upload_param: u2, custom_images_upload_callback: c2 } = e2 || {};
  a2 = new XMLHttpRequest(), a2.withCredentials = !!s2, a2.open("POST", l2 || ""), d2 && Object.keys(d2).forEach((e3) => {
    a2.setRequestHeader(e3, d2[e3]);
  }), a2.upload.onprogress = function(e3) {
    r2(e3.loaded / e3.total * 100);
  }, a2.onload = function() {
    if (403 === a2.status)
      return void n2("HTTP Error (custom): status " + a2.status, { remove: true });
    if (a2.status < 200 || a2.status >= 300)
      return void n2("HTTP Error (custom): status " + a2.status);
    let e3 = JSON.parse(a2.responseText);
    if (!e3)
      return void n2("Invalid JSON (custom): " + a2.responseText);
    let t3 = "function" == typeof c2 ? c2(e3) : e3.location;
    t3 ? o2(t3) : n2("Failed Path (custom): location image path is error/empty");
  }, a2.onerror = function() {
    n2("Image upload failed due to a XHR Transport error. Code: " + a2.status);
  }, i2 = new FormData(), i2.append("file", t2.blob(), t2.filename()), u2 && Object.keys(u2).forEach((e3) => {
    i2.append(e3, u2[e3]);
  }), a2.send(i2);
}
const E = (() => {
  let e2 = { status: {}, loadedCallbacks: {} };
  const t2 = (t3) => {
    e2.loadedCallbacks[t3] && (e2.loadedCallbacks[t3].forEach((e3) => {
      "function" == typeof e3.handler && e3.handler.call(e3.scope);
    }), e2.loadedCallbacks[t3] = void 0);
  };
  return { load: (o2, n2, r2) => {
    n2 && (e2.loadedCallbacks[o2] || (e2.loadedCallbacks[o2] = []), e2.loadedCallbacks[o2].push({ handler: n2, scope: r2 || void 0 })), "LOADED" !== e2.status[o2] ? "LOADING" !== e2.status[o2] && (e2.status[o2] = "LOADING", ((e3, t3) => {
      const o3 = document.createElement("script");
      o3.id = O("tiny-script"), o3.type = "application/javascript", o3.src = e3, o3.referrerPolicy = "origin";
      const n3 = () => {
        o3.removeEventListener("load", n3), t3();
      };
      o3.addEventListener("load", n3), (document.head || document.body).appendChild(o3);
    })(o2, () => {
      e2.status[o2] = "LOADED", t2(o2);
    })) : t2(o2);
  } };
})(), D = ["id"], P = { key: 0 }, T = { name: "Vue3Tinymce" };
const S = Object.assign(T, { props: { modelValue: String, setting: { type: Object, default: () => ({}) }, setup: Function, disabled: Boolean, scriptSrc: String, debug: Boolean }, emits: ["update:modelValue", "init", "change"], setup: function(e2, { expose: T2, emit: S2 }) {
  const L = e2;
  let V = true;
  const x2 = reactive({ editor: null, id: O("tinymce"), err: "" }), H2 = () => {
    var e3;
    return String(null != (e3 = L.modelValue) ? e3 : "");
  }, I2 = (e3, t2, o2) => {
    L.debug && console.log(`\u6765\u81EA\uFF1A${e3.type} | 
 ${t2} 
 ${o2 || "--"}`);
  }, A2 = (e3, t2) => {
    t2 || (t2 = x2.editor);
    const o2 = C(t2);
    I2(e3, o2), S2("update:modelValue", o2), S2("change", o2);
  }, M2 = () => {
    if (null === _())
      return void (x2.err = "tinymce is null");
    L.debug && console.warn("vue3-tinymce \u8FDB\u5165debug\u6A21\u5F0F");
    let e3 = (l2 = ((e4, t2) => {
      for (var o2 in t2 || (t2 = {}))
        r.call(t2, o2) && i(e4, o2, t2[o2]);
      if (n)
        for (var o2 of n(t2))
          a.call(t2, o2) && i(e4, o2, t2[o2]);
      return e4;
    })({}, L.setting), s2 = { selector: "#" + x2.id, setup: (e4) => {
      L.setup && L.setup(e4), e4.on("init", () => ((e5) => {
        x2.editor = e5, j(H2(), e5), L.disabled && "readonly" !== e5.mode.get() && w(e5), e5.on("change input undo redo", (t2) => {
          A2(t2, e5);
        }), S2("init", e5);
      })(e4));
    } }, t(l2, o(s2)));
    var l2, s2;
    L.setting.custom_images_upload && (e3.images_upload_handler = (...e4) => {
      k.apply(null, [L.setting || {}, ...e4]);
    }), _().init(e3), V = false;
  };
  return watch(() => L.modelValue, (e3, t2) => {
    if (x2.editor && x2.editor.initialized && t2 !== e3 && e3 !== C(x2.editor)) {
      if (I2({ type: "propsChanged to setContent" }, e3, t2), null === e3)
        return function(e4, t3) {
          if (t3) {
            if (t3.resetContent)
              return t3.resetContent(e4);
            t3.setContent(e4), t3.setDirty(false), t3.undoManager.clear();
          }
        }("", x2.editor);
      j(H2(), x2.editor);
    }
  }), watch(() => L.disabled, (e3) => {
    x2.editor && x2.editor.initialized && w(x2.editor, e3);
  }), T2({ id: x2.id, editor: x2.editor }), onMounted(() => {
    var e3;
    if (null !== _())
      return void M2();
    const t2 = null != (e3 = L.scriptSrc) ? e3 : "https://cdn.bootcdn.net/ajax/libs/tinymce/5.8.2/tinymce.min.js";
    E.load(t2, M2);
  }), onActivated(() => {
    V || M2();
  }), onDeactivated(() => {
    x2.editor && x2.editor.remove();
  }), onBeforeUnmount(() => {
    x2.editor && x2.editor.remove();
  }), (e3, t2) => (openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", { id: unref(x2).id, class: "tiny-textarea" }, null, 8, D), unref(x2).err ? (openBlock(), createElementBlock("p", P, toDisplayString(unref(x2).err), 1)) : createCommentVNode("", true)], 64));
} });
S.install = function(e2) {
  e2.component("Vue3Tinymce", S);
};
const __default__$1 = defineComponent({
  name: "BTinymce",
  inheritAttrs: false
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    height: {
      type: Number,
      default: () => 500
    },
    action: {
      type: String,
      default: ""
    },
    fileUrl: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    }
  },
  emits: ["handleChange"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const state = reactive({
      content: "",
      setting: {
        menubar: false,
        height: props.height,
        toolbar: "bold italic underline h1 h2 blockquote codesample numlist bullist link image | removeformat fullscreen",
        plugins: "codesample link image table lists fullscreen",
        toolbar_mode: "sliding",
        nonbreaking_force_tab: true,
        link_title: false,
        default_link_target: "_blank",
        content_style: "body{font-size: 16px}",
        custom_images_upload: true,
        images_upload_url: props.action,
        custom_images_upload_callback: (res) => props.fileUrl + res.result,
        custom_images_upload_param: props.params,
        language: "zh_CN",
        language_url: "https://unpkg.com/@jsdawn/vue3-tinymce@1.1.6/dist/tinymce/langs/zh_CN.js"
      }
    });
    const handleChange = (e2) => {
      $emit("handleChange", e2);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(S), {
          modelValue: state.content,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.content = $event),
          setting: state.setting,
          onChange: handleChange
        }, null, 8, ["modelValue", "setting"])
      ]);
    };
  }
});
var __glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
function formatStorage(num, digits) {
  digits = digits || 2;
  if (num < 1024) {
    return num + "B";
  }
  num = num * 1e3 / 1024;
  const si = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" }
  ];
  for (let i2 = 0; i2 < si.length; i2++) {
    if (num >= si[i2].value) {
      return (num / si[i2].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i2].symbol + "B";
    }
  }
}
function validateSize(file, maxSize) {
  const size = +maxSize;
  const isSizeOut = file.size / 1024 > size;
  if (isSizeOut) {
    ElMessage({
      type: "error",
      message: "\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7" + formatStorage(size * 1024)
    });
    return false;
  } else {
    return true;
  }
}
function validateImgScreen(file, screenWidth, screenHeight, maxScreenWidth, maxScreenHeight) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e2) => {
      const base64Url = e2.target.result;
      const img = new Image();
      img.onload = () => {
        if (screenWidth && +img.width !== +screenWidth) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u5BBD\u5EA6\u9650\u5236\u53EA\u80FD\u4E3A" + screenWidth + "\u50CF\u7D20"
          });
        } else if (screenHeight && +img.height !== +screenHeight) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u9AD8\u5EA6\u9650\u5236\u53EA\u80FD\u4E3A" + screenHeight + "\u50CF\u7D20"
          });
        } else if (maxScreenWidth && +img.width > +maxScreenWidth) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u5BBD\u5EA6\u4E0D\u80FD\u8D85\u8FC7" + maxScreenWidth + "\u50CF\u7D20"
          });
        } else if (maxScreenHeight && +img.height > +maxScreenHeight) {
          reject();
          ElMessage({
            type: "error",
            message: "\u4E0A\u4F20\u56FE\u7247\u9AD8\u5EA6\u4E0D\u80FD\u8D85\u8FC7" + maxScreenHeight + "\u50CF\u7D20"
          });
        } else {
          resolve(true);
        }
      };
      img.src = base64Url;
    };
    fileReader.readAsDataURL(file);
  });
}
var utils = {
  validateImgScreen,
  validateSize
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "flex-col fiex-center !text-14px !text-gray-300 upload-box" };
const _hoisted_2 = {
  key: 0,
  class: "mt-5px"
};
const _hoisted_3 = ["src"];
const __default__ = defineComponent({
  name: "BUpload",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    fileList: {
      default: []
    },
    maxSize: {
      type: Number,
      default: 0
    },
    screenWidth: {
      type: Number,
      default: 0
    },
    screenHeight: {
      type: Number,
      default: 0
    },
    maxScreenWidth: {
      type: Number,
      default: 0
    },
    maxScreenHeight: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: null
    }
  },
  emits: ["update:fileList"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const data = reactive({
      fileList: []
    });
    watchEffect(() => {
      if (props.fileList.length) {
        data.fileList = props.fileList;
      }
    });
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    ref(false);
    const handleRemove = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };
    const handlePictureCardPreview = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url;
      dialogVisible.value = true;
    };
    const handleSuccess = (res, file, fileList) => {
      $emit("update:fileList", data.fileList);
    };
    const handleChange = (uploadFile, uploadFiles) => {
    };
    const handleOnExceed = (files2, uploadFiles) => {
      if (data.fileList.length >= (props == null ? void 0 : props.limit)) {
        ElMessage.info(`\u6700\u591A\u4E0A\u4F20${props == null ? void 0 : props.limit}\u5F20\u56FE\u7247`);
      }
    };
    const beforeUpload = (rawFile) => {
      if (props.maxSize) {
        return utils.validateSize(rawFile, props.maxSize);
      } else if (props.screenWidth || props.screenHeight || props.maxScreenWidth || props.maxScreenHeight) {
        return utils.validateImgScreen(
          rawFile,
          props.screenWidth,
          props.screenHeight,
          props.maxScreenWidth,
          props.maxScreenHeight
        );
      } else {
        return true;
      }
    };
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_upload = ElUpload;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_upload, mergeProps(_ctx.$attrs, {
          "list-type": "picture-card",
          limit: __props.limit,
          "file-list": data.fileList,
          "on-success": handleSuccess,
          "on-change": handleChange,
          "on-preview": handlePictureCardPreview,
          "on-remove": handleRemove,
          "before-upload": beforeUpload,
          "on-exceed": handleOnExceed
        }), {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(unref(plus_default))
                ]),
                _: 1
              }),
              __props.limit ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(`\u6700\u591A\u4E0A\u4F20${__props.limit}\u5F20\u56FE\u7247`), 1)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "tips")
            ])
          ]),
          _: 3
        }, 16, ["limit", "file-list"]),
        createVNode(_component_el_dialog, {
          modelValue: dialogVisible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event)
        }, {
          default: withCtx(() => [
            createElementVNode("img", {
              style: { "width": "100%" },
              src: dialogImageUrl.value,
              alt: "Preview Image"
            }, null, 8, _hoisted_3)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
var __glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const modules = {};
const files = { "./baseform/index.vue": __glob_0_0, "./card/index.vue": __glob_0_1, "./image/index.vue": __glob_0_2, "./loading/index.vue": __glob_0_3, "./pagination/index.vue": __glob_0_4, "./searchForm/index.vue": __glob_0_5, "./table/index.vue": __glob_0_6, "./tinymce/index.vue": __glob_0_7, "./upload/index.vue": __glob_0_8 };
console.log("files", files);
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    const keys2 = key.split("/");
    const name = keys2[1];
    modules[`com-${name}`] = files[key].default;
  }
}
const components = Object.values(modules);
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
var index = { install };
export { index as default, install };
