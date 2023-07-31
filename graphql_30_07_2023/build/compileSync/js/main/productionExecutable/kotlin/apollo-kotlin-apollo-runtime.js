(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './apollo-kotlin-apollo-api.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './okio-parent-okio-js-ir.js', './apollo-kotlin-apollo-mpp-utils.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./apollo-kotlin-apollo-api.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./okio-parent-okio-js-ir.js'), require('./apollo-kotlin-apollo-mpp-utils.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['apollo-kotlin-apollo-api'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'apollo-kotlin-apollo-api' was not found. Please, check whether 'apollo-kotlin-apollo-api' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['okio-parent-okio-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'okio-parent-okio-js-ir' was not found. Please, check whether 'okio-parent-okio-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['apollo-kotlin-apollo-mpp-utils'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'apollo-kotlin-apollo-mpp-utils' was not found. Please, check whether 'apollo-kotlin-apollo-mpp-utils' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    root['apollo-kotlin-apollo-runtime'] = factory(typeof this['apollo-kotlin-apollo-runtime'] === 'undefined' ? {} : this['apollo-kotlin-apollo-runtime'], this['apollo-kotlin-apollo-api'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['okio-parent-okio-js-ir'], this['apollo-kotlin-apollo-mpp-utils'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_com_apollographql_apollo3_apollo_api, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_com_squareup_okio_okio, kotlin_com_apollographql_apollo3_apollo_mpp_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_com_apollographql_apollo3_apollo_api.$_$.z1;
  var Builder = kotlin_com_apollographql_apollo3_apollo_api.$_$.l;
  var single = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var classMeta = kotlin_kotlin.$_$.w6;
  var setMetadataFor = kotlin_kotlin.$_$.r7;
  var Builder_0 = kotlin_com_apollographql_apollo3_apollo_api.$_$.o;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var Unit_getInstance = kotlin_kotlin.$_$.a3;
  var toString = kotlin_kotlin.$_$.v7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var ensureNotNull = kotlin_kotlin.$_$.y9;
  var listOfNotNull = kotlin_kotlin.$_$.t4;
  var plus = kotlin_kotlin.$_$.d5;
  var objectMeta = kotlin_kotlin.$_$.q7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Companion_getInstance_0 = kotlin_com_apollographql_apollo3_apollo_api.$_$.a2;
  var toString_0 = kotlin_kotlin.$_$.ha;
  var plus_0 = kotlin_kotlin.$_$.e5;
  var get = kotlin_com_apollographql_apollo3_apollo_api.$_$.r;
  var fold = kotlin_com_apollographql_apollo3_apollo_api.$_$.q;
  var minusKey = kotlin_com_apollographql_apollo3_apollo_api.$_$.s;
  var plus_1 = kotlin_com_apollographql_apollo3_apollo_api.$_$.u;
  var Element = kotlin_com_apollographql_apollo3_apollo_api.$_$.t;
  var Subscription = kotlin_com_apollographql_apollo3_apollo_api.$_$.d1;
  var isInterface = kotlin_kotlin.$_$.j7;
  var Mutation = kotlin_com_apollographql_apollo3_apollo_api.$_$.w;
  var Query = kotlin_com_apollographql_apollo3_apollo_api.$_$.b1;
  var flowOn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var cancel$default_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x5;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var SendChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var ReceiveChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var THROW_CCE = kotlin_kotlin.$_$.r9;
  var Map = kotlin_kotlin.$_$.g3;
  var List = kotlin_kotlin.$_$.e3;
  var MutableMap = kotlin_kotlin.$_$.k3;
  var DeferredFragmentIdentifier = kotlin_com_apollographql_apollo3_apollo_api.$_$.p;
  var BufferedSourceJsonReader = kotlin_com_apollographql_apollo3_apollo_api.$_$.f;
  var readAny = kotlin_com_apollographql_apollo3_apollo_api.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var addAll = kotlin_kotlin.$_$.n3;
  var to = kotlin_kotlin.$_$.ia;
  var mapOf = kotlin_kotlin.$_$.x4;
  var charSequenceLength = kotlin_kotlin.$_$.u6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var indexOf$default = kotlin_kotlin.$_$.m;
  var isCharSequence = kotlin_kotlin.$_$.i7;
  var trim = kotlin_kotlin.$_$.d9;
  var HttpHeader = kotlin_com_apollographql_apollo3_apollo_api.$_$.b;
  var equals = kotlin_kotlin.$_$.y6;
  var Long = kotlin_kotlin.$_$.n9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var toLong = kotlin_kotlin.$_$.t7;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var Companion_getInstance_1 = kotlin_com_squareup_okio_okio.$_$.c;
  var Companion_getInstance_2 = kotlin_com_squareup_okio_okio.$_$.b;
  var ApolloException_init_$Create$ = kotlin_com_apollographql_apollo3_apollo_api.$_$.u1;
  var buffer = kotlin_com_squareup_okio_okio.$_$.h;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var CancellationException = kotlin_kotlin.$_$.w5;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.q6;
  var CoroutineImpl = kotlin_kotlin.$_$.l6;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var isObject = kotlin_kotlin.$_$.l7;
  var valueOf = kotlin_com_apollographql_apollo3_apollo_api.$_$.d;
  var startsWith = kotlin_kotlin.$_$.u8;
  var onCompletion = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var charArrayOf = kotlin_kotlin.$_$.r6;
  var split$default = kotlin_kotlin.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var startsWith$default = kotlin_kotlin.$_$.q;
  var getOrNull = kotlin_kotlin.$_$.n4;
  var trim_0 = kotlin_kotlin.$_$.c9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.y2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.x9;
  var interfaceMeta = kotlin_kotlin.$_$.f7;
  var ApolloParseException = kotlin_com_apollographql_apollo3_apollo_api.$_$.q1;
  var ApolloException = kotlin_com_apollographql_apollo3_apollo_api.$_$.o1;
  var ApolloResponse = kotlin_com_apollographql_apollo3_apollo_api.$_$.m;
  var BufferedSource = kotlin_com_squareup_okio_okio.$_$.d;
  var jsonReader = kotlin_com_apollographql_apollo3_apollo_api.$_$.h;
  var withDeferredFragmentIds = kotlin_com_apollographql_apollo3_apollo_api.$_$.n1;
  var parseJsonResponse = kotlin_com_apollographql_apollo3_apollo_api.$_$.j1;
  var Exception = kotlin_kotlin.$_$.j9;
  var jsonReader_0 = kotlin_com_apollographql_apollo3_apollo_api.$_$.g;
  var currentTimeMillis = kotlin_com_apollographql_apollo3_apollo_mpp_utils.$_$.a;
  var DefaultHttpRequestComposer = kotlin_com_apollographql_apollo3_apollo_api.$_$.a;
  var ApolloHttpException_init_$Create$ = kotlin_com_apollographql_apollo3_apollo_api.$_$.v1;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var Key_getInstance = kotlin_com_apollographql_apollo3_apollo_api.$_$.y1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var println = kotlin_kotlin.$_$.n6;
  var ApolloNetworkException_init_$Create$ = kotlin_com_apollographql_apollo3_apollo_api.$_$.w1;
  var mutableMapOf = kotlin_kotlin.$_$.a5;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Companion_getInstance_4 = kotlin_com_apollographql_apollo3_apollo_api.$_$.x1;
  var mapOf_0 = kotlin_kotlin.$_$.y4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.da;
  var ApolloNetworkException = kotlin_com_apollographql_apollo3_apollo_api.$_$.p1;
  var SubscriptionOperationException = kotlin_com_apollographql_apollo3_apollo_api.$_$.r1;
  var addSuppressed = kotlin_kotlin.$_$.v9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Collection = kotlin_kotlin.$_$.d3;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.u2;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var onSubscription = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var BufferedSinkJsonWriter = kotlin_com_apollographql_apollo3_apollo_api.$_$.e;
  var writeAny = kotlin_com_apollographql_apollo3_apollo_api.$_$.j;
  var get_AnyAdapter = kotlin_com_apollographql_apollo3_apollo_api.$_$.k;
  var Enum = kotlin_kotlin.$_$.h9;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var url = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.i;
  var header = kotlin_io_ktor_ktor_client_core.$_$.d;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.w2;
  var arrayOf = kotlin_kotlin.$_$.w9;
  var createKType = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.f;
  var isByteArray = kotlin_kotlin.$_$.h7;
  var Builder_1 = kotlin_com_apollographql_apollo3_apollo_api.$_$.c;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.u;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.g;
  var equals_0 = kotlin_kotlin.$_$.l8;
  var flatten = kotlin_kotlin.$_$.m4;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var intercepted = kotlin_kotlin.$_$.z5;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var toTypedArray = kotlin_kotlin.$_$.u5;
  var toShort = kotlin_kotlin.$_$.u7;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.t;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.l;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_http.$_$.g;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var Url = kotlin_io_ktor_ktor_http.$_$.v;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApolloCall, 'ApolloCall', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(Builder_2, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloClient, 'ApolloClient', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ConcurrencyInfo, 'ConcurrencyInfo', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(DefaultInterceptorChain, 'DefaultInterceptorChain', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NetworkInterceptor, 'NetworkInterceptor', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChannelWrapper, 'ChannelWrapper', classMeta, undefined, [SendChannel, ReceiveChannel], undefined, undefined, [0, 1]);
  setMetadataFor(DeferredJsonMerger, 'DeferredJsonMerger', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PartSource, 'PartSource', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Part, 'Part', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MultipartReader, 'MultipartReader', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor($emitCOROUTINE$1, '$emitCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(transformWhile$slambda$slambda, 'transformWhile$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(transformWhile$slambda, 'transformWhile$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(multipartBodyFlow$slambda, 'multipartBodyFlow$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(multipartBodyFlow$slambda_1, 'multipartBodyFlow$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Key_0, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpInfo, 'HttpInfo', classMeta, undefined, [Element], undefined, undefined, []);
  function dispose() {
  }
  setMetadataFor(HttpInterceptor, 'HttpInterceptor', interfaceMeta, undefined, undefined, undefined, undefined, [2]);
  setMetadataFor(DefaultHttpInterceptorChain, 'DefaultHttpInterceptorChain', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport$execute$slambda$o$collect$slambda, 'HttpNetworkTransport$execute$slambda$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$5, '$collectCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_0, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport$multipleResponses$o$collect$slambda, 'HttpNetworkTransport$multipleResponses$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpNetworkTransport$multipleResponses$o$collect$slambda_1, 'HttpNetworkTransport$multipleResponses$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(EngineInterceptor, 'EngineInterceptor', classMeta, undefined, [HttpInterceptor], undefined, undefined, [2]);
  setMetadataFor(Builder_3, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport$execute$slambda, 'HttpNetworkTransport$execute$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_1, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_2, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport, 'HttpNetworkTransport', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b, 'SubscriptionWsProtocol$Factory$<init>$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [0]);
  setMetadataFor(Factory, 'Factory', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SubscriptionWsProtocol$connectionInit$slambda, 'SubscriptionWsProtocol$connectionInit$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($connectionInitCOROUTINE$8, '$connectionInitCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WsProtocol, 'WsProtocol', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(SubscriptionWsProtocol, 'SubscriptionWsProtocol', classMeta, WsProtocol, undefined, undefined, undefined, [0]);
  setMetadataFor(WebSocketNetworkTransport$execute$o$collect$slambda, 'WebSocketNetworkTransport$execute$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport$execute$o$collect$slambda_1, 'WebSocketNetworkTransport$execute$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$11, '$collectCOROUTINE$11', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport$execute$o$collect$slambda_3, 'WebSocketNetworkTransport$execute$o$collect$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$12, '$collectCOROUTINE$12', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Builder_4, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$slambda, 'WebSocketNetworkTransport$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$listener$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport$supervise$slambda, 'WebSocketNetworkTransport$supervise$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$supervise$slambda_1, 'WebSocketNetworkTransport$supervise$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$execute$slambda, 'WebSocketNetworkTransport$execute$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_3, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$execute$slambda_1, 'WebSocketNetworkTransport$execute$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(_no_name_provided__qut3iv_4, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_5, undefined, classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$execute$slambda_3, 'WebSocketNetworkTransport$execute$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($superviseCOROUTINE$9, '$superviseCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport, 'WebSocketNetworkTransport', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($receiveMessageMapCOROUTINE$13, '$receiveMessageMapCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($runCOROUTINE$14, '$runCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WsFrameType, 'WsFrameType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Event, 'Event', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OperationResponse, 'OperationResponse', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OperationError, 'OperationError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OperationComplete, 'OperationComplete', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(GeneralError, 'GeneralError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(NetworkError, 'NetworkError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(Command, 'Command', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StartOperation, 'StartOperation', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(Dispose, 'Dispose', objectMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(StopOperation, 'StopOperation', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(CloseableSingleThreadDispatcher, 'CloseableSingleThreadDispatcher', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($executeCOROUTINE$15, '$executeCOROUTINE$15', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DefaultHttpEngine, 'DefaultHttpEngine', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultWebSocketEngine$open$5, undefined, classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(DefaultWebSocketEngine$createWebSocket$headers_capturingHack$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($openCOROUTINE$16, '$openCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DefaultWebSocketEngine, 'DefaultWebSocketEngine', classMeta, undefined, undefined, undefined, undefined, [2, 0]);
  //endregion
  function ApolloCall(apolloClient, operation) {
    this.k3h_1 = apolloClient;
    this.l3h_1 = operation;
    this.m3h_1 = Companion_getInstance().q2b_1;
    this.n3h_1 = null;
    this.o3h_1 = null;
    this.p3h_1 = null;
    this.q3h_1 = null;
    this.r3h_1 = null;
    this.s3h_1 = null;
  }
  ApolloCall.prototype.t3h = function () {
    var request = (new Builder(this.l3h_1)).y2b(this.m3h_1).r2b(this.n3h_1).s2b(this.o3h_1).u2b(this.p3h_1).v2b(this.q3h_1).w2b(this.r3h_1).x2b(this.s3h_1).t1c();
    return this.k3h_1.j3i(request);
  };
  ApolloCall.prototype.k3i = function ($cont) {
    return single(this.t3h(), $cont);
  };
  function Builder_2() {
    this.l3i_1 = null;
    this.m3i_1 = null;
    this.n3i_1 = new Builder_0();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.o3i_1 = tmp$ret$0;
    this.p3i_1 = null;
    this.q3i_1 = this.o3i_1;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.r3i_1 = tmp$ret$1;
    this.s3i_1 = null;
    this.t3i_1 = Companion_getInstance().q2b_1;
    this.u3i_1 = null;
    this.v3i_1 = null;
    this.w3i_1 = null;
    this.x3i_1 = null;
    this.y3i_1 = null;
    this.z3i_1 = null;
    this.a3j_1 = null;
    this.b3j_1 = null;
    failOnNativeIfLegacyMemoryManager();
    this.c3j_1 = null;
    this.d3j_1 = null;
    this.e3j_1 = null;
    this.f3j_1 = null;
    this.g3j_1 = null;
    this.h3j_1 = null;
  }
  Builder_2.prototype.r2b = function (httpMethod) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpMethod.<anonymous>' call
    this.c3j_1 = httpMethod;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.s2b = function (httpHeaders) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpHeaders.<anonymous>' call
    this.d3j_1 = httpHeaders;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.i3j = function (serverUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.serverUrl.<anonymous>' call
    this.u3i_1 = serverUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_2.prototype.t1c = function () {
    var tmp;
    if (!(this.l3i_1 == null)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = this.u3i_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$0 = "Apollo: 'httpServerUrl' has no effect if 'networkTransport' is set";
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      var tmp1_check = this.v3i_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$1 = "Apollo: 'httpEngine' has no effect if 'networkTransport' is set";
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      // Inline function 'kotlin.check' call
      var tmp2_check = this.r3i_1.k();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_check) {
        var tmp$ret$2;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$2 = "Apollo: 'addHttpInterceptor' has no effect if 'networkTransport' is set";
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      // Inline function 'kotlin.check' call
      var tmp3_check = this.z3i_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp3_check) {
        var tmp$ret$3;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$3 = "Apollo: 'httpExposeErrorBody' has no effect if 'networkTransport' is set";
        var message_2 = tmp$ret$3;
        throw IllegalStateException_init_$Create$(toString(message_2));
      }
      tmp = ensureNotNull(this.l3i_1);
    } else {
      // Inline function 'kotlin.check' call
      var tmp4_check = !(this.u3i_1 == null);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp4_check) {
        var tmp$ret$4;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$4 = "Apollo: 'serverUrl' is required";
        var message_3 = tmp$ret$4;
        throw IllegalStateException_init_$Create$(toString(message_3));
      }
      var tmp$ret$5;
      // Inline function 'kotlin.apply' call
      var tmp5_apply = (new Builder_3()).i3j(ensureNotNull(this.u3i_1));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
      if (!(this.v3i_1 == null)) {
        tmp5_apply.o3j(ensureNotNull(this.v3i_1));
      }
      if (!(this.z3i_1 == null)) {
        tmp5_apply.p3j(ensureNotNull(this.z3i_1));
      }
      tmp$ret$5 = tmp5_apply;
      tmp = tmp$ret$5.q3j(this.r3i_1).t1c();
    }
    var networkTransport = tmp;
    var tmp_0;
    if (!(this.m3i_1 == null)) {
      // Inline function 'kotlin.check' call
      var tmp6_check = this.w3i_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp6_check) {
        var tmp$ret$6;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$6 = "Apollo: 'webSocketServerUrl' has no effect if 'subscriptionNetworkTransport' is set";
        var message_4 = tmp$ret$6;
        throw IllegalStateException_init_$Create$(toString(message_4));
      }
      // Inline function 'kotlin.check' call
      var tmp7_check = this.a3j_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp7_check) {
        var tmp$ret$7;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$7 = "Apollo: 'webSocketEngine' has no effect if 'subscriptionNetworkTransport' is set";
        var message_5 = tmp$ret$7;
        throw IllegalStateException_init_$Create$(toString(message_5));
      }
      // Inline function 'kotlin.check' call
      var tmp8_check = this.x3i_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp8_check) {
        var tmp$ret$8;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$8 = "Apollo: 'webSocketIdleTimeoutMillis' has no effect if 'subscriptionNetworkTransport' is set";
        var message_6 = tmp$ret$8;
        throw IllegalStateException_init_$Create$(toString(message_6));
      }
      // Inline function 'kotlin.check' call
      var tmp9_check = this.y3i_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp9_check) {
        var tmp$ret$9;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$9 = "Apollo: 'wsProtocolFactory' has no effect if 'subscriptionNetworkTransport' is set";
        var message_7 = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message_7));
      }
      // Inline function 'kotlin.check' call
      var tmp10_check = this.b3j_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp10_check) {
        var tmp$ret$10;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$10 = "Apollo: 'webSocketReopenWhen' has no effect if 'subscriptionNetworkTransport' is set";
        var message_8 = tmp$ret$10;
        throw IllegalStateException_init_$Create$(toString(message_8));
      }
      tmp_0 = ensureNotNull(this.m3i_1);
    } else {
      var tmp0_elvis_lhs = this.w3i_1;
      var url = tmp0_elvis_lhs == null ? this.u3i_1 : tmp0_elvis_lhs;
      var tmp_1;
      if (url == null) {
        tmp_1 = networkTransport;
      } else {
        var tmp$ret$11;
        // Inline function 'kotlin.apply' call
        var tmp11_apply = (new Builder_4()).i3j(url);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        if (!(this.a3j_1 == null)) {
          tmp11_apply.x3j(ensureNotNull(this.a3j_1));
        }
        if (!(this.x3i_1 == null)) {
          tmp11_apply.y3j(ensureNotNull(this.x3i_1));
        }
        if (!(this.y3i_1 == null)) {
          tmp11_apply.z3j(ensureNotNull(this.y3i_1));
        }
        if (!(this.b3j_1 == null)) {
          tmp11_apply.a3k(this.b3j_1);
        }
        tmp$ret$11 = tmp11_apply;
        tmp_1 = tmp$ret$11.t1c();
      }
      tmp_0 = tmp_1;
    }
    var subscriptionNetworkTransport = tmp_0;
    var tmp1_customScalarAdapters = this.n3i_1.t1c();
    var tmp2_interceptors = plus(this.o3i_1, listOfNotNull(this.p3i_1));
    var tmp3_dispatcher = this.s3i_1;
    var tmp4_executionContext = this.t3i_1;
    var tmp5_httpMethod = this.c3j_1;
    var tmp6_httpHeaders = this.d3j_1;
    var tmp7_sendApqExtensions = this.e3j_1;
    var tmp8_sendDocument = this.f3j_1;
    var tmp9_enableAutoPersistedQueries = this.g3j_1;
    var tmp10_canBeBatched = this.h3j_1;
    return new ApolloClient(networkTransport, tmp1_customScalarAdapters, subscriptionNetworkTransport, tmp2_interceptors, tmp4_executionContext, tmp3_dispatcher, tmp5_httpMethod, tmp6_httpHeaders, tmp7_sendApqExtensions, tmp8_sendDocument, tmp9_enableAutoPersistedQueries, tmp10_canBeBatched, this);
  };
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ApolloClient(networkTransport, customScalarAdapters, subscriptionNetworkTransport, interceptors, executionContext, dispatcher, httpMethod, httpHeaders, sendApqExtensions, sendDocument, enableAutoPersistedQueries, canBeBatched, builder) {
    Companion_getInstance_8();
    this.u3h_1 = networkTransport;
    this.v3h_1 = customScalarAdapters;
    this.w3h_1 = subscriptionNetworkTransport;
    this.x3h_1 = interceptors;
    this.y3h_1 = executionContext;
    this.z3h_1 = dispatcher;
    this.a3i_1 = httpMethod;
    this.b3i_1 = httpHeaders;
    this.c3i_1 = sendApqExtensions;
    this.d3i_1 = sendDocument;
    this.e3i_1 = enableAutoPersistedQueries;
    this.f3i_1 = canBeBatched;
    this.g3i_1 = builder;
    var tmp0_elvis_lhs = this.z3h_1;
    var dispatcher_0 = tmp0_elvis_lhs == null ? get_defaultDispatcher() : tmp0_elvis_lhs;
    this.h3i_1 = new ConcurrencyInfo(dispatcher_0, CoroutineScope(dispatcher_0));
    this.i3i_1 = new NetworkInterceptor(this.u3h_1, this.w3h_1, this.h3i_1.b3k_1);
  }
  ApolloClient.prototype.d3k = function (query) {
    return new ApolloCall(this, query);
  };
  ApolloClient.prototype.v15 = function () {
    cancel$default(this.h3i_1.c3k_1, null, 1, null);
    this.u3h_1.nh();
    this.w3h_1.nh();
  };
  ApolloClient.prototype.j3i = function (apolloRequest) {
    var executionContext = this.h3i_1.a2c(this.v3h_1).a2c(this.y3h_1).a2c(apolloRequest.d2c_1);
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = (new Builder(apolloRequest.b2c_1)).z2b(this.h3i_1).z2b(this.v3h_1).z2b(executionContext).z2b(apolloRequest.d2c_1).r2b(this.a3i_1).s2b(this.b3i_1).u2b(this.c3i_1).v2b(this.d3i_1).w2b(this.e3i_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloClient.executeAsFlow.<anonymous>' call
    if (!(apolloRequest.e2c_1 == null)) {
      tmp0_apply.r2b(apolloRequest.e2c_1);
    }
    if (!(apolloRequest.f2c_1 == null)) {
      tmp0_apply.s2b(apolloRequest.f2c_1);
    }
    if (!(apolloRequest.g2c_1 == null)) {
      tmp0_apply.u2b(apolloRequest.g2c_1);
    }
    if (!(apolloRequest.h2c_1 == null)) {
      tmp0_apply.v2b(apolloRequest.h2c_1);
    }
    if (!(apolloRequest.i2c_1 == null)) {
      tmp0_apply.w2b(apolloRequest.i2c_1);
    }
    if (!(apolloRequest.j2c_1 == null)) {
      Companion_getInstance_0();
      tmp0_apply.t2b('X-APOLLO-CAN-BE-BATCHED', toString_0(apolloRequest.j2c_1));
    }
    tmp$ret$0 = tmp0_apply;
    var request = tmp$ret$0.t1c();
    return (new DefaultInterceptorChain(plus_0(this.x3h_1, this.i3i_1), 0)).g3k(request);
  };
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ConcurrencyInfo(dispatcher, coroutineScope) {
    Key_getInstance_0();
    this.b3k_1 = dispatcher;
    this.c3k_1 = coroutineScope;
  }
  ConcurrencyInfo.prototype.q = function () {
    return Key_getInstance_0();
  };
  function DefaultInterceptorChain(interceptors, index) {
    this.e3k_1 = interceptors;
    this.f3k_1 = index;
  }
  DefaultInterceptorChain.prototype.g3k = function (request) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.f3k_1 < this.e3k_1.c();
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
    return this.e3k_1.f(this.f3k_1).h3k(request, new DefaultInterceptorChain(this.e3k_1, this.f3k_1 + 1 | 0));
  };
  function NetworkInterceptor(networkTransport, subscriptionNetworkTransport, dispatcher) {
    this.i3k_1 = networkTransport;
    this.j3k_1 = subscriptionNetworkTransport;
    this.k3k_1 = dispatcher;
  }
  NetworkInterceptor.prototype.h3k = function (request, chain) {
    var tmp0_subject = request.b2c_1;
    var tmp;
    if (isInterface(tmp0_subject, Query)) {
      tmp = this.i3k_1.l3k(request);
    } else {
      if (isInterface(tmp0_subject, Mutation)) {
        tmp = this.i3k_1.l3k(request);
      } else {
        if (isInterface(tmp0_subject, Subscription)) {
          tmp = this.j3k_1.l3k(request);
        } else {
          throw IllegalStateException_init_$Create$('');
        }
      }
    }
    return flowOn(tmp, this.k3k_1);
  };
  function ChannelWrapper(wrapped) {
    this.m3k_1 = wrapped;
    this.n3k_1 = null;
    this.o3k_1 = false;
  }
  ChannelWrapper.prototype.pf = function (cause) {
    this.m3k_1.pf(cause);
  };
  ChannelWrapper.prototype.d = function () {
    return this.m3k_1.d();
  };
  ChannelWrapper.prototype.hs = function ($cont) {
    return this.m3k_1.hs($cont);
  };
  ChannelWrapper.prototype.is = function ($cont) {
    var tmp = this.m3k_1.is($cont);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return new ChannelResult(tmp.js_1);
  };
  ChannelWrapper.prototype.us = function (element, $cont) {
    return this.m3k_1.us(element, $cont);
  };
  ChannelWrapper.prototype.vs = function (element) {
    return this.m3k_1.vs(element);
  };
  ChannelWrapper.prototype.ls = function (cause) {
    this.o3k_1 = true;
    var closeAdded = this.m3k_1.ls(cause);
    if (closeAdded) {
      var tmp0_safe_receiver = this.n3k_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(cause);
    }
    this.n3k_1 = null;
    return closeAdded;
  };
  function mergeData($this, incrementalItem) {
    var tmp = incrementalItem.b2('data');
    var data = (tmp == null ? true : isInterface(tmp, Map)) ? tmp : THROW_CCE();
    var tmp_0 = incrementalItem.b2('path');
    var path = (!(tmp_0 == null) ? isInterface(tmp_0, List) : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = $this.q3k_1.b2('data');
    var mergedData = (!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) ? tmp_1 : THROW_CCE();
    if (!(data == null)) {
      var tmp_2 = nodeAtPath($this, mergedData, path);
      var nodeToMergeInto = (!(tmp_2 == null) ? isInterface(tmp_2, MutableMap) : false) ? tmp_2 : THROW_CCE();
      deepMerge($this, nodeToMergeInto, data);
      var tmp0_this = $this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this.r3k_1;
      var tmp_3 = incrementalItem.b2('label');
      var tmp1_plusAssign = new DeferredFragmentIdentifier(path, (tmp_3 == null ? true : typeof tmp_3 === 'string') ? tmp_3 : THROW_CCE());
      tmp0_plusAssign.a(tmp1_plusAssign);
    }
  }
  function deepMerge($this, destination, map) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = map.p().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.l()) {
      var tmp1_loop_parameter = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.q();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.r();
      var value = tmp$ret$2;
      var tmp;
      if (destination.v1(key)) {
        var tmp_0 = destination.b2(key);
        tmp = !(tmp_0 == null) ? isInterface(tmp_0, MutableMap) : false;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_1 = destination.b2(key);
        var fieldDestination = (!(tmp_1 == null) ? isInterface(tmp_1, MutableMap) : false) ? tmp_1 : THROW_CCE();
        var tmp2_elvis_lhs = (!(value == null) ? isInterface(value, Map) : false) ? value : null;
        var tmp_2;
        if (tmp2_elvis_lhs == null) {
          var tmp0_error = "'" + key + "' is an object in destination but not in map";
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        } else {
          tmp_2 = tmp2_elvis_lhs;
        }
        var fieldMap = tmp_2;
        deepMerge($this, fieldDestination, fieldMap);
      } else {
        // Inline function 'kotlin.collections.set' call
        destination.v2(key, value);
      }
    }
  }
  function jsonToMap($this, json) {
    var tmp = readAny(new BufferedSourceJsonReader(json));
    return (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
  }
  function nodeAtPath($this, map, path) {
    var node = map;
    var tmp0_iterator = path.d();
    while (tmp0_iterator.l()) {
      var key = tmp0_iterator.e();
      var tmp;
      if (!(node == null) ? isInterface(node, List) : false) {
        var tmp_0 = node;
        tmp = tmp_0.f(typeof key === 'number' ? key : THROW_CCE());
      } else {
        if (!(node == null) ? isInterface(node, Map) : false)
          node;
        else
          THROW_CCE();
        var tmp$ret$0;
        // Inline function 'kotlin.collections.get' call
        var tmp0_get = node;
        tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).b2(key);
        tmp = tmp$ret$0;
      }
      node = tmp;
    }
    return node;
  }
  function DeferredJsonMerger() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.p3k_1 = tmp$ret$0;
    this.q3k_1 = this.p3k_1;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0.r3k_1 = tmp$ret$1;
    this.s3k_1 = this.r3k_1;
    this.t3k_1 = true;
    this.u3k_1 = false;
  }
  DeferredJsonMerger.prototype.v3k = function (payload) {
    var payloadMap = jsonToMap(this, payload);
    return this.w3k(payloadMap);
  };
  DeferredJsonMerger.prototype.w3k = function (payload) {
    if (this.q3k_1.k()) {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this.p3k_1;
      tmp0_plusAssign.z7(payload);
      return this.q3k_1;
    }
    var tmp = payload.b2('incremental');
    var incrementalList = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : null;
    if (incrementalList == null) {
      this.u3k_1 = true;
    } else {
      this.u3k_1 = false;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var mergedErrors = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$1 = ArrayList_init_$Create$();
      var mergedExtensions = tmp$ret$1;
      var tmp1_iterator = incrementalList.d();
      while (tmp1_iterator.l()) {
        var incrementalItem = tmp1_iterator.e();
        mergeData(this, incrementalItem);
        var tmp_0 = incrementalItem.b2('errors');
        var tmp2_safe_receiver = (!(tmp_0 == null) ? isInterface(tmp_0, List) : false) ? tmp_0 : null;
        if (tmp2_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addAll(mergedErrors, tmp2_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        var tmp_1 = incrementalItem.b2('extensions');
        var tmp3_safe_receiver = (!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) ? tmp_1 : null;
        if (tmp3_safe_receiver == null)
          null;
        else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          mergedExtensions.a(tmp3_safe_receiver);
          tmp$ret$3 = Unit_getInstance();
        }
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$4 = !mergedErrors.k();
      if (tmp$ret$4) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = this.p3k_1;
        tmp1_set.v2('errors', mergedErrors);
      } else {
        this.p3k_1.a8('errors');
      }
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !mergedExtensions.k();
      if (tmp$ret$5) {
        // Inline function 'kotlin.collections.set' call
        var tmp2_set = this.p3k_1;
        var tmp3_set = mapOf(to('incremental', mergedExtensions));
        tmp2_set.v2('extensions', tmp3_set);
      } else {
        this.p3k_1.a8('extensions');
      }
    }
    var tmp_2 = this;
    var tmp_3 = payload.b2('hasNext');
    var tmp4_elvis_lhs = (tmp_3 == null ? true : typeof tmp_3 === 'boolean') ? tmp_3 : THROW_CCE();
    tmp_2.t3k_1 = tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs;
    return this.q3k_1;
  };
  DeferredJsonMerger.prototype.d1h = function () {
    this.p3k_1.y6();
    this.r3k_1.y6();
    this.t3k_1 = true;
    this.u3k_1 = false;
  };
  function isDeferred(_this__u8e3s4) {
    return _this__u8e3s4.c2().n('hasNext');
  }
  function readHeaders($this, source) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var headers = tmp$ret$0;
    $l$loop: while (true) {
      var line = source.f27();
      var tmp$ret$1;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$1 = charSequenceLength(line) === 0;
      if (tmp$ret$1)
        break $l$loop;
      var tmp = _Char___init__impl__6a9atx(58);
      var index = indexOf$default(line, tmp, 0, false, 6, null);
      // Inline function 'kotlin.check' call
      var tmp0_check = !(index === -1);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'com.apollographql.apollo3.internal.Companion.readHeaders.<anonymous>' call
        tmp$ret$2 = 'Unexpected header: ' + line;
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp$ret$5;
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = line;
      tmp$ret$4 = tmp$ret$3.substring(0, index);
      var tmp1_trim = tmp$ret$4;
      tmp$ret$5 = toString(trim(isCharSequence(tmp1_trim) ? tmp1_trim : THROW_CCE()));
      var tmp_0 = tmp$ret$5;
      var tmp$ret$8;
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$7;
      // Inline function 'kotlin.text.substring' call
      var tmp2_substring = index + 1 | 0;
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = line;
      tmp$ret$7 = tmp$ret$6.substring(tmp2_substring);
      var tmp3_trim = tmp$ret$7;
      tmp$ret$8 = toString(trim(isCharSequence(tmp3_trim) ? tmp3_trim : THROW_CCE()));
      var tmp4_plusAssign = new HttpHeader(tmp_0, tmp$ret$8);
      headers.a(tmp4_plusAssign);
    }
    return headers;
  }
  function PartSource($outer) {
    this.x3k_1 = $outer;
  }
  PartSource.prototype.v15 = function () {
    if (equals(this.x3k_1.f3l_1, this)) {
      this.x3k_1.f3l_1 = null;
    }
  };
  PartSource.prototype.t27 = function (sink, byteCount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.v(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.internal.PartSource.read.<anonymous>' call
      tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = equals(this.x3k_1.f3l_1, this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.internal.PartSource.read.<anonymous>' call
      tmp$ret$1 = 'closed';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var limit = currentPartBytesRemaining(this.x3k_1, byteCount);
    return limit.equals(new Long(0, 0)) ? new Long(-1, -1) : this.x3k_1.y3k_1.t27(sink, limit);
  };
  function currentPartBytesRemaining($this, maxResult) {
    $this.y3k_1.w26(toLong($this.b3l_1.c()));
    var delimiterIndex = $this.y3k_1.v26().u27($this.b3l_1);
    var tmp;
    if (delimiterIndex.equals(new Long(-1, -1))) {
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = $this.y3k_1.v26().d25_1;
      var tmp1_minus = $this.b3l_1.c();
      tmp$ret$0 = tmp0_minus.s5(toLong(tmp1_minus));
      var tmp2_plus = tmp$ret$0;
      tmp$ret$1 = tmp2_plus.r5(new Long(1, 0));
      var tmp3_minOf = tmp$ret$1;
      tmp$ret$2 = maxResult.v(tmp3_minOf) <= 0 ? maxResult : tmp3_minOf;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$3 = maxResult.v(delimiterIndex) <= 0 ? maxResult : delimiterIndex;
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function Part(headers, body) {
    this.h3l_1 = headers;
    this.i3l_1 = body;
  }
  Part.prototype.v15 = function () {
    this.i3l_1.v15();
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function MultipartReader(source, boundary) {
    Companion_getInstance_9();
    this.y3k_1 = source;
    this.z3k_1 = boundary;
    this.a3l_1 = (new Buffer()).p27('--').p27(this.z3k_1).a27();
    this.b3l_1 = (new Buffer()).p27('\r\n--').p27(this.z3k_1).a27();
    this.c3l_1 = 0;
    this.d3l_1 = false;
    this.e3l_1 = false;
    this.f3l_1 = null;
    this.g3l_1 = Companion_getInstance_1().h25([Companion_getInstance_2().d28('\r\n--' + this.z3k_1 + '--'), Companion_getInstance_2().d28('\r\n'), Companion_getInstance_2().d28('--'), Companion_getInstance_2().d28(' '), Companion_getInstance_2().d28('\t')]);
  }
  MultipartReader.prototype.j3l = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.d3l_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.internal.MultipartReader.nextPart.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (this.e3l_1)
      return null;
    if (this.c3l_1 === 0 ? this.y3k_1.z27(new Long(0, 0), this.a3l_1) : false) {
      this.y3k_1.e25(toLong(this.a3l_1.c()));
    } else {
      $l$loop: while (true) {
        var toSkip = currentPartBytesRemaining(this, new Long(8192, 0));
        if (toSkip.equals(new Long(0, 0)))
          break $l$loop;
        this.y3k_1.e25(toSkip);
      }
      this.y3k_1.e25(toLong(this.b3l_1.c()));
    }
    var whitespace = false;
    afterBoundaryLoop: while (true) {
      var tmp0_subject = this.y3k_1.j27(this.g3l_1);
      switch (tmp0_subject) {
        case 0:
          if (this.c3l_1 === 0) {
            throw ApolloException_init_$Create$('expected at least 1 part', null, 2, null);
          }

          this.e3l_1 = true;
          return null;
        case 1:
          var tmp1_this = this;
          var tmp2 = tmp1_this.c3l_1;
          tmp1_this.c3l_1 = tmp2 + 1 | 0;
          ;
          break afterBoundaryLoop;
        case 2:
          if (whitespace) {
            throw ApolloException_init_$Create$('unexpected characters after boundary', null, 2, null);
          }

          if (this.c3l_1 === 0) {
            throw ApolloException_init_$Create$('expected at least 1 part', null, 2, null);
          }

          this.e3l_1 = true;
          return null;
        case 3:
        case 4:
          whitespace = true;
          continue afterBoundaryLoop;
        case -1:
          throw ApolloException_init_$Create$('unexpected characters after boundary', null, 2, null);
      }
    }
    var headers = readHeaders(Companion_getInstance_9(), this.y3k_1);
    var partSource = new PartSource(this);
    this.f3l_1 = partSource;
    return new Part(headers, buffer(partSource));
  };
  MultipartReader.prototype.v15 = function () {
    if (this.d3l_1)
      return Unit_getInstance();
    this.d3l_1 = true;
    this.f3l_1 = null;
    this.y3k_1.v15();
  };
  function transformWhile(_this__u8e3s4, transform) {
    return flow(transformWhile$slambda_0(_this__u8e3s4, transform, null));
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    this.k3l_1 = owner;
    captureStack(this, AbortFlowException);
  }
  AbortFlowException.prototype.l3l = function (owner) {
    if (!(this.k3l_1 === owner))
      throw this;
  };
  function $emitCOROUTINE$1(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u3l_1 = _this__u8e3s4;
    this.v3l_1 = value;
  }
  $emitCOROUTINE$1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.cd_1 = 1;
            suspendResult = this.u3l_1.w3l_1(this.u3l_1.x3l_1, this.v3l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.u3l_1);
            } else {
              this.cd_1 = 2;
              continue $sm;
            }

            break;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.y3l_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.vv = function (value, $cont) {
    return this.y3l_1(value, $cont);
  };
  function _no_name_provided__qut3iv($transform, $this_flow) {
    this.w3l_1 = $transform;
    this.x3l_1 = $this_flow;
  }
  _no_name_provided__qut3iv.prototype.vv = function (value, $cont) {
    var tmp = new $emitCOROUTINE$1(this, value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  function transformWhile$slambda$slambda($collector, resultContinuation) {
    this.h3m_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  transformWhile$slambda$slambda.prototype.c12 = function (it, $cont) {
    var tmp = this.d12(it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  transformWhile$slambda$slambda.prototype.xd = function (p1, $cont) {
    return this.c12((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  transformWhile$slambda$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.h3m_1.vv(this.i3m_1, this);
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
  transformWhile$slambda$slambda.prototype.d12 = function (it, completion) {
    var i = new transformWhile$slambda$slambda(this.h3m_1, completion);
    i.i3m_1 = it;
    return i;
  };
  function transformWhile$slambda$slambda_0($collector, resultContinuation) {
    var i = new transformWhile$slambda$slambda($collector, resultContinuation);
    var l = function (it, $cont) {
      return i.c12(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function transformWhile$slambda($this_transformWhile, $transform, resultContinuation) {
    this.r3m_1 = $this_transformWhile;
    this.s3m_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  transformWhile$slambda.prototype.v3m = function ($this$flow, $cont) {
    var tmp = this.w3m($this$flow, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  transformWhile$slambda.prototype.xd = function (p1, $cont) {
    return this.v3m((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  transformWhile$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            var tmp_0 = this;
            tmp_0.u3m_1 = new _no_name_provided__qut3iv(this.s3m_1, this.t3m_1);
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_1 = transformWhile$slambda$slambda_0(this.u3m_1, null);
            suspendResult = this.r3m_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dd_1 = 3;
            this.cd_1 = 4;
            continue $sm;
          case 2:
            this.dd_1 = 3;
            var tmp_2 = this.fd_1;
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.fd_1;
              e.l3l(this.u3m_1);
              this.cd_1 = 4;
              continue $sm;
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
  transformWhile$slambda.prototype.w3m = function ($this$flow, completion) {
    var i = new transformWhile$slambda(this.r3m_1, this.s3m_1, completion);
    i.t3m_1 = $this$flow;
    return i;
  };
  function transformWhile$slambda_0($this_transformWhile, $transform, resultContinuation) {
    var i = new transformWhile$slambda($this_transformWhile, $transform, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.v3m($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_isMultipart(_this__u8e3s4) {
    var tmp0_safe_receiver = valueOf(_this__u8e3s4.u2f_1, 'Content-Type');
    return (tmp0_safe_receiver == null ? null : startsWith(tmp0_safe_receiver, 'multipart/', true)) === true;
  }
  function multipartBodyFlow(response) {
    var multipartReader = {_v: null};
    var tmp = flow(multipartBodyFlow$slambda_0(multipartReader, response, null));
    return onCompletion(tmp, multipartBodyFlow$slambda_2(multipartReader, null));
  }
  function getBoundaryParameter(contentType) {
    if (contentType == null)
      return null;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp = charArrayOf([_Char___init__impl__6a9atx(59)]);
    var tmp0_map = split$default(contentType, tmp, false, 0, 6, null);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.l()) {
      var item = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.internal.getBoundaryParameter.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      tmp$ret$1 = tmp$ret$0;
      tmp0_mapTo.a(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    var parameters = tmp$ret$3;
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = parameters.d();
      while (tmp0_iterator_0.l()) {
        var element = tmp0_iterator_0.e();
        var tmp$ret$4;
        // Inline function 'com.apollographql.apollo3.internal.getBoundaryParameter.<anonymous>' call
        tmp$ret$4 = startsWith$default(element, 'boundary=', false, 2, null);
        if (tmp$ret$4) {
          tmp$ret$5 = element;
          break $l$block;
        }
      }
      tmp$ret$5 = null;
    }
    var boundaryParameter = tmp$ret$5;
    var tmp0_safe_receiver = boundaryParameter;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(61)]);
      tmp_0 = split$default(tmp0_safe_receiver, tmp_1, false, 0, 6, null);
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : getOrNull(tmp1_safe_receiver, 1);
    return tmp2_safe_receiver == null ? null : trim_0(tmp2_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(39)]));
  }
  function multipartBodyFlow$slambda($multipartReader, $response, resultContinuation) {
    this.f3n_1 = $multipartReader;
    this.g3n_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  multipartBodyFlow$slambda.prototype.l3n = function ($this$flow, $cont) {
    var tmp = this.m3n($this$flow, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  multipartBodyFlow$slambda.prototype.xd = function (p1, $cont) {
    return this.l3n((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  multipartBodyFlow$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            var tmp_0 = ensureNotNull(this.g3n_1.x2f());
            var tmp0_elvis_lhs = getBoundaryParameter(valueOf(this.g3n_1.u2f_1, 'Content-Type'));
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw ApolloException_init_$Create$('Expected the Content-Type to have a boundary parameter', null, 2, null);
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            this.f3n_1._v = new MultipartReader(tmp_0, tmp_1);
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.cd_1 = 4;
              continue $sm;
            }

            this.i3n_1 = ensureNotNull(this.f3n_1._v).j3l();
            if (this.i3n_1 == null) {
              this.cd_1 = 4;
              var tmp_2 = this;
              continue $sm;
            } else {
              this.j3n_1 = this.i3n_1;
              this.cd_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.k3n_1 = this.j3n_1;
            this.cd_1 = 3;
            suspendResult = this.h3n_1.vv(this.k3n_1.i3l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.cd_1 = 1;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  multipartBodyFlow$slambda.prototype.m3n = function ($this$flow, completion) {
    var i = new multipartBodyFlow$slambda(this.f3n_1, this.g3n_1, completion);
    i.h3n_1 = $this$flow;
    return i;
  };
  function multipartBodyFlow$slambda_0($multipartReader, $response, resultContinuation) {
    var i = new multipartBodyFlow$slambda($multipartReader, $response, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.l3n($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function multipartBodyFlow$slambda_1($multipartReader, resultContinuation) {
    this.v3n_1 = $multipartReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  multipartBodyFlow$slambda_1.prototype.y3n = function ($this$onCompletion, it, $cont) {
    var tmp = this.z3n($this$onCompletion, it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  multipartBodyFlow$slambda_1.prototype.z2k = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.y3n(tmp, (p2 == null ? true : p2 instanceof Error) ? p2 : THROW_CCE(), $cont);
  };
  multipartBodyFlow$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        if (tmp === 0) {
          this.dd_1 = 1;
          try {
            var tmp0_success = Companion_getInstance_3();
            var tmp0_safe_receiver = this.v3n_1._v;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp0_safe_receiver.v15();
              tmp_0 = Unit_getInstance();
            }
            var tmp1_success = tmp_0;
            _Result___init__impl__xyqfz8(tmp1_success);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp2_failure = Companion_getInstance_3();
              _Result___init__impl__xyqfz8(createFailure($p));
            } else {
              throw $p;
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.fd_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  multipartBodyFlow$slambda_1.prototype.z3n = function ($this$onCompletion, it, completion) {
    var i = new multipartBodyFlow$slambda_1(this.v3n_1, completion);
    i.w3n_1 = $this$onCompletion;
    i.x3n_1 = it;
    return i;
  };
  function multipartBodyFlow$slambda_2($multipartReader, resultContinuation) {
    var i = new multipartBodyFlow$slambda_1($multipartReader, resultContinuation);
    var l = function ($this$onCompletion, it, $cont) {
      return i.y3n($this$onCompletion, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function HttpInfo(startMillis, endMillis, statusCode, headers) {
    Key_getInstance_1();
    this.a3o_1 = startMillis;
    this.b3o_1 = endMillis;
    this.c3o_1 = statusCode;
    this.d3o_1 = headers;
  }
  HttpInfo.prototype.q = function () {
    return Key_getInstance_1();
  };
  function HttpInterceptor() {
  }
  function DefaultHttpInterceptorChain(interceptors, index) {
    this.f3o_1 = interceptors;
    this.g3o_1 = index;
  }
  DefaultHttpInterceptorChain.prototype.h3o = function (request, $cont) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.g3o_1 < this.f3o_1.c();
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
    return this.f3o_1.f(this.g3o_1).e3o(request, new DefaultHttpInterceptorChain(this.f3o_1, this.g3o_1 + 1 | 0), $cont);
  };
  function wrapThrowableIfNeeded($this, throwable) {
    var tmp;
    if (throwable instanceof ApolloException) {
      tmp = throwable;
    } else {
      tmp = new ApolloParseException('Failed to parse GraphQL http network response', throwable);
    }
    return tmp;
  }
  function HttpNetworkTransport$execute$slambda$o$collect$slambda($collector, this$0, $request, $httpResponse, $millisStart, resultContinuation) {
    this.q3o_1 = $collector;
    this.r3o_1 = this$0;
    this.s3o_1 = $request;
    this.t3o_1 = $httpResponse;
    this.u3o_1 = $millisStart;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.w3o = function (value, $cont) {
    var tmp = this.x3o(value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.xd = function (p1, $cont) {
    return this.w3o(p1 instanceof ApolloResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.q3o_1.vv(withHttpInfo(this.v3o_1, this.r3o_1, this.s3o_1.c2c_1, this.t3o_1, this.u3o_1), this);
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
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.x3o = function (value, completion) {
    var i = new HttpNetworkTransport$execute$slambda$o$collect$slambda(this.q3o_1, this.r3o_1, this.s3o_1, this.t3o_1, this.u3o_1, completion);
    i.v3o_1 = value;
    return i;
  };
  function HttpNetworkTransport$execute$slambda$o$collect$slambda_0($collector, this$0, $request, $httpResponse, $millisStart, resultContinuation) {
    var i = new HttpNetworkTransport$execute$slambda$o$collect$slambda($collector, this$0, $request, $httpResponse, $millisStart, resultContinuation);
    var l = function (value, $cont) {
      return i.w3o(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3p_1 = _this__u8e3s4;
    this.h3p_1 = collector;
  }
  $collectCOROUTINE$5.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0 = HttpNetworkTransport$execute$slambda$o$collect$slambda_0(this.h3p_1, this.g3p_1.j3p_1, this.g3p_1.k3p_1, this.g3p_1.l3p_1, this.g3p_1.m3p_1, null);
            suspendResult = this.g3p_1.i3p_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  function _no_name_provided__qut3iv_0($tmp0_map, this$0, $request, $httpResponse, $millisStart) {
    this.i3p_1 = $tmp0_map;
    this.j3p_1 = this$0;
    this.k3p_1 = $request;
    this.l3p_1 = $httpResponse;
    this.m3p_1 = $millisStart;
  }
  _no_name_provided__qut3iv_0.prototype.n3p = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$5(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  _no_name_provided__qut3iv_0.prototype.fv = function (collector, $cont) {
    return this.n3p(collector, $cont);
  };
  function HttpNetworkTransport$multipleResponses$o$collect$slambda($collector, $jsonMerger, $operation, $customScalarAdapters, resultContinuation) {
    this.w3p_1 = $collector;
    this.x3p_1 = $jsonMerger;
    this.y3p_1 = $operation;
    this.z3p_1 = $customScalarAdapters;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.b3q = function (value, $cont) {
    var tmp = this.c3q(value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.xd = function (p1, $cont) {
    return this.b3q((!(p1 == null) ? isInterface(p1, BufferedSource) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0;
            try {
              var merged = this.x3p_1.v3k(this.a3q_1);
              var deferredFragmentIds = this.x3p_1.s3k_1;
              var isLast = !this.x3p_1.t3k_1;
              tmp_0 = parseJsonResponse(this.y3p_1, jsonReader(merged), withDeferredFragmentIds(this.z3p_1, deferredFragmentIds)).d29().u2c(isLast).t1c();
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                throw wrapThrowableIfNeeded(Companion_getInstance_10(), $p);
              } else {
                throw $p;
              }
              tmp_0 = tmp_1;
            }

            suspendResult = this.w3p_1.vv(tmp_0, this);
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
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.c3q = function (value, completion) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda(this.w3p_1, this.x3p_1, this.y3p_1, this.z3p_1, completion);
    i.a3q_1 = value;
    return i;
  };
  function HttpNetworkTransport$multipleResponses$o$collect$slambda_0($collector, $jsonMerger, $operation, $customScalarAdapters, resultContinuation) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda($collector, $jsonMerger, $operation, $customScalarAdapters, resultContinuation);
    var l = function (value, $cont) {
      return i.b3q(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3q_1 = _this__u8e3s4;
    this.m3q_1 = collector;
  }
  $collectCOROUTINE$6.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0 = HttpNetworkTransport$multipleResponses$o$collect$slambda_0(this.m3q_1, this.l3q_1.o3q_1, this.l3q_1.p3q_1, this.l3q_1.q3q_1, null);
            suspendResult = this.l3q_1.n3q_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  function HttpNetworkTransport$multipleResponses$o$collect$slambda_1($jsonMerger, $collector, resultContinuation) {
    this.z3q_1 = $jsonMerger;
    this.a3r_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.w3o = function (value, $cont) {
    var tmp = this.x3o(value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.xd = function (p1, $cont) {
    return this.w3o(p1 instanceof ApolloResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.ld = function () {
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
            if (!this.z3q_1.u3k_1) {
              this.cd_1 = 3;
              suspendResult = this.a3r_1.vv(this.b3r_1, this);
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
            if (false) {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 4;
            continue $sm;
          case 3:
            this.c3r_1 = suspendResult;
            this.cd_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.x3o = function (value, completion) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda_1(this.z3q_1, this.a3r_1, completion);
    i.b3r_1 = value;
    return i;
  };
  function HttpNetworkTransport$multipleResponses$o$collect$slambda_2($jsonMerger, $collector, resultContinuation) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda_1($jsonMerger, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.w3o(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3r_1 = _this__u8e3s4;
    this.m3r_1 = collector;
  }
  $collectCOROUTINE$7.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0 = HttpNetworkTransport$multipleResponses$o$collect$slambda_2(this.l3r_1.o3r_1, this.m3r_1, null);
            suspendResult = this.l3r_1.n3r_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  function singleResponse($this, operation, customScalarAdapters, httpResponse) {
    var tmp;
    try {
      tmp = parseJsonResponse(operation, jsonReader_0(ensureNotNull(httpResponse.x2f())), customScalarAdapters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        throw wrapThrowableIfNeeded(Companion_getInstance_10(), $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var response = tmp;
    return response.d29().u2c(true).t1c();
  }
  function multipleResponses($this, operation, customScalarAdapters, httpResponse) {
    var jsonMerger = new DeferredJsonMerger();
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.flow.filterNot' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map = multipartBodyFlow(httpResponse);
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_1(tmp0_map, jsonMerger, operation, customScalarAdapters);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_filterNot = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$3 = new _no_name_provided__qut3iv_2(tmp1_filterNot, jsonMerger);
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  }
  function withHttpInfo(_this__u8e3s4, $this, requestUuid, httpResponse, millisStart) {
    return _this__u8e3s4.d29().t2c(requestUuid).z2b(new HttpInfo(millisStart, currentTimeMillis(), httpResponse.t2f_1, httpResponse.u2f_1)).t1c();
  }
  function EngineInterceptor($outer) {
    this.p3r_1 = $outer;
  }
  EngineInterceptor.prototype.e3o = function (request, chain, $cont) {
    return this.p3r_1.r3r_1.v3r(request, $cont);
  };
  function Builder_3() {
    this.j3j_1 = null;
    this.k3j_1 = null;
    this.l3j_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.m3j_1 = tmp$ret$0;
    this.n3j_1 = false;
  }
  Builder_3.prototype.i3j = function (serverUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.serverUrl.<anonymous>' call
    this.k3j_1 = serverUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.p3j = function (exposeErrorBody) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.exposeErrorBody.<anonymous>' call
    this.n3j_1 = exposeErrorBody;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.o3j = function (httpEngine) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.httpEngine.<anonymous>' call
    this.l3j_1 = httpEngine;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.q3j = function (interceptors) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.interceptors.<anonymous>' call
    this.m3j_1.y6();
    this.m3j_1.j(interceptors);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.t1c = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.j3j_1 == null ? true : this.k3j_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.network.http.Builder.build.<anonymous>' call
      tmp$ret$0 = "It is an error to set both 'httpRequestComposer' and 'serverUrl'";
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp1_elvis_lhs = this.j3j_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.k3j_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'com.apollographql.apollo3.network.http.Builder.build.<anonymous>' call
        tmp$ret$1 = new DefaultHttpRequestComposer(tmp0_safe_receiver);
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("No HttpRequestComposer found. Use 'httpRequestComposer' or 'serverUrl'");
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var composer = tmp_1;
    var tmp3_elvis_lhs = this.l3j_1;
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      tmp_2 = DefaultHttpEngine_init_$Create$(new Long(0, 0), 1, null);
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    return new HttpNetworkTransport(composer, tmp_2, this.m3j_1, this.n3j_1);
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.w3r_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.vv = function (value, $cont) {
    return this.w3r_1(value, $cont);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.x3r_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.vv = function (value, $cont) {
    return this.x3r_1(value, $cont);
  };
  function HttpNetworkTransport$execute$slambda(this$0, $httpRequest, $request, $customScalarAdapters, resultContinuation) {
    this.g3s_1 = this$0;
    this.h3s_1 = $httpRequest;
    this.i3s_1 = $request;
    this.j3s_1 = $customScalarAdapters;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$execute$slambda.prototype.n3s = function ($this$flow, $cont) {
    var tmp = this.o3s($this$flow, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  HttpNetworkTransport$execute$slambda.prototype.xd = function (p1, $cont) {
    return this.n3s((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$execute$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            this.l3s_1 = currentTimeMillis();
            this.cd_1 = 1;
            suspendResult = (new DefaultHttpInterceptorChain(plus_0(this.g3s_1.s3r_1, this.g3s_1.u3r_1), 0)).h3o(this.h3s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m3s_1 = suspendResult;
            var containsArg = this.m3s_1.t2f_1;
            if (!(200 <= containsArg ? containsArg <= 299 : false)) {
              var tmp_0;
              if (this.g3s_1.t3r_1) {
                tmp_0 = this.m3s_1.x2f();
              } else {
                var tmp0_safe_receiver = this.m3s_1.x2f();
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.v15();
                }
                tmp_0 = null;
              }
              var maybeBody = tmp_0;
              var tmp_1 = 'Http request failed with status code `' + this.m3s_1.t2f_1 + '`';
              throw ApolloHttpException_init_$Create$(this.m3s_1.t2f_1, this.m3s_1.u2f_1, maybeBody, tmp_1, null, 16, null);
            }

            if (get_isMultipart(this.m3s_1)) {
              this.cd_1 = 3;
              var tmp0_map = multipleResponses(this.g3s_1, this.i3s_1.b2c_1, this.j3s_1, this.m3s_1);
              suspendResult = emitAll(this.k3s_1, new _no_name_provided__qut3iv_0(tmp0_map, this.g3s_1, this.i3s_1, this.m3s_1, this.l3s_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cd_1 = 2;
              suspendResult = this.k3s_1.vv(withHttpInfo(singleResponse(this.g3s_1, this.i3s_1.b2c_1, this.j3s_1, this.m3s_1), this.g3s_1, this.i3s_1.c2c_1, this.m3s_1, this.l3s_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 2:
            this.cd_1 = 4;
            continue $sm;
          case 3:
            this.cd_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  HttpNetworkTransport$execute$slambda.prototype.o3s = function ($this$flow, completion) {
    var i = new HttpNetworkTransport$execute$slambda(this.g3s_1, this.h3s_1, this.i3s_1, this.j3s_1, completion);
    i.k3s_1 = $this$flow;
    return i;
  };
  function HttpNetworkTransport$execute$slambda_0(this$0, $httpRequest, $request, $customScalarAdapters, resultContinuation) {
    var i = new HttpNetworkTransport$execute$slambda(this$0, $httpRequest, $request, $customScalarAdapters, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.n3s($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_1($tmp0_map, $jsonMerger, $operation, $customScalarAdapters) {
    this.n3q_1 = $tmp0_map;
    this.o3q_1 = $jsonMerger;
    this.p3q_1 = $operation;
    this.q3q_1 = $customScalarAdapters;
  }
  _no_name_provided__qut3iv_1.prototype.n3p = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$6(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  _no_name_provided__qut3iv_1.prototype.fv = function (collector, $cont) {
    return this.n3p(collector, $cont);
  };
  function _no_name_provided__qut3iv_2($tmp1_filterNot, $jsonMerger) {
    this.n3r_1 = $tmp1_filterNot;
    this.o3r_1 = $jsonMerger;
  }
  _no_name_provided__qut3iv_2.prototype.n3p = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$7(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  _no_name_provided__qut3iv_2.prototype.fv = function (collector, $cont) {
    return this.n3p(collector, $cont);
  };
  function HttpNetworkTransport(httpRequestComposer, engine, interceptors, exposeErrorBody) {
    Companion_getInstance_10();
    this.q3r_1 = httpRequestComposer;
    this.r3r_1 = engine;
    this.s3r_1 = interceptors;
    this.t3r_1 = exposeErrorBody;
    this.u3r_1 = new EngineInterceptor(this);
  }
  HttpNetworkTransport.prototype.l3k = function (request) {
    var customScalarAdapters = ensureNotNull(request.d2c_1.n2d(Key_getInstance()));
    var httpRequest = this.q3r_1.y2e(request);
    return this.p3s(request, httpRequest, customScalarAdapters);
  };
  HttpNetworkTransport.prototype.p3s = function (request, httpRequest, customScalarAdapters) {
    return flow(HttpNetworkTransport$execute$slambda_0(this, httpRequest, request, customScalarAdapters, null));
  };
  HttpNetworkTransport.prototype.nh = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.s3r_1;
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.apollographql.apollo3.network.http.HttpNetworkTransport.dispose.<anonymous>' call
      element.nh();
    }
    this.r3r_1.nh();
  };
  function Factory_init_$Init$(connectionAcknowledgeTimeoutMs, connectionPayload, frameType, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      connectionAcknowledgeTimeoutMs = new Long(10000, 0);
    if (!(($mask0 & 2) === 0)) {
      connectionPayload = SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b_0(null);
    }
    if (!(($mask0 & 4) === 0))
      frameType = WsFrameType_Text_getInstance();
    Factory.call($this, connectionAcknowledgeTimeoutMs, connectionPayload, frameType);
    return $this;
  }
  function Factory_init_$Create$(connectionAcknowledgeTimeoutMs, connectionPayload, frameType, $mask0, $marker) {
    return Factory_init_$Init$(connectionAcknowledgeTimeoutMs, connectionPayload, frameType, $mask0, $marker, Object.create(Factory.prototype));
  }
  function SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.y3s = function ($cont) {
    var tmp = this.z3s($cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.a3t = function ($cont) {
    return this.y3s($cont);
  };
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        if (tmp === 0) {
          this.dd_1 = 1;
          return null;
        } else if (tmp === 1) {
          throw this.fd_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.z3s = function (completion) {
    var i = new SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b(completion);
    return i;
  };
  function SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b_0(resultContinuation) {
    var i = new SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b(resultContinuation);
    var l = function ($cont) {
      return i.y3s($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Factory(connectionAcknowledgeTimeoutMs, connectionPayload, frameType) {
    this.b3t_1 = connectionAcknowledgeTimeoutMs;
    this.c3t_1 = connectionPayload;
    this.d3t_1 = frameType;
  }
  Factory.prototype.jc = function () {
    return 'graphql-ws';
  };
  Factory.prototype.e3t = function (webSocketConnection, listener, scope) {
    var tmp0_connectionPayload = this.c3t_1;
    var tmp1_connectionAcknowledgeTimeoutMs = this.b3t_1;
    var tmp2_frameType = this.d3t_1;
    return new SubscriptionWsProtocol(webSocketConnection, listener, tmp1_connectionAcknowledgeTimeoutMs, tmp0_connectionPayload, tmp2_frameType);
  };
  function SubscriptionWsProtocol$connectionInit$slambda(this$0, resultContinuation) {
    this.n3t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  SubscriptionWsProtocol$connectionInit$slambda.prototype.q11 = function ($this$withTimeout, $cont) {
    var tmp = this.r11($this$withTimeout, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  SubscriptionWsProtocol$connectionInit$slambda.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  SubscriptionWsProtocol$connectionInit$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.n3t_1.r3t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var map = suspendResult;
            var type = map.b2('type');
            if (equals(type, 'connection_ack'))
              return Unit_getInstance();
            else if (equals(type, 'connection_error')) {
              var tmp_0 = 'Connection error:\n' + map;
              throw ApolloNetworkException_init_$Create$(tmp_0, null, 2, null);
            } else {
              println("unknown message while waiting for connection_ack: '" + toString_0(type));
            }

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
  SubscriptionWsProtocol$connectionInit$slambda.prototype.r11 = function ($this$withTimeout, completion) {
    var i = new SubscriptionWsProtocol$connectionInit$slambda(this.n3t_1, completion);
    i.o3t_1 = $this$withTimeout;
    return i;
  };
  function SubscriptionWsProtocol$connectionInit$slambda_0(this$0, resultContinuation) {
    var i = new SubscriptionWsProtocol$connectionInit$slambda(this$0, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.q11($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $connectionInitCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3u_1 = _this__u8e3s4;
  }
  $connectionInitCOROUTINE$8.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.b3u_1 = mutableMapOf([to('type', 'connection_init')]);
            this.cd_1 = 1;
            suspendResult = this.a3u_1.g3u_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c3u_1 = suspendResult;
            if (!(this.c3u_1 == null)) {
              this.b3u_1.v2('payload', this.c3u_1);
            }

            this.a3u_1.i3u(this.b3u_1, this.a3u_1.h3u_1);
            this.cd_1 = 2;
            suspendResult = withTimeout(this.a3u_1.f3u_1, SubscriptionWsProtocol$connectionInit$slambda_0(this.a3u_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  function SubscriptionWsProtocol(webSocketConnection, listener, connectionAcknowledgeTimeoutMs, connectionPayload, frameType) {
    WsProtocol.call(this, webSocketConnection, listener);
    this.f3u_1 = connectionAcknowledgeTimeoutMs;
    this.g3u_1 = connectionPayload;
    this.h3u_1 = frameType;
  }
  SubscriptionWsProtocol.prototype.j3u = function ($cont) {
    var tmp = new $connectionInitCOROUTINE$8(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  SubscriptionWsProtocol.prototype.k3u = function (messageMap) {
    var tmp0_subject = messageMap.b2('type');
    if (equals(tmp0_subject, 'data')) {
      var tmp = messageMap.b2('id');
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      var tmp_1 = messageMap.b2('payload');
      this.q3t_1.o3u(tmp_0, (!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) ? tmp_1 : THROW_CCE());
    } else if (equals(tmp0_subject, 'error')) {
      var id = messageMap.b2('id');
      if (!(id == null) ? typeof id === 'string' : false) {
        var tmp_2 = messageMap.b2('payload');
        this.q3t_1.n3u(id, (tmp_2 == null ? true : isInterface(tmp_2, Map)) ? tmp_2 : THROW_CCE());
      } else {
        var tmp_3 = messageMap.b2('payload');
        this.q3t_1.m3u((tmp_3 == null ? true : isInterface(tmp_3, Map)) ? tmp_3 : THROW_CCE());
      }
    } else if (equals(tmp0_subject, 'complete')) {
      var tmp_4 = messageMap.b2('id');
      this.q3t_1.l3u((!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE());
    } else
    ;
  };
  SubscriptionWsProtocol.prototype.p3u = function (request) {
    this.i3u(mapOf_0([to('type', 'start'), to('id', request.c2c_1.toString()), to('payload', Companion_getInstance_4().w2e(request))]), this.h3u_1);
  };
  SubscriptionWsProtocol.prototype.q3u = function (request) {
    this.i3u(mapOf_0([to('type', 'stop'), to('id', request.c2c_1.toString())]), this.h3u_1);
  };
  function get_CLOSE_NORMAL() {
    return CLOSE_NORMAL;
  }
  var CLOSE_NORMAL;
  function WebSocketNetworkTransport$execute$o$collect$slambda($request, $collector, resultContinuation) {
    this.f3v_1 = $request;
    this.g3v_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.j3v = function (value, $cont) {
    var tmp = this.k3v(value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.xd = function (p1, $cont) {
    return this.j3v((!(p1 == null) ? isInterface(p1, Event) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.ld = function () {
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
            if (this.h3v_1.l3v() === this.f3v_1.c2c_1.toString() ? true : this.h3v_1.l3v() == null) {
              this.cd_1 = 3;
              suspendResult = this.g3v_1.vv(this.h3v_1, this);
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
            if (false) {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 4;
            continue $sm;
          case 3:
            this.i3v_1 = suspendResult;
            this.cd_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.k3v = function (value, completion) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda(this.f3v_1, this.g3v_1, completion);
    i.h3v_1 = value;
    return i;
  };
  function WebSocketNetworkTransport$execute$o$collect$slambda_0($request, $collector, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda($request, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.j3v(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u3v_1 = _this__u8e3s4;
    this.v3v_1 = collector;
  }
  $collectCOROUTINE$10.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0 = WebSocketNetworkTransport$execute$o$collect$slambda_0(this.u3v_1.x3v_1, this.v3v_1, null);
            suspendResult = this.u3v_1.w3v_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  function WebSocketNetworkTransport$execute$o$collect$slambda_1($collector, $request, $deferredJsonMerger, resultContinuation) {
    this.g3w_1 = $collector;
    this.h3w_1 = $request;
    this.i3w_1 = $deferredJsonMerger;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.j3v = function (value, $cont) {
    var tmp = this.k3v(value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.xd = function (p1, $cont) {
    return this.j3v((!(p1 == null) ? isInterface(p1, Event) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp0_subject = this.j3w_1;
            var tmp_0;
            if (tmp0_subject instanceof OperationResponse) {
              var responsePayload = this.j3w_1.p3w_1;
              var requestCustomScalarAdapters = ensureNotNull(this.h3w_1.d2c_1.n2d(Key_getInstance()));
              var tmp_1;
              if (isDeferred(responsePayload)) {
                tmp_1 = to(this.i3w_1.w3k(responsePayload), withDeferredFragmentIds(requestCustomScalarAdapters, this.i3w_1.s3k_1));
              } else {
                tmp_1 = to(responsePayload, requestCustomScalarAdapters);
              }
              var tmp1_container = tmp_1;
              var payload = tmp1_container.t2();
              var customScalarAdapters = tmp1_container.u2();
              var apolloResponse = parseJsonResponse(this.h3w_1.b2c_1, jsonReader(payload), customScalarAdapters).d29().t2c(this.h3w_1.c2c_1).t1c();
              if (!this.i3w_1.t3k_1) {
                this.i3w_1.d1h();
              }
              tmp_0 = apolloResponse;
            } else {
              if (tmp0_subject instanceof OperationError) {
                throw new SubscriptionOperationException(this.h3w_1.b2c_1.n2e(), this.j3w_1.n3w_1);
              } else {
                if (tmp0_subject instanceof NetworkError) {
                  throw new ApolloNetworkException('Network error while executing ' + this.h3w_1.b2c_1.n2e(), this.j3w_1.k3w_1);
                } else {
                  var tmp_2;
                  if (tmp0_subject instanceof OperationComplete) {
                    tmp_2 = true;
                  } else {
                    tmp_2 = tmp0_subject instanceof GeneralError;
                  }
                  if (tmp_2) {
                    var tmp0_error = 'Unexpected event ' + this.j3w_1;
                    throw IllegalStateException_init_$Create$(toString(tmp0_error));
                  } else {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }

            suspendResult = this.g3w_1.vv(tmp_0, this);
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
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.k3v = function (value, completion) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_1(this.g3w_1, this.h3w_1, this.i3w_1, completion);
    i.j3w_1 = value;
    return i;
  };
  function WebSocketNetworkTransport$execute$o$collect$slambda_2($collector, $request, $deferredJsonMerger, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_1($collector, $request, $deferredJsonMerger, resultContinuation);
    var l = function (value, $cont) {
      return i.j3v(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3w_1 = _this__u8e3s4;
    this.z3w_1 = collector;
  }
  $collectCOROUTINE$11.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0 = WebSocketNetworkTransport$execute$o$collect$slambda_2(this.z3w_1, this.y3w_1.b3x_1, this.y3w_1.c3x_1, null);
            suspendResult = this.y3w_1.a3x_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  function WebSocketNetworkTransport$execute$o$collect$slambda_3($deferredJsonMerger, $collector, resultContinuation) {
    this.l3x_1 = $deferredJsonMerger;
    this.m3x_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.w3o = function (value, $cont) {
    var tmp = this.x3o(value, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.xd = function (p1, $cont) {
    return this.w3o(p1 instanceof ApolloResponse ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.ld = function () {
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
            if (!this.l3x_1.u3k_1) {
              this.cd_1 = 3;
              suspendResult = this.m3x_1.vv(this.n3x_1, this);
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
            if (false) {
              this.cd_1 = 1;
              continue $sm;
            }

            this.cd_1 = 4;
            continue $sm;
          case 3:
            this.o3x_1 = suspendResult;
            this.cd_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.x3o = function (value, completion) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_3(this.l3x_1, this.m3x_1, completion);
    i.n3x_1 = value;
    return i;
  };
  function WebSocketNetworkTransport$execute$o$collect$slambda_4($deferredJsonMerger, $collector, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_3($deferredJsonMerger, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.w3o(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x3x_1 = _this__u8e3s4;
    this.y3x_1 = collector;
  }
  $collectCOROUTINE$12.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            var tmp_0 = WebSocketNetworkTransport$execute$o$collect$slambda_4(this.x3x_1.a3y_1, this.y3x_1, null);
            suspendResult = this.x3x_1.z3x_1.fv(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  function supervise($this, scope, $cont) {
    var tmp = new $superviseCOROUTINE$9($this, scope, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function Builder_4() {
    this.r3j_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.s3j_1 = tmp$ret$0;
    this.t3j_1 = null;
    this.u3j_1 = null;
    this.v3j_1 = null;
    this.w3j_1 = null;
  }
  Builder_4.prototype.i3j = function (serverUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.serverUrl.<anonymous>' call
    this.r3j_1 = serverUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.x3j = function (webSocketEngine) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.webSocketEngine.<anonymous>' call
    this.t3j_1 = webSocketEngine;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.y3j = function (idleTimeoutMillis) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.idleTimeoutMillis.<anonymous>' call
    this.u3j_1 = idleTimeoutMillis;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.z3j = function (protocolFactory) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.protocol.<anonymous>' call
    this.v3j_1 = protocolFactory;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.a3k = function (reopenWhen) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.reopenWhen.<anonymous>' call
    this.w3j_1 = reopenWhen;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.t1c = function () {
    var tmp0_elvis_lhs = this.r3j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No serverUrl specified');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp;
    var tmp_1 = this.s3j_1;
    var tmp1_elvis_lhs = this.t3j_1;
    var tmp_2 = tmp1_elvis_lhs == null ? new DefaultWebSocketEngine() : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.u3j_1;
    var tmp_3 = tmp2_elvis_lhs == null ? new Long(60000, 0) : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.v3j_1;
    var tmp_4;
    if (tmp3_elvis_lhs == null) {
      var tmp_5 = new Long(0, 0);
      tmp_4 = Factory_init_$Create$(tmp_5, null, null, 7, null);
    } else {
      tmp_4 = tmp3_elvis_lhs;
    }
    return new WebSocketNetworkTransport(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, this.w3j_1);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.x3y_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.vv = function (value, $cont) {
    return this.x3y_1(value, $cont);
  };
  function supervise$closeProtocol(protocol, connectionJob, idleJob) {
    var tmp0_safe_receiver = protocol._v;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v15();
    }
    protocol._v = null;
    var tmp1_safe_receiver = connectionJob._v;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.qf(null, 1, null);
    }
    connectionJob._v = null;
    var tmp2_safe_receiver = idleJob._v;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.qf(null, 1, null);
    }
    idleJob._v = null;
  }
  function WebSocketNetworkTransport$slambda(this$0, resultContinuation) {
    this.g3z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$slambda.prototype.q11 = function ($this$launch, $cont) {
    var tmp = this.r11($this$launch, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$slambda.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 6;
            var tmp_0 = this;
            tmp_0.i3z_1 = this.g3z_1.v3z_1;
            this.j3z_1 = null;
            this.k3z_1 = null;
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = supervise(this.g3z_1, this.h3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.j3z_1 = Unit_getInstance();
            this.dd_1 = 6;
            this.cd_1 = 3;
            continue $sm;
          case 2:
            this.dd_1 = 6;
            var tmp_2 = this.fd_1;
            if (tmp_2 instanceof Error) {
              var t = this.fd_1;
              this.k3z_1 = t;
              this.cd_1 = 3;
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 3:
            this.dd_1 = 6;
            this.dd_1 = 4;
            var tmp0_safe_receiver = this.i3z_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.v15();
            }

            ;
            this.dd_1 = 6;
            this.cd_1 = 5;
            continue $sm;
          case 4:
            this.dd_1 = 6;
            var tmp_3 = this.fd_1;
            if (tmp_3 instanceof Error) {
              var t_0 = this.fd_1;
              if (this.k3z_1 == null)
                this.k3z_1 = t_0;
              else {
                addSuppressed(this.k3z_1, t_0);
              }
              this.cd_1 = 5;
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 5:
            this.dd_1 = 6;
            if (!(this.k3z_1 == null))
              throw this.k3z_1;
            ensureNotNull(this.j3z_1);
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
  WebSocketNetworkTransport$slambda.prototype.r11 = function ($this$launch, completion) {
    var i = new WebSocketNetworkTransport$slambda(this.g3z_1, completion);
    i.h3z_1 = $this$launch;
    return i;
  };
  function WebSocketNetworkTransport$slambda_0(this$0, resultContinuation) {
    var i = new WebSocketNetworkTransport$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q11($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function WebSocketNetworkTransport$listener$1(this$0) {
    this.y3z_1 = this$0;
  }
  WebSocketNetworkTransport$listener$1.prototype.o3u = function (id, payload) {
    this.y3z_1.r3z_1.vs(new OperationResponse(id, payload));
  };
  WebSocketNetworkTransport$listener$1.prototype.n3u = function (id, payload) {
    this.y3z_1.r3z_1.vs(new OperationError(id, payload));
  };
  WebSocketNetworkTransport$listener$1.prototype.l3u = function (id) {
    this.y3z_1.r3z_1.vs(new OperationComplete(id));
  };
  WebSocketNetworkTransport$listener$1.prototype.m3u = function (payload) {
    this.y3z_1.r3z_1.vs(new GeneralError(payload));
  };
  WebSocketNetworkTransport$listener$1.prototype.z3z = function (cause) {
    this.y3z_1.r3z_1.vs(new NetworkError(cause));
  };
  function WebSocketNetworkTransport$supervise$slambda($protocol, resultContinuation) {
    this.i40_1 = $protocol;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$supervise$slambda.prototype.q11 = function ($this$launch, $cont) {
    var tmp = this.r11($this$launch, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$supervise$slambda.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$supervise$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = ensureNotNull(this.i40_1._v).w3u(this);
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
  WebSocketNetworkTransport$supervise$slambda.prototype.r11 = function ($this$launch, completion) {
    var i = new WebSocketNetworkTransport$supervise$slambda(this.i40_1, completion);
    i.j40_1 = $this$launch;
    return i;
  };
  function WebSocketNetworkTransport$supervise$slambda_0($protocol, resultContinuation) {
    var i = new WebSocketNetworkTransport$supervise$slambda($protocol, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q11($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function WebSocketNetworkTransport$supervise$slambda_1(this$0, $protocol, $connectionJob, $idleJob, resultContinuation) {
    this.s40_1 = this$0;
    this.t40_1 = $protocol;
    this.u40_1 = $connectionJob;
    this.v40_1 = $idleJob;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$supervise$slambda_1.prototype.q11 = function ($this$launch, $cont) {
    var tmp = this.r11($this$launch, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$supervise$slambda_1.prototype.xd = function (p1, $cont) {
    return this.q11((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$supervise$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = delay(this.s40_1.o3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            supervise$closeProtocol(this.t40_1, this.u40_1, this.v40_1);
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
  WebSocketNetworkTransport$supervise$slambda_1.prototype.r11 = function ($this$launch, completion) {
    var i = new WebSocketNetworkTransport$supervise$slambda_1(this.s40_1, this.t40_1, this.u40_1, this.v40_1, completion);
    i.w40_1 = $this$launch;
    return i;
  };
  function WebSocketNetworkTransport$supervise$slambda_2(this$0, $protocol, $connectionJob, $idleJob, resultContinuation) {
    var i = new WebSocketNetworkTransport$supervise$slambda_1(this$0, $protocol, $connectionJob, $idleJob, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q11($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function WebSocketNetworkTransport$execute$slambda(this$0, $request, resultContinuation) {
    this.f41_1 = this$0;
    this.g41_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$slambda.prototype.i41 = function ($this$onSubscription, $cont) {
    var tmp = this.j41($this$onSubscription, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$execute$slambda.prototype.xd = function (p1, $cont) {
    return this.i41((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$slambda.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.f41_1.r3z_1.us(new StartOperation(this.g41_1), this);
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
  WebSocketNetworkTransport$execute$slambda.prototype.j41 = function ($this$onSubscription, completion) {
    var i = new WebSocketNetworkTransport$execute$slambda(this.f41_1, this.g41_1, completion);
    i.h41_1 = $this$onSubscription;
    return i;
  };
  function WebSocketNetworkTransport$execute$slambda_0(this$0, $request, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$slambda(this$0, $request, resultContinuation);
    var l = function ($this$onSubscription, $cont) {
      return i.i41($this$onSubscription, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_3($tmp0_filter, $request) {
    this.w3v_1 = $tmp0_filter;
    this.x3v_1 = $request;
  }
  _no_name_provided__qut3iv_3.prototype.k41 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$10(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  _no_name_provided__qut3iv_3.prototype.fv = function (collector, $cont) {
    return this.k41(collector, $cont);
  };
  function WebSocketNetworkTransport$execute$slambda_1($request, resultContinuation) {
    this.t41_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$slambda_1.prototype.y41 = function ($this$transformWhile, it, $cont) {
    var tmp = this.z41($this$transformWhile, it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$execute$slambda_1.prototype.z2k = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.y41(tmp, (!(p2 == null) ? isInterface(p2, Event) : false) ? p2 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$slambda_1.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.w41_1 = this.v41_1;
            var tmp_0 = this.w41_1;
            if (tmp_0 instanceof OperationComplete) {
              var tmp_1 = this;
              tmp_1.x41_1 = false;
              this.cd_1 = 4;
              continue $sm;
            } else {
              var tmp_2 = this.w41_1;
              if (tmp_2 instanceof NetworkError) {
                this.cd_1 = 2;
                suspendResult = this.u41_1.vv(this.v41_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.w41_1;
                if (tmp_3 instanceof GeneralError) {
                  var tmp_4 = this;
                  println('Received general error while executing operation ' + this.t41_1.b2c_1.n2e() + ': ' + this.v41_1.a42_1);
                  tmp_4.x41_1 = true;
                  this.cd_1 = 4;
                  continue $sm;
                } else {
                  this.cd_1 = 1;
                  suspendResult = this.u41_1.vv(this.v41_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            this.x41_1 = true;
            this.cd_1 = 4;
            continue $sm;
          case 2:
            this.x41_1 = false;
            this.cd_1 = 4;
            continue $sm;
          case 3:
            throw this.fd_1;
          case 4:
            return this.x41_1;
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
  WebSocketNetworkTransport$execute$slambda_1.prototype.z41 = function ($this$transformWhile, it, completion) {
    var i = new WebSocketNetworkTransport$execute$slambda_1(this.t41_1, completion);
    i.u41_1 = $this$transformWhile;
    i.v41_1 = it;
    return i;
  };
  function WebSocketNetworkTransport$execute$slambda_2($request, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$slambda_1($request, resultContinuation);
    var l = function ($this$transformWhile, it, $cont) {
      return i.y41($this$transformWhile, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _no_name_provided__qut3iv_4($tmp1_map, $request, $deferredJsonMerger) {
    this.a3x_1 = $tmp1_map;
    this.b3x_1 = $request;
    this.c3x_1 = $deferredJsonMerger;
  }
  _no_name_provided__qut3iv_4.prototype.n3p = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$11(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  _no_name_provided__qut3iv_4.prototype.fv = function (collector, $cont) {
    return this.n3p(collector, $cont);
  };
  function _no_name_provided__qut3iv_5($tmp2_filterNot, $deferredJsonMerger) {
    this.z3x_1 = $tmp2_filterNot;
    this.a3y_1 = $deferredJsonMerger;
  }
  _no_name_provided__qut3iv_5.prototype.n3p = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$12(this, collector, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  _no_name_provided__qut3iv_5.prototype.fv = function (collector, $cont) {
    return this.n3p(collector, $cont);
  };
  function WebSocketNetworkTransport$execute$slambda_3(this$0, $request, resultContinuation) {
    this.k42_1 = this$0;
    this.l42_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$slambda_3.prototype.o42 = function ($this$onCompletion, it, $cont) {
    var tmp = this.p42($this$onCompletion, it, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WebSocketNetworkTransport$execute$slambda_3.prototype.z2k = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.o42(tmp, (p2 == null ? true : p2 instanceof Error) ? p2 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$slambda_3.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            this.cd_1 = 1;
            suspendResult = this.k42_1.r3z_1.us(new StopOperation(this.l42_1), this);
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
  WebSocketNetworkTransport$execute$slambda_3.prototype.p42 = function ($this$onCompletion, it, completion) {
    var i = new WebSocketNetworkTransport$execute$slambda_3(this.k42_1, this.l42_1, completion);
    i.m42_1 = $this$onCompletion;
    i.n42_1 = it;
    return i;
  };
  function WebSocketNetworkTransport$execute$slambda_4(this$0, $request, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$slambda_3(this$0, $request, resultContinuation);
    var l = function ($this$onCompletion, it, $cont) {
      return i.o42($this$onCompletion, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $superviseCOROUTINE$9(_this__u8e3s4, scope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j3y_1 = _this__u8e3s4;
    this.k3y_1 = scope;
  }
  $superviseCOROUTINE$9.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 18;
            this.l3y_1 = {_v: null};
            this.m3y_1 = {_v: null};
            this.n3y_1 = {_v: null};
            this.o3y_1 = new Long(0, 0);
            var tmp_0 = this;
            tmp_0.p3y_1 = LinkedHashMap_init_$Create$();
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.cd_1 = 19;
              continue $sm;
            }

            this.cd_1 = 2;
            suspendResult = this.j3y_1.r3z_1.hs(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q3y_1 = suspendResult;
            var tmp_1 = this.q3y_1;
            if (isInterface(tmp_1, Event)) {
              var tmp_2 = this.q3y_1;
              if (tmp_2 instanceof NetworkError) {
                supervise$closeProtocol(this.n3y_1, this.m3y_1, this.l3y_1);
                this.r3y_1 = this.j3y_1.q3z_1;
                if (this.r3y_1 == null) {
                  this.s3y_1 = null;
                  this.cd_1 = 14;
                  continue $sm;
                } else {
                  this.cd_1 = 13;
                  suspendResult = this.r3y_1(this.q3y_1.k3w_1, this.o3y_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                this.o3y_1 = new Long(0, 0);
                this.j3y_1.s3z_1.fy(this.q3y_1);
                this.cd_1 = 16;
                continue $sm;
              }
            } else {
              var tmp_3 = this.q3y_1;
              if (isInterface(tmp_3, Command)) {
                var tmp_4 = this.q3y_1;
                if (tmp_4 instanceof Dispose) {
                  supervise$closeProtocol(this.n3y_1, this.m3y_1, this.l3y_1);
                  return Unit_getInstance();
                }
                if (this.n3y_1._v == null) {
                  var tmp_5 = this.q3y_1;
                  if (tmp_5 instanceof StopOperation) {
                    this.p3y_1.a8(this.q3y_1.q42_1.c2c_1);
                    this.cd_1 = 1;
                    continue $sm;
                  } else {
                    this.cd_1 = 3;
                    continue $sm;
                  }
                } else {
                  this.cd_1 = 10;
                  continue $sm;
                }
              } else {
                this.cd_1 = 17;
                continue $sm;
              }
            }

            break;
          case 3:
            this.dd_1 = 5;
            this.cd_1 = 4;
            var tmp_6;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp1_any = this.j3y_1.m3z_1;
              var tmp_7;
              if (isInterface(tmp1_any, Collection)) {
                tmp_7 = tmp1_any.k();
              } else {
                tmp_7 = false;
              }
              if (tmp_7) {
                tmp$ret$0 = false;
                break l$ret$1;
              }
              var tmp0_iterator = tmp1_any.d();
              while (tmp0_iterator.l()) {
                var element = tmp0_iterator.e();
                if (element.m2f_1 === 'Sec-WebSocket-Protocol') {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              tmp_6 = this.j3y_1.m3z_1;
            } else {
              tmp_6 = plus_0(this.j3y_1.m3z_1, new HttpHeader('Sec-WebSocket-Protocol', this.j3y_1.p3z_1.jc()));
            }

            suspendResult = this.j3y_1.n3z_1.r42(this.j3y_1.l3z_1, tmp_6, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.t3y_1 = suspendResult;
            this.dd_1 = 18;
            this.cd_1 = 7;
            continue $sm;
          case 5:
            this.dd_1 = 18;
            var tmp_8 = this.fd_1;
            if (tmp_8 instanceof Exception) {
              this.u3y_1 = this.fd_1;
              this.cd_1 = 6;
              suspendResult = this.j3y_1.r3z_1.us(new NetworkError(this.u3y_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 6:
            this.cd_1 = 1;
            var tmp_9 = this;
            continue $sm;
          case 7:
            this.dd_1 = 18;
            this.v3y_1 = this.t3y_1;
            this.n3y_1._v = this.j3y_1.p3z_1.e3t(this.v3y_1, this.j3y_1.x3z_1, this.k3y_1);
            this.dd_1 = 11;
            this.cd_1 = 8;
            suspendResult = ensureNotNull(this.n3y_1._v).j3u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.dd_1 = 18;
            this.cd_1 = 9;
            continue $sm;
          case 9:
            this.dd_1 = 18;
            var tmp_10 = CoroutineStart_UNDISPATCHED_getInstance();
            this.m3y_1._v = launch$default(this.k3y_1, null, tmp_10, WebSocketNetworkTransport$supervise$slambda_0(this.n3y_1, null), 1, null);
            this.cd_1 = 10;
            continue $sm;
          case 10:
            var tmp2_subject = this.q3y_1;
            if (tmp2_subject instanceof StartOperation) {
              var tmp2_set = this.q3y_1.s42_1.c2c_1;
              var tmp3_set = this.q3y_1;
              this.p3y_1.v2(tmp2_set, tmp3_set);
              ensureNotNull(this.n3y_1._v).p3u(this.q3y_1.s42_1);
            } else {
              if (tmp2_subject instanceof StopOperation) {
                this.p3y_1.a8(this.q3y_1.q42_1.c2c_1);
                ensureNotNull(this.n3y_1._v).q3u(this.q3y_1.q42_1);
              } else {
              }
            }

            if (this.p3y_1.k()) {
              this.l3y_1._v = launch$default(this.k3y_1, null, null, WebSocketNetworkTransport$supervise$slambda_2(this.j3y_1, this.n3y_1, this.m3y_1, this.l3y_1, null), 3, null);
            } else {
              var tmp3_safe_receiver = this.l3y_1._v;
              if (tmp3_safe_receiver == null)
                null;
              else {
                tmp3_safe_receiver.qf(null, 1, null);
              }
              this.l3y_1._v = null;
            }

            this.cd_1 = 17;
            continue $sm;
          case 11:
            this.dd_1 = 18;
            var tmp_11 = this.fd_1;
            if (tmp_11 instanceof Exception) {
              this.w3y_1 = this.fd_1;
              this.n3y_1._v = null;
              this.cd_1 = 12;
              suspendResult = this.j3y_1.r3z_1.us(new NetworkError(this.w3y_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.fd_1;
            }

            break;
          case 12:
            this.cd_1 = 1;
            continue $sm;
          case 13:
            this.s3y_1 = suspendResult;
            this.cd_1 = 14;
            continue $sm;
          case 14:
            var ARGUMENT = this.s3y_1;
            if (ARGUMENT === true) {
              var tmp1 = this.o3y_1;
              this.o3y_1 = tmp1.uc();
              var tmp0_forEach = this.p3y_1.d2();
              var tmp0_iterator_0 = tmp0_forEach.d();
              while (tmp0_iterator_0.l()) {
                var element_0 = tmp0_iterator_0.e();
                this.j3y_1.r3z_1.vs(element_0);
              }
              this.cd_1 = 15;
              continue $sm;
            } else {
              this.o3y_1 = new Long(0, 0);
              this.j3y_1.s3z_1.fy(this.q3y_1);
              this.cd_1 = 15;
              continue $sm;
            }

            ;
            break;
          case 15:
            this.cd_1 = 16;
            continue $sm;
          case 16:
            this.cd_1 = 17;
            continue $sm;
          case 17:
            this.cd_1 = 1;
            continue $sm;
          case 18:
            throw this.fd_1;
          case 19:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.dd_1 === 18) {
          throw $p;
        } else {
          this.cd_1 = this.dd_1;
          this.fd_1 = $p;
        }
      }
     while (true);
  };
  function WebSocketNetworkTransport(serverUrl, headers, webSocketEngine, idleTimeoutMillis, protocolFactory, reopenWhen) {
    this.l3z_1 = serverUrl;
    this.m3z_1 = headers;
    this.n3z_1 = webSocketEngine;
    this.o3z_1 = idleTimeoutMillis;
    this.p3z_1 = protocolFactory;
    this.q3z_1 = reopenWhen;
    var tmp = this;
    Factory_getInstance();
    tmp.r3z_1 = Channel$default(2147483647, null, null, 6, null);
    this.s3z_1 = MutableSharedFlow(0, IntCompanionObject_getInstance().MAX_VALUE, BufferOverflow_SUSPEND_getInstance());
    this.t3z_1 = asSharedFlow(this.s3z_1);
    this.u3z_1 = this.s3z_1.ly();
    this.v3z_1 = new CloseableSingleThreadDispatcher();
    this.w3z_1 = CoroutineScope(this.v3z_1.t42_1);
    launch$default(this.w3z_1, null, null, WebSocketNetworkTransport$slambda_0(this, null), 3, null);
    var tmp_0 = this;
    tmp_0.x3z_1 = new WebSocketNetworkTransport$listener$1(this);
  }
  WebSocketNetworkTransport.prototype.l3k = function (request) {
    var deferredJsonMerger = new DeferredJsonMerger();
    var tmp$ret$8;
    // Inline function 'kotlinx.coroutines.flow.filterNot' call
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.filter' call
    var tmp0_filter = onSubscription(this.t3z_1, WebSocketNetworkTransport$execute$slambda_0(this, request, null));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_3(tmp0_filter, request);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp1_map = transformWhile(tmp, WebSocketNetworkTransport$execute$slambda_2(request, null));
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$3 = new _no_name_provided__qut3iv_4(tmp1_map, request, deferredJsonMerger);
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp2_filterNot = tmp$ret$5;
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$6;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$6 = new _no_name_provided__qut3iv_5(tmp2_filterNot, deferredJsonMerger);
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    var tmp_0 = tmp$ret$8;
    return onCompletion(tmp_0, WebSocketNetworkTransport$execute$slambda_4(this, request, null));
  };
  WebSocketNetworkTransport.prototype.nh = function () {
    this.r3z_1.vs(Dispose_getInstance());
  };
  function $receiveMessageMapCOROUTINE$13(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c43_1 = _this__u8e3s4;
  }
  $receiveMessageMapCOROUTINE$13.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 3;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.cd_1 = 4;
              continue $sm;
            }

            this.cd_1 = 2;
            suspendResult = this.c43_1.p3t_1.d43(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var map = this.c43_1.t3u(ARGUMENT);
            if (!(map == null)) {
              return map;
            }

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
  function $runCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m43_1 = _this__u8e3s4;
  }
  $runCOROUTINE$14.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 5;
            this.dd_1 = 4;
            this.cd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.cd_1 = 3;
              continue $sm;
            }

            this.cd_1 = 2;
            suspendResult = this.m43_1.r3t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.m43_1.k3u(ARGUMENT);
            this.cd_1 = 1;
            continue $sm;
          case 3:
            this.dd_1 = 5;
            this.cd_1 = 6;
            continue $sm;
          case 4:
            this.dd_1 = 5;
            var tmp_0 = this.fd_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.fd_1;
              throw e;
            } else {
              var tmp_1 = this.fd_1;
              if (tmp_1 instanceof Exception) {
                var e_0 = this.fd_1;
                this.m43_1.q3t_1.z3z(e_0);
                this.cd_1 = 6;
                continue $sm;
              } else {
                throw this.fd_1;
              }
            }

            break;
          case 5:
            throw this.fd_1;
          case 6:
            this.dd_1 = 5;
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
  function WsProtocol(webSocketConnection, listener) {
    this.p3t_1 = webSocketConnection;
    this.q3t_1 = listener;
  }
  WsProtocol.prototype.r3u = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonByteString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.network.ws.WsProtocol.toByteString.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    writeAny(tmp0__anonymous__q1qw7t, _this__u8e3s4);
    tmp$ret$0 = buffer.a27();
    return tmp$ret$0;
  };
  WsProtocol.prototype.s3u = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.network.ws.WsProtocol.toUtf8.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    writeAny(tmp0__anonymous__q1qw7t, _this__u8e3s4);
    tmp$ret$0 = buffer.e27();
    return tmp$ret$0;
  };
  WsProtocol.prototype.t3u = function (_this__u8e3s4) {
    var tmp;
    try {
      var tmp_0 = get_AnyAdapter().p29(new BufferedSourceJsonReader((new Buffer()).p27(_this__u8e3s4)), Key_getInstance().j2d_1);
      tmp = isInterface(tmp_0, Map) ? tmp_0 : null;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  WsProtocol.prototype.u3u = function (messageMap) {
    this.p3t_1.n43(this.r3u(messageMap));
  };
  WsProtocol.prototype.v3u = function (messageMap) {
    this.p3t_1.o43(this.s3u(messageMap));
  };
  WsProtocol.prototype.i3u = function (messageMap, frameType) {
    var tmp0_subject = frameType;
    var tmp0 = tmp0_subject.w3_1;
    if (tmp0 === 0) {
      this.v3u(messageMap);
    } else if (tmp0 === 1) {
      this.u3u(messageMap);
    }
  };
  WsProtocol.prototype.r3t = function ($cont) {
    var tmp = new $receiveMessageMapCOROUTINE$13(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WsProtocol.prototype.w3u = function ($cont) {
    var tmp = new $runCOROUTINE$14(this, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  WsProtocol.prototype.v15 = function () {
    this.p3t_1.v15();
  };
  var WsFrameType_Text_instance;
  var WsFrameType_Binary_instance;
  var WsFrameType_entriesInitialized;
  function WsFrameType_initEntries() {
    if (WsFrameType_entriesInitialized)
      return Unit_getInstance();
    WsFrameType_entriesInitialized = true;
    WsFrameType_Text_instance = new WsFrameType('Text', 0);
    WsFrameType_Binary_instance = new WsFrameType('Binary', 1);
  }
  function WsFrameType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WsFrameType_Text_getInstance() {
    WsFrameType_initEntries();
    return WsFrameType_Text_instance;
  }
  function Event() {
  }
  function OperationResponse(id, payload) {
    this.o3w_1 = id;
    this.p3w_1 = payload;
  }
  OperationResponse.prototype.l3v = function () {
    return this.o3w_1;
  };
  function OperationError(id, payload) {
    this.m3w_1 = id;
    this.n3w_1 = payload;
  }
  OperationError.prototype.l3v = function () {
    return this.m3w_1;
  };
  function OperationComplete(id) {
    this.p43_1 = id;
  }
  OperationComplete.prototype.l3v = function () {
    return this.p43_1;
  };
  function GeneralError(payload) {
    this.a42_1 = payload;
    this.b42_1 = null;
  }
  GeneralError.prototype.l3v = function () {
    return this.b42_1;
  };
  function NetworkError(cause) {
    this.k3w_1 = cause;
    this.l3w_1 = null;
  }
  NetworkError.prototype.l3v = function () {
    return this.l3w_1;
  };
  function StartOperation(request) {
    this.s42_1 = request;
  }
  function Command() {
  }
  function Dispose() {
    Dispose_instance = this;
  }
  var Dispose_instance;
  function Dispose_getInstance() {
    if (Dispose_instance == null)
      new Dispose();
    return Dispose_instance;
  }
  function StopOperation(request) {
    this.q42_1 = request;
  }
  function get_defaultDispatcher() {
    init_properties_dispatchers_kt_bj4odk();
    return defaultDispatcher;
  }
  var defaultDispatcher;
  function failOnNativeIfLegacyMemoryManager() {
    init_properties_dispatchers_kt_bj4odk();
  }
  function CloseableSingleThreadDispatcher() {
    this.t42_1 = get_defaultDispatcher();
  }
  CloseableSingleThreadDispatcher.prototype.v15 = function () {
  };
  var properties_initialized_dispatchers_kt_v9bzng;
  function init_properties_dispatchers_kt_bj4odk() {
    if (properties_initialized_dispatchers_kt_v9bzng) {
    } else {
      properties_initialized_dispatchers_kt_v9bzng = true;
      defaultDispatcher = Dispatchers_getInstance().ok_1;
    }
  }
  function DefaultHttpEngine_init_$Init$(timeoutMillis, $this) {
    DefaultHttpEngine.call($this, timeoutMillis, timeoutMillis);
    return $this;
  }
  function DefaultHttpEngine_init_$Init$_0(timeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      timeoutMillis = new Long(60000, 0);
    DefaultHttpEngine_init_$Init$(timeoutMillis, $this);
    return $this;
  }
  function DefaultHttpEngine_init_$Create$(timeoutMillis, $mask0, $marker) {
    return DefaultHttpEngine_init_$Init$_0(timeoutMillis, $mask0, $marker, Object.create(DefaultHttpEngine.prototype));
  }
  function DefaultHttpEngine$client$lambda$lambda(this$0) {
    return function ($this$install) {
      $this$install.c36(this$0.q43_1);
      $this$install.d36(this$0.r43_1);
      return Unit_getInstance();
    };
  }
  function DefaultHttpEngine$client$lambda(this$0) {
    return function ($this$HttpClient) {
      $this$HttpClient.q2m_1 = false;
      var tmp = Plugin_getInstance();
      $this$HttpClient.l2n(tmp, DefaultHttpEngine$client$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$15(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c44_1 = _this__u8e3s4;
    this.d44_1 = request;
  }
  $executeCOROUTINE$15.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 4;
            this.dd_1 = 3;
            var tmp_0 = this;
            tmp_0.e44_1 = this.c44_1.t43_1;
            var tmp_1 = this;
            tmp_1.f44_1 = this.d44_1.z2f_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.f44_1);
            var tmp_3 = tmp0_apply;
            var tmp0_subject = this.d44_1.y2f_1;
            var tmp0 = tmp0_subject.w3_1;
            var tmp_4;
            switch (tmp0) {
              case 0:
                tmp_4 = Companion_getInstance_5().q1y_1;
                break;
              case 1:
                tmp_4 = Companion_getInstance_5().r1y_1;
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            tmp_3.f2m_1 = tmp_4;
            var tmp0_forEach = this.d44_1.a2g_1;
            var tmp0_iterator = tmp0_forEach.d();
            while (tmp0_iterator.l()) {
              var element = tmp0_iterator.e();
              header(tmp0_apply, element.m2f_1, element.n2f_1);
            }

            var tmp1_safe_receiver = this.d44_1.b2g_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              header(tmp0_apply, HttpHeaders_getInstance().f1v_1, tmp1_safe_receiver.o23());
              var buffer = new Buffer();
              tmp1_safe_receiver.g2e(buffer);
              var tmp0_setBody = buffer.e27();
              var tmp0_subject_0 = tmp0_setBody;
              if (tmp0_subject_0 == null) {
                tmp0_apply.h2m_1 = NullBody_getInstance();
                var tmp_5 = JsType_getInstance();
                var tmp_6 = PrimitiveClasses_getInstance().cb();
                var tmp_7;
                try {
                  tmp_7 = createKType(PrimitiveClasses_getInstance().cb(), arrayOf([]), false);
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
              } else {
                if (tmp0_subject_0 instanceof OutgoingContent) {
                  tmp0_apply.h2m_1 = tmp0_setBody;
                  tmp0_apply.e2s(null);
                } else {
                  tmp0_apply.h2m_1 = tmp0_setBody;
                  var tmp_9 = JsType_getInstance();
                  var tmp_10 = PrimitiveClasses_getInstance().cb();
                  var tmp_11;
                  try {
                    tmp_11 = createKType(PrimitiveClasses_getInstance().cb(), arrayOf([]), false);
                  } catch ($p) {
                    var tmp_12;
                    if ($p instanceof Error) {
                      tmp_12 = null;
                    } else {
                      throw $p;
                    }
                    tmp_11 = tmp_12;
                  }
                  tmp0_apply.e2s(typeInfoImpl(tmp_9, tmp_10, tmp_11));
                }
              }
            }

            ;
            tmp_2.g44_1 = tmp0_apply;
            this.cd_1 = 1;
            suspendResult = (new HttpStatement(this.g44_1, this.e44_1)).e3c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h44_1 = suspendResult;
            this.cd_1 = 2;
            var tmp_13 = this.h44_1.n2p();
            var tmp_14 = JsType_getInstance();
            var tmp_15 = PrimitiveClasses_getInstance().gb();
            var tmp_16;
            try {
              tmp_16 = createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false);
            } catch ($p) {
              var tmp_17;
              if ($p instanceof Error) {
                tmp_17 = null;
              } else {
                throw $p;
              }
              tmp_16 = tmp_17;
            }

            suspendResult = tmp_13.q2o(typeInfoImpl(tmp_14, tmp_15, tmp_16), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseByteArray = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            var responseBufferedSource = (new Buffer()).s27(responseByteArray);
            var tmp_18 = (new Builder_1(this.h44_1.s2o().j21_1)).s2f(responseBufferedSource);
            var tmp2_map = flattenEntries(this.h44_1.p1y());
            var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
            var tmp0_iterator_0 = tmp2_map.d();
            while (tmp0_iterator_0.l()) {
              var item = tmp0_iterator_0.e();
              tmp0_mapTo.a(new HttpHeader(item.r2_1, item.s2_1));
            }

            return tmp_18.d2f(tmp0_mapTo).t1c();
          case 3:
            this.dd_1 = 4;
            var tmp_19 = this.fd_1;
            if (tmp_19 instanceof CancellationException) {
              var e = this.fd_1;
              throw e;
            } else {
              var tmp_20 = this.fd_1;
              if (tmp_20 instanceof Error) {
                var t = this.fd_1;
                throw new ApolloNetworkException(t.message, t);
              } else {
                throw this.fd_1;
              }
            }

            break;
          case 4:
            throw this.fd_1;
          case 5:
            this.dd_1 = 4;
            return Unit_getInstance();
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
  function DefaultHttpEngine(connectTimeoutMillis, readTimeoutMillis) {
    this.q43_1 = connectTimeoutMillis;
    this.r43_1 = readTimeoutMillis;
    this.s43_1 = false;
    var tmp = this;
    var tmp_0 = Js_getInstance();
    tmp.t43_1 = HttpClient(tmp_0, DefaultHttpEngine$client$lambda(this));
  }
  DefaultHttpEngine.prototype.v3r = function (request, $cont) {
    var tmp = new $executeCOROUTINE$15(this, request, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  };
  DefaultHttpEngine.prototype.nh = function () {
    if (!this.s43_1) {
      this.t43_1.v15();
      this.s43_1 = true;
    }
  };
  function open($this, url, headers, $cont) {
    var tmp = new $openCOROUTINE$16($this, url, headers, $cont);
    tmp.ed_1 = Unit_getInstance();
    tmp.fd_1 = null;
    return tmp.ld();
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = headers.s1o();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.createWebSocket.<anonymous>' call
      tmp$ret$0 = equals_0(element, 'sec-websocket-protocol', true);
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var protocolHeaderNames = tmp$ret$2;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = protocolHeaderNames.d();
    while (tmp0_iterator_0.l()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.createWebSocket.<anonymous>' call
      tmp$ret$3 = headers.r1o(element_0);
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.a(tmp0_safe_receiver);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    tmp$ret$5 = tmp0_mapNotNullTo;
    tmp$ret$6 = tmp$ret$5;
    var tmp1_toTypedArray = flatten(tmp$ret$6);
    tmp$ret$7 = copyToArray(tmp1_toTypedArray);
    var protocols = tmp$ret$7;
    var tmp;
    if (PlatformUtils_getInstance().j1s_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new DefaultWebSocketEngine$createWebSocket$headers_capturingHack$1();
      headers.u1o(DefaultWebSocketEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, protocols, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack, protocols);
    }
    return tmp;
  }
  function awaitConnection(_this__u8e3s4, $this, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.yi();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.awaitConnection.<anonymous>' call
      if (cancellable.ch()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = DefaultWebSocketEngine$awaitConnection$lambda(cancellable, _this__u8e3s4, $this);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.ih(DefaultWebSocketEngine$awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.hj();
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4, $this) {
    var tmp$ret$4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.asString.<anonymous>' call
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
  function DefaultWebSocketEngine$open$lambda($messageChannel) {
    return function (messageEvent) {
      var data = messageEvent.data;
      var tmp;
      if (!(data == null)) {
        var tmp0_subject = data;
        var tmp_0;
        if (typeof tmp0_subject === 'string') {
          $messageChannel.vs(data);
          tmp_0 = Unit_getInstance();
        } else {
          throw UnsupportedOperationException_init_$Create$('' + getKClassFromExpression(data).ea() + ' is currently unsupported');
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function DefaultWebSocketEngine$open$lambda_0($messageChannel) {
    return function (it) {
      return $messageChannel.xs(null, 1, null);
    };
  }
  function DefaultWebSocketEngine$open$5($messageChannel, $socket) {
    this.u44_1 = $messageChannel;
    this.v44_1 = $socket;
  }
  DefaultWebSocketEngine$open$5.prototype.d43 = function ($cont) {
    return this.u44_1.hs($cont);
  };
  DefaultWebSocketEngine$open$5.prototype.n43 = function (data) {
    this.v44_1.send(new Uint8Array(toTypedArray(data.j28())));
  };
  DefaultWebSocketEngine$open$5.prototype.o43 = function (string) {
    this.v44_1.send(string);
  };
  DefaultWebSocketEngine$open$5.prototype.v15 = function () {
    this.v44_1.close(toShort(get_CLOSE_NORMAL()));
    this.u44_1.xs(null, 1, null);
  };
  function DefaultWebSocketEngine$createWebSocket$headers_capturingHack$1() {
  }
  function DefaultWebSocketEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function DefaultWebSocketEngine$awaitConnection$lambda($cancellable, $this_awaitConnection, this$0) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_3();
        tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
        $cancellable.g3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = IllegalStateException_init_$Create$(asString(event, this$0));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_3();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
        $cancellable.g3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function DefaultWebSocketEngine$awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
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
  function $openCOROUTINE$16(_this__u8e3s4, url, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q44_1 = _this__u8e3s4;
    this.r44_1 = url;
    this.s44_1 = headers;
  }
  $openCOROUTINE$16.prototype.ld = function () {
    var suspendResult = this.ed_1;
    $sm: do
      try {
        var tmp = this.cd_1;
        switch (tmp) {
          case 0:
            this.dd_1 = 2;
            var tmp_0 = this;
            var tmp0_apply = URLBuilder(this.r44_1);
            var tmp_1 = tmp0_apply;
            var tmp0_subject = this.r44_1.g22_1;
            var tmp_2;
            if (tmp0_subject.equals(Companion_getInstance_6().p21_1)) {
              tmp_2 = Companion_getInstance_6().r21_1;
            } else if (tmp0_subject.equals(Companion_getInstance_6().o21_1)) {
              tmp_2 = Companion_getInstance_6().q21_1;
            } else if (tmp0_subject.equals(Companion_getInstance_6().q21_1) ? true : tmp0_subject.equals(Companion_getInstance_6().r21_1)) {
              tmp_2 = this.r44_1.g22_1;
            } else {
              throw UnsupportedOperationException_init_$Create$('SOCKS is not a supported protocol');
            }

            tmp_1.u21_1 = tmp_2;
            tmp_0.t44_1 = tmp0_apply.t1c();
            this.cd_1 = 1;
            var tmp_3 = this.t44_1.toString();
            var tmp1_build = Companion_getInstance_7();
            var tmp0_apply_0 = HeadersBuilder_init_$Create$(0, 1, null);
            var tmp0_iterator = this.s44_1.d();
            while (tmp0_iterator.l()) {
              var element = tmp0_iterator.e();
              tmp0_apply_0.b1p(element.m2f_1, element.n2f_1);
            }

            suspendResult = awaitConnection(createWebSocket(this.q44_1, tmp_3, tmp0_apply_0.t1c()), this.q44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var socket = suspendResult;
            Factory_getInstance();
            var messageChannel = new ChannelWrapper(Channel$default(2147483647, null, null, 6, null));
            socket.onmessage = DefaultWebSocketEngine$open$lambda(messageChannel);
            socket.onclose = DefaultWebSocketEngine$open$lambda_0(messageChannel);
            return new DefaultWebSocketEngine$open$5(messageChannel, socket);
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
  function DefaultWebSocketEngine() {
  }
  DefaultWebSocketEngine.prototype.r42 = function (url, headers, $cont) {
    return open(this, Url(url), headers, $cont);
  };
  //region block: post-declaration
  ConcurrencyInfo.prototype.n2d = get;
  ConcurrencyInfo.prototype.o2d = fold;
  ConcurrencyInfo.prototype.p2d = minusKey;
  ConcurrencyInfo.prototype.a2c = plus_1;
  ChannelWrapper.prototype.qf = cancel$default_0;
  ChannelWrapper.prototype.xs = close$default;
  HttpInfo.prototype.n2d = get;
  HttpInfo.prototype.o2d = fold;
  HttpInfo.prototype.p2d = minusKey;
  HttpInfo.prototype.a2c = plus_1;
  EngineInterceptor.prototype.nh = dispose;
  //endregion
  //region block: init
  CLOSE_NORMAL = 1000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Builder_2;
  //endregion
  return _;
}));

//# sourceMappingURL=apollo-kotlin-apollo-runtime.js.map
