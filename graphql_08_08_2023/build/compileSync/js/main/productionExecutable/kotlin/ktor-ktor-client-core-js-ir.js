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
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var CoroutineImpl = kotlin_kotlin.$_$.m6;
  var THROW_CCE = kotlin_kotlin.$_$.r9;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.h;
  var isObject = kotlin_kotlin.$_$.l7;
  var toString = kotlin_kotlin.$_$.v7;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y5;
  var classMeta = kotlin_kotlin.$_$.x6;
  var setMetadataFor = kotlin_kotlin.$_$.r7;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.n;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.y;
  var isInterface = kotlin_kotlin.$_$.k7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var objectMeta = kotlin_kotlin.$_$.q7;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.k;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var equals = kotlin_kotlin.$_$.z6;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ga;
  var IllegalStateException = kotlin_kotlin.$_$.l9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.r6;
  var UnsupportedOperationException = kotlin_kotlin.$_$.u9;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.c2;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.u;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var trimMargin$default = kotlin_kotlin.$_$.t;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.f1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Long = kotlin_kotlin.$_$.n9;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.r1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.h1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.da;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var writer = kotlin_io_ktor_ktor_io.$_$.j1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.p;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.n;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.o;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.m;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.x2;
  var arrayOf = kotlin_kotlin.$_$.w9;
  var createKType = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var emptySet = kotlin_kotlin.$_$.g4;
  var interfaceMeta = kotlin_kotlin.$_$.g7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.u;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.c;
  var lazy = kotlin_kotlin.$_$.ca;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var KProperty1 = kotlin_kotlin.$_$.g8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d7;
  var setOf = kotlin_kotlin.$_$.h5;
  var get = kotlin_kotlin.$_$.i6;
  var fold = kotlin_kotlin.$_$.h6;
  var minusKey = kotlin_kotlin.$_$.j6;
  var plus = kotlin_kotlin.$_$.l6;
  var Element = kotlin_kotlin.$_$.k6;
  var setOf_0 = kotlin_kotlin.$_$.i5;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.i;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.a1;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.q;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var toLong = kotlin_kotlin.$_$.t7;
  var toLong_0 = kotlin_kotlin.$_$.a9;
  var contentType = kotlin_io_ktor_ktor_http.$_$.b1;
  var isByteArray = kotlin_kotlin.$_$.i7;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.y2;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var CancellationException = kotlin_kotlin.$_$.x5;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.i1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.s;
  var getKClass = kotlin_kotlin.$_$.c;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.k;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.z;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.x;
  var Unit = kotlin_kotlin.$_$.t9;
  var toString_0 = kotlin_kotlin.$_$.ha;
  var toInt = kotlin_kotlin.$_$.y8;
  var reversed = kotlin_kotlin.$_$.g5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var charset = kotlin_io_ktor_ktor_http.$_$.z;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.g1;
  var Comparator = kotlin_kotlin.$_$.g9;
  var compareValues = kotlin_kotlin.$_$.w5;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var toList = kotlin_kotlin.$_$.m5;
  var sortedWith = kotlin_kotlin.$_$.k5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.v6;
  var roundToInt = kotlin_kotlin.$_$.w7;
  var firstOrNull = kotlin_kotlin.$_$.j4;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.y;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.x;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.f1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.c1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.w;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.k;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.i;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var get_lastIndex = kotlin_kotlin.$_$.q4;
  var downTo = kotlin_kotlin.$_$.b8;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.d1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var IOException = kotlin_io_ktor_ktor_io.$_$.d1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.m;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.e1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.w;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.j;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.d;
  var hashCode = kotlin_kotlin.$_$.f7;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.e1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.j;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.g;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var intercepted = kotlin_kotlin.$_$.a6;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var extendThrowable = kotlin_kotlin.$_$.a7;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.z2;
  var createFailure = kotlin_kotlin.$_$.x9;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.n2;
  var toTypedArray = kotlin_kotlin.$_$.v5;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.l;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.i;
  var readShort = kotlin_io_ktor_ktor_io.$_$.b1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpClient$slambda, 'HttpClient$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpClient$slambda_1, 'HttpClient$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$0, '$executeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClient, 'HttpClient', classMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  setMetadataFor(HttpClientConfig, 'HttpClientConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($bodyNullableCOROUTINE$1, '$bodyNullableCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientCall, 'HttpClientCall', classMeta, undefined, [CoroutineScope], undefined, undefined, [0, 1]);
  setMetadataFor(DoubleReceiveException, 'DoubleReceiveException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(NoTransformationFoundException, 'NoTransformationFoundException', classMeta, UnsupportedOperationException, undefined, undefined, undefined, []);
  setMetadataFor(SavedHttpCall, 'SavedHttpCall', classMeta, HttpClientCall, undefined, undefined, undefined, [0, 1]);
  function get_coroutineContext() {
    return this.n2p().je();
  }
  setMetadataFor(HttpRequest_0, 'HttpRequest', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpRequest, 'SavedHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpResponse, 'SavedHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($saveCOROUTINE$3, '$saveCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(UnsupportedContentTypeException, 'UnsupportedContentTypeException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ObservableContent$content$slambda, 'ObservableContent$content$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ObservableContent, 'ObservableContent', classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngine$install$slambda, 'HttpClientEngine$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpClientEngine$executeWithinCallContext$slambda, 'HttpClientEngine$executeWithinCallContext$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($executeWithinCallContextCOROUTINE$4, '$executeWithinCallContextCOROUTINE$4', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().x2m_1;
    client.f2k_1.r1r(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  setMetadataFor(HttpClientEngine, 'HttpClientEngine', interfaceMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  setMetadataFor(ClientEngineClosedException, 'ClientEngineClosedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngineBase, 'HttpClientEngineBase', classMeta, undefined, [HttpClientEngine], undefined, undefined, [1]);
  setMetadataFor(HttpClientEngineConfig, 'HttpClientEngineConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KtorCallContextElement, 'KtorCallContextElement', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(HttpClientPlugin, 'HttpClientPlugin', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(BodyProgress$handle$slambda, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(BodyProgress$handle$slambda_1, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(BodyProgress, 'BodyProgress', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(RedirectResponseException, 'RedirectResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ClientRequestException, 'ClientRequestException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ServerResponseException, 'ServerResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(addDefaultResponseValidation$lambda$slambda, 'addDefaultResponseValidation$lambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$1$content$1, undefined, classMeta, ByteArrayContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$1$content$2, undefined, classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$slambda, 'defaultTransformers$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(defaultTransformers$slambda$slambda, 'defaultTransformers$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$slambda_1, 'defaultTransformers$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_1, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_3, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor($validateResponseCOROUTINE$5, '$validateResponseCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($processExceptionCOROUTINE$6, '$processExceptionCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpCallValidator, 'HttpCallValidator', classMeta, undefined, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequest$1, undefined, classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpPlainText$Plugin$install$slambda, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda_1, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config_0, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_0, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, undefined, [Comparator], undefined, undefined, []);
  setMetadataFor(HttpPlainText, 'HttpPlainText', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRedirect$Plugin$install$slambda, 'HttpRedirect$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($handleCallCOROUTINE$7, '$handleCallCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_1, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_1, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, [4]);
  setMetadataFor(HttpRedirect, 'HttpRedirect', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle$Plugin$install$slambda, 'HttpRequestLifecycle$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Plugin_2, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle, 'HttpRequestLifecycle', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSend$Plugin$install$slambda, 'HttpSend$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$8, '$executeCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_2, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_3, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(Sender, 'Sender', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(InterceptedSender, 'InterceptedSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(DefaultSender, 'DefaultSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(HttpSend, 'HttpSend', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SendCountExceedException, 'SendCountExceedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpTimeout$Plugin$install$slambda$slambda, 'HttpTimeout$Plugin$install$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpTimeout$Plugin$install$slambda, 'HttpTimeout$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpTimeoutCapabilityConfiguration, 'HttpTimeoutCapabilityConfiguration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_4, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpTimeout, 'HttpTimeout', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestTimeoutException, 'HttpRequestTimeoutException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(DelegatedResponse, 'DelegatedResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketCapability, 'WebSocketCapability', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketException, 'WebSocketException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ClientUpgradeContent, 'ClientUpgradeContent', classMeta, NoContent, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultHttpRequest, 'DefaultHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestBuilder, 'HttpRequestBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestData, 'HttpRequestData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponseData, 'HttpResponseData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Phases, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestPipeline, 'HttpRequestPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_0, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSendPipeline, 'HttpSendPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(DefaultHttpResponse, 'DefaultHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($bodyAsTextCOROUTINE$12, '$bodyAsTextCOROUTINE$12', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Phases_1, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponsePipeline, 'HttpResponsePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_2, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpReceivePipeline, 'HttpReceivePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpResponseContainer, 'HttpResponseContainer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement$execute$slambda, 'HttpStatement$execute$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($executeCOROUTINE$13, '$executeCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeUnsafeCOROUTINE$14, '$executeUnsafeCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($cleanupCOROUTINE$15, '$cleanupCOROUTINE$15', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement, 'HttpStatement', classMeta, undefined, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(observable$slambda, 'observable$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpResponseReceiveFail, 'HttpResponseReceiveFail', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyContent, 'EmptyContent', objectMeta, NoContent, undefined, undefined, undefined, []);
  setMetadataFor(Js, 'Js', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsClientEngine$createWebSocket$headers_capturingHack$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($executeCOROUTINE$16, '$executeCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeWebSocketRequestCOROUTINE$17, '$executeWebSocketRequestCOROUTINE$17', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(JsClientEngine, 'JsClientEngine', classMeta, HttpClientEngineBase, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(JsError, 'JsError', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(toRaw$slambda, 'toRaw$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($toRawCOROUTINE$18, '$toRawCOROUTINE$18', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(channelFromStream$slambda, 'channelFromStream$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(readBodyNode$slambda, 'readBodyNode$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(JsWebSocketSession$slambda, 'JsWebSocketSession$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(JsWebSocketSession, 'JsWebSocketSession', classMeta, undefined, [CoroutineScope], undefined, undefined, [0, 1]);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.z2j_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel$default(this$0.x2j_1, null, 1, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.t2k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.x2k = function ($this$intercept, call, $cont) {
    var tmp = this.y2k($this$intercept, call, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpClient$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            var tmp_0 = this.v2k_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.v2k_1) + '(' + getKClassFromExpression(this.v2k_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.cd_1 = 1;
            suspendResult = this.t2k_1.g2k_1.m1r(Unit_getInstance(), this.v2k_1.f2l(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w2k_1 = suspendResult;
            this.v2k_1.g2l(this.w2k_1);
            this.cd_1 = 2;
            suspendResult = this.u2k_1.r1q(this.v2k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpClient$slambda.prototype.y2k = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.t2k_1, completion);
    i.u2k_1 = $this$intercept;
    i.v2k_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.x2k($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_getInstance();
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.p2l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.s2l = function ($this$intercept, it, $cont) {
    var tmp = this.t2l($this$intercept, it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpClient$slambda_1.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.s2l(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.q2l_1.s1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.dd_1 = 3;
            this.cd_1 = 4;
            continue $sm;
          case 2:
            this.dd_1 = 3;
            var tmp_0 = this.fd_1;
            if (tmp_0 instanceof Error) {
              var cause = this.fd_1;
              this.p2l_1.j2k_1.s2j(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.q2l_1.n1r_1.f2l(), cause));
              throw cause;
            } else {
              throw this.fd_1;
            }

            break;
          case 3:
            throw this.fd_1;
          case 4:
            this.dd_1 = 3;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpClient$slambda_1.prototype.t2l = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.p2l_1, completion);
    i.q2l_1 = $this$intercept;
    i.r2l_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.s2l($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2m_1 = _this__u8e3s4;
    this.d2m_1 = builder;
  }
  $executeCOROUTINE$0.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.c2m_1.j2k_1.s2j(get_HttpRequestCreated(), this.d2m_1);
            this.cd_1 = 1;
            suspendResult = this.c2m_1.d2k_1.m1r(this.d2m_1, this.d2m_1.h2m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    this.x2j_1 = engine;
    this.y2j_1 = userConfig;
    this.z2j_1 = false;
    this.a2k_1 = atomic$boolean$1(false);
    this.b2k_1 = Job(this.x2j_1.je().j3(Key_getInstance()));
    this.c2k_1 = this.x2j_1.je().q3(this.b2k_1);
    this.d2k_1 = new HttpRequestPipeline(this.y2j_1.r2m_1);
    this.e2k_1 = new HttpResponsePipeline(this.y2j_1.r2m_1);
    this.f2k_1 = new HttpSendPipeline(this.y2j_1.r2m_1);
    this.g2k_1 = new HttpReceivePipeline(this.y2j_1.r2m_1);
    this.h2k_1 = Attributes(true);
    this.i2k_1 = this.x2j_1.s2m();
    this.j2k_1 = new Events();
    this.k2k_1 = new HttpClientConfig();
    if (this.z2j_1) {
      this.b2k_1.kf(HttpClient$lambda(this));
    }
    this.x2j_1.t2m(this);
    var tmp = Phases_getInstance_0().y2m_1;
    this.f2k_1.r1r(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.y2j_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = Plugin_getInstance_2();
    this.k2k_1.z2m(tmp_0, null, 2, null);
    var tmp_1 = Plugin_getInstance();
    this.k2k_1.z2m(tmp_1, null, 2, null);
    if (tmp0_with.p2m_1) {
      this.k2k_1.a2n('DefaultTransformers', HttpClient$lambda_0);
    }
    var tmp_2 = Plugin_getInstance_3();
    this.k2k_1.z2m(tmp_2, null, 2, null);
    var tmp_3 = Companion_getInstance_9();
    this.k2k_1.z2m(tmp_3, null, 2, null);
    if (tmp0_with.o2m_1) {
      var tmp_4 = Plugin_getInstance_1();
      this.k2k_1.z2m(tmp_4, null, 2, null);
    }
    var tmp0_this = this;
    tmp0_this.k2k_1.b2n(tmp0_with);
    if (tmp0_with.p2m_1) {
      var tmp_5 = Plugin_getInstance_0();
      this.k2k_1.z2m(tmp_5, null, 2, null);
    }
    addDefaultResponseValidation(this.k2k_1);
    this.k2k_1.t2m(this);
    tmp$ret$0 = Unit_getInstance();
    var tmp_6 = Phases_getInstance_1().c2n_1;
    this.e2k_1.r1r(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.je = function () {
    return this.c2k_1;
  };
  HttpClient.prototype.h2n = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpClient.prototype.v15 = function () {
    var success = this.a2k_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.h2k_1.c1n(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = installedFeatures.i1n();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.client.HttpClient.close.<anonymous>' call
      var plugin = installedFeatures.c1n(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, Closeable)) {
        plugin.v15();
      }
    }
    this.b2k_1.dk();
    if (this.z2j_1) {
      this.x2j_1.v15();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.x2j_1 + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var engine = engineFactory.i2n(config.n2m_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp = ensureNotNull(client.c2k_1.j3(Key_getInstance()));
    tmp.kf(HttpClient$lambda_1(engine));
    return client;
  }
  function HttpClient$lambda_1($engine) {
    return function (it) {
      $engine.v15();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_getInstance();
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
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.h2k_1.h1n(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.k2k_1.l2m_1.b2($plugin.q()));
      var pluginData = $plugin.j2n(config);
      $plugin.k2n(pluginData, scope);
      attributes.f1n($plugin.q(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.k2m_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.l2m_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.m2m_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.n2m_1 = HttpClientConfig$engineConfig$lambda;
    this.o2m_1 = true;
    this.p2m_1 = true;
    this.q2m_1 = false;
    this.r2m_1 = PlatformUtils_getInstance().m1s_1;
  }
  HttpClientConfig.prototype.l2n = function (plugin, configure) {
    var previousConfigBlock = this.l2m_1.b2(plugin.q());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.l2m_1;
    var tmp1_set = plugin.q();
    tmp0_set.v2(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    if (this.k2m_1.v1(plugin.q()))
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.k2m_1;
    var tmp3_set = plugin.q();
    tmp2_set.v2(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
  };
  HttpClientConfig.prototype.z2m = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda;
    }
    return this.l2n(plugin, configure);
  };
  HttpClientConfig.prototype.a2n = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.m2m_1;
    tmp0_set.v2(key, block);
  };
  HttpClientConfig.prototype.t2m = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.k2m_1.d2();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
      tmp$ret$0 = client;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.m2m_1.d2();
    var tmp0_iterator_0 = tmp1_forEach.d();
    while (tmp0_iterator_0.l()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
      tmp$ret$1 = client;
    }
  };
  HttpClientConfig.prototype.b2n = function (other) {
    this.o2m_1 = other.o2m_1;
    this.p2m_1 = other.p2m_1;
    this.q2m_1 = other.q2m_1;
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.k2m_1;
    var tmp1_plusAssign = other.k2m_1;
    tmp0_plusAssign.z7(tmp1_plusAssign);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.l2m_1;
    var tmp3_plusAssign = other.l2m_1;
    tmp2_plusAssign.z7(tmp3_plusAssign);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp2_this.m2m_1;
    var tmp5_plusAssign = other.m2m_1;
    tmp4_plusAssign.z7(tmp5_plusAssign);
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.c2l_1 = new DefaultHttpRequest($this, requestData);
    $this.d2l_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.q2n_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.t2n().f1n(Companion_getInstance_7().u2n_1, responseData.q2n_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.u2n_1 = new AttributeKey('CustomResponse');
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d2o_1 = _this__u8e3s4;
    this.e2o_1 = info;
  }
  $bodyNullableCOROUTINE$1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 10;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.cd_1 = 2;
            continue $sm;
          case 2:
            this.dd_1 = 9;
            this.dd_1 = 8;
            if (instanceOf(this.d2o_1.f2l(), this.e2o_1.e1s_1)) {
              this.f2o_1 = this.d2o_1.f2l();
              this.dd_1 = 10;
              this.cd_1 = 7;
              continue $sm;
            } else {
              this.cd_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (!this.d2o_1.k2o() ? !this.d2o_1.b2l_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.d2o_1);
            }

            this.g2o_1 = this.d2o_1.t2n().d1n(Companion_getInstance_7().u2n_1);
            if (this.g2o_1 == null) {
              this.cd_1 = 4;
              suspendResult = this.d2o_1.l2o(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h2o_1 = this.g2o_1;
              this.cd_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.h2o_1 = suspendResult;
            this.cd_1 = 5;
            continue $sm;
          case 5:
            this.i2o_1 = this.h2o_1;
            this.j2o_1 = new HttpResponseContainer(this.e2o_1, this.i2o_1);
            this.cd_1 = 6;
            suspendResult = this.d2o_1.a2l_1.e2k_1.m1r(this.d2o_1, this.j2o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.n2o_1;
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.e2o_1.e1s_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.e2o_1.e1s_1;
              throw new NoTransformationFoundException(this.d2o_1.f2l(), from, to);
            }

            this.f2o_1 = result;
            this.dd_1 = 10;
            this.cd_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.f2o_1;
            complete(this.d2o_1.f2l());
            ;
            return tmp_2;
          case 8:
            this.dd_1 = 9;
            var tmp_3 = this.fd_1;
            if (tmp_3 instanceof Error) {
              var cause = this.fd_1;
              var tmp_4 = this;
              cancel(this.d2o_1.f2l(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.fd_1;
            }

            break;
          case 9:
            this.dd_1 = 10;
            var t = this.fd_1;
            complete(this.d2o_1.f2l());
            ;
            throw t;
          case 10:
            throw this.fd_1;
          case 11:
            complete(this.d2o_1.f2l());
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 10) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.a2l_1 = client;
    this.b2l_1 = atomic$boolean$1(false);
    this.e2l_1 = false;
  }
  HttpClientCall.prototype.je = function () {
    return this.f2l().je();
  };
  HttpClientCall.prototype.t2n = function () {
    return this.o2o().t2n();
  };
  HttpClientCall.prototype.o2o = function () {
    var tmp = this.c2l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.f2l = function () {
    var tmp = this.d2l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.k2o = function () {
    return this.e2l_1;
  };
  HttpClientCall.prototype.l2o = function ($cont) {
    return this.f2l().p2o();
  };
  HttpClientCall.prototype.q2o = function (info, $cont) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.o2o().r2o() + ', ' + this.f2l().s2o() + ']';
  };
  HttpClientCall.prototype.g2l = function (response) {
    this.d2l_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.t2o_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.y = function () {
    return this.t2o_1;
  };
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.y();
    }
  });
  function NoTransformationFoundException$message$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var key = _name_for_destructuring_parameter_0__wldtmu.t2();
    var value = _name_for_destructuring_parameter_0__wldtmu.u2();
    return key + ': ' + value + '\n';
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).r2o();
    var tmp_1 = response.s2o();
    var tmp_2 = flattenEntries(response.p1y());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda, 31, null) + '\n    ';
    tmp.u2o_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.y = function () {
    return this.u2o_1;
  };
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.y();
    }
  });
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.j2p_1 = responseBody;
    this.c2l_1 = new SavedHttpRequest(this, request);
    this.d2l_1 = new SavedHttpResponse(this, this.j2p_1, response);
    this.k2p_1 = true;
  }
  SavedHttpCall.prototype.l2o = function ($cont) {
    return ByteReadChannel_0(this.j2p_1);
  };
  SavedHttpCall.prototype.k2o = function () {
    return this.k2p_1;
  };
  function SavedHttpRequest(call, origin) {
    this.l2p_1 = call;
    this.m2p_1 = origin;
  }
  SavedHttpRequest.prototype.n2p = function () {
    return this.l2p_1;
  };
  SavedHttpRequest.prototype.t2n = function () {
    return this.m2p_1.t2n();
  };
  SavedHttpRequest.prototype.je = function () {
    return this.m2p_1.je();
  };
  SavedHttpRequest.prototype.p1y = function () {
    return this.m2p_1.p1y();
  };
  SavedHttpRequest.prototype.o2p = function () {
    return this.m2p_1.o2p();
  };
  SavedHttpRequest.prototype.r2o = function () {
    return this.m2p_1.r2o();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.p2p_1 = call;
    var tmp = this;
    tmp.q2p_1 = Job$default(null, 1, null);
    this.r2p_1 = origin.s2o();
    this.s2p_1 = origin.y2p();
    this.t2p_1 = origin.z2p();
    this.u2p_1 = origin.a2q();
    this.v2p_1 = origin.p1y();
    this.w2p_1 = origin.je().q3(this.q2p_1);
    this.x2p_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.n2p = function () {
    return this.p2p_1;
  };
  SavedHttpResponse.prototype.s2o = function () {
    return this.r2p_1;
  };
  SavedHttpResponse.prototype.y2p = function () {
    return this.s2p_1;
  };
  SavedHttpResponse.prototype.z2p = function () {
    return this.t2p_1;
  };
  SavedHttpResponse.prototype.a2q = function () {
    return this.u2p_1;
  };
  SavedHttpResponse.prototype.p1y = function () {
    return this.v2p_1;
  };
  SavedHttpResponse.prototype.je = function () {
    return this.w2p_1;
  };
  SavedHttpResponse.prototype.p2o = function () {
    return this.x2p_1;
  };
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d2p_1 = _this__u8e3s4;
  }
  $saveCOROUTINE$3.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0 = this.d2p_1.f2l().p2o();
            suspendResult = tmp_0.t1e(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this.d2p_1.a2l_1, this.d2p_1.o2o(), this.d2p_1.f2l(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.j2q_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.l2q = function ($this$writer, $cont) {
    var tmp = this.m2q($this$writer, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  ObservableContent$content$slambda.prototype.xd = function (p1, $cont) {
    return this.l2q((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.j2q_1.t23(this.k2q_1.c1f(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  ObservableContent$content$slambda.prototype.m2q = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.j2q_1, completion);
    i.k2q_1 = $this$writer;
    return i;
  };
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.l2q($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.o2q_1 = callContext;
    this.p2q_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.v23());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().l1g();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.r23();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.o2q_1, true, ObservableContent$content$slambda_0(delegate, null)).c1f();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.q2q_1 = tmp_0;
    this.r2q_1 = delegate;
  }
  ObservableContent.prototype.o23 = function () {
    return this.r2q_1.o23();
  };
  ObservableContent.prototype.p23 = function () {
    return this.r2q_1.p23();
  };
  ObservableContent.prototype.p1y = function () {
    return this.r2q_1.p1y();
  };
  ObservableContent.prototype.r23 = function () {
    return observable(this.q2q_1, this.o2q_1, this.p23(), this.p2q_1);
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
        $client.j2k_1.s2j(get_HttpResponseCancelled(), $response);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.je().j3(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ke();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.k2r_1.d();
    while (tmp0_iterator.l()) {
      var requestedExtension = tmp0_iterator.e();
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.l2r().n(requestedExtension);
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
    this.u2r_1 = $client;
    this.v2r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.x2k = function ($this$intercept, content, $cont) {
    var tmp = this.y2k($this$intercept, content, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpClientEngine$install$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.d2s(this.w2r_1.n1r_1);
            ;
            var tmp0_subject = this.x2r_1;
            if (tmp0_subject == null) {
              tmp0_apply.h2m_1 = NullBody_getInstance();
              var tmp_1 = JsType_getInstance();
              var tmp_2 = PrimitiveClasses_getInstance().sa();
              var tmp_3;
              try {
                tmp_3 = createKType(PrimitiveClasses_getInstance().sa(), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0_apply.e2s(typeInfoImpl(tmp_1, tmp_2, tmp_3));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.h2m_1 = this.x2r_1;
                tmp0_apply.e2s(null);
              } else {
                tmp0_apply.h2m_1 = this.x2r_1;
                var tmp_5 = JsType_getInstance();
                var tmp_6 = PrimitiveClasses_getInstance().sa();
                var tmp_7;
                try {
                  tmp_7 = createKType(PrimitiveClasses_getInstance().sa(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    tmp_8 = null;
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0_apply.e2s(typeInfoImpl(tmp_5, tmp_6, tmp_7));
              }
            }

            tmp_0.y2r_1 = tmp0_apply;
            this.u2r_1.j2k_1.s2j(get_HttpRequestIsReadyForSending(), this.y2r_1);
            var tmp_9 = this;
            var tmp1_apply = this.y2r_1.t1c();
            tmp1_apply.j2r_1.f1n(get_CLIENT_CONFIG(), this.u2r_1.k2k_1);
            ;
            tmp_9.z2r_1 = tmp1_apply;
            validateHeaders(this.z2r_1);
            checkExtensions(this.v2r_1, this.z2r_1);
            this.cd_1 = 1;
            suspendResult = executeWithinCallContext(this.v2r_1, this.z2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a2s_1 = suspendResult;
            this.b2s_1 = HttpClientCall_init_$Create$(this.u2r_1, this.z2r_1, this.a2s_1);
            this.c2s_1 = this.b2s_1.f2l();
            this.u2r_1.j2k_1.s2j(get_HttpResponseReceived(), this.c2s_1);
            var tmp_10 = get_job(this.c2s_1.je());
            tmp_10.kf(HttpClientEngine$install$slambda$lambda(this.u2r_1, this.c2s_1));
            ;
            this.cd_1 = 2;
            suspendResult = this.w2r_1.r1q(this.b2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpClientEngine$install$slambda.prototype.y2k = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.u2r_1, this.v2r_1, completion);
    i.w2r_1 = $this$intercept;
    i.x2r_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.x2k($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.n2s_1 = this$0;
    this.o2s_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.q2s = function ($this$async, $cont) {
    var tmp = this.r11($this$async, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.xd = function (p1, $cont) {
    return this.q2s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            if (_get_closed__iwkfs1(this.n2s_1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.cd_1 = 1;
            suspendResult = this.n2s_1.r2s(this.o2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  HttpClientEngine$executeWithinCallContext$slambda.prototype.r11 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.n2s_1, this.o2s_1, completion);
    i.p2s_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.q2s($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a2r_1 = _this__u8e3s4;
    this.b2r_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$4.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.cd_1 = 1;
            suspendResult = createCallContext(this.a2r_1, this.b2r_1.i2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c2r_1 = suspendResult;
            this.d2r_1 = this.c2r_1.q3(new KtorCallContextElement(this.c2r_1));
            this.cd_1 = 2;
            suspendResult = async$default(this.a2r_1, this.d2r_1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this.a2r_1, this.b2r_1, null), 2, null).xg(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.g2r_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = requestHeaders.s1o();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      tmp$ret$0 = HttpHeaders_getInstance().i1y_1.n(element);
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !unsafeRequestHeaders.k();
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.je().q3(callJob).q3(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.f3();
      var tmp0_elvis_lhs = tmp$ret$0.j3(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.mf(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.kf(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.pf(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.nh();
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
    this.s2s_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.z = function () {
    return this.s2s_1;
  };
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.z();
    }
  });
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).q3(this$0.t2s()).q3(new CoroutineName(this$0.u2s_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.t2s());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.u2s_1 = engineName;
    this.v2s_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.w2s_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.je = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = coroutineContext$factory();
    tmp$ret$0 = this.w2s_1.r();
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.v15 = function () {
    if (!this.v2s_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.je().j3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.dk();
    requestJob.kf(HttpClientEngineBase$close$lambda(this));
  };
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher) {
        _this__u8e3s4.v15();
      } else {
        if (isInterface(tmp0_subject, Closeable)) {
          _this__u8e3s4.v15();
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
      return receiver.je();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_4());
    }
  }
  function HttpClientEngineConfig() {
    this.x2s_1 = 4;
    this.y2s_1 = false;
    this.z2s_1 = null;
  }
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
    this.a2t_1 = callContext;
  }
  KtorCallContextElement.prototype.q = function () {
    return Companion_getInstance_8();
  };
  function callContext($cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.f3();
    return ensureNotNull(tmp$ret$0.j3(Companion_getInstance_8())).a2t_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    init_properties_Utils_kt_jyhfj1();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.u1o(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.w1n(HttpHeaders_getInstance().l1x_1) == null ? content.p1y().w1n(HttpHeaders_getInstance().l1x_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().l1x_1, get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.o23();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.p1y().w1n(HttpHeaders_getInstance().f1v_1) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.w1n(HttpHeaders_getInstance().f1v_1) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.p23();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.p1y().w1n(HttpHeaders_getInstance().c1v_1) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.w1n(HttpHeaders_getInstance().c1v_1) : tmp5_elvis_lhs;
    var tmp6_safe_receiver = type;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = block(HttpHeaders_getInstance().f1v_1, tmp6_safe_receiver);
    }
    var tmp7_safe_receiver = length;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = block(HttpHeaders_getInstance().c1v_1, tmp7_safe_receiver);
    }
  }
  function needUserAgent() {
    init_properties_Utils_kt_jyhfj1();
    return !PlatformUtils_getInstance().i1s_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.c1p($requestHeaders);
      $this$buildHeaders.c1p($content.p1y());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().c1v_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().f1v_1 === key) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (get_DATE_HEADERS().n(key)) {
        var tmp0_iterator = values.d();
        while (tmp0_iterator.l()) {
          var element = tmp0_iterator.e();
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
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().i1v_1, HttpHeaders_getInstance().o1v_1, HttpHeaders_getInstance().a1w_1, HttpHeaders_getInstance().v1v_1, HttpHeaders_getInstance().z1v_1]);
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
    scope.d2k_1.o1r(Phases_getInstance().e2t_1, observableContentPhase);
    scope.d2k_1.r1r(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().i2t_1;
    scope.g2k_1.r1r(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.j2t_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.q = function () {
    return this.j2t_1;
  };
  Plugin.prototype.k2t = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.j2n = function (block) {
    return this.k2t(block);
  };
  Plugin.prototype.l2t = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.k2n = function (plugin, scope) {
    return this.l2t(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
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
  BodyProgress$handle$slambda.prototype.x2k = function ($this$intercept, content, $cont) {
    var tmp = this.y2k($this$intercept, content, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  BodyProgress$handle$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.u2t_1.n1r_1.j2m_1.d1n(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.w2t_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.v2t_1;
            tmp_2.x2t_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.u2t_1.n1r_1.i2m_1, this.w2t_1);
            this.cd_1 = 1;
            suspendResult = this.u2t_1.r1q(this.x2t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
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
  BodyProgress$handle$slambda.prototype.y2k = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.u2t_1 = $this$intercept;
    i.v2t_1 = content;
    return i;
  };
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.x2k($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.k2u = function ($this$intercept, response, $cont) {
    var tmp = this.l2u($this$intercept, response, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  BodyProgress$handle$slambda_1.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2u(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.h2u_1.n2p().o2o().t2n().d1n(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.i2u_1 = tmp_1;
            this.j2u_1 = withObservableDownload(this.h2u_1, this.i2u_1);
            this.cd_1 = 1;
            suspendResult = this.g2u_1.r1q(this.j2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
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
  BodyProgress$handle$slambda_1.prototype.l2u = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.g2u_1 = $this$intercept;
    i.h2u_1 = response;
    return i;
  };
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.k2u($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.p2o(), _this__u8e3s4.je(), contentLength(_this__u8e3s4), listener);
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
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.m2u_1 = response;
    captureStack(this, ResponseException);
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.o2u_1 = 'Unhandled redirect: ' + response.n2p().o2o().o2p().y1y_1 + ' ' + response.n2p().o2o().r2o() + '. ' + ('Status: ' + response.s2o() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.y = function () {
    return this.o2u_1;
  };
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.y();
    }
  });
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.q2u_1 = 'Client request(' + response.n2p().o2o().o2p().y1y_1 + ' ' + response.n2p().o2o().r2o() + ') ' + ('invalid: ' + response.s2o() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.y = function () {
    return this.q2u_1;
  };
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.y();
    }
  });
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.s2u_1 = 'Server error(' + response.n2p().o2o().o2p().y1y_1 + ' ' + response.n2p().o2o().r2o() + ': ' + ('' + response.s2o() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.y = function () {
    return this.s2u_1;
  };
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.y();
    }
  });
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.j2v = function (response, $cont) {
    var tmp = this.k2v(response, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.xd = function (p1, $cont) {
    return this.j2v(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            this.c2v_1 = this.b2v_1.n2p().t2n().c1n(get_ExpectSuccessAttributeKey());
            if (!this.c2v_1) {
              get_LOGGER().o1s('Skipping default response validation for ' + this.b2v_1.n2p().o2o().r2o());
              return Unit_getInstance();
            }

            this.d2v_1 = this.b2v_1.s2o().j21_1;
            this.e2v_1 = this.b2v_1.n2p();
            if (this.d2v_1 < 300 ? true : this.e2v_1.t2n().e1n(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.cd_1 = 1;
            suspendResult = save(this.e2v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f2v_1 = suspendResult;
            this.f2v_1.t2n().f1n(get_ValidateMark(), Unit_getInstance());
            ;
            this.g2v_1 = this.f2v_1;
            this.h2v_1 = this.g2v_1.f2l();
            this.dd_1 = 3;
            this.cd_1 = 2;
            suspendResult = bodyAsText$default(this.h2v_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i2v_1 = suspendResult;
            this.dd_1 = 5;
            this.cd_1 = 4;
            continue $sm;
          case 3:
            this.dd_1 = 5;
            var tmp_0 = this.fd_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _ = this.fd_1;
              var tmp_1 = this;
              tmp_1.i2v_1 = '<body failed decoding>';
              this.cd_1 = 4;
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 4:
            this.dd_1 = 5;
            var exceptionResponseText = this.i2v_1;
            var tmp0_subject = this.d2v_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.h2v_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.h2v_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.h2v_1, exceptionResponseText) : new ResponseException(this.h2v_1, exceptionResponseText);
            get_LOGGER().o1s('Default response validation for ' + this.b2v_1.n2p().o2o().r2o() + ' failed with ' + exception);
            throw exception;
          case 5:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 5) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.k2v = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.b2v_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.j2v(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.n2v_1 = $this_addDefaultResponseValidation.q2m_1;
      $this$HttpResponseValidator.o2v(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    init_properties_DefaultTransform_kt_lghdhr();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    init_properties_DefaultTransform_kt_lghdhr();
    var tmp = Phases_getInstance().e2t_1;
    _this__u8e3s4.d2k_1.r1r(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().d2n_1;
    _this__u8e3s4.e2k_1.r1r(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.s2v_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.q2v_1 = tmp0_elvis_lhs == null ? Application_getInstance().f1t_1 : tmp0_elvis_lhs;
    this.r2v_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.o23 = function () {
    return this.q2v_1;
  };
  defaultTransformers$1$content$1.prototype.p23 = function () {
    return this.r2v_1;
  };
  defaultTransformers$1$content$1.prototype.v23 = function () {
    return this.s2v_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.w2v_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.n1r_1.g2m_1.w1n(HttpHeaders_getInstance().c1v_1);
    tmp.u2v_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.v2v_1 = tmp0_elvis_lhs == null ? Application_getInstance().f1t_1 : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.p23 = function () {
    return this.u2v_1;
  };
  defaultTransformers$1$content$2.prototype.o23 = function () {
    return this.v2v_1;
  };
  defaultTransformers$1$content$2.prototype.r23 = function () {
    return this.w2v_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.x2k = function ($this$intercept, body, $cont) {
    var tmp = this.y2k($this$intercept, body, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  defaultTransformers$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            if (this.f2w_1.n1r_1.g2m_1.w1n(HttpHeaders_getInstance().n1u_1) == null) {
              this.f2w_1.n1r_1.g2m_1.b1p(HttpHeaders_getInstance().n1u_1, '*/*');
            }

            this.h2w_1 = contentType(this.f2w_1.n1r_1);
            var tmp_0 = this;
            var tmp0_subject = this.g2w_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.h2w_1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().w1t_1 : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.g2w_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.h2w_1, this.g2w_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.f2w_1, this.h2w_1, this.g2w_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.g2w_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.h2w_1, this.f2w_1.n1r_1, this.g2w_1);
                  }
                }
              }
            }

            tmp_0.i2w_1 = tmp_1;
            var tmp2_safe_receiver = this.i2w_1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.o23()) == null)) {
              this.f2w_1.n1r_1.g2m_1.d1p(HttpHeaders_getInstance().f1v_1);
              get_LOGGER_0().o1s('Transformed with default transformers request body for ' + this.f2w_1.n1r_1.e2m_1 + ' from ' + getKClassFromExpression(this.g2w_1));
              this.cd_1 = 1;
              suspendResult = this.f2w_1.r1q(this.i2w_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda.prototype.y2k = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.f2w_1 = $this$intercept;
    i.g2w_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.x2k($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.r2w_1 = $body;
    this.s2w_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.l2q = function ($this$writer, $cont) {
    var tmp = this.m2q($this$writer, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  defaultTransformers$slambda$slambda.prototype.xd = function (p1, $cont) {
    return this.l2q((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 4;
            this.dd_1 = 3;
            this.cd_1 = 2;
            var tmp_0 = this.t2w_1.c1f();
            Companion_getInstance_0();
            suspendResult = copyTo(this.r2w_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.u2w_1 = Unit_getInstance();
            this.dd_1 = 5;
            this.cd_1 = 6;
            continue $sm;
          case 3:
            this.dd_1 = 4;
            var tmp_2 = this.fd_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.fd_1;
              var tmp_3 = this;
              cancel_0(this.s2w_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.fd_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.fd_1;
                var tmp_5 = this;
                cancel(this.s2w_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.fd_1;
              }
            }

            break;
          case 4:
            this.dd_1 = 5;
            var t = this.fd_1;
            complete(this.s2w_1);
            ;
            throw t;
          case 5:
            throw this.fd_1;
          case 6:
            complete(this.s2w_1);
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 5) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda$slambda.prototype.m2q = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.r2w_1, this.s2w_1, completion);
    i.t2w_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.l2q($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.dk();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.s2l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.t2l($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  defaultTransformers$slambda_1.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.s2l(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 11;
            this.f2x_1 = this.e2x_1.t2();
            this.g2x_1 = this.e2x_1.u2();
            var tmp_0 = this.g2x_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.h2x_1 = this.d2x_1.n1r_1.f2l();
            this.i2x_1 = this.f2x_1.e1s_1;
            if (this.i2x_1.equals(getKClass(Unit))) {
              cancel_1(this.g2x_1);
              this.cd_1 = 9;
              suspendResult = this.d2x_1.r1q(new HttpResponseContainer(this.f2x_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.i2x_1.equals(PrimitiveClasses_getInstance().ya())) {
                this.cd_1 = 7;
                suspendResult = this.g2x_1.t1e(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.i2x_1.equals(getKClass(ByteReadPacket)) ? true : this.i2x_1.equals(getKClass(Input))) {
                  this.cd_1 = 5;
                  suspendResult = this.g2x_1.t1e(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.i2x_1.equals(PrimitiveClasses_getInstance().gb())) {
                    this.cd_1 = 3;
                    suspendResult = toByteArray(this.g2x_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.i2x_1.equals(getKClass(ByteReadChannel))) {
                      this.k2x_1 = Job(this.h2x_1.je().j3(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this.h2x_1.je();
                      var tmp1_also = writer$default(this.d2x_1, tmp_2, false, defaultTransformers$slambda$slambda_0(this.g2x_1, this.h2x_1, null), 2, null);
                      tmp1_also.kf(defaultTransformers$slambda$lambda(this.k2x_1));
                      tmp_1.l2x_1 = tmp1_also.c1f();
                      this.cd_1 = 2;
                      suspendResult = this.d2x_1.r1q(new HttpResponseContainer(this.f2x_1, this.l2x_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.i2x_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.g2x_1);
                        this.cd_1 = 1;
                        suspendResult = this.d2x_1.r1q(new HttpResponseContainer(this.f2x_1, this.h2x_1.s2o()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.j2x_1 = null;
                        this.cd_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.j2x_1 = suspendResult;
            this.cd_1 = 10;
            continue $sm;
          case 2:
            this.j2x_1 = suspendResult;
            this.cd_1 = 10;
            continue $sm;
          case 3:
            this.m2x_1 = suspendResult;
            this.n2x_1 = contentLength(this.h2x_1);
            this.o2x_1 = !PlatformUtils_getInstance().i1s_1 ? this.h2x_1.p1y().w1n(HttpHeaders_getInstance().a1v_1) == null : false;
            if ((this.o2x_1 ? !(this.n2x_1 == null) : false) ? this.n2x_1.v(new Long(0, 0)) > 0 : false) {
              var tmp0_check = this.m2x_1.length === this.n2x_1.yc();
              if (!tmp0_check) {
                var message = 'Expected ' + toString_0(this.n2x_1) + ', actual ' + this.m2x_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.cd_1 = 4;
            suspendResult = this.d2x_1.r1q(new HttpResponseContainer(this.f2x_1, this.m2x_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.j2x_1 = suspendResult;
            this.cd_1 = 10;
            continue $sm;
          case 5:
            this.p2x_1 = suspendResult;
            this.q2x_1 = new HttpResponseContainer(this.f2x_1, this.p2x_1);
            this.cd_1 = 6;
            suspendResult = this.d2x_1.r1q(this.q2x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.j2x_1 = suspendResult;
            this.cd_1 = 10;
            continue $sm;
          case 7:
            this.r2x_1 = suspendResult;
            var tmp_3 = this;
            tmp_3.s2x_1 = this.r2x_1.b1j(0, 0, 3, null);
            this.t2x_1 = toInt(this.s2x_1);
            this.u2x_1 = new HttpResponseContainer(this.f2x_1, this.t2x_1);
            this.cd_1 = 8;
            suspendResult = this.d2x_1.r1q(this.u2x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.j2x_1 = suspendResult;
            this.cd_1 = 10;
            continue $sm;
          case 9:
            this.j2x_1 = suspendResult;
            this.cd_1 = 10;
            continue $sm;
          case 10:
            var result = this.j2x_1;
            if (!(result == null)) {
              get_LOGGER_0().o1s('Transformed with default transformers response body ' + ('for ' + this.d2x_1.n1r_1.o2o().r2o() + ' to ' + this.f2x_1.e1s_1));
            }

            return Unit_getInstance();
          case 11:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 11) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda_1.prototype.t2l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.d2x_1 = $this$intercept;
    i.e2x_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.s2l($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function init_properties_DefaultTransform_kt_lghdhr() {
    if (properties_initialized_DefaultTransform_kt_ossax9) {
    } else {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_1() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.x2x_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.g2y_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.x2k = function ($this$intercept, it, $cont) {
    var tmp = this.y2k($this$intercept, it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpCallValidator$Companion$install$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            this.dd_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.h2y_1.n1r_1.j2m_1.h1n(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.g2y_1));
            ;
            this.cd_1 = 1;
            suspendResult = this.h2y_1.r1q(this.i2y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.dd_1 = 5;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            this.dd_1 = 5;
            return Unit_getInstance();
          case 3:
            this.dd_1 = 5;
            var tmp_1 = this.fd_1;
            if (tmp_1 instanceof Error) {
              this.j2y_1 = this.fd_1;
              this.k2y_1 = unwrapCancellationException(this.j2y_1);
              this.cd_1 = 4;
              suspendResult = processException(this.g2y_1, this.k2y_1, HttpRequest(this.h2y_1.n1r_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 4:
            throw this.k2y_1;
          case 5:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 5) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda.prototype.y2k = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.g2y_1, completion);
    i.h2y_1 = $this$intercept;
    i.i2y_1 = it;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.x2k($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.t2y_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.s2l = function ($this$intercept, container, $cont) {
    var tmp = this.t2l($this$intercept, container, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.s2l(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            this.dd_1 = 3;
            this.cd_1 = 1;
            suspendResult = this.u2y_1.r1q(this.v2y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.dd_1 = 5;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            this.dd_1 = 5;
            return Unit_getInstance();
          case 3:
            this.dd_1 = 5;
            var tmp_0 = this.fd_1;
            if (tmp_0 instanceof Error) {
              this.w2y_1 = this.fd_1;
              this.x2y_1 = unwrapCancellationException(this.w2y_1);
              this.cd_1 = 4;
              suspendResult = processException(this.t2y_1, this.x2y_1, this.u2y_1.n1r_1.o2o(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 4:
            throw this.x2y_1;
          case 5:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 5) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.t2l = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.t2y_1, completion);
    i.u2y_1 = $this$intercept;
    i.v2y_1 = container;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.s2l($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.g2z_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.k2z = function ($this$intercept, request, $cont) {
    var tmp = this.l2z($this$intercept, request, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.z2k = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.k2z(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.cd_1 = 1;
            suspendResult = this.h2z_1.h2n(this.i2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j2z_1 = suspendResult;
            this.cd_1 = 2;
            suspendResult = validateResponse(this.g2z_1, this.j2z_1.f2l(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.j2z_1;
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.l2z = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.g2z_1, completion);
    i.h2z_1 = $this$intercept;
    i.i2z_1 = request;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.k2z($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.l2v_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.m2v_1 = tmp$ret$1;
    this.n2v_1 = true;
  }
  Config.prototype.o2v = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.l2v_1;
    tmp0_plusAssign.a(block);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.o30_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.q = function () {
    return this.o30_1;
  };
  Companion_1.prototype.p30 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.l2v_1), reversed(config.m2v_1), config.n2v_1);
  };
  Companion_1.prototype.j2n = function (block) {
    return this.p30(block);
  };
  Companion_1.prototype.q30 = function (plugin_0, scope) {
    var tmp = Phases_getInstance().b2t_1;
    scope.d2k_1.r1r(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.e2k_1.q1r(Phases_getInstance_1().c2n_1, BeforeReceive);
    scope.e2k_1.r1r(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_3());
    tmp_0.t30(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.k2n = function (plugin, scope) {
    return this.q30(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2z_1 = _this__u8e3s4;
    this.v2z_1 = response;
  }
  $validateResponseCOROUTINE$5.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            get_LOGGER_1().o1s('Validating response for request ' + this.v2z_1.n2p().o2o().r2o());
            var tmp_0 = this;
            tmp_0.w2z_1 = this.u2z_1.v2x_1;
            this.x2z_1 = this.w2z_1.d();
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (!this.x2z_1.l()) {
              this.cd_1 = 3;
              continue $sm;
            }

            this.y2z_1 = this.x2z_1.e();
            this.cd_1 = 2;
            suspendResult = this.y2z_1(this.v2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.cd_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h30_1 = _this__u8e3s4;
    this.i30_1 = cause;
    this.j30_1 = request;
  }
  $processExceptionCOROUTINE$6.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 6;
            get_LOGGER_1().o1s('Processing exception ' + this.i30_1 + ' for request ' + this.j30_1.r2o());
            var tmp_0 = this;
            tmp_0.k30_1 = this.h30_1.w2x_1;
            this.l30_1 = this.k30_1.d();
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (!this.l30_1.l()) {
              this.cd_1 = 5;
              continue $sm;
            }

            this.m30_1 = this.l30_1.e();
            this.n30_1 = this.m30_1;
            var tmp_1 = this.n30_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.cd_1 = 3;
              suspendResult = this.m30_1.v30_1(this.i30_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.n30_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.cd_1 = 2;
                suspendResult = this.m30_1.u30_1(this.i30_1, this.j30_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.cd_1 = 4;
                continue $sm;
              }
            }

            break;
          case 2:
            this.cd_1 = 4;
            continue $sm;
          case 3:
            this.cd_1 = 4;
            continue $sm;
          case 4:
            this.cd_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
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
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.v2x_1 = responseValidators;
    this.w2x_1 = callExceptionHandlers;
    this.x2x_1 = expectSuccess;
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.l2n(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.a31_1 = $builder;
    this.w30_1 = $builder.f2m_1;
    this.x30_1 = $builder.e2m_1.t1c();
    this.y30_1 = $builder.j2m_1;
    this.z30_1 = $builder.g2m_1.t1c();
  }
  HttpRequest$1.prototype.n2p = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.o2p = function () {
    return this.w30_1;
  };
  HttpRequest$1.prototype.r2o = function () {
    return this.x30_1;
  };
  HttpRequest$1.prototype.t2n = function () {
    return this.y30_1;
  };
  HttpRequest$1.prototype.p1y = function () {
    return this.z30_1;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
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
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.q() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.h2k_1.d1n(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1n(plugin.q());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function get_LOGGER_2() {
    init_properties_HttpPlainText_kt_2fd8bf();
    return LOGGER_2;
  }
  var LOGGER_2;
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.j31_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.x2k = function ($this$intercept, content, $cont) {
    var tmp = this.y2k($this$intercept, content, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpPlainText$Plugin$install$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.j31_1.q31(this.k31_1.n1r_1);
            var tmp_0 = this.l31_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.m31_1 = contentType(this.k31_1.n1r_1);
            if (!(this.m31_1 == null) ? !(this.m31_1.g1u_1 === Text_getInstance().w1t_1.g1u_1) : false) {
              return Unit_getInstance();
            }

            this.cd_1 = 1;
            suspendResult = this.k31_1.r1q(wrapContent(this.j31_1, this.k31_1.n1r_1, this.l31_1, this.m31_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
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
  HttpPlainText$Plugin$install$slambda.prototype.y2k = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.j31_1, completion);
    i.k31_1 = $this$intercept;
    i.l31_1 = content;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.x2k($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.z31_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.s2l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.t2l($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.s2l(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.c32_1 = this.b32_1.t2();
            this.d32_1 = this.b32_1.u2();
            var tmp_0;
            if (!this.c32_1.e1s_1.equals(PrimitiveClasses_getInstance().cb())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.d32_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.cd_1 = 1;
            suspendResult = this.d32_1.t1e(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e32_1 = suspendResult;
            this.f32_1 = this.z31_1.g32(this.a32_1.n1r_1, this.e32_1);
            this.cd_1 = 2;
            suspendResult = this.a32_1.r1q(new HttpResponseContainer(this.c32_1, this.f32_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.t2l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.z31_1, completion);
    i.a32_1 = $this$intercept;
    i.b32_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.s2l($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.h32_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.i32_1 = tmp$ret$1;
    this.j32_1 = null;
    this.k32_1 = Charsets_getInstance().k1j_1;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.l32_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.q = function () {
    return this.l32_1;
  };
  Plugin_0.prototype.p30 = function (block) {
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
    return new HttpPlainText(config.h32_1, config.i32_1, config.j32_1, config.k32_1);
  };
  Plugin_0.prototype.j2n = function (block) {
    return this.p30(block);
  };
  Plugin_0.prototype.m32 = function (plugin, scope) {
    var tmp = Phases_getInstance().e2t_1;
    scope.d2k_1.r1r(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().e2n_1;
    scope.e2k_1.r1r(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.k2n = function (plugin, scope) {
    return this.m32(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, request, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().w1t_1 : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.o31_1 : tmp2_elvis_lhs;
    get_LOGGER_2().o1s('Sending request body to ' + request.e2m_1 + ' as text/plain with charset ' + charset_0);
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.n32_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.xb = function (a, b) {
    return this.n32_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.xb(a, b);
  };
  function HttpPlainText$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = b.s2_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = a.s2_1;
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
    this.n31_1 = responseCharsetFallback;
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
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      var tmp$ret$2;
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      tmp$ret$2 = !charsetQuality.v1(element);
      if (tmp$ret$2) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$3 = tmp0_filterTo;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_sortedBy = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$6 = sortedWith(tmp1_sortedBy, tmp$ret$5);
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$12;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.d();
    while (tmp0_iterator_0.l()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$7 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$7) {
        tmp0_apply.qb(',');
      }
      tmp0_apply.qb(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.d();
    while (tmp0_iterator_1.l()) {
      var element_1 = tmp0_iterator_1.e();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.t2();
      var quality = element_1.u2();
      var tmp$ret$8;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$8 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$8) {
        tmp0_apply.qb(',');
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
      tmp0_apply.qb(get_name(charset) + ';q=' + truncatedQuality);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$11 = charSequenceLength(tmp0_apply) === 0;
    if (tmp$ret$11) {
      tmp0_apply.qb(get_name(this.n31_1));
    }
    tmp$ret$12 = tmp0_apply;
    tmp$ret$13 = tmp$ret$12.toString();
    tmp_1.p31_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r2_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.o31_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().k1j_1 : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.g32 = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.f2l());
    var actualCharset = tmp0_elvis_lhs == null ? this.n31_1 : tmp0_elvis_lhs;
    get_LOGGER_2().o1s('Reading response body for ' + call.o2o().r2o() + ' as String with charset ' + actualCharset);
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.q31 = function (context) {
    if (!(context.g2m_1.w1n(HttpHeaders_getInstance().o1u_1) == null))
      return Unit_getInstance();
    get_LOGGER_2().o1s('Adding Accept-Charset=' + this.p31_1 + ' to ' + context.e2m_1);
    context.g2m_1.z1o(HttpHeaders_getInstance().o1u_1, this.p31_1);
  };
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function init_properties_HttpPlainText_kt_2fd8bf() {
    if (properties_initialized_HttpPlainText_kt_2nx4ox) {
    } else {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return LOGGER_3;
  }
  var LOGGER_3;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.p33_1 = $plugin;
    this.q33_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.k2z = function ($this$intercept, context, $cont) {
    var tmp = this.l2z($this$intercept, context, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpRedirect$Plugin$install$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.k2z(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.cd_1 = 1;
            suspendResult = this.r33_1.h2n(this.s33_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t33_1 = suspendResult;
            if (this.p33_1.u33_1 ? !get_ALLOWED_FOR_REDIRECT().n(this.t33_1.o2o().o2p()) : false) {
              return this.t33_1;
            }

            this.cd_1 = 2;
            suspendResult = handleCall(this.r33_1, Plugin_getInstance_1(), this.s33_1, this.t33_1, this.p33_1.v33_1, this.q33_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpRedirect$Plugin$install$slambda.prototype.l2z = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.p33_1, this.q33_1, completion);
    i.r33_1 = $this$intercept;
    i.s33_1 = context;
    return i;
  };
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.k2z($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w32_1 = _this__u8e3s4;
    this.x32_1 = _this__u8e3s4_0;
    this.y32_1 = context;
    this.z32_1 = origin;
    this.a33_1 = allowHttpsDowngrade;
    this.b33_1 = client;
  }
  $handleCallCOROUTINE$7.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            if (!isRedirect(this.z32_1.f2l().s2o()))
              return this.z32_1;
            this.c33_1 = this.z32_1;
            this.d33_1 = this.y32_1;
            this.e33_1 = this.z32_1.o2o().r2o().g22_1;
            this.f33_1 = get_authority(this.z32_1.o2o().r2o());
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.cd_1 = 4;
              continue $sm;
            }

            this.b33_1.j2k_1.s2j(this.w32_1.x33_1, this.c33_1.f2l());
            this.g33_1 = this.c33_1.f2l().p1y().w1n(HttpHeaders_getInstance().b1w_1);
            get_LOGGER_3().o1s('Received redirect response to ' + this.g33_1 + ' for request ' + this.y32_1.e2m_1);
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.d2s(this.d33_1);
            ;
            tmp0_apply.e2m_1.d22_1.y6();
            var tmp0_safe_receiver = this.g33_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(tmp0_apply.e2m_1, tmp0_safe_receiver);
            }

            ;
            if ((!this.a33_1 ? isSecure(this.e33_1) : false) ? !isSecure(tmp0_apply.e2m_1.u21_1) : false) {
              get_LOGGER_3().o1s('Can not redirect ' + this.y32_1.e2m_1 + ' because of security downgrade');
              return this.c33_1;
            }

            if (!(this.f33_1 === get_authority_0(tmp0_apply.e2m_1))) {
              tmp0_apply.g2m_1.d1p(HttpHeaders_getInstance().w1u_1);
              get_LOGGER_3().o1s('Removing Authorization header from redirect for ' + this.y32_1.e2m_1);
            }

            tmp_0.d33_1 = tmp0_apply;
            this.cd_1 = 2;
            suspendResult = this.x32_1.h2n(this.d33_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c33_1 = suspendResult;
            if (!isRedirect(this.c33_1.f2l().s2o()))
              return this.c33_1;
            this.cd_1 = 1;
            continue $sm;
          case 3:
            throw this.fd_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function Config_1() {
    this.y33_1 = true;
    this.z33_1 = false;
  }
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.w33_1 = new AttributeKey('HttpRedirect');
    this.x33_1 = new EventDefinition();
  }
  Plugin_1.prototype.q = function () {
    return this.w33_1;
  };
  Plugin_1.prototype.p30 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpRedirect(config.y33_1, config.z33_1);
  };
  Plugin_1.prototype.j2n = function (block) {
    return this.p30(block);
  };
  Plugin_1.prototype.a34 = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.t30(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.k2n = function (plugin, scope) {
    return this.a34(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.u33_1 = checkHttpMethod;
    this.v33_1 = allowHttpsDowngrade;
  }
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.j21_1;
    return ((((tmp0_subject === Companion_getInstance_1().t1z_1.j21_1 ? true : tmp0_subject === Companion_getInstance_1().u1z_1.j21_1) ? true : tmp0_subject === Companion_getInstance_1().z1z_1.j21_1) ? true : tmp0_subject === Companion_getInstance_1().a20_1.j21_1) ? true : tmp0_subject === Companion_getInstance_1().v1z_1.j21_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().q1y_1, Companion_getInstance_2().v1y_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
    }
  }
  function get_LOGGER_4() {
    init_properties_HttpRequestLifecycle_kt_gkn2tl();
    return LOGGER_4;
  }
  var LOGGER_4;
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.j34_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.x2k = function ($this$intercept, it, $cont) {
    var tmp = this.y2k($this$intercept, it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 6;
            this.m34_1 = SupervisorJob(this.k34_1.n1r_1.i2m_1);
            attachToClientEngineJob(this.m34_1, ensureNotNull(this.j34_1.c2k_1.j3(Key_getInstance())));
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 4;
            this.dd_1 = 3;
            this.k34_1.n1r_1.i2m_1 = this.m34_1;
            this.cd_1 = 2;
            suspendResult = this.k34_1.s1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.n34_1 = Unit_getInstance();
            this.dd_1 = 6;
            this.cd_1 = 5;
            continue $sm;
          case 3:
            this.dd_1 = 4;
            var tmp_1 = this.fd_1;
            if (tmp_1 instanceof Error) {
              var cause = this.fd_1;
              var tmp_2 = this;
              this.m34_1.ck(cause);
              throw cause;
            } else {
              throw this.fd_1;
            }

            break;
          case 4:
            this.dd_1 = 6;
            var t = this.fd_1;
            this.m34_1.dk();
            ;
            throw t;
          case 5:
            this.m34_1.dk();
            ;
            return Unit_getInstance();
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
  HttpRequestLifecycle$Plugin$install$slambda.prototype.y2k = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.j34_1, completion);
    i.k34_1 = $this$intercept;
    i.l34_1 = it;
    return i;
  };
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.x2k($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.o34_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.q = function () {
    return this.o34_1;
  };
  Plugin_2.prototype.k2t = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.j2n = function (block) {
    return this.k2t(block);
  };
  Plugin_2.prototype.p34 = function (plugin, scope) {
    var tmp = Phases_getInstance().b2t_1;
    scope.d2k_1.r1r(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.k2n = function (plugin, scope) {
    return this.p34(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
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
    var handler = clientEngineJob.kf(attachToClientEngineJob$lambda(requestJob));
    requestJob.kf(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        get_LOGGER_4().o1s('Cancelling request because engine Job failed with error: ' + cause);
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_getInstance();
      } else {
        get_LOGGER_4().o1s('Cancelling request because engine Job completed');
        $requestJob.dk();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.nh();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function init_properties_HttpRequestLifecycle_kt_gkn2tl() {
    if (properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
    } else {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.y34_1 = $plugin;
    this.z34_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.x2k = function ($this$intercept, content, $cont) {
    var tmp = this.y2k($this$intercept, content, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpSend$Plugin$install$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x2k(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            var tmp_0 = this.b35_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.b35_1) + ', with Content-Type: ' + contentType(this.a35_1.n1r_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0_setBody = this.a35_1.n1r_1;
            var tmp1_setBody = this.b35_1;
            var tmp0_subject = tmp1_setBody;
            if (tmp0_subject == null) {
              tmp0_setBody.h2m_1 = NullBody_getInstance();
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
              tmp0_setBody.e2s(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_setBody.h2m_1 = tmp1_setBody;
                tmp0_setBody.e2s(null);
              } else {
                tmp0_setBody.h2m_1 = tmp1_setBody;
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
                tmp0_setBody.e2s(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            this.c35_1 = new DefaultSender(this.y34_1.r30_1, this.z34_1);
            this.d35_1 = this.c35_1;
            var tmp2_forEach = downTo(get_lastIndex(this.y34_1.s30_1), 0);
            var inductionVariable = tmp2_forEach.o4_1;
            var last = tmp2_forEach.p4_1;
            var step = tmp2_forEach.q4_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.y34_1.s30_1.f(element);
                this.d35_1 = new InterceptedSender(interceptor, this.d35_1);
              }
               while (!(element === last));
            this.cd_1 = 1;
            suspendResult = this.d35_1.h2n(this.a35_1.n1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e35_1 = suspendResult;
            this.cd_1 = 2;
            suspendResult = this.a35_1.r1q(this.e35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 3) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpSend$Plugin$install$slambda.prototype.y2k = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.y34_1, this.z34_1, completion);
    i.a35_1 = $this$intercept;
    i.b35_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.x2k($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n35_1 = _this__u8e3s4;
    this.o35_1 = requestBuilder;
  }
  $executeCOROUTINE$8.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            var tmp0_safe_receiver = this.n35_1.s35_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this.n35_1.r35_1 >= this.n35_1.p35_1) {
              throw new SendCountExceedException('Max send count ' + this.n35_1.p35_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.n35_1;
            var tmp2 = tmp1_this.r35_1;
            tmp1_this.r35_1 = tmp2 + 1 | 0;
            ;
            this.cd_1 = 1;
            suspendResult = this.n35_1.q35_1.f2k_1.m1r(this.o35_1, this.o35_1.h2m_1, this);
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
            this.n35_1.s35_1 = call;
            return call;
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
  function Config_2() {
    this.t35_1 = 20;
  }
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.u35_1 = new AttributeKey('HttpSend');
  }
  Plugin_3.prototype.q = function () {
    return this.u35_1;
  };
  Plugin_3.prototype.p30 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpSend(config.t35_1);
  };
  Plugin_3.prototype.j2n = function (block) {
    return this.p30(block);
  };
  Plugin_3.prototype.v35 = function (plugin, scope) {
    var tmp = Phases_getInstance().f2t_1;
    scope.d2k_1.r1r(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_3.prototype.k2n = function (plugin, scope) {
    return this.v35(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.w35_1 = interceptor;
    this.x35_1 = nextSender;
  }
  InterceptedSender.prototype.h2n = function (requestBuilder, $cont) {
    return this.w35_1(this.x35_1, requestBuilder, $cont);
  };
  function DefaultSender(maxSendCount, client) {
    this.p35_1 = maxSendCount;
    this.q35_1 = client;
    this.r35_1 = 0;
    this.s35_1 = null;
  }
  DefaultSender.prototype.h2n = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance_3();
    this.r30_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.s30_1 = tmp$ret$0;
  }
  HttpSend.prototype.t30 = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.s30_1;
    tmp0_plusAssign.a(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_5() {
    init_properties_HttpTimeout_kt_x3i4pn();
    return LOGGER_5;
  }
  var LOGGER_5;
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.b36(requestTimeoutMillis);
    $this.c36(connectTimeoutMillis);
    $this.d36(socketTimeoutMillis);
    return $this;
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
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value == null ? true : value.v(new Long(0, 0)) > 0;
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
    this.e36_1 = new AttributeKey('TimeoutConfiguration');
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.n36_1 = $requestTimeout;
    this.o36_1 = $request;
    this.p36_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.q11 = function ($this$launch, $cont) {
    var tmp = this.r11($this$launch, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = delay(this.n36_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.o36_1);
            get_LOGGER_5().o1s('Request timeout: ' + this.o36_1.e2m_1);
            cancel_2(this.p36_1, ensureNotNull(cause.message), cause);
            return Unit_getInstance();
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
  HttpTimeout$Plugin$install$slambda$slambda.prototype.r11 = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.n36_1, this.o36_1, this.p36_1, completion);
    i.q36_1 = $this$launch;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q11($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.qf(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.z36_1 = $plugin;
    this.a37_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.k2z = function ($this$intercept, request, $cont) {
    var tmp = this.l2z($this$intercept, request, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpTimeout$Plugin$install$slambda.prototype.z2k = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.k2z(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            this.d37_1 = isWebsocket(this.c37_1.e2m_1.u21_1);
            var tmp_0;
            if (this.d37_1) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.c37_1.h2m_1;
              tmp_0 = tmp_1 instanceof ClientUpgradeContent;
            }

            if (tmp_0) {
              this.cd_1 = 3;
              suspendResult = this.b37_1.h2n(this.c37_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 1;
              continue $sm;
            }

            break;
          case 1:
            this.e37_1 = this.c37_1.f37(Plugin_getInstance_4());
            if (this.e37_1 == null ? hasNotNullTimeouts(this.z36_1) : false) {
              var tmp_2 = this;
              tmp_2.e37_1 = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
              this.c37_1.g37(Plugin_getInstance_4(), this.e37_1);
            }

            var tmp0_safe_receiver = this.e37_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_elvis_lhs = tmp0_safe_receiver.h37();
                tmp0_safe_receiver.c36(tmp0_elvis_lhs == null ? this.z36_1.j37_1 : tmp0_elvis_lhs);
                var tmp1_elvis_lhs = tmp0_safe_receiver.l37();
                tmp0_safe_receiver.d36(tmp1_elvis_lhs == null ? this.z36_1.k37_1 : tmp1_elvis_lhs);
                var tmp2_elvis_lhs = tmp0_safe_receiver.m37();
                tmp0_safe_receiver.b36(tmp2_elvis_lhs == null ? this.z36_1.i37_1 : tmp2_elvis_lhs);
                var tmp3_elvis_lhs = tmp0_safe_receiver.m37();
                var requestTimeout = tmp3_elvis_lhs == null ? this.z36_1.i37_1 : tmp3_elvis_lhs;
                var tmp_3;
                if (requestTimeout == null) {
                  tmp_3 = true;
                } else {
                  Plugin_getInstance_4();
                  tmp_3 = equals(requestTimeout, new Long(-1, 2147483647));
                }
                if (tmp_3) {
                  tmp$ret$0 = Unit_getInstance();
                  break l$ret$1;
                }
                var executionContext = this.c37_1.i2m_1;
                var killer = launch$default(this.a37_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, this.c37_1, executionContext, null), 3, null);
                var tmp_4 = this.c37_1.i2m_1;
                tmp_4.kf(HttpTimeout$Plugin$install$slambda$lambda(killer));
              }
               while (false);
            }

            ;
            this.cd_1 = 2;
            suspendResult = this.b37_1.h2n(this.c37_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            return suspendResult;
          case 4:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  HttpTimeout$Plugin$install$slambda.prototype.l2z = function ($this$intercept, request, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.z36_1, this.a37_1, completion);
    i.b37_1 = $this$intercept;
    i.c37_1 = request;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.k2z($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  HttpTimeoutCapabilityConfiguration.prototype.b36 = function (value) {
    this.y35_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.m37 = function () {
    return this.y35_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.c36 = function (value) {
    this.z35_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.h37 = function () {
    return this.z35_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.d36 = function (value) {
    this.a36_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.l37 = function () {
    return this.a36_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.t1c = function () {
    return new HttpTimeout(this.m37(), this.h37(), this.l37());
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
    if (!equals(this.y35_1, other.y35_1))
      return false;
    if (!equals(this.z35_1, other.z35_1))
      return false;
    if (!equals(this.a36_1, other.a36_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.y35_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.z35_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.a36_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this.y35_1 = new Long(0, 0);
    this.z35_1 = new Long(0, 0);
    this.a36_1 = new Long(0, 0);
  }
  function hasNotNullTimeouts($this) {
    return (!($this.i37_1 == null) ? true : !($this.j37_1 == null)) ? true : !($this.k37_1 == null);
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.n37_1 = new AttributeKey('TimeoutPlugin');
    this.o37_1 = new Long(-1, 2147483647);
  }
  Plugin_4.prototype.q = function () {
    return this.n37_1;
  };
  Plugin_4.prototype.p37 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.t1c();
  };
  Plugin_4.prototype.j2n = function (block) {
    return this.p37(block);
  };
  Plugin_4.prototype.q37 = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.t30(HttpTimeout$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_4.prototype.k2n = function (plugin, scope) {
    return this.q37(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_4();
    this.i37_1 = requestTimeoutMillis;
    this.j37_1 = connectTimeoutMillis;
    this.k37_1 = socketTimeoutMillis;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.e2m_1.d23();
    var tmp0_safe_receiver = request.f37(Plugin_getInstance_4());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m37());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function init_properties_HttpTimeout_kt_x3i4pn() {
    if (properties_initialized_HttpTimeout_kt_9oyjbd) {
    } else {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
    }
  }
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.n2p(), content, _this__u8e3s4);
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.r37_1 = call;
    this.s37_1 = content;
    this.t37_1 = origin;
    this.u37_1 = this.t37_1.je();
  }
  DelegatedResponse.prototype.n2p = function () {
    return this.r37_1;
  };
  DelegatedResponse.prototype.p2o = function () {
    return this.s37_1;
  };
  DelegatedResponse.prototype.je = function () {
    return this.u37_1;
  };
  DelegatedResponse.prototype.s2o = function () {
    return this.t37_1.s2o();
  };
  DelegatedResponse.prototype.y2p = function () {
    return this.t37_1.y2p();
  };
  DelegatedResponse.prototype.z2p = function () {
    return this.t37_1.z2p();
  };
  DelegatedResponse.prototype.a2q = function () {
    return this.t37_1.a2q();
  };
  DelegatedResponse.prototype.p1y = function () {
    return this.t37_1.p1y();
  };
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
  function ClientUpgradeContent() {
  }
  function DefaultHttpRequest(call, data) {
    this.v37_1 = call;
    this.w37_1 = data.f2r_1;
    this.x37_1 = data.e2r_1;
    this.y37_1 = data.h2r_1;
    this.z37_1 = data.g2r_1;
    this.a38_1 = data.j2r_1;
  }
  DefaultHttpRequest.prototype.n2p = function () {
    return this.v37_1;
  };
  DefaultHttpRequest.prototype.je = function () {
    return this.n2p().je();
  };
  DefaultHttpRequest.prototype.o2p = function () {
    return this.w37_1;
  };
  DefaultHttpRequest.prototype.r2o = function () {
    return this.x37_1;
  };
  DefaultHttpRequest.prototype.p1y = function () {
    return this.z37_1;
  };
  DefaultHttpRequest.prototype.t2n = function () {
    return this.a38_1;
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
    tmp.e2m_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.f2m_1 = Companion_getInstance_2().q1y_1;
    var tmp_0 = this;
    tmp_0.g2m_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.h2m_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.i2m_1 = SupervisorJob$default(null, 1, null);
    this.j2m_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.p1y = function () {
    return this.g2m_1;
  };
  HttpRequestBuilder.prototype.e2s = function (value) {
    if (!(value == null)) {
      this.j2m_1.f1n(get_BodyTypeAttributeKey(), value);
    } else {
      this.j2m_1.g1n(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.b38 = function () {
    return this.j2m_1.d1n(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.t1c = function () {
    var tmp = this.e2m_1.t1c();
    var tmp_0 = this.f2m_1;
    var tmp_1 = this.g2m_1.t1c();
    var tmp_2 = this.h2m_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.h2m_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.i2m_1, this.j2m_1);
  };
  HttpRequestBuilder.prototype.d2s = function (builder) {
    this.i2m_1 = builder.i2m_1;
    return this.c38(builder);
  };
  HttpRequestBuilder.prototype.c38 = function (builder) {
    this.f2m_1 = builder.f2m_1;
    this.h2m_1 = builder.h2m_1;
    this.e2s(builder.b38());
    takeFrom_0(this.e2m_1, builder.e2m_1);
    this.e2m_1.b22_1 = this.e2m_1.b22_1;
    appendAll(this.g2m_1, builder.g2m_1);
    putAll(this.j2m_1, builder.j2m_1);
    return this;
  };
  HttpRequestBuilder.prototype.g37 = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.j2m_1.h1n(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.v2(key, capability);
  };
  HttpRequestBuilder.prototype.f37 = function (key) {
    var tmp0_safe_receiver = this.j2m_1.d1n(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.e2r_1 = url;
    this.f2r_1 = method;
    this.g2r_1 = headers;
    this.h2r_1 = body;
    this.i2r_1 = executionContext;
    this.j2r_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.j2r_1.d1n(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2();
    tmp.k2r_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.e2r_1 + ', method=' + this.f2r_1 + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.m2n_1 = statusCode;
    this.n2n_1 = requestTime;
    this.o2n_1 = headers;
    this.p2n_1 = version;
    this.q2n_1 = body;
    this.r2n_1 = callContext;
    var tmp = this;
    tmp.s2n_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.m2n_1 + ')';
  };
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.e2m_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.h2r_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.b2t_1 = new PipelinePhase('Before');
    this.c2t_1 = new PipelinePhase('State');
    this.d2t_1 = new PipelinePhase('Transform');
    this.e2t_1 = new PipelinePhase('Render');
    this.f2t_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().b2t_1, Phases_getInstance().c2t_1, Phases_getInstance().d2t_1, Phases_getInstance().e2t_1, Phases_getInstance().f2t_1]);
    this.k38_1 = developmentMode;
  }
  HttpRequestPipeline.prototype.l1r = function () {
    return this.k38_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.u2m_1 = new PipelinePhase('Before');
    this.v2m_1 = new PipelinePhase('State');
    this.w2m_1 = new PipelinePhase('Monitoring');
    this.x2m_1 = new PipelinePhase('Engine');
    this.y2m_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().u2m_1, Phases_getInstance_0().v2m_1, Phases_getInstance_0().w2m_1, Phases_getInstance_0().x2m_1, Phases_getInstance_0().y2m_1]);
    this.s38_1 = developmentMode;
  }
  HttpSendPipeline.prototype.l1r = function () {
    return this.s38_1;
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
  function header(_this__u8e3s4, key, value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.p1y().b1p(key, toString(tmp0_safe_receiver));
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
    this.t38_1 = call;
    this.u38_1 = responseData.r2n_1;
    this.v38_1 = responseData.m2n_1;
    this.w38_1 = responseData.p2n_1;
    this.x38_1 = responseData.n2n_1;
    this.y38_1 = responseData.s2n_1;
    var tmp = this;
    var tmp_0 = responseData.q2n_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.z38_1 = tmp0_elvis_lhs == null ? Companion_getInstance().l1g() : tmp0_elvis_lhs;
    this.a39_1 = responseData.o2n_1;
  }
  DefaultHttpResponse.prototype.n2p = function () {
    return this.t38_1;
  };
  DefaultHttpResponse.prototype.je = function () {
    return this.u38_1;
  };
  DefaultHttpResponse.prototype.s2o = function () {
    return this.v38_1;
  };
  DefaultHttpResponse.prototype.y2p = function () {
    return this.w38_1;
  };
  DefaultHttpResponse.prototype.z2p = function () {
    return this.x38_1;
  };
  DefaultHttpResponse.prototype.a2q = function () {
    return this.y38_1;
  };
  DefaultHttpResponse.prototype.p2o = function () {
    return this.z38_1;
  };
  DefaultHttpResponse.prototype.p1y = function () {
    return this.a39_1;
  };
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).r2o() + ', ' + this.s2o() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.n2p().o2o();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.je().j3(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.dk();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().k1j_1;
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j39_1 = _this__u8e3s4;
    this.k39_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$12.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.j39_1);
            tmp_0.l39_1 = tmp0_elvis_lhs == null ? this.k39_1 : tmp0_elvis_lhs;
            this.m39_1 = this.l39_1.n1j();
            this.cd_1 = 1;
            var tmp_1 = this.j39_1.n2p();
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

            suspendResult = tmp_1.q2o(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.m39_1, input, 0, 2, null);
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
  function Phases_1() {
    Phases_instance_1 = this;
    this.c2n_1 = new PipelinePhase('Receive');
    this.d2n_1 = new PipelinePhase('Parse');
    this.e2n_1 = new PipelinePhase('Transform');
    this.f2n_1 = new PipelinePhase('State');
    this.g2n_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().c2n_1, Phases_getInstance_1().d2n_1, Phases_getInstance_1().e2n_1, Phases_getInstance_1().f2n_1, Phases_getInstance_1().g2n_1]);
    this.u39_1 = developmentMode;
  }
  HttpResponsePipeline.prototype.l1r = function () {
    return this.u39_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.g2t_1 = new PipelinePhase('Before');
    this.h2t_1 = new PipelinePhase('State');
    this.i2t_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().g2t_1, Phases_getInstance_2().h2t_1, Phases_getInstance_2().i2t_1]);
    this.c3a_1 = developmentMode;
  }
  HttpReceivePipeline.prototype.l1r = function () {
    return this.c3a_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.m2o_1 = expectedType;
    this.n2o_1 = response;
  }
  HttpResponseContainer.prototype.t2 = function () {
    return this.m2o_1;
  };
  HttpResponseContainer.prototype.u2 = function () {
    return this.n2o_1;
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.m2o_1 + ', response=' + toString(this.n2o_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.m2o_1.hashCode();
    result = imul(result, 31) + hashCode(this.n2o_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.m2o_1.equals(tmp0_other_with_cast.m2o_1))
      return false;
    if (!equals(this.n2o_1, tmp0_other_with_cast.n2o_1))
      return false;
    return true;
  };
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.d3a_1.j2m_1.d1n(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.d();
      while (tmp0_iterator.l()) {
        var element = tmp0_iterator.e();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          tmp0_filterIsInstanceTo.a(element);
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
      var tmp0_iterator_0 = tmp2_safe_receiver.d();
      while (tmp0_iterator_0.l()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp0_requireNotNull = pluginOrNull($this.e3a_1, element_0);
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
  HttpStatement$execute$slambda.prototype.o3a = function (it, $cont) {
    var tmp = this.k2v(it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpStatement$execute$slambda.prototype.xd = function (p1, $cont) {
    return this.o3a(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = save(this.n3a_1.n2p(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.f2l();
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
  HttpStatement$execute$slambda.prototype.k2v = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.n3a_1 = it;
    return i;
  };
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.o3a(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$13(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x3a_1 = _this__u8e3s4;
    this.y3a_1 = block;
  }
  $executeCOROUTINE$13.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 13;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 12;
            this.cd_1 = 2;
            suspendResult = this.x3a_1.e3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a3b_1 = suspendResult;
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.cd_1 = 4;
            continue $sm;
          case 4:
            this.dd_1 = 10;
            this.cd_1 = 5;
            suspendResult = this.y3a_1(this.a3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.b3b_1 = suspendResult;
            this.cd_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.c3b_1 = this.b3b_1;
            this.cd_1 = 7;
            suspendResult = this.x3a_1.f3b(this.a3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.c3b_1;
          case 8:
            this.cd_1 = 9;
            suspendResult = this.x3a_1.f3b(this.a3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.z3a_1 = Unit_getInstance();
            this.dd_1 = 13;
            this.cd_1 = 15;
            continue $sm;
          case 10:
            this.dd_1 = 12;
            this.d3b_1 = this.fd_1;
            this.cd_1 = 11;
            suspendResult = this.x3a_1.f3b(this.a3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.d3b_1;
          case 12:
            this.dd_1 = 13;
            var tmp_2 = this.fd_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.fd_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.fd_1;
            }

            break;
          case 13:
            throw this.fd_1;
          case 14:
            this.dd_1 = 13;
            if (false) {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 15;
            continue $sm;
          case 15:
            return this.z3a_1;
        }
      } catch ($p) {
        if (this.dd_1 === 13) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $executeUnsafeCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o3b_1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$14.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.dd_1 = 3;
            this.q3b_1 = (new HttpRequestBuilder()).d2s(this.o3b_1.d3a_1);
            this.cd_1 = 2;
            suspendResult = this.o3b_1.e3a_1.h2n(this.q3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.f2l();
          case 3:
            this.dd_1 = 4;
            var tmp_1 = this.fd_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.fd_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.fd_1;
            }

            break;
          case 4:
            throw this.fd_1;
          case 5:
            this.dd_1 = 4;
            if (false) {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 6;
            continue $sm;
          case 6:
            return this.p3b_1;
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function $cleanupCOROUTINE$15(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z3b_1 = _this__u8e3s4;
    this.a3c_1 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$15.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.a3c_1.je().j3(Key_getInstance()));
            tmp_0.b3c_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.b3c_1.dk();
            ;
            this.dd_1 = 1;
            cancel_1(this.a3c_1.p2o());
            ;
            this.dd_1 = 4;
            this.cd_1 = 2;
            continue $sm;
          case 1:
            this.dd_1 = 4;
            var tmp_2 = this.fd_1;
            if (tmp_2 instanceof Error) {
              this.c3c_1 = this.fd_1;
              this.cd_1 = 2;
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 2:
            this.dd_1 = 4;
            this.cd_1 = 3;
            suspendResult = this.b3c_1.ek(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            return Unit_getInstance();
          case 4:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.d3a_1 = builder;
    this.e3a_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.d3c = function (block, $cont) {
    var tmp = new $executeCOROUTINE$13(this, block, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpStatement.prototype.e3c = function ($cont) {
    return this.d3c(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.e3b = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$14(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpStatement.prototype.f3b = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$15(this, _this__u8e3s4, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.d3a_1.e2m_1 + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).c1f();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.n3c_1 = $contentLength;
    this.o3c_1 = $this_observable;
    this.p3c_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.l2q = function ($this$writer, $cont) {
    var tmp = this.m2q($this$writer, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  observable$slambda.prototype.xd = function (p1, $cont) {
    return this.l2q((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 15;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.s3c_1 = get_ByteArrayPool();
            this.t3c_1 = this.s3c_1.v1f();
            this.cd_1 = 2;
            continue $sm;
          case 2:
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.dd_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.n3c_1;
            tmp_1.v3c_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.w3c_1 = new Long(0, 0);
            this.cd_1 = 4;
            continue $sm;
          case 4:
            if (!!this.o3c_1.t19()) {
              this.cd_1 = 8;
              continue $sm;
            }

            this.cd_1 = 5;
            suspendResult = readAvailable(this.o3c_1, this.t3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.x3c_1 = suspendResult;
            this.cd_1 = 6;
            suspendResult = this.q3c_1.c1f().r1e(this.t3c_1, 0, this.x3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp0_plus = this.w3c_1;
            tmp_2.w3c_1 = tmp0_plus.r5(toLong(this.x3c_1));
            this.cd_1 = 7;
            suspendResult = this.p3c_1(this.w3c_1, this.v3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.cd_1 = 4;
            continue $sm;
          case 8:
            this.y3c_1 = this.o3c_1.d19();
            this.q3c_1.c1f().ls(this.y3c_1);
            ;
            if (this.y3c_1 == null ? this.w3c_1.equals(new Long(0, 0)) : false) {
              this.cd_1 = 9;
              suspendResult = this.p3c_1(this.w3c_1, this.v3c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 10;
              continue $sm;
            }

            break;
          case 9:
            this.cd_1 = 10;
            continue $sm;
          case 10:
            this.u3c_1 = Unit_getInstance();
            this.dd_1 = 15;
            this.cd_1 = 11;
            var tmp_3 = this;
            continue $sm;
          case 11:
            var tmp_4 = this;
            this.s3c_1.a1i(this.t3c_1);
            tmp_4.r3c_1 = Unit_getInstance();
            this.cd_1 = 13;
            continue $sm;
          case 12:
            this.s3c_1.a1i(this.t3c_1);
            ;
            if (false) {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.dd_1 = 15;
            var t = this.fd_1;
            this.s3c_1.a1i(this.t3c_1);
            ;
            throw t;
          case 15:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 15) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  observable$slambda.prototype.m2q = function ($this$writer, completion) {
    var i = new observable$slambda(this.n3c_1, this.o3c_1, this.p3c_1, completion);
    i.q3c_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.l2q($this$writer, $cont);
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
    this.z3c_1 = response;
    this.a3d_1 = cause;
  }
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
    this.c3d_1 = new Long(0, 0);
  }
  EmptyContent.prototype.p23 = function () {
    return this.c3d_1;
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
    return tmp$ret$0.t1c();
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.d3d = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.i2n = function (block) {
    return this.d3d(block);
  };
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().j1s_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.u1o(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$17($this, request, callContext, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
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
    this.a3e_1 = _this__u8e3s4;
    this.b3e_1 = data;
  }
  $executeCOROUTINE$16.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 6;
            this.cd_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c3e_1 = suspendResult;
            this.d3e_1 = this.b3e_1.j2r_1.c1n(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.b3e_1)) {
              this.cd_1 = 5;
              suspendResult = executeWebSocketRequest(this.a3e_1, this.b3e_1, this.c3e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var tmp_0 = this;
            tmp_0.e3e_1 = GMTDate$default(null, 1, null);
            this.cd_1 = 3;
            suspendResult = toRaw(this.b3e_1, this.d3e_1, this.c3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f3e_1 = suspendResult;
            this.cd_1 = 4;
            suspendResult = commonFetch(this.b3e_1.e2r_1.toString(), this.f3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_3().a1z_1;
            var body = readBody(CoroutineScope_0(this.c3e_1), rawResponse);
            return new HttpResponseData(status, this.e3e_1, headers, version, body, this.c3e_1);
          case 5:
            return suspendResult;
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
  function $executeWebSocketRequestCOROUTINE$17(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3d_1 = _this__u8e3s4;
    this.n3d_1 = request;
    this.o3d_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$17.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            var tmp_0 = this;
            tmp_0.p3d_1 = GMTDate$default(null, 1, null);
            this.q3d_1 = this.n3d_1.e2r_1.toString();
            this.r3d_1 = createWebSocket(this.m3d_1, this.q3d_1, this.n3d_1.g2r_1);
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = awaitConnection(this.r3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.dd_1 = 4;
            this.cd_1 = 3;
            continue $sm;
          case 2:
            this.dd_1 = 4;
            var tmp_1 = this.fd_1;
            if (tmp_1 instanceof Error) {
              var cause = this.fd_1;
              cancel_3(this.o3d_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.q3d_1, cause));
              throw cause;
            } else {
              throw this.fd_1;
            }

            break;
          case 3:
            this.dd_1 = 4;
            var session = new JsWebSocketSession(this.o3d_1, this.r3d_1);
            return new HttpResponseData(Companion_getInstance_1().k1z_1, this.p3d_1, Companion_getInstance_4().k1u_1, Companion_getInstance_3().a1z_1, session, this.o3d_1);
          case 4:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.j3e_1 = config;
    this.k3e_1 = Dispatchers_getInstance().ok_1;
    this.l3e_1 = setOf_0([Plugin_getInstance_4(), WebSocketCapability_getInstance()]);
    // Inline function 'kotlin.check' call
    var tmp0_check = this.j3e_1.z2s_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      tmp$ret$0 = 'Proxy unsupported in Js engine.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  JsClientEngine.prototype.s2m = function () {
    return this.j3e_1;
  };
  JsClientEngine.prototype.t2s = function () {
    return this.k3e_1;
  };
  JsClientEngine.prototype.l2r = function () {
    return this.l3e_1;
  };
  JsClientEngine.prototype.r2s = function (data, $cont) {
    var tmp = new $executeCOROUTINE$16(this, data, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.ch()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.ih(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.hj();
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
    tmp0_apply.qb(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    tmp$ret$3 = tmp0_apply;
    tmp$ret$4 = tmp$ret$3.toString();
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.m3e_1 = origin;
    captureStack(this, JsError);
  }
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.b1p(key, value);
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
        $cancellable.g3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = new WebSocketException(asString(event));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_5();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
        $cancellable.g3(tmp$ret$2);
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
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
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
    this.j3f_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.l2q = function ($this$writer, $cont) {
    var tmp = this.m2q($this$writer, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  toRaw$slambda.prototype.xd = function (p1, $cont) {
    return this.l2q((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.j3f_1.t23(this.k3f_1.c1f(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  toRaw$slambda.prototype.m2q = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.j3f_1, completion);
    i.k3f_1 = $this$writer;
    return i;
  };
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.l2q($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.f2r_1.y1y_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.o2m_1) {
        var tmp$ret$2;
        // Inline function 'org.w3c.fetch.FOLLOW' call
        var tmp0__get_FOLLOW__lsxog0 = null;
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
        var tmp1__get_MANUAL__wgvzkm = null;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'manual';
        var tmp0_unsafeCast_0 = tmp$ret$3;
        tmp$ret$4 = tmp0_unsafeCast_0;
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
    this.v3e_1 = _this__u8e3s4;
    this.w3e_1 = clientConfig;
    this.x3e_1 = callContext;
  }
  $toRawCOROUTINE$18.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            this.y3e_1 = {};
            mergeHeaders(this.v3e_1.g2r_1, this.v3e_1.h2r_1, toRaw$lambda(this.y3e_1));
            this.z3e_1 = this.v3e_1.h2r_1;
            var tmp_0 = this.z3e_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.a3f_1 = this.z3e_1.v23();
              this.cd_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.z3e_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.cd_1 = 2;
                var tmp_2 = this.z3e_1.r23();
                suspendResult = tmp_2.t1e(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.z3e_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  this.cd_1 = 1;
                  var tmp_4 = GlobalScope_getInstance();
                  var tmp_5 = writer$default(tmp_4, this.x3e_1, false, toRaw$slambda_0(this.z3e_1, null), 2, null).c1f();
                  suspendResult = tmp_5.t1e(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.a3f_1 = null;
                  this.cd_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_6 = this;
            tmp_6.a3f_1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.cd_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_7 = this;
            tmp_7.a3f_1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.cd_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.a3f_1;
            return buildObject(toRaw$lambda_0(this.v3e_1, this.y3e_1, this.w3e_1, bodyBytes));
          case 4:
            throw this.fd_1;
        }
      } catch ($p) {
        if (this.dd_1 === 4) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
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
      return Companion_getInstance().l1g();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).c1f();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    tmp$ret$0 = cancellable.hj();
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.t3f_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.l2q = function ($this$writer, $cont) {
    var tmp = this.m2q($this$writer, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  channelFromStream$slambda.prototype.xd = function (p1, $cont) {
    return this.l2q((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 6;
            this.v3f_1 = this.t3f_1.getReader();
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.cd_1 = 8;
              continue $sm;
            }

            this.dd_1 = 5;
            this.cd_1 = 2;
            suspendResult = readChunk(this.v3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w3f_1 = suspendResult;
            if (this.w3f_1 == null) {
              this.dd_1 = 6;
              this.cd_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.x3f_1 = this.w3f_1;
              this.cd_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.y3f_1 = this.x3f_1;
            this.cd_1 = 4;
            suspendResult = writeFully(this.u3f_1.c1f(), asByteArray(this.y3f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.dd_1 = 6;
            this.cd_1 = 7;
            continue $sm;
          case 5:
            this.dd_1 = 6;
            var tmp_1 = this.fd_1;
            if (tmp_1 instanceof Error) {
              var cause = this.fd_1;
              this.v3f_1.cancel(cause);
              throw cause;
            } else {
              throw this.fd_1;
            }

            break;
          case 6:
            throw this.fd_1;
          case 7:
            this.dd_1 = 6;
            this.cd_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
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
  channelFromStream$slambda.prototype.m2q = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.t3f_1, completion);
    i.u3f_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.l2q($this$writer, $cont);
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
      $cancellable.g3(tmp$ret$0);
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
      $cancellable.g3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.ih(commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().i1s_1) {
      tmp = fetch(input, init);
    } else {
      tmp = jsRequireNodeFetch()(input, init);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    tmp$ret$0 = cancellable.hj();
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().i1s_1) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().i1s_1) {
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
      $cancellable.g3(tmp$ret$0);
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
      $cancellable.g3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).c1f();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.vs(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.ls(cause);
      return $this_writer.c1f().ls(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.xs(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.h3g_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.l2q = function ($this$writer, $cont) {
    var tmp = this.m2q($this$writer, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  readBodyNode$slambda.prototype.xd = function (p1, $cont) {
    return this.l2q((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.h3g_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.j3g_1 = tmp_1;
            var tmp_2 = this;
            tmp_2.k3g_1 = Channel$default(1, null, null, 6, null);
            this.j3g_1.on('data', readBodyNode$slambda$lambda(this.k3g_1, this.j3g_1));
            this.j3g_1.on('error', readBodyNode$slambda$lambda_0(this.k3g_1, this.i3g_1));
            this.j3g_1.on('end', readBodyNode$slambda$lambda_1(this.k3g_1));
            this.dd_1 = 5;
            this.l3g_1 = this.k3g_1.d();
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.cd_1 = 2;
            suspendResult = this.l3g_1.zq(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.cd_1 = 4;
              continue $sm;
            }

            this.m3g_1 = this.l3g_1.e();
            this.cd_1 = 3;
            suspendResult = writeFully(this.i3g_1.c1f(), this.m3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.j3g_1.resume();
            this.cd_1 = 1;
            continue $sm;
          case 4:
            this.dd_1 = 6;
            this.cd_1 = 7;
            continue $sm;
          case 5:
            this.dd_1 = 6;
            var tmp_3 = this.fd_1;
            if (tmp_3 instanceof Error) {
              var cause = this.fd_1;
              this.j3g_1.destroy(cause);
              throw cause;
            } else {
              throw this.fd_1;
            }

            break;
          case 6:
            throw this.fd_1;
          case 7:
            this.dd_1 = 6;
            ;
            return Unit_getInstance();
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
  readBodyNode$slambda.prototype.m2q = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.h3g_1, completion);
    i.i3g_1 = $this$writer;
    return i;
  };
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.l2q($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_6().g24(_this__u8e3s4);
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
          this$0.p3g_1.ck(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.q3g_1.vs(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0.p3g_1.ck(cause);
      this$0.q3g_1.ls(cause);
      this$0.r3g_1.qf(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.p3g_1.ak(reason);
      this$0.q3g_1.vs(Close_init_$Create$(reason));
      this$0.q3g_1.xs(null, 1, null);
      this$0.r3g_1.qf(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.d3h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.q11 = function ($this$launch, $cont) {
    var tmp = this.r11($this$launch, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  JsWebSocketSession$slambda.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 10;
            var tmp_0 = this;
            tmp_0.f3h_1 = this.d3h_1.r3g_1;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            this.h3h_1 = null;
            this.cd_1 = 2;
            continue $sm;
          case 2:
            this.cd_1 = 3;
            continue $sm;
          case 3:
            this.dd_1 = 9;
            this.dd_1 = 8;
            this.j3h_1 = this.f3h_1.d();
            this.cd_1 = 4;
            continue $sm;
          case 4:
            this.cd_1 = 5;
            suspendResult = this.j3h_1.zq(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.cd_1 = 6;
              continue $sm;
            }

            var e = this.j3h_1.e();
            var tmp0_subject = e.s24_1;
            var tmp0 = tmp0_subject.w3_1;
            switch (tmp0) {
              case 0:
                var text = e.t24_1;
                this.d3h_1.o3g_1.send(String$default(text, 0, 0, null, 14, null));
                ;
                break;
              case 1:
                var tmp_1 = e.t24_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.d3h_1.o3g_1.send(frameData);
                ;
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    writeFully$default(builder, e.t24_1, 0, 0, 6, null);
                    tmp$ret$0 = builder.t1c();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.kk();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.b1j(0, 0, 3, null);
                this.d3h_1.p3g_1.ak(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.d3h_1)) {
                  this.d3h_1.o3g_1.close();
                } else {
                  this.d3h_1.o3g_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.cd_1 = 4;
            continue $sm;
          case 6:
            this.i3h_1 = Unit_getInstance();
            this.dd_1 = 10;
            this.cd_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            cancelConsumed(this.f3h_1, this.h3h_1);
            tmp_3.g3h_1 = Unit_getInstance();
            this.cd_1 = 12;
            continue $sm;
          case 8:
            this.dd_1 = 9;
            var tmp_4 = this.fd_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.fd_1;
              var tmp_5 = this;
              this.h3h_1 = e_0;
              throw e_0;
            } else {
              throw this.fd_1;
            }

            break;
          case 9:
            this.dd_1 = 10;
            var t = this.fd_1;
            cancelConsumed(this.f3h_1, this.h3h_1);
            ;
            throw t;
          case 10:
            throw this.fd_1;
          case 11:
            cancelConsumed(this.f3h_1, this.h3h_1);
            ;
            if (false) {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 10) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.r11 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.d3h_1, completion);
    i.e3h_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q11($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.o3g_1.close();
        tmp = Unit_getInstance();
      } else {
        this$0.o3g_1.close(Codes_INTERNAL_ERROR_getInstance().d24_1, 'Client failed');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.n3g_1 = coroutineContext;
    this.o3g_1 = websocket;
    var tmp = this;
    tmp.p3g_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.q3g_1 = Channel$default(2147483647, null, null, 6, null);
    var tmp_1 = this;
    Factory_getInstance();
    tmp_1.r3g_1 = Channel$default(2147483647, null, null, 6, null);
    this.s3g_1 = this.q3g_1;
    this.t3g_1 = this.r3g_1;
    this.u3g_1 = this.p3g_1;
    var tmp$ret$2;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    var tmp0__get_ARRAYBUFFER__ua4cvm = null;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'arraybuffer';
    var tmp0_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    this.o3g_1.binaryType = tmp$ret$2;
    this.o3g_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.o3g_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.o3g_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.n3g_1.j3(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.kf(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.je = function () {
    return this.n3g_1;
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
  HttpClientEngineBase.prototype.l2r = get_supportedCapabilities;
  HttpClientEngineBase.prototype.t2m = install;
  KtorCallContextElement.prototype.j3 = get;
  KtorCallContextElement.prototype.p3 = fold;
  KtorCallContextElement.prototype.o3 = minusKey;
  KtorCallContextElement.prototype.q3 = plus;
  HttpRequest$1.prototype.je = get_coroutineContext;
  JsClientEngine.prototype.t2m = install;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Js_getInstance;
  _.$_$.b = Plugin_getInstance_4;
  _.$_$.c = HttpRequestBuilder;
  _.$_$.d = header;
  _.$_$.e = url;
  _.$_$.f = HttpStatement;
  _.$_$.g = HttpClient_0;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map
