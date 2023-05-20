(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './ktor-ktor-events-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-websockets-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-events-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-events-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-events-js-ir' was not found. Please, check whether 'ktor-ktor-events-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-websockets-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-websockets-js-ir' was not found. Please, check whether 'ktor-ktor-websockets-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    root['ktor-ktor-client-core-js-ir'] = factory(typeof this['ktor-ktor-client-core-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['ktor-ktor-events-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-websockets-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var CoroutineImpl = kotlin_kotlin.$_$.ka;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var isObject = kotlin_kotlin.$_$.sb;
  var toString = kotlin_kotlin.$_$.gc;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u9;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.cc;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.a1;
  var isInterface = kotlin_kotlin.$_$.pb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var ensureNotNull = kotlin_kotlin.$_$.ag;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.f;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var objectMeta = kotlin_kotlin.$_$.bc;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.l;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var equals = kotlin_kotlin.$_$.za;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.mg;
  var IllegalStateException = kotlin_kotlin.$_$.af;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k2;
  var captureStack = kotlin_kotlin.$_$.ra;
  var UnsupportedOperationException = kotlin_kotlin.$_$.vf;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.y2;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.z;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var trimMargin$default = kotlin_kotlin.$_$.z;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.h1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Long = kotlin_kotlin.$_$.cf;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.h;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.l2;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.j1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ig;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var writer = kotlin_io_ktor_ktor_io.$_$.l1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.r;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.n;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.o;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.m;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var arrayOf = kotlin_kotlin.$_$.xf;
  var createKType = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.m;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var emptySet = kotlin_kotlin.$_$.r7;
  var interfaceMeta = kotlin_kotlin.$_$.gb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.w;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.d;
  var lazy = kotlin_kotlin.$_$.hg;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var KProperty1 = kotlin_kotlin.$_$.vc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.db;
  var setOf = kotlin_kotlin.$_$.y8;
  var Key = kotlin_kotlin.$_$.ia;
  var get = kotlin_kotlin.$_$.fa;
  var fold = kotlin_kotlin.$_$.ea;
  var minusKey = kotlin_kotlin.$_$.ga;
  var plus = kotlin_kotlin.$_$.ja;
  var Element = kotlin_kotlin.$_$.ha;
  var setOf_0 = kotlin_kotlin.$_$.z8;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.c1;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.h;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.s;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var toLong = kotlin_kotlin.$_$.ec;
  var toLong_0 = kotlin_kotlin.$_$.ee;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var isByteArray = kotlin_kotlin.$_$.jb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.m5;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d2;
  var CancellationException = kotlin_kotlin.$_$.t9;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.k1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.u;
  var getKClass = kotlin_kotlin.$_$.d;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.m;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.b1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.z;
  var Unit = kotlin_kotlin.$_$.uf;
  var toString_0 = kotlin_kotlin.$_$.pg;
  var toInt = kotlin_kotlin.$_$.ce;
  var reversed = kotlin_kotlin.$_$.x8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var rangeTo = kotlin_kotlin.$_$.oc;
  var contains = kotlin_kotlin.$_$.mc;
  var charset = kotlin_io_ktor_ktor_http.$_$.b1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.i1;
  var Comparator = kotlin_kotlin.$_$.te;
  var compareValues = kotlin_kotlin.$_$.s9;
  var get_name = kotlin_io_ktor_ktor_io.$_$.v;
  var toList = kotlin_kotlin.$_$.g9;
  var sortedWith = kotlin_kotlin.$_$.c9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v1;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var roundToInt = kotlin_kotlin.$_$.hc;
  var firstOrNull = kotlin_kotlin.$_$.v7;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.a1;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.i;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.z;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.h1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.e1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.y;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.k;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.i;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var Default_getInstance = kotlin_kotlin.$_$.h5;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var toLongOrNull = kotlin_kotlin.$_$.de;
  var numberToLong = kotlin_kotlin.$_$.ac;
  var get_lastIndex = kotlin_kotlin.$_$.f8;
  var downTo = kotlin_kotlin.$_$.nc;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.f1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var IOException = kotlin_io_ktor_ktor_io.$_$.f1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.o;
  var ByteChannel$default = kotlin_io_ktor_ktor_io.$_$.l;
  var copyAndClose$default = kotlin_io_ktor_ktor_io.$_$.d;
  var HttpMessage = kotlin_io_ktor_ktor_http.$_$.t;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.g1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.b1;
  var HttpMessageBuilder = kotlin_io_ktor_ktor_http.$_$.s;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var encodeToByteArray = kotlin_kotlin.$_$.gd;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.t;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.e;
  var hashCode = kotlin_kotlin.$_$.fb;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.g1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.j;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.g;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var intercepted = kotlin_kotlin.$_$.x9;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var extendThrowable = kotlin_kotlin.$_$.ab;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.n5;
  var createFailure = kotlin_kotlin.$_$.zf;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k3;
  var toTypedArray = kotlin_kotlin.$_$.p9;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.y1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.a2;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var String$default = kotlin_io_ktor_ktor_io.$_$.g;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.n;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.j;
  var readShort = kotlin_io_ktor_ktor_io.$_$.d1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var emptyList = kotlin_kotlin.$_$.p7;
  var start$default = kotlin_io_ktor_ktor_websockets.$_$.d;
  var cancel$default_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var send = kotlin_io_ktor_ktor_websockets.$_$.c;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.j;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpClient$slambda, 'HttpClient$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpClient$slambda_1, 'HttpClient$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$0, '$executeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClient, 'HttpClient', classMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  setMetadataFor(HttpClientConfig, 'HttpClientConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($bodyNullableCOROUTINE$1, '$bodyNullableCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($bodyCOROUTINE$2, '$bodyCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientCall, 'HttpClientCall', classMeta, undefined, [CoroutineScope], undefined, undefined, [0, 1]);
  setMetadataFor(DoubleReceiveException, 'DoubleReceiveException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(NoTransformationFoundException, 'NoTransformationFoundException', classMeta, UnsupportedOperationException, undefined, undefined, undefined, []);
  setMetadataFor(SavedHttpCall, 'SavedHttpCall', classMeta, HttpClientCall, undefined, undefined, undefined, [0, 1]);
  function get_coroutineContext() {
    return this.get_call_wojxrb_k$().get_coroutineContext_115oqo_k$();
  }
  setMetadataFor(HttpRequest_0, 'HttpRequest', interfaceMeta, undefined, [HttpMessage, CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpRequest, 'SavedHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, undefined, [HttpMessage, CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpResponse, 'SavedHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($saveCOROUTINE$3, '$saveCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(UnsupportedContentTypeException, 'UnsupportedContentTypeException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ObservableContent$content$slambda, 'ObservableContent$content$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(ObservableContent, 'ObservableContent', classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngine$install$slambda, 'HttpClientEngine$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpClientEngine$executeWithinCallContext$slambda, 'HttpClientEngine$executeWithinCallContext$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($executeWithinCallContextCOROUTINE$4, '$executeWithinCallContextCOROUTINE$4', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = client.get_sendPipeline_5dhg2b_k$();
    var tmp_0 = Phases_getInstance_0().get_Engine_27ulqt_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, HttpClientEngine$install$slambda_0(client, this, null));
  }
  setMetadataFor(HttpClientEngine, 'HttpClientEngine', interfaceMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  function create$default(block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      block = HttpClientEngineFactory$create$lambda;
    }
    return $handler == null ? this.create_g3w65u_k$(block) : $handler(block);
  }
  setMetadataFor(HttpClientEngineFactory, 'HttpClientEngineFactory', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClientEngineClosedException, 'ClientEngineClosedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngineBase, 'HttpClientEngineBase', classMeta, undefined, [HttpClientEngine], undefined, undefined, [1]);
  setMetadataFor(HttpClientEngineCapability, 'HttpClientEngineCapability', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngineConfig, 'HttpClientEngineConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, [Key], undefined, undefined, []);
  setMetadataFor(KtorCallContextElement, 'KtorCallContextElement', classMeta, undefined, [Element], undefined, undefined, []);
  function prepare$default(block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      block = HttpClientPlugin$prepare$lambda;
    }
    return $handler == null ? this.prepare_aftpuj_k$(block) : $handler(block);
  }
  setMetadataFor(HttpClientPlugin, 'HttpClientPlugin', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(BodyProgress$handle$slambda, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(BodyProgress$handle$slambda_1, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(BodyProgress, 'BodyProgress', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(RedirectResponseException, 'RedirectResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ClientRequestException, 'ClientRequestException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ServerResponseException, 'ServerResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(addDefaultResponseValidation$lambda$slambda, 'addDefaultResponseValidation$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$1$content$1, undefined, classMeta, ByteArrayContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$1$content$2, undefined, classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$slambda, 'defaultTransformers$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(defaultTransformers$slambda$slambda, 'defaultTransformers$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$slambda_1, 'defaultTransformers$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_1, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_3, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(Config, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor($validateResponseCOROUTINE$5, '$validateResponseCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($processExceptionCOROUTINE$6, '$processExceptionCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpCallValidator, 'HttpCallValidator', classMeta, undefined, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(HandlerWrapper, 'HandlerWrapper', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper', classMeta, undefined, [HandlerWrapper], undefined, undefined, []);
  setMetadataFor(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper', classMeta, undefined, [HandlerWrapper], undefined, undefined, []);
  setMetadataFor(HttpRequest$1, undefined, classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpPlainText$Plugin$install$slambda, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda_1, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(Config_0, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_0, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, undefined, [Comparator], undefined, undefined, []);
  setMetadataFor(HttpPlainText, 'HttpPlainText', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRedirect$Plugin$install$slambda, 'HttpRedirect$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor($handleCallCOROUTINE$7, '$handleCallCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_1, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_1, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, [4]);
  setMetadataFor(HttpRedirect, 'HttpRedirect', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle$Plugin$install$slambda, 'HttpRequestLifecycle$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(Plugin_2, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle, 'HttpRequestLifecycle', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestRetry$Configuration$delay$slambda, 'HttpRequestRetry$Configuration$delay$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(ShouldRetryContext, 'ShouldRetryContext', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelayContext, 'DelayContext', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ModifyRequestContext, 'ModifyRequestContext', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RetryEventData, 'RetryEventData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Configuration, 'Configuration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_3, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpRequestRetry$intercept$slambda, 'HttpRequestRetry$intercept$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpRequestRetry, 'HttpRequestRetry', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSend$Plugin$install$slambda, 'HttpSend$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$8, '$executeCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_2, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_4, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(Sender, 'Sender', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(InterceptedSender, 'InterceptedSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(DefaultSender, 'DefaultSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(HttpSend, 'HttpSend', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SendCountExceedException, 'SendCountExceedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpTimeout$Plugin$install$slambda$slambda, 'HttpTimeout$Plugin$install$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(HttpTimeout$Plugin$install$slambda, 'HttpTimeout$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(HttpTimeoutCapabilityConfiguration, 'HttpTimeoutCapabilityConfiguration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_5, 'Plugin', objectMeta, undefined, [HttpClientPlugin, HttpClientEngineCapability], undefined, undefined, []);
  setMetadataFor(HttpTimeout, 'HttpTimeout', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestTimeoutException, 'HttpRequestTimeoutException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(DelegatedResponse, 'DelegatedResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketCapability, 'WebSocketCapability', objectMeta, undefined, [HttpClientEngineCapability], undefined, undefined, []);
  setMetadataFor(WebSocketException, 'WebSocketException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor($pipeToCOROUTINE$9, '$pipeToCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ClientUpgradeContent, 'ClientUpgradeContent', classMeta, NoContent, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultHttpRequest, 'DefaultHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestBuilder, 'HttpRequestBuilder', classMeta, undefined, [HttpMessageBuilder], undefined, undefined, []);
  setMetadataFor(HttpRequestData, 'HttpRequestData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponseData, 'HttpResponseData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Phases, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestPipeline, 'HttpRequestPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_0, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSendPipeline, 'HttpSendPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor($requestCOROUTINE$10, '$requestCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($requestCOROUTINE$11, '$requestCOROUTINE$11', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DefaultHttpResponse, 'DefaultHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($bodyAsTextCOROUTINE$12, '$bodyAsTextCOROUTINE$12', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Phases_1, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponsePipeline, 'HttpResponsePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_2, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpReceivePipeline, 'HttpReceivePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpResponseContainer, 'HttpResponseContainer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement$execute$slambda, 'HttpStatement$execute$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($executeCOROUTINE$13, '$executeCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeUnsafeCOROUTINE$14, '$executeUnsafeCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($cleanupCOROUTINE$15, '$cleanupCOROUTINE$15', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement, 'HttpStatement', classMeta, undefined, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(observable$slambda, 'observable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(HttpResponseReceiveFail, 'HttpResponseReceiveFail', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyContent, 'EmptyContent', objectMeta, NoContent, undefined, undefined, undefined, []);
  setMetadataFor(ProxyConfig, 'ProxyConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Js, 'Js', objectMeta, undefined, [HttpClientEngineFactory], undefined, undefined, []);
  setMetadataFor(JsClientEngine$createWebSocket$headers_capturingHack$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($executeCOROUTINE$16, '$executeCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeWebSocketRequestCOROUTINE$17, '$executeWebSocketRequestCOROUTINE$17', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(JsClientEngine, 'JsClientEngine', classMeta, HttpClientEngineBase, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(JsError, 'JsError', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(toRaw$slambda, 'toRaw$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($toRawCOROUTINE$18, '$toRawCOROUTINE$18', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(channelFromStream$slambda, 'channelFromStream$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(readBodyNode$slambda, 'readBodyNode$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(ConnectTimeoutException, 'ConnectTimeoutException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(SocketTimeoutException, 'SocketTimeoutException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(JsWebSocketSession$slambda, 'JsWebSocketSession$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(JsWebSocketSession, 'JsWebSocketSession', classMeta, undefined, [DefaultWebSocketSession], undefined, undefined, [0, 1]);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      userConfig = new HttpClientConfig();
    HttpClient.call($this, engine, userConfig);
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, $mask0, $marker) {
    return HttpClient_init_$Init$(engine, userConfig, $mask0, $marker, Object.create(HttpClient.prototype));
  }
  function _get_userConfig__kgib42($this) {
    return $this.userConfig_1;
  }
  function _set_manageEngine__r3e33k($this, _set____db54di) {
    $this.manageEngine_1 = _set____db54di;
  }
  function _get_manageEngine__sdz8bg($this) {
    return $this.manageEngine_1;
  }
  function HttpClient_init_$Init$_0(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.manageEngine_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$_0(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$_0(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _get_clientJob__3efckh($this) {
    return $this.clientJob_1;
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel$default(this$0.engine_1, null, 1, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, call, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, call, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpClient$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.call_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.call_1) + '(' + getKClassFromExpression(this.call_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.receivePipeline_1.execute_av1190_k$(Unit_getInstance(), this.call_1.get_response_xlk07e_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response0__1 = suspendResult;
            this.call_1.setResponse_mhtqkc_k$(this.response0__1);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.call_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpClient$slambda.prototype.create_300ycv_k$ = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.this$0__1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.call_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.invoke_63ydys_k$($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_getInstance();
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.invoke_sqq52a_k$ = function ($this$intercept, it, $cont) {
    var tmp = this.create_u7w3m5_k$($this$intercept, it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpClient$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_sqq52a_k$(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.proceed_7g1848_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              this.this$0__1.monitor_1.raise_ojaa37_k$(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.$this$intercept_1.get_context_h02k06_k$().get_response_xlk07e_k$(), cause));
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpClient$slambda_1.prototype.create_u7w3m5_k$ = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.this$0__1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.it_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.invoke_sqq52a_k$($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.builder_1 = builder;
  }
  $executeCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this._this__u8e3s4__1.monitor_1.raise_ojaa37_k$(get_HttpRequestCreated(), this.builder_1);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.requestPipeline_1.execute_av1190_k$(this.builder_1, this.builder_1.get_body_wojkyz_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    this.engine_1 = engine;
    this.userConfig_1 = userConfig;
    this.manageEngine_1 = false;
    this.closed_1 = atomic$boolean$1(false);
    this.clientJob_1 = Job(this.engine_1.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance()));
    this.coroutineContext_1 = this.engine_1.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(this.clientJob_1);
    this.requestPipeline_1 = new HttpRequestPipeline(this.userConfig_1.get_developmentMode_eqiro5_k$());
    this.responsePipeline_1 = new HttpResponsePipeline(this.userConfig_1.get_developmentMode_eqiro5_k$());
    this.sendPipeline_1 = new HttpSendPipeline(this.userConfig_1.get_developmentMode_eqiro5_k$());
    this.receivePipeline_1 = new HttpReceivePipeline(this.userConfig_1.get_developmentMode_eqiro5_k$());
    this.attributes_1 = Attributes(true);
    this.engineConfig_1 = this.engine_1.get_config_c0698r_k$();
    this.monitor_1 = new Events();
    this.config_1 = new HttpClientConfig();
    if (this.manageEngine_1) {
      this.clientJob_1.invokeOnCompletion_t2apld_k$(HttpClient$lambda(this));
    }
    this.engine_1.install_vgwzcp_k$(this);
    var tmp = Phases_getInstance_0().get_Receive_oc3k86_k$();
    this.sendPipeline_1.intercept_hnj3e1_k$(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.userConfig_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = Plugin_getInstance_2();
    this.config_1.install$default_q7chr6_k$(tmp_0, null, 2, null);
    var tmp_1 = Plugin_getInstance();
    this.config_1.install$default_q7chr6_k$(tmp_1, null, 2, null);
    if (tmp0_with.get_useDefaultTransformers_1tuc9v_k$()) {
      this.config_1.install_1usqzt_k$('DefaultTransformers', HttpClient$lambda_0);
    }
    var tmp_2 = Plugin_getInstance_4();
    this.config_1.install$default_q7chr6_k$(tmp_2, null, 2, null);
    var tmp_3 = Companion_getInstance_9();
    this.config_1.install$default_q7chr6_k$(tmp_3, null, 2, null);
    if (tmp0_with.get_followRedirects_a62ikd_k$()) {
      var tmp_4 = Plugin_getInstance_1();
      this.config_1.install$default_q7chr6_k$(tmp_4, null, 2, null);
    }
    var tmp0_this = this;
    tmp0_this.config_1.plusAssign_husw69_k$(tmp0_with);
    if (tmp0_with.get_useDefaultTransformers_1tuc9v_k$()) {
      var tmp_5 = Plugin_getInstance_0();
      this.config_1.install$default_q7chr6_k$(tmp_5, null, 2, null);
    }
    addDefaultResponseValidation(this.config_1);
    this.config_1.install_vgwzcp_k$(this);
    tmp$ret$0 = Unit_getInstance();
    var tmp_6 = Phases_getInstance_1().get_Receive_oc3k86_k$();
    this.responsePipeline_1.intercept_hnj3e1_k$(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.get_engine_cxlavf_k$ = function () {
    return this.engine_1;
  };
  HttpClient.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  HttpClient.prototype.get_requestPipeline_5d9z6w_k$ = function () {
    return this.requestPipeline_1;
  };
  HttpClient.prototype.get_responsePipeline_xbi790_k$ = function () {
    return this.responsePipeline_1;
  };
  HttpClient.prototype.get_sendPipeline_5dhg2b_k$ = function () {
    return this.sendPipeline_1;
  };
  HttpClient.prototype.get_receivePipeline_3qwhq4_k$ = function () {
    return this.receivePipeline_1;
  };
  HttpClient.prototype.get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  HttpClient.prototype.get_engineConfig_azc9kd_k$ = function () {
    return this.engineConfig_1;
  };
  HttpClient.prototype.get_monitor_lpmkc1_k$ = function () {
    return this.monitor_1;
  };
  HttpClient.prototype.get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  HttpClient.prototype.execute_z0ufkc_k$ = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpClient.prototype.isSupported_8gq8th_k$ = function (capability) {
    return this.engine_1.get_supportedCapabilities_gwz15x_k$().contains_2ehdt1_k$(capability);
  };
  HttpClient.prototype.config_pxdses_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.HttpClient.config.<anonymous>' call
    tmp0_apply.plusAssign_husw69_k$(this.userConfig_1);
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return HttpClient_init_$Create$_0(this.engine_1, tmp$ret$0, this.manageEngine_1);
  };
  HttpClient.prototype.close_ymq55z_k$ = function () {
    var success = this.closed_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.attributes_1.get_ny5huj_k$(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = installedFeatures.get_allKeys_dton90_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.client.HttpClient.close.<anonymous>' call
      var plugin = installedFeatures.get_ny5huj_k$(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, Closeable)) {
        plugin.close_ymq55z_k$();
      }
    }
    this.clientJob_1.complete_9ww6vb_k$();
    if (this.manageEngine_1) {
      this.engine_1.close_ymq55z_k$();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.engine_1 + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var engine = engineFactory.create_g3w65u_k$(config.get_engineConfig_azc9kd_k$());
    var client = HttpClient_init_$Create$_0(engine, config, true);
    var tmp = ensureNotNull(client.coroutineContext_1.get_j1ktw6_k$(Key_getInstance()));
    tmp.invokeOnCompletion_t2apld_k$(HttpClient$lambda_2(engine));
    return client;
  }
  function HttpClient$default(engineFactory, block, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      block = HttpClient$lambda_1;
    }
    return HttpClient_0(engineFactory, block);
  }
  function HttpClient$lambda_1($this$null) {
    return Unit_getInstance();
  }
  function HttpClient$lambda_2($engine) {
    return function (it) {
      $engine.close_ymq55z_k$();
      return Unit_getInstance();
    };
  }
  function _get_plugins__4elqi9($this) {
    return $this.plugins_1;
  }
  function _get_pluginConfigurations__abgoat($this) {
    return $this.pluginConfigurations_1;
  }
  function _get_customInterceptors__qan0x8($this) {
    return $this.customInterceptors_1;
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$engine$lambda($oldConfig, $block) {
    return function ($this$null) {
      $oldConfig($this$null);
      $block($this$null);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return Attributes(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = scope.get_attributes_dgqof4_k$();
      var tmp_0 = get_PLUGIN_INSTALLED_LIST();
      var attributes = tmp.computeIfAbsent_ywdpog_k$(tmp_0, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.get_config_c0698r_k$().pluginConfigurations_1.get_1mhr4y_k$($plugin.get_key_18j28a_k$()));
      var pluginData = $plugin.prepare_aftpuj_k$(config);
      $plugin.install_cj05u9_k$(pluginData, scope);
      attributes.put_btom12_k$($plugin.get_key_18j28a_k$(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.plugins_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.pluginConfigurations_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.customInterceptors_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.engineConfig_1 = HttpClientConfig$engineConfig$lambda;
    this.followRedirects_1 = true;
    this.useDefaultTransformers_1 = true;
    this.expectSuccess_1 = false;
    this.developmentMode_1 = PlatformUtils_getInstance().get_IS_DEVELOPMENT_MODE_4qw7yr_k$();
  }
  HttpClientConfig.prototype.set_engineConfig_l9reii_k$ = function (_set____db54di) {
    this.engineConfig_1 = _set____db54di;
  };
  HttpClientConfig.prototype.get_engineConfig_azc9kd_k$ = function () {
    return this.engineConfig_1;
  };
  HttpClientConfig.prototype.engine_avsg87_k$ = function (block) {
    var oldConfig = this.engineConfig_1;
    var tmp = this;
    tmp.engineConfig_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  HttpClientConfig.prototype.set_followRedirects_l10dz4_k$ = function (_set____db54di) {
    this.followRedirects_1 = _set____db54di;
  };
  HttpClientConfig.prototype.get_followRedirects_a62ikd_k$ = function () {
    return this.followRedirects_1;
  };
  HttpClientConfig.prototype.set_useDefaultTransformers_gtwv0o_k$ = function (_set____db54di) {
    this.useDefaultTransformers_1 = _set____db54di;
  };
  HttpClientConfig.prototype.get_useDefaultTransformers_1tuc9v_k$ = function () {
    return this.useDefaultTransformers_1;
  };
  HttpClientConfig.prototype.set_expectSuccess_k3nqik_k$ = function (_set____db54di) {
    this.expectSuccess_1 = _set____db54di;
  };
  HttpClientConfig.prototype.get_expectSuccess_uic3pb_k$ = function () {
    return this.expectSuccess_1;
  };
  HttpClientConfig.prototype.set_developmentMode_aswiso_k$ = function (_set____db54di) {
    this.developmentMode_1 = _set____db54di;
  };
  HttpClientConfig.prototype.get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_1;
  };
  HttpClientConfig.prototype.install_851ey0_k$ = function (plugin, configure) {
    var previousConfigBlock = this.pluginConfigurations_1.get_1mhr4y_k$(plugin.get_key_18j28a_k$());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.pluginConfigurations_1;
    var tmp1_set = plugin.get_key_18j28a_k$();
    tmp0_set.put_3mhbri_k$(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    if (this.plugins_1.containsKey_wgk31w_k$(plugin.get_key_18j28a_k$()))
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.plugins_1;
    var tmp3_set = plugin.get_key_18j28a_k$();
    tmp2_set.put_3mhbri_k$(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
  };
  HttpClientConfig.prototype.install$default_q7chr6_k$ = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda;
    }
    return this.install_851ey0_k$(plugin, configure);
  };
  HttpClientConfig.prototype.install_1usqzt_k$ = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.customInterceptors_1;
    tmp0_set.put_3mhbri_k$(key, block);
  };
  HttpClientConfig.prototype.install_vgwzcp_k$ = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.plugins_1.get_values_ksazhn_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
      tmp$ret$0 = client;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.customInterceptors_1.get_values_ksazhn_k$();
    var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
      tmp$ret$1 = client;
    }
  };
  HttpClientConfig.prototype.clone_1keycd_k$ = function () {
    var result = new HttpClientConfig();
    result.plusAssign_husw69_k$(this);
    return result;
  };
  HttpClientConfig.prototype.plusAssign_husw69_k$ = function (other) {
    this.followRedirects_1 = other.followRedirects_1;
    this.useDefaultTransformers_1 = other.useDefaultTransformers_1;
    this.expectSuccess_1 = other.expectSuccess_1;
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.plugins_1;
    var tmp1_plusAssign = other.plugins_1;
    tmp0_plusAssign.putAll_mee1c3_k$(tmp1_plusAssign);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.pluginConfigurations_1;
    var tmp3_plusAssign = other.pluginConfigurations_1;
    tmp2_plusAssign.putAll_mee1c3_k$(tmp3_plusAssign);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp2_this.customInterceptors_1;
    var tmp5_plusAssign = other.customInterceptors_1;
    tmp4_plusAssign.putAll_mee1c3_k$(tmp5_plusAssign);
  };
  function _get_received__yyerqu($this) {
    return $this.received_1;
  }
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.request_1 = new DefaultHttpRequest($this, requestData);
    $this.response_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.get_body_wojkyz_k$();
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.get_attributes_dgqof4_k$().put_btom12_k$(Companion_getInstance_7().CustomResponse_1, responseData.get_body_wojkyz_k$());
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.CustomResponse_1 = new AttributeKey('CustomResponse');
  }
  Companion.prototype.get_CustomResponse_zh4zd1_k$ = function () {
    return this.CustomResponse_1;
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.info_1 = info;
  }
  $bodyNullableCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_exceptionState_s9sevl_k$(8);
            if (instanceOf(this._this__u8e3s4__1.get_response_xlk07e_k$(), this.info_1.get_type_wovaf7_k$())) {
              this.tmp$ret$01__1 = this._this__u8e3s4__1.get_response_xlk07e_k$();
              this.set_exceptionState_s9sevl_k$(10);
              this.set_state_a96kl8_k$(7);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            if (!this._this__u8e3s4__1.get_allowDoubleReceive_um1gnm_k$() ? !this._this__u8e3s4__1.received_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this._this__u8e3s4__1);
            }

            this.tmp0_elvis_lhs2__1 = this._this__u8e3s4__1.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(Companion_getInstance_7().CustomResponse_1);
            if (this.tmp0_elvis_lhs2__1 == null) {
              this.set_state_a96kl8_k$(4);
              suspendResult = this._this__u8e3s4__1.getResponseContent_i44bm0_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT3__1 = this.tmp0_elvis_lhs2__1;
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            break;
          case 4:
            this.WHEN_RESULT3__1 = suspendResult;
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.responseData4__1 = this.WHEN_RESULT3__1;
            this.subject5__1 = new HttpResponseContainer(this.info_1, this.responseData4__1);
            this.set_state_a96kl8_k$(6);
            suspendResult = this._this__u8e3s4__1.client_1.get_responsePipeline_xbi790_k$().execute_av1190_k$(this._this__u8e3s4__1, this.subject5__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.get_response_xlk07e_k$();
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.info_1.get_type_wovaf7_k$()) : false) {
              var from = getKClassFromExpression(result);
              var to = this.info_1.get_type_wovaf7_k$();
              throw new NoTransformationFoundException(this._this__u8e3s4__1.get_response_xlk07e_k$(), from, to);
            }

            this.tmp$ret$01__1 = result;
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(7);
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.tmp$ret$01__1;
            complete(this._this__u8e3s4__1.get_response_xlk07e_k$());
            ;
            return tmp_2;
          case 8:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              cancel(this._this__u8e3s4__1.get_response_xlk07e_k$(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 9:
            this.set_exceptionState_s9sevl_k$(10);
            var t = this.get_exception_x0n6w6_k$();
            complete(this._this__u8e3s4__1.get_response_xlk07e_k$());
            ;
            throw t;
          case 10:
            throw this.get_exception_x0n6w6_k$();
          case 11:
            complete(this._this__u8e3s4__1.get_response_xlk07e_k$());
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function $bodyCOROUTINE$2(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.info_1 = info;
  }
  $bodyCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.bodyNullable_ld5qr1_k$(this.info_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ensureNotNull(ARGUMENT);
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
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.client_1 = client;
    this.received_1 = atomic$boolean$1(false);
    this.allowDoubleReceive_1 = false;
  }
  HttpClientCall.prototype.get_client_byfnx0_k$ = function () {
    return this.client_1;
  };
  HttpClientCall.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.get_response_xlk07e_k$().get_coroutineContext_115oqo_k$();
  };
  HttpClientCall.prototype.get_attributes_dgqof4_k$ = function () {
    return this.get_request_jdwg4m_k$().get_attributes_dgqof4_k$();
  };
  HttpClientCall.prototype.set_request_e79eyj_k$ = function (_set____db54di) {
    this.request_1 = _set____db54di;
  };
  HttpClientCall.prototype.get_request_jdwg4m_k$ = function () {
    var tmp = this.request_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.set_response_68z8hr_k$ = function (_set____db54di) {
    this.response_1 = _set____db54di;
  };
  HttpClientCall.prototype.get_response_xlk07e_k$ = function () {
    var tmp = this.response_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.get_allowDoubleReceive_um1gnm_k$ = function () {
    return this.allowDoubleReceive_1;
  };
  HttpClientCall.prototype.getResponseContent_i44bm0_k$ = function ($cont) {
    return this.get_response_xlk07e_k$().get_content_h02jrk_k$();
  };
  HttpClientCall.prototype.bodyNullable_ld5qr1_k$ = function (info, $cont) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpClientCall.prototype.body_6b19f3_k$ = function (info, $cont) {
    var tmp = new $bodyCOROUTINE$2(this, info, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.get_request_jdwg4m_k$().get_url_18iuii_k$() + ', ' + this.get_response_xlk07e_k$().get_status_jnf6d7_k$() + ']';
  };
  HttpClientCall.prototype.setResponse_mhtqkc_k$ = function (response) {
    this.response_1 = response;
  };
  HttpClientCall.prototype.setRequest_eln7k0_k$ = function (request) {
    this.request_1 = request;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.message_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.get_message_h23axq_k$();
    }
  });
  function NoTransformationFoundException$message$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var key = _name_for_destructuring_parameter_0__wldtmu.component1_7eebsc_k$();
    var value = _name_for_destructuring_parameter_0__wldtmu.component2_7eebsb_k$();
    return key + ': ' + value + '\n';
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).get_url_18iuii_k$();
    var tmp_1 = response.get_status_jnf6d7_k$();
    var tmp_2 = flattenEntries(response.get_headers_ef25jx_k$());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda, 31, null) + '\n    ';
    tmp.message_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.get_message_h23axq_k$();
    }
  });
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function _get_responseBody__mzdrmw($this) {
    return $this.responseBody_1;
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.responseBody_1 = responseBody;
    this.set_request_e79eyj_k$(new SavedHttpRequest(this, request));
    this.set_response_68z8hr_k$(new SavedHttpResponse(this, this.responseBody_1, response));
    this.allowDoubleReceive_2 = true;
  }
  SavedHttpCall.prototype.getResponseContent_i44bm0_k$ = function ($cont) {
    return ByteReadChannel_0(this.responseBody_1);
  };
  SavedHttpCall.prototype.get_allowDoubleReceive_um1gnm_k$ = function () {
    return this.allowDoubleReceive_2;
  };
  function SavedHttpRequest(call, origin) {
    this.call_1 = call;
    this.$$delegate_0__1 = origin;
  }
  SavedHttpRequest.prototype.get_call_wojxrb_k$ = function () {
    return this.call_1;
  };
  SavedHttpRequest.prototype.get_attributes_dgqof4_k$ = function () {
    return this.$$delegate_0__1.get_attributes_dgqof4_k$();
  };
  SavedHttpRequest.prototype.get_content_h02jrk_k$ = function () {
    return this.$$delegate_0__1.get_content_h02jrk_k$();
  };
  SavedHttpRequest.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.$$delegate_0__1.get_coroutineContext_115oqo_k$();
  };
  SavedHttpRequest.prototype.get_headers_ef25jx_k$ = function () {
    return this.$$delegate_0__1.get_headers_ef25jx_k$();
  };
  SavedHttpRequest.prototype.get_method_gl8esq_k$ = function () {
    return this.$$delegate_0__1.get_method_gl8esq_k$();
  };
  SavedHttpRequest.prototype.get_url_18iuii_k$ = function () {
    return this.$$delegate_0__1.get_url_18iuii_k$();
  };
  function _get_context__ps0bpe($this) {
    return $this.context_1;
  }
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.call_1 = call;
    var tmp = this;
    tmp.context_1 = Job$default(null, 1, null);
    this.status_1 = origin.get_status_jnf6d7_k$();
    this.version_1 = origin.get_version_72w4j3_k$();
    this.requestTime_1 = origin.get_requestTime_wwxhg3_k$();
    this.responseTime_1 = origin.get_responseTime_scfvg7_k$();
    this.headers_1 = origin.get_headers_ef25jx_k$();
    this.coroutineContext_1 = origin.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(this.context_1);
    this.content_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.get_call_wojxrb_k$ = function () {
    return this.call_1;
  };
  SavedHttpResponse.prototype.get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  SavedHttpResponse.prototype.get_version_72w4j3_k$ = function () {
    return this.version_1;
  };
  SavedHttpResponse.prototype.get_requestTime_wwxhg3_k$ = function () {
    return this.requestTime_1;
  };
  SavedHttpResponse.prototype.get_responseTime_scfvg7_k$ = function () {
    return this.responseTime_1;
  };
  SavedHttpResponse.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  SavedHttpResponse.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  SavedHttpResponse.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $saveCOROUTINE$3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this._this__u8e3s4__1.get_response_xlk07e_k$().get_content_h02jrk_k$();
            suspendResult = tmp_0.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this._this__u8e3s4__1.get_client_byfnx0_k$(), this._this__u8e3s4__1.get_request_jdwg4m_k$(), this._this__u8e3s4__1.get_response_xlk07e_k$(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function _get_callContext__j3nl8g($this) {
    return $this.callContext_1;
  }
  function _get_listener__4cngyf($this) {
    return $this.listener_1;
  }
  function _get_content__ps04ag($this) {
    return $this.content_1;
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.$delegate_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.invoke_65o7wc_k$ = function ($this$writer, $cont) {
    var tmp = this.create_4ctjxj_k$($this$writer, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ObservableContent$content$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_65o7wc_k$((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$delegate_1.writeTo_wvkb45_k$(this.$this$writer_1.get_channel_dhi7tm_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  ObservableContent$content$slambda.prototype.create_4ctjxj_k$ = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.$delegate_1, completion);
    i.$this$writer_1 = $this$writer;
    return i;
  };
  ObservableContent$content$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4ctjxj_k$((!(value == null) ? isInterface(value, WriterScope) : false) ? value : THROW_CCE(), completion);
  };
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.invoke_65o7wc_k$($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.callContext_1 = callContext;
    this.listener_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.bytes_1k3k2z_k$());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().get_Empty_i9b85g_k$();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.readFrom_ecr4ww_k$();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.callContext_1, true, ObservableContent$content$slambda_0(delegate, null)).get_channel_dhi7tm_k$();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.content_1 = tmp_0;
    this.delegate_1 = delegate;
  }
  ObservableContent.prototype.get_contentType_7git4a_k$ = function () {
    return this.delegate_1.get_contentType_7git4a_k$();
  };
  ObservableContent.prototype.get_contentLength_a5o8yy_k$ = function () {
    return this.delegate_1.get_contentLength_a5o8yy_k$();
  };
  ObservableContent.prototype.get_status_jnf6d7_k$ = function () {
    return this.delegate_1.get_status_jnf6d7_k$();
  };
  ObservableContent.prototype.get_headers_ef25jx_k$ = function () {
    return this.delegate_1.get_headers_ef25jx_k$();
  };
  ObservableContent.prototype.getProperty_nib0li_k$ = function (key) {
    return this.delegate_1.getProperty_nib0li_k$(key);
  };
  ObservableContent.prototype.setProperty_lh2c3l_k$ = function (key, value) {
    return this.delegate_1.setProperty_lh2c3l_k$(key, value);
  };
  ObservableContent.prototype.readFrom_ecr4ww_k$ = function () {
    return observable(this.content_1, this.callContext_1, this.get_contentLength_a5o8yy_k$(), this.listener_1);
  };
  function get_CALL_COROUTINE() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.get_monitor_lpmkc1_k$().raise_ojaa37_k$(get_HttpResponseCancelled(), $response);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1_0($this) {
    var tmp0_safe_receiver = $this.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isActive_quafmh_k$();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.get_requiredCapabilities_jn0wxu_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var requestedExtension = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.get_supportedCapabilities_gwz15x_k$().contains_2ehdt1_k$(requestedExtension);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        tmp$ret$0 = "Engine doesn't support " + requestedExtension;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.$client_1 = $client;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, content, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, content, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpClientEngine$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.takeFromWithExecutionContext_d233rf_k$(this.$this$intercept_1.get_context_h02k06_k$());
            ;
            var tmp0_subject = this.content_1;
            if (tmp0_subject == null) {
              tmp0_apply.set_body_slzaj6_k$(NullBody_getInstance());
              var tmp_1 = JsType_getInstance();
              var tmp_2 = PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$();
              var tmp_3;
              try {
                tmp_3 = createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_1, tmp_2, tmp_3));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.set_body_slzaj6_k$(this.content_1);
                tmp0_apply.set_bodyType_oab65z_k$(null);
              } else {
                tmp0_apply.set_body_slzaj6_k$(this.content_1);
                var tmp_5 = JsType_getInstance();
                var tmp_6 = PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$();
                var tmp_7;
                try {
                  tmp_7 = createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    tmp_8 = null;
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_5, tmp_6, tmp_7));
              }
            }

            tmp_0.builder0__1 = tmp0_apply;
            this.$client_1.get_monitor_lpmkc1_k$().raise_ojaa37_k$(get_HttpRequestIsReadyForSending(), this.builder0__1);
            var tmp_9 = this;
            var tmp1_apply = this.builder0__1.build_1k0s4u_k$();
            tmp1_apply.get_attributes_dgqof4_k$().put_btom12_k$(get_CLIENT_CONFIG(), this.$client_1.get_config_c0698r_k$());
            ;
            tmp_9.requestData1__1 = tmp1_apply;
            validateHeaders(this.requestData1__1);
            checkExtensions(this.this$0__1, this.requestData1__1);
            this.set_state_a96kl8_k$(1);
            suspendResult = executeWithinCallContext(this.this$0__1, this.requestData1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.responseData2__1 = suspendResult;
            this.call3__1 = HttpClientCall_init_$Create$(this.$client_1, this.requestData1__1, this.responseData2__1);
            this.response4__1 = this.call3__1.get_response_xlk07e_k$();
            this.$client_1.get_monitor_lpmkc1_k$().raise_ojaa37_k$(get_HttpResponseReceived(), this.response4__1);
            var tmp_10 = get_job(this.response4__1.get_coroutineContext_115oqo_k$());
            tmp_10.invokeOnCompletion_t2apld_k$(HttpClientEngine$install$slambda$lambda(this.$client_1, this.response4__1));
            ;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.call3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpClientEngine$install$slambda.prototype.create_300ycv_k$ = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.$client_1, this.this$0__1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.content_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.invoke_63ydys_k$($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.this$0__1 = this$0;
    this.$requestData_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.invoke_1yhb3o_k$ = function ($this$async, $cont) {
    var tmp = this.create_b6qu53_k$($this$async, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_1yhb3o_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            if (_get_closed__iwkfs1_0(this.this$0__1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.execute_95skru_k$(this.$requestData_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  HttpClientEngine$executeWithinCallContext$slambda.prototype.create_b6qu53_k$ = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.this$0__1, this.$requestData_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.invoke_1yhb3o_k$($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.requestData_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$4.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = createCallContext(this._this__u8e3s4__1, this.requestData_1.get_executionContext_yb2vgg_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.callContext0__1 = suspendResult;
            this.context1__1 = this.callContext0__1.plus_rgw9wi_k$(new KtorCallContextElement(this.callContext0__1));
            this.set_state_a96kl8_k$(2);
            suspendResult = async$default(this._this__u8e3s4__1, this.context1__1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this._this__u8e3s4__1, this.requestData_1, null), 2, null).await_xhs9og_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.get_headers_ef25jx_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = requestHeaders.names_1q9mbs_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      tmp$ret$0 = HttpHeaders_getInstance().get_UnsafeHeadersList_16nuob_k$().contains_2ehdt1_k$(element);
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !unsafeRequestHeaders.isEmpty_y1axqb_k$();
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(callJob).plus_rgw9wi_k$(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.get_context_h02k06_k$();
      var tmp0_elvis_lhs = tmp$ret$0.get_j1ktw6_k$(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.invokeOnCompletion$default_7q548c_k$(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.invokeOnCompletion_t2apld_k$(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function HttpClientEngineFactory$create$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientEngineFactory() {
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.cancel_4b7aim_k$(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.dispose_3n44we_k$();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function init_properties_HttpClientEngine_kt_umcrvf() {
    if (properties_initialized_HttpClientEngine_kt_5uiebb) {
    } else {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    ClientEngineClosedException.call($this, cause);
    return $this;
  }
  function ClientEngineClosedException_init_$Create$(cause, $mask0, $marker) {
    var tmp = ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, Object.create(ClientEngineClosedException.prototype));
    captureStack(tmp, ClientEngineClosedException_init_$Create$);
    return tmp;
  }
  function ClientEngineClosedException(cause) {
    IllegalStateException_init_$Init$_0('Client already closed', this);
    this.cause_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.get_cause_iplhs0_k$();
    }
  });
  function _get_engineName__3bxgoy($this) {
    return $this.engineName_1;
  }
  function _get_closed__iwkfs1_1($this) {
    return $this.closed_1;
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).plus_rgw9wi_k$(this$0.get_dispatcher_usy1bk_k$()).plus_rgw9wi_k$(new CoroutineName(this$0.engineName_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.get_dispatcher_usy1bk_k$());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.engineName_1 = engineName;
    this.closed_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.coroutineContext$delegate_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.get_coroutineContext_115oqo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = coroutineContext$factory();
    tmp$ret$0 = this.coroutineContext$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.close_ymq55z_k$ = function () {
    if (!this.closed_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.complete_9ww6vb_k$();
    requestJob.invokeOnCompletion_t2apld_k$(HttpClientEngineBase$close$lambda(this));
  };
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher) {
        _this__u8e3s4.close_ymq55z_k$();
      } else {
        if (isInterface(tmp0_subject, Closeable)) {
          _this__u8e3s4.close_ymq55z_k$();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
      } else {
        throw $p;
      }
    }
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.get_coroutineContext_115oqo_k$();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  function get_DEFAULT_CAPABILITIES() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return DEFAULT_CAPABILITIES;
  }
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_5());
    }
  }
  function HttpClientEngineConfig() {
    this.threadsCount_1 = 4;
    this.pipelining_1 = false;
    this.proxy_1 = null;
  }
  HttpClientEngineConfig.prototype.set_threadsCount_gnbglv_k$ = function (_set____db54di) {
    this.threadsCount_1 = _set____db54di;
  };
  HttpClientEngineConfig.prototype.get_threadsCount_8ubz8v_k$ = function () {
    return this.threadsCount_1;
  };
  HttpClientEngineConfig.prototype.set_pipelining_kutk0d_k$ = function (_set____db54di) {
    this.pipelining_1 = _set____db54di;
  };
  HttpClientEngineConfig.prototype.get_pipelining_x1t9pk_k$ = function () {
    return this.pipelining_1;
  };
  HttpClientEngineConfig.prototype.set_proxy_ryday9_k$ = function (_set____db54di) {
    this.proxy_1 = _set____db54di;
  };
  HttpClientEngineConfig.prototype.get_proxy_ix1jyd_k$ = function () {
    return this.proxy_1;
  };
  function get_KTOR_DEFAULT_USER_AGENT() {
    init_properties_Utils_kt_jyhfj1();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    init_properties_Utils_kt_jyhfj1();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_8();
    this.callContext_1 = callContext;
  }
  KtorCallContextElement.prototype.get_callContext_mskb9k_k$ = function () {
    return this.callContext_1;
  };
  KtorCallContextElement.prototype.get_key_18j28a_k$ = function () {
    return Companion_getInstance_8();
  };
  function attachToUserJob(callJob, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.get_context_h02k06_k$();
    var tmp0_elvis_lhs = tmp$ret$0.get_j1ktw6_k$(Key_getInstance());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var userJob = tmp;
    var cleanupHandler = userJob.invokeOnCompletion$default_7q548c_k$(true, false, attachToUserJob$lambda(callJob), 2, null);
    callJob.invokeOnCompletion_t2apld_k$(attachToUserJob$lambda_0(cleanupHandler));
    return Unit_getInstance();
  }
  function callContext($cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.get_context_h02k06_k$();
    return ensureNotNull(tmp$ret$0.get_j1ktw6_k$(Companion_getInstance_8())).callContext_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    init_properties_Utils_kt_jyhfj1();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.forEach_arwel4_k$(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.get_4u8u51_k$(HttpHeaders_getInstance().get_UserAgent_o827rj_k$()) == null ? content.get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_UserAgent_o827rj_k$()) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().get_UserAgent_o827rj_k$(), get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.get_contentType_7git4a_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$()) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.get_4u8u51_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$()) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.get_contentLength_a5o8yy_k$();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_ContentLength_3209rq_k$()) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.get_4u8u51_k$(HttpHeaders_getInstance().get_ContentLength_3209rq_k$()) : tmp5_elvis_lhs;
    var tmp6_safe_receiver = type;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = block(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$(), tmp6_safe_receiver);
    }
    var tmp7_safe_receiver = length;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = block(HttpHeaders_getInstance().get_ContentLength_3209rq_k$(), tmp7_safe_receiver);
    }
  }
  function needUserAgent() {
    init_properties_Utils_kt_jyhfj1();
    return !PlatformUtils_getInstance().get_IS_BROWSER_e36mbg_k$();
  }
  function attachToUserJob$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.cancel_4b7aim_k$(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function attachToUserJob$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.dispose_3n44we_k$();
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.appendAll_4ib0tg_k$($requestHeaders);
      $this$buildHeaders.appendAll_4ib0tg_k$($content.get_headers_ef25jx_k$());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().get_ContentLength_3209rq_k$() === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().get_ContentType_z1j0sq_k$() === key) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (get_DATE_HEADERS().contains_2ehdt1_k$(key)) {
        var tmp0_iterator = values.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'io.ktor.client.engine.mergeHeaders.<anonymous>.<anonymous>' call
          $block(key, element);
        }
        tmp_1 = Unit_getInstance();
      } else {
        tmp_1 = $block(key, joinToString$default(values, ',', null, null, 0, null, null, 62, null));
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function init_properties_Utils_kt_jyhfj1() {
    if (properties_initialized_Utils_kt_xvi83j) {
    } else {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'Ktor client';
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().get_Date_wo05cn_k$(), HttpHeaders_getInstance().get_Expires_755s8b_k$(), HttpHeaders_getInstance().get_LastModified_vddkig_k$(), HttpHeaders_getInstance().get_IfModifiedSince_aujsxh_k$(), HttpHeaders_getInstance().get_IfUnmodifiedSince_b7s52m_k$()]);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.get_requestPipeline_5d9z6w_k$().insertPhaseAfter_v4shih_k$(Phases_getInstance().get_Render_3swp1b_k$(), observableContentPhase);
    var tmp = scope.get_requestPipeline_5d9z6w_k$();
    tmp.intercept_hnj3e1_k$(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp_0 = scope.get_receivePipeline_3qwhq4_k$();
    var tmp_1 = Phases_getInstance_2().get_After_i6zngz_k$();
    tmp_0.intercept_hnj3e1_k$(tmp_1, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.key_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin.prototype.prepare_lhztj4_k$ = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_lhztj4_k$(block);
  };
  Plugin.prototype.install_p5quq_k$ = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_p5quq_k$(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, content, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, content, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  BodyProgress$handle$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.$this$intercept_1.get_context_h02k06_k$().get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.listener0__1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.content_1;
            tmp_2.observableContent1__1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.$this$intercept_1.get_context_h02k06_k$().get_executionContext_yb2vgg_k$(), this.listener0__1);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.observableContent1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
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
  BodyProgress$handle$slambda.prototype.create_300ycv_k$ = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.$this$intercept_1 = $this$intercept;
    i.content_1 = content;
    return i;
  };
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.invoke_63ydys_k$($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.invoke_5zvy3t_k$ = function ($this$intercept, response, $cont) {
    var tmp = this.create_poxoxm_k$($this$intercept, response, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  BodyProgress$handle$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_5zvy3t_k$(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.response_1.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.listener0__1 = tmp_1;
            this.observableResponse1__1 = withObservableDownload(this.response_1, this.listener0__1);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.observableResponse1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
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
  BodyProgress$handle$slambda_1.prototype.create_poxoxm_k$ = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.$this$intercept_1 = $this$intercept;
    i.response_1 = response;
    return i;
  };
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.invoke_5zvy3t_k$($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.get_content_h02jrk_k$(), _this__u8e3s4.get_coroutineContext_115oqo_k$(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4, observableByteChannel);
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function init_properties_BodyProgress_kt_2jnetn() {
    if (properties_initialized_BodyProgress_kt_pmfrhr) {
    } else {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_LOGGER() {
    init_properties_DefaultRequest_kt_qluhro();
    return LOGGER;
  }
  var LOGGER;
  var properties_initialized_DefaultRequest_kt_au5efk;
  function init_properties_DefaultRequest_kt_qluhro() {
    if (properties_initialized_DefaultRequest_kt_au5efk) {
    } else {
      properties_initialized_DefaultRequest_kt_au5efk = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultRequest');
    }
  }
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER_0() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return LOGGER_0;
  }
  var LOGGER_0;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function get_BODY_FAILED_DECODING() {
    return BODY_FAILED_DECODING;
  }
  var BODY_FAILED_DECODING;
  function ResponseException_init_$Init$(response, $this) {
    ResponseException.call($this, response, '<no response text provided>');
    return $this;
  }
  function ResponseException_init_$Create$(response) {
    var tmp = ResponseException_init_$Init$(response, Object.create(ResponseException.prototype));
    captureStack(tmp, ResponseException_init_$Create$);
    return tmp;
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.response_1 = response;
    captureStack(this, ResponseException);
  }
  ResponseException.prototype.get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  function RedirectResponseException_init_$Init$(response, $this) {
    RedirectResponseException.call($this, response, '<no response text provided>');
    return $this;
  }
  function RedirectResponseException_init_$Create$(response) {
    var tmp = RedirectResponseException_init_$Init$(response, Object.create(RedirectResponseException.prototype));
    captureStack(tmp, RedirectResponseException_init_$Create$);
    return tmp;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.message_1 = 'Unhandled redirect: ' + response.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_method_gl8esq_k$().get_value_j01efc_k$() + ' ' + response.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_url_18iuii_k$() + '. ' + ('Status: ' + response.get_status_jnf6d7_k$() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.get_message_h23axq_k$();
    }
  });
  function ClientRequestException_init_$Init$(response, $this) {
    ClientRequestException.call($this, response, '<no response text provided>');
    return $this;
  }
  function ClientRequestException_init_$Create$(response) {
    var tmp = ClientRequestException_init_$Init$(response, Object.create(ClientRequestException.prototype));
    captureStack(tmp, ClientRequestException_init_$Create$);
    return tmp;
  }
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.message_1 = 'Client request(' + response.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_method_gl8esq_k$().get_value_j01efc_k$() + ' ' + response.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_url_18iuii_k$() + ') ' + ('invalid: ' + response.get_status_jnf6d7_k$() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.get_message_h23axq_k$();
    }
  });
  function ServerResponseException_init_$Init$(response, $this) {
    ServerResponseException.call($this, response, '<no response text provided>');
    return $this;
  }
  function ServerResponseException_init_$Create$(response) {
    var tmp = ServerResponseException_init_$Init$(response, Object.create(ServerResponseException.prototype));
    captureStack(tmp, ServerResponseException_init_$Create$);
    return tmp;
  }
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.message_1 = 'Server error(' + response.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_method_gl8esq_k$().get_value_j01efc_k$() + ' ' + response.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_url_18iuii_k$() + ': ' + ('' + response.get_status_jnf6d7_k$() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.get_message_h23axq_k$();
    }
  });
  function get_NO_RESPONSE_TEXT() {
    return NO_RESPONSE_TEXT;
  }
  var NO_RESPONSE_TEXT;
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.invoke_t8ni9j_k$ = function (response, $cont) {
    var tmp = this.create_yw8py6_k$(response, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_t8ni9j_k$(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.expectSuccess0__1 = this.response_1.get_call_wojxrb_k$().get_attributes_dgqof4_k$().get_ny5huj_k$(get_ExpectSuccessAttributeKey());
            if (!this.expectSuccess0__1) {
              get_LOGGER_0().trace_jqeghf_k$('Skipping default response validation for ' + this.response_1.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_url_18iuii_k$());
              return Unit_getInstance();
            }

            this.statusCode1__1 = this.response_1.get_status_jnf6d7_k$().get_value_j01efc_k$();
            this.originCall2__1 = this.response_1.get_call_wojxrb_k$();
            if (this.statusCode1__1 < 300 ? true : this.originCall2__1.get_attributes_dgqof4_k$().contains_z4wlmt_k$(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.set_state_a96kl8_k$(1);
            suspendResult = save(this.originCall2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp0_apply3__1 = suspendResult;
            this.tmp0_apply3__1.get_attributes_dgqof4_k$().put_btom12_k$(get_ValidateMark(), Unit_getInstance());
            ;
            this.exceptionCall4__1 = this.tmp0_apply3__1;
            this.exceptionResponse5__1 = this.exceptionCall4__1.get_response_xlk07e_k$();
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(2);
            suspendResult = bodyAsText$default(this.exceptionResponse5__1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.TRY_RESULT6__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof MalformedInputException) {
              var _ = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              tmp_1.TRY_RESULT6__1 = '<body failed decoding>';
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var exceptionResponseText = this.TRY_RESULT6__1;
            var tmp0_subject = this.statusCode1__1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.exceptionResponse5__1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.exceptionResponse5__1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.exceptionResponse5__1, exceptionResponseText) : new ResponseException(this.exceptionResponse5__1, exceptionResponseText);
            get_LOGGER_0().trace_jqeghf_k$('Default response validation for ' + this.response_1.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_url_18iuii_k$() + ' failed with ' + exception);
            throw exception;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.create_yw8py6_k$ = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.response_1 = response;
    return i;
  };
  addDefaultResponseValidation$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_yw8py6_k$(value instanceof HttpResponse ? value : THROW_CCE(), completion);
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.invoke_t8ni9j_k$(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.set_expectSuccess_k3nqik_k$($this_addDefaultResponseValidation.get_expectSuccess_uic3pb_k$());
      $this$HttpResponseValidator.validateResponse_nmkabc_k$(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_1() {
    init_properties_DefaultTransform_kt_lghdhr();
    return LOGGER_1;
  }
  var LOGGER_1;
  function defaultTransformers(_this__u8e3s4) {
    init_properties_DefaultTransform_kt_lghdhr();
    var tmp = _this__u8e3s4.get_requestPipeline_5d9z6w_k$();
    var tmp_0 = Phases_getInstance().get_Render_3swp1b_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, defaultTransformers$slambda_0(null));
    var tmp_1 = _this__u8e3s4.get_responsePipeline_xbi790_k$();
    var tmp_2 = Phases_getInstance_1().get_Parse_if5ca2_k$();
    tmp_1.intercept_hnj3e1_k$(tmp_2, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.$body_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.contentType_1 = tmp0_elvis_lhs == null ? Application_getInstance().get_OctetStream_nfka06_k$() : tmp0_elvis_lhs;
    this.contentLength_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  defaultTransformers$1$content$1.prototype.get_contentLength_a5o8yy_k$ = function () {
    return this.contentLength_1;
  };
  defaultTransformers$1$content$1.prototype.bytes_1k3k2z_k$ = function () {
    return this.$body_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.$body_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.get_context_h02k06_k$().get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_ContentLength_3209rq_k$());
    tmp.contentLength_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.contentType_1 = tmp0_elvis_lhs == null ? Application_getInstance().get_OctetStream_nfka06_k$() : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.get_contentLength_a5o8yy_k$ = function () {
    return this.contentLength_1;
  };
  defaultTransformers$1$content$2.prototype.get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  defaultTransformers$1$content$2.prototype.readFrom_ecr4ww_k$ = function () {
    return this.$body_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, body, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, body, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  defaultTransformers$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (this.$this$intercept_1.get_context_h02k06_k$().get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_Accept_4a5gpb_k$()) == null) {
              this.$this$intercept_1.get_context_h02k06_k$().get_headers_ef25jx_k$().append_ptbgmx_k$(HttpHeaders_getInstance().get_Accept_4a5gpb_k$(), '*/*');
            }

            this.contentType0__1 = contentType(this.$this$intercept_1.get_context_h02k06_k$());
            var tmp_0 = this;
            var tmp0_subject = this.body_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.contentType0__1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().get_Plain_ifc0ap_k$() : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.body_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.contentType0__1, this.body_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.$this$intercept_1, this.contentType0__1, this.body_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.body_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.contentType0__1, this.$this$intercept_1.get_context_h02k06_k$(), this.body_1);
                  }
                }
              }
            }

            tmp_0.content1__1 = tmp_1;
            var tmp2_safe_receiver = this.content1__1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_contentType_7git4a_k$()) == null)) {
              this.$this$intercept_1.get_context_h02k06_k$().get_headers_ef25jx_k$().remove_d85afi_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$());
              get_LOGGER_1().trace_jqeghf_k$('Transformed with default transformers request body for ' + this.$this$intercept_1.get_context_h02k06_k$().get_url_18iuii_k$() + ' from ' + getKClassFromExpression(this.body_1));
              this.set_state_a96kl8_k$(1);
              suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.content1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 1:
            ;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  defaultTransformers$slambda.prototype.create_300ycv_k$ = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.$this$intercept_1 = $this$intercept;
    i.body_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.invoke_63ydys_k$($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.$body_1 = $body;
    this.$response_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.invoke_65o7wc_k$ = function ($this$writer, $cont) {
    var tmp = this.create_4ctjxj_k$($this$writer, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  defaultTransformers$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_65o7wc_k$((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(2);
            suspendResult = copyTo(this.$body_1, this.$this$writer_1.get_channel_dhi7tm_k$(), Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.tmp$ret$00__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof CancellationException) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              cancel_0(this.$response_1, cause);
              throw cause;
            } else {
              var tmp_3 = this.get_exception_x0n6w6_k$();
              if (tmp_3 instanceof Error) {
                var cause_0 = this.get_exception_x0n6w6_k$();
                var tmp_4 = this;
                cancel(this.$response_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.get_exception_x0n6w6_k$();
              }
            }

            break;
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            complete(this.$response_1);
            ;
            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            complete(this.$response_1);
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  defaultTransformers$slambda$slambda.prototype.create_4ctjxj_k$ = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.$body_1, this.$response_1, completion);
    i.$this$writer_1 = $this$writer;
    return i;
  };
  defaultTransformers$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4ctjxj_k$((!(value == null) ? isInterface(value, WriterScope) : false) ? value : THROW_CCE(), completion);
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.invoke_65o7wc_k$($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.complete_9ww6vb_k$();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.invoke_sqq52a_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.create_u7w3m5_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  defaultTransformers$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_sqq52a_k$(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(11);
            this.info0__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
            this.body1__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
            var tmp_0 = this.body1__1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.response2__1 = this.$this$intercept_1.get_context_h02k06_k$().get_response_xlk07e_k$();
            this.tmp0_subject3__1 = this.info0__1.get_type_wovaf7_k$();
            if (this.tmp0_subject3__1.equals(getKClass(Unit))) {
              cancel_1(this.body1__1);
              this.set_state_a96kl8_k$(9);
              suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(new HttpResponseContainer(this.info0__1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tmp0_subject3__1.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
                this.set_state_a96kl8_k$(7);
                suspendResult = this.body1__1.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.tmp0_subject3__1.equals(getKClass(ByteReadPacket)) ? true : this.tmp0_subject3__1.equals(getKClass(Input))) {
                  this.set_state_a96kl8_k$(5);
                  suspendResult = this.body1__1.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.tmp0_subject3__1.equals(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$())) {
                    this.set_state_a96kl8_k$(3);
                    suspendResult = toByteArray(this.body1__1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.tmp0_subject3__1.equals(getKClass(ByteReadChannel))) {
                      this.responseJobHolder5__1 = Job(this.response2__1.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this.response2__1.get_coroutineContext_115oqo_k$();
                      var tmp1_also = writer$default(this.$this$intercept_1, tmp_2, false, defaultTransformers$slambda$slambda_0(this.body1__1, this.response2__1, null), 2, null);
                      tmp1_also.invokeOnCompletion_t2apld_k$(defaultTransformers$slambda$lambda(this.responseJobHolder5__1));
                      tmp_1.channel6__1 = tmp1_also.get_channel_dhi7tm_k$();
                      this.set_state_a96kl8_k$(2);
                      suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(new HttpResponseContainer(this.info0__1, this.channel6__1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.tmp0_subject3__1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.body1__1);
                        this.set_state_a96kl8_k$(1);
                        suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(new HttpResponseContainer(this.info0__1, this.response2__1.get_status_jnf6d7_k$()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.WHEN_RESULT4__1 = null;
                        this.set_state_a96kl8_k$(10);
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.WHEN_RESULT4__1 = suspendResult;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 2:
            this.WHEN_RESULT4__1 = suspendResult;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 3:
            this.bytes7__1 = suspendResult;
            this.contentLength8__1 = contentLength(this.response2__1);
            this.notEncoded9__1 = !PlatformUtils_getInstance().get_IS_BROWSER_e36mbg_k$() ? this.response2__1.get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_ContentEncoding_klk8o3_k$()) == null : false;
            if ((this.notEncoded9__1 ? !(this.contentLength8__1 == null) : false) ? this.contentLength8__1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 : false) {
              var tmp0_check = this.bytes7__1.length === this.contentLength8__1.toInt_1tsl84_k$();
              if (!tmp0_check) {
                var message = 'Expected ' + toString_0(this.contentLength8__1) + ', actual ' + this.bytes7__1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.set_state_a96kl8_k$(4);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(new HttpResponseContainer(this.info0__1, this.bytes7__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.WHEN_RESULT4__1 = suspendResult;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 5:
            this.ARGUMENT10__1 = suspendResult;
            this.ARGUMENT11__1 = new HttpResponseContainer(this.info0__1, this.ARGUMENT10__1);
            this.set_state_a96kl8_k$(6);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.ARGUMENT11__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.WHEN_RESULT4__1 = suspendResult;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 7:
            this.ARGUMENT12__1 = suspendResult;
            var tmp_3 = this;
            tmp_3.ARGUMENT13__1 = this.ARGUMENT12__1.readText$default_mjq276_k$(0, 0, 3, null);
            this.ARGUMENT14__1 = toInt(this.ARGUMENT13__1);
            this.ARGUMENT15__1 = new HttpResponseContainer(this.info0__1, this.ARGUMENT14__1);
            this.set_state_a96kl8_k$(8);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.ARGUMENT15__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.WHEN_RESULT4__1 = suspendResult;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 9:
            this.WHEN_RESULT4__1 = suspendResult;
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 10:
            var result = this.WHEN_RESULT4__1;
            if (!(result == null)) {
              get_LOGGER_1().trace_jqeghf_k$('Transformed with default transformers response body ' + ('for ' + this.$this$intercept_1.get_context_h02k06_k$().get_request_jdwg4m_k$().get_url_18iuii_k$() + ' to ' + this.info0__1.get_type_wovaf7_k$()));
            }

            return Unit_getInstance();
          case 11:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  defaultTransformers$slambda_1.prototype.create_u7w3m5_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.$this$intercept_1 = $this$intercept;
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.invoke_sqq52a_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function init_properties_DefaultTransform_kt_lghdhr() {
    if (properties_initialized_DefaultTransform_kt_ossax9) {
    } else {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_2() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.expectSuccess_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, it, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpCallValidator$Companion$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.$this$intercept_1.get_context_h02k06_k$().get_attributes_dgqof4_k$();
            var tmp_1 = get_ExpectSuccessAttributeKey();
            tmp_0.computeIfAbsent_ywdpog_k$(tmp_1, HttpCallValidator$Companion$install$slambda$lambda(this.$plugin_1));
            ;
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(5);
            return Unit_getInstance();
          case 3:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              this.cause0__1 = this.get_exception_x0n6w6_k$();
              this.unwrappedCause1__1 = unwrapCancellationException(this.cause0__1);
              this.set_state_a96kl8_k$(4);
              suspendResult = processException(this.$plugin_1, this.unwrappedCause1__1, HttpRequest(this.$this$intercept_1.get_context_h02k06_k$()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 4:
            throw this.unwrappedCause1__1;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda.prototype.create_300ycv_k$ = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.it_1 = it;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.invoke_63ydys_k$($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.invoke_sqq52a_k$ = function ($this$intercept, container, $cont) {
    var tmp = this.create_u7w3m5_k$($this$intercept, container, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_sqq52a_k$(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.container_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(5);
            return Unit_getInstance();
          case 3:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              this.cause0__1 = this.get_exception_x0n6w6_k$();
              this.unwrappedCause1__1 = unwrapCancellationException(this.cause0__1);
              this.set_state_a96kl8_k$(4);
              suspendResult = processException(this.$plugin_1, this.unwrappedCause1__1, this.$this$intercept_1.get_context_h02k06_k$().get_request_jdwg4m_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 4:
            throw this.unwrappedCause1__1;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.create_u7w3m5_k$ = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.container_1 = container;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.invoke_sqq52a_k$($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.invoke_dqudng_k$ = function ($this$intercept, request, $cont) {
    var tmp = this.create_q4qdwm_k$($this$intercept, request, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.invoke_dqudng_k$(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.execute_z0ufkc_k$(this.request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.call0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = validateResponse(this.$plugin_1, this.call0__1.get_response_xlk07e_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.call0__1;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.create_q4qdwm_k$ = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.request_1 = request;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.invoke_dqudng_k$($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _get_responseValidators__ie7id3($this) {
    return $this.responseValidators_1;
  }
  function _get_callExceptionHandlers__qm4wl3($this) {
    return $this.callExceptionHandlers_1;
  }
  function _get_expectSuccess__nyy17r($this) {
    return $this.expectSuccess_1;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.responseValidators_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.responseExceptionHandlers_1 = tmp$ret$1;
    this.expectSuccess_1 = true;
  }
  Config.prototype.get_responseValidators_vw1i4r_k$ = function () {
    return this.responseValidators_1;
  };
  Config.prototype.get_responseExceptionHandlers_tmlc0i_k$ = function () {
    return this.responseExceptionHandlers_1;
  };
  Config.prototype.set_expectSuccess_k3nqik_k$ = function (_set____db54di) {
    this.expectSuccess_1 = _set____db54di;
  };
  Config.prototype.get_expectSuccess_uic3pb_k$ = function () {
    return this.expectSuccess_1;
  };
  Config.prototype.handleResponseException_wrq5vv_k$ = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.responseExceptionHandlers_1;
    var tmp1_plusAssign = new ExceptionHandlerWrapper(block);
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
  };
  Config.prototype.handleResponseExceptionWithRequest_ihgzkk_k$ = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.responseExceptionHandlers_1;
    var tmp1_plusAssign = new RequestExceptionHandlerWrapper(block);
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
  };
  Config.prototype.validateResponse_nmkabc_k$ = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.responseValidators_1;
    tmp0_plusAssign.add_1j60pz_k$(block);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.key_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Companion_1.prototype.prepare_bbu65k_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.responseValidators_1), reversed(config.responseExceptionHandlers_1), config.expectSuccess_1);
  };
  Companion_1.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_bbu65k_k$(block);
  };
  Companion_1.prototype.install_ucwhol_k$ = function (plugin_0, scope) {
    var tmp = scope.get_requestPipeline_5d9z6w_k$();
    var tmp_0 = Phases_getInstance().get_Before_3ry4pk_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.get_responsePipeline_xbi790_k$().insertPhaseBefore_mtrcmo_k$(Phases_getInstance_1().get_Receive_oc3k86_k$(), BeforeReceive);
    var tmp_1 = scope.get_responsePipeline_xbi790_k$();
    tmp_1.intercept_hnj3e1_k$(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_2 = plugin(scope, Plugin_getInstance_4());
    tmp_2.intercept_ss9ax6_k$(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_ucwhol_k$(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.response_1 = response;
  }
  $validateResponseCOROUTINE$5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            get_LOGGER_2().trace_jqeghf_k$('Validating response for request ' + this.response_1.get_call_wojxrb_k$().get_request_jdwg4m_k$().get_url_18iuii_k$());
            var tmp_0 = this;
            tmp_0.tmp0_forEach0__1 = this._this__u8e3s4__1.responseValidators_1;
            this.tmp0_iterator1__1 = this.tmp0_forEach0__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            this.set_state_a96kl8_k$(2);
            suspendResult = this.element2__1(this.response_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.cause_1 = cause;
    this.request_1 = request;
  }
  $processExceptionCOROUTINE$6.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            get_LOGGER_2().trace_jqeghf_k$('Processing exception ' + this.cause_1 + ' for request ' + this.request_1.get_url_18iuii_k$());
            var tmp_0 = this;
            tmp_0.tmp0_forEach0__1 = this._this__u8e3s4__1.callExceptionHandlers_1;
            this.tmp0_iterator1__1 = this.tmp0_forEach0__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            this.tmp0_subject3__1 = this.element2__1;
            var tmp_1 = this.tmp0_subject3__1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.element2__1.handler_1(this.cause_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.tmp0_subject3__1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.set_state_a96kl8_k$(2);
                suspendResult = this.element2__1.handler_1(this.cause_1, this.request_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(4);
                continue $sm;
              }
            }

            break;
          case 2:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 5:
            return Unit_getInstance();
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
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.responseValidators_1 = responseValidators;
    this.callExceptionHandlers_1 = callExceptionHandlers;
    this.expectSuccess_1 = expectSuccess;
  }
  function HandlerWrapper() {
  }
  function ExceptionHandlerWrapper(handler) {
    this.handler_1 = handler;
  }
  ExceptionHandlerWrapper.prototype.get_handler_cq14kh_k$ = function () {
    return this.handler_1;
  };
  function RequestExceptionHandlerWrapper(handler) {
    this.handler_1 = handler;
  }
  RequestExceptionHandlerWrapper.prototype.get_handler_cq14kh_k$ = function () {
    return this.handler_1;
  };
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.install_851ey0_k$(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.$builder_1 = $builder;
    this.method_1 = $builder.get_method_gl8esq_k$();
    this.url_1 = $builder.get_url_18iuii_k$().build_1k0s4u_k$();
    this.attributes_1 = $builder.get_attributes_dgqof4_k$();
    this.headers_1 = $builder.get_headers_ef25jx_k$().build_1k0s4u_k$();
  }
  HttpRequest$1.prototype.get_call_wojxrb_k$ = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  HttpRequest$1.prototype.get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  HttpRequest$1.prototype.get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  HttpRequest$1.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  HttpRequest$1.prototype.get_content_h02jrk_k$ = function () {
    var tmp = this.$builder_1.get_body_wojkyz_k$();
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.$builder_1.get_body_wojkyz_k$());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    init_properties_HttpClientPlugin_kt_hdphw();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.get_key_18j28a_k$() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin$prepare$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientPlugin() {
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getOrNull_gb0h81_k$(plugin.get_key_18j28a_k$());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function get_LOGGER_3() {
    init_properties_HttpPlainText_kt_2fd8bf();
    return LOGGER_3;
  }
  var LOGGER_3;
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, content, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, content, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpPlainText$Plugin$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.$plugin_1.addCharsetHeaders_3b8npj_k$(this.$this$intercept_1.get_context_h02k06_k$());
            var tmp_0 = this.content_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.contentType0__1 = contentType(this.$this$intercept_1.get_context_h02k06_k$());
            if (!(this.contentType0__1 == null) ? !(this.contentType0__1.get_contentType_7git4a_k$() === Text_getInstance().get_Plain_ifc0ap_k$().get_contentType_7git4a_k$()) : false) {
              return Unit_getInstance();
            }

            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(wrapContent(this.$plugin_1, this.$this$intercept_1.get_context_h02k06_k$(), this.content_1, this.contentType0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
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
  HttpPlainText$Plugin$install$slambda.prototype.create_300ycv_k$ = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.content_1 = content;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.invoke_63ydys_k$($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.invoke_sqq52a_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.create_u7w3m5_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_sqq52a_k$(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.info0__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
            this.body1__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
            var tmp_0;
            if (!this.info0__1.get_type_wovaf7_k$().equals(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.body1__1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.set_state_a96kl8_k$(1);
            suspendResult = this.body1__1.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bodyBytes2__1 = suspendResult;
            this.content3__1 = this.$plugin_1.read_uycxpq_k$(this.$this$intercept_1.get_context_h02k06_k$(), this.bodyBytes2__1);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(new HttpResponseContainer(this.info0__1, this.content3__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.create_u7w3m5_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.invoke_sqq52a_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _get_responseCharsetFallback__d1hbto($this) {
    return $this.responseCharsetFallback_1;
  }
  function _get_requestCharset__j9c5xu($this) {
    return $this.requestCharset_1;
  }
  function _get_acceptCharsetHeader__xa8pnk($this) {
    return $this.acceptCharsetHeader_1;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.charsets_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.charsetQuality_1 = tmp$ret$1;
    this.sendCharset_1 = null;
    this.responseCharsetFallback_1 = Charsets_getInstance().get_UTF_8_ihn39z_k$();
  }
  Config_0.prototype.get_charsets_81p7rk_k$ = function () {
    return this.charsets_1;
  };
  Config_0.prototype.get_charsetQuality_fywquc_k$ = function () {
    return this.charsetQuality_1;
  };
  Config_0.prototype.register_o2z5za_k$ = function (charset, quality) {
    var tmp0_safe_receiver = quality;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_check = contains(rangeTo(0.0, 1.0), tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$0 = 'Check failed.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp;
    }
    this.charsets_1.add_1j60pz_k$(charset);
    if (quality == null) {
      this.charsetQuality_1.remove_8hbkc0_k$(charset);
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.charsetQuality_1;
      tmp0_set.put_3mhbri_k$(charset, quality);
    }
  };
  Config_0.prototype.register$default_nrdmlz_k$ = function (charset, quality, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      quality = null;
    return this.register_o2z5za_k$(charset, quality);
  };
  Config_0.prototype.set_sendCharset_40uxf4_k$ = function (_set____db54di) {
    this.sendCharset_1 = _set____db54di;
  };
  Config_0.prototype.get_sendCharset_lrd2kb_k$ = function () {
    return this.sendCharset_1;
  };
  Config_0.prototype.set_responseCharsetFallback_rfvngq_k$ = function (_set____db54di) {
    this.responseCharsetFallback_1 = _set____db54di;
  };
  Config_0.prototype.get_responseCharsetFallback_6zf8kc_k$ = function () {
    return this.responseCharsetFallback_1;
  };
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.key_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin_0.prototype.prepare_bbu65k_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_0();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return new HttpPlainText(config.charsets_1, config.charsetQuality_1, config.sendCharset_1, config.responseCharsetFallback_1);
  };
  Plugin_0.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_bbu65k_k$(block);
  };
  Plugin_0.prototype.install_urw79k_k$ = function (plugin, scope) {
    var tmp = scope.get_requestPipeline_5d9z6w_k$();
    var tmp_0 = Phases_getInstance().get_Render_3swp1b_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_1 = scope.get_responsePipeline_xbi790_k$();
    var tmp_2 = Phases_getInstance_1().get_Transform_byqycd_k$();
    tmp_1.intercept_hnj3e1_k$(tmp_2, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_urw79k_k$(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, request, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().get_Plain_ifc0ap_k$() : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.requestCharset_1 : tmp2_elvis_lhs;
    get_LOGGER_3().trace_jqeghf_k$('Sending request body to ' + request.get_url_18iuii_k$() + ' as text/plain with charset ' + charset_0);
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  function HttpPlainText$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = b.get_second_jf7fjx_k$();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = a.get_second_jf7fjx_k$();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText$lambda_0(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = get_name(a);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = get_name(b);
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_0();
    this.responseCharsetFallback_1 = responseCharsetFallback;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = toList(charsetQuality);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    var withQuality = tmp$ret$1;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp1_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      tmp$ret$2 = !charsetQuality.containsKey_wgk31w_k$(element);
      if (tmp$ret$2) {
        tmp1_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$3 = tmp1_filterTo;
    tmp$ret$4 = tmp$ret$3;
    var tmp2_sortedBy = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$6 = sortedWith(tmp2_sortedBy, tmp$ret$5);
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$12;
    // Inline function 'kotlin.apply' call
    var tmp3_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$7 = charSequenceLength(tmp3_apply) > 0;
      if (tmp$ret$7) {
        tmp3_apply.append_ssq29y_k$(',');
      }
      tmp3_apply.append_ssq29y_k$(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.component1_7eebsc_k$();
      var quality = element_1.component2_7eebsb_k$();
      var tmp$ret$8;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$8 = charSequenceLength(tmp3_apply) > 0;
      if (tmp$ret$8) {
        tmp3_apply.append_ssq29y_k$(',');
      }
      // Inline function 'kotlin.check' call
      var containsArg = quality;
      var tmp0_check = 0.0 <= containsArg ? containsArg <= 1.0 : false;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$9;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$9 = 'Check failed.';
        var message = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp$ret$10;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = 100 * quality;
      tmp$ret$10 = roundToInt(tmp1_roundToInt);
      var truncatedQuality = tmp$ret$10 / 100.0;
      tmp3_apply.append_ssq29y_k$(get_name(charset) + ';q=' + truncatedQuality);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$11 = charSequenceLength(tmp3_apply) === 0;
    if (tmp$ret$11) {
      tmp3_apply.append_ssq29y_k$(get_name(this.responseCharsetFallback_1));
    }
    tmp$ret$12 = tmp3_apply;
    tmp$ret$13 = tmp$ret$12.toString();
    tmp_1.acceptCharsetHeader_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_first_irdx8n_k$();
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.requestCharset_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.read_uycxpq_k$ = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.get_response_xlk07e_k$());
    var actualCharset = tmp0_elvis_lhs == null ? this.responseCharsetFallback_1 : tmp0_elvis_lhs;
    get_LOGGER_3().trace_jqeghf_k$('Reading response body for ' + call.get_request_jdwg4m_k$().get_url_18iuii_k$() + ' as String with charset ' + actualCharset);
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.addCharsetHeaders_3b8npj_k$ = function (context) {
    if (!(context.get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_AcceptCharset_1vf6lh_k$()) == null))
      return Unit_getInstance();
    get_LOGGER_3().trace_jqeghf_k$('Adding Accept-Charset=' + this.acceptCharsetHeader_1 + ' to ' + context.get_url_18iuii_k$());
    context.get_headers_ef25jx_k$().set_vj6ab5_k$(HttpHeaders_getInstance().get_AcceptCharset_1vf6lh_k$(), this.acceptCharsetHeader_1);
  };
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function init_properties_HttpPlainText_kt_2fd8bf() {
    if (properties_initialized_HttpPlainText_kt_2nx4ox) {
    } else {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_4() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return LOGGER_4;
  }
  var LOGGER_4;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.$plugin_1 = $plugin;
    this.$scope_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.invoke_dqudng_k$ = function ($this$intercept, context, $cont) {
    var tmp = this.create_q4qdwm_k$($this$intercept, context, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpRedirect$Plugin$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.invoke_dqudng_k$(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$this$intercept_1.execute_z0ufkc_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.origin0__1 = suspendResult;
            if (this.$plugin_1.checkHttpMethod_1 ? !get_ALLOWED_FOR_REDIRECT().contains_2ehdt1_k$(this.origin0__1.get_request_jdwg4m_k$().get_method_gl8esq_k$()) : false) {
              return this.origin0__1;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = handleCall(this.$this$intercept_1, Plugin_getInstance_1(), this.context_1, this.origin0__1, this.$plugin_1.allowHttpsDowngrade_1, this.$scope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpRedirect$Plugin$install$slambda.prototype.create_q4qdwm_k$ = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.$plugin_1, this.$scope_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.context_1 = context;
    return i;
  };
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.invoke_dqudng_k$($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
    this.context_1 = context;
    this.origin_1 = origin;
    this.allowHttpsDowngrade_1 = allowHttpsDowngrade;
    this.client_1 = client;
  }
  $handleCallCOROUTINE$7.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (!isRedirect(this.origin_1.get_response_xlk07e_k$().get_status_jnf6d7_k$()))
              return this.origin_1;
            this.call0__1 = this.origin_1;
            this.requestBuilder1__1 = this.context_1;
            this.originProtocol2__1 = this.origin_1.get_request_jdwg4m_k$().get_url_18iuii_k$().get_protocol_mv93kx_k$();
            this.originAuthority3__1 = get_authority(this.origin_1.get_request_jdwg4m_k$().get_url_18iuii_k$());
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.client_1.get_monitor_lpmkc1_k$().raise_ojaa37_k$(this._this__u8e3s4__1.HttpResponseRedirect_1, this.call0__1.get_response_xlk07e_k$());
            this.location4__1 = this.call0__1.get_response_xlk07e_k$().get_headers_ef25jx_k$().get_4u8u51_k$(HttpHeaders_getInstance().get_Location_pdrq6_k$());
            get_LOGGER_4().trace_jqeghf_k$('Received redirect response to ' + this.location4__1 + ' for request ' + this.context_1.get_url_18iuii_k$());
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.takeFromWithExecutionContext_d233rf_k$(this.requestBuilder1__1);
            ;
            tmp0_apply.get_url_18iuii_k$().get_parameters_cl4rkd_k$().clear_j9y8zo_k$();
            var tmp0_safe_receiver = this.location4__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(tmp0_apply.get_url_18iuii_k$(), tmp0_safe_receiver);
            }

            ;
            if ((!this.allowHttpsDowngrade_1 ? isSecure(this.originProtocol2__1) : false) ? !isSecure(tmp0_apply.get_url_18iuii_k$().get_protocol_mv93kx_k$()) : false) {
              get_LOGGER_4().trace_jqeghf_k$('Can not redirect ' + this.context_1.get_url_18iuii_k$() + ' because of security downgrade');
              return this.call0__1;
            }

            if (!(this.originAuthority3__1 === get_authority_0(tmp0_apply.get_url_18iuii_k$()))) {
              tmp0_apply.get_headers_ef25jx_k$().remove_d85afi_k$(HttpHeaders_getInstance().get_Authorization_awzxlc_k$());
              get_LOGGER_4().trace_jqeghf_k$('Removing Authorization header from redirect for ' + this.context_1.get_url_18iuii_k$());
            }

            tmp_0.requestBuilder1__1 = tmp0_apply;
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__2.execute_z0ufkc_k$(this.requestBuilder1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.call0__1 = suspendResult;
            if (!isRedirect(this.call0__1.get_response_xlk07e_k$().get_status_jnf6d7_k$()))
              return this.call0__1;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function _get_checkHttpMethod__ouu2yo($this) {
    return $this.checkHttpMethod_1;
  }
  function _get_allowHttpsDowngrade__2zjwjm($this) {
    return $this.allowHttpsDowngrade_1;
  }
  function Config_1() {
    this.checkHttpMethod_1 = true;
    this.allowHttpsDowngrade_1 = false;
  }
  Config_1.prototype.set_checkHttpMethod_r426az_k$ = function (_set____db54di) {
    this.checkHttpMethod_1 = _set____db54di;
  };
  Config_1.prototype.get_checkHttpMethod_11ale0_k$ = function () {
    return this.checkHttpMethod_1;
  };
  Config_1.prototype.set_allowHttpsDowngrade_zh7x0t_k$ = function (_set____db54di) {
    this.allowHttpsDowngrade_1 = _set____db54di;
  };
  Config_1.prototype.get_allowHttpsDowngrade_f1e586_k$ = function () {
    return this.allowHttpsDowngrade_1;
  };
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.key_1 = new AttributeKey('HttpRedirect');
    this.HttpResponseRedirect_1 = new EventDefinition();
  }
  Plugin_1.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin_1.prototype.get_HttpResponseRedirect_7jjicy_k$ = function () {
    return this.HttpResponseRedirect_1;
  };
  Plugin_1.prototype.prepare_bbu65k_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpRedirect(config.checkHttpMethod_1, config.allowHttpsDowngrade_1);
  };
  Plugin_1.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_bbu65k_k$(block);
  };
  Plugin_1.prototype.install_6dwfkt_k$ = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_4());
    tmp.intercept_ss9ax6_k$(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_6dwfkt_k$(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.checkHttpMethod_1 = checkHttpMethod;
    this.allowHttpsDowngrade_1 = allowHttpsDowngrade;
  }
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.get_value_j01efc_k$();
    return ((((tmp0_subject === Companion_getInstance_1().get_MovedPermanently_ne29rl_k$().get_value_j01efc_k$() ? true : tmp0_subject === Companion_getInstance_1().get_Found_i9we9l_k$().get_value_j01efc_k$()) ? true : tmp0_subject === Companion_getInstance_1().get_TemporaryRedirect_6andz8_k$().get_value_j01efc_k$()) ? true : tmp0_subject === Companion_getInstance_1().get_PermanentRedirect_rfldcx_k$().get_value_j01efc_k$()) ? true : tmp0_subject === Companion_getInstance_1().get_SeeOther_eo4vx6_k$().get_value_j01efc_k$()) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().get_Get_18jsxf_k$(), Companion_getInstance_2().get_Head_wo2rt5_k$()]);
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
    }
  }
  function get_LOGGER_5() {
    init_properties_HttpRequestLifecycle_kt_gkn2tl();
    return LOGGER_5;
  }
  var LOGGER_5;
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.$scope_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, it, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.executionContext0__1 = SupervisorJob(this.$this$intercept_1.get_context_h02k06_k$().get_executionContext_yb2vgg_k$());
            attachToClientEngineJob(this.executionContext0__1, ensureNotNull(this.$scope_1.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance())));
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_exceptionState_s9sevl_k$(3);
            this.$this$intercept_1.get_context_h02k06_k$().set_executionContext_cut4m3_k$(this.executionContext0__1);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.proceed_7g1848_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              this.executionContext0__1.completeExceptionally_7s0ccc_k$(cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 4:
            this.set_exceptionState_s9sevl_k$(6);
            var t = this.get_exception_x0n6w6_k$();
            this.executionContext0__1.complete_9ww6vb_k$();
            ;
            throw t;
          case 5:
            this.executionContext0__1.complete_9ww6vb_k$();
            ;
            return Unit_getInstance();
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
  HttpRequestLifecycle$Plugin$install$slambda.prototype.create_300ycv_k$ = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.$scope_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.it_1 = it;
    return i;
  };
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.invoke_63ydys_k$($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.key_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin_2.prototype.prepare_lhztj4_k$ = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_lhztj4_k$(block);
  };
  Plugin_2.prototype.install_kabr32_k$ = function (plugin, scope) {
    var tmp = scope.get_requestPipeline_5d9z6w_k$();
    var tmp_0 = Phases_getInstance().get_Before_3ry4pk_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_kabr32_k$(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_2();
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    init_properties_HttpRequestLifecycle_kt_gkn2tl();
    var handler = clientEngineJob.invokeOnCompletion_t2apld_k$(attachToClientEngineJob$lambda(requestJob));
    requestJob.invokeOnCompletion_t2apld_k$(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        get_LOGGER_5().trace_jqeghf_k$('Cancelling request because engine Job failed with error: ' + cause);
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_getInstance();
      } else {
        get_LOGGER_5().trace_jqeghf_k$('Cancelling request because engine Job completed');
        $requestJob.complete_9ww6vb_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.dispose_3n44we_k$();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function init_properties_HttpRequestLifecycle_kt_gkn2tl() {
    if (properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
    } else {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
    }
  }
  function get_LOGGER_6() {
    init_properties_HttpRequestRetry_kt_5f4idj();
    return LOGGER_6;
  }
  var LOGGER_6;
  function get_MaxRetriesPerRequestAttributeKey() {
    init_properties_HttpRequestRetry_kt_5f4idj();
    return MaxRetriesPerRequestAttributeKey;
  }
  var MaxRetriesPerRequestAttributeKey;
  function get_ShouldRetryPerRequestAttributeKey() {
    init_properties_HttpRequestRetry_kt_5f4idj();
    return ShouldRetryPerRequestAttributeKey;
  }
  var ShouldRetryPerRequestAttributeKey;
  function get_ShouldRetryOnExceptionPerRequestAttributeKey() {
    init_properties_HttpRequestRetry_kt_5f4idj();
    return ShouldRetryOnExceptionPerRequestAttributeKey;
  }
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  function get_ModifyRequestPerRequestAttributeKey() {
    init_properties_HttpRequestRetry_kt_5f4idj();
    return ModifyRequestPerRequestAttributeKey;
  }
  var ModifyRequestPerRequestAttributeKey;
  function get_RetryDelayPerRequestAttributeKey() {
    init_properties_HttpRequestRetry_kt_5f4idj();
    return RetryDelayPerRequestAttributeKey;
  }
  var RetryDelayPerRequestAttributeKey;
  function randomMs($this, randomizationMs) {
    return randomizationMs.equals(new Long(0, 0)) ? new Long(0, 0) : Default_getInstance().nextLong_gpvfev_k$(randomizationMs);
  }
  function HttpRequestRetry$Configuration$modifyRequest$lambda($this$null, it) {
    return Unit_getInstance();
  }
  function HttpRequestRetry$Configuration$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestRetry$Configuration$delay$slambda.prototype.invoke_b21fsh_k$ = function (it, $cont) {
    var tmp = this.create_a5pzuu_k$(it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpRequestRetry$Configuration$delay$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_b21fsh_k$(p1 instanceof Long ? p1 : THROW_CCE(), $cont);
  };
  HttpRequestRetry$Configuration$delay$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = delay(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  HttpRequestRetry$Configuration$delay$slambda.prototype.create_a5pzuu_k$ = function (it, completion) {
    var i = new HttpRequestRetry$Configuration$delay$slambda(completion);
    i.it_1 = it;
    return i;
  };
  HttpRequestRetry$Configuration$delay$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_a5pzuu_k$(value instanceof Long ? value : THROW_CCE(), completion);
  };
  function HttpRequestRetry$Configuration$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetry$Configuration$delay$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_b21fsh_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpRequestRetry$Configuration$noRetry$lambda($this$null, _anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return false;
  }
  function HttpRequestRetry$Configuration$noRetry$lambda_0($this$null, _anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return false;
  }
  function HttpRequestRetry$Configuration$retryOnException$lambda($retryOnTimeout) {
    return function ($this$retryOnExceptionIf, _anonymous_parameter_0__qggqh8, cause) {
      var tmp;
      if (isTimeoutException(cause)) {
        tmp = $retryOnTimeout;
      } else {
        if (cause instanceof CancellationException) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
      return tmp;
    };
  }
  function HttpRequestRetry$Configuration$retryOnServerErrors$lambda($this$retryIf, _anonymous_parameter_0__qggqh8, response) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = response.get_status_jnf6d7_k$().get_value_j01efc_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.Configuration.retryOnServerErrors.<anonymous>.<anonymous>' call
    tmp$ret$0 = 500 <= tmp0_let ? tmp0_let <= 599 : false;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function HttpRequestRetry$Configuration$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function ($this$null, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = $this$null.response_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_headers_ef25jx_k$();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_4u8u51_k$(HttpHeaders_getInstance().get_RetryAfter_6hk2mb_k$());
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.Long.times' call
          tmp$ret$0 = tmp3_safe_receiver.times_2zfqpc_k$(new Long(1000, 0));
          tmp_0 = tmp$ret$0;
        }
        var retryAfter = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = $block($this$null, it);
        var tmp4_elvis_lhs = retryAfter;
        var tmp1_maxOf = tmp4_elvis_lhs == null ? new Long(0, 0) : tmp4_elvis_lhs;
        tmp$ret$1 = tmp0_maxOf.compareTo_n4fqi2_k$(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
        tmp = tmp$ret$1;
      } else {
        tmp = $block($this$null, it);
      }
      return tmp;
    };
  }
  function HttpRequestRetry$Configuration$constantDelay$lambda($millis, this$0, $randomizationMs) {
    return function ($this$delayMillis, it) {
      return $millis.plus_u6jwas_k$(randomMs(this$0, $randomizationMs));
    };
  }
  function HttpRequestRetry$Configuration$exponentialDelay$lambda($base, $maxDelayMs, this$0, $randomizationMs) {
    return function ($this$delayMillis, retry) {
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$0 = Math.pow($base, retry);
      var tmp0_minOf = numberToLong(tmp$ret$0).times_2zfqpc_k$(new Long(1000, 0));
      tmp$ret$1 = tmp0_minOf.compareTo_n4fqi2_k$($maxDelayMs) <= 0 ? tmp0_minOf : $maxDelayMs;
      var delay = tmp$ret$1;
      return delay.plus_u6jwas_k$(randomMs(this$0, $randomizationMs));
    };
  }
  function ShouldRetryContext(retryCount) {
    this.retryCount_1 = retryCount;
  }
  ShouldRetryContext.prototype.get_retryCount_vlyh1s_k$ = function () {
    return this.retryCount_1;
  };
  function DelayContext(request, response, cause) {
    this.request_1 = request;
    this.response_1 = response;
    this.cause_1 = cause;
  }
  DelayContext.prototype.get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  DelayContext.prototype.get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  DelayContext.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  function ModifyRequestContext(request, response, cause, retryCount) {
    this.request_1 = request;
    this.response_1 = response;
    this.cause_1 = cause;
    this.retryCount_1 = retryCount;
  }
  ModifyRequestContext.prototype.get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  ModifyRequestContext.prototype.get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  ModifyRequestContext.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  ModifyRequestContext.prototype.get_retryCount_vlyh1s_k$ = function () {
    return this.retryCount_1;
  };
  function RetryEventData(request, retryCount, response, cause) {
    this.request_1 = request;
    this.retryCount_1 = retryCount;
    this.response_1 = response;
    this.cause_1 = cause;
  }
  RetryEventData.prototype.get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  RetryEventData.prototype.get_retryCount_vlyh1s_k$ = function () {
    return this.retryCount_1;
  };
  RetryEventData.prototype.get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  RetryEventData.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  function _get_shouldRetry__50d7jw($this) {
    return $this.shouldRetry_1;
  }
  function _get_shouldRetryOnException__oft2hc($this) {
    return $this.shouldRetryOnException_1;
  }
  function _get_delayMillis__7izjt4($this) {
    return $this.delayMillis_1;
  }
  function _get_delay__ikpy6q($this) {
    return $this.delay_1;
  }
  function _get_maxRetries__2pnxiv($this) {
    return $this.maxRetries_1;
  }
  function _get_modifyRequest__8jdce4($this) {
    return $this.modifyRequest_1;
  }
  function Configuration() {
    var tmp = this;
    tmp.modifyRequest_1 = HttpRequestRetry$Configuration$modifyRequest$lambda;
    var tmp_0 = this;
    tmp_0.delay_1 = HttpRequestRetry$Configuration$delay$slambda_0(null);
    this.maxRetries_1 = 0;
    this.retryOnExceptionOrServerErrors_eya1e1_k$(3);
    var tmp_1 = new Long(0, 0);
    var tmp_2 = new Long(0, 0);
    this.exponentialDelay$default_65xwo5_k$(0.0, tmp_1, tmp_2, false, 15, null);
  }
  Configuration.prototype.set_shouldRetry_x12p8s_k$ = function (_set____db54di) {
    this.shouldRetry_1 = _set____db54di;
  };
  Configuration.prototype.get_shouldRetry_6ascp8_k$ = function () {
    var tmp = this.shouldRetry_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  Configuration.prototype.set_shouldRetryOnException_3orvqt_k$ = function (_set____db54di) {
    this.shouldRetryOnException_1 = _set____db54di;
  };
  Configuration.prototype.get_shouldRetryOnException_o7irp8_k$ = function () {
    var tmp = this.shouldRetryOnException_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  Configuration.prototype.set_delayMillis_ql25nb_k$ = function (_set____db54di) {
    this.delayMillis_1 = _set____db54di;
  };
  Configuration.prototype.get_delayMillis_d968n4_k$ = function () {
    var tmp = this.delayMillis_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  Configuration.prototype.set_modifyRequest_of6p7z_k$ = function (_set____db54di) {
    this.modifyRequest_1 = _set____db54di;
  };
  Configuration.prototype.get_modifyRequest_3d1yrw_k$ = function () {
    return this.modifyRequest_1;
  };
  Configuration.prototype.set_delay_16yuqn_k$ = function (_set____db54di) {
    this.delay_1 = _set____db54di;
  };
  Configuration.prototype.get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  Configuration.prototype.set_maxRetries_modsdr_k$ = function (_set____db54di) {
    this.maxRetries_1 = _set____db54di;
  };
  Configuration.prototype.get_maxRetries_hemi8b_k$ = function () {
    return this.maxRetries_1;
  };
  Configuration.prototype.noRetry_5fc17a_k$ = function () {
    this.maxRetries_1 = 0;
    var tmp = this;
    tmp.shouldRetry_1 = HttpRequestRetry$Configuration$noRetry$lambda;
    var tmp_0 = this;
    tmp_0.shouldRetryOnException_1 = HttpRequestRetry$Configuration$noRetry$lambda_0;
  };
  Configuration.prototype.modifyRequest_b05z5g_k$ = function (block) {
    this.modifyRequest_1 = block;
  };
  Configuration.prototype.retryIf_ke5mvk_k$ = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.maxRetries_1 = maxRetries;
    this.shouldRetry_1 = block;
  };
  Configuration.prototype.retryIf$default_fz5phv_k$ = function (maxRetries, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      maxRetries = -1;
    return this.retryIf_ke5mvk_k$(maxRetries, block);
  };
  Configuration.prototype.retryOnExceptionIf_lqqf3l_k$ = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.maxRetries_1 = maxRetries;
    this.shouldRetryOnException_1 = block;
  };
  Configuration.prototype.retryOnExceptionIf$default_kkt18y_k$ = function (maxRetries, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      maxRetries = -1;
    return this.retryOnExceptionIf_lqqf3l_k$(maxRetries, block);
  };
  Configuration.prototype.retryOnException_92pltk_k$ = function (maxRetries) {
    this.retryOnException_7gi4sw_k$(maxRetries, false);
  };
  Configuration.prototype.retryOnException$default_37puqd_k$ = function (maxRetries, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      maxRetries = -1;
    return this.retryOnException_92pltk_k$(maxRetries);
  };
  Configuration.prototype.retryOnException_7gi4sw_k$ = function (maxRetries, retryOnTimeout) {
    this.retryOnExceptionIf_lqqf3l_k$(maxRetries, HttpRequestRetry$Configuration$retryOnException$lambda(retryOnTimeout));
  };
  Configuration.prototype.retryOnException$default_a22c8d_k$ = function (maxRetries, retryOnTimeout, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      maxRetries = -1;
    if (!(($mask0 & 2) === 0))
      retryOnTimeout = false;
    return this.retryOnException_7gi4sw_k$(maxRetries, retryOnTimeout);
  };
  Configuration.prototype.retryOnServerErrors_6ij8hn_k$ = function (maxRetries) {
    this.retryIf_ke5mvk_k$(maxRetries, HttpRequestRetry$Configuration$retryOnServerErrors$lambda);
  };
  Configuration.prototype.retryOnServerErrors$default_ibu0aq_k$ = function (maxRetries, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      maxRetries = -1;
    return this.retryOnServerErrors_6ij8hn_k$(maxRetries);
  };
  Configuration.prototype.retryOnExceptionOrServerErrors_eya1e1_k$ = function (maxRetries) {
    this.retryOnServerErrors_6ij8hn_k$(maxRetries);
    this.retryOnException$default_a22c8d_k$(maxRetries, false, 2, null);
  };
  Configuration.prototype.retryOnExceptionOrServerErrors$default_srdkg6_k$ = function (maxRetries, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      maxRetries = -1;
    return this.retryOnExceptionOrServerErrors_eya1e1_k$(maxRetries);
  };
  Configuration.prototype.delayMillis_cyw2qs_k$ = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.delayMillis_1 = HttpRequestRetry$Configuration$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  Configuration.prototype.delayMillis$default_hgj927_k$ = function (respectRetryAfterHeader, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      respectRetryAfterHeader = true;
    return this.delayMillis_cyw2qs_k$(respectRetryAfterHeader, block);
  };
  Configuration.prototype.constantDelay_59gpoq_k$ = function (millis, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    var tmp0_check = millis.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = randomizationMs.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.delayMillis_cyw2qs_k$(respectRetryAfterHeader, HttpRequestRetry$Configuration$constantDelay$lambda(millis, this, randomizationMs));
  };
  Configuration.prototype.constantDelay$default_clhalj_k$ = function (millis, randomizationMs, respectRetryAfterHeader, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      millis = new Long(1000, 0);
    if (!(($mask0 & 2) === 0))
      randomizationMs = new Long(1000, 0);
    if (!(($mask0 & 4) === 0))
      respectRetryAfterHeader = true;
    return this.constantDelay_59gpoq_k$(millis, randomizationMs, respectRetryAfterHeader);
  };
  Configuration.prototype.exponentialDelay_qblebs_k$ = function (base, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    var tmp0_check = base > 0.0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = maxDelayMs.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = randomizationMs.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$2;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$2 = 'Check failed.';
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    this.delayMillis_cyw2qs_k$(respectRetryAfterHeader, HttpRequestRetry$Configuration$exponentialDelay$lambda(base, maxDelayMs, this, randomizationMs));
  };
  Configuration.prototype.exponentialDelay$default_65xwo5_k$ = function (base, maxDelayMs, randomizationMs, respectRetryAfterHeader, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      base = 2.0;
    if (!(($mask0 & 2) === 0))
      maxDelayMs = new Long(60000, 0);
    if (!(($mask0 & 4) === 0))
      randomizationMs = new Long(1000, 0);
    if (!(($mask0 & 8) === 0))
      respectRetryAfterHeader = true;
    return this.exponentialDelay_qblebs_k$(base, maxDelayMs, randomizationMs, respectRetryAfterHeader);
  };
  Configuration.prototype.delay_g9hbus_k$ = function (block) {
    this.delay_1 = block;
  };
  function shouldRetry($this, retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries ? shouldRetry(new ShouldRetryContext(retryCount + 1 | 0), call.get_request_jdwg4m_k$(), call.get_response_xlk07e_k$()) : false;
  }
  function shouldRetryOnException($this, retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries ? shouldRetry(new ShouldRetryContext(retryCount + 1 | 0), subRequest, cause) : false;
  }
  function prepareRequest($this, request) {
    var subRequest = (new HttpRequestBuilder()).takeFrom_ixwwlq_k$(request);
    var tmp = request.get_executionContext_yb2vgg_k$();
    tmp.invokeOnCompletion_t2apld_k$(HttpRequestRetry$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.key_1 = new AttributeKey('RetryFeature');
    this.HttpRequestRetryEvent_1 = new EventDefinition();
  }
  Plugin_3.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin_3.prototype.get_HttpRequestRetryEvent_ffd2y8_k$ = function () {
    return this.HttpRequestRetryEvent_1;
  };
  Plugin_3.prototype.prepare_uptjsu_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Configuration();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var configuration = tmp$ret$0;
    return new HttpRequestRetry(configuration);
  };
  Plugin_3.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_uptjsu_k$(block);
  };
  Plugin_3.prototype.install_uc94ps_k$ = function (plugin, scope) {
    plugin.intercept_7649si_k$(scope);
  };
  Plugin_3.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_uc94ps_k$(plugin instanceof HttpRequestRetry ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function HttpRequestRetry$intercept$slambda(this$0, $client, resultContinuation) {
    this.this$0__1 = this$0;
    this.$client_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestRetry$intercept$slambda.prototype.invoke_dqudng_k$ = function ($this$intercept, request, $cont) {
    var tmp = this.create_q4qdwm_k$($this$intercept, request, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpRequestRetry$intercept$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.invoke_dqudng_k$(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestRetry$intercept$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            this.retryCount0__1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.request_1.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.shouldRetry1__1 = tmp0_elvis_lhs == null ? this.this$0__1.shouldRetry_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.request_1.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.shouldRetryOnException2__1 = tmp1_elvis_lhs == null ? this.this$0__1.shouldRetryOnException_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.request_1.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.maxRetries3__1 = tmp2_elvis_lhs == null ? this.this$0__1.maxRetries_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.request_1.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_RetryDelayPerRequestAttributeKey());
            tmp_3.delayMillis4__1 = tmp3_elvis_lhs == null ? this.this$0__1.delayMillis_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.request_1.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.modifyRequest5__1 = tmp4_elvis_lhs == null ? this.this$0__1.modifyRequest_1 : tmp4_elvis_lhs;
            this.lastRetryData7__1 = null;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.subRequest8__1 = prepareRequest(this.this$0__1, this.request_1);
            this.set_exceptionState_s9sevl_k$(4);
            if (!(this.lastRetryData7__1 == null)) {
              var modifyRequestContext = new ModifyRequestContext(this.request_1, this.lastRetryData7__1.response_1, this.lastRetryData7__1.cause_1, this.lastRetryData7__1.retryCount_1);
              this.modifyRequest5__1(modifyRequestContext, this.subRequest8__1);
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.execute_z0ufkc_k$(this.subRequest8__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.call6__1 = suspendResult;
            if (!shouldRetry(this.this$0__1, this.retryCount0__1, this.maxRetries3__1, this.shouldRetry1__1, this.call6__1)) {
              this.set_exceptionState_s9sevl_k$(7);
              this.set_state_a96kl8_k$(8);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            var tmp_5 = this;
            this.retryCount0__1 = this.retryCount0__1 + 1 | 0;
            tmp_5.TRY_RESULT9__1 = new RetryEventData(this.subRequest8__1, this.retryCount0__1, this.call6__1.get_response_xlk07e_k$(), null);
            this.set_exceptionState_s9sevl_k$(7);
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp_6 = this.get_exception_x0n6w6_k$();
            if (tmp_6 instanceof Error) {
              this.cause10__1 = this.get_exception_x0n6w6_k$();
              var tmp_7 = this;
              if (!shouldRetryOnException(this.this$0__1, this.retryCount0__1, this.maxRetries3__1, this.shouldRetryOnException2__1, this.subRequest8__1, this.cause10__1)) {
                throw this.cause10__1;
              }
              this.retryCount0__1 = this.retryCount0__1 + 1 | 0;
              tmp_7.TRY_RESULT9__1 = new RetryEventData(this.subRequest8__1, this.retryCount0__1, null, this.cause10__1);
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 5:
            this.set_exceptionState_s9sevl_k$(7);
            this.retryData11__1 = this.TRY_RESULT9__1;
            this.lastRetryData7__1 = this.retryData11__1;
            this.$client_1.get_monitor_lpmkc1_k$().raise_ojaa37_k$(Plugin_getInstance_3().HttpRequestRetryEvent_1, this.lastRetryData7__1);
            this.delayContext12__1 = new DelayContext(this.lastRetryData7__1.request_1, this.lastRetryData7__1.response_1, this.lastRetryData7__1.cause_1);
            this.set_state_a96kl8_k$(6);
            suspendResult = this.this$0__1.delay_1(this.delayMillis4__1(this.delayContext12__1, this.retryCount0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            get_LOGGER_6().trace_jqeghf_k$('Retrying request ' + this.request_1.get_url_18iuii_k$() + ' attempt: ' + this.retryCount0__1);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            return this.call6__1;
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpRequestRetry$intercept$slambda.prototype.create_q4qdwm_k$ = function ($this$intercept, request, completion) {
    var i = new HttpRequestRetry$intercept$slambda(this.this$0__1, this.$client_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.request_1 = request;
    return i;
  };
  function HttpRequestRetry$intercept$slambda_0(this$0, $client, resultContinuation) {
    var i = new HttpRequestRetry$intercept$slambda(this$0, $client, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.invoke_dqudng_k$($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpRequestRetry$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.get_executionContext_yb2vgg_k$();
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      var tmp_0;
      if (cause == null) {
        subRequestJob.complete_9ww6vb_k$();
        tmp_0 = Unit_getInstance();
      } else {
        subRequestJob.completeExceptionally_7s0ccc_k$(cause);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpRequestRetry(configuration) {
    Plugin_getInstance_3();
    this.shouldRetry_1 = configuration.get_shouldRetry_6ascp8_k$();
    this.shouldRetryOnException_1 = configuration.get_shouldRetryOnException_o7irp8_k$();
    this.delayMillis_1 = configuration.get_delayMillis_d968n4_k$();
    this.delay_1 = configuration.delay_1;
    this.maxRetries_1 = configuration.maxRetries_1;
    this.modifyRequest_1 = configuration.modifyRequest_1;
  }
  HttpRequestRetry.prototype.intercept_7649si_k$ = function (client) {
    var tmp = plugin(client, Plugin_getInstance_4());
    tmp.intercept_ss9ax6_k$(HttpRequestRetry$intercept$slambda_0(this, client, null));
  };
  function isTimeoutException(_this__u8e3s4) {
    init_properties_HttpRequestRetry_kt_5f4idj();
    var exception = unwrapCancellationException(_this__u8e3s4);
    var tmp;
    var tmp_0;
    if (exception instanceof HttpRequestTimeoutException) {
      tmp_0 = true;
    } else {
      tmp_0 = exception instanceof ConnectTimeoutException;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = exception instanceof SocketTimeoutException;
    }
    return tmp;
  }
  var properties_initialized_HttpRequestRetry_kt_jcpv6l;
  function init_properties_HttpRequestRetry_kt_5f4idj() {
    if (properties_initialized_HttpRequestRetry_kt_jcpv6l) {
    } else {
      properties_initialized_HttpRequestRetry_kt_jcpv6l = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestRetry');
      MaxRetriesPerRequestAttributeKey = new AttributeKey('MaxRetriesPerRequestAttributeKey');
      ShouldRetryPerRequestAttributeKey = new AttributeKey('ShouldRetryPerRequestAttributeKey');
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey('ShouldRetryOnExceptionPerRequestAttributeKey');
      ModifyRequestPerRequestAttributeKey = new AttributeKey('ModifyRequestPerRequestAttributeKey');
      RetryDelayPerRequestAttributeKey = new AttributeKey('RetryDelayPerRequestAttributeKey');
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.$plugin_1 = $plugin;
    this.$scope_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, content, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, content, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpSend$Plugin$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.content_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.content_1) + ', with Content-Type: ' + contentType(this.$this$intercept_1.get_context_h02k06_k$()) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0_setBody = this.$this$intercept_1.get_context_h02k06_k$();
            var tmp1_setBody = this.content_1;
            var tmp0_subject = tmp1_setBody;
            if (tmp0_subject == null) {
              tmp0_setBody.set_body_slzaj6_k$(NullBody_getInstance());
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(OutgoingContent);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_setBody.set_bodyType_oab65z_k$(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_setBody.set_body_slzaj6_k$(tmp1_setBody);
                tmp0_setBody.set_bodyType_oab65z_k$(null);
              } else {
                tmp0_setBody.set_body_slzaj6_k$(tmp1_setBody);
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(OutgoingContent);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_setBody.set_bodyType_oab65z_k$(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            this.realSender0__1 = new DefaultSender(this.$plugin_1.maxSendCount_1, this.$scope_1);
            this.interceptedSender1__1 = this.realSender0__1;
            var tmp2_forEach = downTo(get_lastIndex(this.$plugin_1.interceptors_1), 0);
            var inductionVariable = tmp2_forEach.get_first_irdx8n_k$();
            var last = tmp2_forEach.get_last_wopotb_k$();
            var step = tmp2_forEach.get_step_woujh1_k$();
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.$plugin_1.interceptors_1.get_fkrdnv_k$(element);
                this.interceptedSender1__1 = new InterceptedSender(interceptor, this.interceptedSender1__1);
              }
               while (!(element === last));
            this.set_state_a96kl8_k$(1);
            suspendResult = this.interceptedSender1__1.execute_z0ufkc_k$(this.$this$intercept_1.get_context_h02k06_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.call2__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.call2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpSend$Plugin$install$slambda.prototype.create_300ycv_k$ = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.$plugin_1, this.$scope_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.content_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.invoke_63ydys_k$($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _get_interceptor__8m2498($this) {
    return $this.interceptor_1;
  }
  function _get_nextSender__nwl3sz($this) {
    return $this.nextSender_1;
  }
  function _get_maxSendCount__nbjqgo($this) {
    return $this.maxSendCount_1;
  }
  function _get_client__j03y3k($this) {
    return $this.client_1;
  }
  function _set_sentCount__st452q($this, _set____db54di) {
    $this.sentCount_1 = _set____db54di;
  }
  function _get_sentCount__hqbbu($this) {
    return $this.sentCount_1;
  }
  function _set_currentCall__kxa4q6($this, _set____db54di) {
    $this.currentCall_1 = _set____db54di;
  }
  function _get_currentCall__jtfqx2($this) {
    return $this.currentCall_1;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.requestBuilder_1 = requestBuilder;
  }
  $executeCOROUTINE$8.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp0_safe_receiver = this._this__u8e3s4__1.currentCall_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this._this__u8e3s4__1.sentCount_1 >= this._this__u8e3s4__1.maxSendCount_1) {
              throw new SendCountExceedException('Max send count ' + this._this__u8e3s4__1.maxSendCount_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this._this__u8e3s4__1;
            var tmp2 = tmp1_this.sentCount_1;
            tmp1_this.sentCount_1 = tmp2 + 1 | 0;
            ;
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.client_1.get_sendPipeline_5dhg2b_k$().execute_av1190_k$(this.requestBuilder_1, this.requestBuilder_1.get_body_wojkyz_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this._this__u8e3s4__1.currentCall_1 = call;
            return call;
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
  function HttpSend_init_$Init$(maxSendCount, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      maxSendCount = 20;
    HttpSend.call($this, maxSendCount);
    return $this;
  }
  function HttpSend_init_$Create$(maxSendCount, $mask0, $marker) {
    return HttpSend_init_$Init$(maxSendCount, $mask0, $marker, Object.create(HttpSend.prototype));
  }
  function _get_maxSendCount__nbjqgo_0($this) {
    return $this.maxSendCount_1;
  }
  function Config_2() {
    this.maxSendCount_1 = 20;
  }
  Config_2.prototype.set_maxSendCount_ycp7xs_k$ = function (_set____db54di) {
    this.maxSendCount_1 = _set____db54di;
  };
  Config_2.prototype.get_maxSendCount_izeams_k$ = function () {
    return this.maxSendCount_1;
  };
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.key_1 = new AttributeKey('HttpSend');
  }
  Plugin_4.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin_4.prototype.prepare_bbu65k_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpSend(config.maxSendCount_1);
  };
  Plugin_4.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_bbu65k_k$(block);
  };
  Plugin_4.prototype.install_t0crin_k$ = function (plugin, scope) {
    var tmp = scope.get_requestPipeline_5d9z6w_k$();
    var tmp_0 = Phases_getInstance().get_Send_wo9sz5_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_4.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_t0crin_k$(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.interceptor_1 = interceptor;
    this.nextSender_1 = nextSender;
  }
  InterceptedSender.prototype.execute_z0ufkc_k$ = function (requestBuilder, $cont) {
    return this.interceptor_1(this.nextSender_1, requestBuilder, $cont);
  };
  function DefaultSender(maxSendCount, client) {
    this.maxSendCount_1 = maxSendCount;
    this.client_1 = client;
    this.sentCount_1 = 0;
    this.currentCall_1 = null;
  }
  DefaultSender.prototype.execute_z0ufkc_k$ = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance_4();
    this.maxSendCount_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.interceptors_1 = tmp$ret$0;
  }
  HttpSend.prototype.intercept_gk34yd_k$ = function (block) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'This interceptors do not allow to intercept original call. Please use another overload and call `this.execute(request)` manually';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  };
  HttpSend.prototype.intercept_ss9ax6_k$ = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.interceptors_1;
    tmp0_plusAssign.add_1j60pz_k$(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_7() {
    init_properties_HttpTimeout_kt_x3i4pn();
    return LOGGER_7;
  }
  var LOGGER_7;
  function _set__requestTimeoutMillis__sraopa($this, _set____db54di) {
    $this._requestTimeoutMillis_1 = _set____db54di;
  }
  function _get__requestTimeoutMillis__mloc9m($this) {
    return $this._requestTimeoutMillis_1;
  }
  function _set__connectTimeoutMillis__byh7iv($this, _set____db54di) {
    $this._connectTimeoutMillis_1 = _set____db54di;
  }
  function _get__connectTimeoutMillis__i43jyj($this) {
    return $this._connectTimeoutMillis_1;
  }
  function _set__socketTimeoutMillis__e5zq02($this, _set____db54di) {
    $this._socketTimeoutMillis_1 = _set____db54di;
  }
  function _get__socketTimeoutMillis__7x1zq($this) {
    return $this._socketTimeoutMillis_1;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.set_requestTimeoutMillis_e4x1kf_k$(requestTimeoutMillis);
    $this.set_connectTimeoutMillis_agbf3q_k$(connectTimeoutMillis);
    $this.set_socketTimeoutMillis_nggir1_k$(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      requestTimeoutMillis = null;
    if (!(($mask0 & 2) === 0))
      connectTimeoutMillis = null;
    if (!(($mask0 & 4) === 0))
      socketTimeoutMillis = null;
    HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value == null ? true : value.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.HttpTimeoutCapabilityConfiguration.checkTimeoutValue.<anonymous>' call
      tmp$ret$0 = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.key_1 = new AttributeKey('TimeoutConfiguration');
  }
  Companion_2.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.$requestTimeout_1 = $requestTimeout;
    this.$request_1 = $request;
    this.$executionContext_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = delay(this.$requestTimeout_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.$request_1);
            get_LOGGER_7().trace_jqeghf_k$('Request timeout: ' + this.$request_1.get_url_18iuii_k$());
            cancel_2(this.$executionContext_1, ensureNotNull(cause.message), cause);
            return Unit_getInstance();
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
  HttpTimeout$Plugin$install$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.$requestTimeout_1, this.$request_1, this.$executionContext_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.cancel$default_bm1z3z_k$(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.$plugin_1 = $plugin;
    this.$scope_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.invoke_dqudng_k$ = function ($this$intercept, request, $cont) {
    var tmp = this.create_q4qdwm_k$($this$intercept, request, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpTimeout$Plugin$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.invoke_dqudng_k$(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.isWebSocket0__1 = isWebsocket(this.request_1.get_url_18iuii_k$().get_protocol_mv93kx_k$());
            var tmp_0;
            if (this.isWebSocket0__1) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.request_1.get_body_wojkyz_k$();
              tmp_0 = tmp_1 instanceof ClientUpgradeContent;
            }

            if (tmp_0) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.$this$intercept_1.execute_z0ufkc_k$(this.request_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            break;
          case 1:
            this.configuration1__1 = this.request_1.getCapabilityOrNull_qacdrm_k$(Plugin_getInstance_5());
            if (this.configuration1__1 == null ? hasNotNullTimeouts(this.$plugin_1) : false) {
              var tmp_2 = this;
              tmp_2.configuration1__1 = HttpTimeoutCapabilityConfiguration_init_$Create$_0(null, null, null, 7, null);
              this.request_1.setCapability_xtjfas_k$(Plugin_getInstance_5(), this.configuration1__1);
            }

            var tmp0_safe_receiver = this.configuration1__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_elvis_lhs = tmp0_safe_receiver.get_connectTimeoutMillis_jog9kq_k$();
                tmp0_safe_receiver.set_connectTimeoutMillis_agbf3q_k$(tmp0_elvis_lhs == null ? this.$plugin_1.connectTimeoutMillis_1 : tmp0_elvis_lhs);
                var tmp1_elvis_lhs = tmp0_safe_receiver.get_socketTimeoutMillis_3uzxud_k$();
                tmp0_safe_receiver.set_socketTimeoutMillis_nggir1_k$(tmp1_elvis_lhs == null ? this.$plugin_1.socketTimeoutMillis_1 : tmp1_elvis_lhs);
                var tmp2_elvis_lhs = tmp0_safe_receiver.get_requestTimeoutMillis_rgkxdt_k$();
                tmp0_safe_receiver.set_requestTimeoutMillis_e4x1kf_k$(tmp2_elvis_lhs == null ? this.$plugin_1.requestTimeoutMillis_1 : tmp2_elvis_lhs);
                var tmp3_elvis_lhs = tmp0_safe_receiver.get_requestTimeoutMillis_rgkxdt_k$();
                var requestTimeout = tmp3_elvis_lhs == null ? this.$plugin_1.requestTimeoutMillis_1 : tmp3_elvis_lhs;
                var tmp_3;
                if (requestTimeout == null) {
                  tmp_3 = true;
                } else {
                  Plugin_getInstance_5();
                  tmp_3 = equals(requestTimeout, new Long(-1, 2147483647));
                }
                if (tmp_3) {
                  tmp$ret$0 = Unit_getInstance();
                  break l$ret$1;
                }
                var executionContext = this.request_1.get_executionContext_yb2vgg_k$();
                var killer = launch$default(this.$scope_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, this.request_1, executionContext, null), 3, null);
                var tmp_4 = this.request_1.get_executionContext_yb2vgg_k$();
                tmp_4.invokeOnCompletion_t2apld_k$(HttpTimeout$Plugin$install$slambda$lambda(killer));
              }
               while (false);
            }

            ;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.execute_z0ufkc_k$(this.request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            return suspendResult;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  HttpTimeout$Plugin$install$slambda.prototype.create_q4qdwm_k$ = function ($this$intercept, request, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.$plugin_1, this.$scope_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.request_1 = request;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.invoke_dqudng_k$($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _get_requestTimeoutMillis__a8dgur($this) {
    return $this.requestTimeoutMillis_1;
  }
  function _get_connectTimeoutMillis__uhefde($this) {
    return $this.connectTimeoutMillis_1;
  }
  function _get_socketTimeoutMillis__bmvtj7($this) {
    return $this.socketTimeoutMillis_1;
  }
  HttpTimeoutCapabilityConfiguration.prototype.set_requestTimeoutMillis_e4x1kf_k$ = function (value) {
    this._requestTimeoutMillis_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.get_requestTimeoutMillis_rgkxdt_k$ = function () {
    return this._requestTimeoutMillis_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.set_connectTimeoutMillis_agbf3q_k$ = function (value) {
    this._connectTimeoutMillis_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.get_connectTimeoutMillis_jog9kq_k$ = function () {
    return this._connectTimeoutMillis_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.set_socketTimeoutMillis_nggir1_k$ = function (value) {
    this._socketTimeoutMillis_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.get_socketTimeoutMillis_3uzxud_k$ = function () {
    return this._socketTimeoutMillis_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.build_1k0s4u_k$ = function () {
    return new HttpTimeout(this.get_requestTimeoutMillis_rgkxdt_k$(), this.get_connectTimeoutMillis_jog9kq_k$(), this.get_socketTimeoutMillis_3uzxud_k$());
  };
  HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof HttpTimeoutCapabilityConfiguration)
      other;
    else
      THROW_CCE();
    if (!equals(this._requestTimeoutMillis_1, other._requestTimeoutMillis_1))
      return false;
    if (!equals(this._connectTimeoutMillis_1, other._connectTimeoutMillis_1))
      return false;
    if (!equals(this._socketTimeoutMillis_1, other._socketTimeoutMillis_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._requestTimeoutMillis_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this._connectTimeoutMillis_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this._socketTimeoutMillis_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this._requestTimeoutMillis_1 = new Long(0, 0);
    this._connectTimeoutMillis_1 = new Long(0, 0);
    this._socketTimeoutMillis_1 = new Long(0, 0);
  }
  function hasNotNullTimeouts($this) {
    return (!($this.requestTimeoutMillis_1 == null) ? true : !($this.connectTimeoutMillis_1 == null)) ? true : !($this.socketTimeoutMillis_1 == null);
  }
  function Plugin_5() {
    Plugin_instance_5 = this;
    this.key_1 = new AttributeKey('TimeoutPlugin');
    this.INFINITE_TIMEOUT_MS_1 = new Long(-1, 2147483647);
  }
  Plugin_5.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin_5.prototype.get_INFINITE_TIMEOUT_MS_q3atc6_k$ = function () {
    return this.INFINITE_TIMEOUT_MS_1;
  };
  Plugin_5.prototype.prepare_dvfkcr_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$_0(null, null, null, 7, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  };
  Plugin_5.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_dvfkcr_k$(block);
  };
  Plugin_5.prototype.install_q3gyxe_k$ = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_4());
    tmp.intercept_ss9ax6_k$(HttpTimeout$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_5.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_q3gyxe_k$(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_5;
  function Plugin_getInstance_5() {
    if (Plugin_instance_5 == null)
      new Plugin_5();
    return Plugin_instance_5;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_5();
    this.requestTimeoutMillis_1 = requestTimeoutMillis;
    this.connectTimeoutMillis_1 = connectTimeoutMillis;
    this.socketTimeoutMillis_1 = socketTimeoutMillis;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.get_url_18iuii_k$().buildString_xr87oh_k$();
    var tmp0_safe_receiver = request.getCapabilityOrNull_qacdrm_k$(Plugin_getInstance_5());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_requestTimeoutMillis_rgkxdt_k$());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException_init_$Init$_0(request, $this) {
    var tmp = request.get_url_18iuii_k$().toString();
    var tmp0_safe_receiver = request.getCapabilityOrNull_r3bgjj_k$(Plugin_getInstance_5());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_requestTimeoutMillis_rgkxdt_k$());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$_0(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$_0(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$_0);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  function unwrapRequestTimeoutException(block) {
    init_properties_HttpTimeout_kt_x3i4pn();
    try {
      return block();
    } catch ($p) {
      if ($p instanceof CancellationException) {
        throw unwrapCancellationException($p);
      } else {
        throw $p;
      }
    }
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function init_properties_HttpTimeout_kt_x3i4pn() {
    if (properties_initialized_HttpTimeout_kt_9oyjbd) {
    } else {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_7 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
    }
  }
  function get_LOGGER_8() {
    init_properties_UserAgent_kt_sdxr5m();
    return LOGGER_8;
  }
  var LOGGER_8;
  var properties_initialized_UserAgent_kt_pu3g16;
  function init_properties_UserAgent_kt_sdxr5m() {
    if (properties_initialized_UserAgent_kt_pu3g16) {
    } else {
      properties_initialized_UserAgent_kt_pu3g16 = true;
      LOGGER_8 = KtorSimpleLogger('io.ktor.client.plugins.UserAgent');
    }
  }
  function get_LOGGER_9() {
    init_properties_HttpCache_kt_lik4pm();
    return LOGGER_9;
  }
  var LOGGER_9;
  var properties_initialized_HttpCache_kt_wph2h6;
  function init_properties_HttpCache_kt_lik4pm() {
    if (properties_initialized_HttpCache_kt_wph2h6) {
    } else {
      properties_initialized_HttpCache_kt_wph2h6 = true;
      LOGGER_9 = KtorSimpleLogger('io.ktor.client.plugins.HttpCache');
    }
  }
  function get_LOGGER_10() {
    init_properties_HttpCookies_kt_jer1xv();
    return LOGGER_10;
  }
  var LOGGER_10;
  var properties_initialized_HttpCookies_kt_8twc09;
  function init_properties_HttpCookies_kt_jer1xv() {
    if (properties_initialized_HttpCookies_kt_8twc09) {
    } else {
      properties_initialized_HttpCookies_kt_8twc09 = true;
      LOGGER_10 = KtorSimpleLogger('io.ktor.client.plugins.HttpCookies');
    }
  }
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.get_call_wojxrb_k$(), content, _this__u8e3s4);
  }
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.call_1 = call;
    this.content_1 = content;
    this.origin_1 = origin;
    this.coroutineContext_1 = this.origin_1.get_coroutineContext_115oqo_k$();
  }
  DelegatedResponse.prototype.get_call_wojxrb_k$ = function () {
    return this.call_1;
  };
  DelegatedResponse.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  DelegatedResponse.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  DelegatedResponse.prototype.get_status_jnf6d7_k$ = function () {
    return this.origin_1.get_status_jnf6d7_k$();
  };
  DelegatedResponse.prototype.get_version_72w4j3_k$ = function () {
    return this.origin_1.get_version_72w4j3_k$();
  };
  DelegatedResponse.prototype.get_requestTime_wwxhg3_k$ = function () {
    return this.origin_1.get_requestTime_wwxhg3_k$();
  };
  DelegatedResponse.prototype.get_responseTime_scfvg7_k$ = function () {
    return this.origin_1.get_responseTime_scfvg7_k$();
  };
  DelegatedResponse.prototype.get_headers_ef25jx_k$ = function () {
    return this.origin_1.get_headers_ef25jx_k$();
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    init_properties_WebSockets_kt_l0lmoi();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_LOGGER_11() {
    init_properties_WebSockets_kt_l0lmoi();
    return LOGGER_11;
  }
  var LOGGER_11;
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, WebSocketException);
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function init_properties_WebSockets_kt_l0lmoi() {
    if (properties_initialized_WebSockets_kt_2t2hw2) {
    } else {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      REQUEST_EXTENSIONS_KEY = new AttributeKey('Websocket extensions');
      LOGGER_11 = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function _get_content__ps04ag_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = content$factory();
    tmp$ret$0 = $this.content$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return ByteChannel$default(false, 1, null);
  }
  function $pipeToCOROUTINE$9(_this__u8e3s4, output, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.output_1 = output;
  }
  $pipeToCOROUTINE$9.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = _get_content__ps04ag_0(this._this__u8e3s4__1);
            suspendResult = copyAndClose$default(tmp_0, this.output_1, new Long(0, 0), this, 2, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
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
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.content$delegate_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  ClientUpgradeContent.prototype.get_output_hs4j62_k$ = function () {
    return _get_content__ps04ag_0(this);
  };
  ClientUpgradeContent.prototype.pipeTo_n2uoz0_k$ = function (output, $cont) {
    var tmp = new $pipeToCOROUTINE$9(this, output, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function content$factory() {
    return getPropertyCallableRef('content', 1, KProperty1, function (receiver) {
      return _get_content__ps04ag_0(receiver);
    }, null);
  }
  function DefaultHttpRequest(call, data) {
    this.call_1 = call;
    this.method_1 = data.get_method_gl8esq_k$();
    this.url_1 = data.get_url_18iuii_k$();
    this.content_1 = data.get_body_wojkyz_k$();
    this.headers_1 = data.get_headers_ef25jx_k$();
    this.attributes_1 = data.get_attributes_dgqof4_k$();
  }
  DefaultHttpRequest.prototype.get_call_wojxrb_k$ = function () {
    return this.call_1;
  };
  DefaultHttpRequest.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.get_call_wojxrb_k$().get_coroutineContext_115oqo_k$();
  };
  DefaultHttpRequest.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  DefaultHttpRequest.prototype.get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  DefaultHttpRequest.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  DefaultHttpRequest.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  DefaultHttpRequest.prototype.get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  function HttpRequest_0() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    return tmp$ret$0;
  }
  function HttpRequestBuilder() {
    Companion_getInstance_11();
    var tmp = this;
    tmp.url_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.method_1 = Companion_getInstance_2().get_Get_18jsxf_k$();
    var tmp_0 = this;
    tmp_0.headers_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.body_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.executionContext_1 = SupervisorJob$default(null, 1, null);
    this.attributes_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  HttpRequestBuilder.prototype.set_method_32z5od_k$ = function (_set____db54di) {
    this.method_1 = _set____db54di;
  };
  HttpRequestBuilder.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  HttpRequestBuilder.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  HttpRequestBuilder.prototype.set_body_slzaj6_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  HttpRequestBuilder.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  HttpRequestBuilder.prototype.set_bodyType_oab65z_k$ = function (value) {
    if (!(value == null)) {
      this.attributes_1.put_btom12_k$(get_BodyTypeAttributeKey(), value);
    } else {
      this.attributes_1.remove_5z2j18_k$(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.get_bodyType_3n7prv_k$ = function () {
    return this.attributes_1.getOrNull_gb0h81_k$(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.set_executionContext_cut4m3_k$ = function (_set____db54di) {
    this.executionContext_1 = _set____db54di;
  };
  HttpRequestBuilder.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  HttpRequestBuilder.prototype.get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  HttpRequestBuilder.prototype.url_bmurb1_k$ = function (block) {
    return block(this.url_1, this.url_1);
  };
  HttpRequestBuilder.prototype.build_1k0s4u_k$ = function () {
    var tmp = this.url_1.build_1k0s4u_k$();
    var tmp_0 = this.method_1;
    var tmp_1 = this.headers_1.build_1k0s4u_k$();
    var tmp_2 = this.body_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.body_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.executionContext_1, this.attributes_1);
  };
  HttpRequestBuilder.prototype.setAttributes_jgzh5j_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.attributes_1;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
  };
  HttpRequestBuilder.prototype.takeFromWithExecutionContext_d233rf_k$ = function (builder) {
    this.executionContext_1 = builder.executionContext_1;
    return this.takeFrom_ixwwlq_k$(builder);
  };
  HttpRequestBuilder.prototype.takeFrom_ixwwlq_k$ = function (builder) {
    this.method_1 = builder.method_1;
    this.body_1 = builder.body_1;
    this.set_bodyType_oab65z_k$(builder.get_bodyType_3n7prv_k$());
    takeFrom_0(this.url_1, builder.url_1);
    this.url_1.set_encodedPathSegments_sz2zyo_k$(this.url_1.get_encodedPathSegments_tl8vo6_k$());
    appendAll(this.headers_1, builder.headers_1);
    putAll(this.attributes_1, builder.attributes_1);
    return this;
  };
  HttpRequestBuilder.prototype.setCapability_xtjfas_k$ = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.attributes_1.computeIfAbsent_ywdpog_k$(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.put_3mhbri_k$(key, capability);
  };
  HttpRequestBuilder.prototype.getCapabilityOrNull_qacdrm_k$ = function (key) {
    var tmp0_safe_receiver = this.attributes_1.getOrNull_gb0h81_k$(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.url_1 = url;
    this.method_1 = method;
    this.headers_1 = headers;
    this.body_1 = body;
    this.executionContext_1 = executionContext;
    this.attributes_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.attributes_1.getOrNull_gb0h81_k$(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_keys_wop4xp_k$();
    tmp.requiredCapabilities_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  HttpRequestData.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  HttpRequestData.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  HttpRequestData.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  HttpRequestData.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  HttpRequestData.prototype.get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  HttpRequestData.prototype.getCapabilityOrNull_r3bgjj_k$ = function (key) {
    var tmp0_safe_receiver = this.attributes_1.getOrNull_gb0h81_k$(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  HttpRequestData.prototype.get_requiredCapabilities_jn0wxu_k$ = function () {
    return this.requiredCapabilities_1;
  };
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.url_1 + ', method=' + this.method_1 + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.statusCode_1 = statusCode;
    this.requestTime_1 = requestTime;
    this.headers_1 = headers;
    this.version_1 = version;
    this.body_1 = body;
    this.callContext_1 = callContext;
    var tmp = this;
    tmp.responseTime_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.get_statusCode_g2w4u0_k$ = function () {
    return this.statusCode_1;
  };
  HttpResponseData.prototype.get_requestTime_wwxhg3_k$ = function () {
    return this.requestTime_1;
  };
  HttpResponseData.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  HttpResponseData.prototype.get_version_72w4j3_k$ = function () {
    return this.version_1;
  };
  HttpResponseData.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  HttpResponseData.prototype.get_callContext_mskb9k_k$ = function () {
    return this.callContext_1;
  };
  HttpResponseData.prototype.get_responseTime_scfvg7_k$ = function () {
    return this.responseTime_1;
  };
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.statusCode_1 + ')';
  };
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.url_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.body_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function HttpRequestPipeline_init_$Init$(developmentMode, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      developmentMode = false;
    HttpRequestPipeline.call($this, developmentMode);
    return $this;
  }
  function HttpRequestPipeline_init_$Create$(developmentMode, $mask0, $marker) {
    return HttpRequestPipeline_init_$Init$(developmentMode, $mask0, $marker, Object.create(HttpRequestPipeline.prototype));
  }
  function Phases() {
    Phases_instance = this;
    this.Before_1 = new PipelinePhase('Before');
    this.State_1 = new PipelinePhase('State');
    this.Transform_1 = new PipelinePhase('Transform');
    this.Render_1 = new PipelinePhase('Render');
    this.Send_1 = new PipelinePhase('Send');
  }
  Phases.prototype.get_Before_3ry4pk_k$ = function () {
    return this.Before_1;
  };
  Phases.prototype.get_State_ih4i88_k$ = function () {
    return this.State_1;
  };
  Phases.prototype.get_Transform_byqycd_k$ = function () {
    return this.Transform_1;
  };
  Phases.prototype.get_Render_3swp1b_k$ = function () {
    return this.Render_1;
  };
  Phases.prototype.get_Send_wo9sz5_k$ = function () {
    return this.Send_1;
  };
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().Before_1, Phases_getInstance().State_1, Phases_getInstance().Transform_1, Phases_getInstance().Render_1, Phases_getInstance().Send_1]);
    this.developmentMode_2 = developmentMode;
  }
  HttpRequestPipeline.prototype.get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_2;
  };
  function HttpSendPipeline_init_$Init$(developmentMode, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      developmentMode = false;
    HttpSendPipeline.call($this, developmentMode);
    return $this;
  }
  function HttpSendPipeline_init_$Create$(developmentMode, $mask0, $marker) {
    return HttpSendPipeline_init_$Init$(developmentMode, $mask0, $marker, Object.create(HttpSendPipeline.prototype));
  }
  function Phases_0() {
    Phases_instance_0 = this;
    this.Before_1 = new PipelinePhase('Before');
    this.State_1 = new PipelinePhase('State');
    this.Monitoring_1 = new PipelinePhase('Monitoring');
    this.Engine_1 = new PipelinePhase('Engine');
    this.Receive_1 = new PipelinePhase('Receive');
  }
  Phases_0.prototype.get_Before_3ry4pk_k$ = function () {
    return this.Before_1;
  };
  Phases_0.prototype.get_State_ih4i88_k$ = function () {
    return this.State_1;
  };
  Phases_0.prototype.get_Monitoring_rltjwv_k$ = function () {
    return this.Monitoring_1;
  };
  Phases_0.prototype.get_Engine_27ulqt_k$ = function () {
    return this.Engine_1;
  };
  Phases_0.prototype.get_Receive_oc3k86_k$ = function () {
    return this.Receive_1;
  };
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().Before_1, Phases_getInstance_0().State_1, Phases_getInstance_0().Monitoring_1, Phases_getInstance_0().Engine_1, Phases_getInstance_0().Receive_1]);
    this.developmentMode_2 = developmentMode;
  }
  HttpSendPipeline.prototype.get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_2;
  };
  function get_BodyTypeAttributeKey() {
    init_properties_RequestBody_kt_hroiwt();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function init_properties_RequestBody_kt_hroiwt() {
    if (properties_initialized_RequestBody_kt_agyv1b) {
    } else {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function request(_this__u8e3s4, urlString, block, $cont) {
    var tmp = new $requestCOROUTINE$10(_this__u8e3s4, urlString, block, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function request_0(_this__u8e3s4, block, $cont) {
    var tmp = new $requestCOROUTINE$11(_this__u8e3s4, block, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function request_1(_this__u8e3s4, builder, $cont) {
    return (new HttpStatement(builder, _this__u8e3s4)).execute_t7l9ha_k$($cont);
  }
  function request$lambda($this$null) {
    return Unit_getInstance();
  }
  function $requestCOROUTINE$10(_this__u8e3s4, urlString, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.urlString_1 = urlString;
    this.block_1 = block;
  }
  $requestCOROUTINE$10.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.urlString_1);
            this.block_1(tmp0_apply);
            tmp_0.tmp1_request0__1 = tmp0_apply;
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_request0__1, this._this__u8e3s4__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function $requestCOROUTINE$11(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.block_1 = block;
  }
  $requestCOROUTINE$11.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            this.block_1(tmp0_apply);
            tmp_0.tmp1_request0__1 = tmp0_apply;
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_request0__1, this._this__u8e3s4__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function get_RN_BYTES() {
    init_properties_FormDataContent_kt_nq7id3();
    return RN_BYTES;
  }
  var RN_BYTES;
  var properties_initialized_FormDataContent_kt_w3e0rf;
  function init_properties_FormDataContent_kt_nq7id3() {
    if (properties_initialized_FormDataContent_kt_w3e0rf) {
    } else {
      properties_initialized_FormDataContent_kt_w3e0rf = true;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.toByteArray' call
        var tmp0_toByteArray = Charsets_getInstance().get_UTF_8_ihn39z_k$();
        if (tmp0_toByteArray.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$())) {
          tmp$ret$0 = encodeToByteArray('\r\n');
          break $l$block;
        }
        tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.newEncoder_gqwcdg_k$(), '\r\n', 0, '\r\n'.length);
      }
      RN_BYTES = tmp$ret$0;
    }
  }
  function header(_this__u8e3s4, key, value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.get_headers_ef25jx_k$().append_ptbgmx_k$(key, toString(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
      tmp = Unit_getInstance();
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.call_1 = call;
    this.coroutineContext_1 = responseData.get_callContext_mskb9k_k$();
    this.status_1 = responseData.get_statusCode_g2w4u0_k$();
    this.version_1 = responseData.get_version_72w4j3_k$();
    this.requestTime_1 = responseData.get_requestTime_wwxhg3_k$();
    this.responseTime_1 = responseData.get_responseTime_scfvg7_k$();
    var tmp = this;
    var tmp_0 = responseData.get_body_wojkyz_k$();
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.content_1 = tmp0_elvis_lhs == null ? Companion_getInstance().get_Empty_i9b85g_k$() : tmp0_elvis_lhs;
    this.headers_1 = responseData.get_headers_ef25jx_k$();
  }
  DefaultHttpResponse.prototype.get_call_wojxrb_k$ = function () {
    return this.call_1;
  };
  DefaultHttpResponse.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  DefaultHttpResponse.prototype.get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  DefaultHttpResponse.prototype.get_version_72w4j3_k$ = function () {
    return this.version_1;
  };
  DefaultHttpResponse.prototype.get_requestTime_wwxhg3_k$ = function () {
    return this.requestTime_1;
  };
  DefaultHttpResponse.prototype.get_responseTime_scfvg7_k$ = function () {
    return this.responseTime_1;
  };
  DefaultHttpResponse.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  DefaultHttpResponse.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).get_url_18iuii_k$() + ', ' + this.get_status_jnf6d7_k$() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.get_call_wojxrb_k$().get_request_jdwg4m_k$();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.complete_9ww6vb_k$();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().get_UTF_8_ihn39z_k$();
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fallbackCharset_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$12.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this._this__u8e3s4__1);
            tmp_0.originCharset0__1 = tmp0_elvis_lhs == null ? this.fallbackCharset_1 : tmp0_elvis_lhs;
            this.decoder1__1 = this.originCharset0__1.newDecoder_zcettw_k$();
            this.set_state_a96kl8_k$(1);
            var tmp_1 = this._this__u8e3s4__1.get_call_wojxrb_k$();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(Input);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Input), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.bodyNullable_ld5qr1_k$(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.decoder1__1, input, 0, 2, null);
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
  function HttpResponsePipeline_init_$Init$(developmentMode, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      developmentMode = false;
    HttpResponsePipeline.call($this, developmentMode);
    return $this;
  }
  function HttpResponsePipeline_init_$Create$(developmentMode, $mask0, $marker) {
    return HttpResponsePipeline_init_$Init$(developmentMode, $mask0, $marker, Object.create(HttpResponsePipeline.prototype));
  }
  function Phases_1() {
    Phases_instance_1 = this;
    this.Receive_1 = new PipelinePhase('Receive');
    this.Parse_1 = new PipelinePhase('Parse');
    this.Transform_1 = new PipelinePhase('Transform');
    this.State_1 = new PipelinePhase('State');
    this.After_1 = new PipelinePhase('After');
  }
  Phases_1.prototype.get_Receive_oc3k86_k$ = function () {
    return this.Receive_1;
  };
  Phases_1.prototype.get_Parse_if5ca2_k$ = function () {
    return this.Parse_1;
  };
  Phases_1.prototype.get_Transform_byqycd_k$ = function () {
    return this.Transform_1;
  };
  Phases_1.prototype.get_State_ih4i88_k$ = function () {
    return this.State_1;
  };
  Phases_1.prototype.get_After_i6zngz_k$ = function () {
    return this.After_1;
  };
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().Receive_1, Phases_getInstance_1().Parse_1, Phases_getInstance_1().Transform_1, Phases_getInstance_1().State_1, Phases_getInstance_1().After_1]);
    this.developmentMode_2 = developmentMode;
  }
  HttpResponsePipeline.prototype.get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_2;
  };
  function HttpReceivePipeline_init_$Init$(developmentMode, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      developmentMode = false;
    HttpReceivePipeline.call($this, developmentMode);
    return $this;
  }
  function HttpReceivePipeline_init_$Create$(developmentMode, $mask0, $marker) {
    return HttpReceivePipeline_init_$Init$(developmentMode, $mask0, $marker, Object.create(HttpReceivePipeline.prototype));
  }
  function Phases_2() {
    Phases_instance_2 = this;
    this.Before_1 = new PipelinePhase('Before');
    this.State_1 = new PipelinePhase('State');
    this.After_1 = new PipelinePhase('After');
  }
  Phases_2.prototype.get_Before_3ry4pk_k$ = function () {
    return this.Before_1;
  };
  Phases_2.prototype.get_State_ih4i88_k$ = function () {
    return this.State_1;
  };
  Phases_2.prototype.get_After_i6zngz_k$ = function () {
    return this.After_1;
  };
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().Before_1, Phases_getInstance_2().State_1, Phases_getInstance_2().After_1]);
    this.developmentMode_2 = developmentMode;
  }
  HttpReceivePipeline.prototype.get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_2;
  };
  function HttpResponseContainer(expectedType, response) {
    this.expectedType_1 = expectedType;
    this.response_1 = response;
  }
  HttpResponseContainer.prototype.get_expectedType_79s38b_k$ = function () {
    return this.expectedType_1;
  };
  HttpResponseContainer.prototype.get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  HttpResponseContainer.prototype.component1_7eebsc_k$ = function () {
    return this.expectedType_1;
  };
  HttpResponseContainer.prototype.component2_7eebsb_k$ = function () {
    return this.response_1;
  };
  HttpResponseContainer.prototype.copy_17pj19_k$ = function (expectedType, response) {
    return new HttpResponseContainer(expectedType, response);
  };
  HttpResponseContainer.prototype.copy$default_dtbv4w_k$ = function (expectedType, response, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      expectedType = this.expectedType_1;
    if (!(($mask0 & 2) === 0))
      response = this.response_1;
    return this.copy_17pj19_k$(expectedType, response);
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.expectedType_1 + ', response=' + toString(this.response_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.expectedType_1.hashCode();
    result = imul(result, 31) + hashCode(this.response_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.expectedType_1.equals(tmp0_other_with_cast.expectedType_1))
      return false;
    if (!equals(this.response_1, tmp0_other_with_cast.response_1))
      return false;
    return true;
  };
  function _get_builder__bi005y($this) {
    return $this.builder_1;
  }
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.builder_1.get_attributes_dgqof4_k$().getOrNull_gb0h81_k$(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_keys_wop4xp_k$();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
        }
      }
      tmp$ret$0 = tmp0_filterIsInstanceTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp2_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp0_requireNotNull = pluginOrNull($this.client_1, element_0);
          // Inline function 'kotlin.contracts.contract' call
          if (tmp0_requireNotNull == null) {
            var tmp$ret$2;
            // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
            var message = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            tmp$ret$3 = tmp0_requireNotNull;
            break $l$block;
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpStatement$execute$slambda.prototype.invoke_vs1ecp_k$ = function (it, $cont) {
    var tmp = this.create_yw8py6_k$(it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpStatement$execute$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_vs1ecp_k$(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = save(this.it_1.get_call_wojxrb_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.get_response_xlk07e_k$();
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
  HttpStatement$execute$slambda.prototype.create_yw8py6_k$ = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.it_1 = it;
    return i;
  };
  HttpStatement$execute$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_yw8py6_k$(value instanceof HttpResponse ? value : THROW_CCE(), completion);
  };
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_vs1ecp_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$13(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.block_1 = block;
  }
  $executeCOROUTINE$13.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(13);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(12);
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.executeUnsafe_lxe0js_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(5);
            suspendResult = this.block_1(this.response1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.tmp$ret$03__1 = suspendResult;
            this.set_state_a96kl8_k$(6);
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.tmp4__1 = this.tmp$ret$03__1;
            this.set_state_a96kl8_k$(7);
            suspendResult = this._this__u8e3s4__1.cleanup_n4xe9d_k$(this.response1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.tmp4__1;
          case 8:
            this.set_state_a96kl8_k$(9);
            suspendResult = this._this__u8e3s4__1.cleanup_n4xe9d_k$(this.response1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.tmp$ret$40__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(13);
            this.set_state_a96kl8_k$(15);
            continue $sm;
          case 10:
            this.set_exceptionState_s9sevl_k$(12);
            this.t5__1 = this.get_exception_x0n6w6_k$();
            this.set_state_a96kl8_k$(11);
            suspendResult = this._this__u8e3s4__1.cleanup_n4xe9d_k$(this.response1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.t5__1;
          case 12:
            this.set_exceptionState_s9sevl_k$(13);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof CancellationException) {
              var cause = this.get_exception_x0n6w6_k$();
              throw unwrapCancellationException(cause);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 13:
            throw this.get_exception_x0n6w6_k$();
          case 14:
            this.set_exceptionState_s9sevl_k$(13);
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(15);
            continue $sm;
          case 15:
            return this.tmp$ret$40__1;
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function $executeUnsafeCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$14.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.builder1__1 = (new HttpRequestBuilder()).takeFromWithExecutionContext_d233rf_k$(this._this__u8e3s4__1.builder_1);
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.client_1.execute_z0ufkc_k$(this.builder1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.get_response_xlk07e_k$();
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof CancellationException) {
              var cause = this.get_exception_x0n6w6_k$();
              throw unwrapCancellationException(cause);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            this.set_exceptionState_s9sevl_k$(4);
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            return this.tmp$ret$00__1;
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function $cleanupCOROUTINE$15(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$15.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this._this__u8e3s4__2.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance()));
            tmp_0.job0__1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.job0__1.complete_9ww6vb_k$();
            ;
            this.set_exceptionState_s9sevl_k$(1);
            cancel_1(this._this__u8e3s4__2.get_content_h02jrk_k$());
            ;
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              this._1__1 = this.get_exception_x0n6w6_k$();
              this.set_state_a96kl8_k$(2);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 2:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(3);
            suspendResult = this.job0__1.join_kbq7u1_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.builder_1 = builder;
    this.client_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.get_client_byfnx0_k$ = function () {
    return this.client_1;
  };
  HttpStatement.prototype.execute_ocvbo_k$ = function (block, $cont) {
    var tmp = new $executeCOROUTINE$13(this, block, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpStatement.prototype.execute_t7l9ha_k$ = function ($cont) {
    return this.execute_ocvbo_k$(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.executeUnsafe_lxe0js_k$ = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$14(this, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpStatement.prototype.cleanup_n4xe9d_k$ = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$15(this, _this__u8e3s4, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.builder_1.get_url_18iuii_k$() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).get_channel_dhi7tm_k$();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.$contentLength_1 = $contentLength;
    this.$this_observable_1 = $this_observable;
    this.$listener_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.invoke_65o7wc_k$ = function ($this$writer, $cont) {
    var tmp = this.create_4ctjxj_k$($this$writer, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  observable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_65o7wc_k$((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(15);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.tmp0_useInstance1__1 = get_ByteArrayPool();
            this.instance2__1 = this.tmp0_useInstance1__1.borrow_mvkpor_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(14);
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.$contentLength_1;
            tmp_1.total5__1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.bytesSend6__1 = new Long(0, 0);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            if (!!this.$this_observable_1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.set_state_a96kl8_k$(5);
            suspendResult = readAvailable(this.$this_observable_1, this.instance2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.read7__1 = suspendResult;
            this.set_state_a96kl8_k$(6);
            suspendResult = this.$this$writer_1.get_channel_dhi7tm_k$().writeFully_ol1csb_k$(this.instance2__1, 0, this.read7__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp0_plus = this.bytesSend6__1;
            tmp_2.bytesSend6__1 = tmp0_plus.plus_u6jwas_k$(toLong(this.read7__1));
            this.set_state_a96kl8_k$(7);
            suspendResult = this.$listener_1(this.bytesSend6__1, this.total5__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 8:
            this.closedCause8__1 = this.$this_observable_1.get_closedCause_o1qcj8_k$();
            this.$this$writer_1.get_channel_dhi7tm_k$().close_9zy44b_k$(this.closedCause8__1);
            ;
            if (this.closedCause8__1 == null ? this.bytesSend6__1.equals(new Long(0, 0)) : false) {
              this.set_state_a96kl8_k$(9);
              suspendResult = this.$listener_1(this.bytesSend6__1, this.total5__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(10);
              continue $sm;
            }

            break;
          case 9:
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 10:
            this.tmp$ret$04__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(15);
            this.set_state_a96kl8_k$(11);
            var tmp_3 = this;
            continue $sm;
          case 11:
            var tmp_4 = this;
            this.tmp0_useInstance1__1.recycle_ln1phz_k$(this.instance2__1);
            tmp_4.tmp$ret$40__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 12:
            this.tmp0_useInstance1__1.recycle_ln1phz_k$(this.instance2__1);
            ;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(13);
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.set_exceptionState_s9sevl_k$(15);
            var t = this.get_exception_x0n6w6_k$();
            this.tmp0_useInstance1__1.recycle_ln1phz_k$(this.instance2__1);
            ;
            throw t;
          case 15:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 15) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  observable$slambda.prototype.create_4ctjxj_k$ = function ($this$writer, completion) {
    var i = new observable$slambda(this.$contentLength_1, this.$this_observable_1, this.$listener_1, completion);
    i.$this$writer_1 = $this$writer;
    return i;
  };
  observable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4ctjxj_k$((!(value == null) ? isInterface(value, WriterScope) : false) ? value : THROW_CCE(), completion);
  };
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.invoke_65o7wc_k$($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.response_1 = response;
    this.cause_1 = cause;
  }
  HttpResponseReceiveFail.prototype.get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  HttpResponseReceiveFail.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  var properties_initialized_ClientEvents_kt_rdee4m;
  function init_properties_ClientEvents_kt_kkxb6e() {
    if (properties_initialized_ClientEvents_kt_rdee4m) {
    } else {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.contentLength_1 = new Long(0, 0);
  }
  EmptyContent.prototype.get_contentLength_a5o8yy_k$ = function () {
    return this.contentLength_1;
  };
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.build_1k0s4u_k$();
  }
  function buildHeaders$default(block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      block = buildHeaders$lambda;
    }
    return buildHeaders(block);
  }
  function buildHeaders$lambda($this$null) {
    return Unit_getInstance();
  }
  function ProxyConfig() {
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.create_ipi7rm_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.create_g3w65u_k$ = function (block) {
    return this.create_ipi7rm_k$(block);
  };
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().get_IS_NODE_myvmya_k$()) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.forEach_arwel4_k$(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$17($this, request, callContext, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$16(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.data_1 = data;
  }
  $executeCOROUTINE$16.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.callContext0__1 = suspendResult;
            this.clientConfig1__1 = this.data_1.get_attributes_dgqof4_k$().get_ny5huj_k$(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.data_1)) {
              this.set_state_a96kl8_k$(5);
              suspendResult = executeWebSocketRequest(this._this__u8e3s4__1, this.data_1, this.callContext0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            var tmp_0 = this;
            tmp_0.requestTime2__1 = GMTDate$default(null, 1, null);
            this.set_state_a96kl8_k$(3);
            suspendResult = toRaw(this.data_1, this.clientConfig1__1, this.callContext0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.rawRequest3__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
            suspendResult = commonFetch(this.data_1.get_url_18iuii_k$().toString(), this.rawRequest3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_3().get_HTTP_1_1_l1gte3_k$();
            var body = readBody(CoroutineScope_0(this.callContext0__1), rawResponse);
            return new HttpResponseData(status, this.requestTime2__1, headers, version, body, this.callContext0__1);
          case 5:
            return suspendResult;
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
  function $executeWebSocketRequestCOROUTINE$17(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
    this.callContext_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$17.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_0 = this;
            tmp_0.requestTime0__1 = GMTDate$default(null, 1, null);
            this.urlString1__1 = this.request_1.get_url_18iuii_k$().toString();
            this.socket2__1 = createWebSocket(this._this__u8e3s4__1, this.urlString1__1, this.request_1.get_headers_ef25jx_k$());
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = awaitConnection(this.socket2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              cancel_3(this.callContext_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.urlString1__1, cause));
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            var session = new JsWebSocketSession(this.callContext_1, this.socket2__1);
            return new HttpResponseData(Companion_getInstance_1().get_OK_kntokb_k$(), this.requestTime0__1, Companion_getInstance_4().get_Empty_i9b85g_k$(), Companion_getInstance_3().get_HTTP_1_1_l1gte3_k$(), session, this.callContext_1);
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.config_1 = config;
    this.dispatcher_1 = Dispatchers_getInstance().get_Default_goqax4_k$();
    this.supportedCapabilities_1 = setOf_0([Plugin_getInstance_5(), WebSocketCapability_getInstance()]);
    // Inline function 'kotlin.check' call
    var tmp0_check = this.config_1.get_proxy_ix1jyd_k$() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      tmp$ret$0 = 'Proxy unsupported in Js engine.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  JsClientEngine.prototype.get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  JsClientEngine.prototype.get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  JsClientEngine.prototype.get_supportedCapabilities_gwz15x_k$ = function () {
    return this.supportedCapabilities_1;
  };
  JsClientEngine.prototype.execute_95skru_k$ = function (data, $cont) {
    var tmp = new $executeCOROUTINE$16(this, data, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.get_isCancelled_trk8pu_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.invokeOnCancellation_yygv6h_k$(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp0_apply.append_ssq29y_k$(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    tmp$ret$3 = tmp0_apply;
    tmp$ret$4 = tmp$ret$3.toString();
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.origin_1 = origin;
    captureStack(this, JsError);
  }
  JsError.prototype.get_origin_hq9xkf_k$ = function () {
    return this.origin_1;
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.append_ptbgmx_k$(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this_mapToKtor;
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
        $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp2_resumeWithException = new WebSocketException(asString(event));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp1_failure = Companion_getInstance_5();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
        $cancellable.resumeWith_s3a3yh_k$(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $cont) {
    var tmp = new $toRawCOROUTINE$18(_this__u8e3s4, clientConfig, callContext, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function buildObject(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.$content_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.invoke_65o7wc_k$ = function ($this$writer, $cont) {
    var tmp = this.create_4ctjxj_k$($this$writer, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  toRaw$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_65o7wc_k$((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$content_1.writeTo_wvkb45_k$(this.$this$writer_1.get_channel_dhi7tm_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  toRaw$slambda.prototype.create_4ctjxj_k$ = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.$content_1, completion);
    i.$this$writer_1 = $this$writer;
    return i;
  };
  toRaw$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4ctjxj_k$((!(value == null) ? isInterface(value, WriterScope) : false) ? value : THROW_CCE(), completion);
  };
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.invoke_65o7wc_k$($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.get_method_gl8esq_k$().get_value_j01efc_k$();
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.get_followRedirects_a62ikd_k$()) {
        var tmp$ret$2;
        // Inline function 'org.w3c.fetch.FOLLOW' call
        var tmp1__get_FOLLOW__dfxswv = null;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'follow';
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        // Inline function 'org.w3c.fetch.MANUAL' call
        var tmp3__get_MANUAL__lu8bc8 = null;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'manual';
        var tmp2_unsafeCast = tmp$ret$3;
        tmp$ret$4 = tmp2_unsafeCast;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        tmp$ret$6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$18(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.clientConfig_1 = clientConfig;
    this.callContext_1 = callContext;
  }
  $toRawCOROUTINE$18.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.jsHeaders0__1 = {};
            var tmp_0 = this._this__u8e3s4__1.get_headers_ef25jx_k$();
            var tmp_1 = this._this__u8e3s4__1.get_body_wojkyz_k$();
            mergeHeaders(tmp_0, tmp_1, toRaw$lambda(this.jsHeaders0__1));
            this.content1__1 = this._this__u8e3s4__1.get_body_wojkyz_k$();
            var tmp_2 = this.content1__1;
            if (tmp_2 instanceof ByteArrayContent) {
              this.WHEN_RESULT2__1 = this.content1__1.bytes_1k3k2z_k$();
              this.set_state_a96kl8_k$(3);
              continue $sm;
            } else {
              var tmp_3 = this.content1__1;
              if (tmp_3 instanceof ReadChannelContent) {
                this.set_state_a96kl8_k$(2);
                var tmp_4 = this.content1__1.readFrom_ecr4ww_k$();
                suspendResult = tmp_4.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_5 = this.content1__1;
                if (tmp_5 instanceof WriteChannelContent) {
                  this.set_state_a96kl8_k$(1);
                  var tmp_6 = GlobalScope_getInstance();
                  var tmp_7 = writer$default(tmp_6, this.callContext_1, false, toRaw$slambda_0(this.content1__1, null), 2, null).get_channel_dhi7tm_k$();
                  suspendResult = tmp_7.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.WHEN_RESULT2__1 = null;
                  this.set_state_a96kl8_k$(3);
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_8 = this;
            tmp_8.WHEN_RESULT2__1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_9 = this;
            tmp_9.WHEN_RESULT2__1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            var bodyBytes = this.WHEN_RESULT2__1;
            return buildObject(toRaw$lambda_0(this._this__u8e3s4__1, this.jsHeaders0__1, this.clientConfig_1, bodyBytes));
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function asByteArray(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0;
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().get_Empty_i9b85g_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).get_channel_dhi7tm_k$();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.$stream_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.invoke_65o7wc_k$ = function ($this$writer, $cont) {
    var tmp = this.create_4ctjxj_k$($this$writer, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  channelFromStream$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_65o7wc_k$((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.reader0__1 = this.$stream_1.getReader();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(2);
            suspendResult = readChunk(this.reader0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp0_elvis_lhs1__1 = suspendResult;
            if (this.tmp0_elvis_lhs1__1 == null) {
              this.set_exceptionState_s9sevl_k$(6);
              this.set_state_a96kl8_k$(8);
              var tmp_0 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT2__1 = this.tmp0_elvis_lhs1__1;
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 3:
            this.chunk3__1 = this.WHEN_RESULT2__1;
            this.set_state_a96kl8_k$(4);
            suspendResult = writeFully(this.$this$writer_1.get_channel_dhi7tm_k$(), asByteArray(this.chunk3__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              this.reader0__1.cancel(cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 6:
            throw this.get_exception_x0n6w6_k$();
          case 7:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 8:
            return Unit_getInstance();
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
  channelFromStream$slambda.prototype.create_4ctjxj_k$ = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.$stream_1, completion);
    i.$this$writer_1 = $this$writer;
    return i;
  };
  channelFromStream$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4ctjxj_k$((!(value == null) ? isInterface(value, WriterScope) : false) ? value : THROW_CCE(), completion);
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.invoke_65o7wc_k$($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.invokeOnCancellation_yygv6h_k$(commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().get_IS_BROWSER_e36mbg_k$()) {
      tmp = fetch(input, init);
    } else {
      tmp = jsRequireNodeFetch()(input, init);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().get_IS_BROWSER_e36mbg_k$()) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().get_IS_BROWSER_e36mbg_k$()) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      {
        throw Error_init_$Create$("Error loading module 'node-fetch': " + $p);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).get_channel_dhi7tm_k$();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.trySend_3hclq4_k$(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.close_9zy44b_k$(cause);
      return $this_writer.get_channel_dhi7tm_k$().close_9zy44b_k$(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.close$default_jao18g_k$(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.$response_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.invoke_65o7wc_k$ = function ($this$writer, $cont) {
    var tmp = this.create_4ctjxj_k$($this$writer, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  readBodyNode$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_65o7wc_k$((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.$response_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.body0__1 = tmp_1;
            var tmp_2 = this;
            tmp_2.responseData1__1 = Channel$default(1, null, null, 6, null);
            this.body0__1.on('data', readBodyNode$slambda$lambda(this.responseData1__1, this.body0__1));
            this.body0__1.on('error', readBodyNode$slambda$lambda_0(this.responseData1__1, this.$this$writer_1));
            this.body0__1.on('end', readBodyNode$slambda$lambda_1(this.responseData1__1));
            this.set_exceptionState_s9sevl_k$(5);
            this.tmp1_iterator2__1 = this.responseData1__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this.tmp1_iterator2__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.chunk3__1 = this.tmp1_iterator2__1.next_20eer_k$();
            this.set_state_a96kl8_k$(3);
            suspendResult = writeFully(this.$this$writer_1.get_channel_dhi7tm_k$(), this.chunk3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.body0__1.resume();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              this.body0__1.destroy(cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 6:
            throw this.get_exception_x0n6w6_k$();
          case 7:
            this.set_exceptionState_s9sevl_k$(6);
            ;
            return Unit_getInstance();
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
  readBodyNode$slambda.prototype.create_4ctjxj_k$ = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.$response_1, completion);
    i.$this$writer_1 = $this$writer;
    return i;
  };
  readBodyNode$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4ctjxj_k$((!(value == null) ? isInterface(value, WriterScope) : false) ? value : THROW_CCE(), completion);
  };
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.invoke_65o7wc_k$($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ConnectTimeoutException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    ConnectTimeoutException.call($this, message, cause);
    return $this;
  }
  function ConnectTimeoutException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = ConnectTimeoutException_init_$Init$(message, cause, $mask0, $marker, Object.create(ConnectTimeoutException.prototype));
    captureStack(tmp, ConnectTimeoutException_init_$Create$);
    return tmp;
  }
  function ConnectTimeoutException(message, cause) {
    IOException.call(this, message, cause);
    captureStack(this, ConnectTimeoutException);
  }
  function SocketTimeoutException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    SocketTimeoutException.call($this, message, cause);
    return $this;
  }
  function SocketTimeoutException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = SocketTimeoutException_init_$Init$(message, cause, $mask0, $marker, Object.create(SocketTimeoutException.prototype));
    captureStack(tmp, SocketTimeoutException_init_$Create$);
    return tmp;
  }
  function SocketTimeoutException(message, cause) {
    IOException.call(this, message, cause);
    captureStack(this, SocketTimeoutException);
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function _get_websocket__2qm0ru($this) {
    return $this.websocket_1;
  }
  function _get__closeReason__rkk1fy($this) {
    return $this._closeReason_1;
  }
  function _get__incoming__1bn23w($this) {
    return $this._incoming_1;
  }
  function _get__outgoing__emmja2($this) {
    return $this._outgoing_1;
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_6().byCode_2tpqvq_k$(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    tmp$ret$0 = tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0;
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = new Int8Array(data);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0._closeReason_1.completeExceptionally_7s0ccc_k$(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0._incoming_1.trySend_3hclq4_k$(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0._closeReason_1.completeExceptionally_7s0ccc_k$(cause);
      this$0._incoming_1.close_9zy44b_k$(cause);
      this$0._outgoing_1.cancel$default_bm1z3z_k$(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0._closeReason_1.complete_8y7ynm_k$(reason);
      this$0._incoming_1.trySend_3hclq4_k$(Close_init_$Create$(reason));
      this$0._incoming_1.close$default_jao18g_k$(null, 1, null);
      this$0._outgoing_1.cancel$default_bm1z3z_k$(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  JsWebSocketSession$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(10);
            var tmp_0 = this;
            tmp_0.tmp0_consumeEach0__1 = this.this$0__1._outgoing_1;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.cause2__1 = null;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_exceptionState_s9sevl_k$(8);
            this.tmp0_iterator5__1 = this.tmp0_consumeEach0__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            suspendResult = this.tmp0_iterator5__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            var e = this.tmp0_iterator5__1.next_20eer_k$();
            var tmp0_subject = e.get_frameType_hj325a_k$();
            var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
            switch (tmp0) {
              case 0:
                var text = e.get_data_wokkxf_k$();
                this.this$0__1.websocket_1.send(String$default(text, 0, 0, null, 14, null));
                ;
                break;
              case 1:
                var tmp_1 = e.get_data_wokkxf_k$();
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.this$0__1.websocket_1.send(frameData);
                ;
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    var tmp_2 = e.get_data_wokkxf_k$();
                    writeFully$default(builder, tmp_2, 0, 0, 6, null);
                    tmp$ret$0 = builder.build_1k0s4u_k$();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.release_wtm6d2_k$();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.readText$default_mjq276_k$(0, 0, 3, null);
                this.this$0__1._closeReason_1.complete_8y7ynm_k$(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.this$0__1)) {
                  this.this$0__1.websocket_1.close();
                } else {
                  this.this$0__1.websocket_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 6:
            this.tmp$ret$24__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(7);
            var tmp_3 = this;
            continue $sm;
          case 7:
            var tmp_4 = this;
            cancelConsumed(this.tmp0_consumeEach0__1, this.cause2__1);
            tmp_4.tmp$ret$61__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 8:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof Error) {
              var e_0 = this.get_exception_x0n6w6_k$();
              var tmp_6 = this;
              this.cause2__1 = e_0;
              throw e_0;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 9:
            this.set_exceptionState_s9sevl_k$(10);
            var t = this.get_exception_x0n6w6_k$();
            cancelConsumed(this.tmp0_consumeEach0__1, this.cause2__1);
            ;
            throw t;
          case 10:
            throw this.get_exception_x0n6w6_k$();
          case 11:
            cancelConsumed(this.tmp0_consumeEach0__1, this.cause2__1);
            ;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  JsWebSocketSession$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.websocket_1.close();
        tmp = Unit_getInstance();
      } else {
        this$0.websocket_1.close(Codes_INTERNAL_ERROR_getInstance().get_code_wok7xy_k$(), 'Client failed');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.coroutineContext_1 = coroutineContext;
    this.websocket_1 = websocket;
    var tmp = this;
    tmp._closeReason_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    var tmp_1 = Factory_getInstance().get_UNLIMITED_eshsm0_k$();
    tmp_0._incoming_1 = Channel$default(tmp_1, null, null, 6, null);
    var tmp_2 = this;
    var tmp_3 = Factory_getInstance().get_UNLIMITED_eshsm0_k$();
    tmp_2._outgoing_1 = Channel$default(tmp_3, null, null, 6, null);
    this.incoming_1 = this._incoming_1;
    this.outgoing_1 = this._outgoing_1;
    this.closeReason_1 = this._closeReason_1;
    var tmp$ret$2;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    var tmp1__get_ARRAYBUFFER__gbce7n = null;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'arraybuffer';
    var tmp0_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    this.websocket_1.binaryType = tmp$ret$2;
    this.websocket_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.websocket_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.websocket_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.coroutineContext_1.get_j1ktw6_k$(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.invokeOnCompletion_t2apld_k$(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  JsWebSocketSession.prototype.get_incoming_u9os29_k$ = function () {
    return this.incoming_1;
  };
  JsWebSocketSession.prototype.get_outgoing_us7o3v_k$ = function () {
    return this.outgoing_1;
  };
  JsWebSocketSession.prototype.get_extensions_kxksyl_k$ = function () {
    return emptyList();
  };
  JsWebSocketSession.prototype.get_closeReason_g1m41f_k$ = function () {
    return this.closeReason_1;
  };
  JsWebSocketSession.prototype.set_pingIntervalMillis_ii9r6b_k$ = function (_anonymous_parameter_0__qggqh8) {
    throw new WebSocketException('Websocket ping-pong is not supported in JS engine.');
  };
  JsWebSocketSession.prototype.get_pingIntervalMillis_4y22i_k$ = function () {
    throw new WebSocketException('Websocket ping-pong is not supported in JS engine.');
  };
  JsWebSocketSession.prototype.set_timeoutMillis_5bgqir_k$ = function (_anonymous_parameter_0__qggqh8) {
    throw new WebSocketException('Websocket timeout is not supported in JS engine.');
  };
  JsWebSocketSession.prototype.get_timeoutMillis_ig3vfi_k$ = function () {
    throw new WebSocketException('Websocket timeout is not supported in JS engine.');
  };
  JsWebSocketSession.prototype.set_masking_ystj9s_k$ = function (_anonymous_parameter_0__qggqh8) {
    throw new WebSocketException('Masking switch is not supported in JS engine.');
  };
  JsWebSocketSession.prototype.get_masking_f5rvkd_k$ = function () {
    return true;
  };
  JsWebSocketSession.prototype.set_maxFrameSize_b0eezk_k$ = function (_anonymous_parameter_0__qggqh8) {
    throw new WebSocketException('Max frame size switch is not supported in Js engine.');
  };
  JsWebSocketSession.prototype.get_maxFrameSize_9zaht9_k$ = function () {
    return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
  };
  JsWebSocketSession.prototype.start_x95223_k$ = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    var tmp0_require = negotiatedExtensions.isEmpty_y1axqb_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.start.<anonymous>' call
      tmp$ret$0 = 'Extensions are not supported.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  JsWebSocketSession.prototype.flush_p85oz5_k$ = function ($cont) {
    return Unit_getInstance();
  };
  JsWebSocketSession.prototype.terminate_hmv27k_k$ = function () {
    this._incoming_1.cancel$default_bm1z3z_k$(null, 1, null);
    this._outgoing_1.cancel$default_bm1z3z_k$(null, 1, null);
    cancel$default_0(this._closeReason_1, 'WebSocket terminated', null, 2, null);
    this.websocket_1.close();
  };
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (true) {
      if (!(exception instanceof CancellationException)) {
        break $l$loop;
      }
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  //region block: post-declaration
  HttpClientEngineBase.prototype.get_supportedCapabilities_gwz15x_k$ = get_supportedCapabilities;
  HttpClientEngineBase.prototype.install_vgwzcp_k$ = install;
  KtorCallContextElement.prototype.get_j1ktw6_k$ = get;
  KtorCallContextElement.prototype.fold_iindx8_k$ = fold;
  KtorCallContextElement.prototype.minusKey_y21q55_k$ = minusKey;
  KtorCallContextElement.prototype.plus_rgw9wi_k$ = plus;
  Plugin.prototype.prepare$default_khluaj_k$ = prepare$default;
  Companion_1.prototype.prepare$default_khluaj_k$ = prepare$default;
  HttpRequest$1.prototype.get_coroutineContext_115oqo_k$ = get_coroutineContext;
  Plugin_0.prototype.prepare$default_khluaj_k$ = prepare$default;
  Plugin_1.prototype.prepare$default_khluaj_k$ = prepare$default;
  Plugin_2.prototype.prepare$default_khluaj_k$ = prepare$default;
  Plugin_3.prototype.prepare$default_khluaj_k$ = prepare$default;
  Plugin_4.prototype.prepare$default_khluaj_k$ = prepare$default;
  Plugin_5.prototype.prepare$default_khluaj_k$ = prepare$default;
  Js.prototype.create$default_rxs1a_k$ = create$default;
  JsClientEngine.prototype.install_vgwzcp_k$ = install;
  JsWebSocketSession.prototype.start$default_thc4qx_k$ = start$default;
  JsWebSocketSession.prototype.send_xu75tq_k$ = send;
  //endregion
  //region block: init
  BODY_FAILED_DECODING = '<body failed decoding>';
  NO_RESPONSE_TEXT = '<no response text provided>';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Js_getInstance;
  _.$_$.b = Plugin_getInstance_5;
  _.$_$.c = HttpRequestBuilder;
  _.$_$.d = header;
  _.$_$.e = url;
  _.$_$.f = HttpStatement;
  _.$_$.g = HttpClient_0;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map
