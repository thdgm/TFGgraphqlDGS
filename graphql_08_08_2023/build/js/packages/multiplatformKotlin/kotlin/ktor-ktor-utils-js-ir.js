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
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var Annotation = kotlin_kotlin.$_$.se;
  var classMeta = kotlin_kotlin.$_$.ab;
  var setMetadataFor = kotlin_kotlin.$_$.fc;
  var charSequenceLength = kotlin_kotlin.$_$.ya;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.hb;
  var interfaceMeta = kotlin_kotlin.$_$.jb;
  var numberToChar = kotlin_kotlin.$_$.bc;
  var indexOf$default = kotlin_kotlin.$_$.r;
  var CoroutineImpl = kotlin_kotlin.$_$.na;
  var Long = kotlin_kotlin.$_$.ff;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x9;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l1;
  var isObject = kotlin_kotlin.$_$.vb;
  var equals = kotlin_kotlin.$_$.cb;
  var hashCode = kotlin_kotlin.$_$.ib;
  var MutableMap = kotlin_kotlin.$_$.k6;
  var ensureNotNull = kotlin_kotlin.$_$.dg;
  var Entry = kotlin_kotlin.$_$.e6;
  var isInterface = kotlin_kotlin.$_$.sb;
  var MutableEntry = kotlin_kotlin.$_$.j6;
  var charArray = kotlin_kotlin.$_$.wa;
  var charSequenceGet = kotlin_kotlin.$_$.xa;
  var toString = kotlin_kotlin.$_$.j3;
  var Char = kotlin_kotlin.$_$.ue;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.ba;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var get = kotlin_kotlin.$_$.ia;
  var fold = kotlin_kotlin.$_$.ha;
  var minusKey = kotlin_kotlin.$_$.ja;
  var plus = kotlin_kotlin.$_$.ma;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var MutableIterator = kotlin_kotlin.$_$.h6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Set = kotlin_kotlin.$_$.n6;
  var toString_0 = kotlin_kotlin.$_$.jc;
  var MutableSet = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var to = kotlin_kotlin.$_$.tg;
  var addAll = kotlin_kotlin.$_$.o6;
  var objectMeta = kotlin_kotlin.$_$.ec;
  var firstOrNull = kotlin_kotlin.$_$.w7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var Map = kotlin_kotlin.$_$.f6;
  var toSet = kotlin_kotlin.$_$.q9;
  var emptySet = kotlin_kotlin.$_$.s7;
  var emptyMap = kotlin_kotlin.$_$.r7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u1;
  var get_lastIndex = kotlin_kotlin.$_$.sd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.g3;
  var equals_0 = kotlin_kotlin.$_$.kd;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Comparable = kotlin_kotlin.$_$.ve;
  var THROW_ISE = kotlin_kotlin.$_$.nf;
  var Enum = kotlin_kotlin.$_$.ze;
  var isSuspendFunction = kotlin_kotlin.$_$.xb;
  var MutableList = kotlin_kotlin.$_$.i6;
  var ArrayList = kotlin_kotlin.$_$.u5;
  var emptyList = kotlin_kotlin.$_$.q7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.i8;
  var last = kotlin_kotlin.$_$.l8;
  var mutableListOf = kotlin_kotlin.$_$.t8;
  var List = kotlin_kotlin.$_$.d6;
  var toMutableList = kotlin_kotlin.$_$.n9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var extendThrowable = kotlin_kotlin.$_$.db;
  var captureStack = kotlin_kotlin.$_$.ua;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var getKClass = kotlin_kotlin.$_$.d;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.z4;
  var Continuation = kotlin_kotlin.$_$.ga;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.e5;
  var Companion_getInstance = kotlin_kotlin.$_$.n5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k3;
  var createFailure = kotlin_kotlin.$_$.cg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.l3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.m3;
  var fillArrayVal = kotlin_kotlin.$_$.eb;
  var intercepted = kotlin_kotlin.$_$.aa;
  var toList = kotlin_kotlin.$_$.k9;
  var KProperty0 = kotlin_kotlin.$_$.xc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.gb;
  var lazy = kotlin_kotlin.$_$.kg;
  var isNaN_0 = kotlin_kotlin.$_$.ig;
  var numberToLong = kotlin_kotlin.$_$.dc;
  var IllegalStateException = kotlin_kotlin.$_$.df;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.l2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(InternalAPI, 'InternalAPI', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(KtorDsl, 'KtorDsl', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta, undefined, undefined, undefined, undefined, []);
  function get_0(key) {
    var tmp0_elvis_lhs = this.getOrNull_gb0h81_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function take(key) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.get_ny5huj_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.Attributes.take.<anonymous>' call
    this.remove_5z2j18_k$(key);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function takeOrNull(key) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.getOrNull_gb0h81_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.Attributes.takeOrNull.<anonymous>' call
    this.remove_5z2j18_k$(key);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($toByteArrayCOROUTINE$0, '$toByteArrayCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, undefined, [MutableMap], undefined, undefined, []);
  setMetadataFor(Entry_0, 'Entry', classMeta, undefined, [MutableEntry], undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler], undefined, undefined, []);
  setMetadataFor(DelegatingMutableSet$iterator$1, undefined, classMeta, undefined, [MutableIterator], undefined, undefined, []);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, undefined, [MutableSet], undefined, undefined, []);
  setMetadataFor(StringValuesBuilder, 'StringValuesBuilder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  function get_1(name) {
    var tmp0_safe_receiver = this.getAll_9rlpue_k$(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function contains(name) {
    return !(this.getAll_9rlpue_k$(name) == null);
  }
  function contains_0(name, value) {
    var tmp0_safe_receiver = this.getAll_9rlpue_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_2ehdt1_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function forEach(body) {
    var tmp0_forEach = this.entries_qbkxv4_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var k = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var v = tmp$ret$1;
      body(k, v);
    }
    return Unit_getInstance();
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta, undefined, [StringValuesBuilder], undefined, undefined, []);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, undefined, [StringValues], undefined, undefined, []);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, undefined, [Comparable], undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Month, 'Month', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Symbol, 'Symbol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($proceedLoopCOROUTINE$1, '$proceedLoopCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, undefined, [CoroutineScope], undefined, undefined, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, undefined, undefined, undefined, undefined, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(StackWalkingFailed, 'StackWalkingFailed', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineStackFrame, 'CoroutineStackFrame', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StackWalkingFailedFrame, 'StackWalkingFailedFrame', objectMeta, undefined, [CoroutineStackFrame, Continuation], undefined, undefined, []);
  setMetadataFor(SuspendFunctionGun$continuation$1, undefined, classMeta, undefined, [Continuation, CoroutineStackFrame], undefined, undefined, []);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, undefined, [Attributes], undefined, undefined, []);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(Logger, 'Logger', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KtorSimpleLogger$1, undefined, classMeta, undefined, [Logger], undefined, undefined, []);
  setMetadataFor(Type, 'Type', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsType, 'JsType', objectMeta, undefined, [Type], undefined, undefined, []);
  //endregion
  function InternalAPI() {
  }
  InternalAPI.prototype.equals = function (other) {
    if (!(other instanceof InternalAPI))
      return false;
    var tmp0_other_with_cast = other instanceof InternalAPI ? other : THROW_CCE();
    return true;
  };
  InternalAPI.prototype.hashCode = function () {
    return 0;
  };
  InternalAPI.prototype.toString = function () {
    return '@io.ktor.util.InternalAPI()';
  };
  function KtorDsl() {
  }
  KtorDsl.prototype.equals = function (other) {
    if (!(other instanceof KtorDsl))
      return false;
    var tmp0_other_with_cast = other instanceof KtorDsl ? other : THROW_CCE();
    return true;
  };
  KtorDsl.prototype.hashCode = function () {
    return 0;
  };
  KtorDsl.prototype.toString = function () {
    return '@io.ktor.util.KtorDsl()';
  };
  function AttributeKey(name) {
    this.name_1 = name;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.name_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  AttributeKey.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  AttributeKey.prototype.toString = function () {
    return 'AttributeKey: ' + this.name_1;
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
    if (!(this.name_1 === other.name_1))
      return false;
    return true;
  };
  AttributeKey.prototype.hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = other.get_allKeys_dton90_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.put_btom12_k$(element instanceof AttributeKey ? element : THROW_CCE(), other.get_ny5huj_k$(element));
    }
  }
  function get_BASE64_INVERSE_ALPHABET() {
    init_properties_Base64_kt_tnw0ut();
    return BASE64_INVERSE_ALPHABET;
  }
  var BASE64_INVERSE_ALPHABET;
  function get_BASE64_ALPHABET() {
    return BASE64_ALPHABET;
  }
  var BASE64_ALPHABET;
  var properties_initialized_Base64_kt_5g824v;
  function init_properties_Base64_kt_tnw0ut() {
    if (properties_initialized_Base64_kt_5g824v) {
    } else {
      properties_initialized_Base64_kt_5g824v = true;
      var tmp = 0;
      var tmp_0 = 256;
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.BASE64_INVERSE_ALPHABET.<anonymous>' call
        var tmp_3 = numberToChar(tmp_2);
        tmp$ret$0 = indexOf$default('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', tmp_3, 0, false, 6, null);
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      BASE64_INVERSE_ALPHABET = tmp_1;
    }
  }
  function toByteArray(_this__u8e3s4, $cont) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $toByteArrayCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes$default(ARGUMENT, 0, 1, null);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.get_content_h02jrk_k$();
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.get_key_18j28a_k$().get_content_h02jrk_k$(), $this$$receiver.get_value_j01efc_k$());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.get_key_18j28a_k$()), $this$$receiver.get_value_j01efc_k$());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.delegate_1 = tmp$ret$0;
  }
  CaseInsensitiveMap.prototype.get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  CaseInsensitiveMap.prototype.containsKey_mw51tt_k$ = function (key) {
    return this.delegate_1.containsKey_wgk31w_k$(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.containsValue_s86b1g_k$ = function (value) {
    return this.delegate_1.containsValue_5viga1_k$(value);
  };
  CaseInsensitiveMap.prototype.containsValue_5viga1_k$ = function (value) {
    if (!isObject(value))
      return false;
    return this.containsValue_s86b1g_k$(isObject(value) ? value : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.get_4u8u51_k$ = function (key) {
    return this.delegate_1.get_1mhr4y_k$(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  CaseInsensitiveMap.prototype.clear_j9y8zo_k$ = function () {
    this.delegate_1.clear_j9y8zo_k$();
  };
  CaseInsensitiveMap.prototype.put_syw8rk_k$ = function (key, value) {
    return this.delegate_1.put_3mhbri_k$(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.put_3mhbri_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_syw8rk_k$(tmp, isObject(value) ? value : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.putAll_mxv3jf_k$ = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = from.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var value = tmp$ret$2;
      this.put_syw8rk_k$(key, value);
    }
  };
  CaseInsensitiveMap.prototype.putAll_mee1c3_k$ = function (from) {
    return this.putAll_mxv3jf_k$(from);
  };
  CaseInsensitiveMap.prototype.remove_kj1003_k$ = function (key) {
    return this.delegate_1.remove_8hbkc0_k$(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.remove_8hbkc0_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.remove_kj1003_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.get_keys_wop4xp_k$ = function () {
    var tmp = this.delegate_1.get_keys_wop4xp_k$();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  CaseInsensitiveMap.prototype.get_entries_p20ztl_k$ = function () {
    var tmp = this.delegate_1.get_entries_p20ztl_k$();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  CaseInsensitiveMap.prototype.get_values_ksazhn_k$ = function () {
    return this.delegate_1.get_values_ksazhn_k$();
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
    return equals(other.delegate_1, this.delegate_1);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.delegate_1);
  };
  function Entry_0(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  Entry_0.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Entry_0.prototype.set_value_1aw66t_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  Entry_0.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Entry_0.prototype.setValue_csn29t_k$ = function (newValue) {
    this.value_1 = newValue;
    return this.value_1;
  };
  Entry_0.prototype.setValue_i0ryyi_k$ = function (newValue) {
    return this.setValue_csn29t_k$((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  Entry_0.prototype.hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.key_1)) | 0) + hashCode(ensureNotNull(this.value_1)) | 0;
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
    return equals(other.get_key_18j28a_k$(), this.key_1) ? equals(other.get_value_j01efc_k$(), this.value_1) : false;
  };
  Entry_0.prototype.toString = function () {
    return '' + this.key_1 + '=' + this.value_1;
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
    return tmp.plus_rgw9wi_k$(tmp$ret$0);
  }
  function SilentSupervisor$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SilentSupervisor(parent);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.handleException_w1h9is_k$ = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  function get_digits() {
    init_properties_Crypto_kt_rgu395();
    return digits;
  }
  var digits;
  var properties_initialized_Crypto_kt_8g5vqb;
  function init_properties_Crypto_kt_rgu395() {
    if (properties_initialized_Crypto_kt_8g5vqb) {
    } else {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_1;
  }
  function _get_convertTo__c5vn9f($this) {
    return $this.convertTo_1;
  }
  function _get_convert__pt3sfy($this) {
    return $this.convert_1;
  }
  function DelegatingMutableSet$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.delegateIterator_1 = this$0.delegate_1.iterator_jk1svi_k$();
  }
  DelegatingMutableSet$iterator$1.prototype.get_delegateIterator_k9fnq4_k$ = function () {
    return this.delegateIterator_1;
  };
  DelegatingMutableSet$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.delegateIterator_1.hasNext_bitz1p_k$();
  };
  DelegatingMutableSet$iterator$1.prototype.next_20eer_k$ = function () {
    return this.this$0__1.convertTo_1(this.delegateIterator_1.next_20eer_k$());
  };
  DelegatingMutableSet$iterator$1.prototype.remove_le47v1_k$ = function () {
    return this.delegateIterator_1.remove_le47v1_k$();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.delegate_1 = delegate;
    this.convertTo_1 = convertTo;
    this.convert_1 = convert;
    this.size_1 = this.delegate_1.get_size_woubt6_k$();
  }
  DelegatingMutableSet.prototype.convert_gqasvn_k$ = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      tmp$ret$0 = this.convert_1(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.convertTo_s3jdax_k$ = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      tmp$ret$0 = this.convertTo_1(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  DelegatingMutableSet.prototype.add_nixf5z_k$ = function (element) {
    return this.delegate_1.add_1j60pz_k$(this.convert_1(element));
  };
  DelegatingMutableSet.prototype.add_1j60pz_k$ = function (element) {
    return this.add_nixf5z_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.addAll_84cfjo_k$ = function (elements) {
    return this.delegate_1.addAll_oxxjjk_k$(this.convert_gqasvn_k$(elements));
  };
  DelegatingMutableSet.prototype.addAll_oxxjjk_k$ = function (elements) {
    return this.addAll_84cfjo_k$(elements);
  };
  DelegatingMutableSet.prototype.clear_j9y8zo_k$ = function () {
    this.delegate_1.clear_j9y8zo_k$();
  };
  DelegatingMutableSet.prototype.remove_l7hpva_k$ = function (element) {
    return this.delegate_1.remove_8hbkc6_k$(this.convert_1(element));
  };
  DelegatingMutableSet.prototype.remove_8hbkc6_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.remove_l7hpva_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.removeAll_3c3xhl_k$ = function (elements) {
    return this.delegate_1.removeAll_99to5v_k$(this.convert_gqasvn_k$(elements));
  };
  DelegatingMutableSet.prototype.removeAll_99to5v_k$ = function (elements) {
    return this.removeAll_3c3xhl_k$(elements);
  };
  DelegatingMutableSet.prototype.retainAll_ob8bqg_k$ = function (elements) {
    return this.delegate_1.retainAll_j44sd0_k$(this.convert_gqasvn_k$(elements));
  };
  DelegatingMutableSet.prototype.retainAll_j44sd0_k$ = function (elements) {
    return this.retainAll_ob8bqg_k$(elements);
  };
  DelegatingMutableSet.prototype.contains_3fuugr_k$ = function (element) {
    return this.delegate_1.contains_2ehdt1_k$(this.convert_1(element));
  };
  DelegatingMutableSet.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.contains_3fuugr_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.containsAll_qy1q42_k$ = function (elements) {
    return this.delegate_1.containsAll_jr3fla_k$(this.convert_gqasvn_k$(elements));
  };
  DelegatingMutableSet.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_qy1q42_k$(elements);
  };
  DelegatingMutableSet.prototype.isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  DelegatingMutableSet.prototype.iterator_jk1svi_k$ = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.delegate_1);
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
    var elements = this.convertTo_s3jdax_k$(this.delegate_1);
    var tmp_0;
    if (other.containsAll_jr3fla_k$(elements)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsAll' call
      var tmp0_containsAll = other;
      tmp$ret$0 = elements.containsAll_jr3fla_k$(tmp0_containsAll);
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return toString_0(this.convertTo_s3jdax_k$(this.delegate_1));
  };
  function StringValuesBuilder() {
  }
  function appendAll(_this__u8e3s4, builder) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = builder.entries_qbkxv4_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var name = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var values = tmp$ret$1;
      _this__u8e3s4.appendAll_a9dln0_k$(name, values);
    }
    tmp$ret$2 = _this__u8e3s4;
    return tmp$ret$2;
  }
  function flattenEntries(_this__u8e3s4) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp1_flatMap = _this__u8e3s4.entries_qbkxv4_k$();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_flatMap.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'io.ktor.util.flattenEntries.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = element.get_value_j01efc_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'io.ktor.util.flattenEntries.<anonymous>.<anonymous>' call
        tmp$ret$0 = to(element.get_key_18j28a_k$(), item);
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
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
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.Empty_1 = StringValuesImpl_init_$Create$(false, null, 3, null);
  }
  Companion.prototype.get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  Companion.prototype.build_3ifsva_k$ = function (caseInsensitiveName, builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringValuesBuilderImpl_init_$Create$(caseInsensitiveName, 0, 2, null);
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function StringValues() {
    Companion_getInstance_0();
  }
  function StringValuesBuilderImpl_init_$Init$(caseInsensitiveName, size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      caseInsensitiveName = false;
    if (!(($mask0 & 2) === 0))
      size = 8;
    StringValuesBuilderImpl.call($this, caseInsensitiveName, size);
    return $this;
  }
  function StringValuesBuilderImpl_init_$Create$(caseInsensitiveName, size, $mask0, $marker) {
    return StringValuesBuilderImpl_init_$Init$(caseInsensitiveName, size, $mask0, $marker, Object.create(StringValuesBuilderImpl.prototype));
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.values_1.get_1mhr4y_k$(name);
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
      $this.validateName_73vxr_k$(name);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.values_1;
      tmp0_set.put_3mhbri_k$(name, tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.appendAll_a9dln0_k$(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl$appendMissing$lambda(this$0) {
    return function (name, values) {
      this$0.appendMissing_4iwztl_k$(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    this.caseInsensitiveName_1 = caseInsensitiveName;
    this.values_1 = this.caseInsensitiveName_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  StringValuesBuilderImpl.prototype.get_caseInsensitiveName_ehooe5_k$ = function () {
    return this.caseInsensitiveName_1;
  };
  StringValuesBuilderImpl.prototype.get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  StringValuesBuilderImpl.prototype.getAll_9rlpue_k$ = function (name) {
    return this.values_1.get_1mhr4y_k$(name);
  };
  StringValuesBuilderImpl.prototype.contains_2gwgo2_k$ = function (name) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.values_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(name);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  StringValuesBuilderImpl.prototype.contains_t8xfkz_k$ = function (name, value) {
    var tmp0_safe_receiver = this.values_1.get_1mhr4y_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_2ehdt1_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  StringValuesBuilderImpl.prototype.names_1q9mbs_k$ = function () {
    return this.values_1.get_keys_wop4xp_k$();
  };
  StringValuesBuilderImpl.prototype.isEmpty_y1axqb_k$ = function () {
    return this.values_1.isEmpty_y1axqb_k$();
  };
  StringValuesBuilderImpl.prototype.entries_qbkxv4_k$ = function () {
    return unmodifiable(this.values_1.get_entries_p20ztl_k$());
  };
  StringValuesBuilderImpl.prototype.set_vj6ab5_k$ = function (name, value) {
    this.validateValue_b0jkyf_k$(value);
    var list = ensureListForKey(this, name);
    list.clear_j9y8zo_k$();
    list.add_1j60pz_k$(value);
  };
  StringValuesBuilderImpl.prototype.get_4u8u51_k$ = function (name) {
    var tmp0_safe_receiver = this.getAll_9rlpue_k$(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesBuilderImpl.prototype.append_ptbgmx_k$ = function (name, value) {
    this.validateValue_b0jkyf_k$(value);
    ensureListForKey(this, name).add_1j60pz_k$(value);
  };
  StringValuesBuilderImpl.prototype.appendAll_4ib0tg_k$ = function (stringValues) {
    stringValues.forEach_arwel4_k$(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  StringValuesBuilderImpl.prototype.appendMissing_nf6jkx_k$ = function (stringValues) {
    stringValues.forEach_arwel4_k$(StringValuesBuilderImpl$appendMissing$lambda(this));
  };
  StringValuesBuilderImpl.prototype.appendAll_a9dln0_k$ = function (name, values) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureListForKey(this, name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_iterator = values.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.validateValue_b0jkyf_k$(element);
      tmp0_let.add_1j60pz_k$(element);
    }
    tmp$ret$0 = Unit_getInstance();
  };
  StringValuesBuilderImpl.prototype.appendMissing_4iwztl_k$ = function (name, values) {
    var tmp0_safe_receiver = this.values_1.get_1mhr4y_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toSet(tmp0_safe_receiver);
    var existing = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = values.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendMissing.<anonymous>' call
      tmp$ret$0 = !existing.contains_2ehdt1_k$(element);
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    this.appendAll_a9dln0_k$(name, tmp$ret$2);
  };
  StringValuesBuilderImpl.prototype.remove_d85afi_k$ = function (name) {
    this.values_1.remove_8hbkc0_k$(name);
  };
  StringValuesBuilderImpl.prototype.removeKeysWithNoEntries_wkfko0_k$ = function () {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.iterator' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = this.values_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = LinkedHashMap_init_$Create$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp1_filter.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.removeKeysWithNoEntries.<anonymous>' call
      tmp$ret$1 = element.get_value_j01efc_k$().isEmpty_y1axqb_k$();
      if (tmp$ret$1) {
        tmp0_filterTo.put_3mhbri_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    var tmp2_iterator = tmp$ret$3;
    tmp$ret$4 = tmp2_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$4;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$5 = tmp1_loop_parameter.get_key_18j28a_k$();
      var k = tmp$ret$5;
      this.remove_d85afi_k$(k);
    }
  };
  StringValuesBuilderImpl.prototype.remove_i8ugn6_k$ = function (name, value) {
    var tmp0_safe_receiver = this.values_1.get_1mhr4y_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_8hbkc6_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  StringValuesBuilderImpl.prototype.clear_j9y8zo_k$ = function () {
    this.values_1.clear_j9y8zo_k$();
  };
  StringValuesBuilderImpl.prototype.build_1k0s4u_k$ = function () {
    return new StringValuesImpl(this.caseInsensitiveName_1, this.values_1);
  };
  StringValuesBuilderImpl.prototype.validateName_73vxr_k$ = function (name) {
  };
  StringValuesBuilderImpl.prototype.validateValue_b0jkyf_k$ = function (value) {
  };
  function StringValuesImpl_init_$Init$(caseInsensitiveName, values, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      caseInsensitiveName = false;
    if (!(($mask0 & 2) === 0))
      values = emptyMap();
    StringValuesImpl.call($this, caseInsensitiveName, values);
    return $this;
  }
  function StringValuesImpl_init_$Create$(caseInsensitiveName, values, $mask0, $marker) {
    return StringValuesImpl_init_$Init$(caseInsensitiveName, values, $mask0, $marker, Object.create(StringValuesImpl.prototype));
  }
  function listForKey($this, name) {
    return $this.values_1.get_1mhr4y_k$(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    this.caseInsensitiveName_1 = caseInsensitiveName;
    var tmp;
    if (this.caseInsensitiveName_1) {
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
    tmp$ret$1 = values.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$1;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$2 = element.get_key_18j28a_k$();
      var key = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$3 = element.get_value_j01efc_k$();
      var value = tmp$ret$3;
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = value.get_size_woubt6_k$();
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
          tmp$ret$4 = value.get_fkrdnv_k$(index);
          list.add_1j60pz_k$(tmp$ret$4);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$5 = list;
      tmp$ret$6 = tmp$ret$5;
      var tmp1_set = tmp$ret$6;
      newMap.put_3mhbri_k$(key, tmp1_set);
    }
    this.values_1 = newMap;
  }
  StringValuesImpl.prototype.get_caseInsensitiveName_ehooe5_k$ = function () {
    return this.caseInsensitiveName_1;
  };
  StringValuesImpl.prototype.get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  StringValuesImpl.prototype.get_4u8u51_k$ = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesImpl.prototype.getAll_9rlpue_k$ = function (name) {
    return listForKey(this, name);
  };
  StringValuesImpl.prototype.contains_2gwgo2_k$ = function (name) {
    return !(listForKey(this, name) == null);
  };
  StringValuesImpl.prototype.contains_t8xfkz_k$ = function (name, value) {
    var tmp0_safe_receiver = listForKey(this, name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_2ehdt1_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  StringValuesImpl.prototype.names_1q9mbs_k$ = function () {
    return unmodifiable(this.values_1.get_keys_wop4xp_k$());
  };
  StringValuesImpl.prototype.isEmpty_y1axqb_k$ = function () {
    return this.values_1.isEmpty_y1axqb_k$();
  };
  StringValuesImpl.prototype.entries_qbkxv4_k$ = function () {
    return unmodifiable(this.values_1.get_entries_p20ztl_k$());
  };
  StringValuesImpl.prototype.forEach_arwel4_k$ = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.values_1;
    tmp$ret$0 = tmp0_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.get_value_j01efc_k$();
      var value = tmp$ret$2;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName_1 + ') ' + this.entries_qbkxv4_k$();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.caseInsensitiveName_1 === other.get_caseInsensitiveName_ehooe5_k$()))
      return false;
    return entriesEquals(this.entries_qbkxv4_k$(), other.entries_qbkxv4_k$());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries_qbkxv4_k$(), imul(31, this.caseInsensitiveName_1 | 0));
  };
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
    var tmp2_buildString = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    tmp1_apply.append_tbojcw_k$(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp1_apply.append_t8oh9e_k$(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    tmp$ret$2 = tmp1_apply;
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
  function _get_hash__d7hhq5($this) {
    return $this.hash_1;
  }
  function CaseInsensitiveString(content) {
    this.content_1 = content;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.content_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    tmp.hash_1 = getStringHashCode(tmp$ret$1);
  }
  CaseInsensitiveString.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.content_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.content_1, true)) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.hash_1;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.content_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function CopyOnWriteHashMap() {
    this.current_1 = atomic$ref$1(emptyMap());
  }
  CopyOnWriteHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (old.get_1mhr4y_k$(key) === value)
        return value;
      var copy = HashMap_init_$Create$(old);
      var replaced = copy.put_3mhbri_k$(key, value);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return replaced;
    }
     while (true);
  };
  CopyOnWriteHashMap.prototype.get_1mhr4y_k$ = function (key) {
    return this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_1mhr4y_k$(key);
  };
  CopyOnWriteHashMap.prototype.set_2x1s24_k$ = function (key, value) {
    this.put_3mhbri_k$(key, value);
  };
  CopyOnWriteHashMap.prototype.remove_8hbkc0_k$ = function (key) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (old.get_1mhr4y_k$(key) == null)
        return null;
      var copy = HashMap_init_$Create$(old);
      var removed = copy.remove_8hbkc0_k$(key);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return removed;
    }
     while (true);
  };
  CopyOnWriteHashMap.prototype.computeIfAbsent_uwu79p_k$ = function (key, producer) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = old.get_1mhr4y_k$(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var copy = HashMap_init_$Create$(old);
      var newValue = producer(key);
      // Inline function 'kotlin.collections.set' call
      copy.put_3mhbri_k$(key, newValue);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return newValue;
    }
     while (true);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.START_1 = GMTDate_0(new Long(0, 0));
  }
  Companion_0.prototype.get_START_igje3d_k$ = function () {
    return this.START_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_1();
    this.seconds_1 = seconds;
    this.minutes_1 = minutes;
    this.hours_1 = hours;
    this.dayOfWeek_1 = dayOfWeek;
    this.dayOfMonth_1 = dayOfMonth;
    this.dayOfYear_1 = dayOfYear;
    this.month_1 = month;
    this.year_1 = year;
    this.timestamp_1 = timestamp;
  }
  GMTDate.prototype.get_seconds_xuhyfq_k$ = function () {
    return this.seconds_1;
  };
  GMTDate.prototype.get_minutes_ivkhkm_k$ = function () {
    return this.minutes_1;
  };
  GMTDate.prototype.get_hours_islejq_k$ = function () {
    return this.hours_1;
  };
  GMTDate.prototype.get_dayOfWeek_3kfgci_k$ = function () {
    return this.dayOfWeek_1;
  };
  GMTDate.prototype.get_dayOfMonth_vblo3a_k$ = function () {
    return this.dayOfMonth_1;
  };
  GMTDate.prototype.get_dayOfYear_3ke6gp_k$ = function () {
    return this.dayOfYear_1;
  };
  GMTDate.prototype.get_month_ivc8d3_k$ = function () {
    return this.month_1;
  };
  GMTDate.prototype.get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  GMTDate.prototype.get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  GMTDate.prototype.compareTo_bxxc9b_k$ = function (other) {
    return this.timestamp_1.compareTo_n4fqi2_k$(other.timestamp_1);
  };
  GMTDate.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_bxxc9b_k$(other instanceof GMTDate ? other : THROW_CCE());
  };
  GMTDate.prototype.component1_7eebsc_k$ = function () {
    return this.seconds_1;
  };
  GMTDate.prototype.component2_7eebsb_k$ = function () {
    return this.minutes_1;
  };
  GMTDate.prototype.component3_7eebsa_k$ = function () {
    return this.hours_1;
  };
  GMTDate.prototype.component4_7eebs9_k$ = function () {
    return this.dayOfWeek_1;
  };
  GMTDate.prototype.component5_7eebs8_k$ = function () {
    return this.dayOfMonth_1;
  };
  GMTDate.prototype.component6_7eebs7_k$ = function () {
    return this.dayOfYear_1;
  };
  GMTDate.prototype.component7_7eebs6_k$ = function () {
    return this.month_1;
  };
  GMTDate.prototype.component8_7eebs5_k$ = function () {
    return this.year_1;
  };
  GMTDate.prototype.component9_7eebs4_k$ = function () {
    return this.timestamp_1;
  };
  GMTDate.prototype.copy_2irmzz_k$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    return new GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp);
  };
  GMTDate.prototype.copy$default_ttghg2_k$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      seconds = this.seconds_1;
    if (!(($mask0 & 2) === 0))
      minutes = this.minutes_1;
    if (!(($mask0 & 4) === 0))
      hours = this.hours_1;
    if (!(($mask0 & 8) === 0))
      dayOfWeek = this.dayOfWeek_1;
    if (!(($mask0 & 16) === 0))
      dayOfMonth = this.dayOfMonth_1;
    if (!(($mask0 & 32) === 0))
      dayOfYear = this.dayOfYear_1;
    if (!(($mask0 & 64) === 0))
      month = this.month_1;
    if (!(($mask0 & 128) === 0))
      year = this.year_1;
    if (!(($mask0 & 256) === 0))
      timestamp = this.timestamp_1;
    return this.copy_2irmzz_k$(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp);
  };
  GMTDate.prototype.toString = function () {
    return 'GMTDate(seconds=' + this.seconds_1 + ', minutes=' + this.minutes_1 + ', hours=' + this.hours_1 + ', dayOfWeek=' + this.dayOfWeek_1 + ', dayOfMonth=' + this.dayOfMonth_1 + ', dayOfYear=' + this.dayOfYear_1 + ', month=' + this.month_1 + ', year=' + this.year_1 + ', timestamp=' + toString_0(this.timestamp_1) + ')';
  };
  GMTDate.prototype.hashCode = function () {
    var result = this.seconds_1;
    result = imul(result, 31) + this.minutes_1 | 0;
    result = imul(result, 31) + this.hours_1 | 0;
    result = imul(result, 31) + this.dayOfWeek_1.hashCode() | 0;
    result = imul(result, 31) + this.dayOfMonth_1 | 0;
    result = imul(result, 31) + this.dayOfYear_1 | 0;
    result = imul(result, 31) + this.month_1.hashCode() | 0;
    result = imul(result, 31) + this.year_1 | 0;
    result = imul(result, 31) + this.timestamp_1.hashCode() | 0;
    return result;
  };
  GMTDate.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.seconds_1 === tmp0_other_with_cast.seconds_1))
      return false;
    if (!(this.minutes_1 === tmp0_other_with_cast.minutes_1))
      return false;
    if (!(this.hours_1 === tmp0_other_with_cast.hours_1))
      return false;
    if (!this.dayOfWeek_1.equals(tmp0_other_with_cast.dayOfWeek_1))
      return false;
    if (!(this.dayOfMonth_1 === tmp0_other_with_cast.dayOfMonth_1))
      return false;
    if (!(this.dayOfYear_1 === tmp0_other_with_cast.dayOfYear_1))
      return false;
    if (!this.month_1.equals(tmp0_other_with_cast.month_1))
      return false;
    if (!(this.year_1 === tmp0_other_with_cast.year_1))
      return false;
    if (!this.timestamp_1.equals(tmp0_other_with_cast.timestamp_1))
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
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.from_btzjl5_k$ = function (ordinal) {
    return values()[ordinal];
  };
  Companion_1.prototype.from_ev2bjd_k$ = function (value) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = values();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = tmp0_find;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.date.Companion.from.<anonymous>' call
        tmp$ret$0 = element.value_1 === value;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_error = 'Invalid day of week: ' + value;
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    WeekDay_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MONDAY':
        return WeekDay_MONDAY_getInstance();
      case 'TUESDAY':
        return WeekDay_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return WeekDay_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return WeekDay_THURSDAY_getInstance();
      case 'FRIDAY':
        return WeekDay_FRIDAY_getInstance();
      case 'SATURDAY':
        return WeekDay_SATURDAY_getInstance();
      case 'SUNDAY':
        return WeekDay_SUNDAY_getInstance();
      default:
        WeekDay_initEntries();
        THROW_ISE();
        break;
    }
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
    Companion_getInstance_2();
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  WeekDay.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
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
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.from_btzjl5_k$ = function (ordinal) {
    return values_0()[ordinal];
  };
  Companion_2.prototype.from_ev2bjd_k$ = function (value) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = values_0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = tmp0_find;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.date.Companion.from.<anonymous>' call
        tmp$ret$0 = element.value_1 === value;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_error = 'Invalid month: ' + value;
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    Month_initEntries();
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_ISE();
        break;
    }
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
    Companion_getInstance_3();
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  Month.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
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
  function get_CONDITION_FALSE() {
    init_properties_LockFreeLinkedList_kt_xkrxlg();
    return CONDITION_FALSE;
  }
  var CONDITION_FALSE;
  function get_ALREADY_REMOVED() {
    init_properties_LockFreeLinkedList_kt_xkrxlg();
    return ALREADY_REMOVED;
  }
  var ALREADY_REMOVED;
  function get_LIST_EMPTY() {
    init_properties_LockFreeLinkedList_kt_xkrxlg();
    return LIST_EMPTY;
  }
  var LIST_EMPTY;
  function get_REMOVE_PREPARED() {
    init_properties_LockFreeLinkedList_kt_xkrxlg();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  function get_NO_DECISION() {
    init_properties_LockFreeLinkedList_kt_xkrxlg();
    return NO_DECISION;
  }
  var NO_DECISION;
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  Symbol.prototype.get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  Symbol.prototype.toString = function () {
    return this.symbol_1;
  };
  var properties_initialized_LockFreeLinkedList_kt_lnmdgw;
  function init_properties_LockFreeLinkedList_kt_xkrxlg() {
    if (properties_initialized_LockFreeLinkedList_kt_lnmdgw) {
    } else {
      properties_initialized_LockFreeLinkedList_kt_lnmdgw = true;
      CONDITION_FALSE = new Symbol('CONDITION_FALSE');
      ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
      LIST_EMPTY = new Symbol('LIST_EMPTY');
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function proceedLoop($this, $cont) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $proceedLoopCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.index0__1 = this._this__u8e3s4__1.index_1;
            if (this.index0__1 === -1) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            this.interceptors1__1 = this._this__u8e3s4__1.interceptors_1;
            if (this.index0__1 >= this.interceptors1__1.get_size_woubt6_k$()) {
              this._this__u8e3s4__1.finish_mgihxe_k$();
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            this.executeInterceptor2__1 = this.interceptors1__1.get_fkrdnv_k$(this.index0__1);
            this._this__u8e3s4__1.index_1 = this.index0__1 + 1 | 0;
            this.set_state_a96kl8_k$(4);
            var tmp_0 = this.executeInterceptor2__1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this._this__u8e3s4__1, this._this__u8e3s4__1.subject_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return this._this__u8e3s4__1.subject_1;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.interceptors_1 = interceptors;
    this.coroutineContext_1 = coroutineContext;
    this.subject_1 = subject;
    this.index_1 = 0;
  }
  DebugPipelineContext.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  DebugPipelineContext.prototype.set_subject_r07meh_k$ = function (_set____db54di) {
    this.subject_1 = _set____db54di;
  };
  DebugPipelineContext.prototype.get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  DebugPipelineContext.prototype.finish_mgihxe_k$ = function () {
    this.index_1 = -1;
  };
  DebugPipelineContext.prototype.proceedWith_slnzfn_k$ = function (subject, $cont) {
    this.subject_1 = subject;
    return this.proceed_7g1848_k$($cont);
  };
  DebugPipelineContext.prototype.proceed_7g1848_k$ = function ($cont) {
    var index = this.index_1;
    if (index < 0)
      return this.subject_1;
    if (index >= this.interceptors_1.get_size_woubt6_k$()) {
      this.finish_mgihxe_k$();
      return this.subject_1;
    }
    return proceedLoop(this, $cont);
  };
  DebugPipelineContext.prototype.execute_kr9z5o_k$ = function (initial, $cont) {
    this.index_1 = 0;
    this.subject_1 = initial;
    return this.proceed_7g1848_k$($cont);
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    $this.interceptors_1 = _set____db54di;
  }
  function _get_interceptors__h4min7_0($this) {
    return $this.interceptors_1;
  }
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_4().SharedArrayList_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_4().SharedArrayList_1.isEmpty_y1axqb_k$();
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
    $this.interceptors_1 = $this.copiedInterceptors_t6sa3y_k$();
    $this.shared_1 = false;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.SharedArrayList_1 = tmp$ret$0;
  }
  Companion_3.prototype.get_SharedArrayList_vqimaf_k$ = function () {
    return this.SharedArrayList_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_4();
    this.phase_1 = phase;
    this.relation_1 = relation;
    this.interceptors_1 = interceptors;
    this.shared_1 = true;
  }
  PhaseContent.prototype.get_phase_iwuvki_k$ = function () {
    return this.phase_1;
  };
  PhaseContent.prototype.get_relation_u22tol_k$ = function () {
    return this.relation_1;
  };
  PhaseContent.prototype.set_shared_v5cvk7_k$ = function (_set____db54di) {
    this.shared_1 = _set____db54di;
  };
  PhaseContent.prototype.get_shared_jgtlda_k$ = function () {
    return this.shared_1;
  };
  PhaseContent.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.interceptors_1.isEmpty_y1axqb_k$();
  };
  PhaseContent.prototype.get_size_woubt6_k$ = function () {
    return this.interceptors_1.get_size_woubt6_k$();
  };
  PhaseContent.prototype.addInterceptor_xxtyyr_k$ = function (interceptor) {
    if (this.shared_1) {
      copyInterceptors(this);
    }
    this.interceptors_1.add_1j60pz_k$(interceptor);
  };
  PhaseContent.prototype.addTo_elyi0x_k$ = function (destination) {
    var interceptors = this.interceptors_1;
    if (destination instanceof ArrayList) {
      destination.ensureCapacity_ignus8_k$(destination.get_size_woubt6_k$() + interceptors.get_size_woubt6_k$() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.add_1j60pz_k$(interceptors.get_fkrdnv_k$(index));
      }
       while (inductionVariable < last);
  };
  PhaseContent.prototype.addTo_b8pbac_k$ = function (destination) {
    if (this.get_isEmpty_zauvru_k$())
      return Unit_getInstance();
    if (destination.get_isEmpty_zauvru_k$()) {
      destination.interceptors_1 = this.sharedInterceptors_rmg8b1_k$();
      destination.shared_1 = true;
      return Unit_getInstance();
    }
    if (destination.shared_1) {
      copyInterceptors(destination);
    }
    this.addTo_elyi0x_k$(destination.interceptors_1);
  };
  PhaseContent.prototype.sharedInterceptors_rmg8b1_k$ = function () {
    this.shared_1 = true;
    return this.interceptors_1;
  };
  PhaseContent.prototype.copiedInterceptors_t6sa3y_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    tmp0_apply.addAll_oxxjjk_k$(this.interceptors_1);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  };
  PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.phase_1.get_name_woqyms_k$() + '`, ' + this.get_size_woubt6_k$() + ' handlers';
  };
  function _get_phasesRaw__qhc95r($this) {
    return $this.phasesRaw_1;
  }
  function _set_interceptorsQuantity__wbahq($this, _set____db54di) {
    $this.interceptorsQuantity_1 = _set____db54di;
  }
  function _get_interceptorsQuantity__d1rdim($this) {
    return $this.interceptorsQuantity_1;
  }
  function _get__interceptors__h3evks($this) {
    return $this._interceptors_1;
  }
  function _set_interceptors__wod97b_0($this, value) {
    $this._interceptors_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  }
  function _get_interceptors__h4min7_1($this) {
    return $this._interceptors_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _set_interceptorsListShared__d5l722($this, _set____db54di) {
    $this.interceptorsListShared_1 = _set____db54di;
  }
  function _get_interceptorsListShared__93i9dm($this) {
    return $this.interceptorsListShared_1;
  }
  function _set_interceptorsListSharedPhase__tmqge3($this, _set____db54di) {
    $this.interceptorsListSharedPhase_1 = _set____db54di;
  }
  function _get_interceptorsListSharedPhase__2d8553($this) {
    return $this.interceptorsListSharedPhase_1;
  }
  function Pipeline_init_$Init$(phase, interceptors, $this) {
    Pipeline.call($this, [phase]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = interceptors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.pipeline.Pipeline.<init>.<anonymous>' call
      $this.intercept_hnj3e1_k$(phase, element);
    }
    return $this;
  }
  function Pipeline_init_$Create$(phase, interceptors) {
    return Pipeline_init_$Init$(phase, interceptors, Object.create(Pipeline.prototype));
  }
  function mergeInterceptors($this, from) {
    if ($this.interceptorsQuantity_1 === 0) {
      setInterceptorsListFromAnotherPipeline($this, from);
    } else {
      resetInterceptorsList($this);
    }
    var fromPhases = from.phasesRaw_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = fromPhases.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.pipeline.Pipeline.mergeInterceptors.<anonymous>' call
      var tmp0_elvis_lhs = element instanceof PipelinePhase ? element : null;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp = (element instanceof PhaseContent ? element : THROW_CCE()).get_phase_iwuvki_k$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var fromPhase = tmp;
      var tmp_0;
      if (element instanceof PhaseContent) {
        tmp_0 = !element.get_isEmpty_zauvru_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        if (element instanceof PhaseContent)
          element;
        else
          THROW_CCE();
        element.addTo_b8pbac_k$(ensureNotNull(findPhase($this, fromPhase)));
        var tmp1_this = $this;
        tmp1_this.interceptorsQuantity_1 = tmp1_this.interceptorsQuantity_1 + element.get_size_woubt6_k$() | 0;
      }
    }
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.get_developmentMode_eqiro5_k$());
  }
  function findPhase($this, phase) {
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_fkrdnv_k$(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.set_meu351_k$(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.get_phase_iwuvki_k$() === phase;
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
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_fkrdnv_k$(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.get_phase_iwuvki_k$() === phase;
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
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_fkrdnv_k$(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.get_phase_iwuvki_k$() === phase;
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
    var interceptorsQuantity = $this.interceptorsQuantity_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.phasesRaw_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.get_fkrdnv_k$(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.get_isEmpty_zauvru_k$())
            continue $l$loop_0;
          var interceptors = phaseContent.sharedInterceptors_rmg8b1_k$();
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
        var tmp_1 = phases.get_fkrdnv_k$(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.addTo_elyi0x_k$(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function fastPathMerge($this, from) {
    if (from.phasesRaw_1.isEmpty_y1axqb_k$()) {
      return true;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.phasesRaw_1;
    tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      return false;
    }
    var fromPhases = from.phasesRaw_1;
    var inductionVariable = 0;
    var last = get_lastIndex_0(fromPhases);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromPhaseOrContent = fromPhases.get_fkrdnv_k$(index);
        if (fromPhaseOrContent instanceof PipelinePhase) {
          $this.phasesRaw_1.add_1j60pz_k$(fromPhaseOrContent);
          continue $l$loop_0;
        }
        if (!(fromPhaseOrContent instanceof PhaseContent)) {
          continue $l$loop_0;
        }
        if (fromPhaseOrContent instanceof PhaseContent)
          fromPhaseOrContent;
        else
          THROW_CCE();
        $this.phasesRaw_1.add_1j60pz_k$(new PhaseContent(fromPhaseOrContent.get_phase_iwuvki_k$(), fromPhaseOrContent.get_relation_u22tol_k$(), fromPhaseOrContent.sharedInterceptors_rmg8b1_k$()));
        continue $l$loop_0;
      }
       while (!(index === last));
    var tmp1_this = $this;
    tmp1_this.interceptorsQuantity_1 = tmp1_this.interceptorsQuantity_1 + from.interceptorsQuantity_1 | 0;
    setInterceptorsListFromAnotherPipeline($this, from);
    return true;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7_1($this) == null) {
      cacheInterceptors($this);
    }
    $this.interceptorsListShared_1 = true;
    return ensureNotNull(_get_interceptors__h4min7_1($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b_0($this, null);
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b_0($this, list);
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b_0($this, phaseContent.sharedInterceptors_rmg8b1_k$());
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = phaseContent.get_phase_iwuvki_k$();
  }
  function setInterceptorsListFromAnotherPipeline($this, pipeline) {
    _set_interceptors__wod97b_0($this, sharedInterceptorsList(pipeline));
    $this.interceptorsListShared_1 = true;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7_1($this);
    if ($this.phasesRaw_1.isEmpty_y1axqb_k$() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.interceptorsListShared_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.interceptorsListSharedPhase_1, phase)) {
      currentInterceptors.add_1j60pz_k$(block);
      return true;
    }
    if (equals(phase, last($this.phasesRaw_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.phasesRaw_1)) {
      ensureNotNull(findPhase($this, phase)).addInterceptor_xxtyyr_k$(block);
      currentInterceptors.add_1j60pz_k$(block);
      return true;
    }
    return false;
  }
  function insertRelativePhase($this, fromPhaseOrContent, fromPhase) {
    var tmp;
    if (fromPhaseOrContent === fromPhase) {
      tmp = Last_getInstance();
    } else {
      tmp = (fromPhaseOrContent instanceof PhaseContent ? fromPhaseOrContent : THROW_CCE()).get_relation_u22tol_k$();
    }
    var fromPhaseRelation = tmp;
    if (fromPhaseRelation instanceof Last) {
      $this.addPhase_safxef_k$(fromPhase);
    } else {
      var tmp_0;
      if (fromPhaseRelation instanceof Before) {
        tmp_0 = hasPhase($this, fromPhaseRelation.get_relativeTo_o3bmds_k$());
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $this.insertPhaseBefore_mtrcmo_k$(fromPhaseRelation.get_relativeTo_o3bmds_k$(), fromPhase);
      } else {
        if (fromPhaseRelation instanceof After) {
          $this.insertPhaseAfter_v4shih_k$(fromPhaseRelation.get_relativeTo_o3bmds_k$(), fromPhase);
        } else {
          return false;
        }
      }
    }
    return true;
  }
  function Pipeline(phases) {
    this.attributes_1 = Attributes_0(true);
    this.developmentMode_1 = false;
    this.phasesRaw_1 = mutableListOf(phases.slice());
    this.interceptorsQuantity_1 = 0;
    this._interceptors_1 = atomic$ref$1(null);
    this.interceptorsListShared_1 = false;
    this.interceptorsListSharedPhase_1 = null;
  }
  Pipeline.prototype.get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  Pipeline.prototype.get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_1;
  };
  Pipeline.prototype.get_items_it823b_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.phasesRaw_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.pipeline.Pipeline.<get-items>.<anonymous>' call
      var tmp1_elvis_lhs = item instanceof PipelinePhase ? item : null;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        var tmp0_safe_receiver = item instanceof PhaseContent ? item : null;
        tmp = ensureNotNull(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_phase_iwuvki_k$());
      } else {
        tmp = tmp1_elvis_lhs;
      }
      tmp$ret$0 = tmp;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Pipeline.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.interceptorsQuantity_1 === 0;
  };
  Pipeline.prototype.execute_av1190_k$ = function (context, subject, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.get_context_h02k06_k$();
    return createContext(this, context, subject, tmp$ret$0).execute_kr9z5o_k$(subject, $cont);
  };
  Pipeline.prototype.addPhase_safxef_k$ = function (phase) {
    if (hasPhase(this, phase)) {
      return Unit_getInstance();
    }
    this.phasesRaw_1.add_1j60pz_k$(phase);
  };
  Pipeline.prototype.insertPhaseAfter_v4shih_k$ = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.phasesRaw_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.phasesRaw_1.get_fkrdnv_k$(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_relation_u22tol_k$();
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_relativeTo_o3bmds_k$();
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
    this.phasesRaw_1.add_ydlf05_k$(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  Pipeline.prototype.insertPhaseBefore_mtrcmo_k$ = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.phasesRaw_1.add_ydlf05_k$(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  Pipeline.prototype.intercept_hnj3e1_k$ = function (phase, block) {
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
      var tmp2 = tmp1_this.interceptorsQuantity_1;
      tmp1_this.interceptorsQuantity_1 = tmp2 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.addInterceptor_xxtyyr_k$(block);
    var tmp3_this = this;
    var tmp4 = tmp3_this.interceptorsQuantity_1;
    tmp3_this.interceptorsQuantity_1 = tmp4 + 1 | 0;
    resetInterceptorsList(this);
    this.afterIntercepted_wfopw4_k$();
  };
  Pipeline.prototype.afterIntercepted_wfopw4_k$ = function () {
  };
  Pipeline.prototype.interceptorsForPhase_thlg9s_k$ = function (phase) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp1_filterIsInstance = this.phasesRaw_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$_0();
      var tmp0_iterator = tmp1_filterIsInstance.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        if (element instanceof PhaseContent) {
          tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
        }
      }
      tmp$ret$0 = tmp0_filterIsInstanceTo;
      tmp$ret$1 = tmp$ret$0;
      var tmp2_firstOrNull = tmp$ret$1;
      var tmp0_iterator_0 = tmp2_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'io.ktor.util.pipeline.Pipeline.interceptorsForPhase.<anonymous>' call
        tmp$ret$2 = equals(element_0.get_phase_iwuvki_k$(), phase);
        if (tmp$ret$2) {
          tmp$ret$3 = element_0;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sharedInterceptors_rmg8b1_k$();
    var tmp1_elvis_lhs = (tmp == null ? true : isInterface(tmp, List)) ? tmp : THROW_CCE();
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  Pipeline.prototype.mergePhases_9ldwy7_k$ = function (from) {
    var fromPhases = from.phasesRaw_1;
    var toInsert = toMutableList(fromPhases);
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !toInsert.isEmpty_y1axqb_k$();
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var iterator = toInsert.iterator_jk1svi_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        var fromPhaseOrContent = iterator.next_20eer_k$();
        var tmp0_elvis_lhs = fromPhaseOrContent instanceof PipelinePhase ? fromPhaseOrContent : null;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          tmp = (fromPhaseOrContent instanceof PhaseContent ? fromPhaseOrContent : THROW_CCE()).get_phase_iwuvki_k$();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var fromPhase = tmp;
        if (hasPhase(this, fromPhase)) {
          iterator.remove_le47v1_k$();
        } else {
          var inserted = insertRelativePhase(this, fromPhaseOrContent, fromPhase);
          if (inserted) {
            iterator.remove_le47v1_k$();
          }
        }
      }
    }
  };
  Pipeline.prototype.merge_sslh93_k$ = function (from) {
    if (fastPathMerge(this, from)) {
      return Unit_getInstance();
    }
    this.mergePhases_9ldwy7_k$(from);
    mergeInterceptors(this, from);
  };
  Pipeline.prototype.resetFrom_hoxdu0_k$ = function (from) {
    this.phasesRaw_1.clear_j9y8zo_k$();
    // Inline function 'kotlin.check' call
    var tmp0_check = this.interceptorsQuantity_1 === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    fastPathMerge(this, from);
  };
  Pipeline.prototype.phaseInterceptors_2wllt5_k$ = function (phase) {
    var tmp0_safe_receiver = findPhase(this, phase);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sharedInterceptors_rmg8b1_k$();
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  Pipeline.prototype.interceptorsForTests_ygi3ty_k$ = function () {
    var tmp0_elvis_lhs = _get_interceptors__h4min7_1(this);
    return tmp0_elvis_lhs == null ? cacheInterceptors(this) : tmp0_elvis_lhs;
  };
  function PipelineContext(context) {
    this.context_1 = context;
  }
  PipelineContext.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function pipelineContextFor$default(context, interceptors, subject, coroutineContext, debugMode, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      debugMode = false;
    return pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode);
  }
  function PipelinePhase(name) {
    this.name_1 = name;
  }
  PipelinePhase.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.name_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo_1 = relativeTo;
  }
  After.prototype.get_relativeTo_o3bmds_k$ = function () {
    return this.relativeTo_1;
  };
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo_1 = relativeTo;
  }
  Before.prototype.get_relativeTo_o3bmds_k$ = function () {
    return this.relativeTo_1;
  };
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
  function StackWalkingFailed() {
    StackWalkingFailed_instance = this;
  }
  StackWalkingFailed.prototype.failedToCaptureStackFrame_fb449u_k$ = function () {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Failed to capture stack frame. This is usually happens when a coroutine is running so the frame stack is changing quickly and the coroutine debug agent is unable to capture it concurrently. You may retry running your test to see this particular trace.';
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  };
  var StackWalkingFailed_instance;
  function StackWalkingFailed_getInstance() {
    if (StackWalkingFailed_instance == null)
      new StackWalkingFailed();
    return StackWalkingFailed_instance;
  }
  function StackWalkingFailed$failedToCaptureStackFrame$ref($boundThis) {
    var l = function () {
      $boundThis.failedToCaptureStackFrame_fb449u_k$();
      return Unit_getInstance();
    };
    l.callableName = 'failedToCaptureStackFrame';
    return l;
  }
  function StackWalkingFailedFrame() {
    StackWalkingFailedFrame_instance = this;
  }
  StackWalkingFailedFrame.prototype.get_callerFrame_pfdb95_k$ = function () {
    return null;
  };
  StackWalkingFailedFrame.prototype.getStackTraceElement_um8m53_k$ = function () {
    var tmp = getKClass(StackWalkingFailed);
    return createStackTraceElement(tmp, StackWalkingFailed$failedToCaptureStackFrame$ref(StackWalkingFailed_getInstance()).callableName, 'StackWalkingFailed.kt', 8);
  };
  StackWalkingFailedFrame.prototype.get_context_h02k06_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  StackWalkingFailedFrame.prototype.resumeWith_hh4znz_k$ = function (result) {
    StackWalkingFailed_getInstance().failedToCaptureStackFrame_fb449u_k$();
  };
  StackWalkingFailedFrame.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_hh4znz_k$(result);
  };
  var StackWalkingFailedFrame_instance;
  function StackWalkingFailedFrame_getInstance() {
    if (StackWalkingFailedFrame_instance == null)
      new StackWalkingFailedFrame();
    return StackWalkingFailedFrame_instance;
  }
  function peekContinuation($this) {
    if ($this.currentIndex_1 === IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())
      $this.currentIndex_1 = $this.this$0__1.lastSuspensionIndex_1;
    if ($this.currentIndex_1 < 0) {
      $this.currentIndex_1 = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
      return null;
    }
    try {
      var tmp0_elvis_lhs = $this.this$0__1.suspensions_1[$this.currentIndex_1];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return StackWalkingFailedFrame_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var result = tmp;
      var tmp1_this = $this;
      tmp1_this.currentIndex_1 = tmp1_this.currentIndex_1 - 1 | 0;
      return result;
    } catch ($p) {
      if ($p instanceof Error) {
        return StackWalkingFailedFrame_getInstance();
      } else {
        throw $p;
      }
    }
  }
  function _get_blocks__xl8szf($this) {
    return $this.blocks_1;
  }
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function _get_suspensions__1l4o5($this) {
    return $this.suspensions_1;
  }
  function _set_lastSuspensionIndex__mqpay($this, _set____db54di) {
    $this.lastSuspensionIndex_1 = _set____db54di;
  }
  function _get_lastSuspensionIndex__cnzjle($this) {
    return $this.lastSuspensionIndex_1;
  }
  function _set_index__fyfqnn_0($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.index_1;
      if (currentIndex === $this.blocks_1.get_size_woubt6_k$()) {
        if (!direct) {
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          var tmp1_success = $this.subject_1;
          tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_success);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.index_1 = currentIndex + 1 | 0;
      var next = $this.blocks_1.get_fkrdnv_k$(currentIndex);
      try {
        var result = next($this, $this.subject_1, $this.continuation_1);
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
    if ($this.lastSuspensionIndex_1 < 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    }
    var next = ensureNotNull($this.suspensions_1[$this.lastSuspensionIndex_1]);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.lastSuspensionIndex_1;
    tmp0_this.lastSuspensionIndex_1 = tmp1 - 1 | 0;
    $this.suspensions_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.resumeWith_s3a3yh_k$(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.lastSuspensionIndex_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp0_this = $this;
    var tmp1 = tmp0_this.lastSuspensionIndex_1;
    tmp0_this.lastSuspensionIndex_1 = tmp1 - 1 | 0;
    $this.suspensions_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    var tmp0_this = $this;
    tmp0_this.lastSuspensionIndex_1 = tmp0_this.lastSuspensionIndex_1 + 1 | 0;
    $this.suspensions_1[tmp0_this.lastSuspensionIndex_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.this$0__1 = this$0;
    this.currentIndex_1 = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
  }
  SuspendFunctionGun$continuation$1.prototype.get_callerFrame_pfdb95_k$ = function () {
    var tmp = peekContinuation(this);
    return (!(tmp == null) ? isInterface(tmp, CoroutineStackFrame) : false) ? tmp : null;
  };
  SuspendFunctionGun$continuation$1.prototype.set_currentIndex_8vvviy_k$ = function (_set____db54di) {
    this.currentIndex_1 = _set____db54di;
  };
  SuspendFunctionGun$continuation$1.prototype.get_currentIndex_shwroi_k$ = function () {
    return this.currentIndex_1;
  };
  SuspendFunctionGun$continuation$1.prototype.getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  SuspendFunctionGun$continuation$1.prototype.get_context_h02k06_k$ = function () {
    var tmp0_safe_receiver = this.this$0__1.suspensions_1[this.this$0__1.lastSuspensionIndex_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_context_h02k06_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Not started');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  SuspendFunctionGun$continuation$1.prototype.resumeWith_k14j9i_k$ = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      resumeRootWith(this.this$0__1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.this$0__1, false);
  };
  SuspendFunctionGun$continuation$1.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_k14j9i_k$(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.blocks_1 = blocks;
    var tmp = this;
    tmp.continuation_1 = new SuspendFunctionGun$continuation$1(this);
    this.subject_1 = initial;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.blocks_1.get_size_woubt6_k$();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_0.suspensions_1 = tmp$ret$0;
    this.lastSuspensionIndex_1 = -1;
    this.index_1 = 0;
  }
  SuspendFunctionGun.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  SuspendFunctionGun.prototype.set_subject_r07meh_k$ = function (_set____db54di) {
    this.subject_1 = _set____db54di;
  };
  SuspendFunctionGun.prototype.get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  SuspendFunctionGun.prototype.finish_mgihxe_k$ = function () {
    this.index_1 = this.blocks_1.get_size_woubt6_k$();
  };
  SuspendFunctionGun.prototype.proceed_7g1848_k$ = function ($cont) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      if (this.index_1 === this.blocks_1.get_size_woubt6_k$()) {
        tmp$ret$0 = this.subject_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted(tmp0__anonymous__q1qw7t));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.subject_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  SuspendFunctionGun.prototype.proceedWith_slnzfn_k$ = function (subject, $cont) {
    this.subject_1 = subject;
    return this.proceed_7g1848_k$($cont);
  };
  SuspendFunctionGun.prototype.execute_kr9z5o_k$ = function (initial, $cont) {
    this.index_1 = 0;
    if (this.index_1 === this.blocks_1.get_size_woubt6_k$())
      return initial;
    this.subject_1 = initial;
    if (this.lastSuspensionIndex_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.proceed_7g1848_k$($cont);
  };
  function TypeInfo_init_$Init$(type, reifiedType, kotlinType, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      kotlinType = null;
    TypeInfo.call($this, type, reifiedType, kotlinType);
    return $this;
  }
  function TypeInfo_init_$Create$(type, reifiedType, kotlinType, $mask0, $marker) {
    return TypeInfo_init_$Init$(type, reifiedType, kotlinType, $mask0, $marker, Object.create(TypeInfo.prototype));
  }
  function TypeInfo(type, reifiedType, kotlinType) {
    this.type_1 = type;
    this.reifiedType_1 = reifiedType;
    this.kotlinType_1 = kotlinType;
  }
  TypeInfo.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  TypeInfo.prototype.get_reifiedType_xlupm1_k$ = function () {
    return this.reifiedType_1;
  };
  TypeInfo.prototype.get_kotlinType_flgmsk_k$ = function () {
    return this.kotlinType_1;
  };
  TypeInfo.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  TypeInfo.prototype.component2_7eebsb_k$ = function () {
    return this.reifiedType_1;
  };
  TypeInfo.prototype.component3_7eebsa_k$ = function () {
    return this.kotlinType_1;
  };
  TypeInfo.prototype.copy_gu69mi_k$ = function (type, reifiedType, kotlinType) {
    return new TypeInfo(type, reifiedType, kotlinType);
  };
  TypeInfo.prototype.copy$default_ngwnav_k$ = function (type, reifiedType, kotlinType, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    if (!(($mask0 & 2) === 0))
      reifiedType = this.reifiedType_1;
    if (!(($mask0 & 4) === 0))
      kotlinType = this.kotlinType_1;
    return this.copy_gu69mi_k$(type, reifiedType, kotlinType);
  };
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + this.type_1 + ', reifiedType=' + this.reifiedType_1 + ', kotlinType=' + this.kotlinType_1 + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(result, 31) + hashCode(this.reifiedType_1) | 0;
    result = imul(result, 31) + (this.kotlinType_1 == null ? 0 : hashCode(this.kotlinType_1)) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.reifiedType_1, tmp0_other_with_cast.reifiedType_1))
      return false;
    if (!equals(this.kotlinType_1, tmp0_other_with_cast.kotlinType_1))
      return false;
    return true;
  };
  function AttributesJsFn(concurrent) {
    return Attributes_0(concurrent === void 1 ? false : concurrent);
  }
  function Attributes_0(concurrent) {
    return new AttributesJs();
  }
  function Attributes$default(concurrent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      concurrent = false;
    return Attributes_0(concurrent);
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.map_1 = tmp$ret$0;
  }
  AttributesJs.prototype.getOrNull_gb0h81_k$ = function (key) {
    var tmp = this.map_1.get_1mhr4y_k$(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  AttributesJs.prototype.contains_z4wlmt_k$ = function (key) {
    return this.map_1.containsKey_wgk31w_k$(key);
  };
  AttributesJs.prototype.put_btom12_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.map_1;
    tmp0_set.put_3mhbri_k$(key, value);
  };
  AttributesJs.prototype.remove_5z2j18_k$ = function (key) {
    this.map_1.remove_8hbkc0_k$(key);
  };
  AttributesJs.prototype.computeIfAbsent_ywdpog_k$ = function (key, block) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(key);
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
    var tmp0_set = this.map_1;
    tmp0_set.put_3mhbri_k$(key, tmp0_also);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  AttributesJs.prototype.get_allKeys_dton90_k$ = function () {
    return toList(this.map_1.get_keys_wop4xp_k$());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    init_properties_CryptoJs_kt_qn5kls();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _crypto$factory();
    tmp$ret$0 = _crypto$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var _crypto$delegate;
  function _crypto$delegate$lambda() {
    init_properties_CryptoJs_kt_qn5kls();
    var tmp;
    if (PlatformUtils_getInstance().get_IS_NODE_myvmya_k$()) {
      tmp = eval('require')('crypto');
    } else {
      tmp = window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
    }
    return tmp;
  }
  function _crypto$factory() {
    return getPropertyCallableRef('_crypto', 0, KProperty0, function () {
      return get__crypto();
    }, null);
  }
  var properties_initialized_CryptoJs_kt_linsrw;
  function init_properties_CryptoJs_kt_qn5kls() {
    if (properties_initialized_CryptoJs_kt_linsrw) {
    } else {
      properties_initialized_CryptoJs_kt_linsrw = true;
      _crypto$delegate = lazy(_crypto$delegate$lambda);
    }
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var tmp_0 = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined');
    tmp.IS_BROWSER_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    tmp_1.IS_NODE_1 = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
    this.IS_JVM_1 = false;
    this.IS_NATIVE_1 = false;
    this.IS_DEVELOPMENT_MODE_1 = false;
    this.IS_NEW_MM_ENABLED_1 = true;
  }
  PlatformUtils.prototype.get_IS_BROWSER_e36mbg_k$ = function () {
    return this.IS_BROWSER_1;
  };
  PlatformUtils.prototype.get_IS_NODE_myvmya_k$ = function () {
    return this.IS_NODE_1;
  };
  PlatformUtils.prototype.get_IS_JVM_qobnv_k$ = function () {
    return this.IS_JVM_1;
  };
  PlatformUtils.prototype.get_IS_NATIVE_hc2lur_k$ = function () {
    return this.IS_NATIVE_1;
  };
  PlatformUtils.prototype.get_IS_DEVELOPMENT_MODE_4qw7yr_k$ = function () {
    return this.IS_DEVELOPMENT_MODE_1;
  };
  PlatformUtils.prototype.get_IS_NEW_MM_ENABLED_wrrkbx_k$ = function () {
    return this.IS_NEW_MM_ENABLED_1;
  };
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function CoroutineStackFrame() {
  }
  function createStackTraceElement(kClass, methodName, fileName, lineNumber) {
    return new Object();
  }
  function GMTDate_0(timestamp) {
    var tmp0_safe_receiver = timestamp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toDouble_ygsx0s_k$();
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
    var dayOfWeek = Companion_getInstance_2().from_btzjl5_k$((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_getInstance_3().from_btzjl5_k$(date.getUTCMonth());
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
  KtorSimpleLogger$1.prototype.error_3u4tx2_k$ = function (message) {
    console.error(message);
  };
  KtorSimpleLogger$1.prototype.error_6edztm_k$ = function (message, cause) {
    console.error(message + ', cause: ' + cause);
  };
  KtorSimpleLogger$1.prototype.warn_tjfcss_k$ = function (message) {
    console.warn(message);
  };
  KtorSimpleLogger$1.prototype.warn_py06sc_k$ = function (message, cause) {
    console.warn(message + ', cause: ' + cause);
  };
  KtorSimpleLogger$1.prototype.info_nf2s9o_k$ = function (message) {
    console.info(message);
  };
  KtorSimpleLogger$1.prototype.info_djzsc4_k$ = function (message, cause) {
    console.info(message + ', cause: ' + cause);
  };
  KtorSimpleLogger$1.prototype.debug_1nsf3z_k$ = function (message) {
    console.info('DEBUG: ' + message);
  };
  KtorSimpleLogger$1.prototype.debug_8ayuxd_k$ = function (message, cause) {
    console.info('DEBUG: ' + message + ', cause: ' + cause);
  };
  KtorSimpleLogger$1.prototype.trace_jqeghf_k$ = function (message) {
    console.info('TRACE: ' + message);
  };
  KtorSimpleLogger$1.prototype.trace_d3yjwj_k$ = function (message, cause) {
    console.info('TRACE: ' + message + ', cause: ' + cause);
  };
  function Logger() {
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.isInstance_6tn68w_k$(_this__u8e3s4);
  }
  function Type() {
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
  _no_name_provided__qut3iv.prototype.get_j1ktw6_k$ = get;
  _no_name_provided__qut3iv.prototype.fold_iindx8_k$ = fold;
  _no_name_provided__qut3iv.prototype.minusKey_y21q55_k$ = minusKey;
  _no_name_provided__qut3iv.prototype.plus_rgw9wi_k$ = plus;
  AttributesJs.prototype.get_ny5huj_k$ = get_0;
  AttributesJs.prototype.take_o7aol2_k$ = take;
  AttributesJs.prototype.takeOrNull_27pbq8_k$ = takeOrNull;
  //endregion
  //region block: init
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = GMTDate$default;
  _.$_$.c = Attributes$default;
  _.$_$.d = SilentSupervisor$default;
  _.$_$.e = JsType_getInstance;
  _.$_$.f = PlatformUtils_getInstance;
  _.$_$.g = CopyOnWriteHashMap;
  _.$_$.h = KtorSimpleLogger;
  _.$_$.i = PipelineContext;
  _.$_$.j = PipelinePhase;
  _.$_$.k = Pipeline;
  _.$_$.l = instanceOf;
  _.$_$.m = typeInfoImpl;
  _.$_$.n = AttributeKey;
  _.$_$.o = Attributes_0;
  _.$_$.p = contains_0;
  _.$_$.q = contains;
  _.$_$.r = forEach;
  _.$_$.s = get_1;
  _.$_$.t = StringValuesBuilderImpl;
  _.$_$.u = StringValuesBuilder;
  _.$_$.v = StringValuesImpl;
  _.$_$.w = StringValues;
  _.$_$.x = appendAll;
  _.$_$.y = caseInsensitiveMap;
  _.$_$.z = flattenEntries;
  _.$_$.a1 = isLowerCase;
  _.$_$.b1 = putAll;
  _.$_$.c1 = toCharArray;
  _.$_$.d1 = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-ir.js.map
