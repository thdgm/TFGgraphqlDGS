(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    root['ktor-ktor-websockets-js-ir'] = factory(typeof this['ktor-ktor-websockets-js-ir'] === 'undefined' ? {} : this['ktor-ktor-websockets-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var mapCapacity = kotlin_kotlin.$_$.o8;
  var coerceAtLeast = kotlin_kotlin.$_$.kc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var objectMeta = kotlin_kotlin.$_$.dc;
  var setMetadataFor = kotlin_kotlin.$_$.ec;
  var THROW_ISE = kotlin_kotlin.$_$.mf;
  var Enum = kotlin_kotlin.$_$.ye;
  var classMeta = kotlin_kotlin.$_$.za;
  var toString = kotlin_kotlin.$_$.ic;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var THROW_CCE = kotlin_kotlin.$_$.lf;
  var emptyList = kotlin_kotlin.$_$.q7;
  var interfaceMeta = kotlin_kotlin.$_$.ib;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.h;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var get_lastIndex = kotlin_kotlin.$_$.i8;
  var compareTo = kotlin_kotlin.$_$.ab;
  var ensureNotNull = kotlin_kotlin.$_$.cg;
  var fillArrayVal = kotlin_kotlin.$_$.db;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var indexOf$default = kotlin_kotlin.$_$.r;
  var to = kotlin_kotlin.$_$.sg;
  var until = kotlin_kotlin.$_$.sc;
  var substring = kotlin_kotlin.$_$.xd;
  var asSequence = kotlin_kotlin.$_$.r6;
  var map = kotlin_kotlin.$_$.bd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.h;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var encodeToByteArray = kotlin_kotlin.$_$.id;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.t;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.n;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.e1;
  var writeText$default = kotlin_io_ktor_ktor_io.$_$.k;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kg;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Codes, 'Codes', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(CloseReason, 'CloseReason', classMeta, undefined, undefined, undefined, undefined, []);
  function send(frame, $cont) {
    return this.get_outgoing_us7o3v_k$().send_4idxxh_k$(frame, $cont);
  }
  setMetadataFor(WebSocketSession, 'WebSocketSession', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, [1, 0]);
  function start$default(negotiatedExtensions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      negotiatedExtensions = emptyList();
    var tmp;
    if ($handler == null) {
      this.start_x95223_k$(negotiatedExtensions);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(negotiatedExtensions);
    }
    return tmp;
  }
  setMetadataFor(DefaultWebSocketSession, 'DefaultWebSocketSession', interfaceMeta, undefined, [WebSocketSession], undefined, undefined, [1, 0]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, undefined, [DisposableHandle], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FrameType, 'FrameType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketExtension, 'WebSocketExtension', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketExtensionFactory, 'WebSocketExtensionFactory', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketExtensionHeader, 'WebSocketExtensionHeader', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Frame, 'Frame', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Binary, 'Binary', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Text, 'Text', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Close, 'Close', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Ping, 'Ping', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Pong, 'Pong', classMeta, Frame, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function _get_byCodeMap__7duph5($this) {
    return $this.byCodeMap_1;
  }
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp1_associateBy = values();
    var capacity = coerceAtLeast(mapCapacity(tmp1_associateBy.length), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var indexedObject = tmp1_associateBy;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.Companion.byCodeMap.<anonymous>' call
      tmp$ret$0 = element.code_1;
      tmp0_associateByTo.put_3mhbri_k$(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.byCodeMap_1 = tmp$ret$2;
    this.UNEXPECTED_CONDITION_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  Companion.prototype.get_UNEXPECTED_CONDITION_rk0i52_k$ = function () {
    return this.UNEXPECTED_CONDITION_1;
  };
  Companion.prototype.byCode_2tpqvq_k$ = function (code) {
    return this.byCodeMap_1.get_1mhr4y_k$(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NORMAL':
        return Codes_NORMAL_getInstance();
      case 'GOING_AWAY':
        return Codes_GOING_AWAY_getInstance();
      case 'PROTOCOL_ERROR':
        return Codes_PROTOCOL_ERROR_getInstance();
      case 'CANNOT_ACCEPT':
        return Codes_CANNOT_ACCEPT_getInstance();
      case 'CLOSED_ABNORMALLY':
        return Codes_CLOSED_ABNORMALLY_getInstance();
      case 'NOT_CONSISTENT':
        return Codes_NOT_CONSISTENT_getInstance();
      case 'VIOLATED_POLICY':
        return Codes_VIOLATED_POLICY_getInstance();
      case 'TOO_BIG':
        return Codes_TOO_BIG_getInstance();
      case 'NO_EXTENSION':
        return Codes_NO_EXTENSION_getInstance();
      case 'INTERNAL_ERROR':
        return Codes_INTERNAL_ERROR_getInstance();
      case 'SERVICE_RESTART':
        return Codes_SERVICE_RESTART_getInstance();
      case 'TRY_AGAIN_LATER':
        return Codes_TRY_AGAIN_LATER_getInstance();
      default:
        Codes_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_getInstance();
    Codes_entriesInitialized = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    Companion_getInstance();
  }
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.code_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, Object.create(CloseReason.prototype));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.code_1 = code;
  }
  Codes.prototype.get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.code_1 = code;
    this.message_1 = message;
  }
  CloseReason.prototype.get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  CloseReason.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  CloseReason.prototype.get_knownReason_j6teda_k$ = function () {
    return Companion_getInstance().byCode_2tpqvq_k$(this.code_1);
  };
  CloseReason.prototype.toString = function () {
    var tmp0_elvis_lhs = this.get_knownReason_j6teda_k$();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.code_1 : tmp0_elvis_lhs) + ', message=' + this.message_1 + ')';
  };
  CloseReason.prototype.component1_7eebsc_k$ = function () {
    return this.code_1;
  };
  CloseReason.prototype.component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  CloseReason.prototype.copy_5z8094_k$ = function (code, message) {
    return new CloseReason(code, message);
  };
  CloseReason.prototype.copy$default_w6g97m_k$ = function (code, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      code = this.code_1;
    if (!(($mask0 & 2) === 0))
      message = this.message_1;
    return this.copy_5z8094_k$(code, message);
  };
  CloseReason.prototype.hashCode = function () {
    var result = this.code_1;
    result = imul(result, 31) + getStringHashCode(this.message_1) | 0;
    return result;
  };
  CloseReason.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.code_1 === tmp0_other_with_cast.code_1))
      return false;
    if (!(this.message_1 === tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  function get_LOGGER() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    init_properties_DefaultWebSocketSession_kt_vhpdcs();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  function DefaultWebSocketSession() {
  }
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function init_properties_DefaultWebSocketSession_kt_vhpdcs() {
    if (properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
    } else {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
    }
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose_3n44we_k$ = function () {
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function _get_maxOpcode__n4u3i9($this) {
    return $this.maxOpcode_1;
  }
  function _get_byOpcodeArray__zfogar($this) {
    return $this.byOpcodeArray_1;
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var tmp0_maxByOrNull = values_0();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = tmp0_maxByOrNull.length === 0;
      if (tmp$ret$0) {
        tmp$ret$1 = null;
        break $l$block_0;
      }
      var maxElem = tmp0_maxByOrNull[0];
      var lastIndex = get_lastIndex(tmp0_maxByOrNull);
      if (lastIndex === 0) {
        tmp$ret$1 = maxElem;
        break $l$block_0;
      }
      var tmp$ret$2;
      // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
      var tmp1__anonymous__uwfjfc = maxElem;
      tmp$ret$2 = tmp1__anonymous__uwfjfc.opcode_1;
      var maxValue = tmp$ret$2;
      var inductionVariable = 1;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = tmp0_maxByOrNull[i];
          var tmp$ret$3;
          // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
          tmp$ret$3 = e.opcode_1;
          var v = tmp$ret$3;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$1 = maxElem;
    }
    tmp.maxOpcode_1 = ensureNotNull(tmp$ret$1).opcode_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.maxOpcode_1 + 1 | 0;
    var tmp$ret$4;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$4 = fillArrayVal(Array(tmp_2), null);
    var tmp_3 = tmp$ret$4;
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$7;
      // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var tmp0_singleOrNull = values_0();
        var single = null;
        var found = false;
        var indexedObject = tmp0_singleOrNull;
        var inductionVariable_0 = 0;
        var last = indexedObject.length;
        while (inductionVariable_0 < last) {
          var element = indexedObject[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp$ret$5;
          // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
          tmp$ret$5 = element.opcode_1 === tmp_4;
          if (tmp$ret$5) {
            if (found) {
              tmp$ret$6 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$6 = null;
          break $l$block_2;
        }
        tmp$ret$6 = single;
      }
      tmp$ret$7 = tmp$ret$6;
      tmp_3[tmp_4] = tmp$ret$7;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.byOpcodeArray_1 = tmp_3;
  }
  Companion_0.prototype.get_fkrdnv_k$ = function (opcode) {
    return (0 <= opcode ? opcode <= this.maxOpcode_1 : false) ? this.byOpcodeArray_1[opcode] : null;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    FrameType_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TEXT':
        return FrameType_TEXT_getInstance();
      case 'BINARY':
        return FrameType_BINARY_getInstance();
      case 'CLOSE':
        return FrameType_CLOSE_getInstance();
      case 'PING':
        return FrameType_PING_getInstance();
      case 'PONG':
        return FrameType_PONG_getInstance();
      default:
        FrameType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_getInstance();
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_0();
  }
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.controlFrame_1 = controlFrame;
    this.opcode_1 = opcode;
  }
  FrameType.prototype.get_controlFrame_mohuav_k$ = function () {
    return this.controlFrame_1;
  };
  FrameType.prototype.get_opcode_hp2o9j_k$ = function () {
    return this.opcode_1;
  };
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    init_properties_PingPong_kt_a6xpsg();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    init_properties_PingPong_kt_a6xpsg();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  var properties_initialized_PingPong_kt_fbfhmc;
  function init_properties_PingPong_kt_a6xpsg() {
    if (properties_initialized_PingPong_kt_fbfhmc) {
    } else {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function WebSocketExtension() {
  }
  function WebSocketExtensionFactory() {
  }
  function parametersToString($this) {
    var tmp;
    if ($this.parameters_1.isEmpty_y1axqb_k$()) {
      tmp = '';
    } else {
      tmp = ', ' + joinToString$default($this.parameters_1, ',', null, null, 0, null, null, 62, null);
    }
    return tmp;
  }
  function WebSocketExtensionHeader$parseParameters$lambda(it) {
    var tmp = _Char___init__impl__6a9atx(61);
    var equalsIndex = indexOf$default(it, tmp, 0, false, 6, null);
    if (equalsIndex < 0)
      return to(it, '');
    var key = substring(it, until(0, equalsIndex));
    var tmp_0;
    if ((equalsIndex + 1 | 0) < it.length) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = equalsIndex + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring);
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = '';
    }
    var value = tmp_0;
    return to(key, value);
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.name_1 = name;
    this.parameters_1 = parameters;
  }
  WebSocketExtensionHeader.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  WebSocketExtensionHeader.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  WebSocketExtensionHeader.prototype.parseParameters_8pxmv7_k$ = function () {
    var tmp = asSequence(this.parameters_1);
    return map(tmp, WebSocketExtensionHeader$parseParameters$lambda);
  };
  WebSocketExtensionHeader.prototype.toString = function () {
    return this.name_1 + ' ' + parametersToString(this);
  };
  function WebSocketSession() {
  }
  function Binary_init_$Init$(fin, data, rsv1, rsv2, rsv3, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      rsv1 = false;
    if (!(($mask0 & 8) === 0))
      rsv2 = false;
    if (!(($mask0 & 16) === 0))
      rsv3 = false;
    Binary.call($this, fin, data, rsv1, rsv2, rsv3);
    return $this;
  }
  function Binary_init_$Create$(fin, data, rsv1, rsv2, rsv3, $mask0, $marker) {
    return Binary_init_$Init$(fin, data, rsv1, rsv2, rsv3, $mask0, $marker, Object.create(Binary.prototype));
  }
  function Binary_init_$Init$_0(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$_0(fin, data) {
    return Binary_init_$Init$_0(fin, data, Object.create(Binary.prototype));
  }
  function Binary_init_$Init$_1(fin, packet, $this) {
    Binary_init_$Init$_0(fin, readBytes$default(packet, 0, 1, null), $this);
    return $this;
  }
  function Binary_init_$Create$_1(fin, packet) {
    return Binary_init_$Init$_1(fin, packet, Object.create(Binary.prototype));
  }
  function Text_init_$Init$(fin, data, rsv1, rsv2, rsv3, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      rsv1 = false;
    if (!(($mask0 & 8) === 0))
      rsv2 = false;
    if (!(($mask0 & 16) === 0))
      rsv3 = false;
    Text.call($this, fin, data, rsv1, rsv2, rsv3);
    return $this;
  }
  function Text_init_$Create$(fin, data, rsv1, rsv2, rsv3, $mask0, $marker) {
    return Text_init_$Init$(fin, data, rsv1, rsv2, rsv3, $mask0, $marker, Object.create(Text.prototype));
  }
  function Text_init_$Init$_0(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Create$_0(fin, data) {
    return Text_init_$Init$_0(fin, data, Object.create(Text.prototype));
  }
  function Text_init_$Init$_1(text, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = Charsets_getInstance().get_UTF_8_ihn39z_k$();
      if (tmp0_toByteArray.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$())) {
        tmp$ret$0 = encodeToByteArray(text);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.newEncoder_gqwcdg_k$(), text, 0, text.length);
    }
    Text_init_$Init$_0(true, tmp$ret$0, $this);
    return $this;
  }
  function Text_init_$Create$_1(text) {
    return Text_init_$Init$_1(text, Object.create(Text.prototype));
  }
  function Text_init_$Init$_2(fin, packet, $this) {
    Text_init_$Init$_0(fin, readBytes$default(packet, 0, 1, null), $this);
    return $this;
  }
  function Text_init_$Create$_2(fin, packet) {
    return Text_init_$Init$_2(fin, packet, Object.create(Text.prototype));
  }
  function Close_init_$Init$(reason, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.websocket.Close.<init>.<anonymous>' call
        writeShort(builder, reason.get_code_wok7xy_k$());
        var tmp = reason.get_message_h23axq_k$();
        writeText$default(builder, tmp, 0, 0, null, 14, null);
        tmp$ret$0 = builder.build_1k0s4u_k$();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.release_wtm6d2_k$();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    Close_init_$Init$_0(tmp$ret$0, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, Object.create(Close.prototype));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readBytes$default(packet, 0, 1, null));
    return $this;
  }
  function Close_init_$Create$_0(packet) {
    return Close_init_$Init$_0(packet, Object.create(Close.prototype));
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_1().Empty_1);
    return $this;
  }
  function Close_init_$Create$_1() {
    return Close_init_$Init$_1(Object.create(Close.prototype));
  }
  function Ping_init_$Init$(packet, $this) {
    Ping.call($this, readBytes$default(packet, 0, 1, null));
    return $this;
  }
  function Ping_init_$Create$(packet) {
    return Ping_init_$Init$(packet, Object.create(Ping.prototype));
  }
  function Pong_init_$Init$(data, disposableHandle, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      disposableHandle = NonDisposableHandle_getInstance();
    Pong.call($this, data, disposableHandle);
    return $this;
  }
  function Pong_init_$Create$(data, disposableHandle, $mask0, $marker) {
    return Pong_init_$Init$(data, disposableHandle, $mask0, $marker, Object.create(Pong.prototype));
  }
  function Pong_init_$Init$_0(packet, $this) {
    Pong.call($this, readBytes$default(packet, 0, 1, null), NonDisposableHandle_getInstance());
    return $this;
  }
  function Pong_init_$Create$_0(packet) {
    return Pong_init_$Init$_0(packet, Object.create(Pong.prototype));
  }
  function _get_Empty__x4mxmk($this) {
    return $this.Empty_1;
  }
  function Frame_init_$Init$(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      disposableHandle = NonDisposableHandle_getInstance();
    if (!(($mask0 & 16) === 0))
      rsv1 = false;
    if (!(($mask0 & 32) === 0))
      rsv2 = false;
    if (!(($mask0 & 64) === 0))
      rsv3 = false;
    Frame.call($this, fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3);
    return $this;
  }
  function Frame_init_$Create$(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3, $mask0, $marker) {
    return Frame_init_$Init$(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3, $mask0, $marker, Object.create(Frame.prototype));
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Pong(data, disposableHandle) {
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Empty_1 = new Int8Array(0);
  }
  Companion_1.prototype.byType_l553t_k$ = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp0_subject = frameType;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_getInstance());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_1();
    this.fin_1 = fin;
    this.frameType_1 = frameType;
    this.data_1 = data;
    this.disposableHandle_1 = disposableHandle;
    this.rsv1__1 = rsv1;
    this.rsv2__1 = rsv2;
    this.rsv3__1 = rsv3;
  }
  Frame.prototype.get_fin_18j5um_k$ = function () {
    return this.fin_1;
  };
  Frame.prototype.get_frameType_hj325a_k$ = function () {
    return this.frameType_1;
  };
  Frame.prototype.get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  Frame.prototype.get_disposableHandle_9vd6rz_k$ = function () {
    return this.disposableHandle_1;
  };
  Frame.prototype.get_rsv1_wotw3p_k$ = function () {
    return this.rsv1__1;
  };
  Frame.prototype.get_rsv2_wotw3q_k$ = function () {
    return this.rsv2__1;
  };
  Frame.prototype.get_rsv3_wotw3r_k$ = function () {
    return this.rsv3__1;
  };
  Frame.prototype.toString = function () {
    return 'Frame ' + this.frameType_1 + ' (fin=' + this.fin_1 + ', buffer len = ' + this.data_1.length + ')';
  };
  Frame.prototype.copy_1tks5_k$ = function () {
    var tmp = Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.data_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp.byType_l553t_k$(this.fin_1, this.frameType_1, tmp$ret$1, this.rsv1__1, this.rsv2__1, this.rsv3__1);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_INTERNAL_ERROR_getInstance;
  _.$_$.c = send;
  _.$_$.d = start$default;
  _.$_$.e = Binary_init_$Create$_0;
  _.$_$.f = Close_init_$Create$;
  _.$_$.g = Text_init_$Create$_1;
  _.$_$.h = Companion_getInstance;
  _.$_$.i = CloseReason;
  _.$_$.j = DefaultWebSocketSession;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets-js-ir.js.map
