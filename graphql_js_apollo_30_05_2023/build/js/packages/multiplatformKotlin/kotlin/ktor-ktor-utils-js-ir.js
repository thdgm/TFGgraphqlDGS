(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    root['ktor-ktor-utils-js-ir'] = factory(typeof this['ktor-ktor-utils-js-ir'] === 'undefined' ? {} : this['ktor-ktor-utils-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.r6;
  var Unit_getInstance = kotlin_kotlin.$_$.a3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.o9;
  var getStringHashCode = kotlin_kotlin.$_$.a7;
  var classMeta = kotlin_kotlin.$_$.t6;
  var setMetadataFor = kotlin_kotlin.$_$.o7;
  var interfaceMeta = kotlin_kotlin.$_$.c7;
  var CoroutineImpl = kotlin_kotlin.$_$.i6;
  var Long = kotlin_kotlin.$_$.k9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u5;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var isObject = kotlin_kotlin.$_$.i7;
  var equals = kotlin_kotlin.$_$.v6;
  var hashCode = kotlin_kotlin.$_$.b7;
  var MutableMap = kotlin_kotlin.$_$.k3;
  var ensureNotNull = kotlin_kotlin.$_$.v9;
  var Entry = kotlin_kotlin.$_$.f3;
  var isInterface = kotlin_kotlin.$_$.g7;
  var MutableEntry = kotlin_kotlin.$_$.j3;
  var charArray = kotlin_kotlin.$_$.p6;
  var charSequenceGet = kotlin_kotlin.$_$.q6;
  var toString = kotlin_kotlin.$_$.l2;
  var Char = kotlin_kotlin.$_$.b9;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.x5;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var get = kotlin_kotlin.$_$.e6;
  var fold = kotlin_kotlin.$_$.d6;
  var minusKey = kotlin_kotlin.$_$.f6;
  var plus = kotlin_kotlin.$_$.h6;
  var Element = kotlin_kotlin.$_$.g6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var Set = kotlin_kotlin.$_$.m3;
  var toString_0 = kotlin_kotlin.$_$.s7;
  var MutableCollection = kotlin_kotlin.$_$.h3;
  var firstOrNull = kotlin_kotlin.$_$.i4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var to = kotlin_kotlin.$_$.ea;
  var addAll = kotlin_kotlin.$_$.n3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var get_lastIndex = kotlin_kotlin.$_$.p8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.i2;
  var equals_0 = kotlin_kotlin.$_$.i8;
  var emptyMap = kotlin_kotlin.$_$.e4;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.n7;
  var Comparable = kotlin_kotlin.$_$.c9;
  var Enum = kotlin_kotlin.$_$.e9;
  var isSuspendFunction = kotlin_kotlin.$_$.j7;
  var MutableList = kotlin_kotlin.$_$.i3;
  var ArrayList = kotlin_kotlin.$_$.c3;
  var emptyList = kotlin_kotlin.$_$.d4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.n4;
  var last = kotlin_kotlin.$_$.q4;
  var mutableListOf = kotlin_kotlin.$_$.x4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var extendThrowable = kotlin_kotlin.$_$.w6;
  var captureStack = kotlin_kotlin.$_$.n6;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Companion_getInstance = kotlin_kotlin.$_$.y2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.u9;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.u2;
  var Continuation = kotlin_kotlin.$_$.c6;
  var fillArrayVal = kotlin_kotlin.$_$.x6;
  var intercepted = kotlin_kotlin.$_$.w5;
  var toList = kotlin_kotlin.$_$.k5;
  var isNaN_0 = kotlin_kotlin.$_$.x9;
  var numberToLong = kotlin_kotlin.$_$.m7;
  var IllegalStateException = kotlin_kotlin.$_$.i9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta, undefined, undefined, undefined, undefined, []);
  function get_0(key) {
    var tmp0_elvis_lhs = this.d1n(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($toByteArrayCOROUTINE$0, '$toByteArrayCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, undefined, [MutableMap], undefined, undefined, []);
  setMetadataFor(Entry_0, 'Entry', classMeta, undefined, [MutableEntry], undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element], undefined, undefined, []);
  setMetadataFor(DelegatingMutableSet$iterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, undefined, [Set, MutableCollection], undefined, undefined, []);
  function get_1(name) {
    var tmp0_safe_receiver = this.r1o(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_forEach = this.t1o();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.q();
      var k = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.r();
      var v = tmp$ret$1;
      body(k, v);
    }
    return Unit_getInstance();
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, undefined, [StringValues], undefined, undefined, []);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, undefined, [Comparable], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Month, 'Month', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor($proceedLoopCOROUTINE$1, '$proceedLoopCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, undefined, [CoroutineScope], undefined, undefined, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, undefined, undefined, undefined, undefined, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(SuspendFunctionGun$continuation$1, undefined, classMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, undefined, [Attributes], undefined, undefined, []);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(KtorSimpleLogger$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsType, 'JsType', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function AttributeKey(name) {
    this.b1n_1 = name;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.b1n_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  AttributeKey.prototype.toString = function () {
    return 'AttributeKey: ' + this.b1n_1;
  };
  AttributeKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof AttributeKey)
      other;
    else
      THROW_CCE();
    if (!(this.b1n_1 === other.b1n_1))
      return false;
    return true;
  };
  AttributeKey.prototype.hashCode = function () {
    return getStringHashCode(this.b1n_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = other.i1n();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.f1n(element instanceof AttributeKey ? element : THROW_CCE(), other.c1n(element));
    }
  }
  function toByteArray(_this__u8e3s4, $cont) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1n_1 = _this__u8e3s4;
  }
  $toByteArrayCOROUTINE$0.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.r1n_1.t1e(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes$default(ARGUMENT, 0, 1, null);
          case 2:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 2) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.s1n_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.q().s1n_1, $this$$receiver.r());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.q()), $this$$receiver.r());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.u1n_1 = tmp$ret$0;
  }
  CaseInsensitiveMap.prototype.c = function () {
    return this.u1n_1.c();
  };
  CaseInsensitiveMap.prototype.v1n = function (key) {
    return this.u1n_1.v1(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.v1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.v1n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.w1n = function (key) {
    return this.u1n_1.b2(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.b2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.w1n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.k = function () {
    return this.u1n_1.k();
  };
  CaseInsensitiveMap.prototype.y6 = function () {
    this.u1n_1.y6();
  };
  CaseInsensitiveMap.prototype.x1n = function (key, value) {
    return this.u1n_1.v2(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.v2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.x1n(tmp, isObject(value) ? value : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.y1n = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = from.p().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.q();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.r();
      var value = tmp$ret$2;
      this.x1n(key, value);
    }
  };
  CaseInsensitiveMap.prototype.z7 = function (from) {
    return this.y1n(from);
  };
  CaseInsensitiveMap.prototype.z1n = function (key) {
    return this.u1n_1.a8(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.a8 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.z1n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.c2 = function () {
    var tmp = this.u1n_1.c2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  CaseInsensitiveMap.prototype.p = function () {
    var tmp = this.u1n_1.p();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  CaseInsensitiveMap.prototype.d2 = function () {
    return this.u1n_1.d2();
  };
  CaseInsensitiveMap.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.u1n_1, this.u1n_1);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.u1n_1);
  };
  function Entry_0(key, value) {
    this.a1o_1 = key;
    this.b1o_1 = value;
  }
  Entry_0.prototype.q = function () {
    return this.a1o_1;
  };
  Entry_0.prototype.r = function () {
    return this.b1o_1;
  };
  Entry_0.prototype.c1o = function (newValue) {
    this.b1o_1 = newValue;
    return this.b1o_1;
  };
  Entry_0.prototype.p7 = function (newValue) {
    return this.c1o((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  Entry_0.prototype.hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.a1o_1)) | 0) + hashCode(ensureNotNull(this.b1o_1)) | 0;
  };
  Entry_0.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.q(), this.a1o_1) ? equals(other.r(), this.b1o_1) : false;
  };
  Entry_0.prototype.toString = function () {
    return '' + this.a1o_1 + '=' + this.b1o_1;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'io.ktor.util.toCharArray.<anonymous>' call
      tmp$ret$0 = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercaseChar' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
    return equals(new Char(tmp$ret$3), new Char(_this__u8e3s4));
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    var tmp = SupervisorJob(parent);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.q3(tmp$ret$0);
  }
  function SilentSupervisor$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SilentSupervisor(parent);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.lk = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  function DelegatingMutableSet$iterator$1(this$0) {
    this.f1o_1 = this$0;
    this.e1o_1 = this$0.g1o_1.d();
  }
  DelegatingMutableSet$iterator$1.prototype.m = function () {
    return this.e1o_1.m();
  };
  DelegatingMutableSet$iterator$1.prototype.e = function () {
    return this.f1o_1.h1o_1(this.e1o_1.e());
  };
  DelegatingMutableSet$iterator$1.prototype.z6 = function () {
    return this.e1o_1.z6();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.g1o_1 = delegate;
    this.h1o_1 = convertTo;
    this.i1o_1 = convert;
    this.j1o_1 = this.g1o_1.c();
  }
  DelegatingMutableSet.prototype.k1o = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.m()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      tmp$ret$0 = this.i1o_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.l1o = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.m()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      tmp$ret$0 = this.h1o_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.c = function () {
    return this.j1o_1;
  };
  DelegatingMutableSet.prototype.m1o = function (element) {
    return this.g1o_1.a(this.i1o_1(element));
  };
  DelegatingMutableSet.prototype.a = function (element) {
    return this.m1o((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.n1o = function (elements) {
    return this.g1o_1.j(this.k1o(elements));
  };
  DelegatingMutableSet.prototype.j = function (elements) {
    return this.n1o(elements);
  };
  DelegatingMutableSet.prototype.y6 = function () {
    this.g1o_1.y6();
  };
  DelegatingMutableSet.prototype.o1o = function (element) {
    return this.g1o_1.n(this.i1o_1(element));
  };
  DelegatingMutableSet.prototype.n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.o1o((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.p1o = function (elements) {
    return this.g1o_1.a1(this.k1o(elements));
  };
  DelegatingMutableSet.prototype.a1 = function (elements) {
    return this.p1o(elements);
  };
  DelegatingMutableSet.prototype.k = function () {
    return this.g1o_1.k();
  };
  DelegatingMutableSet.prototype.d = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.g1o_1);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.l1o(this.g1o_1);
    var tmp_0;
    if (other.a1(elements)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsAll' call
      var tmp0_containsAll = other;
      tmp$ret$0 = elements.a1(tmp0_containsAll);
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return toString_0(this.l1o(this.g1o_1));
  };
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.w1o_1.b2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.x1o(name);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.w1o_1;
      tmp0_set.v2(name, tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.y1o(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    this.v1o_1 = caseInsensitiveName;
    this.w1o_1 = this.v1o_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  StringValuesBuilderImpl.prototype.q1o = function () {
    return this.v1o_1;
  };
  StringValuesBuilderImpl.prototype.r1o = function (name) {
    return this.w1o_1.b2(name);
  };
  StringValuesBuilderImpl.prototype.s1o = function () {
    return this.w1o_1.c2();
  };
  StringValuesBuilderImpl.prototype.k = function () {
    return this.w1o_1.k();
  };
  StringValuesBuilderImpl.prototype.t1o = function () {
    return unmodifiable(this.w1o_1.p());
  };
  StringValuesBuilderImpl.prototype.z1o = function (name, value) {
    this.a1p(value);
    var list = ensureListForKey(this, name);
    list.y6();
    list.a(value);
  };
  StringValuesBuilderImpl.prototype.w1n = function (name) {
    var tmp0_safe_receiver = this.r1o(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesBuilderImpl.prototype.b1p = function (name, value) {
    this.a1p(value);
    ensureListForKey(this, name).a(value);
  };
  StringValuesBuilderImpl.prototype.c1p = function (stringValues) {
    stringValues.u1o(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  StringValuesBuilderImpl.prototype.y1o = function (name, values) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureListForKey(this, name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_iterator = values.d();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.a1p(element);
      tmp0_let.a(element);
    }
    tmp$ret$0 = Unit_getInstance();
  };
  StringValuesBuilderImpl.prototype.d1p = function (name) {
    this.w1o_1.a8(name);
  };
  StringValuesBuilderImpl.prototype.y6 = function () {
    this.w1o_1.y6();
  };
  StringValuesBuilderImpl.prototype.x1o = function (name) {
  };
  StringValuesBuilderImpl.prototype.a1p = function (value) {
  };
  function listForKey($this, name) {
    return $this.f1p_1.b2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    this.e1p_1 = caseInsensitiveName;
    var tmp;
    if (this.e1p_1) {
      tmp = caseInsensitiveMap();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp = tmp$ret$0;
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$1 = values.p().d();
    var tmp0_iterator = tmp$ret$1;
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$2 = element.q();
      var key = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$3 = element.r();
      var value = tmp$ret$3;
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = value.c();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_List)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          tmp$ret$4 = value.f(index);
          list.a(tmp$ret$4);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$5 = list;
      tmp$ret$6 = tmp$ret$5;
      var tmp1_set = tmp$ret$6;
      newMap.v2(key, tmp1_set);
    }
    this.f1p_1 = newMap;
  }
  StringValuesImpl.prototype.q1o = function () {
    return this.e1p_1;
  };
  StringValuesImpl.prototype.w1n = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesImpl.prototype.r1o = function (name) {
    return listForKey(this, name);
  };
  StringValuesImpl.prototype.s1o = function () {
    return unmodifiable(this.f1p_1.c2());
  };
  StringValuesImpl.prototype.k = function () {
    return this.f1p_1.k();
  };
  StringValuesImpl.prototype.t1o = function () {
    return unmodifiable(this.f1p_1.p());
  };
  StringValuesImpl.prototype.u1o = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.f1p_1;
    tmp$ret$0 = tmp0_iterator.p().d();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.m()) {
      var tmp1_loop_parameter = tmp0_iterator_0.e();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.q();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.r();
      var value = tmp$ret$2;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.e1p_1 + ') ' + this.t1o();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.e1p_1 === other.q1o()))
      return false;
    return entriesEquals(this.t1o(), other.t1o());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.t1o(), imul(31, this.e1p_1 | 0));
  };
  function appendAll(_this__u8e3s4, builder) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = builder.t1o();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.q();
      var name = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.r();
      var values = tmp$ret$1;
      _this__u8e3s4.y1o(name, values);
    }
    tmp$ret$2 = _this__u8e3s4;
    return tmp$ret$2;
  }
  function flattenEntries(_this__u8e3s4) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = _this__u8e3s4.t1o();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.d();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.e();
      var tmp$ret$3;
      // Inline function 'io.ktor.util.flattenEntries.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = element.r();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator_0 = tmp0_map.d();
      while (tmp0_iterator_0.m()) {
        var item = tmp0_iterator_0.e();
        var tmp$ret$0;
        // Inline function 'io.ktor.util.flattenEntries.<anonymous>.<anonymous>' call
        tmp$ret$0 = to(element.q(), item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var list = tmp$ret$3;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$4 = tmp0_flatMapTo;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, index);
          tmp$ret$0 = !equals(new Char(toLowerCasePreservingASCII(tmp0__anonymous__q1qw7t)), new Char(tmp0__anonymous__q1qw7t));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    var tmp1_buildString = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp1_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    tmp0_apply.nb(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp0_apply.n5(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp0_subject = ch;
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString(ch);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.s1n_1 = content;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.s1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    tmp.t1n_1 = getStringHashCode(tmp$ret$1);
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1n_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.s1n_1, true)) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.t1n_1;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.s1n_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.g1p_1 = atomic$ref$1(emptyMap());
  }
  CopyOnWriteHashMap.prototype.b2 = function (key) {
    return this.g1p_1.kotlinx$atomicfu$value.b2(key);
  };
  function Companion() {
    Companion_instance = this;
    this.h1p_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_0();
    this.i1p_1 = seconds;
    this.j1p_1 = minutes;
    this.k1p_1 = hours;
    this.l1p_1 = dayOfWeek;
    this.m1p_1 = dayOfMonth;
    this.n1p_1 = dayOfYear;
    this.o1p_1 = month;
    this.p1p_1 = year;
    this.q1p_1 = timestamp;
  }
  GMTDate.prototype.r1p = function (other) {
    return this.q1p_1.v(other.q1p_1);
  };
  GMTDate.prototype.o6 = function (other) {
    return this.r1p(other instanceof GMTDate ? other : THROW_CCE());
  };
  GMTDate.prototype.toString = function () {
    return 'GMTDate(seconds=' + this.i1p_1 + ', minutes=' + this.j1p_1 + ', hours=' + this.k1p_1 + ', dayOfWeek=' + this.l1p_1 + ', dayOfMonth=' + this.m1p_1 + ', dayOfYear=' + this.n1p_1 + ', month=' + this.o1p_1 + ', year=' + this.p1p_1 + ', timestamp=' + toString_0(this.q1p_1) + ')';
  };
  GMTDate.prototype.hashCode = function () {
    var result = this.i1p_1;
    result = imul(result, 31) + this.j1p_1 | 0;
    result = imul(result, 31) + this.k1p_1 | 0;
    result = imul(result, 31) + this.l1p_1.hashCode() | 0;
    result = imul(result, 31) + this.m1p_1 | 0;
    result = imul(result, 31) + this.n1p_1 | 0;
    result = imul(result, 31) + this.o1p_1.hashCode() | 0;
    result = imul(result, 31) + this.p1p_1 | 0;
    result = imul(result, 31) + this.q1p_1.hashCode() | 0;
    return result;
  };
  GMTDate.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.i1p_1 === tmp0_other_with_cast.i1p_1))
      return false;
    if (!(this.j1p_1 === tmp0_other_with_cast.j1p_1))
      return false;
    if (!(this.k1p_1 === tmp0_other_with_cast.k1p_1))
      return false;
    if (!this.l1p_1.equals(tmp0_other_with_cast.l1p_1))
      return false;
    if (!(this.m1p_1 === tmp0_other_with_cast.m1p_1))
      return false;
    if (!(this.n1p_1 === tmp0_other_with_cast.n1p_1))
      return false;
    if (!this.o1p_1.equals(tmp0_other_with_cast.o1p_1))
      return false;
    if (!(this.p1p_1 === tmp0_other_with_cast.p1p_1))
      return false;
    if (!this.q1p_1.equals(tmp0_other_with_cast.q1p_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.s1p = function (ordinal) {
    return values()[ordinal];
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    WeekDay_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_getInstance();
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    Companion_getInstance_1();
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.v1p_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.s1p = function (ordinal) {
    return values_0()[ordinal];
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    Month_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Companion_getInstance_2();
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.y1p_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function proceedLoop($this, $cont) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1q_1 = _this__u8e3s4;
  }
  $proceedLoopCOROUTINE$1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 6;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.i1q_1 = this.h1q_1.p1q_1;
            if (this.i1q_1 === -1) {
              this.cd_1 = 5;
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.j1q_1 = this.h1q_1.m1q_1;
            if (this.i1q_1 >= this.j1q_1.c()) {
              this.h1q_1.q1q();
              this.cd_1 = 5;
              continue $sm;
            } else {
              this.cd_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.k1q_1 = this.j1q_1.f(this.i1q_1);
            this.h1q_1.p1q_1 = this.i1q_1 + 1 | 0;
            this.cd_1 = 4;
            var tmp_0 = this.k1q_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.h1q_1, this.h1q_1.o1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 5;
            continue $sm;
          case 5:
            return this.h1q_1.o1q_1;
          case 6:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 6) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.m1q_1 = interceptors;
    this.n1q_1 = coroutineContext;
    this.o1q_1 = subject;
    this.p1q_1 = 0;
  }
  DebugPipelineContext.prototype.je = function () {
    return this.n1q_1;
  };
  DebugPipelineContext.prototype.q1q = function () {
    this.p1q_1 = -1;
  };
  DebugPipelineContext.prototype.r1q = function (subject, $cont) {
    this.o1q_1 = subject;
    return this.s1q($cont);
  };
  DebugPipelineContext.prototype.s1q = function ($cont) {
    var index = this.p1q_1;
    if (index < 0)
      return this.o1q_1;
    if (index >= this.m1q_1.c()) {
      this.q1q();
      return this.o1q_1;
    }
    return proceedLoop(this, $cont);
  };
  DebugPipelineContext.prototype.t1q = function (initial, $cont) {
    this.p1q_1 = 0;
    this.o1q_1 = initial;
    return this.s1q($cont);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_3().u1q_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_3().u1q_1.k();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      tmp$ret$0 = 'The shared empty array list has been modified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, Object.create(PhaseContent.prototype));
  }
  function copyInterceptors($this) {
    $this.x1q_1 = $this.z1q();
    $this.y1q_1 = false;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.u1q_1 = tmp$ret$0;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_3();
    this.v1q_1 = phase;
    this.w1q_1 = relation;
    this.x1q_1 = interceptors;
    this.y1q_1 = true;
  }
  PhaseContent.prototype.il = function () {
    return this.x1q_1.k();
  };
  PhaseContent.prototype.c = function () {
    return this.x1q_1.c();
  };
  PhaseContent.prototype.a1r = function (interceptor) {
    if (this.y1q_1) {
      copyInterceptors(this);
    }
    this.x1q_1.a(interceptor);
  };
  PhaseContent.prototype.b1r = function (destination) {
    var interceptors = this.x1q_1;
    if (destination instanceof ArrayList) {
      destination.b8(destination.c() + interceptors.c() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.a(interceptors.f(index));
      }
       while (inductionVariable < last);
  };
  PhaseContent.prototype.c1r = function () {
    this.y1q_1 = true;
    return this.x1q_1;
  };
  PhaseContent.prototype.z1q = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    tmp0_apply.j(this.x1q_1);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  };
  PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.v1q_1.d1r_1 + '`, ' + this.c() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.i1r_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.i1r_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.l1r());
  }
  function findPhase($this, phase) {
    var phasesList = $this.g1r_1;
    var inductionVariable = 0;
    var last = phasesList.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.f(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.w6(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.v1q_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.g1r_1;
    var inductionVariable = 0;
    var last = phasesList.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.f(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.v1q_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.g1r_1;
    var inductionVariable = 0;
    var last = phasesList.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.f(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.v1q_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.h1r_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.g1r_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.f(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.il())
            continue $l$loop_0;
          var interceptors = phaseContent.c1r();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var destination = tmp$ret$0;
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.f(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.b1r(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.j1r_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.j1r_1 = false;
    $this.k1r_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.j1r_1 = false;
    $this.k1r_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.c1r());
    $this.j1r_1 = false;
    $this.k1r_1 = phaseContent.v1q_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.g1r_1.k() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.j1r_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.k1r_1, phase)) {
      currentInterceptors.a(block);
      return true;
    }
    if (equals(phase, last($this.g1r_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.g1r_1)) {
      ensureNotNull(findPhase($this, phase)).a1r(block);
      currentInterceptors.a(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.e1r_1 = Attributes_0(true);
    this.f1r_1 = false;
    this.g1r_1 = mutableListOf(phases.slice());
    this.h1r_1 = 0;
    this.i1r_1 = atomic$ref$1(null);
    this.j1r_1 = false;
    this.k1r_1 = null;
  }
  Pipeline.prototype.l1r = function () {
    return this.f1r_1;
  };
  Pipeline.prototype.m1r = function (context, subject, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.f3();
    return createContext(this, context, subject, tmp$ret$0).t1q(subject, $cont);
  };
  Pipeline.prototype.o1r = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.g1r_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.g1r_1.f(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w1q_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p1r_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.g1r_1.j7(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  Pipeline.prototype.q1r = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.g1r_1.j7(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  Pipeline.prototype.r1r = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block === 'function')
      block;
    else
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.h1r_1;
      tmp1_this.h1r_1 = tmp2 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.a1r(block);
    var tmp3_this = this;
    var tmp4 = tmp3_this.h1r_1;
    tmp3_this.h1r_1 = tmp4 + 1 | 0;
    resetInterceptorsList(this);
    this.s1r();
  };
  Pipeline.prototype.s1r = function () {
  };
  function PipelineContext(context) {
    this.n1r_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.d1r_1 = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.d1r_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.p1r_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.t1r_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.a1s_1;
      if (currentIndex === $this.v1r_1.c()) {
        if (!direct) {
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          var tmp1_success = $this.x1r_1;
          tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_success);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.a1s_1 = currentIndex + 1 | 0;
      var next = $this.v1r_1.f(currentIndex);
      try {
        var result = next($this, $this.x1r_1, $this.w1r_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.z1r_1 < 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    }
    var next = ensureNotNull($this.y1r_1[$this.z1r_1]);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.z1r_1;
    tmp0_this.z1r_1 = tmp1 - 1 | 0;
    $this.y1r_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.g3(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.g3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.z1r_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp0_this = $this;
    var tmp1 = tmp0_this.z1r_1;
    tmp0_this.z1r_1 = tmp1 - 1 | 0;
    $this.y1r_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    var tmp0_this = $this;
    tmp0_this.z1r_1 = tmp0_this.z1r_1 + 1 | 0;
    $this.y1r_1[tmp0_this.z1r_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.c1s_1 = this$0;
    this.b1s_1 = IntCompanionObject_getInstance().MIN_VALUE;
  }
  SuspendFunctionGun$continuation$1.prototype.f3 = function () {
    var tmp0_safe_receiver = this.c1s_1.y1r_1[this.c1s_1.z1r_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f3();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Not started');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  SuspendFunctionGun$continuation$1.prototype.d1s = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      resumeRootWith(this.c1s_1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.c1s_1, false);
  };
  SuspendFunctionGun$continuation$1.prototype.g3 = function (result) {
    return this.d1s(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.v1r_1 = blocks;
    var tmp = this;
    tmp.w1r_1 = new SuspendFunctionGun$continuation$1(this);
    this.x1r_1 = initial;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.v1r_1.c();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_0.y1r_1 = tmp$ret$0;
    this.z1r_1 = -1;
    this.a1s_1 = 0;
  }
  SuspendFunctionGun.prototype.je = function () {
    return this.w1r_1.f3();
  };
  SuspendFunctionGun.prototype.s1q = function ($cont) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      if (this.a1s_1 === this.v1r_1.c()) {
        tmp$ret$0 = this.x1r_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted(tmp0__anonymous__q1qw7t));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.x1r_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  SuspendFunctionGun.prototype.r1q = function (subject, $cont) {
    this.x1r_1 = subject;
    return this.s1q($cont);
  };
  SuspendFunctionGun.prototype.t1q = function (initial, $cont) {
    this.a1s_1 = 0;
    if (this.a1s_1 === this.v1r_1.c())
      return initial;
    this.x1r_1 = initial;
    if (this.z1r_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.s1q($cont);
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    this.e1s_1 = type;
    this.f1s_1 = reifiedType;
    this.g1s_1 = kotlinType;
  }
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + this.e1s_1 + ', reifiedType=' + this.f1s_1 + ', kotlinType=' + this.g1s_1 + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = this.e1s_1.hashCode();
    result = imul(result, 31) + hashCode(this.f1s_1) | 0;
    result = imul(result, 31) + (this.g1s_1 == null ? 0 : hashCode(this.g1s_1)) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.e1s_1.equals(tmp0_other_with_cast.e1s_1))
      return false;
    if (!equals(this.f1s_1, tmp0_other_with_cast.f1s_1))
      return false;
    if (!equals(this.g1s_1, tmp0_other_with_cast.g1s_1))
      return false;
    return true;
  };
  function Attributes_0(concurrent) {
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.h1s_1 = tmp$ret$0;
  }
  AttributesJs.prototype.d1n = function (key) {
    var tmp = this.h1s_1.b2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  AttributesJs.prototype.e1n = function (key) {
    return this.h1s_1.v1(key);
  };
  AttributesJs.prototype.f1n = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.h1s_1;
    tmp0_set.v2(key, value);
  };
  AttributesJs.prototype.g1n = function (key) {
    this.h1s_1.a8(key);
  };
  AttributesJs.prototype.h1n = function (key, block) {
    var tmp0_safe_receiver = this.h1s_1.b2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return isObject(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.h1s_1;
    tmp0_set.v2(key, tmp0_also);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  AttributesJs.prototype.i1n = function () {
    return toList(this.h1s_1.c2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var tmp_0 = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined');
    tmp.i1s_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    tmp_1.j1s_1 = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
    this.k1s_1 = false;
    this.l1s_1 = false;
    this.m1s_1 = false;
    this.n1s_1 = true;
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function GMTDate_0(timestamp) {
    var tmp0_safe_receiver = timestamp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pc();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp$ret$0 = new Date(tmp1_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_getInstance_1().s1p((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_getInstance_2().s1p(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function GMTDate$default(timestamp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      timestamp = null;
    return GMTDate_0(timestamp);
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + toString_0(timestamp), this);
    captureStack(this, InvalidTimestampException);
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function KtorSimpleLogger$1() {
  }
  KtorSimpleLogger$1.prototype.o1s = function (message) {
    console.info('TRACE: ' + message);
  };
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.fa(_this__u8e3s4);
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
    JsType_instance = this;
  }
  var JsType_instance;
  function JsType_getInstance() {
    if (JsType_instance == null)
      new JsType();
    return JsType_instance;
  }
  //region block: post-declaration
  _no_name_provided__qut3iv.prototype.j3 = get;
  _no_name_provided__qut3iv.prototype.p3 = fold;
  _no_name_provided__qut3iv.prototype.o3 = minusKey;
  _no_name_provided__qut3iv.prototype.q3 = plus;
  AttributesJs.prototype.c1n = get_0;
  //endregion
  //region block: init
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = GMTDate$default;
  _.$_$.c = SilentSupervisor$default;
  _.$_$.d = JsType_getInstance;
  _.$_$.e = PlatformUtils_getInstance;
  _.$_$.f = CopyOnWriteHashMap;
  _.$_$.g = KtorSimpleLogger;
  _.$_$.h = PipelineContext;
  _.$_$.i = PipelinePhase;
  _.$_$.j = Pipeline;
  _.$_$.k = instanceOf;
  _.$_$.l = typeInfoImpl;
  _.$_$.m = AttributeKey;
  _.$_$.n = Attributes_0;
  _.$_$.o = forEach;
  _.$_$.p = get_1;
  _.$_$.q = StringValuesBuilderImpl;
  _.$_$.r = StringValuesImpl;
  _.$_$.s = StringValues;
  _.$_$.t = appendAll;
  _.$_$.u = flattenEntries;
  _.$_$.v = isLowerCase;
  _.$_$.w = putAll;
  _.$_$.x = toCharArray;
  _.$_$.y = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-ir.js.map
