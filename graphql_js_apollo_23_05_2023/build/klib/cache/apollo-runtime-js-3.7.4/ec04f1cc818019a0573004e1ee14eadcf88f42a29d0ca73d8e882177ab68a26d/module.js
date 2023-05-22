(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './apollo-kotlin-apollo-api.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './okio-parent-okio-js-ir.js', './apollo-kotlin-apollo-mpp-utils.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./apollo-kotlin-apollo-api.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./okio-parent-okio-js-ir.js'), require('./apollo-kotlin-apollo-mpp-utils.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['apollo-kotlin-apollo-api'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'apollo-kotlin-apollo-api' was not found. Please, check whether 'apollo-kotlin-apollo-api' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'apollo-kotlin-apollo-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'apollo-kotlin-apollo-runtime'.");
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
    root['apollo-kotlin-apollo-runtime'] = factory(typeof this['apollo-kotlin-apollo-runtime'] === 'undefined' ? {} : this['apollo-kotlin-apollo-runtime'], this['apollo-kotlin-apollo-api'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['okio-parent-okio-js-ir'], this['apollo-kotlin-apollo-mpp-utils'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_com_apollographql_apollo3_apollo_api, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_squareup_okio_okio, kotlin_com_apollographql_apollo3_apollo_mpp_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_com_apollographql_apollo3_apollo_api.$_$.p2;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var emptyList = kotlin_kotlin.$_$.q7;
  var HttpHeader = kotlin_com_apollographql_apollo3_apollo_api.$_$.c;
  var plus = kotlin_kotlin.$_$.w8;
  var Builder = kotlin_com_apollographql_apollo3_apollo_api.$_$.p;
  var single = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var MutableExecutionOptions = kotlin_com_apollographql_apollo3_apollo_api.$_$.h1;
  var classMeta = kotlin_kotlin.$_$.ya;
  var setMetadataFor = kotlin_kotlin.$_$.dc;
  var CoroutineImpl = kotlin_kotlin.$_$.la;
  var THROW_CCE = kotlin_kotlin.$_$.kf;
  var Long = kotlin_kotlin.$_$.df;
  var Builder_0 = kotlin_com_apollographql_apollo3_apollo_api.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Version2CustomTypeAdapterToAdapter = kotlin_com_apollographql_apollo3_apollo_api.$_$.g;
  var addAll = kotlin_kotlin.$_$.o6;
  var HttpMethod_Get_getInstance = kotlin_com_apollographql_apollo3_apollo_api.$_$.g2;
  var HttpMethod_Post_getInstance = kotlin_com_apollographql_apollo3_apollo_api.$_$.h2;
  var NotImplementedError = kotlin_kotlin.$_$.ff;
  var toString = kotlin_kotlin.$_$.hc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var ensureNotNull = kotlin_kotlin.$_$.bg;
  var listOfNotNull = kotlin_kotlin.$_$.k8;
  var plus_0 = kotlin_kotlin.$_$.v8;
  var objectMeta = kotlin_kotlin.$_$.cc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$_$.a1;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Companion_getInstance_0 = kotlin_com_apollographql_apollo3_apollo_api.$_$.q2;
  var toString_0 = kotlin_kotlin.$_$.qg;
  var ExecutionOptions = kotlin_com_apollographql_apollo3_apollo_api.$_$.e1;
  var Closeable = kotlin_com_squareup_okio_okio.$_$.f;
  var Key = kotlin_com_apollographql_apollo3_apollo_api.$_$.c1;
  var get = kotlin_com_apollographql_apollo3_apollo_api.$_$.z;
  var fold = kotlin_com_apollographql_apollo3_apollo_api.$_$.y;
  var minusKey = kotlin_com_apollographql_apollo3_apollo_api.$_$.a1;
  var plus_1 = kotlin_com_apollographql_apollo3_apollo_api.$_$.d1;
  var Element = kotlin_com_apollographql_apollo3_apollo_api.$_$.b1;
  var interfaceMeta = kotlin_kotlin.$_$.hb;
  var Collection = kotlin_kotlin.$_$.v5;
  var isInterface = kotlin_kotlin.$_$.qb;
  var equals = kotlin_kotlin.$_$.id;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var AutoPersistedQueriesNotSupported = kotlin_com_apollographql_apollo3_apollo_api.$_$.e2;
  var Mutation = kotlin_com_apollographql_apollo3_apollo_api.$_$.i1;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Subscription = kotlin_com_apollographql_apollo3_apollo_api.$_$.q1;
  var Query = kotlin_com_apollographql_apollo3_apollo_api.$_$.o1;
  var flowOn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var cancel$default_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel$default_1 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Map = kotlin_kotlin.$_$.f6;
  var List = kotlin_kotlin.$_$.d6;
  var MutableMap = kotlin_kotlin.$_$.k6;
  var DeferredFragmentIdentifier = kotlin_com_apollographql_apollo3_apollo_api.$_$.x;
  var BufferedSourceJsonReader = kotlin_com_apollographql_apollo3_apollo_api.$_$.i;
  var readAny = kotlin_com_apollographql_apollo3_apollo_api.$_$.l;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n1;
  var to = kotlin_kotlin.$_$.rg;
  var mapOf = kotlin_kotlin.$_$.o8;
  var charSequenceLength = kotlin_kotlin.$_$.wa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var indexOf$default = kotlin_kotlin.$_$.r;
  var isCharSequence = kotlin_kotlin.$_$.mb;
  var trim = kotlin_kotlin.$_$.oe;
  var equals_0 = kotlin_kotlin.$_$.ab;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var Source = kotlin_com_squareup_okio_okio.$_$.i;
  var toLong = kotlin_kotlin.$_$.fc;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var Companion_getInstance_1 = kotlin_com_squareup_okio_okio.$_$.c;
  var Companion_getInstance_2 = kotlin_com_squareup_okio_okio.$_$.b;
  var ApolloException_init_$Create$ = kotlin_com_apollographql_apollo3_apollo_api.$_$.k2;
  var buffer = kotlin_com_squareup_okio_okio.$_$.k;
  var CancellationException = kotlin_kotlin.$_$.u9;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.sa;
  var isObject = kotlin_kotlin.$_$.tb;
  var valueOf = kotlin_com_apollographql_apollo3_apollo_api.$_$.f;
  var startsWith = kotlin_kotlin.$_$.vd;
  var onCompletion = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var charArrayOf = kotlin_kotlin.$_$.ta;
  var split$default = kotlin_kotlin.$_$.v;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var startsWith$default = kotlin_kotlin.$_$.x;
  var getOrNull = kotlin_kotlin.$_$.z7;
  var trim_0 = kotlin_kotlin.$_$.ne;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.n5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k3;
  var createFailure = kotlin_kotlin.$_$.ag;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var currentTimeMillis = kotlin_com_apollographql_apollo3_apollo_mpp_utils.$_$.a;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var BufferedSinkJsonWriter_init_$Create$ = kotlin_com_apollographql_apollo3_apollo_api.$_$.j2;
  var BufferedSinkJsonWriter = kotlin_com_apollographql_apollo3_apollo_api.$_$.h;
  var HttpBody = kotlin_com_apollographql_apollo3_apollo_api.$_$.b;
  var toBoolean = kotlin_kotlin.$_$.zd;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var toList = kotlin_kotlin.$_$.i9;
  var first = kotlin_kotlin.$_$.x7;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.a3;
  var toSet = kotlin_kotlin.$_$.o9;
  var intersect = kotlin_kotlin.$_$.e8;
  var Builder_1 = kotlin_com_apollographql_apollo3_apollo_api.$_$.d;
  var ApolloHttpException_init_$Create$ = kotlin_com_apollographql_apollo3_apollo_api.$_$.l2;
  var get_AnyAdapter = kotlin_com_apollographql_apollo3_apollo_api.$_$.o;
  var Key_getInstance = kotlin_com_apollographql_apollo3_apollo_api.$_$.o2;
  var ApolloException = kotlin_com_apollographql_apollo3_apollo_api.$_$.b2;
  var Exception = kotlin_kotlin.$_$.ze;
  var checkIndexOverflow = kotlin_kotlin.$_$.s6;
  var Builder_2 = kotlin_com_apollographql_apollo3_apollo_api.$_$.e;
  var Mutex$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var ApolloParseException = kotlin_com_apollographql_apollo3_apollo_api.$_$.d2;
  var ApolloResponse = kotlin_com_apollographql_apollo3_apollo_api.$_$.q;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var BufferedSource = kotlin_com_squareup_okio_okio.$_$.d;
  var jsonReader = kotlin_com_apollographql_apollo3_apollo_api.$_$.k;
  var withDeferredFragmentIds = kotlin_com_apollographql_apollo3_apollo_api.$_$.a2;
  var parseJsonResponse = kotlin_com_apollographql_apollo3_apollo_api.$_$.x1;
  var jsonReader_0 = kotlin_com_apollographql_apollo3_apollo_api.$_$.j;
  var DefaultHttpRequestComposer = kotlin_com_apollographql_apollo3_apollo_api.$_$.a;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var println = kotlin_kotlin.$_$.oa;
  var ApolloNetworkException_init_$Create$ = kotlin_com_apollographql_apollo3_apollo_api.$_$.m2;
  var mutableMapOf = kotlin_kotlin.$_$.s8;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Companion_getInstance_4 = kotlin_com_apollographql_apollo3_apollo_api.$_$.n2;
  var mapOf_0 = kotlin_kotlin.$_$.p8;
  var emptyMap = kotlin_kotlin.$_$.r7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jg;
  var ApolloNetworkException = kotlin_com_apollographql_apollo3_apollo_api.$_$.c2;
  var SubscriptionOperationException = kotlin_com_apollographql_apollo3_apollo_api.$_$.f2;
  var addSuppressed = kotlin_kotlin.$_$.xf;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.e5;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var onSubscription = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var writeAny = kotlin_com_apollographql_apollo3_apollo_api.$_$.m;
  var THROW_ISE = kotlin_kotlin.$_$.lf;
  var Enum = kotlin_kotlin.$_$.xe;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var url = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.i;
  var header = kotlin_io_ktor_ktor_client_core.$_$.d;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var arrayOf = kotlin_kotlin.$_$.yf;
  var createKType = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.m;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.f;
  var isByteArray = kotlin_kotlin.$_$.kb;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.z;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.g;
  var flatten = kotlin_kotlin.$_$.y7;
  var copyToArray = kotlin_kotlin.$_$.k7;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.f;
  var intercepted = kotlin_kotlin.$_$.y9;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v1;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var toTypedArray = kotlin_kotlin.$_$.q9;
  var toShort = kotlin_kotlin.$_$.gc;
  var joinToString$default = kotlin_kotlin.$_$.l;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.l;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_http.$_$.g;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var Url = kotlin_io_ktor_ktor_http.$_$.x;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApolloCall, 'ApolloCall', classMeta, undefined, [MutableExecutionOptions], undefined, undefined, [0]);
  setMetadataFor(ApolloClient$Builder$webSocketReconnectWhen$slambda, 'ApolloClient$Builder$webSocketReconnectWhen$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(Builder_3, 'Builder', classMeta, undefined, [MutableExecutionOptions], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloClient, 'ApolloClient', classMeta, undefined, [ExecutionOptions, Closeable], undefined, undefined, []);
  setMetadataFor(Key_0, 'Key', objectMeta, undefined, [Key], undefined, undefined, []);
  setMetadataFor(AutoPersistedQueryInfo, 'AutoPersistedQueryInfo', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(Key_1, 'Key', objectMeta, undefined, [Key], undefined, undefined, []);
  setMetadataFor(ConcurrencyInfo, 'ConcurrencyInfo', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(ApolloInterceptor, 'ApolloInterceptor', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApolloInterceptorChain, 'ApolloInterceptorChain', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultInterceptorChain, 'DefaultInterceptorChain', classMeta, undefined, [ApolloInterceptorChain], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AutoPersistedQueryInterceptor$intercept$slambda, 'AutoPersistedQueryInterceptor$intercept$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(AutoPersistedQueryInterceptor, 'AutoPersistedQueryInterceptor', classMeta, undefined, [ApolloInterceptor], undefined, undefined, []);
  setMetadataFor(NetworkInterceptor, 'NetworkInterceptor', classMeta, undefined, [ApolloInterceptor], undefined, undefined, []);
  setMetadataFor(ChannelWrapper, 'ChannelWrapper', classMeta, undefined, [Channel], undefined, undefined, [0, 1]);
  setMetadataFor(DeferredJsonMerger, 'DeferredJsonMerger', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PartSource, 'PartSource', classMeta, undefined, [Source], undefined, undefined, []);
  setMetadataFor(Part, 'Part', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MultipartReader, 'MultipartReader', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor($emitCOROUTINE$1, '$emitCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(transformWhile$slambda$slambda, 'transformWhile$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(transformWhile$slambda, 'transformWhile$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($emitCOROUTINE$2, '$emitCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_0, undefined, classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(collectWhile$slambda, 'collectWhile$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($collectWhileCOROUTINE$0, '$collectWhileCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(multipartBodyFlow$slambda, 'multipartBodyFlow$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(multipartBodyFlow$slambda_1, 'multipartBodyFlow$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(NetworkTransport, 'NetworkTransport', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PendingRequest, 'PendingRequest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BatchingHttpInterceptor$intercept$slambda, 'BatchingHttpInterceptor$intercept$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(BatchingHttpInterceptor$executePendingRequests$body$1, undefined, classMeta, undefined, [HttpBody], undefined, undefined, []);
  setMetadataFor($interceptCOROUTINE$3, '$interceptCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executePendingRequestsCOROUTINE$4, '$executePendingRequestsCOROUTINE$4', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  function dispose() {
  }
  setMetadataFor(HttpInterceptor, 'HttpInterceptor', interfaceMeta, undefined, undefined, undefined, undefined, [2]);
  setMetadataFor(BatchingHttpInterceptor, 'BatchingHttpInterceptor', classMeta, undefined, [HttpInterceptor], undefined, undefined, [2, 0]);
  setMetadataFor(HeadersInterceptor, 'HeadersInterceptor', classMeta, undefined, [HttpInterceptor], undefined, undefined, [2]);
  setMetadataFor(HttpEngine, 'HttpEngine', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(Key_2, 'Key', objectMeta, undefined, [Key], undefined, undefined, []);
  setMetadataFor(HttpInfo, 'HttpInfo', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(HttpInterceptorChain, 'HttpInterceptorChain', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultHttpInterceptorChain, 'DefaultHttpInterceptorChain', classMeta, undefined, [HttpInterceptorChain], undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport$execute$slambda$o$collect$slambda, 'HttpNetworkTransport$execute$slambda$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$5, '$collectCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv_1, undefined, classMeta, undefined, [Flow], undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport$multipleResponses$o$collect$slambda, 'HttpNetworkTransport$multipleResponses$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpNetworkTransport$multipleResponses$o$collect$slambda_1, 'HttpNetworkTransport$multipleResponses$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(EngineInterceptor, 'EngineInterceptor', classMeta, undefined, [HttpInterceptor], undefined, undefined, [2]);
  setMetadataFor(Builder_4, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport$execute$slambda, 'HttpNetworkTransport$execute$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_2, undefined, classMeta, undefined, [Flow], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_3, undefined, classMeta, undefined, [Flow], undefined, undefined, [1]);
  setMetadataFor(HttpNetworkTransport, 'HttpNetworkTransport', classMeta, undefined, [NetworkTransport], undefined, undefined, []);
  setMetadataFor(SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b, 'SubscriptionWsProtocol$Factory$<init>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [0]);
  setMetadataFor(Factory_0, 'Factory', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Factory, 'Factory', classMeta, undefined, [Factory_0], undefined, undefined, []);
  setMetadataFor(SubscriptionWsProtocol$_init_$slambda_7z3jff, 'SubscriptionWsProtocol$<init>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [0]);
  setMetadataFor(SubscriptionWsProtocol$connectionInit$slambda, 'SubscriptionWsProtocol$connectionInit$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($connectionInitCOROUTINE$8, '$connectionInitCOROUTINE$8', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WsProtocol, 'WsProtocol', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(SubscriptionWsProtocol, 'SubscriptionWsProtocol', classMeta, WsProtocol, undefined, undefined, undefined, [0]);
  function open$default(url, headers, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      headers = emptyList();
    return $handler == null ? this.open_775z3k_k$(url, headers, $cont) : $handler(url, headers, $cont);
  }
  function open$default_0(url, headers, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      headers = emptyMap();
    return $handler == null ? this.open_53yeqq_k$(url, headers, $cont) : $handler(url, headers, $cont);
  }
  setMetadataFor(WebSocketEngine, 'WebSocketEngine', interfaceMeta, undefined, undefined, undefined, undefined, [2]);
  setMetadataFor(WebSocketConnection, 'WebSocketConnection', interfaceMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(WebSocketNetworkTransport$Builder$reconnectWhen$slambda, 'WebSocketNetworkTransport$Builder$reconnectWhen$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(WebSocketNetworkTransport$execute$o$collect$slambda, 'WebSocketNetworkTransport$execute$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport$execute$o$collect$slambda_1, 'WebSocketNetworkTransport$execute$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$11, '$collectCOROUTINE$11', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport$execute$o$collect$slambda_3, 'WebSocketNetworkTransport$execute$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor($collectCOROUTINE$12, '$collectCOROUTINE$12', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Builder_5, 'Builder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, undefined, [FlowCollector], undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$slambda, 'WebSocketNetworkTransport$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(Listener, 'Listener', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport$listener$1, undefined, classMeta, undefined, [Listener], undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport$supervise$slambda, 'WebSocketNetworkTransport$supervise$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$supervise$slambda_1, 'WebSocketNetworkTransport$supervise$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$execute$slambda, 'WebSocketNetworkTransport$execute$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_4, undefined, classMeta, undefined, [Flow], undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$execute$slambda_1, 'WebSocketNetworkTransport$execute$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(_no_name_provided__qut3iv_5, undefined, classMeta, undefined, [Flow], undefined, undefined, [1]);
  setMetadataFor(_no_name_provided__qut3iv_6, undefined, classMeta, undefined, [Flow], undefined, undefined, [1]);
  setMetadataFor(WebSocketNetworkTransport$execute$slambda_3, 'WebSocketNetworkTransport$execute$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor($superviseCOROUTINE$9, '$superviseCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketNetworkTransport, 'WebSocketNetworkTransport', classMeta, undefined, [NetworkTransport], undefined, undefined, [1]);
  setMetadataFor($receiveMessageMapCOROUTINE$13, '$receiveMessageMapCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($runCOROUTINE$14, '$runCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(WsFrameType, 'WsFrameType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Message, 'Message', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Event, 'Event', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(OperationResponse, 'OperationResponse', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OperationError, 'OperationError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(OperationComplete, 'OperationComplete', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(GeneralError, 'GeneralError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(NetworkError, 'NetworkError', classMeta, undefined, [Event], undefined, undefined, []);
  setMetadataFor(Command, 'Command', interfaceMeta, undefined, [Message], undefined, undefined, []);
  setMetadataFor(StartOperation, 'StartOperation', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(Dispose, 'Dispose', objectMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(StopOperation, 'StopOperation', classMeta, undefined, [Command], undefined, undefined, []);
  setMetadataFor(CloseableSingleThreadDispatcher, 'CloseableSingleThreadDispatcher', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor($executeCOROUTINE$15, '$executeCOROUTINE$15', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DefaultHttpEngine, 'DefaultHttpEngine', classMeta, undefined, [HttpEngine], undefined, undefined, [1]);
  setMetadataFor(DefaultWebSocketEngine$open$5, undefined, classMeta, undefined, [WebSocketConnection], undefined, undefined, [0]);
  setMetadataFor(DefaultWebSocketEngine$createWebSocket$headers_capturingHack$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($openCOROUTINE$16, '$openCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DefaultWebSocketEngine, 'DefaultWebSocketEngine', classMeta, undefined, [WebSocketEngine], undefined, undefined, [2, 0]);
  //endregion
  function ApolloCall(apolloClient, operation) {
    this.apolloClient_1 = apolloClient;
    this.operation_1 = operation;
    this.executionContext_1 = Companion_getInstance().get_Empty_i9b85g_k$();
    this.httpMethod_1 = null;
    this.httpHeaders_1 = null;
    this.sendApqExtensions_1 = null;
    this.sendDocument_1 = null;
    this.enableAutoPersistedQueries_1 = null;
    this.canBeBatched_1 = null;
  }
  ApolloCall.prototype.get_apolloClient_ck0qwt_k$ = function () {
    return this.apolloClient_1;
  };
  ApolloCall.prototype.get_operation_z0nqyq_k$ = function () {
    return this.operation_1;
  };
  ApolloCall.prototype.set_executionContext_fwqssw_k$ = function (_set____db54di) {
    this.executionContext_1 = _set____db54di;
  };
  ApolloCall.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  ApolloCall.prototype.set_httpMethod_m4snrr_k$ = function (_set____db54di) {
    this.httpMethod_1 = _set____db54di;
  };
  ApolloCall.prototype.get_httpMethod_7r1vce_k$ = function () {
    return this.httpMethod_1;
  };
  ApolloCall.prototype.set_httpHeaders_i9dhf8_k$ = function (_set____db54di) {
    this.httpHeaders_1 = _set____db54di;
  };
  ApolloCall.prototype.get_httpHeaders_tuo13f_k$ = function () {
    return this.httpHeaders_1;
  };
  ApolloCall.prototype.set_sendApqExtensions_tur69x_k$ = function (_set____db54di) {
    this.sendApqExtensions_1 = _set____db54di;
  };
  ApolloCall.prototype.get_sendApqExtensions_p33jid_k$ = function () {
    return this.sendApqExtensions_1;
  };
  ApolloCall.prototype.set_sendDocument_4zxx84_k$ = function (_set____db54di) {
    this.sendDocument_1 = _set____db54di;
  };
  ApolloCall.prototype.get_sendDocument_ps1uz0_k$ = function () {
    return this.sendDocument_1;
  };
  ApolloCall.prototype.set_enableAutoPersistedQueries_kn9xsm_k$ = function (_set____db54di) {
    this.enableAutoPersistedQueries_1 = _set____db54di;
  };
  ApolloCall.prototype.get_enableAutoPersistedQueries_25oqhe_k$ = function () {
    return this.enableAutoPersistedQueries_1;
  };
  ApolloCall.prototype.addExecutionContext_h7mjnh_k$ = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.addExecutionContext.<anonymous>' call
    this.executionContext_1 = this.executionContext_1.plus_r8myed_k$(executionContext);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.httpMethod_mbfwat_k$ = function (httpMethod) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.httpMethod.<anonymous>' call
    this.httpMethod_1 = httpMethod;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.httpHeaders_fukdgi_k$ = function (httpHeaders) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.httpHeaders.<anonymous>' call
    this.httpHeaders_1 = httpHeaders;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.addHttpHeader_fpgff0_k$ = function (name, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.addHttpHeader.<anonymous>' call
    var tmp = this;
    var tmp0_elvis_lhs = this.httpHeaders_1;
    tmp.httpHeaders_1 = plus(tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs, new HttpHeader(name, value));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.sendApqExtensions_s8cozx_k$ = function (sendApqExtensions) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.sendApqExtensions.<anonymous>' call
    this.sendApqExtensions_1 = sendApqExtensions;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.sendDocument_ua794o_k$ = function (sendDocument) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.sendDocument.<anonymous>' call
    this.sendDocument_1 = sendDocument;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.enableAutoPersistedQueries_t48c6i_k$ = function (enableAutoPersistedQueries) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.enableAutoPersistedQueries.<anonymous>' call
    this.enableAutoPersistedQueries_1 = enableAutoPersistedQueries;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.set_canBeBatched_o31xef_k$ = function (_set____db54di) {
    this.canBeBatched_1 = _set____db54di;
  };
  ApolloCall.prototype.get_canBeBatched_43ofm9_k$ = function () {
    return this.canBeBatched_1;
  };
  ApolloCall.prototype.canBeBatched_cioqad_k$ = function (canBeBatched) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloCall.canBeBatched.<anonymous>' call
    this.canBeBatched_1 = canBeBatched;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ApolloCall.prototype.copy_1tks5_k$ = function () {
    return (new ApolloCall(this.apolloClient_1, this.operation_1)).addExecutionContext_h7mjnh_k$(this.executionContext_1).httpMethod_mbfwat_k$(this.httpMethod_1).httpHeaders_fukdgi_k$(this.httpHeaders_1).sendApqExtensions_s8cozx_k$(this.sendApqExtensions_1).sendDocument_ua794o_k$(this.sendDocument_1).enableAutoPersistedQueries_t48c6i_k$(this.enableAutoPersistedQueries_1).canBeBatched_cioqad_k$(this.canBeBatched_1);
  };
  ApolloCall.prototype.toFlow_edjqgn_k$ = function () {
    var request = (new Builder(this.operation_1)).executionContext_k6g5r6_k$(this.executionContext_1).httpMethod_mbfwat_k$(this.httpMethod_1).httpHeaders_fukdgi_k$(this.httpHeaders_1).sendApqExtensions_s8cozx_k$(this.sendApqExtensions_1).sendDocument_ua794o_k$(this.sendDocument_1).enableAutoPersistedQueries_t48c6i_k$(this.enableAutoPersistedQueries_1).canBeBatched_cioqad_k$(this.canBeBatched_1).build_1k0s4u_k$();
    return this.apolloClient_1.executeAsFlow_edyzdy_k$(request);
  };
  ApolloCall.prototype.execute_qhiagk_k$ = function ($cont) {
    return single(this.toFlow_edjqgn_k$(), $cont);
  };
  function _set__networkTransport__otl24r($this, _set____db54di) {
    $this._networkTransport_1 = _set____db54di;
  }
  function _get__networkTransport__33s5uf($this) {
    return $this._networkTransport_1;
  }
  function _set_subscriptionNetworkTransport__22j05d($this, _set____db54di) {
    $this.subscriptionNetworkTransport_1 = _set____db54di;
  }
  function _get_subscriptionNetworkTransport__541ysz($this) {
    return $this.subscriptionNetworkTransport_1;
  }
  function _get_customScalarAdaptersBuilder__2znuxj($this) {
    return $this.customScalarAdaptersBuilder_1;
  }
  function _get__interceptors__h3evks($this) {
    return $this._interceptors_1;
  }
  function _set_apqInterceptor__oxsfys($this, _set____db54di) {
    $this.apqInterceptor_1 = _set____db54di;
  }
  function _get_apqInterceptor__kk85yw($this) {
    return $this.apqInterceptor_1;
  }
  function _get_httpInterceptors__hmnldh($this) {
    return $this.httpInterceptors_1;
  }
  function _set_dispatcher__1htrkg($this, _set____db54di) {
    $this.dispatcher_1 = _set____db54di;
  }
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function _set_httpServerUrl__blwvjz($this, _set____db54di) {
    $this.httpServerUrl_1 = _set____db54di;
  }
  function _get_httpServerUrl__qtoe2b($this) {
    return $this.httpServerUrl_1;
  }
  function _set_httpEngine__siyr6b($this, _set____db54di) {
    $this.httpEngine_1 = _set____db54di;
  }
  function _get_httpEngine__rfwpnl($this) {
    return $this.httpEngine_1;
  }
  function _set_webSocketServerUrl__seox5a($this, _set____db54di) {
    $this.webSocketServerUrl_1 = _set____db54di;
  }
  function _get_webSocketServerUrl__8ojtpi($this) {
    return $this.webSocketServerUrl_1;
  }
  function _set_webSocketIdleTimeoutMillis__98act1($this, _set____db54di) {
    $this.webSocketIdleTimeoutMillis_1 = _set____db54di;
  }
  function _get_webSocketIdleTimeoutMillis__7tgme9($this) {
    return $this.webSocketIdleTimeoutMillis_1;
  }
  function _set_wsProtocolFactory__w8rl1t($this, _set____db54di) {
    $this.wsProtocolFactory_1 = _set____db54di;
  }
  function _get_wsProtocolFactory__h2jkmz($this) {
    return $this.wsProtocolFactory_1;
  }
  function _set_httpExposeErrorBody__xmuu4n($this, _set____db54di) {
    $this.httpExposeErrorBody_1 = _set____db54di;
  }
  function _get_httpExposeErrorBody__o3iyy5($this) {
    return $this.httpExposeErrorBody_1;
  }
  function _set_webSocketEngine__70tcik($this, _set____db54di) {
    $this.webSocketEngine_1 = _set____db54di;
  }
  function _get_webSocketEngine__h4jk14($this) {
    return $this.webSocketEngine_1;
  }
  function _set_webSocketReopenWhen__cnt3kp($this, _set____db54di) {
    $this.webSocketReopenWhen_1 = _set____db54di;
  }
  function _get_webSocketReopenWhen__mx5bn($this) {
    return $this.webSocketReopenWhen_1;
  }
  function ApolloClient$Builder$webSocketReconnectWhen$slambda($reconnectWhen, resultContinuation) {
    this.$reconnectWhen_1 = $reconnectWhen;
    CoroutineImpl.call(this, resultContinuation);
  }
  ApolloClient$Builder$webSocketReconnectWhen$slambda.prototype.invoke_ba4xtr_k$ = function (throwable, _anonymous_parameter_1__qggqgd, $cont) {
    var tmp = this.create_452l0s_k$(throwable, _anonymous_parameter_1__qggqgd, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ApolloClient$Builder$webSocketReconnectWhen$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof Error ? p1 : THROW_CCE();
    return this.invoke_ba4xtr_k$(tmp, p2 instanceof Long ? p2 : THROW_CCE(), $cont);
  };
  ApolloClient$Builder$webSocketReconnectWhen$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return this.$reconnectWhen_1(this.throwable_1);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  ApolloClient$Builder$webSocketReconnectWhen$slambda.prototype.create_452l0s_k$ = function (throwable, _anonymous_parameter_1__qggqgd, completion) {
    var i = new ApolloClient$Builder$webSocketReconnectWhen$slambda(this.$reconnectWhen_1, completion);
    i.throwable_1 = throwable;
    i._anonymous_parameter_1__qggqgd_1 = _anonymous_parameter_1__qggqgd;
    return i;
  };
  function ApolloClient$Builder$webSocketReconnectWhen$slambda_0($reconnectWhen, resultContinuation) {
    var i = new ApolloClient$Builder$webSocketReconnectWhen$slambda($reconnectWhen, resultContinuation);
    var l = function (throwable, _anonymous_parameter_1__qggqgd, $cont) {
      return i.invoke_ba4xtr_k$(throwable, _anonymous_parameter_1__qggqgd, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _get_dispatcher__dketks_0($this) {
    return $this.dispatcher_1;
  }
  function _get_builder__bi005y($this) {
    return $this.builder_1;
  }
  function _get_concurrencyInfo__2qr9zk($this) {
    return $this.concurrencyInfo_1;
  }
  function _get_networkInterceptor__hof25o($this) {
    return $this.networkInterceptor_1;
  }
  function Builder_3() {
    this._networkTransport_1 = null;
    this.subscriptionNetworkTransport_1 = null;
    this.customScalarAdaptersBuilder_1 = new Builder_0();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp._interceptors_1 = tmp$ret$0;
    this.apqInterceptor_1 = null;
    this.interceptors_1 = this._interceptors_1;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.httpInterceptors_1 = tmp$ret$1;
    this.dispatcher_1 = null;
    this.executionContext_1 = Companion_getInstance().get_Empty_i9b85g_k$();
    this.httpServerUrl_1 = null;
    this.httpEngine_1 = null;
    this.webSocketServerUrl_1 = null;
    this.webSocketIdleTimeoutMillis_1 = null;
    this.wsProtocolFactory_1 = null;
    this.httpExposeErrorBody_1 = null;
    this.webSocketEngine_1 = null;
    this.webSocketReopenWhen_1 = null;
    failOnNativeIfLegacyMemoryManager();
    this.httpMethod_1 = null;
    this.httpHeaders_1 = null;
    this.sendApqExtensions_1 = null;
    this.sendDocument_1 = null;
    this.enableAutoPersistedQueries_1 = null;
    this.canBeBatched_1 = null;
  }
  Builder_3.prototype.get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  Builder_3.prototype.set_executionContext_fwqssw_k$ = function (_set____db54di) {
    this.executionContext_1 = _set____db54di;
  };
  Builder_3.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  Builder_3.prototype.set_httpMethod_m4snrr_k$ = function (_set____db54di) {
    this.httpMethod_1 = _set____db54di;
  };
  Builder_3.prototype.get_httpMethod_7r1vce_k$ = function () {
    return this.httpMethod_1;
  };
  Builder_3.prototype.httpMethod_mbfwat_k$ = function (httpMethod) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpMethod.<anonymous>' call
    this.httpMethod_1 = httpMethod;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.set_httpHeaders_i9dhf8_k$ = function (_set____db54di) {
    this.httpHeaders_1 = _set____db54di;
  };
  Builder_3.prototype.get_httpHeaders_tuo13f_k$ = function () {
    return this.httpHeaders_1;
  };
  Builder_3.prototype.httpHeaders_fukdgi_k$ = function (httpHeaders) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpHeaders.<anonymous>' call
    this.httpHeaders_1 = httpHeaders;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.addHttpHeader_fpgff0_k$ = function (name, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.addHttpHeader.<anonymous>' call
    var tmp = this;
    var tmp0_elvis_lhs = this.httpHeaders_1;
    tmp.httpHeaders_1 = plus(tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs, new HttpHeader(name, value));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.set_sendApqExtensions_tur69x_k$ = function (_set____db54di) {
    this.sendApqExtensions_1 = _set____db54di;
  };
  Builder_3.prototype.get_sendApqExtensions_p33jid_k$ = function () {
    return this.sendApqExtensions_1;
  };
  Builder_3.prototype.sendApqExtensions_s8cozx_k$ = function (sendApqExtensions) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.sendApqExtensions.<anonymous>' call
    this.sendApqExtensions_1 = sendApqExtensions;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.set_sendDocument_4zxx84_k$ = function (_set____db54di) {
    this.sendDocument_1 = _set____db54di;
  };
  Builder_3.prototype.get_sendDocument_ps1uz0_k$ = function () {
    return this.sendDocument_1;
  };
  Builder_3.prototype.sendDocument_ua794o_k$ = function (sendDocument) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.sendDocument.<anonymous>' call
    this.sendDocument_1 = sendDocument;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.set_enableAutoPersistedQueries_kn9xsm_k$ = function (_set____db54di) {
    this.enableAutoPersistedQueries_1 = _set____db54di;
  };
  Builder_3.prototype.get_enableAutoPersistedQueries_25oqhe_k$ = function () {
    return this.enableAutoPersistedQueries_1;
  };
  Builder_3.prototype.enableAutoPersistedQueries_t48c6i_k$ = function (enableAutoPersistedQueries) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.enableAutoPersistedQueries.<anonymous>' call
    this.enableAutoPersistedQueries_1 = enableAutoPersistedQueries;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.set_canBeBatched_o31xef_k$ = function (_set____db54di) {
    this.canBeBatched_1 = _set____db54di;
  };
  Builder_3.prototype.get_canBeBatched_43ofm9_k$ = function () {
    return this.canBeBatched_1;
  };
  Builder_3.prototype.canBeBatched_cioqad_k$ = function (canBeBatched) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.canBeBatched.<anonymous>' call
    this.canBeBatched_1 = canBeBatched;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.serverUrl_zifppn_k$ = function (serverUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.serverUrl.<anonymous>' call
    this.httpServerUrl_1 = serverUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.httpServerUrl_zg78sj_k$ = function (httpServerUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpServerUrl.<anonymous>' call
    this.httpServerUrl_1 = httpServerUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.httpEngine_nzi0ts_k$ = function (httpEngine) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpEngine.<anonymous>' call
    this.httpEngine_1 = httpEngine;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.httpExposeErrorBody_hltv7o_k$ = function (httpExposeErrorBody) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpExposeErrorBody.<anonymous>' call
    this.httpExposeErrorBody_1 = httpExposeErrorBody;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.addHttpInterceptor_59c0rp_k$ = function (httpInterceptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.addHttpInterceptor.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.httpInterceptors_1;
    tmp0_plusAssign.add_1j60pz_k$(httpInterceptor);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.webSocketServerUrl_9c0o3o_k$ = function (webSocketServerUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.webSocketServerUrl.<anonymous>' call
    this.webSocketServerUrl_1 = webSocketServerUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.webSocketIdleTimeoutMillis_mcu60a_k$ = function (webSocketIdleTimeoutMillis) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.webSocketIdleTimeoutMillis.<anonymous>' call
    this.webSocketIdleTimeoutMillis_1 = webSocketIdleTimeoutMillis;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.wsProtocol_d8pqk2_k$ = function (wsProtocolFactory) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.wsProtocol.<anonymous>' call
    this.wsProtocolFactory_1 = wsProtocolFactory;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.webSocketEngine_izypko_k$ = function (webSocketEngine) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.webSocketEngine.<anonymous>' call
    this.webSocketEngine_1 = webSocketEngine;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.webSocketReopenWhen_u9izum_k$ = function (webSocketReopenWhen) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.webSocketReopenWhen.<anonymous>' call
    this.webSocketReopenWhen_1 = webSocketReopenWhen;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.webSocketReconnectWhen_b7fqmg_k$ = function (reconnectWhen) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.webSocketReconnectWhen.<anonymous>' call
    var tmp = this;
    var tmp0_safe_receiver = reconnectWhen;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.Builder.webSocketReconnectWhen.<anonymous>.<anonymous>' call
      var adaptedLambda = ApolloClient$Builder$webSocketReconnectWhen$slambda_0(reconnectWhen, null);
      tmp$ret$0 = adaptedLambda;
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    tmp.webSocketReopenWhen_1 = tmp_0;
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  Builder_3.prototype.networkTransport_l85igm_k$ = function (networkTransport) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.networkTransport.<anonymous>' call
    this._networkTransport_1 = networkTransport;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.subscriptionNetworkTransport_rv44x9_k$ = function (subscriptionNetworkTransport) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.subscriptionNetworkTransport.<anonymous>' call
    this.subscriptionNetworkTransport_1 = subscriptionNetworkTransport;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.customScalarAdapters_h9csny_k$ = function (customScalarAdapters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.customScalarAdapters.<anonymous>' call
    this.customScalarAdaptersBuilder_1.clear_j9y8zo_k$();
    this.customScalarAdaptersBuilder_1.addAll_exlxlr_k$(customScalarAdapters);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.addCustomScalarAdapter_o93ne9_k$ = function (customScalarType, customScalarAdapter) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.addCustomScalarAdapter.<anonymous>' call
    this.customScalarAdaptersBuilder_1.add_7nwrc1_k$(customScalarType, customScalarAdapter);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.addCustomTypeAdapter_wsb16w_k$ = function (customScalarType, customTypeAdapter) {
    return this.addCustomScalarAdapter_o93ne9_k$(customScalarType, new Version2CustomTypeAdapterToAdapter(customTypeAdapter));
  };
  Builder_3.prototype.addInterceptor_fsbtuv_k$ = function (interceptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.addInterceptor.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this._interceptors_1;
    tmp0_plusAssign.add_1j60pz_k$(interceptor);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.addInterceptors_o9gyzo_k$ = function (interceptors) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.addInterceptors.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this._interceptors_1;
    addAll(tmp0_plusAssign, interceptors);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.interceptors_6zf7lx_k$ = function (interceptors) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.interceptors.<anonymous>' call
    this._interceptors_1.clear_j9y8zo_k$();
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this._interceptors_1;
    addAll(tmp0_plusAssign, interceptors);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.requestedDispatcher_vc0q42_k$ = function (requestedDispatcher) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.requestedDispatcher.<anonymous>' call
    this.dispatcher_2depy4_k$(requestedDispatcher);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.dispatcher_2depy4_k$ = function (dispatcher) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.dispatcher.<anonymous>' call
    this.dispatcher_1 = dispatcher;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.addExecutionContext_h7mjnh_k$ = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.addExecutionContext.<anonymous>' call
    this.executionContext_1 = this.executionContext_1.plus_r8myed_k$(executionContext);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.executionContext_k6g5r6_k$ = function (executionContext) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.executionContext.<anonymous>' call
    this.executionContext_1 = executionContext;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.autoPersistedQueries_2u7x3q_k$ = function (httpMethodForHashedQueries, httpMethodForDocumentQueries, enableByDefault) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.autoPersistedQueries.<anonymous>' call
    this.apqInterceptor_1 = new AutoPersistedQueryInterceptor(httpMethodForHashedQueries, httpMethodForDocumentQueries);
    this.enableAutoPersistedQueries_t48c6i_k$(enableByDefault);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.autoPersistedQueries$default_szrkp_k$ = function (httpMethodForHashedQueries, httpMethodForDocumentQueries, enableByDefault, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      httpMethodForHashedQueries = HttpMethod_Get_getInstance();
    if (!(($mask0 & 2) === 0))
      httpMethodForDocumentQueries = HttpMethod_Post_getInstance();
    if (!(($mask0 & 4) === 0))
      enableByDefault = true;
    return this.autoPersistedQueries_2u7x3q_k$(httpMethodForHashedQueries, httpMethodForDocumentQueries, enableByDefault);
  };
  Builder_3.prototype.httpBatching_d0qrf7_k$ = function (batchIntervalMillis, maxBatchSize, enableByDefault) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.httpBatching.<anonymous>' call
    this.addHttpInterceptor_59c0rp_k$(BatchingHttpInterceptor_init_$Create$(batchIntervalMillis, maxBatchSize, false, 4, null));
    this.canBeBatched_cioqad_k$(enableByDefault);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.httpBatching$default_9h3gdq_k$ = function (batchIntervalMillis, maxBatchSize, enableByDefault, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      batchIntervalMillis = new Long(10, 0);
    if (!(($mask0 & 2) === 0))
      maxBatchSize = 10;
    if (!(($mask0 & 4) === 0))
      enableByDefault = true;
    return this.httpBatching_d0qrf7_k$(batchIntervalMillis, maxBatchSize, enableByDefault);
  };
  Builder_3.prototype.useHttpGetMethodForQueries_rfeabv_k$ = function (useHttpGetMethodForQueries) {
    return this.httpMethod_mbfwat_k$(useHttpGetMethodForQueries ? HttpMethod_Get_getInstance() : HttpMethod_Post_getInstance());
  };
  Builder_3.prototype.useHttpGetMethodForPersistedQueries_m6hc2u_k$ = function (useHttpGetMethodForQueries) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.Builder.useHttpGetMethodForPersistedQueries.<anonymous>' call
    throw new NotImplementedError('useHttpGetMethodForPersistedQueries is now configured at the same time as auto persisted queries. Use autoPersistedQueries(httpMethodForHashedQueries = HttpMethod.GET) instead.');
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_3.prototype.build_1k0s4u_k$ = function () {
    var tmp;
    if (!(this._networkTransport_1 == null)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = this.httpServerUrl_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$0 = "Apollo: 'httpServerUrl' has no effect if 'networkTransport' is set";
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      var tmp1_check = this.httpEngine_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$1 = "Apollo: 'httpEngine' has no effect if 'networkTransport' is set";
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      // Inline function 'kotlin.check' call
      var tmp2_check = this.httpInterceptors_1.isEmpty_y1axqb_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_check) {
        var tmp$ret$2;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$2 = "Apollo: 'addHttpInterceptor' has no effect if 'networkTransport' is set";
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      // Inline function 'kotlin.check' call
      var tmp3_check = this.httpExposeErrorBody_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp3_check) {
        var tmp$ret$3;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$3 = "Apollo: 'httpExposeErrorBody' has no effect if 'networkTransport' is set";
        var message_2 = tmp$ret$3;
        throw IllegalStateException_init_$Create$(toString(message_2));
      }
      tmp = ensureNotNull(this._networkTransport_1);
    } else {
      // Inline function 'kotlin.check' call
      var tmp4_check = !(this.httpServerUrl_1 == null);
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
      var tmp5_apply = (new Builder_4()).serverUrl_zifppn_k$(ensureNotNull(this.httpServerUrl_1));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
      if (!(this.httpEngine_1 == null)) {
        tmp5_apply.httpEngine_nzi0ts_k$(ensureNotNull(this.httpEngine_1));
      }
      if (!(this.httpExposeErrorBody_1 == null)) {
        tmp5_apply.exposeErrorBody_8ta9sk_k$(ensureNotNull(this.httpExposeErrorBody_1));
      }
      tmp$ret$5 = tmp5_apply;
      tmp = tmp$ret$5.interceptors_pyfpsj_k$(this.httpInterceptors_1).build_1k0s4u_k$();
    }
    var networkTransport = tmp;
    var tmp_0;
    if (!(this.subscriptionNetworkTransport_1 == null)) {
      // Inline function 'kotlin.check' call
      var tmp6_check = this.webSocketServerUrl_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp6_check) {
        var tmp$ret$6;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$6 = "Apollo: 'webSocketServerUrl' has no effect if 'subscriptionNetworkTransport' is set";
        var message_4 = tmp$ret$6;
        throw IllegalStateException_init_$Create$(toString(message_4));
      }
      // Inline function 'kotlin.check' call
      var tmp7_check = this.webSocketEngine_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp7_check) {
        var tmp$ret$7;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$7 = "Apollo: 'webSocketEngine' has no effect if 'subscriptionNetworkTransport' is set";
        var message_5 = tmp$ret$7;
        throw IllegalStateException_init_$Create$(toString(message_5));
      }
      // Inline function 'kotlin.check' call
      var tmp8_check = this.webSocketIdleTimeoutMillis_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp8_check) {
        var tmp$ret$8;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$8 = "Apollo: 'webSocketIdleTimeoutMillis' has no effect if 'subscriptionNetworkTransport' is set";
        var message_6 = tmp$ret$8;
        throw IllegalStateException_init_$Create$(toString(message_6));
      }
      // Inline function 'kotlin.check' call
      var tmp9_check = this.wsProtocolFactory_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp9_check) {
        var tmp$ret$9;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$9 = "Apollo: 'wsProtocolFactory' has no effect if 'subscriptionNetworkTransport' is set";
        var message_7 = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message_7));
      }
      // Inline function 'kotlin.check' call
      var tmp10_check = this.webSocketReopenWhen_1 == null;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp10_check) {
        var tmp$ret$10;
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        tmp$ret$10 = "Apollo: 'webSocketReopenWhen' has no effect if 'subscriptionNetworkTransport' is set";
        var message_8 = tmp$ret$10;
        throw IllegalStateException_init_$Create$(toString(message_8));
      }
      tmp_0 = ensureNotNull(this.subscriptionNetworkTransport_1);
    } else {
      var tmp0_elvis_lhs = this.webSocketServerUrl_1;
      var url = tmp0_elvis_lhs == null ? this.httpServerUrl_1 : tmp0_elvis_lhs;
      var tmp_1;
      if (url == null) {
        tmp_1 = networkTransport;
      } else {
        var tmp$ret$11;
        // Inline function 'kotlin.apply' call
        var tmp11_apply = (new Builder_5()).serverUrl_zifppn_k$(url);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.apollographql.apollo3.Builder.build.<anonymous>' call
        if (!(this.webSocketEngine_1 == null)) {
          tmp11_apply.webSocketEngine_izypko_k$(ensureNotNull(this.webSocketEngine_1));
        }
        if (!(this.webSocketIdleTimeoutMillis_1 == null)) {
          tmp11_apply.idleTimeoutMillis_pro7ul_k$(ensureNotNull(this.webSocketIdleTimeoutMillis_1));
        }
        if (!(this.wsProtocolFactory_1 == null)) {
          tmp11_apply.protocol_xk1t12_k$(ensureNotNull(this.wsProtocolFactory_1));
        }
        if (!(this.webSocketReopenWhen_1 == null)) {
          tmp11_apply.reopenWhen_gkhsb4_k$(this.webSocketReopenWhen_1);
        }
        tmp$ret$11 = tmp11_apply;
        tmp_1 = tmp$ret$11.build_1k0s4u_k$();
      }
      tmp_0 = tmp_1;
    }
    var subscriptionNetworkTransport = tmp_0;
    var tmp1_customScalarAdapters = this.customScalarAdaptersBuilder_1.build_1k0s4u_k$();
    var tmp2_interceptors = plus_0(this._interceptors_1, listOfNotNull(this.apqInterceptor_1));
    var tmp3_dispatcher = this.dispatcher_1;
    var tmp4_executionContext = this.executionContext_1;
    var tmp5_httpMethod = this.httpMethod_1;
    var tmp6_httpHeaders = this.httpHeaders_1;
    var tmp7_sendApqExtensions = this.sendApqExtensions_1;
    var tmp8_sendDocument = this.sendDocument_1;
    var tmp9_enableAutoPersistedQueries = this.enableAutoPersistedQueries_1;
    var tmp10_canBeBatched = this.canBeBatched_1;
    return new ApolloClient(networkTransport, tmp1_customScalarAdapters, subscriptionNetworkTransport, tmp2_interceptors, tmp4_executionContext, tmp3_dispatcher, tmp5_httpMethod, tmp6_httpHeaders, tmp7_sendApqExtensions, tmp8_sendDocument, tmp9_enableAutoPersistedQueries, tmp10_canBeBatched, this);
  };
  Builder_3.prototype.copy_1tks5_k$ = function () {
    var builder = (new Builder_3()).customScalarAdapters_h9csny_k$(this.customScalarAdaptersBuilder_1.build_1k0s4u_k$()).interceptors_6zf7lx_k$(this.interceptors_1).dispatcher_2depy4_k$(this.dispatcher_1).executionContext_k6g5r6_k$(this.executionContext_1).httpMethod_mbfwat_k$(this.httpMethod_1).httpHeaders_fukdgi_k$(this.httpHeaders_1).sendApqExtensions_s8cozx_k$(this.sendApqExtensions_1).sendDocument_ua794o_k$(this.sendDocument_1).enableAutoPersistedQueries_t48c6i_k$(this.enableAutoPersistedQueries_1).canBeBatched_cioqad_k$(this.canBeBatched_1);
    var tmp0_safe_receiver = this._networkTransport_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$0 = builder.networkTransport_l85igm_k$(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp1_safe_receiver = this.httpServerUrl_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$2 = builder.httpServerUrl_zg78sj_k$(tmp1_safe_receiver);
      tmp$ret$3 = tmp$ret$2;
    }
    var tmp2_safe_receiver = this.httpEngine_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$4 = builder.httpEngine_nzi0ts_k$(tmp2_safe_receiver);
      tmp$ret$5 = tmp$ret$4;
    }
    var tmp3_safe_receiver = this.httpExposeErrorBody_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$6 = builder.httpExposeErrorBody_hltv7o_k$(tmp3_safe_receiver);
      tmp$ret$7 = tmp$ret$6;
    }
    var tmp4_iterator = this.httpInterceptors_1.iterator_jk1svi_k$();
    while (tmp4_iterator.hasNext_bitz1p_k$()) {
      var httpInterceptor = tmp4_iterator.next_20eer_k$();
      builder.addHttpInterceptor_59c0rp_k$(httpInterceptor);
    }
    var tmp5_safe_receiver = this.subscriptionNetworkTransport_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$8 = builder.subscriptionNetworkTransport_rv44x9_k$(tmp5_safe_receiver);
      tmp$ret$9 = tmp$ret$8;
    }
    var tmp6_safe_receiver = this.webSocketServerUrl_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$10 = builder.webSocketServerUrl_9c0o3o_k$(tmp6_safe_receiver);
      tmp$ret$11 = tmp$ret$10;
    }
    var tmp7_safe_receiver = this.webSocketEngine_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$12 = builder.webSocketEngine_izypko_k$(tmp7_safe_receiver);
      tmp$ret$13 = tmp$ret$12;
    }
    var tmp8_safe_receiver = this.webSocketReopenWhen_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      var tmp$ret$15;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$14;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$14 = builder.webSocketReopenWhen_u9izum_k$(tmp8_safe_receiver);
      tmp$ret$15 = tmp$ret$14;
    }
    var tmp9_safe_receiver = this.webSocketIdleTimeoutMillis_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$16 = builder.webSocketIdleTimeoutMillis_mcu60a_k$(tmp9_safe_receiver);
      tmp$ret$17 = tmp$ret$16;
    }
    var tmp10_safe_receiver = this.wsProtocolFactory_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$19;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$18;
      // Inline function 'com.apollographql.apollo3.Builder.copy.<anonymous>' call
      tmp$ret$18 = builder.wsProtocol_d8pqk2_k$(tmp10_safe_receiver);
      tmp$ret$19 = tmp$ret$18;
    }
    return builder;
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.builder_3thy1n_k$ = function () {
    return new Builder_3();
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ApolloClient(networkTransport, customScalarAdapters, subscriptionNetworkTransport, interceptors, executionContext, dispatcher, httpMethod, httpHeaders, sendApqExtensions, sendDocument, enableAutoPersistedQueries, canBeBatched, builder) {
    Companion_getInstance_8();
    this.networkTransport_1 = networkTransport;
    this.customScalarAdapters_1 = customScalarAdapters;
    this.subscriptionNetworkTransport_1 = subscriptionNetworkTransport;
    this.interceptors_1 = interceptors;
    this.executionContext_1 = executionContext;
    this.dispatcher_1 = dispatcher;
    this.httpMethod_1 = httpMethod;
    this.httpHeaders_1 = httpHeaders;
    this.sendApqExtensions_1 = sendApqExtensions;
    this.sendDocument_1 = sendDocument;
    this.enableAutoPersistedQueries_1 = enableAutoPersistedQueries;
    this.canBeBatched_1 = canBeBatched;
    this.builder_1 = builder;
    var tmp0_elvis_lhs = this.dispatcher_1;
    var dispatcher_0 = tmp0_elvis_lhs == null ? get_defaultDispatcher() : tmp0_elvis_lhs;
    this.concurrencyInfo_1 = new ConcurrencyInfo(dispatcher_0, CoroutineScope(dispatcher_0));
    this.networkInterceptor_1 = new NetworkInterceptor(this.networkTransport_1, this.subscriptionNetworkTransport_1, this.concurrencyInfo_1.get_dispatcher_usy1bk_k$());
  }
  ApolloClient.prototype.get_networkTransport_rptftw_k$ = function () {
    return this.networkTransport_1;
  };
  ApolloClient.prototype.get_customScalarAdapters_jxtx62_k$ = function () {
    return this.customScalarAdapters_1;
  };
  ApolloClient.prototype.get_subscriptionNetworkTransport_r7rlep_k$ = function () {
    return this.subscriptionNetworkTransport_1;
  };
  ApolloClient.prototype.get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  ApolloClient.prototype.get_executionContext_yb2vgg_k$ = function () {
    return this.executionContext_1;
  };
  ApolloClient.prototype.get_httpMethod_7r1vce_k$ = function () {
    return this.httpMethod_1;
  };
  ApolloClient.prototype.get_httpHeaders_tuo13f_k$ = function () {
    return this.httpHeaders_1;
  };
  ApolloClient.prototype.get_sendApqExtensions_p33jid_k$ = function () {
    return this.sendApqExtensions_1;
  };
  ApolloClient.prototype.get_sendDocument_ps1uz0_k$ = function () {
    return this.sendDocument_1;
  };
  ApolloClient.prototype.get_enableAutoPersistedQueries_25oqhe_k$ = function () {
    return this.enableAutoPersistedQueries_1;
  };
  ApolloClient.prototype.get_canBeBatched_43ofm9_k$ = function () {
    return this.canBeBatched_1;
  };
  ApolloClient.prototype.query_4nubzp_k$ = function (query) {
    return new ApolloCall(this, query);
  };
  ApolloClient.prototype.mutation_90wusv_k$ = function (mutation) {
    return new ApolloCall(this, mutation);
  };
  ApolloClient.prototype.mutate_j1ze5q_k$ = function (mutation) {
    return this.mutation_90wusv_k$(mutation);
  };
  ApolloClient.prototype.subscription_dcunip_k$ = function (subscription) {
    return new ApolloCall(this, subscription);
  };
  ApolloClient.prototype.prefetch_t33k59_k$ = function (operation) {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  ApolloClient.prototype.subscribe_ebnoxu_k$ = function (subscription) {
    return this.subscription_dcunip_k$(subscription);
  };
  ApolloClient.prototype.close_ymq55z_k$ = function () {
    var tmp = this.concurrencyInfo_1.get_coroutineScope_5k7h45_k$();
    cancel$default(tmp, null, 1, null);
    this.networkTransport_1.dispose_3n44we_k$();
    this.subscriptionNetworkTransport_1.dispose_3n44we_k$();
  };
  ApolloClient.prototype.dispose_3n44we_k$ = function () {
    this.close_ymq55z_k$();
  };
  ApolloClient.prototype.executeAsFlow_edyzdy_k$ = function (apolloRequest) {
    var executionContext = this.concurrencyInfo_1.plus_r8myed_k$(this.customScalarAdapters_1).plus_r8myed_k$(this.executionContext_1).plus_r8myed_k$(apolloRequest.get_executionContext_yb2vgg_k$());
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = (new Builder(apolloRequest.get_operation_z0nqyq_k$())).addExecutionContext_h7mjnh_k$(this.concurrencyInfo_1).addExecutionContext_h7mjnh_k$(this.customScalarAdapters_1).addExecutionContext_h7mjnh_k$(executionContext).addExecutionContext_h7mjnh_k$(apolloRequest.get_executionContext_yb2vgg_k$()).httpMethod_mbfwat_k$(this.httpMethod_1).httpHeaders_fukdgi_k$(this.httpHeaders_1).sendApqExtensions_s8cozx_k$(this.sendApqExtensions_1).sendDocument_ua794o_k$(this.sendDocument_1).enableAutoPersistedQueries_t48c6i_k$(this.enableAutoPersistedQueries_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.ApolloClient.executeAsFlow.<anonymous>' call
    if (!(apolloRequest.get_httpMethod_7r1vce_k$() == null)) {
      tmp0_apply.httpMethod_mbfwat_k$(apolloRequest.get_httpMethod_7r1vce_k$());
    }
    if (!(apolloRequest.get_httpHeaders_tuo13f_k$() == null)) {
      tmp0_apply.httpHeaders_fukdgi_k$(apolloRequest.get_httpHeaders_tuo13f_k$());
    }
    if (!(apolloRequest.get_sendApqExtensions_p33jid_k$() == null)) {
      tmp0_apply.sendApqExtensions_s8cozx_k$(apolloRequest.get_sendApqExtensions_p33jid_k$());
    }
    if (!(apolloRequest.get_sendDocument_ps1uz0_k$() == null)) {
      tmp0_apply.sendDocument_ua794o_k$(apolloRequest.get_sendDocument_ps1uz0_k$());
    }
    if (!(apolloRequest.get_enableAutoPersistedQueries_25oqhe_k$() == null)) {
      tmp0_apply.enableAutoPersistedQueries_t48c6i_k$(apolloRequest.get_enableAutoPersistedQueries_25oqhe_k$());
    }
    if (!(apolloRequest.get_canBeBatched_43ofm9_k$() == null)) {
      tmp0_apply.addHttpHeader_fpgff0_k$(Companion_getInstance_0().get_CAN_BE_BATCHED_mw3tpx_k$(), toString_0(apolloRequest.get_canBeBatched_43ofm9_k$()));
    }
    tmp$ret$0 = tmp0_apply;
    var request = tmp$ret$0.build_1k0s4u_k$();
    return (new DefaultInterceptorChain(plus(this.interceptors_1, this.networkInterceptor_1), 0)).proceed_yojjyr_k$(request);
  };
  ApolloClient.prototype.newBuilder_dnl2aj_k$ = function () {
    return this.builder_1.copy_1tks5_k$();
  };
  function Key_0() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function AutoPersistedQueryInfo(hit) {
    Key_getInstance_0();
    this.hit_1 = hit;
  }
  AutoPersistedQueryInfo.prototype.get_hit_18j4d2_k$ = function () {
    return this.hit_1;
  };
  AutoPersistedQueryInfo.prototype.get_key_18j28a_k$ = function () {
    return Key_getInstance_0();
  };
  function Key_1() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function ConcurrencyInfo(dispatcher, coroutineScope) {
    Key_getInstance_1();
    this.dispatcher_1 = dispatcher;
    this.coroutineScope_1 = coroutineScope;
  }
  ConcurrencyInfo.prototype.get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  ConcurrencyInfo.prototype.get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  ConcurrencyInfo.prototype.get_key_18j28a_k$ = function () {
    return Key_getInstance_1();
  };
  function ApolloInterceptor() {
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function DefaultInterceptorChain(interceptors, index) {
    this.interceptors_1 = interceptors;
    this.index_1 = index;
  }
  DefaultInterceptorChain.prototype.proceed_yojjyr_k$ = function (request) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.index_1 < this.interceptors_1.get_size_woubt6_k$();
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
    return this.interceptors_1.get_fkrdnv_k$(this.index_1).intercept_qmgtph_k$(request, new DefaultInterceptorChain(this.interceptors_1, this.index_1 + 1 | 0));
  };
  function ApolloInterceptorChain() {
  }
  function _get_PROTOCOL_NEGOTIATION_ERROR_QUERY_NOT_FOUND__vrh5g8($this) {
    return $this.PROTOCOL_NEGOTIATION_ERROR_QUERY_NOT_FOUND_1;
  }
  function _get_PROTOCOL_NEGOTIATION_ERROR_NOT_SUPPORTED__jqi1tx($this) {
    return $this.PROTOCOL_NEGOTIATION_ERROR_NOT_SUPPORTED_1;
  }
  function _get_httpMethodForHashedQueries__bg4rvy($this) {
    return $this.httpMethodForHashedQueries_1;
  }
  function _get_httpMethodForDocumentQueries__7eguio($this) {
    return $this.httpMethodForDocumentQueries_1;
  }
  function withAutoPersistedQueryInfo(_this__u8e3s4, $this, hit) {
    return _this__u8e3s4.newBuilder_dnl2aj_k$().addExecutionContext_h7mjnh_k$(new AutoPersistedQueryInfo(hit)).build_1k0s4u_k$();
  }
  function isPersistedQueryNotFound($this, errors) {
    var tmp0_safe_receiver = errors;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Collection) : false) {
          tmp_0 = tmp0_safe_receiver.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_safe_receiver.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$1;
          // Inline function 'com.apollographql.apollo3.interceptor.AutoPersistedQueryInterceptor.isPersistedQueryNotFound.<anonymous>' call
          var tmp_1 = element.get_message_h23axq_k$();
          Companion_getInstance_9();
          tmp$ret$1 = equals(tmp_1, 'PersistedQueryNotFound', true);
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp === true;
  }
  function isPersistedQueryNotSupported($this, errors) {
    var tmp0_safe_receiver = errors;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Collection) : false) {
          tmp_0 = tmp0_safe_receiver.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_safe_receiver.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$1;
          // Inline function 'com.apollographql.apollo3.interceptor.AutoPersistedQueryInterceptor.isPersistedQueryNotSupported.<anonymous>' call
          var tmp_1 = element.get_message_h23axq_k$();
          Companion_getInstance_9();
          tmp$ret$1 = equals(tmp_1, 'PersistedQueryNotSupported', true);
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp === true;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.PROTOCOL_NEGOTIATION_ERROR_QUERY_NOT_FOUND_1 = 'PersistedQueryNotFound';
    this.PROTOCOL_NEGOTIATION_ERROR_NOT_SUPPORTED_1 = 'PersistedQueryNotSupported';
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AutoPersistedQueryInterceptor$intercept$slambda($chain, $request, this$0, $isMutation, resultContinuation) {
    this.$chain_1 = $chain;
    this.$request_1 = $request;
    this.this$0__1 = this$0;
    this.$isMutation_1 = $isMutation;
    CoroutineImpl.call(this, resultContinuation);
  }
  AutoPersistedQueryInterceptor$intercept$slambda.prototype.invoke_a1ccj8_k$ = function ($this$flow, $cont) {
    var tmp = this.create_k3u2j5_k$($this$flow, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  AutoPersistedQueryInterceptor$intercept$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_a1ccj8_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  AutoPersistedQueryInterceptor$intercept$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            suspendResult = single(this.$chain_1.proceed_yojjyr_k$(this.$request_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response0__1 = suspendResult;
            if (isPersistedQueryNotFound(this.this$0__1, this.response0__1.get_errors_czzmno_k$())) {
              this.retryRequest1__1 = this.$request_1.newBuilder_dnl2aj_k$().httpMethod_mbfwat_k$(this.$isMutation_1 ? HttpMethod_Post_getInstance() : this.this$0__1.httpMethodForDocumentQueries_1).sendDocument_ua794o_k$(true).sendApqExtensions_s8cozx_k$(true).build_1k0s4u_k$();
              this.set_state_a96kl8_k$(3);
              suspendResult = single(this.$chain_1.proceed_yojjyr_k$(this.retryRequest1__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (isPersistedQueryNotSupported(this.this$0__1, this.response0__1.get_errors_czzmno_k$())) {
                throw new AutoPersistedQueriesNotSupported();
              } else {
                this.set_state_a96kl8_k$(2);
                suspendResult = this.$this$flow_1.emit_1fbrsb_k$(withAutoPersistedQueryInfo(this.response0__1, this.this$0__1, true), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 2:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 3:
            this.response0__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
            suspendResult = this.$this$flow_1.emit_1fbrsb_k$(withAutoPersistedQueryInfo(this.response0__1, this.this$0__1, false), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
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
  AutoPersistedQueryInterceptor$intercept$slambda.prototype.create_k3u2j5_k$ = function ($this$flow, completion) {
    var i = new AutoPersistedQueryInterceptor$intercept$slambda(this.$chain_1, this.$request_1, this.this$0__1, this.$isMutation_1, completion);
    i.$this$flow_1 = $this$flow;
    return i;
  };
  AutoPersistedQueryInterceptor$intercept$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_k3u2j5_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function AutoPersistedQueryInterceptor$intercept$slambda_0($chain, $request, this$0, $isMutation, resultContinuation) {
    var i = new AutoPersistedQueryInterceptor$intercept$slambda($chain, $request, this$0, $isMutation, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.invoke_a1ccj8_k$($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function AutoPersistedQueryInterceptor(httpMethodForHashedQueries, httpMethodForDocumentQueries) {
    Companion_getInstance_9();
    this.httpMethodForHashedQueries_1 = httpMethodForHashedQueries;
    this.httpMethodForDocumentQueries_1 = httpMethodForDocumentQueries;
  }
  AutoPersistedQueryInterceptor.prototype.intercept_qmgtph_k$ = function (request, chain) {
    var tmp0_elvis_lhs = request.get_enableAutoPersistedQueries_25oqhe_k$();
    var enabled = tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
    if (!enabled) {
      return chain.proceed_yojjyr_k$(request);
    }
    var tmp = request.get_operation_z0nqyq_k$();
    var isMutation = isInterface(tmp, Mutation);
    var request_0 = request.newBuilder_dnl2aj_k$().httpMethod_mbfwat_k$(isMutation ? HttpMethod_Post_getInstance() : this.httpMethodForHashedQueries_1).sendDocument_ua794o_k$(false).sendApqExtensions_s8cozx_k$(true).build_1k0s4u_k$();
    return flow(AutoPersistedQueryInterceptor$intercept$slambda_0(chain, request_0, this, isMutation, null));
  };
  function _get_networkTransport__gj3seo($this) {
    return $this.networkTransport_1;
  }
  function _get_subscriptionNetworkTransport__541ysz_0($this) {
    return $this.subscriptionNetworkTransport_1;
  }
  function _get_dispatcher__dketks_1($this) {
    return $this.dispatcher_1;
  }
  function NetworkInterceptor(networkTransport, subscriptionNetworkTransport, dispatcher) {
    this.networkTransport_1 = networkTransport;
    this.subscriptionNetworkTransport_1 = subscriptionNetworkTransport;
    this.dispatcher_1 = dispatcher;
  }
  NetworkInterceptor.prototype.intercept_qmgtph_k$ = function (request, chain) {
    var tmp0_subject = request.get_operation_z0nqyq_k$();
    var tmp;
    if (isInterface(tmp0_subject, Query)) {
      tmp = this.networkTransport_1.execute_wzgayi_k$(request);
    } else {
      if (isInterface(tmp0_subject, Mutation)) {
        tmp = this.networkTransport_1.execute_wzgayi_k$(request);
      } else {
        if (isInterface(tmp0_subject, Subscription)) {
          tmp = this.subscriptionNetworkTransport_1.execute_wzgayi_k$(request);
        } else {
          throw IllegalStateException_init_$Create$('');
        }
      }
    }
    return flowOn(tmp, this.dispatcher_1);
  };
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function _set_handler__a7vmh1($this, _set____db54di) {
    $this.handler_1 = _set____db54di;
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function _set_isClosed__sz8o0v($this, _set____db54di) {
    $this.isClosed_1 = _set____db54di;
  }
  function ChannelWrapper(wrapped) {
    this.wrapped_1 = wrapped;
    this.handler_1 = null;
    this.isClosed_1 = false;
  }
  ChannelWrapper.prototype.get_isClosedForReceive_v0r77d_k$ = function () {
    return this.wrapped_1.get_isClosedForReceive_v0r77d_k$();
  };
  ChannelWrapper.prototype.get_isClosedForSend_ajczci_k$ = function () {
    return this.wrapped_1.get_isClosedForSend_ajczci_k$();
  };
  ChannelWrapper.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.wrapped_1.get_isEmpty_zauvru_k$();
  };
  ChannelWrapper.prototype.get_onReceive_mimw11_k$ = function () {
    return this.wrapped_1.get_onReceive_mimw11_k$();
  };
  ChannelWrapper.prototype.get_onReceiveCatching_ajg9xa_k$ = function () {
    return this.wrapped_1.get_onReceiveCatching_ajg9xa_k$();
  };
  ChannelWrapper.prototype.get_onReceiveOrNull_5u62it_k$ = function () {
    return this.wrapped_1.get_onReceiveOrNull_5u62it_k$();
  };
  ChannelWrapper.prototype.get_onSend_hnoo40_k$ = function () {
    return this.wrapped_1.get_onSend_hnoo40_k$();
  };
  ChannelWrapper.prototype.cancel_2kogtl_k$ = function () {
    this.wrapped_1.cancel_2kogtl_k$();
  };
  ChannelWrapper.prototype.cancel_as6ug7_k$ = function (cause) {
    return this.wrapped_1.cancel_as6ug7_k$(cause);
  };
  ChannelWrapper.prototype.cancel_4b7aim_k$ = function (cause) {
    this.wrapped_1.cancel_4b7aim_k$(cause);
  };
  ChannelWrapper.prototype.invokeOnClose_88rhe6_k$ = function (handler) {
    this.wrapped_1.invokeOnClose_88rhe6_k$(handler);
  };
  ChannelWrapper.prototype.iterator_jk1svi_k$ = function () {
    return this.wrapped_1.iterator_jk1svi_k$();
  };
  ChannelWrapper.prototype.offer_pm4fdq_k$ = function (element) {
    return this.wrapped_1.offer_pm4fdq_k$(element);
  };
  ChannelWrapper.prototype.poll_21vi7_k$ = function () {
    return this.wrapped_1.poll_21vi7_k$();
  };
  ChannelWrapper.prototype.receive_ihhf9g_k$ = function ($cont) {
    return this.wrapped_1.receive_ihhf9g_k$($cont);
  };
  ChannelWrapper.prototype.receiveCatching_wrys2l_k$ = function ($cont) {
    var tmp = this.wrapped_1.receiveCatching_wrys2l_k$($cont);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return new ChannelResult(tmp.holder_1);
  };
  ChannelWrapper.prototype.receiveOrNull_5cvr9l_k$ = function ($cont) {
    return this.wrapped_1.receiveOrNull_5cvr9l_k$($cont);
  };
  ChannelWrapper.prototype.send_4idxxh_k$ = function (element, $cont) {
    return this.wrapped_1.send_4idxxh_k$(element, $cont);
  };
  ChannelWrapper.prototype.tryReceive_5r5v2p_k$ = function () {
    return this.wrapped_1.tryReceive_5r5v2p_k$();
  };
  ChannelWrapper.prototype.trySend_3hclq4_k$ = function (element) {
    return this.wrapped_1.trySend_3hclq4_k$(element);
  };
  ChannelWrapper.prototype.get_isClosed_rx8ttr_k$ = function () {
    return this.isClosed_1;
  };
  ChannelWrapper.prototype.setInvokeOnClose_8vzrec_k$ = function (handler) {
    this.handler_1 = handler;
  };
  ChannelWrapper.prototype.close_9zy44b_k$ = function (cause) {
    this.isClosed_1 = true;
    var closeAdded = this.wrapped_1.close_9zy44b_k$(cause);
    if (closeAdded) {
      var tmp0_safe_receiver = this.handler_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(cause);
    }
    this.handler_1 = null;
    return closeAdded;
  };
  function _get__merged__iwgnqe($this) {
    return $this._merged_1;
  }
  function _get__mergedFragmentIds__qyjyz6($this) {
    return $this._mergedFragmentIds_1;
  }
  function _set_hasNext__86v2bs($this, _set____db54di) {
    $this.hasNext_1 = _set____db54di;
  }
  function _set_isEmptyPayload__v1howk($this, _set____db54di) {
    $this.isEmptyPayload_1 = _set____db54di;
  }
  function mergeData($this, incrementalItem) {
    var tmp = incrementalItem.get_1mhr4y_k$('data');
    var data = (tmp == null ? true : isInterface(tmp, Map)) ? tmp : THROW_CCE();
    var tmp_0 = incrementalItem.get_1mhr4y_k$('path');
    var path = (!(tmp_0 == null) ? isInterface(tmp_0, List) : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = $this.merged_1.get_1mhr4y_k$('data');
    var mergedData = (!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) ? tmp_1 : THROW_CCE();
    if (!(data == null)) {
      var tmp_2 = nodeAtPath($this, mergedData, path);
      var nodeToMergeInto = (!(tmp_2 == null) ? isInterface(tmp_2, MutableMap) : false) ? tmp_2 : THROW_CCE();
      deepMerge($this, nodeToMergeInto, data);
      var tmp0_this = $this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this._mergedFragmentIds_1;
      var tmp_3 = incrementalItem.get_1mhr4y_k$('label');
      var tmp1_plusAssign = new DeferredFragmentIdentifier(path, (tmp_3 == null ? true : typeof tmp_3 === 'string') ? tmp_3 : THROW_CCE());
      tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
    }
  }
  function deepMerge($this, destination, map) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.get_value_j01efc_k$();
      var value = tmp$ret$2;
      var tmp;
      if (destination.containsKey_wgk31w_k$(key)) {
        var tmp_0 = destination.get_1mhr4y_k$(key);
        tmp = !(tmp_0 == null) ? isInterface(tmp_0, MutableMap) : false;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_1 = destination.get_1mhr4y_k$(key);
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
        destination.put_3mhbri_k$(key, value);
      }
    }
  }
  function jsonToMap($this, json) {
    var tmp = readAny(new BufferedSourceJsonReader(json));
    return (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
  }
  function nodeAtPath($this, map, path) {
    var node = map;
    var tmp0_iterator = path.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var key = tmp0_iterator.next_20eer_k$();
      var tmp;
      if (!(node == null) ? isInterface(node, List) : false) {
        var tmp_0 = node;
        tmp = tmp_0.get_fkrdnv_k$(typeof key === 'number' ? key : THROW_CCE());
      } else {
        if (!(node == null) ? isInterface(node, Map) : false)
          node;
        else
          THROW_CCE();
        var tmp$ret$0;
        // Inline function 'kotlin.collections.get' call
        var tmp0_get = node;
        tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(key);
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
    tmp._merged_1 = tmp$ret$0;
    this.merged_1 = this._merged_1;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0._mergedFragmentIds_1 = tmp$ret$1;
    this.mergedFragmentIds_1 = this._mergedFragmentIds_1;
    this.hasNext_1 = true;
    this.isEmptyPayload_1 = false;
  }
  DeferredJsonMerger.prototype.get_merged_gl73ud_k$ = function () {
    return this.merged_1;
  };
  DeferredJsonMerger.prototype.get_mergedFragmentIds_qwffot_k$ = function () {
    return this.mergedFragmentIds_1;
  };
  DeferredJsonMerger.prototype.get_hasNext_csdx38_k$ = function () {
    return this.hasNext_1;
  };
  DeferredJsonMerger.prototype.get_isEmptyPayload_65wr10_k$ = function () {
    return this.isEmptyPayload_1;
  };
  DeferredJsonMerger.prototype.merge_ugxy3j_k$ = function (payload) {
    var payloadMap = jsonToMap(this, payload);
    return this.merge_dewyvp_k$(payloadMap);
  };
  DeferredJsonMerger.prototype.merge_dewyvp_k$ = function (payload) {
    if (this.merged_1.isEmpty_y1axqb_k$()) {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this._merged_1;
      tmp0_plusAssign.putAll_mee1c3_k$(payload);
      return this.merged_1;
    }
    var tmp = payload.get_1mhr4y_k$('incremental');
    var incrementalList = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : null;
    if (incrementalList == null) {
      this.isEmptyPayload_1 = true;
    } else {
      this.isEmptyPayload_1 = false;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var mergedErrors = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$1 = ArrayList_init_$Create$();
      var mergedExtensions = tmp$ret$1;
      var tmp1_iterator = incrementalList.iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var incrementalItem = tmp1_iterator.next_20eer_k$();
        mergeData(this, incrementalItem);
        var tmp_0 = incrementalItem.get_1mhr4y_k$('errors');
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
        var tmp_1 = incrementalItem.get_1mhr4y_k$('extensions');
        var tmp3_safe_receiver = (!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) ? tmp_1 : null;
        if (tmp3_safe_receiver == null)
          null;
        else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          mergedExtensions.add_1j60pz_k$(tmp3_safe_receiver);
          tmp$ret$3 = Unit_getInstance();
        }
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$4 = !mergedErrors.isEmpty_y1axqb_k$();
      if (tmp$ret$4) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = this._merged_1;
        tmp1_set.put_3mhbri_k$('errors', mergedErrors);
      } else {
        this._merged_1.remove_8hbkc0_k$('errors');
      }
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !mergedExtensions.isEmpty_y1axqb_k$();
      if (tmp$ret$5) {
        // Inline function 'kotlin.collections.set' call
        var tmp2_set = this._merged_1;
        var tmp3_set = mapOf(to('incremental', mergedExtensions));
        tmp2_set.put_3mhbri_k$('extensions', tmp3_set);
      } else {
        this._merged_1.remove_8hbkc0_k$('extensions');
      }
    }
    var tmp_2 = this;
    var tmp_3 = payload.get_1mhr4y_k$('hasNext');
    var tmp4_elvis_lhs = (tmp_3 == null ? true : typeof tmp_3 === 'boolean') ? tmp_3 : THROW_CCE();
    tmp_2.hasNext_1 = tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs;
    return this.merged_1;
  };
  DeferredJsonMerger.prototype.reset_5tn5dq_k$ = function () {
    this._merged_1.clear_j9y8zo_k$();
    this._mergedFragmentIds_1.clear_j9y8zo_k$();
    this.hasNext_1 = true;
    this.isEmptyPayload_1 = false;
  };
  function isDeferred(_this__u8e3s4) {
    return _this__u8e3s4.get_keys_wop4xp_k$().contains_2ehdt1_k$('hasNext');
  }
  function readHeaders($this, source) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var headers = tmp$ret$0;
    $l$loop: while (true) {
      var line = source.readUtf8LineStrict_40ilic_k$();
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
      headers.add_1j60pz_k$(tmp4_plusAssign);
    }
    return headers;
  }
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function _get_dashDashBoundary__ud9wjh($this) {
    return $this.dashDashBoundary_1;
  }
  function _get_crlfDashDashBoundary__2662j8($this) {
    return $this.crlfDashDashBoundary_1;
  }
  function _set_partCount__2phkrt($this, _set____db54di) {
    $this.partCount_1 = _set____db54di;
  }
  function _get_partCount__w0c16d($this) {
    return $this.partCount_1;
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _set_noMoreParts__jdtjln($this, _set____db54di) {
    $this.noMoreParts_1 = _set____db54di;
  }
  function _get_noMoreParts__lcwc1l($this) {
    return $this.noMoreParts_1;
  }
  function _set_currentPart__l4fl2x($this, _set____db54di) {
    $this.currentPart_1 = _set____db54di;
  }
  function _get_currentPart__jmaakb($this) {
    return $this.currentPart_1;
  }
  function PartSource($outer) {
    this.$this_1 = $outer;
  }
  PartSource.prototype.close_ymq55z_k$ = function () {
    if (equals_0(this.$this_1.currentPart_1, this)) {
      this.$this_1.currentPart_1 = null;
    }
  };
  PartSource.prototype.read_nz46cz_k$ = function (sink, byteCount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.internal.PartSource.read.<anonymous>' call
      tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = equals_0(this.$this_1.currentPart_1, this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.internal.PartSource.read.<anonymous>' call
      tmp$ret$1 = 'closed';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var limit = currentPartBytesRemaining(this.$this_1, byteCount);
    return limit.equals(new Long(0, 0)) ? new Long(-1, -1) : this.$this_1.source_1.read_nz46cz_k$(sink, limit);
  };
  PartSource.prototype.timeout_lq9okf_k$ = function () {
    return this.$this_1.source_1.timeout_lq9okf_k$();
  };
  function currentPartBytesRemaining($this, maxResult) {
    $this.source_1.require_btziny_k$(toLong($this.crlfDashDashBoundary_1.get_size_woubt6_k$()));
    var delimiterIndex = $this.source_1.get_buffer_bmaafd_k$().indexOf_mitgi7_k$($this.crlfDashDashBoundary_1);
    var tmp;
    if (delimiterIndex.equals(new Long(-1, -1))) {
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = $this.source_1.get_buffer_bmaafd_k$().get_size_woubt6_k$();
      var tmp1_minus = $this.crlfDashDashBoundary_1.get_size_woubt6_k$();
      tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(toLong(tmp1_minus));
      var tmp2_plus = tmp$ret$0;
      tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(new Long(1, 0));
      var tmp3_minOf = tmp$ret$1;
      tmp$ret$2 = maxResult.compareTo_n4fqi2_k$(tmp3_minOf) <= 0 ? maxResult : tmp3_minOf;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$3 = maxResult.compareTo_n4fqi2_k$(delimiterIndex) <= 0 ? maxResult : delimiterIndex;
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function _get_afterBoundaryOptions__ao4uyb($this) {
    return $this.afterBoundaryOptions_1;
  }
  function Part(headers, body) {
    this.headers_1 = headers;
    this.body_1 = body;
  }
  Part.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  Part.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Part.prototype.close_ymq55z_k$ = function () {
    this.body_1.close_ymq55z_k$();
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
  function MultipartReader(source, boundary) {
    Companion_getInstance_10();
    this.source_1 = source;
    this.boundary_1 = boundary;
    this.dashDashBoundary_1 = (new Buffer()).writeUtf8_688wup_k$('--').writeUtf8_688wup_k$(this.boundary_1).readByteString_nzt46n_k$();
    this.crlfDashDashBoundary_1 = (new Buffer()).writeUtf8_688wup_k$('\r\n--').writeUtf8_688wup_k$(this.boundary_1).readByteString_nzt46n_k$();
    this.partCount_1 = 0;
    this.closed_1 = false;
    this.noMoreParts_1 = false;
    this.currentPart_1 = null;
    this.afterBoundaryOptions_1 = Companion_getInstance_1().of_hri3v1_k$([Companion_getInstance_2().encodeUtf8_lzqk50_k$('\r\n--' + this.boundary_1 + '--'), Companion_getInstance_2().encodeUtf8_lzqk50_k$('\r\n'), Companion_getInstance_2().encodeUtf8_lzqk50_k$('--'), Companion_getInstance_2().encodeUtf8_lzqk50_k$(' '), Companion_getInstance_2().encodeUtf8_lzqk50_k$('\t')]);
  }
  MultipartReader.prototype.get_boundary_48rugj_k$ = function () {
    return this.boundary_1;
  };
  MultipartReader.prototype.nextPart_njz4p2_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.internal.MultipartReader.nextPart.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (this.noMoreParts_1)
      return null;
    if (this.partCount_1 === 0 ? this.source_1.rangeEquals_xn2170_k$(new Long(0, 0), this.dashDashBoundary_1) : false) {
      this.source_1.skip_vl0dd4_k$(toLong(this.dashDashBoundary_1.get_size_woubt6_k$()));
    } else {
      $l$loop: while (true) {
        var toSkip = currentPartBytesRemaining(this, new Long(8192, 0));
        if (toSkip.equals(new Long(0, 0)))
          break $l$loop;
        this.source_1.skip_vl0dd4_k$(toSkip);
      }
      this.source_1.skip_vl0dd4_k$(toLong(this.crlfDashDashBoundary_1.get_size_woubt6_k$()));
    }
    var whitespace = false;
    afterBoundaryLoop: while (true) {
      var tmp0_subject = this.source_1.select_rfub5h_k$(this.afterBoundaryOptions_1);
      switch (tmp0_subject) {
        case 0:
          if (this.partCount_1 === 0) {
            throw ApolloException_init_$Create$('expected at least 1 part', null, 2, null);
          }

          this.noMoreParts_1 = true;
          return null;
        case 1:
          var tmp1_this = this;
          var tmp2 = tmp1_this.partCount_1;
          tmp1_this.partCount_1 = tmp2 + 1 | 0;
          ;
          break afterBoundaryLoop;
        case 2:
          if (whitespace) {
            throw ApolloException_init_$Create$('unexpected characters after boundary', null, 2, null);
          }

          if (this.partCount_1 === 0) {
            throw ApolloException_init_$Create$('expected at least 1 part', null, 2, null);
          }

          this.noMoreParts_1 = true;
          return null;
        case 3:
        case 4:
          whitespace = true;
          continue afterBoundaryLoop;
        case -1:
          throw ApolloException_init_$Create$('unexpected characters after boundary', null, 2, null);
      }
    }
    var headers = readHeaders(Companion_getInstance_10(), this.source_1);
    var partSource = new PartSource(this);
    this.currentPart_1 = partSource;
    return new Part(headers, buffer(partSource));
  };
  MultipartReader.prototype.close_ymq55z_k$ = function () {
    if (this.closed_1)
      return Unit_getInstance();
    this.closed_1 = true;
    this.currentPart_1 = null;
    this.source_1.close_ymq55z_k$();
  };
  function transformWhile(_this__u8e3s4, transform) {
    return flow(transformWhile$slambda_0(_this__u8e3s4, transform, null));
  }
  function collectWhile(_this__u8e3s4, predicate, $cont) {
    var tmp = new $collectWhileCOROUTINE$0(_this__u8e3s4, predicate, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    this.owner_1 = owner;
    captureStack(this, AbortFlowException);
  }
  AbortFlowException.prototype.get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  AbortFlowException.prototype.checkOwnership_t5vug4_k$ = function (owner) {
    if (!(this.owner_1 === owner))
      throw this;
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  function $emitCOROUTINE$1(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  $emitCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$transform_1(this._this__u8e3s4__1.$this_flow_1, this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  function _no_name_provided__qut3iv($transform, $this_flow) {
    this.$transform_1 = $transform;
    this.$this_flow_1 = $this_flow;
  }
  _no_name_provided__qut3iv.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    var tmp = new $emitCOROUTINE$1(this, value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function transformWhile$slambda$slambda($collector, resultContinuation) {
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  transformWhile$slambda$slambda.prototype.invoke_tr8wvu_k$ = function (it, $cont) {
    var tmp = this.create_aq37ol_k$(it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  transformWhile$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  transformWhile$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.it_1, this);
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
  transformWhile$slambda$slambda.prototype.create_aq37ol_k$ = function (it, completion) {
    var i = new transformWhile$slambda$slambda(this.$collector_1, completion);
    i.it_1 = it;
    return i;
  };
  transformWhile$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function transformWhile$slambda$slambda_0($collector, resultContinuation) {
    var i = new transformWhile$slambda$slambda($collector, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_tr8wvu_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function transformWhile$slambda($this_transformWhile, $transform, resultContinuation) {
    this.$this_transformWhile_1 = $this_transformWhile;
    this.$transform_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  transformWhile$slambda.prototype.invoke_kygzj5_k$ = function ($this$flow, $cont) {
    var tmp = this.create_w99igs_k$($this$flow, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  transformWhile$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_kygzj5_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  transformWhile$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv(this.$transform_1, this.$this$flow_1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_1 = transformWhile$slambda$slambda_0(this.collector0__1, null);
            suspendResult = this.$this_transformWhile_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              e.checkOwnership_t5vug4_k$(this.collector0__1);
              this.set_state_a96kl8_k$(4);
              continue $sm;
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
  transformWhile$slambda.prototype.create_w99igs_k$ = function ($this$flow, completion) {
    var i = new transformWhile$slambda(this.$this_transformWhile_1, this.$transform_1, completion);
    i.$this$flow_1 = $this$flow;
    return i;
  };
  transformWhile$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_w99igs_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function transformWhile$slambda_0($this_transformWhile, $transform, resultContinuation) {
    var i = new transformWhile$slambda($this_transformWhile, $transform, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.invoke_kygzj5_k$($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $emitCOROUTINE$2(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  $emitCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
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
  function _no_name_provided__qut3iv_0($predicate) {
    this.$predicate_1 = $predicate;
  }
  _no_name_provided__qut3iv_0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    var tmp = new $emitCOROUTINE$2(this, value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function collectWhile$slambda($collector, resultContinuation) {
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectWhile$slambda.prototype.invoke_tr8wvu_k$ = function (it, $cont) {
    var tmp = this.create_aq37ol_k$(it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  collectWhile$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  collectWhile$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.it_1, this);
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
  collectWhile$slambda.prototype.create_aq37ol_k$ = function (it, completion) {
    var i = new collectWhile$slambda(this.$collector_1, completion);
    i.it_1 = it;
    return i;
  };
  collectWhile$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function collectWhile$slambda_0($collector, resultContinuation) {
    var i = new collectWhile$slambda($collector, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_tr8wvu_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectWhileCOROUTINE$0(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  $collectWhileCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv_0(this.predicate_1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_1 = collectWhile$slambda_0(this.collector0__1, null);
            suspendResult = this._this__u8e3s4__1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              e.checkOwnership_t5vug4_k$(this.collector0__1);
              this.set_state_a96kl8_k$(4);
              continue $sm;
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
  function get_isMultipart(_this__u8e3s4) {
    var tmp0_safe_receiver = valueOf(_this__u8e3s4.get_headers_ef25jx_k$(), 'Content-Type');
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
    var tmp1_map = split$default(contentType, tmp, false, 0, 6, null);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.internal.getBoundaryParameter.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      tmp$ret$1 = tmp$ret$0;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    var parameters = tmp$ret$3;
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = parameters.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
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
    this.$multipartReader_1 = $multipartReader;
    this.$response_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  multipartBodyFlow$slambda.prototype.invoke_dil6q5_k$ = function ($this$flow, $cont) {
    var tmp = this.create_insjw0_k$($this$flow, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  multipartBodyFlow$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dil6q5_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  multipartBodyFlow$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = ensureNotNull(this.$response_1.get_body_wojkyz_k$());
            var tmp0_elvis_lhs = getBoundaryParameter(valueOf(this.$response_1.get_headers_ef25jx_k$(), 'Content-Type'));
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw ApolloException_init_$Create$('Expected the Content-Type to have a boundary parameter', null, 2, null);
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            this.$multipartReader_1._v = new MultipartReader(tmp_0, tmp_1);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.tmp1_elvis_lhs0__1 = ensureNotNull(this.$multipartReader_1._v).nextPart_njz4p2_k$();
            if (this.tmp1_elvis_lhs0__1 == null) {
              this.set_state_a96kl8_k$(4);
              var tmp_2 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT1__1 = this.tmp1_elvis_lhs0__1;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            this.part2__1 = this.WHEN_RESULT1__1;
            this.set_state_a96kl8_k$(3);
            suspendResult = this.$this$flow_1.emit_1fbrsb_k$(this.part2__1.get_body_wojkyz_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  multipartBodyFlow$slambda.prototype.create_insjw0_k$ = function ($this$flow, completion) {
    var i = new multipartBodyFlow$slambda(this.$multipartReader_1, this.$response_1, completion);
    i.$this$flow_1 = $this$flow;
    return i;
  };
  multipartBodyFlow$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_insjw0_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function multipartBodyFlow$slambda_0($multipartReader, $response, resultContinuation) {
    var i = new multipartBodyFlow$slambda($multipartReader, $response, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.invoke_dil6q5_k$($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function multipartBodyFlow$slambda_1($multipartReader, resultContinuation) {
    this.$multipartReader_1 = $multipartReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  multipartBodyFlow$slambda_1.prototype.invoke_cen14q_k$ = function ($this$onCompletion, it, $cont) {
    var tmp = this.create_z58465_k$($this$onCompletion, it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  multipartBodyFlow$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_cen14q_k$(tmp, (p2 == null ? true : p2 instanceof Error) ? p2 : THROW_CCE(), $cont);
  };
  multipartBodyFlow$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          try {
            var tmp0_success = Companion_getInstance_3();
            var tmp0_safe_receiver = this.$multipartReader_1._v;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp0_safe_receiver.close_ymq55z_k$();
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
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  multipartBodyFlow$slambda_1.prototype.create_z58465_k$ = function ($this$onCompletion, it, completion) {
    var i = new multipartBodyFlow$slambda_1(this.$multipartReader_1, completion);
    i.$this$onCompletion_1 = $this$onCompletion;
    i.it_1 = it;
    return i;
  };
  function multipartBodyFlow$slambda_2($multipartReader, resultContinuation) {
    var i = new multipartBodyFlow$slambda_1($multipartReader, resultContinuation);
    var l = function ($this$onCompletion, it, $cont) {
      return i.invoke_cen14q_k$($this$onCompletion, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function NetworkTransport() {
  }
  function BatchingHttpInterceptor_init_$Init$(batchIntervalMillis, maxBatchSize, exposeErrorBody, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      batchIntervalMillis = new Long(10, 0);
    if (!(($mask0 & 2) === 0))
      maxBatchSize = 10;
    if (!(($mask0 & 4) === 0))
      exposeErrorBody = false;
    BatchingHttpInterceptor.call($this, batchIntervalMillis, maxBatchSize, exposeErrorBody);
    return $this;
  }
  function BatchingHttpInterceptor_init_$Create$(batchIntervalMillis, maxBatchSize, exposeErrorBody, $mask0, $marker) {
    return BatchingHttpInterceptor_init_$Init$(batchIntervalMillis, maxBatchSize, exposeErrorBody, $mask0, $marker, Object.create(BatchingHttpInterceptor.prototype));
  }
  function _get_batchIntervalMillis__oy87is($this) {
    return $this.batchIntervalMillis_1;
  }
  function _get_maxBatchSize__sb9kx8($this) {
    return $this.maxBatchSize_1;
  }
  function _get_exposeErrorBody__586il1($this) {
    return $this.exposeErrorBody_1;
  }
  function _get_creationTime__rhc0vz($this) {
    return $this.creationTime_1;
  }
  function _get_dispatcher__dketks_2($this) {
    return $this.dispatcher_1;
  }
  function _get_scope__bi2zur($this) {
    return $this.scope_1;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function _set_disposed__tklm7i($this, _set____db54di) {
    $this.disposed_1 = _set____db54di;
  }
  function _get_disposed__snm4au($this) {
    return $this.disposed_1;
  }
  function _set_interceptorChain__f7q6yj($this, _set____db54di) {
    $this.interceptorChain_1 = _set____db54di;
  }
  function _get_interceptorChain__qq9lxt($this) {
    return $this.interceptorChain_1;
  }
  function PendingRequest(request) {
    this.request_1 = request;
    var tmp = this;
    tmp.deferred_1 = CompletableDeferred$default(null, 1, null);
  }
  PendingRequest.prototype.get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  PendingRequest.prototype.get_deferred_l376u0_k$ = function () {
    return this.deferred_1;
  };
  function _get_pendingRequests__3quosq($this) {
    return $this.pendingRequests_1;
  }
  function executePendingRequests($this, $cont) {
    var tmp = new $executePendingRequestsCOROUTINE$4($this, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.configureApolloClientBuilder_lolikd_k$ = function (apolloClientBuilder, canBeBatched) {
    apolloClientBuilder.canBeBatched_cioqad_k$(canBeBatched);
  };
  Companion_2.prototype.configureApolloCall_63pm5e_k$ = function (apolloCall, canBeBatched) {
    apolloCall.canBeBatched_cioqad_k$(canBeBatched);
  };
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function BatchingHttpInterceptor$intercept$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  BatchingHttpInterceptor$intercept$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  BatchingHttpInterceptor$intercept$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  BatchingHttpInterceptor$intercept$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            var tmp0_minus = this.this$0__1.batchIntervalMillis_1.minus_llf5ei_k$(currentTimeMillis().minus_llf5ei_k$(this.this$0__1.creationTime_1).rem_9rbcjo_k$(this.this$0__1.batchIntervalMillis_1));
            suspendResult = delay(tmp0_minus.minus_llf5ei_k$(new Long(1, 0)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = executePendingRequests(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  BatchingHttpInterceptor$intercept$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BatchingHttpInterceptor$intercept$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  BatchingHttpInterceptor$intercept$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function BatchingHttpInterceptor$intercept$slambda_0(this$0, resultContinuation) {
    var i = new BatchingHttpInterceptor$intercept$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BatchingHttpInterceptor$executePendingRequests$body$1($allBodies) {
    this.$allBodies_1 = $allBodies;
    this.contentType_1 = 'application/json';
    this.contentLength_1 = new Long(-1, -1);
  }
  BatchingHttpInterceptor$executePendingRequests$body$1.prototype.get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  BatchingHttpInterceptor$executePendingRequests$body$1.prototype.get_contentLength_a5o8yy_k$ = function () {
    return this.contentLength_1;
  };
  BatchingHttpInterceptor$executePendingRequests$body$1.prototype.writeTo_258rns_k$ = function (bufferedSink) {
    var writer = BufferedSinkJsonWriter_init_$Create$(bufferedSink, null, 2, null);
    // Inline function 'com.apollographql.apollo3.api.json.writeArray' call
    // Inline function 'kotlin.contracts.contract' call
    writer.beginArray_hxn19s_k$();
    // Inline function 'com.apollographql.apollo3.network.http.<no name provided>.writeTo.<anonymous>' call
    if (writer instanceof BufferedSinkJsonWriter)
      writer;
    else
      THROW_CCE();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.$allBodies_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.apollographql.apollo3.network.http.<no name provided>.writeTo.<anonymous>.<anonymous>' call
      var buffer = new Buffer();
      element.writeTo_258rns_k$(buffer);
      writer.jsonValue_dlj0bs_k$(buffer.readUtf8_echivt_k$());
    }
    writer.endArray_s2tmpq_k$();
  };
  function $interceptCOROUTINE$3(_this__u8e3s4, request, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
    this.chain_1 = chain;
  }
  $interceptCOROUTINE$3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(14);
            var tmp_0 = this;
            var tmp0_safe_receiver = valueOf(this.request_1.get_headers_ef25jx_k$(), Companion_getInstance_0().get_CAN_BE_BATCHED_mw3tpx_k$());
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toBoolean(tmp0_safe_receiver);
            tmp_0.canBeBatched0__1 = tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
            if (!this.canBeBatched0__1) {
              this.set_state_a96kl8_k$(13);
              var tmp_1 = this.request_1.newBuilder$default_2xuoko_k$(null, null, 3, null);
              var tmp1_filter = this.request_1.get_headers_ef25jx_k$();
              var tmp0_filterTo = ArrayList_init_$Create$();
              var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                if (!(element.get_name_woqyms_k$() === Companion_getInstance_0().get_CAN_BE_BATCHED_mw3tpx_k$())) {
                  tmp0_filterTo.add_1j60pz_k$(element);
                }
              }
              suspendResult = this.chain_1.proceed_qa7mgv_k$(tmp_1.addHeaders_y6idf8_k$(tmp0_filterTo).build_1k0s4u_k$(), this);
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
            this._this__u8e3s4__1.interceptorChain_1 = this.chain_1;
            this.pendingRequest1__1 = new PendingRequest(this.request_1);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp2_withLock3__1 = this._this__u8e3s4__1.mutex_1;
            this.set_state_a96kl8_k$(3);
            suspendResult = this.tmp2_withLock3__1.lock_25dizd_k$(null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_3 = this;
            this._this__u8e3s4__1.pendingRequests_1.add_1j60pz_k$(this.pendingRequest1__1);
            ;
            tmp_3.tmp$ret$05__1 = this._this__u8e3s4__1.pendingRequests_1.get_size_woubt6_k$() >= this._this__u8e3s4__1.maxBatchSize_1;
            this.set_exceptionState_s9sevl_k$(14);
            this.set_state_a96kl8_k$(7);
            var tmp_4 = this;
            continue $sm;
          case 6:
            this.set_exceptionState_s9sevl_k$(14);
            this.t6__1 = this.get_exception_x0n6w6_k$();
            this.tmp2_withLock3__1.unlock_uksyr8_k$(null);
            ;
            throw this.t6__1;
          case 7:
            this.tmp7__1 = this.tmp$ret$05__1;
            this.tmp2_withLock3__1.unlock_uksyr8_k$(null);
            ;
            this.tmp$ret$42__1 = this.tmp7__1;
            this.set_state_a96kl8_k$(9);
            continue $sm;
          case 8:
            this.tmp2_withLock3__1.unlock_uksyr8_k$(null);
            ;
            if (false) {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            this.set_state_a96kl8_k$(9);
            continue $sm;
          case 9:
            this.sendNow8__1 = this.tmp$ret$42__1;
            if (this.sendNow8__1) {
              this.set_state_a96kl8_k$(10);
              suspendResult = executePendingRequests(this._this__u8e3s4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              launch$default(this._this__u8e3s4__1.scope_1, null, null, BatchingHttpInterceptor$intercept$slambda_0(this._this__u8e3s4__1, null), 3, null);
              this.set_state_a96kl8_k$(11);
              continue $sm;
            }

            break;
          case 10:
            this.set_state_a96kl8_k$(11);
            continue $sm;
          case 11:
            this.set_state_a96kl8_k$(12);
            suspendResult = this.pendingRequest1__1.deferred_1.await_xhs9og_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            return suspendResult;
          case 13:
            return suspendResult;
          case 14:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 14) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function $executePendingRequestsCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $executePendingRequestsCOROUTINE$4.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(12);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.tmp0_withLock1__1 = this._this__u8e3s4__1.mutex_1;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.tmp0_withLock1__1.lock_25dizd_k$(null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_1 = this;
            var copy = toList(this._this__u8e3s4__1.pendingRequests_1);
            this._this__u8e3s4__1.pendingRequests_1.clear_j9y8zo_k$();
            tmp_1.tmp$ret$03__1 = copy;
            this.set_exceptionState_s9sevl_k$(12);
            this.set_state_a96kl8_k$(6);
            var tmp_2 = this;
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(12);
            this.t4__1 = this.get_exception_x0n6w6_k$();
            this.tmp0_withLock1__1.unlock_uksyr8_k$(null);
            ;
            throw this.t4__1;
          case 6:
            this.tmp5__1 = this.tmp$ret$03__1;
            this.tmp0_withLock1__1.unlock_uksyr8_k$(null);
            ;
            this.tmp$ret$40__1 = this.tmp5__1;
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 7:
            this.tmp0_withLock1__1.unlock_uksyr8_k$(null);
            ;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 8:
            this.pending6__1 = this.tmp$ret$40__1;
            if (this.pending6__1.isEmpty_y1axqb_k$()) {
              return Unit_getInstance();
            }

            this.firstRequest7__1 = first(this.pending6__1).request_1;
            var tmp_3 = this;
            var tmp1_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.pending6__1, 10));
            var tmp0_iterator = this.pending6__1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              var tmp0_elvis_lhs = item.request_1.get_body_wojkyz_k$();
              var tmp_4;
              if (tmp0_elvis_lhs == null) {
                throw IllegalStateException_init_$Create$('empty body while batching queries');
              } else {
                tmp_4 = tmp0_elvis_lhs;
              }
              tmp1_mapTo.add_1j60pz_k$(tmp_4);
            }

            tmp_3.allBodies8__1 = tmp1_mapTo;
            var tmp_5 = this;
            var tmp2_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.pending6__1, 10));
            var tmp0_iterator_0 = this.pending6__1.iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
              var item_0 = tmp0_iterator_0.next_20eer_k$();
              tmp2_mapTo.add_1j60pz_k$(item_0.request_1.get_headers_ef25jx_k$());
            }

            var tmp3_reduce = tmp2_mapTo;
            var iterator = tmp3_reduce.iterator_jk1svi_k$();
            if (!iterator.hasNext_bitz1p_k$())
              throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
            var accumulator = iterator.next_20eer_k$();
            while (iterator.hasNext_bitz1p_k$()) {
              var tmp4__anonymous__pkmkx7 = accumulator;
              var tmp5__anonymous__kpxxpo = iterator.next_20eer_k$();
              accumulator = toList(intersect(tmp4__anonymous__pkmkx7, toSet(tmp5__anonymous__kpxxpo)));
            }

            var tmp7_filter = accumulator;
            var tmp6_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp7_filter.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator_1.next_20eer_k$();
              if (!(element.get_name_woqyms_k$() === Companion_getInstance_0().get_CAN_BE_BATCHED_mw3tpx_k$())) {
                tmp6_filterTo.add_1j60pz_k$(element);
              }
            }

            tmp_5.commonHeaders9__1 = tmp6_filterTo;
            var tmp_6 = this;
            tmp_6.body10__1 = new BatchingHttpInterceptor$executePendingRequests$body$1(this.allBodies8__1);
            this.request11__1 = (new Builder_1(HttpMethod_Post_getInstance(), this.firstRequest7__1.get_url_18iuii_k$())).body_38gmcs_k$(this.body10__1).headers_3z5tgz_k$(this.commonHeaders9__1).build_1k0s4u_k$();
            this.exception12__1 = null;
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(9);
            suspendResult = ensureNotNull(this._this__u8e3s4__1.interceptorChain_1).proceed_qa7mgv_k$(this.request11__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var response = suspendResult;
            var containsArg = response.get_statusCode_g2w4u0_k$();
            if (!(200 <= containsArg ? containsArg <= 299 : false)) {
              var tmp_7;
              if (this._this__u8e3s4__1.exposeErrorBody_1) {
                tmp_7 = response.get_body_wojkyz_k$();
              } else {
                var tmp0_safe_receiver = response.get_body_wojkyz_k$();
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.close_ymq55z_k$();
                }
                tmp_7 = null;
              }
              var maybeBody = tmp_7;
              var tmp_8 = response.get_statusCode_g2w4u0_k$();
              var tmp_9 = response.get_headers_ef25jx_k$();
              var tmp_10 = 'HTTP error ' + response.get_statusCode_g2w4u0_k$() + ' while executing batched query';
              throw ApolloHttpException_init_$Create$(tmp_8, tmp_9, maybeBody, tmp_10, null, 16, null);
            }

            var tmp1_elvis_lhs = response.get_body_wojkyz_k$();
            var tmp_11;
            if (tmp1_elvis_lhs == null) {
              throw ApolloException_init_$Create$('null body when executing batched query', null, 2, null);
            } else {
              tmp_11 = tmp1_elvis_lhs;
            }

            var responseBody = tmp_11;
            var list = get_AnyAdapter().fromJson_vznj7e_k$(new BufferedSourceJsonReader(responseBody), Key_getInstance().get_Empty_i9b85g_k$());
            if (!isInterface(list, List)) {
              throw ApolloException_init_$Create$('batched query response is not a list when executing batched query', null, 2, null);
            }

            if (!(list.get_size_woubt6_k$() === this.pending6__1.get_size_woubt6_k$())) {
              var tmp_12 = 'batched query response count (' + list.get_size_woubt6_k$() + ') does not match the requested queries (' + this.pending6__1.get_size_woubt6_k$() + ')';
              throw ApolloException_init_$Create$(tmp_12, null, 2, null);
            }

            var tmp_13 = this;
            var tmp9_map = list;
            var tmp8_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp9_map, 10));
            var tmp0_iterator_2 = tmp9_map.iterator_jk1svi_k$();
            while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
              var item_1 = tmp0_iterator_2.next_20eer_k$();
              if (item_1 == null) {
                throw ApolloException_init_$Create$('batched query response contains a null item', null, 2, null);
              }
              var buffer = new Buffer();
              var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
              get_AnyAdapter().toJson_gtgp5p_k$(tmp0__anonymous__q1qw7t, Key_getInstance().get_Empty_i9b85g_k$(), item_1);
              tmp8_mapTo.add_1j60pz_k$(buffer.readByteString_nzt46n_k$());
            }

            tmp_13.TRY_RESULT13__1 = tmp8_mapTo;
            this.set_exceptionState_s9sevl_k$(12);
            this.set_state_a96kl8_k$(11);
            continue $sm;
          case 10:
            this.set_exceptionState_s9sevl_k$(12);
            var tmp_14 = this.get_exception_x0n6w6_k$();
            if (tmp_14 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_15 = this;
              var tmp_16 = this;
              var tmp2_subject = e;
              var tmp_17;
              if (tmp2_subject instanceof ApolloException) {
                tmp_17 = e;
              } else {
                tmp_17 = new ApolloException('batched query failed with exception', e);
              }
              tmp_16.exception12__1 = tmp_17;
              tmp_15.TRY_RESULT13__1 = null;
              this.set_state_a96kl8_k$(11);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 11:
            this.set_exceptionState_s9sevl_k$(12);
            var result = this.TRY_RESULT13__1;
            if (!(this.exception12__1 == null)) {
              var tmp0_iterator_3 = this.pending6__1.iterator_jk1svi_k$();
              while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
                var element_0 = tmp0_iterator_3.next_20eer_k$();
                element_0.deferred_1.completeExceptionally_7s0ccc_k$(this.exception12__1);
              }
              return Unit_getInstance();
            } else {
              var tmp10_forEachIndexed = ensureNotNull(result);
              var index = 0;
              var tmp0_iterator_4 = tmp10_forEachIndexed.iterator_jk1svi_k$();
              while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
                var item_2 = tmp0_iterator_4.next_20eer_k$();
                var tmp1 = index;
                index = tmp1 + 1 | 0;
                var tmp11__anonymous__tkubxh = checkIndexOverflow(tmp1);
                this.pending6__1.get_fkrdnv_k$(tmp11__anonymous__tkubxh).deferred_1.complete_8y7ynm_k$((new Builder_2(200)).body_ne46js_k$(item_2).build_1k0s4u_k$());
              }
            }

            return Unit_getInstance();
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function BatchingHttpInterceptor(batchIntervalMillis, maxBatchSize, exposeErrorBody) {
    Companion_getInstance_11();
    this.batchIntervalMillis_1 = batchIntervalMillis;
    this.maxBatchSize_1 = maxBatchSize;
    this.exposeErrorBody_1 = exposeErrorBody;
    this.creationTime_1 = currentTimeMillis();
    this.dispatcher_1 = new CloseableSingleThreadDispatcher();
    this.scope_1 = CoroutineScope(this.dispatcher_1.get_coroutineDispatcher_vpa8ju_k$());
    var tmp = this;
    tmp.mutex_1 = Mutex$default(false, 1, null);
    this.disposed_1 = false;
    this.interceptorChain_1 = null;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.pendingRequests_1 = tmp$ret$0;
  }
  BatchingHttpInterceptor.prototype.intercept_8ju0mj_k$ = function (request, chain, $cont) {
    var tmp = new $interceptCOROUTINE$3(this, request, chain, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  BatchingHttpInterceptor.prototype.dispose_3n44we_k$ = function () {
    if (!this.disposed_1) {
      this.interceptorChain_1 = null;
      cancel$default(this.scope_1, null, 1, null);
      this.dispatcher_1.close_ymq55z_k$();
      this.disposed_1 = true;
    }
  };
  function _get_headers__gprxor($this) {
    return $this.headers_1;
  }
  function HeadersInterceptor(headers) {
    this.headers_1 = headers;
  }
  HeadersInterceptor.prototype.intercept_8ju0mj_k$ = function (request, chain, $cont) {
    return chain.proceed_qa7mgv_k$(request.newBuilder$default_2xuoko_k$(null, null, 3, null).addHeaders_y6idf8_k$(this.headers_1).build_1k0s4u_k$(), $cont);
  };
  function HttpEngine() {
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function HttpInfo(startMillis, endMillis, statusCode, headers) {
    Key_getInstance_2();
    this.startMillis_1 = startMillis;
    this.endMillis_1 = endMillis;
    this.statusCode_1 = statusCode;
    this.headers_1 = headers;
  }
  HttpInfo.prototype.get_startMillis_jza5nl_k$ = function () {
    return this.startMillis_1;
  };
  HttpInfo.prototype.get_endMillis_w46ezc_k$ = function () {
    return this.endMillis_1;
  };
  HttpInfo.prototype.get_statusCode_g2w4u0_k$ = function () {
    return this.statusCode_1;
  };
  HttpInfo.prototype.get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  HttpInfo.prototype.get_millisStart_pa1xgt_k$ = function () {
    return this.startMillis_1;
  };
  HttpInfo.prototype.get_millisEnd_5xtqlw_k$ = function () {
    return this.endMillis_1;
  };
  HttpInfo.prototype.get_key_18j28a_k$ = function () {
    return Key_getInstance_2();
  };
  function HttpInterceptor() {
  }
  function HttpInterceptorChain() {
  }
  function _get_interceptors__h4min7_0($this) {
    return $this.interceptors_1;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function DefaultHttpInterceptorChain(interceptors, index) {
    this.interceptors_1 = interceptors;
    this.index_1 = index;
  }
  DefaultHttpInterceptorChain.prototype.proceed_qa7mgv_k$ = function (request, $cont) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.index_1 < this.interceptors_1.get_size_woubt6_k$();
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
    return this.interceptors_1.get_fkrdnv_k$(this.index_1).intercept_8ju0mj_k$(request, new DefaultHttpInterceptorChain(this.interceptors_1, this.index_1 + 1 | 0), $cont);
  };
  function _set_httpRequestComposer__vszdfi($this, _set____db54di) {
    $this.httpRequestComposer_1 = _set____db54di;
  }
  function _get_httpRequestComposer__pxefna($this) {
    return $this.httpRequestComposer_1;
  }
  function _set_serverUrl__a3flyf($this, _set____db54di) {
    $this.serverUrl_1 = _set____db54di;
  }
  function _get_serverUrl__j7eug5($this) {
    return $this.serverUrl_1;
  }
  function _set_engine__9t08wl($this, _set____db54di) {
    $this.engine_1 = _set____db54di;
  }
  function _get_engine__b9qtjd($this) {
    return $this.engine_1;
  }
  function _get_interceptors__h4min7_1($this) {
    return $this.interceptors_1;
  }
  function _set_exposeErrorBody__fbwq3l($this, _set____db54di) {
    $this.exposeErrorBody_1 = _set____db54di;
  }
  function _get_exposeErrorBody__586il1_0($this) {
    return $this.exposeErrorBody_1;
  }
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
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    this.$httpResponse_1 = $httpResponse;
    this.$millisStart_1 = $millisStart;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.invoke_qn6izx_k$ = function (value, $cont) {
    var tmp = this.create_hkqsfc_k$(value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qn6izx_k$(p1 instanceof ApolloResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(withHttpInfo(this.value_1, this.this$0__1, this.$request_1.get_requestUuid_wwyd8h_k$(), this.$httpResponse_1, this.$millisStart_1), this);
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
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.create_hkqsfc_k$ = function (value, completion) {
    var i = new HttpNetworkTransport$execute$slambda$o$collect$slambda(this.$collector_1, this.this$0__1, this.$request_1, this.$httpResponse_1, this.$millisStart_1, completion);
    i.value_1 = value;
    return i;
  };
  HttpNetworkTransport$execute$slambda$o$collect$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_hkqsfc_k$(value instanceof ApolloResponse ? value : THROW_CCE(), completion);
  };
  function HttpNetworkTransport$execute$slambda$o$collect$slambda_0($collector, this$0, $request, $httpResponse, $millisStart, resultContinuation) {
    var i = new HttpNetworkTransport$execute$slambda$o$collect$slambda($collector, this$0, $request, $httpResponse, $millisStart, resultContinuation);
    var l = function (value, $cont) {
      return i.invoke_qn6izx_k$(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = HttpNetworkTransport$execute$slambda$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.this$0__1, this._this__u8e3s4__1.$request_1, this._this__u8e3s4__1.$httpResponse_1, this._this__u8e3s4__1.$millisStart_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  function _no_name_provided__qut3iv_1($tmp0_map, this$0, $request, $httpResponse, $millisStart) {
    this.$tmp0_map_1 = $tmp0_map;
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    this.$httpResponse_1 = $httpResponse;
    this.$millisStart_1 = $millisStart;
  }
  _no_name_provided__qut3iv_1.prototype.collect_83c2hm_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$5(this, collector, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__qut3iv_1.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_83c2hm_k$(collector, $cont);
  };
  function HttpNetworkTransport$multipleResponses$o$collect$slambda($collector, $jsonMerger, $operation, $customScalarAdapters, resultContinuation) {
    this.$collector_1 = $collector;
    this.$jsonMerger_1 = $jsonMerger;
    this.$operation_1 = $operation;
    this.$customScalarAdapters_1 = $customScalarAdapters;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.invoke_5se2q4_k$ = function (value, $cont) {
    var tmp = this.create_w1n5yv_k$(value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_5se2q4_k$((!(p1 == null) ? isInterface(p1, BufferedSource) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0;
            try {
              var merged = this.$jsonMerger_1.merge_ugxy3j_k$(this.value_1);
              var deferredFragmentIds = this.$jsonMerger_1.get_mergedFragmentIds_qwffot_k$();
              var isLast = !this.$jsonMerger_1.get_hasNext_csdx38_k$();
              tmp_0 = parseJsonResponse(this.$operation_1, jsonReader(merged), withDeferredFragmentIds(this.$customScalarAdapters_1, deferredFragmentIds)).newBuilder_dnl2aj_k$().isLast_p26n52_k$(isLast).build_1k0s4u_k$();
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                throw wrapThrowableIfNeeded(Companion_getInstance_12(), $p);
              } else {
                throw $p;
              }
              tmp_0 = tmp_1;
            }

            suspendResult = this.$collector_1.emit_1fbrsb_k$(tmp_0, this);
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
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.create_w1n5yv_k$ = function (value, completion) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda(this.$collector_1, this.$jsonMerger_1, this.$operation_1, this.$customScalarAdapters_1, completion);
    i.value_1 = value;
    return i;
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_w1n5yv_k$((!(value == null) ? isInterface(value, BufferedSource) : false) ? value : THROW_CCE(), completion);
  };
  function HttpNetworkTransport$multipleResponses$o$collect$slambda_0($collector, $jsonMerger, $operation, $customScalarAdapters, resultContinuation) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda($collector, $jsonMerger, $operation, $customScalarAdapters, resultContinuation);
    var l = function (value, $cont) {
      return i.invoke_5se2q4_k$(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$6.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = HttpNetworkTransport$multipleResponses$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.$jsonMerger_1, this._this__u8e3s4__1.$operation_1, this._this__u8e3s4__1.$customScalarAdapters_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  function HttpNetworkTransport$multipleResponses$o$collect$slambda_1($jsonMerger, $collector, resultContinuation) {
    this.$jsonMerger_1 = $jsonMerger;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.invoke_qn6izx_k$ = function (value, $cont) {
    var tmp = this.create_hkqsfc_k$(value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qn6izx_k$(p1 instanceof ApolloResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.doResume_5yljmg_k$ = function () {
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
            if (!this.$jsonMerger_1.get_isEmptyPayload_65wr10_k$()) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
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
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.create_hkqsfc_k$ = function (value, completion) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda_1(this.$jsonMerger_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  HttpNetworkTransport$multipleResponses$o$collect$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_hkqsfc_k$(value instanceof ApolloResponse ? value : THROW_CCE(), completion);
  };
  function HttpNetworkTransport$multipleResponses$o$collect$slambda_2($jsonMerger, $collector, resultContinuation) {
    var i = new HttpNetworkTransport$multipleResponses$o$collect$slambda_1($jsonMerger, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.invoke_qn6izx_k$(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$7.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = HttpNetworkTransport$multipleResponses$o$collect$slambda_2(this._this__u8e3s4__1.$jsonMerger_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp1_filterNot_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_0), this);
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
  function _get_httpRequestComposer__pxefna_0($this) {
    return $this.httpRequestComposer_1;
  }
  function _get_engineInterceptor__ok6ypa($this) {
    return $this.engineInterceptor_1;
  }
  function singleResponse($this, operation, customScalarAdapters, httpResponse) {
    var tmp;
    try {
      tmp = parseJsonResponse(operation, jsonReader_0(ensureNotNull(httpResponse.get_body_wojkyz_k$())), customScalarAdapters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        throw wrapThrowableIfNeeded(Companion_getInstance_12(), $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var response = tmp;
    return response.newBuilder_dnl2aj_k$().isLast_p26n52_k$(true).build_1k0s4u_k$();
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
    tmp$ret$0 = new _no_name_provided__qut3iv_2(tmp0_map, jsonMerger, operation, customScalarAdapters);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_filterNot = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$3 = new _no_name_provided__qut3iv_3(tmp1_filterNot, jsonMerger);
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  }
  function withHttpInfo(_this__u8e3s4, $this, requestUuid, httpResponse, millisStart) {
    return _this__u8e3s4.newBuilder_dnl2aj_k$().requestUuid_djb4cm_k$(requestUuid).addExecutionContext_h7mjnh_k$(new HttpInfo(millisStart, currentTimeMillis(), httpResponse.get_statusCode_g2w4u0_k$(), httpResponse.get_headers_ef25jx_k$())).build_1k0s4u_k$();
  }
  function EngineInterceptor($outer) {
    this.$this_1 = $outer;
  }
  EngineInterceptor.prototype.intercept_8ju0mj_k$ = function (request, chain, $cont) {
    return this.$this_1.engine_1.execute_rwq3fc_k$(request, $cont);
  };
  function Builder_4() {
    this.httpRequestComposer_1 = null;
    this.serverUrl_1 = null;
    this.engine_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.interceptors_1 = tmp$ret$0;
    this.exposeErrorBody_1 = false;
  }
  Builder_4.prototype.httpRequestComposer_y4ffp4_k$ = function (httpRequestComposer) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.httpRequestComposer.<anonymous>' call
    this.httpRequestComposer_1 = httpRequestComposer;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.serverUrl_zifppn_k$ = function (serverUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.serverUrl.<anonymous>' call
    this.serverUrl_1 = serverUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.exposeErrorBody_8ta9sk_k$ = function (exposeErrorBody) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.exposeErrorBody.<anonymous>' call
    this.exposeErrorBody_1 = exposeErrorBody;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.httpHeaders_ml2j2z_k$ = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.httpHeaders.<anonymous>' call
    this.interceptors_1.add_1j60pz_k$(new HeadersInterceptor(headers));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.httpEngine_nzi0ts_k$ = function (httpEngine) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.httpEngine.<anonymous>' call
    this.engine_1 = httpEngine;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.interceptors_pyfpsj_k$ = function (interceptors) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.interceptors.<anonymous>' call
    this.interceptors_1.clear_j9y8zo_k$();
    this.interceptors_1.addAll_oxxjjk_k$(interceptors);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.addInterceptor_2ised9_k$ = function (interceptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.http.Builder.addInterceptor.<anonymous>' call
    this.interceptors_1.add_1j60pz_k$(interceptor);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_4.prototype.build_1k0s4u_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.httpRequestComposer_1 == null ? true : this.serverUrl_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.network.http.Builder.build.<anonymous>' call
      tmp$ret$0 = "It is an error to set both 'httpRequestComposer' and 'serverUrl'";
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp1_elvis_lhs = this.httpRequestComposer_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.serverUrl_1;
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
    var tmp3_elvis_lhs = this.engine_1;
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      tmp_2 = DefaultHttpEngine_init_$Create$_0(new Long(0, 0), 1, null);
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    return new HttpNetworkTransport(composer, tmp_2, this.interceptors_1, this.exposeErrorBody_1);
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  function HttpNetworkTransport$execute$slambda(this$0, $httpRequest, $request, $customScalarAdapters, resultContinuation) {
    this.this$0__1 = this$0;
    this.$httpRequest_1 = $httpRequest;
    this.$request_1 = $request;
    this.$customScalarAdapters_1 = $customScalarAdapters;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpNetworkTransport$execute$slambda.prototype.invoke_a1ccj8_k$ = function ($this$flow, $cont) {
    var tmp = this.create_k3u2j5_k$($this$flow, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  HttpNetworkTransport$execute$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_a1ccj8_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpNetworkTransport$execute$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.millisStart0__1 = currentTimeMillis();
            this.set_state_a96kl8_k$(1);
            suspendResult = (new DefaultHttpInterceptorChain(plus(this.this$0__1.interceptors_1, this.this$0__1.engineInterceptor_1), 0)).proceed_qa7mgv_k$(this.$httpRequest_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.httpResponse1__1 = suspendResult;
            var containsArg = this.httpResponse1__1.get_statusCode_g2w4u0_k$();
            if (!(200 <= containsArg ? containsArg <= 299 : false)) {
              var tmp_0;
              if (this.this$0__1.exposeErrorBody_1) {
                tmp_0 = this.httpResponse1__1.get_body_wojkyz_k$();
              } else {
                var tmp0_safe_receiver = this.httpResponse1__1.get_body_wojkyz_k$();
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.close_ymq55z_k$();
                }
                tmp_0 = null;
              }
              var maybeBody = tmp_0;
              var tmp_1 = this.httpResponse1__1.get_statusCode_g2w4u0_k$();
              var tmp_2 = this.httpResponse1__1.get_headers_ef25jx_k$();
              var tmp_3 = 'Http request failed with status code `' + this.httpResponse1__1.get_statusCode_g2w4u0_k$() + '`';
              throw ApolloHttpException_init_$Create$(tmp_1, tmp_2, maybeBody, tmp_3, null, 16, null);
            }

            if (get_isMultipart(this.httpResponse1__1)) {
              this.set_state_a96kl8_k$(3);
              var tmp0_map = multipleResponses(this.this$0__1, this.$request_1.get_operation_z0nqyq_k$(), this.$customScalarAdapters_1, this.httpResponse1__1);
              suspendResult = emitAll(this.$this$flow_1, new _no_name_provided__qut3iv_1(tmp0_map, this.this$0__1, this.$request_1, this.httpResponse1__1, this.millisStart0__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              suspendResult = this.$this$flow_1.emit_1fbrsb_k$(withHttpInfo(singleResponse(this.this$0__1, this.$request_1.get_operation_z0nqyq_k$(), this.$customScalarAdapters_1, this.httpResponse1__1), this.this$0__1, this.$request_1.get_requestUuid_wwyd8h_k$(), this.httpResponse1__1, this.millisStart0__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 2:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  HttpNetworkTransport$execute$slambda.prototype.create_k3u2j5_k$ = function ($this$flow, completion) {
    var i = new HttpNetworkTransport$execute$slambda(this.this$0__1, this.$httpRequest_1, this.$request_1, this.$customScalarAdapters_1, completion);
    i.$this$flow_1 = $this$flow;
    return i;
  };
  HttpNetworkTransport$execute$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_k3u2j5_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function HttpNetworkTransport$execute$slambda_0(this$0, $httpRequest, $request, $customScalarAdapters, resultContinuation) {
    var i = new HttpNetworkTransport$execute$slambda(this$0, $httpRequest, $request, $customScalarAdapters, resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.invoke_a1ccj8_k$($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_2($tmp0_map, $jsonMerger, $operation, $customScalarAdapters) {
    this.$tmp0_map_1 = $tmp0_map;
    this.$jsonMerger_1 = $jsonMerger;
    this.$operation_1 = $operation;
    this.$customScalarAdapters_1 = $customScalarAdapters;
  }
  _no_name_provided__qut3iv_2.prototype.collect_83c2hm_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$6(this, collector, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__qut3iv_2.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_83c2hm_k$(collector, $cont);
  };
  function _no_name_provided__qut3iv_3($tmp1_filterNot, $jsonMerger) {
    this.$tmp1_filterNot_1 = $tmp1_filterNot;
    this.$jsonMerger_1 = $jsonMerger;
  }
  _no_name_provided__qut3iv_3.prototype.collect_83c2hm_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$7(this, collector, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__qut3iv_3.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_83c2hm_k$(collector, $cont);
  };
  function HttpNetworkTransport(httpRequestComposer, engine, interceptors, exposeErrorBody) {
    Companion_getInstance_12();
    this.httpRequestComposer_1 = httpRequestComposer;
    this.engine_1 = engine;
    this.interceptors_1 = interceptors;
    this.exposeErrorBody_1 = exposeErrorBody;
    this.engineInterceptor_1 = new EngineInterceptor(this);
  }
  HttpNetworkTransport.prototype.get_engine_cxlavf_k$ = function () {
    return this.engine_1;
  };
  HttpNetworkTransport.prototype.get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  HttpNetworkTransport.prototype.get_exposeErrorBody_qvg9z1_k$ = function () {
    return this.exposeErrorBody_1;
  };
  HttpNetworkTransport.prototype.execute_wzgayi_k$ = function (request) {
    var customScalarAdapters = ensureNotNull(request.get_executionContext_yb2vgg_k$().get_ge4w64_k$(Key_getInstance()));
    var httpRequest = this.httpRequestComposer_1.compose_om5ohj_k$(request);
    return this.execute_o1hg3e_k$(request, httpRequest, customScalarAdapters);
  };
  HttpNetworkTransport.prototype.execute_o1hg3e_k$ = function (request, httpRequest, customScalarAdapters) {
    return flow(HttpNetworkTransport$execute$slambda_0(this, httpRequest, request, customScalarAdapters, null));
  };
  HttpNetworkTransport.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.interceptors_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.apollographql.apollo3.network.http.HttpNetworkTransport.dispose.<anonymous>' call
      element.dispose_3n44we_k$();
    }
    this.engine_1.dispose_3n44we_k$();
  };
  HttpNetworkTransport.prototype.newBuilder_dnl2aj_k$ = function () {
    return (new Builder_4()).httpEngine_nzi0ts_k$(this.engine_1).interceptors_pyfpsj_k$(this.interceptors_1).httpRequestComposer_y4ffp4_k$(this.httpRequestComposer_1);
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
  function _get_connectionAcknowledgeTimeoutMs__gx3dz2($this) {
    return $this.connectionAcknowledgeTimeoutMs_1;
  }
  function _get_connectionPayload__jn1q7($this) {
    return $this.connectionPayload_1;
  }
  function _get_frameType__q9mnti($this) {
    return $this.frameType_1;
  }
  function SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.invoke_mslx61_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_mslx61_k$($cont);
  };
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return null;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b.prototype.create_lvr374_k$ = function (completion) {
    var i = new SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b(completion);
    return i;
  };
  function SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b_0(resultContinuation) {
    var i = new SubscriptionWsProtocol$Factory$_init_$slambda_1syt4b(resultContinuation);
    var l = function ($cont) {
      return i.invoke_mslx61_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function SubscriptionWsProtocol_init_$Init$(webSocketConnection, listener, connectionAcknowledgeTimeoutMs, connectionPayload, frameType, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      connectionAcknowledgeTimeoutMs = new Long(10000, 0);
    if (!(($mask0 & 8) === 0)) {
      connectionPayload = SubscriptionWsProtocol$_init_$slambda_7z3jff_0(null);
    }
    if (!(($mask0 & 16) === 0))
      frameType = WsFrameType_Text_getInstance();
    SubscriptionWsProtocol.call($this, webSocketConnection, listener, connectionAcknowledgeTimeoutMs, connectionPayload, frameType);
    return $this;
  }
  function SubscriptionWsProtocol_init_$Create$(webSocketConnection, listener, connectionAcknowledgeTimeoutMs, connectionPayload, frameType, $mask0, $marker) {
    return SubscriptionWsProtocol_init_$Init$(webSocketConnection, listener, connectionAcknowledgeTimeoutMs, connectionPayload, frameType, $mask0, $marker, Object.create(SubscriptionWsProtocol.prototype));
  }
  function _get_connectionAcknowledgeTimeoutMs__gx3dz2_0($this) {
    return $this.connectionAcknowledgeTimeoutMs_1;
  }
  function _get_connectionPayload__jn1q7_0($this) {
    return $this.connectionPayload_1;
  }
  function _get_frameType__q9mnti_0($this) {
    return $this.frameType_1;
  }
  function Factory(connectionAcknowledgeTimeoutMs, connectionPayload, frameType) {
    this.connectionAcknowledgeTimeoutMs_1 = connectionAcknowledgeTimeoutMs;
    this.connectionPayload_1 = connectionPayload;
    this.frameType_1 = frameType;
  }
  Factory.prototype.get_name_woqyms_k$ = function () {
    return 'graphql-ws';
  };
  Factory.prototype.create_3y2aoa_k$ = function (webSocketConnection, listener, scope) {
    var tmp0_connectionPayload = this.connectionPayload_1;
    var tmp1_connectionAcknowledgeTimeoutMs = this.connectionAcknowledgeTimeoutMs_1;
    var tmp2_frameType = this.frameType_1;
    return new SubscriptionWsProtocol(webSocketConnection, listener, tmp1_connectionAcknowledgeTimeoutMs, tmp0_connectionPayload, tmp2_frameType);
  };
  function SubscriptionWsProtocol$_init_$slambda_7z3jff(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  SubscriptionWsProtocol$_init_$slambda_7z3jff.prototype.invoke_mslx61_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  SubscriptionWsProtocol$_init_$slambda_7z3jff.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_mslx61_k$($cont);
  };
  SubscriptionWsProtocol$_init_$slambda_7z3jff.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return null;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  SubscriptionWsProtocol$_init_$slambda_7z3jff.prototype.create_lvr374_k$ = function (completion) {
    var i = new SubscriptionWsProtocol$_init_$slambda_7z3jff(completion);
    return i;
  };
  function SubscriptionWsProtocol$_init_$slambda_7z3jff_0(resultContinuation) {
    var i = new SubscriptionWsProtocol$_init_$slambda_7z3jff(resultContinuation);
    var l = function ($cont) {
      return i.invoke_mslx61_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function SubscriptionWsProtocol$connectionInit$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  SubscriptionWsProtocol$connectionInit$slambda.prototype.invoke_d6gbsu_k$ = function ($this$withTimeout, $cont) {
    var tmp = this.create_b6qu53_k$($this$withTimeout, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  SubscriptionWsProtocol$connectionInit$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  SubscriptionWsProtocol$connectionInit$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.receiveMessageMap_wbkr4s_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var map = suspendResult;
            var type = map.get_1mhr4y_k$('type');
            if (equals_0(type, 'connection_ack'))
              return Unit_getInstance();
            else if (equals_0(type, 'connection_error')) {
              var tmp_0 = 'Connection error:\n' + map;
              throw ApolloNetworkException_init_$Create$(tmp_0, null, 2, null);
            } else {
              println("unknown message while waiting for connection_ack: '" + toString_0(type));
            }

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
  SubscriptionWsProtocol$connectionInit$slambda.prototype.create_b6qu53_k$ = function ($this$withTimeout, completion) {
    var i = new SubscriptionWsProtocol$connectionInit$slambda(this.this$0__1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  SubscriptionWsProtocol$connectionInit$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function SubscriptionWsProtocol$connectionInit$slambda_0(this$0, resultContinuation) {
    var i = new SubscriptionWsProtocol$connectionInit$slambda(this$0, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.invoke_d6gbsu_k$($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $connectionInitCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $connectionInitCOROUTINE$8.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.message0__1 = mutableMapOf([to('type', 'connection_init')]);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.connectionPayload_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.payload1__1 = suspendResult;
            if (!(this.payload1__1 == null)) {
              this.message0__1.put_3mhbri_k$('payload', this.payload1__1);
            }

            this._this__u8e3s4__1.sendMessageMap_ghns0u_k$(this.message0__1, this._this__u8e3s4__1.frameType_1);
            this.set_state_a96kl8_k$(2);
            suspendResult = withTimeout(this._this__u8e3s4__1.connectionAcknowledgeTimeoutMs_1, SubscriptionWsProtocol$connectionInit$slambda_0(this._this__u8e3s4__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  function SubscriptionWsProtocol(webSocketConnection, listener, connectionAcknowledgeTimeoutMs, connectionPayload, frameType) {
    WsProtocol.call(this, webSocketConnection, listener);
    this.connectionAcknowledgeTimeoutMs_1 = connectionAcknowledgeTimeoutMs;
    this.connectionPayload_1 = connectionPayload;
    this.frameType_1 = frameType;
  }
  SubscriptionWsProtocol.prototype.connectionInit_y2o3az_k$ = function ($cont) {
    var tmp = new $connectionInitCOROUTINE$8(this, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  SubscriptionWsProtocol.prototype.handleServerMessage_kaakm6_k$ = function (messageMap) {
    var tmp0_subject = messageMap.get_1mhr4y_k$('type');
    if (equals_0(tmp0_subject, 'data')) {
      var tmp = this.get_listener_9jgv43_k$();
      var tmp_0 = messageMap.get_1mhr4y_k$('id');
      var tmp_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_2 = messageMap.get_1mhr4y_k$('payload');
      tmp.operationResponse_fsc0uv_k$(tmp_1, (!(tmp_2 == null) ? isInterface(tmp_2, Map) : false) ? tmp_2 : THROW_CCE());
    } else if (equals_0(tmp0_subject, 'error')) {
      var id = messageMap.get_1mhr4y_k$('id');
      if (!(id == null) ? typeof id === 'string' : false) {
        var tmp_3 = this.get_listener_9jgv43_k$();
        var tmp_4 = messageMap.get_1mhr4y_k$('payload');
        tmp_3.operationError_sbmsdp_k$(id, (tmp_4 == null ? true : isInterface(tmp_4, Map)) ? tmp_4 : THROW_CCE());
      } else {
        var tmp_5 = this.get_listener_9jgv43_k$();
        var tmp_6 = messageMap.get_1mhr4y_k$('payload');
        tmp_5.generalError_10hbzn_k$((tmp_6 == null ? true : isInterface(tmp_6, Map)) ? tmp_6 : THROW_CCE());
      }
    } else if (equals_0(tmp0_subject, 'complete')) {
      var tmp_7 = this.get_listener_9jgv43_k$();
      var tmp_8 = messageMap.get_1mhr4y_k$('id');
      tmp_7.operationComplete_nz6g2a_k$((!(tmp_8 == null) ? typeof tmp_8 === 'string' : false) ? tmp_8 : THROW_CCE());
    } else
    ;
  };
  SubscriptionWsProtocol.prototype.startOperation_dg1g1n_k$ = function (request) {
    this.sendMessageMap_ghns0u_k$(mapOf_0([to('type', 'start'), to('id', request.get_requestUuid_wwyd8h_k$().toString()), to('payload', Companion_getInstance_4().composePayload_8eh6rl_k$(request))]), this.frameType_1);
  };
  SubscriptionWsProtocol.prototype.stopOperation_np4ue3_k$ = function (request) {
    this.sendMessageMap_ghns0u_k$(mapOf_0([to('type', 'stop'), to('id', request.get_requestUuid_wwyd8h_k$().toString())]), this.frameType_1);
  };
  function WebSocketEngine() {
  }
  function WebSocketConnection() {
  }
  function get_CLOSE_NORMAL() {
    return CLOSE_NORMAL;
  }
  var CLOSE_NORMAL;
  function _set_serverUrl__a3flyf_0($this, _set____db54di) {
    $this.serverUrl_1 = _set____db54di;
  }
  function _get_serverUrl__j7eug5_0($this) {
    return $this.serverUrl_1;
  }
  function _set_headers__sp3txd($this, _set____db54di) {
    $this.headers_1 = _set____db54di;
  }
  function _get_headers__gprxor_0($this) {
    return $this.headers_1;
  }
  function _set_webSocketEngine__70tcik_0($this, _set____db54di) {
    $this.webSocketEngine_1 = _set____db54di;
  }
  function _get_webSocketEngine__h4jk14_0($this) {
    return $this.webSocketEngine_1;
  }
  function _set_idleTimeoutMillis__cr88e($this, _set____db54di) {
    $this.idleTimeoutMillis_1 = _set____db54di;
  }
  function _get_idleTimeoutMillis__m2k4iq($this) {
    return $this.idleTimeoutMillis_1;
  }
  function _set_protocolFactory__q9thu5($this, _set____db54di) {
    $this.protocolFactory_1 = _set____db54di;
  }
  function _get_protocolFactory__g63abl($this) {
    return $this.protocolFactory_1;
  }
  function _set_reopenWhen__d7owgw($this, _set____db54di) {
    $this.reopenWhen_1 = _set____db54di;
  }
  function _get_reopenWhen__s9xhm4($this) {
    return $this.reopenWhen_1;
  }
  function WebSocketNetworkTransport$Builder$reconnectWhen$slambda($reconnectWhen, resultContinuation) {
    this.$reconnectWhen_1 = $reconnectWhen;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$Builder$reconnectWhen$slambda.prototype.invoke_ba4xtr_k$ = function (throwable, _anonymous_parameter_1__qggqgd, $cont) {
    var tmp = this.create_452l0s_k$(throwable, _anonymous_parameter_1__qggqgd, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$Builder$reconnectWhen$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof Error ? p1 : THROW_CCE();
    return this.invoke_ba4xtr_k$(tmp, p2 instanceof Long ? p2 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$Builder$reconnectWhen$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return this.$reconnectWhen_1(this.throwable_1);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  WebSocketNetworkTransport$Builder$reconnectWhen$slambda.prototype.create_452l0s_k$ = function (throwable, _anonymous_parameter_1__qggqgd, completion) {
    var i = new WebSocketNetworkTransport$Builder$reconnectWhen$slambda(this.$reconnectWhen_1, completion);
    i.throwable_1 = throwable;
    i._anonymous_parameter_1__qggqgd_1 = _anonymous_parameter_1__qggqgd;
    return i;
  };
  function WebSocketNetworkTransport$Builder$reconnectWhen$slambda_0($reconnectWhen, resultContinuation) {
    var i = new WebSocketNetworkTransport$Builder$reconnectWhen$slambda($reconnectWhen, resultContinuation);
    var l = function (throwable, _anonymous_parameter_1__qggqgd, $cont) {
      return i.invoke_ba4xtr_k$(throwable, _anonymous_parameter_1__qggqgd, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function WebSocketNetworkTransport$execute$o$collect$slambda($request, $collector, resultContinuation) {
    this.$request_1 = $request;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.invoke_kvy33q_k$ = function (value, $cont) {
    var tmp = this.create_u1vezj_k$(value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_kvy33q_k$((!(p1 == null) ? isInterface(p1, Event) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.doResume_5yljmg_k$ = function () {
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
            if (this.value_1.get_id_kntnx8_k$() === this.$request_1.get_requestUuid_wwyd8h_k$().toString() ? true : this.value_1.get_id_kntnx8_k$() == null) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
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
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.create_u1vezj_k$ = function (value, completion) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda(this.$request_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  WebSocketNetworkTransport$execute$o$collect$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_u1vezj_k$((!(value == null) ? isInterface(value, Event) : false) ? value : THROW_CCE(), completion);
  };
  function WebSocketNetworkTransport$execute$o$collect$slambda_0($request, $collector, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda($request, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.invoke_kvy33q_k$(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$10.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = WebSocketNetworkTransport$execute$o$collect$slambda_0(this._this__u8e3s4__1.$request_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_filter_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
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
  function WebSocketNetworkTransport$execute$o$collect$slambda_1($collector, $request, $deferredJsonMerger, resultContinuation) {
    this.$collector_1 = $collector;
    this.$request_1 = $request;
    this.$deferredJsonMerger_1 = $deferredJsonMerger;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.invoke_kvy33q_k$ = function (value, $cont) {
    var tmp = this.create_u1vezj_k$(value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_kvy33q_k$((!(p1 == null) ? isInterface(p1, Event) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0_subject = this.value_1;
            var tmp_0;
            if (tmp0_subject instanceof OperationResponse) {
              var responsePayload = this.value_1.get_payload_bqtt23_k$();
              var requestCustomScalarAdapters = ensureNotNull(this.$request_1.get_executionContext_yb2vgg_k$().get_ge4w64_k$(Key_getInstance()));
              var tmp_1;
              if (isDeferred(responsePayload)) {
                tmp_1 = to(this.$deferredJsonMerger_1.merge_dewyvp_k$(responsePayload), withDeferredFragmentIds(requestCustomScalarAdapters, this.$deferredJsonMerger_1.get_mergedFragmentIds_qwffot_k$()));
              } else {
                tmp_1 = to(responsePayload, requestCustomScalarAdapters);
              }
              var tmp1_container = tmp_1;
              var payload = tmp1_container.component1_7eebsc_k$();
              var customScalarAdapters = tmp1_container.component2_7eebsb_k$();
              var apolloResponse = parseJsonResponse(this.$request_1.get_operation_z0nqyq_k$(), jsonReader(payload), customScalarAdapters).newBuilder_dnl2aj_k$().requestUuid_djb4cm_k$(this.$request_1.get_requestUuid_wwyd8h_k$()).build_1k0s4u_k$();
              if (!this.$deferredJsonMerger_1.get_hasNext_csdx38_k$()) {
                this.$deferredJsonMerger_1.reset_5tn5dq_k$();
              }
              tmp_0 = apolloResponse;
            } else {
              if (tmp0_subject instanceof OperationError) {
                throw new SubscriptionOperationException(this.$request_1.get_operation_z0nqyq_k$().name_20b63_k$(), this.value_1.get_payload_bqtt23_k$());
              } else {
                if (tmp0_subject instanceof NetworkError) {
                  throw new ApolloNetworkException('Network error while executing ' + this.$request_1.get_operation_z0nqyq_k$().name_20b63_k$(), this.value_1.get_cause_iplhs0_k$());
                } else {
                  var tmp_2;
                  if (tmp0_subject instanceof OperationComplete) {
                    tmp_2 = true;
                  } else {
                    tmp_2 = tmp0_subject instanceof GeneralError;
                  }
                  if (tmp_2) {
                    var tmp0_error = 'Unexpected event ' + this.value_1;
                    throw IllegalStateException_init_$Create$(toString(tmp0_error));
                  } else {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }

            suspendResult = this.$collector_1.emit_1fbrsb_k$(tmp_0, this);
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
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.create_u1vezj_k$ = function (value, completion) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_1(this.$collector_1, this.$request_1, this.$deferredJsonMerger_1, completion);
    i.value_1 = value;
    return i;
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_u1vezj_k$((!(value == null) ? isInterface(value, Event) : false) ? value : THROW_CCE(), completion);
  };
  function WebSocketNetworkTransport$execute$o$collect$slambda_2($collector, $request, $deferredJsonMerger, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_1($collector, $request, $deferredJsonMerger, resultContinuation);
    var l = function (value, $cont) {
      return i.invoke_kvy33q_k$(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$11.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = WebSocketNetworkTransport$execute$o$collect$slambda_2(this.collector_1, this._this__u8e3s4__1.$request_1, this._this__u8e3s4__1.$deferredJsonMerger_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp1_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
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
  function WebSocketNetworkTransport$execute$o$collect$slambda_3($deferredJsonMerger, $collector, resultContinuation) {
    this.$deferredJsonMerger_1 = $deferredJsonMerger;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.invoke_qn6izx_k$ = function (value, $cont) {
    var tmp = this.create_hkqsfc_k$(value, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qn6izx_k$(p1 instanceof ApolloResponse ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.doResume_5yljmg_k$ = function () {
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
            if (!this.$deferredJsonMerger_1.get_isEmptyPayload_65wr10_k$()) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
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
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.create_hkqsfc_k$ = function (value, completion) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_3(this.$deferredJsonMerger_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  WebSocketNetworkTransport$execute$o$collect$slambda_3.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_hkqsfc_k$(value instanceof ApolloResponse ? value : THROW_CCE(), completion);
  };
  function WebSocketNetworkTransport$execute$o$collect$slambda_4($deferredJsonMerger, $collector, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$o$collect$slambda_3($deferredJsonMerger, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.invoke_qn6izx_k$(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$12.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = WebSocketNetworkTransport$execute$o$collect$slambda_4(this._this__u8e3s4__1.$deferredJsonMerger_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp2_filterNot_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
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
  function WebSocketNetworkTransport_init_$Init$(serverUrl, headers, webSocketEngine, idleTimeoutMillis, protocolFactory, reopenWhen, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      webSocketEngine = new DefaultWebSocketEngine();
    if (!(($mask0 & 8) === 0))
      idleTimeoutMillis = new Long(60000, 0);
    if (!(($mask0 & 16) === 0)) {
      var tmp = new Long(0, 0);
      protocolFactory = Factory_init_$Create$(tmp, null, null, 7, null);
    }
    WebSocketNetworkTransport.call($this, serverUrl, headers, webSocketEngine, idleTimeoutMillis, protocolFactory, reopenWhen);
    return $this;
  }
  function WebSocketNetworkTransport_init_$Create$(serverUrl, headers, webSocketEngine, idleTimeoutMillis, protocolFactory, reopenWhen, $mask0, $marker) {
    return WebSocketNetworkTransport_init_$Init$(serverUrl, headers, webSocketEngine, idleTimeoutMillis, protocolFactory, reopenWhen, $mask0, $marker, Object.create(WebSocketNetworkTransport.prototype));
  }
  function _get_serverUrl__j7eug5_1($this) {
    return $this.serverUrl_1;
  }
  function _get_headers__gprxor_1($this) {
    return $this.headers_1;
  }
  function _get_webSocketEngine__h4jk14_1($this) {
    return $this.webSocketEngine_1;
  }
  function _get_idleTimeoutMillis__m2k4iq_0($this) {
    return $this.idleTimeoutMillis_1;
  }
  function _get_protocolFactory__g63abl_0($this) {
    return $this.protocolFactory_1;
  }
  function _get_reopenWhen__s9xhm4_0($this) {
    return $this.reopenWhen_1;
  }
  function _get_messages__owe7z($this) {
    return $this.messages_1;
  }
  function _get_mutableEvents__moug2a($this) {
    return $this.mutableEvents_1;
  }
  function _get_events__f13j82($this) {
    return $this.events_1;
  }
  function _get_backgroundDispatcher__d9ytmy($this) {
    return $this.backgroundDispatcher_1;
  }
  function _get_coroutineScope__o75s5t($this) {
    return $this.coroutineScope_1;
  }
  function _get_listener__4cngyf($this) {
    return $this.listener_1;
  }
  function supervise($this, scope, $cont) {
    var tmp = new $superviseCOROUTINE$9($this, scope, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function Builder_5() {
    this.serverUrl_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.headers_1 = tmp$ret$0;
    this.webSocketEngine_1 = null;
    this.idleTimeoutMillis_1 = null;
    this.protocolFactory_1 = null;
    this.reopenWhen_1 = null;
  }
  Builder_5.prototype.serverUrl_zifppn_k$ = function (serverUrl) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.serverUrl.<anonymous>' call
    this.serverUrl_1 = serverUrl;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.addHeader_266l70_k$ = function (name, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.addHeader.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.headers_1;
    var tmp1_plusAssign = new HttpHeader(name, value);
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.addHeaders_y6idf8_k$ = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.addHeaders.<anonymous>' call
    this.headers_1.addAll_oxxjjk_k$(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.headers_3z5tgz_k$ = function (headers) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.headers.<anonymous>' call
    this.headers_1.clear_j9y8zo_k$();
    this.headers_1.addAll_oxxjjk_k$(headers);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.webSocketEngine_izypko_k$ = function (webSocketEngine) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.webSocketEngine.<anonymous>' call
    this.webSocketEngine_1 = webSocketEngine;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.idleTimeoutMillis_pro7ul_k$ = function (idleTimeoutMillis) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.idleTimeoutMillis.<anonymous>' call
    this.idleTimeoutMillis_1 = idleTimeoutMillis;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.protocol_xk1t12_k$ = function (protocolFactory) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.protocol.<anonymous>' call
    this.protocolFactory_1 = protocolFactory;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.reopenWhen_gkhsb4_k$ = function (reopenWhen) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.reopenWhen.<anonymous>' call
    this.reopenWhen_1 = reopenWhen;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Builder_5.prototype.reconnectWhen_y72sn3_k$ = function (reconnectWhen) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.apollographql.apollo3.network.ws.Builder.reconnectWhen.<anonymous>' call
    var tmp = this;
    var tmp0_safe_receiver = reconnectWhen;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.network.ws.Builder.reconnectWhen.<anonymous>.<anonymous>' call
      var adaptedLambda = WebSocketNetworkTransport$Builder$reconnectWhen$slambda_0(reconnectWhen, null);
      tmp$ret$0 = adaptedLambda;
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    tmp.reopenWhen_1 = tmp_0;
    tmp$ret$2 = this;
    return tmp$ret$2;
  };
  Builder_5.prototype.build_1k0s4u_k$ = function () {
    var tmp0_elvis_lhs = this.serverUrl_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No serverUrl specified');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp;
    var tmp_1 = this.headers_1;
    var tmp1_elvis_lhs = this.webSocketEngine_1;
    var tmp_2 = tmp1_elvis_lhs == null ? new DefaultWebSocketEngine() : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.idleTimeoutMillis_1;
    var tmp_3 = tmp2_elvis_lhs == null ? new Long(60000, 0) : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.protocolFactory_1;
    var tmp_4;
    if (tmp3_elvis_lhs == null) {
      var tmp_5 = new Long(0, 0);
      tmp_4 = Factory_init_$Create$(tmp_5, null, null, 7, null);
    } else {
      tmp_4 = tmp3_elvis_lhs;
    }
    return new WebSocketNetworkTransport(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, this.reopenWhen_1);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_3.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  function supervise$closeProtocol(protocol, connectionJob, idleJob) {
    var tmp0_safe_receiver = protocol._v;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_ymq55z_k$();
    }
    protocol._v = null;
    var tmp1_safe_receiver = connectionJob._v;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.cancel$default_bm1z3z_k$(null, 1, null);
    }
    connectionJob._v = null;
    var tmp2_safe_receiver = idleJob._v;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.cancel$default_bm1z3z_k$(null, 1, null);
    }
    idleJob._v = null;
  }
  function WebSocketNetworkTransport$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_0 = this;
            tmp_0.tmp0_use0__1 = this.this$0__1.backgroundDispatcher_1;
            this.result1__1 = null;
            this.thrown2__1 = null;
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = supervise(this.this$0__1, this.$this$launch_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.result1__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              this.thrown2__1 = t;
              this.set_state_a96kl8_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_exceptionState_s9sevl_k$(4);
            var tmp0_safe_receiver = this.tmp0_use0__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.close_ymq55z_k$();
            }

            ;
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(6);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var t_0 = this.get_exception_x0n6w6_k$();
              if (this.thrown2__1 == null)
                this.thrown2__1 = t_0;
              else {
                addSuppressed(this.thrown2__1, t_0);
              }
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 5:
            this.set_exceptionState_s9sevl_k$(6);
            if (!(this.thrown2__1 == null))
              throw this.thrown2__1;
            ensureNotNull(this.result1__1);
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
  WebSocketNetworkTransport$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new WebSocketNetworkTransport$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  WebSocketNetworkTransport$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function WebSocketNetworkTransport$slambda_0(this$0, resultContinuation) {
    var i = new WebSocketNetworkTransport$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function WebSocketNetworkTransport$listener$1(this$0) {
    this.this$0__1 = this$0;
  }
  WebSocketNetworkTransport$listener$1.prototype.operationResponse_fsc0uv_k$ = function (id, payload) {
    this.this$0__1.messages_1.trySend_3hclq4_k$(new OperationResponse(id, payload));
  };
  WebSocketNetworkTransport$listener$1.prototype.operationError_sbmsdp_k$ = function (id, payload) {
    this.this$0__1.messages_1.trySend_3hclq4_k$(new OperationError(id, payload));
  };
  WebSocketNetworkTransport$listener$1.prototype.operationComplete_nz6g2a_k$ = function (id) {
    this.this$0__1.messages_1.trySend_3hclq4_k$(new OperationComplete(id));
  };
  WebSocketNetworkTransport$listener$1.prototype.generalError_10hbzn_k$ = function (payload) {
    this.this$0__1.messages_1.trySend_3hclq4_k$(new GeneralError(payload));
  };
  WebSocketNetworkTransport$listener$1.prototype.networkError_14g2pl_k$ = function (cause) {
    this.this$0__1.messages_1.trySend_3hclq4_k$(new NetworkError(cause));
  };
  function WebSocketNetworkTransport$supervise$slambda($protocol, resultContinuation) {
    this.$protocol_1 = $protocol;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$supervise$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$supervise$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$supervise$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = ensureNotNull(this.$protocol_1._v).run_aaszm0_k$(this);
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
  WebSocketNetworkTransport$supervise$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new WebSocketNetworkTransport$supervise$slambda(this.$protocol_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  WebSocketNetworkTransport$supervise$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function WebSocketNetworkTransport$supervise$slambda_0($protocol, resultContinuation) {
    var i = new WebSocketNetworkTransport$supervise$slambda($protocol, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function WebSocketNetworkTransport$supervise$slambda_1(this$0, $protocol, $connectionJob, $idleJob, resultContinuation) {
    this.this$0__1 = this$0;
    this.$protocol_1 = $protocol;
    this.$connectionJob_1 = $connectionJob;
    this.$idleJob_1 = $idleJob;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$supervise$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$supervise$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$supervise$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = delay(this.this$0__1.idleTimeoutMillis_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            supervise$closeProtocol(this.$protocol_1, this.$connectionJob_1, this.$idleJob_1);
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
  WebSocketNetworkTransport$supervise$slambda_1.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new WebSocketNetworkTransport$supervise$slambda_1(this.this$0__1, this.$protocol_1, this.$connectionJob_1, this.$idleJob_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  WebSocketNetworkTransport$supervise$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function WebSocketNetworkTransport$supervise$slambda_2(this$0, $protocol, $connectionJob, $idleJob, resultContinuation) {
    var i = new WebSocketNetworkTransport$supervise$slambda_1(this$0, $protocol, $connectionJob, $idleJob, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function WebSocketNetworkTransport$execute$slambda(this$0, $request, resultContinuation) {
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$slambda.prototype.invoke_9vc80z_k$ = function ($this$onSubscription, $cont) {
    var tmp = this.create_5o1f22_k$($this$onSubscription, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$execute$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_9vc80z_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.messages_1.send_4idxxh_k$(new StartOperation(this.$request_1), this);
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
  WebSocketNetworkTransport$execute$slambda.prototype.create_5o1f22_k$ = function ($this$onSubscription, completion) {
    var i = new WebSocketNetworkTransport$execute$slambda(this.this$0__1, this.$request_1, completion);
    i.$this$onSubscription_1 = $this$onSubscription;
    return i;
  };
  WebSocketNetworkTransport$execute$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5o1f22_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function WebSocketNetworkTransport$execute$slambda_0(this$0, $request, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$slambda(this$0, $request, resultContinuation);
    var l = function ($this$onSubscription, $cont) {
      return i.invoke_9vc80z_k$($this$onSubscription, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_4($tmp0_filter, $request) {
    this.$tmp0_filter_1 = $tmp0_filter;
    this.$request_1 = $request;
  }
  _no_name_provided__qut3iv_4.prototype.collect_4czexb_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$10(this, collector, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__qut3iv_4.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_4czexb_k$(collector, $cont);
  };
  function WebSocketNetworkTransport$execute$slambda_1($request, resultContinuation) {
    this.$request_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$slambda_1.prototype.invoke_jwaue4_k$ = function ($this$transformWhile, it, $cont) {
    var tmp = this.create_efhql3_k$($this$transformWhile, it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$execute$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_jwaue4_k$(tmp, (!(p2 == null) ? isInterface(p2, Event) : false) ? p2 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.tmp0_subject0__1 = this.it_1;
            var tmp_0 = this.tmp0_subject0__1;
            if (tmp_0 instanceof OperationComplete) {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT1__1 = false;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              var tmp_2 = this.tmp0_subject0__1;
              if (tmp_2 instanceof NetworkError) {
                this.set_state_a96kl8_k$(2);
                suspendResult = this.$this$transformWhile_1.emit_1fbrsb_k$(this.it_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.tmp0_subject0__1;
                if (tmp_3 instanceof GeneralError) {
                  var tmp_4 = this;
                  println('Received general error while executing operation ' + this.$request_1.get_operation_z0nqyq_k$().name_20b63_k$() + ': ' + this.it_1.get_payload_bqtt23_k$());
                  tmp_4.WHEN_RESULT1__1 = true;
                  this.set_state_a96kl8_k$(4);
                  continue $sm;
                } else {
                  this.set_state_a96kl8_k$(1);
                  suspendResult = this.$this$transformWhile_1.emit_1fbrsb_k$(this.it_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            this.WHEN_RESULT1__1 = true;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = false;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return this.WHEN_RESULT1__1;
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
  WebSocketNetworkTransport$execute$slambda_1.prototype.create_efhql3_k$ = function ($this$transformWhile, it, completion) {
    var i = new WebSocketNetworkTransport$execute$slambda_1(this.$request_1, completion);
    i.$this$transformWhile_1 = $this$transformWhile;
    i.it_1 = it;
    return i;
  };
  function WebSocketNetworkTransport$execute$slambda_2($request, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$slambda_1($request, resultContinuation);
    var l = function ($this$transformWhile, it, $cont) {
      return i.invoke_jwaue4_k$($this$transformWhile, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _no_name_provided__qut3iv_5($tmp1_map, $request, $deferredJsonMerger) {
    this.$tmp1_map_1 = $tmp1_map;
    this.$request_1 = $request;
    this.$deferredJsonMerger_1 = $deferredJsonMerger;
  }
  _no_name_provided__qut3iv_5.prototype.collect_83c2hm_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$11(this, collector, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__qut3iv_5.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_83c2hm_k$(collector, $cont);
  };
  function _no_name_provided__qut3iv_6($tmp2_filterNot, $deferredJsonMerger) {
    this.$tmp2_filterNot_1 = $tmp2_filterNot;
    this.$deferredJsonMerger_1 = $deferredJsonMerger;
  }
  _no_name_provided__qut3iv_6.prototype.collect_83c2hm_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$12(this, collector, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__qut3iv_6.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_83c2hm_k$(collector, $cont);
  };
  function WebSocketNetworkTransport$execute$slambda_3(this$0, $request, resultContinuation) {
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  WebSocketNetworkTransport$execute$slambda_3.prototype.invoke_s1twxz_k$ = function ($this$onCompletion, it, $cont) {
    var tmp = this.create_ubjios_k$($this$onCompletion, it, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WebSocketNetworkTransport$execute$slambda_3.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_s1twxz_k$(tmp, (p2 == null ? true : p2 instanceof Error) ? p2 : THROW_CCE(), $cont);
  };
  WebSocketNetworkTransport$execute$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.messages_1.send_4idxxh_k$(new StopOperation(this.$request_1), this);
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
  WebSocketNetworkTransport$execute$slambda_3.prototype.create_ubjios_k$ = function ($this$onCompletion, it, completion) {
    var i = new WebSocketNetworkTransport$execute$slambda_3(this.this$0__1, this.$request_1, completion);
    i.$this$onCompletion_1 = $this$onCompletion;
    i.it_1 = it;
    return i;
  };
  function WebSocketNetworkTransport$execute$slambda_4(this$0, $request, resultContinuation) {
    var i = new WebSocketNetworkTransport$execute$slambda_3(this$0, $request, resultContinuation);
    var l = function ($this$onCompletion, it, $cont) {
      return i.invoke_s1twxz_k$($this$onCompletion, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $superviseCOROUTINE$9(_this__u8e3s4, scope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.scope_1 = scope;
  }
  $superviseCOROUTINE$9.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(18);
            this.idleJob0__1 = {_v: null};
            this.connectionJob1__1 = {_v: null};
            this.protocol2__1 = {_v: null};
            this.reopenAttemptCount3__1 = new Long(0, 0);
            var tmp_0 = this;
            tmp_0.activeMessages4__1 = LinkedHashMap_init_$Create$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(19);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.messages_1.receive_ihhf9g_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.message5__1 = suspendResult;
            var tmp_1 = this.message5__1;
            if (isInterface(tmp_1, Event)) {
              var tmp_2 = this.message5__1;
              if (tmp_2 instanceof NetworkError) {
                supervise$closeProtocol(this.protocol2__1, this.connectionJob1__1, this.idleJob0__1);
                this.tmp0_safe_receiver6__1 = this._this__u8e3s4__1.reopenWhen_1;
                if (this.tmp0_safe_receiver6__1 == null) {
                  this.WHEN_RESULT7__1 = null;
                  this.set_state_a96kl8_k$(14);
                  continue $sm;
                } else {
                  this.set_state_a96kl8_k$(13);
                  suspendResult = this.tmp0_safe_receiver6__1(this.message5__1.get_cause_iplhs0_k$(), this.reopenAttemptCount3__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                this.reopenAttemptCount3__1 = new Long(0, 0);
                this._this__u8e3s4__1.mutableEvents_1.tryEmit_4zef7h_k$(this.message5__1);
                this.set_state_a96kl8_k$(16);
                continue $sm;
              }
            } else {
              var tmp_3 = this.message5__1;
              if (isInterface(tmp_3, Command)) {
                var tmp_4 = this.message5__1;
                if (tmp_4 instanceof Dispose) {
                  supervise$closeProtocol(this.protocol2__1, this.connectionJob1__1, this.idleJob0__1);
                  return Unit_getInstance();
                }
                if (this.protocol2__1._v == null) {
                  var tmp_5 = this.message5__1;
                  if (tmp_5 instanceof StopOperation) {
                    this.activeMessages4__1.remove_8hbkc0_k$(this.message5__1.get_request_jdwg4m_k$().get_requestUuid_wwyd8h_k$());
                    this.set_state_a96kl8_k$(1);
                    continue $sm;
                  } else {
                    this.set_state_a96kl8_k$(3);
                    continue $sm;
                  }
                } else {
                  this.set_state_a96kl8_k$(10);
                  continue $sm;
                }
              } else {
                this.set_state_a96kl8_k$(17);
                continue $sm;
              }
            }

            break;
          case 3:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(4);
            var tmp_6;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp1_any = this._this__u8e3s4__1.headers_1;
              var tmp_7;
              if (isInterface(tmp1_any, Collection)) {
                tmp_7 = tmp1_any.isEmpty_y1axqb_k$();
              } else {
                tmp_7 = false;
              }
              if (tmp_7) {
                tmp$ret$0 = false;
                break l$ret$1;
              }
              var tmp0_iterator = tmp1_any.iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                if (element.get_name_woqyms_k$() === 'Sec-WebSocket-Protocol') {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              tmp_6 = this._this__u8e3s4__1.headers_1;
            } else {
              tmp_6 = plus(this._this__u8e3s4__1.headers_1, new HttpHeader('Sec-WebSocket-Protocol', this._this__u8e3s4__1.protocolFactory_1.get_name_woqyms_k$()));
            }

            suspendResult = this._this__u8e3s4__1.webSocketEngine_1.open_775z3k_k$(this._this__u8e3s4__1.serverUrl_1, tmp_6, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.TRY_RESULT8__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(18);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(18);
            var tmp_8 = this.get_exception_x0n6w6_k$();
            if (tmp_8 instanceof Exception) {
              this.e9__1 = this.get_exception_x0n6w6_k$();
              this.set_state_a96kl8_k$(6);
              suspendResult = this._this__u8e3s4__1.messages_1.send_4idxxh_k$(new NetworkError(this.e9__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 6:
            this.set_state_a96kl8_k$(1);
            var tmp_9 = this;
            continue $sm;
          case 7:
            this.set_exceptionState_s9sevl_k$(18);
            this.webSocketConnection10__1 = this.TRY_RESULT8__1;
            this.protocol2__1._v = this._this__u8e3s4__1.protocolFactory_1.create_3y2aoa_k$(this.webSocketConnection10__1, this._this__u8e3s4__1.listener_1, this.scope_1);
            this.set_exceptionState_s9sevl_k$(11);
            this.set_state_a96kl8_k$(8);
            suspendResult = ensureNotNull(this.protocol2__1._v).connectionInit_y2o3az_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.set_exceptionState_s9sevl_k$(18);
            this.set_state_a96kl8_k$(9);
            continue $sm;
          case 9:
            this.set_exceptionState_s9sevl_k$(18);
            var tmp_10 = CoroutineStart_UNDISPATCHED_getInstance();
            this.connectionJob1__1._v = launch$default(this.scope_1, null, tmp_10, WebSocketNetworkTransport$supervise$slambda_0(this.protocol2__1, null), 1, null);
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 10:
            var tmp2_subject = this.message5__1;
            if (tmp2_subject instanceof StartOperation) {
              var tmp2_set = this.message5__1.get_request_jdwg4m_k$().get_requestUuid_wwyd8h_k$();
              var tmp3_set = this.message5__1;
              this.activeMessages4__1.put_3mhbri_k$(tmp2_set, tmp3_set);
              ensureNotNull(this.protocol2__1._v).startOperation_dg1g1n_k$(this.message5__1.get_request_jdwg4m_k$());
            } else {
              if (tmp2_subject instanceof StopOperation) {
                this.activeMessages4__1.remove_8hbkc0_k$(this.message5__1.get_request_jdwg4m_k$().get_requestUuid_wwyd8h_k$());
                ensureNotNull(this.protocol2__1._v).stopOperation_np4ue3_k$(this.message5__1.get_request_jdwg4m_k$());
              } else {
              }
            }

            if (this.activeMessages4__1.isEmpty_y1axqb_k$()) {
              this.idleJob0__1._v = launch$default(this.scope_1, null, null, WebSocketNetworkTransport$supervise$slambda_2(this._this__u8e3s4__1, this.protocol2__1, this.connectionJob1__1, this.idleJob0__1, null), 3, null);
            } else {
              var tmp3_safe_receiver = this.idleJob0__1._v;
              if (tmp3_safe_receiver == null)
                null;
              else {
                tmp3_safe_receiver.cancel$default_bm1z3z_k$(null, 1, null);
              }
              this.idleJob0__1._v = null;
            }

            this.set_state_a96kl8_k$(17);
            continue $sm;
          case 11:
            this.set_exceptionState_s9sevl_k$(18);
            var tmp_11 = this.get_exception_x0n6w6_k$();
            if (tmp_11 instanceof Exception) {
              this.e11__1 = this.get_exception_x0n6w6_k$();
              this.protocol2__1._v = null;
              this.set_state_a96kl8_k$(12);
              suspendResult = this._this__u8e3s4__1.messages_1.send_4idxxh_k$(new NetworkError(this.e11__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 12:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 13:
            this.WHEN_RESULT7__1 = suspendResult;
            this.set_state_a96kl8_k$(14);
            continue $sm;
          case 14:
            var ARGUMENT = this.WHEN_RESULT7__1;
            if (ARGUMENT === true) {
              var tmp1 = this.reopenAttemptCount3__1;
              this.reopenAttemptCount3__1 = tmp1.inc_28ke_k$();
              var tmp0_forEach = this.activeMessages4__1.get_values_ksazhn_k$();
              var tmp0_iterator_0 = tmp0_forEach.iterator_jk1svi_k$();
              while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var element_0 = tmp0_iterator_0.next_20eer_k$();
                this._this__u8e3s4__1.messages_1.trySend_3hclq4_k$(element_0);
              }
              this.set_state_a96kl8_k$(15);
              continue $sm;
            } else {
              this.reopenAttemptCount3__1 = new Long(0, 0);
              this._this__u8e3s4__1.mutableEvents_1.tryEmit_4zef7h_k$(this.message5__1);
              this.set_state_a96kl8_k$(15);
              continue $sm;
            }

            ;
            break;
          case 15:
            this.set_state_a96kl8_k$(16);
            continue $sm;
          case 16:
            this.set_state_a96kl8_k$(17);
            continue $sm;
          case 17:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 18:
            throw this.get_exception_x0n6w6_k$();
          case 19:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 18) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function WebSocketNetworkTransport(serverUrl, headers, webSocketEngine, idleTimeoutMillis, protocolFactory, reopenWhen) {
    this.serverUrl_1 = serverUrl;
    this.headers_1 = headers;
    this.webSocketEngine_1 = webSocketEngine;
    this.idleTimeoutMillis_1 = idleTimeoutMillis;
    this.protocolFactory_1 = protocolFactory;
    this.reopenWhen_1 = reopenWhen;
    var tmp = this;
    var tmp_0 = Factory_getInstance().get_UNLIMITED_eshsm0_k$();
    tmp.messages_1 = Channel$default(tmp_0, null, null, 6, null);
    this.mutableEvents_1 = MutableSharedFlow(0, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$(), BufferOverflow_SUSPEND_getInstance());
    this.events_1 = asSharedFlow(this.mutableEvents_1);
    this.subscriptionCount_1 = this.mutableEvents_1.get_subscriptionCount_9h9j93_k$();
    this.backgroundDispatcher_1 = new CloseableSingleThreadDispatcher();
    this.coroutineScope_1 = CoroutineScope(this.backgroundDispatcher_1.get_coroutineDispatcher_vpa8ju_k$());
    launch$default(this.coroutineScope_1, null, null, WebSocketNetworkTransport$slambda_0(this, null), 3, null);
    var tmp_1 = this;
    tmp_1.listener_1 = new WebSocketNetworkTransport$listener$1(this);
  }
  WebSocketNetworkTransport.prototype.get_subscriptionCount_9h9j93_k$ = function () {
    return this.subscriptionCount_1;
  };
  WebSocketNetworkTransport.prototype.execute_wzgayi_k$ = function (request) {
    var deferredJsonMerger = new DeferredJsonMerger();
    var tmp$ret$8;
    // Inline function 'kotlinx.coroutines.flow.filterNot' call
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.filter' call
    var tmp0_filter = onSubscription(this.events_1, WebSocketNetworkTransport$execute$slambda_0(this, request, null));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_4(tmp0_filter, request);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp1_map = transformWhile(tmp, WebSocketNetworkTransport$execute$slambda_2(request, null));
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$3 = new _no_name_provided__qut3iv_5(tmp1_map, request, deferredJsonMerger);
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp2_filterNot = tmp$ret$5;
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$6;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$6 = new _no_name_provided__qut3iv_6(tmp2_filterNot, deferredJsonMerger);
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    var tmp_0 = tmp$ret$8;
    return onCompletion(tmp_0, WebSocketNetworkTransport$execute$slambda_4(this, request, null));
  };
  WebSocketNetworkTransport.prototype.dispose_3n44we_k$ = function () {
    this.messages_1.trySend_3hclq4_k$(Dispose_getInstance());
  };
  WebSocketNetworkTransport.prototype.closeConnection_84l6bv_k$ = function (reason) {
    this.messages_1.trySend_3hclq4_k$(new NetworkError(reason));
  };
  function Listener() {
  }
  function Factory_0() {
  }
  function $receiveMessageMapCOROUTINE$13(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $receiveMessageMapCOROUTINE$13.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.webSocketConnection_1.receive_c4p3rx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var map = this._this__u8e3s4__1.toMessageMap_b3b2ir_k$(ARGUMENT);
            if (!(map == null)) {
              return map;
            }

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
  function $runCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $runCOROUTINE$14.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.receiveMessageMap_wbkr4s_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this._this__u8e3s4__1.handleServerMessage_kaakm6_k$(ARGUMENT);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var tmp_1 = this.get_exception_x0n6w6_k$();
              if (tmp_1 instanceof Exception) {
                var e_0 = this.get_exception_x0n6w6_k$();
                this._this__u8e3s4__1.listener_1.networkError_14g2pl_k$(e_0);
                this.set_state_a96kl8_k$(6);
                continue $sm;
              } else {
                throw this.get_exception_x0n6w6_k$();
              }
            }

            break;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            this.set_exceptionState_s9sevl_k$(5);
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
  function WsProtocol(webSocketConnection, listener) {
    this.webSocketConnection_1 = webSocketConnection;
    this.listener_1 = listener;
  }
  WsProtocol.prototype.get_webSocketConnection_wfcpqc_k$ = function () {
    return this.webSocketConnection_1;
  };
  WsProtocol.prototype.get_listener_9jgv43_k$ = function () {
    return this.listener_1;
  };
  WsProtocol.prototype.toByteString_863knp_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonByteString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.network.ws.WsProtocol.toByteString.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    writeAny(tmp0__anonymous__q1qw7t, _this__u8e3s4);
    tmp$ret$0 = buffer.readByteString_nzt46n_k$();
    return tmp$ret$0;
  };
  WsProtocol.prototype.toUtf8_71hoab_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'com.apollographql.apollo3.api.json.buildJsonString' call
    // Inline function 'kotlin.contracts.contract' call
    var buffer = new Buffer();
    // Inline function 'com.apollographql.apollo3.network.ws.WsProtocol.toUtf8.<anonymous>' call
    var tmp0__anonymous__q1qw7t = new BufferedSinkJsonWriter(buffer, null);
    writeAny(tmp0__anonymous__q1qw7t, _this__u8e3s4);
    tmp$ret$0 = buffer.readUtf8_echivt_k$();
    return tmp$ret$0;
  };
  WsProtocol.prototype.toMessageMap_b3b2ir_k$ = function (_this__u8e3s4) {
    var tmp;
    try {
      var tmp_0 = get_AnyAdapter().fromJson_vznj7e_k$(new BufferedSourceJsonReader((new Buffer()).writeUtf8_688wup_k$(_this__u8e3s4)), Key_getInstance().get_Empty_i9b85g_k$());
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
  WsProtocol.prototype.sendMessageMapBinary_81gthc_k$ = function (messageMap) {
    this.webSocketConnection_1.send_xz408z_k$(this.toByteString_863knp_k$(messageMap));
  };
  WsProtocol.prototype.sendMessageMapText_kxw8k4_k$ = function (messageMap) {
    this.webSocketConnection_1.send_otccne_k$(this.toUtf8_71hoab_k$(messageMap));
  };
  WsProtocol.prototype.sendMessageMap_ghns0u_k$ = function (messageMap, frameType) {
    var tmp0_subject = frameType;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    if (tmp0 === 0) {
      this.sendMessageMapText_kxw8k4_k$(messageMap);
    } else if (tmp0 === 1) {
      this.sendMessageMapBinary_81gthc_k$(messageMap);
    }
  };
  WsProtocol.prototype.receiveMessageMap_wbkr4s_k$ = function ($cont) {
    var tmp = new $receiveMessageMapCOROUTINE$13(this, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WsProtocol.prototype.run_aaszm0_k$ = function ($cont) {
    var tmp = new $runCOROUTINE$14(this, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  WsProtocol.prototype.close_ymq55z_k$ = function () {
    this.webSocketConnection_1.close_ymq55z_k$();
  };
  var WsFrameType_Text_instance;
  var WsFrameType_Binary_instance;
  function values() {
    return [WsFrameType_Text_getInstance(), WsFrameType_Binary_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Text':
        return WsFrameType_Text_getInstance();
      case 'Binary':
        return WsFrameType_Binary_getInstance();
      default:
        WsFrameType_initEntries();
        THROW_ISE();
        break;
    }
  }
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
  function WsFrameType_Binary_getInstance() {
    WsFrameType_initEntries();
    return WsFrameType_Binary_instance;
  }
  function Message() {
  }
  function Event() {
  }
  function OperationResponse(id, payload) {
    this.id_1 = id;
    this.payload_1 = payload;
  }
  OperationResponse.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  OperationResponse.prototype.get_payload_bqtt23_k$ = function () {
    return this.payload_1;
  };
  function OperationError(id, payload) {
    this.id_1 = id;
    this.payload_1 = payload;
  }
  OperationError.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  OperationError.prototype.get_payload_bqtt23_k$ = function () {
    return this.payload_1;
  };
  function OperationComplete(id) {
    this.id_1 = id;
  }
  OperationComplete.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  function GeneralError(payload) {
    this.payload_1 = payload;
    this.id_1 = null;
  }
  GeneralError.prototype.get_payload_bqtt23_k$ = function () {
    return this.payload_1;
  };
  GeneralError.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  function NetworkError(cause) {
    this.cause_1 = cause;
    this.id_1 = null;
  }
  NetworkError.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  NetworkError.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  function StartOperation(request) {
    this.request_1 = request;
  }
  StartOperation.prototype.get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
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
    this.request_1 = request;
  }
  StopOperation.prototype.get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  function get_defaultDispatcher() {
    init_properties_dispatchers_kt_bj4odk();
    return defaultDispatcher;
  }
  var defaultDispatcher;
  function failOnNativeIfLegacyMemoryManager() {
    init_properties_dispatchers_kt_bj4odk();
  }
  function CloseableSingleThreadDispatcher() {
    this.coroutineDispatcher_1 = get_defaultDispatcher();
  }
  CloseableSingleThreadDispatcher.prototype.get_coroutineDispatcher_vpa8ju_k$ = function () {
    return this.coroutineDispatcher_1;
  };
  CloseableSingleThreadDispatcher.prototype.close_ymq55z_k$ = function () {
  };
  var properties_initialized_dispatchers_kt_v9bzng;
  function init_properties_dispatchers_kt_bj4odk() {
    if (properties_initialized_dispatchers_kt_v9bzng) {
    } else {
      properties_initialized_dispatchers_kt_v9bzng = true;
      defaultDispatcher = Dispatchers_getInstance().get_Default_goqax4_k$();
    }
  }
  function _get_connectTimeoutMillis__uhefde($this) {
    return $this.connectTimeoutMillis_1;
  }
  function _get_readTimeoutMillis__94esgw($this) {
    return $this.readTimeoutMillis_1;
  }
  function DefaultHttpEngine_init_$Init$(timeoutMillis, $this) {
    DefaultHttpEngine.call($this, timeoutMillis, timeoutMillis);
    return $this;
  }
  function DefaultHttpEngine_init_$Create$(timeoutMillis) {
    return DefaultHttpEngine_init_$Init$(timeoutMillis, Object.create(DefaultHttpEngine.prototype));
  }
  function DefaultHttpEngine_init_$Init$_0(timeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      timeoutMillis = new Long(60000, 0);
    DefaultHttpEngine_init_$Init$(timeoutMillis, $this);
    return $this;
  }
  function DefaultHttpEngine_init_$Create$_0(timeoutMillis, $mask0, $marker) {
    return DefaultHttpEngine_init_$Init$_0(timeoutMillis, $mask0, $marker, Object.create(DefaultHttpEngine.prototype));
  }
  function _get_client__j03y3k($this) {
    return $this.client_1;
  }
  function DefaultHttpEngine$client$lambda$lambda(this$0) {
    return function ($this$install) {
      $this$install.set_connectTimeoutMillis_agbf3q_k$(this$0.connectTimeoutMillis_1);
      $this$install.set_socketTimeoutMillis_nggir1_k$(this$0.readTimeoutMillis_1);
      return Unit_getInstance();
    };
  }
  function DefaultHttpEngine$client$lambda(this$0) {
    return function ($this$HttpClient) {
      $this$HttpClient.set_expectSuccess_k3nqik_k$(false);
      var tmp = Plugin_getInstance();
      $this$HttpClient.install_851ey0_k$(tmp, DefaultHttpEngine$client$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$15(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
  }
  $executeCOROUTINE$15.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.tmp2_request0__1 = this._this__u8e3s4__1.client_1;
            var tmp_1 = this;
            tmp_1.tmp3_request1__1 = this.request_1.get_url_18iuii_k$();
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.tmp3_request1__1);
            var tmp0_subject = this.request_1.get_method_gl8esq_k$();
            var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
            var tmp_3;
            switch (tmp0) {
              case 0:
                tmp_3 = Companion_getInstance_5().get_Get_18jsxf_k$();
                break;
              case 1:
                tmp_3 = Companion_getInstance_5().get_Post_wo83k9_k$();
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            tmp0_apply.set_method_32z5od_k$(tmp_3);
            var tmp0_forEach = this.request_1.get_headers_ef25jx_k$();
            var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              header(tmp0_apply, element.get_name_woqyms_k$(), element.get_value_j01efc_k$());
            }

            var tmp1_safe_receiver = this.request_1.get_body_wojkyz_k$();
            if (tmp1_safe_receiver == null)
              null;
            else {
              header(tmp0_apply, HttpHeaders_getInstance().get_ContentType_z1j0sq_k$(), tmp1_safe_receiver.get_contentType_7git4a_k$());
              var buffer = new Buffer();
              tmp1_safe_receiver.writeTo_258rns_k$(buffer);
              var tmp0_setBody = buffer.readUtf8_echivt_k$();
              var tmp0_subject_0 = tmp0_setBody;
              if (tmp0_subject_0 == null) {
                tmp0_apply.set_body_slzaj6_k$(NullBody_getInstance());
                var tmp_4 = JsType_getInstance();
                var tmp_5 = PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$();
                var tmp_6;
                try {
                  tmp_6 = createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_7;
                  if ($p instanceof Error) {
                    tmp_7 = null;
                  } else {
                    throw $p;
                  }
                  tmp_6 = tmp_7;
                }
                tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_4, tmp_5, tmp_6));
              } else {
                if (tmp0_subject_0 instanceof OutgoingContent) {
                  tmp0_apply.set_body_slzaj6_k$(tmp0_setBody);
                  tmp0_apply.set_bodyType_oab65z_k$(null);
                } else {
                  tmp0_apply.set_body_slzaj6_k$(tmp0_setBody);
                  var tmp_8 = JsType_getInstance();
                  var tmp_9 = PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$();
                  var tmp_10;
                  try {
                    tmp_10 = createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false);
                  } catch ($p) {
                    var tmp_11;
                    if ($p instanceof Error) {
                      tmp_11 = null;
                    } else {
                      throw $p;
                    }
                    tmp_10 = tmp_11;
                  }
                  tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_8, tmp_9, tmp_10));
                }
              }
            }

            ;
            tmp_2.tmp1_request2__1 = tmp0_apply;
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_request2__1, this.tmp2_request0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response3__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            var tmp_12 = this.response3__1.get_call_wojxrb_k$();
            var tmp_13 = JsType_getInstance();
            var tmp_14 = PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$();
            var tmp_15;
            try {
              tmp_15 = createKType(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), arrayOf([]), false);
            } catch ($p) {
              var tmp_16;
              if ($p instanceof Error) {
                tmp_16 = null;
              } else {
                throw $p;
              }
              tmp_15 = tmp_16;
            }

            suspendResult = tmp_12.bodyNullable_ld5qr1_k$(typeInfoImpl(tmp_13, tmp_14, tmp_15), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseByteArray = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            var responseBufferedSource = (new Buffer()).write_3dsjb8_k$(responseByteArray);
            var tmp_17 = (new Builder_2(this.response3__1.get_status_jnf6d7_k$().get_value_j01efc_k$())).body_j4v2yf_k$(responseBufferedSource);
            var tmp5_map = flattenEntries(this.response3__1.get_headers_ef25jx_k$());
            var tmp4_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp5_map, 10));
            var tmp0_iterator_0 = tmp5_map.iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator_0.next_20eer_k$();
              tmp4_mapTo.add_1j60pz_k$(new HttpHeader(item.get_first_irdx8n_k$(), item.get_second_jf7fjx_k$()));
            }

            return tmp_17.addHeaders_y6idf8_k$(tmp4_mapTo).build_1k0s4u_k$();
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_18 = this.get_exception_x0n6w6_k$();
            if (tmp_18 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var tmp_19 = this.get_exception_x0n6w6_k$();
              if (tmp_19 instanceof Error) {
                var t = this.get_exception_x0n6w6_k$();
                throw new ApolloNetworkException(t.message, t);
              } else {
                throw this.get_exception_x0n6w6_k$();
              }
            }

            break;
          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            this.set_exceptionState_s9sevl_k$(4);
            return Unit_getInstance();
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
  function DefaultHttpEngine(connectTimeoutMillis, readTimeoutMillis) {
    this.connectTimeoutMillis_1 = connectTimeoutMillis;
    this.readTimeoutMillis_1 = readTimeoutMillis;
    this.disposed_1 = false;
    var tmp = this;
    var tmp_0 = Js_getInstance();
    tmp.client_1 = HttpClient(tmp_0, DefaultHttpEngine$client$lambda(this));
  }
  DefaultHttpEngine.prototype.set_disposed_tiiabd_k$ = function (_set____db54di) {
    this.disposed_1 = _set____db54di;
  };
  DefaultHttpEngine.prototype.get_disposed_r356he_k$ = function () {
    return this.disposed_1;
  };
  DefaultHttpEngine.prototype.execute_rwq3fc_k$ = function (request, $cont) {
    var tmp = new $executeCOROUTINE$15(this, request, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  DefaultHttpEngine.prototype.dispose_3n44we_k$ = function () {
    if (!this.disposed_1) {
      this.client_1.close_ymq55z_k$();
      this.disposed_1 = true;
    }
  };
  function open($this, url, headers, $cont) {
    var tmp = new $openCOROUTINE$16($this, url, headers, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = headers.names_1q9mbs_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.createWebSocket.<anonymous>' call
      tmp$ret$0 = equals(element, 'sec-websocket-protocol', true);
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
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
    var tmp2_mapNotNullTo = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = protocolHeaderNames.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.createWebSocket.<anonymous>' call
      tmp$ret$3 = headers.getAll_9rlpue_k$(element_0);
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp2_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    tmp$ret$5 = tmp2_mapNotNullTo;
    tmp$ret$6 = tmp$ret$5;
    var tmp3_toTypedArray = flatten(tmp$ret$6);
    tmp$ret$7 = copyToArray(tmp3_toTypedArray);
    var protocols = tmp$ret$7;
    var tmp;
    if (PlatformUtils_getInstance().get_IS_NODE_myvmya_k$()) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new DefaultWebSocketEngine$createWebSocket$headers_capturingHack$1();
      headers.forEach_arwel4_k$(DefaultWebSocketEngine$createWebSocket$lambda(headers_capturingHack));
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
    cancellable.initCancellability_sh6jkn_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.awaitConnection.<anonymous>' call
      if (cancellable.get_isCancelled_trk8pu_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = DefaultWebSocketEngine$awaitConnection$lambda(cancellable, _this__u8e3s4, $this);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.invokeOnCancellation_yygv6h_k$(DefaultWebSocketEngine$awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.getResult_clfhg3_k$();
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
    tmp0_apply.append_ssq29y_k$(tmp.stringify(_this__u8e3s4, tmp$ret$2));
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
          $messageChannel.trySend_3hclq4_k$(data);
          tmp_0 = Unit_getInstance();
        } else {
          throw UnsupportedOperationException_init_$Create$('' + getKClassFromExpression(data).get_simpleName_r6f8py_k$() + ' is currently unsupported');
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function DefaultWebSocketEngine$open$lambda_0($messageChannel) {
    return function (it) {
      return $messageChannel.close$default_jao18g_k$(null, 1, null);
    };
  }
  function DefaultWebSocketEngine$open$5($messageChannel, $socket) {
    this.$messageChannel_1 = $messageChannel;
    this.$socket_1 = $socket;
  }
  DefaultWebSocketEngine$open$5.prototype.receive_c4p3rx_k$ = function ($cont) {
    return this.$messageChannel_1.receive_ihhf9g_k$($cont);
  };
  DefaultWebSocketEngine$open$5.prototype.send_xz408z_k$ = function (data) {
    this.$socket_1.send(new Uint8Array(toTypedArray(data.toByteArray_qczt2u_k$())));
  };
  DefaultWebSocketEngine$open$5.prototype.send_otccne_k$ = function (string) {
    this.$socket_1.send(string);
  };
  DefaultWebSocketEngine$open$5.prototype.close_ymq55z_k$ = function () {
    this.$socket_1.close(toShort(get_CLOSE_NORMAL()));
    this.$messageChannel_1.close$default_jao18g_k$(null, 1, null);
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
        $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp2_resumeWithException = IllegalStateException_init_$Create$(asString(event, this$0));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp1_failure = Companion_getInstance_3();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
        $cancellable.resumeWith_s3a3yh_k$(tmp$ret$2);
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
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.url_1 = url;
    this.headers_1 = headers;
  }
  $openCOROUTINE$16.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp0_apply = URLBuilder(this.url_1);
            var tmp0_subject = this.url_1.get_protocol_mv93kx_k$();
            var tmp_1;
            if (tmp0_subject.equals(Companion_getInstance_6().get_HTTPS_iai1lu_k$())) {
              tmp_1 = Companion_getInstance_6().get_WSS_18jhiq_k$();
            } else if (tmp0_subject.equals(Companion_getInstance_6().get_HTTP_wo2evl_k$())) {
              tmp_1 = Companion_getInstance_6().get_WS_kntod7_k$();
            } else if (tmp0_subject.equals(Companion_getInstance_6().get_WS_kntod7_k$()) ? true : tmp0_subject.equals(Companion_getInstance_6().get_WSS_18jhiq_k$())) {
              tmp_1 = this.url_1.get_protocol_mv93kx_k$();
            } else {
              throw UnsupportedOperationException_init_$Create$('SOCKS is not a supported protocol');
            }

            tmp0_apply.set_protocol_8j7ihg_k$(tmp_1);
            ;
            tmp_0.newUrl0__1 = tmp0_apply.build_1k0s4u_k$();
            this.set_state_a96kl8_k$(1);
            var tmp_2 = this.newUrl0__1.toString();
            var tmp2_build = Companion_getInstance_7();
            var tmp1_apply = HeadersBuilder_init_$Create$(0, 1, null);
            var tmp0_iterator = this.headers_1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              tmp1_apply.append_ptbgmx_k$(element.get_name_woqyms_k$(), element.get_value_j01efc_k$());
            }

            suspendResult = awaitConnection(createWebSocket(this._this__u8e3s4__1, tmp_2, tmp1_apply.build_1k0s4u_k$()), this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var socket = suspendResult;
            var tmp_3 = Factory_getInstance().get_UNLIMITED_eshsm0_k$();
            var messageChannel = new ChannelWrapper(Channel$default(tmp_3, null, null, 6, null));
            socket.onmessage = DefaultWebSocketEngine$open$lambda(messageChannel);
            socket.onclose = DefaultWebSocketEngine$open$lambda_0(messageChannel);
            return new DefaultWebSocketEngine$open$5(messageChannel, socket);
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
  function DefaultWebSocketEngine() {
  }
  DefaultWebSocketEngine.prototype.open_775z3k_k$ = function (url, headers, $cont) {
    return open(this, Url(url), headers, $cont);
  };
  DefaultWebSocketEngine.prototype.open_53yeqq_k$ = function (url, headers, $cont) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(headers.get_size_woubt6_k$());
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = headers.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'com.apollographql.apollo3.network.ws.DefaultWebSocketEngine.open.<anonymous>' call
      tmp$ret$1 = new HttpHeader(item.get_key_18j28a_k$(), item.get_value_j01efc_k$());
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    return this.open_775z3k_k$(url, tmp$ret$3, $cont);
  };
  //region block: post-declaration
  AutoPersistedQueryInfo.prototype.get_ge4w64_k$ = get;
  AutoPersistedQueryInfo.prototype.fold_oiritn_k$ = fold;
  AutoPersistedQueryInfo.prototype.minusKey_3qgl28_k$ = minusKey;
  AutoPersistedQueryInfo.prototype.plus_r8myed_k$ = plus_1;
  ConcurrencyInfo.prototype.get_ge4w64_k$ = get;
  ConcurrencyInfo.prototype.fold_oiritn_k$ = fold;
  ConcurrencyInfo.prototype.minusKey_3qgl28_k$ = minusKey;
  ConcurrencyInfo.prototype.plus_r8myed_k$ = plus_1;
  ChannelWrapper.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  ChannelWrapper.prototype.cancel$default_bm1z3z_k$ = cancel$default_1;
  ChannelWrapper.prototype.close$default_jao18g_k$ = close$default;
  HeadersInterceptor.prototype.dispose_3n44we_k$ = dispose;
  HttpInfo.prototype.get_ge4w64_k$ = get;
  HttpInfo.prototype.fold_oiritn_k$ = fold;
  HttpInfo.prototype.minusKey_3qgl28_k$ = minusKey;
  HttpInfo.prototype.plus_r8myed_k$ = plus_1;
  EngineInterceptor.prototype.dispose_3n44we_k$ = dispose;
  DefaultWebSocketEngine.prototype.open$default_i76nlg_k$ = open$default;
  DefaultWebSocketEngine.prototype.open$default_42g6jo_k$ = open$default_0;
  //endregion
  //region block: init
  CLOSE_NORMAL = 1000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Builder_3;
  //endregion
  return _;
}));
