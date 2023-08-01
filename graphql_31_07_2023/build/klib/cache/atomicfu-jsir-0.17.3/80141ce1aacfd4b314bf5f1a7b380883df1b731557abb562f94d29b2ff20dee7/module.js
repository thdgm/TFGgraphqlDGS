(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module '88b0986a7186d029-atomicfu-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to '88b0986a7186d029-atomicfu-js-ir'.");
    }
    root['88b0986a7186d029-atomicfu-js-ir'] = factory(typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined' ? {} : this['88b0986a7186d029-atomicfu-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var fillArrayVal = kotlin_kotlin.$_$.eb;
  var classMeta = kotlin_kotlin.$_$.ab;
  var setMetadataFor = kotlin_kotlin.$_$.fc;
  var objectMeta = kotlin_kotlin.$_$.ec;
  var toString = kotlin_kotlin.$_$.jc;
  var toString_0 = kotlin_kotlin.$_$.sg;
  //endregion
  //region block: pre-declaration
  setMetadataFor(atomicfu$AtomicRefArray$ref, 'AtomicArray', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(atomicfu$TraceBase, 'TraceBase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(None, 'None', objectMeta, atomicfu$TraceBase, undefined, undefined, undefined, []);
  setMetadataFor(atomicfu$TraceFormat, 'TraceFormat', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicBoolean, 'AtomicBoolean', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicRef, 'AtomicRef', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AtomicLong, 'AtomicLong', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ReentrantLock, 'ReentrantLock', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function update(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return Unit_getInstance();
    }
  }
  function updateAndGet(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  }
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$());
    }
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function atomicfu$AtomicRefArray$ref(size) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = size;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.AtomicArray.array.<anonymous>' call
      tmp$ret$1 = atomic$ref$1(null);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.array_1 = tmp_2;
  }
  atomicfu$AtomicRefArray$ref.prototype.get_atomicfu$size_iufoqq_k$ = function () {
    return this.array_1.length;
  };
  atomicfu$AtomicRefArray$ref.prototype.atomicfu$get = function (index) {
    return this.array_1[index];
  };
  Object.defineProperty(atomicfu$AtomicRefArray$ref.prototype, 'atomicfu$size', {
    configurable: true,
    get: atomicfu$AtomicRefArray$ref.prototype.get_atomicfu$size_iufoqq_k$
  });
  function atomicfu$AtomicRefArray$ofNulls(size) {
    return new atomicfu$AtomicRefArray$ref(size);
  }
  function update_0(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return Unit_getInstance();
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$());
    }
  }
  function updateAndGet_0(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  }
  function loop_1(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$());
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.prototype.invoke_pyr0m4_k$ = function (event) {
    this.atomicfu$Trace$append$1(event());
  };
  function atomicfu$TraceFormat() {
  }
  atomicfu$TraceFormat.prototype.atomicfu$TraceFormat$format = function (index, event) {
    return '' + index + ': ' + toString(event);
  };
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicBoolean.prototype.set_kotlinx$atomicfu$value_rpu4go_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  AtomicBoolean.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  AtomicBoolean.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  AtomicBoolean.prototype.setValue_yjn1ii_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicBoolean.prototype.lazySet_lh19sr_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$boolean$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicRef.prototype.set_kotlinx$atomicfu$value_koguff_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  AtomicRef.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  AtomicRef.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  AtomicRef.prototype.setValue_o0pjfh_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicRef.prototype.lazySet_9mpar2_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this.kotlinx$atomicfu$value);
  };
  function atomic$ref$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicInt.prototype.set_kotlinx$atomicfu$value_3lx0f_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  AtomicInt.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.setValue_3xckvl_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicInt.prototype.lazySet_emoqzm_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value - 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.plusAssign_mcu86f_k$ = function (delta) {
    this.atomicfu$getAndAdd(delta);
  };
  AtomicInt.prototype.minusAssign_8s6p5d_k$ = function (delta) {
    this.atomicfu$getAndAdd(-delta | 0);
  };
  AtomicInt.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicLong.prototype.set_kotlinx$atomicfu$value_sbfhx2_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  AtomicLong.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.setValue_j9ezy0_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicLong.prototype.lazySet_42o0gp_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this.kotlinx$atomicfu$value.equals(expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1.inc_28ke_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1.dec_24n6_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.plus_u6jwas_k$(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.plus_u6jwas_k$(delta);
    return this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.inc_28ke_k$();
    return tmp0_this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.dec_24n6_k$();
    return tmp0_this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.plusAssign_mcpmgy_k$ = function (delta) {
    this.atomicfu$getAndAdd$long(delta);
  };
  AtomicLong.prototype.minusAssign_rr4kew_k$ = function (delta) {
    this.atomicfu$getAndAdd$long(delta.unaryMinus_6uz0qp_k$());
  };
  AtomicLong.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$long$1(initial) {
    return atomic_2(initial, None_getInstance());
  }
  function atomic$boolean$(initial, trace) {
    return atomic(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic$default(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic(initial, trace);
  }
  function atomic$ref$(initial, trace) {
    return atomic_0(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_0(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic$default_0(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_0(initial, trace);
  }
  function atomic$int$(initial, trace) {
    return atomic_1(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic$default_1(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_1(initial, trace);
  }
  function atomic$long$(initial, trace) {
    return atomic_2(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_2(initial, trace) {
    return new AtomicLong(initial);
  }
  function atomic$default_2(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_2(initial, trace);
  }
  function get_traceFormatDefault() {
    init_properties_Trace_kt_b1chdd();
    return traceFormatDefault;
  }
  var traceFormatDefault;
  var properties_initialized_Trace_kt_s8gvpx;
  function init_properties_Trace_kt_b1chdd() {
    if (properties_initialized_Trace_kt_s8gvpx) {
    } else {
      properties_initialized_Trace_kt_s8gvpx = true;
      traceFormatDefault = new atomicfu$TraceFormat();
    }
  }
  function get_atomicfu$reentrantLock() {
    init_properties_Synchronized_kt_vep4ze();
    return Lock;
  }
  var Lock;
  function synchronized(lock, block) {
    init_properties_Synchronized_kt_vep4ze();
    return block();
  }
  function ReentrantLock() {
  }
  ReentrantLock.prototype.lock_folzoa_k$ = function () {
  };
  ReentrantLock.prototype.tryLock_hapj0a_k$ = function () {
    return true;
  };
  ReentrantLock.prototype.unlock_85cgkz_k$ = function () {
  };
  var properties_initialized_Synchronized_kt_8bwsba;
  function init_properties_Synchronized_kt_vep4ze() {
    if (properties_initialized_Synchronized_kt_8bwsba) {
    } else {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomicfu$AtomicRefArray$ofNulls;
  _.$_$.b = atomic$boolean$1;
  _.$_$.c = atomic$long$1;
  _.$_$.d = atomic$ref$1;
  _.$_$.e = atomic$int$1;
  //endregion
  return _;
}));
